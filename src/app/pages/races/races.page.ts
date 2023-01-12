import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import {DndAPIService} from "../../services/dndAPI.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races : any;
  searchactive = false;
  constructor(public api: DndAPIService) { }

  ngOnInit() {
  this.races = this.api.getRaces()
  }
  SearchbarActive(){
    this.searchactive = !this.searchactive
  }
}
