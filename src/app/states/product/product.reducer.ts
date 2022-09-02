import { createReducer, on } from '@ngrx/store';
import * as productActions from './product.actions';
import { Product, ProductCategory } from '../../utilities/Product';

export interface ProductState {
  products: Product[];
}

export const productInitialState: ProductState = {
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
      inStock: 10,
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
    {
      id: 6,
      name: 'Retopal ekogorszek - luz',
      stars: 4,
      inStock: 5,
      imgUrl: '../../assets/img/retopal_ekogroszek_ziemowit_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
    {
      id: 7,
      name: 'Pieklorz ekogorszek - luz',
      stars: 2,
      inStock: 10,
      imgUrl: '../../assets/img/pieklorz_ekogroszek_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
    {
      id: 8,
      name: 'Karlik ekogorszek - luz',
      stars: 3,
      inStock: 5,
      imgUrl: '../../assets/img/karlik_ekogroszek_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
  ],
};

export const productReducer = createReducer(
  productInitialState,
  on(
    productActions.retrievedProductsList,
    (state: ProductState, { products }) => ({
      ...state,
      products: [...products],
    })
  ),

  on(
    productActions.chengeProductInStock,
    (state: ProductState, { productId, count }) => {
      const products = state.products.map((value) =>
        value.id === productId
          ? { ...value, inStock: value.inStock - count }
          : value
      );

      return {
        ...state,
        products,
      };
    }
  ),

  on(
    productActions.updateProductsOnDeleteCart,
    (state: ProductState, { products }) => {
      let updatedStoredArr = products.map((keyA) => {
        const exists = state.products.find((keyB) => keyA.id == keyB.id);

        if (exists) {
          return { ...exists, inStock: exists.inStock + keyA.count };
        }
        return;
      });

      const chengeStateProducts = state.products.map(
        (product) =>
          updatedStoredArr.find((obj) => obj?.id === product.id) || product
      );

      return {
        ...state,
        products: chengeStateProducts,
      };
    }
  )
);
