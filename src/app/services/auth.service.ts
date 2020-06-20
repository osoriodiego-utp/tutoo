import { Injectable } from '@angular/core';
import { AdminModel } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: AdminModel){
    console.log("login called");
  }
}
