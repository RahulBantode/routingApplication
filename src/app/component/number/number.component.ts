import { Component } from '@angular/core';

import { NumberService } from '../../services/number.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  result: any;
  constructor(private service: NumberService) { }

  countDigitInNumber() {
    let number = parseInt((<HTMLInputElement>document.getElementById("number")).value);

    this.service.getCountDigitInNumber(number).subscribe((response) => {
      console.log("Result : ", response);
      this.result = response;
    })
  }

  additionOfDigitInNumber() {
    let number = parseInt((<HTMLInputElement>document.getElementById("number")).value);

    this.service.getAdditionOfDigitInNumber(number).subscribe((response) => {
      console.log("Result : ", response);
      this.result = response;
    })
  }

  checkNumberPallindrome() {
    let number = parseInt((<HTMLInputElement>document.getElementById("number")).value);

    this.service.getCheckNumberPallindrome(number).subscribe((response) => {
      console.log("Result : ", response);
      this.result = response;
    })
  }

  checkNumberArmstrong() {
    let number = parseInt((<HTMLInputElement>document.getElementById("number")).value);

    this.service.getCheckNumberArmstrong(number).subscribe((response) => {
      console.log("Result : ", response);
      this.result = response;
    })
  }

}
