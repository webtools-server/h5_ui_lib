/* eslint-disable */

import Popup from '@jyb/ui-popup';
import extend from '@jyb/lib-extend';
import tpl from './index.dot';
import titleTpl from './title.dot';

const getOffsetY = function (e) {
  return e.changedTouches[0].pageY;
};

const sign = function (x) {
  return ((x > 0) - (x - 0)) || +x;
};
const windowHeight = window.innerHeight;
const defaultOptions = {
  title: '',
  data: [],
  selectedIndex: null,
  onChange: $.noop,
  onConfirm: $.noop,
  offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
  rowHeight: 40, // 列表每一行的高度
  bodyHeight: 8 * 30, // picker的高度，用于辅助点击滚动的计算
  popup: {
    container: 'body',
    title: titleTpl({ text: '' }),
    classes: {
      wrap: 'ui-picker',
      mask: 'ui-overlay--hidden',
      title: 'ui-picker__title',
      content: 'ui-picker__content-wrap',
    }
  }
};

class Picker {
  /**
   * @constructor
   * @param {Object} options
   *
   * data 选项数据
   * selectedIndex 提前选中的选项
   * container 容器
   * onChange 选中的值发生改变时的回调函数
   * onConfirm 点击确认按钮时的回调函数
   */
  constructor(options) {
    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  _init() {
    this.data = this.options.data;
    this.options.popup.content = tpl({
      list: this.data,
    });

    this.options.popup.title = titleTpl({ title: this.options.title });
    this.popup = new Popup(this.options.popup);

    // 给列表添加自定义滚动
    this.$list = this.popup.$el.find('.ui-picker__list');
    this.$content = this.popup.$el.find('.ui-picker__content');
    this._scroll(this.$content);

    this.start = 0;
    this.startTime = 0;
    this.points = [];
    this.end = 0;
    this.endTime = 0;
    this.translate = 0;

    this.selectedIndex = null;
    this.selectedItem = null;

    this._bindEvent();
  }

  _bindEvent() {
    this.popup.registerHandler('confirm', this._onConfirm.bind(this));
  }

  _onStart(e) {
    this.start = getOffsetY(e);
    this.startTime = Date.now();
  }

  _onMove(e) {
    e.preventDefault();
    this.startTime = Date.now();
    const y = getOffsetY(e);
    this.points.push({ time: Date.now(), offset: y });
    if (this.points.length > 40) {
      this.points.shift();
    }

    this.$list.css({
      '-webkit-transition-duration': '0s',
      '-webkit-transform': `translate3d(0, ${this.translate + y - this.start}px, 0)`
    });
  }

  _onEnd(e) {
    // 判断touchend和最后一次touchmove的间隔是否大于临界值
    // 小于临界值则保持惯性再滑动一段时间
    // 大于临界值则停止滑动
    if (!this.start) {
      return;
    }

    this.endTime = Date.now();
    this.end = getOffsetY(e);
    const relativeY = windowHeight - (this.options.bodyHeight / 2);

    if (this.endTime - this.startTime > 100) {
      // if (Math.abs(this.end - this.start) > 10) {
      this._stop(this.end - this.start);
      // }
      // else {
      //   this._stop(relativeY - this.end);
      // }
    } else {
      // if (Math.abs(this.end - this.start) > 10) {
      const len = this.points.length;
      const endPos = len - 1;
      let startPos = endPos;

      // 找到100ms内最近的哪个点
      for (let i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
        startPos = i;
      }

      // if (startPos == endPos) {
      //   this._stop(0);
      // }
      // else {
      const ep = this.points[endPos];
      const sp = this.points[startPos];
      const t = ep.time - sp.time;
      const s = ep.offset - sp.offset;
      const v = s / t;
      const diff = v * 150 + (this.endTime - this.startTime);

      let move = this.end - this.start;
      move = sign(diff) === sign(move) ? diff + move : move;
      this._stop(move);
      // }
      // }
      // else {
      //   this._stop(relativeY - this.end);
      // }
    }

    this.start = 0;
  }

  _onConfirm() {
    this.options.onConfirm(this.selectedItem);
    this.hide();
  }

  _stop(diff) {
    // 1.计算出最接近哪行
    // 2.判断顶部和底部边界条件
    // 3.执行动画
    // 4.动画执行完成 onChange回调
    this.translate += diff;

    this.translate = Math.round(this.translate / this.options.rowHeight) * this.options.rowHeight;
    const max = (this.options.offset - 1) * this.options.rowHeight;
    const min = -(this.options.rowHeight * (this.data.length - this.options.offset));

    if (this.translate > max) {
      this.translate = max;
    }

    if (this.translate < min) {
      this.translate = min;
    }

    this.$list.css({
      '-webkit-transition-duration': '300ms',
      '-webkit-transform': `translate3d(0, ${this.translate}px, 0)`
    });

    const index = this.options.offset - this.translate / this.options.rowHeight - 1;
    this.options.onChange(this.data[index], index);
    this.selectedItem = this.data[index];
    this.selectedIndex = index;
  }

  _scroll($el) {
    $el.on('touchstart', this._onStart.bind(this));
    $el.on('touchmove', this._onMove.bind(this));
    $el.on('touchend', this._onEnd.bind(this));
  }

  hide() {
    this.popup.hide();
  }

  _setDefaultSelect() {
    // 设置默认选中
    const current = Math.floor(this.data.length / 2);
    if (this.selectedIndex) {
      this.translate = (this.options.offset - this.selectedIndex - 1) * this.options.rowHeight;
    } else {
      this.translate = (this.options.offset - current - 1) * this.options.rowHeight;
      this._stop(0);
    }

    this.$list.css({
      '-webkit-transform': `translate3d(0, ${this.translate}px, 0)`
    });
  }

  show() {
    this._setDefaultSelect();
    this.popup.show();
    // this._scroll(this.$list);
  }
}

export default Picker;
