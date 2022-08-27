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
          console.log('dodałes produkt do koszyka');
        })
      ),
    { dispatch: false }
  );

  updateDetailsAboutProductInCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.updateDetailsAboutProductInCart),
        tap(({ count }) => {
          count == 1
            ? console.log('zwiekszyles ilosc w koszyku')
            : console.log('zmniejszyles ilosc w koszyku');
        })
      ),
    { dispatch: false }
  );

  deleteProductFromCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.deleteProductFromCart),
        tap(() => {
          console.log('Usunales produky z koszyka');
        })
      ),
    { dispatch: false }
  );

  clearCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.clearCart),
        tap(() => {
          console.log('Koszyk został opróżniony');
        })
      ),
    { dispatch: false }
  );
}
