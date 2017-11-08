	//页面动作 js
	window.onload = function(){
		var scX = 0,
			step = -5,
			width = window.outerWidth;
		var myCookie = new Cookie();

		function scrollImg(){
			var imgList = document.getElementById("imgList");
		

			imgList.style.left = scX+ "px";
			scX += step;

			var x = getElementLeft(imgList);
			var left = imgList.style.left;
			//console.log(x);

			if (Math.abs(x) > 100) {
				step = 5;
			}

			// 将left转化为数字， 也可以使用Number，或者 -0
			if ((left.replace("px","") -0) > 100) {
				step = -5;
			}
		}
		

		function initImg(){
			//定时器， 每80ms运行一次
			var itl = setInterval(scrollImg, 80);
		}

		initImg();

		//获得页面的宽高
		function getViewport(){
	　　　　if (document.compatMode == "BackCompat"){
	　　　　　　return {
	　　　　　　　　width: document.body.clientWidth,
	　　　　　　　　height: document.body.clientHeight
	　　　　　　}
	　　　　} else {
	　　　　　　return {
	　　　　　　　　width: document.documentElement.clientWidth,
	　　　　　　　　height: document.documentElement.clientHeight
	　　　　　　}
	　　　　}
	　　};

		function getElementLeft(element){
	　　　　var actualLeft = element.offsetLeft;
	　　　　var current = element.offsetParent;
	　　　　while (current !== null){
	　　　　　　actualLeft += current.offsetLeft;
	　　　　　　current = current.offsetParent;
	　　　　}
	　　　　return actualLeft;
　　}

	
	var navBtn = document.getElementsByClassName('navBtn');
	navBtn.onclick = function (event){
		if (event.target.className.indexOf('active') == -1){
			event.target.className += " nav-active";
			event.target.siblings().className.replace('nav-active', ' ');
		}
	}


	var searchIco = document.getElementsByClassName('m-searchIcon')[0];
	searchIco.onmouseover = function(){
		var searInput = document.getElementById('searInput');
		searInput.className = " m-input ";

		searInput.onmouseover = function(){
			searInput.className = " m-input ";
		}

		searInput.onmouseleave = function(){
		setTimeout(function(){
			if (!searInput.value){

				searInput.className = " m-input hide ";
			}
	
		}, 1500);
		
	}

	}



	searchIco.onmouseleave = function(){
		setTimeout(function(){
			var searInput = document.getElementById('searInput');
			if (!searInput.value)
				searInput.className = " m-input hide ";
		}, 1500);
		
	}


	
	



	function noRemind(){
			var con =  document.getElementById('remindTxt');
		//如果没有隐藏
		 if ('hide'.indexOf(con.className)){
		 	con.className += ' hide';
		 }
		 
		 myCookie.setCookie('reminded', '1');
		}

			
			var remind = myCookie.getCookie();
			//console.log(remind);
			
			if (remind.reminded == '1'){
				var con =  document.getElementById('remindTxt');
				con.className += 'hide';
			}


				
			function OptClick (type,that){
				var tags = document.getElementsByClassName("m-tab");
				if (that == "tag1"){
					tags[0].className += " active";
					tags[1].className = " m-tab";
				}else{
					tags[1].className += " active";
					tags[0].className = " m-tab" ;
				}
				getAllCourse(type, 1, 12);
			}

			
		

		function success(txt){
			alert("success" + JSON.stringify(txt));
		}

		function fail(txt){
			alert("fail"+JSON.stringify(txt));
		}




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
		var dom = document.createElement("div");
		dom.className = "m-parentV";
		dom.innerHTML = oDiv;
		//在body中添加为第一个child
		document.body.appendChild(dom);

	}
}
	