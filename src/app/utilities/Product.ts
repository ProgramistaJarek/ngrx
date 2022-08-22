export interface Product {
  id: number;
  name: string;
  stars: number;
  inStock: number;
  imgUrl: string;
  price: number;
  category: ProductCategory;
}

export enum ProductCategory {
  SNAILS = 0,
  BAGUETTES = 1,
  FROGS = 2,
}
