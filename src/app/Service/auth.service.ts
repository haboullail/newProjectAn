import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/authentification.model'

@Injectable({ providedIn: 'root' })
export class UserService {
  seConnecter(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`/users/register`, user);
  }

  login(user : User){
    return this.http.post(`/users/login`, user);
  }

  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
