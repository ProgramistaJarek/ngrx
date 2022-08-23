import { createSelector } from '@ngrx/store';
import { Product, ProductCategory } from 'src/app/utilities/Product';

interface AppState {
  product: Product[];
}

export const selectProducts = (state: AppState) => state.product;

export const selectProductByCategories = (categories: string[]) =>
  createSelector(selectProducts, (product: Product[]) => {
    return product.filter((value) => {
      return categories.includes(value.category);
    });
  });

/* export const selectProductBySnails = createSelector(
  selectProducts,
  (product: Product[]) =>
    product.filter((value) => {
      return value.category == ProductCategory.SNAILS;
    })
);

export const selectProductByBaguettes = createSelector(
  selectProducts,
  (product: Product[]) =>
    product.filter((value) => {
      return value.category == ProductCategory.BAGUETTES;
    })
);

export const selectProductByFrogs = createSelector(
  selectProducts,
  (product: Product[]) =>
    product.filter((value) => {
      return value.category == ProductCategory.FROGS;
    })
); */
