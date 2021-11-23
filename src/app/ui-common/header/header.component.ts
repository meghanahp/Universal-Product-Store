import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductType } from 'src/app/models';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productTypes: Array<ProductType>;
  selectedProductType: ProductType;
  @Output()
  productTypeEmitter: EventEmitter<string> = new EventEmitter();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.productService.getProductTypes().subscribe(response => {
      this.productTypes = response;
      this.selectedProductType = this.productTypes[0];
    });
  }
  onProductTypeChange(val): void {
    this.selectedProductType = val;
    this.productTypeEmitter.emit(val);
  }

}
