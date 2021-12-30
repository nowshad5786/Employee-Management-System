import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './dashboard/view/view.component';
import { AddComponent } from './dashboard/add/add.component';
import { UpdateComponent } from './dashboard/update/update.component';
import { DeleteComponent } from './dashboard/delete/delete.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'login',component:LoginComponent},

   {path:'dashboard',children:[
{path:'',component:DashboardComponent},
 {path:'view',component:ViewComponent},
{path:'add',component:AddComponent},
{path:'update',component:UpdateComponent},
{path:'delete',component:DeleteComponent}]},
{path:'add',children:[
{path:'',component:AddComponent},
 {path:'update',component:UpdateComponent},
 {path:'delete',component:DeleteComponent},
 {path:'view',component:ViewComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:'login',component:LoginComponent},
]},

    {path:'delete',children:[
{path:'',component:DeleteComponent},
{path:'update',component:UpdateComponent},
{path:'delete',component:DeleteComponent},
{path:'view',component:ViewComponent},
{path:'dashboard',component:DashboardComponent},
 {path:'login',component:LoginComponent},
{path:'add',component:AddComponent}
 ]},

    {path:'update',children:[
 {path:'',component:UpdateComponent},
 {path:'update',component:UpdateComponent},
 {path:'delete',component:DeleteComponent},
{path:'view',component:ViewComponent},
{path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'add',component:AddComponent}
]},

  {path:'view',children:[
{path:'',component:ViewComponent},
 {path:'update',component:UpdateComponent},
 {path:'delete',component:DeleteComponent},
{path:'view',component:ViewComponent},
{path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent},
 {path:'add',component:AddComponent}

]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
