import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/constant';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  products: Array<Product>;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewDetails(): void {
    this.router.navigateByUrl(Path.ViewDetails);
  }
}
