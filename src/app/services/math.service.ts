import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() {}

  public getAvarage(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return Math.floor((sum / arr.length) * 100) / 100;
  }
}
