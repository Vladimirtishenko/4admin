import Template from '../../components/Templates/Templates.js'

class UserModel {
	constructor(){}

	stateContents(json){
		let template = Template.userTemplate(json.data._id, json.data.username),
			blockToInsert = document.querySelector('[data-user="'+json.data.role+'"]'),
			form = document.querySelector('.side-flex__add-right-user');

			blockToInsert.insertAdjacentHTML('afterbegin', template);

			form.reset();
			form.parentNode.classList.remove('side-user__show-add');

	}

	removeContents(json){
		let _id = json.data._id,
			el = document.querySelector('#user-id-'+_id);
			el.parentNode.removeChild(el);
	}

}

export default new UserModel();