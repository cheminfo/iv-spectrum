import { Analysis } from 'common-spectrum';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import fit from 'ml-savitzky-golay';

import { ResistanceOptions, Result } from './types';

interface DiodeResult extends Result {
  forwardVoltage?: number;
  onVoltage?: number;
}

export function diodeOnResistance(
  analysis: Analysis,
  options: ResistanceOptions = {},
): DiodeResult | null {
  const { delta = 1e-2, autoSave = false } = options;
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

  let Von = { x: 0, y: Infinity };
  let Vf = { x: 0, found: false };

  let xRes = [];
  let yRes = [];
  let xStart = Infinity;

  for (let i = 0; i < y.length; i++) {
    if (dy[i] > delta) {
      xStart = Math.min(xStart, i);
      xRes.push(x[i]);
      yRes.push(y[i]);
    }

    const absY = Math.abs(y[i]);
    if (Von.y > absY) {
      Von = { x: x[i], y: absY };
    }

    if (!Vf.found && y[i] >= 0.1) {
      Vf = { x: x[i], found: true };
    }
  }

  const regression = new SimpleLinearRegression(xRes, yRes);
  const score = regression.score(xRes, yRes);
  const response = {
    resistanceOn: 1 / regression.slope,
    score,
    toIndex: xStart,
    fromIndex: xStart + xRes.length,
    Vf: Vf.found ? Vf.x : undefined,
    Von: Von.x,
  };

  if (autoSave) {
    const stringResp = JSON.stringify(response);
    if (!spectrum.meta) {
      spectrum.meta = { resistanceOn: stringResp };
    } else {
      spectrum.meta.resistanceOn = stringResp;
    }
  }
  return response;
}
