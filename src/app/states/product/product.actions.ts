import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const retrievedProductsList = createAction(
  '[Shop Component] Retrieved Products List',
  props<{ products: Product[] }>()
);

export const incrementProductInStock = createAction(
  '[Shop Component] Increment Product In Stock',
  props<{ productId: number }>()
);

export const decrementProductInStock = createAction(
  '[Shop Component] Decrement Product In Stock',
  props<{ productId: number }>()
);
