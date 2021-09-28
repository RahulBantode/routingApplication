const router = require("express").Router();
const Number = require("../Services/NumberService");

router.post('/countDigit', Number.countDigitInNumber);
router.post('/additionDigit', Number.additionOfDigitInNumber);
router.post('/checkPallindrome', Number.checkNumberPalindrom);
router.post('/checkArmstrong', Number.checkNumberArmstrong);


module.exports = router;
