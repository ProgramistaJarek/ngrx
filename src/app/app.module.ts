import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { stockReducer } from './states/stock/stock.reducer';

import { ShopComponent } from './features/shop/shop.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './features/cart/cart.component';

@NgModule({
  declarations: [AppComponent, ShopComponent, ProductCardComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: stockReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
