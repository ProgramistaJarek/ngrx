import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from 'src/app/utilities/Product';
import * as stockActions from 'src/app/states/stock/stock.action';
import * as stockSelectors from 'src/app/states/stock/stoct.selectors';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  product$!: Observable<Product[]>;

  constructor(
    private store: Store<{ product: Product[] }>,
    private service: ProductsService
  ) {
    this.service.getProducts().subscribe((products) => {
      this.store.dispatch(stockActions.retrievedProductsList({ products }));
    });
    this.product$ = this.store.select('product');
  }

  showProduct(category: number) {
    if (category == 0)
      this.product$ = this.store.select(stockSelectors.selectProductBySnails);
    if (category == 1)
      this.product$ = this.store.select(
        stockSelectors.selectProductByBaguettes
      );
    if (category == 2)
      this.product$ = this.store.select(stockSelectors.selectProductByFrogs);
  }
}
