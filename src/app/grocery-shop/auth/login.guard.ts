import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { GroceryShopService } from '../services/grocery-shop.service';


export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean>  => {
  const router = inject(Router);
  const groceryShopService = inject(GroceryShopService);

  return groceryShopService.getShopID().pipe(
    map(shopId=>{
      if (shopId) {
        return true;
      }else {
        alert("Please login first.")
        router.navigateByUrl('/groceryShop/groceryShopLogin')
        return false
      }   
    })
  );
};
