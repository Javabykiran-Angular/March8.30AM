import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  res_mult:number=0;
  name:string='123';
  constructor() { }

  ngOnInit() {
  }

  onChange(input1){
    console.log("Change Event Occur!!!");
    input1.style.background='green';
  }

  onKeyUp(){
    console.log("Key Up Event Occur!!!!");
  }

  onKeyDown(){
    console.log("Key down Event Occur!!!!");
  }

}
