import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string="Data from Parent.........";
  JsonObj={
    name:'Sumit Raokhande',
    id:9,
    post:'Developer'
  }
  arrObj=[
    {
      name:'Sumit Raokhande',
      id:9,
      post:'Developer'
    },
    {
      name:'Kiran Raokhande',
      id:6,
      post:'Admin'
    },
    {
      name:'Spruha Raokhande',
      id:3,
      post:'Marketing'
    }
  ];

  Data:string='';

  constructor() { }

  ngOnInit() {
  }

  OnClick(){
    this.Data="Best Trainer For Angular";
  }

}
