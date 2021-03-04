import { VariableType } from 'common-spectrum/lib/types';

interface DataType {
  x: number[];
  y: number[];
}

export function getInfo({ x, y }: DataType) {
  let x0 = { x: x[0], y: y[0] };
  let y0 = { x: x[0], y: y[0] };
  let max = { x: x[0], y: y[0] };
  let power: DataType = { x, y: [] };
  for (let i = 0; i < x.length; i++) {
    if (Math.abs(y[i]) < Math.abs(y0.y)) {
      y0.x = x[i];
      y0.y = y[i];
    }
    if (Math.abs(x[i]) < Math.abs(x0.x)) {
      x0.x = x[i];
      x0.y = y[i];
    }
    power.y.push(x[i] * y[i]);
    if (x[i] * y[i] < max.x * max.y) {
      max.x = x[i];
      max.y = y[i];
    }
  }
  return { x0, y0, max, power };
}

const units: Record<string, string> = {
  C: 'F',
  I: 'A',
  V: 'V',
  R: 'Ohm',
  G: 'S',
  Q: 'C',
  F: 'Hz',
  T: 's',
};
export function appendUnits(
  data: Record<string, VariableType>,
  knownUnits: Record<string, string> = {},
): Record<string, VariableType> {
  for (const key in data) {
    let label = data[key].label.trim();
    const isDens = /dens/.exec(label);

    // The variable already has a default unit
    if (knownUnits[label]) {
      data[key].units = knownUnits[label];
    }

    // Infer the variables units based on the name
    else {
      const unit = units[label[0].toUpperCase()] || undefined;
      if (unit) {
        data[key].units = isDens !== null ? `${unit}/mm` : unit;
      }
    }

    // Replaces density for dens
    if (isDens) {
      label = label.replace(
        /(?<name>.+)(?<separator>_|\s)density/,
        '$<name>$<separator>dens',
      );
    }

    const labelUnits = data[key].units ? ` [${data[key].units as string}]` : '';
    data[key].label = label + labelUnits;
  }
  return data;
}
