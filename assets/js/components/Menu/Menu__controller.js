class Menu {
	constructor(el) {
		if(el){
			require.ensure([],() => {
				let MenuButton = require(__dirname + '/Menu__action.js').default; 
				new MenuButton(el);
			})
		}
	}
}

export default Menu;