(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UIVueAttrSelect = factory());
}(this, (function () { 'use strict';

var AttrBlock = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-attr-block" }, [_c('p', { staticClass: "ui-attr-title" }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c(_vm.tag, { tag: "ul", staticClass: "ui-attr-list ui-chose-list__line" }, [_vm._t("default")], 2)]);
  }, staticRenderFns: [],
  name: 'ui-attr-block',
  props: {
    title: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'ul'
    }
  }
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var AttrItem = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "div", class: _vm.classes, on: { "click": _vm.onItemClick } }, [_vm._v(_vm._s(_vm.text))]);
  }, staticRenderFns: [],
  name: 'ui-attr-item',
  props: {
    value: {
      type: [String, Number]
    },
    text: {
      type: [String, Number]
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'ui-chose-list__item--cur'
    },
    disabledClass: {
      type: String,
      default: 'ui-chose-list__item--disabled'
    },
    tag: {
      type: String,
      default: 'li'
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {
        'ui-chose-list__item': true
      }, defineProperty(_ref, this.activeClass, this.active && !this.disabled), defineProperty(_ref, this.disabledClass, this.disabled), _ref;
    }
  },
  methods: {
    onItemClick: function onItemClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('toggle', !this.active);
    }
  }
  // beforeCreate() {
  //   this.$parent.items.push(this);
  // },
  // beforeDestroy() {
  //   const items = this.$parent.items;
  //   const index = items.indexOf(this);
  //   if (index >= 0) {
  //     items.splice(index, 1);
  //   }
  // }
};

var defaultDelimiter = ';';

function powerset(arr) {
  var ret = [[]];
  arr.forEach(function (i) {
    ret.forEach(function (j) {
      ret.push(j.concat(i));
    });
  });
  return ret;
}

function getAttrArr(key) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDelimiter;

  return key.split(delimiter).filter(function (i) {
    return i;
  });
}

function getAttrStr(arr) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDelimiter;

  return '' + delimiter + arr.join(delimiter) + delimiter;
}

function parseStock() {
  var stock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  stock = +stock;
  // -1 代表无限库存
  return stock === -1 ? Infinity : stock;
}

/**
 * 获取所有可选择的组合,返回一个对象，key是所有选择组合，value是组合剩余的库存
 * @param {Object} skus
 * @param {String} delimiter
 * @return {Object} 返回值格式如下所示
 * {
 *  ';231;': 1024,
 *  ';231;8;': 102,
 *  ';231;8;9;': 2,
 *  ';22;': 1022,
 *  ';22;221;': 10,
 *  ';22;221;500;': 0,
 * }
 */
function getAvailMap(skus) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDelimiter;

  return Object.keys(skus).reduce(function (p, c) {
    var sku = skus[c];
    // 获取当前sku所有可选择的组合
    powerset(getAttrArr(c, delimiter)).forEach(function (i) {
      var key = getAttrStr(i, delimiter);
      // 设置当前选择的属性组合的库存
      p[key] = p[key] || 0;
      p[key] += parseStock(sku.stock);
    });

    return p;
  }, {});
}



// test
// const skus = {
//   ';47815;47816;': { stock: 1024 },
//   ';47815;47817;': { stock: 65535 }
// }
// console.log('>>>>', getAvailMap(skus));

var _components;

var AttrSelect$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-attr-select ui-chose-list" }, _vm._l(_vm.attrs, function (attr) {
      return _c('ui-attr-block', { attrs: { "title": attr.name } }, _vm._l(attr.attr, function (a) {
        return _c('ui-attr-item', { attrs: { "value": a.item_id, "text": a.value, "active": _vm.isActive(attr.code, a.item_id), "disabled": _vm.isDisabled(attr.code, a.item_id) }, on: { "toggle": function toggle($event) {
              _vm.onItemToggle(attr.code, a.item_id);
            } } });
      }));
    }));
  }, staticRenderFns: [],
  name: 'ui-attr-select',
  components: (_components = {}, defineProperty(_components, AttrBlock.name, AttrBlock), defineProperty(_components, AttrItem.name, AttrItem), _components),
  props: {
    attrs: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    skus: {
      type: Object,
      required: true,
      default: function _default() {}
    },
    choseArr: {
      type: Array
    },
    enableCancel: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    availMap: function availMap() {
      return getAvailMap(this.skus);
    },
    chose: function chose() {
      var _this = this;

      return this.attrs.reduce(function (pv, cv, idx) {
        pv[cv.code] = _this.choseArr[idx];
        return pv;
      }, {});
    }
  },
  methods: {
    onItemToggle: function onItemToggle(code, val) {
      if (this.isDisabled(code, val)) {
        return;
      }

      if (this.isActive(code, val)) {
        if (this.enableCancel) {
          this.chose[code] = '';
        }
      } else {
        this.chose[code] = val;
      }

      this.updateChose();
    },
    isActive: function isActive(code, val) {
      return !!(this.chose[code] && this.chose[code] == val);
    },
    isDisabled: function isDisabled(code, val) {
      var str = this.getChoseStr(code, val);
      return !this.availMap[str] || this.availMap[str] <= 0;
    },
    getChoseStr: function getChoseStr(code, val) {
      var _this2 = this;

      var choseArr = this.attrs.map(function (i) {
        if (i.code == code) {
          return val;
        }

        return _this2.chose[i.code];
      }).filter(function (i) {
        return i;
      });
      return getAttrStr(choseArr);
    },
    updateChose: function updateChose() {
      var _this3 = this;

      var values = [];
      var texts = [];

      this.attrs.forEach(function (i) {
        var attr = i.attr.filter(function (a) {
          return _this3.chose[i.code] == a.item_id;
        })[0];
        values.push(attr && attr.item_id || '');
        if (attr) {
          texts.push(attr.value);
        }
      });

      this.$emit('update:choseArr', values);
      this.$emit('chose:change', values, texts);
    }
  }
};

// export default from './attr-select2.vue';

return AttrSelect$1;

})));
//# sourceMappingURL=bundle.dev.js.map
