import Helper from "../../helper.js"

class User extends Helper {
	constructor(el){
		super();
		if(!el) return;

		this.add = document.querySelector('.side-user__add-new-user');
		this.itemClass = 'side-users__edit-handler';
		this.wrapClass = 'side-users__resourse';
		this.flipClas = 'side-flip';
		this.el = el;

		this.flyEvent('add', ['click'], [this.el, this.add], [this.handlerToPrespective.bind(this), this.handlerToAdd.bind(this)])

	}

	handlerToAdd(event){
		var formBlock = document.querySelector('.side-flex__add');
		formBlock.classList.add('side-user__show-add')
	}

	handlerToPrespective(event){

		let target = event && event.target && event.target.classList.contains(this.itemClass) || null;

		if(!target) return;

		let closestElement = event.target.closest("."+this.wrapClass);

		this.tryToClassPrespective(closestElement);

	}

	tryToClassPrespective(el){

		if(el.classList.contains(this.flipClas)){
			el.classList.remove(this.flipClas);
		} else {
			let activeSelector = document.querySelector("."+this.flipClas);
			if(activeSelector){
				activeSelector.classList.remove(this.flipClas);
			}
			el.classList.add(this.flipClas);
		}
	}
}

export default User;