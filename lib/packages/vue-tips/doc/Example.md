# 例子

```html
<div id="container">
  <div class="ui-btn ui-mb-10" @click="$showError('test')">toast</div>
  <div class="ui-btn ui-mb-10" @click="$showLoading()">loading</div>
  <div class="ui-btn" @click="$showTips({msg:'测试', isLoading:true, autoHide:true, hideTime:3000})">msg</div>
</div>
<script>
  Vue.use(UIVueTips);
  var app = new Vue({
    el: '#container',
  })
</script>
```
