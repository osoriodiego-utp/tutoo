import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/category.model';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  
  public loading:boolean;
  public categories: CategoryModel[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.loading = true;
    this.categoriesService.getAll().subscribe(data=>{
      this.categories = data;
      this.loading = false;
    });
  }

}
