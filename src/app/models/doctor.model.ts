export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    contactDetails: string;
    allocatedPatients: number[]; // Array of patient IDs
  }
  