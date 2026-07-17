import type { City, Weights, RiskRating, ScoringAlgorithmResult } from './index';

export function calculateWeightedScore(city: City, weights: Weights): number;
export function getRiskRating(score: number, growthRate: number): RiskRating;
export const scoringAlgorithm: ScoringAlgorithmResult;