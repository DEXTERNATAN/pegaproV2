import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
/**
 * Generated class for the Jobs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  public username:String = '';
  public email: String = '';
  public newJob : boolean = false;
  public titlePage: String ="Trabalhos"

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  public openFormJobs(){
     this.newJob = !this.newJob;
     if(this.newJob){
         this.titlePage="Adicionar Trabalho";
     }else{
         this.titlePage="Trabalhos";
     }
  }


  public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Jobs');
  }

}
