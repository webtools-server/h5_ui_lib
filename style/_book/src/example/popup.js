var tpl = '<div class="{{wrapClass}}">'
          +   '<div class="ui-overlay"></div>'
          +   '<div class="ui-popup">'
          +     '<div class="ui-popup__title {{titleClass}}">{{title}}</div>'
          +     '<div class="ui-popup__content {{contentClass}}">{{content}}</div>'
          +   '</div>'
          + '</div>'
          + '</div>';

var windowHeight = window.innerHeight;
var enableDocMove = function () {
  $('#container').removeClass('ui-ov-h').height('auto');
}

var disableDocMove = function () {
  $('#container').addClass('ui-ov-h').height(windowHeight);
}

var evtHandler = {
  handleEvent : function (e) {
      e = e || window.event;
      var tag = e.target.tagName, node = $(e.target), et = node.attr("et");
      if (!et) {
          // 向上找
          while (node[0] != this && !et) {
              node = node.parent();
              et = node.attr("et");
          }
          if (!et) {
              return;
          }
      }
      // 超链接不阻值冒泡
      tag != "A" && e.stopPropagation();
      // 是对应的事件
      if (et.indexOf(e.type) == 0) {
          // 调用事件指定的函数
          evtHandler[et.split(":")[1]](node, e);
      }
  },
  close : function () {
      if (!popup.$el) {
          return;
      }
      popup.hide();
  },
  selfDefineAction : function (node, e) {
      
  }
}

function Popup(options) {

}

Popup.prototype.show = function (options) {
  var opt = {
    wrapClass: 'mod-popup',
    titleClass: '',
    contentClass: '',    
  };

  $.extend(opt, options);
  opt.titleClass = opt.titleBorder ? opt.titleClass : opt.titleClass + ' ui-bb-n';
  this.$el = $(tpl.replace('{{wrapClass}}', opt.wrapClass).replace('{{titleClass}}', opt.titleClass).replace('{{contentClass}}', opt.contentClass).replace('{{title}}', opt.title).replace('{{content}}', opt.content));

  disableDocMove();
  $(document.body).append(this.$el);
  setTimeout(() => {
    this._bindEvent();
    this.$el.find('.ui-popup').addClass('ui-popup--show');
  })    
}

Popup.prototype.hide = function (cb) {
  enableDocMove();
  this.$el.find('.ui-popup').removeClass('ui-popup--show')
  .one('webkitTransitionEnd',  () => {
    this.$el.remove();
    this.$el = null;
    cb && cb();
  })  
}

Popup.prototype._bindEvent = function () {
  this.$el.on("click", evtHandler.handleEvent); 
}

var popup = new Popup();
