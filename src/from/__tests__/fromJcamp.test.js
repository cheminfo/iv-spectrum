import { readFileSync } from "fs";
import { join } from "path";

import { fromJcamp } from "../fromJcamp";
import { exportAllDeclaration } from "@babel/types";

test("fromJcamp", () => {
  let jcamp = readFileSync(
    join(__dirname, "../../../testFiles/test.jdx"),
    "utf8"
  );
  let result = fromJcamp(jcamp);
  expect(result.data.x.length).toBe(120);
  expect(result.data.y.length).toBe(120);
  expect(result.meta.workingTemperature).toBe(298);
});
