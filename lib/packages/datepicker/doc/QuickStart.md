# 快速开始

## 安装

```shell
npm install @jyb/ui-datepicker --save
```

## 使用

### 引入

```javascript
import Datepicker from '@jyb/ui-datepicker';
```
引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/dist/style/widget/overlay';
@import '~@jyb/h5_ui_css/dist/style/widget/popup';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
@import '~@jyb/h5_ui_css/dist/style/widget/picker';
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

```javascript 
var dp = new Datepicker({
  title: '日期选择器',
  defaultValue: [2010, 10, 10],
  onChange: function(i) { console.log('change', i)},
  onConfirm: function(i) { console.log('confirm', i)},        
})

dp.show();
```