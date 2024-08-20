import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-grocery',
  templateUrl: './update-grocery.component.html',
  styleUrls: ['./update-grocery.component.scss']
})
export class UpdateGroceryComponent  implements OnInit {

  productID:any;
  groceryForm!: FormGroup;

  constructor(
    private activaeRoute: ActivatedRoute,
    private fb:FormBuilder,
    private productService:ProductsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.productID = this.activaeRoute.snapshot.params['id']; 

    this.groceryForm = this.fb.group({
      productID: ['',[Validators.required,Validators.min(0)]],
      productName: ['',[Validators.required,Validators.minLength(3)]],
      quantity: ['',[Validators.required,Validators.min(1)]],
      units: ['',[Validators.required,Validators.min(1)]],
      price: ['',[Validators.required]],
      Describtion: ['',[Validators.required]]
    });

    // when page 1st load
    this.setGroceryFormByID();
  }


  setGroceryFormByID() {
    this.productService.getProductByID(this.productID).subscribe({
      next: (product)=> {
        this.groceryForm.patchValue(product)
      },
      error: (err)=>console.error('Some error occured!!!',err)
    })
  }

  updateform() {
    if (this.groceryForm.valid) {
      const updatedProduct =this.groceryForm.value
      this.productService.updateProduct(this.productID,updatedProduct).subscribe({
        next: ()=>{
          alert("Product updated!");    
          this.router.navigate(['/groceryShop/viewGrocery']); 
        },
        error: err => console.error("unable to update",err)        
      })
    }
    else {
      console.error('There is an error ',this.groceryForm.errors)
    }
  }

}
