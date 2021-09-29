import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  baseUrl: string = "/server/arithmetic/";

  constructor(private http: HttpClient) { }

  getAddition(no1: number, no2: number) {
    const body = { no1, no2 };
    return this.http.post(this.baseUrl + "addition", body);
  }

  getSubstraction(no1: number, no2: number) {
    const body = { no1, no2 };
    return this.http.post(this.baseUrl + "substraction", body);
  }

  getMultiplication(no1: number, no2: number) {
    const body = { no1, no2 };
    return this.http.post(this.baseUrl + "multiplication", body);
  }

  getDivision(no1: number, no2: number) {
    const body = { no1, no2 };
    return this.http.post(this.baseUrl + "division", body);
  }
}
