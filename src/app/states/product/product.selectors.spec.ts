import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as productSelectors from 'src/app/states/product/product.selectors';
import { Product, ProductCategory } from 'src/app/utilities/Product';
import { ProductState } from './product.reducer';

describe('ProductSelectors', () => {
  let store: MockStore;
  const state: ProductState = {
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
        name: 'Retopal ekogorszek - luz',
        stars: 2,
        inStock: 10,
        imgUrl: '../../assets/img/retopal_ekogroszek_piast_luz.jpg',
        price: 1220,
        category: ProductCategory.LUZ,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should select all products', () => {
    //GIVEN
    //WHEN
    const result = productSelectors.selectAllProducts.projector(state);

    //THEN
    expect(result).toBe(state.products);
  });

  it('should select only LUZ category', () => {
    //GIVEN
    const categories: string[] = [ProductCategory.LUZ];

    //WHEN
    const result = productSelectors
      .selectProductByCategories(categories)
      .projector(state);

    //THEN
    expect(result[0].category).toBe(ProductCategory.LUZ);
  });

  it('should select every product with each marked category', () => {
    //GIVEN
    const categories: string[] = [
      ProductCategory.LUZ,
      ProductCategory.BIGBAG,
      ProductCategory.PALETA,
    ];

    //WHEN
    const result = productSelectors
      .selectProductByCategories(categories)
      .projector(state);

    //THEN
    expect(result.length).toBe(3);
  });
});
