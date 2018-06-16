import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../service/auth.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.auth.afAuth.authState.subscribe(
        user => {
          if (user) {
            this.rootPage = 'HomePage';
          } else {
            this.rootPage = 'LoginPage';
          }
        },
        () => {
          this.rootPage = 'LoginPage';
        }
      );
    });
  }
}
