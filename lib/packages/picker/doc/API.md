# API

```javascript
import Picker from '@jyb/ui-picker'
```

## 初始化

### new Picker(options);

```jsdoc
@param {Object} options
```

## 选项

### data
- Type: `Array`
- Default: []

其中元素的格式为
```json
{
  label: '',
  value: '',
  children: [
    { label: '', value: '', children: []}
  ]
}
```

### selectedIndex
- Type: `Number`
- Default: []

提前选中的选项下标

### title
- Type: `String`
- Default: ''

浮层标题

### container 
- Type: `Zepto dom Object`
- Default: body

picker的父元素

### onChange
- Type: `Function`
- Default: $.noop

选中的值发生改变时的回调函数

### onConfirm
- Type: `Function`
- Default: $.noop

点击确认按钮时的回调函数

## 实例方法

### show()

显示

```javascript
instance.show();
```


### hide()

隐藏

```javascript
instance.show();
```