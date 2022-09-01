import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';

import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';

import { CartModule } from '../cart/cart.module';
import { MatIconModule } from '@angular/material/icon';
import { NotifyModule } from 'src/app/utilities/notify/notify.module';

@NgModule({
  declarations: [
    ShopComponent,
    ProductCardComponent,
    FiltersComponent,
    RatingComponent,
  ],
  exports: [ShopComponent],
  imports: [CommonModule, CartModule, MatIconModule, NotifyModule],
})
export class ShopModule {}
