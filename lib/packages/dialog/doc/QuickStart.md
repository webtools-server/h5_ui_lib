# 快速开始

## 安装

```shell
npm install @jyb/ui-dialog --save
```

## 使用

### 引入

```javascript
import Dialog from '@jyb/ui-dialog'
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

### 调用

```javascript
const dialog = new Dialog({
  title: '标题', // 标题内容
  visible: false, // 默认是否显示
  showClose: true, // 是否显示close按钮
  content: '这是内容', // 显示的内容
  btns: [{ // 按钮列表{text:"",callback:function(){},css:""}
    text: '确定',
    callback() {
      console.log('确定');
    }
  }, {
    text: '取消',
    callback() {
      console.log('取消');
    }
  }],
  mask: true, // 是否显示mask
  onClose() {
    console.log('close');
  },
  onShow() {
    console.log('show');
  },
  onDispose() {
    console.log('dispose');
  }
});

dialog.show();
```

### 例子

<a href="../demo/index.html" target="_blank">demo</a>



