import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';
import { NotifyComponent } from './components/notify.component';

@NgModule({
  declarations: [NotifyComponent],
  imports: [CommonModule, PortalModule],
  exports: [NotifyComponent],
})
export class NotifyModule {}
