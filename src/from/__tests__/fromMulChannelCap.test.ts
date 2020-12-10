import { readFileSync } from 'fs';
import { join } from 'path';

import { fromMulChannelCap } from '../fromMulChannelCap';

test('fromMulChannelCap', () => {
  let csv = readFileSync(
    join(__dirname, '../../../testFiles/capacitanceStudy.csv'),
    'latin1',
  );
  let analysis = fromMulChannelCap(csv);
  let spectrum = analysis.getXYSpectrum({ index: 0 });

  expect(spectrum.variables.x.data).toHaveLength(6);
  expect(spectrum.variables.x.label).toStrictEqual('Vd');

  expect(spectrum.variables.y.data).toHaveLength(6);
  expect(spectrum.variables.y.label).toStrictEqual('Id');

  expect(spectrum.title).toBe('Vg=7V');
});

test('several files load', () => {
  let csv = readFileSync(
    join(__dirname, '../../../testFiles/capacitanceStudy.csv'),
    'latin1',
  );
  let analysis = fromMulChannelCap(csv);
  expect(analysis.spectra).toHaveLength(1);
  analysis = fromMulChannelCap(csv, analysis);
  expect(analysis.spectra).toHaveLength(2);
});
