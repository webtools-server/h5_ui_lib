// var animationFrame = require("../fn/requestAnimationFrame");
// var scrollTo = require("../fn/scrollTo");

function empty() {}

var config = {
    titleBorder: false,     // 是否显示标题边线
    title: "",              // 标题内容
    showClose: false,       // 是否显示close按钮
    content: "",            // 显示的内容
    btnFn: [],              // 按钮列表{text:"",callback:function(){},css:""}
    mask: true,             // 是否显示mask
    selfAction: empty,         // 自定义事件
    onClose: empty,
    onShow: empty
};
var etHandler = {
    handleEvent : function (e) {
        e = e || window.event;
        var tag = e.target.tagName, node = $(e.target), et = node.attr("et");
        if (!et) {
            // 向上找
            while (node[0] != this && !et) {
                node = node.parent();
                et = node.attr("et");
            }
            if (!et) {
                return;
            }
        }
        // 超链接不阻值冒泡
        tag != "A" && e.stopPropagation();
        // 是对应的事件
        if (et.indexOf(e.type) == 0) {
            // 调用事件指定的函数
            etHandler[et.split(":")[1]](node, e);
        }
    },
    closeDialog : function () {
        if (!dialog.dialogNode) {
            return;
        }
        dialog.close();
    },
    selfDefineAction : function (node, e) {
        dialog.config.selfAction && dialog.config.selfAction(node, e);
    }
}

function Dialog() {
    this.dialogTemplate = {
        mask : '<div class="ui-overlay"></div>',
        title : '<div class="ui-dialog__title {{titleBorder}}">{{title}}{{close}}</div>',
        close : '<span class="ui-dialog__fn-wrap" et="click:closeDialog"><i class="ui-icon-close"></i></span>',
        content : '<div class="ui-dialog__content ui-ov-h">{{content}}</div>',
        button : '<div class="ui-dialog__footer">{{btnList}}</div>',
        btn : '<span class="ui-dialog__btn ui-d-b {{css}}" et="click:btnCallback{{index}}">{{text}}</span>'
    }
    this.container = $("#container");
    this.wh = window.innerHeight;    
}

Dialog.prototype.show = function (option) {
    // 已经存在一个dialog
    if(this.dialogNode) {
        return;
    }
    this.config = $.extend({}, config, option);
    // 当前滚动条位置
    this.scrollTop = window.pageYOffset;
    var dialogHtml = [], buttonList = [];
    dialogHtml[0] = '<div id="dialogNode">';
    dialogHtml[1] = '<div class="ui-overlay"></div>';
    dialogHtml[2] = `<div class="ui-dialog ui-mb-20 ${this.config.title? '': 'no-title'}" style="position:absolute;top:' + (this.scrollTop + this.wh * 0.2) + 'px;">`;
    // 标题
    if (this.config.title) {
        dialogHtml[3] = this.dialogTemplate.title.replace(/{{title}}/, this.config.title).replace(/{{close}}/, this.config.showClose ? this.dialogTemplate.close : "").replace(/{{titleBorder}}/, this.config.titleBorder ? "" : "ui-bb-n");
    }
    // 填充内容
    dialogHtml[4] = this.dialogTemplate.content.replace(/{{content}}/, this.config.content);
    // 按钮组
    if (this.config.btnFn.length > 0) {
        this.config.btnFn.forEach((button, index) => {
            buttonList.push(this.dialogTemplate.btn.replace(/{{text}}/, button.text).replace(/{{index}}/, index).replace(/{{css}}/, button.css ? button.css : ""));
            // 给evtHandler注册事件回调
            etHandler["btnCallback" + index] = button.callback;
        });
        dialogHtml[5] = this.dialogTemplate.button.replace(/{{btnList}}/, buttonList.join(""));
    }
    dialogHtml[6] = '</div></div>';
    this.dialogNode = $(dialogHtml.join(""));
    // 显示dialog
    $("body").append(this.dialogNode);
    this.resizeWindow();
    this.config.onShow.call(this);
}

Dialog.prototype.close = function () {
    if(!this.dialogNode) {
        return this;
    }
    this.dialogNode.find(".ui-dialog__content").off("touchmove", contentTouch)
    $(document).off("touchmove", stopDocMove);
    // 关闭浮层
    this.dialogNode.remove();
    this.dialogNode = null;
    this.config.onClose.call(this);
    this.container.height("auto").removeClass("ui-ov-h");
    // 清理回调函数
    for(var i=0;i<this.config.btnFn.length;i++) {
        delete evtHandler["btnCallback" + i];
    }
}

Dialog.prototype.resizeWindow = function () {
    var dialogHeight = this.dialogNode[0].scrollHeight;
    // 弹窗高度小区浏览器高度，重新调整位置
    if(dialogHeight < this.wh) {
        // 固定窗口高度
        this.container.height(this.wh).addClass("ui-ov-h");
        this.dialogNode.find(".ui-dialog").css({
            "top": "50%",
            "left": "50%",
            "transform": "translateX(-50%) translateY(-50%)",
            "-webkit-transform": "translateX(-50%) translateY(-50%)"
        })
    }
    this._bindEvent();    
}

Dialog.prototype._bindEvent = function () {
    this.dialogNode.on("click", etHandler.handleEvent);
    this.dialogNode.find(".ui-dialog__content").on("touchmove", contentTouch)
    $(document).on("touchmove", stopDocMove);
}

function contentTouch(e) {
    e.stopPropagation();
}

function stopDocMove(e) {
    e.preventDefault();
}

var dialog = new Dialog();