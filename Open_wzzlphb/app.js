
// 技术支持QQ565897782

var e = require("@babel/runtime/helpers/defineProperty");

require("6E53F1A52C6FCBCF083599A26C113615.js");

App(e({
    onLaunch: function() {
        wx.cloud ? wx.cloud.init({
            traceUser: !0
        }) : console.error("请使用 2.2.3 或以上的基础库以使用云能力"), this.globalData = {};
    }
}, "onLaunch", function() {
    this.globalData = {
        swiperList: [ {
            id: 0,
            type: "image",
            url: "https://api.cxkf.cc/wxxcx/kh/wangzhe/img/1.jpg"
        }, {
            id: 1,
            type: "image",
            url: "https://api.cxkf.cc/wxxcx/kh/wangzhe/img/2.jpg"
        }, {
            id: 2,
            type: "image",
            url: "https://api.cxkf.cc/wxxcx/kh/wangzhe/img/3.jpg"
        }, {
            id: 3,
            type: "image",
            url: "https://api.cxkf.cc/wxxcx/kh/wangzhe/img/4.jpg"
        } ]
    };
}));

// 技术支持QQ565897782
