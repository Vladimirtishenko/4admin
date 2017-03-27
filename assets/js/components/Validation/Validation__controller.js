import Helper from '../../helper.js';
import Notification from '../Notification/Notification.js';
import ValidationModel from './Validation__model.js';
import Error from '../Error/Error.js';

class Validation extends Helper {
	constructor(form){
		super();
		if(!form) return;
		this.flyEvent('add', ['submit'], form, this.validationRequire.bind(this));
		
	}
	validationRequire(event){
		this.form = event.target;
		event.preventDefault();
		if(!this.ValidationAction){
			require.ensure([], () => {
				let ValidationAction = require(__dirname + '/Validation__action.js').default;
				this.ValidationAction = new ValidationAction();
				this.requiredField();
			})
		} else {
			this.requiredField();
		}
		
	}

	requiredField(){
		let elements = this.form.elements,
			type = this.form.getAttribute('data-type'),
			enctype = type ? null : this.form.enctype;

		this.ValidationAction.getElements(elements, type);

		let objectToSend = this.ValidationAction.getStatus();

		if(objectToSend.status){
			let dataToSend = typeof objectToSend.fields == 'string' ? objectToSend.fields.slice(0, -1) : objectToSend.fields;
			ValidationModel.sendRequest(dataToSend, this.form.action, this.form, enctype);
		} else {
			Notification.codeToNotify(Error.errorCode('UNCORRECT_FIELD', 'ERROR'));
		}

	}

}

export default Validation;