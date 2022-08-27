import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent, CartComponent],
  imports: [CommonModule],
})
export class ShopModule {}
