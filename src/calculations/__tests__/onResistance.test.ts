import { readFileSync } from 'fs';
import { join } from 'path';

import { fromB1505 } from '../../from/b1505';
import { DispositiveType, onResistance } from '../onResistance';

test('Ron transistor', () => {
  const filename = '../../../testFiles/B1505/Output/output.csv';
  const analyses = fromB1505(readFileSync(join(__dirname, filename), 'latin1'));
  for (const analysis of analyses) {
    const res = onResistance(analysis);
    expect(res?.value).toBeCloseTo(20.49, 2);
    expect(res?.score).toBeCloseTo(0.977, 2);
  }
});

test('Ron diode', () => {
  const filename = '../../../testFiles/B1505/IV/sweep_diode.csv';
  const analyses = fromB1505(readFileSync(join(__dirname, filename), 'latin1'));
  for (const analysis of analyses) {
    const res = onResistance(analysis, { type: DispositiveType.DIODE });
    expect(res?.value).toBeCloseTo(20.819, 2);
    expect(res?.score).toBeCloseTo(0.992, 2);
    expect(res?.Vf).toBeCloseTo(3.05, 2);
    expect(res?.Von).toBeCloseTo(0, 2);
  }
});
