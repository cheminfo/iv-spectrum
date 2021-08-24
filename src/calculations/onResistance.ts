import { Analysis } from 'common-spectrum';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import fit from 'ml-savitzky-golay';

export interface Result {
  value: number;
  score: number;
  index1: number;
  index2: number;
  Von?: number;
  Vf?: number;
}
export interface ResistanceOptions {
  delta?: number;
  type?: DispositiveType;
}
export const enum DispositiveType {
  TRANSISTOR = 'transistor',
  DIODE = 'diode',
}

export function onResistance(
  analysis: Analysis,
  options: ResistanceOptions = {},
): Result | null {
  const { delta = 1e-2, type = DispositiveType.TRANSISTOR } = options;
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

  switch (type) {
    case DispositiveType.TRANSISTOR: {
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
      break;
    }
    case DispositiveType.DIODE: {
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
      break;
    }
    default: {
      throw new Error(`Unknown type ${type as string}`);
    }
  }

  const regression = new SimpleLinearRegression(xRes, yRes);
  const score = regression.score(xRes, yRes);
  return {
    value: 1 / regression.slope,
    score: score.r2,
    index1: xStart,
    index2: xStart + xRes.length,
    Vf: Vf.found ? Vf.x : undefined,
    Von: type === DispositiveType.DIODE ? Von.x : undefined,
  };
}
