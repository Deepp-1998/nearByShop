import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { filter, from, tap } from 'rxjs';

@Component({
  selector: 'app-view-grocery',
  templateUrl: './view-grocery.component.html',
  styleUrls: ['./view-grocery.component.scss']
})
export class ViewGroceryComponent implements OnInit{

  allProduct:any = [];
  @ViewChild('deleteMsgAlert') deleteMsgAlert!:ElementRef;

  constructor(private productService:ProductsService) {

  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe({
      next: (products)=>{
        this.allProduct = products; 
      },
      error: (err)=>{console.error("Error is here",err)}
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
