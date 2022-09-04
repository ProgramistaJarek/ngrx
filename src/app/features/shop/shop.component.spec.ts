import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { Product, ProductCategory } from 'src/app/utilities/Product';
import { ShopComponent } from './shop.component';
import * as productSelectors from 'src/app/states/product/product.selectors';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  let store: MockStore;
  let products: Product[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    products = [
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
        id: 4,
        name: 'Retopal ekogorszek - luz',
        stars: 2,
        inStock: 10,
        imgUrl: '../../assets/img/retopal_ekogroszek_piast_luz.jpg',
        price: 1220,
        category: ProductCategory.LUZ,
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filters', () => {
    it('should filter only luz', () => {
      //GIVEN
      component.products$ = of(products);
      component.filters = [ProductCategory.LUZ];
      const selectSpy = jest.spyOn(store, 'select');

      //WHEN
      fixture.detectChanges();
      component.showProduct(ProductCategory.LUZ);
      console.log('tutaj', component.products$.subscribe(console.log));

      //THEN
      expect(2).toBe(2);
    });
  });
});
