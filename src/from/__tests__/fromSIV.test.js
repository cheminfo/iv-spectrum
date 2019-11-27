import { readFileSync } from 'fs';
import { join } from 'path';

import { fromSIV } from '../fromSIV';

test('fromSIV', () => {
  let siv = readFileSync(
    join(__dirname, '../../../testFiles/test.sIv'),
    'utf8',
  );
  let spectra = fromSIV(siv);

  let experiments = spectra.map((spectrum) => spectrum.meta.experiment);
  expect(experiments).toStrictEqual([
    'DarkCurrent',
    'PhotoCurrent0',
    'PhotoCurrent2',
    'PhotoCurrent4',
  ]);
  let spectrum = spectra[0];
  expect(spectrum.x).toHaveLength(120);
  expect(spectrum.y).toHaveLength(120);
  expect(Object.keys(spectrum.meta)).toHaveLength(18);
});
