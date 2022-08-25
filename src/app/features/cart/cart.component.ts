import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from 'src/app/states/cart/cart.reducer';
import * as cartActions from 'src/app/states/cart/cart.actions';
import * as cartSelectors from 'src/app/states/cart/cart.selectors';
import { ProductCategory } from 'src/app/utilities/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart$!: Observable<CartState>;

  snails$ = this.store.select(cartSelectors.showProductsInCartBySnails);
  baguettes$ = this.store.select(cartSelectors.showProductsInCartByBaguettes);
  frogs$ = this.store.select(cartSelectors.showProductsInCartByFrogs);

  categories = ProductCategory;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = this.store.select('cart');
  }

  onClearCart() {
    this.store.dispatch(cartActions.clearCart());
  }
}
