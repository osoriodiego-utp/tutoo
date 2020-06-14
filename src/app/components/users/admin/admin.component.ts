import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  constructor(
    // private auth: AuthService, 
    private router: Router) {
    console.log("admin.component.constructor()"); //LOG
  }

  ngOnInit() {
  }

  logout() {
    // this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
