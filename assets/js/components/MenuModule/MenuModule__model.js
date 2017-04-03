import Helper from '../../helper.js'
import Notification from '../Notification/Notification.js'
import Translation from '../Translation/translation__single.js'
import Error from '../Error/Error.js'

class MenuModel extends Helper {
	constructor(){
		super();
		this.lang = JSON.parse(localStorage.language_active);
	}

	requestData(callback, id){
		this.xhrRequest('GET', '/4admin/menu/get/'+id, null, null, this.responseData.bind(this, callback))
	}

	responseData(callback, obj){
		let json;
		try{
			json = JSON.parse(obj);
			if(json.status != 200){
				throw json.errorMsg;
			}
		} catch (e){
			Notification.codeToNotify(e || json.errorMsg || Translation.tr.ERROR.UNAMED_ERROR);
			return;
		}

		this.menuObject = json.data.menu;
		this.langArray = json.data.translate;
		callback();

	}

	setMenuData(){
		this.xhrRequest('POST', '/4admin/menu/set/', 'application/json', JSON.stringify({menu: this.menuObject, translate: this.langArray}), this.responseBeforeRecalculate.bind(this))
	}

	removeMenuData(event){
		if(!event || !event.target || !event.target.classList.contains('side-remove-on-tree')) return;
		let self = this,
			removed = false,
			label = event.target.getAttribute('data-label'),
			elementToRemove = document.querySelector('#'+label) ? document.querySelector('#'+label).parentNode : null;

		if(!elementToRemove) return;

		(function generator(obj){

			for(let i = 0; i < obj.length; i++){

				if(obj[i].label == label && obj[i].items){
					removed = true;
					self.RemoveTranslationItems.call(self, obj[i].label);
					generator(obj[i].items);
					obj.splice(i, 1);
					break;

				} else if(obj[i].label == label){
					self.RemoveTranslationItems.call(self, obj[i].label);
					obj.splice(i, 1);
					break;

				} else if(removed && obj[i].items) {
					self.RemoveTranslationItems.call(self, obj[i].label)
					generator(obj[i].items);
					break;

				} else if(removed){
					self.RemoveTranslationItems.call(self, obj[i].label);
				} else if(obj[i].items){
					generator(obj[i].items);
					break;
				}

			}

		})(this.menuObject.items);


		elementToRemove.parentNode.removeChild(elementToRemove);

	}

	RemoveTranslationItems(label){
		for(let key in this.langArray){
			delete this.langArray[key][label];
		}
	}

	responseBeforeRecalculate(obj){
		let json;

		try{
			json = JSON.parse(obj);
			if(json.status != 200){
				throw json.errorMsg;
			} else {
				Notification.codeToNotify(Translation.tr.SUCCESS.MENU_RECALCULATE_UPDATE);
			}
		} catch (e){
			Notification.codeToNotify(e || json.errorMsg || Translation.tr.ERROR.UNAMED_ERROR);
			return;
		}

	}

}

export default MenuModel;