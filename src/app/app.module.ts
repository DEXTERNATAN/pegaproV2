import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs'
import { ProfessionalPage } from '../pages/professional/professional'
import { JobsPage } from '../pages/jobs/jobs'
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,
    ProfessionalPage,
    JobsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,
    ProfessionalPage,
    JobsPage
  ],
  providers: [AuthService]
})
export class AppModule {}