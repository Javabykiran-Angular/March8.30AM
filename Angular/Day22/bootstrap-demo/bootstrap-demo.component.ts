import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  prodarr=[
    {
      name:'Motorola',
      price:18000,
      quantity:1,
      description:'Better Product'
    },{
      name:'One Plus',
      price:28000,
      quantity:1,
      description:'Better Product'
    },
    {
      name:'Samsung',
      price:24000,
      quantity:1,
      description:'Good Product'
    },
    {
      name:'Realme',
      price:16000,
      quantity:2,
      description:'Better Product'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
