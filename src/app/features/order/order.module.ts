import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule, RouterModule],
})
export class OrderModule {}
