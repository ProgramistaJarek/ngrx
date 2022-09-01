import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as cartActions from './cart.actions';
import { NotifyService } from 'src/app/utilities/notify/notify.service';

@Injectable()
export class CartEffects {
  delay: number = 1000;

  constructor(
    private actions$: Actions,
    private notifyService: NotifyService,
    private router: Router
  ) {}

  addProductDetailsToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.addProductDetailsToCart),
        tap(() => {
          this.notifyService.showToast(
            'Produkt został dodany do koszyka',
            this.delay
          );
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
                'Zwiększyłeś ilość produktu w koszyku',
                this.delay
              )
            : this.notifyService.showToast(
                'Zmniejszyłeś ilość produktu w koszyku',
                this.delay
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
          this.notifyService.showToast(
            'Usunąłes produkt z koszyka',
            this.delay
          );
        })
      ),
    { dispatch: false }
  );

  clearCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.clearCart),
        tap(() => {
          this.notifyService.showToast(
            'Zamówienie zostało złożone',
            this.delay
          );
          this.router.navigate(['order-success']);
        })
      ),
    { dispatch: false }
  );
}
