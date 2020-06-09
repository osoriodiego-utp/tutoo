import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { FooterComponent } from './components/page/footer/footer.component';
import { NavbarComponent } from './components/page/navbar/navbar.component';
import { TutorComponent } from './components/tutors/tutor/tutor.component';
import { TutorsComponent } from './components/tutors/tutors/tutors.component';
import { NewtutorComponent } from './components/tutors/newtutor/newtutor.component';
import { RequestComponent } from './components/requests/request/request.component';
import { RequestsComponent } from './components/requests/requests/requests.component';
import { ShowrequestComponent } from './components/requests/showrequest/showrequest.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { PagenotfoundComponent } from './components/page/pagenotfound/pagenotfound.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { NewcategoryComponent } from './components/categories/newcategory/newcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    TutorComponent,
    TutorsComponent,
    NewtutorComponent,
    RequestComponent,
    RequestsComponent,
    ShowrequestComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    PagenotfoundComponent,
    CategoyComponent,
    CategoryComponent,
    CategoriesComponent,
    NewcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
