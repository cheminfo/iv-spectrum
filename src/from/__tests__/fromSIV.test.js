import { readFileSync } from "fs";
import { join } from "path";

import fromSIV from "../fromSIV";

test("fromSIV", () => {
  let siv = readFileSync(
    join(__dirname, "../../../testFiles/test.sIv"),
    "utf8"
  );
  let spectra = fromSIV(siv);

  let experiments = spectra.map(spectrum => spectrum.meta.experiment);
  console.log(experiments);
  expect(spectra.length).toBe(4);
  expect.console.log(result);
});
