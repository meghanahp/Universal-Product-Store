import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

@NgModule({
  declarations: [ProductCardComponent,
    HeaderComponent, SubHeaderComponent,
    FooterComponent, ProductFiltersComponent,
    ViewProductDetailsComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [ProductCardComponent, FooterComponent, HeaderComponent, SubHeaderComponent, ProductFiltersComponent]
})
export class UiCommonModule { }
