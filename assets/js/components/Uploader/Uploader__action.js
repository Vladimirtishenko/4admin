import Helper from '../../helper.js';
import Notification from '../Notification/Notification.js'
import Templates from '../Templates/Templates.js'
import ValidationAction from '../Validation/Validation__action.js'

class UploadAction extends Helper {
	constructor(){
		super();
	}

	generateRequest(direction, element, url, callback){
		this.url = url;
		this.callback = callback;
		this.direction = direction;
		this.element = element;
		this.itemToPast = document.querySelector('.side-item-to-paste')

		let file = this.element.files[0],
			category_id = this.element.getAttribute('data-category'),
			_id = this.element.getAttribute('data-id') ? "?_id="+this.element.getAttribute('data-id') : "",
			_src = this.element.getAttribute('data-current-src') ? "&_src="+this.element.getAttribute('data-current-src') : "",
			formData = new FormData(),
			boundary = String(Math.random()).slice(2);

		formData.append('image', file, file.name);

		this.xhrRequest('POST', this.url+'/'+category_id+_id+_src, null, formData, this.responseUpload.bind(this));
	}

	responseUpload(obj){
		try{
			let json = JSON.parse(obj);
			if(json.status == 200){
				this.pageUpdated(json.doc);
			} else {
				Notification.codeToNotify(json.message);
			}
		} catch(e){

		}
	}

	pageUpdated(doc){
		if(this.direction == 'new-upload'){
			let template = Templates.carouselTemplate(doc.src, doc.category_id, doc._id);
			this.itemToPast.insertAdjacentHTML('beforeend', template);
			let inputBindind = this.itemToPast.lastElementChild.querySelector('[id*="side-uploaded-file-"]'),
				deleteButtonBinding = this.itemToPast.lastElementChild.querySelector('.side-remove-item');
			this.flyEvent('add', ['change'], [inputBindind], this.callback);			

		} else {
			let form = this.element.closest('.side-carousel-item'),
				input = form.querySelector('[id*="side-uploaded-file-"]'),
				image = form.querySelector('.side-carousel-item__image img');

				image.src = doc.src;
				input.setAttribute('data-current-src', doc.src);
				
		}
	}

}

export default UploadAction;