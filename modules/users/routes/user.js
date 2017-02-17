var authorize = require('../../../middleware/authotize.js');

module.exports = function (app) {
	app.get('/4admin/user', authorize, require('./user_get').get);
	app.post('/4admin/user/add', authorize, require('./user_get_add').post);
	app.post('/4admin/user/update', authorize, require('./user_get_update').post);
	app.delete('/4admin/user/remove', authorize, require('./user_remove').delete);
}