	import Helper from '../../helper.js';

class ModalWindow extends Helper {
	constructor(){
		super();
		this.wrapper = document.querySelector('.side-modal-wrapper');
		this.close = document.querySelectorAll('.close-item-menu');
		this.flyEvent('add', ['click'], this.close, this.closeModal.bind(this))
	}

	addListener(elem, obj, callback){
		if(!elem) return;
		let el = elem.lenght ? elem : [elem];
		this.flyEvent('add', ['click'], el, this.openModal.bind(this, callback))

		if(obj && obj.callback && obj.item && obj.type){
			let el = document.querySelectorAll(obj.item);

			this.flyEvent('add', [obj.type], el, obj.callback);
		}

	}

	openModal(callback, event){

		let target = (event && event.target) || event;

		if(target.getAttribute('data-content') == null || !target) return;

		this.wrapper.classList.add('side-active-modal');

		let attrModal = target.getAttribute('data-content'),
			content = this.wrapper.querySelector('.'+attrModal);

		this.targetAttributeCreated(target, content);

		content.classList.add('side-active-modal__content');

	}

	targetAttributeCreated(target, content){
		let attr = {},
			at = target.attributes,
			form = content.querySelector('.event-needed');

		for(let key in at){
			if(at[key].nodeName){
				attr[at[key].nodeName] = target.getAttribute(at[key].nodeName);
			}
		}

		form.setAttribute('data-target', JSON.stringify(attr));
	}

	closeModal(event){

		if(!event.target) return;

		this.wrapper.classList.remove('side-active-modal');

		let content = event.target.closest('.side-active-modal__content');

		if(content){
			content.classList.remove('side-active-modal__content');
		}


	}

}


export default new ModalWindow();