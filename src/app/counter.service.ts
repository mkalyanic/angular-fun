import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  counterValue = new BehaviorSubject(0);
  incermetValue(val) {
    console.log('... inised incremet service', val);
    const incrementVal = val + 1;
    this.counterValue.next(incrementVal);
  }
}
