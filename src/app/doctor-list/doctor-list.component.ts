import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  @Output() doctorSelected = new EventEmitter<number>();

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }

  selectDoctor(doctorId: number): void {
    this.doctorSelected.emit(doctorId);
  }
}
