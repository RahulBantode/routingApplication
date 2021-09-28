const router = require("express").Router();

const Arithmetic = require("../Services/ArithmeticService");

router.post("/addition", Arithmetic.addition);
router.post("/substraction", Arithmetic.substraction);
router.post("/multiplication", Arithmetic.multiplication);
router.post("/division", Arithmetic.division);

module.exports = router;