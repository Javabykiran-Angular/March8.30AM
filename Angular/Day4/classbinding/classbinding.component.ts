import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
 myclass:string='success';
 rating:number=2;
 iserror:boolean=false;
 isSpecial:boolean=true;

 jsonobj={
   "success": this.iserror,
   "warning": !this.iserror,
   "special" : this.isSpecial
 }

  constructor() { }

  ngOnInit() {
  }

}
