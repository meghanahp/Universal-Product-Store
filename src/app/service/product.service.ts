import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCT_TYPE_URL = 'assets/data/product-types.json';
  PRODUCT_URL = 'assets/data/product.json';
  constructor(private httpClient: HttpClient) { }

  getProductTypes(): Observable<Array<ProductType>> {
    return this.httpClient.get<Array<ProductType>>(this.PRODUCT_TYPE_URL);
  }

  getProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.PRODUCT_URL);
  }
}
