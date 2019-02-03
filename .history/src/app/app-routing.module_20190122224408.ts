import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogformComponent } from './logform/logform.component';
import { PatientComponent } from './master/patient/patient.component';

const routes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: '' , component: LoginComponent},
  {path: 'call-log-form' , component: LogformComponent},
  {path: 'add-patient' , component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
