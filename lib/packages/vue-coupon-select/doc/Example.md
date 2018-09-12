# 例子

自定义红包样式和过滤条件

```html
  <div class="ui-coupon-item" :class="{'ui-coupon-item--disabled': disabled}">
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
        <span v-if="disabled" class="ui-fl-r color-f60 f-22">{{ disableInfo }}</span>
      </p>
      <i v-if="!disabled" class="ui-coupon-item__icon ui-icon-agree--unchecked" :class="{'ui-icon-agree--checked':selected}"></i>
    </div>
  </div>    
```