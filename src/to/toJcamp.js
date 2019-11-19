import { fromJson } from "convert-to-jcamp";

export default function toJcamp(spectrum) {
  let meta = {
    // title: spectrum.sampleMeta.cellname,
    owner: "",
    origin: "",
    type: "IV curve",
    xUnit: "difference in electric potential [V]",
    yUnit: "intensity [A]",
    info: spectrum.meta
  };

  return fromJson(spectrum.data, meta);
}
