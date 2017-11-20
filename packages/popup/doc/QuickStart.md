# 快速开始

## 安装

```shell
npm install @jyb/ui-popup --save
```

## 使用

### 引入

```javascript
// 引入js
import Popup from '@jyb/ui-popup'
```

引入单个组件的样式
```scss
@import '~jyb/h5_ui_css/dist/style/widget/overlay';
@import '~jyb/h5_ui_css/dist/style/widget/popup';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
```

引入所有ui规范
```html
  <link href="ui.min.css" rel="stylesheet"></link>
```
或者
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

### 调用

```javascript
const popup = new Popup({
  showClose: true,
  container: '#container',
  content: 'test',
  title: 'title'
})

popup.show();
```



