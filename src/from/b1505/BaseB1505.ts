import { Analysis } from 'common-spectrum';
import { appendedParser } from 'ndim-parser';

import { appendUnits, toNumber } from '../../utils';

const enum varHeadersKeys {
  name = 'Name',
  units = 'Units',
}
type Scales = 'linear' | 'log';

export default class BaseB1505 {
  private readonly xLabel: string;
  private readonly yLabel: string;
  private readonly scale: Scales;

  private readonly metaVarHeaders = [
    'Analysis.Setup.Vector.Graph.XAxis',
    'Analysis.Setup.Vector.Graph.YAxis',
    'Analysis.Setup.Vector.List.Datum',
    'Function.User',
  ];

  public constructor(xLabel: string, yLabel: string, scale: Scales) {
    this.xLabel = xLabel;
    this.yLabel = yLabel;
    this.scale = scale;
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

    // add default kind scale
    const { xLabel, yLabel, scale } = this;
    ans.defaults = { xLabel, yLabel, scale };

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

  public parseText(text: string) {
    const series = appendedParser(text);
    let analyses = [];

    for (const serie of series) {
      const { data, meta } = serie;
      const parsedMeta = this.parseMeta(meta);
      const knownUnits = this.metaUnits(meta);

      let analysis = new Analysis();
      analysis.pushSpectrum(appendUnits(data, knownUnits), {
        title:
          parsedMeta['TestRecord.Remarks'] ||
          parsedMeta['Setup title'] ||
          parsedMeta.SetupTitle,
        meta: parsedMeta,
      });
      analyses.push(analysis);
    }

    return analyses;
  }
}
