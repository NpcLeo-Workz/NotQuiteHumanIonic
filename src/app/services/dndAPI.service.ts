import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';
import {RacesApiResult} from "../types/racesApiResult";
import {RaceApiResult} from "../types/raceApiResult";

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



}
