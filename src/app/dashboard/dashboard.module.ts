import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiCommonModule } from '../ui-common/ui-common.module';
import { AccessariesModule } from './accessaries/accessaries.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    UiCommonModule ,
    AccessariesModule
  ],
  exports:[DashboardComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
