import {Language} from "./language";

export interface Race{
  id:number;
  name: string;
  speed: number;
  ability_scores: [{ability_score:{bonus: number, name: string}}]
  size: string;
  starting_proficiencies: [{starting_proficiency: {name: string}}]
  languages: [Language]
}
