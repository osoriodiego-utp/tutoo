import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminModel } from '../models/admin.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyBr2abTJTug_rCcAemKXVZpJKr44H7VXos'; // tutoo
  private userToken: string;

  constructor(private http: HttpClient) { }

  login(user: AdminModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        console.log("login() => map(): ", resp['idToken']); //LOG
        this.saveToken(resp['idToken']);
        return resp;
      })
    )
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  getToken() { }

  logged() { }

  logout() { }

}
