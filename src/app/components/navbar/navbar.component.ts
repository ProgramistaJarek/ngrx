import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from 'src/app/states/cart/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cart$!: Observable<CartState>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = this.store.select('cart');
  }
}
