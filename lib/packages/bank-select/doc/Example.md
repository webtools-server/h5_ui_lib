# 例子

```javascript 
var banks = [
  {
    bankImg: './光大银行.png',
    bankCode: 1,
    text1: '招商银行(尾号9286)',
    text2: '单笔限额5万元'
  },
  {
    bankImg: './中信银行.png',
    bankCode: 2,
    text1: '中信银行(尾号9286)',
    text2: '单笔限额5万元'
  },
  {
    bankImg: './平安银行.png',
    bankCode: 3,
    text1: '平安银行(尾号9286)',
    text2: '单笔限额5万元'
  },
  {
    bankImg: './招商银行.png',
    bankCode: 4,
    text1: '招商银行(尾号9286)',
    text2: '单笔限额5万元',
    disabled: true,
  },
  {
    bankImg: './浦发银行.png',
    bankCode: 5,
    text1: '浦发银行(尾号9286)',
    text2: '单笔限额5万元'
  },                        
]

var select = new BankSelect({
  data: banks,
  selectedVal: 2,
  onChange: function(i) {
    console.log(i);
  },
  onAddCard: function() {
    console.log('添加银行卡')
  }
});
```
