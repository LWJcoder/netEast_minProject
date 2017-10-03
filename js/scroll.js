//scroller.js
;(function(_){


  // 将HTML转换为节点
  function html2node(str){
    var container = document.createElement('div');
    container.innerHTML = str;
    return container.children[0];
  }


  var template = 
  	'<div class="m-scroller">\
  		<div class="scroll"></div>\
  		<div class="scroll"></div>\
  		<div class="scroll"></div>\
  	</div>';



  function Scroll(opt){
  	_.extend(this, opt);

  	//节点及样式设置
  	this.container = document.getElementById('bannerBody');
  	this.container.style.overflow = 'hidden';

  	//组件节点
  	this.scroller = this._layout.cloneNode(true);
    this.scrolls = [].slice.call(this.scroller.querySelectorAll('.scroll'));



  	//拖拽
  	this.offsetWidth = this.container.offsetWidth;
  	this.breakPoint = this.offsetWidth / 4;
  	this.pageNum = this.images.length;

  	//内部数据结构
  	this.scrollIndex = 1;
  	this.pageIndex = this.pageIndex || 0;
  	this.offsetAll = this.pageIndex;
    // this.pageNum 必须传入
    // 初始化动作
  	this.container.appendChild(this.scroller);
  	
   
  }

  _.extend(Scroll.prototype, _.emitter);

  _.extend( Scroll.prototype, {

  	_layout: html2node(template),
  	  // 计算Slide
    // 每个slide的left = (offsetAll + offset(1, -1)) * 100%;
    // 外层容器 (.m-scroller) 的偏移 = offsetAll * 宽度
    _calcScroll: function(){
    	var scrollIndex = this.scrollIndex = this._normIndex(this.scrollIndex, 3),
    			pageIndex = this.pageIndex = this._normIndex(this.pageIndex, this.pageNum),
    			offsetAll = this.offsetAll,
    			pageNum = this.pageNum;

    	var prevSlideIndex = this._normIndex(scrollIndex -1, 3),
    		nextSlideIndex = this._normIndex(scrollIndex +1, 3);

    	var scrolls = this.scrolls;
    	scrolls[scrollIndex].style.left = (offsetAll) * 100 + '%';
    	scrolls[prevSlideIndex].style.left = (offsetAll -1) * 100 + '%';
    	scrolls[nextSlideIndex].style.left = (offsetAll +1) * 100 + '%';
     
    	// 容器偏移
    	this.scroller.style.transform = 'translateX(' + (- offsetAll * 100) +'%) translateZ(0)';


      // 当前slide 添加 'z-active'的className
      scrolls.forEach(function(node){ _.delClass(node, 'z-active') })
      
    	_.addClass(scrolls[scrollIndex], 'z-active');

    	//this._onNav(this.pageIndex, this.scrollIndex);

   },

     // 标准化下标
    _normIndex:  function(index, len){
    	return (len + index) % len;
    },

    
  })


  window.Scroll = Scroll;





})(util);