import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {
posts:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any> response)

    })
  }

}
