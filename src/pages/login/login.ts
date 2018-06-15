import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public animations;
  public interactive;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public interactiveAnimationOption = {
    loop: true,
    prerender: true,
    autoplay: true,
    autoloadSegments: false,
    path: 'assets/empty_status.json'
  };
}
