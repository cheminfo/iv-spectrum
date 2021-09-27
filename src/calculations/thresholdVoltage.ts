import type { SpectrumType } from 'common-spectrum/lib/types';

import { ThresholdVoltageOptions, ThresholdVoltageResult } from './types';

export function thresholdVoltage(
  spectrum: SpectrumType,
  options: ThresholdVoltageOptions = {},
): ThresholdVoltageResult | null {
  const { threshold = 1e-6 } = options;

  const x = spectrum.variables.x.data as number[];
  const y = spectrum.variables.y.data as number[];

  // Search for the first point where the x value is above the threshold
  let result = {
    index: -1,
    value: x[0],
  };
  let converged = false;
  for (let i = 0; i < x.length && !converged; i++) {
    if (y[i] > threshold) {
      result = {
        index: i,
        value: x[i],
      };
      converged = true;
    }
  }
  return converged ? result : null;
}
