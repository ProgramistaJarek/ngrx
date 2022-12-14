import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from 'src/app/utilities/Product';
import * as productActions from '../../states/product/product.actions';
import * as cartActions from '../../states/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() item!: Product;
  count: number = 1;

  constructor(private store: Store<{ product: Product[] }>) {}

  onPlus() {
    this.count++;
  }

  onMinus() {
    this.count--;
  }

  onAddToCard(productId: number) {
    this.store.dispatch(
      productActions.chengeProductInStock({ productId, count: this.count })
    );
    this.store.dispatch(
      cartActions.addProductDetailsToCart({
        product: this.item,
        count: this.count,
      })
    );
  }
}
