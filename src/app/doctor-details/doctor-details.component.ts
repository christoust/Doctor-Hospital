import { Component, Input } from '@angular/core';
import { Doctor } from '../models/doctor.model';
// import { Doctor } from './models/doctor.model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {
  @Input() doctor!: Doctor;

  constructor() { }
}
