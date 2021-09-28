
const number = require("./NumberRoute");
const arithmetic = require("./ArithmeticRoute");
const defaultRoute = require("./Default");

function initRoutes(app) {
    app.use("/", defaultRoute);
    app.use("/number", number);
    app.use("/arithmetic", arithmetic);
}

module.exports = initRoutes;