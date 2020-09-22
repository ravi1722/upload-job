import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/upload-job/admin-dashboard/admin-dashboard.component';
import { ClientloginComponent } from './components/login/clientlogin/clientlogin.component';
import { AddJobComponent } from './components/client/add-job/add-job.component';
import { PaymentComponent } from './components/client/payment/payment.component';
import { AddfileComponent } from './components/client/addfile/addfile.component';
import { WaitComponent } from './components/client/wait/wait.component';
import { Staff2Component } from './components/staffs/staff2/staff2.component';
import { Staff3Component } from './components/staffs/staff3/staff3.component';
import { Staff4Component } from './components/staffs/staff4/staff4.component';
import { Staff5Component } from './components/staffs/staff5/staff5.component';
import { ClientregisterComponent } from './components/register/clientregister/clientregister.component';
import { StaffFileViewComponent } from './components/staff-file-view/staff-file-view.component';
import { DownloadComponent } from './components/client/download/download.component';
import { Staff1Component } from './components/staffs/staff1/staff1.component';



const routes: Routes = [
  {path: 'login', component: ClientloginComponent},
  {path: 'register', component: ClientregisterComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'add', component: AddJobComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'addfile', component: AddfileComponent},
  {path: 'user', component: WaitComponent},
  {path: 'staff1', component: Staff1Component},
  {path: 'staff2', component: Staff2Component},
  {path: 'staff3', component: Staff3Component},
  {path: 'staff4', component: Staff4Component},
  {path: 'staff5', component: Staff5Component},
  {path: 'view', component: StaffFileViewComponent},
  {path: 'down', component: DownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
