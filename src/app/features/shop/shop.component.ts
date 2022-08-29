import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as productActions from 'src/app/states/product/product.actions';
import * as productSelectors from 'src/app/states/product/product.selectors';
import { ProductsService } from 'src/app/services/products.service';
import { productAppState } from 'src/app/states/AppState';

import { NotifyService } from 'src/app/utilities/notify/notify.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products$ = this.store.select(productSelectors.selectAllProducts);
  filters: string[] = [];

  constructor(
    private store: Store<productAppState>,
    private service: ProductsService,
    public notifyService: NotifyService
  ) {
    this.service.getProducts().subscribe((products) => {
      this.store.dispatch(productActions.retrievedProductsList({ products }));
    });
  }

  showProduct(key: string) {
    if (this.filters.includes(key)) {
      this.filters = this.filters.filter((ele) => {
        return ele != key;
      });
    } else {
      this.filters.push(key);
    }

    this.filters.length === 0
      ? (this.products$ = this.store.select(productSelectors.selectAllProducts))
      : (this.products$ = this.store.select(
          productSelectors.selectProductByCategories(this.filters)
        ));
  }
}
