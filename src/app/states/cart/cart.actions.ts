import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const addProduct = createAction(
  '[Cart Component] Add Porduct',
  props<{ productId: number }>()
);

export const deleteProduct = createAction(
  '[Cart Component] Delete Products ',
  props<{ productId: number }>()
);
