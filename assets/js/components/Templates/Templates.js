import Translation from '../Translation/translation__single.js'

class Templates {
	constructor(){}

	carouselTemplate(img, cat_id, _id){

		let random = (new Date()).getTime() + Math.random();

		return '<form action="/4admin/carousel/item_edit_text" class="side-carousel-item table-side__item-remove">' +
					'<input type="hidden" name="_id" value="'+_id+'">' + 
					'<div class="row">' + 
						'<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 side-carousel-item__image">' + 
								'<img src="'+img+'">' + 
						'</div>' + 
						'<div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-7 side-carousel-item__text-block">' + 
							'<div class="side-form-group">' + 
								'<label for="title_ru">' + 
									'<input type="text" name="title_ru" id="title_ru" placeholder="Заголовок на русском">' + 
								'</label>' + 
								'<label for="title_en">' + 
									'<input type="text" name="title_en" id="title_en" placeholder="Title in english">' + 
								'</label>' + 
							'</div>' + 
							'<div class="side-form-group">' + 
								'<label for="description_ru">' + 
									'<textarea id="description_ru" rows="4" name="description_ru" placeholder="Описание на русском" required=""></textarea>' + 
								'</label>' + 
								'<label for="description_en">' + 
									'<textarea id="description_en" rows="4" name="description_en" placeholder="Description in english" required=""></textarea>' + 
								'</label>' + 
							'</div>' + 
						'</div>' + 
						'<div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">'  + 
							'<div class="side-carousel-item__submited">'  + 
								'<label for="side-uploaded-file-'+random+'" class="side-card-wrapper__button">' + 
									'<i title="Upload new" class="fa fa-file-image-o"></i>' + 
									'<input id="side-uploaded-file-'+random+'" name="image" type="file" data-category="'+cat_id+'" data-id="'+_id+'" data-current-src="'+img+'" data-action="edit-upload" class="upload-button side-table-wrapper__upload-button">' + 
								'</label>' + 
								'<label class="side-card-wrapper__button" for="side-form-send-'+random+'">' + 
									'<i title="Save" class="fa fa-floppy-o"></i>' +
									'<input type="submit" class="side-form-send-hidden" id="side-form-send-'+random+'">'+
								'</label>' + 
								'<label class="side-card-wrapper__button">' + 
									'<span role="link" data-href="/4admin/carousel/item_delete?_id='+_id+'" class="side-remove-item fa fa-remove"></span>' + 
								'</label>' + 
							'</div>' + 
						'</div>' + 
					'</div>' + 
				'</form>';
	}

	pageMenuTempalte(page_id, _id, content){
		
		return '<div class="side-carousel-item col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">' + 
				'<form action="/4admin/page_designer/edit">' +
				 '<input type="hidden" name="page_id" value="'+page_id+'" />' +
				 '<input type="hidden" name="_id" value="'+_id+'" />' +
				  this.pageMenuTempalteLangCreater(content) + 
				  '<div class="side-form-group">' + 
				  	'<button class="side-button submit-button">Save</button>' +
				  '</div>' +
				  '</form>'+
				'</div>';
	}

	pageMenuTempalteLangCreater(obj){
		let template = '';

		for(var key in obj){
			template += ' <div class="side-form-group">' + 
						    '<label for="title_"'+key+'>' + 
						        '<input type="text" name="title_'+key+'" id="title_'+key+'" value="'+(obj[key].title || "")+'" placeholder="Заголовок на '+key.toUpperCase()+'"/>' + 
						      	'<span>Заголовок '+key.toUpperCase()+'</span>' + 
						   	'</label>' + 
						  '</div>' + 
						 ' <div class="side-form-group">' + 
						    '<label for="description_'+key+'">' + 
						      '<textarea id="description_'+key+'" name="description_'+key+'" placeholder="Описание на '+key.toUpperCase()+'" required="required">'+(obj[key].description || "")+'</textarea>' + 
						      '<span>Описание '+key.toUpperCase()+'</span>' + 
						    '</label>' + 
						  '</div>';
		}

		return template;

	}

	accordionContentBlock(_id, content){
		return '<div id="showing-block-'+_id+'" class="side-card-wrapper__content-block">' +
					'<div class="side-card-wrapper__content-block-items">' +
						content + 
					'</div>' +
					'<div class="side-card-wrapper__remove-or-edit">' +
						'<span data-id-item="'+_id+'" class="side-card-wrapper__button fa fa-pencil-square-o side-card-wrapper__add-block"></span>' +
						'<span data-href="/4admin/pageMenuDeleteItem?_id='+_id+'" class="side-remove-item fa fa-remove"></span>' +
					'</div>' +
				'</div>';
	}

	accordionLinksBlock(_id, title){
		return '<a href="#'+_id+'" data-block="'+_id+'" id="side-links-'+_id+'" class=" side-card-wrapper__link side-card-wrapper__link">'+title+'</a>';
	}

	userTemplate(_id, username){
		return '<div class="side-users__resourse col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="user-id-'+_id+'">' +
				   '<div class="side-users__resourse-item">' +
				      '<img src="/4admin/assets/img/icon-user-default.png" alt=""/>' +
				      '<div class="side-users__info">' +
				         '<p>'+username+'</p>' +
				         '<div class="side-users__controls">' +
				         	'<span class="side-remove-item fa fa-remove" data-href="/4admin/user/remove?_id='+_id+'"></span>' +
				         	'<span class="side-users__controls-edit">' +
				         		'<i class="fa fa-pencil side-users__edit-handler"></i>' +
				         	'</span>' +
				         '</div>' +
				      '</div>' +
				   '</div>' +
				   '<div class="side-users__resourse-item__edit-flip">' +
				      '<i class="fa fa-long-arrow-left side-users__edit-return side-users__edit-handler"></i>' +
				      '<h2 class="side-users__change-password">Change password</h2>' +
				      '<form action="/4admin/user/update" class="table-side-to-validate">' +
				         '<input type="hidden" name="_id" value="'+_id+'"/>' +
				         '<div class="side-form-group side-form-group-mini">' +
				            '<label for="old_password_">' +
				           		'<input type="text" name="old_password" id="old_password_" placeholder="" value=""/>' +
				            '</label>' +
				         '</div>' +
				         '<div class="side-form-group side-form-group-mini">' +
				            '<label for="new_password_">' +
				            '<input type="password" name="password" id="new_password_" placeholder="" value=""/>' +
				            '</label>' +
				         '</div>' +
				         '<div class="side-form-group side-form-group-mini side-group-submit-button">' +
				            '<label for="repeat_password_">' +
				            '<input type="password" name="repeat_password" id="repeat_password_" placeholder="" value=""/>' +
				            '</label>' +
				            '<button><i class="fa fa-save"></i></button>' +
				         '</div>' +
				      '</form>' +
				   '</div>' +
				'</div>';
	}

	itemMenuGeneral(name, id){
		return '<div class="side-hr side-menu-form-wrapper__general" id="'+id+'">' +
				  '<div class="side-form-group__section-block side-main-tree">' +
				  	 '<span class="side-name-of-menu">'+name+'</span>' +
				  	 '<span data-template="itemMenu" data-content="side-add-menu-button" data-id="'+id+'" class="side-card-wrapper__button side-card-mini-button">'+Translation.tr.ADD_ITEMS+'</span>' +
				  	'<span data-template="itemSubMenu" data-content="side-add-menu-submenu" data-id="'+id+'" class="side-card-wrapper__button side-card-mini-button">'+Translation.tr.ADD_SUBMENU+'</span>' +
				  '</div>' +
				  '<span class="side-remove-on-tree side-save-tree side-card-mini-button">'+Translation.tr.SAVE+'</span>' +
				'</div>';
	}

	itemMenu(name, uniqLabel){
		return '<div class="side-menu-form-wrapper__item">' +
  					'<div id="'+uniqLabel+'" class="side-form-group__section-block">'+name+'</div>' +
					'<span data-removed="side-remove-menu-item" class="side-remove-on-tree fa fa-remove" data-label="'+uniqLabel+'"=></span>' +
				'</div>';
	}

	itemSubMenu(name, uniqLabel){
		return '<div class="side-menu-form-wrapper__submenu">' +
				  '<div class="side-menu-form-wrapper__general" id="'+uniqLabel+'">' +
				    '<div class="side-form-group__section-block side-main-tree">' +
				    '<span class="side-name-of-menu">'+name+'</span>' +
				    '<span data-template="itemMenu" data-content="side-add-menu-button" data-id="'+uniqLabel+'" class="side-card-wrapper__button side-card-mini-button">'+Translation.tr.ADD_ITEMS+'</span>'+
				    '</div>' + 
				    '<span data-removed="side-remove-menu-submenu" class="side-remove-on-tree fa fa-remove" data-label="'+uniqLabel+'"></span>' +
				  '</div>';
				 
	}

}

export default new Templates();