import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { RequestModel } from 'src/app/models/request.model';
import { RequestsService } from '../../../services/requests.service';

import Swal from 'sweetalert2';



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

  constructor(
    private formBuilder: FormBuilder, 
    private categoriesService: CategoriesService, 
    private requestsService: RequestsService) {

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

  createRequest() {
    if (this.reqForm.invalid) {
      console.log("FORM_VALID: ", this.reqForm.valid);
      return Object.values(this.reqForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }

    Swal.fire({
      icon: 'info',
      title: 'Guardando',
      showConfirmButton: false,
    });
    Swal.showLoading();

    console.log("FORM_VALID: ", this.reqForm.valid);
    console.log("FORM_VALUE: ", this.reqForm.value);


    this.requestsService.createRequest(this.reqForm.value).subscribe(resp => {
      console.log("RESP: ", resp);
    })

    Swal.fire({
      icon: 'success',
      title: 'Guardado',
      text: 'Se guardó correctamente',
      showConfirmButton: false,
      timer: 1000
    })

    this.reqForm.reset();
  }

}
