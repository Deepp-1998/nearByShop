import { Component, OnInit } from '@angular/core';
import { GroceryShopService } from 'src/app/grocery-shop/services/grocery-shop.service';
import { LoginService } from 'src/app/grocery-shop/services/login.service';

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
    private loginService:LoginService
  ){}

  ngOnInit(): void {
    
  }

  closeShop(){
    this.loginService.logout();
  }
}
