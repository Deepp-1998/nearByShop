import { Component, OnInit } from '@angular/core';
import { GroceryShopService } from 'src/app/grocery-shop/services/grocery-shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  
  shopDetails: any;
  getShopID: any;

  constructor(
    private groceryShopService:GroceryShopService, 
  ){}

  ngOnInit(): void {
    this.getShopID = this.groceryShopService.getShopID;
    // this.getShopID = sessionStorage.getItem('shopID');
    console.log(this.getShopID)
  }
}
