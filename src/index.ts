import { fromCapacitance } from './from/b1505';

export {
  fromIV,
  fromOutput,
  fromTransfer,
  fromBreakdown,
  fromNoffOutput,
  fromCapacitance,
  fromNoffTransfer,
  fromHEMTBreakdown,
  fromMOSCapacitance,
} from './from/b1505';
export { fromSIV } from './from/fromSIV';
export { fromMulChannelCap } from './from/fromMulChannelCap';

export function fromCVd(text: string) {
  // eslint-disable-next-line no-console
  console.warn('Deprecated: use fromCapacitance instead');
  const list = fromCapacitance(text);
  if (list.length !== 1) throw new Error("Series doesn't found");
  return list[0];
}
