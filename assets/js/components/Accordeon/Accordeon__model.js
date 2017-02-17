import Helper from '../../helper.js';
import Templates from '../Templates/Templates.js';
import Notification from '../Notification/Notification.js';
import Error from '../Error/Error.js'

class AccordeonModel extends Helper {
	constructor(){
		super()
	}

	getContents(attr, callback){
		this.xhrRequest('GET', '/4admin/page_designer/get_one_item?_id='+attr, null, null, this.generateVariables.bind(this, callback))
	}

	generateVariables(callback, obj){
		try {
			let objToParse = JSON.parse(obj);

			if(objToParse.status == 200 && objToParse.data){
				callback(objToParse.data);
			} else {
				Notification.codeToNotify(json.message);
			}

		} catch(e){
			Notification.codeToNotify(Error.errorCode('TRY_LETTER', 'ERROR') + e );
		}
	}

	removeContents(json){

		console.log(json);

		let updatedBlock = document.querySelector('#showing-block-'+json.data._id),
			updatedLink = document.querySelector('#side-links-'+json.data._id),
			parentLink = updatedLink.parentNode,
			parentBlock = updatedBlock.parentNode;

		if(updatedBlock && updatedLink){
			parentLink.removeChild(updatedLink);
			parentBlock.removeChild(updatedBlock);
		}

		this.ifOnce(parentBlock, parentLink);
	}

	stateContents(json){

		let updatedBlock = document.querySelector('#showing-block-'+json.data.item_id),
			updatedLink = document.querySelector('#side-links-'+json.data.item_id);

		if(!updatedBlock){
			this.addContents(json);
		} else {
			this.updateContent(updatedBlock, updatedLink, json);
		}

	}

	addContents(json){
		let data = json.data,
			form = document.querySelector('.side-carousel-item'),
			linksBlock =  document.querySelector('.side-card-wrapper__links-block'),
			contentBlock = document.querySelector('.side-card-wrapper__content-wrapper-block'),
			templateForLinks = Templates.accordionLinksBlock(data.item_id, data.title),
			templateForContent = Templates.accordionContentBlock(data.item_id, data.description);

		linksBlock.insertAdjacentHTML('beforeend', templateForLinks);
		contentBlock.insertAdjacentHTML('beforeend', templateForContent);
		
		if(linksBlock.children.length == 1){
			this.ifOnce(contentBlock, linksBlock);
		}
		
		this.notifyAndAddBinding(json);
	}

	updateContent(block, link, json){
		let data = json.data,
			contentBlock = block.querySelector('.side-card-wrapper__content-block-items');

		link.innerHTML = data.title;
		contentBlock.innerHTML = data.description;

		this.notifyAndAddBinding(json);

	}

	notifyAndAddBinding(json){
		let form = document.querySelector('.side-carousel-item');

		form.parentNode.removeChild(form);

		Notification.codeToNotify(json.message);
	}

	ifOnce(contentBlock, linksBlock){
		linksBlock.firstElementChild.classList.add('side-card-wrapper__link-active');
		contentBlock.firstElementChild.classList.add('side-show-block');
	}

}

export default new AccordeonModel();