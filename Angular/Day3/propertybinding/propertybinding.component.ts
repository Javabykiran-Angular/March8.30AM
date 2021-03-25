import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='sumit Raokhande';
  imgUrl:string='../../assets/bg.jpeg';

  ishidden:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
