/**
 * iv-spectrum
 * @version v0.2.1
 * @link https://github.com/cheminfo/iv-spectrum#readme
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.IVSpectrum = {}));
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * In place modification of the 2 arrays to make X unique and sum the Y if X has the same value
	 * @param {object} [points={}] : Object of points contains property x (an array) and y (an array)
	 * @return points
	 */
	function uniqueX() {
	  let points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  const {
	    x,
	    y
	  } = points;
	  if (x.length < 2) return;

	  if (x.length !== y.length) {
	    throw new Error('The X and Y arrays mush have the same length');
	  }

	  let current = x[0];
	  let counter = 0;

	  for (let i = 1; i < x.length; i++) {
	    if (current !== x[i]) {
	      counter++;
	      current = x[i];
	      x[counter] = x[i];

	      if (i !== counter) {
	        y[counter] = 0;
	      }
	    }

	    if (i !== counter) {
	      y[counter] += y[i];
	    }
	  }

	  x.length = counter + 1;
	  y.length = counter + 1;
	}

	/**
	 * Parse a text-file and convert it to an array of XY points
	 * @param {string} text - csv or tsv strings
	 * @param {object} [options={}]
	 * @param {boolean} [options.rescale = false] - will set the maximum value to 1
	 * @param {boolean} [options.uniqueX = false] - Make the X values unique (works only with 'xxyy' format). If the X value is repeated the sum of Y is done.
	 * @param {number} [options.xColumn = 0] - A number that specifies the x column
	 * @param {number} [options.yColumn = 1] - A number that specifies the y column
	 * @param {number} [options.maxNumberColumns = (Math.max(xColumn, yColumn)+1)] - A number that specifies the maximum number of y columns
	 * @param {number} [options.minNumberColumns = (Math.min(xColumn, yColumn)+1)] - A number that specifies the minimum number of y columns
	 * @param {boolean} [options.keepInfo = false] - shoud we keep the non numeric lines. In this case the system will return an object {data, info}
	 * @return {object{x:<Array<number>>,y:<Array<number>>}
	 */

	function parseXY(text) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  let {
	    rescale = false,
	    uniqueX: uniqueX$1 = false,
	    xColumn = 0,
	    yColumn = 1,
	    keepInfo = false,
	    maxNumberColumns = Number.MAX_SAFE_INTEGER,
	    minNumberColumns = 2
	  } = options;
	  maxNumberColumns = Math.max(maxNumberColumns, xColumn + 1, yColumn + 1);
	  minNumberColumns = Math.max(xColumn + 1, yColumn + 1, minNumberColumns);
	  let lines = text.split(/[\r\n]+/);
	  let maxY = Number.MIN_VALUE;
	  let result = {
	    x: [],
	    y: []
	  };
	  let info = [];

	  for (let l = 0; l < lines.length; l++) {
	    let line = lines[l].trim(); // we will consider only lines that contains only numbers

	    if (line.match(/[0-9]+/) && line.match(/^[0-9eE,;. \t+-]+$/)) {
	      let fields = line.split(/,[; \t]+|[; \t]+/);

	      if (fields.length === 1) {
	        fields = line.split(/[,; \t]+/);
	      }

	      if (fields && fields.length >= minNumberColumns && fields.length <= maxNumberColumns) {
	        let x = parseFloat(fields[xColumn].replace(',', '.'));
	        let y = parseFloat(fields[yColumn].replace(',', '.'));
	        if (y > maxY) maxY = y;
	        result.x.push(x);
	        result.y.push(y);
	      }
	    } else if (line) {
	      info.push({
	        position: result.x.length,
	        value: line
	      });
	    }
	  }

	  if (uniqueX$1) {
	    uniqueX(result);
	  }

	  if (rescale) {
	    for (let i = 0; i < result.y.length; i++) {
	      result.y[i] /= maxY;
	    }
	  }

	  if (!keepInfo) return result;
	  return {
	    info,
	    data: result
	  };
	}

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

	/**
	 * Parse from a xyxy data array
	 * @param {Array<Array<number>>} data
	 * @param {object} [meta] - same metadata object format that the fromText
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
	  let points = [];

	  for (let i = 0; i < data.x.length; i++) {
	    let x = data.x[i];
	    let y = data.y[i];

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

	    points.push("".concat(x, " ").concat(y));
	  }

	  let header = "##TITLE=".concat(title, "\n##JCAMP-DX=4.24\n##DATA TYPE=").concat(type, "\n##ORIGIN=").concat(origin, "\n##OWNER=").concat(owner, "\n##XUNITS=").concat(xUnit, "\n##YUNITS=").concat(yUnit, "\n##FIRSTX=").concat(firstX, "\n##LASTX=").concat(lastX, "\n##FIRSTY=").concat(firstY, "\n##LASTY=").concat(lastY, "\n");

	  for (const key of Object.keys(info)) {
	    header += "##$".concat(key, "=").concat(info[key], "\n");
	  } // we leave the header and utf8 fonts ${header.replace(/[^\t\r\n\x20-\x7F]/g, '')


	  return "".concat(header, "##NPOINTS=").concat(points.length, "\n##PEAK TABLE=(XY..XY)\n").concat(points.join('\n'), "\n##END");
	}

	/**
	 * Convert strings into JCAMP and add extra information
	 * @param {string} data - values to add to the file, usually a csv or tsv values
	 * @param {object} [options={}]
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

	function fromText(data) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const {
	    meta = {},
	    parserOptions = {}
	  } = options;
	  parserOptions.keepInfo = true;
	  let parsed = parseXY(data, parserOptions);
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

	function fromJSON(data) {
	  let meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const parsed = xyConvert(data, {
	    outputFormat: 'xxyyObject'
	  });
	  return creator(parsed, meta);
	}

	var src = /*#__PURE__*/Object.freeze({
		__proto__: null,
		fromText: fromText,
		fromJSON: fromJSON
	});

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

	            fastParseXYData(spectrum, dataValue);
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
	      } else if (canonicDataLabel === '$REFERENCEPOINT') ; else if (canonicDataLabel === 'VARNAME') {
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

	var src$1 = {
	  convert: JcampConverter,
	  createTree: createTree
	};

	var lib = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function toJcamp(spectrum) {
	    let meta = {
	      // title: spectrum.sampleMeta.cellname,
	      owner: '',
	      origin: '',
	      type: 'IV curve',
	      xUnit: 'difference in electric potential [V]',
	      yUnit: 'intensity [A]',
	      info: spectrum.meta
	    };
	    return src.fromJson({
	      x: spectrum.x,
	      y: spectrum.y
	    }, meta);
	  }
	  /**
	   * Class allowing manipulate one UV spectrum
	   * @class spectrum
	   * @param {object} [data={}] - object containing a spectrum
	   * @param {Array} [data.x=[]] - voltage
	   * @param {Array} [data.y=[]] - intensity
	   */


	  class Spectrum {
	    constructor(x, y, id) {
	      let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	      const {
	        meta = {}
	      } = options;

	      if (x && x.length > 1 && x[0] > x[1]) {
	        this.x = x.reverse();
	        this.y = y.reverse();
	      } else {
	        this.x = x || [];
	        this.y = y || [];
	      }

	      this.id = id;
	      this.meta = meta;
	    }

	    getXLabel() {
	      return 'Voltage [V]';
	    }

	    getYLabel() {
	      return 'Intensity [A]';
	    }

	  }

	  Spectrum.prototype.getData = function () {
	    return {
	      x: this.x,
	      y: this.y
	    };
	  };

	  Spectrum.prototype.toJcamp = function () {
	    return toJcamp(this);
	  };

	  function fromSIV(content) {
	    let allLines = content.split(/[\r\n]+/);
	    let sampleMeta = parseS(allLines.filter(line => line.match(/X S_/)));
	    let instrumentMeta = parseV(allLines.filter(line => line.match(/X V_/)));
	    let date = parseDate(allLines.filter(line => line.match(/X d_t/))[0]);
	    let parts = content.split('WAVES\t');
	    let spectra = [];

	    for (let part of parts) {
	      let lines = part.split(/[\r\n]+/);
	      let ys = lines.filter(line => line.match(/^[\t 0-9.eE-]+$/)).map(line => Number(line));
	      if (ys.length < 10) continue;
	      let kind = lines[0].trim();
	      let metaLines = lines.filter(line => line.match(/^X /)).map(line => line.substring(2));
	      let axis = parseScale(metaLines[0], ys.length);
	      {
	        // eslint-disable-next-line no-console
	        console.log('Unknown X axis:', axis.kind, axis.unit);
	        continue;
	      }
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

	    for (let part of parts) {
	      let parsedPart = parseScalePart(part, nbValues);
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


	  function fromJcamp(jcamp, id) {
	    const converted = src$1.convert(jcamp, {
	      xy: true,
	      keepRecordsRegExp: /.*/,
	      canonicDataLabels: false,
	      dynamicTyping: true
	    });
	    let data = converted.spectra[0].data[0];
	    let info = converted.info;
	    let meta = {};

	    for (let key of Object.keys(info).filter(key => key.startsWith('$'))) {
	      meta[key.substr(1)] = info[key];
	    }

	    return new Spectrum(data.x, data.y, id, {
	      meta
	    });
	  }

	  exports.Spectrum = Spectrum;
	  exports.fromJcamp = fromJcamp;
	  exports.fromSIV = fromSIV;
	});
	var index = unwrapExports(lib);
	var lib_1 = lib.Spectrum;
	var lib_2 = lib.fromJcamp;
	var lib_3 = lib.fromSIV;

	exports.Spectrum = lib_1;
	exports.default = index;
	exports.fromJcamp = lib_2;
	exports.fromSIV = lib_3;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iv-spectrum.js.map
