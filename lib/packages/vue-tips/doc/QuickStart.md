# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-tips --save-dev
```

## 使用

### 引入

```javascript
import Tips from '@jyb/ui-vue-tips'
Vue.use(Tips)
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/overlay';
@import '~@jyb/h5_ui_css/src/style/widget/toast';
```

引入所有ui规范
```html
  <link href="path/h5_ui_css/dist/style/ui.min.css" rel="stylesheet"></link>
```
或者在scss中引入
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;

## 例子
```html
<div id="container">
  <div class="ui-btn ui-mb-10" @click="$showError('test')">toast</div>
  <div class="ui-btn ui-mb-10" @click="$showLoading()">loading</div>
  <div class="ui-btn" @click="$showTips({msg:'测试', isLoading:true, autoHide:true, hideTime:3000})">msg</div>
</div>
<script>
  Vue.use(UIVueTips);
  var app = new Vue({
    el: '#container',
  })
</script>
```



