/*! firebase-admin v4.2.1
    https://firebase.google.com/terms/ */
/*! typedarray.js
    Copyright (c) 2010, Linden Research, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE. */
/* Copied from firebase/firebase-client-js commit 83ba5203e3ad463f7f21c34d4fe3bf226ecb08da */
(function () {
  var firebase = require('../default-namespace');
  var h, aa = this;

  function n(a) {
    return void 0 !== a
  }

  function ba() {}

  function ca(a) {
    a.Tb = function () {
      return a.Ve ? a.Ve : a.Ve = new a
    }
  }

  function da(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
  }

  function ea(a) {
    return "array" == da(a)
  }

  function fa(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  }

  function p(a) {
    return "string" == typeof a
  }

  function ga(a) {
    return "number" == typeof a
  }

  function ha(a) {
    return "function" == da(a)
  }

  function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  }

  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }

  function q(a, b, c) {
    q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return q.apply(null, arguments)
  }

  function la(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Bg = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.vg = function (a, c, f) {
      for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
      return b.prototype[c].apply(a, g)
    }
  };

  function ma() {
    this.Va = -1
  };

  function na() {
    this.Va = -1;
    this.Va = 64;
    this.M = [];
    this.Sd = [];
    this.zf = [];
    this.xd = [];
    this.xd[0] = 128;
    for (var a = 1; a < this.Va; ++a) this.xd[a] = 0;
    this.Md = this.Yb = 0;
    this.reset()
  }
  la(na, ma);
  na.prototype.reset = function () {
    this.M[0] = 1732584193;
    this.M[1] = 4023233417;
    this.M[2] = 2562383102;
    this.M[3] = 271733878;
    this.M[4] = 3285377520;
    this.Md = this.Yb = 0
  };

  function oa(a, b, c) {
    c || (c = 0);
    var d = a.zf;
    if (p(b))
      for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
    else
      for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = (f << 1 | f >>> 31) & 4294967295
    }
    b = a.M[0];
    c = a.M[1];
    for (var g = a.M[2], k = a.M[3], m = a.M[4], l, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = k ^ c & (g ^ k), l = 1518500249) : (f = c ^ g ^ k, l = 1859775393) : 60 > e ? (f = c & g | k & (c | g), l = 2400959708) : (f = c ^ g ^ k, l = 3395469782), f = (b <<
      5 | b >>> 27) + f + m + l + d[e] & 4294967295, m = k, k = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
    a.M[0] = a.M[0] + b & 4294967295;
    a.M[1] = a.M[1] + c & 4294967295;
    a.M[2] = a.M[2] + g & 4294967295;
    a.M[3] = a.M[3] + k & 4294967295;
    a.M[4] = a.M[4] + m & 4294967295
  }
  na.prototype.update = function (a, b) {
    if (null != a) {
      n(b) || (b = a.length);
      for (var c = b - this.Va, d = 0, e = this.Sd, f = this.Yb; d < b;) {
        if (0 == f)
          for (; d <= c;) oa(this, a, d), d += this.Va;
        if (p(a))
          for (; d < b;) {
            if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Va) {
              oa(this, e);
              f = 0;
              break
            }
          } else
            for (; d < b;)
              if (e[f] = a[d], ++f, ++d, f == this.Va) {
                oa(this, e);
                f = 0;
                break
              }
      }
      this.Yb = f;
      this.Md += b
    }
  };

  function pa(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
      return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }

  function qa() {
    this.Dd = void 0
  }

  function ra(a, b, c) {
    switch (typeof b) {
      case "string":
        sa(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? b : "null");
        break;
      case "boolean":
        c.push(b);
        break;
      case "undefined":
        c.push("null");
        break;
      case "object":
        if (null == b) {
          c.push("null");
          break
        }
        if (ea(b)) {
          var d = b.length;
          c.push("[");
          for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], ra(a, a.Dd ? a.Dd.call(b, String(f), e) : e, c), e = ",";
          c.push("]");
          break
        }
        c.push("{");
        d = "";
        for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), sa(f, c),
          c.push(":"), ra(a, a.Dd ? a.Dd.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
  var ta = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    ua = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

  function sa(a, b) {
    b.push('"', a.replace(ua, function (a) {
      if (a in ta) return ta[a];
      var b = a.charCodeAt(0),
        e = "\\u";
      16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
      return ta[a] = e + b.toString(16)
    }), '"')
  };

  function t(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a)
  }

  function va(a, b) {
    var c = {},
      d;
    for (d in a) c[d] = b.call(void 0, a[d], d, a);
    return c
  }

  function wa(a, b) {
    for (var c in a)
      if (!b.call(void 0, a[c], c, a)) return !1;
    return !0
  }

  function xa(a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b
  }

  function ya(a) {
    for (var b in a) return b
  }

  function za(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }

  function Aa(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  }

  function Ba(a, b) {
    for (var c in a)
      if (a[c] == b) return !0;
    return !1
  }

  function Ca(a, b, c) {
    for (var d in a)
      if (b.call(c, a[d], d, a)) return d
  }

  function Da(a, b) {
    var c = Ca(a, b, void 0);
    return c && a[c]
  }

  function Ea(a) {
    for (var b in a) return !1;
    return !0
  }

  function Fa(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  };
  var u = Array.prototype,
    Ga = u.indexOf ? function (a, b, c) {
      return u.indexOf.call(a, b, c)
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    Ha = u.forEach ? function (a, b, c) {
      u.forEach.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Ia = u.filter ? function (a, b, c) {
      return u.filter.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = [], f = 0, g = p(a) ?
          a.split("") : a, k = 0; k < d; k++)
        if (k in g) {
          var m = g[k];
          b.call(c, m, k, a) && (e[f++] = m)
        }
      return e
    },
    Ja = u.map ? function (a, b, c) {
      return u.map.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    },
    Ka = u.reduce ? function (a, b, c, d) {
      for (var e = [], f = 1, g = arguments.length; f < g; f++) e.push(arguments[f]);
      d && (e[0] = q(b, d));
      return u.reduce.apply(a, e)
    } : function (a, b, c, d) {
      var e = c;
      Ha(a, function (c, g) {
        e = b.call(d, e, c, g, a)
      });
      return e
    },
    La = u.every ? function (a, b,
      c) {
      return u.every.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && !b.call(c, e[f], f, a)) return !1;
      return !0
    };

  function Ma(a, b) {
    var c = Na(a, b, void 0);
    return 0 > c ? null : p(a) ? a.charAt(c) : a[c]
  }

  function Na(a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1
  }

  function Oa(a, b) {
    var c = Ga(a, b);
    0 <= c && u.splice.call(a, c, 1)
  }

  function Pa(a, b) {
    a.sort(b || Qa)
  }

  function Qa(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  };
  var v;
  a: {
    var Ra = aa.navigator;
    if (Ra) {
      var Sa = Ra.userAgent;
      if (Sa) {
        v = Sa;
        break a
      }
    }
    v = ""
  };
  var Ta = -1 != v.indexOf("Opera") || -1 != v.indexOf("OPR"),
    Ua = -1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE"),
    Va = -1 != v.indexOf("Gecko") && -1 == v.toLowerCase().indexOf("webkit") && !(-1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE")),
    Wa = -1 != v.toLowerCase().indexOf("webkit");
  (function () {
    var a = "",
      b;
    if (Ta && aa.opera) return a = aa.opera.version, ha(a) ? a() : a;
    Va ? b = /rv\:([^\);]+)(\)|;)/ : Ua ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Wa && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(v)) ? a[1] : "");
    return Ua && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
  })();
  var Xa = null,
    Ya = null;

  function Za(a, b) {
    if (!fa(a)) throw Error("encodeByteArray takes an array as a parameter");
    if (!Xa) {
      Xa = {};
      Ya = {};
      for (var c = 0; 65 > c; c++) Xa[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Ya[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
    }
    for (var c = b ? Ya : Xa, d = [], e = 0; e < a.length; e += 3) {
      var f = a[e],
        g = e + 1 < a.length,
        k = g ? a[e + 1] : 0,
        m = e + 2 < a.length,
        l = m ? a[e + 2] : 0,
        r = f >> 2,
        f = (f & 3) << 4 | k >> 4,
        k = (k & 15) << 2 | l >> 6,
        l = l & 63;
      m || (l = 64, g || (k = 64));
      d.push(c[r], c[f], c[k], c[l])
    }
    return d.join("")
  };

  function $a(a, b) {
    if (!a) throw ab(b);
  }

  function ab(a) {
    return Error("Firebase Database (" + firebase.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + a)
  };

  function bb(a) {
    return "undefined" !== typeof JSON && n(JSON.parse) ? JSON.parse(a) : pa(a)
  }

  function w(a) {
    if ("undefined" !== typeof JSON && n(JSON.stringify)) a = JSON.stringify(a);
    else {
      var b = [];
      ra(new qa, a, b);
      a = b.join("")
    }
    return a
  };

  function cb(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }

  function y(a, b) {
    if (Object.prototype.hasOwnProperty.call(a, b)) return a[b]
  }

  function db(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
  };
  var eb = firebase.Promise;

  function fb() {
    var a = this;
    this.reject = this.resolve = null;
    this.ra = new eb(function (b, c) {
      a.resolve = b;
      a.reject = c
    })
  }

  function gb(a, b) {
    return function (c, d) {
      c ? a.reject(c) : a.resolve(d);
      ha(b) && (hb(a.ra), 1 === b.length ? b(c) : b(c, d))
    }
  }

  function hb(a) {
    a.then(void 0, ba)
  };

  function ib(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      55296 <= e && 56319 >= e && (e -= 55296, d++, $a(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
    }
    return b
  }

  function jb(a) {
    for (var b = 0, c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b++ : 2048 > d ? b += 2 : 55296 <= d && 56319 >= d ? (b += 4, c++) : b += 3
    }
    return b
  };

  function kb(a) {
    var b = [];
    db(a, function (a, d) {
      ea(d) ? Ha(d, function (d) {
        b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
      }) : b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
    });
    return b.length ? "&" + b.join("&") : ""
  };

  function z(a, b, c, d) {
    var e;
    d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
    if (e) throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
  }

  function A(a, b, c) {
    var d = "";
    switch (b) {
      case 1:
        d = c ? "first" : "First";
        break;
      case 2:
        d = c ? "second" : "Second";
        break;
      case 3:
        d = c ? "third" : "Third";
        break;
      case 4:
        d = c ? "fourth" : "Fourth";
        break;
      default:
        throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
    }
    return a = a + " failed: " + (d + " argument ")
  }

  function B(a, b, c, d) {
    if ((!d || n(c)) && !ha(c)) throw Error(A(a, b, d) + "must be a valid function.");
  }

  function lb(a, b, c) {
    if (n(c) && (!ia(c) || null === c)) throw Error(A(a, b, !0) + "must be a valid context object.");
  };

  function mb(a, b) {
    this.committed = a;
    this.snapshot = b
  };

  function nb(a) {
    this.lc = a
  }
  nb.prototype.getToken = function (a) {
    return this.lc.INTERNAL.getToken(a).then(null, function (a) {
      return a && "auth/token-not-initialized" === a.code ? (C("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(a)
    })
  };

  function ob(a, b) {
    a.lc.INTERNAL.addAuthTokenListener(b)
  };

  function pb(a, b) {
    this.type = qb;
    this.source = a;
    this.path = b
  }
  pb.prototype.Jc = function () {
    return this.path.e() ? new pb(this.source, D) : new pb(this.source, E(this.path))
  };
  pb.prototype.toString = function () {
    return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
  };

  function rb(a, b, c) {
    this.type = sb;
    this.source = a;
    this.path = b;
    this.Fa = c
  }
  rb.prototype.Jc = function (a) {
    return this.path.e() ? new rb(this.source, D, this.Fa.Q(a)) : new rb(this.source, E(this.path), this.Fa)
  };
  rb.prototype.toString = function () {
    return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Fa.toString() + ")"
  };

  function tb(a, b) {
    return ub(a.name, b.name)
  }

  function vb(a, b) {
    return ub(a, b)
  };

  function G(a, b) {
    this.name = a;
    this.R = b
  }

  function wb(a, b) {
    return new G(a, b)
  };

  function xb() {
    this.Hd = H
  }
  xb.prototype.j = function (a) {
    return this.Hd.P(a)
  };
  xb.prototype.toString = function () {
    return this.Hd.toString()
  };

  function yb() {
    this.qc = {}
  }

  function zb(a, b, c) {
    n(c) || (c = 1);
    cb(a.qc, b) || (a.qc[b] = 0);
    a.qc[b] += c
  }
  yb.prototype.get = function () {
    return Fa(this.qc)
  };

  function Ab(a) {
    this.Df = a;
    this.od = null
  }
  Ab.prototype.get = function () {
    var a = this.Df.get(),
      b = Fa(a);
    if (this.od)
      for (var c in this.od) b[c] -= this.od[c];
    this.od = a;
    return b
  };

  function Bb(a) {
    this.rc = a;
    this.Ad = "firebase:"
  }
  h = Bb.prototype;
  h.set = function (a, b) {
    null == b ? this.rc.removeItem(this.Ad + a) : this.rc.setItem(this.Ad + a, w(b))
  };
  h.get = function (a) {
    a = this.rc.getItem(this.Ad + a);
    return null == a ? null : bb(a)
  };
  h.remove = function (a) {
    this.rc.removeItem(this.Ad + a)
  };
  h.We = !1;
  h.toString = function () {
    return this.rc.toString()
  };

  function Cb() {
    this.mc = {}
  }
  Cb.prototype.set = function (a, b) {
    null == b ? delete this.mc[a] : this.mc[a] = b
  };
  Cb.prototype.get = function (a) {
    return cb(this.mc, a) ? this.mc[a] : null
  };
  Cb.prototype.remove = function (a) {
    delete this.mc[a]
  };
  Cb.prototype.We = !0;

  function Db(a) {
    try {
      if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
        var b = window[a];
        b.setItem("firebase:sentinel", "cache");
        b.removeItem("firebase:sentinel");
        return new Bb(b)
      }
    } catch (c) {}
    return new Cb
  }
  var Eb = Db("localStorage"),
    Fb = Db("sessionStorage");

  function Gb(a, b, c, d, e) {
    this.host = a.toLowerCase();
    this.domain = this.host.substr(this.host.indexOf(".") + 1);
    this.Pc = b;
    this.me = c;
    this.tg = d;
    this.ef = e || "";
    this.Za = Eb.get("host:" + a) || this.host
  }

  function Hb(a, b) {
    b !== a.Za && (a.Za = b, "s-" === a.Za.substr(0, 2) && Eb.set("host:" + a.host, a.Za))
  }

  function Ib(a, b, c) {
    I("string" === typeof b, "typeof type must == string");
    I("object" === typeof c, "typeof params must == object");
    if (b === Jb) b = (a.Pc ? "wss://" : "ws://") + a.Za + "/.ws?";
    else if (b === Kb) b = (a.Pc ? "https://" : "http://") + a.Za + "/.lp?";
    else throw Error("Unknown connection type: " + b);
    a.host !== a.Za && (c.ns = a.me);
    var d = [];
    t(c, function (a, b) {
      d.push(b + "=" + a)
    });
    return b + d.join("&")
  }
  Gb.prototype.toString = function () {
    var a = (this.Pc ? "https://" : "http://") + this.host;
    this.ef && (a += "<" + this.ef + ">");
    return a
  };
  (function () {
    var a = process.version;
    if ("v0.10.22" === a || "v0.10.23" === a || "v0.10.24" === a) {
      var b = function (a, b, c) {
          this.chunk = a;
          this.encoding = b;
          this.callback = c
        },
        c = function (a, c, d, e, l) {
          c.objectMode || !1 === c.decodeStrings || "string" !== typeof d || (d = new Buffer(d, e));
          Buffer.isBuffer(d) && (e = "buffer");
          var r = c.objectMode ? 1 : d.length;
          c.length += r;
          var x = c.length < c.highWaterMark;
          x || (c.needDrain = !0);
          c.writing ? c.buffer.push(new b(d, e, l)) : (c.writelen = r, c.writecb = l, c.writing = !0, c.sync = !0, a._write(d, e, c.onwrite), c.sync = !1);
          return x
        },
        d = function (a, b, c, d) {
          var e = !0;
          if (!Buffer.isBuffer(c) && "string" !== typeof c && null !== c && void 0 !== c && !b.objectMode) {
            var r = new TypeError("Invalid non-string/buffer chunk");
            a.emit("error", r);
            process.nextTick(function () {
              d(r)
            });
            e = !1
          }
          return e
        },
        e = function (a, b) {
          var c = Error("write after end");
          a.emit("error", c);
          process.nextTick(function () {
            b(c)
          })
        },
        a = require("_stream_writable");
      a.prototype.write = function (a, b, k) {
        var m = this._writableState,
          l = !1;
        "function" === typeof b && (k = b, b = null);
        Buffer.isBuffer(a) ? b = "buffer" : b || (b =
          m.defaultEncoding);
        "function" !== typeof k && (k = function () {});
        m.ended ? e(this, k) : d(this, m, a, k) && (l = c(this, m, a, b, k));
        return l
      };
      require("_stream_duplex").prototype.write = a.prototype.write
    }
  })();

  function Lb(a, b) {
    return a && "object" === typeof a ? (I(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
  }

  function Mb(a, b) {
    var c = new Nb;
    Ob(a, new J(""), function (a, e) {
      Pb(c, a, Qb(e, b))
    });
    return c
  }

  function Qb(a, b) {
    var c = a.C().H(),
      c = Lb(c, b),
      d;
    if (a.J()) {
      var e = Lb(a.Ca(), b);
      return e !== a.Ca() || c !== a.C().H() ? new Rb(e, K(c)) : a
    }
    d = a;
    c !== a.C().H() && (d = d.fa(new Rb(c)));
    a.O(L, function (a, c) {
      var e = Qb(c, b);
      e !== c && (d = d.T(a, e))
    });
    return d
  };

  function Sb(a, b) {
    this.Ka = a;
    this.ba = b ? b : Tb
  }
  h = Sb.prototype;
  h.Na = function (a, b) {
    return new Sb(this.Ka, this.ba.Na(a, b, this.Ka).X(null, null, !1, null, null))
  };
  h.remove = function (a) {
    return new Sb(this.Ka, this.ba.remove(a, this.Ka).X(null, null, !1, null, null))
  };
  h.get = function (a) {
    for (var b, c = this.ba; !c.e();) {
      b = this.Ka(a, c.key);
      if (0 === b) return c.value;
      0 > b ? c = c.left : 0 < b && (c = c.right)
    }
    return null
  };

  function Ub(a, b) {
    for (var c, d = a.ba, e = null; !d.e();) {
      c = a.Ka(b, d.key);
      if (0 === c) {
        if (d.left.e()) return e ? e.key : null;
        for (d = d.left; !d.right.e();) d = d.right;
        return d.key
      }
      0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
    }
    throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  h.e = function () {
    return this.ba.e()
  };
  h.count = function () {
    return this.ba.count()
  };
  h.Dc = function () {
    return this.ba.Dc()
  };
  h.cc = function () {
    return this.ba.cc()
  };
  h.ha = function (a) {
    return this.ba.ha(a)
  };
  h.Ub = function (a) {
    return new Vb(this.ba, null, this.Ka, !1, a)
  };
  h.Vb = function (a, b) {
    return new Vb(this.ba, a, this.Ka, !1, b)
  };
  h.Xb = function (a, b) {
    return new Vb(this.ba, a, this.Ka, !0, b)
  };
  h.Te = function (a) {
    return new Vb(this.ba, null, this.Ka, !0, a)
  };

  function Vb(a, b, c, d, e) {
    this.Fd = e || null;
    this.he = d;
    this.Oa = [];
    for (e = 1; !a.e();)
      if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e) a = this.he ? a.left : a.right;
      else if (0 === e) {
      this.Oa.push(a);
      break
    } else this.Oa.push(a), a = this.he ? a.right : a.left
  }

  function M(a) {
    if (0 === a.Oa.length) return null;
    var b = a.Oa.pop(),
      c;
    c = a.Fd ? a.Fd(b.key, b.value) : {
      key: b.key,
      value: b.value
    };
    if (a.he)
      for (b = b.left; !b.e();) a.Oa.push(b), b = b.right;
    else
      for (b = b.right; !b.e();) a.Oa.push(b), b = b.left;
    return c
  }

  function Wb(a) {
    if (0 === a.Oa.length) return null;
    var b;
    b = a.Oa;
    b = b[b.length - 1];
    return a.Fd ? a.Fd(b.key, b.value) : {
      key: b.key,
      value: b.value
    }
  }

  function Xb(a, b, c, d, e) {
    this.key = a;
    this.value = b;
    this.color = null != c ? c : !0;
    this.left = null != d ? d : Tb;
    this.right = null != e ? e : Tb
  }
  h = Xb.prototype;
  h.X = function (a, b, c, d, e) {
    return new Xb(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right)
  };
  h.count = function () {
    return this.left.count() + 1 + this.right.count()
  };
  h.e = function () {
    return !1
  };
  h.ha = function (a) {
    return this.left.ha(a) || a(this.key, this.value) || this.right.ha(a)
  };

  function Yb(a) {
    return a.left.e() ? a : Yb(a.left)
  }
  h.Dc = function () {
    return Yb(this).key
  };
  h.cc = function () {
    return this.right.e() ? this.key : this.right.cc()
  };
  h.Na = function (a, b, c) {
    var d, e;
    e = this;
    d = c(a, e.key);
    e = 0 > d ? e.X(null, null, null, e.left.Na(a, b, c), null) : 0 === d ? e.X(null, b, null, null, null) : e.X(null, null, null, null, e.right.Na(a, b, c));
    return Zb(e)
  };

  function $b(a) {
    if (a.left.e()) return Tb;
    a.left.ea() || a.left.left.ea() || (a = ac(a));
    a = a.X(null, null, null, $b(a.left), null);
    return Zb(a)
  }
  h.remove = function (a, b) {
    var c, d;
    c = this;
    if (0 > b(a, c.key)) c.left.e() || c.left.ea() || c.left.left.ea() || (c = ac(c)), c = c.X(null, null, null, c.left.remove(a, b), null);
    else {
      c.left.ea() && (c = bc(c));
      c.right.e() || c.right.ea() || c.right.left.ea() || (c = cc(c), c.left.left.ea() && (c = bc(c), c = cc(c)));
      if (0 === b(a, c.key)) {
        if (c.right.e()) return Tb;
        d = Yb(c.right);
        c = c.X(d.key, d.value, null, null, $b(c.right))
      }
      c = c.X(null, null, null, null, c.right.remove(a, b))
    }
    return Zb(c)
  };
  h.ea = function () {
    return this.color
  };

  function Zb(a) {
    a.right.ea() && !a.left.ea() && (a = dc(a));
    a.left.ea() && a.left.left.ea() && (a = bc(a));
    a.left.ea() && a.right.ea() && (a = cc(a));
    return a
  }

  function ac(a) {
    a = cc(a);
    a.right.left.ea() && (a = a.X(null, null, null, null, bc(a.right)), a = dc(a), a = cc(a));
    return a
  }

  function dc(a) {
    return a.right.X(null, null, a.color, a.X(null, null, !0, null, a.right.left), null)
  }

  function bc(a) {
    return a.left.X(null, null, a.color, null, a.X(null, null, !0, a.left.right, null))
  }

  function cc(a) {
    return a.X(null, null, !a.color, a.left.X(null, null, !a.left.color, null, null), a.right.X(null, null, !a.right.color, null, null))
  }

  function ec() {}
  h = ec.prototype;
  h.X = function () {
    return this
  };
  h.Na = function (a, b) {
    return new Xb(a, b, null)
  };
  h.remove = function () {
    return this
  };
  h.count = function () {
    return 0
  };
  h.e = function () {
    return !0
  };
  h.ha = function () {
    return !1
  };
  h.Dc = function () {
    return null
  };
  h.cc = function () {
    return null
  };
  h.ea = function () {
    return !1
  };
  var Tb = new ec;
  var fc = function () {
      var a = 1;
      return function () {
        return a++
      }
    }(),
    I = $a,
    gc = ab;

  function hc(a) {
    try {
      return (new Buffer(a, "base64")).toString("utf8")
    } catch (b) {
      C("base64Decode failed: ", b)
    }
    return null
  }

  function ic(a) {
    var b = ib(a);
    a = new na;
    a.update(b);
    var b = [],
      c = 8 * a.Md;
    56 > a.Yb ? a.update(a.xd, 56 - a.Yb) : a.update(a.xd, a.Va - (a.Yb - 56));
    for (var d = a.Va - 1; 56 <= d; d--) a.Sd[d] = c & 255, c /= 256;
    oa(a, a.Sd);
    for (d = c = 0; 5 > d; d++)
      for (var e = 24; 0 <= e; e -= 8) b[c] = a.M[d] >> e & 255, ++c;
    return Za(b)
  }

  function jc(a) {
    for (var b = "", c = 0; c < arguments.length; c++) b = fa(arguments[c]) ? b + jc.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + w(arguments[c]) : b + arguments[c], b += " ";
    return b
  }
  var kc = null,
    lc = !0;

  function mc(a, b) {
    $a(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
    !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? kc = q(console.log, console) : "object" === typeof console.log && (kc = function (a) {
      console.log(a)
    })), b && Fb.set("logging_enabled", !0)) : ha(a) ? kc = a : (kc = null, Fb.remove("logging_enabled"))
  }

  function C(a) {
    !0 === lc && (lc = !1, null === kc && !0 === Fb.get("logging_enabled") && mc(!0));
    if (kc) {
      var b = jc.apply(null, arguments);
      kc(b)
    }
  }

  function nc(a) {
    return function () {
      C(a, arguments)
    }
  }

  function oc(a) {
    if ("undefined" !== typeof console) {
      var b = "FIREBASE INTERNAL ERROR: " + jc.apply(null, arguments);
      "undefined" !== typeof console.error ? console.error(b) : console.log(b)
    }
  }

  function pc(a) {
    var b = jc.apply(null, arguments);
    throw Error("FIREBASE FATAL ERROR: " + b);
  }

  function N(a) {
    if ("undefined" !== typeof console) {
      var b = "FIREBASE WARNING: " + jc.apply(null, arguments);
      "undefined" !== typeof console.warn ? console.warn(b) : console.log(b)
    }
  }

  function qc(a) {
    var b, c, d, e, f, g = a;
    f = c = a = b = "";
    d = !0;
    e = "https";
    if (p(g)) {
      var k = g.indexOf("//");
      0 <= k && (e = g.substring(0, k - 1), g = g.substring(k + 2));
      k = g.indexOf("/"); - 1 === k && (k = g.length);
      b = g.substring(0, k);
      f = "";
      g = g.substring(k).split("/");
      for (k = 0; k < g.length; k++)
        if (0 < g[k].length) {
          var m = g[k];
          try {
            m = decodeURIComponent(m.replace(/\+/g, " "))
          } catch (l) {}
          f += "/" + m
        }
      g = b.split(".");
      3 === g.length ? (a = g[1], c = g[0].toLowerCase()) : 2 === g.length && (a = g[0]);
      k = b.indexOf(":");
      0 <= k && (d = "https" === e || "wss" === e)
    }
    "firebase" === a && pc(b + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
    c && "undefined" != c || pc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
    d || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
    return {
      gc: new Gb(b, d, c, "ws" === e || "wss" === e),
      path: new J(f)
    }
  }

  function rc(a) {
    return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
  }

  function sc(a) {
    a()
  }

  function ub(a, b) {
    if (a === b) return 0;
    if ("[MIN_NAME]" === a || "[MAX_NAME]" === b) return -1;
    if ("[MIN_NAME]" === b || "[MAX_NAME]" === a) return 1;
    var c = tc(a),
      d = tc(b);
    return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1
  }

  function uc(a, b) {
    if (b && a in b) return b[a];
    throw Error("Missing required key (" + a + ") in object: " + w(b));
  }

  function vc(a) {
    if ("object" !== typeof a || null === a) return w(a);
    var b = [],
      c;
    for (c in a) b.push(c);
    b.sort();
    c = "{";
    for (var d = 0; d < b.length; d++) 0 !== d && (c += ","), c += w(b[d]), c += ":", c += vc(a[b[d]]);
    return c + "}"
  }

  function wc(a, b) {
    if (a.length <= b) return [a];
    for (var c = [], d = 0; d < a.length; d += b) d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
    return c
  }

  function xc(a, b) {
    if (ea(a))
      for (var c = 0; c < a.length; ++c) b(c, a[c]);
    else t(a, b)
  }

  function yc(a) {
    I(!rc(a), "Invalid JSON number");
    var b, c, d, e;
    0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
    e = [];
    for (a = 52; a; --a) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
    for (a = 11; a; --a) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
    e.push(b ? 1 : 0);
    e.reverse();
    b = e.join("");
    c = "";
    for (a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length &&
      (d = "0" + d), c += d;
    return c.toLowerCase()
  }
  var zc = /^-?\d{1,10}$/;

  function tc(a) {
    return zc.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null
  }

  function Ac(a) {
    try {
      a()
    } catch (b) {
      setTimeout(function () {
        N("Exception was thrown by user callback.", b.stack || "");
        throw b;
      }, Math.floor(0))
    }
  }

  function Bc(a, b, c) {
    Object.defineProperty(a, b, {
      get: c
    })
  }

  function Cc(a, b) {
    var c = setTimeout(a, b);
    "object" === typeof c && c.unref && c.unref();
    return c
  };

  function Dc(a) {
    var b = {},
      c = {},
      d = {},
      e = "";
    try {
      var f = a.split("."),
        b = bb(hc(f[0]) || ""),
        c = bb(hc(f[1]) || ""),
        e = f[2],
        d = c.d || {};
      delete c.d
    } catch (g) {}
    return {
      yg: b,
      Ge: c,
      data: d,
      og: e
    }
  }

  function Ec(a) {
    a = Dc(a);
    var b = a.Ge;
    return !!a.og && !!b && "object" === typeof b && b.hasOwnProperty("iat")
  }

  function Fc(a) {
    a = Dc(a).Ge;
    return "object" === typeof a && !0 === y(a, "admin")
  };

  function Gc(a, b, c) {
    this.type = Hc;
    this.source = a;
    this.path = b;
    this.children = c
  }
  Gc.prototype.Jc = function (a) {
    if (this.path.e()) return a = this.children.subtree(new J(a)), a.e() ? null : a.value ? new rb(this.source, D, a.value) : new Gc(this.source, D, a);
    I(O(this.path) === a, "Can't get a merge for a child not on the path of the operation");
    return new Gc(this.source, E(this.path), this.children)
  };
  Gc.prototype.toString = function () {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
  };

  function Ic(a, b, c) {
    this.f = nc("p:rest:");
    this.L = a;
    this.Eb = b;
    this.Xc = c;
    this.$ = {}
  }

  function Jc(a, b) {
    if (n(b)) return "tag$" + b;
    I(Kc(a.m), "should have a tag if it's not a default query.");
    return a.path.toString()
  }
  h = Ic.prototype;
  h.Xe = function (a, b, c, d) {
    var e = a.path.toString();
    this.f("Listen called for " + e + " " + a.ja());
    var f = Jc(a, c),
      g = {};
    this.$[f] = g;
    a = Lc(a.m);
    var k = this;
    Mc(this, e + ".json", a, function (a, b) {
      var r = b;
      404 === a && (a = r = null);
      null === a && k.Eb(e, r, !1, c);
      y(k.$, f) === g && d(a ? 401 == a ? "permission_denied" : "rest_error:" + a : "ok", null)
    })
  };
  h.tf = function (a, b) {
    var c = Jc(a, b);
    delete this.$[c]
  };
  h.hf = function () {};
  h.oe = function () {};
  h.bf = function () {};
  h.vd = function () {};
  h.put = function () {};
  h.Ye = function () {};
  h.ve = function () {};

  function Mc(a, b, c, d) {
    c = c || {};
    c.format = "export";
    a.Xc.getToken(!1).then(function (e) {
      (e = e && e.accessToken) && (c.auth = e);
      var f = (a.L.Pc ? "https://" : "http://") + a.L.host + b + "?" + kb(c);
      a.f("Sending REST request for " + f);
      var g = new XMLHttpRequest;
      g.onreadystatechange = function () {
        if (d && 4 === g.readyState) {
          a.f("REST Response for " + f + " received. status:", g.status, "response:", g.responseText);
          var b = null;
          if (200 <= g.status && 300 > g.status) {
            try {
              b = bb(g.responseText)
            } catch (c) {
              N("Failed to parse JSON response for " + f + ": " + g.responseText)
            }
            d(null,
              b)
          } else 401 !== g.status && 404 !== g.status && N("Got unsuccessful REST response for " + f + " Status: " + g.status), d(g.status);
          d = null
        }
      };
      g.open("GET", f, !0);
      g.send()
    })
  };

  function Nc() {}
  var Oc = {};

  function Pc(a) {
    return q(a.compare, a)
  }
  Nc.prototype.kd = function (a, b) {
    return 0 !== this.compare(new G("[MIN_NAME]", a), new G("[MIN_NAME]", b))
  };
  Nc.prototype.Ec = function () {
    return Qc
  };

  function Rc(a) {
    I(!a.e() && ".priority" !== O(a), "Can't create PathIndex with empty path or .priority key");
    this.$b = a
  }
  la(Rc, Nc);
  h = Rc.prototype;
  h.uc = function (a) {
    return !a.P(this.$b).e()
  };
  h.compare = function (a, b) {
    var c = a.R.P(this.$b),
      d = b.R.P(this.$b),
      c = c.pc(d);
    return 0 === c ? ub(a.name, b.name) : c
  };
  h.Bc = function (a, b) {
    var c = K(a),
      c = H.F(this.$b, c);
    return new G(b, c)
  };
  h.Cc = function () {
    var a = H.F(this.$b, Sc);
    return new G("[MAX_NAME]", a)
  };
  h.toString = function () {
    return this.$b.slice().join("/")
  };

  function Tc() {}
  la(Tc, Nc);
  h = Tc.prototype;
  h.compare = function (a, b) {
    var c = a.R.C(),
      d = b.R.C(),
      c = c.pc(d);
    return 0 === c ? ub(a.name, b.name) : c
  };
  h.uc = function (a) {
    return !a.C().e()
  };
  h.kd = function (a, b) {
    return !a.C().Z(b.C())
  };
  h.Ec = function () {
    return Qc
  };
  h.Cc = function () {
    return new G("[MAX_NAME]", new Rb("[PRIORITY-POST]", Sc))
  };
  h.Bc = function (a, b) {
    var c = K(a);
    return new G(b, new Rb("[PRIORITY-POST]", c))
  };
  h.toString = function () {
    return ".priority"
  };
  var L = new Tc;

  function Uc() {}
  la(Uc, Nc);
  h = Uc.prototype;
  h.compare = function (a, b) {
    return ub(a.name, b.name)
  };
  h.uc = function () {
    throw gc("KeyIndex.isDefinedOn not expected to be called.");
  };
  h.kd = function () {
    return !1
  };
  h.Ec = function () {
    return Qc
  };
  h.Cc = function () {
    return new G("[MAX_NAME]", H)
  };
  h.Bc = function (a) {
    I(p(a), "KeyIndex indexValue must always be a string.");
    return new G(a, H)
  };
  h.toString = function () {
    return ".key"
  };
  var Vc = new Uc;

  function Wc() {}
  la(Wc, Nc);
  h = Wc.prototype;
  h.compare = function (a, b) {
    var c = a.R.pc(b.R);
    return 0 === c ? ub(a.name, b.name) : c
  };
  h.uc = function () {
    return !0
  };
  h.kd = function (a, b) {
    return !a.Z(b)
  };
  h.Ec = function () {
    return Qc
  };
  h.Cc = function () {
    return Xc
  };
  h.Bc = function (a, b) {
    var c = K(a);
    return new G(b, c)
  };
  h.toString = function () {
    return ".value"
  };
  var Yc = new Wc;

  function Zc(a, b) {
    this.ld = a;
    this.ac = b
  }
  Zc.prototype.get = function (a) {
    var b = y(this.ld, a);
    if (!b) throw Error("No index defined for " + a);
    return b === Oc ? null : b
  };

  function $c(a, b, c) {
    var d = va(a.ld, function (d, f) {
      var g = y(a.ac, f);
      I(g, "Missing index implementation for " + f);
      if (d === Oc) {
        if (g.uc(b.R)) {
          for (var k = [], m = c.Ub(wb), l = M(m); l;) l.name != b.name && k.push(l), l = M(m);
          k.push(b);
          return bd(k, Pc(g))
        }
        return Oc
      }
      g = c.get(b.name);
      k = d;
      g && (k = k.remove(new G(b.name, g)));
      return k.Na(b, b.R)
    });
    return new Zc(d, a.ac)
  }

  function cd(a, b, c) {
    var d = va(a.ld, function (a) {
      if (a === Oc) return a;
      var d = c.get(b.name);
      return d ? a.remove(new G(b.name, d)) : a
    });
    return new Zc(d, a.ac)
  }
  var dd = new Zc({
    ".priority": Oc
  }, {
    ".priority": L
  });

  function Rb(a, b) {
    this.B = a;
    I(n(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value.");
    this.aa = b || H;
    ed(this.aa);
    this.Bb = null
  }
  var fd = ["object", "boolean", "number", "string"];
  h = Rb.prototype;
  h.J = function () {
    return !0
  };
  h.C = function () {
    return this.aa
  };
  h.fa = function (a) {
    return new Rb(this.B, a)
  };
  h.Q = function (a) {
    return ".priority" === a ? this.aa : H
  };
  h.P = function (a) {
    return a.e() ? this : ".priority" === O(a) ? this.aa : H
  };
  h.Da = function () {
    return !1
  };
  h.Se = function () {
    return null
  };
  h.T = function (a, b) {
    return ".priority" === a ? this.fa(b) : b.e() && ".priority" !== a ? this : H.T(a, b).fa(this.aa)
  };
  h.F = function (a, b) {
    var c = O(a);
    if (null === c) return b;
    if (b.e() && ".priority" !== c) return this;
    I(".priority" !== c || 1 === gd(a), ".priority must be the last token in a path");
    return this.T(c, H.F(E(a), b))
  };
  h.e = function () {
    return !1
  };
  h.Cb = function () {
    return 0
  };
  h.O = function () {
    return !1
  };
  h.H = function (a) {
    return a && !this.C().e() ? {
      ".value": this.Ca(),
      ".priority": this.C().H()
    } : this.Ca()
  };
  h.hash = function () {
    if (null === this.Bb) {
      var a = "";
      this.aa.e() || (a += "priority:" + hd(this.aa.H()) + ":");
      var b = typeof this.B,
        a = a + (b + ":"),
        a = "number" === b ? a + yc(this.B) : a + this.B;
      this.Bb = ic(a)
    }
    return this.Bb
  };
  h.Ca = function () {
    return this.B
  };
  h.pc = function (a) {
    if (a === H) return 1;
    if (a instanceof P) return -1;
    I(a.J(), "Unknown node type");
    var b = typeof a.B,
      c = typeof this.B,
      d = Ga(fd, b),
      e = Ga(fd, c);
    I(0 <= d, "Unknown leaf type: " + b);
    I(0 <= e, "Unknown leaf type: " + c);
    return d === e ? "object" === c ? 0 : this.B < a.B ? -1 : this.B === a.B ? 0 : 1 : e - d
  };
  h.lb = function () {
    return this
  };
  h.vc = function () {
    return !0
  };
  h.Z = function (a) {
    return a === this ? !0 : a.J() ? this.B === a.B && this.aa.Z(a.aa) : !1
  };
  h.toString = function () {
    return w(this.H(!0))
  };

  function P(a, b, c) {
    this.k = a;
    (this.aa = b) && ed(this.aa);
    a.e() && I(!this.aa || this.aa.e(), "An empty node cannot have a priority");
    this.wb = c;
    this.Bb = null
  }
  h = P.prototype;
  h.J = function () {
    return !1
  };
  h.C = function () {
    return this.aa || H
  };
  h.fa = function (a) {
    return this.k.e() ? this : new P(this.k, a, this.wb)
  };
  h.Q = function (a) {
    if (".priority" === a) return this.C();
    a = this.k.get(a);
    return null === a ? H : a
  };
  h.P = function (a) {
    var b = O(a);
    return null === b ? this : this.Q(b).P(E(a))
  };
  h.Da = function (a) {
    return null !== this.k.get(a)
  };
  h.T = function (a, b) {
    I(b, "We should always be passing snapshot nodes");
    if (".priority" === a) return this.fa(b);
    var c = new G(a, b),
      d, e;
    b.e() ? (d = this.k.remove(a), c = cd(this.wb, c, this.k)) : (d = this.k.Na(a, b), c = $c(this.wb, c, this.k));
    e = d.e() ? H : this.aa;
    return new P(d, e, c)
  };
  h.F = function (a, b) {
    var c = O(a);
    if (null === c) return b;
    I(".priority" !== O(a) || 1 === gd(a), ".priority must be the last token in a path");
    var d = this.Q(c).F(E(a), b);
    return this.T(c, d)
  };
  h.e = function () {
    return this.k.e()
  };
  h.Cb = function () {
    return this.k.count()
  };
  var id = /^(0|[1-9]\d*)$/;
  h = P.prototype;
  h.H = function (a) {
    if (this.e()) return null;
    var b = {},
      c = 0,
      d = 0,
      e = !0;
    this.O(L, function (f, g) {
      b[f] = g.H(a);
      c++;
      e && id.test(f) ? d = Math.max(d, Number(f)) : e = !1
    });
    if (!a && e && d < 2 * c) {
      var f = [],
        g;
      for (g in b) f[g] = b[g];
      return f
    }
    a && !this.C().e() && (b[".priority"] = this.C().H());
    return b
  };
  h.hash = function () {
    if (null === this.Bb) {
      var a = "";
      this.C().e() || (a += "priority:" + hd(this.C().H()) + ":");
      this.O(L, function (b, c) {
        var d = c.hash();
        "" !== d && (a += ":" + b + ":" + d)
      });
      this.Bb = "" === a ? "" : ic(a)
    }
    return this.Bb
  };
  h.Se = function (a, b, c) {
    return (c = jd(this, c)) ? (a = Ub(c, new G(a, b))) ? a.name : null : Ub(this.k, a)
  };

  function kd(a, b) {
    var c;
    c = (c = jd(a, b)) ? (c = c.Dc()) && c.name : a.k.Dc();
    return c ? new G(c, a.k.get(c)) : null
  }

  function ld(a, b) {
    var c;
    c = (c = jd(a, b)) ? (c = c.cc()) && c.name : a.k.cc();
    return c ? new G(c, a.k.get(c)) : null
  }
  h.O = function (a, b) {
    var c = jd(this, a);
    return c ? c.ha(function (a) {
      return b(a.name, a.R)
    }) : this.k.ha(b)
  };
  h.Ub = function (a) {
    return this.Vb(a.Ec(), a)
  };
  h.Vb = function (a, b) {
    var c = jd(this, b);
    if (c) return c.Vb(a, function (a) {
      return a
    });
    for (var c = this.k.Vb(a.name, wb), d = Wb(c); null != d && 0 > b.compare(d, a);) M(c), d = Wb(c);
    return c
  };
  h.Te = function (a) {
    return this.Xb(a.Cc(), a)
  };
  h.Xb = function (a, b) {
    var c = jd(this, b);
    if (c) return c.Xb(a, function (a) {
      return a
    });
    for (var c = this.k.Xb(a.name, wb), d = Wb(c); null != d && 0 < b.compare(d, a);) M(c), d = Wb(c);
    return c
  };
  h.pc = function (a) {
    return this.e() ? a.e() ? 0 : -1 : a.J() || a.e() ? 1 : a === Sc ? -1 : 0
  };
  h.lb = function (a) {
    if (a === Vc || Ba(this.wb.ac, a.toString())) return this;
    var b = this.wb,
      c = this.k;
    I(a !== Vc, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    for (var d = [], e = !1, c = c.Ub(wb), f = M(c); f;) e = e || a.uc(f.R), d.push(f), f = M(c);
    d = e ? bd(d, Pc(a)) : Oc;
    e = a.toString();
    c = Fa(b.ac);
    c[e] = a;
    a = Fa(b.ld);
    a[e] = d;
    return new P(this.k, this.aa, new Zc(a, c))
  };
  h.vc = function (a) {
    return a === Vc || Ba(this.wb.ac, a.toString())
  };
  h.Z = function (a) {
    if (a === this) return !0;
    if (a.J()) return !1;
    if (this.C().Z(a.C()) && this.k.count() === a.k.count()) {
      var b = this.Ub(L);
      a = a.Ub(L);
      for (var c = M(b), d = M(a); c && d;) {
        if (c.name !== d.name || !c.R.Z(d.R)) return !1;
        c = M(b);
        d = M(a)
      }
      return null === c && null === d
    }
    return !1
  };

  function jd(a, b) {
    return b === Vc ? null : a.wb.get(b.toString())
  }
  h.toString = function () {
    return w(this.H(!0))
  };

  function K(a, b) {
    if (null === a) return H;
    var c = null;
    "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
    I(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
    "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
    if ("object" !== typeof a || ".sv" in a) return new Rb(a, K(c));
    if (a instanceof Array) {
      var d = H,
        e = a;
      t(e, function (a, b) {
        if (cb(e, b) && "." !== b.substring(0, 1)) {
          var c = K(a);
          if (c.J() || !c.e()) d =
            d.T(b, c)
        }
      });
      return d.fa(K(c))
    }
    var f = [],
      g = !1,
      k = a;
    db(k, function (a) {
      if ("string" !== typeof a || "." !== a.substring(0, 1)) {
        var b = K(k[a]);
        b.e() || (g = g || !b.C().e(), f.push(new G(a, b)))
      }
    });
    if (0 == f.length) return H;
    var m = bd(f, tb, function (a) {
      return a.name
    }, vb);
    if (g) {
      var l = bd(f, Pc(L));
      return new P(m, K(c), new Zc({
        ".priority": l
      }, {
        ".priority": L
      }))
    }
    return new P(m, K(c), dd)
  }
  var md = Math.log(2);

  function nd(a) {
    this.count = parseInt(Math.log(a + 1) / md, 10);
    this.Ke = this.count - 1;
    this.Bf = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
  }

  function od(a) {
    var b = !(a.Bf & 1 << a.Ke);
    a.Ke--;
    return b
  }

  function bd(a, b, c, d) {
    function e(b, d) {
      var f = d - b;
      if (0 == f) return null;
      if (1 == f) {
        var l = a[b],
          r = c ? c(l) : l;
        return new Xb(r, l.R, !1, null, null)
      }
      var l = parseInt(f / 2, 10) + b,
        f = e(b, l),
        x = e(l + 1, d),
        l = a[l],
        r = c ? c(l) : l;
      return new Xb(r, l.R, !1, f, x)
    }
    a.sort(b);
    var f = function (b) {
      function d(b, g) {
        var k = r - b,
          x = r;
        r -= b;
        var x = e(k + 1, x),
          k = a[k],
          F = c ? c(k) : k,
          x = new Xb(F, k.R, g, null, x);
        f ? f.left = x : l = x;
        f = x
      }
      for (var f = null, l = null, r = a.length, x = 0; x < b.count; ++x) {
        var F = od(b),
          ad = Math.pow(2, b.count - (x + 1));
        F ? d(ad, !1) : (d(ad, !1), d(ad, !0))
      }
      return l
    }(new nd(a.length));
    return null !== f ? new Sb(d || b, f) : new Sb(d || b)
  }

  function hd(a) {
    return "number" === typeof a ? "number:" + yc(a) : "string:" + a
  }

  function ed(a) {
    if (a.J()) {
      var b = a.H();
      I("string" === typeof b || "number" === typeof b || "object" === typeof b && cb(b, ".sv"), "Priority must be a string or number.")
    } else I(a === Sc || a.e(), "priority of unexpected type.");
    I(a === Sc || a.C().e(), "Priority nodes can't have a priority of their own.")
  }
  var H = new P(new Sb(vb), null, dd);

  function pd() {
    P.call(this, new Sb(vb), H, dd)
  }
  la(pd, P);
  h = pd.prototype;
  h.pc = function (a) {
    return a === this ? 0 : 1
  };
  h.Z = function (a) {
    return a === this
  };
  h.C = function () {
    return this
  };
  h.Q = function () {
    return H
  };
  h.e = function () {
    return !1
  };
  var Sc = new pd,
    Qc = new G("[MIN_NAME]", H),
    Xc = new G("[MAX_NAME]", Sc);

  function qd(a, b) {
    this.qf = {};
    this.Sc = new Ab(a);
    this.va = b;
    var c = 1E4 + 2E4 * Math.random();
    Cc(q(this.jf, this), Math.floor(c))
  }
  qd.prototype.jf = function () {
    var a = this.Sc.get(),
      b = {},
      c = !1,
      d;
    for (d in a) 0 < a[d] && cb(this.qf, d) && (b[d] = a[d], c = !0);
    c && this.va.ve(b);
    Cc(q(this.jf, this), Math.floor(6E5 * Math.random()))
  };
  var rd = {},
    sd = {};

  function td(a) {
    a = a.toString();
    rd[a] || (rd[a] = new yb);
    return rd[a]
  }

  function ud(a, b) {
    var c = a.toString();
    sd[c] || (sd[c] = b());
    return sd[c]
  };

  function vd() {
    this.set = {}
  }
  h = vd.prototype;
  h.add = function (a, b) {
    this.set[a] = null !== b ? b : !0
  };
  h.contains = function (a) {
    return cb(this.set, a)
  };
  h.get = function (a) {
    return this.contains(a) ? this.set[a] : void 0
  };
  h.remove = function (a) {
    delete this.set[a]
  };
  h.clear = function () {
    this.set = {}
  };
  h.e = function () {
    return Ea(this.set)
  };
  h.count = function () {
    return xa(this.set)
  };

  function wd(a, b) {
    t(a.set, function (a, d) {
      b(d, a)
    })
  }
  h.keys = function () {
    var a = [];
    t(this.set, function (b, c) {
      a.push(c)
    });
    return a
  };

  function xd(a) {
    I(ea(a) && 0 < a.length, "Requires a non-empty array");
    this.Af = a;
    this.Ac = {}
  }
  xd.prototype.De = function (a, b) {
    var c;
    c = this.Ac[a] || [];
    var d = c.length;
    if (0 < d) {
      for (var e = Array(d), f = 0; f < d; f++) e[f] = c[f];
      c = e
    } else c = [];
    for (d = 0; d < c.length; d++) c[d].Fe.apply(c[d].La, Array.prototype.slice.call(arguments, 1))
  };
  xd.prototype.dc = function (a, b, c) {
    yd(this, a);
    this.Ac[a] = this.Ac[a] || [];
    this.Ac[a].push({
      Fe: b,
      La: c
    });
    (a = this.Re(a)) && b.apply(c, a)
  };
  xd.prototype.Fc = function (a, b, c) {
    yd(this, a);
    a = this.Ac[a] || [];
    for (var d = 0; d < a.length; d++)
      if (a[d].Fe === b && (!c || c === a[d].La)) {
        a.splice(d, 1);
        break
      }
  };

  function yd(a, b) {
    I(Ma(a.Af, function (a) {
      return a === b
    }), "Unknown event: " + b)
  };
  var zd = function () {
    var a = 0,
      b = [];
    return function (c) {
      var d = c === a;
      a = c;
      for (var e = Array(8), f = 7; 0 <= f; f--) e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
      I(0 === c, "Cannot push at time == 0");
      c = e.join("");
      if (d) {
        for (f = 11; 0 <= f && 63 === b[f]; f--) b[f] = 0;
        b[f]++
      } else
        for (f = 0; 12 > f; f++) b[f] = Math.floor(64 * Math.random());
      for (f = 0; 12 > f; f++) c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
      I(20 === c.length, "nextPushId: Length should be 20.");
      return c
    }
  }();

  function J(a, b) {
    if (1 == arguments.length) {
      this.o = a.split("/");
      for (var c = 0, d = 0; d < this.o.length; d++) 0 < this.o[d].length && (this.o[c] = this.o[d], c++);
      this.o.length = c;
      this.Y = 0
    } else this.o = a, this.Y = b
  }

  function Q(a, b) {
    var c = O(a);
    if (null === c) return b;
    if (c === O(b)) return Q(E(a), E(b));
    throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
  }

  function Ad(a, b) {
    for (var c = a.slice(), d = b.slice(), e = 0; e < c.length && e < d.length; e++) {
      var f = ub(c[e], d[e]);
      if (0 !== f) return f
    }
    return c.length === d.length ? 0 : c.length < d.length ? -1 : 1
  }

  function O(a) {
    return a.Y >= a.o.length ? null : a.o[a.Y]
  }

  function gd(a) {
    return a.o.length - a.Y
  }

  function E(a) {
    var b = a.Y;
    b < a.o.length && b++;
    return new J(a.o, b)
  }

  function Bd(a) {
    return a.Y < a.o.length ? a.o[a.o.length - 1] : null
  }
  h = J.prototype;
  h.toString = function () {
    for (var a = "", b = this.Y; b < this.o.length; b++) "" !== this.o[b] && (a += "/" + this.o[b]);
    return a || "/"
  };
  h.slice = function (a) {
    return this.o.slice(this.Y + (a || 0))
  };
  h.parent = function () {
    if (this.Y >= this.o.length) return null;
    for (var a = [], b = this.Y; b < this.o.length - 1; b++) a.push(this.o[b]);
    return new J(a, 0)
  };
  h.n = function (a) {
    for (var b = [], c = this.Y; c < this.o.length; c++) b.push(this.o[c]);
    if (a instanceof J)
      for (c = a.Y; c < a.o.length; c++) b.push(a.o[c]);
    else
      for (a = a.split("/"), c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c]);
    return new J(b, 0)
  };
  h.e = function () {
    return this.Y >= this.o.length
  };
  h.Z = function (a) {
    if (gd(this) !== gd(a)) return !1;
    for (var b = this.Y, c = a.Y; b <= this.o.length; b++, c++)
      if (this.o[b] !== a.o[c]) return !1;
    return !0
  };
  h.contains = function (a) {
    var b = this.Y,
      c = a.Y;
    if (gd(this) > gd(a)) return !1;
    for (; b < this.o.length;) {
      if (this.o[b] !== a.o[c]) return !1;
      ++b;
      ++c
    }
    return !0
  };
  var D = new J("");

  function Cd(a, b) {
    this.Pa = a.slice();
    this.Ga = Math.max(1, this.Pa.length);
    this.Me = b;
    for (var c = 0; c < this.Pa.length; c++) this.Ga += jb(this.Pa[c]);
    Dd(this)
  }
  Cd.prototype.push = function (a) {
    0 < this.Pa.length && (this.Ga += 1);
    this.Pa.push(a);
    this.Ga += jb(a);
    Dd(this)
  };
  Cd.prototype.pop = function () {
    var a = this.Pa.pop();
    this.Ga -= jb(a);
    0 < this.Pa.length && --this.Ga
  };

  function Dd(a) {
    if (768 < a.Ga) throw Error(a.Me + "has a key path longer than 768 bytes (" + a.Ga + ").");
    if (32 < a.Pa.length) throw Error(a.Me + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + Ed(a));
  }

  function Ed(a) {
    return 0 == a.Pa.length ? "" : "in property '" + a.Pa.join(".") + "'"
  };

  function Fd(a) {
    a instanceof Gd || pc("Don't call new Database() directly - please use firebase.database().");
    this.ta = a;
    this.ba = new R(a, D);
    this.INTERNAL = new Hd(this)
  }
  var Id = {
    TIMESTAMP: {
      ".sv": "timestamp"
    }
  };
  h = Fd.prototype;
  h.app = null;
  h.gf = function (a) {
    Jd(this, "ref");
    z("database.ref", 0, 1, arguments.length);
    return n(a) ? this.ba.n(a) : this.ba
  };
  h.ig = function (a) {
    Jd(this, "database.refFromURL");
    z("database.refFromURL", 1, 1, arguments.length);
    var b = qc(a);
    Kd("database.refFromURL", b);
    var c = b.gc;
    c.host !== this.ta.L.host && pc("database.refFromURL: Host name does not match the current database: (found " + c.host + " but expected " + this.ta.L.host + ")");
    return this.gf(b.path.toString())
  };

  function Jd(a, b) {
    null === a.ta && pc("Cannot call " + b + " on a deleted database.")
  }
  h.Rf = function () {
    z("database.goOffline", 0, 0, arguments.length);
    Jd(this, "goOffline");
    this.ta.$a()
  };
  h.Sf = function () {
    z("database.goOnline", 0, 0, arguments.length);
    Jd(this, "goOnline");
    this.ta.hc()
  };
  Object.defineProperty(Fd.prototype, "app", {
    get: function () {
      return this.ta.app
    }
  });

  function Hd(a) {
    this.Xa = a
  }
  Hd.prototype.delete = function () {
    Jd(this.Xa, "delete");
    var a = Ld.Tb(),
      b = this.Xa.ta;
    y(a.jb, b.app.name) !== b && pc("Database " + b.app.name + " has already been deleted.");
    b.$a();
    delete a.jb[b.app.name];
    this.Xa.ta = null;
    this.Xa.ba = null;
    this.Xa = this.Xa.INTERNAL = null;
    return firebase.Promise.resolve()
  };
  Fd.prototype.ref = Fd.prototype.gf;
  Fd.prototype.refFromURL = Fd.prototype.ig;
  Fd.prototype.goOnline = Fd.prototype.Sf;
  Fd.prototype.goOffline = Fd.prototype.Rf;
  Hd.prototype["delete"] = Hd.prototype.delete;

  function Nb() {
    this.k = this.B = null
  }
  Nb.prototype.find = function (a) {
    if (null != this.B) return this.B.P(a);
    if (a.e() || null == this.k) return null;
    var b = O(a);
    a = E(a);
    return this.k.contains(b) ? this.k.get(b).find(a) : null
  };

  function Pb(a, b, c) {
    if (b.e()) a.B = c, a.k = null;
    else if (null !== a.B) a.B = a.B.F(b, c);
    else {
      null == a.k && (a.k = new vd);
      var d = O(b);
      a.k.contains(d) || a.k.add(d, new Nb);
      a = a.k.get(d);
      b = E(b);
      Pb(a, b, c)
    }
  }

  function Md(a, b) {
    if (b.e()) return a.B = null, a.k = null, !0;
    if (null !== a.B) {
      if (a.B.J()) return !1;
      var c = a.B;
      a.B = null;
      c.O(L, function (b, c) {
        Pb(a, new J(b), c)
      });
      return Md(a, b)
    }
    return null !== a.k ? (c = O(b), b = E(b), a.k.contains(c) && Md(a.k.get(c), b) && a.k.remove(c), a.k.e() ? (a.k = null, !0) : !1) : !0
  }

  function Ob(a, b, c) {
    null !== a.B ? c(b, a.B) : a.O(function (a, e) {
      var f = new J(b.toString() + "/" + a);
      Ob(e, f, c)
    })
  }
  Nb.prototype.O = function (a) {
    null !== this.k && wd(this.k, function (b, c) {
      a(b, c)
    })
  };

  function Nd(a, b) {
    this.value = a;
    this.children = b || Od
  }
  var Od = new Sb(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1
  });

  function Pd(a) {
    var b = S;
    t(a, function (a, d) {
      b = b.set(new J(d), a)
    });
    return b
  }
  h = Nd.prototype;
  h.e = function () {
    return null === this.value && this.children.e()
  };

  function Qd(a, b, c) {
    if (null != a.value && c(a.value)) return {
      path: D,
      value: a.value
    };
    if (b.e()) return null;
    var d = O(b);
    a = a.children.get(d);
    return null !== a ? (b = Qd(a, E(b), c), null != b ? {
      path: (new J(d)).n(b.path),
      value: b.value
    } : null) : null
  }

  function Rd(a, b) {
    return Qd(a, b, function () {
      return !0
    })
  }
  h.subtree = function (a) {
    if (a.e()) return this;
    var b = this.children.get(O(a));
    return null !== b ? b.subtree(E(a)) : S
  };
  h.set = function (a, b) {
    if (a.e()) return new Nd(b, this.children);
    var c = O(a),
      d = (this.children.get(c) || S).set(E(a), b),
      c = this.children.Na(c, d);
    return new Nd(this.value, c)
  };
  h.remove = function (a) {
    if (a.e()) return this.children.e() ? S : new Nd(null, this.children);
    var b = O(a),
      c = this.children.get(b);
    return c ? (a = c.remove(E(a)), b = a.e() ? this.children.remove(b) : this.children.Na(b, a), null === this.value && b.e() ? S : new Nd(this.value, b)) : this
  };
  h.get = function (a) {
    if (a.e()) return this.value;
    var b = this.children.get(O(a));
    return b ? b.get(E(a)) : null
  };

  function Sd(a, b, c) {
    if (b.e()) return c;
    var d = O(b);
    b = Sd(a.children.get(d) || S, E(b), c);
    d = b.e() ? a.children.remove(d) : a.children.Na(d, b);
    return new Nd(a.value, d)
  }

  function Td(a, b) {
    return Ud(a, D, b)
  }

  function Ud(a, b, c) {
    var d = {};
    a.children.ha(function (a, f) {
      d[a] = Ud(f, b.n(a), c)
    });
    return c(b, a.value, d)
  }

  function Vd(a, b, c) {
    return Wd(a, b, D, c)
  }

  function Wd(a, b, c, d) {
    var e = a.value ? d(c, a.value) : !1;
    if (e) return e;
    if (b.e()) return null;
    e = O(b);
    return (a = a.children.get(e)) ? Wd(a, E(b), c.n(e), d) : null
  }

  function Xd(a, b, c) {
    Yd(a, b, D, c)
  }

  function Yd(a, b, c, d) {
    if (b.e()) return a;
    a.value && d(c, a.value);
    var e = O(b);
    return (a = a.children.get(e)) ? Yd(a, E(b), c.n(e), d) : S
  }

  function Zd(a, b) {
    $d(a, D, b)
  }

  function $d(a, b, c) {
    a.children.ha(function (a, e) {
      $d(e, b.n(a), c)
    });
    a.value && c(b, a.value)
  }

  function ae(a, b) {
    a.children.ha(function (a, d) {
      d.value && b(a, d.value)
    })
  }
  var S = new Nd(null);
  Nd.prototype.toString = function () {
    var a = {};
    Zd(this, function (b, c) {
      a[b.toString()] = c.toString()
    });
    return w(a)
  };

  function be(a) {
    this.W = a
  }
  var ce = new be(new Nd(null));

  function de(a, b, c) {
    if (b.e()) return new be(new Nd(c));
    var d = Rd(a.W, b);
    if (null != d) {
      var e = d.path,
        d = d.value;
      b = Q(e, b);
      d = d.F(b, c);
      return new be(a.W.set(e, d))
    }
    a = Sd(a.W, b, new Nd(c));
    return new be(a)
  }

  function ee(a, b, c) {
    var d = a;
    db(c, function (a, c) {
      d = de(d, b.n(a), c)
    });
    return d
  }
  be.prototype.Cd = function (a) {
    if (a.e()) return ce;
    a = Sd(this.W, a, S);
    return new be(a)
  };

  function fe(a, b) {
    var c = Rd(a.W, b);
    return null != c ? a.W.get(c.path).P(Q(c.path, b)) : null
  }

  function ge(a) {
    var b = [],
      c = a.W.value;
    null != c ? c.J() || c.O(L, function (a, c) {
      b.push(new G(a, c))
    }) : a.W.children.ha(function (a, c) {
      null != c.value && b.push(new G(a, c.value))
    });
    return b
  }

  function he(a, b) {
    if (b.e()) return a;
    var c = fe(a, b);
    return null != c ? new be(new Nd(c)) : new be(a.W.subtree(b))
  }
  be.prototype.e = function () {
    return this.W.e()
  };
  be.prototype.apply = function (a) {
    return ie(D, this.W, a)
  };

  function ie(a, b, c) {
    if (null != b.value) return c.F(a, b.value);
    var d = null;
    b.children.ha(function (b, f) {
      ".priority" === b ? (I(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = ie(a.n(b), f, c)
    });
    c.P(a).e() || null === d || (c = c.F(a.n(".priority"), d));
    return c
  };

  function je(a, b, c) {
    this.type = ke;
    this.source = le;
    this.path = a;
    this.Mb = b;
    this.Gd = c
  }
  je.prototype.Jc = function (a) {
    if (this.path.e()) {
      if (null != this.Mb.value) return I(this.Mb.children.e(), "affectedTree should not have overlapping affected paths."), this;
      a = this.Mb.subtree(new J(a));
      return new je(D, a, this.Gd)
    }
    I(O(this.path) === a, "operationForChild called for unrelated child.");
    return new je(E(this.path), this.Mb, this.Gd)
  };
  je.prototype.toString = function () {
    return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Gd + " affectedTree=" + this.Mb + ")"
  };
  var sb = 0,
    Hc = 1,
    ke = 2,
    qb = 3;

  function me(a, b, c, d) {
    this.ae = a;
    this.Pe = b;
    this.Fb = c;
    this.Be = d;
    I(!d || b, "Tagged queries must be from server.")
  }
  var le = new me(!0, !1, null, !1),
    ne = new me(!1, !0, null, !1);
  me.prototype.toString = function () {
    return this.ae ? "user" : this.Be ? "server(queryID=" + this.Fb + ")" : "server"
  };

  function oe() {
    this.children = {};
    this.Zc = 0;
    this.value = null
  }

  function pe(a, b, c) {
    this.sd = a ? a : "";
    this.Mc = b ? b : null;
    this.A = c ? c : new oe
  }

  function qe(a, b) {
    for (var c = b instanceof J ? b : new J(b), d = a, e; null !== (e = O(c));) d = new pe(e, d, y(d.A.children, e) || new oe), c = E(c);
    return d
  }
  h = pe.prototype;
  h.Ca = function () {
    return this.A.value
  };

  function re(a, b) {
    I("undefined" !== typeof b, "Cannot set value to undefined");
    a.A.value = b;
    se(a)
  }
  h.clear = function () {
    this.A.value = null;
    this.A.children = {};
    this.A.Zc = 0;
    se(this)
  };
  h.gd = function () {
    return 0 < this.A.Zc
  };
  h.e = function () {
    return null === this.Ca() && !this.gd()
  };
  h.O = function (a) {
    var b = this;
    t(this.A.children, function (c, d) {
      a(new pe(d, b, c))
    })
  };

  function te(a, b, c, d) {
    c && !d && b(a);
    a.O(function (a) {
      te(a, b, !0, d)
    });
    c && d && b(a)
  }

  function ue(a, b) {
    for (var c = a.parent(); null !== c && !b(c);) c = c.parent()
  }
  h.path = function () {
    return new J(null === this.Mc ? this.sd : this.Mc.path() + "/" + this.sd)
  };
  h.name = function () {
    return this.sd
  };
  h.parent = function () {
    return this.Mc
  };

  function se(a) {
    if (null !== a.Mc) {
      var b = a.Mc,
        c = a.sd,
        d = a.e(),
        e = cb(b.A.children, c);
      d && e ? (delete b.A.children[c], b.A.Zc--, se(b)) : d || e || (b.A.children[c] = a.A, b.A.Zc++, se(b))
    }
  };
  var ve = /[\[\].#$\/\u0000-\u001F\u007F]/,
    we = /[\[\].#$\u0000-\u001F\u007F]/;

  function xe(a) {
    return p(a) && 0 !== a.length && !ve.test(a)
  }

  function ye(a) {
    return null === a || p(a) || ga(a) && !rc(a) || ia(a) && cb(a, ".sv")
  }

  function ze(a, b, c, d) {
    d && !n(b) || Ae(A(a, 1, d), b, c)
  }

  function Ae(a, b, c) {
    c instanceof J && (c = new Cd(c, a));
    if (!n(b)) throw Error(a + "contains undefined " + Ed(c));
    if (ha(b)) throw Error(a + "contains a function " + Ed(c) + " with contents: " + b.toString());
    if (rc(b)) throw Error(a + "contains " + b.toString() + " " + Ed(c));
    if (p(b) && b.length > 10485760 / 3 && 10485760 < jb(b)) throw Error(a + "contains a string greater than 10485760 utf8 bytes " + Ed(c) + " ('" + b.substring(0, 50) + "...')");
    if (ia(b)) {
      var d = !1,
        e = !1;
      db(b, function (b, g) {
        if (".value" === b) d = !0;
        else if (".priority" !== b && ".sv" !== b && (e = !0, !xe(b))) throw Error(a + " contains an invalid key (" + b + ") " + Ed(c) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        c.push(b);
        Ae(a, g, c);
        c.pop()
      });
      if (d && e) throw Error(a + ' contains ".value" child ' + Ed(c) + " in addition to actual children.");
    }
  }

  function Be(a, b) {
    var c, d;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      for (var e = d.slice(), f = 0; f < e.length; f++)
        if ((".priority" !== e[f] || f !== e.length - 1) && !xe(e[f])) throw Error(a + "contains an invalid key (" + e[f] + ") in path " + d.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
    }
    b.sort(Ad);
    e = null;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      if (null !== e && e.contains(d)) throw Error(a + "contains a path " + e.toString() + " that is ancestor of another path " + d.toString());
      e = d
    }
  }

  function Ce(a, b, c) {
    var d = A(a, 1, !1);
    if (!ia(b) || ea(b)) throw Error(d + " must be an object containing the children to replace.");
    var e = [];
    db(b, function (a, b) {
      var k = new J(a);
      Ae(d, b, c.n(k));
      if (".priority" === Bd(k) && !ye(b)) throw Error(d + "contains an invalid value for '" + k.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
      e.push(k)
    });
    Be(d, e)
  }

  function De(a, b, c) {
    if (rc(c)) throw Error(A(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
    if (!ye(c)) throw Error(A(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
  }

  function Ee(a, b, c) {
    if (!c || n(b)) switch (b) {
      case "value":
      case "child_added":
      case "child_removed":
      case "child_changed":
      case "child_moved":
        break;
      default:
        throw Error(A(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
    }
  }

  function Fe(a, b) {
    if (n(b) && !xe(b)) throw Error(A(a, 2, !0) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
  }

  function Ge(a, b) {
    if (!p(b) || 0 === b.length || we.test(b)) throw Error(A(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
  }

  function He(a, b) {
    if (".info" === O(b)) throw Error(a + " failed: Can't modify data under /.info/");
  }

  function Kd(a, b) {
    var c = b.path.toString(),
      d;
    !(d = !p(b.gc.host) || 0 === b.gc.host.length || !xe(b.gc.me)) && (d = 0 !== c.length) && (c && (c = c.replace(/^\/*\.info(\/|$)/, "/")), d = !(p(c) && 0 !== c.length && !we.test(c)));
    if (d) throw Error(A(a, 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
  };

  function T(a, b, c) {
    this.A = a;
    this.V = b;
    this.g = c
  }
  T.prototype.H = function () {
    z("Firebase.DataSnapshot.val", 0, 0, arguments.length);
    return this.A.H()
  };
  T.prototype.val = T.prototype.H;
  T.prototype.Ne = function () {
    z("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
    return this.A.H(!0)
  };
  T.prototype.exportVal = T.prototype.Ne;
  T.prototype.Nf = function () {
    z("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
    return !this.A.e()
  };
  T.prototype.exists = T.prototype.Nf;
  T.prototype.n = function (a) {
    z("Firebase.DataSnapshot.child", 0, 1, arguments.length);
    ga(a) && (a = String(a));
    Ge("Firebase.DataSnapshot.child", a);
    var b = new J(a),
      c = this.V.n(b);
    return new T(this.A.P(b), c, L)
  };
  T.prototype.child = T.prototype.n;
  T.prototype.Da = function (a) {
    z("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
    Ge("Firebase.DataSnapshot.hasChild", a);
    var b = new J(a);
    return !this.A.P(b).e()
  };
  T.prototype.hasChild = T.prototype.Da;
  T.prototype.C = function () {
    z("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
    return this.A.C().H()
  };
  T.prototype.getPriority = T.prototype.C;
  T.prototype.forEach = function (a) {
    z("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
    B("Firebase.DataSnapshot.forEach", 1, a, !1);
    if (this.A.J()) return !1;
    var b = this;
    return !!this.A.O(this.g, function (c, d) {
      return a(new T(d, b.V.n(c), L))
    })
  };
  T.prototype.forEach = T.prototype.forEach;
  T.prototype.gd = function () {
    z("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
    return this.A.J() ? !1 : !this.A.e()
  };
  T.prototype.hasChildren = T.prototype.gd;
  T.prototype.getKey = function () {
    z("Firebase.DataSnapshot.key", 0, 0, arguments.length);
    return this.V.getKey()
  };
  Bc(T.prototype, "key", T.prototype.getKey);
  T.prototype.Cb = function () {
    z("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
    return this.A.Cb()
  };
  T.prototype.numChildren = T.prototype.Cb;
  T.prototype.ub = function () {
    z("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
    return this.V
  };
  Bc(T.prototype, "ref", T.prototype.ub);

  function U(a, b) {
    this.ta = a;
    this.qa = b
  }
  U.prototype.cancel = function (a) {
    z("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
    B("Firebase.onDisconnect().cancel", 1, a, !0);
    var b = new fb;
    this.ta.vd(this.qa, gb(b, a));
    return b.ra
  };
  U.prototype.cancel = U.prototype.cancel;
  U.prototype.remove = function (a) {
    z("Firebase.onDisconnect().remove", 0, 1, arguments.length);
    He("Firebase.onDisconnect().remove", this.qa);
    B("Firebase.onDisconnect().remove", 1, a, !0);
    var b = new fb;
    Ie(this.ta, this.qa, null, gb(b, a));
    return b.ra
  };
  U.prototype.remove = U.prototype.remove;
  U.prototype.set = function (a, b) {
    z("Firebase.onDisconnect().set", 1, 2, arguments.length);
    He("Firebase.onDisconnect().set", this.qa);
    ze("Firebase.onDisconnect().set", a, this.qa, !1);
    B("Firebase.onDisconnect().set", 2, b, !0);
    var c = new fb;
    Ie(this.ta, this.qa, a, gb(c, b));
    return c.ra
  };
  U.prototype.set = U.prototype.set;
  U.prototype.Hb = function (a, b, c) {
    z("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
    He("Firebase.onDisconnect().setWithPriority", this.qa);
    ze("Firebase.onDisconnect().setWithPriority", a, this.qa, !1);
    De("Firebase.onDisconnect().setWithPriority", 2, b);
    B("Firebase.onDisconnect().setWithPriority", 3, c, !0);
    var d = new fb;
    Je(this.ta, this.qa, a, b, gb(d, c));
    return d.ra
  };
  U.prototype.setWithPriority = U.prototype.Hb;
  U.prototype.update = function (a, b) {
    z("Firebase.onDisconnect().update", 1, 2, arguments.length);
    He("Firebase.onDisconnect().update", this.qa);
    if (ea(a)) {
      for (var c = {}, d = 0; d < a.length; ++d) c["" + d] = a[d];
      a = c;
      N("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
    }
    Ce("Firebase.onDisconnect().update", a, this.qa);
    B("Firebase.onDisconnect().update", 2, b, !0);
    c = new fb;
    Ke(this.ta, this.qa, a, gb(c, b));
    return c.ra
  };
  U.prototype.update = U.prototype.update;

  function Le() {
    xd.call(this, ["visible"]);
    var a, b;
    "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
    this.Kb = !0;
    if (b) {
      var c = this;
      document.addEventListener(b,
        function () {
          var b = !document[a];
          b !== c.Kb && (c.Kb = b, c.De("visible", b))
        }, !1)
    }
  }
  la(Le, xd);
  Le.prototype.Re = function (a) {
    I("visible" === a, "Unknown event type: " + a);
    return [this.Kb]
  };
  ca(Le);

  function Me(a, b, c) {
    this.A = a;
    this.da = b;
    this.Qb = c
  }

  function Ne(a) {
    return a.da
  }

  function Oe(a) {
    return a.Qb
  }

  function Pe(a, b) {
    return b.e() ? a.da && !a.Qb : Qe(a, O(b))
  }

  function Qe(a, b) {
    return a.da && !a.Qb || a.A.Da(b)
  }
  Me.prototype.j = function () {
    return this.A
  };

  function V(a, b, c, d) {
    this.type = a;
    this.Ia = b;
    this.Wa = c;
    this.ne = d;
    this.Bd = void 0
  }

  function Re(a) {
    return new V(Se, a)
  }
  var Se = "value";

  function Te() {
    this.eb = {}
  }

  function Ue(a, b) {
    var c = b.type,
      d = b.Wa;
    I("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
    I(".priority" !== d, "Only non-priority child changes can be tracked.");
    var e = y(a.eb, d);
    if (e) {
      var f = e.type;
      if ("child_added" == c && "child_removed" == f) a.eb[d] = new V("child_changed", b.Ia, d, e.Ia);
      else if ("child_removed" == c && "child_added" == f) delete a.eb[d];
      else if ("child_removed" == c && "child_changed" == f) a.eb[d] = new V("child_removed", e.ne, d);
      else if ("child_changed" == c &&
        "child_added" == f) a.eb[d] = new V("child_added", b.Ia, d);
      else if ("child_changed" == c && "child_changed" == f) a.eb[d] = new V("child_changed", b.Ia, d, e.ne);
      else throw gc("Illegal combination of changes: " + b + " occurred after " + e);
    } else a.eb[d] = b
  };

  function Ve() {}
  Ve.prototype.Qe = function () {
    return null
  };
  Ve.prototype.be = function () {
    return null
  };
  var We = new Ve;

  function Xe(a, b, c) {
    this.wf = a;
    this.Ja = b;
    this.wd = c
  }
  Xe.prototype.Qe = function (a) {
    var b = this.Ja.N;
    if (Qe(b, a)) return b.j().Q(a);
    b = null != this.wd ? new Me(this.wd, !0, !1) : this.Ja.w();
    return this.wf.nc(a, b)
  };
  Xe.prototype.be = function (a, b, c) {
    var d = null != this.wd ? this.wd : Ye(this.Ja);
    a = this.wf.Td(d, b, 1, c, a);
    return 0 === a.length ? null : a[0]
  };

  function Ze(a, b, c, d) {
    this.Yd = b;
    this.Jd = c;
    this.Bd = d;
    this.ed = a
  }
  Ze.prototype.Wb = function () {
    var a = this.Jd.ub();
    return "value" === this.ed ? a.path : a.getParent().path
  };
  Ze.prototype.ce = function () {
    return this.ed
  };
  Ze.prototype.Rb = function () {
    return this.Yd.Rb(this)
  };
  Ze.prototype.toString = function () {
    return this.Wb().toString() + ":" + this.ed + ":" + w(this.Jd.Ne())
  };

  function $e(a, b, c) {
    this.Yd = a;
    this.error = b;
    this.path = c
  }
  $e.prototype.Wb = function () {
    return this.path
  };
  $e.prototype.ce = function () {
    return "cancel"
  };
  $e.prototype.Rb = function () {
    return this.Yd.Rb(this)
  };
  $e.prototype.toString = function () {
    return this.path.toString() + ":cancel"
  };

  function af(a) {
    this.V = a;
    this.g = a.m.g
  }

  function bf(a, b, c, d) {
    var e = [],
      f = [];
    Ha(b, function (b) {
      "child_changed" === b.type && a.g.kd(b.ne, b.Ia) && f.push(new V("child_moved", b.Ia, b.Wa))
    });
    cf(a, e, "child_removed", b, d, c);
    cf(a, e, "child_added", b, d, c);
    cf(a, e, "child_moved", f, d, c);
    cf(a, e, "child_changed", b, d, c);
    cf(a, e, Se, b, d, c);
    return e
  }

  function cf(a, b, c, d, e, f) {
    d = Ia(d, function (a) {
      return a.type === c
    });
    Pa(d, q(a.Ff, a));
    Ha(d, function (c) {
      var d = df(a, c, f);
      Ha(e, function (e) {
        e.lf(c.type) && b.push(e.createEvent(d, a.V))
      })
    })
  }

  function df(a, b, c) {
    "value" !== b.type && "child_removed" !== b.type && (b.Bd = c.Se(b.Wa, b.Ia, a.g));
    return b
  }
  af.prototype.Ff = function (a, b) {
    if (null == a.Wa || null == b.Wa) throw gc("Should only compare child_ events.");
    return this.g.compare(new G(a.Wa, a.Ia), new G(b.Wa, b.Ia))
  };

  function ef() {
    this.tb = []
  }

  function ff(a, b) {
    for (var c = null, d = 0; d < b.length; d++) {
      var e = b[d],
        f = e.Wb();
      null === c || f.Z(c.Wb()) || (a.tb.push(c), c = null);
      null === c && (c = new gf(f));
      c.add(e)
    }
    c && a.tb.push(c)
  }

  function hf(a, b, c) {
    ff(a, c);
    jf(a, function (a) {
      return a.Z(b)
    })
  }

  function kf(a, b, c) {
    ff(a, c);
    jf(a, function (a) {
      return a.contains(b) || b.contains(a)
    })
  }

  function jf(a, b) {
    for (var c = !0, d = 0; d < a.tb.length; d++) {
      var e = a.tb[d];
      if (e)
        if (e = e.Wb(), b(e)) {
          for (var e = a.tb[d], f = 0; f < e.fd.length; f++) {
            var g = e.fd[f];
            if (null !== g) {
              e.fd[f] = null;
              var k = g.Rb();
              kc && C("event: " + g.toString());
              Ac(k)
            }
          }
          a.tb[d] = null
        } else c = !1
    }
    c && (a.tb = [])
  }

  function gf(a) {
    this.qa = a;
    this.fd = []
  }
  gf.prototype.add = function (a) {
    this.fd.push(a)
  };
  gf.prototype.Wb = function () {
    return this.qa
  };

  function lf(a, b, c) {
    this.Nb = a;
    this.pb = b;
    this.rb = c || null
  }
  h = lf.prototype;
  h.lf = function (a) {
    return "value" === a
  };
  h.createEvent = function (a, b) {
    var c = b.m.g;
    return new Ze("value", this, new T(a.Ia, b.ub(), c))
  };
  h.Rb = function (a) {
    var b = this.rb;
    if ("cancel" === a.ce()) {
      I(this.pb, "Raising a cancel event on a listener with no cancel callback");
      var c = this.pb;
      return function () {
        c.call(b, a.error)
      }
    }
    var d = this.Nb;
    return function () {
      d.call(b, a.Jd)
    }
  };
  h.Ie = function (a, b) {
    return this.pb ? new $e(this, a, b) : null
  };
  h.matches = function (a) {
    return a instanceof lf ? a.Nb && this.Nb ? a.Nb === this.Nb && a.rb === this.rb : !0 : !1
  };
  h.Ue = function () {
    return null !== this.Nb
  };

  function mf(a, b, c) {
    this.ga = a;
    this.pb = b;
    this.rb = c
  }
  h = mf.prototype;
  h.lf = function (a) {
    a = "children_added" === a ? "child_added" : a;
    return ("children_removed" === a ? "child_removed" : a) in this.ga
  };
  h.Ie = function (a, b) {
    return this.pb ? new $e(this, a, b) : null
  };
  h.createEvent = function (a, b) {
    I(null != a.Wa, "Child events should have a childName.");
    var c = b.ub().n(a.Wa);
    return new Ze(a.type, this, new T(a.Ia, c, b.m.g), a.Bd)
  };
  h.Rb = function (a) {
    var b = this.rb;
    if ("cancel" === a.ce()) {
      I(this.pb, "Raising a cancel event on a listener with no cancel callback");
      var c = this.pb;
      return function () {
        c.call(b, a.error)
      }
    }
    var d = this.ga[a.ed];
    return function () {
      d.call(b, a.Jd, a.Bd)
    }
  };
  h.matches = function (a) {
    if (a instanceof mf) {
      if (!this.ga || !a.ga) return !0;
      if (this.rb === a.rb) {
        var b = xa(a.ga);
        if (b === xa(this.ga)) {
          if (1 === b) {
            var b = ya(a.ga),
              c = ya(this.ga);
            return c === b && (!a.ga[b] || !this.ga[c] || a.ga[b] === this.ga[c])
          }
          return wa(this.ga, function (b, c) {
            return a.ga[c] === b
          })
        }
      }
    }
    return !1
  };
  h.Ue = function () {
    return null !== this.ga
  };

  function W(a, b, c, d) {
    this.u = a;
    this.path = b;
    this.m = c;
    this.Kc = d
  }

  function nf(a) {
    var b = null,
      c = null;
    a.ka && (b = of (a));
    a.na && (c = pf(a));
    if (a.g === Vc) {
      if (a.ka) {
        if ("[MIN_NAME]" != qf(a)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        if ("string" !== typeof b) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
      }
      if (a.na) {
        if ("[MAX_NAME]" != rf(a)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        if ("string" !==
          typeof c) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
      }
    } else if (a.g === L) {
      if (null != b && !ye(b) || null != c && !ye(c)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
    } else if (I(a.g instanceof Rc || a.g === Yc, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
  }

  function sf(a) {
    if (a.ka && a.na && a.xa && (!a.xa || "" === a.kb)) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
  }

  function tf(a, b) {
    if (!0 === a.Kc) throw Error(b + ": You can't combine multiple orderBy calls.");
  }
  h = W.prototype;
  h.ub = function () {
    z("Query.ref", 0, 0, arguments.length);
    return new R(this.u, this.path)
  };
  h.dc = function (a, b, c, d) {
    z("Query.on", 2, 4, arguments.length);
    Ee("Query.on", a, !1);
    B("Query.on", 2, b, !1);
    var e = uf("Query.on", c, d);
    if ("value" === a) vf(this.u, this, new lf(b, e.cancel || null, e.La || null));
    else {
      var f = {};
      f[a] = b;
      vf(this.u, this, new mf(f, e.cancel, e.La))
    }
    return b
  };
  h.Fc = function (a, b, c) {
    z("Query.off", 0, 3, arguments.length);
    Ee("Query.off", a, !0);
    B("Query.off", 2, b, !0);
    lb("Query.off", 3, c);
    var d = null,
      e = null;
    "value" === a ? d = new lf(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new mf(e, null, c || null));
    e = this.u;
    d = ".info" === O(this.path) ? e.md.ib(this, d) : e.K.ib(this, d);
    hf(e.ca, this.path, d)
  };
  h.ag = function (a, b) {
    function c(k) {
      f && (f = !1, e.Fc(a, c), b && b.call(d.La, k), g.resolve(k))
    }
    z("Query.once", 1, 4, arguments.length);
    Ee("Query.once", a, !1);
    B("Query.once", 2, b, !0);
    var d = uf("Query.once", arguments[2], arguments[3]),
      e = this,
      f = !0,
      g = new fb;
    hb(g.ra);
    this.dc(a, c, function (b) {
      e.Fc(a, c);
      d.cancel && d.cancel.call(d.La, b);
      g.reject(b)
    });
    return g.ra
  };
  h.je = function (a) {
    z("Query.limitToFirst", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limitToFirst: First argument must be a positive integer.");
    if (this.m.xa) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    return new W(this.u, this.path, this.m.je(a), this.Kc)
  };
  h.ke = function (a) {
    z("Query.limitToLast", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limitToLast: First argument must be a positive integer.");
    if (this.m.xa) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    return new W(this.u, this.path, this.m.ke(a), this.Kc)
  };
  h.bg = function (a) {
    z("Query.orderByChild", 1, 1, arguments.length);
    if ("$key" === a) throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
    if ("$priority" === a) throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
    if ("$value" === a) throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
    Ge("Query.orderByChild", a);
    tf(this, "Query.orderByChild");
    var b = new J(a);
    if (b.e()) throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
    b = new Rc(b);
    b = wf(this.m, b);
    nf(b);
    return new W(this.u, this.path, b, !0)
  };
  h.cg = function () {
    z("Query.orderByKey", 0, 0, arguments.length);
    tf(this, "Query.orderByKey");
    var a = wf(this.m, Vc);
    nf(a);
    return new W(this.u, this.path, a, !0)
  };
  h.dg = function () {
    z("Query.orderByPriority", 0, 0, arguments.length);
    tf(this, "Query.orderByPriority");
    var a = wf(this.m, L);
    nf(a);
    return new W(this.u, this.path, a, !0)
  };
  h.eg = function () {
    z("Query.orderByValue", 0, 0, arguments.length);
    tf(this, "Query.orderByValue");
    var a = wf(this.m, Yc);
    nf(a);
    return new W(this.u, this.path, a, !0)
  };
  h.Kd = function (a, b) {
    z("Query.startAt", 0, 2, arguments.length);
    ze("Query.startAt", a, this.path, !0);
    Fe("Query.startAt", b);
    var c = this.m.Kd(a, b);
    sf(c);
    nf(c);
    if (this.m.ka) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
    n(a) || (b = a = null);
    return new W(this.u, this.path, c, this.Kc)
  };
  h.dd = function (a, b) {
    z("Query.endAt", 0, 2, arguments.length);
    ze("Query.endAt", a, this.path, !0);
    Fe("Query.endAt", b);
    var c = this.m.dd(a, b);
    sf(c);
    nf(c);
    if (this.m.na) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
    return new W(this.u, this.path, c, this.Kc)
  };
  h.Jf = function (a, b) {
    z("Query.equalTo", 1, 2, arguments.length);
    ze("Query.equalTo", a, this.path, !1);
    Fe("Query.equalTo", b);
    if (this.m.ka) throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
    if (this.m.na) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
    return this.Kd(a, b).dd(a, b)
  };
  h.toString = function () {
    z("Query.toString", 0, 0, arguments.length);
    for (var a = this.path, b = "", c = a.Y; c < a.o.length; c++) "" !== a.o[c] && (b += "/" + encodeURIComponent(String(a.o[c])));
    return this.u.toString() + (b || "/")
  };
  h.ja = function () {
    var a = vc(xf(this.m));
    return "{}" === a ? "default" : a
  };
  h.isEqual = function (a) {
    z("Query.isEqual", 1, 1, arguments.length);
    if (!(a instanceof W)) throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");
    var b = this.u === a.u,
      c = this.path.Z(a.path),
      d = this.ja() === a.ja();
    return b && c && d
  };

  function uf(a, b, c) {
    var d = {
      cancel: null,
      La: null
    };
    if (b && c) d.cancel = b, B(a, 3, d.cancel, !0), d.La = c, lb(a, 4, d.La);
    else if (b)
      if ("object" === typeof b && null !== b) d.La = b;
      else if ("function" === typeof b) d.cancel = b;
    else throw Error(A(a, 3, !0) + " must either be a cancel callback or a context object.");
    return d
  }
  W.prototype.on = W.prototype.dc;
  W.prototype.off = W.prototype.Fc;
  W.prototype.once = W.prototype.ag;
  W.prototype.limitToFirst = W.prototype.je;
  W.prototype.limitToLast = W.prototype.ke;
  W.prototype.orderByChild = W.prototype.bg;
  W.prototype.orderByKey = W.prototype.cg;
  W.prototype.orderByPriority = W.prototype.dg;
  W.prototype.orderByValue = W.prototype.eg;
  W.prototype.startAt = W.prototype.Kd;
  W.prototype.endAt = W.prototype.dd;
  W.prototype.equalTo = W.prototype.Jf;
  W.prototype.toString = W.prototype.toString;
  W.prototype.isEqual = W.prototype.isEqual;
  Bc(W.prototype, "ref", W.prototype.ub);

  function yf(a) {
    this.g = a
  }
  h = yf.prototype;
  h.F = function (a, b, c, d, e, f) {
    I(a.vc(this.g), "A node must be indexed if only a child is updated");
    e = a.Q(b);
    if (e.P(d).Z(c.P(d)) && e.e() == c.e()) return a;
    null != f && (c.e() ? a.Da(b) ? Ue(f, new V("child_removed", e, b)) : I(a.J(), "A child remove without an old child only makes sense on a leaf node") : e.e() ? Ue(f, new V("child_added", c, b)) : Ue(f, new V("child_changed", c, b, e)));
    return a.J() && c.e() ? a : a.T(b, c).lb(this.g)
  };
  h.ya = function (a, b, c) {
    null != c && (a.J() || a.O(L, function (a, e) {
      b.Da(a) || Ue(c, new V("child_removed", e, a))
    }), b.J() || b.O(L, function (b, e) {
      if (a.Da(b)) {
        var f = a.Q(b);
        f.Z(e) || Ue(c, new V("child_changed", e, b, f))
      } else Ue(c, new V("child_added", e, b))
    }));
    return b.lb(this.g)
  };
  h.fa = function (a, b) {
    return a.e() ? H : a.fa(b)
  };
  h.Ma = function () {
    return !1
  };
  h.Sb = function () {
    return this
  };

  function zf(a) {
    this.de = new yf(a.g);
    this.g = a.g;
    var b;
    a.ka ? (b = qf(a), b = a.g.Bc( of (a), b)) : b = a.g.Ec();
    this.Rc = b;
    a.na ? (b = rf(a), a = a.g.Bc(pf(a), b)) : a = a.g.Cc();
    this.sc = a
  }
  h = zf.prototype;
  h.matches = function (a) {
    return 0 >= this.g.compare(this.Rc, a) && 0 >= this.g.compare(a, this.sc)
  };
  h.F = function (a, b, c, d, e, f) {
    this.matches(new G(b, c)) || (c = H);
    return this.de.F(a, b, c, d, e, f)
  };
  h.ya = function (a, b, c) {
    b.J() && (b = H);
    var d = b.lb(this.g),
      d = d.fa(H),
      e = this;
    b.O(L, function (a, b) {
      e.matches(new G(a, b)) || (d = d.T(a, H))
    });
    return this.de.ya(a, d, c)
  };
  h.fa = function (a) {
    return a
  };
  h.Ma = function () {
    return !0
  };
  h.Sb = function () {
    return this.de
  };

  function Af(a) {
    this.sa = new zf(a);
    this.g = a.g;
    I(a.xa, "Only valid if limit has been set");
    this.oa = a.oa;
    this.Gb = !Bf(a)
  }
  h = Af.prototype;
  h.F = function (a, b, c, d, e, f) {
    this.sa.matches(new G(b, c)) || (c = H);
    return a.Q(b).Z(c) ? a : a.Cb() < this.oa ? this.sa.Sb().F(a, b, c, d, e, f) : Cf(this, a, b, c, e, f)
  };
  h.ya = function (a, b, c) {
    var d;
    if (b.J() || b.e()) d = H.lb(this.g);
    else if (2 * this.oa < b.Cb() && b.vc(this.g)) {
      d = H.lb(this.g);
      b = this.Gb ? b.Xb(this.sa.sc, this.g) : b.Vb(this.sa.Rc, this.g);
      for (var e = 0; 0 < b.Oa.length && e < this.oa;) {
        var f = M(b),
          g;
        if (g = this.Gb ? 0 >= this.g.compare(this.sa.Rc, f) : 0 >= this.g.compare(f, this.sa.sc)) d = d.T(f.name, f.R), e++;
        else break
      }
    } else {
      d = b.lb(this.g);
      d = d.fa(H);
      var k, m, l;
      if (this.Gb) {
        b = d.Te(this.g);
        k = this.sa.sc;
        m = this.sa.Rc;
        var r = Pc(this.g);
        l = function (a, b) {
          return r(b, a)
        }
      } else b = d.Ub(this.g), k = this.sa.Rc,
        m = this.sa.sc, l = Pc(this.g);
      for (var e = 0, x = !1; 0 < b.Oa.length;) f = M(b), !x && 0 >= l(k, f) && (x = !0), (g = x && e < this.oa && 0 >= l(f, m)) ? e++ : d = d.T(f.name, H)
    }
    return this.sa.Sb().ya(a, d, c)
  };
  h.fa = function (a) {
    return a
  };
  h.Ma = function () {
    return !0
  };
  h.Sb = function () {
    return this.sa.Sb()
  };

  function Cf(a, b, c, d, e, f) {
    var g;
    if (a.Gb) {
      var k = Pc(a.g);
      g = function (a, b) {
        return k(b, a)
      }
    } else g = Pc(a.g);
    I(b.Cb() == a.oa, "");
    var m = new G(c, d),
      l = a.Gb ? kd(b, a.g) : ld(b, a.g),
      r = a.sa.matches(m);
    if (b.Da(c)) {
      for (var x = b.Q(c), l = e.be(a.g, l, a.Gb); null != l && (l.name == c || b.Da(l.name));) l = e.be(a.g, l, a.Gb);
      e = null == l ? 1 : g(l, m);
      if (r && !d.e() && 0 <= e) return null != f && Ue(f, new V("child_changed", d, c, x)), b.T(c, d);
      null != f && Ue(f, new V("child_removed", x, c));
      b = b.T(c, H);
      return null != l && a.sa.matches(l) ? (null != f && Ue(f, new V("child_added",
        l.R, l.name)), b.T(l.name, l.R)) : b
    }
    return d.e() ? b : r && 0 <= g(l, m) ? (null != f && (Ue(f, new V("child_removed", l.R, l.name)), Ue(f, new V("child_added", d, c))), b.T(c, d).T(l.name, H)) : b
  };

  function Df() {
    this.Pb = this.na = this.Ib = this.ka = this.xa = !1;
    this.oa = 0;
    this.kb = "";
    this.bc = null;
    this.xb = "";
    this.Zb = null;
    this.vb = "";
    this.g = L
  }
  var Ef = new Df;

  function Bf(a) {
    return "" === a.kb ? a.ka : "l" === a.kb
  }

  function of (a) {
    I(a.ka, "Only valid if start has been set");
    return a.bc
  }

  function qf(a) {
    I(a.ka, "Only valid if start has been set");
    return a.Ib ? a.xb : "[MIN_NAME]"
  }

  function pf(a) {
    I(a.na, "Only valid if end has been set");
    return a.Zb
  }

  function rf(a) {
    I(a.na, "Only valid if end has been set");
    return a.Pb ? a.vb : "[MAX_NAME]"
  }

  function Ff(a) {
    var b = new Df;
    b.xa = a.xa;
    b.oa = a.oa;
    b.ka = a.ka;
    b.bc = a.bc;
    b.Ib = a.Ib;
    b.xb = a.xb;
    b.na = a.na;
    b.Zb = a.Zb;
    b.Pb = a.Pb;
    b.vb = a.vb;
    b.g = a.g;
    b.kb = a.kb;
    return b
  }
  h = Df.prototype;
  h.je = function (a) {
    var b = Ff(this);
    b.xa = !0;
    b.oa = a;
    b.kb = "l";
    return b
  };
  h.ke = function (a) {
    var b = Ff(this);
    b.xa = !0;
    b.oa = a;
    b.kb = "r";
    return b
  };
  h.Kd = function (a, b) {
    var c = Ff(this);
    c.ka = !0;
    n(a) || (a = null);
    c.bc = a;
    null != b ? (c.Ib = !0, c.xb = b) : (c.Ib = !1, c.xb = "");
    return c
  };
  h.dd = function (a, b) {
    var c = Ff(this);
    c.na = !0;
    n(a) || (a = null);
    c.Zb = a;
    n(b) ? (c.Pb = !0, c.vb = b) : (c.Ag = !1, c.vb = "");
    return c
  };

  function wf(a, b) {
    var c = Ff(a);
    c.g = b;
    return c
  }

  function xf(a) {
    var b = {};
    a.ka && (b.sp = a.bc, a.Ib && (b.sn = a.xb));
    a.na && (b.ep = a.Zb, a.Pb && (b.en = a.vb));
    if (a.xa) {
      b.l = a.oa;
      var c = a.kb;
      "" === c && (c = Bf(a) ? "l" : "r");
      b.vf = c
    }
    a.g !== L && (b.i = a.g.toString());
    return b
  }

  function X(a) {
    return !(a.ka || a.na || a.xa)
  }

  function Kc(a) {
    return X(a) && a.g == L
  }

  function Lc(a) {
    var b = {};
    if (Kc(a)) return b;
    var c;
    a.g === L ? c = "$priority" : a.g === Yc ? c = "$value" : a.g === Vc ? c = "$key" : (I(a.g instanceof Rc, "Unrecognized index type!"), c = a.g.toString());
    b.orderBy = w(c);
    a.ka && (b.startAt = w(a.bc), a.Ib && (b.startAt += "," + w(a.xb)));
    a.na && (b.endAt = w(a.Zb), a.Pb && (b.endAt += "," + w(a.vb)));
    a.xa && (Bf(a) ? b.limitToFirst = a.oa : b.limitToLast = a.oa);
    return b
  }
  h.toString = function () {
    return w(xf(this))
  };

  function Gf(a, b) {
    this.N = a;
    this.Id = b
  }

  function Hf(a, b, c, d) {
    return new Gf(new Me(b, c, d), a.Id)
  }

  function If(a) {
    return a.N.da ? a.N.j() : null
  }
  Gf.prototype.w = function () {
    return this.Id
  };

  function Ye(a) {
    return a.Id.da ? a.Id.j() : null
  };

  function Jf(a, b) {
    this.Od = a;
    this.Cf = b
  }

  function Kf(a) {
    this.U = a
  }
  Kf.prototype.bb = function (a, b, c, d) {
    var e = new Te,
      f;
    if (b.type === sb) b.source.ae ? c = Lf(this, a, b.path, b.Fa, c, d, e) : (I(b.source.Pe, "Unknown source."), f = b.source.Be || Oe(a.w()) && !b.path.e(), c = Mf(this, a, b.path, b.Fa, c, d, f, e));
    else if (b.type === Hc) b.source.ae ? c = Nf(this, a, b.path, b.children, c, d, e) : (I(b.source.Pe, "Unknown source."), f = b.source.Be || Oe(a.w()), c = Of(this, a, b.path, b.children, c, d, f, e));
    else if (b.type === ke)
      if (b.Gd)
        if (b = b.path, null != c.ic(b)) c = a;
        else {
          f = new Xe(c, a, d);
          d = a.N.j();
          if (b.e() || ".priority" === O(b)) Ne(a.w()) ?
            b = c.Aa(Ye(a)) : (b = a.w().j(), I(b instanceof P, "serverChildren would be complete if leaf node"), b = c.oc(b)), b = this.U.ya(d, b, e);
          else {
            var g = O(b),
              k = c.nc(g, a.w());
            null == k && Qe(a.w(), g) && (k = d.Q(g));
            b = null != k ? this.U.F(d, g, k, E(b), f, e) : a.N.j().Da(g) ? this.U.F(d, g, H, E(b), f, e) : d;
            b.e() && Ne(a.w()) && (d = c.Aa(Ye(a)), d.J() && (b = this.U.ya(b, d, e)))
          }
          d = Ne(a.w()) || null != c.ic(D);
          c = Hf(a, b, d, this.U.Ma())
        }
    else c = Pf(this, a, b.path, b.Mb, c, d, e);
    else if (b.type === qb) d = b.path, b = a.w(), f = b.j(), g = b.da || d.e(), c = Qf(this, new Gf(a.N, new Me(f,
      g, b.Qb)), d, c, We, e);
    else throw gc("Unknown operation type: " + b.type);
    e = za(e.eb);
    d = c;
    b = d.N;
    b.da && (f = b.j().J() || b.j().e(), g = If(a), (0 < e.length || !a.N.da || f && !b.j().Z(g) || !b.j().C().Z(g.C())) && e.push(Re(If(d))));
    return new Jf(c, e)
  };

  function Qf(a, b, c, d, e, f) {
    var g = b.N;
    if (null != d.ic(c)) return b;
    var k;
    if (c.e()) I(Ne(b.w()), "If change path is empty, we must have complete server data"), Oe(b.w()) ? (e = Ye(b), d = d.oc(e instanceof P ? e : H)) : d = d.Aa(Ye(b)), f = a.U.ya(b.N.j(), d, f);
    else {
      var m = O(c);
      if (".priority" == m) I(1 == gd(c), "Can't have a priority with additional path components"), f = g.j(), k = b.w().j(), d = d.Yc(c, f, k), f = null != d ? a.U.fa(f, d) : g.j();
      else {
        var l = E(c);
        Qe(g, m) ? (k = b.w().j(), d = d.Yc(c, g.j(), k), d = null != d ? g.j().Q(m).F(l, d) : g.j().Q(m)) : d = d.nc(m,
          b.w());
        f = null != d ? a.U.F(g.j(), m, d, l, e, f) : g.j()
      }
    }
    return Hf(b, f, g.da || c.e(), a.U.Ma())
  }

  function Mf(a, b, c, d, e, f, g, k) {
    var m = b.w();
    g = g ? a.U : a.U.Sb();
    if (c.e()) d = g.ya(m.j(), d, null);
    else if (g.Ma() && !m.Qb) d = m.j().F(c, d), d = g.ya(m.j(), d, null);
    else {
      var l = O(c);
      if (!Pe(m, c) && 1 < gd(c)) return b;
      var r = E(c);
      d = m.j().Q(l).F(r, d);
      d = ".priority" == l ? g.fa(m.j(), d) : g.F(m.j(), l, d, r, We, null)
    }
    m = m.da || c.e();
    b = new Gf(b.N, new Me(d, m, g.Ma()));
    return Qf(a, b, c, e, new Xe(e, b, f), k)
  }

  function Lf(a, b, c, d, e, f, g) {
    var k = b.N;
    e = new Xe(e, b, f);
    if (c.e()) g = a.U.ya(b.N.j(), d, g), a = Hf(b, g, !0, a.U.Ma());
    else if (f = O(c), ".priority" === f) g = a.U.fa(b.N.j(), d), a = Hf(b, g, k.da, k.Qb);
    else {
      c = E(c);
      var m = k.j().Q(f);
      if (!c.e()) {
        var l = e.Qe(f);
        d = null != l ? ".priority" === Bd(c) && l.P(c.parent()).e() ? l : l.F(c, d) : H
      }
      m.Z(d) ? a = b : (g = a.U.F(k.j(), f, d, c, e, g), a = Hf(b, g, k.da, a.U.Ma()))
    }
    return a
  }

  function Nf(a, b, c, d, e, f, g) {
    var k = b;
    Zd(d, function (d, l) {
      var r = c.n(d);
      Qe(b.N, O(r)) && (k = Lf(a, k, r, l, e, f, g))
    });
    Zd(d, function (d, l) {
      var r = c.n(d);
      Qe(b.N, O(r)) || (k = Lf(a, k, r, l, e, f, g))
    });
    return k
  }

  function Rf(a, b) {
    Zd(b, function (b, d) {
      a = a.F(b, d)
    });
    return a
  }

  function Of(a, b, c, d, e, f, g, k) {
    if (b.w().j().e() && !Ne(b.w())) return b;
    var m = b;
    c = c.e() ? d : Sd(S, c, d);
    var l = b.w().j();
    c.children.ha(function (c, d) {
      if (l.Da(c)) {
        var F = b.w().j().Q(c),
          F = Rf(F, d);
        m = Mf(a, m, new J(c), F, e, f, g, k)
      }
    });
    c.children.ha(function (c, d) {
      var F = !Qe(b.w(), c) && null == d.value;
      l.Da(c) || F || (F = b.w().j().Q(c), F = Rf(F, d), m = Mf(a, m, new J(c), F, e, f, g, k))
    });
    return m
  }

  function Pf(a, b, c, d, e, f, g) {
    if (null != e.ic(c)) return b;
    var k = Oe(b.w()),
      m = b.w();
    if (null != d.value) {
      if (c.e() && m.da || Pe(m, c)) return Mf(a, b, c, m.j().P(c), e, f, k, g);
      if (c.e()) {
        var l = S;
        m.j().O(Vc, function (a, b) {
          l = l.set(new J(a), b)
        });
        return Of(a, b, c, l, e, f, k, g)
      }
      return b
    }
    l = S;
    Zd(d, function (a) {
      var b = c.n(a);
      Pe(m, b) && (l = l.set(a, m.j().P(b)))
    });
    return Of(a, b, c, l, e, f, k, g)
  };

  function Sf(a, b) {
    this.V = a;
    var c = a.m,
      d = new yf(c.g),
      c = X(c) ? new yf(c.g) : c.xa ? new Af(c) : new zf(c);
    this.ff = new Kf(c);
    var e = b.w(),
      f = b.N,
      g = d.ya(H, e.j(), null),
      k = c.ya(H, f.j(), null);
    this.Ja = new Gf(new Me(k, f.da, c.Ma()), new Me(g, e.da, d.Ma()));
    this.Ya = [];
    this.Lf = new af(a)
  }

  function Tf(a) {
    return a.V
  }
  h = Sf.prototype;
  h.w = function () {
    return this.Ja.w().j()
  };
  h.fb = function (a) {
    var b = Ye(this.Ja);
    return b && (X(this.V.m) || !a.e() && !b.Q(O(a)).e()) ? b.P(a) : null
  };
  h.e = function () {
    return 0 === this.Ya.length
  };
  h.Lb = function (a) {
    this.Ya.push(a)
  };
  h.ib = function (a, b) {
    var c = [];
    if (b) {
      I(null == a, "A cancel should cancel all event registrations.");
      var d = this.V.path;
      Ha(this.Ya, function (a) {
        (a = a.Ie(b, d)) && c.push(a)
      })
    }
    if (a) {
      for (var e = [], f = 0; f < this.Ya.length; ++f) {
        var g = this.Ya[f];
        if (!g.matches(a)) e.push(g);
        else if (a.Ue()) {
          e = e.concat(this.Ya.slice(f + 1));
          break
        }
      }
      this.Ya = e
    } else this.Ya = [];
    return c
  };
  h.bb = function (a, b, c) {
    a.type === Hc && null !== a.source.Fb && (I(Ye(this.Ja), "We should always have a full cache before handling merges"), I(If(this.Ja), "Missing event cache, even though we have a server cache"));
    var d = this.Ja;
    a = this.ff.bb(d, a, b, c);
    b = this.ff;
    c = a.Od;
    I(c.N.j().vc(b.U.g), "Event snap not indexed");
    I(c.w().j().vc(b.U.g), "Server snap not indexed");
    I(Ne(a.Od.w()) || !Ne(d.w()), "Once a server snap is complete, it should never go back");
    this.Ja = a.Od;
    return Uf(this, a.Cf, a.Od.N.j(), null)
  };

  function Vf(a, b) {
    var c = a.Ja.N,
      d = [];
    c.j().J() || c.j().O(L, function (a, b) {
      d.push(new V("child_added", b, a))
    });
    c.da && d.push(Re(c.j()));
    return Uf(a, d, c.j(), b)
  }

  function Uf(a, b, c, d) {
    return bf(a.Lf, b, c, d ? [d] : a.Ya)
  };

  function Wf() {
    this.za = {}
  }
  h = Wf.prototype;
  h.e = function () {
    return Ea(this.za)
  };
  h.bb = function (a, b, c) {
    var d = a.source.Fb;
    if (null !== d) return d = y(this.za, d), I(null != d, "SyncTree gave us an op for an invalid query."), d.bb(a, b, c);
    var e = [];
    t(this.za, function (d) {
      e = e.concat(d.bb(a, b, c))
    });
    return e
  };
  h.Lb = function (a, b, c, d, e) {
    var f = a.ja(),
      g = y(this.za, f);
    if (!g) {
      var g = c.Aa(e ? d : null),
        k = !1;
      g ? k = !0 : (g = d instanceof P ? c.oc(d) : H, k = !1);
      g = new Sf(a, new Gf(new Me(g, k, !1), new Me(d, e, !1)));
      this.za[f] = g
    }
    g.Lb(b);
    return Vf(g, b)
  };
  h.ib = function (a, b, c) {
    var d = a.ja(),
      e = [],
      f = [],
      g = null != Xf(this);
    if ("default" === d) {
      var k = this;
      t(this.za, function (a, d) {
        f = f.concat(a.ib(b, c));
        a.e() && (delete k.za[d], X(a.V.m) || e.push(a.V))
      })
    } else {
      var m = y(this.za, d);
      m && (f = f.concat(m.ib(b, c)), m.e() && (delete this.za[d], X(m.V.m) || e.push(m.V)))
    }
    g && null == Xf(this) && e.push(new R(a.u, a.path));
    return {
      jg: e,
      Mf: f
    }
  };

  function Yf(a) {
    return Ia(za(a.za), function (a) {
      return !X(a.V.m)
    })
  }
  h.fb = function (a) {
    var b = null;
    t(this.za, function (c) {
      b = b || c.fb(a)
    });
    return b
  };

  function Zf(a, b) {
    if (X(b.m)) return Xf(a);
    var c = b.ja();
    return y(a.za, c)
  }

  function Xf(a) {
    return Da(a.za, function (a) {
      return X(a.V.m)
    }) || null
  };

  function $f() {
    this.S = ce;
    this.la = [];
    this.yc = -1
  }

  function ag(a, b) {
    for (var c = 0; c < a.la.length; c++) {
      var d = a.la[c];
      if (d.Wc === b) return d
    }
    return null
  }
  h = $f.prototype;
  h.Cd = function (a) {
    var b = Na(this.la, function (b) {
      return b.Wc === a
    });
    I(0 <= b, "removeWrite called with nonexistent writeId.");
    var c = this.la[b];
    this.la.splice(b, 1);
    for (var d = c.visible, e = !1, f = this.la.length - 1; d && 0 <= f;) {
      var g = this.la[f];
      g.visible && (f >= b && bg(g, c.path) ? d = !1 : c.path.contains(g.path) && (e = !0));
      f--
    }
    if (d) {
      if (e) this.S = cg(this.la, dg, D), this.yc = 0 < this.la.length ? this.la[this.la.length - 1].Wc : -1;
      else if (c.Fa) this.S = this.S.Cd(c.path);
      else {
        var k = this;
        t(c.children, function (a, b) {
          k.S = k.S.Cd(c.path.n(b))
        })
      }
      return !0
    }
    return !1
  };
  h.Aa = function (a, b, c, d) {
    if (c || d) {
      var e = he(this.S, a);
      return !d && e.e() ? b : d || null != b || null != fe(e, D) ? (e = cg(this.la, function (b) {
        return (b.visible || d) && (!c || !(0 <= Ga(c, b.Wc))) && (b.path.contains(a) || a.contains(b.path))
      }, a), b = b || H, e.apply(b)) : null
    }
    e = fe(this.S, a);
    if (null != e) return e;
    e = he(this.S, a);
    return e.e() ? b : null != b || null != fe(e, D) ? (b = b || H, e.apply(b)) : null
  };
  h.oc = function (a, b) {
    var c = H,
      d = fe(this.S, a);
    if (d) d.J() || d.O(L, function (a, b) {
      c = c.T(a, b)
    });
    else if (b) {
      var e = he(this.S, a);
      b.O(L, function (a, b) {
        var d = he(e, new J(a)).apply(b);
        c = c.T(a, d)
      });
      Ha(ge(e), function (a) {
        c = c.T(a.name, a.R)
      })
    } else e = he(this.S, a), Ha(ge(e), function (a) {
      c = c.T(a.name, a.R)
    });
    return c
  };
  h.Yc = function (a, b, c, d) {
    I(c || d, "Either existingEventSnap or existingServerSnap must exist");
    a = a.n(b);
    if (null != fe(this.S, a)) return null;
    a = he(this.S, a);
    return a.e() ? d.P(b) : a.apply(d.P(b))
  };
  h.nc = function (a, b, c) {
    a = a.n(b);
    var d = fe(this.S, a);
    return null != d ? d : Qe(c, b) ? he(this.S, a).apply(c.j().Q(b)) : null
  };
  h.ic = function (a) {
    return fe(this.S, a)
  };
  h.Td = function (a, b, c, d, e, f) {
    var g;
    a = he(this.S, a);
    g = fe(a, D);
    if (null == g)
      if (null != b) g = a.apply(b);
      else return [];
    g = g.lb(f);
    if (g.e() || g.J()) return [];
    b = [];
    a = Pc(f);
    e = e ? g.Xb(c, f) : g.Vb(c, f);
    for (f = M(e); f && b.length < d;) 0 !== a(f, c) && b.push(f), f = M(e);
    return b
  };

  function bg(a, b) {
    return a.Fa ? a.path.contains(b) : !!Ca(a.children, function (c, d) {
      return a.path.n(d).contains(b)
    })
  }

  function dg(a) {
    return a.visible
  }

  function cg(a, b, c) {
    for (var d = ce, e = 0; e < a.length; ++e) {
      var f = a[e];
      if (b(f)) {
        var g = f.path;
        if (f.Fa) c.contains(g) ? (g = Q(c, g), d = de(d, g, f.Fa)) : g.contains(c) && (g = Q(g, c), d = de(d, D, f.Fa.P(g)));
        else if (f.children)
          if (c.contains(g)) g = Q(c, g), d = ee(d, g, f.children);
          else {
            if (g.contains(c))
              if (g = Q(g, c), g.e()) d = ee(d, D, f.children);
              else if (f = y(f.children, O(g))) f = f.P(E(g)), d = de(d, D, f)
          }
        else throw gc("WriteRecord should have .snap or .children");
      }
    }
    return d
  }

  function eg(a, b) {
    this.Jb = a;
    this.W = b
  }
  h = eg.prototype;
  h.Aa = function (a, b, c) {
    return this.W.Aa(this.Jb, a, b, c)
  };
  h.oc = function (a) {
    return this.W.oc(this.Jb, a)
  };
  h.Yc = function (a, b, c) {
    return this.W.Yc(this.Jb, a, b, c)
  };
  h.ic = function (a) {
    return this.W.ic(this.Jb.n(a))
  };
  h.Td = function (a, b, c, d, e) {
    return this.W.Td(this.Jb, a, b, c, d, e)
  };
  h.nc = function (a, b) {
    return this.W.nc(this.Jb, a, b)
  };
  h.n = function (a) {
    return new eg(this.Jb.n(a), this.W)
  };

  function fg(a) {
    this.wa = S;
    this.hb = new $f;
    this.Ae = {};
    this.fc = {};
    this.zc = a
  }

  function gg(a, b, c, d, e) {
    var f = a.hb,
      g = e;
    I(d > f.yc, "Stacking an older write on top of newer ones");
    n(g) || (g = !0);
    f.la.push({
      path: b,
      Fa: c,
      Wc: d,
      visible: g
    });
    g && (f.S = de(f.S, b, c));
    f.yc = d;
    return e ? hg(a, new rb(le, b, c)) : []
  }

  function ig(a, b, c, d) {
    var e = a.hb;
    I(d > e.yc, "Stacking an older merge on top of newer ones");
    e.la.push({
      path: b,
      children: c,
      Wc: d,
      visible: !0
    });
    e.S = ee(e.S, b, c);
    e.yc = d;
    c = Pd(c);
    return hg(a, new Gc(le, b, c))
  }

  function jg(a, b, c) {
    c = c || !1;
    var d = ag(a.hb, b);
    if (a.hb.Cd(b)) {
      var e = S;
      null != d.Fa ? e = e.set(D, !0) : db(d.children, function (a, b) {
        e = e.set(new J(a), b)
      });
      return hg(a, new je(d.path, e, c))
    }
    return []
  }

  function kg(a, b, c) {
    c = Pd(c);
    return hg(a, new Gc(ne, b, c))
  }

  function lg(a, b, c, d) {
    d = mg(a, d);
    if (null != d) {
      var e = ng(d);
      d = e.path;
      e = e.Fb;
      b = Q(d, b);
      c = new rb(new me(!1, !0, e, !0), b, c);
      return og(a, d, c)
    }
    return []
  }

  function pg(a, b, c, d) {
    if (d = mg(a, d)) {
      var e = ng(d);
      d = e.path;
      e = e.Fb;
      b = Q(d, b);
      c = Pd(c);
      c = new Gc(new me(!1, !0, e, !0), b, c);
      return og(a, d, c)
    }
    return []
  }
  fg.prototype.Lb = function (a, b) {
    var c = a.path,
      d = null,
      e = !1;
    Xd(this.wa, c, function (a, b) {
      var f = Q(a, c);
      d = d || b.fb(f);
      e = e || null != Xf(b)
    });
    var f = this.wa.get(c);
    f ? (e = e || null != Xf(f), d = d || f.fb(D)) : (f = new Wf, this.wa = this.wa.set(c, f));
    var g;
    null != d ? g = !0 : (g = !1, d = H, ae(this.wa.subtree(c), function (a, b) {
      var c = b.fb(D);
      c && (d = d.T(a, c))
    }));
    var k = null != Zf(f, a);
    if (!k && !X(a.m)) {
      var m = qg(a);
      I(!(m in this.fc), "View does not exist, but we have a tag");
      var l = rg++;
      this.fc[m] = l;
      this.Ae["_" + l] = m
    }
    g = f.Lb(a, b, new eg(c, this.hb), d, g);
    k ||
      e || (f = Zf(f, a), g = g.concat(sg(this, a, f)));
    return g
  };
  fg.prototype.ib = function (a, b, c) {
    var d = a.path,
      e = this.wa.get(d),
      f = [];
    if (e && ("default" === a.ja() || null != Zf(e, a))) {
      f = e.ib(a, b, c);
      e.e() && (this.wa = this.wa.remove(d));
      e = f.jg;
      f = f.Mf;
      b = -1 !== Na(e, function (a) {
        return X(a.m)
      });
      var g = Vd(this.wa, d, function (a, b) {
        return null != Xf(b)
      });
      if (b && !g && (d = this.wa.subtree(d), !d.e()))
        for (var d = tg(d), k = 0; k < d.length; ++k) {
          var m = d[k],
            l = m.V,
            m = ug(this, m);
          this.zc.xe(vg(l), wg(this, l), m.hd, m.G)
        }
      if (!g && 0 < e.length && !c)
        if (b) this.zc.Ld(vg(a), null);
        else {
          var r = this;
          Ha(e, function (a) {
            a.ja();
            var b = r.fc[qg(a)];
            r.zc.Ld(vg(a), b)
          })
        }
      xg(this, e)
    }
    return f
  };
  fg.prototype.Aa = function (a, b) {
    var c = this.hb,
      d = Vd(this.wa, a, function (b, c) {
        var d = Q(b, a);
        if (d = c.fb(d)) return d
      });
    return c.Aa(a, d, b, !0)
  };

  function tg(a) {
    return Td(a, function (a, c, d) {
      if (c && null != Xf(c)) return [Xf(c)];
      var e = [];
      c && (e = Yf(c));
      t(d, function (a) {
        e = e.concat(a)
      });
      return e
    })
  }

  function xg(a, b) {
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (!X(d.m)) {
        var d = qg(d),
          e = a.fc[d];
        delete a.fc[d];
        delete a.Ae["_" + e]
      }
    }
  }

  function vg(a) {
    return X(a.m) && !Kc(a.m) ? a.ub() : a
  }

  function sg(a, b, c) {
    var d = b.path,
      e = wg(a, b);
    c = ug(a, c);
    b = a.zc.xe(vg(b), e, c.hd, c.G);
    d = a.wa.subtree(d);
    if (e) I(null == Xf(d.value), "If we're adding a query, it shouldn't be shadowed");
    else
      for (e = Td(d, function (a, b, c) {
          if (!a.e() && b && null != Xf(b)) return [Tf(Xf(b))];
          var d = [];
          b && (d = d.concat(Ja(Yf(b), function (a) {
            return a.V
          })));
          t(c, function (a) {
            d = d.concat(a)
          });
          return d
        }), d = 0; d < e.length; ++d) c = e[d], a.zc.Ld(vg(c), wg(a, c));
    return b
  }

  function ug(a, b) {
    var c = b.V,
      d = wg(a, c);
    return {
      hd: function () {
        return (b.w() || H).hash()
      },
      G: function (b) {
        if ("ok" === b) {
          if (d) {
            var f = c.path;
            if (b = mg(a, d)) {
              var g = ng(b);
              b = g.path;
              g = g.Fb;
              f = Q(b, f);
              f = new pb(new me(!1, !0, g, !0), f);
              b = og(a, b, f)
            } else b = []
          } else b = hg(a, new pb(ne, c.path));
          return b
        }
        f = "Unknown Error";
        "too_big" === b ? f = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? f = "Client doesn't have permission to access the desired data." : "unavailable" == b &&
          (f = "The service is unavailable");
        f = Error(b + " at " + c.path.toString() + ": " + f);
        f.code = b.toUpperCase();
        return a.ib(c, null, f)
      }
    }
  }

  function qg(a) {
    return a.path.toString() + "$" + a.ja()
  }

  function ng(a) {
    var b = a.indexOf("$");
    I(-1 !== b && b < a.length - 1, "Bad queryKey.");
    return {
      Fb: a.substr(b + 1),
      path: new J(a.substr(0, b))
    }
  }

  function mg(a, b) {
    var c = a.Ae,
      d = "_" + b;
    return d in c ? c[d] : void 0
  }

  function wg(a, b) {
    var c = qg(b);
    return y(a.fc, c)
  }
  var rg = 1;

  function og(a, b, c) {
    var d = a.wa.get(b);
    I(d, "Missing sync point for query tag that we're tracking");
    return d.bb(c, new eg(b, a.hb), null)
  }

  function hg(a, b) {
    return yg(a, b, a.wa, null, new eg(D, a.hb))
  }

  function yg(a, b, c, d, e) {
    if (b.path.e()) return zg(a, b, c, d, e);
    var f = c.get(D);
    null == d && null != f && (d = f.fb(D));
    var g = [],
      k = O(b.path),
      m = b.Jc(k);
    if ((c = c.children.get(k)) && m) var l = d ? d.Q(k) : null,
      k = e.n(k),
      g = g.concat(yg(a, m, c, l, k));
    f && (g = g.concat(f.bb(b, e, d)));
    return g
  }

  function zg(a, b, c, d, e) {
    var f = c.get(D);
    null == d && null != f && (d = f.fb(D));
    var g = [];
    c.children.ha(function (c, f) {
      var l = d ? d.Q(c) : null,
        r = e.n(c),
        x = b.Jc(c);
      x && (g = g.concat(zg(a, x, f, l, r)))
    });
    f && (g = g.concat(f.bb(b, e, d)));
    return g
  };

  function Ag() {
    return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : "")
  };

  function Bg() {
    xd.call(this, ["online"]);
    this.ec = !0;
    if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener && !Ag()) {
      var a = this;
      window.addEventListener("online", function () {
        a.ec || (a.ec = !0, a.De("online", !0))
      }, !1);
      window.addEventListener("offline", function () {
        a.ec && (a.ec = !1, a.De("online", !1))
      }, !1)
    }
  }
  la(Bg, xd);
  Bg.prototype.Re = function (a) {
    I("online" === a, "Unknown event type: " + a);
    return [this.ec]
  };
  ca(Bg);
  var Jb = "websocket",
    Kb = "long_polling";

  function Cg(a) {
    this.qe = a;
    this.zd = [];
    this.Ob = 0;
    this.Ud = -1;
    this.Db = null
  }

  function Dg(a, b, c) {
    a.Ud = b;
    a.Db = c;
    a.Ud < a.Ob && (a.Db(), a.Db = null)
  }

  function Eg(a, b, c) {
    for (a.zd[b] = c; a.zd[a.Ob];) {
      var d = a.zd[a.Ob];
      delete a.zd[a.Ob];
      for (var e = 0; e < d.length; ++e)
        if (d[e]) {
          var f = a;
          Ac(function () {
            f.qe(d[e])
          })
        }
      if (a.Ob === a.Ud) {
        a.Db && (clearTimeout(a.Db), a.Db(), a.Db = null);
        break
      }
      a.Ob++
    }
  };

  function Fg(a, b, c, d) {
    this.Vd = a;
    this.f = nc(a);
    this.gc = b;
    this.nb = this.ob = 0;
    this.Ua = td(b);
    this.sf = c;
    this.tc = !1;
    this.Ab = d;
    this.Vc = function (a) {
      return Ib(b, Kb, a)
    }
  }
  var Gg, Hg;
  Fg.prototype.open = function (a, b) {
    this.Je = 0;
    this.ia = b;
    this.af = new Cg(a);
    this.yb = !1;
    var c = this;
    this.qb = setTimeout(function () {
      c.f("Timed out trying to connect.");
      c.ab();
      c.qb = null
    }, Math.floor(3E4));
    sc(function () {
      if (!c.yb) {
        c.Sa = new Ig(function (a, b, d, k, m) {
          Jg(c, arguments);
          if (c.Sa)
            if (c.qb && (clearTimeout(c.qb), c.qb = null), c.tc = !0, "start" == a) c.id = b, c.fg = d;
            else if ("close" === a) b ? (c.Sa.of = !1, Dg(c.af, b, function () {
            c.ab()
          })) : c.ab();
          else throw Error("Unrecognized command received: " + a);
        }, function (a, b) {
          Jg(c, arguments);
          Eg(c.af, a, b)
        }, function () {
          c.ab()
        }, c.Vc);
        var a = {
          start: "t"
        };
        a.ser = Math.floor(1E8 * Math.random());
        c.Sa.sg && (a.cb = c.Sa.sg);
        a.v = "5";
        c.sf && (a.s = c.sf);
        c.Ab && (a.ls = c.Ab);
        a = c.Vc(a);
        c.f("Connecting via long-poll to " + a);
        Kg(c.Sa, a, function () {})
      }
    })
  };
  Fg.prototype.start = function () {
    var a = this.Sa,
      b = this.fg;
    a.le = this.id;
    a.$e = b;
    for (a.Qd = !0; Lg(a););
  };
  Fg.isAvailable = function () {
    return Gg || !Hg && "undefined" !== typeof document && null != document.createElement && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.ug) && !1
  };
  h = Fg.prototype;
  h.pd = function () {};
  h.Qc = function () {
    this.yb = !0;
    this.Sa && (this.Sa.close(), this.Sa = null);
    this.Ze && (document.body.removeChild(this.Ze), this.Ze = null);
    this.qb && (clearTimeout(this.qb), this.qb = null)
  };
  h.ab = function () {
    this.yb || (this.f("Longpoll is closing itself"), this.Qc(), this.ia && (this.ia(this.tc), this.ia = null))
  };
  h.close = function () {
    this.yb || (this.f("Longpoll is being closed."), this.Qc())
  };
  h.send = function (a) {
    a = w(a);
    this.ob += a.length;
    zb(this.Ua, "bytes_sent", a.length);
    a = ib(a);
    a = Za(a, !0);
    a = wc(a, 1840);
    for (var b = 0; b < a.length; b++) {
      var c = this.Sa;
      c.Nc.push({
        lg: this.Je,
        rg: a.length,
        Le: a[b]
      });
      c.Qd && Lg(c);
      this.Je++
    }
  };

  function Jg(a, b) {
    var c = w(b).length;
    a.nb += c;
    zb(a.Ua, "bytes_received", c)
  }

  function Ig(a, b, c, d) {
    this.Vc = d;
    this.gb = c;
    this.se = new vd;
    this.Nc = [];
    this.Xd = Math.floor(1E8 * Math.random());
    this.of = !0;
    this.Ef = a;
    this.Yf = b
  }
  Ig.prototype.close = function () {
    this.Qd = !1;
    if (this.rd) {
      this.rd.wg.body.innerHTML = "";
      var a = this;
      setTimeout(function () {
        null !== a.rd && (document.body.removeChild(a.rd), a.rd = null)
      }, Math.floor(0))
    }
    if (this.le) {
      var b = {
        disconn: "t"
      };
      b.id = this.le;
      b.pw = this.$e;
      b = this.Vc(b);
      Mg(b)
    }
    if (b = this.gb) this.gb = null, b()
  };

  function Lg(a) {
    if (a.Qd && a.of && a.se.count() < (0 < a.Nc.length ? 2 : 1)) {
      a.Xd++;
      var b = {};
      b.id = a.le;
      b.pw = a.$e;
      b.ser = a.Xd;
      for (var b = a.Vc(b), c = "", d = 0; 0 < a.Nc.length;)
        if (1870 >= a.Nc[0].Le.length + 30 + c.length) {
          var e = a.Nc.shift(),
            c = c + "&seg" + d + "=" + e.lg + "&ts" + d + "=" + e.rg + "&d" + d + "=" + e.Le;
          d++
        } else break;
      Ng(a, b + c, a.Xd);
      return !0
    }
    return !1
  }

  function Ng(a, b, c) {
    function d() {
      a.se.remove(c);
      Lg(a)
    }
    a.se.add(c, 1);
    var e = setTimeout(d, Math.floor(25E3));
    Kg(a, b, function () {
      clearTimeout(e);
      d()
    })
  }

  function Kg(a, b, c) {
    a.Hf(b, c)
  }
  var Og = null;

  function Mg(a, b) {
    Og || (Og = require("request"));
    console.log('request',a);
    Og(a, function (c, d, e) {
      if (c) throw "Rest request for " + a.url + " failed.";
      b && b(e)
    })
  }
  Ig.prototype.Hf = function (a, b) {
    var c = this;
    Mg({
      url: a,
      xg: !0
    }, function (a) {
      c.Kf(a);
      b()
    })
  };
  Ig.prototype.Kf = function (a) {
    eval("var jsonpCB = function(pLPCommand, pRTLPCB) {" + a + "}");
    jsonpCB(this.Ef, this.Yf)
  };
  var Pg = null,
    Pg = require("faye-websocket").Client;

  function Qg(a, b, c, d) {
    this.Vd = a;
    this.f = nc(this.Vd);
    this.frames = this.wc = null;
    this.nb = this.ob = this.Ce = 0;
    this.Ua = td(b);
    a = {
      v: "5"
    };
    c && (a.s = c);
    d && (a.ls = d);
    this.Wd = Ib(b, Jb, a)
  }
  var Rg;
  Qg.prototype.open = function (a, b) {
    this.gb = b;
    this.Xf = a;
    this.f("Websocket connecting to " + this.Wd);
    this.tc = !1;
    Eb.set("previous_websocket_failure", !0);
    try {
      var c = {
          headers: {
            "User-Agent": "Firebase/5/" + firebase.SDK_VERSION + "/" + process.platform + "/AdminNode"
          }
        },
        d = process.env,
        e = 0 == this.Wd.indexOf("wss://") ? d.HTTPS_PROXY || d.https_proxy : d.HTTP_PROXY || d.http_proxy;
      e && (c.proxy = {
        origin: e
      });
      this.Ha = new Pg(this.Wd, [], c)
    } catch (f) {
      this.f("Error instantiating WebSocket.");
      (c = f.message || f.data) && this.f(c);
      this.ab();
      return
    }
    var g =
      this;
    this.Ha.onopen = function () {
      g.f("Websocket connected.");
      g.tc = !0
    };
    this.Ha.onclose = function () {
      g.f("Websocket connection was disconnected.");
      g.Ha = null;
      g.ab()
    };
    this.Ha.onmessage = function (a) {
      if (null !== g.Ha)
        if (a = a.data, g.nb += a.length, zb(g.Ua, "bytes_received", a.length), Sg(g), null !== g.frames) Tg(g, a);
        else {
          a: {
            I(null === g.frames, "We already have a frame buffer");
            if (6 >= a.length) {
              var b = Number(a);
              if (!isNaN(b)) {
                g.Ce = b;
                g.frames = [];
                a = null;
                break a
              }
            }
            g.Ce = 1;g.frames = []
          }
          null !== a && Tg(g, a)
        }
    };
    this.Ha.onerror = function (a) {
      g.f("WebSocket error.  Closing connection.");
      (a = a.message || a.data) && g.f(a);
      g.ab()
    }
  };
  Qg.prototype.start = function () {};
  Qg.isAvailable = function () {
    var a = !1;
    if ("undefined" !== typeof navigator && navigator.userAgent) {
      var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
      b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0)
    }
    return !a && null !== Pg && !Rg
  };
  Qg.responsesRequiredToBeHealthy = 2;
  Qg.healthyTimeout = 3E4;
  h = Qg.prototype;
  h.pd = function () {
    Eb.remove("previous_websocket_failure")
  };

  function Tg(a, b) {
    a.frames.push(b);
    if (a.frames.length == a.Ce) {
      var c = a.frames.join("");
      a.frames = null;
      c = bb(c);
      a.Xf(c)
    }
  }
  h.send = function (a) {
    Sg(this);
    a = w(a);
    this.ob += a.length;
    zb(this.Ua, "bytes_sent", a.length);
    a = wc(a, 16384);
    1 < a.length && Ug(this, String(a.length));
    for (var b = 0; b < a.length; b++) Ug(this, a[b])
  };
  h.Qc = function () {
    this.yb = !0;
    this.wc && (clearInterval(this.wc), this.wc = null);
    this.Ha && (this.Ha.close(), this.Ha = null)
  };
  h.ab = function () {
    this.yb || (this.f("WebSocket is closing itself"), this.Qc(), this.gb && (this.gb(this.tc), this.gb = null))
  };
  h.close = function () {
    this.yb || (this.f("WebSocket is being closed"), this.Qc())
  };

  function Sg(a) {
    clearInterval(a.wc);
    a.wc = setInterval(function () {
      a.Ha && Ug(a, "0");
      Sg(a)
    }, Math.floor(45E3))
  }

  function Ug(a, b) {
    try {
      a.Ha.send(b)
    } catch (c) {
      a.f("Exception thrown from WebSocket.send():", c.message || c.data, "Closing connection."), setTimeout(q(a.ab, a), 0)
    }
  };

  function Vg(a) {
    Wg(this, a)
  }
  var Xg = [Fg, Qg];

  function Wg(a, b) {
    var c = Qg && Qg.isAvailable(),
      d = c && !(Eb.We || !0 === Eb.get("previous_websocket_failure"));
    b.tg && (c || N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
    if (d) a.Tc = [Qg];
    else {
      var e = a.Tc = [];
      xc(Xg, function (a, b) {
        b && b.isAvailable() && e.push(b)
      })
    }
  }

  function Yg(a) {
    if (0 < a.Tc.length) return a.Tc[0];
    throw Error("No transports available");
  };

  function Zg(a, b, c, d, e, f, g) {
    this.id = a;
    this.f = nc("c:" + this.id + ":");
    this.qe = c;
    this.Ic = d;
    this.ia = e;
    this.pe = f;
    this.L = b;
    this.yd = [];
    this.He = 0;
    this.rf = new Vg(b);
    this.Ta = 0;
    this.Ab = g;
    this.f("Connection created");
    $g(this)
  }

  function $g(a) {
    var b = Yg(a.rf);
    a.I = new b("c:" + a.id + ":" + a.He++, a.L, void 0, a.Ab);
    a.ue = b.responsesRequiredToBeHealthy || 0;
    var c = ah(a, a.I),
      d = bh(a, a.I);
    a.Uc = a.I;
    a.Oc = a.I;
    a.D = null;
    a.zb = !1;
    setTimeout(function () {
      a.I && a.I.open(c, d)
    }, Math.floor(0));
    b = b.healthyTimeout || 0;
    0 < b && (a.jd = Cc(function () {
      a.jd = null;
      a.zb || (a.I && 102400 < a.I.nb ? (a.f("Connection exceeded healthy timeout but has received " + a.I.nb + " bytes.  Marking connection healthy."), a.zb = !0, a.I.pd()) : a.I && 10240 < a.I.ob ? a.f("Connection exceeded healthy timeout but has sent " +
        a.I.ob + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()))
    }, Math.floor(b)))
  }

  function bh(a, b) {
    return function (c) {
      b === a.I ? (a.I = null, c || 0 !== a.Ta ? 1 === a.Ta && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.L.Za.substr(0, 2) && (Eb.remove("host:" + a.L.host), a.L.Za = a.L.host)), a.close()) : b === a.D ? (a.f("Secondary connection lost."), c = a.D, a.D = null, a.Uc !== c && a.Oc !== c || a.close()) : a.f("closing an old connection")
    }
  }

  function ah(a, b) {
    return function (c) {
      if (2 != a.Ta)
        if (b === a.Oc) {
          var d = uc("t", c);
          c = uc("d", c);
          if ("c" == d) {
            if (d = uc("t", c), "d" in c)
              if (c = c.d, "h" === d) {
                var d = c.ts,
                  e = c.v,
                  f = c.h;
                a.pf = c.s;
                Hb(a.L, f);
                0 == a.Ta && (a.I.start(), ch(a, a.I, d), "5" !== e && N("Protocol version mismatch detected"), c = a.rf, (c = 1 < c.Tc.length ? c.Tc[1] : null) && dh(a, c))
              } else if ("n" === d) {
              a.f("recvd end transmission on primary");
              a.Oc = a.D;
              for (c = 0; c < a.yd.length; ++c) a.ud(a.yd[c]);
              a.yd = [];
              eh(a)
            } else "s" === d ? (a.f("Connection shutdown command received. Shutting down..."),
              a.pe && (a.pe(c), a.pe = null), a.ia = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), Hb(a.L, c), 1 === a.Ta ? a.close() : (fh(a), $g(a))) : "e" === d ? oc("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), gh(a), hh(a)) : oc("Unknown control packet command: " + d)
          } else "d" == d && a.ud(c)
        } else if (b === a.D)
        if (d = uc("t", c), c = uc("d", c), "c" == d) "t" in c && (c = c.t, "a" === c ? ih(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.D.close(), a.Uc !== a.D && a.Oc !== a.D || a.close()) : "o" === c && (a.f("got pong on secondary."),
          a.nf--, ih(a)));
        else if ("d" == d) a.yd.push(c);
      else throw Error("Unknown protocol layer: " + d);
      else a.f("message on old connection")
    }
  }
  Zg.prototype.ua = function (a) {
    jh(this, {
      t: "d",
      d: a
    })
  };

  function eh(a) {
    a.Uc === a.D && a.Oc === a.D && (a.f("cleaning up and promoting a connection: " + a.D.Vd), a.I = a.D, a.D = null)
  }

  function ih(a) {
    0 >= a.nf ? (a.f("Secondary connection is healthy."), a.zb = !0, a.D.pd(), a.D.start(), a.f("sending client ack on secondary"), a.D.send({
      t: "c",
      d: {
        t: "a",
        d: {}
      }
    }), a.f("Ending transmission on primary"), a.I.send({
      t: "c",
      d: {
        t: "n",
        d: {}
      }
    }), a.Uc = a.D, eh(a)) : (a.f("sending ping on secondary."), a.D.send({
      t: "c",
      d: {
        t: "p",
        d: {}
      }
    }))
  }
  Zg.prototype.ud = function (a) {
    gh(this);
    this.qe(a)
  };

  function gh(a) {
    a.zb || (a.ue--, 0 >= a.ue && (a.f("Primary connection is healthy."), a.zb = !0, a.I.pd()))
  }

  function dh(a, b) {
    a.D = new b("c:" + a.id + ":" + a.He++, a.L, a.pf);
    a.nf = b.responsesRequiredToBeHealthy || 0;
    a.D.open(ah(a, a.D), bh(a, a.D));
    Cc(function () {
      a.D && (a.f("Timed out trying to upgrade."), a.D.close())
    }, Math.floor(6E4))
  }

  function ch(a, b, c) {
    a.f("Realtime connection established.");
    a.I = b;
    a.Ta = 1;
    a.Ic && (a.Ic(c, a.pf), a.Ic = null);
    0 === a.ue ? (a.f("Primary connection is healthy."), a.zb = !0) : Cc(function () {
      hh(a)
    }, Math.floor(5E3))
  }

  function hh(a) {
    a.zb || 1 !== a.Ta || (a.f("sending ping on primary."), jh(a, {
      t: "c",
      d: {
        t: "p",
        d: {}
      }
    }))
  }

  function jh(a, b) {
    if (1 !== a.Ta) throw "Connection is not connected";
    a.Uc.send(b)
  }
  Zg.prototype.close = function () {
    2 !== this.Ta && (this.f("Closing realtime connection."), this.Ta = 2, fh(this), this.ia && (this.ia(), this.ia = null))
  };

  function fh(a) {
    a.f("Shutting down all connections");
    a.I && (a.I.close(), a.I = null);
    a.D && (a.D.close(), a.D = null);
    a.jd && (clearTimeout(a.jd), a.jd = null)
  };

  function kh(a, b, c, d, e, f) {
    this.id = lh++;
    this.f = nc("p:" + this.id + ":");
    this.nd = {};
    this.$ = {};
    this.pa = [];
    this.Lc = 0;
    this.Hc = [];
    this.ma = !1;
    this.Ra = 1E3;
    this.qd = 3E5;
    this.Eb = b;
    this.Gc = c;
    this.re = d;
    this.L = a;
    this.mb = this.Ea = this.Ab = this.we = null;
    this.Xc = e;
    this.$d = !1;
    this.ge = 0;
    this.Rd = f;
    this.sb = null;
    this.Kb = !1;
    this.Ed = {};
    this.kg = 0;
    this.Oe = !0;
    this.xc = this.ie = null;
    mh(this, 0);
    Le.Tb().dc("visible", this.$f, this); - 1 === a.host.indexOf("fblocal") && Bg.Tb().dc("online", this.Zf, this)
  }
  var lh = 0,
    nh = 0;
  h = kh.prototype;
  h.ua = function (a, b, c) {
    var d = ++this.kg;
    a = {
      r: d,
      a: a,
      b: b
    };
    this.f(w(a));
    I(this.ma, "sendRequest call when we're not connected not allowed.");
    this.Ea.ua(a);
    c && (this.Ed[d] = c)
  };
  h.Xe = function (a, b, c, d) {
    var e = a.ja(),
      f = a.path.toString();
    this.f("Listen called for " + f + " " + e);
    this.$[f] = this.$[f] || {};
    I(Kc(a.m) || !X(a.m), "listen() called for non-default but complete query");
    I(!this.$[f][e], "listen() called twice for same path/queryId.");
    a = {
      G: d,
      hd: b,
      gg: a,
      tag: c
    };
    this.$[f][e] = a;
    this.ma && oh(this, a)
  };

  function oh(a, b) {
    var c = b.gg,
      d = c.path.toString(),
      e = c.ja();
    a.f("Listen on " + d + " for " + e);
    var f = {
      p: d
    };
    b.tag && (f.q = xf(c.m), f.t = b.tag);
    f.h = b.hd();
    a.ua("q", f, function (f) {
      var k = f.d,
        m = f.s;
      if (k && "object" === typeof k && cb(k, "w")) {
        var l = y(k, "w");
        ea(l) && 0 <= Ga(l, "no_index") && N("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.m.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance")
      }(a.$[d] && a.$[d][e]) === b && (a.f("listen response", f), "ok" !== m && ph(a, d, e), b.G && b.G(m,
        k))
    })
  }
  h.hf = function (a) {
    this.mb = a;
    this.f("Auth token refreshed");
    this.mb ? qh(this) : this.ma && this.ua("unauth", {}, function () {});
    if (a && 40 === a.length || Fc(a)) this.f("Admin auth credential detected.  Reducing max reconnect time."), this.qd = 3E4
  };

  function qh(a) {
    if (a.ma && a.mb) {
      var b = a.mb,
        c = Ec(b) ? "auth" : "gauth",
        d = {
          cred: b
        };
      null === a.Rd ? d.noauth = !0 : "object" === typeof a.Rd && (d.authvar = a.Rd);
      a.ua(c, d, function (c) {
        var d = c.s;
        c = c.d || "error";
        a.mb === b && ("ok" === d ? a.ge = 0 : rh(a, d, c))
      })
    }
  }
  h.tf = function (a, b) {
    var c = a.path.toString(),
      d = a.ja();
    this.f("Unlisten called for " + c + " " + d);
    I(Kc(a.m) || !X(a.m), "unlisten() called for non-default but complete query");
    if (ph(this, c, d) && this.ma) {
      var e = xf(a.m);
      this.f("Unlisten on " + c + " for " + d);
      c = {
        p: c
      };
      b && (c.q = e, c.t = b);
      this.ua("n", c)
    }
  };
  h.oe = function (a, b, c) {
    this.ma ? sh(this, "o", a, b, c) : this.Hc.push({
      te: a,
      action: "o",
      data: b,
      G: c
    })
  };
  h.bf = function (a, b, c) {
    this.ma ? sh(this, "om", a, b, c) : this.Hc.push({
      te: a,
      action: "om",
      data: b,
      G: c
    })
  };
  h.vd = function (a, b) {
    this.ma ? sh(this, "oc", a, null, b) : this.Hc.push({
      te: a,
      action: "oc",
      data: null,
      G: b
    })
  };

  function sh(a, b, c, d, e) {
    c = {
      p: c,
      d: d
    };
    a.f("onDisconnect " + b, c);
    a.ua(b, c, function (a) {
      e && setTimeout(function () {
        e(a.s, a.d)
      }, Math.floor(0))
    })
  }
  h.put = function (a, b, c, d) {
    th(this, "p", a, b, c, d)
  };
  h.Ye = function (a, b, c, d) {
    th(this, "m", a, b, c, d)
  };

  function th(a, b, c, d, e, f) {
    d = {
      p: c,
      d: d
    };
    n(f) && (d.h = f);
    a.pa.push({
      action: b,
      kf: d,
      G: e
    });
    a.Lc++;
    b = a.pa.length - 1;
    a.ma ? uh(a, b) : a.f("Buffering put: " + c)
  }

  function uh(a, b) {
    var c = a.pa[b].action,
      d = a.pa[b].kf,
      e = a.pa[b].G;
    a.pa[b].hg = a.ma;
    a.ua(c, d, function (d) {
      a.f(c + " response", d);
      delete a.pa[b];
      a.Lc--;
      0 === a.Lc && (a.pa = []);
      e && e(d.s, d.d)
    })
  }
  h.ve = function (a) {
    this.ma && (a = {
      c: a
    }, this.f("reportStats", a), this.ua("s", a, function (a) {
      "ok" !== a.s && this.f("reportStats", "Error sending stats: " + a.d)
    }))
  };
  h.ud = function (a) {
    if ("r" in a) {
      this.f("from server: " + w(a));
      var b = a.r,
        c = this.Ed[b];
      c && (delete this.Ed[b], c(a.b))
    } else {
      if ("error" in a) throw "A server-side error has occurred: " + a.error;
      "a" in a && (b = a.a, a = a.b, this.f("handleServerMessage", b, a), "d" === b ? this.Eb(a.p, a.d, !1, a.t) : "m" === b ? this.Eb(a.p, a.d, !0, a.t) : "c" === b ? vh(this, a.p, a.q) : "ac" === b ? rh(this, a.s, a.d) : "sd" === b ? this.we ? this.we(a) : "msg" in a && "undefined" !== typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : oc("Unrecognized action received from server: " +
        w(b) + "\nAre you using the latest client?"))
    }
  };
  h.Ic = function (a, b) {
    this.f("connection ready");
    this.ma = !0;
    this.xc = (new Date).getTime();
    this.re({
      serverTimeOffset: a - (new Date).getTime()
    });
    this.Ab = b;
    if (this.Oe) {
      var c = {};
      c["sdk.admin_node." + firebase.SDK_VERSION.replace(/\./g, "-")] = 1;
      Ag() ? c["framework.cordova"] = 1 : "object" === typeof navigator && "ReactNative" === navigator.product && (c["framework.reactnative"] = 1);
      this.ve(c)
    }
    wh(this);
    this.Oe = !1;
    this.Gc(!0)
  };

  function mh(a, b) {
    I(!a.Ea, "Scheduling a connect when we're already connected/ing?");
    a.sb && clearTimeout(a.sb);
    a.sb = setTimeout(function () {
      a.sb = null;
      xh(a)
    }, Math.floor(b))
  }
  h.$f = function (a) {
    a && !this.Kb && this.Ra === this.qd && (this.f("Window became visible.  Reducing delay."), this.Ra = 1E3, this.Ea || mh(this, 0));
    this.Kb = a
  };
  h.Zf = function (a) {
    a ? (this.f("Browser went online."), this.Ra = 1E3, this.Ea || mh(this, 0)) : (this.f("Browser went offline.  Killing connection."), this.Ea && this.Ea.close())
  };
  h.cf = function () {
    this.f("data client disconnected");
    this.ma = !1;
    this.Ea = null;
    for (var a = 0; a < this.pa.length; a++) {
      var b = this.pa[a];
      b && "h" in b.kf && b.hg && (b.G && b.G("disconnect"), delete this.pa[a], this.Lc--)
    }
    0 === this.Lc && (this.pa = []);
    this.Ed = {};
    yh(this) && (this.Kb ? this.xc && (3E4 < (new Date).getTime() - this.xc && (this.Ra = 1E3), this.xc = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.Ra = this.qd, this.ie = (new Date).getTime()), a = Math.max(0, this.Ra - ((new Date).getTime() - this.ie)), a *= Math.random(), this.f("Trying to reconnect in " +
      a + "ms"), mh(this, a), this.Ra = Math.min(this.qd, 1.3 * this.Ra));
    this.Gc(!1)
  };

  function xh(a) {
    if (yh(a)) {
      a.f("Making a connection attempt");
      a.ie = (new Date).getTime();
      a.xc = null;
      var b = q(a.ud, a),
        c = q(a.Ic, a),
        d = q(a.cf, a),
        e = a.id + ":" + nh++,
        f = a.Ab,
        g = !1,
        k = null,
        m = function () {
          k ? k.close() : (g = !0, d())
        };
      a.Ea = {
        close: m,
        ua: function (a) {
          I(k, "sendRequest call when we're not connected not allowed.");
          k.ua(a)
        }
      };
      var l = a.$d;
      a.$d = !1;
      a.Xc.getToken(l).then(function (l) {
        g ? C("getToken() completed but was canceled") : (C("getToken() completed. Creating connection."), a.mb = l && l.accessToken, k = new Zg(e, a.L, b, c, d, function (b) {
          N(b +
            " (" + a.L.toString() + ")");
          a.$a("server_kill")
        }, f))
      }).then(null, function (b) {
        a.f("Failed to get token: " + b);
        g || m()
      })
    }
  }
  h.$a = function (a) {
    C("Interrupting connection for reason: " + a);
    this.nd[a] = !0;
    this.Ea ? this.Ea.close() : (this.sb && (clearTimeout(this.sb), this.sb = null), this.ma && this.cf())
  };
  h.hc = function (a) {
    C("Resuming connection for reason: " + a);
    delete this.nd[a];
    Ea(this.nd) && (this.Ra = 1E3, this.Ea || mh(this, 0))
  };

  function vh(a, b, c) {
    c = c ? Ja(c, function (a) {
      return vc(a)
    }).join("$") : "default";
    (a = ph(a, b, c)) && a.G && a.G("permission_denied")
  }

  function ph(a, b, c) {
    b = (new J(b)).toString();
    var d;
    n(a.$[b]) ? (d = a.$[b][c], delete a.$[b][c], 0 === xa(a.$[b]) && delete a.$[b]) : d = void 0;
    return d
  }

  function rh(a, b, c) {
    C("Auth token revoked: " + b + "/" + c);
    a.mb = null;
    a.$d = !0;
    a.Ea.close();
    "invalid_token" === b && (a.ge++, 3 <= a.ge && (a.Ra = 3E4, a = a.Xc, b = 'Provided authentication credentials for the app named "' + a.lc.name + '" are invalid. This usually indicates your app was not initialized correctly. ', b = "credential" in a.lc.options ? b + 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in a.lc.options ?
      b + 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : b + 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', N(b)))
  }

  function wh(a) {
    qh(a);
    t(a.$, function (b) {
      t(b, function (b) {
        oh(a, b)
      })
    });
    for (var b = 0; b < a.pa.length; b++) a.pa[b] && uh(a, b);
    for (; a.Hc.length;) b = a.Hc.shift(), sh(a, b.action, b.te, b.data, b.G)
  }

  function yh(a) {
    var b;
    b = Bg.Tb().ec;
    return Ea(a.nd) && b
  };
  var Y = {
    Of: function () {
      Gg = Rg = !0
    }
  };
  Y.forceLongPolling = Y.Of;
  Y.Pf = function () {
    Hg = !0
  };
  Y.forceWebSockets = Y.Pf;
  Y.Vf = function () {
    return Qg.isAvailable()
  };
  Y.isWebSocketsAvailable = Y.Vf;
  Y.ng = function (a, b) {
    a.u.Qa.we = b
  };
  Y.setSecurityDebugCallback = Y.ng;
  Y.ye = function (a, b) {
    a.u.ye(b)
  };
  Y.stats = Y.ye;
  Y.ze = function (a, b) {
    a.u.ze(b)
  };
  Y.statsIncrementCounter = Y.ze;
  Y.cd = function (a) {
    return a.u.cd
  };
  Y.dataUpdateCount = Y.cd;
  Y.Uf = function (a, b) {
    a.u.fe = b
  };
  Y.interceptServerData = Y.Uf;

  function Gd(a, b, c) {
    this.app = c;
    var d = new nb(c);
    this.L = a;
    this.Ua = td(a);
    this.Sc = null;
    this.ca = new ef;
    this.td = 1;
    this.Qa = null;
    if (b || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) this.va = new Ic(this.L, q(this.Eb, this), d), setTimeout(q(this.Gc, this, !0), 0);
    else {
      b = c.options.databaseAuthVariableOverride;
      if ("undefined" !== da(b) && null !== b) {
        if ("object" !== da(b)) throw Error("Only objects are supported for option databaseAuthVariableOverride");
        try {
          w(b)
        } catch (e) {
          throw Error("Invalid authOverride provided: " + e);
        }
      }
      this.va = this.Qa = new kh(this.L, q(this.Eb, this), q(this.Gc, this), q(this.re, this), d, b)
    }
    var f = this;
    ob(d, function (a) {
      f.va.hf(a)
    });
    this.qg = ud(a, q(function () {
      return new qd(this.Ua, this.va)
    }, this));
    this.jc = new pe;
    this.ee = new xb;
    this.md = new fg({
      xe: function (a, b, c, d) {
        b = [];
        c = f.ee.j(a.path);
        c.e() || (b = hg(f.md, new rb(ne, a.path, c)), setTimeout(function () {
          d("ok")
        }, 0));
        return b
      },
      Ld: ba
    });
    zh(this, "connected", !1);
    this.ia = new Nb;
    this.Xa = new Fd(this);
    this.cd =
      0;
    this.fe = null;
    this.K = new fg({
      xe: function (a, b, c, d) {
        f.va.Xe(a, c, b, function (b, c) {
          var e = d(b, c);
          kf(f.ca, a.path, e)
        });
        return []
      },
      Ld: function (a, b) {
        f.va.tf(a, b)
      }
    })
  }
  h = Gd.prototype;
  h.toString = function () {
    return (this.L.Pc ? "https://" : "http://") + this.L.host
  };
  h.name = function () {
    return this.L.me
  };

  function Ah(a) {
    a = a.ee.j(new J(".info/serverTimeOffset")).H() || 0;
    return (new Date).getTime() + a
  }

  function Bh(a) {
    a = a = {
      timestamp: Ah(a)
    };
    a.timestamp = a.timestamp || (new Date).getTime();
    return a
  }
  h.Eb = function (a, b, c, d) {
    this.cd++;
    var e = new J(a);
    b = this.fe ? this.fe(a, b) : b;
    a = [];
    d ? c ? (b = va(b, function (a) {
      return K(a)
    }), a = pg(this.K, e, b, d)) : (b = K(b), a = lg(this.K, e, b, d)) : c ? (d = va(b, function (a) {
      return K(a)
    }), a = kg(this.K, e, d)) : (d = K(b), a = hg(this.K, new rb(ne, e, d)));
    d = e;
    0 < a.length && (d = Ch(this, e));
    kf(this.ca, d, a)
  };
  h.Gc = function (a) {
    zh(this, "connected", a);
    !1 === a && Dh(this)
  };
  h.re = function (a) {
    var b = this;
    xc(a, function (a, d) {
      zh(b, d, a)
    })
  };

  function zh(a, b, c) {
    b = new J("/.info/" + b);
    c = K(c);
    var d = a.ee;
    d.Hd = d.Hd.F(b, c);
    c = hg(a.md, new rb(ne, b, c));
    kf(a.ca, b, c)
  }
  h.Hb = function (a, b, c, d) {
    this.f("set", {
      path: a.toString(),
      value: b,
      zg: c
    });
    var e = Bh(this);
    b = K(b, c);
    var e = Qb(b, e),
      f = this.td++,
      e = gg(this.K, a, e, f, !0);
    ff(this.ca, e);
    var g = this;
    this.va.put(a.toString(), b.H(!0), function (b, c) {
      var e = "ok" === b;
      e || N("set at " + a + " failed: " + b);
      e = jg(g.K, f, !e);
      kf(g.ca, a, e);
      Eh(d, b, c)
    });
    e = Fh(this, a);
    Ch(this, e);
    kf(this.ca, e, [])
  };
  h.update = function (a, b, c) {
    this.f("update", {
      path: a.toString(),
      value: b
    });
    var d = !0,
      e = Bh(this),
      f = {};
    t(b, function (a, b) {
      d = !1;
      var c = K(a);
      f[b] = Qb(c, e)
    });
    if (d) C("update() called with empty data.  Don't do anything."), Eh(c, "ok");
    else {
      var g = this.td++,
        k = ig(this.K, a, f, g);
      ff(this.ca, k);
      var m = this;
      this.va.Ye(a.toString(), b, function (b, d) {
        var e = "ok" === b;
        e || N("update at " + a + " failed: " + b);
        var e = jg(m.K, g, !e),
          f = a;
        0 < e.length && (f = Ch(m, a));
        kf(m.ca, f, e);
        Eh(c, b, d)
      });
      t(b, function (b, c) {
        var d = Fh(m, a.n(c));
        Ch(m, d)
      });
      kf(this.ca,
        a, [])
    }
  };

  function Dh(a) {
    a.f("onDisconnectEvents");
    var b = Bh(a),
      c = [];
    Ob(Mb(a.ia, b), D, function (b, e) {
      c = c.concat(hg(a.K, new rb(ne, b, e)));
      var f = Fh(a, b);
      Ch(a, f)
    });
    a.ia = new Nb;
    kf(a.ca, D, c)
  }
  h.vd = function (a, b) {
    var c = this;
    this.va.vd(a.toString(), function (d, e) {
      "ok" === d && Md(c.ia, a);
      Eh(b, d, e)
    })
  };

  function Ie(a, b, c, d) {
    var e = K(c);
    a.va.oe(b.toString(), e.H(!0), function (c, g) {
      "ok" === c && Pb(a.ia, b, e);
      Eh(d, c, g)
    })
  }

  function Je(a, b, c, d, e) {
    var f = K(c, d);
    a.va.oe(b.toString(), f.H(!0), function (c, d) {
      "ok" === c && Pb(a.ia, b, f);
      Eh(e, c, d)
    })
  }

  function Ke(a, b, c, d) {
    var e = !0,
      f;
    for (f in c) e = !1;
    e ? (C("onDisconnect().update() called with empty data.  Don't do anything."), Eh(d, "ok")) : a.va.bf(b.toString(), c, function (e, f) {
      if ("ok" === e)
        for (var m in c) {
          var l = K(c[m]);
          Pb(a.ia, b.n(m), l)
        }
      Eh(d, e, f)
    })
  }

  function vf(a, b, c) {
    c = ".info" === O(b.path) ? a.md.Lb(b, c) : a.K.Lb(b, c);
    hf(a.ca, b.path, c)
  }
  h.$a = function () {
    this.Qa && this.Qa.$a("repo_interrupt")
  };
  h.hc = function () {
    this.Qa && this.Qa.hc("repo_interrupt")
  };
  h.ye = function (a) {
    if ("undefined" !== typeof console) {
      a ? (this.Sc || (this.Sc = new Ab(this.Ua)), a = this.Sc.get()) : a = this.Ua.get();
      var b = Ka(Aa(a), function (a, b) {
          return Math.max(b.length, a)
        }, 0),
        c;
      for (c in a) {
        for (var d = a[c], e = c.length; e < b + 2; e++) c += " ";
        console.log(c + d)
      }
    }
  };
  h.ze = function (a) {
    zb(this.Ua, a);
    this.qg.qf[a] = !0
  };
  h.f = function (a) {
    var b = "";
    this.Qa && (b = this.Qa.id + ":");
    C(b, arguments)
  };

  function Eh(a, b, c) {
    a && Ac(function () {
      if ("ok" == b) a(null);
      else {
        var d = (b || "error").toUpperCase(),
          e = d;
        c && (e += ": " + c);
        e = Error(e);
        e.code = d;
        a(e)
      }
    })
  };

  function Gh(a, b, c, d, e) {
    function f() {}
    a.f("transaction on " + b);
    var g = new R(a, b);
    g.dc("value", f);
    c = {
      path: b,
      update: c,
      G: d,
      status: null,
      df: fc(),
      Ee: e,
      mf: 0,
      Nd: function () {
        g.Fc("value", f)
      },
      Pd: null,
      Ba: null,
      $c: null,
      ad: null,
      bd: null
    };
    d = a.K.Aa(b, void 0) || H;
    c.$c = d;
    d = c.update(d.H());
    if (n(d)) {
      Ae("transaction failed: Data returned ", d, c.path);
      c.status = 1;
      e = qe(a.jc, b);
      var k = e.Ca() || [];
      k.push(c);
      re(e, k);
      "object" === typeof d && null !== d && cb(d, ".priority") ? (k = y(d, ".priority"), I(ye(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) :
        k = (a.K.Aa(b) || H).C().H();
      e = Bh(a);
      d = K(d, k);
      e = Qb(d, e);
      c.ad = d;
      c.bd = e;
      c.Ba = a.td++;
      c = gg(a.K, b, e, c.Ba, c.Ee);
      kf(a.ca, b, c);
      Hh(a)
    } else c.Nd(), c.ad = null, c.bd = null, c.G && (a = new T(c.$c, new R(a, c.path), L), c.G(null, !1, a))
  }

  function Hh(a, b) {
    var c = b || a.jc;
    b || Ih(a, c);
    if (null !== c.Ca()) {
      var d = Jh(a, c);
      I(0 < d.length, "Sending zero length transaction queue");
      La(d, function (a) {
        return 1 === a.status
      }) && Kh(a, c.path(), d)
    } else c.gd() && c.O(function (b) {
      Hh(a, b)
    })
  }

  function Kh(a, b, c) {
    for (var d = Ja(c, function (a) {
        return a.Ba
      }), e = a.K.Aa(b, d) || H, d = e, e = e.hash(), f = 0; f < c.length; f++) {
      var g = c[f];
      I(1 === g.status, "tryToSendTransactionQueue_: items in queue should all be run.");
      g.status = 2;
      g.mf++;
      var k = Q(b, g.path),
        d = d.F(k, g.ad)
    }
    d = d.H(!0);
    a.va.put(b.toString(), d, function (d) {
      a.f("transaction put response", {
        path: b.toString(),
        status: d
      });
      var e = [];
      if ("ok" === d) {
        d = [];
        for (f = 0; f < c.length; f++) {
          c[f].status = 3;
          e = e.concat(jg(a.K, c[f].Ba));
          if (c[f].G) {
            var g = c[f].bd,
              k = new R(a, c[f].path);
            d.push(q(c[f].G,
              null, null, !0, new T(g, k, L)))
          }
          c[f].Nd()
        }
        Ih(a, qe(a.jc, b));
        Hh(a);
        kf(a.ca, b, e);
        for (f = 0; f < d.length; f++) Ac(d[f])
      } else {
        if ("datastale" === d)
          for (f = 0; f < c.length; f++) c[f].status = 4 === c[f].status ? 5 : 1;
        else
          for (N("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++) c[f].status = 5, c[f].Pd = d;
        Ch(a, b)
      }
    }, e)
  }

  function Ch(a, b) {
    var c = Lh(a, b),
      d = c.path(),
      c = Jh(a, c);
    Mh(a, c, d);
    return d
  }

  function Mh(a, b, c) {
    if (0 !== b.length) {
      for (var d = [], e = [], f = Ia(b, function (a) {
          return 1 === a.status
        }), f = Ja(f, function (a) {
          return a.Ba
        }), g = 0; g < b.length; g++) {
        var k = b[g],
          m = Q(c, k.path),
          l = !1,
          r;
        I(null !== m, "rerunTransactionsUnderNode_: relativePath should not be null.");
        if (5 === k.status) l = !0, r = k.Pd, e = e.concat(jg(a.K, k.Ba, !0));
        else if (1 === k.status)
          if (25 <= k.mf) l = !0, r = "maxretry", e = e.concat(jg(a.K, k.Ba, !0));
          else {
            var x = a.K.Aa(k.path, f) || H;
            k.$c = x;
            var F = b[g].update(x.H());
            n(F) ? (Ae("transaction failed: Data returned ", F,
              k.path), m = K(F), "object" === typeof F && null != F && cb(F, ".priority") || (m = m.fa(x.C())), x = k.Ba, F = Bh(a), F = Qb(m, F), k.ad = m, k.bd = F, k.Ba = a.td++, Oa(f, x), e = e.concat(gg(a.K, k.path, F, k.Ba, k.Ee)), e = e.concat(jg(a.K, x, !0))) : (l = !0, r = "nodata", e = e.concat(jg(a.K, k.Ba, !0)))
          }
        kf(a.ca, c, e);
        e = [];
        l && (b[g].status = 3, setTimeout(b[g].Nd, Math.floor(0)), b[g].G && ("nodata" === r ? (k = new R(a, b[g].path), d.push(q(b[g].G, null, null, !1, new T(b[g].$c, k, L)))) : d.push(q(b[g].G, null, Error(r), !1, null))))
      }
      Ih(a, a.jc);
      for (g = 0; g < d.length; g++) Ac(d[g]);
      Hh(a)
    }
  }

  function Lh(a, b) {
    for (var c, d = a.jc; null !== (c = O(b)) && null === d.Ca();) d = qe(d, c), b = E(b);
    return d
  }

  function Jh(a, b) {
    var c = [];
    Nh(a, b, c);
    c.sort(function (a, b) {
      return a.df - b.df
    });
    return c
  }

  function Nh(a, b, c) {
    var d = b.Ca();
    if (null !== d)
      for (var e = 0; e < d.length; e++) c.push(d[e]);
    b.O(function (b) {
      Nh(a, b, c)
    })
  }

  function Ih(a, b) {
    var c = b.Ca();
    if (c) {
      for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
      c.length = d;
      re(b, 0 < c.length ? c : null)
    }
    b.O(function (b) {
      Ih(a, b)
    })
  }

  function Fh(a, b) {
    var c = Lh(a, b).path(),
      d = qe(a.jc, b);
    ue(d, function (b) {
      Oh(a, b)
    });
    Oh(a, d);
    te(d, function (b) {
      Oh(a, b)
    });
    return c
  }

  function Oh(a, b) {
    var c = b.Ca();
    if (null !== c) {
      for (var d = [], e = [], f = -1, g = 0; g < c.length; g++) 4 !== c[g].status && (2 === c[g].status ? (I(f === g - 1, "All SENT items should be at beginning of queue."), f = g, c[g].status = 4, c[g].Pd = "set") : (I(1 === c[g].status, "Unexpected transaction status in abort"), c[g].Nd(), e = e.concat(jg(a.K, c[g].Ba, !0)), c[g].G && d.push(q(c[g].G, null, Error("set"), !1, null)))); - 1 === f ? re(b, null) : c.length = f + 1;
      kf(a.ca, b.path(), e);
      for (g = 0; g < d.length; g++) Ac(d[g])
    }
  };

  function Ld() {
    this.jb = {};
    this.uf = !1
  }
  Ld.prototype.$a = function () {
    for (var a in this.jb) this.jb[a].$a()
  };
  Ld.prototype.hc = function () {
    for (var a in this.jb) this.jb[a].hc()
  };
  Ld.prototype.Zd = function (a) {
    this.uf = a
  };
  ca(Ld);
  Ld.prototype.interrupt = Ld.prototype.$a;
  Ld.prototype.resume = Ld.prototype.hc;
  var Z = {};
  Z.kc = kh;
  Z.DataConnection = Z.kc;
  kh.prototype.pg = function (a, b) {
    this.ua("q", {
      p: a
    }, b)
  };
  Z.kc.prototype.simpleListen = Z.kc.prototype.pg;
  kh.prototype.If = function (a, b) {
    this.ua("echo", {
      d: a
    }, b)
  };
  Z.kc.prototype.echo = Z.kc.prototype.If;
  kh.prototype.interrupt = kh.prototype.$a;
  Z.yf = Zg;
  Z.RealTimeConnection = Z.yf;
  Zg.prototype.sendRequest = Zg.prototype.ua;
  Zg.prototype.close = Zg.prototype.close;
  Z.Tf = function (a) {
    var b = kh.prototype.put;
    kh.prototype.put = function (c, d, e, f) {
      n(f) && (f = a());
      b.call(this, c, d, e, f)
    };
    return function () {
      kh.prototype.put = b
    }
  };
  Z.hijackHash = Z.Tf;
  Z.xf = Gb;
  Z.ConnectionTarget = Z.xf;
  Z.ja = function (a) {
    return a.ja()
  };
  Z.queryIdentifier = Z.ja;
  Z.Wf = function (a) {
    return a.u.Qa.$
  };
  Z.listens = Z.Wf;
  Z.Zd = function (a) {
    Ld.Tb().Zd(a)
  };
  Z.forceRestClient = Z.Zd;
  Z.Context = Ld;

  function R(a, b) {
    if (!(a instanceof Gd)) throw Error("new Firebase() no longer supported - use app.database().");
    W.call(this, a, b, Ef, !1);
    this.then = void 0;
    this["catch"] = void 0
  }
  la(R, W);
  h = R.prototype;
  h.getKey = function () {
    z("Firebase.key", 0, 0, arguments.length);
    return this.path.e() ? null : Bd(this.path)
  };
  h.n = function (a) {
    z("Firebase.child", 1, 1, arguments.length);
    if (ga(a)) a = String(a);
    else if (!(a instanceof J))
      if (null === O(this.path)) {
        var b = a;
        b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
        Ge("Firebase.child", b)
      } else Ge("Firebase.child", a);
    return new R(this.u, this.path.n(a))
  };
  h.getParent = function () {
    z("Firebase.parent", 0, 0, arguments.length);
    var a = this.path.parent();
    return null === a ? null : new R(this.u, a)
  };
  h.Qf = function () {
    z("Firebase.ref", 0, 0, arguments.length);
    for (var a = this; null !== a.getParent();) a = a.getParent();
    return a
  };
  h.Gf = function () {
    return this.u.Xa
  };
  h.set = function (a, b) {
    z("Firebase.set", 1, 2, arguments.length);
    He("Firebase.set", this.path);
    ze("Firebase.set", a, this.path, !1);
    B("Firebase.set", 2, b, !0);
    var c = new fb;
    this.u.Hb(this.path, a, null, gb(c, b));
    return c.ra
  };
  h.update = function (a, b) {
    z("Firebase.update", 1, 2, arguments.length);
    He("Firebase.update", this.path);
    if (ea(a)) {
      for (var c = {}, d = 0; d < a.length; ++d) c["" + d] = a[d];
      a = c;
      N("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
    }
    Ce("Firebase.update", a, this.path);
    B("Firebase.update", 2, b, !0);
    c = new fb;
    this.u.update(this.path, a, gb(c, b));
    return c.ra
  };
  h.Hb = function (a, b, c) {
    z("Firebase.setWithPriority", 2, 3, arguments.length);
    He("Firebase.setWithPriority", this.path);
    ze("Firebase.setWithPriority", a, this.path, !1);
    De("Firebase.setWithPriority", 2, b);
    B("Firebase.setWithPriority", 3, c, !0);
    if (".length" === this.getKey() || ".keys" === this.getKey()) throw "Firebase.setWithPriority failed: " + this.getKey() + " is a read-only object.";
    var d = new fb;
    this.u.Hb(this.path, a, b, gb(d, c));
    return d.ra
  };
  h.remove = function (a) {
    z("Firebase.remove", 0, 1, arguments.length);
    He("Firebase.remove", this.path);
    B("Firebase.remove", 1, a, !0);
    return this.set(null, a)
  };
  h.transaction = function (a, b, c) {
    z("Firebase.transaction", 1, 3, arguments.length);
    He("Firebase.transaction", this.path);
    B("Firebase.transaction", 1, a, !1);
    B("Firebase.transaction", 2, b, !0);
    if (n(c) && "boolean" != typeof c) throw Error(A("Firebase.transaction", 3, !0) + "must be a boolean.");
    if (".length" === this.getKey() || ".keys" === this.getKey()) throw "Firebase.transaction failed: " + this.getKey() + " is a read-only object.";
    "undefined" === typeof c && (c = !0);
    var d = new fb;
    ha(b) && hb(d.ra);
    Gh(this.u, this.path, a, function (a, c, g) {
      a ?
        d.reject(a) : d.resolve(new mb(c, g));
      ha(b) && b(a, c, g)
    }, c);
    return d.ra
  };
  h.mg = function (a, b) {
    z("Firebase.setPriority", 1, 2, arguments.length);
    He("Firebase.setPriority", this.path);
    De("Firebase.setPriority", 1, a);
    B("Firebase.setPriority", 2, b, !0);
    var c = new fb;
    this.u.Hb(this.path.n(".priority"), a, null, gb(c, b));
    return c.ra
  };
  h.push = function (a, b) {
    z("Firebase.push", 0, 2, arguments.length);
    He("Firebase.push", this.path);
    ze("Firebase.push", a, this.path, !0);
    B("Firebase.push", 2, b, !0);
    var c = Ah(this.u),
      d = zd(c),
      c = this.n(d);
    if (null != a) {
      var e = this,
        f = c.set(a, b).then(function () {
          return e.n(d)
        });
      c.then = q(f.then, f);
      c["catch"] = q(f.then, f, void 0);
      ha(b) && hb(f)
    }
    return c
  };
  h.gb = function () {
    He("Firebase.onDisconnect", this.path);
    return new U(this.u, this.path)
  };
  R.prototype.child = R.prototype.n;
  R.prototype.set = R.prototype.set;
  R.prototype.update = R.prototype.update;
  R.prototype.setWithPriority = R.prototype.Hb;
  R.prototype.remove = R.prototype.remove;
  R.prototype.transaction = R.prototype.transaction;
  R.prototype.setPriority = R.prototype.mg;
  R.prototype.push = R.prototype.push;
  R.prototype.onDisconnect = R.prototype.gb;
  Bc(R.prototype, "database", R.prototype.Gf);
  Bc(R.prototype, "key", R.prototype.getKey);
  Bc(R.prototype, "parent", R.prototype.getParent);
  Bc(R.prototype, "root", R.prototype.Qf);
  if ("undefined" === typeof firebase) throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
  try {
    var Ph = firebase.INTERNAL.registerService("database", function (a) {
      var b = Ld.Tb(),
        c = a.options.databaseURL;
      n(c) || pc("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");
      var d = qc(c),
        c = d.gc;
      Kd("Invalid Firebase Database URL", d);
      d.path.e() || pc("Database URL must point to the root of a Firebase Database (not including a child path).");
      (d = y(b.jb, a.name)) && pc("FIREBASE INTERNAL ERROR: Database initialized multiple times.");
      d = new Gd(c, b.uf,
        a);
      b.jb[a.name] = d;
      return d.Xa
    }, {
      Reference: R,
      Query: W,
      Database: Fd,
      enableLogging: mc,
      INTERNAL: Y,
      TEST_ACCESS: Z,
      ServerValue: Id
    });
    Ph.showLogs = function (is_log) {
      if(is_log){
        kc = console.log;
        lc = !1;
      } else {
        kc = null;
        lc = !0;
      }
    };
    module.exports = Ph
  } catch (Qh) {
    pc("Failed to register the Firebase Database Service (" + Qh + ")")
  };
})();
