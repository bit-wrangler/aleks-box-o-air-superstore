import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('title')
  title: string;
  @Input('price')
  price: number;
  @Input('img-src')
  imgSrc: string;
  
  constructor() { }

  ngOnInit() {
  }

}
