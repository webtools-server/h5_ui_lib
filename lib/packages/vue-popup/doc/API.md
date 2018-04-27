# API

## ui-popup

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| open| 是否显示，可以使用sync修饰符| Boolean | | false |
| showClose| 是否显示关闭按钮 | Boolean | | false |
| titleClass | title容器的class | Array | | |
| contentClass | content容器的class | Array | | |
| footerClass | footer容器的class | Array | | |
| titleBorder | title底部是否显示边框 | Boolean | | false | 
| reCaculateContentHeight | 窗口大小改变时是否重新计算内容高度 | Boolean | | true|

### slots

| name | 说明 |
| :--- | :--- |
| title | 浮层标题 |
| content | 浮层内容 |
| buttons | 浮层底部 |

### 事件

| 名称 | 参数类型 | 说明 |
| :--- | :--- | :--- |
| update:open | Boolean| 表示浮层此时是否应该展示 |

