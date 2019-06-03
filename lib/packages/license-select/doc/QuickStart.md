# 快速开始

## 安装

```shell
npm install @jyb/license-select --save
```

## 使用

### 引入

```javascript
import LicenseSelect from '@jyb/license-select';
```
引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/dist/style/widget/overlay';
@import '~@jyb/h5_ui_css/dist/style/widget/popup';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
@import '~@jyb/h5_ui_css/dist/style/widget/license-select';
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
var provinces = [
  { full:'河北', abbr:'冀', val: 1},
  { full:'山西', abbr:'晋', val: 2},
  { full:'辽宁', abbr:'辽', val: 3},
  { full:'吉林', abbr:'吉', val: 4},
  { full:'黑龙', abbr:'黑', val: 5},
  { full:'江苏', abbr:'苏', val: 6},
  { full:'浙江', abbr:'浙', val: 7},
  { full:'安徽', abbr:'皖', val: 8},
  { full:'福建', abbr:'闽', val: 9},
  { full:'江西', abbr:'赣', val: 10},
  { full:'山东', abbr:'鲁', val: 11},
  { full:'河南', abbr:'豫', val: 12},
  { full:'湖北', abbr:'鄂', val: 13},
  { full:'湖南', abbr:'湘', val: 14},
  { full:'广东', abbr:'粤', val: 15},
  { full:'海南', abbr:'琼', val: 16},
  { full:'四川', abbr:'川', val: 17},
  { full:'贵州', abbr:'黔', val: 18},
  { full:'云南', abbr:'滇', val: 19},
  { full:'陕西', abbr:'陕', val: 20},
  { full:'甘肃', abbr:'甘', val: 21},
  { full:'青海', abbr:'青', val: 22},
  { full:'台湾', abbr:'台', val: 23},
]
        
var select = new LicenseSelect({
  data: provinces,
  selectedVal: null,
  onChange: function(i) {
    console.log(i);
  },
});

select.show();
```