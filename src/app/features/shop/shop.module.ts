import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';

import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent, FiltersComponent],
  exports: [ShopComponent],
  imports: [CommonModule, CartModule],
})
export class ShopModule {}
