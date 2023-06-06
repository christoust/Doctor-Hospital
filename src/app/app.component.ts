import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hospital Application</h1>
    <div>
      <app-doctor-list (doctorSelected)="onDoctorSelected($event)"></app-doctor-list>
    </div>
    <div *ngIf="selectedDoctorId !== null">
      <app-allocation [selectedDoctorId]="selectedDoctorId"></app-allocation>
    </div>
    <div>
      <app-patient-list></app-patient-list>
    </div>
  `,
  styles: []
})
export class AppComponent {
  selectedDoctorId: number | null = null;

  onDoctorSelected(doctorId: number): void {
    this.selectedDoctorId = doctorId;
  }
}
