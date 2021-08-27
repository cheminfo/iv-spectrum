import { Analysis } from 'common-spectrum';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import fit from 'ml-savitzky-golay';

import { ResistanceOptions, Result } from './types';

export function transistorOnResistance(
  analysis: Analysis,
  options: ResistanceOptions = {},
): Result | null {
  const { delta = 1e-2 } = options;
  const spectrum = analysis.getXYSpectrum({
    xLabel: 'Vd',
    xUnits: 'V',
    yLabel: 'Id_dens',
    yUnits: 'A/mm',
  });
  if (!spectrum) return null;

  const x = spectrum.variables.x.data as number[];
  const dx = Math.abs(x[0] - x[1]);

  const y = spectrum.variables.y.data as number[];
  const dy = fit(y, dx, { derivative: 1 });

  let xRes = [];
  let yRes = [];
  let xStart = Infinity;

  let converged = false;
  for (let i = 0; i < y.length - 1 && !converged; i++) {
    if (Math.abs(dy[i + 1] - dy[i]) > delta) {
      converged = true;
    } else if (x[i] > 0) {
      xStart = Math.min(xStart, i);
      xRes.push(x[i]);
      yRes.push(y[i]);
    }
  }

  const regression = new SimpleLinearRegression(xRes, yRes);
  const score = regression.score(xRes, yRes);
  return {
    resistanceOn: 1 / regression.slope,
    score,
    toIndex: xStart,
    fromIndex: xStart + xRes.length,
  };
}
