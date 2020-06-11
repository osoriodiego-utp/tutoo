import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { TutorsService } from '../../../services/tutors.service';
import { TutorModel } from '../../../models/tutor.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  public loading: boolean;
  public category: string;
  public tutors: TutorModel[] = [];
  // public tutorModal;

  constructor(public route: ActivatedRoute, private tutorsService: TutorsService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.category = params['id'];
      this.tutors = this.tutorsService.getByCategory(params['id']);
      this.loading = false;
      // this.tutorsService.getByCategory(params['id']).subscribe(data => {
      //   this.tutors = data;
      //   this.loading = false;
      // });
    })
  }

}
