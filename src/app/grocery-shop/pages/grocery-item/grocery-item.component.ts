import { Component, EventEmitter, Input, Output } from '@angular/core'; 

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.scss']
})
export class GroceryItemComponent {

  @Input() groceryItem:any = [];

  
  constructor() { }

  @Output() deleteItemEvent = new EventEmitter();
  @Output() updateItemEvent = new EventEmitter();

  deleteItem(id:any){
    this.deleteItemEvent.emit(id);
  } 
}
