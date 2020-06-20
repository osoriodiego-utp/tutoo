import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

//firbase
import { AngularFireStorage } from '@angular/fire/storage';

import { CategoryModel } from '../models/category.model';
import { ImageModel } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = 'https://tutoo-app.firebaseio.com';
  public list: string[] = [];
  private categories: CategoryModel[] = [];

  //fileupload
  public file: File;
  public imagePath: string;
  public fileref: any;
  public imageUrl: Observable<string>;

  constructor(private http: HttpClient, private storage: AngularFireStorage) {
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


  getById() { }


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


  create(image: ImageModel, data: CategoryModel) {
    console.log("CategoryService.createCategory(): ");

    this.uploadData(image, data);
  }


  public createCategory(image: ImageModel, data: CategoryModel) {
    console.log("CategoryService.createCategory(): ");

    this.uploadData(image, data);
  }

  private uploadData(image: ImageModel, data: CategoryModel) {
    console.log("CategoryService.uploadImageCategory(): ");

    this.imagePath = `categories/img/${image.name}`;
    let imageRef = this.storage.ref(this.imagePath);
    let task = this.storage.upload(this.imagePath, image);

    /* upload image */
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          imageRef.getDownloadURL().subscribe(url => {
            this.imageUrl = url;
            console.log("IMAGE_URL: ", url);
            
            /* save post + img */
            let categoryDTO = new CategoryModel(data.name, this.imageUrl);
            console.log("DATA: ", categoryDTO);
            this.post(categoryDTO).subscribe((resp:any)=>{
              data.id = resp.name;
              console.log("RESP: ", resp);
            })
          })
        })
      ).subscribe();
  }

  private post(category: CategoryModel) {
    console.log("CategoryService.categoryPost(): ", category);
    return this.http.post(`${this.url}/categories.json`, category);
  }

  public setList() {
    if(this.categories.length === 0){
      this.load
    }

    let categories:string[] = [];
    for(let index in this.categories){
      categories.push(this.categories[index].name);
    }

    this.list = [...new Set(categories)];
    return [...new Set(categories)];

  }

}
