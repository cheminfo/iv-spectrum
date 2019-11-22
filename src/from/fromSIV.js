import { Spectrum } from "../Spectrum";

export default function fromSIV(content) {
  let allLines = content.split(/[\r\n]+/);
  let sampleMeta = parseS(allLines.filter(line => line.match(/X S_/)));
  let instrumentMeta = parseV(allLines.filter(line => line.match(/X V_/)));
  let date = parseDate(allLines.filter(line => line.match(/X d_t/))[0]);

  let parts = content.split("WAVES	");
  let spectra = [];
  for (let part of parts) {
    let lines = part.split(/[\r\n]+/);
    let ys = lines
      .filter(line => line.match(/^[\t 0-9.eE-]+$/))
      .map(line => Number(line));
    if (ys.length < 10) continue;

    let kind = lines[0].trim();
    let metaLines = lines
      .filter(line => line.match(/^X /))
      .map(line => line.substring(2));
    let axis = parseScale(metaLines[0], ys.length);

    if (!axis.x || axis.x.unit !== "V") {
      console.log("Unknown X axis:", axis.kind, axis.unit);
      continue;
    }
    if (!axis.y || axis.y.unit !== "A") {
      console.log("Unknown Y axis:", axis.kind, axis.unit);
      continue;
    }
    // let note = parseNote(metaLines[1]);
    let xs = axis.x.values;
    let data = {
      x: xs,
      y: ys
    };

    let meta = {
      ...sampleMeta,
      date,
      experiment: kind,
      ...instrumentMeta
    };
    spectra.push(new Spectrum(data, meta));
  }
  return spectra;
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
  result.unit = parts[4].replace(/"/g, "");
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
