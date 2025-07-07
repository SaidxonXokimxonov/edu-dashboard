export interface Employee {
  $id: string;
  address: string;
  birthDate: string;
  fullName: string;
  gender: number;
  groupSubjects: null;
  groups: null;
  id: number;
  phoneNumber: string;
  position: string;
  salary: number;
  staffSubjects: null;
  user: null;
  userId: number;
}

export interface IStaffForm {
  id?: number;
  fullName: string;
  position: string;
  phoneNumber: string;
  address: string;
  birthDate: string;
  gender: number;
  salary: number | null;
}
