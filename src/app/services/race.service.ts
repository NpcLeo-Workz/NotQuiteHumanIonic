import {RaceDetailsApiResult} from "../types/raceDetailsApiResult";
import {Language} from "../types/language";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class RaceService{
  #id =0;
  #raceList: RaceDetailsApiResult[] = []
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
    for(let race of this.#raceList){
      if(this.#id<=race.id ){
        this.#id = race.id + 1
      }
    }
  }
  getId(){
    return this.#id;
  }
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
  CreateRace(newrace: RaceDetailsApiResult){
    this.#raceList.push(newrace);
    this.#id++
  }
}
