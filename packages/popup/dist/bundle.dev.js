(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popup = factory());
}(this, (function () { 'use strict';

function anonymous(it
/**/) {
  var out = '<div class="' + it.classes.wrap + '"> <div class="ui-overlay ' + it.classes.mask + '"></div> <div class="ui-popup"> <div class="ui-popup__title ' + it.classes.title + '">';if (it.title) {
    out += ' ' + it.title + ' ';
  }out += ' ';if (it.showClose) {
    out += ' <div et="click:close" class="ui-popup__fn-button"><i class="ui-icon-close"></i></div> ';
  }out += ' </div> <div class="ui-popup__content ' + it.classes.content + '">' + it.content + '</div> ';if (it.footer) {
    out += ' <div class="ui-popup__footer ' + it.classes.footer + '">' + it.footer + '</div> ';
  }out += ' </div></div>';return out;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * popup 浮层
 */
var defaultOptions = {
  container: '#container',
  fixedElement: '',
  onShow: $.noop,
  onHide: $.noop,
  classes: {
    wrap: '',
    mask: '',
    title: '',
    content: '',
    footer: '',
    show: ''
  }
};

var selectors = {
  el: '.ui-popup',
  mask: '.ui-overlay',
  title: '.ui-popup__title',
  content: '.ui-popup__content',
  footer: '.ui-popup__footer'
};

var modifyClasses = {
  overlayhidden: 'ui-overlay--hidden',
  popupShow: 'ui-popup--show'
};

var Popup = function () {
  /**
   * Create a Popup
   * @param {object} options 配置项
   */
  function Popup(options) {
    classCallCheck(this, Popup);

    this.options = _extends(defaultOptions, options);
    this._init();
  }

  /**
   * 初始化
   */


  createClass(Popup, [{
    key: '_init',
    value: function _init() {
      this.evtHandler = {};
      this.$el = $(anonymous(this.options));
      this._bindEvent();
    }

    /**
     * 绑定事件
     */

  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      var _this = this;

      this.$el.on('click', function (e) {
        e = e || window.event;
        var tag = e.target.tagName;
        var node = $(e.target);
        var et = node.attr('et');

        if (!et) {
          // 向上找
          while (node[0] && node[0] !== _this.$el && !et) {
            node = node.parent();
            et = node.attr('et');
          }
          if (!et) {
            return;
          }
        }

        // 超链接不阻值冒泡
        tag !== 'A' && e.stopPropagation();
        // 是对应的事件
        if (et.indexOf(e.type) === 0) {
          // 调用事件指定的函数
          _this.evtHandler[et.split(':')[1]](node, e);
        }
      });

      this.registerHandler('close', this.hide.bind(this));
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      this.enableDocMove();
      this.$el.find(selectors.mask).removeClass(modifyClasses.overlayhidden);
      this.$el.find(selectors.el).removeClass(modifyClasses.popupShow).one('webkitTransitionEnd', function () {
        _this2.$el.remove();
        _this2.options.onHide && _this2.options.onHide();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      var _this3 = this;

      this.disableDocMove();
      $(this.options.container).append(this.$el);
      setTimeout(function () {
        _this3.$el.find(selectors.el).addClass(modifyClasses.popupShow);
        _this3.$el.find(selectors.mask).addClass(modifyClasses.overlayhidden);
        _this3.options.onShow && _this3.options.onShow();
      });
    }
  }, {
    key: 'registerHandler',
    value: function registerHandler(name, handler) {
      if (this.evtHandler[name]) {
        throw new Error('事件处理函数已经存在');
      }

      this.evtHandler[name] = handler;
    }
  }, {
    key: 'enableDocMove',
    value: function enableDocMove() {
      $(this.options.container).removeClass('ui-ov-h').height('auto');
    }
  }, {
    key: 'disableDocMove',
    value: function disableDocMove() {
      $(this.options.container).addClass('ui-ov-h').height(window.innerHeight);
    }
  }]);
  return Popup;
}();

return Popup;

})));
//# sourceMappingURL=bundle.dev.js.map
