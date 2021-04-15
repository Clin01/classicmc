!(function(e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    i((i.s = 228));
})([
  function(e, t, i) {
    var n = i(5),
      r = i(14),
      o = i(23),
      a = i(19),
      s = i(34),
      c = function e(t, i, c) {
        var u,
          l,
          h,
          f,
          d = t & e.F,
          p = t & e.G,
          m = t & e.P,
          g = t & e.B,
          _ = p ? n : t & e.S ? n[i] || (n[i] = {}) : (n[i] || {}).prototype,
          v = p ? r : r[i] || (r[i] = {}),
          y = v.prototype || (v.prototype = {});
        for (u in (p && (c = i), c))
          (h = ((l = !d && _ && void 0 !== _[u]) ? _ : c)[u]),
            (f =
              g && l
                ? s(h, n)
                : m && "function" == typeof h
                ? s(Function.call, h)
                : h),
            _ && a(_, u, h, t & e.U),
            v[u] != h && o(v, u, f),
            m && y[u] != h && (y[u] = h);
      };
    (n.core = r),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function(e, t) {
    "function" == typeof Object.create
      ? (e.exports = function(e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        })
      : (e.exports = function(e, t) {
          e.super_ = t;
          var i = function() {};
          (i.prototype = t.prototype),
            (e.prototype = new i()),
            (e.prototype.constructor = e);
        });
  },
  function(e, t, i) {
    var n = i(9),
      r = n.Buffer;
    function o(e, t) {
      for (var i in e) t[i] = e[i];
    }
    function a(e, t, i) {
      return r(e, t, i);
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow
      ? (e.exports = n)
      : (o(n, t), (t.Buffer = a)),
      o(r, a),
      (a.from = function(e, t, i) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return r(e, t, i);
      }),
      (a.alloc = function(e, t, i) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var n = r(e);
        return (
          void 0 !== t
            ? "string" == typeof i
              ? n.fill(t, i)
              : n.fill(t)
            : n.fill(0),
          n
        );
      }),
      (a.allocUnsafe = function(e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return r(e);
      }),
      (a.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n.SlowBuffer(e);
      });
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t, i) {
    var n = i(6);
    e.exports = function(e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function(e, t) {
    var i = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = i);
  },
  function(e, t) {
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    e.exports = function(e) {
      return "object" === i(e) ? null !== e : "function" == typeof e;
    };
  },
  function(e, t, i) {
    "use strict";
    function n(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    i.r(t);
    var r = (function() {
      function e() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          e.instance || (e.instance = this),
          (this.changedBlocks = {}),
          (this.worldSeed = null),
          (this.worldSize = 128),
          (this.timeout = null),
          (this.version = 0),
          this.loadDataIfExists(),
          e.instance
        );
      }
      var t, i, r;
      return (
        (t = e),
        (r = [
          {
            key: "getInstance",
            value: function() {
              return (
                void 0 === e.instance && (e.instance = new e()), e.instance
              );
            }
          }
        ]),
        (i = [
          {
            key: "loadDataIfExists",
            value: function() {
              var e = localStorage.getItem("savedGame");
              if (e) {
                var t = JSON.parse(e);
                (this.worldSeed = t.worldSeed),
                  (this.changedBlocks = t.changedBlocks),
                  (this.worldSize = t.worldSize),
                  (this.version = void 0 !== t.version ? t.version : 0);
              }
              0 === this.version && this.clearData();
            }
          },
          {
            key: "gameSaved",
            value: function() {
              return !!this.worldSeed;
            }
          },
          {
            key: "updateData",
            value: function() {
              var e = JSON.stringify({
                worldSeed: this.worldSeed,
                changedBlocks: this.changedBlocks,
                worldSize: this.worldSize,
                version: 1
              });
              localStorage.setItem("savedGame", e);
            }
          },
          {
            key: "clearData",
            value: function() {
              (this.worldSeed = null),
                (this.changedBlocks = {}),
                this.updateData();
            }
          },
          {
            key: "setWorldSeed",
            value: function(e) {
              (this.worldSeed = e), this.updateData();
            }
          },
          {
            key: "getWorldSeed",
            value: function() {
              return this.worldSeed;
            }
          },
          {
            key: "setWorldSize",
            value: function(e) {
              (this.worldSize = e), this.updateData();
            }
          },
          {
            key: "getWorldSize",
            value: function() {
              return this.worldSize;
            }
          },
          {
            key: "addBlockChange",
            value: function(e) {
              var t = this;
              (this.changedBlocks[
                "p" + e.p[0] + "_" + e.p[1] + "_" + e.p[2]
              ] = { a: e.add ? 1 : 0, bt: e.bt }),
                null === this.timeout &&
                  (this.timeout = setTimeout(function() {
                    Date.now();
                    t.updateData(), (t.timeout = null);
                  }, 3e3));
            }
          },
          {
            key: "getChangedBlocks",
            value: function() {
              var e = [];
              for (var t in this.changedBlocks) {
                var i = t
                  .substr(1)
                  .split("_")
                  .map(function(e) {
                    return parseInt(e);
                  });
                e.push({
                  p: i,
                  add: !!this.changedBlocks[t].a,
                  bt: this.changedBlocks[t].bt
                });
              }
              return e;
            }
          }
        ]) && n(t.prototype, i),
        r && n(t, r),
        e
      );
    })();
    t.default = r;
  },
  function(e, t, i) {
    var n = i(96)("wks"),
      r = i(46),
      o = i(5).Symbol,
      a = "function" == typeof o;
    (e.exports = function(e) {
      return n[e] || (n[e] = (a && o[e]) || (a ? o : r)("Symbol." + e));
    }).store = n;
  },
  function(e, t, i) {
    "use strict";
    (function(e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var n = i(398),
        r = i(399),
        o = i(168);
      function a() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (a() < t) throw new RangeError("Invalid typed array length");
        return (
          c.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = c.prototype)
            : (null === e && (e = new c(t)), (e.length = t)),
          e
        );
      }
      function c(e, t, i) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
          return new c(e, t, i);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return h(this, e);
        }
        return u(this, e, t, i);
      }
      function u(e, t, i, n) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function(e, t, i, n) {
              if ((t.byteLength, i < 0 || t.byteLength < i))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < i + (n || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === i && void 0 === n
                  ? new Uint8Array(t)
                  : void 0 === n
                  ? new Uint8Array(t, i)
                  : new Uint8Array(t, i, n);
              c.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = c.prototype)
                : (e = f(e, t));
              return e;
            })(e, t, i, n)
          : "string" == typeof t
          ? (function(e, t, i) {
              ("string" == typeof i && "" !== i) || (i = "utf8");
              if (!c.isEncoding(i))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | p(t, i),
                r = (e = s(e, n)).write(t, i);
              r !== n && (e = e.slice(0, r));
              return e;
            })(e, t, i)
          : (function(e, t) {
              if (c.isBuffer(t)) {
                var i = 0 | d(t.length);
                return 0 === (e = s(e, i)).length ? e : (t.copy(e, 0, 0, i), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (n = t.length) != n
                    ? s(e, 0)
                    : f(e, t);
                if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
              }
              var n;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function l(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function h(e, t) {
        if ((l(t), (e = s(e, t < 0 ? 0 : 0 | d(t))), !c.TYPED_ARRAY_SUPPORT))
          for (var i = 0; i < t; ++i) e[i] = 0;
        return e;
      }
      function f(e, t) {
        var i = t.length < 0 ? 0 : 0 | d(t.length);
        e = s(e, i);
        for (var n = 0; n < i; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function d(e) {
        if (e >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function p(e, t) {
        if (c.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var i = e.length;
        if (0 === i) return 0;
        for (var n = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return i;
            case "utf8":
            case "utf-8":
            case void 0:
              return V(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * i;
            case "hex":
              return i >>> 1;
            case "base64":
              return G(e).length;
            default:
              if (n) return V(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function m(e, t, i) {
        var n = e[t];
        (e[t] = e[i]), (e[i] = n);
      }
      function g(e, t, i, n, r) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof i
            ? ((n = i), (i = 0))
            : i > 2147483647
            ? (i = 2147483647)
            : i < -2147483648 && (i = -2147483648),
          (i = +i),
          isNaN(i) && (i = r ? 0 : e.length - 1),
          i < 0 && (i = e.length + i),
          i >= e.length)
        ) {
          if (r) return -1;
          i = e.length - 1;
        } else if (i < 0) {
          if (!r) return -1;
          i = 0;
        }
        if (("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)))
          return 0 === t.length ? -1 : _(e, t, i, n, r);
        if ("number" == typeof t)
          return (
            (t &= 255),
            c.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? r
                ? Uint8Array.prototype.indexOf.call(e, t, i)
                : Uint8Array.prototype.lastIndexOf.call(e, t, i)
              : _(e, [t], i, n, r)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function _(e, t, i, n, r) {
        var o,
          a = 1,
          s = e.length,
          c = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (s /= 2), (c /= 2), (i /= 2);
        }
        function u(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (r) {
          var l = -1;
          for (o = i; o < s; o++)
            if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
              if ((-1 === l && (l = o), o - l + 1 === c)) return l * a;
            } else -1 !== l && (o -= o - l), (l = -1);
        } else
          for (i + c > s && (i = s - c), o = i; o >= 0; o--) {
            for (var h = !0, f = 0; f < c; f++)
              if (u(e, o + f) !== u(t, f)) {
                h = !1;
                break;
              }
            if (h) return o;
          }
        return -1;
      }
      function v(e, t, i, n) {
        i = Number(i) || 0;
        var r = e.length - i;
        n ? (n = Number(n)) > r && (n = r) : (n = r);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        n > o / 2 && (n = o / 2);
        for (var a = 0; a < n; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[i + a] = s;
        }
        return a;
      }
      function y(e, t, i, n) {
        return z(V(t, e.length - i), e, i, n);
      }
      function b(e, t, i, n) {
        return z(
          (function(e) {
            for (var t = [], i = 0; i < e.length; ++i)
              t.push(255 & e.charCodeAt(i));
            return t;
          })(t),
          e,
          i,
          n
        );
      }
      function E(e, t, i, n) {
        return b(e, t, i, n);
      }
      function T(e, t, i, n) {
        return z(G(t), e, i, n);
      }
      function A(e, t, i, n) {
        return z(
          (function(e, t) {
            for (
              var i, n, r, o = [], a = 0;
              a < e.length && !((t -= 2) < 0);
              ++a
            )
              (i = e.charCodeAt(a)),
                (n = i >> 8),
                (r = i % 256),
                o.push(r),
                o.push(n);
            return o;
          })(t, e.length - i),
          e,
          i,
          n
        );
      }
      function x(e, t, i) {
        return 0 === t && i === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, i));
      }
      function S(e, t, i) {
        i = Math.min(e.length, i);
        for (var n = [], r = t; r < i; ) {
          var o,
            a,
            s,
            c,
            u = e[r],
            l = null,
            h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (r + h <= i)
            switch (h) {
              case 1:
                u < 128 && (l = u);
                break;
              case 2:
                128 == (192 & (o = e[r + 1])) &&
                  (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                  (l = c);
                break;
              case 3:
                (o = e[r + 1]),
                  (a = e[r + 2]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (l = c);
                break;
              case 4:
                (o = e[r + 1]),
                  (a = e[r + 2]),
                  (s = e[r + 3]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (c =
                      ((15 & u) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    c < 1114112 &&
                    (l = c);
            }
          null === l
            ? ((l = 65533), (h = 1))
            : l > 65535 &&
              ((l -= 65536),
              n.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
            n.push(l),
            (r += h);
        }
        return (function(e) {
          var t = e.length;
          if (t <= C) return String.fromCharCode.apply(String, e);
          var i = "",
            n = 0;
          for (; n < t; )
            i += String.fromCharCode.apply(String, e.slice(n, (n += C)));
          return i;
        })(n);
      }
      (t.Buffer = c),
        (t.SlowBuffer = function(e) {
          +e != e && (e = 0);
          return c.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (c.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function() {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                        return 42;
                      }
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = a()),
        (c.poolSize = 8192),
        (c._augment = function(e) {
          return (e.__proto__ = c.prototype), e;
        }),
        (c.from = function(e, t, i) {
          return u(null, e, t, i);
        }),
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0
            })),
        (c.alloc = function(e, t, i) {
          return (function(e, t, i, n) {
            return (
              l(t),
              t <= 0
                ? s(e, t)
                : void 0 !== i
                ? "string" == typeof n
                  ? s(e, t).fill(i, n)
                  : s(e, t).fill(i)
                : s(e, t)
            );
          })(null, e, t, i);
        }),
        (c.allocUnsafe = function(e) {
          return h(null, e);
        }),
        (c.allocUnsafeSlow = function(e) {
          return h(null, e);
        }),
        (c.isBuffer = function(e) {
          return !(null == e || !e._isBuffer);
        }),
        (c.compare = function(e, t) {
          if (!c.isBuffer(e) || !c.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var i = e.length, n = t.length, r = 0, o = Math.min(i, n);
            r < o;
            ++r
          )
            if (e[r] !== t[r]) {
              (i = e[r]), (n = t[r]);
              break;
            }
          return i < n ? -1 : n < i ? 1 : 0;
        }),
        (c.isEncoding = function(e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (c.concat = function(e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return c.alloc(0);
          var i;
          if (void 0 === t)
            for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
          var n = c.allocUnsafe(t),
            r = 0;
          for (i = 0; i < e.length; ++i) {
            var a = e[i];
            if (!c.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(n, r), (r += a.length);
          }
          return n;
        }),
        (c.byteLength = p),
        (c.prototype._isBuffer = !0),
        (c.prototype.swap16 = function() {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (c.prototype.swap32 = function() {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (c.prototype.swap64 = function() {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            m(this, t, t + 7),
              m(this, t + 1, t + 6),
              m(this, t + 2, t + 5),
              m(this, t + 3, t + 4);
          return this;
        }),
        (c.prototype.toString = function() {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? S(this, 0, e)
            : function(e, t, i) {
                var n = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === i || i > this.length) && (i = this.length),
                  i <= 0)
                )
                  return "";
                if ((i >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return M(this, t, i);
                    case "utf8":
                    case "utf-8":
                      return S(this, t, i);
                    case "ascii":
                      return P(this, t, i);
                    case "latin1":
                    case "binary":
                      return R(this, t, i);
                    case "base64":
                      return x(this, t, i);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return O(this, t, i);
                    default:
                      if (n) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (n = !0);
                  }
              }.apply(this, arguments);
        }),
        (c.prototype.equals = function(e) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === c.compare(this, e);
        }),
        (c.prototype.inspect = function() {
          var e = "",
            i = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, i)
                .match(/.{2}/g)
                .join(" ")),
              this.length > i && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (c.prototype.compare = function(e, t, i, n, r) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === i && (i = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = this.length),
            t < 0 || i > e.length || n < 0 || r > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= r && t >= i) return 0;
          if (n >= r) return -1;
          if (t >= i) return 1;
          if (this === e) return 0;
          for (
            var o = (r >>>= 0) - (n >>>= 0),
              a = (i >>>= 0) - (t >>>= 0),
              s = Math.min(o, a),
              u = this.slice(n, r),
              l = e.slice(t, i),
              h = 0;
            h < s;
            ++h
          )
            if (u[h] !== l[h]) {
              (o = u[h]), (a = l[h]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (c.prototype.includes = function(e, t, i) {
          return -1 !== this.indexOf(e, t, i);
        }),
        (c.prototype.indexOf = function(e, t, i) {
          return g(this, e, t, i, !0);
        }),
        (c.prototype.lastIndexOf = function(e, t, i) {
          return g(this, e, t, i, !1);
        }),
        (c.prototype.write = function(e, t, i, n) {
          if (void 0 === t) (n = "utf8"), (i = this.length), (t = 0);
          else if (void 0 === i && "string" == typeof t)
            (n = t), (i = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(i)
                ? ((i |= 0), void 0 === n && (n = "utf8"))
                : ((n = i), (i = void 0));
          }
          var r = this.length - t;
          if (
            ((void 0 === i || i > r) && (i = r),
            (e.length > 0 && (i < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var o = !1; ; )
            switch (n) {
              case "hex":
                return v(this, e, t, i);
              case "utf8":
              case "utf-8":
                return y(this, e, t, i);
              case "ascii":
                return b(this, e, t, i);
              case "latin1":
              case "binary":
                return E(this, e, t, i);
              case "base64":
                return T(this, e, t, i);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return A(this, e, t, i);
              default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (o = !0);
            }
        }),
        (c.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        });
      var C = 4096;
      function P(e, t, i) {
        var n = "";
        i = Math.min(e.length, i);
        for (var r = t; r < i; ++r) n += String.fromCharCode(127 & e[r]);
        return n;
      }
      function R(e, t, i) {
        var n = "";
        i = Math.min(e.length, i);
        for (var r = t; r < i; ++r) n += String.fromCharCode(e[r]);
        return n;
      }
      function M(e, t, i) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!i || i < 0 || i > n) && (i = n);
        for (var r = "", o = t; o < i; ++o) r += U(e[o]);
        return r;
      }
      function O(e, t, i) {
        for (var n = e.slice(t, i), r = "", o = 0; o < n.length; o += 2)
          r += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return r;
      }
      function w(e, t, i) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > i)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function I(e, t, i, n, r, o) {
        if (!c.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > r || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (i + n > e.length) throw new RangeError("Index out of range");
      }
      function D(e, t, i, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var r = 0, o = Math.min(e.length - i, 2); r < o; ++r)
          e[i + r] =
            (t & (255 << (8 * (n ? r : 1 - r)))) >>> (8 * (n ? r : 1 - r));
      }
      function L(e, t, i, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var r = 0, o = Math.min(e.length - i, 4); r < o; ++r)
          e[i + r] = (t >>> (8 * (n ? r : 3 - r))) & 255;
      }
      function F(e, t, i, n, r, o) {
        if (i + n > e.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("Index out of range");
      }
      function B(e, t, i, n, o) {
        return o || F(e, 0, i, 4), r.write(e, t, i, n, 23, 4), i + 4;
      }
      function N(e, t, i, n, o) {
        return o || F(e, 0, i, 8), r.write(e, t, i, n, 52, 8), i + 8;
      }
      (c.prototype.slice = function(e, t) {
        var i,
          n = this.length;
        if (
          ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0
            ? (t += n) < 0 && (t = 0)
            : t > n && (t = n),
          t < e && (t = e),
          c.TYPED_ARRAY_SUPPORT)
        )
          (i = this.subarray(e, t)).__proto__ = c.prototype;
        else {
          var r = t - e;
          i = new c(r, void 0);
          for (var o = 0; o < r; ++o) i[o] = this[o + e];
        }
        return i;
      }),
        (c.prototype.readUIntLE = function(e, t, i) {
          (e |= 0), (t |= 0), i || w(e, t, this.length);
          for (var n = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
            n += this[e + o] * r;
          return n;
        }),
        (c.prototype.readUIntBE = function(e, t, i) {
          (e |= 0), (t |= 0), i || w(e, t, this.length);
          for (var n = this[e + --t], r = 1; t > 0 && (r *= 256); )
            n += this[e + --t] * r;
          return n;
        }),
        (c.prototype.readUInt8 = function(e, t) {
          return t || w(e, 1, this.length), this[e];
        }),
        (c.prototype.readUInt16LE = function(e, t) {
          return t || w(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (c.prototype.readUInt16BE = function(e, t) {
          return t || w(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (c.prototype.readUInt32LE = function(e, t) {
          return (
            t || w(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (c.prototype.readUInt32BE = function(e, t) {
          return (
            t || w(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (c.prototype.readIntLE = function(e, t, i) {
          (e |= 0), (t |= 0), i || w(e, t, this.length);
          for (var n = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
            n += this[e + o] * r;
          return n >= (r *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (c.prototype.readIntBE = function(e, t, i) {
          (e |= 0), (t |= 0), i || w(e, t, this.length);
          for (var n = t, r = 1, o = this[e + --n]; n > 0 && (r *= 256); )
            o += this[e + --n] * r;
          return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (c.prototype.readInt8 = function(e, t) {
          return (
            t || w(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (c.prototype.readInt16LE = function(e, t) {
          t || w(e, 2, this.length);
          var i = this[e] | (this[e + 1] << 8);
          return 32768 & i ? 4294901760 | i : i;
        }),
        (c.prototype.readInt16BE = function(e, t) {
          t || w(e, 2, this.length);
          var i = this[e + 1] | (this[e] << 8);
          return 32768 & i ? 4294901760 | i : i;
        }),
        (c.prototype.readInt32LE = function(e, t) {
          return (
            t || w(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (c.prototype.readInt32BE = function(e, t) {
          return (
            t || w(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (c.prototype.readFloatLE = function(e, t) {
          return t || w(e, 4, this.length), r.read(this, e, !0, 23, 4);
        }),
        (c.prototype.readFloatBE = function(e, t) {
          return t || w(e, 4, this.length), r.read(this, e, !1, 23, 4);
        }),
        (c.prototype.readDoubleLE = function(e, t) {
          return t || w(e, 8, this.length), r.read(this, e, !0, 52, 8);
        }),
        (c.prototype.readDoubleBE = function(e, t) {
          return t || w(e, 8, this.length), r.read(this, e, !1, 52, 8);
        }),
        (c.prototype.writeUIntLE = function(e, t, i, n) {
          ((e = +e), (t |= 0), (i |= 0), n) ||
            I(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
          var r = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < i && (r *= 256); )
            this[t + o] = (e / r) & 255;
          return t + i;
        }),
        (c.prototype.writeUIntBE = function(e, t, i, n) {
          ((e = +e), (t |= 0), (i |= 0), n) ||
            I(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
          var r = i - 1,
            o = 1;
          for (this[t + r] = 255 & e; --r >= 0 && (o *= 256); )
            this[t + r] = (e / o) & 255;
          return t + i;
        }),
        (c.prototype.writeUInt8 = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeUInt16LE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeUInt16BE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeUInt32LE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : L(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeUInt32BE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : L(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeIntLE = function(e, t, i, n) {
          if (((e = +e), (t |= 0), !n)) {
            var r = Math.pow(2, 8 * i - 1);
            I(this, e, t, i, r - 1, -r);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < i && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + i;
        }),
        (c.prototype.writeIntBE = function(e, t, i, n) {
          if (((e = +e), (t |= 0), !n)) {
            var r = Math.pow(2, 8 * i - 1);
            I(this, e, t, i, r - 1, -r);
          }
          var o = i - 1,
            a = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + i;
        }),
        (c.prototype.writeInt8 = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeInt16LE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeInt16BE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeInt32LE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : L(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeInt32BE = function(e, t, i) {
          return (
            (e = +e),
            (t |= 0),
            i || I(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : L(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeFloatLE = function(e, t, i) {
          return B(this, e, t, !0, i);
        }),
        (c.prototype.writeFloatBE = function(e, t, i) {
          return B(this, e, t, !1, i);
        }),
        (c.prototype.writeDoubleLE = function(e, t, i) {
          return N(this, e, t, !0, i);
        }),
        (c.prototype.writeDoubleBE = function(e, t, i) {
          return N(this, e, t, !1, i);
        }),
        (c.prototype.copy = function(e, t, i, n) {
          if (
            (i || (i = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < i && (n = i),
            n === i)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (i < 0 || i >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - i && (n = e.length - t + i);
          var r,
            o = n - i;
          if (this === e && i < t && t < n)
            for (r = o - 1; r >= 0; --r) e[r + t] = this[r + i];
          else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
            for (r = 0; r < o; ++r) e[r + t] = this[r + i];
          else Uint8Array.prototype.set.call(e, this.subarray(i, i + o), t);
          return o;
        }),
        (c.prototype.fill = function(e, t, i, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (i = this.length))
                : "string" == typeof i && ((n = i), (i = this.length)),
              1 === e.length)
            ) {
              var r = e.charCodeAt(0);
              r < 256 && (e = r);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !c.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < i)
            throw new RangeError("Out of range index");
          if (i <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (i = void 0 === i ? this.length : i >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < i; ++o) this[o] = e;
          else {
            var a = c.isBuffer(e) ? e : V(new c(e, n).toString()),
              s = a.length;
            for (o = 0; o < i - t; ++o) this[o + t] = a[o % s];
          }
          return this;
        });
      var k = /[^+\/0-9A-Za-z-_]/g;
      function U(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function V(e, t) {
        var i;
        t = t || 1 / 0;
        for (var n = e.length, r = null, o = [], a = 0; a < n; ++a) {
          if ((i = e.charCodeAt(a)) > 55295 && i < 57344) {
            if (!r) {
              if (i > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              r = i;
              continue;
            }
            if (i < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (r = i);
              continue;
            }
            i = 65536 + (((r - 55296) << 10) | (i - 56320));
          } else r && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((r = null), i < 128)) {
            if ((t -= 1) < 0) break;
            o.push(i);
          } else if (i < 2048) {
            if ((t -= 2) < 0) break;
            o.push((i >> 6) | 192, (63 & i) | 128);
          } else if (i < 65536) {
            if ((t -= 3) < 0) break;
            o.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
          } else {
            if (!(i < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (i >> 18) | 240,
              ((i >> 12) & 63) | 128,
              ((i >> 6) & 63) | 128,
              (63 & i) | 128
            );
          }
        }
        return o;
      }
      function G(e) {
        return n.toByteArray(
          (function(e) {
            if (
              (e = (function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(k, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function z(e, t, i, n) {
        for (var r = 0; r < n && !(r + i >= t.length || r >= e.length); ++r)
          t[r + i] = e[r];
        return r;
      }
    }.call(this, i(15)));
  },
  function(e, t, i) {
    var n = i(28),
      r = Math.min;
    e.exports = function(e) {
      return e > 0 ? r(n(e), 9007199254740991) : 0;
    };
  },
  function(e, t, i) {
    (function(e) {
      function t(e) {
        return (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function(e, n) {
        "use strict";
        function r(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }
        function o(e, t) {
          e.super_ = t;
          var i = function() {};
          (i.prototype = t.prototype),
            (e.prototype = new i()),
            (e.prototype.constructor = e);
        }
        function a(e, t, i) {
          if (a.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (("le" !== t && "be" !== t) || ((i = t), (t = 10)),
              this._init(e || 0, t || 10, i || "be"));
        }
        var s;
        "object" === t(e) ? (e.exports = a) : (n.BN = a),
          (a.BN = a),
          (a.wordSize = 26);
        try {
          s = i(543).Buffer;
        } catch (e) {}
        function c(e, t, i) {
          for (var n = 0, r = Math.min(e.length, i), o = t; o < r; o++) {
            var a = e.charCodeAt(o) - 48;
            (n <<= 4),
              (n |=
                a >= 49 && a <= 54
                  ? a - 49 + 10
                  : a >= 17 && a <= 22
                  ? a - 17 + 10
                  : 15 & a);
          }
          return n;
        }
        function u(e, t, i, n) {
          for (var r = 0, o = Math.min(e.length, i), a = t; a < o; a++) {
            var s = e.charCodeAt(a) - 48;
            (r *= n), (r += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
          }
          return r;
        }
        (a.isBN = function(e) {
          return (
            e instanceof a ||
            (null !== e &&
              "object" === t(e) &&
              e.constructor.wordSize === a.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (a.max = function(e, t) {
            return e.cmp(t) > 0 ? e : t;
          }),
          (a.min = function(e, t) {
            return e.cmp(t) < 0 ? e : t;
          }),
          (a.prototype._init = function(e, i, n) {
            if ("number" == typeof e) return this._initNumber(e, i, n);
            if ("object" === t(e)) return this._initArray(e, i, n);
            "hex" === i && (i = 16), r(i === (0 | i) && i >= 2 && i <= 36);
            var o = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && o++,
              16 === i ? this._parseHex(e, o) : this._parseBase(e, i, o),
              "-" === e[0] && (this.negative = 1),
              this.strip(),
              "le" === n && this._initArray(this.toArray(), i, n);
          }),
          (a.prototype._initNumber = function(e, t, i) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (r(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === i && this._initArray(this.toArray(), t, i);
          }),
          (a.prototype._initArray = function(e, t, i) {
            if ((r("number" == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o,
              a,
              s = 0;
            if ("be" === i)
              for (n = e.length - 1, o = 0; n >= 0; n -= 3)
                (a = e[n] | (e[n - 1] << 8) | (e[n - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === i)
              for (n = 0, o = 0; n < e.length; n += 3)
                (a = e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this.strip();
          }),
          (a.prototype._parseHex = function(e, t) {
            (this.length = Math.ceil((e.length - t) / 6)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n,
              r,
              o = 0;
            for (i = e.length - 6, n = 0; i >= t; i -= 6)
              (r = c(e, i, i + 6)),
                (this.words[n] |= (r << o) & 67108863),
                (this.words[n + 1] |= (r >>> (26 - o)) & 4194303),
                (o += 24) >= 26 && ((o -= 26), n++);
            i + 6 !== t &&
              ((r = c(e, t, i + 6)),
              (this.words[n] |= (r << o) & 67108863),
              (this.words[n + 1] |= (r >>> (26 - o)) & 4194303)),
              this.strip();
          }),
          (a.prototype._parseBase = function(e, t, i) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, r = 1; r <= 67108863; r *= t) n++;
            n--, (r = (r / t) | 0);
            for (
              var o = e.length - i,
                a = o % n,
                s = Math.min(o, o - a) + i,
                c = 0,
                l = i;
              l < s;
              l += n
            )
              (c = u(e, l, l + n, t)),
                this.imuln(r),
                this.words[0] + c < 67108864
                  ? (this.words[0] += c)
                  : this._iaddn(c);
            if (0 !== a) {
              var h = 1;
              for (c = u(e, l, e.length, t), l = 0; l < a; l++) h *= t;
              this.imuln(h),
                this.words[0] + c < 67108864
                  ? (this.words[0] += c)
                  : this._iaddn(c);
            }
          }),
          (a.prototype.copy = function(e) {
            e.words = new Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (a.prototype.clone = function() {
            var e = new a(null);
            return this.copy(e), e;
          }),
          (a.prototype._expand = function(e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (a.prototype.strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (a.prototype._normSign = function() {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (a.prototype.inspect = function() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var l = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000"
          ],
          h = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          f = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
          ];
        function d(e, t, i) {
          i.negative = t.negative ^ e.negative;
          var n = (e.length + t.length) | 0;
          (i.length = n), (n = (n - 1) | 0);
          var r = 0 | e.words[0],
            o = 0 | t.words[0],
            a = r * o,
            s = 67108863 & a,
            c = (a / 67108864) | 0;
          i.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var l = c >>> 26,
                h = 67108863 & c,
                f = Math.min(u, t.length - 1),
                d = Math.max(0, u - e.length + 1);
              d <= f;
              d++
            ) {
              var p = (u - d) | 0;
              (l +=
                ((a = (r = 0 | e.words[p]) * (o = 0 | t.words[d]) + h) /
                  67108864) |
                0),
                (h = 67108863 & a);
            }
            (i.words[u] = 0 | h), (c = 0 | l);
          }
          return 0 !== c ? (i.words[u] = 0 | c) : i.length--, i.strip();
        }
        (a.prototype.toString = function(e, t) {
          var i;
          if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
            i = "";
            for (var n = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                c = (16777215 & ((s << n) | o)).toString(16);
              (i =
                0 !== (o = (s >>> (24 - n)) & 16777215) || a !== this.length - 1
                  ? l[6 - c.length] + c + i
                  : c + i),
                (n += 2) >= 26 && ((n -= 26), a--);
            }
            for (0 !== o && (i = o.toString(16) + i); i.length % t != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var u = h[e],
              d = f[e];
            i = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var m = p.modn(d).toString(e);
              i = (p = p.idivn(d)).isZero() ? m + i : l[u - m.length] + m + i;
            }
            for (this.isZero() && (i = "0" + i); i.length % t != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          r(!1, "Base should be between 2 and 36");
        }),
          (a.prototype.toNumber = function() {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  r(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            );
          }),
          (a.prototype.toJSON = function() {
            return this.toString(16);
          }),
          (a.prototype.toBuffer = function(e, t) {
            return r(void 0 !== s), this.toArrayLike(s, e, t);
          }),
          (a.prototype.toArray = function(e, t) {
            return this.toArrayLike(Array, e, t);
          }),
          (a.prototype.toArrayLike = function(e, t, i) {
            var n = this.byteLength(),
              o = i || Math.max(1, n);
            r(n <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0"),
              this.strip();
            var a,
              s,
              c = "le" === t,
              u = new e(o),
              l = this.clone();
            if (c) {
              for (s = 0; !l.isZero(); s++)
                (a = l.andln(255)), l.iushrn(8), (u[s] = a);
              for (; s < o; s++) u[s] = 0;
            } else {
              for (s = 0; s < o - n; s++) u[s] = 0;
              for (s = 0; !l.isZero(); s++)
                (a = l.andln(255)), l.iushrn(8), (u[o - s - 1] = a);
            }
            return u;
          }),
          Math.clz32
            ? (a.prototype._countBits = function(e) {
                return 32 - Math.clz32(e);
              })
            : (a.prototype._countBits = function(e) {
                var t = e,
                  i = 0;
                return (
                  t >= 4096 && ((i += 13), (t >>>= 13)),
                  t >= 64 && ((i += 7), (t >>>= 7)),
                  t >= 8 && ((i += 4), (t >>>= 4)),
                  t >= 2 && ((i += 2), (t >>>= 2)),
                  i + t
                );
              }),
          (a.prototype._zeroBits = function(e) {
            if (0 === e) return 26;
            var t = e,
              i = 0;
            return (
              0 == (8191 & t) && ((i += 13), (t >>>= 13)),
              0 == (127 & t) && ((i += 7), (t >>>= 7)),
              0 == (15 & t) && ((i += 4), (t >>>= 4)),
              0 == (3 & t) && ((i += 2), (t >>>= 2)),
              0 == (1 & t) && i++,
              i
            );
          }),
          (a.prototype.bitLength = function() {
            var e = this.words[this.length - 1],
              t = this._countBits(e);
            return 26 * (this.length - 1) + t;
          }),
          (a.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
              var i = this._zeroBits(this.words[t]);
              if (((e += i), 26 !== i)) break;
            }
            return e;
          }),
          (a.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
          }),
          (a.prototype.toTwos = function(e) {
            return 0 !== this.negative
              ? this.abs()
                  .inotn(e)
                  .iaddn(1)
              : this.clone();
          }),
          (a.prototype.fromTwos = function(e) {
            return this.testn(e - 1)
              ? this.notn(e)
                  .iaddn(1)
                  .ineg()
              : this.clone();
          }),
          (a.prototype.isNeg = function() {
            return 0 !== this.negative;
          }),
          (a.prototype.neg = function() {
            return this.clone().ineg();
          }),
          (a.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (a.prototype.iuor = function(e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++)
              this.words[t] = this.words[t] | e.words[t];
            return this.strip();
          }),
          (a.prototype.ior = function(e) {
            return r(0 == (this.negative | e.negative)), this.iuor(e);
          }),
          (a.prototype.or = function(e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (a.prototype.uor = function(e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (a.prototype.iuand = function(e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var i = 0; i < t.length; i++)
              this.words[i] = this.words[i] & e.words[i];
            return (this.length = t.length), this.strip();
          }),
          (a.prototype.iand = function(e) {
            return r(0 == (this.negative | e.negative)), this.iuand(e);
          }),
          (a.prototype.and = function(e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (a.prototype.uand = function(e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (a.prototype.iuxor = function(e) {
            var t, i;
            this.length > e.length
              ? ((t = this), (i = e))
              : ((t = e), (i = this));
            for (var n = 0; n < i.length; n++)
              this.words[n] = t.words[n] ^ i.words[n];
            if (this !== t)
              for (; n < t.length; n++) this.words[n] = t.words[n];
            return (this.length = t.length), this.strip();
          }),
          (a.prototype.ixor = function(e) {
            return r(0 == (this.negative | e.negative)), this.iuxor(e);
          }),
          (a.prototype.xor = function(e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (a.prototype.uxor = function(e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (a.prototype.inotn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
              i = e % 26;
            this._expand(t), i > 0 && t--;
            for (var n = 0; n < t; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              i > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
              this.strip()
            );
          }),
          (a.prototype.notn = function(e) {
            return this.clone().inotn(e);
          }),
          (a.prototype.setn = function(e, t) {
            r("number" == typeof e && e >= 0);
            var i = (e / 26) | 0,
              n = e % 26;
            return (
              this._expand(i + 1),
              (this.words[i] = t
                ? this.words[i] | (1 << n)
                : this.words[i] & ~(1 << n)),
              this.strip()
            );
          }),
          (a.prototype.iadd = function(e) {
            var t, i, n;
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (t = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (t = this.isub(e)),
                (e.negative = 1),
                t._normSign()
              );
            this.length > e.length
              ? ((i = this), (n = e))
              : ((i = e), (n = this));
            for (var r = 0, o = 0; o < n.length; o++)
              (t = (0 | i.words[o]) + (0 | n.words[o]) + r),
                (this.words[o] = 67108863 & t),
                (r = t >>> 26);
            for (; 0 !== r && o < i.length; o++)
              (t = (0 | i.words[o]) + r),
                (this.words[o] = 67108863 & t),
                (r = t >>> 26);
            if (((this.length = i.length), 0 !== r))
              (this.words[this.length] = r), this.length++;
            else if (i !== this)
              for (; o < i.length; o++) this.words[o] = i.words[o];
            return this;
          }),
          (a.prototype.add = function(e) {
            var t;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (a.prototype.isub = function(e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var t = this.iadd(e);
              return (e.negative = 1), t._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var i,
              n,
              r = this.cmp(e);
            if (0 === r)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            r > 0 ? ((i = this), (n = e)) : ((i = e), (n = this));
            for (var o = 0, a = 0; a < n.length; a++)
              (o = (t = (0 | i.words[a]) - (0 | n.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & t);
            for (; 0 !== o && a < i.length; a++)
              (o = (t = (0 | i.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & t);
            if (0 === o && a < i.length && i !== this)
              for (; a < i.length; a++) this.words[a] = i.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              i !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (a.prototype.sub = function(e) {
            return this.clone().isub(e);
          });
        var p = function(e, t, i) {
          var n,
            r,
            o,
            a = e.words,
            s = t.words,
            c = i.words,
            u = 0,
            l = 0 | a[0],
            h = 8191 & l,
            f = l >>> 13,
            d = 0 | a[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | a[2],
            _ = 8191 & g,
            v = g >>> 13,
            y = 0 | a[3],
            b = 8191 & y,
            E = y >>> 13,
            T = 0 | a[4],
            A = 8191 & T,
            x = T >>> 13,
            S = 0 | a[5],
            C = 8191 & S,
            P = S >>> 13,
            R = 0 | a[6],
            M = 8191 & R,
            O = R >>> 13,
            w = 0 | a[7],
            I = 8191 & w,
            D = w >>> 13,
            L = 0 | a[8],
            F = 8191 & L,
            B = L >>> 13,
            N = 0 | a[9],
            k = 8191 & N,
            U = N >>> 13,
            V = 0 | s[0],
            G = 8191 & V,
            z = V >>> 13,
            j = 0 | s[1],
            H = 8191 & j,
            W = j >>> 13,
            X = 0 | s[2],
            Y = 8191 & X,
            K = X >>> 13,
            Q = 0 | s[3],
            q = 8191 & Q,
            Z = Q >>> 13,
            J = 0 | s[4],
            $ = 8191 & J,
            ee = J >>> 13,
            te = 0 | s[5],
            ie = 8191 & te,
            ne = te >>> 13,
            re = 0 | s[6],
            oe = 8191 & re,
            ae = re >>> 13,
            se = 0 | s[7],
            ce = 8191 & se,
            ue = se >>> 13,
            le = 0 | s[8],
            he = 8191 & le,
            fe = le >>> 13,
            de = 0 | s[9],
            pe = 8191 & de,
            me = de >>> 13;
          (i.negative = e.negative ^ t.negative), (i.length = 19);
          var ge =
            (((u + (n = Math.imul(h, G))) | 0) +
              ((8191 & (r = ((r = Math.imul(h, z)) + Math.imul(f, G)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(f, z)) + (r >>> 13)) | 0) + (ge >>> 26)) | 0),
            (ge &= 67108863),
            (n = Math.imul(p, G)),
            (r = ((r = Math.imul(p, z)) + Math.imul(m, G)) | 0),
            (o = Math.imul(m, z));
          var _e =
            (((u + (n = (n + Math.imul(h, H)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, W)) | 0) + Math.imul(f, H)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, W)) | 0) + (r >>> 13)) | 0) +
              (_e >>> 26)) |
            0),
            (_e &= 67108863),
            (n = Math.imul(_, G)),
            (r = ((r = Math.imul(_, z)) + Math.imul(v, G)) | 0),
            (o = Math.imul(v, z)),
            (n = (n + Math.imul(p, H)) | 0),
            (r = ((r = (r + Math.imul(p, W)) | 0) + Math.imul(m, H)) | 0),
            (o = (o + Math.imul(m, W)) | 0);
          var ve =
            (((u + (n = (n + Math.imul(h, Y)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, K)) | 0) + Math.imul(f, Y)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, K)) | 0) + (r >>> 13)) | 0) +
              (ve >>> 26)) |
            0),
            (ve &= 67108863),
            (n = Math.imul(b, G)),
            (r = ((r = Math.imul(b, z)) + Math.imul(E, G)) | 0),
            (o = Math.imul(E, z)),
            (n = (n + Math.imul(_, H)) | 0),
            (r = ((r = (r + Math.imul(_, W)) | 0) + Math.imul(v, H)) | 0),
            (o = (o + Math.imul(v, W)) | 0),
            (n = (n + Math.imul(p, Y)) | 0),
            (r = ((r = (r + Math.imul(p, K)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, K)) | 0);
          var ye =
            (((u + (n = (n + Math.imul(h, q)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, Z)) | 0) + Math.imul(f, q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, Z)) | 0) + (r >>> 13)) | 0) +
              (ye >>> 26)) |
            0),
            (ye &= 67108863),
            (n = Math.imul(A, G)),
            (r = ((r = Math.imul(A, z)) + Math.imul(x, G)) | 0),
            (o = Math.imul(x, z)),
            (n = (n + Math.imul(b, H)) | 0),
            (r = ((r = (r + Math.imul(b, W)) | 0) + Math.imul(E, H)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (n = (n + Math.imul(_, Y)) | 0),
            (r = ((r = (r + Math.imul(_, K)) | 0) + Math.imul(v, Y)) | 0),
            (o = (o + Math.imul(v, K)) | 0),
            (n = (n + Math.imul(p, q)) | 0),
            (r = ((r = (r + Math.imul(p, Z)) | 0) + Math.imul(m, q)) | 0),
            (o = (o + Math.imul(m, Z)) | 0);
          var be =
            (((u + (n = (n + Math.imul(h, $)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, ee)) | 0) + Math.imul(f, $)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, ee)) | 0) + (r >>> 13)) | 0) +
              (be >>> 26)) |
            0),
            (be &= 67108863),
            (n = Math.imul(C, G)),
            (r = ((r = Math.imul(C, z)) + Math.imul(P, G)) | 0),
            (o = Math.imul(P, z)),
            (n = (n + Math.imul(A, H)) | 0),
            (r = ((r = (r + Math.imul(A, W)) | 0) + Math.imul(x, H)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(b, Y)) | 0),
            (r = ((r = (r + Math.imul(b, K)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, K)) | 0),
            (n = (n + Math.imul(_, q)) | 0),
            (r = ((r = (r + Math.imul(_, Z)) | 0) + Math.imul(v, q)) | 0),
            (o = (o + Math.imul(v, Z)) | 0),
            (n = (n + Math.imul(p, $)) | 0),
            (r = ((r = (r + Math.imul(p, ee)) | 0) + Math.imul(m, $)) | 0),
            (o = (o + Math.imul(m, ee)) | 0);
          var Ee =
            (((u + (n = (n + Math.imul(h, ie)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, ne)) | 0) + Math.imul(f, ie)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, ne)) | 0) + (r >>> 13)) | 0) +
              (Ee >>> 26)) |
            0),
            (Ee &= 67108863),
            (n = Math.imul(M, G)),
            (r = ((r = Math.imul(M, z)) + Math.imul(O, G)) | 0),
            (o = Math.imul(O, z)),
            (n = (n + Math.imul(C, H)) | 0),
            (r = ((r = (r + Math.imul(C, W)) | 0) + Math.imul(P, H)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (n = (n + Math.imul(A, Y)) | 0),
            (r = ((r = (r + Math.imul(A, K)) | 0) + Math.imul(x, Y)) | 0),
            (o = (o + Math.imul(x, K)) | 0),
            (n = (n + Math.imul(b, q)) | 0),
            (r = ((r = (r + Math.imul(b, Z)) | 0) + Math.imul(E, q)) | 0),
            (o = (o + Math.imul(E, Z)) | 0),
            (n = (n + Math.imul(_, $)) | 0),
            (r = ((r = (r + Math.imul(_, ee)) | 0) + Math.imul(v, $)) | 0),
            (o = (o + Math.imul(v, ee)) | 0),
            (n = (n + Math.imul(p, ie)) | 0),
            (r = ((r = (r + Math.imul(p, ne)) | 0) + Math.imul(m, ie)) | 0),
            (o = (o + Math.imul(m, ne)) | 0);
          var Te =
            (((u + (n = (n + Math.imul(h, oe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, ae)) | 0) + Math.imul(f, oe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, ae)) | 0) + (r >>> 13)) | 0) +
              (Te >>> 26)) |
            0),
            (Te &= 67108863),
            (n = Math.imul(I, G)),
            (r = ((r = Math.imul(I, z)) + Math.imul(D, G)) | 0),
            (o = Math.imul(D, z)),
            (n = (n + Math.imul(M, H)) | 0),
            (r = ((r = (r + Math.imul(M, W)) | 0) + Math.imul(O, H)) | 0),
            (o = (o + Math.imul(O, W)) | 0),
            (n = (n + Math.imul(C, Y)) | 0),
            (r = ((r = (r + Math.imul(C, K)) | 0) + Math.imul(P, Y)) | 0),
            (o = (o + Math.imul(P, K)) | 0),
            (n = (n + Math.imul(A, q)) | 0),
            (r = ((r = (r + Math.imul(A, Z)) | 0) + Math.imul(x, q)) | 0),
            (o = (o + Math.imul(x, Z)) | 0),
            (n = (n + Math.imul(b, $)) | 0),
            (r = ((r = (r + Math.imul(b, ee)) | 0) + Math.imul(E, $)) | 0),
            (o = (o + Math.imul(E, ee)) | 0),
            (n = (n + Math.imul(_, ie)) | 0),
            (r = ((r = (r + Math.imul(_, ne)) | 0) + Math.imul(v, ie)) | 0),
            (o = (o + Math.imul(v, ne)) | 0),
            (n = (n + Math.imul(p, oe)) | 0),
            (r = ((r = (r + Math.imul(p, ae)) | 0) + Math.imul(m, oe)) | 0),
            (o = (o + Math.imul(m, ae)) | 0);
          var Ae =
            (((u + (n = (n + Math.imul(h, ce)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, ue)) | 0) + Math.imul(f, ce)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, ue)) | 0) + (r >>> 13)) | 0) +
              (Ae >>> 26)) |
            0),
            (Ae &= 67108863),
            (n = Math.imul(F, G)),
            (r = ((r = Math.imul(F, z)) + Math.imul(B, G)) | 0),
            (o = Math.imul(B, z)),
            (n = (n + Math.imul(I, H)) | 0),
            (r = ((r = (r + Math.imul(I, W)) | 0) + Math.imul(D, H)) | 0),
            (o = (o + Math.imul(D, W)) | 0),
            (n = (n + Math.imul(M, Y)) | 0),
            (r = ((r = (r + Math.imul(M, K)) | 0) + Math.imul(O, Y)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(C, q)) | 0),
            (r = ((r = (r + Math.imul(C, Z)) | 0) + Math.imul(P, q)) | 0),
            (o = (o + Math.imul(P, Z)) | 0),
            (n = (n + Math.imul(A, $)) | 0),
            (r = ((r = (r + Math.imul(A, ee)) | 0) + Math.imul(x, $)) | 0),
            (o = (o + Math.imul(x, ee)) | 0),
            (n = (n + Math.imul(b, ie)) | 0),
            (r = ((r = (r + Math.imul(b, ne)) | 0) + Math.imul(E, ie)) | 0),
            (o = (o + Math.imul(E, ne)) | 0),
            (n = (n + Math.imul(_, oe)) | 0),
            (r = ((r = (r + Math.imul(_, ae)) | 0) + Math.imul(v, oe)) | 0),
            (o = (o + Math.imul(v, ae)) | 0),
            (n = (n + Math.imul(p, ce)) | 0),
            (r = ((r = (r + Math.imul(p, ue)) | 0) + Math.imul(m, ce)) | 0),
            (o = (o + Math.imul(m, ue)) | 0);
          var xe =
            (((u + (n = (n + Math.imul(h, he)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, fe)) | 0) + Math.imul(f, he)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, fe)) | 0) + (r >>> 13)) | 0) +
              (xe >>> 26)) |
            0),
            (xe &= 67108863),
            (n = Math.imul(k, G)),
            (r = ((r = Math.imul(k, z)) + Math.imul(U, G)) | 0),
            (o = Math.imul(U, z)),
            (n = (n + Math.imul(F, H)) | 0),
            (r = ((r = (r + Math.imul(F, W)) | 0) + Math.imul(B, H)) | 0),
            (o = (o + Math.imul(B, W)) | 0),
            (n = (n + Math.imul(I, Y)) | 0),
            (r = ((r = (r + Math.imul(I, K)) | 0) + Math.imul(D, Y)) | 0),
            (o = (o + Math.imul(D, K)) | 0),
            (n = (n + Math.imul(M, q)) | 0),
            (r = ((r = (r + Math.imul(M, Z)) | 0) + Math.imul(O, q)) | 0),
            (o = (o + Math.imul(O, Z)) | 0),
            (n = (n + Math.imul(C, $)) | 0),
            (r = ((r = (r + Math.imul(C, ee)) | 0) + Math.imul(P, $)) | 0),
            (o = (o + Math.imul(P, ee)) | 0),
            (n = (n + Math.imul(A, ie)) | 0),
            (r = ((r = (r + Math.imul(A, ne)) | 0) + Math.imul(x, ie)) | 0),
            (o = (o + Math.imul(x, ne)) | 0),
            (n = (n + Math.imul(b, oe)) | 0),
            (r = ((r = (r + Math.imul(b, ae)) | 0) + Math.imul(E, oe)) | 0),
            (o = (o + Math.imul(E, ae)) | 0),
            (n = (n + Math.imul(_, ce)) | 0),
            (r = ((r = (r + Math.imul(_, ue)) | 0) + Math.imul(v, ce)) | 0),
            (o = (o + Math.imul(v, ue)) | 0),
            (n = (n + Math.imul(p, he)) | 0),
            (r = ((r = (r + Math.imul(p, fe)) | 0) + Math.imul(m, he)) | 0),
            (o = (o + Math.imul(m, fe)) | 0);
          var Se =
            (((u + (n = (n + Math.imul(h, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(h, me)) | 0) + Math.imul(f, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, me)) | 0) + (r >>> 13)) | 0) +
              (Se >>> 26)) |
            0),
            (Se &= 67108863),
            (n = Math.imul(k, H)),
            (r = ((r = Math.imul(k, W)) + Math.imul(U, H)) | 0),
            (o = Math.imul(U, W)),
            (n = (n + Math.imul(F, Y)) | 0),
            (r = ((r = (r + Math.imul(F, K)) | 0) + Math.imul(B, Y)) | 0),
            (o = (o + Math.imul(B, K)) | 0),
            (n = (n + Math.imul(I, q)) | 0),
            (r = ((r = (r + Math.imul(I, Z)) | 0) + Math.imul(D, q)) | 0),
            (o = (o + Math.imul(D, Z)) | 0),
            (n = (n + Math.imul(M, $)) | 0),
            (r = ((r = (r + Math.imul(M, ee)) | 0) + Math.imul(O, $)) | 0),
            (o = (o + Math.imul(O, ee)) | 0),
            (n = (n + Math.imul(C, ie)) | 0),
            (r = ((r = (r + Math.imul(C, ne)) | 0) + Math.imul(P, ie)) | 0),
            (o = (o + Math.imul(P, ne)) | 0),
            (n = (n + Math.imul(A, oe)) | 0),
            (r = ((r = (r + Math.imul(A, ae)) | 0) + Math.imul(x, oe)) | 0),
            (o = (o + Math.imul(x, ae)) | 0),
            (n = (n + Math.imul(b, ce)) | 0),
            (r = ((r = (r + Math.imul(b, ue)) | 0) + Math.imul(E, ce)) | 0),
            (o = (o + Math.imul(E, ue)) | 0),
            (n = (n + Math.imul(_, he)) | 0),
            (r = ((r = (r + Math.imul(_, fe)) | 0) + Math.imul(v, he)) | 0),
            (o = (o + Math.imul(v, fe)) | 0);
          var Ce =
            (((u + (n = (n + Math.imul(p, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(p, me)) | 0) + Math.imul(m, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(m, me)) | 0) + (r >>> 13)) | 0) +
              (Ce >>> 26)) |
            0),
            (Ce &= 67108863),
            (n = Math.imul(k, Y)),
            (r = ((r = Math.imul(k, K)) + Math.imul(U, Y)) | 0),
            (o = Math.imul(U, K)),
            (n = (n + Math.imul(F, q)) | 0),
            (r = ((r = (r + Math.imul(F, Z)) | 0) + Math.imul(B, q)) | 0),
            (o = (o + Math.imul(B, Z)) | 0),
            (n = (n + Math.imul(I, $)) | 0),
            (r = ((r = (r + Math.imul(I, ee)) | 0) + Math.imul(D, $)) | 0),
            (o = (o + Math.imul(D, ee)) | 0),
            (n = (n + Math.imul(M, ie)) | 0),
            (r = ((r = (r + Math.imul(M, ne)) | 0) + Math.imul(O, ie)) | 0),
            (o = (o + Math.imul(O, ne)) | 0),
            (n = (n + Math.imul(C, oe)) | 0),
            (r = ((r = (r + Math.imul(C, ae)) | 0) + Math.imul(P, oe)) | 0),
            (o = (o + Math.imul(P, ae)) | 0),
            (n = (n + Math.imul(A, ce)) | 0),
            (r = ((r = (r + Math.imul(A, ue)) | 0) + Math.imul(x, ce)) | 0),
            (o = (o + Math.imul(x, ue)) | 0),
            (n = (n + Math.imul(b, he)) | 0),
            (r = ((r = (r + Math.imul(b, fe)) | 0) + Math.imul(E, he)) | 0),
            (o = (o + Math.imul(E, fe)) | 0);
          var Pe =
            (((u + (n = (n + Math.imul(_, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(_, me)) | 0) + Math.imul(v, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(v, me)) | 0) + (r >>> 13)) | 0) +
              (Pe >>> 26)) |
            0),
            (Pe &= 67108863),
            (n = Math.imul(k, q)),
            (r = ((r = Math.imul(k, Z)) + Math.imul(U, q)) | 0),
            (o = Math.imul(U, Z)),
            (n = (n + Math.imul(F, $)) | 0),
            (r = ((r = (r + Math.imul(F, ee)) | 0) + Math.imul(B, $)) | 0),
            (o = (o + Math.imul(B, ee)) | 0),
            (n = (n + Math.imul(I, ie)) | 0),
            (r = ((r = (r + Math.imul(I, ne)) | 0) + Math.imul(D, ie)) | 0),
            (o = (o + Math.imul(D, ne)) | 0),
            (n = (n + Math.imul(M, oe)) | 0),
            (r = ((r = (r + Math.imul(M, ae)) | 0) + Math.imul(O, oe)) | 0),
            (o = (o + Math.imul(O, ae)) | 0),
            (n = (n + Math.imul(C, ce)) | 0),
            (r = ((r = (r + Math.imul(C, ue)) | 0) + Math.imul(P, ce)) | 0),
            (o = (o + Math.imul(P, ue)) | 0),
            (n = (n + Math.imul(A, he)) | 0),
            (r = ((r = (r + Math.imul(A, fe)) | 0) + Math.imul(x, he)) | 0),
            (o = (o + Math.imul(x, fe)) | 0);
          var Re =
            (((u + (n = (n + Math.imul(b, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(b, me)) | 0) + Math.imul(E, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(E, me)) | 0) + (r >>> 13)) | 0) +
              (Re >>> 26)) |
            0),
            (Re &= 67108863),
            (n = Math.imul(k, $)),
            (r = ((r = Math.imul(k, ee)) + Math.imul(U, $)) | 0),
            (o = Math.imul(U, ee)),
            (n = (n + Math.imul(F, ie)) | 0),
            (r = ((r = (r + Math.imul(F, ne)) | 0) + Math.imul(B, ie)) | 0),
            (o = (o + Math.imul(B, ne)) | 0),
            (n = (n + Math.imul(I, oe)) | 0),
            (r = ((r = (r + Math.imul(I, ae)) | 0) + Math.imul(D, oe)) | 0),
            (o = (o + Math.imul(D, ae)) | 0),
            (n = (n + Math.imul(M, ce)) | 0),
            (r = ((r = (r + Math.imul(M, ue)) | 0) + Math.imul(O, ce)) | 0),
            (o = (o + Math.imul(O, ue)) | 0),
            (n = (n + Math.imul(C, he)) | 0),
            (r = ((r = (r + Math.imul(C, fe)) | 0) + Math.imul(P, he)) | 0),
            (o = (o + Math.imul(P, fe)) | 0);
          var Me =
            (((u + (n = (n + Math.imul(A, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(A, me)) | 0) + Math.imul(x, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(x, me)) | 0) + (r >>> 13)) | 0) +
              (Me >>> 26)) |
            0),
            (Me &= 67108863),
            (n = Math.imul(k, ie)),
            (r = ((r = Math.imul(k, ne)) + Math.imul(U, ie)) | 0),
            (o = Math.imul(U, ne)),
            (n = (n + Math.imul(F, oe)) | 0),
            (r = ((r = (r + Math.imul(F, ae)) | 0) + Math.imul(B, oe)) | 0),
            (o = (o + Math.imul(B, ae)) | 0),
            (n = (n + Math.imul(I, ce)) | 0),
            (r = ((r = (r + Math.imul(I, ue)) | 0) + Math.imul(D, ce)) | 0),
            (o = (o + Math.imul(D, ue)) | 0),
            (n = (n + Math.imul(M, he)) | 0),
            (r = ((r = (r + Math.imul(M, fe)) | 0) + Math.imul(O, he)) | 0),
            (o = (o + Math.imul(O, fe)) | 0);
          var Oe =
            (((u + (n = (n + Math.imul(C, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(C, me)) | 0) + Math.imul(P, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, me)) | 0) + (r >>> 13)) | 0) +
              (Oe >>> 26)) |
            0),
            (Oe &= 67108863),
            (n = Math.imul(k, oe)),
            (r = ((r = Math.imul(k, ae)) + Math.imul(U, oe)) | 0),
            (o = Math.imul(U, ae)),
            (n = (n + Math.imul(F, ce)) | 0),
            (r = ((r = (r + Math.imul(F, ue)) | 0) + Math.imul(B, ce)) | 0),
            (o = (o + Math.imul(B, ue)) | 0),
            (n = (n + Math.imul(I, he)) | 0),
            (r = ((r = (r + Math.imul(I, fe)) | 0) + Math.imul(D, he)) | 0),
            (o = (o + Math.imul(D, fe)) | 0);
          var we =
            (((u + (n = (n + Math.imul(M, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(M, me)) | 0) + Math.imul(O, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(O, me)) | 0) + (r >>> 13)) | 0) +
              (we >>> 26)) |
            0),
            (we &= 67108863),
            (n = Math.imul(k, ce)),
            (r = ((r = Math.imul(k, ue)) + Math.imul(U, ce)) | 0),
            (o = Math.imul(U, ue)),
            (n = (n + Math.imul(F, he)) | 0),
            (r = ((r = (r + Math.imul(F, fe)) | 0) + Math.imul(B, he)) | 0),
            (o = (o + Math.imul(B, fe)) | 0);
          var Ie =
            (((u + (n = (n + Math.imul(I, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(I, me)) | 0) + Math.imul(D, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(D, me)) | 0) + (r >>> 13)) | 0) +
              (Ie >>> 26)) |
            0),
            (Ie &= 67108863),
            (n = Math.imul(k, he)),
            (r = ((r = Math.imul(k, fe)) + Math.imul(U, he)) | 0),
            (o = Math.imul(U, fe));
          var De =
            (((u + (n = (n + Math.imul(F, pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(F, me)) | 0) + Math.imul(B, pe)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(B, me)) | 0) + (r >>> 13)) | 0) +
              (De >>> 26)) |
            0),
            (De &= 67108863);
          var Le =
            (((u + (n = Math.imul(k, pe))) | 0) +
              ((8191 & (r = ((r = Math.imul(k, me)) + Math.imul(U, pe)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(U, me)) + (r >>> 13)) | 0) + (Le >>> 26)) | 0),
            (Le &= 67108863),
            (c[0] = ge),
            (c[1] = _e),
            (c[2] = ve),
            (c[3] = ye),
            (c[4] = be),
            (c[5] = Ee),
            (c[6] = Te),
            (c[7] = Ae),
            (c[8] = xe),
            (c[9] = Se),
            (c[10] = Ce),
            (c[11] = Pe),
            (c[12] = Re),
            (c[13] = Me),
            (c[14] = Oe),
            (c[15] = we),
            (c[16] = Ie),
            (c[17] = De),
            (c[18] = Le),
            0 !== u && ((c[19] = u), i.length++),
            i
          );
        };
        function m(e, t, i) {
          return new g().mulp(e, t, i);
        }
        function g(e, t) {
          (this.x = e), (this.y = t);
        }
        Math.imul || (p = d),
          (a.prototype.mulTo = function(e, t) {
            var i = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? p(this, e, t)
              : i < 63
              ? d(this, e, t)
              : i < 1024
              ? (function(e, t, i) {
                  (i.negative = t.negative ^ e.negative),
                    (i.length = e.length + t.length);
                  for (var n = 0, r = 0, o = 0; o < i.length - 1; o++) {
                    var a = r;
                    r = 0;
                    for (
                      var s = 67108863 & n,
                        c = Math.min(o, t.length - 1),
                        u = Math.max(0, o - e.length + 1);
                      u <= c;
                      u++
                    ) {
                      var l = o - u,
                        h = (0 | e.words[l]) * (0 | t.words[u]),
                        f = 67108863 & h;
                      (s = 67108863 & (f = (f + s) | 0)),
                        (r +=
                          (a =
                            ((a = (a + ((h / 67108864) | 0)) | 0) +
                              (f >>> 26)) |
                            0) >>> 26),
                        (a &= 67108863);
                    }
                    (i.words[o] = s), (n = a), (a = r);
                  }
                  return 0 !== n ? (i.words[o] = n) : i.length--, i.strip();
                })(this, e, t)
              : m(this, e, t);
          }),
          (g.prototype.makeRBT = function(e) {
            for (
              var t = new Array(e), i = a.prototype._countBits(e) - 1, n = 0;
              n < e;
              n++
            )
              t[n] = this.revBin(n, i, e);
            return t;
          }),
          (g.prototype.revBin = function(e, t, i) {
            if (0 === e || e === i - 1) return e;
            for (var n = 0, r = 0; r < t; r++)
              (n |= (1 & e) << (t - r - 1)), (e >>= 1);
            return n;
          }),
          (g.prototype.permute = function(e, t, i, n, r, o) {
            for (var a = 0; a < o; a++) (n[a] = t[e[a]]), (r[a] = i[e[a]]);
          }),
          (g.prototype.transform = function(e, t, i, n, r, o) {
            this.permute(o, e, t, i, n, r);
            for (var a = 1; a < r; a <<= 1)
              for (
                var s = a << 1,
                  c = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  l = 0;
                l < r;
                l += s
              )
                for (var h = c, f = u, d = 0; d < a; d++) {
                  var p = i[l + d],
                    m = n[l + d],
                    g = i[l + d + a],
                    _ = n[l + d + a],
                    v = h * g - f * _;
                  (_ = h * _ + f * g),
                    (g = v),
                    (i[l + d] = p + g),
                    (n[l + d] = m + _),
                    (i[l + d + a] = p - g),
                    (n[l + d + a] = m - _),
                    d !== s &&
                      ((v = c * h - u * f), (f = c * f + u * h), (h = v));
                }
          }),
          (g.prototype.guessLen13b = function(e, t) {
            var i = 1 | Math.max(t, e),
              n = 1 & i,
              r = 0;
            for (i = (i / 2) | 0; i; i >>>= 1) r++;
            return 1 << (r + 1 + n);
          }),
          (g.prototype.conjugate = function(e, t, i) {
            if (!(i <= 1))
              for (var n = 0; n < i / 2; n++) {
                var r = e[n];
                (e[n] = e[i - n - 1]),
                  (e[i - n - 1] = r),
                  (r = t[n]),
                  (t[n] = -t[i - n - 1]),
                  (t[i - n - 1] = -r);
              }
          }),
          (g.prototype.normalize13b = function(e, t) {
            for (var i = 0, n = 0; n < t / 2; n++) {
              var r =
                8192 * Math.round(e[2 * n + 1] / t) +
                Math.round(e[2 * n] / t) +
                i;
              (e[n] = 67108863 & r),
                (i = r < 67108864 ? 0 : (r / 67108864) | 0);
            }
            return e;
          }),
          (g.prototype.convert13b = function(e, t, i, n) {
            for (var o = 0, a = 0; a < t; a++)
              (o += 0 | e[a]),
                (i[2 * a] = 8191 & o),
                (o >>>= 13),
                (i[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * t; a < n; ++a) i[a] = 0;
            r(0 === o), r(0 == (-8192 & o));
          }),
          (g.prototype.stub = function(e) {
            for (var t = new Array(e), i = 0; i < e; i++) t[i] = 0;
            return t;
          }),
          (g.prototype.mulp = function(e, t, i) {
            var n = 2 * this.guessLen13b(e.length, t.length),
              r = this.makeRBT(n),
              o = this.stub(n),
              a = new Array(n),
              s = new Array(n),
              c = new Array(n),
              u = new Array(n),
              l = new Array(n),
              h = new Array(n),
              f = i.words;
            (f.length = n),
              this.convert13b(e.words, e.length, a, n),
              this.convert13b(t.words, t.length, u, n),
              this.transform(a, o, s, c, n, r),
              this.transform(u, o, l, h, n, r);
            for (var d = 0; d < n; d++) {
              var p = s[d] * l[d] - c[d] * h[d];
              (c[d] = s[d] * h[d] + c[d] * l[d]), (s[d] = p);
            }
            return (
              this.conjugate(s, c, n),
              this.transform(s, c, f, o, n, r),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (i.negative = e.negative ^ t.negative),
              (i.length = e.length + t.length),
              i.strip()
            );
          }),
          (a.prototype.mul = function(e) {
            var t = new a(null);
            return (
              (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
            );
          }),
          (a.prototype.mulf = function(e) {
            var t = new a(null);
            return (t.words = new Array(this.length + e.length)), m(this, e, t);
          }),
          (a.prototype.imul = function(e) {
            return this.clone().mulTo(e, this);
          }),
          (a.prototype.imuln = function(e) {
            r("number" == typeof e), r(e < 67108864);
            for (var t = 0, i = 0; i < this.length; i++) {
              var n = (0 | this.words[i]) * e,
                o = (67108863 & n) + (67108863 & t);
              (t >>= 26),
                (t += (n / 67108864) | 0),
                (t += o >>> 26),
                (this.words[i] = 67108863 & o);
            }
            return 0 !== t && ((this.words[i] = t), this.length++), this;
          }),
          (a.prototype.muln = function(e) {
            return this.clone().imuln(e);
          }),
          (a.prototype.sqr = function() {
            return this.mul(this);
          }),
          (a.prototype.isqr = function() {
            return this.imul(this.clone());
          }),
          (a.prototype.pow = function(e) {
            var t = (function(e) {
              for (var t = new Array(e.bitLength()), i = 0; i < t.length; i++) {
                var n = (i / 26) | 0,
                  r = i % 26;
                t[i] = (e.words[n] & (1 << r)) >>> r;
              }
              return t;
            })(e);
            if (0 === t.length) return new a(1);
            for (
              var i = this, n = 0;
              n < t.length && 0 === t[n];
              n++, i = i.sqr()
            );
            if (++n < t.length)
              for (var r = i.sqr(); n < t.length; n++, r = r.sqr())
                0 !== t[n] && (i = i.mul(r));
            return i;
          }),
          (a.prototype.iushln = function(e) {
            r("number" == typeof e && e >= 0);
            var t,
              i = e % 26,
              n = (e - i) / 26,
              o = (67108863 >>> (26 - i)) << (26 - i);
            if (0 !== i) {
              var a = 0;
              for (t = 0; t < this.length; t++) {
                var s = this.words[t] & o,
                  c = ((0 | this.words[t]) - s) << i;
                (this.words[t] = c | a), (a = s >>> (26 - i));
              }
              a && ((this.words[t] = a), this.length++);
            }
            if (0 !== n) {
              for (t = this.length - 1; t >= 0; t--)
                this.words[t + n] = this.words[t];
              for (t = 0; t < n; t++) this.words[t] = 0;
              this.length += n;
            }
            return this.strip();
          }),
          (a.prototype.ishln = function(e) {
            return r(0 === this.negative), this.iushln(e);
          }),
          (a.prototype.iushrn = function(e, t, i) {
            var n;
            r("number" == typeof e && e >= 0),
              (n = t ? (t - (t % 26)) / 26 : 0);
            var o = e % 26,
              a = Math.min((e - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              c = i;
            if (((n -= a), (n = Math.max(0, n)), c)) {
              for (var u = 0; u < a; u++) c.words[u] = this.words[u];
              c.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (u = this.length - 1; u >= 0 && (0 !== l || u >= n); u--) {
              var h = 0 | this.words[u];
              (this.words[u] = (l << (26 - o)) | (h >>> o)), (l = h & s);
            }
            return (
              c && 0 !== l && (c.words[c.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (a.prototype.ishrn = function(e, t, i) {
            return r(0 === this.negative), this.iushrn(e, t, i);
          }),
          (a.prototype.shln = function(e) {
            return this.clone().ishln(e);
          }),
          (a.prototype.ushln = function(e) {
            return this.clone().iushln(e);
          }),
          (a.prototype.shrn = function(e) {
            return this.clone().ishrn(e);
          }),
          (a.prototype.ushrn = function(e) {
            return this.clone().iushrn(e);
          }),
          (a.prototype.testn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26,
              i = (e - t) / 26,
              n = 1 << t;
            return !(this.length <= i) && !!(this.words[i] & n);
          }),
          (a.prototype.imaskn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26,
              i = (e - t) / 26;
            if (
              (r(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= i)
            )
              return this;
            if (
              (0 !== t && i++,
              (this.length = Math.min(i, this.length)),
              0 !== t)
            ) {
              var n = 67108863 ^ ((67108863 >>> t) << t);
              this.words[this.length - 1] &= n;
            }
            return this.strip();
          }),
          (a.prototype.maskn = function(e) {
            return this.clone().imaskn(e);
          }),
          (a.prototype.iaddn = function(e) {
            return (
              r("number" == typeof e),
              r(e < 67108864),
              e < 0
                ? this.isubn(-e)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(e),
                    (this.negative = 1),
                    this)
                : this._iaddn(e)
            );
          }),
          (a.prototype._iaddn = function(e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
              (this.words[t] -= 67108864),
                t === this.length - 1
                  ? (this.words[t + 1] = 1)
                  : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
          }),
          (a.prototype.isubn = function(e) {
            if ((r("number" == typeof e), r(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                (this.words[t] += 67108864), (this.words[t + 1] -= 1);
            return this.strip();
          }),
          (a.prototype.addn = function(e) {
            return this.clone().iaddn(e);
          }),
          (a.prototype.subn = function(e) {
            return this.clone().isubn(e);
          }),
          (a.prototype.iabs = function() {
            return (this.negative = 0), this;
          }),
          (a.prototype.abs = function() {
            return this.clone().iabs();
          }),
          (a.prototype._ishlnsubmul = function(e, t, i) {
            var n,
              o,
              a = e.length + i;
            this._expand(a);
            var s = 0;
            for (n = 0; n < e.length; n++) {
              o = (0 | this.words[n + i]) + s;
              var c = (0 | e.words[n]) * t;
              (s = ((o -= 67108863 & c) >> 26) - ((c / 67108864) | 0)),
                (this.words[n + i] = 67108863 & o);
            }
            for (; n < this.length - i; n++)
              (s = (o = (0 | this.words[n + i]) + s) >> 26),
                (this.words[n + i] = 67108863 & o);
            if (0 === s) return this.strip();
            for (r(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (o = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (a.prototype._wordDiv = function(e, t) {
            var i = (this.length, e.length),
              n = this.clone(),
              r = e,
              o = 0 | r.words[r.length - 1];
            0 !== (i = 26 - this._countBits(o)) &&
              ((r = r.ushln(i)), n.iushln(i), (o = 0 | r.words[r.length - 1]));
            var s,
              c = n.length - r.length;
            if ("mod" !== t) {
              ((s = new a(null)).length = c + 1),
                (s.words = new Array(s.length));
              for (var u = 0; u < s.length; u++) s.words[u] = 0;
            }
            var l = n.clone()._ishlnsubmul(r, 1, c);
            0 === l.negative && ((n = l), s && (s.words[c] = 1));
            for (var h = c - 1; h >= 0; h--) {
              var f =
                67108864 * (0 | n.words[r.length + h]) +
                (0 | n.words[r.length + h - 1]);
              for (
                f = Math.min((f / o) | 0, 67108863), n._ishlnsubmul(r, f, h);
                0 !== n.negative;

              )
                f--,
                  (n.negative = 0),
                  n._ishlnsubmul(r, 1, h),
                  n.isZero() || (n.negative ^= 1);
              s && (s.words[h] = f);
            }
            return (
              s && s.strip(),
              n.strip(),
              "div" !== t && 0 !== i && n.iushrn(i),
              { div: s || null, mod: n }
            );
          }),
          (a.prototype.divmod = function(e, t, i) {
            return (
              r(!e.isZero()),
              this.isZero()
                ? { div: new a(0), mod: new a(0) }
                : 0 !== this.negative && 0 === e.negative
                ? ((s = this.neg().divmod(e, t)),
                  "mod" !== t && (n = s.div.neg()),
                  "div" !== t &&
                    ((o = s.mod.neg()), i && 0 !== o.negative && o.iadd(e)),
                  { div: n, mod: o })
                : 0 === this.negative && 0 !== e.negative
                ? ((s = this.divmod(e.neg(), t)),
                  "mod" !== t && (n = s.div.neg()),
                  { div: n, mod: s.mod })
                : 0 != (this.negative & e.negative)
                ? ((s = this.neg().divmod(e.neg(), t)),
                  "div" !== t &&
                    ((o = s.mod.neg()), i && 0 !== o.negative && o.isub(e)),
                  { div: s.div, mod: o })
                : e.length > this.length || this.cmp(e) < 0
                ? { div: new a(0), mod: this }
                : 1 === e.length
                ? "div" === t
                  ? { div: this.divn(e.words[0]), mod: null }
                  : "mod" === t
                  ? { div: null, mod: new a(this.modn(e.words[0])) }
                  : {
                      div: this.divn(e.words[0]),
                      mod: new a(this.modn(e.words[0]))
                    }
                : this._wordDiv(e, t)
            );
            var n, o, s;
          }),
          (a.prototype.div = function(e) {
            return this.divmod(e, "div", !1).div;
          }),
          (a.prototype.mod = function(e) {
            return this.divmod(e, "mod", !1).mod;
          }),
          (a.prototype.umod = function(e) {
            return this.divmod(e, "mod", !0).mod;
          }),
          (a.prototype.divRound = function(e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var i = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              n = e.ushrn(1),
              r = e.andln(1),
              o = i.cmp(n);
            return o < 0 || (1 === r && 0 === o)
              ? t.div
              : 0 !== t.div.negative
              ? t.div.isubn(1)
              : t.div.iaddn(1);
          }),
          (a.prototype.modn = function(e) {
            r(e <= 67108863);
            for (var t = (1 << 26) % e, i = 0, n = this.length - 1; n >= 0; n--)
              i = (t * i + (0 | this.words[n])) % e;
            return i;
          }),
          (a.prototype.idivn = function(e) {
            r(e <= 67108863);
            for (var t = 0, i = this.length - 1; i >= 0; i--) {
              var n = (0 | this.words[i]) + 67108864 * t;
              (this.words[i] = (n / e) | 0), (t = n % e);
            }
            return this.strip();
          }),
          (a.prototype.divn = function(e) {
            return this.clone().idivn(e);
          }),
          (a.prototype.egcd = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this,
              i = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var n = new a(1), o = new a(0), s = new a(0), c = new a(1), u = 0;
              t.isEven() && i.isEven();

            )
              t.iushrn(1), i.iushrn(1), ++u;
            for (var l = i.clone(), h = t.clone(); !t.isZero(); ) {
              for (
                var f = 0, d = 1;
                0 == (t.words[0] & d) && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (t.iushrn(f); f-- > 0; )
                  (n.isOdd() || o.isOdd()) && (n.iadd(l), o.isub(h)),
                    n.iushrn(1),
                    o.iushrn(1);
              for (
                var p = 0, m = 1;
                0 == (i.words[0] & m) && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (i.iushrn(p); p-- > 0; )
                  (s.isOdd() || c.isOdd()) && (s.iadd(l), c.isub(h)),
                    s.iushrn(1),
                    c.iushrn(1);
              t.cmp(i) >= 0
                ? (t.isub(i), n.isub(s), o.isub(c))
                : (i.isub(t), s.isub(n), c.isub(o));
            }
            return { a: s, b: c, gcd: i.iushln(u) };
          }),
          (a.prototype._invmp = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this,
              i = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var n, o = new a(1), s = new a(0), c = i.clone();
              t.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, l = 1;
                0 == (t.words[0] & l) && u < 26;
                ++u, l <<= 1
              );
              if (u > 0)
                for (t.iushrn(u); u-- > 0; )
                  o.isOdd() && o.iadd(c), o.iushrn(1);
              for (
                var h = 0, f = 1;
                0 == (i.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (i.iushrn(h); h-- > 0; )
                  s.isOdd() && s.iadd(c), s.iushrn(1);
              t.cmp(i) >= 0 ? (t.isub(i), o.isub(s)) : (i.isub(t), s.isub(o));
            }
            return (n = 0 === t.cmpn(1) ? o : s).cmpn(0) < 0 && n.iadd(e), n;
          }),
          (a.prototype.gcd = function(e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
              i = e.clone();
            (t.negative = 0), (i.negative = 0);
            for (var n = 0; t.isEven() && i.isEven(); n++)
              t.iushrn(1), i.iushrn(1);
            for (;;) {
              for (; t.isEven(); ) t.iushrn(1);
              for (; i.isEven(); ) i.iushrn(1);
              var r = t.cmp(i);
              if (r < 0) {
                var o = t;
                (t = i), (i = o);
              } else if (0 === r || 0 === i.cmpn(1)) break;
              t.isub(i);
            }
            return i.iushln(n);
          }),
          (a.prototype.invm = function(e) {
            return this.egcd(e).a.umod(e);
          }),
          (a.prototype.isEven = function() {
            return 0 == (1 & this.words[0]);
          }),
          (a.prototype.isOdd = function() {
            return 1 == (1 & this.words[0]);
          }),
          (a.prototype.andln = function(e) {
            return this.words[0] & e;
          }),
          (a.prototype.bincn = function(e) {
            r("number" == typeof e);
            var t = e % 26,
              i = (e - t) / 26,
              n = 1 << t;
            if (this.length <= i)
              return this._expand(i + 1), (this.words[i] |= n), this;
            for (var o = n, a = i; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (a.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0];
          }),
          (a.prototype.cmpn = function(e) {
            var t,
              i = e < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if ((this.strip(), this.length > 1)) t = 1;
            else {
              i && (e = -e), r(e <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              t = n === e ? 0 : n < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (a.prototype.cmp = function(e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (a.prototype.ucmp = function(e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, i = this.length - 1; i >= 0; i--) {
              var n = 0 | this.words[i],
                r = 0 | e.words[i];
              if (n !== r) {
                n < r ? (t = -1) : n > r && (t = 1);
                break;
              }
            }
            return t;
          }),
          (a.prototype.gtn = function(e) {
            return 1 === this.cmpn(e);
          }),
          (a.prototype.gt = function(e) {
            return 1 === this.cmp(e);
          }),
          (a.prototype.gten = function(e) {
            return this.cmpn(e) >= 0;
          }),
          (a.prototype.gte = function(e) {
            return this.cmp(e) >= 0;
          }),
          (a.prototype.ltn = function(e) {
            return -1 === this.cmpn(e);
          }),
          (a.prototype.lt = function(e) {
            return -1 === this.cmp(e);
          }),
          (a.prototype.lten = function(e) {
            return this.cmpn(e) <= 0;
          }),
          (a.prototype.lte = function(e) {
            return this.cmp(e) <= 0;
          }),
          (a.prototype.eqn = function(e) {
            return 0 === this.cmpn(e);
          }),
          (a.prototype.eq = function(e) {
            return 0 === this.cmp(e);
          }),
          (a.red = function(e) {
            return new A(e);
          }),
          (a.prototype.toRed = function(e) {
            return (
              r(!this.red, "Already a number in reduction context"),
              r(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (a.prototype.fromRed = function() {
            return (
              r(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (a.prototype._forceRed = function(e) {
            return (this.red = e), this;
          }),
          (a.prototype.forceRed = function(e) {
            return (
              r(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            );
          }),
          (a.prototype.redAdd = function(e) {
            return (
              r(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            );
          }),
          (a.prototype.redIAdd = function(e) {
            return (
              r(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            );
          }),
          (a.prototype.redSub = function(e) {
            return (
              r(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            );
          }),
          (a.prototype.redISub = function(e) {
            return (
              r(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            );
          }),
          (a.prototype.redShl = function(e) {
            return (
              r(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            );
          }),
          (a.prototype.redMul = function(e) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (a.prototype.redIMul = function(e) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (a.prototype.redSqr = function() {
            return (
              r(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (a.prototype.redISqr = function() {
            return (
              r(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (a.prototype.redSqrt = function() {
            return (
              r(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (a.prototype.redInvm = function() {
            return (
              r(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (a.prototype.redNeg = function() {
            return (
              r(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (a.prototype.redPow = function(e) {
            return (
              r(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var _ = { k256: null, p224: null, p192: null, p25519: null };
        function v(e, t) {
          (this.name = e),
            (this.p = new a(t, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new a(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function y() {
          v.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function b() {
          v.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function E() {
          v.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function T() {
          v.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(e) {
          if ("string" == typeof e) {
            var t = a._prime(e);
            (this.m = t.p), (this.prime = t);
          } else
            r(e.gtn(1), "modulus must be greater than 1"),
              (this.m = e),
              (this.prime = null);
        }
        function x(e) {
          A.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new a(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv
              .mul(this.r)
              .isubn(1)
              .div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (v.prototype._tmp = function() {
          var e = new a(null);
          return (e.words = new Array(Math.ceil(this.n / 13))), e;
        }),
          (v.prototype.ireduce = function(e) {
            var t,
              i = e;
            do {
              this.split(i, this.tmp),
                (t = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength());
            } while (t > this.n);
            var n = t < this.n ? -1 : i.ucmp(this.p);
            return (
              0 === n
                ? ((i.words[0] = 0), (i.length = 1))
                : n > 0
                ? i.isub(this.p)
                : i.strip(),
              i
            );
          }),
          (v.prototype.split = function(e, t) {
            e.iushrn(this.n, 0, t);
          }),
          (v.prototype.imulK = function(e) {
            return e.imul(this.k);
          }),
          o(y, v),
          (y.prototype.split = function(e, t) {
            for (var i = Math.min(e.length, 9), n = 0; n < i; n++)
              t.words[n] = e.words[n];
            if (((t.length = i), e.length <= 9))
              return (e.words[0] = 0), void (e.length = 1);
            var r = e.words[9];
            for (t.words[t.length++] = 4194303 & r, n = 10; n < e.length; n++) {
              var o = 0 | e.words[n];
              (e.words[n - 10] = ((4194303 & o) << 4) | (r >>> 22)), (r = o);
            }
            (r >>>= 22),
              (e.words[n - 10] = r),
              0 === r && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (y.prototype.imulK = function(e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var t = 0, i = 0; i < e.length; i++) {
              var n = 0 | e.words[i];
              (t += 977 * n),
                (e.words[i] = 67108863 & t),
                (t = 64 * n + ((t / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          o(b, v),
          o(E, v),
          o(T, v),
          (T.prototype.imulK = function(e) {
            for (var t = 0, i = 0; i < e.length; i++) {
              var n = 19 * (0 | e.words[i]) + t,
                r = 67108863 & n;
              (n >>>= 26), (e.words[i] = r), (t = n);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
          }),
          (a._prime = function(e) {
            if (_[e]) return _[e];
            var t;
            if ("k256" === e) t = new y();
            else if ("p224" === e) t = new b();
            else if ("p192" === e) t = new E();
            else {
              if ("p25519" !== e) throw new Error("Unknown prime " + e);
              t = new T();
            }
            return (_[e] = t), t;
          }),
          (A.prototype._verify1 = function(e) {
            r(0 === e.negative, "red works only with positives"),
              r(e.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function(e, t) {
            r(0 == (e.negative | t.negative), "red works only with positives"),
              r(e.red && e.red === t.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function(e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (A.prototype.neg = function(e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (A.prototype.add = function(e, t) {
            this._verify2(e, t);
            var i = e.add(t);
            return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this);
          }),
          (A.prototype.iadd = function(e, t) {
            this._verify2(e, t);
            var i = e.iadd(t);
            return i.cmp(this.m) >= 0 && i.isub(this.m), i;
          }),
          (A.prototype.sub = function(e, t) {
            this._verify2(e, t);
            var i = e.sub(t);
            return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this);
          }),
          (A.prototype.isub = function(e, t) {
            this._verify2(e, t);
            var i = e.isub(t);
            return i.cmpn(0) < 0 && i.iadd(this.m), i;
          }),
          (A.prototype.shl = function(e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
          }),
          (A.prototype.imul = function(e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
          }),
          (A.prototype.mul = function(e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
          }),
          (A.prototype.isqr = function(e) {
            return this.imul(e, e.clone());
          }),
          (A.prototype.sqr = function(e) {
            return this.mul(e, e);
          }),
          (A.prototype.sqrt = function(e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((r(t % 2 == 1), 3 === t)) {
              var i = this.m.add(new a(1)).iushrn(2);
              return this.pow(e, i);
            }
            for (
              var n = this.m.subn(1), o = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              o++, n.iushrn(1);
            r(!n.isZero());
            var s = new a(1).toRed(this),
              c = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new a(2 * l * l).toRed(this);
              0 !== this.pow(l, u).cmp(c);

            )
              l.redIAdd(c);
            for (
              var h = this.pow(l, n),
                f = this.pow(e, n.addn(1).iushrn(1)),
                d = this.pow(e, n),
                p = o;
              0 !== d.cmp(s);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
              r(g < p);
              var _ = this.pow(h, new a(1).iushln(p - g - 1));
              (f = f.redMul(_)), (h = _.redSqr()), (d = d.redMul(h)), (p = g);
            }
            return f;
          }),
          (A.prototype.invm = function(e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative
              ? ((t.negative = 0), this.imod(t).redNeg())
              : this.imod(t);
          }),
          (A.prototype.pow = function(e, t) {
            if (t.isZero()) return new a(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var i = new Array(16);
            (i[0] = new a(1).toRed(this)), (i[1] = e);
            for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], e);
            var r = i[0],
              o = 0,
              s = 0,
              c = t.bitLength() % 26;
            for (0 === c && (c = 26), n = t.length - 1; n >= 0; n--) {
              for (var u = t.words[n], l = c - 1; l >= 0; l--) {
                var h = (u >> l) & 1;
                r !== i[0] && (r = this.sqr(r)),
                  0 !== h || 0 !== o
                    ? ((o <<= 1),
                      (o |= h),
                      (4 === ++s || (0 === n && 0 === l)) &&
                        ((r = this.mul(r, i[o])), (s = 0), (o = 0)))
                    : (s = 0);
              }
              c = 26;
            }
            return r;
          }),
          (A.prototype.convertTo = function(e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
          }),
          (A.prototype.convertFrom = function(e) {
            var t = e.clone();
            return (t.red = null), t;
          }),
          (a.mont = function(e) {
            return new x(e);
          }),
          o(x, A),
          (x.prototype.convertTo = function(e) {
            return this.imod(e.ushln(this.shift));
          }),
          (x.prototype.convertFrom = function(e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
          }),
          (x.prototype.imul = function(e, t) {
            if (e.isZero() || t.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var i = e.imul(t),
              n = i
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              r = i.isub(n).iushrn(this.shift),
              o = r;
            return (
              r.cmp(this.m) >= 0
                ? (o = r.isub(this.m))
                : r.cmpn(0) < 0 && (o = r.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (x.prototype.mul = function(e, t) {
            if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
            var i = e.mul(t),
              n = i
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              r = i.isub(n).iushrn(this.shift),
              o = r;
            return (
              r.cmp(this.m) >= 0
                ? (o = r.isub(this.m))
                : r.cmpn(0) < 0 && (o = r.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (x.prototype.invm = function(e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })(e, this);
    }.call(this, i(122)(e)));
  },
  function(e, t, i) {
    var n = i(4),
      r = i(138),
      o = i(39),
      a = Object.defineProperty;
    t.f = i(13)
      ? Object.defineProperty
      : function(e, t, i) {
          if ((n(e), (t = o(t, !0)), n(i), r))
            try {
              return a(e, t, i);
            } catch (e) {}
          if ("get" in i || "set" in i)
            throw TypeError("Accessors not supported!");
          return "value" in i && (e[t] = i.value), e;
        };
  },
  function(e, t, i) {
    e.exports = !i(3)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(e, t) {
    var i = (e.exports = { version: "2.6.0" });
    "number" == typeof __e && (__e = i);
  },
  function(e, t) {
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : i(window)) &&
        (n = window);
    }
    e.exports = n;
  },
  function(e, t, i) {
    e.exports = {
      EPSILON: i(173),
      create: i(174),
      clone: i(413),
      angle: i(414),
      fromValues: i(175),
      copy: i(415),
      set: i(416),
      equals: i(417),
      exactEquals: i(418),
      add: i(419),
      subtract: i(178),
      sub: i(420),
      multiply: i(179),
      mul: i(421),
      divide: i(180),
      div: i(422),
      min: i(423),
      max: i(424),
      floor: i(425),
      ceil: i(426),
      round: i(427),
      scale: i(428),
      scaleAndAdd: i(429),
      distance: i(181),
      dist: i(430),
      squaredDistance: i(182),
      sqrDist: i(431),
      length: i(183),
      len: i(432),
      squaredLength: i(184),
      sqrLen: i(433),
      negate: i(434),
      inverse: i(435),
      normalize: i(176),
      dot: i(177),
      cross: i(436),
      lerp: i(437),
      random: i(438),
      transformMat4: i(439),
      transformMat3: i(440),
      transformQuat: i(441),
      rotateX: i(442),
      rotateY: i(443),
      rotateZ: i(444),
      forEach: i(445)
    };
  },
  function(e, t, i) {
    "use strict";
    var n = t;
    (n.version = i(549).version),
      (n.utils = i(550)),
      (n.rand = i(213)),
      (n.curve = i(91)),
      (n.curves = i(555)),
      (n.ec = i(563)),
      (n.eddsa = i(567));
  },
  function(e, t, i) {
    "use strict";
    (function(e) {
      function n(t, i, n, r, o, a, s) {
        try {
          var c = t[a](s),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? i(u) : e.resolve(u).then(r, o);
      }
      function r(t) {
        return function() {
          var i = this,
            r = arguments;
          return new e(function(e, o) {
            var a = t.apply(i, r);
            function s(t) {
              n(a, e, o, s, c, "next", t);
            }
            function c(t) {
              n(a, e, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function o(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var a = i(397),
        s = (function() {
          function t() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var i, n, s;
          return (
            (i = t),
            (n = null),
            (s = [
              {
                key: "init",
                value: function() {
                  (self.baseUrl = a.backendBaseUrl), (self.socket = null);
                }
              },
              {
                key: "getICECandidates",
                value: function(i) {
                  return new e(function(e, n) {
                    t.executeXhr("/get-ice-candidates/" + i, "get").then(
                      function(t) {
                        e([JSON.parse(t).v.iceServers]);
                      }
                    );
                  });
                }
              },
              {
                key: "getNewGame",
                value: function() {
                  return new e(function(e, i) {
                    t.executeXhr("/game", "get").then(function(i) {
                      var n = JSON.parse(i);
                      e(n),
                        setInterval(function() {
                          t.executeXhr(
                            "/game/" + n.code + "/heartbeat",
                            "put"
                          ).then(function(e) {});
                        }, 3e4);
                    });
                  });
                }
              },
              {
                key: "getGame",
                value: function(i) {
                  return null == i
                    ? t.getNewGame()
                    : new e(function(e, n) {
                        t.executeXhr("/game/" + i, "get").then(
                          function(t) {
                            e(JSON.parse(t));
                          },
                          function(t) {
                            e(null);
                          }
                        );
                      });
                }
              },
              {
                key: "listenForData",
                value: (function() {
                  var e = r(
                    regeneratorRuntime.mark(function e(t, i) {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (null !== self.socket) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  console.log("no socket!"), e.abrupt("return")
                                );
                              case 3:
                                socket.addEventListener("message", function(e) {
                                  var t = JSON.parse(e.data),
                                    n = {
                                      payload: t.p,
                                      meta: t.m,
                                      msgEvent: t.o,
                                      to: t.m.t,
                                      from: t.m.f
                                    };
                                  i(n);
                                });
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t, i) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "createSignalingChannel",
                value: (function() {
                  var i = r(
                    regeneratorRuntime.mark(function i(n, o) {
                      return regeneratorRuntime.wrap(
                        function(i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return i.abrupt(
                                  "return",
                                  new e(
                                    (function() {
                                      var e = r(
                                        regeneratorRuntime.mark(function e(
                                          i,
                                          r
                                        ) {
                                          var a;
                                          return regeneratorRuntime.wrap(
                                            function(e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      t.executeXhr(
                                                        "/create-channel/" + n,
                                                        "get"
                                                      )
                                                    );
                                                  case 2:
                                                    return (
                                                      (e.next = 4),
                                                      t.getWebSocket(n, o)
                                                    );
                                                  case 4:
                                                    (a = e.sent),
                                                      (self.socket = a),
                                                      a.addEventListener(
                                                        "open",
                                                        function() {
                                                          i(),
                                                            setInterval(
                                                              function() {
                                                                a.send("ping");
                                                              },
                                                              800
                                                            );
                                                        }
                                                      );
                                                  case 7:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            this
                                          );
                                        })
                                      );
                                      return function(t, i) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 1:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        this
                      );
                    })
                  );
                  return function(e, t) {
                    return i.apply(this, arguments);
                  };
                })()
              },
              {
                key: "joinSignalingChannel",
                value: (function() {
                  var i = r(
                    regeneratorRuntime.mark(function i(n, o) {
                      return regeneratorRuntime.wrap(
                        function(i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return i.abrupt(
                                  "return",
                                  new e(
                                    (function() {
                                      var e = r(
                                        regeneratorRuntime.mark(function e(
                                          i,
                                          r
                                        ) {
                                          var a;
                                          return regeneratorRuntime.wrap(
                                            function(e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      t.getWebSocket(n, o)
                                                    );
                                                  case 2:
                                                    (a = e.sent),
                                                      (self.socket = a),
                                                      a.addEventListener(
                                                        "open",
                                                        function() {
                                                          i(),
                                                            setInterval(
                                                              function() {
                                                                a.send("ping");
                                                              },
                                                              800
                                                            );
                                                        }
                                                      );
                                                  case 5:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            this
                                          );
                                        })
                                      );
                                      return function(t, i) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 1:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        this
                      );
                    })
                  );
                  return function(e, t) {
                    return i.apply(this, arguments);
                  };
                })()
              },
              {
                key: "sendSignalingTo",
                value: (function() {
                  var e = r(
                    regeneratorRuntime.mark(function e(t, i, n, r) {
                      var o;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (null !== self.socket) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  console.log("no socket!"), e.abrupt("return")
                                );
                              case 3:
                                (o = {
                                  t: "u",
                                  m: { f: t + "/" + n, t: i, o: "message" },
                                  p: { signal: JSON.stringify(r) }
                                }),
                                  self.socket.send(JSON.stringify(o));
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t, i, n, r) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getWebSocket",
                value: (function() {
                  var e = r(
                    regeneratorRuntime.mark(function e(i, n) {
                      var r, o, a;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = JSON),
                                  (e.next = 3),
                                  t.executeXhr(
                                    "/get-signaling-token/" + i + "/" + n,
                                    "get"
                                  )
                                );
                              case 3:
                                return (
                                  (e.t1 = e.sent),
                                  (r = e.t0.parse.call(e.t0, e.t1).v),
                                  (e.t2 = JSON),
                                  (e.next = 8),
                                  t.executeXhr(
                                    "/get-signaling-host/" + i + "/" + n,
                                    "get"
                                  )
                                );
                              case 8:
                                return (
                                  (e.t3 = e.sent),
                                  (o = e.t2.parse.call(e.t2, e.t3).v),
                                  (a = o + "/v2/" + r),
                                  e.abrupt("return", new WebSocket(a))
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t, i) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "addPlayerToGame",
                value: function(i, n) {
                  return new e(function(e, n) {
                    t.executeXhr("/game/" + i, "put").then(function(t) {
                      e(JSON.parse(t));
                    });
                  });
                }
              },
              {
                key: "pathUrl",
                value: function(e) {
                  return self.baseUrl + e;
                }
              },
              {
                key: "executeXhr",
                value: function(i, n) {
                  return new e(function(e, r) {
                    var o = new XMLHttpRequest(),
                      a = t.pathUrl(i);
                    o.open(n, a),
                      (o.onreadystatechange = function() {
                        4 !== o.readyState || 404 !== o.status || r();
                      }),
                      o.send(),
                      (o.onload = function() {
                        e(o.responseText);
                      }),
                      (o.onerror = function(e) {
                        console.log(e), r(e);
                      });
                  });
                }
              }
            ]),
            n && o(i.prototype, n),
            s && o(i, s),
            t
          );
        })();
      t.a = s;
    }.call(this, i(41)));
  },
  function(e, t, i) {
    var n = i(5),
      r = i(23),
      o = i(22),
      a = i(46)("src"),
      s = Function.toString,
      c = ("" + s).split("toString");
    (i(14).inspectSource = function(e) {
      return s.call(e);
    }),
      (e.exports = function(e, t, i, s) {
        var u = "function" == typeof i;
        u && (o(i, "name") || r(i, "name", t)),
          e[t] !== i &&
            (u && (o(i, a) || r(i, a, e[t] ? "" + e[t] : c.join(String(t)))),
            e === n
              ? (e[t] = i)
              : s
              ? e[t]
                ? (e[t] = i)
                : r(e, t, i)
              : (delete e[t], r(e, t, i)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[a]) || s.call(this);
      });
  },
  function(e, t, i) {
    var n = i(37);
    e.exports = function(e) {
      return Object(n(e));
    };
  },
  function(e, t, i) {
    var n = i(0),
      r = i(3),
      o = i(37),
      a = /"/g,
      s = function(e, t, i, n) {
        var r = String(o(e)),
          s = "<" + t;
        return (
          "" !== i &&
            (s += " " + i + '="' + String(n).replace(a, "&quot;") + '"'),
          s + ">" + r + "</" + t + ">"
        );
      };
    e.exports = function(e, t) {
      var i = {};
      (i[e] = t(s)),
        n(
          n.P +
            n.F *
              r(function() {
                var t = ""[e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3;
              }),
          "String",
          i
        );
    };
  },
  function(e, t) {
    var i = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return i.call(e, t);
    };
  },
  function(e, t, i) {
    var n = i(12),
      r = i(45);
    e.exports = i(13)
      ? function(e, t, i) {
          return n.f(e, t, r(1, i));
        }
      : function(e, t, i) {
          return (e[t] = i), e;
        };
  },
  function(e, t, i) {
    var n = i(64),
      r = i(37);
    e.exports = function(e) {
      return n(r(e));
    };
  },
  function(e, t) {
    function i(e, t) {
      if (!e) throw new Error(t || "Assertion failed");
    }
    (e.exports = i),
      (i.equal = function(e, t, i) {
        if (e != t) throw new Error(i || "Assertion failed: " + e + " != " + t);
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(3);
    e.exports = function(e, t) {
      return (
        !!e &&
        n(function() {
          t ? e.call(null, function() {}, 1) : e.call(null);
        })
      );
    };
  },
  function(e, t) {
    var i,
      n,
      r = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (i === setTimeout) return setTimeout(e, 0);
      if ((i === o || !i) && setTimeout)
        return (i = setTimeout), setTimeout(e, 0);
      try {
        return i(e, 0);
      } catch (t) {
        try {
          return i.call(null, e, 0);
        } catch (t) {
          return i.call(this, e, 0);
        }
      }
    }
    !(function() {
      try {
        i = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        i = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      h = -1;
    function f() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (h = -1), u.length && d());
    }
    function d() {
      if (!l) {
        var e = s(f);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++h < t; ) c && c[h].run();
          (h = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function(e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (r.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      u.push(new p(e, t)), 1 !== u.length || l || s(d);
    }),
      (p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function(e) {
        return [];
      }),
      (r.binding = function(e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function() {
        return "/";
      }),
      (r.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function() {
        return 0;
      });
  },
  function(e, t) {
    var i = Math.ceil,
      n = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? n : i)(e);
    };
  },
  function(e, t, i) {
    var n = i(65),
      r = i(45),
      o = i(24),
      a = i(39),
      s = i(22),
      c = i(138),
      u = Object.getOwnPropertyDescriptor;
    t.f = i(13)
      ? u
      : function(e, t) {
          if (((e = o(e)), (t = a(t, !0)), c))
            try {
              return u(e, t);
            } catch (e) {}
          if (s(e, t)) return r(!n.f.call(e, t), e[t]);
        };
  },
  function(e, t, i) {
    var n = i(0),
      r = i(14),
      o = i(3);
    e.exports = function(e, t) {
      var i = (r.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(i)),
        n(
          n.S +
            n.F *
              o(function() {
                i(1);
              }),
          "Object",
          a
        );
    };
  },
  function(e, t, i) {
    var n = i(34),
      r = i(64),
      o = i(20),
      a = i(10),
      s = i(321);
    e.exports = function(e, t) {
      var i = 1 == e,
        c = 2 == e,
        u = 3 == e,
        l = 4 == e,
        h = 6 == e,
        f = 5 == e || h,
        d = t || s;
      return function(t, s, p) {
        for (
          var m,
            g,
            _ = o(t),
            v = r(_),
            y = n(s, p, 3),
            b = a(v.length),
            E = 0,
            T = i ? d(t, b) : c ? d(t, 0) : void 0;
          b > E;
          E++
        )
          if ((f || E in v) && ((g = y((m = v[E]), E, _)), e))
            if (i) T[E] = g;
            else if (g)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return m;
                case 6:
                  return E;
                case 2:
                  T.push(m);
              }
            else if (l) return !1;
        return h ? -1 : u || l ? l : T;
      };
    };
  },
  function(e, t, i) {
    "use strict";
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = Object.prototype.hasOwnProperty,
      o = Object.prototype.toString,
      a = Object.defineProperty,
      s = Object.getOwnPropertyDescriptor,
      c = function(e) {
        return "function" == typeof Array.isArray
          ? Array.isArray(e)
          : "[object Array]" === o.call(e);
      },
      u = function(e) {
        if (!e || "[object Object]" !== o.call(e)) return !1;
        var t,
          i = r.call(e, "constructor"),
          n =
            e.constructor &&
            e.constructor.prototype &&
            r.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !i && !n) return !1;
        for (t in e);
        return void 0 === t || r.call(e, t);
      },
      l = function(e, t) {
        a && "__proto__" === t.name
          ? a(e, t.name, {
              enumerable: !0,
              configurable: !0,
              value: t.newValue,
              writable: !0
            })
          : (e[t.name] = t.newValue);
      },
      h = function(e, t) {
        if ("__proto__" === t) {
          if (!r.call(e, t)) return;
          if (s) return s(e, t).value;
        }
        return e[t];
      };
    e.exports = function e() {
      var t,
        i,
        r,
        o,
        a,
        s,
        f = arguments[0],
        d = 1,
        p = arguments.length,
        m = !1;
      for (
        "boolean" == typeof f && ((m = f), (f = arguments[1] || {}), (d = 2)),
          (null == f || ("object" !== n(f) && "function" != typeof f)) &&
            (f = {});
        d < p;
        ++d
      )
        if (null != (t = arguments[d]))
          for (i in t)
            (r = h(f, i)),
              f !== (o = h(t, i)) &&
                (m && o && (u(o) || (a = c(o)))
                  ? (a
                      ? ((a = !1), (s = r && c(r) ? r : []))
                      : (s = r && u(r) ? r : {}),
                    l(f, { name: i, newValue: e(m, s, o) }))
                  : void 0 !== o && l(f, { name: i, newValue: o }));
      return f;
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(25),
      r = i(1);
    function o(e, t) {
      return (
        55296 == (64512 & e.charCodeAt(t)) &&
        (!(t < 0 || t + 1 >= e.length) &&
          56320 == (64512 & e.charCodeAt(t + 1)))
      );
    }
    function a(e) {
      return (
        ((e >>> 24) |
          ((e >>> 8) & 65280) |
          ((e << 8) & 16711680) |
          ((255 & e) << 24)) >>>
        0
      );
    }
    function s(e) {
      return 1 === e.length ? "0" + e : e;
    }
    function c(e) {
      return 7 === e.length
        ? "0" + e
        : 6 === e.length
        ? "00" + e
        : 5 === e.length
        ? "000" + e
        : 4 === e.length
        ? "0000" + e
        : 3 === e.length
        ? "00000" + e
        : 2 === e.length
        ? "000000" + e
        : 1 === e.length
        ? "0000000" + e
        : e;
    }
    (t.inherits = r),
      (t.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var i = [];
        if ("string" == typeof e)
          if (t) {
            if ("hex" === t)
              for (
                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                  (e = "0" + e),
                  r = 0;
                r < e.length;
                r += 2
              )
                i.push(parseInt(e[r] + e[r + 1], 16));
          } else
            for (var n = 0, r = 0; r < e.length; r++) {
              var a = e.charCodeAt(r);
              a < 128
                ? (i[n++] = a)
                : a < 2048
                ? ((i[n++] = (a >> 6) | 192), (i[n++] = (63 & a) | 128))
                : o(e, r)
                ? ((a =
                    65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++r))),
                  (i[n++] = (a >> 18) | 240),
                  (i[n++] = ((a >> 12) & 63) | 128),
                  (i[n++] = ((a >> 6) & 63) | 128),
                  (i[n++] = (63 & a) | 128))
                : ((i[n++] = (a >> 12) | 224),
                  (i[n++] = ((a >> 6) & 63) | 128),
                  (i[n++] = (63 & a) | 128));
            }
        else for (r = 0; r < e.length; r++) i[r] = 0 | e[r];
        return i;
      }),
      (t.toHex = function(e) {
        for (var t = "", i = 0; i < e.length; i++) t += s(e[i].toString(16));
        return t;
      }),
      (t.htonl = a),
      (t.toHex32 = function(e, t) {
        for (var i = "", n = 0; n < e.length; n++) {
          var r = e[n];
          "little" === t && (r = a(r)), (i += c(r.toString(16)));
        }
        return i;
      }),
      (t.zero2 = s),
      (t.zero8 = c),
      (t.join32 = function(e, t, i, r) {
        var o = i - t;
        n(o % 4 == 0);
        for (
          var a = new Array(o / 4), s = 0, c = t;
          s < a.length;
          s++, c += 4
        ) {
          var u;
          (u =
            "big" === r
              ? (e[c] << 24) | (e[c + 1] << 16) | (e[c + 2] << 8) | e[c + 3]
              : (e[c + 3] << 24) | (e[c + 2] << 16) | (e[c + 1] << 8) | e[c]),
            (a[s] = u >>> 0);
        }
        return a;
      }),
      (t.split32 = function(e, t) {
        for (
          var i = new Array(4 * e.length), n = 0, r = 0;
          n < e.length;
          n++, r += 4
        ) {
          var o = e[n];
          "big" === t
            ? ((i[r] = o >>> 24),
              (i[r + 1] = (o >>> 16) & 255),
              (i[r + 2] = (o >>> 8) & 255),
              (i[r + 3] = 255 & o))
            : ((i[r + 3] = o >>> 24),
              (i[r + 2] = (o >>> 16) & 255),
              (i[r + 1] = (o >>> 8) & 255),
              (i[r] = 255 & o));
        }
        return i;
      }),
      (t.rotr32 = function(e, t) {
        return (e >>> t) | (e << (32 - t));
      }),
      (t.rotl32 = function(e, t) {
        return (e << t) | (e >>> (32 - t));
      }),
      (t.sum32 = function(e, t) {
        return (e + t) >>> 0;
      }),
      (t.sum32_3 = function(e, t, i) {
        return (e + t + i) >>> 0;
      }),
      (t.sum32_4 = function(e, t, i, n) {
        return (e + t + i + n) >>> 0;
      }),
      (t.sum32_5 = function(e, t, i, n, r) {
        return (e + t + i + n + r) >>> 0;
      }),
      (t.sum64 = function(e, t, i, n) {
        var r = e[t],
          o = (n + e[t + 1]) >>> 0,
          a = (o < n ? 1 : 0) + i + r;
        (e[t] = a >>> 0), (e[t + 1] = o);
      }),
      (t.sum64_hi = function(e, t, i, n) {
        return (((t + n) >>> 0 < t ? 1 : 0) + e + i) >>> 0;
      }),
      (t.sum64_lo = function(e, t, i, n) {
        return (t + n) >>> 0;
      }),
      (t.sum64_4_hi = function(e, t, i, n, r, o, a, s) {
        var c = 0,
          u = t;
        return (
          (c += (u = (u + n) >>> 0) < t ? 1 : 0),
          (c += (u = (u + o) >>> 0) < o ? 1 : 0),
          (e + i + r + a + (c += (u = (u + s) >>> 0) < s ? 1 : 0)) >>> 0
        );
      }),
      (t.sum64_4_lo = function(e, t, i, n, r, o, a, s) {
        return (t + n + o + s) >>> 0;
      }),
      (t.sum64_5_hi = function(e, t, i, n, r, o, a, s, c, u) {
        var l = 0,
          h = t;
        return (
          (l += (h = (h + n) >>> 0) < t ? 1 : 0),
          (l += (h = (h + o) >>> 0) < o ? 1 : 0),
          (l += (h = (h + s) >>> 0) < s ? 1 : 0),
          (e + i + r + a + c + (l += (h = (h + u) >>> 0) < u ? 1 : 0)) >>> 0
        );
      }),
      (t.sum64_5_lo = function(e, t, i, n, r, o, a, s, c, u) {
        return (t + n + o + s + u) >>> 0;
      }),
      (t.rotr64_hi = function(e, t, i) {
        return ((t << (32 - i)) | (e >>> i)) >>> 0;
      }),
      (t.rotr64_lo = function(e, t, i) {
        return ((e << (32 - i)) | (t >>> i)) >>> 0;
      }),
      (t.shr64_hi = function(e, t, i) {
        return e >>> i;
      }),
      (t.shr64_lo = function(e, t, i) {
        return ((e << (32 - i)) | (t >>> i)) >>> 0;
      });
  },
  function(e, t, i) {
    var n = i(35);
    e.exports = function(e, t, i) {
      if ((n(e), void 0 === t)) return e;
      switch (i) {
        case 1:
          return function(i) {
            return e.call(t, i);
          };
        case 2:
          return function(i, n) {
            return e.call(t, i, n);
          };
        case 3:
          return function(i, n, r) {
            return e.call(t, i, n, r);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function(e, t) {
    var i = {}.toString;
    e.exports = function(e) {
      return i.call(e).slice(8, -1);
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function(e, t, i) {
    "use strict";
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    if (i(13)) {
      var r = i(47),
        o = i(5),
        a = i(3),
        s = i(0),
        c = i(84),
        u = i(121),
        l = i(34),
        h = i(60),
        f = i(45),
        d = i(23),
        p = i(61),
        m = i(28),
        g = i(10),
        _ = i(164),
        v = i(49),
        y = i(39),
        b = i(22),
        E = i(66),
        T = i(6),
        A = i(20),
        x = i(113),
        S = i(50),
        C = i(52),
        P = i(51).f,
        R = i(115),
        M = i(46),
        O = i(8),
        w = i(31),
        I = i(74),
        D = i(67),
        L = i(117),
        F = i(57),
        B = i(77),
        N = i(59),
        k = i(116),
        U = i(155),
        V = i(12),
        G = i(29),
        z = V.f,
        j = G.f,
        H = o.RangeError,
        W = o.TypeError,
        X = o.Uint8Array,
        Y = Array.prototype,
        K = u.ArrayBuffer,
        Q = u.DataView,
        q = w(0),
        Z = w(2),
        J = w(3),
        $ = w(4),
        ee = w(5),
        te = w(6),
        ie = I(!0),
        ne = I(!1),
        re = L.values,
        oe = L.keys,
        ae = L.entries,
        se = Y.lastIndexOf,
        ce = Y.reduce,
        ue = Y.reduceRight,
        le = Y.join,
        he = Y.sort,
        fe = Y.slice,
        de = Y.toString,
        pe = Y.toLocaleString,
        me = O("iterator"),
        ge = O("toStringTag"),
        _e = M("typed_constructor"),
        ve = M("def_constructor"),
        ye = c.CONSTR,
        be = c.TYPED,
        Ee = c.VIEW,
        Te = w(1, function(e, t) {
          return Pe(D(e, e[ve]), t);
        }),
        Ae = a(function() {
          return 1 === new X(new Uint16Array([1]).buffer)[0];
        }),
        xe =
          !!X &&
          !!X.prototype.set &&
          a(function() {
            new X(1).set({});
          }),
        Se = function(e, t) {
          var i = m(e);
          if (i < 0 || i % t) throw H("Wrong offset!");
          return i;
        },
        Ce = function(e) {
          if (T(e) && be in e) return e;
          throw W(e + " is not a typed array!");
        },
        Pe = function(e, t) {
          if (!(T(e) && _e in e))
            throw W("It is not a typed array constructor!");
          return new e(t);
        },
        Re = function(e, t) {
          return Me(D(e, e[ve]), t);
        },
        Me = function(e, t) {
          for (var i = 0, n = t.length, r = Pe(e, n); n > i; ) r[i] = t[i++];
          return r;
        },
        Oe = function(e, t, i) {
          z(e, t, {
            get: function() {
              return this._d[i];
            }
          });
        },
        we = function(e) {
          var t,
            i,
            n,
            r,
            o,
            a,
            s = A(e),
            c = arguments.length,
            u = c > 1 ? arguments[1] : void 0,
            h = void 0 !== u,
            f = R(s);
          if (null != f && !x(f)) {
            for (a = f.call(s), n = [], t = 0; !(o = a.next()).done; t++)
              n.push(o.value);
            s = n;
          }
          for (
            h && c > 2 && (u = l(u, arguments[2], 2)),
              t = 0,
              i = g(s.length),
              r = Pe(this, i);
            i > t;
            t++
          )
            r[t] = h ? u(s[t], t) : s[t];
          return r;
        },
        Ie = function() {
          for (var e = 0, t = arguments.length, i = Pe(this, t); t > e; )
            i[e] = arguments[e++];
          return i;
        },
        De =
          !!X &&
          a(function() {
            pe.call(new X(1));
          }),
        Le = function() {
          return pe.apply(De ? fe.call(Ce(this)) : Ce(this), arguments);
        },
        Fe = {
          copyWithin: function(e, t) {
            return U.call(
              Ce(this),
              e,
              t,
              arguments.length > 2 ? arguments[2] : void 0
            );
          },
          every: function(e) {
            return $(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function(e) {
            return k.apply(Ce(this), arguments);
          },
          filter: function(e) {
            return Re(
              this,
              Z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          find: function(e) {
            return ee(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          findIndex: function(e) {
            return te(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          forEach: function(e) {
            q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function(e) {
            return ne(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          includes: function(e) {
            return ie(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          join: function(e) {
            return le.apply(Ce(this), arguments);
          },
          lastIndexOf: function(e) {
            return se.apply(Ce(this), arguments);
          },
          map: function(e) {
            return Te(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          reduce: function(e) {
            return ce.apply(Ce(this), arguments);
          },
          reduceRight: function(e) {
            return ue.apply(Ce(this), arguments);
          },
          reverse: function() {
            for (
              var e, t = Ce(this).length, i = Math.floor(t / 2), n = 0;
              n < i;

            )
              (e = this[n]), (this[n++] = this[--t]), (this[t] = e);
            return this;
          },
          some: function(e) {
            return J(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function(e) {
            return he.call(Ce(this), e);
          },
          subarray: function(e, t) {
            var i = Ce(this),
              n = i.length,
              r = v(e, n);
            return new (D(i, i[ve]))(
              i.buffer,
              i.byteOffset + r * i.BYTES_PER_ELEMENT,
              g((void 0 === t ? n : v(t, n)) - r)
            );
          }
        },
        Be = function(e, t) {
          return Re(this, fe.call(Ce(this), e, t));
        },
        Ne = function(e) {
          Ce(this);
          var t = Se(arguments[1], 1),
            i = this.length,
            n = A(e),
            r = g(n.length),
            o = 0;
          if (r + t > i) throw H("Wrong length!");
          for (; o < r; ) this[t + o] = n[o++];
        },
        ke = {
          entries: function() {
            return ae.call(Ce(this));
          },
          keys: function() {
            return oe.call(Ce(this));
          },
          values: function() {
            return re.call(Ce(this));
          }
        },
        Ue = function(e, t) {
          return (
            T(e) &&
            e[be] &&
            "symbol" != n(t) &&
            t in e &&
            String(+t) == String(t)
          );
        },
        Ve = function(e, t) {
          return Ue(e, (t = y(t, !0))) ? f(2, e[t]) : j(e, t);
        },
        Ge = function(e, t, i) {
          return !(Ue(e, (t = y(t, !0))) && T(i) && b(i, "value")) ||
            b(i, "get") ||
            b(i, "set") ||
            i.configurable ||
            (b(i, "writable") && !i.writable) ||
            (b(i, "enumerable") && !i.enumerable)
            ? z(e, t, i)
            : ((e[t] = i.value), e);
        };
      ye || ((G.f = Ve), (V.f = Ge)),
        s(s.S + s.F * !ye, "Object", {
          getOwnPropertyDescriptor: Ve,
          defineProperty: Ge
        }),
        a(function() {
          de.call({});
        }) &&
          (de = pe = function() {
            return le.call(this);
          });
      var ze = p({}, Fe);
      p(ze, ke),
        d(ze, me, ke.values),
        p(ze, {
          slice: Be,
          set: Ne,
          constructor: function() {},
          toString: de,
          toLocaleString: Le
        }),
        Oe(ze, "buffer", "b"),
        Oe(ze, "byteOffset", "o"),
        Oe(ze, "byteLength", "l"),
        Oe(ze, "length", "e"),
        z(ze, ge, {
          get: function() {
            return this[be];
          }
        }),
        (e.exports = function(e, t, i, n) {
          var u = e + ((n = !!n) ? "Clamped" : "") + "Array",
            l = "get" + e,
            f = "set" + e,
            p = o[u],
            m = p || {},
            v = p && C(p),
            y = !p || !c.ABV,
            b = {},
            A = p && p.prototype,
            x = function(e, i) {
              z(e, i, {
                get: function() {
                  return (function(e, i) {
                    var n = e._d;
                    return n.v[l](i * t + n.o, Ae);
                  })(this, i);
                },
                set: function(e) {
                  return (function(e, i, r) {
                    var o = e._d;
                    n &&
                      (r =
                        (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                      o.v[f](i * t + o.o, r, Ae);
                  })(this, i, e);
                },
                enumerable: !0
              });
            };
          y
            ? ((p = i(function(e, i, n, r) {
                h(e, p, u, "_d");
                var o,
                  a,
                  s,
                  c,
                  l = 0,
                  f = 0;
                if (T(i)) {
                  if (
                    !(
                      i instanceof K ||
                      "ArrayBuffer" == (c = E(i)) ||
                      "SharedArrayBuffer" == c
                    )
                  )
                    return be in i ? Me(p, i) : we.call(p, i);
                  (o = i), (f = Se(n, t));
                  var m = i.byteLength;
                  if (void 0 === r) {
                    if (m % t) throw H("Wrong length!");
                    if ((a = m - f) < 0) throw H("Wrong length!");
                  } else if ((a = g(r) * t) + f > m) throw H("Wrong length!");
                  s = a / t;
                } else (s = _(i)), (o = new K((a = s * t)));
                for (
                  d(e, "_d", { b: o, o: f, l: a, e: s, v: new Q(o) });
                  l < s;

                )
                  x(e, l++);
              })),
              (A = p.prototype = S(ze)),
              d(A, "constructor", p))
            : (a(function() {
                p(1);
              }) &&
                a(function() {
                  new p(-1);
                }) &&
                B(function(e) {
                  new p(), new p(null), new p(1.5), new p(e);
                }, !0)) ||
              ((p = i(function(e, i, n, r) {
                var o;
                return (
                  h(e, p, u),
                  T(i)
                    ? i instanceof K ||
                      "ArrayBuffer" == (o = E(i)) ||
                      "SharedArrayBuffer" == o
                      ? void 0 !== r
                        ? new m(i, Se(n, t), r)
                        : void 0 !== n
                        ? new m(i, Se(n, t))
                        : new m(i)
                      : be in i
                      ? Me(p, i)
                      : we.call(p, i)
                    : new m(_(i))
                );
              })),
              q(v !== Function.prototype ? P(m).concat(P(v)) : P(m), function(
                e
              ) {
                e in p || d(p, e, m[e]);
              }),
              (p.prototype = A),
              r || (A.constructor = p));
          var R = A[me],
            M = !!R && ("values" == R.name || null == R.name),
            O = ke.values;
          d(p, _e, !0),
            d(A, be, u),
            d(A, Ee, !0),
            d(A, ve, p),
            (n ? new p(1)[ge] == u : ge in A) ||
              z(A, ge, {
                get: function() {
                  return u;
                }
              }),
            (b[u] = p),
            s(s.G + s.W + s.F * (p != m), b),
            s(s.S, u, { BYTES_PER_ELEMENT: t }),
            s(
              s.S +
                s.F *
                  a(function() {
                    m.of.call(p, 1);
                  }),
              u,
              { from: we, of: Ie }
            ),
            "BYTES_PER_ELEMENT" in A || d(A, "BYTES_PER_ELEMENT", t),
            s(s.P, u, Fe),
            N(u),
            s(s.P + s.F * xe, u, { set: Ne }),
            s(s.P + s.F * !M, u, ke),
            r || A.toString == de || (A.toString = de),
            s(
              s.P +
                s.F *
                  a(function() {
                    new p(1).slice();
                  }),
              u,
              { slice: Be }
            ),
            s(
              s.P +
                s.F *
                  (a(function() {
                    return (
                      [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                    );
                  }) ||
                    !a(function() {
                      A.toLocaleString.call([1, 2]);
                    })),
              u,
              { toLocaleString: Le }
            ),
            (F[u] = M ? R : O),
            r || M || d(A, me, O);
        });
    } else e.exports = function() {};
  },
  function(e, t, i) {
    var n = i(6);
    e.exports = function(e, t) {
      if (!n(e)) return e;
      var i, r;
      if (t && "function" == typeof (i = e.toString) && !n((r = i.call(e))))
        return r;
      if ("function" == typeof (i = e.valueOf) && !n((r = i.call(e)))) return r;
      if (!t && "function" == typeof (i = e.toString) && !n((r = i.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t, i) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = i(46)("meta"),
      o = i(6),
      a = i(22),
      s = i(12).f,
      c = 0,
      u =
        Object.isExtensible ||
        function() {
          return !0;
        },
      l = !i(3)(function() {
        return u(Object.preventExtensions({}));
      }),
      h = function(e) {
        s(e, r, { value: { i: "O" + ++c, w: {} } });
      },
      f = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
          if (!o(e))
            return "symbol" == n(e)
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!a(e, r)) {
            if (!u(e)) return "F";
            if (!t) return "E";
            h(e);
          }
          return e[r].i;
        },
        getWeak: function(e, t) {
          if (!a(e, r)) {
            if (!u(e)) return !0;
            if (!t) return !1;
            h(e);
          }
          return e[r].w;
        },
        onFreeze: function(e) {
          return l && f.NEED && u(e) && !a(e, r) && h(e), e;
        }
      });
  },
  function(e, t, i) {
    e.exports = i(394).Promise;
  },
  function(e, t) {
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function n() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function r(e) {
      return "function" == typeof e;
    }
    function o(e) {
      return "object" === i(e) && null !== e;
    }
    function a(e) {
      return void 0 === e;
    }
    (e.exports = n),
      (n.EventEmitter = n),
      (n.prototype._events = void 0),
      (n.prototype._maxListeners = void 0),
      (n.defaultMaxListeners = 10),
      (n.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || isNaN(e))
          throw TypeError("n must be a positive number");
        return (this._maxListeners = e), this;
      }),
      (n.prototype.emit = function(e) {
        var t, i, n, s, c, u;
        if (
          (this._events || (this._events = {}),
          "error" === e &&
            (!this._events.error ||
              (o(this._events.error) && !this._events.error.length)))
        ) {
          if ((t = arguments[1]) instanceof Error) throw t;
          var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((l.context = t), l);
        }
        if (a((i = this._events[e]))) return !1;
        if (r(i))
          switch (arguments.length) {
            case 1:
              i.call(this);
              break;
            case 2:
              i.call(this, arguments[1]);
              break;
            case 3:
              i.call(this, arguments[1], arguments[2]);
              break;
            default:
              (s = Array.prototype.slice.call(arguments, 1)), i.apply(this, s);
          }
        else if (o(i))
          for (
            s = Array.prototype.slice.call(arguments, 1),
              n = (u = i.slice()).length,
              c = 0;
            c < n;
            c++
          )
            u[c].apply(this, s);
        return !0;
      }),
      (n.prototype.addListener = function(e, t) {
        var i;
        if (!r(t)) throw TypeError("listener must be a function");
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit("newListener", e, r(t.listener) ? t.listener : t),
          this._events[e]
            ? o(this._events[e])
              ? this._events[e].push(t)
              : (this._events[e] = [this._events[e], t])
            : (this._events[e] = t),
          o(this._events[e]) &&
            !this._events[e].warned &&
            (i = a(this._maxListeners)
              ? n.defaultMaxListeners
              : this._maxListeners) &&
            i > 0 &&
            this._events[e].length > i &&
            ((this._events[e].warned = !0),
            console.error(
              "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
              this._events[e].length
            ),
            "function" == typeof console.trace && console.trace()),
          this
        );
      }),
      (n.prototype.on = n.prototype.addListener),
      (n.prototype.once = function(e, t) {
        if (!r(t)) throw TypeError("listener must be a function");
        var i = !1;
        function n() {
          this.removeListener(e, n), i || ((i = !0), t.apply(this, arguments));
        }
        return (n.listener = t), this.on(e, n), this;
      }),
      (n.prototype.removeListener = function(e, t) {
        var i, n, a, s;
        if (!r(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (
          ((a = (i = this._events[e]).length),
          (n = -1),
          i === t || (r(i.listener) && i.listener === t))
        )
          delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(i)) {
          for (s = a; s-- > 0; )
            if (i[s] === t || (i[s].listener && i[s].listener === t)) {
              n = s;
              break;
            }
          if (n < 0) return this;
          1 === i.length
            ? ((i.length = 0), delete this._events[e])
            : i.splice(n, 1),
            this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }),
      (n.prototype.removeAllListeners = function(e) {
        var t, i;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[e] && delete this._events[e],
            this
          );
        if (0 === arguments.length) {
          for (t in this._events)
            "removeListener" !== t && this.removeAllListeners(t);
          return (
            this.removeAllListeners("removeListener"), (this._events = {}), this
          );
        }
        if (r((i = this._events[e]))) this.removeListener(e, i);
        else if (i) for (; i.length; ) this.removeListener(e, i[i.length - 1]);
        return delete this._events[e], this;
      }),
      (n.prototype.listeners = function(e) {
        return this._events && this._events[e]
          ? r(this._events[e])
            ? [this._events[e]]
            : this._events[e].slice()
          : [];
      }),
      (n.prototype.listenerCount = function(e) {
        if (this._events) {
          var t = this._events[e];
          if (r(t)) return 1;
          if (t) return t.length;
        }
        return 0;
      }),
      (n.listenerCount = function(e, t) {
        return e.listenerCount(t);
      });
  },
  function(e, t, i) {
    "use strict";
    e.exports = {
      Timer: function(e, t) {
        var i = t || "",
          n = e || 1,
          r = [],
          o = [],
          a = 0,
          s = 0,
          c = 0,
          u = 0,
          l = !0;
        (this.start = function() {
          l && ((r.length = o.length = 0), (l = !1)),
            (a = s = performance.now()),
            c++;
        }),
          (this.add = function(e) {
            var t = performance.now();
            o.indexOf(e) < 0 && o.push(e);
            var i = o.indexOf(e);
            r[i] || (r[i] = 0), (r[i] += t - s), (s = t);
          }),
          (this.report = function() {
            if (((u += performance.now() - a), c === n)) {
              var e =
                "  total: " + (u / n).toFixed(2) + "ms (avg, " + n + " runs)";
              console.log(
                i + ":",
                o
                  .map(function(e, t) {
                    return e + ": " + (r[t] / n).toFixed(2) + "ms    ";
                  })
                  .join(""),
                n > 1 ? e : ""
              ),
                (l = !0),
                (c = 0),
                (u = 0);
            }
          });
      },
      removeUnorderedListItem: function(e, t) {
        var i = e.indexOf(t);
        if (i < 0) return;
        i === e.length - 1 ? e.pop() : (e[i] = e.pop());
      }
    };
  },
  function(e, t, i) {
    var n = i(2).Buffer,
      r = i(128).Transform,
      o = i(124).StringDecoder;
    function a(e) {
      r.call(this),
        (this.hashMode = "string" == typeof e),
        this.hashMode
          ? (this[e] = this._finalOrDigest)
          : (this.final = this._finalOrDigest),
        this._final && ((this.__final = this._final), (this._final = null)),
        (this._decoder = null),
        (this._encoding = null);
    }
    i(1)(a, r),
      (a.prototype.update = function(e, t, i) {
        "string" == typeof e && (e = n.from(e, t));
        var r = this._update(e);
        return this.hashMode ? this : (i && (r = this._toString(r, i)), r);
      }),
      (a.prototype.setAutoPadding = function() {}),
      (a.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state");
      }),
      (a.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state");
      }),
      (a.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state");
      }),
      (a.prototype._transform = function(e, t, i) {
        var n;
        try {
          this.hashMode ? this._update(e) : this.push(this._update(e));
        } catch (e) {
          n = e;
        } finally {
          i(n);
        }
      }),
      (a.prototype._flush = function(e) {
        var t;
        try {
          this.push(this.__final());
        } catch (e) {
          t = e;
        }
        e(t);
      }),
      (a.prototype._finalOrDigest = function(e) {
        var t = this.__final() || n.alloc(0);
        return e && (t = this._toString(t, e, !0)), t;
      }),
      (a.prototype._toString = function(e, t, i) {
        if (
          (this._decoder || ((this._decoder = new o(t)), (this._encoding = t)),
          this._encoding !== t)
        )
          throw new Error("can't switch encodings");
        var n = this._decoder.write(e);
        return i && (n += this._decoder.end()), n;
      }),
      (e.exports = a);
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  function(e, t) {
    var i = 0,
      n = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++i + n).toString(36)
      );
    };
  },
  function(e, t) {
    e.exports = !1;
  },
  function(e, t, i) {
    var n = i(140),
      r = i(99);
    e.exports =
      Object.keys ||
      function(e) {
        return n(e, r);
      };
  },
  function(e, t, i) {
    var n = i(28),
      r = Math.max,
      o = Math.min;
    e.exports = function(e, t) {
      return (e = n(e)) < 0 ? r(e + t, 0) : o(e, t);
    };
  },
  function(e, t, i) {
    var n = i(4),
      r = i(141),
      o = i(99),
      a = i(98)("IE_PROTO"),
      s = function() {},
      c = function() {
        var e,
          t = i(95)("iframe"),
          n = o.length;
        for (
          t.style.display = "none",
            i(101).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            c = e.F;
          n--;

        )
          delete c.prototype[o[n]];
        return c();
      };
    e.exports =
      Object.create ||
      function(e, t) {
        var i;
        return (
          null !== e
            ? ((s.prototype = n(e)),
              (i = new s()),
              (s.prototype = null),
              (i[a] = e))
            : (i = c()),
          void 0 === t ? i : r(i, t)
        );
      };
  },
  function(e, t, i) {
    var n = i(140),
      r = i(99).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function(e) {
        return n(e, r);
      };
  },
  function(e, t, i) {
    var n = i(22),
      r = i(20),
      o = i(98)("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function(e) {
        return (
          (e = r(e)),
          n(e, o)
            ? e[o]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  function(e, t, i) {
    "use strict";
    (function(t, n) {
      var r = i(2).Buffer,
        o = t.crypto || t.msCrypto;
      o && o.getRandomValues
        ? (e.exports = function(e, i) {
            if (e > 65536) throw new Error("requested too many random bytes");
            var a = new t.Uint8Array(e);
            e > 0 && o.getRandomValues(a);
            var s = r.from(a.buffer);
            if ("function" == typeof i)
              return n.nextTick(function() {
                i(null, s);
              });
            return s;
          })
        : (e.exports = function() {
            throw new Error(
              "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
            );
          });
    }.call(this, i(15), i(27)));
  },
  function(e, t, i) {
    "use strict";
    var n = i(86),
      r =
        Object.keys ||
        function(e) {
          var t = [];
          for (var i in e) t.push(i);
          return t;
        };
    e.exports = h;
    var o = i(68);
    o.inherits = i(1);
    var a = i(169),
      s = i(123);
    o.inherits(h, a);
    for (var c = r(s.prototype), u = 0; u < c.length; u++) {
      var l = c[u];
      h.prototype[l] || (h.prototype[l] = s.prototype[l]);
    }
    function h(e) {
      if (!(this instanceof h)) return new h(e);
      a.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", f);
    }
    function f() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this);
    }
    function d(e) {
      e.end();
    }
    Object.defineProperty(h.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }),
      Object.defineProperty(h.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            (this._readableState.destroyed && this._writableState.destroyed)
          );
        },
        set: function(e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        }
      }),
      (h.prototype._destroy = function(e, t) {
        this.push(null), this.end(), n.nextTick(t, e);
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(94);
    function r(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var o = (function() {
      function e(t, i) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          void 0 === e.id && (e.id = 1e4),
          (this.isClient = t.isClient),
          (this.isSelf = void 0 !== t.isSelf && t.isSelf),
          (this.network = void 0 !== t.network ? t.network : null),
          this.initializeState(t),
          (this.positionCallback = "function" == typeof i ? i : null),
          (this.id = e.id += 1),
          !0 === this.isClient && this.sendJoined();
      }
      var t, i, o;
      return (
        (t = e),
        (i = [
          {
            key: "initializeState",
            value: function(e) {
              (this.state = {
                name: e.name,
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                walking: !1,
                spawned: !1
              }),
                (this.peer = e.peer);
            }
          },
          {
            key: "setPosition",
            value: function(e, t, i) {
              (this.state.walking =
                e.x !== this.state.position.x || e.z !== this.state.position.z),
                (this.state.position = e),
                (this.state.rotation = t),
                (this.state.spawned = i),
                this.positionCallback && this.positionCallback(this.state);
            }
          },
          {
            key: "setState",
            value: function(e) {
              var t = this.state.name !== e.name;
              (this.state.position = e.position),
                (this.state.rotation = e.rotation),
                (this.state.walking = e.walking),
                (this.state.spawned = e.spawned),
                (this.state.name = e.name),
                (void 0 === this.noaPlayer || t) &&
                  this.state.spawned &&
                  (void 0 !== this.noaPlayer && this.noaPlayer.remove(),
                  (this.noaPlayer = n.a
                    .getInstance()
                    .addPlayer(0, 0, 0, this.state.name, this.id))),
                void 0 !== this.noaPlayer &&
                  (this.noaPlayer.setPosition(
                    e.position.x,
                    e.position.y,
                    e.position.z
                  ),
                  this.noaPlayer.setRotation(0, e.rotation.y, 0),
                  (this.noaPlayer.walking = e.walking));
            }
          },
          {
            key: "sendJoined",
            value: function() {
              null != this.network && this.network.sendJoined(this.state.name);
            }
          },
          {
            key: "sendMessage",
            value: function(e) {
              null != this.network && this.network.sendMessage(e);
            }
          },
          {
            key: "emitFireEvent",
            value: function(e) {
              null != this.network && this.network.emitFireEvent(e);
            }
          }
        ]) && r(t.prototype, i),
        o && r(t, o),
        e
      );
    })();
    t.a = o;
  },
  function(e, t, i) {
    var n = i(12).f,
      r = i(22),
      o = i(8)("toStringTag");
    e.exports = function(e, t, i) {
      e &&
        !r((e = i ? e : e.prototype), o) &&
        n(e, o, { configurable: !0, value: t });
    };
  },
  function(e, t) {
    e.exports = {};
  },
  function(e, t, i) {
    var n = i(8)("unscopables"),
      r = Array.prototype;
    null == r[n] && i(23)(r, n, {}),
      (e.exports = function(e) {
        r[n][e] = !0;
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(5),
      r = i(12),
      o = i(13),
      a = i(8)("species");
    e.exports = function(e) {
      var t = n[e];
      o &&
        t &&
        !t[a] &&
        r.f(t, a, {
          configurable: !0,
          get: function() {
            return this;
          }
        });
    };
  },
  function(e, t) {
    e.exports = function(e, t, i, n) {
      if (!(e instanceof t) || (void 0 !== n && n in e))
        throw TypeError(i + ": incorrect invocation!");
      return e;
    };
  },
  function(e, t, i) {
    var n = i(19);
    e.exports = function(e, t, i) {
      for (var r in t) n(e, r, t[r], i);
      return e;
    };
  },
  function(e, t, i) {
    var n = i(6);
    e.exports = function(e, t) {
      if (!n(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };
  },
  function(e, t, i) {
    var n = i(2).Buffer;
    function r(e, t) {
      (this._block = n.alloc(e)),
        (this._finalSize = t),
        (this._blockSize = e),
        (this._len = 0);
    }
    (r.prototype.update = function(e, t) {
      "string" == typeof e && ((t = t || "utf8"), (e = n.from(e, t)));
      for (
        var i = this._block,
          r = this._blockSize,
          o = e.length,
          a = this._len,
          s = 0;
        s < o;

      ) {
        for (var c = a % r, u = Math.min(o - s, r - c), l = 0; l < u; l++)
          i[c + l] = e[s + l];
        (s += u), (a += u) % r == 0 && this._update(i);
      }
      return (this._len += o), this;
    }),
      (r.prototype.digest = function(e) {
        var t = this._len % this._blockSize;
        (this._block[t] = 128),
          this._block.fill(0, t + 1),
          t >= this._finalSize &&
            (this._update(this._block), this._block.fill(0));
        var i = 8 * this._len;
        if (i <= 4294967295) this._block.writeUInt32BE(i, this._blockSize - 4);
        else {
          var n = (4294967295 & i) >>> 0,
            r = (i - n) / 4294967296;
          this._block.writeUInt32BE(r, this._blockSize - 8),
            this._block.writeUInt32BE(n, this._blockSize - 4);
        }
        this._update(this._block);
        var o = this._hash();
        return e ? o.toString(e) : o;
      }),
      (r.prototype._update = function() {
        throw new Error("_update must be implemented by subclass");
      }),
      (e.exports = r);
  },
  function(e, t, i) {
    var n = i(36);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return "String" == n(e) ? e.split("") : Object(e);
        };
  },
  function(e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function(e, t, i) {
    var n = i(36),
      r = i(8)("toStringTag"),
      o =
        "Arguments" ==
        n(
          (function() {
            return arguments;
          })()
        );
    e.exports = function(e) {
      var t, i, a;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (i = (function(e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), r))
        ? i
        : o
        ? n(t)
        : "Object" == (a = n(t)) && "function" == typeof t.callee
        ? "Arguments"
        : a;
    };
  },
  function(e, t, i) {
    var n = i(4),
      r = i(35),
      o = i(8)("species");
    e.exports = function(e, t) {
      var i,
        a = n(e).constructor;
      return void 0 === a || null == (i = n(a)[o]) ? t : r(i);
    };
  },
  function(e, t, i) {
    (function(e) {
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function n(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = function(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
      }),
        (t.isBoolean = function(e) {
          return "boolean" == typeof e;
        }),
        (t.isNull = function(e) {
          return null === e;
        }),
        (t.isNullOrUndefined = function(e) {
          return null == e;
        }),
        (t.isNumber = function(e) {
          return "number" == typeof e;
        }),
        (t.isString = function(e) {
          return "string" == typeof e;
        }),
        (t.isSymbol = function(e) {
          return "symbol" === i(e);
        }),
        (t.isUndefined = function(e) {
          return void 0 === e;
        }),
        (t.isRegExp = function(e) {
          return "[object RegExp]" === n(e);
        }),
        (t.isObject = function(e) {
          return "object" === i(e) && null !== e;
        }),
        (t.isDate = function(e) {
          return "[object Date]" === n(e);
        }),
        (t.isError = function(e) {
          return "[object Error]" === n(e) || e instanceof Error;
        }),
        (t.isFunction = function(e) {
          return "function" == typeof e;
        }),
        (t.isPrimitive = function(e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" === i(e) ||
            void 0 === e
          );
        }),
        (t.isBuffer = e.isBuffer);
    }.call(this, i(9).Buffer));
  },
  function(e, t, i) {
    "use strict";
    var n = i(1),
      r = i(127),
      o = i(129),
      a = i(130),
      s = i(44);
    function c(e) {
      s.call(this, "digest"), (this._hash = e);
    }
    n(c, s),
      (c.prototype._update = function(e) {
        this._hash.update(e);
      }),
      (c.prototype._final = function() {
        return this._hash.digest();
      }),
      (e.exports = function(e) {
        return "md5" === (e = e.toLowerCase())
          ? new r()
          : "rmd160" === e || "ripemd160" === e
          ? new o()
          : new c(a(e));
      });
  },
  function(e, t, i) {
    (function(t) {
      e.exports = function(e, i) {
        for (
          var n = Math.min(e.length, i.length), r = new t(n), o = 0;
          o < n;
          ++o
        )
          r[o] = e[o] ^ i[o];
        return r;
      };
    }.call(this, i(9).Buffer));
  },
  function(e, t, i) {
    "use strict";
    var n = i(33),
      r = i(25);
    function o() {
      (this.pending = null),
        (this.pendingTotal = 0),
        (this.blockSize = this.constructor.blockSize),
        (this.outSize = this.constructor.outSize),
        (this.hmacStrength = this.constructor.hmacStrength),
        (this.padLength = this.constructor.padLength / 8),
        (this.endian = "big"),
        (this._delta8 = this.blockSize / 8),
        (this._delta32 = this.blockSize / 32);
    }
    (t.BlockHash = o),
      (o.prototype.update = function(e, t) {
        if (
          ((e = n.toArray(e, t)),
          this.pending
            ? (this.pending = this.pending.concat(e))
            : (this.pending = e),
          (this.pendingTotal += e.length),
          this.pending.length >= this._delta8)
        ) {
          var i = (e = this.pending).length % this._delta8;
          (this.pending = e.slice(e.length - i, e.length)),
            0 === this.pending.length && (this.pending = null),
            (e = n.join32(e, 0, e.length - i, this.endian));
          for (var r = 0; r < e.length; r += this._delta32)
            this._update(e, r, r + this._delta32);
        }
        return this;
      }),
      (o.prototype.digest = function(e) {
        return (
          this.update(this._pad()), r(null === this.pending), this._digest(e)
        );
      }),
      (o.prototype._pad = function() {
        var e = this.pendingTotal,
          t = this._delta8,
          i = t - ((e + this.padLength) % t),
          n = new Array(i + this.padLength);
        n[0] = 128;
        for (var r = 1; r < i; r++) n[r] = 0;
        if (((e <<= 3), "big" === this.endian)) {
          for (var o = 8; o < this.padLength; o++) n[r++] = 0;
          (n[r++] = 0),
            (n[r++] = 0),
            (n[r++] = 0),
            (n[r++] = 0),
            (n[r++] = (e >>> 24) & 255),
            (n[r++] = (e >>> 16) & 255),
            (n[r++] = (e >>> 8) & 255),
            (n[r++] = 255 & e);
        } else
          for (
            n[r++] = 255 & e,
              n[r++] = (e >>> 8) & 255,
              n[r++] = (e >>> 16) & 255,
              n[r++] = (e >>> 24) & 255,
              n[r++] = 0,
              n[r++] = 0,
              n[r++] = 0,
              n[r++] = 0,
              o = 8;
            o < this.padLength;
            o++
          )
            n[r++] = 0;
        return n;
      });
  },
  function(e, t, i) {
    var n = t;
    (n.bignum = i(11)),
      (n.define = i(571).define),
      (n.base = i(73)),
      (n.constants = i(219)),
      (n.decoders = i(577)),
      (n.encoders = i(579));
  },
  function(e, t, i) {
    var n = t;
    (n.Reporter = i(574).Reporter),
      (n.DecoderBuffer = i(218).DecoderBuffer),
      (n.EncoderBuffer = i(218).EncoderBuffer),
      (n.Node = i(575));
  },
  function(e, t, i) {
    var n = i(24),
      r = i(10),
      o = i(49);
    e.exports = function(e) {
      return function(t, i, a) {
        var s,
          c = n(t),
          u = r(c.length),
          l = o(a, u);
        if (e && i != i) {
          for (; u > l; ) if ((s = c[l++]) != s) return !0;
        } else
          for (; u > l; l++)
            if ((e || l in c) && c[l] === i) return e || l || 0;
        return !e && -1;
      };
    };
  },
  function(e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function(e, t, i) {
    var n = i(0),
      r = i(37),
      o = i(3),
      a = i(103),
      s = "[" + a + "]",
      c = RegExp("^" + s + s + "*"),
      u = RegExp(s + s + "*$"),
      l = function(e, t, i) {
        var r = {},
          s = o(function() {
            return !!a[e]() || "​" != "​"[e]();
          }),
          c = (r[e] = s ? t(h) : a[e]);
        i && (r[i] = c), n(n.P + n.F * s, "String", r);
      },
      h = (l.trim = function(e, t) {
        return (
          (e = String(r(e))),
          1 & t && (e = e.replace(c, "")),
          2 & t && (e = e.replace(u, "")),
          e
        );
      });
    e.exports = l;
  },
  function(e, t, i) {
    var n = i(8)("iterator"),
      r = !1;
    try {
      var o = [7][n]();
      (o.return = function() {
        r = !0;
      }),
        Array.from(o, function() {
          throw 2;
        });
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !r) return !1;
      var i = !1;
      try {
        var o = [7],
          a = o[n]();
        (a.next = function() {
          return { done: (i = !0) };
        }),
          (o[n] = function() {
            return a;
          }),
          e(o);
      } catch (e) {}
      return i;
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(4);
    e.exports = function() {
      var e = n(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function(e, t, i) {
    "use strict";
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = i(66),
      o = RegExp.prototype.exec;
    e.exports = function(e, t) {
      var i = e.exec;
      if ("function" == typeof i) {
        var a = i.call(e, t);
        if ("object" !== n(a))
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return a;
      }
      if ("RegExp" !== r(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return o.call(e, t);
    };
  },
  function(e, t, i) {
    "use strict";
    i(157);
    var n = i(19),
      r = i(23),
      o = i(3),
      a = i(37),
      s = i(8),
      c = i(118),
      u = s("species"),
      l = !o(function() {
        var e = /./;
        return (
          (e.exec = function() {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      h = (function() {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function() {
          return t.apply(this, arguments);
        };
        var i = "ab".split(e);
        return 2 === i.length && "a" === i[0] && "b" === i[1];
      })();
    e.exports = function(e, t, i) {
      var f = s(e),
        d = !o(function() {
          var t = {};
          return (
            (t[f] = function() {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        p = d
          ? !o(function() {
              var t = !1,
                i = /a/;
              return (
                (i.exec = function() {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((i.constructor = {}),
                  (i.constructor[u] = function() {
                    return i;
                  })),
                i[f](""),
                !t
              );
            })
          : void 0;
      if (!d || !p || ("replace" === e && !l) || ("split" === e && !h)) {
        var m = /./[f],
          g = i(a, f, ""[e], function(e, t, i, n, r) {
            return t.exec === c
              ? d && !r
                ? { done: !0, value: m.call(t, i, n) }
                : { done: !0, value: e.call(i, t, n) }
              : { done: !1 };
          }),
          _ = g[0],
          v = g[1];
        n(String.prototype, e, _),
          r(
            RegExp.prototype,
            f,
            2 == t
              ? function(e, t) {
                  return v.call(e, this, t);
                }
              : function(e) {
                  return v.call(e, this);
                }
          );
      }
    };
  },
  function(e, t, i) {
    var n = i(34),
      r = i(153),
      o = i(113),
      a = i(4),
      s = i(10),
      c = i(115),
      u = {},
      l = {};
    ((t = e.exports = function(e, t, i, h, f) {
      var d,
        p,
        m,
        g,
        _ = f
          ? function() {
              return e;
            }
          : c(e),
        v = n(i, h, t ? 2 : 1),
        y = 0;
      if ("function" != typeof _) throw TypeError(e + " is not iterable!");
      if (o(_)) {
        for (d = s(e.length); d > y; y++)
          if ((g = t ? v(a((p = e[y]))[0], p[1]) : v(e[y])) === u || g === l)
            return g;
      } else
        for (m = _.call(e); !(p = m.next()).done; )
          if ((g = r(m, v, p.value, t)) === u || g === l) return g;
    }).BREAK = u),
      (t.RETURN = l);
  },
  function(e, t, i) {
    var n = i(5).navigator;
    e.exports = (n && n.userAgent) || "";
  },
  function(e, t, i) {
    "use strict";
    var n = i(5),
      r = i(0),
      o = i(19),
      a = i(61),
      s = i(40),
      c = i(81),
      u = i(60),
      l = i(6),
      h = i(3),
      f = i(77),
      d = i(56),
      p = i(104);
    e.exports = function(e, t, i, m, g, _) {
      var v = n[e],
        y = v,
        b = g ? "set" : "add",
        E = y && y.prototype,
        T = {},
        A = function(e) {
          var t = E[e];
          o(
            E,
            e,
            "delete" == e
              ? function(e) {
                  return !(_ && !l(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "has" == e
              ? function(e) {
                  return !(_ && !l(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "get" == e
              ? function(e) {
                  return _ && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : "add" == e
              ? function(e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : function(e, i) {
                  return t.call(this, 0 === e ? 0 : e, i), this;
                }
          );
        };
      if (
        "function" == typeof y &&
        (_ ||
          (E.forEach &&
            !h(function() {
              new y().entries().next();
            })))
      ) {
        var x = new y(),
          S = x[b](_ ? {} : -0, 1) != x,
          C = h(function() {
            x.has(1);
          }),
          P = f(function(e) {
            new y(e);
          }),
          R =
            !_ &&
            h(function() {
              for (var e = new y(), t = 5; t--; ) e[b](t, t);
              return !e.has(-0);
            });
        P ||
          (((y = t(function(t, i) {
            u(t, y, e);
            var n = p(new v(), t, y);
            return null != i && c(i, g, n[b], n), n;
          })).prototype = E),
          (E.constructor = y)),
          (C || R) && (A("delete"), A("has"), g && A("get")),
          (R || S) && A(b),
          _ && E.clear && delete E.clear;
      } else
        (y = m.getConstructor(t, e, g, b)), a(y.prototype, i), (s.NEED = !0);
      return (
        d(y, e),
        (T[e] = y),
        r(r.G + r.W + r.F * (y != v), T),
        _ || m.setStrong(y, e, g),
        y
      );
    };
  },
  function(e, t, i) {
    for (
      var n,
        r = i(5),
        o = i(23),
        a = i(46),
        s = a("typed_array"),
        c = a("view"),
        u = !(!r.ArrayBuffer || !r.DataView),
        l = u,
        h = 0,
        f = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
          ","
        );
      h < 9;

    )
      (n = r[f[h++]])
        ? (o(n.prototype, s, !0), o(n.prototype, c, !0))
        : (l = !1);
    e.exports = { ABV: u, CONSTR: l, TYPED: s, VIEW: c };
  },
  function(e, t, i) {
    ((t = e.exports = i(169)).Stream = t),
      (t.Readable = t),
      (t.Writable = i(123)),
      (t.Duplex = i(54)),
      (t.Transform = i(172)),
      (t.PassThrough = i(410));
  },
  function(e, t, i) {
    "use strict";
    (function(t) {
      !t.version ||
      0 === t.version.indexOf("v0.") ||
      (0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
        ? (e.exports = {
            nextTick: function(e, i, n, r) {
              if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var o,
                a,
                s = arguments.length;
              switch (s) {
                case 0:
                case 1:
                  return t.nextTick(e);
                case 2:
                  return t.nextTick(function() {
                    e.call(null, i);
                  });
                case 3:
                  return t.nextTick(function() {
                    e.call(null, i, n);
                  });
                case 4:
                  return t.nextTick(function() {
                    e.call(null, i, n, r);
                  });
                default:
                  for (o = new Array(s - 1), a = 0; a < o.length; )
                    o[a++] = arguments[a];
                  return t.nextTick(function() {
                    e.apply(null, o);
                  });
              }
            }
          })
        : (e.exports = t);
    }.call(this, i(27)));
  },
  function(e, t, i) {
    e.exports = r;
    var n = i(16);
    function r(e, t) {
      if (!(this instanceof r)) return new r(e, t);
      var i = n.create();
      n.add(i, e, t),
        (this.base = n.min(n.create(), e, i)),
        (this.vec = n.clone(t)),
        (this.max = n.max(n.create(), e, i)),
        (this.mag = n.length(this.vec));
    }
    var o = r.prototype;
    (o.width = function() {
      return this.vec[0];
    }),
      (o.height = function() {
        return this.vec[1];
      }),
      (o.depth = function() {
        return this.vec[2];
      }),
      (o.x0 = function() {
        return this.base[0];
      }),
      (o.y0 = function() {
        return this.base[1];
      }),
      (o.z0 = function() {
        return this.base[2];
      }),
      (o.x1 = function() {
        return this.max[0];
      }),
      (o.y1 = function() {
        return this.max[1];
      }),
      (o.z1 = function() {
        return this.max[2];
      }),
      (o.translate = function(e) {
        return (
          n.add(this.max, this.max, e), n.add(this.base, this.base, e), this
        );
      }),
      (o.setPosition = function(e) {
        return n.add(this.max, e, this.vec), n.copy(this.base, e), this;
      }),
      (o.expand = function(e) {
        var t = n.create(),
          i = n.create();
        return (
          n.max(t, e.max, this.max),
          n.min(i, e.base, this.base),
          n.subtract(t, t, i),
          new r(i, t)
        );
      }),
      (o.intersects = function(e) {
        return (
          !(e.base[0] > this.max[0]) &&
          (!(e.base[1] > this.max[1]) &&
            (!(e.base[2] > this.max[2]) &&
              (!(e.max[0] < this.base[0]) &&
                (!(e.max[1] < this.base[1]) && !(e.max[2] < this.base[2])))))
        );
      }),
      (o.touches = function(e) {
        var t = this.union(e);
        return (
          null !== t && (0 == t.width() || 0 == t.height() || 0 == t.depth())
        );
      }),
      (o.union = function(e) {
        if (!this.intersects(e)) return null;
        var t = Math.max(e.base[0], this.base[0]),
          i = Math.max(e.base[1], this.base[1]),
          n = Math.max(e.base[2], this.base[2]);
        return new r(
          [t, i, n],
          [
            Math.min(e.max[0], this.max[0]) - t,
            Math.min(e.max[1], this.max[1]) - i,
            Math.min(e.max[2], this.max[2]) - n
          ]
        );
      });
  },
  function(e, t, i) {
    var n = i(185),
      r = i(446),
      o = "undefined" != typeof Float64Array;
    function a(e, t) {
      return e[0] - t[0];
    }
    function s() {
      var e,
        t = this.stride,
        i = new Array(t.length);
      for (e = 0; e < i.length; ++e) i[e] = [Math.abs(t[e]), e];
      i.sort(a);
      var n = new Array(i.length);
      for (e = 0; e < n.length; ++e) n[e] = i[e][1];
      return n;
    }
    function c(e, t) {
      var i = ["View", t, "d", e].join("");
      t < 0 && (i = "View_Nil" + e);
      var r = "generic" === e;
      if (-1 === t) {
        var o =
          "function " +
          i +
          "(a){this.data=a;};var proto=" +
          i +
          ".prototype;proto.dtype='" +
          e +
          "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " +
          i +
          "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" +
          i +
          "(a){return new " +
          i +
          "(a);}";
        return new Function(o)();
      }
      if (0 === t) {
        o =
          "function " +
          i +
          "(a,d) {this.data = a;this.offset = d};var proto=" +
          i +
          ".prototype;proto.dtype='" +
          e +
          "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " +
          i +
          "_copy() {return new " +
          i +
          "(this.data,this.offset)};proto.pick=function " +
          i +
          "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " +
          i +
          "_get(){return " +
          (r ? "this.data.get(this.offset)" : "this.data[this.offset]") +
          "};proto.set=function " +
          i +
          "_set(v){return " +
          (r ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") +
          "};return function construct_" +
          i +
          "(a,b,c,d){return new " +
          i +
          "(a,d)}";
        return new Function("TrivialArray", o)(u[e][0]);
      }
      o = ["'use strict'"];
      var a = n(t),
        c = a.map(function(e) {
          return "i" + e;
        }),
        l =
          "this.offset+" +
          a
            .map(function(e) {
              return "this.stride[" + e + "]*i" + e;
            })
            .join("+"),
        h = a
          .map(function(e) {
            return "b" + e;
          })
          .join(","),
        f = a
          .map(function(e) {
            return "c" + e;
          })
          .join(",");
      o.push(
        "function " + i + "(a," + h + "," + f + ",d){this.data=a",
        "this.shape=[" + h + "]",
        "this.stride=[" + f + "]",
        "this.offset=d|0}",
        "var proto=" + i + ".prototype",
        "proto.dtype='" + e + "'",
        "proto.dimension=" + t
      ),
        o.push(
          "Object.defineProperty(proto,'size',{get:function " +
            i +
            "_size(){return " +
            a
              .map(function(e) {
                return "this.shape[" + e + "]";
              })
              .join("*"),
          "}})"
        ),
        1 === t
          ? o.push("proto.order=[0]")
          : (o.push("Object.defineProperty(proto,'order',{get:"),
            t < 4
              ? (o.push("function " + i + "_order(){"),
                2 === t
                  ? o.push(
                      "return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"
                    )
                  : 3 === t &&
                    o.push(
                      "var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})"
                    ))
              : o.push("ORDER})")),
        o.push("proto.set=function " + i + "_set(" + c.join(",") + ",v){"),
        r
          ? o.push("return this.data.set(" + l + ",v)}")
          : o.push("return this.data[" + l + "]=v}"),
        o.push("proto.get=function " + i + "_get(" + c.join(",") + "){"),
        r
          ? o.push("return this.data.get(" + l + ")}")
          : o.push("return this.data[" + l + "]}"),
        o.push(
          "proto.index=function " + i + "_index(",
          c.join(),
          "){return " + l + "}"
        ),
        o.push(
          "proto.hi=function " +
            i +
            "_hi(" +
            c.join(",") +
            "){return new " +
            i +
            "(this.data," +
            a
              .map(function(e) {
                return [
                  "(typeof i",
                  e,
                  "!=='number'||i",
                  e,
                  "<0)?this.shape[",
                  e,
                  "]:i",
                  e,
                  "|0"
                ].join("");
              })
              .join(",") +
            "," +
            a
              .map(function(e) {
                return "this.stride[" + e + "]";
              })
              .join(",") +
            ",this.offset)}"
        );
      var d = a.map(function(e) {
          return "a" + e + "=this.shape[" + e + "]";
        }),
        p = a.map(function(e) {
          return "c" + e + "=this.stride[" + e + "]";
        });
      o.push(
        "proto.lo=function " +
          i +
          "_lo(" +
          c.join(",") +
          "){var b=this.offset,d=0," +
          d.join(",") +
          "," +
          p.join(",")
      );
      for (var m = 0; m < t; ++m)
        o.push(
          "if(typeof i" +
            m +
            "==='number'&&i" +
            m +
            ">=0){d=i" +
            m +
            "|0;b+=c" +
            m +
            "*d;a" +
            m +
            "-=d}"
        );
      o.push(
        "return new " +
          i +
          "(this.data," +
          a
            .map(function(e) {
              return "a" + e;
            })
            .join(",") +
          "," +
          a
            .map(function(e) {
              return "c" + e;
            })
            .join(",") +
          ",b)}"
      ),
        o.push(
          "proto.step=function " +
            i +
            "_step(" +
            c.join(",") +
            "){var " +
            a
              .map(function(e) {
                return "a" + e + "=this.shape[" + e + "]";
              })
              .join(",") +
            "," +
            a
              .map(function(e) {
                return "b" + e + "=this.stride[" + e + "]";
              })
              .join(",") +
            ",c=this.offset,d=0,ceil=Math.ceil"
        );
      for (m = 0; m < t; ++m)
        o.push(
          "if(typeof i" +
            m +
            "==='number'){d=i" +
            m +
            "|0;if(d<0){c+=b" +
            m +
            "*(a" +
            m +
            "-1);a" +
            m +
            "=ceil(-a" +
            m +
            "/d)}else{a" +
            m +
            "=ceil(a" +
            m +
            "/d)}b" +
            m +
            "*=d}"
        );
      o.push(
        "return new " +
          i +
          "(this.data," +
          a
            .map(function(e) {
              return "a" + e;
            })
            .join(",") +
          "," +
          a
            .map(function(e) {
              return "b" + e;
            })
            .join(",") +
          ",c)}"
      );
      var g = new Array(t),
        _ = new Array(t);
      for (m = 0; m < t; ++m)
        (g[m] = "a[i" + m + "]"), (_[m] = "b[i" + m + "]");
      o.push(
        "proto.transpose=function " +
          i +
          "_transpose(" +
          c +
          "){" +
          c
            .map(function(e, t) {
              return e + "=(" + e + "===undefined?" + t + ":" + e + "|0)";
            })
            .join(";"),
        "var a=this.shape,b=this.stride;return new " +
          i +
          "(this.data," +
          g.join(",") +
          "," +
          _.join(",") +
          ",this.offset)}"
      ),
        o.push(
          "proto.pick=function " +
            i +
            "_pick(" +
            c +
            "){var a=[],b=[],c=this.offset"
        );
      for (m = 0; m < t; ++m)
        o.push(
          "if(typeof i" +
            m +
            "==='number'&&i" +
            m +
            ">=0){c=(c+this.stride[" +
            m +
            "]*i" +
            m +
            ")|0}else{a.push(this.shape[" +
            m +
            "]);b.push(this.stride[" +
            m +
            "])}"
        );
      return (
        o.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),
        o.push(
          "return function construct_" +
            i +
            "(data,shape,stride,offset){return new " +
            i +
            "(data," +
            a
              .map(function(e) {
                return "shape[" + e + "]";
              })
              .join(",") +
            "," +
            a
              .map(function(e) {
                return "stride[" + e + "]";
              })
              .join(",") +
            ",offset)}"
        ),
        new Function("CTOR_LIST", "ORDER", o.join("\n"))(u[e], s)
      );
    }
    var u = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      buffer: [],
      generic: []
    };
    e.exports = function(e, t, i, n) {
      if (void 0 === e) return (0, u.array[0])([]);
      "number" == typeof e && (e = [e]), void 0 === t && (t = [e.length]);
      var a = t.length;
      if (void 0 === i) {
        i = new Array(a);
        for (var s = a - 1, l = 1; s >= 0; --s) (i[s] = l), (l *= t[s]);
      }
      if (void 0 === n)
        for (n = 0, s = 0; s < a; ++s) i[s] < 0 && (n -= (t[s] - 1) * i[s]);
      for (
        var h = (function(e) {
            if (r(e)) return "buffer";
            if (o)
              switch (Object.prototype.toString.call(e)) {
                case "[object Float64Array]":
                  return "float64";
                case "[object Float32Array]":
                  return "float32";
                case "[object Int8Array]":
                  return "int8";
                case "[object Int16Array]":
                  return "int16";
                case "[object Int32Array]":
                  return "int32";
                case "[object Uint8Array]":
                  return "uint8";
                case "[object Uint16Array]":
                  return "uint16";
                case "[object Uint32Array]":
                  return "uint32";
                case "[object Uint8ClampedArray]":
                  return "uint8_clamped";
              }
            return Array.isArray(e) ? "array" : "generic";
          })(e),
          f = u[h];
        f.length <= a + 1;

      )
        f.push(c(h, f.length - 1));
      return (0, f[a + 1])(e, t, i, n);
    };
  },
  function(e, t, i) {
    var n = i(2).Buffer;
    function r(e) {
      n.isBuffer(e) || (e = n.from(e));
      for (var t = (e.length / 4) | 0, i = new Array(t), r = 0; r < t; r++)
        i[r] = e.readUInt32BE(4 * r);
      return i;
    }
    function o(e) {
      for (; 0 < e.length; e++) e[0] = 0;
    }
    function a(e, t, i, n, r) {
      for (
        var o,
          a,
          s,
          c,
          u = i[0],
          l = i[1],
          h = i[2],
          f = i[3],
          d = e[0] ^ t[0],
          p = e[1] ^ t[1],
          m = e[2] ^ t[2],
          g = e[3] ^ t[3],
          _ = 4,
          v = 1;
        v < r;
        v++
      )
        (o =
          u[d >>> 24] ^
          l[(p >>> 16) & 255] ^
          h[(m >>> 8) & 255] ^
          f[255 & g] ^
          t[_++]),
          (a =
            u[p >>> 24] ^
            l[(m >>> 16) & 255] ^
            h[(g >>> 8) & 255] ^
            f[255 & d] ^
            t[_++]),
          (s =
            u[m >>> 24] ^
            l[(g >>> 16) & 255] ^
            h[(d >>> 8) & 255] ^
            f[255 & p] ^
            t[_++]),
          (c =
            u[g >>> 24] ^
            l[(d >>> 16) & 255] ^
            h[(p >>> 8) & 255] ^
            f[255 & m] ^
            t[_++]),
          (d = o),
          (p = a),
          (m = s),
          (g = c);
      return (
        (o =
          ((n[d >>> 24] << 24) |
            (n[(p >>> 16) & 255] << 16) |
            (n[(m >>> 8) & 255] << 8) |
            n[255 & g]) ^
          t[_++]),
        (a =
          ((n[p >>> 24] << 24) |
            (n[(m >>> 16) & 255] << 16) |
            (n[(g >>> 8) & 255] << 8) |
            n[255 & d]) ^
          t[_++]),
        (s =
          ((n[m >>> 24] << 24) |
            (n[(g >>> 16) & 255] << 16) |
            (n[(d >>> 8) & 255] << 8) |
            n[255 & p]) ^
          t[_++]),
        (c =
          ((n[g >>> 24] << 24) |
            (n[(d >>> 16) & 255] << 16) |
            (n[(p >>> 8) & 255] << 8) |
            n[255 & m]) ^
          t[_++]),
        [(o >>>= 0), (a >>>= 0), (s >>>= 0), (c >>>= 0)]
      );
    }
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      c = (function() {
        for (var e = new Array(256), t = 0; t < 256; t++)
          e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
        for (
          var i = [],
            n = [],
            r = [[], [], [], []],
            o = [[], [], [], []],
            a = 0,
            s = 0,
            c = 0;
          c < 256;
          ++c
        ) {
          var u = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
          (u = (u >>> 8) ^ (255 & u) ^ 99), (i[a] = u), (n[u] = a);
          var l = e[a],
            h = e[l],
            f = e[h],
            d = (257 * e[u]) ^ (16843008 * u);
          (r[0][a] = (d << 24) | (d >>> 8)),
            (r[1][a] = (d << 16) | (d >>> 16)),
            (r[2][a] = (d << 8) | (d >>> 24)),
            (r[3][a] = d),
            (d = (16843009 * f) ^ (65537 * h) ^ (257 * l) ^ (16843008 * a)),
            (o[0][u] = (d << 24) | (d >>> 8)),
            (o[1][u] = (d << 16) | (d >>> 16)),
            (o[2][u] = (d << 8) | (d >>> 24)),
            (o[3][u] = d),
            0 === a ? (a = s = 1) : ((a = l ^ e[e[e[f ^ l]]]), (s ^= e[e[s]]));
        }
        return { SBOX: i, INV_SBOX: n, SUB_MIX: r, INV_SUB_MIX: o };
      })();
    function u(e) {
      (this._key = r(e)), this._reset();
    }
    (u.blockSize = 16),
      (u.keySize = 32),
      (u.prototype.blockSize = u.blockSize),
      (u.prototype.keySize = u.keySize),
      (u.prototype._reset = function() {
        for (
          var e = this._key,
            t = e.length,
            i = t + 6,
            n = 4 * (i + 1),
            r = [],
            o = 0;
          o < t;
          o++
        )
          r[o] = e[o];
        for (o = t; o < n; o++) {
          var a = r[o - 1];
          o % t == 0
            ? ((a = (a << 8) | (a >>> 24)),
              (a =
                (c.SBOX[a >>> 24] << 24) |
                (c.SBOX[(a >>> 16) & 255] << 16) |
                (c.SBOX[(a >>> 8) & 255] << 8) |
                c.SBOX[255 & a]),
              (a ^= s[(o / t) | 0] << 24))
            : t > 6 &&
              o % t == 4 &&
              (a =
                (c.SBOX[a >>> 24] << 24) |
                (c.SBOX[(a >>> 16) & 255] << 16) |
                (c.SBOX[(a >>> 8) & 255] << 8) |
                c.SBOX[255 & a]),
            (r[o] = r[o - t] ^ a);
        }
        for (var u = [], l = 0; l < n; l++) {
          var h = n - l,
            f = r[h - (l % 4 ? 0 : 4)];
          u[l] =
            l < 4 || h <= 4
              ? f
              : c.INV_SUB_MIX[0][c.SBOX[f >>> 24]] ^
                c.INV_SUB_MIX[1][c.SBOX[(f >>> 16) & 255]] ^
                c.INV_SUB_MIX[2][c.SBOX[(f >>> 8) & 255]] ^
                c.INV_SUB_MIX[3][c.SBOX[255 & f]];
        }
        (this._nRounds = i),
          (this._keySchedule = r),
          (this._invKeySchedule = u);
      }),
      (u.prototype.encryptBlockRaw = function(e) {
        return a(
          (e = r(e)),
          this._keySchedule,
          c.SUB_MIX,
          c.SBOX,
          this._nRounds
        );
      }),
      (u.prototype.encryptBlock = function(e) {
        var t = this.encryptBlockRaw(e),
          i = n.allocUnsafe(16);
        return (
          i.writeUInt32BE(t[0], 0),
          i.writeUInt32BE(t[1], 4),
          i.writeUInt32BE(t[2], 8),
          i.writeUInt32BE(t[3], 12),
          i
        );
      }),
      (u.prototype.decryptBlock = function(e) {
        var t = (e = r(e))[1];
        (e[1] = e[3]), (e[3] = t);
        var i = a(
            e,
            this._invKeySchedule,
            c.INV_SUB_MIX,
            c.INV_SBOX,
            this._nRounds
          ),
          o = n.allocUnsafe(16);
        return (
          o.writeUInt32BE(i[0], 0),
          o.writeUInt32BE(i[3], 4),
          o.writeUInt32BE(i[2], 8),
          o.writeUInt32BE(i[1], 12),
          o
        );
      }),
      (u.prototype.scrub = function() {
        o(this._keySchedule), o(this._invKeySchedule), o(this._key);
      }),
      (e.exports.AES = u);
  },
  function(e, t, i) {
    var n = i(2).Buffer,
      r = i(127);
    e.exports = function(e, t, i, o) {
      if (
        (n.isBuffer(e) || (e = n.from(e, "binary")),
        t && (n.isBuffer(t) || (t = n.from(t, "binary")), 8 !== t.length))
      )
        throw new RangeError("salt should be Buffer with 8 byte length");
      for (
        var a = i / 8, s = n.alloc(a), c = n.alloc(o || 0), u = n.alloc(0);
        a > 0 || o > 0;

      ) {
        var l = new r();
        l.update(u), l.update(e), t && l.update(t), (u = l.digest());
        var h = 0;
        if (a > 0) {
          var f = s.length - a;
          (h = Math.min(a, u.length)), u.copy(s, f, 0, h), (a -= h);
        }
        if (h < u.length && o > 0) {
          var d = c.length - o,
            p = Math.min(o, u.length - h);
          u.copy(c, d, h, h + p), (o -= p);
        }
      }
      return u.fill(0), { key: s, iv: c };
    };
  },
  function(e, t, i) {
    "use strict";
    var n = t;
    (n.base = i(551)),
      (n.short = i(552)),
      (n.mont = i(553)),
      (n.edwards = i(554));
  },
  function(e, t, i) {
    (function(t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var r = i(570),
        o = i(582),
        a = i(583),
        s = i(132),
        c = i(202);
      function u(e) {
        var i;
        "object" !== n(e) || t.isBuffer(e) || ((i = e.passphrase), (e = e.key)),
          "string" == typeof e && (e = new t(e));
        var u,
          l,
          h = a(e, i),
          f = h.tag,
          d = h.data;
        switch (f) {
          case "CERTIFICATE":
            l = r.certificate.decode(d, "der").tbsCertificate
              .subjectPublicKeyInfo;
          case "PUBLIC KEY":
            switch (
              (l || (l = r.PublicKey.decode(d, "der")),
              (u = l.algorithm.algorithm.join(".")))
            ) {
              case "1.2.840.113549.1.1.1":
                return r.RSAPublicKey.decode(l.subjectPublicKey.data, "der");
              case "1.2.840.10045.2.1":
                return (
                  (l.subjectPrivateKey = l.subjectPublicKey),
                  { type: "ec", data: l }
                );
              case "1.2.840.10040.4.1":
                return (
                  (l.algorithm.params.pub_key = r.DSAparam.decode(
                    l.subjectPublicKey.data,
                    "der"
                  )),
                  { type: "dsa", data: l.algorithm.params }
                );
              default:
                throw new Error("unknown key id " + u);
            }
            throw new Error("unknown key type " + f);
          case "ENCRYPTED PRIVATE KEY":
            d = (function(e, i) {
              var n = e.algorithm.decrypt.kde.kdeparams.salt,
                r = parseInt(
                  e.algorithm.decrypt.kde.kdeparams.iters.toString(),
                  10
                ),
                a = o[e.algorithm.decrypt.cipher.algo.join(".")],
                u = e.algorithm.decrypt.cipher.iv,
                l = e.subjectPrivateKey,
                h = parseInt(a.split("-")[1], 10) / 8,
                f = c.pbkdf2Sync(i, n, r, h),
                d = s.createDecipheriv(a, f, u),
                p = [];
              return p.push(d.update(l)), p.push(d.final()), t.concat(p);
            })((d = r.EncryptedPrivateKey.decode(d, "der")), i);
          case "PRIVATE KEY":
            switch (
              (u = (l = r.PrivateKey.decode(d, "der")).algorithm.algorithm.join(
                "."
              ))
            ) {
              case "1.2.840.113549.1.1.1":
                return r.RSAPrivateKey.decode(l.subjectPrivateKey, "der");
              case "1.2.840.10045.2.1":
                return {
                  curve: l.algorithm.curve,
                  privateKey: r.ECPrivateKey.decode(l.subjectPrivateKey, "der")
                    .privateKey
                };
              case "1.2.840.10040.4.1":
                return (
                  (l.algorithm.params.priv_key = r.DSAparam.decode(
                    l.subjectPrivateKey,
                    "der"
                  )),
                  { type: "dsa", params: l.algorithm.params }
                );
              default:
                throw new Error("unknown key id " + u);
            }
            throw new Error("unknown key type " + f);
          case "RSA PUBLIC KEY":
            return r.RSAPublicKey.decode(d, "der");
          case "RSA PRIVATE KEY":
            return r.RSAPrivateKey.decode(d, "der");
          case "DSA PRIVATE KEY":
            return { type: "dsa", params: r.DSAPrivateKey.decode(d, "der") };
          case "EC PRIVATE KEY":
            return {
              curve: (d = r.ECPrivateKey.decode(d, "der")).parameters.value,
              privateKey: d.privateKey
            };
          default:
            throw new Error("unknown key type " + f);
        }
      }
      (e.exports = u), (u.signature = r.signature);
    }.call(this, i(9).Buffer));
  },
  function(e, t, i) {
    (function(t, n) {
      function r(e, i, n, r, o, a, s) {
        try {
          var c = e[a](s),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? i(u) : t.resolve(u).then(r, o);
      }
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      e.exports = f;
      var a = i(400)("simple-peer"),
        s = i(403),
        c = i(1),
        u = i(53),
        l = i(85),
        h = 5e3;
      function f(e) {
        var i,
          n,
          r = this;
        if (!(r instanceof f)) return new f(e);
        if (
          ((r._id = u(4)
            .toString("hex")
            .slice(0, 7)),
          r._debug("new peer %o", e),
          (e = Object.assign({ allowHalfOpen: !1 }, e)),
          l.Duplex.call(r, e),
          (r.channelName = e.initiator
            ? e.channelName || u(20).toString("hex")
            : null),
          (r._isChromium =
            "undefined" != typeof window && !!window.webkitRTCPeerConnection),
          (r.initiator = e.initiator || !1),
          (r.channelConfig = e.channelConfig || f.channelConfig),
          (r.config = Object.assign({}, f.config, e.config)),
          (r.constraints = r._transformConstraints(
            e.constraints || f.constraints
          )),
          (r.offerConstraints = r._transformConstraints(
            e.offerConstraints || {}
          )),
          (r.answerConstraints = r._transformConstraints(
            e.answerConstraints || {}
          )),
          (r.sdpTransform =
            e.sdpTransform ||
            function(e) {
              return e;
            }),
          (r.streams = e.streams || (e.stream ? [e.stream] : [])),
          (r.trickle = void 0 === e.trickle || e.trickle),
          (r.allowHalfTrickle =
            void 0 !== e.allowHalfTrickle && e.allowHalfTrickle),
          (r.iceCompleteTimeout = e.iceCompleteTimeout || h),
          (r.destroyed = !1),
          (r.connected = !1),
          (r.remoteAddress = void 0),
          (r.remoteFamily = void 0),
          (r.remotePort = void 0),
          (r.localAddress = void 0),
          (r.localPort = void 0),
          (r._wrtc = e.wrtc && "object" === o(e.wrtc) ? e.wrtc : s()),
          !r._wrtc)
        )
          throw "undefined" == typeof window
            ? p(
                "No WebRTC support: Specify `opts.wrtc` option in this environment",
                "ERR_WEBRTC_SUPPORT"
              )
            : p(
                "No WebRTC support: Not a supported browser",
                "ERR_WEBRTC_SUPPORT"
              );
        (r._pcReady = !1),
          (r._channelReady = !1),
          (r._iceComplete = !1),
          (r._iceCompleteTimer = null),
          (r._channel = null),
          (r._pendingCandidates = []),
          (r._isNegotiating = !r.initiator),
          (r._batchedNegotiation = !1),
          (r._queuedNegotiation = !1),
          (r._sendersAwaitingStable = []),
          (r._senderMap = new Map()),
          (r._firstStable = !0),
          (r._closingInterval = null),
          (r._remoteTracks = []),
          (r._remoteStreams = []),
          (r._chunk = null),
          (r._cb = null),
          (r._interval = null),
          (r._pc = new r._wrtc.RTCPeerConnection(r.config, r.constraints)),
          (r._isChromium || (r._wrtc && r._wrtc.electronDaemon)) &&
            ((i = r._wrtc.RTCPeerConnection),
            ((n = r._pc).createOffer = function(e) {
              var n = this;
              return new t(function(t, r) {
                i.prototype.createOffer.call(n, t, r, e);
              });
            }),
            (n.createAnswer = function(e) {
              var n = this;
              return new t(function(t, r) {
                i.prototype.createAnswer.call(n, t, r, e);
              });
            }),
            (n.setLocalDescription = function(e) {
              var n = this;
              return new t(function(t, r) {
                i.prototype.setLocalDescription.call(n, e, t, r);
              });
            }),
            (n.setRemoteDescription = function(e) {
              var n = this;
              return new t(function(t, r) {
                i.prototype.setRemoteDescription.call(n, e, t, r);
              });
            })),
          (r._isReactNativeWebrtc = "number" == typeof r._pc._peerConnectionId),
          (r._pc.oniceconnectionstatechange = function() {
            r._onIceStateChange();
          }),
          (r._pc.onicegatheringstatechange = function() {
            r._onIceStateChange();
          }),
          (r._pc.onsignalingstatechange = function() {
            r._onSignalingStateChange();
          }),
          (r._pc.onicecandidate = function(e) {
            r._onIceCandidate(e);
          }),
          r.initiator
            ? r._setupData({
                channel: r._pc.createDataChannel(r.channelName, r.channelConfig)
              })
            : (r._pc.ondatachannel = function(e) {
                r._setupData(e);
              }),
          "addTrack" in r._pc &&
            (r.streams &&
              r.streams.forEach(function(e) {
                r.addStream(e);
              }),
            (r._pc.ontrack = function(e) {
              r._onTrack(e);
            })),
          r.initiator && r._needsNegotiation(),
          (r._onFinishBound = function() {
            r._onFinish();
          }),
          r.once("finish", r._onFinishBound);
      }
      function d(e) {
        return e.replace(/a=ice-options:trickle\s\n/g, "");
      }
      function p(e, t) {
        var i = new Error(e);
        return (i.code = t), i;
      }
      function m() {}
      c(f, l.Duplex),
        (f.WEBRTC_SUPPORT = !!s()),
        (f.config = {
          iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:global.stun.twilio.com:3478?transport=udp" }
          ]
        }),
        (f.constraints = {}),
        (f.channelConfig = {}),
        Object.defineProperty(f.prototype, "bufferSize", {
          get: function() {
            return (this._channel && this._channel.bufferedAmount) || 0;
          }
        }),
        (f.prototype.address = function() {
          return {
            port: this.localPort,
            family: "IPv4",
            address: this.localAddress
          };
        }),
        (f.prototype.signal = function(e) {
          var t = this;
          if (t.destroyed)
            throw p("cannot signal after peer is destroyed", "ERR_SIGNALING");
          if ("string" == typeof e)
            try {
              e = JSON.parse(e);
            } catch (t) {
              e = {};
            }
          t._debug("signal()"),
            e.renegotiate &&
              t.initiator &&
              (t._debug("got request to renegotiate"), t._needsNegotiation()),
            e.candidate &&
              (t._pc.remoteDescription && t._pc.remoteDescription.type
                ? t._addIceCandidate(e.candidate)
                : t._pendingCandidates.push(e.candidate)),
            e.sdp &&
              t._pc
                .setRemoteDescription(new t._wrtc.RTCSessionDescription(e))
                .then(function() {
                  t.destroyed ||
                    (t._pendingCandidates.forEach(function(e) {
                      t._addIceCandidate(e);
                    }),
                    (t._pendingCandidates = []),
                    "offer" === t._pc.remoteDescription.type &&
                      t._createAnswer());
                })
                .catch(function(e) {
                  t.destroy(p(e, "ERR_SET_REMOTE_DESCRIPTION"));
                }),
            e.sdp ||
              e.candidate ||
              e.renegotiate ||
              t.destroy(
                p("signal() called with invalid signal data", "ERR_SIGNALING")
              );
        }),
        (f.prototype._addIceCandidate = function(e) {
          var t = this;
          try {
            t._pc.addIceCandidate(new t._wrtc.RTCIceCandidate(e), m, function(
              e
            ) {
              t.destroy(p(e, "ERR_ADD_ICE_CANDIDATE"));
            });
          } catch (e) {
            t.destroy(
              p("error adding candidate: " + e.message, "ERR_ADD_ICE_CANDIDATE")
            );
          }
        }),
        (f.prototype.send = function(e) {
          this._channel.send(e);
        }),
        (f.prototype.addStream = function(e) {
          var t = this;
          t._debug("addStream()"),
            e.getTracks().forEach(function(i) {
              t.addTrack(i, e);
            });
        }),
        (f.prototype.addTrack = function(e, t) {
          this._debug("addTrack()");
          var i = this._pc.addTrack(e, t),
            n = this._senderMap.get(e) || new Map();
          n.set(t, i), this._senderMap.set(e, n), this._needsNegotiation();
        }),
        (f.prototype.replaceTrack = (function() {
          var e,
            i =
              ((e = regeneratorRuntime.mark(function e(t, i, n) {
                var r, o, a;
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = this)._debug("replaceTrack()"),
                            (o = r._senderMap.get(t)),
                            (a = o ? o.get(n) : null) ||
                              r.destroy(
                                new Error(
                                  "Cannot replace track that was never added."
                                )
                              ),
                            i && r._senderMap.set(i, o),
                            null == a.replaceTrack)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (e.next = 9), a.replaceTrack(i);
                        case 9:
                          e.next = 12;
                          break;
                        case 11:
                          r.destroy(
                            p(
                              "replaceTrack is not supported in this browser",
                              "ERR_UNSUPPORTED_REPLACETRACK"
                            )
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })),
              function() {
                var i = this,
                  n = arguments;
                return new t(function(t, o) {
                  var a = e.apply(i, n);
                  function s(e) {
                    r(a, t, o, s, c, "next", e);
                  }
                  function c(e) {
                    r(a, t, o, s, c, "throw", e);
                  }
                  s(void 0);
                });
              });
          return function(e, t, n) {
            return i.apply(this, arguments);
          };
        })()),
        (f.prototype.removeTrack = function(e, t) {
          this._debug("removeSender()");
          var i = this._senderMap.get(e),
            n = i ? i.get(t) : null;
          n ||
            this.destroy(
              new Error("Cannot remove track that was never added.")
            );
          try {
            this._pc.removeTrack(n);
          } catch (e) {
            "NS_ERROR_UNEXPECTED" === e.name
              ? this._sendersAwaitingStable.push(n)
              : this.destroy(e);
          }
        }),
        (f.prototype.removeStream = function(e) {
          var t = this;
          t._debug("removeSenders()"),
            e.getTracks().forEach(function(i) {
              t.removeTrack(i, e);
            });
        }),
        (f.prototype._needsNegotiation = function() {
          var e = this;
          e._debug("_needsNegotiation"),
            e._batchedNegotiation ||
              ((e._batchedNegotiation = !0),
              setTimeout(function() {
                (e._batchedNegotiation = !1),
                  e._debug("starting batched negotiation"),
                  e.negotiate();
              }, 0));
        }),
        (f.prototype.negotiate = function() {
          this.initiator
            ? this._isNegotiating
              ? ((this._queuedNegotiation = !0),
                this._debug("already negotiating, queueing"))
              : (this._debug("start negotiation"), this._createOffer())
            : this._isNegotiating ||
              (this._debug("requesting negotiation from initiator"),
              this.emit("signal", { renegotiate: !0 })),
            (this._isNegotiating = !0);
        }),
        (f.prototype.destroy = function(e) {
          this._destroy(e, function() {});
        }),
        (f.prototype._destroy = function(e, t) {
          if (!this.destroyed) {
            if (
              (this._debug("destroy (error: %s)", e && (e.message || e)),
              (this.readable = this.writable = !1),
              this._readableState.ended || this.push(null),
              this._writableState.finished || this.end(),
              (this.destroyed = !0),
              (this.connected = !1),
              (this._pcReady = !1),
              (this._channelReady = !1),
              (this._remoteTracks = null),
              (this._remoteStreams = null),
              (this._senderMap = null),
              clearInterval(this._closingInterval),
              (this._closingInterval = null),
              clearInterval(this._interval),
              (this._interval = null),
              (this._chunk = null),
              (this._cb = null),
              this._onFinishBound &&
                this.removeListener("finish", this._onFinishBound),
              (this._onFinishBound = null),
              this._channel)
            ) {
              try {
                this._channel.close();
              } catch (e) {}
              (this._channel.onmessage = null),
                (this._channel.onopen = null),
                (this._channel.onclose = null),
                (this._channel.onerror = null);
            }
            if (this._pc) {
              try {
                this._pc.close();
              } catch (e) {}
              (this._pc.oniceconnectionstatechange = null),
                (this._pc.onicegatheringstatechange = null),
                (this._pc.onsignalingstatechange = null),
                (this._pc.onicecandidate = null),
                "addTrack" in this._pc && (this._pc.ontrack = null),
                (this._pc.ondatachannel = null);
            }
            (this._pc = null),
              (this._channel = null),
              e && this.emit("error", e),
              this.emit("close"),
              t();
          }
        }),
        (f.prototype._setupData = function(e) {
          var t = this;
          if (!e.channel)
            return t.destroy(
              p(
                "Data channel event is missing `channel` property",
                "ERR_DATA_CHANNEL"
              )
            );
          (t._channel = e.channel),
            (t._channel.binaryType = "arraybuffer"),
            "number" == typeof t._channel.bufferedAmountLowThreshold &&
              (t._channel.bufferedAmountLowThreshold = 65536),
            (t.channelName = t._channel.label),
            (t._channel.onmessage = function(e) {
              t._onChannelMessage(e);
            }),
            (t._channel.onbufferedamountlow = function() {
              t._onChannelBufferedAmountLow();
            }),
            (t._channel.onopen = function() {
              t._onChannelOpen();
            }),
            (t._channel.onclose = function() {
              t._onChannelClose();
            }),
            (t._channel.onerror = function(e) {
              t.destroy(p(e, "ERR_DATA_CHANNEL"));
            });
          var i = !1;
          t._closingInterval = setInterval(function() {
            t._channel && "closing" === t._channel.readyState
              ? (i && t._onChannelClose(), (i = !0))
              : (i = !1);
          }, 5e3);
        }),
        (f.prototype._read = function() {}),
        (f.prototype._write = function(e, t, i) {
          if (this.destroyed)
            return i(
              p("cannot write after peer is destroyed", "ERR_DATA_CHANNEL")
            );
          if (this.connected) {
            try {
              this.send(e);
            } catch (e) {
              return this.destroy(p(e, "ERR_DATA_CHANNEL"));
            }
            this._channel.bufferedAmount > 65536
              ? (this._debug(
                  "start backpressure: bufferedAmount %d",
                  this._channel.bufferedAmount
                ),
                (this._cb = i))
              : i(null);
          } else
            this._debug("write before connect"),
              (this._chunk = e),
              (this._cb = i);
        }),
        (f.prototype._onFinish = function() {
          var e = this;
          function t() {
            setTimeout(function() {
              e.destroy();
            }, 1e3);
          }
          e.destroyed || (e.connected ? t() : e.once("connect", t));
        }),
        (f.prototype._startIceCompleteTimeout = function() {
          a("started iceComplete timeout");
          var e = this;
          e.destroyed ||
            e._iceCompleteTimer ||
            (e._iceCompleteTimer = setTimeout(function() {
              e._iceComplete ||
                ((e._iceComplete = !0),
                e.emit("iceTimeout"),
                e.emit("_iceComplete"));
            }, this.iceCompleteTimeout));
        }),
        (f.prototype._createOffer = function() {
          var e = this;
          e.destroyed ||
            e._pc
              .createOffer(e.offerConstraints)
              .then(function(t) {
                function i() {
                  if (!e.destroyed) {
                    var i = e._pc.localDescription || t;
                    e._debug("signal"),
                      e.emit("signal", { type: i.type, sdp: i.sdp });
                  }
                }
                e.destroyed ||
                  (e.trickle || e.allowHalfTrickle || (t.sdp = d(t.sdp)),
                  (t.sdp = e.sdpTransform(t.sdp)),
                  e._pc
                    .setLocalDescription(t)
                    .then(function() {
                      if ((e._debug("createOffer success"), e.destroyed))
                        return;
                      e.trickle || e._iceComplete
                        ? i()
                        : e.once("_iceComplete", i);
                    })
                    .catch(function(t) {
                      e.destroy(p(t, "ERR_SET_LOCAL_DESCRIPTION"));
                    }));
              })
              .catch(function(t) {
                e.destroy(p(t, "ERR_CREATE_OFFER"));
              });
        }),
        (f.prototype._createAnswer = function() {
          var e = this;
          e.destroyed ||
            e._pc
              .createAnswer(e.answerConstraints)
              .then(function(t) {
                function i() {
                  if (!e.destroyed) {
                    var i = e._pc.localDescription || t;
                    e._debug("signal"),
                      e.emit("signal", { type: i.type, sdp: i.sdp });
                  }
                }
                e.destroyed ||
                  (e.trickle || e.allowHalfTrickle || (t.sdp = d(t.sdp)),
                  (t.sdp = e.sdpTransform(t.sdp)),
                  e._pc
                    .setLocalDescription(t)
                    .then(function() {
                      if (e.destroyed) return;
                      e.trickle || e._iceComplete
                        ? i()
                        : e.once("_iceComplete", i);
                    })
                    .catch(function(t) {
                      e.destroy(p(t, "ERR_SET_LOCAL_DESCRIPTION"));
                    }));
              })
              .catch(function(t) {
                e.destroy(p(t, "ERR_CREATE_ANSWER"));
              });
        }),
        (f.prototype._onIceStateChange = function() {
          if (!this.destroyed) {
            var e = this._pc.iceConnectionState,
              t = this._pc.iceGatheringState;
            this._debug(
              "iceStateChange (connection: %s) (gathering: %s)",
              e,
              t
            ),
              this.emit("iceStateChange", e, t),
              ("connected" !== e && "completed" !== e) ||
                ((this._pcReady = !0), this._maybeReady()),
              "failed" === e &&
                this.destroy(
                  p("Ice connection failed.", "ERR_ICE_CONNECTION_FAILURE")
                ),
              "closed" === e &&
                this.destroy(new Error("Ice connection closed."));
          }
        }),
        (f.prototype.getStats = function(e) {
          var t = this;
          0 === t._pc.getStats.length
            ? t._pc.getStats().then(
                function(t) {
                  var i = [];
                  t.forEach(function(e) {
                    i.push(e);
                  }),
                    e(null, i);
                },
                function(t) {
                  e(t);
                }
              )
            : t._isReactNativeWebrtc
            ? t._pc.getStats(
                null,
                function(t) {
                  var i = [];
                  t.forEach(function(e) {
                    i.push(e);
                  }),
                    e(null, i);
                },
                function(t) {
                  e(t);
                }
              )
            : t._pc.getStats.length > 0
            ? t._pc.getStats(
                function(i) {
                  if (!t.destroyed) {
                    var n = [];
                    i.result().forEach(function(e) {
                      var t = {};
                      e.names().forEach(function(i) {
                        t[i] = e.stat(i);
                      }),
                        (t.id = e.id),
                        (t.type = e.type),
                        (t.timestamp = e.timestamp),
                        n.push(t);
                    }),
                      e(null, n);
                  }
                },
                function(t) {
                  e(t);
                }
              )
            : e(null, []);
        }),
        (f.prototype._maybeReady = function() {
          var e = this;
          e._debug("maybeReady pc %s channel %s", e._pcReady, e._channelReady),
            !e.connected &&
              !e._connecting &&
              e._pcReady &&
              e._channelReady &&
              ((e._connecting = !0),
              (function t() {
                e.destroyed ||
                  e.getStats(function(i, n) {
                    if (!e.destroyed) {
                      i && (n = []);
                      var r = {},
                        o = {},
                        a = {},
                        s = !1;
                      if (
                        (n.forEach(function(e) {
                          ("remotecandidate" !== e.type &&
                            "remote-candidate" !== e.type) ||
                            (r[e.id] = e),
                            ("localcandidate" !== e.type &&
                              "local-candidate" !== e.type) ||
                              (o[e.id] = e),
                            ("candidatepair" !== e.type &&
                              "candidate-pair" !== e.type) ||
                              (a[e.id] = e);
                        }),
                        n.forEach(function(e) {
                          "transport" === e.type &&
                            e.selectedCandidatePairId &&
                            u(a[e.selectedCandidatePairId]),
                            (("googCandidatePair" === e.type &&
                              "true" === e.googActiveConnection) ||
                              (("candidatepair" === e.type ||
                                "candidate-pair" === e.type) &&
                                e.selected)) &&
                              u(e);
                        }),
                        s || (Object.keys(a).length && !Object.keys(o).length))
                      ) {
                        if (
                          ((e._connecting = !1), (e.connected = !0), e._chunk)
                        ) {
                          try {
                            e.send(e._chunk);
                          } catch (i) {
                            return e.destroy(p(i, "ERR_DATA_CHANNEL"));
                          }
                          (e._chunk = null),
                            e._debug('sent chunk from "write before connect"');
                          var c = e._cb;
                          (e._cb = null), c(null);
                        }
                        "number" !=
                          typeof e._channel.bufferedAmountLowThreshold &&
                          ((e._interval = setInterval(function() {
                            e._onInterval();
                          }, 150)),
                          e._interval.unref && e._interval.unref()),
                          e._debug("connect"),
                          e.emit("connect");
                      } else setTimeout(t, 100);
                    }
                    function u(t) {
                      s = !0;
                      var i = o[t.localCandidateId];
                      i && i.ip
                        ? ((e.localAddress = i.ip),
                          (e.localPort = Number(i.port)))
                        : i && i.ipAddress
                        ? ((e.localAddress = i.ipAddress),
                          (e.localPort = Number(i.portNumber)))
                        : "string" == typeof t.googLocalAddress &&
                          ((i = t.googLocalAddress.split(":")),
                          (e.localAddress = i[0]),
                          (e.localPort = Number(i[1])));
                      var n = r[t.remoteCandidateId];
                      n && n.ip
                        ? ((e.remoteAddress = n.ip),
                          (e.remotePort = Number(n.port)))
                        : n && n.ipAddress
                        ? ((e.remoteAddress = n.ipAddress),
                          (e.remotePort = Number(n.portNumber)))
                        : "string" == typeof t.googRemoteAddress &&
                          ((n = t.googRemoteAddress.split(":")),
                          (e.remoteAddress = n[0]),
                          (e.remotePort = Number(n[1]))),
                        (e.remoteFamily = "IPv4"),
                        e._debug(
                          "connect local: %s:%s remote: %s:%s",
                          e.localAddress,
                          e.localPort,
                          e.remoteAddress,
                          e.remotePort
                        );
                    }
                  });
              })());
        }),
        (f.prototype._onInterval = function() {
          !this._cb ||
            !this._channel ||
            this._channel.bufferedAmount > 65536 ||
            this._onChannelBufferedAmountLow();
        }),
        (f.prototype._onSignalingStateChange = function() {
          var e = this;
          e.destroyed ||
            ("stable" !== e._pc.signalingState ||
              e._firstStable ||
              ((e._isNegotiating = !1),
              e._debug("flushing sender queue", e._sendersAwaitingStable),
              e._sendersAwaitingStable.forEach(function(t) {
                e._pc.removeTrack(t), (e._queuedNegotiation = !0);
              }),
              (e._sendersAwaitingStable = []),
              e._queuedNegotiation &&
                (e._debug("flushing negotiation queue"),
                (e._queuedNegotiation = !1),
                e._needsNegotiation()),
              e._debug("negotiate"),
              e.emit("negotiate")),
            (e._firstStable = !1),
            e._debug("signalingStateChange %s", e._pc.signalingState),
            e.emit("signalingStateChange", e._pc.signalingState));
        }),
        (f.prototype._onIceCandidate = function(e) {
          this.destroyed ||
            (e.candidate && this.trickle
              ? this.emit("signal", {
                  candidate: {
                    candidate: e.candidate.candidate,
                    sdpMLineIndex: e.candidate.sdpMLineIndex,
                    sdpMid: e.candidate.sdpMid
                  }
                })
              : e.candidate ||
                this._iceComplete ||
                ((this._iceComplete = !0), this.emit("_iceComplete")),
            e.candidate && this._startIceCompleteTimeout());
        }),
        (f.prototype._onChannelMessage = function(e) {
          if (!this.destroyed) {
            var t = e.data;
            t instanceof ArrayBuffer && (t = n.from(t)), this.push(t);
          }
        }),
        (f.prototype._onChannelBufferedAmountLow = function() {
          if (!this.destroyed && this._cb) {
            this._debug(
              "ending backpressure: bufferedAmount %d",
              this._channel.bufferedAmount
            );
            var e = this._cb;
            (this._cb = null), e(null);
          }
        }),
        (f.prototype._onChannelOpen = function() {
          this.connected ||
            this.destroyed ||
            (this._debug("on channel open"),
            (this._channelReady = !0),
            this._maybeReady());
        }),
        (f.prototype._onChannelClose = function() {
          this.destroyed || (this._debug("on channel close"), this.destroy());
        }),
        (f.prototype._onTrack = function(e) {
          var t = this;
          t.destroyed ||
            e.streams.forEach(function(i) {
              t._debug("on track"),
                t.emit("track", e.track, i),
                t._remoteTracks.push({ track: e.track, stream: i }),
                t._remoteStreams.some(function(e) {
                  return e.id === i.id;
                }) ||
                  (t._remoteStreams.push(i),
                  setTimeout(function() {
                    t.emit("stream", i);
                  }, 0));
            });
        }),
        (f.prototype.setConstraints = function(e) {
          this.initiator
            ? (this.offerConstraints = this._transformConstraints(e))
            : (this.answerConstraints = this._transformConstraints(e));
        }),
        (f.prototype._debug = function() {
          var e = [].slice.call(arguments);
          (e[0] = "[" + this._id + "] " + e[0]), a.apply(null, e);
        }),
        (f.prototype._transformConstraints = function(e) {
          if (0 === Object.keys(e).length) return e;
          if ((e.mandatory || e.optional) && !this._isChromium) {
            var t = Object.assign({}, e.optional, e.mandatory);
            return (
              void 0 !== t.OfferToReceiveVideo &&
                ((t.offerToReceiveVideo = t.OfferToReceiveVideo),
                delete t.OfferToReceiveVideo),
              void 0 !== t.OfferToReceiveAudio &&
                ((t.offerToReceiveAudio = t.OfferToReceiveAudio),
                delete t.OfferToReceiveAudio),
              t
            );
          }
          return e.mandatory || e.optional || !this._isChromium
            ? e
            : (void 0 !== e.offerToReceiveVideo &&
                ((e.OfferToReceiveVideo = e.offerToReceiveVideo),
                delete e.offerToReceiveVideo),
              void 0 !== e.offerToReceiveAudio &&
                ((e.OfferToReceiveAudio = e.offerToReceiveAudio),
                delete e.offerToReceiveAudio),
              { mandatory: e });
        });
    }.call(this, i(41), i(9).Buffer));
  },
  function(e, t, i) {
    "use strict";
    var n = i(7);
    function r(e) {
      var t = 2,
        i = 256,
        n = 10,
        r = document.createElement("canvas");
      (r.width = window.innerWidth - 16), (r.height = i * t);
      var o = r.getContext("2d");
      o.imageSmoothingEnabled = !1;
      var a = document.getElementById("chat");
      a.appendChild(r),
        (a.style.width = r.width + "px"),
        (a.style.height = i * t + "px");
      var s = "",
        c = 0,
        l = [],
        h = 0,
        f = {
          player: null,
          isOpen: !1,
          open: function() {
            (n = 20),
              (c = performance.now()),
              (f.isOpen = !0),
              (i = 512),
              f.resize(),
              document.addEventListener("keypress", f.keypress, !1),
              document.addEventListener("keydown", f.keydown, !1),
              document.exitPointerLock(),
              (e.inputs.state.active = !1);
          },
          close: function() {
            document.removeEventListener("keypress", f.keypress),
              document.removeEventListener("keydown", f.keydown);
            var t = document.getElementById("noa-container");
            setTimeout(function() {
              null != t && t.requestPointerLock();
            }, 200),
              (n = 10),
              (f.isOpen = !1),
              (i = 256),
              f.resize(),
              (e.inputs.state.active = !0);
          },
          sendMessage: function(e) {
            if (0 == e.indexOf("/")) {
              var t = 'Unknown command. Type "/help" for help.';
              if (
                (0 == e.indexOf("/ban") && (t = "Command disabled."),
                0 == e.indexOf("/banip") && (t = "Command disabled."),
                0 == e.indexOf("/say") && (t = "Command disabled."),
                0 == e.indexOf("/deop") && (t = "Command disabled."),
                0 == e.indexOf("/kick"))
              ) {
                var i = e.substr(e.indexOf("kick") + 5).trim();
                t = u.getInstance().kickPlayer(i);
              }
              if (
                (0 == e.indexOf("/op") && (t = "Command disabled."),
                0 == e.indexOf("/tp"))
              ) {
                var n = e.substr(e.indexOf("tp") + 3).trim();
                t = u.getInstance().teleportToPlayer(n);
              }
              return (
                0 == e.indexOf("/unban") && (t = "Command disabled."),
                0 == e.indexOf("/setspawn") && (t = u.getInstance().setSpawn()),
                0 == e.indexOf("/solid") && (t = "Command disabled."),
                0 == e.indexOf("/list") &&
                  (t = JSON.stringify(u.getInstance().getPlayerNames()).slice(
                    1,
                    -1
                  )),
                0 == e.indexOf("/help") &&
                  (t = "Available Commands: /list /kick /tp /setspawn /help"),
                l.push({
                  type: "local",
                  message: t,
                  from: "",
                  timestamp: new Date().getTime()
                }),
                void (l.length > 20 && l.shift())
              );
            }
            null != f.player && f.player.sendMessage(e);
          },
          keydown: function(e) {
            if (
              (e.shiftKey &&
                55 == e.keyCode &&
                (e.preventDefault(), f.keypress(e)),
              13 == e.keyCode)
            ) {
              var t = s.trim();
              return (
                t.length > 0 && f.sendMessage(t), (s = ""), void f.redraw()
              );
            }
            8 == e.keyCode &&
              s.length > 0 &&
              (s = s.substring(0, s.length - 1)),
              f.redraw();
          },
          keypress: function(e) {
            if (!(performance.now() < c + 100)) {
              var t = e.key,
                i = 10;
              null != f.player && (i = f.player.state.name.length),
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_'*!\\\"#%/()=+?[]{}<>@|$;".indexOf(
                  t
                ) >= 0 &&
                  s.length < 64 - (i + 2) &&
                  (s += t),
                f.redraw();
            }
          },
          update: function(e) {
            for (
              l = (function(e) {
                for (var t = e.concat(), i = 0; i < t.length; ++i)
                  for (var n = i + 1; n < t.length; ++n)
                    JSON.stringify(t[i]) === JSON.stringify(t[n]) &&
                      t.splice(n--, 1);
                return t;
              })(l.concat(e));
              l.length > 20;

            )
              l.shift();
            f.redraw();
          },
          tick: function() {
            var e = new Date().getTime();
            if (!(e < h + 1e3)) {
              for (var t = !1, i = 0; i < l.length; i++) {
                l[i].timestamp + 1e4 < e && ((l[i].isOld = !0), (t = !0));
              }
              t && f.redraw(), (h = e);
            }
          },
          redraw: function() {
            o.clearRect(0, 0, r.width, i * t),
              (o.font = 14 * t + "px Minecraft, sans-serif"),
              (o.textBaseline = "alphabetic"),
              (o.textAlign = "left");
            var e = 4 * t,
              a = 2 * t;
            if (f.isOpen) {
              (o.fillStyle = "rgba(0,0,0,0.6)"),
                o.fillRect(0, i * t - 25 * t, r.width, i * t);
              var c = i * t - 7 * t;
              (o.fillStyle = "rgb(63,63,63)"),
                o.fillText("> " + s, e + a, c + a),
                (o.fillStyle = "rgb(255,255,255)"),
                o.fillText("> " + s, e, c);
            }
            e = 0;
            for (var u = 1, h = l.length - 1; h >= 0; h--)
              if (!l[h].isOld || f.isOpen) {
                if (u > n) break;
                var d = "",
                  p = "rgb(255,255,255)";
                switch (l[h].type) {
                  case "message":
                    d = l[h].from + ": " + l[h].message;
                    break;
                  case "left":
                    (d = l[h].from + " left the game"), (p = "rgb(255,255,64)");
                    break;
                  case "joined":
                    (d = l[h].from + " joined the game"),
                      (p = "rgb(255,255,64)");
                    break;
                  case "local":
                    (d = l[h].message), (p = "rgb(255,255,64)");
                }
                var m = i * t - 25 * t - 15 * u++ * t;
                (o.fillStyle = "rgb(63,63,63)"),
                  o.fillText(d, e + a, m + a),
                  (o.fillStyle = p),
                  o.fillText(d, e, m);
              }
          },
          resize: function() {
            (t = 2),
              window.innerHeight < 600 && (t = 1),
              (r.width = window.innerWidth - 16),
              (r.height = i * t),
              (a.style.width = r.width + "px"),
              (a.style.height = i * t + "px"),
              (o.imageSmoothingEnabled = !1),
              f.redraw();
          }
        };
      return f.resize(), f;
    }
    var o = function(e) {
      return r(e);
    };
    function a(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, i = new Array(e.length); t < e.length; t++)
              i[t] = e[t];
            return i;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    function s(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    window.BABYLON = i(411);
    var c = (function() {
        function e() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            e.instance || (e.instance = this),
            e.instance
          );
        }
        var t, r, c;
        return (
          (t = e),
          (c = [
            {
              key: "getInstance",
              value: function() {
                return (
                  void 0 === e.instance && (e.instance = new e()), e.instance
                );
              }
            }
          ]),
          (r = [
            {
              key: "initialize",
              value: function(e) {
                var t = this;
                (this.playerSpawned = !1),
                  (this.worldGenerated = !1),
                  (this.worldInitialized = !1),
                  (this.client = null),
                  (this.network = e.network);
                var r = i(412),
                  s = i(495);
                this.soundPlayer = i(497)();
                var c,
                  u = i(499),
                  l = i(500),
                  h = i(501),
                  f = i(502),
                  d = i(503),
                  p = i(194),
                  m = u(),
                  g = 32,
                  _ = 128,
                  v = 30,
                  y = null,
                  b = !1,
                  E = !1,
                  T = this;
                if (Math.round(e.seed) == e.seed) {
                  this.player = void 0 !== e.player ? e.player : null;
                  var A = new URLSearchParams(window.location.search),
                    x = A.get("size");
                  if (
                    ("small" == x && (_ = 128),
                    "normal" == x && (_ = 256),
                    "huge" == x && (_ = 512),
                    n.default.getInstance().gameSaved()
                      ? (_ = n.default.getInstance().getWorldSize())
                      : n.default.getInstance().setWorldSize(_),
                    "undefined" != typeof Worker)
                  ) {
                    if (void 0 === S) {
                      var S = new Worker("assets/js/RandomLevelWorker.js");
                      S.postMessage({ worldSize: _, seed: e.seed }), m.show();
                    }
                    S.onmessage = function(e) {
                      var t = e.data;
                      (m.task = t.string),
                        (m.percent = t.percent),
                        m.tick(),
                        null != t.tiles &&
                          ((y = t.tiles),
                          (T.worldGenerated = !0),
                          null == T.client
                            ? n.default.getInstance().gameSaved()
                              ? (T.syncSavedWorld(), Ee())
                              : Ee()
                            : T.client &&
                              (T.hostInfo
                                ? T.hostInfo.numberOfChangedBlocks <= 0
                                  ? Ee()
                                  : T.client.broadcast({
                                      type: "requestChanges",
                                      from: T.client.state.changedBlocks.length
                                    })
                                : Ee()));
                    };
                  } else console.log("No worker support.");
                  var C = 0.5 * _,
                    P = 8e3,
                    R = 24e3,
                    M = 8e3,
                    O = 24e3,
                    w = 3e3,
                    I = 12e3,
                    D = {
                      chunkSize: g,
                      chunkAddDistance: 7,
                      chunkRemoveDistance: 8,
                      blockTestDistance: 6,
                      playerStart: [C + 0.5, 48, C + 0.5],
                      playerHeight: 1.8,
                      texturePath: "assets/textures/",
                      useAO: !1,
                      stickyPointerLock: !0
                    };
                  this.lightDepths = new Array(_);
                  for (var L = 0; L < _; L++)
                    this.lightDepths[L] = new Array(_);
                  var F = {
                      music: !1,
                      sound: !0,
                      invert: !1,
                      fps: !1,
                      drawDistance: 0,
                      forward: "W",
                      left: "A",
                      backward: "S",
                      right: "D",
                      jump: "<space>",
                      build: "B",
                      chat: "T",
                      fog: "F",
                      saveLoc: "<enter>",
                      loadLoc: "R",
                      username: ""
                    },
                    B = JSON.parse(localStorage.getItem("settings"));
                  null == B || B.back || (F = B);
                  var N = {
                    forward: F.forward,
                    left: F.left,
                    backward: F.backward,
                    right: F.right,
                    fire: "<mouse 1>",
                    "mid-fire": "<mouse 2>",
                    "alt-fire": "<mouse 3>",
                    jump: F.jump,
                    build: F.build,
                    chat: F.chat,
                    fog: F.fog,
                    saveLoc: F.saveLoc,
                    loadLoc: F.loadLoc,
                    spawnSteve: "G"
                  };
                  (D.bindings = N),
                    (D.settings = F),
                    (this.soundPlayer.musicOn = F.music),
                    (this.soundPlayer.soundOn = F.sound);
                  var k = r(D);
                  k.setPaused(!0),
                    (k.worldSize = _),
                    (k.worldHeight = 64),
                    (k.waterLevel = v),
                    (k.time = 0),
                    (k.rendering._camera.minZ = 0.1),
                    (k.rendering._camera.fov = (70 * Math.PI) / 180),
                    (k.rendering._scene.fogColor = new BABYLON.Color3(
                      0.9,
                      0.95,
                      1
                    )),
                    (k.rendering._scene.fogMode = BABYLON.Scene.FOGMODE_EXP2),
                    (k.rendering._scene.fogDensity = 0.002),
                    (k.rendering._scene.clearColor =
                      k.rendering._scene.fogColor),
                    this.hostInfo
                      ? (k.hostInfo = this.hostInfo)
                      : (k.hostInfo = {
                          maxPlayers: this.player.network.maxPlayers
                        });
                  var U = l(k),
                    V = h(U),
                    G = f(k, e.singlePlayer),
                    z = p(k);
                  this.addParticles = s(k);
                  var j = U.currentId - 1;
                  k.on("tick", function(e) {
                    if (
                      ((k.time += e),
                      null != T.player &&
                        null == c.player &&
                        (c.player = T.player),
                      c && c.tick(),
                      z && z.isOpen && z.tick(),
                      W && (W.material.diffuseTexture.uOffset = 2e-7 * k.time),
                      T.steveArray)
                    )
                      for (var t = 0; t < T.steveArray.length; t++) {
                        var i = T.steveArray[t];
                        if ((i.tick(e), i.state.shouldRemove))
                          i.remove(), (T.steveArray.splice(t, 1)[0] = null);
                      }
                    !(function() {
                      if (k.time > he + le) {
                        var e = fe.slice();
                        fe.length = 0;
                        for (var t = 0; t < e.length; t++) {
                          var i,
                            n = e[t];
                          (i = n).func.apply(i, a(n.args));
                        }
                        he = k.time;
                      }
                      if (k.time > me + pe) {
                        var e = ge.slice();
                        ge.length = 0;
                        for (var t = 0; t < e.length; t++) {
                          var r,
                            n = e[t];
                          (r = n).func.apply(r, a(n.args));
                        }
                        me = k.time;
                      }
                    })();
                  }),
                    (this.getBrightness = function(e, t, i) {
                      return e < 0 || t < 0 || i < 0 || e >= _ - 1 || i >= _ - 1
                        ? t >= v
                          ? 1
                          : 0.6
                        : t >= T.lightDepths[e][i] + 1
                        ? 1
                        : 0.6;
                    }),
                    (k.getBrightness = this.getBrightness),
                    (this.addBlockCheckLit = function(e, t, i) {
                      var n = this.lightDepths[e][i];
                      if (t >= n) {
                        if (Math.floor(t / g) != Math.floor(n / g)) {
                          var r = k.world.getBlockID(e, n, i);
                          k.world.setBlockID(0, e, n, i),
                            k.world.setBlockID(r, e, n, i);
                        }
                        this.lightDepths[e][i] = t;
                      }
                    }),
                    (this.removeBlockCheckLit = function(e, t, i) {
                      var n = this.lightDepths[e][i];
                      if (t >= n) {
                        for (
                          var r = 0, o = t;
                          (0 == r ||
                            r == this.redflowerID ||
                            r == this.yellowflowerID ||
                            r == this.bushID ||
                            r == this.redmushroomID ||
                            r == this.brownmushroomID ||
                            r == this.glassID ||
                            r == this.leafID ||
                            r == this.emptySpongeID) &&
                          o >= 0;

                        )
                          (o -= 1), (r = k.world.getBlockID(e, o, i));
                        return (
                          Math.floor(o / g) != Math.floor(n / g) &&
                            (k.world.setBlockID(0, e, o, i),
                            k.world.setBlockID(r, e, o, i)),
                          (this.lightDepths[e][i] = o),
                          1
                        );
                      }
                      return 0.6;
                    });
                  var H = function e() {
                      var t = !1;
                      if (
                        (T.hostInfo &&
                          null != T.hostInfo.spawnPoint &&
                          null != T.hostInfo.spawnPoint &&
                          (t = !0),
                        t)
                      )
                        k.entities.setPosition(
                          k.playerEntity,
                          T.hostInfo.spawnPoint.x,
                          T.hostInfo.spawnPoint.y,
                          T.hostInfo.spawnPoint.z
                        );
                      else {
                        for (var i = 0, n = 0; i < v && n < 50; ) {
                          var r =
                              Math.floor(C - _ / 4 + Math.random() * (_ / 2)) +
                              0.5,
                            o =
                              Math.floor(C - _ / 4 + Math.random() * (_ / 2)) +
                              0.5,
                            a = k.pick([r, 100, o], [0, -1, 0], 1e3, !0);
                          null != a && (i = a.position[1]), ++n;
                        }
                        if (n >= 50) return void setTimeout(e, 100);
                        k.entities.setPosition(
                          k.playerEntity,
                          a.position[0],
                          a.position[1] + 1,
                          a.position[2]
                        );
                      }
                      m.hide(),
                        T.updateResetPosition(),
                        (T.playerSpawned = !0),
                        setTimeout(function() {
                          k.entities.setPhysicsInterpolation(
                            k.playerEntity,
                            !0
                          );
                        }, 100);
                    },
                    W = i(504)(k),
                    X = (i(505)(k), i(506)(k, g), i(507)),
                    Y = i(508),
                    K = [
                      "grass",
                      "dirt",
                      "grass_dirt",
                      "stone",
                      "wood",
                      "rock",
                      "bedrock",
                      "sand",
                      "gravel",
                      "tree_top",
                      "tree_side",
                      "lava",
                      "rock_gold",
                      "rock_bronze",
                      "rock_coal",
                      "gold",
                      "sponge",
                      "color0",
                      "color1",
                      "color2",
                      "color3",
                      "color4",
                      "color5",
                      "color6",
                      "color7",
                      "color8",
                      "color9",
                      "color10",
                      "color11",
                      "color12",
                      "color13",
                      "color14",
                      "color15"
                    ],
                    Q = [
                      "leaves_opaque",
                      "glass",
                      "water",
                      "bush",
                      "red_flower",
                      "yellow_flower",
                      "red_mushroom",
                      "brown_mushroom"
                    ];
                  for (L = 0; L < K.length; L++) {
                    var q = null;
                    "lava" == (Z = K[L]) && (q = [0.4, 0, 0, 0.95]),
                      k.registry.registerMaterial(Z, q, Z + ".png");
                  }
                  for (L = 0; L < Q.length; L++) {
                    var Z;
                    q = null;
                    "water" == (Z = Q[L]) && (q = [0, 0, 0.4, 0.85]);
                    k.registry.registerMaterial(Z, q, Z + ".png", !0);
                  }
                  k.registry.registerMaterial(
                    "empty_sponge",
                    [0, 0, 0, 0],
                    null,
                    !0
                  );
                  var J = [],
                    $ = [null, null, null, 8, 5, 6, 15, 16];
                  for (L = 3; L < 8; L++) {
                    var ee = Q[L],
                      te = X(k);
                    ((oe = k.rendering.makeStandardMaterial(
                      ee + "Mat"
                    )).diffuseTexture = new BABYLON.Texture(
                      "assets/textures/" + ee + ".png",
                      scene,
                      !0,
                      !0,
                      1
                    )),
                      (oe.diffuseTexture.hasAlpha = !0),
                      (oe.diffuseTexture.getAlphaFromRGB = !0),
                      (te.material = oe);
                    var ie = $[L],
                      ne = k.registry.registerBlock(ie, {
                        material: [null, ee, null, null, null, null],
                        opaque: !1,
                        blockMesh: te
                      });
                    J.push(ne);
                  }
                  (this.grassID = k.registry.registerBlock(1, {
                    material: ["grass", "dirt", "grass_dirt"]
                  })),
                    (this.stoneID = k.registry.registerBlock(2, {
                      material: "stone"
                    })),
                    (this.dirtID = k.registry.registerBlock(3, {
                      material: "dirt"
                    })),
                    (this.woodID = k.registry.registerBlock(4, {
                      material: "wood"
                    })),
                    (this.redflowerID = J[1]),
                    (this.yellowflowerID = J[2]),
                    (this.waterID = k.registry.registerBlock(7, {
                      material: "water",
                      opaque: !1,
                      solid: !1,
                      fluid: !0,
                      fluidDensity: 1,
                      viscosity: 0.5
                    })),
                    (this.bushID = J[0]),
                    (this.rockID = k.registry.registerBlock(9, {
                      material: "rock"
                    })),
                    (this.bedrockID = k.registry.registerBlock(10, {
                      material: "bedrock"
                    })),
                    (this.sandID = k.registry.registerBlock(11, {
                      material: "sand"
                    })),
                    (this.gravelID = k.registry.registerBlock(12, {
                      material: "gravel"
                    })),
                    (this.treeID = k.registry.registerBlock(13, {
                      material: ["tree_top", "tree_top", "tree_side"]
                    })),
                    (this.leafID = k.registry.registerBlock(14, {
                      material: "leaves_opaque",
                      opaque: !1
                    })),
                    (this.redmushroomID = J[3]),
                    (this.brownmushroomID = J[4]),
                    (this.lavaID = k.registry.registerBlock(17, {
                      material: "lava",
                      solid: !1,
                      fluid: !0,
                      fluidDensity: 1,
                      viscosity: 0.5
                    })),
                    (this.rockGoldID = k.registry.registerBlock(18, {
                      material: "rock_gold"
                    })),
                    (this.rockbronzeID = k.registry.registerBlock(19, {
                      material: "rock_bronze"
                    })),
                    (this.rockcoalID = k.registry.registerBlock(20, {
                      material: "rock_coal"
                    })),
                    (this.goldID = k.registry.registerBlock(21, {
                      material: "gold"
                    })),
                    (this.spongeID = k.registry.registerBlock(22, {
                      material: "sponge"
                    })),
                    (this.glassID = k.registry.registerBlock(23, {
                      material: "glass",
                      opaque: !1
                    })),
                    (this.colorBlockArray = []);
                  for (L = 0; L < 16; L++) {
                    var re = k.registry.registerBlock(24 + L, {
                      material: "color" + L
                    });
                    this.colorBlockArray.push(re);
                  }
                  this.emptySpongeID = k.registry.registerBlock(40, {
                    material: "empty_sponge",
                    opaque: !1,
                    solid: !1
                  });
                  var oe;
                  te = Y(k);
                  ((oe = k.rendering.makeStandardMaterial(
                    ee + "Mat"
                  )).diffuseTexture = k.waterTexture),
                    (oe.alpha = 0.85),
                    (oe.useAlphaFromDiffuseTexture = !0),
                    (oe.backFaceCulling = !1),
                    (oe.disableLighting = !0),
                    (oe.emissiveColor = new BABYLON.Color3(0.6, 0.6, 0.6)),
                    (te.material = oe),
                    (this.waterHackID = k.registry.registerBlock(41, {
                      material: [null, "water", null, null, null, null],
                      opaque: !1,
                      solid: !1,
                      fluid: !0,
                      fluidDensity: 1,
                      viscosity: 0.5,
                      blockMesh: te
                    })),
                    (this.soundArray = [
                      null,
                      { id: "grass", volume: 0.9, pitch: 1 },
                      { id: "stone", volume: 1, pitch: 1 },
                      { id: "grass", volume: 0.8, pitch: 1 },
                      { id: "wood", volume: 1, pitch: 1 },
                      null,
                      null,
                      null,
                      null,
                      { id: "stone", volume: 1, pitch: 1 },
                      null,
                      { id: "gravel", volume: 0.8, pitch: 1 },
                      { id: "gravel", volume: 0.8, pitch: 1 },
                      { id: "wood", volume: 1, pitch: 1 },
                      { id: "grass", volume: 1, pitch: 0.4 },
                      null,
                      null,
                      null,
                      { id: "stone", volume: 1, pitch: 1 },
                      { id: "stone", volume: 1, pitch: 1 },
                      { id: "stone", volume: 1, pitch: 1 },
                      { id: "metal", volume: 0.7, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 0.9 },
                      { id: "metal", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 },
                      { id: "cloth", volume: 1, pitch: 1 }
                    ]),
                    (this.blockArray = [
                      this.grassID,
                      this.stoneID,
                      this.dirtID,
                      this.woodID,
                      this.redflowerID,
                      this.yellowflowerID,
                      this.waterID,
                      this.bushID,
                      this.rockID,
                      this.bedrockID,
                      this.sandID,
                      this.gravelID,
                      this.treeID,
                      this.leafID,
                      this.redmushroomID,
                      this.brownmushroomID,
                      this.lavaID,
                      this.rockGoldID,
                      this.rockbronzeID,
                      this.rockcoalID,
                      this.goldID,
                      this.spongeID,
                      this.glassID
                    ]);
                  for (L = 0; L < this.colorBlockArray.length; L++)
                    this.blockArray.push(this.colorBlockArray[L]);
                  var ae = i(509)(k, this.blockArray);
                  ae.setBlock(j),
                    window.addEventListener("beforeunload", function(e) {
                      !T.playerSpawned ||
                        b ||
                        E ||
                        (e.preventDefault(), (e.returnValue = ""));
                    }),
                    document.addEventListener("mousewheel", Ae, !1),
                    document.addEventListener("DOMMouseScroll", Ae, !1),
                    k.inputs.down.on("fire", function() {
                      if (k.targetedBlock) {
                        var e = {
                          targetedBlockBlockID: k.targetedBlock.blockID,
                          targetedBlockPosition: k.targetedBlock.position,
                          targetedBlockAdjacentPosition:
                            k.targetedBlock.adjacent,
                          chosenBlock: j,
                          addMode: k.addMode
                        };
                        k.addMode && (e.localPlayer = !0);
                        var t = T.handleFireEvent(e);
                        delete e.localPlayer,
                          null != T.player && t && T.player.emitFireEvent(e);
                      }
                    }),
                    k.inputs.down.on("mid-fire", function() {
                      if (k.targetedBlock) {
                        var e = k.targetedBlock.blockID;
                        if (
                          e == T.rockcoalID ||
                          e == T.rockbronzeID ||
                          e == T.rockGoldID
                        )
                          return;
                        1 == e && (e = 3),
                          U.pick(e),
                          (j = e - 1),
                          ae.setBlock(j);
                      }
                    }),
                    k.inputs.down.on("alt-fire", function() {
                      k.addMode
                        ? (k.addMode = !1)
                        : ((k.addMode = !0), ae.setBlock(j)),
                        k.resetTargetBlock(),
                        k.emit("targetBlockChanged", k.targetedBlock);
                    }),
                    document.addEventListener(
                      "keydown",
                      function(e) {
                        var t = e.keyCode;
                        if (
                          (8 == t && e.preventDefault(),
                          e.ctrlKey && e.preventDefault(),
                          !z.isOpen && se)
                        )
                          if (((se = !1), 27 == t && c.isOpen)) c.close();
                          else if (
                            (27 == t &&
                              (G.isOpen
                                ? G.close()
                                : (G.open(), V.isOpen && V.close())),
                            !G.isOpen &&
                              (!c || !c.isOpen) &&
                              t >= 49 &&
                              t <= 57)
                          ) {
                            var i = t - 49;
                            U.setIndex(i),
                              (j = U.currentId - 1),
                              ae.setBlock(j);
                          }
                      },
                      !1
                    ),
                    document.addEventListener(
                      "keyup",
                      function(e) {
                        se = !0;
                      },
                      !1
                    );
                  var se = !0;
                  k.inputs.down.on("build", function(e, t) {
                    G.isOpen || c.isOpen || V.open();
                  }),
                    k.inputs.down.on("chat", function(e, t) {
                      G.isOpen || c.isOpen || (V.isOpen && V.close(), c.open());
                    }),
                    k.inputs.down.on("fog", function(e, t) {
                      G.isOpen || c.isOpen || ye();
                    }),
                    k.inputs.down.on("saveLoc", function(e, t) {
                      G.isOpen || c.isOpen || T.updateResetPosition();
                    }),
                    k.inputs.down.on("loadLoc", function(e, t) {
                      G.isOpen || c.isOpen || T.applyResetPosition();
                    }),
                    k.inputs.down.on("spawnSteve", function(e, t) {
                      G.isOpen || c.isOpen || T.spawnSteve();
                    });
                  var ce = !1;
                  document.addEventListener(
                    "pointerlockchange",
                    function(e) {
                      var t = !1;
                      c && (t = c.isOpen),
                        null != document.pointerLockElement ||
                        !ce ||
                        V.isOpen ||
                        t ||
                        z.isOpen
                          ? ((ce = !0),
                            (k.inputs.state.forward = !1),
                            (k.inputs.state.backward = !1),
                            (k.inputs.state.left = !1),
                            (k.inputs.state.right = !1),
                            t && se && c.close())
                          : G.open();
                    },
                    !1
                  ),
                    window.addEventListener("resize", function(e) {
                      G.resize(),
                        m.resize(),
                        z.resize(),
                        U.resize(),
                        c && c.resize(),
                        k.version && k.version.resize(),
                        V.resize();
                    }),
                    k.on("setPreviewBlock", function(e) {
                      (j = e - 1), ae.setBlock(j);
                    });
                  var ue = {
                    position: [
                      D.playerStart[0],
                      D.playerStart[1],
                      D.playerStart[2]
                    ],
                    rotation: [0, 0, 0]
                  };
                  (this.setPlayerPosition = function(e) {
                    var t = k.playerEntity;
                    k.entities.setPhysicsInterpolation(t, !1),
                      k.entities.setPosition(t, e[0], e[1] + 0.5, e[2]),
                      setTimeout(function() {
                        k.entities.setPhysicsInterpolation(t, !0);
                      }, 100);
                  }),
                    (this.updateResetPosition = function() {
                      var e = k.playerEntity,
                        t = k.entities.getPosition(e);
                      (ue.position[0] = t[0]),
                        (ue.position[1] = t[1]),
                        (ue.position[2] = t[2]),
                        (ue.rotation[0] = 0),
                        (ue.rotation[1] =
                          k.rendering._rotationHolder.rotation.y),
                        (ue.rotation[2] = 0),
                        T.applyResetPosition();
                    }),
                    (this.applyResetPosition = function() {
                      k.entities.setPhysicsInterpolation(k.playerEntity, !1);
                      var e = k.playerEntity;
                      k.entities.setPosition(
                        e,
                        ue.position[0],
                        ue.position[1] + 0.5,
                        ue.position[2]
                      ),
                        (k.rendering._rotationHolder.rotation.x =
                          ue.rotation[0]),
                        (k.rendering._rotationHolder.rotation.y =
                          ue.rotation[1]),
                        (k.rendering._rotationHolder.rotation.z =
                          ue.rotation[2]),
                        setTimeout(function() {
                          k.entities.setPhysicsInterpolation(
                            k.playerEntity,
                            !0
                          );
                        }, 100);
                    }),
                    (this.steveArray = []),
                    (this.spawnSteve = function() {
                      var e = k.entities.getPositionData(k.playerEntity),
                        t = i(510),
                        n = e.position[0],
                        r = e.position[1] + 0.5,
                        o = e.position[2],
                        a = t(k, n, r, o);
                      T.steveArray.push(a);
                    });
                  var le = 250,
                    he = 0,
                    fe = [],
                    de = function(e, t) {
                      fe.push({ func: e, args: t });
                    },
                    pe = 1500,
                    me = 0,
                    ge = [],
                    _e = function(e, t) {
                      ge.push({ func: e, args: t });
                    };
                  (this.checkWaterBelowAdd = function(e, t, i) {
                    var n = this.waterID;
                    this.shouldWaterHaveSurface(e, t, i) &&
                      (n = this.waterHackID),
                      this.setBlock(n, e, t, i);
                    var r = k.world.getBlockID(e - 1, t, i),
                      o = k.world.getBlockID(e + 1, t, i),
                      a = k.world.getBlockID(e, t, i + 1),
                      s = k.world.getBlockID(e, t, i - 1);
                    if (r == this.waterID || r == this.waterHackID) {
                      n = this.waterID;
                      var c = k.world.getBlockID(e - 1, t + 1, i);
                      this.shouldWaterHaveSurface(e - 1, t, i) &&
                        0 != c &&
                        (n = this.waterHackID),
                        this.setBlock(n, e - 1, t, i);
                    }
                    if (o == this.waterID || o == this.waterHackID) {
                      n = this.waterID;
                      var u = k.world.getBlockID(e + 1, t + 1, i);
                      this.shouldWaterHaveSurface(e + 1, t, i) &&
                        0 != u &&
                        (n = this.waterHackID),
                        this.setBlock(n, e + 1, t, i);
                    }
                    if (a == this.waterID || a == this.waterHackID) {
                      n = this.waterID;
                      var l = k.world.getBlockID(e, t + 1, i + 1);
                      this.shouldWaterHaveSurface(e, t, i + 1) &&
                        0 != l &&
                        (n = this.waterHackID),
                        this.setBlock(n, e, t, i + 1);
                    }
                    if (s == this.waterID || s == this.waterHackID) {
                      n = this.waterID;
                      var h = k.world.getBlockID(e, t + 1, i - 1);
                      this.shouldWaterHaveSurface(e, t, i - 1) &&
                        0 != h &&
                        (n = this.waterHackID),
                        this.setBlock(n, e, t, i - 1);
                    }
                  }),
                    (this.checkWaterHackBelowDestroy = function(e, t, i) {
                      k.world.getBlockID(e, t, i) == this.waterHackID &&
                        this.addBlock(this.waterID, e, t, i);
                      var n,
                        r = k.world.getBlockID(e - 1, t, i),
                        o = k.world.getBlockID(e + 1, t, i),
                        a = k.world.getBlockID(e, t, i + 1),
                        s = k.world.getBlockID(e, t, i - 1);
                      if (r == this.waterID || r == this.waterHackID) {
                        n = this.waterID;
                        var c = k.world.getBlockID(e - 1, t + 1, i);
                        this.shouldWaterHaveSurface(e - 1, t, i) &&
                          0 != c &&
                          (n = this.waterHackID),
                          this.setBlock(n, e - 1, t, i);
                      }
                      if (o == this.waterID || o == this.waterHackID) {
                        n = this.waterID;
                        var u = k.world.getBlockID(e + 1, t + 1, i);
                        this.shouldWaterHaveSurface(e + 1, t, i) &&
                          0 != u &&
                          (n = this.waterHackID),
                          this.setBlock(n, e + 1, t, i);
                      }
                      if (a == this.waterID || a == this.waterHackID) {
                        n = this.waterID;
                        var l = k.world.getBlockID(e, t + 1, i + 1);
                        this.shouldWaterHaveSurface(e, t, i + 1) &&
                          0 != l &&
                          (n = this.waterHackID),
                          this.setBlock(n, e, t, i + 1);
                      }
                      if (s == this.waterID || s == this.waterHackID) {
                        n = this.waterID;
                        var h = k.world.getBlockID(e, t + 1, i - 1);
                        this.shouldWaterHaveSurface(e, t, i - 1) &&
                          0 != h &&
                          (n = this.waterHackID),
                          this.setBlock(n, e, t, i - 1);
                      }
                    }),
                    (this.shouldWaterHaveSurface = function(e, t, i) {
                      var n = k.world.getBlockID(e, t + 1, i),
                        r = k.world.getBlockID(e - 1, t + 1, i),
                        o = k.world.getBlockID(e + 1, t + 1, i),
                        a = k.world.getBlockID(e, t + 1, i + 1),
                        s = k.world.getBlockID(e, t + 1, i - 1);
                      return (
                        (0 == n || 0 == r || 0 == o || 0 == a || 0 == s) &&
                        n != this.waterID &&
                        r != this.waterID &&
                        o != this.waterID &&
                        a != this.waterID &&
                        s != this.waterID &&
                        n != this.waterHackID &&
                        r != this.waterHackID &&
                        o != this.waterHackID &&
                        a != this.waterHackID &&
                        s != this.waterHackID
                      );
                    }),
                    (this.addWater = function(e, t, i) {
                      if (
                        e < 0 ||
                        e >= k.worldSize - 1 ||
                        i < 0 ||
                        i >= k.worldSize - 1
                      )
                        return !1;
                      var n = this.waterID,
                        r = k.world.getBlockID(e, t + 1, i);
                      if (
                        (this.shouldWaterHaveSurface(e, t, i) &&
                          0 != r &&
                          r != this.emptySpongeID &&
                          (n = this.waterHackID),
                        this.addBlock(this.waterID, e, t, i),
                        n != this.waterID)
                      ) {
                        this.addBlock(n, e, t, i);
                        var o = k.world.getBlockID(e - 1, t, i),
                          a = k.world.getBlockID(e + 1, t, i),
                          s = k.world.getBlockID(e, t, i + 1),
                          c = k.world.getBlockID(e, t, i - 1),
                          u = k.world.getBlockID(e - 1, t + 1, i),
                          l = k.world.getBlockID(e + 1, t + 1, i),
                          h = k.world.getBlockID(e, t + 1, i + 1),
                          f = k.world.getBlockID(e, t + 1, i - 1);
                        o == this.waterID &&
                          0 != u &&
                          (k.setBlock(n, e - 1, t, i),
                          this.setBlockTilesArray(n, e - 1, t, i)),
                          a == this.waterID &&
                            0 != l &&
                            (k.setBlock(n, e + 1, t, i),
                            this.setBlockTilesArray(n, e - 1, t, i)),
                          s == this.waterID &&
                            0 != h &&
                            (k.setBlock(n, e, t, i + 1),
                            this.setBlockTilesArray(n, e - 1, t, i)),
                          c == this.waterID &&
                            0 != f &&
                            (k.setBlock(n, e, t, i - 1),
                            this.setBlockTilesArray(n, e - 1, t, i));
                      }
                      var d = k.world.getBlockID(e, t - 1, i);
                      return (
                        d == this.grassID &&
                          this.flagToRemoveGrass(e, t - 1, i),
                        d == this.lavaID &&
                          this.setBlock(this.stoneID, e, t - 1, i),
                        d == this.waterHackID &&
                          this.setBlock(this.waterID, e, t - 1, i),
                        !0
                      );
                    }),
                    (this.addLava = function(e, t, i) {
                      this.addBlock(this.lavaID, e, t, i);
                      var n = k.world.getBlockID(e, t - 1, i);
                      n == this.grassID && this.flagToRemoveGrass(e, t - 1, i),
                        n == this.waterID &&
                          this.setBlock(this.stoneID, e, t - 1, i);
                    }),
                    (this.checkNeighbours = function(e, t, i, n) {
                      if (
                        !(
                          e < 0 ||
                          e >= k.worldSize - 1 ||
                          i < 0 ||
                          i >= k.worldSize - 1
                        ) &&
                        0 == k.world.getBlockID(e, t, i)
                      ) {
                        var r = k.world.getBlockID(e, t + 1, i),
                          o = k.world.getBlockID(e - 1, t, i),
                          a = k.world.getBlockID(e + 1, t, i),
                          s = k.world.getBlockID(e, t, i + 1),
                          c = k.world.getBlockID(e, t, i - 1);
                        (r != T.lavaID &&
                          o != T.lavaID &&
                          a != T.lavaID &&
                          s != T.lavaID &&
                          c != T.lavaID) ||
                          setTimeout(function() {
                            T.addLava(e, t, i),
                              _e(T.checkNeighboursAsLava, [e, t, i]);
                          }, 1500),
                          (r != T.waterID &&
                            o != T.waterID &&
                            a != T.waterID &&
                            s != T.waterID &&
                            c != T.waterID &&
                            r != T.waterHackID &&
                            o != T.waterHackID &&
                            a != T.waterHackID &&
                            s != T.waterHackID &&
                            c != T.waterHackID) ||
                            setTimeout(function() {
                              T.addWater(e, t, i) &&
                                de(T.checkNeighboursAsWater, [e, t, i]);
                            }, 150),
                          n &&
                            setTimeout(function() {
                              T.checkWaterHackBelowDestroy(e, t - 1, i);
                            }, 160);
                      }
                    }),
                    (this.checkNeighboursAsWater = function(e, t, i) {
                      if (
                        !(
                          e <= 0 ||
                          e >= k.worldSize - 1 ||
                          i <= 0 ||
                          i >= k.worldSize - 1
                        )
                      ) {
                        var n = k.world.getBlockID(e, t - 1, i),
                          r = k.world.getBlockID(e - 1, t, i),
                          o = k.world.getBlockID(e + 1, t, i),
                          a = k.world.getBlockID(e, t, i + 1),
                          s = k.world.getBlockID(e, t, i - 1);
                        0 == n &&
                          T.addWater(e, t - 1, i) &&
                          de(T.checkNeighboursAsWater, [e, t - 1, i]),
                          0 == r &&
                            T.addWater(e - 1, t, i) &&
                            de(T.checkNeighboursAsWater, [e - 1, t, i]),
                          0 == o &&
                            T.addWater(e + 1, t, i) &&
                            de(T.checkNeighboursAsWater, [e + 1, t, i]),
                          0 == a &&
                            T.addWater(e, t, i + 1) &&
                            de(T.checkNeighboursAsWater, [e, t, i + 1]),
                          0 == s &&
                            T.addWater(e, t, i - 1) &&
                            de(T.checkNeighboursAsWater, [e, t, i - 1]);
                      }
                    }),
                    (this.checkNeighboursAsLava = function(e, t, i) {
                      if (
                        !(
                          e < 0 ||
                          e > k.worldSize - 1 ||
                          i < 0 ||
                          i > k.worldSize - 1
                        )
                      ) {
                        var n = k.world.getBlockID(e, t - 1, i),
                          r = k.world.getBlockID(e - 1, t, i),
                          o = k.world.getBlockID(e + 1, t, i),
                          a = k.world.getBlockID(e, t, i + 1),
                          s = k.world.getBlockID(e, t, i - 1);
                        0 == n &&
                          (T.addLava(e, t - 1, i),
                          _e(T.checkNeighboursAsLava, [e, t - 1, i])),
                          0 == r &&
                            (T.addLava(e - 1, t, i),
                            _e(T.checkNeighboursAsLava, [e - 1, t, i])),
                          0 == o &&
                            (T.addLava(e + 1, t, i),
                            _e(T.checkNeighboursAsLava, [e + 1, t, i])),
                          0 == a &&
                            (T.addLava(e, t, i + 1),
                            _e(T.checkNeighboursAsLava, [e, t, i + 1])),
                          0 == s &&
                            (T.addLava(e, t, i - 1),
                            _e(T.checkNeighboursAsLava, [e, t, i - 1]));
                      }
                    }),
                    (this.flagToGrowGrass = function(e, t, i) {
                      var n = P + Math.random() * (R - P);
                      setTimeout(function() {
                        if (k.world.getBlockID(e, t, i) == T.dirtID) {
                          var n = T.checkUpForBlocker(e, t, i);
                          (0 != n &&
                            n != T.redflowerID &&
                            n != T.yellowflowerID &&
                            n != T.bushID &&
                            n != T.redmushroomID &&
                            n != T.brownmushroomID &&
                            n != T.glassID &&
                            n != T.leafID) ||
                            T.setBlock(T.grassID, e, t, i);
                        }
                      }, n);
                    }),
                    (this.flagToRemoveGrass = function(e, t, i) {
                      var n = M + Math.random() * (O - M);
                      setTimeout(function() {
                        if (k.world.getBlockID(e, t, i) == T.grassID) {
                          var n = T.checkUpForBlocker(e, t, i);
                          0 != n &&
                            n != T.redflowerID &&
                            n != T.yellowflowerID &&
                            n != T.bushID &&
                            n != T.redmushroomID &&
                            n != T.brownmushroomID &&
                            n != T.glassID &&
                            n != T.leafID &&
                            T.setBlock(T.dirtID, e, t, i);
                        }
                      }, n);
                    }),
                    (this.checkBelowFoilage = function(e, t, i) {
                      var n = w + Math.random() * (I - w);
                      setTimeout(function() {
                        var n = k.world.getBlockID(e, t, i);
                        if (
                          n == T.redflowerID ||
                          n == T.yellowflowerID ||
                          n == T.bushID ||
                          n == T.redmushroomID ||
                          n == T.brownmushroomID
                        ) {
                          var r = k.world.getBlockID(e, t - 1, i);
                          r != T.grassID &&
                            r != T.dirtID &&
                            (T.setBlock(0, e, t, i),
                            de(T.checkNeighbours, [e, t, i]));
                        }
                      }, n);
                    }),
                    (this.checkAboveFoilage = function(e, t, i) {
                      var n = w + Math.random() * (I - w);
                      setTimeout(function() {
                        var n = k.world.getBlockID(e, t, i);
                        if (
                          (n == T.redflowerID ||
                            n == T.yellowflowerID ||
                            n == T.bushID ||
                            n == T.redmushroomID ||
                            n == T.brownmushroomID) &&
                          T.getBrightness(e, t, i) < 1
                        ) {
                          T.setBlock(0, e, t, i),
                            de(T.checkNeighbours, [e, t, i]);
                          var r = k.world.getBlockID(e, t + 1, i);
                          (r != T.sandID && r != T.gravelID) ||
                            T.checkDownSandGravel(e, t + 1, i, r);
                        }
                      }, n);
                    }),
                    (this.checkDownForGrass = function(e, t, i) {
                      for (
                        var n = 0, r = t;
                        (0 == n ||
                          n == this.redflowerID ||
                          n == this.yellowflowerID ||
                          n == this.bushID ||
                          n == this.redmushroomID ||
                          n == this.brownmushroomID ||
                          n == this.glassID ||
                          n == this.leafID) &&
                        r >= 0;

                      )
                        (r -= 1),
                          ((n = k.world.getBlockID(e, r, i)) !=
                            this.redflowerID &&
                            n != this.yellowflowerID &&
                            n != this.bushID &&
                            n != this.redmushroomID &&
                            n != this.brownmushroomID) ||
                            T.checkAboveFoilage(e, r, i);
                      n == this.grassID && this.flagToRemoveGrass(e, r, i);
                    }),
                    (this.checkDownForDirt = function(e, t, i) {
                      for (
                        var n = 0, r = t;
                        (0 == n ||
                          n == this.redflowerID ||
                          n == this.yellowflowerID ||
                          n == this.bushID ||
                          n == this.redmushroomID ||
                          n == this.brownmushroomID ||
                          n == this.glassID ||
                          n == this.leafID) &&
                        r >= 0;

                      )
                        (r -= 1), (n = k.world.getBlockID(e, r, i));
                      n == this.dirtID && this.flagToGrowGrass(e, r, i);
                    }),
                    (this.checkDownSandGravel = function(e, t, i, n) {
                      for (
                        var r = 0, o = t;
                        (0 == r ||
                          r == this.waterID ||
                          r == this.waterHackID ||
                          r == this.lavaID ||
                          r == this.emptySpongeID) &&
                        o >= 0;

                      )
                        (o -= 1), (r = k.world.getBlockID(e, o, i));
                      if (0 != r) {
                        T.setBlock(0, e, t, i), T.setBlock(n, e, o + 1, i);
                        var a = k.world.getBlockID(e, t + 1, i);
                        (a != T.sandID && a != T.gravelID) ||
                          T.checkDownSandGravel(e, t + 1, i, a);
                        T.removeBlockCheckLit(e, t, i);
                        T.checkNeighbours(e, t, i, !1);
                      }
                    }),
                    (this.checkUpForBlocker = function(e, t, i) {
                      for (
                        var n = 0, r = t;
                        (0 == n ||
                          n == this.redflowerID ||
                          n == this.yellowflowerID ||
                          n == this.bushID ||
                          n == this.redmushroomID ||
                          n == this.brownmushroomID ||
                          n == this.glassID ||
                          n == this.leafID) &&
                        r < 64;

                      )
                        (r += 1), (n = k.world.getBlockID(e, r, i));
                      return n;
                    });
                  var ve = {};
                  (this.updateRemainingSponges = function() {
                    for (var e in ve) {
                      var t = ve[e];
                      T.checkAddSponge(t.x, t.y, t.z, !1);
                    }
                  }),
                    (this.checkAddSponge = function(e, t, i, n) {
                      (n || null == n) &&
                        (ve["s" + e + t + i] = { x: e, y: t, z: i });
                      for (
                        var r = Math.max(e - 2, 1),
                          o = Math.min(e + 2, _ - 3),
                          a = Math.max(i - 2, 1),
                          s = Math.min(i + 2, _ - 3),
                          c = t - 2;
                        c <= t + 2;
                        c++
                      )
                        for (var u = r; u <= o; u++)
                          for (var l = a; l <= s; l++) {
                            var h = k.world.getBlockID(u, c, l);
                            (h != T.waterID && 0 != h) ||
                              (T.setBlock(T.emptySpongeID, u, c, l),
                              T.removeBlockCheckLit(u, c, l));
                          }
                    }),
                    (this.checkRemoveSponge = function(e, t, i) {
                      delete ve["s" + e + t + i];
                      for (
                        var n = Math.max(e - 2, 1),
                          r = Math.min(e + 2, _ - 3),
                          o = Math.max(i - 2, 1),
                          a = Math.min(i + 2, _ - 3),
                          s = t - 2;
                        s <= t + 2;
                        s++
                      )
                        for (var c = n; c <= r; c++)
                          for (var u = o; u <= a; u++) {
                            var l;
                            (l =
                              c == e - 2 ||
                              c == e + 2 ||
                              u == i - 2 ||
                              u == i + 2),
                              k.world.getBlockID(c, s, u) == T.emptySpongeID &&
                                (T.setBlock(0, c, s, u),
                                l && de(T.checkNeighbours, [c, s, u]));
                          }
                      T.updateRemainingSponges();
                    });
                  var ye = function() {
                    k.settings.drawDistance++,
                      k.settings.drawDistance > 3 &&
                        (k.settings.drawDistance = 0),
                      be(k.settings.drawDistance),
                      k.emit("saveSettings");
                  };
                  k.on("cycleDrawDistance", ye);
                  var be = function(e) {
                    switch (((k.settings.drawDistance = e), e)) {
                      case 0:
                        (k.rendering.fogWorld = 0.002),
                          (k.rendering.fogWater = 0.08),
                          (k.rendering.fogLava = 0.2),
                          (k.rendering._camera.maxZ = 800);
                        break;
                      case 1:
                        (k.rendering.fogWorld = 0.008),
                          (k.rendering.fogWater = 0.08),
                          (k.rendering.fogLava = 0.2),
                          (k.rendering._camera.maxZ = 200);
                        break;
                      case 2:
                        (k.rendering.fogWorld = 0.05),
                          (k.rendering.fogWater = 0.1),
                          (k.rendering.fogLava = 0.2),
                          (k.rendering._camera.maxZ = 50);
                        break;
                      case 3:
                        (k.rendering.fogWorld = 0.2),
                          (k.rendering.fogWater = 0.2),
                          (k.rendering.fogLava = 0.2),
                          (k.rendering._camera.maxZ = 10);
                    }
                    k.rendering._camLocBlock += 1;
                  };
                  be(k.settings.drawDistance),
                    k.on("toggleMusic", function() {
                      k.settings.music
                        ? ((k.settings.music = !1),
                          T.soundPlayer.setMusicVolume(0))
                        : ((k.settings.music = !0),
                          T.soundPlayer.setMusicVolume(1)),
                        (T.soundPlayer.musicOn = k.settings.music),
                        k.emit("saveSettings");
                    }),
                    k.on("toggleSound", function() {
                      k.settings.sound
                        ? (k.settings.sound = !1)
                        : (k.settings.sound = !0),
                        (T.soundPlayer.soundOn = k.settings.sound),
                        k.emit("saveSettings");
                    }),
                    k.on("toggleInvertMouse", function() {
                      k.settings.invert
                        ? (k.settings.invert = !1)
                        : (k.settings.invert = !0),
                        (k.cameraControls.inverseY = k.settings.invert),
                        k.emit("saveSettings");
                    }),
                    k.on("toggleFps", function() {
                      k.settings.fps
                        ? (k.settings.fps = !1)
                        : (k.settings.fps = !0),
                        (k.version.showFps = k.settings.fps),
                        (k.version.lastRedraw = 0),
                        k.version.redraw(),
                        k.emit("saveSettings");
                    }),
                    k.on("saveSettings", function() {
                      localStorage.setItem(
                        "settings",
                        JSON.stringify(k.settings)
                      );
                    }),
                    setInterval(function() {
                      if (null != t.player) {
                        var e = k.entities.getPositionData(k.playerEntity),
                          i = k.rendering._rotationHolder.rotation;
                        t.player.setPosition(
                          {
                            x: e.position[0],
                            y: e.position[1],
                            z: e.position[2]
                          },
                          i,
                          t.playerSpawned
                        );
                      }
                    }, 50),
                    (k.setName = function(e) {
                      T.setName && T.setName(e);
                    }),
                    (this.onHostDisconnect = function() {
                      E ||
                        (this.worldInitialized &&
                          (G.isOpen && G.close(),
                          c.isOpen && c.close(),
                          V.isOpen && V.close()),
                        z && z.show(3),
                        (b = !0));
                    }),
                    (this.onHostFull = function() {
                      z && z.show(2);
                    }),
                    (this.onKicked = function() {
                      (E = !0), z && z.show(5);
                    }),
                    (this.addPlayer = function(e, t, n, r, o) {
                      return i(512)(k, e, t, n, r, o);
                    }),
                    (this.getPlayerPosition = function() {
                      return k.entities.getPosition(k.playerEntity);
                    }),
                    (this.getPlayerRotation = function() {
                      return k.rendering._rotationHolder.rotation;
                    }),
                    (this.setBlock = function(e, t, i, n) {
                      var r = t.length ? t : [t, i, n];
                      this.setBlockTilesArray(e, r),
                        k.setBlock(e, r),
                        void 0 !== this.changedBlockHandler &&
                          null !== this.changedBlockHandler &&
                          this.changedBlockHandler.setBlock(r, e);
                    }),
                    (this.addBlock = function(e, t, i, n) {
                      var r = t.length ? t : [t, i, n],
                        o = !!t.length && i;
                      return (
                        this.setBlockTilesArray(e, r),
                        !!k.addBlock(e, r, o) &&
                          (void 0 !== this.changedBlockHandler &&
                            null !== this.changedBlockHandler &&
                            this.changedBlockHandler.addBlock(r, e),
                          e != this.leafID &&
                            e != this.glassID &&
                            e != this.redflowerID &&
                            e != this.yellowflowerID &&
                            e != this.bushID &&
                            e != this.redmushroomID &&
                            e != this.brownmushroomID &&
                            this.addBlockCheckLit(r[0], r[1], r[2]),
                          !0)
                      );
                    }),
                    (this.handleChangedBlocks = function(e) {
                      for (var t in e) {
                        var i = e[t];
                        this.setBlockTilesArray(i.bt, i.p),
                          this.worldInitialized &&
                            (i.add
                              ? this.addBlock(i.bt, i.p)
                              : (this.setBlock(i.bt, i.p),
                                0 == i.bt &&
                                  this.removeBlockCheckLit(
                                    i.p[0],
                                    i.p[1],
                                    i.p[2]
                                  )));
                      }
                      this.worldGenerated && !this.worldInitialized && Ee();
                    }),
                    (this.syncSavedWorld = function() {
                      var e = n.default.getInstance().getChangedBlocks();
                      for (var t in e) {
                        var i = e[t];
                        this.setBlockTilesArray(i.bt, i.p);
                      }
                    }),
                    (this.setBlockTilesArray = function(e, t, i, n) {
                      if (y) {
                        var r = t.length ? t : [t, i, n];
                        y[(r[1] * _ + r[2]) * _ + r[0]] = e;
                      }
                    }),
                    (this.updateChatLog = function(e) {
                      void 0 !== c && c.update(e);
                    });
                } else console.log("seed must be an integer.");
                function Ee() {
                  !(function() {
                    for (var e = 0; e < _; ++e)
                      for (var t = 0; t < 64; ++t)
                        for (var i = 0; i < _; ++i) {
                          var n = e,
                            r = t,
                            o = i,
                            a = y[(r * _ + o) * _ + n],
                            s = 0;
                          null != T.lightDepths[n][o] &&
                            (s = T.lightDepths[n][o]),
                            0 != a &&
                              a != T.redflowerID &&
                              a != T.yellowflowerID &&
                              a != T.bushID &&
                              a != T.redmushroomID &&
                              a != T.brownmushroomID &&
                              a != T.glassID &&
                              a != T.leafID &&
                              a != T.emptySpongeID &&
                              r >= s &&
                              (s = r),
                            (T.lightDepths[n][o] = s);
                        }
                  })(),
                    k.world.on("worldDataNeeded", Te),
                    k.setPaused(!1),
                    (c = o(k)),
                    (k.version = d()),
                    (k.version.showFps = k.settings.fps),
                    k.entities.setPhysicsInterpolation(k.playerEntity, !1),
                    setTimeout(H, 100),
                    (T.worldInitialized = !0),
                    k.hostInfo.gameFull && (G.isOpen && G.close(!0), z.show(2)),
                    null != A.get("host")
                      ? (G.isOpen && G.close(!0),
                        T.noWebrtcJoin ? z.show(6) : z.show(0))
                      : null != A.get("join") &&
                        (G.isOpen && G.close(!0), z.show(1));
                }
                function Te(e, t, i, n, r) {
                  var o = e.split("|"),
                    a = parseInt(o[0], 10),
                    s = parseInt(o[1], 10),
                    c = parseInt(o[2], 10),
                    u = a * g,
                    l = s * g,
                    h = c * g,
                    f = !1;
                  if (
                    ((a < 0 || s < 0 || c < 0) && (f = !0),
                    (a >= _ / g || s >= 64 / g || c >= _ / g) && (f = !0),
                    f)
                  ) {
                    for (var d = T.bedrockID, p = 0; p < t.shape[0]; ++p)
                      for (var m = 0; m < t.shape[1]; ++m)
                        for (var b = 0; b < t.shape[2]; ++b) {
                          (d = 0),
                            (E = m - 1 + l) <= v && (d = T.waterID),
                            E <= v - 2 && (d = T.bedrockID),
                            t.set(p, m, b, d);
                        }
                    k.world.setChunkData(e, t);
                  } else {
                    for (d = T.bedrockID, p = 0; p < t.shape[0]; ++p)
                      for (m = 0; m < t.shape[1]; ++m)
                        for (b = 0; b < t.shape[2]; ++b) {
                          var E,
                            A = p - 1 + u,
                            x = b - 1 + h;
                          (null != (d = y[((E = m - 1 + l) * _ + x) * _ + A]) &&
                            0 != E) ||
                            (d = T.bedrockID),
                            (A < 0 || x < 0 || p + u >= _ || b + h >= _) &&
                              ((d = 0),
                              E <= v && (d = T.waterID),
                              E <= v - 2 && (d = T.bedrockID)),
                            t.set(p, m, b, d);
                        }
                    k.world.setChunkData(e, t);
                  }
                }
                function Ae(e) {
                  e.ctrlKey && e.preventDefault();
                }
              }
            },
            {
              key: "handleFireEvent",
              value: function(e) {
                var t = e.targetedBlockBlockID,
                  i = e.targetedBlockPosition,
                  n = e.targetedBlockAdjacentPosition,
                  r = e.addMode,
                  o = e.chosenBlock,
                  a = e.localPlayer;
                if ("undefined" == typeof noa)
                  return (
                    r
                      ? this.setBlockTilesArray(this.blockArray[o], n)
                      : this.setBlockTilesArray(0, i),
                    !1
                  );
                if (r) {
                  if (n[1] >= noa.worldHeight) return !1;
                  var s = noa.world.getBlockID(n[0], n[1], n[2]);
                  if (!this.addBlock(this.blockArray[o], n, a)) return !1;
                  var c = this.blockArray[o];
                  return (
                    c == this.dirtID && this.flagToGrowGrass(n[0], n[1], n[2]),
                    this.checkDownForGrass(n[0], n[1], n[2]),
                    ((v = noa.world.getBlockID(n[0], n[1] - 1, n[2])) !=
                      this.waterID &&
                      v != this.waterHackID) ||
                      0 != s ||
                      this.checkWaterBelowAdd(n[0], n[1] - 1, n[2]),
                    (c != this.sandID && c != this.gravelID) ||
                      this.checkDownSandGravel(n[0], n[1], n[2], c),
                    c == this.spongeID && this.checkAddSponge(n[0], n[1], n[2]),
                    (c != this.redflowerID &&
                      c != this.yellowflowerID &&
                      c != this.bushID &&
                      c != this.redmushroomID &&
                      c != this.brownmushroomID) ||
                      (v != this.dirtID &&
                        v != this.grassID &&
                        this.checkBelowFoilage(n[0], n[1], n[2]),
                      this.checkAboveFoilage(n[0], n[1], n[2])),
                    !0
                  );
                }
                if (t != this.bedrockID) {
                  var u = noa.registry.getBlockFaceMaterialAccessor()(t, 0),
                    l = noa.registry._textures[u];
                  this.setBlock(0, i);
                  var h = i,
                    f = this.removeBlockCheckLit(h[0], h[1], h[2]),
                    d = new BABYLON.Vector3(h[0], h[1], h[2]),
                    p = BABYLON.Vector3.Distance(
                      noa.rendering._cameraHolder.position,
                      d
                    );
                  if (null != l && p < 15)
                    this.addParticles(
                      "debris",
                      l,
                      f
                    ).mesh.position.copyFromFloats(
                      h[0] + 0.5,
                      h[1] + 0.5,
                      h[2] + 0.5
                    );
                  this.checkDownForDirt(i[0], i[1], i[2]),
                    t == this.spongeID &&
                      this.checkRemoveSponge(i[0], i[1], i[2]);
                  var m = noa.world.getBlockID(h[0], h[1] + 1, h[2]);
                  (t != this.dirtID && t != this.grassID) ||
                    (m != this.redflowerID &&
                      m != this.yellowflowerID &&
                      m != this.bushID &&
                      m != this.redmushroomID &&
                      m != this.brownmushroomID) ||
                    this.checkBelowFoilage(i[0], i[1] + 1, i[2]),
                    (m != this.sandID && m != this.gravelID) ||
                      this.checkDownSandGravel(i[0], i[1] + 1, i[2], m);
                  var g = this.soundArray[t];
                  if (null != g && p < 15) {
                    var _ = 1 - p / 25;
                    this.soundPlayer.play(g.id, g.volume * _, g.pitch);
                  }
                  var v,
                    y = !1;
                  return (
                    ((v = noa.world.getBlockID(h[0], h[1] - 1, h[2])) !=
                      this.waterID &&
                      v != this.waterHackID) ||
                      (y = !0),
                    this.checkNeighbours(i[0], i[1], i[2], y),
                    !0
                  );
                }
              }
            },
            {
              key: "setChangedBlockHandler",
              value: function(e) {
                this.changedBlockHandler = e;
              }
            },
            {
              key: "setPlayer",
              value: function(e) {
                this.player = e;
              }
            },
            {
              key: "setHostInfo",
              value: function(e) {
                if (
                  ((this.hostInfo = e),
                  this.hostInfo.gameFull || this.hostInfo.noSuchGame)
                ) {
                  if (!t) var t = i(194)({});
                  this.hostInfo.noSuchGame
                    ? (t.show(4), (document.body.style.overflow = "hidden"))
                    : t.show(2),
                    window.addEventListener("resize", function(e) {
                      t.resize();
                    });
                }
              }
            },
            {
              key: "getPlayerNames",
              value: function() {
                return this.network.getSpawnedPlayerNames();
              }
            },
            {
              key: "kickPlayer",
              value: function(e) {
                return this.network.kickPlayer(e);
              }
            },
            {
              key: "teleportToPlayer",
              value: function(e) {
                for (var t in this.network.state.players)
                  if (this.network.state.players[t].state.name === e) {
                    var i = this.network.state.players[t].state.position;
                    return (
                      noa.entities.setPhysicsInterpolation(
                        noa.playerEntity,
                        !1
                      ),
                      noa.entities.setPosition(noa.playerEntity, i.x, i.y, i.z),
                      setTimeout(function() {
                        noa.entities.setPhysicsInterpolation(
                          noa.playerEntity,
                          !0
                        );
                      }, 100),
                      "Teleporting to " + e + " " + JSON.stringify(i)
                    );
                  }
                return "No such player";
              }
            },
            {
              key: "setSpawn",
              value: function() {
                return this.network.setSpawnToCurrentPosition();
              }
            },
            {
              key: "teleportTo",
              value: function(e) {
                var t = this.network.getPositionFor(e);
                return null === t
                  ? e + ": no such player"
                  : (this.setPlayerPosition([t.x, t.y, t.z]),
                    "teleported to " + e);
              }
            }
          ]) && s(t.prototype, r),
          c && s(t, c),
          e
        );
      })(),
      u = (t.a = c);
  },
  function(e, t, i) {
    var n = i(6),
      r = i(5).document,
      o = n(r) && n(r.createElement);
    e.exports = function(e) {
      return o ? r.createElement(e) : {};
    };
  },
  function(e, t, i) {
    var n = i(14),
      r = i(5),
      o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: n.version,
      mode: i(47) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(e, t, i) {
    t.f = i(8);
  },
  function(e, t, i) {
    var n = i(96)("keys"),
      r = i(46);
    e.exports = function(e) {
      return n[e] || (n[e] = r(e));
    };
  },
  function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(e, t, i) {
    var n = i(36);
    e.exports =
      Array.isArray ||
      function(e) {
        return "Array" == n(e);
      };
  },
  function(e, t, i) {
    var n = i(5).document;
    e.exports = n && n.documentElement;
  },
  function(e, t, i) {
    var n = i(6),
      r = i(4),
      o = function(e, t) {
        if ((r(e), !n(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function(e, t, n) {
              try {
                (n = i(34)(
                  Function.call,
                  i(29).f(Object.prototype, "__proto__").set,
                  2
                ))(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function(e, i) {
                return o(e, i), t ? (e.__proto__ = i) : n(e, i), e;
              };
            })({}, !1)
          : void 0),
      check: o
    };
  },
  function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function(e, t, i) {
    var n = i(6),
      r = i(102).set;
    e.exports = function(e, t, i) {
      var o,
        a = t.constructor;
      return (
        a !== i &&
          "function" == typeof a &&
          (o = a.prototype) !== i.prototype &&
          n(o) &&
          r &&
          r(e, o),
        e
      );
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(28),
      r = i(37);
    e.exports = function(e) {
      var t = String(r(this)),
        i = "",
        o = n(e);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (i += t);
      return i;
    };
  },
  function(e, t) {
    e.exports =
      Math.sign ||
      function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
      };
  },
  function(e, t) {
    var i = Math.expm1;
    e.exports =
      !i ||
      i(10) > 22025.465794806718 ||
      i(10) < 22025.465794806718 ||
      -2e-17 != i(-2e-17)
        ? function(e) {
            return 0 == (e = +e)
              ? e
              : e > -1e-6 && e < 1e-6
              ? e + (e * e) / 2
              : Math.exp(e) - 1;
          }
        : i;
  },
  function(e, t, i) {
    var n = i(28),
      r = i(37);
    e.exports = function(e) {
      return function(t, i) {
        var o,
          a,
          s = String(r(t)),
          c = n(i),
          u = s.length;
        return c < 0 || c >= u
          ? e
            ? ""
            : void 0
          : (o = s.charCodeAt(c)) < 55296 ||
            o > 56319 ||
            c + 1 === u ||
            (a = s.charCodeAt(c + 1)) < 56320 ||
            a > 57343
          ? e
            ? s.charAt(c)
            : o
          : e
          ? s.slice(c, c + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(47),
      r = i(0),
      o = i(19),
      a = i(23),
      s = i(57),
      c = i(152),
      u = i(56),
      l = i(52),
      h = i(8)("iterator"),
      f = !([].keys && "next" in [].keys()),
      d = function() {
        return this;
      };
    e.exports = function(e, t, i, p, m, g, _) {
      c(i, t, p);
      var v,
        y,
        b,
        E = function(e) {
          if (!f && e in S) return S[e];
          switch (e) {
            case "keys":
            case "values":
              return function() {
                return new i(this, e);
              };
          }
          return function() {
            return new i(this, e);
          };
        },
        T = t + " Iterator",
        A = "values" == m,
        x = !1,
        S = e.prototype,
        C = S[h] || S["@@iterator"] || (m && S[m]),
        P = C || E(m),
        R = m ? (A ? E("entries") : P) : void 0,
        M = ("Array" == t && S.entries) || C;
      if (
        (M &&
          (b = l(M.call(new e()))) !== Object.prototype &&
          b.next &&
          (u(b, T, !0), n || "function" == typeof b[h] || a(b, h, d)),
        A &&
          C &&
          "values" !== C.name &&
          ((x = !0),
          (P = function() {
            return C.call(this);
          })),
        (n && !_) || (!f && !x && S[h]) || a(S, h, P),
        (s[t] = P),
        (s[T] = d),
        m)
      )
        if (
          ((v = {
            values: A ? P : E("values"),
            keys: g ? P : E("keys"),
            entries: R
          }),
          _)
        )
          for (y in v) y in S || o(S, y, v[y]);
        else r(r.P + r.F * (f || x), t, v);
      return v;
    };
  },
  function(e, t, i) {
    var n = i(111),
      r = i(37);
    e.exports = function(e, t, i) {
      if (n(t)) throw TypeError("String#" + i + " doesn't accept regex!");
      return String(r(e));
    };
  },
  function(e, t, i) {
    var n = i(6),
      r = i(36),
      o = i(8)("match");
    e.exports = function(e) {
      var t;
      return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e));
    };
  },
  function(e, t, i) {
    var n = i(8)("match");
    e.exports = function(e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (i) {
        try {
          return (t[n] = !1), !"/./"[e](t);
        } catch (e) {}
      }
      return !0;
    };
  },
  function(e, t, i) {
    var n = i(57),
      r = i(8)("iterator"),
      o = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (n.Array === e || o[r] === e);
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(12),
      r = i(45);
    e.exports = function(e, t, i) {
      t in e ? n.f(e, t, r(0, i)) : (e[t] = i);
    };
  },
  function(e, t, i) {
    var n = i(66),
      r = i(8)("iterator"),
      o = i(57);
    e.exports = i(14).getIteratorMethod = function(e) {
      if (null != e) return e[r] || e["@@iterator"] || o[n(e)];
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(20),
      r = i(49),
      o = i(10);
    e.exports = function(e) {
      for (
        var t = n(this),
          i = o(t.length),
          a = arguments.length,
          s = r(a > 1 ? arguments[1] : void 0, i),
          c = a > 2 ? arguments[2] : void 0,
          u = void 0 === c ? i : r(c, i);
        u > s;

      )
        t[s++] = e;
      return t;
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(58),
      r = i(156),
      o = i(57),
      a = i(24);
    (e.exports = i(109)(
      Array,
      "Array",
      function(e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function() {
        var e = this._t,
          t = this._k,
          i = this._i++;
        return !e || i >= e.length
          ? ((this._t = void 0), r(1))
          : r(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function(e, t, i) {
    "use strict";
    var n,
      r,
      o = i(78),
      a = RegExp.prototype.exec,
      s = String.prototype.replace,
      c = a,
      u =
        ((n = /a/),
        (r = /b*/g),
        a.call(n, "a"),
        a.call(r, "a"),
        0 !== n.lastIndex || 0 !== r.lastIndex),
      l = void 0 !== /()??/.exec("")[1];
    (u || l) &&
      (c = function(e) {
        var t,
          i,
          n,
          r,
          c = this;
        return (
          l && (i = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))),
          u && (t = c.lastIndex),
          (n = a.call(c, e)),
          u && n && (c.lastIndex = c.global ? n.index + n[0].length : t),
          l &&
            n &&
            n.length > 1 &&
            s.call(n[0], i, function() {
              for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (n[r] = void 0);
            }),
          n
        );
      }),
      (e.exports = c);
  },
  function(e, t, i) {
    "use strict";
    var n = i(108)(!0);
    e.exports = function(e, t, i) {
      return t + (i ? n(e, t).length : 1);
    };
  },
  function(e, t, i) {
    var n,
      r,
      o,
      a = i(34),
      s = i(146),
      c = i(101),
      u = i(95),
      l = i(5),
      h = l.process,
      f = l.setImmediate,
      d = l.clearImmediate,
      p = l.MessageChannel,
      m = l.Dispatch,
      g = 0,
      _ = {},
      v = function() {
        var e = +this;
        if (_.hasOwnProperty(e)) {
          var t = _[e];
          delete _[e], t();
        }
      },
      y = function(e) {
        v.call(e.data);
      };
    (f && d) ||
      ((f = function(e) {
        for (var t = [], i = 1; arguments.length > i; ) t.push(arguments[i++]);
        return (
          (_[++g] = function() {
            s("function" == typeof e ? e : Function(e), t);
          }),
          n(g),
          g
        );
      }),
      (d = function(e) {
        delete _[e];
      }),
      "process" == i(36)(h)
        ? (n = function(e) {
            h.nextTick(a(v, e, 1));
          })
        : m && m.now
        ? (n = function(e) {
            m.now(a(v, e, 1));
          })
        : p
        ? ((o = (r = new p()).port2),
          (r.port1.onmessage = y),
          (n = a(o.postMessage, o, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((n = function(e) {
            l.postMessage(e + "", "*");
          }),
          l.addEventListener("message", y, !1))
        : (n =
            "onreadystatechange" in u("script")
              ? function(e) {
                  c.appendChild(u("script")).onreadystatechange = function() {
                    c.removeChild(this), v.call(e);
                  };
                }
              : function(e) {
                  setTimeout(a(v, e, 1), 0);
                })),
      (e.exports = { set: f, clear: d });
  },
  function(e, t, i) {
    "use strict";
    var n = i(5),
      r = i(13),
      o = i(47),
      a = i(84),
      s = i(23),
      c = i(61),
      u = i(3),
      l = i(60),
      h = i(28),
      f = i(10),
      d = i(164),
      p = i(51).f,
      m = i(12).f,
      g = i(116),
      _ = i(56),
      v = "prototype",
      y = "Wrong index!",
      b = n.ArrayBuffer,
      E = n.DataView,
      T = n.Math,
      A = n.RangeError,
      x = n.Infinity,
      S = b,
      C = T.abs,
      P = T.pow,
      R = T.floor,
      M = T.log,
      O = T.LN2,
      w = r ? "_b" : "buffer",
      I = r ? "_l" : "byteLength",
      D = r ? "_o" : "byteOffset";
    function L(e, t, i) {
      var n,
        r,
        o,
        a = new Array(i),
        s = 8 * i - t - 1,
        c = (1 << s) - 1,
        u = c >> 1,
        l = 23 === t ? P(2, -24) - P(2, -77) : 0,
        h = 0,
        f = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
      for (
        (e = C(e)) != e || e === x
          ? ((r = e != e ? 1 : 0), (n = c))
          : ((n = R(M(e) / O)),
            e * (o = P(2, -n)) < 1 && (n--, (o *= 2)),
            (e += n + u >= 1 ? l / o : l * P(2, 1 - u)) * o >= 2 &&
              (n++, (o /= 2)),
            n + u >= c
              ? ((r = 0), (n = c))
              : n + u >= 1
              ? ((r = (e * o - 1) * P(2, t)), (n += u))
              : ((r = e * P(2, u - 1) * P(2, t)), (n = 0)));
        t >= 8;
        a[h++] = 255 & r, r /= 256, t -= 8
      );
      for (n = (n << t) | r, s += t; s > 0; a[h++] = 255 & n, n /= 256, s -= 8);
      return (a[--h] |= 128 * f), a;
    }
    function F(e, t, i) {
      var n,
        r = 8 * i - t - 1,
        o = (1 << r) - 1,
        a = o >> 1,
        s = r - 7,
        c = i - 1,
        u = e[c--],
        l = 127 & u;
      for (u >>= 7; s > 0; l = 256 * l + e[c], c--, s -= 8);
      for (
        n = l & ((1 << -s) - 1), l >>= -s, s += t;
        s > 0;
        n = 256 * n + e[c], c--, s -= 8
      );
      if (0 === l) l = 1 - a;
      else {
        if (l === o) return n ? NaN : u ? -x : x;
        (n += P(2, t)), (l -= a);
      }
      return (u ? -1 : 1) * n * P(2, l - t);
    }
    function B(e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    }
    function N(e) {
      return [255 & e];
    }
    function k(e) {
      return [255 & e, (e >> 8) & 255];
    }
    function U(e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    }
    function V(e) {
      return L(e, 52, 8);
    }
    function G(e) {
      return L(e, 23, 4);
    }
    function z(e, t, i) {
      m(e[v], t, {
        get: function() {
          return this[i];
        }
      });
    }
    function j(e, t, i, n) {
      var r = d(+i);
      if (r + t > e[I]) throw A(y);
      var o = e[w]._b,
        a = r + e[D],
        s = o.slice(a, a + t);
      return n ? s : s.reverse();
    }
    function H(e, t, i, n, r, o) {
      var a = d(+i);
      if (a + t > e[I]) throw A(y);
      for (var s = e[w]._b, c = a + e[D], u = n(+r), l = 0; l < t; l++)
        s[c + l] = u[o ? l : t - l - 1];
    }
    if (a.ABV) {
      if (
        !u(function() {
          b(1);
        }) ||
        !u(function() {
          new b(-1);
        }) ||
        u(function() {
          return new b(), new b(1.5), new b(NaN), "ArrayBuffer" != b.name;
        })
      ) {
        for (
          var W,
            X = ((b = function(e) {
              return l(this, b), new S(d(e));
            })[v] = S[v]),
            Y = p(S),
            K = 0;
          Y.length > K;

        )
          (W = Y[K++]) in b || s(b, W, S[W]);
        o || (X.constructor = b);
      }
      var Q = new E(new b(2)),
        q = E[v].setInt8;
      Q.setInt8(0, 2147483648),
        Q.setInt8(1, 2147483649),
        (!Q.getInt8(0) && Q.getInt8(1)) ||
          c(
            E[v],
            {
              setInt8: function(e, t) {
                q.call(this, e, (t << 24) >> 24);
              },
              setUint8: function(e, t) {
                q.call(this, e, (t << 24) >> 24);
              }
            },
            !0
          );
    } else
      (b = function(e) {
        l(this, b, "ArrayBuffer");
        var t = d(e);
        (this._b = g.call(new Array(t), 0)), (this[I] = t);
      }),
        (E = function(e, t, i) {
          l(this, E, "DataView"), l(e, b, "DataView");
          var n = e[I],
            r = h(t);
          if (r < 0 || r > n) throw A("Wrong offset!");
          if (r + (i = void 0 === i ? n - r : f(i)) > n)
            throw A("Wrong length!");
          (this[w] = e), (this[D] = r), (this[I] = i);
        }),
        r &&
          (z(b, "byteLength", "_l"),
          z(E, "buffer", "_b"),
          z(E, "byteLength", "_l"),
          z(E, "byteOffset", "_o")),
        c(E[v], {
          getInt8: function(e) {
            return (j(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function(e) {
            return j(this, 1, e)[0];
          },
          getInt16: function(e) {
            var t = j(this, 2, e, arguments[1]);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function(e) {
            var t = j(this, 2, e, arguments[1]);
            return (t[1] << 8) | t[0];
          },
          getInt32: function(e) {
            return B(j(this, 4, e, arguments[1]));
          },
          getUint32: function(e) {
            return B(j(this, 4, e, arguments[1])) >>> 0;
          },
          getFloat32: function(e) {
            return F(j(this, 4, e, arguments[1]), 23, 4);
          },
          getFloat64: function(e) {
            return F(j(this, 8, e, arguments[1]), 52, 8);
          },
          setInt8: function(e, t) {
            H(this, 1, e, N, t);
          },
          setUint8: function(e, t) {
            H(this, 1, e, N, t);
          },
          setInt16: function(e, t) {
            H(this, 2, e, k, t, arguments[2]);
          },
          setUint16: function(e, t) {
            H(this, 2, e, k, t, arguments[2]);
          },
          setInt32: function(e, t) {
            H(this, 4, e, U, t, arguments[2]);
          },
          setUint32: function(e, t) {
            H(this, 4, e, U, t, arguments[2]);
          },
          setFloat32: function(e, t) {
            H(this, 4, e, G, t, arguments[2]);
          },
          setFloat64: function(e, t) {
            H(this, 8, e, V, t, arguments[2]);
          }
        });
    _(b, "ArrayBuffer"),
      _(E, "DataView"),
      s(E[v], a.VIEW, !0),
      (t.ArrayBuffer = b),
      (t.DataView = E);
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t, i) {
    "use strict";
    (function(t, n, r) {
      var o = i(86);
      function a(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function() {
            !(function(e, t, i) {
              var n = e.entry;
              e.entry = null;
              for (; n; ) {
                var r = n.callback;
                t.pendingcb--, r(i), (n = n.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      e.exports = v;
      var s,
        c =
          !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
            ? n
            : o.nextTick;
      v.WritableState = _;
      var u = i(68);
      u.inherits = i(1);
      var l = { deprecate: i(409) },
        h = i(170),
        f = i(2).Buffer,
        d = r.Uint8Array || function() {};
      var p,
        m = i(171);
      function g() {}
      function _(e, t) {
        (s = s || i(54)), (e = e || {});
        var n = t instanceof s;
        (this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var r = e.highWaterMark,
          u = e.writableHighWaterMark,
          l = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || 0 === r ? r : n && (u || 0 === u) ? u : l),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var h = !1 === e.decodeStrings;
        (this.decodeStrings = !h),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function(e) {
            !(function(e, t) {
              var i = e._writableState,
                n = i.sync,
                r = i.writecb;
              if (
                ((function(e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(i),
                t)
              )
                !(function(e, t, i, n, r) {
                  --t.pendingcb,
                    i
                      ? (o.nextTick(r, n),
                        o.nextTick(x, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", n))
                      : (r(n),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", n),
                        x(e, t));
                })(e, i, n, t, r);
              else {
                var a = T(i);
                a ||
                  i.corked ||
                  i.bufferProcessing ||
                  !i.bufferedRequest ||
                  E(e, i),
                  n ? c(b, e, i, a, r) : b(e, i, a, r);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function v(e) {
        if (((s = s || i(54)), !(p.call(v, this) || this instanceof s)))
          return new v(e);
        (this._writableState = new _(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          h.call(this);
      }
      function y(e, t, i, n, r, o, a) {
        (t.writelen = n),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          i ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite),
          (t.sync = !1);
      }
      function b(e, t, i, n) {
        i ||
          (function(e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          n(),
          x(e, t);
      }
      function E(e, t) {
        t.bufferProcessing = !0;
        var i = t.bufferedRequest;
        if (e._writev && i && i.next) {
          var n = t.bufferedRequestCount,
            r = new Array(n),
            o = t.corkedRequestsFree;
          o.entry = i;
          for (var s = 0, c = !0; i; )
            (r[s] = i), i.isBuf || (c = !1), (i = i.next), (s += 1);
          (r.allBuffers = c),
            y(e, t, !0, t.length, r, "", o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new a(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; i; ) {
            var u = i.chunk,
              l = i.encoding,
              h = i.callback;
            if (
              (y(e, t, !1, t.objectMode ? 1 : u.length, u, l, h),
              (i = i.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === i && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = i), (t.bufferProcessing = !1);
      }
      function T(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function A(e, t) {
        e._final(function(i) {
          t.pendingcb--,
            i && e.emit("error", i),
            (t.prefinished = !0),
            e.emit("prefinish"),
            x(e, t);
        });
      }
      function x(e, t) {
        var i = T(t);
        return (
          i &&
            (!(function(e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(A, e, t))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          i
        );
      }
      u.inherits(v, h),
        (_.prototype.getBuffer = function() {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function() {
          try {
            Object.defineProperty(_.prototype, "buffer", {
              get: l.deprecate(
                function() {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              )
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(v, Symbol.hasInstance, {
              value: function(e) {
                return (
                  !!p.call(this, e) ||
                  (this === v && (e && e._writableState instanceof _))
                );
              }
            }))
          : (p = function(e) {
              return e instanceof this;
            }),
        (v.prototype.pipe = function() {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (v.prototype.write = function(e, t, i) {
          var n,
            r = this._writableState,
            a = !1,
            s = !r.objectMode && ((n = e), f.isBuffer(n) || n instanceof d);
          return (
            s &&
              !f.isBuffer(e) &&
              (e = (function(e) {
                return f.from(e);
              })(e)),
            "function" == typeof t && ((i = t), (t = null)),
            s ? (t = "buffer") : t || (t = r.defaultEncoding),
            "function" != typeof i && (i = g),
            r.ended
              ? (function(e, t) {
                  var i = new Error("write after end");
                  e.emit("error", i), o.nextTick(t, i);
                })(this, i)
              : (s ||
                  (function(e, t, i, n) {
                    var r = !0,
                      a = !1;
                    return (
                      null === i
                        ? (a = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof i ||
                          void 0 === i ||
                          t.objectMode ||
                          (a = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      a && (e.emit("error", a), o.nextTick(n, a), (r = !1)),
                      r
                    );
                  })(this, r, e, i)) &&
                (r.pendingcb++,
                (a = (function(e, t, i, n, r, o) {
                  if (!i) {
                    var a = (function(e, t, i) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = f.from(t, i));
                      return t;
                    })(t, n, r);
                    n !== a && ((i = !0), (r = "buffer"), (n = a));
                  }
                  var s = t.objectMode ? 1 : n.length;
                  t.length += s;
                  var c = t.length < t.highWaterMark;
                  c || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: n,
                      encoding: r,
                      isBuf: i,
                      callback: o,
                      next: null
                    }),
                      u
                        ? (u.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else y(e, t, !1, s, n, r, o);
                  return c;
                })(this, r, s, e, t, i))),
            a
          );
        }),
        (v.prototype.cork = function() {
          this._writableState.corked++;
        }),
        (v.prototype.uncork = function() {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              E(this, e));
        }),
        (v.prototype.setDefaultEncoding = function(e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw"
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(v.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark;
          }
        }),
        (v.prototype._write = function(e, t, i) {
          i(new Error("_write() is not implemented"));
        }),
        (v.prototype._writev = null),
        (v.prototype.end = function(e, t, i) {
          var n = this._writableState;
          "function" == typeof e
            ? ((i = e), (e = null), (t = null))
            : "function" == typeof t && ((i = t), (t = null)),
            null != e && this.write(e, t),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              n.finished ||
              (function(e, t, i) {
                (t.ending = !0),
                  x(e, t),
                  i && (t.finished ? o.nextTick(i) : e.once("finish", i));
                (t.ended = !0), (e.writable = !1);
              })(this, n, i);
        }),
        Object.defineProperty(v.prototype, "destroyed", {
          get: function() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function(e) {
            this._writableState && (this._writableState.destroyed = e);
          }
        }),
        (v.prototype.destroy = m.destroy),
        (v.prototype._undestroy = m.undestroy),
        (v.prototype._destroy = function(e, t) {
          this.end(), t(e);
        });
    }.call(this, i(27), i(407).setImmediate, i(15)));
  },
  function(e, t, i) {
    "use strict";
    var n = i(2).Buffer,
      r =
        n.isEncoding ||
        function(e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function(e) {
          var t = (function(e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (n.isEncoding === r || !r(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = c), (this.end = u), (t = 4);
          break;
        case "utf8":
          (this.fillLast = s), (t = 4);
          break;
        case "base64":
          (this.text = l), (this.end = h), (t = 3);
          break;
        default:
          return (this.write = f), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = n.allocUnsafe(t));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        i = (function(e, t, i) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== i
        ? i
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function c(e, t) {
      if ((e.length - t) % 2 == 0) {
        var i = e.toString("utf16le", t);
        if (i) {
          var n = i.charCodeAt(i.length - 1);
          if (n >= 55296 && n <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              i.slice(0, -1)
            );
        }
        return i;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function u(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var i = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, i);
      }
      return t;
    }
    function l(e, t) {
      var i = (e.length - t) % 3;
      return 0 === i
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - i),
          (this.lastTotal = 3),
          1 === i
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - i));
    }
    function h(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function f(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function(e) {
        if (0 === e.length) return "";
        var t, i;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (i = this.lastNeed), (this.lastNeed = 0);
        } else i = 0;
        return i < e.length
          ? t
            ? t + this.text(e, i)
            : this.text(e, i)
          : t || "";
      }),
      (o.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (o.prototype.text = function(e, t) {
        var i = (function(e, t, i) {
          var n = t.length - 1;
          if (n < i) return 0;
          var r = a(t[n]);
          if (r >= 0) return r > 0 && (e.lastNeed = r - 1), r;
          if (--n < i || -2 === r) return 0;
          if ((r = a(t[n])) >= 0) return r > 0 && (e.lastNeed = r - 2), r;
          if (--n < i || -2 === r) return 0;
          if ((r = a(t[n])) >= 0)
            return r > 0 && (2 === r ? (r = 0) : (e.lastNeed = r - 3)), r;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = i;
        var n = e.length - (i - this.lastNeed);
        return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
      }),
      (o.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function(e, t, i) {
    "use strict";
    (function(e, n) {
      var r = i(126),
        o = i(484);
      e.__TYPEDARRAY_POOL ||
        (e.__TYPEDARRAY_POOL = {
          UINT8: o([32, 0]),
          UINT16: o([32, 0]),
          UINT32: o([32, 0]),
          INT8: o([32, 0]),
          INT16: o([32, 0]),
          INT32: o([32, 0]),
          FLOAT: o([32, 0]),
          DOUBLE: o([32, 0]),
          DATA: o([32, 0]),
          UINT8C: o([32, 0]),
          BUFFER: o([32, 0])
        });
      var a = "undefined" != typeof Uint8ClampedArray,
        s = e.__TYPEDARRAY_POOL;
      s.UINT8C || (s.UINT8C = o([32, 0])), s.BUFFER || (s.BUFFER = o([32, 0]));
      var c = s.DATA,
        u = s.BUFFER;
      function l(e) {
        if (e) {
          var t = e.length || e.byteLength,
            i = r.log2(t);
          c[i].push(e);
        }
      }
      function h(e) {
        e = r.nextPow2(e);
        var t = r.log2(e),
          i = c[t];
        return i.length > 0 ? i.pop() : new ArrayBuffer(e);
      }
      function f(e) {
        return new Uint8Array(h(e), 0, e);
      }
      function d(e) {
        return new Uint16Array(h(2 * e), 0, e);
      }
      function p(e) {
        return new Uint32Array(h(4 * e), 0, e);
      }
      function m(e) {
        return new Int8Array(h(e), 0, e);
      }
      function g(e) {
        return new Int16Array(h(2 * e), 0, e);
      }
      function _(e) {
        return new Int32Array(h(4 * e), 0, e);
      }
      function v(e) {
        return new Float32Array(h(4 * e), 0, e);
      }
      function y(e) {
        return new Float64Array(h(8 * e), 0, e);
      }
      function b(e) {
        return a ? new Uint8ClampedArray(h(e), 0, e) : f(e);
      }
      function E(e) {
        return new DataView(h(e), 0, e);
      }
      function T(e) {
        e = r.nextPow2(e);
        var t = r.log2(e),
          i = u[t];
        return i.length > 0 ? i.pop() : new n(e);
      }
      (t.free = function(e) {
        if (n.isBuffer(e)) u[r.log2(e.length)].push(e);
        else {
          if (
            ("[object ArrayBuffer]" !== Object.prototype.toString.call(e) &&
              (e = e.buffer),
            !e)
          )
            return;
          var t = e.length || e.byteLength,
            i = 0 | r.log2(t);
          c[i].push(e);
        }
      }),
        (t.freeUint8 = t.freeUint16 = t.freeUint32 = t.freeInt8 = t.freeInt16 = t.freeInt32 = t.freeFloat32 = t.freeFloat = t.freeFloat64 = t.freeDouble = t.freeUint8Clamped = t.freeDataView = function(
          e
        ) {
          l(e.buffer);
        }),
        (t.freeArrayBuffer = l),
        (t.freeBuffer = function(e) {
          u[r.log2(e.length)].push(e);
        }),
        (t.malloc = function(e, t) {
          if (void 0 === t || "arraybuffer" === t) return h(e);
          switch (t) {
            case "uint8":
              return f(e);
            case "uint16":
              return d(e);
            case "uint32":
              return p(e);
            case "int8":
              return m(e);
            case "int16":
              return g(e);
            case "int32":
              return _(e);
            case "float":
            case "float32":
              return v(e);
            case "double":
            case "float64":
              return y(e);
            case "uint8_clamped":
              return b(e);
            case "buffer":
              return T(e);
            case "data":
            case "dataview":
              return E(e);
            default:
              return null;
          }
          return null;
        }),
        (t.mallocArrayBuffer = h),
        (t.mallocUint8 = f),
        (t.mallocUint16 = d),
        (t.mallocUint32 = p),
        (t.mallocInt8 = m),
        (t.mallocInt16 = g),
        (t.mallocInt32 = _),
        (t.mallocFloat32 = t.mallocFloat = v),
        (t.mallocFloat64 = t.mallocDouble = y),
        (t.mallocUint8Clamped = b),
        (t.mallocDataView = E),
        (t.mallocBuffer = T),
        (t.clearCache = function() {
          for (var e = 0; e < 32; ++e)
            (s.UINT8[e].length = 0),
              (s.UINT16[e].length = 0),
              (s.UINT32[e].length = 0),
              (s.INT8[e].length = 0),
              (s.INT16[e].length = 0),
              (s.INT32[e].length = 0),
              (s.FLOAT[e].length = 0),
              (s.DOUBLE[e].length = 0),
              (s.UINT8C[e].length = 0),
              (c[e].length = 0),
              (u[e].length = 0);
        });
    }.call(this, i(15), i(9).Buffer));
  },
  function(e, t, i) {
    "use strict";
    function n(e) {
      var t = 32;
      return (
        (e &= -e) && t--,
        65535 & e && (t -= 16),
        16711935 & e && (t -= 8),
        252645135 & e && (t -= 4),
        858993459 & e && (t -= 2),
        1431655765 & e && (t -= 1),
        t
      );
    }
    (t.INT_BITS = 32),
      (t.INT_MAX = 2147483647),
      (t.INT_MIN = -1 << 31),
      (t.sign = function(e) {
        return (e > 0) - (e < 0);
      }),
      (t.abs = function(e) {
        var t = e >> 31;
        return (e ^ t) - t;
      }),
      (t.min = function(e, t) {
        return t ^ ((e ^ t) & -(e < t));
      }),
      (t.max = function(e, t) {
        return e ^ ((e ^ t) & -(e < t));
      }),
      (t.isPow2 = function(e) {
        return !(e & (e - 1) || !e);
      }),
      (t.log2 = function(e) {
        var t, i;
        return (
          (t = (e > 65535) << 4),
          (t |= i = ((e >>>= t) > 255) << 3),
          (t |= i = ((e >>>= i) > 15) << 2),
          (t |= i = ((e >>>= i) > 3) << 1) | ((e >>>= i) >> 1)
        );
      }),
      (t.log10 = function(e) {
        return e >= 1e9
          ? 9
          : e >= 1e8
          ? 8
          : e >= 1e7
          ? 7
          : e >= 1e6
          ? 6
          : e >= 1e5
          ? 5
          : e >= 1e4
          ? 4
          : e >= 1e3
          ? 3
          : e >= 100
          ? 2
          : e >= 10
          ? 1
          : 0;
      }),
      (t.popCount = function(e) {
        return (
          (16843009 *
            (((e =
              (858993459 & (e -= (e >>> 1) & 1431655765)) +
              ((e >>> 2) & 858993459)) +
              (e >>> 4)) &
              252645135)) >>>
          24
        );
      }),
      (t.countTrailingZeros = n),
      (t.nextPow2 = function(e) {
        return (
          (e += 0 === e),
          --e,
          (e |= e >>> 1),
          (e |= e >>> 2),
          (e |= e >>> 4),
          (e |= e >>> 8),
          (e |= e >>> 16) + 1
        );
      }),
      (t.prevPow2 = function(e) {
        return (
          (e |= e >>> 1),
          (e |= e >>> 2),
          (e |= e >>> 4),
          (e |= e >>> 8),
          (e |= e >>> 16) - (e >>> 1)
        );
      }),
      (t.parity = function(e) {
        return (
          (e ^= e >>> 16),
          (e ^= e >>> 8),
          (e ^= e >>> 4),
          (27030 >>> (e &= 15)) & 1
        );
      });
    var r = new Array(256);
    !(function(e) {
      for (var t = 0; t < 256; ++t) {
        var i = t,
          n = t,
          r = 7;
        for (i >>>= 1; i; i >>>= 1) (n <<= 1), (n |= 1 & i), --r;
        e[t] = (n << r) & 255;
      }
    })(r),
      (t.reverse = function(e) {
        return (
          (r[255 & e] << 24) |
          (r[(e >>> 8) & 255] << 16) |
          (r[(e >>> 16) & 255] << 8) |
          r[(e >>> 24) & 255]
        );
      }),
      (t.interleave2 = function(e, t) {
        return (
          (e =
            1431655765 &
            ((e =
              858993459 &
              ((e =
                252645135 &
                ((e = 16711935 & ((e &= 65535) | (e << 8))) | (e << 4))) |
                (e << 2))) |
              (e << 1))) |
          ((t =
            1431655765 &
            ((t =
              858993459 &
              ((t =
                252645135 &
                ((t = 16711935 & ((t &= 65535) | (t << 8))) | (t << 4))) |
                (t << 2))) |
              (t << 1))) <<
            1)
        );
      }),
      (t.deinterleave2 = function(e, t) {
        return (
          ((e =
            65535 &
            ((e =
              16711935 &
              ((e =
                252645135 &
                ((e = 858993459 & ((e = (e >>> t) & 1431655765) | (e >>> 1))) |
                  (e >>> 2))) |
                (e >>> 4))) |
              (e >>> 16))) <<
            16) >>
          16
        );
      }),
      (t.interleave3 = function(e, t, i) {
        return (
          (e =
            1227133513 &
            ((e =
              3272356035 &
              ((e =
                251719695 &
                ((e = 4278190335 & ((e &= 1023) | (e << 16))) | (e << 8))) |
                (e << 4))) |
              (e << 2))),
          (e |=
            (t =
              1227133513 &
              ((t =
                3272356035 &
                ((t =
                  251719695 &
                  ((t = 4278190335 & ((t &= 1023) | (t << 16))) | (t << 8))) |
                  (t << 4))) |
                (t << 2))) << 1) |
            ((i =
              1227133513 &
              ((i =
                3272356035 &
                ((i =
                  251719695 &
                  ((i = 4278190335 & ((i &= 1023) | (i << 16))) | (i << 8))) |
                  (i << 4))) |
                (i << 2))) <<
              2)
        );
      }),
      (t.deinterleave3 = function(e, t) {
        return (
          ((e =
            1023 &
            ((e =
              4278190335 &
              ((e =
                251719695 &
                ((e = 3272356035 & ((e = (e >>> t) & 1227133513) | (e >>> 2))) |
                  (e >>> 4))) |
                (e >>> 8))) |
              (e >>> 16))) <<
            22) >>
          22
        );
      }),
      (t.nextCombination = function(e) {
        var t = e | (e - 1);
        return (t + 1) | (((~t & -~t) - 1) >>> (n(e) + 1));
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(1),
      r = i(196),
      o = i(2).Buffer,
      a = new Array(16);
    function s() {
      r.call(this, 64),
        (this._a = 1732584193),
        (this._b = 4023233417),
        (this._c = 2562383102),
        (this._d = 271733878);
    }
    function c(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function u(e, t, i, n, r, o, a) {
      return (c((e + ((t & i) | (~t & n)) + r + o) | 0, a) + t) | 0;
    }
    function l(e, t, i, n, r, o, a) {
      return (c((e + ((t & n) | (i & ~n)) + r + o) | 0, a) + t) | 0;
    }
    function h(e, t, i, n, r, o, a) {
      return (c((e + (t ^ i ^ n) + r + o) | 0, a) + t) | 0;
    }
    function f(e, t, i, n, r, o, a) {
      return (c((e + (i ^ (t | ~n)) + r + o) | 0, a) + t) | 0;
    }
    n(s, r),
      (s.prototype._update = function() {
        for (var e = a, t = 0; t < 16; ++t)
          e[t] = this._block.readInt32LE(4 * t);
        var i = this._a,
          n = this._b,
          r = this._c,
          o = this._d;
        (i = u(i, n, r, o, e[0], 3614090360, 7)),
          (o = u(o, i, n, r, e[1], 3905402710, 12)),
          (r = u(r, o, i, n, e[2], 606105819, 17)),
          (n = u(n, r, o, i, e[3], 3250441966, 22)),
          (i = u(i, n, r, o, e[4], 4118548399, 7)),
          (o = u(o, i, n, r, e[5], 1200080426, 12)),
          (r = u(r, o, i, n, e[6], 2821735955, 17)),
          (n = u(n, r, o, i, e[7], 4249261313, 22)),
          (i = u(i, n, r, o, e[8], 1770035416, 7)),
          (o = u(o, i, n, r, e[9], 2336552879, 12)),
          (r = u(r, o, i, n, e[10], 4294925233, 17)),
          (n = u(n, r, o, i, e[11], 2304563134, 22)),
          (i = u(i, n, r, o, e[12], 1804603682, 7)),
          (o = u(o, i, n, r, e[13], 4254626195, 12)),
          (r = u(r, o, i, n, e[14], 2792965006, 17)),
          (i = l(
            i,
            (n = u(n, r, o, i, e[15], 1236535329, 22)),
            r,
            o,
            e[1],
            4129170786,
            5
          )),
          (o = l(o, i, n, r, e[6], 3225465664, 9)),
          (r = l(r, o, i, n, e[11], 643717713, 14)),
          (n = l(n, r, o, i, e[0], 3921069994, 20)),
          (i = l(i, n, r, o, e[5], 3593408605, 5)),
          (o = l(o, i, n, r, e[10], 38016083, 9)),
          (r = l(r, o, i, n, e[15], 3634488961, 14)),
          (n = l(n, r, o, i, e[4], 3889429448, 20)),
          (i = l(i, n, r, o, e[9], 568446438, 5)),
          (o = l(o, i, n, r, e[14], 3275163606, 9)),
          (r = l(r, o, i, n, e[3], 4107603335, 14)),
          (n = l(n, r, o, i, e[8], 1163531501, 20)),
          (i = l(i, n, r, o, e[13], 2850285829, 5)),
          (o = l(o, i, n, r, e[2], 4243563512, 9)),
          (r = l(r, o, i, n, e[7], 1735328473, 14)),
          (i = h(
            i,
            (n = l(n, r, o, i, e[12], 2368359562, 20)),
            r,
            o,
            e[5],
            4294588738,
            4
          )),
          (o = h(o, i, n, r, e[8], 2272392833, 11)),
          (r = h(r, o, i, n, e[11], 1839030562, 16)),
          (n = h(n, r, o, i, e[14], 4259657740, 23)),
          (i = h(i, n, r, o, e[1], 2763975236, 4)),
          (o = h(o, i, n, r, e[4], 1272893353, 11)),
          (r = h(r, o, i, n, e[7], 4139469664, 16)),
          (n = h(n, r, o, i, e[10], 3200236656, 23)),
          (i = h(i, n, r, o, e[13], 681279174, 4)),
          (o = h(o, i, n, r, e[0], 3936430074, 11)),
          (r = h(r, o, i, n, e[3], 3572445317, 16)),
          (n = h(n, r, o, i, e[6], 76029189, 23)),
          (i = h(i, n, r, o, e[9], 3654602809, 4)),
          (o = h(o, i, n, r, e[12], 3873151461, 11)),
          (r = h(r, o, i, n, e[15], 530742520, 16)),
          (i = f(
            i,
            (n = h(n, r, o, i, e[2], 3299628645, 23)),
            r,
            o,
            e[0],
            4096336452,
            6
          )),
          (o = f(o, i, n, r, e[7], 1126891415, 10)),
          (r = f(r, o, i, n, e[14], 2878612391, 15)),
          (n = f(n, r, o, i, e[5], 4237533241, 21)),
          (i = f(i, n, r, o, e[12], 1700485571, 6)),
          (o = f(o, i, n, r, e[3], 2399980690, 10)),
          (r = f(r, o, i, n, e[10], 4293915773, 15)),
          (n = f(n, r, o, i, e[1], 2240044497, 21)),
          (i = f(i, n, r, o, e[8], 1873313359, 6)),
          (o = f(o, i, n, r, e[15], 4264355552, 10)),
          (r = f(r, o, i, n, e[6], 2734768916, 15)),
          (n = f(n, r, o, i, e[13], 1309151649, 21)),
          (i = f(i, n, r, o, e[4], 4149444226, 6)),
          (o = f(o, i, n, r, e[11], 3174756917, 10)),
          (r = f(r, o, i, n, e[2], 718787259, 15)),
          (n = f(n, r, o, i, e[9], 3951481745, 21)),
          (this._a = (this._a + i) | 0),
          (this._b = (this._b + n) | 0),
          (this._c = (this._c + r) | 0),
          (this._d = (this._d + o) | 0);
      }),
      (s.prototype._digest = function() {
        (this._block[this._blockOffset++] = 128),
          this._blockOffset > 56 &&
            (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            (this._blockOffset = 0)),
          this._block.fill(0, this._blockOffset, 56),
          this._block.writeUInt32LE(this._length[0], 56),
          this._block.writeUInt32LE(this._length[1], 60),
          this._update();
        var e = o.allocUnsafe(16);
        return (
          e.writeInt32LE(this._a, 0),
          e.writeInt32LE(this._b, 4),
          e.writeInt32LE(this._c, 8),
          e.writeInt32LE(this._d, 12),
          e
        );
      }),
      (e.exports = s);
  },
  function(e, t, i) {
    e.exports = r;
    var n = i(42).EventEmitter;
    function r() {
      n.call(this);
    }
    i(1)(r, n),
      (r.Readable = i(85)),
      (r.Writable = i(514)),
      (r.Duplex = i(515)),
      (r.Transform = i(516)),
      (r.PassThrough = i(517)),
      (r.Stream = r),
      (r.prototype.pipe = function(e, t) {
        var i = this;
        function r(t) {
          e.writable && !1 === e.write(t) && i.pause && i.pause();
        }
        function o() {
          i.readable && i.resume && i.resume();
        }
        i.on("data", r),
          e.on("drain", o),
          e._isStdio ||
            (t && !1 === t.end) ||
            (i.on("end", s), i.on("close", c));
        var a = !1;
        function s() {
          a || ((a = !0), e.end());
        }
        function c() {
          a || ((a = !0), "function" == typeof e.destroy && e.destroy());
        }
        function u(e) {
          if ((l(), 0 === n.listenerCount(this, "error"))) throw e;
        }
        function l() {
          i.removeListener("data", r),
            e.removeListener("drain", o),
            i.removeListener("end", s),
            i.removeListener("close", c),
            i.removeListener("error", u),
            e.removeListener("error", u),
            i.removeListener("end", l),
            i.removeListener("close", l),
            e.removeListener("close", l);
        }
        return (
          i.on("error", u),
          e.on("error", u),
          i.on("end", l),
          i.on("close", l),
          e.on("close", l),
          e.emit("pipe", i),
          e
        );
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(9).Buffer,
      r = i(1),
      o = i(196),
      a = new Array(16),
      s = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
      ],
      c = [
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
      ],
      u = [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
      ],
      l = [
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
      ],
      h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
      f = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function d() {
      o.call(this, 64),
        (this._a = 1732584193),
        (this._b = 4023233417),
        (this._c = 2562383102),
        (this._d = 271733878),
        (this._e = 3285377520);
    }
    function p(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function m(e, t, i, n, r, o, a, s) {
      return (p((e + (t ^ i ^ n) + o + a) | 0, s) + r) | 0;
    }
    function g(e, t, i, n, r, o, a, s) {
      return (p((e + ((t & i) | (~t & n)) + o + a) | 0, s) + r) | 0;
    }
    function _(e, t, i, n, r, o, a, s) {
      return (p((e + ((t | ~i) ^ n) + o + a) | 0, s) + r) | 0;
    }
    function v(e, t, i, n, r, o, a, s) {
      return (p((e + ((t & n) | (i & ~n)) + o + a) | 0, s) + r) | 0;
    }
    function y(e, t, i, n, r, o, a, s) {
      return (p((e + (t ^ (i | ~n)) + o + a) | 0, s) + r) | 0;
    }
    r(d, o),
      (d.prototype._update = function() {
        for (var e = a, t = 0; t < 16; ++t)
          e[t] = this._block.readInt32LE(4 * t);
        for (
          var i = 0 | this._a,
            n = 0 | this._b,
            r = 0 | this._c,
            o = 0 | this._d,
            d = 0 | this._e,
            b = 0 | this._a,
            E = 0 | this._b,
            T = 0 | this._c,
            A = 0 | this._d,
            x = 0 | this._e,
            S = 0;
          S < 80;
          S += 1
        ) {
          var C, P;
          S < 16
            ? ((C = m(i, n, r, o, d, e[s[S]], h[0], u[S])),
              (P = y(b, E, T, A, x, e[c[S]], f[0], l[S])))
            : S < 32
            ? ((C = g(i, n, r, o, d, e[s[S]], h[1], u[S])),
              (P = v(b, E, T, A, x, e[c[S]], f[1], l[S])))
            : S < 48
            ? ((C = _(i, n, r, o, d, e[s[S]], h[2], u[S])),
              (P = _(b, E, T, A, x, e[c[S]], f[2], l[S])))
            : S < 64
            ? ((C = v(i, n, r, o, d, e[s[S]], h[3], u[S])),
              (P = g(b, E, T, A, x, e[c[S]], f[3], l[S])))
            : ((C = y(i, n, r, o, d, e[s[S]], h[4], u[S])),
              (P = m(b, E, T, A, x, e[c[S]], f[4], l[S]))),
            (i = d),
            (d = o),
            (o = p(r, 10)),
            (r = n),
            (n = C),
            (b = x),
            (x = A),
            (A = p(T, 10)),
            (T = E),
            (E = P);
        }
        var R = (this._b + r + A) | 0;
        (this._b = (this._c + o + x) | 0),
          (this._c = (this._d + d + b) | 0),
          (this._d = (this._e + i + E) | 0),
          (this._e = (this._a + n + T) | 0),
          (this._a = R);
      }),
      (d.prototype._digest = function() {
        (this._block[this._blockOffset++] = 128),
          this._blockOffset > 56 &&
            (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            (this._blockOffset = 0)),
          this._block.fill(0, this._blockOffset, 56),
          this._block.writeUInt32LE(this._length[0], 56),
          this._block.writeUInt32LE(this._length[1], 60),
          this._update();
        var e = n.alloc ? n.alloc(20) : new n(20);
        return (
          e.writeInt32LE(this._a, 0),
          e.writeInt32LE(this._b, 4),
          e.writeInt32LE(this._c, 8),
          e.writeInt32LE(this._d, 12),
          e.writeInt32LE(this._e, 16),
          e
        );
      }),
      (e.exports = d);
  },
  function(e, t, i) {
    ((t = e.exports = function(e) {
      e = e.toLowerCase();
      var i = t[e];
      if (!i)
        throw new Error(e + " is not supported (we accept pull requests)");
      return new i();
    }).sha = i(518)),
      (t.sha1 = i(519)),
      (t.sha224 = i(520)),
      (t.sha256 = i(197)),
      (t.sha384 = i(521)),
      (t.sha512 = i(198));
  },
  function(e, t, i) {
    "use strict";
    (t.utils = i(527)),
      (t.Cipher = i(528)),
      (t.DES = i(529)),
      (t.CBC = i(530)),
      (t.EDE = i(531));
  },
  function(e, t, i) {
    var n = i(532),
      r = i(540),
      o = i(208);
    (t.createCipher = t.Cipher = n.createCipher),
      (t.createCipheriv = t.Cipheriv = n.createCipheriv),
      (t.createDecipher = t.Decipher = r.createDecipher),
      (t.createDecipheriv = t.Decipheriv = r.createDecipheriv),
      (t.listCiphers = t.getCiphers = function() {
        return Object.keys(o);
      });
  },
  function(e, t, i) {
    var n = {
        ECB: i(533),
        CBC: i(534),
        CFB: i(535),
        CFB8: i(536),
        CFB1: i(537),
        OFB: i(538),
        CTR: i(206),
        GCM: i(206)
      },
      r = i(208);
    for (var o in r) r[o].module = n[r[o].mode];
    e.exports = r;
  },
  function(e, t, i) {
    (function(t) {
      var n = i(11),
        r = i(53);
      function o(e, i) {
        var r = (function(e) {
            var t = a(e);
            return {
              blinder: t
                .toRed(n.mont(e.modulus))
                .redPow(new n(e.publicExponent))
                .fromRed(),
              unblinder: t.invm(e.modulus)
            };
          })(i),
          o = i.modulus.byteLength(),
          s = (n.mont(i.modulus), new n(e).mul(r.blinder).umod(i.modulus)),
          c = s.toRed(n.mont(i.prime1)),
          u = s.toRed(n.mont(i.prime2)),
          l = i.coefficient,
          h = i.prime1,
          f = i.prime2,
          d = c.redPow(i.exponent1),
          p = u.redPow(i.exponent2);
        (d = d.fromRed()), (p = p.fromRed());
        var m = d
          .isub(p)
          .imul(l)
          .umod(h);
        return (
          m.imul(f),
          p.iadd(m),
          new t(
            p
              .imul(r.unblinder)
              .umod(i.modulus)
              .toArray(!1, o)
          )
        );
      }
      function a(e) {
        for (
          var t = e.modulus.byteLength(), i = new n(r(t));
          i.cmp(e.modulus) >= 0 || !i.umod(e.prime1) || !i.umod(e.prime2);

        )
          i = new n(r(t));
        return i;
      }
      (e.exports = o), (o.getr = a);
    }.call(this, i(9).Buffer));
  },
  function(e, t, i) {
    var n = t;
    (n.utils = i(33)),
      (n.common = i(71)),
      (n.sha = i(556)),
      (n.ripemd = i(560)),
      (n.hmac = i(561)),
      (n.sha1 = n.sha.sha1),
      (n.sha256 = n.sha.sha256),
      (n.sha224 = n.sha.sha224),
      (n.sha384 = n.sha.sha384),
      (n.sha512 = n.sha.sha512),
      (n.ripemd160 = n.ripemd.ripemd160);
  },
  function(e, t, i) {
    "use strict";
    i.r(t),
      (t.default = function() {
        var e = new URL(document.location).searchParams;
        (this.isSinglePlayer = !!e.get("singlePlayer")),
          (this.isWebRTCSupported = !1);
        try {
          (new RTCPeerConnection().ondatachannel = function(e) {}),
            (this.isWebRTCSupported = !0);
        } catch (e) {}
        this.isWebGLSupported = !1;
        var t = document.createElement("canvas"),
          i = t.getContext("webgl") || t.getContext("experimental-webgl");
        i && i instanceof WebGLRenderingContext && (this.isWebGLSupported = !0),
          (this.isMobile = !1),
          new RegExp(
            "Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile",
            "i"
          ).test(navigator.userAgent) && (this.isMobile = !0);
      });
  },
  function(e, t, i) {
    "use strict";
    (function(e) {
      var n = i(93),
        r = i.n(n),
        o = i(55),
        a = i(18),
        s = i(7);
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = i),
          e
        );
      }
      function u(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var l = (function() {
        function t(e) {
          var i = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.maxChangesPerSync = 1e3),
            this.initializeState(e),
            (this.maxPlayers = 10),
            (this.lastUpdate = 0),
            (this.changedBlocks = []);
          var n = this;
          (this.changedBlockHandler = {
            setBlock: function(e, t) {
              var i = { add: !1, p: e.slice(), bt: t };
              s.default.getInstance().addBlockChange(i),
                n.changedBlocks.push(i);
            },
            addBlock: function(e, t) {
              var i = { add: !0, p: e.slice(), bt: t };
              s.default.getInstance().addBlockChange(i),
                n.changedBlocks.push(i);
            }
          }),
            setInterval(function() {
              i.update();
            }, 50);
        }
        var i, n, l;
        return (
          (i = t),
          (n = [
            {
              key: "update",
              value: function() {
                new Date(), this.lastUpdate;
                this.broadcastPlayers();
              }
            },
            {
              key: "initializeState",
              value: function(e) {
                var t = {},
                  i = new o.a({
                    name: e.name,
                    network: this,
                    isClient: !1,
                    peer: { send: function() {} }
                  });
                (t[e.name] = i),
                  (this.state = {
                    name: e.name,
                    players: t,
                    code: null,
                    gameStarted: !1,
                    game: e.game,
                    seed: e.seed,
                    chatLog: [],
                    spawnPoint: null
                  }),
                  (this.hostPlayer = i);
              }
            },
            {
              key: "setName",
              value: function(e) {
                (this.getPlayer().state.name = e), (this.state.name = e);
              }
            },
            {
              key: "getPlayer",
              value: function() {
                return this.hostPlayer;
              }
            },
            {
              key: "copyPlayers",
              value: function() {
                return Object.assign({}, this.state.players);
              }
            },
            {
              key: "playersToArray",
              value: function() {
                var e = [];
                for (var t in this.state.players)
                  e.push({
                    name: t,
                    peer: this.state.players[t].peer,
                    state: this.state.players[t].state
                  });
                return e;
              }
            },
            {
              key: "getSpawnedPlayerNames",
              value: function() {
                var e = [];
                for (var t in this.state.players)
                  this.state.players[t].state.spawned &&
                    e.push(this.state.players[t].state.name);
                return e;
              }
            },
            {
              key: "kickPlayer",
              value: function(e) {
                if (this.state.name === e) return "No kicking yourself";
                for (var t in this.state.players)
                  if (this.state.players[t].state.name === e) {
                    var i = {
                      message: "kicking " + e,
                      timestamp: +new Date(),
                      type: "message",
                      from: this.state.name
                    };
                    return (
                      this.handleMessage(i),
                      this.broadcastPlayer(t, { type: "kicked" }),
                      this.state.players[t].peer.destroy(),
                      "Kicking " + e
                    );
                  }
                return "No such player";
              }
            },
            {
              key: "setSpawnToCurrentPosition",
              value: function() {
                return (
                  (this.state.spawnPoint = this.hostPlayer.state.position),
                  "Spawn point set to " +
                    JSON.stringify(this.hostPlayer.state.position)
                );
              }
            },
            {
              key: "getPositionFor",
              value: function(e) {
                for (var t in this.state.players)
                  if (this.state.players[t].state.name === e)
                    return this.state.players[t].state.position;
                return null;
              }
            },
            {
              key: "handleData",
              value: function(e, t) {
                switch (t.type) {
                  case "connected":
                    this.handleConnected(e);
                    break;
                  case "playerState":
                    this.handlePlayerState(e, t.data.state);
                    break;
                  case "setBlockTypeAt":
                    this.state.game.setBlock(
                      t.data.blockTypeId,
                      t.data.position
                    );
                    break;
                  case "fireEvent":
                    this.state.game.handleFireEvent(t.data),
                      this.broadcastToOthers(e, {
                        type: "fireEvent",
                        data: t.data
                      });
                    break;
                  case "message":
                    this.handleMessage(t.message);
                    break;
                  case "requestChanges":
                    var i = this.changedBlocks.slice(
                      t.from,
                      t.from + this.maxChangesPerSync
                    );
                    i.length &&
                      this.broadcastPlayer(e, {
                        type: "changedBlocks",
                        blocks: i,
                        from: t.from
                      });
                    break;
                  default:
                    throw Error("Unkown data type ", t.type);
                }
              }
            },
            {
              key: "broadcastPlayer",
              value: function(e, t) {
                var i = this.state.players[e].peer;
                i.connected && i.send(JSON.stringify(t));
              }
            },
            {
              key: "broadcast",
              value: function(e) {
                for (var t in this.state.players) this.broadcastPlayer(t, e);
              }
            },
            {
              key: "broadcastToOthers",
              value: function(e, t) {
                for (var i in this.state.players)
                  e !== i && this.broadcastPlayer(i, t);
              }
            },
            {
              key: "broadcastPlayers",
              value: function() {
                this.broadcast({
                  type: "players",
                  players: this.playersToArray().map(function(e) {
                    return { name: e.state.name, id: e.name, state: e.state };
                  })
                });
              }
            },
            {
              key: "handleConnected",
              value: function(e) {
                this.broadcastPlayers();
              }
            },
            {
              key: "getOpenGame",
              value: function(t) {
                var i = this;
                return new e(function(e, n) {
                  a.a.getGame(t).then(function(t) {
                    (i.gameCode = t.code),
                      console.log("got code " + i.gameCode),
                      e(i.gameCode);
                  });
                });
              }
            },
            {
              key: "initNewGame",
              value: function(t) {
                var i = this;
                return new e(function(e, n) {
                  i.getOpenGame(t).then(function(t) {
                    i.setState({ code: t }),
                      e(t),
                      a.a.createSignalingChannel(t, "host").then(function() {
                        a.a.listenForData(t, function(e) {
                          void 0 !== e.payload.signal &&
                            i.handlePlayerSignaling(e, t);
                        });
                      });
                  });
                });
              }
            },
            {
              key: "handlePlayerSignaling",
              value: function(e, t) {
                var i = this,
                  n = e.from.split("/")[1];
                if (void 0 === this.state.players[n]) {
                  var s = new r.a({ initiator: !1 });
                  s.signal(e.payload.signal),
                    s.on("signal", function(e) {
                      a.a.sendSignalingTo(t, n, "host", e);
                    });
                  var c = this.copyPlayers();
                  (c[n] = new o.a({ name: n, peer: s })),
                    this.setState({ players: c }, function() {
                      i.broadcastPlayers();
                    }),
                    s.on("connect", function() {
                      var e = i.playersToArray().length,
                        t = e > i.maxPlayers;
                      i.sendWelcomeInfo(s, t, e), t && l(!1);
                    }),
                    s.on("data", function(e) {
                      i.handleData(n, JSON.parse(e));
                    });
                  var u = this,
                    l = function(e) {
                      var t = Object.assign({}, u.state.players);
                      void 0 !== t[n] &&
                        (void 0 !== t[n].noaPlayer && t[n].noaPlayer.remove(),
                        e &&
                          t[n].state.spawned &&
                          u.sendLeftMessage(t[n].state.name),
                        delete t[n],
                        u.setState({ players: t }),
                        s.destroy());
                    };
                  s.on("close", function() {
                    l(!0);
                  }),
                    s.on("error", function(e) {
                      e.code;
                    });
                }
              }
            },
            {
              key: "sendWelcomeInfo",
              value: function(e, t, i) {
                e.send(
                  JSON.stringify({
                    type: "welcomeInfo",
                    hostName: this.hostPlayer.state.name,
                    gameFull: t,
                    playerCount: i,
                    maxPlayers: this.maxPlayers,
                    worldSeed: this.state.seed,
                    worldSize: s.default.getInstance().getWorldSize(),
                    spawnPoint: this.state.spawnPoint,
                    numberOfChangedBlocks: this.changedBlocks.length
                  })
                );
              }
            },
            {
              key: "setState",
              value: function(e, t) {
                (this.state = (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                      n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (n = n.concat(
                        Object.getOwnPropertySymbols(i).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(
                            i,
                            e
                          ).enumerable;
                        })
                      )),
                      n.forEach(function(t) {
                        c(e, t, i[t]);
                      });
                  }
                  return e;
                })({}, this.state, e)),
                  t && "function" == typeof t && t();
              }
            },
            {
              key: "handlePlayerState",
              value: function(e, t) {
                this.state.players[e].setState(t);
              }
            },
            {
              key: "emitFireEvent",
              value: function(e) {
                this.broadcast({ type: "fireEvent", data: e });
              }
            },
            {
              key: "sendJoinedMessage",
              value: function(e) {
                var t = {
                  message: "",
                  timestamp: +new Date(),
                  type: "joined",
                  from: e
                };
                this.handleMessage(t);
              }
            },
            {
              key: "sendLeftMessage",
              value: function(e) {
                var t = {
                  message: "",
                  timestamp: +new Date(),
                  type: "left",
                  from: e
                };
                this.handleMessage(t);
              }
            },
            {
              key: "sendMessage",
              value: function(e) {
                var t = {
                  message: e,
                  timestamp: +new Date(),
                  type: "message",
                  from: this.state.name
                };
                this.handleMessage(t);
              }
            },
            {
              key: "handleMessage",
              value: function(e) {
                this.state.chatLog.push(e),
                  this.state.game.updateChatLog(this.state.chatLog.slice(-20)),
                  this.broadcastToOthers(this.state.name, {
                    type: "chatLog",
                    chatLog: this.state.chatLog.slice(-20)
                  });
              }
            },
            {
              key: "setChangedBlocks",
              value: function(e) {
                this.changedBlocks = e.splice(0);
              }
            }
          ]) && u(i.prototype, n),
          l && u(i, l),
          t
        );
      })();
      t.a = l;
    }.call(this, i(41)));
  },
  function(e, t, i) {
    e.exports =
      !i(13) &&
      !i(3)(function() {
        return (
          7 !=
          Object.defineProperty(i(95)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(e, t, i) {
    var n = i(5),
      r = i(14),
      o = i(47),
      a = i(97),
      s = i(12).f;
    e.exports = function(e) {
      var t = r.Symbol || (r.Symbol = o ? {} : n.Symbol || {});
      "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) });
    };
  },
  function(e, t, i) {
    var n = i(22),
      r = i(24),
      o = i(74)(!1),
      a = i(98)("IE_PROTO");
    e.exports = function(e, t) {
      var i,
        s = r(e),
        c = 0,
        u = [];
      for (i in s) i != a && n(s, i) && u.push(i);
      for (; t.length > c; ) n(s, (i = t[c++])) && (~o(u, i) || u.push(i));
      return u;
    };
  },
  function(e, t, i) {
    var n = i(12),
      r = i(4),
      o = i(48);
    e.exports = i(13)
      ? Object.defineProperties
      : function(e, t) {
          r(e);
          for (var i, a = o(t), s = a.length, c = 0; s > c; )
            n.f(e, (i = a[c++]), t[i]);
          return e;
        };
  },
  function(e, t, i) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = i(24),
      o = i(51).f,
      a = {}.toString,
      s =
        "object" == ("undefined" == typeof window ? "undefined" : n(window)) &&
        window &&
        Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function(e) {
      return s && "[object Window]" == a.call(e)
        ? (function(e) {
            try {
              return o(e);
            } catch (e) {
              return s.slice();
            }
          })(e)
        : o(r(e));
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(48),
      r = i(75),
      o = i(65),
      a = i(20),
      s = i(64),
      c = Object.assign;
    e.exports =
      !c ||
      i(3)(function() {
        var e = {},
          t = {},
          i = Symbol(),
          n = "abcdefghijklmnopqrst";
        return (
          (e[i] = 7),
          n.split("").forEach(function(e) {
            t[e] = e;
          }),
          7 != c({}, e)[i] || Object.keys(c({}, t)).join("") != n
        );
      })
        ? function(e, t) {
            for (
              var i = a(e), c = arguments.length, u = 1, l = r.f, h = o.f;
              c > u;

            )
              for (
                var f,
                  d = s(arguments[u++]),
                  p = l ? n(d).concat(l(d)) : n(d),
                  m = p.length,
                  g = 0;
                m > g;

              )
                h.call(d, (f = p[g++])) && (i[f] = d[f]);
            return i;
          }
        : c;
  },
  function(e, t) {
    e.exports =
      Object.is ||
      function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      };
  },
  function(e, t, i) {
    "use strict";
    var n = i(35),
      r = i(6),
      o = i(146),
      a = [].slice,
      s = {};
    e.exports =
      Function.bind ||
      function(e) {
        var t = n(this),
          i = a.call(arguments, 1),
          c = function n() {
            var r = i.concat(a.call(arguments));
            return this instanceof n
              ? (function(e, t, i) {
                  if (!(t in s)) {
                    for (var n = [], r = 0; r < t; r++) n[r] = "a[" + r + "]";
                    s[t] = Function("F,a", "return new F(" + n.join(",") + ")");
                  }
                  return s[t](e, i);
                })(t, r.length, r)
              : o(t, r, e);
          };
        return r(t.prototype) && (c.prototype = t.prototype), c;
      };
  },
  function(e, t) {
    e.exports = function(e, t, i) {
      var n = void 0 === i;
      switch (t.length) {
        case 0:
          return n ? e() : e.call(i);
        case 1:
          return n ? e(t[0]) : e.call(i, t[0]);
        case 2:
          return n ? e(t[0], t[1]) : e.call(i, t[0], t[1]);
        case 3:
          return n ? e(t[0], t[1], t[2]) : e.call(i, t[0], t[1], t[2]);
        case 4:
          return n
            ? e(t[0], t[1], t[2], t[3])
            : e.call(i, t[0], t[1], t[2], t[3]);
      }
      return e.apply(i, t);
    };
  },
  function(e, t, i) {
    var n = i(5).parseInt,
      r = i(76).trim,
      o = i(103),
      a = /^[-+]?0[xX]/;
    e.exports =
      8 !== n(o + "08") || 22 !== n(o + "0x16")
        ? function(e, t) {
            var i = r(String(e), 3);
            return n(i, t >>> 0 || (a.test(i) ? 16 : 10));
          }
        : n;
  },
  function(e, t, i) {
    var n = i(5).parseFloat,
      r = i(76).trim;
    e.exports =
      1 / n(i(103) + "-0") != -1 / 0
        ? function(e) {
            var t = r(String(e), 3),
              i = n(t);
            return 0 === i && "-" == t.charAt(0) ? -0 : i;
          }
        : n;
  },
  function(e, t, i) {
    var n = i(36);
    e.exports = function(e, t) {
      if ("number" != typeof e && "Number" != n(e)) throw TypeError(t);
      return +e;
    };
  },
  function(e, t, i) {
    var n = i(6),
      r = Math.floor;
    e.exports = function(e) {
      return !n(e) && isFinite(e) && r(e) === e;
    };
  },
  function(e, t) {
    e.exports =
      Math.log1p ||
      function(e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
      };
  },
  function(e, t, i) {
    "use strict";
    var n = i(50),
      r = i(45),
      o = i(56),
      a = {};
    i(23)(a, i(8)("iterator"), function() {
      return this;
    }),
      (e.exports = function(e, t, i) {
        (e.prototype = n(a, { next: r(1, i) })), o(e, t + " Iterator");
      });
  },
  function(e, t, i) {
    var n = i(4);
    e.exports = function(e, t, i, r) {
      try {
        return r ? t(n(i)[0], i[1]) : t(i);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && n(o.call(e)), t);
      }
    };
  },
  function(e, t, i) {
    var n = i(35),
      r = i(20),
      o = i(64),
      a = i(10);
    e.exports = function(e, t, i, s, c) {
      n(t);
      var u = r(e),
        l = o(u),
        h = a(u.length),
        f = c ? h - 1 : 0,
        d = c ? -1 : 1;
      if (i < 2)
        for (;;) {
          if (f in l) {
            (s = l[f]), (f += d);
            break;
          }
          if (((f += d), c ? f < 0 : h <= f))
            throw TypeError("Reduce of empty array with no initial value");
        }
      for (; c ? f >= 0 : h > f; f += d) f in l && (s = t(s, l[f], f, u));
      return s;
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(20),
      r = i(49),
      o = i(10);
    e.exports =
      [].copyWithin ||
      function(e, t) {
        var i = n(this),
          a = o(i.length),
          s = r(e, a),
          c = r(t, a),
          u = arguments.length > 2 ? arguments[2] : void 0,
          l = Math.min((void 0 === u ? a : r(u, a)) - c, a - s),
          h = 1;
        for (
          c < s && s < c + l && ((h = -1), (c += l - 1), (s += l - 1));
          l-- > 0;

        )
          c in i ? (i[s] = i[c]) : delete i[s], (s += h), (c += h);
        return i;
      };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return { value: t, done: !!e };
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(118);
    i(0)({ target: "RegExp", proto: !0, forced: n !== /./.exec }, { exec: n });
  },
  function(e, t, i) {
    i(13) &&
      "g" != /./g.flags &&
      i(12).f(RegExp.prototype, "flags", { configurable: !0, get: i(78) });
  },
  function(e, t, i) {
    "use strict";
    var n,
      r,
      o,
      a,
      s = i(47),
      c = i(5),
      u = i(34),
      l = i(66),
      h = i(0),
      f = i(6),
      d = i(35),
      p = i(60),
      m = i(81),
      g = i(67),
      _ = i(120).set,
      v = i(342)(),
      y = i(160),
      b = i(343),
      E = i(82),
      T = i(161),
      A = c.TypeError,
      x = c.process,
      S = x && x.versions,
      C = (S && S.v8) || "",
      P = c.Promise,
      R = "process" == l(x),
      M = function() {},
      O = (r = y.f),
      w = !!(function() {
        try {
          var e = P.resolve(1),
            t = ((e.constructor = {})[i(8)("species")] = function(e) {
              e(M, M);
            });
          return (
            (R || "function" == typeof PromiseRejectionEvent) &&
            e.then(M) instanceof t &&
            0 !== C.indexOf("6.6") &&
            -1 === E.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      I = function(e) {
        var t;
        return !(!f(e) || "function" != typeof (t = e.then)) && t;
      },
      D = function(e, t) {
        if (!e._n) {
          e._n = !0;
          var i = e._c;
          v(function() {
            for (
              var n = e._v,
                r = 1 == e._s,
                o = 0,
                a = function(t) {
                  var i,
                    o,
                    a,
                    s = r ? t.ok : t.fail,
                    c = t.resolve,
                    u = t.reject,
                    l = t.domain;
                  try {
                    s
                      ? (r || (2 == e._h && B(e), (e._h = 1)),
                        !0 === s
                          ? (i = n)
                          : (l && l.enter(),
                            (i = s(n)),
                            l && (l.exit(), (a = !0))),
                        i === t.promise
                          ? u(A("Promise-chain cycle"))
                          : (o = I(i))
                          ? o.call(i, c, u)
                          : c(i))
                      : u(n);
                  } catch (e) {
                    l && !a && l.exit(), u(e);
                  }
                };
              i.length > o;

            )
              a(i[o++]);
            (e._c = []), (e._n = !1), t && !e._h && L(e);
          });
        }
      },
      L = function(e) {
        _.call(c, function() {
          var t,
            i,
            n,
            r = e._v,
            o = F(e);
          if (
            (o &&
              ((t = b(function() {
                R
                  ? x.emit("unhandledRejection", r, e)
                  : (i = c.onunhandledrejection)
                  ? i({ promise: e, reason: r })
                  : (n = c.console) &&
                    n.error &&
                    n.error("Unhandled promise rejection", r);
              })),
              (e._h = R || F(e) ? 2 : 1)),
            (e._a = void 0),
            o && t.e)
          )
            throw t.v;
        });
      },
      F = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      B = function(e) {
        _.call(c, function() {
          var t;
          R
            ? x.emit("rejectionHandled", e)
            : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      N = function(e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          D(t, !0));
      },
      k = function e(t) {
        var i,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === t) throw A("Promise can't be resolved itself");
            (i = I(t))
              ? v(function() {
                  var r = { _w: n, _d: !1 };
                  try {
                    i.call(t, u(e, r, 1), u(N, r, 1));
                  } catch (e) {
                    N.call(r, e);
                  }
                })
              : ((n._v = t), (n._s = 1), D(n, !1));
          } catch (e) {
            N.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    w ||
      ((P = function(e) {
        p(this, P, "Promise", "_h"), d(e), n.call(this);
        try {
          e(u(k, this, 1), u(N, this, 1));
        } catch (e) {
          N.call(this, e);
        }
      }),
      ((n = function(e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = i(61)(P.prototype, {
        then: function(e, t) {
          var i = O(g(this, P));
          return (
            (i.ok = "function" != typeof e || e),
            (i.fail = "function" == typeof t && t),
            (i.domain = R ? x.domain : void 0),
            this._c.push(i),
            this._a && this._a.push(i),
            this._s && D(this, !1),
            i.promise
          );
        },
        catch: function(e) {
          return this.then(void 0, e);
        }
      })),
      (o = function() {
        var e = new n();
        (this.promise = e),
          (this.resolve = u(k, e, 1)),
          (this.reject = u(N, e, 1));
      }),
      (y.f = O = function(e) {
        return e === P || e === a ? new o(e) : r(e);
      })),
      h(h.G + h.W + h.F * !w, { Promise: P }),
      i(56)(P, "Promise"),
      i(59)("Promise"),
      (a = i(14).Promise),
      h(h.S + h.F * !w, "Promise", {
        reject: function(e) {
          var t = O(this);
          return (0, t.reject)(e), t.promise;
        }
      }),
      h(h.S + h.F * (s || !w), "Promise", {
        resolve: function(e) {
          return T(s && this === a ? P : this, e);
        }
      }),
      h(
        h.S +
          h.F *
            !(
              w &&
              i(77)(function(e) {
                P.all(e).catch(M);
              })
            ),
        "Promise",
        {
          all: function(e) {
            var t = this,
              i = O(t),
              n = i.resolve,
              r = i.reject,
              o = b(function() {
                var i = [],
                  o = 0,
                  a = 1;
                m(e, !1, function(e) {
                  var s = o++,
                    c = !1;
                  i.push(void 0),
                    a++,
                    t.resolve(e).then(function(e) {
                      c || ((c = !0), (i[s] = e), --a || n(i));
                    }, r);
                }),
                  --a || n(i);
              });
            return o.e && r(o.v), i.promise;
          },
          race: function(e) {
            var t = this,
              i = O(t),
              n = i.reject,
              r = b(function() {
                m(e, !1, function(e) {
                  t.resolve(e).then(i.resolve, n);
                });
              });
            return r.e && n(r.v), i.promise;
          }
        }
      );
  },
  function(e, t, i) {
    "use strict";
    var n = i(35);
    function r(e) {
      var t, i;
      (this.promise = new e(function(e, n) {
        if (void 0 !== t || void 0 !== i)
          throw TypeError("Bad Promise constructor");
        (t = e), (i = n);
      })),
        (this.resolve = n(t)),
        (this.reject = n(i));
    }
    e.exports.f = function(e) {
      return new r(e);
    };
  },
  function(e, t, i) {
    var n = i(4),
      r = i(6),
      o = i(160);
    e.exports = function(e, t) {
      if ((n(e), r(t) && t.constructor === e)) return t;
      var i = o.f(e);
      return (0, i.resolve)(t), i.promise;
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(12).f,
      r = i(50),
      o = i(61),
      a = i(34),
      s = i(60),
      c = i(81),
      u = i(109),
      l = i(156),
      h = i(59),
      f = i(13),
      d = i(40).fastKey,
      p = i(62),
      m = f ? "_s" : "size",
      g = function(e, t) {
        var i,
          n = d(t);
        if ("F" !== n) return e._i[n];
        for (i = e._f; i; i = i.n) if (i.k == t) return i;
      };
    e.exports = {
      getConstructor: function(e, t, i, u) {
        var l = e(function(e, n) {
          s(e, l, t, "_i"),
            (e._t = t),
            (e._i = r(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[m] = 0),
            null != n && c(n, i, e[u], e);
        });
        return (
          o(l.prototype, {
            clear: function() {
              for (var e = p(this, t), i = e._i, n = e._f; n; n = n.n)
                (n.r = !0), n.p && (n.p = n.p.n = void 0), delete i[n.i];
              (e._f = e._l = void 0), (e[m] = 0);
            },
            delete: function(e) {
              var i = p(this, t),
                n = g(i, e);
              if (n) {
                var r = n.n,
                  o = n.p;
                delete i._i[n.i],
                  (n.r = !0),
                  o && (o.n = r),
                  r && (r.p = o),
                  i._f == n && (i._f = r),
                  i._l == n && (i._l = o),
                  i[m]--;
              }
              return !!n;
            },
            forEach: function(e) {
              p(this, t);
              for (
                var i,
                  n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (i = i ? i.n : this._f);

              )
                for (n(i.v, i.k, this); i && i.r; ) i = i.p;
            },
            has: function(e) {
              return !!g(p(this, t), e);
            }
          }),
          f &&
            n(l.prototype, "size", {
              get: function() {
                return p(this, t)[m];
              }
            }),
          l
        );
      },
      def: function(e, t, i) {
        var n,
          r,
          o = g(e, t);
        return (
          o
            ? (o.v = i)
            : ((e._l = o = {
                i: (r = d(t, !0)),
                k: t,
                v: i,
                p: (n = e._l),
                n: void 0,
                r: !1
              }),
              e._f || (e._f = o),
              n && (n.n = o),
              e[m]++,
              "F" !== r && (e._i[r] = o)),
          e
        );
      },
      getEntry: g,
      setStrong: function(e, t, i) {
        u(
          e,
          t,
          function(e, i) {
            (this._t = p(e, t)), (this._k = i), (this._l = void 0);
          },
          function() {
            for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f)
              ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
              : ((this._t = void 0), l(1));
          },
          i ? "entries" : "values",
          !i,
          !0
        ),
          h(t);
      }
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(61),
      r = i(40).getWeak,
      o = i(4),
      a = i(6),
      s = i(60),
      c = i(81),
      u = i(31),
      l = i(22),
      h = i(62),
      f = u(5),
      d = u(6),
      p = 0,
      m = function(e) {
        return e._l || (e._l = new g());
      },
      g = function() {
        this.a = [];
      },
      _ = function(e, t) {
        return f(e.a, function(e) {
          return e[0] === t;
        });
      };
    (g.prototype = {
      get: function(e) {
        var t = _(this, e);
        if (t) return t[1];
      },
      has: function(e) {
        return !!_(this, e);
      },
      set: function(e, t) {
        var i = _(this, e);
        i ? (i[1] = t) : this.a.push([e, t]);
      },
      delete: function(e) {
        var t = d(this.a, function(t) {
          return t[0] === e;
        });
        return ~t && this.a.splice(t, 1), !!~t;
      }
    }),
      (e.exports = {
        getConstructor: function(e, t, i, o) {
          var u = e(function(e, n) {
            s(e, u, t, "_i"),
              (e._t = t),
              (e._i = p++),
              (e._l = void 0),
              null != n && c(n, i, e[o], e);
          });
          return (
            n(u.prototype, {
              delete: function(e) {
                if (!a(e)) return !1;
                var i = r(e);
                return !0 === i
                  ? m(h(this, t)).delete(e)
                  : i && l(i, this._i) && delete i[this._i];
              },
              has: function(e) {
                if (!a(e)) return !1;
                var i = r(e);
                return !0 === i ? m(h(this, t)).has(e) : i && l(i, this._i);
              }
            }),
            u
          );
        },
        def: function(e, t, i) {
          var n = r(o(t), !0);
          return !0 === n ? m(e).set(t, i) : (n[e._i] = i), e;
        },
        ufstore: m
      });
  },
  function(e, t, i) {
    var n = i(28),
      r = i(10);
    e.exports = function(e) {
      if (void 0 === e) return 0;
      var t = n(e),
        i = r(t);
      if (t !== i) throw RangeError("Wrong length!");
      return i;
    };
  },
  function(e, t, i) {
    var n = i(51),
      r = i(75),
      o = i(4),
      a = i(5).Reflect;
    e.exports =
      (a && a.ownKeys) ||
      function(e) {
        var t = n.f(o(e)),
          i = r.f;
        return i ? t.concat(i(e)) : t;
      };
  },
  function(e, t, i) {
    var n = i(10),
      r = i(105),
      o = i(37);
    e.exports = function(e, t, i, a) {
      var s = String(o(e)),
        c = s.length,
        u = void 0 === i ? " " : String(i),
        l = n(t);
      if (l <= c || "" == u) return s;
      var h = l - c,
        f = r.call(u, Math.ceil(h / u.length));
      return f.length > h && (f = f.slice(0, h)), a ? f + s : s + f;
    };
  },
  function(e, t, i) {
    var n = i(48),
      r = i(24),
      o = i(65).f;
    e.exports = function(e) {
      return function(t) {
        for (var i, a = r(t), s = n(a), c = s.length, u = 0, l = []; c > u; )
          o.call(a, (i = s[u++])) && l.push(e ? [i, a[i]] : a[i]);
        return l;
      };
    };
  },
  function(e, t) {
    var i = {}.toString;
    e.exports =
      Array.isArray ||
      function(e) {
        return "[object Array]" == i.call(e);
      };
  },
  function(e, t, i) {
    "use strict";
    (function(t, n) {
      var r = i(86);
      e.exports = y;
      var o,
        a = i(168);
      y.ReadableState = v;
      i(42).EventEmitter;
      var s = function(e, t) {
          return e.listeners(t).length;
        },
        c = i(170),
        u = i(2).Buffer,
        l = t.Uint8Array || function() {};
      var h = i(68);
      h.inherits = i(1);
      var f = i(404),
        d = void 0;
      d = f && f.debuglog ? f.debuglog("stream") : function() {};
      var p,
        m = i(405),
        g = i(171);
      h.inherits(y, c);
      var _ = ["error", "close", "destroy", "pause", "resume"];
      function v(e, t) {
        e = e || {};
        var n = t instanceof (o = o || i(54));
        (this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var r = e.highWaterMark,
          a = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || 0 === r ? r : n && (a || 0 === a) ? a : s),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new m()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (p || (p = i(124).StringDecoder),
            (this.decoder = new p(e.encoding)),
            (this.encoding = e.encoding));
      }
      function y(e) {
        if (((o = o || i(54)), !(this instanceof y))) return new y(e);
        (this._readableState = new v(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          c.call(this);
      }
      function b(e, t, i, n, r) {
        var o,
          a = e._readableState;
        null === t
          ? ((a.reading = !1),
            (function(e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var i = t.decoder.end();
                i &&
                  i.length &&
                  (t.buffer.push(i), (t.length += t.objectMode ? 1 : i.length));
              }
              (t.ended = !0), x(e);
            })(e, a))
          : (r ||
              (o = (function(e, t) {
                var i;
                (n = t),
                  u.isBuffer(n) ||
                    n instanceof l ||
                    "string" == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (i = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return i;
              })(a, t)),
            o
              ? e.emit("error", o)
              : a.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  a.objectMode ||
                  Object.getPrototypeOf(t) === u.prototype ||
                  (t = (function(e) {
                    return u.from(e);
                  })(t)),
                n
                  ? a.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : E(e, a, t, !0)
                  : a.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((a.reading = !1),
                    a.decoder && !i
                      ? ((t = a.decoder.write(t)),
                        a.objectMode || 0 !== t.length
                          ? E(e, a, t, !1)
                          : C(e, a))
                      : E(e, a, t, !1)))
              : n || (a.reading = !1));
        return (function(e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(a);
      }
      function E(e, t, i, n) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", i), e.read(0))
          : ((t.length += t.objectMode ? 1 : i.length),
            n ? t.buffer.unshift(i) : t.buffer.push(i),
            t.needReadable && x(e)),
          C(e, t);
      }
      Object.defineProperty(y.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function(e) {
          this._readableState && (this._readableState.destroyed = e);
        }
      }),
        (y.prototype.destroy = g.destroy),
        (y.prototype._undestroy = g.undestroy),
        (y.prototype._destroy = function(e, t) {
          this.push(null), t(e);
        }),
        (y.prototype.push = function(e, t) {
          var i,
            n = this._readableState;
          return (
            n.objectMode
              ? (i = !0)
              : "string" == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = u.from(e, t)), (t = "")),
                (i = !0)),
            b(this, e, t, !1, i)
          );
        }),
        (y.prototype.unshift = function(e) {
          return b(this, e, null, !0, !1);
        }),
        (y.prototype.isPaused = function() {
          return !1 === this._readableState.flowing;
        }),
        (y.prototype.setEncoding = function(e) {
          return (
            p || (p = i(124).StringDecoder),
            (this._readableState.decoder = new p(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      var T = 8388608;
      function A(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function(e) {
                return (
                  e >= T
                    ? (e = T)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function x(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (d("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? r.nextTick(S, e) : S(e));
      }
      function S(e) {
        d("emit readable"), e.emit("readable"), O(e);
      }
      function C(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(P, e, t));
      }
      function P(e, t) {
        for (
          var i = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (d("maybeReadMore read 0"), e.read(0), i !== t.length);

        )
          i = t.length;
        t.readingMore = !1;
      }
      function R(e) {
        d("readable nexttick read 0"), e.read(0);
      }
      function M(e, t) {
        t.reading || (d("resume read 0"), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit("resume"),
          O(e),
          t.flowing && !t.reading && e.read(0);
      }
      function O(e) {
        var t = e._readableState;
        for (d("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function w(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (i = t.buffer.shift())
              : !e || e >= t.length
              ? ((i = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (i = (function(e, t, i) {
                  var n;
                  e < t.head.data.length
                    ? ((n = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (n =
                        e === t.head.data.length
                          ? t.shift()
                          : i
                          ? (function(e, t) {
                              var i = t.head,
                                n = 1,
                                r = i.data;
                              e -= r.length;
                              for (; (i = i.next); ) {
                                var o = i.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (a === o.length
                                    ? (r += o)
                                    : (r += o.slice(0, e)),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++n,
                                      i.next
                                        ? (t.head = i.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = i), (i.data = o.slice(a)));
                                  break;
                                }
                                ++n;
                              }
                              return (t.length -= n), r;
                            })(e, t)
                          : (function(e, t) {
                              var i = u.allocUnsafe(e),
                                n = t.head,
                                r = 1;
                              n.data.copy(i), (e -= n.data.length);
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (o.copy(i, i.length - e, 0, a),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++r,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(a)));
                                  break;
                                }
                                ++r;
                              }
                              return (t.length -= r), i;
                            })(e, t));
                  return n;
                })(e, t.buffer, t.decoder)),
            i);
        var i;
      }
      function I(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), r.nextTick(D, t, e));
      }
      function D(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function L(e, t) {
        for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
        return -1;
      }
      (y.prototype.read = function(e) {
        d("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          i = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            d("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? I(this) : x(this),
            null
          );
        if (0 === (e = A(e, t)) && t.ended)
          return 0 === t.length && I(this), null;
        var n,
          r = t.needReadable;
        return (
          d("need readable", r),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            d("length less than watermark", (r = !0)),
          t.ended || t.reading
            ? d("reading or ended", (r = !1))
            : r &&
              (d("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = A(i, t))),
          null === (n = e > 0 ? w(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), i !== e && t.ended && I(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (y.prototype._read = function(e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (y.prototype.pipe = function(e, t) {
          var i = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          (o.pipesCount += 1), d("pipe count=%d opts=%j", o.pipesCount, t);
          var c =
            (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? l : y;
          function u(t, n) {
            d("onunpipe"),
              t === i &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                d("cleanup"),
                e.removeListener("close", _),
                e.removeListener("finish", v),
                e.removeListener("drain", h),
                e.removeListener("error", g),
                e.removeListener("unpipe", u),
                i.removeListener("end", l),
                i.removeListener("end", y),
                i.removeListener("data", m),
                (f = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  h());
          }
          function l() {
            d("onend"), e.end();
          }
          o.endEmitted ? r.nextTick(c) : i.once("end", c), e.on("unpipe", u);
          var h = (function(e) {
            return function() {
              var t = e._readableState;
              d("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, "data") && ((t.flowing = !0), O(e));
            };
          })(i);
          e.on("drain", h);
          var f = !1;
          var p = !1;
          function m(t) {
            d("ondata"),
              (p = !1),
              !1 !== e.write(t) ||
                p ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== L(o.pipes, e))) &&
                  !f &&
                  (d(
                    "false write response, pause",
                    i._readableState.awaitDrain
                  ),
                  i._readableState.awaitDrain++,
                  (p = !0)),
                i.pause());
          }
          function g(t) {
            d("onerror", t),
              y(),
              e.removeListener("error", g),
              0 === s(e, "error") && e.emit("error", t);
          }
          function _() {
            e.removeListener("finish", v), y();
          }
          function v() {
            d("onfinish"), e.removeListener("close", _), y();
          }
          function y() {
            d("unpipe"), i.unpipe(e);
          }
          return (
            i.on("data", m),
            (function(e, t, i) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, i);
              e._events && e._events[t]
                ? a(e._events[t])
                  ? e._events[t].unshift(i)
                  : (e._events[t] = [i, e._events[t]])
                : e.on(t, i);
            })(e, "error", g),
            e.once("close", _),
            e.once("finish", v),
            e.emit("pipe", i),
            o.flowing || (d("pipe resume"), i.resume()),
            e
          );
        }),
        (y.prototype.unpipe = function(e) {
          var t = this._readableState,
            i = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return e && e !== t.pipes
              ? this
              : (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, i),
                this);
          if (!e) {
            var n = t.pipes,
              r = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < r; o++) n[o].emit("unpipe", this, i);
            return this;
          }
          var a = L(t.pipes, e);
          return -1 === a
            ? this
            : (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, i),
              this);
        }),
        (y.prototype.on = function(e, t) {
          var i = c.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var n = this._readableState;
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && x(this) : r.nextTick(R, this));
          }
          return i;
        }),
        (y.prototype.addListener = y.prototype.on),
        (y.prototype.resume = function() {
          var e = this._readableState;
          return (
            e.flowing ||
              (d("resume"),
              (e.flowing = !0),
              (function(e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(M, e, t));
              })(this, e)),
            this
          );
        }),
        (y.prototype.pause = function() {
          return (
            d("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (d("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (y.prototype.wrap = function(e) {
          var t = this,
            i = this._readableState,
            n = !1;
          for (var r in (e.on("end", function() {
            if ((d("wrapped end"), i.decoder && !i.ended)) {
              var e = i.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function(r) {
            (d("wrapped data"),
            i.decoder && (r = i.decoder.write(r)),
            i.objectMode && null == r) ||
              ((i.objectMode || (r && r.length)) &&
                (t.push(r) || ((n = !0), e.pause())));
          }),
          e))
            void 0 === this[r] &&
              "function" == typeof e[r] &&
              (this[r] = (function(t) {
                return function() {
                  return e[t].apply(e, arguments);
                };
              })(r));
          for (var o = 0; o < _.length; o++)
            e.on(_[o], this.emit.bind(this, _[o]));
          return (
            (this._read = function(t) {
              d("wrapped _read", t), n && ((n = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(y.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._readableState.highWaterMark;
          }
        }),
        (y._fromList = w);
    }.call(this, i(15), i(27)));
  },
  function(e, t, i) {
    e.exports = i(42).EventEmitter;
  },
  function(e, t, i) {
    "use strict";
    var n = i(86);
    function r(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function(e, t) {
        var i = this,
          o = this._readableState && this._readableState.destroyed,
          a = this._writableState && this._writableState.destroyed;
        return o || a
          ? (t
              ? t(e)
              : !e ||
                (this._writableState && this._writableState.errorEmitted) ||
                n.nextTick(r, this, e),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function(e) {
              !t && e
                ? (n.nextTick(r, i, e),
                  i._writableState && (i._writableState.errorEmitted = !0))
                : t && t(e);
            }),
            this);
      },
      undestroy: function() {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      }
    };
  },
  function(e, t, i) {
    "use strict";
    e.exports = a;
    var n = i(54),
      r = i(68);
    function o(e, t) {
      var i = this._transformState;
      i.transforming = !1;
      var n = i.writecb;
      if (!n)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (i.writechunk = null),
        (i.writecb = null),
        null != t && this.push(t),
        n(e);
      var r = this._readableState;
      (r.reading = !1),
        (r.needReadable || r.length < r.highWaterMark) &&
          this._read(r.highWaterMark);
    }
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      n.call(this, e),
        (this._transformState = {
          afterTransform: o.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", s);
    }
    function s() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function(t, i) {
            c(e, t, i);
          })
        : c(this, null, null);
    }
    function c(e, t, i) {
      if (t) return e.emit("error", t);
      if ((null != i && e.push(i), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (r.inherits = i(1)),
      r.inherits(a, n),
      (a.prototype.push = function(e, t) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, e, t)
        );
      }),
      (a.prototype._transform = function(e, t, i) {
        throw new Error("_transform() is not implemented");
      }),
      (a.prototype._write = function(e, t, i) {
        var n = this._transformState;
        if (
          ((n.writecb = i),
          (n.writechunk = e),
          (n.writeencoding = t),
          !n.transforming)
        ) {
          var r = this._readableState;
          (n.needTransform || r.needReadable || r.length < r.highWaterMark) &&
            this._read(r.highWaterMark);
        }
      }),
      (a.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (a.prototype._destroy = function(e, t) {
        var i = this;
        n.prototype._destroy.call(this, e, function(e) {
          t(e), i.emit("close");
        });
      });
  },
  function(e, t) {
    e.exports = 1e-6;
  },
  function(e, t) {
    e.exports = function() {
      var e = new Float32Array(3);
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), e;
    };
  },
  function(e, t) {
    e.exports = function(e, t, i) {
      var n = new Float32Array(3);
      return (n[0] = e), (n[1] = t), (n[2] = i), n;
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      var i = t[0],
        n = t[1],
        r = t[2],
        o = i * i + n * n + r * r;
      o > 0 &&
        ((o = 1 / Math.sqrt(o)),
        (e[0] = t[0] * o),
        (e[1] = t[1] * o),
        (e[2] = t[2] * o));
      return e;
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    };
  },
  function(e, t) {
    e.exports = function(e, t, i) {
      return (
        (e[0] = t[0] - i[0]), (e[1] = t[1] - i[1]), (e[2] = t[2] - i[2]), e
      );
    };
  },
  function(e, t) {
    e.exports = function(e, t, i) {
      return (
        (e[0] = t[0] * i[0]), (e[1] = t[1] * i[1]), (e[2] = t[2] * i[2]), e
      );
    };
  },
  function(e, t) {
    e.exports = function(e, t, i) {
      return (
        (e[0] = t[0] / i[0]), (e[1] = t[1] / i[1]), (e[2] = t[2] / i[2]), e
      );
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      var i = t[0] - e[0],
        n = t[1] - e[1],
        r = t[2] - e[2];
      return Math.sqrt(i * i + n * n + r * r);
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      var i = t[0] - e[0],
        n = t[1] - e[1],
        r = t[2] - e[2];
      return i * i + n * n + r * r;
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e[0],
        i = e[1],
        n = e[2];
      return Math.sqrt(t * t + i * i + n * n);
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e[0],
        i = e[1],
        n = e[2];
      return t * t + i * i + n * n;
    };
  },
  function(e, t, i) {
    "use strict";
    e.exports = function(e) {
      for (var t = new Array(e), i = 0; i < e; ++i) t[i] = i;
      return t;
    };
  },
  function(e, t, i) {
    (function(e, n) {
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var o = /%[sdj%]/g;
      (t.format = function(e) {
        if (!v(e)) {
          for (var t = [], i = 0; i < arguments.length; i++)
            t.push(c(arguments[i]));
          return t.join(" ");
        }
        i = 1;
        for (
          var n = arguments,
            r = n.length,
            a = String(e).replace(o, function(e) {
              if ("%%" === e) return "%";
              if (i >= r) return e;
              switch (e) {
                case "%s":
                  return String(n[i++]);
                case "%d":
                  return Number(n[i++]);
                case "%j":
                  try {
                    return JSON.stringify(n[i++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            s = n[i];
          i < r;
          s = n[++i]
        )
          g(s) || !E(s) ? (a += " " + s) : (a += " " + c(s));
        return a;
      }),
        (t.deprecate = function(i, r) {
          if (y(e.process))
            return function() {
              return t.deprecate(i, r).apply(this, arguments);
            };
          if (!0 === n.noDeprecation) return i;
          var o = !1;
          return function() {
            if (!o) {
              if (n.throwDeprecation) throw new Error(r);
              n.traceDeprecation ? console.trace(r) : console.error(r),
                (o = !0);
            }
            return i.apply(this, arguments);
          };
        });
      var a,
        s = {};
      function c(e, i) {
        var n = { seen: [], stylize: l };
        return (
          arguments.length >= 3 && (n.depth = arguments[2]),
          arguments.length >= 4 && (n.colors = arguments[3]),
          m(i) ? (n.showHidden = i) : i && t._extend(n, i),
          y(n.showHidden) && (n.showHidden = !1),
          y(n.depth) && (n.depth = 2),
          y(n.colors) && (n.colors = !1),
          y(n.customInspect) && (n.customInspect = !0),
          n.colors && (n.stylize = u),
          h(n, e, n.depth)
        );
      }
      function u(e, t) {
        var i = c.styles[t];
        return i
          ? "[" + c.colors[i][0] + "m" + e + "[" + c.colors[i][1] + "m"
          : e;
      }
      function l(e, t) {
        return e;
      }
      function h(e, i, n) {
        if (
          e.customInspect &&
          i &&
          x(i.inspect) &&
          i.inspect !== t.inspect &&
          (!i.constructor || i.constructor.prototype !== i)
        ) {
          var r = i.inspect(n, e);
          return v(r) || (r = h(e, r, n)), r;
        }
        var o = (function(e, t) {
          if (y(t)) return e.stylize("undefined", "undefined");
          if (v(t)) {
            var i =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(i, "string");
          }
          if (_(t)) return e.stylize("" + t, "number");
          if (m(t)) return e.stylize("" + t, "boolean");
          if (g(t)) return e.stylize("null", "null");
        })(e, i);
        if (o) return o;
        var a = Object.keys(i),
          s = (function(e) {
            var t = {};
            return (
              e.forEach(function(e, i) {
                t[e] = !0;
              }),
              t
            );
          })(a);
        if (
          (e.showHidden && (a = Object.getOwnPropertyNames(i)),
          A(i) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
        )
          return f(i);
        if (0 === a.length) {
          if (x(i)) {
            var c = i.name ? ": " + i.name : "";
            return e.stylize("[Function" + c + "]", "special");
          }
          if (b(i))
            return e.stylize(RegExp.prototype.toString.call(i), "regexp");
          if (T(i)) return e.stylize(Date.prototype.toString.call(i), "date");
          if (A(i)) return f(i);
        }
        var u,
          l = "",
          E = !1,
          S = ["{", "}"];
        (p(i) && ((E = !0), (S = ["[", "]"])), x(i)) &&
          (l = " [Function" + (i.name ? ": " + i.name : "") + "]");
        return (
          b(i) && (l = " " + RegExp.prototype.toString.call(i)),
          T(i) && (l = " " + Date.prototype.toUTCString.call(i)),
          A(i) && (l = " " + f(i)),
          0 !== a.length || (E && 0 != i.length)
            ? n < 0
              ? b(i)
                ? e.stylize(RegExp.prototype.toString.call(i), "regexp")
                : e.stylize("[Object]", "special")
              : (e.seen.push(i),
                (u = E
                  ? (function(e, t, i, n, r) {
                      for (var o = [], a = 0, s = t.length; a < s; ++a)
                        R(t, String(a))
                          ? o.push(d(e, t, i, n, String(a), !0))
                          : o.push("");
                      return (
                        r.forEach(function(r) {
                          r.match(/^\d+$/) || o.push(d(e, t, i, n, r, !0));
                        }),
                        o
                      );
                    })(e, i, n, s, a)
                  : a.map(function(t) {
                      return d(e, i, n, s, t, E);
                    })),
                e.seen.pop(),
                (function(e, t, i) {
                  if (
                    e.reduce(function(e, t) {
                      return (
                        0,
                        t.indexOf("\n") >= 0 && 0,
                        e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                      );
                    }, 0) > 60
                  )
                    return (
                      i[0] +
                      ("" === t ? "" : t + "\n ") +
                      " " +
                      e.join(",\n  ") +
                      " " +
                      i[1]
                    );
                  return i[0] + t + " " + e.join(", ") + " " + i[1];
                })(u, l, S))
            : S[0] + l + S[1]
        );
      }
      function f(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function d(e, t, i, n, r, o) {
        var a, s, c;
        if (
          ((c = Object.getOwnPropertyDescriptor(t, r) || { value: t[r] }).get
            ? (s = c.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : c.set && (s = e.stylize("[Setter]", "special")),
          R(n, r) || (a = "[" + r + "]"),
          s ||
            (e.seen.indexOf(c.value) < 0
              ? (s = g(i) ? h(e, c.value, null) : h(e, c.value, i - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (s = o
                  ? s
                      .split("\n")
                      .map(function(e) {
                        return "  " + e;
                      })
                      .join("\n")
                      .substr(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function(e) {
                        return "   " + e;
                      })
                      .join("\n"))
              : (s = e.stylize("[Circular]", "special"))),
          y(a))
        ) {
          if (o && r.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = e.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function p(e) {
        return Array.isArray(e);
      }
      function m(e) {
        return "boolean" == typeof e;
      }
      function g(e) {
        return null === e;
      }
      function _(e) {
        return "number" == typeof e;
      }
      function v(e) {
        return "string" == typeof e;
      }
      function y(e) {
        return void 0 === e;
      }
      function b(e) {
        return E(e) && "[object RegExp]" === S(e);
      }
      function E(e) {
        return "object" === r(e) && null !== e;
      }
      function T(e) {
        return E(e) && "[object Date]" === S(e);
      }
      function A(e) {
        return E(e) && ("[object Error]" === S(e) || e instanceof Error);
      }
      function x(e) {
        return "function" == typeof e;
      }
      function S(e) {
        return Object.prototype.toString.call(e);
      }
      function C(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function(e) {
        if (
          (y(a) && (a = n.env.NODE_DEBUG || ""), (e = e.toUpperCase()), !s[e])
        )
          if (new RegExp("\\b" + e + "\\b", "i").test(a)) {
            var i = n.pid;
            s[e] = function() {
              var n = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, i, n);
            };
          } else s[e] = function() {};
        return s[e];
      }),
        (t.inspect = c),
        (c.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }),
        (c.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        }),
        (t.isArray = p),
        (t.isBoolean = m),
        (t.isNull = g),
        (t.isNullOrUndefined = function(e) {
          return null == e;
        }),
        (t.isNumber = _),
        (t.isString = v),
        (t.isSymbol = function(e) {
          return "symbol" === r(e);
        }),
        (t.isUndefined = y),
        (t.isRegExp = b),
        (t.isObject = E),
        (t.isDate = T),
        (t.isError = A),
        (t.isFunction = x),
        (t.isPrimitive = function(e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" === r(e) ||
            void 0 === e
          );
        }),
        (t.isBuffer = i(449));
      var P = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function R(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function() {
        var e, i;
        console.log(
          "%s - %s",
          ((e = new Date()),
          (i = [C(e.getHours()), C(e.getMinutes()), C(e.getSeconds())].join(
            ":"
          )),
          [e.getDate(), P[e.getMonth()], i].join(" ")),
          t.format.apply(t, arguments)
        );
      }),
        (t.inherits = i(1)),
        (t._extend = function(e, t) {
          if (!t || !E(t)) return e;
          for (var i = Object.keys(t), n = i.length; n--; ) e[i[n]] = t[i[n]];
          return e;
        });
    }.call(this, i(15), i(27)));
  },
  function(e, t, i) {
    "use strict";
    var n = [],
      r = [],
      o = [],
      a = [],
      s = [],
      c = [],
      u = [],
      l = [],
      h = [],
      f = [],
      d = [],
      p = [];
    e.exports = function(e, t, i, m, g, _) {
      for (var v = u, y = h, b = f, E = p, T = 0; T < 3; T++)
        (v[T] = +i[T]), (b[T] = +t.max[T]), (y[T] = +t.base[T]);
      _ || (_ = 1e-10);
      var A = (function(e, t, i, u, h, f) {
        var p = n,
          m = r,
          g = o,
          _ = a,
          v = s,
          y = c,
          b = l,
          E = Math.floor,
          T = 0,
          A = 0,
          x = 0,
          S = 0,
          C = 0;
        if ((P(), 0 === x)) return 0;
        for (S = O(); A <= x; ) {
          if (R(S) && M()) return T;
          S = O();
        }
        for (T += x, C = 0; C < 3; C++) (u[C] += i[C]), (h[C] += i[C]);
        return T;
        function P() {
          if (
            ((A = 0),
            0 !== (x = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2])))
          )
            for (var e = 0; e < 3; e++) {
              var t = i[e] >= 0;
              _[e] = t ? 1 : -1;
              var n = t ? h[e] : u[e];
              (p[e] = t ? u[e] : h[e]),
                (m[e] = w(n, _[e])),
                (g[e] = I(p[e], _[e])),
                (b[e] = i[e] / x),
                (v[e] = Math.abs(1 / b[e]));
              var r = t ? m[e] + 1 - n : n - m[e];
              y[e] = v[e] < 1 / 0 ? v[e] * r : 1 / 0;
            }
        }
        function R(t) {
          for (
            var i = _[0],
              n = 0 === t ? m[0] : g[0],
              r = m[0] + i,
              o = _[1],
              a = 1 === t ? m[1] : g[1],
              s = m[1] + o,
              c = _[2],
              u = 2 === t ? m[2] : g[2],
              l = m[2] + c,
              h = n;
            h != r;
            h += i
          )
            for (var f = a; f != s; f += o)
              for (var d = u; d != l; d += c) if (e(h, f, d)) return !0;
          return !1;
        }
        function M() {
          T += A;
          var e = _[S],
            n = A / x,
            r = d;
          for (C = 0; C < 3; C++) {
            var o = i[C] * n;
            (u[C] += o), (h[C] += o), (r[C] = i[C] - o);
          }
          if (
            (e > 0 ? (h[S] = Math.round(h[S])) : (u[S] = Math.round(u[S])),
            t(T, S, e, r))
          )
            return !0;
          for (C = 0; C < 3; C++) i[C] = r[C];
          return P(), 0 === x;
        }
        function O() {
          var e = y[0] < y[1] ? (y[0] < y[2] ? 0 : 2) : y[1] < y[2] ? 1 : 2,
            t = y[e] - A;
          for (A = y[e], m[e] += _[e], y[e] += v[e], C = 0; C < 3; C++)
            (p[C] += t * b[C]), (g[C] = I(p[C], _[C]));
          return e;
        }
        function w(e, t) {
          return E(e - t * f);
        }
        function I(e, t) {
          return E(e + t * f);
        }
      })(e, m, v, y, b, _);
      if (!g) {
        for (T = 0; T < 3; T++)
          E[T] = i[T] > 0 ? b[T] - t.max[T] : y[T] - t.base[T];
        t.translate(E);
      }
      return A;
    };
  },
  function(e, t, i) {
    "use strict";
    var n = {};
    e.exports = n;
    var r = 13,
      o = 1 << r++,
      a = 1 << r++,
      s = 1 << r++;
    (n.ID_MASK = 511),
      (n.VAR_MASK = 7680),
      (n.SOLID_BIT = o),
      (n.OPAQUE_BIT = a),
      (n.OBJECT_BIT = s);
  },
  function(e, t, i) {
    "use strict";
    e.exports = function(e) {
      return (function(e) {
        var t = new Float32Array(256),
          i = new Float32Array(256),
          n = new Float32Array(256),
          r = new Float32Array(256),
          o = new Uint8ClampedArray(1024),
          a = new BABYLON.DynamicTexture(
            "waterTexture",
            { width: 16, height: 16 },
            e.rendering._scene
          );
        (a.hasAlpha = !0),
          (a.anisotropicFilteringLevel = 1),
          a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE),
          (a.wrapU = 1),
          (a.wrapV = 1);
        var s = a.getContext(),
          c = new ImageData(o, 16, 16),
          u = 0;
        e.on("tick", function(e) {
          ++u % 2 != 0 && l.redraw();
        });
        var l = {
          texture: a,
          tick: function() {},
          redraw: function() {
            l.update(),
              s.clearRect(0, 0, 16, 16),
              s.putImageData(c, 0, 0),
              a.update();
          },
          update: function() {
            for (var e = 0; e < 16; e++)
              for (var a = 0; a < 16; a++) {
                for (var s = 0, c = e - 1; c <= e + 1; c++) {
                  var u = 15 & c,
                    l = 15 & a;
                  s += t[u + 16 * l];
                }
                i[e + 16 * a] = s / 3.3 + 0.8 * n[e + 16 * a];
              }
            for (var e = 0; e < 16; e++)
              for (var a = 0; a < 16; a++)
                (n[e + 16 * a] += 0.05 * r[e + 16 * a]),
                  n[e + 16 * a] < 0 && (n[e + 16 * a] = 0),
                  (r[e + 16 * a] -= 0.1),
                  Math.random() < 0.05 && (r[e + 16 * a] = 0.5);
            var h = i;
            (i = t), (t = h);
            for (var f = 0; f < 256; f++) {
              var s = t[f];
              s > 1 && (s = 1), s < 0 && (s = 0);
              var d = s * s,
                p = 32 + 32 * d,
                m = 50 + 64 * d,
                g = 196 + 50 * d;
              (o[4 * f + 0] = p),
                (o[4 * f + 1] = m),
                (o[4 * f + 2] = 255),
                (o[4 * f + 3] = g);
            }
          }
        };
        return (e.waterTexture = a), l;
      })(e);
    };
  },
  function(e, t, i) {
    "use strict";
    var n,
      r = "undefined" != typeof window ? window.navigator.userAgent : "",
      o = /OS X/.test(r),
      a = /Opera/.test(r),
      s = !/like Gecko/.test(r) && !a,
      c = (e.exports = {
        0: o ? "<menu>" : "<UNK>",
        1: "<mouse 1>",
        2: "<mouse 2>",
        3: "<break>",
        4: "<mouse 3>",
        5: "<mouse 4>",
        6: "<mouse 5>",
        8: "<backspace>",
        9: "<tab>",
        12: "<clear>",
        13: "<enter>",
        16: "<shift>",
        17: "<control>",
        18: "<alt>",
        19: "<pause>",
        20: "<caps-lock>",
        21: "<ime-hangul>",
        23: "<ime-junja>",
        24: "<ime-final>",
        25: "<ime-kanji>",
        27: "<escape>",
        28: "<ime-convert>",
        29: "<ime-nonconvert>",
        30: "<ime-accept>",
        31: "<ime-mode-change>",
        32: "<space>",
        33: "<page-up>",
        34: "<page-down>",
        35: "<end>",
        36: "<home>",
        37: "<left>",
        38: "<up>",
        39: "<right>",
        40: "<down>",
        41: "<select>",
        42: "<print>",
        43: "<execute>",
        44: "<snapshot>",
        45: "<insert>",
        46: "<delete>",
        47: "<help>",
        91: "<meta>",
        92: "<meta>",
        93: o ? "<meta>" : "<menu>",
        95: "<sleep>",
        106: "<num-*>",
        107: "<num-+>",
        108: "<num-enter>",
        109: "<num--\x3e",
        110: "<num-.>",
        111: "<num-/>",
        144: "<num-lock>",
        145: "<scroll-lock>",
        160: "<shift-left>",
        161: "<shift-right>",
        162: "<control-left>",
        163: "<control-right>",
        164: "<alt-left>",
        165: "<alt-right>",
        166: "<browser-back>",
        167: "<browser-forward>",
        168: "<browser-refresh>",
        169: "<browser-stop>",
        170: "<browser-search>",
        171: "<browser-favorites>",
        172: "<browser-home>",
        173: o && s ? "-" : "<volume-mute>",
        174: "<volume-down>",
        175: "<volume-up>",
        176: "<next-track>",
        177: "<prev-track>",
        178: "<stop>",
        179: "<play-pause>",
        180: "<launch-mail>",
        181: "<launch-media-select>",
        182: "<launch-app 1>",
        183: "<launch-app 2>",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        223: "<meta>",
        224: "<meta>",
        226: "<alt-gr>",
        229: "<ime-process>",
        231: a ? "`" : "<unicode>",
        246: "<attention>",
        247: "<crsel>",
        248: "<exsel>",
        249: "<erase-eof>",
        250: "<play>",
        251: "<zoom>",
        252: "<no-name>",
        253: "<pa-1>",
        254: "<clear>"
      });
    for (n = 58; n < 65; ++n) c[n] = String.fromCharCode(n);
    for (n = 48; n < 58; ++n) c[n] = n - 48 + "";
    for (n = 65; n < 91; ++n) c[n] = String.fromCharCode(n);
    for (n = 96; n < 106; ++n) c[n] = "<num-" + (n - 96) + ">";
    for (n = 112; n < 136; ++n) c[n] = "F" + (n - 111);
  },
  function(e, t, i) {
    e.exports = r;
    var n = i(16);
    function r(e, t) {
      if (!(this instanceof r)) return new r(e, t);
      var i = n.create();
      n.add(i, e, t),
        (this.base = n.min(n.create(), e, i)),
        (this.vec = n.clone(t)),
        (this.max = n.max(n.create(), e, i)),
        (this.mag = n.length(this.vec));
    }
    var o = r.prototype;
    (o.width = function() {
      return this.vec[0];
    }),
      (o.height = function() {
        return this.vec[1];
      }),
      (o.depth = function() {
        return this.vec[2];
      }),
      (o.x0 = function() {
        return this.base[0];
      }),
      (o.y0 = function() {
        return this.base[1];
      }),
      (o.z0 = function() {
        return this.base[2];
      }),
      (o.x1 = function() {
        return this.max[0];
      }),
      (o.y1 = function() {
        return this.max[1];
      }),
      (o.z1 = function() {
        return this.max[2];
      }),
      (o.translate = function(e) {
        return (
          n.add(this.max, this.max, e), n.add(this.base, this.base, e), this
        );
      }),
      (o.setPosition = function(e) {
        return n.add(this.max, e, this.vec), n.copy(this.base, e), this;
      }),
      (o.expand = function(e) {
        var t = n.create(),
          i = n.create();
        return (
          n.max(t, e.max, this.max),
          n.min(i, e.base, this.base),
          n.subtract(t, t, i),
          new r(i, t)
        );
      }),
      (o.intersects = function(e) {
        return (
          !(e.base[0] > this.max[0]) &&
          (!(e.base[1] > this.max[1]) &&
            (!(e.base[2] > this.max[2]) &&
              (!(e.max[0] < this.base[0]) &&
                (!(e.max[1] < this.base[1]) && !(e.max[2] < this.base[2])))))
        );
      }),
      (o.touches = function(e) {
        var t = this.union(e);
        return (
          null !== t && (0 == t.width() || 0 == t.height() || 0 == t.depth())
        );
      }),
      (o.union = function(e) {
        if (!this.intersects(e)) return null;
        var t = Math.max(e.base[0], this.base[0]),
          i = Math.max(e.base[1], this.base[1]),
          n = Math.max(e.base[2], this.base[2]);
        return new r(
          [t, i, n],
          [
            Math.min(e.max[0], this.max[0]) - t,
            Math.min(e.max[1], this.max[1]) - i,
            Math.min(e.max[2], this.max[2]) - n
          ]
        );
      });
  },
  function(e, t, i) {
    "use strict";
    e.exports = {
      init: function(e) {
        var t = r.nextPow2(e);
        s.length < t && (n.free(s), (s = n.mallocInt32(t)));
        c.length < t && (n.free(c), (c = n.mallocInt32(t)));
        u.length < t && (n.free(u), (u = n.mallocInt32(t)));
        l.length < t && (n.free(l), (l = n.mallocInt32(t)));
        h.length < t && (n.free(h), (h = n.mallocInt32(t)));
        f.length < t && (n.free(f), (f = n.mallocInt32(t)));
        var i = 8 * t;
        d.length < i && (n.free(d), (d = n.mallocDouble(i)));
      },
      sweepBipartite: function(e, t, i, n, r, h, f, g, _, v) {
        for (var y = 0, b = 2 * e, E = e - 1, T = b - 1, A = i; A < n; ++A) {
          var x = h[A],
            S = b * A;
          (d[y++] = r[S + E]),
            (d[y++] = -(x + 1)),
            (d[y++] = r[S + T]),
            (d[y++] = x);
        }
        for (var A = f; A < g; ++A) {
          var x = v[A] + a,
            C = b * A;
          (d[y++] = _[C + E]), (d[y++] = -x), (d[y++] = _[C + T]), (d[y++] = x);
        }
        var P = y >>> 1;
        o(d, P);
        for (var R = 0, M = 0, A = 0; A < P; ++A) {
          var O = 0 | d[2 * A + 1];
          if (O >= a) p(u, l, M--, (O = (O - a) | 0));
          else if (O >= 0) p(s, c, R--, O);
          else if (O <= -a) {
            O = (-O - a) | 0;
            for (var w = 0; w < R; ++w) {
              var I = t(s[w], O);
              if (void 0 !== I) return I;
            }
            m(u, l, M++, O);
          } else {
            O = (-O - 1) | 0;
            for (var w = 0; w < M; ++w) {
              var I = t(O, u[w]);
              if (void 0 !== I) return I;
            }
            m(s, c, R++, O);
          }
        }
      },
      sweepComplete: function(e, t, i, n, r, a, g, _, v, y) {
        for (var b = 0, E = 2 * e, T = e - 1, A = E - 1, x = i; x < n; ++x) {
          var S = (a[x] + 1) << 1,
            C = E * x;
          (d[b++] = r[C + T]), (d[b++] = -S), (d[b++] = r[C + A]), (d[b++] = S);
        }
        for (var x = g; x < _; ++x) {
          var S = (y[x] + 1) << 1,
            P = E * x;
          (d[b++] = v[P + T]),
            (d[b++] = 1 | -S),
            (d[b++] = v[P + A]),
            (d[b++] = 1 | S);
        }
        var R = b >>> 1;
        o(d, R);
        for (var M = 0, O = 0, w = 0, x = 0; x < R; ++x) {
          var I = 0 | d[2 * x + 1],
            D = 1 & I;
          if (
            (x < R - 1 && I >> 1 == d[2 * x + 3] >> 1 && ((D = 2), (x += 1)),
            I < 0)
          ) {
            for (var L = -(I >> 1) - 1, F = 0; F < w; ++F) {
              var B = t(h[F], L);
              if (void 0 !== B) return B;
            }
            if (0 !== D)
              for (var F = 0; F < M; ++F) {
                var B = t(s[F], L);
                if (void 0 !== B) return B;
              }
            if (1 !== D)
              for (var F = 0; F < O; ++F) {
                var B = t(u[F], L);
                if (void 0 !== B) return B;
              }
            0 === D
              ? m(s, c, M++, L)
              : 1 === D
              ? m(u, l, O++, L)
              : 2 === D && m(h, f, w++, L);
          } else {
            var L = (I >> 1) - 1;
            0 === D
              ? p(s, c, M--, L)
              : 1 === D
              ? p(u, l, O--, L)
              : 2 === D && p(h, f, w--, L);
          }
        }
      },
      scanBipartite: function(e, t, i, n, r, u, l, h, f, g, _, v) {
        var y = 0,
          b = 2 * e,
          E = t,
          T = t + e,
          A = 1,
          x = 1;
        n ? (x = a) : (A = a);
        for (var S = r; S < u; ++S) {
          var C = S + A,
            P = b * S;
          (d[y++] = l[P + E]), (d[y++] = -C), (d[y++] = l[P + T]), (d[y++] = C);
        }
        for (var S = f; S < g; ++S) {
          var C = S + x,
            R = b * S;
          (d[y++] = _[R + E]), (d[y++] = -C);
        }
        var M = y >>> 1;
        o(d, M);
        for (var O = 0, S = 0; S < M; ++S) {
          var w = 0 | d[2 * S + 1];
          if (w < 0) {
            var C = -w,
              I = !1;
            if ((C >= a ? ((I = !n), (C -= a)) : ((I = !!n), (C -= 1)), I))
              m(s, c, O++, C);
            else {
              var D = v[C],
                L = b * C,
                F = _[L + t + 1],
                B = _[L + t + 1 + e];
              e: for (var N = 0; N < O; ++N) {
                var k = s[N],
                  U = b * k;
                if (!(B < l[U + t + 1] || l[U + t + 1 + e] < F)) {
                  for (var V = t + 2; V < e; ++V)
                    if (_[L + V + e] < l[U + V] || l[U + V + e] < _[L + V])
                      continue e;
                  var G,
                    z = h[k];
                  if (void 0 !== (G = n ? i(D, z) : i(z, D))) return G;
                }
              }
            }
          } else p(s, c, O--, w - A);
        }
      },
      scanComplete: function(e, t, i, n, r, c, u, l, h, f, p) {
        for (var m = 0, g = 2 * e, _ = t, v = t + e, y = n; y < r; ++y) {
          var b = y + a,
            E = g * y;
          (d[m++] = c[E + _]), (d[m++] = -b), (d[m++] = c[E + v]), (d[m++] = b);
        }
        for (var y = l; y < h; ++y) {
          var b = y + 1,
            T = g * y;
          (d[m++] = f[T + _]), (d[m++] = -b);
        }
        var A = m >>> 1;
        o(d, A);
        for (var x = 0, y = 0; y < A; ++y) {
          var S = 0 | d[2 * y + 1];
          if (S < 0) {
            var b = -S;
            if (b >= a) s[x++] = b - a;
            else {
              var C = p[(b -= 1)],
                P = g * b,
                R = f[P + t + 1],
                M = f[P + t + 1 + e];
              e: for (var O = 0; O < x; ++O) {
                var w = s[O],
                  I = u[w];
                if (I === C) break;
                var D = g * w;
                if (!(M < c[D + t + 1] || c[D + t + 1 + e] < R)) {
                  for (var L = t + 2; L < e; ++L)
                    if (f[P + L + e] < c[D + L] || c[D + L + e] < f[P + L])
                      continue e;
                  var F = i(I, C);
                  if (void 0 !== F) return F;
                }
              }
            }
          } else {
            for (var b = S - a, O = x - 1; O >= 0; --O)
              if (s[O] === b) {
                for (var L = O + 1; L < x; ++L) s[L - 1] = s[L];
                break;
              }
            --x;
          }
        }
      }
    };
    var n = i(125),
      r = i(126),
      o = i(485),
      a = 1 << 28,
      s = n.mallocInt32(1024),
      c = n.mallocInt32(1024),
      u = n.mallocInt32(1024),
      l = n.mallocInt32(1024),
      h = n.mallocInt32(1024),
      f = n.mallocInt32(1024),
      d = n.mallocDouble(8192);
    function p(e, t, i, n) {
      var r = t[n],
        o = e[i - 1];
      (e[r] = o), (t[o] = r);
    }
    function m(e, t, i, n) {
      (e[i] = n), (t[n] = i);
    }
  },
  function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
      var i = "abcdef".split("").concat(t),
        r = [];
      e.indexOf("lo") >= 0 && r.push("lo=e[k+n]");
      e.indexOf("hi") >= 0 && r.push("hi=e[k+o]");
      return (
        i.push(n.replace("_", r.join()).replace("$", e)),
        Function.apply(void 0, i)
      );
    };
    var n =
      "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m";
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    function overlay(game) {
      var scale = 2,
        buttonscale = scale + 1,
        patternScale = 8,
        width = window.innerWidth,
        height = window.innerHeight,
        mouseOverButton = null,
        tickRate = 500,
        lastTick = 0,
        blinkCount = 0,
        blinkCopy = !1,
        ypos = Math.floor(0.5 * height) - 120 * scale,
        center = Math.floor(0.5 * width),
        urlParams = new URLSearchParams(window.location.search),
        url = window.location.href.split("?")[0];
      if (
        (urlParams.has("size") && urlParams.delete("size"),
        urlParams.has("host"))
      ) {
        var value = urlParams.get("host");
        urlParams.delete("host"),
          urlParams.append("join", value),
          (url += "?" + urlParams.toString()),
          history.pushState && window.history.pushState({ path: url }, "", url);
      } else url = window.location.href;
      var copyTextarea = document.querySelector(".js-copytextarea");
      copyTextarea.value = url;
      var allowedChars =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_'*!\\\"#%/()=+?[]{}<>@|$;",
        username = "";
      game.settings &&
        "" != game.settings.username &&
        null != game.settings.username &&
        (username = game.settings.username);
      var state = 0,
        canvas = document.createElement("canvas");
      (canvas.width = width), (canvas.height = height);
      var context = canvas.getContext("2d");
      context.imageSmoothingEnabled = !1;
      var div = document.getElementById("overlay");
      div.appendChild(canvas),
        (div.style.width = width + "px"),
        (div.style.height = height + "px");
      var patternSize = 16 * patternScale,
        patternCanvas = document.createElement("canvas");
      (patternCanvas.width = patternSize), (patternCanvas.height = patternSize);
      var patternContext = patternCanvas.getContext("2d");
      patternContext.imageSmoothingEnabled = !1;
      var loaded = 0,
        totalLoad = 3,
        checkLoading = function() {
          ++loaded >= totalLoad &&
            (patternContext.drawImage(bg, 0, 0, patternSize, patternSize),
            (patternContext.fillStyle = "rgba(0,0,0,0.7)"),
            patternContext.fillRect(0, 0, patternSize, patternSize),
            (pattern = context.createPattern(patternCanvas, "repeat")),
            obj.redraw());
        },
        bg = new Image();
      (bg.onload = checkLoading), (bg.src = "assets/textures/dirt.png");
      var button = new Image();
      (button.onload = checkLoading),
        (button.src = "assets/textures/button.png");
      var button_over = new Image();
      (button_over.onload = checkLoading),
        (button_over.src = "assets/textures/button_over.png");
      var pattern = context.createPattern(patternCanvas, "repeat"),
        drawText = function(e, t, i, n) {
          (context.font = 12 * scale + "px Minecraft"),
            (context.textBaseline = "alphabetic"),
            (context.textAlign = "center");
          var r = 2 * scale;
          (context.fillStyle = "rgb(63,63,63)"),
            context.fillText(e, t + r, i + r),
            (context.fillStyle = n || "rgb(255,255,255)"),
            context.fillText(e, t, i);
        },
        makeButton = function(e, t, i, n) {
          return {
            str: e,
            x: t,
            y: i,
            over: !1,
            func: n,
            widthscale: 1,
            key: null,
            draw: function() {
              this.widthscale < 1 &&
                ((context.fillStyle = "rgba(0,0,0,1)"),
                context.fillRect(
                  center -
                    scale +
                    this.x * scale -
                    0.5 * button.width * buttonscale * this.widthscale,
                  ypos + this.y * scale,
                  2 * scale + button.width * buttonscale * this.widthscale,
                  button.height * buttonscale
                ));
              var e = button;
              this.over && (e = button_over),
                context.drawImage(
                  e,
                  center +
                    this.x * scale -
                    0.5 * button.width * buttonscale * this.widthscale,
                  ypos + this.y * scale,
                  button.width * buttonscale * this.widthscale,
                  button.height * buttonscale
                );
              var t = "rgb(255,255,255)";
              this.over && (t = "rgb(255,255,160)"),
                drawText(
                  this.str,
                  center + this.x * scale,
                  ypos + this.y * scale + 19 * scale,
                  t
                );
            }
          };
        };
      function submitUsername() {
        var e = username.trim();
        e !== game.hostInfo.hostName &&
          e.length > 0 &&
          ((game.settings.username = e),
          game.emit("saveSettings"),
          game.setName(e),
          obj.hide());
      }
      function copyUrl() {
        var e = document.querySelector(".js-copytextarea");
        e.focus(),
          e.select(),
          (blinkCopy = !0),
          obj.redraw(),
          setTimeout(function() {
            (blinkCopy = !1), obj.redraw();
          }, 250);
        try {
          document.execCommand("copy");
        } catch (e) {}
      }
      function newGame() {
        var e = window.location.href.split("?")[0];
        window.location.href = e;
      }
      function takeOverHost() {
        var e = window.location.href.split("?")[0];
        window.location.href = e;
      }
      function newGameWebrtc() {
        obj.show(0);
      }
      var startButtonHost = makeButton("Start", 78, 170, submitUsername);
      startButtonHost.widthscale = 0.5;
      var startButtonClient = makeButton("Start", 0, 130, submitUsername),
        copyButton = makeButton("Copy", 0, 80, copyUrl),
        copyButtonHidden = makeButton("Copy Hidden", 0, 40, copyUrl),
        newgameButton = makeButton("Launch a new game", 0, 130, newGame),
        newgameHostButton = makeButton(
          "Relaunch the game as a host",
          0,
          120,
          takeOverHost
        ),
        newgameButtonNoWebrtc = makeButton(
          "Launch a new game",
          0,
          130,
          newGameWebrtc
        ),
        array0 = [startButtonHost, copyButton, copyButtonHidden],
        array1 = [startButtonClient],
        array2 = [newgameButton],
        array3 = [newgameHostButton],
        array4 = [newgameButton],
        array5 = [newgameButton],
        array6 = [newgameButtonNoWebrtc],
        activeArray = array1,
        obj = {
          isOpen: !0,
          show: function show(openState) {
            (state = openState),
              1 != state || obj.isWebRTCSupported || (state = 6),
              (activeArray = eval("array" + state)),
              document.addEventListener("keypress", obj.keypress, !1),
              document.addEventListener("keydown", obj.keydown, !1),
              div.addEventListener("mousemove", this.mousemove, !1),
              document.addEventListener("mousedown", this.press, !1),
              (obj.isOpen = !0),
              obj.redraw(),
              (div.style.display = "block"),
              document.exitPointerLock(),
              game.inputs && (game.inputs.state.active = !1);
          },
          hide: function() {
            document.removeEventListener("keypress", obj.keypress),
              document.removeEventListener("keydown", obj.keydown),
              div.removeEventListener("mousemove", this.mousemove),
              document.removeEventListener("mousedown", this.press),
              (obj.isOpen = !1),
              (div.style.display = "none");
            var e = document.getElementById("noa-container");
            setTimeout(function() {
              null != e && e.requestPointerLock();
            }, 200),
              game.inputs && (game.inputs.state.active = !0);
          },
          mousemove: function(e) {
            for (
              var t = e.layerX, i = e.layerY, n = null, r = 0;
              r < activeArray.length;
              r++
            ) {
              var o = activeArray[r],
                a =
                  center +
                  o.x * scale -
                  0.5 * button.width * buttonscale * o.widthscale,
                s = ypos + o.y * scale,
                c = a + button.width * buttonscale * o.widthscale,
                u = s + button.height * buttonscale;
              if (t > a && t < c && i > s && i < u) {
                n = r;
                break;
              }
            }
            null != n &&
              n != mouseOverButton &&
              ((activeArray[n].over = !0), obj.redraw()),
              null == n &&
                null != mouseOverButton &&
                ((activeArray[mouseOverButton].over = !1), obj.redraw()),
              (mouseOverButton = n);
          },
          press: function(e) {
            if (null != activeArray[mouseOverButton]) {
              var t = activeArray[mouseOverButton].func;
              null != t && t();
            }
          },
          keydown: function(e) {
            13 != e.keyCode
              ? (8 == e.keyCode &&
                  username.length > 0 &&
                  (username = username.substring(0, username.length - 1)),
                obj.redraw())
              : submitUsername();
          },
          keypress: function(e) {
            var t = e.key;
            allowedChars.indexOf(t) >= 0 &&
              username.length < 32 &&
              (username += t),
              obj.redraw();
          },
          tick: function() {
            var e = performance.now();
            e < lastTick + tickRate ||
              (blinkCount++, obj.redraw(), (lastTick = e));
          },
          redraw: function() {
            context.clearRect(0, 0, width, height),
              state <= 1 || 3 == state
                ? ((context.fillStyle = "rgba(0,0,0,0.6)"),
                  context.fillRect(0, 0, width, height))
                : ((context.fillStyle = pattern),
                  context.fillRect(0, 0, width, height)),
              (context.font = 14 * scale + "px Minecraft, sans-serif"),
              (context.textBaseline = "alphabetic"),
              (context.textAlign = "center"),
              (context.strokeStyle = "rgba(255,255,255,1)"),
              (context.lineWidth = scale);
            var e = 0;
            if (0 == state) {
              if (
                (drawText("Game generated!", center, ypos - 10 * scale),
                obj.isWebRTCSupported)
              ) {
                drawText(
                  "You are the host. You can invite some (" +
                    (game.hostInfo.maxPlayers - 1) +
                    ") friends to join you.",
                  center,
                  ypos + 24 * scale
                );
                var t = 300 * scale,
                  i = 30 * scale;
                copyButtonHidden.draw(),
                  (context.fillStyle = "rgba(0,0,0,1)"),
                  blinkCopy && (context.fillStyle = "rgba(127,127,127,1)"),
                  context.fillRect(
                    0.5 * width - 0.5 * t,
                    0.5 * height - 80 * scale,
                    t,
                    i
                  ),
                  context.save(),
                  context.rect(
                    0.5 * width - 0.5 * t,
                    0.5 * height - 80 * scale,
                    t,
                    i
                  ),
                  context.clip(),
                  drawText(url, center, ypos + 60 * scale),
                  context.restore(),
                  context.strokeRect(
                    0.5 * width - 0.5 * t,
                    0.5 * height - 80 * scale,
                    t,
                    i
                  ),
                  copyButton.draw(),
                  (e = 40 * scale);
              } else
                drawText(
                  "Your current browser does not have support for WebRTC.",
                  center,
                  ypos + 24 * scale
                ),
                  drawText(
                    "That means you can only play in single player mode.",
                    center,
                    ypos + 41 * scale
                  ),
                  drawText(
                    "Please use another browser to play multiplayer,",
                    center,
                    ypos + 58 * scale
                  ),
                  (startButtonHost.y = 130);
              drawText(
                "Pick a username and start the game.",
                center,
                ypos + 115 * scale + e
              );
              (t = 150 * scale), (i = 30 * scale);
              var n = -78 * scale;
              (context.fillStyle = "rgba(0,0,0,1)"),
                context.fillRect(
                  n + 0.5 * width - 0.5 * t,
                  0.5 * height + 10 * scale + e,
                  t,
                  i
                ),
                context.save(),
                context.rect(
                  n + 0.5 * width - 0.5 * t,
                  0.5 * height + 10 * scale + e,
                  t,
                  i
                ),
                context.clip(),
                drawText(username, center + n, ypos + 150 * scale + e);
              var r = context.measureText(username).width;
              blinkCount % 2 == 0 &&
                ((context.fillStyle = "rgba(255,255,255,1)"),
                context.fillRect(
                  n + center + 0.5 * r,
                  ypos + 135 * scale + e,
                  scale,
                  20 * scale
                )),
                context.restore(),
                context.strokeRect(
                  0.5 * width - 0.5 * t + n,
                  0.5 * height + 10 * scale + e,
                  t,
                  i
                ),
                startButtonHost.draw(),
                drawText(
                  "Left click to place or mine blocks (right click to toggle).",
                  center,
                  ypos + 190 * scale + e
                );
            }
            if (1 == state) {
              var o = "Welcome!";
              "temp" != game.hostInfo.hostName &&
                (o = 'Welcome to "' + game.hostInfo.hostName + '".'),
                drawText(o, center, ypos + 0 * scale),
                drawText(
                  " You are player " +
                    game.hostInfo.playerCount +
                    " of " +
                    game.hostInfo.maxPlayers +
                    ".",
                  center,
                  ypos + 17 * scale
                ),
                drawText(
                  "Pick a username and start the game.",
                  center,
                  ypos + 115 * scale + (e = -40 * scale)
                );
              (t = 300 * scale), (i = 30 * scale);
              (context.fillStyle = "rgba(0,0,0,1)"),
                context.fillRect(
                  0.5 * width - 0.5 * t,
                  0.5 * height + 10 * scale + e,
                  t,
                  i
                ),
                context.save(),
                context.rect(
                  0.5 * width - 0.5 * t,
                  0.5 * height + 10 * scale + e,
                  t,
                  i
                ),
                context.clip(),
                drawText(username, center, ypos + 150 * scale + e);
              r = context.measureText(username).width;
              blinkCount % 2 == 0 &&
                ((context.fillStyle = "rgba(255,255,255,1)"),
                context.fillRect(
                  center + 0.5 * r,
                  ypos + 135 * scale + e,
                  scale,
                  20 * scale
                )),
                context.restore(),
                context.strokeRect(
                  0.5 * width - 0.5 * t,
                  0.5 * height + 10 * scale + e,
                  t,
                  i
                ),
                startButtonClient.draw(),
                drawText(
                  "Left click to place or mine blocks (right click to toggle).",
                  center,
                  ypos + 240 * scale + e
                );
            }
            2 == state &&
              (drawText(
                "The game you are trying to join is full.",
                center,
                ypos + 88 * scale
              ),
              drawText(
                "Come back later or host you own game.",
                center,
                ypos + 105 * scale
              ),
              newgameButton.draw()),
              3 == state &&
                (drawText("The End!", center, ypos + 4 * scale),
                drawText("The host left the game.", center, ypos + 38 * scale),
                drawText(
                  "If you launch a new game you will become the host and be able to",
                  center,
                  ypos + 75 * scale
                ),
                drawText(
                  "invite friends. The new game will be based on this world.",
                  center,
                  ypos + 92 * scale
                ),
                newgameHostButton.draw()),
              4 == state &&
                (drawText(
                  "The game you are trying to join doesn't exist.",
                  center,
                  ypos + 88 * scale
                ),
                drawText(
                  "You can still host a new game and invite your friends.",
                  center,
                  ypos + 105 * scale
                ),
                newgameButton.draw()),
              5 == state &&
                (drawText("You were kicked!", center, ypos + 88 * scale),
                drawText(
                  "You can host a new game and invite your own friends.",
                  center,
                  ypos + 105 * scale
                ),
                newgameButton.draw()),
              6 == state &&
                (drawText(
                  "Your current browser does not have support for WebRTC.",
                  center,
                  ypos + 71 * scale
                ),
                drawText(
                  "If you want to join a game, please use another browser.",
                  center,
                  ypos + 88 * scale
                ),
                drawText(
                  "Or you can launch a single player game.",
                  center,
                  ypos + 105 * scale
                ),
                newgameButtonNoWebrtc.draw());
          },
          resize: function() {
            (scale = 2),
              window.innerHeight < 600 && (scale = 1),
              (buttonscale = 1.5 * scale),
              (width = window.innerWidth),
              (height = window.innerHeight),
              (center = Math.floor(0.5 * width)),
              (ypos = Math.floor(0.5 * height) - 120 * scale),
              (canvas.width = width),
              (canvas.height = height),
              (div.style.width = width + "px"),
              (div.style.height = height + "px"),
              (context.imageSmoothingEnabled = !1),
              obj.redraw();
          },
          isWebRTCSupported: !1
        };
      try {
        var remoteConnection = new RTCPeerConnection();
        (remoteConnection.ondatachannel = function(e) {}),
          (obj.isWebRTCSupported = !0);
      } catch (e) {}
      return obj.hide(), obj;
    }
    module.exports = function(e) {
      return overlay(e);
    };
  },
  function(e, t, i) {
    "use strict";
    e.exports = function(e) {
      var t = e.rendering._scene,
        i = new BABYLON.StandardMaterial("head", t),
        n = new BABYLON.Texture(
          "assets/textures/stevehead.png",
          t,
          !0,
          !1,
          BABYLON.Texture.NEAREST_SAMPLINGMODE
        );
      (i.diffuseTexture = n), (i.specularColor = new BABYLON.Color3(0, 0, 0));
      for (var r = new Array(6), o = 0; o < 6; o++)
        r[o] = new BABYLON.Vector4(o / 8, 0, (o + 1) / 8, 1);
      var a = { width: 0.45, height: 0.45, depth: 0.45, faceUV: r },
        s = BABYLON.MeshBuilder.CreateBox("head", a, t);
      (s.material = i), s.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD);
      var c = new BABYLON.StandardMaterial("torso", t);
      n = new BABYLON.Texture(
        "assets/textures/stevetorso.png",
        t,
        !0,
        !1,
        BABYLON.Texture.NEAREST_SAMPLINGMODE
      );
      (c.diffuseTexture = n), (c.specularColor = new BABYLON.Color3(0, 0, 0));
      for (r = new Array(6), o = 0; o < 6; o++)
        r[o] = new BABYLON.Vector4(o / 8, 0, (o + 1) / 8, 1);
      a = { width: 0.45, height: 0.675, depth: 0.225, faceUV: r };
      var u = BABYLON.MeshBuilder.CreateBox("torso", a, t);
      u.material = c;
      var l = new BABYLON.StandardMaterial("arm", t);
      n = new BABYLON.Texture(
        "assets/textures/stevearm.png",
        t,
        !0,
        !1,
        BABYLON.Texture.NEAREST_SAMPLINGMODE
      );
      (l.diffuseTexture = n), (l.specularColor = new BABYLON.Color3(0, 0, 0));
      for (r = new Array(6), o = 0; o < 6; o++)
        r[o] = new BABYLON.Vector4(o / 8, 0, (o + 1) / 8, 1);
      a = { width: 0.225, height: 0.675, depth: 0.225, faceUV: r };
      var h = BABYLON.MeshBuilder.CreateBox("leftArm", a, t);
      h.material = l;
      var f = BABYLON.MeshBuilder.CreateBox("rightLeg", a, t);
      f.material = l;
      var d = new BABYLON.StandardMaterial("leg", t);
      n = new BABYLON.Texture(
        "assets/textures/steveleg.png",
        t,
        !0,
        !1,
        BABYLON.Texture.NEAREST_SAMPLINGMODE
      );
      (d.diffuseTexture = n), (d.specularColor = new BABYLON.Color3(0, 0, 0));
      for (r = new Array(6), o = 0; o < 6; o++)
        r[o] = new BABYLON.Vector4(o / 8, 0, (o + 1) / 8, 1);
      a = { width: 0.225, height: 0.675, depth: 0.225, faceUV: r };
      var p = BABYLON.MeshBuilder.CreateBox("leftLeg", a, t);
      p.material = d;
      var m = BABYLON.MeshBuilder.CreateBox("rightLeg", a, t);
      (m.material = d),
        h.setPivotPoint(new BABYLON.Vector3(0, 0.225, 0)),
        f.setPivotPoint(new BABYLON.Vector3(0, 0.225, 0)),
        p.setPivotPoint(new BABYLON.Vector3(0, 0.3375, 0)),
        m.setPivotPoint(new BABYLON.Vector3(0, 0.3375, 0)),
        (s.parent = u),
        (p.parent = u),
        (m.parent = u),
        (h.parent = u),
        (f.parent = u),
        (s.position = new BABYLON.Vector3(0, 0.5625, 0)),
        (p.position = new BABYLON.Vector3(0.1125, -0.3375, 0)),
        (m.position = new BABYLON.Vector3(-0.1125, -0.3375, 0)),
        (h.position = new BABYLON.Vector3(0.3375, 0.225, 0)),
        (f.position = new BABYLON.Vector3(-0.3375, 0.225, 0));
      var g = 0,
        _ = 0,
        v = 0;
      return (
        (u.walking = !0),
        (u.animate = function(e) {
          var t = 0.01 * (g += e),
            i = 5e-4 * g,
            n = 65e-5 * g,
            r = 1.2,
            o = 1;
          this.walking || ((r = 0), (o = 0)),
            (_ += (r - _) / 4),
            (v += (o - v) / 4),
            (p.rotation.x = Math.sin(t) * _),
            (m.rotation.x = -Math.sin(t) * _),
            (h.rotation.x = -Math.sin(t) * _),
            (f.rotation.x = Math.sin(t) * _),
            (h.rotation.z = Math.abs(Math.sin(i)) * v),
            (f.rotation.z = -Math.abs(Math.sin(n)) * v);
        }),
        u
      );
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(2).Buffer,
      r = i(128).Transform;
    function o(e) {
      r.call(this),
        (this._block = n.allocUnsafe(e)),
        (this._blockSize = e),
        (this._blockOffset = 0),
        (this._length = [0, 0, 0, 0]),
        (this._finalized = !1);
    }
    i(1)(o, r),
      (o.prototype._transform = function(e, t, i) {
        var n = null;
        try {
          this.update(e, t);
        } catch (e) {
          n = e;
        }
        i(n);
      }),
      (o.prototype._flush = function(e) {
        var t = null;
        try {
          this.push(this.digest());
        } catch (e) {
          t = e;
        }
        e(t);
      }),
      (o.prototype.update = function(e, t) {
        if (
          ((function(e, t) {
            if (!n.isBuffer(e) && "string" != typeof e)
              throw new TypeError(t + " must be a string or a buffer");
          })(e, "Data"),
          this._finalized)
        )
          throw new Error("Digest already called");
        n.isBuffer(e) || (e = n.from(e, t));
        for (
          var i = this._block, r = 0;
          this._blockOffset + e.length - r >= this._blockSize;

        ) {
          for (var o = this._blockOffset; o < this._blockSize; )
            i[o++] = e[r++];
          this._update(), (this._blockOffset = 0);
        }
        for (; r < e.length; ) i[this._blockOffset++] = e[r++];
        for (var a = 0, s = 8 * e.length; s > 0; ++a)
          (this._length[a] += s),
            (s = (this._length[a] / 4294967296) | 0) > 0 &&
              (this._length[a] -= 4294967296 * s);
        return this;
      }),
      (o.prototype._update = function() {
        throw new Error("_update is not implemented");
      }),
      (o.prototype.digest = function(e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)),
          this._block.fill(0),
          (this._blockOffset = 0);
        for (var i = 0; i < 4; ++i) this._length[i] = 0;
        return t;
      }),
      (o.prototype._digest = function() {
        throw new Error("_digest is not implemented");
      }),
      (e.exports = o);
  },
  function(e, t, i) {
    var n = i(1),
      r = i(63),
      o = i(2).Buffer,
      a = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ],
      s = new Array(64);
    function c() {
      this.init(), (this._w = s), r.call(this, 64, 56);
    }
    function u(e, t, i) {
      return i ^ (e & (t ^ i));
    }
    function l(e, t, i) {
      return (e & t) | (i & (e | t));
    }
    function h(e) {
      return (
        ((e >>> 2) | (e << 30)) ^
        ((e >>> 13) | (e << 19)) ^
        ((e >>> 22) | (e << 10))
      );
    }
    function f(e) {
      return (
        ((e >>> 6) | (e << 26)) ^
        ((e >>> 11) | (e << 21)) ^
        ((e >>> 25) | (e << 7))
      );
    }
    function d(e) {
      return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
    }
    n(c, r),
      (c.prototype.init = function() {
        return (
          (this._a = 1779033703),
          (this._b = 3144134277),
          (this._c = 1013904242),
          (this._d = 2773480762),
          (this._e = 1359893119),
          (this._f = 2600822924),
          (this._g = 528734635),
          (this._h = 1541459225),
          this
        );
      }),
      (c.prototype._update = function(e) {
        for (
          var t,
            i = this._w,
            n = 0 | this._a,
            r = 0 | this._b,
            o = 0 | this._c,
            s = 0 | this._d,
            c = 0 | this._e,
            p = 0 | this._f,
            m = 0 | this._g,
            g = 0 | this._h,
            _ = 0;
          _ < 16;
          ++_
        )
          i[_] = e.readInt32BE(4 * _);
        for (; _ < 64; ++_)
          i[_] =
            0 |
            (((((t = i[_ - 2]) >>> 17) | (t << 15)) ^
              ((t >>> 19) | (t << 13)) ^
              (t >>> 10)) +
              i[_ - 7] +
              d(i[_ - 15]) +
              i[_ - 16]);
        for (var v = 0; v < 64; ++v) {
          var y = (g + f(c) + u(c, p, m) + a[v] + i[v]) | 0,
            b = (h(n) + l(n, r, o)) | 0;
          (g = m),
            (m = p),
            (p = c),
            (c = (s + y) | 0),
            (s = o),
            (o = r),
            (r = n),
            (n = (y + b) | 0);
        }
        (this._a = (n + this._a) | 0),
          (this._b = (r + this._b) | 0),
          (this._c = (o + this._c) | 0),
          (this._d = (s + this._d) | 0),
          (this._e = (c + this._e) | 0),
          (this._f = (p + this._f) | 0),
          (this._g = (m + this._g) | 0),
          (this._h = (g + this._h) | 0);
      }),
      (c.prototype._hash = function() {
        var e = o.allocUnsafe(32);
        return (
          e.writeInt32BE(this._a, 0),
          e.writeInt32BE(this._b, 4),
          e.writeInt32BE(this._c, 8),
          e.writeInt32BE(this._d, 12),
          e.writeInt32BE(this._e, 16),
          e.writeInt32BE(this._f, 20),
          e.writeInt32BE(this._g, 24),
          e.writeInt32BE(this._h, 28),
          e
        );
      }),
      (e.exports = c);
  },
  function(e, t, i) {
    var n = i(1),
      r = i(63),
      o = i(2).Buffer,
      a = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ],
      s = new Array(160);
    function c() {
      this.init(), (this._w = s), r.call(this, 128, 112);
    }
    function u(e, t, i) {
      return i ^ (e & (t ^ i));
    }
    function l(e, t, i) {
      return (e & t) | (i & (e | t));
    }
    function h(e, t) {
      return (
        ((e >>> 28) | (t << 4)) ^
        ((t >>> 2) | (e << 30)) ^
        ((t >>> 7) | (e << 25))
      );
    }
    function f(e, t) {
      return (
        ((e >>> 14) | (t << 18)) ^
        ((e >>> 18) | (t << 14)) ^
        ((t >>> 9) | (e << 23))
      );
    }
    function d(e, t) {
      return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
    }
    function p(e, t) {
      return (
        ((e >>> 1) | (t << 31)) ^
        ((e >>> 8) | (t << 24)) ^
        ((e >>> 7) | (t << 25))
      );
    }
    function m(e, t) {
      return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
    }
    function g(e, t) {
      return (
        ((e >>> 19) | (t << 13)) ^
        ((t >>> 29) | (e << 3)) ^
        ((e >>> 6) | (t << 26))
      );
    }
    function _(e, t) {
      return e >>> 0 < t >>> 0 ? 1 : 0;
    }
    n(c, r),
      (c.prototype.init = function() {
        return (
          (this._ah = 1779033703),
          (this._bh = 3144134277),
          (this._ch = 1013904242),
          (this._dh = 2773480762),
          (this._eh = 1359893119),
          (this._fh = 2600822924),
          (this._gh = 528734635),
          (this._hh = 1541459225),
          (this._al = 4089235720),
          (this._bl = 2227873595),
          (this._cl = 4271175723),
          (this._dl = 1595750129),
          (this._el = 2917565137),
          (this._fl = 725511199),
          (this._gl = 4215389547),
          (this._hl = 327033209),
          this
        );
      }),
      (c.prototype._update = function(e) {
        for (
          var t = this._w,
            i = 0 | this._ah,
            n = 0 | this._bh,
            r = 0 | this._ch,
            o = 0 | this._dh,
            s = 0 | this._eh,
            c = 0 | this._fh,
            v = 0 | this._gh,
            y = 0 | this._hh,
            b = 0 | this._al,
            E = 0 | this._bl,
            T = 0 | this._cl,
            A = 0 | this._dl,
            x = 0 | this._el,
            S = 0 | this._fl,
            C = 0 | this._gl,
            P = 0 | this._hl,
            R = 0;
          R < 32;
          R += 2
        )
          (t[R] = e.readInt32BE(4 * R)), (t[R + 1] = e.readInt32BE(4 * R + 4));
        for (; R < 160; R += 2) {
          var M = t[R - 30],
            O = t[R - 30 + 1],
            w = d(M, O),
            I = p(O, M),
            D = m((M = t[R - 4]), (O = t[R - 4 + 1])),
            L = g(O, M),
            F = t[R - 14],
            B = t[R - 14 + 1],
            N = t[R - 32],
            k = t[R - 32 + 1],
            U = (I + B) | 0,
            V = (w + F + _(U, I)) | 0;
          (V =
            ((V = (V + D + _((U = (U + L) | 0), L)) | 0) +
              N +
              _((U = (U + k) | 0), k)) |
            0),
            (t[R] = V),
            (t[R + 1] = U);
        }
        for (var G = 0; G < 160; G += 2) {
          (V = t[G]), (U = t[G + 1]);
          var z = l(i, n, r),
            j = l(b, E, T),
            H = h(i, b),
            W = h(b, i),
            X = f(s, x),
            Y = f(x, s),
            K = a[G],
            Q = a[G + 1],
            q = u(s, c, v),
            Z = u(x, S, C),
            J = (P + Y) | 0,
            $ = (y + X + _(J, P)) | 0;
          $ =
            (($ =
              (($ = ($ + q + _((J = (J + Z) | 0), Z)) | 0) +
                K +
                _((J = (J + Q) | 0), Q)) |
              0) +
              V +
              _((J = (J + U) | 0), U)) |
            0;
          var ee = (W + j) | 0,
            te = (H + z + _(ee, W)) | 0;
          (y = v),
            (P = C),
            (v = c),
            (C = S),
            (c = s),
            (S = x),
            (s = (o + $ + _((x = (A + J) | 0), A)) | 0),
            (o = r),
            (A = T),
            (r = n),
            (T = E),
            (n = i),
            (E = b),
            (i = ($ + te + _((b = (J + ee) | 0), J)) | 0);
        }
        (this._al = (this._al + b) | 0),
          (this._bl = (this._bl + E) | 0),
          (this._cl = (this._cl + T) | 0),
          (this._dl = (this._dl + A) | 0),
          (this._el = (this._el + x) | 0),
          (this._fl = (this._fl + S) | 0),
          (this._gl = (this._gl + C) | 0),
          (this._hl = (this._hl + P) | 0),
          (this._ah = (this._ah + i + _(this._al, b)) | 0),
          (this._bh = (this._bh + n + _(this._bl, E)) | 0),
          (this._ch = (this._ch + r + _(this._cl, T)) | 0),
          (this._dh = (this._dh + o + _(this._dl, A)) | 0),
          (this._eh = (this._eh + s + _(this._el, x)) | 0),
          (this._fh = (this._fh + c + _(this._fl, S)) | 0),
          (this._gh = (this._gh + v + _(this._gl, C)) | 0),
          (this._hh = (this._hh + y + _(this._hl, P)) | 0);
      }),
      (c.prototype._hash = function() {
        var e = o.allocUnsafe(64);
        function t(t, i, n) {
          e.writeInt32BE(t, n), e.writeInt32BE(i, n + 4);
        }
        return (
          t(this._ah, this._al, 0),
          t(this._bh, this._bl, 8),
          t(this._ch, this._cl, 16),
          t(this._dh, this._dl, 24),
          t(this._eh, this._el, 32),
          t(this._fh, this._fl, 40),
          t(this._gh, this._gl, 48),
          t(this._hh, this._hl, 56),
          e
        );
      }),
      (e.exports = c);
  },
  function(e, t, i) {
    "use strict";
    var n = i(1),
      r = i(522),
      o = i(44),
      a = i(2).Buffer,
      s = i(200),
      c = i(129),
      u = i(130),
      l = a.alloc(128);
    function h(e, t) {
      o.call(this, "digest"), "string" == typeof t && (t = a.from(t));
      var i = "sha512" === e || "sha384" === e ? 128 : 64;
      ((this._alg = e), (this._key = t), t.length > i)
        ? (t = ("rmd160" === e ? new c() : u(e)).update(t).digest())
        : t.length < i && (t = a.concat([t, l], i));
      for (
        var n = (this._ipad = a.allocUnsafe(i)),
          r = (this._opad = a.allocUnsafe(i)),
          s = 0;
        s < i;
        s++
      )
        (n[s] = 54 ^ t[s]), (r[s] = 92 ^ t[s]);
      (this._hash = "rmd160" === e ? new c() : u(e)), this._hash.update(n);
    }
    n(h, o),
      (h.prototype._update = function(e) {
        this._hash.update(e);
      }),
      (h.prototype._final = function() {
        var e = this._hash.digest();
        return ("rmd160" === this._alg ? new c() : u(this._alg))
          .update(this._opad)
          .update(e)
          .digest();
      }),
      (e.exports = function(e, t) {
        return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e
          ? new h("rmd160", t)
          : "md5" === e
          ? new r(s, t)
          : new h(e, t);
      });
  },
  function(e, t, i) {
    var n = i(127);
    e.exports = function(e) {
      return new n().update(e).digest();
    };
  },
  function(e) {
    e.exports = {
      sha224WithRSAEncryption: {
        sign: "rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
      },
      "RSA-SHA224": {
        sign: "ecdsa/rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
      },
      sha256WithRSAEncryption: {
        sign: "rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
      },
      "RSA-SHA256": {
        sign: "ecdsa/rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
      },
      sha384WithRSAEncryption: {
        sign: "rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
      },
      "RSA-SHA384": {
        sign: "ecdsa/rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
      },
      sha512WithRSAEncryption: {
        sign: "rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
      },
      "RSA-SHA512": {
        sign: "ecdsa/rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
      },
      "RSA-SHA1": {
        sign: "rsa",
        hash: "sha1",
        id: "3021300906052b0e03021a05000414"
      },
      "ecdsa-with-SHA1": { sign: "ecdsa", hash: "sha1", id: "" },
      sha256: { sign: "ecdsa", hash: "sha256", id: "" },
      sha224: { sign: "ecdsa", hash: "sha224", id: "" },
      sha384: { sign: "ecdsa", hash: "sha384", id: "" },
      sha512: { sign: "ecdsa", hash: "sha512", id: "" },
      "DSA-SHA": { sign: "dsa", hash: "sha1", id: "" },
      "DSA-SHA1": { sign: "dsa", hash: "sha1", id: "" },
      DSA: { sign: "dsa", hash: "sha1", id: "" },
      "DSA-WITH-SHA224": { sign: "dsa", hash: "sha224", id: "" },
      "DSA-SHA224": { sign: "dsa", hash: "sha224", id: "" },
      "DSA-WITH-SHA256": { sign: "dsa", hash: "sha256", id: "" },
      "DSA-SHA256": { sign: "dsa", hash: "sha256", id: "" },
      "DSA-WITH-SHA384": { sign: "dsa", hash: "sha384", id: "" },
      "DSA-SHA384": { sign: "dsa", hash: "sha384", id: "" },
      "DSA-WITH-SHA512": { sign: "dsa", hash: "sha512", id: "" },
      "DSA-SHA512": { sign: "dsa", hash: "sha512", id: "" },
      "DSA-RIPEMD160": { sign: "dsa", hash: "rmd160", id: "" },
      ripemd160WithRSA: {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
      },
      "RSA-RIPEMD160": {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
      },
      md5WithRSAEncryption: {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
      },
      "RSA-MD5": {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
      }
    };
  },
  function(e, t, i) {
    (t.pbkdf2 = i(524)), (t.pbkdf2Sync = i(205));
  },
  function(e, t, i) {
    (function(t) {
      var i = Math.pow(2, 30) - 1;
      function n(e, i) {
        if ("string" != typeof e && !t.isBuffer(e))
          throw new TypeError(i + " must be a buffer or string");
      }
      e.exports = function(e, t, r, o) {
        if ((n(e, "Password"), n(t, "Salt"), "number" != typeof r))
          throw new TypeError("Iterations not a number");
        if (r < 0) throw new TypeError("Bad iterations");
        if ("number" != typeof o)
          throw new TypeError("Key length not a number");
        if (o < 0 || o > i || o != o) throw new TypeError("Bad key length");
      };
    }.call(this, i(9).Buffer));
  },
  function(e, t, i) {
    (function(t) {
      var i;
      t.browser
        ? (i = "utf-8")
        : (i =
            parseInt(t.version.split(".")[0].slice(1), 10) >= 6
              ? "utf-8"
              : "binary");
      e.exports = i;
    }.call(this, i(27)));
  },
  function(e, t, i) {
    var n = i(200),
      r = i(129),
      o = i(130),
      a = i(203),
      s = i(204),
      c = i(2).Buffer,
      u = c.alloc(128),
      l = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
      };
    function h(e, t, i) {
      var a = (function(e) {
          return "rmd160" === e || "ripemd160" === e
            ? function(e) {
                return new r().update(e).digest();
              }
            : "md5" === e
            ? n
            : function(t) {
                return o(e)
                  .update(t)
                  .digest();
              };
        })(e),
        s = "sha512" === e || "sha384" === e ? 128 : 64;
      t.length > s ? (t = a(t)) : t.length < s && (t = c.concat([t, u], s));
      for (
        var h = c.allocUnsafe(s + l[e]), f = c.allocUnsafe(s + l[e]), d = 0;
        d < s;
        d++
      )
        (h[d] = 54 ^ t[d]), (f[d] = 92 ^ t[d]);
      var p = c.allocUnsafe(s + i + 4);
      h.copy(p, 0, 0, s),
        (this.ipad1 = p),
        (this.ipad2 = h),
        (this.opad = f),
        (this.alg = e),
        (this.blocksize = s),
        (this.hash = a),
        (this.size = l[e]);
    }
    (h.prototype.run = function(e, t) {
      return (
        e.copy(t, this.blocksize),
        this.hash(t).copy(this.opad, this.blocksize),
        this.hash(this.opad)
      );
    }),
      (e.exports = function(e, t, i, n, r) {
        a(e, t, i, n),
          c.isBuffer(e) || (e = c.from(e, s)),
          c.isBuffer(t) || (t = c.from(t, s));
        var o = new h((r = r || "sha1"), e, t.length),
          u = c.allocUnsafe(n),
          f = c.allocUnsafe(t.length + 4);
        t.copy(f, 0, 0, t.length);
        for (var d = 0, p = l[r], m = Math.ceil(n / p), g = 1; g <= m; g++) {
          f.writeUInt32BE(g, t.length);
          for (var _ = o.run(f, o.ipad1), v = _, y = 1; y < i; y++) {
            v = o.run(v, o.ipad2);
            for (var b = 0; b < p; b++) _[b] ^= v[b];
          }
          _.copy(u, d), (d += p);
        }
        return u;
      });
  },
  function(e, t, i) {
    var n = i(70),
      r = i(2).Buffer,
      o = i(207);
    function a(e) {
      var t = e._cipher.encryptBlockRaw(e._prev);
      return o(e._prev), t;
    }
    t.encrypt = function(e, t) {
      var i = Math.ceil(t.length / 16),
        o = e._cache.length;
      e._cache = r.concat([e._cache, r.allocUnsafe(16 * i)]);
      for (var s = 0; s < i; s++) {
        var c = a(e),
          u = o + 16 * s;
        e._cache.writeUInt32BE(c[0], u + 0),
          e._cache.writeUInt32BE(c[1], u + 4),
          e._cache.writeUInt32BE(c[2], u + 8),
          e._cache.writeUInt32BE(c[3], u + 12);
      }
      var l = e._cache.slice(0, t.length);
      return (e._cache = e._cache.slice(t.length)), n(t, l);
    };
  },
  function(e, t) {
    e.exports = function(e) {
      for (var t, i = e.length; i--; ) {
        if (255 !== (t = e.readUInt8(i))) {
          t++, e.writeUInt8(t, i);
          break;
        }
        e.writeUInt8(0, i);
      }
    };
  },
  function(e) {
    e.exports = {
      "aes-128-ecb": {
        cipher: "AES",
        key: 128,
        iv: 0,
        mode: "ECB",
        type: "block"
      },
      "aes-192-ecb": {
        cipher: "AES",
        key: 192,
        iv: 0,
        mode: "ECB",
        type: "block"
      },
      "aes-256-ecb": {
        cipher: "AES",
        key: 256,
        iv: 0,
        mode: "ECB",
        type: "block"
      },
      "aes-128-cbc": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      "aes-192-cbc": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      "aes-256-cbc": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      aes128: { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" },
      aes192: { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" },
      aes256: { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" },
      "aes-128-cfb": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB",
        type: "stream"
      },
      "aes-192-cfb": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB",
        type: "stream"
      },
      "aes-256-cfb": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB",
        type: "stream"
      },
      "aes-128-cfb8": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB8",
        type: "stream"
      },
      "aes-192-cfb8": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB8",
        type: "stream"
      },
      "aes-256-cfb8": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB8",
        type: "stream"
      },
      "aes-128-cfb1": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB1",
        type: "stream"
      },
      "aes-192-cfb1": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB1",
        type: "stream"
      },
      "aes-256-cfb1": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB1",
        type: "stream"
      },
      "aes-128-ofb": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "OFB",
        type: "stream"
      },
      "aes-192-ofb": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "OFB",
        type: "stream"
      },
      "aes-256-ofb": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "OFB",
        type: "stream"
      },
      "aes-128-ctr": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CTR",
        type: "stream"
      },
      "aes-192-ctr": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CTR",
        type: "stream"
      },
      "aes-256-ctr": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CTR",
        type: "stream"
      },
      "aes-128-gcm": {
        cipher: "AES",
        key: 128,
        iv: 12,
        mode: "GCM",
        type: "auth"
      },
      "aes-192-gcm": {
        cipher: "AES",
        key: 192,
        iv: 12,
        mode: "GCM",
        type: "auth"
      },
      "aes-256-gcm": {
        cipher: "AES",
        key: 256,
        iv: 12,
        mode: "GCM",
        type: "auth"
      }
    };
  },
  function(e, t, i) {
    var n = i(89),
      r = i(2).Buffer,
      o = i(44),
      a = i(1),
      s = i(539),
      c = i(70),
      u = i(207);
    function l(e, t, i, a) {
      o.call(this);
      var c = r.alloc(4, 0);
      this._cipher = new n.AES(t);
      var l = this._cipher.encryptBlock(c);
      (this._ghash = new s(l)),
        (i = (function(e, t, i) {
          if (12 === t.length)
            return (
              (e._finID = r.concat([t, r.from([0, 0, 0, 1])])),
              r.concat([t, r.from([0, 0, 0, 2])])
            );
          var n = new s(i),
            o = t.length,
            a = o % 16;
          n.update(t),
            a && ((a = 16 - a), n.update(r.alloc(a, 0))),
            n.update(r.alloc(8, 0));
          var c = 8 * o,
            l = r.alloc(8);
          l.writeUIntBE(c, 0, 8), n.update(l), (e._finID = n.state);
          var h = r.from(e._finID);
          return u(h), h;
        })(this, i, l)),
        (this._prev = r.from(i)),
        (this._cache = r.allocUnsafe(0)),
        (this._secCache = r.allocUnsafe(0)),
        (this._decrypt = a),
        (this._alen = 0),
        (this._len = 0),
        (this._mode = e),
        (this._authTag = null),
        (this._called = !1);
    }
    a(l, o),
      (l.prototype._update = function(e) {
        if (!this._called && this._alen) {
          var t = 16 - (this._alen % 16);
          t < 16 && ((t = r.alloc(t, 0)), this._ghash.update(t));
        }
        this._called = !0;
        var i = this._mode.encrypt(this, e);
        return (
          this._decrypt ? this._ghash.update(e) : this._ghash.update(i),
          (this._len += e.length),
          i
        );
      }),
      (l.prototype._final = function() {
        if (this._decrypt && !this._authTag)
          throw new Error("Unsupported state or unable to authenticate data");
        var e = c(
          this._ghash.final(8 * this._alen, 8 * this._len),
          this._cipher.encryptBlock(this._finID)
        );
        if (
          this._decrypt &&
          (function(e, t) {
            var i = 0;
            e.length !== t.length && i++;
            for (var n = Math.min(e.length, t.length), r = 0; r < n; ++r)
              i += e[r] ^ t[r];
            return i;
          })(e, this._authTag)
        )
          throw new Error("Unsupported state or unable to authenticate data");
        (this._authTag = e), this._cipher.scrub();
      }),
      (l.prototype.getAuthTag = function() {
        if (this._decrypt || !r.isBuffer(this._authTag))
          throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag;
      }),
      (l.prototype.setAuthTag = function(e) {
        if (!this._decrypt)
          throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = e;
      }),
      (l.prototype.setAAD = function(e) {
        if (this._called)
          throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e), (this._alen += e.length);
      }),
      (e.exports = l);
  },
  function(e, t, i) {
    var n = i(89),
      r = i(2).Buffer,
      o = i(44);
    function a(e, t, i, a) {
      o.call(this),
        (this._cipher = new n.AES(t)),
        (this._prev = r.from(i)),
        (this._cache = r.allocUnsafe(0)),
        (this._secCache = r.allocUnsafe(0)),
        (this._decrypt = a),
        (this._mode = e);
    }
    i(1)(a, o),
      (a.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt);
      }),
      (a.prototype._final = function() {
        this._cipher.scrub();
      }),
      (e.exports = a);
  },
  function(e, t, i) {
    var n = i(53);
    (e.exports = v), (v.simpleSieve = g), (v.fermatTest = _);
    var r = i(11),
      o = new r(24),
      a = new (i(212))(),
      s = new r(1),
      c = new r(2),
      u = new r(5),
      l = (new r(16), new r(8), new r(10)),
      h = new r(3),
      f = (new r(7), new r(11)),
      d = new r(4),
      p = (new r(12), null);
    function m() {
      if (null !== p) return p;
      var e = [];
      e[0] = 2;
      for (var t = 1, i = 3; i < 1048576; i += 2) {
        for (
          var n = Math.ceil(Math.sqrt(i)), r = 0;
          r < t && e[r] <= n && i % e[r] != 0;
          r++
        );
        (t !== r && e[r] <= n) || (e[t++] = i);
      }
      return (p = e), e;
    }
    function g(e) {
      for (var t = m(), i = 0; i < t.length; i++)
        if (0 === e.modn(t[i])) return 0 === e.cmpn(t[i]);
      return !0;
    }
    function _(e) {
      var t = r.mont(e);
      return (
        0 ===
        c
          .toRed(t)
          .redPow(e.subn(1))
          .fromRed()
          .cmpn(1)
      );
    }
    function v(e, t) {
      if (e < 16) return new r(2 === t || 5 === t ? [140, 123] : [140, 39]);
      var i, p;
      for (t = new r(t); ; ) {
        for (i = new r(n(Math.ceil(e / 8))); i.bitLength() > e; ) i.ishrn(1);
        if ((i.isEven() && i.iadd(s), i.testn(1) || i.iadd(c), t.cmp(c))) {
          if (!t.cmp(u)) for (; i.mod(l).cmp(h); ) i.iadd(d);
        } else for (; i.mod(o).cmp(f); ) i.iadd(d);
        if (
          g((p = i.shrn(1))) &&
          g(i) &&
          _(p) &&
          _(i) &&
          a.test(p) &&
          a.test(i)
        )
          return i;
      }
    }
  },
  function(e, t, i) {
    var n = i(11),
      r = i(213);
    function o(e) {
      this.rand = e || new r.Rand();
    }
    (e.exports = o),
      (o.create = function(e) {
        return new o(e);
      }),
      (o.prototype._randbelow = function(e) {
        var t = e.bitLength(),
          i = Math.ceil(t / 8);
        do {
          var r = new n(this.rand.generate(i));
        } while (r.cmp(e) >= 0);
        return r;
      }),
      (o.prototype._randrange = function(e, t) {
        var i = t.sub(e);
        return e.add(this._randbelow(i));
      }),
      (o.prototype.test = function(e, t, i) {
        var r = e.bitLength(),
          o = n.mont(e),
          a = new n(1).toRed(o);
        t || (t = Math.max(1, (r / 48) | 0));
        for (var s = e.subn(1), c = 0; !s.testn(c); c++);
        for (var u = e.shrn(c), l = s.toRed(o); t > 0; t--) {
          var h = this._randrange(new n(2), s);
          i && i(h);
          var f = h.toRed(o).redPow(u);
          if (0 !== f.cmp(a) && 0 !== f.cmp(l)) {
            for (var d = 1; d < c; d++) {
              if (0 === (f = f.redSqr()).cmp(a)) return !1;
              if (0 === f.cmp(l)) break;
            }
            if (d === c) return !1;
          }
        }
        return !0;
      }),
      (o.prototype.getDivisor = function(e, t) {
        var i = e.bitLength(),
          r = n.mont(e),
          o = new n(1).toRed(r);
        t || (t = Math.max(1, (i / 48) | 0));
        for (var a = e.subn(1), s = 0; !a.testn(s); s++);
        for (var c = e.shrn(s), u = a.toRed(r); t > 0; t--) {
          var l = this._randrange(new n(2), a),
            h = e.gcd(l);
          if (0 !== h.cmpn(1)) return h;
          var f = l.toRed(r).redPow(c);
          if (0 !== f.cmp(o) && 0 !== f.cmp(u)) {
            for (var d = 1; d < s; d++) {
              if (0 === (f = f.redSqr()).cmp(o))
                return f
                  .fromRed()
                  .subn(1)
                  .gcd(e);
              if (0 === f.cmp(u)) break;
            }
            if (d === s)
              return (f = f.redSqr())
                .fromRed()
                .subn(1)
                .gcd(e);
          }
        }
        return !1;
      });
  },
  function(e, t, i) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r;
    function o(e) {
      this.rand = e;
    }
    if (
      ((e.exports = function(e) {
        return r || (r = new o(null)), r.generate(e);
      }),
      (e.exports.Rand = o),
      (o.prototype.generate = function(e) {
        return this._rand(e);
      }),
      (o.prototype._rand = function(e) {
        if (this.rand.getBytes) return this.rand.getBytes(e);
        for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
          t[i] = this.rand.getByte();
        return t;
      }),
      "object" === ("undefined" == typeof self ? "undefined" : n(self)))
    )
      self.crypto && self.crypto.getRandomValues
        ? (o.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t), t;
          })
        : self.msCrypto && self.msCrypto.getRandomValues
        ? (o.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t), t;
          })
        : "object" ===
            ("undefined" == typeof window ? "undefined" : n(window)) &&
          (o.prototype._rand = function() {
            throw new Error("Not implemented yet");
          });
    else
      try {
        var a = i(544);
        if ("function" != typeof a.randomBytes)
          throw new Error("Not supported");
        o.prototype._rand = function(e) {
          return a.randomBytes(e);
        };
      } catch (e) {}
  },
  function(e, t, i) {
    "use strict";
    var n = t;
    function r(e) {
      return 1 === e.length ? "0" + e : e;
    }
    function o(e) {
      for (var t = "", i = 0; i < e.length; i++) t += r(e[i].toString(16));
      return t;
    }
    (n.toArray = function(e, t) {
      if (Array.isArray(e)) return e.slice();
      if (!e) return [];
      var i = [];
      if ("string" != typeof e) {
        for (var n = 0; n < e.length; n++) i[n] = 0 | e[n];
        return i;
      }
      if ("hex" === t)
        for (
          (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e),
            n = 0;
          n < e.length;
          n += 2
        )
          i.push(parseInt(e[n] + e[n + 1], 16));
      else
        for (n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n),
            o = r >> 8,
            a = 255 & r;
          o ? i.push(o, a) : i.push(a);
        }
      return i;
    }),
      (n.zero2 = r),
      (n.toHex = o),
      (n.encode = function(e, t) {
        return "hex" === t ? o(e) : e;
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(33).rotr32;
    function r(e, t, i) {
      return (e & t) ^ (~e & i);
    }
    function o(e, t, i) {
      return (e & t) ^ (e & i) ^ (t & i);
    }
    function a(e, t, i) {
      return e ^ t ^ i;
    }
    (t.ft_1 = function(e, t, i, n) {
      return 0 === e
        ? r(t, i, n)
        : 1 === e || 3 === e
        ? a(t, i, n)
        : 2 === e
        ? o(t, i, n)
        : void 0;
    }),
      (t.ch32 = r),
      (t.maj32 = o),
      (t.p32 = a),
      (t.s0_256 = function(e) {
        return n(e, 2) ^ n(e, 13) ^ n(e, 22);
      }),
      (t.s1_256 = function(e) {
        return n(e, 6) ^ n(e, 11) ^ n(e, 25);
      }),
      (t.g0_256 = function(e) {
        return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
      }),
      (t.g1_256 = function(e) {
        return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(33),
      r = i(71),
      o = i(215),
      a = i(25),
      s = n.sum32,
      c = n.sum32_4,
      u = n.sum32_5,
      l = o.ch32,
      h = o.maj32,
      f = o.s0_256,
      d = o.s1_256,
      p = o.g0_256,
      m = o.g1_256,
      g = r.BlockHash,
      _ = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
    function v() {
      if (!(this instanceof v)) return new v();
      g.call(this),
        (this.h = [
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ]),
        (this.k = _),
        (this.W = new Array(64));
    }
    n.inherits(v, g),
      (e.exports = v),
      (v.blockSize = 512),
      (v.outSize = 256),
      (v.hmacStrength = 192),
      (v.padLength = 64),
      (v.prototype._update = function(e, t) {
        for (var i = this.W, n = 0; n < 16; n++) i[n] = e[t + n];
        for (; n < i.length; n++)
          i[n] = c(m(i[n - 2]), i[n - 7], p(i[n - 15]), i[n - 16]);
        var r = this.h[0],
          o = this.h[1],
          g = this.h[2],
          _ = this.h[3],
          v = this.h[4],
          y = this.h[5],
          b = this.h[6],
          E = this.h[7];
        for (a(this.k.length === i.length), n = 0; n < i.length; n++) {
          var T = u(E, d(v), l(v, y, b), this.k[n], i[n]),
            A = s(f(r), h(r, o, g));
          (E = b),
            (b = y),
            (y = v),
            (v = s(_, T)),
            (_ = g),
            (g = o),
            (o = r),
            (r = s(T, A));
        }
        (this.h[0] = s(this.h[0], r)),
          (this.h[1] = s(this.h[1], o)),
          (this.h[2] = s(this.h[2], g)),
          (this.h[3] = s(this.h[3], _)),
          (this.h[4] = s(this.h[4], v)),
          (this.h[5] = s(this.h[5], y)),
          (this.h[6] = s(this.h[6], b)),
          (this.h[7] = s(this.h[7], E));
      }),
      (v.prototype._digest = function(e) {
        return "hex" === e
          ? n.toHex32(this.h, "big")
          : n.split32(this.h, "big");
      });
  },
  function(e, t, i) {
    "use strict";
    var n = i(33),
      r = i(71),
      o = i(25),
      a = n.rotr64_hi,
      s = n.rotr64_lo,
      c = n.shr64_hi,
      u = n.shr64_lo,
      l = n.sum64,
      h = n.sum64_hi,
      f = n.sum64_lo,
      d = n.sum64_4_hi,
      p = n.sum64_4_lo,
      m = n.sum64_5_hi,
      g = n.sum64_5_lo,
      _ = r.BlockHash,
      v = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
    function y() {
      if (!(this instanceof y)) return new y();
      _.call(this),
        (this.h = [
          1779033703,
          4089235720,
          3144134277,
          2227873595,
          1013904242,
          4271175723,
          2773480762,
          1595750129,
          1359893119,
          2917565137,
          2600822924,
          725511199,
          528734635,
          4215389547,
          1541459225,
          327033209
        ]),
        (this.k = v),
        (this.W = new Array(160));
    }
    function b(e, t, i, n, r) {
      var o = (e & i) ^ (~e & r);
      return o < 0 && (o += 4294967296), o;
    }
    function E(e, t, i, n, r, o) {
      var a = (t & n) ^ (~t & o);
      return a < 0 && (a += 4294967296), a;
    }
    function T(e, t, i, n, r) {
      var o = (e & i) ^ (e & r) ^ (i & r);
      return o < 0 && (o += 4294967296), o;
    }
    function A(e, t, i, n, r, o) {
      var a = (t & n) ^ (t & o) ^ (n & o);
      return a < 0 && (a += 4294967296), a;
    }
    function x(e, t) {
      var i = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
      return i < 0 && (i += 4294967296), i;
    }
    function S(e, t) {
      var i = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
      return i < 0 && (i += 4294967296), i;
    }
    function C(e, t) {
      var i = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
      return i < 0 && (i += 4294967296), i;
    }
    function P(e, t) {
      var i = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
      return i < 0 && (i += 4294967296), i;
    }
    function R(e, t) {
      var i = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7);
      return i < 0 && (i += 4294967296), i;
    }
    function M(e, t) {
      var i = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
      return i < 0 && (i += 4294967296), i;
    }
    function O(e, t) {
      var i = a(e, t, 19) ^ a(t, e, 29) ^ c(e, t, 6);
      return i < 0 && (i += 4294967296), i;
    }
    function w(e, t) {
      var i = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
      return i < 0 && (i += 4294967296), i;
    }
    n.inherits(y, _),
      (e.exports = y),
      (y.blockSize = 1024),
      (y.outSize = 512),
      (y.hmacStrength = 192),
      (y.padLength = 128),
      (y.prototype._prepareBlock = function(e, t) {
        for (var i = this.W, n = 0; n < 32; n++) i[n] = e[t + n];
        for (; n < i.length; n += 2) {
          var r = O(i[n - 4], i[n - 3]),
            o = w(i[n - 4], i[n - 3]),
            a = i[n - 14],
            s = i[n - 13],
            c = R(i[n - 30], i[n - 29]),
            u = M(i[n - 30], i[n - 29]),
            l = i[n - 32],
            h = i[n - 31];
          (i[n] = d(r, o, a, s, c, u, l, h)),
            (i[n + 1] = p(r, o, a, s, c, u, l, h));
        }
      }),
      (y.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var i = this.W,
          n = this.h[0],
          r = this.h[1],
          a = this.h[2],
          s = this.h[3],
          c = this.h[4],
          u = this.h[5],
          d = this.h[6],
          p = this.h[7],
          _ = this.h[8],
          v = this.h[9],
          y = this.h[10],
          R = this.h[11],
          M = this.h[12],
          O = this.h[13],
          w = this.h[14],
          I = this.h[15];
        o(this.k.length === i.length);
        for (var D = 0; D < i.length; D += 2) {
          var L = w,
            F = I,
            B = C(_, v),
            N = P(_, v),
            k = b(_, v, y, R, M),
            U = E(_, v, y, R, M, O),
            V = this.k[D],
            G = this.k[D + 1],
            z = i[D],
            j = i[D + 1],
            H = m(L, F, B, N, k, U, V, G, z, j),
            W = g(L, F, B, N, k, U, V, G, z, j);
          (L = x(n, r)),
            (F = S(n, r)),
            (B = T(n, r, a, s, c)),
            (N = A(n, r, a, s, c, u));
          var X = h(L, F, B, N),
            Y = f(L, F, B, N);
          (w = M),
            (I = O),
            (M = y),
            (O = R),
            (y = _),
            (R = v),
            (_ = h(d, p, H, W)),
            (v = f(p, p, H, W)),
            (d = c),
            (p = u),
            (c = a),
            (u = s),
            (a = n),
            (s = r),
            (n = h(H, W, X, Y)),
            (r = f(H, W, X, Y));
        }
        l(this.h, 0, n, r),
          l(this.h, 2, a, s),
          l(this.h, 4, c, u),
          l(this.h, 6, d, p),
          l(this.h, 8, _, v),
          l(this.h, 10, y, R),
          l(this.h, 12, M, O),
          l(this.h, 14, w, I);
      }),
      (y.prototype._digest = function(e) {
        return "hex" === e
          ? n.toHex32(this.h, "big")
          : n.split32(this.h, "big");
      });
  },
  function(e, t, i) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = i(1),
      o = i(73).Reporter,
      a = i(9).Buffer;
    function s(e, t) {
      o.call(this, t),
        a.isBuffer(e)
          ? ((this.base = e), (this.offset = 0), (this.length = e.length))
          : this.error("Input not Buffer");
    }
    function c(e, t) {
      if (Array.isArray(e))
        (this.length = 0),
          (this.value = e.map(function(e) {
            return (
              e instanceof c || (e = new c(e, t)), (this.length += e.length), e
            );
          }, this));
      else if ("number" == typeof e) {
        if (!(0 <= e && e <= 255))
          return t.error("non-byte EncoderBuffer value");
        (this.value = e), (this.length = 1);
      } else if ("string" == typeof e)
        (this.value = e), (this.length = a.byteLength(e));
      else {
        if (!a.isBuffer(e)) return t.error("Unsupported type: " + n(e));
        (this.value = e), (this.length = e.length);
      }
    }
    r(s, o),
      (t.DecoderBuffer = s),
      (s.prototype.save = function() {
        return { offset: this.offset, reporter: o.prototype.save.call(this) };
      }),
      (s.prototype.restore = function(e) {
        var t = new s(this.base);
        return (
          (t.offset = e.offset),
          (t.length = this.offset),
          (this.offset = e.offset),
          o.prototype.restore.call(this, e.reporter),
          t
        );
      }),
      (s.prototype.isEmpty = function() {
        return this.offset === this.length;
      }),
      (s.prototype.readUInt8 = function(e) {
        return this.offset + 1 <= this.length
          ? this.base.readUInt8(this.offset++, !0)
          : this.error(e || "DecoderBuffer overrun");
      }),
      (s.prototype.skip = function(e, t) {
        if (!(this.offset + e <= this.length))
          return this.error(t || "DecoderBuffer overrun");
        var i = new s(this.base);
        return (
          (i._reporterState = this._reporterState),
          (i.offset = this.offset),
          (i.length = this.offset + e),
          (this.offset += e),
          i
        );
      }),
      (s.prototype.raw = function(e) {
        return this.base.slice(e ? e.offset : this.offset, this.length);
      }),
      (t.EncoderBuffer = c),
      (c.prototype.join = function(e, t) {
        return (
          e || (e = new a(this.length)),
          t || (t = 0),
          0 === this.length
            ? e
            : (Array.isArray(this.value)
                ? this.value.forEach(function(i) {
                    i.join(e, t), (t += i.length);
                  })
                : ("number" == typeof this.value
                    ? (e[t] = this.value)
                    : "string" == typeof this.value
                    ? e.write(this.value, t)
                    : a.isBuffer(this.value) && this.value.copy(e, t),
                  (t += this.length)),
              e)
        );
      });
  },
  function(e, t, i) {
    var n = t;
    (n._reverse = function(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function(i) {
          (0 | i) == i && (i |= 0);
          var n = e[i];
          t[n] = i;
        }),
        t
      );
    }),
      (n.der = i(576));
  },
  function(e, t, i) {
    var n = i(1),
      r = i(72),
      o = r.base,
      a = r.bignum,
      s = r.constants.der;
    function c(e) {
      (this.enc = "der"),
        (this.name = e.name),
        (this.entity = e),
        (this.tree = new u()),
        this.tree._init(e.body);
    }
    function u(e) {
      o.Node.call(this, "der", e);
    }
    function l(e, t) {
      var i = e.readUInt8(t);
      if (e.isError(i)) return i;
      var n = s.tagClass[i >> 6],
        r = 0 == (32 & i);
      if (31 == (31 & i)) {
        var o = i;
        for (i = 0; 128 == (128 & o); ) {
          if (((o = e.readUInt8(t)), e.isError(o))) return o;
          (i <<= 7), (i |= 127 & o);
        }
      } else i &= 31;
      return { cls: n, primitive: r, tag: i, tagStr: s.tag[i] };
    }
    function h(e, t, i) {
      var n = e.readUInt8(i);
      if (e.isError(n)) return n;
      if (!t && 128 === n) return null;
      if (0 == (128 & n)) return n;
      var r = 127 & n;
      if (r > 4) return e.error("length octect is too long");
      n = 0;
      for (var o = 0; o < r; o++) {
        n <<= 8;
        var a = e.readUInt8(i);
        if (e.isError(a)) return a;
        n |= a;
      }
      return n;
    }
    (e.exports = c),
      (c.prototype.decode = function(e, t) {
        return (
          e instanceof o.DecoderBuffer || (e = new o.DecoderBuffer(e, t)),
          this.tree._decode(e, t)
        );
      }),
      n(u, o.Node),
      (u.prototype._peekTag = function(e, t, i) {
        if (e.isEmpty()) return !1;
        var n = e.save(),
          r = l(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(r)
          ? r
          : (e.restore(n),
            r.tag === t || r.tagStr === t || r.tagStr + "of" === t || i);
      }),
      (u.prototype._decodeTag = function(e, t, i) {
        var n = l(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(n)) return n;
        var r = h(e, n.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(r)) return r;
        if (!i && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t)
          return e.error('Failed to match tag: "' + t + '"');
        if (n.primitive || null !== r)
          return e.skip(r, 'Failed to match body of: "' + t + '"');
        var o = e.save(),
          a = this._skipUntilEnd(
            e,
            'Failed to skip indefinite length body: "' + this.tag + '"'
          );
        return e.isError(a)
          ? a
          : ((r = e.offset - o.offset),
            e.restore(o),
            e.skip(r, 'Failed to match body of: "' + t + '"'));
      }),
      (u.prototype._skipUntilEnd = function(e, t) {
        for (;;) {
          var i = l(e, t);
          if (e.isError(i)) return i;
          var n,
            r = h(e, i.primitive, t);
          if (e.isError(r)) return r;
          if (
            ((n =
              i.primitive || null !== r ? e.skip(r) : this._skipUntilEnd(e, t)),
            e.isError(n))
          )
            return n;
          if ("end" === i.tagStr) break;
        }
      }),
      (u.prototype._decodeList = function(e, t, i, n) {
        for (var r = []; !e.isEmpty(); ) {
          var o = this._peekTag(e, "end");
          if (e.isError(o)) return o;
          var a = i.decode(e, "der", n);
          if (e.isError(a) && o) break;
          r.push(a);
        }
        return r;
      }),
      (u.prototype._decodeStr = function(e, t) {
        if ("bitstr" === t) {
          var i = e.readUInt8();
          return e.isError(i) ? i : { unused: i, data: e.raw() };
        }
        if ("bmpstr" === t) {
          var n = e.raw();
          if (n.length % 2 == 1)
            return e.error("Decoding of string type: bmpstr length mismatch");
          for (var r = "", o = 0; o < n.length / 2; o++)
            r += String.fromCharCode(n.readUInt16BE(2 * o));
          return r;
        }
        if ("numstr" === t) {
          var a = e.raw().toString("ascii");
          return this._isNumstr(a)
            ? a
            : e.error("Decoding of string type: numstr unsupported characters");
        }
        if ("octstr" === t) return e.raw();
        if ("objDesc" === t) return e.raw();
        if ("printstr" === t) {
          var s = e.raw().toString("ascii");
          return this._isPrintstr(s)
            ? s
            : e.error(
                "Decoding of string type: printstr unsupported characters"
              );
        }
        return /str$/.test(t)
          ? e.raw().toString()
          : e.error("Decoding of string type: " + t + " unsupported");
      }),
      (u.prototype._decodeObjid = function(e, t, i) {
        for (var n, r = [], o = 0; !e.isEmpty(); ) {
          var a = e.readUInt8();
          (o <<= 7), (o |= 127 & a), 0 == (128 & a) && (r.push(o), (o = 0));
        }
        128 & a && r.push(o);
        var s = (r[0] / 40) | 0,
          c = r[0] % 40;
        if (((n = i ? r : [s, c].concat(r.slice(1))), t)) {
          var u = t[n.join(" ")];
          void 0 === u && (u = t[n.join(".")]), void 0 !== u && (n = u);
        }
        return n;
      }),
      (u.prototype._decodeTime = function(e, t) {
        var i = e.raw().toString();
        if ("gentime" === t)
          var n = 0 | i.slice(0, 4),
            r = 0 | i.slice(4, 6),
            o = 0 | i.slice(6, 8),
            a = 0 | i.slice(8, 10),
            s = 0 | i.slice(10, 12),
            c = 0 | i.slice(12, 14);
        else {
          if ("utctime" !== t)
            return e.error("Decoding " + t + " time is not supported yet");
          (n = 0 | i.slice(0, 2)),
            (r = 0 | i.slice(2, 4)),
            (o = 0 | i.slice(4, 6)),
            (a = 0 | i.slice(6, 8)),
            (s = 0 | i.slice(8, 10)),
            (c = 0 | i.slice(10, 12));
          n = n < 70 ? 2e3 + n : 1900 + n;
        }
        return Date.UTC(n, r - 1, o, a, s, c, 0);
      }),
      (u.prototype._decodeNull = function(e) {
        return null;
      }),
      (u.prototype._decodeBool = function(e) {
        var t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t;
      }),
      (u.prototype._decodeInt = function(e, t) {
        var i = e.raw(),
          n = new a(i);
        return t && (n = t[n.toString(10)] || n), n;
      }),
      (u.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree;
      });
  },
  function(e, t, i) {
    var n = i(1),
      r = i(9).Buffer,
      o = i(72),
      a = o.base,
      s = o.constants.der;
    function c(e) {
      (this.enc = "der"),
        (this.name = e.name),
        (this.entity = e),
        (this.tree = new u()),
        this.tree._init(e.body);
    }
    function u(e) {
      a.Node.call(this, "der", e);
    }
    function l(e) {
      return e < 10 ? "0" + e : e;
    }
    (e.exports = c),
      (c.prototype.encode = function(e, t) {
        return this.tree._encode(e, t).join();
      }),
      n(u, a.Node),
      (u.prototype._encodeComposite = function(e, t, i, n) {
        var o,
          a = (function(e, t, i, n) {
            var r;
            "seqof" === e ? (e = "seq") : "setof" === e && (e = "set");
            if (s.tagByName.hasOwnProperty(e)) r = s.tagByName[e];
            else {
              if ("number" != typeof e || (0 | e) !== e)
                return n.error("Unknown tag: " + e);
              r = e;
            }
            if (r >= 31) return n.error("Multi-octet tag encoding unsupported");
            t || (r |= 32);
            return (r |= s.tagClassByName[i || "universal"] << 6);
          })(e, t, i, this.reporter);
        if (n.length < 128)
          return (
            ((o = new r(2))[0] = a),
            (o[1] = n.length),
            this._createEncoderBuffer([o, n])
          );
        for (var c = 1, u = n.length; u >= 256; u >>= 8) c++;
        ((o = new r(2 + c))[0] = a), (o[1] = 128 | c);
        u = 1 + c;
        for (var l = n.length; l > 0; u--, l >>= 8) o[u] = 255 & l;
        return this._createEncoderBuffer([o, n]);
      }),
      (u.prototype._encodeStr = function(e, t) {
        if ("bitstr" === t)
          return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ("bmpstr" === t) {
          for (var i = new r(2 * e.length), n = 0; n < e.length; n++)
            i.writeUInt16BE(e.charCodeAt(n), 2 * n);
          return this._createEncoderBuffer(i);
        }
        return "numstr" === t
          ? this._isNumstr(e)
            ? this._createEncoderBuffer(e)
            : this.reporter.error(
                "Encoding of string type: numstr supports only digits and space"
              )
          : "printstr" === t
          ? this._isPrintstr(e)
            ? this._createEncoderBuffer(e)
            : this.reporter.error(
                "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
              )
          : /str$/.test(t)
          ? this._createEncoderBuffer(e)
          : "objDesc" === t
          ? this._createEncoderBuffer(e)
          : this.reporter.error(
              "Encoding of string type: " + t + " unsupported"
            );
      }),
      (u.prototype._encodeObjid = function(e, t, i) {
        if ("string" == typeof e) {
          if (!t)
            return this.reporter.error(
              "string objid given, but no values map found"
            );
          if (!t.hasOwnProperty(e))
            return this.reporter.error("objid not found in values map");
          e = t[e].split(/[\s\.]+/g);
          for (var n = 0; n < e.length; n++) e[n] |= 0;
        } else if (Array.isArray(e)) {
          e = e.slice();
          for (n = 0; n < e.length; n++) e[n] |= 0;
        }
        if (!Array.isArray(e))
          return this.reporter.error(
            "objid() should be either array or string, got: " +
              JSON.stringify(e)
          );
        if (!i) {
          if (e[1] >= 40)
            return this.reporter.error("Second objid identifier OOB");
          e.splice(0, 2, 40 * e[0] + e[1]);
        }
        var o = 0;
        for (n = 0; n < e.length; n++) {
          var a = e[n];
          for (o++; a >= 128; a >>= 7) o++;
        }
        var s = new r(o),
          c = s.length - 1;
        for (n = e.length - 1; n >= 0; n--) {
          a = e[n];
          for (s[c--] = 127 & a; (a >>= 7) > 0; ) s[c--] = 128 | (127 & a);
        }
        return this._createEncoderBuffer(s);
      }),
      (u.prototype._encodeTime = function(e, t) {
        var i,
          n = new Date(e);
        return (
          "gentime" === t
            ? (i = [
                l(n.getFullYear()),
                l(n.getUTCMonth() + 1),
                l(n.getUTCDate()),
                l(n.getUTCHours()),
                l(n.getUTCMinutes()),
                l(n.getUTCSeconds()),
                "Z"
              ].join(""))
            : "utctime" === t
            ? (i = [
                l(n.getFullYear() % 100),
                l(n.getUTCMonth() + 1),
                l(n.getUTCDate()),
                l(n.getUTCHours()),
                l(n.getUTCMinutes()),
                l(n.getUTCSeconds()),
                "Z"
              ].join(""))
            : this.reporter.error(
                "Encoding " + t + " time is not supported yet"
              ),
          this._encodeStr(i, "octstr")
        );
      }),
      (u.prototype._encodeNull = function() {
        return this._createEncoderBuffer("");
      }),
      (u.prototype._encodeInt = function(e, t) {
        if ("string" == typeof e) {
          if (!t)
            return this.reporter.error(
              "String int or enum given, but no values map"
            );
          if (!t.hasOwnProperty(e))
            return this.reporter.error(
              "Values map doesn't contain: " + JSON.stringify(e)
            );
          e = t[e];
        }
        if ("number" != typeof e && !r.isBuffer(e)) {
          var i = e.toArray();
          !e.sign && 128 & i[0] && i.unshift(0), (e = new r(i));
        }
        if (r.isBuffer(e)) {
          var n = e.length;
          0 === e.length && n++;
          var o = new r(n);
          return (
            e.copy(o),
            0 === e.length && (o[0] = 0),
            this._createEncoderBuffer(o)
          );
        }
        if (e < 128) return this._createEncoderBuffer(e);
        if (e < 256) return this._createEncoderBuffer([0, e]);
        n = 1;
        for (var a = e; a >= 256; a >>= 8) n++;
        for (a = (o = new Array(n)).length - 1; a >= 0; a--)
          (o[a] = 255 & e), (e >>= 8);
        return 128 & o[0] && o.unshift(0), this._createEncoderBuffer(new r(o));
      }),
      (u.prototype._encodeBool = function(e) {
        return this._createEncoderBuffer(e ? 255 : 0);
      }),
      (u.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree;
      }),
      (u.prototype._skipDefault = function(e, t, i) {
        var n,
          r = this._baseState;
        if (null === r.default) return !1;
        var o = e.join();
        if (
          (void 0 === r.defaultBuffer &&
            (r.defaultBuffer = this._encodeValue(r.default, t, i).join()),
          o.length !== r.defaultBuffer.length)
        )
          return !1;
        for (n = 0; n < o.length; n++)
          if (o[n] !== r.defaultBuffer[n]) return !1;
        return !0;
      });
  },
  function(e) {
    e.exports = {
      "1.3.132.0.10": "secp256k1",
      "1.3.132.0.33": "p224",
      "1.2.840.10045.3.1.1": "p192",
      "1.2.840.10045.3.1.7": "p256",
      "1.3.132.0.34": "p384",
      "1.3.132.0.35": "p521"
    };
  },
  function(e, t, i) {
    var n = i(69),
      r = i(2).Buffer;
    function o(e) {
      var t = r.allocUnsafe(4);
      return t.writeUInt32BE(e, 0), t;
    }
    e.exports = function(e, t) {
      for (var i, a = r.alloc(0), s = 0; a.length < t; )
        (i = o(s++)),
          (a = r.concat([
            a,
            n("sha1")
              .update(e)
              .update(i)
              .digest()
          ]));
      return a.slice(0, t);
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      for (var i = e.length, n = -1; ++n < i; ) e[n] ^= t[n];
      return e;
    };
  },
  function(e, t, i) {
    var n = i(11),
      r = i(2).Buffer;
    e.exports = function(e, t) {
      return r.from(
        e
          .toRed(n.mont(t.modulus))
          .redPow(new n(t.publicExponent))
          .fromRed()
          .toArray()
      );
    };
  },
  function(e, t, i) {
    "use strict";
    (function(e) {
      var n = i(93),
        r = i.n(n),
        o = i(55),
        a = i(18),
        s = i(7),
        c = i(227);
      function u(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = i),
          e
        );
      }
      function l(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, i = new Array(e.length); t < e.length; t++)
                i[t] = e[t];
              return i;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function h(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var f = (function() {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            this.initializeState(e),
            (this.welcomeInfoResolve = null),
            (this.peer = null);
        }
        var i, n, f;
        return (
          (i = t),
          (n = [
            {
              key: "initializeState",
              value: function(e) {
                this.state = {
                  code: e.code,
                  name: e.name,
                  connected: !1,
                  connecting: !1,
                  gameStarted: !1,
                  error: "",
                  host: null,
                  players: [],
                  game: e.game,
                  changedBlocks: [],
                  enqueuedChangedBlocks: [],
                  chatLog: []
                };
              }
            },
            {
              key: "handleData",
              value: function(e) {
                switch (e.type) {
                  case "startGame":
                    this.setState({ gameStarted: !0 });
                    break;
                  case "players":
                    this.handlePlayers(e.players);
                    break;
                  case "changedBlocks":
                    this.handleChangedBlocks(e);
                    break;
                  case "fireEvent":
                    this.state.game.handleFireEvent(e.data);
                    break;
                  case "chatLog":
                    this.handleChatLog(e.chatLog);
                    break;
                  case "welcomeInfo":
                    this.handleWelcomeInfo(e);
                    break;
                  case "kicked":
                    this.handleOnKicked();
                    break;
                  default:
                    throw Error("Unknown input type " + e.type);
                }
              }
            },
            {
              key: "handleChangedBlocks",
              value: function(e) {
                if (e.blocks.length || !this.state.game.playerSpawned)
                  if (this.state.game.worldGenerated) {
                    if (this.state.enqueuedChangedBlocks.length) {
                      (this.state.changedBlocks = this.state.enqueuedChangedBlocks.splice(
                        0
                      )),
                        this.state.game.handleChangedBlocks(
                          this.state.changedBlocks
                        );
                      for (var t = 0; t < this.state.changedBlocks.length; t++)
                        s.default
                          .getInstance()
                          .addBlockChange(this.state.changedBlocks[t]);
                    }
                    for (var i = 0; i < e.blocks.length; i++)
                      void 0 === this.state.changedBlocks[e.from + i] &&
                        ((this.state.changedBlocks[e.from + i] = e.blocks[i]),
                        s.default.getInstance().addBlockChange(e.blocks[i]));
                    this.state.game.handleChangedBlocks(e.blocks);
                  } else
                    this.state.enqueuedChangedBlocks = l(
                      this.state.enqueuedChangedBlocks
                    ).concat(l(e.blocks));
              }
            },
            {
              key: "broadcast",
              value: function(e) {
                this.peer.connected && this.peer.send(JSON.stringify(e));
              }
            },
            {
              key: "joinGame",
              value: function() {
                var t = this;
                return new e(function(e, i) {
                  t.setState({ error: "", connecting: !0 });
                  var n = t.state,
                    r = n.code;
                  n.database;
                  a.a.getGame(r).then(function(i) {
                    null == i
                      ? t.handleNoSuchGame(e, r)
                      : t.handleJoinExistingGame(r, e);
                  });
                });
              }
            },
            {
              key: "handleJoinExistingGame",
              value: function(e, t) {
                var i = this;
                a.a.getICECandidates(e).then(function(n) {
                  var o = c(8);
                  a.a.joinSignalingChannel(e, o).then(function() {
                    var s = new r.a({
                      initiator: !0,
                      trickle: !1,
                      reconnectTimer: 3e3,
                      config: { iceServers: n }
                    });
                    (i.peer = s),
                      s.on("signal", function(t) {
                        a.a
                          .sendSignalingTo(e, "host", o, t)
                          .then(function() {});
                      }),
                      a.a.listenForData(e, function(e) {
                        void 0 !== e.payload.signal &&
                          s.signal(e.payload.signal);
                      }),
                      s.on("data", function(e) {
                        i.handleData(JSON.parse(e));
                      }),
                      i.handleConnectionEstablished(s, t, e),
                      i.pollWorldChanges(),
                      i.handleHostDisconnected(s, e),
                      s.on("error", function(e) {
                        "ERR_ICE_CONNECTION_FAILURE" === e.code &&
                          (console.log("Host disconnected!"),
                          console.log(e),
                          console.log(this));
                      });
                  });
                });
              }
            },
            {
              key: "handleHostDisconnected",
              value: function(e, t) {
                var i = this;
                e.on("close", function() {
                  i.setState({
                    gameStarted: !1,
                    connected: !1,
                    error: "Disconnected from host",
                    code: ""
                  }),
                    i.removeOtherPlayers();
                });
              }
            },
            {
              key: "handleConnectionEstablished",
              value: function(e, t, i) {
                var n = this;
                e.on("connect", function() {
                  setTimeout(function() {
                    n.broadcast({ type: "connected" }),
                      n.setState({ connected: !0, connecting: !1 });
                  }, 1e3),
                    t(i);
                });
              }
            },
            {
              key: "pollWorldChanges",
              value: function() {
                var e = this;
                setInterval(function() {
                  var t = e.state.changedBlocks.length
                    ? e.state.changedBlocks.length
                    : e.state.enqueuedChangedBlocks.length;
                  e.broadcast({ type: "requestChanges", from: t });
                }, 1e3);
              }
            },
            {
              key: "handleNoSuchGame",
              value: function(e, t) {
                this.handleWelcomeInfo({
                  hostName: "no host",
                  gameFull: !0,
                  playerCount: 0,
                  maxPlayers: 0,
                  worldSeed: 0,
                  noSuchGame: !0,
                  worldSize: 128,
                  numberOfChangedBlocks: 0
                }),
                  e(t);
              }
            },
            {
              key: "getWelcomeInfo",
              value: function() {
                var t = this;
                return new e(function(e, i) {
                  t.welcomeInfoResolve = e;
                });
              }
            },
            {
              key: "getSpawnedPlayerNames",
              value: function() {
                var e = [this.state.name];
                for (var t in this.state.players)
                  this.state.players[t].state.spawned &&
                    e.push(this.state.players[t].state.name);
                return e;
              }
            },
            {
              key: "setBlockAt",
              value: function(e, t) {
                this.broadcast({
                  type: "setBlockTypeAt",
                  data: { position: e, blockTypeId: t }
                });
              }
            },
            {
              key: "emitFireEvent",
              value: function(e) {
                this.broadcast({ type: "fireEvent", data: e });
              }
            },
            {
              key: "sendJoined",
              value: function(e) {
                var t = {
                  message: "",
                  timestamp: +new Date(),
                  type: "joined",
                  from: e
                };
                this.broadcast({ type: "message", message: t });
              }
            },
            {
              key: "sendMessage",
              value: function(e) {
                var t = {
                  message: e,
                  timestamp: +new Date(),
                  type: "message",
                  from: this.state.name
                };
                this.broadcast({ type: "message", message: t });
              }
            },
            {
              key: "setState",
              value: function(e, t) {
                "Disconnected from host" == e.error &&
                  this.state.game.onHostDisconnect &&
                  this.state.game.onHostDisconnect(),
                  (this.state = (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(i).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(
                              i,
                              e
                            ).enumerable;
                          })
                        )),
                        n.forEach(function(t) {
                          u(e, t, i[t]);
                        });
                    }
                    return e;
                  })({}, this.state, e)),
                  t && "function" == typeof t && t();
              }
            },
            {
              key: "removeOtherPlayers",
              value: function() {
                for (var e in this.state.players)
                  e !== this.state.name &&
                    (this.state.players[e].noaPlayer.remove(),
                    delete this.state.players[e]);
              }
            },
            {
              key: "handlePlayers",
              value: function(e) {
                if (this.state.game.playerSpawned) {
                  var t = [];
                  for (var i in e)
                    if (!0 === e[i].state.spawned) {
                      var n = e[i].state.name;
                      t.push(n),
                        n !== this.state.name &&
                          void 0 === this.state.players[n] &&
                          (this.state.players[n] = new o.a({
                            name: n,
                            isClient: !0
                          })),
                        n !== this.state.name &&
                          this.state.players[n].setState(e[i].state);
                    }
                  for (var r in this.state.players)
                    -1 === t.indexOf(r) &&
                      (this.state.players[r].noaPlayer.remove(),
                      delete this.state.players[r]);
                }
              }
            },
            {
              key: "kickPlayer",
              value: function(e) {
                return "Command not allowed";
              }
            },
            {
              key: "setSpawnToCurrentPosition",
              value: function() {
                return "Command not allowed";
              }
            },
            {
              key: "getPositionFor",
              value: function(e) {
                for (var t in this.state.players)
                  if (this.state.players[t].state.name === e)
                    return this.state.players[t].state.position;
                return null;
              }
            },
            {
              key: "handleChatLog",
              value: function(e) {
                this.state.game.playerSpawned &&
                  ((this.state.chatLog = e),
                  this.state.game.updateChatLog(this.state.chatLog));
              }
            },
            {
              key: "handleOnKicked",
              value: function() {
                this.state.game.playerSpawned && this.state.game.onKicked();
              }
            },
            {
              key: "handleWelcomeInfo",
              value: function(e) {
                null != this.welcomeInfoResolve && this.welcomeInfoResolve(e),
                  this.state.game.setHostInfo({
                    hostName: e.hostName,
                    gameFull: e.gameFull,
                    playerCount: e.playerCount,
                    maxPlayers: e.maxPlayers,
                    worldSeed: e.worldSeed,
                    worldSize: e.worldSize,
                    spawnPoint: e.spawnPoint,
                    noSuchGame: void 0 !== e.noSuchGame && e.noSuchGame,
                    numberOfChangedBlocks: e.numberOfChangedBlocks
                  }),
                  e.gameFull && this.peer.destroy();
              }
            }
          ]) && h(i.prototype, n),
          f && h(i, f),
          t
        );
      })();
      t.a = f;
    }.call(this, i(41)));
  },
  function(e, t, i) {
    (function(t) {
      var n = i(513);
      e.exports = function(e, i) {
        if (
          (t.isBuffer(e) && ((i = e), (e = 0)),
          "number" != typeof e && (e = 16),
          !t.isBuffer(i))
        ) {
          var r = Math.log(Math.pow(64, e)) / Math.log(2) / 8;
          i = n.randomBytes(r);
        }
        return i
          .toString("base64")
          .replace(/\//g, "_")
          .replace(/\+/g, "-")
          .replace(/=/g, "")
          .substr(0, e || void 0);
      };
    }.call(this, i(9).Buffer));
  },
  function(e, t, i) {
    "use strict";
    i.r(t);
    i(229), i(396);
    var n = i(18),
      r = i(137),
      o = i(226),
      a = i(94),
      s = i(55),
      c = i(136),
      u = i(7);
    function l(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    new ((function() {
      function e() {
        var t = this;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          n.a.init(),
          n.a.executeXhr("/game/multiplayer-enabled", "get").then(function(e) {
            var i = new a.a(),
              n = Math.floor(99999999999999 * Math.random()),
              r = new URL(document.location).searchParams;
            u.default.getInstance().gameSaved() &&
              (n = u.default.getInstance().getWorldSeed()),
              (i.noWebrtcJoin = !1);
            var o = new c.default();
            if (o.isMobile)
              document.getElementById("mobile").style.display = "block";
            else if (o.isWebGLSupported) {
              var s = JSON.parse(e).multiplayerEnabled;
              o.isSinglePlayer || "true" !== s
                ? t.setupAsSinglePlayer(n, i)
                : null === r.get("join")
                ? t.setupAsHost(r, n, i)
                : o.isWebRTCSupported
                ? t.setupAsClient(r, i)
                : (t.setupAsHost(r, n, i), (i.noWebrtcJoin = !0));
            } else
              document.getElementById("webgl_webrtc").style.display = "block";
          });
      }
      var t, i, h;
      return (
        (t = e),
        (i = [
          {
            key: "setupAsClient",
            value: function(e, t) {
              var i = e.get("join"),
                n = new o.a({ code: i, game: t }),
                r = null;
              (t.setName = function(e) {
                null === r &&
                  ((r = new s.a(
                    { name: e, network: n, isSelf: !0, isClient: !0 },
                    function(e) {
                      n.broadcast({ type: "playerState", data: { state: e } });
                    }
                  )),
                  n.setState({ name: e }),
                  t.setPlayer(r));
              }),
                n.joinGame().then(function(e) {
                  u.default.getInstance().clearData();
                }),
                n.getWelcomeInfo().then(function(e) {
                  u.default.getInstance().setWorldSeed(e.worldSeed),
                    u.default.getInstance().setWorldSize(e.worldSize),
                    t.initialize({ seed: e.worldSeed, network: n }),
                    (t.client = n);
                });
            }
          },
          {
            key: "setupAsSinglePlayer",
            value: function(e, t) {
              var i = new r.a({ name: "temp", seed: e, game: t });
              if (
                (u.default.getInstance().setWorldSeed(e),
                u.default.getInstance().gameSaved())
              ) {
                var n = u.default.getInstance().getChangedBlocks();
                i.setChangedBlocks(n);
              }
              t.initialize({
                seed: e,
                player: i.getPlayer(),
                network: i,
                singlePlayer: !0
              }),
                t.setChangedBlockHandler(i.changedBlockHandler),
                (t.setName = function(e) {
                  i.setName(e);
                });
            }
          },
          {
            key: "setupAsHost",
            value: function(e, t, i) {
              var n = this,
                o = null !== e.get("host") ? e.get("host") : null,
                a = new r.a({ name: "temp", seed: t, game: i });
              if (
                (u.default.getInstance().setWorldSeed(t),
                u.default.getInstance().gameSaved())
              ) {
                var s = u.default.getInstance().getChangedBlocks();
                a.setChangedBlocks(s);
              }
              a.initNewGame(o).then(function(r) {
                n.setHostUrl(e, r),
                  i.initialize({ seed: t, player: a.getPlayer(), network: a }),
                  i.setChangedBlockHandler(a.changedBlockHandler);
              }),
                (i.setName = function(e) {
                  a.setName(e);
                });
            }
          },
          {
            key: "setHostUrl",
            value: function(e, t) {
              if ("URLSearchParams" in window) {
                var i = new URLSearchParams(window.location.search);
                i.set("host", t), history.pushState({}, t, "?" + i.toString());
              }
            }
          }
        ]) && l(t.prototype, i),
        h && l(t, h),
        e
      );
    })())();
  },
  function(e, t, i) {
    "use strict";
    (function(e) {
      i(230),
        i(373),
        i(375),
        i(377),
        i(379),
        i(381),
        i(383),
        i(385),
        i(387),
        i(389),
        i(393),
        e._babelPolyfill &&
          "undefined" != typeof console &&
          console.warn &&
          console.warn(
            "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
          ),
        (e._babelPolyfill = !0);
    }.call(this, i(15)));
  },
  function(e, t, i) {
    i(231),
      i(233),
      i(234),
      i(235),
      i(236),
      i(237),
      i(238),
      i(239),
      i(240),
      i(241),
      i(242),
      i(243),
      i(244),
      i(245),
      i(246),
      i(247),
      i(248),
      i(249),
      i(250),
      i(251),
      i(252),
      i(253),
      i(254),
      i(255),
      i(256),
      i(257),
      i(258),
      i(259),
      i(260),
      i(261),
      i(262),
      i(263),
      i(264),
      i(265),
      i(266),
      i(267),
      i(268),
      i(269),
      i(270),
      i(271),
      i(272),
      i(273),
      i(274),
      i(276),
      i(277),
      i(278),
      i(279),
      i(280),
      i(281),
      i(282),
      i(283),
      i(284),
      i(285),
      i(286),
      i(287),
      i(288),
      i(289),
      i(290),
      i(291),
      i(292),
      i(293),
      i(294),
      i(295),
      i(296),
      i(297),
      i(298),
      i(299),
      i(300),
      i(301),
      i(302),
      i(303),
      i(304),
      i(305),
      i(306),
      i(307),
      i(308),
      i(309),
      i(311),
      i(312),
      i(314),
      i(315),
      i(316),
      i(317),
      i(318),
      i(319),
      i(320),
      i(323),
      i(324),
      i(325),
      i(326),
      i(327),
      i(328),
      i(329),
      i(330),
      i(331),
      i(332),
      i(333),
      i(334),
      i(335),
      i(117),
      i(336),
      i(157),
      i(337),
      i(158),
      i(338),
      i(339),
      i(340),
      i(341),
      i(159),
      i(344),
      i(345),
      i(346),
      i(347),
      i(348),
      i(349),
      i(350),
      i(351),
      i(352),
      i(353),
      i(354),
      i(355),
      i(356),
      i(357),
      i(358),
      i(359),
      i(360),
      i(361),
      i(362),
      i(363),
      i(364),
      i(365),
      i(366),
      i(367),
      i(368),
      i(369),
      i(370),
      i(371),
      i(372),
      (e.exports = i(14));
  },
  function(e, t, i) {
    "use strict";
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = i(5),
      o = i(22),
      a = i(13),
      s = i(0),
      c = i(19),
      u = i(40).KEY,
      l = i(3),
      h = i(96),
      f = i(56),
      d = i(46),
      p = i(8),
      m = i(97),
      g = i(139),
      _ = i(232),
      v = i(100),
      y = i(4),
      b = i(6),
      E = i(24),
      T = i(39),
      A = i(45),
      x = i(50),
      S = i(142),
      C = i(29),
      P = i(12),
      R = i(48),
      M = C.f,
      O = P.f,
      w = S.f,
      I = r.Symbol,
      D = r.JSON,
      L = D && D.stringify,
      F = p("_hidden"),
      B = p("toPrimitive"),
      N = {}.propertyIsEnumerable,
      k = h("symbol-registry"),
      U = h("symbols"),
      V = h("op-symbols"),
      G = Object.prototype,
      z = "function" == typeof I,
      j = r.QObject,
      H = !j || !j.prototype || !j.prototype.findChild,
      W =
        a &&
        l(function() {
          return (
            7 !=
            x(
              O({}, "a", {
                get: function() {
                  return O(this, "a", { value: 7 }).a;
                }
              })
            ).a
          );
        })
          ? function(e, t, i) {
              var n = M(G, t);
              n && delete G[t], O(e, t, i), n && e !== G && O(G, t, n);
            }
          : O,
      X = function(e) {
        var t = (U[e] = x(I.prototype));
        return (t._k = e), t;
      },
      Y =
        z && "symbol" == n(I.iterator)
          ? function(e) {
              return "symbol" == n(e);
            }
          : function(e) {
              return e instanceof I;
            },
      K = function(e, t, i) {
        return (
          e === G && K(V, t, i),
          y(e),
          (t = T(t, !0)),
          y(i),
          o(U, t)
            ? (i.enumerable
                ? (o(e, F) && e[F][t] && (e[F][t] = !1),
                  (i = x(i, { enumerable: A(0, !1) })))
                : (o(e, F) || O(e, F, A(1, {})), (e[F][t] = !0)),
              W(e, t, i))
            : O(e, t, i)
        );
      },
      Q = function(e, t) {
        y(e);
        for (var i, n = _((t = E(t))), r = 0, o = n.length; o > r; )
          K(e, (i = n[r++]), t[i]);
        return e;
      },
      q = function(e) {
        var t = N.call(this, (e = T(e, !0)));
        return (
          !(this === G && o(U, e) && !o(V, e)) &&
          (!(t || !o(this, e) || !o(U, e) || (o(this, F) && this[F][e])) || t)
        );
      },
      Z = function(e, t) {
        if (((e = E(e)), (t = T(t, !0)), e !== G || !o(U, t) || o(V, t))) {
          var i = M(e, t);
          return (
            !i || !o(U, t) || (o(e, F) && e[F][t]) || (i.enumerable = !0), i
          );
        }
      },
      J = function(e) {
        for (var t, i = w(E(e)), n = [], r = 0; i.length > r; )
          o(U, (t = i[r++])) || t == F || t == u || n.push(t);
        return n;
      },
      $ = function(e) {
        for (
          var t, i = e === G, n = w(i ? V : E(e)), r = [], a = 0;
          n.length > a;

        )
          !o(U, (t = n[a++])) || (i && !o(G, t)) || r.push(U[t]);
        return r;
      };
    z ||
      (c(
        (I = function() {
          if (this instanceof I)
            throw TypeError("Symbol is not a constructor!");
          var e = d(arguments.length > 0 ? arguments[0] : void 0);
          return (
            a &&
              H &&
              W(G, e, {
                configurable: !0,
                set: function t(i) {
                  this === G && t.call(V, i),
                    o(this, F) && o(this[F], e) && (this[F][e] = !1),
                    W(this, e, A(1, i));
                }
              }),
            X(e)
          );
        }).prototype,
        "toString",
        function() {
          return this._k;
        }
      ),
      (C.f = Z),
      (P.f = K),
      (i(51).f = S.f = J),
      (i(65).f = q),
      (i(75).f = $),
      a && !i(47) && c(G, "propertyIsEnumerable", q, !0),
      (m.f = function(e) {
        return X(p(e));
      })),
      s(s.G + s.W + s.F * !z, { Symbol: I });
    for (
      var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        te = 0;
      ee.length > te;

    )
      p(ee[te++]);
    for (var ie = R(p.store), ne = 0; ie.length > ne; ) g(ie[ne++]);
    s(s.S + s.F * !z, "Symbol", {
      for: function(e) {
        return o(k, (e += "")) ? k[e] : (k[e] = I(e));
      },
      keyFor: function(e) {
        if (!Y(e)) throw TypeError(e + " is not a symbol!");
        for (var t in k) if (k[t] === e) return t;
      },
      useSetter: function() {
        H = !0;
      },
      useSimple: function() {
        H = !1;
      }
    }),
      s(s.S + s.F * !z, "Object", {
        create: function(e, t) {
          return void 0 === t ? x(e) : Q(x(e), t);
        },
        defineProperty: K,
        defineProperties: Q,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: $
      }),
      D &&
        s(
          s.S +
            s.F *
              (!z ||
                l(function() {
                  var e = I();
                  return (
                    "[null]" != L([e]) ||
                    "{}" != L({ a: e }) ||
                    "{}" != L(Object(e))
                  );
                })),
          "JSON",
          {
            stringify: function(e) {
              for (var t, i, n = [e], r = 1; arguments.length > r; )
                n.push(arguments[r++]);
              if (((i = t = n[1]), (b(t) || void 0 !== e) && !Y(e)))
                return (
                  v(t) ||
                    (t = function(e, t) {
                      if (
                        ("function" == typeof i && (t = i.call(this, e, t)),
                        !Y(t))
                      )
                        return t;
                    }),
                  (n[1] = t),
                  L.apply(D, n)
                );
            }
          }
        ),
      I.prototype[B] || i(23)(I.prototype, B, I.prototype.valueOf),
      f(I, "Symbol"),
      f(Math, "Math", !0),
      f(r.JSON, "JSON", !0);
  },
  function(e, t, i) {
    var n = i(48),
      r = i(75),
      o = i(65);
    e.exports = function(e) {
      var t = n(e),
        i = r.f;
      if (i)
        for (var a, s = i(e), c = o.f, u = 0; s.length > u; )
          c.call(e, (a = s[u++])) && t.push(a);
      return t;
    };
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Object", { create: i(50) });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S + n.F * !i(13), "Object", { defineProperty: i(12).f });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S + n.F * !i(13), "Object", { defineProperties: i(141) });
  },
  function(e, t, i) {
    var n = i(24),
      r = i(29).f;
    i(30)("getOwnPropertyDescriptor", function() {
      return function(e, t) {
        return r(n(e), t);
      };
    });
  },
  function(e, t, i) {
    var n = i(20),
      r = i(52);
    i(30)("getPrototypeOf", function() {
      return function(e) {
        return r(n(e));
      };
    });
  },
  function(e, t, i) {
    var n = i(20),
      r = i(48);
    i(30)("keys", function() {
      return function(e) {
        return r(n(e));
      };
    });
  },
  function(e, t, i) {
    i(30)("getOwnPropertyNames", function() {
      return i(142).f;
    });
  },
  function(e, t, i) {
    var n = i(6),
      r = i(40).onFreeze;
    i(30)("freeze", function(e) {
      return function(t) {
        return e && n(t) ? e(r(t)) : t;
      };
    });
  },
  function(e, t, i) {
    var n = i(6),
      r = i(40).onFreeze;
    i(30)("seal", function(e) {
      return function(t) {
        return e && n(t) ? e(r(t)) : t;
      };
    });
  },
  function(e, t, i) {
    var n = i(6),
      r = i(40).onFreeze;
    i(30)("preventExtensions", function(e) {
      return function(t) {
        return e && n(t) ? e(r(t)) : t;
      };
    });
  },
  function(e, t, i) {
    var n = i(6);
    i(30)("isFrozen", function(e) {
      return function(t) {
        return !n(t) || (!!e && e(t));
      };
    });
  },
  function(e, t, i) {
    var n = i(6);
    i(30)("isSealed", function(e) {
      return function(t) {
        return !n(t) || (!!e && e(t));
      };
    });
  },
  function(e, t, i) {
    var n = i(6);
    i(30)("isExtensible", function(e) {
      return function(t) {
        return !!n(t) && (!e || e(t));
      };
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S + n.F, "Object", { assign: i(143) });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Object", { is: i(144) });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Object", { setPrototypeOf: i(102).set });
  },
  function(e, t, i) {
    "use strict";
    var n = i(66),
      r = {};
    (r[i(8)("toStringTag")] = "z"),
      r + "" != "[object z]" &&
        i(19)(
          Object.prototype,
          "toString",
          function() {
            return "[object " + n(this) + "]";
          },
          !0
        );
  },
  function(e, t, i) {
    var n = i(0);
    n(n.P, "Function", { bind: i(145) });
  },
  function(e, t, i) {
    var n = i(12).f,
      r = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in r ||
      (i(13) &&
        n(r, "name", {
          configurable: !0,
          get: function() {
            try {
              return ("" + this).match(o)[1];
            } catch (e) {
              return "";
            }
          }
        }));
  },
  function(e, t, i) {
    "use strict";
    var n = i(6),
      r = i(52),
      o = i(8)("hasInstance"),
      a = Function.prototype;
    o in a ||
      i(12).f(a, o, {
        value: function(e) {
          if ("function" != typeof this || !n(e)) return !1;
          if (!n(this.prototype)) return e instanceof this;
          for (; (e = r(e)); ) if (this.prototype === e) return !0;
          return !1;
        }
      });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(147);
    n(n.G + n.F * (parseInt != r), { parseInt: r });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(148);
    n(n.G + n.F * (parseFloat != r), { parseFloat: r });
  },
  function(e, t, i) {
    "use strict";
    var n = i(5),
      r = i(22),
      o = i(36),
      a = i(104),
      s = i(39),
      c = i(3),
      u = i(51).f,
      l = i(29).f,
      h = i(12).f,
      f = i(76).trim,
      d = n.Number,
      p = d,
      m = d.prototype,
      g = "Number" == o(i(50)(m)),
      _ = "trim" in String.prototype,
      v = function(e) {
        var t = s(e, !1);
        if ("string" == typeof t && t.length > 2) {
          var i,
            n,
            r,
            o = (t = _ ? t.trim() : f(t, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (i = t.charCodeAt(2)) || 120 === i) return NaN;
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                (n = 2), (r = 49);
                break;
              case 79:
              case 111:
                (n = 8), (r = 55);
                break;
              default:
                return +t;
            }
            for (var a, c = t.slice(2), u = 0, l = c.length; u < l; u++)
              if ((a = c.charCodeAt(u)) < 48 || a > r) return NaN;
            return parseInt(c, n);
          }
        }
        return +t;
      };
    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
      d = function(e) {
        var t = arguments.length < 1 ? 0 : e,
          i = this;
        return i instanceof d &&
          (g
            ? c(function() {
                m.valueOf.call(i);
              })
            : "Number" != o(i))
          ? a(new p(v(t)), i, d)
          : v(t);
      };
      for (
        var y,
          b = i(13)
            ? u(p)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          E = 0;
        b.length > E;
        E++
      )
        r(p, (y = b[E])) && !r(d, y) && h(d, y, l(p, y));
      (d.prototype = m), (m.constructor = d), i(19)(n, "Number", d);
    }
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(28),
      o = i(149),
      a = i(105),
      s = (1).toFixed,
      c = Math.floor,
      u = [0, 0, 0, 0, 0, 0],
      l = "Number.toFixed: incorrect invocation!",
      h = function(e, t) {
        for (var i = -1, n = t; ++i < 6; )
          (n += e * u[i]), (u[i] = n % 1e7), (n = c(n / 1e7));
      },
      f = function(e) {
        for (var t = 6, i = 0; --t >= 0; )
          (i += u[t]), (u[t] = c(i / e)), (i = (i % e) * 1e7);
      },
      d = function() {
        for (var e = 6, t = ""; --e >= 0; )
          if ("" !== t || 0 === e || 0 !== u[e]) {
            var i = String(u[e]);
            t = "" === t ? i : t + a.call("0", 7 - i.length) + i;
          }
        return t;
      },
      p = function e(t, i, n) {
        return 0 === i
          ? n
          : i % 2 == 1
          ? e(t, i - 1, n * t)
          : e(t * t, i / 2, n);
      };
    n(
      n.P +
        n.F *
          ((!!s &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
            !i(3)(function() {
              s.call({});
            })),
      "Number",
      {
        toFixed: function(e) {
          var t,
            i,
            n,
            s,
            c = o(this, l),
            u = r(e),
            m = "",
            g = "0";
          if (u < 0 || u > 20) throw RangeError(l);
          if (c != c) return "NaN";
          if (c <= -1e21 || c >= 1e21) return String(c);
          if ((c < 0 && ((m = "-"), (c = -c)), c > 1e-21))
            if (
              ((i =
                (t =
                  (function(e) {
                    for (var t = 0, i = e; i >= 4096; ) (t += 12), (i /= 4096);
                    for (; i >= 2; ) (t += 1), (i /= 2);
                    return t;
                  })(c * p(2, 69, 1)) - 69) < 0
                  ? c * p(2, -t, 1)
                  : c / p(2, t, 1)),
              (i *= 4503599627370496),
              (t = 52 - t) > 0)
            ) {
              for (h(0, i), n = u; n >= 7; ) h(1e7, 0), (n -= 7);
              for (h(p(10, n, 1), 0), n = t - 1; n >= 23; )
                f(1 << 23), (n -= 23);
              f(1 << n), h(1, 1), f(2), (g = d());
            } else h(0, i), h(1 << -t, 0), (g = d() + a.call("0", u));
          return (g =
            u > 0
              ? m +
                ((s = g.length) <= u
                  ? "0." + a.call("0", u - s) + g
                  : g.slice(0, s - u) + "." + g.slice(s - u))
              : m + g);
        }
      }
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(3),
      o = i(149),
      a = (1).toPrecision;
    n(
      n.P +
        n.F *
          (r(function() {
            return "1" !== a.call(1, void 0);
          }) ||
            !r(function() {
              a.call({});
            })),
      "Number",
      {
        toPrecision: function(e) {
          var t = o(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === e ? a.call(t) : a.call(t, e);
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Number", { EPSILON: Math.pow(2, -52) });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(5).isFinite;
    n(n.S, "Number", {
      isFinite: function(e) {
        return "number" == typeof e && r(e);
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Number", { isInteger: i(150) });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Number", {
      isNaN: function(e) {
        return e != e;
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(150),
      o = Math.abs;
    n(n.S, "Number", {
      isSafeInteger: function(e) {
        return r(e) && o(e) <= 9007199254740991;
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(148);
    n(n.S + n.F * (Number.parseFloat != r), "Number", { parseFloat: r });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(147);
    n(n.S + n.F * (Number.parseInt != r), "Number", { parseInt: r });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(151),
      o = Math.sqrt,
      a = Math.acosh;
    n(
      n.S +
        n.F *
          !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0),
      "Math",
      {
        acosh: function(e) {
          return (e = +e) < 1
            ? NaN
            : e > 94906265.62425156
            ? Math.log(e) + Math.LN2
            : r(e - 1 + o(e - 1) * o(e + 1));
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0),
      r = Math.asinh;
    n(n.S + n.F * !(r && 1 / r(0) > 0), "Math", {
      asinh: function e(t) {
        return isFinite((t = +t)) && 0 != t
          ? t < 0
            ? -e(-t)
            : Math.log(t + Math.sqrt(t * t + 1))
          : t;
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = Math.atanh;
    n(n.S + n.F * !(r && 1 / r(-0) < 0), "Math", {
      atanh: function(e) {
        return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(106);
    n(n.S, "Math", {
      cbrt: function(e) {
        return r((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", {
      clz32: function(e) {
        return (e >>>= 0)
          ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E)
          : 32;
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = Math.exp;
    n(n.S, "Math", {
      cosh: function(e) {
        return (r((e = +e)) + r(-e)) / 2;
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(107);
    n(n.S + n.F * (r != Math.expm1), "Math", { expm1: r });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", { fround: i(275) });
  },
  function(e, t, i) {
    var n = i(106),
      r = Math.pow,
      o = r(2, -52),
      a = r(2, -23),
      s = r(2, 127) * (2 - a),
      c = r(2, -126);
    e.exports =
      Math.fround ||
      function(e) {
        var t,
          i,
          r = Math.abs(e),
          u = n(e);
        return r < c
          ? u * (r / c / a + 1 / o - 1 / o) * c * a
          : (i = (t = (1 + a / o) * r) - (t - r)) > s || i != i
          ? u * (1 / 0)
          : u * i;
      };
  },
  function(e, t, i) {
    var n = i(0),
      r = Math.abs;
    n(n.S, "Math", {
      hypot: function(e, t) {
        for (var i, n, o = 0, a = 0, s = arguments.length, c = 0; a < s; )
          c < (i = r(arguments[a++]))
            ? ((o = o * (n = c / i) * n + 1), (c = i))
            : (o += i > 0 ? (n = i / c) * n : i);
        return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o);
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = Math.imul;
    n(
      n.S +
        n.F *
          i(3)(function() {
            return -5 != r(4294967295, 5) || 2 != r.length;
          }),
      "Math",
      {
        imul: function(e, t) {
          var i = +e,
            n = +t,
            r = 65535 & i,
            o = 65535 & n;
          return (
            0 |
            (r * o +
              ((((65535 & (i >>> 16)) * o + r * (65535 & (n >>> 16))) << 16) >>>
                0))
          );
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", {
      log10: function(e) {
        return Math.log(e) * Math.LOG10E;
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", { log1p: i(151) });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", {
      log2: function(e) {
        return Math.log(e) / Math.LN2;
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", { sign: i(106) });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(107),
      o = Math.exp;
    n(
      n.S +
        n.F *
          i(3)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      "Math",
      {
        sinh: function(e) {
          return Math.abs((e = +e)) < 1
            ? (r(e) - r(-e)) / 2
            : (o(e - 1) - o(-e - 1)) * (Math.E / 2);
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0),
      r = i(107),
      o = Math.exp;
    n(n.S, "Math", {
      tanh: function(e) {
        var t = r((e = +e)),
          i = r(-e);
        return t == 1 / 0 ? 1 : i == 1 / 0 ? -1 : (t - i) / (o(e) + o(-e));
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Math", {
      trunc: function(e) {
        return (e > 0 ? Math.floor : Math.ceil)(e);
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(49),
      o = String.fromCharCode,
      a = String.fromCodePoint;
    n(n.S + n.F * (!!a && 1 != a.length), "String", {
      fromCodePoint: function(e) {
        for (var t, i = [], n = arguments.length, a = 0; n > a; ) {
          if (((t = +arguments[a++]), r(t, 1114111) !== t))
            throw RangeError(t + " is not a valid code point");
          i.push(
            t < 65536
              ? o(t)
              : o(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
          );
        }
        return i.join("");
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(24),
      o = i(10);
    n(n.S, "String", {
      raw: function(e) {
        for (
          var t = r(e.raw),
            i = o(t.length),
            n = arguments.length,
            a = [],
            s = 0;
          i > s;

        )
          a.push(String(t[s++])), s < n && a.push(String(arguments[s]));
        return a.join("");
      }
    });
  },
  function(e, t, i) {
    "use strict";
    i(76)("trim", function(e) {
      return function() {
        return e(this, 3);
      };
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(108)(!0);
    i(109)(
      String,
      "String",
      function(e) {
        (this._t = String(e)), (this._i = 0);
      },
      function() {
        var e,
          t = this._t,
          i = this._i;
        return i >= t.length
          ? { value: void 0, done: !0 }
          : ((e = n(t, i)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(108)(!1);
    n(n.P, "String", {
      codePointAt: function(e) {
        return r(this, e);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(10),
      o = i(110),
      a = "".endsWith;
    n(n.P + n.F * i(112)("endsWith"), "String", {
      endsWith: function(e) {
        var t = o(this, e, "endsWith"),
          i = arguments.length > 1 ? arguments[1] : void 0,
          n = r(t.length),
          s = void 0 === i ? n : Math.min(r(i), n),
          c = String(e);
        return a ? a.call(t, c, s) : t.slice(s - c.length, s) === c;
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(110);
    n(n.P + n.F * i(112)("includes"), "String", {
      includes: function(e) {
        return !!~r(this, e, "includes").indexOf(
          e,
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.P, "String", { repeat: i(105) });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(10),
      o = i(110),
      a = "".startsWith;
    n(n.P + n.F * i(112)("startsWith"), "String", {
      startsWith: function(e) {
        var t = o(this, e, "startsWith"),
          i = r(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
          ),
          n = String(e);
        return a ? a.call(t, n, i) : t.slice(i, i + n.length) === n;
      }
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("anchor", function(e) {
      return function(t) {
        return e(this, "a", "name", t);
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("big", function(e) {
      return function() {
        return e(this, "big", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("blink", function(e) {
      return function() {
        return e(this, "blink", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("bold", function(e) {
      return function() {
        return e(this, "b", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("fixed", function(e) {
      return function() {
        return e(this, "tt", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("fontcolor", function(e) {
      return function(t) {
        return e(this, "font", "color", t);
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("fontsize", function(e) {
      return function(t) {
        return e(this, "font", "size", t);
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("italics", function(e) {
      return function() {
        return e(this, "i", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("link", function(e) {
      return function(t) {
        return e(this, "a", "href", t);
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("small", function(e) {
      return function() {
        return e(this, "small", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("strike", function(e) {
      return function() {
        return e(this, "strike", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("sub", function(e) {
      return function() {
        return e(this, "sub", "", "");
      };
    });
  },
  function(e, t, i) {
    "use strict";
    i(21)("sup", function(e) {
      return function() {
        return e(this, "sup", "", "");
      };
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Date", {
      now: function() {
        return new Date().getTime();
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(20),
      o = i(39);
    n(
      n.P +
        n.F *
          i(3)(function() {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function() {
                    return 1;
                  }
                })
            );
          }),
      "Date",
      {
        toJSON: function(e) {
          var t = r(this),
            i = o(t);
          return "number" != typeof i || isFinite(i) ? t.toISOString() : null;
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0),
      r = i(310);
    n(n.P + n.F * (Date.prototype.toISOString !== r), "Date", {
      toISOString: r
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(3),
      r = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      a = function(e) {
        return e > 9 ? e : "0" + e;
      };
    e.exports =
      n(function() {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1));
      }) ||
      !n(function() {
        o.call(new Date(NaN));
      })
        ? function() {
            if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
            var e = this,
              t = e.getUTCFullYear(),
              i = e.getUTCMilliseconds(),
              n = t < 0 ? "-" : t > 9999 ? "+" : "";
            return (
              n +
              ("00000" + Math.abs(t)).slice(n ? -6 : -4) +
              "-" +
              a(e.getUTCMonth() + 1) +
              "-" +
              a(e.getUTCDate()) +
              "T" +
              a(e.getUTCHours()) +
              ":" +
              a(e.getUTCMinutes()) +
              ":" +
              a(e.getUTCSeconds()) +
              "." +
              (i > 99 ? i : "0" + a(i)) +
              "Z"
            );
          }
        : o;
  },
  function(e, t, i) {
    var n = Date.prototype,
      r = n.toString,
      o = n.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      i(19)(n, "toString", function() {
        var e = o.call(this);
        return e == e ? r.call(this) : "Invalid Date";
      });
  },
  function(e, t, i) {
    var n = i(8)("toPrimitive"),
      r = Date.prototype;
    n in r || i(23)(r, n, i(313));
  },
  function(e, t, i) {
    "use strict";
    var n = i(4),
      r = i(39);
    e.exports = function(e) {
      if ("string" !== e && "number" !== e && "default" !== e)
        throw TypeError("Incorrect hint");
      return r(n(this), "number" != e);
    };
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Array", { isArray: i(100) });
  },
  function(e, t, i) {
    "use strict";
    var n = i(34),
      r = i(0),
      o = i(20),
      a = i(153),
      s = i(113),
      c = i(10),
      u = i(114),
      l = i(115);
    r(
      r.S +
        r.F *
          !i(77)(function(e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function(e) {
          var t,
            i,
            r,
            h,
            f = o(e),
            d = "function" == typeof this ? this : Array,
            p = arguments.length,
            m = p > 1 ? arguments[1] : void 0,
            g = void 0 !== m,
            _ = 0,
            v = l(f);
          if (
            (g && (m = n(m, p > 2 ? arguments[2] : void 0, 2)),
            null == v || (d == Array && s(v)))
          )
            for (i = new d((t = c(f.length))); t > _; _++)
              u(i, _, g ? m(f[_], _) : f[_]);
          else
            for (h = v.call(f), i = new d(); !(r = h.next()).done; _++)
              u(i, _, g ? a(h, m, [r.value, _], !0) : r.value);
          return (i.length = _), i;
        }
      }
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(114);
    n(
      n.S +
        n.F *
          i(3)(function() {
            function e() {}
            return !(Array.of.call(e) instanceof e);
          }),
      "Array",
      {
        of: function() {
          for (
            var e = 0,
              t = arguments.length,
              i = new ("function" == typeof this ? this : Array)(t);
            t > e;

          )
            r(i, e, arguments[e++]);
          return (i.length = t), i;
        }
      }
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(24),
      o = [].join;
    n(n.P + n.F * (i(64) != Object || !i(26)(o)), "Array", {
      join: function(e) {
        return o.call(r(this), void 0 === e ? "," : e);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(101),
      o = i(36),
      a = i(49),
      s = i(10),
      c = [].slice;
    n(
      n.P +
        n.F *
          i(3)(function() {
            r && c.call(r);
          }),
      "Array",
      {
        slice: function(e, t) {
          var i = s(this.length),
            n = o(this);
          if (((t = void 0 === t ? i : t), "Array" == n))
            return c.call(this, e, t);
          for (
            var r = a(e, i), u = a(t, i), l = s(u - r), h = new Array(l), f = 0;
            f < l;
            f++
          )
            h[f] = "String" == n ? this.charAt(r + f) : this[r + f];
          return h;
        }
      }
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(35),
      o = i(20),
      a = i(3),
      s = [].sort,
      c = [1, 2, 3];
    n(
      n.P +
        n.F *
          (a(function() {
            c.sort(void 0);
          }) ||
            !a(function() {
              c.sort(null);
            }) ||
            !i(26)(s)),
      "Array",
      {
        sort: function(e) {
          return void 0 === e ? s.call(o(this)) : s.call(o(this), r(e));
        }
      }
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(0),
      o = i(26)([].forEach, !0);
    n(n.P + n.F * !o, "Array", {
      forEach: function(e) {
        return r(this, e, arguments[1]);
      }
    });
  },
  function(e, t, i) {
    var n = i(322);
    e.exports = function(e, t) {
      return new (n(e))(t);
    };
  },
  function(e, t, i) {
    var n = i(6),
      r = i(100),
      o = i(8)("species");
    e.exports = function(e) {
      var t;
      return (
        r(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !r(t.prototype)) ||
            (t = void 0),
          n(t) && null === (t = t[o]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(1);
    n(n.P + n.F * !i(26)([].map, !0), "Array", {
      map: function(e) {
        return r(this, e, arguments[1]);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(2);
    n(n.P + n.F * !i(26)([].filter, !0), "Array", {
      filter: function(e) {
        return r(this, e, arguments[1]);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(3);
    n(n.P + n.F * !i(26)([].some, !0), "Array", {
      some: function(e) {
        return r(this, e, arguments[1]);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(4);
    n(n.P + n.F * !i(26)([].every, !0), "Array", {
      every: function(e) {
        return r(this, e, arguments[1]);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(154);
    n(n.P + n.F * !i(26)([].reduce, !0), "Array", {
      reduce: function(e) {
        return r(this, e, arguments.length, arguments[1], !1);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(154);
    n(n.P + n.F * !i(26)([].reduceRight, !0), "Array", {
      reduceRight: function(e) {
        return r(this, e, arguments.length, arguments[1], !0);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(74)(!1),
      o = [].indexOf,
      a = !!o && 1 / [1].indexOf(1, -0) < 0;
    n(n.P + n.F * (a || !i(26)(o)), "Array", {
      indexOf: function(e) {
        return a ? o.apply(this, arguments) || 0 : r(this, e, arguments[1]);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(24),
      o = i(28),
      a = i(10),
      s = [].lastIndexOf,
      c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    n(n.P + n.F * (c || !i(26)(s)), "Array", {
      lastIndexOf: function(e) {
        if (c) return s.apply(this, arguments) || 0;
        var t = r(this),
          i = a(t.length),
          n = i - 1;
        for (
          arguments.length > 1 && (n = Math.min(n, o(arguments[1]))),
            n < 0 && (n = i + n);
          n >= 0;
          n--
        )
          if (n in t && t[n] === e) return n || 0;
        return -1;
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.P, "Array", { copyWithin: i(155) }), i(58)("copyWithin");
  },
  function(e, t, i) {
    var n = i(0);
    n(n.P, "Array", { fill: i(116) }), i(58)("fill");
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(5),
      o = !0;
    "find" in [] &&
      Array(1).find(function() {
        o = !1;
      }),
      n(n.P + n.F * o, "Array", {
        find: function(e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      i(58)("find");
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(31)(6),
      o = "findIndex",
      a = !0;
    o in [] &&
      Array(1)[o](function() {
        a = !1;
      }),
      n(n.P + n.F * a, "Array", {
        findIndex: function(e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      i(58)(o);
  },
  function(e, t, i) {
    i(59)("Array");
  },
  function(e, t, i) {
    var n = i(5),
      r = i(104),
      o = i(12).f,
      a = i(51).f,
      s = i(111),
      c = i(78),
      u = n.RegExp,
      l = u,
      h = u.prototype,
      f = /a/g,
      d = /a/g,
      p = new u(f) !== f;
    if (
      i(13) &&
      (!p ||
        i(3)(function() {
          return (
            (d[i(8)("match")] = !1),
            u(f) != f || u(d) == d || "/a/i" != u(f, "i")
          );
        }))
    ) {
      u = function(e, t) {
        var i = this instanceof u,
          n = s(e),
          o = void 0 === t;
        return !i && n && e.constructor === u && o
          ? e
          : r(
              p
                ? new l(n && !o ? e.source : e, t)
                : l(
                    (n = e instanceof u) ? e.source : e,
                    n && o ? c.call(e) : t
                  ),
              i ? this : h,
              u
            );
      };
      for (
        var m = function(e) {
            (e in u) ||
              o(u, e, {
                configurable: !0,
                get: function() {
                  return l[e];
                },
                set: function(t) {
                  l[e] = t;
                }
              });
          },
          g = a(l),
          _ = 0;
        g.length > _;

      )
        m(g[_++]);
      (h.constructor = u), (u.prototype = h), i(19)(n, "RegExp", u);
    }
    i(59)("RegExp");
  },
  function(e, t, i) {
    "use strict";
    i(158);
    var n = i(4),
      r = i(78),
      o = i(13),
      a = /./.toString,
      s = function(e) {
        i(19)(RegExp.prototype, "toString", e, !0);
      };
    i(3)(function() {
      return "/a/b" != a.call({ source: "a", flags: "b" });
    })
      ? s(function() {
          var e = n(this);
          return "/".concat(
            e.source,
            "/",
            "flags" in e
              ? e.flags
              : !o && e instanceof RegExp
              ? r.call(e)
              : void 0
          );
        })
      : "toString" != a.name &&
        s(function() {
          return a.call(this);
        });
  },
  function(e, t, i) {
    "use strict";
    var n = i(4),
      r = i(10),
      o = i(119),
      a = i(79);
    i(80)("match", 1, function(e, t, i, s) {
      return [
        function(i) {
          var n = e(this),
            r = null == i ? void 0 : i[t];
          return void 0 !== r ? r.call(i, n) : new RegExp(i)[t](String(n));
        },
        function(e) {
          var t = s(i, e, this);
          if (t.done) return t.value;
          var c = n(e),
            u = String(this);
          if (!c.global) return a(c, u);
          var l = c.unicode;
          c.lastIndex = 0;
          for (var h, f = [], d = 0; null !== (h = a(c, u)); ) {
            var p = String(h[0]);
            (f[d] = p),
              "" === p && (c.lastIndex = o(u, r(c.lastIndex), l)),
              d++;
          }
          return 0 === d ? null : f;
        }
      ];
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(4),
      r = i(20),
      o = i(10),
      a = i(28),
      s = i(119),
      c = i(79),
      u = Math.max,
      l = Math.min,
      h = Math.floor,
      f = /\$([$&`']|\d\d?|<[^>]*>)/g,
      d = /\$([$&`']|\d\d?)/g;
    i(80)("replace", 2, function(e, t, i, p) {
      return [
        function(n, r) {
          var o = e(this),
            a = null == n ? void 0 : n[t];
          return void 0 !== a ? a.call(n, o, r) : i.call(String(o), n, r);
        },
        function(e, t) {
          var r = p(i, e, this, t);
          if (r.done) return r.value;
          var h = n(e),
            f = String(this),
            d = "function" == typeof t;
          d || (t = String(t));
          var g = h.global;
          if (g) {
            var _ = h.unicode;
            h.lastIndex = 0;
          }
          for (var v = []; ; ) {
            var y = c(h, f);
            if (null === y) break;
            if ((v.push(y), !g)) break;
            "" === String(y[0]) && (h.lastIndex = s(f, o(h.lastIndex), _));
          }
          for (var b, E = "", T = 0, A = 0; A < v.length; A++) {
            y = v[A];
            for (
              var x = String(y[0]),
                S = u(l(a(y.index), f.length), 0),
                C = [],
                P = 1;
              P < y.length;
              P++
            )
              C.push(void 0 === (b = y[P]) ? b : String(b));
            var R = y.groups;
            if (d) {
              var M = [x].concat(C, S, f);
              void 0 !== R && M.push(R);
              var O = String(t.apply(void 0, M));
            } else O = m(x, f, S, C, R, t);
            S >= T && ((E += f.slice(T, S) + O), (T = S + x.length));
          }
          return E + f.slice(T);
        }
      ];
      function m(e, t, n, o, a, s) {
        var c = n + e.length,
          u = o.length,
          l = d;
        return (
          void 0 !== a && ((a = r(a)), (l = f)),
          i.call(s, l, function(i, r) {
            var s;
            switch (r.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, n);
              case "'":
                return t.slice(c);
              case "<":
                s = a[r.slice(1, -1)];
                break;
              default:
                var l = +r;
                if (0 === l) return r;
                if (l > u) {
                  var f = h(l / 10);
                  return 0 === f
                    ? r
                    : f <= u
                    ? void 0 === o[f - 1]
                      ? r.charAt(1)
                      : o[f - 1] + r.charAt(1)
                    : r;
                }
                s = o[l - 1];
            }
            return void 0 === s ? "" : s;
          })
        );
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(4),
      r = i(144),
      o = i(79);
    i(80)("search", 1, function(e, t, i, a) {
      return [
        function(i) {
          var n = e(this),
            r = null == i ? void 0 : i[t];
          return void 0 !== r ? r.call(i, n) : new RegExp(i)[t](String(n));
        },
        function(e) {
          var t = a(i, e, this);
          if (t.done) return t.value;
          var s = n(e),
            c = String(this),
            u = s.lastIndex;
          r(u, 0) || (s.lastIndex = 0);
          var l = o(s, c);
          return (
            r(s.lastIndex, u) || (s.lastIndex = u), null === l ? -1 : l.index
          );
        }
      ];
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(111),
      r = i(4),
      o = i(67),
      a = i(119),
      s = i(10),
      c = i(79),
      u = i(118),
      l = Math.min,
      h = [].push,
      f = !!(function() {
        try {
          return new RegExp("x", "y");
        } catch (e) {}
      })();
    i(80)("split", 2, function(e, t, i, d) {
      var p = i;
      return (
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? (p = function(e, t) {
              var r = String(this);
              if (void 0 === e && 0 === t) return [];
              if (!n(e)) return i.call(r, e, t);
              for (
                var o,
                  a,
                  s,
                  c = [],
                  l =
                    (e.ignoreCase ? "i" : "") +
                    (e.multiline ? "m" : "") +
                    (e.unicode ? "u" : "") +
                    (e.sticky ? "y" : ""),
                  f = 0,
                  d = void 0 === t ? 4294967295 : t >>> 0,
                  p = new RegExp(e.source, l + "g");
                (o = u.call(p, r)) &&
                !(
                  (a = p.lastIndex) > f &&
                  (c.push(r.slice(f, o.index)),
                  o.length > 1 && o.index < r.length && h.apply(c, o.slice(1)),
                  (s = o[0].length),
                  (f = a),
                  c.length >= d)
                );

              )
                p.lastIndex === o.index && p.lastIndex++;
              return (
                f === r.length
                  ? (!s && p.test("")) || c.push("")
                  : c.push(r.slice(f)),
                c.length > d ? c.slice(0, d) : c
              );
            })
          : "0".split(void 0, 0).length &&
            (p = function(e, t) {
              return void 0 === e && 0 === t ? [] : i.call(this, e, t);
            }),
        [
          function(i, n) {
            var r = e(this),
              o = null == i ? void 0 : i[t];
            return void 0 !== o ? o.call(i, r, n) : p.call(String(r), i, n);
          },
          function(e, t) {
            var n = d(p, e, this, t, p !== i);
            if (n.done) return n.value;
            var u = r(e),
              h = String(this),
              m = o(u, RegExp),
              g = u.unicode,
              _ =
                (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (f ? "y" : "g"),
              v = new m(f ? u : "^(?:" + u.source + ")", _),
              y = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === y) return [];
            if (0 === h.length) return null === c(v, h) ? [h] : [];
            for (var b = 0, E = 0, T = []; E < h.length; ) {
              v.lastIndex = f ? E : 0;
              var A,
                x = c(v, f ? h : h.slice(E));
              if (
                null === x ||
                (A = l(s(v.lastIndex + (f ? 0 : E)), h.length)) === b
              )
                E = a(h, E, g);
              else {
                if ((T.push(h.slice(b, E)), T.length === y)) return T;
                for (var S = 1; S <= x.length - 1; S++)
                  if ((T.push(x[S]), T.length === y)) return T;
                E = b = A;
              }
            }
            return T.push(h.slice(b)), T;
          }
        ]
      );
    });
  },
  function(e, t, i) {
    var n = i(5),
      r = i(120).set,
      o = n.MutationObserver || n.WebKitMutationObserver,
      a = n.process,
      s = n.Promise,
      c = "process" == i(36)(a);
    e.exports = function() {
      var e,
        t,
        i,
        u = function() {
          var n, r;
          for (c && (n = a.domain) && n.exit(); e; ) {
            (r = e.fn), (e = e.next);
            try {
              r();
            } catch (n) {
              throw (e ? i() : (t = void 0), n);
            }
          }
          (t = void 0), n && n.enter();
        };
      if (c)
        i = function() {
          a.nextTick(u);
        };
      else if (!o || (n.navigator && n.navigator.standalone))
        if (s && s.resolve) {
          var l = s.resolve(void 0);
          i = function() {
            l.then(u);
          };
        } else
          i = function() {
            r.call(n, u);
          };
      else {
        var h = !0,
          f = document.createTextNode("");
        new o(u).observe(f, { characterData: !0 }),
          (i = function() {
            f.data = h = !h;
          });
      }
      return function(n) {
        var r = { fn: n, next: void 0 };
        t && (t.next = r), e || ((e = r), i()), (t = r);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function(e, t, i) {
    "use strict";
    var n = i(162),
      r = i(62);
    e.exports = i(83)(
      "Map",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function(e) {
          var t = n.getEntry(r(this, "Map"), e);
          return t && t.v;
        },
        set: function(e, t) {
          return n.def(r(this, "Map"), 0 === e ? 0 : e, t);
        }
      },
      n,
      !0
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(162),
      r = i(62);
    e.exports = i(83)(
      "Set",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(e) {
          return n.def(r(this, "Set"), (e = 0 === e ? 0 : e), e);
        }
      },
      n
    );
  },
  function(e, t, i) {
    "use strict";
    var n,
      r = i(31)(0),
      o = i(19),
      a = i(40),
      s = i(143),
      c = i(163),
      u = i(6),
      l = i(3),
      h = i(62),
      f = a.getWeak,
      d = Object.isExtensible,
      p = c.ufstore,
      m = {},
      g = function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      _ = {
        get: function(e) {
          if (u(e)) {
            var t = f(e);
            return !0 === t
              ? p(h(this, "WeakMap")).get(e)
              : t
              ? t[this._i]
              : void 0;
          }
        },
        set: function(e, t) {
          return c.def(h(this, "WeakMap"), e, t);
        }
      },
      v = (e.exports = i(83)("WeakMap", g, _, c, !0, !0));
    l(function() {
      return 7 != new v().set((Object.freeze || Object)(m), 7).get(m);
    }) &&
      (s((n = c.getConstructor(g, "WeakMap")).prototype, _),
      (a.NEED = !0),
      r(["delete", "has", "get", "set"], function(e) {
        var t = v.prototype,
          i = t[e];
        o(t, e, function(t, r) {
          if (u(t) && !d(t)) {
            this._f || (this._f = new n());
            var o = this._f[e](t, r);
            return "set" == e ? this : o;
          }
          return i.call(this, t, r);
        });
      }));
  },
  function(e, t, i) {
    "use strict";
    var n = i(163),
      r = i(62);
    i(83)(
      "WeakSet",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(e) {
          return n.def(r(this, "WeakSet"), e, !0);
        }
      },
      n,
      !1,
      !0
    );
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(84),
      o = i(121),
      a = i(4),
      s = i(49),
      c = i(10),
      u = i(6),
      l = i(5).ArrayBuffer,
      h = i(67),
      f = o.ArrayBuffer,
      d = o.DataView,
      p = r.ABV && l.isView,
      m = f.prototype.slice,
      g = r.VIEW;
    n(n.G + n.W + n.F * (l !== f), { ArrayBuffer: f }),
      n(n.S + n.F * !r.CONSTR, "ArrayBuffer", {
        isView: function(e) {
          return (p && p(e)) || (u(e) && g in e);
        }
      }),
      n(
        n.P +
          n.U +
          n.F *
            i(3)(function() {
              return !new f(2).slice(1, void 0).byteLength;
            }),
        "ArrayBuffer",
        {
          slice: function(e, t) {
            if (void 0 !== m && void 0 === t) return m.call(a(this), e);
            for (
              var i = a(this).byteLength,
                n = s(e, i),
                r = s(void 0 === t ? i : t, i),
                o = new (h(this, f))(c(r - n)),
                u = new d(this),
                l = new d(o),
                p = 0;
              n < r;

            )
              l.setUint8(p++, u.getUint8(n++));
            return o;
          }
        }
      ),
      i(59)("ArrayBuffer");
  },
  function(e, t, i) {
    var n = i(0);
    n(n.G + n.W + n.F * !i(84).ABV, { DataView: i(121).DataView });
  },
  function(e, t, i) {
    i(38)("Int8", 1, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)("Uint8", 1, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)(
      "Uint8",
      1,
      function(e) {
        return function(t, i, n) {
          return e(this, t, i, n);
        };
      },
      !0
    );
  },
  function(e, t, i) {
    i(38)("Int16", 2, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)("Uint16", 2, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)("Int32", 4, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)("Uint32", 4, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)("Float32", 4, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    i(38)("Float64", 8, function(e) {
      return function(t, i, n) {
        return e(this, t, i, n);
      };
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(35),
      o = i(4),
      a = (i(5).Reflect || {}).apply,
      s = Function.apply;
    n(
      n.S +
        n.F *
          !i(3)(function() {
            a(function() {});
          }),
      "Reflect",
      {
        apply: function(e, t, i) {
          var n = r(e),
            c = o(i);
          return a ? a(n, t, c) : s.call(n, t, c);
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0),
      r = i(50),
      o = i(35),
      a = i(4),
      s = i(6),
      c = i(3),
      u = i(145),
      l = (i(5).Reflect || {}).construct,
      h = c(function() {
        function e() {}
        return !(l(function() {}, [], e) instanceof e);
      }),
      f = !c(function() {
        l(function() {});
      });
    n(n.S + n.F * (h || f), "Reflect", {
      construct: function(e, t) {
        o(e), a(t);
        var i = arguments.length < 3 ? e : o(arguments[2]);
        if (f && !h) return l(e, t, i);
        if (e == i) {
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
          }
          var n = [null];
          return n.push.apply(n, t), new (u.apply(e, n))();
        }
        var c = i.prototype,
          d = r(s(c) ? c : Object.prototype),
          p = Function.apply.call(e, d, t);
        return s(p) ? p : d;
      }
    });
  },
  function(e, t, i) {
    var n = i(12),
      r = i(0),
      o = i(4),
      a = i(39);
    r(
      r.S +
        r.F *
          i(3)(function() {
            Reflect.defineProperty(n.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      "Reflect",
      {
        defineProperty: function(e, t, i) {
          o(e), (t = a(t, !0)), o(i);
          try {
            return n.f(e, t, i), !0;
          } catch (e) {
            return !1;
          }
        }
      }
    );
  },
  function(e, t, i) {
    var n = i(0),
      r = i(29).f,
      o = i(4);
    n(n.S, "Reflect", {
      deleteProperty: function(e, t) {
        var i = r(o(e), t);
        return !(i && !i.configurable) && delete e[t];
      }
    });
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(4),
      o = function(e) {
        (this._t = r(e)), (this._i = 0);
        var t,
          i = (this._k = []);
        for (t in e) i.push(t);
      };
    i(152)(o, "Object", function() {
      var e,
        t = this._k;
      do {
        if (this._i >= t.length) return { value: void 0, done: !0 };
      } while (!((e = t[this._i++]) in this._t));
      return { value: e, done: !1 };
    }),
      n(n.S, "Reflect", {
        enumerate: function(e) {
          return new o(e);
        }
      });
  },
  function(e, t, i) {
    var n = i(29),
      r = i(52),
      o = i(22),
      a = i(0),
      s = i(6),
      c = i(4);
    a(a.S, "Reflect", {
      get: function e(t, i) {
        var a,
          u,
          l = arguments.length < 3 ? t : arguments[2];
        return c(t) === l
          ? t[i]
          : (a = n.f(t, i))
          ? o(a, "value")
            ? a.value
            : void 0 !== a.get
            ? a.get.call(l)
            : void 0
          : s((u = r(t)))
          ? e(u, i, l)
          : void 0;
      }
    });
  },
  function(e, t, i) {
    var n = i(29),
      r = i(0),
      o = i(4);
    r(r.S, "Reflect", {
      getOwnPropertyDescriptor: function(e, t) {
        return n.f(o(e), t);
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(52),
      o = i(4);
    n(n.S, "Reflect", {
      getPrototypeOf: function(e) {
        return r(o(e));
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Reflect", {
      has: function(e, t) {
        return t in e;
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(4),
      o = Object.isExtensible;
    n(n.S, "Reflect", {
      isExtensible: function(e) {
        return r(e), !o || o(e);
      }
    });
  },
  function(e, t, i) {
    var n = i(0);
    n(n.S, "Reflect", { ownKeys: i(165) });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(4),
      o = Object.preventExtensions;
    n(n.S, "Reflect", {
      preventExtensions: function(e) {
        r(e);
        try {
          return o && o(e), !0;
        } catch (e) {
          return !1;
        }
      }
    });
  },
  function(e, t, i) {
    var n = i(12),
      r = i(29),
      o = i(52),
      a = i(22),
      s = i(0),
      c = i(45),
      u = i(4),
      l = i(6);
    s(s.S, "Reflect", {
      set: function e(t, i, s) {
        var h,
          f,
          d = arguments.length < 4 ? t : arguments[3],
          p = r.f(u(t), i);
        if (!p) {
          if (l((f = o(t)))) return e(f, i, s, d);
          p = c(0);
        }
        if (a(p, "value")) {
          if (!1 === p.writable || !l(d)) return !1;
          if ((h = r.f(d, i))) {
            if (h.get || h.set || !1 === h.writable) return !1;
            (h.value = s), n.f(d, i, h);
          } else n.f(d, i, c(0, s));
          return !0;
        }
        return void 0 !== p.set && (p.set.call(d, s), !0);
      }
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(102);
    r &&
      n(n.S, "Reflect", {
        setPrototypeOf: function(e, t) {
          r.check(e, t);
          try {
            return r.set(e, t), !0;
          } catch (e) {
            return !1;
          }
        }
      });
  },
  function(e, t, i) {
    i(374), (e.exports = i(14).Array.includes);
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(74)(!0);
    n(n.P, "Array", {
      includes: function(e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }),
      i(58)("includes");
  },
  function(e, t, i) {
    i(376), (e.exports = i(14).String.padStart);
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(166),
      o = i(82);
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
      padStart: function(e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
      }
    });
  },
  function(e, t, i) {
    i(378), (e.exports = i(14).String.padEnd);
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(166),
      o = i(82);
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
      padEnd: function(e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
      }
    });
  },
  function(e, t, i) {
    i(380), (e.exports = i(97).f("asyncIterator"));
  },
  function(e, t, i) {
    i(139)("asyncIterator");
  },
  function(e, t, i) {
    i(382), (e.exports = i(14).Object.getOwnPropertyDescriptors);
  },
  function(e, t, i) {
    var n = i(0),
      r = i(165),
      o = i(24),
      a = i(29),
      s = i(114);
    n(n.S, "Object", {
      getOwnPropertyDescriptors: function(e) {
        for (
          var t, i, n = o(e), c = a.f, u = r(n), l = {}, h = 0;
          u.length > h;

        )
          void 0 !== (i = c(n, (t = u[h++]))) && s(l, t, i);
        return l;
      }
    });
  },
  function(e, t, i) {
    i(384), (e.exports = i(14).Object.values);
  },
  function(e, t, i) {
    var n = i(0),
      r = i(167)(!1);
    n(n.S, "Object", {
      values: function(e) {
        return r(e);
      }
    });
  },
  function(e, t, i) {
    i(386), (e.exports = i(14).Object.entries);
  },
  function(e, t, i) {
    var n = i(0),
      r = i(167)(!0);
    n(n.S, "Object", {
      entries: function(e) {
        return r(e);
      }
    });
  },
  function(e, t, i) {
    "use strict";
    i(159), i(388), (e.exports = i(14).Promise.finally);
  },
  function(e, t, i) {
    "use strict";
    var n = i(0),
      r = i(14),
      o = i(5),
      a = i(67),
      s = i(161);
    n(n.P + n.R, "Promise", {
      finally: function(e) {
        var t = a(this, r.Promise || o.Promise),
          i = "function" == typeof e;
        return this.then(
          i
            ? function(i) {
                return s(t, e()).then(function() {
                  return i;
                });
              }
            : e,
          i
            ? function(i) {
                return s(t, e()).then(function() {
                  throw i;
                });
              }
            : e
        );
      }
    });
  },
  function(e, t, i) {
    i(390), i(391), i(392), (e.exports = i(14));
  },
  function(e, t, i) {
    var n = i(5),
      r = i(0),
      o = i(82),
      a = [].slice,
      s = /MSIE .\./.test(o),
      c = function(e) {
        return function(t, i) {
          var n = arguments.length > 2,
            r = !!n && a.call(arguments, 2);
          return e(
            n
              ? function() {
                  ("function" == typeof t ? t : Function(t)).apply(this, r);
                }
              : t,
            i
          );
        };
      };
    r(r.G + r.B + r.F * s, {
      setTimeout: c(n.setTimeout),
      setInterval: c(n.setInterval)
    });
  },
  function(e, t, i) {
    var n = i(0),
      r = i(120);
    n(n.G + n.B, { setImmediate: r.set, clearImmediate: r.clear });
  },
  function(e, t, i) {
    for (
      var n = i(117),
        r = i(48),
        o = i(19),
        a = i(5),
        s = i(23),
        c = i(57),
        u = i(8),
        l = u("iterator"),
        h = u("toStringTag"),
        f = c.Array,
        d = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        },
        p = r(d),
        m = 0;
      m < p.length;
      m++
    ) {
      var g,
        _ = p[m],
        v = d[_],
        y = a[_],
        b = y && y.prototype;
      if (b && (b[l] || s(b, l, f), b[h] || s(b, h, _), (c[_] = f), v))
        for (g in n) b[g] || o(b, g, n[g], !0);
    }
  },
  function(e, t, i) {
    (function(e, t) {
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function(n) {
        "use strict";
        var r,
          o = Object.prototype,
          a = o.hasOwnProperty,
          s = "function" == typeof Symbol ? Symbol : {},
          c = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          l = s.toStringTag || "@@toStringTag",
          h = "object" === i(e),
          f = n.regeneratorRuntime;
        if (f) h && (e.exports = f);
        else {
          (f = n.regeneratorRuntime = h ? e.exports : {}).wrap = T;
          var d = "suspendedStart",
            p = "suspendedYield",
            m = "executing",
            g = "completed",
            _ = {},
            v = {};
          v[c] = function() {
            return this;
          };
          var y = Object.getPrototypeOf,
            b = y && y(y(D([])));
          b && b !== o && a.call(b, c) && (v = b);
          var E = (C.prototype = x.prototype = Object.create(v));
          (S.prototype = E.constructor = C),
            (C.constructor = S),
            (C[l] = S.displayName = "GeneratorFunction"),
            (f.isGeneratorFunction = function(e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === S || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (f.mark = function(e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, C)
                  : ((e.__proto__ = C), l in e || (e[l] = "GeneratorFunction")),
                (e.prototype = Object.create(E)),
                e
              );
            }),
            (f.awrap = function(e) {
              return { __await: e };
            }),
            P(R.prototype),
            (R.prototype[u] = function() {
              return this;
            }),
            (f.AsyncIterator = R),
            (f.async = function(e, t, i, n) {
              var r = new R(T(e, t, i, n));
              return f.isGeneratorFunction(t)
                ? r
                : r.next().then(function(e) {
                    return e.done ? e.value : r.next();
                  });
            }),
            P(E),
            (E[l] = "Generator"),
            (E[c] = function() {
              return this;
            }),
            (E.toString = function() {
              return "[object Generator]";
            }),
            (f.keys = function(e) {
              var t = [];
              for (var i in e) t.push(i);
              return (
                t.reverse(),
                function i() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (i.value = n), (i.done = !1), i;
                  }
                  return (i.done = !0), i;
                }
              );
            }),
            (f.values = D),
            (I.prototype = {
              constructor: I,
              reset: function(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = r),
                  this.tryEntries.forEach(w),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      a.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = r);
              },
              stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function i(i, n) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = i),
                    n && ((t.method = "next"), (t.arg = r)),
                    !!n
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n],
                    s = o.completion;
                  if ("root" === o.tryLoc) return i("end");
                  if (o.tryLoc <= this.prev) {
                    var c = a.call(o, "catchLoc"),
                      u = a.call(o, "finallyLoc");
                    if (c && u) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var n = this.tryEntries[i];
                  if (
                    n.tryLoc <= this.prev &&
                    a.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var r = n;
                    break;
                  }
                }
                r &&
                  ("break" === e || "continue" === e) &&
                  r.tryLoc <= t &&
                  t <= r.finallyLoc &&
                  (r = null);
                var o = r ? r.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  r
                    ? ((this.method = "next"), (this.next = r.finallyLoc), _)
                    : this.complete(o)
                );
              },
              complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  _
                );
              },
              finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var i = this.tryEntries[t];
                  if (i.finallyLoc === e)
                    return this.complete(i.completion, i.afterLoc), w(i), _;
                }
              },
              catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var i = this.tryEntries[t];
                  if (i.tryLoc === e) {
                    var n = i.completion;
                    if ("throw" === n.type) {
                      var r = n.arg;
                      w(i);
                    }
                    return r;
                  }
           