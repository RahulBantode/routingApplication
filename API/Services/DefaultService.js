const StandardResponse = require("../StandardResponse");
const standardResponse = new StandardResponse();

function DefaultMessege(request, response) {
    standardResponse.sendSuccessResponse(response, {
        "Route": "/",
        "messege": "This is a default route"
    });
}

module.exports = DefaultMessege;