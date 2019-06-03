(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Picker = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











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

var bundle = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule$$1(fn, module) {
      return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var extend = createCommonjsModule$$1(function (module, exports) {
      !function (o, t) {
        module.exports = t();
      }(commonjsGlobal$$1, function () {
        "use strict";
        function o(o) {
          return Array.isArray(o);
        }function t(o) {
          if (!o || "[object Object]" !== e.call(o)) return !1;var t = n.call(o, "constructor"),
              r = o.constructor && o.constructor.prototype && n.call(o.constructor.prototype, "isPrototypeOf");if (o.constructor && !t && !r) return !1;var i = void 0;for (i in o) {}return void 0 === i || n.call(o, i);
        }function r() {
          var n = void 0,
              e = void 0,
              c = void 0,
              f = void 0,
              u = void 0,
              y = void 0,
              p = arguments[0],
              l = 1,
              d = !1,
              s = arguments.length;for ("boolean" == typeof p && (d = p, p = arguments[1] || {}, l = 2), (null == p || "object" !== (void 0 === p ? "undefined" : i(p)) && "function" != typeof p) && (p = {}); l < s; ++l) {
            if (null != (n = arguments[l])) for (e in n) {
              c = p[e], p !== (f = n[e]) && (d && f && (t(f) || (u = o(f))) ? (u ? (u = !1, y = c && o(c) ? c : []) : y = c && t(c) ? c : {}, p[e] = r(d, y, f)) : void 0 !== f && (p[e] = f));
            }
          }return p;
        }var n = Object.prototype.hasOwnProperty,
            e = Object.prototype.toString,
            i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (o) {
          return typeof o === 'undefined' ? 'undefined' : _typeof(o);
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o === 'undefined' ? 'undefined' : _typeof(o);
        };return r;
      });
    });

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

    var classCallCheck$$1 = function classCallCheck$$1(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass$$1 = function () {
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

    /**
     * popup 浮层
     */
    var defaultOptions = {
      container: '#container',
      fixedElement: '',
      title: '',
      content: '',
      onShow: $.noop,
      onHide: $.noop,
      classes: {
        wrap: '',
        mask: 'ui-overlay--hidden',
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

    // 浮层高度由内容决定，最高时距离屏幕顶端296px，标题高度为104px
    function calcContentHeight() {
      return window.innerHeight - (296 + 104) / 2 + 'px';
    }

    var Popup = function () {
      /**
       * Create a Popup
       * @param {object} options 配置项
       */
      function Popup(options) {
        classCallCheck$$1(this, Popup);

        this.options = extend(defaultOptions, options);
        this._init();
      }

      /**
       * 初始化
       */

      createClass$$1(Popup, [{
        key: '_init',
        value: function _init() {
          this.evtHandler = {};
          this.$el = $(anonymous(this.options));
          this.$el.find(selectors.content).css('max-height', calcContentHeight());
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
          this.$el.find(selectors.mask).addClass(modifyClasses.overlayhidden);
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
            _this3.$el.find(selectors.mask).removeClass(modifyClasses.overlayhidden);
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
        key: 'updateContent',
        value: function updateContent(content) {
          this.options.content = content;
          this.$el.find(selectors.content).html(content);
          return this;
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
  });
});

var extend = createCommonjsModule(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
});

function anonymous(it
/**/) {
  var out = '<div class="ui-picker__content"> <div class="ui-picker__group"> <div class="ui-picker__mask"></div> <div class="ui-picker__list"> ';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <div class="ui-picker__list-item" data-id="' + item.id + '">' + item.name + '</div> ';
    }
  }out += ' </div> </div></div>';return out;
}

function anonymous$1(it
/**/) {
  var out = '<div et="click:close" class="ui-popup__fn-button ui-popup__fn-button--left"><i class="ui-icon-close"></i></div>' + it.title + '<div et="click:confirm" class="ui-popup__fn-button ui-popup__fn-button--hl">确定</div>';return out;
}

/* eslint-disable */

var getOffsetY = function getOffsetY(e) {
  return e.changedTouches[0].pageY;
};

var sign = function sign(x) {
  return (x > 0) - (x - 0) || +x;
};
var windowHeight = window.innerHeight;
var defaultOptions = {
  title: '',
  data: [],
  selectedIndex: null,
  onChange: $.noop,
  onConfirm: $.noop,
  offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
  rowHeight: 40, // 列表每一行的高度
  bodyHeight: 8 * 30, // picker的高度，用于辅助点击滚动的计算
  popup: {
    container: 'body',
    title: anonymous$1({ text: '' }),
    classes: {
      wrap: 'ui-picker',
      mask: 'ui-overlay--hidden',
      title: 'ui-picker__title',
      content: 'ui-picker__content-wrap'
    }
  }
};

var Picker = function () {
  /**
   * @constructor
   * @param {Object} options
   *
   * data 选项数据
   * selectedIndex 提前选中的选项
   * container 容器
   * onChange 选中的值发生改变时的回调函数
   * onConfirm 点击确认按钮时的回调函数
   */
  function Picker(options) {
    classCallCheck(this, Picker);

    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  createClass(Picker, [{
    key: '_init',
    value: function _init() {
      this.data = this.options.data;
      this.options.popup.content = anonymous({
        list: this.data
      });

      this.options.popup.title = anonymous$1({ title: this.options.title });
      this.popup = new bundle(this.options.popup);

      // 给列表添加自定义滚动
      this.$list = this.popup.$el.find('.ui-picker__list');
      this.$content = this.popup.$el.find('.ui-picker__content');
      this._scroll(this.$content);

      this.start = 0;
      this.startTime = 0;
      this.points = [];
      this.end = 0;
      this.endTime = 0;
      this.translate = 0;

      this.selectedIndex = null;
      this.selectedItem = null;

      this._bindEvent();
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      this.popup.registerHandler('confirm', this._onConfirm.bind(this));
    }
  }, {
    key: '_onStart',
    value: function _onStart(e) {
      this.start = getOffsetY(e);
      this.startTime = Date.now();
    }
  }, {
    key: '_onMove',
    value: function _onMove(e) {
      e.preventDefault();
      this.startTime = Date.now();
      var y = getOffsetY(e);
      this.points.push({ time: Date.now(), offset: y });
      if (this.points.length > 40) {
        this.points.shift();
      }

      this.$list.css({
        '-webkit-transition-duration': '0s',
        '-webkit-transform': 'translate3d(0, ' + (this.translate + y - this.start) + 'px, 0)'
      });
    }
  }, {
    key: '_onEnd',
    value: function _onEnd(e) {
      // 判断touchend和最后一次touchmove的间隔是否大于临界值
      // 小于临界值则保持惯性再滑动一段时间
      // 大于临界值则停止滑动
      if (!this.start) {
        return;
      }

      this.endTime = Date.now();
      this.end = getOffsetY(e);
      var relativeY = windowHeight - this.options.bodyHeight / 2;

      if (this.endTime - this.startTime > 100) {
        // if (Math.abs(this.end - this.start) > 10) {
        this._stop(this.end - this.start);
        // }
        // else {
        //   this._stop(relativeY - this.end);
        // }
      } else {
        // if (Math.abs(this.end - this.start) > 10) {
        var len = this.points.length;
        var endPos = len - 1;
        var startPos = endPos;

        // 找到100ms内最近的哪个点
        for (var i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
          startPos = i;
        }

        // if (startPos == endPos) {
        //   this._stop(0);
        // }
        // else {
        var ep = this.points[endPos];
        var sp = this.points[startPos];
        var t = ep.time - sp.time;
        var s = ep.offset - sp.offset;
        var v = s / t;
        var diff = v * 150 + (this.endTime - this.startTime);

        var move = this.end - this.start;
        move = sign(diff) === sign(move) ? diff + move : move;
        this._stop(move);
        // }
        // }
        // else {
        //   this._stop(relativeY - this.end);
        // }
      }

      this.start = 0;
    }
  }, {
    key: '_onConfirm',
    value: function _onConfirm() {
      this.options.onConfirm(this.selectedItem);
      this.hide();
    }
  }, {
    key: '_stop',
    value: function _stop(diff) {
      // 1.计算出最接近哪行
      // 2.判断顶部和底部边界条件
      // 3.执行动画
      // 4.动画执行完成 onChange回调
      this.translate += diff;

      this.translate = Math.round(this.translate / this.options.rowHeight) * this.options.rowHeight;
      var max = (this.options.offset - 1) * this.options.rowHeight;
      var min = -(this.options.rowHeight * (this.data.length - this.options.offset));

      if (this.translate > max) {
        this.translate = max;
      }

      if (this.translate < min) {
        this.translate = min;
      }

      this.$list.css({
        '-webkit-transition-duration': '300ms',
        '-webkit-transform': 'translate3d(0, ' + this.translate + 'px, 0)'
      });

      var index = this.options.offset - this.translate / this.options.rowHeight - 1;
      this.options.onChange(this.data[index], index);
      this.selectedItem = this.data[index];
      this.selectedIndex = index;
    }
  }, {
    key: '_scroll',
    value: function _scroll($el) {
      $el.on('touchstart', this._onStart.bind(this));
      $el.on('touchmove', this._onMove.bind(this));
      $el.on('touchend', this._onEnd.bind(this));
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.popup.hide();
    }
  }, {
    key: '_setDefaultSelect',
    value: function _setDefaultSelect() {
      // 设置默认选中
      var current = Math.floor(this.data.length / 2);
      if (this.selectedIndex) {
        this.translate = (this.options.offset - this.selectedIndex - 1) * this.options.rowHeight;
      } else {
        this.translate = (this.options.offset - current - 1) * this.options.rowHeight;
        this._stop(0);
      }

      this.$list.css({
        '-webkit-transform': 'translate3d(0, ' + this.translate + 'px, 0)'
      });
    }
  }, {
    key: 'show',
    value: function show() {
      this._setDefaultSelect();
      this.popup.show();
      // this._scroll(this.$list);
    }
  }]);
  return Picker;
}();

return Picker;

})));
