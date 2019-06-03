(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global.UIVuePopup = factory(global.Vue));
}(this, (function (vue) { 'use strict';

vue = vue && 'default' in vue ? vue['default'] : vue;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory(vue);
  })(commonjsGlobal, function (Vue) {
    'use strict';

    Vue = Vue && 'default' in Vue ? Vue['default'] : Vue;

    var overlayOpt = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.transition ? _c('transition', { attrs: { "enter-class": "ui-overlay--hidden", "leave-to-class": "ui-overlay--hidden" } }, [_vm.show ? _c('div', { staticClass: "ui-overlay", style: _vm.overlayStyle, on: { "click": _vm.handleClick } }) : _vm._e()]) : _vm.show ? _c('div', { staticClass: "ui-overlay", style: _vm.overlayStyle, on: { "click": _vm.handleClick } }) : _vm._e();
      }, staticRenderFns: [],
      props: {
        show: {
          type: Boolean,
          default: false
        },
        onClick: {
          type: Function
        },
        opacity: {
          type: Number,
          default: 0.4
        },
        color: {
          type: String,
          default: '#000'
        },
        zIndex: {
          type: Number
        },
        transition: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        overlayStyle: function overlayStyle() {
          return {
            'opacity': this.opacity,
            'background-color': this.color,
            'z-index': this.zIndex
          };
        },
        transitionClasses: function transitionClasses() {
          if (this.transition) {
            return {
              'enter': 'ui-overlay--hidden',
              'leaveTo': 'ui-overlay--hidden'
            };
          } else {
            return {
              'enter': '',
              'leaveTo': ''
            };
          }
        }
      },
      methods: {
        handleClick: function handleClick() {
          this.onClick && this.onClick();
        }
      }
    };

    /* eslint-disable */
    var Overlay = Vue.extend(overlayOpt);

    var PopManager = {
      instances: [],
      overlay: null,

      // 是否允许滚动
      locked: false,

      // cache body html
      body: document.body,
      html: document.documentElement,

      // cache overflow style
      bodyOverflow: '',
      htmlOverflow: '',

      // cache scroll top
      htmlScrollTop: 0,
      bodyScrollTop: 0,

      open: function open(instance) {
        if (!instance || this.instances.indexOf(instance) !== -1) {
          return;
        }

        if (!this.overlay && instance.overlay) {
          this.showOverlay(instance);
        }

        this.instances.push(instance);
        this.changeOverlayStyle();
      },
      close: function close(instance) {
        var _this = this;

        var index = this.instances.indexOf(instance);
        if (index === -1) {
          return;
        }

        Vue.nextTick(function () {
          _this.instances.splice(index, 1);
          if (_this.instances.length === 0) {
            _this.closeOverlay(instance);
          }

          _this.changeOverlayStyle();
        });
      },
      showOverlay: function showOverlay(instance) {
        var overlay = this.overlay = new Overlay({
          el: document.createElement('div')
        });

        overlay.color = instance.overlayColor;
        overlay.opacity = instance.overlayOpacity;
        overlay.zIndex = instance.overlayZIndex;
        overlay.transition = instance.transition;
        overlay.onClick = this.handleOverlayClick.bind(this);
        this.preventScrolling(instance);
        this.body.appendChild(overlay.$el);

        Vue.nextTick(function () {
          overlay.show = true;
        });
      },
      closeOverlay: function closeOverlay(instance) {
        if (!this.overlay) {
          return;
        }

        this.allowScrolling(instance);
        var overlay = this.overlay;
        overlay.show = false;

        this.overlay = null;
        Vue.nextTick(function () {
          overlay.$el.remove();
          overlay.$destroy();
        });
      },
      changeOverlayStyle: function changeOverlayStyle() {
        if (this.instances.length === 0) {
          return;
        }

        var last = this.instances.length - 1;
        var instance = this.instances[last];
        if (!this.overlay || !instance.overlay) {
          return;
        }

        this.overlay.color = instance.overlayColor;
        this.overlay.opacity = instance.overlayOpacity;
        this.overlay.zIndex = instance.overlayZIndex;
      },
      handleOverlayClick: function handleOverlayClick() {
        if (this.instances.length === 0) {
          return;
        }

        var instance = this.instances[this.instances.length - 1];
        if (instance.overlayClick) {
          instance.overlayClick();
        }
      },
      preventScrolling: function preventScrolling(instance) {
        if (this.locked) {
          return;
        }

        if (instance.preventBackScroll) {
          // 保存html和body的overflow属性
          this.bodyOverflow = this.body.style.overflow;
          this.htmlOverflow = this.html.style.overflow;

          // 保存滚动条高度
          this.bodyScrollTop = this.body.scrollTop;
          this.htmlScrollTop = this.html.scrollTop;

          // 禁止滚动
          this.body.style.overflow = 'hidden';
          this.html.style.overflow = 'hidden';
        }

        this.locked = true;
      },
      allowScrolling: function allowScrolling(instance) {
        if (instance.preventBackScroll) {
          this.body.style.overflow = this.bodyOverflow;
          this.html.style.overflow = this.htmlOverflow;
          this.body.scrollTop = this.bodyScrollTop;
          this.html.scrollTop = this.htmlScrollTop;

          this.bodyOverflow = '';
          this.htmlOverflow = '';
          this.bodyScrollTop = 0;
          this.htmlScrollTop = 0;
        }

        this.locked = false;
      }
    };

    /* eslint-disable */
    var zIndex = 20170526;

    var getZIndex = function getZIndex() {
      return zIndex++;
    };

    /* eslint-disable */
    var index = {
      props: {
        open: {
          type: Boolean,
          default: false
        },
        overlay: {
          type: Boolean,
          default: true
        },
        overlayOpacity: {
          type: Number,
          default: 0.4
        },
        overlayColor: {
          type: String,
          default: '#000'
        },
        transition: {
          type: Boolean,
          default: false
        },
        preventBackScroll: {
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        return {
          overlayZIndex: getZIndex(),
          zIndex: getZIndex()
        };
      },
      mounted: function mounted() {
        if (this.open) {
          this.resetZIndex();
          PopManager.open(this);
          this.appendElToBody();
        }
      },
      beforeDestroy: function beforeDestroy() {
        PopManager.close(this);
        this.removeEl();
      },

      watch: {
        open: function open(val, oldVal) {
          if (val === oldVal) {
            return;
          }

          if (val) {
            this.resetZIndex();
            PopManager.open(this);
            this.appendElToBody();
          } else {
            PopManager.close(this);
          }
        },
        zIndex: function zIndex(val, oldVal) {
          var _this = this;

          var el = this.getEl();
          if (!el) {
            console.warn('el is not defined');
            return;
          }

          // 在当前帧获取不到el
          this.$nextTick(function () {
            var el = _this.getEl();
            if (val !== oldVal) {
              el.style.zIndex = val;
            }
          });
        }
      },
      methods: {
        overlayClick: function overlayClick(e) {
          if (this.overlay) {
            this.$emit('close', 'overlay');
          }
        },
        resetZIndex: function resetZIndex() {
          this.overlayZIndex = getZIndex();
          this.zIndex = getZIndex();
        },
        getEl: function getEl() {
          return this.$refs.popup || this.$el;
        },
        appendElToBody: function appendElToBody() {
          var el = this.getEl();
          if (el) {
            document.body.appendChild(el);
          }
        },
        removeEl: function removeEl() {
          var el = this.getEl();
          if (el && el.nodeType == 1) {
            document.body.removeChild(el);
          }
        }
      }
    };

    return index;
  });
});

var noborderClass = 'ui-popup__title--noborder';

// 浮层高度由内容决定，最高时距离屏幕顶端296px，标题高度为104px
function calcContentHeight() {
  return document.documentElement.clientHeight - (296 + 104) / 2 + 'px';
}

var Popup$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "enter-class": "ui-slide-up", "leave-class": "ui-popup--show" } }, [_vm.open ? _c('div', { ref: "popup", staticClass: "ui-popup ui-popup--show" }, [_c('div', { staticClass: "ui-popup__title", class: _vm.titleClass }, [_vm._t("title"), _vm._v(" "), _vm.showClose ? _c('div', { staticClass: "ui-popup__fn-button", on: { "click": function click($event) {
          _vm.$emit('update:open', false);
        } } }, [_c('i', { staticClass: "ui-icon-close" })]) : _vm._e()], 2), _vm._v(" "), _c('div', { staticClass: "ui-popup__content", class: _vm.contentClass, style: _vm.contentStyle }, [_vm._t("content")], 2), _vm._v(" "), _c('div', { staticClass: "ui-popup__footer", class: _vm.footerClass }, [_vm._t("footer")], 2)]) : _vm._e()]);
  }, staticRenderFns: [],
  name: 'popup',
  mixins: [bundle],
  props: {
    showClose: {
      type: Boolean,
      default: true
    },
    titleClass: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    contentClass: {
      type: Array
    },
    footerClass: {
      type: Array
    },
    titleBorder: {
      type: Boolean,
      default: true
    },
    reCaculateContentHeight: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    if (!this.titleBorder) {
      this.titleClass.push(noborderClass);
    }
  },
  data: function data() {
    return {
      contentStyle: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.resetContentHeight();
    }, 100);

    if (this.reCaculateContentHeight) {
      window.addEventListener('resize', this.resetContentHeight);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.reCaculateContentHeight) {
      window.removeEventListener('resize', this.resetContentHeight);
    }
  },

  methods: {
    resetContentHeight: function resetContentHeight() {
      this.contentStyle['max-height'] = calcContentHeight();
    }
  }
};

return Popup$1;

})));
//# sourceMappingURL=bundle.dev.js.map
