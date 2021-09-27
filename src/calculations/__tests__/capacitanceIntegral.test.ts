import { readFileSync } from 'fs';
import { join } from 'path';

import {
  fromB1505,
  fromCapacitance,
  fromMOSCapacitance,
} from '../../from/b1505';
import { capacitanceIntegral } from '../capacitanceIntegral';

const basicFilename = '../../../testFiles/B1505/Capacitance/high_voltage.csv';
describe('Capacitance integral on high voltage', () => {
  it('Response object', () => {
    const analyses = fromB1505(
      readFileSync(join(__dirname, basicFilename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'Vd',
        xUnits: 'V',
        yLabel: 'C_dens',
        yUnits: 'F/mm',
      });
      if (spectrum) {
        const res = capacitanceIntegral(spectrum);
        expect(res?.integral).toBeCloseTo(2.1483e-11, 10);
      } else {
        expect(spectrum).not.toBeNull();
      }
    }
  });

  it('Auto save', () => {
    const analyses = fromCapacitance(
      readFileSync(join(__dirname, basicFilename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'Vd',
        xUnits: 'V',
        yLabel: 'C_dens',
        yUnits: 'F/mm',
      });
      expect(spectrum?.meta?.capacitanceIntegral).not.toBeUndefined();
      const res = JSON.parse(spectrum?.meta?.capacitanceIntegral ?? '');
      expect(res?.integral).toBeCloseTo(2.1483e-11, 10);
    }
  });
});

const mosFilename = '../../../testFiles/B1505/Capacitance/mos_cap.csv';
describe('Capacitance integral on MOSFET', () => {
  it('Response object', () => {
    const analyses = fromB1505(
      readFileSync(join(__dirname, mosFilename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'VBias',
        xUnits: 'V',
        yLabel: 'C_dens',
        yUnits: 'F/mm',
      });
      if (spectrum) {
        const res = capacitanceIntegral(spectrum);
        expect(res?.integral).toBeCloseTo(1.3615e-8, 8);
      } else {
        expect(spectrum).not.toBeNull();
      }
    }
  });

  it('Auto save', () => {
    const analyses = fromMOSCapacitance(
      readFileSync(join(__dirname, mosFilename), 'latin1'),
    );
    for (const analysis of analyses) {
      const spectrum = analysis.getXYSpectrum({
        xLabel: 'VBias',
        xUnits: 'V',
        yLabel: 'C_dens',
        yUnits: 'F/mm',
      });
      expect(spectrum?.meta?.capacitanceIntegral).not.toBeUndefined();
      const res = JSON.parse(spectrum?.meta?.capacitanceIntegral ?? '');
      expect(res?.integral).toBeCloseTo(1.3615e-8, 8);
    }
  });
});
