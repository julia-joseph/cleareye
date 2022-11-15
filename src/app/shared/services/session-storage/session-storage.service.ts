import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  getSessionItem(name: string): any {
    return window.sessionStorage.getItem(name);
  }

  setSessionItem(name: string, value: any) {
    window.sessionStorage.setItem(name, JSON.stringify(value));
  }

  updateSessionItem(name: string, value: any) {
    const itemString: string = this.getSessionItem(name);
    const items = JSON.parse(itemString);

    if (!items) {
      this.setSessionItem(name, [value]);
    } else {
      this.setSessionItem(name, [...items, value]);
    }
  }
}
