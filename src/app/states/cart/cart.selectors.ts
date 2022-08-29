import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

interface cartAppState {
  cart: CartState;
}

const selectCarts = (state: cartAppState) => state.cart;

export const numberOfProductInCartById = (productId: number) =>
  createSelector(selectCarts, (state: CartState) => {
    return state.productsInCart.find((value) => {
      return value.id === productId;
    });
  });

export const getAllCategories = createSelector(
  selectCarts,
  (state: CartState) => {
    const newSet: Set<string> = new Set();
    state.products.map((value) => newSet.add(value.category));
    return newSet;
  }
);

export const selectInCart = createSelector(
  selectCarts,
  (state: CartState) => state.inCart
);
