# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-bank-icon --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVueTab from '@jyb/ui-vue-bank-icon';

// 全局注册组件
Vue.component(UIVueBankIcon.name, UIVueBankIcon);

// 局部注册组件
new Vue({
  components: {
    [UIVueBankIcon.name]: UIVueBankIcon,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/bank-icon';

或者在scss中引入全部样式
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

## 例子
<a href="../demo/index.html" target="_blank">demo</a>

```html
  <div id="container">  
    <ui-bank-icon :bank-code="bankCode"></ui-bank-icon>
  </div>
  <script src="../dist/bundle.dev.js"></script>
  <script>
    Vue.component(UIVueBankIcon.name, UIVueBankIcon);
    var app = new Vue({
      el: '#container',
      data: {
        bankCode: 'cmb'
      }
    })
  </script>
```



