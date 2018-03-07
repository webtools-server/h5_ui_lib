const couponMap = {
  5: {
    value() {
      return this.detail.value / 10;
    },
    unit: '折',
    useInfo() {
      return `已抵扣${this.detail.total_max_cnt - this.detail.total_remain_cnt}次,剩余${this.detail.total_remain_cnt}次`;
    }
  },
  4: {
    value() {
      return Math.floor(this.detail.remain_amt / 100);
    },
    unit: '元',
    useInfo() {
      const used = ((this.detail.total_amt - this.detail.remain_amt) / 100).toFixed(2);
      const rest = (this.detail.remain_amt / 100).toFixed(2);
      return `已使用${used}元,剩余${rest}元`;
    }
  },
  default: {
    value() {
      return this.amount / 100;
    },
    unit: '元',
    useInfo() {
      return `满${this.amountVal ? parseInt(this.amountVal / 100, 10) : 0}元可用`;
    },
  }
};

class CouponItem {
  constructor(options) {
    $.extend(this, options);
    this.currentValue = couponMap[this.type_id] || couponMap.default;
  }

  get unit() {
    return this.currentValue.unit;
  }

  set unit(val) {
    this.currentValue.unit = val;
  }

  get value() {
    return this.currentValue.value.call(this);
  }

  // set value(val) {
  //   return;
  // }

  get useInfo() {
    return this.currentValue.useInfo.call(this);
  }

  // set useInfo(val) {
  //   return;
  // }
}

export default CouponItem;
