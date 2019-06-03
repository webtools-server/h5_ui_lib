# API

## ui-attr-select

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| attrs| 可选择的属性| Array | | [] |
| skus| sku组合 | Object | | {} |
| choseArr| 选中的属性,可以使用sync修饰符同步更新 | Array | | [] |
| enableCancel | 选中的状态下是否可以再次点击取消选中 | Boolean | | true |

### 事件

| 名称 | 参数类型 | 说明 |
| :--- | :--- | :--- |
| update:choseArr | Array | 选中的属性 |
| chose:change | Array, Array | 选中的属性值，选中的属性描述 | 

## ui-attr-block

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| title| 属性的描述 | String | |  |
| tag| 容器使用的标签 | String | | ul |

### slot 

| 名称 | 说明 |
| :--- | :---|
| - | 属性内容 |

## ui-attr-item

### props 

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| text | 属性项的描述 | String | | | 
| active | 是否选中 | Boolean | | false | 
| disabled | 是否禁用 | Boolean | | false | 
| activeClass | 选中时应用的class | String | | ui-chose-list__item--cur |
| disabledClass | 禁用时选中的class | String | | ui-chose-list__item--disabled |
| tag | 属性项使用的标签 | String | | li |
