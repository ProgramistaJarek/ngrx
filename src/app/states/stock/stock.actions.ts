import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const showPorducts = createAction(
  '[Shop Component] Show Porduct',
  props<{ category: number }>()
);

export const retrievedProductsList = createAction(
  '[Shop Component] Retrieved Products List',
  props<{ products: Product[] }>()
);
