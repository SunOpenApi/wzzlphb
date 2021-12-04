
// 技术支持QQ565897782

module.exports = {
    transTime: function(e) {
        var t = new Date(1e3 * parseInt(e)), n = t.getFullYear(), r = t.getMonth() + 1, a = t.getDate(), s = t.getHours(), g = t.getMinutes(), o = t.getSeconds(), u = new Date();
        return Date.parse(u.toDateString()), n + "-" + r + "-" + a + " " + s + ":" + g + ":" + o;
    }
};