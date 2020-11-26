import { Analysis } from 'common-spectrum';

export function fromSIV(content: string) {
  const analysis = new Analysis();

  const allLines = content.split(/[\r\n]+/);
  const sampleMeta = parseS(allLines.filter((line) => /X S_/.exec(line)));
  const instrumentMeta = parseV(allLines.filter((line) => /X V_/.exec(line)));
  const date = parseDate(allLines.filter((line) => /X d_t/.exec(line))[0]);

  const parts = content.split('WAVES\t');

  for (const part of parts) {
    const lines = part.split(/[\r\n]+/);
    const ys = lines
      .filter((line) => /^[\t 0-9.eE-]+$/.exec(line))
      .map((line) => Number(line));
    if (ys.length < 10) continue;

    const kind = lines[0].trim();
    const metaLines = lines
      .filter((line) => /^X /.exec(line))
      .map((line) => line.substring(2));

    const axis = parseScale(metaLines[0], ys.length);

    if (axis.x === undefined) {
      // eslint-disable-next-line no-console
      console.log('Unknown X axis:', axis.kind, axis.unit);
      continue;
    }
    if (axis.y === undefined || axis.y.unit !== 'A') {
      // eslint-disable-next-line no-console
      console.log('Unknown Y axis:', axis.kind, axis.unit);
      continue;
    }

    // const note = parseNote(metaLines[1]);
    const xs = axis.x.values;
    const data = {
      x: xs,
      y: ys,
    };

    const meta = {
      ...sampleMeta,
      date,
      experiment: kind,
      ...instrumentMeta,
    };
    analysis.pushSpectrum(
      {
        x: {
          type: 'independent',
          label: axis.x.kind,
          unit: axis.x.unit,
          data: data.x,
        },
        y: {
          type: 'dependent',
          label: axis.y.kind,
          unit: axis.y.unit,
          data: data.y,
        },
      },
      { dataType: 'IV spectrum', title: '', meta },
    );
  }
  return analysis;
}

function parseDate(line: string) {
  const dateString = line.replace('X d_t=', '').trim().replace(/"/g, '');
  return new Date(dateString);
}

function parseScale(line: string, nbValues: number) {
  let result = {};
  const parts = line.replace(/ ([xy]) /g, ',$1,').split('; ');

  for (const part of parts) {
    const parsedPart = parseScalePart(part, nbValues);
    result[parsedPart.axis] = parsedPart;
  }
  return result;
}

function parseS(lines: string[]) {
  let result = {};
  for (const line of lines) {
    let key = line.replace(/X ._([^=]*)=(.*)/, '$1').trim();
    key = getFieldName(key);
    let value = line.replace(/X ._([^=]*)=(.*)/, '$2').trim();
    value = value.replace(/^"(.*)"$/, '$1');
    if (!isNaN(value)) value = Number(value);
    result[key] = value;
  }
  return result;
}

function parseV(lines: string[]) {
  let result = {};
  for (const line of lines) {
    let key = line.replace(/X ._([^=]*)=(.*)/, '$1').trim();
    key = getFieldName(key);
    let value = line.replace(/X ._([^=]*)=(.*)/, '$2').trim();
    value = value.replace(/^"(.*)"$/, '$1');
    if (!isNaN(value)) value = Number(value);
    result[key] = value;
  }
  return result;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function parseNote(line: string) {
  line = line.replace(/"/g, '').replace(/\\r/g, ';');
  const parts = line.split(/ *[;,] */);
  let result = {};
  for (const part of parts) {
    const semiColumn = part.indexOf(':');
    let key = part.substring(0, semiColumn);
    key = getFieldName(key);
    let value = part.substring(semiColumn + 1).trim();
    value = value.replace(/^"(.*)"$/, '$1');
    if (!isNaN(Number(value))) value = Number(value);
    if (!key) continue;
    result[key] = value;
  }
}

function parseScalePart(scale: string, nbValues: number) {
  const parts = scale.split(',');
  let result = {};
  result.axis = parts[1];
  result.kind = parts[0];
  result.unit = parts[4].replace(/"/g, '');
  if (result.kind === 'SetScale/P') {
    let from = Number(parts[2]);
    const step = Number(parts[3]);
    const values = [];
    for (const i = 0; i < nbValues; i++) {
      values.push(from);
      from += step;
      result.values = values;
    }
  }
  return result;
}

function getFieldName(key: string) {
  const mapping = {
    CE: 'counterElectrodeType',
    Calibrationfile: 'calibrationFile',
    Username: 'username',
    WE: 'workingElectrodeGlass',
    cellname: 'cellname',
    electrolyte: 'electrolyteZ960',
    layer: 'semicondutorLayer',
    specification: 'remarks',
    temp: 'workingTemperature',
    type: 'typeOfCell',
    AR: 'cellActiveArea',
    IT: 'powerIn',
  };
  return mapping[key] || key;
}
