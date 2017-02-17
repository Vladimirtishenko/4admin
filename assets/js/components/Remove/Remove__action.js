import RemoveModel from './Remove__model.js';
import Error from '../Error/Error.js';

class RemoveAction {
	constructor() {}	

	removeItem(event){
		this.element = event.target;
		this.action = this.element.getAttribute('data-href');

		this.sendActionToRemove();
	}

	sendActionToRemove(){
		if(!confirm(Error.errorCode('DO_YOU_SURE'))) return;
		RemoveModel.sendActionToRemove(this.action, this.element);
	}
}

export default RemoveAction; 