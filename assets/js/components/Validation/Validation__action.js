import Error from '../Error/Error.js';

class ValidationAction {
	constructor(){}

	getElements(el, type){
		this.passwordInputArray = [];
		this.formData = type ? new FormData() : null;
		this.validationObject = {status: true, fields: ''};

		for (let i = 0; i < el.length; i++) {
			if(el[i].type == 'hidden' || el[i].type == 'text' || el[i].type == 'email' || el[i].tagName == 'SELECT' || el[i].tagName == 'TEXTAREA' || el[i].type == 'file'){
				this.objectRegExp(el[i].name, el[i]);
			}
			if(el[i].type == 'password' && (el[i].name == 'password' || el[i].name == 'repeat_password')){
				this.objectRegExp(el[i].name, el[i]);
				this.passwordInputArray.push(el[i]);
			}
		}

		if(this.passwordInputArray.length > 1){
			let repeatSuccess = this.passwordInputArray[0].value == this.passwordInputArray[1].value;
			
			if(!repeatSuccess){
				this.validationObject.status = false;
				Error.appendErrorClass(this.passwordInputArray[1])
			}
			
		}

	}

	objectRegExp(name, field){
		let editor;

		try {
			editor = CKEDITOR || null;
		} catch(e){
			editor = null;
		}

		let regObj = {
			title_ru: /[А-Яа-яA-Za-z0-9]/,
			title_en: /[A-Za-z0-9]/,
			description_ru: 50,
			description_en: 50,
			password: /[A-Za-z0-9]/,
			repeat_password: /[A-Za-z0-9]/,
			new_password: /[A-Za-z0-9]/,
			old_password: /[A-Za-z0-9]/,
			username: /[A-Za-z]/,
		},
		content = (field.tagName == 'TEXTAREA' && editor) ? 
					CKEDITOR.instances[name].getData() :
					field.type == 'file' ? 
					field.files[0] : 
					field.value;


		if(this.formData){
			this.formData.append(name, content);
			this.validationObject.fields = this.formData;
		} else {
			this.validationObject.fields += name+'='+encodeURIComponent(content)+'&';
		}

		if(regObj[name]){

			if(typeof regObj[name] == 'number'){
				if(content.length < regObj[name]){
					Error.appendErrorClass(field.tagName == 'TEXTAREA' && editor ? field.nextElementSibling : field)
					this.validationObject.status = false;
				}
			} else {
				if(!regObj[name].test(content)){
					this.validationObject.status = false;
					Error.appendErrorClass(field)
				}
			}
		}
	}

	getStatus(){
		return this.validationObject;
	}

}

export default ValidationAction;