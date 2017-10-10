	function Ajax(){}

	function ajaxXhr (){
		var xhr = new XMLHttpRequest();
			if (!xhr){
				 xhr = new ActiveXObject('Microsoft.XMLHTTP');
				 if (!xhr){
				 	xhr = new ActiveXObject("Mxxml2.XMLHTTP");
				 	}
				}
		
		return xhr;
	}

	Ajax.prototype.get = function (url, data, success, fail){
		var xhr = new ajaxXhr();
		xhr.onreadystatechange = function(){
			if (xhr.readyState !== 4) {return;}
				if(xhr.status == 200){
					if (typeof success == 'function'){
						success(xhr.responseText);
					}
				}else{
					if (typeof fail == 'function'){
						fail(xhr.responseText);
					}
				}  
		}
		xhr.open('get',url);
		xhr.send();
	}

	//ajax.prototpye.get = new ajax();
	

	Ajax.prototype.post = function (url,data, success, fail){
		var xhr = new ajaxXhr();
		xhr.onreadystatechange = function(){
			if (xhr.readyState !== 4) {return;}
				if(xhr.status == 200){
					if (typeof success == 'function'){
						success(xhr.responseText);
					}
				}else{
					if (typeof fail == 'function'){
						fail(xhr.responseText, status);
					}
				}  
		}
		xhr.open('post', url);
		xhr.send(data);

	}



  //          5.Exports
  // ----------------------------------------------------------------------
  // 暴露API:  Amd || Commonjs  || Global 
  // 支持commonjs
  if (typeof exports === 'object') {
    module.exports = Ajax;
    // 支持amd
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return Ajax
    });
  } else {
    // 直接暴露到全局
    window.Ajax = Ajax;
  }

		
