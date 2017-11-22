(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CouponSelect = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var extend = createCommonjsModule(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
});

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

function anonymous(it
/**/) {
  var out = '<div class="ui-coupon-select__list"> ';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <div class="ui-coupon-item" et="click:change"> <div class="ui-coupon-item__up"> <div class="ui-coupon-item__up-left"> <span class="ui-coupon-item__value ';if (('' + item.value).length > 3) {
        out += 'ui-coupon-item__value--small';
      }out += '">' + item.value + '</span><span class="ui-coupon-item__unit">' + item.unit + '</span> </div> <div class="ui-coupon-item__up-right"> <div class="ui-coupon-item__title">' + item.name + '</div> ';if (item.useInfo) {
        out += ' <div class="ui-coupon-item__useinfo">' + item.useInfo + '</div> ';
      }out += ' <div class="ui-coupon-item__usage">' + item.usage + '</div> </div> </div> <div class="ui-cutting-line"></div> <div class="ui-coupon-item__down"> <p class="ui-coupon-item__valid">有效期至' + item.expired_time + '</p> <i class="ui-coupon-item__icon ui-icon-agree--unchecked ';if (it.selected == item.cid) {
        out += 'ui-icon-agree--checked';
      }out += '"></i> </div> </div> ';
    }
  }out += ' <div class="ui-btn ui-coupon-select__notuse" et="click:change">' + it.notUseDesc + '</div></div>';return out;
}

function anonymous$1(it
/**/) {
  var out = '';if (it.isShowHelp) {
    out += '<div class="ui-popup__fn-button ui-popup__fn-button--left" et="click:help"><i class="ui-icon-help"></i></div>';
  }out += '<div>' + it.title + '</div>';return out;
}

var couponMap = {
  5: {
    value: function value() {
      return this.detail.value / 10;
    },

    unit: '折',
    useInfo: function useInfo() {
      return '\u5DF2\u62B5\u6263' + (this.detail.total_max_cnt - this.detail.total_remain_cnt) + '\u6B21,\u5269\u4F59' + this.detail.total_remain_cnt + '\u6B21';
    }
  },
  4: {
    value: function value() {
      return Math.floor(this.detail.remain_amt / 100);
    },

    unit: '元',
    useInfo: function useInfo() {
      var used = ((this.detail.total_amt - this.detail.remain_amt) / 100).toFixed(2);
      var rest = (this.detail.remain_amt / 100).toFixed(2);
      return '\u5DF2\u4F7F\u7528' + used + '\u5143,\u5269\u4F59' + rest + '\u5143';
    }
  },
  default: {
    value: function value() {
      return this.amount / 100;
    },

    unit: '元',
    useInfo: function useInfo() {
      return '\u6EE1' + (this.amountVal ? parseInt(this.amountVal / 100, 10) : 0) + '\u5143\u53EF\u7528';
    }
  }
};

var CouponItem = function () {
  function CouponItem(options) {
    classCallCheck(this, CouponItem);

    $.extend(this, options);
    this.currentValue = couponMap[this.type_id] || couponMap.default;
  }

  createClass(CouponItem, [{
    key: 'unit',
    get: function get$$1() {
      return this.currentValue.unit;
    },
    set: function set$$1(val) {
      this.currentValue.unit = val;
    }
  }, {
    key: 'value',
    get: function get$$1() {
      return this.currentValue.value.call(this);
    }

    // set value(val) {
    //   return;
    // }

  }, {
    key: 'useInfo',
    get: function get$$1() {
      return this.currentValue.useInfo.call(this);
    }

    // set useInfo(val) {
    //   return;
    // }

  }]);
  return CouponItem;
}();

function findIndex(array, predicate) {
  var index = -1;
  var len = array.length;

  while (++index < len) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

/**
 * 红包选择器
 */
var classes = {
  icon: 'ui-coupon-item__icon',
  selected: 'ui-icon-agree--checked',
  unselected: 'ui-icon-agree--unchecked'
};

var defaultOptions = {
  tpl: anonymous,
  data: [],
  selectedVal: null,
  onChange: $.noop,
  onHelp: $.noop,
  isShowHelp: false,
  title: '使用红包/加息券',
  notUseDesc: '不使用，就是任性',
  popup: {
    container: 'body',
    title: anonymous$1({ title: '使用红包/加息券', isShowHelp: 'false' }),
    showClose: true,
    classes: {
      wrap: 'ui-coupon-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-coupon-select__title ui-popup__title--noborder',
      content: 'ui-coupon-select__content'
    }
  }
};

var CouponSelect = function () {
  function CouponSelect(options) {
    classCallCheck(this, CouponSelect);

    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  createClass(CouponSelect, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      this.data = this.options.data.map(function (i) {
        return new CouponItem(i);
      });

      // 设置选中
      this.currentSelectVal = this.options.selectedVal || 0;
      var selectedIndex = findIndex(this.data, function (item) {
        return item.cid === _this.options.selectedVal;
      });
      this.currentSelectIndex = selectedIndex > -1 ? selectedIndex : this.data.length;

      this.options.popup.title = anonymous$1({ title: this.options.title, isShowHelp: this.options.isShowHelp });
      this.options.popup.content = this.options.tpl({
        list: this.data,
        selected: this.options.selectedVal,
        notUseDesc: this.options.notUseDesc
      });

      this.popup = new bundle(this.options.popup);
      this._bindEvent();
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      this.popup.registerHandler('change', this._onClick.bind(this));
      this.popup.registerHandler('help', this._onHelp.bind(this));
    }
  }, {
    key: '_onClick',
    value: function _onClick(node) {
      var index = node.index();
      if (index !== this.data.length && index === this.currentSelectIndex) {
        return;
      }

      this.currentSelectIndex = index;
      node.siblings().find('.' + classes.icon).removeClass(classes.selected);
      if (index === this.data.length) {
        this.currentSelectVal = 0;
      } else {
        node.find('.' + classes.icon).addClass(classes.selected);
        this.currentSelectVal = this.data[index].cid;
      }

      this.options.onChange(this.currentSelectVal);
      this.hide();
    }
  }, {
    key: '_onHelp',
    value: function _onHelp() {
      this.options.onHelp.call(this);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.popup.hide();
    }
  }, {
    key: 'show',
    value: function show() {
      this.popup.show();
    }
  }]);
  return CouponSelect;
}();

return CouponSelect;

})));
//# sourceMappingURL=bundle.dev.js.map
