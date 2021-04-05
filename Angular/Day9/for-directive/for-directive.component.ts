import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  course=['Angular 8','React js','Vue js','Embber js','JSP'];
  
  product=[
    {
      name:'Samsung',
      price:15000,
      id:2
    },
    {
      name:'Moto',
      price:25000,
      id:1
    },
    {
      name:'One Plus',
      price:35000,
      id:3
    },
    {
      name:'LG',
      price:25000,
      id:4
    }
  ];
  selected:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse over event occur!!");
    this.selected=item.name;
  }
  onMouseOut(){
    this.selected='';
  }

}
