import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '..';

test('fromJcamp', () => {
  let jcamp = readFileSync(join(__dirname, '../../testFiles/test.jdx'), 'utf8');
  let analysis = fromJcamp(jcamp);
  let spectrum = analysis.spectra[0];
  expect(spectrum.variables.x.data).toHaveLength(120);
  expect(spectrum.variables.y.data).toHaveLength(120);
  expect(spectrum.meta.workingTemperature).toBe(298);
});
