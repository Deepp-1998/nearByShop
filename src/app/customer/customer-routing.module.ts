import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { VisitOneShopComponent } from './visit-one-shop/visit-one-shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'shopList',pathMatch: 'full' },
  { path: '', component: CustomerComponent },
  {path:"shopList",component: ShopListComponent},
  {path:"visitOneShop/:id",component: VisitOneShopComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
