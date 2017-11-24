# 快速开始

## 安装

```shell
npm install @jyb/ui-more-category --save
```

## 使用

### 引入

```javascript
import MoreCategory from '@jyb/ui-more-category'
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/tab';
```

引入所有ui规范
```html
  <link href="path/h5_ui_css/dist/style/ui.min.css" rel="stylesheet"></link>
```
或者在scss中引入
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

### 例子

<a href="../demo/index.html" target="_blank">demo</a>

```javascript
var data = [
  { value: "3",   label: "汽车用品" },
  { value: "116", label: "生活超市" },
  { value: "2",   label: "手机通讯" },
  { value: "7",   label: "数码影音" },
  { value: "9",   label: "家用电器" },
  { value: "15",  label: "电脑平板" },
  { value: "11",  label: "丽人美妆" },
  { value: "54",  label: "网易严选" },
  { value: "10",  label: "居家常备" },
  { value: "64",  label: "精选母婴" },
  { value: "12",  label: "个人护理" },
  { value: "13",  label: "大牌轻奢" },
  { value: "65",  label: "礼品专区" },
  { value: "115", label: "轻松白拿" },
];

var category = new MoreCategory({
  el: '#tab',
  data: data,
  selectedVal: "115",
  onChange: function(val, idx) {
    console.log(val, idx);
  },
});
```



