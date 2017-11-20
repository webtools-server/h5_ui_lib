/* eslint-disable */

import itemsTpl from './item.dot';
// const windowHeight = window.innerHeight;
const getOffsetY = function (e) {
  return e.changedTouches[0].pageY;
};

const sign = function (x) {
  return ((x > 0) - (x - 0)) || +x;
};

const getDefaultIndex = (items) => {
  let current = Math.floor(items.length / 2);
  let count = 0;
  while (!!items[current] && items[current].disabled) {
      current = ++current % items.length;
      count++;

      if (count > items.length) {
          throw new Error('No selectable item.');
      }
  }

  return current;
};

const getDefaultTranslate = (offset, rowHeight, items) => {
  const currentIndex = getDefaultIndex(items);

  return (offset - currentIndex) * rowHeight;
};


class Scroll {
  constructor($el, options) {
    this.$el = $el;
    this.options = $.extend({
      items: [], // 数据
      scrollable: '.ui-picker__list', // 滚动的元素
      offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
      rowHeight: 40, // 列表每一行的高度
      onChange: $.noop, // onChange回调
      temp: null, // translate的缓存
      bodyHeight: 7 * 40 // picker的高度，用于辅助点击滚动的计算
    }, options);

    this._init();
  }

  _init() {
    this.items = this.options.items; 

    this.start = 0;
    this.startTime = 0;
    this.points = [];
    this.end = 0;
    this.endTime = 0;
    this.translate = 0;

    this.selectedIndex = null;
    this.selectedItem = null;

    this.$list = this.$el.find('.ui-picker__list');
    const itemHtml = itemsTpl({ list : this.items});
    this.$list.html(itemHtml);

    if (this.options.temp && this.options.temp < this.options.items.length) {
      const index = this.options.temp;
      this.options.onChange(this.options.items[index], index);
      this.translate = (this.options.offset - index - 1) * this.options.rowHeight;
    }
    // else {
    this._stop(0);
    // }
    
    this._addScroll();
  }

  _addScroll() {
    this.$scrollable = this.$el.off()
      .on('touchstart', this._onStart.bind(this))
      .on('touchmove', this._onMove.bind(this))
      .on('touchend', this._onEnd.bind(this))
      .find(this.options.scrollable);
  }

  _onStart(e) {
    this.start = getOffsetY(e);
    this.startTime = Date.now();
  }

  _onMove(e) {
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
    // const relativeY = windowHeight - (this.options.bodyHeight / 2);

    if (this.endTime - this.startTime > 100) {
      this._stop(this.end - this.start);
    } else {
      const len = this.points.length;
      const endPos = len - 1;
      let startPos = endPos;

      // 找到100ms内最近的哪个点
      for (let i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
        startPos = i;
      }

      const ep = this.points[endPos];
      const sp = this.points[startPos];
      const t = ep.time - sp.time;
      const s = ep.offset - sp.offset;
      const v = s / t;
      const diff = v * 150 + (this.endTime - this.startTime);

      let move = this.end - this.start;
      move = sign(diff) === sign(move) ? diff + move : move;
      this._stop(move);
    }

    this.start = 0;
  }

  _stop(diff) {
    // 1.计算出最接近哪行
    // 2.判断顶部和底部边界条件
    // 3.执行动画
    // 4.动画执行完成 onChange回调
    this.translate += diff;

    this.translate = Math.round(this.translate / this.options.rowHeight) * this.options.rowHeight;
    const max = (this.options.offset - 1) * this.options.rowHeight;
    const min = -(this.options.rowHeight * (this.items.length - this.options.offset));

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
    console.log(index)
    this.options.onChange(this.items[index], index);
    this.selectedItem = this.items[index];
    this.selectedIndex = index;
  }
}

export default Scroll;
