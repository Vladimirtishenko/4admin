module.exports = function(app){
	app.get("/4admin/login", require("./login_page").get);
	app.post("/4admin/loginAction", require("./login_action").post);
	app.get("/4admin/loginFromConsole", require("./login_console_created").get);
	app.get("/4admin/logout", require("./logout").get);
}