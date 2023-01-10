import { Component, OnInit } from '@angular/core';
import {DndAPIService} from "../../services/dndAPI.service";
import {Language} from "../../types/language";
import {Race} from "../../types/race";

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races = this.api.getRaces();

  constructor(public api: DndAPIService) { }

  ngOnInit() {
    this.loadRaces()
  }
  loadRaces(){
    console.log(this.api.getRaces())
    //this.api.getRaces().subscribe((x: any)=>{
      //console.log(x)
      //this.races = [...x];
    //})
  }

}
