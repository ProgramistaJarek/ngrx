import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as cartSelectors from './cart.selectors';
import { ProductCategory } from 'src/app/utilities/Product';
import { CartState } from './cart.reducer';

describe('ProductSelectors', () => {
  let store: MockStore;
  const state: CartState = {
    products: [
      {
        id: 1,
        name: 'Pieklorz ekogorszek - paleta',
        stars: 4,
        inStock: 1,
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
        name: 'Retopal ekogorszek - luz',
        stars: 2,
        inStock: 5,
        imgUrl: '../../assets/img/retopal_ekogroszek_piast_luz.jpg',
        price: 1220,
        category: ProductCategory.LUZ,
      },
    ],
    productsInCart: [
      { id: 1, count: 1 },
      { id: 3, count: 5 },
    ],
    inCart: 6,
    toPay: 100,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should select in cart number from state', () => {
    //GIVEN
    //WHEN
    const result = cartSelectors.selectInCart.projector(state);

    //THEN
    expect(result).toBe(state.inCart);
  });

  it('should return number of product in cart', () => {
    //GIVEN
    const id = 3;

    //WHEN
    const result = cartSelectors.numberOfProductInCartById(id).projector(state);

    //THEN
    expect(result).toStrictEqual(state.productsInCart[1]);
  });

  it('should return 2 categories in cart', () => {
    //GIVEN
    const state: CartState = {
      products: [
        {
          id: 1,
          name: 'Pieklorz ekogorszek - paleta',
          stars: 4,
          inStock: 1,
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
      ],
      productsInCart: [],
      inCart: 0,
      toPay: 0,
    };

    //WHEN
    const result = cartSelectors.getAllCategories.projector(state);

    //THEN
    expect(result.size).toBe(2);
  });
});
