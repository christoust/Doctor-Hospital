import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from './models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [
    {
      id: 1,
      name: 'John Smith',
      age: 30,
      contactDetails: '123-456-7890',
      assignedDoctor: 1 // Example doctor ID
    },
    {
      id: 2,
      name: 'Alice Johnson',
      age: 45,
      contactDetails: '987-654-3210',
      assignedDoctor: 1 // Example doctor ID
    },
    // Add more patients as needed
  ];

  constructor() { }

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }

  getPatientById(id: number): Observable<Patient | undefined> {
    const patient = this.patients.find(p => p.id === id);
    return of(patient);
  }

  updatePatientAllocations(patient: Patient): Observable<boolean> {
    const index = this.patients.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = patient;
      return of(true);
    }
    return of(false);
  }
}
