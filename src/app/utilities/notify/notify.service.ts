import { Injectable, Injector } from '@angular/core';
import { Portal, ComponentPortal } from '@angular/cdk/portal';

import { NotifyComponent } from './components/notify.component';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor() {}

  showNotify() {}
}
