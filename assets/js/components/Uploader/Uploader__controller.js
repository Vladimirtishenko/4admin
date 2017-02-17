import Helper from '../../helper.js'

class Uploader extends Helper{
	constructor(el){
		super();
		if(!el) return;
		this.url = '/4admin/carousel/item_edit'
		this.flyEvent('add', ['change'], [el], this.uploadHandler.bind(this))
	}

	uploadHandler(event){
		let element = event.target || null;
		if(!element) return;
		let direction = element.getAttribute('data-action');

		if(!this.ActionUpload){
			require.ensure([], () => {
				let ActionUpload = require(__dirname + '/Uploader__action.js').default;
				this.ActionUpload = new ActionUpload();
				this.ActionUpload.generateRequest(direction, element, this.url, this.uploadHandler.bind(this))
			});
		} else {
			this.ActionUpload.generateRequest(direction, element, this.url, this.uploadHandler.bind(this));
		}

	}
}

export default Uploader;