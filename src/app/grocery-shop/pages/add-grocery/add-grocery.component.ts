import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../../auth/un-saved-reg.guard';
import { concatMap, from, map } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { GroceryShopService } from '../../services/grocery-shop.service';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.scss']
})
export class AddGroceryComponent implements OnInit,CanComponentDeactivate{

  groceryForm!: FormGroup;
  addedGrocery:any = [];
  @ViewChild('formAlert') formAlert!:ElementRef;
  @ViewChild('publishAlertMsg') publishAlertMsg!:ElementRef;

  constructor(
    private fb:FormBuilder,
    private productService:ProductsService,
    private groceryShopService:GroceryShopService
  ) {}

  ngOnInit(): void {
    this.groceryForm = this.fb.group({
      productID: ['',[Validators.required,Validators.min(0)]],
      productName: ['',[Validators.required,Validators.minLength(3)]],
      quantity: ['',[Validators.required,Validators.min(1)]],
      units: ['',[Validators.required,Validators.min(1)]],
      price: ['',[Validators.required]],
      Describtion: ['',[Validators.required]]
    })
  }

  // Use for form submit
  onSubmit() {  
    if (this.groceryForm.valid) {
      this.addedGrocery.push(this.groceryForm.value)
      this.groceryForm.reset();    
      // console.log(this.addedGrocery);

      this.formAlert.nativeElement.className = 'alert  alert-success';
      this.formAlert.nativeElement.innerHTML = 'Item added Successfully!';    
      setTimeout(() => {
        this.formAlert.nativeElement.className = 'd-none';        
      }, 1000);  
    } else {
      this.formAlert.nativeElement.className = 'alert alert-warning';
      this.formAlert.nativeElement.innerHTML = 'All Fields are Mandatory!'; 
      setTimeout(() => {
        this.formAlert.nativeElement.className = 'd-none';        
      }, 1000);
      console.log(this.groceryForm.errors)
    }
  }

  // used to delete each item
  deleteItem(id:any) {
    const itemIndex = this.addedGrocery.findIndex((item:any)=>item.productID === id); 
    this.addedGrocery.splice(itemIndex,1); 
  } 

  // publish all products for public
  publishProduct() {
    let Products = this.addedGrocery;
    from(Products).pipe(  
      concatMap((item:any)=>{        
        const getShopID = this.groceryShopService.getShopID().subscribe(id=>id)
        const addAllProductToShopID = {...item, getShopID}; 
        return this.productService.postProduct(addAllProductToShopID);         
      })
    ).subscribe({
      next: ()=> {        
        // console.log("Products are available for public now.",result)
        this.addedGrocery = [];
        this.publishAlertMsg.nativeElement.className = 'alert alert-success mb-3';
        setTimeout(() => {
          this.publishAlertMsg.nativeElement.className = 'd-none';          
        }, 1000);
      },
      error: (err)=> {
        console.error("error  is here",err)
      }
    }); 
  }

  canDeactivate():boolean {
    if (this.groceryForm.dirty) {
      return confirm('Unsave changes detected. Want to discard all?');
    } else {
      return true;
    }
  }
}
