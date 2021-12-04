
// 技术支持QQ565897782

var n = null, o = null;

wx.createInterstitialAd && ((o = wx.createInterstitialAd({
    // 插屏广告id
    adUnitId: "adunit-9252d5964c8347f9"
})).onLoad(function() {}), o.onError(function(n) {}), o.onClose(function() {})), 
o && o.show().catch(function(n) {
    console.error(n);
}), o.show().catch(function(n) {
    console.error(n);
}), o.onLoad(function() {
    console.log("插屏 广告加载成功");
}), o.onError(function(n) {
    console.log(n);
}), o.onClose(function(n) {
    console.log("插屏 广告关闭");
}), Page({
    gotoPage3: function() {
        n && n.show().catch(function() {
            n.load().then(function() {
                return n.show();
            }).catch(function(n) {
                console.log("激励视频 广告显示失败");
            });
        }), n.onClose(function(n) {
            n.isEnded && wx.navigateTo({
                url: "/pages/ios_h/ios_h"
            });
        });
    },
    gotoPage4: function() {
        n && n.show().catch(function() {
            n.load().then(function() {
                return n.show();
            }).catch(function(n) {
                console.log("激励视频 广告显示失败");
            });
        }), n.onClose(function(n) {
            console.log(n.isEnded), n.isEnded && wx.navigateTo({
                url: "/pages/android_h/android_h"
            });
        });
    },
    data: {},
    onLoad: function(o) {
        // 激励广告id
        console.log(), wx.createRewardedVideoAd && ((n = wx.createRewardedVideoAd({
            adUnitId: "adunit-17fdc53a88ae9284"
        })).onLoad(function() {}), n.onError(function(n) {}), n.onClose(function(n) {}));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    
// 技术支持QQ565897782

    onShareAppMessage: function(n) {
        return n.from, {
            title: "王者改名神器给你，超实用！！",
            path: "/pages/zq/zq"
        };
    },
    onShareTimeline: function() {
        return {
            title: "王者改名神器给你，超实用！！",
            path: "/pages/zq/zq"
        };
    }
});

var t = null;

wx.createInterstitialAd && ((t = wx.createInterstitialAd({
    // 插屏广告id
    adUnitId: "adunit-9252d5964c8347f9"
})).onLoad(function() {}), t.onError(function(n) {}), t.onClose(function() {})), 
t && t.show().catch(function(n) {
    console.error(n);
});

// 技术支持QQ565897782
