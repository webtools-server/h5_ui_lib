# API

```javascript
import Popup from '@jyb/ui-popup';
```

## 初始化

### new Popup(options);

## 选项

### options
- Type: `Object`
- Default:

```javascript
const defaultOptions = {
  container: '#container',
  title: '', //标题
  content: '', //内容
  showClose: true,
  onShow: $.noop,
  onHide: $.noop,
  classes: {
    wrap: '',
    mask: '',
    title: '',
    content: '',
    footer: '',
    show: ''
  }
};
```

## 实例方法

### show()

显示

```javascript
instance.show();
```

### hide()

隐藏

```javascript
instance.hide();
```


### registerHandler(name, handler)

注册事件处理函数

```jsdoc
/**
 * 注册事件处理函数
 * @param {String} name 名称
 * @param {Function} handler 函数
 */
```

注册完成之后，可以在模板内容中这样使用：

`<a href="javascript:;" et="click:handlerName">click</a>`

```javascript
instance.registerHandler(name, handler);
```