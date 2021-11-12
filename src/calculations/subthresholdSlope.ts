import { SpectrumType } from 'common-spectrum/lib/types';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import fit from 'ml-savitzky-golay';

import { SlopeResult, SlopeOptions } from './types';

export function subthresholdSlope(
  spectrum: SpectrumType,
  options: SlopeOptions = {},
): SlopeResult | null {
  const { delta = 0.1 } = options;
  let { fromIndex, toIndex } = options;

  const x = spectrum.variables.x.data as number[];
  const dx = Math.abs(x[0] - x[1]);
  if (dx === 0) return null;

  const y = spectrum.variables.y.data.map((val) => Math.log10(val)) as number[];
  const dy = fit(y, dx, { derivative: 1 });
  const dyThreshold = Math.max(...dy) * (1 - delta);

  if (fromIndex === undefined) {
    const limit = toIndex === undefined ? dy.length : toIndex;
    for (let i = 0; i < limit && fromIndex === undefined; i++) {
      if (dy[i] >= dyThreshold) fromIndex = i;
    }
  }
  if (fromIndex === undefined) return null;

  if (toIndex === undefined) {
    for (let i = dy.length - 1; i > fromIndex && toIndex === undefined; i--) {
      if (dy[i] >= dyThreshold) toIndex = i;
    }
  }
  if (toIndex === undefined) return null;

  let xRes: number[] = [];
  let yRes: number[] = [];
  for (let i = fromIndex; i < toIndex; i++) {
    xRes.push(x[i]);
    yRes.push(y[i]);
  }

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
