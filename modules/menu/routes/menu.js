var authorize = require('../../../middleware/authotize.js')
module.exports = function(app){
	app.get("/4admin/menu", authorize, require("./menu_all").get)
	app.post("/4admin/menu/add", authorize, require("./menu_add.js").post)
	app.delete("/4admin/menu/delete", authorize, require("./menu_delete.js").delete)
	
	app.get("/4admin/menu/edit/:id", authorize, require("./menu_edit.js").get)
	app.get("/4admin/menu/get/:id", authorize, require("./menu_get.js").get)
	app.post("/4admin/menu/set/", authorize, require("./menu_set.js").post)
}