 var authorize = require('../../../middleware/authotize.js');
module.exports = function(app) {
	app.get('/4admin/carousel', authorize, require('./carousel_all').get)
	app.post('/4admin/carousel/add', authorize, require('./carousel_add').post)
	app.get('/4admin/carousel/show/:id', authorize, require('./carousel_show').get)
	app.delete('/4admin/carousel/delete', authorize, require('./carousel_delete').delete)
	app.delete('/4admin/carousel/item_delete', authorize, require('./carousel_item_delete').delete)
	app.get('/4admin/carousel/item_edit/:id/:number', authorize, require('./carousel_edit').get)
	app.post('/4admin/carousel/item_edit/:id/:number', authorize, require('./carousel_edit').post)
}