import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DndAPIService} from "../../../services/dndAPI.service";
import {LanguageService} from "../../../services/language.service";
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  landetails: any;
  index: any;
  constructor(private route: ActivatedRoute, private api:DndAPIService, private lanservice: LanguageService) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('index');
    console.log('oninit')
    console.log((this.index))
    if(this.lanservice.getLanguageDetails(this.index)){
      this.landetails = this.lanservice.getLanguageDetails(this.index)
    }else{
      this.api.getLanguageDetails(this.index).subscribe(details=>{
        this.landetails = details;
      })
    }
  }
  RemoveLan(){
    this.lanservice.deleteLanguage(this.index)
  }

}
