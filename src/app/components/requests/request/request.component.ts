import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {

  public reqForm: FormGroup;
  public categories: any[];
  public img: any;
  public document: any;
  // public categoryList: string[];

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.loadFormData();
  }

  ngOnInit() {
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

  handleImage(){}

  handleDocument(){}

  createRequest(){}

}
