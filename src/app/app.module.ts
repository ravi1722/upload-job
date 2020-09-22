import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GlobalModule } from './global/global/global.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProgressBarModule} from "angular-progress-bar"
import {  MatPaginatorModule } from '@angular/material/paginator';
import {  MatTableModule } from '@angular/material/table';

 
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AdminDashboardComponent } from './components/upload-job/admin-dashboard/admin-dashboard.component';
import { ClientloginComponent } from './components/login/clientlogin/clientlogin.component';
import { ClientregisterComponent } from './components/register/clientregister/clientregister.component';
import { AddJobComponent } from './components/client/add-job/add-job.component';
import { PageCounterComponent } from './components/client/page-counter/page-counter.component';
import { PaymentComponent } from './components/client/payment/payment.component';
import { AddfileComponent } from './components/client/addfile/addfile.component';
import { WaitComponent } from './components/client/wait/wait.component';
import { Staff2Component } from './components/staffs/staff2/staff2.component';
import { Staff3Component } from './components/staffs/staff3/staff3.component';
import { Staff4Component } from './components/staffs/staff4/staff4.component';
import { Staff5Component } from './components/staffs/staff5/staff5.component';
import { Staff1Component } from './components/staffs/staff1/staff1.component';
import { DownloadComponent } from './components/client/download/download.component';
import { StaffFileViewComponent } from './components/staff-file-view/staff-file-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ClientloginComponent,
    ClientregisterComponent,
    AddJobComponent,
    PageCounterComponent,
    PaymentComponent,
    AddfileComponent,
    WaitComponent,
    Staff2Component,
    Staff3Component,
    Staff4Component,
    Staff5Component,
    Staff1Component,
    DownloadComponent,
    StaffFileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
