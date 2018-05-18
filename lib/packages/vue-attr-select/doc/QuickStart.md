# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-attr-select --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVueAttrSelect from '@jyb/ui-vue-attr-select';

// 全局注册组件
Vue.component(UIVueAttrSelect.name, UIVueAttrSelect);

// 局部注册组件
new Vue({
  components: {
    [UIVueAttrSelect.name]: UIVueAttrSelect,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/dist/style/widget/attr-select';
@import '~@jyb/h5_ui_css/dist/style/widget/chose-list';
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
```html
<div id="container">
  <ui-attr-select
    :attrs="attrs"
    :skus="skus"
    :chose-arr.sync="choseArray"
    @chose:change="onChoseChange"
  ></ui-attr-select>
</div>
<script>
  new Vue({
    el: '#container',
    components: {
      [UIVueAttrSelect.name]: UIVueAttrSelect,
    },
    data: {
      choseArray: [],
      choseText: '',
      attrs: [{
        "code": "color",
        "name": "\u989c\u8272",
        "attr": [{
          "item_id": "3463",
          "value": "\u4e91\u96fe\u7070\u8272",
          "value_type": "0",
          "default": "1"
        }]        
      }],
      skus: {
        ";3463;3467;": {
          "stock": 1, 
        }       
      }
    }
  })
</script>
```



