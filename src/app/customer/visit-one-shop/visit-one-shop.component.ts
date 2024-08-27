import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { GroceryShopService } from 'src/app/grocery-shop/services/grocery-shop.service';
import { ProductsService } from 'src/app/grocery-shop/services/products.service';

@Component({
  selector: 'app-visit-one-shop',
  templateUrl: './visit-one-shop.component.html',
  styleUrls: ['./visit-one-shop.component.scss']
})
export class VisitOneShopComponent implements OnInit{

  shopId:any;
  productList:any;

  constructor(
    private activdatedRoute: ActivatedRoute,
    private groceryShopService:GroceryShopService,
    private productService:ProductsService
  ){
    this.shopId = this.activdatedRoute.snapshot.params['id'];
    console.log(this.shopId)
  }
  ngOnInit(): void {
    this.groceryShopService.loginByShopID(this.shopId).subscribe({
      next:(shop)=>console.log('............shop',shop)
    });

    // setTimeout(() => {
      
    //   this.getAllProducts();    
    // }, 1000);
  }

  // getAllProducts() {    
  //   this.productService.getAllProduct().pipe(
  //     map((products)=>{
  //       products.filter((product:any)=>product.shopID == this.shopId);
  //     })
  //   ).subscribe({
  //     next: (products)=>{
  //       console.log('.........products',products)
  //     },
  //     error: (err)=>console.error("unable to get products..",err)
  //   })
  // }
}
