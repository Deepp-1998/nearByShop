import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryShopComponent } from './grocery-shop.component';
import { GroceryShopLoginComponent } from './pages/grocery-shop-login/grocery-shop-login.component';
import { GroceryShopRegComponent } from './pages/grocery-shop-reg/grocery-shop-reg.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGroceryComponent } from './pages/add-grocery/add-grocery.component';
import { ViewGroceryComponent } from './pages/view-grocery/view-grocery.component';
import { unSavedRegGuard } from './auth/un-saved-reg.guard';

const routes: Routes = [
  { path: '', redirectTo: 'groceryShopLogin',pathMatch: 'full' },
  { path: 'groceryShopLogin', component: GroceryShopLoginComponent },
  { 
    path: 'groceryShopReg', 
    component: GroceryShopRegComponent,
    canDeactivate:[unSavedRegGuard]
  },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'addGrocery', 
    component: AddGroceryComponent ,
    canDeactivate:[unSavedRegGuard]
  },
  { path: 'viewGrocery', component: ViewGroceryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryShopRoutingModule { }
