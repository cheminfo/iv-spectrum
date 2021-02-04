import { Analysis } from 'common-spectrum';
import { ndParse } from 'ndim-parser';

import { appendUnits, toNumber } from '../../utils';

const enum varHeadersKeys {
  name = 'Name',
  units = 'Units',
}

export default class BaseB1505 {
  private readonly xLabel: string;
  private readonly yLabel: string;
  private readonly isTagged: boolean;
  private readonly metaVarHeaders = [
    'Analysis.Setup.Vector.Graph.XAxis',
    'Analysis.Setup.Vector.Graph.YAxis',
    'Analysis.Setup.Vector.List.Datum',
    'Function.User',
  ];

  public constructor(xLabel: string, yLabel: string, isTagged: boolean) {
    this.xLabel = xLabel;
    this.yLabel = yLabel;
    this.isTagged = isTagged;
  }

  private parseMeta(meta: Record<string, string>): Record<string, unknown> {
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

  private metaUnits(meta: Record<string, string>) {
    let knownUnits: Record<string, string> = {};
    for (const key of this.metaVarHeaders) {
      const keyName = `${key}.${varHeadersKeys.name}`;
      const keyUnits = `${key}.${varHeadersKeys.units}`;
      if (meta[keyName] && meta[keyUnits]) {
        const names = meta[keyName].split(',');
        const units = meta[keyUnits].split(',');
        for (let index = 0; index < names.length; index++) {
          knownUnits[names[index]] = units[index];
        }
      }
    }
    return knownUnits;
  }

  private keyMap(keys: string[]) {
    return keys.map((key, index) => {
      if (key === this.xLabel) return 'x';
      if (key === this.yLabel) return 'y';
      return String.fromCharCode(65 + index);
    });
  }

  public parseText(text: string) {
    const keyMap = this.keyMap.bind(this);
    const { data, meta } = ndParse(text, { keyMap, isTagged: this.isTagged });
    const parsedMeta = this.parseMeta(meta);
    const knownUnits = this.metaUnits(meta);

    let analysis = new Analysis();
    analysis.pushSpectrum(appendUnits(data, knownUnits), {
      title: parsedMeta['Setup title'] || parsedMeta.SetupTitle,
      meta: parsedMeta,
    });

    return analysis;
  }
}
