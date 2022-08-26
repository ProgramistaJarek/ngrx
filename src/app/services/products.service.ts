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
      name: 'Pieklorz ekogorszek - paleta',
      stars: 4,
      inStock: 2,
      imgUrl: '../../assets/img/pieklorz_ekogroszek_paleta.jpg',
      price: 1420,
      category: ProductCategory.PALETA,
    },
    {
      id: 2,
      name: 'Karlik ekogorszek - bigbag',
      stars: 5,
      inStock: 1,
      imgUrl: '../../assets/img/karlik_ekogroszek_bigbag.jpg',
      price: 1420,
      category: ProductCategory.BIGBAG,
    },
    {
      id: 3,
      name: 'Karlik ekogorszek - paleta',
      stars: 2,
      inStock: 4,
      imgUrl: '../../assets/img/karlik_ekogroszek_paleta.jpg',
      price: 1420,
      category: ProductCategory.PALETA,
    },
    {
      id: 4,
      name: 'Retopal ekogorszek - luz',
      stars: 2,
      inStock: 10,
      imgUrl: '../../assets/img/retopal_ekogroszek_piast_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
    {
      id: 5,
      name: 'Karlik ekogorszek - paleta',
      stars: 5,
      inStock: 2,
      imgUrl: '../../assets/img/karlik_ekogroszek_paleta2.jpg',
      price: 1065,
      category: ProductCategory.PALETA,
    },
    {
      id: 6,
      name: 'Retopal ekogorszek - luz',
      stars: 4,
      inStock: 5,
      imgUrl: '../../assets/img/retopal_ekogroszek_ziemowit_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
    {
      id: 7,
      name: 'Pieklorz ekogorszek - luz',
      stars: 2,
      inStock: 10,
      imgUrl: '../../assets/img/pieklorz_ekogroszek_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
    {
      id: 8,
      name: 'Karlik ekogorszek - luz',
      stars: 3,
      inStock: 5,
      imgUrl: '../../assets/img/karlik_ekogroszek_luz.jpg',
      price: 1220,
      category: ProductCategory.LUZ,
    },
  ];

  getProducts() {
    return of(this.stockInitialState);
  }
}
