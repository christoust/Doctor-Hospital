import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AllocationComponent } from './allocation/allocation.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    AllocationComponent,
    DoctorDetailsComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
