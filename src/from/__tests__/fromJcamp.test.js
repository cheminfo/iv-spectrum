import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../fromJcamp';

test('fromJcamp', () => {
  let jcamp = readFileSync(
    join(__dirname, '../../../testFiles/test.jdx'),
    'utf8',
  );
  let result = fromJcamp(jcamp);
  expect(result.x).toHaveLength(120);
  expect(result.y).toHaveLength(120);
  expect(result.meta.workingTemperature).toBe(298);
});
