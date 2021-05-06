import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './candidate/login/login.component';
import { RegisterCandidateComponent } from './candidate/register-candidate/register-candidate.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardRecruiterComponent } from './recruiter/board-recruiter/board-recruiter.component';
import { BoardCandidateComponent } from './candidate/board-candidate/board-candidate.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RegisterRecruiterComponent } from './recruiter/register-recruiter/register-recruiter.component';
import { LoginRecruiterComponent } from './recruiter/login-recruiter/login-recruiter.component';
import { ChangePasswordComponent } from './candidate/change-password/change-password.component';
import { CreateCvComponent } from './candidate/create-cv/create-cv.component';
import { EditCvComponent } from './candidate/edit-cv/edit-cv.component';
import { ApplicationsComponent } from './candidate/applications/applications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EditProfileComponent } from './recruiter/edit-profile/edit-profile.component';
import { ChangePasswordRecruiterComponent } from './recruiter/change-password-recruiter/change-password-recruiter.component';
import { OffersComponent } from './recruiter/offers/offers.component';
import { PostOfferComponent } from './recruiter/post-offer/post-offer.component';
import { TestComponent } from './test/test.component';



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
    RegisterRecruiterComponent,
    LoginRecruiterComponent,
    ChangePasswordComponent,
    CreateCvComponent,
    EditCvComponent,
    ApplicationsComponent,
    EditProfileComponent,
    ChangePasswordRecruiterComponent,
    OffersComponent,
    PostOfferComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [authInterceptorProviders,
              BoardRecruiterComponent,
              BoardCandidateComponent,
              LoginComponent,
              LoginRecruiterComponent
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
