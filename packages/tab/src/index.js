/**
 * tab tab导航栏
 */

const noop = function () {};
const qsa = 'querySelectorAll';
const qs = 'querySelector';
const selectors = {
  el: '.mod-tab',
  tabItem: '.mod-tab-bar .tab-item',
  tabContent: '.mod-tab-panel .tab-content',
};

const defaultOptions = {
  onChange: noop,
  defaultIndex: 0,
};

class Tab {
  /**
   * Create a Tab
   * @param {object} options 配置项
   */
  constructor(options) {
    this.options = Object.assign(defaultOptions, options);
    this._init();
  }

  /**
   * 初始化
   */
  _init() {
    this.el = document[qs](selectors.el);
    this.tabItems = this.el[qsa](selectors.tabItem);
    this.tabContents = this.el[qsa](selectors.tabContent);

    this._onTab(this.options.defaultIndex);
    this._bindEvent();
  }

  /**
   * 绑定事件
   */
  _bindEvent() {
    [...this.tabItems].forEach((item, index) => {
      item.addEventListener('click', () => {
        this._onTab(index, item);
      }, false);
    });
  }

  _onTab(index, item) {
    item = item || this.tabItems[index];
    [...this.tabItems].forEach((i) => { i.classList.remove('active'); });
    item.classList.add('active');

    [...this.tabContents].forEach((i) => { i.style.display = 'none'; });
    this.tabContents[index].style.display = 'block';
    this.options.onChange(index);
  }
}

export default Tab;
