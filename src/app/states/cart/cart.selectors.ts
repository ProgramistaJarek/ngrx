import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

interface cartAppState {
  cart: CartState;
}

const selectCarts = (state: cartAppState) => state.cart;

export const showProductsInCartBySnails = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.filter((value) => {
      return value.category == 'SNAILS';
    });
  }
);

export const showProductsInCartByBaguettes = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.filter((value) => {
      return value.category == 'BAGUETTES';
    });
  }
);

export const showProductsInCartByFrogs = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.filter((value) => {
      return value.category == 'FROGS';
    });
  }
);

export const numberOfProductInCart = (productId: number) =>
  createSelector(selectCarts, (state: CartState) => {
    return state.productsInCart.find((value) => {
      return value.id === productId;
    });
  });
