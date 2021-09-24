import type { SpectrumType } from 'common-spectrum/lib/types';

import { IntegralOptions, IntegralResult } from './types';

export function capacitanceIntegral(
  spectrum: SpectrumType,
  options: IntegralOptions = {},
): IntegralResult {
  const x = spectrum.variables.x.data as number[];
  const y = spectrum.variables.y.data as number[];

  const { fromIndex = 0, toIndex = x.length - 1 } = options;

  // Uniform grid trapezoidal rule integration
  const dx = x[1] - x[0];
  let sum = 0;
  for (let i = fromIndex + 1; i <= toIndex - 1; i++) {
    sum += y[i];
  }
  const integral = dx * (sum + (y[fromIndex] + y[toIndex]) / 2);
  return { integral, fromIndex, toIndex };
}
