import BaseB1505 from './BaseB1505';

export function fromBreakdown(text: string) {
  return new BaseB1505('Vd', 'Id_dens', true, 'log').parseText(text);
}

export function fromHEMTBreakdown(text: string) {
  return new BaseB1505('Vd', 'Id_density', true, 'log').parseText(text);
}

export function fromTransfer(text: string) {
  return new BaseB1505('Vg', 'Id_dens', true, 'log').parseText(text);
}

export function fromNoffTransfer(text: string) {
  return new BaseB1505('Vg', 'Id_density', true, 'log').parseText(text);
}

export function fromOutput(text: string) {
  return new BaseB1505('Vd', 'Id_dens', true, 'linear').parseText(text);
}

export function fromNoffOutput(text: string) {
  return new BaseB1505('Vd', 'Id_density', true, 'linear').parseText(text);
}

export function fromIV(text: string) {
  return new BaseB1505('Vd', 'Id_dens', true, 'linear').parseText(text);
}

export function fromCapacitance(text: string) {
  return new BaseB1505('Vd', 'C_dens', false, 'linear').parseText(text);
}

export function fromMOSCapacitance(text: string) {
  return new BaseB1505('VBias', 'C_density', true, 'linear').parseText(text);
}
