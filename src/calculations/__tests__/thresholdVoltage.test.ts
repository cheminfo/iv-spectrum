import { readFileSync } from 'fs';
import { join } from 'path';

import { fromB1505, fromTransfer } from '../../from/b1505';
import { thresholdVoltage } from '../thresholdVoltage';

describe('Vth breakdown', () => {
  it('Response object', () => {
    const filename = '../../../testFiles/B1505/Breakdown/breakdown.csv';
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
        const res = thresholdVoltage(spectrum);
        expect(res?.value).toBeCloseTo(-6, 2);
      } else {
        expect(spectrum).not.toBeNull();
      }
    }
  });
});

describe('Vth transfer', () => {
  it('Response object', () => {
    const filename = '../../../testFiles/B1505/Transfer/hemt_transfer.csv';
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
        const res = thresholdVoltage(spectrum);
        expect(res?.value).toBeCloseTo(-1.2, 2);
      } else {
        expect(spectrum).not.toBeNull();
      }
    }
  });

  it('Auto save', () => {
    const filename = '../../../testFiles/B1505/Transfer/hemt_transfer.csv';
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
      expect(spectrum?.meta?.thresholdVoltage).not.toBeUndefined();
      const res = JSON.parse(spectrum?.meta?.thresholdVoltage ?? '');
      expect(res?.value).toBeCloseTo(-1.2, 2);
    }
  });
});
