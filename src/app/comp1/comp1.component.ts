import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  enterText: string = '';
  OnButtonClick() {
    this.dataService.raiseDataEmitterEvent(this.enterText);
    // console.log(this.enterText);
  }
}
