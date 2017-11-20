/**
 * popup 浮层
 */
import extend from '@jyb/lib-extend';
import tpl from './index.dot';

const defaultOptions = {
  container: '#container',
  fixedElement: '',
  title: '',
  content: '',
  onShow: $.noop,
  onHide: $.noop,
  classes: {
    wrap: '',
    mask: 'ui-overlay--hidden',
    title: '',
    content: '',
    footer: '',
    show: ''
  }
};

const selectors = {
  el: '.ui-popup',
  mask: '.ui-overlay',
  title: '.ui-popup__title',
  content: '.ui-popup__content',
  footer: '.ui-popup__footer',
};

const modifyClasses = {
  overlayhidden: 'ui-overlay--hidden',
  popupShow: 'ui-popup--show'
};

class Popup {
  /**
   * Create a Popup
   * @param {object} options 配置项
   */
  constructor(options) {
    this.options = extend(defaultOptions, options);
    this._init();
  }

  /**
   * 初始化
   */
  _init() {
    this.evtHandler = {};
    this.$el = $(tpl(this.options));
    this._bindEvent();
  }

  /**
   * 绑定事件
   */
  _bindEvent() {
    this.$el.on('click', (e) => {
      e = e || window.event;
      const tag = e.target.tagName;
      let node = $(e.target);
      let et = node.attr('et');

      if (!et) {
        // 向上找
        while (node[0] && node[0] !== this.$el && !et) {
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

    this.registerHandler('close', this.hide.bind(this));
  }

  hide() {
    this.enableDocMove();
    this.$el.find(selectors.mask).addClass(modifyClasses.overlayhidden);
    this.$el.find(selectors.el).removeClass(modifyClasses.popupShow)
      .one('webkitTransitionEnd', () => {
        this.$el.remove();
        this.options.onHide && this.options.onHide();
      });
  }

  show() {
    this.disableDocMove();
    $(this.options.container).append(this.$el);
    setTimeout(() => {
      this.$el.find(selectors.el).addClass(modifyClasses.popupShow);
      this.$el.find(selectors.mask).removeClass(modifyClasses.overlayhidden);
      this.options.onShow && this.options.onShow();
    });
  }

  registerHandler(name, handler) {
    if (this.evtHandler[name]) {
      throw new Error('事件处理函数已经存在');
    }

    this.evtHandler[name] = handler;
  }

  updateContent(content) {
    this.options.content = content;
    this.$el.find(selectors.content).html(content);
    return this;
  }

  enableDocMove() {
    $(this.options.container).removeClass('ui-ov-h').height('auto');
  }

  disableDocMove() {
    $(this.options.container).addClass('ui-ov-h').height(window.innerHeight);
  }
}

export default Popup;

