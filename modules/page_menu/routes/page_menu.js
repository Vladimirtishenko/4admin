var authorize = require('../../../middleware/authotize.js')
module.exports = function (app) {
	app.get("/4admin/page_designer", authorize, require("./page_menu_all").get);
	app.get("/4admin/page_designer/add", authorize, require("./page_menu_show_create").get);
	app.get("/4admin/page_designer/get_one_item", authorize, require("./page_menu_content_one_item").get);
	app.get("/4admin/page_designer/edit/:id", authorize, require("./page_menu_content_edit").get);
	app.post("/4admin/page_designer/edit", authorize, require("./page_menu_content_edit").post);
	app.post("/4admin/page_designer/add", authorize, require("./page_menu_show_create").post);
	app.delete("/4admin/page_designer/delete", authorize, require("./page_menu_delete").delete);
	app.delete("/4admin/page_designer/delete_item", authorize, require("./page_menu_delete_item").delete);
}