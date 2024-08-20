import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroceryShopRoutingModule } from './grocery-shop-routing.module';
import { GroceryShopComponent } from './grocery-shop.component';
import { GroceryShopLoginComponent } from './pages/grocery-shop-login/grocery-shop-login.component';
import { GroceryShopRegComponent } from './pages/grocery-shop-reg/grocery-shop-reg.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGroceryComponent } from './pages/add-grocery/add-grocery.component';
import { ViewGroceryComponent } from './pages/view-grocery/view-grocery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroceryShopService } from './services/grocery-shop.service';
import { GroceryItemComponent } from './pages/grocery-item/grocery-item.component';
import { ProductsService } from './services/products.service';
import { UpdateGroceryComponent } from './pages/update-grocery/update-grocery.component';


@NgModule({
  declarations: [
    GroceryShopComponent,
    GroceryShopLoginComponent,
    GroceryShopRegComponent,
    DashboardComponent,
    AddGroceryComponent,
    ViewGroceryComponent,
    GroceryItemComponent,
    UpdateGroceryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GroceryShopRoutingModule,
    HttpClientModule
  ],
  providers: [
    GroceryShopService,ProductsService
  ]
})
export class GroceryShopModule { }
