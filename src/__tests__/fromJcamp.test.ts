import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from 'common-spectrum';

test('fromJcamp', () => {
  const jcamp = readFileSync(
    join(__dirname, '../../testFiles/test.jdx'),
    'utf8',
  );
  const analysis = fromJcamp(jcamp);
  const spectrum = analysis.spectra[0];
  expect(spectrum.variables.x.data).toHaveLength(120);
  expect(spectrum.variables.y.data).toHaveLength(120);
  expect(spectrum.meta?.workingTemperature).toBe(298);
});
