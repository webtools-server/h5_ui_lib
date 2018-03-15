(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@jyb/ui-vue-popup')) :
	typeof define === 'function' && define.amd ? define(['@jyb/ui-vue-popup'], factory) :
	(global.UIVueCouponSelect = factory(global.Popup));
}(this, (function (Popup) { 'use strict';

Popup = Popup && 'default' in Popup ? Popup['default'] : Popup;

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
        } } }, [_c('div', { staticClass: "ui-coupon-item__up" }, [_c('div', { staticClass: "ui-coupon-item__up-left" }, [_c('span', { staticClass: "ui-coupon-item__value", class: { 'ui-coupon-item__value--small': ('' + _vm.value).length > 3 } }, [_vm._v(_vm._s(_vm.value))]), _c('span', { staticClass: "ui-coupon-item__unit" }, [_vm._v(_vm._s(_vm.unit))])]), _vm._v(" "), _c('div', { staticClass: "ui-coupon-item__up-right" }, [_c('div', { staticClass: "ui-coupon-item__title" }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _vm.useInfo ? _c('div', { staticClass: "ui-coupon-item__useinfo" }, [_vm._v(_vm._s(_vm.useInfo))]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "ui-coupon-item__usage" }, [_vm._v(_vm._s(_vm.usage))])])]), _vm._v(" "), _c('div', { staticClass: "ui-cutting-line" }), _vm._v(" "), _c('div', { staticClass: "ui-coupon-item__down" }, [_c('p', { staticClass: "ui-coupon-item__valid" }, [_vm._v("有效期至" + _vm._s(_vm.expired_time) + " "), _vm.disabled ? _c('span', { staticClass: "ui-fl-r color-f60 f-22" }, [_vm._v("不满足使用条件")]) : _vm._e()]), _vm._v(" "), !_vm.disabled ? _c('i', { staticClass: "ui-coupon-item__icon ui-icon-agree--unchecked", class: { 'ui-icon-agree--checked': _vm.selected } }) : _vm._e()])]);
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
    }
  }
};

var CouponSelect$1 = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ui-coupon-select" }, [_c('popup', { attrs: { "transition": true, "open": _vm.show, "showClose": true, "titleClass": ['ui-coupon-select__title'], "contentClass": ['ui-coupon-select__content'] }, on: { "update:open": _vm.onOpenUpdate } }, [_c('template', { slot: "title" }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', { staticClass: "ui-coupon-select__list", slot: "content" }, [_vm.list && _vm.list.length > 0 ? [_vm._l(_vm.list, function (item, idx) {
            return _c('coupon-item', _vm._b({ key: item.cid, attrs: { "selected": item.cid == _vm.cid }, on: { "click": function click($event) {
                        _vm.changecoupon(item);
                    } } }, 'coupon-item', item));
        }), _vm._v(" "), _c('div', { staticClass: "ui-btn ui-coupon-select__notuse", on: { "click": function click($event) {
                    _vm.changecoupon('');
                } } }, [_vm._v(_vm._s(_vm.notUseDesc))])] : _c('div', { staticClass: "ui-coupon-select__empty" }, [_c('div', { staticClass: "ui-coupon-select__empty-img" }), _vm._v(" "), _c('p', { staticClass: "ui-coupon-select__empty-text" }, [_vm._v("您还没有可用红包哦~")])])], 2)], 2)], 1);
    }, staticRenderFns: [],
    name: 'coupon-select',
    components: {
        Popup: Popup,
        CouponItem: CouponItem
    },
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false
        },
        list: {
            type: Array,
            required: true,
            default: []
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

            this.$emit('update:cid', item.cid);
            this.closecoupon();
        }
    }
};

return CouponSelect$1;

})));
//# sourceMappingURL=bundle.dev.js.map
