import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private url = 'https://tutoo-app.firebaseio.com';


  constructor(private http: HttpClient) { }

  loadAll() { }


  getAll() {
    console.log("getRequests() - -");

    return this.http.get(`${this.url}/requests.json`)
      .pipe(
        map(resp => this.createArray(resp))
      );
  }

  createArray(requestObject: object) {
    const requests: RequestModel[] = [];

    if (requestObject === null) { return []; }

    Object.keys(requestObject).forEach(key => {
      const request: RequestModel = requestObject[key];
      request.id = key;
      requests.push(request);
      // console.log("getRequest/createArray(): ", requests);
    });

    return requests;
  }

  deleteRequest(id: string) {
    return this.http.delete(`${this.url}/requests/${id}.json`);
  }


  getById(id: string) {
    return this.http.get(`${this.url}/requests/${id}.json`);
  }

  revised(request: RequestModel){
    const requestDTO = {...request};
    requestDTO.revised = true;
    delete requestDTO.id;

    return this.http.put(`${this.url}/requests/${request.id}.json`, requestDTO);
  }

  post() { }

}
