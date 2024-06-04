(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import ge, { useState as Y, useCallback as G, forwardRef as Me, createElement as ve, useEffect as vr, Suspense as pr } from "react";
var pe = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function gr() {
  if (Ne)
    return K;
  Ne = 1;
  var p = ge, l = Symbol.for("react.element"), b = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, E = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(C, n, c) {
    var f, h = {}, y = null, _ = null;
    c !== void 0 && (y = "" + c), n.key !== void 0 && (y = "" + n.key), n.ref !== void 0 && (_ = n.ref);
    for (f in n)
      R.call(n, f) && !m.hasOwnProperty(f) && (h[f] = n[f]);
    if (C && C.defaultProps)
      for (f in n = C.defaultProps, n)
        h[f] === void 0 && (h[f] = n[f]);
    return { $$typeof: l, type: C, key: y, ref: _, props: h, _owner: E.current };
  }
  return K.Fragment = b, K.jsx = w, K.jsxs = w, K;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function mr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var p = ge, l = Symbol.for("react.element"), b = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), C = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), D = Symbol.iterator, F = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[F];
      return typeof r == "function" ? r : null;
    }
    var O = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        V("error", e, t);
      }
    }
    function V(e, r, t) {
      {
        var a = O.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var S = !1, A = !1, $ = !1, B = !1, N = !1, W;
    W = Symbol.for("react.module.reference");
    function j(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === m || N || e === E || e === c || e === f || B || e === _ || S || A || $ || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === h || e.$$typeof === w || e.$$typeof === C || e.$$typeof === n || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === W || e.getModuleId !== void 0));
    }
    function ae(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case b:
          return "Portal";
        case m:
          return "Profiler";
        case E:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return ne(r) + ".Consumer";
          case w:
            var t = e;
            return ne(t._context) + ".Provider";
          case n:
            return ae(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case y: {
            var u = e, s = u._payload, i = u._init;
            try {
              return k(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, q = 0, me, he, be, ye, Re, _e, Ee;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function Ve() {
      {
        if (q === 0) {
          me = console.log, he = console.info, be = console.warn, ye = console.error, Re = console.group, _e = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        q++;
      }
    }
    function Be() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: me
            }),
            info: M({}, e, {
              value: he
            }),
            warn: M({}, e, {
              value: be
            }),
            error: M({}, e, {
              value: ye
            }),
            group: M({}, e, {
              value: Re
            }),
            groupCollapsed: M({}, e, {
              value: _e
            }),
            groupEnd: M({}, e, {
              value: Ee
            })
          });
        }
        q < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = O.ReactCurrentDispatcher, ie;
    function X(e, r, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            ie = a && a[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var ue = !1, Z;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new Ue();
    }
    function Te(e, r) {
      if (!e || ue)
        return "";
      {
        var t = Z.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ue = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = oe.current, oe.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (L) {
              a = L;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (L) {
              a = L;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            a = L;
          }
          e();
        }
      } catch (L) {
        if (L && a && typeof L.stack == "string") {
          for (var o = L.stack.split(`
`), T = a.stack.split(`
`), d = o.length - 1, v = T.length - 1; d >= 1 && v >= 0 && o[d] !== T[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (o[d] !== T[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || o[d] !== T[v]) {
                    var P = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && Z.set(e, P), P;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ue = !1, oe.current = s, Be(), Error.prepareStackTrace = u;
      }
      var z = e ? e.displayName || e.name : "", Le = z ? X(z) : "";
      return typeof e == "function" && Z.set(e, Le), Le;
    }
    function ze(e, r, t) {
      return Te(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, qe(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case c:
          return X("Suspense");
        case f:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            return ze(e.render);
          case h:
            return Q(e.type, r, t);
          case y: {
            var a = e, u = a._payload, s = a._init;
            try {
              return Q(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Ce = {}, xe = O.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, u) {
      {
        var s = Function.call.bind(ee);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var T = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (re(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), re(null)), o instanceof Error && !(o.message in Ce) && (Ce[o.message] = !0, re(u), g("Failed %s type: %s", t, o.message), re(null));
          }
      }
    }
    var Ge = Array.isArray;
    function se(e) {
      return Ge(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Pe(e) {
      if (He(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Se(e);
    }
    var J = O.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, ke, ce;
    ce = {};
    function Ze(e) {
      if (ee.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (ee.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var t = k(J.current.type);
        ce[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(J.current.type), e.ref), ce[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          je || (je = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ke || (ke = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, a, u) {
      {
        var s, i = {}, o = null, T = null;
        t !== void 0 && (Pe(t), o = "" + t), Qe(r) && (Pe(r.key), o = "" + r.key), Ze(r) && (T = r.ref, er(r, u));
        for (s in r)
          ee.call(r, s) && !Xe.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (s in d)
            i[s] === void 0 && (i[s] = d[s]);
        }
        if (o || T) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, v), T && tr(i, v);
        }
        return ar(e, o, T, u, a, J.current, i);
      }
    }
    var le = O.ReactCurrentOwner, Oe = O.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ae() {
      {
        if (le.current) {
          var e = k(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var $e = {};
    function ir(e) {
      {
        var r = Ae();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== le.current && (a = " It was passed a child from " + k(e._owner.type) + "."), U(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), U(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            de(a) && De(a, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = I(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              de(i.value) && De(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === n || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = k(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var u = k(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            U(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function Ie(e, r, t, a, u, s) {
      {
        var i = j(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = or(u);
          T ? o += T : o += Ae();
          var d;
          e === null ? d = "null" : se(e) ? d = "array" : e !== void 0 && e.$$typeof === l ? (d = "<" + (k(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var v = nr(e, r, t, u, s);
        if (v == null)
          return v;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (a)
              if (se(P)) {
                for (var z = 0; z < P.length; z++)
                  Fe(P[z], e);
                Object.freeze && Object.freeze(P);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(P, e);
        }
        return e === R ? sr(v) : ur(v), v;
      }
    }
    function cr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var fr = lr, dr = cr;
    H.Fragment = R, H.jsx = fr, H.jsxs = dr;
  }()), H;
}
process.env.NODE_ENV === "production" ? pe.exports = gr() : pe.exports = mr();
var x = pe.exports;
const hr = (p, l, b) => {
  const [R, E] = Y(!1), [m, w] = Y(!1), [C, n] = Y(0), [c, f] = Y(), [h, y] = Y(), [_, D] = Y(), F = G(() => {
    const S = setInterval(() => {
      n((A) => A + 1);
    }, 1e3);
    y(S);
  }, [n, y]), I = G(() => {
    h != null && clearInterval(h), y(void 0);
  }, [h, y]), O = G(() => {
    h == null && navigator.mediaDevices.getUserMedia({ audio: p ?? !0 }).then((S) => {
      E(!0);
      const A = new MediaRecorder(
        S,
        b
      );
      f(A), A.start(), F(), A.addEventListener("dataavailable", ($) => {
        D($.data), A.stream.getTracks().forEach((B) => B.stop()), f(void 0);
      });
    }).catch((S) => {
      console.log(S.name, S.message, S.cause), l == null || l(S);
    });
  }, [
    h,
    E,
    f,
    F,
    D,
    l,
    b
  ]), g = G(() => {
    c == null || c.stop(), I(), n(0), E(!1), w(!1);
  }, [
    c,
    n,
    E,
    w,
    I
  ]), V = G(() => {
    m ? (w(!1), c == null || c.resume(), F()) : (w(!0), I(), c == null || c.pause());
  }, [c, w, F, I]);
  return {
    startRecording: O,
    stopRecording: g,
    togglePauseResume: V,
    recordingBlob: _,
    isRecording: R,
    isPaused: m,
    recordingTime: C,
    mediaRecorder: c
  };
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = (p) => p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ye = (...p) => p.filter((l, b, R) => !!l && R.indexOf(l) === b).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = Me(
  ({
    color: p = "currentColor",
    size: l = 24,
    strokeWidth: b = 2,
    absoluteStrokeWidth: R,
    className: E = "",
    children: m,
    iconNode: w,
    ...C
  }, n) => ve(
    "svg",
    {
      ref: n,
      ...yr,
      width: l,
      height: l,
      stroke: p,
      strokeWidth: R ? Number(b) * 24 / Number(l) : b,
      className: Ye("lucide", E),
      ...C
    },
    [
      ...w.map(([c, f]) => ve(c, f)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = (p, l) => {
  const b = Me(
    ({ className: R, ...E }, m) => ve(Rr, {
      ref: m,
      iconNode: l,
      className: Ye(`lucide-${br(p)}`, R),
      ...E
    })
  );
  return b.displayName = `${p}`, b;
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = te("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = te("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = te("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = te("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const Cr = ge.lazy(async () => {
  const { LiveAudioVisualizer: p } = await import("./react-audio-visualize.es-69216c73.js");
  return { default: p };
}), Sr = ({
  onRecordingComplete: p,
  onNotAllowedOrFound: l,
  recorderControls: b,
  audioTrackConstraints: R,
  downloadOnSavePress: E = !1,
  downloadFileExtension: m = "webm",
  showVisualizer: w = !1,
  mediaRecorderOptions: C,
  classes: n
}) => {
  const {
    startRecording: c,
    stopRecording: f,
    togglePauseResume: h,
    recordingBlob: y,
    isRecording: _,
    isPaused: D,
    recordingTime: F,
    mediaRecorder: I
  } = b ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  hr(
    R,
    l,
    C
  ), [O, g] = Y(!1), V = ($ = !0) => {
    g($), f();
  }, S = async ($) => {
    const N = (await import("./index-1c988149.js").then((k) => k.i)).createFFmpeg({ log: !1 });
    await N.load();
    const W = "input.webm", j = `output.${m}`;
    N.FS(
      "writeFile",
      W,
      new Uint8Array(await $.arrayBuffer())
    ), await N.run("-i", W, j);
    const ae = N.FS("readFile", j);
    return new Blob([ae.buffer], {
      type: `audio/${m}`
    });
  }, A = async ($) => {
    !crossOriginIsolated && m !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const B = crossOriginIsolated ? await S($) : $, N = crossOriginIsolated ? m : "webm", W = URL.createObjectURL(B), j = document.createElement("a");
    j.style.display = "none", j.href = W, j.download = `audio.${N}`, document.body.appendChild(j), j.click(), j.remove();
  };
  return vr(() => {
    (O || b) && y != null && p != null && (p(y), E && A(y));
  }, [y]), /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: `audio-recorder ${_ ? "recording" : ""} ${(n == null ? void 0 : n.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ x.jsx(
          _r,
          {
            fill: "white",
            className: `audio-recorder-mic ${(n == null ? void 0 : n.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: _ ? () => V(!1) : c,
            "data-testid": "ar_mic",
            "data-title": _ ? "Save recording" : "Start recording"
          }
        ),
        /* @__PURE__ */ x.jsxs(
          "span",
          {
            className: `audio-recorder-timer ${_ ? "" : "display-none"} ${(n == null ? void 0 : n.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(F / 60),
              ":",
              String(F % 60).padStart(2, "0")
            ]
          }
        ),
        w ? /* @__PURE__ */ x.jsx(
          "span",
          {
            className: `audio-recorder-visualizer ${_ ? "" : "display-none"}`,
            children: I && /* @__PURE__ */ x.jsx(pr, { fallback: /* @__PURE__ */ x.jsx(x.Fragment, {}), children: /* @__PURE__ */ x.jsx(
              Cr,
              {
                mediaRecorder: I,
                barWidth: 2,
                gap: 2,
                width: 140,
                height: 30,
                fftSize: 512,
                maxDecibels: -10,
                minDecibels: -80,
                smoothingTimeConstant: 0.4
              }
            ) })
          }
        ) : /* @__PURE__ */ x.jsxs(
          "span",
          {
            className: `audio-recorder-status ${_ ? "" : "display-none"} ${(n == null ? void 0 : n.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ x.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        D ? /* @__PURE__ */ x.jsx(
          wr,
          {
            fill: "white",
            className: `audio-recorder-options ${_ ? "" : "display-none"} ${(n == null ? void 0 : n.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: h,
            "data-title": D ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ) : /* @__PURE__ */ x.jsx(
          Er,
          {
            fill: "white",
            className: `audio-recorder-options ${_ ? "" : "display-none"} ${(n == null ? void 0 : n.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: h,
            "data-title": D ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ x.jsx(
          Tr,
          {
            fill: "white",
            className: `audio-recorder-options ${_ ? "" : "display-none"} ${(n == null ? void 0 : n.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => V(!1),
            "data-title": "Discard Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
export {
  Sr as AudioRecorder,
  hr as useAudioRecorder
};
