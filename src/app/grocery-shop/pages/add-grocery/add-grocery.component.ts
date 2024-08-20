import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../../auth/un-saved-reg.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.scss']
})
export class AddGroceryComponent implements OnInit,CanComponentDeactivate{

  groceryForm!: FormGroup;
  addedGrocery:any = [];
  @ViewChild('formAlert') formAlert!:ElementRef;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.groceryForm = this.fb.group({
      itemID: ['',[Validators.required,Validators.min(0)]],
      itemName: ['',[Validators.required,Validators.minLength(3)]],
      quantity: ['',[Validators.required,Validators.min(1)]],
      price: ['',[Validators.required]],
      Describtion: ['',[Validators.required]]
    })
  }
  onSubmit() { 
    console.log(this.groceryForm)
    if (this.groceryForm.valid) {
      this.addedGrocery.push(this.groceryForm.value)
      this.groceryForm.reset();    
      console.log(this.addedGrocery);

      this.formAlert.nativeElement.className = 'alert  alert-success';
      this.formAlert.nativeElement.innerHTML = 'Item added Successfully!';      
    } else {
      this.formAlert.nativeElement.className = 'alert alert-warning';
      this.formAlert.nativeElement.innerHTML = 'All Fields are Mandatory!'; 
      console.log(this.groceryForm.errors)
    }
  }

  deleteItem(id:any) {
    this.addedGrocery.splice(id,1);
    console.log(this.addedGrocery)
  }
 
  canDeactivate():boolean {
    if (this.groceryForm.dirty) {
      return confirm('Unsave changes detected. Want to discard all?');
    } else {
      return true;
    }
  }
}
