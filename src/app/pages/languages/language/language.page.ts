import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DndAPIService} from "../../../services/dndAPI.service";
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  landetails: any;
  constructor(private route: ActivatedRoute, private api:DndAPIService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.api.getLanguageDetails(index).subscribe(details=>{
      this.landetails = details;
    })
  }

}
