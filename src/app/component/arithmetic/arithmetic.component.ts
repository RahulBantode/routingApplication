import { Component } from '@angular/core';

import { ArithmeticService } from '../../services/arithmetic.service'

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent {

  result: any;

  constructor(private service: ArithmeticService) {
  }

  addition() {
    let no1 = parseInt((<HTMLInputElement>document.getElementById("no1")).value);
    let no2 = parseInt((<HTMLInputElement>document.getElementById("no2")).value);

    this.service.getAddition(no1, no2).subscribe((response) => {
      console.log("Addition is : ", response);
      this.result = response;
    })
  }

  substraction() {
    let no1 = parseInt((<HTMLInputElement>document.getElementById("no1")).value);
    let no2 = parseInt((<HTMLInputElement>document.getElementById("no2")).value);

    this.service.getSubstraction(no1, no2).subscribe((response) => {
      console.log("Substraction is : ", response);
      this.result = response;
    })
  }

  multiplication() {
    let no1 = parseInt((<HTMLInputElement>document.getElementById("no1")).value);
    let no2 = parseInt((<HTMLInputElement>document.getElementById("no2")).value);

    this.service.getMultiplication(no1, no2).subscribe((response) => {
      console.log("Multiplication is : ", response);
      this.result = response;
    })
  }

  division() {
    let no1 = parseInt((<HTMLInputElement>document.getElementById("no1")).value);
    let no2 = parseInt((<HTMLInputElement>document.getElementById("no2")).value);

    this.service.getDivision(no1, no2).subscribe((response) => {
      console.log("Addition is : ", response);
      this.result = response;
    })
  }
}
