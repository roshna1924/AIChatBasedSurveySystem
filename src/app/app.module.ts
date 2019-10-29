import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswdComponent } from './forgotpasswd/forgotpasswd.component';
import { ProfessorComponent } from './professor/professor.component';
import { GlobadminComponent } from './globadmin/globadmin.component';
import { OrgadminComponent } from './orgadmin/orgadmin.component';
import {HttpService} from './http.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegistrationComponent,
    ForgotpasswdComponent,
    ProfessorComponent,
    GlobadminComponent,
    OrgadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
