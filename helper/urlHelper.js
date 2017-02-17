module.exports = function(module, url){
	
	for (var i = 0; i < module.length; i++) {
		if(url.indexOf(module[i].link) != -1){
			return {url: module[i].link, title: module[i].item_module[0].title}
			break;
		}
	}

}