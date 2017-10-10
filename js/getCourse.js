	var pageCount = 20;

//获取全部课程列表，并动态渲染到页面
		function getAllCourse(type, pageNum){
			var ajax = new Ajax();
			pageNum = pageNum || 0;
			type = type || 10;
			var data = {pageNo: 1,
						psize: 12,
						type: type};
		
			ajax.get("http://study.163.com/webDev/hotcouresByCategory.htm", data, function(data1){
					//console.log("all"+ JSON.stringify(data));
					var list = document.getElementById('courses');
					var temple = '';
					var data = JSON.parse(data1);
					var len = pageNum * pageCount<data1.length ? pageNum + pageCount : data1.length;
					for (let i = pageNum; i < len; i++){
						if (0<window.innerWidth < 1000){		
							 temple += '\
								<li class="m-cItem">\
				 					<a href="#">\
				 					<div class="top">\
						 				<img class="m-cImg" src="'+data[i].smallPhotoUrl+'" alt="" title="'+data[i].name+'"></img>\
							 				<div class="m-cInfo">\
							 					<p class="cTitle" title="'+data[i].name+'">'+data[i].name+'</p>\
							 					<p class="cAuthor"><a href="http://study.163.com'+data[i].providerLink+'">'+data[i].provider+'</a></p>\
							 					<p class="cBookNum"> <i></i> '+data[i].learnerCount+'</p>\
							 					<p class="cPrice">￥'+data[i].price+'</p>\
							 				</div>\
							 			</div>\
							 				<div class="bot hide">\
							 					<p class="intruduce">'+ data[i].description+'</p>\
							 				</div>\
						 				</a>\
						 		</li>';
						}else{
							 temple += '\
								<li class="m-cItem">\
				 					<a href="#">\
						 				<img class="m-cImg" src="'+data[i].bigPhotoUrl+'" alt=""></img>\
							 				<div class="m-cInfo">\
							 					<p class="cTitle" title="'+data[i].name+'">'+data[i].name+'</p>\
							 					<p class="cAuthor"><a href="http://study.163.com'+data[i].providerLink+'">'+data[i].provider+'</a></p>\
							 					<p class="cBookNum"> <i></i> '+data[i].learnerCount+'</p>\
							 					<p class="cPrice">￥'+data[i].price+'</p>\
							 				</div>\
						 				</a>\
						 		</li>';
						}						 										
					}
				
				
				list.innerHTML = temple;
			},function(txt,status){
				fail(txt, status);
			});										
		}
	getAllCourse(10);
	 
	//获取热门课程列表，并动态渲染到页面
	function getHotList(){
		var ajax = new Ajax();
		ajax.get("http://study.163.com/webDev/hotcouresByCategory.htm",{}, function(data1){
			var listE = document.getElementById('m-rankList');
			//console.log(data1);

			var data = JSON.parse(data1);
			var list = document.getElementById('hotList');
			var temple = '';
			//alert(window.innerWidth)
				//Array.prototype.slice.call(data1);
			//console.log(instanceof data == 'object array');
			//console.log("hot: "+ JSON.stringify(data));
			for (var i = data.length - 1; i >= 0; i--) {
				if (0 < Number(window.innerWidth) < 1000){
					temple += '<li class="m-rankItem">\
								<a href="#">\
									<div class="r-left">\
										<img src="'+data[i].smallPhotoUrl+'" alt="'+data[i].name+'">\
									</div>\
									<div class="r-right">\
										<span class="r-head" title="'+data[i].name+'">\
											'+data[i].name+'</span>\
										<div class="r-userInfo">\
											<i></i>\
											<span>'+data[i].learnerCount+'</span>\
										</div>\
									</div>\
								</a>\
							</li>';
				}else{
					temple += '<li class="m-rankItem">\
								<a href="#">\
									<div class="r-left">\
										<img src="'+data[i].bigPhotoUrl+'" alt="最热排行">\
									</div>\
									<div class="r-right">\
										<span class="r-head">\
											'+data[i].name+'</span>\
										<div class="r-userInfo">\
											<i></i>\
											<span>'+data[i].learnerCount+'</span>\
										</div>\
									</div>\
								</a>\
							</li>';
				}	
		
				}
				list.innerHTML = temple;
			
			
		},function(txt,status){
				fail(txt, status);
			})
	}	

	getHotList();