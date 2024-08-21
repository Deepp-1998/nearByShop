import { Component, OnInit } from '@angular/core';
import { GroceryShopService } from '../../services/grocery-shop.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  shopDetails: any;

  constructor(
    private groceryShopService:GroceryShopService, 
  ){}

  ngOnInit(): void {
    this.groceryShopService.getShopDetails.subscribe({
      next: (shopDetails)=>{
        this.shopDetails = shopDetails;
        // console.log('shop details:',this.shopDetails)
      },
      error: (err)=>{
        console.error("Unable to Fetch shop Details:",err);        
      }
    })
  }
}
