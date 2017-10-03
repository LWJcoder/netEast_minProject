
	function noRemind(){
		var con =  document.getElementById('remindTxt');
		//如果没有隐藏
		 if ('hide'.indexOf(con.className)){
		 	con.className += ' hide';
		 }
		 
		 setCookie('remindTxt', 'hide', 1);
	}


 	function setCookie(name, value, days ){
			var cookie = document.cookie;
			var exp = (new Date()).getDate()+ days;
			cookie = name+"="+ value +";expires="+exp+";";
		}

	