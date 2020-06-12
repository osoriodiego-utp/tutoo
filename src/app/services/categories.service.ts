import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../models/category.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories: CategoryModel[] =[];

  private url = 'https://tutoo-app.firebaseio.com';

  constructor(private http: HttpClient) {
    this.load();
  }

  public load() {
    this.getAll().subscribe(data => {
      this.categories = data;
    });
  }


  public getAll() {
    return this.http.get(`${this.url}/categories.json`)
      .pipe(map(resp => this.createArray(resp))
      );
  }

  createArray(categoryObject: object) {
    const categories: CategoryModel[] = [];

    if (categoryObject === null) { return []; }

    Object.keys(categoryObject).forEach(key => {
      const category: CategoryModel = categoryObject[key];
      category.id = key;
      categories.push(category);
    });
    console.log("getAll ==>", categories);
    return categories;
  }


  getById() { }


  post() { }

}
