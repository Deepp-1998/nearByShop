import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopkeeperService } from '../../services/shopkeeper.service';
import { CanComponentDeactivate } from '../../auth/un-saved-reg.guard';

@Component({
  selector: 'app-grocery-shop-reg',
  templateUrl: './grocery-shop-reg.component.html',
  styleUrls: ['./grocery-shop-reg.component.scss']
})
export class GroceryShopRegComponent implements OnInit,CanComponentDeactivate{

  shopkeeperForm!:FormGroup;
  formErrorAlert: boolean= false;
  formSuccessAlert: boolean= false;

  constructor(private fb:FormBuilder,private _shopkeeperService:ShopkeeperService) {}

  ngOnInit() {

    this.shopkeeperForm =this.fb.group({
      shopDetails: this.fb.group({
        shopName: ['',[Validators.required]],
        firstOpenDate: ['', Validators.required],
        licenceNo: ['',[Validators.required]],
        pincode: ['',[Validators.required]],
        shopAddress: ['',[Validators.required]],
      }),
      ownerDetails: this.fb.group({
        ownerName: ['',[Validators.required]],
        dob:['',Validators.required],
        gender: ['',Validators.required],
        mob: ['',[Validators.required]],
        email:['',[Validators.email,Validators.required]]
      })
    });

  }

  onSubmit() {
    if (this.shopkeeperForm.valid) {
      this.formErrorAlert = false;
      this._shopkeeperService.addGroceryShop(this.shopkeeperForm.value).subscribe({
        next: ()=>this.formSuccessAlert= true,
        error: console.error
      });
      // console.log(this.shopkeeperForm.value);
      this.shopkeeperForm.reset();
      setTimeout(() => {
        this.formSuccessAlert=false;
      }, 200);
    } else {
       this.formErrorAlert = true;
       console.error(this.shopkeeperForm.errors)
    }
  }

  canDeactivate() :boolean {
    if (this.shopkeeperForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }
}
