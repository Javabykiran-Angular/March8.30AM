import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  flag:boolean=true;
  result:number=0;

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

  onClick1(myevent){
    console.log(myevent);
    console.log("Data is "+myevent.target.value);
  }

  GetData(username){
    console.log(username);
  }
  GetData1(username1){
    console.log(username1);
    username1.style.background='red';
  }

  onAddition(num1,num2){
    let n1=+num1;
    let n2=+num2;
    // this.result=num1+num2;
    this.result=n1+n2;
  }
  

}
