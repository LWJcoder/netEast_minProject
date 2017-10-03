// document.onload = function(){
// 	var cTitle = document.getElementsByClassName('courses');
// 	function mouseOverHandler(){
// 			cTitle.setAttribute("color","#39a030");
// 		}

// 	util.addEvent(cTitle, 'mouseover', mouseOverHandler,false);

// 	cTitle.onmouseover = mouseOverHandler;



// 	items.

// }

;(function(_){
	function itemHoverHandler(){
		var items = document.getElementsByClassName('m-cItem');
		var content = '<div class="m-cItem_hover">\
		 				<a href="#">\
		 				<div class="top">\
		 					<img class="m-hImg" src="./imgs/c1.jpg" alt=""></img>\
		 					<div class="m-hInfo">\
			 					<p class="hTitle"></p>\
			 					<p class="hBookNum"> <i></i> <span class="studyNum">  </span>人在学</p>\
			 					<p class="cAuthor">发布者:<span class="author"></span></p>\
			 					<p class="hSort">分类:<span class="sort"></span></p>\
		 					</div>\
		 				</div>\
		 				<div class="bot">\
		 					<p class="introduce">\
		 					</p>\
		 				</div>\
		 				</a></div>';
		 				//items.innerHTML = contnet;
		//this.appendChild(content);
	}

 	
 	_.emitter.on('mouseover', itemHoverHandler());
})(util);