import Helper from '../../helper.js'

class Accordeon extends Helper {
	constructor(block){
		super();
		if(!block) return;

		this.buttonToAddOrEdit = 'side-card-wrapper__add-block';
		this.blockToDispatch = document.querySelector('.side-card-wrapper__links-block');


		this.flyEvent('add', ['click'], block, this.addBlockHandler.bind(this));
		this.addDispatcher();
	}

	addBlockHandler(event){
		if(!event.target.classList.contains(this.buttonToAddOrEdit)) return;

		if(!this.AccordeonAction){
			require.ensure([], () => {
				let AccordeonAction = require(__dirname + '/Accordeon__action.js').default;
				this.AccordeonAction = new AccordeonAction();
				this.AccordeonAction.created(event.target);
			})
		} else{
			this.AccordeonAction.created(event.target);
		} 
	}

	addDispatcher(){
		require.ensure([], () => {
			let AccordeonDispatcher = require(__dirname + '/Accordeon__dispatcher.js').default;
			new AccordeonDispatcher(this.blockToDispatch);
		})
	}
}

export default Accordeon;