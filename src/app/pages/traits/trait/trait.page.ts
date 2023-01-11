import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DndAPIService} from "../../../services/dndAPI.service";

@Component({
  selector: 'app-trait',
  templateUrl: './trait.page.html',
  styleUrls: ['./trait.page.scss'],
})
export class TraitPage implements OnInit {

  traitdetails: any;
  constructor(private route: ActivatedRoute, private api:DndAPIService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.api.getTraitDetails(index).subscribe(details=>{
      this.traitdetails = details;
    })
  }

}
