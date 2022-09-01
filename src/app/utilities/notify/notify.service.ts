import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  message: string = '';
  toastVisible: boolean = false;

  constructor() {}
  timeoutRef: ReturnType<typeof setTimeout> | undefined;
  showToast(text: string, interval: number) {
    this.message = text;
    this.toastVisible = true;

    clearTimeout(this.timeoutRef);
    this.timeoutRef = setInterval(() => {
      this.message = '';
      this.toastVisible = false;
    }, interval);
  }
}
