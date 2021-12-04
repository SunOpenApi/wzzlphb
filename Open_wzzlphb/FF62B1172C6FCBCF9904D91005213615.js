Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.needShow = function() {
    var e = wx.getStorageSync("showCount") || 0, t = wx.getStorageSync("invaild") || 0, n = new Date().getTime();
    return e <= 0 || n > t;
}, exports.lessCount = function() {
    var e = wx.getStorageSync("showCount") || 0;
    wx.setStorageSync("showCount", --e);
}, exports.resetCount = function() {
    var e = new Date(new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1).getTime();
    wx.setStorageSync("invaild", e), wx.setStorageSync("showCount", 5);
};

// 技术支持QQ565897782
