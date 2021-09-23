import type { RegressionScore } from 'ml-regression-base';

export interface ResistanceResult {
  resistanceOn: number;
  score: RegressionScore;
  toIndex: number;
  fromIndex: number;
}
export interface ResistanceOptions {
  delta?: number;
  fromIndex?: number;
  toIndex?: number;
}

export interface ThresholdVoltageOptions {
  threshold?: number;
}
export interface ThresholdVoltageResult {
  index: number;
  value: number;
}
