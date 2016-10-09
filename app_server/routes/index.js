var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/other');
var ctrlReporte = require('../controllers/reportes');

/* GET home page. 
router.get('/', ctrlMain.index);
module.exports = router;*/
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/location/reporte', ctrlLocations.viewReporte);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
