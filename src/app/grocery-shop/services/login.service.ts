import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  logout() {
    sessionStorage.removeItem('shopID');
    this.router.navigateByUrl('/home')
  }
}
