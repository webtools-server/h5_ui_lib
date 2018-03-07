# 快速开始

## 安装

```shell
npm install @jyb/ui-vue-overlay --save-dev
```

## 使用

### 引入

```javascript
import PopMixin from '@jyb/ui-vue-overlay'
export default {
  name: 'dialog',
  mixins: [ PopMixin ],
}
```

引入单个组件的样式
```scss
@import '~@jyb/h5_ui_css/src/style/widget/overlay';
```

引入所有ui规范
```html
  <link href="path/h5_ui_css/dist/style/ui.min.css" rel="stylesheet"></link>
```
或者在scss中引入
```scss
@import '~@jyb/h5_ui_css/dist/style/ui;

## 例子

```html
<template>
  <div ref="popup" v-if="open" class="ui-dialog">
    <div v-if="title" class="ui-dialog__title">
      {{ title }}
      <span class="ui-dialog__fn-wrap" v-if="showClose" @click="close"><i class="ui-icon-close"></i></span>
    </div>
    <div class="ui-dialog__content">
      <slot name="content"></slot>
    </div>
    <div v-if="$slots.buttons" class="ui-dialog__footer">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script>
import PopMixin from '../overlay'
export default {
  name: 'ui-dialog',
  mixins: [ PopMixin ],
  props: {
    title: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    close: function () {
      this.$emit('update:open', false)
    }
  }
}
</script>
```
