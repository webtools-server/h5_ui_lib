# 快速开始

## 安装

```shell
npm install @jyb/ui-tab --save
```

## 使用

### 引入

```javascript
import Tab from '@jyb/ui-tab'
import '@jyb/ui-tab/dist/index.scss';
```

## 例子

```javascript
new Tab({
  onChange: function(index) { console.log(index); },
  defaultIndex: 0,
})
```



