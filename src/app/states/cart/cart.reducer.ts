import { createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.actions';
import { Product } from '../../utilities/Product';
import { ProductsInCart } from 'src/app/utilities/Cart';

export interface CartState {
  products: Product[];
  productsInCart: ProductsInCart[];
  inCart: number;
  toPay: number;
}

export const cartInitialState: CartState = {
  products: [],
  productsInCart: [],
  inCart: 0,
  toPay: 0,
};

export const cartReducer = createReducer(
  cartInitialState,
  on(
    cartActions.addProductDetailsToCart,
    (state: CartState, { product, count }) => {
      let products!: Product[];

      if (state.products.find((key) => key.id === product.id)) {
        state.products.map(() => {
          products = [...state.products];
        });
      } else {
        products = [...state.products, product];
      }

      let productsInCart!: ProductsInCart[];
      if (state.productsInCart.find((key) => key.id === product.id)) {
        productsInCart = state.productsInCart.map((value) =>
          value.id === product.id
            ? { ...value, count: value.count + count }
            : value
        );
      } else {
        productsInCart = [...state.productsInCart, { id: product.id, count }];
      }

      return {
        ...state,
        products,
        productsInCart,
        inCart: state.inCart + count,
        toPay: state.toPay + count * product.price,
      };
    }
  ),

  on(
    cartActions.updateDetailsAboutProductInCart,
    (state: CartState, { productId, count, toPay }) => {
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
        inCart: state.inCart + count,
        toPay: state.toPay + count * toPay,
      };
    }
  ),

  on(
    cartActions.clearCart,
    cartActions.orderCompleteClearCart,
    (state: CartState) => {
      return {
        products: [],
        productsInCart: [],
        inCart: 0,
        toPay: 0,
      };
    }
  ),

  on(cartActions.deleteProductFromCart, (state: CartState, { productId }) => {
    const inCartDelete = state.productsInCart.filter(
      (key) => key.id === productId
    );
    const toPayDelete = state.products.filter((key) => key.id === productId);

    return {
      ...state,
      products: state.products.filter((key) => key.id !== productId),
      productsInCart: state.productsInCart.filter(
        (key) => key.id !== productId
      ),
      inCart: state.inCart - inCartDelete[0].count,
      toPay: state.toPay - inCartDelete[0].count * toPayDelete[0].price,
    };
  })
);
