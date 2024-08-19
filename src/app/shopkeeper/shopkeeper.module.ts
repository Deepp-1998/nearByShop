import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShopkeeperRoutingModule } from './shopkeeper-routing.module';
import { ShopkeeperComponent } from './shopkeeper.component';
import { ShopkeeperLoginComponent } from './pages/shopkeeper-login/shopkeeper-login.component';
import { ShopkeeperRegComponent } from './pages/shopkeeper-reg/shopkeeper-reg.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGroceryComponent } from './pages/add-grocery/add-grocery.component';
import { ViewGroceryComponent } from './pages/view-grocery/view-grocery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopkeeperService } from './services/shopkeeper.service';


@NgModule({
  declarations: [
    ShopkeeperComponent,
    ShopkeeperLoginComponent,
    ShopkeeperRegComponent,
    DashboardComponent,
    AddGroceryComponent,
    ViewGroceryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopkeeperRoutingModule,
    HttpClientModule
  ],
  providers: [
    ShopkeeperService
  ]
})
export class ShopkeeperModule { }
