import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from 'src/app/states/cart/cart.reducer';
import * as cartActions from 'src/app/states/cart/cart.actions';
import * as cartSelectors from 'src/app/states/cart/cart.selectors';
import * as productActions from 'src/app/states/product/product.actions';
import { Product } from 'src/app/utilities/Product';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  @Input() item!: Product;
  inStock$!: Observable<any>;

  constructor(private store: Store<{ cart: CartState }>) {}

  ngOnInit(): void {
    this.inStock$ = this.store.select(
      cartSelectors.numberOfProductInCartById(this.item.id)
    );
  }

  changeInStockByOne(x: number) {
    this.store.dispatch(
      cartActions.updateDetailsAboutProductInCart({
        productId: this.item.id,
        count: x,
        toPay: this.item.price,
      })
    );
    this.store.dispatch(
      productActions.chengeProductInStock({
        productId: this.item.id,
        count: x,
      })
    );
  }

  onDelete(negativeStockCount: number) {
    this.store.dispatch(
      cartActions.deleteProductFromCart({ productId: this.item.id })
    );
    this.store.dispatch(
      productActions.chengeProductInStock({
        productId: this.item.id,
        count: negativeStockCount,
      })
    );
  }
}
