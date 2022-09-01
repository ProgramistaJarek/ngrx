import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { ShopModule } from '../shop/shop.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [CommonModule, LayoutRoutingModule, MatIconModule, ShopModule],
})
export class LayoutModule {}
