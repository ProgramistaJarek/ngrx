import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const addProductDetailsToCart = createAction(
  '[Cart Component] Add Products Details To Car',
  props<{ product: Product; count: number }>()
);

export const updateDetailsAboutProductInCart = createAction(
  '[Cart Component] Update Details About Product In Cart',
  props<{ productId: number; count: number; toPay: number }>()
);

export const clearCart = createAction('[Cart Component] Clear Cart ');

export const deleteProductFromCart = createAction(
  '[Cart Component] Delete Product From Cart ',
  props<{ productId: number }>()
);
