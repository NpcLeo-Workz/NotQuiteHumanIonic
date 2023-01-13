import {Language} from "../types/language";
import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";
import {RaceDetailsApiResult} from "../types/raceDetailsApiResult";
@Injectable({
  providedIn: 'root'
})
export class LanguageService{
  readonly #storagekey = 'languageStorage';
  #id =0;
  #LanguageList: Language[] = []
  constructor(private storageService: StorageService) {
    this.#loadLanguages().then( );
    //console.log(this.#LanguageList)
    for(let lan of this.#LanguageList){
      if(this.#id<=lan.id ){
        this.#id = lan.id + 1
      }
    }
  }
  async #loadLanguages(): Promise<void>{
    this.#LanguageList = await this.storageService.loadJSONData<Language[]>(this.#storagekey) ?? [];
  }
  async #persistLanguage(): Promise<void>{
    await this.storageService.persistObjectData(this.#storagekey, this.#LanguageList)
  }
  getId(){
    return this.#id;
  }
  getAllLanguages(): Language[]{
    return  this.#LanguageList;
  }
  getLanguageDetails(index: string): Language | undefined{
    //console.log(this.#LanguageList[0])
    //console.log(index)

    return this.#LanguageList.find(i=>i.index ===index)
  }
  async deleteLanguage(index: string): Promise<void>{
    this.#LanguageList = this.#LanguageList.filter(lan => lan.index !== index)
    await this.#persistLanguage();
  }
  async UpdateLanguage(updatedlan: Language):Promise<void>{
    const lan = this.#LanguageList.find(l=>l.index===updatedlan.index)
    if(lan===undefined){
      console.error('The race you try to update does not exist')
      return
    }
    Object.assign(lan, updatedlan)
    await this.#persistLanguage()
  }
  async CreateLanguage(newlan: Language){

    this.#LanguageList.push(newlan);
    this.#id++
    await this.#persistLanguage()
    //console.log(this.#LanguageList[0])
  }
}
