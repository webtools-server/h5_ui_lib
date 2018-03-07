# 例子

```javascript 
var data = [
  { name:'河北', id:'冀',},
  { name:'山西', id:'晋',},
  { name:'辽宁', id:'辽',},
  { name:'吉林', id:'吉',},
  { name:'黑龙', id:'黑',},
  { name:'江苏', id:'苏',},
  { name:'浙江', id:'浙',},
  { name:'安徽', id:'皖',},
  { name:'福建', id:'闽',},
  { name:'江西', id:'赣',},
  { name:'山东', id:'鲁',},
  { name:'河南', id:'豫',},
  { name:'湖北', id:'鄂',},
  { name:'湖南', id:'湘',},
  { name:'广东', id:'粤',},
  { name:'海南', id:'琼',},
  { name:'四川', id:'川',},
  { name:'贵州', id:'黔',},
  { name:'云南', id:'滇',},
  { name:'陕西', id:'陕',},
  { name:'甘肃', id:'甘',},
  { name:'青海', id:'青',},
  { name:'台湾', id:'台',},
];
        
var picker = new Picker({
  data: data,
  title: '单项选择器',
  selectedIndex: 1,
  onChange: function(i) { console.log('change', i)},
  onConfirm: function(i) { console.log('confirm', i)},
});
```
