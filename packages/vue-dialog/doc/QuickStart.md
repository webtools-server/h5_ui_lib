# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-dialog --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVueDialog from '@jyb/ui-vue-dialog';

// 全局注册组件
Vue.component(UIVueDialog.Dialog.name, UIVueDialog.Dialog);
Vue.component(UIVueDialog.DialogBtn.name, UIVueDialog.DialogBtn);

// 局部注册组件
new Vue({
  components: {
    [UIVueDialog.Dialog.name]: UIVueDialog.Dialog,
    [UIVueDialog.DialogBtn.name]: UIVueDialog.DialogBtn,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/overlay';
@import '~@jyb/h5_ui_css/src/style/widget/dialog';
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
```html
<div id="container">
  <div class="ui-btn" @click="isShowDialog = true">点我</div>
  <ui-dialog 
    :open.sync="isShowDialog"
    :show-close=true
    :title="'测试'">
    <template slot="content">
      <p class="ui-text ui-text--large ui-ta-c ui-text--title">这是正文这是正文这是正文这是正文</p>
    </template>
    <template slot="buttons">
      <ui-dialog-btn @click="isShowDialog = false">取消</ui-dialog-btn>
      <ui-dialog-btn :strong=true @click="isShowDialog = false">确定</ui-dialog-btn>
    </template>
  </ui-dialog>
</div>
<script src="../dist/bundle.dev.js"></script>
<script>
  var Dialog = UIVueDialog.Dialog;
  var DialogBtn = UIVueDialog.DialogBtn;
  var app = new Vue({
    el: '#container',
    components: {
      [Dialog.name]: Dialog,
      [DialogBtn.name]: DialogBtn
    },
    data: {
      isShowDialog:  false
    }
  })
</script>
```



