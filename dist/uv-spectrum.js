/**
 * cv-spectrum
 * @version v0.0.3
 * @link https://github.com/cheminfo/cv-spectrum#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IRSpectrum"] = factory();
	else
		root["IRSpectrum"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const toString = Object.prototype.toString;

function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}

module.exports = isAnyArray;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(2);
exports.matrix = __webpack_require__(9);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareNumbers(a, b) {
  return a - b;
}
/**
 * Computes the sum of the given values
 * @param {Array} values
 * @returns {number}
 */


exports.sum = function sum(values) {
  var sum = 0;

  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }

  return sum;
};
/**
 * Computes the maximum of the given values
 * @param {Array} values
 * @returns {number}
 */


exports.max = function max(values) {
  var max = values[0];
  var l = values.length;

  for (var i = 1; i < l; i++) {
    if (values[i] > max) max = values[i];
  }

  return max;
};
/**
 * Computes the minimum of the given values
 * @param {Array} values
 * @returns {number}
 */


exports.min = function min(values) {
  var min = values[0];
  var l = values.length;

  for (var i = 1; i < l; i++) {
    if (values[i] < min) min = values[i];
  }

  return min;
};
/**
 * Computes the min and max of the given values
 * @param {Array} values
 * @returns {{min: number, max: number}}
 */


exports.minMax = function minMax(values) {
  var min = values[0];
  var max = values[0];
  var l = values.length;

  for (var i = 1; i < l; i++) {
    if (values[i] < min) min = values[i];
    if (values[i] > max) max = values[i];
  }

  return {
    min: min,
    max: max
  };
};
/**
 * Computes the arithmetic mean of the given values
 * @param {Array} values
 * @returns {number}
 */


exports.arithmeticMean = function arithmeticMean(values) {
  var sum = 0;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    sum += values[i];
  }

  return sum / l;
};
/**
 * {@link arithmeticMean}
 */


exports.mean = exports.arithmeticMean;
/**
 * Computes the geometric mean of the given values
 * @param {Array} values
 * @returns {number}
 */

exports.geometricMean = function geometricMean(values) {
  var mul = 1;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    mul *= values[i];
  }

  return Math.pow(mul, 1 / l);
};
/**
 * Computes the mean of the log of the given values
 * If the return value is exponentiated, it gives the same result as the
 * geometric mean.
 * @param {Array} values
 * @returns {number}
 */


exports.logMean = function logMean(values) {
  var lnsum = 0;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    lnsum += Math.log(values[i]);
  }

  return lnsum / l;
};
/**
 * Computes the weighted grand mean for a list of means and sample sizes
 * @param {Array} means - Mean values for each set of samples
 * @param {Array} samples - Number of original values for each set of samples
 * @returns {number}
 */


exports.grandMean = function grandMean(means, samples) {
  var sum = 0;
  var n = 0;
  var l = means.length;

  for (var i = 0; i < l; i++) {
    sum += samples[i] * means[i];
    n += samples[i];
  }

  return sum / n;
};
/**
 * Computes the truncated mean of the given values using a given percentage
 * @param {Array} values
 * @param {number} percent - The percentage of values to keep (range: [0,1])
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */


exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
  if (alreadySorted === undefined) alreadySorted = false;

  if (!alreadySorted) {
    values = [].concat(values).sort(compareNumbers);
  }

  var l = values.length;
  var k = Math.floor(l * percent);
  var sum = 0;

  for (var i = k; i < l - k; i++) {
    sum += values[i];
  }

  return sum / (l - 2 * k);
};
/**
 * Computes the harmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */


exports.harmonicMean = function harmonicMean(values) {
  var sum = 0;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    if (values[i] === 0) {
      throw new RangeError('value at index ' + i + 'is zero');
    }

    sum += 1 / values[i];
  }

  return l / sum;
};
/**
 * Computes the contraharmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */


exports.contraHarmonicMean = function contraHarmonicMean(values) {
  var r1 = 0;
  var r2 = 0;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    r1 += values[i] * values[i];
    r2 += values[i];
  }

  if (r2 < 0) {
    throw new RangeError('sum of values is negative');
  }

  return r1 / r2;
};
/**
 * Computes the median of the given values
 * @param {Array} values
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */


exports.median = function median(values, alreadySorted) {
  if (alreadySorted === undefined) alreadySorted = false;

  if (!alreadySorted) {
    values = [].concat(values).sort(compareNumbers);
  }

  var l = values.length;
  var half = Math.floor(l / 2);

  if (l % 2 === 0) {
    return (values[half - 1] + values[half]) * 0.5;
  } else {
    return values[half];
  }
};
/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */


exports.variance = function variance(values, unbiased) {
  if (unbiased === undefined) unbiased = true;
  var theMean = exports.mean(values);
  var theVariance = 0;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    var x = values[i] - theMean;
    theVariance += x * x;
  }

  if (unbiased) {
    return theVariance / (l - 1);
  } else {
    return theVariance / l;
  }
};
/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */


exports.standardDeviation = function standardDeviation(values, unbiased) {
  return Math.sqrt(exports.variance(values, unbiased));
};

exports.standardError = function standardError(values) {
  return exports.standardDeviation(values) / Math.sqrt(values.length);
};
/**
 * IEEE Transactions on biomedical engineering, vol. 52, no. 1, january 2005, p. 76-
 * Calculate the standard deviation via the Median of the absolute deviation
 *  The formula for the standard deviation only holds for Gaussian random variables.
 * @returns {{mean: number, stdev: number}}
 */


exports.robustMeanAndStdev = function robustMeanAndStdev(y) {
  var mean = 0,
      stdev = 0;
  var length = y.length,
      i = 0;

  for (i = 0; i < length; i++) {
    mean += y[i];
  }

  mean /= length;
  var averageDeviations = new Array(length);

  for (i = 0; i < length; i++) averageDeviations[i] = Math.abs(y[i] - mean);

  averageDeviations.sort(compareNumbers);

  if (length % 2 === 1) {
    stdev = averageDeviations[(length - 1) / 2] / 0.6745;
  } else {
    stdev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
  }

  return {
    mean: mean,
    stdev: stdev
  };
};

exports.quartiles = function quartiles(values, alreadySorted) {
  if (typeof alreadySorted === 'undefined') alreadySorted = false;

  if (!alreadySorted) {
    values = [].concat(values).sort(compareNumbers);
  }

  var quart = values.length / 4;
  var q1 = values[Math.ceil(quart) - 1];
  var q2 = exports.median(values, true);
  var q3 = values[Math.ceil(quart * 3) - 1];
  return {
    q1: q1,
    q2: q2,
    q3: q3
  };
};

exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
  return Math.sqrt(exports.pooledVariance(samples, unbiased));
};

exports.pooledVariance = function pooledVariance(samples, unbiased) {
  if (typeof unbiased === 'undefined') unbiased = true;
  var sum = 0;
  var length = 0,
      l = samples.length;

  for (var i = 0; i < l; i++) {
    var values = samples[i];
    var vari = exports.variance(values);
    sum += (values.length - 1) * vari;
    if (unbiased) length += values.length - 1;else length += values.length;
  }

  return sum / length;
};

exports.mode = function mode(values) {
  var l = values.length,
      itemCount = new Array(l),
      i;

  for (i = 0; i < l; i++) {
    itemCount[i] = 0;
  }

  var itemArray = new Array(l);
  var count = 0;

  for (i = 0; i < l; i++) {
    var index = itemArray.indexOf(values[i]);
    if (index >= 0) itemCount[index]++;else {
      itemArray[count] = values[i];
      itemCount[count] = 1;
      count++;
    }
  }

  var maxValue = 0,
      maxIndex = 0;

  for (i = 0; i < count; i++) {
    if (itemCount[i] > maxValue) {
      maxValue = itemCount[i];
      maxIndex = i;
    }
  }

  return itemArray[maxIndex];
};

exports.covariance = function covariance(vector1, vector2, unbiased) {
  if (typeof unbiased === 'undefined') unbiased = true;
  var mean1 = exports.mean(vector1);
  var mean2 = exports.mean(vector2);
  if (vector1.length !== vector2.length) throw 'Vectors do not have the same dimensions';
  var cov = 0,
      l = vector1.length;

  for (var i = 0; i < l; i++) {
    var x = vector1[i] - mean1;
    var y = vector2[i] - mean2;
    cov += x * y;
  }

  if (unbiased) return cov / (l - 1);else return cov / l;
};

exports.skewness = function skewness(values, unbiased) {
  if (typeof unbiased === 'undefined') unbiased = true;
  var theMean = exports.mean(values);
  var s2 = 0,
      s3 = 0,
      l = values.length;

  for (var i = 0; i < l; i++) {
    var dev = values[i] - theMean;
    s2 += dev * dev;
    s3 += dev * dev * dev;
  }

  var m2 = s2 / l;
  var m3 = s3 / l;
  var g = m3 / Math.pow(m2, 3 / 2.0);

  if (unbiased) {
    var a = Math.sqrt(l * (l - 1));
    var b = l - 2;
    return a / b * g;
  } else {
    return g;
  }
};

exports.kurtosis = function kurtosis(values, unbiased) {
  if (typeof unbiased === 'undefined') unbiased = true;
  var theMean = exports.mean(values);
  var n = values.length,
      s2 = 0,
      s4 = 0;

  for (var i = 0; i < n; i++) {
    var dev = values[i] - theMean;
    s2 += dev * dev;
    s4 += dev * dev * dev * dev;
  }

  var m2 = s2 / n;
  var m4 = s4 / n;

  if (unbiased) {
    var v = s2 / (n - 1);
    var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
    var b = s4 / (v * v);
    var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));
    return a * b - 3 * c;
  } else {
    return m4 / (m2 * m2) - 3;
  }
};

exports.entropy = function entropy(values, eps) {
  if (typeof eps === 'undefined') eps = 0;
  var sum = 0,
      l = values.length;

  for (var i = 0; i < l; i++) sum += values[i] * Math.log(values[i] + eps);

  return -sum;
};

exports.weightedMean = function weightedMean(values, weights) {
  var sum = 0,
      l = values.length;

  for (var i = 0; i < l; i++) sum += values[i] * weights[i];

  return sum;
};

exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
  return Math.sqrt(exports.weightedVariance(values, weights));
};

exports.weightedVariance = function weightedVariance(values, weights) {
  var theMean = exports.weightedMean(values, weights);
  var vari = 0,
      l = values.length;
  var a = 0,
      b = 0;

  for (var i = 0; i < l; i++) {
    var z = values[i] - theMean;
    var w = weights[i];
    vari += w * (z * z);
    b += w;
    a += w * w;
  }

  return vari * (b / (b * b - a));
};

exports.center = function center(values, inPlace) {
  if (typeof inPlace === 'undefined') inPlace = false;
  var result = values;
  if (!inPlace) result = [].concat(values);
  var theMean = exports.mean(result),
      l = result.length;

  for (var i = 0; i < l; i++) result[i] -= theMean;
};

exports.standardize = function standardize(values, standardDev, inPlace) {
  if (typeof standardDev === 'undefined') standardDev = exports.standardDeviation(values);
  if (typeof inPlace === 'undefined') inPlace = false;
  var l = values.length;
  var result = inPlace ? values : new Array(l);

  for (var i = 0; i < l; i++) result[i] = values[i] / standardDev;

  return result;
};

exports.cumulativeSum = function cumulativeSum(array) {
  var l = array.length;
  var result = new Array(l);
  result[0] = array[0];

  for (var i = 1; i < l; i++) result[i] = result[i - 1] + array[i];

  return result;
};

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var min = _interopDefault(__webpack_require__(5));

var max = _interopDefault(__webpack_require__(6));

var equallySpaced = _interopDefault(__webpack_require__(14));

var Util = _interopDefault(__webpack_require__(7));

var jcampconverter = __webpack_require__(12);

var xyParser = __webpack_require__(13);

const ABSORBANCE = 1;
const TRANSMITTANCE = 2;
const PERCENT_TRANSMITTANCE = 3;

function getKind() {
  let kind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (typeof kind === 'number') {
    if (kind < 1 || kind > 2) {
      throw new Error('kind should either be 1 or 2');
    }

    return kind;
  }

  if (kind.match(/abs/i)) {
    return ABSORBANCE;
  }

  return TRANSMITTANCE;
}
/**
 * Create an object of Chromatogram
 * @return {object}
 */


function toJSON() {
  return {
    wavelength: this.wavelength,
    transmittance: this.transmittance,
    peaks: this.peaks
  };
}

function getAnnotations(spectrum) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const _options$fillColor = options.fillColor,
        fillColor = _options$fillColor === void 0 ? 'green' : _options$fillColor,
        _options$strokeColor = options.strokeColor,
        strokeColor = _options$strokeColor === void 0 ? 'red' : _options$strokeColor,
        creationFct = options.creationFct;
  const peaks = spectrum.peaks;
  if (!peaks) return [];
  let annotations = peaks.map(peak => {
    var annotation = {
      line: 1,
      type: 'rect',
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

      default:
    }

    return annotation;
  });
  return annotations;
}

function annotationTransmittance(annotation, peak) {
  let factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  annotation.label = [{
    text: String(peak.wavelength),
    size: '12px',
    anchor: 'middle',
    color: 'red',
    position: {
      x: peak.wavelength,
      y: peak.transmittance * factor,
      dy: '23px'
    }
  }];
  annotation.position = [{
    x: peak.wavelength,
    y: peak.transmittance * factor,
    dy: '10px',
    dx: '-1px'
  }, {
    x: peak.wavelength,
    y: peak.transmittance * factor,
    dy: '5px',
    dx: '1px'
  }];
}

function annotationAbsorbance(annotation, peak) {
  annotation.label = [{
    text: String(peak.wavelength),
    size: '18px',
    anchor: 'middle',
    color: 'red',
    position: {
      x: peak.wavelength,
      y: peak.absorbance,
      dy: '-15px'
    }
  }];
  annotation.position = [{
    x: peak.wavelength,
    y: peak.absorbance,
    dy: '-10px',
    dx: '-1px'
  }, {
    x: peak.wavelength,
    y: peak.absorbance,
    dy: '-5px',
    dx: '1px'
  }];
}

function getData(spectrum) {
  switch (spectrum.mode) {
    case ABSORBANCE:
      return spectrum.getAbsorbance();

    case TRANSMITTANCE:
      return spectrum.getTransmittance();

    case PERCENT_TRANSMITTANCE:
      return spectrum.getPercentTransmittance();

    default:
      return {};
  }
}
/**
 *
 * @param {Spectrum} spectrum
 * @param {object} peak
 */


function addPeak(spectrum) {
  let peak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!peak.wavelength) {
    throw new Error('addPeak: peak mush have wavelength property');
  }

  if (!peak.absorbance && !peak.transmittance) {
    throw new Error('addPeak: peak mush have either absorbance of transmittance property');
  }

  const wavelength = peak.wavelength,
        _peak$transmittance = peak.transmittance,
        transmittance = _peak$transmittance === void 0 ? 10 ** -peak.absorbance : _peak$transmittance,
        _peak$absorbance = peak.absorbance,
        absorbance = _peak$absorbance === void 0 ? -Math.log10(peak.transmittance) : _peak$absorbance;

  for (let existing of spectrum.peaks) {
    if (Number(existing.wavelength) === wavelength) return existing;
  }

  spectrum.peaks.push({
    wavelength: wavelength,
    transmittance: transmittance,
    absorbance: absorbance
  });
  return peak;
}
/**
 *
 * @param {Spectrum} spectrum
 * @param {number} targetWavelength
 * @param {object} [options]
 * @param {number} [options.range=0] Search in a range around the targetWavelength
 * @param {boolean} [options.optimize=false] Search for the closest peak to the targetWavelength
 */


function peakPicking(spectrum, targetWavelength) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const _options$range = options.range,
        range = _options$range === void 0 ? 0 : _options$range,
        _options$optimize = options.optimize,
        optimize = _options$optimize === void 0 ? false : _options$optimize; // find the peak that is the closest to the click

  let bestPeak = getClosest(spectrum, targetWavelength);

  if (optimize) {
    findClosest(spectrum, bestPeak);
  } else if (range) {
    bestInRange(spectrum, bestPeak, targetWavelength, range);
  }

  return addPeak(spectrum, bestPeak);
}

function getClosest(spectrum, targetWavelength) {
  let bestPeak = {
    transmittance: spectrum.transmittance[0],
    absorbance: spectrum.absorbance[0],
    wavelength: spectrum.wavelength[0],
    index: 0
  };
  let error = Math.abs(targetWavelength - bestPeak.wavelength);

  for (let i = 1; i < spectrum.wavelength.length; i++) {
    let newError = Math.abs(targetWavelength - spectrum.wavelength[i]);

    if (newError < error) {
      error = newError;
      setBestPeak(spectrum, bestPeak, i);
    }
  }

  return bestPeak;
}

function bestInRange(spectrum, bestPeak, targetWavelength, range) {
  // we search the minimum based on wavelength +/- range
  for (let i = 0; i < spectrum.wavelength.length; i++) {
    if (Math.abs(spectrum.wavelength[i] - targetWavelength) <= range) {
      if (spectrum.transmittance[i] < bestPeak.transmittance) {
        setBestPeak(spectrum, bestPeak, i);
      }
    }
  }
}

function findClosest(spectrum, bestPeak) {
  let index = bestPeak.index;
  let previousIndex;

  while (index !== previousIndex) {
    previousIndex = index;

    if (index > 0 && spectrum.absorbance[index - 1] > bestPeak.absorbance) {
      index--;
      setBestPeak(spectrum, bestPeak, index);
    } else if (index < spectrum.wavelength.length - 1 && spectrum.absorbance[index + 1] > bestPeak.absorbance) {
      index++;
      setBestPeak(spectrum, bestPeak, index);
    }
  }
}

function setBestPeak(spectrum, bestPeak, index) {
  bestPeak.index = index;
  bestPeak.wavelength = spectrum.wavelength[index];
  bestPeak.absorbance = spectrum.absorbance[index];
  bestPeak.transmittance = spectrum.transmittance[index];
}

function getNormalized(spectrum) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const _options$from = options.from,
        from = _options$from === void 0 ? 800 : _options$from,
        _options$to = options.to,
        to = _options$to === void 0 ? 4000 : _options$to,
        _options$numberOfPoin = options.numberOfPoints,
        numberOfPoints = _options$numberOfPoin === void 0 ? 1000 : _options$numberOfPoin,
        _options$applySNV = options.applySNV,
        applySNV = _options$applySNV === void 0 ? true : _options$applySNV;
  let y = applySNV ? Util.SNV(spectrum.absorbance) : spectrum.absorbance;
  return equallySpaced({
    x: spectrum.wavelength,
    y
  }, {
    from,
    to,
    numberOfPoints
  });
}
/**
 * Class allowing manipulate one UV spectrum
 * @class spectrum
 * @param {object} [json={}] - object containing a spectrum
 * @param {Array} [json.wavelength=[]] - wavelength
 * @param {Array} [json.y=[]] - y values
 * @param {integer} [json.kind=spectrum.TRANSMITTANCE] - either spectrum.ABSORBANCE or spectrum.TRANSMITTANCE
 */


class Spectrum {
  constructor() {
    let json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.wavelength = json.wavelength || [];
    this.absorbance = json.absorbance || [];
    this.transmittance = json.transmittance || [];
    this.mode = PERCENT_TRANSMITTANCE;
    this.peaks = [];
    check(this);
  }
  /**
   *
   * @param {Array} [peaks=[]] array of peaks. Peaks are composed of transmittance, wavelength, kind
   */


  setPeaks() {
    let peaks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    this.peaks = peaks;
  }

  setMode(mode) {
    if (mode < 1 || mode > 3) {
      throw new Error('Mode should be either 1 (absorbance), 2 (transmittance) or 3 (percent transmittance)');
    }

    this.mode = mode;
  }

  peakPicking(targetWavelength) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    peakPicking(this, targetWavelength, options);
  }

  getAbsorbance() {
    return {
      x: this.wavelength,
      y: this.absorbance
    };
  }

  getTransmittance() {
    return {
      x: this.wavelength,
      y: this.transmittance
    };
  }

  getPercentTransmittance() {
    let data = this.getTransmittance();
    return {
      x: data.x,
      y: data.y.map(transmittance => transmittance * 100)
    };
  }

  getYLabel() {
    switch (this.mode) {
      case ABSORBANCE:
        return 'Absorbance';

      case TRANSMITTANCE:
        return 'Transmittance';

      case PERCENT_TRANSMITTANCE:
        return 'Transmittance [%]';

      default:
        return '';
    }
  }

}

Spectrum.prototype.toJSON = toJSON;

Spectrum.prototype.getAnnotations = function (options) {
  return getAnnotations(this, options);
};

Spectrum.prototype.getData = function (options) {
  return getData(this, options);
};

Spectrum.prototype.getNormalized = function (options) {
  return getNormalized(this, options);
};

function check(spectrum) {
  if (spectrum.transmittance.length > 0 && spectrum.absorbance.length === 0) {
    spectrum.absorbance = spectrum.transmittance.map(transmittance => -Math.log10(transmittance));
  }

  if (spectrum.absorbance.length > 0 && spectrum.transmittance.length === 0) {
    spectrum.transmittance = spectrum.absorbance.map(absorbance => 10 ** -absorbance);
  }

  if (spectrum.wavelength.length > 0) {
    spectrum.minWavelength = min(spectrum.wavelength);
  }

  if (spectrum.wavelength.length > 0) {
    spectrum.maxWavelength = max(spectrum.wavelength);
  }

  if (spectrum.absorbance.length > 0) {
    spectrum.minAbsorbance = min(spectrum.absorbance);
  }

  if (spectrum.absorbance.length > 0) {
    spectrum.maxAbsorbance = max(spectrum.absorbance);
  }

  if (spectrum.transmittance.length > 0) {
    spectrum.minTransmittance = min(spectrum.transmittance);
  }

  if (spectrum.transmittance.length > 0) {
    spectrum.maxTransmittance = max(spectrum.transmittance);
  }
}

class Spectra {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.from = options.from === undefined ? 800 : options.from;
    this.to = options.to === undefined ? 4000 : options.to;
    this.numberOfPoints = options.numberOfPoints === undefined ? 1000 : options.numberOfPoints;
    this.applySNV = options.applySNV === undefined ? true : options.applySNV;
    this.data = [];
    this.mode = PERCENT_TRANSMITTANCE;
  }
  /**
   * Add a spectrum
   * @param {Spectrum} spectrum
   * @param {string} id
   * @param {object} [meta={}]
   * @param {string} [meta.color]
   */


  addSpectrum(spectrum, id) {
    let meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let index = this.getSpectrumIndex(id);
    if (index === undefined) index = this.data.length;
    this.data[index] = {
      normalized: spectrum.getNormalized(spectrum, {
        from: this.from,
        to: this.to,
        numberOfPoints: this.numberOfPoints
      }),
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

  getSpectrumIndex(id) {
    if (!id) return undefined;

    for (let i = 0; i < this.data.length; i++) {
      let spectrum = this.data[i];
      if (spectrum.id === id) return i;
    }

    return undefined;
  }

  getNormalizedData() {
    if (!this.data || !this.data[0]) return {};
    let matrix = [];
    let meta = [];
    let ids = [];

    for (let datum of this.data) {
      ids.push(datum.id);
      matrix.push(datum.normalized.y);
      meta.push(datum.meta);
    }

    let x = this.data[0].normalized.x;
    return {
      ids,
      matrix,
      meta,
      x
    };
  }

}
/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Spectrum} - New class element with the given data
 */


function fromJcamp(jcamp) {
  const data = jcampconverter.convert(jcamp, {
    xy: true
  });
  let spectrum = data.spectra[0].data[0];

  if (getKind(data.spectra[0].yUnit) === TRANSMITTANCE) {
    return new Spectrum({
      wavelength: spectrum.x,
      transmittance: spectrum.y,
      absorbance: []
    });
  } else {
    return new Spectrum({
      wavelength: spectrum.x,
      transmittance: [],
      absorbance: spectrum.y
    });
  }
}
/**
 * Creates a new Chromatogram element based in a Txt string
 * @param {string} text - String containing the data as CSV or TSV
 * @param {object} [options] - Options object for the parser
 * @param {string} [options.kind] - Absorbance or Transmisstance
 * @return {Spectrum} - New class element with the given data
 */


function fromText(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options = Object.assign({}, options, {
    arrayType: 'xxyy'
  });
  const data = xyParser.parseXY(text, options);

  if (getKind(options.kind) === TRANSMITTANCE) {
    return new Spectrum({
      wavelength: data[0],
      transmittance: data[1],
      absorbance: []
    });
  } else {
    return new Spectrum({
      wavelength: data[0],
      transmisttance: [],
      absorbance: data[1]
    });
  }
}

exports.ABSORBANCE = ABSORBANCE;
exports.PERCENT_TRANSMITTANCE = PERCENT_TRANSMITTANCE;
exports.Spectra = Spectra;
exports.Spectrum = Spectrum;
exports.TRANSMITTANCE = TRANSMITTANCE;
exports.fromJcamp = fromJcamp;
exports.fromText = fromText;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function min(input) {
  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var min = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] < min) min = input[i];
  }

  return min;
}

/* harmony default export */ __webpack_exports__["default"] = (min);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function max(input) {
  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var max = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] > max) max = input[i];
  }

  return max;
}

/* harmony default export */ __webpack_exports__["default"] = (max);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = exports = __webpack_require__(8);
exports.getEquallySpacedData = __webpack_require__(10).getEquallySpacedData;
exports.SNV = __webpack_require__(11).SNV;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Stat = __webpack_require__(1).array;
/**
 * Function that returns an array of points given 1D array as follows:
 *
 * [x1, y1, .. , x2, y2, ..]
 *
 * And receive the number of dimensions of each point.
 * @param array
 * @param dimensions
 * @returns {Array} - Array of points.
 */


function coordArrayToPoints(array, dimensions) {
  if (array.length % dimensions !== 0) {
    throw new RangeError('Dimensions number must be accordance with the size of the array.');
  }

  var length = array.length / dimensions;
  var pointsArr = new Array(length);
  var k = 0;

  for (var i = 0; i < array.length; i += dimensions) {
    var point = new Array(dimensions);

    for (var j = 0; j < dimensions; ++j) {
      point[j] = array[i + j];
    }

    pointsArr[k] = point;
    k++;
  }

  return pointsArr;
}
/**
 * Function that given an array as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * Returns an array as follows:
 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
 *
 * And receives the number of dimensions of each coordinate.
 * @param array
 * @param dimensions
 * @returns {Array} - Matrix of coordinates
 */


function coordArrayToCoordMatrix(array, dimensions) {
  if (array.length % dimensions !== 0) {
    throw new RangeError('Dimensions number must be accordance with the size of the array.');
  }

  var coordinatesArray = new Array(dimensions);
  var points = array.length / dimensions;

  for (var i = 0; i < coordinatesArray.length; i++) {
    coordinatesArray[i] = new Array(points);
  }

  for (i = 0; i < array.length; i += dimensions) {
    for (var j = 0; j < dimensions; ++j) {
      var currentPoint = Math.floor(i / dimensions);
      coordinatesArray[j][currentPoint] = array[i + j];
    }
  }

  return coordinatesArray;
}
/**
 * Function that receives a coordinate matrix as follows:
 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
 *
 * Returns an array of coordinates as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * @param coordMatrix
 * @returns {Array}
 */


function coordMatrixToCoordArray(coordMatrix) {
  var coodinatesArray = new Array(coordMatrix.length * coordMatrix[0].length);
  var k = 0;

  for (var i = 0; i < coordMatrix[0].length; ++i) {
    for (var j = 0; j < coordMatrix.length; ++j) {
      coodinatesArray[k] = coordMatrix[j][i];
      ++k;
    }
  }

  return coodinatesArray;
}
/**
 * Tranpose a matrix, this method is for coordMatrixToPoints and
 * pointsToCoordMatrix, that because only transposing the matrix
 * you can change your representation.
 *
 * @param matrix
 * @returns {Array}
 */


function transpose(matrix) {
  var resultMatrix = new Array(matrix[0].length);

  for (var i = 0; i < resultMatrix.length; ++i) {
    resultMatrix[i] = new Array(matrix.length);
  }

  for (i = 0; i < matrix.length; ++i) {
    for (var j = 0; j < matrix[0].length; ++j) {
      resultMatrix[j][i] = matrix[i][j];
    }
  }

  return resultMatrix;
}
/**
 * Function that transform an array of points into a coordinates array
 * as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * @param points
 * @returns {Array}
 */


function pointsToCoordArray(points) {
  var coodinatesArray = new Array(points.length * points[0].length);
  var k = 0;

  for (var i = 0; i < points.length; ++i) {
    for (var j = 0; j < points[0].length; ++j) {
      coodinatesArray[k] = points[i][j];
      ++k;
    }
  }

  return coodinatesArray;
}
/**
 * Apply the dot product between the smaller vector and a subsets of the
 * largest one.
 *
 * @param firstVector
 * @param secondVector
 * @returns {Array} each dot product of size of the difference between the
 *                  larger and the smallest one.
 */


function applyDotProduct(firstVector, secondVector) {
  var largestVector, smallestVector;

  if (firstVector.length <= secondVector.length) {
    smallestVector = firstVector;
    largestVector = secondVector;
  } else {
    smallestVector = secondVector;
    largestVector = firstVector;
  }

  var difference = largestVector.length - smallestVector.length + 1;
  var dotProductApplied = new Array(difference);

  for (var i = 0; i < difference; ++i) {
    var sum = 0;

    for (var j = 0; j < smallestVector.length; ++j) {
      sum += smallestVector[j] * largestVector[i + j];
    }

    dotProductApplied[i] = sum;
  }

  return dotProductApplied;
}
/**
 * To scale the input array between the specified min and max values. The operation is performed inplace
 * if the options.inplace is specified. If only one of the min or max parameters is specified, then the scaling
 * will multiply the input array by min/min(input) or max/max(input)
 * @param input
 * @param options
 * @returns {*}
 */


function scale(input) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const min = options.min,
        max = options.max;
  var y = options.inPlace ? input : new Array(input.length);
  var minMax = Stat.minMax(input);

  if (typeof max === 'number') {
    if (typeof min === 'number') {
      let factor = (max - min) / (minMax.max - minMax.min);

      for (let i = 0; i < y.length; i++) {
        y[i] = (input[i] - minMax.min) * factor + min;
      }
    } else if (minMax.max !== 0) {
      let factor = max / minMax.max;

      for (let i = 0; i < y.length; i++) {
        y[i] = input[i] * factor;
      }
    } else {
      options.min = minMax.min;
      y = scale(input, options);
    }
  } else if (typeof min === 'number') {
    if (minMax.min !== 0) {
      let factor = min / minMax.min;

      for (let i = 0; i < y.length; i++) {
        y[i] = input[i] * factor;
      }
    } else {
      options.max = minMax.max;
      y = scale(input, options);
    }
  }

  return y;
}

module.exports = {
  coordArrayToPoints: coordArrayToPoints,
  coordArrayToCoordMatrix: coordArrayToCoordMatrix,
  coordMatrixToCoordArray: coordMatrixToCoordArray,
  coordMatrixToPoints: transpose,
  pointsToCoordArray: pointsToCoordArray,
  pointsToCoordMatrix: transpose,
  applyDotProduct: applyDotProduct,
  scale: scale
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayStat = __webpack_require__(2);

function compareNumbers(a, b) {
  return a - b;
}

exports.max = function max(matrix) {
  var max = -Infinity;

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) max = matrix[i][j];
    }
  }

  return max;
};

exports.min = function min(matrix) {
  var min = Infinity;

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) min = matrix[i][j];
    }
  }

  return min;
};

exports.minMax = function minMax(matrix) {
  var min = Infinity;
  var max = -Infinity;

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) min = matrix[i][j];
      if (matrix[i][j] > max) max = matrix[i][j];
    }
  }

  return {
    min: min,
    max: max
  };
};

exports.entropy = function entropy(matrix, eps) {
  if (typeof eps === 'undefined') {
    eps = 0;
  }

  var sum = 0,
      l1 = matrix.length,
      l2 = matrix[0].length;

  for (var i = 0; i < l1; i++) {
    for (var j = 0; j < l2; j++) {
      sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
    }
  }

  return -sum;
};

exports.mean = function mean(matrix, dimension) {
  if (typeof dimension === 'undefined') {
    dimension = 0;
  }

  var rows = matrix.length,
      cols = matrix[0].length,
      theMean,
      N,
      i,
      j;

  if (dimension === -1) {
    theMean = [0];
    N = rows * cols;

    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        theMean[0] += matrix[i][j];
      }
    }

    theMean[0] /= N;
  } else if (dimension === 0) {
    theMean = new Array(cols);
    N = rows;

    for (j = 0; j < cols; j++) {
      theMean[j] = 0;

      for (i = 0; i < rows; i++) {
        theMean[j] += matrix[i][j];
      }

      theMean[j] /= N;
    }
  } else if (dimension === 1) {
    theMean = new Array(rows);
    N = cols;

    for (j = 0; j < rows; j++) {
      theMean[j] = 0;

      for (i = 0; i < cols; i++) {
        theMean[j] += matrix[j][i];
      }

      theMean[j] /= N;
    }
  } else {
    throw new Error('Invalid dimension');
  }

  return theMean;
};

exports.sum = function sum(matrix, dimension) {
  if (typeof dimension === 'undefined') {
    dimension = 0;
  }

  var rows = matrix.length,
      cols = matrix[0].length,
      theSum,
      i,
      j;

  if (dimension === -1) {
    theSum = [0];

    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        theSum[0] += matrix[i][j];
      }
    }
  } else if (dimension === 0) {
    theSum = new Array(cols);

    for (j = 0; j < cols; j++) {
      theSum[j] = 0;

      for (i = 0; i < rows; i++) {
        theSum[j] += matrix[i][j];
      }
    }
  } else if (dimension === 1) {
    theSum = new Array(rows);

    for (j = 0; j < rows; j++) {
      theSum[j] = 0;

      for (i = 0; i < cols; i++) {
        theSum[j] += matrix[j][i];
      }
    }
  } else {
    throw new Error('Invalid dimension');
  }

  return theSum;
};

exports.product = function product(matrix, dimension) {
  if (typeof dimension === 'undefined') {
    dimension = 0;
  }

  var rows = matrix.length,
      cols = matrix[0].length,
      theProduct,
      i,
      j;

  if (dimension === -1) {
    theProduct = [1];

    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        theProduct[0] *= matrix[i][j];
      }
    }
  } else if (dimension === 0) {
    theProduct = new Array(cols);

    for (j = 0; j < cols; j++) {
      theProduct[j] = 1;

      for (i = 0; i < rows; i++) {
        theProduct[j] *= matrix[i][j];
      }
    }
  } else if (dimension === 1) {
    theProduct = new Array(rows);

    for (j = 0; j < rows; j++) {
      theProduct[j] = 1;

      for (i = 0; i < cols; i++) {
        theProduct[j] *= matrix[j][i];
      }
    }
  } else {
    throw new Error('Invalid dimension');
  }

  return theProduct;
};

exports.standardDeviation = function standardDeviation(matrix, means, unbiased) {
  var vari = exports.variance(matrix, means, unbiased),
      l = vari.length;

  for (var i = 0; i < l; i++) {
    vari[i] = Math.sqrt(vari[i]);
  }

  return vari;
};

exports.variance = function variance(matrix, means, unbiased) {
  if (typeof unbiased === 'undefined') {
    unbiased = true;
  }

  means = means || exports.mean(matrix);
  var rows = matrix.length;
  if (rows === 0) return [];
  var cols = matrix[0].length;
  var vari = new Array(cols);

  for (var j = 0; j < cols; j++) {
    var sum1 = 0,
        sum2 = 0,
        x = 0;

    for (var i = 0; i < rows; i++) {
      x = matrix[i][j] - means[j];
      sum1 += x;
      sum2 += x * x;
    }

    if (unbiased) {
      vari[j] = (sum2 - sum1 * sum1 / rows) / (rows - 1);
    } else {
      vari[j] = (sum2 - sum1 * sum1 / rows) / rows;
    }
  }

  return vari;
};

exports.median = function median(matrix) {
  var rows = matrix.length,
      cols = matrix[0].length;
  var medians = new Array(cols);

  for (var i = 0; i < cols; i++) {
    var data = new Array(rows);

    for (var j = 0; j < rows; j++) {
      data[j] = matrix[j][i];
    }

    data.sort(compareNumbers);
    var N = data.length;

    if (N % 2 === 0) {
      medians[i] = (data[N / 2] + data[N / 2 - 1]) * 0.5;
    } else {
      medians[i] = data[Math.floor(N / 2)];
    }
  }

  return medians;
};

exports.mode = function mode(matrix) {
  var rows = matrix.length,
      cols = matrix[0].length,
      modes = new Array(cols),
      i,
      j;

  for (i = 0; i < cols; i++) {
    var itemCount = new Array(rows);

    for (var k = 0; k < rows; k++) {
      itemCount[k] = 0;
    }

    var itemArray = new Array(rows);
    var count = 0;

    for (j = 0; j < rows; j++) {
      var index = itemArray.indexOf(matrix[j][i]);

      if (index >= 0) {
        itemCount[index]++;
      } else {
        itemArray[count] = matrix[j][i];
        itemCount[count] = 1;
        count++;
      }
    }

    var maxValue = 0,
        maxIndex = 0;

    for (j = 0; j < count; j++) {
      if (itemCount[j] > maxValue) {
        maxValue = itemCount[j];
        maxIndex = j;
      }
    }

    modes[i] = itemArray[maxIndex];
  }

  return modes;
};

exports.skewness = function skewness(matrix, unbiased) {
  if (typeof unbiased === 'undefined') unbiased = true;
  var means = exports.mean(matrix);
  var n = matrix.length,
      l = means.length;
  var skew = new Array(l);

  for (var j = 0; j < l; j++) {
    var s2 = 0,
        s3 = 0;

    for (var i = 0; i < n; i++) {
      var dev = matrix[i][j] - means[j];
      s2 += dev * dev;
      s3 += dev * dev * dev;
    }

    var m2 = s2 / n;
    var m3 = s3 / n;
    var g = m3 / Math.pow(m2, 3 / 2);

    if (unbiased) {
      var a = Math.sqrt(n * (n - 1));
      var b = n - 2;
      skew[j] = a / b * g;
    } else {
      skew[j] = g;
    }
  }

  return skew;
};

exports.kurtosis = function kurtosis(matrix, unbiased) {
  if (typeof unbiased === 'undefined') unbiased = true;
  var means = exports.mean(matrix);
  var n = matrix.length,
      m = matrix[0].length;
  var kurt = new Array(m);

  for (var j = 0; j < m; j++) {
    var s2 = 0,
        s4 = 0;

    for (var i = 0; i < n; i++) {
      var dev = matrix[i][j] - means[j];
      s2 += dev * dev;
      s4 += dev * dev * dev * dev;
    }

    var m2 = s2 / n;
    var m4 = s4 / n;

    if (unbiased) {
      var v = s2 / (n - 1);
      var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
      var b = s4 / (v * v);
      var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));
      kurt[j] = a * b - 3 * c;
    } else {
      kurt[j] = m4 / (m2 * m2) - 3;
    }
  }

  return kurt;
};

exports.standardError = function standardError(matrix) {
  var samples = matrix.length;
  var standardDeviations = exports.standardDeviation(matrix);
  var l = standardDeviations.length;
  var standardErrors = new Array(l);
  var sqrtN = Math.sqrt(samples);

  for (var i = 0; i < l; i++) {
    standardErrors[i] = standardDeviations[i] / sqrtN;
  }

  return standardErrors;
};

exports.covariance = function covariance(matrix, dimension) {
  return exports.scatter(matrix, undefined, dimension);
};

exports.scatter = function scatter(matrix, divisor, dimension) {
  if (typeof dimension === 'undefined') {
    dimension = 0;
  }

  if (typeof divisor === 'undefined') {
    if (dimension === 0) {
      divisor = matrix.length - 1;
    } else if (dimension === 1) {
      divisor = matrix[0].length - 1;
    }
  }

  var means = exports.mean(matrix, dimension);
  var rows = matrix.length;

  if (rows === 0) {
    return [[]];
  }

  var cols = matrix[0].length,
      cov,
      i,
      j,
      s,
      k;

  if (dimension === 0) {
    cov = new Array(cols);

    for (i = 0; i < cols; i++) {
      cov[i] = new Array(cols);
    }

    for (i = 0; i < cols; i++) {
      for (j = i; j < cols; j++) {
        s = 0;

        for (k = 0; k < rows; k++) {
          s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
        }

        s /= divisor;
        cov[i][j] = s;
        cov[j][i] = s;
      }
    }
  } else if (dimension === 1) {
    cov = new Array(rows);

    for (i = 0; i < rows; i++) {
      cov[i] = new Array(rows);
    }

    for (i = 0; i < rows; i++) {
      for (j = i; j < rows; j++) {
        s = 0;

        for (k = 0; k < cols; k++) {
          s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
        }

        s /= divisor;
        cov[i][j] = s;
        cov[j][i] = s;
      }
    }
  } else {
    throw new Error('Invalid dimension');
  }

  return cov;
};

exports.correlation = function correlation(matrix) {
  var means = exports.mean(matrix),
      standardDeviations = exports.standardDeviation(matrix, true, means),
      scores = exports.zScores(matrix, means, standardDeviations),
      rows = matrix.length,
      cols = matrix[0].length,
      i,
      j;
  var cor = new Array(cols);

  for (i = 0; i < cols; i++) {
    cor[i] = new Array(cols);
  }

  for (i = 0; i < cols; i++) {
    for (j = i; j < cols; j++) {
      var c = 0;

      for (var k = 0, l = scores.length; k < l; k++) {
        c += scores[k][j] * scores[k][i];
      }

      c /= rows - 1;
      cor[i][j] = c;
      cor[j][i] = c;
    }
  }

  return cor;
};

exports.zScores = function zScores(matrix, means, standardDeviations) {
  means = means || exports.mean(matrix);
  if (typeof standardDeviations === 'undefined') standardDeviations = exports.standardDeviation(matrix, true, means);
  return exports.standardize(exports.center(matrix, means, false), standardDeviations, true);
};

exports.center = function center(matrix, means, inPlace) {
  means = means || exports.mean(matrix);
  var result = matrix,
      l = matrix.length,
      i,
      j,
      jj;

  if (!inPlace) {
    result = new Array(l);

    for (i = 0; i < l; i++) {
      result[i] = new Array(matrix[i].length);
    }
  }

  for (i = 0; i < l; i++) {
    var row = result[i];

    for (j = 0, jj = row.length; j < jj; j++) {
      row[j] = matrix[i][j] - means[j];
    }
  }

  return result;
};

exports.standardize = function standardize(matrix, standardDeviations, inPlace) {
  if (typeof standardDeviations === 'undefined') standardDeviations = exports.standardDeviation(matrix);
  var result = matrix,
      l = matrix.length,
      i,
      j,
      jj;

  if (!inPlace) {
    result = new Array(l);

    for (i = 0; i < l; i++) {
      result[i] = new Array(matrix[i].length);
    }
  }

  for (i = 0; i < l; i++) {
    var resultRow = result[i];
    var sourceRow = matrix[i];

    for (j = 0, jj = resultRow.length; j < jj; j++) {
      if (standardDeviations[j] !== 0 && !isNaN(standardDeviations[j])) {
        resultRow[j] = sourceRow[j] / standardDeviations[j];
      }
    }
  }

  return result;
};

exports.weightedVariance = function weightedVariance(matrix, weights) {
  var means = exports.mean(matrix);
  var rows = matrix.length;
  if (rows === 0) return [];
  var cols = matrix[0].length;
  var vari = new Array(cols);

  for (var j = 0; j < cols; j++) {
    var sum = 0;
    var a = 0,
        b = 0;

    for (var i = 0; i < rows; i++) {
      var z = matrix[i][j] - means[j];
      var w = weights[i];
      sum += w * (z * z);
      b += w;
      a += w * w;
    }

    vari[j] = sum * (b / (b * b - a));
  }

  return vari;
};

exports.weightedMean = function weightedMean(matrix, weights, dimension) {
  if (typeof dimension === 'undefined') {
    dimension = 0;
  }

  var rows = matrix.length;
  if (rows === 0) return [];
  var cols = matrix[0].length,
      means,
      i,
      ii,
      j,
      w,
      row;

  if (dimension === 0) {
    means = new Array(cols);

    for (i = 0; i < cols; i++) {
      means[i] = 0;
    }

    for (i = 0; i < rows; i++) {
      row = matrix[i];
      w = weights[i];

      for (j = 0; j < cols; j++) {
        means[j] += row[j] * w;
      }
    }
  } else if (dimension === 1) {
    means = new Array(rows);

    for (i = 0; i < rows; i++) {
      means[i] = 0;
    }

    for (j = 0; j < rows; j++) {
      row = matrix[j];
      w = weights[j];

      for (i = 0; i < cols; i++) {
        means[j] += row[i] * w;
      }
    }
  } else {
    throw new Error('Invalid dimension');
  }

  var weightSum = arrayStat.sum(weights);

  if (weightSum !== 0) {
    for (i = 0, ii = means.length; i < ii; i++) {
      means[i] /= weightSum;
    }
  }

  return means;
};

exports.weightedCovariance = function weightedCovariance(matrix, weights, means, dimension) {
  dimension = dimension || 0;
  means = means || exports.weightedMean(matrix, weights, dimension);
  var s1 = 0,
      s2 = 0;

  for (var i = 0, ii = weights.length; i < ii; i++) {
    s1 += weights[i];
    s2 += weights[i] * weights[i];
  }

  var factor = s1 / (s1 * s1 - s2);
  return exports.weightedScatter(matrix, weights, means, factor, dimension);
};

exports.weightedScatter = function weightedScatter(matrix, weights, means, factor, dimension) {
  dimension = dimension || 0;
  means = means || exports.weightedMean(matrix, weights, dimension);

  if (typeof factor === 'undefined') {
    factor = 1;
  }

  var rows = matrix.length;

  if (rows === 0) {
    return [[]];
  }

  var cols = matrix[0].length,
      cov,
      i,
      j,
      k,
      s;

  if (dimension === 0) {
    cov = new Array(cols);

    for (i = 0; i < cols; i++) {
      cov[i] = new Array(cols);
    }

    for (i = 0; i < cols; i++) {
      for (j = i; j < cols; j++) {
        s = 0;

        for (k = 0; k < rows; k++) {
          s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
        }

        cov[i][j] = s * factor;
        cov[j][i] = s * factor;
      }
    }
  } else if (dimension === 1) {
    cov = new Array(rows);

    for (i = 0; i < rows; i++) {
      cov[i] = new Array(rows);
    }

    for (i = 0; i < rows; i++) {
      for (j = i; j < rows; j++) {
        s = 0;

        for (k = 0; k < cols; k++) {
          s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
        }

        cov[i][j] = s * factor;
        cov[j][i] = s * factor;
      }
    }
  } else {
    throw new Error('Invalid dimension');
  }

  return cov;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * Function that returns a Number array of equally spaced numberOfPoints
 * containing a representation of intensities of the spectra arguments x
 * and y.
 *
 * The options parameter contains an object in the following form:
 * from: starting point
 * to: last point
 * numberOfPoints: number of points between from and to
 * variant: "slot" or "smooth" - smooth is the default option
 *
 * The slot variant consist that each point in the new array is calculated
 * averaging the existing points between the slot that belongs to the current
 * value. The smooth variant is the same but takes the integral of the range
 * of the slot and divide by the step size between two points in the new array.
 *
 * @param x - sorted increasing x values
 * @param y
 * @param options
 * @returns {Array} new array with the equally spaced data.
 *
 */

function getEquallySpacedData(x, y) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var xLength = x.length;

  if (x.length > 1 && x[0] > x[1]) {
    x = x.slice().reverse();
    y = y.slice().reverse();
  }

  var _options$from = options.from,
      from = _options$from === void 0 ? x[0] : _options$from,
      _options$to = options.to,
      to = _options$to === void 0 ? x[xLength - 1] : _options$to,
      _options$variant = options.variant,
      variant = _options$variant === void 0 ? 'smooth' : _options$variant,
      _options$numberOfPoin = options.numberOfPoints,
      numberOfPoints = _options$numberOfPoin === void 0 ? 100 : _options$numberOfPoin;

  if (xLength !== y.length) {
    throw new RangeError("the x and y vector doesn't have the same size.");
  }

  if (typeof from !== 'number' || isNaN(from)) {
    throw new RangeError("'from' option must be a number");
  }

  if (typeof to !== 'number' || isNaN(to)) {
    throw new RangeError("'to' option must be a number");
  }

  var reverse = from > to;

  if (reverse) {
    var _ref = [to, from];
    from = _ref[0];
    to = _ref[1];
  }

  if (typeof numberOfPoints !== 'number' || isNaN(numberOfPoints)) {
    throw new RangeError("'numberOfPoints' option must be a number");
  }

  if (numberOfPoints < 1) {
    throw new RangeError('the number of points must be at least 1');
  }

  var output = variant === 'slot' ? getEquallySpacedSlot(x, y, from, to, numberOfPoints) : getEquallySpacedSmooth(x, y, from, to, numberOfPoints);
  return reverse ? output.reverse() : output;
}
/**
 * function that retrieves the getEquallySpacedData with the variant "smooth"
 *
 * @param x
 * @param y
 * @param from - Initial point
 * @param to - Final point
 * @param numberOfPoints
 * @returns {Array} - Array of y's equally spaced with the variant "smooth"
 */


function getEquallySpacedSmooth(x, y, from, to, numberOfPoints) {
  var xLength = x.length;
  var step = (to - from) / (numberOfPoints - 1);
  var halfStep = step / 2;
  var output = new Array(numberOfPoints);
  var initialOriginalStep = x[1] - x[0];
  var lastOriginalStep = x[xLength - 1] - x[xLength - 2]; // Init main variables

  var min = from - halfStep;
  var max = from + halfStep;
  var previousX = Number.MIN_VALUE;
  var previousY = 0;
  var nextX = x[0] - initialOriginalStep;
  var nextY = 0;
  var currentValue = 0;
  var slope = 0;
  var intercept = 0;
  var sumAtMin = 0;
  var sumAtMax = 0;
  var i = 0; // index of input

  var j = 0; // index of output

  function getSlope(x0, y0, x1, y1) {
    return (y1 - y0) / (x1 - x0);
  }

  main: while (true) {
    if (previousX <= min && min <= nextX) {
      add = integral(0, min - previousX, slope, previousY);
      sumAtMin = currentValue + add;
    }

    while (nextX - max >= 0) {
      // no overlap with original point, just consume current value
      var add = integral(0, max - previousX, slope, previousY);
      sumAtMax = currentValue + add;
      output[j++] = (sumAtMax - sumAtMin) / step;

      if (j === numberOfPoints) {
        break main;
      }

      min = max;
      max += step;
      sumAtMin = sumAtMax;
    }

    currentValue += integral(previousX, nextX, slope, intercept);
    previousX = nextX;
    previousY = nextY;

    if (i < xLength) {
      nextX = x[i];
      nextY = y[i];
      i++;
    } else if (i === xLength) {
      nextX += lastOriginalStep;
      nextY = 0;
    }

    slope = getSlope(previousX, previousY, nextX, nextY);
    intercept = -slope * previousX + previousY;
  }

  return output;
}
/**
 * function that retrieves the getEquallySpacedData with the variant "slot"
 *
 * @param x
 * @param y
 * @param from - Initial point
 * @param to - Final point
 * @param numberOfPoints
 * @returns {Array} - Array of y's equally spaced with the variant "slot"
 */


function getEquallySpacedSlot(x, y, from, to, numberOfPoints) {
  var xLength = x.length;
  var step = (to - from) / (numberOfPoints - 1);
  var halfStep = step / 2;
  var lastStep = x[x.length - 1] - x[x.length - 2];
  var start = from - halfStep;
  var output = new Array(numberOfPoints); // Init main variables

  var min = start;
  var max = start + step;
  var previousX = -Number.MAX_VALUE;
  var previousY = 0;
  var nextX = x[0];
  var nextY = y[0];
  var frontOutsideSpectra = 0;
  var backOutsideSpectra = true;
  var currentValue = 0; // for slot algorithm

  var currentPoints = 0;
  var i = 1; // index of input

  var j = 0; // index of output

  main: while (true) {
    if (previousX >= nextX) throw new Error('x must be an increasing serie');

    while (previousX - max > 0) {
      // no overlap with original point, just consume current value
      if (backOutsideSpectra) {
        currentPoints++;
        backOutsideSpectra = false;
      }

      output[j] = currentPoints <= 0 ? 0 : currentValue / currentPoints;
      j++;

      if (j === numberOfPoints) {
        break main;
      }

      min = max;
      max += step;
      currentValue = 0;
      currentPoints = 0;
    }

    if (previousX > min) {
      currentValue += previousY;
      currentPoints++;
    }

    if (previousX === -Number.MAX_VALUE || frontOutsideSpectra > 1) {
      currentPoints--;
    }

    previousX = nextX;
    previousY = nextY;

    if (i < xLength) {
      nextX = x[i];
      nextY = y[i];
      i++;
    } else {
      nextX += lastStep;
      nextY = 0;
      frontOutsideSpectra++;
    }
  }

  return output;
}
/**
 * Function that calculates the integral of the line between two
 * x-coordinates, given the slope and intercept of the line.
 * @param x0
 * @param x1
 * @param slope
 * @param intercept
 * @returns {number} integral value.
 */


function integral(x0, x1, slope, intercept) {
  return 0.5 * slope * x1 * x1 + intercept * x1 - (0.5 * slope * x0 * x0 + intercept * x0);
}

exports.getEquallySpacedData = getEquallySpacedData;
exports.integral = integral;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.SNV = SNV;

var Stat = __webpack_require__(1).array;
/**
 * Function that applies the standard normal variate (SNV) to an array of values.
 *
 * @param data - Array of values.
 * @returns {Array} - applied the SNV.
 */


function SNV(data) {
  var mean = Stat.mean(data);
  var std = Stat.standardDeviation(data);
  var result = data.slice();

  for (var i = 0; i < data.length; i++) {
    result[i] = (result[i] - mean) / std;
  }

  return result;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getConverter() {
  // the following RegExp can only be used for XYdata, some peakTables have values with a "E-5" ...
  const ntuplesSeparator = /[, \t]+/;
  const GC_MS_FIELDS = ['TIC', '.RIC', 'SCANNUMBER'];

  function convertToFloatArray(stringArray) {
    var floatArray = [];

    for (let i = 0; i < stringArray.length; i++) {
      floatArray.push(parseFloat(stringArray[i]));
    }

    return floatArray;
  }

  class Spectrum {}

  const defaultOptions = {
    keepRecordsRegExp: /^$/,
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
    var wantXY = !options.withoutXY;
    var start = Date.now();
    var ntuples = {};
    var ldr, dataLabel, dataValue, ldrs;
    var position, endLine, infos;
    var result = {};
    result.profiling = options.profiling ? [] : false;
    result.logs = [];
    var spectra = [];
    result.spectra = spectra;
    result.info = {};
    var spectrum = new Spectrum();

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
      ldr = ldrs[i]; // This is a new LDR

      position = ldr.indexOf('=');

      if (position > 0) {
        dataLabel = ldr.substring(0, position);
        dataValue = ldr.substring(position + 1).trim();
      } else {
        dataLabel = ldr;
        dataValue = '';
      }

      dataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();

      if (dataLabel === 'DATATABLE') {
        endLine = dataValue.indexOf('\n');
        if (endLine === -1) endLine = dataValue.indexOf('\r');

        if (endLine > 0) {
          var xIndex = -1;
          var yIndex = -1; // ##DATA TABLE= (X++(I..I)), XYDATA
          // We need to find the variables

          infos = dataValue.substring(0, endLine).split(/[ ,;\t]+/);

          if (infos[0].indexOf('++') > 0) {
            var firstVariable = infos[0].replace(/.*\(([a-zA-Z0-9]+)\+\+.*/, '$1');
            var secondVariable = infos[0].replace(/.*\.\.([a-zA-Z0-9]+).*/, '$1');
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
            dataLabel = 'PEAKTABLE';
          } else if (infos[1] && (infos[1].indexOf('XYDATA') || infos[0].indexOf('++') > 0)) {
            dataLabel = 'XYDATA';
            spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
          }
        }
      }

      if (dataLabel === 'XYDATA') {
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
      } else if (dataLabel === 'PEAKTABLE') {
        if (wantXY) {
          prepareSpectrum(result, spectrum);
          parsePeakTable(spectrum, dataValue, result);
          spectra.push(spectrum);
          spectrum = new Spectrum();
        }

        continue;
      }

      if (dataLabel === 'PEAKASSIGNMENTS') {
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

      if (dataLabel === 'TITLE') {
        spectrum.title = dataValue;
      } else if (dataLabel === 'DATATYPE') {
        spectrum.dataType = dataValue;

        if (dataValue.indexOf('nD') > -1) {
          result.twoD = true;
        }
      } else if (dataLabel === 'NTUPLES') {
        if (dataValue.indexOf('nD') > -1) {
          result.twoD = true;
        }
      } else if (dataLabel === 'XUNITS') {
        spectrum.xUnit = dataValue;
      } else if (dataLabel === 'YUNITS') {
        spectrum.yUnit = dataValue;
      } else if (dataLabel === 'FIRSTX') {
        spectrum.firstX = parseFloat(dataValue);
      } else if (dataLabel === 'LASTX') {
        spectrum.lastX = parseFloat(dataValue);
      } else if (dataLabel === 'FIRSTY') {
        spectrum.firstY = parseFloat(dataValue);
      } else if (dataLabel === 'LASTY') {
        spectrum.lastY = parseFloat(dataValue);
      } else if (dataLabel === 'NPOINTS') {
        spectrum.nbPoints = parseFloat(dataValue);
      } else if (dataLabel === 'XFACTOR') {
        spectrum.xFactor = parseFloat(dataValue);
      } else if (dataLabel === 'YFACTOR') {
        spectrum.yFactor = parseFloat(dataValue);
      } else if (dataLabel === 'MAXX') {
        spectrum.maxX = parseFloat(dataValue);
      } else if (dataLabel === 'MINX') {
        spectrum.minX = parseFloat(dataValue);
      } else if (dataLabel === 'MAXY') {
        spectrum.maxY = parseFloat(dataValue);
      } else if (dataLabel === 'MINY') {
        spectrum.minY = parseFloat(dataValue);
      } else if (dataLabel === 'DELTAX') {
        spectrum.deltaX = parseFloat(dataValue);
      } else if (dataLabel === '.OBSERVEFREQUENCY' || dataLabel === '$SFO1') {
        if (!spectrum.observeFrequency) {
          spectrum.observeFrequency = parseFloat(dataValue);
        }
      } else if (dataLabel === '.OBSERVENUCLEUS') {
        if (!spectrum.xType) {
          result.xType = dataValue.replace(/[^a-zA-Z0-9]/g, '');
        }
      } else if (dataLabel === '$SFO2') {
        if (!result.indirectFrequency) {
          result.indirectFrequency = parseFloat(dataValue);
        }
      } else if (dataLabel === '$OFFSET') {
        // OFFSET for Bruker spectra
        result.shiftOffsetNum = 0;

        if (!spectrum.shiftOffsetVal) {
          spectrum.shiftOffsetVal = parseFloat(dataValue);
        }
      } else if (dataLabel === '$REFERENCEPOINT') {// OFFSET for Varian spectra
        // if we activate this part it does not work for ACD specmanager
        //         } else if (dataLabel=='.SHIFTREFERENCE') {   // OFFSET FOR Bruker Spectra
        //                 var parts = dataValue.split(/ *, */);
        //                 result.shiftOffsetNum = parseInt(parts[2].trim());
        //                 spectrum.shiftOffsetVal = parseFloat(parts[3].trim());
      } else if (dataLabel === 'VARNAME') {
        ntuples.varname = dataValue.split(ntuplesSeparator);
      } else if (dataLabel === 'SYMBOL') {
        ntuples.symbol = dataValue.split(ntuplesSeparator);
      } else if (dataLabel === 'VARTYPE') {
        ntuples.vartype = dataValue.split(ntuplesSeparator);
      } else if (dataLabel === 'VARFORM') {
        ntuples.varform = dataValue.split(ntuplesSeparator);
      } else if (dataLabel === 'VARDIM') {
        ntuples.vardim = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (dataLabel === 'UNITS') {
        ntuples.units = dataValue.split(ntuplesSeparator);
      } else if (dataLabel === 'FACTOR') {
        ntuples.factor = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (dataLabel === 'FIRST') {
        ntuples.first = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (dataLabel === 'LAST') {
        ntuples.last = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (dataLabel === 'MIN') {
        ntuples.min = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (dataLabel === 'MAX') {
        ntuples.max = convertToFloatArray(dataValue.split(ntuplesSeparator));
      } else if (dataLabel === '.NUCLEUS') {
        if (result.twoD) {
          result.yType = dataValue.split(ntuplesSeparator)[0];
        }
      } else if (dataLabel === 'PAGE') {
        spectrum.page = dataValue.trim();
        spectrum.pageValue = parseFloat(dataValue.replace(/^.*=/, ''));
        spectrum.pageSymbol = spectrum.page.replace(/[=].*/, '');
        var pageSymbolIndex = ntuples.symbol.indexOf(spectrum.pageSymbol);
        var unit = '';

        if (ntuples.units && ntuples.units[pageSymbolIndex]) {
          unit = ntuples.units[pageSymbolIndex];
        }

        if (result.indirectFrequency && unit !== 'PPM') {
          spectrum.pageValue /= result.indirectFrequency;
        }
      } else if (dataLabel === 'RETENTIONTIME') {
        spectrum.pageValue = parseFloat(dataValue);
      } else if (isMSField(dataLabel)) {
        spectrum[convertMSFieldToLabel(dataLabel)] = dataValue;
      } else if (dataLabel === 'SAMPLEDESCRIPTION') {
        spectrum.sampleDescription = dataValue;
      }

      if (dataLabel.match(options.keepRecordsRegExp)) {
        if (result.info[dataLabel]) {
          if (!Array.isArray(result.info[dataLabel])) {
            result.info[dataLabel] = [result.info[dataLabel]];
          }

          result.info[dataLabel].push(dataValue.trim());
        } else {
          result.info[dataLabel] = dataValue.trim();
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
      var newNtuples = [];
      var keys = Object.keys(ntuples);

      for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        var values = ntuples[key];

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
              var data = spectrum.data[j];
              var newData = {
                x: new Array(data.length / 2),
                y: new Array(data.length / 2)
              };

              for (var k = 0; k < data.length; k = k + 2) {
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

  function isMSField(dataLabel) {
    return GC_MS_FIELDS.indexOf(dataLabel) !== -1;
  }

  function complexChromatogram(result) {
    var spectra = result.spectra;
    var length = spectra.length;
    var chromatogram = {
      times: new Array(length),
      series: {
        ms: {
          dimension: 2,
          data: new Array(length)
        }
      }
    };
    var existingGCMSFields = [];

    for (let i = 0; i < GC_MS_FIELDS.length; i++) {
      var label = convertMSFieldToLabel(GC_MS_FIELDS[i]);

      if (spectra[0][label]) {
        existingGCMSFields.push(label);
        chromatogram.series[label] = {
          dimension: 1,
          data: new Array(length)
        };
      }
    }

    for (let i = 0; i < length; i++) {
      var spectrum = spectra[i];
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
    var data = result.spectra[0].data[0];
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
      var shift = spectrum.firstX - spectrum.shiftOffsetVal;
      spectrum.firstX = spectrum.firstX - shift;
      spectrum.lastX = spectrum.lastX - shift;
    }
  }

  function getMedian(data) {
    data = data.sort(compareNumbers);
    var l = data.length;
    return data[Math.floor(l / 2)];
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  function convertTo3DZ(spectra) {
    var minZ = spectra[0].data[0][0];
    var maxZ = minZ;
    var ySize = spectra.length;
    var xSize = spectra[0].data[0].length / 2;
    var z = new Array(ySize);

    for (let i = 0; i < ySize; i++) {
      z[i] = new Array(xSize);
      var xVector = spectra[i].data[0];

      for (let j = 0; j < xSize; j++) {
        var value = xVector[j * 2 + 1];
        z[i][j] = value;
        if (value < minZ) minZ = value;
        if (value > maxZ) maxZ = value;
      }
    }

    return {
      z: z,
      minX: spectra[0].data[0][0],
      maxX: spectra[0].data[0][spectra[0].data[0].length - 2],
      // has to be -2 because it is a 1D array [x,y,x,y,...]
      minY: spectra[0].pageValue,
      maxY: spectra[ySize - 1].pageValue,
      minZ: minZ,
      maxZ: maxZ,
      noise: getMedian(z[0].map(Math.abs))
    };
  }

  function add2D(result, options) {
    var zData = convertTo3DZ(result.spectra);

    if (!options.noContour) {
      result.contourLines = generateContourLines(zData, options);
      delete zData.z;
    }

    result.minMax = zData;
  }

  function generateContourLines(zData, options) {
    var noise = zData.noise;
    var z = zData.z;
    var povarHeight0, povarHeight1, povarHeight2, povarHeight3;
    var isOver0, isOver1, isOver2, isOver3;
    var nbSubSpectra = z.length;
    var nbPovars = z[0].length;
    var pAx, pAy, pBx, pBy;
    var x0 = zData.minX;
    var xN = zData.maxX;
    var dx = (xN - x0) / (nbPovars - 1);
    var y0 = zData.minY;
    var yN = zData.maxY;
    var dy = (yN - y0) / (nbSubSpectra - 1);
    var minZ = zData.minZ;
    var maxZ = zData.maxZ; // System.out.prvarln('y0 '+y0+' yN '+yN);
    // -------------------------
    // Povars attribution
    //
    // 0----1
    // |  / |
    // | /  |
    // 2----3
    //
    // ---------------------d------

    var iter = options.nbContourLevels * 2;
    var contourLevels = new Array(iter);
    var lineZValue;

    for (var level = 0; level < iter; level++) {
      // multiply by 2 for positif and negatif
      var contourLevel = {};
      contourLevels[level] = contourLevel;
      var side = level % 2;
      var factor = (maxZ - options.noiseMultiplier * noise) * Math.exp((level >> 1) - options.nbContourLevels);

      if (side === 0) {
        lineZValue = factor + options.noiseMultiplier * noise;
      } else {
        lineZValue = 0 - factor - options.noiseMultiplier * noise;
      }

      var lines = [];
      contourLevel.zValue = lineZValue;
      contourLevel.lines = lines;
      if (lineZValue <= minZ || lineZValue >= maxZ) continue;

      for (var iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
        var subSpectra = z[iSubSpectra];
        var subSpectraAfter = z[iSubSpectra + 1];

        for (var povar = 0; povar < nbPovars - 1; povar++) {
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
    var yFactor = spectrum.yFactor;
    var deltaX = spectrum.deltaX;
    spectrum.isXYdata = true; // TODO to be improved using 2 array {x:[], y:[]}

    var currentData = [];
    spectrum.data = [currentData];
    var currentX = spectrum.firstX;
    var currentY = spectrum.firstY; // we skip the first line
    //

    var endLine = false;
    var ascii;
    let i = 0;

    for (; i < value.length; i++) {
      ascii = value.charCodeAt(i);

      if (ascii === 13 || ascii === 10) {
        endLine = true;
      } else {
        if (endLine) break;
      }
    } // we proceed taking the i after the first line


    var newLine = true;
    var isDifference = false;
    var isLastDifference = false;
    var lastDifference = 0;
    var isDuplicate = false;
    var inComment = false;
    var currentValue = 0; // can be a difference or a duplicate

    var lastValue = 0; // must be the real last value

    var isNegative = false;
    var inValue = false;
    var skipFirstValue = false;
    var decimalPosition = 0;

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

                var duplicate = isDuplicate ? currentValue - 1 : 1;

                for (var j = 0; j < duplicate; j++) {
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
            var ascii2 = value.charCodeAt(i + 1);

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
    var removeSymbolRegExp = /(\(+|\)+|<+|>+|\s+)/g;
    spectrum.isXYAdata = true;
    var values;
    var currentData = [];
    spectrum.data = [currentData];
    var lines = value.split(/,? *,?[;\r\n]+ */);

    for (let i = 1; i < lines.length; i++) {
      values = lines[i].trim().replace(removeSymbolRegExp, '').split(',');
      currentData.push(parseFloat(values[0]));
      currentData.push(parseFloat(values[1]));
    }
  }

  function parsePeakTable(spectrum, value, result) {
    var removeCommentRegExp = /\$\$.*/;
    var peakTableSplitRegExp = /[,\t ]+/;
    spectrum.isPeaktable = true;
    var values;
    var currentData = [];
    spectrum.data = [currentData]; // counts for around 20% of the time

    var lines = value.split(/,? *,?[;\r\n]+ */);

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

var convert = getConverter();

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

var stamps = {};
var worker;

function postToWorker(input, options) {
  if (!worker) {
    createWorker();
  }

  return new Promise(function (resolve) {
    var stamp = "".concat(Date.now()).concat(Math.random());
    stamps[stamp] = resolve;
    worker.postMessage(JSON.stringify({
      stamp: stamp,
      input: input,
      options: options
    }));
  });
}

function createWorker() {
  var workerURL = URL.createObjectURL(new Blob(["var getConverter =".concat(getConverter.toString(), ";var convert = getConverter(); onmessage = function (event) { var data = JSON.parse(event.data); postMessage(JSON.stringify({stamp: data.stamp, output: convert(data.input, data.options)})); };")], {
    type: 'application/javascript'
  }));
  worker = new Worker(workerURL);
  URL.revokeObjectURL(workerURL);
  worker.addEventListener('message', function (event) {
    var data = JSON.parse(event.data);
    var stamp = data.stamp;

    if (stamps[stamp]) {
      stamps[stamp](data.output);
    }
  });
}

function createTree(jcamp) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const _options$flatten = options.flatten,
        flatten = _options$flatten === void 0 ? false : _options$flatten;

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

  for (var i = 0; i < lines.length; i++) {
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
      var finished = stack.pop();

      if (stack.length !== 0) {
        current = stack[stack.length - 1];
        current.children.push(finished);
      } else {
        current = undefined;
        result.push(finished);
      }
    } else if (current && current.jcamp) {
      current.jcamp += "".concat(line, "\n");
      var match = labelLine.match(/^##(.*?)=(.+)/);

      if (match) {
        var dataLabel = match[1].replace(/[ _-]/g, '').toUpperCase();

        if (dataLabel === 'DATATYPE') {
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseXY", function() { return parseXY; });
/* harmony import */ var ml_arrayxy_uniquex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var ml_arrayxy_uniquex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ml_arrayxy_uniquex__WEBPACK_IMPORTED_MODULE_0__);

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
  const _options$normalize = options.normalize,
        normalize = _options$normalize === void 0 ? false : _options$normalize,
        _options$uniqueX = options.uniqueX,
        uniqueX = _options$uniqueX === void 0 ? false : _options$uniqueX,
        _options$arrayType = options.arrayType,
        arrayType = _options$arrayType === void 0 ? 'xyxy' : _options$arrayType,
        _options$xColumn = options.xColumn,
        xColumn = _options$xColumn === void 0 ? 0 : _options$xColumn,
        _options$yColumn = options.yColumn,
        yColumn = _options$yColumn === void 0 ? 1 : _options$yColumn,
        _options$keepInfo = options.keepInfo,
        keepInfo = _options$keepInfo === void 0 ? false : _options$keepInfo,
        _options$maxNumberCol = options.maxNumberColumns,
        maxNumberColumns = _options$maxNumberCol === void 0 ? Math.max(xColumn, yColumn) + 1 : _options$maxNumberCol,
        _options$minNumberCol = options.minNumberColumns,
        minNumberColumns = _options$minNumberCol === void 0 ? Math.max(xColumn, yColumn) + 1 : _options$minNumberCol;
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
    ml_arrayxy_uniquex__WEBPACK_IMPORTED_MODULE_0___default()(result[0], result[1]);
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

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/is-any-array/src/index.js
var src = __webpack_require__(0);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./node_modules/ml-array-sequential-fill/lib-es6/index.js


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Fill an array with sequential numbers
 * @param {Array<number>} [input] - optional destination array (if not provided a new array will be created)
 * @param {object} [options={}]
 * @param {number} [options.from=0] - first value in the array
 * @param {number} [options.to=10] - last value in the array
 * @param {number} [options.size=input.length] - size of the array (if not provided calculated from step)
 * @param {number} [options.step] - if not provided calculated from size
 * @return {Array<number>}
 */


function sequentialFill() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_typeof(input) === 'object' && !src_default()(input)) {
    options = input;
    input = [];
  }

  if (!src_default()(input)) {
    throw new TypeError('input must be an array');
  }

  var _options = options,
      _options$from = _options.from,
      from = _options$from === void 0 ? 0 : _options$from,
      _options$to = _options.to,
      to = _options$to === void 0 ? 10 : _options$to,
      _options$size = _options.size,
      size = _options$size === void 0 ? input.length : _options$size,
      step = _options.step;

  if (size && step) {
    throw new Error('step is defined by the array size');
  }

  if (!size) {
    if (step) {
      size = Math.floor((to - from) / step) + 1;
    } else {
      size = to - from + 1;
    }
  }

  if (!step && size) {
    step = (to - from) / (size - 1);
  }

  if (Array.isArray(input)) {
    input.length = 0; // only works with normal array

    for (var i = 0; i < size; i++) {
      input.push(from);
      from += step;
    }
  } else {
    if (input.length !== size) {
      throw new Error('sequentialFill typed array must have the correct length');
    }

    for (var _i = 0; _i < size; _i++) {
      input[_i] = from;
      from += step;
    }
  }

  return input;
}

/* harmony default export */ var lib_es6 = (sequentialFill);
// CONCATENATED MODULE: ./node_modules/ml-array-xy-equally-spaced/src/integral.js
/**
 * Function that calculates the integral of the line between two
 * x-coordinates, given the slope and intercept of the line.
 * @param x0
 * @param x1
 * @param slope
 * @param intercept
 * @return {number} integral value.
 */
function integral(x0, x1, slope, intercept) {
  return 0.5 * slope * x1 * x1 + intercept * x1 - (0.5 * slope * x0 * x0 + intercept * x0);
}
// CONCATENATED MODULE: ./node_modules/ml-array-xy-equally-spaced/src/equallySpacedSmooth.js

/**
 * function that retrieves the getEquallySpacedData with the variant "smooth"
 *
 * @param {Array<number>} x
 * @param {Array<number>} y
 * @param {number} from - Initial point
 * @param {number} to - Final point
 * @param {number} numberOfPoints
 * @return {Array} - Array of y's equally spaced with the variant "smooth"
 */

function equallySpacedSmooth(x, y, from, to, numberOfPoints) {
  var xLength = x.length;
  var step = (to - from) / (numberOfPoints - 1);
  var halfStep = step / 2;
  var output = new Array(numberOfPoints);
  var initialOriginalStep = x[1] - x[0];
  var lastOriginalStep = x[xLength - 1] - x[xLength - 2]; // Init main variables

  var min = from - halfStep;
  var max = from + halfStep;
  var previousX = Number.MIN_VALUE;
  var previousY = 0;
  var nextX = x[0] - initialOriginalStep;
  var nextY = 0;
  var currentValue = 0;
  var slope = 0;
  var intercept = 0;
  var sumAtMin = 0;
  var sumAtMax = 0;
  var i = 0; // index of input

  var j = 0; // index of output

  function getSlope(x0, y0, x1, y1) {
    return (y1 - y0) / (x1 - x0);
  }

  main: while (true) {
    if (previousX <= min && min <= nextX) {
      add = integral(0, min - previousX, slope, previousY);
      sumAtMin = currentValue + add;
    }

    while (nextX - max >= 0) {
      // no overlap with original point, just consume current value
      var add = integral(0, max - previousX, slope, previousY);
      sumAtMax = currentValue + add;
      output[j++] = (sumAtMax - sumAtMin) / step;

      if (j === numberOfPoints) {
        break main;
      }

      min = max;
      max += step;
      sumAtMin = sumAtMax;
    }

    currentValue += integral(previousX, nextX, slope, intercept);
    previousX = nextX;
    previousY = nextY;

    if (i < xLength) {
      nextX = x[i];
      nextY = y[i];
      i++;
    } else if (i === xLength) {
      nextX += lastOriginalStep;
      nextY = 0;
    }

    slope = getSlope(previousX, previousY, nextX, nextY);
    intercept = -slope * previousX + previousY;
  }

  return output;
}
// CONCATENATED MODULE: ./node_modules/ml-array-xy-equally-spaced/src/equallySpacedSlot.js
/**
 * function that retrieves the getEquallySpacedData with the variant "slot"
 *
 * @param {Array<number>} x
 * @param {Array<number>} y
 * @param {number} from - Initial point
 * @param {number} to - Final point
 * @param {number} numberOfPoints
 * @return {Array} - Array of y's equally spaced with the variant "slot"
 */
function equallySpacedSlot(x, y, from, to, numberOfPoints) {
  var xLength = x.length;
  var step = (to - from) / (numberOfPoints - 1);
  var halfStep = step / 2;
  var lastStep = x[x.length - 1] - x[x.length - 2];
  var start = from - halfStep;
  var output = new Array(numberOfPoints); // Init main variables

  var min = start;
  var max = start + step;
  var previousX = -Number.MAX_VALUE;
  var previousY = 0;
  var nextX = x[0];
  var nextY = y[0];
  var frontOutsideSpectra = 0;
  var backOutsideSpectra = true;
  var currentValue = 0; // for slot algorithm

  var currentPoints = 0;
  var i = 1; // index of input

  var j = 0; // index of output

  main: while (true) {
    if (previousX >= nextX) throw new Error('x must be an increasing serie');

    while (previousX - max > 0) {
      // no overlap with original point, just consume current value
      if (backOutsideSpectra) {
        currentPoints++;
        backOutsideSpectra = false;
      }

      output[j] = currentPoints <= 0 ? 0 : currentValue / currentPoints;
      j++;

      if (j === numberOfPoints) {
        break main;
      }

      min = max;
      max += step;
      currentValue = 0;
      currentPoints = 0;
    }

    if (previousX > min) {
      currentValue += previousY;
      currentPoints++;
    }

    if (previousX === -Number.MAX_VALUE || frontOutsideSpectra > 1) {
      currentPoints--;
    }

    previousX = nextX;
    previousY = nextY;

    if (i < xLength) {
      nextX = x[i];
      nextY = y[i];
      i++;
    } else {
      nextX += lastStep;
      nextY = 0;
      frontOutsideSpectra++;
    }
  }

  return output;
}
// CONCATENATED MODULE: ./node_modules/ml-array-xy-equally-spaced/src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return equallySpaced; });



/**
 * Function that returns a Number array of equally spaced numberOfPoints
 * containing a representation of intensities of the spectra arguments x
 * and y.
 *
 * The options parameter contains an object in the following form:
 * from: starting point
 * to: last point
 * numberOfPoints: number of points between from and to
 * variant: "slot" or "smooth" - smooth is the default option
 *
 * The slot variant consist that each point in the new array is calculated
 * averaging the existing points between the slot that belongs to the current
 * value. The smooth variant is the same but takes the integral of the range
 * of the slot and divide by the step size between two points in the new array.
 *
 * @param {object} [arrayXY={}] - object containing 2 properties x and y (both an array)
 * @param {object} [options={}]
 * @param {number} [options.from=x[0]]
 * @param {number} [options.to=x[x.length-1]]
 * @param {string} [options.variant='smooth']
 * @param {number} [options.numberOfPoints=100]
 * @return {object<x: Array, y:Array} new object with x / y array with the equally spaced data.
 */

function equallySpaced() {
  let arrayXY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var x = arrayXY.x,
      y = arrayXY.y;
  var xLength = x.length;

  if (x.length > 1 && x[0] > x[1]) {
    x = x.slice().reverse();
    y = y.slice().reverse();
  }

  var _options$from = options.from,
      from = _options$from === void 0 ? x[0] : _options$from,
      _options$to = options.to,
      to = _options$to === void 0 ? x[xLength - 1] : _options$to,
      _options$variant = options.variant,
      variant = _options$variant === void 0 ? 'smooth' : _options$variant,
      _options$numberOfPoin = options.numberOfPoints,
      numberOfPoints = _options$numberOfPoin === void 0 ? 100 : _options$numberOfPoin;

  if (xLength !== y.length) {
    throw new RangeError("the x and y vector doesn't have the same size.");
  }

  if (typeof from !== 'number' || isNaN(from)) {
    throw new RangeError("'from' option must be a number");
  }

  if (typeof to !== 'number' || isNaN(to)) {
    throw new RangeError("'to' option must be a number");
  }

  var originalFrom = from;
  var originalTo = to;
  var reverse = from > to;

  if (reverse) {
    var _ref = [to, from];
    from = _ref[0];
    to = _ref[1];
  }

  if (typeof numberOfPoints !== 'number' || isNaN(numberOfPoints)) {
    throw new RangeError("'numberOfPoints' option must be a number");
  }

  if (numberOfPoints < 1) {
    throw new RangeError('the number of points must be at least 1');
  }

  var output = variant === 'slot' ? equallySpacedSlot(x, y, from, to, numberOfPoints) : equallySpacedSmooth(x, y, from, to, numberOfPoints);
  return {
    x: lib_es6({
      from: originalFrom,
      to: originalTo,
      size: numberOfPoints
    }),
    y: reverse ? output.reverse() : output
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=cv-spectrum.js.map