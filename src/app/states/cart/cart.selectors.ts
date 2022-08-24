import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

interface cartAppState {
  cart: CartState;
}

const selectCarts = (state: cartAppState) => state.cart;

export const showProductsInCartByCategory = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.filter((value) => {
      return value.category == 'SNAILS';
    });
  }
);
