import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  notify = 'notifyme';
  buttonName = 'buy-now';
  details = 'Show details';
  constructor() {}

  ngOnInit(): void {}
  products = [
    {
      id: 1,
      name: 'Minimalist analog watch',
      price: '109',
      color: 'black',
      available: 'available',
      image: '/assets/product/watch.jpg',
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Samrt tv',
      price: '3393',
      color: 'black',
      available: 'available',
      image: '/assets/product/tv.jpg',
    },
    {
      id: 3,
      name: 'Apple iphone 14',
      price: '90000',
      color: 'black',
      available: 'not in stock',
      image: '/assets/product/iphone.jpg',
    },
    {
      id: 4,
      name: 'LG fully Automatic Washing machine',
      price: '13000',
      color: 'White',
      available: 'available',
      image: '/assets/product/washing.jpg',
    },
    {
      id: 5,
      name: 'LG Refrigerator with door cooling',
      price: '2187',
      color: 'white',
      available: 'not in the stock',
      image: '/assets/product/refrigerator.jpg',
    },
    {
      id: 6,
      name: 'DELL Insprison one 27 Ryzen 7',
      price: '68000',
      color: 'white',
      available: 'available',
      image: '/assets/product/dell.jpg',
    },
  ];
}
