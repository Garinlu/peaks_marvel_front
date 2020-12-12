import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  static LIKED_CHARACTERS = 'LIKED_CHARACTERS';

  constructor() {
  }

  get(key): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  }

  set(key, value): any {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
