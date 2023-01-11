import { Component, OnInit } from '@angular/core';
import {DndAPIService} from "../../services/dndAPI.service";

@Component({
  selector: 'app-traits',
  templateUrl: './traits.page.html',
  styleUrls: ['./traits.page.scss'],
})
export class TraitsPage implements OnInit {
  traits: any;
  constructor(public api: DndAPIService) { }

  ngOnInit() {
    this.traits = this.api.getTraits()
  }

}
