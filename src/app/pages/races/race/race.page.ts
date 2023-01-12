import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Share } from '@capacitor/share';
import {DndAPIService} from "../../../services/dndAPI.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {
  racedetails: any;
  constructor(private route: ActivatedRoute, private api:DndAPIService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.api.getRaceDetails(index).subscribe(details=>{
    this.racedetails = details;
  })
  }
  async Share(){
    await Share.share({
      title: this.racedetails.name,
      text: this.racedetails.speed + '\n' +
        this.racedetails.size,
      url: '/race/'+ this.racedetails.index
    })
  }

}
