
// 技术支持QQ565897782

var a = getApp();

Page({
    data: {
        StatusBar: a.globalData.StatusBar,
        CustomBar: a.globalData.CustomBar,
        ColorList: a.globalData.ColorList
    },
    onLoad: function() {},
    pageBack: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});

// 技术支持QQ565897782
