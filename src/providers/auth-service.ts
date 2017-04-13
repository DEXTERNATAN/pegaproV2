import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
export class ListUsers {
  users: Array<User>;
 
 constructor(){
   this.users = new Array<User>();
 }
 addUser(user:User){
   this.users.push(user);
 }
}

@Injectable()
export class AuthService {
  currentUser: User;
  listaUsuarios: ListUsers;

  constructor() {
    this.listaUsuarios = new ListUsers();
  }


  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        debugger;
        let usuario = this.getUsers();
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      debugger;
      let usuario =  new User(credentials.email,credentials.password);
      this.listaUsuarios.addUser(usuario);
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
  public getUsers(): ListUsers{
    return this.listaUsuarios
    }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}