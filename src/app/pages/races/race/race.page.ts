import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

}
