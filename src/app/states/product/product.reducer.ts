import { createReducer, on } from '@ngrx/store';
import * as productActions from './product.actions';
import { Product } from '../../utilities/Product';

export interface ProductState {
  products: Product[];
}

const productInitialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  productInitialState,
  on(
    productActions.retrievedProductsList,
    (state: ProductState, { products }) => ({
      ...state,
      products: [...products],
    })
  ),
  on(
    productActions.chengeProductInStock,
    (state: ProductState, { productId, count }) => {
      const products = state.products.map((value) =>
        value.id === productId
          ? { ...value, inStock: value.inStock - count }
          : value
      );

      return {
        ...state,
        products,
      };
    }
  )
);
