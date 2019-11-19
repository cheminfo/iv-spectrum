export class Spectra {
  constructor() {
    this.data = [];
  }

  /**
   * Add a spectrum
   * @param {Spectrum} spectrum
   * @param {string} id
   * @param {object} [meta={}]
   */
  addSpectrum(spectrum, id, meta = {}) {
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

  getSpectrumIndex(id) {
    if (!id) return undefined;
    for (let i = 0; i < this.data.length; i++) {
      let spectrum = this.data[i];
      if (spectrum.id === id) return i;
    }
    return undefined;
  }
}
