import Helper from '../../helper.js'

class MenuAction extends Helper {
	constructor(button) {
		super();
		this.wrapper = document.querySelector('.side-wrapper');
		this.flyEvent('add', ['click'], [button], this.changeState.bind(this));
	}

	changeState(){
		if(!this.wrapper) return;
		this.wrapper.classList.toggle('side-animate-sidebar');
	}
}

export default MenuAction;