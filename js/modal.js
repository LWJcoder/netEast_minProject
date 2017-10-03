
!(function(_){
  // 帮助函数
  // ----------

  //var containerDom = document.getElementById('login');
  // 将HTML转换为节点
  function html2node(str){
    var container = document.createElement('div');
    container.innerHTML = str;
    return container.children[0];
  }

  // 赋值属性
  // extend({a:1}, {b:1, a:2}) -> {a:1, b:1}
  function extend(o1, o2){
    for(var i in o2) if(typeof o1[i] === 'undefined'){
      o1[i] = o2[i]
    } 
    return o1
  }


 var template = 
  '<div class="m-modal">\
    <div class="modal_align">\
    <div class="modal_wrap animated">\
      <div class="modal_head">\
      <span><i class="xP m-close"></i></span>\
      <h3>登录网易云课堂</h3></div>\
      <div class="modal_body">\
      <form id="loginForm" action="http://study.163.com/webDev/login.htm" method="get" autocomplete="false">\
        <div class="inputArea">\
          <input type="text" class="m-logName" name="userName" placeholder="账户" />\
          <br />\
          <input type="password" class="psw" name="password" minlength="6" placeholder="密码" />\
          <br />\
          <button type="button"  class="loginBtn" onclick="login()">登录</button>\
        </div>\
      </form>\
      </div>\
    </div>\
    </div>\
  </div>';

  // Modal
  // -------
  var content;

  function Modal(options){
    options = options || {};
    // 即 div.m-modal 节点
    this.container = this._layout.cloneNode(true);
    // body 用于插入自定义内容
    this.body = this.container.querySelector('.modal_body');
    // 窗体节点，在应用动画时有用
    this.wrap = this.container.querySelector('.modal_wrap');

    // 将options 复制到 组件实例上
    extend(this, options);
    content = options.content;

    this._initEvent();

  }



  extend(Modal.prototype, {

    _layout: html2node(template),

    setContent: function(content){
      if(!content) return;

      //支持两种字符串结构和DOM节点
      if(content.nodeType === 1){ 

        this.body.innerHTML = 0;
        this.body.appendChild(content);

      }else{

         this.body.innerHTML = content;
      }
    },

    // 显示弹窗
    show: function(content){
      
      if(content) this.setContent(content);

      document.body.appendChild(this.container);
      animateClass(this.wrap, this.animation.enter)


    },

    hide: function(){

      var container = this.container;

      animateClass(this.wrap, this.animation.leave, function(){
        document.body.removeChild(container);
      })
      
    },



    // 初始化事件
    _initEvent: function(){

      // this.container.querySelector('.confirm').addEventListener(
      //   'click', this._onConfirm.bind(this)
      // )
      // this.container.querySelector('.cancel').addEventListener(
      //   'click', this._onCancel.bind(this)
      // )
    },

    _onConfirm: function(){
      this.emit('confirm')
      this.hide();
    },

    _onCancel: function(){
      this.emit('cancel')
      this.hide();
    }

  })


  // 使用混入Mixin的方式使得Slider具有事件发射器功能
  extend(Modal.prototype, _.emitter);
  






  //          5.Exports
  // ----------------------------------------------------------------------
  // 暴露API:  Amd || Commonjs  || Global 
  // 支持commonjs
  if (typeof exports === 'object') {
    module.exports = Modal;
    // 支持amd
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return Modal
    });
  } else {
    // 直接暴露到全局
    window.Modal = Modal;
  }


})(util);
