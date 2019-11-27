import toJcamp from './to/toJcamp';

/**
 * Class allowing manipulate one UV spectrum
 * @class spectrum
 * @param {object} [data={}] - object containing a spectrum
 * @param {Array} [data.x=[]] - voltage
 * @param {Array} [data.y=[]] - intensity
 */
export class Spectrum {
  constructor(x, y, id, options = {}) {
    const { meta = {} } = options;
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

Spectrum.prototype.getData = function() {
  return { x: this.x, y: this.y };
};

Spectrum.prototype.toJcamp = function() {
  return toJcamp(this);
};
