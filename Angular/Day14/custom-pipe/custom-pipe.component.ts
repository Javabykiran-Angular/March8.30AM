import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus esse soluta inventore nam veritatis! Doloremque voluptatum placeat rerum. Corporis perferendis dignissimos rerum voluptas fugiat beatae totam ullam similique maxime cum.";

  endusertxt:string='';

  constructor() { }

  ngOnInit() {
  }

  onClick(txt){
    this.endusertxt=txt;
  }

}
