import { getAnnotations } from "./jsgraph/getAnnotations";
import { getData } from "./jsgraph/getData";

/**
 * Class allowing manipulate one UV spectrum
 * @class spectrum
 * @param {object} [data={}] - object containing a spectrum
 * @param {Array} [data.x=[]] - voltage
 * @param {Array} [data.y=[]] - intensity
 */
export class Spectrum {
  constructor(data = { x: [], y: [] }, id = Math.random(), meta = {}) {
    this.data = data;
    this.id = id;
    this.meta = meta;
  }

  getXLabel() {
    return "Voltage [V]";
  }

  getYLabel() {
    return "Intensity [A]";
  }
}

Spectrum.prototype.getAnnotations = function(options) {
  return getAnnotations(this, options);
};
Spectrum.prototype.getData = function(options) {
  return getData(this, options);
};
