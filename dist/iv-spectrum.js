/**
 * iv-spectrum
 * @version v0.0.5
 * @link https://github.com/cheminfo/iv-spectrum#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CVSpectrum"] = factory();
	else
		root["CVSpectrum"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * In place modification of the 2 arrays to make X unique and sum the Y if X has the same value
 * @param xs
 * @param ys
 */

function uniqueX(xs, ys) {
  if (xs.length < 2) return;
  var current = xs[0];
  var counter = 0;

  for (var i = 1; i < xs.length; i++) {
    if (current !== xs[i]) {
      counter++;
      current = xs[i];
      xs[counter] = xs[i];

      if (i !== counter) {
        ys[counter] = 0;
      }
    }

    if (i !== counter) {
      ys[counter] += ys[i];
    }
  }

  xs.length = counter + 1;
  ys.length = counter + 1;
}

module.exports = uniqueX;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var convertToJcamp = __webpack_require__(3);

var jcampconverter = __webpack_require__(2);

function getAnnotations(spectrum) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    fillColor = "green",
    strokeColor = "red",
    creationFct
  } = options;
  const peaks = spectrum.peaks;
  if (!peaks) return [];
  let annotations = peaks.map(peak => {
    var annotation = {
      line: 1,
      type: "rect",
      strokeColor: strokeColor,
      strokeWidth: 0,
      fillColor: fillColor
    };

    if (creationFct) {
      creationFct(annotation, peak);
    }

    switch (spectrum.mode) {
      case ABSORBANCE:
        annotationAbsorbance(annotation, peak);
        break;

      case TRANSMITTANCE:
        annotationTransmittance(annotation, peak, 1);
        break;

      case PERCENT_TRANSMITTANCE:
        annotationTransmittance(annotation, peak, 100);
        break;
    }

    return annotation;
  });
  return annotations;
}

function annotationTransmittance(annotation, peak) {
  let factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  annotation.label = [{
    text: String(peak.wavelength),
    size: "12px",
    anchor: "middle",
    color: "red",
    position: {
      x: peak.wavelength,
      y: peak.transmittance * factor,
      dy: "23px"
    }
  }];
  annotation.position = [{
    x: peak.wavelength,
    y: peak.transmittance * factor,
    dy: "10px",
    dx: "-1px"
  }, {
    x: peak.wavelength,
    y: peak.transmittance * factor,
    dy: "5px",
    dx: "1px"
  }];
}

function annotationAbsorbance(annotation, peak) {
  annotation.label = [{
    text: String(peak.wavelength),
    size: "18px",
    anchor: "middle",
    color: "red",
    position: {
      x: peak.wavelength,
      y: peak.absorbance,
      dy: "-15px"
    }
  }];
  annotation.position = [{
    x: peak.wavelength,
    y: peak.absorbance,
    dy: "-10px",
    dx: "-1px"
  }, {
    x: peak.wavelength,
    y: peak.absorbance,
    dy: "-5px",
    dx: "1px"
  }];
}

function toJcamp(spectrum) {
  let meta = {
    // title: spectrum.sampleMeta.cellname,
    owner: "",
    origin: "",
    type: "IV curve",
    xUnit: "difference in electric potential [V]",
    yUnit: "intensity [A]",
    info: spectrum.meta
  };
  return convertToJcamp.fromJson(spectrum.data, meta);
}
/**
 * Class allowing manipulate one UV spectrum
 * @class spectrum
 * @param {object} [data={}] - object containing a spectrum
 * @param {Array} [data.x=[]] - voltage
 * @param {Array} [data.y=[]] - intensity
 */


class Spectrum {
  constructor() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: [],
      y: []
    };
    let meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.random();
    this.data = data;
  }

  getXLabel() {
    return "Voltage [V]";
  }

  getYLabel() {
    return "Intensity [A]";
  }

}

Spectrum.prototype.getAnnotations = function (options) {
  return getAnnotations(this, options);
};

Spectrum.prototype.getData = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    xFactor = 1,
    yFactor = 1
  } = options;
  return {
    x: this.data.x.map(x => x * xFactor),
    y: this.data.y.map(y => y * yFactor)
  };
};

Spectrum.prototype.toJcamp = function () {
  return toJcamp(this);
};

class Spectra {
  constructor() {
    this.data = [];
  }
  /**
   * Add a spectrum
   * @param {Spectrum} spectrum
   * @param {string} id
   * @param {object} [meta={}]
   */


  addSpectrum(spectrum, id) {
    let meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let index = this.getSpectrumIndex(id);
    if (index === undefined) index = this.data.length;
    this.data[index] = {
      spectrum,
      id,
      meta
    };
  }

  removeSpectrum(id) {
    let index = this.getSpectrumIndex(id);
    if (index === undefined) return undefined;
    return this.data.splice(index, 1);
  }

  setMeta(id, meta) {
    let index = this.getSpectrumIndex(id);
    if (index === undefined) return undefined;
    this.data[index].meta = meta;
  }

  getSpectrumIndex(id) {
    if (!id) return undefined;

    for (let i = 0; i < this.data.length; i++) {
      let spectrum = this.data[i];
      if (spectrum.id === id) return i;
    }

    return undefined;
  }

}

function fromSIV(content) {
  let allLines = content.split(/[\r\n]+/);
  let sampleMeta = parseS(allLines.filter(line => line.match(/X S_/)));
  let instrumentMeta = parseV(allLines.filter(line => line.match(/X V_/)));
  let date = parseDate(allLines.filter(line => line.match(/X d_t/))[0]);
  let parts = content.split('WAVES	');
  let spectra = [];
  console.log(parts);

  for (let part of parts) {
    let lines = part.split(/[\r\n]+/);
    console.log(lines.length);
    let ys = lines.filter(line => line.match(/^[\t 0-9.eE-]+$/)).map(line => Number(line));
    if (ys.length < 10) continue;
    let kind = lines[0].trim();
    let metaLines = lines.filter(line => line.match(/^X /)).map(line => line.substring(2));
    console.log(metaLines);
    let axis = parseScale(metaLines[0], ys.length);

    if (!axis.x || axis.x.unit !== 'V') {
      console.log('Unknown X axis:', axis.kind, axis.unit);
      continue;
    }

    if (!axis.y || axis.y.unit !== 'A') {
      console.log('Unknown Y axis:', axis.kind, axis.unit);
      continue;
    } // let note = parseNote(metaLines[1]);


    let xs = axis.x.values;
    let data = {
      x: xs,
      y: ys
    };

    let meta = _objectSpread({}, sampleMeta, {
      date,
      experiment: kind
    }, instrumentMeta);

    spectra.push(new Spectrum(data, meta));
  }

  return spectra;
}

function parseDate(line) {
  let dateString = line.replace('X d_t=', '').trim().replace(/"/g, '');
  let date = new Date(dateString);
  return date;
}

function parseScale(line, nbValues) {
  let result = {};
  line = line.replace(/ ([xy]) /g, ',$1,');
  let parts = line.split('; ');
  console.log('---------');
  console.log(parts);

  for (let part of parts) {
    let parsedPart = parseScalePart(part, nbValues);
    console.log(parsedPart);
    result[parsedPart.axis] = parsedPart;
  }

  return result;
}

function parseS(lines) {
  let result = {};

  for (let line of lines) {
    let key = line.replace(/X ._([^=]*)=(.*)/, '$1').trim();
    key = getFieldName(key);
    let value = line.replace(/X ._([^=]*)=(.*)/, '$2').trim();
    value = value.replace(/^"(.*)"$/, '$1');
    if (!isNaN(value)) value = Number(value);
    result[key] = value;
  }

  return result;
}

function parseV(lines) {
  let result = {};

  for (let line of lines) {
    let key = line.replace(/X ._([^=]*)=(.*)/, '$1').trim();
    key = getFieldName(key);
    let value = line.replace(/X ._([^=]*)=(.*)/, '$2').trim();
    value = value.replace(/^"(.*)"$/, '$1');
    if (!isNaN(value)) value = Number(value);
    result[key] = value;
  }

  return result;
}

function parseScalePart(scale, nbValues) {
  let parts = scale.split(',');
  let result = {};
  result.axis = parts[1];
  result.kind = parts[0];
  result.unit = parts[4].replace(/"/g, '');

  if (result.kind === 'SetScale/P') {
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
    IT: 'powerIn'
  };
  return mapping[key] || key;
}
/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Spectrum} - New class element with the given data
 */


function fromJcamp(jcamp) {
  const converted = jcampconverter.convert(jcamp, {
    xy: true,
    keepRecordsRegExp: /.*/,
    canonicDataLabels: false,
    dynamicTyping: true
  });
  let data = converted.spectra[0].data[0];
  let info = converted.info;
  let meta = {};

  for (let key of Object.keys(info).filter(key => key.startsWith("$"))) {
    meta[key.substr(1)] = info[key];
  }

  return new Spectrum(data, meta);
}

exports.Spectra = Spectra;
exports.Spectrum = Spectrum;
exports.fromJcamp = fromJcamp;
exports.fromSIV = fromSIV;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getConverter() {
  // the following RegExp can only be used for XYdata, some peakTables have values with a "E-5" ...
  const ntuplesSeparator = /[, \t]+/;
  const GC_MS_FIELDS = ['TIC', '.RIC', 'SCANNUMBER'];

  function convertToFloatArray(stringArray) {
    let floatArray = [];

    for (let i = 0; i < stringArray.length; i++) {
      floatArray.push(parseFloat(stringArray[i]));
    }

    return floatArray;
  }

  class Spectrum {}

  const defaultOptions = {
    keepRecordsRegExp: /^$/,
    canonicDataLabels: true,
    dynamicTyping: false,
    xy: false,
    withoutXY: false,
    chromatogram: false,
    keepSpectra: false,
    noContour: false,
    nbContourLevels: 7,
    noiseMultiplier: 5,
    profiling: false
  };

  function convert(jcamp, options) {
    options = Object.assign({}, defaultOptions, options);
    let wantXY = !options.withoutXY;
    let start = Date.now();
    let ntuples = {};
    let ldr, dataValue, ldrs;
    let position, endLine, infos;
    let result = {};
    result.profiling = options.profiling ? [] : false;
    result.logs = [];
    let spectra = [];
    result.spectra = spectra;
    result.info = {};
    let spectrum = new Spectrum();

    if (!(typeof jcamp === 'string')) {
      throw new TypeError('the JCAMP should be a string');
    }

    if (result.profiling) {
      result.profiling.push({
        action: 'Before split to LDRS',
        time: Date.now() - start
      });
    }

    ldrs = jcamp.split(/[\r\n]+##/);

    if (result.profiling) {
      result.profiling.push({
        action: 'Split to LDRS',
        time: Date.now() - start
      });
    }

    if (ldrs[0]) ldrs[0] = ldrs[0].replace(/^[\r\n ]*##/, '');

    for (let i = 0; i < ldrs.length; i++) {
      let dataLabel;
      ldr = ldrs[i]; // This is a new LDR

      position = ldr.indexOf('=');

      if (position > 0) {
        dataLabel = ldr.substring(0, position);
        dataValue = ldr.substring(position + 1).trim();
      } else {
        dataLabel = ldr;
        dataValue = '';
      }

      let canonicDataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();

      if (canonicDataLabel === 'DATATABLE') {
        endLine = dataValue.indexOf('\n');
        if (endLine === -1) endLine = dataValue.indexOf('\r');

        if (endLine > 0) {
          let xIndex = -1;
          let yIndex = -1; // ##DATA TABLE= (X++(I..I)), XYDATA
          // We need to find the variables

          infos = dataValue.substring(0, endLine).split(/[ ,;\t]+/);

          if (infos[0].indexOf('++') > 0) {
            let firstVariable = infos[0].replace(/.*\(([a-zA-Z0-9]+)\+\+.*/, '$1');
            let secondVariable = infos[0].replace(/.*\.\.([a-zA-Z0-9]+).*/, '$1');
            xIndex = ntuples.symbol.indexOf(firstVariable);
            yIndex = ntuples.symbol.indexOf(secondVariable);
          }

          if (xIndex === -1) xIndex = 0;
          if (yIndex === -1) yIndex = 0;

          if (ntuples.first) {
            if (ntuples.first.length > xIndex) {
              spectrum.firstX = ntuples.first[xIndex];
            }

            if (ntuples.first.length > yIndex) {
              spectrum.firstY = ntuples.first[yIndex];
            }
          }

          if (ntuples.last) {
            if (ntuples.last.length > xIndex) {
              spectrum.lastX = ntuples.last[xIndex];
            }

            if (ntuples.last.length > yIndex) {
              spectrum.lastY = ntuples.last[yIndex];
            }
          }

          if (ntuples.vardim && ntuples.vardim.length > xIndex) {
            spectrum.nbPoints = ntuples.vardim[xIndex];
          }

          if (ntuples.factor) {
            if (ntuples.factor.length > xIndex) {
              spectrum.xFactor = ntuples.factor[xIndex];
            }

            if (ntuples.factor.length > yIndex) {
              spectrum.yFactor = ntuples.factor[yIndex];
            }
          }

          if (ntuples.units) {
            if (ntuples.units.length > xIndex) {
              spectrum.xUnit = ntuples.units[xIndex];
            }

            if (ntuples.units.length > yIndex) {
              spectrum.yUnit = ntuples.units[yIndex];
            }
          }

          spectrum.datatable = infos[0];

          if (infos[1] && infos[1].indexOf('PEAKS') > -1) {
            canonicDataLabel = 'PEAKTABLE';
          } else if (infos[1] && (infos[1].indexOf('XYDATA') || infos[0].indexOf('++') > 0)) {
            canonicDataLabel = 'XYDATA';
            spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
          }
        }
      }

      if (canonicDataLabel === 'XYDATA') {
        if (wantXY) {
          prepareSpectrum(result, spectrum); // well apparently we should still consider it is a PEAK TABLE if there are no '++' after

          if (dataValue.match(/.*\+\+.*/)) {
            // ex: (X++(Y..Y))
            if (!spectrum.deltaX) {
              spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
            }

            fastParseXYData(spectrum, dataValue, result);
          } else {
            parsePeakTable(spectrum, dataValue, result);
          }

          spectra.push(spectrum);
          spectrum = new Spectrum();
        }

        continue;
      } else if (canonicDataLabel === 'PEAKTABLE') {
        if (wantXY) {
          prepareSpectrum(result, spectrum);
          parsePeakTable(spectrum, dataValue, result);
          spectra.push(spectrum);
          spectrum = new Spectrum();
        }

        continue;
      }

      if (canonicDataLabel === 'PEAKASSIGNMENTS') {
        if (wantXY) {
          if (dataValue.match(/.*(XYA).*/)) {
            // ex: (XYA)
            parseXYA(spectrum, dataValue);
          }

          spectra.push(spectrum);
          spectrum = new Spectrum();
        }

        continue;
      }

      if (canonicDataLabel === 'TITLE') {
        spectrum.title = dataValue;
      } else if (canonicDataLabel === 'DATATYPE') {
        spectrum.dataType = dataValue;

        if (dataValue.indexOf('nD') > -1) {
          result.twoD = true;
        }
      } else if (canonicDataLabel === 'NTUPLES') {
        if (dataValue.indexOf('nD') > -1) {
          result.twoD = true;
        }
      } else if (canonicDataLabel === 'XUNITS') {
        spectrum.xUnit = dataValue;
      } else if (canonicDataLabel === 'YUNITS') {
        spectrum.yUnit = dataValue;
      } else if (canonicDataLabel === 'FIRSTX') {
        spectrum.firstX = parseFloat(dataValue);
      } else if (canonicDataLabel === 'LASTX') {
        spectrum.lastX = parseFloat(dataValue);
      } else if (canonicDataLabel === 'FIRSTY') {
        spectrum.firstY = parseFloat(dataValue);
      } else if (canonicDataLabel === 'LASTY') {
        spectrum.lastY = parseFloat(dataValue);
      } else if (canonicDataLabel === 'NPOINTS') {
        spectrum.nbPoints = parseFloat(dataValue);
      } else if (canonicDataLabel === 'XFACTOR') {
        spectrum.xFactor = parseFloat(dataValue);
      } else if (canonicDataLabel === 'YFACTOR') {
        spectrum.yFactor = parseFloat(dataValue);
      } else if (canonicDataLabel === 'MAXX') {
        spectrum.maxX = parseFloat(dataValue);
      } else if (canonicDataLabel === 'MINX') {
        spectrum.minX = parseFloat(dataValue);
      } else if (canonicDataLabel === 'MAXY') {
        spectrum.maxY = parseFloat(dataValue);
      } else if (canonicDataLabel === 'MINY') {
        spectrum.minY = parseFloat(dataValue);
      } else if (canonicDataLabel === 'DELTAX') {
        spectrum.deltaX = parseFloat(dataValue);
      } else if (canonicDataLabel === '.OBSERVEFREQUENCY' || canonicDataLabel === '$SFO1') {
        if (!spectrum.observeFrequency) {
          spectrum.observeFrequency = parseFloat(dataValue);
        }
      } else if (canonicDataLabel === '.OBSERVENUCLEUS') {
        if (!spectrum.xType) {
          result.xType = dataValue.replace(/[^a-zA-Z0-9]/g, '');
        }
      } else if (canonicDataLabel === '$SFO2') {
        if (!result.indirectFrequency) {
          result.indirectFrequency = parseFloat(dataValue);
        }
      } else if (canonicDataLabel === '$OFFSET') {
        // OFFSET for Bruker spectra
        result.shiftOffsetNum = 0;

        if (!spectrum.shiftOffsetVal) {
          spectrum.shiftOffsetVal = parseFloat(dataValue);
        }
      } else if (canonicDataLabel === '$REFERENCEPOINT') {// OFFSET for Varian spectra
        // if we activate this part it does not work for ACD specmanager
        //         } else if (canonicDataLabel=='.SHIFTREFERENCE') {   // OFFSET FOR Bruker Spectra
        //                 var parts = dataValue.split(/ *, */);
        //                 result.shiftOffsetNum = parseInt(parts[2].trim());
        //                 spectrum.shiftOffsetVal = parseFloat(parts[3].trim());
      } else if (canonicDataLabel === 'VARNAME') {
        ntuples.varname = dataValue.split(ntuplesSeparator);
      } else if (canonicDataLabel === 'SYMBOL') {
        ntuples.symbol = dataValue.split(ntuplesSeparator);
      } else if (canonicDataLabel === 'VARTYPE') {
        ntuples.vartype = dataValue.split(ntuplesSeparator);
      } else if (canonicDataLabel === 'VARFORM') {
        ntuples.varform = dataValue.split(ntuplesSeparator);
      } else if (canonicDataLabel === 'VARDIM') {
        ntuples.vardim = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (canonicDataLabel === 'UNITS') {
        ntuples.units = dataValue.split(ntuplesSeparator);
      } else if (canonicDataLabel === 'FACTOR') {
        ntuples.factor = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (canonicDataLabel === 'FIRST') {
        ntuples.first = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (canonicDataLabel === 'LAST') {
        ntuples.last = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (canonicDataLabel === 'MIN') {
        ntuples.min = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (canonicDataLabel === 'MAX') {
        ntuples.max = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (canonicDataLabel === '.NUCLEUS') {
        if (result.twoD) {
          result.yType = dataValue.split(ntuplesSeparator)[0];
        }
      } else if (canonicDataLabel === 'PAGE') {
        spectrum.page = dataValue.trim();
        spectrum.pageValue = parseFloat(dataValue.replace(/^.*=/, ''));
        spectrum.pageSymbol = spectrum.page.replace(/[=].*/, '');
        let pageSymbolIndex = ntuples.symbol.indexOf(spectrum.pageSymbol);
        let unit = '';

        if (ntuples.units && ntuples.units[pageSymbolIndex]) {
          unit = ntuples.units[pageSymbolIndex];
        }

        if (result.indirectFrequency && unit !== 'PPM') {
          spectrum.pageValue /= result.indirectFrequency;
        }
      } else if (canonicDataLabel === 'RETENTIONTIME') {
        spectrum.pageValue = parseFloat(dataValue);
      } else if (isMSField(canonicDataLabel)) {
        spectrum[convertMSFieldToLabel(canonicDataLabel)] = dataValue;
      } else if (canonicDataLabel === 'SAMPLEDESCRIPTION') {
        spectrum.sampleDescription = dataValue;
      }

      if (canonicDataLabel.match(options.keepRecordsRegExp)) {
        let label = options.canonicDataLabels ? canonicDataLabel : dataLabel;
        let value = dataValue.trim();

        if (options.dynamicTyping && !isNaN(value)) {
          value = Number(value);
        }

        if (result.info[label]) {
          if (!Array.isArray(result.info[label])) {
            result.info[label] = [result.info[label]];
          }

          result.info[label].push(value);
        } else {
          result.info[label] = value;
        }
      }
    }

    if (result.profiling) {
      result.profiling.push({
        action: 'Finished parsing',
        time: Date.now() - start
      });
    }

    if (Object.keys(ntuples).length > 0) {
      let newNtuples = [];
      let keys = Object.keys(ntuples);

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let values = ntuples[key];

        for (let j = 0; j < values.length; j++) {
          if (!newNtuples[j]) newNtuples[j] = {};
          newNtuples[j][key] = values[j];
        }
      }

      result.ntuples = newNtuples;
    }

    if (result.twoD && wantXY) {
      add2D(result, options);

      if (result.profiling) {
        result.profiling.push({
          action: 'Finished countour plot calculation',
          time: Date.now() - start
        });
      }

      if (!options.keepSpectra) {
        delete result.spectra;
      }
    }

    if (options.chromatogram) {
      options.xy = true;
    }

    if (options.xy && wantXY) {
      // the spectraData should not be a oneD array but an object with x and y
      if (spectra.length > 0) {
        for (let i = 0; i < spectra.length; i++) {
          spectrum = spectra[i];

          if (spectrum.data.length > 0) {
            for (let j = 0; j < spectrum.data.length; j++) {
              let data = spectrum.data[j];
              let newData = {
                x: new Array(data.length / 2),
                y: new Array(data.length / 2)
              };

              for (let k = 0; k < data.length; k = k + 2) {
                newData.x[k / 2] = data[k];
                newData.y[k / 2] = data[k + 1];
              }

              spectrum.data[j] = newData;
            }
          }
        }
      }
    } // maybe it is a GC (HPLC) / MS. In this case we add a new format


    if (options.chromatogram) {
      if (result.spectra.length > 1) {
        complexChromatogram(result);
      } else {
        simpleChromatogram(result);
      }

      if (result.profiling) {
        result.profiling.push({
          action: 'Finished chromatogram calculation',
          time: Date.now() - start
        });
      }
    }

    if (result.profiling) {
      result.profiling.push({
        action: 'Total time',
        time: Date.now() - start
      });
    }

    return result;
  }

  function convertMSFieldToLabel(value) {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function isMSField(canonicDataLabel) {
    return GC_MS_FIELDS.indexOf(canonicDataLabel) !== -1;
  }

  function complexChromatogram(result) {
    let spectra = result.spectra;
    let length = spectra.length;
    let chromatogram = {
      times: new Array(length),
      series: {
        ms: {
          dimension: 2,
          data: new Array(length)
        }
      }
    };
    let existingGCMSFields = [];

    for (let i = 0; i < GC_MS_FIELDS.length; i++) {
      let label = convertMSFieldToLabel(GC_MS_FIELDS[i]);

      if (spectra[0][label]) {
        existingGCMSFields.push(label);
        chromatogram.series[label] = {
          dimension: 1,
          data: new Array(length)
        };
      }
    }

    for (let i = 0; i < length; i++) {
      let spectrum = spectra[i];
      chromatogram.times[i] = spectrum.pageValue;

      for (let j = 0; j < existingGCMSFields.length; j++) {
        chromatogram.series[existingGCMSFields[j]].data[i] = parseFloat(spectrum[existingGCMSFields[j]]);
      }

      if (spectrum.data) {
        chromatogram.series.ms.data[i] = [spectrum.data[0].x, spectrum.data[0].y];
      }
    }

    result.chromatogram = chromatogram;
  }

  function simpleChromatogram(result) {
    let data = result.spectra[0].data[0];
    result.chromatogram = {
      times: data.x.slice(),
      series: {
        intensity: {
          dimension: 1,
          data: data.y.slice()
        }
      }
    };
  }

  function prepareSpectrum(result, spectrum) {
    if (!spectrum.xFactor) spectrum.xFactor = 1;
    if (!spectrum.yFactor) spectrum.yFactor = 1;

    if (spectrum.observeFrequency) {
      if (spectrum.xUnit && spectrum.xUnit.toUpperCase() === 'HZ') {
        spectrum.xUnit = 'PPM';
        spectrum.xFactor = spectrum.xFactor / spectrum.observeFrequency;
        spectrum.firstX = spectrum.firstX / spectrum.observeFrequency;
        spectrum.lastX = spectrum.lastX / spectrum.observeFrequency;
        spectrum.deltaX = spectrum.deltaX / spectrum.observeFrequency;
      }
    }

    if (spectrum.shiftOffsetVal) {
      let shift = spectrum.firstX - spectrum.shiftOffsetVal;
      spectrum.firstX = spectrum.firstX - shift;
      spectrum.lastX = spectrum.lastX - shift;
    }
  }

  function getMedian(data) {
    data = data.sort(compareNumbers);
    let l = data.length;
    return data[Math.floor(l / 2)];
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  function convertTo3DZ(spectra) {
    let minZ = spectra[0].data[0][0];
    let maxZ = minZ;
    let ySize = spectra.length;
    let xSize = spectra[0].data[0].length / 2;
    let z = new Array(ySize);

    for (let i = 0; i < ySize; i++) {
      z[i] = new Array(xSize);
      let xVector = spectra[i].data[0];

      for (let j = 0; j < xSize; j++) {
        let value = xVector[j * 2 + 1];
        z[i][j] = value;
        if (value < minZ) minZ = value;
        if (value > maxZ) maxZ = value;
      }
    }

    const firstX = spectra[0].data[0][0];
    const lastX = spectra[0].data[0][spectra[0].data[0].length - 2]; // has to be -2 because it is a 1D array [x,y,x,y,...]

    const firstY = spectra[0].pageValue;
    const lastY = spectra[ySize - 1].pageValue; // Because the min / max value are the only information about the matrix if we invert
    // min and max we need to invert the array

    if (firstX > lastX) {
      for (let spectrum of z) {
        spectrum.reverse();
      }
    }

    if (firstY > lastY) {
      z.reverse();
    }

    return {
      z: z,
      minX: Math.min(firstX, lastX),
      maxX: Math.max(firstX, lastX),
      minY: Math.min(firstY, lastY),
      maxY: Math.max(firstY, lastY),
      minZ: minZ,
      maxZ: maxZ,
      noise: getMedian(z[0].map(Math.abs))
    };
  }

  function add2D(result, options) {
    let zData = convertTo3DZ(result.spectra);

    if (!options.noContour) {
      result.contourLines = generateContourLines(zData, options);
      delete zData.z;
    }

    result.minMax = zData;
  }

  function generateContourLines(zData, options) {
    let noise = zData.noise;
    let z = zData.z;
    let povarHeight0, povarHeight1, povarHeight2, povarHeight3;
    let isOver0, isOver1, isOver2, isOver3;
    let nbSubSpectra = z.length;
    let nbPovars = z[0].length;
    let pAx, pAy, pBx, pBy;
    let x0 = zData.minX;
    let xN = zData.maxX;
    let dx = (xN - x0) / (nbPovars - 1);
    let y0 = zData.minY;
    let yN = zData.maxY;
    let dy = (yN - y0) / (nbSubSpectra - 1);
    let minZ = zData.minZ;
    let maxZ = zData.maxZ; // System.out.prvarln('y0 '+y0+' yN '+yN);
    // -------------------------
    // Povars attribution
    //
    // 0----1
    // |  / |
    // | /  |
    // 2----3
    //
    // ---------------------d------

    let iter = options.nbContourLevels * 2;
    let contourLevels = new Array(iter);
    let lineZValue;

    for (let level = 0; level < iter; level++) {
      // multiply by 2 for positif and negatif
      let contourLevel = {};
      contourLevels[level] = contourLevel;
      let side = level % 2;
      let factor = (maxZ - options.noiseMultiplier * noise) * Math.exp((level >> 1) - options.nbContourLevels);

      if (side === 0) {
        lineZValue = factor + options.noiseMultiplier * noise;
      } else {
        lineZValue = 0 - factor - options.noiseMultiplier * noise;
      }

      let lines = [];
      contourLevel.zValue = lineZValue;
      contourLevel.lines = lines;
      if (lineZValue <= minZ || lineZValue >= maxZ) continue;

      for (let iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
        let subSpectra = z[iSubSpectra];
        let subSpectraAfter = z[iSubSpectra + 1];

        for (let povar = 0; povar < nbPovars - 1; povar++) {
          povarHeight0 = subSpectra[povar];
          povarHeight1 = subSpectra[povar + 1];
          povarHeight2 = subSpectraAfter[povar];
          povarHeight3 = subSpectraAfter[povar + 1];
          isOver0 = povarHeight0 > lineZValue;
          isOver1 = povarHeight1 > lineZValue;
          isOver2 = povarHeight2 > lineZValue;
          isOver3 = povarHeight3 > lineZValue; // Example povar0 is over the plane and povar1 and
          // povar2 are below, we find the varersections and add
          // the segment

          if (isOver0 !== isOver1 && isOver0 !== isOver2) {
            pAx = povar + (lineZValue - povarHeight0) / (povarHeight1 - povarHeight0);
            pAy = iSubSpectra;
            pBx = povar;
            pBy = iSubSpectra + (lineZValue - povarHeight0) / (povarHeight2 - povarHeight0);
            lines.push(pAx * dx + x0);
            lines.push(pAy * dy + y0);
            lines.push(pBx * dx + x0);
            lines.push(pBy * dy + y0);
          } // remove push does not help !!!!


          if (isOver3 !== isOver1 && isOver3 !== isOver2) {
            pAx = povar + 1;
            pAy = iSubSpectra + 1 - (lineZValue - povarHeight3) / (povarHeight1 - povarHeight3);
            pBx = povar + 1 - (lineZValue - povarHeight3) / (povarHeight2 - povarHeight3);
            pBy = iSubSpectra + 1;
            lines.push(pAx * dx + x0);
            lines.push(pAy * dy + y0);
            lines.push(pBx * dx + x0);
            lines.push(pBy * dy + y0);
          } // test around the diagonal


          if (isOver1 !== isOver2) {
            pAx = (povar + 1 - (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dx + x0;
            pAy = (iSubSpectra + (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dy + y0;

            if (isOver1 !== isOver0) {
              pBx = povar + 1 - (lineZValue - povarHeight1) / (povarHeight0 - povarHeight1);
              pBy = iSubSpectra;
              lines.push(pAx);
              lines.push(pAy);
              lines.push(pBx * dx + x0);
              lines.push(pBy * dy + y0);
            }

            if (isOver2 !== isOver0) {
              pBx = povar;
              pBy = iSubSpectra + 1 - (lineZValue - povarHeight2) / (povarHeight0 - povarHeight2);
              lines.push(pAx);
              lines.push(pAy);
              lines.push(pBx * dx + x0);
              lines.push(pBy * dy + y0);
            }

            if (isOver1 !== isOver3) {
              pBx = povar + 1;
              pBy = iSubSpectra + (lineZValue - povarHeight1) / (povarHeight3 - povarHeight1);
              lines.push(pAx);
              lines.push(pAy);
              lines.push(pBx * dx + x0);
              lines.push(pBy * dy + y0);
            }

            if (isOver2 !== isOver3) {
              pBx = povar + (lineZValue - povarHeight2) / (povarHeight3 - povarHeight2);
              pBy = iSubSpectra + 1;
              lines.push(pAx);
              lines.push(pAy);
              lines.push(pBx * dx + x0);
              lines.push(pBy * dy + y0);
            }
          }
        }
      }
    }

    return {
      minX: zData.minX,
      maxX: zData.maxX,
      minY: zData.minY,
      maxY: zData.maxY,
      segments: contourLevels
    };
  }

  function fastParseXYData(spectrum, value) {
    // TODO need to deal with result
    //  console.log(value);
    // we check if deltaX is defined otherwise we calculate it
    let yFactor = spectrum.yFactor;
    let deltaX = spectrum.deltaX;
    spectrum.isXYdata = true; // TODO to be improved using 2 array {x:[], y:[]}

    let currentData = [];
    spectrum.data = [currentData];
    let currentX = spectrum.firstX;
    let currentY = spectrum.firstY; // we skip the first line
    //

    let endLine = false;
    let ascii;
    let i = 0;

    for (; i < value.length; i++) {
      ascii = value.charCodeAt(i);

      if (ascii === 13 || ascii === 10) {
        endLine = true;
      } else {
        if (endLine) break;
      }
    } // we proceed taking the i after the first line


    let newLine = true;
    let isDifference = false;
    let isLastDifference = false;
    let lastDifference = 0;
    let isDuplicate = false;
    let inComment = false;
    let currentValue = 0; // can be a difference or a duplicate

    let lastValue = 0; // must be the real last value

    let isNegative = false;
    let inValue = false;
    let skipFirstValue = false;
    let decimalPosition = 0;

    for (; i <= value.length; i++) {
      if (i === value.length) ascii = 13;else ascii = value.charCodeAt(i);

      if (inComment) {
        // we should ignore the text if we are after $$
        if (ascii === 13 || ascii === 10) {
          newLine = true;
          inComment = false;
        }
      } else {
        // when is it a new value ?
        // when it is not a digit, . or comma
        // it is a number that is either new or we continue
        if (ascii <= 57 && ascii >= 48) {
          // a number
          inValue = true;

          if (decimalPosition > 0) {
            currentValue += (ascii - 48) / Math.pow(10, decimalPosition++);
          } else {
            currentValue *= 10;
            currentValue += ascii - 48;
          }
        } else if (ascii === 44 || ascii === 46) {
          // a "," or "."
          inValue = true;
          decimalPosition++;
        } else {
          if (inValue) {
            // need to process the previous value
            if (newLine) {
              newLine = false; // we don't check the X value
              // console.log("NEW LINE",isDifference, lastDifference);
              // if new line and lastDifference, the first value is just a check !
              // that we don't check ...

              if (isLastDifference) skipFirstValue = true;
            } else {
              // need to deal with duplicate and differences
              if (skipFirstValue) {
                skipFirstValue = false;
              } else {
                if (isDifference) {
                  lastDifference = isNegative ? 0 - currentValue : currentValue;
                  isLastDifference = true;
                  isDifference = false;
                } else if (!isDuplicate) {
                  lastValue = isNegative ? 0 - currentValue : currentValue;
                }

                let duplicate = isDuplicate ? currentValue - 1 : 1;

                for (let j = 0; j < duplicate; j++) {
                  if (isLastDifference) {
                    currentY += lastDifference;
                  } else {
                    currentY = lastValue;
                  }

                  currentData.push(currentX);
                  currentData.push(currentY * yFactor);
                  currentX += deltaX;
                }
              }
            }

            isNegative = false;
            currentValue = 0;
            decimalPosition = 0;
            inValue = false;
            isDuplicate = false;
          } // positive SQZ digits @ A B C D E F G H I (ascii 64-73)


          if (ascii < 74 && ascii > 63) {
            inValue = true;
            isLastDifference = false;
            currentValue = ascii - 64;
          } else if (ascii > 96 && ascii < 106) {
            // negative SQZ digits a b c d e f g h i (ascii 97-105)
            inValue = true;
            isLastDifference = false;
            currentValue = ascii - 96;
            isNegative = true;
          } else if (ascii === 115) {
            // DUP digits S T U V W X Y Z s (ascii 83-90, 115)
            inValue = true;
            isDuplicate = true;
            currentValue = 9;
          } else if (ascii > 82 && ascii < 91) {
            inValue = true;
            isDuplicate = true;
            currentValue = ascii - 82;
          } else if (ascii > 73 && ascii < 83) {
            // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
            inValue = true;
            isDifference = true;
            currentValue = ascii - 73;
          } else if (ascii > 105 && ascii < 115) {
            // negative DIF digits j k l m n o p q r (ascii 106-114)
            inValue = true;
            isDifference = true;
            currentValue = ascii - 105;
            isNegative = true;
          } else if (ascii === 36 && value.charCodeAt(i + 1) === 36) {
            // $ sign, we need to check the next one
            inValue = true;
            inComment = true;
          } else if (ascii === 37) {
            // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
            inValue = true;
            isDifference = true;
            currentValue = 0;
            isNegative = false;
          } else if (ascii === 45) {
            // a "-"
            // check if after there is a number, decimal or comma
            let ascii2 = value.charCodeAt(i + 1);

            if (ascii2 >= 48 && ascii2 <= 57 || ascii2 === 44 || ascii2 === 46) {
              inValue = true;
              if (!newLine) isLastDifference = false;
              isNegative = true;
            }
          } else if (ascii === 13 || ascii === 10) {
            newLine = true;
            inComment = false;
          } // and now analyse the details ... space or tabulation
          // if "+" we just don't care

        }
      }
    }
  }

  function parseXYA(spectrum, value) {
    let removeSymbolRegExp = /(\(+|\)+|<+|>+|\s+)/g;
    spectrum.isXYAdata = true;
    let values;
    let currentData = [];
    spectrum.data = [currentData];
    let lines = value.split(/,? *,?[;\r\n]+ */);

    for (let i = 1; i < lines.length; i++) {
      values = lines[i].trim().replace(removeSymbolRegExp, '').split(',');
      currentData.push(parseFloat(values[0]));
      currentData.push(parseFloat(values[1]));
    }
  }

  function parsePeakTable(spectrum, value, result) {
    let removeCommentRegExp = /\$\$.*/;
    let peakTableSplitRegExp = /[,\t ]+/;
    spectrum.isPeaktable = true;
    let values;
    let currentData = [];
    spectrum.data = [currentData]; // counts for around 20% of the time

    let lines = value.split(/,? *,?[;\r\n]+ */);

    for (let i = 1; i < lines.length; i++) {
      values = lines[i].trim().replace(removeCommentRegExp, '').split(peakTableSplitRegExp);

      if (values.length % 2 === 0) {
        for (let j = 0; j < values.length; j = j + 2) {
          // takes around 40% of the time to add and parse the 2 values nearly exclusively because of parseFloat
          currentData.push(parseFloat(values[j]) * spectrum.xFactor);
          currentData.push(parseFloat(values[j + 1]) * spectrum.yFactor);
        }
      } else {
        result.logs.push("Format error: ".concat(values));
      }
    }
  }

  return convert;
}

let convert = getConverter();

function JcampConverter(input, options, useWorker) {
  if (typeof options === 'boolean') {
    useWorker = options;
    options = {};
  }

  if (useWorker) {
    return postToWorker(input, options);
  } else {
    return convert(input, options);
  }
}

let stamps = {};
let worker;

function postToWorker(input, options) {
  if (!worker) {
    createWorker();
  }

  return new Promise(function (resolve) {
    let stamp = "".concat(Date.now()).concat(Math.random());
    stamps[stamp] = resolve;
    worker.postMessage(JSON.stringify({
      stamp: stamp,
      input: input,
      options: options
    }));
  });
}

function createWorker() {
  let workerURL = URL.createObjectURL(new Blob(["var getConverter =".concat(getConverter.toString(), ";var convert = getConverter(); onmessage = function (event) { var data = JSON.parse(event.data); postMessage(JSON.stringify({stamp: data.stamp, output: convert(data.input, data.options)})); };")], {
    type: 'application/javascript'
  }));
  worker = new Worker(workerURL);
  URL.revokeObjectURL(workerURL);
  worker.addEventListener('message', function (event) {
    let data = JSON.parse(event.data);
    let stamp = data.stamp;

    if (stamps[stamp]) {
      stamps[stamp](data.output);
    }
  });
}

function createTree(jcamp) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    flatten = false
  } = options;

  if (typeof jcamp !== 'string') {
    throw new TypeError('the JCAMP should be a string');
  }

  let lines = jcamp.split(/[\r\n]+/);
  let flat = [];
  let stack = [];
  let result = [];
  let current;
  let ntupleLevel = 0;
  let spaces = jcamp.includes('## ');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let labelLine = spaces ? line.replace(/ /g, '') : line;

    if (labelLine.substring(0, 9) === '##NTUPLES') {
      ntupleLevel++;
    }

    if (labelLine.substring(0, 7) === '##TITLE') {
      let title = [labelLine.substring(8).trim()];

      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].startsWith('##')) {
          break;
        } else {
          title.push(lines[j].trim());
        }
      }

      stack.push({
        title: title.join('\n'),
        jcamp: "".concat(line, "\n"),
        children: []
      });
      current = stack[stack.length - 1];
      flat.push(current);
    } else if (labelLine.substring(0, 5) === '##END' && ntupleLevel === 0) {
      current.jcamp += "".concat(line, "\n");
      let finished = stack.pop();

      if (stack.length !== 0) {
        current = stack[stack.length - 1];
        current.children.push(finished);
      } else {
        current = undefined;
        result.push(finished);
      }
    } else if (current && current.jcamp) {
      current.jcamp += "".concat(line, "\n");
      let match = labelLine.match(/^##(.*?)=(.+)/);

      if (match) {
        let canonicDataLabel = match[1].replace(/[ _-]/g, '').toUpperCase();

        if (canonicDataLabel === 'DATATYPE') {
          current.dataType = match[2].trim();
        }
      }
    }

    if (labelLine.substring(0, 5) === '##END' && ntupleLevel > 0) {
      ntupleLevel--;
    }
  }

  if (flatten) {
    flat.forEach(entry => {
      entry.children = undefined;
    });
    return flat;
  } else {
    return result;
  }
}

module.exports = {
  convert: JcampConverter,
  createTree: createTree
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/convert-to-jcamp/node_modules/ml-arrayxy-uniquex/src/index.js
var src = __webpack_require__(0);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./node_modules/convert-to-jcamp/node_modules/xy-parser/src/index.js

/**
 * Parse a text-file and convert it to an array of XY points
 * @param {string} text - csv or tsv strings
 * @param {object} [options]
 * @param {string} [options.arrayType = 'xyxy'] - xxyy or xyxy
 * * 'xxyy' `[[x1,x2,x3,...],[y1,y2,y2,...]]`
 * * 'xyxy' `[[x1,y1],[x2,y2],[x3,y3], ...]]`
 * @param {boolean} [options.normalize = false] - will set the maximum value to 1
 * @param {boolean} [options.uniqueX = false] - Make the X values unique (works only with 'xxyy' format). If the X value is repeated the sum of Y is done.
 * @param {number} [options.xColumn = 0] - A number that specifies the x column
 * @param {number} [options.yColumn = 1] - A number that specifies the y column
 * @param {number} [options.maxNumberColumns = (Math.max(xColumn, yColumn)+1)] - A number that specifies the maximum number of y columns
 * @param {number} [options.minNumberColumns = (Math.max(xColumn, yColumn)+1)] - A number that specifies the minimum number of y columns
 * @param {boolean} [options.keepInfo = false] - shoud we keep the non numeric lines. In this case the system will return an object {data, info}
 * @return {Array<Array<number>>} - check the 'arrayType' option
 */

function parseXY(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    normalize = false,
    uniqueX = false,
    arrayType = 'xyxy',
    xColumn = 0,
    yColumn = 1,
    keepInfo = false,
    maxNumberColumns = Math.max(xColumn, yColumn) + 1,
    minNumberColumns = Math.max(xColumn, yColumn) + 1
  } = options;
  var lines = text.split(/[\r\n]+/);

  if (arrayType !== 'xxyy' && arrayType !== 'xyxy') {
    throw new Error("unsupported arrayType (".concat(arrayType, ")"));
  }

  var maxY = Number.MIN_VALUE;
  var result = [[], []];
  var info = [];

  for (var l = 0; l < lines.length; l++) {
    var line = lines[l].trim(); // we will consider only lines that contains only numbers

    if (line.match(/[0-9]+/) && line.match(/^[0-9eE,;. \t+-]+$/)) {
      var fields = line.split(/,[; \t]+|[; \t]+/);

      if (fields.length === 1) {
        fields = line.split(/[,; \t]+/);
      }

      if (fields && fields.length >= minNumberColumns && fields.length <= maxNumberColumns) {
        let x = parseFloat(fields[xColumn].replace(',', '.'));
        let y = parseFloat(fields[yColumn].replace(',', '.'));
        if (y > maxY) maxY = y;
        result[0].push(x);
        result[1].push(y);
      }
    } else if (line) {
      info.push({
        position: result[0].length,
        value: line
      });
    }
  }

  if (normalize) {
    for (var i = 0; i < result[0].length; i++) {
      result[1][i] /= maxY;
    }
  }

  if (uniqueX) {
    src_default()(result[0], result[1]);
  }

  if (arrayType === 'xyxy') {
    var newResult = [];

    for (let i = 0; i < result[0].length; i++) {
      newResult.push([result[0][i], result[1][i]]);
    }

    result = newResult;
  }

  if (!keepInfo) return result;
  return {
    info,
    data: result
  };
}
// CONCATENATED MODULE: ./node_modules/ml-xy-convert/src/from.js
function fromXxyyArray(data) {
  return {
    x: data[0],
    y: data[1]
  };
}
function fromXyxyArray(data) {
  var x = [];
  var y = [];

  for (const point of data) {
    x.push(point[0]);
    y.push(point[1]);
  }

  return {
    x,
    y
  };
}
function fromXyxyObject(data) {
  var x = [];
  var y = [];

  for (const point of data) {
    x.push(point.x);
    y.push(point.y);
  }

  return {
    x,
    y
  };
}
function fromGeneral(data) {
  if (Array.isArray(data)) {
    if (data.length === 0) return {
      x: [],
      y: []
    };

    if (Array.isArray(data[0])) {
      if (data.length === 2) {
        return fromXxyyArray(data);
      } else {
        return fromXyxyArray(data);
      }
    } else {
      return fromXyxyObject(data);
    }
  } else {
    if (Array.isArray(data.x) && Array.isArray(data.x)) {
      return data;
    } else {
      throw new TypeError('unknown data format');
    }
  }
}
// CONCATENATED MODULE: ./node_modules/ml-xy-convert/src/to.js
function toXxyyArray(_ref) {
  let {
    x,
    y
  } = _ref;
  return [x, y];
}
function toXyxyArray(_ref2) {
  let {
    x,
    y
  } = _ref2;
  var ans = [];

  for (var index = 0; index < x.length; index++) {
    ans.push([x[index], y[index]]);
  }

  return ans;
}
function toXyxyObject(_ref3) {
  let {
    x,
    y
  } = _ref3;
  var ans = [];

  for (var index = 0; index < x.length; index++) {
    ans.push({
      x: x[index],
      y: y[index]
    });
  }

  return ans;
}
// CONCATENATED MODULE: ./node_modules/ml-xy-convert/src/index.js


/**
 * Convert between different xy formats
 * @param {*} data - input set of points to parse
 * @param {object} [options] - input and output options
 * @param {string} [options.inputFormat] - input format, if not in list infers the kind
 * @param {string} [options.outputFormat = 'xxyyObject'] - output format
 * @return {*} - output set of points
 */

function xyConvert(data) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    inputFormat,
    outputFormat = 'xxyyObject'
  } = options;
  if (inputFormat === outputFormat) return data;
  let middleData;

  switch (inputFormat) {
    case 'xxyyArray':
      middleData = fromXxyyArray(data);
      break;

    case 'xyxyArray':
      middleData = fromXyxyArray(data);
      break;

    case 'xxyyObject':
      // this is the base case
      middleData = data;
      break;

    case 'xyxyObject':
      middleData = fromXyxyObject(data);
      break;

    default:
      middleData = fromGeneral(data);
      break;
  }

  switch (outputFormat) {
    case 'xxyyArray':
      return toXxyyArray(middleData);

    case 'xyxyArray':
      return toXyxyArray(middleData);

    case 'xxyyObject':
      return middleData;

    case 'xyxyObject':
      return toXyxyObject(middleData);

    default:
      throw new TypeError("unknown output format ".concat(outputFormat));
  }
}
// CONCATENATED MODULE: ./node_modules/convert-to-jcamp/src/creator.js
/**
 * Parse from a xyxy data array
 * @param {Array<Array<number>>} data - xyxy array of data
 * @param {object} [meta] - same metadata object format that the convertToJcamp
 * @return {string} JCAMP of the input
 */
function creator(data) {
  let meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    title = '',
    owner = '',
    origin = '',
    type = '',
    xUnit = '',
    yUnit = '',
    info = {}
  } = meta;
  let firstX = Number.MAX_VALUE;
  let lastX = Number.MIN_VALUE;
  let firstY = Number.MAX_VALUE;
  let lastY = Number.MIN_VALUE;
  var points = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].length > 1) {
      var x = Number(data[i][0]);
      var y = Number(data[i][1]);

      if (firstX > x) {
        firstX = x;
      }

      if (lastX < x) {
        lastX = x;
      }

      if (firstY > y) {
        firstY = y;
      }

      if (lastY < y) {
        lastY = y;
      }
    }

    points.push("".concat(x, " ").concat(y));
  }

  var header = "##TITLE=".concat(title, "\n##JCAMP-DX=4.24\n##DATA TYPE=").concat(type, "\n##ORIGIN=").concat(origin, "\n##OWNER=").concat(owner, "\n##XUNITS=").concat(xUnit, "\n##YUNITS=").concat(yUnit, "\n##FIRSTX=").concat(firstX, "\n##LASTX=").concat(lastX, "\n##FIRSTY=").concat(firstY, "\n##LASTY=").concat(lastY, "\n");

  for (const key of Object.keys(info)) {
    header += "##$".concat(key, "=").concat(info[key], "\n");
  } // we leave the header and utf8 fonts ${header.replace(/[^\t\r\n\x20-\x7F]/g, '')


  return "".concat(header, "##NPOINTS=").concat(points.length, "\n##PEAK TABLE=(XY..XY)\n").concat(points.join('\n'), "\n##END");
}
// CONCATENATED MODULE: ./node_modules/convert-to-jcamp/src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convertToJcamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return fromJson; });



/**
 * Convert strings into JCAMP and add extra information
 * @param {string} data - values to add to the file, usually a csv or tsv values
 * @param {object} [options]
 * @param {string} [options.meta] - metadata of the file
 * @param {string} [options.meta.title = ''] - title of the file
 * @param {string} [options.meta.owner = ''] - owner of the file
 * @param {string} [options.meta.origin = ''] - origin of the file
 * @param {string} [options.meta.type = ''] - type of data
 * @param {string} [options.meta.xUnit = ''] - units for the x axis
 * @param {string} [options.meta.yUnit = ''] - units for the y axis
 * @param {object} [options.meta.info = {}] - comments to add to the file
 * @param {object} [options.parser = {}] - 'xy-parser' options. arrayType = 'xyxy' is enforced
 * @return {string} JCAMP of the input
 */

function convertToJcamp(data) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    meta = {},
    parserOptions = {}
  } = options;
  parserOptions.arrayType = 'xyxy';
  parserOptions.keepInfo = true;
  var parsed = parseXY(data, parserOptions);
  if (!meta.info) meta.info = {};
  meta.info.header = parsed.info.map(i => i.value).join('\n');
  let jcamp = creator(parsed.data, meta);
  return jcamp;
}
/**
 * Parse from any supported format in ml-xy-convert
 * @param {*} data - object or array with a set of points
 * @param {object} [meta] - metadata object
 * @return {string} JCAMP of the input
 */

function fromJson(data) {
  let meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const parsed = xyConvert(data, {
    outputFormat: 'xyxyArray'
  });
  return creator(parsed, meta);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=iv-spectrum.js.map