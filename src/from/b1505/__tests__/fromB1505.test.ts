import { readFileSync } from 'fs';
import { join } from 'path';

import { Analysis } from 'common-spectrum';

import {
  fromBreakdown,
  fromHEMTBreakdown,
  fromCapacitance,
  fromIV,
  fromOutput,
  fromTransfer,
  fromMOSCapacitance,
  fromNoffOutput,
  fromNoffTransfer,
} from '../index';

function testFile(
  name: string,
  func: (text: string) => Analysis[],
  length: number,
) {
  let csv = readFileSync(
    join(__dirname, `../../../../testFiles/B1505/${name}`),
    'latin1',
  );
  let analyses = func(csv);
  for (const analysis of analyses) {
    const { 'default.xLabel': xLabel, 'default.yLabel': yLabel } =
      analysis.spectra[0]?.meta || {};
    let spectrum = analysis.getXYSpectrum({ xLabel, yLabel });

    expect(spectrum?.variables.x.data).toHaveLength(length);
    expect(spectrum?.variables.x.label).toStrictEqual(xLabel);

    expect(spectrum?.variables.y.data).toHaveLength(length);
    expect(spectrum?.variables.y.label).toStrictEqual(yLabel);
  }
}

describe('Breakdown', () => {
  it('Breakdown', () => {
    testFile('Breakdown/breakdown.csv', fromBreakdown, 119);
  });

  it('Multiple breakdown', () => {
    let csv = readFileSync(
      join(
        __dirname,
        '../../../../testFiles/B1505/Breakdown/multiple_breakdown.csv',
      ),
      'latin1',
    );
    let analyses = fromBreakdown(csv);
    expect(analyses).toHaveLength(164);
  });

  it('HEMT Breakdown', () => {
    testFile('Breakdown/HEMT_breakdown.csv', fromHEMTBreakdown, 407);
  });
});

describe('Capacitance', () => {
  it('High voltage', () => {
    testFile('Capacitance/high_voltage.csv', fromCapacitance, 1000);
  });

  it('MOS capacitance', () => {
    testFile('Capacitance/mos_cap.csv', fromMOSCapacitance, 1000);
  });
});

test('IV', () => {
  testFile('IV/sweep.csv', fromIV, 200);
  testFile('IV/sweep_diode.csv', fromIV, 200);
});

describe('Output', () => {
  it('F implant', () => {
    testFile('Output/f_implant.csv', fromOutput, 3207);
  });

  it('lpcvd', () => {
    testFile('Output/lpcvd.csv', fromOutput, 200);
  });

  it('noff trigate', () => {
    testFile('Output/noff_trigate.csv', fromNoffOutput, 300);
  });

  it('Output', () => {
    testFile('Output/output.csv', fromOutput, 200);
  });
});

describe('Transfer', () => {
  it('HEMT transfer', () => {
    testFile('Transfer/hemt_transfer.csv', fromTransfer, 200);
  });

  it('noff trigate', () => {
    testFile('Transfer/noff_trigate.csv', fromNoffTransfer, 200);
  });
});
