import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from './models/doctor.model';
// import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiology',
      contactDetails: '123-456-7890',
      allocatedPatients: [1, 2, 3] // Example patient IDs
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Pediatrics',
      contactDetails: '987-654-3210',
      allocatedPatients: [4, 5] // Example patient IDs
    },
    // Add more doctors as needed
  ];

  constructor() { }

  getDoctors(): Observable<Doctor[]> {
    return of(this.doctors);
  }

  getDoctorById(id: number): Observable<Doctor | undefined> {
    const doctor = this.doctors.find(d => d.id === id);
    return of(doctor);
  }

  updateDoctorAllocations(doctor: Doctor): Observable<boolean> {
    const index = this.doctors.findIndex(d => d.id === doctor.id);
    if (index !== -1) {
      this.doctors[index] = doctor;
      return of(true);
    }
    return of(false);
  }
}
