import { Component, OnInit } from '@angular/core';
import { GroceryShopService } from 'src/app/grocery-shop/services/grocery-shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent  implements OnInit {

  allShop:any;

  constructor(private groceryShopService:GroceryShopService){

  }
  ngOnInit(): void {
    this.groceryShopService.getAllGroceryshop().subscribe({
      next: (shopList)=> {
        this.allShop = shopList; 
      },
      error: (err)=>console.error("Unable to get shop",err)
    })
  }

}
