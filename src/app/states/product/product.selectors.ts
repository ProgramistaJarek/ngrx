import { createSelector } from '@ngrx/store';
import { productAppState } from '../AppState';
import { ProductState } from './product.reducer';

const selectProducts = (state: productAppState) => state.product;

export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const selectProductByCategories = (categories: string[]) =>
  createSelector(selectProducts, (product: ProductState) => {
    return product.products.filter((value) => {
      return categories.includes(value.category);
    });
  });

export const test = createSelector(
  selectProducts,
  (product: ProductState) => product.products
);
