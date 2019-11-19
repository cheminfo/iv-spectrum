import { readFileSync } from "fs";
import { join } from "path";

import { fromSIV } from "..";

import { Spectrum } from "../Spectrum";

test("Test load / save jcamp", () => {
  let text = readFileSync(join(__dirname, "../../testFiles/test.sIv"), "utf8");
  let spectra = fromSIV(text);
  let jcamp = spectra[0].toJcamp();
  console.log(jcamp);
});
