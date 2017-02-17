var authorize = require('../../../middleware/authotize.js')
module.exports = function(app){

	app.get("/4admin/page", authorize, require("./page_all").get);
	app.get("/4admin/page/show", authorize, require("./page_single").get);

	app.post("/4admin/page/change", authorize, require("./page_single").post);

	app.delete("/4admin/page/delete", authorize, require("./page_delete").delete);

	app.post("/4admin/uploader",authorize, require("./page_uploader").post);
}