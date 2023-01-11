import { Component, OnInit } from '@angular/core';
import {DndAPIService} from "../../services/dndAPI.service";
@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {
  languages: any;

  constructor(public api: DndAPIService) { }

  ngOnInit() {
    this.languages = this.api.getLanguages()

  }
}
