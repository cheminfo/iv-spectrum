import { readFileSync } from "fs";
import { join } from "path";

import fromJcamp from "../fromJcamp";

test("Parse a sIv", () => {
  let jcamp = readFileSync(
    join(__dirname, "../../../testFiles/test.jdx"),
    "utf8"
  );
  let result = fromJcamp(jcamp);
  console.log(result);
});
