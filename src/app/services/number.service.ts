import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  baseUrl: string = "/server/number/";

  constructor(private http: HttpClient) { }

  getCountDigitInNumber(number: number) {
    const body = { number };
    return this.http.post(this.baseUrl + "countDigit", body);
  }

  getAdditionOfDigitInNumber(number: number) {
    const body = { number };
    return this.http.post(this.baseUrl + "additionDigit", body);
  }

  getCheckNumberPallindrome(number: number) {
    const body = { number };
    return this.http.post(this.baseUrl + "checkPallindrome", body);
  }

  getCheckNumberArmstrong(number: number) {
    const body = { number };
    return this.http.post(this.baseUrl + "checkArmstrong", body);
  }
}
