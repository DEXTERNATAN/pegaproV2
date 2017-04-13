import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuController } from 'ionic-angular';
import { JobsPage } from '../pages/jobs/jobs';
import { ProfessionalPage} from '../pages/professional/professional';

@Component({
  templateUrl: `app.html`
})
export class MyApp {
  rootPage = TabsPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;



  constructor(platform: Platform,private menu: MenuController) {
     this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Login', component: LoginPage },
      { title: 'Servicos', component:JobsPage},
      { title:'Profissionais', component:ProfessionalPage}
    ];
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

 openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component).then(() => {
      // wait for the root page to be completely loaded
      // then close the menu
      this.menu.close();
    });
  }


}