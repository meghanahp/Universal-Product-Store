import { Component, OnInit, Output } from '@angular/core';
import { ProductType, Product } from 'src/app/models';
import { ProductService } from 'src/app/service/product.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productTypes: Array<ProductType>;
  selectedProductType: ProductType;
  products: Array<Product>;
  constructor(private productService: ProductService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loadInitialData();
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        this.loadProducts();
      }
    });
  }

  onChangeProductType(productType): void {
    this.selectedProductType = productType;
    this.loadProducts();
  }

  loadInitialData(): void {
    this.productService.getProductTypes().subscribe(response => {
      this.productTypes = response;
      this.selectedProductType = this.productTypes[0];
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.sharedService.appendProducts(response);
    });
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}
