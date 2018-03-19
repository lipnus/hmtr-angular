import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ManagegroupComponent } from './managegroup/managegroup.component';
import { AdministraterComponent } from './administrater/administrater.component';
import { AuthGuard } from './auth.guard';
import { RawdataComponent } from './rawdata/rawdata.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component:LoginComponent},
  { path: 'student/:groupname', component:StudentComponent},
  { path: 'student', component:StudentComponent},
  { path: 'statistics', component:StatisticsComponent},
  { path: 'managegroup', component:ManagegroupComponent},
  { path: 'administrator', component:AdministraterComponent},
  { path: 'rawdata/:userinfo_pk', component:RawdataComponent},
  { path: 'rawdata', component:RawdataComponent},
  { path: 'result/:standard', component:ResultComponent},
  { path: 'result', component:ResultComponent},
  { path: 'home', component:HomeComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule .forRoot (routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
