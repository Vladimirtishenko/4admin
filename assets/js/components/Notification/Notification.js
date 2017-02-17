import Helper from '../../helper.js'

class Notification extends Helper{
	constructor() {
		super();
		this.element = document.createElement('div');
		this.element.classList.add('side-notify');
	}

	codeToNotify(code, timer){
		this.element.innerHTML = '<p>'+code+'<i class="side-notify__close fa fa-remove"></i></p>';
		document.body.appendChild(this.element);
		this.closeAction();
		setTimeout(()=>{
			this.removeNotify();
		}, timer || 15000)
	}

	closeAction(){
		this.close = this.element.querySelector('.side-notify__close');
		this.flyEvent('add', ['click'], [this.close], this.removeNotify.bind(this));
	}

	removeNotify(){
		try{
			this.element.parentNode.removeChild(this.element);
		} catch(e){}
	}

}

export default new Notification();