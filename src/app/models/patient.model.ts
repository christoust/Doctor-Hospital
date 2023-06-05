export interface Patient {
    id: number;
    name: string;
    age: number;
    contactDetails: string;
    assignedDoctor: number | null; // Doctor ID
  }
  