import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopkeeperComponent } from './shopkeeper.component';
import { ShopkeeperLoginComponent } from './pages/shopkeeper-login/shopkeeper-login.component';
import { ShopkeeperRegComponent } from './pages/shopkeeper-reg/shopkeeper-reg.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGroceryComponent } from './pages/add-grocery/add-grocery.component';
import { ViewGroceryComponent } from './pages/view-grocery/view-grocery.component';
import { unSavedRegGuard } from './auth/un-saved-reg.guard';

const routes: Routes = [
  { path: '', redirectTo: 'shopkeeperLogin',pathMatch: 'full' },
  { path: 'shopkeeperLogin', component: ShopkeeperLoginComponent },
  { 
    path: 'shopkeeperReg', 
    component: ShopkeeperRegComponent,
    canDeactivate:[unSavedRegGuard]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addGrocery', component: AddGroceryComponent },
  { path: 'viewGrocery', component: ViewGroceryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopkeeperRoutingModule { }
