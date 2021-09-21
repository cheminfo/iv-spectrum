import { readFileSync } from 'fs';
import { join } from 'path';

import { fromB1505, fromIV, fromOutput } from '../../from/b1505';
import { diodeOnResistance } from '../diodeOnResistance';
import { transistorOnResistance } from '../transistorOnResistance';

describe('Ron transistor', () => {
  it('Response object', () => {
    const filename = '../../../testFiles/B1505/Output/output.csv';
    const analyses = fromB1505(
      readFileSync(join(__dirname, filename), 'latin1'),
    );
    for (const analysis of analyses) {
      const res = transistorOnResistance(analysis);
      expect(res?.resistanceOn).toBeCloseTo(20.49, 2);
      expect(res?.score.r2).toBeCloseTo(0.977, 2);
    }
  });

  it('Auto save', () => {
    const filename = '../../../testFiles/B1505/Output/output.csv';
    const analyses = fromOutput(
      readFileSync(join(__dirname, filename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'Vd',
        xUnits: 'V',
        yLabel: 'Id_dens',
        yUnits: 'A/mm',
      });
      expect(spectrum?.meta?.resistanceOn).not.toBeUndefined();
      const res = JSON.parse(spectrum?.meta?.resistanceOn ?? '');
      expect(res?.resistanceOn).toBeCloseTo(20.49, 2);
      expect(res?.score.r2).toBeCloseTo(0.977, 2);
    }
  });
});

describe('Ron diode', () => {
  it('Response object', () => {
    const filename = '../../../testFiles/B1505/IV/sweep_diode.csv';
    const analyses = fromB1505(
      readFileSync(join(__dirname, filename), 'latin1'),
    );
    for (const analysis of analyses) {
      const res = diodeOnResistance(analysis);
      expect(res?.resistanceOn).toBeCloseTo(20.819, 2);
      expect(res?.score.r2).toBeCloseTo(0.992, 2);
      expect(res?.Vf).toBeCloseTo(3.05, 2);
      expect(res?.Von).toBeCloseTo(0, 2);
    }
  });

  it('Auto save', () => {
    const filename = '../../../testFiles/B1505/IV/sweep_diode.csv';
    const analyses = fromIV(readFileSync(join(__dirname, filename), 'latin1'));
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'Vd',
        xUnits: 'V',
        yLabel: 'Id_dens',
        yUnits: 'A/mm',
      });
      expect(spectrum?.meta?.resistanceOn).not.toBeUndefined();
      const res = JSON.parse(spectrum?.meta?.resistanceOn ?? '');
      expect(res?.resistanceOn).toBeCloseTo(20.819, 2);
      expect(res?.score.r2).toBeCloseTo(0.992, 2);
      expect(res?.Vf).toBeCloseTo(3.05, 2);
      expect(res?.Von).toBeCloseTo(0, 2);
    }
  });
});
