import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcategoryComponent } from './components/categories/newcategory/newcategory.component';
import { HomeComponent } from './components/page/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { RequestComponent } from './components/requests/request/request.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { LoginComponent } from './components/users/login/login.component';
import { RequestsComponent } from './components/requests/requests/requests.component';
import { ShowrequestComponent } from './components/requests/showrequest/showrequest.component';
import { TutorsComponent } from './components/tutors/tutors/tutors.component';
import { InfoComponent } from './components/page/info/info.component';
import { NewtutorComponent } from './components/tutors/newtutor/newtutor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'request', component: RequestComponent },
  { path: 'about', component: AboutComponent },

  //Admin
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'requests', component: RequestsComponent },
      { path: 'showrequest/:id', component: ShowrequestComponent },
      { path: 'tutors', component: TutorsComponent },
      { path: 'newtutor', component: NewtutorComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'newcategory', component: NewcategoryComponent },
      { path: 'info', component: InfoComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
