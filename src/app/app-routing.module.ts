import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AllocationComponent } from './allocation/allocation.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'allocation', component: AllocationComponent },
  { path: 'doctors/:id', component: DoctorDetailsComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
