import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const addProductCount = createAction(
  '[Cart Component] Add Porduct Count',
  props<{ count: number }>()
);

export const addProduct = createAction(
  '[Cart Component] Add Products ',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Cart Component] Delete Products ',
  props<{ product: Product }>()
);
