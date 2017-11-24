(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Datepicker = factory());
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
