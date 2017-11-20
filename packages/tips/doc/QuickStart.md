# 快速开始

## 安装

```shell
npm install @jyb/ui-tips --save
```

## 使用

### 引入

```javascript
import tips from '@jyb/ui-tips'
```

```scss
@import '~@jyb/h5_ui_css/src/style/widget/overlay';
@import '~@jyb/h5_ui_css/src/style/widget/toast';
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
显示加载状态
```javascript
tips.showLoading()
```

隐藏tips
```javascript
tips.closeTips()
```

显示错误，1.2s后自动关闭
```javascript
tips.showError('error')
```

显示提示
```javascript
tips.showTips({
  msg: 'msg', //提示内容
  isLoading: false, //是否加载中状态
  autoHide: true, //是否自动隐藏
  hideTime: 1200 //自动隐藏时间
})

```



