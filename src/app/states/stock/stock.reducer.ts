import { createReducer, on } from '@ngrx/store';
import * as stockActions from './stock.actions';
import { Product, ProductCategory } from '../../utilities/Product';

export const stockInitialState: Product[] = [];

export const stockReducer = createReducer(
  stockInitialState,
  on(stockActions.retrievedProductsList, (state, { products }) => products)
  /* on(stockActions.showPorducts, (state, { category }) =>
    state.filter((id) => id.category == category)
  ) */
);
