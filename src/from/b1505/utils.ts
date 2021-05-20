import { Analysis } from 'common-spectrum';
import { VariableType } from 'common-spectrum/lib/types';

import type { Options } from './index';

function getDensities(label: string): [string, boolean] {
  const isDens = /dens/.exec(label);
  if (isDens) {
    return [
      label.replace(
        /(?<name>.+)(?<separator>_|\s)density/,
        '$<name>$<separator>dens',
      ),
      true,
    ];
  } else {
    return [label, false];
  }
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
    const [densLabel, isDens] = getDensities(label);

    // The variable already has a default unit
    if (knownUnits[label]) {
      data[key].units = knownUnits[label];
    }

    // Infer the variables units based on the name
    else {
      const unit = units[label[0].toUpperCase()] || undefined;
      if (unit) {
        data[key].units = isDens ? `${unit}/mm` : unit;
      }
    }

    // Replaces density for dens
    if (isDens) {
      label = densLabel;
    }

    const labelUnits = data[key].units ? ` [${data[key].units as string}]` : '';
    data[key].label = label + labelUnits;
  }
  return data;
}

export function getLabels(analysis: Analysis): Options {
  const { meta = {}, variables } = analysis.spectra[0];
  const [xLabel] = getDensities(
    meta['Output.Graph.XAxis.Data'] || variables.x.label,
  );
  const [yLabel] = getDensities(
    meta['Output.Graph.YAxis.Data'].split(',')[0].trim() || variables.y.label,
  );
  const scale =
    meta['Output.Graph.YAxis.Scale'].split(',')[0].trim().toLowerCase() ===
    'linear'
      ? 'linear'
      : 'log';
  return { xLabel, yLabel, scale };
}
