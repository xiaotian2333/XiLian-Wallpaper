/*! For license information please see styles_3cd2088de947e480774d.js.LICENSE.txt */
"use strict";
(self.webpackChunke20260114invite = self.webpackChunke20260114invite || []).push([
    [869], {
        2388: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return s
                }
            });
            var r = n(74061),
                i = n(73837),
                o = n(23091),
                a = (0, r.defineComponent)({
                    __name: "index",
                    props: {
                        id: {
                            type: Number,
                            default: 0
                        },
                        isRecord: {
                            type: Boolean,
                            default: !1
                        },
                        level: {
                            type: Number,
                            default: 1
                        }
                    },
                    setup: function(t) {
                        var e = t,
                            a = (0, o.s)(),
                            s = (0, r.computed)(function() {
                                try {
                                    return JSON.parse(a.$getI18nWord("award-num-map"))
                                } catch (t) {
                                    return {}
                                }
                            }),
                            c = (0, r.computed)(function() {
                                return s.value[e.id]
                            }),
                            l = {
                                1: 1,
                                2: 2,
                                4: 3,
                                8: 4
                            },
                            u = (0, r.computed)(function() {
                                if (e.id) {
                                    if (e.isRecord) {
                                        var t = l[e.level];
                                        return n(93710)("./award-".concat(e.id, "-level").concat(t, ".png"))
                                    }
                                    return n(93710)("./award-".concat(e.id, ".png"))
                                }
                            });
                        return {
                            __sfc: !0,
                            ins: a,
                            props: e,
                            NUM_MAP: s,
                            curNum: c,
                            levelMap: l,
                            curIcon: u,
                            handleNum: i.LD
                        }
                    }
                }),
                s = (0, n(14486).A)(a, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e("mi-images", {
                        staticClass: "award_icon",
                        attrs: {
                            src: n.curIcon
                        }
                    }, [e("div", {
                        staticClass: "num",
                        class: {
                            isRecord: t.isRecord
                        }
                    }, [t._v(t._s(n.handleNum(n.curNum)))])])
                }, [], !1, null, "37533cbf", null).exports
        },
        10303: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return s
                }
            });
            var r = n(74061),
                i = n(2388),
                o = n(62509),
                a = (0, r.defineComponent)({
                    __name: "index",
                    props: {
                        id: {
                            type: Number,
                            default: 1001
                        },
                        selectId: {
                            type: Number,
                            default: 0
                        }
                    },
                    setup: function(t) {
                        var e = t,
                            n = (0, r.getCurrentInstance)().proxy,
                            a = (0, r.ref)(null);
                        return (0, r.onMounted)(function() {
                            var t;
                            null === (t = a.value) || void 0 === t || t.refresh(), n.$trackEvent("popup", "view", "claim_coin", "", {
                                page: 0 === e.selectId ? "task" : "invite"
                            })
                        }), {
                            __sfc: !0,
                            props: e,
                            that: n,
                            vueScrollDom: a,
                            close: function() {
                                n.$emit("close"), n.$trackEvent("popup", "click", "confirm", "", {
                                    page: 0 === e.selectId ? "task" : "invite"
                                })
                            },
                            awardIcon: i.A,
                            SHARE_TASK_ID: o.yQ
                        }
                    }
                }),
                s = (0, n(14486).A)(a, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "modal_comp common-font"
                    }, [e("hover-btn", {
                        staticClass: "modal_close",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.close
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "modal_title"
                    }, [t._v(t._s(t.$getI18nWord("model-award")))]), t._v(" "), e("div", {
                        staticClass: "modal_icon"
                    }, [t.id === r.SHARE_TASK_ID ? e(r.awardIcon, {
                        staticClass: "modal_award",
                        attrs: {
                            id: 10002
                        }
                    }) : t._e(), t._v(" "), e(r.awardIcon, {
                        staticClass: "modal_award",
                        attrs: {
                            id: t.id
                        }
                    })], 1), t._v(" "), e("div", {
                        staticClass: "modal_name"
                    }, [t._v(t._s(t.$getI18nWord("task-".concat(t.id, "-name"))))]), t._v(" "), e("hover-btn", {
                        staticClass: "modal_btn",
                        attrs: {
                            img: n(27334),
                            imgHover: n(66363)
                        },
                        on: {
                            click: r.close
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("model-confrim")) + "\n  ")])], 1)
                }, [], !1, null, "9b987b44", null).exports
        },
        14164: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return Ft
                }
            });
            var r = n(74061),
                i = n(25987),
                o = n(23091),
                a = n(74681),
                s = n(72444),
                c = n(82937),
                l = n(62509),
                u = n(51849),
                v = n(10033);

            function d() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return f(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (f(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function p(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, f(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, f(v, "constructor", l), f(l, "constructor", c), c.displayName = "GeneratorFunction", f(l, i, "GeneratorFunction"), f(v), f(v, i, "Generator"), f(v, r, function() {
                    return this
                }), f(v, "toString", function() {
                    return "[object Generator]"
                }), (d = function() {
                    return {
                        w: o,
                        m: p
                    }
                })()
            }

            function f(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                f = function(t, e, n, r) {
                    function o(e, n) {
                        f(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, f(t, e, n, r)
            }

            function p(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            var _ = (0, r.defineComponent)({
                    __name: "effect",
                    setup: function(t) {
                        var e = (0, c.D)().callInsApiByHide,
                            n = (0, o.s)(),
                            f = (0, c.D)(),
                            _ = (0, u.bP)((0, v.s)()),
                            m = _.curPage,
                            g = _.disable,
                            h = _.gachaTransition,
                            y = (0, r.ref)(new Date),
                            b = function() {
                                var t, r = (t = d().m(function t() {
                                    var r;
                                    return d().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                n.$effectPlayer.play(l.qA.Loading_End), r = (new Date).getTime() - y.value.getTime(), n.$trackEvent("page", "loading", "loading", r / 1e3), e(l.bz.INDEX), n.$trackEvent("session", "visit", "main", "", {
                                                    page: "main"
                                                }), setTimeout(function() {
                                                    n.$effectPlayer.play(l.qA.Whoosh_FadeIn)
                                                }, 2e3);
                                            case 1:
                                                return t.a(2)
                                        }
                                    }, t)
                                }), function() {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function(r, i) {
                                        var o = t.apply(e, n);

                                        function a(t) {
                                            p(o, r, i, a, s, "next", t)
                                        }

                                        function s(t) {
                                            p(o, r, i, a, s, "throw", t)
                                        }
                                        a(void 0)
                                    })
                                });
                                return function() {
                                    return r.apply(this, arguments)
                                }
                            }(),
                            k = (0, r.ref)(0);
                        return {
                            __sfc: !0,
                            callInsApiByHide: e,
                            app: n,
                            aniStore: f,
                            curPage: m,
                            disable: g,
                            gachaTransition: h,
                            date: y,
                            handleAniFinish: function() {
                                y.value = new Date, f.setIns(n.$refs.effect), n.$effectPlayer.play(l.qA.Loading_Start)
                            },
                            handleMainFinish: b,
                            loadingNum: k,
                            handleLoading: function(t) {
                                k.value = t
                            },
                            gachaTransitionEnd: function() {
                                h.value = !0
                            },
                            effectComp: i.A,
                            IS_SEA: a.p4,
                            showAniErr: s.A,
                            PAGES: l.Nb
                        }
                    }
                }),
                m = _,
                g = n(14486),
                h = (0, g.A)(m, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e("div", {
                        staticClass: "effect_comp"
                    }, [e(n.effectComp, t._g(t._b({
                        directives: [{
                            name: "append-to-element",
                            rawName: "v-append-to-element",
                            value: "#canvas-bg",
                            expression: "'#canvas-bg'"
                        }],
                        ref: "effect",
                        attrs: {
                            width: t.$frame.canvasStateToLayout.width,
                            height: t.$frame.canvasStateToLayout.height,
                            rotate: t.$frame.env.rotate,
                            isSea: n.IS_SEA,
                            disable: n.disable
                        },
                        on: {
                            prepareLoadingComplete: n.handleAniFinish,
                            loadingComplete: n.handleMainFinish,
                            webglError: function(t) {
                                return n.showAniErr("webglErr")
                            },
                            loadError: function(t) {
                                return n.showAniErr("loadErr")
                            },
                            gpuAccDisable: function(t) {
                                return n.showAniErr("gpuAccDisable")
                            },
                            loading: n.handleLoading,
                            gachaTransitionEnd: n.gachaTransitionEnd
                        }
                    }, "effectComp", t.$attrs, !1), t.$listeners)), t._v(" "), n.curPage === n.PAGES.Loading ? e("div", {
                        staticClass: "loading_num"
                    }, [t._v("\n    " + t._s(t.$getI18nWord({
                        key: "loading-progress",
                        data: {
                            num: Math.floor(n.loadingNum)
                        }
                    })) + "\n  ")]) : t._e(), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: n.curPage === n.PAGES.Loading,
                            expression: "curPage === PAGES.Loading"
                        }],
                        staticClass: "loading_text",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("loading_text"))
                        }
                    })], 1)
                }, [], !1, null, "22b9e58e", null).exports,
                y = n(44467),
                b = n(73837),
                k = (0, r.defineComponent)({
                    __name: "index",
                    props: {
                        type: {
                            type: String,
                            default: "common"
                        }
                    },
                    setup: function(t) {
                        var e = (0, b.Dp)({
                                rail: {
                                    background: "#C9D6FF"
                                },
                                bar: {
                                    background: "#A1B6FF"
                                }
                            }),
                            n = (0, r.getCurrentInstance)().proxy,
                            i = (0, r.ref)(null);
                        return (0, r.onMounted)(function() {
                            var t;
                            null === (t = i.value) || void 0 === t || t.refresh()
                        }), {
                            __sfc: !0,
                            SCROLL_OPS: e,
                            that: n,
                            vueScrollDom: i,
                            close: function() {
                                n.$emit("close")
                            }
                        }
                    }
                }),
                w = (0, g.A)(k, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "rule_comp common-font"
                    }, [e("div", {
                        staticClass: "rule_title"
                    }, [e("div", {
                        staticClass: "icon"
                    }), t._v("\n    " + t._s(t.$getI18nWord("rule-title-text")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "rule_close",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.close
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "rule_list"
                    }, [e("meScroll", {
                        ref: "vueScrollDom",
                        attrs: {
                            ops: r.SCROLL_OPS
                        }
                    }, [e("div", {
                        staticClass: "rule_content",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("rule-content"))
                        }
                    })])], 1)], 1)
                }, [], !1, null, "7bf419b8", null).exports,
                C = n(74353),
                I = n.n(C);

            function S() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return P(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (P(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, P(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, P(v, "constructor", l), P(l, "constructor", c), c.displayName = "GeneratorFunction", P(l, i, "GeneratorFunction"), P(v), P(v, i, "Generator"), P(v, r, function() {
                    return this
                }), P(v, "toString", function() {
                    return "[object Generator]"
                }), (S = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function P(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                P = function(t, e, n, r) {
                    function o(e, n) {
                        P(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, P(t, e, n, r)
            }

            function $(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            var T = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, o.s)(),
                            n = (0, r.ref)(0),
                            i = (0, u.bP)((0, v.s)()),
                            a = i.coinList,
                            s = i.lotteryList,
                            c = (0, b.Dp)({
                                rail: {
                                    background: "#C9D6FF"
                                },
                                bar: {
                                    background: "#A1B6FF"
                                }
                            }),
                            l = function() {
                                var t, r = (t = S().m(function t(r) {
                                    var i;
                                    return S().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                return n.value = r, t.n = 1, e.$nextTick();
                                            case 1:
                                                null === (i = f.value) || void 0 === i || i.refresh();
                                            case 2:
                                                return t.a(2)
                                        }
                                    }, t)
                                }), function() {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function(r, i) {
                                        var o = t.apply(e, n);

                                        function a(t) {
                                            $(o, r, i, a, s, "next", t)
                                        }

                                        function s(t) {
                                            $(o, r, i, a, s, "throw", t)
                                        }
                                        a(void 0)
                                    })
                                });
                                return function(t) {
                                    return r.apply(this, arguments)
                                }
                            }(),
                            d = (0, r.getCurrentInstance)().proxy,
                            f = (0, r.ref)(null);
                        return (0, r.onMounted)(function() {
                            var t;
                            null === (t = f.value) || void 0 === t || t.refresh()
                        }), {
                            __sfc: !0,
                            ins: e,
                            selectId: n,
                            coinList: a,
                            lotteryList: s,
                            SCROLL_OPS: c,
                            CoinMap: {
                                CoinSource_Task_Page: 1001,
                                CoinSource_Task_Share: 1002,
                                CoinSource_Task_OneDay: 1003,
                                CoinSource_Task_TwoDays: 1004,
                                CoinSource_Task_BackOne: 1005,
                                CoinSource_Task_BackTwo: 1006,
                                CoinSource_Task_BackThree: 1007,
                                CoinSource_Help: 1008,
                                CoinSource_Bind: 1009,
                                CoinSource_UseBind: 1010
                            },
                            handleSelect: l,
                            that: d,
                            vueScrollDom: f,
                            getTime: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
                                return t ? I()(1e3 * t).format(e) : ""
                            },
                            close: function() {
                                d.$emit("close")
                            }
                        }
                    }
                }),
                O = T,
                E = (0, g.A)(O, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "modal_comp common-font"
                    }, [e("hover-btn", {
                        staticClass: "modal_close",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.close
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "modal_nav"
                    }, [e("div", {
                        staticClass: "item",
                        class: {
                            select: 0 === r.selectId
                        },
                        on: {
                            click: function(t) {
                                return r.handleSelect(0)
                            }
                        }
                    }, [t._v("\n      " + t._s(t.$getI18nWord("record-title-1")) + "\n    ")]), t._v(" "), e("div", {
                        staticClass: "item",
                        class: {
                            select: 1 === r.selectId
                        },
                        on: {
                            click: function(t) {
                                return r.handleSelect(1)
                            }
                        }
                    }, [t._v("\n      " + t._s(t.$getI18nWord("record-title-2")) + "\n    ")])]), t._v(" "), e("div", {
                        staticClass: "modal_list"
                    }, [e("meScroll", {
                        ref: "vueScrollDom",
                        attrs: {
                            ops: r.SCROLL_OPS
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 0 === r.selectId,
                            expression: "selectId === 0"
                        }],
                        staticClass: "modal_content"
                    }, t._l(r.coinList, function(n, i) {
                        return e("div", {
                            key: i,
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "item_name",
                            domProps: {
                                innerHTML: t._s("<div>".concat(t.$getI18nWord({
                                    key: "record-task-".concat(r.CoinMap[n.source]),
                                    data: {
                                        nickname: "<span>".concat(n.nickName, "</span>"),
                                        uid: "<span>".concat(n.uid, "</span>")
                                    }
                                }), "</div>"))
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "item_time"
                        }, [t._v(t._s(r.getTime(n.timestamp)))])])
                    }), 0), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 === r.selectId,
                            expression: "selectId === 1"
                        }],
                        staticClass: "modal_content"
                    }, t._l(r.lotteryList, function(i, o) {
                        return e("div", {
                            key: o,
                            staticClass: "record_item"
                        }, [e("mi-images", {
                            staticClass: "line",
                            attrs: {
                                src: n(59035)
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "item_label"
                        }, [t._v("\n            " + t._s(t.$getI18nWord({
                            key: "record-num",
                            data: {
                                num: i.num
                            }
                        })) + "\n          ")]), t._v(" "), t._l(i.reward_id, function(n, o) {
                            return e("div", {
                                key: o,
                                staticClass: "table_item"
                            }, [e("div", {
                                staticClass: "item_name"
                            }, [t._v("\n              " + t._s(t.$getI18nWord("award-".concat(n.originId))) + "\n            ")]), t._v(" "), e("div", {
                                staticClass: "item_time"
                            }, [t._v(t._s(r.getTime(i.timestamp)))])])
                        })], 2)
                    }), 0)])], 1), t._v(" "), 0 !== r.selectId || r.coinList.length ? t._e() : e("div", {
                        staticClass: "modal_empty"
                    }, [t._v("\n    " + t._s(t.$getI18nWord("list-empty")) + "\n  ")]), t._v(" "), 1 !== r.selectId || r.lotteryList.length ? t._e() : e("div", {
                        staticClass: "modal_empty"
                    }, [t._v("\n    " + t._s(t.$getI18nWord("list-empty")) + "\n  ")])], 1)
                }, [], !1, null, "10ee4a76", null),
                A = E.exports,
                L = n(46781),
                x = (0, g.A)({}, function() {
                    var t = this;
                    return (0, t._self._c)("div", {
                        staticClass: "custom-layout",
                        style: {
                            position: "absolute",
                            left: "".concat(-t.$frame.frameStateRem.left, "rem"),
                            right: "".concat(-t.$frame.frameStateRem.left, "rem"),
                            width: "".concat(t.$frame.layoutStateRem.width, "rem")
                        }
                    }, [t._t("default")], 2)
                }, [], !1, null, null, null).exports,
                M = n(1972),
                j = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = [n(22916), n(69706), n(12567), n(74970), n(15241), n(86998), n(24837), n(93631), n(1018), n(80369)],
                            i = (0, o.s)(),
                            a = (0, v.s)();
                        return (0, r.watch)(function() {
                            return a.isBgmPlaying
                        }, function(t) {
                            var e, n;
                            i.$refs.player && (null === (e = (n = i.$refs.player)[t ? "play" : "pause"]) || void 0 === e || e.call(n))
                        }), {
                            __sfc: !0,
                            LITTLE_MUSIC: e,
                            ins: i,
                            store: a,
                            syncPlayStatus: function(t) {
                                a.isBgmPlaying = t
                            },
                            MeAudio: M.Ay
                        }
                    }
                }),
                H = (0, g.A)(j, function() {
                    var t = this._self._c,
                        e = this._self._setupProxy;
                    return t(e.MeAudio, {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        ref: "player",
                        attrs: {
                            src: n(9921),
                            effectSrc: e.LITTLE_MUSIC,
                            volume: .1
                        },
                        on: {
                            played: e.syncPlayStatus
                        }
                    })
                }, [], !1, null, null, null).exports,
                W = n(59571),
                D = n(83923);

            function G() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return B(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (B(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, B(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, B(v, "constructor", l), B(l, "constructor", c), c.displayName = "GeneratorFunction", B(l, i, "GeneratorFunction"), B(v), B(v, i, "Generator"), B(v, r, function() {
                    return this
                }), B(v, "toString", function() {
                    return "[object Generator]"
                }), (G = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function B(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                B = function(t, e, n, r) {
                    function o(e, n) {
                        B(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, B(t, e, n, r)
            }

            function F(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function N(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            F(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            F(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }
            var R = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, u.bP)((0, D.i)()).isBili,
                            n = (0, o.s)(),
                            i = (0, v.s)(),
                            s = (0, D.i)(),
                            d = s.handleRole,
                            f = s.handleLogin,
                            p = s.logout,
                            _ = s.checkLogin,
                            m = (0, u.bP)((0, D.i)()).isLogin,
                            g = (0, u.bP)((0, v.s)()),
                            h = g.isBgmPlaying,
                            k = g.curPage,
                            C = (0, c.D)().callInsApiByHide,
                            I = (0, r.computed)(function() {
                                return i.curPage === l.Nb.Home
                            }),
                            S = (0, r.ref)({
                                infoColor: "#fff"
                            }),
                            P = function() {
                                var t = N(G().m(function t() {
                                    return G().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                if (a.bS && $(), !I.value) {
                                                    t.n = 1;
                                                    break
                                                }
                                                return t.n = 1, C(l.bz.INDEX);
                                            case 1:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            $ = function() {
                                n.$bbsApp.closePage()
                            },
                            T = function(t) {
                                n.$trackEvent("button", "click", t, "")
                            },
                            O = function() {
                                var t = N(G().m(function t() {
                                    var e;
                                    return G().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                return t.n = 1, _();
                                            case 1:
                                                if (t.v) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return t.a(2);
                                            case 2:
                                                return e = n.$mtoast.loading({
                                                    duration: 0
                                                }), n.$trackEvent("popup", "view", "lottery_record", "", {
                                                    page: "invite"
                                                }), n.$trackEvent("button", "click", "record", "", {
                                                    page: "draw"
                                                }), t.p = 3, t.n = 4, i.drawLotteryHistoryList();
                                            case 4:
                                                return t.n = 5, i.coinHistoryList();
                                            case 5:
                                                n.$commonModal(A), t.n = 7;
                                                break;
                                            case 6:
                                                t.p = 6, t.v, n.$mtoast.clear(e);
                                            case 7:
                                                return t.p = 7, n.$mtoast.clear(e), t.f(7);
                                            case 8:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [3, 6, 7, 8]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            E = function() {
                                var t = N(G().m(function t() {
                                    var e;
                                    return G().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                return T("share"), t.n = 1, _();
                                            case 1:
                                                if (t.v) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return t.a(2);
                                            case 2:
                                                if (e = i.shareImageUrl || n.$mtoast.loading({
                                                        duration: 0
                                                    }), t.p = 3, i.shareImageUrl) {
                                                    t.n = 5;
                                                    break
                                                }
                                                return t.n = 4, (0, W.E)();
                                            case 4:
                                                i.shareImageUrl = t.v;
                                            case 5:
                                                n.$commonModal(L.A, {
                                                    dialogInfo: {
                                                        imgSrc: i.shareImageUrl
                                                    }
                                                }), t.n = 7;
                                                break;
                                            case 6:
                                                t.p = 6, t.v, n.$mtoast(n.$getI18nWord("share_error"));
                                            case 7:
                                                return t.p = 7, n.$mtoast.clear(e), t.f(7);
                                            case 8:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [3, 6, 7, 8]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return (0, r.onMounted)(function() {
                            (0, r.nextTick)(function() {
                                var t;
                                null === (t = document.querySelector(".mihoyo-account-role")) || void 0 === t || t.addEventListener("click", function(t) {
                                    var e;
                                    null !== (e = t.target.classList) && void 0 !== e && e.contains("mihoyo-account-role__login") && T("login")
                                })
                            })
                        }), {
                            __sfc: !0,
                            isBili: e,
                            ins: n,
                            store: i,
                            handleRole: d,
                            handleLogin: f,
                            logout: p,
                            checkLogin: _,
                            isLogin: m,
                            isBgmPlaying: h,
                            curPage: k,
                            callInsApiByHide: C,
                            isHome: I,
                            themeConfig: S,
                            backPage: P,
                            closePage: $,
                            handleNavUpload: T,
                            openRule: function() {
                                T("rule"), n.$commonModal(w)
                            },
                            handleDownloadFun: function() {
                                T("download"), (0, b.h1)(), l.p4 && (n.$ads.ga.trackEvent("conversion", {
                                    send_to: "AW-405273018/VZenCP3VjdkbELrzn8EB"
                                }), n.$ads.twitter.trackEvent("tw-qj21h-qyci1"), n.$ads.twitter.trackEvent("tw-pd64s-qycic"))
                            },
                            openRecord: O,
                            toggleMusic: function() {
                                T("sound"), h.value = !h.value
                            },
                            clickLogin: function() {
                                T("login"), _()
                            },
                            handleShare: E,
                            IS_BBS: a.bS,
                            QS: a.QS,
                            LangSelect: y.A,
                            CustomLayout: x,
                            Music: H,
                            PAGES: l.Nb
                        }
                    }
                }),
                U = R,
                q = (0, g.A)(U, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e(r.CustomLayout, [e("div", {
                        staticClass: "top"
                    }, [e("div", {
                        key: "left",
                        staticClass: "top-left"
                    }, [e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, )], 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    },)], 1), t._v(" "), e(r.Music)], 1)
                }, [], !1, null, "100d20ef", null).exports,
                Q = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, o.s)();
                        return {
                            __sfc: !0,
                            ins: e,
                            goPrivacy: function(t) {
                                var n = e.$getI18nWord(t);
                                e.$mJump({
                                    url: n,
                                    isSea: l.p4,
                                    openType: "system"
                                })
                            }
                        }
                    }
                }),
                z = (0, g.A)(Q, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e("div", {
                        staticClass: "sea common-font"
                    }, [e("div", {
                        staticClass: "sea-left"
                    }, [e("p", {
                        staticClass: "sea-privacy",
                        on: {
                            click: function(t) {
                                return n.goPrivacy("sea_privacy_link")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.$getI18nWord("sea_privacy")) + "\n    ")]), t._v(" "), e("p", {
                        staticClass: "sea-user-contract",
                        on: {
                            click: function(t) {
                                return n.goPrivacy("sea_user_contract_link")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.$getI18nWord("sea_user_contract")) + "\n    ")])]), t._v(" "), e("p", {
                        staticClass: "sea-copyright",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("sea_copyright"))
                        }
                    })])
                }, [], !1, null, "a24bf188", null).exports,
                X = n(2388),
                Y = n(10303);

            function V() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return K(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (K(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, K(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, K(v, "constructor", l), K(l, "constructor", c), c.displayName = "GeneratorFunction", K(l, i, "GeneratorFunction"), K(v), K(v, i, "Generator"), K(v, r, function() {
                    return this
                }), K(v, "toString", function() {
                    return "[object Generator]"
                }), (V = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function K(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                K = function(t, e, n, r) {
                    function o(e, n) {
                        K(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, K(t, e, n, r)
            }

            function J(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function Z(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            J(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            J(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }
            var tt = (0, r.defineComponent)({
                    __name: "tasks",
                    props: {
                        selectId: {
                            type: Number,
                            default: 0
                        }
                    },
                    setup: function(t) {
                        var e = t,
                            n = (0, o.s)(),
                            i = (0, u.bP)((0, v.s)()).pageInfo,
                            a = (0, v.s)().getAwardTask,
                            s = (0, u.bP)((0, D.i)()).isBili,
                            c = (0, r.computed)(function() {
                                return 0 === e.selectId ? i.value.tasks : i.value.invited_tasks
                            }),
                            d = function(t) {
                                return t.status === l.Rr.Doing && t.task_id === l.yQ
                            },
                            f = function() {
                                var t = Z(V().m(function t(r) {
                                    return V().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                if (n.$effectPlayer.play(l.qA.click), !d(r)) {
                                                    t.n = 1;
                                                    break
                                                }
                                                return p(), t.a(2);
                                            case 1:
                                                if (r.status !== l.Rr.Inactive) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return n.$mtoast(n.$getI18nWord("active-tips")), t.a(2);
                                            case 2:
                                                if (r.status !== l.Rr.Doing) {
                                                    t.n = 5;
                                                    break
                                                }
                                                if (1 !== e.selectId) {
                                                    t.n = 3;
                                                    break
                                                }
                                                return n.$trackEvent("button", "click", "go_invite", r.task_id, {
                                                    page: "invite"
                                                }), p(), t.a(2);
                                            case 3:
                                                if (!s.value) {
                                                    t.n = 4;
                                                    break
                                                }
                                                return t.a(2);
                                            case 4:
                                                return (0, b.h1)(!0), 0 === e.selectId ? n.$trackEvent("button", "click", "go_finish", r.task_id, {
                                                    page: "task"
                                                }) : n.$trackEvent("button", "click", "invite", "", {
                                                    page: "invite"
                                                }), t.a(2);
                                            case 5:
                                                if (r.status !== l.Rr.Done) {
                                                    t.n = 7;
                                                    break
                                                }
                                                return t.n = 6, a({
                                                    task_id: r.task_id
                                                });
                                            case 6:
                                                n.$showModal(Y.A, {
                                                    dialogInfo: {
                                                        id: r.task_id,
                                                        selectId: e.selectId
                                                    }
                                                }), 0 === e.selectId ? n.$trackEvent("button", "click", "claim", r.task_id, {
                                                    page: "task"
                                                }) : n.$trackEvent("button", "click", "claim_reward", r.task_id, {
                                                    page: "invite"
                                                });
                                            case 7:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            p = function() {
                                var t = Z(V().m(function t() {
                                    return V().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                n.$emit("share");
                                            case 1:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return {
                            __sfc: !0,
                            props: e,
                            ins: n,
                            pageInfo: i,
                            getAwardTask: a,
                            isBili: s,
                            randerList: c,
                            showBili: function(t) {
                                return t.status === l.Rr.Doing && s.value && 0 === e.selectId
                            },
                            isShare: d,
                            handleAward: f,
                            showShare: p,
                            awardIcon: X.A,
                            SHARE_TASK_ID: l.yQ
                        }
                    }
                }),
                et = tt,
                nt = (0, g.A)(et, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "task_list"
                    }, t._l(r.randerList, function(i) {
                        return e("div", {
                            key: i.task_id,
                            staticClass: "task_item"
                        }, [e("div", {
                            staticClass: "item_name",
                            class: {
                                l: i.task_id === r.SHARE_TASK_ID
                            },
                            domProps: {
                                innerHTML: t._s(t.$getI18nWord("task-".concat(i.task_id)))
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "item_label"
                        }, [t._v(t._s(i.process) + "/" + t._s(i.threshold))]), t._v(" "), i.task_id === r.SHARE_TASK_ID ? e(r.awardIcon, {
                            staticClass: "item_icon share",
                            attrs: {
                                id: 10002
                            }
                        }) : t._e(), t._v(" "), e(r.awardIcon, {
                            staticClass: "item_icon",
                            attrs: {
                                id: i.task_id
                            }
                        }), t._v(" "), e("hover-btn", {
                            staticClass: "invite_btn",
                            class: [i.status, {
                                c: r.showBili(i) && !r.isShare(i)
                            }],
                            attrs: {
                                img: n(27007)("./btn-".concat(r.showBili(i) && !r.isShare(i) ? "TS_INACTIVE" : i.status, ".png")),
                                imgHover: n(64718)("./btn-".concat(r.showBili(i) && !r.isShare(i) ? "TS_INACTIVE" : i.status, "-hover.png"))
                            },
                            on: {
                                click: function(t) {
                                    return r.handleAward(i)
                                }
                            }
                        }, [r.showBili(i) && !r.isShare(i) ? [t._v("\n        " + t._s(t.$getI18nWord("btn-Bili")) + "\n      ")] : [t._v("\n        " + t._s(t.$getI18nWord("btn-".concat(i.status))) + "\n      ")]], 2)], 1)
                    }), 0)
                }, [], !1, null, "fed14a3a", null).exports,
                rt = n(28907);

            function it(t) {
                return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, it(t)
            }

            function ot() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return at(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (at(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, at(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, at(v, "constructor", l), at(l, "constructor", c), c.displayName = "GeneratorFunction", at(l, i, "GeneratorFunction"), at(v), at(v, i, "Generator"), at(v, r, function() {
                    return this
                }), at(v, "toString", function() {
                    return "[object Generator]"
                }), (ot = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function at(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                at = function(t, e, n, r) {
                    function o(e, n) {
                        at(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, at(t, e, n, r)
            }

            function st(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function ct(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            st(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            st(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }

            function lt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ut(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lt(Object(n), !0).forEach(function(e) {
                        vt(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function vt(t, e, n) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != it(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != it(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == it(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function dt(t) {
                return function(t) {
                    if (Array.isArray(t)) return ft(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return ft(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ft(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ft(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var pt = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, u.bP)((0, D.i)()).userType,
                            n = (0, u.bP)((0, v.s)()).curItemList,
                            i = (0, v.s)().initPage,
                            a = (0, b.Dp)({
                                rail: {
                                    background: "#C9D6FF"
                                },
                                bar: {
                                    background: "#A1B6FF"
                                }
                            }),
                            s = (0, r.computed)(function() {
                                var t;
                                return 2 * (null === (t = h.value.friends_help) || void 0 === t ? void 0 : t.length)
                            }),
                            d = (0, r.computed)(function() {
                                var t;
                                return null === (t = h.value.tasks) || void 0 === t ? void 0 : t.find(function(t) {
                                    return t.status === l.Rr.Done
                                })
                            }),
                            f = (0, r.computed)(function() {
                                var t;
                                return null === (t = h.value.invited_tasks) || void 0 === t ? void 0 : t.find(function(t) {
                                    return t.status === l.Rr.Done
                                })
                            }),
                            p = (0, r.computed)(function() {
                                var t;
                                return null === (t = h.value.tasks) || void 0 === t ? void 0 : t.every(function(t) {
                                    return t.status === l.Rr.Ack
                                })
                            }),
                            _ = (0, r.computed)(function() {
                                var t;
                                return null === (t = h.value.invited_tasks) || void 0 === t ? void 0 : t.every(function(t) {
                                    return t.status === l.Rr.Ack
                                })
                            }),
                            m = (0, r.computed)(function() {
                                for (var t = dt(h.value.friends_help || []); t.length < 5;) t.push({
                                    avatar: "",
                                    nickname: "",
                                    uid: null
                                });
                                return t.map(function(t, e) {
                                    var n;
                                    return ut(ut({}, t), null === (n = h.value.friends_help) || void 0 === n ? void 0 : n[e])
                                })
                            }),
                            g = (0, r.computed)(function() {
                                for (var t = dt(h.value.friends_invited || []); t.length < 3;) t.push({
                                    avatar: "",
                                    nickname: "",
                                    uid: null
                                });
                                return t.map(function(t, e) {
                                    var n;
                                    return ut(ut({}, t), null === (n = h.value.friends_invited) || void 0 === n ? void 0 : n[e])
                                })
                            }),
                            h = (0, u.bP)((0, v.s)()).pageInfo,
                            y = (0, o.s)(),
                            k = (0, r.ref)(p.value ? 1 : 0),
                            w = (0, c.D)().callInsApiByHide,
                            C = function() {
                                var t = ct(ot().m(function t() {
                                    return ot().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                return y.$effectPlayer.play(l.qA.click), setTimeout(function() {
                                                    y.$effectPlayer.play(l.qA.moon)
                                                }, 1e3), i(), t.n = 1, w(l.bz.LOTTRY, [n.value.map(function(t) {
                                                    return t.aniId
                                                })]);
                                            case 1:
                                                y.$trackEvent("button", "click", "go_draw", "", {
                                                    page: 0 === k.value ? "task" : "invite"
                                                }), y.$trackEvent("session", "visit", "draw", "", {
                                                    page: "draw"
                                                });
                                            case 2:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            I = (0, r.ref)(null);
                        (0, r.onMounted)(function() {
                            var t;
                            null === (t = I.value) || void 0 === t || t.refresh()
                        });
                        var S = (0, v.s)(),
                            P = function() {
                                var t = ct(ot().m(function t() {
                                    var e;
                                    return ot().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                if (y.$effectPlayer.play(l.qA.click), e = S.shareInviteUrl || y.$mtoast.loading({
                                                        duration: 0
                                                    }), t.p = 1, S.shareInviteUrl) {
                                                    t.n = 3;
                                                    break
                                                }
                                                return t.n = 2, (0, W.E)({
                                                    isInvite: !0
                                                });
                                            case 2:
                                                S.shareInviteUrl = t.v;
                                            case 3:
                                                y.$commonModal(L.A, {
                                                    dialogInfo: {
                                                        imgSrc: S.shareInviteUrl,
                                                        isInvite: !0
                                                    }
                                                }), t.n = 5;
                                                break;
                                            case 4:
                                                t.p = 4, t.v, y.$mtoast(y.$getI18nWord("share_error"));
                                            case 5:
                                                return t.p = 5, y.$mtoast.clear(e), t.f(5);
                                            case 6:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [1, 4, 5, 6]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return (0, r.onMounted)(function() {
                            y.$gon("guideStep", function() {
                                k.value = 1
                            })
                        }), {
                            __sfc: !0,
                            userType: e,
                            curItemList: n,
                            initPage: i,
                            SCROLL_OPS: a,
                            helpCoin: s,
                            showTab1Dot: d,
                            showTab2Dot: f,
                            showTab1Suc: p,
                            showTab2Suc: _,
                            INVITE_LIMIT_NUM: 3,
                            BIND_LIMIT_NUM: 5,
                            helpList: m,
                            inviteList: g,
                            pageInfo: h,
                            ins: y,
                            selectId: k,
                            tabChange: function(t) {
                                y.$effectPlayer.play(l.qA.click), k.value = t, 0 === t ? (y.$trackEvent("button", "click", "task_tab", "", {
                                    page: "invite"
                                }), y.$trackEvent("session", "visit", "task", "", {
                                    page: "task"
                                })) : (y.$trackEvent("button", "click", "invite_tab", "", {
                                    page: "task"
                                }), y.$trackEvent("session", "visit", "invite", "", {
                                    page: "invite"
                                }))
                            },
                            callInsApiByHide: w,
                            showLottery: C,
                            handleCopyCode: function() {
                                var t;
                                y.$effectPlayer.play(l.qA.click), y.$trackEvent("button", "click", "copy_invite", "", {
                                    page: "invite"
                                }), y.$clipboard({
                                    text: h.value.invite_code || "",
                                    onSuccess: (t = ct(ot().m(function t() {
                                        return ot().w(function(t) {
                                            for (;;) switch (t.n) {
                                                case 0:
                                                    y.$mtoast(y.$getI18nWord("copy-tips"));
                                                case 1:
                                                    return t.a(2)
                                            }
                                        }, t)
                                    })), function() {
                                        return t.apply(this, arguments)
                                    })
                                })
                            },
                            openBindDlg: function() {
                                var t;
                                null !== (t = h.value.use_code_friend) && void 0 !== t && t.uid || (y.$effectPlayer.play(l.qA.click), y.$commonModal(rt.A, {
                                    dialogInfo: {
                                        type: "Bind",
                                        clickBind: !0
                                    }
                                }))
                            },
                            vueScrollDom: I,
                            store: S,
                            showShare: P,
                            TaskList: nt
                        }
                    }
                }),
                _t = pt,
                mt = (0, g.A)(_t, function() {
                    var t, e, r, i, o = this,
                        a = o._self._c,
                        s = o._self._setupProxy;
                    return a("div", {
                        staticClass: "home_comp"
                    }, [a("div", {
                        staticClass: "home_tabs"
                    }, [a("div", {
                        staticClass: "item",
                        class: [{
                            select: 0 === s.selectId
                        }, {
                            dot: s.showTab1Dot
                        }, {
                            suc: s.showTab1Suc
                        }],
                        domProps: {
                            innerHTML: o._s(o.$getI18nWord("tab-1"))
                        },
                        on: {
                            click: function(t) {
                                return s.tabChange(0)
                            }
                        }
                    }, [o._v("\n      " + o._s(o.$getI18nWord("tab-1")) + "\n    ")]), o._v(" "), a("div", {
                        staticClass: "item",
                        class: [{
                            select: 1 === s.selectId
                        }, {
                            dot: s.showTab2Dot
                        }, {
                            suc: s.showTab2Suc
                        }],
                        domProps: {
                            innerHTML: o._s(o.$getI18nWord("tab-2"))
                        },
                        on: {
                            click: function(t) {
                                return s.tabChange(1)
                            }
                        }
                    })]), o._v(" "), a("div", {
                        staticClass: "home_content",
                        class: {
                            tab1: 0 === s.selectId
                        }
                    }, [a("meScroll", {
                        ref: "vueScrollDom",
                        attrs: {
                            ops: s.SCROLL_OPS
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 === s.selectId,
                            expression: "selectId === 1"
                        }],
                        staticClass: "home_content_card"
                    }, [a("div", {
                        staticClass: "home_top_tips",
                        domProps: {
                            innerHTML: o._s(o.$getI18nWord("invite-tips-1"))
                        }
                    }), o._v(" "), a("div", {
                        staticClass: "home_invite"
                    }, [a("div", {
                        staticClass: "invite_label",
                        domProps: {
                            innerHTML: o._s(o.$getI18nWord("invite-code"))
                        }
                    }), o._v(" "), a("div", {
                        staticClass: "invite_input"
                    }, [o._v("\n            " + o._s(s.pageInfo.invite_code) + "\n            "), a("div", {
                        staticClass: "invite_copy_btn",
                        on: {
                            click: s.handleCopyCode
                        }
                    })])]), o._v(" "), a("div", {
                        staticClass: "invite_list"
                    }, [a("div", {
                        staticClass: "invite_label",
                        domProps: {
                            innerHTML: o._s(o.$getI18nWord("bind-title"))
                        }
                    }), o._v(" "), a("div", {
                        staticClass: "list"
                    }, o._l(s.inviteList, function(t, e) {
                        return a("div", {
                            key: e,
                            staticClass: "item",
                            class: {
                                h: t.uid
                            }
                        }, [t.uid ? a("mi-images", {
                            staticClass: "icon",
                            attrs: {
                                src: t.avatar || n(24331)
                            }
                        }) : o._e(), o._v(" "), t.login && t.uid ? a("mi-images", {
                            staticClass: "login_icon",
                            attrs: {
                                src: n(44414)
                            }
                        }) : o._e(), o._v(" "), t.uid ? a("mi-images", {
                            staticClass: "icon_info",
                            attrs: {
                                src: n(4952)
                            }
                        }, [a("span", [o._v(o._s(t.nickname))]), o._v(" "), a("span", [o._v("UID: " + o._s(t.uid))])]) : o._e()], 1)
                    }), 0)]), o._v(" "), s.userType.isBack ? a("div", {
                        staticClass: "invite_tips",
                        class: {
                            bind: null === (t = s.pageInfo.use_code_friend) || void 0 === t ? void 0 : t.uid
                        }
                    }, [a("div", [a("span", {
                        on: {
                            click: s.openBindDlg
                        }
                    }, [o._v("\n              " + o._s(o.$getI18nWord("invite_bind_text")) + "\n            ")]), o._v("\n            " + o._s(o.$getI18nWord({
                        key: null !== (e = s.pageInfo.use_code_friend) && void 0 !== e && e.uid ? "invite_isbind_desc" : "invite_bind_desc",
                        data: {
                            nickname: null === (r = s.pageInfo.use_code_friend) || void 0 === r ? void 0 : r.nickname,
                            uid: null === (i = s.pageInfo.use_code_friend) || void 0 === i ? void 0 : i.uid
                        }
                    })) + "\n          ")])]) : o._e(), o._v(" "), a("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(54741),
                            imgHover: n(38732)
                        },
                        on: {
                            click: function(t) {
                                return s.showShare()
                            }
                        }
                    }, [o._v("\n          " + o._s(o.$getI18nWord("invite-btn")) + "\n        ")])], 1), o._v(" "), a(s.TaskList, {
                        attrs: {
                            selectId: s.selectId
                        },
                        on: {
                            share: function(t) {
                                return s.showShare()
                            }
                        }
                    })], 1), o._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 0 === s.selectId,
                            expression: "selectId === 0"
                        }],
                        staticClass: "home_task_tips",
                        domProps: {
                            innerHTML: o._s(o.$getI18nWord("invite-tips-2"))
                        }
                    })], 1), o._v(" "), a("div", {
                        staticClass: "home_right"
                    }, [a("hover-btn", {
                        staticClass: "right_btn",
                        attrs: {
                            img: n(6545),
                            imgHover: n(9496)
                        },
                        on: {
                            click: s.showLottery
                        }
                    }, [o._v("\n      " + o._s(o.$getI18nWord("lottery-btn")) + "\n    ")]), o._v(" "), a("div", {
                        staticClass: "right_tips"
                    }, [a("div", {
                        staticClass: "tips_icon"
                    }), o._v("\n      " + o._s(o.$getI18nWord({
                        key: "coin-tips",
                        data: {
                            num: s.pageInfo.coin
                        }
                    })) + "\n    ")])], 1), o._v(" "), a("div", {
                        staticClass: "home_invite_content"
                    }, [a("div", {
                        staticClass: "invite_desc"
                    }, [o._v("\n      " + o._s(o.$getI18nWord("coin-desc")) + "\n    ")]), o._v(" "), a("div", {
                        staticClass: "invite_list"
                    }, o._l(s.helpList, function(t, e) {
                        return a("div", {
                            key: e,
                            staticClass: "item",
                            class: {
                                h: t.uid
                            }
                        }, [t.uid ? a("mi-images", {
                            staticClass: "icon",
                            attrs: {
                                src: t.avatar || n(24331)
                            }
                        }) : o._e(), o._v(" "), t.uid ? a("mi-images", {
                            staticClass: "icon_info",
                            attrs: {
                                src: n(4952)
                            }
                        }, [a("span", [o._v(o._s(t.nickname))]), o._v(" "), a("span", [o._v("UID: " + o._s(t.uid))])]) : o._e()], 1)
                    }), 0), o._v(" "), a("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(54741),
                            imgHover: n(38732)
                        },
                        on: {
                            click: function(t) {
                                return s.showShare()
                            }
                        }
                    }, [o._v("\n      " + o._s(o.$getI18nWord("invite-btn")) + "\n    ")]), o._v(" "), a("div", {
                        staticClass: "invite_bottom_tips"
                    }, [o._v("\n      " + o._s(o.$getI18nWord({
                        key: "coin-rule-desc",
                        data: {
                            num: "".concat(s.helpCoin)
                        }
                    })) + "\n    ")])], 1)])
                }, [], !1, null, "57733b9b", null),
                gt = mt.exports,
                ht = (0, r.defineComponent)({
                    __name: "index",
                    props: {
                        type: {
                            type: String,
                            default: "common"
                        },
                        info: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    emits: ["close"],
                    setup: function(t, e) {
                        var n = e.emit,
                            i = t,
                            a = (0, r.computed)(function() {
                                return !1
                            }),
                            s = (0, b.Dp)({
                                rail: {
                                    background: "#C9D6FF"
                                },
                                bar: {
                                    background: "#A1B6FF"
                                }
                            }),
                            c = (0, r.ref)(null),
                            l = (0, o.s)();
                        return (0, r.onMounted)(function() {
                            var t, e;
                            null === (t = c.value) || void 0 === t || t.refresh(), console.log(i.info), l.$trackEvent("popup", "view", 1 === (null === (e = i.info[0]) || void 0 === e ? void 0 : e.reward_id.length) ? "claim_award_pop" : "claim_crit_pop", "", {
                                page: "draw"
                            })
                        }), {
                            __sfc: !0,
                            props: i,
                            isOnly: a,
                            emit: n,
                            SCROLL_OPS: s,
                            vueScrollDom: c,
                            ins: l,
                            close: function() {
                                n("close")
                            },
                            awardIcon: X.A
                        }
                    }
                }),
                yt = (0, g.A)(ht, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e("div", {
                        staticClass: "modal_comp common-font",
                        class: {
                            isOnly: n.isOnly
                        },
                        on: {
                            click: n.close
                        }
                    }, [e("div", {
                        staticClass: "modal_title"
                    }, [t._v(t._s(t.$getI18nWord("record-tips-title")))]), t._v(" "), e("div", {
                        staticClass: "modal_line"
                    }), t._v(" "), 1 === t.info.length ? e("div", {
                        staticClass: "modal_list_only"
                    }, t._l(t.info[0].reward_id, function(r, i) {
                        return e("div", {
                            key: i,
                            staticClass: "item",
                            style: {
                                animationDelay: "".concat(.15 * i, "s")
                            }
                        }, [e(n.awardIcon, {
                            attrs: {
                                id: r,
                                level: t.info[0].reward_id.length,
                                isRecord: !0
                            }
                        })], 1)
                    }), 0) : e("div", {
                        staticClass: "modal_list"
                    }, [e("meScroll", {
                        ref: "vueScrollDom",
                        attrs: {
                            ops: n.SCROLL_OPS
                        }
                    }, [e("div", {
                        staticClass: "modal_list_content"
                    }, t._l(t.info, function(r, i) {
                        return e("div", {
                            key: i,
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "item_label"
                        }, [t._v("\n            " + t._s(t.$getI18nWord({
                            key: "record-tips-num",
                            data: {
                                num: r.num
                            }
                        })) + "\n          ")]), t._v(" "), e("div", {
                            staticClass: "item_list"
                        }, t._l(r.reward_id, function(t, i) {
                            return e("div", {
                                key: i,
                                staticClass: "it",
                                style: {
                                    animationDelay: "".concat(.15 * i, "s")
                                }
                            }, [e(n.awardIcon, {
                                key: t,
                                attrs: {
                                    id: t,
                                    level: r.reward_id.length,
                                    isRecord: !0
                                }
                            })], 1)
                        }), 0)])
                    }), 0)])], 1), t._v(" "), e("div", {
                        staticClass: "modal_line bottom"
                    }), t._v(" "), e("div", {
                        staticClass: "modal_desc"
                    }, [t._v(t._s(t.$getI18nWord("record-tips-desc")))])])
                }, [], !1, null, "76011dcc", null),
                bt = yt.exports,
                kt = n(53061);

            function wt() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return Ct(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (Ct(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, Ct(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, Ct(v, "constructor", l), Ct(l, "constructor", c), c.displayName = "GeneratorFunction", Ct(l, i, "GeneratorFunction"), Ct(v), Ct(v, i, "Generator"), Ct(v, r, function() {
                    return this
                }), Ct(v, "toString", function() {
                    return "[object Generator]"
                }), (wt = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function Ct(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                Ct = function(t, e, n, r) {
                    function o(e, n) {
                        Ct(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, Ct(t, e, n, r)
            }

            function It(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function St(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            It(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            It(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }
            var Pt = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, kt.s)().handleAllLotteryItems,
                            n = (0, r.ref)(!1),
                            i = (0, u.bP)((0, v.s)()),
                            a = i.pageInfo,
                            s = i.curItemList,
                            d = i.gachaTransition,
                            f = i.itemGroups,
                            p = i.curItemPage,
                            _ = i.totalPages,
                            m = (0, v.s)().drawLottery,
                            g = (0, c.D)(),
                            h = g.callInsApi,
                            y = g.callInsApiByHide,
                            k = (0, u.bP)((0, c.D)()),
                            w = k.hideItemUi,
                            C = k.isTransition,
                            I = k.isTransitioning,
                            S = (0, o.s)(),
                            P = function() {
                                var t = St(wt().m(function t() {
                                    var e, n = arguments;
                                    return wt().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                if (e = !(n.length > 0 && void 0 !== n[0]) || n[0], !C.value) {
                                                    t.n = 1;
                                                    break
                                                }
                                                return t.a(2);
                                            case 1:
                                                if (!e) {
                                                    t.n = 3;
                                                    break
                                                }
                                                if (!H.value) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return t.a(2);
                                            case 2:
                                                E(1), S.$trackEvent("button", "click", "draw_once", "", {
                                                    page: "draw"
                                                }), t.n = 5;
                                                break;
                                            case 3:
                                                if (!j.value) {
                                                    t.n = 4;
                                                    break
                                                }
                                                return t.a(2);
                                            case 4:
                                                E(M()), S.$trackEvent("button", "click", "draw_multiple", "", {
                                                    page: "draw"
                                                });
                                            case 5:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            $ = (0, r.ref)(null),
                            T = (0, r.ref)(null),
                            O = (0, r.ref)(null),
                            E = function() {
                                var t = St(wt().m(function t(n) {
                                    var r, i;
                                    return wt().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                if (t.p = 0, !C.value && !I.value) {
                                                    t.n = 1;
                                                    break
                                                }
                                                return t.a(2);
                                            case 1:
                                                return C.value = !0, t.n = 2, A();
                                            case 2:
                                                return $.value = setTimeout(function() {
                                                    T.value = S.$mtoast.loading({
                                                        duration: 0
                                                    })
                                                }, 1e3), t.n = 3, m({
                                                    num: n
                                                });
                                            case 3:
                                                return r = t.v, clearTimeout($.value), S.$mtoast.clear(T.value), O.value = S.$mtoast.loading({
                                                    showContent: !1,
                                                    duration: 0
                                                }), t.n = 4, e(r);
                                            case 4:
                                                S.$mtoast.clear(O.value), C.value = !1, D.shareRecordImageUrl = "", S.$commonModal(bt, {
                                                    dialogInfo: {
                                                        info: r
                                                    },
                                                    maskClose: !0
                                                }), t.n = 6;
                                                break;
                                            case 5:
                                                t.p = 5, i = t.v, console.log(i), C.value = !1, clearTimeout($.value), S.$mtoast.clear(O.value), S.$mtoast.clear(T.value);
                                            case 6:
                                                return t.p = 6, C.value = !1, clearTimeout($.value), S.$mtoast.clear(O.value), S.$mtoast.clear(T.value), t.f(6);
                                            case 7:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [0, 5, 6, 7]
                                    ])
                                }));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            A = function() {
                                var t = St(wt().m(function t() {
                                    return wt().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                if (p.value === _.value - 1) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return d.value = !0, t.n = 1, (0, b.yy)(200);
                                            case 1:
                                                return p.value = _.value - 1, setTimeout(function() {
                                                    d.value = !1
                                                }, 1e3), t.n = 2, h(l.bz.LOTTRYITEM, [s.value.map(function(t) {
                                                    return t.aniId
                                                }), !0]);
                                            case 2:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            x = function() {
                                var t = St(wt().m(function t() {
                                    return wt().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                return S.$effectPlayer.play(l.qA.click), t.n = 1, y(l.bz.HOME);
                                            case 1:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            M = function() {
                                return a.value.coin >= 5 ? 5 : a.value.coin < 2 ? 2 : a.value.coin
                            },
                            j = (0, r.computed)(function() {
                                return a.value.coin < 2
                            }),
                            H = (0, r.computed)(function() {
                                return a.value.coin < 1
                            }),
                            D = (0, v.s)(),
                            G = function() {
                                var t = St(wt().m(function t() {
                                    var e;
                                    return wt().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                if (S.$effectPlayer.play(l.qA.click), S.$trackEvent("button", "click", "report", "", {
                                                        page: "draw"
                                                    }), e = D.shareRecordImageUrl || S.$mtoast.loading({
                                                        duration: 0
                                                    }), t.p = 1, D.shareRecordImageUrl) {
                                                    t.n = 3;
                                                    break
                                                }
                                                return t.n = 2, (0, W.E)({
                                                    isRecord: !0
                                                });
                                            case 2:
                                                D.shareRecordImageUrl = t.v;
                                            case 3:
                                                S.$commonModal(L.A, {
                                                    dialogInfo: {
                                                        imgSrc: D.shareRecordImageUrl,
                                                        isRecord: !0
                                                    }
                                                }), S.$trackEvent("popup", "view", "share_pop", "", {
                                                    page: "draw"
                                                }), t.n = 5;
                                                break;
                                            case 4:
                                                t.p = 4, t.v, S.$mtoast(S.$getI18nWord("share_error"));
                                            case 5:
                                                return t.p = 5, S.$mtoast.clear(e), t.f(5);
                                            case 6:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [1, 4, 5, 6]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return {
                            __sfc: !0,
                            handleAllLotteryItems: e,
                            showList: n,
                            pageInfo: a,
                            curItemList: s,
                            gachaTransition: d,
                            itemGroups: f,
                            curItemPage: p,
                            totalPages: _,
                            drawLottery: m,
                            callInsApi: h,
                            callInsApiByHide: y,
                            hideItemUi: w,
                            isTransition: C,
                            isTransitioning: I,
                            ins: S,
                            getLevelNum: function(t) {
                                var e;
                                if (null == a || null === (e = a.value) || void 0 === e || !e.wishes) return 0;
                                var n = l.SE[t];
                                if (!n) return 0;
                                var r = a.value.wishes.find(function(t) {
                                    return t.wish_type === n
                                });
                                return (null == r ? void 0 : r.num) || 0
                            },
                            handleShowList: function() {
                                S.$effectPlayer.play(l.qA.click), n.value = !n.value, S.$trackEvent("button", "click", "record", "", {
                                    page: "draw"
                                })
                            },
                            lottery: P,
                            timer: $,
                            loading: T,
                            toast: O,
                            handleLottery: E,
                            toLastScene: A,
                            handleAdd: function() {
                                S.$trackEvent("button", "click", "get_draws", "", {
                                    page: "draw"
                                }), x()
                            },
                            backIndex: x,
                            showMoreLottery: M,
                            isMoreDisabled: j,
                            isDisabled: H,
                            store: D,
                            showShare: G,
                            handleNum: b.LD
                        }
                    }
                }),
                $t = Pt,
                Tt = (0, g.A)($t, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "lottery_comp"
                    }, [e("div", {
                        staticClass: "lottery_title"
                    }, [e("div", {
                        staticClass: "text",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("lottery-rule"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "icon"
                    }, [e("mi-images", {
                        staticClass: "ques_tips",
                        attrs: {
                            src: t.$getI18nWord("lottery-tips")
                        }
                    })], 1)]), t._v(" "), e("div", {
                        staticClass: "lottery_desc",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("lottery-rule-desc"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "lottery_title next",
                        class: {
                            show: r.showList
                        },
                        on: {
                            click: r.handleShowList
                        }
                    }, [e("div", {
                        staticClass: "text"
                    }, [t._v("\n      " + t._s(t.$getI18nWord({
                        key: "lottery-num",
                        data: {
                            num: r.pageInfo.lottery_num
                        }
                    })) + "\n    ")]), t._v(" "), e("div", {
                        staticClass: "icon"
                    })]), t._v(" "), e("div", {
                        staticClass: "lottery_list",
                        class: {
                            show: r.showList
                        }
                    }, [e("div", {
                        staticClass: "list_line"
                    }), t._v(" "), e("div", {
                        staticClass: "list_item"
                    }, [t._v("\n      " + t._s(t.$getI18nWord({
                        key: "lottery-num-1",
                        data: {
                            num: r.getLevelNum(1)
                        }
                    })) + "\n    ")]), t._v(" "), e("div", {
                        staticClass: "list_item level2"
                    }, [t._v("\n      " + t._s(t.$getI18nWord({
                        key: "lottery-num-2",
                        data: {
                            num: r.getLevelNum(2)
                        }
                    })) + "\n    ")]), t._v(" "), e("div", {
                        staticClass: "list_item level3"
                    }, [t._v("\n      " + t._s(t.$getI18nWord({
                        key: "lottery-num-3",
                        data: {
                            num: r.getLevelNum(3)
                        }
                    })) + "\n    ")]), t._v(" "), e("div", {
                        staticClass: "list_line"
                    })]), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !r.hideItemUi && !r.gachaTransition,
                            expression: "!hideItemUi && !gachaTransition"
                        }],
                        staticClass: "lottery_items"
                    }, t._l(r.curItemList, function(n, i) {
                        return e("div", {
                            key: i,
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "item_num"
                        }, [t._v("\n          " + t._s(r.handleNum(n.num)) + "\n        ")])])
                    }), 0)]), t._v(" "), e("hover-btn", {
                        staticClass: "lottery_back",
                        attrs: {
                            img: n(67402),
                            imgHover: n(76015)
                        },
                        on: {
                            click: r.backIndex
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "record_btn",
                        on: {
                            click: r.showShare
                        }
                    }, [e("div", {
                        staticClass: "icon"
                    }), t._v(" "), e("div", {
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("record-tips"))
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "lottery_num"
                    }, [t._v("\n    " + t._s(r.pageInfo.coin) + "\n    "), e("div", {
                        staticClass: "add",
                        on: {
                            click: r.handleAdd
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "lottery_btn more",
                        class: {
                            isDisabled: r.isDisabled
                        },
                        on: {
                            click: function(t) {
                                return r.lottery()
                            }
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord({
                        key: "record-btn",
                        data: {
                            num: 1
                        }
                    })) + "\n  ")]), t._v(" "), e("div", {
                        staticClass: "lottery_tips"
                    }, [t._v("\n    " + t._s(t.$getI18nWord({
                        key: "record-btn-1",
                        data: {
                            num: r.pageInfo.draw_can_get_stone
                        }
                    })) + "\n  ")]), t._v(" "), r.itemGroups.length > 1 ? e("div", {
                        staticClass: "page_tips"
                    }, [t._v("\n    " + t._s(t.$getI18nWord("page-tips")) + "\n  ")]) : t._e()], 1)
                }, [], !1, null, "4ff233d4", null),
                Ot = Tt.exports,
                Et = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, v.s)().finishGuide,
                            n = (0, o.s)(),
                            i = (0, r.ref)(1);
                        return {
                            __sfc: !0,
                            finishGuide: e,
                            ins: n,
                            step: i,
                            addStep: function() {
                                i.value >= 4 ? e() : (i.value++, 4 === i.value && n.$gemit("guideStep"))
                            }
                        }
                    }
                }),
                At = (0, g.A)(Et, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e("div", {
                        staticClass: "guide_comp",
                        class: "step".concat(n.step),
                        on: {
                            click: n.addStep
                        }
                    }, [e("div", {
                        staticClass: "text",
                        class: "text".concat(n.step),
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("guide-".concat(n.step)))
                        }
                    })])
                }, [], !1, null, "e38509ec", null).exports,
                Lt = n(61270),
                xt = n(36953);

            function Mt() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return jt(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (jt(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, jt(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, jt(v, "constructor", l), jt(l, "constructor", c), c.displayName = "GeneratorFunction", jt(l, i, "GeneratorFunction"), jt(v), jt(v, i, "Generator"), jt(v, r, function() {
                    return this
                }), jt(v, "toString", function() {
                    return "[object Generator]"
                }), (Mt = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function jt(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                jt = function(t, e, n, r) {
                    function o(e, n) {
                        jt(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, jt(t, e, n, r)
            }

            function Ht(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function Wt(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            Ht(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            Ht(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }
            var Dt = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, u.bP)((0, v.s)()),
                            n = e.curPage,
                            i = e.showGuide,
                            s = e.pageInfoInited,
                            d = e.totalPages,
                            f = e.curItemPage,
                            p = e.curItemList,
                            _ = e.gachaTransition,
                            m = (0, v.s)(),
                            g = m.drawLotteryHistoryList,
                            y = m.initAniLotteryData,
                            k = (0, u.bP)((0, c.D)()),
                            w = k.hideUi,
                            C = k.isTransitioning,
                            I = k.isTransition,
                            S = (0, D.i)().checkLogin,
                            P = (0, c.D)(),
                            $ = P.callInsApiByHide,
                            T = P.callInsApiByWait,
                            O = (0, o.s)(),
                            E = function() {
                                var t = Wt(Mt().m(function t() {
                                    return Mt().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                return O.$trackEvent("button", "click", "enter", "", {
                                                    page: "main"
                                                }), t.n = 1, S();
                                            case 1:
                                                if (t.v) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return t.a(2);
                                            case 2:
                                                return O.$effectPlayer.play(l.qA.Card_Change), t.n = 3, $(l.bz.HOME, {});
                                            case 3:
                                                return t.n = 4, g();
                                            case 4:
                                                y(), O.$trackEvent("session", "visit", "task", "", {
                                                    page: "task"
                                                });
                                            case 5:
                                                return t.a(2)
                                        }
                                    }, t)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();

                        function A() {
                            return (A = Wt(Mt().m(function t(e) {
                                return Mt().w(function(t) {
                                    for (;;) switch (t.n) {
                                        case 0:
                                            if (s.value && !I.value && !_.value && !document.querySelector(".custom-mihoyo-common-container")) {
                                                t.n = 1;
                                                break
                                            }
                                            return t.a(2);
                                        case 1:
                                            if (n.value === l.Nb.LOTTRY && !C.value) {
                                                t.n = 2;
                                                break
                                            }
                                            return t.a(2);
                                        case 2:
                                            if ("swipedown" !== e) {
                                                t.n = 5;
                                                break
                                            }
                                            if (f.value !== d.value - 1) {
                                                t.n = 3;
                                                break
                                            }
                                            return t.a(2);
                                        case 3:
                                            return _.value = !0, t.n = 4, (0, b.yy)(250);
                                        case 4:
                                            return f.value++, setTimeout(function() {
                                                _.value = !1
                                            }, 1e3), t.n = 5, T(l.bz.LOTTRYITEM, [p.value.map(function(t) {
                                                return t.aniId
                                            }), !0]);
                                        case 5:
                                            if ("swipeup" !== e) {
                                                t.n = 8;
                                                break
                                            }
                                            if (0 !== f.value) {
                                                t.n = 6;
                                                break
                                            }
                                            return t.a(2);
                                        case 6:
                                            return _.value = !0, t.n = 7, (0, b.yy)(250);
                                        case 7:
                                            return f.value--, setTimeout(function() {
                                                _.value = !1
                                            }, 1e3), t.n = 8, T(l.bz.LOTTRYITEM, [p.value.map(function(t) {
                                                return t.aniId
                                            }), !0]);
                                        case 8:
                                            return t.a(2)
                                    }
                                }, t)
                            }))).apply(this, arguments)
                        }(0, r.onMounted)(function() {
                            (0, xt.l)()
                        });
                        var L = (0, r.computed)(function() {
                            return ["development", "test"].includes(Lt.cA) && b.QS.lqa
                        });
                        return {
                            __sfc: !0,
                            curPage: n,
                            showGuide: i,
                            pageInfoInited: s,
                            totalPages: d,
                            curItemPage: f,
                            curItemList: p,
                            gachaTransition: _,
                            drawLotteryHistoryList: g,
                            initAniLotteryData: y,
                            hideUi: w,
                            isTransitioning: C,
                            isTransition: I,
                            checkLogin: S,
                            callInsApiByHide: $,
                            callInsApiByWait: T,
                            ins: O,
                            intoGame: E,
                            handleDirection: function(t) {
                                return A.apply(this, arguments)
                            },
                            showDevBtn: L,
                            showDlg: function(t) {
                                L.value && O.$commonModal(rt.A, {
                                    dialogInfo: {
                                        type: ["Help", "HelpSuccess", "HelpFail", "HelpFailSame", "Bind", "BindSuccess", "BindFail", "BindFailNot", "BindFailMax", "BindFailSame"][t]
                                    }
                                })
                            },
                            Effect: h,
                            Top: q,
                            Privacy: z,
                            HomeComp: gt,
                            LotteryComp: Ot,
                            Guide: At,
                            IS_SEA: a.p4,
                            PAGES: l.Nb
                        }
                    }
                }),
                Gt = Dt,
                Bt = (0, g.A)(Gt, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        directives: [{
                            name: "direction",
                            rawName: "v-direction",
                            value: {
                                handler: r.handleDirection,
                                rotate: t.$frame.env.rotate
                            },
                            expression: "{\n    handler: handleDirection,\n    rotate: $frame.env.rotate,\n  }"
                        }],
                        staticClass: "index_page"
                    }, [e(r.Effect, {
                        staticClass: "effect"
                    }), t._v(" "), r.showDevBtn ? e("div", {
                        staticClass: "dev_btn"
                    }, t._l(9, function(n, i) {
                        return e("button", {
                            key: i,
                            on: {
                                click: function(t) {
                                    return r.showDlg(i)
                                }
                            }
                        }, [t._v("\n      弹窗" + t._s(n) + "\n    ")])
                    }), 0) : t._e(), t._v(" "), e("div", {
                        staticClass: "index_content"
                    }, [e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e(r.Top, {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !r.hideUi,
                            expression: "!hideUi"
                        }]
                    })], 1)], 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    },  1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [r.curPage !== r.PAGES.Home || r.hideUi ? t._e() : e(r.HomeComp)], 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [r.curPage !== r.PAGES.LOTTRY || r.hideUi ? t._e() : e(r.LotteryComp)], 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [r.showGuide && r.curPage === r.PAGES.Home && !r.hideUi ? e(r.Guide) : t._e()], 1), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [r.IS_SEA && r.curPage === r.PAGES.INDEX && !r.hideUi ? e(r.Privacy) : t._e()], 1)], 1)
                }, [], !1, null, "c05901c0", null),
                Ft = Bt.exports
        },
        15345: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return p
                }
            });
            var r = n(74061),
                i = n(87583),
                o = n(62509),
                a = n(23091),
                s = n(51849),
                c = n(10033);

            function l() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return u(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function v() {}
                e = Object.getPrototypeOf;
                var d = [][r] ? e(e([][r]())) : (u(e = {}, r, function() {
                        return this
                    }), e),
                    f = v.prototype = s.prototype = Object.create(d);

                function p(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, i, "GeneratorFunction")), t.prototype = Object.create(f), t
                }
                return c.prototype = v, u(f, "constructor", v), u(v, "constructor", c), c.displayName = "GeneratorFunction", u(v, i, "GeneratorFunction"), u(f), u(f, i, "Generator"), u(f, r, function() {
                    return this
                }), u(f, "toString", function() {
                    return "[object Generator]"
                }), (l = function() {
                    return {
                        w: o,
                        m: p
                    }
                })()
            }

            function u(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                u = function(t, e, n, r) {
                    function o(e, n) {
                        u(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, u(t, e, n, r)
            }

            function v(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            var d = (0, r.defineComponent)({
                    __name: "inviteShareCard",
                    props: {
                        isRecord: {
                            type: Boolean,
                            default: !1
                        },
                        isInvite: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup: function(t) {
                        var e = t,
                            n = (0, a.s)(),
                            u = (0, s.bP)((0, c.s)()),
                            d = u.shareInviteLink,
                            f = u.pageInfo,
                            p = (0, r.ref)(""),
                            _ = function() {
                                var t, r = (t = l().m(function t() {
                                    return l().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                if (!e.isRecord && !e.isInvite) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return t.n = 1, i.toDataURL(d.value, {
                                                    width: 144,
                                                    height: 144,
                                                    margin: 0,
                                                    color: {
                                                        dark: "#5f67be",
                                                        light: "#fff"
                                                    }
                                                });
                                            case 1:
                                                p.value = t.v, t.n = 3;
                                                break;
                                            case 2:
                                                p.value = n.$getI18nWord("share-qrcode");
                                            case 3:
                                                return t.a(2)
                                        }
                                    }, t)
                                }), function() {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function(r, i) {
                                        var o = t.apply(e, n);

                                        function a(t) {
                                            v(o, r, i, a, s, "next", t)
                                        }

                                        function s(t) {
                                            v(o, r, i, a, s, "throw", t)
                                        }
                                        a(void 0)
                                    })
                                });
                                return function() {
                                    return r.apply(this, arguments)
                                }
                            }();
                        return (0, r.onMounted)(function() {
                            _()
                        }), {
                            __sfc: !0,
                            props: e,
                            ins: n,
                            shareInviteLink: d,
                            pageInfo: f,
                            qrImg: p,
                            initCode: _,
                            getLevelNum: function(t) {
                                var e;
                                if (null == f || null === (e = f.value) || void 0 === e || !e.wishes) return 0;
                                var n = o.SE[t];
                                if (!n) return 0;
                                var r = f.value.wishes.find(function(t) {
                                    return t.wish_type === n
                                });
                                return (null == r ? void 0 : r.num) || 0
                            }
                        }
                    }
                }),
                f = d,
                p = (0, n(14486).A)(f, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e("div", {
                        staticClass: "sha-modal common-font"
                    }, [e("mi-images", {
                        staticClass: "sha-modal-bg",
                        attrs: {
                            useImg: "",
                            src: t.$getI18nWord(t.isRecord ? "share_record_bg" : "share_bg")
                        }
                    }, [e("mi-images", {
                        staticClass: "sha-code-bg",
                        class: {
                            isRecord: t.isRecord, isInvite: t.isInvite
                        },
                        attrs: {
                            useImg: ""
                        }
                    }, [e("mi-images", {
                        staticClass: "img",
                        attrs: {
                            useImg: "",
                            src: n.qrImg,
                            alt: ""
                        }
                    })], 1), t._v(" "), e("div", {
                        staticClass: "sha-share-desc",
                        class: {
                            isRecord: t.isRecord, isInvite: t.isInvite
                        }
                    }, [n.props.isRecord ? e("div", {
                        staticClass: "desc_content",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("share-record-desc"))
                        }
                    }) : n.props.isInvite ? e("div", {
                        staticClass: "desc_content",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord({
                                key: "share-invite-desc",
                                data: {
                                    code: n.pageInfo.invite_code
                                }
                            }))
                        }
                    }) : e("div", {
                        staticClass: "desc_content",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("share-card-desc"))
                        }
                    })])], 1), t._v(" "), t.isRecord ? e("div", {
                        staticClass: "sha-record"
                    }, [e("div", {
                        staticClass: "record-name",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("share_record_title"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "record-label",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord({
                                key: "share_record_num",
                                data: {
                                    num: n.pageInfo.lottery_num
                                }
                            }))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "record-line"
                    }), t._v(" "), e("div", {
                        staticClass: "record-item level1",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord({
                                key: "share_record_level1",
                                data: {
                                    num: "<span>".concat(n.getLevelNum(1), "</span>")
                                }
                            }))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "record-item level2",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord({
                                key: "share_record_level2",
                                data: {
                                    num: "<span>".concat(n.getLevelNum(2), "</span>")
                                }
                            }))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "record-item level3",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord({
                                key: "share_record_level3",
                                data: {
                                    num: "<span>".concat(n.getLevelNum(3), "</span>")
                                }
                            }))
                        }
                    })]) : t._e(), t._v(" "), t.isRecord ? e("div", {
                        staticClass: "record_desc"
                    }, [t._v("\n    " + t._s(t.$getI18nWord("share-record-tips")) + "\n  ")]) : t._e()], 1)
                }, [], !1, null, "22b370d9", null).exports
        },
        28907: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return R
                }
            });
            var r = n(74061),
                i = n(74681),
                o = n(51849),
                a = n(10033),
                s = n(23091),
                c = (0, r.defineComponent)({
                    __name: "help",
                    emits: ["close", "confirmHelp"],
                    setup: function(t, e) {
                        var n = e.emit,
                            c = (0, o.bP)((0, a.s)()).pageInfo,
                            l = (0, s.s)();
                        return (0, r.onMounted)(function() {
                            l.$trackEvent("popup", "view", "cheerup", "", {
                                page: "invite"
                            })
                        }), {
                            __sfc: !0,
                            pageInfo: c,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            },
                            ins: l,
                            confirmHelp: function() {
                                n("confirmHelp", i.QS.m_code), l.$trackEvent("popup", "click", "help_cheerup", "", {
                                    page: "invite"
                                })
                            }
                        }
                    }
                }),
                l = n(14486),
                u = (0, l.A)(c, function() {
                    var t, e, r = this,
                        i = r._self._c,
                        o = r._self._setupProxy;
                    return i("div", {
                        staticClass: "inviteDlg_comp"
                    }, [i("div", {
                        staticClass: "invite_title"
                    }, [r._v(r._s(r.$getI18nWord("help-title")))]), r._v(" "), i("div", {
                        staticClass: "invite_head"
                    }, [i("mi-images", {
                        staticClass: "user_head",
                        attrs: {
                            src: (null === (t = o.pageInfo.req_friend) || void 0 === t ? void 0 : t.avatar) || n(24331)
                        }
                    })], 1), r._v(" "), i("div", {
                        staticClass: "invite_name",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord({
                                key: "invite-name",
                                data: {
                                    nickname: "<span>".concat(null === (e = o.pageInfo.req_friend) || void 0 === e ? void 0 : e.nickname, "</span>")
                                }
                            }))
                        }
                    }), r._v(" "), i("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: o.confirmHelp
                        }
                    }, [r._v("\n    " + r._s(r.$getI18nWord("help-btn")) + "\n  ")]), r._v(" "), i("div", {
                        staticClass: "invite_tips"
                    }, [r._v(r._s(r.$getI18nWord("help-tips")))]), r._v(" "), i("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: o.closeModal
                        }
                    })], 1)
                }, [], !1, null, "0e2af61e", null).exports,
                v = (0, r.defineComponent)({
                    __name: "helpSuccess",
                    emits: ["close", "invite"],
                    setup: function(t, e) {
                        var n = e.emit,
                            i = (0, s.s)();
                        return (0, r.onMounted)(function() {
                            i.$trackEvent("popup", "view", "cheerup_success", "", {
                                page: "invite"
                            })
                        }), {
                            __sfc: !0,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            },
                            inviteShare: function() {
                                n("invite"), i.$trackEvent("popup", "click", "cheerup_invite", "", {
                                    page: "invite"
                                })
                            },
                            ins: i
                        }
                    }
                }),
                d = (0, l.A)(v, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "inviteDlg_comp"
                    }, [e("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("help-title-success"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "invite_line"
                    }), t._v(" "), e("div", {
                        staticClass: "invite_success_desc",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("help-desc-success"))
                        }
                    }), t._v(" "), e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: r.inviteShare
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("invite-btn")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    })], 1)
                }, [], !1, null, "2fa13eab", null).exports,
                f = (0, r.defineComponent)({
                    __name: "helpFail",
                    emits: ["close", "invite"],
                    setup: function(t, e) {
                        var n = e.emit,
                            r = (0, s.s)();
                        return {
                            __sfc: !0,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            },
                            ins: r,
                            invite: function() {
                                n("invite"), r.$trackEvent("popup", "click", "cheerup_fail_invite", "cheerup_limit", {
                                    page: "invite"
                                })
                            }
                        }
                    }
                }),
                p = (0, l.A)(f, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "inviteDlg_comp"
                    }, [e("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("help-title-fail"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "invite_line"
                    }), t._v(" "), e("div", {
                        staticClass: "invite_desc",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("help-desc-fail"))
                        }
                    }), t._v(" "), e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: r.invite
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("invite-btn")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    })], 1)
                }, [], !1, null, "754bec63", null).exports,
                _ = n(91075),
                m = n(73837),
                g = n(62509);

            function h() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return y(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (y(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, y(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, y(v, "constructor", l), y(l, "constructor", c), c.displayName = "GeneratorFunction", y(l, i, "GeneratorFunction"), y(v), y(v, i, "Generator"), y(v, r, function() {
                    return this
                }), y(v, "toString", function() {
                    return "[object Generator]"
                }), (h = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function y(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                y = function(t, e, n, r) {
                    function o(e, n) {
                        y(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, y(t, e, n, r)
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            l = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            l = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return k(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function w(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function C(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            w(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            w(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }
            var I = (0, r.defineComponent)({
                    __name: "bind",
                    props: {
                        clickBind: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["close", "bind"],
                    setup: function(t, e) {
                        var n = e.emit,
                            c = (0, o.bP)((0, a.s)()).pageInfo,
                            l = (0, r.ref)(i.QS.m_code),
                            u = (0, m.Ak)(C(h().m(function t() {
                                var e, n, r, i, o, a;
                                return h().w(function(t) {
                                    for (;;) switch (t.n) {
                                        case 0:
                                            if (null === (e = d.$effectPlayer) || void 0 === e || null === (n = e.play) || void 0 === n || n.call(e, g.qA.click), !navigator.clipboard) {
                                                t.n = 3;
                                                break
                                            }
                                            return t.n = 1, (0, m.$m)(navigator.clipboard.readText());
                                        case 1:
                                            if (r = t.v, i = b(r, 2), o = i[0], a = i[1], !o && a) {
                                                t.n = 2;
                                                break
                                            }
                                            return t.a(2);
                                        case 2:
                                            l.value = a.trim().replace(v, "");
                                        case 3:
                                            if (d.$refs.codeInput) {
                                                t.n = 4;
                                                break
                                            }
                                            return t.a(2);
                                        case 4:
                                            d.$refs.codeInput.focus(), document.execCommand("paste");
                                        case 5:
                                            return t.a(2)
                                    }
                                }, t)
                            }))),
                            v = /[^0-9a-zA-Z]/g,
                            d = (0, s.s)();
                        return (0, r.onMounted)(function() {
                            d.$trackEvent("popup", "view", "bind", "", {
                                page: "invite"
                            })
                        }), {
                            __sfc: !0,
                            pageInfo: c,
                            inputVal: l,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            },
                            bind: function() {
                                n("bind", l.value), d.$trackEvent("popup", "click", "confirm_bind", "", {
                                    page: "invite"
                                })
                            },
                            handlePaste: u,
                            CODE_REGEX: v,
                            handleInput: function(t) {
                                var e, n, r = (null !== (e = null === (n = t.target) || void 0 === n ? void 0 : n.value) && void 0 !== e ? e : "").replace(v, "").substring(0, 20);
                                l.value = r
                            },
                            ins: d
                        }
                    }
                }),
                S = (0, l.A)(I, function() {
                    var t, e, r = this,
                        i = r._self._c,
                        o = r._self._setupProxy;
                    return i("div", {
                        staticClass: "inviteDlg_comp"
                    }, [i("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord("invite-dlg-title"))
                        }
                    }), r._v(" "), i("div", {
                        staticClass: "invite_line"
                    }), r._v(" "), i("div", {
                        staticClass: "invite_desc",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord({
                                key: r.clickBind ? "invite-dlg-desc-1" : "invite-dlg-desc",
                                data: {
                                    nickname: "<span>".concat(null === (t = o.pageInfo.req_friend) || void 0 === t ? void 0 : t.nickname, "</span>"),
                                    uid: "<span>".concat(null === (e = o.pageInfo.req_friend) || void 0 === e ? void 0 : e.uid, "</span>")
                                }
                            }))
                        }
                    }), r._v(" "), i("div", {
                        staticClass: "bind_content",
                        class: {
                            clickBind: r.clickBind
                        }
                    }, [i("input", {
                        key: "input",
                        ref: "codeInput",
                        staticClass: "bind-input-input",
                        attrs: {
                            type: "text",
                            placeholder: r.$getI18nWord("invite_input_placeholder")
                        },
                        domProps: {
                            value: o.inputVal
                        },
                        on: {
                            input: o.handleInput
                        }
                    }), r._v(" "), r.clickBind ? i("div", {
                        staticClass: "paste_btn",
                        on: {
                            click: o.handlePaste
                        }
                    }) : r._e()]), r._v(" "), i("div", {
                        staticClass: "bind_tips"
                    }, [r._v(r._s(r.$getI18nWord("bind_tips")))]), r._v(" "), i("div", {
                        staticClass: "award-icon"
                    }), r._v(" "), i("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: o.bind
                        }
                    }, [r._v("\n    " + r._s(r.$getI18nWord("invite-dlg-btn")) + "\n  ")]), r._v(" "), i("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: o.closeModal
                        }
                    })], 1)
                }, [], !1, null, "0e343c4f", null).exports,
                P = n(83923),
                $ = (0, r.defineComponent)({
                    __name: "bindSuccess",
                    emits: ["close", "game"],
                    setup: function(t, e) {
                        var n = e.emit,
                            a = (0, o.bP)((0, P.i)()).isBili,
                            c = (0, s.s)();
                        return (0, r.onMounted)(function() {
                            c.$trackEvent("popup", "view", "bind_success", "", {
                                page: "invite"
                            })
                        }), {
                            __sfc: !0,
                            isBili: a,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            },
                            game: function() {
                                n("game"), c.$trackEvent("popup", "click", "open_game", "", {
                                    page: "invite"
                                })
                            },
                            ins: c,
                            QS: i.QS
                        }
                    }
                }),
                T = (0, l.A)($, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "inviteDlg_comp"
                    }, [e("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-title-success"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "invite_line"
                    }), t._v(" "), e("div", {
                        staticClass: "bind_award"
                    }), t._v(" "), e("div", {
                        staticClass: "invite_success_desc",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-desc-success"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "invite_tips"
                    }, [t._v(t._s(t.$getI18nWord("bind-tips")))]), t._v(" "), e("div", {
                        staticClass: "invite_bottom_bg"
                    }, [e("div", {
                        staticClass: "content",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-bottom-tips"))
                        }
                    })]), t._v(" "), r.isBili || r.QS.authkey ? e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("close")
                            }
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("invite-confirm")) + "\n  ")]) : e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: r.game
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("bind-game")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    })], 1)
                }, [], !1, null, "11770368", null).exports,
                O = n(82006),
                E = (0, r.defineComponent)({
                    __name: "bindFailNot",
                    emits: ["close"],
                    setup: function(t, e) {
                        var n = e.emit,
                            r = (0, s.s)();
                        return {
                            __sfc: !0,
                            ins: r,
                            emits: n,
                            closeModal: function() {
                                n("close"), r.$trackEvent("popup", "click", "confirm_bind_fail", "", {
                                    page: "invite"
                                })
                            }
                        }
                    }
                }),
                A = (0, l.A)(E, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "inviteDlg_comp"
                    }, [e("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("help-title-fail-same"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "invite_desc",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-desc-fail-not"))
                        }
                    }), t._v(" "), e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: r.closeModal
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("invite-confirm")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    })], 1)
                }, [], !1, null, "ba1fc360", null).exports,
                L = (0, r.defineComponent)({
                    __name: "bindFailMax",
                    emits: ["close", "help"],
                    setup: function(t, e) {
                        var n = e.emit,
                            r = function() {
                                n("close")
                            };
                        return {
                            __sfc: !0,
                            emits: n,
                            closeModal: r,
                            helpModal: function() {
                                r(), n("help")
                            }
                        }
                    }
                }),
                x = (0, l.A)(L, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "inviteDlg_comp"
                    }, [e("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-title-fail-max"))
                        }
                    }), t._v(" "), e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: r.helpModal
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("bind-help")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    })], 1)
                }, [], !1, null, "0c3d67ef", null).exports,
                M = n(60975),
                j = n(46781),
                H = n(59571);

            function W() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return D(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (D(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, D(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, D(v, "constructor", l), D(l, "constructor", c), c.displayName = "GeneratorFunction", D(l, i, "GeneratorFunction"), D(v), D(v, i, "Generator"), D(v, r, function() {
                    return this
                }), D(v, "toString", function() {
                    return "[object Generator]"
                }), (W = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function D(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                D = function(t, e, n, r) {
                    function o(e, n) {
                        D(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, D(t, e, n, r)
            }

            function G(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function B(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            G(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            G(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }
            var F = (0, r.defineComponent)({
                    __name: "index",
                    props: {
                        type: {
                            type: String,
                            default: "HelpFail"
                        },
                        clickBind: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["close"],
                    setup: function(t, e) {
                        var n = e.emit,
                            i = t,
                            o = (0, a.s)(),
                            c = o.bindFriend,
                            l = o.helpFriend,
                            v = (0, r.computed)(function() {
                                return {
                                    Help: u,
                                    HelpSuccess: d,
                                    HelpFail: p,
                                    HelpFailSame: _.A,
                                    Bind: S,
                                    BindSuccess: T,
                                    BindFail: O.A,
                                    BindFailNot: A,
                                    BindFailMax: x,
                                    BindFailSame: M.A
                                }[i.type]
                            }),
                            f = (0, a.s)(),
                            g = function() {
                                n("close")
                            },
                            h = (0, s.s)(),
                            y = function() {
                                var t = B(W().m(function t(e) {
                                    var n, r, i;
                                    return W().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                return t.p = 0, t.n = 1, c({
                                                    invite_code: e
                                                });
                                            case 1:
                                                if (r = t.v, g(), null === (n = r.code_friend) || void 0 === n || !n.uid) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return h.$commonModal(M.A, {
                                                    dialogInfo: {
                                                        info: r.code_friend
                                                    }
                                                }), t.a(2);
                                            case 2:
                                                h.$commonModal(T, {
                                                    methods: {
                                                        game: function() {
                                                            b()
                                                        }
                                                    }
                                                }), t.n = 7;
                                                break;
                                            case 3:
                                                if (t.p = 3, -513008 !== (i = t.v).data.retcode) {
                                                    t.n = 4;
                                                    break
                                                }
                                                return g(), h.$commonModal(O.A), t.a(2);
                                            case 4:
                                                if (-513006 !== i.data.retcode) {
                                                    t.n = 5;
                                                    break
                                                }
                                                return g(), h.$commonModal(A), h.$trackEvent("popup", "view", "bind_fail", "bind_active_user", {
                                                    page: "invite"
                                                }), t.a(2);
                                            case 5:
                                                if (-513002 !== i.data.retcode) {
                                                    t.n = 6;
                                                    break
                                                }
                                                return g(), h.$commonModal(x, {
                                                    methods: {
                                                        help: k
                                                    }
                                                }), h.$trackEvent("popup", "view", "bind_fail", "bind_fail", {
                                                    page: "invite"
                                                }), t.a(2);
                                            case 6:
                                                513011 === i.data.retcode ? h.$trackEvent("popup", "view", "bind_fail", "bind_already", {
                                                    page: "invite"
                                                }) : -513007 === i.data.retcode ? h.$trackEvent("popup", "view", "bind_fail", "bind_same_aid", {
                                                    page: "invite"
                                                }) : h.$trackEvent("popup", "view", "bind_fail", "bind_fail", {
                                                    page: "invite"
                                                }), h.$mtoast(i.data.message);
                                            case 7:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [0, 3]
                                    ])
                                }));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            b = function() {
                                (0, m.h1)(!0)
                            },
                            k = function() {
                                h.$commonModal(u, {
                                    methods: {
                                        confirmHelp: w
                                    }
                                })
                            },
                            w = function() {
                                var t = B(W().m(function t(e) {
                                    var n, r, i;
                                    return W().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                return t.p = 0, t.n = 1, l({
                                                    invite_code: e
                                                });
                                            case 1:
                                                if (r = t.v, g(), null === (n = r.help_friend) || void 0 === n || !n.uid) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return h.$commonModal(_.A, {
                                                    dialogInfo: {
                                                        info: r.help_friend
                                                    }
                                                }), t.a(2);
                                            case 2:
                                                h.$commonModal(d, {
                                                    methods: {
                                                        invite: C
                                                    }
                                                }), t.n = 5;
                                                break;
                                            case 3:
                                                if (t.p = 3, -513013 !== (i = t.v).data.retcode) {
                                                    t.n = 4;
                                                    break
                                                }
                                                return g(), h.$commonModal(p, {
                                                    methods: {
                                                        invite: C
                                                    }
                                                }), h.$trackEvent("popup", "view", "cheerup_fail", "cheerup_limit", {
                                                    page: "invite"
                                                }), t.a(2);
                                            case 4:
                                                -513007 === i.data.retcode ? h.$trackEvent("popup", "view", "cheerup_fail", "cheerup_same_aid", {
                                                    page: "invite"
                                                }) : h.$trackEvent("popup", "view", "cheerup_fail", "cheerup_fail", {
                                                    page: "invite"
                                                }), h.$mtoast(i.data.message);
                                            case 5:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [0, 3]
                                    ])
                                }));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            C = function() {
                                var t = B(W().m(function t() {
                                    var e;
                                    return W().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                if (e = f.shareInviteUrl || h.$mtoast.loading({
                                                        duration: 0
                                                    }), t.p = 1, f.shareInviteUrl) {
                                                    t.n = 3;
                                                    break
                                                }
                                                return t.n = 2, (0, H.E)({
                                                    isInvite: !0
                                                });
                                            case 2:
                                                f.shareInviteUrl = t.v;
                                            case 3:
                                                h.$showModal(j.A, {
                                                    dialogInfo: {
                                                        imgSrc: f.shareInviteUrl,
                                                        isInvite: !0
                                                    }
                                                }), t.n = 5;
                                                break;
                                            case 4:
                                                t.p = 4, t.v, h.$mtoast(h.$getI18nWord("share_error"));
                                            case 5:
                                                return t.p = 5, h.$mtoast.clear(e), t.f(5);
                                            case 6:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [1, 4, 5, 6]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return {
                            __sfc: !0,
                            bindFriend: c,
                            helpFriend: l,
                            props: i,
                            compName: v,
                            store: f,
                            emits: n,
                            closeModal: g,
                            ins: h,
                            handleBind: y,
                            handleToGame: b,
                            handleHelp: k,
                            handleConfirmHelp: w,
                            handleInvite: C
                        }
                    }
                }),
                N = F,
                R = (0, l.A)(N, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e(n.compName, {
                        tag: "components",
                        attrs: {
                            clickBind: t.clickBind
                        },
                        on: {
                            close: n.closeModal,
                            bind: n.handleBind,
                            game: n.handleToGame,
                            help: n.handleHelp,
                            confirmHelp: n.handleConfirmHelp,
                            invite: n.handleInvite
                        }
                    })
                }, [], !1, null, "aacffe9e", null).exports
        },
        46781: function(t, e, n) {
            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        a(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function a(t, e, n) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != r(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != r(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == r(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                A: function() {
                    return k
                }
            });
            var s = n(74061),
                c = n(23091),
                l = n(49363),
                u = n(62509),
                v = n(10033),
                d = n(74681),
                f = n(10303),
                p = n(51849),
                _ = n(83923);

            function m() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        l = Object.create(c.prototype);
                    return g(l, "_invoke", function(n, r, i) {
                        var o, s, c, l = 0,
                            u = i || [],
                            v = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: f,
                                f: f.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, d.n = n, a
                                }
                            };

                        function f(n, r) {
                            for (s = n, c = r, e = 0; !v && l && !i && e < u.length; e++) {
                                var i, o = u[e],
                                    f = d.p,
                                    p = o[2];
                                n > 3 ? (i = p === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= f && ((i = n < 2 && f < o[1]) ? (s = 0, d.v = r, d.n = o[1]) : f < p && (i = n < 3 || o[0] > r || r > p) && (o[4] = n, o[5] = r, d.n = p, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw v = !0, r
                        }
                        return function(i, u, p) {
                            if (l > 1) throw TypeError("Generator is already running");
                            for (v && 1 === u && f(u, p), s = u, c = p;
                                (e = s < 2 ? t : c) || !v;) {
                                o || (s ? s < 3 ? (s > 1 && (d.n = -1), f(s, c)) : d.n = c : d.v = c);
                                try {
                                    if (l = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (v = d.n < 0) ? c : n.call(r, d)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    l = 1
                                }
                            }
                            return {
                                value: e,
                                done: v
                            }
                        }
                    }(n, i, o), !0), l
                }
                var a = {};

                function s() {}

                function c() {}

                function l() {}
                e = Object.getPrototypeOf;
                var u = [][r] ? e(e([][r]())) : (g(e = {}, r, function() {
                        return this
                    }), e),
                    v = l.prototype = s.prototype = Object.create(u);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l, g(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }
                return c.prototype = l, g(v, "constructor", l), g(l, "constructor", c), c.displayName = "GeneratorFunction", g(l, i, "GeneratorFunction"), g(v), g(v, i, "Generator"), g(v, r, function() {
                    return this
                }), g(v, "toString", function() {
                    return "[object Generator]"
                }), (m = function() {
                    return {
                        w: o,
                        m: d
                    }
                })()
            }

            function g(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                g = function(t, e, n, r) {
                    function o(e, n) {
                        g(t, e, function(t) {
                            return this._invoke(e, n, t)
                        })
                    }
                    e ? i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n : (o("next", 0), o("throw", 1), o("return", 2))
                }, g(t, e, n, r)
            }

            function h(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            var y = (0, s.defineComponent)({
                    __name: "modal",
                    props: {
                        imgSrc: {
                            type: String,
                            default: ""
                        },
                        isRecord: {
                            type: Boolean,
                            default: !1
                        },
                        isInvite: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["close"],
                    setup: function(t, e) {
                        var r = e.emit,
                            i = t,
                            o = (0, c.s)(),
                            a = (0, p.bP)((0, v.s)()),
                            g = a.pageInfo,
                            y = a.inviteCopyText,
                            b = a.copyText,
                            k = (0, v.s)().getAwardTask,
                            w = (0, p.bP)((0, _.i)()).isBili,
                            C = (0, s.computed)(function() {
                                return i.imgSrc
                            }),
                            I = (0, s.ref)({
                                facebook: {
                                    icon: n(1448)
                                },
                                twitter: {
                                    icon: n(18862)
                                },
                                instagram: {
                                    icon: n(33542)
                                },
                                reddit: {
                                    icon: n(3468)
                                },
                                line: {
                                    icon: n(88462)
                                },
                                cafe: {
                                    icon: n(65107)
                                },
                                forum: {
                                    icon: n(27109)
                                },
                                vk: {
                                    icon: n(42145)
                                },
                                image: {
                                    icon: n(95719)
                                },
                                native: {
                                    icon: n(98797)
                                }
                            }),
                            S = (0, s.computed)(function() {
                                return {
                                    title: o.$getI18nWord("share_title"),
                                    desc: o.$getI18nWord("share_desc"),
                                    url: u._X,
                                    copyFullText: i.isInvite || i.isRecord ? y.value : b.value,
                                    type: "image",
                                    img_url: C.value
                                }
                            }),
                            P = (0, s.computed)(function() {
                                return {
                                    key: "m20251210hy2emh9nnk",
                                    lang: o.$getLang(),
                                    game_biz: "hk4e_global",
                                    title_key: "share_title",
                                    desc_key: "share_desc",
                                    share_text_key: "x_share_text",
                                    copyFullText: i.isInvite || i.isRecord ? y.value : b.value,
                                    url: u._X,
                                    img_url: C.value
                                }
                            }),
                            $ = function() {
                                var t, e = (t = m().m(function t(e) {
                                    var n, r, a, s;
                                    return m().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                if (r = e.value, a = (null === (n = g.value.tasks) || void 0 === n ? void 0 : n.find(function(t) {
                                                        return t.task_id === u.yQ
                                                    })) || {}, s = "TS_ACK" !== a.status, i.isInvite ? o.$trackEvent("popup", "click", "share_invite", r, {
                                                        page: "invite"
                                                    }) : i.isRecord ? o.$trackEvent("popup", "click", "share_report", r, {
                                                        page: "draw"
                                                    }) : o.$trackEvent("popup", "click", "share", r), !s) {
                                                    t.n = 2;
                                                    break
                                                }
                                                return t.n = 1, k({
                                                    task_id: u.yQ
                                                });
                                            case 1:
                                                o.$showModal(f.A, {
                                                    dialogInfo: {
                                                        id: u.yQ
                                                    }
                                                });
                                            case 2:
                                                return t.a(2)
                                        }
                                    }, t)
                                }), function() {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function(r, i) {
                                        var o = t.apply(e, n);

                                        function a(t) {
                                            h(o, r, i, a, s, "next", t)
                                        }

                                        function s(t) {
                                            h(o, r, i, a, s, "throw", t)
                                        }
                                        a(void 0)
                                    })
                                });
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return (0, s.onMounted)(function() {
                            i.isInvite ? o.$trackEvent("popup", "view", "share_invite", "", {
                                page: "invite"
                            }) : i.isRecord ? o.$trackEvent("popup", "view", "share_report", "", {
                                page: "draw"
                            }) : o.$trackEvent("popup", "view", "share", "")
                        }), {
                            __sfc: !0,
                            ins: o,
                            pageInfo: g,
                            inviteCopyText: y,
                            copyText: b,
                            getAwardTask: k,
                            isBili: w,
                            emits: r,
                            props: i,
                            shareImg: C,
                            shareListConfig: I,
                            shareOptsCn: S,
                            shareOptsSea: P,
                            onShare: $,
                            onCopy: function() {
                                i.isInvite ? o.$trackEvent("popup", "click", "copy_link_invite", "", {
                                    page: "invite"
                                }) : i.isRecord ? o.$trackEvent("popup", "click", "copy_link_report", "", {
                                    page: "draw"
                                }) : o.$trackEvent("popup", "click", "copy_link", "")
                            },
                            closeModal: function() {
                                r("close")
                            },
                            MyShare: l.Ay,
                            ShareList: l.WW,
                            IS_SEA: d.p4,
                            IS_BBS: d.bS
                        }
                    }
                }),
                b = y,
                k = (0, n(14486).A)(b, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "sha-modal common-font"
                    }, [e("mi-images", {
                        staticClass: "sha-modal-bg",
                        attrs: {
                            useImg: "",
                            src: t.imgSrc
                        }
                    }), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "sha-modal-sha-list"
                    }, [r.IS_BBS || r.isBili ? r.isBili ? t._e() : e(r.MyShare, {
                        key: "sha-btn",
                        attrs: {
                            isSea: r.IS_SEA,
                            popoverOpts: {
                                platsCnExcludes: ["link"],
                                platsSeaExcludes: ["link"]
                            },
                            shareOptsCn: r.shareOptsCn,
                            shareOptsSea: r.shareOptsSea
                        },
                        on: {
                            share: r.onShare
                        }
                    }, [e("hover-btn", {
                        staticClass: "sha-modal-sha-btn",
                        attrs: {
                            img: n(43187),
                            "img-hover": n(72820)
                        }
                    }, [t._v("\n        " + t._s(t.$getI18nWord("share_btn")) + "\n      ")])], 1) : e(r.ShareList, {
                        key: "share-list",
                        attrs: {
                            isSea: r.IS_SEA,
                            shareListConfig: r.shareListConfig,
                            popoverOpts: {
                                platsCnExcludes: ["link"],
                                platsSeaExcludes: ["link"]
                            },
                            iconTheme: "light",
                            shareOptsCn: r.shareOptsCn,
                            shareOptsSea: r.shareOptsSea
                        },
                        on: {
                            share: r.onShare
                        }
                    }), t._v(" "), e(r.MyShare, {
                        key: "copy-btn",
                        attrs: {
                            isSea: r.IS_SEA,
                            shareOptsCn: o(o({}, r.shareOptsCn), {}, {
                                copy: !0
                            }),
                            shareOptsSea: o(o({}, r.shareOptsSea), {}, {
                                copy: !0
                            })
                        },
                        on: {
                            share: r.onShare
                        }
                    }, [e("hover-btn", {
                        staticClass: "sha-modal-copy-btn",
                        attrs: {
                            img: n(43187),
                            "img-hover": n(72820)
                        },
                        on: {
                            click: r.onCopy
                        }
                    }, [t._v("\n        " + t._s(t.$getI18nWord("share_copy")) + "\n      ")])], 1)], 1)], 1)
                }, [], !1, null, "36f6fa17", null).exports
        },
        60975: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return a
                }
            });
            var r = n(74061),
                i = n(23091),
                o = (0, r.defineComponent)({
                    __name: "bindFailSame",
                    props: {
                        info: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    emits: ["close"],
                    setup: function(t, e) {
                        var n = e.emit,
                            o = (0, i.s)();
                        return (0, r.onMounted)(function() {
                            o.$trackEvent("popup", "view", "bind_fail", "bind_already", {
                                page: "invite"
                            })
                        }), {
                            __sfc: !0,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            },
                            ins: o
                        }
                    }
                }),
                a = (0, n(14486).A)(o, function() {
                    var t, e, r = this,
                        i = r._self._c,
                        o = r._self._setupProxy;
                    return i("div", {
                        staticClass: "inviteDlg_comp"
                    }, [i("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord("help-title-fail-same"))
                        }
                    }), r._v(" "), i("div", {
                        staticClass: "invite_desc",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord({
                                key: "bind-desc-fail-same",
                                data: {
                                    nickname: "<span>".concat(null === (t = r.info) || void 0 === t ? void 0 : t.nickname, "</span>"),
                                    uid: "<span>".concat(null === (e = r.info) || void 0 === e ? void 0 : e.uid, "</span>")
                                }
                            }))
                        }
                    }), r._v(" "), i("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: o.closeModal
                        }
                    }, [r._v("\n    " + r._s(r.$getI18nWord("invite-confirm")) + "\n  ")]), r._v(" "), i("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: o.closeModal
                        }
                    })], 1)
                }, [], !1, null, "7f755253", null).exports
        },
        75306: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return c
                }
            });
            var r = n(74061),
                i = n(34329),
                o = n(61270),
                a = n(23091),
                s = (0, r.defineComponent)({
                    __name: "index",
                    setup: function(t) {
                        var e = (0, a.s)(),
                            n = function() {
                                var t = e.$getI18nWord("seo_title");
                                t && (document.title = t)
                            };
                        return n(), {
                            __sfc: !0,
                            app: e,
                            init: n,
                            MePs: i.A,
                            i18nEnv: o.WO
                        }
                    }
                }),
                c = (0, n(14486).A)(s, function() {
                    var t = this,
                        e = t._self._c,
                        n = t._self._setupProxy;
                    return e(n.MePs, {
                        staticClass: "ps",
                        attrs: {
                            "bg-img": {
                                w: 2500,
                                h: 1080,
                                url: t.$getI18nWord("ps_bg")
                            },
                            env: n.i18nEnv,
                            qrConfig: {
                                color: {
                                    dark: "#476892",
                                    light: "#FFF"
                                },
                                margin: 0
                            },
                            "qr-img": {
                                w: 170,
                                h: 170,
                                x: 660,
                                y: 674
                            }
                        }
                    })
                }, [], !1, null, "6dd04249", null).exports
        },
        82006: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return a
                }
            });
            var r = n(74061),
                i = n(23091),
                o = (0, r.defineComponent)({
                    __name: "bindFail",
                    emits: ["close"],
                    setup: function(t, e) {
                        var n = e.emit,
                            o = (0, i.s)();
                        return (0, r.onMounted)(function() {
                            o.$trackEvent("popup", "view", "bind_fail", "bind_limit", {
                                page: "invite"
                            })
                        }), {
                            __sfc: !0,
                            emits: n,
                            ins: o,
                            closeModal: function() {
                                n("close"), o.$trackEvent("popup", "click", "confirm_bind_fail", "", {
                                    page: "invite"
                                })
                            }
                        }
                    }
                }),
                a = (0, n(14486).A)(o, function() {
                    var t = this,
                        e = t._self._c,
                        r = t._self._setupProxy;
                    return e("div", {
                        staticClass: "inviteDlg_comp"
                    }, [e("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-title-fail"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "invite_line"
                    }), t._v(" "), e("div", {
                        staticClass: "invite_desc",
                        domProps: {
                            innerHTML: t._s(t.$getI18nWord("bind-desc-fail"))
                        }
                    }), t._v(" "), e("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: r.closeModal
                        }
                    }, [t._v("\n    " + t._s(t.$getI18nWord("invite-confirm")) + "\n  ")]), t._v(" "), e("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: r.closeModal
                        }
                    })], 1)
                }, [], !1, null, "ae5fed9a", null).exports
        },
        83002: function(t, e) {
            e.A = {
                images: "src-components-common-basics-images-assets-__index_---images---N9_3xS",
                "images-item": "src-components-common-basics-images-assets-__index_---images-item---HCSk2L",
                imagesItem: "src-components-common-basics-images-assets-__index_---images-item---HCSk2L",
                imagesScale: "src-components-common-basics-images-assets-__index_---imagesScale---ve3huP"
            }
        },
        91075: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return i
                }
            });
            var r = (0, n(74061).defineComponent)({
                    __name: "helpFailSame",
                    props: {
                        info: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    emits: ["close"],
                    setup: function(t, e) {
                        var n = e.emit;
                        return {
                            __sfc: !0,
                            emits: n,
                            closeModal: function() {
                                n("close")
                            }
                        }
                    }
                }),
                i = (0, n(14486).A)(r, function() {
                    var t, e, r = this,
                        i = r._self._c,
                        o = r._self._setupProxy;
                    return i("div", {
                        staticClass: "inviteDlg_comp"
                    }, [i("div", {
                        staticClass: "invite_title",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord("help-title-fail-same"))
                        }
                    }), r._v(" "), i("div", {
                        staticClass: "invite_desc",
                        domProps: {
                            innerHTML: r._s(r.$getI18nWord({
                                key: "help-desc-fail-same",
                                data: {
                                    nickname: "<span>".concat(null === (t = r.info) || void 0 === t ? void 0 : t.nickname, "</span>"),
                                    uid: "<span>".concat(null === (e = r.info) || void 0 === e ? void 0 : e.uid, "</span>")
                                }
                            }))
                        }
                    }), r._v(" "), i("hover-btn", {
                        staticClass: "invite_btn",
                        attrs: {
                            img: n(23695),
                            imgHover: n(97114)
                        },
                        on: {
                            click: o.closeModal
                        }
                    }, [r._v("\n    " + r._s(r.$getI18nWord("invite-confirm")) + "\n  ")]), r._v(" "), i("hover-btn", {
                        staticClass: "close-btn",
                        attrs: {
                            img: n(40363),
                            imgHover: n(63996)
                        },
                        on: {
                            click: o.closeModal
                        }
                    })], 1)
                }, [], !1, null, "fa412c4e", null).exports
        }
    }
]);