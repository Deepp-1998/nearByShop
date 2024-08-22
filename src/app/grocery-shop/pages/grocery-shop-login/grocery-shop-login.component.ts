import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { GroceryShopService } from '../../services/grocery-shop.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-grocery-shop-login',
  templateUrl: './grocery-shop-login.component.html',
  styleUrls: ['./grocery-shop-login.component.scss']
})
export class GroceryShopLoginComponent implements OnInit{

  @ViewChild('shopID') shopID!:ElementRef; 
  loginAlertMsg:boolean = false;

  constructor(
    private groceryShopService:GroceryShopService,
    private router:Router
  ){}

  ngOnInit(): void {
    
  }

  loginToGroceryShop() {
    if (this.shopID.nativeElement.value !='') {   
      this.groceryShopService.loginByShopID(this.shopID.nativeElement.value).subscribe({
        next: (shop)=> { 
          sessionStorage.setItem('shopID',shop.id); 
          this.router.navigateByUrl('/groceryShop/dashboard');
        },
        error: (err)=> {         
          console.error("Unable to fecth the shop details",err)
        }
      })
    }
    else {
      this.loginAlertMsg = true
      setTimeout(() => {
        this.loginAlertMsg = false          
      }, 2000);
    }
  }
}
