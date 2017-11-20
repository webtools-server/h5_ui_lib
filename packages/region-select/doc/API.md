# API

```javascript
import RegionSelect from '@jyb/ui-region-select'
```

## 初始化

### new RegionSelect(options);

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

### defaultSelect
- Type: `Array`
- Default: []

默认选中的选项，其中值为data中的value

### title
- Type: `String`
- Default: ''

浮层标题

### depth 
- Type: `Number`
- Default: 4

级联列表的深度

### onChange
- Type: `Function`
- Default: $.noop

选择完成时的回调函数
函数的参数为选中的结果，格式为数组

### getLevelData
- Type: `Function`
- Default: $.noop

获取某一级数据子元素的回调，当元素的子元素是异步获取的时候使用
参数：
level 第几级
item 父元素
cb 回调函数 需要把父元素的子元素传入当中 

使用说明
```javascript
function(level, item, cb) {
  queryChildren(level, item, function(result) {
    cb(result)
  })
}
 ```

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