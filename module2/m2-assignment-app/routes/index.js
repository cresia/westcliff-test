const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  // res.send('It works!');
  // res.render('form');
  res.render('form', {title: 'Registration form'});

})

module.exports = router;
