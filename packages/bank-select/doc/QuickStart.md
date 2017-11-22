# 快速开始

## 安装

```shell
npm install @jyb/ui-bank-select --save
```

## 使用

### 引入

```javascript
import BankSelect from '@jyb/ui-bank-select';
```
引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/dist/style/widget/overlay';
@import '~@jyb/h5_ui_css/dist/style/widget/popup';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
@import '~@jyb/h5_ui_css/dist/style/widget/bank-select';
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
var banks = [
  {
    bankImg: './光大银行.png',
    bankCode: 1,
    text1: '招商银行(尾号9286)',
    text2: '单笔限额5万元'
  },
  {
    bankImg: './中信银行.png',
    bankCode: 2,
    text1: '中信银行(尾号9286)',
    text2: '单笔限额5万元'
  },
  {
    bankImg: './平安银行.png',
    bankCode: 3,
    text1: '平安银行(尾号9286)',
    text2: '单笔限额5万元'
  },
  {
    bankImg: './招商银行.png',
    bankCode: 4,
    text1: '招商银行(尾号9286)',
    text2: '单笔限额5万元',
    disabled: true,
  },
  {
    bankImg: './浦发银行.png',
    bankCode: 5,
    text1: '浦发银行(尾号9286)',
    text2: '单笔限额5万元'
  },                        
]

var select = new BankSelect({
  data: banks,
  selectedVal: 2,
  onChange: function(i) {
    console.log(i);
  },
  onAddCard: function() {
    console.log('添加银行卡')
  }
});
```