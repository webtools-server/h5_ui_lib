/**
 * 银行卡选择器
 */
import extend from '@jyb/lib-extend';
import Popup from '@jyb/ui-popup';
import tpl from './index.dot';
import { findIndex } from '../../../utils/util';
import BankIcon from './bank.png';

const classes = {
  selected: 'ui-icon-agree--checked',
  disabled: 'ui-bank-select__list-item--disabled',
};

const defaultOptions = {
  tpl,
  data: [],
  selectedVal: null,
  onChange: $.noop,
  onAddCard: $.noop,
  popup: {
    container: 'body',
    title: '选择银行卡',
    showClose: true,
    classes: {
      wrap: 'ui-bank-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-bank-select__title',
      content: 'ui-bank-select__content',
    }
  }
};

class BankSelect {
  constructor(options) {
    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  _init() {
    this.data = this.options.data;
    this.data.push({
      bankImg: BankIcon.src,
      text1: '添加新的银行卡',
      icon: 'ui-icon-arrow-right',
    });

    // 设置选中
    const selectedIndex = findIndex(this.data, item => item.bankCode === this.options.selectedVal);
    const currentBank = selectedIndex > -1 ? this.data[selectedIndex] : null;
    if (currentBank) {
      currentBank.icon = classes.selected;
      this.currentSelect = currentBank.bankCode;
    }

    this.options.popup.content = this.options.tpl({
      list: this.data,
      selected: this.options.selectedVal,
    });

    this.popup = new Popup(this.options.popup);
    this._bindEvent();
  }

  _bindEvent() {
    this.popup.registerHandler('select', this._select.bind(this));
  }

  _select(node) {
    if (node.hasClass(classes.disabled)) {
      return;
    }

    const bankCode = node.attr('data-id');
    if (bankCode === this.currentSelect) {
      return;
    }

    if (node.index() === this.data.length - 1) {
      this.options.onAddCard();
    } else {
      node.find('i').addClass(classes.selected);
      node.siblings().find('i').removeClass(classes.selected);
      this.currentSelect = bankCode;
      this.options.onChange(bankCode);
    }

    this.hide();
  }

  hide() {
    this.popup.hide();
  }

  show() {
    this.popup.show();
  }
}

export default BankSelect;
