/* eslint-disable */

import Popup from '@jyb/ui-popup';
import extend from '@jyb/lib-extend';
import Scroll from './scroll';
import Result from './result';
import cron from './cron';
import tpl from './index.dot';
import titleTpl from './title.dot';
import groupTpl from './group.dot';
import itemTpl from './item.dot';

const getOffsetY = function (e) {
  return e.changedTouches[0].pageY;
};

const sign = function (x) {
  return ((x > 0) - (x - 0)) || +x;
};

const depthOf = (object) => {
  let depth = 1;
  if (object.children && object.children[0]) {
      depth = depthOf(object.children[0]) + 1;
  }

  return depth;
};


const windowHeight = window.innerHeight;
const defaultOptions = {
  title: '',
  data: [],
  depth: 1,
  defaultValue: [],
  onChange: $.noop,
  onConfirm: $.noop,
  popup: {
    container: 'body',
    title: titleTpl({ text: '' }),
    classes: {
      wrap: 'ui-picker',
      mask: 'ui-overlay--hidden',
      title: 'ui-picker__title',
      content: 'ui-picker__content-wrap ui-picker__content-wrap--large',
    }
  }
};

const selectors = {
  group: '.ui-picker__group'
}

class Picker {
  /**
   * @constructor
   * @param {Object} options
   *
   * data 选项数据
   * defaultValue 提前选中的选项
   * container 容器
   * onChange 选中的值发生改变时的回调函数
   * onConfirm 点击确认按钮时的回调函数
   */
  constructor(options) {
    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  destroy() {
    this.popup.$el.remove();
    this.data = [];
    this.popup = null;
  }

  _init() {
    this.result = [];
    this.data = this.options.data;

    this.options.popup.content = tpl({});
    this.options.popup.title = titleTpl({ title: this.options.title });
    this.popup = new Popup(this.options.popup);

    this.$content = this.popup.$el.find('.ui-picker__content');
    let _depth = this.options.depth || depthOf(this.data);
    let groupHtml = '';
    while(_depth--) {
      groupHtml += groupTpl();
    }
    this.$content.html(groupHtml);

    this.lineTemp = [];
    // 添加自定义滚动
    this._scroll(this.data, 0);

    this._bindEvent();
  }

  _bindEvent() {
    this.popup.registerHandler('confirm', this._onConfirm.bind(this));
  }

  _onConfirm() {
    this.options.onConfirm(this.result);
    this.hide();
  }

  _scroll(items, level) {
    const that = this;
    if (that.lineTemp[level] === undefined && this.options.defaultValue && this.options.defaultValue[level] !== undefined) {
      // 没有缓存选项，而且存在defaultValue
      const defaultVal = this.options.defaultValue[level];
      let index = 0, len = items.length;

      if(typeof items[index] == 'object'){
          for (; index < len; ++index) {
              if (defaultVal == items[index].value) break;
          }
      }else{
          for (; index < len; ++index) {
              if (defaultVal == items[index]) break;
          }
      }
      if (index < len) {
          that.lineTemp[level] = index;
      } else {
          console.warn('Picker has not match defaultValue: ' + defaultVal);
      }
    }

    new Scroll(this.$content.find(selectors.group).eq(level), {
      items: items, 
      onChange(item, index) {
        if (item) {
          that.result[level] = new Result(item); 
        }
        else {
          that.result[level] = null;
        }

        if (item.children && item.children.length > 0) {
          that.$content.find(selectors.group).eq(level + 1).show;
          that._scroll(item.children, level + 1);
        }
        else {
          that.$content.find(selectors.group).each(function(index) {
            if (index > level) {
              $(this).hide();
            }            
          })

          that.result.splice(level + 1);
          that.options.onChange(that.result);
        }

        if (index < items.length) {
          that.lineTemp[level] = index 
        }
        else {
          console.error('illegal index', index, items.length);
        }
      },
      offset: that.options.offset,
      temp: that.lineTemp[level],
    })    
  }

  hide() {
    this.popup.hide();
  }

  show() {
    this.popup.show();
  }
}

const findBy = (array, key, value) => {
  for(let i = 0, len = array.length; i < len; i++){
      const obj = array[i];
      if(obj[key] == value){
          return obj;
      }
  }
};

const generageDate = (cronFmt, start, end) => {
  const date = [];
  const interval = cron.parse(cronFmt, start, end);
  let obj;
  do {
      obj = interval.next();

      const year = obj.value.getFullYear();
      const month = obj.value.getMonth() + 1;
      const day = obj.value.getDate();

      let Y = findBy(date, 'value', year);
      if (!Y) {
          Y = {
              label: year + '年',
              value: year,
              children: []
          };
          date.push(Y);
      }
      let M = findBy(Y.children, 'value', month);
      if (!M) {
          M = {
              label: month + '月',
              value: month,
              children: []
          };
          Y.children.push(M);
      }
      M.children.push({
          label: day + '日',
          value: day
      });
  }

  while (!obj.done);
  
  return date 
}

const defaults = {
  onChange: $.noop,
  onConfirm: $.noop,
  start: '1970-01-01',
  end: '2018-01-01',
  cron: '* * *',
  depth: 3,
  offset: 4,
};

export default function(options) {
  $.extend(defaults, options);
  defaults.start = new Date(defaults.start.replace(/-/g, '/'));
  defaults.end = new Date(defaults.end.replace(/-/g, '/'));
  defaults.data = generageDate(defaults.cron, defaults.start, defaults.end);

  return new Picker(defaults);
};
