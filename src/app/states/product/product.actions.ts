import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const retrievedProductsList = createAction(
  '[Shop Component] Retrieved Products List',
  props<{ products: Product[] }>()
);

export const reduceProductInStock = createAction(
  '[Shop Component] Reduce Product In Stock',
  props<{ productId: number; count: number }>()
);
