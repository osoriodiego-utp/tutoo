import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TutorModel } from '../models/tutor.model';


@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  private url = 'https://tutoo-app.firebaseio.com';
  public tutors: TutorModel[] = [];

  constructor(private http: HttpClient) { }

  loadAll() { }


  getAll() {
    return this.http.get(`${this.url}/tutors.json`)
      .pipe(map(resp => this.createArray(resp)))
  }

  createArray(tutorObject: object) {
    const tutors: TutorModel[] = [];

    if (tutorObject === null) { return []; }

    Object.keys(tutorObject).forEach(key => {
      const category: TutorModel = tutorObject[key];
      category.id = key;
      tutors.push(category);
    });
    console.log("getAllTutors ==> ", tutors);
    this.tutors = tutors;
    return tutors;
  }


  getByCategory(category: string) {
    this.getAll().subscribe(data=>{
      this.tutors = data;
    })

    let tutorsFiltered: TutorModel[] = [];

    for (let i = 0; i < this.tutors.length; i++) {
      if (this.tutors[i].category === category) {
        tutorsFiltered.push(this.tutors[i]);
      }
    }
    console.log(`getByCategory( ${category} ) ==> `, tutorsFiltered);
    return tutorsFiltered;

  }


  getById() { }


  addTutor() { }

}
