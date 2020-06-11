import { Component, OnInit } from '@angular/core';
import { TutorsService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styles: []
})
export class TutorsComponent implements OnInit {

  public loading: boolean;
  public tutors: any[] = [];

  constructor(private tutorsService: TutorsService) {
    this.loading = true;
    this.tutorsService.getAll().subscribe(data=>{
      this.tutors = data;
      this.loading = false;
    })
  }

  ngOnInit() {
  }

}
