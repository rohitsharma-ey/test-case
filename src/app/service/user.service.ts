import { EventEmitter } from '@angular/core';

export class UserService {
  users = [
    {
      name: 'john',
      job: 'teacher',
      gender: 'male',
      country: 'united states',
      age: 35,
      avtar: '',
    },
    {
      name: 'mark',
      job: 'designer',
      gender: 'male',
      country: 'Germany',
      age: 37,
      avtar: '',
    },
    {
      name: 'merry',
      job: 'Lawyer',
      gender: 'female',
      country: 'Ireland',
      age: 32,
      avtar: '',
    },
    {
      name: 'steve',
      job: 'Doctor',
      gender: 'male',
      country: 'India',
      age: 35,
      avtar: '',
    },
  ];
  OnShowDetailsClicked = new EventEmitter<{
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avtar: string;
  }>();

  ShowUserDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avtar: string;
  }) {
    this.OnShowDetailsClicked.emit(user);
  }
}
