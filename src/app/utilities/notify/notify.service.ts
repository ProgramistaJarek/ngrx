import { ApplicationRef, Injectable, Injector } from '@angular/core';
import { Portal, ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';

import { NotifyComponent } from './components/notify.component';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  portal!: Portal<any>;
  host!: DomPortalOutlet;

  message: string = '';
  toastVisible: boolean = false;
  interval: number = 5000;

  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  showToast(text: string) {
    this.message = text;
    this.toastVisible = true;
    this.interval = 5000;

    setTimeout(() => {
      this.message = '';
      this.toastVisible = false;
    }, 5000);
  }
}
