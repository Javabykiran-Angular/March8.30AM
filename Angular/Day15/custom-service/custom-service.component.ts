import { Component, OnInit } from '@angular/core';
import {CustomService} from '../course.service';

@Component({
  selector: 'app-custom-service',
  templateUrl: './custom-service.component.html',
  styleUrls: ['./custom-service.component.css']
})
export class CustomServiceComponent implements OnInit {

  courseArr:string[]=[];
  constructor() {
    let service=new CustomService();
     this.courseArr= service.getCourse();
   }

  ngOnInit() {
  }

}
