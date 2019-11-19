import { convert as converter } from "jcampconverter";

import { Spectrum } from "../Spectrum";
/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Spectrum} - New class element with the given data
 */
export default function fromJcamp(jcamp) {
  const converted = converter(jcamp, { xy: true, keepRecordsRegExp: /.*/ });

  let data = converted.spectra[0].data[0];
  let info = converted.info;
  let meta = {};
  for (let key of Object.keys(info).filter(key => key.startsWith("$"))) {
    meta[key.substr(1)] = info[key];
  }
  return new Spectrum(data, meta);
}
