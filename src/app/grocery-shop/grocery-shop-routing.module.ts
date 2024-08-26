import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { GroceryShopLoginComponent } from './pages/grocery-shop-login/grocery-shop-login.component';
import { GroceryShopRegComponent } from './pages/grocery-shop-reg/grocery-shop-reg.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGroceryComponent } from './pages/add-grocery/add-grocery.component';
import { ViewGroceryComponent } from './pages/view-grocery/view-grocery.component';
import { unSavedRegGuard } from './auth/un-saved-reg.guard';
import { UpdateGroceryComponent } from './pages/update-grocery/update-grocery.component';
import { loginGuard } from './auth/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'groceryShopLogin',pathMatch: 'full' },
  { path: 'groceryShopLogin', component: GroceryShopLoginComponent },
  { 
    path: 'groceryShopReg', 
    component: GroceryShopRegComponent,
    canDeactivate:[unSavedRegGuard], 
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[loginGuard]
  },
  { 
    path: 'addGrocery', 
    component: AddGroceryComponent ,
    canDeactivate:[unSavedRegGuard],
    canActivate:[loginGuard]
  },
  { 
    path: 'updateGrocery/:id', 
    component: UpdateGroceryComponent ,
    canDeactivate:[unSavedRegGuard],
    canActivate:[loginGuard]
  },
  { 
    path: 'viewGrocery',
    component: ViewGroceryComponent ,
    canActivate:[loginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryShopRoutingModule { }
