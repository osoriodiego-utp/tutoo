import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { NewcategoryComponent } from './components/categories/newcategory/newcategory.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { RequestComponent } from './components/requests/request/request.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { TutorsComponent } from './components/tutors/tutors/tutors.component';
import { RequestsComponent } from './components/requests/requests/requests.component';
import { ShowrequestComponent } from './components/requests/showrequest/showrequest.component';
import { InfoComponent } from './components/page/info/info.component';
import { LoginComponent } from './components/users/login/login.component';
import { PagenotfoundComponent } from './components/page/pagenotfound/pagenotfound.component';
import { NewtutorComponent } from './components/tutors/newtutor/newtutor.component';
import { AboutComponent } from './components/page/about/about.component';


const routes: Routes =
  [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'category/:id', component: CategoryComponent },
    { path: 'request', component: RequestComponent },
    { path: 'about', component: AboutComponent },
    {
      path: 'admin', component: AdminComponent,
      children: [
        { path: 'requests', component: RequestsComponent },
        { path: 'showrequest/:id', component: ShowrequestComponent },
        { path: 'tutors', component: TutorsComponent },
        { path: 'newtutor', component: NewtutorComponent },
        { path: 'categories', component: CategoriesComponent },
        { path: 'newcategory', component: NewcategoryComponent },
        { path: 'info', component: InfoComponent },
        // into admin
        { path: '**', pathMatch: "full", redirectTo: 'requested' },
      ]
    },
    { path: 'login', component: LoginComponent }, //TODO move to /admin/...
    { path: '**', component: PagenotfoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
