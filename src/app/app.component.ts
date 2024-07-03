import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable, filter, from, map, of } from 'rxjs';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, DataService],
})
export class AppComponent {
  title = 'mini-project';

  // constructor(private userService: UserService) {}
  constructor(private dataService: DataService) {}

  // myObservable = new Observable((observer) => {
  //   console.log('observable start');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something went wrong ! please log in again'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  //   // observer.next('1');
  //   // observer.next('2');
  //   // observer.next('3');
  //   // observer.error(new Error('this is error pls find the value '));
  //   // observer.next('4');
  //   // observer.next('5');
  // });

  // myObservable = Observable.create((observer: { next: any }) => {
  //   setTimeout(() => {
  //     observer.next('A');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('B');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('C');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('D');
  //   }, 4000);
  // });

  // arr1 = [1, 2, 3, 4, 5];
  // arr2 = ['A', 'B', 'C', 'D'];
  // // myObservable = of(this.arr1, this.arr2);// its shwoing the value same

  // myObservable = from(this.arr1); // if want to convert observable into promise then we used from operator

  // transformObbs = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((value) => {
  //     return value <= 30;
  //   })
  // );
  // filterObbs = this.transformObbs.pipe(
  //   filter((value) => {
  //     return value <= 30;
  //   })
  // );
  //   ngOnInit() {
  //     this.transformObbs.subscribe(
  //       (val: any) => {
  //         console.log(val);
  //       },
  //       (error) => {
  //         alert(error.message);
  //       },
  //       () => {
  //         alert('Obervable has complete all values ');
  //       }
  //     );
  //   }
}
