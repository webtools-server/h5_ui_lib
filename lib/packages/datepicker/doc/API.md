# API

```javascript
import Datepicker from '@jyb/ui-datepicker'
```

## 初始化

### new Datepicker(options);

```jsdoc
@param {Object} options
```

## 选项

### start
- Type: `String`
- Default: 1970-01-01

开始日期

### end
- Type: `String`
- Default: 2018-01-01

结束日期

### defaultValue
- Type: `Number`
- Default: []

提前选中的元素

### title
- Type: `String`
- Default: ''

浮层标题

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