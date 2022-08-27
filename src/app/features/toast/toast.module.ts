import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';

import { ToastComponent } from './toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, PortalModule],
})
export class ToastModule {}
