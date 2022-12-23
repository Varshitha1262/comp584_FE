import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { MyAppointmentComponent } from './my-appointment/my-appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'doctors',
    component: DoctorComponent
  },

  {
    path: 'book-appointment',
    component: AppointmentComponent
  },  
  
  {
    path: 'view-appointments',
    component: AppointmentListComponent
  },

  {
    path: 'add-doctor',
    component: AddDoctorComponent
  },

  {
    path: 'view-all-appointments',
    component: AllAppointmentsComponent
  },

  {
    path: 'my-appointments',
    component: MyAppointmentComponent
  },


  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'service',
    component: TreatmentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
