import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer } from './states/product/product.reducer';
import { cartReducer } from './states/cart/cart.reducer';
import { CartEffects } from './states/cart/cart.effects';

import { NavbarComponent } from './components/navbar/navbar.component';
/* import { ShopComponent } from './features/shop/shop.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './features/cart/cart.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
 */

import { ToastModule } from './features/toast/toast.module';
import { CartModule } from './features/cart/cart.module';
import { ShopModule } from './features/shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    /*  ShopComponent,
    ProductCardComponent,
    CartComponent,
    MiniCardComponent,
    NavbarComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: productReducer, cart: cartReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CartEffects]),
    ToastModule,
    BrowserAnimationsModule,
    CartModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
