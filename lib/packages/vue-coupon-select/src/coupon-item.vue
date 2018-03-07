<template>
  <div class="ui-coupon-item" :class="{'ui-coupon-item--disabled': disabled}"@click="$emit('click')">
    <div class="ui-coupon-item__up">
      <div class="ui-coupon-item__up-left">
        <span class="ui-coupon-item__value " :class="{'ui-coupon-item__value--small': ('' + value).length > 3}">{{ value }}</span><span class="ui-coupon-item__unit">{{ unit }}</span>
      </div>
      <div class="ui-coupon-item__up-right">
        <div class="ui-coupon-item__title">{{ name }}</div>
        <div v-if="useInfo" class="ui-coupon-item__useinfo">{{ useInfo }}</div>
        <div class="ui-coupon-item__usage">{{ usage }}</div>
      </div>
    </div>
    <div class="ui-cutting-line"></div>
    <div class="ui-coupon-item__down">
      <p class="ui-coupon-item__valid">有效期至{{ expired_time }}
        <span v-if="disabled" class="ui-fl-r color-f60 f-22">不满足使用条件</span>
      </p>
      <i v-if="!disabled" class="ui-coupon-item__icon ui-icon-agree--unchecked" :class="{'ui-icon-agree--checked':selected}"></i>
    </div>
  </div>    
</template>

<script>
const valueMap = {
    5: {
      value: function() {
        return this.detail.value / 10
      },
      unit: '折',
      useInfo: function() {
        return `已抵扣${this.detail.total_max_cnt - this.detail.total_remain_cnt}次,剩余${this.detail.total_remain_cnt}次`
      }
    },
    4: {
      value: function() {
        return (this.detail.remain_amt/100).toFixed(2)
      },
      unit: '元',
      useInfo: function() {
        return `已使用${((this.detail.total_amt - this.detail.remain_amt)/100).toFixed(2)}元,剩余${(this.detail.remain_amt/100).toFixed(2)}元`
      },
    },
    default: {
      value: function() {
        return this.amount / 100
      },
      unit: '元',
      useInfo: function() {
        return `满${this.amountVal ? parseInt(this.amountVal / 100, 10) : 0}元可用`
      },
    }
}

export default {
  name: 'coupon-item',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    cid: {
      type: String,
      required: true,
      default: '0'
    },
    detail: {
      type: Object,
    },
    is_period_use: {
      type: Number,
    },
    type_id: {
      type: String,
    },
    amount: {
      type: String,
    },
    name: {
      type: String,
    },
    expired_time: {
      type: String,
    },
    amountVal: {
      type: [Number, String],
    },
    usage: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      valueMap
    }
  },
  computed: {
    displayValue() {
      const item = displayValues[this.type_id] || displayValues.default
      return item
    },
    currentValue() {
      return this.valueMap[this.type_id] || this.valueMap.default
    },
    unit() {
      return this.currentValue.unit
    },
    value() {
      return this.currentValue.value.call(this)
    },
    useInfo() {
      return this.currentValue.useInfo.call(this)
    },  
  },
}
</script>