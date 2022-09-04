import * as productReducer from './product.reducer';
import { Product, ProductCategory } from 'src/app/utilities/Product';
import {
  chengeProductInStock,
  updateProductsOnDeleteCart,
} from './product.actions';
import { ProductsInCart } from 'src/app/utilities/Cart';

describe('ProductReducer', () => {
  it('retrievedProductsList action', () => {
    //GIVEN
    const productInitialState = productReducer.productInitialState;

    //WHEN
    const action = {
      type: 'retrievedProductsList',
    };
    const state = productReducer.productReducer(productInitialState, action);

    //THEN
    expect(productInitialState).toBe(state);
  });

  it('chengeProductInStock action', () => {
    //GIVEN
    const productInitialState = productReducer.productInitialState;
    const product: Product = {
      id: 2,
      name: 'Karlik ekogorszek - bigbag',
      stars: 5,
      inStock: 0,
      imgUrl: '../../assets/img/karlik_ekogroszek_bigbag.jpg',
      price: 1420,
      category: ProductCategory.BIGBAG,
    };

    //WHEN
    const state = productReducer.productReducer(
      productInitialState,
      chengeProductInStock({ productId: 2, count: 1 })
    );

    //THEN
    expect(product).toStrictEqual(state.products[1]);
  });

  it('updateProductsOnDeleteCart action', () => {
    //GIVEN
    const productInitialState = productReducer.productInitialState;
    const product: Product = {
      id: 4,
      name: 'Retopal ekogorszek - luz',
      stars: 2,
      inStock: 14,
      imgUrl: '../../assets/img/retopal_ekogroszek_piast_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    };
    const productInCart: ProductsInCart[] = [
      {
        id: 4,
        count: 4,
      },
    ];

    //WHEN
    const state = productReducer.productReducer(
      productInitialState,
      updateProductsOnDeleteCart({ products: productInCart })
    );

    //THEN
    expect(product).toStrictEqual(state.products[3]);
  });
});
