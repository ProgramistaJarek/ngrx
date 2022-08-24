import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from 'src/app/utilities/Product';
import * as productActions from 'src/app/states/product/product.actions';
import * as cartActions from 'src/app/states/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() item!: Product;
  count: number = 0;

  constructor(private store: Store<{ product: Product[] }>) {}

  onPlus() {
    this.count++;
  }

  onMinus() {
    this.count--;
  }

  onAddToCard(productId: number) {
    this.store.dispatch(
      productActions.testProductInStock({ productId, count: this.count })
    );
    this.store.dispatch(cartActions.addProductCount({ count: this.count }));
    this.store.dispatch(cartActions.addProduct({ product: this.item }));
  }
}
