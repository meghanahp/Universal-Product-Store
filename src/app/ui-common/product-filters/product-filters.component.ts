import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit {
selectedFilter;
toggleIcon = false;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  filterProducts(val): void {
    this.selectedFilter = val;
    this.sharedService.filterByProducts(val);
  }

  clearFilters(): void {
    this.toggleIcon = !this.toggleIcon;
    this.selectedFilter = null;
    if (!this.toggleIcon) {
    this.sharedService.filterByProducts();
    }
  }
}
