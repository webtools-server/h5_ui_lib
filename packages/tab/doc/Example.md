# 例子

## html

```html
  <div class="ui-tab">
    <div class="ui-tab__bar">
      <div class="ui-tab__tab-item">tab1</div>
      <div class="ui-tab__tab-item">tab2</div>
      <div class="ui-tab__tab-item">tab3</div>
      <div class="ui-tab__tab-item">tab4</div>
    </div>
    <div>
      <div class="ui-tab__tab-content ui-d-n">content1</div>
      <div class="ui-tab__tab-content ui-d-n">content2</div>
      <div class="ui-tab__tab-content ui-d-n">content3</div>
      <div class="ui-tab__tab-content ui-d-n">content4</div>
    </div>
  </div>
```

## javascript

```javascript
    new Tab({
      onChange: function(index) { console.log(index); },
      defaultIndex: 0,
    })
```

## css

### 全局样式文件
```html
  <link href="ui.min.css" rel="stylesheet"></link>
```

### 单个组件样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/tab';
@import '~@jyb/h5_ui_css/src/style/widget/icon';
```

