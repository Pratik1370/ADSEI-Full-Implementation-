var express = require('express');
var ejs = require('ejs');
const csv=require('csvtojson');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var charts_controller = require('../controllers/charts_controller');
router.get('/', charts_controller.index);

module.exports = router;
