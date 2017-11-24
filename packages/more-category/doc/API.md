# API

```javascript
import MoreCategory from '@jyb/ui-more-category'
```

## 初始化

### new MoreCategory(options);

```jsdoc
@param {Object} options
```

## 选项

### el
- Type: `String`
- 必填

提供一个在页面上已存在的 DOM 元素作为实例的挂载目标

### data
- Type: `Array`
- 必填

其中元素的格式为
```json
{ value: "3",   label: "汽车用品" }
```

### defaultSelectVal
- Type: `String`
- default 默认数据第一项的value

默认选中的值

### onChange
- Type: `Function`
- default: $.noop

选中选项时的回调函数

## 实例方法

### destroy()

销毁实例

```javascript
instance.destroy();
```
