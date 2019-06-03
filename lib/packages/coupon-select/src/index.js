/**
 * 红包选择器
 */
import extend from '@jyb/lib-extend';
import Popup from '@jyb/ui-popup';
import tpl from './index.dot';
import titleTpl from './title.dot';
import CouponItem from './couponItem';
import { findIndex } from '../../../utils/util';

const classes = {
  icon: 'ui-coupon-item__icon',
  selected: 'ui-icon-agree--checked',
  unselected: 'ui-icon-agree--unchecked',
};

const defaultOptions = {
  tpl,
  data: [],
  selectedVal: null,
  onChange: $.noop,
  onHelp: $.noop,
  isShowHelp: false,
  title: '使用红包/加息券',
  notUseDesc: '不使用，就是任性',
  popup: {
    container: 'body',
    title: titleTpl({ title: '使用红包/加息券', isShowHelp: 'false' }),
    showClose: true,
    classes: {
      wrap: 'ui-coupon-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-coupon-select__title ui-popup__title--noborder',
      content: 'ui-coupon-select__content',
    }
  }
};

class CouponSelect {
  constructor(options) {
    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  _init() {
    this.data = this.options.data.map(i => new CouponItem(i));

    // 设置选中
    this.currentSelectVal = this.options.selectedVal || 0;
    const selectedIndex = findIndex(this.data, item => item.cid === this.options.selectedVal);
    this.currentSelectIndex = selectedIndex > -1 ? selectedIndex : this.data.length;

    this.options.popup.title = titleTpl({ title: this.options.title, isShowHelp: this.options.isShowHelp });
    this.options.popup.content = this.options.tpl({
      list: this.data,
      selected: this.options.selectedVal,
      notUseDesc: this.options.notUseDesc,
    });

    this.popup = new Popup(this.options.popup);
    this._bindEvent();
  }

  _bindEvent() {
    this.popup.registerHandler('change', this._onClick.bind(this));
    this.popup.registerHandler('help', this._onHelp.bind(this));
  }

  _onClick(node) {
    const index = node.index();
    if (index !== this.data.length && index === this.currentSelectIndex) {
      return;
    }

    this.currentSelectIndex = index;
    node.siblings().find(`.${classes.icon}`).removeClass(classes.selected);
    if (index === this.data.length) {
      this.currentSelectVal = 0;
    } else {
      node.find(`.${classes.icon}`).addClass(classes.selected);
      this.currentSelectVal = this.data[index].cid;
    }

    this.options.onChange(this.currentSelectVal);
    this.hide();
  }

  _onHelp() {
    this.options.onHelp.call(this);
  }

  hide() {
    this.popup.hide();
  }

  show() {
    this.popup.show();
  }
}

export default CouponSelect;
