import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {RegistrationComponent} from './registration/registration.component';
import {ForgotpasswdComponent} from './forgotpasswd/forgotpasswd.component';
import {GlobadminComponent} from './globadmin/globadmin.component';
import {OrgadminComponent} from './orgadmin/orgadmin.component';
import {ProfessorComponent} from './professor/professor.component';

const routes: Routes = [
  {path: '', redirectTo: '/loginpage', pathMatch: 'full'},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgotpasswd', component: ForgotpasswdComponent},
  {path: 'globadmin', component: GlobadminComponent},
  {path: 'orgadmin', component: OrgadminComponent},
  {path: 'professor', component: ProfessorComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
