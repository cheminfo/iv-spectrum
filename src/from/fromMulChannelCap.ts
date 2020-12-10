import { Analysis } from 'common-spectrum';
import { ndParse } from 'ndim-parser';

import { appendUnits, toNumber } from '../utils';

function parseMeta(meta: Record<string, string>): Record<string, unknown> {
  if (!meta) return {};

  let ans: Record<string, unknown> = {};
  for (const key in meta) {
    const line = [key, ...meta[key].split(',')];
    for (let index = 0; index < line.length; index += 2) {
      if (line[index]) ans[line[index]] = toNumber(line[index + 1]);
    }
  }

  return ans;
}

function keyMapper(keys: string[]) {
  return keys.map((key, index) => {
    if (key === 'Vd') return 'x';
    if (key === 'Id') return 'y';
    if (key === 'Vg') return 'g';
    return String.fromCharCode(65 + index);
  });
}

export function fromMulChannelCap(text: string, analysis?: Analysis) {
  const { data, meta } = ndParse(text, keyMapper);

  const min = Object.values(data).reduce(
    (prev, curr) => Math.min(curr.data.length, prev),
    Infinity,
  );

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      data[key].data.length = min;
    }
  }

  const vg = data.g.data[0];

  let result = analysis || new Analysis();
  result.pushSpectrum(appendUnits(data), {
    title: `Vg=${vg}V`,
    meta: { ...parseMeta(meta), Vg: vg },
  });

  return result;
}
