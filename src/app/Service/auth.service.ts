import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/authentification.model'
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  seConnecter(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  register(user: User) {
    let host =environment.hostApi;

    return this.http.post(host+"/api/User/register", user);
  }

  login(user : User){
    let host =environment.hostApi;
    return this.http.post(host+"/api/User/login", user);
  }

  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
