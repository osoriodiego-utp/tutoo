import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import { RequestModel } from '../../../models/request.model';
import { RequestsService } from '../../../services/requests.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styles: []
})
export class RequestsComponent implements OnInit {

  public loading: boolean;
  public requests: RequestModel[] = [];

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.loading = true;
    this.requestsService.getAll().subscribe(data => {
      this.requests = data;
      console.log("DATA: ", data);
      console.log("REQUESTS: ", this.requests);
      this.loading = false;
    })
  }

  deleteRequest(request: RequestModel, idx: number) {
    console.log("component.deleteRequest(): ");
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea borrar la solicitud de  ${request.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Borrar'
    }).then((resp) => {
      if (resp.value) {
        this.requestsService.deleteRequest(request.id).subscribe();
        Swal.fire({
          title: 'Borrado!',
          text: `La solicitud ha sido borrada`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
        this.requests.splice(idx, 1);
      }
    })
  }
}
