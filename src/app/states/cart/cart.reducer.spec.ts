import * as cartReducer from './cart.reducer';
import * as cartActions from './cart.actions';

import { Product, ProductCategory } from '../../utilities/Product';
import { CartState } from './cart.reducer';

describe('CartReducer', () => {
  const cartInitialState: CartState = {
    products: [
      {
        id: 1,
        name: 'Pieklorz ekogorszek - paleta',
        stars: 4,
        inStock: 2,
        imgUrl: '../../assets/img/pieklorz_ekogroszek_paleta.jpg',
        price: 1420,
        category: ProductCategory.PALETA,
      },
      {
        id: 2,
        name: 'Karlik ekogorszek - bigbag',
        stars: 5,
        inStock: 1,
        imgUrl: '../../assets/img/karlik_ekogroszek_bigbag.jpg',
        price: 1420,
        category: ProductCategory.BIGBAG,
      },
      {
        id: 3,
        name: 'Karlik ekogorszek - paleta',
        stars: 2,
        inStock: 4,
        imgUrl: '../../assets/img/karlik_ekogroszek_paleta.jpg',
        price: 1420,
        category: ProductCategory.PALETA,
      },
      {
        id: 4,
        name: 'Retopal ekogorszek - luz',
        stars: 2,
        inStock: 5,
        imgUrl: '../../assets/img/retopal_ekogroszek_piast_luz.jpg',
        price: 1220,
        category: ProductCategory.LUZ,
      },
      {
        id: 5,
        name: 'Karlik ekogorszek - paleta',
        stars: 5,
        inStock: 2,
        imgUrl: '../../assets/img/karlik_ekogroszek_paleta2.jpg',
        price: 1065,
        category: ProductCategory.PALETA,
      },
    ],
    productsInCart: [
      { id: 4, count: 5 },
      { id: 3, count: 2 },
    ],
    inCart: 7,
    toPay: 5 * 1220 + 2 * 1420,
  };

  it('add product details to cart action', () => {
    //GIVEN
    const product: Product = {
      id: 6,
      name: 'Pieklorz ekogorszek - paleta',
      stars: 4,
      inStock: 2,
      imgUrl: '../../assets/img/pieklorz_ekogroszek_paleta.jpg',
      price: 1420,
      category: ProductCategory.PALETA,
    };

    //WHEN
    const state = cartReducer.cartReducer(
      cartInitialState,
      cartActions.addProductDetailsToCart({ product: product, count: 2 })
    );

    //THEN
    expect(state.products[5]).toStrictEqual(product);
    expect(state.productsInCart[2]).toStrictEqual({ id: 6, count: 2 });
    expect(state.inCart).toBe(cartInitialState.inCart + 2);
    expect(state.toPay).toBe(cartInitialState.toPay + 2 * product.price);
  });

  it('update details about product in cart action', () => {
    //GIVEN
    const product: Product = {
      id: 2,
      name: 'Karlik ekogorszek - bigbag',
      stars: 5,
      inStock: 1,
      imgUrl: '../../assets/img/karlik_ekogroszek_bigbag.jpg',
      price: 1420,
      category: ProductCategory.BIGBAG,
    };

    //WHEN
    const state = cartReducer.cartReducer(
      cartInitialState,
      cartActions.updateDetailsAboutProductInCart({
        productId: 2,
        count: 3,
        toPay: 1420,
      })
    );

    //THEN
    expect(state.products[1]).toStrictEqual(product);
    expect(state.productsInCart[2]).toStrictEqual({ id: 2, count: 3 });
    expect(state.inCart).toBe(cartInitialState.inCart + 3);
    expect(state.toPay).toBe(cartInitialState.toPay + 3 * 1420);
  });

  it('clear cart action', () => {
    //GIVEN
    const clearCart: CartState = {
      products: [],
      productsInCart: [],
      inCart: 0,
      toPay: 0,
    };
    //WHEN
    const state = cartReducer.cartReducer(
      cartInitialState,
      cartActions.clearCart()
    );

    //THEN
    expect(state).toStrictEqual(clearCart);
  });

  it('delete product details to cart action', () => {
    //GIVEN

    //WHEN
    const state = cartReducer.cartReducer(
      cartInitialState,
      cartActions.deleteProductFromCart({ productId: 3 })
    );

    //THEN
    expect(state.inCart).toBe(cartInitialState.inCart - 2);
    expect(state.toPay).toBe(cartInitialState.toPay - 2 * 1420);
    expect(state.productsInCart).toStrictEqual([{ id: 4, count: 5 }]);
  });
});
