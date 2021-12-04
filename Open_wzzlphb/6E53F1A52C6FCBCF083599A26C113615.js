
// 技术支持QQ565897782

var t = require("@babel/runtime/helpers/typeof.js");

!function(e, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (void 0).Ald = n();
}(0, function() {
    function e(t) {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_user_info"), C = v(wx.getStorageSync("aldstat_user_info").avatarUrl.split("/"));
        } catch (t) {}
        return 1 == t ? e : C;
    }
    function n() {
        "function" == typeof ut && "" === H && ut().then(function(t) {
            28 === t.length && (H = t, wx.setStorageSync("aldstat_op", t));
        });
    }
    function o(t) {
        this.app = t;
    }
    function r(e) {
        function n(t) {
            return Object.prototype.toString.call(t);
        }
        var o = {};
        return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t, e) {
            o["[object " + t + "]"] = t.toLowerCase();
        }), null == e ? e : "object" == t(e) || "function" == typeof e ? o[n.call(e)] || "object" : t(e);
    }
    function a(t) {
        R = y(), B = t, nt = t.scene, this.aldstat = new o(this);
    }
    function i(t) {
        var e;
        if (n(), e = t.scene != nt, nt = t.scene, U = 0, B = t, J = t.query.ald_share_src, 
        V = t.query.aldsrc || "", t.query.ald_share_src, tt || et || st || (T = !1), tt = !1, 
        (0 !== E && Date.now() - E > 3e4 || e) && (et || (k = y(), L = Date.now(), ct = 0)), 
        0 !== E && Date.now() - E < 3e4 && ($ = !0), t.query.ald_share_src && "1044" == t.scene && t.shareTicket ? wx.getShareInfo({
            shareTicket: t.shareTicket,
            success: function(t) {
                G = t, _("event", "ald_share_click", JSON.stringify(t));
            }
        }) : t.query.ald_share_src && _("event", "ald_share_click", 1), x("app", "show"), 
        "" === H) {
            var o = wx.getAccountInfoSync().miniProgram.appId;
            wx.login({
                success: function(t) {
                    wx.request({
                        url: "https://log.aldwx.com/authorize/mini_program_openid",
                        data: {
                            ai: o,
                            uuid: Q,
                            jc: t.code,
                            reqid: "1"
                        },
                        success: function(t) {
                            t.data.code || (H = t.data.data.openid, wx.setStorageSync("aldstat_op", t.data.data.openid));
                        }
                    });
                },
                fail: function(t) {}
            });
        }
    }
    function c() {
        n(), E = Date.now(), x("app", "hide");
    }
    function s(t) {
        K++, _("event", "ald_error_message", t);
    }
    function u(t) {
        Z = t;
    }
    function l() {
        it = Date.now(), X = M ? this.$mp.page.route : this.route, function(t, e) {
            var n = m();
            n.ev = t, n.life = e, n.pp = X, n.pc = Y, n.dr = Date.now() - L, (et || st) && (n.so = 1), 
            st = !1, et = !1, Z && "{}" != JSON.stringify(Z) && (n.ag = Z), V && (n.qr = V, 
            n.sr = V), J && (n.usr = J), $ && (n.ps = 1), W ? n.pdr = ct : (X, W = !0, n.ifp = W, 
            n.fp = X, n.pdr = 0), g(n);
        }("page", "show"), $ = !1;
    }
    function d() {
        Y = X, ct = Date.now() - it;
    }
    function h() {
        Y = X, ct = Date.now() - it;
    }
    function p() {
        _("event", "ald_pulldownrefresh", 1);
    }
    function f() {
        _("event", "ald_reachbottom", 1);
    }
    function w(t) {
        et = !0;
        var e = function(t) {
            if (-1 == t.indexOf("?")) return "";
            var e = {};
            return t.split("?")[1].split("&").forEach(function(t) {
                var n = t.split("=")[1];
                e[t.split("=")[0]] = n;
            }), e;
        }(t.path), n = {};
        for (var o in B.query) "ald_share_src" !== o && "ald_share_op" !== o || (n[o] = B.query[o]);
        var r = "";
        if (r = -1 == t.path.indexOf("?") ? t.path + "?" : t.path.substr(0, t.path.indexOf("?")) + "?", 
        "" !== e) for (var o in e) n[o] = e[o];
        for (var a in n.ald_share_src ? -1 == n.ald_share_src.indexOf(Q) && n.ald_share_src.length < 200 && (n.ald_share_src = n.ald_share_src + "," + Q) : n.ald_share_src = Q, 
        q.useOpen && (n.ald_share_op ? -1 == n.ald_share_op.indexOf(H) && n.ald_share_op.length < 200 && (n.ald_share_op = n.ald_share_op + "," + H) : n.ald_share_op = H), 
        n) -1 == a.indexOf("ald") && (r += a + "=" + n[a] + "&");
        return t.path = r + (q.useOpen ? "ald_share_op=" + n.ald_share_op + "&" : "") + "ald_share_src=" + n.ald_share_src, 
        _("event", "ald_share_status", t), t;
    }
    function g(t) {
        function e() {
            return new Promise(function(e, n) {
                var o = {
                    AldStat: "MiniApp-Stat",
                    se: I || "",
                    op: H || "",
                    img: C
                };
                "" === N || (o.ai = N), wx.request({
                    url: "https://" + j + ".aldwx.com/d.html",
                    data: t,
                    header: o,
                    method: "GET",
                    success: function(t) {
                        e(200 == t.statusCode ? "" : "status error");
                    },
                    fail: function() {
                        e("fail");
                    }
                });
            });
        }
        U++, t.at = k, t.uu = Q, t.v = A, t.ak = q.app_key.replace(/(\t)|(\s)/g, ""), t.wsr = B, 
        t.ifo = T, t.rq_c = U, t.ls = R, t.te = P, t.et = Date.now(), t.st = Date.now(), 
        t.ge = rt, q.useOpen ? "" === H ? ot.push(e) : (wx.Queue.push(e), ot.concat()) : wx.Queue.push(e);
    }
    function m() {
        var t = {};
        for (var e in F) t[e] = F[e];
        return t;
    }
    function v(t) {
        for (var e = "", n = 0; n < t.length; n++) t[n].length > e.length && (e = t[n]);
        return e;
    }
    
// 技术支持QQ565897782

    function y() {
        return "" + Date.now() + Math.floor(1e7 * Math.random());
    }
    function S(t) {
        var e = {};
        for (var n in t) "rawData" != n && "errMsg" != n && (e[n] = t[n]);
        return e;
    }
    function x(t, e) {
        var n = m();
        n.ev = t, n.life = e, n.ec = K, n.dr = Date.now() - L, "show" == e && (n.uo = q.useOpen), 
        V && (n.qr = V, n.sr = V), J && (n.usr = J), g(n);
    }
    function _(t, e, n) {
        var o = m();
        o.ev = t, o.tp = e, o.dr = Date.now() - L, n && (o.ct = n), g(o);
    }
    function b(t, e, n) {
        if (t[e]) {
            var o = t[e];
            t[e] = function(t) {
                n.call(this, t, e), o.call(this, t);
            };
        } else t[e] = function(t) {
            n.call(this, t, e);
        };
    }
    function O(t) {
        var e = {};
        for (var n in t) "onLaunch" !== n && "onShow" !== n && "onHide" !== n && "onError" !== n && (e[n] = t[n]);
        return e.onLaunch = function(e) {
            a.call(this, e), "function" == typeof t.onLaunch && t.onLaunch.call(this, e);
        }, e.onShow = function(e) {
            i.call(this, e), t.onShow && "function" == typeof t.onShow && t.onShow.call(this, e);
        }, e.onHide = function() {
            c.call(this), t.onHide && "function" == typeof t.onHide && t.onHide.call(this);
        }, e.onError = function(e) {
            s.call(this, e), t.onError && "function" == typeof t.onError && t.onError.call(this, e);
        }, e;
    }
    function D(t) {
        var e = {};
        for (var n in t) "onLoad" !== n && "onShow" !== n && "onHide" !== n && "onUnload" !== n && "onPullDownRefresh" !== n && "onReachBottom" !== n && "onShareAppMessage" !== n && (e[n] = t[n]);
        return e.onLoad = function(e) {
            u.call(this, e), "function" == typeof t.onLoad && t.onLoad.call(this, e);
        }, e.onShow = function(e) {
            l.call(this), "function" == typeof t.onShow && t.onShow.call(this, e);
        }, e.onHide = function(e) {
            d.call(this), "function" == typeof t.onHide && t.onHide.call(this, e);
        }, e.onUnload = function(e) {
            h.call(this), "function" == typeof t.onUnload && t.onUnload.call(this, e);
        }, e.onReachBottom = function(e) {
            f(), t.onReachBottom && "function" == typeof t.onReachBottom && t.onReachBottom.call(this, e);
        }, e.onPullDownRefresh = function(e) {
            p(), t.onPullDownRefresh && "function" == typeof t.onPullDownRefresh && t.onPullDownRefresh.call(this, e);
        }, t.onShareAppMessage && "function" == typeof t.onShareAppMessage && (e.onShareAppMessage = function(e) {
            var n = t.onShareAppMessage.call(this, e);
            return void 0 === n ? (n = {}).path = this.route : void 0 === n.path && (n.path = this.route), 
            w.call(this, n);
        }), e;
    }
    var q = require("2C524F812C6FCBCF4A34278613113615.js");
    void 0 === wx.Queue && (wx.Queue = new function() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var t = this;
        this.push = function(e) {
            this.tasks.push(new Promise(function(n, o) {
                var r = function() {
                    t.activeCount++, e().then(function(t) {
                        n(t);
                    }).then(function() {
                        t.next();
                    });
                };
                t.activeCount < t.concurrency ? r() : t.queue.push(r);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            t.activeCount--, t.queue.length > 0 && t.queue.shift()();
        };
    }(), wx.Queue.all()), "" === q.app_key && console.error("请在ald-stat-conf.js文件中填写小程序统计/广告监测平台创建小程序后生成的app_key，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南！"), 
    q.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户OpendID则不会上报数据，上传方式：http://doc.aldwx.com 小程序统计/广告监测平台-快速接入指南-上传OpenID！");
    var A = "7.4.1", j = "log", P = "wx", N = void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function(t) {
        return t.charCodeAt(0) + 9;
    }).join("-"), M = !1, k = y(), R = "", L = Date.now(), E = 0, I = "", H = function() {
        var t = "";
        try {
            t = wx.getStorageSync("aldstat_op");
        } catch (t) {}
        return t;
    }(), C = e(), U = 0, B = "", T = "", Q = function() {
        var t = "";
        try {
            t = wx.getStorageSync("aldstat_uuid");
        } catch (e) {
            t = "uuid_getstoragesync";
        }
        if (t) T = !1; else {
            t = function() {
                function t() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                }
                return t() + t() + t() + t() + t() + t() + t() + t();
            }();
            try {
                wx.setStorageSync("aldstat_uuid", t), T = !0;
            } catch (t) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return t;
    }(), J = "", V = "", K = 0, G = "", z = e(1), F = {}, W = !1, $ = !1, X = "", Y = "", Z = "", tt = !0, et = !1, nt = "", ot = new function() {
        this.request = [], this.updata = !1, this.push = function(t) {
            (this.request.length >= 8 && !this.updata && (this.updata = !0, n()), this.request.length >= 10) ? (this.request.shift()().then(function(t) {}).catch(function(t) {}), 
            this.request.push(t)) : this.request.push(t);
        }, this.concat = function() {
            this.request.map(function(t) {
                wx.Queue.push(t);
            }), this.request = [];
        };
    }(), rt = "", at = [ "aldVisit", "aldPayOrder" ], it = 0, ct = 0, st = !1;
    [ {
        name: "scanCode"
    }, {
        name: "chooseAddress"
    }, {
        name: "chooseImage"
    }, {
        name: "previewImage"
    }, {
        name: "chooseInvoiceTitle"
    }, {
        name: "chooseInvoice"
    } ].forEach(function(t) {
        t.fn = wx[t.name];
        var e = t.name;
        try {
            Object.defineProperty(wx, e, {
                get: function() {
                    return st = !0, t.fn;
                }
            });
        } catch (t) {}
    });
    var ut = "";
    wx.request({
        url: "https://" + j + ".aldwx.com/config/app.json",
        header: {
            AldStat: "MiniApp-Stat"
        },
        method: "GET",
        success: function(t) {
            200 === t.statusCode && (A < t.data.version && console.warn("您的SDK不是最新版本，部分功能不可用，请尽快前往 http://tj.aldwx.com/downSDK 升级"), 
            t.data.warn && console.warn(t.data.warn), t.data.error && console.error(t.data.error));
        }
    }), wx.aldstat = new o("");
    try {
        var lt = wx.getSystemInfoSync();
        F.br = lt.brand, F.pm = lt.model, F.pr = lt.pixelRatio, F.ww = lt.windowWidth, F.wh = lt.windowHeight, 
        F.lang = lt.language, F.wv = lt.version, F.wvv = lt.platform, F.wsdk = lt.SDKVersion, 
        F.sv = lt.system;
    } catch (t) {}
    wx.getNetworkType({
        success: function(t) {
            F.nt = t.networkType;
        }
    }), wx.getSetting({
        success: function(t) {
            (t.authSetting["scope.userLocation"] || q.getLocation) && wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    F.lat = t.latitude, F.lng = t.longitude, F.spd = t.speed;
                }
            });
        }
    }), o.prototype.sendEvent = function(e, n) {
        if ("" !== e && "string" == typeof e && e.length <= 255) if ("string" == typeof n && n.length <= 255) _("event", e, n); else if ("object" == t(n)) {
            if (JSON.stringify(n).length >= 255) return void console.error("自定义事件参数不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");
            if (function(e) {
                for (var n in e) if ("object" == t(e[n]) && null !== e[n]) return !0;
                return !1;
            }(n)) return void console.error("事件参数内部只支持Number、String等类型，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");
            _("event", e, JSON.stringify(n));
        } else void 0 === n ? _("event", e, !1) : console.error("事件参数必须为String、Object类型，且参数长度不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！"); else console.error("事件名称必须为String类型且不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");
    }, o.prototype.sendSession = function(t) {
        if ("" !== t && t) {
            I = t;
            var e = m();
            e.tp = "session", e.ct = "session", e.ev = "event", z && (e.ufo = z, "" !== G && (e.gid = G)), 
            g(e);
        } else console.error("请传入从后台获取的session_key");
    }, o.prototype.sendOpenid = function(t) {
        if ("" !== t && t && 28 === t.length) {
            H = t, wx.setStorageSync("aldstat_op", t);
            var e = m();
            e.tp = "openid", e.ev = "event", e.ct = "openid", g(e);
        } else console.error("OpenID不符合规则，请参考接入文档 http://doc.aldwx.com 小程序统计/广告监测平台-快速接入指南！");
    }, o.prototype.setOpenid = function(t) {
        "function" == typeof t && (ut = t, n());
    }, o.prototype.sendUser = function(t, e) {
        if ("" === z) {
            wx.setStorageSync("aldstat_user_info", e), z = e, C = v(e.avatarUrl.split("/"));
            var n = m();
            n.ufo = S(e), rt = S(e).gender, g(n);
        }
    };
    
// 技术支持QQ565897782

    for (var dt = {
        aldVisit: function(t) {
            if ("[object Object]" === Object.prototype.toString.call(t)) {
                var e = t.category, n = t.id, o = t.name;
                e && (0 === n || n) && o ? function(t, e, n) {
                    return "string" !== r(t) || t.length > 32 ? (console.error("category字段(商品类别)只支持String类型，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                    !1) : "number" !== r(e) && "string" !== r(e) ? (console.error("id字段(商品唯一id)只支持Number类型和String类型，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                    !1) : !("string" !== r(n) || n.length > 32) || (console.error("name字段(商品名称)只支持String类型，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                    !1);
                }(e, n, o) && _("visit", null, {
                    category: t.category,
                    id: t.id,
                    name: t.name
                }) : console.error("category、id、name为必传字段且数据类型必须符合规则,请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！");
            } else console.error("wx.aldVisit()传参不符合规则，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！");
        },
        aldPayOrder: function(t) {
            if ("[object Object]" === Object.prototype.toString.call(t)) {
                var e = t.price, n = t.details;
                if ((0 === e || e) && n) {
                    if (function(t, e) {
                        return 1 == t && 1 != t ? (console.error("price字段(付费金额)只支持Number类型和数字字符串，且不能小于0，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                        !1) : "number" !== r(t = Number(t)) || t < 0 || isNaN(t) ? (console.error("price字段(付费金额)只支持Number类型和数字字符串，且不能小于0，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                        !1) : !("[object Array]" !== Object.prototype.toString.call(e) || e.length < 1) || (console.error("details字段(订单详细信息)为Array类型，且长度不能小于1，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                        !1);
                    }(e, n)) {
                        for (var o = 0; o < n.length; o++) if (!function(t) {
                            var e = t.amount, n = t.category, o = t.id, a = t.name;
                            return 0 == e ? (console.error("details参数下amount字段值(商品数量)只支持Number类型和数字字符串，且不能小于或等于0，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1) : e && n && (0 === o || o) && a ? 1 == e && 1 != e ? (console.error("details参数下amount字段值(商品数量)只支持Number类型和数字字符串，且不能小于或等于0，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1) : "number" !== r(e = Number(e)) || e <= 0 || isNaN(e) ? (console.error("details参数下amount字段值(商品数量)只支持Number类型和数字字符串，且不能小于或等于0，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1) : "number" !== r(o) && "string" !== r(o) ? (console.error("id字段(商品唯一id)只支持Number类型和String类型，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1) : "string" !== r(n) || n.length > 32 ? (console.error("details参数下category字段值(商品类别)只支持String类型，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1) : !("string" !== r(a) || a.length > 32) || (console.error("details参数下name字段值(商品类别)只支持String类型，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1) : (console.error("amount、category、id、name为必传字段且数据类型必须符合规则,请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！"), 
                            !1);
                        }(n[o])) return;
                        _("pay", null, {
                            price: t.price,
                            details: t.details
                        });
                    }
                } else console.error("price、details为必传字段且数据类型必须符合规则,请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！");
            } else console.error("wx.aldPayOrder()传参不符合规则，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-智慧零售分析！");
        }
    }, ht = 0; ht < at.length; ht++) !function(t, e) {
        Object.defineProperty(wx, t, {
            value: e,
            writable: !1,
            enumerable: !0,
            configurable: !0
        });
    }(at[ht], dt[at[ht]]);
    return q.plugin ? {
        App: function(t) {
            return App(O(t));
        },
        Page: function(t) {
            return Page(D(t));
        },
        MpvueApp: function(t) {
            return M = !0, O(t);
        },
        MpvuePage: function(t) {
            return D(t);
        }
    } : void function() {
        var t = App, e = Page, n = Component;
        App = function(e) {
            b(e, "onLaunch", a), b(e, "onShow", i), b(e, "onHide", c), b(e, "onError", s), t(e);
        }, Page = function(t) {
            var n = t.onShareAppMessage;
            b(t, "onLoad", u), b(t, "onUnload", h), b(t, "onShow", l), b(t, "onHide", d), b(t, "onReachBottom", f), 
            b(t, "onPullDownRefresh", p), null != n && (t.onShareAppMessage = function(t) {
                if (void 0 !== n) {
                    var e = n.call(this, t);
                    return void 0 === e ? (e = {}).path = X : void 0 === e.path && (e.path = X), w(e);
                }
            }), e(t);
        }, Component = function(t) {
            try {
                var e = t.methods.onShareAppMessage;
                b(t.methods, "onLoad", u), b(t.methods, "onUnload", h), b(t.methods, "onShow", l), 
                b(t.methods, "onHide", d), b(t.methods, "onReachBottom", f), b(t.methods, "onPullDownRefresh", p), 
                null != e && (t.methods.onShareAppMessage = function(t) {
                    if (void 0 !== e) {
                        var n = e.call(this, t);
                        return void 0 === n ? (n = {}).path = X : void 0 === n.path && (n.path = X), w(n);
                    }
                }), n(t);
            } catch (e) {
                n(t);
            }
        };
    }();
});

// 技术支持QQ565897782
