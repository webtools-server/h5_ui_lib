/**
 * MoreCategory
 */
import scrollTo from '@jyb/lib-scroll-to';
import extend from '@jyb/lib-extend';
import { findIndex } from '../../../utils/util';
import tpl from './index.dot';

window.rootFontSize = window.rootFontSize || 100 * (document.documentElement.clientWidth / (window.basicWidth || 750));
const defaultOptions = {
  el: '',
  data: [],
  defaultSelectVal: '',
  onChange: $.noop,
};

const classes = {
  tab: 'ui-tab__bar--scroll',
  tabItem: 'ui-tab__tab-item',
  tabItemSelected: 'ui-tab__tab-item--active',
  arrow: 'ui-tab__arrow',
  arrowExpand: 'ui-tab__arrow--expanded',
  category: 'ui-more-category',
};

class MoreCategory {
  constructor(options) {
    this.options = extend(defaultOptions, options);
    this._init();
  }

  _init() {
    this.data = this.options.data;
    this.wrap = typeof this.options.el === 'string' ? $(this.options.el) : this.options.el;
    this.$el = $(tpl({ list: this.options.data }));
    this.wrap.replaceWith(this.$el);
    this._bindEvent();

    this.$arrow = this.$el.find(`.${classes.arrow}`);
    this.$category = this.$el.find(`.${classes.category}`);
    this.$ul = this.$el.find(`.${classes.tab}`);
    this.layHeight = window.innerHeight;

    // 设置默认选中
    const index = findIndex(this.data, i => i.value == this.options.defaultSelectVal); // eslint-disable-line eqeqeq
    this.expanded = false;
    this.selectedIndex = index > -1 ? index : 0;
    this.selectedVal = this.data[this.selectedIndex] && this.data[this.selectedIndex].value;

    this._render();
    this.options.onChange(this.selectedVal, this.selectedIndex);
  }

  _bindEvent() {
    const that = this;
    this.evtHandler = {
      select(node) {
        that._select(node);
      },
      toggle(node) {
        that._toggleMore(node);
      },
      selectCategory(node) {
        that._selectCategory(node);
      }
    };

    this.$el.on('click', (e) => {
      e = e || window.event;
      const tag = e.target.tagName;
      let node = $(e.target);
      let et = node.attr('et');

      if (!et) {
        // 向上找
        while (node[0] && node[0] !== this.dialogNode && !et) {
          node = node.parent();
          et = node.attr('et');
        }
        if (!et) {
          return;
        }
      }

      // 超链接不阻值冒泡
      tag !== 'A' && e.stopPropagation();
      // 是对应的事件
      if (et.indexOf(e.type) === 0) {
        // 调用事件指定的函数
        this.evtHandler[et.split(':')[1]](node, e);
      }
    });
  }

  _select(node) {
    const cid = node.attr('cid');
    if (cid == this.selectedVal) { // eslint-disable-line eqeqeq
      return;
    }

    this.expanded = false;
    this.selectedVal = cid;
    this.selectedIndex = node.index();
    this.options.onChange(this.selectedVal, this.selectedIndex);
    this._render();
  }

  _selectCategory(node) {
    const cid = node.attr('cid');

    this.expanded = false;
    if (cid !== this.selectedVal) { // eslint-disable-line eqeqeq
      this.selectedVal = cid;
      this.selectedIndex = node.index();
      this.options.onChange(this.selectedVal, this.selectedIndex);
    }

    this._render();
  }

  _toggleMore() {
    this.expanded = !this.expanded;
    this._render();
  }

  _render() {
    if (this.expanded) {
      this.$arrow.addClass(classes.arrowExpand);
      this.$category.css({
        height: `${this.layHeight}px`,
        opacity: 1,
      });
    } else {
      this.$arrow.removeClass(classes.arrowExpand);
      this.$category.css({
        height: '0',
        opacity: 0,
      });
    }

    this.$el.find(`.${classes.tabItem}`).eq(this.selectedIndex).addClass(classes.tabItemSelected).siblings().removeClass(classes.tabItemSelected); // eslint-disable-line 
    scrollTo.left(this.$ul[0], (this.selectedIndex * 2 - 4) * window.rootFontSize); // eslint-disable-line 
  }

  destroy() {
    this.$el.empty();
  }
}

export default MoreCategory;
