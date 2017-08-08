const Async = (method, path, data) => {
	
	return new Promise(function (resolve, reject){
    	
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function(){
			if(xhr.status == 200 && xhr.readyState == 4){
				return resolve(xhr.response);
			}
		}

		xhr.open('GET', path)
		xhr.send(data || null)

  	});
  	
}

export default Async;