import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public signupError: string;
  public form: FormGroup;

  constructor(fb: FormBuilder, private navCtrl: NavController, private auth: AuthService) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  public signup() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth
      .signUp(credentials)
      .then(() => this.navCtrl.setRoot('LoginPage'), error => (this.signupError = error.message));
  }

  public backToLogin() {
    this.navCtrl.push('LoginPage');
  }
}
