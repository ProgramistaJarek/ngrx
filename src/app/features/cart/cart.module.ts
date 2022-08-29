import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { MiniCardComponent } from 'src/app/components/mini-card/mini-card.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CartComponent, MiniCardComponent],
  exports: [CartComponent],
  imports: [CommonModule, MatIconModule],
})
export class CartModule {}
