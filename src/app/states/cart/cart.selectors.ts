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
      return value.category == 'LUZ';
    });
  }
);

export const showProductsInCartByBaguettes = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.filter((value) => {
      return value.category == 'PALETA';
    });
  }
);

export const showProductsInCartByFrogs = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.filter((value) => {
      return value.category == 'BIGBAG';
    });
  }
);

export const showProductsInCart = createSelector(
  selectCarts,
  (state: CartState) => {
    return state.products.map((value) => {
      return value.category;
    });
  }
);

export const numberOfProductInCartById = (productId: number) =>
  createSelector(selectCarts, (state: CartState) => {
    return state.productsInCart.find((value) => {
      return value.id === productId;
    });
  });

export const numberOfProductInCart = createSelector(
  selectCarts,
  (state: CartState) => state.productsInCart
);
