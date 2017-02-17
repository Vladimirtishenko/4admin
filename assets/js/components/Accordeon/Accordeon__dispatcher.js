import Helper from '../../helper.js'

class AccordeonDispatcher extends Helper {
	constructor(el){
		super();
		if(!el) return;
		this.flyEvent('add', ['click'], [el], this.handlerAccardeon.bind(this));
		this.classToAppend = 'side-show-block';
		this.classToButtonActive = 'side-card-wrapper__link-active';
	}

	handlerAccardeon(event){
		event.preventDefault();
		if(event.target.classList.contains(this.classToButtonActive) || !event.target) return;


		let href = event.target.getAttribute('data-block'),
			el = document.querySelector('#showing-block-'+href),
			activeButton = document.querySelector('.'+this.classToButtonActive),
			activeTub = document.querySelector('.'+this.classToAppend);

			activeTub.classList.remove(this.classToAppend);
			activeButton.classList.remove(this.classToButtonActive);
			el.classList.add(this.classToAppend);
			event.target.classList.add(this.classToButtonActive);

	}


}

export default AccordeonDispatcher;