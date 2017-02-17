import Helper from '../../helper.js';
import Notification from '../Notification/Notification.js';
import Error from '../Error/Error.js';

class RemoveModel extends Helper{
	constructor(){
		super();
	}

	sendActionToRemove(action, el){
		this.el = el;
		this.xhrRequest('DELETE', action, null, null, this.afterRemoveResponse.bind(this));
	}

	afterRemoveResponse(obj){
		try{  
			let json = JSON.parse(obj);

			if(json.status == 1 && json.model){
				this.modelAppend(json);
			} else if(json.status == 1) {
				let closest = this.el.closest('.table-side__item-remove') 
				closest.parentNode.removeChild(closest);
			} else {
				Notification.codeToNotify(Error.errorCode('TRY_LETTER_NOT_DELETED', 'ERROR') + json.message);
			}
		} catch(e){}
	}

	modelAppend(json){
		require.ensure([], () => {
			let Model = require('../'+json.path+'/'+json.model).default;
				Model.removeContents(json);
		})
	}
}

export default new RemoveModel();