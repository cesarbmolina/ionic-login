import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html'
})
export class ForgotPassPage {
  public forgotError: string;
  public formForgot: FormGroup;
  public messages: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.formForgot = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  public forgotPass() {
    let data = this.formForgot.value;
    let credentials = {
      email: data.email
    };
    this.auth.resetPass(credentials).then(
      () => {
        this.messages = true;
        setTimeout(() => {
          this.navCtrl.setRoot('LoginPage');
        }, 2000);
      },
      error => {
        this.forgotError = error.message;
      }
    );
  }

  public backToLogin() {
    this.navCtrl.push('LoginPage');
  }
}
