import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from 'src/app/states/cart/cart.reducer';
import * as cartActions from 'src/app/states/cart/cart.actions';
import * as cartSelectors from 'src/app/states/cart/cart.selectors';
import { updateProductsOnDeleteCart } from 'src/app/states/product/product.actions';
import { ProductCategory } from 'src/app/utilities/Product';
import { ProductsInCart } from 'src/app/utilities/Cart';

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
  test$ = this.store.select(cartSelectors.showProductsInCart);

  categories = ProductCategory;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = this.store.select('cart');
  }

  onClearCart(products: ProductsInCart[]) {
    this.store.dispatch(updateProductsOnDeleteCart({ products }));
    this.store.dispatch(cartActions.clearCart());
  }
}
