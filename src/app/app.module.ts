import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardRecruiterComponent } from './board-recruiter/board-recruiter.component';
import { BoardCandidateComponent } from './board-candidate/board-candidate.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCandidateComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardRecruiterComponent,
    BoardCandidateComponent,
    RegisterRecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
