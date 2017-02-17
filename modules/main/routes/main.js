var authorize = require('../../../middleware/authotize.js')

module.exports = function(app) {

	app.get("/4admin", authorize, require("./main_all").get);

}
