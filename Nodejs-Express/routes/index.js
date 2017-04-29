var express = require('express');
var router = express.Router();
var vd = require('../videodata.json'); // ".." move up 2 dir

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
	title: 'Express',
	newVar: 'MEMEEMEMEME',
	videodata: vd
  });
});

module.exports = router;
