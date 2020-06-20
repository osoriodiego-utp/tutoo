import { Component, OnInit } from '@angular/core';
import { AdminModel } from '../../../models/admin.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public user = new AdminModel;
  public rememberme = false;

  constructor(private auth: AuthService, private router:Router) { }


  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.rememberme = true;
    }
  }

  // login(loginForm: NgForm) {
  //   if (loginForm.invalid) {
  //     console.log("Formulario invalido");
  //     return;
  //   }
  //   console.log("Formulario valido"); //LOG
  //   Swal.fire({
  //     icon: 'info',
  //     title: 'Espere por favor...',
  //     showConfirmButton: true,
  //   })
  //   // Swal.showLoading();
  //   this.auth.login(this.user).subscribe(
  //     (resp) => {
  //       console.log(resp);
  //       Swal.close();
  //       this.router.navigateByUrl('/admin');
  //     },
  //     (err) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error de autenticación',
  //         text: err.error.error.message,
  //         timer: 2000,
  //         showConfirmButton: false
  //       })
  //       // Swal.showLoading();
  //       console.log(err.error.error.message);
  //     })
  // }

}
