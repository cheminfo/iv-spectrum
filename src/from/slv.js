import { Spectrum } from "../Spectrum";

export default fromSLV;

function parseContent(content) {
  let allLines = content.split(/[\r\n]+/);
  let sampleMeta = parseS(allLines.filter(line => line.match(/X S_/)));
  let instrumentMeta = parseV(allLines.filter(line => line.match(/X V_/)));
  let date = parseDate(allLines.filter(line => line.match(/X d_t/))[0]);

  let parsed = [];
  API.createData("content", content);
  let parts = content.split("WAVES	");

  for (let part of parts) {
    let lines = part.split(/[\r\n]+/);
    let ys = lines
      .filter(line => line.match(/^[\t 0-9.eE-]+$/))
      .map(line => Number(line));
    if (ys.length < 10) continue;
    let analysis = {};
    analysis.kind = lines[0].trim();
    analyses.push(analysis);
    let metaLines = lines
      .filter(line => line.match(/^X /))
      .map(line => line.substring(2));
    let axis = parseScale(metaLines[0], ys.length);
    let note = parseNote(metaLines[1]);
    let xs = axis.x.values;
    analysis.xUnit = axis.x.unit;
    analysis.yUnit = axis.y.unit;
    let data = {
      x: xs,
      y: ys
    };
    analysis.chart = { data };
    analysis.info = getInfo(data);
    analysis.jcamp = convertToJcamp.fromJson(data, {
      title: sampleMeta.cellname,
      owner: "cheminfo",
      origin: "manually",
      type: "IV SPECTRUM",
      xUnit: "V",
      yUnit: "A",
      info: {
        ...sampleMeta,
        ...instrumentMeta,
        ...date
      }
    });
  }

  // console.log(content);
}

function parseDate(line) {
  let dateString = line
    .replace("X d_t=", "")
    .trim()
    .replace(/"/g, "");
  let date = new Date(dateString);
  return date;
}

function parseScale(line, nbValues) {
  let result = {};
  line = line.replace(/ ([xy]) /g, ",$1,");
  let parts = line.split("; ");
  for (let part of parts) {
    let parsedPart = parseScalePart(part, nbValues);
    result[parsedPart.axis] = parsedPart;
  }
  return result;
}

function parseS(lines) {
  let result = {};
  for (let line of lines) {
    let key = line.replace(/X ._([^=]*)=(.*)/, "$1").trim();
    key = getFieldName(key);
    let value = line.replace(/X ._([^=]*)=(.*)/, "$2").trim();
    value = value.replace(/^"(.*)"$/, "$1");
    if (!isNaN(value)) value = Number(value);
    result[key] = value;
  }
  return result;
}

function parseV(lines) {
  let result = {};
  for (let line of lines) {
    let key = line.replace(/X ._([^=]*)=(.*)/, "$1").trim();
    key = getFieldName(key);
    let value = line.replace(/X ._([^=]*)=(.*)/, "$2").trim();
    value = value.replace(/^"(.*)"$/, "$1");
    if (!isNaN(value)) value = Number(value);
    result[key] = value;
  }
  return result;
}

function parseNote(line) {
  line = line.replace(/"/g, "").replace(/\\r/g, ";");
  let parts = line.split(/ *[;,] */);
  let result = {};
  for (let part of parts) {
    let semiColumn = part.indexOf(":");
    let key = part.substring(0, semiColumn);
    key = getFieldName(key);
    let value = part.substring(semiColumn + 1).trim();
    value = value.replace(/^"(.*)"$/, "$1");
    if (!isNaN(value)) value = Number(value);
    if (!key) continue;
    result[key] = value;
  }
  console.log(result);
}

function parseMeta(lines, options = {}) {
  let result = {};
  for (let line of lines) {
  }
}

function parseScalePart(scale, nbValues) {
  let parts = scale.split(",");
  let result = {};
  result.axis = parts[1];
  result.kind = parts[0];
  result.unit = parts[4];
  if (result.kind === "SetScale/P") {
    let from = Number(parts[2]);
    let step = Number(parts[3]);
    let values = [];
    for (let i = 0; i < nbValues; i++) {
      values.push(from);
      from += step;
      result.values = values;
    }
  }
  return result;
}

function getFieldName(key) {
  const mapping = {
    CE: "counterElectrodeType",
    Calibrationfile: "calibrationFile",
    Username: "username",
    WE: "workingElectrodeGlass",
    cellname: "cellname",
    electrolyte: "electrolyteZ960",
    layer: "semicondutorLayer",
    specification: "remarks",
    temp: "workingTemperature",
    type: "typeOfCell",
    AR: "cellActiveArea",
    IT: "powerIn"
  };
  return mapping[key] || key;
}

function getInfo(data) {
  const { x, y } = data;
  console.log({ x, y });
  let x0 = { x: x[0], y: y[0] };
  let y0 = { x: x[0], y: y[0] };
  let max = { x: x[0], y: y[0] };
  let power = { x, y: [] };
  for (let i = 0; i < x.length; i++) {
    if (Math.abs(y[i]) < Math.abs(y0.y)) {
      y0.x = x[i];
      y0.y = y[i];
    }
    if (Math.abs(x[i]) < Math.abs(x0.x)) {
      x0.x = x[i];
      x0.y = y[i];
    }
    power.y.push(x[i] * y[i]);
    if (x[i] * y[i] < max.x * max.y) {
      max.x = x[i];
      max.y = y[i];
    }
  }
  return { x0, y0, max, power };
}
