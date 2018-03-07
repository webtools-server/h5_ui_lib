(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.RegionSelect = factory());
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
                  if (!children || children.length === 0) {
                    that.options.onChange(that.result);
                    that.hide();
                    return;
                  } else {
                    item.children = children;
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
//# sourceMappingURL=bundle.dev.js.map
