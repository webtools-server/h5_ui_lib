# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-switch --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVueSwitch from '@jyb/ui-vue-switch';

// 全局注册组件
Vue.component(UIVueSwitch.name, UIVueSwitch);

// 局部注册组件
new Vue({
  components: {
    [UIVueSwitch.name]: UIVueSwitch,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/switch';

或者在scss中引入全部样式
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

## 例子
<a href="../demo/index.html" target="_blank">demo</a>

```html
<div id="container">    
  <div class="switch-wrap">
    <ui-switch :on.sync="on"></ui-switch>
    <span>{{ txt }}</span>
  </div>
</div>
<script src="../dist/bundle.dev.js"></script>
<script>
  Vue.component(UIVueSwitch.name, UIVueSwitch);
  var app = new Vue({
    el: '#container',
    data: {
      on: 1
    },
    computed: {
      txt() {
        return this.on == 1 ? '开' : '关';
      }
    }
  })
</script>
```



