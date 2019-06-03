# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-popup --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVuePopup from '@jyb/ui-vue-popup';

// 全局注册组件
Vue.component(UIVuePopup.name, UIVuePopup);

// 局部注册组件
new Vue({
  components: {
    [UIVuePopup.name]: UIVuePopup,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/overlay';
@import '~@jyb/h5_ui_css/src/style/widget/popup';
@import '~@jyb/h5_ui_css/src/style/widget/icon';
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
<popup 
  :transition=true
  :open.sync="isShowPopup" 
  :show-close="true">

  <template slot="title">这是标题</template>

  <div slot="content">这是内容</div>

  <div slot="footer">这是底部</div>
</popup>

<script>
  var app = new Vue({
    el: '#container',
    components: {
      [UIVuePopup .name]: UIVuePopup
    },
    data: {
      isShowPopup:  false
    }
  })
</script>
```



