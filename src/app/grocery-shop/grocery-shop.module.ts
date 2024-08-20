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
import { ShopkeeperService } from './services/shopkeeper.service';
import { GroceryItemComponent } from './pages/grocery-item/grocery-item.component';


@NgModule({
  declarations: [
    GroceryShopComponent,
    GroceryShopLoginComponent,
    GroceryShopRegComponent,
    DashboardComponent,
    AddGroceryComponent,
    ViewGroceryComponent,
    GroceryItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GroceryShopRoutingModule,
    HttpClientModule
  ],
  providers: [
    ShopkeeperService
  ]
})
export class GroceryShopModule { }
