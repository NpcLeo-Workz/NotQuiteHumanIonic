import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlertController, NavController} from "@ionic/angular";
import {RaceService} from "../../../services/race.service";
import {LanguageService} from "../../../services/language.service";
import {RaceDetailsApiResult} from "../../../types/raceDetailsApiResult";
import {Language} from "../../../types/language";

@Component({
  selector: 'app-create-updatelanguage',
  templateUrl: './create-updatelanguage.page.html',
  styleUrls: ['./create-updatelanguage.page.scss'],
})
export class CreateUpdatelanguagePage implements OnInit {
  index: string = '';
  blanklan: Language = {
    id: this.lanService.getId(),
    index: '',
    name: '',
    type: '',
    url: '',
    script: '',
    typical_speakers: ['']
  }
  language: any;
  constructor(public activatedRoute: ActivatedRoute, public navControler: NavController,
              public lanService: LanguageService, public alertController: AlertController) { }

  ngOnInit() {
    this.setData()
  }
  setData(){
    const index1 = this.activatedRoute.snapshot.paramMap.get('index')
    if(index1 === null){
      this.language = this.blanklan
      return
    }
    this.index = String(index1)
    this.language = this.lanService.getLanguageDetails(this.index)
  }
  CreateUpdateLan():void{
    console.log(this.lanService.getAllLanguages())
    console.log("submit")
    const test = this.lanService.getLanguageDetails(this.language.name.toLowerCase())
    if(test && test.id !== this.language.id){
      this.presentAlert().then()
    }else
    {
      if(this.index == ''){
        this.createLan()
      }else{
        this.updateLan()
      }
    }
  }
  private createLan(){
    this.language.index = this.language.name.toLowerCase()
    this.lanService.CreateLanguage(this.language)
    this.navControler.back()
  }
  private updateLan(){
    this.lanService.UpdateLanguage(this.language)
    this.navControler.back()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Language name is already in use!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
