/**
 * 车牌选择器
 */
import extend from '@jyb/lib-extend';
import Popup from '@jyb/ui-popup';
import tpl from './content.dot';
import titleTpl from './title.dot';
import { findIndex } from '../../../utils/util';

const classes = {
  selected: 'ui-license-select__list-item--selected'
};

const defaultOptions = {
  tpl,
  data: [],
  selectedVal: null,
  onChange: $.noop,
  popup: {
    container: 'body',
    title: titleTpl(),
    classes: {
      wrap: 'ui-license-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-license-select__title',
      content: 'ui-license-select__content',
    }
  }
};

class LicenseSelect {
  constructor(options) {
    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  _init() {
    this.data = this.options.data;
    this.options.popup.content = this.options.tpl({
      list: this.data,
      selected: this.options.selectedVal,
    });
    this.popup = new Popup(this.options.popup);

    const selectedIndex = findIndex(this.data, item => item.val === this.options.selectedVal);
    this.currentSelect = selectedIndex > -1 ? this.data[selectedIndex] : null;

    this._bindEvent();
  }

  _bindEvent() {
    this.popup.registerHandler('select', this._select.bind(this));
    this.popup.registerHandler('confirm', this._confirm.bind(this));
  }

  _select(node) {
    if (node.hasClass(classes.selected)) {
      return;
    }

    node.addClass(classes.selected).siblings().removeClass(classes.selected);
    this.currentSelect = this.data[node.index()];
  }

  _confirm() {
    this.options.onChange(this.currentSelect);
    this.hide();
  }

  hide() {
    this.popup.hide();
  }

  show() {
    this.popup.show();
  }
}

export default LicenseSelect;
