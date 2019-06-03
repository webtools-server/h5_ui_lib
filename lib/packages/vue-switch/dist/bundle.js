(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UIVueSwitch = factory());
}(this, (function () { 'use strict';

var Switch$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "ui-switch-btn", class: _vm.classes, on: { "click": _vm.onClick } });
  }, staticRenderFns: [],
  name: 'ui-switch',
  props: {
    on: {
      type: [Number, Boolean, String],
      default: 0
    }
  },
  computed: {
    classes: function classes() {
      return {
        'ui-switch-btn--close': this.on != 1
      };
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('update:on', this.on == 0 ? 1 : 0);
    }
  }
};

return Switch$1;

})));
