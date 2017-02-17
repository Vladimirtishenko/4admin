var authorize = require('../../../middleware/authotize.js')
module.exports = function(app) {
	app.get("/4admin/text", authorize, require("./text_all").get);
	app.get("/4admin/text/show", authorize, require("./text_single").get);
	app.post("/4admin/text/create", authorize, require("./text_single").post);
	app.delete("/4admin/text/delete", authorize, require("./text_delete").delete);
}