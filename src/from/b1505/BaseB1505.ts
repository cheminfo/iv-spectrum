import { Analysis } from 'common-spectrum';
import { appendedParser } from 'ndim-parser';

import { appendUnits } from './utils';

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

  private parseMeta(meta: Record<string, string>): Record<string, string> {
    if (!meta) return {};

    let ans: Record<string, string> = {};
    for (const key in meta) {
      ans[key] = meta[key]
        .split(',')
        .filter((val) => val !== '')
        .join(',');
    }

    // add default kind scale
    const { xLabel, yLabel, scale } = this;
    ans['default.xLabel'] = xLabel;
    ans['default.yLabel'] = yLabel;
    ans['default.scale'] = scale;

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

    for (const { data, meta } of series) {
      const parsedMeta = this.parseMeta(meta);
      const knownUnits = this.metaUnits(meta);

      let analysis = new Analysis();
      analysis.pushSpectrum(appendUnits(data, knownUnits), {
        title:
          parsedMeta.Remarks ||
          parsedMeta['TestRecord.Remarks'] ||
          parsedMeta['Device ID'] ||
          parsedMeta['Setup title'] ||
          parsedMeta.SetupTitle,
        meta: parsedMeta,
      });
      analyses.push(analysis);
    }

    return analyses;
  }
}
