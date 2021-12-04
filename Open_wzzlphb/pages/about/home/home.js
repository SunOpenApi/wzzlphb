
// 技术支持QQ565897782

var t = getApp();

Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        starCount: 0,
        forksCount: 0,
        visitTotal: 0,
        StatusBar: t.globalData.StatusBar,
        CustomBar: t.globalData.CustomBar,
        modalName: null,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    attached: function() {
        var t = this;
        wx.showLoading({
            title: "数据加载中",
            mask: !0
        });
        var o = 0;
        (function a() {
            o < 20 ? setTimeout(function() {
                t.setData({
                    starCount: o,
                    forksCount: o,
                    visitTotal: o
                }), o++, a();
            }, 20) : t.setData({
                starCount: t.coutNum(3e3),
                forksCount: t.coutNum(484),
                visitTotal: t.coutNum(35700)
            });
        })(), wx.hideLoading();
    },
    methods: {
        coutNum: function(t) {
            return t > 1e3 && t < 1e4 && (t = (t / 1e3).toFixed(1) + "k"), t > 1e4 && (t = (t / 1e4).toFixed(1) + "W"), 
            t;
        },
        CopyLink: function(t) {
            wx.setClipboardData({
                data: t.currentTarget.dataset.link,
                success: function(t) {
                    wx.showToast({
                        title: "已复制",
                        duration: 1e3
                    });
                }
            });
        },
        showModal: function(t) {
            this.setData({
                modalName: t.currentTarget.dataset.target
            });
        },
        hideModal: function(t) {
            this.setData({
                modalName: null
            });
        },
        
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {
            return {
                title: "免费查王者荣耀战力排行榜，助你最低战力上榜！快速拿标！",
                path: "/pages/about/home/home",
                imageUrl: "/images/share.png"
            };
        },
        
// 技术支持QQ565897782

        onShareTimeline: function() {
            return {
                title: "免费查王者荣耀战力排行榜，助你最低战力上榜！快速拿标！",
                path: "/pages/about/home/home"
            };
        },

        getUserInfo: function(o) {
            o.detail.userInfo && (t.globalData.userInfo = o.detail.userInfo, this.setData({
                userInfo: o.detail.userInfo,
                hasUserInfo: !0
            }));
        }
    }
});


// 技术支持QQ565897782
