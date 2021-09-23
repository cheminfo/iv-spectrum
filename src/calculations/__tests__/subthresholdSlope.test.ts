import { readFileSync } from 'fs';
import { join } from 'path';

import { fromB1505, fromTransfer } from '../../from/b1505';
import { subthresholdSlope } from '../subthresholdSlope';

const filename = '../../../testFiles/B1505/Transfer/noff_trigate.csv';
describe('ss transfer', () => {
  it('Response object', () => {
    const analyses = fromB1505(
      readFileSync(join(__dirname, filename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'Vg',
        xUnits: 'V',
        yLabel: 'Id_dens',
        yUnits: 'A/mm',
      });
      if (spectrum) {
        const res = subthresholdSlope(spectrum);
        expect(res?.slope).toBeCloseTo(0.11, 2);
        expect(res?.score.r2).toBeCloseTo(0.985, 2);
      } else {
        expect(spectrum).not.toBeNull();
      }
    }
  });

  it('Auto save', () => {
    const analyses = fromTransfer(
      readFileSync(join(__dirname, filename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'Vg',
        xUnits: 'V',
        yLabel: 'Id_dens',
        yUnits: 'A/mm',
      });
      expect(spectrum?.meta?.subthresholdSlope).not.toBeUndefined();
      const res = JSON.parse(spectrum?.meta?.subthresholdSlope ?? '');
      expect(res?.slope).toBeCloseTo(0.11, 2);
      expect(res?.score.r2).toBeCloseTo(0.985, 2);
    }
  });
});
