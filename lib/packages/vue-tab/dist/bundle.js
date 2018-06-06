(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UIVueTab = factory());
}(this, (function () { 'use strict';

var Tab = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-tab" }, [_c('div', { staticClass: "ui-tab__bar", class: _vm.classes }, [_vm._t("bar")], 2), _vm._v(" "), _vm._t("content")], 2);
  }, staticRenderFns: [],
  name: 'ui-tab',
  props: {
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "ui-tab-bar--border": this.border
      };
    }
  }
};

var TabItem = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-tab__tab-item", class: _vm.classes, style: _vm.style, on: { "click": function click($event) {
          _vm.$emit('click');
        } } }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'ui-tab-item',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    borderBottom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "ui-tab__tab-item--active": this.isActive
      };
    },
    style: function style() {
      return {
        'border-bottom': this.borderBottom ? '1px solid #f5f5f5' : 'none'
      };
    }
  }
};

var TabContent = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-tab__tab-content" }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'ui-tab-content'
};

var index = {
  Tab: Tab,
  TabItem: TabItem,
  TabContent: TabContent
};

return index;

})));
