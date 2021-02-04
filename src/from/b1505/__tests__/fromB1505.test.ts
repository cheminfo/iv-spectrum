import { readFileSync } from 'fs';
import { join } from 'path';

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
  title: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: (text: string) => any,
  xLabel: string,
  yLabel: string,
  length: number,
) {
  let csv = readFileSync(
    join(__dirname, `../../../../testFiles/B1505/${name}`),
    'latin1',
  );
  let analysis = func(csv);
  let spectrum = analysis.getXYSpectrum({ index: 0 });

  expect(spectrum.variables.x.data).toHaveLength(length);
  expect(spectrum.variables.x.label).toStrictEqual(xLabel);

  expect(spectrum.variables.y.data).toHaveLength(length);
  expect(spectrum.variables.y.label).toStrictEqual(yLabel);

  expect(spectrum.title).toBe(title);
}

describe('Breakdown', () => {
  it('Breakdown', () => {
    testFile(
      'Breakdown/breakdown.csv',
      'Breakdown',
      fromBreakdown,
      'Vd',
      'Id dens',
      120,
    );
  });

  it('HEMT Breakdown', () => {
    testFile(
      'Breakdown/HEMT_breakdown.csv',
      'HEMT Breakdown',
      fromHEMTBreakdown,
      'Vd',
      'Id density',
      408,
    );
  });
});

describe('Capacitance', () => {
  it('High voltage', () => {
    testFile(
      'Capacitance/high_voltage.csv',
      'Cdg-V_high_voltage',
      fromCapacitance,
      'Vd',
      'C dens',
      1001,
    );
  });

  it('MOS capacitance', () => {
    testFile(
      'Capacitance/mos_cap.csv',
      'MOS cap measurement',
      fromMOSCapacitance,
      'VBias',
      'C density',
      1001,
    );
  });
});

test('IV', () => {
  testFile('IV/sweep.csv', 'I/V Sweep', fromIV, 'Vd', 'Id dens', 201);
  testFile(
    'IV/sweep_diode.csv',
    'I/V Sweep diode ON',
    fromIV,
    'Vd',
    'Id dens',
    201,
  );
});

describe('Output', () => {
  it('F implant', () => {
    testFile(
      'Output/f_implant.csv',
      'Output',
      fromOutput,
      'Vd',
      'Id dens',
      3208,
    );
  });

  it('lpcvd', () => {
    testFile('Output/lpcvd.csv', 'Output', fromOutput, 'Vd', 'Id dens', 201);
  });

  it('noff trigate', () => {
    testFile(
      'Output/noff_trigate.csv',
      'output',
      fromNoffOutput,
      'Vd',
      'Id density',
      301,
    );
  });

  it('Output', () => {
    testFile('Output/output.csv', 'Output', fromOutput, 'Vd', 'Id dens', 201);
  });
});

describe('Transfer', () => {
  it('HEMT transfer', () => {
    testFile(
      'Transfer/hemt_transfer.csv',
      'HEMT_transfer',
      fromTransfer,
      'Vg',
      'Id dens',
      201,
    );
  });

  it('noff trigate', () => {
    testFile(
      'Transfer/noff_trigate.csv',
      'Transfer',
      fromNoffTransfer,
      'Vg',
      'Id density',
      201,
    );
  });
});
