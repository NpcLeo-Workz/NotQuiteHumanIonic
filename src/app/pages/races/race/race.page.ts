import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Share } from '@capacitor/share';
import {DndAPIService} from "../../../services/dndAPI.service";
import {RaceService} from "../../../services/race.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {
  racedetails: any;
  userrace: boolean= false;
  index: any;
  constructor(private route: ActivatedRoute, private api:DndAPIService, private raceservice:RaceService) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('index');
    if(this.raceservice.getRaceDetails(this.index)){
      this.userrace = true
      this.racedetails = this.raceservice.getRaceDetails(this.index);
    }else{
      this.api.getRaceDetails(this.index).subscribe(details=>{
          this.racedetails = details;
      })
    }
  }
  RemoveRace(){
    this.raceservice.deleteRace(this.index)
  }
  async Share(){
    await Share.share({
      title: this.racedetails.name,
      text: JSON.stringify(this.racedetails)
    })
  }

}
