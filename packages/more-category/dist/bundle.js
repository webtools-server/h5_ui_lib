(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MoreCategory = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var scroll_to = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

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

var extend = createCommonjsModule(function (module, exports) {
!function(o,t){module.exports=t();}(commonjsGlobal,function(){"use strict";function o(o){return Array.isArray(o)}function t(o){if(!o||"[object Object]"!==e.call(o))return!1;var t=n.call(o,"constructor"),r=o.constructor&&o.constructor.prototype&&n.call(o.constructor.prototype,"isPrototypeOf");if(o.constructor&&!t&&!r)return!1;var i=void 0;for(i in o);return void 0===i||n.call(o,i)}function r(){var n=void 0,e=void 0,c=void 0,f=void 0,u=void 0,y=void 0,p=arguments[0],l=1,d=!1,s=arguments.length;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},l=2),(null==p||"object"!==(void 0===p?"undefined":i(p))&&"function"!=typeof p)&&(p={});l<s;++l)if(null!=(n=arguments[l]))for(e in n)c=p[e],p!==(f=n[e])&&(d&&f&&(t(f)||(u=o(f)))?(u?(u=!1,y=c&&o(c)?c:[]):y=c&&t(c)?c:{},p[e]=r(d,y,f)):void 0!==f&&(p[e]=f));return p}var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};return r});
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
