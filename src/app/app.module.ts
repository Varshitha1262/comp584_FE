import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helper/auth.interceptor';
import { MyAppointmentComponent } from './my-appointment/my-appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentComponent,
    TreatmentComponent,
    AppointmentListComponent,
    RegisterComponent,
    LoginComponent,
    MyAppointmentComponent,
    DoctorComponent,
    AllAppointmentsComponent,
    AddDoctorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
