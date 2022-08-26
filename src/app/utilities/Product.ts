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
  LUZ = 'LUZ',
  PALETA = 'PALETA',
  BIGBAG = 'BIGBAG',
}
