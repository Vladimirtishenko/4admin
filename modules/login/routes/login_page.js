module.exports.get = function(req, res, next) {
	
        res.render('view/login_page', {
            title: 'Login',
        });

}
