import { fromCapacitance } from './from/b1505';

export {
  Analysis,
  AnalysesManager,
  fromJcamp,
  toJcamp,
  getJSGraph,
  getNormalizationAnnotations,
  getReactPlotJSON,
} from 'common-spectrum';

export {
  fromCapacitance,
  fromBreakdown,
  fromHEMTBreakdown,
  fromIV,
  fromOutput,
  fromTransfer,
  fromMOSCapacitance,
  fromNoffOutput,
  fromNoffTransfer,
} from './from/b1505';
export { fromSIV } from './from/fromSIV';
export { fromMulChannelCap } from './from/fromMulChannelCap';

export function fromCVd(text: string) {
  // eslint-disable-next-line no-console
  console.warn('Deprecated: use fromCapacitance instead');
  return fromCapacitance(text);
}
