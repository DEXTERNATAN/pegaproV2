import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
/**
 * Generated class for the Professional page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html',
})




export class ProfessionalPage {

 public username:String = '';
  public email: String = '';
  public newProfessional : boolean = false;
  public titlePage: String ="Profissionais"
  
    constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthService) {
  }

  public openFormProfessional(){
     this.newProfessional = !this.newProfessional;
     if(this.newProfessional){
         this.titlePage="Adicionar Profissional";
     }else{
         this.titlePage="Profissionais";
     }
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Professional');
  }

}
