import {Language} from "./language";

export interface RaceDetailsApiResult{
  id: number
  index: string;
  name: string;
  speed: number
  ability_bonuses: [{ability_score:{index: string, url: string },bonus: number}]
  size: string;
  starting_proficiencies: [{name: string, url: string}]
  languages: [{index: string, name:string, type: string, url: string, script: string, typical_speakers: string[]}]
  language_desc: string
  traits: [{name: string, url: string}]
}
