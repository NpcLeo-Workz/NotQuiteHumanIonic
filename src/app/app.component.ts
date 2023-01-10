import { Component } from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

   this.initializeTheme().then()
  }
  onToggleDarkMode = async ({event}: { event: any }) =>{
    let theme
    if(event.detail.checked){
      //document.body.setAttribute('color-theme', 'dark')
      theme = "dark";
    }else {
      //document.body.setAttribute('color-theme', 'light')
      theme = "light"
    }
    await Preferences.set({
      key: 'color-theme',
      value: theme
    });
    await this.changeTheme()
  }
  initializeTheme= async () =>{
    const theme = await Preferences.get({key: 'color-theme'});
    document.body.setAttribute('color-theme', theme.value? theme.value: "dark")
    const themetoggle = document.getElementById('themetoggle')
    if(themetoggle != null){
      if(theme.value != 'dark'){
        themetoggle.setAttribute('checked', 'false');
      } else{
        themetoggle.setAttribute('checked', 'true');
      }
    }

  }
  changeTheme= async () =>{
    const theme = await Preferences.get({key: 'color-theme'});
    document.body.setAttribute('color-theme', theme.value? theme.value: "dark")
  }
}
