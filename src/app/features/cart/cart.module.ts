import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { MiniCardComponent } from 'src/app/components/mini-card/mini-card.component';

@NgModule({
  declarations: [CartComponent, MiniCardComponent],
  imports: [CommonModule],
})
export class CartModule {}
