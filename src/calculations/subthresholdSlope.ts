import { SpectrumType } from 'common-spectrum/lib/types';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import fit from 'ml-savitzky-golay';

import { SlopeOptions, SlopeResult } from './types';

export function subthresholdSlope(
  spectrum: SpectrumType,
  options: SlopeOptions = {},
): SlopeResult | null {
  const { delta = 1e-2 } = options;
  let { fromIndex, toIndex } = options;

  const x = spectrum.variables.x.data as number[];
  const dx = Math.abs(x[0] - x[1]);
  if (dx === 0) return null;

  const y = spectrum.variables.y.data.map((val) => Math.log10(val)) as number[];
  const dy = fit(y, dx, { derivative: 1 });

  if (fromIndex === undefined) {
    let maxDiffIndex = 0;
    let maxDiff = -1;
    for (let i = 0; i < dy.length - 1; i++) {
      const diff = Math.abs(dy[i] - dy[i + 1]);
      if (diff > maxDiff) {
        maxDiff = diff;
        maxDiffIndex = i;
      }
    }

    if (maxDiff !== -1) {
      fromIndex = maxDiffIndex;
    }
  }

  let xRes = [];
  let yRes = [];

  for (
    let j = fromIndex ?? 0;
    j < y.length - 1 && (toIndex === undefined || j < toIndex);
    j++
  ) {
    if (Math.abs(dy[j + 1] - dy[j]) > delta) {
      xRes.push(x[j]);
      yRes.push(y[j]);
    } else {
      toIndex = j;
    }
  }

  // Checks convergence
  if (toIndex === undefined || fromIndex === undefined) return null;

  const regression = new SimpleLinearRegression(xRes, yRes);
  const score = regression.score(xRes, yRes);
  const response = {
    slope: 1 / regression.slope,
    score,
    toIndex,
    fromIndex,
  };

  return response;
}
