import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';

export const addProductCount = createAction(
  '[Cart Component] Add Porduct Count',
  props<{ count: number }>()
);

export const addProductDetailsToCart = createAction(
  '[Cart Component] Add Products Details To Car',
  props<{ product: Product }>()
);

export const showDetailsAboutProductsInCart = createAction(
  '[Cart Component] Show Details About Products In Cart',
  props<{ productId: number; count: number }>()
);

export const deleteProduct = createAction(
  '[Cart Component] Delete Products ',
  props<{ product: Product }>()
);