import { getAnnotations } from './jsgraph/getAnnotations';
import toJcamp from './to/toJcamp';

/**
 * Class allowing manipulate one UV spectrum
 * @class spectrum
 * @param {object} [data={}] - object containing a spectrum
 * @param {Array} [data.x=[]] - voltage
 * @param {Array} [data.y=[]] - intensity
 */
export class Spectrum {
  constructor(data = { x: [], y: [] }, meta = {}, id = Math.random()) {
    this.data = data;
    this.meta = meta;
    this.id = id;
  }

  getXLabel() {
    return 'Voltage [V]';
  }

  getYLabel() {
    return 'Intensity [A]';
  }
}

Spectrum.prototype.getAnnotations = function(options) {
  return getAnnotations(this, options);
};

Spectrum.prototype.getData = function(options = {}) {
  const { xFactor = 1, yFactor = 1 } = options;
  return {
    x: this.data.x.map(x => x * xFactor),
    y: this.data.y.map(y => y * yFactor)
  };
};

Spectrum.prototype.toJcamp = function() {
  return toJcamp(this);
};
