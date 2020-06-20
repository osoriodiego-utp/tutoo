import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

//Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcategoryComponent } from './components/categories/newcategory/newcategory.component';

//Firebase
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/page/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { RequestComponent } from './components/requests/request/request.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { LoginComponent } from './components/users/login/login.component';
import { RequestsComponent } from './components/requests/requests/requests.component';
import { ShowrequestComponent } from './components/requests/showrequest/showrequest.component';
import { TutorComponent } from './components/tutors/tutor/tutor.component';
import { TutorsComponent } from './components/tutors/tutors/tutors.component';
import { InfoComponent } from './components/page/info/info.component';
import { NewtutorComponent } from './components/tutors/newtutor/newtutor.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcategoryComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    CategoryComponent,
    RequestComponent,
    AdminComponent,
    LoginComponent,
    RequestsComponent,
    ShowrequestComponent,
    TutorComponent,
    TutorsComponent,
    InfoComponent,
    NewtutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Formularios
    FormsModule,
    ReactiveFormsModule,

    //Firebase
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    // { provide: bucket, useValue: 'gs://fi-re-ba-se.appspot.com/fotos_firebase' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
