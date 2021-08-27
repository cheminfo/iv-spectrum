import type { RegressionScore } from 'ml-regression-base';

export interface Result {
  resistanceOn: number;
  score: RegressionScore;
  toIndex: number;
  fromIndex: number;
}
export interface ResistanceOptions {
  autoSave?: boolean;
  delta?: number;
}
