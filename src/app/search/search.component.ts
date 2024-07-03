import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  serachvalue: string = '';
  search = 'you have search for';
  constructor() {}

  ngOnInit(): void {}

  chnageSearchValue(event: any) {
    // console.log(event.target.value);
    this.serachvalue = event.target.value;
  }
}
