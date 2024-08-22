import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { GroceryShopService } from './grocery-shop/services/grocery-shop.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './grocery-shop/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GroceryShopService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
