import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'appointment',
    component: AppointmentComponent
  },

  {
    path: 'service',
    component: TreatmentComponent
  },
  {
    path: 'appointment-list',
    component: AppointmentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
