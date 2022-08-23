import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cart } from 'src/app/states/cart/cart.reducer';
import * as cartActions from 'src/app/states/cart/cart.actions';
//import * as cartSelectors from 'src/app/states/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart$!: Observable<Cart>;

  constructor(private store: Store<{ cart: Cart }>) {
    this.cart$ = this.store.select('cart');
  }
}
