import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() { 
    //Para que se ejecute en todos los dispositivos
    this.showSplash();
  }

  //creacion de funcion para mostrar el splash screen
  async showSplash() {
    await SplashScreen.show({
      autoHide: true,
      showDuration: 3000
    });
  }

}
