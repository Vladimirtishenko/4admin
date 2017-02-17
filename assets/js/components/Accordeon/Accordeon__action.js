import Helper from '../../helper.js';
import Templates from '../Templates/Templates.js';
import AccordeonModel from './Accordeon__model.js';


class AccordeonAction extends Helper {
	constructor(){
		super();
		this.lang = localStorage.language && JSON.parse(localStorage.language);
		this.addBlock = 'side-card-wrapper__append-or-update'
	}

	created(el){

		this.removeScript();

		let attr = el.getAttribute('data-id-item') || null,
			elToPaste = document.querySelector('.'+this.addBlock),
			cat_id = elToPaste.getAttribute('data-id-pages');

		if(attr){
			AccordeonModel.getContents(attr, this.receivedData.bind(this));
		} else {
			let html = Templates.pageMenuTempalte(cat_id, null, this.lang);
			this.afterGenerate(html, elToPaste);
		}

	}

	receivedData(arg){

		let key = Object.keys(arg)[0],
			elToPaste = document.querySelector('.'+this.addBlock),
			cat_id = elToPaste.getAttribute('data-id-pages'),
			html = Templates.pageMenuTempalte(cat_id, key, arg[key]);

		this.afterGenerate(html, elToPaste);
	}

	afterGenerate(html, elToPaste){

		elToPaste.innerHTML = "";
		elToPaste.insertAdjacentHTML('beforeend', html);
		this.addScripts();
	}


	removeScript(){
		let s = document.querySelector('#side-appended-script__ready-to-remove');
		if(s){
			s.parentNode.removeChild(s);
		}
		
	}

	addScripts(){
		let script = document.createElement('script');
		script.id = "side-appended-script__ready-to-remove";
		script.innerHTML = 
		"CKEDITOR.config.width = '80%';" + 
		"CKEDITOR.config.filebrowserBrowseUrl = '/4admin/uploader';" +
		"CKEDITOR.config.filebrowserUploadUrl = '/4admin/uploader';" +
		"CKEDITOR.replaceAll();";

		document.body.appendChild(script);
	}
} 

export default AccordeonAction;