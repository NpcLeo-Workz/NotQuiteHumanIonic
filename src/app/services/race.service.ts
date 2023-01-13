import {RaceDetailsApiResult} from "../types/raceDetailsApiResult";
import {Language} from "../types/language";
import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";
@Injectable({
  providedIn: 'root'
})
export class RaceService{
  readonly #storagekey = 'raceStorage';
  #id =0;
  #raceList: RaceDetailsApiResult[] = []
  constructor(private storageService: StorageService) {

    this.#loadRaces().then();
    //test races
    for(let race of this.#raceList){
      if(this.#id<=race.id ){
        this.#id = race.id + 1
      }
    }
    //console.log(this.#raceList)
  }
  async #loadRaces(): Promise<void>{
    this.#raceList = await this.storageService.loadJSONData<RaceDetailsApiResult[]>(this.#storagekey) ?? [];
  }
  async #persistRace(): Promise<void>{
    await this.storageService.persistObjectData(this.#storagekey, this.#raceList)
  }
  getId(){
    return this.#id;
  }
  getAllRaces(): RaceDetailsApiResult[]{
    //console.log(this.#raceList)
    return this.#raceList;
  }
  getRaceDetails(index: string): RaceDetailsApiResult | undefined {
    //console.log(this.#raceList)
    //console.log(this.#raceList.find(i=>i.index ===index))
    return this.#raceList.find(i=>i.index ===index)
  }

  async deleteRace(index: string): Promise<void>{
    this.#raceList = this.#raceList.filter(race=> race.index !== index);
    await this.#persistRace();
  }
  async UpdateRace(updatedrace: RaceDetailsApiResult): Promise<void>{
    const race = this.#raceList.find(r => r.index === updatedrace.index)
    if(race === undefined){
      console.error('The race you try to update does not exist')
      return
    }
    Object.assign(race, updatedrace)
    await this.#persistRace()
  }
  async CreateRace(newrace: RaceDetailsApiResult){
    this.#raceList.push(newrace);
    this.#id++
    await this.#persistRace();
    //console.log(this.#raceList)
  }
}
