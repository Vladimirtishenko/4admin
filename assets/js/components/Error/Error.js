import Helper from '../../helper.js';

class Error extends Helper {
	constructor(){
		super();
		this.errorObject = JSON.parse(localStorage.getItem('language_translation'));
		this.flyEvent('add', ['click'], [window], this.removeBlock.bind(this));
	}

	removeBlock(event){

		if(!event && !event.target) return;

		let target = event.target;

		if(target.classList.contains('side-error')){
			target.classList.remove('side-error');
		}

	}

	errorCode(code, obj){
		return obj ? this.errorObject[obj][code] : this.errorObject[code];
	}

	appendErrorClass(target){
		target.classList.add('side-error');
	}
}

export default new Error;