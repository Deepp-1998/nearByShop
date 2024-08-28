import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryShopService {

  apiUrlIs = 'http://localhost:3000/registeredShop/';

  getShopDetails = new BehaviorSubject<any>({});
  shopID = new BehaviorSubject<any>('');
 
  
  constructor(private http:HttpClient) { 
    this.shopID.next(sessionStorage.getItem('shopID'));
  }

  

  getShopID() :Observable<any>{
    const shopID = sessionStorage.getItem('shopID');
    return  of(shopID);
  }

  addGroceryShop(shop:any) :Observable<any>{
    return  this.http.post(this.apiUrlIs,shop);
  }

  getAllGroceryshop():Observable<any> {
    return this.http.get(this.apiUrlIs);
  }

  getShopByID(id:any):Observable<any> {
    this.http.get(`${this.apiUrlIs}${id}`).subscribe({
      next: (shop)=>{
        this.getShopDetails.next(shop);
      },
      error: (err)=> {
        console.log('Unable to fetch shop details',err)
      }
    })
    return this.getShopDetails;    
  }
}
