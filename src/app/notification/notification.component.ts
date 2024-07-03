import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert" [ngClass]="{ fadeOut: displayNotification }">
    <p>This website use cookies to provide you better experinces</p>
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  displayNotification: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeNotification() {
    this.displayNotification = true;
  }
}
