!(function(){
	function ne(opt) {	}

ne.ajax = function(options){
	if (!options){
		console.log("options is null! ");

	}
	var res = null;
	var xhr = new XMLHttpRequest();
			if (!xhr){
				 xhr = new ActiveXObject('Microsoft.XMLHTTP');
				 if (!xhr){
				 	xhr = new ActiveXObject("Mxxml2.XMLHTTP");
				 	}
				}
		
		

				xhr.onreadystatechange = function(){
					if (xhr.readyState !== 4) {return;}
					(xhr.status == 200) ? success(xhr.responseText): fail(xhr, status);

				}
		if (options.url && options.type){

				xhr.open(optios.type, options.url ,true);
				if (options.type.toString().toLowercase() == "get")	{
					res = xhr.send(options.data);
				}else if (options.type.toString().toLowercase() == "post"){
					res = xhr.send(JSON.stringify(options.data));
				}

		}		
				return res;


}

	window.ne = ne;
 

})();
