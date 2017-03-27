import Helper from '../../helper.js'

class Uploader extends Helper{
	constructor(el){
		super();
		if(!el) return;
		this.img = document.getElementById('image_uploaded__view');

		this.flyEvent('add', ['change'], [el], this.uploadHandler.bind(this))		
		
	}

	uploadHandler(event){
		let element = event.target || null;
		if(!element) return;

		let file = element.files[0],
			reader = new FileReader();


		reader.onload = () => {
			this.img.src = reader.result;
		}

		if(file){
			reader.readAsDataURL(file);
		}

	}
}

export default Uploader;