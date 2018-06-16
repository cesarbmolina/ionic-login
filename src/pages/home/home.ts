import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../service/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {}

  login() {
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

  logout() {
    this.auth.signOut();
    this.navCtrl.setRoot('HomePage');
  }
}
