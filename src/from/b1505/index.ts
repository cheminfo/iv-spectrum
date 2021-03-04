import BaseB1505 from './BaseB1505';

interface Options {
  xLabel: string;
  yLabel: string;
  scale: 'linear' | 'log';
}
export function fromB1505(text: string, { xLabel, yLabel, scale }: Options) {
  return new BaseB1505(xLabel, yLabel, scale).parseText(text);
}

export function fromBreakdown(text: string) {
  return new BaseB1505('Vd', 'Id_dens', 'log').parseText(text);
}

export function fromTransfer(text: string) {
  return new BaseB1505('Vg', 'Id_dens', 'log').parseText(text);
}

export function fromOutput(text: string) {
  return new BaseB1505('Vd', 'Id_dens', 'linear').parseText(text);
}

export function fromIV(text: string) {
  return new BaseB1505('Vd', 'Id_dens', 'linear').parseText(text);
}

export function fromCapacitance(text: string) {
  return new BaseB1505('Vd', 'C_dens', 'linear').parseText(text);
}

export function fromMOSCapacitance(text: string) {
  return new BaseB1505('VBias', 'C_dens', 'linear').parseText(text);
}
