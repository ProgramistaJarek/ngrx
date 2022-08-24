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
  on(cartActions.addProductCountAndPrice, (state: Cart, { count, toPay }) => ({
    ...state,
    inCart: state.inCart + count,
    toPay: state.toPay + count * toPay,
  })),
  on(cartActions.addProductDetailsToCart, (state: Cart, { product }) => {
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
  }),
  on(
    cartActions.showDetailsAboutProductsInCart,
    (state: Cart, { productId, count }) => {
      let productsInCart!: ProductsInCart[];
      if (state.productsInCart.find((key) => key.id === productId)) {
        productsInCart = state.productsInCart.map((value) =>
          value.id === productId
            ? { ...value, count: value.count + count }
            : value
        );
      } else {
        productsInCart = [...state.productsInCart, { id: productId, count }];
      }

      return {
        ...state,
        productsInCart,
      };
    }
  )
);
