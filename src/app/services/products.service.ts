import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../utilities/Product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  stockInitialState: Product[] = [
    {
      id: 1,
      name: 'SNAILS',
      stars: 4,
      inStock: 20,
      imgUrl: '../../assets/food.jpg',
      price: 32,
      category: ProductCategory.SNAILS,
    },
    {
      id: 2,
      name: 'BAGUETTES',
      stars: 5,
      inStock: 12,
      imgUrl: '../../assets/food.jpg',
      price: 43,
      category: ProductCategory.BAGUETTES,
    },
    {
      id: 3,
      name: 'SNAILS',
      stars: 2,
      inStock: 4,
      imgUrl: '../../assets/food.jpg',
      price: 76,
      category: ProductCategory.SNAILS,
    },
    {
      id: 4,
      name: 'FROGS',
      stars: 4,
      inStock: 15,
      imgUrl: '../../assets/food.jpg',
      price: 33,
      category: ProductCategory.FROGS,
    },
    {
      id: 5,
      name: 'BAGUETTES',
      stars: 5,
      inStock: 50,
      imgUrl: '../../assets/food.jpg',
      price: 4,
      category: ProductCategory.BAGUETTES,
    },
    {
      id: 6,
      name: 'SNAILS',
      stars: 3,
      inStock: 22,
      imgUrl: '../../assets/food.jpg',
      price: 26,
      category: ProductCategory.SNAILS,
    },
  ];

  getProducts() {
    return of(this.stockInitialState);
  }
}
