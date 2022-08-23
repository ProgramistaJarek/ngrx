import { createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.actions';
import { Product } from '../../utilities/Product';

export interface Cart {
  products: Product[];
  inCart: number;
  toPay: number;
}

export const cartInitialState: Cart = {
  products: [],
  inCart: 0,
  toPay: 0,
};

export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addProduct, (state: Cart, { productId }) => ({
    ...state,
    inCart: productId,
  }))
);
