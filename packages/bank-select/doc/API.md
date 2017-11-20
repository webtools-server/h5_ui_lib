# API

```javascript
import Picker from '@jyb/ui-bank-select'
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
{
  bankImg: './光大银行.png',
  bankCode: 1,
  text1: '招商银行(尾号9286)',
  text2: '单笔限额5万元'
},
```

### selectedVal
- Type: `Number`
- Default: null 

提前选中的选项, 值为bankCode

### onChange
- Type: `Function`
- Default: $.noop

选中的值发生改变时的回调函数

### onAddCard
- Type: `Function`
- Default: $.noop

选择添加新的银行卡时的回调

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