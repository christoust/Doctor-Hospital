import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  @Input() selectedDoctorId: number = 0;
  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.getDoctors();
    this.getPatients();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }

  getPatients(): void {
    this.patientService.getPatients()
      .subscribe(patients => this.patients = patients);
  }

  onDoctorSelect(doctorId: number): void {
    this.selectedDoctorId = doctorId;
  }

  allocateDoctor(patientId: number): void {
    if (this.selectedDoctorId !== 0) { // Check if a doctor is selected
      const selectedDoctor = this.doctors.find(d => d.id === this.selectedDoctorId);
      if (selectedDoctor) {
        selectedDoctor.allocatedPatients.push(patientId);
        this.doctorService.updateDoctorAllocations(selectedDoctor)
          .subscribe(updated => {
            if (updated) {
              const selectedPatient = this.patients.find(p => p.id === patientId);
              if (selectedPatient) {
                selectedPatient.assignedDoctor = this.selectedDoctorId;
                this.patientService.updatePatientAllocations(selectedPatient)
                  .subscribe();
              }
            }
          });
      }
    }
  }
}
