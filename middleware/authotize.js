module.exports = function(req, res, next){
	if(!req.session.user){
		res.redirect('/4admin/login');
  		res.end();
	} else {
		next();
	}
}