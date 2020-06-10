import { Component } from '@angular/core';

import { TutorsService } from './services/tutors.service';
import { CategoriesService } from './services/categories.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tutoo';

  constructor (private tutors:TutorsService, private categories:CategoriesService){
    localStorage.setItem('alert', 'on');
  }

}
