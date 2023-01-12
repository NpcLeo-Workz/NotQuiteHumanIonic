import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlertController, NavController} from "@ionic/angular";
import {RaceService} from "../../../services/race.service";
import {RaceDetailsApiResult} from "../../../types/raceDetailsApiResult";

@Component({
  selector: 'app-create-updaterace',
  templateUrl: './create-updaterace.page.html',
  styleUrls: ['./create-updaterace.page.scss'],
})
export class CreateUpdateracePage implements OnInit {
  index: string = '';

  race: any;
  constructor(public activatedRoute: ActivatedRoute, public navControler: NavController,
              public raceService: RaceService, public alertController: AlertController) { }

  ngOnInit() {
    this.setData()
  }
  setData(){
    const index1 = this.activatedRoute.snapshot.paramMap.get('index')
    if(index1 === null){
      //set blank race
      return
    }
    this.index = String(index1)
    this.race = this.raceService.getRaceDetails(this.index)
  }
  CreateUpdateRace():void{
    const test = this.raceService.getRaceDetails(this.race.name.toLowerCase())
    if(test && test.id !== this.race.id){
      this.presentAlert().then()
    }else
    {
      if(this.index == ''){
        this.createRace()
      }else{
        this.updateRace()
      }
    }
  }
  private createRace(){}
  private updateRace(){
    const test = this.raceService.getRaceDetails(this.race.name.toLowerCase())
    console.log('ok')
    this.raceService.UpdateRace(this.race)
    this.navControler.back()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Race name is already in use!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
