import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../models/doctor.model';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }
}
