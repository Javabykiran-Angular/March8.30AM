import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  obj={
    name:'',
    id:0,
    country:''
  };
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.queryParamMap
    .subscribe((queryparam)=>{
      this.obj.name=queryparam.get('name');
      this.obj.id=+queryparam.get('id');
      this.obj.country=queryparam.get('country');
    })
  }

}
