class Translation {
	constructor(){
		let tr = localStorage.getItem('language_translation');

		this.tr = tr ? JSON.parse(tr) : {ERROR:{}, SUCCESS: {}};

	}
}

export default new Translation();