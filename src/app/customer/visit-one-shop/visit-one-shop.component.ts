import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map, mergeMap, of } from 'rxjs';
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
  shopDetails:any;

  constructor(
    private activdatedRoute: ActivatedRoute,
    private groceryShopService:GroceryShopService,
    private productService:ProductsService
  ){
  }
  ngOnInit(): void {
    this.shopId = this.activdatedRoute.snapshot.params['id'];
    console.log(this.shopId);

    // of(this.shopId).pipe(
    //   concatMap((id)=> 
    //     this.productService.getAllProduct().pipe(
    //       map((products)=>
    //         products.filter((product:any)=>product.shopID == id)
    //       )
    //     )
    //   )
    // ).subscribe({
    //   next: (product)=>{
    //     console.log("...........",product);
    //   }
    // });

    // this.groceryShopService.getShopByID(this.shopId).pipe(
    //   mergeMap((shop)=>{
    //     this.shopDetails = shop
    //     return this.productService.getAllProduct().pipe(map(
    //       (allProducts)=>{
    //         let  products =  allProducts.filter((product:any)=>product.shopID==shop.id);
    //         return {shop, products}
    //       }
    //     ))          
    //   })
    // ).subscribe({
    //   next: ({shop,products})=> { 
    //     console.log("shop: ",shop)
    //     console.log("shop products: ",products)
    //   },
    //   error: console.error
    // })
    // this.groceryShopService.getShopByID(this.shopId).subscribe({
    //   next:(shop)=>console.log('............shop',shop)
    // });

    
    // this.getAllProducts();    
  }

  getAllProducts() {    
    this.productService.getAllProduct().pipe(
      map((products)=>{
        return products.filter((product:any)=>product.shopID == this.shopId);
      })
    ).subscribe({
      next: (products)=>{
        console.log('.........products',products)
      },
      error: (err)=>console.error("unable to get products..",err)
    })
  }
}
