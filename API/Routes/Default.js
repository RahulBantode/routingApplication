
const router = require("express").Router();

const defaultService = require("../Services/DefaultService");

router.get("/", defaultService);

module.exports = router;