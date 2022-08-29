import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as cartActions from './cart.actions';
import { NotifyService } from 'src/app/utilities/notify/notify.service';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private notifyService: NotifyService
  ) {}

  addProductDetailsToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.addProductDetailsToCart),
        tap(() => {
          this.notifyService.showToast('Produkt został dodany do koszyka');
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
            ? this.notifyService.showToast(
                'Zwiększyłeś ilość produktu w koszyku'
              )
            : this.notifyService.showToast(
                'Zmniejszyłeś ilość produktu w koszyku'
              );
        })
      ),
    { dispatch: false }
  );

  deleteProductFromCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.deleteProductFromCart),
        tap(() => {
          this.notifyService.showToast('Usunąłes produkt z koszyka');
        })
      ),
    { dispatch: false }
  );

  clearCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.clearCart),
        tap(() => {
          this.notifyService.showToast('Koszyk został opróżniony');
        })
      ),
    { dispatch: false }
  );
}
