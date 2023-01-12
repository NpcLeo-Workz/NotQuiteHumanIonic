import {RaceDetailsApiResult} from "../types/raceDetailsApiResult";
import {Language} from "../types/language";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class RaceService{
  constructor() {
    this.#raceList.push({
      id: 0,
      index: 'test',
      name: 'test',
      speed: 0,
      ability_bonuses: [{ability_score: {index:'test', url:'test'},bonus:0}],
      size: 'test',
      starting_proficiencies:[{name: 'test', url:'test'}],
      languages: [{name: 'test', index: 'test', url:'test', script:'test', typical_speakers: ['dick'], type: 'test'}],
      language_desc: 'test',
      traits: [{name:'test', url: 'test'}]
    });
    this.#raceList.push({
      id: 1,
      index: 'test2',
      name: 'test2',
      speed: 0,
      ability_bonuses: [{ability_score: {index:'test', url:'test'},bonus:0}],
      size: 'test',
      starting_proficiencies:[{name: 'test', url:'test'}],
      languages: [{name: 'test', index: 'test', url:'test', script:'test', typical_speakers: ['dick'], type: 'test'}],
      language_desc: 'test',
      traits: [{name:'test', url: 'test'}]
    });
  }
  #raceList: RaceDetailsApiResult[] = []
  getAllRaces(): RaceDetailsApiResult[]{
    return this.#raceList;
  }
  getRaceDetails(index: string): RaceDetailsApiResult | undefined {
    return this.#raceList.find(i=>i.index ===index)
  }

  deleteRace(index: string): void{
    this.#raceList = this.#raceList.filter(race=> race.index !== index);
  }
  UpdateRace(updatedrace: RaceDetailsApiResult): void{
    const race = this.#raceList.find(r => r.index === updatedrace.index)
    if(race === undefined){
      console.error('The race you try to update does not exist')
      return
    }
    Object.assign(race, updatedrace)
  }
  CreateRace(id:number, index: string, name: string, speed: number,
             ability_bonuses: [{ability_score:{index: string, url: string },bonus: number}],
             size: string, starting_proficiencies: [{name: string, url: string}], languages: Language[],
             language_desc: string, traits: [{name: string, url: string}]){
    this.#raceList.push({
      id: id,
      index: index,
      name: name,
      speed: speed,
      ability_bonuses: ability_bonuses,
      size: size,
      starting_proficiencies: starting_proficiencies,
      languages: languages,
      language_desc: language_desc,
      traits: traits
    });
  }
}
