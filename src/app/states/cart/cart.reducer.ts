import { createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.actions';
import { Product } from '../../utilities/Product';
import { ProductsInCart } from 'src/app/utilities/Cart';

export interface Cart {
  products: Product[];
  productsInCart: ProductsInCart[];
  inCart: number;
  toPay: number;
}

export const cartInitialState: Cart = {
  products: [],
  productsInCart: [],
  inCart: 0,
  toPay: 0,
};

export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addProductCount, (state: Cart, { count }) => ({
    ...state,
    inCart: state.inCart + count,
  })),
  on(cartActions.addProduct, (state: Cart, { product }) => {
    let products!: Product[];

    if (state.products.find((key) => key.id === product.id)) {
      state.products.map(() => {
        products = [...state.products];
      });
    } else {
      products = [...state.products, product];
    }

    return {
      ...state,
      products,
    };
  })
);
