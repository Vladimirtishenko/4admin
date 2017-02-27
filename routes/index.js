module.exports = function(app){

	require('../modules/main/routes/main.js')(app);
	require('../modules/page/routes/page.js')(app);
	require('../modules/text/routes/text.js')(app);
	require('../modules/login/routes/login.js')(app);
	require('../modules/carousel/routes/carousel.js')(app);
	require('../modules/page_menu/routes/page_menu.js')(app);
	require('../modules/language/routes/language.js')(app);
	require('../modules/users/routes/user.js')(app);
	require('../modules/menu/routes/menu.js')(app);

}
