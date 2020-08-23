import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  public name = 'root';
  constructor() {}
  printMe(): void {
    console.log('hello ' + this.name);
  }
}
