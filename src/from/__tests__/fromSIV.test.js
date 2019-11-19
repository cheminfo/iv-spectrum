import { readFileSync } from "fs";
import { join } from "path";

import fromSIV from "../fromSIV";

test("Parse a sIv", () => {
  let siv = readFileSync(
    join(__dirname, "../../../testFiles/test.sIv"),
    "utf8"
  );
  let result = fromSIV(siv);
});
