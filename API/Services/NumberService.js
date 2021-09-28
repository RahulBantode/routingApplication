const StandardResponse = require("../StandardResponse");
const standardResponse = new StandardResponse();

const Number = {
    countDigitInNumber(request, response) {
        let { number } = request.body;
        if (!number) {
            standardResponse.sendFailureResponse(response);
        }

        let counter = 0;
        while (number != 0) {
            rem = number % 10;
            counter++;
            number = Math.floor(number / 10);
        }

        standardResponse.sendSuccessResponse(response, {
            "Route": "/countDigit",
            "Digits in numbers are : ": counter
        });
    },

    additionOfDigitInNumber(request, response) {
        let { number } = request.body;
        if (!number) {
            standardResponse.sendFailureResponse(response);
        }

        let addition = 0;
        while (number != 0) {
            rem = number % 10;
            addition = addition + rem;
            number = Math.floor(number / 10);
        }

        standardResponse.sendSuccessResponse(response, {
            "Route": "/additionDigit",
            "Addition of digit of number is : ": addition
        });
    },

    checkNumberPalindrom(request, response) {
        let { number } = request.body;
        if (!number) {
            standardResponse.sendFailureResponse(response);
        }

        let copyNumber = number;
        let newNumber = 0;
        while (copyNumber != 0) {
            rem = copyNumber % 10;
            newNumber = (newNumber * 10) + rem;
            copyNumber = Math.floor(copyNumber / 10);
        }

        if (number == newNumber) {
            standardResponse.sendSuccessResponse(response, {
                "Route": "/checkPallindrome",
                "number is pallindrome": number
            });
        } else {
            standardResponse.sendSuccessResponse(response, {
                "Route": "/checkPallindrome",
                "number is not pallindrome": number
            })
        }
    },

    checkNumberArmstrong(request, response) {
        let { number } = request.body;
        if (!number) {
            standardResponse.sendFailureResponse(response);
        }

        let copyNumber = number;
        let Armstrong = 0;
        while (copyNumber != 0) {
            remainder = copyNumber % 10;
            Armstrong = Armstrong + (remainder * remainder * remainder);
            copyNumber = Math.floor(copyNumber / 10);
        }

        if (number == Armstrong) {
            standardResponse.sendSuccessResponse(response, {
                "Route": "/checkArmstrong",
                "number is Armstrong": number
            });
        }
        else {
            standardResponse.sendSuccessResponse(response, {
                "Route": "/checkArmstrong",
                "number is not Armstrong": number
            });
        }

    }
}

module.exports = Number;