import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdata:string='Sumit raokhnade';
  num1:number=523.67855;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
