# 快速开始

## 安装

```shell
npm install @jyb/ui-tab --save
```

## 使用

### 引入

```javascript
import Tab from '@jyb/ui-tab'
```

```scss
@import '~@jyb/h5_ui_css/src/style/widget/tab';
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

```javascript
new Tab({
  onChange: function(index) { console.log(index); },
  defaultIndex: 0,
})
```



