# API

## ui-dialog

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| open| 是否显示，可以使用sync修饰符| Boolean | | false |
| title| 对话框标题 | String | | 无 |
| showClose| 是否显示关闭按钮 | Boolean | | false |

### slots

| name | 说明 |
| :--- | :--- |
| content | 弹框内容 |
| buttons | 底部按钮 |

### 事件

| 名称 | 参数类型 | 说明 |
| :--- | :--- | :--- |
| update:open | Boolean| 表示弹窗此时是否应该展示 |

## ui-dialog-btn

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| strong| 按钮是否启用强调样式 | Boolean | | false |
| disabled | 按钮是否启用禁用样式 | Boolean | | false |

