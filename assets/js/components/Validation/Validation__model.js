import Helper from '../../helper.js'
import Notification from '../Notification/Notification.js';
import Error from '../Error/Error.js'

class ValidationModel extends Helper {
	constructor(){
		super();
	}

	sendRequest(string, action, form, type){
		this.form = form;

		this.xhrRequest('POST', action, type, string, this.responseHandler.bind(this))
	}

	responseHandler(obj){
		try{
		    let json = JSON.parse(obj);
			

		    console.log(json);

		    if(json.status == 200 && json.model){
		   		this.modelAppend(json);
		    }
		    else if(json.status == 200){
				let m = json.module;
				Notification.codeToNotify(m + ' created successfully. <a href="/4admin/'+m.toLowerCase()+'">View all '+m.toLowerCase()+'</a>')
				this.resetForms();
			} 
			else if(json.status == 201){
				Notification.codeToNotify(json.message);
				this.resetForms();
			}
			else if (json.status == 302) {
				location.href = json.redirect;
			} 
			else if (json.status){
				Notification.codeToNotify(json.message);
			} 
			else {
				Notification.codeToNotify(Error.errorCode('UNAMED_ERROR', 'ERROR'));
			}
		} catch(e){
			Notification.codeToNotify(Error.errorCode('TRY_LETTER', 'ERROR') + e);
		}
	}

	resetForms(){
		try{
			for (let instance in CKEDITOR.instances){
			  CKEDITOR.instances[instance].setData(" ");
			}
		} catch(e){}
		
		this.form.reset();
	}

	modelAppend(json){
		require.ensure([], () => {
			let Model = require('../'+json.path+'/'+json.model).default;
				Model.stateContents(json);
		})
	}

}

export default new ValidationModel();