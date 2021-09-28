const StandardResponse = require("../StandardResponse");
const standardResponse = new StandardResponse();

const Arithmetic = {

    addition(request, response) {
        // no1 = request.body.firstNumber;
        // no2 = request.body.secondNumber;
        const { no1, no2 } = request.body;
        const result = no1 + no2;

        if (!(no1 && no2)) {
            standardResponse.sendFailureResponse(response);
        }

        standardResponse.sendSuccessResponse(response, { "Addition": result });

    },

    substraction(request, response) {
        const { no1, no2 } = request.body;
        const result = no1 - no2;

        if (!(no1 && no2)) {
            standardResponse.sendFailureResponse(response);
        }

        standardResponse.sendSuccessResponse(response, { "Substraction": result });
    },

    multiplication(request, response) {
        const { no1, no2 } = request.body;
        const result = no1 * no2;

        if (!(no1 && no2)) {
            standardResponse.sendFailureResponse(response);
        }

        standardResponse.sendSuccessResponse(response, { "Multiplication": result });
    },

    division(request, response) {
        const { no1, no2 } = request.body;
        const result = no1 / no2;

        if (!(no1 && no2)) {
            standardResponse.sendFailureResponse(response);
        }

        standardResponse.sendSuccessResponse(response, { "Division": result });
    }
}

module.exports = Arithmetic;