# 例子

## html

```html
  <div class="mod-tab">
    <div class="mod-tab-bar">
      <div class="tab-item">tab1</div>
      <div class="tab-item">tab2</div>
      <div class="tab-item">tab3</div>
      <div class="tab-item">tab4</div>
    </div>
    <div class="mod-tab-panel">
      <div class="tab-content ui-d-n">content1</div>
      <div class="tab-content ui-d-n">content2</div>
      <div class="tab-content ui-d-n">content3</div>
      <div class="tab-content ui-d-n">content4</div>
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
```javascript
import '@jyb/ui-tab/dist/bundle.scss';
```

