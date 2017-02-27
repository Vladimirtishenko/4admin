import Helper from './helper.js'
import Menu from './components/Menu/Menu__controller.js'
import Validation from './components/Validation/Validation__controller.js'
import Remove from './components/Remove/Remove__controller.js'
import Uploader from './components/Uploader/Uploader__controller.js'
import Accordeon from './components/Accordeon/Accordeon__controller.js'
import User from './components/User/User__controller.js'
import MenuModule from './components/MenuModule/MenuModule__controller.js'

class App extends Helper {
	constructor(){
		super();
		this.initLanguagesAndTranslations();
	}

	initLanguagesAndTranslations(){
		this.xhrRequest('GET', '/4admin/language_get', null, null, (obj) => {
			localStorage.setItem('language', JSON.stringify(JSON.parse(obj).description));
			localStorage.setItem('language_active', JSON.stringify(JSON.parse(obj).active_lang));
			localStorage.setItem('language_translation', JSON.stringify(JSON.parse(obj).active_text));
			this.initAllModules();
		})
	}

	initAllModules(){
		new Menu(document.querySelector('.side-open-menu'));
		new Validation(document.querySelectorAll('.table-side-to-validate'));
		new Remove(document.querySelectorAll('.table-side-remove'));
		new Uploader(document.querySelectorAll('.upload-button'));
		new Accordeon(document.querySelectorAll('.side-add-block-event'));
		new User(document.querySelector('.side-user'));
		new MenuModule(document.querySelector('.side-menu-form-wrapper__add-items'));
	}
}

window.addEventListener('DOMContentLoaded', function() {
	new App();
})