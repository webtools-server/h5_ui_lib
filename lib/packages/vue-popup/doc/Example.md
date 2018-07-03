# 例子

```html
<div id="container">
  <div class="ui-btn" @click="isShowPopup = true">点我</div>
  <popup 
    :transition=true
    :open.sync="isShowPopup" 
    :show-close="true">

    <template slot="title">这是标题</template>

    <div slot="content">这是内容</div>

    <div slot="footer">这是底部</div>
  </popup>
</div>
<script>
  var app = new Vue({
    el: '#container',
    components: {
      [UIVuePopup .name]: UIVuePopup
    },
    data: {
      isShowPopup:  false
    }
  })
</script>
```html