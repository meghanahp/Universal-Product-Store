import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from './constant';
import { AccessariesComponent } from './dashboard/accessaries/accessaries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProductDetailsComponent } from './ui-common/view-product-details/view-product-details.component';

const routes: Routes = [{
  path: Path.Home,
  component: DashboardComponent,
  children: [{
    path: '',
    component: AccessariesComponent
  },
  {
    path: Path.ViewDetails,
    component: ViewProductDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
