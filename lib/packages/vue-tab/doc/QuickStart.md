# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-tab --save-dev
```

## 使用

### 引入

引入组件
```javascript
import UIVueTab from '@jyb/ui-vue-tab';

// 全局注册组件
Vue.component(UIVueTab.Tab.name, UIVueTab.Tab);
Vue.component(UIVueTab.TabItem.name, UIVueTab.TabItem);
Vue.component(UIVueTab.TabContent.name, UIVueTab.TabContent); 

// 局部注册组件
new Vue({
  components: {
    [UIVueTab.Tab.name]: UIVueTab.Tab,
    [UIVueTab.TabItem.name]: UIVueTab.TabItem,
    [UIVueTab.TabContent.name]: UIVueTab.TabContent,
  }
})
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/tab';

或者在scss中引入全部样式
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;
```

## 例子
<a href="../demo/index.html" target="_blank">demo</a>
```html
  <div id="container">    
    <ui-tab>
      <template slot="bar">
        <ui-tab-item v-for="tab,index in tabs" 
          :is-active="currentIndex == index"
          @click="currentIndex=index"
          >{{ tab }}</ui-tab-item>
      </template>
      <div slot="content">
        <ui-tab-content v-for="item,index in content" v-show="currentIndex==index">{{item}}</ui-tab-content>
      </div>

    </ui-tab>
  </div>
  <script src="../dist/bundle.dev.js"></script>
  <script>
    Vue.component(UIVueTab.Tab.name, UIVueTab.Tab);
    Vue.component(UIVueTab.TabItem.name, UIVueTab.TabItem);
    Vue.component(UIVueTab.TabContent.name, UIVueTab.TabContent);    
    var app = new Vue({
      el: '#container',
      data: {
        tabs: [ 1, 2 ],
        content: [ 'test1', 'test2'],
        currentIndex: 1,
      },
    })
  </script>
```html



