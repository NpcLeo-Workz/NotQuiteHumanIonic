import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';
import {RacesApiResult} from "../types/racesApiResult";
import {RaceApiResult} from "../types/raceApiResult";
import {RaceDetailsApiResult} from "../types/raceDetailsApiResult";
import {Language} from "../types/language";
import {LanguagesApiResult} from "../types/languagesApiResult";
import {LanguageApiResult} from "../types/LanguageApiResult";
import {Trait} from "@angular/compiler-cli/src/ngtsc/transform";
import {TraitApiResult} from "../types/traitApiResult";
import {TraitsApiResult} from "../types/traitsApiResult";
import {TraitDetails} from "../types/traitDetails";
@Injectable({
  providedIn: 'root'
})
export class DndAPIService{
  baseUrl= 'https://www.dnd5eapi.co/api';

  constructor(public http: HttpClient) {}
  getRaces(): Observable<RaceApiResult[]>{
    //console.log(`${this.baseUrl}/races`);

    return this.http
      .get<RacesApiResult<RaceApiResult>>(
        `${this.baseUrl}/races`,
        {observe:'body', responseType: 'json'} )
      .pipe(
        map<RacesApiResult<RaceApiResult>, RaceApiResult[]>(x=>x.results)
      );
  }
  getRaceDetails(raceindex: any): Observable<RaceDetailsApiResult>{
    return this.http.
    get<RaceDetailsApiResult>(
      `${this.baseUrl}/races/${raceindex}`,
      {observe:'body', responseType: 'json'})
  }
  getLanguages(): Observable<LanguageApiResult[]>{

    return this.http.get<LanguagesApiResult>(
      `${this.baseUrl}/languages`,
      {observe:'body', responseType: 'json'}).pipe(
        map<LanguagesApiResult, LanguageApiResult[]>(x=>x.results)
    )
  }
  getLanguageDetails(index: any): Observable<Language>{
    return this.http.get<Language>(
      `${this.baseUrl}/languages/${index}`,
      {observe:'body', responseType: 'json'})
  }
  getTraits(): Observable<TraitApiResult[]>{
    return this.http.get<TraitsApiResult>(
      `${this.baseUrl}/traits`,
      {observe:'body', responseType: 'json'}).pipe(
        map<TraitsApiResult, TraitApiResult[]>(x=>x.results)
    )
  }
  getTraitDetails(index: any): Observable<TraitDetails>{
    return this.http.get<TraitDetails>(
      `${this.baseUrl}/traits/${index}`,
      {observe:'body', responseType: 'json'})
  }
}
