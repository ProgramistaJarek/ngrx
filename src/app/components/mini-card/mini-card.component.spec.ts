import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MiniCardComponent } from './mini-card.component';
import * as cartActions from '../../states/cart/cart.actions';
import { Product, ProductCategory } from 'src/app/utilities/Product';
import { chengeProductInStock } from 'src/app/states/product/product.actions';

describe('MiniCardComponent', () => {
  let component: MiniCardComponent;
  let fixture: ComponentFixture<MiniCardComponent>;

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniCardComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniCardComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 1,
      name: 'Pieklorz ekogorszek - paleta',
      stars: 4,
      inStock: 2,
      imgUrl: '../../assets/img/pieklorz_ekogroszek_paleta.jpg',
      price: 1420,
      category: ProductCategory.PALETA,
    };
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    it('change in stock by one method', () => {
      //THEN
      const plusNumber = 1;
      const dispatchSpy = jest.spyOn(store, 'dispatch');

      //WHEN
      component.changeInStockByOne(plusNumber);

      //GIVE
      expect(dispatchSpy).toHaveBeenCalledWith(
        cartActions.updateDetailsAboutProductInCart({
          productId: 1,
          count: plusNumber,
          toPay: 1420,
        })
      );
      expect(dispatchSpy).toHaveBeenCalledWith(
        chengeProductInStock({ productId: 1, count: plusNumber })
      );
    });

    it('on delete method', () => {
      //THEN
      const negativeNumber = -1;
      const dispatchSpy = jest.spyOn(store, 'dispatch');

      //WHEN
      component.onDelete(negativeNumber);

      //GIVE
      expect(dispatchSpy).toHaveBeenCalledWith(
        cartActions.deleteProductFromCart({
          productId: 1,
        })
      );
      expect(dispatchSpy).toHaveBeenCalledWith(
        chengeProductInStock({ productId: 1, count: negativeNumber })
      );
    });
  });
});
