# API

## $showTips(options)

显示tips

### options 

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| msg | 提示信息 | String | | '' |
| isLoading| 是否loading状态 | Boolean | | false |
| autoHide | 是否自动关闭 | Boolean | | true |
| hideTime | 自动关闭时间 | Number | | 1200 |
| iconClass | loading icon 的类名 | String | | 'ui-spinner__icon--anim' |

## $showLoading(msg)

显示loading

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| msg | 提示信息 | String | | '努力加载中...' |

## $showError(msg)

显示错误信息

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---| :----| :-----| :------|
| msg | 提示信息 | String | | '努力加载中...' |

## $hideTips()

隐藏tips