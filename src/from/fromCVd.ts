import { Analysis } from 'common-spectrum';
import { ndParse } from 'ndim-parser';

import { appendUnits, toNumber } from '../utils';

function parseMeta(meta: Record<string, string>): Record<string, unknown> {
  if (!meta) return {};

  let ans: Record<string, unknown> = {};
  for (const key in meta) {
    const listValues = meta[key].split(',');
    const value =
      listValues.length === 1
        ? toNumber(listValues[0])
        : listValues.map((v) => toNumber(v));
    ans[key] = value;
  }

  return ans;
}

function keyMapper(keys: string[]) {
  return keys.map((key, index) => {
    if (key === 'Vd') return 'x';
    if (key === 'C') return 'y';
    return String.fromCharCode(65 + index);
  });
}

export function fromCVd(text: string) {
  const { data, meta } = ndParse(text, keyMapper);
  const parsedMeta = parseMeta(meta);

  let analysis = new Analysis();
  analysis.pushSpectrum(appendUnits(data), {
    title: parsedMeta['Setup title'],
    meta: parsedMeta,
  });

  return analysis;
}
