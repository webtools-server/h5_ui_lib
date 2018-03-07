# 使用说明

## 安装

```shell
npm install --save @jyb/h5_ui_css
```

## 引入

### 直接在页面中引入

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <title></title>
    <!-- 引入 css -->
    <link rel="stylesheet" href="path/to/ui/dist/style/ui.min.css"/>
    <!-- 引入适配设备的javascript -->
    <script>
      (function(doc, win) {
        var basicWidth = window.basicWidth || 750;
        var minWidth = 320;
        var htmlElement = doc.documentElement;
        var dpr = parseInt(window.devicePixelRatio || 1, 10); 
        var recalc = function() {
          var clientWidth = htmlElement.clientWidth || (basicWidth / 2);
          clientWidth = clientWidth < minWidth? minWidth : clientWidth;
          htmlElement.style.fontSize = 100 * (clientWidth / basicWidth) + 'px';
          htmlElement.setAttribute("data-dpi", dpr);
        };
        recalc();
        if (!win.addEventListener) return;
        win.addEventListener('resize', recalc, false);
      })(document, window);      
    </script>
  </head>
</html>
```

### 在scss中引入

#### 引入所有ui规范

```scss
@import '~@jyb/h5_ui_css/dist/style/ui';
```

#### 引入单个ui组件样式

```scss
@import '~@jyb/h5_ui_css/dist/style/widget/button';
```

## 使用

参考各个组件上手示例。



