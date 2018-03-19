import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ManagegroupComponent } from './managegroup/managegroup.component';
import { StudentComponent } from './student/student.component';
import { AdministraterComponent } from './administrater/administrater.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AlertComponent } from './alert/alert.component';
import { RawdataComponent } from './rawdata/rawdata.component';

import { AuthGuard } from './auth.guard';

import { AlertService } from './__service/alert.service';
import { AuthenticationService } from './__service/authentication.service';
import { StudentService } from './__service/student.service';
import { GroupService } from './__service/group.service';
import { StatisticsService } from './__service/statistics.service';
import { RawdataService } from './__service/rawdata.service';
import { AdministratorService } from './__service/administrator.service';

import { Student } from './student';
import { Group } from './group';
import { ServerAddress } from './Serveraddress';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ManagegroupComponent,
    StudentComponent,
    AdministraterComponent,
    StatisticsComponent,
    AlertComponent,
    RawdataComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    StudentService,
    GroupService,
    StatisticsService,
    RawdataService,
    AdministratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

