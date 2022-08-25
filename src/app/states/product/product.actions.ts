import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const retrievedProductsList = createAction(
  '[Shop Component] Retrieved Products List',
  props<{ products: Product[] }>()
);

export const chengeProductInStock = createAction(
  '[Shop Component] Chenge Product In Stock',
  props<{ productId: number; count: number }>()
);
