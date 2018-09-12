# API

## ui-coupon-select

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| show| 是否显示，可以使用sync修饰符| Boolean | | false |
| title| 对话框标题 | String | | 选择红包/折扣券 |
| notUseDesc| 不使用按钮的文案 | String | | 不使用，就是任性 |
| list | 红包列表 | Array | |[] |
| cid | 选中的红包id | String | | 0 |


### 事件

| 名称 | 参数类型 | 说明 |
| :--- | :--- | :--- |
| update:show | Boolean| 表示红包列表此时是否应该展示 |
| update:cid | String | 表示当前选中了哪个红包 | 


