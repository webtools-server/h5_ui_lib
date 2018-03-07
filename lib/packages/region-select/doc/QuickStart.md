# 快速开始

## 安装

```shell
npm install @jyb/ui-region-select --save
```

## 使用

### 引入

```javascript
import RegionSelect from '@jyb/ui-region-select';
```
引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/dist/style/widget/overlay';
@import '~@jyb/h5_ui_css/dist/style/widget/popup';
@import '~@jyb/h5_ui_css/dist/style/widget/icon';
@import '~@jyb/h5_ui_css/dist/style/widget/region-select';
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
var data = [
{ label:'河北', value:'冀', children: [
  { label: '石家庄', value: '1', },
  { label: '保定', value: '2' },
  { label: '邢台', value: '3' },
  { label: '沧州', value: '4' },
  { label: '秦皇岛', value: '5' },
  { label: '北戴河', value: '6' },
]},
{ label:'山西', value:'晋', children: [
  { label: '大同', value: '7'},
  { label: '太原', value: '8', children: [
    { label: '晋中', value: '8'},
    { label: '运城', value: '8.1'},
    { label: '临汾', value: '8'},  
  ]},
  { label: '晋中', value: '8'},
  { label: '运城', value: '8.1', children: [
    { label: '盐湖', value: '9'},
    { label: '垣曲', value: '10', children: [
      { label: '新城镇', value: '12'},  
      { label: '鹰眼镇', value: '13'},  
      { label: '铜山镇', value: '14'},  
    ]},
    { label: '闻喜', value: '11'},
  ]},
  { label: '临汾', value: '8'},
  { label: '吕梁市', value: '8'},
]},
{ label:'辽宁', value:'辽',},
{ label:'吉林', value:'吉',},
{ label:'黑龙', value:'黑',},
{ label:'江苏', value:'苏',},
];

var select = new RegionSelect({
  data: data,
  title: '地区选择器',
  defaultSelect: ['晋', '8.1', '10', '12'],
  // selectedIndex: 1,
  onChange: function(i) { console.log('change', i)},
  getLevelData: function(level, item, cb) { console.log('getLevelData', level, item); cb([])},
});
```

