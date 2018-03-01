# 例子

```html
<div id="container">
  <div class="ui-btn" @click="isShowDialog = true">点我</div>
  <ui-dialog 
    :open.sync="isShowDialog"
    :show-close=true
    :title="'测试'">
    <template slot="content">
      <p class="ui-text ui-text--large ui-ta-c ui-text--title">这是正文这是正文这是正文这是正文</p>
    </template>
    <template slot="buttons">
      <ui-dialog-btn @click="isShowDialog = false">取消</ui-dialog-btn>
      <ui-dialog-btn :strong=true @click="isShowDialog = false">确定</ui-dialog-btn>
    </template>
  </ui-dialog>
</div>
<script src="../dist/bundle.dev.js"></script>
<script>
  var Dialog = UIVueDialog.Dialog;
  var DialogBtn = UIVueDialog.DialogBtn;
  var app = new Vue({
    el: '#container',
    components: {
      [Dialog.name]: Dialog,
      [DialogBtn.name]: DialogBtn
    },
    data: {
      isShowDialog:  false
    }
  })
</script>
```