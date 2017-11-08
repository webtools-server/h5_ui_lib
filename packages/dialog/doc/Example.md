# 例子

## 页面元素

```html
<a id="default-dialog" class="btn-primary" href="javascript:;">dialog</a>
```

## 样式，lang=scss

### 全局样式文件
```html
  <link href="ui.min.css" rel="stylesheet"></link>
```

### 单个组件样式
```javascript
import '@jyb/ui-dialog/dist/bundle.scss';
```

## 调用

```javascript
import Dialog from '@jyb/lib-dialog'

const dialog = new Dialog({
    title: '标题', // 标题内容
    visible: false, // 默认显示
    showClose: true, // 是否显示close按钮
    content: '这是内容', // 显示的内容
    mask: true, // 是否显示mask
    btns: [{ // 按钮列表{text:"",callback:function(){},css:""}
      text: '确定',
      callback() {
        console.log('确定');
      }
    }, {
      text: '取消',
      callback() {
        console.log('取消');
      }
    }],
    onClose() {
      console.log('close');
    },
    onShow() {
      console.log('show');
    },
    onDispose() {
      console.log('dispose');
    }
  });
});

dialog.show();
```