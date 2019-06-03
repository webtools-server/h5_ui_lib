# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-coupon-select --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVueCouponSelect from '@jyb/ui-vue-coupon-select';

// 全局注册组件
Vue.component(UIVueCouponSelect.name, UIVueCouponSelect);

// 局部注册组件
new Vue({
  components: {
    [UIVueCouponSelect.name]: UIVueCouponSelect,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/dist/style/widget/overlay';
@import '~@jyb/h5_ui_css/dist/style/widget/coupon-select';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
```

引入所有ui规范
```html
  <link href="path/h5_ui_css/dist/style/ui.min.css" rel="stylesheet"></link>
```
或者在scss中引入
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

## 例子
<a href="../demo/index.html" target="_blank">demo</a>
```html
<div id="container">
  <div class="ui-btn" @click="isShowCouponSelect=true">红包列表为空</div>
  <coupon-select
    :show.sync="isShowCouponSelect"
    :list="coupons"
    :cid.sync="currentCid"
    :title="'红包'"
    :not-use-desc="'就不用'"
    ></coupon-select>
</div>
<script>
  new Vue({
    el: '#container',
    components: {
      [UIVueCouponSelect.name]: UIVueCouponSelect,
    },
    data: {
      isShowCouponSelect: false,
      currentCid: 0,
      coupons,
    }
  })
</script>
```



