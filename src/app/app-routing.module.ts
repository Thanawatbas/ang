import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule,Routes, Router} from'@angular/router';
import{HomeComponent} from './home/home.component';

const Routes:Routes=[
{path: '',redirectTo: '/home',pathMatch:'full'},
{path:'home',component: HomeComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
