import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-accessaries',
  templateUrl: './accessaries.component.html',
  styleUrls: ['./accessaries.component.css']
})
export class AccessariesComponent implements OnInit {
products: Array<Product> = new Array<Product>();

  constructor(private sharedService: SharedService) {
    this.sharedService.products$.subscribe(response => {
      this.products = response;
    });
   }

  ngOnInit(): void {
  }
}
