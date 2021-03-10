const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('foodblog', { title: 'Food Blog' });
});


module.exports = router;
