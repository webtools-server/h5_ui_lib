(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Tab = factory());
}(this, (function () { 'use strict';

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
