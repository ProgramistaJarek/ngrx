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
  ),
  on(
    productActions.updateProductsOnDeleteCart,
    (state: ProductState, { products }) => {
      let updatedStoredArr = products.map((keyA) => {
        const exists = state.products.find((keyB) => keyA.id == keyB.id);

        if (exists) {
          return { ...exists, inStock: exists.inStock + keyA.count };
        }
        return;
      });

      const chengeStateProducts = state.products.map(
        (product) =>
          updatedStoredArr.find((obj) => obj?.id === product.id) || product
      );

      return {
        ...state,
        products: chengeStateProducts,
      };
    }
  )
);
