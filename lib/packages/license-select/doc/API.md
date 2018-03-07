# API

```javascript
import BankSelect from '@jyb/ui-bank-select'
```

## 初始化

### new BankSelect(options);

```jsdoc
@param {Object} options
```

## 选项

### data
- Type: `Array`
- Default: []

其中元素的格式为
```json
{ full:'河北', abbr:'冀', val: 1}
```

### selectedVal
- Type: `Number`
- Default: null 

提前选中的选项, 值为val

### onChange
- Type: `Function`
- Default: $.noop

选中的值发生改变时的回调函数

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