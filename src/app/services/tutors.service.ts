import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  private url = 'https://tutoo-app.firebaseio.com';

  constructor(private http:HttpClient) { }

  loadAll(){}


  getAll(){}
  

  getById(){}

  
  post(){}
  
}
