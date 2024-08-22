import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { catchError, concatMap, filter, forkJoin, from, map, of, tap } from 'rxjs';
import { GroceryShopService } from '../../services/grocery-shop.service';

@Component({
  selector: 'app-view-grocery',
  templateUrl: './view-grocery.component.html',
  styleUrls: ['./view-grocery.component.scss']
})
export class ViewGroceryComponent implements OnInit{

  allProduct:any = [];
  @ViewChild('deleteMsgAlert') deleteMsgAlert!:ElementRef;

  constructor(
    private productService:ProductsService,
    private groceryShopService:GroceryShopService) {

  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {   
    forkJoin({
      shopID: this.groceryShopService.getShopID(),
      allProduct: this.productService.getAllProduct()
    }).pipe(
      map(({shopID,allProduct})=>{
        return allProduct.filter((product:any)=>product.shopID===shopID)
      }), 
      catchError((err) => {
        console.error("Error in product list:", err);
        return of([]); 
      })
    ).subscribe({
      next: (products)=> {
        this.allProduct = products; 
      },
      error: (err)=>console.error("Here errors in product list",err)
    })
  }

  deleteItem(id:any) {
    this.productService.deleteProduct(id).subscribe({
      next: ()=>{
        this.deleteMsgAlert.nativeElement.className = 'alert alert-success';
        setTimeout(() => {
          this.deleteMsgAlert.nativeElement.className = 'd-none';          
        }, 1000);
        this.allProduct = this.allProduct.filter((item:any)=>item.id!=id);
      },
      error: (err)=>{console.error("Error is here",err)}
    });
  }

  updateItem(id:any) {

  }
}
