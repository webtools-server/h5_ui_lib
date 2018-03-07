  function Tips() {
    this.tipsHtml;
    this.config = {
        msg: "",
        isLoading: false,
        autoHide: true,
        hideTime: 1200
    };
    this.iconConf = {
        loading: '<span class="ui-spinner__icon ui-spinner__icon--anim"></span>',
        "none": ''
    };
    this.tipTemplate = '<div class="ui-toast"><div class="ui-toast__content">' +
        '<div class="ui-spinner">{{icon}}' +
        '<p class="ui-toast__text" id="bubble-text">{{text}}</p>' +
        '</div></div></div>';
}

$.extend(Tips.prototype, {
    showTips: function (option) {
        var _this = this;
        if(_this.tipsHtml) {return}
        var conf = $.extend({}, this.config, option);
        var html = this.tipTemplate.replace(/{{icon}}/, conf.isLoading ? this.iconConf.loading : "")
                    .replace(/{{text}}/, conf.msg);
        this.tipsHtml = $(html);
        $("body").append(this.tipsHtml);
        if(conf.autoHide) {
            setTimeout(function () {
                _this.closeTips();
            }, conf.hideTime);
        }
        this.lock = true;
    },
    showLoading: function (message) {
        this.showTips({
            msg: message || "努力加载中...",
            isLoading: true,
            autoHide: false
        })
    },
    showError: function (message) {
        var _this = this;
        clearInterval(_this.ptr);
        _this.ptr = setInterval(function () {
            if(!_this.tipsHtml) {
                _this.showTips({
                    msg: message
                });
                clearInterval(_this.ptr);
            }
        }, 200);
    },
    closeTips: function () {
        var _this = this;
        if(!_this.tipsHtml) {
            return _this;
        }
        _this.tipsHtml.remove();
        _this.tipsHtml = null;
        _this.lock = false;
        return _this;
    }
})

var tips = new Tips();
