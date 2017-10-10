var util = (function(){
	return {
		//赋值属性,不覆盖第一个已存在的值
		extend: function(a1, a2){
			for(var i in a2){
				if(typeof a1[i] === 'undefined')
					a1[i] = a2[i];
		}
		},
		addClass: function(node, className){
			var current = node.className || "";

			if ((" "+ current+ " ").indexOf(" "+ className+ " ")  === -1) {
				node.className  = current? (current+ " "+ className) : className;
			}
		},
		delClass: function(node, className){
			var current = node.className || "";
			node.className.replace(" "+ className+" ", " ").trim();
		},
		emitter: {
      // 注册事件
			on: function(event, fn){
				var handles = this._handles || (this._handles = {}),
				calls = handles[event] || (handles[event] = []);

        // 找到对应名字的栈
				calls.push(fn);
				return this;
			},
			 // 解绑事件
			off:  function(event, fn){
				if(!event || !this._handlers ) this._handlers = {};

				if (!this._handlers) return;

				var handles = this._handlers, calls;
				if (calls = this._handlers[event]){
					if(!fn){
						handles[event] = [];
						return this;
					}
					 // 找到栈内对应listener 并移除
          			for (var i=0, len = calls.length;i< len; i++){
          				if (fn == calls[i]){
          					calls.splice(i, 1);
          					return this;
          				}
          			}
				}
				return this;
			},
			emit: function(event){
				var args = [].slice.call(arguments, 1),
				handles = this._handlers, calls;

				if (!handles || !(calls = handles[event])) return this;

				       // 触发所有对应名字的listeners
				       for(var i=0, len = calls.length;i< len; i++){
          					calls[i].apply(this, args);
          				}
          				return this;
			}
		},
		// addEvent: function(elem,type, handler, userCap){
		// 	return  document.addEventListener ? 
		// 					elem.addEventListener(type, handler, userCap):
		// 					elem.attachEvent('on'+type, handler);
		// },

		ajax: function(method, url, data, success, fail){
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
				if (method.toUpperCase() == 'POST'){
					url += "?"+ JSON.stringify(data);
				}
			
				xhr.open(method, url ,true);				
				xhr.send(data);
		},
		//获取cookie
		getcookie: function() {
			    var cookie = {};
			    var all = document.cookie;
			    if (all === '')
			        return cookie;
			    var list = all.split('; ');
			    for (var i = 0; i < list.length; i++) {
			        var item = list[i];
			        var p = item.indexOf('=');
			        var name = item.substring(0, p);
			        name = decodeURIComponent(name);
			        var value = item.substring(p + 1);
			        value = decodeURIComponent(value);
			        cookie[name] = value;
			    }
			    return cookie;
			},
		//设置cookie
		setCookie: function(name, value, expires, path, domain, secure){
			//function setCookie (name, value, expires, path, domain, secure) {
		    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		    if (expires)
		        cookie += '; expires=' + expires.toGMTString();
		    if (path)
		        cookie += '; path=' + path;
		    if (domain)
		        cookie += '; domain=' + domain;
		    if (secure)
		        cookie += '; secure=' + secure;
		    document.cookie = cookie;
		}
	}
})();


