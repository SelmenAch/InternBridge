import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCandidateComponent } from './candidate/register-candidate/register-candidate.component';
import { LoginComponent } from './candidate/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardCandidateComponent } from './candidate/board-candidate/board-candidate.component';
import { BoardRecruiterComponent } from './recruiter/board-recruiter/board-recruiter.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RegisterRecruiterComponent } from './recruiter/register-recruiter/register-recruiter.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { AuthGuardRecruiterService } from './_services/auth-guard-recruiter.service';
import { LoginRecruiterComponent } from './recruiter/login-recruiter/login-recruiter.component';
import { ChangePasswordComponent } from './candidate/change-password/change-password.component';
import { CreateCvComponent } from './candidate/create-cv/create-cv.component';
import { EditCvComponent } from './candidate/edit-cv/edit-cv.component';
import { ApplicationsComponent } from './candidate/applications/applications.component';
import { ChangePasswordRecruiterComponent } from './recruiter/change-password-recruiter/change-password-recruiter.component';
import { EditProfileComponent } from './recruiter/edit-profile/edit-profile.component';
import { TestComponent } from './test/test.component' ;

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'candidate/login', component: LoginComponent },
  { path: 'candidate/register', component: RegisterCandidateComponent },
  { path: 'recruiter/login', component: LoginRecruiterComponent },
  { path: 'recruiter/register', component: RegisterRecruiterComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'candidate', component: BoardCandidateComponent, canActivate:[AuthGuardService] },
  { path: 'recruiter', component: BoardRecruiterComponent, canActivate:[AuthGuardRecruiterService] },
  { path: 'admin', component: BoardAdminComponent, canActivate:[AuthGuardService] },
  { path: 'candidate/change-password', component: ChangePasswordComponent },
  { path: 'candidate/create-cv', component: CreateCvComponent },
  { path: 'candidate/edit-cv', component: EditCvComponent },
  { path: 'candidate/applications', component: ApplicationsComponent },
  { path: 'recruiter/change-password', component: ChangePasswordRecruiterComponent },
  { path: 'recruiter/edit-profile', component: EditProfileComponent },
  {path: 'offers/:id/test' , component:TestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
