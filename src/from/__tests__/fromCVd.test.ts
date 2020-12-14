import { readFileSync } from 'fs';
import { join } from 'path';

import { fromCVd } from '../fromCVd';

test('fromCVd', () => {
  let csv = readFileSync(
    join(__dirname, '../../../testFiles/Cdg-V.csv'),
    'latin1',
  );
  let analysis = fromCVd(csv);
  let spectrum = analysis.getXYSpectrum({ index: 0 });

  expect(spectrum.variables.x.data).toHaveLength(1001);
  expect(spectrum.variables.x.label).toStrictEqual('Vd');

  expect(spectrum.variables.y.data).toHaveLength(1001);
  expect(spectrum.variables.y.label).toStrictEqual('C');

  expect(spectrum.title).toBe('Cdg-V_high_voltage');
});