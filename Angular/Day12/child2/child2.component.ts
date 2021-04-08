import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  @Output() ChildEvent=new EventEmitter();
  strdata:string='Child Data......';

  @Output() ChildEvent1=new EventEmitter();

  JsonObj={
    name:'Sumit Raokhande',
    id:9,
    post:'Developer',
    status:true
  }

  @Output() ChildEvent2=new EventEmitter();

  ArrObj=[
    {
      name:'Sumit Raokhande',
      id:9,
      post:'Developer',
      status:true
    },
    {
      name:'Kiran Raokhande',
      id:6,
      post:'Admin',
      status:true
    },
    {
      name:'Spruha Raokhande',
      id:3,
      post:'Marketing',
      status:true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // this.ChildEvent.emit(this.strdata);
    // this.ChildEvent1.emit(this.JsonObj);

    this.ChildEvent2.emit(this.ArrObj);

  }

}
