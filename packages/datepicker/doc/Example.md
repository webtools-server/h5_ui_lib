# 例子
```javascript 
var dp = new Datepicker({
  title: '日期选择器',
  defaultValue: [2010, 10, 10],
  onChange: function(i) { console.log('change', i)},
  onConfirm: function(i) { console.log('confirm', i)},        
})

dp.show();
```