(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UIVueFileInput = factory());
}(this, (function () { 'use strict';

function isIOS() {
  return (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
  );
}

var FileInput$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { staticClass: "ui-file-input", attrs: { "type": "file", "multiple": _vm.multiple, "accept": _vm.accept, "capture": _vm.capture } });
  }, staticRenderFns: [],
  name: 'ui-file-input',
  props: {
    type: {
      type: String,
      default: 'image'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isIOS: isIOS
    };
  },

  computed: {
    accept: function accept() {
      if (this.type === 'video') {
        return 'video/*';
      } else {
        return 'image/*';
      }
    },
    capture: function capture() {
      if (this.type === 'video') {
        if (this.isIOS) {
          return 'user';
        } else {
          return 'camcorder';
        }
      } else {
        if (this.isIOS) {
          return false;
        }

        return 'camera';
      }
    }
  },
  methods: {
    onFileChange: function onFileChange(e) {
      this.$emit('change', e);
    }
  }
};

return FileInput$1;

})));
