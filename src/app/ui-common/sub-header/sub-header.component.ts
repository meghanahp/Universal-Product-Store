import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from 'src/app/models';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
@Input()
selectedProductType: ProductType;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  sortProducts(val): void {
    this.sharedService.sortByProducts(val);
  }
}
