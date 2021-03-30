import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  flag:boolean=true;

  constructor() { }
  ngOnInit() {  }

  onClick(){
      // if(this.flag==true){
      //   console.log("Event Occurs!!!");
      //   this.flag=false;
      // }

      if(this.flag){
        console.log("Event Occurs!!!");
        this.flag=false;
      }
        
  }

  onImageClick(){
    console.log("on Image Clcik");
  }

}
