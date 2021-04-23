import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string='Sumit Raokhande';

  obj={
    name:'Sumit Raokhande',
    id:9,
    country:'India'
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onPage1(){
    this.router.navigate(['/page1']);
  }
  onPage2(){
    this.myid=8;
    this.router.navigate(['/page2',this.myid])
  }
  onPage3(){
    this.myid=8;
    this.myusername='Spruha';
    this.router.navigate(['/page3',this.myid,this.myusername])
  }
  onFollower(){
    this.router.navigate(['/follower']);
  }
  onqueryparam(){
    this.obj.name='kiran',
    this.obj.id=6;
    this.obj.country='Japan';
    this.router.navigate(['/QueryParam'],{ queryParams:this.obj })
  }

}
