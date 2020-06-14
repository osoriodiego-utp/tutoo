import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

//Formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Services
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'; //to use { useHash: true }

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { NewcategoryComponent } from './components/categories/newcategory/newcategory.component';
import { AboutComponent } from './components/page/about/about.component';
import { FooterComponent } from './components/page/footer/footer.component';
import { HomeComponent } from './components/page/home/home.component';
import { InfoComponent } from './components/page/info/info.component';
import { NavbarComponent } from './components/page/navbar/navbar.component';
import { PagenotfoundComponent } from './components/page/pagenotfound/pagenotfound.component';
import { RequestsComponent } from './components/requests/requests/requests.component';
import { RequestComponent } from './components/requests/request/request.component';
import { ShowrequestComponent } from './components/requests/showrequest/showrequest.component';
import { NewtutorComponent } from './components/tutors/newtutor/newtutor.component';
import { TutorComponent } from './components/tutors/tutor/tutor.component';
import { TutorsComponent } from './components/tutors/tutors/tutors.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    NewcategoryComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
    PagenotfoundComponent,
    RequestsComponent,
    RequestComponent,
    ShowrequestComponent,
    NewtutorComponent,
    TutorComponent,
    TutorsComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Servicios
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //Formularios
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
