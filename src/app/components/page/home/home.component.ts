import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public alert: string;

  constructor() {}
    
  ngOnInit() {
    this. alert = localStorage.getItem('alert');
  }

  alertOff() {
    // localStorage.setItem('alert', 'off');
    localStorage.removeItem('alert');
  }

}
