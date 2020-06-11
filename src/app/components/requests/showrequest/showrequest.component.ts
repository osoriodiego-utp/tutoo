import { Component, OnInit } from '@angular/core';
import { RequestModel } from 'src/app/models/request.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';

@Component({
  selector: 'app-showrequest',
  templateUrl: './showrequest.component.html',
  styles: []
})
export class ShowrequestComponent implements OnInit {

  public request = new RequestModel;
  // public pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(private router: Router, public activatedRoute: ActivatedRoute, private requestsService: RequestsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(`ShowRequest > ${params['id']}`);
      this.requestsService.getById(params['id']).subscribe((data: RequestModel) => {
        console.log("DATA: ", data);
        this.request = data;
        this.request.id = params['id'];
      })
    })
  }

  revised(request: RequestModel) {
    console.log("REVISADA: ", request.id);
    this.requestsService.revised(request).subscribe(resp => {
      console.log(`revised(${request.id}): ${resp}`);
    });

    this.router.navigate(['/requests']);
  }

}
