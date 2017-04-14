var model = require('./model/index.js');

function Lead(){}

Lead.prototype.saveLead = function(params, callback){

	model.findOneAndUpdate({username: params.user_email}, {
		username: params.user_email,
		partner: params && params.partner && params.partner.code || '',
		options: params.option
	},{
		upsert: true,
		new: true
	}, function(err, data){
		callback(err, data);
	})
}

Lead.prototype.getUniq = function(_id, callback){

	model.findOne({_id: _id}, function(err, data){
		callback(err, data);
	})

}

module.exports = new Lead();