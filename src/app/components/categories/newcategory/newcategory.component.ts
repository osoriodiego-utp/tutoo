import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styles: []
})
export class NewcategoryComponent implements OnInit {

  public catForm: FormGroup;
  private image: any;

  constructor(private formBuilder: FormBuilder) {
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

  createCategory(form: FormGroup) { }

  handleImage() { }

  isInvalid(field: string): boolean {
    return this.catForm.get(field).invalid && this.catForm.get(field).touched;
  }
}
