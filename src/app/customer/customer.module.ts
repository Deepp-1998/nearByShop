import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { VisitOneShopComponent } from './visit-one-shop/visit-one-shop.component';


@NgModule({
  declarations: [
    CustomerComponent,
    ShopListComponent,
    VisitOneShopComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
