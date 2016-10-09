/* GET 'home' page */
module.exports.homelist = function(req, res){
res.render('index', { title: 'Home' });
};
/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
res.render('index', { title: 'Location info' });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res){
res.render('index', { title: 'Add review' });
};

/* GET 'Add reporte' page */
module.exports.viewReporte = function(req, res){
res.render('index', { title: 'Reporte' });
};
