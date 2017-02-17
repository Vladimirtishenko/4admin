module.exports = function(app){
	app.get("/4admin/language_get", require("./language_get").get);
}