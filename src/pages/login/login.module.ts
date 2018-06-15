import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage), LottieAnimationViewModule.forRoot()]
})
export class LoginPageModule {}
