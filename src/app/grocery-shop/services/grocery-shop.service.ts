import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryShopService {

  apiUrlIs = 'http://localhost:3000/registeredShop';
  
  constructor(private http:HttpClient,) { }


  addGroceryShop(shop:any) :Observable<any>{
    return  this.http.post(this.apiUrlIs,shop);
  }

  getAllGroceryshop():Observable<any> {
    return this.http.get(this.apiUrlIs);
  }

}
