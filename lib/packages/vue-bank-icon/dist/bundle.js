(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UIVueBankIcon = factory());
}(this, (function () { 'use strict';

var map = {
  866300: 'abc',
  866100: 'boc',
  866400: 'bocom',
  866500: 'ccb',
  867200: 'ceb',
  866800: 'cgb',
  867600: 'cib',
  867400: 'citic',
  866900: 'cmb',
  866600: 'cmbc',
  865800: 'hxb',
  866200: 'icbc',
  865700: 'pingan',
  866000: 'psbc',
  867100: 'spdb',
  bob: 'bob',
  bosc: 'bosc',
  alipay: 'alipay',
  baidu: 'baidu',
  bank: 'bank',
  baofoo: 'baofoo',
  change: 'change',
  grcb: 'grcb',
  gzcb: 'gzcb',
  jd: 'jd',
  pc: 'pc',
  qq: 'qq',
  shenfazhan: 'shenfazhan',
  transfer: 'transfer',
  unionpay: 'unionpay',
  wechat: 'wechat',
  yeepay: 'yeepay'
};

var Icon$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { class: [_vm.className] });
  }, staticRenderFns: [],
  name: 'ui-bank-icon',
  props: ['bankCode'],
  computed: {
    className: function className() {
      return 'ui-bank-icon--' + map[this.bankCode];
    }
  }
};

return Icon$1;

})));
