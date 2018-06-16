import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public animations;
  public interactive;
  public loginForm: FormGroup;
  public loginError: string;
  public errorAuth: Boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _fb: FormBuilder,
    private _auth: AuthService
  ) {}

  public ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  public interactiveAnimationOption = {
    loop: true,
    prerender: true,
    autoplay: true,
    autoloadSegments: false,
    path: 'assets/empty_status.json'
  };
  public login() {
    const data = this.loginForm.value;
    if (!data.email) {
      return;
    }
    const credentials = {
      email: data.email,
      password: data.password
    };
    this._auth.signInWithEmail(credentials).then(
      () => {
        this.navCtrl.setRoot('HomePage');
      },
      error => {
        this.errorAuth = true;
        this.loginError = error.message;
      }
    );
  }

  public signup() {
    this.navCtrl.push('SignupPage');
  }

  public forgotPass() {
    this.navCtrl.push('ForgotPassPage');
  }
}
