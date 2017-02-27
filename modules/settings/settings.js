var Model = require('./model/index.js')

function Settings(){
	this.collection = Model.collection.name;
}

Settings.prototype.getParams = function(param, callback){

	Model.findOne({
		params: param
	}, function(err, data){
		callback(err, data);
	})

}

module.exports = new Settings();