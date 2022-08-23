import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product, ProductCategory } from 'src/app/utilities/Product';
import * as stockActions from 'src/app/states/stock/stock.actions';
import * as stockSelectors from 'src/app/states/stock/stock.selectors';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  product$!: Observable<Product[]>;
  categories = ProductCategory;
  filters: string[] = [];

  constructor(
    private store: Store<{ product: Product[] }>,
    private service: ProductsService
  ) {
    this.service.getProducts().subscribe((products) => {
      this.store.dispatch(stockActions.retrievedProductsList({ products }));
    });
    this.product$ = this.store.select('product');
  }

  showProduct(key: string) {
    if (this.filters.includes(key)) {
      this.filters = this.filters.filter((ele) => {
        return ele != key;
      });
    } else {
      this.filters.push(key);
    }

    this.filters.length == 0
      ? (this.product$ = this.store.select('product'))
      : (this.product$ = this.store.select(
          stockSelectors.selectProductByCategories(this.filters)
        ));
  }
}
