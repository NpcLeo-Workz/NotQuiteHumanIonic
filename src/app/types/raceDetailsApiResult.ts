import {Language} from "./language";

export interface RaceDetailsApiResult{
  name: string;
  speed: number;
  ability_bonuses: [{ability_score:{index: string, url: string },bonus: number}]
  size: string;
  starting_proficiencies: [{name: string, url: string}]
  languages: Language[]
  language_desc: string
  traits: [{name: string, url: string}]
}
