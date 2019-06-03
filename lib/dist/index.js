(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UI = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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

var bundle = createCommonjsModule$$1(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$$1, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$$1 !== 'undefined' ? commonjsGlobal$$1 : typeof self !== 'undefined' ? self : {};

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
  var out = '<div class="ui-bank-select__list"> ';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <div et="click:select" class="ui-bank-select__list-item ';if (item.disabled) {
        out += 'ui-bank-select__list-item--disabled';
      }out += '" data-id=' + item.bankCode + '> <div class="ui-icon-wrap"> <img class="ui-icon-wrap__icon " src="' + item.bankImg + '" /> <div class="ui-icon-wrap__text"> <p>' + item.text1 + '</p> ';if (item.text2) {
        out += '         <p class="ui-text ui-text--intro">' + item.text2 + '</p> ';
      }out += ' </div>     </div> <div class="ui-info-item__desc-right"><i ';if (item.icon) {
        out += 'class="' + item.icon + '"';
      }out += '></i></div> </div> ';
    }
  }out += '</div>';return out;
}

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

var img = new Image();img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAB8VJREFUeAHtXEtsE0cYnlk7DhAeNuGAKoKgByoh0dJwQaihUhJAPNRDW6oiVRWXSqhClSgpEpxyAonykNoI9QhVK6pSKg68cSKVVIhLKFVPcCgoQRUHgh1CgNjY2+8bvPYm2ZfXDl47HsnZ8cw/M9//Zeafx85vKV5j0Lu7tZEbN97Vs9l3dF1/SwrxFppfLnR9vpByHuL8MIwibRRpTxC/pwtxR0p5R2ra3wvWrftLdndnldRr+AOM0xvGNmx4I6XrH0HhDnzeh7LRUloE4CSI+wOf3oiUZ5uuXfuvlPrcyk4LQfrOnbMSQ0Mk5XP85zvRWzQ3IH7yUXcWdcdB1o+xlpaz8uTJF37qcSpTVoL07dvnjiQSu7LZ7F40utip4WnIe6hp2tEFsdgP8syZp+WqvywEwbaEk/39XwHUAfxHm8sFzk896FXDKHcw2tb2HWzVSz91mMuUTNDjzs73MJRO4LPKXHHF41L+g6H35cJ4/M9SsPgmCMMpkhwePoLGd8Pw+q6nFPBuZQEK0ERPtLm5C8Mu5SZvle9LsWRn55uYqn9F62usKg1aGpQcwBLhk2g8/m+x2IqeXZIbN7Zj6rhVLeSQEGIlZmKfVoKS7e3b9UzmEuzNgmIbqrg8MBM7dSgGi+cehGH1hS7lL5ilIsU0ECRZYqcO1MUrLk82SPWcV+R4JtQrgErIcYEpdf3TaF/fGbf2XQniuGXXrOaeY0UCSErJUGhz9OrVPqt8I82RIM5WNG5VaXMMDZ2eUo5oUrY6zW62Q4brHE7lNUsOiaPh5nIFutrxaEsQF4HVNJXbKeiWTh1zC15LUcshxu2DzGavo7BlvmVNVZwIJXHeoK232pZM6UHceEL8xEwhh/9XpSt1pu6TwpQEtSv3uPGMbN0qGjdvFqFly4ScPXtS1ZX9qj9/LjL374vxS5dE6sIFdzDQOXciccwsPGEI8Twn+fjxfbcjCxmLiaYDB0RDa6u5rsDG07duibGDB4WeSDhi5FFJdOHCZebzpAlDjIddbuSwhWoih3j5j2zav59Rx0DdyYFZKN+D1DHp4OA9ZDqeBEYwpJq6uvJ1vLx7V4yfPy/0YZ5TBSfI5mbRuG2bCK9YkQc1duSISGHIuYSHsaVLlxvHt3kbpM6QXchhxY1btuTrJzmju3cLkcnk04IUSV2+LOb19ORJInYPBC3OcfEzdSkMMRywe1GOBtkI4zR+ASVHYQQ2hTEH2Izd0MHyaeJCEcRXMzBQnZbCkxLlnDn5FP3Ro3w8qBEzRjN2J7zkgpxQRhGUymY/hoEq9Can0jMgj1yod3kGQVgYdswAvYtTMceJxtfBKLm+uNIzQJpvgcFNWL0r9/k6uKG9XYRM02gQadOWLPEFC9uPKLkJ8yKBrxpQqLGjtkcmudFgkHjDoh4sGCA3GpbSdYIsyGESuaGBXm6TX08GNxqm+Pl1JmwYADdhvOCfB5JsJJyTx3t7RfbBA2ehCudyFvM9mYAbblaNa29Fq5Lu6xPpmzeLLvc6CzSsXeufIHBT3164/LdI0KiLzEzOHqWRrhNk1wXAjQYjzau29WDFALihkeYx69tW+UFK456PBtdL0J88EePnznkRdZO5F8YEf8dNquL5DQ3qRUGopcUTlLHDhz3JuQmRG7y7l4EnaNaOHcIrOenbt0XqyhU33T3lkxuN1/s9SVdIiAs9EuQl6KmUeHb8uBdRTzLkRlO+D7zeH9AwZ88eISO2ly8moH5x+nTZVvbYqCbJjZZzDLk+oaWAfIls2iQaVq/2hCYzNCRIUNkC/EHIDWcx7OtlL9ZDH5St8jJVxPf9z0+d8lSb2vKk055kPQmREwRFUETTfsObjeNBe7NRpqnaEx9mIRjnLD2JmKb2YnQpAjlxs5BdXH/2LJ8lFy3Kx4MaMWM0Y3fCSy4MN6vCZhUuRU6FjDxeKTFCI66/iFDI+Bq8J7ApjDlkZuyOYE1cvLJBkKa/VWJwkL4XjpcXxi9eFOGVK1X9vBjAd9/VcnmB2D2Eh+TCkMNsVgi41doFX69vCynWsblYqTasqQo3jbwC6YEB8XTfvvx3uwh8zr7BrVd2FBUKQwxflTPaK3+rXLb1Y+zQIcFLSdUS1AUqYHYLMM7D5MAsN6EHMSPR0fE1jNRRs5BdvKau4EFJELQ31tt7zKzvFIJ4kTHR38/L46vMgjUfhwNerK2tdbKX4hSCSET9GnChO0ywQUZy7r5wj/F9Bjx7rO5IU29Lgpih3Bjhqcd4LQcMoQHqaqej5RAzhOvOLA49iCTRC0YLhT6EdfflEGsQHcQndaJuTp4+xG07xAyl6E8F57PPUGHWSKv2J3WhTm6+YtTTlSAK0TMPle6qBZIUOdDFi7chdXe0QRQwh5xr5k9YSHo74jMXDkAc5KRUz/HgimnALYogFlJu4ZnM71hIVpfnM70LaXNcXDANYoynpyFmCPPJBujGyOnRnB7kOLEq18siyaFORRPEQrT8WDusQ8Pf4+Pv7gwrmuZAbMRIrG6zlR0UlC8t1PqPm/jqQWZKuURXmzzshGEEh815lYgTAz57iclu+1AMrpJ7kLkxOuTVf2DJzIhNvP4TXTbEWCWrH3mDswyWBbx1vh4WvfQfeRPiutC0eNX+yJsVUUzDEAyNjIys5g12LDar4mcC/wdAtSQM0jsfbgAAAABJRU5ErkJggg==';

/**
 * 银行卡选择器
 */
var classes = {
  selected: 'ui-icon-agree--checked',
  disabled: 'ui-bank-select__list-item--disabled'
};

var defaultOptions = {
  tpl: anonymous,
  data: [],
  selectedVal: null,
  onChange: $.noop,
  onAddCard: $.noop,
  popup: {
    container: 'body',
    title: '选择银行卡',
    showClose: true,
    classes: {
      wrap: 'ui-bank-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-bank-select__title',
      content: 'ui-bank-select__content'
    }
  }
};

var BankSelect = function () {
  function BankSelect(options) {
    classCallCheck(this, BankSelect);

    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  createClass(BankSelect, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      this.data = this.options.data;
      this.data.push({
        bankImg: img.src,
        text1: '添加新的银行卡',
        icon: 'ui-icon-arrow-right'
      });

      // 设置选中
      var selectedIndex = findIndex(this.data, function (item) {
        return item.bankCode === _this.options.selectedVal;
      });
      var currentBank = selectedIndex > -1 ? this.data[selectedIndex] : null;
      if (currentBank) {
        currentBank.icon = classes.selected;
        this.currentSelect = currentBank.bankCode;
      }

      this.options.popup.content = this.options.tpl({
        list: this.data,
        selected: this.options.selectedVal
      });

      this.popup = new bundle(this.options.popup);
      this._bindEvent();
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      this.popup.registerHandler('select', this._select.bind(this));
    }
  }, {
    key: '_select',
    value: function _select(node) {
      if (node.hasClass(classes.disabled)) {
        return;
      }

      var bankCode = node.attr('data-id');
      if (bankCode === this.currentSelect) {
        return;
      }

      if (node.index() === this.data.length - 1) {
        this.options.onAddCard();
      } else {
        node.find('i').addClass(classes.selected);
        node.siblings().find('i').removeClass(classes.selected);
        this.currentSelect = bankCode;
        this.options.onChange(bankCode);
      }

      this.hide();
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
  return BankSelect;
}();

return BankSelect;

})));
});

var bundle$1 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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

var bundle = createCommonjsModule$$1(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$$1, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$$1 !== 'undefined' ? commonjsGlobal$$1 : typeof self !== 'undefined' ? self : {};

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
});

var bundle$2 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
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

var bundle = createCommonjsModule$$1(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$$1, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$$1 !== 'undefined' ? commonjsGlobal$$1 : typeof self !== 'undefined' ? self : {};

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

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
});

function anonymous(it
/**/) {
  var out = '';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <div class="ui-picker__list-item" data-id="' + item.value + '">' + item.label + '</div>';
    }
  }return out;
}

/* eslint-disable */

// const windowHeight = window.innerHeight;
var getOffsetY$1 = function getOffsetY(e) {
  return e.changedTouches[0].pageY;
};

var sign$1 = function sign(x) {
  return (x > 0) - (x - 0) || +x;
};

var Scroll = function () {
  function Scroll($el, options) {
    classCallCheck(this, Scroll);

    this.$el = $el;
    this.options = $.extend({
      items: [], // 数据
      scrollable: '.ui-picker__list', // 滚动的元素
      offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
      rowHeight: 40, // 列表每一行的高度
      onChange: $.noop, // onChange回调
      temp: null, // translate的缓存
      bodyHeight: 7 * 40 // picker的高度，用于辅助点击滚动的计算
    }, options);

    this._init();
  }

  createClass(Scroll, [{
    key: '_init',
    value: function _init() {
      this.items = this.options.items;

      this.start = 0;
      this.startTime = 0;
      this.points = [];
      this.end = 0;
      this.endTime = 0;
      this.translate = 0;

      this.selectedIndex = null;
      this.selectedItem = null;

      this.$list = this.$el.find('.ui-picker__list');
      var itemHtml = anonymous({ list: this.items });
      this.$list.html(itemHtml);

      if (this.options.temp && this.options.temp < this.options.items.length) {
        var index = this.options.temp;
        this.options.onChange(this.options.items[index], index);
        this.translate = (this.options.offset - index - 1) * this.options.rowHeight;
      }
      // else {
      this._stop(0);
      // }

      this._addScroll();
    }
  }, {
    key: '_addScroll',
    value: function _addScroll() {
      this.$scrollable = this.$el.off().on('touchstart', this._onStart.bind(this)).on('touchmove', this._onMove.bind(this)).on('touchend', this._onEnd.bind(this)).find(this.options.scrollable);
    }
  }, {
    key: '_onStart',
    value: function _onStart(e) {
      this.start = getOffsetY$1(e);
      this.startTime = Date.now();
    }
  }, {
    key: '_onMove',
    value: function _onMove(e) {
      e.preventDefault();
      this.startTime = Date.now();
      var y = getOffsetY$1(e);
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
      this.end = getOffsetY$1(e);
      // const relativeY = windowHeight - (this.options.bodyHeight / 2);

      if (this.endTime - this.startTime > 100) {
        this._stop(this.end - this.start);
      } else {
        var len = this.points.length;
        var endPos = len - 1;
        var startPos = endPos;

        // 找到100ms内最近的哪个点
        for (var i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
          startPos = i;
        }

        var ep = this.points[endPos];
        var sp = this.points[startPos];
        var t = ep.time - sp.time;
        var s = ep.offset - sp.offset;
        var v = s / t;
        var diff = v * 150 + (this.endTime - this.startTime);

        var move = this.end - this.start;
        move = sign$1(diff) === sign$1(move) ? diff + move : move;
        this._stop(move);
      }

      this.start = 0;
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
      var min = -(this.options.rowHeight * (this.items.length - this.options.offset));

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
      console.log(index);
      this.options.onChange(this.items[index], index);
      this.selectedItem = this.items[index];
      this.selectedIndex = index;
    }
  }]);
  return Scroll;
}();

var Result = function () {
  function Result(item) {
    classCallCheck(this, Result);

    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
      item = {
        label: item,
        value: item
      };
    }

    $.extend(this, item);
  }

  createClass(Result, [{
    key: 'toString',
    value: function toString() {
      return this.value;
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.value;
    }
  }]);
  return Result;
}();

/* eslint-disable */

var regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
var constraints = [[1, 31], [1, 12], [0, 6]];

/**
 * Schedule
 */

var Schedule = function () {
    function Schedule(fields, start, end) {
        classCallCheck(this, Schedule);

        /**
         * dayOfMonth
         * @type {Array}
         */
        this._dates = fields[0];

        /**
         * month
         * @type {Array}
         */
        this._months = fields[1];

        /**
         * dayOfWeek
         * @type {Array}
         */
        this._days = fields[2];

        /**
         * start
         * @type {Date}
         */
        this._start = start;

        /**
         * end
         * @type {Date}
         */
        this._end = end;

        /**
         * cursor
         * @type {Date}
         * @private
         */
        this._pointer = start;
    }

    createClass(Schedule, [{
        key: '_findNext',
        value: function _findNext() {
            var next = void 0;
            while (true) {
                if (this._end.getTime() - this._pointer.getTime() < 0) {
                    throw new Error('out of range, end is ' + this._end + ', current is ' + this._pointer);
                }

                var month = this._pointer.getMonth();
                var date = this._pointer.getDate();
                var day = this._pointer.getDay();

                if (this._months.indexOf(month + 1) === -1) {
                    this._pointer.setMonth(month + 1);
                    this._pointer.setDate(1);
                    continue;
                }

                if (this._dates.indexOf(date) === -1) {
                    this._pointer.setDate(date + 1);
                    continue;
                }

                if (this._days.indexOf(day) === -1) {
                    this._pointer.setDate(date + 1);
                    continue;
                }

                next = new Date(this._pointer);

                break;
            }
            return next;
        }

        /**
         * fetch next data
         */

    }, {
        key: 'next',
        value: function next() {
            var value = this._findNext();
            // move next date
            this._pointer.setDate(this._pointer.getDate() + 1);
            return {
                value: value,
                done: !this.hasNext()
            };
        }

        /**
         * has next
         * @returns {boolean}
         */

    }, {
        key: 'hasNext',
        value: function hasNext() {
            try {
                this._findNext();
                return true;
            } catch (e) {
                return false;
            }
        }
    }]);
    return Schedule;
}();

function parseField(field, constraints) {
    var low = constraints[0];
    var high = constraints[1];
    var result = [];
    var pointer = void 0;

    // * 号等于最低到最高
    field = field.replace(/\*/g, low + '-' + high);

    // 处理 1,2,5-9 这种情况
    var fields = field.split(',');
    for (var i = 0, len = fields.length; i < len; i++) {
        var f = fields[i];
        if (f.match(regex)) {
            f.replace(regex, function ($0, lower, upper, step) {
                // ref to `cron-parser`
                step = parseInt(step) || 1;
                // Positive integer higher than constraints[0]
                lower = Math.min(Math.max(low, ~~Math.abs(lower)), high);

                // Positive integer lower than constraints[1]
                upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower;

                // Count from the lower barrier to the upper
                pointer = lower;

                do {
                    result.push(pointer);
                    pointer += step;
                } while (pointer <= upper);
            });
        }
    }
    return result;
}

/**
 *
 * @param expr
 * @param start
 * @param end
 * @returns {*}
 */
function parse(expr, start, end) {
    var atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
    var fields = [];
    atoms.forEach(function (atom, index) {
        var constraint = constraints[index];
        fields.push(parseField(atom, constraint));
    });
    return new Schedule(fields, start, end);
}

var cron = {
    parse: parse
};

function anonymous$1(it
/**/) {
  var out = '<div class="ui-picker__content"></div>';return out;
}

function anonymous$2(it
/**/) {
  var out = '<div et="click:close" class="ui-popup__fn-button ui-popup__fn-button--left"><i class="ui-icon-close"></i></div>' + it.title + '<div et="click:confirm" class="ui-popup__fn-button ui-popup__fn-button--hl">确定</div>';return out;
}

function anonymous$3(it
/**/) {
  var out = '<div class="ui-picker__group"> <div class="ui-picker__mask"></div> <div class="ui-picker__list"> </div></div>';return out;
}

/* eslint-disable */

var depthOf = function depthOf(object) {
  var depth = 1;
  if (object.children && object.children[0]) {
    depth = depthOf(object.children[0]) + 1;
  }

  return depth;
};

var defaultOptions = {
  title: '',
  data: [],
  depth: 1,
  defaultValue: [],
  onChange: $.noop,
  onConfirm: $.noop,
  popup: {
    container: 'body',
    title: anonymous$2({ text: '' }),
    classes: {
      wrap: 'ui-picker',
      mask: 'ui-overlay--hidden',
      title: 'ui-picker__title',
      content: 'ui-picker__content-wrap ui-picker__content-wrap--large'
    }
  }
};

var selectors = {
  group: '.ui-picker__group'
};

var Picker = function () {
  /**
   * @constructor
   * @param {Object} options
   *
   * data 选项数据
   * defaultValue 提前选中的选项
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
    key: 'destroy',
    value: function destroy() {
      this.popup.$el.remove();
      this.data = [];
      this.popup = null;
    }
  }, {
    key: '_init',
    value: function _init() {
      this.result = [];
      this.data = this.options.data;

      this.options.popup.content = anonymous$1({});
      this.options.popup.title = anonymous$2({ title: this.options.title });
      this.popup = new bundle(this.options.popup);

      this.$content = this.popup.$el.find('.ui-picker__content');
      var _depth = this.options.depth || depthOf(this.data);
      var groupHtml = '';
      while (_depth--) {
        groupHtml += anonymous$3();
      }
      this.$content.html(groupHtml);

      this.lineTemp = [];
      // 添加自定义滚动
      this._scroll(this.data, 0);

      this._bindEvent();
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      this.popup.registerHandler('confirm', this._onConfirm.bind(this));
    }
  }, {
    key: '_onConfirm',
    value: function _onConfirm() {
      this.options.onConfirm(this.result);
      this.hide();
    }
  }, {
    key: '_scroll',
    value: function _scroll(items, level) {
      var that = this;
      if (that.lineTemp[level] === undefined && this.options.defaultValue && this.options.defaultValue[level] !== undefined) {
        // 没有缓存选项，而且存在defaultValue
        var defaultVal = this.options.defaultValue[level];
        var index = 0,
            len = items.length;

        if (_typeof(items[index]) == 'object') {
          for (; index < len; ++index) {
            if (defaultVal == items[index].value) break;
          }
        } else {
          for (; index < len; ++index) {
            if (defaultVal == items[index]) break;
          }
        }
        if (index < len) {
          that.lineTemp[level] = index;
        } else {
          console.warn('Picker has not match defaultValue: ' + defaultVal);
        }
      }

      new Scroll(this.$content.find(selectors.group).eq(level), {
        items: items,
        onChange: function onChange(item, index) {
          if (item) {
            that.result[level] = new Result(item);
          } else {
            that.result[level] = null;
          }

          if (item.children && item.children.length > 0) {
            that.$content.find(selectors.group).eq(level + 1).show;
            that._scroll(item.children, level + 1);
          } else {
            that.$content.find(selectors.group).each(function (index) {
              if (index > level) {
                $(this).hide();
              }
            });

            that.result.splice(level + 1);
            that.options.onChange(that.result);
          }

          if (index < items.length) {
            that.lineTemp[level] = index;
          } else {
            console.error('illegal index', index, items.length);
          }
        },

        offset: that.options.offset,
        temp: that.lineTemp[level]
      });
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
  return Picker;
}();

var findBy = function findBy(array, key, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    var obj = array[i];
    if (obj[key] == value) {
      return obj;
    }
  }
};

var generageDate = function generageDate(cronFmt, start, end) {
  var date = [];
  var interval = cron.parse(cronFmt, start, end);
  var obj = void 0;
  do {
    obj = interval.next();

    var year = obj.value.getFullYear();
    var month = obj.value.getMonth() + 1;
    var day = obj.value.getDate();

    var Y = findBy(date, 'value', year);
    if (!Y) {
      Y = {
        label: year + '年',
        value: year,
        children: []
      };
      date.push(Y);
    }
    var M = findBy(Y.children, 'value', month);
    if (!M) {
      M = {
        label: month + '月',
        value: month,
        children: []
      };
      Y.children.push(M);
    }
    M.children.push({
      label: day + '日',
      value: day
    });
  } while (!obj.done);

  return date;
};

var today = function today() {
  var today = new Date();
  return [today.getFullYear(), today.getMonth() + 1, today.getDate()];
};

var defaults = {
  onChange: $.noop,
  onConfirm: $.noop,
  start: '1970-01-01',
  end: '2018-01-01',
  defaultValue: today(),
  cron: '* * *',
  depth: 3,
  offset: 4
};

var index = function (options) {
  $.extend(defaults, options);
  defaults.start = new Date(defaults.start.replace(/-/g, '/'));
  defaults.end = new Date(defaults.end.replace(/-/g, '/'));
  defaults.data = generageDate(defaults.cron, defaults.start, defaults.end);

  return new Picker(defaults);
};

return index;

})));
});

var bundle$3 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dialog = createCommonjsModule$$1(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal$$1, (function () { 'use strict';

function anonymous(it
/*``*/) {
  var out = '<div class="' + it.elementCls.el + '"> ';if (it.mask) {
    out += ' <div class="' + it.elementCls.mask + '"></div> ';
  }out += ' <div class="' + it.elementCls.wrap + '" style="position:absolute;top:' + it.top + 'px;"> ';if (it.title) {
    out += ' <div class="' + it.elementCls.head + '"> ' + it.title + ' ';if (it.showClose) {
      out += ' <span class="' + it.elementCls.close + '" et="click:closeDialog">&#10005;</span> ';
    }out += ' </div> ';
  }out += ' ';if (it.content) {
    out += ' <div class="' + it.elementCls.body + '">' + it.content + '</div> ';
  }out += ' ';if (it.btns.length > 0) {
    out += ' <div class="' + it.elementCls.foot + '"> ';var arr1 = it.btns;if (arr1) {
      var value,
          index = -1,
          l1 = arr1.length - 1;while (index < l1) {
        value = arr1[index += 1];out += ' <span class="' + it.elementCls.btn + ' ' + (value.css ? value.css : '') + '" et="click:btnCallback' + index + '">' + value.text + '</span> ';
      }
    }out += ' </div> ';
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

/**
 * lib
 */

function noop() {}

var defaultOptions = {
  title: '标题', // 标题内容
  visible: true, // 默认显示
  showClose: true, // 是否显示close按钮
  content: '内容', // 显示的内容
  btns: [], // 按钮列表{ text: '', callback: function(){}, css:'' }
  mask: true, // 是否显示mask
  onClose: noop,
  onShow: noop,
  onDispose: noop,
  elementCls: {
    el: 'mod-dialog',
    mask: 'overlay',
    wrap: 'dialog-wrap',
    close: 'close-btn',
    head: 'dialog-head',
    body: 'dialog-body',
    foot: 'dialog-foot',
    btn: 'dialog-btn'
  }
};

var Dialog = function () {
  function Dialog() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Dialog);

    this.evtHandler = {};
    this.options = $.extend(true, {}, defaultOptions, options);

    this.dialogNode = null;
    this._init();
    this._bindEvent();

    if (this.options.visible) {
      this.show();
    }
  }

  /**
   * 初始化
   */


  createClass(Dialog, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      var options = this.options;
      var wh = window.innerHeight;

      // 判断按钮是否需要
      options.btns.forEach(function (btn, i) {
        // 给evtHandler注册事件回调
        _this.evtHandler['btnCallback' + i] = btn.callback;
      });

      this.dialogNode = $(anonymous(options));
      this.dialogNode.css({
        display: 'none',
        visibility: 'hidden'
      });
      $('body').append(this.dialogNode);

      // 判断dialog高度
      var modDialogNode = $('.' + options.elementCls.wrap);
      var dh = modDialogNode[0].scrollHeight;

      // 浮层高度小于窗口高度的情况下
      if (dh < wh) {
        modDialogNode.css({
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          '-webkit-transform': 'translateX(-50%) translateY(-50%)'
        });
      }

      this.dialogNode.css({
        visibility: 'visible'
      });

      // 注册关闭事件处理函数
      this.registerHandler('closeDialog', this.close.bind(this));
    }

    /**
     * 显示
     */

  }, {
    key: 'show',
    value: function show() {
      this.options.onShow(this.dialogNode);
      this.dialogNode.css({
        display: 'block'
      });
    }

    /**
     * 关闭
     */

  }, {
    key: 'close',
    value: function close() {
      this.dialogNode.css({
        display: 'none'
      });
      this.options.onClose();
    }

    /**
     * 销毁
     */

  }, {
    key: 'dispose',
    value: function dispose() {
      if (!this.dialogNode) {
        return;
      }

      var options = this.options;

      this.dialogNode.off('click');
      this.dialogNode.remove();
      this.dialogNode = null;
      options.onDispose();
      this.evtHandler = {};
    }

    /**
     * 更新内容
     * @param {String} content 内容
     */

  }, {
    key: 'updateContent',
    value: function updateContent(content) {
      var options = this.options;
      this.dialogNode.find('.' + options.elementCls.body).html(content);
    }

    /**
     * 注册事件处理函数
     * @param {String} name 名称
     * @param {Function} handler 函数
     */

  }, {
    key: 'registerHandler',
    value: function registerHandler(name, handler) {
      if (this.evtHandler[name]) {
        throw new Error('事件处理函数已经存在');
      }

      this.evtHandler[name] = handler;
    }

    /**
     * 事件处理
     */

  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      var _this2 = this;

      this.dialogNode.on('click', function (e) {
        e = e || window.event;
        var tag = e.target.tagName;
        var node = $(e.target);
        var et = node.attr('et');

        if (!et) {
          // 向上找
          while (node[0] && node[0] !== _this2.dialogNode && !et) {
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
          _this2.evtHandler[et.split(':')[1]](node, e);
        }
      });
    }
  }]);
  return Dialog;
}();

return Dialog;

})));
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Dialog 对话框组件
 */

// import dialogTpl from './index.dot';

function noop() {}

var defaultOptions = {
  container: 'body',
  title: '', // 标题内容
  visible: true, // 默认显示
  showClose: true, // 是否显示close按钮
  content: '', // 显示的内容
  btns: [], // 按钮列表{ text: '', callback: function(){}, css:'' }
  mask: true, // 是否显示mask
  onClose: noop,
  onShow: noop,
  onDispose: noop,
  elementCls: {
    el: 'dialogNode',
    mask: 'ui-overlay',
    wrap: 'ui-dialog',
    close: 'ui-dialog__fn-wrap ui-dialog__fn-wrap--close',
    head: 'ui-dialog__title',
    body: 'ui-dialog__content',
    foot: 'ui-dialog__footer',
    btn: 'ui-dialog__btn'
  }
};

var Dialog = function (_LibDialog) {
  inherits(Dialog, _LibDialog);

  function Dialog(options) {
    classCallCheck(this, Dialog);
    return possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, $.extend(true, {}, defaultOptions, options)));
  }

  return Dialog;
}(dialog);

// class Dialog {
//   /**
//    * Create a Dialog
//    * @param {object} options 配置项
//    */
//   constructor(options = {}) {
//     this.evtHandler = {};
//     this.options = $.extend(true, {}, defaultOptions, options);

//     this.dialogNode = null;
//     this._init();
//     this._bindEvent();

//     if (this.options.visible) {
//       this.show();
//     }
//   }

//   /**
//    * 初始化
//    */
//   _init() {
//     const options = this.options;
//     const wh = window.innerHeight;

//     // 判断按钮是否需要
//     options.btns.forEach((btn, i) => {
//       // 给evtHandler注册事件回调
//       this.evtHandler[`btnCallback${i}`] = btn.callback;
//     });

//     this.dialogNode = $(dialogTpl(options));
//     this.dialogNode.css({
//       display: 'none',
//       visibility: 'hidden'
//     });
//     $(options.container).append(this.dialogNode);

//     // 判断dialog高度
//     const modDialogNode = $(`.${options.elementCls.wrap}`);
//     const dh = modDialogNode[0].scrollHeight;

//     // 浮层高度小于窗口高度的情况下
//     if (dh < wh) {
//       modDialogNode.css({
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translateX(-50%) translateY(-50%)',
//         '-webkit-transform': 'translateX(-50%) translateY(-50%)'
//       });
//     }

//     this.dialogNode.css({
//       visibility: 'visible'
//     });

//     // 注册关闭事件处理函数
//     this.registerHandler('closeDialog', this.close.bind(this));
//   }

//   /**
//    * 显示
//    */
//   show() {
//     this.options.onShow(this.dialogNode);
//     this.dialogNode.css({
//       display: 'block'
//     });
//   }

//   /**
//    * 关闭
//    */
//   close() {
//     this.options.onClose();
//     this.dialogNode.css({
//       display: 'none'
//     });
//   }

//   /**
//    * 销毁
//    */
//   dispose() {
//     if (!this.dialogNode) {
//       return;
//     }

//     const options = this.options;

//     this.dialogNode.off('click');
//     this.dialogNode.remove();
//     this.dialogNode = null;
//     options.onDispose();
//     this.evtHandler = {};
//   }

//   /**
//    * 更新内容
//    * @param {String} content 内容
//    */
//   updateContent(content) {
//     const options = this.options;
//     this.dialogNode.find(`.${options.elementCls.body}`).html(content);
//   }

//   /**
//    * 注册事件处理函数
//    * @param {String} name 名称
//    * @param {Function} handler 函数
//    */
//   registerHandler(name, handler) {
//     if (this.evtHandler[name]) {
//       throw new Error('事件处理函数已经存在');
//     }

//     this.evtHandler[name] = handler;
//   }

//   /**
//    * 事件处理
//    */
//   _bindEvent() {
//     this.dialogNode.on('click', (e) => {
//       e = e || window.event;
//       const tag = e.target.tagName;
//       let node = $(e.target);
//       let et = node.attr('et');

//       if (!et) {
//         // 向上找
//         while (node[0] && node[0] !== this.dialogNode && !et) {
//           node = node.parent();
//           et = node.attr('et');
//         }
//         if (!et) {
//           return;
//         }
//       }

//       // 超链接不阻值冒泡
//       tag !== 'A' && e.stopPropagation();
//       // 是对应的事件
//       if (et.indexOf(e.type) === 0) {
//         // 调用事件指定的函数
//         this.evtHandler[et.split(':')[1]](node, e);
//       }
//     });
//   }
// }

// export default Dialog;

return Dialog;

})));
});

var bundle$4 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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

var bundle = createCommonjsModule$$1(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$$1, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$$1 !== 'undefined' ? commonjsGlobal$$1 : typeof self !== 'undefined' ? self : {};

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
  var out = '<div class="ui-license-select__list"> ';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <div et="click:select" class="ui-license-select__list-item ';if (item.val == it.selected) {
        out += 'ui-license-select__list-item--selected';
      }out += '" data-id=' + item.val + '>' + item.abbr + ' <span class="ui-license-select__sub-text">' + item.full + '</span> </div> ';
    }
  }out += '</div>';return out;
}

function anonymous$1(it
/**/) {
  var out = '<div et="click:close" class="ui-popup__fn-button ui-popup__fn-button--left"><i class="ui-icon-close"></i></div><div>选择车牌号</div><div et="click:confirm" class="ui-popup__fn-button ui-popup__fn-button--hl">确定</div>';return out;
}

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
 * 车牌选择器
 */
var classes = {
  selected: 'ui-license-select__list-item--selected'
};

var defaultOptions = {
  tpl: anonymous,
  data: [],
  selectedVal: null,
  onChange: $.noop,
  popup: {
    container: 'body',
    title: anonymous$1(),
    classes: {
      wrap: 'ui-license-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-license-select__title',
      content: 'ui-license-select__content'
    }
  }
};

var LicenseSelect = function () {
  function LicenseSelect(options) {
    classCallCheck(this, LicenseSelect);

    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  createClass(LicenseSelect, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      this.data = this.options.data;
      this.options.popup.content = this.options.tpl({
        list: this.data,
        selected: this.options.selectedVal
      });
      this.popup = new bundle(this.options.popup);

      var selectedIndex = findIndex(this.data, function (item) {
        return item.val === _this.options.selectedVal;
      });
      this.currentSelect = selectedIndex > -1 ? this.data[selectedIndex] : null;

      this._bindEvent();
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      this.popup.registerHandler('select', this._select.bind(this));
      this.popup.registerHandler('confirm', this._confirm.bind(this));
    }
  }, {
    key: '_select',
    value: function _select(node) {
      if (node.hasClass(classes.selected)) {
        return;
      }

      node.addClass(classes.selected).siblings().removeClass(classes.selected);
      this.currentSelect = this.data[node.index()];
    }
  }, {
    key: '_confirm',
    value: function _confirm() {
      this.options.onChange(this.currentSelect);
      this.hide();
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
  return LicenseSelect;
}();

return LicenseSelect;

})));
});

var bundle$5 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
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

var bundle = createCommonjsModule$$1(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$$1, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$$1 !== 'undefined' ? commonjsGlobal$$1 : typeof self !== 'undefined' ? self : {};

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

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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
});

var bundle$6 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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
    classCallCheck(this, Popup);

    this.options = extend(true, defaultOptions, options);
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

})));
});

var bundle$7 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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

var bundle = createCommonjsModule$$1(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$$1, function () {
    'use strict';

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$$1 !== 'undefined' ? commonjsGlobal$$1 : typeof self !== 'undefined' ? self : {};

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

var Result = function () {
  function Result(item) {
    classCallCheck(this, Result);

    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
      item = {
        label: item,
        value: item
      };
    }

    $.extend(this, item);
  }

  createClass(Result, [{
    key: 'toString',
    value: function toString() {
      return this.value;
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.value;
    }
  }]);
  return Result;
}();

function anonymous(it
/**/) {
  var out = '<div class="ui-region-select__chosen-wrap"> <div class="ui-region-select__chosen-list ui-ov-h"> </div></div><div class="ui-region-select__list-wrap"></div>';return out;
}

function anonymous$1(it
/**/) {
  var out = '<ul style="width:' + it.width + '" class="ui-region-select__list"> </ul>';return out;
}

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

function anonymous$2(it
/**/) {
  var out = '';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <li class="ui-region-select__list-item" data-id="' + item.value + '">' + item.label + '</li>';
    }
  }return out;
}

/* eslint-disable */
var classes$1 = {
  item: 'ui-region-select__list-item',
  selected: 'ui-region-select__list-item--cur'
};

var Select = function () {
  function Select($el, options) {
    classCallCheck(this, Select);

    this.$el = $el;
    this.options = $.extend({
      default: null,
      items: [],
      onChange: $.noop
    }, options);

    this._init();
  }

  createClass(Select, [{
    key: 'setItems',
    value: function setItems(items) {
      this.options.items = items;
      this._render();
      this._bindEvent();
    }
  }, {
    key: '_init',
    value: function _init() {
      var _this = this;

      this._render();
      this._bindEvent();

      if (this.options.default) {
        var index = findIndex(this.options.items, function (i) {
          return i.value == _this.options.default;
        });
        if (index > -1) {
          var item = this.options.items[index];
          this.$el.find('.' + classes$1.item).eq(index).addClass(classes$1.selected).siblings().removeClass(classes$1.selected);
          this.options.onChange(item, index, true);
        }
      }
    }
  }, {
    key: '_render',
    value: function _render() {
      this.$el.html(anonymous$2({ list: this.options.items }));
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      this.$el.off().on('click', '.' + classes$1.item, this._onClick.bind(this));
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      var node = $(e.currentTarget);
      node.addClass(classes$1.selected).siblings().removeClass(classes$1.selected);
      var index = node.index();
      var item = this.options.items[index];
      this.options.onChange(item, index);
    }
  }]);
  return Select;
}();

var classes$2 = {
  item: 'ui-region-select__chosen',
  chosen: 'ui-region-select__chosen--cur',
  text: 'ui-region-select__chosen-text'
};

var Chosen = function () {
  function Chosen($el, options) {
    classCallCheck(this, Chosen);

    this.$el = $el;
    this.options = $.extend({
      onChange: $.noop,
      defaultText: '请选择'
    }, options);
    this._init();
  }

  createClass(Chosen, [{
    key: '_init',
    value: function _init() {
      this.$el.on('click', '.' + classes$2.item, this._onClick.bind(this));
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      var node = $(e.currentTarget);
      node.addClass(classes$2.chosen).siblings().removeClass(classes$2.chosen);
      this.options.onChange(node.index());
    }
  }, {
    key: 'setChosenText',
    value: function setChosenText(text, level) {
      this.$el.find('.' + classes$2.item).eq(level).find('.' + classes$2.text).text(text);
    }
  }, {
    key: 'switch',
    value: function _switch(level) {
      var node = this.$el.find('.' + classes$2.item).eq(level);
      node.addClass(classes$2.chosen).siblings().removeClass(classes$2.chosen);
      this.options.onChange(level);
    }
  }, {
    key: 'jumpTo',
    value: function jumpTo(level) {
      this.$el.find('.' + classes$2.item).eq(level).addClass(classes$2.chosen).siblings().removeClass(classes$2.chosen);
      this.setChosenText(this.options.defaultText, level);
    }
  }]);
  return Chosen;
}();

function anonymous$3(it
/**/) {
  var out = '<div class="ui-region-select__chosen"> <span class="ui-region-select__chosen-text"></span></div>';return out;
}

/* eslint-disable */

/**
 * 地区选择器
 */
var classes = {
  selected: 'ui-region-select__list-item--selected',
  chosen: 'ui-region-select__chosen--cur',
  listWrap: 'ui-region-select__list-wrap',
  chosenWrap: 'ui-region-select__chosen-list',
  list: 'ui-region-select__list'
};

var innerWidth = window.innerWidth;

var defaultOptions = {
  tpl: anonymous,
  data: [],
  defaultSelect: [],
  onChange: $.noop,
  getLevelData: $.noop,
  depth: 4,
  popup: {
    container: 'body',
    title: '选择所在地区',
    showClose: "false",
    classes: {
      wrap: 'ui-region-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-region-select__title ui-popup__title--noborder',
      content: 'ui-region-select__content'
    }
  }
};

var RegionSelect = function () {
  function RegionSelect(options) {
    classCallCheck(this, RegionSelect);

    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  createClass(RegionSelect, [{
    key: '_init',
    value: function _init() {
      this.data = this.options.data;
      this.options.popup.content = this.options.tpl({});
      this.popup = new bundle(this.options.popup);
      this.result = [];

      var _depth = this.options.depth;
      var listHtml = '';
      var chosenHtml = '';
      while (_depth--) {
        listHtml += anonymous$1({ width: innerWidth + 'px' });
        chosenHtml += anonymous$3();
      }

      this.$listWrap = this.popup.$el.find('.' + classes.listWrap);
      this.$listWrap.html(listHtml);
      this.$chosenWrap = this.popup.$el.find('.' + classes.chosenWrap);
      this.$chosenWrap.html(chosenHtml);

      this.chosenInst = null;
      this._addChosen();
      this.selectInst = [];
      this._addSelect(this.data, 0);

      this.$listWrap.css('width', innerWidth * this.options.depth + 'px');
      this._bindEvent();
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      // this.popup.registerHandler('select', this._select.bind(this));
    }
  }, {
    key: '_addSelect',
    value: function _addSelect(items, level) {
      var that = this;
      that._showList(level);
      if (!that.selectInst[level]) {
        that.selectInst[level] = new Select(this.$listWrap.find('.' + classes.list).eq(level), {
          items: items,
          default: that.options.defaultSelect[level],
          onChange: function onChange(item, index, isDefault) {
            if (item) {
              that.result[level] = new Result(item);
              for (var i = level, len = that.result.length; i < len; i++) {
                that.chosenInst.setChosenText('', i + 1);
              }

              that.result = that.result.slice(0, level + 1);
              that.chosenInst.setChosenText(item.label, level);
            }

            if (item.children && item.children.length > 0) {
              that.chosenInst.jumpTo(level + 1);
              that._addSelect(item.children, level + 1);
            } else {
              that.options.getLevelData(level, item, function (children) {
                if (!isDefault) {
                  if (level === that.options.depth - 1 || !children || children.length === 0) {
                    that.options.onChange(that.result);
                    that.hide();
                    return;
                  } else {
                    item.children = children;
                    that.chosenInst.jumpTo(level + 1);
                    that._addSelect(item.children, level + 1);
                  }
                } else {
                  that.chosenInst.switch(0);
                }
              });
            }
          }
        });
      } else {
        that.selectInst[level].setItems(items);
      }
    }
  }, {
    key: '_addChosen',
    value: function _addChosen() {
      var that = this;
      this.chosenInst = new Chosen(this.$chosenWrap, {
        onChange: function onChange(index) {
          that._showList(index);
        }
      });

      this.chosenInst.jumpTo(0);
    }
  }, {
    key: '_showList',
    value: function _showList(index) {
      this.$listWrap.css('-webkit-transform', 'translate3d(' + -innerWidth * index + 'px, 0, 0)');
      this.$listWrap.children().eq(index).height('auto').siblings().height('0px');
    }

    // _select(node) {
    //   node.addClass(classes.selected).siblings().removeClass(classes.selected);
    //   this.currentSelect = this.data[node.index()];
    // }

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
  return RegionSelect;
}();

return RegionSelect;

})));
});

var bundle$8 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

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



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * tab tab导航栏
 */

var noop = function noop() {};
var qsa = 'querySelectorAll';
var qs = 'querySelector';
var selectors = {
  el: '.ui-tab',
  tabItem: '.ui-tab__tab-item',
  tabContent: '.ui-tab__tab-content'
};

var activeClass = 'ui-tab__tab-item--active';

var defaultOptions = {
  onChange: noop,
  defaultIndex: 0
};

var Tab = function () {
  /**
   * Create a Tab
   * @param {object} options 配置项
   */
  function Tab(options) {
    classCallCheck(this, Tab);

    this.options = _extends(defaultOptions, options);
    this._init();
  }

  /**
   * 初始化
   */


  createClass(Tab, [{
    key: '_init',
    value: function _init() {
      this.el = document[qs](selectors.el);
      this.tabItems = this.el[qsa](selectors.tabItem);
      this.tabContents = this.el[qsa](selectors.tabContent);

      this._onTab(this.options.defaultIndex);
      this._bindEvent();
    }

    /**
     * 绑定事件
     */

  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      var _this = this;

      [].concat(toConsumableArray(this.tabItems)).forEach(function (item, index) {
        item.addEventListener('click', function () {
          _this._onTab(index, item);
        }, false);
      });
    }
  }, {
    key: '_onTab',
    value: function _onTab(index, item) {
      item = item || this.tabItems[index];
      [].concat(toConsumableArray(this.tabItems)).forEach(function (i) {
        i.classList.remove(activeClass);
      });
      item.classList.add(activeClass);

      [].concat(toConsumableArray(this.tabContents)).forEach(function (i) {
        i.style.display = 'none';
      });
      this.tabContents[index].style.display = 'block';
      this.options.onChange(index);
    }
  }]);
  return Tab;
}();

return Tab;

})));
});

var tips = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var createElement = function () {
  var container = document.createElement('div');
  return function (html) {
    container.innerHTML = html;
    return container.children[0];
  };
}();

var isAndroid = function isAndroid() {
  return (/android/i.test(window.navigator ? window.navigator.userAgent : '')
  );
};

function anonymous(it
/**/) {
  var out = '<div class="ui-toast"> <div class="ui-toast__content"> <div class="ui-spinner"><span class="' + it.icon + '"></span><p class="ui-toast__text" id="bubble-text">' + it.text + '</p> </div> </div></div>';return out;
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

var Tips = function () {
  function Tips() {
    classCallCheck(this, Tips);

    this.tipsHtml = null;
    this.ptr = null;
    this.config = {
      msg: '',
      isLoading: false,
      autoHide: true,
      hideTime: 1200
    };

    this.iconConf = {
      loading: isAndroid() ? 'ui-spinner__icon ui-spinner__icon--svg' : 'ui-spinner__icon ui-spinner__icon--anim',
      none: ''
    };
  }

  /**
   * @param {object} option
   */


  createClass(Tips, [{
    key: 'showTips',
    value: function showTips(option) {
      var _this = this;

      if (this.tipsHtml) {
        return;
      }

      var conf = _extends({}, this.config, option);
      var html = anonymous({ text: conf.msg, icon: conf.isLoading ? this.iconConf.loading : '' });
      this.tipsHtml = createElement(html);
      document.body.insertBefore(this.tipsHtml, null);

      if (conf.autoHide) {
        setTimeout(function () {
          _this.closeTips();
        }, conf.hideTime);
      }

      this.lock = true;
    }

    /**
     * @param {string} message
     */

  }, {
    key: 'showLoading',
    value: function showLoading(message) {
      this.showTips({
        msg: message || '努力加载中...',
        isLoading: true,
        autoHide: false
      });
    }

    /**
     * @param {string} message
     */

  }, {
    key: 'showError',
    value: function showError(message) {
      var _this2 = this;

      clearInterval(this.ptr);
      this.ptr = setInterval(function () {
        if (!_this2.tipsHtml) {
          _this2.showTips({
            msg: message
          });

          clearInterval(_this2.ptr);
          _this2.ptr = null;
        }
      }, 200);
    }
  }, {
    key: 'closeTips',
    value: function closeTips() {
      if (!this.tipsHtml) {
        return this;
      }

      this.tipsHtml.parentNode.removeChild(this.tipsHtml);
      this.tipsHtml = null;
      this.lock = false;
      return this;
    }
  }]);
  return Tips;
}();

var index = new Tips();

return index;

})));
});

var bundle$9 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var scroll_to = createCommonjsModule$$1(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal$$1, (function () { 'use strict';

/**
 * 滚动到指定位置
 */

function doScroll(element, target, attr) {
  var curLeft = element[attr]; // 当前滚动条的位置
  var diff = target - curLeft; // 目标差值

  if (diff === 0) {
    return;
  }
  // 步长重新计算
  var step = Math.abs(diff / 10);
  var scroll = function scroll() {
    if (diff > 0) {
      curLeft += step;
      if (curLeft >= target) {
        curLeft = target;
      }
    } else if (diff < 0) {
      curLeft -= step;
      if (curLeft <= target) {
        curLeft = target;
      }
    }

    element[attr] = curLeft;
    if (curLeft !== target) {
      requestAnimationFrame(scroll);
    }
  };
  scroll();
}

/**
 * scrollLeft
 * @param {HTMLElement} element 元素
 * @param {Number} target 滚动到的位置
 */
function left(element, target) {
  doScroll(element, target, 'scrollLeft');
}

/**
 * scrollTop
 * @param {HTMLElement} element 元素
 * @param {Number} target 滚动到的位置
 */
function top(element, target) {
  doScroll(element, target, 'scrollTop');
}

var index = {
  left: left,
  top: top
};

return index;

})));
});

var extend = createCommonjsModule$$1(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal$$1,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
});

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

function anonymous(it
/**/) {
  var out = '<div class="ui-tab"> <div class="ui-tab__scrollwrap"> <ul class="ui-tab__bar ui-tab__bar--scroll"> ';var arr1 = it.list;if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;while (index < l1) {
      item = arr1[index += 1];out += ' <li cid="' + item.value + '" et="click:select" class="ui-tab__tab-item">' + item.label + '</li> ';
    }
  }out += ' </ul> <div class="ui-tab__arrow" et="click:toggle"></div> <div class="ui-more-category"> <ul class="ui-more-category__list"> ';var arr2 = it.list;if (arr2) {
    var item,
        index = -1,
        l2 = arr2.length - 1;while (index < l2) {
      item = arr2[index += 1];out += ' <li class="ui-more-category__list-item" et="click:selectCategory" cid="' + item.value + '">' + item.label + '</li> ';
    }
  }out += ' </ul> </div> </div></div>';return out;
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

/**
 * MoreCategory
 */
window.rootFontSize = window.rootFontSize || 100 * (document.documentElement.clientWidth / (window.basicWidth || 750));
var defaultOptions = {
  el: '',
  data: [],
  defaultSelectVal: '',
  onChange: $.noop
};

var classes = {
  tab: 'ui-tab__bar--scroll',
  tabItem: 'ui-tab__tab-item',
  tabItemSelected: 'ui-tab__tab-item--active',
  arrow: 'ui-tab__arrow',
  arrowExpand: 'ui-tab__arrow--expanded',
  category: 'ui-more-category'
};

var MoreCategory = function () {
  function MoreCategory(options) {
    classCallCheck(this, MoreCategory);

    this.options = extend(defaultOptions, options);
    this._init();
  }

  createClass(MoreCategory, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      this.data = this.options.data;
      this.wrap = typeof this.options.el === 'string' ? $(this.options.el) : this.options.el;
      this.$el = $(anonymous({ list: this.options.data }));
      this.wrap.replaceWith(this.$el);
      this._bindEvent();

      this.$arrow = this.$el.find('.' + classes.arrow);
      this.$category = this.$el.find('.' + classes.category);
      this.$ul = this.$el.find('.' + classes.tab);
      this.layHeight = window.innerHeight;

      // 设置默认选中
      var index = findIndex(this.data, function (i) {
        return i.value == _this.options.defaultSelectVal;
      }); // eslint-disable-line eqeqeq
      this.expanded = false;
      this.selectedIndex = index > -1 ? index : 0;
      this.selectedVal = this.data[this.selectedIndex] && this.data[this.selectedIndex].value;

      this._render();
      this.options.onChange(this.selectedVal, this.selectedIndex);
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent() {
      var _this2 = this;

      var that = this;
      this.evtHandler = {
        select: function select(node) {
          that._select(node);
        },
        toggle: function toggle(node) {
          that._toggleMore(node);
        },
        selectCategory: function selectCategory(node) {
          that._selectCategory(node);
        }
      };

      this.$el.on('click', function (e) {
        e = e || window.event;
        var tag = e.target.tagName;
        var node = $(e.target);
        var et = node.attr('et');

        if (!et) {
          // 向上找
          while (node[0] && node[0] !== _this2.dialogNode && !et) {
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
          _this2.evtHandler[et.split(':')[1]](node, e);
        }
      });
    }
  }, {
    key: '_select',
    value: function _select(node) {
      var cid = node.attr('cid');
      if (cid == this.selectedVal) {
        // eslint-disable-line eqeqeq
        return;
      }

      this.expanded = false;
      this.selectedVal = cid;
      this.selectedIndex = node.index();
      this.options.onChange(this.selectedVal, this.selectedIndex);
      this._render();
    }
  }, {
    key: '_selectCategory',
    value: function _selectCategory(node) {
      var cid = node.attr('cid');

      this.expanded = false;
      if (cid !== this.selectedVal) {
        // eslint-disable-line eqeqeq
        this.selectedVal = cid;
        this.selectedIndex = node.index();
        this.options.onChange(this.selectedVal, this.selectedIndex);
      }

      this._render();
    }
  }, {
    key: '_toggleMore',
    value: function _toggleMore() {
      this.expanded = !this.expanded;
      this._render();
    }
  }, {
    key: '_render',
    value: function _render() {
      if (this.expanded) {
        this.$arrow.addClass(classes.arrowExpand);
        this.$category.css({
          height: this.layHeight + 'px',
          opacity: 1
        });
      } else {
        this.$arrow.removeClass(classes.arrowExpand);
        this.$category.css({
          height: '0',
          opacity: 0
        });
      }

      this.$el.find('.' + classes.tabItem).eq(this.selectedIndex).addClass(classes.tabItemSelected).siblings().removeClass(classes.tabItemSelected); // eslint-disable-line 
      scroll_to.left(this.$ul[0], (this.selectedIndex * 2 - 4) * window.rootFontSize); // eslint-disable-line 
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.$el.empty();
    }
  }]);
  return MoreCategory;
}();

return MoreCategory;

})));
});

var index = {
  BankSelect: bundle,
  CouponSelect: bundle$1,
  Datepicker: bundle$2,
  Dialog: bundle$3,
  LicenseSelect: bundle$4,
  Picker: bundle$5,
  Popup: bundle$6,
  RegionSelect: bundle$7,
  Tab: bundle$8,
  Tips: tips,
  MoreCategory: bundle$9
};

return index;

})));
//# sourceMappingURL=index.js.map
