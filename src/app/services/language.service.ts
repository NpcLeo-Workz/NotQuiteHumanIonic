import {Language} from "../types/language";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class LanguageService{
  #id =0;
  #LanguageList: Language[] = []
  constructor() {

    console.log(this.#LanguageList)
    for(let lan of this.#LanguageList){
      if(this.#id<=lan.id ){
        this.#id = lan.id + 1
      }
    }
  }
  getId(){
    return this.#id;
  }
  getAllLanguages(): Language[]{
    return  this.#LanguageList;
  }
  getLanguageDetails(index: string): Language | undefined{
    console.log(this.#LanguageList[0])
    console.log(index)
    return this.#LanguageList.find(i=>i.index ===index)
  }
  deleteLanguage(index: string): void{
    this.#LanguageList = this.#LanguageList.filter(lan => lan.index !== index)
  }
  UpdateLanguage(updatedlan: Language):void{
    const lan = this.#LanguageList.find(l=>l.index===updatedlan.index)
    if(lan===undefined){
      console.error('The race you try to update does not exist')
      return
    }
    Object.assign(lan, updatedlan)
  }
  CreateLanguage(newlan: Language){

    this.#LanguageList.push(newlan);
    this.#id++
    console.log(this.#LanguageList[0])
  }
}
