(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BankSelect = factory());
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
