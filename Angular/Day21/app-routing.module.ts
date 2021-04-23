import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { QueryparamComponent } from './queryparam/queryparam.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'page1',component: Page1Component
  },
  {
    path:'page2/:id',component:Page2Component
  },
  {
    path:'page3/:id/:username',component: Page3Component
  },
  {
    path:'follower',component:FollowerComponent
  },
  {
    path:"myFollower",component:MyfollowerComponent
  },
  {
    path:'QueryParam',component:QueryparamComponent
  },
  {
    path:'**',component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[
  HomeComponent,
  Page1Component,
  Page2Component,
  Page3Component,
  FollowerComponent,
  MyfollowerComponent,
  QueryparamComponent,
  NotfoundComponent
];
