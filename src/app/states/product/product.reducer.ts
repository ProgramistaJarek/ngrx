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
    productActions.incrementProductInStock,
    (state: ProductState, { productId }) => {
      let modifiedState = JSON.parse(JSON.stringify([...state.products]));
      modifiedState.map((data: any) => {
        if (data.id === productId) {
          data.inStock++;
        }
      });

      return {
        ...state,
        products: [...modifiedState],
      };
    }
  ),
  on(
    productActions.decrementProductInStock,
    (state: ProductState, { productId }) => {
      let modifiedState = JSON.parse(JSON.stringify([...state.products]));
      modifiedState.map((data: any) => {
        if (data.id === productId) {
          data.inStock--;
        }
      });

      return {
        ...state,
        products: [...modifiedState],
      };
    }
  )
);
