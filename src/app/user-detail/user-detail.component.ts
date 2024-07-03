import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) {}
  user!: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avtar: string;
  };

  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe(
      (data: {
        name: string;
        job: string;
        gender: string;
        country: string;
        age: number;
        avtar: string;
      }) => {
        this.user = data;
      }
    );
  }
}
