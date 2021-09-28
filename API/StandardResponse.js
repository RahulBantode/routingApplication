class StandardResponse {
    constructor() {
        this.data = null;
        this.error = null;
    }

    sendSuccessResponse(response, data) {
        response.status(200).send({ "status": 200, data });
    }

    sendFailureResponse(response) {
        response.status(500).send({ "status": 500, "messege": "Failed to process" });
    }
}

module.exports = StandardResponse;