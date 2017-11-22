# 例子

```javascript
var coupons =  [ 
  { 
    "name": '测试红包',
    "cid": "62835663150308884481", 
    "amount": "200000", 
    "cdesc": "零钱充值红包", 
    "usage": "使用红包，支付70充零钱99", 
    "expired_time": "2017-07-01 23:59:59", 
    "status": "0", 
    "url": "http://dev.branch.jtjr.com:8901/haiyang/branch/h5_static_branch_10/act/tx/hf/bind_account.shtml?url=%3Fcid%3D6283566315030888448&tel=15818619756", 
    "is_auto_use": 0, 
    "prd_id": "",
    "amountVal" : "200000"
  },
  { 
    "name": '测试红包2',
    "cid": "62835663150308884482", 
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
  { 
    "name": '测试红包3',
    "cid": "62835663150308884483", 
    "amount": "2000", 
    "cdesc": "零钱充值红包", 
    "usage": "使用红包，支付70充零钱99", 
    "expired_time": "2017-07-01 23:59:59", 
    "status": "0", 
    "url": "http://dev.branch.jtjr.com:8901/haiyang/branch/h5_static_branch_10/act/tx/hf/bind_account.shtml?url=%3Fcid%3D6283566315030888448&tel=15818619756", 
    "is_auto_use": 0, 
    "prd_id": "",
    "amountVal" : "2000",
    "type_id": "4",
    "detail": {
      "remain_amt": 18000,
      "total_amt": 36000
    }
  }, 
  { 
    "name": '测试红包',
    "cid": "6283566315030888448", 
    "amount": "2000", 
    "cdesc": "零钱充值红包", 
    "usage": "使用红包，支付70充零钱99", 
    "expired_time": "2017-07-01 23:59:59", 
    "status": "0", 
    "url": "http://dev.branch.jtjr.com:8901/haiyang/branch/h5_static_branch_10/act/tx/hf/bind_account.shtml?url=%3Fcid%3D6283566315030888448&tel=15818619756", 
    "is_auto_use": 0, 
    "prd_id": "",
    "amountVal" : "2000"
  },                   
] 

var select = new CouponSelect({
  data: coupons,
  selectedVal: '6283566315030888448',
  onChange: function(i) {
    console.log(i);
  },
  onHelp: function() {
    console.log('help')
  }
});

function showSelect() {
  select.show()
}
```