
	function noRemind(){
		var con =  document.getElementById('remindTxt');
		//如果没有隐藏
		 if ('hide'.indexOf(con.className)){
		 	con.className += ' hide';
		 }
		 
		 setCookie('reminded', '1', 1);
	}


	/*设置cookie*/
	function setCookie(name, value, iDay)
	{
	  var oDate=new Date();
	  oDate.setDate(oDate.getDate()+iDay);
	  document.cookie=name+'='+value+';expires='+oDate;
	};
	/*使用方法：setCookie('user', 'simon', 11);*/
	/*获取cookie*/
	function getCookie(name)
	{
	  var arr=document.cookie.split('; '); //多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
	  for(var i=0;i<arr[i].length;i++) //历遍数组
	  {
	    var arr2=arr[i].split('='); //原来割好的数组是：user=simon，再用split('=')分割成：user simon 这样可以通过arr2[0] arr2[1]来分别获取user和simon 
	    if(arr2[0]==name) //如果数组的属性名等于传进来的name
	    {
	      return arr2[1]; //就返回属性名对应的值
	    }
	    return ''; //没找到就返回空
	  }
	};
	/*使用方法：getCookie('user')*/
	/*删除cookie*/
	function removeCookie(name)
	{
	  setCookie(name, 1, -1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
	};
	/*使用方法：removeCookie('user')*/
	
	//事件委托
	var parent = document.getElementById("courses");
	//var des = document.getElementsByClassName("m-cItem");
	parent.onmouseover  = function(e){
		//显示说明
		var ev = ev || window.event;
	    var target = ev.target || ev.srcElement;
	    //alert(target.innerHTML);
	    if(target.nodeName.toLowerCase() == "li"){

	    	// target.className = "bot" ;
	    	// console.log(target)
	    }
		
	};

	var navPage = document.getElementById("navPage");

	navPage.onclick  = function(e){
		//显示说明
		var ev = ev || window.event;
	    var target = ev.target || ev.srcElement;
	    //alert(target.innerHTML);
	    if(target.nodeName.toLowerCase() == "li"){
	    	var index = 0;
	    	if ('1'.indexOf(target) ){
	    		index = 1;
	    	}else if ('2'.indexOf(target)){
	    		alert(2)
	    		index = 2;
	    	}else if ('3'.indexOf(target)){
	    		index = 3;
	    	}
	    	
	    	//导航至第n页
	    	//getAllCourse(10, index);
	    	nav2Page(index);
	    }
		
	};

	//导航
	function nav2Page(index){
		getAllCourse(10, index);
	}

	function getVideo (){
		console.log("video")
		var oDiv = '<video class="m-vStyle" autoplay controls name="video" src="http://mov.bn.netease.com/open-movie/nos/mp4/2014/12/30/SADQ86F5S_shd.mp4"></video>';

		// var modal2 = new Modal({
		// 				  // 1. 内容配置
		// 				  content: oDiv, //可传入节点和字符串
		// 				  // 2. 动画设置
		// 				  animation: {
		// 				    enter: 'bounceIn',
		// 				    leave: 'bounceOut'
		// 				  }
		// 				});
		// modal2.show();
		//var d = document.getElementById("videoShow");
		var dom = document.createElement("div");
		dom.className = "m-parentV";
		dom.innerHTML = oDiv;
		document.body.appendChild(dom);
	}

	