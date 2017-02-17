import Helper from '../../helper.js'

class Remove extends Helper {
	constructor(table) {
		super();
		this.removeClass = 'side-remove-item';
		this.table = table;
		this.tryRemoveButton();
	}

	tryRemoveButton(){
		console.log(this.table);
		for (var i = 0; i < this.table.length; i++) {
			this.flyEvent('add', ['click'], [this.table[i]], this.removeHandler.bind(this))
		}
	}

	removeHandler(event){
		if(!event.target.getAttribute('data-href')) return;

		if(this.ActionRemoveConstructor){
			this.ActionRemoveConstructor.removeItem(event);
		} else {
			require.ensure([], () => {
				let ActionRemove = require(__dirname + '/Remove__action.js').default;
				this.ActionRemoveConstructor = new ActionRemove();
				this.ActionRemoveConstructor.removeItem(event);
			})
		}
		
	}
}

export default Remove;