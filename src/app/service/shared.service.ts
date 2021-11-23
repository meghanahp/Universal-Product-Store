import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    currentProducts: Array<Product> = new Array<Product>();
    constructor(private productService: ProductService) { }
    private products: Subject<Array<Product>> = new Subject<Array<Product>>();

    get products$(): Subject<Array<Product>> {
        return this.products;
    }

    updateProducts(data: Array<Product>): void {
        this.currentProducts = data;
        this.products.next(data);
    }

    appendProducts(data: Array<Product>): void {
        this.currentProducts.unshift(...data);
        this.products.next(this.currentProducts);
    }

    sortByProducts(val): void {
        this.productService.getProducts().subscribe(response => {
            this.updateProducts(response.sort((a, b) => a[val] - b[val]));
        });
    }

    filterByProducts(val = ''): void {
        this.productService.getProducts().subscribe(response => {
            this.updateProducts(val ? response.filter(q => q.tags.includes(val)) : response);
        });
    }
}

