import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { ProductCardComponent } from './product-card.component';
import * as productActions from 'src/app/states/product/product.actions';
import * as cartActions from 'src/app/states/cart/cart.actions';
import { Product, ProductCategory } from 'src/app/utilities/Product';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  let store: MockStore;
  let actions$: Observable<any>;
  let product: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      providers: [provideMockActions(() => actions$), provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    product = {
      id: 1,
      name: 'Pieklorz ekogorszek - paleta',
      stars: 4,
      inStock: 2,
      imgUrl: '../../assets/img/pieklorz_ekogroszek_paleta.jpg',
      price: 1420,
      category: ProductCategory.PALETA,
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Buttons', () => {
    it('button on plus', () => {
      //GIVEN
      const { debugElement } = fixture;
      component.item = product;

      //WHEN
      fixture.detectChanges();
      const btnPlusRef = debugElement.query(
        By.css('[data-testid="plus-button"]')
      );
      btnPlusRef.triggerEventHandler('click', null);

      //THEN
      expect(component.count).toBe(2);
    });

    it('button on minus', () => {
      //GIVEN
      const { debugElement } = fixture;
      component.item = product;

      //WHEN
      fixture.detectChanges();
      const btnMinusRef = debugElement.query(
        By.css('[data-testid="minus-button"]')
      );
      btnMinusRef.triggerEventHandler('click', null);

      //THEN
      expect(component.count).toBe(0);
    });

    it('button on plus disabled', () => {
      //GIVEN
      const { debugElement } = fixture;
      component.item = product;
      component.count = product.inStock;

      //WHEN
      fixture.detectChanges();
      const btnPlusRef = debugElement.query(
        By.css('[data-testid="plus-button"]')
      );

      //THEN
      expect(btnPlusRef.nativeElement.disabled).toBeTruthy();
    });

    it('button on minus disabled', () => {
      //GIVEN
      const { debugElement } = fixture;
      component.item = product;
      component.count = 0;

      //WHEN
      fixture.detectChanges();
      const btnMinusRef = debugElement.query(
        By.css('[data-testid="minus-button"]')
      );

      //THEN
      expect(btnMinusRef.nativeElement.disabled).toBeTruthy();
    });
  });
  describe('Store', () => {
    it('add to cart', () => {
      //GIVEN
      const { debugElement } = fixture;
      component.item = product;

      //WHEN
      fixture.detectChanges();
      const btnPlusRef = debugElement.query(
        By.css('[data-testid="add-button"]')
      );
      btnPlusRef.triggerEventHandler('click', null);

      //THEN
      expect(component.onAddToCard(product.id)).toBeCalled();
    });
  });
});
