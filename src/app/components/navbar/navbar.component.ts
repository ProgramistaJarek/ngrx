import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from 'src/app/states/cart/cart.reducer';
import { selectInCart } from 'src/app/states/cart/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cart$!: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = this.store.select(selectInCart);
  }
}
