import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as cartActions from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions) {}

  addProductDetailsToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.addProductDetailsToCart),
        tap(() => {
          alert('dodałes produkt do koszyka');
        })
      ),
    { dispatch: false }
  );

  updateDetailsAboutProductInCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.updateDetailsAboutProductInCart),
        tap(() => {
          alert('ilosc');
        })
      ),
    { dispatch: false }
  );

  deleteProductFromCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.deleteProductFromCart),
        tap(() => {
          alert('usuniecie produktu');
        })
      ),
    { dispatch: false }
  );

  clearCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.clearCart),
        tap(() => {
          alert('wyczyszczono koszyk');
        })
      ),
    { dispatch: false }
  );
}
