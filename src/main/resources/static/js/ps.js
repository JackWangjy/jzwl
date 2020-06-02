!
function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "//<%=CSS_DOMAIN%>/qcloud/main/scripts/",
    e(0)
} ({
    0 : function(t, e, n) {
        window.$ = window.jQuery = n("uUzA");
        var i = n("YIfu"),
        o = (n("AxIY"), n("z9sE"), n("sdDX")),
        r = n("FXnu");
        $(function() {
            i.cssLoaded = !0;
            var t = o.query("loginType"),
            e = o.query("rc"),
            n = o.query("vf"),
            s = o.query("sc"),
            a = o.query("hideQQ") ? 1 : 0,
            c = o.query("hideMP") ? 1 : 0,
            l = o.query("theme") || "",
            u = "iframe" == l ? 1 : 0,
            h = "undefined" != typeof e && 0 == e,
            d = "undefined" != typeof n && 0 == n,
            f = "undefined" != typeof s && 0 == s,
            p = "https://cloud.tencent.com";
            if (window.G_base64Surl) try {
                p = r.atob(G_base64Surl)
            } catch(t) {}
            i.showLoginBox({
                defaultLoginType: t,
                s_url: p,
                container: document.getElementById("loginBox"),
                skipOwnerSelection: f,
                skipRegisterCompletion: h,
                skipLoginProtect: d,
                hideQQ: a,
                hideMP: c,
                hideMailSuggest: u,
                theme: l
            });
            var g = o.query("errorType");
            if (g) switch (g) {
            case "loginFail":
                o.showInputErrorTip(null, "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")
            }
            var m = {
                init: function() {
                    this.$wrapper = $(".J-wxmpBreakTip"),
                    this.$closeBtn = this.$wrapper.find(".J-wxmpBreakClose"),
                    this.$hideWXMPBreakTip = this.$wrapper.find(".J-hideWXMPBreakTip"),
                    this.bindEvents()
                },
                show: function(t) {
                    return this.isSupportStorage() ? window.localStorage.hideWXMPBreakTip ? t() : (this.$wrapper.show(), void(this.callback = t)) : t()
                },
                hide: function() {
                    this.$wrapper.hide()
                },
                checkHideWXMPBreakTip: function() {
                    this.$hideWXMPBreakTip.is(":checked") && (window.localStorage.hideWXMPBreakTip = 1)
                },
                bindEvents: function() {
                    var t = this;
                    this.$wrapper.find(".J-wxmpBreakClose").off().on("click",
                    function() {
                        t.checkHideWXMPBreakTip(),
                        t.hide()
                    }),
                    this.$wrapper.find(".J-wxmpHomeLink").off().on("click",
                    function() {
                        t.checkHideWXMPBreakTip(),
                        window.open("https://mp.weixin.qq.com/")
                    }),
                    this.$wrapper.find(".J-wxmpOauthLink").off().on("click",
                    function() {
                        t.checkHideWXMPBreakTip(),
                        t.callback && t.callback()
                    })
                },
                isSupportStorage: function() {
                    if (!window.localStorage) return ! 1;
                    try {
                        return window.localStorage.isPrivate = !1,
                        !0
                    } catch(t) {
                        return ! 1
                    }
                }
            };
            m.init(),
            window.wxmpBreak = function(t) {
                return top != self ? t() : void m.show(t)
            };
            var v = {
                init: function() {
                    this.$wrapper = $(".J-loginBreakHelper"),
                    this.$closeBtn = this.$wrapper.find(".J-helperClose"),
                    this.bindEvents()
                },
                show: function(t) {
                    this.$wrapper.show()
                },
                hide: function() {
                    this.$wrapper.hide()
                },
                bindEvents: function() {
                    var t = this;
                    this.$closeBtn.off().on("click",
                    function() {
                        t.hide()
                    }),
                    $(".J-openToHelper").off().on("click",
                    function() {
                        t.show()
                    })
                }
            };
            v.init()
        })
    },
    FXnu: function(t, e, n) { !
        function() {
            function t(t) {
                this.message = t
            }
            var n = e,
            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            t.prototype = new Error,
            t.prototype.name = "InvalidCharacterError",
            n.btoa || (n.btoa = function(e) {
                for (var n, o, r = 0,
                s = i,
                a = ""; e.charAt(0 | r) || (s = "=", r % 1); a += s.charAt(63 & n >> 8 - r % 1 * 8)) {
                    if (o = e.charCodeAt(r += .75), o > 255) throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    n = n << 8 | o
                }
                return a
            }),
            n.atob || (n.atob = function(e) {
                if (e = e.replace(/=+$/, ""), e.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var n, o, r = 0,
                s = 0,
                a = ""; o = e.charAt(s++);~o && (n = r % 4 ? 64 * n + o: o, r++%4) ? a += String.fromCharCode(255 & n >> ( - 2 * r & 6)) : 0) o = i.indexOf(o);
                return a
            })
        } ()
    },
    YIfu: function(t, e, n) {
        var i = n("WPtr"),
        o = Math.random().toString(36).slice(2),
        r = n("4G7m"),
        s = n("ijdI"),
        a = n("sdDX"),
        c = n("Uzku"),
        l = n("M34W"),
        u = l.getRealHostname(),
        h = n("N7Fw"),
        d = n("wohU"),
        f = a.__,
        p = {
            name: "login",
            _uin: "",
            _csrfCode: "",
            _loginNamespace: ".qcmain_login_dialog",
            _loginboxId: "qcmain_login_box_" + o,
            _loginmaskId: "qcmain_login_mask_" + o,
            _currentLoginType: "",
            init: function() {
                return this.updateUin(),
                this.updateCsrfCode(),
                window.QCLoginCssLoaded && (a.cssLoaded = !0),
                this
            },
            getUin: function() {
                return this._uin
            },
            getCsrfCode: function() {
                return this._csrfCode
            },
            updateUin: function() {
                var t = i.get("uin") || "";
                this._uin = t.replace(/^o0*/, "")
            },
            isLogin: function() {
                var t = i.get("skey"),
                e = i.get("uin") || "";
                return e && t
            },
            updateCsrfCode: function() {
                var t = i.get("skey") || i.get("p_skey");
                if (t) {
                    for (var e = 5381,
                    n = 0,
                    o = t.length; n < o; n += 1) e += (e << 5) + t.charCodeAt(n);
                    this._csrfCode = 2147483647 & e
                } else this._csrfCode = ""
            },
            gotoLoginPage: function(t) {
                var e = "https://" + u + "/login";
                t !== !0 && (e += "?s_url=" + encodeURIComponent(location.href)),
                this._clearLoginState(),
                location.href = e
            },
            gotoMobilePtloginPage: function(t, e) {
                var n = this;
                n.redirectToQQConnect()
            },
            redirectToQQConnect: function() {
                var t = this; ! d.isSupportQQOauth() && a.isMobile() ? d.showQQNotSupportGuide() : t._redirect(t._getPtloginUrl(t.opts))
            },
            redirectToWeworkSubaccount: function() {
                const t = this.opts.wework_subaccount_url + "?s_url=" + encodeURIComponent(this.opts.s_url);
                this._redirect(t)
            },
            gotoMobileLoginPage: function(t) {
                return this.gotoLoginPage()
            },
            gotoRegisterPage: function() {
                location.href = "https://" + u + "/register?s_url=" + encodeURIComponent(location.href)
            },
            preHandlerOpts: function(t) {
                var e = this;
                t = t || {},
                t.s_url || t.container || (r.s_url = location.href),
                t.isThirdParty && (r.isThirdParty = t.isThirdParty, r.defaultLoginType = "email"),
                t.theme && "default" !== t.theme ? r.isOauth2 = !0 : r.isOauth2 = !1,
                t.hideQQ && (r.register_url = r.register_url + "&hideQQ=1"),
                t.hideMP && (r.register_url = r.register_url + "&hideMP=1"),
                t.language && (f = a.getTranslator(t.language));
                var n = a.getLastLoginType(),
                o = ("" + t.defaultLoginType).toLowerCase();
                /^(email|wx|wework)$/.test(o) || (o = r.defaultLoginType),
                "wx" !== o || r.enableIframeWechatLogin || (o = r.defaultLoginType),
                n || (n = o),
                "wx" !== n || r.enableIframeWechatLogin || (n = o),
                "qq" === n && (n = o),
                t.isThirdParty || (n = o),
                t.defaultLoginType = o,
                this._currentLoginType = n,
                location.hostname && location.hostname.indexOf("intl.cloud.tencent.com") != -1 && (this._currentLoginType = t.defaultLoginType = r.defaultLoginType = "email", r.isIntl = 1),
                !d.isSupportWxOauth() && a.isMobile() && (this._currentLoginType = t.defaultLoginType = r.defaultLoginType = "email"),
                t.fwd_flag = this._getForwardDirectiveFlag(t),
                this.opts = $.extend({
                    __: f,
                    lusername: i.get("lusername") || "",
                    language: e._getLanguage(t),
                    isMobile: a.isMobile(),
                    isWechat: a.isWechat(),
                    isSupportWxLoginInMobile: a.isSupportWxLoginInMobile(),
                    isInWeapp: a.isInWeapp(),
                    isPad: a.isPad(),
                    activeTab: "wx"
                },
                r, t),
                this.opts.wechatLoginUrl = a.getWechatLoginUrl(),
                this.opts.skipRegisterCompletion || (this.opts.wechatLoginUrl = this.opts.wechatLoginUrl + "action=associate&")
            },
            ensureCSRFToken: function() {
                var t = i.get("qcmainCSRFToken");
                if (!t) {
                    var e = {
                        domain: l.getCookieDomain(),
                        path: "/"
                    };
                    t = h.gen(),
                    i.set("qcmainCSRFToken", t, e)
                }
            },
            showLoginBox: function(t) {
                var e = this;
                e.ensureCSRFToken(),
                e.preHandlerOpts(t),
                a.detectWxDomain();
                var n = i.get("subAccountLoginPage");
                return ! e.opts.container && n ? (n.indexOf("?") == -1 && (n = n + "?s_url=" + encodeURIComponent(e.opts.s_url)), location.href = n) : e.opts.container || !a.isMobile() && 2 != i.get("intl") ? void a.loadCss().done(function() {
                    if ($('[data-name="loginApiCss"]').removeAttr("disabled").prop("disabled", !1), e.opts.container) {
                        var t = e.$loginbox = $(a.tmpl(s, e.opts));
                        $(e.opts.container).append(t)
                    } else {
                        var t = e._getLoginBox().show(),
                        n = (e._getLoginMask().show(), $(window)),
                        i = "resize" + e._loginNamespace;
                        "message" + e._loginNamespace;
                        t.html($(a.tmpl(s, e.opts))),
                        n.off(i).on(i,
                        function() {
                            t.css({
                                left: function() {
                                    return (n.width() - t.width()) / 2
                                },
                                top: function() {
                                    var e = (n.height() - t.height()) / 2;
                                    return Math.max(0, Math.min(300, e))
                                }
                            })
                        }).trigger(i)
                    }
                    e.opts.beforeBindEvent && "function" == typeof e.opts.beforeBindEvent && e.opts.beforeBindEvent(),
                    e.bindEvents(),
                    e.cssHandler(),
                    e.configDeviceChecker()
                }) : e._getLoginPage()
            },
            configDeviceChecker: function() {
                var t = this;
                d.config({
                    switchToQQ: function() {
                        t.switchLoginType("qq")
                    },
                    switchToWX: function() {
                        t._redirect(t._getWXLoginUrl())
                    },
                    switchToEmail: function() {
                        t.switchLoginType("email")
                    }
                })
            },
            cssHandler: function() {
                var t = this;
                3 == t.$loginbox.find(".clg-other-tool .clg-other-tool-item").length && t.$loginbox.find(".clg-other-tool .clg-other-tool-item:eq(2)").css("text-align", "inherit")
            },
            doCheckLogin: function() {
                var t = this,
                e = this.opts.theme;
                if (window.top == window.self && this.opts.container && !(e && "default" != e || this.stopCheckLogin)) return this.isLogin() ? window.G_isLogined && window.G_nickname ? (window.G_isIntl != t.opts.isIntl ? t.checkLoginResult(!1) : t.checkLoginResult(window.G_isLogined, G_nickname), window.G_isLogined = !1, void(window.G_nickname = "")) : void this.checkLoginRequest(function(e, n) {
                    setTimeout(function() {
                        t.checkLoginResult(e, n)
                    },
                    3e3)
                }) : this.checkLoginResult(!1)
            },
            checkLoginRequest: function(t) {
                var e = this;
                this.updateCsrfCode(),
                this.updateUin(),
                $.ajax({
                    url: r.check_login_url,
                    method: "GET",
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    data: {
                        csrfCode: this.getCsrfCode(),
                        uin: this.getUin(),
                        action: "checkLogin"
                    },
                    cache: !1,
                    success: function(n) {
                        n = n || {};
                        var i = n.data || {};
                        0 == n.code ? e.opts && e.opts.container && i.isIntl != e.opts.isIntl ? t(!1) : t(!0, i.nickname || e.getUin()) : t(!1)
                    },
                    error: function() {
                        t(!1)
                    }
                })
            },
            checkLoginResult: function(t, e) {
                var n = this,
                i = (a.requireSeajsModule("dialog"), n.$loginbox.find(".J-loginedInfo"));
                this.stopCheckLogin || (t ? (n.$loginbox.find(".J-loginContentBox").hide(), n.$loginbox.find(".J-otherMod").hide(), i.find(".J-showMsg").html(f("\u8d26\u53f7") + "\uff08" + a.htmlEncode(e) + "\uff09" + f("\u5df2\u767b\u5f55\uff0c\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u767b\u5f55\u7ee7\u7eed\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u8d26\u53f7\u767b\u5f55")), i.show(), $("#loginAbout").hide()) : i.is(":visible") && (n.$loginbox.find(".J-otherMod").show(), n.switchLoginType(n._currentLoginType)), setTimeout(function() {
                    n.doCheckLogin()
                },
                3e3))
            },
            bindEvents: function() {
                var t = this;
                t.switchLoginType(t._currentLoginType),
                t.$loginbox.find(".J-loginBtn").off().on("click",
                function() {
                    t.sendLoginRequest()
                }),
                t.$loginbox.find(".J-changeVCode").off().on("click",
                function() {
                    t._setVCodeImgUrl()
                }),
                t.$loginbox.find(".J-loginForm input").off().on("blur",
                function() {
                    a.hideInputErrorTip(this),
                    a.hidePromptTip(this)
                }).on("keypress",
                function(t) {
                    a.hideInputErrorTip(this),
                    $(this).hasClass("J-password") && a.capslock(t) && a.showPromptTip(this, "\u952e\u76d8\u5927\u5199\u9501\u5b9a\u5df2\u6253\u5f00\uff0c\u8bf7\u6ce8\u610f")
                }),
                t.$loginbox.on("keyup", ".J-password",
                function(t) {
                    20 == (t.which || t.keyCode) && a.hidePromptTip()
                }),
                t.$loginbox.find(".J-password, .J-vcodeInput").off("keydown").on("keydown",
                function(e) {
                    10 != e.which && 13 != e.which || t.sendLoginRequest()
                }),
                t.$loginbox.find(".J-closeLoginBox").off().on("click",
                function() {
                    t.hideLoginBox()
                }),
                t.$loginbox.find(".J-link").off().on("click",
                function() {
                    var e = $(this);
                    return "wxBreak" == e.attr("data-action") ? d.isSupportWxOauth() ? t._redirect($(this).attr("href")) : d.showWxNotSupportGuide() : t._redirect($(this).attr("href")),
                    !1
                }),
                t.$loginbox.find(".J-btnSwitchLoginType").off().on("click",
                function(e) {
                    e.preventDefault();
                    var n = $(this).data("type");
                    t.switchLoginType(n)
                }),
                t.$loginbox.on("click", ".J-loginTab",
                function() {
                    var e = $(this),
                    n = e.data("type");
                    e.addClass("actived").siblings().removeClass("actived"),
                    "wx" === n ? (t.$loginbox.find(".J-wxModContaner").show(), t.$loginbox.find(".J-weworkModContaner").hide()) : (t.$loginbox.find(".J-wxModContaner").hide(), t.$loginbox.find(".J-weworkModContaner").show()),
                    t.switchLoginType(n)
                }),
                "wework" === this._currentLoginType && $('.J-loginTab[data-type="wework"]').trigger("click"),
                !t.opts.hide_close_icon && t.$loginmask && t.$loginmask.off().on("click",
                function() {
                    t.hideLoginBox()
                }),
                a.isMobile() || t.opts.hideMailSuggest || new c({
                    input: t.$loginbox.find(".J-username"),
                    suggest: t.$loginbox.find(".J-mailSuggest")
                }),
                t.$loginbox.on("click", ".J-switchChineseLogin",
                function() {
                    i.remove("intl", {
                        domain: l.getCookieDomain(),
                        path: "/"
                    }),
                    t.logout(),
                    t._redirect("https://cloud.tencent.com/login?s_url=" + encodeURIComponent(t.opts.s_url))
                }),
                t.$loginbox.on("click", ".J-switchIntlLogin",
                function() {
                    t.logout(),
                    t._redirect("https://intl.cloud.tencent.com/login?s_url=" + encodeURIComponent(t.opts.s_url))
                }),
                t.$loginbox.on("click", ".J-switchQQLogin",
                function() {
                    a.saveLoginTypeInLocal("qq"),
                    t.redirectToQQConnect()
                }),
                t.$loginbox.find(".J-loginContinue").off().on("click",
                function() {
                    t.stopCheckLogin = !0,
                    t.$loginbox.find(".J-otherMod").show(),
                    t.switchLoginType(t._currentLoginType)
                }),
                t.$loginbox.find(".J-loginedInfo .J-btn").off().on("click",
                function() {
                    t._redirect(t.opts.s_url)
                }),
                t.$loginbox.find(".J-subAccountLogin").off().on("click",
                function() {
                    t.logout();
                    var e = t.opts.subaccount_url + "?s_url=" + encodeURIComponent(t.opts.s_url);
                    t._redirect(e)
                }),
                t.$loginbox.on("click", ".J-forgetPsw",
                function() {
                    t._redirect(t.opts.forgetpwd_url)
                }),
                t.$loginbox.on("click", ".J-forgetAccount",
                function() {
                    t._redirect(t.opts.forget_account_url)
                }),
                t.$loginbox.on("click", ".J-reloadWX",
                function() {
                    t.$loginbox.find("#wxFrame").attr("src", t._getWXQrcodeUrl()).show()
                }),
                t.$loginbox.on("click", ".J-reloadWework",
                function() {
                    t.$loginbox.find("#weworkFrame").attr("src", t._getWeworkLoginUrl()).show()
                }),
                t.$loginbox.on("click", ".J-backToMainMod a",
                function() {
                    t._leaveEmailMod();
                    var e = t.$loginbox.find(".J-loginTab.actived").data("type") || "wx";
                    t.switchLoginType(e)
                }),
                $(".J-openToWXLink").off().on("click",
                function() {
                    window.open(t._getWXLoginUrl())
                }),
                t.doCheckLogin()
            },
            sendLoginRequest: function() {
                var t = this,
                e = a.checkLoginForm();
                e && (e.action = "login", t.opts.isThirdParty || (e.areaType = t.opts.isIntl ? 2 : 1), t.$loginbox.find(".J-loginBtn").hide().next("a").show(), u == location.host && location.protocol.indexOf("https") != -1 ? $.ajax({
                    url: this.opts.qcloud_login_url,
                    data: JSON.stringify(e || {}),
                    method: "POST",
                    type: "POST",
                    timeout: 2e4,
                    contentType: "application/json; charset=UTF-8"
                }).always(function(e) {
                    t.loginReturnHandle(e)
                }) : a.proxyPost({
                    url: this.opts.qcloud_login_url,
                    data: e
                },
                function(e) {
                    t.loginReturnHandle(e)
                }))
            },
            checkNeedRefreshVcode: function() {
                var t = this;
                t.$loginbox.find(".J-vcodeArea").is(":visible") && (t.$loginbox.find(".J-password").val(""), t.$loginbox.find(".J-vcodeInput").val(""), t.$loginbox.find(".J-vcodeArea").show(), t._setVCodeImgUrl())
            },
            loginReturnHandle: function(t) {
                var e = this;
                switch (t = t || {},
                0 != t.code && e.$loginbox.find(".J-loginBtn").show().next("a").hide(), +t.code) {
                case 0:
                    e._redirect(e.opts.login_forward_url + "?s_url=" + encodeURIComponent(e.opts.s_url) + "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag));
                    break;
                case 70002:
                    a.showInputErrorTip(e.$loginbox.find(".J-username"), "\u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165");
                    break;
                case 70006:
                case 70008:
                    e.checkNeedRefreshVcode(),
                    a.showInputErrorTip(e.$loginbox.find(".J-password"), "\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165");
                    break;
                case 70007:
                    e.$loginbox.find(".J-password").val(""),
                    a.showInputErrorTip(e.$loginbox.find(".J-password"), "\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),
                    e.$loginbox.find(".J-vcodeInput").val(""),
                    e.$loginbox.find(".J-vcodeArea").show(),
                    e._setVCodeImgUrl();
                    break;
                case 70010:
                    a.showInputErrorTip(null, f('\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8d85\u8fc7\u5f53\u65e5\u6700\u5927\u6b21\u6570\uff0c\u5efa\u8bae\u60a8\u901a\u8fc7 <a class="J-forgetPsw" href="javascript:;">\u5fd8\u8bb0\u5bc6\u7801</a> \u6216 <a class="J-forgetAccount" href="javascript:;">\u5fd8\u8bb0\u8d26\u53f7</a> \u627e\u56de\u8d26\u53f7\u5bc6\u7801\uff0c\u6b21\u65e5\u518d\u5c1d\u8bd5\u767b\u5f55'));
                    break;
                case 310001:
                    e.$loginbox.find(".J-vcodeInput").val(""),
                    e.$loginbox.find(".J-vcodeArea").show(),
                    a.showInputErrorTip(e.$loginbox.find(".J-vcodeInput"), "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
                    e._setVCodeImgUrl();
                    break;
                case 310002:
                    e.$loginbox.find(".J-vcodeInput").val(""),
                    e.$loginbox.find(".J-vcodeArea").show(),
                    a.showInputErrorTip(e.$loginbox.find(".J-vcodeInput"), "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),
                    e._setVCodeImgUrl();
                    break;
                case 70024:
                    e.opts.isIntl ? a.showInputErrorTip(null, 'Your account is for Tencent Cloud China\uff0c<a href="javascript:;" class="J-switchChineseLogin">Log in now</a>') : a.showInputErrorTip(null, f("\u8be5\u8d26\u53f7\u5c5e\u4e8e\u56fd\u9645\u7ad9\u8d26\u53f7\uff0c") + '<a href="javascript:;" class="J-switchIntlLogin">' + f("\u524d\u5f80\u767b\u5f55") + "</a>");
                    break;
                case 30301:
                    a.isInWeapp() ? a.showInputErrorTip(e.$loginbox.find(".J-password"), "\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165") : a.showInputErrorTip(null, f('\u8be5\u8d26\u53f7\u53ef\u80fd\u662f\u901a\u8fc7QQ\u5feb\u6377\u6ce8\u518c\uff0c\u8bf7<a href="javascript:;" class="J-switchQQLogin">\u5207\u6362\u81f3QQ\u767b\u5f55<a/>'));
                    break;
                case 20003:
                    e.showMailActivationTip();
                    break;
                case 30007:
                    a.showInputErrorTip(null, f('\u8d26\u53f7\u5bc6\u7801\u8f93\u5165\u5f53\u65e5\u4ec5\u52691\u6b21\u673a\u4f1a\uff0c\u662f\u5426 <a class="J-forgetPsw" href="javascript:;">\u5fd8\u8bb0\u5bc6\u7801</a> \u6216 <a class="J-forgetAccount" href="javascript:;">\u5fd8\u8bb0\u8d26\u53f7</a>'));
                    break;
                default:
                    a.showInputErrorTip(e.$loginbox.find(".J-username"), "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")
                }
            },
            showMailActivationTip: function() {
                var t = this,
                e = {
                    "qq.com": "qq.com",
                    "163.com": "163.com",
                    "sina.com": "sina.com",
                    "gmail.com": "google.com",
                    "126.com": "126.com",
                    "hotmail.com": "live.com",
                    "21cn.com": "21cn.com",
                    "yahoo.com": "yahoo.com",
                    "yahoo.com.cn": "yahoo.com.cn",
                    "live.com": "live.com",
                    "sohu.com": "sohu.com",
                    "sina.com.cn": "sina.com.cn",
                    "tencent.com": "tencent.com",
                    "msn.com": "msn.com",
                    "tom.com": "tom.com"
                },
                n = t.$loginbox.find(".J-username"),
                i = $.trim(n.val()),
                o = i.split("@")[1];
                e[o] ? (a.showInputErrorTip(n, '\u6b64\u90ae\u7bb1\u5730\u5740\u5c1a\u672a\u6fc0\u6d3b\uff0c\u8bf7<a target="_blank">\u67e5\u770b\u6fc0\u6d3b\u90ae\u4ef6<a/>\uff0c\u5b8c\u6210\u6fc0\u6d3b\u540e\u91cd\u65b0\u767b\u5f55\u3002'), $(".J-loginTip a").attr("href", "http://mail." + e[o])) : a.showInputErrorTip(n, "\u6b64\u90ae\u7bb1\u5730\u5740\u5c1a\u672a\u6fc0\u6d3b\uff0c\u8bf7\u67e5\u770b\u6fc0\u6d3b\u90ae\u4ef6\uff0c\u5b8c\u6210\u6fc0\u6d3b\u540e\u91cd\u65b0\u767b\u5f55\u3002")
            },
            switchLoginType: function(t, e) {
                var n = this;
                switch (t) {
                default:
                case "email":
                    $("#loginAbout").hide(),
                    n._currentLoginType = t,
                    n._enterEmailMod(),
                    a.saveLoginTypeInLocal("email");
                    break;
                case "qq":
                    a.saveLoginTypeInLocal("qq"),
                    n.redirectToQQConnect();
                    break;
                case "wx":
                    $("#loginAbout").show(),
                    n.opts.enableIframeWechatLogin ? (n._currentLoginType = t, n._leaveEmailMod(), n.$loginbox.find("#wxFrame").attr("src") || (n.$loginbox.find("#wxFrame").hide().attr("src", n._getWXQrcodeUrl()), setTimeout(function() {
                        n.$loginbox.find("#wxFrame").show()
                    },
                    400)), a.saveLoginTypeInLocal(t)) : n._redirect(n._getWXLoginUrl());
                    break;
                case "wework":
                    n._leaveEmailMod(),
                    n.$loginbox.find("#weworkFrame").hide().attr("src", n._getWeworkLoginUrl()),
                    setTimeout(function() {
                        n.$loginbox.find("#weworkFrame").show()
                    },
                    400);
                    break;
                case "wework-m":
                    a.saveLoginTypeInLocal("wework"),
                    n.redirectToWeworkSubaccount();
                    break;
                case "wxmp":
                    window.wxmpBreak ? window.wxmpBreak(function() {
                        n._redirect(n._getWXMPLoginUrl())
                    }) : n._redirect(n._getWXMPLoginUrl())
                }
                a.notifyResize()
            },
            hideLoginBox: function() {
                this.$loginbox && this.$loginbox.empty().hide(),
                this.$loginmask && this.$loginmask.hide(),
                this.opts && !this.opts.container && $('[data-name="loginApiCss"]').attr("disabled", !0).prop("disabled", !0)
            },
            logout: function() {
                this._clearLoginState()
            },
            _getLoginBox: function() {
                var t = $("#" + this._loginboxId);
                return t.length || (t = $("<div>").css({
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "460px",
                    height: "534px",
                    "background-color": "transparent",
                    "z-index": 9001,
                    "border-radius": "4px"
                }).attr("id", this._loginboxId).appendTo("body")),
                this.$loginbox = t
            },
            _getLoginMask: function() {
                var t = $("#" + this._loginmaskId);
                return t.length || (t = $("<div>").css({
                    position: "fixed",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    background: "#000",
                    opacity: ".75",
                    "z-index": 9e3
                }).attr("id", this._loginmaskId).appendTo("body")),
                this.$loginmask = t
            },
            _getPtloginUrl: function(t) {
                var e = this.opts.qqLoginUrl,
                n = {};
                return n.s_url = this.opts.s_url,
                "undefined" != typeof this.opts.fwd_flag && (n.fwd_flag = this.opts.fwd_flag),
                e + $.param(n)
            },
            _getWXLoginUrl: function(t) {
                var e = this.opts.wechatLoginUrl + "s_url=" + encodeURIComponent(this.opts.s_url);
                return t && (e += "&theme=simple"),
                e += "&t=" + (new Date).getTime(),
                "undefined" != typeof this.opts.fwd_flag && (e += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag)),
                e
            },
            _getWXQrcodeUrl: function() {
                var t = r.wechatLoginUrl;
                return this.opts.skipRegisterCompletion || (t += "action=associate&"),
                t += "s_url=" + encodeURIComponent(this.opts.s_url),
                t += "&theme=simple&t=" + (new Date).getTime(),
                "undefined" != typeof this.opts.fwd_flag && (t += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag)),
                t
            },
            _getWXMPLoginUrl: function() {
                var t = this.opts.mpLoginUrl + "s_url=" + encodeURIComponent(this.opts.s_url);
                return "undefined" != this.opts.fwd_flag && (t += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag)),
                t
            },
            _getWeworkLoginUrl: function() {
                var t = r.weworkLoginUrl + "?s_url=" + encodeURIComponent(this.opts.s_url);
                "undefined" != this.opts.fwd_flag && (t += "&fwd_flag=" + encodeURIComponent(this.opts.fwd_flag));
                var e = r.weworkQrcodeUrl + "?s_url=" + encodeURIComponent(t);
                return e
            },
            _getForwardDirectiveFlag: function(t) {
                var e = 1,
                n = 2,
                i = 4,
                o = 0;
                return t.shallowLogin || t.skipRegisterCompletion || (o += e),
                t.shallowLogin || t.skipLoginProtect || (o += n),
                t.shallowLogin || t.skipOwnerSelection || (o += i),
                o
            },
            _getLanguage: function(t) {
                return (t || {}).language || i.get("language") || ""
            },
            _getVCodeUrl: function() {
                return this.opts.vcode_url + "?t=" + (new Date).getTime()
            },
            _setVCodeImgUrl: function() {
                this.$loginbox.find(".J-vcodeImg").attr("src", this._getVCodeUrl()),
                a.notifyResize()
            },
            _clearLoginState: function() {
                var t = {
                    domain: l.getCookieDomain(),
                    path: "/"
                };
                i.remove("uin", t),
                i.remove("skey", t),
                i.remove("p_skey", t),
                i.remove("nick", t),
                i.remove("tinyid", t),
                this.updateCsrfCode()
            },
            _messageCallback: function(t) {
                var e = this,
                n = {},
                i = t.origin || t.originalEvent.origin;
                if (i && (i = i.replace(/(:\d+)/g, "")), /\.(tencent\.com|qcloud\.com|qq\.com|dnspod\.cn|dnspod\.com)$/i.test(i)) {
                    try {
                        n = JSON.parse(t.data || "")
                    } catch(t) {}
                    switch (n.action) {
                    case "redirect":
                        n && n.url && !/^http/i.test(n.url) && (n.url = ""),
                        e._redirect(n.url || top.location.href);
                        break;
                    case "loginReturnHandle":
                        e.loginReturnHandle(n.resp);
                        break;
                    case "loginCompletion":
                        e._loginCompletionCallback()
                    }
                }
            },
            _redirect: function(t) {
                this.stopCheckLogin = !0,
                window.LOGIN_API_COMPLETE = !0;
                try {
                    var e = top.location.href;
                    t.indexOf("#") != -1 && e.split("#")[0] == t.split("#")[0] ? top.location.reload() : top.location.href = t
                } catch(e) {
                    top.postMessage(JSON.stringify({
                        action: "redirect",
                        url: t
                    }), "*")
                }
            },
            _loginCompletionCallback: function() {
                this.hideLoginBox(),
                this.opts.completionCallback && this.opts.completionCallback()
            },
            _getLoginPage: function() {
                var t = "https://" + u + "/login";
                t += "?s_url=" + encodeURIComponent(this.opts.s_url),
                this.opts.skipRegisterCompletion && (t += "&rc=0"),
                this.opts.skipLoginProtect && (t += "&vf=0"),
                this.opts.skipOwnerSelection && (t += "&sc=0"),
                "undefined" != typeof this.opts.fwd_flag && (t += "&fwd_flag=" + this.opts.fwd_flag),
                this._clearLoginState(),
                location.href = t
            },
            _enterEmailMod: function() {
                var t = this;
                t.$loginbox.find(".J-loginContentBox").hide(),
                t.opts.isIntl ? (t.$loginbox.find(".J-backToMainMod").hide(), t.$loginbox.find(".J-switchLoginTypeArea").show()) : (t.$loginbox.find(".J-backToMainMod").show(), t.$loginbox.find(".J-switchLoginTypeArea").hide(), t.$loginbox.find(".J-footerLinkArea").hide());
                var e = t.$loginbox.find(".J-qcloginBox"),
                n = e.find(".J-username"),
                i = e.find(".J-password");
                e.show(),
                $.trim(n.val()) ? i.focus() : n.focus()
            },
            _leaveEmailMod: function() {
                var t = this;
                t.$loginbox.find(".J-loginContentBox").hide(),
                t.$loginbox.find(".J-switchLoginTypeArea").show(),
                t.$loginbox.find(".J-mainloginBox").show(),
                t.$loginbox.find(".J-backToMainMod").hide(),
                t.$loginbox.find(".J-footerLinkArea").show()
            }
        };
        window.addEventListener && window.addEventListener("message",
        function(t) {
            p._messageCallback(t)
        },
        !1),
        t.exports = p.init()
    },
    WPtr: function(t, e, n) {
        var i, o; !
        function(r) {
            i = r,
            o = "function" == typeof i ? i.call(e, n, e, t) : i,
            !(void 0 !== o && (t.exports = o))
        } (function() {
            function t() {
                for (var t = 0,
                e = {}; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) e[i] = n[i]
                }
                return e
            }
            function e(n) {
                function i(e, o, r) {
                    var s;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if (r = t({
                                path: "/"
                            },
                            i.defaults, r), "number" == typeof r.expires) {
                                var a = new Date;
                                a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires),
                                r.expires = a
                            }
                            try {
                                s = JSON.stringify(o),
                                /^[\{\[]/.test(s) && (o = s)
                            } catch(t) {}
                            return o = n.write ? n.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            e = encodeURIComponent(String(e)),
                            e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                            e = e.replace(/[\(\)]/g, escape),
                            document.cookie = [e, "=", o, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure": ""].join("")
                        }
                        e || (s = {});
                        for (var c = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, u = 0; u < c.length; u++) {
                            var h = c[u].split("="),
                            d = h.slice(1).join("=");
                            '"' === d.charAt(0) && (d = d.slice(1, -1));
                            try {
                                var f = h[0].replace(l, decodeURIComponent);
                                if (d = n.read ? n.read(d, f) : n(d, f) || d.replace(l, decodeURIComponent), this.json) try {
                                    d = JSON.parse(d)
                                } catch(t) {}
                                if (e === f) {
                                    s = d;
                                    break
                                }
                                e || (s[f] = d)
                            } catch(t) {}
                        }
                        return s
                    }
                }
                return i.set = i,
                i.get = function(t) {
                    return i(t)
                },
                i.getJSON = function() {
                    return i.apply({
                        json: !0
                    },
                    [].slice.call(arguments))
                },
                i.defaults = {},
                i.remove = function(e, n) {
                    i(e, "", t(n, {
                        expires: -1
                    }))
                },
                i.withConverter = e,
                i
            }
            return e(function() {})
        })
    },
    "4G7m": function(t, e, n) {
        var i = n("M34W"),
        o = i.getRealHostname(),
        r = i.getQcmainHostname(),
        s = n("3but").getCDNDomain(),
        a = {
            encrypt: !0,
            encryptPublicKey: "-----BEGIN PUBLIC KEY-----\t\t\t\t\t\t\tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDmRjZFlLX9akll+2dCdtN5ehDx\t\t\t\t\t\t\tPvmWes3kchShI1FafeorF+LWm5oK2YJFTpzA9WO2Xod1Q1FUrt82bjfYRHDfoerJ\t\t\t\t\t\t\t6rjMtjgXnDAYsk6nbhefibbQzYzxNA62yc6TbpUvRi+SosLfGQifqwtu/6OBMoka\t\t\t\t\t\t\tgLvbujKFpAfb9cfGewIDAQAB\t\t\t\t\t\t\t-----END PUBLIC KEY-----",
            hide_close_icon: 1,
            enable_qq: 1,
            enable_qcloud: 1,
            hide_register: 0,
            login_css: "https://" + s + "/open_proj/proj_qcloud_v2/gateway/login-regist/login/pc/css/login-20199031724.css?t=20190910",
            qcloud_login_url: "https://" + o + "/login/ajax/",
            qcloud_post_proxy: "https://" + o + "/login/proxy",
            s_url: "https://" + o,
            login_forward_url: "https://" + r + "/login/forward",
            pt_login_forward_url: "https://" + o + "/login/qqAccessCallback",
            vcode_url: "https://" + o + "/captcha",
            forgetpwd_url: "https://" + r + "/password/recover",
            forget_account_url: "https://" + r + "/services/forgotAccount",
            register_url: "https://" + r + "/register?",
            subaccount_url: "https://" + r + "/login/subAccount",
            wework_subaccount_url: "https://" + r + "/login/subAccount/wework",
            ptlogin_url: "https://xui.ptlogin2.qq.com/cgi-bin/xlogin",
            ptlogin_config: {
                appid: 543009503,
                daid: 0,
                style: 20,
                enable_qlogin: 1,
                target: "self",
                link_target: "blank",
                hide_close_icon: 1,
                hide_border: 1,
                hide_title_bar: 1,
                hide_reg: 1,
                hide_feedback: 1,
                hide_title: 1,
                s_url: ""
            },
            qqLoginUrl: "https://" + o + "/login/qqConnect?",
            mpLoginUrl: "https://" + o + "/login/mp?",
            wechatLoginUrl: "https://" + o + "/login/wechat?",
            mWechatLoginUrl: "https://" + o + "/login/mWechat?scope=snsapi_userinfo&",
            weworkQrcodeUrl: "https://" + o + "/account/wework/qrcode",
            weworkLoginUrl: "https://" + o + "/account/wework/login",
            defaultLoginType: "wx",
            isThirdParty: 0,
            enableIframeWechatLogin: 1,
            isIntl: 0,
            hideQQ: 0,
            hideMP: 0,
            check_login_url: "https://" + o + "/login/ajax/info"
        };
        t.exports = a
    },
    M34W: function(t, e) {
        var n = {
            getRealHostname: function() {
                var t = location.hostname;
                return t.indexOf("qcloud.com") != -1 ? "www.qcloud.com": t.indexOf("cloud.tencent.com") != -1 ? "cloud.tencent.com": "www.qcloud.com"
            },
            getCookieDomain: function() {
                var t = location.hostname;
                return t.indexOf("qcloud.com") != -1 ? ".qcloud.com": t.indexOf("cloud.tencent.com") != -1 ? ".cloud.tencent.com": ".qcloud.com"
            },
            getQcmainHostname: function() {
                var t = location.hostname;
                return t.indexOf("qcloud.com") != -1 ? "www.qcloud.com": t.indexOf("intl.cloud.tencent.com") != -1 ? "intl.cloud.tencent.com": t.indexOf("cloud.tencent.com") != -1 ? "cloud.tencent.com": "www.qcloud.com"
            }
        };
        t.exports = n
    },
    "3but": function(t, e) {
        var n = {
            getRealHostname: function() {
                var t = location.hostname;
                return t.indexOf("qcloud.com") != -1 ? "www.qcloud.com": t.indexOf("cloud.tencent.com") != -1 ? "cloud.tencent.com": "www.qcloud.com"
            },
            getCookieDomain: function() {
                var t = location.hostname;
                return t.indexOf("qcloud.com") != -1 ? ".qcloud.com": t.indexOf("cloud.tencent.com") != -1 ? ".cloud.tencent.com": ".qcloud.com"
            },
            getQcmainHostname: function() {
                var t = location.hostname;
                return t.indexOf("qcloud.com") != -1 ? "www.qcloud.com": t.indexOf("intl.cloud.tencent.com") != -1 ? "intl.cloud.tencent.com": t.indexOf("cloud.tencent.com") != -1 ? "cloud.tencent.com": "www.qcloud.com"
            },
            getCDNDomain: function() {
                return window.__CDN_DOMAIN || window.QCCDN_HOST || "imgcache.qq.com"
            }
        };
        t.exports = n
    },
    ijdI: function(t, e) {
        t.exports = '<div class="clg-mod J-commonLoginContent <% if(language == "en") {%>international<%}%> <% if(isThirdParty) {%>outside<%}%>">\n\t<% if (!hide_close_icon) { %>\n\t<a href="javascript:;" class="clg-mod-dialog-close J-closeLoginBox"></a>\n\t<% } %>\n\t<div class="J-loginMainContent">\n\t\t<div class="clg-mod-tab J-loginContentBox J-mainloginBox" style="display: none">\n\t\t\t<% if (!isMobile) { %>\n\t\t\t\t<% if (isThirdParty || isOauth2) { %>\n\t\t\t\t<div class="clg-mod-tit "><%=__("\u5fae\u4fe1\u626b\u7801\u767b\u5f55")%></div>\n\t\t\t\t<% } else { %>\n\t\t\t\t<div class="clg-tab-tit">\n\t\t\t\t\t<div class="clg-tab-tit-inner">\n\t\t\t\t\t\t<div class="clg-tab-item actived J-loginTab" data-type="wx">\n\t\t\t\t\t\t\t<a href="javascript:;"><%=__("\u5fae\u4fe1\u626b\u7801\u767b\u5f55")%></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="clg-tab-item J-loginTab" data-type="wework">\n\t\t\t\t\t\t\t<a href="javascript:;"><%=__("\u4f01\u4e1a\u5fae\u4fe1\u626b\u7801\u767b\u5f55")%></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<% } %>\n\t\t\t<div class="J-wxModContaner">\n\t\t\t\t<div class="clg-mod-txt clg-mod-txt-center">\n\t\t\t\t\t<%=__("\u8bf7\u4f7f\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u767b\u5f55")%> <a href="javascript:;" class="clg-mod-txt-link J-reloadWX"><%=__("\u5237\u65b0")%><i class="clg-icon-reload"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="clg-qr-wrap clg-qr-center">\n\t\t\t\t\t<iframe id="wxFrame" frameborder="no" scrolling="no" style="width:100%; height:100%;" src="" style="display: none;"></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="J-weworkModContaner" style="display: none">\n\t\t\t\t<div class="clg-mod-txt clg-mod-txt-center">\n\t\t\t\t\t<%=__("\u8bf7\u4f7f\u7528\u4f01\u4e1a\u5fae\u4fe1\u626b\u4e00\u626b\u767b\u5f55")%> <a href="javascript:;" class="clg-mod-txt-link J-reloadWework"><%=__("\u5237\u65b0")%><i class="clg-icon-reload"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="clg-qr-wrap clg-qr-center">\n\t\t\t\t\t<iframe id="weworkFrame" frameborder="no" scrolling="no" style="width:100%; height:100%;" src="" style="display: none;"></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t\t<% } else { %>\n\t\t\t<div class="lg-wx-box">\n\t\t\t\t<% if(isPad) {%>\n\t\t\t\t<div class="clg-tab-tit">\n\t\t\t\t\t<div class="clg-tab-tit-inner">\n\t\t\t\t\t\t<div class="clg-tab-item actived J-loginTab" data-type="wx">\n\t\t\t\t\t\t\t<a href="javascript:;"><%=__("\u5fae\u4fe1\u626b\u7801\u767b\u5f55")%></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="clg-tab-item J-loginTab" data-type="wework">\n\t\t\t\t\t\t\t<a href="javascript:;"><%=__("\u4f01\u4e1a\u5fae\u4fe1\u626b\u7801\u767b\u5f55")%></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="J-wxModContaner">\n\t\t\t\t\t<% if (isWechat) { %>\n\t\t\t\t\t<a data-action="wxBreak" href="<%=wechatLoginUrl%>s_url=<%=encodeURIComponent(s_url)%>&fwd_flag=<%= fwd_flag %>" class="clg-btn wx J-link"><%=__("\u53bb\u5fae\u4fe1\u6388\u6743")%></a>\n\t\t\t\t\t<% } else { %>\n\t\t\t\t\t<div class="qrcode-img">\n\t\t\t\t\t\t<iframe id="wxFrame" frameborder="no" scrolling="no" style="width:100%; height:100%;" src="" style="display: none;"></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a data-action="wxBreak" href="<%=wechatLoginUrl%>s_url=<%=encodeURIComponent(s_url)%>&fwd_flag=<%= fwd_flag %>" class="clg-btn wx-link J-link"><%=__("\u53bb\u5fae\u4fe1\u6388\u6743")%></a>\n\t\t\t\t\t<% } %>\n\t\t\t\t</div>\n\t\t\t\t<div class="J-weworkModContaner" style="display: none">\n\t\t\t\t\t<div class="qrcode-img">\n\t\t\t\t\t\t<iframe id="weworkFrame" frameborder="no" scrolling="no" style="width:100%; height:100%;" src="" style="display: none;"></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \u4ec5\u505a\u9ad8\u5ea6\u5360\u4f4d\uff0c\u9632\u6b62\u9ad8\u5ea6\u6296\u52a8 -->\n\t\t\t\t\t<a href="javascript:;" class="clg-btn wx-link" style="color: #999">\u4f7f\u7528\u4f01\u4e1a\u5fae\u4fe1\u626b\u7801\u767b\u5f55\u5b50\u8d26\u53f7</a>\n\t\t\t\t</div>\n\t\t\t\t<%} else {%>\n\t\t\t\t<div class="clg-mod-tit"><%=__("\u4f7f\u7528\u5fae\u4fe1\u767b\u5f55")%></div>\n\t\t\t\t<a data-action="wxBreak" href="<%=wechatLoginUrl%>s_url=<%=encodeURIComponent(s_url)%>&fwd_flag=<%= fwd_flag %>" class="clg-btn wx J-link"><%=__("\u53bb\u5fae\u4fe1\u6388\u6743")%></a>\n\t\t\t\t<%}%>\n\t\t\t</div>\n\t\t\t<%}%>\n\t\t</div>\n\n\t\t<div class="clg-mod-tab J-loginContentBox J-qcloginBox" style="display: none">\n\t\t\t<div class="clg-mod-tit"><%=__("\u90ae\u7bb1\u767b\u5f55")%></div>\n\t\t\t<div class="clg-form J-loginForm">\n\t\t\t\t<ul class="clg-form-list">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="clg-form-input">\n\t\t\t\t\t\t\t<div class="clg-form-unit">\n\t\t\t\t\t\t\t\t<% if (isThirdParty || isIntl) {%>\n\t\t\t\t\t\t\t\t\t<input value="<%=lusername%>" type="text" class="clg-input J-username" placeholder="<%=__("\u90ae\u7bb1\u5730\u5740")%>">\n\t\t\t\t\t\t\t\t<%} else {%>\n\t\t\t\t\t\t\t\t\t<input value="<%=lusername%>" type="text" class="clg-input J-username" placeholder="<%=__("\u90ae\u7bb1\u5730\u5740/DNSPod\u8d26\u53f7")%>">\n\t\t\t\t\t\t\t\t<%}%>\n\t\t\t\t\t\t\t\t<ul class="clg-form-tips-list J-mailSuggest" style="display:none;">\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="clg-form-input">\n\t\t\t\t\t\t\t<div class="clg-form-unit">\n\t\t\t\t\t\t\t\t<input type="password" class="clg-input J-password" placeholder="<%=__("\u5bc6\u7801")%>">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li style="display:none" class="J-vcodeArea">\n\t\t\t\t\t\t<div class="clg-form-input security">\n\t\t\t\t\t\t\t<div class="clg-form-unit">\n\t\t\t\t\t\t\t\t<input type="text" class="clg-input J-vcodeInput" placeholder="<%=__("\u9a8c\u8bc1\u7801")%>">\n\t\t\t\t\t\t\t\t<a href="javascript:;" class="clg-security-num J-changeVCode">\n\t\t\t\t\t\t\t\t\t<img class="security-img J-vcodeImg">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class="clg-form-tips error J-loginTip" style="display: none"></div>\n\t\t\t\t<div class="clg-form-btn">\n\t\t\t\t\t<a href="javascript:;" hotrep="login.btn.doLogin" class="clg-btn J-loginBtn"><%=__("\u767b \u5f55")%></a>\n\t\t\t\t\t<a href="javascript:;" class="clg-btn" style="display: none">\n\t\t\t\t\t\t<div class="clg-loading clg-loading-weak">\n\t\t\t\t\t\t\t<div class="clg-loading-inner">\n\t\t\t\t\t\t\t\t<div class="one"></div>\n\t\t\t\t\t\t\t\t<div class="two"></div>\n\t\t\t\t\t\t\t\t<div class="three"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="clg-back-mod J-backToMainMod">\n\t\t\t\t<a href="javascript:;" class="J-btnSwitchLoginType" data-type="wx"><i class="clg-icon-link-left"></i><%=__("\u5207\u6362\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f")%></a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="clg-other-mod J-otherMod">\n\t\t\t<% if (!isIntl) { %>\n\t\t\t<div class="clg-other-tit J-switchLoginTypeArea"><span><%=__("\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f")%></span></div>\n\t\t\t<div class="clg-other-con J-switchLoginTypeArea">\n\t\t\t\t<div class="clg-other-link">\n\t\t\t\t\t<a title="<%=__("\u90ae\u7bb1")%>" class="J-btnSwitchLoginType" data-type="email" href="javascript:;" data-hot="login.email" hotrep="login.email">\n\t\t\t\t\t\t<i class="clg-icon-mail"></i><span><%=__("\u90ae\u7bb1")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<% if (!isInWeapp && !hideQQ) {%>\n\t\t\t\t<div class="clg-other-link">\n\t\t\t\t\t<a title="<%=__("QQ")%>" class="J-btnSwitchLoginType" href="javascript:;" data-type="qq" data-hot="login.qq" hotrep="login.qq">\n\t\t\t\t\t\t<i class="clg-icon-qq"></i><span><%=__("QQ")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<%}%>\n\t\t\t\t<% if (!hideMP) {%>\n\t\t\t\t<div class="clg-other-link">\n\t\t\t\t\t<a title="<%=__("\u5fae\u4fe1\u516c\u4f17\u53f7")%>" class="J-btnSwitchLoginType"  href="javascript:;" data-type="wxmp" data-hot="login.mp" hotrep="login.mp">\n\t\t\t\t\t\t<i class="clg-icon-wxoa"></i><span><%=__("\u5fae\u4fe1\u516c\u4f17\u53f7")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<%}%>\n\t\t\t\t<% if (isMobile && !isPad) {%>\n\t\t\t\t<div class="clg-other-link">\n\t\t\t\t\t<a title="<%=__("\u4f01\u4e1a\u5fae\u4fe1")%>" class="J-btnSwitchLoginType" href="javascript:;" data-type="wework-m" data-hot="login.wework" hotrep="login.wework">\n\t\t\t\t\t\t<i class="clg-icon-work"></i><span><%=__("\u4f01\u4e1a\u5fae\u4fe1")%></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<% } %>\n\t\t\t</div>\n\t\t\t<%}%>\n\t\t\t<div class="clg-other-tool" <% if (isThirdParty || (hideQQ && hideMP)) {%>style="text-align: center"<%}%>>\n\t\t\t\t<% if (!hide_register) { %>\n\t\t\t\t<div class="clg-other-tool-item">\n\t\t\t\t\t<a href="<%=register_url%>&s_url=<%=encodeURIComponent(s_url)%>" class="J-link" hotrep="login.register"><%=__("\u7acb\u5373\u6ce8\u518c")%></a>\n\t\t\t\t</div>\n\t\t\t\t<%}%>\n\t\t\t\t<div class="clg-other-tool-item">\n\t\t\t\t\t<a href="<%=forget_account_url%>" class="J-link" hotrep="login.forgetAccount"><%=__("\u5fd8\u8bb0\u8d26\u53f7")%></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="clg-other-tool-item">\n\t\t\t\t\t<a href="<%=forgetpwd_url%>?s_url=<%=encodeURIComponent(s_url)%>" class="J-link" hotrep="login.forgetPsw"><%=__("\u5fd8\u8bb0\u5bc6\u7801")%></a>\n\t\t\t\t</div>\n\t\t\t\t<% if (!isThirdParty && !hideQQ && !hideMP) {%>\n\t\t\t\t<div class="clg-other-tool-item">\n\t\t\t\t\t<a href="<%=subaccount_url%>?s_url=<%=encodeURIComponent(s_url)%>" class="J-subAccountLogin"><%=__("\u5b50\u7528\u6237\u767b\u5f55")%></a>\n\t\t\t\t</div>\n\t\t\t\t<%}%>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="clg-mod-tab J-loginContentBox J-loginedInfo">\n\t\t\t<div class="clg-mod-tit"><%=__("\u5df2\u767b\u5f55\u8d26\u53f7")%></div>\n\t\t\t<div class="clg-form">\n\t\t\t\t<ul class="clg-form-list">\n\t\t\t\t\t<div class="clg-form-tips-item J-showMsg"></div>\n\t\t\t\t</ul>\n\n\t\t\t\t<div class="clg-form-btn">\n\t\t\t\t\t<a href="javascript:;" class="clg-btn J-btn"><%=__("\u5feb\u901f\u767b\u5f55")%></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="clg-back-mod">\n\t\t\t\t<a href="javascript:;" class="J-loginContinue"><i class="clg-icon-link-left"></i><%=__("\u767b\u5f55\u5176\u4ed6\u8d26\u53f7")%></a>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n\n';
    },
    sdDX: function(t, e, n) {
        var i = n("WPtr"),
        o = n("HbSM"),
        r = n("rCGI"),
        s = n("h97R"),
        a = n("4G7m"),
        c = n("M34W"),
        l = n("5zD2"),
        u = new l(navigator.userAgent).getResult(),
        h = new o;
        h.setPublicKey(a.encryptPublicKey);
        var d = i.get("language"),
        f = {
            loadCss: function() {
                var t = this,
                e = $.Deferred();
                return t.cssLoaded ? e.resolve() : s(a.login_css,
                function() {
                    t.cssLoaded = !0,
                    e.resolve()
                }),
                e
            },
            showInputErrorTip: function(t, e, n) {
                t = $(t),
                this.hideInputErrorTip(),
                this.hidePromptTip(t),
                n = n || {},
                $(".J-loginTip").html(this.__(e)).show(),
                t.addClass("error").focus(),
                this.notifyResize()
            },
            hideInputErrorTip: function(t) {
                t ? $(t).removeClass("error").parent().find(".J-errorTip").hide() : $(".J-errorTip").hide().parent().find("input").removeClass("error"),
                this.notifyResize()
            },
            showPromptTip: function(t, e, n) {
                t = $(t),
                this.hidePromptTip();
                var i = t.closest(".clg-form-input");
                if (!i.find(".J-errorTip:visible").length) {
                    var o = i.find(".J-promptTip");
                    n = n || {},
                    o.length || (o = i.append('<div class="clg-bubble  clg-bubble-bottom J-promptTip" style="bottom: 70px; left: 0px; width: 280px;">\t                    <div class="clg-bubble-inner" style="left: 30px;"></div>\t                </div>').find(".J-promptTip")),
                    o.show().find(".clg-bubble-inner").html(this.__(e)),
                    this.notifyResize()
                }
            },
            hidePromptTip: function(t) {
                t ? $(t).parent().find(".J-promptTip").hide() : $(".J-promptTip").hide(),
                this.notifyResize()
            },
            checkLoginForm: function() {
                var t = $(".J-commonLoginContent"),
                e = t.find(".J-username"),
                n = $.trim(e.val()),
                i = t.find(".J-password"),
                o = $.trim(i.val()),
                r = t.find(".J-vcodeArea"),
                s = t.find(".J-vcodeInput"),
                c = $.trim(s.val()),
                l = {},
                u = this;
                if ("" == n) return u.showInputErrorTip(e, "\u8bf7\u8f93\u5165\u90ae\u7bb1"),
                !1;
                if (n.indexOf("@") == -1) return u.showInputErrorTip(e, "\u90ae\u7bb1\u683c\u5f0f\u6709\u8bef\uff0c\u8bf7\u4fee\u6539"),
                !1;
                if (l.username = n, "" == o) return u.showInputErrorTip(i, "\u8bf7\u8f93\u5165\u5bc6\u7801"),
                !1;
                if (l.password = a.encrypt ? h.encrypt(o) : o, r.is(":visible")) {
                    if ("" == c) return u.showInputErrorTip(s, "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
                    !1;
                    l.vcode = c
                }
                return l
            },
            query: function(t) {
                return t = String(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"),
                location.search.slice(1).match(RegExp("(?:^|&)" + t + "(?:=([^&#]*)?|[&#]|$)")) ? String(RegExp.$1 || "").replace(/\+/g, " ") : void 0
            },
            __: function(t, e) {
                var e = e || d;
                return e && "en" == e && r && r[t] ? r[t] : t
            },
            getTranslator: function(t) {
                var e = this;
                return function(n) {
                    return e.__(n, t)
                }
            },
            capslock: function(t) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return ! 1;
                var e = t.keyCode || t.which,
                n = t.shiftKey || 16 == e || !1;
                return e >= 65 && e <= 90 && !n || e >= 97 && e <= 122 && n
            },
            tmpl: function() {
                var t = {},
                e = function(t) {
                    return 0 == t ? t: (t = (t || "").toString(), t.replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;"))
                },
                n = function(t, e) {
                    if (e) for (var n in e) {
                        var i = new RegExp("<%#\\s?" + n + "%>", "g");
                        t = t.replace(i, e[n])
                    }
                    return t
                };
                return function i(o, r, s) {
                    var a = !/\W/.test(o); ! a && (o = n(o, s));
                    var c = a ? t[o] = t[o] || i(n(document.getElementById(o).innerHTML, s)) : new Function("obj", "_escape", "var _p='';with(obj){_p+='" + o.replace(/[\r\t\n]/g, " ").split("\\'").join("\\\\'").split("'").join("\\'").split("<%").join("\t").replace(/\t-(.*?)%>/g, "'+$1+'").replace(/\t=(.*?)%>/g, "'+_escape($1)+'").split("\t").join("';").split("%>").join("_p+='") + "';} return _p;"),
                    l = function(t) {
                        return c(t, e)
                    };
                    return r ? l(r) : l
                }
            } (),
            loadProxyFrame: function(t) {
                var e = this;
                if (e.loadProxyFrameDfd) return e.loadProxyFrameDfd;
                e.loadProxyFrameDfd = $.Deferred();
                var n = document.createElement("iframe");
                return n.style.display = "none",
                n.src = t,
                n.onload = function() {
                    e.loadProxyFrameDfd.resolve(n),
                    n.onload = null
                },
                document.body.appendChild(n),
                e.loadProxyFrameDfd
            },
            proxyPost: function(t, e) {
                var n = this,
                i = "callback" + Math.floor(1e7 * Math.random());
                window[i] = function(t) {
                    e(t);
                    try {
                        delete window[i]
                    } catch(t) {
                        window[i] = null
                    }
                };
                var o = function(e) {
                    try {
                        e.contentWindow.postSend(t.url, t.data, i)
                    } catch(r) {
                        "TypeError" !== r.name || e.contentWindow ? e.contentWindow.postMessage(JSON.stringify({
                            url: t.url,
                            data: t.data,
                            requestType: i
                        }), "*") : (n.loadProxyFrameDfd = null, n.loadProxyFrame(a.qcloud_post_proxy).done(o))
                    }
                };
                n.loadProxyFrame(a.qcloud_post_proxy).done(o)
            },
            isMobile: function() {
                var t = (navigator.userAgent || "").toLowerCase(),
                e = ["android", "iphone", "windows phone", "ipad"];
                if (a.isThirdParty) return ! 1;
                for (var n = 0; n < e.length; n++) if (t.indexOf(e[n]) != -1) return ! 0;
                return ! 1
            },
            isWechat: function() {
                return navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1
            },
            getWechatLoginUrl: function() {
                return this.isMobile() ? a.mWechatLoginUrl: a.wechatLoginUrl
            },
            saveLoginTypeInLocal: function(t) {
                var e = 180;
                i.set("lastLoginType", t, {
                    domain: c.getCookieDomain(),
                    path: "/",
                    expires: e
                })
            },
            getLastLoginType: function() {
                return i.get("lastLoginType") || ""
            },
            notifyResize: function() {
                top.postMessage(JSON.stringify({
                    action: "resize",
                    width: $(".J-loginMainContent").width() + 80,
                    height: $(".J-loginMainContent").height() + 100
                }), "*")
            },
            isSupportWxLoginInMobile: function() {
                var t = u && u.browser && u.browser.name ? u.browser.name: "",
                e = u && u.os && u.os.name ? u.os.name: "";
                t = t.toLowerCase(),
                e = e.toLowerCase();
                var n = this.isMobile() && ("ucbrowser" == t || "qqbrowser" == t || "mobile safari" == t && "ios" == e);
                return this.isInWeapp() || this.isWechat() || n
            },
            isInMQQ: function() {
                var t = navigator.userAgent,
                e = this.isMobile() && /qqbrowser/i.test(t) && /\bQQ\/[\d\.]+/i.test(t);
                return e
            },
            isInWeapp: function() {
                return this.isMobile() && "miniprogram" === window.__wxjs_environment
            },
            isPad: function() {
                var t = window.screen.width || 0;
                return this.isMobile() && t >= 601
            },
            isInConsole: function() {
                var t = location.hostname;
                return "console.cloud.tencent.com" == t || "console.qcloud.com" == t
            },
            requireSeajsModule: function(t) {
                if (window.seajs) {
                    var e = window.seajs.Module.get(window.seajs.Module.resolve(t));
                    return e.exports || e.exec()
                }
            },
            htmlEncode: function(t) {
                var e = "";
                return null == t || "undefined" == typeof t || 0 == t.length ? "": (e = t.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/ /g, "&nbsp;"), e = e.replace(/\'/g, "'"), e = e.replace(/\"/g, "&quot;"), e = e.replace(/\n/g, "<br>"))
            },
            detectWxDomain: function() {
                if (!this.wxDomainDetected && window.$) {
                    this.wxDomainDetected = !0;
                    var t = !1,
                    e = "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=0213Kqcw8dy8ul5L&_t=" + (new Date).getTime();
                    $.getScript(e,
                    function() {
                        t = !0
                    }),
                    setTimeout(function() {
                        t || $.getScript("https://" + c.getRealHostname() + "/services/ajax/empty_return/wxDomainNotResponse5?t=" + (new Date).getTime())
                    },
                    5e3),
                    setTimeout(function() {
                        t || $.getScript("https://" + c.getRealHostname() + "/services/ajax/empty_return/wxDomainNotResponse10?t=" + (new Date).getTime())
                    },
                    1e4)
                }
            }
        };
        t.exports = f
    },
    HbSM: function(t, e) {
        function n(t, e, n) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }
        function i() {
            return new n(null)
        }
        function o(t, e, n, i, o, r) {
            for (; --r >= 0;) {
                var s = e * this[t++] + n[i] + o;
                o = Math.floor(s / 67108864),
                n[i++] = 67108863 & s
            }
            return o
        }
        function r(t, e, n, i, o, r) {
            for (var s = 32767 & e,
            a = e >> 15; --r >= 0;) {
                var c = 32767 & this[t],
                l = this[t++] >> 15,
                u = a * c + l * s;
                c = s * c + ((32767 & u) << 15) + n[i] + (1073741823 & o),
                o = (c >>> 30) + (u >>> 15) + a * l + (o >>> 30),
                n[i++] = 1073741823 & c
            }
            return o
        }
        function s(t, e, n, i, o, r) {
            for (var s = 16383 & e,
            a = e >> 14; --r >= 0;) {
                var c = 16383 & this[t],
                l = this[t++] >> 14,
                u = a * c + l * s;
                c = s * c + ((16383 & u) << 14) + n[i] + o,
                o = (c >> 28) + (u >> 14) + a * l,
                n[i++] = 268435455 & c
            }
            return o
        }
        function a(t) {
            return Le.charAt(t)
        }
        function c(t, e) {
            var n = De[t.charCodeAt(e)];
            return null == n ? -1 : n
        }
        function l(t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t,
            t.s = this.s
        }
        function u(t) {
            this.t = 1,
            this.s = t < 0 ? -1 : 0,
            t > 0 ? this[0] = t: t < -1 ? this[0] = t + this.DV: this.t = 0
        }
        function h(t) {
            var e = i();
            return e.fromInt(t),
            e
        }
        function d(t, e) {
            var i;
            if (16 == e) i = 4;
            else if (8 == e) i = 3;
            else if (256 == e) i = 8;
            else if (2 == e) i = 1;
            else if (32 == e) i = 5;
            else {
                if (4 != e) return void this.fromRadix(t, e);
                i = 2
            }
            this.t = 0,
            this.s = 0;
            for (var o = t.length,
            r = !1,
            s = 0; --o >= 0;) {
                var a = 8 == i ? 255 & t[o] : c(t, o);
                a < 0 ? "-" == t.charAt(o) && (r = !0) : (r = !1, 0 == s ? this[this.t++] = a: s + i > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, s += i, s >= this.DB && (s -= this.DB))
            }
            8 == i && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
            this.clamp(),
            r && n.ZERO.subTo(this, this)
        }
        function f() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)--this.t
        }
        function p(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var e;
            if (16 == t) e = 4;
            else if (8 == t) e = 3;
            else if (2 == t) e = 1;
            else if (32 == t) e = 5;
            else {
                if (4 != t) return this.toRadix(t);
                e = 2
            }
            var n, i = (1 << e) - 1,
            o = !1,
            r = "",
            s = this.t,
            c = this.DB - s * this.DB % e;
            if (s-->0) for (c < this.DB && (n = this[s] >> c) > 0 && (o = !0, r = a(n)); s >= 0;) c < e ? (n = (this[s] & (1 << c) - 1) << e - c, n |= this[--s] >> (c += this.DB - e)) : (n = this[s] >> (c -= e) & i, c <= 0 && (c += this.DB, --s)),
            n > 0 && (o = !0),
            o && (r += a(n));
            return o ? r: "0"
        }
        function g() {
            var t = i();
            return n.ZERO.subTo(this, t),
            t
        }
        function m() {
            return this.s < 0 ? this.negate() : this
        }
        function y(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var n = this.t;
            if (e = n - t.t, 0 != e) return this.s < 0 ? -e: e;
            for (; --n >= 0;) if (0 != (e = this[n] - t[n])) return e;
            return 0
        }
        function w(t) {
            var e, n = 1;
            return 0 != (e = t >>> 16) && (t = e, n += 16),
            0 != (e = t >> 8) && (t = e, n += 8),
            0 != (e = t >> 4) && (t = e, n += 4),
            0 != (e = t >> 2) && (t = e, n += 2),
            0 != (e = t >> 1) && (t = e, n += 1),
            n
        }
        function b() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + w(this[this.t - 1] ^ this.s & this.DM)
        }
        function x(t, e) {
            var n;
            for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
            for (n = t - 1; n >= 0; --n) e[n] = 0;
            e.t = this.t + t,
            e.s = this.s
        }
        function T(t, e) {
            for (var n = t; n < this.t; ++n) e[n - t] = this[n];
            e.t = Math.max(this.t - t, 0),
            e.s = this.s
        }
        function S(t, e) {
            var n, i = t % this.DB,
            o = this.DB - i,
            r = (1 << o) - 1,
            s = Math.floor(t / this.DB),
            a = this.s << i & this.DM;
            for (n = this.t - 1; n >= 0; --n) e[n + s + 1] = this[n] >> o | a,
            a = (this[n] & r) << i;
            for (n = s - 1; n >= 0; --n) e[n] = 0;
            e[s] = a,
            e.t = this.t + s + 1,
            e.s = this.s,
            e.clamp()
        }
        function E(t, e) {
            e.s = this.s;
            var n = Math.floor(t / this.DB);
            if (n >= this.t) return void(e.t = 0);
            var i = t % this.DB,
            o = this.DB - i,
            r = (1 << i) - 1;
            e[0] = this[n] >> i;
            for (var s = n + 1; s < this.t; ++s) e[s - n - 1] |= (this[s] & r) << o,
            e[s - n] = this[s] >> i;
            i > 0 && (e[this.t - n - 1] |= (this.s & r) << o),
            e.t = this.t - n,
            e.clamp()
        }
        function k(t, e) {
            for (var n = 0,
            i = 0,
            o = Math.min(t.t, this.t); n < o;) i += this[n] - t[n],
            e[n++] = i & this.DM,
            i >>= this.DB;
            if (t.t < this.t) {
                for (i -= t.s; n < this.t;) i += this[n],
                e[n++] = i & this.DM,
                i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; n < t.t;) i -= t[n],
                e[n++] = i & this.DM,
                i >>= this.DB;
                i -= t.s
            }
            e.s = i < 0 ? -1 : 0,
            i < -1 ? e[n++] = this.DV + i: i > 0 && (e[n++] = i),
            e.t = n,
            e.clamp()
        }
        function C(t, e) {
            var i = this.abs(),
            o = t.abs(),
            r = i.t;
            for (e.t = r + o.t; --r >= 0;) e[r] = 0;
            for (r = 0; r < o.t; ++r) e[r + i.t] = i.am(0, o[r], e, r, 0, i.t);
            e.s = 0,
            e.clamp(),
            this.s != t.s && n.ZERO.subTo(e, e)
        }
        function _(t) {
            for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0;
            for (n = 0; n < e.t - 1; ++n) {
                var i = e.am(n, e[n], t, 2 * n, 0, 1); (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
            t.s = 0,
            t.clamp()
        }
        function L(t, e, o) {
            var r = t.abs();
            if (! (r.t <= 0)) {
                var s = this.abs();
                if (s.t < r.t) return null != e && e.fromInt(0),
                void(null != o && this.copyTo(o));
                null == o && (o = i());
                var a = i(),
                c = this.s,
                l = t.s,
                u = this.DB - w(r[r.t - 1]);
                u > 0 ? (r.lShiftTo(u, a), s.lShiftTo(u, o)) : (r.copyTo(a), s.copyTo(o));
                var h = a.t,
                d = a[h - 1];
                if (0 != d) {
                    var f = d * (1 << this.F1) + (h > 1 ? a[h - 2] >> this.F2: 0),
                    p = this.FV / f,
                    g = (1 << this.F1) / f,
                    m = 1 << this.F2,
                    v = o.t,
                    y = v - h,
                    b = null == e ? i() : e;
                    for (a.dlShiftTo(y, b), o.compareTo(b) >= 0 && (o[o.t++] = 1, o.subTo(b, o)), n.ONE.dlShiftTo(h, b), b.subTo(a, a); a.t < h;) a[a.t++] = 0;
                    for (; --y >= 0;) {
                        var x = o[--v] == d ? this.DM: Math.floor(o[v] * p + (o[v - 1] + m) * g);
                        if ((o[v] += a.am(0, x, o, y, 0, h)) < x) for (a.dlShiftTo(y, b), o.subTo(b, o); o[v] < --x;) o.subTo(b, o)
                    }
                    null != e && (o.drShiftTo(h, e), c != l && n.ZERO.subTo(e, e)),
                    o.t = h,
                    o.clamp(),
                    u > 0 && o.rShiftTo(u, o),
                    c < 0 && n.ZERO.subTo(o, o)
                }
            }
        }
        function D(t) {
            var e = i();
            return this.abs().divRemTo(t, null, e),
            this.s < 0 && e.compareTo(n.ZERO) > 0 && t.subTo(e, e),
            e
        }
        function R(t) {
            this.m = t
        }
        function A(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }
        function N(t) {
            return t
        }
        function I(t) {
            t.divRemTo(this.m, null, t)
        }
        function B(t, e, n) {
            t.multiplyTo(e, n),
            this.reduce(n)
        }
        function q(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function M() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return e = e * (2 - (15 & t) * e) & 15,
            e = e * (2 - (255 & t) * e) & 255,
            e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
            e = e * (2 - t * e % this.DV) % this.DV,
            e > 0 ? this.DV - e: -e
        }
        function O(t) {
            this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
        }
        function J(t) {
            var e = i();
            return t.abs().dlShiftTo(this.m.t, e),
            e.divRemTo(this.m, null, e),
            t.s < 0 && e.compareTo(n.ZERO) > 0 && this.m.subTo(e, e),
            e
        }
        function P(t) {
            var e = i();
            return t.copyTo(e),
            this.reduce(e),
            e
        }
        function $(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var n = 32767 & t[e],
                i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (n = e + this.m.t, t[n] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV,
                t[++n]++
            }
            t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }
        function j(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function U(t, e, n) {
            t.multiplyTo(e, n),
            this.reduce(n)
        }
        function H() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        function F(t, e) {
            if (t > 4294967295 || t < 1) return n.ONE;
            var o = i(),
            r = i(),
            s = e.convert(this),
            a = w(t) - 1;
            for (s.copyTo(o); --a >= 0;) if (e.sqrTo(o, r), (t & 1 << a) > 0) e.mulTo(r, s, o);
            else {
                var c = o;
                o = r,
                r = c
            }
            return e.revert(o)
        }
        function W(t, e) {
            var n;
            return n = t < 256 || e.isEven() ? new R(e) : new O(e),
            this.exp(t, n)
        }
        function V() {
            var t = i();
            return this.copyTo(t),
            t
        }
        function K() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return - 1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        function Q() {
            return 0 == this.t ? this.s: this[0] << 24 >> 24
        }
        function z() {
            return 0 == this.t ? this.s: this[0] << 16 >> 16
        }
        function X(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }
        function G() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        function Y(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var e = this.chunkSize(t),
            n = Math.pow(t, e),
            o = h(n),
            r = i(),
            s = i(),
            a = "";
            for (this.divRemTo(o, r, s); r.signum() > 0;) a = (n + s.intValue()).toString(t).substr(1) + a,
            r.divRemTo(o, r, s);
            return s.intValue().toString(t) + a
        }
        function Z(t, e) {
            this.fromInt(0),
            null == e && (e = 10);
            for (var i = this.chunkSize(e), o = Math.pow(e, i), r = !1, s = 0, a = 0, l = 0; l < t.length; ++l) {
                var u = c(t, l);
                u < 0 ? "-" == t.charAt(l) && 0 == this.signum() && (r = !0) : (a = e * a + u, ++s >= i && (this.dMultiply(o), this.dAddOffset(a, 0), s = 0, a = 0))
            }
            s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)),
            r && n.ZERO.subTo(this, this)
        }
        function tt(t, e, i) {
            if ("number" == typeof e) if (t < 2) this.fromInt(1);
            else for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(n.ONE.shiftLeft(t - 1), ct, this), this.isEven() && this.dAddOffset(1, 0); ! this.isProbablePrime(e);) this.dAddOffset(2, 0),
            this.bitLength() > t && this.subTo(n.ONE.shiftLeft(t - 1), this);
            else {
                var o = new Array,
                r = 7 & t;
                o.length = (t >> 3) + 1,
                e.nextBytes(o),
                r > 0 ? o[0] &= (1 << r) - 1 : o[0] = 0,
                this.fromString(o, 256)
            }
        }
        function et() {
            var t = this.t,
            e = new Array;
            e[0] = this.s;
            var n, i = this.DB - t * this.DB % 8,
            o = 0;
            if (t-->0) for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[o++] = n | this.s << this.DB - i); t >= 0;) i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i, n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255, i <= 0 && (i += this.DB, --t)),
            0 != (128 & n) && (n |= -256),
            0 == o && (128 & this.s) != (128 & n) && ++o,
            (o > 0 || n != this.s) && (e[o++] = n);
            return e
        }
        function nt(t) {
            return 0 == this.compareTo(t)
        }
        function it(t) {
            return this.compareTo(t) < 0 ? this: t
        }
        function ot(t) {
            return this.compareTo(t) > 0 ? this: t
        }
        function rt(t, e, n) {
            var i, o, r = Math.min(t.t, this.t);
            for (i = 0; i < r; ++i) n[i] = e(this[i], t[i]);
            if (t.t < this.t) {
                for (o = t.s & this.DM, i = r; i < this.t; ++i) n[i] = e(this[i], o);
                n.t = this.t
            } else {
                for (o = this.s & this.DM, i = r; i < t.t; ++i) n[i] = e(o, t[i]);
                n.t = t.t
            }
            n.s = e(this.s, t.s),
            n.clamp()
        }
        function st(t, e) {
            return t & e
        }
        function at(t) {
            var e = i();
            return this.bitwiseTo(t, st, e),
            e
        }
        function ct(t, e) {
            return t | e
        }
        function lt(t) {
            var e = i();
            return this.bitwiseTo(t, ct, e),
            e
        }
        function ut(t, e) {
            return t ^ e
        }
        function ht(t) {
            var e = i();
            return this.bitwiseTo(t, ut, e),
            e
        }
        function dt(t, e) {
            return t & ~e
        }
        function ft(t) {
            var e = i();
            return this.bitwiseTo(t, dt, e),
            e
        }
        function pt() {
            for (var t = i(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
            return t.t = this.t,
            t.s = ~this.s,
            t
        }
        function gt(t) {
            var e = i();
            return t < 0 ? this.rShiftTo( - t, e) : this.lShiftTo(t, e),
            e
        }
        function mt(t) {
            var e = i();
            return t < 0 ? this.lShiftTo( - t, e) : this.rShiftTo(t, e),
            e
        }
        function vt(t) {
            if (0 == t) return - 1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16, e += 16),
            0 == (255 & t) && (t >>= 8, e += 8),
            0 == (15 & t) && (t >>= 4, e += 4),
            0 == (3 & t) && (t >>= 2, e += 2),
            0 == (1 & t) && ++e,
            e
        }
        function yt() {
            for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + vt(this[t]);
            return this.s < 0 ? this.t * this.DB: -1
        }
        function wt(t) {
            for (var e = 0; 0 != t;) t &= t - 1,
            ++e;
            return e
        }
        function bt() {
            for (var t = 0,
            e = this.s & this.DM,
            n = 0; n < this.t; ++n) t += wt(this[n] ^ e);
            return t
        }
        function xt(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s: 0 != (this[e] & 1 << t % this.DB)
        }
        function Tt(t, e) {
            var i = n.ONE.shiftLeft(t);
            return this.bitwiseTo(i, e, i),
            i
        }
        function St(t) {
            return this.changeBit(t, ct)
        }
        function Et(t) {
            return this.changeBit(t, dt)
        }
        function kt(t) {
            return this.changeBit(t, ut)
        }
        function Ct(t, e) {
            for (var n = 0,
            i = 0,
            o = Math.min(t.t, this.t); n < o;) i += this[n] + t[n],
            e[n++] = i & this.DM,
            i >>= this.DB;
            if (t.t < this.t) {
                for (i += t.s; n < this.t;) i += this[n],
                e[n++] = i & this.DM,
                i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; n < t.t;) i += t[n],
                e[n++] = i & this.DM,
                i >>= this.DB;
                i += t.s
            }
            e.s = i < 0 ? -1 : 0,
            i > 0 ? e[n++] = i: i < -1 && (e[n++] = this.DV + i),
            e.t = n,
            e.clamp()
        }
        function _t(t) {
            var e = i();
            return this.addTo(t, e),
            e
        }
        function Lt(t) {
            var e = i();
            return this.subTo(t, e),
            e
        }
        function Dt(t) {
            var e = i();
            return this.multiplyTo(t, e),
            e
        }
        function Rt() {
            var t = i();
            return this.squareTo(t),
            t
        }
        function At(t) {
            var e = i();
            return this.divRemTo(t, e, null),
            e
        }
        function Nt(t) {
            var e = i();
            return this.divRemTo(t, null, e),
            e
        }
        function It(t) {
            var e = i(),
            n = i();
            return this.divRemTo(t, e, n),
            new Array(e, n)
        }
        function Bt(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        function qt(t, e) {
            if (0 != t) {
                for (; this.t <= e;) this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV,
                ++e >= this.t && (this[this.t++] = 0),
                ++this[e]
            }
        }
        function Mt() {}
        function Ot(t) {
            return t
        }
        function Jt(t, e, n) {
            t.multiplyTo(e, n)
        }
        function Pt(t, e) {
            t.squareTo(e)
        }
        function $t(t) {
            return this.exp(t, new Mt)
        }
        function jt(t, e, n) {
            var i = Math.min(this.t + t.t, e);
            for (n.s = 0, n.t = i; i > 0;) n[--i] = 0;
            var o;
            for (o = n.t - this.t; i < o; ++i) n[i + this.t] = this.am(0, t[i], n, i, 0, this.t);
            for (o = Math.min(t.t, e); i < o; ++i) this.am(0, t[i], n, i, 0, e - i);
            n.clamp()
        }
        function Ut(t, e, n) {--e;
            var i = n.t = this.t + t.t - e;
            for (n.s = 0; --i >= 0;) n[i] = 0;
            for (i = Math.max(e - this.t, 0); i < t.t; ++i) n[this.t + i - e] = this.am(e - i, t[i], n, 0, 0, this.t + i - e);
            n.clamp(),
            n.drShiftTo(1, n)
        }
        function Ht(t) {
            this.r2 = i(),
            this.q3 = i(),
            n.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t
        }
        function Ft(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var e = i();
            return t.copyTo(e),
            this.reduce(e),
            e
        }
        function Wt(t) {
            return t
        }
        function Vt(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
        }
        function Kt(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function Qt(t, e, n) {
            t.multiplyTo(e, n),
            this.reduce(n)
        }
        function zt(t, e) {
            var n, o, r = t.bitLength(),
            s = h(1);
            if (r <= 0) return s;
            n = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
            o = r < 8 ? new R(e) : e.isEven() ? new Ht(e) : new O(e);
            var a = new Array,
            c = 3,
            l = n - 1,
            u = (1 << n) - 1;
            if (a[1] = o.convert(this), n > 1) {
                var d = i();
                for (o.sqrTo(a[1], d); c <= u;) a[c] = i(),
                o.mulTo(d, a[c - 2], a[c]),
                c += 2
            }
            var f, p, g = t.t - 1,
            m = !0,
            v = i();
            for (r = w(t[g]) - 1; g >= 0;) {
                for (r >= l ? f = t[g] >> r - l & u: (f = (t[g] & (1 << r + 1) - 1) << l - r, g > 0 && (f |= t[g - 1] >> this.DB + r - l)), c = n; 0 == (1 & f);) f >>= 1,
                --c;
                if ((r -= c) < 0 && (r += this.DB, --g), m) a[f].copyTo(s),
                m = !1;
                else {
                    for (; c > 1;) o.sqrTo(s, v),
                    o.sqrTo(v, s),
                    c -= 2;
                    c > 0 ? o.sqrTo(s, v) : (p = s, s = v, v = p),
                    o.mulTo(v, a[f], s)
                }
                for (; g >= 0 && 0 == (t[g] & 1 << r);) o.sqrTo(s, v),
                p = s,
                s = v,
                v = p,
                --r < 0 && (r = this.DB - 1, --g)
            }
            return o.revert(s)
        }
        function Xt(t) {
            var e = this.s < 0 ? this.negate() : this.clone(),
            n = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(n) < 0) {
                var i = e;
                e = n,
                n = i
            }
            var o = e.getLowestSetBit(),
            r = n.getLowestSetBit();
            if (r < 0) return e;
            for (o < r && (r = o), r > 0 && (e.rShiftTo(r, e), n.rShiftTo(r, n)); e.signum() > 0;)(o = e.getLowestSetBit()) > 0 && e.rShiftTo(o, e),
            (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
            e.compareTo(n) >= 0 ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
            return r > 0 && n.lShiftTo(r, n),
            n
        }
        function Gt(t) {
            if (t <= 0) return 0;
            var e = this.DV % t,
            n = this.s < 0 ? t - 1 : 0;
            if (this.t > 0) if (0 == e) n = this[0] % t;
            else for (var i = this.t - 1; i >= 0; --i) n = (e * n + this[i]) % t;
            return n
        }
        function Yt(t) {
            var e = t.isEven();
            if (this.isEven() && e || 0 == t.signum()) return n.ZERO;
            for (var i = t.clone(), o = this.clone(), r = h(1), s = h(0), a = h(0), c = h(1); 0 != i.signum();) {
                for (; i.isEven();) i.rShiftTo(1, i),
                e ? (r.isEven() && s.isEven() || (r.addTo(this, r), s.subTo(t, s)), r.rShiftTo(1, r)) : s.isEven() || s.subTo(t, s),
                s.rShiftTo(1, s);
                for (; o.isEven();) o.rShiftTo(1, o),
                e ? (a.isEven() && c.isEven() || (a.addTo(this, a), c.subTo(t, c)), a.rShiftTo(1, a)) : c.isEven() || c.subTo(t, c),
                c.rShiftTo(1, c);
                i.compareTo(o) >= 0 ? (i.subTo(o, i), e && r.subTo(a, r), s.subTo(c, s)) : (o.subTo(i, o), e && a.subTo(r, a), c.subTo(s, c))
            }
            return 0 != o.compareTo(n.ONE) ? n.ZERO: c.compareTo(t) >= 0 ? c.subtract(t) : c.signum() < 0 ? (c.addTo(t, c), c.signum() < 0 ? c.add(t) : c) : c
        }
        function Zt(t) {
            var e, n = this.abs();
            if (1 == n.t && n[0] <= Re[Re.length - 1]) {
                for (e = 0; e < Re.length; ++e) if (n[0] == Re[e]) return ! 0;
                return ! 1
            }
            if (n.isEven()) return ! 1;
            for (e = 1; e < Re.length;) {
                for (var i = Re[e], o = e + 1; o < Re.length && i < Ae;) i *= Re[o++];
                for (i = n.modInt(i); e < o;) if (i % Re[e++] == 0) return ! 1
            }
            return n.millerRabin(t)
        }
        function te(t) {
            var e = this.subtract(n.ONE),
            o = e.getLowestSetBit();
            if (o <= 0) return ! 1;
            var r = e.shiftRight(o);
            t = t + 1 >> 1,
            t > Re.length && (t = Re.length);
            for (var s = i(), a = 0; a < t; ++a) {
                s.fromInt(Re[Math.floor(Math.random() * Re.length)]);
                var c = s.modPow(r, this);
                if (0 != c.compareTo(n.ONE) && 0 != c.compareTo(e)) {
                    for (var l = 1; l++<o && 0 != c.compareTo(e);) if (c = c.modPowInt(2, this), 0 == c.compareTo(n.ONE)) return ! 1;
                    if (0 != c.compareTo(e)) return ! 1
                }
            }
            return ! 0
        }
        function ee() {
            this.i = 0,
            this.j = 0,
            this.S = new Array
        }
        function ne(t) {
            var e, n, i;
            for (e = 0; e < 256; ++e) this.S[e] = e;
            for (n = 0, e = 0; e < 256; ++e) n = n + this.S[e] + t[e % t.length] & 255,
            i = this.S[e],
            this.S[e] = this.S[n],
            this.S[n] = i;
            this.i = 0,
            this.j = 0
        }
        function ie() {
            var t;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            t = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = t,
            this.S[t + this.S[this.i] & 255]
        }
        function oe() {
            return new ee
        }
        function re() {
            if (null == Ne) {
                for (Ne = oe(); Be < qe;) {
                    var t = Math.floor(65536 * Math.random());
                    Ie[Be++] = 255 & t
                }
                for (Ne.init(Ie), Be = 0; Be < Ie.length; ++Be) Ie[Be] = 0;
                Be = 0
            }
            return Ne.next()
        }
        function se(t) {
            var e;
            for (e = 0; e < t.length; ++e) t[e] = re()
        }
        function ae() {}
        function ce(t, e) {
            return new n(t, e)
        }
        function le(t, e) {
            if (e < t.length + 11) return console.error("Message too long for RSA"),
            null;
            for (var i = new Array,
            o = t.length - 1; o >= 0 && e > 0;) {
                var r = t.charCodeAt(o--);
                r < 128 ? i[--e] = r: r > 127 && r < 2048 ? (i[--e] = 63 & r | 128, i[--e] = r >> 6 | 192) : (i[--e] = 63 & r | 128, i[--e] = r >> 6 & 63 | 128, i[--e] = r >> 12 | 224)
            }
            i[--e] = 0;
            for (var s = new ae,
            a = new Array; e > 2;) {
                for (a[0] = 0; 0 == a[0];) s.nextBytes(a);
                i[--e] = a[0]
            }
            return i[--e] = 2,
            i[--e] = 0,
            new n(i)
        }
        function ue() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
        function he(t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ce(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
        }
        function de(t) {
            return t.modPowInt(this.e, this.n)
        }
        function fe(t) {
            var e = le(t, this.n.bitLength() + 7 >> 3);
            if (null == e) return null;
            var n = this.doPublic(e);
            if (null == n) return null;
            var i = n.toString(16);
            return 0 == (1 & i.length) ? i: "0" + i
        }
        function pe(t, e) {
            for (var n = t.toByteArray(), i = 0; i < n.length && 0 == n[i];)++i;
            if (n.length - i != e - 1 || 2 != n[i]) return null;
            for (++i; 0 != n[i];) if (++i >= n.length) return null;
            for (var o = ""; ++i < n.length;) {
                var r = 255 & n[i];
                r < 128 ? o += String.fromCharCode(r) : r > 191 && r < 224 ? (o += String.fromCharCode((31 & r) << 6 | 63 & n[i + 1]), ++i) : (o += String.fromCharCode((15 & r) << 12 | (63 & n[i + 1]) << 6 | 63 & n[i + 2]), i += 2)
            }
            return o
        }
        function ge(t, e, n) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ce(t, 16), this.e = parseInt(e, 16), this.d = ce(n, 16)) : console.error("Invalid RSA private key")
        }
        function me(t, e, n, i, o, r, s, a) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ce(t, 16), this.e = parseInt(e, 16), this.d = ce(n, 16), this.p = ce(i, 16), this.q = ce(o, 16), this.dmp1 = ce(r, 16), this.dmq1 = ce(s, 16), this.coeff = ce(a, 16)) : console.error("Invalid RSA private key")
        }
        function ve(t, e) {
            var i = new ae,
            o = t >> 1;
            this.e = parseInt(e, 16);
            for (var r = new n(e, 16);;) {
                for (; this.p = new n(t - o, 1, i), 0 != this.p.subtract(n.ONE).gcd(r).compareTo(n.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new n(o, 1, i), 0 != this.q.subtract(n.ONE).gcd(r).compareTo(n.ONE) || !this.q.isProbablePrime(10););
                if (this.p.compareTo(this.q) <= 0) {
                    var s = this.p;
                    this.p = this.q,
                    this.q = s
                }
                var a = this.p.subtract(n.ONE),
                c = this.q.subtract(n.ONE),
                l = a.multiply(c);
                if (0 == l.gcd(r).compareTo(n.ONE)) {
                    this.n = this.p.multiply(this.q),
                    this.d = r.modInverse(l),
                    this.dmp1 = this.d.mod(a),
                    this.dmq1 = this.d.mod(c),
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        function ye(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;) e = e.add(this.p);
            return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
        }
        function we(t) {
            var e = ce(t, 16),
            n = this.doPrivate(e);
            return null == n ? null: pe(n, this.n.bitLength() + 7 >> 3)
        }
        function be(t) {
            var e, n, i = "";
            for (e = 0; e + 3 <= t.length; e += 3) n = parseInt(t.substring(e, e + 3), 16),
            i += Pe.charAt(n >> 6) + Pe.charAt(63 & n);
            for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), i += Pe.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), i += Pe.charAt(n >> 2) + Pe.charAt((3 & n) << 4)); (3 & i.length) > 0;) i += $e;
            return i
        }
        function xe(t) {
            var e, n, i = "",
            o = 0;
            for (e = 0; e < t.length && t.charAt(e) != $e; ++e) v = Pe.indexOf(t.charAt(e)),
            v < 0 || (0 == o ? (i += a(v >> 2), n = 3 & v, o = 1) : 1 == o ? (i += a(n << 2 | v >> 4), n = 15 & v, o = 2) : 2 == o ? (i += a(n), i += a(v >> 2), n = 3 & v, o = 3) : (i += a(n << 2 | v >> 4), i += a(15 & v), o = 0));
            return 1 == o && (i += a(n << 2)),
            i
        }
        var Te, Se = 0xdeadbeefcafe,
        Ee = 15715070 == (16777215 & Se);
        Ee && "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = r, Te = 30) : Ee && "Netscape" != navigator.appName ? (n.prototype.am = o, Te = 26) : (n.prototype.am = s, Te = 28),
        n.prototype.DB = Te,
        n.prototype.DM = (1 << Te) - 1,
        n.prototype.DV = 1 << Te;
        var ke = 52;
        n.prototype.FV = Math.pow(2, ke),
        n.prototype.F1 = ke - Te,
        n.prototype.F2 = 2 * Te - ke;
        var Ce, _e, Le = "0123456789abcdefghijklmnopqrstuvwxyz",
        De = new Array;
        for (Ce = "0".charCodeAt(0), _e = 0; _e <= 9; ++_e) De[Ce++] = _e;
        for (Ce = "a".charCodeAt(0), _e = 10; _e < 36; ++_e) De[Ce++] = _e;
        for (Ce = "A".charCodeAt(0), _e = 10; _e < 36; ++_e) De[Ce++] = _e;
        R.prototype.convert = A,
        R.prototype.revert = N,
        R.prototype.reduce = I,
        R.prototype.mulTo = B,
        R.prototype.sqrTo = q,
        O.prototype.convert = J,
        O.prototype.revert = P,
        O.prototype.reduce = $,
        O.prototype.mulTo = U,
        O.prototype.sqrTo = j,
        n.prototype.copyTo = l,
        n.prototype.fromInt = u,
        n.prototype.fromString = d,
        n.prototype.clamp = f,
        n.prototype.dlShiftTo = x,
        n.prototype.drShiftTo = T,
        n.prototype.lShiftTo = S,
        n.prototype.rShiftTo = E,
        n.prototype.subTo = k,
        n.prototype.multiplyTo = C,
        n.prototype.squareTo = _,
        n.prototype.divRemTo = L,
        n.prototype.invDigit = M,
        n.prototype.isEven = H,
        n.prototype.exp = F,
        n.prototype.toString = p,
        n.prototype.negate = g,
        n.prototype.abs = m,
        n.prototype.compareTo = y,
        n.prototype.bitLength = b,
        n.prototype.mod = D,
        n.prototype.modPowInt = W,
        n.ZERO = h(0),
        n.ONE = h(1),
        Mt.prototype.convert = Ot,
        Mt.prototype.revert = Ot,
        Mt.prototype.mulTo = Jt,
        Mt.prototype.sqrTo = Pt,
        Ht.prototype.convert = Ft,
        Ht.prototype.revert = Wt,
        Ht.prototype.reduce = Vt,
        Ht.prototype.mulTo = Qt,
        Ht.prototype.sqrTo = Kt;
        var Re = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        Ae = (1 << 26) / Re[Re.length - 1];
        n.prototype.chunkSize = X,
        n.prototype.toRadix = Y,
        n.prototype.fromRadix = Z,
        n.prototype.fromNumber = tt,
        n.prototype.bitwiseTo = rt,
        n.prototype.changeBit = Tt,
        n.prototype.addTo = Ct,
        n.prototype.dMultiply = Bt,
        n.prototype.dAddOffset = qt,
        n.prototype.multiplyLowerTo = jt,
        n.prototype.multiplyUpperTo = Ut,
        n.prototype.modInt = Gt,
        n.prototype.millerRabin = te,
        n.prototype.clone = V,
        n.prototype.intValue = K,
        n.prototype.byteValue = Q,
        n.prototype.shortValue = z,
        n.prototype.signum = G,
        n.prototype.toByteArray = et,
        n.prototype.equals = nt,
        n.prototype.min = it,
        n.prototype.max = ot,
        n.prototype.and = at,
        n.prototype.or = lt,
        n.prototype.xor = ht,
        n.prototype.andNot = ft,
        n.prototype.not = pt,
        n.prototype.shiftLeft = gt,
        n.prototype.shiftRight = mt,
        n.prototype.getLowestSetBit = yt,
        n.prototype.bitCount = bt,
        n.prototype.testBit = xt,
        n.prototype.setBit = St,
        n.prototype.clearBit = Et,
        n.prototype.flipBit = kt,
        n.prototype.add = _t,
        n.prototype.subtract = Lt,
        n.prototype.multiply = Dt,
        n.prototype.divide = At,
        n.prototype.remainder = Nt,
        n.prototype.divideAndRemainder = It,
        n.prototype.modPow = zt,
        n.prototype.modInverse = Yt,
        n.prototype.pow = $t,
        n.prototype.gcd = Xt,
        n.prototype.isProbablePrime = Zt,
        n.prototype.square = Rt,
        ee.prototype.init = ne,
        ee.prototype.next = ie;
        var Ne, Ie, Be, qe = 256;
        if (null == Ie) {
            Ie = new Array,
            Be = 0;
            var Me;
            if (window.crypto && window.crypto.getRandomValues) {
                var Oe = new Uint32Array(256);
                for (window.crypto.getRandomValues(Oe), Me = 0; Me < Oe.length; ++Me) Ie[Be++] = 255 & Oe[Me]
            }
            var Je = function(t) {
                if (this.count = this.count || 0, this.count >= 256 || Be >= qe) return void(window.removeEventListener ? window.removeEventListener("mousemove", Je, !1) : window.detachEvent && window.detachEvent("onmousemove", Je));
                try {
                    var e = t.x + t.y;
                    Ie[Be++] = 255 & e,
                    this.count += 1
                } catch(t) {}
            };
            window.addEventListener ? window.addEventListener("mousemove", Je, !1) : window.attachEvent && window.attachEvent("onmousemove", Je)
        }
        ae.prototype.nextBytes = se,
        ue.prototype.doPublic = de,
        ue.prototype.setPublic = he,
        ue.prototype.encrypt = fe,
        ue.prototype.doPrivate = ye,
        ue.prototype.setPrivate = ge,
        ue.prototype.setPrivateEx = me,
        ue.prototype.generate = ve,
        ue.prototype.decrypt = we,
        function() {
            var t = function(t, e, o) {
                var r = new ae,
                s = t >> 1;
                this.e = parseInt(e, 16);
                var a = new n(e, 16),
                c = this,
                l = function() {
                    var e = function() {
                        if (c.p.compareTo(c.q) <= 0) {
                            var t = c.p;
                            c.p = c.q,
                            c.q = t
                        }
                        var e = c.p.subtract(n.ONE),
                        i = c.q.subtract(n.ONE),
                        r = e.multiply(i);
                        0 == r.gcd(a).compareTo(n.ONE) ? (c.n = c.p.multiply(c.q), c.d = a.modInverse(r), c.dmp1 = c.d.mod(e), c.dmq1 = c.d.mod(i), c.coeff = c.q.modInverse(c.p), setTimeout(function() {
                            o()
                        },
                        0)) : setTimeout(l, 0)
                    },
                    u = function() {
                        c.q = i(),
                        c.q.fromNumberAsync(s, 1, r,
                        function() {
                            c.q.subtract(n.ONE).gcda(a,
                            function(t) {
                                0 == t.compareTo(n.ONE) && c.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(u, 0)
                            })
                        })
                    },
                    h = function() {
                        c.p = i(),
                        c.p.fromNumberAsync(t - s, 1, r,
                        function() {
                            c.p.subtract(n.ONE).gcda(a,
                            function(t) {
                                0 == t.compareTo(n.ONE) && c.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(h, 0)
                            })
                        })
                    };
                    setTimeout(h, 0)
                };
                setTimeout(l, 0)
            };
            ue.prototype.generateAsync = t;
            var e = function(t, e) {
                var n = this.s < 0 ? this.negate() : this.clone(),
                i = t.s < 0 ? t.negate() : t.clone();
                if (n.compareTo(i) < 0) {
                    var o = n;
                    n = i,
                    i = o
                }
                var r = n.getLowestSetBit(),
                s = i.getLowestSetBit();
                if (s < 0) return void e(n);
                r < s && (s = r),
                s > 0 && (n.rShiftTo(s, n), i.rShiftTo(s, i));
                var a = function() { (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                    (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                    n.compareTo(i) >= 0 ? (n.subTo(i, n), n.rShiftTo(1, n)) : (i.subTo(n, i), i.rShiftTo(1, i)),
                    n.signum() > 0 ? setTimeout(a, 0) : (s > 0 && i.lShiftTo(s, i), setTimeout(function() {
                        e(i)
                    },
                    0))
                };
                setTimeout(a, 10)
            };
            n.prototype.gcda = e;
            var o = function(t, e, i, o) {
                if ("number" == typeof e) if (t < 2) this.fromInt(1);
                else {
                    this.fromNumber(t, i),
                    this.testBit(t - 1) || this.bitwiseTo(n.ONE.shiftLeft(t - 1), ct, this),
                    this.isEven() && this.dAddOffset(1, 0);
                    var r = this,
                    s = function() {
                        r.dAddOffset(2, 0),
                        r.bitLength() > t && r.subTo(n.ONE.shiftLeft(t - 1), r),
                        r.isProbablePrime(e) ? setTimeout(function() {
                            o()
                        },
                        0) : setTimeout(s, 0)
                    };
                    setTimeout(s, 0)
                } else {
                    var a = new Array,
                    c = 7 & t;
                    a.length = (t >> 3) + 1,
                    e.nextBytes(a),
                    c > 0 ? a[0] &= (1 << c) - 1 : a[0] = 0,
                    this.fromString(a, 256)
                }
            };
            n.prototype.fromNumberAsync = o
        } ();
        var Pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        $e = "=",
        je = je || {};
        je.env = je.env || {};
        var Ue = je,
        He = Object.prototype,
        Fe = "[object Function]",
        We = ["toString", "valueOf"];
        je.env.parseUA = function(t) {
            var e, n = function(t) {
                var e = 0;
                return parseFloat(t.replace(/\./g,
                function() {
                    return 1 == e++?"": "."
                }))
            },
            i = navigator,
            o = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: i && i.cajaVersion,
                secure: !1,
                os: null
            },
            r = t || navigator && navigator.userAgent,
            s = window && window.location,
            a = s && s.href;
            return o.secure = a && 0 === a.toLowerCase().indexOf("https"),
            r && (/windows|win32/i.test(r) ? o.os = "windows": /macintosh/i.test(r) ? o.os = "macintosh": /rhino/i.test(r) && (o.os = "rhino"), /KHTML/.test(r) && (o.webkit = 1), e = r.match(/AppleWebKit\/([^\s]*)/), e && e[1] && (o.webkit = n(e[1]), / Mobile\//.test(r) ? (o.mobile = "Apple", e = r.match(/OS ([^\s]*)/), e && e[1] && (e = n(e[1].replace("_", "."))), o.ios = e, o.ipad = o.ipod = o.iphone = 0, e = r.match(/iPad|iPod|iPhone/), e && e[0] && (o[e[0].toLowerCase()] = o.ios)) : (e = r.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), e && (o.mobile = e[0]), /webOS/.test(r) && (o.mobile = "WebOS", e = r.match(/webOS\/([^\s]*);/), e && e[1] && (o.webos = n(e[1]))), / Android/.test(r) && (o.mobile = "Android", e = r.match(/Android ([^\s]*);/), e && e[1] && (o.android = n(e[1])))), e = r.match(/Chrome\/([^\s]*)/), e && e[1] ? o.chrome = n(e[1]) : (e = r.match(/AdobeAIR\/([^\s]*)/), e && (o.air = e[0]))), o.webkit || (e = r.match(/Opera[\s\/]([^\s]*)/), e && e[1] ? (o.opera = n(e[1]), e = r.match(/Version\/([^\s]*)/), e && e[1] && (o.opera = n(e[1])), e = r.match(/Opera Mini[^;]*/), e && (o.mobile = e[0])) : (e = r.match(/MSIE\s([^;]*)/), e && e[1] ? o.ie = n(e[1]) : (e = r.match(/Gecko\/([^\s]*)/), e && (o.gecko = 1, e = r.match(/rv:([^\s\)]*)/), e && e[1] && (o.gecko = n(e[1]))))))),
            o
        },
        je.env.ua = je.env.parseUA(),
        je.isFunction = function(t) {
            return "function" == typeof t || He.toString.apply(t) === Fe
        },
        je._IEEnumFix = je.env.ua.ie ?
        function(t, e) {
            var n, i, o;
            for (n = 0; n < We.length; n += 1) i = We[n],
            o = e[i],
            Ue.isFunction(o) && o != He[i] && (t[i] = o)
        }: function() {},
        je.extend = function(t, e, n) {
            if (!e || !t) throw new Error("extend failed, please check that all dependencies are included.");
            var i, o = function() {};
            if (o.prototype = e.prototype, t.prototype = new o, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == He.constructor && (e.prototype.constructor = e), n) {
                for (i in n) Ue.hasOwnProperty(n, i) && (t.prototype[i] = n[i]);
                Ue._IEEnumFix(t.prototype, n)
            }
        },
        /**
	 * @fileOverview
	 * @name asn1-1.0.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version 1.0.2 (2013-May-30)
	 * @since 2.1
	 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
        "undefined" != typeof KJUR && window.KJUR || (window.KJUR = {}),
        "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
        KJUR.asn1.ASN1Util = new
        function() {
            this.integerToByteHex = function(t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                e
            },
            this.bigIntToMinTwosComplementsHex = function(t) {
                var e = t.toString(16);
                if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e: e.match(/^[0-7]/) || (e = "00" + e);
                else {
                    var i = e.substr(1),
                    o = i.length;
                    o % 2 == 1 ? o += 1 : e.match(/^[0-7]/) || (o += 2);
                    for (var r = "",
                    s = 0; s < o; s++) r += "f";
                    var a = new n(r, 16),
                    c = a.xor(t).add(n.ONE);
                    e = c.toString(16).replace(/^-/, "")
                }
                return e
            },
            this.getPEMStringFromHex = function(t, e) {
                var n = CryptoJS.enc.Hex.parse(t),
                i = CryptoJS.enc.Base64.stringify(n),
                o = i.replace(/(.{64})/g, "$1\r\n");
                return o = o.replace(/\r\n$/, ""),
                "-----BEGIN " + e + "-----\r\n" + o + "\r\n-----END " + e + "-----\r\n"
            }
        },
        KJUR.asn1.ASN1Object = function() {
            var t = "";
            this.getLengthHexFromValue = function() {
                if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
                var e = this.hV.length / 2,
                n = e.toString(16);
                if (n.length % 2 == 1 && (n = "0" + n), e < 128) return n;
                var i = n.length / 2;
                if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                var o = 128 + i;
                return o.toString(16) + n
            },
            this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
                this.hTLV
            },
            this.getValueHex = function() {
                return this.getEncodedHex(),
                this.hV
            },
            this.getFreshValueHex = function() {
                return ""
            }
        },
        KJUR.asn1.DERAbstractString = function(t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function() {
                return this.s
            },
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            },
            this.setStringHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
        },
        je.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractTime = function(t) {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function(t) {
                utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                var e = new Date(utc);
                return e
            },
            this.formatDate = function(t, e) {
                var n = this.zeroPadding,
                i = this.localDateToUTC(t),
                o = String(i.getFullYear());
                "utc" == e && (o = o.substr(2, 2));
                var r = n(String(i.getMonth() + 1), 2),
                s = n(String(i.getDate()), 2),
                a = n(String(i.getHours()), 2),
                c = n(String(i.getMinutes()), 2),
                l = n(String(i.getSeconds()), 2);
                return o + r + s + a + c + l + "Z"
            },
            this.zeroPadding = function(t, e) {
                return t.length >= e ? t: new Array(e - t.length + 1).join("0") + t
            },
            this.getString = function() {
                return this.s
            },
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            },
            this.setByDateValue = function(t, e, n, i, o, r) {
                var s = new Date(Date.UTC(t, e - 1, n, i, o, r, 0));
                this.setByDate(s)
            },
            this.getFreshValueHex = function() {
                return this.hV
            }
        },
        je.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractStructured = function(t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = t
            },
            this.appendASN1Object = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array.push(t)
            },
            this.asn1Array = new Array,
            "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
        },
        je.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBoolean = function() {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
        },
        je.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERInteger = function(t) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            },
            this.setByInteger = function(t) {
                var e = new n(String(t), 10);
                this.setByBigInteger(e)
            },
            this.setValueHex = function(t) {
                this.hV = t
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t.int ? this.setByInteger(t.int) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        },
        je.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBitString = function(t) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = t
            },
            this.setUnusedBitsAndHexValue = function(t, e) {
                if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                var n = "0" + t;
                this.hTLV = null,
                this.isModified = !0,
                this.hV = n + e
            },
            this.setByBinaryString = function(t) {
                t = t.replace(/0+$/, "");
                var e = 8 - t.length % 8;
                8 == e && (e = 0);
                for (var n = 0; n <= e; n++) t += "0";
                for (var i = "",
                n = 0; n < t.length - 1; n += 8) {
                    var o = t.substr(n, 8),
                    r = parseInt(o, 2).toString(16);
                    1 == r.length && (r = "0" + r),
                    i += r
                }
                this.hTLV = null,
                this.isModified = !0,
                this.hV = "0" + e + i
            },
            this.setByBooleanArray = function(t) {
                for (var e = "",
                n = 0; n < t.length; n++) e += 1 == t[n] ? "1": "0";
                this.setByBinaryString(e)
            },
            this.newFalseArray = function(t) {
                for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
                return e
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            "undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
        },
        je.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DEROctetString = function(t) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
            this.hT = "04"
        },
        je.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNull = function() {
            KJUR.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
        },
        je.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERObjectIdentifier = function(t) {
            var e = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            },
            i = function(t) {
                var i = "",
                o = new n(t, 10),
                r = o.toString(2),
                s = 7 - r.length % 7;
                7 == s && (s = 0);
                for (var a = "",
                c = 0; c < s; c++) a += "0";
                r = a + r;
                for (var c = 0; c < r.length - 1; c += 7) {
                    var l = r.substr(c, 7);
                    c != r.length - 7 && (l = "1" + l),
                    i += e(parseInt(l, 2))
                }
                return i
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            },
            this.setValueOidString = function(t) {
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var n = "",
                o = t.split("."),
                r = 40 * parseInt(o[0]) + parseInt(o[1]);
                n += e(r),
                o.splice(0, 2);
                for (var s = 0; s < o.length; s++) n += i(o[s]);
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = n
            },
            this.setValueName = function(t) {
                if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t]) throw "DERObjectIdentifier oidName undefined: " + t;
                var e = KJUR.asn1.x509.OID.name2oidList[t];
                this.setValueOidString(e)
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            "undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
        },
        je.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERUTF8String = function(t) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
            this.hT = "0c"
        },
        je.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNumericString = function(t) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
            this.hT = "12"
        },
        je.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERPrintableString = function(t) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
            this.hT = "13"
        },
        je.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERTeletexString = function(t) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
            this.hT = "14"
        },
        je.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERIA5String = function(t) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
            this.hT = "16"
        },
        je.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERUTCTime = function(t) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
            this.hT = "17",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)
            },
            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
        },
        je.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERGeneralizedTime = function(t) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            this.hT = "18",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "gen"),
                this.hV = stohex(this.s)
            },
            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
        },
        je.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERSequence = function(t) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
            this.hT = "30",
            this.getFreshValueHex = function() {
                for (var t = "",
                e = 0; e < this.asn1Array.length; e++) {
                    var n = this.asn1Array[e];
                    t += n.getEncodedHex()
                }
                return this.hV = t,
                this.hV
            }
        },
        je.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERSet = function(t) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, t),
            this.hT = "31",
            this.getFreshValueHex = function() {
                for (var t = new Array,
                e = 0; e < this.asn1Array.length; e++) {
                    var n = this.asn1Array[e];
                    t.push(n.getEncodedHex())
                }
                return t.sort(),
                this.hV = t.join(""),
                this.hV
            }
        },
        je.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERTaggedObject = function(t) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function(t, e, n) {
                this.hT = e,
                this.isExplicit = t,
                this.asn1Object = n,
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag), "undefined" != typeof t.explicit && (this.isExplicit = t.explicit), "undefined" != typeof t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        },
        je.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
        function(t) {
            "use strict";
            var e, n = {};
            n.decode = function(n) {
                var i;
                if (e === t) {
                    var o = "0123456789ABCDEF",
                    r = " \f\n\r\t\xa0\u2028\u2029";
                    for (e = [], i = 0; i < 16; ++i) e[o.charAt(i)] = i;
                    for (o = o.toLowerCase(), i = 10; i < 16; ++i) e[o.charAt(i)] = i;
                    for (i = 0; i < r.length; ++i) e[r.charAt(i)] = -1
                }
                var s = [],
                a = 0,
                c = 0;
                for (i = 0; i < n.length; ++i) {
                    var l = n.charAt(i);
                    if ("=" == l) break;
                    if (l = e[l], l != -1) {
                        if (l === t) throw "Illegal character at offset " + i;
                        a |= l,
                        ++c >= 2 ? (s[s.length] = a, a = 0, c = 0) : a <<= 4
                    }
                }
                if (c) throw "Hex encoding incomplete: 4 bits missing";
                return s
            },
            window.Hex = n
        } (),
        function(t) {
            "use strict";
            var e, n = {};
            n.decode = function(n) {
                var i;
                if (e === t) {
                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    r = "= \f\n\r\t\xa0\u2028\u2029";
                    for (e = [], i = 0; i < 64; ++i) e[o.charAt(i)] = i;
                    for (i = 0; i < r.length; ++i) e[r.charAt(i)] = -1
                }
                var s = [],
                a = 0,
                c = 0;
                for (i = 0; i < n.length; ++i) {
                    var l = n.charAt(i);
                    if ("=" == l) break;
                    if (l = e[l], l != -1) {
                        if (l === t) throw "Illegal character at offset " + i;
                        a |= l,
                        ++c >= 4 ? (s[s.length] = a >> 16, s[s.length] = a >> 8 & 255, s[s.length] = 255 & a, a = 0, c = 0) : a <<= 6
                    }
                }
                switch (c) {
                case 1:
                    throw "Base64 encoding incomplete: at least 2 bits missing";
                case 2:
                    s[s.length] = a >> 10;
                    break;
                case 3:
                    s[s.length] = a >> 16,
                    s[s.length] = a >> 8 & 255
                }
                return s
            },
            n.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            n.unarmor = function(t) {
                var e = n.re.exec(t);
                if (e) if (e[1]) t = e[1];
                else {
                    if (!e[2]) throw "RegExp out of sync";
                    t = e[2]
                }
                return n.decode(t)
            },
            window.Base64 = n
        } (),
        function(t) {
            "use strict";
            function e(t, n) {
                t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = n)
            }
            function n(t, e, n, i, o) {
                this.stream = t,
                this.header = e,
                this.length = n,
                this.tag = i,
                this.sub = o
            }
            var i = 100,
            o = "\u2026",
            r = {
                tag: function(t, e) {
                    var n = document.createElement(t);
                    return n.className = e,
                    n
                },
                text: function(t) {
                    return document.createTextNode(t)
                }
            };
            e.prototype.get = function(e) {
                if (e === t && (e = this.pos++), e >= this.enc.length) throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
                return this.enc[e]
            },
            e.prototype.hexDigits = "0123456789ABCDEF",
            e.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            },
            e.prototype.hexDump = function(t, e, n) {
                for (var i = "",
                o = t; o < e; ++o) if (i += this.hexByte(this.get(o)), n !== !0) switch (15 & o) {
                case 7:
                    i += "  ";
                    break;
                case 15:
                    i += "\n";
                    break;
                default:
                    i += " "
                }
                return i
            },
            e.prototype.parseStringISO = function(t, e) {
                for (var n = "",
                i = t; i < e; ++i) n += String.fromCharCode(this.get(i));
                return n
            },
            e.prototype.parseStringUTF = function(t, e) {
                for (var n = "",
                i = t; i < e;) {
                    var o = this.get(i++);
                    n += o < 128 ? String.fromCharCode(o) : o > 191 && o < 224 ? String.fromCharCode((31 & o) << 6 | 63 & this.get(i++)) : String.fromCharCode((15 & o) << 12 | (63 & this.get(i++)) << 6 | 63 & this.get(i++))
                }
                return n
            },
            e.prototype.parseStringBMP = function(t, e) {
                for (var n = "",
                i = t; i < e; i += 2) {
                    var o = this.get(i),
                    r = this.get(i + 1);
                    n += String.fromCharCode((o << 8) + r)
                }
                return n
            },
            e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
            e.prototype.parseTime = function(t, e) {
                var n = this.parseStringISO(t, e),
                i = this.reTime.exec(n);
                return i ? (n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (n += ":" + i[5], i[6] && (n += ":" + i[6], i[7] && (n += "." + i[7]))), i[8] && (n += " UTC", "Z" != i[8] && (n += i[8], i[9] && (n += ":" + i[9]))), n) : "Unrecognized time: " + n
            },
            e.prototype.parseInteger = function(t, e) {
                var n = e - t;
                if (n > 4) {
                    n <<= 3;
                    var i = this.get(t);
                    if (0 === i) n -= 8;
                    else for (; i < 128;) i <<= 1,
                    --n;
                    return "(" + n + " bit)"
                }
                for (var o = 0,
                r = t; r < e; ++r) o = o << 8 | this.get(r);
                return o
            },
            e.prototype.parseBitString = function(t, e) {
                var n = this.get(t),
                i = (e - t - 1 << 3) - n,
                o = "(" + i + " bit)";
                if (i <= 20) {
                    var r = n;
                    o += " ";
                    for (var s = e - 1; s > t; --s) {
                        for (var a = this.get(s), c = r; c < 8; ++c) o += a >> c & 1 ? "1": "0";
                        r = 0
                    }
                }
                return o
            },
            e.prototype.parseOctetString = function(t, e) {
                var n = e - t,
                r = "(" + n + " byte) ";
                n > i && (e = t + i);
                for (var s = t; s < e; ++s) r += this.hexByte(this.get(s));
                return n > i && (r += o),
                r
            },
            e.prototype.parseOID = function(t, e) {
                for (var n = "",
                i = 0,
                o = 0,
                r = t; r < e; ++r) {
                    var s = this.get(r);
                    if (i = i << 7 | 127 & s, o += 7, !(128 & s)) {
                        if ("" === n) {
                            var a = i < 80 ? i < 40 ? 0 : 1 : 2;
                            n = a + "." + (i - 40 * a)
                        } else n += "." + (o >= 31 ? "bigint": i);
                        i = o = 0
                    }
                }
                return n
            },
            n.prototype.typeName = function() {
                if (this.tag === t) return "unknown";
                var e = this.tag >> 6,
                n = (this.tag >> 5 & 1, 31 & this.tag);
                switch (e) {
                case 0:
                    switch (n) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString";
                    default:
                        return "Universal_" + n.toString(16)
                    }
                case 1:
                    return "Application_" + n.toString(16);
                case 2:
                    return "[" + n + "]";
                case 3:
                    return "Private_" + n.toString(16)
                }
            },
            n.prototype.reSeemsASCII = /^[ -~]+$/,
            n.prototype.content = function() {
                if (this.tag === t) return null;
                var e = this.tag >> 6,
                n = 31 & this.tag,
                r = this.posContent(),
                s = Math.abs(this.length);
                if (0 !== e) {
                    if (null !== this.sub) return "(" + this.sub.length + " elem)";
                    var a = this.stream.parseStringISO(r, r + Math.min(s, i));
                    return this.reSeemsASCII.test(a) ? a.substring(0, 2 * i) + (a.length > 2 * i ? o: "") : this.stream.parseOctetString(r, r + s)
                }
                switch (n) {
                case 1:
                    return 0 === this.stream.get(r) ? "false": "true";
                case 2:
                    return this.stream.parseInteger(r, r + s);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseBitString(r, r + s);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseOctetString(r, r + s);
                case 6:
                    return this.stream.parseOID(r, r + s);
                case 16:
                case 17:
                    return "(" + this.sub.length + " elem)";
                case 12:
                    return this.stream.parseStringUTF(r, r + s);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(r, r + s);
                case 30:
                    return this.stream.parseStringBMP(r, r + s);
                case 23:
                case 24:
                    return this.stream.parseTime(r, r + s)
                }
                return null
            },
            n.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null": this.sub.length) + "]"
            },
            n.prototype.print = function(e) {
                if (e === t && (e = ""), document.writeln(e + this), null !== this.sub) {
                    e += "  ";
                    for (var n = 0,
                    i = this.sub.length; n < i; ++n) this.sub[n].print(e)
                }
            },
            n.prototype.toPrettyString = function(e) {
                e === t && (e = "");
                var n = e + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (n += "+"), n += this.length, 32 & this.tag ? n += " (constructed)": 3 != this.tag && 4 != this.tag || null === this.sub || (n += " (encapsulates)"), n += "\n", null !== this.sub) {
                    e += "  ";
                    for (var i = 0,
                    o = this.sub.length; i < o; ++i) n += this.sub[i].toPrettyString(e)
                }
                return n
            },
            n.prototype.toDOM = function() {
                var t = r.tag("div", "node");
                t.asn1 = this;
                var e = r.tag("div", "head"),
                n = this.typeName().replace(/_/g, " ");
                e.innerHTML = n;
                var i = this.content();
                if (null !== i) {
                    i = String(i).replace(/</g, "&lt;");
                    var o = r.tag("span", "preview");
                    o.appendChild(r.text(i)),
                    e.appendChild(o)
                }
                t.appendChild(e),
                this.node = t,
                this.head = e;
                var s = r.tag("div", "value");
                if (n = "Offset: " + this.stream.pos + "<br/>", n += "Length: " + this.header + "+", n += this.length >= 0 ? this.length: -this.length + " (undefined)", 32 & this.tag ? n += "<br/>(constructed)": 3 != this.tag && 4 != this.tag || null === this.sub || (n += "<br/>(encapsulates)"), null !== i && (n += "<br/>Value:<br/><b>" + i + "</b>", "object" == typeof oids && 6 == this.tag)) {
                    var a = oids[i];
                    a && (a.d && (n += "<br/>" + a.d), a.c && (n += "<br/>" + a.c), a.w && (n += "<br/>(warning!)"))
                }
                s.innerHTML = n,
                t.appendChild(s);
                var c = r.tag("div", "sub");
                if (null !== this.sub) for (var l = 0,
                u = this.sub.length; l < u; ++l) c.appendChild(this.sub[l].toDOM());
                return t.appendChild(c),
                e.onclick = function() {
                    t.className = "node collapsed" == t.className ? "node": "node collapsed"
                },
                t
            },
            n.prototype.posStart = function() {
                return this.stream.pos
            },
            n.prototype.posContent = function() {
                return this.stream.pos + this.header
            },
            n.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            },
            n.prototype.fakeHover = function(t) {
                this.node.className += " hover",
                t && (this.head.className += " hover")
            },
            n.prototype.fakeOut = function(t) {
                var e = / ?hover/;
                this.node.className = this.node.className.replace(e, ""),
                t && (this.head.className = this.head.className.replace(e, ""))
            },
            n.prototype.toHexDOM_sub = function(t, e, n, i, o) {
                if (! (i >= o)) {
                    var s = r.tag("span", e);
                    s.appendChild(r.text(n.hexDump(i, o))),
                    t.appendChild(s)
                }
            },
            n.prototype.toHexDOM = function(e) {
                var n = r.tag("span", "hex");
                if (e === t && (e = n), this.head.hexNode = n, this.head.onmouseover = function() {
                    this.hexNode.className = "hexCurrent"
                },
                this.head.onmouseout = function() {
                    this.hexNode.className = "hex"
                },
                n.asn1 = this, n.onmouseover = function() {
                    var t = !e.selected;
                    t && (e.selected = this.asn1, this.className = "hexCurrent"),
                    this.asn1.fakeHover(t)
                },
                n.onmouseout = function() {
                    var t = e.selected == this.asn1;
                    this.asn1.fakeOut(t),
                    t && (e.selected = null, this.className = "hex")
                },
                this.toHexDOM_sub(n, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(n, this.length >= 0 ? "dlen": "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) n.appendChild(r.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (this.sub.length > 0) {
                    var i = this.sub[0],
                    o = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(n, "intro", this.stream, this.posContent(), i.posStart());
                    for (var s = 0,
                    a = this.sub.length; s < a; ++s) n.appendChild(this.sub[s].toHexDOM(e));
                    this.toHexDOM_sub(n, "outro", this.stream, o.posEnd(), this.posEnd())
                }
                return n
            },
            n.prototype.toHexString = function(t) {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            },
            n.decodeLength = function(t) {
                var e = t.get(),
                n = 127 & e;
                if (n == e) return n;
                if (n > 3) throw "Length over 24 bits not supported at position " + (t.pos - 1);
                if (0 === n) return - 1;
                e = 0;
                for (var i = 0; i < n; ++i) e = e << 8 | t.get();
                return e
            },
            n.hasContent = function(t, i, o) {
                if (32 & t) return ! 0;
                if (t < 3 || t > 4) return ! 1;
                var r = new e(o);
                3 == t && r.get();
                var s = r.get();
                if (s >> 6 & 1) return ! 1;
                try {
                    var a = n.decodeLength(r);
                    return r.pos - o.pos + a == i
                } catch(t) {
                    return ! 1
                }
            },
            n.decode = function(t) {
                t instanceof e || (t = new e(t, 0));
                var i = new e(t),
                o = t.get(),
                r = n.decodeLength(t),
                s = t.pos - i.pos,
                a = null;
                if (n.hasContent(o, r, t)) {
                    var c = t.pos;
                    if (3 == o && t.get(), a = [], r >= 0) {
                        for (var l = c + r; t.pos < l;) a[a.length] = n.decode(t);
                        if (t.pos != l) throw "Content size is not correct for container starting at offset " + c
                    } else try {
                        for (;;) {
                            var u = n.decode(t);
                            if (0 === u.tag) break;
                            a[a.length] = u
                        }
                        r = c - t.pos
                    } catch(t) {
                        throw "Exception while decoding undefined length content: " + t
                    }
                } else t.pos += r;
                return new n(i, s, r, o, a)
            },
            n.test = function() {
                for (var t = [{
                    value: [39],
                    expected: 39
                },
                {
                    value: [129, 201],
                    expected: 201
                },
                {
                    value: [131, 254, 220, 186],
                    expected: 16702650
                }], i = 0, o = t.length; i < o; ++i) {
                    var r = new e(t[i].value, 0),
                    s = n.decodeLength(r);
                    s != t[i].expected && document.write("In test[" + i + "] expected " + t[i].expected + " got " + s + "\n")
                }
            },
            window.ASN1 = n
        } (),
        ASN1.prototype.getHexStringValue = function() {
            var t = this.toHexString(),
            e = 2 * this.header,
            n = 2 * this.length;
            return t.substr(e, n)
        },
        ue.prototype.parseKey = function(t) {
            try {
                var e = 0,
                n = 0,
                i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
                o = i.test(t) ? Hex.decode(t) : Base64.unarmor(t),
                r = ASN1.decode(o);
                if (3 === r.sub.length && (r = r.sub[2].sub[0]), 9 === r.sub.length) {
                    e = r.sub[1].getHexStringValue(),
                    this.n = ce(e, 16),
                    n = r.sub[2].getHexStringValue(),
                    this.e = parseInt(n, 16);
                    var s = r.sub[3].getHexStringValue();
                    this.d = ce(s, 16);
                    var a = r.sub[4].getHexStringValue();
                    this.p = ce(a, 16);
                    var c = r.sub[5].getHexStringValue();
                    this.q = ce(c, 16);
                    var l = r.sub[6].getHexStringValue();
                    this.dmp1 = ce(l, 16);
                    var u = r.sub[7].getHexStringValue();
                    this.dmq1 = ce(u, 16);
                    var h = r.sub[8].getHexStringValue();
                    this.coeff = ce(h, 16)
                } else {
                    if (2 !== r.sub.length) return ! 1;
                    var d = r.sub[1],
                    f = d.sub[0];
                    e = f.sub[0].getHexStringValue(),
                    this.n = ce(e, 16),
                    n = f.sub[1].getHexStringValue(),
                    this.e = parseInt(n, 16)
                }
                return ! 0
            } catch(t) {
                return ! 1
            }
        },
        ue.prototype.getPrivateBaseKey = function() {
            var t = {
                array: [new KJUR.asn1.DERInteger({
                    int: 0
                }), new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    int: this.e
                }), new KJUR.asn1.DERInteger({
                    bigint: this.d
                }), new KJUR.asn1.DERInteger({
                    bigint: this.p
                }), new KJUR.asn1.DERInteger({
                    bigint: this.q
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })]
            },
            e = new KJUR.asn1.DERSequence(t);
            return e.getEncodedHex()
        },
        ue.prototype.getPrivateBaseKeyB64 = function() {
            return be(this.getPrivateBaseKey())
        },
        ue.prototype.getPublicBaseKey = function() {
            var t = {
                array: [new KJUR.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new KJUR.asn1.DERNull]
            },
            e = new KJUR.asn1.DERSequence(t);
            t = {
                array: [new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    int: this.e
                })]
            };
            var n = new KJUR.asn1.DERSequence(t);
            t = {
                hex: "00" + n.getEncodedHex()
            };
            var i = new KJUR.asn1.DERBitString(t);
            t = {
                array: [e, i]
            };
            var o = new KJUR.asn1.DERSequence(t);
            return o.getEncodedHex()
        },
        ue.prototype.getPublicBaseKeyB64 = function() {
            return be(this.getPublicBaseKey())
        },
        ue.prototype.wordwrap = function(t, e) {
            if (e = e || 64, !t) return t;
            var n = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(n, "g")).join("\n")
        },
        ue.prototype.getPrivateKey = function() {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
            t += "-----END RSA PRIVATE KEY-----"
        },
        ue.prototype.getPublicKey = function() {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
            t += "-----END PUBLIC KEY-----"
        },
        ue.prototype.hasPublicKeyProperty = function(t) {
            return t = t || {},
            t.hasOwnProperty("n") && t.hasOwnProperty("e")
        },
        ue.prototype.hasPrivateKeyProperty = function(t) {
            return t = t || {},
            t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
        },
        ue.prototype.parsePropertiesFrom = function(t) {
            this.n = t.n,
            this.e = t.e,
            t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
        };
        var Ve = function(t) {
            ue.call(this),
            t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
        };
        Ve.prototype = new ue,
        Ve.prototype.constructor = Ve;
        var Ke = function(t) {
            t = t || {},
            this.default_key_size = parseInt(t.default_key_size) || 1024,
            this.default_public_exponent = t.default_public_exponent || "010001",
            this.log = t.log || !1,
            this.key = null
        };
        Ke.prototype.setKey = function(t) {
            this.log && this.key && console.warn("A key was already set, overriding existing."),
            this.key = new Ve(t)
        },
        Ke.prototype.setPrivateKey = function(t) {
            this.setKey(t)
        },
        Ke.prototype.setPublicKey = function(t) {
            this.setKey(t)
        },
        Ke.prototype.decrypt = function(t) {
            try {
                return this.getKey().decrypt(xe(t))
            } catch(t) {
                return ! 1
            }
        },
        Ke.prototype.encrypt = function(t) {
            try {
                return be(this.getKey().encrypt(t))
            } catch(t) {
                return ! 1
            }
        },
        Ke.prototype.getKey = function(t) {
            if (!this.key) {
                if (this.key = new Ve, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        },
        Ke.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey()
        },
        Ke.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64()
        },
        Ke.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey()
        },
        Ke.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64()
        },
        Ke.version = "2.3.1",
        t.exports = Ke
    },
    uUzA: function(t, e, n) {
        var i, o; !
        function(e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return n(t)
            }: n(e)
        } ("undefined" != typeof window ? window: this,
        function(n, r) {
            function s(t) {
                var e = !!t && "length" in t && t.length,
                n = vt.type(t);
                return "function" !== n && !vt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            function a(t, e, n) {
                if (vt.isFunction(e)) return vt.grep(t,
                function(t, i) {
                    return !! e.call(t, i, t) !== n
                });
                if (e.nodeType) return vt.grep(t,
                function(t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (_t.test(e)) return vt.filter(e, t, n);
                    e = vt.filter(e, t)
                }
                return vt.grep(t,
                function(t) {
                    return vt.inArray(t, e) > -1 !== n
                })
            }
            function c(t, e) {
                do t = t[e];
                while (t && 1 !== t.nodeType);
                return t
            }
            function l(t) {
                var e = {};
                return vt.each(t.match(It) || [],
                function(t, n) {
                    e[n] = !0
                }),
                e
            }
            function u() {
                at.addEventListener ? (at.removeEventListener("DOMContentLoaded", h), n.removeEventListener("load", h)) : (at.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
            }
            function h() { (at.addEventListener || "load" === n.event.type || "complete" === at.readyState) && (u(), vt.ready())
            }
            function d(t, e, n) {
                if (void 0 === n && 1 === t.nodeType) {
                    var i = "data-" + e.replace(Jt, "-$1").toLowerCase();
                    if (n = t.getAttribute(i), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Ot.test(n) ? vt.parseJSON(n) : n)
                        } catch(t) {}
                        vt.data(t, e, n)
                    } else n = void 0
                }
                return n
            }
            function f(t) {
                var e;
                for (e in t) if (("data" !== e || !vt.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
                return ! 0
            }
            function p(t, e, n, i) {
                if (Mt(t)) {
                    var o, r, s = vt.expando,
                    a = t.nodeType,
                    c = a ? vt.cache: t,
                    l = a ? t[s] : t[s] && s;
                    if (l && c[l] && (i || c[l].data) || void 0 !== n || "string" != typeof e) return l || (l = a ? t[s] = st.pop() || vt.guid++:s),
                    c[l] || (c[l] = a ? {}: {
                        toJSON: vt.noop
                    }),
                    "object" != typeof e && "function" != typeof e || (i ? c[l] = vt.extend(c[l], e) : c[l].data = vt.extend(c[l].data, e)),
                    r = c[l],
                    i || (r.data || (r.data = {}), r = r.data),
                    void 0 !== n && (r[vt.camelCase(e)] = n),
                    "string" == typeof e ? (o = r[e], null == o && (o = r[vt.camelCase(e)])) : o = r,
                    o
                }
            }
            function g(t, e, n) {
                if (Mt(t)) {
                    var i, o, r = t.nodeType,
                    s = r ? vt.cache: t,
                    a = r ? t[vt.expando] : vt.expando;
                    if (s[a]) {
                        if (e && (i = n ? s[a] : s[a].data)) {
                            vt.isArray(e) ? e = e.concat(vt.map(e, vt.camelCase)) : e in i ? e = [e] : (e = vt.camelCase(e), e = e in i ? [e] : e.split(" ")),
                            o = e.length;
                            for (; o--;) delete i[e[o]];
                            if (n ? !f(i) : !vt.isEmptyObject(i)) return
                        } (n || (delete s[a].data, f(s[a]))) && (r ? vt.cleanData([t], !0) : gt.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                    }
                }
            }
            function m(t, e, n, i) {
                var o, r = 1,
                s = 20,
                a = i ?
                function() {
                    return i.cur()
                }: function() {
                    return vt.css(t, e, "")
                },
                c = a(),
                l = n && n[3] || (vt.cssNumber[e] ? "": "px"),
                u = (vt.cssNumber[e] || "px" !== l && +c) && $t.exec(vt.css(t, e));
                if (u && u[3] !== l) {
                    l = l || u[3],
                    n = n || [],
                    u = +c || 1;
                    do r = r || ".5",
                    u /= r,
                    vt.style(t, e, u + l);
                    while (r !== (r = a() / c) && 1 !== r && --s)
                }
                return n && (u = +u || +c || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = o)),
                o
            }
            function v(t) {
                var e = Qt.split("|"),
                n = t.createDocumentFragment();
                if (n.createElement) for (; e.length;) n.createElement(e.pop());
                return n
            }
            function y(t, e) {
                var n, i, o = 0,
                r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
                if (!r) for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) ! e || vt.nodeName(i, e) ? r.push(i) : vt.merge(r, y(i, e));
                return void 0 === e || e && vt.nodeName(t, e) ? vt.merge([t], r) : r
            }
            function w(t, e) {
                for (var n, i = 0; null != (n = t[i]); i++) vt._data(n, "globalEval", !e || vt._data(e[i], "globalEval"))
            }
            function b(t) {
                Ft.test(t.type) && (t.defaultChecked = t.checked)
            }
            function x(t, e, n, i, o) {
                for (var r, s, a, c, l, u, h, d = t.length,
                f = v(e), p = [], g = 0; g < d; g++) if (s = t[g], s || 0 === s) if ("object" === vt.type(s)) vt.merge(p, s.nodeType ? [s] : s);
                else if (Xt.test(s)) {
                    for (c = c || f.appendChild(e.createElement("div")), l = (Wt.exec(s) || ["", ""])[1].toLowerCase(), h = zt[l] || zt._default, c.innerHTML = h[1] + vt.htmlPrefilter(s) + h[2], r = h[0]; r--;) c = c.lastChild;
                    if (!gt.leadingWhitespace && Kt.test(s) && p.push(e.createTextNode(Kt.exec(s)[0])), !gt.tbody) for (s = "table" !== l || Gt.test(s) ? "<table>" !== h[1] || Gt.test(s) ? 0 : c: c.firstChild, r = s && s.childNodes.length; r--;) vt.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                    for (vt.merge(p, c.childNodes), c.textContent = ""; c.firstChild;) c.removeChild(c.firstChild);
                    c = f.lastChild
                } else p.push(e.createTextNode(s));
                for (c && f.removeChild(c), gt.appendChecked || vt.grep(y(p, "input"), b), g = 0; s = p[g++];) if (i && vt.inArray(s, i) > -1) o && o.push(s);
                else if (a = vt.contains(s.ownerDocument, s), c = y(f.appendChild(s), "script"), a && w(c), n) for (r = 0; s = c[r++];) Vt.test(s.type || "") && n.push(s);
                return c = null,
                f
            }
            function T() {
                return ! 0
            }
            function S() {
                return ! 1
            }
            function E() {
                try {
                    return at.activeElement
                } catch(t) {}
            }
            function k(t, e, n, i, o, r) {
                var s, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (a in e) k(t, a, n, i, e[a], r);
                    return t
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = S;
                else if (!o) return t;
                return 1 === r && (s = o, o = function(t) {
                    return vt().off(t),
                    s.apply(this, arguments)
                },
                o.guid = s.guid || (s.guid = vt.guid++)),
                t.each(function() {
                    vt.event.add(this, e, o, i, n)
                })
            }
            function C(t, e) {
                return vt.nodeName(t, "table") && vt.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }
            function _(t) {
                return t.type = (null !== vt.find.attr(t, "type")) + "/" + t.type,
                t
            }
            function L(t) {
                var e = ce.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"),
                t
            }
            function D(t, e) {
                if (1 === e.nodeType && vt.hasData(t)) {
                    var n, i, o, r = vt._data(t),
                    s = vt._data(e, r),
                    a = r.events;
                    if (a) {
                        delete s.handle,
                        s.events = {};
                        for (n in a) for (i = 0, o = a[n].length; i < o; i++) vt.event.add(e, n, a[n][i])
                    }
                    s.data && (s.data = vt.extend({},
                    s.data))
                }
            }
            function R(t, e) {
                var n, i, o;
                if (1 === e.nodeType) {
                    if (n = e.nodeName.toLowerCase(), !gt.noCloneEvent && e[vt.expando]) {
                        o = vt._data(e);
                        for (i in o.events) vt.removeEvent(e, i, o.handle);
                        e.removeAttribute(vt.expando)
                    }
                    "script" === n && e.text !== t.text ? (_(e).text = t.text, L(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), gt.html5Clone && t.innerHTML && !vt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ft.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }
            }
            function A(t, e, n, i) {
                e = lt.apply([], e);
                var o, r, s, a, c, l, u = 0,
                h = t.length,
                d = h - 1,
                f = e[0],
                p = vt.isFunction(f);
                if (p || h > 1 && "string" == typeof f && !gt.checkClone && ae.test(f)) return t.each(function(o) {
                    var r = t.eq(o);
                    p && (e[0] = f.call(this, o, r.html())),
                    A(r, e, n, i)
                });
                if (h && (l = x(e, t[0].ownerDocument, !1, t, i), o = l.firstChild, 1 === l.childNodes.length && (l = o), o || i)) {
                    for (a = vt.map(y(l, "script"), _), s = a.length; u < h; u++) r = l,
                    u !== d && (r = vt.clone(r, !0, !0), s && vt.merge(a, y(r, "script"))),
                    n.call(t[u], r, u);
                    if (s) for (c = a[a.length - 1].ownerDocument, vt.map(a, L), u = 0; u < s; u++) r = a[u],
                    Vt.test(r.type || "") && !vt._data(r, "globalEval") && vt.contains(c, r) && (r.src ? vt._evalUrl && vt._evalUrl(r.src) : vt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(le, "")));
                    l = o = null
                }
                return t
            }
            function N(t, e, n) {
                for (var i, o = e ? vt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || vt.cleanData(y(i)),
                i.parentNode && (n && vt.contains(i.ownerDocument, i) && w(y(i, "script")), i.parentNode.removeChild(i));
                return t
            }
            function I(t, e) {
                var n = vt(e.createElement(t)).appendTo(e.body),
                i = vt.css(n[0], "display");
                return n.detach(),
                i
            }
            function B(t) {
                var e = at,
                n = fe[t];
                return n || (n = I(t, e), "none" !== n && n || (de = (de || vt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (de[0].contentWindow || de[0].contentDocument).document, e.write(), e.close(), n = I(t, e), de.detach()), fe[t] = n),
                n
            }
            function q(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get: (this.get = e).apply(this, arguments)
                    }
                }
            }
            function M(t) {
                if (t in Le) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = _e.length; n--;) if (t = _e[n] + e, t in Le) return t
            }
            function O(t, e) {
                for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++) i = t[s],
                i.style && (r[s] = vt._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ut(i) && (r[s] = vt._data(i, "olddisplay", B(i.nodeName)))) : (o = Ut(i), (n && "none" !== n || !o) && vt._data(i, "olddisplay", o ? n: vt.css(i, "display"))));
                for (s = 0; s < a; s++) i = t[s],
                i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "": "none"));
                return t
            }
            function J(t, e, n) {
                var i = Ee.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }
            function P(t, e, n, i, o) {
                for (var r = n === (i ? "border": "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2)"margin" === n && (s += vt.css(t, n + jt[r], !0, o)),
                i ? ("content" === n && (s -= vt.css(t, "padding" + jt[r], !0, o)), "margin" !== n && (s -= vt.css(t, "border" + jt[r] + "Width", !0, o))) : (s += vt.css(t, "padding" + jt[r], !0, o), "padding" !== n && (s += vt.css(t, "border" + jt[r] + "Width", !0, o)));
                return s
            }
            function $(t, e, i) {
                var o = !0,
                r = "width" === e ? t.offsetWidth: t.offsetHeight,
                s = ye(t),
                a = gt.boxSizing && "border-box" === vt.css(t, "boxSizing", !1, s);
                if (at.msFullscreenElement && n.top !== n && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[e])), r <= 0 || null == r) {
                    if (r = we(t, e, s), (r < 0 || null == r) && (r = t.style[e]), ge.test(r)) return r;
                    o = a && (gt.boxSizingReliable() || r === t.style[e]),
                    r = parseFloat(r) || 0
                }
                return r + P(t, e, i || (a ? "border": "content"), o, s) + "px"
            }
            function j(t, e, n, i, o) {
                return new j.prototype.init(t, e, n, i, o)
            }
            function U() {
                return n.setTimeout(function() {
                    De = void 0
                }),
                De = vt.now()
            }
            function H(t, e) {
                var n, i = {
                    height: t
                },
                o = 0;
                for (e = e ? 1 : 0; o < 4; o += 2 - e) n = jt[o],
                i["margin" + n] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t),
                i
            }
            function F(t, e, n) {
                for (var i, o = (K.tweeners[e] || []).concat(K.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, e, t)) return i
            }
            function W(t, e, n) {
                var i, o, r, s, a, c, l, u, h = this,
                d = {},
                f = t.style,
                p = t.nodeType && Ut(t),
                g = vt._data(t, "fxshow");
                n.queue || (a = vt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || c()
                }), a.unqueued++, h.always(function() {
                    h.always(function() {
                        a.unqueued--,
                        vt.queue(t, "fx").length || a.empty.fire()
                    })
                })),
                1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = vt.css(t, "display"), u = "none" === l ? vt._data(t, "olddisplay") || B(t.nodeName) : l, "inline" === u && "none" === vt.css(t, "float") && (gt.inlineBlockNeedsLayout && "inline" !== B(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden", gt.shrinkWrapBlocks() || h.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                }));
                for (i in e) if (o = e[i], Ae.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (p ? "hide": "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        p = !0
                    }
                    d[i] = g && g[i] || vt.style(t, i)
                } else l = void 0;
                if (vt.isEmptyObject(d))"inline" === ("none" === l ? B(t.nodeName) : l) && (f.display = l);
                else {
                    g ? "hidden" in g && (p = g.hidden) : g = vt._data(t, "fxshow", {}),
                    r && (g.hidden = !p),
                    p ? vt(t).show() : h.done(function() {
                        vt(t).hide()
                    }),
                    h.done(function() {
                        var e;
                        vt._removeData(t, "fxshow");
                        for (e in d) vt.style(t, e, d[e])
                    });
                    for (i in d) s = F(p ? g[i] : 0, i, h),
                    i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function V(t, e) {
                var n, i, o, r, s;
                for (n in t) if (i = vt.camelCase(n), o = e[i], r = t[n], vt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = vt.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r),
                    delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
            }
            function K(t, e, n) {
                var i, o, r = 0,
                s = K.prefilters.length,
                a = vt.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return ! 1;
                    for (var e = De || U(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, r = 1 - i, s = 0, c = l.tweens.length; s < c; s++) l.tweens[s].run(r);
                    return a.notifyWith(t, [l, r, n]),
                    r < 1 && c ? n: (a.resolveWith(t, [l]), !1)
                },
                l = a.promise({
                    elem: t,
                    props: vt.extend({},
                    e),
                    opts: vt.extend(!0, {
                        specialEasing: {},
                        easing: vt.easing._default
                    },
                    n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: De || U(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = vt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(i),
                        i
                    },
                    stop: function(e) {
                        var n = 0,
                        i = e ? l.tweens.length: 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) l.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]),
                        this
                    }
                }),
                u = l.props;
                for (V(u, l.opts.specialEasing); r < s; r++) if (i = K.prefilters[r].call(l, t, u, l.opts)) return vt.isFunction(i.stop) && (vt._queueHooks(l.elem, l.opts.queue).stop = vt.proxy(i.stop, i)),
                i;
                return vt.map(u, F, l),
                vt.isFunction(l.opts.start) && l.opts.start.call(t, l),
                vt.fx.timer(vt.extend(c, {
                    elem: t,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            function Q(t) {
                return vt.attr(t, "class") || ""
            }
            function z(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, o = 0,
                    r = e.toLowerCase().match(It) || [];
                    if (vt.isFunction(n)) for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }
            function X(t, e, n, i) {
                function o(a) {
                    var c;
                    return r[a] = !0,
                    vt.each(t[a] || [],
                    function(t, a) {
                        var l = a(e, n, i);
                        return "string" != typeof l || s || r[l] ? s ? !(c = l) : void 0 : (e.dataTypes.unshift(l), o(l), !1)
                    }),
                    c
                }
                var r = {},
                s = t === nn;
                return o(e.dataTypes[0]) || !r["*"] && o("*")
            }
            function G(t, e) {
                var n, i, o = vt.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((o[i] ? t: n || (n = {}))[i] = e[i]);
                return n && vt.extend(!0, t, n),
                t
            }
            function Y(t, e, n) {
                for (var i, o, r, s, a = t.contents,
                c = t.dataTypes;
                "*" === c[0];) c.shift(),
                void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                if (o) for (s in a) if (a[s] && a[s].test(o)) {
                    c.unshift(s);
                    break
                }
                if (c[0] in n) r = c[0];
                else {
                    for (s in n) {
                        if (!c[0] || t.converters[s + " " + c[0]]) {
                            r = s;
                            break
                        }
                        i || (i = s)
                    }
                    r = r || i
                }
                if (r) return r !== c[0] && c.unshift(r),
                n[r]
            }
            function Z(t, e, n, i) {
                var o, r, s, a, c, l = {},
                u = t.dataTypes.slice();
                if (u[1]) for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
                for (r = u.shift(); r;) if (t.responseFields[r] && (n[t.responseFields[r]] = e), !c && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = r, r = u.shift()) if ("*" === r) r = c;
                else if ("*" !== c && c !== r) {
                    if (s = l[c + " " + r] || l["* " + r], !s) for (o in l) if (a = o.split(" "), a[1] === r && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[o] : l[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
                    if (s !== !0) if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch(t) {
                        return {
                            state: "parsererror",
                            error: s ? t: "No conversion from " + c + " to " + r
                        }
                    }
                }
                return {
                    state: "success",
                    data: e
                }
            }
            function tt(t) {
                return t.style && t.style.display || vt.css(t, "display")
            }
            function et(t) {
                for (; t && 1 === t.nodeType;) {
                    if ("none" === tt(t) || "hidden" === t.type) return ! 0;
                    t = t.parentNode
                }
                return ! 1
            }
            function nt(t, e, n, i) {
                var o;
                if (vt.isArray(e)) vt.each(e,
                function(e, o) {
                    n || cn.test(t) ? i(t, o) : nt(t + "[" + ("object" == typeof o && null != o ? e: "") + "]", o, n, i)
                });
                else if (n || "object" !== vt.type(e)) i(t, e);
                else for (o in e) nt(t + "[" + o + "]", e[o], n, i)
            }
            function it() {
                try {
                    return new n.XMLHttpRequest
                } catch(t) {}
            }
            function ot() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch(t) {}
            }
            function rt(t) {
                return vt.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
            }
            var st = [],
            at = n.document,
            ct = st.slice,
            lt = st.concat,
            ut = st.push,
            ht = st.indexOf,
            dt = {},
            ft = dt.toString,
            pt = dt.hasOwnProperty,
            gt = {},
            mt = "1.12.3",
            vt = function(t, e) {
                return new vt.fn.init(t, e)
            },
            yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            wt = /^-ms-/,
            bt = /-([\da-z])/gi,
            xt = function(t, e) {
                return e.toUpperCase()
            };
            vt.fn = vt.prototype = {
                jquery: mt,
                constructor: vt,
                selector: "",
                length: 0,
                toArray: function() {
                    return ct.call(this)
                },
                get: function(t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : ct.call(this)
                },
                pushStack: function(t) {
                    var e = vt.merge(this.constructor(), t);
                    return e.prevObject = this,
                    e.context = this.context,
                    e
                },
                each: function(t) {
                    return vt.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(vt.map(this,
                    function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(ct.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(t) {
                    var e = this.length,
                    n = +t + (t < 0 ? e: 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: ut,
                sort: st.sort,
                splice: st.splice
            },
            vt.extend = vt.fn.extend = function() {
                var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                c = arguments.length,
                l = !1;
                for ("boolean" == typeof s && (l = s, s = arguments[a] || {},
                a++), "object" == typeof s || vt.isFunction(s) || (s = {}), a === c && (s = this, a--); a < c; a++) if (null != (o = arguments[a])) for (i in o) t = s[i],
                n = o[i],
                s !== n && (l && n && (vt.isPlainObject(n) || (e = vt.isArray(n))) ? (e ? (e = !1, r = t && vt.isArray(t) ? t: []) : r = t && vt.isPlainObject(t) ? t: {},
                s[i] = vt.extend(l, r, n)) : void 0 !== n && (s[i] = n));
                return s
            },
            vt.extend({
                expando: "jQuery" + (mt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === vt.type(t)
                },
                isArray: Array.isArray ||
                function(t) {
                    return "array" === vt.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    var e = t && t.toString();
                    return ! vt.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return ! 1;
                    return ! 0
                },
                isPlainObject: function(t) {
                    var e;
                    if (!t || "object" !== vt.type(t) || t.nodeType || vt.isWindow(t)) return ! 1;
                    try {
                        if (t.constructor && !pt.call(t, "constructor") && !pt.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
                    } catch(t) {
                        return ! 1
                    }
                    if (!gt.ownFirst) for (e in t) return pt.call(t, e);
                    for (e in t);
                    return void 0 === e || pt.call(t, e)
                },
                type: function(t) {
                    return null == t ? t + "": "object" == typeof t || "function" == typeof t ? dt[ft.call(t)] || "object": typeof t
                },
                globalEval: function(t) {
                    t && vt.trim(t) && (n.execScript ||
                    function(t) {
                        n.eval.call(n, t)
                    })(t)
                },
                camelCase: function(t) {
                    return t.replace(wt, "ms-").replace(bt, xt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e) {
                    var n, i = 0;
                    if (s(t)) for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
                    else for (i in t) if (e.call(t[i], i, t[i]) === !1) break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "": (t + "").replace(yt, "")
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (s(Object(t)) ? vt.merge(n, "string" == typeof t ? [t] : t) : ut.call(n, t)),
                    n
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (ht) return ht.call(e, t, n);
                        for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n: 0; n < i; n++) if (n in e && e[n] === t) return n
                    }
                    return - 1
                },
                merge: function(t, e) {
                    for (var n = +e.length,
                    i = 0,
                    o = t.length; i < n;) t[o++] = e[i++];
                    if (n !== n) for (; void 0 !== e[i];) t[o++] = e[i++];
                    return t.length = o,
                    t
                },
                grep: function(t, e, n) {
                    for (var i, o = [], r = 0, s = t.length, a = !n; r < s; r++) i = !e(t[r], r),
                    i !== a && o.push(t[r]);
                    return o
                },
                map: function(t, e, n) {
                    var i, o, r = 0,
                    a = [];
                    if (s(t)) for (i = t.length; r < i; r++) o = e(t[r], r, n),
                    null != o && a.push(o);
                    else for (r in t) o = e(t[r], r, n),
                    null != o && a.push(o);
                    return lt.apply([], a)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, i, o;
                    if ("string" == typeof e && (o = t[e], e = t, t = o), vt.isFunction(t)) return n = ct.call(arguments, 2),
                    i = function() {
                        return t.apply(e || this, n.concat(ct.call(arguments)))
                    },
                    i.guid = t.guid = t.guid || vt.guid++,
                    i
                },
                now: function() {
                    return + new Date
                },
                support: gt
            }),
            "function" == typeof Symbol && (vt.fn[Symbol.iterator] = st[Symbol.iterator]),
            vt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
            function(t, e) {
                dt["[object " + e + "]"] = e.toLowerCase()
            });
            var Tt = function(t) {
                function e(t, e, n, i) {
                    var o, r, s, a, c, l, h, f, p = e && e.ownerDocument,
                    g = e ? e.nodeType: 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!i && ((e ? e.ownerDocument || e: $) !== N && A(e), e = e || N, B)) {
                        if (11 !== g && (l = vt.exec(t))) if (o = l[1]) {
                            if (9 === g) {
                                if (! (s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s),
                                n
                            } else if (p && (s = p.getElementById(o)) && J(e, s) && s.id === o) return n.push(s),
                            n
                        } else {
                            if (l[2]) return Y.apply(n, e.getElementsByTagName(t)),
                            n;
                            if ((o = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(o)),
                            n
                        }
                        if (x.qsa && !W[t + " "] && (!q || !q.test(t))) {
                            if (1 !== g) p = e,
                            f = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = P), h = k(t), r = h.length, c = dt.test(a) ? "#" + a: "[id='" + a + "']"; r--;) h[r] = c + " " + d(h[r]);
                                f = h.join(","),
                                p = yt.test(t) && u(e.parentNode) || e
                            }
                            if (f) try {
                                return Y.apply(n, p.querySelectorAll(f)),
                                n
                            } catch(t) {} finally {
                                a === P && e.removeAttribute("id")
                            }
                        }
                    }
                    return _(t.replace(at, "$1"), e, n, i)
                }
                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > T.cacheLength && delete t[e.shift()],
                        t[n + " "] = i
                    }
                    var e = [];
                    return t
                }
                function i(t) {
                    return t[P] = !0,
                    t
                }
                function o(t) {
                    var e = N.createElement("div");
                    try {
                        return !! t(e)
                    } catch(t) {
                        return ! 1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null
                    }
                }
                function r(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
                }
                function s(t, e) {
                    var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
                    return t ? 1 : -1
                }
                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }
                function c(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }
                function l(t) {
                    return i(function(e) {
                        return e = +e,
                        i(function(n, i) {
                            for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }
                function u(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }
                function h() {}
                function d(t) {
                    for (var e = 0,
                    n = t.length,
                    i = ""; e < n; e++) i += t[e].value;
                    return i
                }
                function f(t, e, n) {
                    var i = e.dir,
                    o = n && "parentNode" === i,
                    r = U++;
                    return e.first ?
                    function(e, n, r) {
                        for (; e = e[i];) if (1 === e.nodeType || o) return t(e, n, r)
                    }: function(e, n, s) {
                        var a, c, l, u = [j, r];
                        if (s) {
                            for (; e = e[i];) if ((1 === e.nodeType || o) && t(e, n, s)) return ! 0
                        } else for (; e = e[i];) if (1 === e.nodeType || o) {
                            if (l = e[P] || (e[P] = {}), c = l[e.uniqueID] || (l[e.uniqueID] = {}), (a = c[i]) && a[0] === j && a[1] === r) return u[2] = a[2];
                            if (c[i] = u, u[2] = t(e, n, s)) return ! 0
                        }
                    }
                }
                function p(t) {
                    return t.length > 1 ?
                    function(e, n, i) {
                        for (var o = t.length; o--;) if (!t[o](e, n, i)) return ! 1;
                        return ! 0
                    }: t[0]
                }
                function g(t, n, i) {
                    for (var o = 0,
                    r = n.length; o < r; o++) e(t, n[o], i);
                    return i
                }
                function m(t, e, n, i, o) {
                    for (var r, s = [], a = 0, c = t.length, l = null != e; a < c; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), l && e.push(a)));
                    return s
                }
                function v(t, e, n, o, r, s) {
                    return o && !o[P] && (o = v(o)),
                    r && !r[P] && (r = v(r, s)),
                    i(function(i, s, a, c) {
                        var l, u, h, d = [],
                        f = [],
                        p = s.length,
                        v = i || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v: m(v, d, t, a, c),
                        w = n ? r || (i ? t: p || o) ? [] : s: y;
                        if (n && n(y, w, a, c), o) for (l = m(w, f), o(l, [], a, c), u = l.length; u--;)(h = l[u]) && (w[f[u]] = !(y[f[u]] = h));
                        if (i) {
                            if (r || t) {
                                if (r) {
                                    for (l = [], u = w.length; u--;)(h = w[u]) && l.push(y[u] = h);
                                    r(null, w = [], l, c)
                                }
                                for (u = w.length; u--;)(h = w[u]) && (l = r ? tt(i, h) : d[u]) > -1 && (i[l] = !(s[l] = h))
                            }
                        } else w = m(w === s ? w.splice(p, w.length) : w),
                        r ? r(null, s, w, c) : Y.apply(s, w)
                    })
                }
                function y(t) {
                    for (var e, n, i, o = t.length,
                    r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, c = f(function(t) {
                        return t === e
                    },
                    s, !0), l = f(function(t) {
                        return tt(e, t) > -1
                    },
                    s, !0), u = [function(t, n, i) {
                        var o = !r && (i || n !== L) || ((e = n).nodeType ? c(t, n, i) : l(t, n, i));
                        return e = null,
                        o
                    }]; a < o; a++) if (n = T.relative[t[a].type]) u = [f(p(u), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[P]) {
                            for (i = ++a; i < o && !T.relative[t[i].type]; i++);
                            return v(a > 1 && p(u), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*": ""
                            })).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < o && y(t = t.slice(i)), i < o && d(t))
                        }
                        u.push(n)
                    }
                    return p(u)
                }
                function w(t, n) {
                    var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, c, l) {
                        var u, h, d, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        y = L,
                        w = i || r && T.find.TAG("*", l),
                        b = j += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                        for (l && (L = s === N || s || l); p !== x && null != (u = w[p]); p++) {
                            if (r && u) {
                                for (h = 0, s || u.ownerDocument === N || (A(u), a = !B); d = t[h++];) if (d(u, s || N, a)) {
                                    c.push(u);
                                    break
                                }
                                l && (j = b)
                            }
                            o && ((u = !d && u) && f--, i && g.push(u))
                        }
                        if (f += p, o && p !== f) {
                            for (h = 0; d = n[h++];) d(g, v, s, a);
                            if (i) {
                                if (f > 0) for (; p--;) g[p] || v[p] || (v[p] = X.call(c));
                                v = m(v)
                            }
                            Y.apply(c, v),
                            l && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(c)
                        }
                        return l && (j = b, L = y),
                        g
                    };
                    return o ? i(s) : s
                }
                var b, x, T, S, E, k, C, _, L, D, R, A, N, I, B, q, M, O, J, P = "sizzle" + 1 * new Date,
                $ = t.document,
                j = 0,
                U = 0,
                H = n(),
                F = n(),
                W = n(),
                V = function(t, e) {
                    return t === e && (R = !0),
                    0
                },
                K = 1 << 31,
                Q = {}.hasOwnProperty,
                z = [],
                X = z.pop,
                G = z.push,
                Y = z.push,
                Z = z.slice,
                tt = function(t, e) {
                    for (var n = 0,
                    i = t.length; n < i; n++) if (t[n] === e) return n;
                    return - 1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ht = new RegExp(rt),
                dt = new RegExp("^" + it + "$"),
                ft = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                wt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                xt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e: i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Tt = function() {
                    A()
                };
                try {
                    Y.apply(z = Z.call($.childNodes), $.childNodes),
                    z[$.childNodes.length].nodeType
                } catch(t) {
                    Y = {
                        apply: z.length ?
                        function(t, e) {
                            G.apply(t, Z.call(e))
                        }: function(t, e) {
                            for (var n = t.length,
                            i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {},
                E = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !! e && "HTML" !== e.nodeName
                },
                A = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t: $;
                    return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, I = N.documentElement, B = !E(N), (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), x.attributes = o(function(t) {
                        return t.className = "i",
                        !t.getAttribute("className")
                    }), x.getElementsByTagName = o(function(t) {
                        return t.appendChild(N.createComment("")),
                        !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = mt.test(N.getElementsByClassName), x.getById = o(function(t) {
                        return I.appendChild(t).id = P,
                        !N.getElementsByName || !N.getElementsByName(P).length
                    }), x.getById ? (T.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && B) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    },
                    T.filter.ID = function(t) {
                        var e = t.replace(bt, xt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(t) {
                        var e = t.replace(bt, xt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), T.find.TAG = x.getElementsByTagName ?
                    function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    }: function(t, e) {
                        var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    },
                    T.find.CLASS = x.getElementsByClassName &&
                    function(t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && B) return e.getElementsByClassName(t)
                    },
                    M = [], q = [], (x.qsa = mt.test(N.querySelectorAll)) && (o(function(t) {
                        I.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        t.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + et + ")"),
                        t.querySelectorAll("[id~=" + P + "-]").length || q.push("~="),
                        t.querySelectorAll(":checked").length || q.push(":checked"),
                        t.querySelectorAll("a#" + P + "+*").length || q.push(".#.+[+~]")
                    }), o(function(t) {
                        var e = N.createElement("input");
                        e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="),
                        t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        q.push(",.*:")
                    })), (x.matchesSelector = mt.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(t) {
                        x.disconnectedMatch = O.call(t, "div"),
                        O.call(t, "[s!='']:x"),
                        M.push("!=", rt)
                    }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), e = mt.test(I.compareDocumentPosition), J = e || mt.test(I.contains) ?
                    function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement: t,
                        i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    }: function(t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                        return ! 1
                    },
                    V = e ?
                    function(t, e) {
                        if (t === e) return R = !0,
                        0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n: (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === N || t.ownerDocument === $ && J($, t) ? -1 : e === N || e.ownerDocument === $ && J($, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & n ? -1 : 1)
                    }: function(t, e) {
                        if (t === e) return R = !0,
                        0;
                        var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        c = [e];
                        if (!o || !r) return t === N ? -1 : e === N ? 1 : o ? -1 : r ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                        if (o === r) return s(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (; a[i] === c[i];) i++;
                        return i ? s(a[i], c[i]) : a[i] === $ ? -1 : c[i] === $ ? 1 : 0
                    },
                    N) : N
                },
                e.matches = function(t, n) {
                    return e(t, null, null, n)
                },
                e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== N && A(t), n = n.replace(ut, "='$1']"), x.matchesSelector && B && !W[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n))) try {
                        var i = O.call(t, n);
                        if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch(t) {}
                    return e(n, N, null, [t]).length > 0
                },
                e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== N && A(t),
                    J(t, e)
                },
                e.attr = function(t, e) { (t.ownerDocument || t) !== N && A(t);
                    var n = T.attrHandle[e.toLowerCase()],
                    i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !B) : void 0;
                    return void 0 !== i ? i: x.attributes || !B ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
                },
                e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                },
                e.uniqueSort = function(t) {
                    var e, n = [],
                    i = 0,
                    o = 0;
                    if (R = !x.detectDuplicates, D = !x.sortStable && t.slice(0), t.sort(V), R) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return D = null,
                    t
                },
                S = e.getText = function(t) {
                    var e, n = "",
                    i = 0,
                    o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else for (; e = t[i++];) n += S(e);
                    return n
                },
                T = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(bt, xt),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                            t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && ht.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(bt, xt).toLowerCase();
                            return "*" === t ?
                            function() {
                                return ! 0
                            }: function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = H[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && H(t,
                            function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(o) {
                                var r = e.attr(o, t);
                                return null == r ? "!=" === n: !n || (r += "", "=" === n ? r === i: "!=" === n ? r !== i: "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice( - i.length) === i: "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice( - 4),
                            a = "of-type" === e;
                            return 1 === i && 0 === o ?
                            function(t) {
                                return !! t.parentNode
                            }: function(e, n, c) {
                                var l, u, h, d, f, p, g = r !== s ? "nextSibling": "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !c && !a,
                                w = !1;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (d = e; d = d[g];) if (a ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return ! 0
                                    }
                                    if (p = [s ? m.firstChild: m.lastChild], s && y) {
                                        for (d = m, h = d[P] || (d[P] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), l = u[t] || [], f = l[0] === j && l[1], w = f && l[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (w = f = 0) || p.pop();) if (1 === d.nodeType && ++w && d === e) {
                                            u[t] = [j, f, w];
                                            break
                                        }
                                    } else if (y && (d = e, h = d[P] || (d[P] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), l = u[t] || [], f = l[0] === j && l[1], w = f), w === !1) for (; (d = ++f && d && d[g] || (w = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++w || (y && (h = d[P] || (d[P] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), u[t] = [j, w]), d !== e)););
                                    return w -= o,
                                    w === i || w % i === 0 && w / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]),
                                t[i] = !(e[i] = o[s])
                            }) : function(t) {
                                return r(t, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                            n = [],
                            o = C(t.replace(at, "$1"));
                            return o[P] ? i(function(t, e, n, i) {
                                for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, i, r) {
                                return e[0] = t,
                                o(e, null, r, n),
                                e[0] = null,
                                !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                            }
                        }),
                        lang: i(function(t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t),
                            t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                if (n = B ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(),
                                n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return ! 1
                            }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === I
                        },
                        focus: function(t) {
                            return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex,
                            t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                            return ! 0
                        },
                        parent: function(t) {
                            return ! T.pseudos.empty(t)
                        },
                        header: function(t) {
                            return gt.test(t.nodeName)
                        },
                        input: function(t) {
                            return pt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(t, e) {
                            return [e - 1]
                        }),
                        eq: l(function(t, e, n) {
                            return [n < 0 ? n + e: n]
                        }),
                        even: l(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: l(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: l(function(t, e, n) {
                            for (var i = n < 0 ? n + e: n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: l(function(t, e, n) {
                            for (var i = n < 0 ? n + e: n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                },
                T.pseudos.nth = T.pseudos.eq;
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[b] = a(b);
                for (b in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[b] = c(b);
                return h.prototype = T.filters = T.pseudos,
                T.setFilters = new h,
                k = e.tokenize = function(t, n) {
                    var i, o, r, s, a, c, l, u = F[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, c = [], l = T.preFilter; a;) {
                        i && !(o = ct.exec(a)) || (o && (a = a.slice(o[0].length) || a), c.push(r = [])),
                        i = !1,
                        (o = lt.exec(a)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(at, " ")
                        }), a = a.slice(i.length));
                        for (s in T.filter) ! (o = ft[s].exec(a)) || l[s] && !(o = l[s](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length: a ? e.error(t) : F(t, c).slice(0)
                },
                C = e.compile = function(t, e) {
                    var n, i = [],
                    o = [],
                    r = W[t + " "];
                    if (!r) {
                        for (e || (e = k(t)), n = e.length; n--;) r = y(e[n]),
                        r[P] ? i.push(r) : o.push(r);
                        r = W(t, w(o, i)),
                        r.selector = t
                    }
                    return r
                },
                _ = e.select = function(t, e, n, i) {
                    var o, r, s, a, c, l = "function" == typeof t && t,
                    h = !i && k(t = l.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && B && T.relative[r[1].type]) {
                            if (e = (T.find.ID(s.matches[0].replace(bt, xt), e) || [])[0], !e) return n;
                            l && (e = e.parentNode),
                            t = t.slice(r.shift().value.length)
                        }
                        for (o = ft.needsContext.test(t) ? 0 : r.length; o--&&(s = r[o], !T.relative[a = s.type]);) if ((c = T.find[a]) && (i = c(s.matches[0].replace(bt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && d(r), !t) return Y.apply(n, i),
                            n;
                            break
                        }
                    }
                    return (l || C(t, h))(i, e, !B, n, !e || yt.test(t) && u(e.parentNode) || e),
                    n
                },
                x.sortStable = P.split("").sort(V).join("") === P,
                x.detectDuplicates = !!R,
                A(),
                x.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition(N.createElement("div"))
                }),
                o(function(t) {
                    return t.innerHTML = "<a href='#'></a>",
                    "#" === t.firstChild.getAttribute("href")
                }) || r("type|href|height|width",
                function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }),
                x.attributes && o(function(t) {
                    return t.innerHTML = "<input/>",
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                }) || r("value",
                function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }),
                o(function(t) {
                    return null == t.getAttribute("disabled")
                }) || r(et,
                function(t, e, n) {
                    var i;
                    if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
                }),
                e
            } (n);
            vt.find = Tt,
            vt.expr = Tt.selectors,
            vt.expr[":"] = vt.expr.pseudos,
            vt.uniqueSort = vt.unique = Tt.uniqueSort,
            vt.text = Tt.getText,
            vt.isXMLDoc = Tt.isXML,
            vt.contains = Tt.contains;
            var St = function(t, e, n) {
                for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                    if (o && vt(t).is(n)) break;
                    i.push(t)
                }
                return i
            },
            Et = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            kt = vt.expr.match.needsContext,
            Ct = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            _t = /^.[^:#\[\.,]*$/;
            vt.filter = function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"),
                1 === e.length && 1 === i.nodeType ? vt.find.matchesSelector(i, t) ? [i] : [] : vt.find.matches(t, vt.grep(e,
                function(t) {
                    return 1 === t.nodeType
                }))
            },
            vt.fn.extend({
                find: function(t) {
                    var e, n = [],
                    i = this,
                    o = i.length;
                    if ("string" != typeof t) return this.pushStack(vt(t).filter(function() {
                        for (e = 0; e < o; e++) if (vt.contains(i[e], this)) return ! 0
                    }));
                    for (e = 0; e < o; e++) vt.find(t, i[e], n);
                    return n = this.pushStack(o > 1 ? vt.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + t: t,
                    n
                },
                filter: function(t) {
                    return this.pushStack(a(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(a(this, t || [], !0))
                },
                is: function(t) {
                    return !! a(this, "string" == typeof t && kt.test(t) ? vt(t) : t || [], !1).length
                }
            });
            var Lt, Dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            Rt = vt.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || Lt, "string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Dt.exec(t), !i || !i[1] && e) return ! e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof vt ? e[0] : e, vt.merge(this, vt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: at, !0)), Ct.test(i[1]) && vt.isPlainObject(e)) for (i in e) vt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (o = at.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return Lt.find(t);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = at,
                    this.selector = t,
                    this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : vt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(vt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), vt.makeArray(t, this))
            };
            Rt.prototype = vt.fn,
            Lt = vt(at);
            var At = /^(?:parents|prev(?:Until|All))/,
            Nt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            vt.fn.extend({
                has: function(t) {
                    var e, n = vt(t, this),
                    i = n.length;
                    return this.filter(function() {
                        for (e = 0; e < i; e++) if (vt.contains(this, n[e])) return ! 0
                    })
                },
                closest: function(t, e) {
                    for (var n, i = 0,
                    o = this.length,
                    r = [], s = kt.test(t) || "string" != typeof t ? vt(t, e || this.context) : 0; i < o; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && vt.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
                    return this.pushStack(r.length > 1 ? vt.uniqueSort(r) : r)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? vt.inArray(this[0], vt(t)) : vt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                },
                add: function(t, e) {
                    return this.pushStack(vt.uniqueSort(vt.merge(this.get(), vt(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
                }
            }),
            vt.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e: null
                },
                parents: function(t) {
                    return St(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return St(t, "parentNode", n)
                },
                next: function(t) {
                    return c(t, "nextSibling")
                },
                prev: function(t) {
                    return c(t, "previousSibling")
                },
                nextAll: function(t) {
                    return St(t, "nextSibling")
                },
                prevAll: function(t) {
                    return St(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return St(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return St(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return Et((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return Et(t.firstChild)
                },
                contents: function(t) {
                    return vt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: vt.merge([], t.childNodes)
                }
            },
            function(t, e) {
                vt.fn[t] = function(n, i) {
                    var o = vt.map(this, e, n);
                    return "Until" !== t.slice( - 5) && (i = n),
                    i && "string" == typeof i && (o = vt.filter(i, o)),
                    this.length > 1 && (Nt[t] || (o = vt.uniqueSort(o)), At.test(t) && (o = o.reverse())),
                    this.pushStack(o)
                }
            });
            var It = /\S+/g;
            vt.Callbacks = function(t) {
                t = "string" == typeof t ? l(t) : vt.extend({},
                t);
                var e, n, i, o, r = [],
                s = [],
                a = -1,
                c = function() {
                    for (o = t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length;) r[a].apply(n[0], n[1]) === !1 && t.stopOnFalse && (a = r.length, n = !1);
                    t.memory || (n = !1),
                    e = !1,
                    o && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !e && (a = r.length - 1, s.push(n)),
                        function e(n) {
                            vt.each(n,
                            function(n, i) {
                                vt.isFunction(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== vt.type(i) && e(i)
                            })
                        } (arguments), n && !e && c()),
                        this
                    },
                    remove: function() {
                        return vt.each(arguments,
                        function(t, e) {
                            for (var n; (n = vt.inArray(e, r, n)) > -1;) r.splice(n, 1),
                            n <= a && a--
                        }),
                        this
                    },
                    has: function(t) {
                        return t ? vt.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []),
                        this
                    },
                    disable: function() {
                        return o = s = [],
                        r = n = "",
                        this
                    },
                    disabled: function() {
                        return ! r
                    },
                    lock: function() {
                        return o = !0,
                        n || u.disable(),
                        this
                    },
                    locked: function() {
                        return !! o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()),
                        this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !! i
                    }
                };
                return u
            },
            vt.extend({
                Deferred: function(t) {
                    var e = [["resolve", "done", vt.Callbacks("once memory"), "resolved"], ["reject", "fail", vt.Callbacks("once memory"), "rejected"], ["notify", "progress", vt.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var t = arguments;
                            return vt.Deferred(function(n) {
                                vt.each(e,
                                function(e, r) {
                                    var s = vt.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && vt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }),
                                t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? vt.extend(t, i) : i
                        }
                    },
                    o = {};
                    return i.pipe = i.then,
                    vt.each(e,
                    function(t, r) {
                        var s = r[2],
                        a = r[3];
                        i[r[1]] = s.add,
                        a && s.add(function() {
                            n = a
                        },
                        e[1 ^ t][2].disable, e[2][2].lock),
                        o[r[0]] = function() {
                            return o[r[0] + "With"](this === o ? i: this, arguments),
                            this
                        },
                        o[r[0] + "With"] = s.fireWith
                    }),
                    i.promise(o),
                    t && t.call(o, o),
                    o
                },
                when: function(t) {
                    var e, n, i, o = 0,
                    r = ct.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && vt.isFunction(t.promise) ? s: 0,
                    c = 1 === a ? t: vt.Deferred(),
                    l = function(t, n, i) {
                        return function(o) {
                            n[t] = this,
                            i[t] = arguments.length > 1 ? ct.call(arguments) : o,
                            i === e ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
                        }
                    };
                    if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && vt.isFunction(r[o].promise) ? r[o].promise().progress(l(o, n, e)).done(l(o, i, r)).fail(c.reject) : --a;
                    return a || c.resolveWith(i, r),
                    c.promise()
                }
            });
            var Bt;
            vt.fn.ready = function(t) {
                return vt.ready.promise().done(t),
                this
            },
            vt.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? vt.readyWait++:vt.ready(!0)
                },
                ready: function(t) { (t === !0 ? --vt.readyWait: vt.isReady) || (vt.isReady = !0, t !== !0 && --vt.readyWait > 0 || (Bt.resolveWith(at, [vt]), vt.fn.triggerHandler && (vt(at).triggerHandler("ready"), vt(at).off("ready"))))
                }
            }),
            vt.ready.promise = function(t) {
                if (!Bt) if (Bt = vt.Deferred(), "complete" === at.readyState || "loading" !== at.readyState && !at.documentElement.doScroll) n.setTimeout(vt.ready);
                else if (at.addEventListener) at.addEventListener("DOMContentLoaded", h),
                n.addEventListener("load", h);
                else {
                    at.attachEvent("onreadystatechange", h),
                    n.attachEvent("onload", h);
                    var e = !1;
                    try {
                        e = null == n.frameElement && at.documentElement
                    } catch(t) {}
                    e && e.doScroll && !
                    function t() {
                        if (!vt.isReady) {
                            try {
                                e.doScroll("left")
                            } catch(e) {
                                return n.setTimeout(t, 50)
                            }
                            u(),
                            vt.ready()
                        }
                    } ()
                }
                return Bt.promise(t)
            },
            vt.ready.promise();
            var qt;
            for (qt in vt(gt)) break;
            gt.ownFirst = "0" === qt,
            gt.inlineBlockNeedsLayout = !1,
            vt(function() {
                var t, e, n, i;
                n = at.getElementsByTagName("body")[0],
                n && n.style && (e = at.createElement("div"), i = at.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", gt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = at.createElement("div");
                gt.deleteExpando = !0;
                try {
                    delete t.test
                } catch(t) {
                    gt.deleteExpando = !1
                }
                t = null
            } ();
            var Mt = function(t) {
                var e = vt.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
            },
            Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Jt = /([A-Z])/g;
            vt.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(t) {
                    return t = t.nodeType ? vt.cache[t[vt.expando]] : t[vt.expando],
                    !!t && !f(t)
                },
                data: function(t, e, n) {
                    return p(t, e, n)
                },
                removeData: function(t, e) {
                    return g(t, e)
                },
                _data: function(t, e, n) {
                    return p(t, e, n, !0)
                },
                _removeData: function(t, e) {
                    return g(t, e, !0)
                }
            }),
            vt.fn.extend({
                data: function(t, e) {
                    var n, i, o, r = this[0],
                    s = r && r.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = vt.data(r), 1 === r.nodeType && !vt._data(r, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = vt.camelCase(i.slice(5)), d(r, i, o[i])));
                            vt._data(r, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() {
                        vt.data(this, t)
                    }) : arguments.length > 1 ? this.each(function() {
                        vt.data(this, t, e)
                    }) : r ? d(r, t, vt.data(r, t)) : void 0
                },
                removeData: function(t) {
                    return this.each(function() {
                        vt.removeData(this, t)
                    })
                }
            }),
            vt.extend({
                queue: function(t, e, n) {
                    var i;
                    if (t) return e = (e || "fx") + "queue",
                    i = vt._data(t, e),
                    n && (!i || vt.isArray(n) ? i = vt._data(t, e, vt.makeArray(n)) : i.push(n)),
                    i || []
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = vt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = vt._queueHooks(t, e),
                    s = function() {
                        vt.dequeue(t, e)
                    };
                    "inprogress" === o && (o = n.shift(), i--),
                    o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)),
                    !i && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return vt._data(t, n) || vt._data(t, n, {
                        empty: vt.Callbacks("once memory").add(function() {
                            vt._removeData(t, e + "queue"),
                            vt._removeData(t, n)
                        })
                    })
                }
            }),
            vt.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--),
                    arguments.length < n ? vt.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                        var n = vt.queue(this, t, e);
                        vt._queueHooks(this, t),
                        "fx" === t && "inprogress" !== n[0] && vt.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        vt.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, i = 1,
                    o = vt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {--i || o.resolveWith(r, [r])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = vt._data(r[s], t + "queueHooks"),
                    n && n.empty && (i++, n.empty.add(a));
                    return a(),
                    o.promise(e)
                }
            }),
            function() {
                var t;
                gt.shrinkWrapBlocks = function() {
                    if (null != t) return t;
                    t = !1;
                    var e, n, i;
                    return n = at.getElementsByTagName("body")[0],
                    n && n.style ? (e = at.createElement("div"), i = at.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(at.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
                }
            } ();
            var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $t = new RegExp("^(?:([+-])=|)(" + Pt + ")([a-z%]*)$", "i"),
            jt = ["Top", "Right", "Bottom", "Left"],
            Ut = function(t, e) {
                return t = e || t,
                "none" === vt.css(t, "display") || !vt.contains(t.ownerDocument, t)
            },
            Ht = function(t, e, n, i, o, r, s) {
                var a = 0,
                c = t.length,
                l = null == n;
                if ("object" === vt.type(n)) {
                    o = !0;
                    for (a in n) Ht(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, vt.isFunction(i) || (s = !0), l && (s ? (e.call(t, i), e = null) : (l = e, e = function(t, e, n) {
                    return l.call(vt(t), n)
                })), e)) for (; a < c; a++) e(t[a], n, s ? i: i.call(t[a], a, e(t[a], n)));
                return o ? t: l ? e.call(t) : c ? e(t[0], n) : r
            },
            Ft = /^(?:checkbox|radio)$/i,
            Wt = /<([\w:-]+)/,
            Vt = /^$|\/(?:java|ecma)script/i,
            Kt = /^\s+/,
            Qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; !
            function() {
                var t = at.createElement("div"),
                e = at.createDocumentFragment(),
                n = at.createElement("input");
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                gt.leadingWhitespace = 3 === t.firstChild.nodeType,
                gt.tbody = !t.getElementsByTagName("tbody").length,
                gt.htmlSerialize = !!t.getElementsByTagName("link").length,
                gt.html5Clone = "<:nav></:nav>" !== at.createElement("nav").cloneNode(!0).outerHTML,
                n.type = "checkbox",
                n.checked = !0,
                e.appendChild(n),
                gt.appendChecked = n.checked,
                t.innerHTML = "<textarea>x</textarea>",
                gt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                e.appendChild(t),
                n = at.createElement("input"),
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                t.appendChild(n),
                gt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                gt.noCloneEvent = !!t.addEventListener,
                t[vt.expando] = 1,
                gt.attributes = !t.getAttribute(vt.expando)
            } ();
            var zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: gt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            zt.optgroup = zt.option,
            zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead,
            zt.th = zt.td;
            var Xt = /<|&#?\w+;/,
            Gt = /<tbody/i; !
            function() {
                var t, e, i = at.createElement("div");
                for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) e = "on" + t,
                (gt[t] = e in n) || (i.setAttribute(e, "t"), gt[t] = i.attributes[e].expando === !1);
                i = null
            } ();
            var Yt = /^(?:input|select|textarea)$/i,
            Zt = /^key/,
            te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ee = /^(?:focusinfocus|focusoutblur)$/,
            ne = /^([^.]*)(?:\.(.+)|)/;
            vt.event = {
                global: {},
                add: function(t, e, n, i, o) {
                    var r, s, a, c, l, u, h, d, f, p, g, m = vt._data(t);
                    if (m) {
                        for (n.handler && (c = n, n = c.handler, o = c.selector), n.guid || (n.guid = vt.guid++), (s = m.events) || (s = m.events = {}), (u = m.handle) || (u = m.handle = function(t) {
                            return "undefined" == typeof vt || t && vt.event.triggered === t.type ? void 0 : vt.event.dispatch.apply(u.elem, arguments)
                        },
                        u.elem = t), e = (e || "").match(It) || [""], a = e.length; a--;) r = ne.exec(e[a]) || [],
                        f = g = r[1],
                        p = (r[2] || "").split(".").sort(),
                        f && (l = vt.event.special[f] || {},
                        f = (o ? l.delegateType: l.bindType) || f, l = vt.event.special[f] || {},
                        h = vt.extend({
                            type: f,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && vt.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        },
                        c), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, l.setup && l.setup.call(t, i, p, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), l.add && (l.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), vt.event.global[f] = !0);
                        t = null
                    }
                },
                remove: function(t, e, n, i, o) {
                    var r, s, a, c, l, u, h, d, f, p, g, m = vt.hasData(t) && vt._data(t);
                    if (m && (u = m.events)) {
                        for (e = (e || "").match(It) || [""], l = e.length; l--;) if (a = ne.exec(e[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (h = vt.event.special[f] || {},
                            f = (i ? h.delegateType: h.bindType) || f, d = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = d.length; r--;) s = d[r],
                            !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                            c && !d.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || vt.removeEvent(t, f, m.handle), delete u[f])
                        } else for (f in u) vt.event.remove(t, f + e[l], n, i, !0);
                        vt.isEmptyObject(u) && (delete m.handle, vt._removeData(t, "events"))
                    }
                },
                trigger: function(t, e, i, o) {
                    var r, s, a, c, l, u, h, d = [i || at],
                    f = pt.call(t, "type") ? t.type: t,
                    p = pt.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = u = i = i || at, 3 !== i.nodeType && 8 !== i.nodeType && !ee.test(f + vt.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[vt.expando] ? t: new vt.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : vt.makeArray(e, [t]), l = vt.event.special[f] || {},
                    o || !l.trigger || l.trigger.apply(i, e) !== !1)) {
                        if (!o && !l.noBubble && !vt.isWindow(i)) {
                            for (c = l.delegateType || f, ee.test(c + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a),
                            u = a;
                            u === (i.ownerDocument || at) && d.push(u.defaultView || u.parentWindow || n)
                        }
                        for (h = 0; (a = d[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? c: l.bindType || f,
                        r = (vt._data(a, "events") || {})[t.type] && vt._data(a, "handle"),
                        r && r.apply(a, e),
                        r = s && a[s],
                        r && r.apply && Mt(a) && (t.result = r.apply(a, e), t.result === !1 && t.preventDefault());
                        if (t.type = f, !o && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), e) === !1) && Mt(i) && s && i[f] && !vt.isWindow(i)) {
                            u = i[s],
                            u && (i[s] = null),
                            vt.event.triggered = f;
                            try {
                                i[f]()
                            } catch(t) {}
                            vt.event.triggered = void 0,
                            u && (i[s] = u)
                        }
                        return t.result
                    }
                },
                dispatch: function(t) {
                    t = vt.event.fix(t);
                    var e, n, i, o, r, s = [],
                    a = ct.call(arguments),
                    c = (vt._data(this, "events") || {})[t.type] || [],
                    l = vt.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                        for (s = vt.event.handlers.call(this, t, c), e = 0; (o = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, i = ((vt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, t),
                        t.result
                    }
                },
                handlers: function(t, e) {
                    var n, i, o, r, s = [],
                    a = e.delegateCount,
                    c = t.target;
                    if (a && c.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; n < a; n++) r = e[n],
                        o = r.selector + " ",
                        void 0 === i[o] && (i[o] = r.needsContext ? vt(o, this).index(c) > -1 : vt.find(o, this, null, [c]).length),
                        i[o] && i.push(r);
                        i.length && s.push({
                            elem: c,
                            handlers: i
                        })
                    }
                    return a < e.length && s.push({
                        elem: this,
                        handlers: e.slice(a)
                    }),
                    s
                },
                fix: function(t) {
                    if (t[vt.expando]) return t;
                    var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                    for (s || (this.fixHooks[o] = s = te.test(o) ? this.mouseHooks: Zt.test(o) ? this.keyHooks: {}), i = s.props ? this.props.concat(s.props) : this.props, t = new vt.Event(r), e = i.length; e--;) n = i[e],
                    t[n] = r[n];
                    return t.target || (t.target = r.srcElement || at),
                    3 === t.target.nodeType && (t.target = t.target.parentNode),
                    t.metaKey = !!t.metaKey,
                    s.filter ? s.filter(t, r) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                        t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n, i, o, r = e.button,
                        s = e.fromElement;
                        return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || at, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                        !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement: s),
                        t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== E() && this.focus) try {
                                return this.focus(),
                                !1
                            } catch(t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === E() && this.blur) return this.blur(),
                            !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (vt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                            !1
                        },
                        _default: function(t) {
                            return vt.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, n) {
                    var i = vt.extend(new vt.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    vt.event.trigger(i, null, e),
                    i.isDefaultPrevented() && n.preventDefault()
                }
            },
            vt.removeEvent = at.removeEventListener ?
            function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            }: function(t, e, n) {
                var i = "on" + e;
                t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
            },
            vt.Event = function(t, e) {
                return this instanceof vt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? T: S) : this.type = t, e && vt.extend(this, e), this.timeStamp = t && t.timeStamp || vt.now(), void(this[vt.expando] = !0)) : new vt.Event(t, e)
            },
            vt.Event.prototype = {
                constructor: vt.Event,
                isDefaultPrevented: S,
                isPropagationStopped: S,
                isImmediatePropagationStopped: S,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = T,
                    t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = T,
                    t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = T,
                    t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            vt.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            },
            function(t, e) {
                vt.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                        return o && (o === i || vt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e),
                        n
                    }
                }
            }),
            gt.submit || (vt.event.special.submit = {
                setup: function() {
                    return ! vt.nodeName(this, "form") && void vt.event.add(this, "click._submit keypress._submit",
                    function(t) {
                        var e = t.target,
                        n = vt.nodeName(e, "input") || vt.nodeName(e, "button") ? vt.prop(e, "form") : void 0;
                        n && !vt._data(n, "submit") && (vt.event.add(n, "submit._submit",
                        function(t) {
                            t._submitBubble = !0
                        }), vt._data(n, "submit", !0))
                    })
                },
                postDispatch: function(t) {
                    t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && vt.event.simulate("submit", this.parentNode, t))
                },
                teardown: function() {
                    return ! vt.nodeName(this, "form") && void vt.event.remove(this, "._submit")
                }
            }),
            gt.change || (vt.event.special.change = {
                setup: function() {
                    return Yt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (vt.event.add(this, "propertychange._change",
                    function(t) {
                        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                    }), vt.event.add(this, "click._change",
                    function(t) {
                        this._justChanged && !t.isTrigger && (this._justChanged = !1),
                        vt.event.simulate("change", this, t)
                    })), !1) : void vt.event.add(this, "beforeactivate._change",
                    function(t) {
                        var e = t.target;
                        Yt.test(e.nodeName) && !vt._data(e, "change") && (vt.event.add(e, "change._change",
                        function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || vt.event.simulate("change", this.parentNode, t)
                        }), vt._data(e, "change", !0))
                    })
                },
                handle: function(t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return vt.event.remove(this, "._change"),
                    !Yt.test(this.nodeName)
                }
            }),
            gt.focusin || vt.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(t, e) {
                var n = function(t) {
                    vt.event.simulate(e, t.target, vt.event.fix(t))
                };
                vt.event.special[e] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                        o = vt._data(i, e);
                        o || i.addEventListener(t, n, !0),
                        vt._data(i, e, (o || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                        o = vt._data(i, e) - 1;
                        o ? vt._data(i, e, o) : (i.removeEventListener(t, n, !0), vt._removeData(i, e))
                    }
                }
            }),
            vt.fn.extend({
                on: function(t, e, n, i) {
                    return k(this, t, e, n, i)
                },
                one: function(t, e, n, i) {
                    return k(this, t, e, n, i, 1)
                },
                off: function(t, e, n) {
                    var i, o;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj,
                    vt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                    this;
                    if ("object" == typeof t) {
                        for (o in t) this.off(o, e, t[o]);
                        return this
                    }
                    return e !== !1 && "function" != typeof e || (n = e, e = void 0),
                    n === !1 && (n = S),
                    this.each(function() {
                        vt.event.remove(this, t, n, e)
                    })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        vt.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    if (n) return vt.event.trigger(t, e, n, !0)
                }
            });
            var ie = / jQuery\d+="(?:null|\d+)"/g,
            oe = new RegExp("<(?:" + Qt + ")[\\s/>]", "i"),
            re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            se = /<script|<style|<link/i,
            ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ce = /^true\/(.*)/,
            le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ue = v(at),
            he = ue.appendChild(at.createElement("div"));
            vt.extend({
                htmlPrefilter: function(t) {
                    return t.replace(re, "<$1></$2>")
                },
                clone: function(t, e, n) {
                    var i, o, r, s, a, c = vt.contains(t.ownerDocument, t);
                    if (gt.html5Clone || vt.isXMLDoc(t) || !oe.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (he.innerHTML = t.outerHTML, he.removeChild(r = he.firstChild)), !(gt.noCloneEvent && gt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || vt.isXMLDoc(t))) for (i = y(r), a = y(t), s = 0; null != (o = a[s]); ++s) i[s] && R(o, i[s]);
                    if (e) if (n) for (a = a || y(t), i = i || y(r), s = 0; null != (o = a[s]); s++) D(o, i[s]);
                    else D(t, r);
                    return i = y(r, "script"),
                    i.length > 0 && w(i, !c && y(t, "script")),
                    i = a = o = null,
                    r
                },
                cleanData: function(t, e) {
                    for (var n, i, o, r, s = 0,
                    a = vt.expando,
                    c = vt.cache,
                    l = gt.attributes,
                    u = vt.event.special; null != (n = t[s]); s++) if ((e || Mt(n)) && (o = n[a], r = o && c[o])) {
                        if (r.events) for (i in r.events) u[i] ? vt.event.remove(n, i) : vt.removeEvent(n, i, r.handle);
                        c[o] && (delete c[o], l || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), st.push(o))
                    }
                }
            }),
            vt.fn.extend({
                domManip: A,
                detach: function(t) {
                    return N(this, t, !0)
                },
                remove: function(t) {
                    return N(this, t)
                },
                text: function(t) {
                    return Ht(this,
                    function(t) {
                        return void 0 === t ? vt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || at).createTextNode(t))
                    },
                    null, t, arguments.length)
                },
                append: function() {
                    return A(this, arguments,
                    function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = C(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return A(this, arguments,
                    function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = C(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return A(this, arguments,
                    function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return A(this, arguments,
                    function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && vt.cleanData(y(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                        t.options && vt.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t,
                    e = null == e ? t: e,
                    this.map(function() {
                        return vt.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return Ht(this,
                    function(t) {
                        var e = this[0] || {},
                        n = 0,
                        i = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(ie, "") : void 0;
                        if ("string" == typeof t && !se.test(t) && (gt.htmlSerialize || !oe.test(t)) && (gt.leadingWhitespace || !Kt.test(t)) && !zt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = vt.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) e = this[n] || {},
                                1 === e.nodeType && (vt.cleanData(y(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch(t) {}
                        }
                        e && this.empty().append(t)
                    },
                    null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return A(this, arguments,
                    function(e) {
                        var n = this.parentNode;
                        vt.inArray(this, t) < 0 && (vt.cleanData(y(this)), n && n.replaceChild(e, this))
                    },
                    t)
                }
            }),
            vt.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(t, e) {
                vt.fn[t] = function(t) {
                    for (var n, i = 0,
                    o = [], r = vt(t), s = r.length - 1; i <= s; i++) n = i === s ? this: this.clone(!0),
                    vt(r[i])[e](n),
                    ut.apply(o, n.get());
                    return this.pushStack(o)
                }
            });
            var de, fe = {
                HTML: "block",
                BODY: "block"
            },
            pe = /^margin/,
            ge = new RegExp("^(" + Pt + ")(?!px)[a-z%]+$", "i"),
            me = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r],
                t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            },
            ve = at.documentElement; !
            function() {
                function t() {
                    var t, u, h = at.documentElement;
                    h.appendChild(c),
                    l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    e = o = a = !1,
                    i = s = !0,
                    n.getComputedStyle && (u = n.getComputedStyle(l), e = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, o = "4px" === (u || {
                        width: "4px"
                    }).width, l.style.marginRight = "50%", i = "4px" === (u || {
                        marginRight: "4px"
                    }).marginRight, t = l.appendChild(at.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", s = !parseFloat((n.getComputedStyle(t) || {}).marginRight), l.removeChild(t)),
                    l.style.display = "none",
                    r = 0 === l.getClientRects().length,
                    r && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === t[0].offsetHeight, r && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)),
                    h.removeChild(c)
                }
                var e, i, o, r, s, a, c = at.createElement("div"),
                l = at.createElement("div");
                l.style && (l.style.cssText = "float:left;opacity:.5", gt.opacity = "0.5" === l.style.opacity, gt.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", gt.clearCloneStyle = "content-box" === l.style.backgroundClip, c = at.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", c.appendChild(l), gt.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, vt.extend(gt, {
                    reliableHiddenOffsets: function() {
                        return null == e && t(),
                        r
                    },
                    boxSizingReliable: function() {
                        return null == e && t(),
                        o
                    },
                    pixelMarginRight: function() {
                        return null == e && t(),
                        i
                    },
                    pixelPosition: function() {
                        return null == e && t(),
                        e
                    },
                    reliableMarginRight: function() {
                        return null == e && t(),
                        s
                    },
                    reliableMarginLeft: function() {
                        return null == e && t(),
                        a
                    }
                }))
            } ();
            var ye, we, be = /^(top|right|bottom|left)$/;
            n.getComputedStyle ? (ye = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n),
                e.getComputedStyle(t)
            },
            we = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || ye(t),
                s = n ? n.getPropertyValue(e) || n[e] : void 0,
                "" !== s && void 0 !== s || vt.contains(t.ownerDocument, t) || (s = vt.style(t, e)),
                n && !gt.pixelMarginRight() && ge.test(s) && pe.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r),
                void 0 === s ? s: s + ""
            }) : ve.currentStyle && (ye = function(t) {
                return t.currentStyle
            },
            we = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || ye(t),
                s = n ? n[e] : void 0,
                null == s && a && a[e] && (s = a[e]),
                ge.test(s) && !be.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)),
                void 0 === s ? s: s + "" || "auto"
            });
            var xe = /alpha\([^)]*\)/i,
            Te = /opacity\s*=\s*([^)]*)/i,
            Se = /^(none|table(?!-c[ea]).+)/,
            Ee = new RegExp("^(" + Pt + ")(.*)$", "i"),
            ke = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ce = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            _e = ["Webkit", "O", "Moz", "ms"],
            Le = at.createElement("div").style;
            vt.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = we(t, "opacity");
                                return "" === n ? "1": n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: gt.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, r, s, a = vt.camelCase(e),
                        c = t.style;
                        if (e = vt.cssProps[a] || (vt.cssProps[a] = M(a) || a), s = vt.cssHooks[e] || vt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o: c[e];
                        if (r = typeof n, "string" === r && (o = $t.exec(n)) && o[1] && (n = m(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (vt.cssNumber[a] ? "": "px")), gt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                            c[e] = n
                        } catch(t) {}
                    }
                },
                css: function(t, e, n, i) {
                    var o, r, s, a = vt.camelCase(e);
                    return e = vt.cssProps[a] || (vt.cssProps[a] = M(a) || a),
                    s = vt.cssHooks[e] || vt.cssHooks[a],
                    s && "get" in s && (r = s.get(t, !0, n)),
                    void 0 === r && (r = we(t, e, i)),
                    "normal" === r && e in Ce && (r = Ce[e]),
                    "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }),
            vt.each(["height", "width"],
            function(t, e) {
                vt.cssHooks[e] = {
                    get: function(t, n, i) {
                        if (n) return Se.test(vt.css(t, "display")) && 0 === t.offsetWidth ? me(t, ke,
                        function() {
                            return $(t, e, i)
                        }) : $(t, e, i)
                    },
                    set: function(t, n, i) {
                        var o = i && ye(t);
                        return J(t, n, i ? P(t, e, i, gt.boxSizing && "border-box" === vt.css(t, "boxSizing", !1, o), o) : 0)
                    }
                }
            }),
            gt.opacity || (vt.cssHooks.opacity = {
                get: function(t, e) {
                    return Te.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
                },
                set: function(t, e) {
                    var n = t.style,
                    i = t.currentStyle,
                    o = vt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
                    r = i && i.filter || n.filter || "";
                    n.zoom = 1,
                    (e >= 1 || "" === e) && "" === vt.trim(r.replace(xe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = xe.test(r) ? r.replace(xe, o) : r + " " + o)
                }
            }),
            vt.cssHooks.marginRight = q(gt.reliableMarginRight,
            function(t, e) {
                if (e) return me(t, {
                    display: "inline-block"
                },
                we, [t, "marginRight"])
            }),
            vt.cssHooks.marginLeft = q(gt.reliableMarginLeft,
            function(t, e) {
                if (e) return (parseFloat(we(t, "marginLeft")) || (vt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - me(t, {
                    marginLeft: 0
                },
                function() {
                    return t.getBoundingClientRect().left
                }) : 0)) + "px"
            }),
            vt.each({
                margin: "",
                padding: "",
                border: "Width"
            },
            function(t, e) {
                vt.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var i = 0,
                        o = {},
                        r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + jt[i] + e] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                },
                pe.test(t) || (vt.cssHooks[t + e].set = J)
            }),
            vt.fn.extend({
                css: function(t, e) {
                    return Ht(this,
                    function(t, e, n) {
                        var i, o, r = {},
                        s = 0;
                        if (vt.isArray(e)) {
                            for (i = ye(t), o = e.length; s < o; s++) r[e[s]] = vt.css(t, e[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? vt.style(t, e, n) : vt.css(t, e)
                    },
                    t, e, arguments.length > 1)
                },
                show: function() {
                    return O(this, !0)
                },
                hide: function() {
                    return O(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        Ut(this) ? vt(this).show() : vt(this).hide()
                    })
                }
            }),
            vt.Tween = j,
            j.prototype = {
                constructor: j,
                init: function(t, e, n, i, o, r) {
                    this.elem = t,
                    this.prop = n,
                    this.easing = o || vt.easing._default,
                    this.options = e,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (vt.cssNumber[n] ? "": "px")
                },
                cur: function() {
                    var t = j.propHooks[this.prop];
                    return t && t.get ? t.get(this) : j.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, n = j.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = vt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                    this.now = (this.end - this.start) * e + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : j.propHooks._default.set(this),
                    this
                }
            },
            j.prototype.init.prototype = j.prototype,
            j.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = vt.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0)
                    },
                    set: function(t) {
                        vt.fx.step[t.prop] ? vt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[vt.cssProps[t.prop]] && !vt.cssHooks[t.prop] ? t.elem[t.prop] = t.now: vt.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            },
            j.propHooks.scrollTop = j.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            },
            vt.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return.5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            },
            vt.fx = j.prototype.init,
            vt.fx.step = {};
            var De, Re, Ae = /^(?:toggle|show|hide)$/,
            Ne = /queueHooks$/;
            vt.Animation = vt.extend(K, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return m(n.elem, t, $t.exec(e), n),
                        n
                    }]
                },
                tweener: function(t, e) {
                    vt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(It);
                    for (var n, i = 0,
                    o = t.length; i < o; i++) n = t[i],
                    K.tweeners[n] = K.tweeners[n] || [],
                    K.tweeners[n].unshift(e)
                },
                prefilters: [W],
                prefilter: function(t, e) {
                    e ? K.prefilters.unshift(t) : K.prefilters.push(t)
                }
            }),
            vt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? vt.extend({},
                t) : {
                    complete: n || !n && e || vt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !vt.isFunction(e) && e
                };
                return i.duration = vt.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in vt.fx.speeds ? vt.fx.speeds[i.duration] : vt.fx.speeds._default,
                null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    vt.isFunction(i.old) && i.old.call(this),
                    i.queue && vt.dequeue(this, i.queue)
                },
                i
            },
            vt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Ut).css("opacity", 0).show().end().animate({
                        opacity: e
                    },
                    t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = vt.isEmptyObject(t),
                    r = vt.speed(e, n, i),
                    s = function() {
                        var e = K(this, vt.extend({},
                        t), r); (o || vt._data(this, "finish")) && e.stop(!0)
                    };
                    return s.finish = s,
                    o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop,
                        e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0),
                    e && t !== !1 && this.queue(t || "fx", []),
                    this.each(function() {
                        var e = !0,
                        o = null != t && t + "queueHooks",
                        r = vt.timers,
                        s = vt._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else for (o in s) s[o] && s[o].stop && Ne.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1)); ! e && n || vt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"),
                    this.each(function() {
                        var e, n = vt._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = vt.timers,
                        s = i ? i.length: 0;
                        for (n.finish = !0, vt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            vt.each(["toggle", "show", "hide"],
            function(t, e) {
                var n = vt.fn[e];
                vt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, o)
                }
            }),
            vt.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            },
            function(t, e) {
                vt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }),
            vt.timers = [],
            vt.fx.tick = function() {
                var t, e = vt.timers,
                n = 0;
                for (De = vt.now(); n < e.length; n++) t = e[n],
                t() || e[n] !== t || e.splice(n--, 1);
                e.length || vt.fx.stop(),
                De = void 0
            },
            vt.fx.timer = function(t) {
                vt.timers.push(t),
                t() ? vt.fx.start() : vt.timers.pop()
            },
            vt.fx.interval = 13,
            vt.fx.start = function() {
                Re || (Re = n.setInterval(vt.fx.tick, vt.fx.interval))
            },
            vt.fx.stop = function() {
                n.clearInterval(Re),
                Re = null
            },
            vt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            vt.fn.delay = function(t, e) {
                return t = vt.fx ? vt.fx.speeds[t] || t: t,
                e = e || "fx",
                this.queue(e,
                function(e, i) {
                    var o = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(o)
                    }
                })
            },
            function() {
                var t, e = at.createElement("input"),
                n = at.createElement("div"),
                i = at.createElement("select"),
                o = i.appendChild(at.createElement("option"));
                n = at.createElement("div"),
                n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                t = n.getElementsByTagName("a")[0],
                e.setAttribute("type", "checkbox"),
                n.appendChild(e),
                t = n.getElementsByTagName("a")[0],
                t.style.cssText = "top:1px",
                gt.getSetAttribute = "t" !== n.className,
                gt.style = /top/.test(t.getAttribute("style")),
                gt.hrefNormalized = "/a" === t.getAttribute("href"),
                gt.checkOn = !!e.value,
                gt.optSelected = o.selected,
                gt.enctype = !!at.createElement("form").enctype,
                i.disabled = !0,
                gt.optDisabled = !o.disabled,
                e = at.createElement("input"),
                e.setAttribute("value", ""),
                gt.input = "" === e.getAttribute("value"),
                e.value = "t",
                e.setAttribute("type", "radio"),
                gt.radioValue = "t" === e.value
            } ();
            var Ie = /\r/g,
            Be = /[\x20\t\r\n\f]+/g;
            vt.fn.extend({
                val: function(t) {
                    var e, n, i, o = this[0]; {
                        if (arguments.length) return i = vt.isFunction(t),
                        this.each(function(n) {
                            var o;
                            1 === this.nodeType && (o = i ? t.call(this, n, vt(this).val()) : t, null == o ? o = "": "number" == typeof o ? o += "": vt.isArray(o) && (o = vt.map(o,
                            function(t) {
                                return null == t ? "": t + ""
                            })), e = vt.valHooks[this.type] || vt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                        });
                        if (o) return e = vt.valHooks[o.type] || vt.valHooks[o.nodeName.toLowerCase()],
                        e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n: (n = o.value, "string" == typeof n ? n.replace(Ie, "") : null == n ? "": n)
                    }
                }
            }),
            vt.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = vt.find.attr(t, "value");
                            return null != e ? e: vt.trim(vt.text(t)).replace(Be, " ")
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, i = t.options,
                            o = t.selectedIndex,
                            r = "select-one" === t.type || o < 0,
                            s = r ? null: [], a = r ? o + 1 : i.length, c = o < 0 ? a: r ? o: 0; c < a; c++) if (n = i[c], (n.selected || c === o) && (gt.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !vt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = vt(n).val(), r) return e;
                                s.push(e)
                            }
                            return s
                        },
                        set: function(t, e) {
                            for (var n, i, o = t.options,
                            r = vt.makeArray(e), s = o.length; s--;) if (i = o[s], vt.inArray(vt.valHooks.option.get(i), r) > -1) try {
                                i.selected = n = !0
                            } catch(t) {
                                i.scrollHeight
                            } else i.selected = !1;
                            return n || (t.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            vt.each(["radio", "checkbox"],
            function() {
                vt.valHooks[this] = {
                    set: function(t, e) {
                        if (vt.isArray(e)) return t.checked = vt.inArray(vt(t).val(), e) > -1
                    }
                },
                gt.checkOn || (vt.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on": t.value
                })
            });
            var qe, Me, Oe = vt.expr.attrHandle,
            Je = /^(?:checked|selected)$/i,
            Pe = gt.getSetAttribute,
            $e = gt.input;
            vt.fn.extend({
                attr: function(t, e) {
                    return Ht(this, vt.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        vt.removeAttr(this, t)
                    })
                }
            }),
            vt.extend({
                attr: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? vt.prop(t, e, n) : (1 === r && vt.isXMLDoc(t) || (e = e.toLowerCase(), o = vt.attrHooks[e] || (vt.expr.match.bool.test(e) ? Me: qe)), void 0 !== n ? null === n ? void vt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i: (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i: (i = vt.find.attr(t, e), null == i ? void 0 : i))
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!gt.radioValue && "radio" === e && vt.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e),
                                n && (t.value = n),
                                e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n, i, o = 0,
                    r = e && e.match(It);
                    if (r && 1 === t.nodeType) for (; n = r[o++];) i = vt.propFix[n] || n,
                    vt.expr.match.bool.test(n) ? $e && Pe || !Je.test(n) ? t[i] = !1 : t[vt.camelCase("default-" + n)] = t[i] = !1 : vt.attr(t, n, ""),
                    t.removeAttribute(Pe ? n: i)
                }
            }),
            Me = {
                set: function(t, e, n) {
                    return e === !1 ? vt.removeAttr(t, n) : $e && Pe || !Je.test(n) ? t.setAttribute(!Pe && vt.propFix[n] || n, n) : t[vt.camelCase("default-" + n)] = t[n] = !0,
                    n
                }
            },
            vt.each(vt.expr.match.bool.source.match(/\w+/g),
            function(t, e) {
                var n = Oe[e] || vt.find.attr;
                $e && Pe || !Je.test(e) ? Oe[e] = function(t, e, i) {
                    var o, r;
                    return i || (r = Oe[e], Oe[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Oe[e] = r),
                    o
                }: Oe[e] = function(t, e, n) {
                    if (!n) return t[vt.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            }),
            $e && Pe || (vt.attrHooks.value = {
                set: function(t, e, n) {
                    return vt.nodeName(t, "input") ? void(t.defaultValue = e) : qe && qe.set(t, e, n)
                }
            }),
            Pe || (qe = {
                set: function(t, e, n) {
                    var i = t.getAttributeNode(n);
                    if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
                }
            },
            Oe.id = Oe.name = Oe.coords = function(t, e, n) {
                var i;
                if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value: null
            },
            vt.valHooks.button = {
                get: function(t, e) {
                    var n = t.getAttributeNode(e);
                    if (n && n.specified) return n.value
                },
                set: qe.set
            },
            vt.attrHooks.contenteditable = {
                set: function(t, e, n) {
                    qe.set(t, "" !== e && e, n)
                }
            },
            vt.each(["width", "height"],
            function(t, e) {
                vt.attrHooks[e] = {
                    set: function(t, n) {
                        if ("" === n) return t.setAttribute(e, "auto"),
                        n
                    }
                }
            })),
            gt.style || (vt.attrHooks.style = {
                get: function(t) {
                    return t.style.cssText || void 0
                },
                set: function(t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var je = /^(?:input|select|textarea|button|object)$/i,
            Ue = /^(?:a|area)$/i;
            vt.fn.extend({
                prop: function(t, e) {
                    return Ht(this, vt.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return t = vt.propFix[t] || t,
                    this.each(function() {
                        try {
                            this[t] = void 0,
                            delete this[t]
                        } catch(t) {}
                    })
                }
            }),
            vt.extend({
                prop: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && vt.isXMLDoc(t) || (e = vt.propFix[e] || e, o = vt.propHooks[e]),
                    void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i: t[e] = n: o && "get" in o && null !== (i = o.get(t, e)) ? i: t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = vt.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : je.test(t.nodeName) || Ue.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            gt.hrefNormalized || vt.each(["href", "src"],
            function(t, e) {
                vt.propHooks[e] = {
                    get: function(t) {
                        return t.getAttribute(e, 4)
                    }
                }
            }),
            gt.optSelected || (vt.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
                    null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }),
            vt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
            function() {
                vt.propFix[this.toLowerCase()] = this
            }),
            gt.enctype || (vt.propFix.enctype = "encoding");
            var He = /[\t\r\n\f]/g;
            vt.fn.extend({
                addClass: function(t) {
                    var e, n, i, o, r, s, a, c = 0;
                    if (vt.isFunction(t)) return this.each(function(e) {
                        vt(this).addClass(t.call(this, e, Q(this)))
                    });
                    if ("string" == typeof t && t) for (e = t.match(It) || []; n = this[c++];) if (o = Q(n), i = 1 === n.nodeType && (" " + o + " ").replace(He, " ")) {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = vt.trim(i),
                        o !== a && vt.attr(n, "class", a)
                    }
                    return this
                },
                removeClass: function(t) {
                    var e, n, i, o, r, s, a, c = 0;
                    if (vt.isFunction(t)) return this.each(function(e) {
                        vt(this).removeClass(t.call(this, e, Q(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof t && t) for (e = t.match(It) || []; n = this[c++];) if (o = Q(n), i = 1 === n.nodeType && (" " + o + " ").replace(He, " ")) {
                        for (s = 0; r = e[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = vt.trim(i),
                        o !== a && vt.attr(n, "class", a)
                    }
                    return this
                },
                toggleClass: function(t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : vt.isFunction(t) ? this.each(function(n) {
                        vt(this).toggleClass(t.call(this, n, Q(this), e), e)
                    }) : this.each(function() {
                        var e, i, o, r;
                        if ("string" === n) for (i = 0, o = vt(this), r = t.match(It) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                        else void 0 !== t && "boolean" !== n || (e = Q(this), e && vt._data(this, "__className__", e), vt.attr(this, "class", e || t === !1 ? "": vt._data(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var e, n, i = 0;
                    for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + Q(n) + " ").replace(He, " ").indexOf(e) > -1) return ! 0;
                    return ! 1
                }
            }),
            vt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
            function(t, e) {
                vt.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }),
            vt.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            });
            var Fe = n.location,
            We = vt.now(),
            Ve = /\?/,
            Ke = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            vt.parseJSON = function(t) {
                if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
                var e, i = null,
                o = vt.trim(t + "");
                return o && !vt.trim(o.replace(Ke,
                function(t, n, o, r) {
                    return e && n && (i = 0),
                    0 === i ? t: (e = o || n, i += !r - !o, "")
                })) ? Function("return " + o)() : vt.error("Invalid JSON: " + t)
            },
            vt.parseXML = function(t) {
                var e, i;
                if (!t || "string" != typeof t) return null;
                try {
                    n.DOMParser ? (i = new n.DOMParser, e = i.parseFromString(t, "text/xml")) : (e = new n.ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
                } catch(t) {
                    e = void 0
                }
                return e && e.documentElement && !e.getElementsByTagName("parsererror").length || vt.error("Invalid XML: " + t),
                e
            };
            var Qe = /#.*$/,
            ze = /([?&])_=[^&]*/,
            Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ye = /^(?:GET|HEAD)$/,
            Ze = /^\/\//,
            tn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            en = {},
            nn = {},
            on = "*/".concat("*"),
            rn = Fe.href,
            sn = tn.exec(rn.toLowerCase()) || [];
            vt.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: rn,
                    type: "GET",
                    isLocal: Ge.test(sn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": on,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": vt.parseJSON,
                        "text xml": vt.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? G(G(t, vt.ajaxSettings), e) : G(vt.ajaxSettings, t)
                },
                ajaxPrefilter: z(en),
                ajaxTransport: z(nn),
                ajax: function(t, e) {
                    function i(t, e, i, o) {
                        var r, h, y, w, x, S = e;
                        2 !== b && (b = 2, c && n.clearTimeout(c), u = void 0, a = o || "", T.readyState = t > 0 ? 4 : 0, r = t >= 200 && t < 300 || 304 === t, i && (w = Y(d, T, i)), w = Z(d, w, T, r), r ? (d.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (vt.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (vt.etag[s] = x)), 204 === t || "HEAD" === d.type ? S = "nocontent": 304 === t ? S = "notmodified": (S = w.state, h = w.data, y = w.error, r = !y)) : (y = S, !t && S || (S = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || S) + "", r ? g.resolveWith(f, [h, S, T]) : g.rejectWith(f, [T, S, y]), T.statusCode(v), v = void 0, l && p.trigger(r ? "ajaxSuccess": "ajaxError", [T, d, r ? h: y]), m.fireWith(f, [T, S]), l && (p.trigger("ajaxComplete", [T, d]), --vt.active || vt.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (e = t, t = void 0),
                    e = e || {};
                    var o, r, s, a, c, l, u, h, d = vt.ajaxSetup({},
                    e),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? vt(f) : vt.event,
                    g = vt.Deferred(),
                    m = vt.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    w = {},
                    b = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!h) for (h = {}; e = Xe.exec(a);) h[e[1].toLowerCase()] = e[2];
                                e = h[t.toLowerCase()]
                            }
                            return null == e ? null: e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a: null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = w[n] = w[n] || t, y[t] = e),
                            this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t),
                            this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t) if (b < 2) for (e in t) v[e] = [v[e], t[e]];
                            else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return u && u.abort(e),
                            i(0, e),
                            this
                        }
                    };
                    if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || rn) + "").replace(Qe, "").replace(Ze, sn[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = vt.trim(d.dataType || "*").toLowerCase().match(It) || [""], null == d.crossDomain && (o = tn.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === sn[1] && o[2] === sn[2] && (o[3] || ("http:" === o[1] ? "80": "443")) === (sn[3] || ("http:" === sn[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = vt.param(d.data, d.traditional)), X(en, d, e, T), 2 === b) return T;
                    l = vt.event && d.global,
                    l && 0 === vt.active++&&vt.event.trigger("ajaxStart"),
                    d.type = d.type.toUpperCase(),
                    d.hasContent = !Ye.test(d.type),
                    s = d.url,
                    d.hasContent || (d.data && (s = d.url += (Ve.test(s) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = ze.test(s) ? s.replace(ze, "$1_=" + We++) : s + (Ve.test(s) ? "&": "?") + "_=" + We++)),
                    d.ifModified && (vt.lastModified[s] && T.setRequestHeader("If-Modified-Since", vt.lastModified[s]), vt.etag[s] && T.setRequestHeader("If-None-Match", vt.etag[s])),
                    (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && T.setRequestHeader("Content-Type", d.contentType),
                    T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + on + "; q=0.01": "") : d.accepts["*"]);
                    for (r in d.headers) T.setRequestHeader(r, d.headers[r]);
                    if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === b)) return T.abort();
                    x = "abort";
                    for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[r](d[r]);
                    if (u = X(nn, d, e, T)) {
                        if (T.readyState = 1, l && p.trigger("ajaxSend", [T, d]), 2 === b) return T;
                        d.async && d.timeout > 0 && (c = n.setTimeout(function() {
                            T.abort("timeout")
                        },
                        d.timeout));
                        try {
                            b = 1,
                            u.send(y, i)
                        } catch(t) {
                            if (! (b < 2)) throw t;
                            i( - 1, t)
                        }
                    } else i( - 1, "No Transport");
                    return T
                },
                getJSON: function(t, e, n) {
                    return vt.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return vt.get(t, void 0, e, "script")
                }
            }),
            vt.each(["get", "post"],
            function(t, e) {
                vt[e] = function(t, n, i, o) {
                    return vt.isFunction(n) && (o = o || i, i = n, n = void 0),
                    vt.ajax(vt.extend({
                        url: t,
                        type: e,
                        dataType: o,
                        data: n,
                        success: i
                    },
                    vt.isPlainObject(t) && t))
                }
            }),
            vt._evalUrl = function(t) {
                return vt.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            },
            vt.fn.extend({
                wrapAll: function(t) {
                    if (vt.isFunction(t)) return this.each(function(e) {
                        vt(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = vt(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]),
                        e.map(function() {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return vt.isFunction(t) ? this.each(function(e) {
                        vt(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = vt(this),
                        n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = vt.isFunction(t);
                    return this.each(function(n) {
                        vt(this).wrapAll(e ? t.call(this, n) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        vt.nodeName(this, "body") || vt(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            vt.expr.filters.hidden = function(t) {
                return gt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length: et(t)
            },
            vt.expr.filters.visible = function(t) {
                return ! vt.expr.filters.hidden(t)
            };
            var an = /%20/g,
            cn = /\[\]$/,
            ln = /\r?\n/g,
            un = /^(?:submit|button|image|reset|file)$/i,
            hn = /^(?:input|select|textarea|keygen)/i;
            vt.param = function(t, e) {
                var n, i = [],
                o = function(t, e) {
                    e = vt.isFunction(e) ? e() : null == e ? "": e,
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = vt.ajaxSettings && vt.ajaxSettings.traditional), vt.isArray(t) || t.jquery && !vt.isPlainObject(t)) vt.each(t,
                function() {
                    o(this.name, this.value)
                });
                else for (n in t) nt(n, t[n], e, o);
                return i.join("&").replace(an, "+")
            },
            vt.fn.extend({
                serialize: function() {
                    return vt.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = vt.prop(this, "elements");
                        return t ? vt.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !vt(this).is(":disabled") && hn.test(this.nodeName) && !un.test(t) && (this.checked || !Ft.test(t))
                    }).map(function(t, e) {
                        var n = vt(this).val();
                        return null == n ? null: vt.isArray(n) ? vt.map(n,
                        function(t) {
                            return {
                                name: e.name,
                                value: t.replace(ln, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(ln, "\r\n")
                        }
                    }).get()
                }
            }),
            vt.ajaxSettings.xhr = void 0 !== n.ActiveXObject ?
            function() {
                return this.isLocal ? ot() : at.documentMode > 8 ? it() : /^(get|post|head|put|delete|options)$/i.test(this.type) && it() || ot()
            }: it;
            var dn = 0,
            fn = {},
            pn = vt.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload",
            function() {
                for (var t in fn) fn[t](void 0, !0)
            }),
            gt.cors = !!pn && "withCredentials" in pn,
            pn = gt.ajax = !!pn,
            pn && vt.ajaxTransport(function(t) {
                if (!t.crossDomain || gt.cors) {
                    var e;
                    return {
                        send: function(i, o) {
                            var r, s = t.xhr(),
                            a = ++dn;
                            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) s[r] = t.xhrFields[r];
                            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                            t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (r in i) void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                            s.send(t.hasContent && t.data || null),
                            e = function(n, i) {
                                var r, c, l;
                                if (e && (i || 4 === s.readyState)) if (delete fn[a], e = void 0, s.onreadystatechange = vt.noop, i) 4 !== s.readyState && s.abort();
                                else {
                                    l = {},
                                    r = s.status,
                                    "string" == typeof s.responseText && (l.text = s.responseText);
                                    try {
                                        c = s.statusText
                                    } catch(t) {
                                        c = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = l.text ? 200 : 404
                                }
                                l && o(r, c, l, s.getAllResponseHeaders())
                            },
                            t.async ? 4 === s.readyState ? n.setTimeout(e) : s.onreadystatechange = fn[a] = e: e()
                        },
                        abort: function() {
                            e && e(void 0, !0)
                        }
                    }
                }
            }),
            vt.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return vt.globalEval(t),
                        t
                    }
                }
            }),
            vt.ajaxPrefilter("script",
            function(t) {
                void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET", t.global = !1)
            }),
            vt.ajaxTransport("script",
            function(t) {
                if (t.crossDomain) {
                    var e, n = at.head || vt("head")[0] || at.documentElement;
                    return {
                        send: function(i, o) {
                            e = at.createElement("script"),
                            e.async = !0,
                            t.scriptCharset && (e.charset = t.scriptCharset),
                            e.src = t.url,
                            e.onload = e.onreadystatechange = function(t, n) { (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                            },
                            n.insertBefore(e, n.firstChild)
                        },
                        abort: function() {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
            var gn = [],
            mn = /(=)\?(?=&|$)|\?\?/;
            vt.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = gn.pop() || vt.expando + "_" + We++;
                    return this[t] = !0,
                    t
                }
            }),
            vt.ajaxPrefilter("json jsonp",
            function(t, e, i) {
                var o, r, s, a = t.jsonp !== !1 && (mn.test(t.url) ? "url": "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = vt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(mn, "$1" + o) : t.jsonp !== !1 && (t.url += (Ve.test(t.url) ? "&": "?") + t.jsonp + "=" + o),
                t.converters["script json"] = function() {
                    return s || vt.error(o + " was not called"),
                    s[0]
                },
                t.dataTypes[0] = "json",
                r = n[o],
                n[o] = function() {
                    s = arguments
                },
                i.always(function() {
                    void 0 === r ? vt(n).removeProp(o) : n[o] = r,
                    t[o] && (t.jsonpCallback = e.jsonpCallback, gn.push(o)),
                    s && vt.isFunction(r) && r(s[0]),
                    s = r = void 0
                }),
                "script"
            }),
            vt.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1),
                e = e || at;
                var i = Ct.exec(t),
                o = !n && [];
                return i ? [e.createElement(i[1])] : (i = x([t], e, o), o && o.length && vt(o).remove(), vt.merge([], i.childNodes))
            };
            var vn = vt.fn.load;
            vt.fn.load = function(t, e, n) {
                if ("string" != typeof t && vn) return vn.apply(this, arguments);
                var i, o, r, s = this,
                a = t.indexOf(" ");
                return a > -1 && (i = vt.trim(t.slice(a, t.length)), t = t.slice(0, a)),
                vt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
                s.length > 0 && vt.ajax({
                    url: t,
                    type: o || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    r = arguments,
                    s.html(i ? vt("<div>").append(vt.parseHTML(t)).find(i) : t)
                }).always(n &&
                function(t, e) {
                    s.each(function() {
                        n.apply(this, r || [t.responseText, e, t])
                    })
                }),
                this
            },
            vt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
            function(t, e) {
                vt.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }),
            vt.expr.filters.animated = function(t) {
                return vt.grep(vt.timers,
                function(e) {
                    return t === e.elem
                }).length
            },
            vt.offset = {
                setOffset: function(t, e, n) {
                    var i, o, r, s, a, c, l, u = vt.css(t, "position"),
                    h = vt(t),
                    d = {};
                    "static" === u && (t.style.position = "relative"),
                    a = h.offset(),
                    r = vt.css(t, "top"),
                    c = vt.css(t, "left"),
                    l = ("absolute" === u || "fixed" === u) && vt.inArray("auto", [r, c]) > -1,
                    l ? (i = h.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(c) || 0),
                    vt.isFunction(e) && (e = e.call(t, n, vt.extend({},
                    a))),
                    null != e.top && (d.top = e.top - a.top + s),
                    null != e.left && (d.left = e.left - a.left + o),
                    "using" in e ? e.using.call(t, d) : h.css(d)
                }
            },
            vt.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                        vt.offset.setOffset(this, t, e)
                    });
                    var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                    if (r) return e = r.documentElement,
                    vt.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = rt(r), {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                        return "fixed" === vt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), vt.nodeName(t[0], "html") || (n = t.offset()), n.top += vt.css(t[0], "borderTopWidth", !0), n.left += vt.css(t[0], "borderLeftWidth", !0)),
                        {
                            top: e.top - n.top - vt.css(i, "marginTop", !0),
                            left: e.left - n.left - vt.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && !vt.nodeName(t, "html") && "static" === vt.css(t, "position");) t = t.offsetParent;
                        return t || ve
                    })
                }
            }),
            vt.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            },
            function(t, e) {
                var n = /Y/.test(e);
                vt.fn[t] = function(i) {
                    return Ht(this,
                    function(t, i, o) {
                        var r = rt(t);
                        return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? vt(r).scrollLeft() : o, n ? o: vt(r).scrollTop()) : t[i] = o)
                    },
                    t, i, arguments.length, null)
                }
            }),
            vt.each(["top", "left"],
            function(t, e) {
                vt.cssHooks[e] = q(gt.pixelPosition,
                function(t, n) {
                    if (n) return n = we(t, e),
                    ge.test(n) ? vt(t).position()[e] + "px": n
                })
            }),
            vt.each({
                Height: "height",
                Width: "width"
            },
            function(t, e) {
                vt.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                },
                function(n, i) {
                    vt.fn[i] = function(i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin": "border");
                        return Ht(this,
                        function(e, n, i) {
                            var o;
                            return vt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? vt.css(e, n, s) : vt.style(e, n, i, s)
                        },
                        e, r ? i: void 0, r, null)
                    }
                })
            }),
            vt.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }),
            vt.fn.size = function() {
                return this.length
            },
            vt.fn.andSelf = vt.fn.addBack,
            i = [],
            o = function() {
                return vt
            }.apply(e, i),
            !(void 0 !== o && (t.exports = o));
            var yn = n.jQuery,
            wn = n.$;
            return vt.noConflict = function(t) {
                return n.$ === vt && (n.$ = wn),
                t && n.jQuery === vt && (n.jQuery = yn),
                vt
            },
            r || (n.jQuery = n.$ = vt),
            vt
        })
    },
    h97R: function(t, e) {
        function n(t, e, n) {
            var o = l.test(t),
            u = s.createElement(o ? "link": "script");
            if (n) {
                var h = isFunction(n) ? n(t) : n;
                h && (u.charset = h)
            }
            i(u, e, o, t),
            o ? (u.rel = "stylesheet", u.href = t, u.setAttribute("data-role", "global"), u.setAttribute("data-name", "loginApiCss")) : (u.async = !0, u.src = t),
            r = u,
            c ? a.insertBefore(u, c) : a.appendChild(u),
            r = null
        }
        function i(t, e, n, i) {
            function r() {
                t.onload = t.onerror = t.onreadystatechange = null,
                t = null,
                e()
            }
            var s = "onload" in t;
            return ! n || !u && s ? void(s ? (t.onload = r, t.onerror = function() {
                r()
            }) : t.onreadystatechange = function() { / loaded | complete / .test(t.readyState) && r()
            }) : void setTimeout(function() {
                o(t, e)
            },
            1)
        }
        function o(t, e) {
            var n, i = t.sheet;
            if (u) i && (n = !0);
            else if (i) try {
                i.cssRules && (n = !0)
            } catch(t) {
                "NS_ERROR_DOM_SECURITY_ERR" === t.name && (n = !0)
            }
            setTimeout(function() {
                n ? e() : o(t, e)
            },
            20)
        }
        var r, s = document,
        a = s.head || s.getElementsByTagName("head")[0] || s.documentElement,
        c = a.getElementsByTagName("base")[0],
        l = /\.css(?:\?|$)/i,
        u = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536;
        t.exports = n
    },
    "5zD2": function(t, e, n) {
        var i;
        /*!
	 * UAParser.js v0.7.19
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright 漏 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 or MIT
	 */
        !
        function(o, r) {
            "use strict";
            var s = "0.7.19",
            a = "",
            c = "?",
            l = "function",
            u = "undefined",
            h = "object",
            d = "string",
            f = "major",
            p = "model",
            g = "name",
            m = "type",
            v = "vendor",
            y = "version",
            w = "architecture",
            b = "console",
            x = "mobile",
            T = "tablet",
            S = "smarttv",
            E = "wearable",
            k = "embedded",
            C = {
                extend: function(t, e) {
                    var n = {};
                    for (var i in t) e[i] && e[i].length % 2 === 0 ? n[i] = e[i].concat(t[i]) : n[i] = t[i];
                    return n
                },
                has: function(t, e) {
                    return "string" == typeof t && e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                },
                lowerize: function(t) {
                    return t.toLowerCase()
                },
                major: function(t) {
                    return typeof t === d ? t.replace(/[^\d\.]/g, "").split(".")[0] : r
                },
                trim: function(t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            _ = {
                rgx: function(t, e) {
                    for (var n, i, o, s, a, c, u = 0; u < e.length && !a;) {
                        var d = e[u],
                        f = e[u + 1];
                        for (n = i = 0; n < d.length && !a;) if (a = d[n++].exec(t)) for (o = 0; o < f.length; o++) c = a[++i],
                        s = f[o],
                        typeof s === h && s.length > 0 ? 2 == s.length ? typeof s[1] == l ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== l || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : r: this[s[0]] = c ? s[1].call(this, c, s[2]) : r: 4 == s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : r) : this[s] = c ? c: r;
                        u += 2
                    }
                },
                str: function(t, e) {
                    for (var n in e) if (typeof e[n] === h && e[n].length > 0) {
                        for (var i = 0; i < e[n].length; i++) if (C.has(e[n][i], t)) return n === c ? r: n
                    } else if (C.has(e[n], t)) return n === c ? r: n;
                    return t
                }
            },
            L = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2 : "/1",
                            1.3 : "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000 : "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7 : "NT 6.1",
                            8 : "NT 6.2",
                            8.1 : "NT 6.3",
                            10 : ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            D = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [g, y], [/(opios)[\/\s]+([\w\.]+)/i], [[g, "Opera Mini"], y], [/\s(opr)\/([\w\.]+)/i], [[g, "Opera"], y], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [g, y], [/(konqueror)\/([\w\.]+)/i], [[g, "Konqueror"], y], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[g, "IE"], y], [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i], [[g, "Edge"], y], [/(yabrowser)\/([\w\.]+)/i], [[g, "Yandex"], y], [/(puffin)\/([\w\.]+)/i], [[g, "Puffin"], y], [/(focus)\/([\w\.]+)/i], [[g, "Firefox Focus"], y], [/(opt)\/([\w\.]+)/i], [[g, "Opera Touch"], y], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[g, "UCBrowser"], y], [/(comodo_dragon)\/([\w\.]+)/i], [[g, /_/g, " "], y], [/(micromessenger)\/([\w\.]+)/i], [[g, "WeChat"], y], [/(brave)\/([\w\.]+)/i], [[g, "Brave"], y], [/(qqbrowserlite)\/([\w\.]+)/i], [g, y], [/(QQ)\/([\d\.]+)/i], [g, y], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [g, y], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [g, y], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [g, y], [/(MetaSr)[\/\s]?([\w\.]+)/i], [g], [/(LBBROWSER)/i], [g], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [y, [g, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [y, [g, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [g, y], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [y, [g, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[g, /(.+)/, "$1 WebView"], y], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[g, /(.+(?:g|us))(.+)/, "$1 $2"], y], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [y, [g, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [g, y], [/(dolfin)\/([\w\.]+)/i], [[g, "Dolphin"], y], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[g, "Chrome"], y], [/(coast)\/([\w\.]+)/i], [[g, "Opera Coast"], y], [/fxios\/([\w\.-]+)/i], [y, [g, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [y, [g, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [y, g], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[g, "GSA"], y], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [g, [y, _.str, L.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [g, y], [/(navigator|netscape)\/([\w\.-]+)/i], [[g, "Netscape"], y], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [g, y]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[w, "amd64"]], [/(ia32(?=;))/i], [[w, C.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[w, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[w, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[w, /ower/, "", C.lowerize]], [/(sun4\w)[;\)]/i], [[w, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[w, C.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [p, v, [m, T]], [/applecoremedia\/[\w\.]+ \((ipad)/], [p, [v, "Apple"], [m, T]], [/(apple\s{0,1}tv)/i], [[p, "Apple TV"], [v, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [v, p, [m, T]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [p, [v, "Amazon"], [m, T]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[p, _.str, L.device.amazon.model], [v, "Amazon"], [m, x]], [/android.+aft([bms])\sbuild/i], [p, [v, "Amazon"], [m, S]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [p, v, [m, x]], [/\((ip[honed|\s\w*]+);/i], [p, [v, "Apple"], [m, x]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [v, p, [m, x]], [/\(bb10;\s(\w+)/i], [p, [v, "BlackBerry"], [m, x]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [p, [v, "Asus"], [m, T]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[v, "Sony"], [p, "Xperia Tablet"], [m, T]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [p, [v, "Sony"], [m, x]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [v, p, [m, b]], [/android.+;\s(shield)\sbuild/i], [p, [v, "Nvidia"], [m, b]], [/(playstation\s[34portablevi]+)/i], [p, [v, "Sony"], [m, b]], [/(sprint\s(\w+))/i], [[v, _.str, L.device.sprint.vendor], [p, _.str, L.device.sprint.model], [m, x]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [v, p, [m, T]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [v, [p, /_/g, " "], [m, x]], [/(nexus\s9)/i], [p, [v, "HTC"], [m, T]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [p, [v, "Huawei"], [m, x]], [/(microsoft);\s(lumia[\s\w]+)/i], [v, p, [m, x]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [p, [v, "Microsoft"], [m, b]], [/(kin\.[onetw]{3})/i], [[p, /\./g, " "], [v, "Microsoft"], [m, x]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [p, [v, "Motorola"], [m, x]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [p, [v, "Motorola"], [m, T]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[v, C.trim], [p, C.trim], [m, S]], [/hbbtv.+maple;(\d+)/i], [[p, /^/, "SmartTV"], [v, "Samsung"], [m, S]], [/\(dtv[\);].+(aquos)/i], [p, [v, "Sharp"], [m, S]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[v, "Samsung"], p, [m, T]], [/smart-tv.+(samsung)/i], [v, [m, S], p], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[v, "Samsung"], p, [m, x]], [/sie-(\w*)/i], [p, [v, "Siemens"], [m, x]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[v, "Nokia"], p, [m, x]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [p, [v, "Acer"], [m, T]], [/android.+([vl]k\-?\d{3})\s+build/i], [p, [v, "LG"], [m, T]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[v, "LG"], p, [m, T]], [/(lg) netcast\.tv/i], [v, p, [m, S]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [p, [v, "LG"], [m, x]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [p, [v, "Lenovo"], [m, T]], [/linux;.+((jolla));/i], [v, p, [m, x]], [/((pebble))app\/[\d\.]+\s/i], [v, p, [m, E]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [v, p, [m, x]], [/crkey/i], [[p, "Chromecast"], [v, "Google"]], [/android.+;\s(glass)\s\d/i], [p, [v, "Google"], [m, E]], [/android.+;\s(pixel c)[\s)]/i], [p, [v, "Google"], [m, T]], [/android.+;\s(pixel( [23])?( xl)?)\s/i], [p, [v, "Google"], [m, x]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[p, /_/g, " "], [v, "Xiaomi"], [m, x]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[p, /_/g, " "], [v, "Xiaomi"], [m, T]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [p, [v, "Meizu"], [m, T]], [/(mz)-([\w-]{2,})/i], [[v, "Meizu"], p, [m, x]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [p, [v, "OnePlus"], [m, x]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [p, [v, "RCA"], [m, T]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [p, [v, "Dell"], [m, T]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [p, [v, "Verizon"], [m, T]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[v, "Barnes & Noble"], p, [m, T]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [p, [v, "NuVision"], [m, T]], [/android.+;\s(k88)\sbuild/i], [p, [v, "ZTE"], [m, T]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [p, [v, "Swiss"], [m, x]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [p, [v, "Swiss"], [m, T]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [p, [v, "Zeki"], [m, T]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[v, "Dragon Touch"], p, [m, T]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [p, [v, "Insignia"], [m, T]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [p, [v, "NextBook"], [m, T]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[v, "Voice"], p, [m, x]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[v, "LvTel"], p, [m, x]], [/android.+;\s(PH-1)\s/i], [p, [v, "Essential"], [m, x]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [p, [v, "Envizen"], [m, T]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [v, p, [m, T]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [p, [v, "MachSpeed"], [m, T]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [v, p, [m, T]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [p, [v, "Rotor"], [m, T]], [/android.+(KS(.+))\s+build/i], [p, [v, "Amazon"], [m, T]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [v, p, [m, T]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[m, C.lowerize], v, p], [/[\s\/\(](smart-?tv)[;\)]/i], [[m, S]], [/(android[\w\.\s\-]{0,9});.+build/i], [p, [v, "Generic"]]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [y, [g, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)/i], [[g, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [g, y], [/rv\:([\w\.]{1,9}).+(gecko)/i], [y, g]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [g, y], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [g, [y, _.str, L.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[g, "Windows"], [y, _.str, L.os.windows.version]], [/\((bb)(10);/i], [[g, "BlackBerry"], y], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [g, y], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[g, "Symbian"], y], [/\((series40);/i], [g], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[g, "Firefox OS"], y], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [g, y], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[g, "Chromium OS"], y], [/(sunos)\s?([\w\.\d]*)/i], [[g, "Solaris"], y], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [g, y], [/(haiku)\s(\w+)/i], [g, y], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[y, /_/g, "."], [g, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[g, "Mac OS"], [y, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [g, y]]
            },
            R = function(t, e) {
                if ("object" == typeof t && (e = t, t = r), !(this instanceof R)) return new R(t, e).getResult();
                var n = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent: a),
                i = e ? C.extend(D, e) : D;
                return this.getBrowser = function() {
                    var t = {
                        name: r,
                        version: r
                    };
                    return _.rgx.call(t, n, i.browser),
                    t.major = C.major(t.version),
                    t
                },
                this.getCPU = function() {
                    var t = {
                        architecture: r
                    };
                    return _.rgx.call(t, n, i.cpu),
                    t
                },
                this.getDevice = function() {
                    var t = {
                        vendor: r,
                        model: r,
                        type: r
                    };
                    return _.rgx.call(t, n, i.device),
                    t
                },
                this.getEngine = function() {
                    var t = {
                        name: r,
                        version: r
                    };
                    return _.rgx.call(t, n, i.engine),
                    t
                },
                this.getOS = function() {
                    var t = {
                        name: r,
                        version: r
                    };
                    return _.rgx.call(t, n, i.os),
                    t
                },
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                },
                this.getUA = function() {
                    return n
                },
                this.setUA = function(t) {
                    return n = t,
                    this
                },
                this
            };
            R.VERSION = s,
            R.BROWSER = {
                NAME: g,
                MAJOR: f,
                VERSION: y
            },
            R.CPU = {
                ARCHITECTURE: w
            },
            R.DEVICE = {
                MODEL: p,
                VENDOR: v,
                TYPE: m,
                CONSOLE: b,
                MOBILE: x,
                SMARTTV: S,
                TABLET: T,
                WEARABLE: E,
                EMBEDDED: k
            },
            R.ENGINE = {
                NAME: g,
                VERSION: y
            },
            R.OS = {
                NAME: g,
                VERSION: y
            },
            typeof e !== u ? (typeof t !== u && t.exports && (e = t.exports = R), e.UAParser = R) : "function" === l && n("2tW8") ? (i = function() {
                return R
            }.call(e, n, e, t), !(i !== r && (t.exports = i))) : o && (o.UAParser = R);
            var A = o && (o.jQuery || o.Zepto);
            if (typeof A !== u && !A.ua) {
                var N = new R;
                A.ua = N.getResult(),
                A.ua.get = function() {
                    return N.getUA()
                },
                A.ua.set = function(t) {
                    N.setUA(t);
                    var e = N.getResult();
                    for (var n in e) A.ua[n] = e[n]
                }
            }
        } ("object" == typeof window ? window: this)
    },
    "2tW8": function(t, e) { (function(e) {
            t.exports = e
        }).call(e, {})
    },
    Uzku: function(t, e) {
        function n(t) {
            this.inputElem = $(t.input),
            this.suggestList = $(t.suggest),
            this.init()
        }
        n.prototype = {
            suggestSuffix: ["qq.com", "gmail.com", "126.com", "163.com", "hotmail.com", "263.com", "21cn.com", "yahoo.com", "yahoo.com.cn", "live.com", "sohu.com", "sina.com", "sina.com.cn"],
            canSuggest: function(t) {
                for (var e = 0; e < this.suggestSuffix.length; e++) {
                    if (0 == this.suggestSuffix[e].indexOf(t) && this.suggestSuffix[e] != t) return ! 0;
                    if (this.suggestSuffix[e] == t) return ! 1
                }
                return ! 1
            },
            init: function() {
                this.bindEvent()
            },
            getInputVal: function() {
                return $.trim(this.inputElem.val())
            },
            updateSuggestList: function() {
                var t = this.getInputVal(),
                e = t.split("@");
                if (e.length > 2) return void this.hideSuggest();
                var n = this.suggestSuffix.slice();
                if (1 == e.length) return void this.hideSuggest();
                if (!this.canSuggest(e[1]) || "" == e[0]) return void this.hideSuggest();
                if (t = e[0] + "@", "" != e[1]) for (var i = n.length - 1; i >= 0; i--) 0 == !n[i].indexOf(e[1]) && n.splice(i, 1);
                for (var o = [], i = 0; i < n.length; i++) o.push('<li><a class="tip">' + this.htmlEncode(t) + n[i] + "</a></li>");
                this.suggestList.html(o.join("")),
                this.showSuggest()
            },
            showSuggest: function() {
                this.suggestList.show()
            },
            hideSuggest: function() {
                this.suggestList.hide()
            },
            switchSuggestList: function(t) {
                if (this.suggestList.is(":visible")) {
                    var e = this.suggestList.find("li.tip-hover").index() || 0,
                    n = this.suggestList.find("li").length;
                    "down" == t ? e == n - 1 ? e = 0 : e++:"up" == t && (0 == e ? e = n - 1 : e--),
                    this.suggestList.find("li").eq(e).addClass("tip-hover").siblings().removeClass("tip-hover"),
                    this.inputElem.val(this.suggestList.find("li").eq(e).text())
                }
            },
            suggestEnterHandle: function() {
                var t = this.suggestList.find("li.tip-hover");
                t.length && this.inputElem.val(t.text()),
                this.hideSuggest()
            },
            suggestClickHandle: function(t) {
                var e = $(t.target);
                this.inputElem.val(e.text()),
                this.hideSuggest()
            },
            htmlEncode: function(t) {
                var e = "";
                return null == t || "undefined" == typeof t || 0 == t.length ? "": (e = t.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/ /g, "&nbsp;"), e = e.replace(/\'/g, "'"), e = e.replace(/\"/g, "&quot;"), e = e.replace(/\n/g, "<br>"))
            },
            bindEvent: function() {
                var t = this;
                this.inputElem.off("keyup.loginInput focus.loginInput keydown.loginInput blur.loginInput").on("keyup.loginInput focus.loginInput",
                function(e) {
                    var n = e.which || e.keyCode;
                    switch (n) {
                    case 38:
                        return ! 1;
                    case 40:
                        return
                    }
                    var i = t.getInputVal();
                    t.htmlEncode(i) != i ? t.hideSuggest() : i.length > 0 && i.length < 30 && i.split("@").length <= 2 ? t.updateSuggestList() : t.hideSuggest()
                }).on("keydown.loginInput",
                function(e) {
                    var n = e.which || e.keyCode;
                    switch (n) {
                    case 27:
                        return void t.hideSuggest();
                    case 38:
                        return t.switchSuggestList("up"),
                        !1;
                    case 40:
                        return void t.switchSuggestList("down");
                    case 13:
                        return void t.suggestEnterHandle()
                    }
                }).on("blur.loginInput",
                function() {
                    t.hideSuggest()
                }),
                this.suggestList.off().on("mousedown", "li",
                function(e) {
                    t.suggestClickHandle(e)
                })
            }
        },
        t.exports = n
    },
    N7Fw: function(t, e, n) {
        var i, o; !
        function(r, s) {
            "use strict";
            i = s,
            o = "function" == typeof i ? i.call(e, n, e, t) : i,
            !(void 0 !== o && (t.exports = o))
        } (this,
        function() {
            var t = 14603328e5,
            e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            n = 62,
            i = function(t, e) {
                return (t + e).slice( - t.length)
            },
            o = function(t) {
                this._opt = t || {}
            };
            return o.prototype = {
                _toBase: function(t, n) {
                    var i = this._opt,
                    o = i.symbols || e,
                    r = "";
                    if (n > o.length || n <= 1) return ! 1;
                    for (; t >= 1;) r = o[t - n * Math.floor(t / n)] + r,
                    t = Math.floor(t / n);
                    return n < 11 ? parseInt(r) : r
                },
                _salts: function() {
                    for (var t = this,
                    e = t._opt,
                    o = e.salts || 2,
                    r = "",
                    s = 0; s < o; s++) {
                        var a = Math.floor(3844 * Math.random());
                        r += i("00", t._toBase(a, n))
                    }
                    return r
                },
                gen: function() {
                    var e = this,
                    i = e._opt,
                    o = i.interval || 1,
                    r = i.initTime || t,
                    s = o > 0 ? Math.floor(((new Date).getTime() - r) / o) : 0,
                    a = e._salts();
                    return 0 === s ? a: e._toBase(s, n) + a
                }
            },
            {
                inst: function(t) {
                    return new o(t)
                },
                gen: function(t) {
                    return new o(t).gen()
                },
                uuid: function() {
                    return new o({
                        salts: 4
                    }).gen()
                }
            }
        })
    },
    wohU: function(t, e, n) {
        var i = n("sdDX"),
        o = (n("M34W"), n("3but").getCDNDomain()),
        r = {
            config: function(t) {
                this.options = t || {}
            },
            inited: !1,
            init: function() {
                return this.inited ? this: (this.inited = !0, this.$guideWrapper = $(".J-deviceNotSupportGuide"), this.$guideWrapper.length ? (this.$title = this.$guideWrapper.find(".J-title"), this.$detail = this.$guideWrapper.find(".J-detail"), this.$copyUrlContent = this.$guideWrapper.find(".J-copyUrlContent"), this.$copyUrlBtn = this.$guideWrapper.find(".J-copyUrlBtn"), this.$qqBtn = this.$guideWrapper.find(".J-qqBtn"), this.$wxBtn = this.$guideWrapper.find(".J-wxBtn"), this.$emailBtn = this.$guideWrapper.find(".J-emailBtn"), this.$copyTip = this.$guideWrapper.find(".J-copyTip"), this.bindEvents(), this.bindCopyEvent(), this.$copyUrlContent.html(i.htmlEncode(location.href)), this) : void 0)
            },
            bindEvents: function() {
                var t = this;
                this.$qqBtn.off("click").on("click",
                function() {
                    t.hide(),
                    t.options.switchToQQ()
                }),
                this.$wxBtn.off("click").on("click",
                function() {
                    t.hide(),
                    t.options.switchToWX()
                }),
                this.$emailBtn.off("click").on("click",
                function() {
                    t.hide(),
                    t.options.switchToEmail()
                })
            },
            isIpad: function() {
                var t = navigator.userAgent || "";
                return /ipad/i.test(t)
            },
            isSupportWxOauth: function() {
                return null == window.G_isSupportWxOauth || window.G_isSupportWxOauth
            },
            isSupportQQOauth: function() {
                return null == window.G_isSupportQQOauth || window.G_isSupportQQOauth
            },
            showWxNotSupportGuide: function() {
                return this.init(),
                this.$guideWrapper.length ? (this.$wxBtn.hide(), this.$copyTip.hide(), this.isSupportQQOauth() ? this.$qqBtn.show() : this.$qqBtn.hide(), this.$title.html("\u5fae\u4fe1\u5feb\u901f\u767b\u5f55\u5931\u8d25"), this.isIpad() ? this.$detail.html("\u5f53\u524d\u5e94\u7528\u4e0d\u652f\u6301\u5fae\u4fe1\u5feb\u901f\u767b\u5f55\uff0c\u8bf7\u4f7f\u7528Safari\u3001UC\u6216\u5728\u5fae\u4fe1\u5185\u6253\u5f00\u9875\u9762\u6216\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u8fdb\u884c\u767b\u5f55\u3002") : this.$detail.html("\u5f53\u524d\u5e94\u7528\u4e0d\u652f\u6301\u5fae\u4fe1\u5feb\u901f\u767b\u5f55\uff0c\u8bf7\u4f7f\u7528Safari\u3001UC\u3001QQ\u6d4f\u89c8\u5668\u6216\u5728\u5fae\u4fe1\u5185\u6253\u5f00\u9875\u9762\u6216\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u8fdb\u884c\u767b\u5f55\u3002"), void this.$guideWrapper.show()) : this.options.switchToWX()
            },
            showQQNotSupportGuide: function() {
                return this.init(),
                this.$guideWrapper.length ? (this.$qqBtn.hide(), this.$copyTip.hide(), this.isSupportWxOauth() ? this.$wxBtn.show() : this.$wxBtn.hide(), this.$title.html("QQ\u5feb\u901f\u767b\u5f55\u5931\u8d25"), this.$detail.html("\u5f53\u524d\u5e94\u7528\u4e0d\u652f\u6301QQ\u5feb\u901f\u767b\u5f55\uff0c\u8bf7\u4f7f\u7528Safari\u3001Chrome\u3001QQ\u6d4f\u89c8\u5668\u6216\u5728QQ\u5185\u6253\u5f00\u9875\u9762\u6216\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u8fdb\u884c\u767b\u5f55\u3002"), void this.$guideWrapper.show()) : this.options.switchToQQ()
            },
            hide: function() {
                this.$guideWrapper && this.$guideWrapper.hide()
            },
            bindCopyEvent: function() {
                var t = this,
                e = function(t) {
                    $.getScript("https://" + o + "/qcloud/main/scripts/release/common/vendors/clipboard.min.js",
                    function() {
                        setTimeout(function() {
                            t()
                        },
                        200)
                    })
                };
                e(function() {
                    if (window.Clipboard) try {
                        var e = new Clipboard(t.$copyUrlBtn[0], {
                            text: function() {
                                return location.href
                            }
                        });
                        e.on("success",
                        function(e) {
                            t.$copyTip.html('<i class="oab-global-tips-icon success"></i> <span>\u590d\u5236\u6210\u529f</span>').fadeIn(),
                            setTimeout(function() {
                                t.$copyTip.fadeOut()
                            },
                            3e3)
                        }),
                        e.on("error",
                        function(e) {
                            t.$copyTip.html('<i class="oab-global-tips-icon error"></i> <span>\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u4e00\u952e\u590d\u5236\uff0c\u8bf7\u957f\u6309\u590d\u5236\u5185\u5bb9\uff1a' + i.htmlEncode(location.href) + "</span>").fadeIn()
                        })
                    } catch(t) {}
                })
            }
        };
        t.exports = r
    },
    AxIY: function(t, e, n) {
        function i(t, e) {
            function n() {
                l = l.onload = l.onerror = null
            }
            var i = a[r];
            if (i && t) {
                var o = [];
                for (var c in t) o.push(c + "=" + (t[c] || ""));
                i = "https://" + i + s + "?" + o.join("&");
                var l = new Image;
                e || (e = $.noop),
                l.onerror = function(t) {
                    e(new Error("Cgi error")),
                    n()
                },
                l.onload = function(t) {
                    e(),
                    n()
                },
                l.src = i
            }
        }
        var o = n("YHhD"),
        r = location.hostname,
        s = "/services/sync/cookie",
        a = {
            "cloud.tencent.com": "www.qcloud.com",
            "www.qcloud.com": "cloud.tencent.com",
            "intl.cloud.tencent.com": "www.qcloud.com"
        };
        t.exports = {
            syncCookie: i,
            get: function(t) {
                return o.get(t)
            },
            set: function(t, e, n) {
                if (n || (n = {}), n.domain || (r.indexOf("cloud.tencent.com") != -1 ? n.domain = ".cloud.tencent.com": "www.qcloud.com" === r && (n.domain = ".qcloud.com")), n.path || (n.path = "/"), n.sync) {
                    var s = {};
                    s[t] = e,
                    i(s, n.syncCallback)
                }
                return o.set(t, e, n)
            },
            remove: function(t, e) {
                if (e || (e = {}), e.domain || (r.indexOf("cloud.tencent.com") != -1 ? e.domain = ".cloud.tencent.com": "www.qcloud.com" === r && (e.domain = ".qcloud.com")), e.path || (e.path = "/"), e.sync) {
                    var n = {};
                    n[t] = "",
                    i(n)
                }
                return o.remove(t, e)
            }
        }
    },
    YHhD: function(t, e, n) {
        function i(t) {
            return s.get(t)
        }
        function o(t, e, n) {
            return s.set(t, e, n)
        }
        function r(t, e) {
            return s.remove(t, e)
        }
        var s = n("WPtr"),
        a = {
            getCookie: i,
            setCookie: function(t, e, n, i, r, s) {
                return o(t, e, {
                    expires: parseInt(n) / 60 * 24,
                    path: i,
                    domain: r,
                    secure: s
                })
            },
            delCookie: function(t, e, n, i) {
                return r(t, {
                    path: e,
                    domain: n,
                    secure: i
                })
            },
            get: i,
            set: o,
            remove: r
        };
        t.exports = a
    },
    z9sE: function(t, e, n) {
        var i = n("AxIY"),
        o = {
            init: function() {
                return this.bindEvents(),
                this
            },
            bindEvents: function() {
                $(".J-loginLanguage a").on("click",
                function() {
                    $(this).hasClass("current") || ($(this).hasClass("en") ? i.set("language", "en", {
                        sync: !0,
                        syncCallback: function() {
                            location.reload()
                        }
                    }) : i.set("language", "", {
                        sync: !0,
                        syncCallback: function() {
                            location.reload()
                        }
                    }), setTimeout(function() {
                        location.reload()
                    },
                    5e3))
                })
            }
        };
        t.exports = o.init()
    },
    rCGI: function(t, e) {
        t.exports = {
            "\u767b\u5f55": "Sign In",
            "\u90ae\u7bb1": "Email",
            "\u90ae\u7bb1\u767b\u5f55": "Sign In with Email",
            "\u90ae\u7bb1\u624b\u673a\u767b\u5f55": "Email/Phone",
            "QQ\u767b\u5f55": "Sign In with QQ",
            "\u5fae\u4fe1\u767b\u5f55": "Sign In with WeChat",
            "\u90ae\u7bb1\u5730\u5740": "Email address",
            "\u90ae\u7bb1\u5730\u5740/\u624b\u673a\u53f7\u7801": "Email address or Phone number",
            "\u90ae\u7bb1\u5730\u5740/DNSPod\u8d26\u53f7": "Email address or DNSPod account",
            "\u5bc6\u7801": "Password",
            "\u9a8c\u8bc1\u7801": "Verifiy Code",
            "\u5fd8\u8bb0\u5bc6\u7801": "Forgot password",
            "\u5fd8\u8bb0\u5bc6\u7801\uff1f": "Forgot password?",
            "\u767b \u5f55": "Sign In",
            "\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f": "No account ?",
            "\u7acb\u5373\u6ce8\u518c": "Sign up now",
            "\u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165": "Param error,Please enter again",
            "\u8d26\u53f7\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165": "Account does not exist or password error , please re-enter",
            "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165": "Verification code error. Please enter again",
            "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5": "Login failed. Please enter again",
            "\u8bf7\u8f93\u5165\u90ae\u7bb1": "Please enter email",
            "\u8bf7\u8f93\u5165\u90ae\u7bb1\u6216\u8005\u624b\u673a\u53f7\u7801": "Please enter email or phone number",
            "\u8bf7\u8f93\u5165\u5bc6\u7801": "Please enter your password",
            "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801": "Please enter the verification code",
            "\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8fbe\u5230\u4e0a\u9650\uff0c\u5f53\u65e5\u4e0d\u53ef\u767b\u5f55": "Too many password errors today , to ensure account security , please try tomorrow",
            "\u5fae\u4fe1\u516c\u4f17\u53f7": "WeChat OA",
            "\u5fae\u4fe1\u8d26\u53f7": "WeChat",
            "QQ\u8d26\u53f7": "QQ",
            "\u90ae\u7bb1\u8d26\u53f7": "Email",
            "\u767b\u5f55\u817e\u8baf\u4e91": "Sign in Tencent Cloud",
            "\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f": "More",
            "\u4f7f\u7528\u90ae\u7bb1\u8d26\u53f7\u767b\u5f55": "Sign in using your email account",
            "\u8bf7\u4f7f\u7528\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\u767b\u5f55": "Scan QR-code in WeChat to login",
            "\u201c\u817e\u8baf\u4e91\u201d": '"Tencent Cloud"',
            "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1": "Please enter a correct email",
            "\u90ae\u7bb1\u683c\u5f0f\u6709\u8bef\uff0c\u8bf7\u4fee\u6539": "Email format error , please re-edit",
            "\u8be5\u8d26\u53f7\u5c5e\u4e8e\u56fd\u9645\u7ad9\u8d26\u53f7\uff0c": "Your account is for Tencent Cloud International\uff0c",
            "\u524d\u5f80\u767b\u5f55": "Log in now",
            "\u952e\u76d8\u5927\u5199\u9501\u5b9a\u5df2\u6253\u5f00\uff0c\u8bf7\u6ce8\u610f": "CapsLock On",
            "\u5feb\u6377\u767b\u5f55": "More",
            "\u5fd8\u8bb0\u8d26\u53f7\u6216\u5bc6\u7801\uff1f": "Forgot account or password?",
            '\u8be5\u8d26\u53f7\u53ef\u80fd\u662f\u901a\u8fc7QQ\u5feb\u6377\u6ce8\u518c\uff0c\u8bf7<a href="javascript:;" class="J-switchQQLogin">\u5207\u6362\u81f3QQ\u767b\u5f55<a/>': 'Your account was signed in with QQ , please <a href="javascript:;" class="J-switchQQLogin">switch to QQ  login window</a>',
            "\u8fd8\u6ca1\u6709\u6ce8\u518c\u817e\u8baf\u4e91\u8d26\u53f7\uff1f": "No account ?",
            "\u5fd8\u8bb0\u8d26\u53f7": "Forgot account",
            "\u8fd4\u56de\u817e\u8baf\u4e91\u767b\u5f55": "Back to Tencent Cloud login",
            "\u6b64\u90ae\u7bb1\u5730\u5740\u5c1a\u672a\u6fc0\u6d3b\uff0c\u8bf7\u67e5\u770b\u6fc0\u6d3b\u90ae\u4ef6\uff0c\u5b8c\u6210\u6fc0\u6d3b\u540e\u91cd\u65b0\u767b\u5f55\u3002": "This email account has not been activated on Tencent Cloud. Please check your email to activate it and log in again.",
            '\u6b64\u90ae\u7bb1\u5730\u5740\u5c1a\u672a\u6fc0\u6d3b\uff0c\u8bf7<a target="_blank">\u67e5\u770b\u6fc0\u6d3b\u90ae\u4ef6<a/>\uff0c\u5b8c\u6210\u6fc0\u6d3b\u540e\u91cd\u65b0\u767b\u5f55\u3002': 'This email account has not been activated on Tencent Cloud. Please <a target="_blank">check your email</a> to activate it and log in again.',
            "\u5207\u6362\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f": "Log in via other methods",
            "\u5fae\u4fe1\u626b\u7801\u767b\u5f55": "Sign In with WeChat",
            "\u53bb\u5fae\u4fe1\u6388\u6743": "Authorize on WeChat",
            "\u4f7f\u7528\u5fae\u4fe1\u767b\u5f55": "Sign In with WeChat",
            "\u5b50\u7528\u6237\u767b\u5f55": "CAM user sign in",
            "\u5df2\u767b\u5f55\u8d26\u53f7": "Signed in account",
            "\u5feb\u901f\u767b\u5f55": "Quick Login",
            "\u767b\u5f55\u5176\u4ed6\u8d26\u53f7": "Log in to another account",
            "\u8d26\u53f7": "The account",
            "\u5df2\u767b\u5f55\uff0c\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u767b\u5f55\u7ee7\u7eed\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u8d26\u53f7\u767b\u5f55": "is logged in. You can choose to log in directly to continue using it, or you can log in with another account.",
            '\u8d26\u53f7\u5bc6\u7801\u8f93\u5165\u5f53\u65e5\u4ec5\u52691\u6b21\u673a\u4f1a\uff0c\u662f\u5426 <a class="J-forgetPsw" href="javascript:;">\u5fd8\u8bb0\u5bc6\u7801</a> \u6216 <a class="J-forgetAccount" href="javascript:;">\u5fd8\u8bb0\u8d26\u53f7</a>': 'Only 1 chance left to input account and password today. <a class="J-forgetPsw" href="javascript:;">Forget password</a> or <a class="J-forgetAccount" href="javascript:;">forget account</a>?',
            '\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8d85\u8fc7\u5f53\u65e5\u6700\u5927\u6b21\u6570\uff0c\u5efa\u8bae\u60a8\u901a\u8fc7 <a class="J-forgetPsw" href="javascript:;">\u5fd8\u8bb0\u5bc6\u7801</a> \u6216 <a class="J-forgetAccount" href="javascript:;">\u5fd8\u8bb0\u8d26\u53f7</a> \u627e\u56de\u8d26\u53f7\u5bc6\u7801\uff0c\u6b21\u65e5\u518d\u5c1d\u8bd5\u767b\u5f55': 'Account and password errors exceed the maximum number today. <a class="J-forgetPsw" href="javascript:;">Forget password</a> or <a class="J-forgetAccount" href="javascript:;">forget account</a>?',
            "\u8bf7\u4f7f\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u767b\u5f55": "Scan code with WeChat to log in",
            "\u5237\u65b0": "Refresh"
        }
    }
});