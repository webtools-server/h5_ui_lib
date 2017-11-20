# 快速开始

## 安装

```shell
npm install @jyb/ui-datepicker --save
```

## 使用

### 引入

```javascript
import Picker from '@jyb/ui-datepicker';
```
引入单个组件的样式
```scss
@import '~jyb/h5_ui_css/dist/style/widget/overlay';
@import '~jyb/h5_ui_css/dist/style/widget/popup';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
@import '~@jyb/h5_ui_css/dist/style/widget/picker';
```
引入所有ui规范
```html
  <link href="ui.min.css" rel="stylesheet"></link>
```
或者
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

## 例子

```javascript 
var dp = new Datepicker({
  title: '日期选择器',
  defaultValue: [2010, 10, 10],
  onChange: function(i) { console.log('change', i)},
  onConfirm: function(i) { console.log('confirm', i)},        
})

dp.show();
```