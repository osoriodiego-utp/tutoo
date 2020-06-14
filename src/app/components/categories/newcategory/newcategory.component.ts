import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoriesService } from '../../../services/categories.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styles: []
})
export class NewcategoryComponent implements OnInit {

  public catForm: FormGroup;
  private image: any;

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {
    this.createForm();
    this.loadFormData();
  }

  ngOnInit() {
  }

  createForm() {
    this.catForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(4)]],
      imageurl: ['', [Validators.required]]
    })
  }

  loadFormData() {
    this.catForm.reset({});
  }


  isInvalid(field: string): boolean {
    return this.catForm.get(field).invalid && this.catForm.get(field).touched;
  }


  createCategory() {
    if (this.catForm.invalid) {
      console.log("INVALID FORM");
      return Object.values(this.catForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }

    Swal.fire({
      icon: 'info',
      title: 'Guardando',
      showConfirmButton: false,
    });
    Swal.showLoading();

    // console.log("FORM VALUE: ", this.catForm.value);
    this.categoriesService.create(this.image, this.catForm.value);
    this.catForm.reset();

    Swal.fire({
      icon: 'success',
      title: 'Guardada',
      text: 'Se guardó correctamente',
      showConfirmButton: false,
      timer: 1000
    })

  }

  handleImage(event: any) {
    this.image = event.target.files[0];
    console.log("Image loaded");
    // console.log("image ==> ", this.image);
  }

}
