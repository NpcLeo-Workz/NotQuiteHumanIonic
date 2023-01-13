import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import {DndAPIService} from "../../services/dndAPI.service";
import {RaceService} from "../../services/race.service";
import {RaceDetailsApiResult} from "../../types/raceDetailsApiResult";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races : any;
  importrace: any;
  importactive = false;
  constructor(public api: DndAPIService, public raceservice: RaceService, private alertController: AlertController) { }

  ngOnInit() {
  this.races = this.api.getRaces()
  }
  importRace(){
      try{
        JSON.parse(this.importrace)
      } catch (e){
        this.presentAlert('import string not valid!').then()
        return
      }
      const exists = this.raceservice.getRaceDetails(JSON.parse(this.importrace).name.toLowerCase())
      if(!exists){
        this.raceservice.CreateRace(JSON.parse(this.importrace))
        this.importrace = ''
        this.importactive= false;
      }else{
        this.presentAlert('Race name is already in use!').then()
        this.importrace = ''
      }
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  importRaceActive(){
    this.importactive = !this.importactive
  }
}
