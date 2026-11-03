(((e, t) => {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
      ? t(e, !0)
      : function (e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document");
      })
    : t(e);
})("undefined" != typeof window ? window : this, function (E, N) {
  function b(e) {
    return (
      "function" == typeof e &&
      "number" != typeof e.nodeType &&
      "function" != typeof e.item
    );
  }
  function z(e) {
    return null != e && e === e.window;
  }
  var t = [],
    H = Object.getPrototypeOf,
    o = t.slice,
    q = t.flat
      ? function (e) {
        return t.flat.call(e);
      }
      : function (e) {
        return t.concat.apply([], e);
      },
    R = t.push,
    w = t.indexOf,
    F = {},
    B = F.toString,
    $ = F.hasOwnProperty,
    W = $.toString,
    X = W.call(Object),
    m = {},
    _ = E.document,
    G = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function Y(e, t, i) {
    var r,
      n,
      s = (i = i || _).createElement("script");
    if (((s.text = e), t))
      for (r in G)
        (n = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          s.setAttribute(r, n);
    i.head.appendChild(s).parentNode.removeChild(s);
  }
  function V(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? F[B.call(e)] || "object"
        : typeof e;
  }
  var e = "3.7.1",
    U = /HTML$/i,
    T = function (e, t) {
      return new T.fn.init(e, t);
    };
  function K(e) {
    var t = !!e && "length" in e && e.length,
      i = V(e);
    return (
      !b(e) &&
      !z(e) &&
      ("array" === i ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function y(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ((T.fn = T.prototype =
  {
    jquery: e,
    constructor: T,
    length: 0,
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e
        ? o.call(this)
        : e < 0
          ? this[e + this.length]
          : this[e];
    },
    pushStack: function (e) {
      e = T.merge(this.constructor(), e);
      return ((e.prevObject = this), e);
    },
    each: function (e) {
      return T.each(this, e);
    },
    map: function (i) {
      return this.pushStack(
        T.map(this, function (e, t) {
          return i.call(e, t, e);
        }),
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        T.grep(this, function (e, t) {
          return (t + 1) % 2;
        }),
      );
    },
    odd: function () {
      return this.pushStack(
        T.grep(this, function (e, t) {
          return t % 2;
        }),
      );
    },
    eq: function (e) {
      var t = this.length,
        e = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= e && e < t ? [this[e]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: R,
    sort: t.sort,
    splice: t.splice,
  }),
    (T.extend = T.fn.extend =
      function () {
        var e,
          t,
          i,
          r,
          n,
          s = arguments[0] || {},
          a = 1,
          o = arguments.length,
          l = !1;
        for (
          "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
          "object" == typeof s || b(s) || (s = {}),
          a === o && ((s = this), a--);
          a < o;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              ((i = e[t]),
                "__proto__" !== t &&
                s !== i &&
                (l && i && (T.isPlainObject(i) || (r = Array.isArray(i)))
                  ? ((n = s[t]),
                    (n =
                      r && !Array.isArray(n)
                        ? []
                        : r || T.isPlainObject(n)
                          ? n
                          : {}),
                    (r = !1),
                    (s[t] = T.extend(l, n, i)))
                  : void 0 !== i && (s[t] = i)));
        return s;
      }),
    T.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () { },
      isPlainObject: function (e) {
        return !(
          !e ||
          "[object Object]" !== B.call(e) ||
          ((e = H(e)) &&
            ("function" !=
              typeof (e = $.call(e, "constructor") && e.constructor) ||
              W.call(e) !== X))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, i) {
        Y(e, { nonce: t && t.nonce }, i);
      },
      each: function (e, t) {
        var i,
          r = 0;
        if (K(e))
          for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          i = "",
          r = 0,
          n = e.nodeType;
        if (!n) for (; (t = e[r++]);) i += T.text(t);
        return 1 === n || 11 === n
          ? e.textContent
          : 9 === n
            ? e.documentElement.textContent
            : 3 === n || 4 === n
              ? e.nodeValue
              : i;
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
          (K(Object(e))
            ? T.merge(t, "string" == typeof e ? [e] : e)
            : R.call(t, e)),
          t
        );
      },
      inArray: function (e, t, i) {
        return null == t ? -1 : w.call(t, e, i);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          e = e && (e.ownerDocument || e).documentElement;
        return !U.test(t || (e && e.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var i = +t.length, r = 0, n = e.length; r < i; r++) e[n++] = t[r];
        return ((e.length = n), e);
      },
      grep: function (e, t, i) {
        for (var r = [], n = 0, s = e.length, a = !i; n < s; n++)
          !t(e[n], n) != a && r.push(e[n]);
        return r;
      },
      map: function (e, t, i) {
        var r,
          n,
          s = 0,
          a = [];
        if (K(e))
          for (r = e.length; s < r; s++)
            null != (n = t(e[s], s, i)) && a.push(n);
        else for (s in e) null != (n = t(e[s], s, i)) && a.push(n);
        return q(a);
      },
      guid: 1,
      support: m,
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]),
    T.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        F["[object " + t + "]"] = t.toLowerCase();
      },
    ));
  var Q = t.pop,
    J = t.sort,
    Z = t.splice,
    i = "[\\x20\\t\\r\\n\\f]",
    ee = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
    te =
      ((T.contains = function (e, t) {
        t = t && t.parentNode;
        return (
          e === t ||
          !(
            !t ||
            1 !== t.nodeType ||
            !(e.contains
              ? e.contains(t)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t))
          )
        );
      }),
        /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);
  function ie(e, t) {
    return t
      ? "\0" === e
        ? "�"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  T.escapeSelector = function (e) {
    return (e + "").replace(te, ie);
  };
  var re,
    x,
    ne,
    se,
    ae,
    S,
    r,
    C,
    p,
    oe,
    n = _,
    le = R,
    M = le,
    A = T.expando,
    k = 0,
    de = 0,
    ce = ke(),
    ue = ke(),
    pe = ke(),
    fe = ke(),
    he = function (e, t) {
      return (e === t && (ae = !0), 0);
    },
    me =
      "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    e =
      "(?:\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
    s =
      "\\[" +
      i +
      "*(" +
      e +
      ")(?:" +
      i +
      "*([*^$|!~]?=)" +
      i +
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
      e +
      "))|)" +
      i +
      "*\\]",
    a =
      ":(" +
      e +
      ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
      s +
      ")*)|.*)\\)|)",
    ge = new RegExp(i + "+", "g"),
    ve = new RegExp("^" + i + "*," + i + "*"),
    be = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
    ye = new RegExp(i + "|>"),
    we = new RegExp(a),
    xe = new RegExp("^" + e + "$"),
    Ee = {
      ID: new RegExp("^#(" + e + ")"),
      CLASS: new RegExp("^\\.(" + e + ")"),
      TAG: new RegExp("^(" + e + "|[*])"),
      ATTR: new RegExp("^" + s),
      PSEUDO: new RegExp("^" + a),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
        i +
        "*(even|odd|(([+-]|)(\\d*)n|)" +
        i +
        "*(?:([+-]|)" +
        i +
        "*(\\d+)|))" +
        i +
        "*\\)|)",
        "i",
      ),
      bool: new RegExp("^(?:" + me + ")$", "i"),
      needsContext: new RegExp(
        "^" +
        i +
        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
        i +
        "*((?:-\\d)?\\d*)" +
        i +
        "*\\)|)(?=[^-]|$)",
        "i",
      ),
    },
    _e = /^(?:input|select|textarea|button)$/i,
    Te = /^h\d$/i,
    Se = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    Ce = /[+~]/,
    u = new RegExp("\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\([^\\r\\n\\f])", "g"),
    f = function (e, t) {
      e = "0x" + e.slice(1) - 65536;
      return (
        t ||
        (e < 0
          ? String.fromCharCode(65536 + e)
          : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
      );
    },
    Me = function () {
      Ie();
    },
    Ae = He(
      function (e) {
        return !0 === e.disabled && y(e, "fieldset");
      },
      { dir: "parentNode", next: "legend" },
    );
  try {
    (M.apply((t = o.call(n.childNodes)), n.childNodes),
      t[n.childNodes.length].nodeType);
  } catch (re) {
    M = {
      apply: function (e, t) {
        le.apply(e, o.call(t));
      },
      call: function (e) {
        le.apply(e, o.call(arguments, 1));
      },
    };
  }
  function L(e, t, i, r) {
    var n,
      s,
      a,
      o,
      l,
      d,
      c = t && t.ownerDocument,
      u = t ? t.nodeType : 9;
    if (
      ((i = i || []),
        "string" != typeof e || !e || (1 !== u && 9 !== u && 11 !== u))
    )
      return i;
    if (!r && (Ie(t), (t = t || S), C)) {
      if (11 !== u && (o = Se.exec(e)))
        if ((n = o[1])) {
          if (9 === u) {
            if (!(d = t.getElementById(n))) return i;
            if (d.id === n) return (M.call(i, d), i);
          } else if (
            c &&
            (d = c.getElementById(n)) &&
            L.contains(t, d) &&
            d.id === n
          )
            return (M.call(i, d), i);
        } else {
          if (o[2]) return (M.apply(i, t.getElementsByTagName(e)), i);
          if ((n = o[3]) && t.getElementsByClassName)
            return (M.apply(i, t.getElementsByClassName(n)), i);
        }
      if (!(fe[e + " "] || (p && p.test(e)))) {
        if (((d = e), (c = t), 1 === u && (ye.test(e) || be.test(e)))) {
          for (
            ((c = (Ce.test(e) && De(t.parentNode)) || t) == t && m.scope) ||
            ((a = t.getAttribute("id"))
              ? (a = T.escapeSelector(a))
              : t.setAttribute("id", (a = A))),
            s = (l = Ne(e)).length;
            s--;
          )
            l[s] = (a ? "#" + a : ":scope") + " " + ze(l[s]);
          d = l.join(",");
        }
        try {
          return (M.apply(i, c.querySelectorAll(d)), i);
        } catch (t) {
          fe(e, !0);
        } finally {
          a === A && t.removeAttribute("id");
        }
      }
    }
    return $e(e.replace(ee, "$1"), t, i, r);
  }
  function ke() {
    var r = [];
    return function e(t, i) {
      return (
        r.push(t + " ") > x.cacheLength && delete e[r.shift()],
        (e[t + " "] = i)
      );
    };
  }
  function l(e) {
    return ((e[A] = !0), e);
  }
  function Le(e) {
    var t = S.createElement("fieldset");
    try {
      return !!e(t);
    } catch (e) {
      return !1;
    } finally {
      t.parentNode && t.parentNode.removeChild(t);
    }
  }
  function Oe(t) {
    return function (e) {
      return "form" in e
        ? e.parentNode && !1 === e.disabled
          ? "label" in e
            ? "label" in e.parentNode
              ? e.parentNode.disabled === t
              : e.disabled === t
            : e.isDisabled === t || (e.isDisabled !== !t && Ae(e) === t)
          : e.disabled === t
        : "label" in e && e.disabled === t;
    };
  }
  function Pe(a) {
    return l(function (s) {
      return (
        (s = +s),
        l(function (e, t) {
          for (var i, r = a([], e.length, s), n = r.length; n--;)
            e[(i = r[n])] && (e[i] = !(t[i] = e[i]));
        })
      );
    });
  }
  function De(e) {
    return e && void 0 !== e.getElementsByTagName && e;
  }
  function Ie(e) {
    var e = e ? e.ownerDocument || e : n;
    return (
      e != S &&
      9 === e.nodeType &&
      e.documentElement &&
      ((r = (S = e).documentElement),
        (C = !T.isXMLDoc(S)),
        (oe = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
        r.msMatchesSelector &&
        n != S &&
        (e = S.defaultView) &&
        e.top !== e &&
        e.addEventListener("unload", Me),
        (m.getById = Le(function (e) {
          return (
            (r.appendChild(e).id = T.expando),
            !S.getElementsByName || !S.getElementsByName(T.expando).length
          );
        })),
        (m.disconnectedMatch = Le(function (e) {
          return oe.call(e, "*");
        })),
        (m.scope = Le(function () {
          return S.querySelectorAll(":scope");
        })),
        (m.cssHas = Le(function () {
          try {
            return (S.querySelector(":has(*,:jqfake)"), 0);
          } catch (e) {
            return 1;
          }
        })),
        m.getById
          ? ((x.filter.ID = function (e) {
            var t = e.replace(u, f);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }),
            (x.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && C)
                return (t = t.getElementById(e)) ? [t] : [];
            }))
          : ((x.filter.ID = function (e) {
            var t = e.replace(u, f);
            return function (e) {
              e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return e && e.value === t;
            };
          }),
            (x.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && C) {
                var i,
                  r,
                  n,
                  s = t.getElementById(e);
                if (s) {
                  if ((i = s.getAttributeNode("id")) && i.value === e)
                    return [s];
                  for (n = t.getElementsByName(e), r = 0; (s = n[r++]);)
                    if ((i = s.getAttributeNode("id")) && i.value === e)
                      return [s];
                }
                return [];
              }
            })),
        (x.find.TAG = function (e, t) {
          return void 0 !== t.getElementsByTagName
            ? t.getElementsByTagName(e)
            : t.querySelectorAll(e);
        }),
        (x.find.CLASS = function (e, t) {
          if (void 0 !== t.getElementsByClassName && C)
            return t.getElementsByClassName(e);
        }),
        (p = []),
        Le(function (e) {
          var t;
          ((r.appendChild(e).innerHTML =
            "<a id='" +
            A +
            "' href='' disabled='disabled'></a><select id='" +
            A +
            "-\r\\' disabled='disabled'><option selected=''></option></select>"),
            e.querySelectorAll("[selected]").length ||
            p.push("\\[" + i + "*(?:value|" + me + ")"),
            e.querySelectorAll("[id~=" + A + "-]").length || p.push("~="),
            e.querySelectorAll("a#" + A + "+*").length || p.push(".#.+[+~]"),
            e.querySelectorAll(":checked").length || p.push(":checked"),
            (t = S.createElement("input")).setAttribute("type", "hidden"),
            e.appendChild(t).setAttribute("name", "D"),
            (r.appendChild(e).disabled = !0),
            2 !== e.querySelectorAll(":disabled").length &&
            p.push(":enabled", ":disabled"),
            (t = S.createElement("input")).setAttribute("name", ""),
            e.appendChild(t),
            e.querySelectorAll("[name='']").length ||
            p.push("\\[" + i + "*name" + i + "*=" + i + "*(?:''|\"\")"));
        }),
        m.cssHas || p.push(":has"),
        (p = p.length && new RegExp(p.join("|"))),
        (he = function (e, t) {
          var i;
          return e === t
            ? ((ae = !0), 0)
            : !e.compareDocumentPosition - !t.compareDocumentPosition ||
            (1 &
              (i =
                (e.ownerDocument || e) == (t.ownerDocument || t)
                  ? e.compareDocumentPosition(t)
                  : 1) ||
              (!m.sortDetached && t.compareDocumentPosition(e) === i)
              ? e === S || (e.ownerDocument == n && L.contains(n, e))
                ? -1
                : t === S || (t.ownerDocument == n && L.contains(n, t))
                  ? 1
                  : se
                    ? w.call(se, e) - w.call(se, t)
                    : 0
              : 4 & i
                ? -1
                : 1);
        })),
      S
    );
  }
  for (re in ((L.matches = function (e, t) {
    return L(e, null, null, t);
  }),
    (L.matchesSelector = function (e, t) {
      if ((Ie(e), C && !fe[t + " "] && (!p || !p.test(t))))
        try {
          var i = oe.call(e, t);
          if (
            i ||
            m.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          fe(t, !0);
        }
      return 0 < L(t, S, null, [e]).length;
    }),
    (L.contains = function (e, t) {
      return ((e.ownerDocument || e) != S && Ie(e), T.contains(e, t));
    }),
    (L.attr = function (e, t) {
      (e.ownerDocument || e) != S && Ie(e);
      var i = x.attrHandle[t.toLowerCase()],
        i = i && $.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !C) : void 0;
      return void 0 !== i ? i : e.getAttribute(t);
    }),
    (L.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (T.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        n = 0;
      if (
        ((ae = !m.sortStable),
          (se = !m.sortStable && o.call(e, 0)),
          J.call(e, he),
          ae)
      ) {
        for (; (t = e[n++]);) t === e[n] && (r = i.push(n));
        for (; r--;) Z.call(e, i[r], 1);
      }
      return ((se = null), e);
    }),
    (T.fn.uniqueSort = function () {
      return this.pushStack(T.uniqueSort(o.apply(this)));
    }),
    ((x = T.expr =
    {
      cacheLength: 50,
      createPseudo: l,
      match: Ee,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(u, f)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(u, f)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || L.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && L.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            i = !e[6] && e[2];
          return Ee.CHILD.test(e[0])
            ? null
            : (e[3]
              ? (e[2] = e[4] || e[5] || "")
              : i &&
              we.test(i) &&
              (t =
                (t = Ne(i, !0)) &&
                i.indexOf(")", i.length - t) - i.length) &&
              ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(u, f).toLowerCase();
          return "*" === e
            ? function () {
              return !0;
            }
            : function (e) {
              return y(e, t);
            };
        },
        CLASS: function (e) {
          var t = ce[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + i + ")" + e + "(" + i + "|$)")) &&
              ce(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                  (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                  "",
                );
              }))
          );
        },
        ATTR: function (t, i, r) {
          return function (e) {
            e = L.attr(e, t);
            return null == e
              ? "!=" === i
              : !i ||
              ((e += ""),
                "=" === i
                  ? e === r
                  : "!=" === i
                    ? e !== r
                    : "^=" === i
                      ? r && 0 === e.indexOf(r)
                      : "*=" === i
                        ? r && -1 < e.indexOf(r)
                        : "$=" === i
                          ? r && e.slice(-r.length) === r
                          : "~=" === i
                            ? -1 < (" " + e.replace(ge, " ") + " ").indexOf(r)
                            : "|=" === i &&
                            (e === r ||
                              e.slice(0, r.length + 1) === r + "-"));
          };
        },
        CHILD: function (f, e, t, h, m) {
          var g = "nth" !== f.slice(0, 3),
            v = "last" !== f.slice(-4),
            b = "of-type" === e;
          return 1 === h && 0 === m
            ? function (e) {
              return !!e.parentNode;
            }
            : function (e, t, i) {
              var r,
                n,
                s,
                a,
                o,
                l = g != v ? "nextSibling" : "previousSibling",
                d = e.parentNode,
                c = b && e.nodeName.toLowerCase(),
                u = !i && !b,
                p = !1;
              if (d) {
                if (g) {
                  for (; l;) {
                    for (s = e; (s = s[l]);)
                      if (b ? y(s, c) : 1 === s.nodeType) return !1;
                    o = l = "only" === f && !o && "nextSibling";
                  }
                  return !0;
                }
                if (((o = [v ? d.firstChild : d.lastChild]), v && u)) {
                  for (
                    p =
                    (a =
                      (r = (n = d[A] || (d[A] = {}))[f] || [])[0] === k &&
                      r[1]) && r[2],
                    s = a && d.childNodes[a];
                    (s = (++a && s && s[l]) || ((p = a = 0), o.pop()));
                  )
                    if (1 === s.nodeType && ++p && s === e) {
                      n[f] = [k, a, p];
                      break;
                    }
                } else if (
                  !1 ===
                  (p = u
                    ? (a =
                      (r = (n = e[A] || (e[A] = {}))[f] || [])[0] === k &&
                      r[1])
                    : p)
                )
                  for (
                    ;
                    (s = (++a && s && s[l]) || ((p = a = 0), o.pop())) &&
                    ((b ? !y(s, c) : 1 !== s.nodeType) ||
                      !++p ||
                      (u && ((n = s[A] || (s[A] = {}))[f] = [k, p]),
                        s !== e));
                  );
                return (p -= m) === h || (p % h == 0 && 0 <= p / h);
              }
            };
        },
        PSEUDO: function (e, s) {
          var t,
            a =
              x.pseudos[e] ||
              x.setFilters[e.toLowerCase()] ||
              L.error("unsupported pseudo: " + e);
          return a[A]
            ? a(s)
            : 1 < a.length
              ? ((t = [e, e, "", s]),
                x.setFilters.hasOwnProperty(e.toLowerCase())
                  ? l(function (e, t) {
                    for (var i, r = a(e, s), n = r.length; n--;)
                      e[(i = w.call(e, r[n]))] = !(t[i] = r[n]);
                  })
                  : function (e) {
                    return a(e, 0, t);
                  })
              : a;
        },
      },
      pseudos: {
        not: l(function (e) {
          var r = [],
            n = [],
            o = Be(e.replace(ee, "$1"));
          return o[A]
            ? l(function (e, t, i, r) {
              for (var n, s = o(e, null, r, []), a = e.length; a--;)
                (n = s[a]) && (e[a] = !(t[a] = n));
            })
            : function (e, t, i) {
              return ((r[0] = e), o(r, null, i, n), (r[0] = null), !n.pop());
            };
        }),
        has: l(function (t) {
          return function (e) {
            return 0 < L(t, e).length;
          };
        }),
        contains: l(function (t) {
          return (
            (t = t.replace(u, f)),
            function (e) {
              return -1 < (e.textContent || T.text(e)).indexOf(t);
            }
          );
        }),
        lang: l(function (i) {
          return (
            xe.test(i || "") || L.error("unsupported lang: " + i),
            (i = i.replace(u, f).toLowerCase()),
            function (e) {
              var t;
              do {
                if (
                  (t = C
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = E.location && E.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === r;
        },
        focus: function (e) {
          return (
            e ===
            (() => {
              try {
                return S.activeElement;
              } catch (e) { }
            })() &&
            S.hasFocus() &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: Oe(!1),
        disabled: Oe(!0),
        checked: function (e) {
          return (
            (y(e, "input") && !!e.checked) || (y(e, "option") && !!e.selected)
          );
        },
        selected: function (e) {
          return (
            e.parentNode && e.parentNode.selectedIndex,
            !0 === e.selected
          );
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !x.pseudos.empty(e);
        },
        header: function (e) {
          return Te.test(e.nodeName);
        },
        input: function (e) {
          return _e.test(e.nodeName);
        },
        button: function (e) {
          return (y(e, "input") && "button" === e.type) || y(e, "button");
        },
        text: function (e) {
          return (
            y(e, "input") &&
            "text" === e.type &&
            (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
          );
        },
        first: Pe(function () {
          return [0];
        }),
        last: Pe(function (e, t) {
          return [t - 1];
        }),
        eq: Pe(function (e, t, i) {
          return [i < 0 ? i + t : i];
        }),
        even: Pe(function (e, t) {
          for (var i = 0; i < t; i += 2) e.push(i);
          return e;
        }),
        odd: Pe(function (e, t) {
          for (var i = 1; i < t; i += 2) e.push(i);
          return e;
        }),
        lt: Pe(function (e, t, i) {
          for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: Pe(function (e, t, i) {
          for (var r = i < 0 ? i + t : i; ++r < t;) e.push(r);
          return e;
        }),
      },
    }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
    x.pseudos[re] = ((t) =>
      function (e) {
        return y(e, "input") && e.type === t;
      })(re);
  for (re in { submit: !0, reset: !0 })
    x.pseudos[re] = ((t) =>
      function (e) {
        return (y(e, "input") || y(e, "button")) && e.type === t;
      })(re);
  function je() { }
  function Ne(e, t) {
    var i,
      r,
      n,
      s,
      a,
      o,
      l,
      d = ue[e + " "];
    if (d) return t ? 0 : d.slice(0);
    for (a = e, o = [], l = x.preFilter; a;) {
      for (s in ((i && !(r = ve.exec(a))) ||
        (r && (a = a.slice(r[0].length) || a), o.push((n = []))),
        (i = !1),
        (r = be.exec(a)) &&
        ((i = r.shift()),
          n.push({ value: i, type: r[0].replace(ee, " ") }),
          (a = a.slice(i.length))),
        x.filter))
        !(r = Ee[s].exec(a)) ||
          (l[s] && !(r = l[s](r))) ||
          ((i = r.shift()),
            n.push({ value: i, type: s, matches: r }),
            (a = a.slice(i.length)));
      if (!i) break;
    }
    return t ? a.length : a ? L.error(e) : ue(e, o).slice(0);
  }
  function ze(e) {
    for (var t = 0, i = e.length, r = ""; t < i; t++) r += e[t].value;
    return r;
  }
  function He(a, e, t) {
    var o = e.dir,
      l = e.next,
      d = l || o,
      c = t && "parentNode" === d,
      u = de++;
    return e.first
      ? function (e, t, i) {
        for (; (e = e[o]);) if (1 === e.nodeType || c) return a(e, t, i);
        return !1;
      }
      : function (e, t, i) {
        var r,
          n,
          s = [k, u];
        if (i) {
          for (; (e = e[o]);)
            if ((1 === e.nodeType || c) && a(e, t, i)) return !0;
        } else
          for (; (e = e[o]);)
            if (1 === e.nodeType || c)
              if (((n = e[A] || (e[A] = {})), l && y(e, l))) e = e[o] || e;
              else {
                if ((r = n[d]) && r[0] === k && r[1] === u)
                  return (s[2] = r[2]);
                if (((n[d] = s)[2] = a(e, t, i))) return !0;
              }
        return !1;
      };
  }
  function qe(n) {
    return 1 < n.length
      ? function (e, t, i) {
        for (var r = n.length; r--;) if (!n[r](e, t, i)) return !1;
        return !0;
      }
      : n[0];
  }
  function Re(e, t, i, r, n) {
    for (var s, a = [], o = 0, l = e.length, d = null != t; o < l; o++)
      !(s = e[o]) || (i && !i(s, r, n)) || (a.push(s), d && t.push(o));
    return a;
  }
  function Fe(f, h, m, g, v, e) {
    return (
      g && !g[A] && (g = Fe(g)),
      v && !v[A] && (v = Fe(v, e)),
      l(function (e, t, i, r) {
        var n,
          s,
          a,
          o,
          l = [],
          d = [],
          c = t.length,
          u =
            e ||
            ((e, t, i) => {
              for (var r = 0, n = t.length; r < n; r++) L(e, t[r], i);
              return i;
            })(h || "*", i.nodeType ? [i] : i, []),
          p = !f || (!e && h) ? u : Re(u, l, f, i, r);
        if ((m ? m(p, (o = v || (e ? f : c || g) ? [] : t), i, r) : (o = p), g))
          for (n = Re(o, d), g(n, [], i, r), s = n.length; s--;)
            (a = n[s]) && (o[d[s]] = !(p[d[s]] = a));
        if (e) {
          if (v || f) {
            if (v) {
              for (n = [], s = o.length; s--;)
                (a = o[s]) && n.push((p[s] = a));
              v(null, (o = []), n, r);
            }
            for (s = o.length; s--;)
              (a = o[s]) &&
                -1 < (n = v ? w.call(e, a) : l[s]) &&
                (e[n] = !(t[n] = a));
          }
        } else
          ((o = Re(o === t ? o.splice(c, o.length) : o)),
            v ? v(null, t, o, r) : M.apply(t, o));
      })
    );
  }
  function Be(e, t) {
    var i,
      g,
      v,
      b,
      y,
      r,
      n = [],
      s = [],
      a = pe[e + " "];
    if (!a) {
      for (i = (t = t || Ne(e)).length; i--;)
        ((a = (function e(t) {
          for (
            var r,
            i,
            n,
            s = t.length,
            a = x.relative[t[0].type],
            o = a || x.relative[" "],
            l = a ? 1 : 0,
            d = He(
              function (e) {
                return e === r;
              },
              o,
              !0,
            ),
            c = He(
              function (e) {
                return -1 < w.call(r, e);
              },
              o,
              !0,
            ),
            u = [
              function (e, t, i) {
                return (
                  (e =
                    (!a && (i || t != ne)) ||
                    ((r = t).nodeType ? d : c)(e, t, i)),
                  (r = null),
                  e
                );
              },
            ];
            l < s;
            l++
          )
            if ((i = x.relative[t[l].type])) u = [He(qe(u), i)];
            else {
              if ((i = x.filter[t[l].type].apply(null, t[l].matches))[A]) {
                for (n = ++l; n < s && !x.relative[t[n].type]; n++);
                return Fe(
                  1 < l && qe(u),
                  1 < l &&
                  ze(
                    t
                      .slice(0, l - 1)
                      .concat({ value: " " === t[l - 2].type ? "*" : "" }),
                  ).replace(ee, "$1"),
                  i,
                  l < n && e(t.slice(l, n)),
                  n < s && e((t = t.slice(n))),
                  n < s && ze(t),
                );
              }
              u.push(i);
            }
          return qe(u);
        })(t[i]))[A]
          ? n
          : s
        ).push(a);
      (a = pe(
        e,
        ((b = 0 < (v = n).length),
          (y = 0 < (g = s).length),
          (r = function (e, t, i, r, n) {
            var s,
              a,
              o,
              l = 0,
              d = "0",
              c = e && [],
              u = [],
              p = ne,
              f = e || (y && x.find.TAG("*", n)),
              h = (k += null == p ? 1 : Math.random() || 0.1),
              m = f.length;
            for (
              n && (ne = t == S || t || n);
              d !== m && null != (s = f[d]);
              d++
            ) {
              if (y && s) {
                for (
                  a = 0, t || s.ownerDocument == S || (Ie(s), (i = !C));
                  (o = g[a++]);
                )
                  if (o(s, t || S, i)) {
                    M.call(r, s);
                    break;
                  }
                n && (k = h);
              }
              b && ((s = !o && s) && l--, e) && c.push(s);
            }
            if (((l += d), b && d !== l)) {
              for (a = 0; (o = v[a++]);) o(c, u, t, i);
              if (e) {
                if (0 < l) for (; d--;) c[d] || u[d] || (u[d] = Q.call(r));
                u = Re(u);
              }
              (M.apply(r, u),
                n && !e && 0 < u.length && 1 < l + v.length && T.uniqueSort(r));
            }
            return (n && ((k = h), (ne = p)), c);
          }),
          b ? l(r) : r),
      )).selector = e;
    }
    return a;
  }
  function $e(e, t, i, r) {
    var n,
      s,
      a,
      o,
      l,
      d = "function" == typeof e && e,
      c = !r && Ne((e = d.selector || e));
    if (((i = i || []), 1 === c.length)) {
      if (
        2 < (s = c[0] = c[0].slice(0)).length &&
        "ID" === (a = s[0]).type &&
        9 === t.nodeType &&
        C &&
        x.relative[s[1].type]
      ) {
        if (!(t = (x.find.ID(a.matches[0].replace(u, f), t) || [])[0]))
          return i;
        (d && (t = t.parentNode), (e = e.slice(s.shift().value.length)));
      }
      for (
        n = Ee.needsContext.test(e) ? 0 : s.length;
        n-- && ((a = s[n]), !x.relative[(o = a.type)]);
      )
        if (
          (l = x.find[o]) &&
          (r = l(
            a.matches[0].replace(u, f),
            (Ce.test(s[0].type) && De(t.parentNode)) || t,
          ))
        ) {
          if ((s.splice(n, 1), (e = r.length && ze(s)))) break;
          return (M.apply(i, r), i);
        }
    }
    return (
      (d || Be(e, c))(r, t, !C, i, !t || (Ce.test(e) && De(t.parentNode)) || t),
      i
    );
  }
  ((je.prototype = x.filters = x.pseudos),
    (x.setFilters = new je()),
    (m.sortStable = A.split("").sort(he).join("") === A),
    Ie(),
    (m.sortDetached = Le(function (e) {
      return 1 & e.compareDocumentPosition(S.createElement("fieldset"));
    })),
    (T.find = L),
    (T.expr[":"] = T.expr.pseudos),
    (T.unique = T.uniqueSort),
    (L.compile = Be),
    (L.select = $e),
    (L.setDocument = Ie),
    (L.tokenize = Ne),
    (L.escape = T.escapeSelector),
    (L.getText = T.text),
    (L.isXML = T.isXMLDoc),
    (L.selectors = T.expr),
    (L.support = T.support),
    (L.uniqueSort = T.uniqueSort));
  function We(e, t, i) {
    for (var r = [], n = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;)
      if (1 === e.nodeType) {
        if (n && T(e).is(i)) break;
        r.push(e);
      }
    return r;
  }
  function Xe(e, t) {
    for (var i = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && i.push(e);
    return i;
  }
  var Ge = T.expr.match.needsContext,
    Ye = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Ve(e, i, r) {
    return b(i)
      ? T.grep(e, function (e, t) {
        return !!i.call(e, t, e) !== r;
      })
      : i.nodeType
        ? T.grep(e, function (e) {
          return (e === i) !== r;
        })
        : "string" != typeof i
          ? T.grep(e, function (e) {
            return -1 < w.call(i, e) !== r;
          })
          : T.filter(i, e, r);
  }
  ((T.filter = function (e, t, i) {
    var r = t[0];
    return (
      i && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? T.find.matchesSelector(r, e)
          ? [r]
          : []
        : T.find.matches(
          e,
          T.grep(t, function (e) {
            return 1 === e.nodeType;
          }),
        )
    );
  }),
    T.fn.extend({
      find: function (e) {
        var t,
          i,
          r = this.length,
          n = this;
        if ("string" != typeof e)
          return this.pushStack(
            T(e).filter(function () {
              for (t = 0; t < r; t++) if (T.contains(n[t], this)) return !0;
            }),
          );
        for (i = this.pushStack([]), t = 0; t < r; t++) T.find(e, n[t], i);
        return 1 < r ? T.uniqueSort(i) : i;
      },
      filter: function (e) {
        return this.pushStack(Ve(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(Ve(this, e || [], !0));
      },
      is: function (e) {
        return !!Ve(
          this,
          "string" == typeof e && Ge.test(e) ? T(e) : e || [],
          !1,
        ).length;
      },
    }));
  var Ue,
    Ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Qe =
      (((T.fn.init = function (e, t, i) {
        if (e) {
          if (((i = i || Ue), "string" != typeof e))
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : b(e)
                ? void 0 !== i.ready
                  ? i.ready(e)
                  : e(T)
                : T.makeArray(e, this);
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : Ke.exec(e)) ||
            (!r[1] && t)
          )
            return (!t || t.jquery ? t || i : this.constructor(t)).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
                T.merge(
                  this,
                  T.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : _,
                    !0,
                  ),
                ),
                Ye.test(r[1]) && T.isPlainObject(t))
            )
              for (var r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          } else
            (i = _.getElementById(r[2])) && ((this[0] = i), (this.length = 1));
        }
        return this;
      }).prototype = T.fn),
        (Ue = T(_)),
        /^(?:parents|prev(?:Until|All))/),
    Je = { children: !0, contents: !0, next: !0, prev: !0 };
  function Ze(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e;
  }
  (T.fn.extend({
    has: function (e) {
      var t = T(e, this),
        i = t.length;
      return this.filter(function () {
        for (var e = 0; e < i; e++) if (T.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var i,
        r = 0,
        n = this.length,
        s = [],
        a = "string" != typeof e && T(e);
      if (!Ge.test(e))
        for (; r < n; r++)
          for (i = this[r]; i && i !== t; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (a
                ? -1 < a.index(i)
                : 1 === i.nodeType && T.find.matchesSelector(i, e))
            ) {
              s.push(i);
              break;
            }
      return this.pushStack(1 < s.length ? T.uniqueSort(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? w.call(T(e), this[0])
          : w.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    T.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return We(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return We(e, "parentNode", i);
        },
        next: function (e) {
          return Ze(e, "nextSibling");
        },
        prev: function (e) {
          return Ze(e, "previousSibling");
        },
        nextAll: function (e) {
          return We(e, "nextSibling");
        },
        prevAll: function (e) {
          return We(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return We(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return We(e, "previousSibling", i);
        },
        siblings: function (e) {
          return Xe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Xe(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && H(e.contentDocument)
            ? e.contentDocument
            : (y(e, "template") && (e = e.content || e),
              T.merge([], e.childNodes));
        },
      },
      function (r, n) {
        T.fn[r] = function (e, t) {
          var i = T.map(this, n, e);
          return (
            (t = "Until" !== r.slice(-5) ? e : t) &&
            "string" == typeof t &&
            (i = T.filter(t, i)),
            1 < this.length &&
            (Je[r] || T.uniqueSort(i), Qe.test(r)) &&
            i.reverse(),
            this.pushStack(i)
          );
        };
      },
    ));
  var O = /[^\x20\t\r\n\f]+/g;
  function et(e) {
    return e;
  }
  function tt(e) {
    throw e;
  }
  function it(e, t, i, r) {
    var n;
    try {
      e && b((n = e.promise))
        ? n.call(e).done(t).fail(i)
        : e && b((n = e.then))
          ? n.call(e, t, i)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      i.apply(void 0, [e]);
    }
  }
  ((T.Callbacks = function (r) {
    var e, i;
    r =
      "string" == typeof r
        ? ((e = r),
          (i = {}),
          T.each(e.match(O) || [], function (e, t) {
            i[t] = !0;
          }),
          i)
        : T.extend({}, r);
    function n() {
      for (o = o || r.once, a = s = !0; d.length; c = -1)
        for (t = d.shift(); ++c < l.length;)
          !1 === l[c].apply(t[0], t[1]) &&
            r.stopOnFalse &&
            ((c = l.length), (t = !1));
      (r.memory || (t = !1), (s = !1), o && (l = t ? [] : ""));
    }
    var s,
      t,
      a,
      o,
      l = [],
      d = [],
      c = -1,
      u = {
        add: function () {
          return (
            l &&
            (t && !s && ((c = l.length - 1), d.push(t)),
              (function i(e) {
                T.each(e, function (e, t) {
                  b(t)
                    ? (r.unique && u.has(t)) || l.push(t)
                    : t && t.length && "string" !== V(t) && i(t);
                });
              })(arguments),
              t) &&
            !s &&
            n(),
            this
          );
        },
        remove: function () {
          return (
            T.each(arguments, function (e, t) {
              for (var i; -1 < (i = T.inArray(t, l, i));)
                (l.splice(i, 1), i <= c && c--);
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < T.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return ((l = l && []), this);
        },
        disable: function () {
          return ((o = d = []), (l = t = ""), this);
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return ((o = d = []), t || s || (l = t = ""), this);
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, t) {
          return (
            o ||
            ((t = [e, (t = t || []).slice ? t.slice() : t]), d.push(t), s) ||
            n(),
            this
          );
        },
        fire: function () {
          return (u.fireWith(this, arguments), this);
        },
        fired: function () {
          return !!a;
        },
      };
    return u;
  }),
    T.extend({
      Deferred: function (e) {
        var s = [
          [
            "notify",
            "progress",
            T.Callbacks("memory"),
            T.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            T.Callbacks("once memory"),
            T.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            T.Callbacks("once memory"),
            T.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
          n = "pending",
          a = {
            state: function () {
              return n;
            },
            always: function () {
              return (o.done(arguments).fail(arguments), this);
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var n = arguments;
              return T.Deferred(function (r) {
                (T.each(s, function (e, t) {
                  var i = b(n[t[4]]) && n[t[4]];
                  o[t[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && b(e.promise)
                      ? e
                        .promise()
                        .progress(r.notify)
                        .done(r.resolve)
                        .fail(r.reject)
                      : r[t[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (n = null));
              }).promise();
            },
            then: function (t, i, r) {
              var l = 0;
              function d(n, s, a, o) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(n < l)) {
                      if ((e = a.apply(i, r)) === s.promise())
                        throw new TypeError("Thenable self-resolution");
                      ((t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        b(t)
                          ? o
                            ? t.call(e, d(l, s, et, o), d(l, s, tt, o))
                            : (l++,
                              t.call(
                                e,
                                d(l, s, et, o),
                                d(l, s, tt, o),
                                d(l, s, et, s.notifyWith),
                              ))
                          : (a !== et && ((i = void 0), (r = [e])),
                            (o || s.resolveWith)(i, r)));
                    }
                  }
                  var i = this,
                    r = arguments,
                    t = o
                      ? e
                      : function () {
                        try {
                          e();
                        } catch (e) {
                          (T.Deferred.exceptionHook &&
                            T.Deferred.exceptionHook(e, t.error),
                            l <= n + 1 &&
                            (a !== tt && ((i = void 0), (r = [e])),
                              s.rejectWith(i, r)));
                        }
                      };
                  n
                    ? t()
                    : (T.Deferred.getErrorHook
                      ? (t.error = T.Deferred.getErrorHook())
                      : T.Deferred.getStackHook &&
                      (t.error = T.Deferred.getStackHook()),
                      E.setTimeout(t));
                };
              }
              return T.Deferred(function (e) {
                (s[0][3].add(d(0, e, b(r) ? r : et, e.notifyWith)),
                  s[1][3].add(d(0, e, b(t) ? t : et)),
                  s[2][3].add(d(0, e, b(i) ? i : tt)));
              }).promise();
            },
            promise: function (e) {
              return null != e ? T.extend(e, a) : a;
            },
          },
          o = {};
        return (
          T.each(s, function (e, t) {
            var i = t[2],
              r = t[5];
            ((a[t[1]] = i.add),
              r &&
              i.add(
                function () {
                  n = r;
                },
                s[3 - e][2].disable,
                s[3 - e][3].disable,
                s[0][2].lock,
                s[0][3].lock,
              ),
              i.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments),
                  this
                );
              }),
              (o[t[0] + "With"] = i.fireWith));
          }),
          a.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            ((n[t] = this),
              (s[t] = 1 < arguments.length ? o.call(arguments) : e),
              --i || a.resolveWith(n, s));
          };
        }
        var i = arguments.length,
          r = i,
          n = Array(r),
          s = o.call(arguments),
          a = T.Deferred();
        if (
          i <= 1 &&
          (it(e, a.done(t(r)).resolve, a.reject, !i),
            "pending" === a.state() || b(s[r] && s[r].then))
        )
          return a.then();
        for (; r--;) it(s[r], t(r), a.reject);
        return a.promise();
      },
    }));
  var rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    nt =
      ((T.Deferred.exceptionHook = function (e, t) {
        E.console &&
          E.console.warn &&
          e &&
          rt.test(e.name) &&
          E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          E.setTimeout(function () {
            throw e;
          });
        }),
        T.Deferred());
  function st() {
    (_.removeEventListener("DOMContentLoaded", st),
      E.removeEventListener("load", st),
      T.ready());
  }
  ((T.fn.ready = function (e) {
    return (
      nt.then(e).catch(function (e) {
        T.readyException(e);
      }),
      this
    );
  }),
    T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) ||
          ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
          nt.resolveWith(_, [T]);
      },
    }),
    (T.ready.then = nt.then),
    "complete" === _.readyState ||
      ("loading" !== _.readyState && !_.documentElement.doScroll)
      ? E.setTimeout(T.ready)
      : (_.addEventListener("DOMContentLoaded", st),
        E.addEventListener("load", st)));
  function c(e, t, i, r, n, s, a) {
    var o = 0,
      l = e.length,
      d = null == i;
    if ("object" === V(i)) for (o in ((n = !0), i)) c(e, t, o, i[o], !0, s, a);
    else if (
      void 0 !== r &&
      ((n = !0),
        b(r) || (a = !0),
        (t = d
          ? a
            ? (t.call(e, r), null)
            : ((d = t),
              function (e, t, i) {
                return d.call(T(e), i);
              })
          : t))
    )
      for (; o < l; o++) t(e[o], i, a ? r : r.call(e[o], o, t(e[o], i)));
    return n ? e : d ? t.call(e) : l ? t(e[0], i) : s;
  }
  var at = /^-ms-/,
    ot = /-([a-z])/g;
  function lt(e, t) {
    return t.toUpperCase();
  }
  function P(e) {
    return e.replace(at, "ms-").replace(ot, lt);
  }
  function dt(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function ct() {
    this.expando = T.expando + ct.uid++;
  }
  ((ct.uid = 1),
    (ct.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
          ((t = {}),
            dt(e) &&
            (e.nodeType
              ? (e[this.expando] = t)
              : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0,
              }))),
          t
        );
      },
      set: function (e, t, i) {
        var r,
          n = this.cache(e);
        if ("string" == typeof t) n[P(t)] = i;
        else for (r in t) n[P(r)] = t[r];
        return n;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][P(t)];
      },
      access: function (e, t, i) {
        return void 0 === t || (t && "string" == typeof t && void 0 === i)
          ? this.get(e, t)
          : (this.set(e, t, i), void 0 !== i ? i : t);
      },
      remove: function (e, t) {
        var i,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            i = (t = Array.isArray(t)
              ? t.map(P)
              : (t = P(t)) in r
                ? [t]
                : t.match(O) || []).length;
            for (; i--;) delete r[t[i]];
          }
          (void 0 !== t && !T.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !T.isEmptyObject(e);
      },
    }));
  var v = new ct(),
    d = new ct(),
    ut = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    pt = /[A-Z]/g;
  function ft(e, t, i) {
    var r, n;
    if (void 0 === i && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(pt, "-$&").toLowerCase()),
          "string" == typeof (i = e.getAttribute(r)))
      ) {
        try {
          i =
            "true" === (n = i) ||
            ("false" !== n &&
              ("null" === n
                ? null
                : n === +n + ""
                  ? +n
                  : ut.test(n)
                    ? JSON.parse(n)
                    : n));
        } catch (e) { }
        d.set(e, t, i);
      } else i = void 0;
    return i;
  }
  (T.extend({
    hasData: function (e) {
      return d.hasData(e) || v.hasData(e);
    },
    data: function (e, t, i) {
      return d.access(e, t, i);
    },
    removeData: function (e, t) {
      d.remove(e, t);
    },
    _data: function (e, t, i) {
      return v.access(e, t, i);
    },
    _removeData: function (e, t) {
      v.remove(e, t);
    },
  }),
    T.fn.extend({
      data: function (i, e) {
        var t,
          r,
          n,
          s = this[0],
          a = s && s.attributes;
        if (void 0 !== i)
          return "object" == typeof i
            ? this.each(function () {
              d.set(this, i);
            })
            : c(
              this,
              function (e) {
                var t;
                if (s && void 0 === e)
                  return void 0 !== (t = d.get(s, i)) ||
                    void 0 !== (t = ft(s, i))
                    ? t
                    : void 0;
                this.each(function () {
                  d.set(this, i, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0,
            );
        if (
          this.length &&
          ((n = d.get(s)), 1 === s.nodeType) &&
          !v.get(s, "hasDataAttrs")
        ) {
          for (t = a.length; t--;)
            a[t] &&
              0 === (r = a[t].name).indexOf("data-") &&
              ((r = P(r.slice(5))), ft(s, r, n[r]));
          v.set(s, "hasDataAttrs", !0);
        }
        return n;
      },
      removeData: function (e) {
        return this.each(function () {
          d.remove(this, e);
        });
      },
    }),
    T.extend({
      queue: function (e, t, i) {
        var r;
        if (e)
          return (
            (r = v.get(e, (t = (t || "fx") + "queue"))),
            i &&
            (!r || Array.isArray(i)
              ? (r = v.access(e, t, T.makeArray(i)))
              : r.push(i)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var i = T.queue(e, t),
          r = i.length,
          n = i.shift(),
          s = T._queueHooks(e, t);
        ("inprogress" === n && ((n = i.shift()), r--),
          n &&
          ("fx" === t && i.unshift("inprogress"),
            delete s.stop,
            n.call(
              e,
              function () {
                T.dequeue(e, t);
              },
              s,
            )),
          !r && s && s.empty.fire());
      },
      _queueHooks: function (e, t) {
        var i = t + "queueHooks";
        return (
          v.get(e, i) ||
          v.access(e, i, {
            empty: T.Callbacks("once memory").add(function () {
              v.remove(e, [t + "queue", i]);
            }),
          })
        );
      },
    }),
    T.fn.extend({
      queue: function (t, i) {
        var e = 2;
        return (
          "string" != typeof t && ((i = t), (t = "fx"), e--),
          arguments.length < e
            ? T.queue(this[0], t)
            : void 0 === i
              ? this
              : this.each(function () {
                var e = T.queue(this, t, i);
                (T._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t));
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function i() {
          --n || s.resolveWith(a, [a]);
        }
        var r,
          n = 1,
          s = T.Deferred(),
          a = this,
          o = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          o--;
        )
          (r = v.get(a[o], e + "queueHooks")) &&
            r.empty &&
            (n++, r.empty.add(i));
        return (i(), s.promise(t));
      },
    }));
  function ht(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && bt(e) && "none" === T.css(e, "display"))
    );
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    mt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
    gt = ["Top", "Right", "Bottom", "Left"],
    vt = _.documentElement,
    bt = function (e) {
      return T.contains(e.ownerDocument, e);
    },
    yt = { composed: !0 };
  vt.getRootNode &&
    (bt = function (e) {
      return (
        T.contains(e.ownerDocument, e) || e.getRootNode(yt) === e.ownerDocument
      );
    });
  function wt(e, t, i, r) {
    var n,
      s,
      a = 20,
      o = r
        ? function () {
          return r.cur();
        }
        : function () {
          return T.css(e, t, "");
        },
      l = o(),
      d = (i && i[3]) || (T.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (T.cssNumber[t] || ("px" !== d && +l)) &&
        mt.exec(T.css(e, t));
    if (c && c[3] !== d) {
      for (d = d || c[3], c = +(l /= 2) || 1; a--;)
        (T.style(e, t, c + d),
          (1 - s) * (1 - (s = o() / l || 0.5)) <= 0 && (a = 0),
          (c /= s));
      (T.style(e, t, (c *= 2) + d), (i = i || []));
    }
    return (
      i &&
      ((c = +c || +l || 0), (n = i[1] ? c + (i[1] + 1) * i[2] : +i[2]), r) &&
      ((r.unit = d), (r.start = c), (r.end = n)),
      n
    );
  }
  var xt = {};
  function Et(e, t) {
    for (var i, r, n, s, a, o, l = [], d = 0, c = e.length; d < c; d++)
      (r = e[d]).style &&
        ((i = r.style.display),
          t
            ? ("none" === i &&
              ((l[d] = v.get(r, "display") || null),
                l[d] || (r.style.display = "")),
              "" === r.style.display &&
              ht(r) &&
              (l[d] =
                ((o = s = n = void 0),
                  (s = r.ownerDocument),
                  (o = xt[(a = r.nodeName)]) ||
                  ((n = s.body.appendChild(s.createElement(a))),
                    (o = T.css(n, "display")),
                    n.parentNode.removeChild(n),
                    (xt[a] = o = "none" === o ? "block" : o)))))
            : "none" !== i && ((l[d] = "none"), v.set(r, "display", i)));
    for (d = 0; d < c; d++) null != l[d] && (e[d].style.display = l[d]);
    return e;
  }
  T.fn.extend({
    show: function () {
      return Et(this, !0);
    },
    hide: function () {
      return Et(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
          ht(this) ? T(this).show() : T(this).hide();
        });
    },
  });
  var _t = /^(?:checkbox|radio)$/i,
    Tt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    St = /^$|^module$|\/(?:java|ecma)script/i,
    s = _.createDocumentFragment().appendChild(_.createElement("div")),
    h =
      ((a = _.createElement("input")).setAttribute("type", "radio"),
        a.setAttribute("checked", "checked"),
        a.setAttribute("name", "t"),
        s.appendChild(a),
        (m.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (s.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue),
        (s.innerHTML = "<option></option>"),
        (m.option = !!s.lastChild),
      {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      });
  function g(e, t) {
    var i =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
    return void 0 === t || (t && y(e, t)) ? T.merge([e], i) : i;
  }
  function Ct(e, t) {
    for (var i = 0, r = e.length; i < r; i++)
      v.set(e[i], "globalEval", !t || v.get(t[i], "globalEval"));
  }
  ((h.tbody = h.tfoot = h.colgroup = h.caption = h.thead),
    (h.th = h.td),
    m.option ||
    (h.optgroup = h.option =
      [1, "<select multiple='multiple'>", "</select>"]));
  var Mt = /<|&#?\w+;/;
  function At(e, t, i, r, n) {
    for (
      var s,
      a,
      o,
      l,
      d,
      c = t.createDocumentFragment(),
      u = [],
      p = 0,
      f = e.length;
      p < f;
      p++
    )
      if ((s = e[p]) || 0 === s)
        if ("object" === V(s)) T.merge(u, s.nodeType ? [s] : s);
        else if (Mt.test(s)) {
          for (
            a = a || c.appendChild(t.createElement("div")),
            o = (Tt.exec(s) || ["", ""])[1].toLowerCase(),
            o = h[o] || h._default,
            a.innerHTML = o[1] + T.htmlPrefilter(s) + o[2],
            d = o[0];
            d--;
          )
            a = a.lastChild;
          (T.merge(u, a.childNodes), ((a = c.firstChild).textContent = ""));
        } else u.push(t.createTextNode(s));
    for (c.textContent = "", p = 0; (s = u[p++]);)
      if (r && -1 < T.inArray(s, r)) n && n.push(s);
      else if (
        ((l = bt(s)), (a = g(c.appendChild(s), "script")), l && Ct(a), i)
      )
        for (d = 0; (s = a[d++]);) St.test(s.type || "") && i.push(s);
    return c;
  }
  var kt = /^([^.]*)(?:\.(.+)|)/;
  function Lt() {
    return !0;
  }
  function Ot() {
    return !1;
  }
  function Pt(e, t, i, r, n, s) {
    var a, o;
    if ("object" == typeof t) {
      for (o in ("string" != typeof i && ((r = r || i), (i = void 0)), t))
        Pt(e, o, i, r, t[o], s);
      return e;
    }
    if (
      (null == r && null == n
        ? ((n = i), (r = i = void 0))
        : null == n &&
        ("string" == typeof i
          ? ((n = r), (r = void 0))
          : ((n = r), (r = i), (i = void 0))),
        !1 === n)
    )
      n = Ot;
    else if (!n) return e;
    return (
      1 === s &&
      ((a = n),
        ((n = function (e) {
          return (T().off(e), a.apply(this, arguments));
        }).guid = a.guid || (a.guid = T.guid++))),
      e.each(function () {
        T.event.add(this, t, n, r, i);
      })
    );
  }
  function Dt(e, r, t) {
    t
      ? (v.set(e, r, !1),
        T.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              i = v.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (i)
                (T.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((i = o.call(arguments)),
                  v.set(this, r, i),
                  this[r](),
                  (t = v.get(this, r)),
                  v.set(this, r, !1),
                  i !== t)
              )
                return (e.stopImmediatePropagation(), e.preventDefault(), t);
            } else
              i &&
                (v.set(this, r, T.event.trigger(i[0], i.slice(1), this)),
                  e.stopPropagation(),
                  (e.isImmediatePropagationStopped = Lt));
          },
        }))
      : void 0 === v.get(e, r) && T.event.add(e, r, Lt);
  }
  ((T.event = {
    global: {},
    add: function (t, e, i, r, n) {
      var s,
        a,
        o,
        l,
        d,
        c,
        u,
        p,
        f,
        h = v.get(t);
      if (dt(t))
        for (
          i.handler && ((i = (s = i).handler), (n = s.selector)),
          n && T.find.matchesSelector(vt, n),
          i.guid || (i.guid = T.guid++),
          o = (o = h.events) || (h.events = Object.create(null)),
          a =
          (a = h.handle) ||
          (h.handle = function (e) {
            return void 0 !== T && T.event.triggered !== e.type
              ? T.event.dispatch.apply(t, arguments)
              : void 0;
          }),
          l = (e = (e || "").match(O) || [""]).length;
          l--;
        )
          ((u = f = (p = kt.exec(e[l]) || [])[1]),
            (p = (p[2] || "").split(".").sort()),
            u &&
            ((d = T.event.special[u] || {}),
              (u = (n ? d.delegateType : d.bindType) || u),
              (d = T.event.special[u] || {}),
              (f = T.extend(
                {
                  type: u,
                  origType: f,
                  data: r,
                  handler: i,
                  guid: i.guid,
                  selector: n,
                  needsContext: n && T.expr.match.needsContext.test(n),
                  namespace: p.join("."),
                },
                s,
              )),
              (c = o[u]) ||
              (((c = o[u] = []).delegateCount = 0),
                d.setup && !1 !== d.setup.call(t, r, p, a)) ||
              (t.addEventListener && t.addEventListener(u, a)),
              d.add &&
              (d.add.call(t, f), f.handler.guid || (f.handler.guid = i.guid)),
              n ? c.splice(c.delegateCount++, 0, f) : c.push(f),
              (T.event.global[u] = !0)));
    },
    remove: function (e, t, i, r, n) {
      var s,
        a,
        o,
        l,
        d,
        c,
        u,
        p,
        f,
        h,
        m,
        g = v.hasData(e) && v.get(e);
      if (g && (l = g.events)) {
        for (d = (t = (t || "").match(O) || [""]).length; d--;)
          if (
            ((f = m = (o = kt.exec(t[d]) || [])[1]),
              (h = (o[2] || "").split(".").sort()),
              f)
          ) {
            for (
              u = T.event.special[f] || {},
              p = l[(f = (r ? u.delegateType : u.bindType) || f)] || [],
              o =
              o[2] &&
              new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
              a = s = p.length;
              s--;
            )
              ((c = p[s]),
                (!n && m !== c.origType) ||
                (i && i.guid !== c.guid) ||
                (o && !o.test(c.namespace)) ||
                (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                (p.splice(s, 1),
                  c.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, c)));
            a &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                T.removeEvent(e, f, g.handle),
                delete l[f]);
          } else for (f in l) T.event.remove(e, f + t[d], i, r, !0);
        T.isEmptyObject(l) && v.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        i,
        r,
        n,
        s,
        a = new Array(arguments.length),
        o = T.event.fix(e),
        e = (v.get(this, "events") || Object.create(null))[o.type] || [],
        l = T.event.special[o.type] || {};
      for (a[0] = o, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((o.delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, o))
      ) {
        for (
          s = T.event.handlers.call(this, o, e), t = 0;
          (r = s[t++]) && !o.isPropagationStopped();
        )
          for (
            o.currentTarget = r.elem, i = 0;
            (n = r.handlers[i++]) && !o.isImmediatePropagationStopped();
          )
            (o.rnamespace &&
              !1 !== n.namespace &&
              !o.rnamespace.test(n.namespace)) ||
              ((o.handleObj = n),
                (o.data = n.data),
                void 0 !==
                (n = (
                  (T.event.special[n.origType] || {}).handle || n.handler
                ).apply(r.elem, a)) &&
                !1 === (o.result = n) &&
                (o.preventDefault(), o.stopPropagation()));
        return (l.postDispatch && l.postDispatch.call(this, o), o.result);
      }
    },
    handlers: function (e, t) {
      var i,
        r,
        n,
        s,
        a,
        o = [],
        l = t.delegateCount,
        d = e.target;
      if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
        for (; d !== this; d = d.parentNode || this)
          if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
            for (s = [], a = {}, i = 0; i < l; i++)
              (void 0 === a[(n = (r = t[i]).selector + " ")] &&
                (a[n] = r.needsContext
                  ? -1 < T(n, this).index(d)
                  : T.find(n, this, null, [d]).length),
                a[n] && s.push(r));
            s.length && o.push({ elem: d, handlers: s });
          }
      return (
        (d = this),
        l < t.length && o.push({ elem: d, handlers: t.slice(l) }),
        o
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(T.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e)
          ? function () {
            if (this.originalEvent) return e(this.originalEvent);
          }
          : function () {
            if (this.originalEvent) return this.originalEvent[t];
          },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[T.expando] ? e : new T.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          e = this || e;
          return (
            _t.test(e.type) && e.click && y(e, "input") && Dt(e, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          e = this || e;
          return (
            _t.test(e.type) && e.click && y(e, "input") && Dt(e, "click"),
            !0
          );
        },
        _default: function (e) {
          e = e.target;
          return (
            (_t.test(e.type) &&
              e.click &&
              y(e, "input") &&
              v.get(e, "click")) ||
            y(e, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (T.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i);
    }),
    (T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      (e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Lt
              : Ot),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && T.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[T.expando] = !0));
    }),
    (T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Ot,
      isPropagationStopped: Ot,
      isImmediatePropagationStopped: Ot,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        ((this.isDefaultPrevented = Lt),
          e && !this.isSimulated && e.preventDefault());
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        ((this.isPropagationStopped = Lt),
          e && !this.isSimulated && e.stopPropagation());
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        ((this.isImmediatePropagationStopped = Lt),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation());
      },
    }),
    T.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      T.event.addProp,
    ),
    T.each({ focus: "focusin", blur: "focusout" }, function (r, n) {
      function s(e) {
        var t, i;
        _.documentMode
          ? ((t = v.get(this, "handle")),
            ((i = T.event.fix(e)).type =
              "focusin" === e.type ? "focus" : "blur"),
            (i.isSimulated = !0),
            t(e),
            i.target === i.currentTarget && t(i))
          : T.event.simulate(n, e.target, T.event.fix(e));
      }
      ((T.event.special[r] = {
        setup: function () {
          var e;
          if ((Dt(this, r, !0), !_.documentMode)) return !1;
          ((e = v.get(this, n)) || this.addEventListener(n, s),
            v.set(this, n, (e || 0) + 1));
        },
        trigger: function () {
          return (Dt(this, r), !0);
        },
        teardown: function () {
          var e;
          if (!_.documentMode) return !1;
          (e = v.get(this, n) - 1)
            ? v.set(this, n, e)
            : (this.removeEventListener(n, s), v.remove(this, n));
        },
        _default: function (e) {
          return v.get(e.target, r);
        },
        delegateType: n,
      }),
        (T.event.special[n] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = _.documentMode ? this : e,
              i = v.get(t, n);
            (i ||
              (_.documentMode
                ? this.addEventListener(n, s)
                : e.addEventListener(r, s, !0)),
              v.set(t, n, (i || 0) + 1));
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = _.documentMode ? this : e,
              i = v.get(t, n) - 1;
            i
              ? v.set(t, n, i)
              : (_.documentMode
                ? this.removeEventListener(n, s)
                : e.removeEventListener(r, s, !0),
                v.remove(t, n));
          },
        }));
    }),
    T.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, n) {
        T.event.special[e] = {
          delegateType: n,
          bindType: n,
          handle: function (e) {
            var t,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || T.contains(this, i))) ||
              ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = n)),
              t
            );
          },
        };
      },
    ),
    T.fn.extend({
      on: function (e, t, i, r) {
        return Pt(this, e, t, i, r);
      },
      one: function (e, t, i, r) {
        return Pt(this, e, t, i, r, 1);
      },
      off: function (e, t, i) {
        var r, n;
        if (e && e.preventDefault && e.handleObj)
          ((r = e.handleObj),
            T(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ));
        else {
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
              !1 === i && (i = Ot),
              this.each(function () {
                T.event.remove(this, e, i, t);
              })
            );
          for (n in e) this.off(n, t, e[n]);
        }
        return this;
      },
    }));
  var It = /<script|<style|<link/i,
    jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Nt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function zt(e, t) {
    return (
      (y(e, "table") &&
        y(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        T(e).children("tbody")[0]) ||
      e
    );
  }
  function Ht(e) {
    return ((e.type = (null !== e.getAttribute("type")) + "/" + e.type), e);
  }
  function qt(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Rt(e, t) {
    var i, r, n, s;
    if (1 === t.nodeType) {
      if (v.hasData(e) && (s = v.get(e).events))
        for (n in (v.remove(t, "handle events"), s))
          for (i = 0, r = s[n].length; i < r; i++) T.event.add(t, n, s[n][i]);
      d.hasData(e) && ((e = d.access(e)), (e = T.extend({}, e)), d.set(t, e));
    }
  }
  function Ft(i, r, n, s) {
    r = q(r);
    var e,
      t,
      a,
      o,
      l,
      d,
      c = 0,
      u = i.length,
      p = u - 1,
      f = r[0],
      h = b(f);
    if (h || (1 < u && "string" == typeof f && !m.checkClone && jt.test(f)))
      return i.each(function (e) {
        var t = i.eq(e);
        (h && (r[0] = f.call(this, e, t.html())), Ft(t, r, n, s));
      });
    if (
      u &&
      ((t = (e = At(r, i[0].ownerDocument, !1, i, s)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || s)
    ) {
      for (o = (a = T.map(g(e, "script"), Ht)).length; c < u; c++)
        ((l = e),
          c !== p &&
          ((l = T.clone(l, !0, !0)), o) &&
          T.merge(a, g(l, "script")),
          n.call(i[c], l, c));
      if (o)
        for (d = a[a.length - 1].ownerDocument, T.map(a, qt), c = 0; c < o; c++)
          ((l = a[c]),
            St.test(l.type || "") &&
            !v.access(l, "globalEval") &&
            T.contains(d, l) &&
            (l.src && "module" !== (l.type || "").toLowerCase()
              ? T._evalUrl &&
              !l.noModule &&
              T._evalUrl(
                l.src,
                { nonce: l.nonce || l.getAttribute("nonce") },
                d,
              )
              : Y(l.textContent.replace(Nt, ""), l, d)));
    }
    return i;
  }
  function Bt(e, t, i) {
    for (var r, n = t ? T.filter(t, e) : e, s = 0; null != (r = n[s]); s++)
      (i || 1 !== r.nodeType || T.cleanData(g(r)),
        r.parentNode &&
        (i && bt(r) && Ct(g(r, "script")), r.parentNode.removeChild(r)));
    return e;
  }
  (T.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, i) {
      var r,
        n,
        s,
        a,
        o,
        l,
        d,
        c = e.cloneNode(!0),
        u = bt(e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          T.isXMLDoc(e)
        )
      )
        for (a = g(c), r = 0, n = (s = g(e)).length; r < n; r++)
          ((o = s[r]),
            "input" === (d = (l = a[r]).nodeName.toLowerCase()) &&
              _t.test(o.type)
              ? (l.checked = o.checked)
              : ("input" !== d && "textarea" !== d) ||
              (l.defaultValue = o.defaultValue));
      if (t)
        if (i)
          for (s = s || g(e), a = a || g(c), r = 0, n = s.length; r < n; r++)
            Rt(s[r], a[r]);
        else Rt(e, c);
      return (
        0 < (a = g(c, "script")).length && Ct(a, !u && g(e, "script")),
        c
      );
    },
    cleanData: function (e) {
      for (var t, i, r, n = T.event.special, s = 0; void 0 !== (i = e[s]); s++)
        if (dt(i)) {
          if ((t = i[v.expando])) {
            if (t.events)
              for (r in t.events)
                n[r] ? T.event.remove(i, r) : T.removeEvent(i, r, t.handle);
            i[v.expando] = void 0;
          }
          i[d.expando] && (i[d.expando] = void 0);
        }
    },
  }),
    T.fn.extend({
      detach: function (e) {
        return Bt(this, e, !0);
      },
      remove: function (e) {
        return Bt(this, e);
      },
      text: function (e) {
        return c(
          this,
          function (e) {
            return void 0 === e
              ? T.text(this)
              : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = e);
              });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return Ft(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            zt(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ft(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = zt(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return Ft(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ft(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (T.cleanData(g(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return T.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return c(
          this,
          function (e) {
            var t = this[0] || {},
              i = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !It.test(e) &&
              !h[(Tt.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = T.htmlPrefilter(e);
              try {
                for (; i < r; i++)
                  1 === (t = this[i] || {}).nodeType &&
                    (T.cleanData(g(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) { }
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var i = [];
        return Ft(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            T.inArray(this, i) < 0 &&
              (T.cleanData(g(this)), t) &&
              t.replaceChild(e, this);
          },
          i,
        );
      },
    }),
    T.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        T.fn[e] = function (e) {
          for (var t, i = [], r = T(e), n = r.length - 1, s = 0; s <= n; s++)
            ((t = s === n ? this : this.clone(!0)),
              T(r[s])[a](t),
              R.apply(i, t.get()));
          return this.pushStack(i);
        };
      },
    ));
  function $t(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : E).getComputedStyle(e);
  }
  function Wt(e, t, i) {
    var r,
      n = {};
    for (r in t) ((n[r] = e.style[r]), (e.style[r] = t[r]));
    for (r in ((i = i.call(e)), t)) e.style[r] = n[r];
    return i;
  }
  var Xt,
    Gt,
    Yt,
    Vt,
    Ut,
    Kt,
    Qt,
    D,
    Jt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
    Zt = /^--/,
    ei = new RegExp(gt.join("|"), "i");
  function ti(e, t, i) {
    var r,
      n = Zt.test(t),
      s = e.style;
    return (
      (i = i || $t(e)) &&
      ((r = i.getPropertyValue(t) || i[t]),
        "" !== (r = n ? r && (r.replace(ee, "$1") || void 0) : r) ||
        bt(e) ||
        (r = T.style(e, t)),
        !m.pixelBoxStyles()) &&
      Jt.test(r) &&
      ei.test(t) &&
      ((n = s.width),
        (e = s.minWidth),
        (t = s.maxWidth),
        (s.minWidth = s.maxWidth = s.width = r),
        (r = i.width),
        (s.width = n),
        (s.minWidth = e),
        (s.maxWidth = t)),
      void 0 !== r ? r + "" : r
    );
  }
  function ii(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function ri() {
    var e;
    D &&
      ((Qt.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
        (D.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
        vt.appendChild(Qt).appendChild(D),
        (e = E.getComputedStyle(D)),
        (Xt = "1%" !== e.top),
        (Kt = 12 === ni(e.marginLeft)),
        (D.style.right = "60%"),
        (Vt = 36 === ni(e.right)),
        (Gt = 36 === ni(e.width)),
        (D.style.position = "absolute"),
        (Yt = 12 === ni(D.offsetWidth / 3)),
        vt.removeChild(Qt),
        (D = null));
  }
  function ni(e) {
    return Math.round(parseFloat(e));
  }
  ((Qt = _.createElement("div")),
    (D = _.createElement("div")).style &&
    ((D.style.backgroundClip = "content-box"),
      (D.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === D.style.backgroundClip),
      T.extend(m, {
        boxSizingReliable: function () {
          return (ri(), Gt);
        },
        pixelBoxStyles: function () {
          return (ri(), Vt);
        },
        pixelPosition: function () {
          return (ri(), Xt);
        },
        reliableMarginLeft: function () {
          return (ri(), Kt);
        },
        scrollboxSize: function () {
          return (ri(), Yt);
        },
        reliableTrDimensions: function () {
          var e, t, i;
          return (
            null == Ut &&
            ((e = _.createElement("table")),
              (t = _.createElement("tr")),
              (i = _.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              vt.appendChild(e).appendChild(t).appendChild(i),
              (i = E.getComputedStyle(t)),
              (Ut =
                parseInt(i.height, 10) +
                parseInt(i.borderTopWidth, 10) +
                parseInt(i.borderBottomWidth, 10) ===
                t.offsetHeight),
              vt.removeChild(e)),
            Ut
          );
        },
      })));
  var si = ["Webkit", "Moz", "ms"],
    ai = _.createElement("div").style,
    oi = {};
  function li(e) {
    return (
      T.cssProps[e] ||
      oi[e] ||
      (e in ai
        ? e
        : (oi[e] =
          ((e) => {
            for (
              var t = e[0].toUpperCase() + e.slice(1), i = si.length;
              i--;
            )
              if ((e = si[i] + t) in ai) return e;
          })(e) || e))
    );
  }
  var di = /^(none|table(?!-c[ea]).+)/,
    ci = { position: "absolute", visibility: "hidden", display: "block" },
    ui = { letterSpacing: "0", fontWeight: "400" };
  function pi(e, t, i) {
    var r = mt.exec(t);
    return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
  }
  function fi(e, t, i, r, n, s) {
    var a = "width" === t ? 1 : 0,
      o = 0,
      l = 0,
      d = 0;
    if (i === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      ("margin" === i && (d += T.css(e, i + gt[a], !0, n)),
        r
          ? ("content" === i && (l -= T.css(e, "padding" + gt[a], !0, n)),
            "margin" !== i &&
            (l -= T.css(e, "border" + gt[a] + "Width", !0, n)))
          : ((l += T.css(e, "padding" + gt[a], !0, n)),
            "padding" !== i
              ? (l += T.css(e, "border" + gt[a] + "Width", !0, n))
              : (o += T.css(e, "border" + gt[a] + "Width", !0, n))));
    return (
      !r &&
      0 <= s &&
      (l +=
        Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - 0.5,
          ),
        ) || 0),
      l + d
    );
  }
  function hi(e, t, i) {
    var r = $t(e),
      n =
        (!m.boxSizingReliable() || i) &&
        "border-box" === T.css(e, "boxSizing", !1, r),
      s = n,
      a = ti(e, t, r),
      o = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Jt.test(a)) {
      if (!i) return a;
      a = "auto";
    }
    return (
      ((!m.boxSizingReliable() && n) ||
        (!m.reliableTrDimensions() && y(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
      e.getClientRects().length &&
      ((n = "border-box" === T.css(e, "boxSizing", !1, r)), (s = o in e)) &&
      (a = e[o]),
      (a = parseFloat(a) || 0) +
      fi(e, t, i || (n ? "border" : "content"), s, r, a) +
      "px"
    );
  }
  function I(e, t, i, r, n) {
    return new I.prototype.init(e, t, i, r, n);
  }
  (T.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (t = ti(e, "opacity")) ? "1" : t;
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, i, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var n,
          s,
          a,
          o = P(t),
          l = Zt.test(t),
          d = e.style;
        if (
          (l || (t = li(o)), (a = T.cssHooks[t] || T.cssHooks[o]), void 0 === i)
        )
          return a && "get" in a && void 0 !== (n = a.get(e, !1, r)) ? n : d[t];
        ("string" == (s = typeof i) &&
          (n = mt.exec(i)) &&
          n[1] &&
          ((i = wt(e, t, n)), (s = "number")),
          null != i &&
          i == i &&
          ("number" !== s ||
            l ||
            (i += (n && n[3]) || (T.cssNumber[o] ? "" : "px")),
            m.clearCloneStyle ||
            "" !== i ||
            0 !== t.indexOf("background") ||
            (d[t] = "inherit"),
            (a && "set" in a && void 0 === (i = a.set(e, i, r))) ||
            (l ? d.setProperty(t, i) : (d[t] = i))));
      }
    },
    css: function (e, t, i, r) {
      var n,
        s = P(t);
      return (
        Zt.test(t) || (t = li(s)),
        "normal" ===
        (n =
          void 0 ===
            (n =
              (s = T.cssHooks[t] || T.cssHooks[s]) && "get" in s
                ? s.get(e, !0, i)
                : n)
            ? ti(e, t, r)
            : n) &&
        t in ui &&
        (n = ui[t]),
        ("" === i || i) && ((s = parseFloat(n)), !0 === i || isFinite(s))
          ? s || 0
          : n
      );
    },
  }),
    T.each(["height", "width"], function (e, a) {
      T.cssHooks[a] = {
        get: function (e, t, i) {
          if (t)
            return !di.test(T.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? hi(e, a, i)
              : Wt(e, ci, function () {
                return hi(e, a, i);
              });
        },
        set: function (e, t, i) {
          var r = $t(e),
            n = !m.scrollboxSize() && "absolute" === r.position,
            s = (n || i) && "border-box" === T.css(e, "boxSizing", !1, r),
            i = i ? fi(e, a, i, s, r) : 0;
          return (
            s &&
            n &&
            (i -= Math.ceil(
              e["offset" + a[0].toUpperCase() + a.slice(1)] -
              parseFloat(r[a]) -
              fi(e, a, "border", !1, r) -
              0.5,
            )),
            i &&
            (s = mt.exec(t)) &&
            "px" !== (s[3] || "px") &&
            ((e.style[a] = t), (t = T.css(e, a))),
            pi(0, t, i)
          );
        },
      };
    }),
    (T.cssHooks.marginLeft = ii(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(ti(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
            Wt(e, { marginLeft: 0 }, function () {
              return e.getBoundingClientRect().left;
            })) + "px"
        );
    })),
    T.each({ margin: "", padding: "", border: "Width" }, function (n, s) {
      ((T.cssHooks[n + s] = {
        expand: function (e) {
          for (
            var t = 0, i = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            i[n + gt[t] + s] = r[t] || r[t - 2] || r[0];
          return i;
        },
      }),
        "margin" !== n && (T.cssHooks[n + s].set = pi));
    }),
    T.fn.extend({
      css: function (e, t) {
        return c(
          this,
          function (e, t, i) {
            var r,
              n,
              s = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $t(e), n = t.length; a < n; a++)
                s[t[a]] = T.css(e, t[a], !1, r);
              return s;
            }
            return void 0 !== i ? T.style(e, t, i) : T.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((T.Tween = I).prototype = {
      constructor: I,
      init: function (e, t, i, r, n, s) {
        ((this.elem = e),
          (this.prop = i),
          (this.easing = n || T.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = s || (T.cssNumber[i] ? "" : "px")));
      },
      cur: function () {
        var e = I.propHooks[this.prop];
        return (e && e.get ? e : I.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          i = I.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
              T.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration,
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
          this.options.step.call(this.elem, this.now, this),
          (i && i.set ? i : I.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = I.prototype),
    ((I.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = T.css(e.elem, e.prop, "")) && "auto" !== e
              ? e
              : 0;
        },
        set: function (e) {
          T.fx.step[e.prop]
            ? T.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!T.cssHooks[e.prop] && null == e.elem.style[li(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : T.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = I.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (T.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (T.fx = I.prototype.init),
    (T.fx.step = {}));
  var mi,
    gi,
    vi = /^(?:toggle|show|hide)$/,
    bi = /queueHooks$/;
  function yi() {
    gi &&
      (!1 === _.hidden && E.requestAnimationFrame
        ? E.requestAnimationFrame(yi)
        : E.setTimeout(yi, T.fx.interval),
        T.fx.tick());
  }
  function wi() {
    return (
      E.setTimeout(function () {
        mi = void 0;
      }),
      (mi = Date.now())
    );
  }
  function xi(e, t) {
    var i,
      r = 0,
      n = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      n["margin" + (i = gt[r])] = n["padding" + i] = e;
    return (t && (n.opacity = n.width = e), n);
  }
  function Ei(e, t, i) {
    for (
      var r,
      n = (j.tweeners[t] || []).concat(j.tweeners["*"]),
      s = 0,
      a = n.length;
      s < a;
      s++
    )
      if ((r = n[s].call(i, t, e))) return r;
  }
  function j(n, e, t) {
    var i,
      s,
      r,
      a,
      o,
      l,
      d,
      c = 0,
      u = j.prefilters.length,
      p = T.Deferred().always(function () {
        delete f.elem;
      }),
      f = function () {
        if (s) return !1;
        for (
          var e = mi || wi(),
          e = Math.max(0, h.startTime + h.duration - e),
          t = 1 - (e / h.duration || 0),
          i = 0,
          r = h.tweens.length;
          i < r;
          i++
        )
          h.tweens[i].run(t);
        return (
          p.notifyWith(n, [h, t, e]),
          t < 1 && r
            ? e
            : (r || p.notifyWith(n, [h, 1, 0]), p.resolveWith(n, [h]), !1)
        );
      },
      h = p.promise({
        elem: n,
        props: T.extend({}, e),
        opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: mi || wi(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          t = T.Tween(
            n,
            h.opts,
            e,
            t,
            h.opts.specialEasing[e] || h.opts.easing,
          );
          return (h.tweens.push(t), t);
        },
        stop: function (e) {
          var t = 0,
            i = e ? h.tweens.length : 0;
          if (!s) {
            for (s = !0; t < i; t++) h.tweens[t].run(1);
            e
              ? (p.notifyWith(n, [h, 1, 0]), p.resolveWith(n, [h, e]))
              : p.rejectWith(n, [h, e]);
          }
          return this;
        },
      }),
      m = h.props,
      g = m,
      v = h.opts.specialEasing;
    for (r in g)
      if (
        ((o = v[(a = P(r))]),
          (l = g[r]),
          Array.isArray(l) && ((o = l[1]), (l = g[r] = l[0])),
          r !== a && ((g[a] = l), delete g[r]),
          (d = T.cssHooks[a]) && "expand" in d)
      )
        for (r in ((l = d.expand(l)), delete g[a], l))
          r in g || ((g[r] = l[r]), (v[r] = o));
      else v[a] = o;
    for (; c < u; c++)
      if ((i = j.prefilters[c].call(h, n, m, h.opts)))
        return (
          b(i.stop) &&
          (T._queueHooks(h.elem, h.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      T.map(m, Ei, h),
      b(h.opts.start) && h.opts.start.call(n, h),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always),
      T.fx.timer(T.extend(f, { elem: n, anim: h, queue: h.opts.queue })),
      h
    );
  }
  ((T.Animation = T.extend(j, {
    tweeners: {
      "*": [
        function (e, t) {
          var i = this.createTween(e, t);
          return (wt(i.elem, e, mt.exec(t), i), i);
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var i, r = 0, n = (e = b(e) ? ((t = e), ["*"]) : e.match(O)).length;
        r < n;
        r++
      )
        ((i = e[r]),
          (j.tweeners[i] = j.tweeners[i] || []),
          j.tweeners[i].unshift(t));
    },
    prefilters: [
      function (e, t, i) {
        var r,
          n,
          s,
          a,
          o,
          l,
          d,
          c = "width" in t || "height" in t,
          u = this,
          p = {},
          f = e.style,
          h = e.nodeType && ht(e),
          m = v.get(e, "fxshow");
        for (r in (i.queue ||
          (null == (a = T._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
              (o = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || o();
              })),
            a.unqueued++,
            u.always(function () {
              u.always(function () {
                (a.unqueued--, T.queue(e, "fx").length || a.empty.fire());
              });
            })),
          t))
          if (((n = t[r]), vi.test(n))) {
            if (
              (delete t[r],
                (s = s || "toggle" === n),
                n === (h ? "hide" : "show"))
            ) {
              if ("show" !== n || !m || void 0 === m[r]) continue;
              h = !0;
            }
            p[r] = (m && m[r]) || T.style(e, r);
          }
        if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
          for (r in (c &&
            1 === e.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
              null == (d = m && m.display) && (d = v.get(e, "display")),
              "none" === (c = T.css(e, "display")) &&
              (d
                ? (c = d)
                : (Et([e], !0),
                  (d = e.style.display || d),
                  (c = T.css(e, "display")),
                  Et([e]))),
              "inline" === c || ("inline-block" === c && null != d)) &&
            "none" === T.css(e, "float") &&
            (l ||
              (u.done(function () {
                f.display = d;
              }),
                null == d && ((c = f.display), (d = "none" === c ? "" : c))),
              (f.display = "inline-block")),
            i.overflow &&
            ((f.overflow = "hidden"),
              u.always(function () {
                ((f.overflow = i.overflow[0]),
                  (f.overflowX = i.overflow[1]),
                  (f.overflowY = i.overflow[2]));
              })),
            (l = !1),
            p))
            (l ||
              (m
                ? "hidden" in m && (h = m.hidden)
                : (m = v.access(e, "fxshow", { display: d })),
                s && (m.hidden = !h),
                h && Et([e], !0),
                u.done(function () {
                  for (r in (h || Et([e]), v.remove(e, "fxshow"), p))
                    T.style(e, r, p[r]);
                })),
              (l = Ei(h ? m[r] : 0, r, u)),
              r in m ||
              ((m[r] = l.start), h && ((l.end = l.start), (l.start = 0))));
      },
    ],
    prefilter: function (e, t) {
      t ? j.prefilters.unshift(e) : j.prefilters.push(e);
    },
  })),
    (T.speed = function (e, t, i) {
      var r =
        e && "object" == typeof e
          ? T.extend({}, e)
          : {
            complete: i || (!i && t) || (b(e) && e),
            duration: e,
            easing: (i && t) || (t && !b(t) && t),
          };
      return (
        T.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
          (r.duration in T.fx.speeds
            ? (r.duration = T.fx.speeds[r.duration])
            : (r.duration = T.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          (b(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue));
        }),
        r
      );
    }),
    T.fn.extend({
      fadeTo: function (e, t, i, r) {
        return this.filter(ht)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, i, r);
      },
      animate: function (t, e, i, r) {
        function n() {
          var e = j(this, T.extend({}, t), a);
          (s || v.get(this, "finish")) && e.stop(!0);
        }
        var s = T.isEmptyObject(t),
          a = T.speed(e, i, r);
        return (
          (n.finish = n),
          s || !1 === a.queue ? this.each(n) : this.queue(a.queue, n)
        );
      },
      stop: function (n, e, s) {
        function a(e) {
          var t = e.stop;
          (delete e.stop, t(s));
        }
        return (
          "string" != typeof n && ((s = e), (e = n), (n = void 0)),
          e && this.queue(n || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != n && n + "queueHooks",
              i = T.timers,
              r = v.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && bi.test(t) && a(r[t]);
            for (t = i.length; t--;)
              i[t].elem !== this ||
                (null != n && i[t].queue !== n) ||
                (i[t].anim.stop(s), (e = !1), i.splice(t, 1));
            (!e && s) || T.dequeue(this, n);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = v.get(this),
              i = t[a + "queue"],
              r = t[a + "queueHooks"],
              n = T.timers,
              s = i ? i.length : 0;
            for (
              t.finish = !0,
              T.queue(this, a, []),
              r && r.stop && r.stop.call(this, !0),
              e = n.length;
              e--;
            )
              n[e].elem === this &&
                n[e].queue === a &&
                (n[e].anim.stop(!0), n.splice(e, 1));
            for (e = 0; e < s; e++)
              i[e] && i[e].finish && i[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    T.each(["toggle", "show", "hide"], function (e, r) {
      var n = T.fn[r];
      T.fn[r] = function (e, t, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(xi(r, !0), e, t, i);
      };
    }),
    T.each(
      {
        slideDown: xi("show"),
        slideUp: xi("hide"),
        slideToggle: xi("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        T.fn[e] = function (e, t, i) {
          return this.animate(r, e, t, i);
        };
      },
    ),
    (T.timers = []),
    (T.fx.tick = function () {
      var e,
        t = 0,
        i = T.timers;
      for (mi = Date.now(); t < i.length; t++)
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      (i.length || T.fx.stop(), (mi = void 0));
    }),
    (T.fx.timer = function (e) {
      (T.timers.push(e), T.fx.start());
    }),
    (T.fx.interval = 13),
    (T.fx.start = function () {
      gi || ((gi = !0), yi());
    }),
    (T.fx.stop = function () {
      gi = null;
    }),
    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (T.fn.delay = function (r, e) {
      return (
        (r = (T.fx && T.fx.speeds[r]) || r),
        this.queue((e = e || "fx"), function (e, t) {
          var i = E.setTimeout(e, r);
          t.stop = function () {
            E.clearTimeout(i);
          };
        })
      );
    }),
    (a = _.createElement("input")),
    (s = _.createElement("select").appendChild(_.createElement("option"))),
    (a.type = "checkbox"),
    (m.checkOn = "" !== a.value),
    (m.optSelected = s.selected),
    ((a = _.createElement("input")).value = "t"),
    (a.type = "radio"),
    (m.radioValue = "t" === a.value));
  var _i,
    Ti = T.expr.attrHandle,
    Si =
      (T.fn.extend({
        attr: function (e, t) {
          return c(this, T.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, i) {
            var r,
              n,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return void 0 === e.getAttribute
                ? T.prop(e, t, i)
                : ((1 === s && T.isXMLDoc(e)) ||
                  (n =
                    T.attrHooks[t.toLowerCase()] ||
                    (T.expr.match.bool.test(t) ? _i : void 0)),
                  void 0 !== i
                    ? null === i
                      ? void T.removeAttr(e, t)
                      : n && "set" in n && void 0 !== (r = n.set(e, i, t))
                        ? r
                        : (e.setAttribute(t, i + ""), i)
                    : !(n && "get" in n && null !== (r = n.get(e, t))) &&
                      null == (r = T.find.attr(e, t))
                      ? void 0
                      : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                var i;
                if (!m.radioValue && "radio" === t && y(e, "input"))
                  return (
                    (i = e.value),
                    e.setAttribute("type", t),
                    i && (e.value = i),
                    t
                  );
              },
            },
          },
          removeAttr: function (e, t) {
            var i,
              r = 0,
              n = t && t.match(O);
            if (n && 1 === e.nodeType)
              for (; (i = n[r++]);) e.removeAttribute(i);
          },
        }),
        (_i = {
          set: function (e, t, i) {
            return (!1 === t ? T.removeAttr(e, i) : e.setAttribute(i, i), i);
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var a = Ti[t] || T.find.attr;
          Ti[t] = function (e, t, i) {
            var r,
              n,
              s = t.toLowerCase();
            return (
              i ||
              ((n = Ti[s]),
                (Ti[s] = r),
                (r = null != a(e, t, i) ? s : null),
                (Ti[s] = n)),
              r
            );
          };
        }),
        /^(?:input|select|textarea|button)$/i),
    Ci = /^(?:a|area)$/i;
  function Mi(e) {
    return (e.match(O) || []).join(" ");
  }
  function Ai(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ki(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
  }
  (T.fn.extend({
    prop: function (e, t) {
      return c(this, T.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[T.propFix[e] || e];
      });
    },
  }),
    T.extend({
      prop: function (e, t, i) {
        var r,
          n,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && T.isXMLDoc(e)) ||
            ((t = T.propFix[t] || t), (n = T.propHooks[t])),
            void 0 !== i
              ? n && "set" in n && void 0 !== (r = n.set(e, i, t))
                ? r
                : (e[t] = i)
              : n && "get" in n && null !== (r = n.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = T.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Si.test(e.nodeName) || (Ci.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
    (T.propHooks.selected = {
      get: function (e) {
        e = e.parentNode;
        return (e && e.parentNode && e.parentNode.selectedIndex, null);
      },
      set: function (e) {
        e = e.parentNode;
        e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
      },
    }),
    T.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        T.propFix[this.toLowerCase()] = this;
      },
    ),
    T.fn.extend({
      addClass: function (t) {
        var e, i, r, n, s, a;
        return b(t)
          ? this.each(function (e) {
            T(this).addClass(t.call(this, e, Ai(this)));
          })
          : (e = ki(t)).length
            ? this.each(function () {
              if (
                ((r = Ai(this)),
                  (i = 1 === this.nodeType && " " + Mi(r) + " "))
              ) {
                for (s = 0; s < e.length; s++)
                  ((n = e[s]),
                    i.indexOf(" " + n + " ") < 0 && (i += n + " "));
                ((a = Mi(i)), r !== a && this.setAttribute("class", a));
              }
            })
            : this;
      },
      removeClass: function (t) {
        var e, i, r, n, s, a;
        return b(t)
          ? this.each(function (e) {
            T(this).removeClass(t.call(this, e, Ai(this)));
          })
          : arguments.length
            ? (e = ki(t)).length
              ? this.each(function () {
                if (
                  ((r = Ai(this)),
                    (i = 1 === this.nodeType && " " + Mi(r) + " "))
                ) {
                  for (s = 0; s < e.length; s++)
                    for (n = e[s]; -1 < i.indexOf(" " + n + " ");)
                      i = i.replace(" " + n + " ", " ");
                  ((a = Mi(i)), r !== a && this.setAttribute("class", a));
                }
              })
              : this
            : this.attr("class", "");
      },
      toggleClass: function (t, i) {
        var e,
          r,
          n,
          s,
          a = typeof t,
          o = "string" == a || Array.isArray(t);
        return b(t)
          ? this.each(function (e) {
            T(this).toggleClass(t.call(this, e, Ai(this), i), i);
          })
          : "boolean" == typeof i && o
            ? i
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = ki(t)),
              this.each(function () {
                if (o)
                  for (s = T(this), n = 0; n < e.length; n++)
                    ((r = e[n]),
                      s.hasClass(r) ? s.removeClass(r) : s.addClass(r));
                else
                  (void 0 !== t && "boolean" != a) ||
                    ((r = Ai(this)) && v.set(this, "__className__", r),
                      this.setAttribute &&
                      this.setAttribute(
                        "class",
                        (!r && !1 !== t && v.get(this, "__className__")) || "",
                      ));
              }));
      },
      hasClass: function (e) {
        for (var t, i = 0, r = " " + e + " "; (t = this[i++]);)
          if (1 === t.nodeType && -1 < (" " + Mi(Ai(t)) + " ").indexOf(r))
            return !0;
        return !1;
      },
    }));
  function Li(e) {
    e.stopPropagation();
  }
  var Oi = /\r/g,
    Pi =
      (T.fn.extend({
        val: function (t) {
          var i,
            e,
            r,
            n = this[0];
          return arguments.length
            ? ((r = b(t)),
              this.each(function (e) {
                1 === this.nodeType &&
                  (null == (e = r ? t.call(this, e, T(this).val()) : t)
                    ? (e = "")
                    : "number" == typeof e
                      ? (e += "")
                      : Array.isArray(e) &&
                      (e = T.map(e, function (e) {
                        return null == e ? "" : e + "";
                      })),
                    ((i =
                      T.valHooks[this.type] ||
                      T.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in i &&
                      void 0 !== i.set(this, e, "value")) ||
                    (this.value = e));
              }))
            : n
              ? (i =
                T.valHooks[n.type] || T.valHooks[n.nodeName.toLowerCase()]) &&
                "get" in i &&
                void 0 !== (e = i.get(n, "value"))
                ? e
                : "string" == typeof (e = n.value)
                  ? e.replace(Oi, "")
                  : null == e
                    ? ""
                    : e
              : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : Mi(T.text(e));
              },
            },
            select: {
              get: function (e) {
                for (
                  var t,
                  i = e.options,
                  r = e.selectedIndex,
                  n = "select-one" === e.type,
                  s = n ? null : [],
                  a = n ? r + 1 : i.length,
                  o = r < 0 ? a : n ? r : 0;
                  o < a;
                  o++
                )
                  if (
                    ((t = i[o]).selected || o === r) &&
                    !t.disabled &&
                    (!t.parentNode.disabled || !y(t.parentNode, "optgroup"))
                  ) {
                    if (((t = T(t).val()), n)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var i, r, n = e.options, s = T.makeArray(t), a = n.length;
                  a--;
                )
                  ((r = n[a]).selected =
                    -1 < T.inArray(T.valHooks.option.get(r), s)) && (i = !0);
                return (i || (e.selectedIndex = -1), s);
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          ((T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = -1 < T.inArray(T(e).val(), t));
            },
          }),
            m.checkOn ||
            (T.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            }));
        }),
        E.location),
    Di = { guid: Date.now() },
    Ii = /\?/,
    ji =
      ((T.parseXML = function (e) {
        var t, i;
        if (!e || "string" != typeof e) return null;
        try {
          t = new E.DOMParser().parseFromString(e, "text/xml");
        } catch (e) { }
        return (
          (i = t && t.getElementsByTagName("parsererror")[0]),
          (t && !i) ||
          T.error(
            "Invalid XML: " +
            (i
              ? T.map(i.childNodes, function (e) {
                return e.textContent;
              }).join("\n")
              : e),
          ),
          t
        );
      }),
        /^(?:focusinfocus|focusoutblur)$/),
    Ni =
      (T.extend(T.event, {
        trigger: function (e, t, i, r) {
          var n,
            s,
            a,
            o,
            l,
            d,
            c,
            u = [i || _],
            p = $.call(e, "type") ? e.type : e,
            f = $.call(e, "namespace") ? e.namespace.split(".") : [],
            h = (c = s = i = i || _);
          if (
            3 !== i.nodeType &&
            8 !== i.nodeType &&
            !ji.test(p + T.event.triggered) &&
            (-1 < p.indexOf(".") &&
              ((p = (f = p.split(".")).shift()), f.sort()),
              (o = p.indexOf(":") < 0 && "on" + p),
              ((e = e[T.expando]
                ? e
                : new T.Event(p, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
              (e.namespace = f.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (d = T.event.special[p] || {}),
              r || !d.trigger || !1 !== d.trigger.apply(i, t))
          ) {
            if (!r && !d.noBubble && !z(i)) {
              for (
                a = d.delegateType || p, ji.test(a + p) || (h = h.parentNode);
                h;
                h = h.parentNode
              )
                (u.push(h), (s = h));
              s === (i.ownerDocument || _) &&
                u.push(s.defaultView || s.parentWindow || E);
            }
            for (n = 0; (h = u[n++]) && !e.isPropagationStopped();)
              ((c = h),
                (e.type = 1 < n ? a : d.bindType || p),
                (l =
                  (v.get(h, "events") || Object.create(null))[e.type] &&
                  v.get(h, "handle")) && l.apply(h, t),
                (l = o && h[o]) &&
                l.apply &&
                dt(h) &&
                ((e.result = l.apply(h, t)), !1 === e.result) &&
                e.preventDefault());
            return (
              (e.type = p),
              r ||
              e.isDefaultPrevented() ||
              (d._default && !1 !== d._default.apply(u.pop(), t)) ||
              !dt(i) ||
              (o &&
                b(i[p]) &&
                !z(i) &&
                ((s = i[o]) && (i[o] = null),
                  (T.event.triggered = p),
                  e.isPropagationStopped() && c.addEventListener(p, Li),
                  i[p](),
                  e.isPropagationStopped() && c.removeEventListener(p, Li),
                  (T.event.triggered = void 0),
                  s) &&
                (i[o] = s)),
              e.result
            );
          }
        },
        simulate: function (e, t, i) {
          i = T.extend(new T.Event(), i, { type: e, isSimulated: !0 });
          T.event.trigger(i, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return T.event.trigger(e, t, i, !0);
          },
        }),
        /\[\]$/),
    zi = /\r?\n/g,
    Hi = /^(?:submit|button|image|reset|file)$/i,
    qi = /^(?:input|select|textarea|keygen)/i;
  ((T.param = function (e, t) {
    function i(e, t) {
      ((t = b(t) ? t() : t),
        (n[n.length] =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(null == t ? "" : t)));
    }
    var r,
      n = [];
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
      T.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (r in e)
        !(function i(r, e, n, s) {
          if (Array.isArray(e))
            T.each(e, function (e, t) {
              n || Ni.test(r)
                ? s(r, t)
                : i(
                  r +
                  "[" +
                  ("object" == typeof t && null != t ? e : "") +
                  "]",
                  t,
                  n,
                  s,
                );
            });
          else if (n || "object" !== V(e)) s(r, e);
          else for (var t in e) i(r + "[" + t + "]", e[t], n, s);
        })(r, e[r], t, i);
    return n.join("&");
  }),
    T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !T(this).is(":disabled") &&
              qi.test(this.nodeName) &&
              !Hi.test(e) &&
              (this.checked || !_t.test(e))
            );
          })
          .map(function (e, t) {
            var i = T(this).val();
            return null == i
              ? null
              : Array.isArray(i)
                ? T.map(i, function (e) {
                  return { name: t.name, value: e.replace(zi, "\r\n") };
                })
                : { name: t.name, value: i.replace(zi, "\r\n") };
          })
          .get();
      },
    }));
  var Ri = /%20/g,
    Fi = /#.*$/,
    Bi = /([?&])_=[^&]*/,
    $i = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Wi = /^(?:GET|HEAD)$/,
    Xi = /^\/\//,
    Gi = {},
    Yi = {},
    Vi = "*/".concat("*"),
    Ui = _.createElement("a");
  function Ki(s) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var i,
        r = 0,
        n = e.toLowerCase().match(O) || [];
      if (b(t))
        for (; (i = n[r++]);)
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (s[i] = s[i] || []).unshift(t))
            : (s[i] = s[i] || []).push(t);
    };
  }
  function Qi(t, r, n, s) {
    var a = {},
      o = t === Yi;
    function l(e) {
      var i;
      return (
        (a[e] = !0),
        T.each(t[e] || [], function (e, t) {
          t = t(r, n, s);
          return "string" != typeof t || o || a[t]
            ? o
              ? !(i = t)
              : void 0
            : (r.dataTypes.unshift(t), l(t), !1);
        }),
        i
      );
    }
    return l(r.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function Ji(e, t) {
    var i,
      r,
      n = T.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((n[i] ? e : (r = r || {}))[i] = t[i]);
    return (r && T.extend(!0, e, r), e);
  }
  ((Ui.href = Pi.href),
    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Pi.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Pi.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Vi,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ji(Ji(e, T.ajaxSettings), t) : Ji(T.ajaxSettings, e);
      },
      ajaxPrefilter: Ki(Gi),
      ajaxTransport: Ki(Yi),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var l,
          d,
          c,
          i,
          u,
          p,
          f,
          r,
          n,
          h = T.ajaxSetup({}, (t = t || {})),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? T(m) : T.event,
          v = T.Deferred(),
          b = T.Callbacks("once memory"),
          y = h.statusCode || {},
          s = {},
          a = {},
          o = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (p) {
                if (!i)
                  for (i = {}; (t = $i.exec(c));)
                    i[t[1].toLowerCase() + " "] = (
                      i[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = i[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return p ? c : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == p &&
                ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (s[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return (null == p && (h.mimeType = e), this);
            },
            statusCode: function (e) {
              if (e)
                if (p) w.always(e[w.status]);
                else for (var t in e) y[t] = [y[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || o;
              return (l && l.abort(e), x(0, e), this);
            },
          };
        if (
          (v.promise(w),
            (h.url = ((e || h.url || Pi.href) + "").replace(
              Xi,
              Pi.protocol + "//",
            )),
            (h.type = t.method || t.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""]),
            null == h.crossDomain)
        ) {
          n = _.createElement("a");
          try {
            ((n.href = h.url),
              (n.href = n.href),
              (h.crossDomain =
                Ui.protocol + "//" + Ui.host != n.protocol + "//" + n.host));
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = T.param(h.data, h.traditional)),
            Qi(Gi, h, t, w),
            !p)
        ) {
          for (r in ((f = T.event && h.global) &&
            0 == T.active++ &&
            T.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Wi.test(h.type)),
            (d = h.url.replace(Fi, "")),
            h.hasContent
              ? h.data &&
              h.processData &&
              0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
              (h.data = h.data.replace(Ri, "+"))
              : ((n = h.url.slice(d.length)),
                h.data &&
                (h.processData || "string" == typeof h.data) &&
                ((d += (Ii.test(d) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                ((d = d.replace(Bi, "$1")),
                  (n = (Ii.test(d) ? "&" : "?") + "_=" + Di.guid++ + n)),
                (h.url = d + n)),
            h.ifModified &&
            (T.lastModified[d] &&
              w.setRequestHeader("If-Modified-Since", T.lastModified[d]),
              T.etag[d]) &&
            w.setRequestHeader("If-None-Match", T.etag[d]),
            ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
            w.setRequestHeader("Content-Type", h.contentType),
            w.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Vi + "; q=0.01" : "")
                : h.accepts["*"],
            ),
            h.headers))
            w.setRequestHeader(r, h.headers[r]);
          if (h.beforeSend && (!1 === h.beforeSend.call(m, w, h) || p))
            return w.abort();
          if (
            ((o = "abort"),
              b.add(h.complete),
              w.done(h.success),
              w.fail(h.error),
              (l = Qi(Yi, h, t, w)))
          ) {
            if (((w.readyState = 1), f && g.trigger("ajaxSend", [w, h]), p))
              return w;
            h.async &&
              0 < h.timeout &&
              (u = E.setTimeout(function () {
                w.abort("timeout");
              }, h.timeout));
            try {
              ((p = !1), l.send(s, x));
            } catch (e) {
              if (p) throw e;
              x(-1, e);
            }
          } else x(-1, "No Transport");
        }
        return w;
        function x(e, t, i, r) {
          var n,
            s,
            a,
            o = t;
          p ||
            ((p = !0),
              u && E.clearTimeout(u),
              (l = void 0),
              (c = r || ""),
              (w.readyState = 0 < e ? 4 : 0),
              (r = (200 <= e && e < 300) || 304 === e),
              i &&
              (a = ((e, t, i) => {
                for (
                  var r, n, s, a, o = e.contents, l = e.dataTypes;
                  "*" === l[0];
                )
                  (l.shift(),
                    void 0 === r &&
                    (r = e.mimeType || t.getResponseHeader("Content-Type")));
                if (r)
                  for (n in o)
                    if (o[n] && o[n].test(r)) {
                      l.unshift(n);
                      break;
                    }
                if (l[0] in i) s = l[0];
                else {
                  for (n in i) {
                    if (!l[0] || e.converters[n + " " + l[0]]) {
                      s = n;
                      break;
                    }
                    a = a || n;
                  }
                  s = s || a;
                }
                if (s) return (s !== l[0] && l.unshift(s), i[s]);
              })(h, w, i)),
              !r &&
              -1 < T.inArray("script", h.dataTypes) &&
              T.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () { }),
              (a = ((e, t, i, r) => {
                var n,
                  s,
                  a,
                  o,
                  l,
                  d = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
                for (s = c.shift(); s;)
                  if (
                    (e.responseFields[s] && (i[e.responseFields[s]] = t),
                      !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (l = s),
                      (s = c.shift()))
                  )
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                      if (!(a = d[l + " " + s] || d["* " + s]))
                        for (n in d)
                          if (
                            (o = n.split(" "))[1] === s &&
                            (a = d[l + " " + o[0]] || d["* " + o[0]])
                          ) {
                            !0 === a
                              ? (a = d[n])
                              : !0 !== d[n] && ((s = o[0]), c.unshift(o[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + l + " to " + s,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(h, a, w, r)),
              r
                ? (h.ifModified &&
                  ((i = w.getResponseHeader("Last-Modified")) &&
                    (T.lastModified[d] = i),
                    (i = w.getResponseHeader("etag"))) &&
                  (T.etag[d] = i),
                  204 === e || "HEAD" === h.type
                    ? (o = "nocontent")
                    : 304 === e
                      ? (o = "notmodified")
                      : ((o = a.state), (n = a.data), (r = !(s = a.error))))
                : ((s = o), (!e && o) || ((o = "error"), e < 0 && (e = 0))),
              (w.status = e),
              (w.statusText = (t || o) + ""),
              r ? v.resolveWith(m, [n, o, w]) : v.rejectWith(m, [w, o, s]),
              w.statusCode(y),
              (y = void 0),
              f && g.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? n : s]),
              b.fireWith(m, [w, o]),
              f &&
              (g.trigger("ajaxComplete", [w, h]),
                --T.active || T.event.trigger("ajaxStop")));
        }
      },
      getJSON: function (e, t, i) {
        return T.get(e, t, i, "json");
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script");
      },
    }),
    T.each(["get", "post"], function (e, n) {
      T[n] = function (e, t, i, r) {
        return (
          b(t) && ((r = r || i), (i = t), (t = void 0)),
          T.ajax(
            T.extend(
              { url: e, type: n, dataType: r, data: t, success: i },
              T.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    T.ajaxPrefilter(function (e) {
      for (var t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (T._evalUrl = function (e, t, i) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () { } },
        dataFilter: function (e) {
          T.globalEval(e, t, i);
        },
      });
    }),
    T.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
          (b(e) && (e = e.call(this[0])),
            (e = T(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild;)
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (i) {
        return b(i)
          ? this.each(function (e) {
            T(this).wrapInner(i.call(this, e));
          })
          : this.each(function () {
            var e = T(this),
              t = e.contents();
            t.length ? t.wrapAll(i) : e.append(i);
          });
      },
      wrap: function (t) {
        var i = b(t);
        return this.each(function (e) {
          T(this).wrapAll(i ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              T(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e);
    }),
    (T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (T.ajaxSettings.xhr = function () {
      try {
        return new E.XMLHttpRequest();
      } catch (e) { }
    }));
  var Zi = { 0: 200, 1223: 204 },
    er = T.ajaxSettings.xhr();
  ((m.cors = !!er && "withCredentials" in er),
    (m.ajax = er = !!er),
    T.ajaxTransport(function (n) {
      var s, a;
      if (m.cors || (er && !n.crossDomain))
        return {
          send: function (e, t) {
            var i,
              r = n.xhr();
            if (
              (r.open(n.type, n.url, n.async, n.username, n.password),
                n.xhrFields)
            )
              for (i in n.xhrFields) r[i] = n.xhrFields[i];
            for (i in (n.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(n.mimeType),
              n.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
              r.setRequestHeader(i, e[i]);
            ((s = function (e) {
              return function () {
                s &&
                  ((s =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                    null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                        ? "number" != typeof r.status
                          ? t(0, "error")
                          : t(r.status, r.statusText)
                        : t(
                          Zi[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = s()),
              (a = r.onerror = r.ontimeout = s("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                  4 === r.readyState &&
                    E.setTimeout(function () {
                      s && a();
                    });
                }),
              (s = s("abort")));
            try {
              r.send((n.hasContent && n.data) || null);
            } catch (e) {
              if (s) throw e;
            }
          },
          abort: function () {
            s && s();
          },
        };
    }),
    T.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    T.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return (T.globalEval(e), e);
        },
      },
    }),
    T.ajaxPrefilter("script", function (e) {
      (void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"));
    }),
    T.ajaxTransport("script", function (i) {
      var r, n;
      if (i.crossDomain || i.scriptAttrs)
        return {
          send: function (e, t) {
            ((r = T("<script>")
              .attr(i.scriptAttrs || {})
              .prop({ charset: i.scriptCharset, src: i.url })
              .on(
                "load error",
                (n = function (e) {
                  (r.remove(),
                    (n = null),
                    e && t("error" === e.type ? 404 : 200, e.type));
                }),
              )),
              _.head.appendChild(r[0]));
          },
          abort: function () {
            n && n();
          },
        };
    }));
  var tr = [],
    ir = /(=)\?(?=&|$)|\?\?/,
    rr =
      (T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = tr.pop() || T.expando + "_" + Di.guid++;
          return ((this[e] = !0), e);
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
            n,
            s,
            a =
              !1 !== e.jsonp &&
              (ir.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
                ir.test(e.data) &&
                "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback =
                b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(ir, "$1" + r))
                : !1 !== e.jsonp &&
                (e.url += (Ii.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return (s || T.error(r + " was not called"), s[0]);
              }),
              (e.dataTypes[0] = "json"),
              (n = E[r]),
              (E[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                (void 0 === n ? T(E).removeProp(r) : (E[r] = n),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), tr.push(r)),
                  s && b(n) && n(s[0]),
                  (s = n = void 0));
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((e = _.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
            2 === e.childNodes.length)),
        (T.parseHTML = function (e, t, i) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((i = t), (t = !1)),
              t ||
              (m.createHTMLDocument
                ? (((r = (t =
                  _.implementation.createHTMLDocument("")).createElement(
                    "base",
                  )).href = _.location.href),
                  t.head.appendChild(r))
                : (t = _)),
              (r = !i && []),
              (i = Ye.exec(e))
                ? [t.createElement(i[1])]
                : ((i = At([e], t, r)),
                  r && r.length && T(r).remove(),
                  T.merge([], i.childNodes)));
          var r;
        }),
        (T.fn.load = function (e, t, i) {
          var r,
            n,
            s,
            a = this,
            o = e.indexOf(" ");
          return (
            -1 < o && ((r = Mi(e.slice(o))), (e = e.slice(0, o))),
            b(t)
              ? ((i = t), (t = void 0))
              : t && "object" == typeof t && (n = "POST"),
            0 < a.length &&
            T.ajax({ url: e, type: n || "GET", dataType: "html", data: t })
              .done(function (e) {
                ((s = arguments),
                  a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e));
              })
              .always(
                i &&
                function (e, t) {
                  a.each(function () {
                    i.apply(this, s || [e.responseText, t, e]);
                  });
                },
              ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (t) {
          return T.grep(T.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, i) {
            var r,
              n,
              s,
              a,
              o = T.css(e, "position"),
              l = T(e),
              d = {};
            ("static" === o && (e.style.position = "relative"),
              (s = l.offset()),
              (r = T.css(e, "top")),
              (a = T.css(e, "left")),
              (o =
                ("absolute" === o || "fixed" === o) &&
                  -1 < (r + a).indexOf("auto")
                  ? ((n = (o = l.position()).top), o.left)
                  : ((n = parseFloat(r) || 0), parseFloat(a) || 0)),
              null != (t = b(t) ? t.call(e, i, T.extend({}, s)) : t).top &&
              (d.top = t.top - s.top + n),
              null != t.left && (d.left = t.left - s.left + o),
              "using" in t ? t.using.call(e, d) : l.css(d));
          },
        }),
        T.fn.extend({
          offset: function (t) {
            var e, i;
            return arguments.length
              ? void 0 === t
                ? this
                : this.each(function (e) {
                  T.offset.setOffset(this, t, e);
                })
              : (i = this[0])
                ? i.getClientRects().length
                  ? ((e = i.getBoundingClientRect()),
                    (i = i.ownerDocument.defaultView),
                    { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
                  : { top: 0, left: 0 }
                : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                i,
                r = this[0],
                n = { top: 0, left: 0 };
              if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                  i = r.ownerDocument,
                  e = r.offsetParent || i.documentElement;
                  e &&
                  (e === i.body || e === i.documentElement) &&
                  "static" === T.css(e, "position");
                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((n = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                    (n.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - n.top - T.css(r, "marginTop", !0),
                left: t.left - n.left - T.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");
              )
                e = e.offsetParent;
              return e || vt;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, n) {
            var s = "pageYOffset" === n;
            T.fn[t] = function (e) {
              return c(
                this,
                function (e, t, i) {
                  var r;
                  if (
                    (z(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                      void 0 === i)
                  )
                    return r ? r[n] : e[t];
                  r
                    ? r.scrollTo(s ? r.pageXOffset : i, s ? i : r.pageYOffset)
                    : (e[t] = i);
                },
                t,
                e,
                arguments.length,
              );
            };
          },
        ),
        T.each(["top", "left"], function (e, i) {
          T.cssHooks[i] = ii(m.pixelPosition, function (e, t) {
            if (t)
              return ((t = ti(e, i)), Jt.test(t) ? T(e).position()[i] + "px" : t);
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (a, o) {
          T.each(
            { padding: "inner" + a, content: o, "": "outer" + a },
            function (r, s) {
              T.fn[s] = function (e, t) {
                var i = arguments.length && (r || "boolean" != typeof e),
                  n = r || (!0 === e || !0 === t ? "margin" : "border");
                return c(
                  this,
                  function (e, t, i) {
                    var r;
                    return z(e)
                      ? 0 === s.indexOf("outer")
                        ? e["inner" + a]
                        : e.document.documentElement["client" + a]
                      : 9 === e.nodeType
                        ? ((r = e.documentElement),
                          Math.max(
                            e.body["scroll" + a],
                            r["scroll" + a],
                            e.body["offset" + a],
                            r["offset" + a],
                            r["client" + a],
                          ))
                        : void 0 === i
                          ? T.css(e, t, n)
                          : T.style(e, t, i, n);
                  },
                  o,
                  i ? e : void 0,
                  i,
                );
              };
            },
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        T.fn.extend({
          bind: function (e, t, i) {
            return this.on(e, null, t, i);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, i, r) {
            return this.on(t, e, i, r);
          },
          undelegate: function (e, t, i) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", i);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " ",
          ),
          function (e, i) {
            T.fn[i] = function (e, t) {
              return 0 < arguments.length
                ? this.on(i, null, e, t)
                : this.trigger(i);
            };
          },
        ),
        /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
    nr =
      ((T.proxy = function (e, t) {
        var i, r;
        if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), b(e)))
          return (
            (i = o.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, i.concat(o.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            r
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = y),
        (T.isFunction = b),
        (T.isWindow = z),
        (T.camelCase = P),
        (T.type = V),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(rr, "$1");
        }),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return T;
        }),
        E.jQuery),
    sr = E.$;
  return (
    (T.noConflict = function (e) {
      return (
        E.$ === T && (E.$ = sr),
        e && E.jQuery === T && (E.jQuery = nr),
        T
      );
    }),
    void 0 === N && (E.jQuery = E.$ = T),
    T
  );
}),
  ((e, t) => {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).bootstrap = t());
  })(this, function () {
    let r = new Map(),
      N = {
        set(e, t, i) {
          r.has(e) || r.set(e, new Map());
          e = r.get(e);
          (!e.has(t) && 0 !== e.size) || e.set(t, i);
        },
        get: (e, t) => (r.has(e) && r.get(e).get(t)) || null,
        remove(e, t) {
          var i;
          r.has(e) && ((i = r.get(e)).delete(t), 0 === i.size) && r.delete(e);
        },
      },
      z = "transitionend",
      H = (e) =>
      (e =
        e && window.CSS && window.CSS.escape
          ? e.replace(/#([^\s"#']+)/g, (e, t) => "#" + CSS.escape(t))
          : e),
      q = (e) => {
        e.dispatchEvent(new Event(z));
      },
      a = (e) =>
        !(!e || "object" != typeof e) &&
        void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
      n = (e) =>
        a(e)
          ? e.jquery
            ? e[0]
            : e
          : "string" == typeof e && 0 < e.length
            ? document.querySelector(H(e))
            : null,
      s = (t) => {
        if (!a(t) || 0 === t.getClientRects().length) return !1;
        let e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
          i = t.closest("details:not([open])");
        if (i && i !== t) {
          let e = t.closest("summary");
          if (e && e.parentNode !== i) return !1;
          if (null === e) return !1;
        }
        return e;
      },
      o = (e) =>
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        !!e.classList.contains("disabled") ||
        (void 0 !== e.disabled
          ? e.disabled
          : e.hasAttribute("disabled") &&
          "false" !== e.getAttribute("disabled")),
      R = (e) => {
        var t;
        return document.documentElement.attachShadow
          ? "function" == typeof e.getRootNode
            ? (t = e.getRootNode()) instanceof ShadowRoot
              ? t
              : null
            : e instanceof ShadowRoot
              ? e
              : e.parentNode
                ? R(e.parentNode)
                : null
          : null;
      },
      F = () => { },
      B = (e) => {
        e.offsetHeight;
      },
      $ = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      W = [],
      l = () => "rtl" === document.documentElement.dir,
      e = (r) => {
        var e = () => {
          let i = $();
          if (i) {
            let e = r.NAME,
              t = i.fn[e];
            ((i.fn[e] = r.jQueryInterface),
              (i.fn[e].Constructor = r),
              (i.fn[e].noConflict = () => ((i.fn[e] = t), r.jQueryInterface)));
          }
        };
        "loading" === document.readyState
          ? (W.length ||
            document.addEventListener("DOMContentLoaded", () => {
              for (var e of W) e();
            }),
            W.push(e))
          : e();
      },
      d = (e, t = [], i = e) => ("function" == typeof e ? e.call(...t) : i),
      X = (r, n, e = !0) => {
        if (e) {
          e =
            (() => {
              if (!n) return 0;
              let { transitionDuration: e, transitionDelay: t } =
                window.getComputedStyle(n);
              var i = Number.parseFloat(e),
                r = Number.parseFloat(t);
              return i || r
                ? ((e = e.split(",")[0]),
                  (t = t.split(",")[0]),
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(t)))
                : 0;
            })() + 5;
          let t = !1,
            i = ({ target: e }) => {
              e === n && ((t = !0), n.removeEventListener(z, i), d(r));
            };
          (n.addEventListener(z, i),
            setTimeout(() => {
              t || q(n);
            }, e));
        } else d(r);
      },
      G = (e, t, i, r) => {
        var n = e.length;
        let s = e.indexOf(t);
        return -1 === s
          ? !i && r
            ? e[n - 1]
            : e[0]
          : ((s += i ? 1 : -1),
            r && (s = (s + n) % n),
            e[Math.max(0, Math.min(s, n - 1))]);
      },
      Y = /[^.]*(?=\..*)\.|.*/,
      V = /\..*/,
      U = /::\d+$/,
      K = {},
      Q = 1,
      J = { mouseenter: "mouseover", mouseleave: "mouseout" },
      Z = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function ee(e, t) {
      return (t && t + "::" + Q++) || e.uidEvent || Q++;
    }
    function te(e) {
      var t = ee(e);
      return ((e.uidEvent = t), (K[t] = K[t] || {}), K[t]);
    }
    function ie(e, t, i = null) {
      return Object.values(e).find(
        (e) => e.callable === t && e.delegationSelector === i,
      );
    }
    function re(e, t, i) {
      var r = "string" == typeof t,
        t = (!r && t) || i;
      let n = ae(e);
      return [r, t, (n = Z.has(n) ? n : e)];
    }
    function ne(r, n, s, a, o) {
      if ("string" == typeof n && r) {
        let [e, t, i] = re(n, s, a);
        if (n in J) {
          let e = (t) =>
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return t.call(this, e);
            };
          t = e(t);
        }
        var a = te(r),
          a = a[i] || (a[i] = {}),
          l = ie(a, t, e ? s : null);
        if (l) return (l.oneOff = l.oneOff && o);
        var d,
          c,
          u,
          p,
          f,
          l = ee(t, n.replace(Y, "")),
          n = e
            ? ((u = r),
              (p = s),
              (f = t),
              function t(i) {
                var r = u.querySelectorAll(p);
                for (let e = i.target; e && e !== this; e = e.parentNode)
                  for (var n of r)
                    if (n === e)
                      return (
                        oe(i, { delegateTarget: e }),
                        t.oneOff && h.off(u, i.type, p, f),
                        f.apply(e, [i])
                      );
              })
            : ((d = r),
              (c = t),
              function e(t) {
                return (
                  oe(t, { delegateTarget: d }),
                  e.oneOff && h.off(d, t.type, c),
                  c.apply(d, [t])
                );
              });
        ((n.delegationSelector = e ? s : null),
          (n.callable = t),
          (n.oneOff = o),
          (a[(n.uidEvent = l)] = n),
          r.addEventListener(i, n, e));
      }
    }
    function se(e, t, i, r, n) {
      r = ie(t[i], r, n);
      r && (e.removeEventListener(i, r, Boolean(n)), delete t[i][r.uidEvent]);
    }
    function ae(e) {
      return ((e = e.replace(V, "")), J[e] || e);
    }
    let h = {
      on(e, t, i, r) {
        ne(e, t, i, r, !1);
      },
      one(e, t, i, r) {
        ne(e, t, i, r, !0);
      },
      off(o, l, d, c) {
        if ("string" == typeof l && o) {
          let [e, t, r] = re(l, d, c),
            n = r !== l,
            s = te(o),
            a = s[r] || {},
            i = l.startsWith(".");
          if (void 0 === t) {
            if (i)
              for (let e of Object.keys(s)) {
                u = void 0;
                p = void 0;
                f = void 0;
                h = void 0;
                v = void 0;
                m = void 0;
                g = void 0;
                var u = o;
                var p = s;
                var f = e;
                var h = l.slice(1);
                var m,
                  g,
                  v = p[f] || {};
                for ([m, g] of Object.entries(v))
                  m.includes(h) &&
                    se(u, p, f, g.callable, g.delegationSelector);
              }
            for (let [t, i] of Object.entries(a)) {
              let e = t.replace(U, "");
              (n && !l.includes(e)) ||
                se(o, s, r, i.callable, i.delegationSelector);
            }
          } else Object.keys(a).length && se(o, s, r, t, e ? d : null);
        }
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        var r = $();
        let n = null,
          s = !0,
          a = !0,
          o = !1;
        t !== ae(t) &&
          r &&
          ((n = r.Event(t, i)),
            r(e).trigger(n),
            (s = !n.isPropagationStopped()),
            (a = !n.isImmediatePropagationStopped()),
            (o = n.isDefaultPrevented()));
        r = oe(new Event(t, { bubbles: s, cancelable: !0 }), i);
        return (
          o && r.preventDefault(),
          a && e.dispatchEvent(r),
          r.defaultPrevented && n && n.preventDefault(),
          r
        );
      },
    };
    function oe(i, r = {}) {
      for (let [e, t] of Object.entries(r))
        try {
          i[e] = t;
        } catch (r) {
          Object.defineProperty(i, e, { configurable: !0, get: () => t });
        }
      return i;
    }
    function le(t) {
      if ("true" === t) return !0;
      if ("false" === t) return !1;
      if (t === Number(t).toString()) return Number(t);
      if ("" === t || "null" === t) return null;
      if ("string" != typeof t) return t;
      try {
        return JSON.parse(decodeURIComponent(t));
      } catch (e) {
        return t;
      }
    }
    function de(e) {
      return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
    }
    let c = {
      setDataAttribute(e, t, i) {
        e.setAttribute("data-bs-" + de(t), i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute("data-bs-" + de(t));
      },
      getDataAttributes(t) {
        if (!t) return {};
        var i,
          r = {};
        for (i of Object.keys(t.dataset).filter(
          (e) => e.startsWith("bs") && !e.startsWith("bsConfig"),
        )) {
          let e = i.replace(/^bs/, "");
          r[(e = e.charAt(0).toLowerCase() + e.slice(1))] = le(t.dataset[i]);
        }
        return r;
      },
      getDataAttribute: (e, t) => le(e.getAttribute("data-bs-" + de(t))),
    };
    class ce {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!',
        );
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return e;
      }
      _mergeConfigObj(e, t) {
        var i = a(t) ? c.getDataAttribute(t, "config") : {};
        return {
          ...this.constructor.Default,
          ...("object" == typeof i ? i : {}),
          ...(a(t) ? c.getDataAttributes(t) : {}),
          ...("object" == typeof e ? e : {}),
        };
      }
      _typeCheckConfig(i, e = this.constructor.DefaultType) {
        for (var [r, n] of Object.entries(e)) {
          let e = i[r],
            t = a(e)
              ? "element"
              : null == (s = e)
                ? "" + s
                : Object.prototype.toString
                  .call(s)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(n).test(t))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${t}" but expected type "${n}".`,
            );
        }
        var s;
      }
    }
    class t extends ce {
      constructor(e, t) {
        (super(),
          (e = n(e)) &&
          ((this._element = e),
            (this._config = this._getConfig(t)),
            N.set(this._element, this.constructor.DATA_KEY, this)));
      }
      dispose() {
        (N.remove(this._element, this.constructor.DATA_KEY),
          h.off(this._element, this.constructor.EVENT_KEY));
        for (var e of Object.getOwnPropertyNames(this)) this[e] = null;
      }
      _queueCallback(e, t, i = !0) {
        X(e, t, i);
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e, this._element)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      static getInstance(e) {
        return N.get(n(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        );
      }
      static get VERSION() {
        return "5.3.7";
      }
      static get DATA_KEY() {
        return "bs." + this.NAME;
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }
      static eventName(e) {
        return "" + e + this.EVENT_KEY;
      }
    }
    let ue = (t) => {
      let i = t.getAttribute("data-bs-target");
      if (!i || "#" === i) {
        let e = t.getAttribute("href");
        if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
        (e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]),
          (i = e && "#" !== e ? e.trim() : null));
      }
      return i
        ? i
          .split(",")
          .map((e) => H(e))
          .join(",")
        : null;
    },
      u = {
        find: (e, t = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e, t = document.documentElement) =>
          Element.prototype.querySelector.call(t, e),
        children: (e, t) =>
          [].concat(...e.children).filter((e) => e.matches(t)),
        parents(e, t) {
          var i = [];
          let r = e.parentNode.closest(t);
          for (; r;) (i.push(r), (r = r.parentNode.closest(t)));
          return i;
        },
        prev(e, t) {
          let i = e.previousElementSibling;
          for (; i;) {
            if (i.matches(t)) return [i];
            i = i.previousElementSibling;
          }
          return [];
        },
        next(e, t) {
          let i = e.nextElementSibling;
          for (; i;) {
            if (i.matches(t)) return [i];
            i = i.nextElementSibling;
          }
          return [];
        },
        focusableChildren(e) {
          var t = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((e) => e + ':not([tabindex^="-"])')
            .join(",");
          return this.find(t, e).filter((e) => !o(e) && s(e));
        },
        getSelectorFromElement(e) {
          e = ue(e);
          return e && u.findOne(e) ? e : null;
        },
        getElementFromSelector(e) {
          e = ue(e);
          return e ? u.findOne(e) : null;
        },
        getMultipleElementsFromSelector(e) {
          e = ue(e);
          return e ? u.find(e) : [];
        },
      },
      pe = (t, i = "hide") => {
        let e = "click.dismiss" + t.EVENT_KEY,
          r = t.NAME;
        h.on(document, e, `[data-bs-dismiss="${r}"]`, function (e) {
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            o(this) ||
            ((e = u.getElementFromSelector(this) || this.closest("." + r)),
              t.getOrCreateInstance(e)[i]()));
        });
      };
    class fe extends t {
      static get NAME() {
        return "alert";
      }
      close() {
        var e;
        h.trigger(this._element, "close.bs.alert").defaultPrevented ||
          (this._element.classList.remove("show"),
            (e = this._element.classList.contains("fade")),
            this._queueCallback(() => this._destroyElement(), this._element, e));
      }
      _destroyElement() {
        (this._element.remove(),
          h.trigger(this._element, "closed.bs.alert"),
          this.dispose());
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = fe.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    (pe(fe, "close"), e(fe));
    let he = '[data-bs-toggle="button"]';
    class me extends t {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active"),
        );
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = me.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }
    (h.on(document, "click.bs.button.data-api", he, (e) => {
      e.preventDefault();
      e = e.target.closest(he);
      me.getOrCreateInstance(e).toggle();
    }),
      e(me));
    let i = ".bs.swipe",
      ge =
        (i,
          i,
          i,
          i,
          i,
          { endCallback: null, leftCallback: null, rightCallback: null }),
      ve = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class be extends ce {
      constructor(e, t) {
        (super(),
          (this._element = e) &&
          be.isSupported() &&
          ((this._config = this._getConfig(t)),
            (this._deltaX = 0),
            (this._supportPointerEvents = Boolean(window.PointerEvent)),
            this._initEvents()));
      }
      static get Default() {
        return ge;
      }
      static get DefaultType() {
        return ve;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        h.off(this._element, i);
      }
      _start(e) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
          : (this._deltaX = e.touches[0].clientX);
      }
      _end(e) {
        (this._eventIsPointerPenTouch(e) &&
          (this._deltaX = e.clientX - this._deltaX),
          this._handleSwipe(),
          d(this._config.endCallback));
      }
      _move(e) {
        this._deltaX =
          e.touches && 1 < e.touches.length
            ? 0
            : e.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        var e = Math.abs(this._deltaX);
        e <= 40 ||
          ((e = e / this._deltaX),
            (this._deltaX = 0),
            e &&
            d(0 < e ? this._config.rightCallback : this._config.leftCallback));
      }
      _initEvents() {
        this._supportPointerEvents
          ? (h.on(this._element, "pointerdown.bs.swipe", (e) => this._start(e)),
            h.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)),
            this._element.classList.add("pointer-event"))
          : (h.on(this._element, "touchstart.bs.swipe", (e) => this._start(e)),
            h.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)),
            h.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
      }
      _eventIsPointerPenTouch(e) {
        return (
          this._supportPointerEvents &&
          ("pen" === e.pointerType || "touch" === e.pointerType)
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          0 < navigator.maxTouchPoints
        );
      }
    }
    let ye = ".bs.carousel",
      we = "next",
      p = "prev",
      f = "left",
      xe = "right",
      Ee = "slid" + ye,
      _e = "carousel",
      Te = "active",
      Se = ".active",
      Ce = ".carousel-item",
      Me = (Se, Ce, { ArrowLeft: xe, ArrowRight: f }),
      Ae = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      ke = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class Le extends t {
      constructor(e, t) {
        (super(e, t),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = u.findOne(
            ".carousel-indicators",
            this._element,
          )),
          this._addEventListeners(),
          this._config.ride === _e && this.cycle());
      }
      static get Default() {
        return Ae;
      }
      static get DefaultType() {
        return ke;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(we);
      }
      nextWhenVisible() {
        !document.hidden && s(this._element) && this.next();
      }
      prev() {
        this._slide(p);
      }
      pause() {
        (this._isSliding && q(this._element), this._clearInterval());
      }
      cycle() {
        (this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval,
          )));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? h.one(this._element, Ee, () => this.cycle())
            : this.cycle());
      }
      to(e) {
        var t,
          i = this._getItems();
        e > i.length - 1 ||
          e < 0 ||
          (this._isSliding
            ? h.one(this._element, Ee, () => this.to(e))
            : (t = this._getItemIndex(this._getActive())) !== e &&
            ((t = t < e ? we : p), this._slide(t, i[e])));
      }
      dispose() {
        (this._swipeHelper && this._swipeHelper.dispose(), super.dispose());
      }
      _configAfterMerge(e) {
        return ((e.defaultInterval = e.interval), e);
      }
      _addEventListeners() {
        (this._config.keyboard &&
          h.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
          "hover" === this._config.pause &&
          (h.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
            h.on(this._element, "mouseleave.bs.carousel", () =>
              this._maybeEnableCycle(),
            )),
          this._config.touch &&
          be.isSupported() &&
          this._addTouchEventListeners());
      }
      _addTouchEventListeners() {
        for (let e of u.find(".carousel-item img", this._element))
          h.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
        let e = {
          leftCallback: () => this._slide(this._directionToOrder(f)),
          rightCallback: () => this._slide(this._directionToOrder(xe)),
          endCallback: () => {
            "hover" === this._config.pause &&
              (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval,
                )));
          },
        };
        this._swipeHelper = new be(this._element, e);
      }
      _keydown(e) {
        var t;
        /input|textarea/i.test(e.target.tagName) ||
          ((t = Me[e.key]) &&
            (e.preventDefault(), this._slide(this._directionToOrder(t))));
      }
      _getItemIndex(e) {
        return this._getItems().indexOf(e);
      }
      _setActiveIndicatorElement(e) {
        var t;
        this._indicatorsElement &&
          ((t = u.findOne(Se, this._indicatorsElement)).classList.remove(Te),
            t.removeAttribute("aria-current"),
            (t = u.findOne(
              `[data-bs-slide-to="${e}"]`,
              this._indicatorsElement,
            ))) &&
          (t.classList.add(Te), t.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        var e = this._activeElement || this._getActive();
        e &&
          ((e = Number.parseInt(e.getAttribute("data-bs-interval"), 10)),
            (this._config.interval = e || this._config.defaultInterval));
      }
      _slide(t, o = null) {
        if (!this._isSliding) {
          let n = this._getActive(),
            s = t === we,
            a = o || G(this._getItems(), n, s, this._config.wrap);
          if (a !== n) {
            let i = this._getItemIndex(a),
              r = (e) =>
                h.trigger(this._element, e, {
                  relatedTarget: a,
                  direction: this._orderToDirection(t),
                  from: this._getItemIndex(n),
                  to: i,
                });
            if (!r("slide.bs.carousel").defaultPrevented && n && a) {
              o = Boolean(this._interval);
              (this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(i),
                (this._activeElement = a));
              let e = s ? "carousel-item-start" : "carousel-item-end",
                t = s ? "carousel-item-next" : "carousel-item-prev";
              (a.classList.add(t),
                B(a),
                n.classList.add(e),
                a.classList.add(e),
                this._queueCallback(
                  () => {
                    (a.classList.remove(e, t),
                      a.classList.add(Te),
                      n.classList.remove(Te, t, e),
                      (this._isSliding = !1),
                      r(Ee));
                  },
                  n,
                  this._isAnimated(),
                ),
                o && this.cycle());
            }
          }
        }
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return u.findOne(".active.carousel-item", this._element);
      }
      _getItems() {
        return u.find(Ce, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(e) {
        return l() ? (e === f ? p : we) : e === f ? we : p;
      }
      _orderToDirection(e) {
        return l() ? (e === p ? f : xe) : e === p ? xe : f;
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = Le.getOrCreateInstance(this, t);
          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          } else e.to(t);
        });
      }
    }
    (h.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      function (e) {
        var t = u.getElementFromSelector(this);
        t &&
          t.classList.contains(_e) &&
          (e.preventDefault(),
            (e = Le.getOrCreateInstance(t)),
            (t = this.getAttribute("data-bs-slide-to"))
              ? e.to(t)
              : "next" === c.getDataAttribute(this, "slide")
                ? e.next()
                : e.prev(),
            e._maybeEnableCycle());
      },
    ),
      h.on(window, "load.bs.carousel.data-api", () => {
        var e;
        for (e of u.find('[data-bs-ride="carousel"]'))
          Le.getOrCreateInstance(e);
      }),
      e(Le));
    let Oe = "show",
      m = "collapse",
      Pe = "collapsing",
      De = (m, m, '[data-bs-toggle="collapse"]'),
      Ie = { parent: null, toggle: !0 },
      je = { parent: "(null|element)", toggle: "boolean" };
    class Ne extends t {
      constructor(e, t) {
        (super(e, t), (this._isTransitioning = !1), (this._triggerArray = []));
        let r = u.find(De);
        for (let i of r) {
          let e = u.getSelectorFromElement(i),
            t = u.find(e).filter((e) => e === this._element);
          null !== e && t.length && this._triggerArray.push(i);
        }
        (this._initializeChildren(),
          this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle());
      }
      static get Default() {
        return Ie;
      }
      static get DefaultType() {
        return je;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (!this._isTransitioning && !this._isShown()) {
          let t = [];
          if (
            !(
              ((t = this._config.parent
                ? this._getFirstLevelChildren(
                  ".collapse.show, .collapse.collapsing",
                )
                  .filter((e) => e !== this._element)
                  .map((e) => Ne.getOrCreateInstance(e, { toggle: !1 }))
                : t).length &&
                t[0]._isTransitioning) ||
              h.trigger(this._element, "show.bs.collapse").defaultPrevented
            )
          ) {
            for (let e of t) e.hide();
            let e = this._getDimension();
            (this._element.classList.remove(m),
              this._element.classList.add(Pe),
              (this._element.style[e] = 0),
              this._addAriaAndCollapsedClass(this._triggerArray, !0),
              (this._isTransitioning = !0));
            var i = "scroll" + (e[0].toUpperCase() + e.slice(1));
            (this._queueCallback(
              () => {
                ((this._isTransitioning = !1),
                  this._element.classList.remove(Pe),
                  this._element.classList.add(m, Oe),
                  (this._element.style[e] = ""),
                  h.trigger(this._element, "shown.bs.collapse"));
              },
              this._element,
              !0,
            ),
              (this._element.style[e] = this._element[i] + "px"));
          }
        }
      }
      hide() {
        if (
          !this._isTransitioning &&
          this._isShown() &&
          !h.trigger(this._element, "hide.bs.collapse").defaultPrevented
        ) {
          let e = this._getDimension();
          ((this._element.style[e] =
            this._element.getBoundingClientRect()[e] + "px"),
            B(this._element),
            this._element.classList.add(Pe),
            this._element.classList.remove(m, Oe));
          for (let e of this._triggerArray) {
            var t = u.getElementFromSelector(e);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
          }
          ((this._isTransitioning = !0),
            (this._element.style[e] = ""),
            this._queueCallback(
              () => {
                ((this._isTransitioning = !1),
                  this._element.classList.remove(Pe),
                  this._element.classList.add(m),
                  h.trigger(this._element, "hidden.bs.collapse"));
              },
              this._element,
              !0,
            ));
        }
      }
      _isShown(e = this._element) {
        return e.classList.contains(Oe);
      }
      _configAfterMerge(e) {
        return ((e.toggle = Boolean(e.toggle)), (e.parent = n(e.parent)), e);
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (this._config.parent) {
          let e = this._getFirstLevelChildren(De);
          for (var t of e) {
            let e = u.getElementFromSelector(t);
            e && this._addAriaAndCollapsedClass([t], this._isShown(e));
          }
        }
      }
      _getFirstLevelChildren(e) {
        let t = u.find(":scope .collapse .collapse", this._config.parent);
        return u.find(e, this._config.parent).filter((e) => !t.includes(e));
      }
      _addAriaAndCollapsedClass(e, t) {
        if (e.length)
          for (var i of e)
            (i.classList.toggle("collapsed", !t),
              i.setAttribute("aria-expanded", t));
      }
      static jQueryInterface(t) {
        let i = {};
        return (
          "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1),
          this.each(function () {
            var e = Ne.getOrCreateInstance(this, i);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          })
        );
      }
    }
    (h.on(document, "click.bs.collapse.data-api", De, function (e) {
      ("A" === e.target.tagName ||
        (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
        e.preventDefault();
      for (let e of u.getMultipleElementsFromSelector(this))
        Ne.getOrCreateInstance(e, { toggle: !1 }).toggle();
    }),
      e(Ne));
    var M = "top",
      A = "bottom",
      k = "right",
      L = "left",
      ze = "auto",
      O = [M, A, k, L],
      P = "start",
      y = "end",
      He = "clippingParents",
      qe = "viewport",
      Re = "popper",
      Fe = "reference",
      Be = O.reduce(function (e, t) {
        return e.concat([t + "-" + P, t + "-" + y]);
      }, []),
      $e = [].concat(O, [ze]).reduce(function (e, t) {
        return e.concat([t, t + "-" + P, t + "-" + y]);
      }, []),
      We = "beforeRead",
      Xe = "afterRead",
      Ge = "beforeMain",
      Ye = "afterMain",
      Ve = "beforeWrite",
      Ue = "afterWrite",
      Ke = [We, "read", Xe, Ge, "main", Ye, Ve, "write", Ue];
    function g(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function w(e) {
      var t;
      return null == e
        ? window
        : "[object Window]" !== e.toString()
          ? ((t = e.ownerDocument) && t.defaultView) || window
          : e;
    }
    function v(e) {
      return e instanceof w(e).Element || e instanceof Element;
    }
    function b(e) {
      return e instanceof w(e).HTMLElement || e instanceof HTMLElement;
    }
    function Qe(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof w(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    var Je = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var n = e.state;
        Object.keys(n.elements).forEach(function (e) {
          var t = n.styles[e] || {},
            i = n.attributes[e] || {},
            r = n.elements[e];
          b(r) &&
            g(r) &&
            (Object.assign(r.style, t),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t
                  ? r.removeAttribute(e)
                  : r.setAttribute(e, !0 === t ? "" : t);
              }));
        });
      },
      effect: function (e) {
        var r = e.state,
          n = {
            popper: {
              position: r.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(r.elements.popper.style, n.popper),
          (r.styles = n),
          r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow),
          function () {
            Object.keys(r.elements).forEach(function (e) {
              var t = r.elements[e],
                i = r.attributes[e] || {},
                e = Object.keys(
                  (r.styles.hasOwnProperty(e) ? r.styles : n)[e],
                ).reduce(function (e, t) {
                  return ((e[t] = ""), e);
                }, {});
              b(t) &&
                g(t) &&
                (Object.assign(t.style, e),
                  Object.keys(i).forEach(function (e) {
                    t.removeAttribute(e);
                  }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function D(e) {
      return e.split("-")[0];
    }
    var C = Math.max,
      Ze = Math.min,
      et = Math.round;
    function tt() {
      var e = navigator.userAgentData;
      return null != e && e.brands && Array.isArray(e.brands)
        ? e.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
        : navigator.userAgent;
    }
    function it() {
      return !/^((?!chrome|android).)*safari/i.test(tt());
    }
    function rt(e, t, i) {
      (void 0 === t && (t = !1), void 0 === i && (i = !1));
      var r = e.getBoundingClientRect(),
        n = 1,
        s = 1,
        t =
          (t &&
            b(e) &&
            ((n = (0 < e.offsetWidth && et(r.width) / e.offsetWidth) || 1),
              (s = (0 < e.offsetHeight && et(r.height) / e.offsetHeight) || 1)),
            (v(e) ? w(e) : window).visualViewport),
        e = !it() && i,
        i = (r.left + (e && t ? t.offsetLeft : 0)) / n,
        e = (r.top + (e && t ? t.offsetTop : 0)) / s,
        t = r.width / n,
        n = r.height / s;
      return {
        width: t,
        height: n,
        top: e,
        right: i + t,
        bottom: e + n,
        left: i,
        x: i,
        y: e,
      };
    }
    function nt(e) {
      var t = rt(e),
        i = e.offsetWidth,
        r = e.offsetHeight;
      return (
        Math.abs(t.width - i) <= 1 && (i = t.width),
        Math.abs(t.height - r) <= 1 && (r = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: i, height: r }
      );
    }
    function st(e, t) {
      var i = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (i && Qe(i)) {
        var r = t;
        do {
          if (r && e.isSameNode(r)) return !0;
        } while ((r = r.parentNode || r.host));
      }
      return !1;
    }
    function x(e) {
      return w(e).getComputedStyle(e);
    }
    function E(e) {
      return ((v(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function at(e) {
      return "html" === g(e)
        ? e
        : e.assignedSlot || e.parentNode || (Qe(e) ? e.host : null) || E(e);
    }
    function ot(e) {
      return b(e) && "fixed" !== x(e).position ? e.offsetParent : null;
    }
    function lt(e) {
      for (
        var t, i = w(e), r = ot(e);
        r &&
        ((t = r), 0 <= ["table", "td", "th"].indexOf(g(t))) &&
        "static" === x(r).position;
      )
        r = ot(r);
      return (
        ((!r ||
          ("html" !== g(r) &&
            ("body" !== g(r) || "static" !== x(r).position))) &&
          (r ||
            ((e) => {
              var t = /firefox/i.test(tt());
              if (
                !/Trident/i.test(tt()) ||
                !b(e) ||
                "fixed" !== x(e).position
              ) {
                var i = at(e);
                for (
                  Qe(i) && (i = i.host);
                  b(i) && ["html", "body"].indexOf(g(i)) < 0;
                ) {
                  var r = x(i);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
              }
              return null;
            })(e))) ||
        i
      );
    }
    function dt(e) {
      return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
    }
    function ct(e, t, i) {
      return C(e, Ze(t, i));
    }
    function ut(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function pt(i, e) {
      return e.reduce(function (e, t) {
        return ((e[t] = i), e);
      }, {});
    }
    var ft = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          i,
          r,
          n,
          s = e.state,
          a = e.name,
          e = e.options,
          o = s.elements.arrow,
          l = s.modifiersData.popperOffsets,
          d = D(s.placement),
          c = dt(d),
          d = 0 <= [L, k].indexOf(d) ? "height" : "width";
        o &&
          l &&
          ((e = ut(
            "number" !=
              typeof (e =
                "function" == typeof (e = e.padding)
                  ? e(Object.assign({}, s.rects, { placement: s.placement }))
                  : e)
              ? e
              : pt(e, O),
          )),
            (t = nt(o)),
            (n = "y" === c ? M : L),
            (r = "y" === c ? A : k),
            (i =
              s.rects.reference[d] +
              s.rects.reference[c] -
              l[c] -
              s.rects.popper[d]),
            (l = l[c] - s.rects.reference[c]),
            (o = (o = lt(o))
              ? "y" === c
                ? o.clientHeight || 0
                : o.clientWidth || 0
              : 0),
            (n = e[n]),
            (e = o - t[d] - e[r]),
            (n = ct(n, (r = o / 2 - t[d] / 2 + (i / 2 - l / 2)), e)),
            (s.modifiersData[a] =
              (((o = {})[c] = n), (o.centerOffset = n - r), o)));
      },
      effect: function (e) {
        var t = e.state,
          e = e.options.element,
          e = void 0 === e ? "[data-popper-arrow]" : e;
        null != e &&
          ("string" != typeof e || (e = t.elements.popper.querySelector(e))) &&
          st(t.elements.popper, e) &&
          (t.elements.arrow = e);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function ht(e) {
      return e.split("-")[1];
    }
    var mt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function gt(e) {
      var t = e.popper,
        i = e.popperRect,
        r = e.placement,
        n = e.variation,
        s = e.offsets,
        a = e.position,
        o = e.gpuAcceleration,
        l = e.adaptive,
        d = e.roundOffsets,
        e = e.isFixed,
        c = s.x,
        c = void 0 === c ? 0 : c,
        u = s.y,
        u = void 0 === u ? 0 : u,
        p = "function" == typeof d ? d({ x: c, y: u }) : { x: c, y: u },
        c = p.x,
        u = p.y,
        p = s.hasOwnProperty("x"),
        s = s.hasOwnProperty("y"),
        f = L,
        h = M,
        m = window;
      l &&
        ((v = "clientHeight"),
          (g = "clientWidth"),
          (b = lt(t)) === w(t) &&
          "static" !== x((b = E(t))).position &&
          "absolute" === a &&
          ((v = "scrollHeight"), (g = "scrollWidth")),
          (r !== M && ((r !== L && r !== k) || n !== y)) ||
          ((h = A),
            (u =
              (u -
                ((e && b === m && m.visualViewport
                  ? m.visualViewport.height
                  : b[v]) -
                  i.height)) *
              (o ? 1 : -1))),
          (r !== L && ((r !== M && r !== A) || n !== y)) ||
          ((f = k),
            (c =
              (c -
                ((e && b === m && m.visualViewport
                  ? m.visualViewport.width
                  : b[g]) -
                  i.width)) *
              (o ? 1 : -1))));
      var g,
        v = Object.assign({ position: a }, l && mt),
        b =
          !0 === d
            ? ((r = { x: c, y: u }),
              (n = w(t)),
              (e = r.y),
              (n = n.devicePixelRatio || 1),
              { x: et(r.x * n) / n || 0, y: et(e * n) / n || 0 })
            : { x: c, y: u };
      return (
        (c = b.x),
        (u = b.y),
        o
          ? Object.assign(
            {},
            v,
            (((g = {})[h] = s ? "0" : ""),
              (g[f] = p ? "0" : ""),
              (g.transform =
                (m.devicePixelRatio || 1) <= 1
                  ? "translate(" + c + "px, " + u + "px)"
                  : "translate3d(" + c + "px, " + u + "px, 0)"),
              g),
          )
          : Object.assign(
            {},
            v,
            (((i = {})[h] = s ? u + "px" : ""),
              (i[f] = p ? c + "px" : ""),
              (i.transform = ""),
              i),
          )
      );
    }
    var vt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          e = e.options,
          i = e.gpuAcceleration,
          i = void 0 === i || i,
          r = e.adaptive,
          r = void 0 === r || r,
          e = e.roundOffsets,
          e = void 0 === e || e,
          i = {
            placement: D(t.placement),
            variation: ht(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: i,
            isFixed: "fixed" === t.options.strategy,
          };
        (null != t.modifiersData.popperOffsets &&
          (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            gt(
              Object.assign({}, i, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: r,
                roundOffsets: e,
              }),
            ),
          )),
          null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            gt(
              Object.assign({}, i, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: e,
              }),
            ),
          )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          })));
      },
      data: {},
    },
      bt = { passive: !0 },
      yt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () { },
        effect: function (e) {
          var t = e.state,
            i = e.instance,
            e = e.options,
            r = e.scroll,
            n = void 0 === r || r,
            r = e.resize,
            s = void 0 === r || r,
            a = w(t.elements.popper),
            o = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            n &&
            o.forEach(function (e) {
              e.addEventListener("scroll", i.update, bt);
            }),
            s && a.addEventListener("resize", i.update, bt),
            function () {
              (n &&
                o.forEach(function (e) {
                  e.removeEventListener("scroll", i.update, bt);
                }),
                s && a.removeEventListener("resize", i.update, bt));
            }
          );
        },
        data: {},
      },
      wt = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function xt(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return wt[e];
      });
    }
    var Et = { start: "end", end: "start" };
    function _t(e) {
      return e.replace(/start|end/g, function (e) {
        return Et[e];
      });
    }
    function Tt(e) {
      e = w(e);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function St(e) {
      return rt(E(e)).left + Tt(e).scrollLeft;
    }
    function Ct(e) {
      var e = x(e),
        t = e.overflow;
      return /auto|scroll|overlay|hidden/.test(t + e.overflowY + e.overflowX);
    }
    function Mt(e, t) {
      void 0 === t && (t = []);
      var i = (function e(t) {
        return 0 <= ["html", "body", "#document"].indexOf(g(t))
          ? t.ownerDocument.body
          : b(t) && Ct(t)
            ? t
            : e(at(t));
      })(e),
        e = i === (null == (e = e.ownerDocument) ? void 0 : e.body),
        r = w(i),
        r = e ? [r].concat(r.visualViewport || [], Ct(i) ? i : []) : i,
        i = t.concat(r);
      return e ? i : i.concat(Mt(at(r)));
    }
    function At(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function kt(e, t, i) {
      return t === qe
        ? At(
          ((n = i),
            (a = w((r = e))),
            (o = E(r)),
            (a = a.visualViewport),
            (l = o.clientWidth),
            (o = o.clientHeight),
            (c = d = 0),
            a &&
            ((l = a.width),
              (o = a.height),
              (s = it()) || (!s && "fixed" === n)) &&
            ((d = a.offsetLeft), (c = a.offsetTop)),
            { width: l, height: o, x: d + St(r), y: c }),
        )
        : v(t)
          ? (((n = rt((s = t), !1, "fixed" === i)).top = n.top + s.clientTop),
            (n.left = n.left + s.clientLeft),
            (n.bottom = n.top + s.clientHeight),
            (n.right = n.left + s.clientWidth),
            (n.width = s.clientWidth),
            (n.height = s.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n)
          : At(
            ((a = E(e)),
              (l = E(a)),
              (o = Tt(a)),
              (d = null == (d = a.ownerDocument) ? void 0 : d.body),
              (r = C(
                l.scrollWidth,
                l.clientWidth,
                d ? d.scrollWidth : 0,
                d ? d.clientWidth : 0,
              )),
              (c = C(
                l.scrollHeight,
                l.clientHeight,
                d ? d.scrollHeight : 0,
                d ? d.clientHeight : 0,
              )),
              (a = -o.scrollLeft + St(a)),
              (o = -o.scrollTop),
              "rtl" === x(d || l).direction &&
              (a += C(l.clientWidth, d ? d.clientWidth : 0) - r),
              { width: r, height: c, x: a, y: o }),
          );
      var r, n, s, a, o, l, d, c;
    }
    function Lt(e) {
      var t,
        i = e.reference,
        r = e.element,
        e = e.placement,
        n = e ? D(e) : null,
        e = e ? ht(e) : null,
        s = i.x + i.width / 2 - r.width / 2,
        a = i.y + i.height / 2 - r.height / 2;
      switch (n) {
        case M:
          t = { x: s, y: i.y - r.height };
          break;
        case A:
          t = { x: s, y: i.y + i.height };
          break;
        case k:
          t = { x: i.x + i.width, y: a };
          break;
        case L:
          t = { x: i.x - r.width, y: a };
          break;
        default:
          t = { x: i.x, y: i.y };
      }
      var o = n ? dt(n) : null;
      if (null != o) {
        var l = "y" === o ? "height" : "width";
        switch (e) {
          case P:
            t[o] = t[o] - (i[l] / 2 - r[l] / 2);
            break;
          case y:
            t[o] = t[o] + (i[l] / 2 - r[l] / 2);
        }
      }
      return t;
    }
    function Ot(e, t) {
      var i,
        r,
        n,
        s,
        a,
        o,
        t = (t = void 0 === t ? {} : t),
        l = t.placement,
        l = void 0 === l ? e.placement : l,
        d = t.strategy,
        d = void 0 === d ? e.strategy : d,
        c = t.boundary,
        c = void 0 === c ? He : c,
        u = t.rootBoundary,
        u = void 0 === u ? qe : u,
        p = t.elementContext,
        p = void 0 === p ? Re : p,
        f = t.altBoundary,
        f = void 0 !== f && f,
        t = t.padding,
        t = void 0 === t ? 0 : t,
        t = ut("number" != typeof t ? t : pt(t, O)),
        h = e.rects.popper,
        f = e.elements[f ? (p === Re ? Fe : Re) : p],
        d =
          ((i = v(f) ? f : f.contextElement || E(e.elements.popper)),
            (f = u),
            (r = d),
            (s =
              "clippingParents" === (u = c)
                ? ((a = Mt(at((s = i)))),
                  v(
                    (n =
                      0 <= ["absolute", "fixed"].indexOf(x(s).position) && b(s)
                        ? lt(s)
                        : s),
                  )
                    ? a.filter(function (e) {
                      return v(e) && st(e, n) && "body" !== g(e);
                    })
                    : [])
                : [].concat(u)),
            (a = [].concat(s, [f])),
            (u = a[0]),
            ((f = a.reduce(
              function (e, t) {
                t = kt(i, t, r);
                return (
                  (e.top = C(t.top, e.top)),
                  (e.right = Ze(t.right, e.right)),
                  (e.bottom = Ze(t.bottom, e.bottom)),
                  (e.left = C(t.left, e.left)),
                  e
                );
              },
              kt(i, u, r),
            )).width = f.right - f.left),
            (f.height = f.bottom - f.top),
            (f.x = f.left),
            (f.y = f.top),
            f),
        c = rt(e.elements.reference),
        u = Lt({ reference: c, element: h, placement: l }),
        f = At(Object.assign({}, h, u)),
        h = p === Re ? f : c,
        m = {
          top: d.top - h.top + t.top,
          bottom: h.bottom - d.bottom + t.bottom,
          left: d.left - h.left + t.left,
          right: h.right - d.right + t.right,
        },
        u = e.modifiersData.offset;
      return (
        p === Re &&
        u &&
        ((o = u[l]),
          Object.keys(m).forEach(function (e) {
            var t = 0 <= [k, A].indexOf(e) ? 1 : -1,
              i = 0 <= [M, A].indexOf(e) ? "y" : "x";
            m[e] += o[i] * t;
          })),
        m
      );
    }
    var Pt = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var u = e.state,
          t = e.options,
          e = e.name;
        if (!u.modifiersData[e]._skip) {
          for (
            var i = t.mainAxis,
            r = void 0 === i || i,
            i = t.altAxis,
            n = void 0 === i || i,
            i = t.fallbackPlacements,
            p = t.padding,
            f = t.boundary,
            h = t.rootBoundary,
            s = t.altBoundary,
            a = t.flipVariations,
            m = void 0 === a || a,
            g = t.allowedAutoPlacements,
            a = u.options.placement,
            t = D(a),
            i =
              i ||
              (t !== a && m
                ? D((i = a)) === ze
                  ? []
                  : ((t = xt(i)), [_t(i), t, _t(t)])
                : [xt(a)]),
            o = [a].concat(i).reduce(function (e, t) {
              return e.concat(
                D(t) === ze
                  ? ((i = u),
                    (r = (e = e =
                      void 0 ===
                        (e = {
                          placement: t,
                          boundary: f,
                          rootBoundary: h,
                          padding: p,
                          flipVariations: m,
                          allowedAutoPlacements: g,
                        })
                        ? {}
                        : e).placement),
                    (n = e.boundary),
                    (s = e.rootBoundary),
                    (a = e.padding),
                    (o = e.flipVariations),
                    (l = void 0 === (e = e.allowedAutoPlacements) ? $e : e),
                    (d = ht(r)),
                    (e = d
                      ? o
                        ? Be
                        : Be.filter(function (e) {
                          return ht(e) === d;
                        })
                      : O),
                    (c = (r =
                      0 ===
                        (r = e.filter(function (e) {
                          return 0 <= l.indexOf(e);
                        })).length
                        ? e
                        : r).reduce(function (e, t) {
                          return (
                            (e[t] = Ot(i, {
                              placement: t,
                              boundary: n,
                              rootBoundary: s,
                              padding: a,
                            })[D(t)]),
                            e
                          );
                        }, {})),
                    Object.keys(c).sort(function (e, t) {
                      return c[e] - c[t];
                    }))
                  : t,
              );
              var i, r, n, s, a, o, l, d, c;
            }, []),
            l = u.rects.reference,
            d = u.rects.popper,
            c = new Map(),
            v = !0,
            b = o[0],
            y = 0;
            y < o.length;
            y++
          ) {
            var w = o[y],
              x = D(w),
              E = ht(w) === P,
              _ = 0 <= [M, A].indexOf(x),
              T = _ ? "width" : "height",
              S = Ot(u, {
                placement: w,
                boundary: f,
                rootBoundary: h,
                altBoundary: s,
                padding: p,
              }),
              _ = _ ? (E ? k : L) : E ? A : M,
              E = (l[T] > d[T] && (_ = xt(_)), xt(_)),
              T = [];
            if (
              (r && T.push(S[x] <= 0),
                n && T.push(S[_] <= 0, S[E] <= 0),
                T.every(function (e) {
                  return e;
                }))
            ) {
              ((b = w), (v = !1));
              break;
            }
            c.set(w, T);
          }
          if (v)
            for (
              var C = m ? 3 : 1;
              0 < C &&
              "break" !==
              ((t) => {
                var e = o.find(function (e) {
                  e = c.get(e);
                  if (e)
                    return e.slice(0, t).every(function (e) {
                      return e;
                    });
                });
                if (e) return ((b = e), "break");
              })(C);
              C--
            );
          u.placement !== b &&
            ((u.modifiersData[e]._skip = !0),
              (u.placement = b),
              (u.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function Dt(e, t, i) {
      return {
        top: e.top - t.height - (i = void 0 === i ? { x: 0, y: 0 } : i).y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      };
    }
    function It(t) {
      return [M, k, A, L].some(function (e) {
        return 0 <= t[e];
      });
    }
    var jt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          e = e.name,
          i = t.rects.reference,
          r = t.rects.popper,
          n = t.modifiersData.preventOverflow,
          s = Ot(t, { elementContext: "reference" }),
          a = Ot(t, { altBoundary: !0 }),
          s = Dt(s, i),
          i = Dt(a, r, n),
          a = It(s),
          r = It(i);
        ((t.modifiersData[e] = {
          referenceClippingOffsets: s,
          popperEscapeOffsets: i,
          isReferenceHidden: a,
          hasPopperEscaped: r,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": a,
            "data-popper-escaped": r,
          })));
      },
    },
      Nt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var a = e.state,
            t = e.name,
            e = e.options.offset,
            o = void 0 === e ? [0, 0] : e,
            e = $e.reduce(function (e, t) {
              return (
                (e[t] =
                  ((t = t),
                    (i = a.rects),
                    (r = o),
                    (n = D(t)),
                    (s = 0 <= [L, M].indexOf(n) ? -1 : 1),
                    (i =
                      "function" == typeof r
                        ? r(Object.assign({}, i, { placement: t }))
                        : r),
                    (t = i[0] || 0),
                    (r = (i[1] || 0) * s),
                    0 <= [L, k].indexOf(n) ? { x: r, y: t } : { x: t, y: r })),
                e
              );
              var i, r, n, s;
            }, {}),
            i = e[a.placement],
            r = i.x,
            i = i.y;
          (null != a.modifiersData.popperOffsets &&
            ((a.modifiersData.popperOffsets.x += r),
              (a.modifiersData.popperOffsets.y += i)),
            (a.modifiersData[t] = e));
        },
      },
      zt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state;
          t.modifiersData[e.name] = Lt({
            reference: t.rects.reference,
            element: t.rects.popper,
            placement: t.placement,
          });
        },
        data: {},
      },
      Ht = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            i,
            r,
            n,
            s,
            a,
            o,
            l,
            d,
            c = e.state,
            u = e.options,
            e = e.name,
            p = u.mainAxis,
            p = void 0 === p || p,
            f = u.altAxis,
            f = void 0 !== f && f,
            h = u.tether,
            h = void 0 === h || h,
            m = u.tetherOffset,
            m = void 0 === m ? 0 : m,
            u = Ot(c, {
              boundary: u.boundary,
              rootBoundary: u.rootBoundary,
              padding: u.padding,
              altBoundary: u.altBoundary,
            }),
            g = D(c.placement),
            v = ht(c.placement),
            b = !v,
            y = dt(g),
            w = "x" === y ? "y" : "x",
            x = c.modifiersData.popperOffsets,
            E = c.rects.reference,
            _ = c.rects.popper,
            m =
              "function" == typeof m
                ? m(Object.assign({}, c.rects, { placement: c.placement }))
                : m,
            m =
              "number" == typeof m
                ? { mainAxis: m, altAxis: m }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, m),
            T = c.modifiersData.offset
              ? c.modifiersData.offset[c.placement]
              : null,
            S = { x: 0, y: 0 };
          x &&
            (p &&
              ((p = "y" === y ? "height" : "width"),
                (a = (o = x[y]) + u[(i = "y" === y ? M : L)]),
                (l = o - u[(d = "y" === y ? A : k)]),
                (t = h ? -_[p] / 2 : 0),
                (n = (v === P ? E : _)[p]),
                (v = v === P ? -_[p] : -E[p]),
                (s = c.elements.arrow),
                (s = h && s ? nt(s) : { width: 0, height: 0 }),
                (i = (r = c.modifiersData["arrow#persistent"]
                  ? c.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 })[i]),
                (r = r[d]),
                (d = ct(0, E[p], s[p])),
                (s = b
                  ? E[p] / 2 - t - d - i - m.mainAxis
                  : n - d - i - m.mainAxis),
                (n = b
                  ? -E[p] / 2 + t + d + r + m.mainAxis
                  : v + d + r + m.mainAxis),
                (b = (i = c.elements.arrow && lt(c.elements.arrow))
                  ? "y" === y
                    ? i.clientTop || 0
                    : i.clientLeft || 0
                  : 0),
                (v =
                  o + n - (t = null != (p = null == T ? void 0 : T[y]) ? p : 0)),
                (d = ct(h ? Ze(a, o + s - t - b) : a, o, h ? C(l, v) : l)),
                (x[y] = d),
                (S[y] = d - o)),
              f &&
              ((r = "y" == w ? "height" : "width"),
                (n = (i = x[w]) + u["x" === y ? M : L]),
                (p = i - u["x" === y ? A : k]),
                (s = -1 !== [M, L].indexOf(g)),
                (b = null != (t = null == T ? void 0 : T[w]) ? t : 0),
                (a = s ? n : i - E[r] - _[r] - b + m.altAxis),
                (v = s ? i + E[r] + _[r] - b - m.altAxis : p),
                (o =
                  h && s
                    ? ((d = ct(a, i, (l = v))), l < d ? l : d)
                    : ct(h ? a : n, i, h ? v : p)),
                (x[w] = o),
                (S[w] = o - i)),
              (c.modifiersData[e] = S));
        },
        requiresIfExists: ["offset"],
      };
    function qt(e) {
      var i = new Map(),
        r = new Set(),
        n = [];
      return (
        e.forEach(function (e) {
          i.set(e.name, e);
        }),
        e.forEach(function (e) {
          r.has(e.name) ||
            (function t(e) {
              (r.add(e.name),
                []
                  .concat(e.requires || [], e.requiresIfExists || [])
                  .forEach(function (e) {
                    r.has(e) || ((e = i.get(e)) && t(e));
                  }),
                n.push(e));
            })(e);
        }),
        n
      );
    }
    var Rt = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Ft() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function Bt(e) {
      var e = (e = void 0 === e ? {} : e),
        t = e.defaultModifiers,
        l = void 0 === t ? [] : t,
        t = e.defaultOptions,
        d = void 0 === t ? Rt : t;
      return function (r, n, t) {
        void 0 === t && (t = d);
        var i,
          s,
          f = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Rt, d),
            modifiersData: {},
            elements: { reference: r, popper: n },
            attributes: {},
            styles: {},
          },
          a = [],
          h = !1,
          m = {
            state: f,
            setOptions: function (e) {
              e = "function" == typeof e ? e(f.options) : e;
              (o(),
                (f.options = Object.assign({}, d, f.options, e)),
                (f.scrollParents = {
                  reference: v(r)
                    ? Mt(r)
                    : r.contextElement
                      ? Mt(r.contextElement)
                      : [],
                  popper: Mt(n),
                }));
              ((e = [].concat(l, f.options.modifiers)),
                (t = e.reduce(function (e, t) {
                  var i = e[t.name];
                  return (
                    (e[t.name] = i
                      ? Object.assign({}, i, t, {
                        options: Object.assign({}, i.options, t.options),
                        data: Object.assign({}, i.data, t.data),
                      })
                      : t),
                    e
                  );
                }, {})),
                (i = qt(
                  Object.keys(t).map(function (e) {
                    return t[e];
                  }),
                )));
              var t,
                i,
                e = Ke.reduce(function (e, t) {
                  return e.concat(
                    i.filter(function (e) {
                      return e.phase === t;
                    }),
                  );
                }, []);
              return (
                (f.orderedModifiers = e.filter(function (e) {
                  return e.enabled;
                })),
                f.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    i = e.options,
                    e = e.effect;
                  "function" == typeof e &&
                    ((e = e({
                      state: f,
                      name: t,
                      instance: m,
                      options: void 0 === i ? {} : i,
                    })),
                      a.push(e || function () { }));
                }),
                m.update()
              );
            },
            forceUpdate: function () {
              if (!h) {
                var e = f.elements,
                  t = e.reference,
                  e = e.popper;
                if (Ft(t, e)) {
                  ((f.rects = {
                    reference:
                      ((t = t),
                        (a = lt(e)),
                        void 0 === (o = "fixed" === f.options.strategy) &&
                        (o = !1),
                        (l = b(a)),
                        (d =
                          b(a) &&
                          ((u = (d = a).getBoundingClientRect()),
                            (c = et(u.width) / d.offsetWidth || 1),
                            (u = et(u.height) / d.offsetHeight || 1),
                            1 !== c || 1 !== u)),
                        (c = E(a)),
                        (u = rt(t, d, o)),
                        (t = { scrollLeft: 0, scrollTop: 0 }),
                        (p = { x: 0, y: 0 }),
                        (!l && o) ||
                        (("body" === g(a) && !Ct(c)) ||
                          (t =
                            (l = a) !== w(l) && b(l)
                              ? {
                                scrollLeft: l.scrollLeft,
                                scrollTop: l.scrollTop,
                              }
                              : Tt(l)),
                          b(a)
                            ? (((p = rt(a, !0)).x += a.clientLeft),
                              (p.y += a.clientTop))
                            : c && (p.x = St(c))),
                      {
                        x: u.left + t.scrollLeft - p.x,
                        y: u.top + t.scrollTop - p.y,
                        width: u.width,
                        height: u.height,
                      }),
                    popper: nt(e),
                  }),
                    (f.reset = !1),
                    (f.placement = f.options.placement),
                    f.orderedModifiers.forEach(function (e) {
                      return (f.modifiersData[e.name] = Object.assign(
                        {},
                        e.data,
                      ));
                    }));
                  for (var i, r, n, s = 0; s < f.orderedModifiers.length; s++)
                    !0 !== f.reset
                      ? ((r = (i = f.orderedModifiers[s]).fn),
                        (n = i.options),
                        "function" == typeof r &&
                        (f =
                          r({
                            state: f,
                            options: void 0 === n ? {} : n,
                            name: i.name,
                            instance: m,
                          }) || f))
                      : ((f.reset = !1), (s = -1));
                }
              }
              var a, o, l, d, c, u, p;
            },
            update:
              ((i = function () {
                return new Promise(function (e) {
                  (m.forceUpdate(), e(f));
                });
              }),
                function () {
                  return (s =
                    s ||
                    new Promise(function (e) {
                      Promise.resolve().then(function () {
                        ((s = void 0), e(i()));
                      });
                    }));
                }),
            destroy: function () {
              (o(), (h = !0));
            },
          };
        return (
          Ft(r, n) &&
          m.setOptions(t).then(function (e) {
            !h && t.onFirstUpdate && t.onFirstUpdate(e);
          }),
          m
        );
        function o() {
          (a.forEach(function (e) {
            return e();
          }),
            (a = []));
        }
      };
    }
    var $t = Bt(),
      Wt = Bt({ defaultModifiers: [yt, zt, vt, Je] }),
      Xt = Bt({ defaultModifiers: [yt, zt, vt, Je, Nt, Pt, Ht, ft, jt] });
    let Gt = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: Ye,
          afterRead: Xe,
          afterWrite: Ue,
          applyStyles: Je,
          arrow: ft,
          auto: ze,
          basePlacements: O,
          beforeMain: Ge,
          beforeRead: We,
          beforeWrite: Ve,
          bottom: A,
          clippingParents: He,
          computeStyles: vt,
          createPopper: Xt,
          createPopperBase: $t,
          createPopperLite: Wt,
          detectOverflow: Ot,
          end: y,
          eventListeners: yt,
          flip: Pt,
          hide: jt,
          left: L,
          main: "main",
          modifierPhases: Ke,
          offset: Nt,
          placements: $e,
          popper: Re,
          popperGenerator: Bt,
          popperOffsets: zt,
          preventOverflow: Ht,
          read: "read",
          reference: Fe,
          right: k,
          start: P,
          top: M,
          variationPlacements: Be,
          viewport: qe,
          write: "write",
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
      Yt = "dropdown",
      Vt = ".bs.dropdown",
      Ut = ".data-api",
      Kt = "ArrowDown",
      Qt = "click" + Vt + Ut,
      Jt = "keydown" + Vt + Ut,
      Zt = "show",
      _ = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      ei = (_, ".dropdown-menu"),
      ti = l() ? "top-end" : "top-start",
      ii = l() ? "top-start" : "top-end",
      ri = l() ? "bottom-end" : "bottom-start",
      ni = l() ? "bottom-start" : "bottom-end",
      si = l() ? "left-start" : "right-start",
      ai = l() ? "right-start" : "left-start",
      oi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      li = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class T extends t {
      constructor(e, t) {
        (super(e, t),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            u.next(this._element, ei)[0] ||
            u.prev(this._element, ei)[0] ||
            u.findOne(ei, this._parent)),
          (this._inNavbar = this._detectNavbar()));
      }
      static get Default() {
        return oi;
      }
      static get DefaultType() {
        return li;
      }
      static get NAME() {
        return Yt;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (!o(this._element) && !this._isShown()) {
          let e = { relatedTarget: this._element };
          if (
            !h.trigger(this._element, "show.bs.dropdown", e).defaultPrevented
          ) {
            if (
              (this._createPopper(),
                "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (let e of [].concat(...document.body.children))
                h.on(e, "mouseover", F);
            (this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(Zt),
              this._element.classList.add(Zt),
              h.trigger(this._element, "shown.bs.dropdown", e));
          }
        }
      }
      hide() {
        var e;
        !o(this._element) &&
          this._isShown() &&
          ((e = { relatedTarget: this._element }), this._completeHide(e));
      }
      dispose() {
        (this._popper && this._popper.destroy(), super.dispose());
      }
      update() {
        ((this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update());
      }
      _completeHide(e) {
        if (!h.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (let e of [].concat(...document.body.children))
              h.off(e, "mouseover", F);
          (this._popper && this._popper.destroy(),
            this._menu.classList.remove(Zt),
            this._element.classList.remove(Zt),
            this._element.setAttribute("aria-expanded", "false"),
            c.removeDataAttribute(this._menu, "popper"),
            h.trigger(this._element, "hidden.bs.dropdown", e),
            this._element.focus());
        }
      }
      _getConfig(e) {
        if (
          "object" != typeof (e = super._getConfig(e)).reference ||
          a(e.reference) ||
          "function" == typeof e.reference.getBoundingClientRect
        )
          return e;
        throw new TypeError(
          Yt.toUpperCase() +
          ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.',
        );
      }
      _createPopper() {
        if (void 0 === Gt)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)",
          );
        let e = this._element;
        "parent" === this._config.reference
          ? (e = this._parent)
          : a(this._config.reference)
            ? (e = n(this._config.reference))
            : "object" == typeof this._config.reference &&
            (e = this._config.reference);
        var t = this._getPopperConfig();
        this._popper = Xt(e, this._menu, t);
      }
      _isShown() {
        return this._menu.classList.contains(Zt);
      }
      _getPlacement() {
        var e,
          t = this._parent;
        return t.classList.contains("dropend")
          ? si
          : t.classList.contains("dropstart")
            ? ai
            : t.classList.contains("dropup-center")
              ? "top"
              : t.classList.contains("dropdown-center")
                ? "bottom"
                : ((e =
                  "end" ===
                  getComputedStyle(this._menu)
                    .getPropertyValue("--bs-position")
                    .trim()),
                  t.classList.contains("dropup") ? (e ? ii : ti) : e ? ni : ri);
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        let t = this._config.offset;
        return "string" == typeof t
          ? t.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof t
            ? (e) => t(e, this._element)
            : t;
      }
      _getPopperConfig() {
        var e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (!this._inNavbar && "static" !== this._config.display) ||
          (c.setDataAttribute(this._menu, "popper", "static"),
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...e, ...d(this._config.popperConfig, [void 0, e]) }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        var i = u
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu,
          )
          .filter((e) => s(e));
        i.length && G(i, t, e === Kt, !i.includes(t)).focus();
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = T.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
      static clearMenus(t) {
        if (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) {
          let e = u.find(
            '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show',
          );
          for (var i of e) {
            let e = T.getInstance(i);
            var r;
            e &&
              !1 !== e._config.autoClose &&
              ((r = (i = t.composedPath()).includes(e._menu)),
                i.includes(e._element) ||
                ("inside" === e._config.autoClose && !r) ||
                ("outside" === e._config.autoClose && r) ||
                (e._menu.contains(t.target) &&
                  (("keyup" === t.type && "Tab" === t.key) ||
                    /input|select|option|textarea|form/i.test(
                      t.target.tagName,
                    ))) ||
                ((i = { relatedTarget: e._element }),
                  "click" === t.type && (i.clickEvent = t),
                  e._completeHide(i)));
          }
        }
      }
      static dataApiKeydownHandler(e) {
        var t = /input|textarea/i.test(e.target.tagName),
          i = "Escape" === e.key,
          r = ["ArrowUp", Kt].includes(e.key);
        (!r && !i) ||
          (t && !i) ||
          (e.preventDefault(),
            (t = this.matches(_)
              ? this
              : u.prev(this, _)[0] ||
              u.next(this, _)[0] ||
              u.findOne(_, e.delegateTarget.parentNode)),
            (i = T.getOrCreateInstance(t)),
            r
              ? (e.stopPropagation(), i.show(), i._selectMenuItem(e))
              : i._isShown() && (e.stopPropagation(), i.hide(), t.focus()));
      }
    }
    (h.on(document, Jt, _, T.dataApiKeydownHandler),
      h.on(document, Jt, ei, T.dataApiKeydownHandler),
      h.on(document, Qt, T.clearMenus),
      h.on(document, "keyup.bs.dropdown.data-api", T.clearMenus),
      h.on(document, Qt, _, function (e) {
        (e.preventDefault(), T.getOrCreateInstance(this).toggle());
      }),
      e(T));
    let di = "backdrop",
      ci = "mousedown.bs." + di,
      ui = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      pi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class fi extends ce {
      constructor(e) {
        (super(),
          (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null));
      }
      static get Default() {
        return ui;
      }
      static get DefaultType() {
        return pi;
      }
      static get NAME() {
        return di;
      }
      show(e) {
        var t;
        this._config.isVisible
          ? (this._append(),
            (t = this._getElement()),
            this._config.isAnimated && B(t),
            t.classList.add("show"),
            this._emulateAnimation(() => {
              d(e);
            }))
          : d(e);
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(() => {
              (this.dispose(), d(e));
            }))
          : d(e);
      }
      dispose() {
        this._isAppended &&
          (h.off(this._element, ci),
            this._element.remove(),
            (this._isAppended = !1));
      }
      _getElement() {
        var e;
        return (
          this._element ||
          (((e = document.createElement("div")).className =
            this._config.className),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e)),
          this._element
        );
      }
      _configAfterMerge(e) {
        return ((e.rootElement = n(e.rootElement)), e);
      }
      _append() {
        var e;
        this._isAppended ||
          ((e = this._getElement()),
            this._config.rootElement.append(e),
            h.on(e, ci, () => {
              d(this._config.clickCallback);
            }),
            (this._isAppended = !0));
      }
      _emulateAnimation(e) {
        X(e, this._getElement(), this._config.isAnimated);
      }
    }
    let hi = ".bs.focustrap",
      mi = (hi, hi, "backward"),
      gi = { autofocus: !0, trapElement: null },
      vi = { autofocus: "boolean", trapElement: "element" };
    class bi extends ce {
      constructor(e) {
        (super(),
          (this._config = this._getConfig(e)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null));
      }
      static get Default() {
        return gi;
      }
      static get DefaultType() {
        return vi;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
            h.off(document, hi),
            h.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
            h.on(document, "keydown.tab.bs.focustrap", (e) =>
              this._handleKeydown(e),
            ),
            (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), h.off(document, hi));
      }
      _handleFocusin(e) {
        var t = this._config.trapElement;
        e.target === document ||
          e.target === t ||
          t.contains(e.target) ||
          (0 === (e = u.focusableChildren(t)).length
            ? t
            : this._lastTabNavDirection === mi
              ? e[e.length - 1]
              : e[0]
          ).focus();
      }
      _handleKeydown(e) {
        "Tab" === e.key &&
          (this._lastTabNavDirection = e.shiftKey ? mi : "forward");
      }
    }
    let yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      wi = ".sticky-top",
      xi = "padding-right",
      Ei = "margin-right";
    class _i {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        var e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        let t = this.getWidth();
        (this._disableOverFlow(),
          this._setElementAttributes(this._element, xi, (e) => e + t),
          this._setElementAttributes(yi, xi, (e) => e + t),
          this._setElementAttributes(wi, Ei, (e) => e - t));
      }
      reset() {
        (this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, xi),
          this._resetElementAttributes(yi, xi),
          this._resetElementAttributes(wi, Ei));
      }
      isOverflowing() {
        return 0 < this.getWidth();
      }
      _disableOverFlow() {
        (this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden"));
      }
      _setElementAttributes(e, i, r) {
        let n = this.getWidth();
        this._applyManipulationCallback(e, (e) => {
          var t;
          (e !== this._element && window.innerWidth > e.clientWidth + n) ||
            (this._saveInitialAttribute(e, i),
              (t = window.getComputedStyle(e).getPropertyValue(i)),
              e.style.setProperty(i, r(Number.parseFloat(t)) + "px"));
        });
      }
      _saveInitialAttribute(e, t) {
        var i = e.style.getPropertyValue(t);
        i && c.setDataAttribute(e, t, i);
      }
      _resetElementAttributes(e, i) {
        this._applyManipulationCallback(e, (e) => {
          var t = c.getDataAttribute(e, i);
          null !== t
            ? (c.removeDataAttribute(e, i), e.style.setProperty(i, t))
            : e.style.removeProperty(i);
        });
      }
      _applyManipulationCallback(e, t) {
        if (a(e)) t(e);
        else for (var i of u.find(e, this._element)) t(i);
      }
    }
    let S = ".bs.modal",
      Ti = (S, S, "hidden" + S),
      Si = "show" + S,
      Ci = (S, S, S, S, S, S, "modal-open"),
      Mi = "modal-static",
      Ai = { backdrop: !0, focus: !0, keyboard: !0 },
      ki = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class Li extends t {
      constructor(e, t) {
        (super(e, t),
          (this._dialog = u.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new _i()),
          this._addEventListeners());
      }
      static get Default() {
        return Ai;
      }
      static get DefaultType() {
        return ki;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          h.trigger(this._element, Si, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Ci),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(e)));
      }
      hide() {
        !this._isShown ||
          this._isTransitioning ||
          h.trigger(this._element, "hide.bs.modal").defaultPrevented ||
          ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove("show"),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated(),
            ));
      }
      dispose() {
        (h.off(window, S),
          h.off(this._dialog, S),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose());
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new fi({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new bi({ trapElement: this._element });
      }
      _showElement(e) {
        (document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0));
        var t = u.findOne(".modal-body", this._dialog);
        (t && (t.scrollTop = 0),
          B(this._element),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              (this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                h.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e,
                }));
            },
            this._dialog,
            this._isAnimated(),
          ));
      }
      _addEventListeners() {
        (h.on(this._element, "keydown.dismiss.bs.modal", (e) => {
          "Escape" === e.key &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          h.on(window, "resize.bs.modal", () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          h.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
            h.one(this._element, "click.dismiss.bs.modal", (e) => {
              this._element === t.target &&
                this._element === e.target &&
                ("static" !== this._config.backdrop
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          }));
      }
      _hideModal() {
        ((this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            (document.body.classList.remove(Ci),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              h.trigger(this._element, Ti));
          }));
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (
          !h.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented
        ) {
          let e =
            this._element.scrollHeight >
            document.documentElement.clientHeight,
            t = this._element.style.overflowY;
          "hidden" === t ||
            this._element.classList.contains(Mi) ||
            (e || (this._element.style.overflowY = "hidden"),
              this._element.classList.add(Mi),
              this._queueCallback(() => {
                (this._element.classList.remove(Mi),
                  this._queueCallback(() => {
                    this._element.style.overflowY = t;
                  }, this._dialog));
              }, this._dialog),
              this._element.focus());
        }
      }
      _adjustDialog() {
        let e =
          this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          i = 0 < t;
        if (i && !e) {
          let e = l() ? "paddingLeft" : "paddingRight";
          this._element.style[e] = t + "px";
        }
        if (!i && e) {
          let e = l() ? "paddingRight" : "paddingLeft";
          this._element.style[e] = t + "px";
        }
      }
      _resetAdjustments() {
        ((this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = ""));
      }
      static jQueryInterface(t, i) {
        return this.each(function () {
          var e = Li.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t](i);
          }
        });
      }
    }
    (h.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (e) {
        let t = u.getElementFromSelector(this);
        (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          h.one(t, Si, (e) => {
            e.defaultPrevented ||
              h.one(t, Ti, () => {
                s(this) && this.focus();
              });
          }));
        e = u.findOne(".modal.show");
        (e && Li.getInstance(e).hide(), Li.getOrCreateInstance(t).toggle(this));
      },
    ),
      pe(Li),
      e(Li));
    let Oi = ".bs.offcanvas",
      Pi = "showing",
      Di = ".offcanvas.show",
      Ii = "hidePrevented" + Oi,
      ji = "hidden" + Oi,
      Ni = { backdrop: !0, keyboard: !0, scroll: !1 },
      zi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class I extends t {
      constructor(e, t) {
        (super(e, t),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners());
      }
      static get Default() {
        return Ni;
      }
      static get DefaultType() {
        return zi;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          h.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new _i().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Pi),
            this._queueCallback(
              () => {
                ((this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add("show"),
                  this._element.classList.remove(Pi),
                  h.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e,
                  }));
              },
              this._element,
              !0,
            ));
      }
      hide() {
        !this._isShown ||
          h.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add("hiding"),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                (this._element.classList.remove("show", "hiding"),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new _i().reset(),
                  h.trigger(this._element, ji));
              },
              this._element,
              !0,
            ));
      }
      dispose() {
        (this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose());
      }
      _initializeBackDrop() {
        var e = Boolean(this._config.backdrop);
        return new fi({
          className: "offcanvas-backdrop",
          isVisible: e,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: e
            ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : h.trigger(this._element, Ii);
            }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new bi({ trapElement: this._element });
      }
      _addEventListeners() {
        h.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
          "Escape" === e.key &&
            (this._config.keyboard
              ? this.hide()
              : h.trigger(this._element, Ii));
        });
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = I.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    (h.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (e) {
        var t = u.getElementFromSelector(this);
        (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          o(this) ||
          (h.one(t, ji, () => {
            s(this) && this.focus();
          }),
            (e = u.findOne(Di)) && e !== t && I.getInstance(e).hide(),
            I.getOrCreateInstance(t).toggle(this)));
      },
    ),
      h.on(window, "load.bs.offcanvas.data-api", () => {
        for (var e of u.find(Di)) I.getOrCreateInstance(e).show();
      }),
      h.on(window, "resize.bs.offcanvas", () => {
        for (var e of u.find("[aria-modal][class*=show][class*=offcanvas-]"))
          "fixed" !== getComputedStyle(e).position &&
            I.getOrCreateInstance(e).hide();
      }),
      pe(I),
      e(I));
    let Hi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      dd: [],
      div: [],
      dl: [],
      dt: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
      qi = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      Ri = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Fi = {
        allowList: Hi,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      Bi = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      $i = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class Wi extends ce {
      constructor(e) {
        (super(), (this._config = this._getConfig(e)));
      }
      static get Default() {
        return Fi;
      }
      static get DefaultType() {
        return Bi;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((e) => this._resolvePossibleFunction(e))
          .filter(Boolean);
      }
      hasContent() {
        return 0 < this.getContent().length;
      }
      changeContent(e) {
        return (
          this._checkContent(e),
          (this._config.content = { ...this._config.content, ...e }),
          this
        );
      }
      toHtml() {
        var i = document.createElement("div");
        i.innerHTML = this._maybeSanitize(this._config.template);
        for (let [e, t] of Object.entries(this._config.content))
          this._setContent(i, t, e);
        let e = i.children[0],
          t = this._resolvePossibleFunction(this._config.extraClass);
        return (t && e.classList.add(...t.split(" ")), e);
      }
      _typeCheckConfig(e) {
        (super._typeCheckConfig(e), this._checkContent(e.content));
      }
      _checkContent(e) {
        for (var [t, i] of Object.entries(e))
          super._typeCheckConfig({ selector: t, entry: i }, $i);
      }
      _setContent(e, t, i) {
        i = u.findOne(i, e);
        i &&
          ((t = this._resolvePossibleFunction(t))
            ? a(t)
              ? this._putElementInTemplate(n(t), i)
              : this._config.html
                ? (i.innerHTML = this._maybeSanitize(t))
                : (i.textContent = t)
            : i.remove());
      }
      _maybeSanitize(i) {
        if (this._config.sanitize) {
          var r = i,
            n = this._config.allowList,
            s = this._config.sanitizeFn;
          if (!r.length) return r;
          if (s && "function" == typeof s) return s(r);
          let e = new window.DOMParser().parseFromString(r, "text/html"),
            t = [].concat(...e.body.querySelectorAll("*"));
          for (let r of t) {
            let e = r.nodeName.toLowerCase();
            if (Object.keys(n).includes(e)) {
              let t = [].concat(...r.attributes),
                i = [].concat(n["*"] || [], n[e] || []);
              for (let e of t)
                ((e, t) => {
                  let i = e.nodeName.toLowerCase();
                  return t.includes(i)
                    ? !qi.has(i) || Boolean(Ri.test(e.nodeValue))
                    : t
                      .filter((e) => e instanceof RegExp)
                      .some((e) => e.test(i));
                })(e, i) || r.removeAttribute(e.nodeName);
            } else r.remove();
          }
          return e.body.innerHTML;
        }
        return i;
      }
      _resolvePossibleFunction(e) {
        return d(e, [void 0, this]);
      }
      _putElementInTemplate(e, t) {
        this._config.html
          ? ((t.innerHTML = ""), t.append(e))
          : (t.textContent = e.textContent);
      }
    }
    let Xi = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Gi = "fade",
      Yi = "show",
      Vi = "hide.bs.modal",
      Ui = "hover",
      Ki = "focus",
      Qi = "click",
      Ji = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: l() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: l() ? "right" : "left",
      },
      Zi = {
        allowList: Hi,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      er = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class tr extends t {
      constructor(e, t) {
        if (void 0 === Gt)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)",
          );
        (super(e, t),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle());
      }
      static get Default() {
        return Zi;
      }
      static get DefaultType() {
        return er;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled && (this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        (clearTimeout(this._timeout),
          h.off(this._element.closest(".modal"), Vi, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title"),
          ),
          this._disposePopper(),
          super.dispose());
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (this._isWithContent() && this._isEnabled) {
          let e = h.trigger(this._element, this.constructor.eventName("show")),
            t = (
              R(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
          if (!e.defaultPrevented && t) {
            this._disposePopper();
            var i = this._getTipElement(),
              r = (this._element.setAttribute(
                "aria-describedby",
                i.getAttribute("id"),
              ),
                this._config).container;
            if (
              (this._element.ownerDocument.documentElement.contains(this.tip) ||
                (r.append(i),
                  h.trigger(
                    this._element,
                    this.constructor.eventName("inserted"),
                  )),
                (this._popper = this._createPopper(i)),
                i.classList.add(Yi),
                "ontouchstart" in document.documentElement)
            )
              for (let e of [].concat(...document.body.children))
                h.on(e, "mouseover", F);
            this._queueCallback(
              () => {
                (h.trigger(this._element, this.constructor.eventName("shown")),
                  !1 === this._isHovered && this._leave(),
                  (this._isHovered = !1));
              },
              this.tip,
              this._isAnimated(),
            );
          }
        }
      }
      hide() {
        if (
          this._isShown() &&
          !h.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(Yi),
              "ontouchstart" in document.documentElement)
          )
            for (var e of [].concat(...document.body.children))
              h.off(e, "mouseover", F);
          ((this._activeTrigger[Qi] = !1),
            (this._activeTrigger[Ki] = !1),
            (this._activeTrigger[Ui] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    h.trigger(
                      this._element,
                      this.constructor.eventName("hidden"),
                    ));
              },
              this.tip,
              this._isAnimated(),
            ));
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return Boolean(this._getTitle());
      }
      _getTipElement() {
        return (
          this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate(),
          )),
          this.tip
        );
      }
      _createTipElement(e) {
        e = this._getTemplateFactory(e).toHtml();
        if (!e) return null;
        (e.classList.remove(Gi, Yi),
          e.classList.add(`bs-${this.constructor.NAME}-auto`));
        var t = ((e) => {
          for (
            ;
            (e += Math.floor(1e6 * Math.random())), document.getElementById(e);
          );
          return e;
        })(this.constructor.NAME).toString();
        return (
          e.setAttribute("id", t),
          this._isAnimated() && e.classList.add(Gi),
          e
        );
      }
      setContent(e) {
        ((this._newContent = e),
          this._isShown() && (this._disposePopper(), this.show()));
      }
      _getTemplateFactory(e) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(e)
            : (this._templateFactory = new Wi({
              ...this._config,
              content: e,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass,
              ),
            })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(
          e.delegateTarget,
          this._getDelegateConfig(),
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(Gi))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Yi);
      }
      _createPopper(e) {
        var t = d(this._config.placement, [this, e, this._element]),
          t = Ji[t.toUpperCase()];
        return Xt(this._element, e, this._getPopperConfig(t));
      }
      _getOffset() {
        let t = this._config.offset;
        return "string" == typeof t
          ? t.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof t
            ? (e) => t(e, this._element)
            : t;
      }
      _resolvePossibleFunction(e) {
        return d(e, [this._element, this._element]);
      }
      _getPopperConfig(e) {
        e = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (e) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  e.state.placement,
                );
              },
            },
          ],
        };
        return { ...e, ...d(this._config.popperConfig, [void 0, e]) };
      }
      _setListeners() {
        let e = this._config.trigger.split(" ");
        for (var i of e)
          if ("click" === i)
            h.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (e) => {
                e = this._initializeOnDelegatedTarget(e);
                ((e._activeTrigger[Qi] = !(
                  e._isShown() && e._activeTrigger[Qi]
                )),
                  e.toggle());
              },
            );
          else if ("manual" !== i) {
            let e =
              i === Ui
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
              t =
                i === Ui
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            (h.on(this._element, e, this._config.selector, (e) => {
              var t = this._initializeOnDelegatedTarget(e);
              ((t._activeTrigger["focusin" === e.type ? Ki : Ui] = !0),
                t._enter());
            }),
              h.on(this._element, t, this._config.selector, (e) => {
                var t = this._initializeOnDelegatedTarget(e);
                ((t._activeTrigger["focusout" === e.type ? Ki : Ui] =
                  t._element.contains(e.relatedTarget)),
                  t._leave());
              }));
          }
        ((this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          h.on(this._element.closest(".modal"), Vi, this._hideModalHandler));
      }
      _fixTitle() {
        var e = this._element.getAttribute("title");
        e &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
      }
      _setTimeout(e, t) {
        (clearTimeout(this._timeout), (this._timeout = setTimeout(e, t)));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(e) {
        var t = c.getDataAttributes(this._element);
        for (let e of Object.keys(t)) Xi.has(e) && delete t[e];
        return (
          (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return (
          (e.container = !1 === e.container ? document.body : n(e.container)),
          "number" == typeof e.delay &&
          (e.delay = { show: e.delay, hide: e.delay }),
          "number" == typeof e.title && (e.title = e.title.toString()),
          "number" == typeof e.content && (e.content = e.content.toString()),
          e
        );
      }
      _getDelegateConfig() {
        var e,
          t,
          i = {};
        for ([e, t] of Object.entries(this._config))
          this.constructor.Default[e] !== t && (i[e] = t);
        return ((i.selector = !1), (i.trigger = "manual"), i);
      }
      _disposePopper() {
        (this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null)));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = tr.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    e(tr);
    let ir = {
      ...tr.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
      rr = { ...tr.DefaultType, content: "(null|string|element|function)" };
    class nr extends tr {
      static get Default() {
        return ir;
      }
      static get DefaultType() {
        return rr;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = nr.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    e(nr);
    let sr = ".bs.scrollspy",
      ar = "click" + sr,
      or = "active",
      lr = "[href]",
      dr = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      cr = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class ur extends t {
      constructor(e, t) {
        (super(e, t),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            "visible" === getComputedStyle(this._element).overflowY
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh());
      }
      static get Default() {
        return dr;
      }
      static get DefaultType() {
        return cr;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        (this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver()));
        for (var e of this._observableSections.values())
          this._observer.observe(e);
      }
      dispose() {
        (this._observer.disconnect(), super.dispose());
      }
      _configAfterMerge(e) {
        return (
          (e.target = n(e.target) || document.body),
          (e.rootMargin = e.offset ? e.offset + "px 0px -30%" : e.rootMargin),
          "string" == typeof e.threshold &&
          (e.threshold = e.threshold
            .split(",")
            .map((e) => Number.parseFloat(e))),
          e
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (h.off(this._config.target, ar),
            h.on(this._config.target, ar, lr, (e) => {
              var t = this._observableSections.get(e.target.hash);
              t &&
                (e.preventDefault(),
                  (e = this._rootElement || window),
                  (t = t.offsetTop - this._element.offsetTop),
                  e.scrollTo
                    ? e.scrollTo({ top: t, behavior: "smooth" })
                    : (e.scrollTop = t));
            }));
      }
      _getNewObserver() {
        var e = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((e) => this._observerCallback(e), e);
      }
      _observerCallback(e) {
        let t = (e) => this._targetLinks.get("#" + e.target.id),
          i = (e) => {
            ((this._previousScrollData.visibleEntryTop = e.target.offsetTop),
              this._process(t(e)));
          },
          r = (this._rootElement || document.documentElement).scrollTop,
          n = r >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = r;
        for (var s of e)
          if (s.isIntersecting) {
            let e =
              s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (n && e) {
              if ((i(s), !r)) return;
            } else n || e || i(s);
          } else ((this._activeTarget = null), this._clearActiveClass(t(s)));
      }
      _initializeTargetsAndObservables() {
        ((this._targetLinks = new Map()),
          (this._observableSections = new Map()));
        let e = u.find(lr, this._config.target);
        for (var t of e)
          if (t.hash && !o(t)) {
            let e = u.findOne(decodeURI(t.hash), this._element);
            s(e) &&
              (this._targetLinks.set(decodeURI(t.hash), t),
                this._observableSections.set(t.hash, e));
          }
      }
      _process(e) {
        this._activeTarget !== e &&
          (this._clearActiveClass(this._config.target),
            (this._activeTarget = e).classList.add(or),
            this._activateParents(e),
            h.trigger(this._element, "activate.bs.scrollspy", {
              relatedTarget: e,
            }));
      }
      _activateParents(e) {
        if (e.classList.contains("dropdown-item"))
          u.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(
            or,
          );
        else
          for (var t of u.parents(e, ".nav, .list-group"))
            for (let e of u.prev(
              t,
              ".nav-link, .nav-item > .nav-link, .list-group-item",
            ))
              e.classList.add(or);
      }
      _clearActiveClass(e) {
        e.classList.remove(or);
        var t = u.find(lr + "." + or, e);
        for (let e of t) e.classList.remove(or);
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = ur.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    (h.on(window, "load.bs.scrollspy.data-api", () => {
      for (var e of u.find('[data-bs-spy="scroll"]')) ur.getOrCreateInstance(e);
    }),
      e(ur));
    let pr = "ArrowRight",
      fr = "ArrowDown",
      hr = "Home",
      j = "active",
      mr = "show",
      gr = ".dropdown-toggle",
      vr = `:not(${gr})`,
      br =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      yr = `.nav-link${vr}, .list-group-item${vr}, [role="tab"]${vr}, ` + br;
    (j, j, j);
    class wr extends t {
      constructor(e) {
        (super(e),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]',
          )),
          this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
            h.on(this._element, "keydown.bs.tab", (e) => this._keydown(e))));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        var e,
          t,
          i = this._element;
        this._elemIsActive(i) ||
          ((t = (e = this._getActiveElem())
            ? h.trigger(e, "hide.bs.tab", { relatedTarget: i })
            : null),
            h.trigger(i, "show.bs.tab", { relatedTarget: e }).defaultPrevented) ||
          (t && t.defaultPrevented) ||
          (this._deactivate(e, i), this._activate(i, e));
      }
      _activate(e, t) {
        e &&
          (e.classList.add(j),
            this._activate(u.getElementFromSelector(e)),
            this._queueCallback(
              () => {
                "tab" === e.getAttribute("role")
                  ? (e.removeAttribute("tabindex"),
                    e.setAttribute("aria-selected", !0),
                    this._toggleDropDown(e, !0),
                    h.trigger(e, "shown.bs.tab", { relatedTarget: t }))
                  : e.classList.add(mr);
              },
              e,
              e.classList.contains("fade"),
            ));
      }
      _deactivate(e, t) {
        e &&
          (e.classList.remove(j),
            e.blur(),
            this._deactivate(u.getElementFromSelector(e)),
            this._queueCallback(
              () => {
                "tab" === e.getAttribute("role")
                  ? (e.setAttribute("aria-selected", !1),
                    e.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(e, !1),
                    h.trigger(e, "hidden.bs.tab", { relatedTarget: t }))
                  : e.classList.remove(mr);
              },
              e,
              e.classList.contains("fade"),
            ));
      }
      _keydown(t) {
        if (["ArrowLeft", pr, "ArrowUp", fr, hr, "End"].includes(t.key)) {
          (t.stopPropagation(), t.preventDefault());
          var i,
            r = this._getChildren().filter((e) => !o(e));
          let e;
          (e = [hr, "End"].includes(t.key)
            ? r[t.key === hr ? 0 : r.length - 1]
            : ((i = [pr, fr].includes(t.key)), G(r, t.target, i, !0))) &&
            (e.focus({ preventScroll: !0 }), wr.getOrCreateInstance(e).show());
        }
      }
      _getChildren() {
        return u.find(yr, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((e) => this._elemIsActive(e)) || null;
      }
      _setInitialAttributes(e, t) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (let e of t) this._setInitialAttributesOnChild(e);
      }
      _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        var t = this._elemIsActive(e),
          i = this._getOuterElement(e);
        (e.setAttribute("aria-selected", t),
          i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
          t || e.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(e, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(e));
      }
      _setInitialAttributesOnTargetPanel(e) {
        var t = u.getElementFromSelector(e);
        t &&
          (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id) &&
          this._setAttributeIfNotExists(t, "aria-labelledby", "" + e.id);
      }
      _toggleDropDown(e, i) {
        let r = this._getOuterElement(e);
        r.classList.contains("dropdown") &&
          ((e = (e, t) => {
            e = u.findOne(e, r);
            e && e.classList.toggle(t, i);
          })(gr, j),
            e(".dropdown-menu", mr),
            r.setAttribute("aria-expanded", i));
      }
      _setAttributeIfNotExists(e, t, i) {
        e.hasAttribute(t) || e.setAttribute(t, i);
      }
      _elemIsActive(e) {
        return e.classList.contains(j);
      }
      _getInnerElement(e) {
        return e.matches(yr) ? e : u.findOne(yr, e);
      }
      _getOuterElement(e) {
        return e.closest(".nav-item, .list-group-item") || e;
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = wr.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    (h.on(document, "click.bs.tab", br, function (e) {
      (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        o(this) || wr.getOrCreateInstance(this).show());
    }),
      h.on(window, "load.bs.tab", () => {
        for (var e of u.find(
          '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]',
        ))
          wr.getOrCreateInstance(e);
      }),
      e(wr));
    let xr = "show",
      Er = "showing",
      _r = { animation: "boolean", autohide: "boolean", delay: "number" },
      Tr = { animation: !0, autohide: !0, delay: 5e3 };
    class Sr extends t {
      constructor(e, t) {
        (super(e, t),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners());
      }
      static get Default() {
        return Tr;
      }
      static get DefaultType() {
        return _r;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        h.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            B(this._element),
            this._element.classList.add(xr, Er),
            this._queueCallback(
              () => {
                (this._element.classList.remove(Er),
                  h.trigger(this._element, "shown.bs.toast"),
                  this._maybeScheduleHide());
              },
              this._element,
              this._config.animation,
            ));
      }
      hide() {
        !this.isShown() ||
          h.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(Er),
            this._queueCallback(
              () => {
                (this._element.classList.add("hide"),
                  this._element.classList.remove(Er, xr),
                  h.trigger(this._element, "hidden.bs.toast"));
              },
              this._element,
              this._config.animation,
            ));
      }
      dispose() {
        (this._clearTimeout(),
          this.isShown() && this._element.classList.remove(xr),
          super.dispose());
      }
      isShown() {
        return this._element.classList.contains(xr);
      }
      _maybeScheduleHide() {
        !this._config.autohide ||
          this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        t
          ? this._clearTimeout()
          : this._element === (e = e.relatedTarget) ||
          this._element.contains(e) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        (h.on(this._element, "mouseover.bs.toast", (e) =>
          this._onInteraction(e, !0),
        ),
          h.on(this._element, "mouseout.bs.toast", (e) =>
            this._onInteraction(e, !1),
          ),
          h.on(this._element, "focusin.bs.toast", (e) =>
            this._onInteraction(e, !0),
          ),
          h.on(this._element, "focusout.bs.toast", (e) =>
            this._onInteraction(e, !1),
          ));
      }
      _clearTimeout() {
        (clearTimeout(this._timeout), (this._timeout = null));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          var e = Sr.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    return (
      pe(Sr),
      e(Sr),
      {
        Alert: fe,
        Button: me,
        Carousel: Le,
        Collapse: Ne,
        Dropdown: T,
        Modal: Li,
        Offcanvas: I,
        Popover: nr,
        ScrollSpy: ur,
        Tab: wr,
        Toast: Sr,
        Tooltip: tr,
      }
    );
  }),
  ((e, t) => {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
          ? (exports.AOS = t())
          : (e.AOS = t());
  })(this, function () {
    return (
      (r = [
        function (e, t, i) {
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n() {
            ((h = (0, f.default)()), v());
          }
          var s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i,
                  r = arguments[t];
                for (i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            },
            a = (r(i(1)), i(6)),
            o = r(a),
            l = r(i(7)),
            d = r(i(8)),
            c = r(i(9)),
            u = r(i(10)),
            p = r(i(11)),
            f = r(i(14)),
            h = [],
            m = !1,
            g = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            v = function () {
              if (
                (m =
                  0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                    ? !0
                    : m)
              )
                return (
                  (h = (0, p.default)(h, g)),
                  (0, u.default)(h, g.once),
                  h
                );
            };
          e.exports = {
            init: function (e) {
              ((g = s(g, e)), (h = (0, f.default)()));
              var t,
                e = document.all && !window.atob;
              return !0 === (t = g.disable) ||
                ("mobile" === t && c.default.mobile()) ||
                ("phone" === t && c.default.phone()) ||
                ("tablet" === t && c.default.tablet()) ||
                ("function" == typeof t && !0 === t()) ||
                e
                ? void h.forEach(function (e, t) {
                  (e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay"));
                })
                : (g.disableMutationObserver ||
                  d.default.isSupported() ||
                  (g.disableMutationObserver = !0),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", g.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", g.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", g.delay),
                  "DOMContentLoaded" === g.startEvent &&
                    -1 < ["complete", "interactive"].indexOf(document.readyState)
                    ? v(!0)
                    : ("load" === g.startEvent
                      ? window
                      : document
                    ).addEventListener(g.startEvent, function () {
                      v(!0);
                    }),
                  window.addEventListener(
                    "resize",
                    (0, l.default)(v, g.debounceDelay, !0),
                  ),
                  window.addEventListener(
                    "orientationchange",
                    (0, l.default)(v, g.debounceDelay, !0),
                  ),
                  window.addEventListener(
                    "scroll",
                    (0, o.default)(function () {
                      (0, u.default)(h, g.once);
                    }, g.throttleDelay),
                  ),
                  g.disableMutationObserver || d.default.ready("[data-aos]", n),
                  h);
            },
            refresh: v,
            refreshHard: n,
          };
        },
        function (e, t) { },
        ,
        ,
        ,
        ,
        function (h, e) {
          !function (e) {
            function s(r, i, e) {
              function n(e) {
                var t = l,
                  i = d;
                return ((l = d = void 0), (h = e), (u = r.apply(i, t)));
              }
              function s(e) {
                var t = e - f;
                return void 0 === f || i <= t || t < 0 || (g && c <= e - h);
              }
              function a() {
                var e,
                  t = _();
                return s(t)
                  ? o(t)
                  : void (p = setTimeout(
                    a,
                    ((e = i - ((t = t) - f)), g ? E(e, c - (t - h)) : e),
                  ));
              }
              function o(e) {
                return ((p = void 0), v && l ? n(e) : ((l = d = void 0), u));
              }
              function t() {
                var e = _(),
                  t = s(e);
                if (((l = arguments), (d = this), (f = e), t)) {
                  if (void 0 === p)
                    return ((h = e = f), (p = setTimeout(a, i)), m ? n(e) : u);
                  if (g) return ((p = setTimeout(a, i)), n(f));
                }
                return (void 0 === p && (p = setTimeout(a, i)), u);
              }
              var l,
                d,
                c,
                u,
                p,
                f,
                h = 0,
                m = !1,
                g = !1,
                v = !0;
              if ("function" != typeof r) throw new TypeError(w);
              return (
                (i = y(i) || 0),
                b(e) &&
                ((m = !!e.leading),
                  (g = "maxWait" in e),
                  (c = g ? x(y(e.maxWait) || 0, i) : c),
                  (v = "trailing" in e ? !!e.trailing : v)),
                (t.cancel = function () {
                  (void 0 !== p && clearTimeout(p),
                    (l = f = d = p = void (h = 0)));
                }),
                (t.flush = function () {
                  return void 0 === p ? u : o(_());
                }),
                t
              );
            }
            function b(e) {
              var t = void 0 === e ? "undefined" : r(e);
              return e && ("object" == t || "function" == t);
            }
            function i(e) {
              return (
                "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                (!!(t = e) &&
                  "object" == (void 0 === t ? "undefined" : r(t)) &&
                  f.call(e) == a)
              );
              var t;
            }
            function y(e) {
              if ("number" == typeof e) return e;
              if (i(e)) return n;
              if (
                "string" !=
                typeof (e = b(e)
                  ? b((t = "function" == typeof e.valueOf ? e.valueOf() : e))
                    ? t + ""
                    : t
                  : e)
              )
                return 0 === e ? e : +e;
              e = e.replace(o, "");
              var t = d.test(e);
              return t || c.test(e)
                ? u(e.slice(2), t ? 2 : 8)
                : l.test(e)
                  ? n
                  : +e;
            }
            var r =
              "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
              w = "Expected a function",
              n = NaN,
              a = "[object Symbol]",
              o = /^\s+|\s+$/g,
              l = /^[-+]0x[0-9a-f]+$/i,
              d = /^0b[01]+$/i,
              c = /^0o[0-7]+$/i,
              u = parseInt,
              e =
                "object" == (void 0 === e ? "undefined" : r(e)) &&
                e &&
                e.Object === Object &&
                e,
              t =
                "object" ==
                ("undefined" == typeof self ? "undefined" : r(self)) &&
                self &&
                self.Object === Object &&
                self,
              p = e || t || Function("return this")(),
              f = Object.prototype.toString,
              x = Math.max,
              E = Math.min,
              _ = function () {
                return p.Date.now();
              };
            h.exports = function (e, t, i) {
              var r = !0,
                n = !0;
              if ("function" != typeof e) throw new TypeError(w);
              return (
                b(i) &&
                ((r = "leading" in i ? !!i.leading : r),
                  (n = "trailing" in i ? !!i.trailing : n)),
                s(e, t, { leading: r, maxWait: t, trailing: n })
              );
            };
          }.call(
            e,
            (function () {
              return this;
            })(),
          );
        },
        function (f, e) {
          !function (e) {
            function b(e) {
              var t = void 0 === e ? "undefined" : r(e);
              return e && ("object" == t || "function" == t);
            }
            function i(e) {
              return (
                "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                (!!(t = e) &&
                  "object" == (void 0 === t ? "undefined" : r(t)) &&
                  p.call(e) == s)
              );
              var t;
            }
            function y(e) {
              if ("number" == typeof e) return e;
              if (i(e)) return n;
              if (
                "string" !=
                typeof (e = b(e)
                  ? b((t = "function" == typeof e.valueOf ? e.valueOf() : e))
                    ? t + ""
                    : t
                  : e)
              )
                return 0 === e ? e : +e;
              e = e.replace(a, "");
              var t = l.test(e);
              return t || d.test(e)
                ? c(e.slice(2), t ? 2 : 8)
                : o.test(e)
                  ? n
                  : +e;
            }
            function w() {
              return u.Date.now();
            }
            var r =
              "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
              n = NaN,
              s = "[object Symbol]",
              a = /^\s+|\s+$/g,
              o = /^[-+]0x[0-9a-f]+$/i,
              l = /^0b[01]+$/i,
              d = /^0o[0-7]+$/i,
              c = parseInt,
              e =
                "object" == (void 0 === e ? "undefined" : r(e)) &&
                e &&
                e.Object === Object &&
                e,
              t =
                "object" ==
                ("undefined" == typeof self ? "undefined" : r(self)) &&
                self &&
                self.Object === Object &&
                self,
              u = e || t || Function("return this")(),
              p = Object.prototype.toString,
              x = Math.max,
              E = Math.min;
            f.exports = function (r, i, e) {
              function n(e) {
                var t = l,
                  i = d;
                return ((l = d = void 0), (h = e), (u = r.apply(i, t)));
              }
              function s(e) {
                var t = e - f;
                return void 0 === f || i <= t || t < 0 || (g && c <= e - h);
              }
              function a() {
                var e,
                  t = w();
                return s(t)
                  ? o(t)
                  : void (p = setTimeout(
                    a,
                    ((e = i - ((t = t) - f)), g ? E(e, c - (t - h)) : e),
                  ));
              }
              function o(e) {
                return ((p = void 0), v && l ? n(e) : ((l = d = void 0), u));
              }
              function t() {
                var e = w(),
                  t = s(e);
                if (((l = arguments), (d = this), (f = e), t)) {
                  if (void 0 === p)
                    return ((h = e = f), (p = setTimeout(a, i)), m ? n(e) : u);
                  if (g) return ((p = setTimeout(a, i)), n(f));
                }
                return (void 0 === p && (p = setTimeout(a, i)), u);
              }
              var l,
                d,
                c,
                u,
                p,
                f,
                h = 0,
                m = !1,
                g = !1,
                v = !0;
              if ("function" != typeof r)
                throw new TypeError("Expected a function");
              return (
                (i = y(i) || 0),
                b(e) &&
                ((m = !!e.leading),
                  (g = "maxWait" in e),
                  (c = g ? x(y(e.maxWait) || 0, i) : c),
                  (v = "trailing" in e ? !!e.trailing : v)),
                (t.cancel = function () {
                  (void 0 !== p && clearTimeout(p),
                    (l = f = d = p = void (h = 0)));
                }),
                (t.flush = function () {
                  return void 0 === p ? u : o(w());
                }),
                t
              );
            };
          }.call(
            e,
            (function () {
              return this;
            })(),
          );
        },
        function (e, t) {
          function n() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function s(e) {
            e &&
              e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                  e = Array.prototype.slice.call(e.removedNodes);
                if (
                  (function e(t) {
                    for (var i, r = void 0, r = 0; r < t.length; r += 1) {
                      if ((i = t[r]).dataset && i.dataset.aos) return !0;
                      if (i.children && e(i.children)) return !0;
                    }
                    return !1;
                  })(t.concat(e))
                )
                  return a();
              });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = function () { };
          t.default = {
            isSupported: function () {
              return !!n();
            },
            ready: function (e, t) {
              var i = window.document,
                r = new (n())(s);
              ((a = t),
                r.observe(i.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                }));
            },
          };
        },
        function (e, t) {
          function i() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            n =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            s =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o =
              ((function (e, t, i) {
                return (t && d(e.prototype, t), i && d(e, i), e);
              })(l, [
                {
                  key: "phone",
                  value: function () {
                    var e = i();
                    return !(!r.test(e) && !n.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var e = i();
                    return !(!s.test(e) && !a.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
                l);
          function l() {
            if (!(this instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(e, t) {
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              ((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r));
            }
          }
          t.default = new o();
        },
        function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = function (e, s) {
            var a = window.pageYOffset,
              o = window.innerHeight;
            e.forEach(function (e, t) {
              var i, r, n;
              ((i = o + a),
                (r = s),
                (n = (e = e).node.getAttribute("data-aos-once")),
                i > e.position
                  ? e.node.classList.add("aos-animate")
                  : void 0 === n ||
                  ("false" !== n && (r || "true" === n)) ||
                  e.node.classList.remove("aos-animate"));
            });
          };
        },
        function (e, t, i) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = i(12),
            r = (i = i) && i.__esModule ? i : { default: i };
          t.default = function (e, i) {
            return (
              e.forEach(function (e, t) {
                (e.node.classList.add("aos-init"),
                  (e.position = (0, r.default)(e.node, i.offset)));
              }),
              e
            );
          };
        },
        function (e, t, i) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = i(13),
            a = (i = i) && i.__esModule ? i : { default: i };
          t.default = function (e, t) {
            var i = 0,
              r = 0,
              n = window.innerHeight,
              s = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
              };
            switch (
            (s.offset && !isNaN(s.offset) && (r = parseInt(s.offset)),
              s.anchor &&
              document.querySelectorAll(s.anchor) &&
              (e = document.querySelectorAll(s.anchor)[0]),
              (i = (0, a.default)(e).top),
              s.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                i += e.offsetHeight / 2;
                break;
              case "bottom-bottom":
                i += e.offsetHeight;
                break;
              case "top-center":
                i += n / 2;
                break;
              case "bottom-center":
                i += n / 2 + e.offsetHeight;
                break;
              case "center-center":
                i += n / 2 + e.offsetHeight / 2;
                break;
              case "top-top":
                i += n;
                break;
              case "bottom-top":
                i += e.offsetHeight + n;
                break;
              case "center-top":
                i += e.offsetHeight / 2 + n;
            }
            return i + (r = s.anchorPlacement || s.offset || isNaN(t) ? r : t);
          };
        },
        function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = function (e) {
            for (
              var t = 0, i = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);
            )
              ((t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent));
            return { top: i, left: t };
          };
        },
        function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = function (e) {
            return (
              (e = e || document.querySelectorAll("[data-aos]")),
              Array.prototype.map.call(e, function (e) {
                return { node: e };
              })
            );
          };
        },
      ]),
      (n = {}),
      (i.m = r),
      (i.c = n),
      (i.p = "dist/"),
      i(0)
    );
    function i(e) {
      var t;
      return (
        n[e] ||
        ((t = n[e] = { exports: {}, id: e, loaded: !1 }),
          r[e].call(t.exports, t, t.exports, i),
          (t.loaded = !0),
          t)
      ).exports;
    }
    var r, n;
  }),
  ((e, t) => {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    function r(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function n(t, i) {
      (void 0 === t && (t = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((e) => {
          void 0 === t[e]
            ? (t[e] = i[e])
            : r(i[e]) &&
            r(t[e]) &&
            0 < Object.keys(i[e]).length &&
            n(t[e], i[e]);
        }));
    }
    let t = {
      body: {},
      addEventListener() { },
      removeEventListener() { },
      activeElement: { blur() { }, nodeName: "" },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return { initEvent() { } };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() { },
          getElementsByTagName() {
            return [];
          },
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function L() {
      var e = "undefined" != typeof document ? document : {};
      return (n(e, t), e);
    }
    let w = {
      document: t,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() { }, pushState() { }, go() { }, back() { } },
      CustomEvent: function () {
        return this;
      },
      addEventListener() { },
      removeEventListener() { },
      getComputedStyle() {
        return {
          getPropertyValue() {
            return "";
          },
        };
      },
      Image() { },
      Date() { },
      screen: {},
      setTimeout() { },
      clearTimeout() { },
      matchMedia() {
        return {};
      },
      requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function A() {
      var e = "undefined" != typeof window ? window : {};
      return (n(e, w), e);
    }
    function T(e, t) {
      return (void 0 === t && (t = 0), setTimeout(e, t));
    }
    function v() {
      return Date.now();
    }
    function k(e, t) {
      void 0 === t && (t = "x");
      var i = A();
      let r, n, s;
      e = ((e) => {
        var t = A();
        let i;
        return (i =
          (i =
            !(i = t.getComputedStyle ? t.getComputedStyle(e, null) : i) &&
              e.currentStyle
              ? e.currentStyle
              : i) || e.style);
      })(e);
      return (
        i.WebKitCSSMatrix
          ? (6 < (n = e.transform || e.webkitTransform).split(",").length &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
            (s = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((s =
            e.MozTransform ||
            e.OTransform ||
            e.MsTransform ||
            e.msTransform ||
            e.transform ||
            e
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
            (r = s.toString().split(","))),
        "x" === t &&
        (n = i.WebKitCSSMatrix
          ? s.m41
          : 16 === r.length
            ? parseFloat(r[12])
            : parseFloat(r[4])),
        (n =
          "y" === t
            ? i.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
                ? parseFloat(r[13])
                : parseFloat(r[5])
            : n) || 0
      );
    }
    function l(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function c(e) {
      var t,
        i = Object(arguments.length <= 0 ? void 0 : e);
      let r = ["__proto__", "constructor", "prototype"];
      for (let e = 1; e < arguments.length; e += 1) {
        var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        if (
          null != n &&
          ((t = n),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? t instanceof HTMLElement
              : t && (1 === t.nodeType || 11 === t.nodeType)))
        ) {
          var s = Object.keys(Object(n)).filter((e) => r.indexOf(e) < 0);
          for (let e = 0, t = s.length; e < t; e += 1) {
            var a = s[e],
              o = Object.getOwnPropertyDescriptor(n, a);
            void 0 !== o &&
              o.enumerable &&
              (l(i[a]) && l(n[a])
                ? n[a].__swiper__
                  ? (i[a] = n[a])
                  : c(i[a], n[a])
                : l(i[a]) || !l(n[a]) || ((i[a] = {}), n[a].__swiper__)
                  ? (i[a] = n[a])
                  : c(i[a], n[a]));
          }
        }
      }
      return i;
    }
    function R(e, t, i) {
      e.style.setProperty(t, i);
    }
    function x(e) {
      let { swiper: i, targetPosition: r, side: n } = e,
        s = A(),
        a = -i.translate,
        o = null,
        l,
        d = i.params.speed,
        c =
          ((i.wrapperEl.style.scrollSnapType = "none"),
            s.cancelAnimationFrame(i.cssModeFrameID),
            r > a ? "next" : "prev"),
        u = (e, t) => ("next" === c && t <= e) || ("prev" === c && e <= t),
        p = () => {
          ((l = new Date().getTime()), null === o && (o = l));
          var e = Math.max(Math.min((l - o) / d, 1), 0),
            e = 0.5 - Math.cos(e * Math.PI) / 2;
          let t = a + e * (r - a);
          (u(t, r) && (t = r),
            i.wrapperEl.scrollTo({ [n]: t }),
            u(t, r)
              ? ((i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  ((i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: t }));
                }),
                s.cancelAnimationFrame(i.cssModeFrameID))
              : (i.cssModeFrameID = s.requestAnimationFrame(p)));
        };
      p();
    }
    function a(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function F(e, t) {
      return (
        void 0 === t && (t = ""),
        [...e.children].filter((e) => e.matches(t))
      );
    }
    function S(e, t) {
      void 0 === t && (t = []);
      e = document.createElement(e);
      return (e.classList.add(...(Array.isArray(t) ? t : [t])), e);
    }
    function O(e) {
      var t = A(),
        i = L(),
        r = e.getBoundingClientRect(),
        i = i.body,
        n = e.clientTop || i.clientTop || 0,
        i = e.clientLeft || i.clientLeft || 0,
        s = e === t ? t.scrollY : e.scrollTop,
        t = e === t ? t.scrollX : e.scrollLeft;
      return { top: r.top + s - n, left: r.left + t - i };
    }
    function B(e, t) {
      return A().getComputedStyle(e, null).getPropertyValue(t);
    }
    function _(e) {
      let t = e,
        i;
      if (t) {
        for (i = 0; null !== (t = t.previousSibling);)
          1 === t.nodeType && (i += 1);
        return i;
      }
    }
    function P(e, t) {
      var i = [];
      let r = e.parentElement;
      for (; r;) ((t && !r.matches(t)) || i.push(r), (r = r.parentElement));
      return i;
    }
    function g(i, r) {
      r &&
        i.addEventListener("transitionend", function e(t) {
          t.target === i &&
            (r.call(i, t), i.removeEventListener("transitionend", e));
        });
    }
    function $(e, t, i) {
      var r = A();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(
              "width" === t ? "margin-right" : "margin-top",
            ),
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(
              "width" === t ? "margin-left" : "margin-bottom",
            ),
        )
        : e.offsetWidth;
    }
    let i;
    function u() {
      var e, t;
      return (i =
        i ||
        ((e = A()),
        {
          smoothScroll:
            (t = L()).documentElement &&
            t.documentElement.style &&
            "scrollBehavior" in t.documentElement.style,
          touch: !!(
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof e.DocumentTouch)
          ),
        }));
    }
    let s;
    function I(e) {
      return (
        void 0 === e && (e = {}),
        (s =
          s ||
          ((e) => {
            var e = (void 0 === e ? {} : e).userAgent,
              t = u(),
              i = (s = A()).navigator.platform,
              e = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              n = s.screen.width,
              s = s.screen.height,
              a = e.match(/(Android);?[\s\/]+([\d.]+)?/);
            let o = e.match(/(iPad).*OS\s([\d_]+)/);
            var l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
              d = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              c = "Win32" === i,
              i = "MacIntel" === i;
            return (
              !o &&
              i &&
              t.touch &&
              0 <=
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(n + "x" + s) &&
              (o = (o = e.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
              a && !c && ((r.os = "android"), (r.android = !0)),
              (o || d || l) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e))
      );
    }
    let e;
    function j() {
      return (e =
        e ||
        (() => {
          let t = A(),
            e = !1;
          function i() {
            var e = t.navigator.userAgent.toLowerCase();
            return (
              0 <= e.indexOf("safari") &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0
            );
          }
          var r, n;
          return (
            i() &&
            (r = String(t.navigator.userAgent)).includes("Version/") &&
            (([r, n] = r
              .split("Version/")[1]
              .split(" ")[0]
              .split(".")
              .map((e) => Number(e))),
              (e = r < 16 || (16 === r && n < 2))),
            {
              isSafari: e || i(),
              needPerspectiveFix: e,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                t.navigator.userAgent,
              ),
            }
          );
        })());
    }
    let o = (e, t) => {
      e &&
        !e.destroyed &&
        e.params &&
        (t = t.closest(
          e.isElement ? "swiper-slide" : "." + e.params.slideClass,
        )) &&
        (t = t.querySelector("." + e.params.lazyPreloaderClass)) &&
        t.remove();
    },
      d = (e, t) => {
        e.slides[t] &&
          (e = e.slides[t].querySelector('[loading="lazy"]')) &&
          e.removeAttribute("loading");
      },
      p = (s) => {
        if (s && !s.destroyed && s.params) {
          var t = s.params.lazyPreloadPrevNext,
            i = s.slides.length;
          if (i && t && !(t < 0)) {
            t = Math.min(t, i);
            let n =
              "auto" === s.params.slidesPerView
                ? s.slidesPerViewDynamic()
                : Math.ceil(s.params.slidesPerView);
            var a = s.activeIndex;
            if (s.params.grid && 1 < s.params.grid.rows) {
              let i = a,
                r = [i - t];
              (r.push(...Array.from({ length: t }).map((e, t) => i + n + t)),
                void s.slides.forEach((e, t) => {
                  r.includes(e.column) && d(s, t);
                }));
            } else {
              var r = a + n - 1;
              if (s.params.rewind || s.params.loop)
                for (let e = a - t; e <= r + t; e += 1) {
                  var o = ((e % i) + i) % i;
                  (o < a || r < o) && d(s, o);
                }
              else
                for (
                  let e = Math.max(a - t, 0);
                  e <= Math.min(r + t, i - 1);
                  e += 1
                )
                  e !== a && (e > r || e < a) && d(s, e);
            }
          }
        }
      };
    function N(e) {
      var { swiper: e, runCallbacks: t, direction: i, step: r } = e,
        { activeIndex: n, previousIndex: s } = e;
      let a = i;
      ((a = a || (s < n ? "next" : n < s ? "prev" : "reset")),
        e.emit("transition" + r),
        t &&
        n !== s &&
        ("reset" === a
          ? e.emit("slideResetTransition" + r)
          : (e.emit("slideChangeTransition" + r),
            "next" === a
              ? e.emit("slideNextTransition" + r)
              : e.emit("slidePrevTransition" + r))));
    }
    function z(r, e) {
      return (function e(t) {
        var i;
        return t &&
          t !== L() &&
          t !== A() &&
          ((i = (t = t.assignedSlot || t).closest(r)) || t.getRootNode)
          ? i || e(t.getRootNode().host)
          : null;
      })((e = void 0 === e ? this : e));
    }
    function H() {
      let e = this;
      var t,
        i,
        r,
        n,
        { params: s, el: a } = e;
      (a && 0 === a.offsetWidth) ||
        (s.breakpoints && e.setBreakpoint(),
          ({ allowSlideNext: a, allowSlidePrev: t, snapGrid: i } = e),
          (r = e.virtual && e.params.virtual.enabled),
          (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          (n = r && s.loop),
          !("auto" === s.slidesPerView || 1 < s.slidesPerView) ||
            !e.isEnd ||
            e.isBeginning ||
            e.params.centeredSlides ||
            n
            ? e.params.loop && !r
              ? e.slideToLoop(e.realIndex, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0)
            : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = t),
          (e.allowSlideNext = a),
          e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow());
    }
    let q = !1;
    function W() { }
    let X = (e, t) => {
      var i = L(),
        { params: r, el: n, wrapperEl: s, device: a } = e,
        o = !!r.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener";
      (n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (r.preventClicks || r.preventClicksPropagation) &&
        n[l]("click", e.onClick, !0),
        r.cssMode && s[l]("scroll", e.onScroll),
        r.updateOnWindowResize
          ? e[t](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            H,
            !0,
          )
          : e[t]("observerUpdate", H, !0),
        n[l]("load", e.onLoad, { capture: !0 }));
    };
    let G = {
      attachEvents: function () {
        var e = this,
          t = L(),
          i = e.params;
        ((e.onTouchStart = function (r) {
          var n = this,
            s = L(),
            a = A(),
            o = n.touchEventsData,
            { params: l, touches: d, enabled: c } = (o.evCache.push(r), n);
          if (
            c &&
            (l.simulateTouch || "mouse" !== r.pointerType) &&
            (!n.animating || !l.preventInteractionOnTransition)
          ) {
            !n.animating && l.cssMode && l.loop && n.loopFix();
            let t = r,
              i = (t = t.originalEvent ? t.originalEvent : t).target;
            if (
              ("wrapper" !== l.touchEventsTarget ||
                n.wrapperEl.contains(i)) &&
              !(
                ("which" in t && 3 === t.which) ||
                ("button" in t && 0 < t.button) ||
                (o.isTouched && o.isMoved)
              )
            ) {
              var c = !!l.noSwipingClass && "" !== l.noSwipingClass,
                u = r.composedPath ? r.composedPath() : r.path,
                c =
                  (c && t.target && t.target.shadowRoot && u && (i = u[0]),
                    l.noSwipingSelector || "." + l.noSwipingClass),
                u = !(!t.target || !t.target.shadowRoot);
              if (l.noSwiping && (u ? z(c, i) : i.closest(c)))
                n.allowClick = !0;
              else if (!l.swipeHandler || i.closest(l.swipeHandler)) {
                ((d.currentX = t.pageX), (d.currentY = t.pageY));
                var u = d.currentX,
                  c = d.currentY,
                  p = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                  f = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                if (p && (u <= f || u >= a.innerWidth - f)) {
                  if ("prevent" !== p) return;
                  r.preventDefault();
                }
                (Object.assign(o, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                  (d.startX = u),
                  (d.startY = c),
                  (o.touchStartTime = v()),
                  (n.allowClick = !0),
                  n.updateSize(),
                  (n.swipeDirection = void 0),
                  0 < l.threshold && (o.allowThresholdMove = !1));
                let e = !0;
                (i.matches(o.focusableElements) &&
                  ((e = !1), "SELECT" === i.nodeName) &&
                  (o.isTouched = !1),
                  s.activeElement &&
                  s.activeElement.matches(o.focusableElements) &&
                  s.activeElement !== i &&
                  s.activeElement.blur());
                a = e && n.allowTouchMove && l.touchStartPreventDefault;
                ((!l.touchStartForcePreventDefault && !a) ||
                  i.isContentEditable ||
                  t.preventDefault(),
                  l.freeMode &&
                  l.freeMode.enabled &&
                  n.freeMode &&
                  n.animating &&
                  !l.cssMode &&
                  n.freeMode.onTouchStart(),
                  n.emit("touchStart", t));
              }
            }
          }
        }.bind(e)),
          (e.onTouchMove = function (e) {
            var a = L(),
              o = this,
              l = o.touchEventsData,
              { params: d, touches: c, rtlTranslate: u, enabled: t } = o;
            if (t && (d.simulateTouch || "mouse" !== e.pointerType)) {
              let s = e;
              if ((s.originalEvent && (s = s.originalEvent), l.isTouched)) {
                ((t = l.evCache.findIndex(
                  (e) => e.pointerId === s.pointerId,
                )),
                  (e =
                    (0 <= t && (l.evCache[t] = s),
                      1 < l.evCache.length ? l.evCache[0] : s)),
                  (t = e.pageX),
                  (e = e.pageY));
                if (s.preventedByNestedSwiper)
                  ((c.startX = t), (c.startY = e));
                else if (o.allowTouchMove) {
                  if (d.touchReleaseOnEdges && !d.loop)
                    if (o.isVertical()) {
                      if (
                        (e < c.startY && o.translate <= o.maxTranslate()) ||
                        (e > c.startY && o.translate >= o.minTranslate())
                      )
                        return ((l.isTouched = !1), void (l.isMoved = !1));
                    } else if (
                      (t < c.startX && o.translate <= o.maxTranslate()) ||
                      (t > c.startX && o.translate >= o.minTranslate())
                    )
                      return;
                  if (
                    a.activeElement &&
                    s.target === a.activeElement &&
                    s.target.matches(l.focusableElements)
                  )
                    ((l.isMoved = !0), (o.allowClick = !1));
                  else if (
                    (l.allowTouchCallbacks && o.emit("touchMove", s),
                      !(s.targetTouches && 1 < s.targetTouches.length))
                  ) {
                    ((c.currentX = t), (c.currentY = e));
                    var a = c.currentX - c.startX,
                      p = c.currentY - c.startY;
                    if (
                      !(
                        o.params.threshold &&
                        Math.sqrt(a ** 2 + p ** 2) < o.params.threshold
                      )
                    )
                      if (
                        (void 0 === l.isScrolling &&
                          ((o.isHorizontal() && c.currentY === c.startY) ||
                            (o.isVertical() && c.currentX === c.startX)
                            ? (l.isScrolling = !1)
                            : 25 <= a * a + p * p &&
                            ((f =
                              (180 * Math.atan2(Math.abs(p), Math.abs(a))) /
                              Math.PI),
                              (l.isScrolling = o.isHorizontal()
                                ? f > d.touchAngle
                                : 90 - f > d.touchAngle))),
                          l.isScrolling && o.emit("touchMoveOpposite", s),
                          void 0 !== l.startMoving ||
                          (c.currentX === c.startX &&
                            c.currentY === c.startY) ||
                          (l.startMoving = !0),
                          l.isScrolling ||
                          (o.zoom &&
                            o.params.zoom &&
                            o.params.zoom.enabled &&
                            1 < l.evCache.length))
                      )
                        l.isTouched = !1;
                      else if (l.startMoving) {
                        ((o.allowClick = !1),
                          !d.cssMode && s.cancelable && s.preventDefault(),
                          d.touchMoveStopPropagation &&
                          !d.nested &&
                          s.stopPropagation());
                        let e = o.isHorizontal() ? a : p,
                          t = o.isHorizontal()
                            ? c.currentX - c.previousX
                            : c.currentY - c.previousY;
                        (d.oneWayMovement &&
                          ((e = Math.abs(e) * (u ? 1 : -1)),
                            (t = Math.abs(t) * (u ? 1 : -1))),
                          (c.diff = e),
                          (e *= d.touchRatio),
                          u && ((e = -e), (t = -t)));
                        var f = o.touchesDirection,
                          a =
                            ((o.swipeDirection = 0 < e ? "prev" : "next"),
                              (o.touchesDirection = 0 < t ? "prev" : "next"),
                              o.params.loop && !d.cssMode);
                        l.isMoved ||
                          (a && o.loopFix({ direction: o.swipeDirection }),
                            (l.startTranslate = o.getTranslate()),
                            o.setTransition(0),
                            o.animating &&
                            ((p = new window.CustomEvent("transitionend", {
                              bubbles: !0,
                              cancelable: !0,
                            })),
                              o.wrapperEl.dispatchEvent(p)),
                            (l.allowMomentumBounce = !1),
                            !d.grabCursor ||
                            (!0 !== o.allowSlideNext &&
                              !0 !== o.allowSlidePrev) ||
                            o.setGrabCursor(!0),
                            o.emit("sliderFirstMove", s));
                        let i,
                          r =
                            (l.isMoved &&
                              f !== o.touchesDirection &&
                              a &&
                              1 <= Math.abs(e) &&
                              (o.loopFix({
                                direction: o.swipeDirection,
                                setTranslate: !0,
                              }),
                                (i = !0)),
                              o.emit("sliderMove", s),
                              (l.isMoved = !0),
                              (l.currentTranslate = e + l.startTranslate),
                              !0),
                          n = d.resistanceRatio;
                        if (
                          (d.touchReleaseOnEdges && (n = 0),
                            0 < e
                              ? (a &&
                                !i &&
                                l.currentTranslate >
                                (d.centeredSlides
                                  ? o.minTranslate() - o.size / 2
                                  : o.minTranslate()) &&
                                o.loopFix({
                                  direction: "prev",
                                  setTranslate: !0,
                                  activeSlideIndex: 0,
                                }),
                                l.currentTranslate > o.minTranslate() &&
                                ((r = !1), d.resistance) &&
                                (l.currentTranslate =
                                  o.minTranslate() -
                                  1 +
                                  (-o.minTranslate() +
                                    l.startTranslate +
                                    e) **
                                  n))
                              : e < 0 &&
                              (a &&
                                !i &&
                                l.currentTranslate <
                                (d.centeredSlides
                                  ? o.maxTranslate() + o.size / 2
                                  : o.maxTranslate()) &&
                                o.loopFix({
                                  direction: "next",
                                  setTranslate: !0,
                                  activeSlideIndex:
                                    o.slides.length -
                                    ("auto" === d.slidesPerView
                                      ? o.slidesPerViewDynamic()
                                      : Math.ceil(
                                        parseFloat(d.slidesPerView, 10),
                                      )),
                                }),
                                l.currentTranslate < o.maxTranslate()) &&
                              ((r = !1), d.resistance) &&
                              (l.currentTranslate =
                                o.maxTranslate() +
                                1 -
                                (o.maxTranslate() - l.startTranslate - e) **
                                n),
                            r && (s.preventedByNestedSwiper = !0),
                            !o.allowSlideNext &&
                            "next" === o.swipeDirection &&
                            l.currentTranslate < l.startTranslate &&
                            (l.currentTranslate = l.startTranslate),
                            !o.allowSlidePrev &&
                            "prev" === o.swipeDirection &&
                            l.currentTranslate > l.startTranslate &&
                            (l.currentTranslate = l.startTranslate),
                            o.allowSlidePrev ||
                            o.allowSlideNext ||
                            (l.currentTranslate = l.startTranslate),
                            0 < d.threshold)
                        ) {
                          if (
                            !(
                              Math.abs(e) > d.threshold ||
                              l.allowThresholdMove
                            )
                          )
                            return void (l.currentTranslate =
                              l.startTranslate);
                          if (!l.allowThresholdMove)
                            return (
                              (l.allowThresholdMove = !0),
                              (c.startX = c.currentX),
                              (c.startY = c.currentY),
                              (l.currentTranslate = l.startTranslate),
                              void (c.diff = o.isHorizontal()
                                ? c.currentX - c.startX
                                : c.currentY - c.startY)
                            );
                        }
                        d.followFinger &&
                          !d.cssMode &&
                          (((d.freeMode &&
                            d.freeMode.enabled &&
                            o.freeMode) ||
                            d.watchSlidesProgress) &&
                            (o.updateActiveIndex(), o.updateSlidesClasses()),
                            d.freeMode &&
                            d.freeMode.enabled &&
                            o.freeMode &&
                            o.freeMode.onTouchMove(),
                            o.updateProgress(l.currentTranslate),
                            o.setTranslate(l.currentTranslate));
                      }
                  }
                } else
                  (s.target.matches(l.focusableElements) ||
                    (o.allowClick = !1),
                    l.isTouched &&
                    (Object.assign(c, {
                      startX: t,
                      startY: e,
                      prevX: o.touches.currentX,
                      prevY: o.touches.currentY,
                      currentX: t,
                      currentY: e,
                    }),
                      (l.touchStartTime = v())));
              } else
                l.startMoving &&
                  l.isScrolling &&
                  o.emit("touchMoveOpposite", s);
            }
          }.bind(e)),
          (e.onTouchEnd = function (t) {
            let o = this;
            var e = o.touchEventsData,
              i = e.evCache.findIndex((e) => e.pointerId === t.pointerId);
            if (
              (0 <= i && e.evCache.splice(i, 1),
                !["pointercancel", "pointerout", "pointerleave"].includes(
                  t.type,
                ) ||
                ("pointercancel" === t.type &&
                  (o.browser.isSafari || o.browser.isWebView)))
            ) {
              var {
                params: l,
                touches: i,
                rtlTranslate: r,
                slidesGrid: d,
                enabled: n,
              } = o;
              if (n && (l.simulateTouch || "mouse" !== t.pointerType)) {
                let a = t;
                if (
                  (a.originalEvent && (a = a.originalEvent),
                    e.allowTouchCallbacks && o.emit("touchEnd", a),
                    (e.allowTouchCallbacks = !1),
                    e.isTouched)
                ) {
                  l.grabCursor &&
                    e.isMoved &&
                    e.isTouched &&
                    (!0 === o.allowSlideNext || !0 === o.allowSlidePrev) &&
                    o.setGrabCursor(!1);
                  var n = v(),
                    c = n - e.touchStartTime;
                  if (
                    (o.allowClick &&
                      ((u = a.path || (a.composedPath && a.composedPath())),
                        o.updateClickedSlide((u && u[0]) || a.target),
                        o.emit("tap click", a),
                        c < 300) &&
                      n - e.lastClickTime < 300 &&
                      o.emit("doubleTap doubleClick", a),
                      (e.lastClickTime = v()),
                      T(() => {
                        o.destroyed || (o.allowClick = !0);
                      }),
                      e.isTouched &&
                      e.isMoved &&
                      o.swipeDirection &&
                      0 !== i.diff &&
                      e.currentTranslate !== e.startTranslate)
                  ) {
                    ((e.isTouched = !1),
                      (e.isMoved = !1),
                      (e.startMoving = !1));
                    let s;
                    if (
                      ((s = l.followFinger
                        ? r
                          ? o.translate
                          : -o.translate
                        : -e.currentTranslate),
                        !l.cssMode)
                    )
                      if (l.freeMode && l.freeMode.enabled)
                        o.freeMode.onTouchEnd({ currentPos: s });
                      else {
                        let i = 0,
                          r = o.slidesSizesGrid[0];
                        for (
                          let t = 0;
                          t < d.length;
                          t += t < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
                        ) {
                          let e =
                            t < l.slidesPerGroupSkip - 1
                              ? 1
                              : l.slidesPerGroup;
                          void 0 !== d[t + e]
                            ? s >= d[t] &&
                            s < d[t + e] &&
                            ((i = t), (r = d[t + e] - d[t]))
                            : s >= d[t] &&
                            ((i = t),
                              (r = d[d.length - 1] - d[d.length - 2]));
                        }
                        let e = null,
                          t = null;
                        l.rewind &&
                          (o.isBeginning
                            ? (t =
                              l.virtual && l.virtual.enabled && o.virtual
                                ? o.virtual.slides.length - 1
                                : o.slides.length - 1)
                            : o.isEnd && (e = 0));
                        var u = (s - d[i]) / r;
                        let n =
                          i < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                        l.longSwipesMs < c
                          ? l.longSwipes
                            ? ("next" === o.swipeDirection &&
                              (u >= l.longSwipesRatio
                                ? o.slideTo(l.rewind && o.isEnd ? e : i + n)
                                : o.slideTo(i)),
                              "prev" === o.swipeDirection &&
                              (u > 1 - l.longSwipesRatio
                                ? o.slideTo(i + n)
                                : null !== t &&
                                  u < 0 &&
                                  Math.abs(u) > l.longSwipesRatio
                                  ? o.slideTo(t)
                                  : o.slideTo(i)))
                            : o.slideTo(o.activeIndex)
                          : l.shortSwipes
                            ? o.navigation &&
                              (a.target === o.navigation.nextEl ||
                                a.target === o.navigation.prevEl)
                              ? a.target === o.navigation.nextEl
                                ? o.slideTo(i + n)
                                : o.slideTo(i)
                              : ("next" === o.swipeDirection &&
                                o.slideTo(null !== e ? e : i + n),
                                "prev" === o.swipeDirection &&
                                o.slideTo(null !== t ? t : i))
                            : o.slideTo(o.activeIndex);
                      }
                  } else
                    ((e.isTouched = !1),
                      (e.isMoved = !1),
                      (e.startMoving = !1));
                } else
                  (e.isMoved && l.grabCursor && o.setGrabCursor(!1),
                    (e.isMoved = !1),
                    (e.startMoving = !1));
              }
            }
          }.bind(e)),
          i.cssMode &&
          (e.onScroll = function () {
            var t = this,
              { wrapperEl: i, rtlTranslate: r, enabled: n } = t;
            if (n) {
              ((t.previousTranslate = t.translate),
                t.isHorizontal()
                  ? (t.translate = -i.scrollLeft)
                  : (t.translate = -i.scrollTop),
                0 === t.translate && (t.translate = 0),
                t.updateActiveIndex(),
                t.updateSlidesClasses());
              let e;
              n = t.maxTranslate() - t.minTranslate();
              ((e = 0 == n ? 0 : (t.translate - t.minTranslate()) / n) !==
                t.progress &&
                t.updateProgress(r ? -t.translate : t.translate),
                t.emit("setTranslate", t.translate, !1));
            }
          }.bind(e)),
          (e.onClick = function (e) {
            this.enabled &&
              !this.allowClick &&
              (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation) &&
              this.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation());
          }.bind(e)),
          (e.onLoad = function (e) {
            (o(this, e.target),
              this.params.cssMode ||
              ("auto" !== this.params.slidesPerView &&
                !this.params.autoHeight) ||
              this.update());
          }.bind(e)),
          q || (t.addEventListener("touchstart", W), (q = !0)),
          X(e, "on"));
      },
      detachEvents: function () {
        X(this, "off");
      },
    },
      Y = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
    var V = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    let f = {
      eventsEmitter: {
        on(e, i, r) {
          let n = this;
          if (n.eventsListeners && !n.destroyed && "function" == typeof i) {
            let t = r ? "unshift" : "push";
            e.split(" ").forEach((e) => {
              (n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][t](i));
            });
          }
          return n;
        },
        once(r, n, e) {
          let s = this;
          return !s.eventsListeners || s.destroyed || "function" != typeof n
            ? s
            : ((a.__emitterProxy = n), s.on(r, a, e));
          function a() {
            (s.off(r, a), a.__emitterProxy && delete a.__emitterProxy);
            for (
              var e = arguments.length, t = new Array(e), i = 0;
              i < e;
              i++
            )
              t[i] = arguments[i];
            n.apply(s, t);
          }
        },
        onAny(e, t) {
          return (
            this.eventsListeners &&
            !this.destroyed &&
            "function" == typeof e &&
            ((t = t ? "unshift" : "push"),
              this.eventsAnyListeners.indexOf(e) < 0) &&
            this.eventsAnyListeners[t](e),
            this
          );
        },
        offAny(e) {
          return (
            this.eventsListeners &&
            !this.destroyed &&
            this.eventsAnyListeners &&
            0 <= (e = this.eventsAnyListeners.indexOf(e)) &&
            this.eventsAnyListeners.splice(e, 1),
            this
          );
        },
        off(e, r) {
          let n = this;
          return (
            n.eventsListeners &&
            !n.destroyed &&
            n.eventsListeners &&
            e.split(" ").forEach((i) => {
              void 0 === r
                ? (n.eventsListeners[i] = [])
                : n.eventsListeners[i] &&
                n.eventsListeners[i].forEach((e, t) => {
                  (e === r ||
                    (e.__emitterProxy && e.__emitterProxy === r)) &&
                    n.eventsListeners[i].splice(t, 1);
                });
            }),
            n
          );
        },
        emit() {
          let n = this;
          if (n.eventsListeners && !n.destroyed && n.eventsListeners) {
            let e, i, r;
            for (
              var t = arguments.length, s = new Array(t), a = 0;
              a < t;
              a++
            )
              s[a] = arguments[a];
            ((r =
              "string" == typeof s[0] || Array.isArray(s[0])
                ? ((e = s[0]), (i = s.slice(1, s.length)), n)
                : ((e = s[0].events), (i = s[0].data), s[0].context || n)),
              i.unshift(r),
              (Array.isArray(e) ? e : e.split(" ")).forEach((t) => {
                (n.eventsAnyListeners &&
                  n.eventsAnyListeners.length &&
                  n.eventsAnyListeners.forEach((e) => {
                    e.apply(r, [t, ...i]);
                  }),
                  n.eventsListeners &&
                  n.eventsListeners[t] &&
                  n.eventsListeners[t].forEach((e) => {
                    e.apply(r, i);
                  }));
              }));
          }
          return n;
        },
      },
      update: {
        updateSize: function () {
          var e = this;
          let t, i;
          var r = e.el;
          ((t = null != e.params.width ? e.params.width : r.clientWidth),
            (i = null != e.params.height ? e.params.height : r.clientHeight),
            (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(B(r, "padding-left") || 0, 10) -
              parseInt(B(r, "padding-right") || 0, 10)),
              (i =
                i -
                parseInt(B(r, "padding-top") || 0, 10) -
                parseInt(B(r, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              })));
        },
        updateSlides: function () {
          let r = this;
          function n(e) {
            return r.isHorizontal()
              ? e
              : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
          }
          function s(e, t) {
            return parseFloat(e.getPropertyValue(n(t)) || 0);
          }
          let a = r.params,
            {
              wrapperEl: e,
              slidesEl: t,
              size: o,
              rtlTranslate: l,
              wrongRTL: d,
            } = r;
          var c = r.virtual && a.virtual.enabled,
            u = (c ? r.virtual : r).slides.length;
          let p = F(t, `.${r.params.slideClass}, swiper-slide`);
          var f = (c ? r.virtual.slides : p).length;
          let h = [],
            m = [];
          var g = [];
          let v = a.slidesOffsetBefore,
            b =
              ("function" == typeof v && (v = a.slidesOffsetBefore.call(r)),
                a.slidesOffsetAfter);
          "function" == typeof b && (b = a.slidesOffsetAfter.call(r));
          var y = r.snapGrid.length,
            w = r.slidesGrid.length;
          let x = a.spaceBetween,
            E = -v,
            _ = 0,
            T = 0;
          if (void 0 !== o) {
            ("string" == typeof x && 0 <= x.indexOf("%")
              ? (x = (parseFloat(x.replace("%", "")) / 100) * o)
              : "string" == typeof x && (x = parseFloat(x)),
              (r.virtualSize = -x),
              p.forEach((e) => {
                (l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                  (e.style.marginBottom = ""),
                  (e.style.marginTop = ""));
              }),
              a.centeredSlides &&
              a.cssMode &&
              (R(e, "--swiper-centered-offset-before", ""),
                R(e, "--swiper-centered-offset-after", "")));
            var S = a.grid && 1 < a.grid.rows && r.grid;
            S && r.grid.initSlides(f);
            let i;
            var C,
              M,
              A,
              k,
              L,
              O,
              P,
              D,
              I,
              z =
                "auto" === a.slidesPerView &&
                a.breakpoints &&
                0 <
                Object.keys(a.breakpoints).filter(
                  (e) => void 0 !== a.breakpoints[e].slidesPerView,
                ).length;
            for (let t = 0; t < f; t += 1) {
              i = 0;
              let e;
              (p[t] && (e = p[t]),
                S && r.grid.updateSlide(t, e, f, n),
                (p[t] && "none" === B(e, "display")) ||
                ("auto" === a.slidesPerView
                  ? (z && (p[t].style[n("width")] = ""),
                    (D = getComputedStyle(e)),
                    (C = e.style.transform),
                    (M = e.style.webkitTransform),
                    C && (e.style.transform = "none"),
                    M && (e.style.webkitTransform = "none"),
                    (i = a.roundLengths
                      ? r.isHorizontal()
                        ? $(e, "width", !0)
                        : $(e, "height", !0)
                      : ((A = s(D, "width")),
                        (k = s(D, "padding-left")),
                        (L = s(D, "padding-right")),
                        (O = s(D, "margin-left")),
                        (P = s(D, "margin-right")),
                        (D = D.getPropertyValue("box-sizing")) &&
                          "border-box" === D
                          ? A + O + P
                          : (({ clientWidth: D, offsetWidth: I } = e),
                            A + k + L + O + P + (I - D)))),
                    C && (e.style.transform = C),
                    M && (e.style.webkitTransform = M),
                    a.roundLengths && (i = Math.floor(i)))
                  : ((i =
                    (o - (a.slidesPerView - 1) * x) / a.slidesPerView),
                    a.roundLengths && (i = Math.floor(i)),
                    p[t] && (p[t].style[n("width")] = i + "px")),
                  p[t] && (p[t].swiperSlideSize = i),
                  g.push(i),
                  a.centeredSlides
                    ? ((E = E + i / 2 + _ / 2 + x),
                      0 === _ && 0 !== t && (E = E - o / 2 - x),
                      0 === t && (E = E - o / 2 - x),
                      Math.abs(E) < 0.001 && (E = 0),
                      a.roundLengths && (E = Math.floor(E)),
                      T % a.slidesPerGroup == 0 && h.push(E),
                      m.push(E))
                    : (a.roundLengths && (E = Math.floor(E)),
                      (T - Math.min(r.params.slidesPerGroupSkip, T)) %
                      r.params.slidesPerGroup ==
                      0 && h.push(E),
                      m.push(E),
                      (E = E + i + x)),
                  (r.virtualSize += i + x),
                  (_ = i),
                  (T += 1)));
            }
            if (
              ((r.virtualSize = Math.max(r.virtualSize, o) + b),
                l &&
                d &&
                ("slide" === a.effect || "coverflow" === a.effect) &&
                (e.style.width = r.virtualSize + x + "px"),
                a.setWrapperSize &&
                (e.style[n("width")] = r.virtualSize + x + "px"),
                S && r.grid.updateWrapperSize(i, h, n),
                !a.centeredSlides)
            ) {
              var j = [];
              for (let t = 0; t < h.length; t += 1) {
                let e = h[t];
                (a.roundLengths && (e = Math.floor(e)),
                  h[t] <= r.virtualSize - o && j.push(e));
              }
              ((h = j),
                1 <
                Math.floor(r.virtualSize - o) -
                Math.floor(h[h.length - 1]) && h.push(r.virtualSize - o));
            }
            if (c && a.loop) {
              var N = g[0] + x;
              if (1 < a.slidesPerGroup) {
                var H = Math.ceil(
                  (r.virtual.slidesBefore + r.virtual.slidesAfter) /
                  a.slidesPerGroup,
                ),
                  q = N * a.slidesPerGroup;
                for (let e = 0; e < H; e += 1) h.push(h[h.length - 1] + q);
              }
              for (
                let e = 0;
                e < r.virtual.slidesBefore + r.virtual.slidesAfter;
                e += 1
              )
                (1 === a.slidesPerGroup && h.push(h[h.length - 1] + N),
                  m.push(m[m.length - 1] + N),
                  (r.virtualSize += N));
            }
            if ((0 === h.length && (h = [0]), 0 !== x)) {
              let t = r.isHorizontal() && l ? "marginLeft" : n("marginRight");
              p.filter(
                (e, t) => !(a.cssMode && !a.loop) || t !== p.length - 1,
              ).forEach((e) => {
                e.style[t] = x + "px";
              });
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
              let t = 0,
                i =
                  (g.forEach((e) => {
                    t += e + (x || 0);
                  }),
                    (t -= x) - o);
              h = h.map((e) => (e <= 0 ? -v : e > i ? i + b : e));
            }
            if (a.centerInsufficientSlides) {
              let t = 0;
              if (
                (g.forEach((e) => {
                  t += e + (x || 0);
                }),
                  (t -= x) < o)
              ) {
                let i = (o - t) / 2;
                (h.forEach((e, t) => {
                  h[t] = e - i;
                }),
                  m.forEach((e, t) => {
                    m[t] = e + i;
                  }));
              }
            }
            if (
              (Object.assign(r, {
                slides: p,
                snapGrid: h,
                slidesGrid: m,
                slidesSizesGrid: g,
              }),
                a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
            ) {
              (R(e, "--swiper-centered-offset-before", -h[0] + "px"),
                R(
                  e,
                  "--swiper-centered-offset-after",
                  r.size / 2 - g[g.length - 1] / 2 + "px",
                ));
              let t = -r.snapGrid[0],
                i = -r.slidesGrid[0];
              ((r.snapGrid = r.snapGrid.map((e) => e + t)),
                (r.slidesGrid = r.slidesGrid.map((e) => e + i)));
            }
            (f !== u && r.emit("slidesLengthChange"),
              h.length !== y &&
              (r.params.watchOverflow && r.checkOverflow(),
                r.emit("snapGridLengthChange")),
              m.length !== w && r.emit("slidesGridLengthChange"),
              a.watchSlidesProgress && r.updateSlidesOffset(),
              c ||
              a.cssMode ||
              ("slide" !== a.effect && "fade" !== a.effect) ||
              ((u = a.containerModifierClass + "backface-hidden"),
                (y = r.el.classList.contains(u)),
                f <= a.maxBackfaceHiddenSlides
                  ? y || r.el.classList.add(u)
                  : y && r.el.classList.remove(u)));
          }
        },
        updateAutoHeight: function (e) {
          let t = this,
            i = [],
            r = t.virtual && t.params.virtual.enabled,
            n = 0,
            s;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          var a,
            o = (e) => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
          if ("auto" !== t.params.slidesPerView && 1 < t.params.slidesPerView)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                i.push(e);
              });
            else
              for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                var l = t.activeIndex + s;
                if (l > t.slides.length && !r) break;
                i.push(o(l));
              }
          else i.push(o(t.activeIndex));
          for (s = 0; s < i.length; s += 1)
            void 0 !== i[s] && ((a = i[s].offsetHeight), (n = a > n ? a : n));
          (!n && 0 !== n) || (t.wrapperEl.style.height = n + "px");
        },
        updateSlidesOffset: function () {
          var t = this.slides,
            i = this.isElement
              ? this.isHorizontal()
                ? this.wrapperEl.offsetLeft
                : this.wrapperEl.offsetTop
              : 0;
          for (let e = 0; e < t.length; e += 1)
            t[e].swiperSlideOffset =
              (this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop) -
              i -
              this.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var n = this;
          let s = n.params;
          var { slides: a, rtlTranslate: o, snapGrid: l } = n;
          if (0 !== a.length) {
            void 0 === a[0].swiperSlideOffset && n.updateSlidesOffset();
            let i = o ? e : -e,
              r =
                (a.forEach((e) => {
                  e.classList.remove(s.slideVisibleClass);
                }),
                  (n.visibleSlidesIndexes = []),
                  (n.visibleSlides = []),
                  s.spaceBetween);
            "string" == typeof r && 0 <= r.indexOf("%")
              ? (r = (parseFloat(r.replace("%", "")) / 100) * n.size)
              : "string" == typeof r && (r = parseFloat(r));
            for (let t = 0; t < a.length; t += 1) {
              var d = a[t];
              let e = d.swiperSlideOffset;
              s.cssMode && s.centeredSlides && (e -= a[0].swiperSlideOffset);
              var c =
                (i + (s.centeredSlides ? n.minTranslate() : 0) - e) /
                (d.swiperSlideSize + r),
                u =
                  (i - l[0] + (s.centeredSlides ? n.minTranslate() : 0) - e) /
                  (d.swiperSlideSize + r),
                p = -(i - e),
                f = p + n.slidesSizesGrid[t];
              (((0 <= p && p < n.size - 1) ||
                (1 < f && f <= n.size) ||
                (p <= 0 && f >= n.size)) &&
                (n.visibleSlides.push(d),
                  n.visibleSlidesIndexes.push(t),
                  a[t].classList.add(s.slideVisibleClass)),
                (d.progress = o ? -c : c),
                (d.originalProgress = o ? -u : u));
            }
          }
        },
        updateProgress: function (e) {
          var t = this,
            i =
              (void 0 === e &&
                ((i = t.rtlTranslate ? -1 : 1),
                  (e = (t && t.translate && t.translate * i) || 0)),
                t.params),
            r = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: s, isEnd: a, progressLoop: o } = t;
          var l,
            d,
            c,
            u = s,
            p = a;
          (0 == r
            ? ((n = 0), (s = !0), (a = !0))
            : ((n = (e - t.minTranslate()) / r),
              (r = Math.abs(e - t.minTranslate()) < 1),
              (l = Math.abs(e - t.maxTranslate()) < 1),
              (s = r || n <= 0),
              (a = l || 1 <= n),
              r && (n = 0),
              l && (n = 1)),
            i.loop &&
            ((r = t.getSlideIndexByData(0)),
              (l = t.getSlideIndexByData(t.slides.length - 1)),
              (r = t.slidesGrid[r]),
              (l = t.slidesGrid[l]),
              (d = t.slidesGrid[t.slidesGrid.length - 1]),
              (c = Math.abs(e)),
              1 < (o = r <= c ? (c - r) / d : (c + d - l) / d)) &&
            --o,
            Object.assign(t, {
              progress: n,
              progressLoop: o,
              isBeginning: s,
              isEnd: a,
            }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
            s && !u && t.emit("reachBeginning toEdge"),
            a && !p && t.emit("reachEnd toEdge"),
            ((u && !s) || (p && !a)) && t.emit("fromEdge"),
            t.emit("progress", n));
        },
        updateSlidesClasses: function () {
          let { slides: i, params: r, slidesEl: t, activeIndex: n } = this;
          var e = this.virtual && r.virtual.enabled,
            s = (e) => F(t, `.${r.slideClass}${e}, swiper-slide` + e)[0];
          i.forEach((e) => {
            e.classList.remove(
              r.slideActiveClass,
              r.slideNextClass,
              r.slidePrevClass,
            );
          });
          let a;
          if (e)
            if (r.loop) {
              let e = n - this.virtual.slidesBefore;
              ((e = e < 0 ? this.virtual.slides.length + e : e) >=
                this.virtual.slides.length &&
                (e -= this.virtual.slides.length),
                (a = s(`[data-swiper-slide-index="${e}"]`)));
            } else a = s(`[data-swiper-slide-index="${n}"]`);
          else a = i[n];
          if (a) {
            a.classList.add(r.slideActiveClass);
            let e = ((e, t) => {
              for (var i = []; e.nextElementSibling;) {
                var r = e.nextElementSibling;
                ((!t || r.matches(t)) && i.push(r), (e = r));
              }
              return i;
            })(a, `.${r.slideClass}, swiper-slide`)[0],
              t =
                ((e = r.loop && !e ? i[0] : e) &&
                  e.classList.add(r.slideNextClass),
                  ((e, t) => {
                    for (var i = []; e.previousElementSibling;) {
                      var r = e.previousElementSibling;
                      ((!t || r.matches(t)) && i.push(r), (e = r));
                    }
                    return i;
                  })(a, `.${r.slideClass}, swiper-slide`)[0]);
            (t = r.loop && 0 === !t ? i[i.length - 1] : t) &&
              t.classList.add(r.slidePrevClass);
          }
          this.emitSlidesClasses();
        },
        updateActiveIndex: function (t) {
          let i = this;
          var e = i.rtlTranslate ? i.translate : -i.translate,
            {
              snapGrid: r,
              params: n,
              activeIndex: s,
              realIndex: a,
              snapIndex: o,
            } = i;
          let l = t,
            d;
          if (
            ((t = (e) => {
              let t = e - i.virtual.slidesBefore;
              return (
                (t = t < 0 ? i.virtual.slides.length + t : t) >=
                i.virtual.slides.length && (t -= i.virtual.slides.length),
                t
              );
            }),
              void 0 === l &&
              (l = ((e) => {
                var { slidesGrid: t, params: i } = e,
                  r = e.rtlTranslate ? e.translate : -e.translate;
                let n;
                for (let e = 0; e < t.length; e += 1)
                  void 0 !== t[e + 1]
                    ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2
                      ? (n = e)
                      : r >= t[e] && r < t[e + 1] && (n = e + 1)
                    : r >= t[e] && (n = e);
                return (n =
                  i.normalizeSlideIndex && (n < 0 || void 0 === n) ? 0 : n);
              })(i)),
              (d =
                0 <= r.indexOf(e)
                  ? r.indexOf(e)
                  : (e = Math.min(n.slidesPerGroupSkip, l)) +
                  Math.floor((l - e) / n.slidesPerGroup)) >= r.length &&
              (d = r.length - 1),
              l === s)
          )
            (d !== o && ((i.snapIndex = d), i.emit("snapIndexChange")),
              i.params.loop &&
              i.virtual &&
              i.params.virtual.enabled &&
              (i.realIndex = t(l)));
          else {
            let e;
            ((e =
              i.virtual && n.virtual.enabled && n.loop
                ? t(l)
                : i.slides[l]
                  ? parseInt(
                    i.slides[l].getAttribute("data-swiper-slide-index") ||
                    l,
                    10,
                  )
                  : l),
              Object.assign(i, {
                previousSnapIndex: o,
                snapIndex: d,
                previousRealIndex: a,
                realIndex: e,
                previousIndex: s,
                activeIndex: l,
              }),
              i.initialized && p(i),
              i.emit("activeIndexChange"),
              i.emit("snapIndexChange"),
              a !== e && i.emit("realIndexChange"),
              (i.initialized || i.params.runCallbacksOnInit) &&
              i.emit("slideChange"));
          }
        },
        updateClickedSlide: function (e) {
          var t = this,
            i = t.params,
            r = e.closest(`.${i.slideClass}, swiper-slide`);
          let n = !1,
            s;
          if (r)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === r) {
                ((n = !0), (s = e));
                break;
              }
          r && n
            ? ((t.clickedSlide = r),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                  r.getAttribute("data-swiper-slide-index"),
                  10,
                ))
                : (t.clickedIndex = s),
              i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide())
            : ((t.clickedSlide = void 0), (t.clickedIndex = void 0));
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var {
            params: t,
            rtlTranslate: i,
            translate: r,
            wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return i ? -r : r;
          if (t.cssMode) return r;
          let s = k(n, e);
          return ((s += this.cssOverflowAdjustment()), (s = i ? -s : s) || 0);
        },
        setTranslate: function (e, t) {
          var i = this,
            { rtlTranslate: r, params: n, wrapperEl: s, progress: a } = i;
          let o = 0,
            l = 0;
          (i.isHorizontal() ? (o = r ? -e : e) : (l = e),
            n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? o : l),
            n.cssMode
              ? (s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -o : -l)
              : n.virtualTranslate ||
              (i.isHorizontal()
                ? (o -= i.cssOverflowAdjustment())
                : (l -= i.cssOverflowAdjustment()),
                (s.style.transform = `translate3d(${o}px, ${l}px, 0px)`)));
          let d;
          ((r = i.maxTranslate() - i.minTranslate()),
            (d = 0 == r ? 0 : (e - i.minTranslate()) / r) !== a &&
            i.updateProgress(e),
            i.emit("setTranslate", i.translate, t));
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, r, n) {
          (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === r && (r = !0));
          let s = this;
          var { params: a, wrapperEl: o } = s;
          if (s.animating && a.preventInteractionOnTransition) return !1;
          var l = s.minTranslate(),
            d = s.maxTranslate();
          let c;
          if (
            ((c = r && l < e ? l : r && e < d ? d : e),
              s.updateProgress(c),
              a.cssMode)
          ) {
            l = s.isHorizontal();
            if (0 === t) o[l ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!s.support.smoothScroll)
                return (
                  x({
                    swiper: s,
                    targetPosition: -c,
                    side: l ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [l ? "left" : "top"]: -c, behavior: "smooth" });
            }
          } else
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(c),
                i &&
                (s.emit("beforeTransitionStart", t, n),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(c),
                i &&
                (s.emit("beforeTransitionStart", t, n),
                  s.emit("transitionStart")),
                s.animating ||
                ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.wrapperEl.removeEventListener(
                        "transitionend",
                        s.onTranslateToWrapperTransitionEnd,
                      ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        i) &&
                      s.emit("transitionEnd");
                  }),
                  s.wrapperEl.addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd,
                  )));
          return !0;
        },
      },
      transition: {
        setTransition: function (e, t) {
          (this.params.cssMode ||
            (this.wrapperEl.style.transitionDuration = e + "ms"),
            this.emit("setTransition", e, t));
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.params;
          i.cssMode ||
            (i.autoHeight && this.updateAutoHeight(),
              N({
                swiper: this,
                runCallbacks: e,
                direction: t,
                step: "Start",
              }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.params;
          ((this.animating = !1),
            i.cssMode ||
            (this.setTransition(0),
              N({
                swiper: this,
                runCallbacks: e,
                direction: t,
                step: "End",
              })));
        },
      },
      slide: {
        slideTo: function (e, i, t, r, n) {
          (void 0 === i && (i = this.params.speed),
            void 0 === t && (t = !0),
            "string" == typeof (e = void 0 === e ? 0 : e) &&
            (e = parseInt(e, 10)));
          let s = this,
            a = e,
            {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: f,
              enabled: h,
            } = (a < 0 && (a = 0), s);
          if (
            (s.animating && o.preventInteractionOnTransition) ||
            (!h && !r && !n)
          )
            return !1;
          let m =
            (e = Math.min(s.params.slidesPerGroupSkip, a)) +
            Math.floor((a - e) / s.params.slidesPerGroup);
          var g = -l[(m = m >= l.length ? l.length - 1 : m)];
          if (o.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
              var v = -Math.floor(100 * g),
                b = Math.floor(100 * d[e]),
                y = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? b <= v && v < y - (y - b) / 2
                  ? (a = e)
                  : b <= v && v < y && (a = e + 1)
                : b <= v && (a = e);
            }
          if (s.initialized && a !== u) {
            if (
              !s.allowSlideNext &&
              (p
                ? g > s.translate && g > s.minTranslate()
                : g < s.translate && g < s.minTranslate())
            )
              return !1;
            if (
              !s.allowSlidePrev &&
              g > s.translate &&
              g > s.maxTranslate() &&
              (u || 0) !== a
            )
              return !1;
          }
          (a !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
            s.updateProgress(g));
          let w;
          if (
            ((w = a > u ? "next" : a < u ? "prev" : "reset"),
              (p && -g === s.translate) || (!p && g === s.translate))
          )
            return (
              s.updateActiveIndex(a),
              o.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== o.effect && s.setTranslate(g),
              "reset" !== w &&
              (s.transitionStart(t, w), s.transitionEnd(t, w)),
              !1
            );
          if (o.cssMode) {
            let e = s.isHorizontal(),
              t = p ? g : -g;
            if (0 === i) {
              n = s.virtual && s.params.virtual.enabled;
              (n &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                  (s._immediateVirtual = !0)),
                n && !s._cssModeVirtualInitialSet && 0 < s.params.initialSlide
                  ? ((s._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      f[e ? "scrollLeft" : "scrollTop"] = t;
                    }))
                  : (f[e ? "scrollLeft" : "scrollTop"] = t),
                n &&
                requestAnimationFrame(() => {
                  ((s.wrapperEl.style.scrollSnapType = ""),
                    (s._immediateVirtual = !1));
                }));
            } else {
              if (!s.support.smoothScroll)
                return (
                  x({
                    swiper: s,
                    targetPosition: t,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: t, behavior: "smooth" });
            }
          } else
            (s.setTransition(i),
              s.setTranslate(g),
              s.updateActiveIndex(a),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", i, r),
              s.transitionStart(t, w),
              0 === i
                ? s.transitionEnd(t, w)
                : s.animating ||
                ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.wrapperEl.removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd,
                      ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(t, w));
                  }),
                  s.wrapperEl.addEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd,
                  )));
          return !0;
        },
        slideToLoop: function (e, t, i, r) {
          (void 0 === t && (t = this.params.speed), void 0 === i && (i = !0));
          let n = (e =
            "string" == typeof (e = void 0 === e ? 0 : e)
              ? parseInt(e, 10)
              : e);
          return (
            this.params.loop &&
            (this.virtual && this.params.virtual.enabled
              ? (n += this.virtual.slidesBefore)
              : (n = this.getSlideIndexByData(n))),
            this.slideTo(n, t, i, r)
          );
        },
        slideNext: function (e, t, i) {
          (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
          var r = this,
            { enabled: n, params: s, animating: a } = r;
          if (!n) return r;
          let o = s.slidesPerGroup;
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var n = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
            l = r.virtual && s.virtual.enabled;
          if (s.loop) {
            if (a && !l && s.loopPreventsSliding) return !1;
            (r.loopFix({ direction: "next" }),
              (r._clientLeft = r.wrapperEl.clientLeft));
          }
          return s.rewind && r.isEnd
            ? r.slideTo(0, e, t, i)
            : r.slideTo(r.activeIndex + n, e, t, i);
        },
        slidePrev: function (e, t, i) {
          (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
          var r = this,
            {
              params: n,
              snapGrid: s,
              slidesGrid: a,
              rtlTranslate: o,
              enabled: l,
              animating: d,
            } = r;
          if (!l) return r;
          if (((l = r.virtual && n.virtual.enabled), n.loop)) {
            if (d && !l && n.loopPreventsSliding) return !1;
            (r.loopFix({ direction: "prev" }),
              (r._clientLeft = r.wrapperEl.clientLeft));
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          let u = c(o ? r.translate : -r.translate),
            p = ((d = s.map((e) => c(e))), s[d.indexOf(u) - 1]);
          if (void 0 === p && n.cssMode) {
            let i;
            (s.forEach((e, t) => {
              u >= e && (i = t);
            }),
              void 0 !== i && (p = s[0 < i ? i - 1 : i]));
          }
          let f = 0;
          return (
            void 0 !== p &&
            ((f = a.indexOf(p)) < 0 && (f = r.activeIndex - 1),
              "auto" === n.slidesPerView) &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - r.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0))),
            n.rewind && r.isBeginning
              ? ((l =
                r.params.virtual && r.params.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1),
                r.slideTo(l, e, t, i))
              : r.slideTo(f, e, t, i)
          );
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), i)
          );
        },
        slideToClosest: function (e, t, i, r) {
          (void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5));
          var n = this;
          let s = n.activeIndex;
          var a,
            o =
              (o = Math.min(n.params.slidesPerGroupSkip, s)) +
              Math.floor((s - o) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          return (
            l >= n.snapGrid[o]
              ? ((a = n.snapGrid[o]),
                (n.snapGrid[o + 1] - a) * r < l - a &&
                (s += n.params.slidesPerGroup))
              : l - (a = n.snapGrid[o - 1]) <= (n.snapGrid[o] - a) * r &&
              (s -= n.params.slidesPerGroup),
            (s = Math.max(s, 0)),
            (s = Math.min(s, n.slidesGrid.length - 1)),
            n.slideTo(s, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          let e = this;
          var t,
            { params: i, slidesEl: r } = e,
            n =
              "auto" === i.slidesPerView
                ? e.slidesPerViewDynamic()
                : i.slidesPerView;
          let s = e.clickedIndex;
          var a = e.isElement ? "swiper-slide" : "." + i.slideClass;
          i.loop
            ? e.animating ||
            ((t = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10,
            )),
              i.centeredSlides
                ? s < e.loopedSlides - n / 2 ||
                  s > e.slides.length - e.loopedSlides + n / 2
                  ? (e.loopFix(),
                    (s = e.getSlideIndex(
                      F(r, a + `[data-swiper-slide-index="${t}"]`)[0],
                    )),
                    T(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - n
                  ? (e.loopFix(),
                    (s = e.getSlideIndex(
                      F(r, a + `[data-swiper-slide-index="${t}"]`)[0],
                    )),
                    T(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s))
            : e.slideTo(s);
        },
      },
      loop: {
        loopCreate: function (e) {
          var { params: t, slidesEl: i } = this;
          !t.loop ||
            (this.virtual && this.params.virtual.enabled) ||
            (F(i, `.${t.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            }),
              this.loopFix({
                slideRealIndex: e,
                direction: t.centeredSlides ? void 0 : "next",
              }));
        },
        loopFix: function (d) {
          let {
            slideRealIndex: c,
            slideTo: u = !0,
            direction: p,
            setTranslate: f,
            activeSlideIndex: h,
            byController: m,
            byMousewheel: g,
          } = void 0 === d ? {} : d,
            v = this;
          if (v.params.loop) {
            v.emit("beforeLoopFix");
            let {
              slides: n,
              allowSlidePrev: s,
              allowSlideNext: a,
              slidesEl: o,
              params: l,
            } = v;
            if (
              ((v.allowSlidePrev = !0),
                (v.allowSlideNext = !0),
                v.virtual && l.virtual.enabled)
            )
              (u &&
                (l.centeredSlides || 0 !== v.snapIndex
                  ? l.centeredSlides && v.snapIndex < l.slidesPerView
                    ? v.slideTo(
                      v.virtual.slides.length + v.snapIndex,
                      0,
                      !1,
                      !0,
                    )
                    : v.snapIndex === v.snapGrid.length - 1 &&
                    v.slideTo(v.virtual.slidesBefore, 0, !1, !0)
                  : v.slideTo(v.virtual.slides.length, 0, !1, !0)),
                (v.allowSlidePrev = s),
                (v.allowSlideNext = a));
            else {
              d =
                "auto" === l.slidesPerView
                  ? v.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(l.slidesPerView, 10));
              let t = l.loopedSlides || d;
              (t % l.slidesPerGroup != 0 &&
                (t += l.slidesPerGroup - (t % l.slidesPerGroup)),
                (v.loopedSlides = t));
              var b = [],
                y = [];
              let e = v.activeIndex;
              void 0 === h
                ? (h = v.getSlideIndex(
                  v.slides.filter((e) =>
                    e.classList.contains(l.slideActiveClass),
                  )[0],
                ))
                : (e = h);
              var d = "next" === p || !p,
                w = "prev" === p || !p;
              let i = 0,
                r = 0;
              if (h < t) {
                i = Math.max(t - h, l.slidesPerGroup);
                for (let e = 0; e < t - h; e += 1) {
                  var x = e - Math.floor(e / n.length) * n.length;
                  b.push(n.length - x - 1);
                }
              } else if (h > v.slides.length - 2 * t) {
                r = Math.max(h - (v.slides.length - 2 * t), l.slidesPerGroup);
                for (let e = 0; e < r; e += 1) {
                  var E = e - Math.floor(e / n.length) * n.length;
                  y.push(E);
                }
              }
              if (
                (w &&
                  b.forEach((e) => {
                    ((v.slides[e].swiperLoopMoveDOM = !0),
                      o.prepend(v.slides[e]),
                      (v.slides[e].swiperLoopMoveDOM = !1));
                  }),
                  d &&
                  y.forEach((e) => {
                    ((v.slides[e].swiperLoopMoveDOM = !0),
                      o.append(v.slides[e]),
                      (v.slides[e].swiperLoopMoveDOM = !1));
                  }),
                  v.recalcSlides(),
                  "auto" === l.slidesPerView && v.updateSlides(),
                  l.watchSlidesProgress && v.updateSlidesOffset(),
                  u &&
                  (0 < b.length && w
                    ? void 0 === c
                      ? ((w = v.slidesGrid[e]),
                        (w = v.slidesGrid[e + i] - w),
                        g
                          ? v.setTranslate(v.translate - w)
                          : (v.slideTo(e + i, 0, !1, !0),
                            f &&
                            (v.touches[
                              v.isHorizontal() ? "startX" : "startY"
                            ] += w)))
                      : f && v.slideToLoop(c, 0, !1, !0)
                    : 0 < y.length &&
                    d &&
                    (void 0 === c
                      ? ((w = v.slidesGrid[e]),
                        (d = v.slidesGrid[e - r] - w),
                        g
                          ? v.setTranslate(v.translate - d)
                          : (v.slideTo(e - r, 0, !1, !0),
                            f &&
                            (v.touches[
                              v.isHorizontal() ? "startX" : "startY"
                            ] += d)))
                      : v.slideToLoop(c, 0, !1, !0))),
                  (v.allowSlidePrev = s),
                  (v.allowSlideNext = a),
                  v.controller && v.controller.control && !m)
              ) {
                let t = {
                  slideRealIndex: c,
                  slideTo: !1,
                  direction: p,
                  setTranslate: f,
                  activeSlideIndex: h,
                  byController: !0,
                };
                Array.isArray(v.controller.control)
                  ? v.controller.control.forEach((e) => {
                    !e.destroyed && e.params.loop && e.loopFix(t);
                  })
                  : v.controller.control instanceof v.constructor &&
                  v.controller.control.params.loop &&
                  v.controller.control.loopFix(t);
              }
            }
            v.emit("loopFix");
          }
        },
        loopDestroy: function () {
          let { params: e, slidesEl: t } = this;
          if (!(!e.loop || (this.virtual && this.params.virtual.enabled))) {
            this.recalcSlides();
            let i = [];
            (this.slides.forEach((e) => {
              var t =
                void 0 === e.swiperSlideIndex
                  ? +e.getAttribute("data-swiper-slide-index")
                  : e.swiperSlideIndex;
              i[t] = e;
            }),
              this.slides.forEach((e) => {
                e.removeAttribute("data-swiper-slide-index");
              }),
              i.forEach((e) => {
                t.append(e);
              }),
              this.recalcSlides(),
              this.slideTo(this.realIndex, 0));
          }
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          let t = this;
          var i;
          !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode ||
            ((i =
              "container" === t.params.touchEventsTarget
                ? t.el
                : t.wrapperEl),
              t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              }));
        },
        unsetGrabCursor: function () {
          let e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: G,
      breakpoints: {
        setBreakpoint: function () {
          let n = this,
            { realIndex: e, initialized: t, params: s, el: i } = n;
          if ((o = s.breakpoints) && 0 !== Object.keys(o).length) {
            var a = n.getBreakpoint(o, n.params.breakpointsBase, n.el);
            if (a && n.currentBreakpoint !== a) {
              let r = (a in o ? o[a] : void 0) || n.originalParams;
              var o = Y(n, s),
                l = Y(n, r),
                d = s.enabled,
                o =
                  (o && !l
                    ? (i.classList.remove(
                      s.containerModifierClass + "grid",
                      s.containerModifierClass + "grid-column",
                    ),
                      n.emitContainerClasses())
                    : !o &&
                    l &&
                    (i.classList.add(s.containerModifierClass + "grid"),
                      ((r.grid.fill && "column" === r.grid.fill) ||
                        (!r.grid.fill && "column" === s.grid.fill)) &&
                      i.classList.add(
                        s.containerModifierClass + "grid-column",
                      ),
                      n.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach((e) => {
                      var t, i;
                      void 0 !== r[e] &&
                        ((t = s[e] && s[e].enabled),
                          (i = r[e] && r[e].enabled),
                          t && !i && n[e].disable(),
                          !t) &&
                        i &&
                        n[e].enable();
                    }),
                    r.direction && r.direction !== s.direction),
                l = s.loop && (r.slidesPerView !== s.slidesPerView || o),
                o =
                  (o && t && n.changeDirection(),
                    c(n.params, r),
                    n.params.enabled);
              (Object.assign(n, {
                allowTouchMove: n.params.allowTouchMove,
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
              }),
                d && !o ? n.disable() : !d && o && n.enable(),
                (n.currentBreakpoint = a),
                n.emit("_beforeBreakpoint", r),
                l &&
                t &&
                (n.loopDestroy(), n.loopCreate(e), n.updateSlides()),
                n.emit("breakpoint", r));
            }
          }
        },
        getBreakpoint: function (e, r, n) {
          if (
            (void 0 === r && (r = "window"), e && ("container" !== r || n))
          ) {
            let t = !1;
            var s = A();
            let i = "window" === r ? s.innerHeight : n.clientHeight;
            var a = Object.keys(e).map((e) => {
              var t;
              return "string" == typeof e && 0 === e.indexOf("@")
                ? ((t = parseFloat(e.substr(1))), { value: i * t, point: e })
                : { value: e, point: e };
            });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              var { point: o, value: l } = a[e];
              "window" === r
                ? s.matchMedia(`(min-width: ${l}px)`).matches && (t = o)
                : l <= n.clientWidth && (t = o);
            }
            return t || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e,
            t = this,
            { isLocked: i, params: r } = t,
            n = r.slidesOffsetBefore;
          (n
            ? ((e = t.slides.length - 1),
              (e = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n),
              (t.isLocked = t.size > e))
            : (t.isLocked = 1 === t.snapGrid.length),
            !0 === r.allowSlideNext && (t.allowSlideNext = !t.isLocked),
            !0 === r.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
            i && i !== t.isLocked && (t.isEnd = !1),
            i !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"));
        },
      },
      classes: {
        addClasses: function () {
          var { classNames: e, params: t, rtl: i, el: r, device: n } = this,
            i = ((e, i) => {
              let r = [];
              return (
                e.forEach((t) => {
                  "object" == typeof t
                    ? Object.keys(t).forEach((e) => {
                      t[e] && r.push(i + e);
                    })
                    : "string" == typeof t && r.push(i + t);
                }),
                r
              );
            })(
              [
                "initialized",
                t.direction,
                { "free-mode": this.params.freeMode && t.freeMode.enabled },
                { autoheight: t.autoHeight },
                { rtl: i },
                { grid: t.grid && 1 < t.grid.rows },
                {
                  "grid-column":
                    t.grid && 1 < t.grid.rows && "column" === t.grid.fill,
                },
                { android: n.android },
                { ios: n.ios },
                { "css-mode": t.cssMode },
                { centered: t.cssMode && t.centeredSlides },
                { "watch-progress": t.watchSlidesProgress },
              ],
              t.containerModifierClass,
            );
          (e.push(...i), r.classList.add(...e), this.emitContainerClasses());
        },
        removeClasses: function () {
          var { el: e, classNames: t } = this;
          (e.classList.remove(...t), this.emitContainerClasses());
        },
      },
    },
      h = {};
    class m {
      constructor() {
        let e, i;
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        (1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
          ? (i = r[0])
          : ([e, i] = r),
          (i = c({}, (i = i || {}))),
          e && !i.el && (i.el = e));
        var s = L();
        if (
          i.el &&
          "string" == typeof i.el &&
          1 < s.querySelectorAll(i.el).length
        ) {
          let t = [];
          return (
            s.querySelectorAll(i.el).forEach((e) => {
              e = c({}, i, { el: e });
              t.push(new m(e));
            }),
            t
          );
        }
        let a = this,
          o =
            ((a.__swiper__ = !0),
              (a.support = u()),
              (a.device = I({ userAgent: i.userAgent })),
              (a.browser = j()),
              (a.eventsListeners = {}),
              (a.eventsAnyListeners = []),
              (a.modules = [...a.__modules__]),
              i.modules &&
              Array.isArray(i.modules) &&
              a.modules.push(...i.modules),
              {});
        a.modules.forEach((e) => {
          var r, n;
          e({
            params: i,
            swiper: a,
            extendParams:
              ((r = i),
                (n = o),
                function (e) {
                  void 0 === e && (e = {});
                  var t = Object.keys(e)[0],
                    i = e[t];
                  ("object" == typeof i &&
                    null !== i &&
                    (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) &&
                      !0 === r[t] &&
                      (r[t] = { auto: !0 }),
                      t in r && "enabled" in i) &&
                    (!0 === r[t] && (r[t] = { enabled: !0 }),
                      "object" != typeof r[t] ||
                      "enabled" in r[t] ||
                      (r[t].enabled = !0),
                      r[t] || (r[t] = { enabled: !1 })),
                    c(n, e));
                }),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        s = c({}, V, o);
        return (
          (a.params = c({}, s, h, i)),
          (a.originalParams = c({}, a.params)),
          (a.passedParams = c({}, i)),
          a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return "horizontal" === a.params.direction;
            },
            isVertical() {
              return "vertical" === a.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        var { slidesEl: t, params: i } = this,
          t = _(F(t, `.${i.slideClass}, swiper-slide`)[0]);
        return _(e) - t;
      }
      getSlideIndexByData(t) {
        return this.getSlideIndex(
          this.slides.filter(
            (e) => +e.getAttribute("data-swiper-slide-index") === t,
          )[0],
        );
      }
      recalcSlides() {
        var { slidesEl: e, params: t } = this;
        this.slides = F(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        this.enabled ||
          ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
      }
      disable() {
        this.enabled &&
          ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
      }
      setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        var i = this.minTranslate(),
          r = this.maxTranslate();
        (this.translateTo((r - i) * e + i, void 0 === t ? 0 : t),
          this.updateActiveIndex(),
          this.updateSlidesClasses());
      }
      emitContainerClasses() {
        let t = this;
        var e;
        t.params._emitClasses &&
          t.el &&
          ((e = t.el.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper") ||
                0 === e.indexOf(t.params.containerModifierClass),
            )),
            t.emit("_containerClasses", e.join(" ")));
      }
      getSlideClasses(e) {
        let t = this;
        return t.destroyed
          ? ""
          : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass),
            )
            .join(" ");
      }
      emitSlidesClasses() {
        let r = this;
        if (r.params._emitClasses && r.el) {
          let i = [];
          (r.slides.forEach((e) => {
            var t = r.getSlideClasses(e);
            (i.push({ slideEl: e, classNames: t }),
              r.emit("_slideClass", e, t));
          }),
            r.emit("_slideClasses", i));
        }
      }
      slidesPerViewDynamic(e, t) {
        (void 0 === e && (e = "current"), void 0 === t && (t = !1));
        var {
          params: i,
          slides: r,
          slidesGrid: n,
          slidesSizesGrid: s,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let t = r[o] ? r[o].swiperSlideSize : 0,
            i;
          for (let e = o + 1; e < r.length; e += 1)
            r[e] &&
              !i &&
              ((t += r[e].swiperSlideSize), (l += 1), t > a) &&
              (i = !0);
          for (let e = o - 1; 0 <= e; --e)
            r[e] &&
              !i &&
              ((t += r[e].swiperSlideSize), (l += 1), t > a) &&
              (i = !0);
        } else if ("current" === e)
          for (let e = o + 1; e < r.length; e += 1)
            (t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
        else for (let e = o - 1; 0 <= e; --e) n[o] - n[e] < a && (l += 1);
        return l;
      }
      update() {
        let t = this;
        if (t && !t.destroyed) {
          var i,
            { snapGrid: r, params: n } = t;
          (n.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && o(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses());
          let e;
          function s() {
            var e = t.rtlTranslate ? -1 * t.translate : t.translate,
              e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            (t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses());
          }
          (n.freeMode && n.freeMode.enabled && !n.cssMode
            ? (s(), n.autoHeight && t.updateAutoHeight())
            : (e =
              ("auto" === n.slidesPerView || 1 < n.slidesPerView) &&
                t.isEnd &&
                !n.centeredSlides
                ? ((i = (t.virtual && n.virtual.enabled ? t.virtual : t)
                  .slides),
                  t.slideTo(i.length - 1, 0, !1, !0))
                : t.slideTo(t.activeIndex, 0, !1, !0)) || s(),
            n.watchOverflow && r !== t.snapGrid && t.checkOverflow(),
            t.emit("update"));
        }
      }
      changeDirection(t, e) {
        void 0 === e && (e = !0);
        var i = this,
          r = i.params.direction;
        return (
          (t = t || ("horizontal" === r ? "vertical" : "horizontal")) === r ||
          ("horizontal" !== t && "vertical" !== t) ||
          (i.el.classList.remove("" + i.params.containerModifierClass + r),
            i.el.classList.add("" + i.params.containerModifierClass + t),
            i.emitContainerClasses(),
            (i.params.direction = t),
            i.slides.forEach((e) => {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            i.emit("changeDirection"),
            e && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        var t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(t.params.containerModifierClass + "rtl"),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(t.params.containerModifierClass + "rtl"),
                (t.el.dir = "ltr")),
            t.update());
      }
      mount(r) {
        let n = this;
        if (!n.mounted) {
          let e = r || n.params.el;
          if (!(e = "string" == typeof e ? document.querySelector(e) : e))
            return !1;
          ((e.swiper = n), e.shadowEl && (n.isElement = !0));
          let t = () =>
            "." + (n.params.wrapperClass || "").trim().split(" ").join(".");
          let i =
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? e.shadowRoot.querySelector(t())
              : F(e, t())[0];
          (!i &&
            n.params.createElements &&
            ((i = S("div", n.params.wrapperClass)),
              e.append(i),
              F(e, "." + n.params.slideClass).forEach((e) => {
                i.append(e);
              })),
            Object.assign(n, {
              el: e,
              wrapperEl: i,
              slidesEl: n.isElement ? e : i,
              mounted: !0,
              rtl: "rtl" === e.dir.toLowerCase() || "rtl" === B(e, "direction"),
              rtlTranslate:
                "horizontal" === n.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === B(e, "direction")),
              wrongRTL: "-webkit-box" === B(i, "display"),
            }));
        }
        return !0;
      }
      init(e) {
        let t = this;
        return (
          t.initialized ||
          (!1 !== t.mount(e) &&
            (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                )
                : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                ),
              t.params.loop && t.loopCreate(),
              t.attachEvents(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete
                  ? o(t, e)
                  : e.addEventListener("load", (e) => {
                    o(t, e.target);
                  });
              }),
              p(t),
              (t.initialized = !0),
              p(t),
              t.emit("init"),
              t.emit("afterInit"))),
          t
        );
      }
      destroy(e, i) {
        (void 0 === e && (e = !0), void 0 === i && (i = !0));
        let r = this,
          { params: t, el: n, wrapperEl: s, slides: a } = r;
        if (void 0 !== r.params && !r.destroyed) {
          if (
            (r.emit("beforeDestroy"),
              (r.initialized = !1),
              r.detachEvents(),
              t.loop && r.loopDestroy(),
              i &&
              (r.removeClasses(),
                n.removeAttribute("style"),
                s.removeAttribute("style"),
                a) &&
              a.length &&
              a.forEach((e) => {
                (e.classList.remove(
                  t.slideVisibleClass,
                  t.slideActiveClass,
                  t.slideNextClass,
                  t.slidePrevClass,
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index"));
              }),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e) => {
                r.off(e);
              }),
              !1 !== e)
          ) {
            r.el.swiper = null;
            {
              i = r;
              let t = i;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) { }
                try {
                  delete t[e];
                } catch (e) { }
              });
            }
          }
          r.destroyed = !0;
        }
        return null;
      }
      static extendDefaults(e) {
        c(h, e);
      }
      static get extendedDefaults() {
        return h;
      }
      static get defaults() {
        return V;
      }
      static installModule(e) {
        m.prototype.__modules__ || (m.prototype.__modules__ = []);
        var t = m.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return (
          Array.isArray(e)
            ? e.forEach((e) => m.installModule(e))
            : m.installModule(e),
          m
        );
      }
    }
    function C(i, r, n, s) {
      return (
        i.params.createElements &&
        Object.keys(s).forEach((t) => {
          if (!n[t] && !0 === n.auto) {
            let e = F(i.el, "." + s[t])[0];
            (e || (((e = S("div", s[t])).className = s[t]), i.el.append(e)),
              (n[t] = e),
              (r[t] = e));
          }
        }),
        n
      );
    }
    function M(e) {
      return (
        "." +
        (e = void 0 === e ? "" : e)
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")
      );
    }
    function y(e) {
      let {
        effect: i,
        swiper: r,
        on: t,
        setTranslate: n,
        setTransition: s,
        overwriteParams: a,
        perspective: o,
        recreateShadows: l,
        getEffectParams: d,
      } = e;
      (t("beforeInit", () => {
        var e;
        r.params.effect === i &&
          (r.classNames.push("" + r.params.containerModifierClass + i),
            o && o() && r.classNames.push(r.params.containerModifierClass + "3d"),
            (e = a ? a() : {}),
            Object.assign(r.params, e),
            Object.assign(r.originalParams, e));
      }),
        t("setTranslate", () => {
          r.params.effect === i && n();
        }),
        t("setTransition", (e, t) => {
          r.params.effect === i && s(t);
        }),
        t("transitionEnd", () => {
          r.params.effect === i &&
            l &&
            d &&
            d().slideShadows &&
            (r.slides.forEach((e) => {
              e.querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
              ).forEach((e) => e.remove());
            }),
              l());
        }));
      let c;
      t("virtualUpdate", () => {
        r.params.effect === i &&
          (r.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && r.slides && r.slides.length && (n(), (c = !1));
            }));
      });
    }
    function E(e, t) {
      var i = a(t);
      return (
        i !== t &&
        ((i.style.backfaceVisibility = "hidden"),
          (i.style["-webkit-backface-visibility"] = "hidden")),
        i
      );
    }
    function b(e) {
      let { swiper: i, duration: t, transformElements: r, allSlides: n } = e,
        s = i.activeIndex;
      if (i.params.virtualTranslate && 0 !== t) {
        let t = !1,
          e;
        (e = n
          ? r
          : r.filter((e) => {
            var t,
              e = e.classList.contains("swiper-slide-transform")
                ? (t = e).parentElement ||
                i.slides.filter(
                  (e) => e.shadowEl && e.shadowEl === t.parentNode,
                )[0]
                : e;
            return i.getSlideIndex(e) === s;
          })).forEach((e) => {
            g(e, () => {
              var e;
              t ||
                (i &&
                  !i.destroyed &&
                  ((t = !0),
                    (i.animating = !1),
                    (e = new window.CustomEvent("transitionend", {
                      bubbles: !0,
                      cancelable: !0,
                    })),
                    i.wrapperEl.dispatchEvent(e)));
            });
          });
      }
    }
    function D(e, t, i) {
      var r = "swiper-slide-shadow" + (i ? "-" + i : ""),
        t = a(t);
      let n = t.querySelector("." + r);
      return (
        n ||
        ((n = S("div", "swiper-slide-shadow" + (i ? "-" + i : ""))),
          t.append(n)),
        n
      );
    }
    return (
      Object.keys(f).forEach((t) => {
        Object.keys(f[t]).forEach((e) => {
          m.prototype[e] = f[t][e];
        });
      }),
      m.use([
        function (e) {
          let { swiper: s, on: t, emit: i } = e,
            r = A(),
            n = null,
            a = null,
            o = () => {
              s &&
                !s.destroyed &&
                s.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              s && !s.destroyed && s.initialized && i("orientationchange");
            };
          (t("init", () => {
            s.params.resizeObserver && void 0 !== r.ResizeObserver
              ? s &&
              !s.destroyed &&
              s.initialized &&
              (n = new ResizeObserver((i) => {
                a = r.requestAnimationFrame(() => {
                  var { width: e, height: t } = s;
                  let r = e,
                    n = t;
                  (i.forEach((e) => {
                    var { contentBoxSize: e, contentRect: t, target: i } = e;
                    (i && i !== s.el) ||
                      ((r = t ? t.width : (e[0] || e).inlineSize),
                        (n = t ? t.height : (e[0] || e).blockSize));
                  }),
                    (r === e && n === t) || o());
                });
              })).observe(s.el)
              : (r.addEventListener("resize", o),
                r.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              (a && r.cancelAnimationFrame(a),
                n && n.unobserve && s.el && (n.unobserve(s.el), (n = null)),
                r.removeEventListener("resize", o),
                r.removeEventListener("orientationchange", l));
            }));
        },
        function (e) {
          function i(e, t) {
            void 0 === t && (t = {});
            var i = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                var t;
                r.__preventObserver__ ||
                  (1 === e.length
                    ? s("observerUpdate", e[0])
                    : ((t = function () {
                      s("observerUpdate", e[0]);
                    }),
                      o.requestAnimationFrame
                        ? o.requestAnimationFrame(t)
                        : o.setTimeout(t, 0)));
              },
            );
            (i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              a.push(i));
          }
          let { swiper: r, extendParams: t, on: n, emit: s } = e,
            a = [],
            o = A();
          (t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (r.params.observer) {
                if (r.params.observeParents) {
                  var t = P(r.el);
                  for (let e = 0; e < t.length; e += 1) i(t[e]);
                }
                (i(r.el, { childList: r.params.observeSlideChildren }),
                  i(r.wrapperEl, { attributes: !1 }));
              }
            }),
            n("destroy", () => {
              (a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length));
            }));
        },
      ]),
      m.use([
        function (e) {
          let { swiper: M, extendParams: t, on: i, emit: A } = e;
          t({
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          });
          let r,
            n =
              ((e = L()),
                (M.virtual = {
                  cache: {},
                  from: void 0,
                  to: void 0,
                  slides: [],
                  offset: 0,
                  slidesGrid: [],
                }),
                e.createElement("div"));
          function k(e, t) {
            var i = M.params.virtual;
            if (i.cache && M.virtual.cache[t]) return M.virtual.cache[t];
            let r;
            return (
              i.renderSlide
                ? "string" == typeof (r = i.renderSlide.call(M, e, t)) &&
                ((n.innerHTML = r), (r = n.children[0]))
                : (r = M.isElement
                  ? S("swiper-slide")
                  : S("div", M.params.slideClass)),
              r.setAttribute("data-swiper-slide-index", t),
              i.renderSlide || (r.innerHTML = e),
              i.cache && (M.virtual.cache[t] = r),
              r
            );
          }
          function a(t) {
            var {
              slidesPerView: e,
              slidesPerGroup: i,
              centeredSlides: r,
              loop: n,
            } = M.params,
              { addSlidesBefore: s, addSlidesAfter: a } = M.params.virtual;
            let {
              from: o,
              to: l,
              slides: d,
              slidesGrid: c,
              offset: u,
            } = M.virtual;
            M.params.cssMode || M.updateActiveIndex();
            var p = M.activeIndex || 0;
            let f;
            f = M.rtlTranslate ? "right" : M.isHorizontal() ? "left" : "top";
            let h,
              m,
              g =
                p -
                (m = r
                  ? ((h = Math.floor(e / 2) + i + a), Math.floor(e / 2) + i + s)
                  : ((h = e + (i - 1) + a), (n ? e : i) + s)),
              v = p + h,
              b =
                (n || ((g = Math.max(g, 0)), (v = Math.min(v, d.length - 1))),
                  (M.slidesGrid[g] || 0) - (M.slidesGrid[0] || 0));
            function y() {
              (M.updateSlides(),
                M.updateProgress(),
                M.updateSlidesClasses(),
                A("virtualUpdate"));
            }
            if (
              (n && p >= m
                ? ((g -= m), r || (b += M.slidesGrid[0]))
                : n && p < m && ((g = -m), r) && (b += M.slidesGrid[0]),
                Object.assign(M.virtual, {
                  from: g,
                  to: v,
                  offset: b,
                  slidesGrid: M.slidesGrid,
                  slidesBefore: m,
                  slidesAfter: h,
                }),
                o !== g || l !== v || t)
            )
              if (M.params.virtual.renderExternal)
                (M.params.virtual.renderExternal.call(M, {
                  offset: b,
                  from: g,
                  to: v,
                  slides: (() => {
                    var t = [];
                    for (let e = g; e <= v; e += 1) t.push(d[e]);
                    return t;
                  })(),
                }),
                  M.params.virtual.renderExternalUpdate
                    ? y()
                    : A("virtualUpdate"));
              else {
                var w,
                  x = [],
                  E = [],
                  _ = (e) => {
                    let t = e;
                    return (
                      e < 0
                        ? (t = d.length + e)
                        : t >= d.length && (t -= d.length),
                      t
                    );
                  };
                if (t)
                  M.slidesEl
                    .querySelectorAll(`.${M.params.slideClass}, swiper-slide`)
                    .forEach((e) => {
                      e.remove();
                    });
                else
                  for (let e = o; e <= l; e += 1)
                    (e < g || e > v) &&
                      ((w = _(e)),
                        M.slidesEl
                          .querySelectorAll(
                            `.${M.params.slideClass}[data-swiper-slide-index="${w}"], swiper-slide[data-swiper-slide-index="${w}"]`,
                          )
                          .forEach((e) => {
                            e.remove();
                          }));
                var T,
                  a = n ? -d.length : 0,
                  S = n ? 2 * d.length : d.length;
                for (let e = a; e < S; e += 1)
                  e >= g &&
                    e <= v &&
                    ((T = _(e)),
                      void 0 === l || t
                        ? E.push(T)
                        : (e > l && E.push(T), e < o && x.push(T)));
                if (
                  (E.forEach((e) => {
                    M.slidesEl.append(k(d[e], e));
                  }),
                    n)
                )
                  for (let e = x.length - 1; 0 <= e; --e) {
                    var C = x[e];
                    M.slidesEl.prepend(k(d[C], C));
                  }
                else
                  (x.sort((e, t) => t - e),
                    x.forEach((e) => {
                      M.slidesEl.prepend(k(d[e], e));
                    }));
                (F(M.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
                  e.style[f] = b - Math.abs(M.cssOverflowAdjustment()) + "px";
                }),
                  y());
              }
            else
              (M.slidesGrid !== c &&
                b !== u &&
                M.slides.forEach((e) => {
                  e.style[f] = b - Math.abs(M.cssOverflowAdjustment()) + "px";
                }),
                M.updateProgress(),
                A("virtualUpdate"));
          }
          (i("beforeInit", () => {
            if (M.params.virtual.enabled) {
              let e;
              var t;
              (void 0 === M.passedParams.virtual.slides &&
                (t = [...M.slidesEl.children].filter((e) =>
                  e.matches(`.${M.params.slideClass}, swiper-slide`),
                )) &&
                t.length &&
                ((M.virtual.slides = [...t]),
                  (e = !0),
                  t.forEach((e, t) => {
                    (e.setAttribute("data-swiper-slide-index", t),
                      (M.virtual.cache[t] = e).remove());
                  })),
                e || (M.virtual.slides = M.params.virtual.slides),
                M.classNames.push(M.params.containerModifierClass + "virtual"),
                (M.params.watchSlidesProgress = !0),
                (M.originalParams.watchSlidesProgress = !0),
                M.params.initialSlide || a());
            }
          }),
            i("setTranslate", () => {
              M.params.virtual.enabled &&
                (M.params.cssMode && !M._immediateVirtual
                  ? (clearTimeout(r),
                    (r = setTimeout(() => {
                      a();
                    }, 100)))
                  : a());
            }),
            i("init update resize", () => {
              M.params.virtual.enabled &&
                M.params.cssMode &&
                R(M.wrapperEl, "--swiper-virtual-size", M.virtualSize + "px");
            }),
            Object.assign(M.virtual, {
              appendSlide: function (t) {
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && M.virtual.slides.push(t[e]);
                else M.virtual.slides.push(t);
                a(!0);
              },
              prependSlide: function (t) {
                var e = M.activeIndex;
                let i = e + 1,
                  s = 1;
                if (Array.isArray(t)) {
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && M.virtual.slides.unshift(t[e]);
                  ((i = e + t.length), (s = t.length));
                } else M.virtual.slides.unshift(t);
                if (M.params.virtual.cache) {
                  let r = M.virtual.cache,
                    n = {};
                  (Object.keys(r).forEach((e) => {
                    var t = r[e],
                      i = t.getAttribute("data-swiper-slide-index");
                    (i &&
                      t.setAttribute(
                        "data-swiper-slide-index",
                        parseInt(i, 10) + s,
                      ),
                      (n[parseInt(e, 10) + s] = t));
                  }),
                    (M.virtual.cache = n));
                }
                (a(!0), M.slideTo(i, 0));
              },
              removeSlide: function (i) {
                if (null != i) {
                  let t = M.activeIndex;
                  if (Array.isArray(i))
                    for (let e = i.length - 1; 0 <= e; --e)
                      (M.virtual.slides.splice(i[e], 1),
                        M.params.virtual.cache && delete M.virtual.cache[i[e]],
                        i[e] < t && --t,
                        (t = Math.max(t, 0)));
                  else
                    (M.virtual.slides.splice(i, 1),
                      M.params.virtual.cache && delete M.virtual.cache[i],
                      i < t && --t,
                      (t = Math.max(t, 0)));
                  (a(!0), M.slideTo(t, 0));
                }
              },
              removeAllSlides: function () {
                ((M.virtual.slides = []),
                  M.params.virtual.cache && (M.virtual.cache = {}),
                  a(!0),
                  M.slideTo(0, 0));
              },
              update: a,
            }));
        },
        function (e) {
          let { swiper: v, extendParams: t, on: i, emit: b } = e,
            y = L(),
            w = A();
          function r(t) {
            if (v.enabled) {
              var i = v.rtlTranslate;
              let e = t;
              var t =
                (e = e.originalEvent ? e.originalEvent : e).keyCode ||
                e.charCode,
                r = v.params.keyboard.pageUpDown,
                n = r && 33 === t,
                r = r && 34 === t,
                s = 37 === t,
                a = 39 === t,
                o = 38 === t,
                l = 40 === t;
              if (
                !v.allowSlideNext &&
                ((v.isHorizontal() && a) || (v.isVertical() && l) || r)
              )
                return !1;
              if (
                !v.allowSlidePrev &&
                ((v.isHorizontal() && s) || (v.isVertical() && o) || n)
              )
                return !1;
              if (
                !(
                  e.shiftKey ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  (y.activeElement &&
                    y.activeElement.nodeName &&
                    ("input" === y.activeElement.nodeName.toLowerCase() ||
                      "textarea" === y.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  v.params.keyboard.onlyInViewport &&
                  (n || r || s || a || o || l)
                ) {
                  let t = !1;
                  if (
                    0 <
                    P(v.el, `.${v.params.slideClass}, swiper-slide`).length &&
                    0 === P(v.el, "." + v.params.slideActiveClass).length
                  )
                    return;
                  var d = v.el,
                    c = d.clientWidth,
                    u = d.clientHeight,
                    p = w.innerWidth,
                    f = w.innerHeight,
                    h = O(d),
                    m =
                      (i && (h.left -= d.scrollLeft),
                        [
                          [h.left, h.top],
                          [h.left + c, h.top],
                          [h.left, h.top + u],
                          [h.left + c, h.top + u],
                        ]);
                  for (let e = 0; e < m.length; e += 1) {
                    var g = m[e];
                    0 <= g[0] &&
                      g[0] <= p &&
                      0 <= g[1] &&
                      g[1] <= f &&
                      ((0 === g[0] && 0 === g[1]) || (t = !0));
                  }
                  if (!t) return;
                }
                (v.isHorizontal()
                  ? ((n || r || s || a) &&
                    (e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1)),
                    (((r || a) && !i) || ((n || s) && i)) && v.slideNext(),
                    (((n || s) && !i) || ((r || a) && i)) && v.slidePrev())
                  : ((n || r || o || l) &&
                    (e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1)),
                    (r || l) && v.slideNext(),
                    (n || o) && v.slidePrev()),
                  b("keyPress", t));
              }
            }
          }
          function n() {
            v.keyboard.enabled ||
              (y.addEventListener("keydown", r), (v.keyboard.enabled = !0));
          }
          function s() {
            v.keyboard.enabled &&
              (y.removeEventListener("keydown", r), (v.keyboard.enabled = !1));
          }
          ((v.keyboard = { enabled: !1 }),
            t({
              keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
            }),
            i("init", () => {
              v.params.keyboard.enabled && n();
            }),
            i("destroy", () => {
              v.keyboard.enabled && s();
            }),
            Object.assign(v.keyboard, { enable: n, disable: s }));
        },
        function (e) {
          let { swiper: l, extendParams: t, on: i, emit: d } = e,
            r = A();
          (t({
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
              noMousewheelClass: "swiper-no-mousewheel",
            },
          }),
            (l.mousewheel = { enabled: !1 }));
          let c,
            n = v(),
            u,
            p = [];
          function s() {
            l.enabled && (l.mouseEntered = !0);
          }
          function a() {
            l.enabled && (l.mouseEntered = !1);
          }
          function f(e) {
            (l.params.mousewheel.thresholdDelta &&
              e.delta < l.params.mousewheel.thresholdDelta) ||
              (l.params.mousewheel.thresholdTime &&
                v() - n < l.params.mousewheel.thresholdTime) ||
              (6 <= e.delta && v() - n < 60) ||
              (e.direction < 0
                ? (l.isEnd && !l.params.loop) ||
                l.animating ||
                (l.slideNext(), d("scroll", e.raw))
                : (l.isBeginning && !l.params.loop) ||
                l.animating ||
                (l.slidePrev(), d("scroll", e.raw)),
                (n = new r.Date().getTime()));
          }
          function o(r) {
            let n = r;
            if (
              l.enabled &&
              !r.target.closest("." + l.params.mousewheel.noMousewheelClass)
            ) {
              var s = l.params.mousewheel;
              l.params.cssMode && n.preventDefault();
              let e = l.el;
              var a =
                (e =
                  "container" !== l.params.mousewheel.eventsTarget
                    ? document.querySelector(l.params.mousewheel.eventsTarget)
                    : e) && e.contains(n.target);
              if (!l.mouseEntered && !a && !s.releaseOnEdges) return !0;
              n.originalEvent && (n = n.originalEvent);
              let i = 0;
              var a = l.rtlTranslate ? -1 : 1,
                o = ((e) => {
                  let t = 0,
                    i = 0,
                    r = 0,
                    n = 0;
                  return (
                    "detail" in e && (i = e.detail),
                    "wheelDelta" in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                    e.axis === e.HORIZONTAL_AXIS &&
                    ((t = i), (i = 0)),
                    (r = 10 * t),
                    (n = 10 * i),
                    "deltaY" in e && (n = e.deltaY),
                    "deltaX" in e && (r = e.deltaX),
                    e.shiftKey && !r && ((r = n), (n = 0)),
                    (r || n) &&
                    e.deltaMode &&
                    (1 === e.deltaMode
                      ? ((r *= 40), (n *= 40))
                      : ((r *= 800), (n *= 800))),
                    r && !t && (t = r < 1 ? -1 : 1),
                    n && !i && (i = n < 1 ? -1 : 1),
                    { spinX: t, spinY: i, pixelX: r, pixelY: n }
                  );
                })(n);
              if (s.forceToAxis)
                if (l.isHorizontal()) {
                  if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                  i = -o.pixelX * a;
                } else {
                  if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                  i = -o.pixelY;
                }
              else
                i =
                  Math.abs(o.pixelX) > Math.abs(o.pixelY)
                    ? -o.pixelX * a
                    : -o.pixelY;
              if (0 === i) return !0;
              s.invert && (i = -i);
              let t = l.getTranslate() + i * s.sensitivity;
              if (
                ((t = t >= l.minTranslate() ? l.minTranslate() : t) <=
                  l.maxTranslate() && (t = l.maxTranslate()),
                  (!!l.params.loop ||
                    !(t === l.minTranslate() || t === l.maxTranslate())) &&
                  l.params.nested &&
                  n.stopPropagation(),
                  l.params.freeMode && l.params.freeMode.enabled)
              ) {
                let t = {
                  time: v(),
                  delta: Math.abs(i),
                  direction: Math.sign(i),
                };
                a =
                  u &&
                  t.time < u.time + 500 &&
                  t.delta <= u.delta &&
                  t.direction === u.direction;
                if (!a) {
                  u = void 0;
                  let e = l.getTranslate() + i * s.sensitivity;
                  ((o = l.isBeginning), (s = l.isEnd));
                  if (
                    ((e = e >= l.minTranslate() ? l.minTranslate() : e) <=
                      l.maxTranslate() && (e = l.maxTranslate()),
                      l.setTransition(0),
                      l.setTranslate(e),
                      l.updateProgress(),
                      l.updateActiveIndex(),
                      l.updateSlidesClasses(),
                      ((!o && l.isBeginning) || (!s && l.isEnd)) &&
                      l.updateSlidesClasses(),
                      l.params.loop &&
                      l.loopFix({
                        direction: t.direction < 0 ? "next" : "prev",
                        byMousewheel: !0,
                      }),
                      l.params.freeMode.sticky)
                  ) {
                    (clearTimeout(c),
                      (c = void 0),
                      15 <= p.length && p.shift());
                    ((o = p.length ? p[p.length - 1] : void 0), (s = p[0]));
                    if (
                      (p.push(t),
                        o && (t.delta > o.delta || t.direction !== o.direction))
                    )
                      p.splice(0);
                    else if (
                      15 <= p.length &&
                      t.time - s.time < 500 &&
                      1 <= s.delta - t.delta &&
                      t.delta <= 6
                    ) {
                      let e = 0 < i ? 0.8 : 0.2;
                      ((u = t),
                        p.splice(0),
                        (c = T(() => {
                          l.slideToClosest(l.params.speed, !0, void 0, e);
                        }, 0)));
                    }
                    c =
                      c ||
                      T(() => {
                        ((u = t),
                          p.splice(0),
                          l.slideToClosest(l.params.speed, !0, void 0, 0.5));
                      }, 500);
                  }
                  if (
                    (a || d("scroll", n),
                      l.params.autoplay &&
                      l.params.autoplayDisableOnInteraction &&
                      l.autoplay.stop(),
                      e === l.minTranslate() || e === l.maxTranslate())
                  )
                    return !0;
                }
              } else {
                ((o = {
                  time: v(),
                  delta: Math.abs(i),
                  direction: Math.sign(i),
                  raw: r,
                }),
                  (s =
                    (2 <= p.length && p.shift(),
                      p.length ? p[p.length - 1] : void 0)));
                if (
                  (p.push(o),
                    (!s ||
                      o.direction !== s.direction ||
                      o.delta > s.delta ||
                      o.time > s.time + 150) &&
                    f(o),
                    ((e) => {
                      var t = l.params.mousewheel;
                      if (e.direction < 0) {
                        if (l.isEnd && !l.params.loop && t.releaseOnEdges)
                          return 1;
                      } else if (
                        l.isBeginning &&
                        !l.params.loop &&
                        t.releaseOnEdges
                      )
                        return 1;
                    })(o))
                )
                  return !0;
              }
              return (
                n.preventDefault ? n.preventDefault() : (n.returnValue = !1),
                !1
              );
            }
          }
          function h(e) {
            let t = l.el;
            ((t =
              "container" !== l.params.mousewheel.eventsTarget
                ? document.querySelector(l.params.mousewheel.eventsTarget)
                : t)[e]("mouseenter", s),
              t[e]("mouseleave", a),
              t[e]("wheel", o));
          }
          function m() {
            if (l.params.cssMode) l.wrapperEl.removeEventListener("wheel", o);
            else {
              if (l.mousewheel.enabled) return !1;
              (h("addEventListener"), (l.mousewheel.enabled = !0));
            }
            return !0;
          }
          function g() {
            if (l.params.cssMode) l.wrapperEl.addEventListener(event, o);
            else {
              if (!l.mousewheel.enabled) return !1;
              (h("removeEventListener"), (l.mousewheel.enabled = !1));
            }
            return !0;
          }
          (i("init", () => {
            (!l.params.mousewheel.enabled && l.params.cssMode && g(),
              l.params.mousewheel.enabled && m());
          }),
            i("destroy", () => {
              (l.params.cssMode && m(), l.mousewheel.enabled && g());
            }),
            Object.assign(l.mousewheel, { enable: m, disable: g }));
        },
        function (e) {
          let { swiper: n, extendParams: t, on: i, emit: s } = e,
            a =
              (t({
                navigation: {
                  nextEl: null,
                  prevEl: null,
                  hideOnClick: !1,
                  disabledClass: "swiper-button-disabled",
                  hiddenClass: "swiper-button-hidden",
                  lockClass: "swiper-button-lock",
                  navigationDisabledClass: "swiper-navigation-disabled",
                },
              }),
                (n.navigation = { nextEl: null, prevEl: null }),
                (e) => (e = Array.isArray(e) ? e : [e].filter((e) => !!e)));
          function o(e) {
            let t;
            return !(
              e &&
              "string" == typeof e &&
              n.isElement &&
              (t = n.el.shadowRoot.querySelector(e))
            ) &&
              (e &&
                ("string" == typeof e &&
                  (t = [...document.querySelectorAll(e)]),
                  n.params.uniqueNavElements) &&
                "string" == typeof e &&
                1 < t.length &&
                1 === n.el.querySelectorAll(e).length &&
                (t = n.el.querySelector(e)),
                e) &&
              !t
              ? e
              : t;
          }
          function r(e, t) {
            let i = n.params.navigation;
            (e = a(e)).forEach((e) => {
              e &&
                (e.classList[t ? "add" : "remove"](
                  ...i.disabledClass.split(" "),
                ),
                  "BUTTON" === e.tagName && (e.disabled = t),
                  n.params.watchOverflow) &&
                n.enabled &&
                e.classList[n.isLocked ? "add" : "remove"](i.lockClass);
            });
          }
          function l() {
            var { nextEl: e, prevEl: t } = n.navigation;
            n.params.loop
              ? (r(t, !1), r(e, !1))
              : (r(t, n.isBeginning && !n.params.rewind),
                r(e, n.isEnd && !n.params.rewind));
          }
          function d(e) {
            (e.preventDefault(),
              (n.isBeginning && !n.params.loop && !n.params.rewind) ||
              (n.slidePrev(), s("navigationPrev")));
          }
          function c(e) {
            (e.preventDefault(),
              (n.isEnd && !n.params.loop && !n.params.rewind) ||
              (n.slideNext(), s("navigationNext")));
          }
          function u() {
            let i = n.params.navigation;
            if (
              ((n.params.navigation = C(
                n,
                n.originalParams.navigation,
                n.params.navigation,
                { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
              )),
                i.nextEl || i.prevEl)
            ) {
              var e = o(i.nextEl),
                r = o(i.prevEl);
              (Object.assign(n.navigation, { nextEl: e, prevEl: r }),
                (e = a(e)),
                (r = a(r)));
              let t = (e, t) => {
                (e && e.addEventListener("click", "next" === t ? c : d),
                  !n.enabled &&
                  e &&
                  e.classList.add(...i.lockClass.split(" ")));
              };
              (e.forEach((e) => t(e, "next")), r.forEach((e) => t(e, "prev")));
            }
          }
          function p() {
            var { nextEl: e, prevEl: t } = n.navigation,
              e = a(e),
              t = a(t);
            let i = (e, t) => {
              (e.removeEventListener("click", "next" === t ? c : d),
                e.classList.remove(
                  ...n.params.navigation.disabledClass.split(" "),
                ));
            };
            (e.forEach((e) => i(e, "next")), t.forEach((e) => i(e, "prev")));
          }
          (i("init", () => {
            (!1 === n.params.navigation.enabled ? f : (u(), l))();
          }),
            i("toEdge fromEdge lock unlock", () => {
              l();
            }),
            i("destroy", () => {
              p();
            }),
            i("enable disable", () => {
              var { nextEl: e, prevEl: t } = n.navigation,
                e = a(e),
                t = a(t);
              [...e, ...t]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList[n.enabled ? "remove" : "add"](
                    n.params.navigation.lockClass,
                  ),
                );
            }),
            i("click", (e, t) => {
              var { nextEl: i, prevEl: r } = n.navigation,
                i = a(i),
                r = a(r),
                t = t.target;
              if (
                n.params.navigation.hideOnClick &&
                !r.includes(t) &&
                !i.includes(t) &&
                (!(
                  n.pagination &&
                  n.params.pagination &&
                  n.params.pagination.clickable
                ) ||
                  (n.pagination.el !== t && !n.pagination.el.contains(t)))
              ) {
                let e;
                (i.length
                  ? (e = i[0].classList.contains(
                    n.params.navigation.hiddenClass,
                  ))
                  : r.length &&
                  (e = r[0].classList.contains(
                    n.params.navigation.hiddenClass,
                  )),
                  !0 === e ? s("navigationShow") : s("navigationHide"),
                  [...i, ...r]
                    .filter((e) => !!e)
                    .forEach((e) =>
                      e.classList.toggle(n.params.navigation.hiddenClass),
                    ));
              }
            }));
          let f = () => {
            (n.el.classList.add(
              ...n.params.navigation.navigationDisabledClass.split(" "),
            ),
              p());
          };
          Object.assign(n.navigation, {
            enable: () => {
              (n.el.classList.remove(
                ...n.params.navigation.navigationDisabledClass.split(" "),
              ),
                u(),
                l());
            },
            disable: f,
            update: l,
            init: u,
            destroy: p,
          });
        },
        function (e) {
          let { swiper: p, extendParams: t, on: i, emit: f } = e;
          ((e = "swiper-pagination"),
            t({
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: e + "-bullet",
                bulletActiveClass: e + "-bullet-active",
                modifierClass: e + "-",
                currentClass: e + "-current",
                totalClass: e + "-total",
                hiddenClass: e + "-hidden",
                progressbarFillClass: e + "-progressbar-fill",
                progressbarOppositeClass: e + "-progressbar-opposite",
                clickableClass: e + "-clickable",
                lockClass: e + "-lock",
                horizontalClass: e + "-horizontal",
                verticalClass: e + "-vertical",
                paginationDisabledClass: e + "-disabled",
              },
            }),
            (p.pagination = { el: null, bullets: [] }));
          let h,
            m = 0,
            g = (e) => (e = Array.isArray(e) ? e : [e].filter((e) => !!e));
          function s() {
            return (
              !p.params.pagination.el ||
              !p.pagination.el ||
              (Array.isArray(p.pagination.el) && 0 === p.pagination.el.length)
            );
          }
          function v(e, t) {
            var i = p.params.pagination.bulletActiveClass;
            (e =
              e && e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
              (e.classList.add(i + "-" + t),
                (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`])) &&
              e.classList.add(i + `-${t}-` + t);
          }
          function r(e) {
            var t,
              i = e.target.closest(M(p.params.pagination.bulletClass));
            i &&
              (e.preventDefault(),
                (e = _(i) * p.params.slidesPerGroup),
                p.params.loop
                  ? p.realIndex !== e &&
                  ((i = p.getSlideIndexByData(e)),
                    (t = p.getSlideIndexByData(p.realIndex)),
                    i > p.slides.length - p.loopedSlides &&
                    p.loopFix({
                      direction: t < i ? "next" : "prev",
                      activeSlideIndex: i,
                      slideTo: !1,
                    }),
                    p.slideToLoop(e))
                  : p.slideTo(e));
          }
          function n() {
            var n = p.rtl;
            let o = p.params.pagination;
            if (!s()) {
              var l = p.pagination.el,
                l = g(l);
              let s, t;
              var d = (p.virtual && p.params.virtual.enabled ? p.virtual : p)
                .slides.length;
              let a = p.params.loop
                ? Math.ceil(d / p.params.slidesPerGroup)
                : p.snapGrid.length;
              if (
                (p.params.loop
                  ? ((t = p.previousRealIndex || 0),
                    (s =
                      1 < p.params.slidesPerGroup
                        ? Math.floor(p.realIndex / p.params.slidesPerGroup)
                        : p.realIndex))
                  : void 0 !== p.snapIndex
                    ? ((s = p.snapIndex), (t = p.previousSnapIndex))
                    : ((t = p.previousIndex || 0), (s = p.activeIndex || 0)),
                  "bullets" === o.type &&
                  p.pagination.bullets &&
                  0 < p.pagination.bullets.length)
              ) {
                var c = p.pagination.bullets;
                let i, r, e;
                if (
                  (o.dynamicBullets &&
                    ((h = $(c[0], p.isHorizontal() ? "width" : "height", !0)),
                      l.forEach((e) => {
                        e.style[p.isHorizontal() ? "width" : "height"] =
                          h * (o.dynamicMainBullets + 4) + "px";
                      }),
                      1 < o.dynamicMainBullets &&
                      void 0 !== t &&
                      ((m += s - (t || 0)) > o.dynamicMainBullets - 1
                        ? (m = o.dynamicMainBullets - 1)
                        : m < 0 && (m = 0)),
                      (i = Math.max(s - m, 0)),
                      (r = i + (Math.min(c.length, o.dynamicMainBullets) - 1)),
                      (e = (r + i) / 2)),
                    c.forEach((e) => {
                      var t = [
                        ...[
                          "",
                          "-next",
                          "-next-next",
                          "-prev",
                          "-prev-prev",
                          "-main",
                        ].map((e) => "" + o.bulletActiveClass + e),
                      ]
                        .map((e) =>
                          "string" == typeof e && e.includes(" ")
                            ? e.split(" ")
                            : e,
                        )
                        .flat();
                      e.classList.remove(...t);
                    }),
                    1 < l.length)
                )
                  c.forEach((e) => {
                    var t = _(e);
                    (t === s
                      ? e.classList.add(...o.bulletActiveClass.split(" "))
                      : p.isElement && e.setAttribute("part", "bullet"),
                      o.dynamicBullets &&
                      (t >= i &&
                        t <= r &&
                        e.classList.add(
                          ...(o.bulletActiveClass + "-main").split(" "),
                        ),
                        t === i && v(e, "prev"),
                        t === r) &&
                      v(e, "next"));
                  });
                else {
                  d = c[s];
                  if (
                    (d && d.classList.add(...o.bulletActiveClass.split(" ")),
                      p.isElement &&
                      c.forEach((e, t) => {
                        e.setAttribute(
                          "part",
                          t === s ? "bullet-active" : "bullet",
                        );
                      }),
                      o.dynamicBullets)
                  ) {
                    var d = c[i],
                      u = c[r];
                    for (let e = i; e <= r; e += 1)
                      c[e] &&
                        c[e].classList.add(
                          ...(o.bulletActiveClass + "-main").split(" "),
                        );
                    (v(d, "prev"), v(u, "next"));
                  }
                }
                if (o.dynamicBullets) {
                  d = Math.min(c.length, o.dynamicMainBullets + 4);
                  let t = (h * d - h) / 2 - e * h,
                    i = n ? "right" : "left";
                  c.forEach((e) => {
                    e.style[p.isHorizontal() ? i : "top"] = t + "px";
                  });
                }
              }
              l.forEach((r, e) => {
                if (
                  ("fraction" === o.type &&
                    (r.querySelectorAll(M(o.currentClass)).forEach((e) => {
                      e.textContent = o.formatFractionCurrent(s + 1);
                    }),
                      r.querySelectorAll(M(o.totalClass)).forEach((e) => {
                        e.textContent = o.formatFractionTotal(a);
                      })),
                    "progressbar" === o.type)
                ) {
                  let e;
                  e = o.progressbarOpposite
                    ? p.isHorizontal()
                      ? "vertical"
                      : "horizontal"
                    : p.isHorizontal()
                      ? "horizontal"
                      : "vertical";
                  var n = (s + 1) / a;
                  let t = 1,
                    i = 1;
                  ("horizontal" === e ? (t = n) : (i = n),
                    r
                      .querySelectorAll(M(o.progressbarFillClass))
                      .forEach((e) => {
                        ((e.style.transform = `translate3d(0,0,0) scaleX(${t}) scaleY(${i})`),
                          (e.style.transitionDuration = p.params.speed + "ms"));
                      }));
                }
                ("custom" === o.type && o.renderCustom
                  ? ((r.innerHTML = o.renderCustom(p, s + 1, a)),
                    0 === e && f("paginationRender", r))
                  : (0 === e && f("paginationRender", r),
                    f("paginationUpdate", r)),
                  p.params.watchOverflow &&
                  p.enabled &&
                  r.classList[p.isLocked ? "add" : "remove"](o.lockClass));
              });
            }
          }
          function a() {
            let r = p.params.pagination;
            if (!s()) {
              var e = (p.virtual && p.params.virtual.enabled ? p.virtual : p)
                .slides.length,
                t = p.pagination.el,
                t = g(t);
              let i = "";
              if ("bullets" === r.type) {
                let t = p.params.loop
                  ? Math.ceil(e / p.params.slidesPerGroup)
                  : p.snapGrid.length;
                p.params.freeMode &&
                  p.params.freeMode.enabled &&
                  t > e &&
                  (t = e);
                for (let e = 0; e < t; e += 1)
                  r.renderBullet
                    ? (i += r.renderBullet.call(p, e, r.bulletClass))
                    : (i += `<${r.bulletElement} ${p.isElement ? 'part="bullet"' : ""} class="${r.bulletClass}"></${r.bulletElement}>`);
              }
              ("fraction" === r.type &&
                (i = r.renderFraction
                  ? r.renderFraction.call(p, r.currentClass, r.totalClass)
                  : `<span class="${r.currentClass}"></span>` +
                  " / " +
                  `<span class="${r.totalClass}"></span>`),
                "progressbar" === r.type &&
                (i = r.renderProgressbar
                  ? r.renderProgressbar.call(p, r.progressbarFillClass)
                  : `<span class="${r.progressbarFillClass}"></span>`),
                (p.pagination.bullets = []),
                t.forEach((e) => {
                  ("custom" !== r.type && (e.innerHTML = i || ""),
                    "bullets" === r.type &&
                    p.pagination.bullets.push(
                      ...e.querySelectorAll(M(r.bulletClass)),
                    ));
                }),
                "custom" !== r.type && f("paginationRender", t[0]));
            }
          }
          function o() {
            p.params.pagination = C(
              p,
              p.originalParams.pagination,
              p.params.pagination,
              { el: "swiper-pagination" },
            );
            let t = p.params.pagination;
            if (t.el) {
              let e;
              (e =
                (e =
                  (e =
                    "string" == typeof t.el && p.isElement
                      ? p.el.shadowRoot.querySelector(t.el)
                      : e) || "string" != typeof t.el
                    ? e
                    : [...document.querySelectorAll(t.el)]) || t.el) &&
                0 !== e.length &&
                (p.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  Array.isArray(e) &&
                  1 < e.length &&
                  1 < (e = [...p.el.querySelectorAll(t.el)]).length &&
                  (e = e.filter((e) => P(e, ".swiper")[0] === p.el)[0]),
                  Array.isArray(e) && 1 === e.length && (e = e[0]),
                  Object.assign(p.pagination, { el: e }),
                  (e = g(e)).forEach((e) => {
                    ("bullets" === t.type &&
                      t.clickable &&
                      e.classList.add(t.clickableClass),
                      e.classList.add(t.modifierClass + t.type),
                      e.classList.add(
                        p.isHorizontal() ? t.horizontalClass : t.verticalClass,
                      ),
                      "bullets" === t.type &&
                      t.dynamicBullets &&
                      (e.classList.add(
                        "" + t.modifierClass + t.type + "-dynamic",
                      ),
                        (m = 0),
                        t.dynamicMainBullets < 1) &&
                      (t.dynamicMainBullets = 1),
                      "progressbar" === t.type &&
                      t.progressbarOpposite &&
                      e.classList.add(t.progressbarOppositeClass),
                      t.clickable && e.addEventListener("click", r),
                      p.enabled || e.classList.add(t.lockClass));
                  }));
            }
          }
          function l() {
            let t = p.params.pagination;
            var e;
            s() ||
              ((e = p.pagination.el) &&
                (e = g(e)).forEach((e) => {
                  (e.classList.remove(t.hiddenClass),
                    e.classList.remove(t.modifierClass + t.type),
                    e.classList.remove(
                      p.isHorizontal() ? t.horizontalClass : t.verticalClass,
                    ),
                    t.clickable && e.removeEventListener("click", r));
                }),
                p.pagination.bullets &&
                p.pagination.bullets.forEach((e) =>
                  e.classList.remove(...t.bulletActiveClass.split(" ")),
                ));
          }
          (i("changeDirection", () => {
            if (p.pagination && p.pagination.el) {
              let t = p.params.pagination;
              var e = p.pagination.el;
              (e = g(e)).forEach((e) => {
                (e.classList.remove(t.horizontalClass, t.verticalClass),
                  e.classList.add(
                    p.isHorizontal() ? t.horizontalClass : t.verticalClass,
                  ));
              });
            }
          }),
            i("init", () => {
              (!1 === p.params.pagination.enabled ? d : (o(), a(), n))();
            }),
            i("activeIndexChange", () => {
              void 0 === p.snapIndex && n();
            }),
            i("snapIndexChange", () => {
              n();
            }),
            i("snapGridLengthChange", () => {
              (a(), n());
            }),
            i("destroy", () => {
              l();
            }),
            i("enable disable", () => {
              var e = p.pagination.el;
              e &&
                (e = g(e)).forEach((e) =>
                  e.classList[p.enabled ? "remove" : "add"](
                    p.params.pagination.lockClass,
                  ),
                );
            }),
            i("lock unlock", () => {
              n();
            }),
            i("click", (e, t) => {
              t = t.target;
              let i = p.pagination.el;
              (Array.isArray(i) || (i = [i].filter((e) => !!e)),
                p.params.pagination.el &&
                p.params.pagination.hideOnClick &&
                i &&
                0 < i.length &&
                !t.classList.contains(p.params.pagination.bulletClass) &&
                ((p.navigation &&
                  ((p.navigation.nextEl && t === p.navigation.nextEl) ||
                    (p.navigation.prevEl && t === p.navigation.prevEl))) ||
                  (!0 ===
                    i[0].classList.contains(p.params.pagination.hiddenClass)
                    ? f("paginationShow")
                    : f("paginationHide"),
                    i.forEach((e) =>
                      e.classList.toggle(p.params.pagination.hiddenClass),
                    ))));
            }));
          let d = () => {
            p.el.classList.add(p.params.pagination.paginationDisabledClass);
            var e = p.pagination.el;
            (e &&
              (e = g(e)).forEach((e) =>
                e.classList.add(p.params.pagination.paginationDisabledClass),
              ),
              l());
          };
          Object.assign(p.pagination, {
            enable: () => {
              p.el.classList.remove(
                p.params.pagination.paginationDisabledClass,
              );
              var e = p.pagination.el;
              (e &&
                (e = g(e)).forEach((e) =>
                  e.classList.remove(
                    p.params.pagination.paginationDisabledClass,
                  ),
                ),
                o(),
                a(),
                n());
            },
            disable: d,
            render: a,
            update: n,
            init: o,
            destroy: l,
          });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: i, emit: s } = e,
            a = L(),
            l = !1,
            d = null,
            c = null,
            u,
            p,
            f,
            r;
          function n() {
            if (o.params.scrollbar.el && o.scrollbar.el) {
              var { scrollbar: n, rtlTranslate: s } = o;
              let { dragEl: e, el: t } = n;
              var n = o.params.scrollbar,
                a = o.params.loop ? o.progressLoop : o.progress;
              let i = p,
                r = (f - p) * a;
              (s
                ? 0 < (r = -r)
                  ? ((i = p - r), (r = 0))
                  : -r + p > f && (i = f + r)
                : r < 0
                  ? ((i = p + r), (r = 0))
                  : r + p > f && (i = f - r),
                o.isHorizontal()
                  ? ((e.style.transform = `translate3d(${r}px, 0, 0)`),
                    (e.style.width = i + "px"))
                  : ((e.style.transform = `translate3d(0px, ${r}px, 0)`),
                    (e.style.height = i + "px")),
                n.hide &&
                (clearTimeout(d),
                  (t.style.opacity = 1),
                  (d = setTimeout(() => {
                    ((t.style.opacity = 0),
                      (t.style.transitionDuration = "400ms"));
                  }, 1e3))));
            }
          }
          function h() {
            var e, t, i;
            o.params.scrollbar.el &&
              o.scrollbar.el &&
              ((e = o.scrollbar),
                ({ dragEl: t, el: i } = e),
                (t.style.width = ""),
                (t.style.height = ""),
                (f = o.isHorizontal() ? i.offsetWidth : i.offsetHeight),
                (r =
                  o.size /
                  (o.virtualSize +
                    o.params.slidesOffsetBefore -
                    (o.params.centeredSlides ? o.snapGrid[0] : 0))),
                (p =
                  "auto" === o.params.scrollbar.dragSize
                    ? f * r
                    : parseInt(o.params.scrollbar.dragSize, 10)),
                o.isHorizontal()
                  ? (t.style.width = p + "px")
                  : (t.style.height = p + "px"),
                1 <= r ? (i.style.display = "none") : (i.style.display = ""),
                o.params.scrollbar.hide && (i.style.opacity = 0),
                o.params.watchOverflow) &&
              o.enabled &&
              e.el.classList[o.isLocked ? "add" : "remove"](
                o.params.scrollbar.lockClass,
              );
          }
          function m(e) {
            return o.isHorizontal() ? e.clientX : e.clientY;
          }
          function g(e) {
            var { scrollbar: t, rtlTranslate: i } = o,
              t = t.el;
            let r;
            ((r =
              (m(e) -
                O(t)[o.isHorizontal() ? "left" : "top"] -
                (null !== u ? u : p / 2)) /
              (f - p)),
              (r = Math.max(Math.min(r, 1), 0)),
              i && (r = 1 - r));
            e = o.minTranslate() + (o.maxTranslate() - o.minTranslate()) * r;
            (o.updateProgress(e),
              o.setTranslate(e),
              o.updateActiveIndex(),
              o.updateSlidesClasses());
          }
          function v(e) {
            var t = o.params.scrollbar,
              { scrollbar: i, wrapperEl: r } = o,
              { el: i, dragEl: n } = i;
            ((l = !0),
              (u =
                e.target === n
                  ? m(e) -
                  e.target.getBoundingClientRect()[
                  o.isHorizontal() ? "left" : "top"
                  ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              (r.style.transitionDuration = "100ms"),
              (n.style.transitionDuration = "100ms"),
              g(e),
              clearTimeout(c),
              (i.style.transitionDuration = "0ms"),
              t.hide && (i.style.opacity = 1),
              o.params.cssMode &&
              (o.wrapperEl.style["scroll-snap-type"] = "none"),
              s("scrollbarDragStart", e));
          }
          function b(e) {
            var { scrollbar: t, wrapperEl: i } = o,
              { el: t, dragEl: r } = t;
            l &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                g(e),
                (i.style.transitionDuration = "0ms"),
                (t.style.transitionDuration = "0ms"),
                (r.style.transitionDuration = "0ms"),
                s("scrollbarDragMove", e));
          }
          function y(e) {
            var t = o.params.scrollbar,
              { scrollbar: i, wrapperEl: r } = o;
            let n = i.el;
            l &&
              ((l = !1),
                o.params.cssMode &&
                ((o.wrapperEl.style["scroll-snap-type"] = ""),
                  (r.style.transitionDuration = "")),
                t.hide &&
                (clearTimeout(c),
                  (c = T(() => {
                    ((n.style.opacity = 0),
                      (n.style.transitionDuration = "400ms"));
                  }, 1e3))),
                s("scrollbarDragEnd", e),
                t.snapOnRelease) &&
              o.slideToClosest();
          }
          function w(e) {
            var t,
              { scrollbar: i, params: r } = o,
              i = i.el;
            i &&
              ((t = !!r.passiveListeners && { passive: !1, capture: !1 }),
                (r = !!r.passiveListeners && { passive: !0, capture: !1 }),
                (i = i)) &&
              (i[(i = "on" === e ? "addEventListener" : "removeEventListener")](
                "pointerdown",
                v,
                t,
              ),
                a[i]("pointermove", b, t),
                a[i]("pointerup", y, r));
          }
          function x() {
            var { scrollbar: i, el: r } = o,
              n =
                ((o.params.scrollbar = C(
                  o,
                  o.originalParams.scrollbar,
                  o.params.scrollbar,
                  { el: "swiper-scrollbar" },
                )),
                  o.params.scrollbar);
            if (n.el) {
              let e;
              ((e =
                (e =
                  "string" == typeof n.el && o.isElement
                    ? o.el.shadowRoot.querySelector(n.el)
                    : e) || "string" != typeof n.el
                  ? e || n.el
                  : a.querySelectorAll(n.el)),
                (e =
                  0 <
                    (e =
                      o.params.uniqueNavElements &&
                        "string" == typeof n.el &&
                        1 < e.length &&
                        1 === r.querySelectorAll(n.el).length
                        ? r.querySelector(n.el)
                        : e).length
                    ? e[0]
                    : e).classList.add(
                      o.isHorizontal() ? n.horizontalClass : n.verticalClass,
                    ));
              let t;
              (!e ||
                (t = e.querySelector("." + o.params.scrollbar.dragClass)) ||
                ((t = S("div", o.params.scrollbar.dragClass)), e.append(t)),
                Object.assign(i, { el: e, dragEl: t }),
                n.draggable &&
                o.params.scrollbar.el &&
                o.scrollbar.el &&
                w("on"),
                e &&
                e.classList[o.enabled ? "remove" : "add"](
                  o.params.scrollbar.lockClass,
                ));
            }
          }
          function E() {
            var e = o.params.scrollbar,
              t = o.scrollbar.el;
            (t &&
              t.classList.remove(
                o.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ),
              o.params.scrollbar.el && o.scrollbar.el && w("off"));
          }
          (t({
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
              scrollbarDisabledClass: "swiper-scrollbar-disabled",
              horizontalClass: "swiper-scrollbar-horizontal",
              verticalClass: "swiper-scrollbar-vertical",
            },
          }),
            (o.scrollbar = { el: null, dragEl: null }),
            i("init", () => {
              (!1 === o.params.scrollbar.enabled ? _ : (x(), h(), n))();
            }),
            i("update resize observerUpdate lock unlock", () => {
              h();
            }),
            i("setTranslate", () => {
              n();
            }),
            i("setTransition", (e, t) => {
              ((t = t),
                o.params.scrollbar.el &&
                o.scrollbar.el &&
                (o.scrollbar.dragEl.style.transitionDuration = t + "ms"));
            }),
            i("enable disable", () => {
              var e = o.scrollbar.el;
              e &&
                e.classList[o.enabled ? "remove" : "add"](
                  o.params.scrollbar.lockClass,
                );
            }),
            i("destroy", () => {
              E();
            }));
          let _ = () => {
            (o.el.classList.add(o.params.scrollbar.scrollbarDisabledClass),
              o.scrollbar.el &&
              o.scrollbar.el.classList.add(
                o.params.scrollbar.scrollbarDisabledClass,
              ),
              E());
          };
          Object.assign(o.scrollbar, {
            enable: () => {
              (o.el.classList.remove(o.params.scrollbar.scrollbarDisabledClass),
                o.scrollbar.el &&
                o.scrollbar.el.classList.remove(
                  o.params.scrollbar.scrollbarDisabledClass,
                ),
                x(),
                h(),
                n());
            },
            disable: _,
            updateSize: h,
            setTranslate: n,
            init: x,
            destroy: E,
          });
        },
        function (e) {
          let { swiper: c, extendParams: t, on: i } = e,
            s =
              (t({ parallax: { enabled: !1 } }),
                (e, t) => {
                  var i = c.rtl,
                    i = i ? -1 : 1,
                    r = e.getAttribute("data-swiper-parallax") || "0";
                  let n = e.getAttribute("data-swiper-parallax-x"),
                    s = e.getAttribute("data-swiper-parallax-y");
                  var a = e.getAttribute("data-swiper-parallax-scale"),
                    o = e.getAttribute("data-swiper-parallax-opacity"),
                    l = e.getAttribute("data-swiper-parallax-rotate");
                  (n || s
                    ? ((n = n || "0"), (s = s || "0"))
                    : c.isHorizontal()
                      ? ((n = r), (s = "0"))
                      : ((s = r), (n = "0")),
                    (n =
                      0 <= n.indexOf("%")
                        ? parseInt(n, 10) * t * i + "%"
                        : n * t * i + "px"),
                    (s =
                      0 <= s.indexOf("%")
                        ? parseInt(s, 10) * t + "%"
                        : s * t + "px"),
                    null != o &&
                    ((r = o - (o - 1) * (1 - Math.abs(t))),
                      (e.style.opacity = r)));
                  let d = `translate3d(${n}, ${s}, 0px)`;
                  (null != a &&
                    ((i = a - (a - 1) * (1 - Math.abs(t))),
                      (d += ` scale(${i})`)),
                    l && null != l && (d += ` rotate(${l * t * -1}deg)`),
                    (e.style.transform = d));
                }),
            r = () => {
              let { el: e, slides: t, progress: r, snapGrid: n } = c;
              (F(
                e,
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
              ).forEach((e) => {
                s(e, r);
              }),
                t.forEach((e, t) => {
                  let i = e.progress;
                  (1 < c.params.slidesPerGroup &&
                    "auto" !== c.params.slidesPerView &&
                    (i += Math.ceil(t / 2) - r * (n.length - 1)),
                    (i = Math.min(Math.max(i, -1), 1)),
                    e
                      .querySelectorAll(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]",
                      )
                      .forEach((e) => {
                        s(e, i);
                      }));
                }));
            };
          (i("beforeInit", () => {
            c.params.parallax.enabled &&
              ((c.params.watchSlidesProgress = !0),
                (c.originalParams.watchSlidesProgress = !0));
          }),
            i("init", () => {
              c.params.parallax.enabled && r();
            }),
            i("setTranslate", () => {
              c.params.parallax.enabled && r();
            }),
            i("setTransition", (e, t) => {
              var i;
              c.params.parallax.enabled &&
                (void 0 === (i = t) && (i = c.params.speed),
                  c.el
                    .querySelectorAll(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                    )
                    .forEach((e) => {
                      let t =
                        parseInt(
                          e.getAttribute("data-swiper-parallax-duration"),
                          10,
                        ) || i;
                      (0 === i && (t = 0),
                        (e.style.transitionDuration = t + "ms"));
                    }));
            }));
        },
        function (e) {
          let { swiper: p, extendParams: t, on: i, emit: r } = e,
            f = A(),
            h =
              (t({
                zoom: {
                  enabled: !1,
                  maxRatio: 3,
                  minRatio: 1,
                  toggle: !0,
                  containerClass: "swiper-zoom-container",
                  zoomedSlideClass: "swiper-slide-zoomed",
                },
              }),
                (p.zoom = { enabled: !1 }),
                1),
            s = !1,
            n,
            a,
            o = [],
            m = {
              originX: 0,
              originY: 0,
              slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              imageEl: void 0,
              imageWrapEl: void 0,
              maxRatio: 3,
            },
            g = {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            l = {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            },
            d = 1;
          function c() {
            var e, t, i, r;
            return o.length < 2
              ? 1
              : ((e = o[0].pageX),
                (t = o[0].pageY),
                (i = o[1].pageX),
                (r = o[1].pageY),
                Math.sqrt((i - e) ** 2 + (r - t) ** 2));
          }
          function u(t) {
            var e = p.isElement ? "swiper-slide" : "." + p.params.slideClass;
            return (
              t.target.matches(e) ||
              0 < p.slides.filter((e) => e.contains(t.target)).length
            );
          }
          function v(t) {
            if (("mouse" === t.pointerType && o.splice(0, o.length), u(t))) {
              var i = p.params.zoom;
              if (((n = !1), (a = !1), o.push(t), !(o.length < 2))) {
                if (((n = !0), (m.scaleStart = c()), !m.slideEl)) {
                  ((m.slideEl = t.target.closest(
                    `.${p.params.slideClass}, swiper-slide`,
                  )),
                    m.slideEl || (m.slideEl = p.slides[p.activeIndex]));
                  let e = m.slideEl.querySelector("." + i.containerClass);
                  if (
                    ((e =
                      e &&
                      e.querySelectorAll(
                        "picture, img, svg, canvas, .swiper-zoom-target",
                      )[0]),
                      (m.imageEl = e)
                        ? (m.imageWrapEl = P(
                          m.imageEl,
                          "." + i.containerClass,
                        )[0])
                        : (m.imageWrapEl = void 0),
                      !m.imageWrapEl)
                  )
                    return void (m.imageEl = void 0);
                  m.maxRatio =
                    m.imageWrapEl.getAttribute("data-swiper-zoom") ||
                    i.maxRatio;
                }
                (m.imageEl &&
                  (([i, t] =
                    o.length < 2
                      ? { x: null, y: null }
                      : ((t = m.imageEl.getBoundingClientRect()),
                        [
                          (o[0].pageX + (o[1].pageX - o[0].pageX) / 2 - t.x) /
                          h,
                          (o[0].pageY + (o[1].pageY - o[0].pageY) / 2 - t.y) /
                          h,
                        ])),
                    (m.originX = i),
                    (m.originY = t),
                    (m.imageEl.style.transitionDuration = "0ms")),
                  (s = !0));
              }
            }
          }
          function b(t) {
            var e, i, r;
            u(t) &&
              ((e = p.params.zoom),
                (i = p.zoom),
                0 <= (r = o.findIndex((e) => e.pointerId === t.pointerId)) &&
                (o[r] = t),
                o.length < 2 ||
                ((a = !0),
                  (m.scaleMove = c()),
                  m.imageEl &&
                  ((i.scale = (m.scaleMove / m.scaleStart) * h),
                    i.scale > m.maxRatio &&
                    (i.scale =
                      m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
                    i.scale < e.minRatio &&
                    (i.scale =
                      e.minRatio + 1 - (e.minRatio - i.scale + 1) ** 0.5),
                    (m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`))));
          }
          function y(t) {
            var e, i, r;
            !u(t) ||
              ("mouse" === t.pointerType && "pointerout" === t.type) ||
              ((e = p.params.zoom),
                (i = p.zoom),
                0 <= (r = o.findIndex((e) => e.pointerId === t.pointerId)) &&
                o.splice(r, 1),
                n &&
                a &&
                ((n = !1), (a = !1), m.imageEl) &&
                ((i.scale = Math.max(
                  Math.min(i.scale, m.maxRatio),
                  e.minRatio,
                )),
                  (m.imageEl.style.transitionDuration = p.params.speed + "ms"),
                  (m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
                  (h = i.scale),
                  (s = !1),
                  1 < i.scale && m.slideEl
                    ? m.slideEl.classList.add("" + e.zoomedSlideClass)
                    : i.scale <= 1 &&
                    m.slideEl &&
                    m.slideEl.classList.remove("" + e.zoomedSlideClass),
                  1 === i.scale) &&
                ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0)));
          }
          function w(e) {
            if (
              u(e) &&
              ((t = e),
                (i = "." + p.params.zoom.containerClass),
                t.target.matches(i) ||
                0 <
                [...p.el.querySelectorAll(i)].filter((e) =>
                  e.contains(t.target),
                ).length)
            ) {
              var t,
                i = p.zoom;
              if (m.imageEl && g.isTouched && m.slideEl) {
                g.isMoved ||
                  ((g.width = m.imageEl.offsetWidth),
                    (g.height = m.imageEl.offsetHeight),
                    (g.startX = k(m.imageWrapEl, "x") || 0),
                    (g.startY = k(m.imageWrapEl, "y") || 0),
                    (m.slideWidth = m.slideEl.offsetWidth),
                    (m.slideHeight = m.slideEl.offsetHeight),
                    (m.imageWrapEl.style.transitionDuration = "0ms"));
                var r = g.width * i.scale,
                  n = g.height * i.scale;
                if (!(r < m.slideWidth && n < m.slideHeight)) {
                  if (
                    ((g.minX = Math.min(m.slideWidth / 2 - r / 2, 0)),
                      (g.maxX = -g.minX),
                      (g.minY = Math.min(m.slideHeight / 2 - n / 2, 0)),
                      (g.maxY = -g.minY),
                      (g.touchesCurrent.x = (0 < o.length ? o[0] : e).pageX),
                      (g.touchesCurrent.y = (0 < o.length ? o[0] : e).pageY),
                      5 <
                      Math.max(
                        Math.abs(g.touchesCurrent.x - g.touchesStart.x),
                        Math.abs(g.touchesCurrent.y - g.touchesStart.y),
                      ) && (p.allowClick = !1),
                      !g.isMoved && !s)
                  ) {
                    if (
                      p.isHorizontal() &&
                      ((Math.floor(g.minX) === Math.floor(g.startX) &&
                        g.touchesCurrent.x < g.touchesStart.x) ||
                        (Math.floor(g.maxX) === Math.floor(g.startX) &&
                          g.touchesCurrent.x > g.touchesStart.x))
                    )
                      return void (g.isTouched = !1);
                    if (
                      !p.isHorizontal() &&
                      ((Math.floor(g.minY) === Math.floor(g.startY) &&
                        g.touchesCurrent.y < g.touchesStart.y) ||
                        (Math.floor(g.maxY) === Math.floor(g.startY) &&
                          g.touchesCurrent.y > g.touchesStart.y))
                    )
                      return void (g.isTouched = !1);
                  }
                  (e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    (g.isMoved = !0));
                  var r = (i.scale - h) / (m.maxRatio - p.params.zoom.minRatio),
                    { originX: n, originY: e } = m;
                  ((g.currentX =
                    g.touchesCurrent.x -
                    g.touchesStart.x +
                    g.startX +
                    r * (g.width - 2 * n)),
                    (g.currentY =
                      g.touchesCurrent.y -
                      g.touchesStart.y +
                      g.startY +
                      r * (g.height - 2 * e)),
                    g.currentX < g.minX &&
                    (g.currentX =
                      g.minX + 1 - (g.minX - g.currentX + 1) ** 0.8),
                    g.currentX > g.maxX &&
                    (g.currentX =
                      g.maxX - 1 + (g.currentX - g.maxX + 1) ** 0.8),
                    g.currentY < g.minY &&
                    (g.currentY =
                      g.minY + 1 - (g.minY - g.currentY + 1) ** 0.8),
                    g.currentY > g.maxY &&
                    (g.currentY =
                      g.maxY - 1 + (g.currentY - g.maxY + 1) ** 0.8),
                    l.prevPositionX || (l.prevPositionX = g.touchesCurrent.x),
                    l.prevPositionY || (l.prevPositionY = g.touchesCurrent.y),
                    l.prevTime || (l.prevTime = Date.now()),
                    (l.x =
                      (g.touchesCurrent.x - l.prevPositionX) /
                      (Date.now() - l.prevTime) /
                      2),
                    (l.y =
                      (g.touchesCurrent.y - l.prevPositionY) /
                      (Date.now() - l.prevTime) /
                      2),
                    Math.abs(g.touchesCurrent.x - l.prevPositionX) < 2 &&
                    (l.x = 0),
                    Math.abs(g.touchesCurrent.y - l.prevPositionY) < 2 &&
                    (l.y = 0),
                    (l.prevPositionX = g.touchesCurrent.x),
                    (l.prevPositionY = g.touchesCurrent.y),
                    (l.prevTime = Date.now()),
                    (m.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`));
                }
              }
            }
          }
          function x() {
            var e = p.zoom;
            m.slideEl &&
              p.activeIndex !== p.slides.indexOf(m.slideEl) &&
              (m.imageEl &&
                (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                m.imageWrapEl &&
                (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                m.slideEl.classList.remove("" + p.params.zoom.zoomedSlideClass),
                (e.scale = 1),
                (h = 1),
                (m.slideEl = void 0),
                (m.imageEl = void 0),
                (m.imageWrapEl = void 0),
                (m.originX = 0),
                (m.originY = 0));
          }
          function E(n) {
            var s,
              a,
              o,
              l,
              d = p.zoom,
              c = p.params.zoom;
            if (!m.slideEl) {
              (n &&
                n.target &&
                (m.slideEl = n.target.closest(
                  `.${p.params.slideClass}, swiper-slide`,
                )),
                m.slideEl ||
                (p.params.virtual && p.params.virtual.enabled && p.virtual
                  ? (m.slideEl = F(
                    p.slidesEl,
                    "." + p.params.slideActiveClass,
                  )[0])
                  : (m.slideEl = p.slides[p.activeIndex])));
              let e = m.slideEl.querySelector("." + c.containerClass);
              ((e =
                e &&
                e.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target",
                )[0]),
                (m.imageEl = e)
                  ? (m.imageWrapEl = P(m.imageEl, "." + c.containerClass)[0])
                  : (m.imageWrapEl = void 0));
            }
            if (m.imageEl && m.imageWrapEl) {
              (p.params.cssMode &&
                ((p.wrapperEl.style.overflow = "hidden"),
                  (p.wrapperEl.style.touchAction = "none")),
                m.slideEl.classList.add("" + c.zoomedSlideClass));
              let e, t;
              let i, r;
              t =
                void 0 === g.touchesStart.x && n
                  ? ((e = n.pageX), n.pageY)
                  : ((e = g.touchesStart.x), g.touchesStart.y);
              var u = "number" == typeof n ? n : null;
              (1 === h && u && ((e = void 0), (t = void 0)),
                (d.scale =
                  u ||
                  m.imageWrapEl.getAttribute("data-swiper-zoom") ||
                  c.maxRatio),
                (h =
                  u ||
                  m.imageWrapEl.getAttribute("data-swiper-zoom") ||
                  c.maxRatio),
                !n || (1 === h && u)
                  ? ((i = 0), (r = 0))
                  : ((c = m.slideEl.offsetWidth),
                    (n = m.slideEl.offsetHeight),
                    (s = O(m.slideEl).left + f.scrollX),
                    (a = O(m.slideEl).top + f.scrollY),
                    (s = s + c / 2 - e),
                    (a = a + n / 2 - t),
                    (o = m.imageEl.offsetWidth),
                    (l = m.imageEl.offsetHeight),
                    (o = o * d.scale),
                    (l = l * d.scale),
                    (o = -(c = Math.min(c / 2 - o / 2, 0))),
                    (l = -(n = Math.min(n / 2 - l / 2, 0))),
                    (i = s * d.scale),
                    (r = a * d.scale),
                    (i = i < c ? c : i) > o && (i = o),
                    (r = r < n ? n : r) > l && (r = l)),
                u && 1 === d.scale && ((m.originX = 0), (m.originY = 0)),
                (m.imageWrapEl.style.transitionDuration = "300ms"),
                (m.imageWrapEl.style.transform = `translate3d(${i}px, ${r}px,0)`),
                (m.imageEl.style.transitionDuration = "300ms"),
                (m.imageEl.style.transform = `translate3d(0,0,0) scale(${d.scale})`));
            }
          }
          function _() {
            var e = p.zoom,
              t = p.params.zoom;
            if (!m.slideEl) {
              p.params.virtual && p.params.virtual.enabled && p.virtual
                ? (m.slideEl = F(
                  p.slidesEl,
                  "." + p.params.slideActiveClass,
                )[0])
                : (m.slideEl = p.slides[p.activeIndex]);
              let e = m.slideEl.querySelector("." + t.containerClass);
              ((e =
                e &&
                e.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target",
                )[0]),
                (m.imageEl = e)
                  ? (m.imageWrapEl = P(m.imageEl, "." + t.containerClass)[0])
                  : (m.imageWrapEl = void 0));
            }
            m.imageEl &&
              m.imageWrapEl &&
              (p.params.cssMode &&
                ((p.wrapperEl.style.overflow = ""),
                  (p.wrapperEl.style.touchAction = "")),
                (e.scale = 1),
                (h = 1),
                (m.imageWrapEl.style.transitionDuration = "300ms"),
                (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                (m.imageEl.style.transitionDuration = "300ms"),
                (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                m.slideEl.classList.remove("" + t.zoomedSlideClass),
                (m.slideEl = void 0),
                (m.originX = 0),
                (m.originY = 0));
          }
          function T(e) {
            var t = p.zoom;
            t.scale && 1 !== t.scale ? _() : E(e);
          }
          function S() {
            return {
              passiveListener: !!p.params.passiveListeners && {
                passive: !0,
                capture: !1,
              },
              activeListenerWithCapture: !p.params.passiveListeners || {
                passive: !1,
                capture: !0,
              },
            };
          }
          function C() {
            var i = p.zoom;
            if (!i.enabled) {
              i.enabled = !0;
              let { passiveListener: t, activeListenerWithCapture: e } = S();
              (p.wrapperEl.addEventListener("pointerdown", v, t),
                p.wrapperEl.addEventListener("pointermove", b, e),
                ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
                  p.wrapperEl.addEventListener(e, y, t);
                }),
                p.wrapperEl.addEventListener("pointermove", w, e));
            }
          }
          function M() {
            var i = p.zoom;
            if (i.enabled) {
              i.enabled = !1;
              let { passiveListener: t, activeListenerWithCapture: e } = S();
              (p.wrapperEl.removeEventListener("pointerdown", v, t),
                p.wrapperEl.removeEventListener("pointermove", b, e),
                ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
                  p.wrapperEl.removeEventListener(e, y, t);
                }),
                p.wrapperEl.removeEventListener("pointermove", w, e));
            }
          }
          (Object.defineProperty(p.zoom, "scale", {
            get() {
              return d;
            },
            set(e) {
              var t, i;
              (d !== e &&
                ((t = m.imageEl), (i = m.slideEl), r("zoomChange", e, t, i)),
                (d = e));
            },
          }),
            i("init", () => {
              p.params.zoom.enabled && C();
            }),
            i("destroy", () => {
              M();
            }),
            i("touchStart", (e, t) => {
              var i;
              p.zoom.enabled &&
                ((t = t), (i = p.device), m.imageEl) &&
                !g.isTouched &&
                (i.android && t.cancelable && t.preventDefault(),
                  (g.isTouched = !0),
                  (i = 0 < o.length ? o[0] : t),
                  (g.touchesStart.x = i.pageX),
                  (g.touchesStart.y = i.pageY));
            }),
            i("touchEnd", (e, t) => {
              if (p.zoom.enabled) {
                var i = p.zoom;
                if (m.imageEl)
                  if (g.isTouched && g.isMoved) {
                    ((g.isTouched = !1), (g.isMoved = !1));
                    let e = 300,
                      t = 300;
                    var r = l.x * e,
                      r = g.currentX + r,
                      n = l.y * t,
                      n = g.currentY + n,
                      s =
                        (0 !== l.x && (e = Math.abs((r - g.currentX) / l.x)),
                          0 !== l.y && (t = Math.abs((n - g.currentY) / l.y)),
                          Math.max(e, t)),
                      r =
                        ((g.currentX = r), (g.currentY = n), g.width * i.scale),
                      n = g.height * i.scale;
                    ((g.minX = Math.min(m.slideWidth / 2 - r / 2, 0)),
                      (g.maxX = -g.minX),
                      (g.minY = Math.min(m.slideHeight / 2 - n / 2, 0)),
                      (g.maxY = -g.minY),
                      (g.currentX = Math.max(
                        Math.min(g.currentX, g.maxX),
                        g.minX,
                      )),
                      (g.currentY = Math.max(
                        Math.min(g.currentY, g.maxY),
                        g.minY,
                      )),
                      (m.imageWrapEl.style.transitionDuration = s + "ms"),
                      (m.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`));
                  } else ((g.isTouched = !1), (g.isMoved = !1));
              }
            }),
            i("doubleTap", (e, t) => {
              !p.animating &&
                p.params.zoom.enabled &&
                p.zoom.enabled &&
                p.params.zoom.toggle &&
                T(t);
            }),
            i("transitionEnd", () => {
              p.zoom.enabled && p.params.zoom.enabled && x();
            }),
            i("slideChange", () => {
              p.zoom.enabled &&
                p.params.zoom.enabled &&
                p.params.cssMode &&
                x();
            }),
            Object.assign(p.zoom, {
              enable: C,
              disable: M,
              in: E,
              out: _,
              toggle: T,
            }));
        },
        function (e) {
          let { swiper: o, extendParams: t, on: i } = e;
          function l(e, t) {
            let i = (() => {
              let i, r, n;
              return (e, t) => {
                for (r = -1, i = e.length; 1 < i - r;)
                  e[(n = (i + r) >> 1)] <= t ? (r = n) : (i = n);
                return i;
              };
            })();
            ((this.x = e), (this.y = t), (this.lastIndex = e.length - 1));
            let r, n;
            return (
              (this.interpolate = function (e) {
                return e
                  ? ((n = i(this.x, e)),
                    (r = n - 1),
                    ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                    (this.x[n] - this.x[r]) +
                    this.y[r])
                  : 0;
              }),
              this
            );
          }
          function r() {
            o.controller.control &&
              o.controller.spline &&
              ((o.controller.spline = void 0), delete o.controller.spline);
          }
          (t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
            (o.controller = { control: void 0 }),
            i("beforeInit", () => {
              if (
                "undefined" != typeof window &&
                ("string" == typeof o.params.controller.control ||
                  o.params.controller.control instanceof HTMLElement)
              ) {
                let i = document.querySelector(o.params.controller.control);
                if (i && i.swiper) o.controller.control = i.swiper;
                else if (i) {
                  let t = (e) => {
                    ((o.controller.control = e.detail[0]),
                      o.update(),
                      i.removeEventListener("init", t));
                  };
                  i.addEventListener("init", t);
                }
              } else o.controller.control = o.params.controller.control;
            }),
            i("update", () => {
              r();
            }),
            i("resize", () => {
              r();
            }),
            i("observerUpdate", () => {
              r();
            }),
            i("setTranslate", (e, t, i) => {
              o.controller.control &&
                !o.controller.control.destroyed &&
                o.controller.setTranslate(t, i);
            }),
            i("setTransition", (e, t, i) => {
              o.controller.control &&
                !o.controller.control.destroyed &&
                o.controller.setTransition(t, i);
            }),
            Object.assign(o.controller, {
              setTranslate: function (e, t) {
                var i = o.controller.control;
                let r, n;
                var s = o.constructor;
                function a(e) {
                  var t, i;
                  e.destroyed ||
                    ((t = o.rtlTranslate ? -o.translate : o.translate),
                      "slide" === o.params.controller.by &&
                      ((i = e),
                        (o.controller.spline = o.params.loop
                          ? new l(o.slidesGrid, i.slidesGrid)
                          : new l(o.snapGrid, i.snapGrid)),
                        (n = -o.controller.spline.interpolate(-t))),
                      (n && "container" !== o.params.controller.by) ||
                      ((r =
                        (e.maxTranslate() - e.minTranslate()) /
                        (o.maxTranslate() - o.minTranslate())),
                        (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                        (n = (t - o.minTranslate()) * r + e.minTranslate())),
                      o.params.controller.inverse && (n = e.maxTranslate() - n),
                      e.updateProgress(n),
                      e.setTranslate(n, o),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses());
                }
                if (Array.isArray(i))
                  for (let e = 0; e < i.length; e += 1)
                    i[e] !== t && i[e] instanceof s && a(i[e]);
                else i instanceof s && t !== i && a(i);
              },
              setTransition: function (t, e) {
                var i = o.constructor;
                let r = o.controller.control,
                  n;
                function s(e) {
                  e.destroyed ||
                    (e.setTransition(t, o),
                      0 !== t &&
                      (e.transitionStart(),
                        e.params.autoHeight &&
                        T(() => {
                          e.updateAutoHeight();
                        }),
                        g(e.wrapperEl, () => {
                          r && e.transitionEnd();
                        })));
                }
                if (Array.isArray(r))
                  for (n = 0; n < r.length; n += 1)
                    r[n] !== e && r[n] instanceof i && s(r[n]);
                else r instanceof i && e !== r && s(r);
              },
            }));
        },
        function (e) {
          let { swiper: o, extendParams: t, on: i } = e,
            l =
              (t({
                a11y: {
                  enabled: !0,
                  notificationClass: "swiper-notification",
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                  slideLabelMessage: "{{index}} / {{slidesLength}}",
                  containerMessage: null,
                  containerRoleDescriptionMessage: null,
                  itemRoleDescriptionMessage: null,
                  slideRole: "group",
                  id: null,
                },
              }),
                (o.a11y = { clicked: !1 }),
                null);
          function r(e) {
            var t = l;
            0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
          }
          let d = (e) => (e = Array.isArray(e) ? e : [e].filter((e) => !!e));
          function n(e) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("tabIndex", "0");
            });
          }
          function s(e) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("tabIndex", "-1");
            });
          }
          function a(e, t) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("role", t);
            });
          }
          function c(e, t) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("aria-roledescription", t);
            });
          }
          function u(e, t) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("aria-label", t);
            });
          }
          function p(e) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("aria-disabled", !0);
            });
          }
          function f(e) {
            (e = d(e)).forEach((e) => {
              e.setAttribute("aria-disabled", !1);
            });
          }
          function h(e) {
            var t, i;
            (13 !== e.keyCode && 32 !== e.keyCode) ||
              ((t = o.params.a11y),
                (i = e.target),
                o.pagination &&
                o.pagination.el &&
                (i === o.pagination.el || o.pagination.el.contains(e.target)) &&
                !e.target.matches(M(o.params.pagination.bulletClass))) ||
              (o.navigation &&
                o.navigation.nextEl &&
                i === o.navigation.nextEl &&
                ((o.isEnd && !o.params.loop) || o.slideNext(),
                  o.isEnd ? r(t.lastSlideMessage) : r(t.nextSlideMessage)),
                o.navigation &&
                o.navigation.prevEl &&
                i === o.navigation.prevEl &&
                ((o.isBeginning && !o.params.loop) || o.slidePrev(),
                  o.isBeginning ? r(t.firstSlideMessage) : r(t.prevSlideMessage)),
                o.pagination &&
                i.matches(M(o.params.pagination.bulletClass)) &&
                i.click());
          }
          function m() {
            return (
              o.pagination &&
              o.pagination.bullets &&
              o.pagination.bullets.length
            );
          }
          function g() {
            return m() && o.params.pagination.clickable;
          }
          let v = (e, t, i) => {
            var r;
            (n(e),
              "BUTTON" !== e.tagName &&
              (a(e, "button"), e.addEventListener("keydown", h)),
              u(e, i),
              (i = e),
              (r = t),
              (i = d(i)).forEach((e) => {
                e.setAttribute("aria-controls", r);
              }));
          },
            b = () => {
              o.a11y.clicked = !0;
            },
            y = () => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  o.destroyed || (o.a11y.clicked = !1);
                });
              });
            },
            w = (e) => {
              var t, i, r;
              o.a11y.clicked ||
                ((t = e.target.closest(
                  `.${o.params.slideClass}, swiper-slide`,
                )) &&
                  o.slides.includes(t) &&
                  ((i = o.slides.indexOf(t) === o.activeIndex),
                    (r =
                      o.params.watchSlidesProgress &&
                      o.visibleSlides &&
                      o.visibleSlides.includes(t)),
                    i ||
                    r ||
                    (e.sourceCapabilities &&
                      e.sourceCapabilities.firesTouchEvents) ||
                    (o.isHorizontal()
                      ? (o.el.scrollLeft = 0)
                      : (o.el.scrollTop = 0),
                      o.slideTo(o.slides.indexOf(t), 0))));
            },
            x = () => {
              let i = o.params.a11y,
                r =
                  (i.itemRoleDescriptionMessage &&
                    c(o.slides, i.itemRoleDescriptionMessage),
                    i.slideRole && a(o.slides, i.slideRole),
                    o.slides.length);
              i.slideLabelMessage &&
                o.slides.forEach((e, t) => {
                  t = o.params.loop
                    ? parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                    : t;
                  u(
                    e,
                    i.slideLabelMessage
                      .replace(/\{\{index\}\}/, t + 1)
                      .replace(/\{\{slidesLength\}\}/, r),
                  );
                });
            },
            E = () => {
              let t = o.params.a11y;
              (o.isElement ? o.el.shadowEl : o.el).append(l);
              var e = o.el,
                e =
                  (t.containerRoleDescriptionMessage &&
                    c(e, t.containerRoleDescriptionMessage),
                    t.containerMessage && u(e, t.containerMessage),
                    o.wrapperEl);
              let i =
                t.id ||
                e.getAttribute("id") ||
                "swiper-wrapper-" +
                "x"
                  .repeat((s = void 0 === (s = 16) ? 16 : s))
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16),
                  );
              var r,
                n,
                s =
                  o.params.autoplay && o.params.autoplay.enabled
                    ? "off"
                    : "polite",
                { nextEl: e, prevEl: a } =
                  ((a = e),
                    (r = i),
                    (a = d(a)).forEach((e) => {
                      e.setAttribute("id", r);
                    }),
                    (a = e),
                    (n = s),
                    (a = d(a)).forEach((e) => {
                      e.setAttribute("aria-live", n);
                    }),
                    x(),
                    o.navigation || {}),
                e = d(e),
                a = d(a);
              (e && e.forEach((e) => v(e, i, t.nextSlideMessage)),
                a && a.forEach((e) => v(e, i, t.prevSlideMessage)),
                g() &&
                (Array.isArray(o.pagination.el)
                  ? o.pagination.el
                  : [o.pagination.el]
                ).forEach((e) => {
                  e.addEventListener("keydown", h);
                }),
                o.el.addEventListener("focus", w, !0),
                o.el.addEventListener("pointerdown", b, !0),
                o.el.addEventListener("pointerup", y, !0));
            };
          (i("beforeInit", () => {
            ((l = S("span", o.params.a11y.notificationClass)).setAttribute(
              "aria-live",
              "assertive",
            ),
              l.setAttribute("aria-atomic", "true"));
          }),
            i("afterInit", () => {
              o.params.a11y.enabled && E();
            }),
            i(
              "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
              () => {
                o.params.a11y.enabled && x();
              },
            ),
            i("fromEdge toEdge afterInit lock unlock", () => {
              var e, t;
              o.params.a11y.enabled &&
                !o.params.loop &&
                !o.params.rewind &&
                o.navigation &&
                (({ nextEl: e, prevEl: t } = o.navigation),
                  t && (o.isBeginning ? (p(t), s) : (f(t), n))(t),
                  e) &&
                (o.isEnd ? (p(e), s) : (f(e), n))(e);
            }),
            i("paginationUpdate", () => {
              if (o.params.a11y.enabled) {
                let t = o.params.a11y;
                m() &&
                  o.pagination.bullets.forEach((e) => {
                    (o.params.pagination.clickable &&
                      (n(e),
                        o.params.pagination.renderBullet ||
                        (a(e, "button"),
                          u(
                            e,
                            t.paginationBulletMessage.replace(
                              /\{\{index\}\}/,
                              _(e) + 1,
                            ),
                          ))),
                      e.matches(M(o.params.pagination.bulletActiveClass))
                        ? e.setAttribute("aria-current", "true")
                        : e.removeAttribute("aria-current"));
                  });
              }
            }),
            i("destroy", () => {
              var e, t;
              o.params.a11y.enabled &&
                (l && l.remove(),
                  ({ nextEl: e, prevEl: t } = o.navigation || {}),
                  (e = d(e)),
                  (t = d(t)),
                  e && e.forEach((e) => e.removeEventListener("keydown", h)),
                  t && t.forEach((e) => e.removeEventListener("keydown", h)),
                  g() &&
                  (Array.isArray(o.pagination.el)
                    ? o.pagination.el
                    : [o.pagination.el]
                  ).forEach((e) => {
                    e.removeEventListener("keydown", h);
                  }),
                  o.el.removeEventListener("focus", w, !0),
                  o.el.removeEventListener("pointerdown", b, !0),
                  o.el.removeEventListener("pointerup", y, !0));
            }));
        },
        function (e) {
          let { swiper: a, extendParams: t, on: i } = e,
            s =
              (t({
                history: {
                  enabled: !1,
                  root: "",
                  replaceState: !1,
                  key: "slides",
                  keepQuery: !1,
                },
              }),
                !1),
            r = {},
            o = (e) =>
              e
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, ""),
            n = (e) => {
              var t = A();
              let i;
              ((e = (i = e ? new URL(e) : t.location).pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e)),
                (t = e.length));
              return { key: e[t - 2], value: e[t - 1] };
            },
            l = (i, r) => {
              var n = A();
              if (s && a.params.history.enabled) {
                let e;
                e = a.params.url ? new URL(a.params.url) : n.location;
                r = a.slides[r];
                let t = o(r.getAttribute("data-history"));
                if (0 < a.params.history.root.length) {
                  let e = a.params.history.root;
                  ("/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                    (t = e + "/" + (i ? i + "/" : "") + t));
                } else e.pathname.includes(i) || (t = (i ? i + "/" : "") + t);
                a.params.history.keepQuery && (t += e.search);
                r = n.history.state;
                (r && r.value === t) ||
                  (a.params.history.replaceState
                    ? n.history.replaceState({ value: t }, null, t)
                    : n.history.pushState({ value: t }, null, t));
              }
            },
            d = (i, r, n) => {
              if (r)
                for (let e = 0, t = a.slides.length; e < t; e += 1) {
                  var s = a.slides[e];
                  o(s.getAttribute("data-history")) === r &&
                    ((s = a.getSlideIndex(s)), a.slideTo(s, i, n));
                }
              else a.slideTo(0, i, n);
            },
            c = () => {
              ((r = n(a.params.url)), d(a.params.speed, r.value, !1));
            };
          (i("init", () => {
            var e;
            a.params.history.enabled &&
              ((e = A()), a.params.history) &&
              (e.history && e.history.pushState
                ? ((s = !0),
                  ((r = n(a.params.url)).key || r.value) &&
                  d(0, r.value, a.params.runCallbacksOnInit),
                  a.params.history.replaceState ||
                  e.addEventListener("popstate", c))
                : ((a.params.history.enabled = !1),
                  (a.params.hashNavigation.enabled = !0)));
          }),
            i("destroy", () => {
              var e;
              a.params.history.enabled &&
                ((e = A()),
                  a.params.history.replaceState ||
                  e.removeEventListener("popstate", c));
            }),
            i("transitionEnd _freeModeNoMomentumRelease", () => {
              s && l(a.params.history.key, a.activeIndex);
            }),
            i("slideChange", () => {
              s && a.params.cssMode && l(a.params.history.key, a.activeIndex);
            }));
        },
        function (e) {
          let { swiper: r, extendParams: t, emit: i, on: n } = e,
            s = !1,
            a = L(),
            o = A(),
            l =
              (t({
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1,
                  getSlideIndex(e, t) {
                    var i;
                    return r.virtual && r.params.virtual.enabled
                      ? (i = r.slides.filter(
                        (e) => e.getAttribute("data-hash") === t,
                      )[0])
                        ? parseInt(
                          i.getAttribute("data-swiper-slide-index"),
                          10,
                        )
                        : 0
                      : r.getSlideIndex(
                        F(
                          r.slidesEl,
                          `.${r.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`,
                        )[0],
                      );
                  },
                },
              }),
                () => {
                  i("hashChange");
                  var e = a.location.hash.replace("#", ""),
                    t =
                      r.virtual && r.params.virtual.enabled
                        ? r.slidesEl.querySelector(
                          `[data-swiper-slide-index="${r.activeIndex}"]`,
                        )
                        : r.slides[r.activeIndex];
                  e === (t ? t.getAttribute("data-hash") : "") ||
                    void 0 ===
                    (t = r.params.hashNavigation.getSlideIndex(r, e)) ||
                    Number.isNaN(t) ||
                    r.slideTo(t);
                }),
            d = () => {
              var e;
              s &&
                r.params.hashNavigation.enabled &&
                ((e = (e =
                  r.virtual && r.params.virtual.enabled
                    ? r.slidesEl.querySelector(
                      `[data-swiper-slide-index="${r.activeIndex}"]`,
                    )
                    : r.slides[r.activeIndex])
                  ? e.getAttribute("data-hash") ||
                  e.getAttribute("data-history")
                  : ""),
                  r.params.hashNavigation.replaceState &&
                    o.history &&
                    o.history.replaceState
                    ? o.history.replaceState(null, null, "#" + e || "")
                    : (a.location.hash = e || ""),
                  i("hashSet"));
            };
          (n("init", () => {
            var e;
            !r.params.hashNavigation.enabled ||
              !r.params.hashNavigation.enabled ||
              (r.params.history && r.params.history.enabled) ||
              ((s = !0),
                (e = a.location.hash.replace("#", "")) &&
                ((e = r.params.hashNavigation.getSlideIndex(r, e)),
                  r.slideTo(e || 0, 0, r.params.runCallbacksOnInit, !0)),
                r.params.hashNavigation.watchState &&
                o.addEventListener("hashchange", l));
          }),
            n("destroy", () => {
              r.params.hashNavigation.enabled &&
                r.params.hashNavigation.watchState &&
                o.removeEventListener("hashchange", l);
            }),
            n("transitionEnd _freeModeNoMomentumRelease", () => {
              s && d();
            }),
            n("slideChange", () => {
              s && r.params.cssMode && d();
            }));
        },
        function (e) {
          let { swiper: s, extendParams: t, on: i, emit: a, params: r } = e;
          ((s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
            t({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            }));
          let o,
            l,
            d = r && r.autoplay ? r.autoplay.delay : 3e3,
            c = r && r.autoplay ? r.autoplay.delay : 3e3,
            u,
            p = new Date().getTime,
            n,
            f,
            h,
            m,
            g,
            v;
          function b(e) {
            s &&
              !s.destroyed &&
              s.wrapperEl &&
              e.target === s.wrapperEl &&
              (s.wrapperEl.removeEventListener("transitionend", b), S());
          }
          let y = () => {
            var e;
            !s.destroyed &&
              s.autoplay.running &&
              (s.autoplay.paused ? (n = !0) : n && ((c = u), (n = !1)),
                (e = s.autoplay.paused ? u : p + c - new Date().getTime()),
                (s.autoplay.timeLeft = e),
                a("autoplayTimeLeft", e, e / d),
                (l = requestAnimationFrame(() => {
                  y();
                })));
          },
            w = () => {
              let e;
              if (
                (e =
                  s.virtual && s.params.virtual.enabled
                    ? s.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                    : s.slides[s.activeIndex])
              )
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            },
            x = (r) => {
              if (!s.destroyed && s.autoplay.running) {
                (cancelAnimationFrame(l), y());
                let e = void 0 === r ? s.params.autoplay.delay : r;
                ((d = s.params.autoplay.delay), (c = s.params.autoplay.delay));
                var n = w();
                (!Number.isNaN(n) &&
                  0 < n &&
                  void 0 === r &&
                  ((e = n), (d = n), (c = n)),
                  (u = e));
                let t = s.params.speed,
                  i = () => {
                    s &&
                      !s.destroyed &&
                      (s.params.autoplay.reverseDirection
                        ? !s.isBeginning || s.params.loop || s.params.rewind
                          ? (s.slidePrev(t, !0, !0), a("autoplay"))
                          : s.params.autoplay.stopOnLastSlide ||
                          (s.slideTo(s.slides.length - 1, t, !0, !0),
                            a("autoplay"))
                        : !s.isEnd || s.params.loop || s.params.rewind
                          ? (s.slideNext(t, !0, !0), a("autoplay"))
                          : s.params.autoplay.stopOnLastSlide ||
                          (s.slideTo(0, t, !0, !0), a("autoplay")),
                        s.params.cssMode) &&
                      ((p = new Date().getTime()),
                        requestAnimationFrame(() => {
                          x();
                        }));
                  };
                return (
                  0 < e
                    ? (clearTimeout(o),
                      (o = setTimeout(() => {
                        i();
                      }, e)))
                    : requestAnimationFrame(() => {
                      i();
                    }),
                  e
                );
              }
            },
            E = () => {
              ((s.autoplay.running = !0), x(), a("autoplayStart"));
            },
            _ = () => {
              ((s.autoplay.running = !1),
                clearTimeout(o),
                cancelAnimationFrame(l),
                a("autoplayStop"));
            },
            T = (e, t) => {
              !s.destroyed &&
                s.autoplay.running &&
                (clearTimeout(o),
                  e || (v = !0),
                  (e = () => {
                    (a("autoplayPause"),
                      s.params.autoplay.waitForTransition
                        ? s.wrapperEl.addEventListener("transitionend", b)
                        : S());
                  }),
                  (s.autoplay.paused = !0),
                  t
                    ? (g && (u = s.params.autoplay.delay), (g = !1), e())
                    : ((t = u || s.params.autoplay.delay),
                      (u = t - (new Date().getTime() - p)),
                      (s.isEnd && u < 0 && !s.params.loop) ||
                      (u < 0 && (u = 0), e())));
            },
            S = () => {
              (s.isEnd && u < 0 && !s.params.loop) ||
                s.destroyed ||
                !s.autoplay.running ||
                ((p = new Date().getTime()),
                  v ? ((v = !1), x(u)) : x(),
                  (s.autoplay.paused = !1),
                  a("autoplayResume"));
            },
            C = () => {
              var e;
              !s.destroyed &&
                s.autoplay.running &&
                ("hidden" === (e = L()).visibilityState && ((v = !0), T(!0)),
                  "visible" === e.visibilityState) &&
                S();
            },
            M = (e) => {
              "mouse" === e.pointerType && ((v = !0), T(!0));
            },
            A = (e) => {
              "mouse" === e.pointerType && s.autoplay.paused && S();
            };
          (i("init", () => {
            s.params.autoplay.enabled &&
              (s.params.autoplay.pauseOnMouseEnter &&
                (s.el.addEventListener("pointerenter", M),
                  s.el.addEventListener("pointerleave", A)),
                L().addEventListener("visibilitychange", C),
                (p = new Date().getTime()),
                E());
          }),
            i("destroy", () => {
              (s.el.removeEventListener("pointerenter", M),
                s.el.removeEventListener("pointerleave", A),
                L().removeEventListener("visibilitychange", C),
                s.autoplay.running && _());
            }),
            i("beforeTransitionStart", (e, t, i) => {
              !s.destroyed &&
                s.autoplay.running &&
                (i || !s.params.autoplay.disableOnInteraction
                  ? T(!0, !0)
                  : _());
            }),
            i("sliderFirstMove", () => {
              !s.destroyed &&
                s.autoplay.running &&
                (s.params.autoplay.disableOnInteraction
                  ? _()
                  : ((f = !0),
                    (h = !1),
                    (v = !1),
                    (m = setTimeout(() => {
                      ((v = !0), (h = !0), T(!0));
                    }, 200))));
            }),
            i("touchEnd", () => {
              !s.destroyed &&
                s.autoplay.running &&
                f &&
                (clearTimeout(m),
                  clearTimeout(o),
                  (f =
                    ((h =
                      (s.params.autoplay.disableOnInteraction ||
                        (h && s.params.cssMode && S()),
                        !1)),
                      !1)));
            }),
            i("slideChange", () => {
              !s.destroyed && s.autoplay.running && (g = !0);
            }),
            Object.assign(s.autoplay, {
              start: E,
              stop: _,
              pause: T,
              resume: S,
            }));
        },
        function (e) {
          let { swiper: c, extendParams: t, on: i } = e,
            r =
              (t({
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-thumbs",
                },
              }),
                !1),
            n = !1;
          function s() {
            var t = c.thumbs.swiper;
            if (t && !t.destroyed) {
              var i = t.clickedIndex,
                e = t.clickedSlide;
              if (
                !(
                  (e &&
                    e.classList.contains(
                      c.params.thumbs.slideThumbActiveClass,
                    )) ||
                  null == i
                )
              ) {
                let e;
                ((e = t.params.loop
                  ? parseInt(
                    t.clickedSlide.getAttribute("data-swiper-slide-index"),
                    10,
                  )
                  : i),
                  c.params.loop ? c.slideToLoop(e) : c.slideTo(e));
              }
            }
          }
          function a() {
            var e = c.params.thumbs;
            if (r) return !1;
            r = !0;
            var t = c.constructor;
            return (
              e.swiper instanceof t
                ? ((c.thumbs.swiper = e.swiper),
                  Object.assign(c.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(c.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  c.thumbs.swiper.update())
                : l(e.swiper) &&
                ((e = Object.assign({}, e.swiper)),
                  Object.assign(e, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  (c.thumbs.swiper = new t(e)),
                  (n = !0)),
              c.thumbs.swiper.el.classList.add(
                c.params.thumbs.thumbsContainerClass,
              ),
              c.thumbs.swiper.on("tap", s),
              !0
            );
          }
          function o(r) {
            var n = c.thumbs.swiper;
            if (n && !n.destroyed) {
              var s =
                "auto" === n.params.slidesPerView
                  ? n.slidesPerViewDynamic()
                  : n.params.slidesPerView;
              let t = 1,
                i = c.params.thumbs.slideThumbActiveClass;
              if (
                (1 < c.params.slidesPerView &&
                  !c.params.centeredSlides &&
                  (t = c.params.slidesPerView),
                  c.params.thumbs.multipleActiveThumbs || (t = 1),
                  (t = Math.floor(t)),
                  n.slides.forEach((e) => e.classList.remove(i)),
                  n.params.loop || (n.params.virtual && n.params.virtual.enabled))
              )
                for (let e = 0; e < t; e += 1)
                  F(
                    n.slidesEl,
                    `[data-swiper-slide-index="${c.realIndex + e}"]`,
                  ).forEach((e) => {
                    e.classList.add(i);
                  });
              else
                for (let e = 0; e < t; e += 1)
                  n.slides[c.realIndex + e] &&
                    n.slides[c.realIndex + e].classList.add(i);
              var a = c.params.thumbs.autoScrollOffset,
                o = a && !n.params.loop;
              if (c.realIndex !== n.realIndex || o) {
                var l,
                  d = n.activeIndex;
                let e, t;
                ((t = n.params.loop
                  ? ((l = n.slides.filter(
                    (e) =>
                      e.getAttribute("data-swiper-slide-index") ===
                      "" + c.realIndex,
                  )[0]),
                    (e = n.slides.indexOf(l)),
                    c.activeIndex > c.previousIndex ? "next" : "prev")
                  : (e = c.realIndex) > c.previousIndex
                    ? "next"
                    : "prev"),
                  o && (e += "next" === t ? a : -1 * a),
                  n.visibleSlidesIndexes &&
                  n.visibleSlidesIndexes.indexOf(e) < 0 &&
                  (n.params.centeredSlides
                    ? (e =
                      e > d
                        ? e - Math.floor(s / 2) + 1
                        : e + Math.floor(s / 2) - 1)
                    : e > d && n.params.slidesPerGroup,
                    n.slideTo(e, r ? 0 : void 0)));
              }
            }
          }
          ((c.thumbs = { swiper: null }),
            i("beforeInit", () => {
              let r = c.params.thumbs;
              if (r && r.swiper)
                if (
                  "string" == typeof r.swiper ||
                  r.swiper instanceof HTMLElement
                ) {
                  let e = L(),
                    t = () => {
                      let i =
                        "string" == typeof r.swiper
                          ? e.querySelector(r.swiper)
                          : r.swiper;
                      if (i && i.swiper) ((r.swiper = i.swiper), a(), o(!0));
                      else if (i) {
                        let t = (e) => {
                          ((r.swiper = e.detail[0]),
                            i.removeEventListener("init", t),
                            a(),
                            o(!0),
                            r.swiper.update(),
                            c.update());
                        };
                        i.addEventListener("init", t);
                      }
                      return i;
                    },
                    i = () => {
                      c.destroyed || t() || requestAnimationFrame(i);
                    };
                  requestAnimationFrame(i);
                } else (a(), o(!0));
            }),
            i("slideChange update resize observerUpdate", () => {
              o();
            }),
            i("setTransition", (e, t) => {
              var i = c.thumbs.swiper;
              i && !i.destroyed && i.setTransition(t);
            }),
            i("beforeDestroy", () => {
              var e = c.thumbs.swiper;
              e && !e.destroyed && n && e.destroy();
            }),
            Object.assign(c.thumbs, { init: a, update: o }));
        },
        function (e) {
          let { swiper: f, extendParams: t, emit: h, once: m } = e;
          (t({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: 0.02,
            },
          }),
            Object.assign(f, {
              freeMode: {
                onTouchStart: function () {
                  var e;
                  f.params.cssMode ||
                    ((e = f.getTranslate()),
                      f.setTranslate(e),
                      f.setTransition(0),
                      (f.touchEventsData.velocities.length = 0),
                      f.freeMode.onTouchEnd({
                        currentPos: f.rtl ? f.translate : -f.translate,
                      }));
                },
                onTouchMove: function () {
                  var e, t;
                  f.params.cssMode ||
                    (({ touchEventsData: e, touches: t } = f),
                      0 === e.velocities.length &&
                      e.velocities.push({
                        position: t[f.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime,
                      }),
                      e.velocities.push({
                        position: t[f.isHorizontal() ? "currentX" : "currentY"],
                        time: v(),
                      }));
                },
                onTouchEnd: function (c) {
                  if (((c = c.currentPos), !f.params.cssMode)) {
                    let {
                      params: s,
                      wrapperEl: a,
                      rtlTranslate: o,
                      snapGrid: l,
                      touchEventsData: d,
                    } = f;
                    var e = v() - d.touchStartTime;
                    if (c < -f.minTranslate()) f.slideTo(f.activeIndex);
                    else if (c > -f.maxTranslate())
                      f.slides.length < l.length
                        ? f.slideTo(l.length - 1)
                        : f.slideTo(f.slides.length - 1);
                    else {
                      if (s.freeMode.momentum) {
                        ((!(1 < d.velocities.length) ||
                          ((c = d.velocities.pop()),
                            (p = d.velocities.pop()),
                            (u = c.position - p.position),
                            (p = c.time - p.time),
                            (f.velocity = u / p),
                            (f.velocity /= 2),
                            Math.abs(f.velocity) < s.freeMode.minimumVelocity &&
                            (f.velocity = 0),
                            150 < p) ||
                          300 < v() - c.time) &&
                          (f.velocity = 0),
                          (f.velocity *= s.freeMode.momentumVelocityRatio),
                          (d.velocities.length = 0));
                        let e = 1e3 * s.freeMode.momentumRatio;
                        var u = f.velocity * e;
                        let i = f.translate + u,
                          t = (o && (i = -i), !1),
                          r;
                        var p =
                          20 *
                          Math.abs(f.velocity) *
                          s.freeMode.momentumBounceRatio;
                        let n;
                        if (i < f.maxTranslate())
                          (s.freeMode.momentumBounce
                            ? (i + f.maxTranslate() < -p &&
                              (i = f.maxTranslate() - p),
                              (r = f.maxTranslate()),
                              (t = !0),
                              (d.allowMomentumBounce = !0))
                            : (i = f.maxTranslate()),
                            s.loop && s.centeredSlides && (n = !0));
                        else if (i > f.minTranslate())
                          (s.freeMode.momentumBounce
                            ? (i - f.minTranslate() > p &&
                              (i = f.minTranslate() + p),
                              (r = f.minTranslate()),
                              (t = !0),
                              (d.allowMomentumBounce = !0))
                            : (i = f.minTranslate()),
                            s.loop && s.centeredSlides && (n = !0));
                        else if (s.freeMode.sticky) {
                          let t;
                          for (let e = 0; e < l.length; e += 1)
                            if (l[e] > -i) {
                              t = e;
                              break;
                            }
                          i = -(i =
                            Math.abs(l[t] - i) < Math.abs(l[t - 1] - i) ||
                              "next" === f.swipeDirection
                              ? l[t]
                              : l[t - 1]);
                        }
                        if (
                          (n &&
                            m("transitionEnd", () => {
                              f.loopFix();
                            }),
                            0 !== f.velocity)
                        )
                          ((e = o
                            ? Math.abs((-i - f.translate) / f.velocity)
                            : Math.abs((i - f.translate) / f.velocity)),
                            s.freeMode.sticky &&
                            ((c = Math.abs((o ? -i : i) - f.translate)),
                              (u = f.slidesSizesGrid[f.activeIndex]),
                              (e =
                                c < u
                                  ? s.speed
                                  : c < 2 * u
                                    ? 1.5 * s.speed
                                    : 2.5 * s.speed)));
                        else if (s.freeMode.sticky)
                          return void f.slideToClosest();
                        (s.freeMode.momentumBounce && t
                          ? (f.updateProgress(r),
                            f.setTransition(e),
                            f.setTranslate(i),
                            f.transitionStart(!0, f.swipeDirection),
                            (f.animating = !0),
                            g(a, () => {
                              f &&
                                !f.destroyed &&
                                d.allowMomentumBounce &&
                                (h("momentumBounce"),
                                  f.setTransition(s.speed),
                                  setTimeout(() => {
                                    (f.setTranslate(r),
                                      g(a, () => {
                                        f && !f.destroyed && f.transitionEnd();
                                      }));
                                  }, 0));
                            }))
                          : f.velocity
                            ? (h("_freeModeNoMomentumRelease"),
                              f.updateProgress(i),
                              f.setTransition(e),
                              f.setTranslate(i),
                              f.transitionStart(!0, f.swipeDirection),
                              f.animating ||
                              ((f.animating = !0),
                                g(a, () => {
                                  f && !f.destroyed && f.transitionEnd();
                                })))
                            : f.updateProgress(i),
                          f.updateActiveIndex(),
                          f.updateSlidesClasses());
                      } else {
                        if (s.freeMode.sticky) return void f.slideToClosest();
                        s.freeMode && h("_freeModeNoMomentumRelease");
                      }
                      (!s.freeMode.momentum || e >= s.longSwipesMs) &&
                        (f.updateProgress(),
                          f.updateActiveIndex(),
                          f.updateSlidesClasses());
                    }
                  }
                },
              },
            }));
        },
        function (e) {
          let { swiper: p, extendParams: t } = e;
          t({ grid: { rows: 1, fill: "column" } });
          let f,
            h,
            m,
            g = () => {
              let e = p.params.spaceBetween;
              return (
                "string" == typeof e && 0 <= e.indexOf("%")
                  ? (e = (parseFloat(e.replace("%", "")) / 100) * p.size)
                  : "string" == typeof e && (e = parseFloat(e)),
                e
              );
            };
          p.grid = {
            initSlides: (e) => {
              var t = p.params.slidesPerView,
                { rows: i, fill: r } = p.params.grid;
              ((m = Math.floor(e / i)),
                (f = Math.floor(e / i) === e / i ? e : Math.ceil(e / i) * i),
                "auto" !== t && "row" === r && (f = Math.max(f, t * i)),
                (h = f / i));
            },
            updateSlide: (e, t, i, r) => {
              var n,
                s,
                a = p.params.slidesPerGroup,
                o = g(),
                { rows: l, fill: d } = p.params.grid;
              let c, u;
              ("row" === d && 1 < a
                ? ((s = e - l * a * (n = Math.floor(e / (a * l)))),
                  (i =
                    0 === n ? a : Math.min(Math.ceil((i - n * l * a) / l), a)),
                  (u = Math.floor(s / i)),
                  (s = (c = s - u * i + n * a) + (u * f) / l),
                  (t.style.order = s))
                : "column" === d
                  ? ((c = Math.floor(e / l)),
                    (u = e - c * l),
                    (c > m || (c === m && u === l - 1)) &&
                    (u += 1) >= l &&
                    ((u = 0), (c += 1)))
                  : ((u = Math.floor(e / h)), (c = e - u * h)),
                (t.row = u),
                (t.column = c),
                (t.style[r("margin-top")] = 0 !== u ? o && o + "px" : ""));
            },
            updateWrapperSize: (e, i, t) => {
              var { centeredSlides: r, roundLengths: n } = p.params,
                s = g(),
                a = p.params.grid.rows;
              if (
                ((p.virtualSize = (e + s) * f),
                  (p.virtualSize = Math.ceil(p.virtualSize / a) - s),
                  (p.wrapperEl.style[t("width")] = p.virtualSize + s + "px"),
                  r)
              ) {
                var o = [];
                for (let t = 0; t < i.length; t += 1) {
                  let e = i[t];
                  (n && (e = Math.floor(e)),
                    i[t] < p.virtualSize + i[0] && o.push(e));
                }
                (i.splice(0, i.length), i.push(...o));
              }
            },
          };
        },
        function (e) {
          ((e = e.swiper),
            Object.assign(e, {
              appendSlide: function (t) {
                let { params: e, slidesEl: i } = this;
                e.loop && this.loopDestroy();
                var r = (e) => {
                  var t;
                  "string" == typeof e
                    ? (((t = document.createElement("div")).innerHTML = e),
                      i.append(t.children[0]),
                      (t.innerHTML = ""))
                    : i.append(e);
                };
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1) t[e] && r(t[e]);
                else r(t);
                (this.recalcSlides(),
                  e.loop && this.loopCreate(),
                  (e.observer && !this.isElement) || this.update());
              }.bind(e),
              prependSlide: function (t) {
                let { params: e, activeIndex: i, slidesEl: r } = this,
                  n = (e.loop && this.loopDestroy(), i + 1);
                var s = (e) => {
                  var t;
                  "string" == typeof e
                    ? (((t = document.createElement("div")).innerHTML = e),
                      r.prepend(t.children[0]),
                      (t.innerHTML = ""))
                    : r.prepend(e);
                };
                if ("object" == typeof t && "length" in t) {
                  for (let e = 0; e < t.length; e += 1) t[e] && s(t[e]);
                  n = i + t.length;
                } else s(t);
                (this.recalcSlides(),
                  e.loop && this.loopCreate(),
                  (e.observer && !this.isElement) || this.update(),
                  this.slideTo(n, 0, !1));
              }.bind(e),
              addSlide: function (t, i) {
                var r = this,
                  { params: n, activeIndex: s, slidesEl: a } = r;
                let o = s;
                if (
                  (n.loop &&
                    ((o -= r.loopedSlides), r.loopDestroy(), r.recalcSlides()),
                    (s = r.slides.length),
                    t <= 0)
                )
                  r.prependSlide(i);
                else if (s <= t) r.appendSlide(i);
                else {
                  let e = o > t ? o + 1 : o;
                  var l = [];
                  for (let e = s - 1; e >= t; --e) {
                    var d = r.slides[e];
                    (d.remove(), l.unshift(d));
                  }
                  if ("object" == typeof i && "length" in i) {
                    for (let e = 0; e < i.length; e += 1)
                      i[e] && a.append(i[e]);
                    e = o > t ? o + i.length : o;
                  } else a.append(i);
                  for (let e = 0; e < l.length; e += 1) a.append(l[e]);
                  (r.recalcSlides(),
                    n.loop && r.loopCreate(),
                    (n.observer && !r.isElement) || r.update(),
                    n.loop
                      ? r.slideTo(e + r.loopedSlides, 0, !1)
                      : r.slideTo(e, 0, !1));
                }
              }.bind(e),
              removeSlide: function (t) {
                var i = this,
                  { params: e, activeIndex: r } = i;
                let n = r,
                  s = (e.loop && ((n -= i.loopedSlides), i.loopDestroy()), n),
                  a;
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1)
                    ((a = t[e]),
                      i.slides[a] && i.slides[a].remove(),
                      a < s && --s);
                else
                  ((a = t), i.slides[a] && i.slides[a].remove(), a < s && --s);
                ((s = Math.max(s, 0)),
                  i.recalcSlides(),
                  e.loop && i.loopCreate(),
                  (e.observer && !i.isElement) || i.update(),
                  e.loop
                    ? i.slideTo(s + i.loopedSlides, 0, !1)
                    : i.slideTo(s, 0, !1));
              }.bind(e),
              removeAllSlides: function () {
                var t = [];
                for (let e = 0; e < this.slides.length; e += 1) t.push(e);
                this.removeSlide(t);
              }.bind(e),
            }));
        },
        function (e) {
          let { swiper: s, extendParams: t, on: i } = e;
          (t({ fadeEffect: { crossFade: !1 } }),
            y({
              effect: "fade",
              swiper: s,
              on: i,
              setTranslate: () => {
                var e = s.slides;
                s.params.fadeEffect;
                for (let i = 0; i < e.length; i += 1) {
                  var r = s.slides[i];
                  let e = -r.swiperSlideOffset,
                    t = (s.params.virtualTranslate || (e -= s.translate), 0);
                  s.isHorizontal() || ((t = e), (e = 0));
                  var n = s.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(r.progress), 0)
                    : 1 + Math.min(Math.max(r.progress, -1), 0),
                    r = E(0, r);
                  ((r.style.opacity = n),
                    (r.style.transform = `translate3d(${e}px, ${t}px, 0px)`));
                }
              },
              setTransition: (t) => {
                var e = s.slides.map((e) => a(e));
                (e.forEach((e) => {
                  e.style.transitionDuration = t + "ms";
                }),
                  b({
                    swiper: s,
                    duration: t,
                    transformElements: e,
                    allSlides: !0,
                  }));
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !s.params.cssMode,
              }),
            }));
        },
        function (e) {
          let { swiper: v, extendParams: t, on: i } = e,
            b =
              (t({
                cubeEffect: {
                  slideShadows: !0,
                  shadow: !0,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
              }),
                (e, t, i) => {
                  let r = i
                    ? e.querySelector(".swiper-slide-shadow-left")
                    : e.querySelector(".swiper-slide-shadow-top"),
                    n = i
                      ? e.querySelector(".swiper-slide-shadow-right")
                      : e.querySelector(".swiper-slide-shadow-bottom");
                  (r ||
                    ((r = S(
                      "div",
                      "swiper-slide-shadow-" + (i ? "left" : "top"),
                    )),
                      e.append(r)),
                    n ||
                    ((n = S(
                      "div",
                      "swiper-slide-shadow-" + (i ? "right" : "bottom"),
                    )),
                      e.append(n)),
                    r && (r.style.opacity = Math.max(-t, 0)),
                    n && (n.style.opacity = Math.max(t, 0)));
                });
          y({
            effect: "cube",
            swiper: v,
            on: i,
            setTranslate: () => {
              var e,
                {
                  el: t,
                  wrapperEl: i,
                  slides: o,
                  width: r,
                  height: n,
                  rtlTranslate: l,
                  size: d,
                  browser: s,
                } = v,
                c = v.params.cubeEffect,
                u = v.isHorizontal(),
                p = v.virtual && v.params.virtual.enabled;
              let f = 0,
                a;
              c.shadow &&
                (u
                  ? ((a = v.slidesEl.querySelector(".swiper-cube-shadow")) ||
                    ((a = S("div", "swiper-cube-shadow")),
                      v.slidesEl.append(a)),
                    (a.style.height = r + "px"))
                  : (a = t.querySelector(".swiper-cube-shadow")) ||
                  ((a = S("div", "swiper-cube-shadow")), t.append(a)));
              for (let a = 0; a < o.length; a += 1) {
                var h = o[a];
                let e = a,
                  t =
                    90 *
                    (e = p
                      ? parseInt(h.getAttribute("data-swiper-slide-index"), 10)
                      : e),
                  i = Math.floor(t / 360);
                l && ((t = -t), (i = Math.floor(-t / 360)));
                var m = Math.max(Math.min(h.progress, 1), -1);
                let r = 0,
                  n = 0,
                  s = 0;
                (e % 4 == 0
                  ? ((r = 4 * -i * d), (s = 0))
                  : (e - 1) % 4 == 0
                    ? ((r = 0), (s = 4 * -i * d))
                    : (e - 2) % 4 == 0
                      ? ((r = d + 4 * i * d), (s = d))
                      : (e - 3) % 4 == 0 && ((r = -d), (s = 3 * d + 4 * d * i)),
                  l && (r = -r),
                  u || ((n = r), (r = 0)));
                var g = `rotateX(${u ? 0 : -t}deg) rotateY(${u ? t : 0}deg) translate3d(${r}px, ${n}px, ${s}px)`;
                (m <= 1 &&
                  -1 < m &&
                  ((f = 90 * e + 90 * m), l) &&
                  (f = 90 * -e - 90 * m),
                  (h.style.transform = g),
                  c.slideShadows && b(h, m, u));
              }
              ((i.style.transformOrigin = `50% 50% -${d / 2}px`),
                (i.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`),
                c.shadow &&
                (u
                  ? (a.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`)
                  : ((t = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)),
                    (r =
                      1.5 -
                      (Math.sin((2 * t * Math.PI) / 360) / 2 +
                        Math.cos((2 * t * Math.PI) / 360) / 2)),
                    (t = c.shadowScale),
                    (r = c.shadowScale / r),
                    (e = c.shadowOffset),
                    (a.style.transform = `scale3d(${t}, 1, ${r}) translate3d(0px, ${n / 2 + e}px, ${-n / 2 / r}px) rotateX(-90deg)`))));
              t =
                (s.isSafari || s.isWebView) && s.needPerspectiveFix
                  ? -d / 2
                  : 0;
              ((i.style.transform = `translate3d(0px,0,${t}px) rotateX(${v.isHorizontal() ? 0 : f}deg) rotateY(${v.isHorizontal() ? -f : 0}deg)`),
                i.style.setProperty("--swiper-cube-translate-z", t + "px"));
            },
            setTransition: (t) => {
              var { el: e, slides: i } = v;
              (i.forEach((e) => {
                ((e.style.transitionDuration = t + "ms"),
                  e
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                    )
                    .forEach((e) => {
                      e.style.transitionDuration = t + "ms";
                    }));
              }),
                v.params.cubeEffect.shadow &&
                !v.isHorizontal() &&
                (i = e.querySelector(".swiper-cube-shadow")) &&
                (i.style.transitionDuration = t + "ms"));
            },
            recreateShadows: () => {
              let i = v.isHorizontal();
              v.slides.forEach((e) => {
                var t = Math.max(Math.min(e.progress, 1), -1);
                b(e, t, i);
              });
            },
            getEffectParams: () => v.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            }),
          });
        },
        function (e) {
          let { swiper: u, extendParams: t, on: i } = e,
            p =
              (t({ flipEffect: { slideShadows: !0, limitRotation: !0 } }),
                (e, t, i) => {
                  let r = u.isHorizontal()
                    ? e.querySelector(".swiper-slide-shadow-left")
                    : e.querySelector(".swiper-slide-shadow-top"),
                    n = u.isHorizontal()
                      ? e.querySelector(".swiper-slide-shadow-right")
                      : e.querySelector(".swiper-slide-shadow-bottom");
                  ((r = r || D(0, e, u.isHorizontal() ? "left" : "top")),
                    (n = n || D(0, e, u.isHorizontal() ? "right" : "bottom")),
                    r && (r.style.opacity = Math.max(-t, 0)),
                    n && (n.style.opacity = Math.max(t, 0)));
                });
          y({
            effect: "flip",
            swiper: u,
            on: i,
            setTranslate: () => {
              var { slides: a, rtlTranslate: o } = u,
                l = u.params.flipEffect;
              for (let s = 0; s < a.length; s += 1) {
                var d = a[s];
                let e = d.progress;
                u.params.flipEffect.limitRotation &&
                  (e = Math.max(Math.min(d.progress, 1), -1));
                var c = d.swiperSlideOffset;
                let t = -180 * e,
                  i = 0,
                  r = u.params.cssMode ? -c - u.translate : -c,
                  n = 0;
                (u.isHorizontal()
                  ? o && (t = -t)
                  : ((n = r), (r = 0), (i = -t), (t = 0)),
                  (d.style.zIndex = -Math.abs(Math.round(e)) + a.length),
                  l.slideShadows && p(d, e));
                c = `translate3d(${r}px, ${n}px, 0px) rotateX(${i}deg) rotateY(${t}deg)`;
                E(0, d).style.transform = c;
              }
            },
            setTransition: (t) => {
              var e = u.slides.map((e) => a(e));
              (e.forEach((e) => {
                ((e.style.transitionDuration = t + "ms"),
                  e
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                    )
                    .forEach((e) => {
                      e.style.transitionDuration = t + "ms";
                    }));
              }),
                b({ swiper: u, duration: t, transformElements: e }));
            },
            recreateShadows: () => {
              let i = u.params.flipEffect;
              u.slides.forEach((e) => {
                let t = e.progress;
                (u.params.flipEffect.limitRotation &&
                  (t = Math.max(Math.min(e.progress, 1), -1)),
                  p(e, t, i));
              });
            },
            getEffectParams: () => u.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !u.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: r, extendParams: t, on: i } = e;
          (t({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          }),
            y({
              effect: "coverflow",
              swiper: r,
              on: i,
              setTranslate: () => {
                var { width: e, height: t, slides: l, slidesSizesGrid: d } = r,
                  c = r.params.coverflowEffect,
                  u = r.isHorizontal(),
                  i = r.translate,
                  p = u ? e / 2 - i : t / 2 - i,
                  f = u ? c.rotate : -c.rotate,
                  h = c.depth;
                for (let o = 0, e = l.length; o < e; o += 1) {
                  var m = l[o],
                    g = d[o],
                    v = (p - m.swiperSlideOffset - g / 2) / g,
                    v =
                      "function" == typeof c.modifier
                        ? c.modifier(v)
                        : v * c.modifier;
                  let e = u ? f * v : 0,
                    t = u ? 0 : f * v,
                    i = -h * Math.abs(v),
                    r = c.stretch,
                    n =
                      ("string" == typeof r &&
                        -1 !== r.indexOf("%") &&
                        (r = (parseFloat(c.stretch) / 100) * g),
                        u ? 0 : r * v),
                    s = u ? r * v : 0,
                    a = 1 - (1 - c.scale) * Math.abs(v);
                  (Math.abs(s) < 0.001 && (s = 0),
                    Math.abs(n) < 0.001 && (n = 0),
                    Math.abs(i) < 0.001 && (i = 0),
                    Math.abs(e) < 0.001 && (e = 0),
                    Math.abs(t) < 0.001 && (t = 0),
                    Math.abs(a) < 0.001 && (a = 0));
                  g = `translate3d(${s}px,${n}px,${i}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${a})`;
                  if (
                    ((E(0, m).style.transform = g),
                      (m.style.zIndex = 1 - Math.abs(Math.round(v))),
                      c.slideShadows)
                  ) {
                    let e = u
                      ? m.querySelector(".swiper-slide-shadow-left")
                      : m.querySelector(".swiper-slide-shadow-top"),
                      t = u
                        ? m.querySelector(".swiper-slide-shadow-right")
                        : m.querySelector(".swiper-slide-shadow-bottom");
                    ((e = e || D(0, m, u ? "left" : "top")),
                      (t = t || D(0, m, u ? "right" : "bottom")),
                      e && (e.style.opacity = 0 < v ? v : 0),
                      t && (t.style.opacity = 0 < -v ? -v : 0));
                  }
                }
              },
              setTransition: (t) => {
                r.slides
                  .map((e) => a(e))
                  .forEach((e) => {
                    ((e.style.transitionDuration = t + "ms"),
                      e
                        .querySelectorAll(
                          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                        )
                        .forEach((e) => {
                          e.style.transitionDuration = t + "ms";
                        }));
                  });
              },
              perspective: () => !0,
              overwriteParams: () => ({ watchSlidesProgress: !0 }),
            }));
        },
        function (e) {
          let { swiper: g, extendParams: t, on: i } = e;
          (t({
            creativeEffect: {
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
              next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
            },
          }),
            y({
              effect: "creative",
              swiper: g,
              on: i,
              setTranslate: () => {
                var { slides: o, wrapperEl: e, slidesSizesGrid: t } = g,
                  l = g.params.creativeEffect;
                let d = l.progressMultiplier;
                var c = g.params.centeredSlides;
                c &&
                  ((t = t[0] / 2 - g.params.slidesOffsetBefore || 0),
                    (e.style.transform = `translateX(calc(50% - ${t}px))`));
                for (let a = 0; a < o.length; a += 1) {
                  var u = o[a],
                    p = u.progress;
                  let i = Math.min(
                    Math.max(u.progress, -l.limitProgress),
                    l.limitProgress,
                  ),
                    e = i;
                  c ||
                    (e = Math.min(
                      Math.max(u.originalProgress, -l.limitProgress),
                      l.limitProgress,
                    ));
                  var f = u.swiperSlideOffset;
                  let r = [g.params.cssMode ? -f - g.translate : -f, 0, 0],
                    n = [0, 0, 0],
                    t = !1,
                    s =
                      (g.isHorizontal() || ((r[1] = r[0]), (r[0] = 0)),
                      {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1,
                      });
                  (i < 0
                    ? ((s = l.next), (t = !0))
                    : 0 < i && ((s = l.prev), (t = !0)),
                    r.forEach((e, t) => {
                      r[t] =
                        `calc(${e}px + (${((e = s.translate[t]), "string" == typeof e ? e : e + "px")} * ${Math.abs(i * d)}))`;
                    }),
                    n.forEach((e, t) => {
                      n[t] = s.rotate[t] * Math.abs(i * d);
                    }),
                    (u.style.zIndex = -Math.abs(Math.round(p)) + o.length));
                  var f = r.join(", "),
                    p = `rotateX(${n[0]}deg) rotateY(${n[1]}deg) rotateZ(${n[2]}deg)`,
                    h =
                      e < 0
                        ? `scale(${1 + (1 - s.scale) * e * d})`
                        : `scale(${1 - (1 - s.scale) * e * d})`,
                    m =
                      e < 0
                        ? 1 + (1 - s.opacity) * e * d
                        : 1 - (1 - s.opacity) * e * d,
                    f = `translate3d(${f}) ${p} ` + h;
                  if ((t && s.shadow) || !t) {
                    let e = u.querySelector(".swiper-slide-shadow");
                    (e = !e && s.shadow ? D(0, u) : e) &&
                      ((p = l.shadowPerProgress
                        ? i * (1 / l.limitProgress)
                        : i),
                        (e.style.opacity = Math.min(
                          Math.max(Math.abs(p), 0),
                          1,
                        )));
                  }
                  h = E(0, u);
                  ((h.style.transform = f),
                    (h.style.opacity = m),
                    s.origin && (h.style.transformOrigin = s.origin));
                }
              },
              setTransition: (t) => {
                var e = g.slides.map((e) => a(e));
                (e.forEach((e) => {
                  ((e.style.transitionDuration = t + "ms"),
                    e.querySelectorAll(".swiper-slide-shadow").forEach((e) => {
                      e.style.transitionDuration = t + "ms";
                    }));
                }),
                  b({
                    swiper: g,
                    duration: t,
                    transformElements: e,
                    allSlides: !0,
                  }));
              },
              perspective: () => g.params.creativeEffect.perspective,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !g.params.cssMode,
              }),
            }));
        },
        function (e) {
          let { swiper: w, extendParams: t, on: i } = e;
          (t({
            cardsEffect: {
              slideShadows: !0,
              rotate: !0,
              perSlideRotate: 2,
              perSlideOffset: 8,
            },
          }),
            y({
              effect: "cards",
              swiper: w,
              on: i,
              setTranslate: () => {
                var { slides: o, activeIndex: l, rtlTranslate: d } = w,
                  c = w.params.cardsEffect,
                  { startTranslate: u, isTouched: p } = w.touchEventsData,
                  f = d ? -w.translate : w.translate;
                for (let a = 0; a < o.length; a += 1) {
                  var h = o[a],
                    m = h.progress,
                    g = Math.min(Math.max(m, -4), 4);
                  let e = h.swiperSlideOffset,
                    t =
                      (w.params.centeredSlides &&
                        !w.params.cssMode &&
                        (w.wrapperEl.style.transform = `translateX(${w.minTranslate()}px)`),
                        w.params.centeredSlides &&
                        w.params.cssMode &&
                        (e -= o[0].swiperSlideOffset),
                        w.params.cssMode ? -e - w.translate : -e),
                    i = 0;
                  var v = -100 * Math.abs(g);
                  let r = 1,
                    n = -c.perSlideRotate * g,
                    s = c.perSlideOffset - 0.75 * Math.abs(g);
                  var b =
                    w.virtual && w.params.virtual.enabled
                      ? w.virtual.from + a
                      : a,
                    y =
                      (b === l || b === l - 1) &&
                      0 < g &&
                      g < 1 &&
                      (p || w.params.cssMode) &&
                      f < u,
                    b =
                      (b === l || b === l + 1) &&
                      g < 0 &&
                      -1 < g &&
                      (p || w.params.cssMode) &&
                      u < f,
                    y =
                      ((y || b) &&
                        ((y = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5),
                          (n += -28 * g * y),
                          (r += -0.5 * y),
                          (s += 96 * y),
                          (i = -25 * y * Math.abs(g) + "%")),
                        g < 0
                          ? (t = `calc(${t}px ${d ? "-" : "+"} (${s * Math.abs(g)}%))`)
                          : 0 < g
                            ? (t = `calc(${t}px ${d ? "-" : "+"} (-${s * Math.abs(g)}%))`)
                            : (t += "px"),
                        w.isHorizontal() || ((b = i), (i = t), (t = b)),
                        g < 0 ? "" + (1 + (1 - r) * g) : "" + (1 - (1 - r) * g)),
                    b = `
        translate3d(${t}, ${i}, ${v}px)
        rotateZ(${c.rotate ? (d ? -n : n) : 0}deg)
        scale(${y})
      `;
                  if (c.slideShadows) {
                    let e = h.querySelector(".swiper-slide-shadow");
                    (e = e || D(0, h)) &&
                      (e.style.opacity = Math.min(
                        Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                        1,
                      ));
                  }
                  ((h.style.zIndex = -Math.abs(Math.round(m)) + o.length),
                    (E(0, h).style.transform = b));
                }
              },
              setTransition: (t) => {
                var e = w.slides.map((e) => a(e));
                (e.forEach((e) => {
                  ((e.style.transitionDuration = t + "ms"),
                    e.querySelectorAll(".swiper-slide-shadow").forEach((e) => {
                      e.style.transitionDuration = t + "ms";
                    }));
                }),
                  b({ swiper: w, duration: t, transformElements: e }));
              },
              perspective: () => !0,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !w.params.cssMode,
              }),
            }));
        },
      ]),
      m
    );
  }));
