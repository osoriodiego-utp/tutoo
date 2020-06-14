import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {

  public reqForm: FormGroup;
  public categories: string[];
  private image: any;
  private document: any;
  // public categoryList: string[];

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {
    this.createForm();
    this.loadFormData();

  }
  
  ngOnInit() {
    this.categories = this.categoriesService.setList();
    this.categories.unshift('- selecciona una categoría -');
  }

  createForm() {
    this.reqForm = this.formBuilder.group({
      id: [],
      revised: ['false'],
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      category: ['', [Validators.required]],
      imageurl: [],
      documenturl: [],
      description: ['', [Validators.required]]
    })
  }

  loadFormData() {
    this.reqForm.reset({});
  }

  isInvalid(field: string): boolean {
    return this.reqForm.get(field).invalid && this.reqForm.get(field).touched;
  }

  isInvalidFile(field: string): boolean {
    // extension: .doc, .docx, .pdf
    return this.reqForm.get(field).invalid && this.reqForm.get(field).touched;
  }

  isInvalidImage(field: string): boolean {
    // extensión: .jpg, .jpeg, .png
    return this.reqForm.get(field).invalid && this.reqForm.get(field).touched;
  }

  getArray(field: string) {
    return this.reqForm.get(field) as FormArray;
  }

  handleImage(event: any) {
    this.image = event.target.files[0];
    console.log(">> image loaded");
  }

  handleDocument(event: any){
    this.image = event.target.files[0];
    console.log(">> document loaded");
  }

  createRequest(){}

}
