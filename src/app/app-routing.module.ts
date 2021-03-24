import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardCandidateComponent } from './board-candidate/board-candidate.component';
import { BoardRecruiterComponent } from './board-recruiter/board-recruiter.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { AuthGuardRecruiterService } from './_services/auth-guard-recruiter.service';
import { LoginRecruiterComponent } from './login-recruiter/login-recruiter.component';


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
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
