export interface RiskRating {
  level: string;
  probability: number;
  color: string;
}

export interface City {
  id: number;
  name: string;
  province: string;
  region: string;
  type: string;
  uniqueness: number;
  traffic: number;
  cost: number;
  popularity: number;
  facilities: number;
  tags: string[];
  description: string;
  suitableFor: string[];
  bestSeason: string;
  trend: number[];
  growthRate: number;
  score?: number;
  riskRating?: RiskRating;
}

export interface Weights {
  uniqueness: number;
  traffic: number;
  cost: number;
  popularity: number;
  facilities: number;
}

export interface RegionMap {
  [key: string]: string[];
}

export interface DimensionLabels {
  [key: string]: string;
}

export interface DimensionColors {
  [key: string]: string;
}

export interface TourismInfo {
  attractions: {
    name: string;
    type: string;
    rating: number;
    description: string;
    image: string;
  }[];
  festivals: {
    name: string;
    time: string;
    description: string;
  }[];
  travelTips: string[];
  itineraries: {
    day: number;
    title: string;
    activities: string[];
  }[];
}

export interface TourismData {
  [key: string]: TourismInfo;
}

export interface ScoringAlgorithmResult {
  name: string;
  version: string;
  methodology: string;
  confidence: number;
}

export const defaultWeights: Weights;
export const regionMap: RegionMap;
export const cityTypes: string[];
export const dimensionLabels: DimensionLabels;
export const dimensionColors: DimensionColors;
export const cityData: City[];
export const months: string[];

export function calculateWeightedScore(city: City, weights: Weights): number;
export function getRiskRating(score: number, growthRate: number): RiskRating;
export const scoringAlgorithm: ScoringAlgorithmResult;

export const tourismData: TourismData;
export const defaultTourismInfo: TourismInfo;