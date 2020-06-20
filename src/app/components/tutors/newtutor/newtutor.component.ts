import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryModel } from '../../../models/category.model';
import { CategoriesService } from '../../../services/categories.service';


@Component({
  selector: 'app-newtutor',
  templateUrl: './newtutor.component.html',
  styles: []
})
export class NewtutorComponent implements OnInit {

  public tutorForm: FormGroup;
  public categories: string[];
  private image: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService) {

    this.createForm();
    this.loadFormData();
  }

  ngOnInit() {
    this.categories = this.categoriesService.setList();
    this.categories.unshift('- selecciona una categoría -');
  }


  createForm() {
    this.tutorForm = this.formBuilder.group({
      id: [],
      imageurl: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      bio: ['', [Validators.required, Validators.minLength(50)]],
      value: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', [Validators.required]],
      subjects: ['', [Validators.required]],
    })
  }


  loadFormData() {
    this.tutorForm.reset({});
  }


  isInvalid(field: string): boolean {
    return this.tutorForm.get(field).invalid && this.tutorForm.get(field).touched;
  }

  isInvalidFile(field: string): boolean {
    return this.tutorForm.get(field).invalid && this.tutorForm.get(field).touched;
  }

  handleImage(event: any) {
    this.image = event.target.files[0];
    console.log("IMAGE: ", this.image);
  }

  createTutor(form: FormGroup) { }

}
