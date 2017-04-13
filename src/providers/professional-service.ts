import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 import { AuthService,User } from '../providers/auth-service';

export class Professional {
  _id:string;
  name: string;
  email: string;
  firstName:string;
  lastName:string;
  phone:{};
  address:string;
  twitter:string;
  profissao:string;
  disponibilidade:boolean;
  precoServico:number;
  rating:number;
  tipoPreco:string;
  resumo:string;
  locais:string;
  depoimento:string;
  urlFoto:string;
 
  constructor(id:string,name: string,email: string,firstName:string,lastName:string,phone:{},address:string,
  twitter:string,profissao:string,disponibilidade:boolean, precoServico:number, rating:number, tipoPreco:string,
  resumo:string, locais:string, depoimento:string, urlFoto:string,) {
        this._id=id;
        this.name=name;
        this.email=email;
        this.firstName= firstName;
        this.lastName= lastName;
        this.phone=phone;
        this.address =address;
        this.twitter =twitter;
        this.profissao = profissao;
        this.disponibilidade = disponibilidade;
        this.precoServico= precoServico;
        this.rating = rating;
        this.tipoPreco = tipoPreco;
        this.resumo = resumo;
        this.locais = locais;
        this.depoimento = depoimento;
        this.urlFoto = urlFoto;
  }
}
 


@Injectable()
export class ProfessionalService {

  listaUsuarios: any = [];
  user :User;

  constructor( private auth: AuthService) {
    this.user = this.auth.getUserInfo();

  }

  public listProfessionals() {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        this.listaUsuarios =  this.getlistProfessionals();

        let access=(this.user)
        observer.next(access);
        observer.complete();
      });
    
  }
 
 public getlistProfessionals(){

 }



 

}