import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utilities/Product';
import { ProductsInCart } from 'src/app/utilities/Cart';

export const retrievedProductsList = createAction(
  '[Shop Component] Retrieved Products List',
  props<{ products: Product[] }>()
);

export const chengeProductInStock = createAction(
  '[Shop Component] Chenge Product In Stock',
  props<{ productId: number; count: number }>()
);

export const updateProductsOnDeleteCart = createAction(
  '[Shop Component] Update Products On Delete Cart',
  props<{ products: ProductsInCart[] }>()
);
