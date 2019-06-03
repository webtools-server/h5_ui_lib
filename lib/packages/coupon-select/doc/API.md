# API

```javascript
import CouponSelect from '@jyb/ui-coupon-select'
```

## 初始化

### new CouponSelect(options);

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
    "name": '测试红包2',
    "cid": "6283566315030888448", 
    "amount": "2000", 
    "cdesc": "零钱充值红包", 
    "usage": "使用红包，支付70充零钱99", 
    "expired_time": "2017-07-01 23:59:59", 
    "status": "0", 
    "url": "http://dev.branch.jtjr.com:8901/haiyang/branch/h5_static_branch_10/act/tx/hf/bind_account.shtml?url=%3Fcid%3D6283566315030888448&tel=15818619756", 
    "is_auto_use": 0, 
    "prd_id": "",
    "amountVal" : "2000",
    "type_id": "5",
    "detail": {
      "value" : "90",
      "total_max_cnt": "1000",
      "total_remain_cnt": "499",      
    }
},
```

### selectedVal
- Type: `String`
- Default: null 

提前选中的选项, 值为cid

### onChange
- Type: `Function`
- Default: $.noop

选中的值发生改变时的回调函数

### title
- Type: `String`
- Default: 使用红包/加息券

标题

### notUseDesc
- Type: `String`
- Default: 不使用，就是任性

不使用红包按钮的文案

### isShowHelp
- Type: `Boolean`
- Default: false 

是否显示左上角帮助icon

### onHelp
- Type: `Function`
- Default: $.noop

点击左上角icon帮助时的回调函数

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