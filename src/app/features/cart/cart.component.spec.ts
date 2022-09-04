import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CartComponent } from './cart.component';
import { ProductsInCart } from 'src/app/utilities/Cart';
import { updateProductsOnDeleteCart } from 'src/app/states/product/product.actions';
import {
  clearCart,
  orderCompleteClearCart,
} from 'src/app/states/cart/cart.actions';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    it('on clear cart method', () => {
      //GIVEN
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      const productInCart: ProductsInCart[] = [{ id: 1, count: 1 }];

      //WHEN
      component.onClearCart(productInCart);

      //THEN
      expect(dispatchSpy).toHaveBeenCalledWith(
        updateProductsOnDeleteCart({ products: productInCart })
      );
      expect(dispatchSpy).toHaveBeenCalledWith(clearCart());
    });

    it('on order complete method', () => {
      //GIVEN
      const dispatchSpy = jest.spyOn(store, 'dispatch');

      //WHEN
      component.onOrderComplete();

      //THEN
      expect(dispatchSpy).toHaveBeenCalledWith(orderCompleteClearCart());
    });
  });
});
