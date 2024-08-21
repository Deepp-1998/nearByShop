import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productApiUrl:string = 'http://localhost:3000/Products/'

  constructor(private http:HttpClient) { }


  getAllProduct():Observable<any> {
    return this.http.get(this.productApiUrl);
  }
  getProductByID(id:any):Observable<any> {
    return this.http.get(`${this.productApiUrl}${id}`);
  }

  postProduct(item:any):Observable<any>  {
    return this.http.post(this.productApiUrl,item);
  }

  deleteProduct(id:any):Observable<any>  {
    return this.http.delete(`${this.productApiUrl}${id}`);
  }

  updateProduct(id:any,item:any):Observable<any>  {
    return this.http.put(`${this.productApiUrl}${id}`,item);
  }
 
}
