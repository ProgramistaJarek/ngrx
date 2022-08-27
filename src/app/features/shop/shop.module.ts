import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent],
  exports: [ShopComponent],
  imports: [CommonModule],
})
export class ShopModule {}
