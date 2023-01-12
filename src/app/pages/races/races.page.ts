import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import {DndAPIService} from "../../services/dndAPI.service";
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races : any;
  searchactive = false;
  Userrace = false;
  constructor(public api: DndAPIService, public raceservice: RaceService) { }

  ngOnInit() {
  this.races = this.api.getRaces()
  }
  SearchbarActive(){
    this.searchactive = !this.searchactive
  }
}
