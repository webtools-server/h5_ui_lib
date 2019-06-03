(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global.UIVueCouponSelect = factory(global.Vue));
}(this, (function (vue) { 'use strict';

vue = vue && 'default' in vue ? vue['default'] : vue;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory(vue);
  })(commonjsGlobal, function (vue$$1) {
    'use strict';

    vue$$1 = vue$$1 && 'default' in vue$$1 ? vue$$1['default'] : vue$$1;

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule$$1(fn, module) {
      return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var bundle = createCommonjsModule$$1(function (module, exports) {
      (function (global, factory) {
        module.exports = factory(vue$$1);
      })(commonjsGlobal$$1, function (Vue) {
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
  });
});

var valueMap = {
  5: {
    value: function value() {
      return this.detail.value / 10;
    },
    unit: '折',
    useInfo: function useInfo() {
      return '\u5DF2\u62B5\u6263' + (this.detail.total_max_cnt - this.detail.total_remain_cnt) + '\u6B21,\u5269\u4F59' + this.detail.total_remain_cnt + '\u6B21';
    }
  },
  4: {
    value: function value() {
      return (this.detail.remain_amt / 100).toFixed(2);
    },
    unit: '元',
    useInfo: function useInfo() {
      return '\u5DF2\u4F7F\u7528' + ((this.detail.total_amt - this.detail.remain_amt) / 100).toFixed(2) + '\u5143,\u5269\u4F59' + (this.detail.remain_amt / 100).toFixed(2) + '\u5143';
    }
  },
  default: {
    value: function value() {
      return this.amount / 100;
    },
    unit: '元',
    useInfo: function useInfo() {
      return '\u6EE1' + (this.amountVal ? parseInt(this.amountVal / 100, 10) : 0) + '\u5143\u53EF\u7528';
    }
  }
};

var CouponItem = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-coupon-item", class: { 'ui-coupon-item--disabled': _vm.disabled }, on: { "click": function click($event) {
          _vm.$emit('click');
        } } }, [_c('div', { staticClass: "ui-coupon-item__up" }, [_c('div', { staticClass: "ui-coupon-item__up-left" }, [_c('span', { staticClass: "ui-coupon-item__value", class: { 'ui-coupon-item__value--small': ('' + _vm.value).length > 3 } }, [_vm._v(_vm._s(_vm.value))]), _c('span', { staticClass: "ui-coupon-item__unit" }, [_vm._v(_vm._s(_vm.unit))])]), _vm._v(" "), _c('div', { staticClass: "ui-coupon-item__up-right" }, [_c('div', { staticClass: "ui-coupon-item__title" }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _vm.useInfo ? _c('div', { staticClass: "ui-coupon-item__useinfo" }, [_vm._v(_vm._s(_vm.useInfo))]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "ui-coupon-item__usage" }, [_vm._v(_vm._s(_vm.usage))])])]), _vm._v(" "), _c('div', { staticClass: "ui-cutting-line" }), _vm._v(" "), _c('div', { staticClass: "ui-coupon-item__down" }, [_c('p', { staticClass: "ui-coupon-item__valid" }, [_vm._v("有效期至" + _vm._s(_vm.expired_time) + " "), _vm.disabled ? _c('span', { staticClass: "ui-fl-r color-f60 f-22" }, [_vm._v(_vm._s(_vm.disableInfo))]) : _vm._e()]), _vm._v(" "), !_vm.disabled ? _c('i', { staticClass: "ui-coupon-item__icon ui-icon-agree--unchecked", class: { 'ui-icon-agree--checked': _vm.selected } }) : _vm._e()])]);
  }, staticRenderFns: [],
  name: 'coupon-item',
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    cid: {
      type: String,
      required: true,
      default: '0'
    },
    detail: {
      type: Object
    },
    is_period_use: {
      type: Number
    },
    type_id: {
      type: String
    },
    amount: {
      type: String
    },
    name: {
      type: String
    },
    expired_time: {
      type: String
    },
    amountVal: {
      type: [Number, String]
    },
    usage: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      valueMap: valueMap
    };
  },

  computed: {
    displayValue: function displayValue() {
      var item = displayValues[this.type_id] || displayValues.default;
      return item;
    },
    currentValue: function currentValue() {
      return this.valueMap[this.type_id] || this.valueMap.default;
    },
    unit: function unit() {
      return this.currentValue.unit;
    },
    value: function value() {
      return this.currentValue.value.call(this);
    },
    useInfo: function useInfo() {
      return this.currentValue.useInfo.call(this);
    },
    disableInfo: function disableInfo() {
      if (this.is_period_use == 0 && this.type_id == 5) {
        if (this.detail.period == 1) {
          return '\u4E00\u5468\u53EA\u80FD\u4F7F\u7528' + this.detail.period_max_cnt + '\u6B21';
        } else if (i.detail.period == 2) {
          return '\u4E00\u4E2A\u6708\u53EA\u80FD\u4F7F\u7528' + this.detail.period_max_cnt + '\u6B21';
        }
      }

      return '不满足使用条件';
    }
  }
};

var CouponSelect$1 = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-coupon-select" }, [_c('popup', { attrs: { "transition": true, "open": _vm.show, "showClose": true, "titleClass": ['ui-coupon-select__title'], "contentClass": ['ui-coupon-select__content'] }, on: { "update:open": _vm.onOpenUpdate } }, [_c('template', { slot: "title" }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', { staticClass: "ui-coupon-select__list", slot: "content" }, [!_vm.list ? [_vm._t("default"), _vm._v(" "), !_vm.hasSlot ? _c('div', { staticClass: "ui-coupon-select__empty" }, [_c('div', { staticClass: "ui-coupon-select__empty-img" }), _vm._v(" "), _c('p', { staticClass: "ui-coupon-select__empty-text" }, [_vm._v("您还没有可用红包哦~")])]) : _c('div', { staticClass: "ui-btn ui-coupon-select__notuse", on: { "click": function click($event) {
                    _vm.changecoupon('');
                } } }, [_vm._v(_vm._s(_vm.notUseDesc))])] : [_vm.list.length > 0 ? [_vm._l(_vm.list, function (item, idx) {
            return _c('coupon-item', _vm._b({ key: item.cid, attrs: { "selected": item.cid == _vm.cid }, on: { "click": function click($event) {
                        _vm.changecoupon(item);
                    } } }, 'coupon-item', item));
        }), _vm._v(" "), _c('div', { staticClass: "ui-btn ui-coupon-select__notuse", on: { "click": function click($event) {
                    _vm.changecoupon('');
                } } }, [_vm._v(_vm._s(_vm.notUseDesc))])] : _c('div', { staticClass: "ui-coupon-select__empty" }, [_c('div', { staticClass: "ui-coupon-select__empty-img" }), _vm._v(" "), _c('p', { staticClass: "ui-coupon-select__empty-text" }, [_vm._v("您还没有可用红包哦~")])])]], 2)], 2)], 1);
    }, staticRenderFns: [],
    name: 'coupon-select',
    components: {
        Popup: bundle,
        CouponItem: CouponItem
    },
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false
        },
        list: {
            type: Array
            // required: true,
            // default: []
        },
        cid: {
            type: [String, Number],
            default: 0
        },
        title: {
            type: String,
            default: '选择红包/折扣券'
        },
        notUseDesc: {
            type: String,
            default: '不使用，就是任性'
        },
        hasSlot: {
            type: [Boolean, Number],
            default: false
        }
    },
    methods: {
        onOpenUpdate: function onOpenUpdate(val) {
            if (!val) {
                this.closecoupon();
            }
        },
        closecoupon: function closecoupon() {
            this.$emit('update:show', false);
        },
        changecoupon: function changecoupon(item) {
            if (item && (item.disabled === true || typeof item.disabled === 'undefined')) {
                return;
            }

            this.$emit('update:cid', item.cid || 0);
            this.closecoupon();
        }
    }
};

return CouponSelect$1;

})));
//# sourceMappingURL=bundle.dev.js.map
