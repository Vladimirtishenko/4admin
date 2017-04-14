import Helper from '../../helper.js';
import ModalWindow from '../ModalWindow/ModalWindow__action.js';
import Templates from '../Templates/Templates.js';
import MenuModel from './MenuModule__model.js';

class MenuModule extends Helper {
	constructor(el){
		super();
		if(!el) return;

		this.el = el;
		this.module = new MenuModel();
		this.menuId = this.el.getAttribute('data-menu-id');
		this.addItemForm = '.side-modal-wrapper__form';
		this.itemBindObjects = null;

		this.module.requestData(this.createMenuTree.bind(this), this.menuId)

	}

	itemBindObject(event){
		
		event.preventDefault();

		if(!event || !event.target || event.target.tagName != 'FORM') return;


		let form = event.target,
			elements = form.elements,
			uniq = this.unique(),
			targetAttr = JSON.parse(form.getAttribute('data-target')),
			temporary = {},
			pushLabel = targetAttr['data-id'],
			pushTemplate = targetAttr['data-template'],
			element = document.getElementById(pushLabel);

		for (let i = 0; i < elements.length; i++) {
			if(elements[i].type == 'text'){
				this.module.langArray[elements[i].name][uniq] = elements[i].value
			}

			if(elements[i].tagName == 'SELECT' || (elements[i].type == 'url' && elements[i].value != '')){
				temporary['link'] = elements[i].value;
				temporary['label'] = uniq;
			}
		}

		if(!temporary['label']){
			temporary['items'] = []
			temporary['label'] = uniq;
		}

		this.pushToArray(temporary, pushLabel, this.module.menuObject);

		let temp = Templates[pushTemplate](this.module.langArray[this.module.lang][uniq], uniq);

		element.parentNode.insertAdjacentHTML('beforeend', temp);

		form.reset();

	}
	pushToArray(temporary, pushLabel, obj){
		if(obj._id && obj._id == pushLabel){
			obj.items.push(temporary);
			return;
		}

		
		(function generator(obj) {
			for (let key = 0; key < obj.length; key++) {
				
				if(obj[key].label == pushLabel){
					obj[key].items.push(temporary);
				} else if(obj[key].label != pushLabel && obj[key].items){
					generator(obj[key].items);
				}
			}
		})(obj.items)


		console.log(this.module);


	}

	createMenuTree(){

		let tmp = Templates.itemMenuGeneral(this.module.menuObject.label, this.module.menuObject._id),
			self = this;

		(function generator(obj) {

			if(obj.length == 0) return;

			for(let i = 0; i < obj.length; i++){


				if(obj[i].items){
					tmp += Templates.itemSubMenu(self.module.langArray[self.module.lang][obj[i].label], obj[i].label);
					generator(obj[i].items);
					tmp += "</div>";
					continue;
				}

				tmp += Templates.itemMenu(self.module.langArray[self.module.lang][obj[i].label], obj[i].label);

			}
		})(this.module.menuObject.items);

		this.el.insertAdjacentHTML('afterbegin', tmp);

		ModalWindow.addListener(
			this.el, 
			{
				callback: this.itemBindObject.bind(this), 
				item: this.addItemForm, 
				type: 'submit'
			}
		);

		this.flyEvent(
			'add', 
			['click'], 
			[
				document.querySelectorAll('.side-save-tree'), 
				document.querySelector('.side-menu-form-wrapper__event-remove')
			], 
			[
				this.module.setMenuData.bind(this.module),
				this.module.removeMenuData.bind(this.module)
			]);

	}

}

export default MenuModule;