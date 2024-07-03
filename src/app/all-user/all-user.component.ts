import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avtar: string;
  }[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
  ShowDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avtar: string;
  }) {
    this.userService.ShowUserDetails(user);
  }
}
