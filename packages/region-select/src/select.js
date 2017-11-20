/* eslint-disable */ 
import { findIndex } from '../../../utils/util';
import tpl from './items.dot';

const classes = {
  item: 'ui-region-select__list-item',
  selected: 'ui-region-select__list-item--cur'
};

class Select {
  constructor($el, options) {
    this.$el = $el;
    this.options = $.extend({
      default: null,
      items: [],
      onChange: $.noop,
    }, options);

    this._init();
  }

  setItems(items) {
    this.options.items = items;
    this._render();
    this._bindEvent();
  }

  _init() {
    this._render();
    this._bindEvent();

    if (this.options.default) {
      const index = findIndex(this.options.items, i => i.value == this.options.default); 
      if (index > -1) {
        const item = this.options.items[index];
        this.$el.find(`.${classes.item}`).eq(index).addClass(classes.selected).siblings().removeClass(classes.selected);
        this.options.onChange(item, index, true);
      }
    }
  }

  _render() {
    this.$el.html(tpl({ list: this.options.items }));
  }

  _bindEvent() {
    this.$el.off().on('click', `.${classes.item}`, this._onClick.bind(this));
  }

  _onClick(e) {
    const node = $(e.currentTarget);
    node.addClass(classes.selected).siblings().removeClass(classes.selected);
    const index = node.index();
    const item = this.options.items[index];
    this.options.onChange(item, index);
  }
}

export default Select;
