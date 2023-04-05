var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_001 = __commonJS({
  "assets/index-1bf25dd7.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e2 = m2[i];
        if (typeof e2 !== "string" && !Array.isArray(e2)) {
          for (const k2 in e2) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d2 = Object.getOwnPropertyDescriptor(e2, k2);
              if (d2) {
                Object.defineProperty(n2, k2, d2.get ? d2 : {
                  enumerable: true,
                  get: () => e2[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node2 of mutation.addedNodes) {
            if (node2.tagName === "LINK" && node2.rel === "modulepreload")
              processPreload(node2);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntimeExports = {};
    var jsxRuntime = {
      get exports() {
        return jsxRuntimeExports;
      },
      set exports(v2) {
        jsxRuntimeExports = v2;
      }
    };
    var reactJsxRuntime_production_min = {};
    var reactExports = {};
    var react = {
      get exports() {
        return reactExports;
      },
      set exports(v2) {
        reactExports = v2;
      }
    };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
    function A$2(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z$2 && a[z$2] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b2) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b2, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b2, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (null != b2)
        for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
          J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (1 === g2)
        c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
          f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a && a.defaultProps)
        for (d2 in g2 = a.defaultProps, g2)
          void 0 === c2[d2] && (c2[d2] = g2[d2]);
      return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
    }
    function N$1(a, b2) {
      return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$2;
    }
    function escape(a) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b2[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b2) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
    }
    function R$1(a, b2, e2, d2, c2) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2)
        a = null;
      var h2 = false;
      if (null === a)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l$2:
              case n$2:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
          return a2;
        })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I$1(a))
        for (var g2 = 0; g2 < a.length; g2++) {
          k2 = a[g2];
          var f2 = d2 + Q$1(k2, g2);
          h2 += R$1(k2, b2, e2, f2, c2);
        }
      else if (f2 = A$2(a), "function" === typeof f2)
        for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
          k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
      else if ("object" === k2)
        throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S$1(a, b2, e2) {
      if (null == a)
        return a;
      var d2 = [], c2 = 0;
      R$1(a, d2, "", "", function(a2) {
        return b2.call(e2, a2, c2++);
      });
      return d2;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b2 = a._result;
        b2 = b2();
        b2.then(function(b3) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b3;
        }, function(b3) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b3;
        });
        -1 === a._status && (a._status = 0, a._result = b2);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
      S$1(a, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a) {
      var b2 = 0;
      S$1(a, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$1(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$4;
    react_production_min.Profiler = r$2;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$2;
    react_production_min.Suspense = w$2;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.cloneElement = function(a, b2, e2) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
      if (null != b2) {
        void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
        void 0 !== b2.key && (c2 = "" + b2.key);
        if (a.type && a.type.defaultProps)
          var g2 = a.type.defaultProps;
        for (f2 in b2)
          J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2)
        d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l$2, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t$1, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b2 = M$1.bind(null, a);
      b2.type = a;
      return b2;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v$2, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function(a) {
      return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b2) {
      return { $$typeof: x$1, type: a, compare: void 0 === b2 ? null : b2 };
    };
    react_production_min.startTransition = function(a) {
      var b2 = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b2;
      }
    };
    react_production_min.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    react_production_min.useCallback = function(a, b2) {
      return U$1.current.useCallback(a, b2);
    };
    react_production_min.useContext = function(a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b2) {
      return U$1.current.useEffect(a, b2);
    };
    react_production_min.useId = function() {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b2, e2) {
      return U$1.current.useImperativeHandle(a, b2, e2);
    };
    react_production_min.useInsertionEffect = function(a, b2) {
      return U$1.current.useInsertionEffect(a, b2);
    };
    react_production_min.useLayoutEffect = function(a, b2) {
      return U$1.current.useLayoutEffect(a, b2);
    };
    react_production_min.useMemo = function(a, b2) {
      return U$1.current.useMemo(a, b2);
    };
    react_production_min.useReducer = function(a, b2, e2) {
      return U$1.current.useReducer(a, b2, e2);
    };
    react_production_min.useRef = function(a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b2, e2) {
      return U$1.current.useSyncExternalStore(a, b2, e2);
    };
    react_production_min.useTransition = function() {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.2.0";
    (function(module2) {
      {
        module2.exports = react_production_min;
      }
    })(react);
    const React$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const React$2 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: React$1
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
    function q$1(c2, a, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a.key && (e2 = "" + a.key);
      void 0 !== a.ref && (h2 = a.ref);
      for (b2 in a)
        m$2.call(a, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a[b2]);
      if (c2 && c2.defaultProps)
        for (b2 in a = c2.defaultProps, a)
          void 0 === d2[b2] && (d2[b2] = a[b2]);
      return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
    }
    reactJsxRuntime_production_min.Fragment = l$1;
    reactJsxRuntime_production_min.jsx = q$1;
    reactJsxRuntime_production_min.jsxs = q$1;
    (function(module2) {
      {
        module2.exports = reactJsxRuntime_production_min;
      }
    })(jsxRuntime);
    const Fragment = jsxRuntimeExports.Fragment;
    const jsx = jsxRuntimeExports.jsx;
    const jsxs = jsxRuntimeExports.jsxs;
    var client = {};
    var reactDomExports = {};
    var reactDom = {
      get exports() {
        return reactDomExports;
      },
      set exports(v2) {
        reactDomExports = v2;
      }
    };
    var reactDom_production_min = {};
    var schedulerExports = {};
    var scheduler = {
      get exports() {
        return schedulerExports;
      },
      set exports(v2) {
        schedulerExports = v2;
      }
    };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b2) {
        var c2 = a.length;
        a.push(b2);
        a:
          for (; 0 < c2; ) {
            var d2 = c2 - 1 >>> 1, e2 = a[d2];
            if (0 < g2(e2, b2))
              a[d2] = b2, a[c2] = e2, c2 = d2;
            else
              break a;
          }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length)
          return null;
        var b2 = a[0], c2 = a.pop();
        if (c2 !== b2) {
          a[0] = c2;
          a:
            for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
              var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
              if (0 > g2(C2, c2))
                n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
              else if (n2 < e2 && 0 > g2(x2, c2))
                a[d2] = x2, a[n2] = c2, d2 = n2;
              else
                break a;
            }
        }
        return b2;
      }
      function g2(a, b2) {
        var c2 = a.sortIndex - b2.sortIndex;
        return 0 !== c2 ? c2 : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h2(t2); null !== b2; ) {
          if (null === b2.callback)
            k2(t2);
          else if (b2.startTime <= a)
            k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
          else
            break;
          b2 = h2(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2)
          if (null !== h2(r2))
            A2 = true, I2(J2);
          else {
            var b2 = h2(t2);
            null !== b2 && K2(H2, b2.startTime - a);
          }
      }
      function J2(a, b2) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b2);
          for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b2);
              b2 = exports2.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
              G2(b2);
            } else
              k2(r2);
            v2 = h2(r2);
          }
          if (null !== v2)
            var w2 = true;
          else {
            var m2 = h2(t2);
            null !== m2 && K2(H2, m2.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b2 = true;
          try {
            b2 = O2(true, a);
          } finally {
            b2 ? S2() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S2;
      if ("function" === typeof F2)
        S2 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else
        S2 = function() {
          D2(R2, 0);
        };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b2) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b2);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h2(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c2 = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c2 = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b2, c2) {
        var d2 = exports2.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c2 = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    })(scheduler_production_min);
    (function(module2) {
      {
        module2.exports = scheduler_production_min;
      }
    })(scheduler);
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p$2(a) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b2) {
      ha(a, b2);
      ha(a + "Capture", b2);
    }
    function ha(a, b2) {
      ea[a] = b2;
      for (a = 0; a < b2.length; a++)
        da.add(b2[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a))
        return true;
      if (ja.call(la, a))
        return false;
      if (ka.test(a))
        return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b2, c2, d2) {
      if (null !== c2 && 0 === c2.type)
        return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (null !== c2)
            return !c2.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b2, c2, d2) {
      if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2))
        return true;
      if (d2)
        return false;
      if (null !== c2)
        switch (c2.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
      return false;
    }
    function v$1(a, b2, c2, d2, e2, f2, g2) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a;
      this.type = b2;
      this.sanitizeURL = f2;
      this.removeEmptyString = g2;
    }
    var z$1 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z$1[a] = new v$1(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b2 = a[0];
      z$1[b2] = new v$1(b2, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z$1[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z$1[a] = new v$1(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z$1[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z$1[a] = new v$1(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z$1[a] = new v$1(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z$1[a] = new v$1(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z$1[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b2 = a.replace(
        ra,
        sa
      );
      z$1[b2] = new v$1(b2, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z$1[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z$1[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z$1[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z$1.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z$1[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b2, c2, d2) {
      var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
      if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
        qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A$1 = Object.assign, La;
    function Ma(a) {
      if (void 0 === La)
        try {
          throw Error();
        } catch (c2) {
          var b2 = c2.stack.trim().match(/\n( *(at )?)/);
          La = b2 && b2[1] || "";
        }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b2) {
      if (!a || Na)
        return "";
      Na = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b2)
          if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d2 = l2;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d2 = l2;
            }
            a.call(b2.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
            h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--)
            if (e2[g2] !== f2[h2]) {
              if (1 !== g2 || 1 !== h2) {
                do
                  if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                    var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
                  }
                while (1 <= g2 && 0 <= h2);
              }
              break;
            }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c2;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a)
        return null;
      if ("function" === typeof a)
        return a.displayName || a.name || null;
      if ("string" === typeof a)
        return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a)
        switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
          case Ha:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa(a(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    function Ra(a) {
      var b2 = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b2.displayName || "Context") + ".Consumer";
        case 10:
          return (b2._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b2;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b2);
        case 8:
          return b2 === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b2)
            return b2.displayName || b2.name || null;
          if ("string" === typeof b2)
            return b2;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b2 = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
    }
    function Ua(a) {
      var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
      if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
        var e2 = c2.get, f2 = c2.set;
        Object.defineProperty(a, b2, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a2) {
          d2 = "" + a2;
          f2.call(this, a2);
        } });
        Object.defineProperty(a, b2, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a2) {
          d2 = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b2];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a)
        return false;
      var b2 = a._valueTracker;
      if (!b2)
        return true;
      var c2 = b2.getValue();
      var d2 = "";
      a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d2;
      return a !== c2 ? (b2.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a)
        return null;
      try {
        return a.activeElement || a.body;
      } catch (b2) {
        return a.body;
      }
    }
    function Ya(a, b2) {
      var c2 = b2.checked;
      return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
    }
    function Za(a, b2) {
      var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
      c2 = Sa(null != b2.value ? b2.value : c2);
      a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
    }
    function ab(a, b2) {
      b2 = b2.checked;
      null != b2 && ta(a, "checked", b2, false);
    }
    function bb(a, b2) {
      ab(a, b2);
      var c2 = Sa(b2.value), d2 = b2.type;
      if (null != c2)
        if ("number" === d2) {
          if (0 === c2 && "" === a.value || a.value != c2)
            a.value = "" + c2;
        } else
          a.value !== "" + c2 && (a.value = "" + c2);
      else if ("submit" === d2 || "reset" === d2) {
        a.removeAttribute("value");
        return;
      }
      b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
      null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
    }
    function db(a, b2, c2) {
      if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
        var d2 = b2.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
          return;
        b2 = "" + a._wrapperState.initialValue;
        c2 || b2 === a.value || (a.value = b2);
        a.defaultValue = b2;
      }
      c2 = a.name;
      "" !== c2 && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c2 && (a.name = c2);
    }
    function cb(a, b2, c2) {
      if ("number" !== b2 || Xa(a.ownerDocument) !== a)
        null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
    }
    var eb = Array.isArray;
    function fb(a, b2, c2, d2) {
      a = a.options;
      if (b2) {
        b2 = {};
        for (var e2 = 0; e2 < c2.length; e2++)
          b2["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a.length; c2++)
          e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b2 = null;
        for (e2 = 0; e2 < a.length; e2++) {
          if (a[e2].value === c2) {
            a[e2].selected = true;
            d2 && (a[e2].defaultSelected = true);
            return;
          }
          null !== b2 || a[e2].disabled || (b2 = a[e2]);
        }
        null !== b2 && (b2.selected = true);
      }
    }
    function gb(a, b2) {
      if (null != b2.dangerouslySetInnerHTML)
        throw Error(p$2(91));
      return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b2) {
      var c2 = b2.value;
      if (null == c2) {
        c2 = b2.children;
        b2 = b2.defaultValue;
        if (null != c2) {
          if (null != b2)
            throw Error(p$2(92));
          if (eb(c2)) {
            if (1 < c2.length)
              throw Error(p$2(93));
            c2 = c2[0];
          }
          b2 = c2;
        }
        null == b2 && (b2 = "");
        c2 = b2;
      }
      a._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a, b2) {
      var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
      null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
      null != d2 && (a.defaultValue = "" + d2);
    }
    function jb(a) {
      var b2 = a.textContent;
      b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b2) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b2, c2, d2, e2);
        });
      } : a;
    }(function(a, b2) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
        a.innerHTML = b2;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
        for (b2 = mb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b2.firstChild; )
          a.appendChild(b2.firstChild);
      }
    });
    function ob(a, b2) {
      if (b2) {
        var c2 = a.firstChild;
        if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
          c2.nodeValue = b2;
          return;
        }
      }
      a.textContent = b2;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b2) {
        b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b2] = pb[a];
      });
    });
    function rb(a, b2, c2) {
      return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
    }
    function sb(a, b2) {
      a = a.style;
      for (var c2 in b2)
        if (b2.hasOwnProperty(c2)) {
          var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
          "float" === c2 && (c2 = "cssFloat");
          d2 ? a.setProperty(c2, e2) : a[c2] = e2;
        }
    }
    var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b2) {
      if (b2) {
        if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
          throw Error(p$2(137, a));
        if (null != b2.dangerouslySetInnerHTML) {
          if (null != b2.children)
            throw Error(p$2(60));
          if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
            throw Error(p$2(61));
        }
        if (null != b2.style && "object" !== typeof b2.style)
          throw Error(p$2(62));
      }
    }
    function vb(a, b2) {
      if (-1 === a.indexOf("-"))
        return "string" === typeof b2.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb)
          throw Error(p$2(280));
        var b2 = a.stateNode;
        b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b2 = Ab;
        Ab = zb = null;
        Bb(a);
        if (b2)
          for (a = 0; a < b2.length; a++)
            Bb(b2[a]);
      }
    }
    function Gb(a, b2) {
      return a(b2);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b2, c2) {
      if (Ib)
        return a(b2, c2);
      Ib = true;
      try {
        return Gb(a, b2, c2);
      } finally {
        if (Ib = false, null !== zb || null !== Ab)
          Hb(), Fb();
      }
    }
    function Kb(a, b2) {
      var c2 = a.stateNode;
      if (null === c2)
        return null;
      var d2 = Db(c2);
      if (null === d2)
        return null;
      c2 = d2[b2];
      a:
        switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d2;
            break a;
          default:
            a = false;
        }
      if (a)
        return null;
      if (c2 && "function" !== typeof c2)
        throw Error(p$2(231, b2, typeof c2));
      return c2;
    }
    var Lb = false;
    if (ia)
      try {
        var Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
    function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b2.apply(c2, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else
          throw Error(p$2(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b2 = a, c2 = a;
      if (a.alternate)
        for (; b2.return; )
          b2 = b2.return;
      else {
        a = b2;
        do
          b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
        while (a);
      }
      return 3 === b2.tag ? c2 : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b2 = a.memoizedState;
        null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
        if (null !== b2)
          return b2.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a)
        throw Error(p$2(188));
    }
    function Yb(a) {
      var b2 = a.alternate;
      if (!b2) {
        b2 = Vb(a);
        if (null === b2)
          throw Error(p$2(188));
        return b2 !== a ? null : a;
      }
      for (var c2 = a, d2 = b2; ; ) {
        var e2 = c2.return;
        if (null === e2)
          break;
        var f2 = e2.alternate;
        if (null === f2) {
          d2 = e2.return;
          if (null !== d2) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f2.child) {
          for (f2 = e2.child; f2; ) {
            if (f2 === c2)
              return Xb(e2), a;
            if (f2 === d2)
              return Xb(e2), b2;
            f2 = f2.sibling;
          }
          throw Error(p$2(188));
        }
        if (c2.return !== d2.return)
          c2 = e2, d2 = f2;
        else {
          for (var g2 = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = e2;
              d2 = f2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e2;
              c2 = f2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f2.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = f2;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f2;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2)
              throw Error(p$2(189));
          }
        }
        if (c2.alternate !== d2)
          throw Error(p$2(190));
      }
      if (3 !== c2.tag)
        throw Error(p$2(188));
      return c2.stateNode.current === c2 ? a : b2;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag)
        return a;
      for (a = a.child; null !== a; ) {
        var b2 = $b(a);
        if (null !== b2)
          return b2;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot)
        try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b2) {
      var c2 = a.pendingLanes;
      if (0 === c2)
        return 0;
      var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
      if (0 !== g2) {
        var h2 = g2 & ~e2;
        0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
      } else
        g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
      if (0 === d2)
        return 0;
      if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
        return b2;
      0 !== (d2 & 4) && (d2 |= c2 & 16);
      b2 = a.entangledLanes;
      if (0 !== b2)
        for (a = a.entanglements, b2 &= d2; 0 < b2; )
          c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
      return d2;
    }
    function vc(a, b2) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b2 + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b2 + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b2) {
      for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
        if (-1 === k2) {
          if (0 === (h2 & c2) || 0 !== (h2 & d2))
            e2[g2] = vc(h2, b2);
        } else
          k2 <= b2 && (a.expiredLanes |= h2);
        f2 &= ~h2;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b2 = [], c2 = 0; 31 > c2; c2++)
        b2.push(a);
      return b2;
    }
    function Ac(a, b2, c2) {
      a.pendingLanes |= b2;
      536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b2 = 31 - oc(b2);
      a[b2] = c2;
    }
    function Bc(a, b2) {
      var c2 = a.pendingLanes & ~b2;
      a.pendingLanes = b2;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b2;
      a.mutableReadLanes &= b2;
      a.entangledLanes &= b2;
      b2 = a.entanglements;
      var d2 = a.eventTimes;
      for (a = a.expirationTimes; 0 < c2; ) {
        var e2 = 31 - oc(c2), f2 = 1 << e2;
        b2[e2] = 0;
        d2[e2] = -1;
        a[e2] = -1;
        c2 &= ~f2;
      }
    }
    function Cc(a, b2) {
      var c2 = a.entangledLanes |= b2;
      for (a = a.entanglements; c2; ) {
        var d2 = 31 - oc(c2), e2 = 1 << d2;
        e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
        c2 &= ~e2;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b2) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b2.pointerId);
      }
    }
    function Tc(a, b2, c2, d2, e2, f2) {
      if (null === a || a.nativeEvent !== f2)
        return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
      a.eventSystemFlags |= d2;
      b2 = a.targetContainers;
      null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
      return a;
    }
    function Uc(a, b2, c2, d2, e2) {
      switch (b2) {
        case "focusin":
          return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
        case "pointerover":
          var f2 = e2.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
      }
      return false;
    }
    function Vc(a) {
      var b2 = Wc(a.target);
      if (null !== b2) {
        var c2 = Vb(b2);
        if (null !== c2) {
          if (b2 = c2.tag, 13 === b2) {
            if (b2 = Wb(c2), null !== b2) {
              a.blockedOn = b2;
              Ic(a.priority, function() {
                Gc(c2);
              });
              return;
            }
          } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn)
        return false;
      for (var b2 = a.targetContainers; 0 < b2.length; ) {
        var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
        if (null === c2) {
          c2 = a.nativeEvent;
          var d2 = new c2.constructor(c2.type, c2);
          wb = d2;
          c2.target.dispatchEvent(d2);
          wb = null;
        } else
          return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
        b2.shift();
      }
      return true;
    }
    function Zc(a, b2, c2) {
      Xc(a) && c2.delete(b2);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b2) {
      a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b2(b3) {
        return ad(b3, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c2 = 1; c2 < Kc.length; c2++) {
          var d2 = Kc[c2];
          d2.blockedOn === a && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b2);
      Pc.forEach(b2);
      for (c2 = 0; c2 < Qc.length; c2++)
        d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
        Vc(c2), null === c2.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function gd(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function fd(a, b2, c2, d2) {
      if (dd) {
        var e2 = Yc(a, b2, c2, d2);
        if (null === e2)
          hd(a, b2, d2, id, c2), Sc(a, d2);
        else if (Uc(e2, a, b2, c2, d2))
          d2.stopPropagation();
        else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e2; ) {
            var f2 = Cb(e2);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b2, c2, d2);
            null === f2 && hd(a, b2, d2, id, c2);
            if (f2 === e2)
              break;
            e2 = f2;
          }
          null !== e2 && d2.stopPropagation();
        } else
          hd(a, b2, d2, null, c2);
      }
    }
    var id = null;
    function Yc(a, b2, c2, d2) {
      id = null;
      a = xb(d2);
      a = Wc(a);
      if (null !== a)
        if (b2 = Vb(a), null === b2)
          a = null;
        else if (c2 = b2.tag, 13 === c2) {
          a = Wb(b2);
          if (null !== a)
            return a;
          a = null;
        } else if (3 === c2) {
          if (b2.stateNode.current.memoizedState.isDehydrated)
            return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else
          b2 !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md)
        return md;
      var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
      for (a = 0; a < c2 && b2[a] === e2[a]; a++)
        ;
      var g2 = c2 - a;
      for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
        ;
      return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a) {
      var b2 = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b2(b3, d2, e2, f2, g2) {
        this._reactName = b3;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f2;
        this.target = g2;
        this.currentTarget = null;
        for (var c2 in a)
          a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A$1(b2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b2;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b2 = this.nativeEvent;
      return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A$1({}, ud, { key: function(a) {
      if (a.key) {
        var b2 = Md[a.key] || a.key;
        if ("Unidentified" !== b2)
          return b2;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b2) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b2.keyCode);
        case "keydown":
          return 229 !== b2.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b2) {
      switch (a) {
        case "compositionend":
          return he(b2);
        case "keypress":
          if (32 !== b2.which)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b2.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b2) {
      if (ie)
        return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
            if (b2.char && 1 < b2.char.length)
              return b2.char;
            if (b2.which)
              return String.fromCharCode(b2.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b2.locale ? null : b2.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
    }
    function ne(a, b2, c2, d2) {
      Eb(d2);
      b2 = oe(b2, "onChange");
      0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
    }
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b2 = ue(a);
      if (Wa(b2))
        return a;
    }
    function ve(a, b2) {
      if ("change" === a)
        return b2;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else
        xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b2 = [];
        ne(b2, qe, a, xb(a));
        Jb(re, b2);
      }
    }
    function Ce(a, b2, c2) {
      "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a)
        return te(qe);
    }
    function Ee(a, b2) {
      if ("click" === a)
        return te(b2);
    }
    function Fe(a, b2) {
      if ("input" === a || "change" === a)
        return te(b2);
    }
    function Ge(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b2) {
      if (He(a, b2))
        return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
        return false;
      var c2 = Object.keys(a), d2 = Object.keys(b2);
      if (c2.length !== d2.length)
        return false;
      for (d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        if (!ja.call(b2, e2) || !He(a[e2], b2[e2]))
          return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Ke(a, b2) {
      var c2 = Je(a);
      a = 0;
      for (var d2; c2; ) {
        if (3 === c2.nodeType) {
          d2 = a + c2.textContent.length;
          if (a <= b2 && d2 >= b2)
            return { node: c2, offset: b2 - a };
          a = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Je(c2);
      }
    }
    function Le(a, b2) {
      return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
        try {
          var c2 = "string" === typeof b2.contentWindow.location.href;
        } catch (d2) {
          c2 = false;
        }
        if (c2)
          a = b2.contentWindow;
        else
          break;
        b2 = Xa(a.document);
      }
      return b2;
    }
    function Ne(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
      if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
        if (null !== d2 && Ne(c2)) {
          if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2)
            c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
          else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
            d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
            !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
            e2 = Ke(c2, f2);
            var g2 = Ke(
              c2,
              d2
            );
            e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
          }
        }
        b2 = [];
        for (a = c2; a = a.parentNode; )
          1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c2.focus && c2.focus();
        for (c2 = 0; c2 < b2.length; c2++)
          a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b2, c2) {
      var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
      Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
    }
    function Ve(a, b2) {
      var c2 = {};
      c2[a.toLowerCase()] = b2.toLowerCase();
      c2["Webkit" + a] = "webkit" + b2;
      c2["Moz" + a] = "moz" + b2;
      return c2;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a])
        return Xe[a];
      if (!We[a])
        return a;
      var b2 = We[a], c2;
      for (c2 in b2)
        if (b2.hasOwnProperty(c2) && c2 in Ye)
          return Xe[a] = b2[c2];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b2) {
      df.set(a, b2);
      fa(b2, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b2, c2) {
      var d2 = a.type || "unknown-event";
      a.currentTarget = c2;
      Ub(d2, b2, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b2) {
      b2 = 0 !== (b2 & 4);
      for (var c2 = 0; c2 < a.length; c2++) {
        var d2 = a[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f2 = void 0;
          if (b2)
            for (var g2 = d2.length - 1; 0 <= g2; g2--) {
              var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
          else
            for (g2 = 0; g2 < d2.length; g2++) {
              h2 = d2[g2];
              k2 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
        }
      }
      if (Qb)
        throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b2) {
      var c2 = b2[of];
      void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
      var d2 = a + "__bubble";
      c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
    }
    function qf(a, b2, c2) {
      var d2 = 0;
      b2 && (d2 |= 4);
      pf(c2, a, d2, b2);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b3) {
          "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
        });
        var b2 = 9 === a.nodeType ? a : a.ownerDocument;
        null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
      }
    }
    function pf(a, b2, c2, d2) {
      switch (jd(b2)) {
        case 1:
          var e2 = ed;
          break;
        case 4:
          e2 = gd;
          break;
        default:
          e2 = fd;
      }
      c2 = e2.bind(null, b2, c2, a);
      e2 = void 0;
      !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
      d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
    }
    function hd(a, b2, c2, d2, e2) {
      var f2 = d2;
      if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
        a:
          for (; ; ) {
            if (null === d2)
              return;
            var g2 = d2.tag;
            if (3 === g2 || 4 === g2) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
                break;
              if (4 === g2)
                for (g2 = d2.return; null !== g2; ) {
                  var k2 = g2.tag;
                  if (3 === k2 || 4 === k2) {
                    if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                      return;
                  }
                  g2 = g2.return;
                }
              for (; null !== h2; ) {
                g2 = Wc(h2);
                if (null === g2)
                  return;
                k2 = g2.tag;
                if (5 === k2 || 6 === k2) {
                  d2 = f2 = g2;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
      Jb(function() {
        var d3 = f2, e3 = xb(c2), g3 = [];
        a: {
          var h3 = df.get(a);
          if (void 0 !== h3) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c2))
                  break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c2.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
            t2 = [];
            for (var w2 = d3, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2)
                break;
              w2 = w2.return;
            }
            0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
          }
        }
        if (0 === (b2 & 7)) {
          a: {
            h3 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
              break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                  n2 = null;
              } else
                k3 = null, n2 = d3;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a)
                  t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h3 : ue(k3);
                u2 = null == n2 ? h3 : ue(n2);
                h3 = new t2(F2, w2 + "leave", k3, c2, e3);
                h3.target = J2;
                h3.relatedTarget = u2;
                F2 = null;
                Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2)
                  b: {
                    t2 = k3;
                    x2 = n2;
                    w2 = 0;
                    for (u2 = t2; u2; u2 = vf(u2))
                      w2++;
                    u2 = 0;
                    for (F2 = x2; F2; F2 = vf(F2))
                      u2++;
                    for (; 0 < w2 - u2; )
                      t2 = vf(t2), w2--;
                    for (; 0 < u2 - w2; )
                      x2 = vf(x2), u2--;
                    for (; w2--; ) {
                      if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                        break b;
                      t2 = vf(t2);
                      x2 = vf(x2);
                    }
                    t2 = null;
                  }
                else
                  t2 = null;
                null !== k3 && wf(g3, h3, k3, t2, false);
                null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h3.type)
              var na = ve;
            else if (me(h3))
              if (we)
                na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
            else
              (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
            if (na && (na = na(a, d3))) {
              ne(g3, na, c2, e3);
              break a;
            }
            xa && xa(a, h3, d3);
            "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue(d3) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable)
                Qe = xa, Re = d3, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g3, c2, e3);
              break;
            case "selectionchange":
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g3, c2, e3);
          }
          var $a;
          if (ae)
            b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
          else
            ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c2) : ke(a, c2))
            d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
        }
        se(g3, b2);
      });
    }
    function tf(a, b2, c2) {
      return { instance: a, listener: b2, currentTarget: c2 };
    }
    function oe(a, b2) {
      for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
        var e2 = a, f2 = e2.stateNode;
        5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
        a = a.return;
      }
      return d2;
    }
    function vf(a) {
      if (null === a)
        return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b2, c2, d2, e2) {
      for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (null !== k2 && k2 === d2)
          break;
        5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
        c2 = c2.return;
      }
      0 !== g2.length && a.push({ event: b2, listeners: g2 });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b2, c2) {
      b2 = zf(b2);
      if (zf(a) !== b2 && c2)
        throw Error(p$2(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b2) {
      return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b2) {
      var c2 = b2, d2 = 0;
      do {
        var e2 = c2.nextSibling;
        a.removeChild(c2);
        if (e2 && 8 === e2.nodeType)
          if (c2 = e2.data, "/$" === c2) {
            if (0 === d2) {
              a.removeChild(e2);
              bd(b2);
              return;
            }
            d2--;
          } else
            "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
        c2 = e2;
      } while (c2);
      bd(b2);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b2 = a.nodeType;
        if (1 === b2 || 3 === b2)
          break;
        if (8 === b2) {
          b2 = a.data;
          if ("$" === b2 || "$!" === b2 || "$?" === b2)
            break;
          if ("/$" === b2)
            return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("$" === c2 || "$!" === c2 || "$?" === c2) {
            if (0 === b2)
              return a;
            b2--;
          } else
            "/$" === c2 && b2++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b2 = a[Of];
      if (b2)
        return b2;
      for (var c2 = a.parentNode; c2; ) {
        if (b2 = c2[uf] || c2[Of]) {
          c2 = b2.alternate;
          if (null !== b2.child || null !== c2 && null !== c2.child)
            for (a = Mf(a); null !== a; ) {
              if (c2 = a[Of])
                return c2;
              a = Mf(a);
            }
          return b2;
        }
        a = c2;
        c2 = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag)
        return a.stateNode;
      throw Error(p$2(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b2) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b2;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b2) {
      var c2 = a.type.contextTypes;
      if (!c2)
        return Vf;
      var d2 = a.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
        return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f2;
      for (f2 in c2)
        e2[f2] = b2[f2];
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b2, c2) {
      if (H.current !== Vf)
        throw Error(p$2(168));
      G(H, b2);
      G(Wf, c2);
    }
    function bg(a, b2, c2) {
      var d2 = a.stateNode;
      b2 = b2.childContextTypes;
      if ("function" !== typeof d2.getChildContext)
        return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2)
        if (!(e2 in b2))
          throw Error(p$2(108, Ra(a) || "Unknown", e2));
      return A$1({}, c2, d2);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b2, c2) {
      var d2 = a.stateNode;
      if (!d2)
        throw Error(p$2(169));
      c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c2);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b2 = C;
        try {
          var c2 = eg;
          for (C = 1; a < c2.length; a++) {
            var d2 = c2[a];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e2) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
        } finally {
          C = b2, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b2) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b2;
    }
    function ug(a, b2, c2) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d2 = rg;
      a = sg;
      var e2 = 32 - oc(d2) - 1;
      d2 &= ~(1 << e2);
      c2 += 1;
      var f2 = 32 - oc(b2) + e2;
      if (30 < f2) {
        var g2 = e2 - e2 % 5;
        f2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        e2 -= g2;
        rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
        sg = f2 + a;
      } else
        rg = 1 << f2 | c2 << e2 | d2, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; )
        mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; )
        qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b2) {
      var c2 = Bg(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.stateNode = b2;
      c2.return = a;
      b2 = a.deletions;
      null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
    }
    function Cg(a, b2) {
      switch (a.tag) {
        case 5:
          var c2 = a.type;
          b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
          return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
        case 6:
          return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
        case 13:
          return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b2 = yg;
        if (b2) {
          var c2 = b2;
          if (!Cg(a, b2)) {
            if (Dg(a))
              throw Error(p$2(418));
            b2 = Lf(c2.nextSibling);
            var d2 = xg;
            b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a))
            throw Error(p$2(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
        a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg)
        return false;
      if (!I)
        return Fg(a), I = true, false;
      var b2;
      (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
      if (b2 && (b2 = yg)) {
        if (Dg(a))
          throw Hg(), Error(p$2(418));
        for (; b2; )
          Ag(a, b2), b2 = Lf(b2.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a)
          throw Error(p$2(317));
        a: {
          a = a.nextSibling;
          for (b2 = 0; a; ) {
            if (8 === a.nodeType) {
              var c2 = a.data;
              if ("/$" === c2) {
                if (0 === b2) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b2--;
              } else
                "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else
        yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; )
        a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b2) {
      if (a && a.defaultProps) {
        b2 = A$1({}, b2);
        a = a.defaultProps;
        for (var c2 in a)
          void 0 === b2[c2] && (b2[c2] = a[c2]);
        return b2;
      }
      return b2;
    }
    var Mg = Uf(null), Ng = null, Og = null, Pg = null;
    function Qg() {
      Pg = Og = Ng = null;
    }
    function Rg(a) {
      var b2 = Mg.current;
      E(Mg);
      a._currentValue = b2;
    }
    function Sg(a, b2, c2) {
      for (; null !== a; ) {
        var d2 = a.alternate;
        (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
        if (a === c2)
          break;
        a = a.return;
      }
    }
    function Tg(a, b2) {
      Ng = a;
      Pg = Og = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
    }
    function Vg(a) {
      var b2 = a._currentValue;
      if (Pg !== a)
        if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
          if (null === Ng)
            throw Error(p$2(308));
          Og = a;
          Ng.dependencies = { lanes: 0, firstContext: a };
        } else
          Og = Og.next = a;
      return b2;
    }
    var Wg = null;
    function Xg(a) {
      null === Wg ? Wg = [a] : Wg.push(a);
    }
    function Yg(a, b2, c2, d2) {
      var e2 = b2.interleaved;
      null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
      b2.interleaved = c2;
      return Zg(a, d2);
    }
    function Zg(a, b2) {
      a.lanes |= b2;
      var c2 = a.alternate;
      null !== c2 && (c2.lanes |= b2);
      c2 = a;
      for (a = a.return; null !== a; )
        a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
      return 3 === c2.tag ? c2.stateNode : null;
    }
    var $g = false;
    function ah(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function bh(a, b2) {
      a = a.updateQueue;
      b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function ch(a, b2) {
      return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
    }
    function dh(a, b2, c2) {
      var d2 = a.updateQueue;
      if (null === d2)
        return null;
      d2 = d2.shared;
      if (0 !== (K & 2)) {
        var e2 = d2.pending;
        null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
        d2.pending = b2;
        return Zg(a, c2);
      }
      e2 = d2.interleaved;
      null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
      d2.interleaved = b2;
      return Zg(a, c2);
    }
    function eh(a, b2, c2) {
      b2 = b2.updateQueue;
      if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    function fh(a, b2) {
      var c2 = a.updateQueue, d2 = a.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f2 = null;
        c2 = c2.firstBaseUpdate;
        if (null !== c2) {
          do {
            var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
            c2 = c2.next;
          } while (null !== c2);
          null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
        } else
          e2 = f2 = b2;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
        a.updateQueue = c2;
        return;
      }
      a = c2.lastBaseUpdate;
      null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
      c2.lastBaseUpdate = b2;
    }
    function gh(a, b2, c2, d2) {
      var e2 = a.updateQueue;
      $g = false;
      var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (null !== h2) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        null === g2 ? f2 = l2 : g2.next = l2;
        g2 = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e2.baseState;
        g2 = 0;
        m2 = l2 = k2 = null;
        h2 = f2;
        do {
          var r2 = h2.lane, y2 = h2.eventTime;
          if ((d2 & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h2;
              r2 = b2;
              y2 = c2;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2)
                    break a;
                  q2 = A$1({}, q2, r2);
                  break a;
                case 2:
                  $g = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
          } else
            y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
          h2 = h2.next;
          if (null === h2)
            if (h2 = e2.shared.pending, null === h2)
              break;
            else
              r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = m2;
        b2 = e2.shared.interleaved;
        if (null !== b2) {
          e2 = b2;
          do
            g2 |= e2.lane, e2 = e2.next;
          while (e2 !== b2);
        } else
          null === f2 && (e2.shared.lanes = 0);
        hh |= g2;
        a.lanes = g2;
        a.memoizedState = q2;
      }
    }
    function ih(a, b2, c2) {
      a = b2.effects;
      b2.effects = null;
      if (null !== a)
        for (b2 = 0; b2 < a.length; b2++) {
          var d2 = a[b2], e2 = d2.callback;
          if (null !== e2) {
            d2.callback = null;
            d2 = c2;
            if ("function" !== typeof e2)
              throw Error(p$2(191, e2));
            e2.call(d2);
          }
        }
    }
    var jh = new aa.Component().refs;
    function kh(a, b2, c2, d2) {
      b2 = a.memoizedState;
      c2 = c2(d2, b2);
      c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
      a.memoizedState = c2;
      0 === a.lanes && (a.updateQueue.baseState = c2);
    }
    var nh = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = dh(a, f2, e2);
      null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
    }, enqueueReplaceState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
      f2.tag = 1;
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = dh(a, f2, e2);
      null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
    }, enqueueForceUpdate: function(a, b2) {
      a = a._reactInternals;
      var c2 = L(), d2 = lh(a), e2 = ch(c2, d2);
      e2.tag = 2;
      void 0 !== b2 && null !== b2 && (e2.callback = b2);
      b2 = dh(a, e2, d2);
      null !== b2 && (mh(b2, a, d2, c2), eh(b2, a, d2));
    } };
    function oh(a, b2, c2, d2, e2, f2, g2) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
    }
    function ph(a, b2, c2) {
      var d2 = false, e2 = Vf;
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
      b2 = new b2(c2, f2);
      a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
      b2.updater = nh;
      a.stateNode = b2;
      b2._reactInternals = a;
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b2;
    }
    function qh(a, b2, c2, d2) {
      a = b2.state;
      "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
      "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
      b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
    }
    function rh(a, b2, c2, d2) {
      var e2 = a.stateNode;
      e2.props = c2;
      e2.state = a.memoizedState;
      e2.refs = jh;
      ah(a);
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
      e2.state = a.memoizedState;
      f2 = b2.getDerivedStateFromProps;
      "function" === typeof f2 && (kh(a, b2, f2, c2), e2.state = a.memoizedState);
      "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c2, e2, d2), e2.state = a.memoizedState);
      "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
    }
    function sh(a, b2, c2) {
      a = c2.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (1 !== c2.tag)
              throw Error(p$2(309));
            var d2 = c2.stateNode;
          }
          if (!d2)
            throw Error(p$2(147, a));
          var e2 = d2, f2 = "" + a;
          if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
            return b2.ref;
          b2 = function(a2) {
            var b3 = e2.refs;
            b3 === jh && (b3 = e2.refs = {});
            null === a2 ? delete b3[f2] : b3[f2] = a2;
          };
          b2._stringRef = f2;
          return b2;
        }
        if ("string" !== typeof a)
          throw Error(p$2(284));
        if (!c2._owner)
          throw Error(p$2(290, a));
      }
      return a;
    }
    function th(a, b2) {
      a = Object.prototype.toString.call(b2);
      throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
    }
    function uh(a) {
      var b2 = a._init;
      return b2(a._payload);
    }
    function vh(a) {
      function b2(b3, c3) {
        if (a) {
          var d3 = b3.deletions;
          null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
        }
      }
      function c2(c3, d3) {
        if (!a)
          return null;
        for (; null !== d3; )
          b2(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a2, b3) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
          null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
        return a2;
      }
      function e2(a2, b3) {
        a2 = wh(a2, b3);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b3, c3, d3) {
        b3.index = d3;
        if (!a)
          return b3.flags |= 1048576, c3;
        d3 = b3.alternate;
        if (null !== d3)
          return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
        b3.flags |= 2;
        return c3;
      }
      function g2(b3) {
        a && null === b3.alternate && (b3.flags |= 2);
        return b3;
      }
      function h2(a2, b3, c3, d3) {
        if (null === b3 || 6 !== b3.tag)
          return b3 = xh(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function k2(a2, b3, c3, d3) {
        var f3 = c3.type;
        if (f3 === ya)
          return m2(a2, b3, c3.props.children, d3, c3.key);
        if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
          return d3 = e2(b3, c3.props), d3.ref = sh(a2, b3, c3), d3.return = a2, d3;
        d3 = yh(c3.type, c3.key, c3.props, null, a2.mode, d3);
        d3.ref = sh(a2, b3, c3);
        d3.return = a2;
        return d3;
      }
      function l2(a2, b3, c3, d3) {
        if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
          return b3 = zh(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3.children || []);
        b3.return = a2;
        return b3;
      }
      function m2(a2, b3, c3, d3, f3) {
        if (null === b3 || 7 !== b3.tag)
          return b3 = Ah(c3, a2.mode, d3, f3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function q2(a2, b3, c3) {
        if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
          return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
        if ("object" === typeof b3 && null !== b3) {
          switch (b3.$$typeof) {
            case va:
              return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
            case wa:
              return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
            case Ha:
              var d3 = b3._init;
              return q2(a2, d3(b3._payload), c3);
          }
          if (eb(b3) || Ka(b3))
            return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
          th(a2, b3);
        }
        return null;
      }
      function r2(a2, b3, c3, d3) {
        var e3 = null !== b3 ? b3.key : null;
        if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
          return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
        if ("object" === typeof c3 && null !== c3) {
          switch (c3.$$typeof) {
            case va:
              return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
            case wa:
              return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
            case Ha:
              return e3 = c3._init, r2(
                a2,
                b3,
                e3(c3._payload),
                d3
              );
          }
          if (eb(c3) || Ka(c3))
            return null !== e3 ? null : m2(a2, b3, c3, d3, null);
          th(a2, c3);
        }
        return null;
      }
      function y2(a2, b3, c3, d3, e3) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
          return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
            case wa:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
            case Ha:
              var f3 = d3._init;
              return y2(a2, b3, c3, f3(d3._payload), e3);
          }
          if (eb(d3) || Ka(d3))
            return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
          th(b3, d3);
        }
        return null;
      }
      function n2(e3, g3, h3, k3) {
        for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e3, u2, h3[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b2(e3, u2);
          g3 = f2(n3, g3, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h3.length)
          return c2(e3, u2), I && tg(e3, w2), l3;
        if (null === u2) {
          for (; w2 < h3.length; w2++)
            u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I && tg(e3, w2);
          return l3;
        }
        for (u2 = d2(e3, u2); w2 < h3.length; w2++)
          x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function(a2) {
          return b2(e3, a2);
        });
        I && tg(e3, w2);
        return l3;
      }
      function t2(e3, g3, h3, k3) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3)
          throw Error(p$2(150));
        h3 = l3.call(h3);
        if (null == h3)
          throw Error(p$2(151));
        for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e3, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b2(e3, m3);
          g3 = f2(t3, g3, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done)
          return c2(
            e3,
            m3
          ), I && tg(e3, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h3.next())
            n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I && tg(e3, w2);
          return l3;
        }
        for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
          n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function(a2) {
          return b2(e3, a2);
        });
        I && tg(e3, w2);
        return l3;
      }
      function J2(a2, d3, f3, h3) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c2(a2, l3.sibling);
                        d3 = e2(l3, f3.props.children);
                        d3.return = a2;
                        a2 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                      c2(a2, l3.sibling);
                      d3 = e2(l3, f3.props);
                      d3.ref = sh(a2, l3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    c2(a2, l3);
                    break;
                  } else
                    b2(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d3 = Ah(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d3, f3), h3.return = a2, a2 = h3);
              }
              return g2(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d3; ) {
                  if (d3.key === l3)
                    if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                      c2(a2, d3.sibling);
                      d3 = e2(d3, f3.children || []);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    } else {
                      c2(a2, d3);
                      break;
                    }
                  else
                    b2(a2, d3);
                  d3 = d3.sibling;
                }
                d3 = zh(f3, a2.mode, h3);
                d3.return = a2;
                a2 = d3;
              }
              return g2(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
          }
          if (eb(f3))
            return n2(a2, d3, f3, h3);
          if (Ka(f3))
            return t2(a2, d3, f3, h3);
          th(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = xh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
      }
      return J2;
    }
    var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
    function Hh(a) {
      if (a === Dh)
        throw Error(p$2(174));
      return a;
    }
    function Ih(a, b2) {
      G(Gh, b2);
      G(Fh, a);
      G(Eh, Dh);
      a = b2.nodeType;
      switch (a) {
        case 9:
        case 11:
          b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
      }
      E(Eh);
      G(Eh, b2);
    }
    function Jh() {
      E(Eh);
      E(Fh);
      E(Gh);
    }
    function Kh(a) {
      Hh(Gh.current);
      var b2 = Hh(Eh.current);
      var c2 = lb(b2, a.type);
      b2 !== c2 && (G(Fh, a), G(Eh, c2));
    }
    function Lh(a) {
      Fh.current === a && (E(Eh), E(Fh));
    }
    var M = Uf(0);
    function Mh(a) {
      for (var b2 = a; null !== b2; ) {
        if (13 === b2.tag) {
          var c2 = b2.memoizedState;
          if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
            return b2;
        } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
          if (0 !== (b2.flags & 128))
            return b2;
        } else if (null !== b2.child) {
          b2.child.return = b2;
          b2 = b2.child;
          continue;
        }
        if (b2 === a)
          break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a)
            return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
      return null;
    }
    var Nh = [];
    function Oh() {
      for (var a = 0; a < Nh.length; a++)
        Nh[a]._workInProgressVersionPrimary = null;
      Nh.length = 0;
    }
    var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
    function Q() {
      throw Error(p$2(321));
    }
    function Wh(a, b2) {
      if (null === b2)
        return false;
      for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
        if (!He(a[c2], b2[c2]))
          return false;
      return true;
    }
    function Xh(a, b2, c2, d2, e2, f2) {
      Rh = f2;
      N = b2;
      b2.memoizedState = null;
      b2.updateQueue = null;
      b2.lanes = 0;
      Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
      a = c2(d2, e2);
      if (Th) {
        f2 = 0;
        do {
          Th = false;
          Uh = 0;
          if (25 <= f2)
            throw Error(p$2(301));
          f2 += 1;
          P = O = null;
          b2.updateQueue = null;
          Ph.current = $h;
          a = c2(d2, e2);
        } while (Th);
      }
      Ph.current = ai;
      b2 = null !== O && null !== O.next;
      Rh = 0;
      P = O = N = null;
      Sh = false;
      if (b2)
        throw Error(p$2(300));
      return a;
    }
    function bi() {
      var a = 0 !== Uh;
      Uh = 0;
      return a;
    }
    function ci() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === P ? N.memoizedState = P = a : P = P.next = a;
      return P;
    }
    function di() {
      if (null === O) {
        var a = N.alternate;
        a = null !== a ? a.memoizedState : null;
      } else
        a = O.next;
      var b2 = null === P ? N.memoizedState : P.next;
      if (null !== b2)
        P = b2, O = a;
      else {
        if (null === a)
          throw Error(p$2(310));
        O = a;
        a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
        null === P ? N.memoizedState = P = a : P = P.next = a;
      }
      return P;
    }
    function ei(a, b2) {
      return "function" === typeof b2 ? b2(a) : b2;
    }
    function fi(a) {
      var b2 = di(), c2 = b2.queue;
      if (null === c2)
        throw Error(p$2(311));
      c2.lastRenderedReducer = a;
      var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
      if (null !== f2) {
        if (null !== e2) {
          var g2 = e2.next;
          e2.next = f2.next;
          f2.next = g2;
        }
        d2.baseQueue = e2 = f2;
        c2.pending = null;
      }
      if (null !== e2) {
        f2 = e2.next;
        d2 = d2.baseState;
        var h2 = g2 = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Rh & m2) === m2)
            null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
            N.lanes |= m2;
            hh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g2 = d2 : k2.next = h2;
        He(d2, b2.memoizedState) || (Ug = true);
        b2.memoizedState = d2;
        b2.baseState = g2;
        b2.baseQueue = k2;
        c2.lastRenderedState = d2;
      }
      a = c2.interleaved;
      if (null !== a) {
        e2 = a;
        do
          f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
        while (e2 !== a);
      } else
        null === e2 && (c2.lanes = 0);
      return [b2.memoizedState, c2.dispatch];
    }
    function gi(a) {
      var b2 = di(), c2 = b2.queue;
      if (null === c2)
        throw Error(p$2(311));
      c2.lastRenderedReducer = a;
      var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
      if (null !== e2) {
        c2.pending = null;
        var g2 = e2 = e2.next;
        do
          f2 = a(f2, g2.action), g2 = g2.next;
        while (g2 !== e2);
        He(f2, b2.memoizedState) || (Ug = true);
        b2.memoizedState = f2;
        null === b2.baseQueue && (b2.baseState = f2);
        c2.lastRenderedState = f2;
      }
      return [f2, d2];
    }
    function hi() {
    }
    function ii(a, b2) {
      var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
      f2 && (d2.memoizedState = e2, Ug = true);
      d2 = d2.queue;
      ji(ki.bind(null, c2, d2, a), [a]);
      if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
        c2.flags |= 2048;
        li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
        if (null === R)
          throw Error(p$2(349));
        0 !== (Rh & 30) || ni(c2, b2, e2);
      }
      return e2;
    }
    function ni(a, b2, c2) {
      a.flags |= 16384;
      a = { getSnapshot: b2, value: c2 };
      b2 = N.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
    }
    function mi(a, b2, c2, d2) {
      b2.value = c2;
      b2.getSnapshot = d2;
      oi(b2) && pi(a);
    }
    function ki(a, b2, c2) {
      return c2(function() {
        oi(b2) && pi(a);
      });
    }
    function oi(a) {
      var b2 = a.getSnapshot;
      a = a.value;
      try {
        var c2 = b2();
        return !He(a, c2);
      } catch (d2) {
        return true;
      }
    }
    function pi(a) {
      var b2 = Zg(a, 1);
      null !== b2 && mh(b2, a, 1, -1);
    }
    function qi(a) {
      var b2 = ci();
      "function" === typeof a && (a = a());
      b2.memoizedState = b2.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
      b2.queue = a;
      a = a.dispatch = ri.bind(null, N, a);
      return [b2.memoizedState, a];
    }
    function li(a, b2, c2, d2) {
      a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
      b2 = N.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
      return a;
    }
    function si() {
      return di().memoizedState;
    }
    function ti(a, b2, c2, d2) {
      var e2 = ci();
      N.flags |= a;
      e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
    }
    function ui(a, b2, c2, d2) {
      var e2 = di();
      d2 = void 0 === d2 ? null : d2;
      var f2 = void 0;
      if (null !== O) {
        var g2 = O.memoizedState;
        f2 = g2.destroy;
        if (null !== d2 && Wh(d2, g2.deps)) {
          e2.memoizedState = li(b2, c2, f2, d2);
          return;
        }
      }
      N.flags |= a;
      e2.memoizedState = li(1 | b2, c2, f2, d2);
    }
    function vi(a, b2) {
      return ti(8390656, 8, a, b2);
    }
    function ji(a, b2) {
      return ui(2048, 8, a, b2);
    }
    function wi(a, b2) {
      return ui(4, 2, a, b2);
    }
    function xi(a, b2) {
      return ui(4, 4, a, b2);
    }
    function yi(a, b2) {
      if ("function" === typeof b2)
        return a = a(), b2(a), function() {
          b2(null);
        };
      if (null !== b2 && void 0 !== b2)
        return a = a(), b2.current = a, function() {
          b2.current = null;
        };
    }
    function zi(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return ui(4, 4, yi.bind(null, b2, a), c2);
    }
    function Ai() {
    }
    function Bi(a, b2) {
      var c2 = di();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
        return d2[0];
      c2.memoizedState = [a, b2];
      return a;
    }
    function Ci(a, b2) {
      var c2 = di();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
        return d2[0];
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }
    function Di(a, b2, c2) {
      if (0 === (Rh & 21))
        return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
      He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a.baseState = true);
      return b2;
    }
    function Ei(a, b2) {
      var c2 = C;
      C = 0 !== c2 && 4 > c2 ? c2 : 4;
      a(true);
      var d2 = Qh.transition;
      Qh.transition = {};
      try {
        a(false), b2();
      } finally {
        C = c2, Qh.transition = d2;
      }
    }
    function Fi() {
      return di().memoizedState;
    }
    function Gi(a, b2, c2) {
      var d2 = lh(a);
      c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a))
        Ii(b2, c2);
      else if (c2 = Yg(a, b2, c2, d2), null !== c2) {
        var e2 = L();
        mh(c2, a, d2, e2);
        Ji(c2, b2, d2);
      }
    }
    function ri(a, b2, c2) {
      var d2 = lh(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a))
        Ii(b2, e2);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
          try {
            var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He(h2, g2)) {
              var k2 = b2.interleaved;
              null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
        c2 = Yg(a, b2, e2, d2);
        null !== c2 && (e2 = L(), mh(c2, a, d2, e2), Ji(c2, b2, d2));
      }
    }
    function Hi(a) {
      var b2 = a.alternate;
      return a === N || null !== b2 && b2 === N;
    }
    function Ii(a, b2) {
      Th = Sh = true;
      var c2 = a.pending;
      null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
      a.pending = b2;
    }
    function Ji(a, b2, c2) {
      if (0 !== (c2 & 4194240)) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
      ci().memoizedState = [a, void 0 === b2 ? null : b2];
      return a;
    }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return ti(
        4194308,
        4,
        yi.bind(null, b2, a),
        c2
      );
    }, useLayoutEffect: function(a, b2) {
      return ti(4194308, 4, a, b2);
    }, useInsertionEffect: function(a, b2) {
      return ti(4, 2, a, b2);
    }, useMemo: function(a, b2) {
      var c2 = ci();
      b2 = void 0 === b2 ? null : b2;
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }, useReducer: function(a, b2, c2) {
      var d2 = ci();
      b2 = void 0 !== c2 ? c2(b2) : b2;
      d2.memoizedState = d2.baseState = b2;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
      d2.queue = a;
      a = a.dispatch = Gi.bind(null, N, a);
      return [d2.memoizedState, a];
    }, useRef: function(a) {
      var b2 = ci();
      a = { current: a };
      return b2.memoizedState = a;
    }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
      return ci().memoizedState = a;
    }, useTransition: function() {
      var a = qi(false), b2 = a[0];
      a = Ei.bind(null, a[1]);
      ci().memoizedState = a;
      return [b2, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b2, c2) {
      var d2 = N, e2 = ci();
      if (I) {
        if (void 0 === c2)
          throw Error(p$2(407));
        c2 = c2();
      } else {
        c2 = b2();
        if (null === R)
          throw Error(p$2(349));
        0 !== (Rh & 30) || ni(d2, b2, c2);
      }
      e2.memoizedState = c2;
      var f2 = { value: c2, getSnapshot: b2 };
      e2.queue = f2;
      vi(ki.bind(
        null,
        d2,
        f2,
        a
      ), [a]);
      d2.flags |= 2048;
      li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
      return c2;
    }, useId: function() {
      var a = ci(), b2 = R.identifierPrefix;
      if (I) {
        var c2 = sg;
        var d2 = rg;
        c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
        b2 = ":" + b2 + "R" + c2;
        c2 = Uh++;
        0 < c2 && (b2 += "H" + c2.toString(32));
        b2 += ":";
      } else
        c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
      return a.memoizedState = b2;
    }, unstable_isNewReconciler: false }, Zh = {
      readContext: Vg,
      useCallback: Bi,
      useContext: Vg,
      useEffect: ji,
      useImperativeHandle: zi,
      useInsertionEffect: wi,
      useLayoutEffect: xi,
      useMemo: Ci,
      useReducer: fi,
      useRef: si,
      useState: function() {
        return fi(ei);
      },
      useDebugValue: Ai,
      useDeferredValue: function(a) {
        var b2 = di();
        return Di(b2, O.memoizedState, a);
      },
      useTransition: function() {
        var a = fi(ei)[0], b2 = di().memoizedState;
        return [a, b2];
      },
      useMutableSource: hi,
      useSyncExternalStore: ii,
      useId: Fi,
      unstable_isNewReconciler: false
    }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
      return gi(ei);
    }, useDebugValue: Ai, useDeferredValue: function(a) {
      var b2 = di();
      return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
    }, useTransition: function() {
      var a = gi(ei)[0], b2 = di().memoizedState;
      return [a, b2];
    }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
    function Ki(a, b2) {
      try {
        var c2 = "", d2 = b2;
        do
          c2 += Pa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f2) {
        e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b2, stack: e2, digest: null };
    }
    function Li(a, b2, c2) {
      return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
    }
    function Mi(a, b2) {
      try {
        console.error(b2.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Ni = "function" === typeof WeakMap ? WeakMap : Map;
    function Oi(a, b2, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b2.value;
      c2.callback = function() {
        Pi || (Pi = true, Qi = d2);
        Mi(a, b2);
      };
      return c2;
    }
    function Ri(a, b2, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      var d2 = a.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e2 = b2.value;
        c2.payload = function() {
          return d2(e2);
        };
        c2.callback = function() {
          Mi(a, b2);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
        Mi(a, b2);
        "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
        var c3 = b2.stack;
        this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
      });
      return c2;
    }
    function Ti(a, b2, c2) {
      var d2 = a.pingCache;
      if (null === d2) {
        d2 = a.pingCache = new Ni();
        var e2 = /* @__PURE__ */ new Set();
        d2.set(b2, e2);
      } else
        e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
      e2.has(c2) || (e2.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
    }
    function Vi(a) {
      do {
        var b2;
        if (b2 = 13 === a.tag)
          b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
        if (b2)
          return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Wi(a, b2, c2, d2, e2) {
      if (0 === (a.mode & 1))
        return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e2;
      return a;
    }
    var Xi = ua.ReactCurrentOwner, Ug = false;
    function Yi(a, b2, c2, d2) {
      b2.child = null === a ? Ch(b2, null, c2, d2) : Bh(b2, a.child, c2, d2);
    }
    function Zi(a, b2, c2, d2, e2) {
      c2 = c2.render;
      var f2 = b2.ref;
      Tg(b2, e2);
      d2 = Xh(a, b2, c2, d2, f2, e2);
      c2 = bi();
      if (null !== a && !Ug)
        return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
      I && c2 && vg(b2);
      b2.flags |= 1;
      Yi(a, b2, d2, e2);
      return b2.child;
    }
    function aj(a, b2, c2, d2, e2) {
      if (null === a) {
        var f2 = c2.type;
        if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
          return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d2, e2);
        a = yh(c2.type, null, d2, b2, b2.mode, e2);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e2)) {
        var g2 = f2.memoizedProps;
        c2 = c2.compare;
        c2 = null !== c2 ? c2 : Ie;
        if (c2(g2, d2) && a.ref === b2.ref)
          return $i(a, b2, e2);
      }
      b2.flags |= 1;
      a = wh(f2, d2);
      a.ref = b2.ref;
      a.return = b2;
      return b2.child = a;
    }
    function cj(a, b2, c2, d2, e2) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie(f2, d2) && a.ref === b2.ref)
          if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2))
            0 !== (a.flags & 131072) && (Ug = true);
          else
            return b2.lanes = a.lanes, $i(a, b2, e2);
      }
      return dj(a, b2, c2, d2, e2);
    }
    function ej(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d2.mode)
        if (0 === (b2.mode & 1))
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
        else {
          if (0 === (c2 & 1073741824))
            return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d2 = null !== f2 ? f2.baseLanes : c2;
          G(fj, gj);
          gj |= d2;
        }
      else
        null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
      Yi(a, b2, e2, c2);
      return b2.child;
    }
    function hj(a, b2) {
      var c2 = b2.ref;
      if (null === a && null !== c2 || null !== a && a.ref !== c2)
        b2.flags |= 512, b2.flags |= 2097152;
    }
    function dj(a, b2, c2, d2, e2) {
      var f2 = Zf(c2) ? Xf : H.current;
      f2 = Yf(b2, f2);
      Tg(b2, e2);
      c2 = Xh(a, b2, c2, d2, f2, e2);
      d2 = bi();
      if (null !== a && !Ug)
        return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
      I && d2 && vg(b2);
      b2.flags |= 1;
      Yi(a, b2, c2, e2);
      return b2.child;
    }
    function ij(a, b2, c2, d2, e2) {
      if (Zf(c2)) {
        var f2 = true;
        cg(b2);
      } else
        f2 = false;
      Tg(b2, e2);
      if (null === b2.stateNode)
        jj(a, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
      else if (null === a) {
        var g2 = b2.stateNode, h2 = b2.memoizedProps;
        g2.props = h2;
        var k2 = g2.context, l2 = c2.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
        var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
        $g = false;
        var r2 = b2.memoizedState;
        g2.state = r2;
        gh(b2, d2, g2, e2);
        k2 = b2.memoizedState;
        h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
      } else {
        g2 = b2.stateNode;
        bh(a, b2);
        h2 = b2.memoizedProps;
        l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
        g2.props = l2;
        q2 = b2.pendingProps;
        r2 = g2.context;
        k2 = c2.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
        var y2 = c2.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
        $g = false;
        r2 = b2.memoizedState;
        g2.state = r2;
        gh(b2, d2, g2, e2);
        var n2 = b2.memoizedState;
        h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
      }
      return kj(a, b2, c2, d2, f2, e2);
    }
    function kj(a, b2, c2, d2, e2, f2) {
      hj(a, b2);
      var g2 = 0 !== (b2.flags & 128);
      if (!d2 && !g2)
        return e2 && dg(b2, c2, false), $i(a, b2, f2);
      d2 = b2.stateNode;
      Xi.current = b2;
      var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
      b2.flags |= 1;
      null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
      b2.memoizedState = d2.state;
      e2 && dg(b2, c2, true);
      return b2.child;
    }
    function lj(a) {
      var b2 = a.stateNode;
      b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
      Ih(a, b2.containerInfo);
    }
    function mj(a, b2, c2, d2, e2) {
      Ig();
      Jg(e2);
      b2.flags |= 256;
      Yi(a, b2, c2, d2);
      return b2.child;
    }
    var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function oj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function pj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
      (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
      if (h2)
        f2 = true, b2.flags &= -129;
      else if (null === a || null !== a.memoizedState)
        e2 |= 1;
      G(M, e2 & 1);
      if (null === a) {
        Eg(b2);
        a = b2.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a))
          return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
        g2 = d2.children;
        a = d2.fallback;
        return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a = Ah(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
      }
      e2 = a.memoizedState;
      if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
        return sj(a, b2, g2, d2, h2, e2, c2);
      if (f2) {
        f2 = d2.fallback;
        g2 = b2.mode;
        e2 = a.child;
        h2 = e2.sibling;
        var k2 = { mode: "hidden", children: d2.children };
        0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
        null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
        f2.return = b2;
        d2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        d2 = f2;
        f2 = b2.child;
        g2 = a.child.memoizedState;
        g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
        f2.memoizedState = g2;
        f2.childLanes = a.childLanes & ~c2;
        b2.memoizedState = nj;
        return d2;
      }
      f2 = a.child;
      a = f2.sibling;
      d2 = wh(f2, { mode: "visible", children: d2.children });
      0 === (b2.mode & 1) && (d2.lanes = c2);
      d2.return = b2;
      d2.sibling = null;
      null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
      b2.child = d2;
      b2.memoizedState = null;
      return d2;
    }
    function rj(a, b2) {
      b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
      b2.return = a;
      return a.child = b2;
    }
    function tj(a, b2, c2, d2) {
      null !== d2 && Jg(d2);
      Bh(b2, a.child, null, c2);
      a = rj(b2, b2.pendingProps.children);
      a.flags |= 2;
      b2.memoizedState = null;
      return a;
    }
    function sj(a, b2, c2, d2, e2, f2, g2) {
      if (c2) {
        if (b2.flags & 256)
          return b2.flags &= -257, d2 = Li(Error(p$2(422))), tj(a, b2, g2, d2);
        if (null !== b2.memoizedState)
          return b2.child = a.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = Ah(f2, e2, g2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
        b2.child.memoizedState = oj(g2);
        b2.memoizedState = nj;
        return f2;
      }
      if (0 === (b2.mode & 1))
        return tj(a, b2, g2, null);
      if ("$!" === e2.data) {
        d2 = e2.nextSibling && e2.nextSibling.dataset;
        if (d2)
          var h2 = d2.dgst;
        d2 = h2;
        f2 = Error(p$2(419));
        d2 = Li(f2, d2, void 0);
        return tj(a, b2, g2, d2);
      }
      h2 = 0 !== (g2 & a.childLanes);
      if (Ug || h2) {
        d2 = R;
        if (null !== d2) {
          switch (g2 & -g2) {
            case 4:
              e2 = 2;
              break;
            case 16:
              e2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e2 = 32;
              break;
            case 536870912:
              e2 = 268435456;
              break;
            default:
              e2 = 0;
          }
          e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
          0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d2, a, e2, -1));
        }
        uj();
        d2 = Li(Error(p$2(421)));
        return tj(a, b2, g2, d2);
      }
      if ("$?" === e2.data)
        return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e2._reactRetry = b2, null;
      a = f2.treeContext;
      yg = Lf(e2.nextSibling);
      xg = b2;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
      b2 = rj(b2, d2.children);
      b2.flags |= 4096;
      return b2;
    }
    function wj(a, b2, c2) {
      a.lanes |= b2;
      var d2 = a.alternate;
      null !== d2 && (d2.lanes |= b2);
      Sg(a.return, b2, c2);
    }
    function xj(a, b2, c2, d2, e2) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
    }
    function yj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
      Yi(a, b2, d2.children, c2);
      d2 = M.current;
      if (0 !== (d2 & 2))
        d2 = d2 & 1 | 2, b2.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128))
          a:
            for (a = b2.child; null !== a; ) {
              if (13 === a.tag)
                null !== a.memoizedState && wj(a, c2, b2);
              else if (19 === a.tag)
                wj(a, c2, b2);
              else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b2)
                break a;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === b2)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d2 &= 1;
      }
      G(M, d2);
      if (0 === (b2.mode & 1))
        b2.memoizedState = null;
      else
        switch (e2) {
          case "forwards":
            c2 = b2.child;
            for (e2 = null; null !== c2; )
              a = c2.alternate, null !== a && null === Mh(a) && (e2 = c2), c2 = c2.sibling;
            c2 = e2;
            null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
            xj(b2, false, e2, c2, f2);
            break;
          case "backwards":
            c2 = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Mh(a)) {
                b2.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c2;
              c2 = e2;
              e2 = a;
            }
            xj(b2, true, c2, null, f2);
            break;
          case "together":
            xj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
      return b2.child;
    }
    function jj(a, b2) {
      0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
    }
    function $i(a, b2, c2) {
      null !== a && (b2.dependencies = a.dependencies);
      hh |= b2.lanes;
      if (0 === (c2 & b2.childLanes))
        return null;
      if (null !== a && b2.child !== a.child)
        throw Error(p$2(153));
      if (null !== b2.child) {
        a = b2.child;
        c2 = wh(a, a.pendingProps);
        b2.child = c2;
        for (c2.return = b2; null !== a.sibling; )
          a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
        c2.sibling = null;
      }
      return b2.child;
    }
    function zj(a, b2, c2) {
      switch (b2.tag) {
        case 3:
          lj(b2);
          Ig();
          break;
        case 5:
          Kh(b2);
          break;
        case 1:
          Zf(b2.type) && cg(b2);
          break;
        case 4:
          Ih(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b2.type._context, e2 = b2.memoizedProps.value;
          G(Mg, d2._currentValue);
          d2._currentValue = e2;
          break;
        case 13:
          d2 = b2.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated)
              return G(M, M.current & 1), b2.flags |= 128, null;
            if (0 !== (c2 & b2.child.childLanes))
              return pj(a, b2, c2);
            G(M, M.current & 1);
            a = $i(a, b2, c2);
            return null !== a ? a.sibling : null;
          }
          G(M, M.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d2)
              return yj(a, b2, c2);
            b2.flags |= 128;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          G(M, M.current);
          if (d2)
            break;
          else
            return null;
        case 22:
        case 23:
          return b2.lanes = 0, ej(a, b2, c2);
      }
      return $i(a, b2, c2);
    }
    var Aj, Bj, Cj, Dj;
    Aj = function(a, b2) {
      for (var c2 = b2.child; null !== c2; ) {
        if (5 === c2.tag || 6 === c2.tag)
          a.appendChild(c2.stateNode);
        else if (4 !== c2.tag && null !== c2.child) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2)
          break;
        for (; null === c2.sibling; ) {
          if (null === c2.return || c2.return === b2)
            return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Bj = function() {
    };
    Cj = function(a, b2, c2, d2) {
      var e2 = a.memoizedProps;
      if (e2 !== d2) {
        a = b2.stateNode;
        Hh(Eh.current);
        var f2 = null;
        switch (c2) {
          case "input":
            e2 = Ya(a, e2);
            d2 = Ya(a, d2);
            f2 = [];
            break;
          case "select":
            e2 = A$1({}, e2, { value: void 0 });
            d2 = A$1({}, d2, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e2 = gb(a, e2);
            d2 = gb(a, d2);
            f2 = [];
            break;
          default:
            "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
        }
        ub(c2, d2);
        var g2;
        c2 = null;
        for (l2 in e2)
          if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
            if ("style" === l2) {
              var h2 = e2[l2];
              for (g2 in h2)
                h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = null != e2 ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
            if ("style" === l2)
              if (h2) {
                for (g2 in h2)
                  !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
                for (g2 in k2)
                  k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
              } else
                c2 || (f2 || (f2 = []), f2.push(
                  l2,
                  c2
                )), c2 = k2;
            else
              "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c2 && (f2 = f2 || []).push("style", c2);
        var l2 = f2;
        if (b2.updateQueue = l2)
          b2.flags |= 4;
      }
    };
    Dj = function(a, b2, c2, d2) {
      c2 !== d2 && (b2.flags |= 4);
    };
    function Ej(a, b2) {
      if (!I)
        switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c2 = null; null !== b2; )
              null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
            null === c2 ? a.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a.tail;
            for (var d2 = null; null !== c2; )
              null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
            null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
        }
    }
    function S(a) {
      var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
      if (b2)
        for (var e2 = a.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
      else
        for (e2 = a.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
      a.subtreeFlags |= d2;
      a.childLanes = c2;
      return b2;
    }
    function Fj(a, b2, c2) {
      var d2 = b2.pendingProps;
      wg(b2);
      switch (b2.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b2), null;
        case 1:
          return Zf(b2.type) && $f(), S(b2), null;
        case 3:
          d2 = b2.stateNode;
          Jh();
          E(Wf);
          E(H);
          Oh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a || null === a.child)
            Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
          Bj(a, b2);
          S(b2);
          return null;
        case 5:
          Lh(b2);
          var e2 = Hh(Gh.current);
          c2 = b2.type;
          if (null !== a && null != b2.stateNode)
            Cj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b2.stateNode)
                throw Error(p$2(166));
              S(b2);
              return null;
            }
            a = Hh(Eh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.type;
              var f2 = b2.memoizedProps;
              d2[Of] = b2;
              d2[Pf] = f2;
              a = 0 !== (b2.mode & 1);
              switch (c2) {
                case "dialog":
                  D("cancel", d2);
                  D("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++)
                    D(lf[e2], d2);
                  break;
                case "source":
                  D("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d2
                  );
                  D("load", d2);
                  break;
                case "details":
                  D("toggle", d2);
                  break;
                case "input":
                  Za(d2, f2);
                  D("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f2), D("invalid", d2);
              }
              ub(c2, f2);
              e2 = null;
              for (var g2 in f2)
                if (f2.hasOwnProperty(g2)) {
                  var h2 = f2[g2];
                  "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d2.textContent,
                    h2,
                    a
                  ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
                }
              switch (c2) {
                case "input":
                  Va(d2);
                  db(d2, f2, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d2.onclick = Bf);
              }
              d2 = e2;
              b2.updateQueue = d2;
              null !== d2 && (b2.flags |= 4);
            } else {
              g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
              a[Of] = b2;
              a[Pf] = d2;
              Aj(a, b2, false, false);
              b2.stateNode = a;
              a: {
                g2 = vb(c2, d2);
                switch (c2) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e2 = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e2 = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++)
                      D(lf[e2], a);
                    e2 = d2;
                    break;
                  case "source":
                    D("error", a);
                    e2 = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e2 = d2;
                    break;
                  case "details":
                    D("toggle", a);
                    e2 = d2;
                    break;
                  case "input":
                    Za(a, d2);
                    e2 = Ya(a, d2);
                    D("invalid", a);
                    break;
                  case "option":
                    e2 = d2;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d2.multiple };
                    e2 = A$1({}, d2, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d2);
                    e2 = gb(a, d2);
                    D("invalid", a);
                    break;
                  default:
                    e2 = d2;
                }
                ub(c2, e2);
                h2 = e2;
                for (f2 in h2)
                  if (h2.hasOwnProperty(f2)) {
                    var k2 = h2[f2];
                    "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
                  }
                switch (c2) {
                  case "input":
                    Va(a);
                    db(a, d2, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a.multiple = !!d2.multiple;
                    f2 = d2.value;
                    null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                      a,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e2.onClick && (a.onclick = Bf);
                }
                switch (c2) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b2.flags |= 4);
            }
            null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          }
          S(b2);
          return null;
        case 6:
          if (a && null != b2.stateNode)
            Dj(a, b2, a.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b2.stateNode)
              throw Error(p$2(166));
            c2 = Hh(Gh.current);
            Hh(Eh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.memoizedProps;
              d2[Of] = b2;
              if (f2 = d2.nodeValue !== c2) {
                if (a = xg, null !== a)
                  switch (a.tag) {
                    case 3:
                      Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  }
              }
              f2 && (b2.flags |= 4);
            } else
              d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
          }
          S(b2);
          return null;
        case 13:
          E(M);
          d2 = b2.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
              Hg(), Ig(), b2.flags |= 98560, f2 = false;
            else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
              if (null === a) {
                if (!f2)
                  throw Error(p$2(318));
                f2 = b2.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2)
                  throw Error(p$2(317));
                f2[Of] = b2;
              } else
                Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
              S(b2);
              f2 = false;
            } else
              null !== zg && (Gj(zg), zg = null), f2 = true;
            if (!f2)
              return b2.flags & 65536 ? b2 : null;
          }
          if (0 !== (b2.flags & 128))
            return b2.lanes = c2, b2;
          d2 = null !== d2;
          d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
          null !== b2.updateQueue && (b2.flags |= 4);
          S(b2);
          return null;
        case 4:
          return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
        case 10:
          return Rg(b2.type._context), S(b2), null;
        case 17:
          return Zf(b2.type) && $f(), S(b2), null;
        case 19:
          E(M);
          f2 = b2.memoizedState;
          if (null === f2)
            return S(b2), null;
          d2 = 0 !== (b2.flags & 128);
          g2 = f2.rendering;
          if (null === g2)
            if (d2)
              Ej(f2, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128))
                for (a = b2.child; null !== a; ) {
                  g2 = Mh(a);
                  if (null !== g2) {
                    b2.flags |= 128;
                    Ej(f2, false);
                    d2 = g2.updateQueue;
                    null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                    b2.subtreeFlags = 0;
                    d2 = c2;
                    for (c2 = b2.child; null !== c2; )
                      f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                    G(M, M.current & 1 | 2);
                    return b2.child;
                  }
                  a = a.sibling;
                }
              null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
            }
          else {
            if (!d2)
              if (a = Mh(g2), null !== a) {
                if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
                  return S(b2), null;
              } else
                2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
            f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
          }
          if (null !== f2.tail)
            return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d2 ? c2 & 1 | 2 : c2 & 1), b2;
          S(b2);
          return null;
        case 22:
        case 23:
          return Ij(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p$2(156, b2.tag));
    }
    function Jj(a, b2) {
      wg(b2);
      switch (b2.tag) {
        case 1:
          return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 3:
          return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
        case 5:
          return Lh(b2), null;
        case 13:
          E(M);
          a = b2.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b2.alternate)
              throw Error(p$2(340));
            Ig();
          }
          a = b2.flags;
          return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 19:
          return E(M), null;
        case 4:
          return Jh(), null;
        case 10:
          return Rg(b2.type._context), null;
        case 22:
        case 23:
          return Ij(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Mj(a, b2) {
      var c2 = a.ref;
      if (null !== c2)
        if ("function" === typeof c2)
          try {
            c2(null);
          } catch (d2) {
            W(a, b2, d2);
          }
        else
          c2.current = null;
    }
    function Nj(a, b2, c2) {
      try {
        c2();
      } catch (d2) {
        W(a, b2, d2);
      }
    }
    var Oj = false;
    function Pj(a, b2) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a)
          var c2 = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
            var d2 = c2.getSelection && c2.getSelection();
            if (d2 && 0 !== d2.rangeCount) {
              c2 = d2.anchorNode;
              var e2 = d2.anchorOffset, f2 = d2.focusNode;
              d2 = d2.focusOffset;
              try {
                c2.nodeType, f2.nodeType;
              } catch (F2) {
                c2 = null;
                break a;
              }
              var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
              b:
                for (; ; ) {
                  for (var y2; ; ) {
                    q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                    q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                    3 === q2.nodeType && (g2 += q2.nodeValue.length);
                    if (null === (y2 = q2.firstChild))
                      break;
                    r2 = q2;
                    q2 = y2;
                  }
                  for (; ; ) {
                    if (q2 === a)
                      break b;
                    r2 === c2 && ++l2 === e2 && (h2 = g2);
                    r2 === f2 && ++m2 === d2 && (k2 = g2);
                    if (null !== (y2 = q2.nextSibling))
                      break;
                    q2 = r2;
                    r2 = q2.parentNode;
                  }
                  q2 = y2;
                }
              c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
            } else
              c2 = null;
          }
        c2 = c2 || { start: 0, end: 0 };
      } else
        c2 = null;
      Df = { focusedElem: a, selectionRange: c2 };
      dd = false;
      for (V = b2; null !== V; )
        if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
          a.return = b2, V = a;
        else
          for (; null !== V; ) {
            b2 = V;
            try {
              var n2 = b2.alternate;
              if (0 !== (b2.flags & 1024))
                switch (b2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== n2) {
                      var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                      x2.__reactInternalSnapshotBeforeUpdate = w2;
                    }
                    break;
                  case 3:
                    var u2 = b2.stateNode.containerInfo;
                    1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p$2(163));
                }
            } catch (F2) {
              W(b2, b2.return, F2);
            }
            a = b2.sibling;
            if (null !== a) {
              a.return = b2.return;
              V = a;
              break;
            }
            V = b2.return;
          }
      n2 = Oj;
      Oj = false;
      return n2;
    }
    function Qj(a, b2, c2) {
      var d2 = b2.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e2 = d2 = d2.next;
        do {
          if ((e2.tag & a) === a) {
            var f2 = e2.destroy;
            e2.destroy = void 0;
            void 0 !== f2 && Nj(b2, c2, f2);
          }
          e2 = e2.next;
        } while (e2 !== d2);
      }
    }
    function Rj(a, b2) {
      b2 = b2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        var c2 = b2 = b2.next;
        do {
          if ((c2.tag & a) === a) {
            var d2 = c2.create;
            c2.destroy = d2();
          }
          c2 = c2.next;
        } while (c2 !== b2);
      }
    }
    function Sj(a) {
      var b2 = a.ref;
      if (null !== b2) {
        var c2 = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c2;
            break;
          default:
            a = c2;
        }
        "function" === typeof b2 ? b2(a) : b2.current = a;
      }
    }
    function Tj(a) {
      var b2 = a.alternate;
      null !== b2 && (a.alternate = null, Tj(b2));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Uj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Vj(a) {
      a:
        for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Uj(a.return))
              return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2)
              continue a;
            if (null === a.child || 4 === a.tag)
              continue a;
            else
              a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2))
            return a.stateNode;
        }
    }
    function Wj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2)
        a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
      else if (4 !== d2 && (a = a.child, null !== a))
        for (Wj(a, b2, c2), a = a.sibling; null !== a; )
          Wj(a, b2, c2), a = a.sibling;
    }
    function Xj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2)
        a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
      else if (4 !== d2 && (a = a.child, null !== a))
        for (Xj(a, b2, c2), a = a.sibling; null !== a; )
          Xj(a, b2, c2), a = a.sibling;
    }
    var X = null, Yj = false;
    function Zj(a, b2, c2) {
      for (c2 = c2.child; null !== c2; )
        ak(a, b2, c2), c2 = c2.sibling;
    }
    function ak(a, b2, c2) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount)
        try {
          lc.onCommitFiberUnmount(kc, c2);
        } catch (h2) {
        }
      switch (c2.tag) {
        case 5:
          U || Mj(c2, b2);
        case 6:
          var d2 = X, e2 = Yj;
          X = null;
          Zj(a, b2, c2);
          X = d2;
          Yj = e2;
          null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
          break;
        case 18:
          null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
          break;
        case 4:
          d2 = X;
          e2 = Yj;
          X = c2.stateNode.containerInfo;
          Yj = true;
          Zj(a, b2, c2);
          X = d2;
          Yj = e2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e2 = d2 = d2.next;
            do {
              var f2 = e2, g2 = f2.destroy;
              f2 = f2.tag;
              void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
              e2 = e2.next;
            } while (e2 !== d2);
          }
          Zj(a, b2, c2);
          break;
        case 1:
          if (!U && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
            try {
              d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
            } catch (h2) {
              W(c2, b2, h2);
            }
          Zj(a, b2, c2);
          break;
        case 21:
          Zj(a, b2, c2);
          break;
        case 22:
          c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Zj(a, b2, c2), U = d2) : Zj(a, b2, c2);
          break;
        default:
          Zj(a, b2, c2);
      }
    }
    function bk(a) {
      var b2 = a.updateQueue;
      if (null !== b2) {
        a.updateQueue = null;
        var c2 = a.stateNode;
        null === c2 && (c2 = a.stateNode = new Lj());
        b2.forEach(function(b3) {
          var d2 = ck.bind(null, a, b3);
          c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
        });
      }
    }
    function dk(a, b2) {
      var c2 = b2.deletions;
      if (null !== c2)
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2];
          try {
            var f2 = a, g2 = b2, h2 = g2;
            a:
              for (; null !== h2; ) {
                switch (h2.tag) {
                  case 5:
                    X = h2.stateNode;
                    Yj = false;
                    break a;
                  case 3:
                    X = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                  case 4:
                    X = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                }
                h2 = h2.return;
              }
            if (null === X)
              throw Error(p$2(160));
            ak(f2, g2, e2);
            X = null;
            Yj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W(e2, b2, l2);
          }
        }
      if (b2.subtreeFlags & 12854)
        for (b2 = b2.child; null !== b2; )
          ek(b2, a), b2 = b2.sibling;
    }
    function ek(a, b2) {
      var c2 = a.alternate, d2 = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dk(b2, a);
          fk(a);
          if (d2 & 4) {
            try {
              Qj(3, a, a.return), Rj(3, a);
            } catch (t2) {
              W(a, a.return, t2);
            }
            try {
              Qj(5, a, a.return);
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 1:
          dk(b2, a);
          fk(a);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          break;
        case 5:
          dk(b2, a);
          fk(a);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          if (a.flags & 32) {
            var e2 = a.stateNode;
            try {
              ob(e2, "");
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
            var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2)
              try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g2);
                var l2 = vb(h2, f2);
                for (g2 = 0; g2 < k2.length; g2 += 2) {
                  var m2 = k2[g2], q2 = k2[g2 + 1];
                  "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r2 = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t2) {
                W(a, a.return, t2);
              }
          }
          break;
        case 6:
          dk(b2, a);
          fk(a);
          if (d2 & 4) {
            if (null === a.stateNode)
              throw Error(p$2(162));
            e2 = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e2.nodeValue = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 3:
          dk(b2, a);
          fk(a);
          if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
            try {
              bd(b2.containerInfo);
            } catch (t2) {
              W(a, a.return, t2);
            }
          break;
        case 4:
          dk(b2, a);
          fk(a);
          break;
        case 13:
          dk(b2, a);
          fk(a);
          e2 = a.child;
          e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
          d2 & 4 && bk(a);
          break;
        case 22:
          m2 = null !== c2 && null !== c2.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a), U = l2) : dk(b2, a);
          fk(a);
          if (d2 & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
              for (V = a, m2 = a.child; null !== m2; ) {
                for (q2 = V = m2; null !== V; ) {
                  r2 = V;
                  y2 = r2.child;
                  switch (r2.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Qj(4, r2, r2.return);
                      break;
                    case 1:
                      Mj(r2, r2.return);
                      var n2 = r2.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d2 = r2;
                        c2 = r2.return;
                        try {
                          b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                        } catch (t2) {
                          W(d2, c2, t2);
                        }
                      }
                      break;
                    case 5:
                      Mj(r2, r2.return);
                      break;
                    case 22:
                      if (null !== r2.memoizedState) {
                        hk(q2);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
                }
                m2 = m2.sibling;
              }
            a:
              for (m2 = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m2) {
                    m2 = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m2)
                    try {
                      q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a)
                  break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a)
                    break a;
                  m2 === q2 && (m2 = null);
                  q2 = q2.return;
                }
                m2 === q2 && (m2 = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
          }
          break;
        case 19:
          dk(b2, a);
          fk(a);
          d2 & 4 && bk(a);
          break;
        case 21:
          break;
        default:
          dk(
            b2,
            a
          ), fk(a);
      }
    }
    function fk(a) {
      var b2 = a.flags;
      if (b2 & 2) {
        try {
          a: {
            for (var c2 = a.return; null !== c2; ) {
              if (Uj(c2)) {
                var d2 = c2;
                break a;
              }
              c2 = c2.return;
            }
            throw Error(p$2(160));
          }
          switch (d2.tag) {
            case 5:
              var e2 = d2.stateNode;
              d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
              var f2 = Vj(a);
              Xj(a, f2, e2);
              break;
            case 3:
            case 4:
              var g2 = d2.stateNode.containerInfo, h2 = Vj(a);
              Wj(a, h2, g2);
              break;
            default:
              throw Error(p$2(161));
          }
        } catch (k2) {
          W(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b2 & 4096 && (a.flags &= -4097);
    }
    function ik(a, b2, c2) {
      V = a;
      jk(a);
    }
    function jk(a, b2, c2) {
      for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
        var e2 = V, f2 = e2.child;
        if (22 === e2.tag && d2) {
          var g2 = null !== e2.memoizedState || Kj;
          if (!g2) {
            var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
            h2 = Kj;
            var l2 = U;
            Kj = g2;
            if ((U = k2) && !l2)
              for (V = e2; null !== V; )
                g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
            for (; null !== f2; )
              V = f2, jk(f2), f2 = f2.sibling;
            V = e2;
            Kj = h2;
            U = l2;
          }
          lk(a);
        } else
          0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
      }
    }
    function lk(a) {
      for (; null !== V; ) {
        var b2 = V;
        if (0 !== (b2.flags & 8772)) {
          var c2 = b2.alternate;
          try {
            if (0 !== (b2.flags & 8772))
              switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U || Rj(5, b2);
                  break;
                case 1:
                  var d2 = b2.stateNode;
                  if (b2.flags & 4 && !U)
                    if (null === c2)
                      d2.componentDidMount();
                    else {
                      var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                      d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f2 = b2.updateQueue;
                  null !== f2 && ih(b2, f2, d2);
                  break;
                case 3:
                  var g2 = b2.updateQueue;
                  if (null !== g2) {
                    c2 = null;
                    if (null !== b2.child)
                      switch (b2.child.tag) {
                        case 5:
                          c2 = b2.child.stateNode;
                          break;
                        case 1:
                          c2 = b2.child.stateNode;
                      }
                    ih(b2, g2, c2);
                  }
                  break;
                case 5:
                  var h2 = b2.stateNode;
                  if (null === c2 && b2.flags & 4) {
                    c2 = h2;
                    var k2 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c2.focus();
                        break;
                      case "img":
                        k2.src && (c2.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q2 = m2.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p$2(163));
              }
            U || b2.flags & 512 && Sj(b2);
          } catch (r2) {
            W(b2, b2.return, r2);
          }
        }
        if (b2 === a) {
          V = null;
          break;
        }
        c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V = c2;
          break;
        }
        V = b2.return;
      }
    }
    function hk(a) {
      for (; null !== V; ) {
        var b2 = V;
        if (b2 === a) {
          V = null;
          break;
        }
        var c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V = c2;
          break;
        }
        V = b2.return;
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b2 = V;
        try {
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              var c2 = b2.return;
              try {
                Rj(4, b2);
              } catch (k2) {
                W(b2, c2, k2);
              }
              break;
            case 1:
              var d2 = b2.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e2 = b2.return;
                try {
                  d2.componentDidMount();
                } catch (k2) {
                  W(b2, e2, k2);
                }
              }
              var f2 = b2.return;
              try {
                Sj(b2);
              } catch (k2) {
                W(b2, f2, k2);
              }
              break;
            case 5:
              var g2 = b2.return;
              try {
                Sj(b2);
              } catch (k2) {
                W(b2, g2, k2);
              }
          }
        } catch (k2) {
          W(b2, b2.return, k2);
        }
        if (b2 === a) {
          V = null;
          break;
        }
        var h2 = b2.sibling;
        if (null !== h2) {
          h2.return = b2.return;
          V = h2;
          break;
        }
        V = b2.return;
      }
    }
    var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
    function L() {
      return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
    }
    function lh(a) {
      if (0 === (a.mode & 1))
        return 1;
      if (0 !== (K & 2) && 0 !== Z)
        return Z & -Z;
      if (null !== Kg.transition)
        return 0 === Ck && (Ck = yc()), Ck;
      a = C;
      if (0 !== a)
        return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function mh(a, b2, c2, d2) {
      if (50 < zk)
        throw zk = 0, Ak = null, Error(p$2(185));
      Ac(a, c2, d2);
      if (0 === (K & 2) || a !== R)
        a === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a, Z)), Ek(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
    }
    function Ek(a, b2) {
      var c2 = a.callbackNode;
      wc(a, b2);
      var d2 = uc(a, a === R ? Z : 0);
      if (0 === d2)
        null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
      else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
        null != c2 && bc(c2);
        if (1 === b2)
          0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c2 = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c2 = fc;
              break;
            case 4:
              c2 = gc;
              break;
            case 16:
              c2 = hc;
              break;
            case 536870912:
              c2 = jc;
              break;
            default:
              c2 = hc;
          }
          c2 = Gk(c2, Hk.bind(null, a));
        }
        a.callbackPriority = b2;
        a.callbackNode = c2;
      }
    }
    function Hk(a, b2) {
      Bk = -1;
      Ck = 0;
      if (0 !== (K & 6))
        throw Error(p$2(327));
      var c2 = a.callbackNode;
      if (Ik() && a.callbackNode !== c2)
        return null;
      var d2 = uc(a, a === R ? Z : 0);
      if (0 === d2)
        return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2)
        b2 = Jk(a, d2);
      else {
        b2 = d2;
        var e2 = K;
        K |= 2;
        var f2 = Kk();
        if (R !== a || Z !== b2)
          vk = null, Hj = B() + 500, Lk(a, b2);
        do
          try {
            Mk();
            break;
          } catch (h2) {
            Nk(a, h2);
          }
        while (1);
        Qg();
        nk.current = f2;
        K = e2;
        null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
      }
      if (0 !== b2) {
        2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Ok(a, e2)));
        if (1 === b2)
          throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
        if (6 === b2)
          Dk(a, d2);
        else {
          e2 = a.current.alternate;
          if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Ok(a, f2))), 1 === b2))
            throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
          a.finishedWork = e2;
          a.finishedLanes = d2;
          switch (b2) {
            case 0:
            case 1:
              throw Error(p$2(345));
            case 2:
              Qk(a, uk, vk);
              break;
            case 3:
              Dk(a, d2);
              if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
                if (0 !== uc(a, 0))
                  break;
                e2 = a.suspendedLanes;
                if ((e2 & d2) !== d2) {
                  L();
                  a.pingedLanes |= a.suspendedLanes & e2;
                  break;
                }
                a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
                break;
              }
              Qk(a, uk, vk);
              break;
            case 4:
              Dk(a, d2);
              if ((d2 & 4194240) === d2)
                break;
              b2 = a.eventTimes;
              for (e2 = -1; 0 < d2; ) {
                var g2 = 31 - oc(d2);
                f2 = 1 << g2;
                g2 = b2[g2];
                g2 > e2 && (e2 = g2);
                d2 &= ~f2;
              }
              d2 = e2;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
              if (10 < d2) {
                a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d2);
                break;
              }
              Qk(a, uk, vk);
              break;
            case 5:
              Qk(a, uk, vk);
              break;
            default:
              throw Error(p$2(329));
          }
        }
      }
      Ek(a, B());
      return a.callbackNode === c2 ? Hk.bind(null, a) : null;
    }
    function Ok(a, b2) {
      var c2 = tk;
      a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
      a = Jk(a, b2);
      2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
      return a;
    }
    function Gj(a) {
      null === uk ? uk = a : uk.push.apply(uk, a);
    }
    function Pk(a) {
      for (var b2 = a; ; ) {
        if (b2.flags & 16384) {
          var c2 = b2.updateQueue;
          if (null !== c2 && (c2 = c2.stores, null !== c2))
            for (var d2 = 0; d2 < c2.length; d2++) {
              var e2 = c2[d2], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He(f2(), e2))
                  return false;
              } catch (g2) {
                return false;
              }
            }
        }
        c2 = b2.child;
        if (b2.subtreeFlags & 16384 && null !== c2)
          c2.return = b2, b2 = c2;
        else {
          if (b2 === a)
            break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a)
              return true;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
      }
      return true;
    }
    function Dk(a, b2) {
      b2 &= ~sk;
      b2 &= ~rk;
      a.suspendedLanes |= b2;
      a.pingedLanes &= ~b2;
      for (a = a.expirationTimes; 0 < b2; ) {
        var c2 = 31 - oc(b2), d2 = 1 << c2;
        a[c2] = -1;
        b2 &= ~d2;
      }
    }
    function Fk(a) {
      if (0 !== (K & 6))
        throw Error(p$2(327));
      Ik();
      var b2 = uc(a, 0);
      if (0 === (b2 & 1))
        return Ek(a, B()), null;
      var c2 = Jk(a, b2);
      if (0 !== a.tag && 2 === c2) {
        var d2 = xc(a);
        0 !== d2 && (b2 = d2, c2 = Ok(a, d2));
      }
      if (1 === c2)
        throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c2;
      if (6 === c2)
        throw Error(p$2(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b2;
      Qk(a, uk, vk);
      Ek(a, B());
      return null;
    }
    function Rk(a, b2) {
      var c2 = K;
      K |= 1;
      try {
        return a(b2);
      } finally {
        K = c2, 0 === K && (Hj = B() + 500, fg && jg());
      }
    }
    function Sk(a) {
      null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
      var b2 = K;
      K |= 1;
      var c2 = pk.transition, d2 = C;
      try {
        if (pk.transition = null, C = 1, a)
          return a();
      } finally {
        C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
      }
    }
    function Ij() {
      gj = fj.current;
      E(fj);
    }
    function Lk(a, b2) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c2 = a.timeoutHandle;
      -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
      if (null !== Y)
        for (c2 = Y.return; null !== c2; ) {
          var d2 = c2;
          wg(d2);
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              null !== d2 && void 0 !== d2 && $f();
              break;
            case 3:
              Jh();
              E(Wf);
              E(H);
              Oh();
              break;
            case 5:
              Lh(d2);
              break;
            case 4:
              Jh();
              break;
            case 13:
              E(M);
              break;
            case 19:
              E(M);
              break;
            case 10:
              Rg(d2.type._context);
              break;
            case 22:
            case 23:
              Ij();
          }
          c2 = c2.return;
        }
      R = a;
      Y = a = wh(a.current, null);
      Z = gj = b2;
      T = 0;
      qk = null;
      sk = rk = hh = 0;
      uk = tk = null;
      if (null !== Wg) {
        for (b2 = 0; b2 < Wg.length; b2++)
          if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
            c2.interleaved = null;
            var e2 = d2.next, f2 = c2.pending;
            if (null !== f2) {
              var g2 = f2.next;
              f2.next = e2;
              d2.next = g2;
            }
            c2.pending = d2;
          }
        Wg = null;
      }
      return a;
    }
    function Nk(a, b2) {
      do {
        var c2 = Y;
        try {
          Qg();
          Ph.current = ai;
          if (Sh) {
            for (var d2 = N.memoizedState; null !== d2; ) {
              var e2 = d2.queue;
              null !== e2 && (e2.pending = null);
              d2 = d2.next;
            }
            Sh = false;
          }
          Rh = 0;
          P = O = N = null;
          Th = false;
          Uh = 0;
          ok.current = null;
          if (null === c2 || null === c2.return) {
            T = 1;
            qk = b2;
            Y = null;
            break;
          }
          a: {
            var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
            b2 = Z;
            h2.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h2, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Vi(g2);
              if (null !== y2) {
                y2.flags &= -257;
                Wi(y2, g2, h2, f2, b2);
                y2.mode & 1 && Ti(f2, l2, b2);
                b2 = y2;
                k2 = l2;
                var n2 = b2.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b2.updateQueue = t2;
                } else
                  n2.add(k2);
                break a;
              } else {
                if (0 === (b2 & 1)) {
                  Ti(f2, l2, b2);
                  uj();
                  break a;
                }
                k2 = Error(p$2(426));
              }
            } else if (I && h2.mode & 1) {
              var J2 = Vi(g2);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Wi(J2, g2, h2, f2, b2);
                Jg(Ki(k2, h2));
                break a;
              }
            }
            f2 = k2 = Ki(k2, h2);
            4 !== T && (T = 2);
            null === tk ? tk = [f2] : tk.push(f2);
            f2 = g2;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var x2 = Oi(f2, k2, b2);
                  fh(f2, x2);
                  break a;
                case 1:
                  h2 = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var F2 = Ri(f2, h2, b2);
                    fh(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Tk(c2);
        } catch (na) {
          b2 = na;
          Y === c2 && null !== c2 && (Y = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Kk() {
      var a = nk.current;
      nk.current = ai;
      return null === a ? ai : a;
    }
    function uj() {
      if (0 === T || 3 === T || 2 === T)
        T = 4;
      null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
    }
    function Jk(a, b2) {
      var c2 = K;
      K |= 2;
      var d2 = Kk();
      if (R !== a || Z !== b2)
        vk = null, Lk(a, b2);
      do
        try {
          Uk();
          break;
        } catch (e2) {
          Nk(a, e2);
        }
      while (1);
      Qg();
      K = c2;
      nk.current = d2;
      if (null !== Y)
        throw Error(p$2(261));
      R = null;
      Z = 0;
      return T;
    }
    function Uk() {
      for (; null !== Y; )
        Vk(Y);
    }
    function Mk() {
      for (; null !== Y && !cc(); )
        Vk(Y);
    }
    function Vk(a) {
      var b2 = Wk(a.alternate, a, gj);
      a.memoizedProps = a.pendingProps;
      null === b2 ? Tk(a) : Y = b2;
      ok.current = null;
    }
    function Tk(a) {
      var b2 = a;
      do {
        var c2 = b2.alternate;
        a = b2.return;
        if (0 === (b2.flags & 32768)) {
          if (c2 = Fj(c2, b2, gj), null !== c2) {
            Y = c2;
            return;
          }
        } else {
          c2 = Jj(c2, b2);
          if (null !== c2) {
            c2.flags &= 32767;
            Y = c2;
            return;
          }
          if (null !== a)
            a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b2 = b2.sibling;
        if (null !== b2) {
          Y = b2;
          return;
        }
        Y = b2 = a;
      } while (null !== b2);
      0 === T && (T = 5);
    }
    function Qk(a, b2, c2) {
      var d2 = C, e2 = pk.transition;
      try {
        pk.transition = null, C = 1, Xk(a, b2, c2, d2);
      } finally {
        pk.transition = e2, C = d2;
      }
      return null;
    }
    function Xk(a, b2, c2, d2) {
      do
        Ik();
      while (null !== xk);
      if (0 !== (K & 6))
        throw Error(p$2(327));
      c2 = a.finishedWork;
      var e2 = a.finishedLanes;
      if (null === c2)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c2 === a.current)
        throw Error(p$2(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c2.lanes | c2.childLanes;
      Bc(a, f2);
      a === R && (Y = R = null, Z = 0);
      0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
        Ik();
        return null;
      }));
      f2 = 0 !== (c2.flags & 15990);
      if (0 !== (c2.subtreeFlags & 15990) || f2) {
        f2 = pk.transition;
        pk.transition = null;
        var g2 = C;
        C = 1;
        var h2 = K;
        K |= 4;
        ok.current = null;
        Pj(a, c2);
        ek(c2, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c2;
        ik(c2);
        dc();
        K = h2;
        C = g2;
        pk.transition = f2;
      } else
        a.current = c2;
      wk && (wk = false, xk = a, yk = e2);
      f2 = a.pendingLanes;
      0 === f2 && (Si = null);
      mc(c2.stateNode);
      Ek(a, B());
      if (null !== b2)
        for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
          e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
      if (Pi)
        throw Pi = false, a = Qi, Qi = null, a;
      0 !== (yk & 1) && 0 !== a.tag && Ik();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
      jg();
      return null;
    }
    function Ik() {
      if (null !== xk) {
        var a = Dc(yk), b2 = pk.transition, c2 = C;
        try {
          pk.transition = null;
          C = 16 > a ? 16 : a;
          if (null === xk)
            var d2 = false;
          else {
            a = xk;
            xk = null;
            yk = 0;
            if (0 !== (K & 6))
              throw Error(p$2(331));
            var e2 = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f2 = V, g2 = f2.child;
              if (0 !== (V.flags & 16)) {
                var h2 = f2.deletions;
                if (null !== h2) {
                  for (var k2 = 0; k2 < h2.length; k2++) {
                    var l2 = h2[k2];
                    for (V = l2; null !== V; ) {
                      var m2 = V;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2)
                        q2.return = m2, V = q2;
                      else
                        for (; null !== V; ) {
                          m2 = V;
                          var r2 = m2.sibling, y2 = m2.return;
                          Tj(m2);
                          if (m2 === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r2) {
                            r2.return = y2;
                            V = r2;
                            break;
                          }
                          V = y2;
                        }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
                g2.return = f2, V = g2;
              else
                b:
                  for (; null !== V; ) {
                    f2 = V;
                    if (0 !== (f2.flags & 2048))
                      switch (f2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, f2, f2.return);
                      }
                    var x2 = f2.sibling;
                    if (null !== x2) {
                      x2.return = f2.return;
                      V = x2;
                      break b;
                    }
                    V = f2.return;
                  }
            }
            var w2 = a.current;
            for (V = w2; null !== V; ) {
              g2 = V;
              var u2 = g2.child;
              if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
                u2.return = g2, V = u2;
              else
                b:
                  for (g2 = w2; null !== V; ) {
                    h2 = V;
                    if (0 !== (h2.flags & 2048))
                      try {
                        switch (h2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Rj(9, h2);
                        }
                      } catch (na) {
                        W(h2, h2.return, na);
                      }
                    if (h2 === g2) {
                      V = null;
                      break b;
                    }
                    var F2 = h2.sibling;
                    if (null !== F2) {
                      F2.return = h2.return;
                      V = F2;
                      break b;
                    }
                    V = h2.return;
                  }
            }
            K = e2;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot)
              try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
            d2 = true;
          }
          return d2;
        } finally {
          C = c2, pk.transition = b2;
        }
      }
      return false;
    }
    function Yk(a, b2, c2) {
      b2 = Ki(c2, b2);
      b2 = Oi(a, b2, 1);
      a = dh(a, b2, 1);
      b2 = L();
      null !== a && (Ac(a, 1, b2), Ek(a, b2));
    }
    function W(a, b2, c2) {
      if (3 === a.tag)
        Yk(a, a, c2);
      else
        for (; null !== b2; ) {
          if (3 === b2.tag) {
            Yk(b2, a, c2);
            break;
          } else if (1 === b2.tag) {
            var d2 = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
              a = Ki(c2, a);
              a = Ri(b2, a, 1);
              b2 = dh(b2, a, 1);
              a = L();
              null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
    }
    function Ui(a, b2, c2) {
      var d2 = a.pingCache;
      null !== d2 && d2.delete(b2);
      b2 = L();
      a.pingedLanes |= a.suspendedLanes & c2;
      R === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c2);
      Ek(a, b2);
    }
    function Zk(a, b2) {
      0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c2 = L();
      a = Zg(a, b2);
      null !== a && (Ac(a, b2, c2), Ek(a, c2));
    }
    function vj(a) {
      var b2 = a.memoizedState, c2 = 0;
      null !== b2 && (c2 = b2.retryLane);
      Zk(a, c2);
    }
    function ck(a, b2) {
      var c2 = 0;
      switch (a.tag) {
        case 13:
          var d2 = a.stateNode;
          var e2 = a.memoizedState;
          null !== e2 && (c2 = e2.retryLane);
          break;
        case 19:
          d2 = a.stateNode;
          break;
        default:
          throw Error(p$2(314));
      }
      null !== d2 && d2.delete(b2);
      Zk(a, c2);
    }
    var Wk;
    Wk = function(a, b2, c2) {
      if (null !== a)
        if (a.memoizedProps !== b2.pendingProps || Wf.current)
          Ug = true;
        else {
          if (0 === (a.lanes & c2) && 0 === (b2.flags & 128))
            return Ug = false, zj(a, b2, c2);
          Ug = 0 !== (a.flags & 131072) ? true : false;
        }
      else
        Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
      b2.lanes = 0;
      switch (b2.tag) {
        case 2:
          var d2 = b2.type;
          jj(a, b2);
          a = b2.pendingProps;
          var e2 = Yf(b2, H.current);
          Tg(b2, c2);
          e2 = Xh(null, b2, d2, a, e2, c2);
          var f2 = bi();
          b2.flags |= 1;
          "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
          return b2;
        case 16:
          d2 = b2.elementType;
          a: {
            jj(a, b2);
            a = b2.pendingProps;
            e2 = d2._init;
            d2 = e2(d2._payload);
            b2.type = d2;
            e2 = b2.tag = $k(d2);
            a = Lg(d2, a);
            switch (e2) {
              case 0:
                b2 = dj(null, b2, d2, a, c2);
                break a;
              case 1:
                b2 = ij(null, b2, d2, a, c2);
                break a;
              case 11:
                b2 = Zi(null, b2, d2, a, c2);
                break a;
              case 14:
                b2 = aj(null, b2, d2, Lg(d2.type, a), c2);
                break a;
            }
            throw Error(p$2(
              306,
              d2,
              ""
            ));
          }
          return b2;
        case 0:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a, b2, d2, e2, c2);
        case 1:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a, b2, d2, e2, c2);
        case 3:
          a: {
            lj(b2);
            if (null === a)
              throw Error(p$2(387));
            d2 = b2.pendingProps;
            f2 = b2.memoizedState;
            e2 = f2.element;
            bh(a, b2);
            gh(b2, d2, null, c2);
            var g2 = b2.memoizedState;
            d2 = g2.element;
            if (f2.isDehydrated)
              if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ki(Error(p$2(423)), b2);
                b2 = mj(a, b2, d2, c2, e2);
                break a;
              } else if (d2 !== e2) {
                e2 = Ki(Error(p$2(424)), b2);
                b2 = mj(a, b2, d2, c2, e2);
                break a;
              } else
                for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
                  c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
            else {
              Ig();
              if (d2 === e2) {
                b2 = $i(a, b2, c2);
                break a;
              }
              Yi(a, b2, d2, c2);
            }
            b2 = b2.child;
          }
          return b2;
        case 5:
          return Kh(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
        case 6:
          return null === a && Eg(b2), null;
        case 13:
          return pj(a, b2, c2);
        case 4:
          return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d2, c2) : Yi(a, b2, d2, c2), b2.child;
        case 11:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a, b2, d2, e2, c2);
        case 7:
          return Yi(a, b2, b2.pendingProps, c2), b2.child;
        case 8:
          return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 12:
          return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 10:
          a: {
            d2 = b2.type._context;
            e2 = b2.pendingProps;
            f2 = b2.memoizedProps;
            g2 = e2.value;
            G(Mg, d2._currentValue);
            d2._currentValue = g2;
            if (null !== f2)
              if (He(f2.value, g2)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = $i(a, b2, c2);
                  break a;
                }
              } else
                for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                  var h2 = f2.dependencies;
                  if (null !== h2) {
                    g2 = f2.child;
                    for (var k2 = h2.firstContext; null !== k2; ) {
                      if (k2.context === d2) {
                        if (1 === f2.tag) {
                          k2 = ch(-1, c2 & -c2);
                          k2.tag = 2;
                          var l2 = f2.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var m2 = l2.pending;
                            null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                            l2.pending = k2;
                          }
                        }
                        f2.lanes |= c2;
                        k2 = f2.alternate;
                        null !== k2 && (k2.lanes |= c2);
                        Sg(
                          f2.return,
                          c2,
                          b2
                        );
                        h2.lanes |= c2;
                        break;
                      }
                      k2 = k2.next;
                    }
                  } else if (10 === f2.tag)
                    g2 = f2.type === b2.type ? null : f2.child;
                  else if (18 === f2.tag) {
                    g2 = f2.return;
                    if (null === g2)
                      throw Error(p$2(341));
                    g2.lanes |= c2;
                    h2 = g2.alternate;
                    null !== h2 && (h2.lanes |= c2);
                    Sg(g2, c2, b2);
                    g2 = f2.sibling;
                  } else
                    g2 = f2.child;
                  if (null !== g2)
                    g2.return = f2;
                  else
                    for (g2 = f2; null !== g2; ) {
                      if (g2 === b2) {
                        g2 = null;
                        break;
                      }
                      f2 = g2.sibling;
                      if (null !== f2) {
                        f2.return = g2.return;
                        g2 = f2;
                        break;
                      }
                      g2 = g2.return;
                    }
                  f2 = g2;
                }
            Yi(a, b2, e2.children, c2);
            b2 = b2.child;
          }
          return b2;
        case 9:
          return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a, b2, d2, c2), b2.child;
        case 14:
          return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a, b2, d2, e2, c2);
        case 15:
          return cj(a, b2, b2.type, b2.pendingProps, c2);
        case 17:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a, c2);
        case 19:
          return yj(a, b2, c2);
        case 22:
          return ej(a, b2, c2);
      }
      throw Error(p$2(156, b2.tag));
    };
    function Gk(a, b2) {
      return ac(a, b2);
    }
    function al(a, b2, c2, d2) {
      this.tag = a;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b2;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b2, c2, d2) {
      return new al(a, b2, c2, d2);
    }
    function bj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function $k(a) {
      if ("function" === typeof a)
        return bj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da)
          return 11;
        if (a === Ga)
          return 14;
      }
      return 2;
    }
    function wh(a, b2) {
      var c2 = a.alternate;
      null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
      c2.flags = a.flags & 14680064;
      c2.childLanes = a.childLanes;
      c2.lanes = a.lanes;
      c2.child = a.child;
      c2.memoizedProps = a.memoizedProps;
      c2.memoizedState = a.memoizedState;
      c2.updateQueue = a.updateQueue;
      b2 = a.dependencies;
      c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
      c2.sibling = a.sibling;
      c2.index = a.index;
      c2.ref = a.ref;
      return c2;
    }
    function yh(a, b2, c2, d2, e2, f2) {
      var g2 = 2;
      d2 = a;
      if ("function" === typeof a)
        bj(a) && (g2 = 1);
      else if ("string" === typeof a)
        g2 = 5;
      else
        a:
          switch (a) {
            case ya:
              return Ah(c2.children, e2, f2, b2);
            case za:
              g2 = 8;
              e2 |= 8;
              break;
            case Aa:
              return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
            case Ea:
              return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
            case Fa:
              return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
            case Ia:
              return qj(c2, e2, f2, b2);
            default:
              if ("object" === typeof a && null !== a)
                switch (a.$$typeof) {
                  case Ba:
                    g2 = 10;
                    break a;
                  case Ca:
                    g2 = 9;
                    break a;
                  case Da:
                    g2 = 11;
                    break a;
                  case Ga:
                    g2 = 14;
                    break a;
                  case Ha:
                    g2 = 16;
                    d2 = null;
                    break a;
                }
              throw Error(p$2(130, null == a ? a : typeof a, ""));
          }
      b2 = Bg(g2, c2, b2, e2);
      b2.elementType = a;
      b2.type = d2;
      b2.lanes = f2;
      return b2;
    }
    function Ah(a, b2, c2, d2) {
      a = Bg(7, a, d2, b2);
      a.lanes = c2;
      return a;
    }
    function qj(a, b2, c2, d2) {
      a = Bg(22, a, d2, b2);
      a.elementType = Ia;
      a.lanes = c2;
      a.stateNode = { isHidden: false };
      return a;
    }
    function xh(a, b2, c2) {
      a = Bg(6, a, null, b2);
      a.lanes = c2;
      return a;
    }
    function zh(a, b2, c2) {
      b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
      b2.lanes = c2;
      b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b2;
    }
    function bl(a, b2, c2, d2, e2) {
      this.tag = b2;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e2;
      this.mutableSourceEagerHydrationData = null;
    }
    function cl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = new bl(a, b2, c2, h2, k2);
      1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
      f2 = Bg(3, null, null, b2);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      ah(f2);
      return a;
    }
    function dl(a, b2, c2) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
    }
    function el(a) {
      if (!a)
        return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag)
          throw Error(p$2(170));
        var b2 = a;
        do {
          switch (b2.tag) {
            case 3:
              b2 = b2.stateNode.context;
              break a;
            case 1:
              if (Zf(b2.type)) {
                b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b2 = b2.return;
        } while (null !== b2);
        throw Error(p$2(171));
      }
      if (1 === a.tag) {
        var c2 = a.type;
        if (Zf(c2))
          return bg(a, c2, b2);
      }
      return b2;
    }
    function fl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = cl(c2, d2, true, a, e2, f2, g2, h2, k2);
      a.context = el(null);
      c2 = a.current;
      d2 = L();
      e2 = lh(c2);
      f2 = ch(d2, e2);
      f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
      dh(c2, f2, e2);
      a.current.lanes = e2;
      Ac(a, e2, d2);
      Ek(a, d2);
      return a;
    }
    function gl(a, b2, c2, d2) {
      var e2 = b2.current, f2 = L(), g2 = lh(e2);
      c2 = el(c2);
      null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
      b2 = ch(f2, g2);
      b2.payload = { element: a };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b2.callback = d2);
      a = dh(e2, b2, g2);
      null !== a && (mh(a, e2, g2, f2), eh(a, e2, g2));
      return g2;
    }
    function hl(a) {
      a = a.current;
      if (!a.child)
        return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function il(a, b2) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c2 = a.retryLane;
        a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
      }
    }
    function jl(a, b2) {
      il(a, b2);
      (a = a.alternate) && il(a, b2);
    }
    function kl() {
      return null;
    }
    var ll = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ml(a) {
      this._internalRoot = a;
    }
    nl.prototype.render = ml.prototype.render = function(a) {
      var b2 = this._internalRoot;
      if (null === b2)
        throw Error(p$2(409));
      gl(a, b2, null, null);
    };
    nl.prototype.unmount = ml.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b2 = a.containerInfo;
        Sk(function() {
          gl(null, a, null, null);
        });
        b2[uf] = null;
      }
    };
    function nl(a) {
      this._internalRoot = a;
    }
    nl.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b2 = Hc();
        a = { blockedOn: null, target: a, priority: b2 };
        for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
          ;
        Qc.splice(c2, 0, a);
        0 === c2 && Vc(a);
      }
    };
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function pl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function ql() {
    }
    function rl(a, b2, c2, d2, e2) {
      if (e2) {
        if ("function" === typeof d2) {
          var f2 = d2;
          d2 = function() {
            var a2 = hl(g2);
            f2.call(a2);
          };
        }
        var g2 = fl(b2, d2, a, 0, null, false, false, "", ql);
        a._reactRootContainer = g2;
        a[uf] = g2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk();
        return g2;
      }
      for (; e2 = a.lastChild; )
        a.removeChild(e2);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a2 = hl(k2);
          h2.call(a2);
        };
      }
      var k2 = cl(a, 0, false, null, null, false, false, "", ql);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Sk(function() {
        gl(b2, k2, c2, d2);
      });
      return k2;
    }
    function sl(a, b2, c2, d2, e2) {
      var f2 = c2._reactRootContainer;
      if (f2) {
        var g2 = f2;
        if ("function" === typeof e2) {
          var h2 = e2;
          e2 = function() {
            var a2 = hl(g2);
            h2.call(a2);
          };
        }
        gl(b2, g2, a, e2);
      } else
        g2 = rl(c2, b2, a, e2, d2);
      return hl(g2);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b2 = a.stateNode;
          if (b2.current.memoizedState.isDehydrated) {
            var c2 = tc(b2.pendingLanes);
            0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
          }
          break;
        case 13:
          Sk(function() {
            var b3 = Zg(a, 1);
            if (null !== b3) {
              var c3 = L();
              mh(b3, a, 1, c3);
            }
          }), jl(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b2 = Zg(a, 134217728);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 134217728, c2);
        }
        jl(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b2 = lh(a), c2 = Zg(a, b2);
        if (null !== c2) {
          var d2 = L();
          mh(c2, a, b2, d2);
        }
        jl(a, b2);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b2) {
      var c2 = C;
      try {
        return C = a, b2();
      } finally {
        C = c2;
      }
    };
    yb = function(a, b2, c2) {
      switch (b2) {
        case "input":
          bb(a, c2);
          b2 = c2.name;
          if ("radio" === c2.type && null != b2) {
            for (c2 = a; c2.parentNode; )
              c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
            for (b2 = 0; b2 < c2.length; b2++) {
              var d2 = c2[b2];
              if (d2 !== a && d2.form === a.form) {
                var e2 = Db(d2);
                if (!e2)
                  throw Error(p$2(90));
                Wa(d2);
                bb(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c2);
          break;
        case "select":
          b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
      }
    };
    Gb = Rk;
    Hb = Sk;
    var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
    var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wl.isDisabled && wl.supportsFiber)
        try {
          kc = wl.inject(vl), lc = wl;
        } catch (a) {
        }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
    reactDom_production_min.createPortal = function(a, b2) {
      var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!ol(b2))
        throw Error(p$2(200));
      return dl(a, b2, null, c2);
    };
    reactDom_production_min.createRoot = function(a, b2) {
      if (!ol(a))
        throw Error(p$2(299));
      var c2 = false, d2 = "", e2 = ll;
      null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
      b2 = cl(a, 1, false, null, null, c2, false, d2, e2);
      a[uf] = b2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ml(b2);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a)
        return null;
      if (1 === a.nodeType)
        return a;
      var b2 = a._reactInternals;
      if (void 0 === b2) {
        if ("function" === typeof a.render)
          throw Error(p$2(188));
        a = Object.keys(a).join(",");
        throw Error(p$2(268, a));
      }
      a = Zb(b2);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Sk(a);
    };
    reactDom_production_min.hydrate = function(a, b2, c2) {
      if (!pl(b2))
        throw Error(p$2(200));
      return sl(null, a, b2, true, c2);
    };
    reactDom_production_min.hydrateRoot = function(a, b2, c2) {
      if (!ol(a))
        throw Error(p$2(405));
      var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
      null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
      b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
      a[uf] = b2.current;
      sf(a);
      if (d2)
        for (a = 0; a < d2.length; a++)
          c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
            c2,
            e2
          );
      return new nl(b2);
    };
    reactDom_production_min.render = function(a, b2, c2) {
      if (!pl(b2))
        throw Error(p$2(200));
      return sl(null, a, b2, false, c2);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!pl(a))
        throw Error(p$2(40));
      return a._reactRootContainer ? (Sk(function() {
        sl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Rk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
      if (!pl(c2))
        throw Error(p$2(200));
      if (null == a || void 0 === a._reactInternals)
        throw Error(p$2(38));
      return sl(a, b2, c2, false, d2);
    };
    reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
    (function(module2) {
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      {
        checkDCE();
        module2.exports = reactDom_production_min;
      }
    })(reactDom);
    const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
    var m$1 = reactDomExports;
    {
      client.createRoot = m$1.createRoot;
      client.hydrateRoot = m$1.hydrateRoot;
    }
    /**
     * @remix-run/router v1.3.2
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$2() {
      _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$2.apply(this, arguments);
    }
    var Action;
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
    const PopStateEventType = "popstate";
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash: hash2
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash: hash2
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to2) {
        return typeof to2 === "string" ? to2 : createPath(to2);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index2) {
      return {
        usr: location.state,
        key: location.key,
        idx: index2
      };
    }
    function createLocation(current, to2, state, key) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends$2({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to2 === "string" ? parsePath(to2) : to2, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to2 && to2.key || key || createKey()
      });
      return location;
    }
    function createPath(_ref2) {
      let {
        pathname = "/",
        search = "",
        hash: hash2 = ""
      } = _ref2;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash2 && hash2 !== "#")
        pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener2 = null;
      let index2 = getIndex();
      if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extends$2({}, globalHistory.state, {
          idx: index2
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index2;
        index2 = nextIndex;
        if (listener2) {
          listener2({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to2, state) {
        action = Action.Push;
        let location = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location, to2);
        index2 = getIndex() + 1;
        let historyState = getHistoryState(location, index2);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          window2.location.assign(url);
        }
        if (v5Compat && listener2) {
          listener2({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace2(to2, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location, to2);
        index2 = getIndex();
        let historyState = getHistoryState(location, index2);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener2) {
          listener2({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to2) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to2 === "string" ? to2 : createPath(to2);
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener2) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener2 = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener2 = null;
          };
        },
        createHref(to2) {
          return createHref(window2, to2);
        },
        createURL,
        encodeLocation(to2) {
          let url = createURL(to2);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace: replace2,
        go(n2) {
          return globalHistory.go(n2);
        }
      };
      return history;
    }
    var ResultType;
    (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
    })(ResultType || (ResultType = {}));
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        matches = matchRouteBranch(
          branches[i],
          // Incoming pathnames are generally encoded from either window.location
          // or from router.navigate, but we want to match against the unencoded
          // paths in the route definitions.  Memory router locations won't be
          // encoded here but there also shouldn't be anything to decode so this
          // should be a safe operation.  This avoids needing matchRoutes to be
          // history-aware.
          safelyDecodeURI(pathname)
        );
      }
      return matches;
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index2, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index2,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes.forEach((route, index2) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index2);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index2, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0)
        return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
    }
    const paramRe = /^:\w+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s) => s === "*";
    function computeScore(path, index2) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index2) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b2) {
      let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b2[b2.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname) {
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta = routesMeta[i];
        let end2 = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match5 = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: end2
        }, remainingPathname);
        if (!match5)
          return null;
        Object.assign(matchedParams, match5.params);
        let route = meta.route;
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match5.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match5.pathnameBase])),
          route
        });
        if (match5.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match5.pathnameBase]);
        }
      }
      return matches;
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match5 = pathname.match(matcher);
      if (!match5)
        return null;
      let matchedPathname = match5[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match5.slice(1);
      let params = paramNames.reduce((memo, paramName, index2) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index2] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end2) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end2 === void 0) {
        end2 = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let paramNames = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_2, paramName) => {
        paramNames.push(paramName);
        return "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end2) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else
        ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, paramNames];
    }
    function safelyDecodeURI(value) {
      try {
        return decodeURI(value);
      } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value;
      }
    }
    function safelyDecodeURIComponent(value, paramName) {
      try {
        return decodeURIComponent(value);
      } catch (error) {
        warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e2) {
        }
      }
    }
    function resolvePath(to2, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash: hash2 = ""
      } = typeof to2 === "string" ? parsePath(to2) : to2;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash2)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1)
            segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char2, field, dest, path) {
      return "Cannot include a '" + char2 + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match5, index2) => index2 === 0 || match5.route.path && match5.route.path.length > 0);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to2;
      if (typeof toArg === "string") {
        to2 = parsePath(toArg);
      } else {
        to2 = _extends$2({}, toArg);
        invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
        invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
        invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
      }
      let isEmptyPath = toArg === "" || to2.pathname === "";
      let toPathname = isEmptyPath ? "/" : to2.pathname;
      let from2;
      if (isPathRelative || toPathname == null) {
        from2 = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to2.pathname = toSegments.join("/");
        }
        from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to2, from2);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    const normalizeHash = (hash2) => !hash2 || hash2 === "#" ? "" : hash2.startsWith("#") ? hash2 : "#" + hash2;
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    const validMutationMethodsArr = ["post", "put", "patch", "delete"];
    ["get", ...validMutationMethodsArr];
    /**
     * React Router v6.8.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }
    function isPolyfill(x2, y2) {
      return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    const is = typeof Object.is === "function" ? Object.is : isPolyfill;
    const {
      useState,
      useEffect,
      useLayoutEffect,
      useDebugValue
    } = React$2;
    function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
      const value = getSnapshot();
      const [{
        inst
      }, forceUpdate] = useState({
        inst: {
          value,
          getSnapshot
        }
      });
      useLayoutEffect(() => {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
      }, [subscribe, value, getSnapshot]);
      useEffect(() => {
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
        const handleStoreChange = () => {
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({
              inst
            });
          }
        };
        return subscribe(handleStoreChange);
      }, [subscribe]);
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      const latestGetSnapshot = inst.getSnapshot;
      const prevValue = inst.value;
      try {
        const nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
      return getSnapshot();
    }
    const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
    const isServerEnvironment = !canUseDOM;
    const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
    "useSyncExternalStore" in React$2 ? ((module2) => module2.useSyncExternalStore)(React$2) : shim;
    const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
    const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
    const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
    const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
    const RouteContext = /* @__PURE__ */ reactExports.createContext({
      outlet: null,
      matches: []
    });
    const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
    function useInRouterContext() {
      return reactExports.useContext(LocationContext) != null;
    }
    function useLocation() {
      !useInRouterContext() ? invariant(false) : void 0;
      return reactExports.useContext(LocationContext).location;
    }
    function useNavigate() {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        basename,
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match5) => match5.pathnameBase));
      let activeRef = reactExports.useRef(false);
      reactExports.useEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        if (basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
      }, [basename, navigator2, routePathnamesJson, locationPathname]);
      return navigate;
    }
    function useRoutes(routes, locationArg) {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let dataRouterStateContext = reactExports.useContext(DataRouterStateContext);
      let {
        matches: parentMatches
      } = reactExports.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      routeMatch && routeMatch.route;
      let locationFromContext = useLocation();
      let location;
      if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
        location = parsedLocationArg;
      } else {
        location = locationFromContext;
      }
      let pathname = location.pathname || "/";
      let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
      let matches = matchRoutes(routes, {
        pathname: remainingPathname
      });
      let renderedMatches = _renderMatches(matches && matches.map((match5) => Object.assign({}, match5, {
        params: Object.assign({}, parentParams, match5.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match5.pathname).pathname : match5.pathname
        ]),
        pathnameBase: match5.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match5.pathnameBase).pathname : match5.pathnameBase
        ])
      })), parentMatches, dataRouterStateContext || void 0);
      if (locationArg && renderedMatches) {
        return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
          value: {
            location: _extends$1({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location),
            navigationType: Action.Pop
          }
        }, renderedMatches);
      }
      return renderedMatches;
    }
    function DefaultErrorElement() {
      let error = useRouteError();
      let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
      };
      let devInfo = null;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
        style: {
          fontStyle: "italic"
        }
      }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
        style: preStyles
      }, stack) : null, devInfo);
    }
    class RenderErrorBoundary extends reactExports.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
          return {
            error: props.error,
            location: props.location
          };
        }
        return {
          error: props.error || state.error,
          location: state.location
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
          value: this.props.routeContext
        }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })) : this.props.children;
      }
    }
    function RenderedRoute(_ref2) {
      let {
        routeContext,
        match: match5,
        children
      } = _ref2;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match5.route.errorElement) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match5.route.id;
      }
      return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
        value: routeContext
      }, children);
    }
    function _renderMatches(matches, parentMatches, dataRouterState) {
      if (parentMatches === void 0) {
        parentMatches = [];
      }
      if (matches == null) {
        if (dataRouterState != null && dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
        !(errorIndex >= 0) ? invariant(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
      }
      return renderedMatches.reduceRight((outlet, match5, index2) => {
        let error = match5.route.id ? errors == null ? void 0 : errors[match5.route.id] : null;
        let errorElement = dataRouterState ? match5.route.errorElement || /* @__PURE__ */ reactExports.createElement(DefaultErrorElement, null) : null;
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
        let getChildren = () => /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
          match: match5,
          routeContext: {
            outlet,
            matches: matches2
          }
        }, error ? errorElement : match5.route.element !== void 0 ? match5.route.element : outlet);
        return dataRouterState && (match5.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: {
            outlet: null,
            matches: matches2
          }
        }) : getChildren();
      }, null);
    }
    var DataRouterHook$1;
    (function(DataRouterHook2) {
      DataRouterHook2["UseBlocker"] = "useBlocker";
      DataRouterHook2["UseRevalidator"] = "useRevalidator";
    })(DataRouterHook$1 || (DataRouterHook$1 = {}));
    var DataRouterStateHook$1;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
      DataRouterStateHook2["UseActionData"] = "useActionData";
      DataRouterStateHook2["UseRouteError"] = "useRouteError";
      DataRouterStateHook2["UseNavigation"] = "useNavigation";
      DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
      DataRouterStateHook2["UseMatches"] = "useMatches";
      DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
    })(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
    function useDataRouterState(hookName) {
      let state = reactExports.useContext(DataRouterStateContext);
      !state ? invariant(false) : void 0;
      return state;
    }
    function useRouteContext(hookName) {
      let route = reactExports.useContext(RouteContext);
      !route ? invariant(false) : void 0;
      return route;
    }
    function useCurrentRouteId(hookName) {
      let route = useRouteContext();
      let thisRoute = route.matches[route.matches.length - 1];
      !thisRoute.route.id ? invariant(false) : void 0;
      return thisRoute.route.id;
    }
    function useRouteError() {
      var _state$errors;
      let error = reactExports.useContext(RouteErrorContext);
      let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
      let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
      if (error) {
        return error;
      }
      return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
    }
    function Navigate(_ref3) {
      let {
        to: to2,
        replace: replace2,
        state,
        relative
      } = _ref3;
      !useInRouterContext() ? invariant(false) : void 0;
      let dataRouterState = reactExports.useContext(DataRouterStateContext);
      let navigate = useNavigate();
      reactExports.useEffect(() => {
        if (dataRouterState && dataRouterState.navigation.state !== "idle") {
          return;
        }
        navigate(to2, {
          replace: replace2,
          state,
          relative
        });
      });
      return null;
    }
    function Route(_props) {
      invariant(false);
    }
    function Router(_ref4) {
      let {
        basename: basenameProp = "/",
        children = null,
        location: locationProp,
        navigationType = Action.Pop,
        navigator: navigator2,
        static: staticProp = false
      } = _ref4;
      !!useInRouterContext() ? invariant(false) : void 0;
      let basename = basenameProp.replace(/^\/*/, "/");
      let navigationContext = reactExports.useMemo(() => ({
        basename,
        navigator: navigator2,
        static: staticProp
      }), [basename, navigator2, staticProp]);
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash: hash2 = "",
        state = null,
        key = "default"
      } = locationProp;
      let location = reactExports.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) {
          return null;
        }
        return {
          pathname: trailingPathname,
          search,
          hash: hash2,
          state,
          key
        };
      }, [basename, pathname, search, hash2, state, key]);
      if (location == null) {
        return null;
      }
      return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
        value: navigationContext
      }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
        children,
        value: {
          location,
          navigationType
        }
      }));
    }
    function Routes(_ref5) {
      let {
        children,
        location
      } = _ref5;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
      return useRoutes(routes, location);
    }
    var AwaitRenderStatus;
    (function(AwaitRenderStatus2) {
      AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
      AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
      AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
    })(AwaitRenderStatus || (AwaitRenderStatus = {}));
    new Promise(() => {
    });
    function createRoutesFromChildren(children, parentPath) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      let routes = [];
      reactExports.Children.forEach(children, (element, index2) => {
        if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
          return;
        }
        if (element.type === reactExports.Fragment) {
          routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
          return;
        }
        !(element.type === Route) ? invariant(false) : void 0;
        !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
        let treePath = [...parentPath, index2];
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          errorElement: element.props.errorElement,
          hasErrorBoundary: element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
      });
      return routes;
    }
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function r$1(e2) {
      var t2, f2, n2 = "";
      if ("string" == typeof e2 || "number" == typeof e2)
        n2 += e2;
      else if ("object" == typeof e2)
        if (Array.isArray(e2))
          for (t2 = 0; t2 < e2.length; t2++)
            e2[t2] && (f2 = r$1(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
        else
          for (t2 in e2)
            e2[t2] && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    function clsx() {
      for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
        (e2 = arguments[f2++]) && (t2 = r$1(e2)) && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    var propTypesExports = {};
    var propTypes = {
      get exports() {
        return propTypesExports;
      },
      set exports(v2) {
        propTypesExports = v2;
      }
    };
    var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    var factoryWithThrowingShims = function() {
      function shim2(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim2.isRequired = shim2;
      function getShim() {
        return shim2;
      }
      var ReactPropTypes = {
        array: shim2,
        bigint: shim2,
        bool: shim2,
        func: shim2,
        number: shim2,
        object: shim2,
        string: shim2,
        symbol: shim2,
        any: shim2,
        arrayOf: getShim,
        element: shim2,
        elementType: shim2,
        instanceOf: getShim,
        node: shim2,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    {
      propTypes.exports = factoryWithThrowingShims();
    }
    function isPlainObject(item) {
      return item !== null && typeof item === "object" && item.constructor === Object;
    }
    function deepClone(source) {
      if (!isPlainObject(source)) {
        return source;
      }
      const output = {};
      Object.keys(source).forEach((key) => {
        output[key] = deepClone(source[key]);
      });
      return output;
    }
    function deepmerge(target, source, options = {
      clone: true
    }) {
      const output = options.clone ? _extends({}, target) : target;
      if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key) => {
          if (key === "__proto__") {
            return;
          }
          if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
            output[key] = deepmerge(target[key], source[key], options);
          } else if (options.clone) {
            output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
          } else {
            output[key] = source[key];
          }
        });
      }
      return output;
    }
    function formatMuiErrorMessage(code) {
      let url = "https://mui.com/production-error/?code=" + code;
      for (let i = 1; i < arguments.length; i += 1) {
        url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
    }
    function capitalize$1(string) {
      if (typeof string !== "string") {
        throw new Error(formatMuiErrorMessage(7));
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function setRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    }
    const useEnhancedEffect$1 = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
    const useEnhancedEffect$2 = useEnhancedEffect$1;
    let globalId = 0;
    function useGlobalId(idOverride) {
      const [defaultId, setDefaultId] = reactExports.useState(idOverride);
      const id2 = idOverride || defaultId;
      reactExports.useEffect(() => {
        if (defaultId == null) {
          globalId += 1;
          setDefaultId(`mui-${globalId}`);
        }
      }, [defaultId]);
      return id2;
    }
    const maybeReactUseId = React$2["useId"];
    function useId(idOverride) {
      if (maybeReactUseId !== void 0) {
        const reactId = maybeReactUseId();
        return idOverride != null ? idOverride : reactId;
      }
      return useGlobalId(idOverride);
    }
    function useControlled({
      controlled,
      default: defaultProp,
      name,
      state = "value"
    }) {
      const {
        current: isControlled
      } = reactExports.useRef(controlled !== void 0);
      const [valueState, setValue] = reactExports.useState(defaultProp);
      const value = isControlled ? controlled : valueState;
      const setValueIfUncontrolled = reactExports.useCallback((newValue) => {
        if (!isControlled) {
          setValue(newValue);
        }
      }, []);
      return [value, setValueIfUncontrolled];
    }
    function useEventCallback$2(fn) {
      const ref = reactExports.useRef(fn);
      useEnhancedEffect$2(() => {
        ref.current = fn;
      });
      return reactExports.useCallback((...args) => (
        // @ts-expect-error hide `this`
        // tslint:disable-next-line:ban-comma-operator
        (0, ref.current)(...args)
      ), []);
    }
    function useForkRef(...refs) {
      return reactExports.useMemo(() => {
        if (refs.every((ref) => ref == null)) {
          return null;
        }
        return (instance) => {
          refs.forEach((ref) => {
            setRef(ref, instance);
          });
        };
      }, refs);
    }
    let hadKeyboardEvent = true;
    let hadFocusVisibleRecently = false;
    let hadFocusVisibleRecentlyTimeout;
    const inputTypesWhitelist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      "datetime-local": true
    };
    function focusTriggersKeyboardModality(node2) {
      const {
        type,
        tagName
      } = node2;
      if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
        return true;
      }
      if (tagName === "TEXTAREA" && !node2.readOnly) {
        return true;
      }
      if (node2.isContentEditable) {
        return true;
      }
      return false;
    }
    function handleKeyDown(event) {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      hadKeyboardEvent = true;
    }
    function handlePointerDown() {
      hadKeyboardEvent = false;
    }
    function handleVisibilityChange() {
      if (this.visibilityState === "hidden") {
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
      }
    }
    function prepare(doc) {
      doc.addEventListener("keydown", handleKeyDown, true);
      doc.addEventListener("mousedown", handlePointerDown, true);
      doc.addEventListener("pointerdown", handlePointerDown, true);
      doc.addEventListener("touchstart", handlePointerDown, true);
      doc.addEventListener("visibilitychange", handleVisibilityChange, true);
    }
    function isFocusVisible(event) {
      const {
        target
      } = event;
      try {
        return target.matches(":focus-visible");
      } catch (error) {
      }
      return hadKeyboardEvent || focusTriggersKeyboardModality(target);
    }
    function useIsFocusVisible() {
      const ref = reactExports.useCallback((node2) => {
        if (node2 != null) {
          prepare(node2.ownerDocument);
        }
      }, []);
      const isFocusVisibleRef = reactExports.useRef(false);
      function handleBlurVisible() {
        if (isFocusVisibleRef.current) {
          hadFocusVisibleRecently = true;
          window.clearTimeout(hadFocusVisibleRecentlyTimeout);
          hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
            hadFocusVisibleRecently = false;
          }, 100);
          isFocusVisibleRef.current = false;
          return true;
        }
        return false;
      }
      function handleFocusVisible(event) {
        if (isFocusVisible(event)) {
          isFocusVisibleRef.current = true;
          return true;
        }
        return false;
      }
      return {
        isFocusVisibleRef,
        onFocus: handleFocusVisible,
        onBlur: handleBlurVisible,
        ref
      };
    }
    function resolveProps(defaultProps2, props) {
      const output = _extends({}, props);
      Object.keys(defaultProps2).forEach((propName) => {
        if (propName.toString().match(/^(components|slots)$/)) {
          output[propName] = _extends({}, defaultProps2[propName], output[propName]);
        } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
          const defaultSlotProps = defaultProps2[propName] || {};
          const slotProps = props[propName];
          output[propName] = {};
          if (!slotProps || !Object.keys(slotProps)) {
            output[propName] = defaultSlotProps;
          } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
            output[propName] = slotProps;
          } else {
            output[propName] = _extends({}, slotProps);
            Object.keys(defaultSlotProps).forEach((slotPropName) => {
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
            });
          }
        } else if (output[propName] === void 0) {
          output[propName] = defaultProps2[propName];
        }
      });
      return output;
    }
    function composeClasses(slots, getUtilityClass, classes = void 0) {
      const output = {};
      Object.keys(slots).forEach(
        // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
        // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
        (slot) => {
          output[slot] = slots[slot].reduce((acc, key) => {
            if (key) {
              const utilityClass = getUtilityClass(key);
              if (utilityClass !== "") {
                acc.push(utilityClass);
              }
              if (classes && classes[key]) {
                acc.push(classes[key]);
              }
            }
            return acc;
          }, []).join(" ");
        }
      );
      return output;
    }
    const defaultGenerator = (componentName) => componentName;
    const createClassNameGenerator = () => {
      let generate = defaultGenerator;
      return {
        configure(generator) {
          generate = generator;
        },
        generate(componentName) {
          return generate(componentName);
        },
        reset() {
          generate = defaultGenerator;
        }
      };
    };
    const ClassNameGenerator = createClassNameGenerator();
    const ClassNameGenerator$1 = ClassNameGenerator;
    const globalStateClassesMapping = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      readOnly: "readOnly",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      required: "required",
      selected: "selected"
    };
    function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
      const globalStateClass = globalStateClassesMapping[slot];
      return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
    }
    function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
      const result = {};
      slots.forEach((slot) => {
        result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
      });
      return result;
    }
    function memoize$1(fn) {
      var cache = /* @__PURE__ */ Object.create(null);
      return function(arg) {
        if (cache[arg] === void 0)
          cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var isPropValid = /* @__PURE__ */ memoize$1(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
      /* Z+1 */
    );
    function sheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
    function createStyleElement(options) {
      var tag = document.createElement("style");
      tag.setAttribute("data-emotion", options.key);
      if (options.nonce !== void 0) {
        tag.setAttribute("nonce", options.nonce);
      }
      tag.appendChild(document.createTextNode(""));
      tag.setAttribute("data-s", "");
      return tag;
    }
    var StyleSheet = /* @__PURE__ */ function() {
      function StyleSheet2(options) {
        var _this = this;
        this._insertTag = function(tag) {
          var before;
          if (_this.tags.length === 0) {
            if (_this.insertionPoint) {
              before = _this.insertionPoint.nextSibling;
            } else if (_this.prepend) {
              before = _this.container.firstChild;
            } else {
              before = _this.before;
            }
          } else {
            before = _this.tags[_this.tags.length - 1].nextSibling;
          }
          _this.container.insertBefore(tag, before);
          _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce;
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
      }
      var _proto = StyleSheet2.prototype;
      _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
      };
      _proto.insert = function insert(rule) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
          this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e2) {
          }
        } else {
          tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
      };
      _proto.flush = function flush() {
        this.tags.forEach(function(tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
      };
      return StyleSheet2;
    }();
    var MS = "-ms-";
    var MOZ = "-moz-";
    var WEBKIT = "-webkit-";
    var COMMENT = "comm";
    var RULESET = "rule";
    var DECLARATION = "decl";
    var IMPORT = "@import";
    var KEYFRAMES = "@keyframes";
    var abs$2 = Math.abs;
    var from$1 = String.fromCharCode;
    var assign = Object.assign;
    function hash(value, length2) {
      return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
    }
    function trim(value) {
      return value.trim();
    }
    function match(value, pattern) {
      return (value = pattern.exec(value)) ? value[0] : value;
    }
    function replace$1(value, pattern, replacement) {
      return value.replace(pattern, replacement);
    }
    function indexof(value, search) {
      return value.indexOf(search);
    }
    function charat(value, index2) {
      return value.charCodeAt(index2) | 0;
    }
    function substr(value, begin2, end2) {
      return value.slice(begin2, end2);
    }
    function strlen(value) {
      return value.length;
    }
    function sizeof(value) {
      return value.length;
    }
    function append(value, array) {
      return array.push(value), value;
    }
    function combine(array, callback) {
      return array.map(callback).join("");
    }
    var line = 1;
    var column = 1;
    var length = 0;
    var position = 0;
    var character = 0;
    var characters = "";
    function node(value, root, parent, type, props, children, length2) {
      return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
    }
    function copy(root, props) {
      return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
    }
    function char() {
      return character;
    }
    function prev() {
      character = position > 0 ? charat(characters, --position) : 0;
      if (column--, character === 10)
        column = 1, line--;
      return character;
    }
    function next() {
      character = position < length ? charat(characters, position++) : 0;
      if (column++, character === 10)
        column = 1, line++;
      return character;
    }
    function peek() {
      return charat(characters, position);
    }
    function caret() {
      return position;
    }
    function slice(begin2, end2) {
      return substr(characters, begin2, end2);
    }
    function token$1(type) {
      switch (type) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function alloc(value) {
      return line = column = 1, length = strlen(characters = value), position = 0, [];
    }
    function dealloc(value) {
      return characters = "", value;
    }
    function delimit(type) {
      return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
    }
    function whitespace(type) {
      while (character = peek())
        if (character < 33)
          next();
        else
          break;
      return token$1(type) > 2 || token$1(character) > 3 ? "" : " ";
    }
    function escaping(index2, count) {
      while (--count && next())
        if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
          break;
      return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
    }
    function delimiter(type) {
      while (next())
        switch (character) {
          case type:
            return position;
          case 34:
          case 39:
            if (type !== 34 && type !== 39)
              delimiter(character);
            break;
          case 40:
            if (type === 41)
              delimiter(type);
            break;
          case 92:
            next();
            break;
        }
      return position;
    }
    function commenter(type, index2) {
      while (next())
        if (type + character === 47 + 10)
          break;
        else if (type + character === 42 + 42 && peek() === 47)
          break;
      return "/*" + slice(index2, position - 1) + "*" + from$1(type === 47 ? type : next());
    }
    function identifier(index2) {
      while (!token$1(peek()))
        next();
      return slice(index2, position);
    }
    function compile(value) {
      return dealloc(parse$2("", null, null, null, [""], value = alloc(value), 0, [0], value));
    }
    function parse$2(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
      var index2 = 0;
      var offset2 = 0;
      var length2 = pseudo;
      var atrule = 0;
      var property = 0;
      var previous = 0;
      var variable = 1;
      var scanning = 1;
      var ampersand = 1;
      var character2 = 0;
      var type = "";
      var props = rules;
      var children = rulesets;
      var reference = rule;
      var characters2 = type;
      while (scanning)
        switch (previous = character2, character2 = next()) {
          case 40:
            if (previous != 108 && charat(characters2, length2 - 1) == 58) {
              if (indexof(characters2 += replace$1(delimit(character2), "&", "&\f"), "&\f") != -1)
                ampersand = -1;
              break;
            }
          case 34:
          case 39:
          case 91:
            characters2 += delimit(character2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            characters2 += whitespace(previous);
            break;
          case 92:
            characters2 += escaping(caret() - 1, 7);
            continue;
          case 47:
            switch (peek()) {
              case 42:
              case 47:
                append(comment(commenter(next(), caret()), root, parent), declarations);
                break;
              default:
                characters2 += "/";
            }
            break;
          case 123 * variable:
            points[index2++] = strlen(characters2) * ampersand;
          case 125 * variable:
          case 59:
          case 0:
            switch (character2) {
              case 0:
              case 125:
                scanning = 0;
              case 59 + offset2:
                if (property > 0 && strlen(characters2) - length2)
                  append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace$1(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
                break;
              case 59:
                characters2 += ";";
              default:
                append(reference = ruleset(characters2, root, parent, index2, offset2, rules, points, type, props = [], children = [], length2), rulesets);
                if (character2 === 123)
                  if (offset2 === 0)
                    parse$2(characters2, root, reference, reference, props, rulesets, length2, points, children);
                  else
                    switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                      case 100:
                      case 109:
                      case 115:
                        parse$2(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                        break;
                      default:
                        parse$2(characters2, reference, reference, reference, [""], children, 0, points, children);
                    }
            }
            index2 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
            break;
          case 58:
            length2 = 1 + strlen(characters2), property = previous;
          default:
            if (variable < 1) {
              if (character2 == 123)
                --variable;
              else if (character2 == 125 && variable++ == 0 && prev() == 125)
                continue;
            }
            switch (characters2 += from$1(character2), character2 * variable) {
              case 38:
                ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
                break;
              case 44:
                points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
                break;
              case 64:
                if (peek() === 45)
                  characters2 += delimit(next());
                atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
                break;
              case 45:
                if (previous === 45 && strlen(characters2) == 2)
                  variable = 0;
            }
        }
      return rulesets;
    }
    function ruleset(value, root, parent, index2, offset2, rules, points, type, props, children, length2) {
      var post = offset2 - 1;
      var rule = offset2 === 0 ? rules : [""];
      var size = sizeof(rule);
      for (var i = 0, j = 0, k2 = 0; i < index2; ++i)
        for (var x2 = 0, y2 = substr(value, post + 1, post = abs$2(j = points[i])), z2 = value; x2 < size; ++x2)
          if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace$1(y2, /&\f/g, rule[x2])))
            props[k2++] = z2;
      return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
    }
    function comment(value, root, parent) {
      return node(value, root, parent, COMMENT, from$1(char()), substr(value, 2, -2), 0);
    }
    function declaration(value, root, parent, length2) {
      return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
    }
    function serialize(children, callback) {
      var output = "";
      var length2 = sizeof(children);
      for (var i = 0; i < length2; i++)
        output += callback(children[i], i, children, callback) || "";
      return output;
    }
    function stringify(element, index2, children, callback) {
      switch (element.type) {
        case IMPORT:
        case DECLARATION:
          return element.return = element.return || element.value;
        case COMMENT:
          return "";
        case KEYFRAMES:
          return element.return = element.value + "{" + serialize(element.children, callback) + "}";
        case RULESET:
          element.value = element.props.join(",");
      }
      return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
    }
    function middleware(collection) {
      var length2 = sizeof(collection);
      return function(element, index2, children, callback) {
        var output = "";
        for (var i = 0; i < length2; i++)
          output += collection[i](element, index2, children, callback) || "";
        return output;
      };
    }
    function rulesheet(callback) {
      return function(element) {
        if (!element.root) {
          if (element = element.return)
            callback(element);
        }
      };
    }
    var identifierWithPointTracking = function identifierWithPointTracking2(begin2, points, index2) {
      var previous = 0;
      var character2 = 0;
      while (true) {
        previous = character2;
        character2 = peek();
        if (previous === 38 && character2 === 12) {
          points[index2] = 1;
        }
        if (token$1(character2)) {
          break;
        }
        next();
      }
      return slice(begin2, position);
    };
    var toRules = function toRules2(parsed, points) {
      var index2 = -1;
      var character2 = 44;
      do {
        switch (token$1(character2)) {
          case 0:
            if (character2 === 38 && peek() === 12) {
              points[index2] = 1;
            }
            parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
            break;
          case 2:
            parsed[index2] += delimit(character2);
            break;
          case 4:
            if (character2 === 44) {
              parsed[++index2] = peek() === 58 ? "&\f" : "";
              points[index2] = parsed[index2].length;
              break;
            }
          default:
            parsed[index2] += from$1(character2);
        }
      } while (character2 = next());
      return parsed;
    };
    var getRules = function getRules2(value, points) {
      return dealloc(toRules(alloc(value), points));
    };
    var fixedElements = /* @__PURE__ */ new WeakMap();
    var compat = function compat2(element) {
      if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
      // negative .length indicates that this rule has been already prefixed
      element.length < 1) {
        return;
      }
      var value = element.value, parent = element.parent;
      var isImplicitRule = element.column === parent.column && element.line === parent.line;
      while (parent.type !== "rule") {
        parent = parent.parent;
        if (!parent)
          return;
      }
      if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
      }
      if (isImplicitRule) {
        return;
      }
      fixedElements.set(element, true);
      var points = [];
      var rules = getRules(value, points);
      var parentRules = parent.props;
      for (var i = 0, k2 = 0; i < rules.length; i++) {
        for (var j = 0; j < parentRules.length; j++, k2++) {
          element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
      }
    };
    var removeLabel = function removeLabel2(element) {
      if (element.type === "decl") {
        var value = element.value;
        if (
          // charcode for l
          value.charCodeAt(0) === 108 && // charcode for b
          value.charCodeAt(2) === 98
        ) {
          element["return"] = "";
          element.value = "";
        }
      }
    };
    function prefix(value, length2) {
      switch (hash(value, length2)) {
        case 5103:
          return WEBKIT + "print-" + value + value;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return WEBKIT + value + value;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return WEBKIT + value + MOZ + value + MS + value + value;
        case 6828:
        case 4268:
          return WEBKIT + value + MS + value + value;
        case 6165:
          return WEBKIT + value + MS + "flex-" + value + value;
        case 5187:
          return WEBKIT + value + replace$1(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
        case 5443:
          return WEBKIT + value + MS + "flex-item-" + replace$1(value, /flex-|-self/, "") + value;
        case 4675:
          return WEBKIT + value + MS + "flex-line-pack" + replace$1(value, /align-content|flex-|-self/, "") + value;
        case 5548:
          return WEBKIT + value + MS + replace$1(value, "shrink", "negative") + value;
        case 5292:
          return WEBKIT + value + MS + replace$1(value, "basis", "preferred-size") + value;
        case 6060:
          return WEBKIT + "box-" + replace$1(value, "-grow", "") + WEBKIT + value + MS + replace$1(value, "grow", "positive") + value;
        case 4554:
          return WEBKIT + replace$1(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
        case 6187:
          return replace$1(replace$1(replace$1(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
        case 5495:
        case 3959:
          return replace$1(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
        case 4968:
          return replace$1(replace$1(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return replace$1(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (strlen(value) - 1 - length2 > 6)
            switch (charat(value, length2 + 1)) {
              case 109:
                if (charat(value, length2 + 4) !== 45)
                  break;
              case 102:
                return replace$1(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
              case 115:
                return ~indexof(value, "stretch") ? prefix(replace$1(value, "stretch", "fill-available"), length2) + value : value;
            }
          break;
        case 4949:
          if (charat(value, length2 + 1) !== 115)
            break;
        case 6444:
          switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
            case 107:
              return replace$1(value, ":", ":" + WEBKIT) + value;
            case 101:
              return replace$1(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
          }
          break;
        case 5936:
          switch (charat(value, length2 + 11)) {
            case 114:
              return WEBKIT + value + MS + replace$1(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
            case 108:
              return WEBKIT + value + MS + replace$1(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
            case 45:
              return WEBKIT + value + MS + replace$1(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
          }
          return WEBKIT + value + MS + value + value;
      }
      return value;
    }
    var prefixer = function prefixer2(element, index2, children, callback) {
      if (element.length > -1) {
        if (!element["return"])
          switch (element.type) {
            case DECLARATION:
              element["return"] = prefix(element.value, element.length);
              break;
            case KEYFRAMES:
              return serialize([copy(element, {
                value: replace$1(element.value, "@", "@" + WEBKIT)
              })], callback);
            case RULESET:
              if (element.length)
                return combine(element.props, function(value) {
                  switch (match(value, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return serialize([copy(element, {
                        props: [replace$1(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                      })], callback);
                    case "::placeholder":
                      return serialize([copy(element, {
                        props: [replace$1(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                      }), copy(element, {
                        props: [replace$1(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                      }), copy(element, {
                        props: [replace$1(value, /:(plac\w+)/, MS + "input-$1")]
                      })], callback);
                  }
                  return "";
                });
          }
      }
    };
    var defaultStylisPlugins = [prefixer];
    var createCache = function createCache2(options) {
      var key = options.key;
      if (key === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(ssrStyles, function(node2) {
          var dataEmotionAttribute = node2.getAttribute("data-emotion");
          if (dataEmotionAttribute.indexOf(" ") === -1) {
            return;
          }
          document.head.appendChild(node2);
          node2.setAttribute("data-s", "");
        });
      }
      var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
      var inserted = {};
      var container;
      var nodesToHydrate = [];
      {
        container = options.container || document.head;
        Array.prototype.forEach.call(
          // this means we will ignore elements which don't have a space in them which
          // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
          document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
          function(node2) {
            var attrib = node2.getAttribute("data-emotion").split(" ");
            for (var i = 1; i < attrib.length; i++) {
              inserted[attrib[i]] = true;
            }
            nodesToHydrate.push(node2);
          }
        );
      }
      var _insert;
      var omnipresentPlugins = [compat, removeLabel];
      {
        var currentSheet;
        var finalizingPlugins = [stringify, rulesheet(function(rule) {
          currentSheet.insert(rule);
        })];
        var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
        var stylis = function stylis2(styles2) {
          return serialize(compile(styles2), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
          currentSheet = sheet;
          stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
          if (shouldCache) {
            cache.inserted[serialized.name] = true;
          }
        };
      }
      var cache = {
        key,
        sheet: new StyleSheet({
          key,
          container,
          nonce: options.nonce,
          speedy: options.speedy,
          prepend: options.prepend,
          insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted,
        registered: {},
        insert: _insert
      };
      cache.sheet.hydrate(nodesToHydrate);
      return cache;
    };
    var reactIsExports = {};
    var reactIs$1 = {
      get exports() {
        return reactIsExports;
      },
      set exports(v2) {
        reactIsExports = v2;
      }
    };
    var reactIs_production_min = {};
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d$1 = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p$1 = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w$1 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u2 = a.$$typeof;
        switch (u2) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p$1:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u2;
                }
            }
          case d$1:
            return u2;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    reactIs_production_min.AsyncMode = l;
    reactIs_production_min.ConcurrentMode = m;
    reactIs_production_min.ContextConsumer = k;
    reactIs_production_min.ContextProvider = h;
    reactIs_production_min.Element = c;
    reactIs_production_min.ForwardRef = n;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t;
    reactIs_production_min.Memo = r;
    reactIs_production_min.Portal = d$1;
    reactIs_production_min.Profiler = g;
    reactIs_production_min.StrictMode = f;
    reactIs_production_min.Suspense = p$1;
    reactIs_production_min.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    reactIs_production_min.isConcurrentMode = A;
    reactIs_production_min.isContextConsumer = function(a) {
      return z(a) === k;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return z(a) === h;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return z(a) === n;
    };
    reactIs_production_min.isFragment = function(a) {
      return z(a) === e;
    };
    reactIs_production_min.isLazy = function(a) {
      return z(a) === t;
    };
    reactIs_production_min.isMemo = function(a) {
      return z(a) === r;
    };
    reactIs_production_min.isPortal = function(a) {
      return z(a) === d$1;
    };
    reactIs_production_min.isProfiler = function(a) {
      return z(a) === g;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return z(a) === f;
    };
    reactIs_production_min.isSuspense = function(a) {
      return z(a) === p$1;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p$1 || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w$1 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    reactIs_production_min.typeOf = z;
    (function(module2) {
      {
        module2.exports = reactIs_production_min;
      }
    })(reactIs$1);
    var reactIs = reactIsExports;
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    var isBrowser = true;
    function getRegisteredStyles(registered, registeredStyles, classNames) {
      var rawClassName = "";
      classNames.split(" ").forEach(function(className) {
        if (registered[className] !== void 0) {
          registeredStyles.push(registered[className] + ";");
        } else {
          rawClassName += className + " ";
        }
      });
      return rawClassName;
    }
    var registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
      var className = cache.key + "-" + serialized.name;
      if (
        // we only need to add the styles to the registered cache if the
        // class name could be used further down
        // the tree but if it's a string tag, we know it won't
        // so we don't have to add it to registered cache.
        // this improves memory usage since we can avoid storing the whole style string
        (isStringTag2 === false || // we need to always store it if we're in compat mode and
        // in node since emotion-server relies on whether a style is in
        // the registered cache to know whether a style is global or not
        // also, note that this check will be dead code eliminated in the browser
        isBrowser === false) && cache.registered[className] === void 0
      ) {
        cache.registered[className] = serialized.styles;
      }
    };
    var insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
      registerStyles(cache, serialized, isStringTag2);
      var className = cache.key + "-" + serialized.name;
      if (cache.inserted[serialized.name] === void 0) {
        var current = serialized;
        do {
          cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
          current = current.next;
        } while (current !== void 0);
      }
    };
    function murmur2(str) {
      var h2 = 0;
      var k2, i = 0, len = str.length;
      for (; len >= 4; ++i, len -= 4) {
        k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
        k2 ^= /* k >>> r: */
        k2 >>> 24;
        h2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      switch (len) {
        case 3:
          h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h2 ^= str.charCodeAt(i) & 255;
          h2 = /* Math.imul(h, m): */
          (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      h2 ^= h2 >>> 13;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
    }
    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      // SVG-related properties
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    var hyphenateRegex = /[A-Z]|^ms/g;
    var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
    var isCustomProperty = function isCustomProperty2(property) {
      return property.charCodeAt(1) === 45;
    };
    var isProcessableValue = function isProcessableValue2(value) {
      return value != null && typeof value !== "boolean";
    };
    var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
      return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
    });
    var processStyleValue = function processStyleValue2(key, value) {
      switch (key) {
        case "animation":
        case "animationName": {
          if (typeof value === "string") {
            return value.replace(animationRegex, function(match5, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
      }
      if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
        return value + "px";
      }
      return value;
    };
    var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
    function handleInterpolation(mergedProps, registered, interpolation) {
      if (interpolation == null) {
        return "";
      }
      if (interpolation.__emotion_styles !== void 0) {
        return interpolation;
      }
      switch (typeof interpolation) {
        case "boolean": {
          return "";
        }
        case "object": {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }
          if (interpolation.styles !== void 0) {
            var next2 = interpolation.next;
            if (next2 !== void 0) {
              while (next2 !== void 0) {
                cursor = {
                  name: next2.name,
                  styles: next2.styles,
                  next: cursor
                };
                next2 = next2.next;
              }
            }
            var styles2 = interpolation.styles + ";";
            return styles2;
          }
          return createStringFromObject(mergedProps, registered, interpolation);
        }
        case "function": {
          if (mergedProps !== void 0) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }
          break;
        }
      }
      if (registered == null) {
        return interpolation;
      }
      var cached = registered[interpolation];
      return cached !== void 0 ? cached : interpolation;
    }
    function createStringFromObject(mergedProps, registered, obj) {
      var string = "";
      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
        }
      } else {
        for (var _key in obj) {
          var value = obj[_key];
          if (typeof value !== "object") {
            if (registered != null && registered[value] !== void 0) {
              string += _key + "{" + registered[value] + "}";
            } else if (isProcessableValue(value)) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
            }
          } else {
            if (_key === "NO_COMPONENT_SELECTOR" && false) {
              throw new Error(noComponentSelectorMessage);
            }
            if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
              for (var _i = 0; _i < value.length; _i++) {
                if (isProcessableValue(value[_i])) {
                  string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
                }
              }
            } else {
              var interpolated = handleInterpolation(mergedProps, registered, value);
              switch (_key) {
                case "animation":
                case "animationName": {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }
                default: {
                  string += _key + "{" + interpolated + "}";
                }
              }
            }
          }
        }
      }
      return string;
    }
    var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
    var cursor;
    var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
      if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
        return args[0];
      }
      var stringMode = true;
      var styles2 = "";
      cursor = void 0;
      var strings = args[0];
      if (strings == null || strings.raw === void 0) {
        stringMode = false;
        styles2 += handleInterpolation(mergedProps, registered, strings);
      } else {
        styles2 += strings[0];
      }
      for (var i = 1; i < args.length; i++) {
        styles2 += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
          styles2 += strings[i];
        }
      }
      labelPattern.lastIndex = 0;
      var identifierName = "";
      var match5;
      while ((match5 = labelPattern.exec(styles2)) !== null) {
        identifierName += "-" + // $FlowFixMe we know it's not null
        match5[1];
      }
      var name = murmur2(styles2) + identifierName;
      return {
        name,
        styles: styles2,
        next: cursor
      };
    };
    var syncFallback = function syncFallback2(create) {
      return create();
    };
    var useInsertionEffect = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : false;
    var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
    var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
      // we're doing this to avoid preconstruct's dead code elimination in this one case
      // because this module is primarily intended for the browser and node
      // but it's also required in react native and similar environments sometimes
      // and we could have a special build just for that
      // but this is much easier and the native packages
      // might use a different theme context in the future anyway
      typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
        key: "css"
      }) : null
    );
    EmotionCacheContext.Provider;
    var withEmotionCache = function withEmotionCache2(func) {
      return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
        var cache = reactExports.useContext(EmotionCacheContext);
        return func(props, cache, ref);
      });
    };
    var ThemeContext$2 = /* @__PURE__ */ reactExports.createContext({});
    function css$1() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return serializeStyles(args);
    }
    var keyframes = function keyframes2() {
      var insertable = css$1.apply(void 0, arguments);
      var name = "animation-" + insertable.name;
      return {
        name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString2() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
      };
    };
    var testOmitPropsOnStringTag = isPropValid;
    var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
      return key !== "theme";
    };
    var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
      return typeof tag === "string" && // 96 is one less than the char code
      // for "a" so this is checking that
      // it's a lowercase character
      tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
    };
    var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
      var shouldForwardProp2;
      if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
          return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
      }
      if (typeof shouldForwardProp2 !== "function" && isReal) {
        shouldForwardProp2 = tag.__emotion_forwardProp;
      }
      return shouldForwardProp2;
    };
    var Insertion = function Insertion2(_ref2) {
      var cache = _ref2.cache, serialized = _ref2.serialized, isStringTag2 = _ref2.isStringTag;
      registerStyles(cache, serialized, isStringTag2);
      useInsertionEffectAlwaysWithSyncFallback(function() {
        return insertStyles(cache, serialized, isStringTag2);
      });
      return null;
    };
    var createStyled$1 = function createStyled2(tag, options) {
      var isReal = tag.__emotion_real === tag;
      var baseTag = isReal && tag.__emotion_base || tag;
      var identifierName;
      var targetClassName;
      if (options !== void 0) {
        identifierName = options.label;
        targetClassName = options.target;
      }
      var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
      var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
      var shouldUseAs = !defaultShouldForwardProp("as");
      return function() {
        var args = arguments;
        var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== void 0) {
          styles2.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === void 0) {
          styles2.push.apply(styles2, args);
        } else {
          styles2.push(args[0][0]);
          var len = args.length;
          var i = 1;
          for (; i < len; i++) {
            styles2.push(args[i], args[0][i]);
          }
        }
        var Styled = withEmotionCache(function(props, cache, ref) {
          var FinalTag = shouldUseAs && props.as || baseTag;
          var className = "";
          var classInterpolations = [];
          var mergedProps = props;
          if (props.theme == null) {
            mergedProps = {};
            for (var key in props) {
              mergedProps[key] = props[key];
            }
            mergedProps.theme = reactExports.useContext(ThemeContext$2);
          }
          if (typeof props.className === "string") {
            className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
          } else if (props.className != null) {
            className = props.className + " ";
          }
          var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
          className += cache.key + "-" + serialized.name;
          if (targetClassName !== void 0) {
            className += " " + targetClassName;
          }
          var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
          var newProps = {};
          for (var _key in props) {
            if (shouldUseAs && _key === "as")
              continue;
            if (
              // $FlowFixMe
              finalShouldForwardProp(_key)
            ) {
              newProps[_key] = props[_key];
            }
          }
          newProps.className = className;
          newProps.ref = ref;
          return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
            cache,
            serialized,
            isStringTag: typeof FinalTag === "string"
          }), /* @__PURE__ */ reactExports.createElement(FinalTag, newProps));
        });
        Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles2;
        Styled.__emotion_forwardProp = shouldForwardProp2;
        Object.defineProperty(Styled, "toString", {
          value: function value() {
            if (targetClassName === void 0 && false) {
              return "NO_COMPONENT_SELECTOR";
            }
            return "." + targetClassName;
          }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
          return createStyled2(nextTag, _extends({}, options, nextOptions, {
            shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
          })).apply(void 0, styles2);
        };
        return Styled;
      };
    };
    var tags = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      // SVG
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan"
    ];
    var newStyled = createStyled$1.bind();
    tags.forEach(function(tagName) {
      newStyled[tagName] = newStyled(tagName);
    });
    const emStyled = newStyled;
    /**
     * @mui/styled-engine v5.11.11
     *
     * @license MIT
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    function styled$2(tag, options) {
      const stylesFactory = emStyled(tag, options);
      return stylesFactory;
    }
    const internal_processStyles = (tag, processor) => {
      if (Array.isArray(tag.__emotion_styles)) {
        tag.__emotion_styles = processor(tag.__emotion_styles);
      }
    };
    function merge(acc, item) {
      if (!item) {
        return acc;
      }
      return deepmerge(acc, item, {
        clone: false
        // No need to clone deep, it's way faster.
      });
    }
    const values$1 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    };
    const defaultBreakpoints = {
      // Sorted ASC by size. That's important.
      // It can't be configured as it's used statically for propTypes.
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (key) => `@media (min-width:${values$1[key]}px)`
    };
    function handleBreakpoints(props, propValue, styleFromPropValue) {
      const theme = props.theme || {};
      if (Array.isArray(propValue)) {
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        return propValue.reduce((acc, item, index2) => {
          acc[themeBreakpoints.up(themeBreakpoints.keys[index2])] = styleFromPropValue(propValue[index2]);
          return acc;
        }, {});
      }
      if (typeof propValue === "object") {
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        return Object.keys(propValue).reduce((acc, breakpoint) => {
          if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
            const mediaKey = themeBreakpoints.up(breakpoint);
            acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
          } else {
            const cssKey = breakpoint;
            acc[cssKey] = propValue[cssKey];
          }
          return acc;
        }, {});
      }
      const output = styleFromPropValue(propValue);
      return output;
    }
    function createEmptyBreakpointObject(breakpointsInput = {}) {
      var _breakpointsInput$key;
      const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
        const breakpointStyleKey = breakpointsInput.up(key);
        acc[breakpointStyleKey] = {};
        return acc;
      }, {});
      return breakpointsInOrder || {};
    }
    function removeUnusedBreakpoints(breakpointKeys, style2) {
      return breakpointKeys.reduce((acc, key) => {
        const breakpointOutput = acc[key];
        const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
        if (isBreakpointUnused) {
          delete acc[key];
        }
        return acc;
      }, style2);
    }
    function getPath(obj, path, checkVars = true) {
      if (!path || typeof path !== "string") {
        return null;
      }
      if (obj && obj.vars && checkVars) {
        const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
        if (val != null) {
          return val;
        }
      }
      return path.split(".").reduce((acc, item) => {
        if (acc && acc[item] != null) {
          return acc[item];
        }
        return null;
      }, obj);
    }
    function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
      let value;
      if (typeof themeMapping === "function") {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || userValue;
      } else {
        value = getPath(themeMapping, propValueFinal) || userValue;
      }
      if (transform) {
        value = transform(value, userValue, themeMapping);
      }
      return value;
    }
    function style$1(options) {
      const {
        prop,
        cssProperty = options.prop,
        themeKey,
        transform
      } = options;
      const fn = (props) => {
        if (props[prop] == null) {
          return null;
        }
        const propValue = props[prop];
        const theme = props.theme;
        const themeMapping = getPath(theme, themeKey) || {};
        const styleFromPropValue = (propValueFinal) => {
          let value = getStyleValue(themeMapping, transform, propValueFinal);
          if (propValueFinal === value && typeof propValueFinal === "string") {
            value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
          }
          if (cssProperty === false) {
            return value;
          }
          return {
            [cssProperty]: value
          };
        };
        return handleBreakpoints(props, propValue, styleFromPropValue);
      };
      fn.propTypes = {};
      fn.filterProps = [prop];
      return fn;
    }
    function compose(...styles2) {
      const handlers = styles2.reduce((acc, style2) => {
        style2.filterProps.forEach((prop) => {
          acc[prop] = style2;
        });
        return acc;
      }, {});
      const fn = (props) => {
        return Object.keys(props).reduce((acc, prop) => {
          if (handlers[prop]) {
            return merge(acc, handlers[prop](props));
          }
          return acc;
        }, {});
      };
      fn.propTypes = {};
      fn.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
      return fn;
    }
    function memoize(fn) {
      const cache = {};
      return (arg) => {
        if (cache[arg] === void 0) {
          cache[arg] = fn(arg);
        }
        return cache[arg];
      };
    }
    const properties = {
      m: "margin",
      p: "padding"
    };
    const directions = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"]
    };
    const aliases$1 = {
      marginX: "mx",
      marginY: "my",
      paddingX: "px",
      paddingY: "py"
    };
    const getCssProperties = memoize((prop) => {
      if (prop.length > 2) {
        if (aliases$1[prop]) {
          prop = aliases$1[prop];
        } else {
          return [prop];
        }
      }
      const [a, b2] = prop.split("");
      const property = properties[a];
      const direction = directions[b2] || "";
      return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
    });
    const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
    const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
    [...marginKeys, ...paddingKeys];
    function createUnaryUnit(theme, themeKey, defaultValue, propName) {
      var _getPath;
      const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
      if (typeof themeSpacing === "number") {
        return (abs2) => {
          if (typeof abs2 === "string") {
            return abs2;
          }
          return themeSpacing * abs2;
        };
      }
      if (Array.isArray(themeSpacing)) {
        return (abs2) => {
          if (typeof abs2 === "string") {
            return abs2;
          }
          return themeSpacing[abs2];
        };
      }
      if (typeof themeSpacing === "function") {
        return themeSpacing;
      }
      return () => void 0;
    }
    function createUnarySpacing(theme) {
      return createUnaryUnit(theme, "spacing", 8);
    }
    function getValue(transformer, propValue) {
      if (typeof propValue === "string" || propValue == null) {
        return propValue;
      }
      const abs2 = Math.abs(propValue);
      const transformed = transformer(abs2);
      if (propValue >= 0) {
        return transformed;
      }
      if (typeof transformed === "number") {
        return -transformed;
      }
      return `-${transformed}`;
    }
    function getStyleFromPropValue(cssProperties, transformer) {
      return (propValue) => cssProperties.reduce((acc, cssProperty) => {
        acc[cssProperty] = getValue(transformer, propValue);
        return acc;
      }, {});
    }
    function resolveCssProperty(props, keys2, prop, transformer) {
      if (keys2.indexOf(prop) === -1) {
        return null;
      }
      const cssProperties = getCssProperties(prop);
      const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
      const propValue = props[prop];
      return handleBreakpoints(props, propValue, styleFromPropValue);
    }
    function style(props, keys2) {
      const transformer = createUnarySpacing(props.theme);
      return Object.keys(props).map((prop) => resolveCssProperty(props, keys2, prop, transformer)).reduce(merge, {});
    }
    function margin(props) {
      return style(props, marginKeys);
    }
    margin.propTypes = {};
    margin.filterProps = marginKeys;
    function padding(props) {
      return style(props, paddingKeys);
    }
    padding.propTypes = {};
    padding.filterProps = paddingKeys;
    function borderTransform(value) {
      if (typeof value !== "number") {
        return value;
      }
      return `${value}px solid`;
    }
    const border = style$1({
      prop: "border",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderTop = style$1({
      prop: "borderTop",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderRight = style$1({
      prop: "borderRight",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderBottom = style$1({
      prop: "borderBottom",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderLeft = style$1({
      prop: "borderLeft",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderColor = style$1({
      prop: "borderColor",
      themeKey: "palette"
    });
    const borderTopColor = style$1({
      prop: "borderTopColor",
      themeKey: "palette"
    });
    const borderRightColor = style$1({
      prop: "borderRightColor",
      themeKey: "palette"
    });
    const borderBottomColor = style$1({
      prop: "borderBottomColor",
      themeKey: "palette"
    });
    const borderLeftColor = style$1({
      prop: "borderLeftColor",
      themeKey: "palette"
    });
    const borderRadius = (props) => {
      if (props.borderRadius !== void 0 && props.borderRadius !== null) {
        const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
        const styleFromPropValue = (propValue) => ({
          borderRadius: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
      }
      return null;
    };
    borderRadius.propTypes = {};
    borderRadius.filterProps = ["borderRadius"];
    compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
    const gap = (props) => {
      if (props.gap !== void 0 && props.gap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8);
        const styleFromPropValue = (propValue) => ({
          gap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.gap, styleFromPropValue);
      }
      return null;
    };
    gap.propTypes = {};
    gap.filterProps = ["gap"];
    const columnGap = (props) => {
      if (props.columnGap !== void 0 && props.columnGap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8);
        const styleFromPropValue = (propValue) => ({
          columnGap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.columnGap, styleFromPropValue);
      }
      return null;
    };
    columnGap.propTypes = {};
    columnGap.filterProps = ["columnGap"];
    const rowGap = (props) => {
      if (props.rowGap !== void 0 && props.rowGap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8);
        const styleFromPropValue = (propValue) => ({
          rowGap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.rowGap, styleFromPropValue);
      }
      return null;
    };
    rowGap.propTypes = {};
    rowGap.filterProps = ["rowGap"];
    const gridColumn = style$1({
      prop: "gridColumn"
    });
    const gridRow = style$1({
      prop: "gridRow"
    });
    const gridAutoFlow = style$1({
      prop: "gridAutoFlow"
    });
    const gridAutoColumns = style$1({
      prop: "gridAutoColumns"
    });
    const gridAutoRows = style$1({
      prop: "gridAutoRows"
    });
    const gridTemplateColumns = style$1({
      prop: "gridTemplateColumns"
    });
    const gridTemplateRows = style$1({
      prop: "gridTemplateRows"
    });
    const gridTemplateAreas = style$1({
      prop: "gridTemplateAreas"
    });
    const gridArea = style$1({
      prop: "gridArea"
    });
    compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
    function paletteTransform(value, userValue) {
      if (userValue === "grey") {
        return userValue;
      }
      return value;
    }
    const color = style$1({
      prop: "color",
      themeKey: "palette",
      transform: paletteTransform
    });
    const bgcolor = style$1({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: paletteTransform
    });
    const backgroundColor = style$1({
      prop: "backgroundColor",
      themeKey: "palette",
      transform: paletteTransform
    });
    compose(color, bgcolor, backgroundColor);
    function sizingTransform(value) {
      return value <= 1 && value !== 0 ? `${value * 100}%` : value;
    }
    const width = style$1({
      prop: "width",
      transform: sizingTransform
    });
    const maxWidth = (props) => {
      if (props.maxWidth !== void 0 && props.maxWidth !== null) {
        const styleFromPropValue = (propValue) => {
          var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
          const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
          return {
            maxWidth: breakpoint || sizingTransform(propValue)
          };
        };
        return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
      }
      return null;
    };
    maxWidth.filterProps = ["maxWidth"];
    const minWidth = style$1({
      prop: "minWidth",
      transform: sizingTransform
    });
    const height = style$1({
      prop: "height",
      transform: sizingTransform
    });
    const maxHeight = style$1({
      prop: "maxHeight",
      transform: sizingTransform
    });
    const minHeight = style$1({
      prop: "minHeight",
      transform: sizingTransform
    });
    style$1({
      prop: "size",
      cssProperty: "width",
      transform: sizingTransform
    });
    style$1({
      prop: "size",
      cssProperty: "height",
      transform: sizingTransform
    });
    const boxSizing = style$1({
      prop: "boxSizing"
    });
    compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
    const createFontStyleFunction = (prop) => {
      return (props) => {
        if (props[prop] !== void 0 && props[prop] !== null) {
          const styleFromPropValue = (propValue) => {
            var _props$theme$typograp, _props$prop;
            let value = (_props$theme$typograp = props.theme.typography) == null ? void 0 : _props$theme$typograp[`${prop}${props[prop] === "default" || props[prop] === prop ? "" : capitalize$1((_props$prop = props[prop]) == null ? void 0 : _props$prop.toString())}`];
            if (!value) {
              var _props$theme$typograp2, _props$theme$typograp3;
              value = (_props$theme$typograp2 = props.theme.typography) == null ? void 0 : (_props$theme$typograp3 = _props$theme$typograp2[propValue]) == null ? void 0 : _props$theme$typograp3[prop];
            }
            if (!value) {
              value = propValue;
            }
            return {
              [prop]: value
            };
          };
          return handleBreakpoints(props, props[prop], styleFromPropValue);
        }
        return null;
      };
    };
    const defaultSxConfig = {
      // borders
      border: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderTop: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderRight: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderBottom: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderLeft: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderColor: {
        themeKey: "palette"
      },
      borderTopColor: {
        themeKey: "palette"
      },
      borderRightColor: {
        themeKey: "palette"
      },
      borderBottomColor: {
        themeKey: "palette"
      },
      borderLeftColor: {
        themeKey: "palette"
      },
      borderRadius: {
        themeKey: "shape.borderRadius",
        style: borderRadius
      },
      // palette
      color: {
        themeKey: "palette",
        transform: paletteTransform
      },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: paletteTransform
      },
      backgroundColor: {
        themeKey: "palette",
        transform: paletteTransform
      },
      // spacing
      p: {
        style: padding
      },
      pt: {
        style: padding
      },
      pr: {
        style: padding
      },
      pb: {
        style: padding
      },
      pl: {
        style: padding
      },
      px: {
        style: padding
      },
      py: {
        style: padding
      },
      padding: {
        style: padding
      },
      paddingTop: {
        style: padding
      },
      paddingRight: {
        style: padding
      },
      paddingBottom: {
        style: padding
      },
      paddingLeft: {
        style: padding
      },
      paddingX: {
        style: padding
      },
      paddingY: {
        style: padding
      },
      paddingInline: {
        style: padding
      },
      paddingInlineStart: {
        style: padding
      },
      paddingInlineEnd: {
        style: padding
      },
      paddingBlock: {
        style: padding
      },
      paddingBlockStart: {
        style: padding
      },
      paddingBlockEnd: {
        style: padding
      },
      m: {
        style: margin
      },
      mt: {
        style: margin
      },
      mr: {
        style: margin
      },
      mb: {
        style: margin
      },
      ml: {
        style: margin
      },
      mx: {
        style: margin
      },
      my: {
        style: margin
      },
      margin: {
        style: margin
      },
      marginTop: {
        style: margin
      },
      marginRight: {
        style: margin
      },
      marginBottom: {
        style: margin
      },
      marginLeft: {
        style: margin
      },
      marginX: {
        style: margin
      },
      marginY: {
        style: margin
      },
      marginInline: {
        style: margin
      },
      marginInlineStart: {
        style: margin
      },
      marginInlineEnd: {
        style: margin
      },
      marginBlock: {
        style: margin
      },
      marginBlockStart: {
        style: margin
      },
      marginBlockEnd: {
        style: margin
      },
      // display
      displayPrint: {
        cssProperty: false,
        transform: (value) => ({
          "@media print": {
            display: value
          }
        })
      },
      display: {},
      overflow: {},
      textOverflow: {},
      visibility: {},
      whiteSpace: {},
      // flexbox
      flexBasis: {},
      flexDirection: {},
      flexWrap: {},
      justifyContent: {},
      alignItems: {},
      alignContent: {},
      order: {},
      flex: {},
      flexGrow: {},
      flexShrink: {},
      alignSelf: {},
      justifyItems: {},
      justifySelf: {},
      // grid
      gap: {
        style: gap
      },
      rowGap: {
        style: rowGap
      },
      columnGap: {
        style: columnGap
      },
      gridColumn: {},
      gridRow: {},
      gridAutoFlow: {},
      gridAutoColumns: {},
      gridAutoRows: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
      gridTemplateAreas: {},
      gridArea: {},
      // positions
      position: {},
      zIndex: {
        themeKey: "zIndex"
      },
      top: {},
      right: {},
      bottom: {},
      left: {},
      // shadows
      boxShadow: {
        themeKey: "shadows"
      },
      // sizing
      width: {
        transform: sizingTransform
      },
      maxWidth: {
        style: maxWidth
      },
      minWidth: {
        transform: sizingTransform
      },
      height: {
        transform: sizingTransform
      },
      maxHeight: {
        transform: sizingTransform
      },
      minHeight: {
        transform: sizingTransform
      },
      boxSizing: {},
      // typography
      fontFamily: {
        themeKey: "typography",
        style: createFontStyleFunction("fontFamily")
      },
      fontSize: {
        themeKey: "typography",
        style: createFontStyleFunction("fontSize")
      },
      fontStyle: {
        themeKey: "typography"
      },
      fontWeight: {
        themeKey: "typography",
        style: createFontStyleFunction("fontWeight")
      },
      letterSpacing: {},
      textTransform: {},
      lineHeight: {},
      textAlign: {},
      typography: {
        cssProperty: false,
        themeKey: "typography"
      }
    };
    const defaultSxConfig$1 = defaultSxConfig;
    function objectsHaveSameKeys(...objects) {
      const allKeys = objects.reduce((keys2, object) => keys2.concat(Object.keys(object)), []);
      const union = new Set(allKeys);
      return objects.every((object) => union.size === Object.keys(object).length);
    }
    function callIfFn(maybeFn, arg) {
      return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
    }
    function unstable_createStyleFunctionSx() {
      function getThemeValue(prop, val, theme, config2) {
        const props = {
          [prop]: val,
          theme
        };
        const options = config2[prop];
        if (!options) {
          return {
            [prop]: val
          };
        }
        const {
          cssProperty = prop,
          themeKey,
          transform,
          style: style2
        } = options;
        if (val == null) {
          return null;
        }
        const themeMapping = getPath(theme, themeKey) || {};
        if (style2) {
          return style2(props);
        }
        const styleFromPropValue = (propValueFinal) => {
          let value = getStyleValue(themeMapping, transform, propValueFinal);
          if (propValueFinal === value && typeof propValueFinal === "string") {
            value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
          }
          if (cssProperty === false) {
            return value;
          }
          return {
            [cssProperty]: value
          };
        };
        return handleBreakpoints(props, val, styleFromPropValue);
      }
      function styleFunctionSx2(props) {
        var _theme$unstable_sxCon;
        const {
          sx,
          theme = {}
        } = props || {};
        if (!sx) {
          return null;
        }
        const config2 = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;
        function traverse(sxInput) {
          let sxObject = sxInput;
          if (typeof sxInput === "function") {
            sxObject = sxInput(theme);
          } else if (typeof sxInput !== "object") {
            return sxInput;
          }
          if (!sxObject) {
            return null;
          }
          const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
          const breakpointsKeys = Object.keys(emptyBreakpoints);
          let css2 = emptyBreakpoints;
          Object.keys(sxObject).forEach((styleKey) => {
            const value = callIfFn(sxObject[styleKey], theme);
            if (value !== null && value !== void 0) {
              if (typeof value === "object") {
                if (config2[styleKey]) {
                  css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
                } else {
                  const breakpointsValues = handleBreakpoints({
                    theme
                  }, value, (x2) => ({
                    [styleKey]: x2
                  }));
                  if (objectsHaveSameKeys(breakpointsValues, value)) {
                    css2[styleKey] = styleFunctionSx2({
                      sx: value,
                      theme
                    });
                  } else {
                    css2 = merge(css2, breakpointsValues);
                  }
                }
              } else {
                css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
              }
            }
          });
          return removeUnusedBreakpoints(breakpointsKeys, css2);
        }
        return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
      }
      return styleFunctionSx2;
    }
    const styleFunctionSx = unstable_createStyleFunctionSx();
    styleFunctionSx.filterProps = ["sx"];
    const styleFunctionSx$1 = styleFunctionSx;
    const _excluded$r = ["sx"];
    const splitProps = (props) => {
      var _props$theme$unstable, _props$theme;
      const result = {
        systemProps: {},
        otherProps: {}
      };
      const config2 = (_props$theme$unstable = props == null ? void 0 : (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig$1;
      Object.keys(props).forEach((prop) => {
        if (config2[prop]) {
          result.systemProps[prop] = props[prop];
        } else {
          result.otherProps[prop] = props[prop];
        }
      });
      return result;
    };
    function extendSxProp(props) {
      const {
        sx: inSx
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$r);
      const {
        systemProps,
        otherProps
      } = splitProps(other);
      let finalSx;
      if (Array.isArray(inSx)) {
        finalSx = [systemProps, ...inSx];
      } else if (typeof inSx === "function") {
        finalSx = (...args) => {
          const result = inSx(...args);
          if (!isPlainObject(result)) {
            return systemProps;
          }
          return _extends({}, systemProps, result);
        };
      } else {
        finalSx = _extends({}, systemProps, inSx);
      }
      return _extends({}, otherProps, {
        sx: finalSx
      });
    }
    const _excluded$q = ["values", "unit", "step"];
    const sortBreakpointsValues = (values2) => {
      const breakpointsAsArray = Object.keys(values2).map((key) => ({
        key,
        val: values2[key]
      })) || [];
      breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
      return breakpointsAsArray.reduce((acc, obj) => {
        return _extends({}, acc, {
          [obj.key]: obj.val
        });
      }, {});
    };
    function createBreakpoints(breakpoints) {
      const {
        // The breakpoint **start** at this value.
        // For instance with the first breakpoint xs: [xs, sm).
        values: values2 = {
          xs: 0,
          // phone
          sm: 600,
          // tablet
          md: 900,
          // small laptop
          lg: 1200,
          // desktop
          xl: 1536
          // large screen
        },
        unit = "px",
        step = 5
      } = breakpoints, other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$q);
      const sortedValues = sortBreakpointsValues(values2);
      const keys2 = Object.keys(sortedValues);
      function up(key) {
        const value = typeof values2[key] === "number" ? values2[key] : key;
        return `@media (min-width:${value}${unit})`;
      }
      function down(key) {
        const value = typeof values2[key] === "number" ? values2[key] : key;
        return `@media (max-width:${value - step / 100}${unit})`;
      }
      function between(start, end2) {
        const endIndex = keys2.indexOf(end2);
        return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys2[endIndex]] === "number" ? values2[keys2[endIndex]] : end2) - step / 100}${unit})`;
      }
      function only(key) {
        if (keys2.indexOf(key) + 1 < keys2.length) {
          return between(key, keys2[keys2.indexOf(key) + 1]);
        }
        return up(key);
      }
      function not(key) {
        const keyIndex = keys2.indexOf(key);
        if (keyIndex === 0) {
          return up(keys2[1]);
        }
        if (keyIndex === keys2.length - 1) {
          return down(keys2[keyIndex]);
        }
        return between(key, keys2[keys2.indexOf(key) + 1]).replace("@media", "@media not all and");
      }
      return _extends({
        keys: keys2,
        values: sortedValues,
        up,
        down,
        between,
        only,
        not,
        unit
      }, other);
    }
    const shape = {
      borderRadius: 4
    };
    const shape$1 = shape;
    function createSpacing(spacingInput = 8) {
      if (spacingInput.mui) {
        return spacingInput;
      }
      const transform = createUnarySpacing({
        spacing: spacingInput
      });
      const spacing = (...argsInput) => {
        const args = argsInput.length === 0 ? [1] : argsInput;
        return args.map((argument) => {
          const output = transform(argument);
          return typeof output === "number" ? `${output}px` : output;
        }).join(" ");
      };
      spacing.mui = true;
      return spacing;
    }
    const _excluded$p = ["breakpoints", "palette", "spacing", "shape"];
    function createTheme$1(options = {}, ...args) {
      const {
        breakpoints: breakpointsInput = {},
        palette: paletteInput = {},
        spacing: spacingInput,
        shape: shapeInput = {}
      } = options, other = _objectWithoutPropertiesLoose$1(options, _excluded$p);
      const breakpoints = createBreakpoints(breakpointsInput);
      const spacing = createSpacing(spacingInput);
      let muiTheme = deepmerge({
        breakpoints,
        direction: "ltr",
        components: {},
        // Inject component definitions.
        palette: _extends({
          mode: "light"
        }, paletteInput),
        spacing,
        shape: _extends({}, shape$1, shapeInput)
      }, other);
      muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
      muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
      muiTheme.unstable_sx = function sx(props) {
        return styleFunctionSx$1({
          sx: props,
          theme: this
        });
      };
      return muiTheme;
    }
    const ThemeContext = /* @__PURE__ */ reactExports.createContext(null);
    const ThemeContext$1 = ThemeContext;
    function useTheme$3() {
      const theme = reactExports.useContext(ThemeContext$1);
      return theme;
    }
    function isObjectEmpty$1(obj) {
      return Object.keys(obj).length === 0;
    }
    function useTheme$2(defaultTheme2 = null) {
      const contextTheme = useTheme$3();
      return !contextTheme || isObjectEmpty$1(contextTheme) ? defaultTheme2 : contextTheme;
    }
    const systemDefaultTheme$1 = createTheme$1();
    function useTheme$1(defaultTheme2 = systemDefaultTheme$1) {
      return useTheme$2(defaultTheme2);
    }
    const _excluded$o = ["variant"];
    function isEmpty$1(string) {
      return string.length === 0;
    }
    function propsToClassKey(props) {
      const {
        variant
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$o);
      let classKey = variant || "";
      Object.keys(other).sort().forEach((key) => {
        if (key === "color") {
          classKey += isEmpty$1(classKey) ? props[key] : capitalize$1(props[key]);
        } else {
          classKey += `${isEmpty$1(classKey) ? key : capitalize$1(key)}${capitalize$1(props[key].toString())}`;
        }
      });
      return classKey;
    }
    const _excluded$n = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], _excluded2$2 = ["theme"], _excluded3$1 = ["theme"];
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    function isStringTag(tag) {
      return typeof tag === "string" && // 96 is one less than the char code
      // for "a" so this is checking that
      // it's a lowercase character
      tag.charCodeAt(0) > 96;
    }
    const getStyleOverrides = (name, theme) => {
      if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
        return theme.components[name].styleOverrides;
      }
      return null;
    };
    const getVariantStyles = (name, theme) => {
      let variants = [];
      if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
        variants = theme.components[name].variants;
      }
      const variantsStyles = {};
      variants.forEach((definition) => {
        const key = propsToClassKey(definition.props);
        variantsStyles[key] = definition.style;
      });
      return variantsStyles;
    };
    const variantsResolver = (props, styles2, theme, name) => {
      var _theme$components, _theme$components$nam;
      const {
        ownerState = {}
      } = props;
      const variantsStyles = [];
      const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
      if (themeVariants) {
        themeVariants.forEach((themeVariant) => {
          let isMatch = true;
          Object.keys(themeVariant.props).forEach((key) => {
            if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
              isMatch = false;
            }
          });
          if (isMatch) {
            variantsStyles.push(styles2[propsToClassKey(themeVariant.props)]);
          }
        });
      }
      return variantsStyles;
    };
    function shouldForwardProp(prop) {
      return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
    }
    const systemDefaultTheme = createTheme$1();
    function createStyled(input = {}) {
      const {
        defaultTheme: defaultTheme2 = systemDefaultTheme,
        rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
        slotShouldForwardProp = shouldForwardProp
      } = input;
      const systemSx = (props) => {
        const theme = isEmpty(props.theme) ? defaultTheme2 : props.theme;
        return styleFunctionSx$1(_extends({}, props, {
          theme
        }));
      };
      systemSx.__mui_systemSx = true;
      return (tag, inputOptions = {}) => {
        internal_processStyles(tag, (styles2) => styles2.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
        const {
          name: componentName,
          slot: componentSlot,
          skipVariantsResolver: inputSkipVariantsResolver,
          skipSx: inputSkipSx,
          overridesResolver: overridesResolver2
        } = inputOptions, options = _objectWithoutPropertiesLoose$1(inputOptions, _excluded$n);
        const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || false;
        const skipSx = inputSkipSx || false;
        let label;
        let shouldForwardPropOption = shouldForwardProp;
        if (componentSlot === "Root") {
          shouldForwardPropOption = rootShouldForwardProp2;
        } else if (componentSlot) {
          shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
          shouldForwardPropOption = void 0;
        }
        const defaultStyledResolver = styled$2(tag, _extends({
          shouldForwardProp: shouldForwardPropOption,
          label
        }, options));
        const muiStyledResolver = (styleArg2, ...expressions) => {
          const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
            return typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg ? (_ref2) => {
              let {
                theme: themeInput
              } = _ref2, other = _objectWithoutPropertiesLoose$1(_ref2, _excluded2$2);
              return stylesArg(_extends({
                theme: isEmpty(themeInput) ? defaultTheme2 : themeInput
              }, other));
            } : stylesArg;
          }) : [];
          let transformedStyleArg = styleArg2;
          if (componentName && overridesResolver2) {
            expressionsWithDefaultTheme.push((props) => {
              const theme = isEmpty(props.theme) ? defaultTheme2 : props.theme;
              const styleOverrides = getStyleOverrides(componentName, theme);
              if (styleOverrides) {
                const resolvedStyleOverrides = {};
                Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
                  resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                    theme
                  })) : slotStyle;
                });
                return overridesResolver2(props, resolvedStyleOverrides);
              }
              return null;
            });
          }
          if (componentName && !skipVariantsResolver) {
            expressionsWithDefaultTheme.push((props) => {
              const theme = isEmpty(props.theme) ? defaultTheme2 : props.theme;
              return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
            });
          }
          if (!skipSx) {
            expressionsWithDefaultTheme.push(systemSx);
          }
          const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
          if (Array.isArray(styleArg2) && numOfCustomFnsApplied > 0) {
            const placeholders = new Array(numOfCustomFnsApplied).fill("");
            transformedStyleArg = [...styleArg2, ...placeholders];
            transformedStyleArg.raw = [...styleArg2.raw, ...placeholders];
          } else if (typeof styleArg2 === "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
          // component stays as a function. This condition makes sure that we do not interpolate functions
          // which are basically components used as a selectors.
          styleArg2.__emotion_real !== styleArg2) {
            transformedStyleArg = (_ref2) => {
              let {
                theme: themeInput
              } = _ref2, other = _objectWithoutPropertiesLoose$1(_ref2, _excluded3$1);
              return styleArg2(_extends({
                theme: isEmpty(themeInput) ? defaultTheme2 : themeInput
              }, other));
            };
          }
          const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
          return Component;
        };
        if (defaultStyledResolver.withConfig) {
          muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
      };
    }
    function getThemeProps(params) {
      const {
        theme,
        name,
        props
      } = params;
      if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
        return props;
      }
      return resolveProps(theme.components[name].defaultProps, props);
    }
    function useThemeProps$1({
      props,
      name,
      defaultTheme: defaultTheme2
    }) {
      const theme = useTheme$1(defaultTheme2);
      const mergedProps = getThemeProps({
        theme,
        name,
        props
      });
      return mergedProps;
    }
    function clamp$1(value, min2 = 0, max2 = 1) {
      return Math.min(Math.max(min2, value), max2);
    }
    function hexToRgb(color2) {
      color2 = color2.slice(1);
      const re2 = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
      let colors = color2.match(re2);
      if (colors && colors[0].length === 1) {
        colors = colors.map((n2) => n2 + n2);
      }
      return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index2) => {
        return index2 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
      }).join(", ")})` : "";
    }
    function decomposeColor(color2) {
      if (color2.type) {
        return color2;
      }
      if (color2.charAt(0) === "#") {
        return decomposeColor(hexToRgb(color2));
      }
      const marker = color2.indexOf("(");
      const type = color2.substring(0, marker);
      if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
        throw new Error(formatMuiErrorMessage(9, color2));
      }
      let values2 = color2.substring(marker + 1, color2.length - 1);
      let colorSpace;
      if (type === "color") {
        values2 = values2.split(" ");
        colorSpace = values2.shift();
        if (values2.length === 4 && values2[3].charAt(0) === "/") {
          values2[3] = values2[3].slice(1);
        }
        if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
          throw new Error(formatMuiErrorMessage(10, colorSpace));
        }
      } else {
        values2 = values2.split(",");
      }
      values2 = values2.map((value) => parseFloat(value));
      return {
        type,
        values: values2,
        colorSpace
      };
    }
    function recomposeColor(color2) {
      const {
        type,
        colorSpace
      } = color2;
      let {
        values: values2
      } = color2;
      if (type.indexOf("rgb") !== -1) {
        values2 = values2.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
      } else if (type.indexOf("hsl") !== -1) {
        values2[1] = `${values2[1]}%`;
        values2[2] = `${values2[2]}%`;
      }
      if (type.indexOf("color") !== -1) {
        values2 = `${colorSpace} ${values2.join(" ")}`;
      } else {
        values2 = `${values2.join(", ")}`;
      }
      return `${type}(${values2})`;
    }
    function hslToRgb(color2) {
      color2 = decomposeColor(color2);
      const {
        values: values2
      } = color2;
      const h2 = values2[0];
      const s = values2[1] / 100;
      const l2 = values2[2] / 100;
      const a = s * Math.min(l2, 1 - l2);
      const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
      let type = "rgb";
      const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
      if (color2.type === "hsla") {
        type += "a";
        rgb.push(values2[3]);
      }
      return recomposeColor({
        type,
        values: rgb
      });
    }
    function getLuminance(color2) {
      color2 = decomposeColor(color2);
      let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
      rgb = rgb.map((val) => {
        if (color2.type !== "color") {
          val /= 255;
        }
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    function getContrastRatio(foreground, background) {
      const lumA = getLuminance(foreground);
      const lumB = getLuminance(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    function alpha(color2, value) {
      color2 = decomposeColor(color2);
      value = clamp$1(value);
      if (color2.type === "rgb" || color2.type === "hsl") {
        color2.type += "a";
      }
      if (color2.type === "color") {
        color2.values[3] = `/${value}`;
      } else {
        color2.values[3] = value;
      }
      return recomposeColor(color2);
    }
    function darken(color2, coefficient) {
      color2 = decomposeColor(color2);
      coefficient = clamp$1(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] *= 1 - coefficient;
      } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] *= 1 - coefficient;
        }
      }
      return recomposeColor(color2);
    }
    function lighten(color2, coefficient) {
      color2 = decomposeColor(color2);
      coefficient = clamp$1(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] += (100 - color2.values[2]) * coefficient;
      } else if (color2.type.indexOf("rgb") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (255 - color2.values[i]) * coefficient;
        }
      } else if (color2.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (1 - color2.values[i]) * coefficient;
        }
      }
      return recomposeColor(color2);
    }
    function createMixins(breakpoints, mixins) {
      return _extends({
        toolbar: {
          minHeight: 56,
          [breakpoints.up("xs")]: {
            "@media (orientation: landscape)": {
              minHeight: 48
            }
          },
          [breakpoints.up("sm")]: {
            minHeight: 64
          }
        }
      }, mixins);
    }
    const common = {
      black: "#000",
      white: "#fff"
    };
    const common$1 = common;
    const grey = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161"
    };
    const grey$1 = grey;
    const purple = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff"
    };
    const purple$1 = purple;
    const red = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000"
    };
    const red$1 = red;
    const orange = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00"
    };
    const orange$1 = orange;
    const blue = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff"
    };
    const blue$1 = blue;
    const lightBlue = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea"
    };
    const lightBlue$1 = lightBlue;
    const green = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853"
    };
    const green$1 = green;
    const _excluded$m = ["mode", "contrastThreshold", "tonalOffset"];
    const light = {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: "rgba(0, 0, 0, 0.87)",
        // Secondary text.
        secondary: "rgba(0, 0, 0, 0.6)",
        // Disabled text have even lower visual prominence.
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      // The color used to divide different elements.
      divider: "rgba(0, 0, 0, 0.12)",
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common$1.white,
        default: common$1.white
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: "rgba(0, 0, 0, 0.54)",
        // The color of an hovered action.
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: "rgba(0, 0, 0, 0.26)",
        // The background color of a disabled action.
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
    const dark = {
      text: {
        primary: common$1.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: common$1.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
    function addLightOrDark(intent, direction, shade, tonalOffset) {
      const tonalOffsetLight = tonalOffset.light || tonalOffset;
      const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
      if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
          intent[direction] = intent[shade];
        } else if (direction === "light") {
          intent.light = lighten(intent.main, tonalOffsetLight);
        } else if (direction === "dark") {
          intent.dark = darken(intent.main, tonalOffsetDark);
        }
      }
    }
    function getDefaultPrimary(mode = "light") {
      if (mode === "dark") {
        return {
          main: blue$1[200],
          light: blue$1[50],
          dark: blue$1[400]
        };
      }
      return {
        main: blue$1[700],
        light: blue$1[400],
        dark: blue$1[800]
      };
    }
    function getDefaultSecondary(mode = "light") {
      if (mode === "dark") {
        return {
          main: purple$1[200],
          light: purple$1[50],
          dark: purple$1[400]
        };
      }
      return {
        main: purple$1[500],
        light: purple$1[300],
        dark: purple$1[700]
      };
    }
    function getDefaultError(mode = "light") {
      if (mode === "dark") {
        return {
          main: red$1[500],
          light: red$1[300],
          dark: red$1[700]
        };
      }
      return {
        main: red$1[700],
        light: red$1[400],
        dark: red$1[800]
      };
    }
    function getDefaultInfo(mode = "light") {
      if (mode === "dark") {
        return {
          main: lightBlue$1[400],
          light: lightBlue$1[300],
          dark: lightBlue$1[700]
        };
      }
      return {
        main: lightBlue$1[700],
        light: lightBlue$1[500],
        dark: lightBlue$1[900]
      };
    }
    function getDefaultSuccess(mode = "light") {
      if (mode === "dark") {
        return {
          main: green$1[400],
          light: green$1[300],
          dark: green$1[700]
        };
      }
      return {
        main: green$1[800],
        light: green$1[500],
        dark: green$1[900]
      };
    }
    function getDefaultWarning(mode = "light") {
      if (mode === "dark") {
        return {
          main: orange$1[400],
          light: orange$1[300],
          dark: orange$1[700]
        };
      }
      return {
        main: "#ed6c02",
        // closest to orange[800] that pass 3:1.
        light: orange$1[500],
        dark: orange$1[900]
      };
    }
    function createPalette(palette) {
      const {
        mode = "light",
        contrastThreshold = 3,
        tonalOffset = 0.2
      } = palette, other = _objectWithoutPropertiesLoose$1(palette, _excluded$m);
      const primary = palette.primary || getDefaultPrimary(mode);
      const secondary = palette.secondary || getDefaultSecondary(mode);
      const error = palette.error || getDefaultError(mode);
      const info = palette.info || getDefaultInfo(mode);
      const success = palette.success || getDefaultSuccess(mode);
      const warning2 = palette.warning || getDefaultWarning(mode);
      function getContrastText(background) {
        const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
        return contrastText;
      }
      const augmentColor = ({
        color: color2,
        name,
        mainShade = 500,
        lightShade = 300,
        darkShade = 700
      }) => {
        color2 = _extends({}, color2);
        if (!color2.main && color2[mainShade]) {
          color2.main = color2[mainShade];
        }
        if (!color2.hasOwnProperty("main")) {
          throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
        }
        if (typeof color2.main !== "string") {
          throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
        }
        addLightOrDark(color2, "light", lightShade, tonalOffset);
        addLightOrDark(color2, "dark", darkShade, tonalOffset);
        if (!color2.contrastText) {
          color2.contrastText = getContrastText(color2.main);
        }
        return color2;
      };
      const modes = {
        dark,
        light
      };
      const paletteOutput = deepmerge(_extends({
        // A collection of common colors.
        common: _extends({}, common$1),
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor({
          color: primary,
          name: "primary"
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor({
          color: secondary,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700"
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor({
          color: error,
          name: "error"
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor({
          color: warning2,
          name: "warning"
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor({
          color: info,
          name: "info"
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor({
          color: success,
          name: "success"
        }),
        // The grey colors.
        grey: grey$1,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText,
        // Generate a rich color object.
        augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset
      }, modes[mode]), other);
      return paletteOutput;
    }
    const _excluded$l = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
    function round$1(value) {
      return Math.round(value * 1e5) / 1e5;
    }
    const caseAllCaps = {
      textTransform: "uppercase"
    };
    const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    function createTypography(palette, typography) {
      const _ref2 = typeof typography === "function" ? typography(palette) : typography, {
        fontFamily = defaultFontFamily,
        // The default font size of the Material Specification.
        fontSize = 14,
        // px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        // Tell MUI what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,
        // Apply the CSS properties to all the variants.
        allVariants,
        pxToRem: pxToRem2
      } = _ref2, other = _objectWithoutPropertiesLoose$1(_ref2, _excluded$l);
      const coef = fontSize / 14;
      const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
      const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
        fontFamily,
        fontWeight,
        fontSize: pxToRem(size),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight
      }, fontFamily === defaultFontFamily ? {
        letterSpacing: `${round$1(letterSpacing / size)}em`
      } : {}, casing, allVariants);
      const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit"
        }
      };
      return deepmerge(_extends({
        htmlFontSize,
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold
      }, variants), other, {
        clone: false
        // No need to clone deep
      });
    }
    const shadowKeyUmbraOpacity = 0.2;
    const shadowKeyPenumbraOpacity = 0.14;
    const shadowAmbientShadowOpacity = 0.12;
    function createShadow(...px) {
      return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
    }
    const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
    const shadows$1 = shadows;
    const _excluded$k = ["duration", "easing", "delay"];
    const easing = {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    };
    const duration = {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    };
    function formatMs(milliseconds2) {
      return `${Math.round(milliseconds2)}ms`;
    }
    function getAutoHeightDuration(height2) {
      if (!height2) {
        return 0;
      }
      const constant = height2 / 36;
      return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
    }
    function createTransitions(inputTransitions) {
      const mergedEasing = _extends({}, easing, inputTransitions.easing);
      const mergedDuration = _extends({}, duration, inputTransitions.duration);
      const create = (props = ["all"], options = {}) => {
        const {
          duration: durationOption = mergedDuration.standard,
          easing: easingOption = mergedEasing.easeInOut,
          delay = 0
        } = options;
        _objectWithoutPropertiesLoose$1(options, _excluded$k);
        return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
      };
      return _extends({
        getAutoHeightDuration,
        create
      }, inputTransitions, {
        easing: mergedEasing,
        duration: mergedDuration
      });
    }
    const zIndex = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    };
    const zIndex$1 = zIndex;
    const _excluded$j = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
    function createTheme(options = {}, ...args) {
      const {
        mixins: mixinsInput = {},
        palette: paletteInput = {},
        transitions: transitionsInput = {},
        typography: typographyInput = {}
      } = options, other = _objectWithoutPropertiesLoose$1(options, _excluded$j);
      if (options.vars) {
        throw new Error(formatMuiErrorMessage(18));
      }
      const palette = createPalette(paletteInput);
      const systemTheme = createTheme$1(options);
      let muiTheme = deepmerge(systemTheme, {
        mixins: createMixins(systemTheme.breakpoints, mixinsInput),
        palette,
        // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
        shadows: shadows$1.slice(),
        typography: createTypography(palette, typographyInput),
        transitions: createTransitions(transitionsInput),
        zIndex: _extends({}, zIndex$1)
      });
      muiTheme = deepmerge(muiTheme, other);
      muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
      muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
      muiTheme.unstable_sx = function sx(props) {
        return styleFunctionSx$1({
          sx: props,
          theme: this
        });
      };
      return muiTheme;
    }
    const defaultTheme = createTheme();
    const defaultTheme$1 = defaultTheme;
    function useTheme() {
      const theme = useTheme$1(defaultTheme$1);
      return theme;
    }
    function useThemeProps({
      props,
      name
    }) {
      return useThemeProps$1({
        props,
        name,
        defaultTheme: defaultTheme$1
      });
    }
    const rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
    const styled = createStyled({
      defaultTheme: defaultTheme$1,
      rootShouldForwardProp
    });
    const styled$1 = styled;
    var useEventCallback$1 = {};
    var interopRequireDefaultExports = {};
    var interopRequireDefault = {
      get exports() {
        return interopRequireDefaultExports;
      },
      set exports(v2) {
        interopRequireDefaultExports = v2;
      }
    };
    (function(module2) {
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module2.exports = _interopRequireDefault2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    })(interopRequireDefault);
    var useEnhancedEffect = {};
    var hasRequiredUseEnhancedEffect;
    function requireUseEnhancedEffect() {
      if (hasRequiredUseEnhancedEffect)
        return useEnhancedEffect;
      hasRequiredUseEnhancedEffect = 1;
      Object.defineProperty(useEnhancedEffect, "__esModule", {
        value: true
      });
      useEnhancedEffect.default = void 0;
      var React2 = _interopRequireWildcard2(reactExports);
      function _getRequireWildcardCache2(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache2 = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard2(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache2(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      const useEnhancedEffect$12 = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
      var _default2 = useEnhancedEffect$12;
      useEnhancedEffect.default = _default2;
      return useEnhancedEffect;
    }
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(useEventCallback$1, "__esModule", {
      value: true
    });
    var _default$1 = useEventCallback$1.default = useEventCallback;
    var React = _interopRequireWildcard(reactExports);
    var _useEnhancedEffect = _interopRequireDefault(requireUseEnhancedEffect());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function useEventCallback(fn) {
      const ref = React.useRef(fn);
      (0, _useEnhancedEffect.default)(() => {
        ref.current = fn;
      });
      return React.useCallback((...args) => (
        // @ts-expect-error hide `this`
        // tslint:disable-next-line:ban-comma-operator
        (0, ref.current)(...args)
      ), []);
    }
    const _excluded$i = ["localeText"];
    const MuiPickersAdapterContext = /* @__PURE__ */ reactExports.createContext(null);
    function LocalizationProvider(inProps) {
      var _React$useContext;
      const {
        localeText: inLocaleText
      } = inProps, otherInProps = _objectWithoutPropertiesLoose$1(inProps, _excluded$i);
      const {
        utils: parentUtils,
        localeText: parentLocaleText
      } = (_React$useContext = reactExports.useContext(MuiPickersAdapterContext)) != null ? _React$useContext : {
        utils: void 0,
        localeText: void 0
      };
      const props = useThemeProps({
        // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
        // We will then merge this theme value with our value manually
        props: otherInProps,
        name: "MuiLocalizationProvider"
      });
      const {
        children,
        dateAdapter: DateAdapter,
        dateFormats,
        dateLibInstance,
        adapterLocale,
        localeText: themeLocaleText
      } = props;
      const localeText = reactExports.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
      const utils = reactExports.useMemo(() => {
        if (!DateAdapter) {
          if (parentUtils) {
            return parentUtils;
          }
          return null;
        }
        const adapter = new DateAdapter({
          locale: adapterLocale,
          formats: dateFormats,
          instance: dateLibInstance
        });
        if (!adapter.isMUIAdapter) {
          throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
        }
        return adapter;
      }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
      const defaultDates = reactExports.useMemo(() => {
        if (!utils) {
          return null;
        }
        return {
          minDate: utils.date("1900-01-01T00:00:00.000"),
          maxDate: utils.date("2099-12-31T00:00:00.000")
        };
      }, [utils]);
      const contextValue = reactExports.useMemo(() => {
        return {
          utils,
          defaultDates,
          localeText
        };
      }, [defaultDates, utils, localeText]);
      return /* @__PURE__ */ jsx(MuiPickersAdapterContext.Provider, {
        value: contextValue,
        children
      });
    }
    const getPickersLocalization = (pickersTranslations) => {
      return {
        components: {
          MuiLocalizationProvider: {
            defaultProps: {
              localeText: _extends({}, pickersTranslations)
            }
          }
        }
      };
    };
    const enUSPickers = {
      // Calendar navigation
      previousMonth: "Previous month",
      nextMonth: "Next month",
      // View navigation
      openPreviousView: "open previous view",
      openNextView: "open next view",
      calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
      // DateRange placeholders
      start: "Start",
      end: "End",
      // Action bar
      cancelButtonLabel: "Cancel",
      clearButtonLabel: "Clear",
      okButtonLabel: "OK",
      todayButtonLabel: "Today",
      // Toolbar titles
      datePickerToolbarTitle: "Select date",
      dateTimePickerToolbarTitle: "Select date & time",
      timePickerToolbarTitle: "Select time",
      dateRangePickerToolbarTitle: "Select date range",
      // Clock labels
      clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? "No time selected" : `Selected time is ${adapter.format(time, "fullTime")}`}`,
      hoursClockNumberText: (hours2) => `${hours2} hours`,
      minutesClockNumberText: (minutes2) => `${minutes2} minutes`,
      secondsClockNumberText: (seconds2) => `${seconds2} seconds`,
      // Calendar labels
      calendarWeekNumberHeaderLabel: "Week number",
      calendarWeekNumberHeaderText: "#",
      calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
      calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
      // Open picker labels
      openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose date, selected date is ${utils.format(value, "fullDate")}` : "Choose date",
      openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose time, selected time is ${utils.format(value, "fullTime")}` : "Choose time",
      // Table labels
      timeTableLabel: "pick time",
      dateTableLabel: "pick date",
      // Field section placeholders
      fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
      fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
      fieldDayPlaceholder: () => "DD",
      fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
      fieldHoursPlaceholder: () => "hh",
      fieldMinutesPlaceholder: () => "mm",
      fieldSecondsPlaceholder: () => "ss",
      fieldMeridiemPlaceholder: () => "aa"
    };
    const DEFAULT_LOCALE = enUSPickers;
    getPickersLocalization(enUSPickers);
    const useLocalizationContext = () => {
      const localization = reactExports.useContext(MuiPickersAdapterContext);
      if (localization === null) {
        throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
      }
      if (localization.utils === null) {
        throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
      }
      const localeText = reactExports.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
      return reactExports.useMemo(() => _extends({}, localization, {
        localeText
      }), [localization, localeText]);
    };
    const useUtils = () => useLocalizationContext().utils;
    const useDefaultDates = () => useLocalizationContext().defaultDates;
    const useLocaleText = () => useLocalizationContext().localeText;
    const useNow = () => {
      const utils = useUtils();
      const now2 = reactExports.useRef(utils.date());
      return now2.current;
    };
    function isHostComponent(element) {
      return typeof element === "string";
    }
    function appendOwnerState(elementType, otherProps, ownerState) {
      if (elementType === void 0 || isHostComponent(elementType)) {
        return otherProps;
      }
      return _extends({}, otherProps, {
        ownerState: _extends({}, otherProps.ownerState, ownerState)
      });
    }
    function extractEventHandlers(object, excludeKeys = []) {
      if (object === void 0) {
        return {};
      }
      const result = {};
      Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
        result[prop] = object[prop];
      });
      return result;
    }
    function resolveComponentProps(componentProps, ownerState) {
      if (typeof componentProps === "function") {
        return componentProps(ownerState);
      }
      return componentProps;
    }
    function omitEventHandlers(object) {
      if (object === void 0) {
        return {};
      }
      const result = {};
      Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
        result[prop] = object[prop];
      });
      return result;
    }
    function mergeSlotProps(parameters) {
      const {
        getSlotProps,
        additionalProps,
        externalSlotProps,
        externalForwardedProps,
        className
      } = parameters;
      if (!getSlotProps) {
        const joinedClasses2 = clsx(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
        const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
        const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
        if (joinedClasses2.length > 0) {
          props2.className = joinedClasses2;
        }
        if (Object.keys(mergedStyle2).length > 0) {
          props2.style = mergedStyle2;
        }
        return {
          props: props2,
          internalRef: void 0
        };
      }
      const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
      const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
      const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
      const internalSlotProps = getSlotProps(eventHandlers);
      const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
      const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
      const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
      if (joinedClasses.length > 0) {
        props.className = joinedClasses;
      }
      if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
      }
      return {
        props,
        internalRef: internalSlotProps.ref
      };
    }
    const _excluded$h = ["elementType", "externalSlotProps", "ownerState"];
    function useSlotProps(parameters) {
      var _parameters$additiona;
      const {
        elementType,
        externalSlotProps,
        ownerState
      } = parameters, rest = _objectWithoutPropertiesLoose$1(parameters, _excluded$h);
      const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
      const {
        props: mergedProps,
        internalRef
      } = mergeSlotProps(_extends({}, rest, {
        externalSlotProps: resolvedComponentsProps
      }));
      const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
      const props = appendOwnerState(elementType, _extends({}, mergedProps, {
        ref
      }), ownerState);
      return props;
    }
    function getTypographyUtilityClass(slot) {
      return generateUtilityClass("MuiTypography", slot);
    }
    generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
    const _excluded$g = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
    const useUtilityClasses$e = (ownerState) => {
      const {
        align,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        classes
      } = ownerState;
      const slots = {
        root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize$1(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
      };
      return composeClasses(slots, getTypographyUtilityClass, classes);
    };
    const TypographyRoot = styled$1("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize$1(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      margin: 0
    }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
      textAlign: ownerState.align
    }, ownerState.noWrap && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }, ownerState.gutterBottom && {
      marginBottom: "0.35em"
    }, ownerState.paragraph && {
      marginBottom: 16
    }));
    const defaultVariantMapping = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p"
    };
    const colorTransformations = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main"
    };
    const transformDeprecatedColors = (color2) => {
      return colorTransformations[color2] || color2;
    };
    const Typography = /* @__PURE__ */ reactExports.forwardRef(function Typography2(inProps, ref) {
      const themeProps = useThemeProps({
        props: inProps,
        name: "MuiTypography"
      });
      const color2 = transformDeprecatedColors(themeProps.color);
      const props = extendSxProp(_extends({}, themeProps, {
        color: color2
      }));
      const {
        align = "inherit",
        className,
        component,
        gutterBottom = false,
        noWrap = false,
        paragraph = false,
        variant = "body1",
        variantMapping = defaultVariantMapping
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$g);
      const ownerState = _extends({}, props, {
        align,
        color: color2,
        className,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        variantMapping
      });
      const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
      const classes = useUtilityClasses$e(ownerState);
      return /* @__PURE__ */ jsx(TypographyRoot, _extends({
        as: Component,
        ref,
        ownerState,
        className: clsx(classes.root, className)
      }, other));
    });
    const Typography$1 = Typography;
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf(o, p2);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function hasClass(element, className) {
      if (element.classList)
        return !!className && element.classList.contains(className);
      return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }
    function addClass(element, className) {
      if (element.classList)
        element.classList.add(className);
      else if (!hasClass(element, className))
        if (typeof element.className === "string")
          element.className = element.className + " " + className;
        else
          element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
    function replaceClassName(origClass, classToRemove) {
      return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    function removeClass$1(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (typeof element.className === "string") {
        element.className = replaceClassName(element.className, className);
      } else {
        element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
      }
    }
    const config$1 = {
      disabled: false
    };
    const TransitionGroupContext = React$1.createContext(null);
    var forceReflow = function forceReflow2(node2) {
      return node2.scrollTop;
    };
    var UNMOUNTED = "unmounted";
    var EXITED = "exited";
    var ENTERING = "entering";
    var ENTERED = "entered";
    var EXITING = "exiting";
    var Transition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(Transition2, _React$Component);
      function Transition2(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context;
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }
        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }
      Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref2, prevState) {
        var nextIn = _ref2.in;
        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }
        return null;
      };
      var _proto = Transition2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }
        this.updateStatus(false, nextStatus);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };
      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== "number") {
          exit = timeout.exit;
          enter = timeout.enter;
          appear = timeout.appear !== void 0 ? timeout.appear : enter;
        }
        return {
          exit,
          enter,
          appear
        };
      };
      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }
        if (nextStatus !== null) {
          this.cancelNextCallback();
          if (nextStatus === ENTERING) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
              if (node2)
                forceReflow(node2);
            }
            this.performEnter(mounting);
          } else {
            this.performExit();
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };
      _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if (!mounting && !enter || config$1.disabled) {
          this.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
          status: ENTERING
        }, function() {
          _this2.props.onEntering(maybeNode, maybeAppearing);
          _this2.onTransitionEnd(enterTimeout, function() {
            _this2.safeSetState({
              status: ENTERED
            }, function() {
              _this2.props.onEntered(maybeNode, maybeAppearing);
            });
          });
        });
      };
      _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
        if (!exit || config$1.disabled) {
          this.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(maybeNode);
          });
          return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
          status: EXITING
        }, function() {
          _this3.props.onExiting(maybeNode);
          _this3.onTransitionEnd(timeouts.exit, function() {
            _this3.safeSetState({
              status: EXITED
            }, function() {
              _this3.props.onExited(maybeNode);
            });
          });
        });
      };
      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };
      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };
        this.nextCallback.cancel = function() {
          active = false;
        };
        return this.nextCallback;
      };
      _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node2 || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
          this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };
      _proto.render = function render2() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
          return null;
        }
        var _this$props = this.props, children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return (
          // allows for nested Transitions
          /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
            value: null
          }, typeof children === "function" ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
        );
      };
      return Transition2;
    }(React$1.Component);
    Transition.contextType = TransitionGroupContext;
    Transition.propTypes = {};
    function noop$4() {
    }
    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop$4,
      onEntering: noop$4,
      onEntered: noop$4,
      onExit: noop$4,
      onExiting: noop$4,
      onExited: noop$4
    };
    Transition.UNMOUNTED = UNMOUNTED;
    Transition.EXITED = EXITED;
    Transition.ENTERING = ENTERING;
    Transition.ENTERED = ENTERED;
    Transition.EXITING = EXITING;
    const Transition$1 = Transition;
    var _addClass = function addClass$1(node2, classes) {
      return node2 && classes && classes.split(" ").forEach(function(c2) {
        return addClass(node2, c2);
      });
    };
    var removeClass = function removeClass2(node2, classes) {
      return node2 && classes && classes.split(" ").forEach(function(c2) {
        return removeClass$1(node2, c2);
      });
    };
    var CSSTransition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(CSSTransition2, _React$Component);
      function CSSTransition2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.appliedClasses = {
          appear: {},
          enter: {},
          exit: {}
        };
        _this.onEnter = function(maybeNode, maybeAppearing) {
          var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node2 = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
          _this.removeClasses(node2, "exit");
          _this.addClass(node2, appearing ? "appear" : "enter", "base");
          if (_this.props.onEnter) {
            _this.props.onEnter(maybeNode, maybeAppearing);
          }
        };
        _this.onEntering = function(maybeNode, maybeAppearing) {
          var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node2 = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
          var type = appearing ? "appear" : "enter";
          _this.addClass(node2, type, "active");
          if (_this.props.onEntering) {
            _this.props.onEntering(maybeNode, maybeAppearing);
          }
        };
        _this.onEntered = function(maybeNode, maybeAppearing) {
          var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node2 = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
          var type = appearing ? "appear" : "enter";
          _this.removeClasses(node2, type);
          _this.addClass(node2, type, "done");
          if (_this.props.onEntered) {
            _this.props.onEntered(maybeNode, maybeAppearing);
          }
        };
        _this.onExit = function(maybeNode) {
          var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node2 = _this$resolveArgument4[0];
          _this.removeClasses(node2, "appear");
          _this.removeClasses(node2, "enter");
          _this.addClass(node2, "exit", "base");
          if (_this.props.onExit) {
            _this.props.onExit(maybeNode);
          }
        };
        _this.onExiting = function(maybeNode) {
          var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node2 = _this$resolveArgument5[0];
          _this.addClass(node2, "exit", "active");
          if (_this.props.onExiting) {
            _this.props.onExiting(maybeNode);
          }
        };
        _this.onExited = function(maybeNode) {
          var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node2 = _this$resolveArgument6[0];
          _this.removeClasses(node2, "exit");
          _this.addClass(node2, "exit", "done");
          if (_this.props.onExited) {
            _this.props.onExited(maybeNode);
          }
        };
        _this.resolveArguments = function(maybeNode, maybeAppearing) {
          return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
        };
        _this.getClassNames = function(type) {
          var classNames = _this.props.classNames;
          var isStringClassNames = typeof classNames === "string";
          var prefix2 = isStringClassNames && classNames ? classNames + "-" : "";
          var baseClassName = isStringClassNames ? "" + prefix2 + type : classNames[type];
          var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
          var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
          return {
            baseClassName,
            activeClassName,
            doneClassName
          };
        };
        return _this;
      }
      var _proto = CSSTransition2.prototype;
      _proto.addClass = function addClass2(node2, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];
        var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
        if (type === "appear" && phase === "done" && doneClassName) {
          className += " " + doneClassName;
        }
        if (phase === "active") {
          if (node2)
            forceReflow(node2);
        }
        if (className) {
          this.appliedClasses[type][phase] = className;
          _addClass(node2, className);
        }
      };
      _proto.removeClasses = function removeClasses(node2, type) {
        var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};
        if (baseClassName) {
          removeClass(node2, baseClassName);
        }
        if (activeClassName) {
          removeClass(node2, activeClassName);
        }
        if (doneClassName) {
          removeClass(node2, doneClassName);
        }
      };
      _proto.render = function render2() {
        var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);
        return /* @__PURE__ */ React$1.createElement(Transition$1, _extends({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };
      return CSSTransition2;
    }(React$1.Component);
    CSSTransition.defaultProps = {
      classNames: ""
    };
    CSSTransition.propTypes = {};
    const CSSTransition$1 = CSSTransition;
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function getChildMapping(children, mapFn) {
      var mapper = function mapper2(child) {
        return mapFn && reactExports.isValidElement(child) ? mapFn(child) : child;
      };
      var result = /* @__PURE__ */ Object.create(null);
      if (children)
        reactExports.Children.map(children, function(c2) {
          return c2;
        }).forEach(function(child) {
          result[child.key] = mapper(child);
        });
      return result;
    }
    function mergeChildMappings(prev2, next2) {
      prev2 = prev2 || {};
      next2 = next2 || {};
      function getValueForKey(key) {
        return key in next2 ? next2[key] : prev2[key];
      }
      var nextKeysPending = /* @__PURE__ */ Object.create(null);
      var pendingKeys = [];
      for (var prevKey in prev2) {
        if (prevKey in next2) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }
      var i;
      var childMapping = {};
      for (var nextKey in next2) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
      }
      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }
      return childMapping;
    }
    function getProp(child, prop, props) {
      return props[prop] != null ? props[prop] : child.props[prop];
    }
    function getInitialChildMapping(props, onExited) {
      return getChildMapping(props.children, function(child) {
        return reactExports.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          appear: getProp(child, "appear", props),
          enter: getProp(child, "enter", props),
          exit: getProp(child, "exit", props)
        });
      });
    }
    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
      var nextChildMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevChildMapping, nextChildMapping);
      Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!reactExports.isValidElement(child))
          return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = reactExports.isValidElement(prevChild) && !prevChild.props.in;
        if (hasNext && (!hasPrev || isLeaving)) {
          children[key] = reactExports.cloneElement(child, {
            onExited: onExited.bind(null, child),
            in: true,
            exit: getProp(child, "exit", nextProps),
            enter: getProp(child, "enter", nextProps)
          });
        } else if (!hasNext && hasPrev && !isLeaving) {
          children[key] = reactExports.cloneElement(child, {
            in: false
          });
        } else if (hasNext && hasPrev && reactExports.isValidElement(prevChild)) {
          children[key] = reactExports.cloneElement(child, {
            onExited: onExited.bind(null, child),
            in: prevChild.props.in,
            exit: getProp(child, "exit", nextProps),
            enter: getProp(child, "enter", nextProps)
          });
        }
      });
      return children;
    }
    var values = Object.values || function(obj) {
      return Object.keys(obj).map(function(k2) {
        return obj[k2];
      });
    };
    var defaultProps = {
      component: "div",
      childFactory: function childFactory(child) {
        return child;
      }
    };
    var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(TransitionGroup2, _React$Component);
      function TransitionGroup2(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
        _this.state = {
          contextValue: {
            isMounting: true
          },
          handleExited,
          firstRender: true
        };
        return _this;
      }
      var _proto = TransitionGroup2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
          contextValue: {
            isMounting: false
          }
        });
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref2) {
        var prevChildMapping = _ref2.children, handleExited = _ref2.handleExited, firstRender = _ref2.firstRender;
        return {
          children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };
      _proto.handleExited = function handleExited(child, node2) {
        var currentChildMapping = getChildMapping(this.props.children);
        if (child.key in currentChildMapping)
          return;
        if (child.props.onExited) {
          child.props.onExited(node2);
        }
        if (this.mounted) {
          this.setState(function(state) {
            var children = _extends({}, state.children);
            delete children[child.key];
            return {
              children
            };
          });
        }
      };
      _proto.render = function render2() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
          return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
            value: contextValue
          }, children);
        }
        return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, /* @__PURE__ */ React$1.createElement(Component, props, children));
      };
      return TransitionGroup2;
    }(React$1.Component);
    TransitionGroup.propTypes = {};
    TransitionGroup.defaultProps = defaultProps;
    const TransitionGroup$1 = TransitionGroup;
    function Ripple(props) {
      const {
        className,
        classes,
        pulsate = false,
        rippleX,
        rippleY,
        rippleSize,
        in: inProp,
        onExited,
        timeout
      } = props;
      const [leaving, setLeaving] = reactExports.useState(false);
      const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
      const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
      if (!inProp && !leaving) {
        setLeaving(true);
      }
      reactExports.useEffect(() => {
        if (!inProp && onExited != null) {
          const timeoutId = setTimeout(onExited, timeout);
          return () => {
            clearTimeout(timeoutId);
          };
        }
        return void 0;
      }, [onExited, inProp, timeout]);
      return /* @__PURE__ */ jsx("span", {
        className: rippleClassName,
        style: rippleStyles,
        children: /* @__PURE__ */ jsx("span", {
          className: childClassName
        })
      });
    }
    const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
    const touchRippleClasses$1 = touchRippleClasses;
    const _excluded$f = ["center", "classes", "className"];
    let _ = (t2) => t2, _t, _t2, _t3, _t4;
    const DURATION = 550;
    const DELAY_RIPPLE = 80;
    const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
    const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
    const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
    const TouchRippleRoot = styled$1("span", {
      name: "MuiTouchRipple",
      slot: "Root"
    })({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    });
    const TouchRippleRipple = styled$1(Ripple, {
      name: "MuiTouchRipple",
      slot: "Ripple"
    })(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
      theme
    }) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
      theme
    }) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
      theme
    }) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
      theme
    }) => theme.transitions.easing.easeInOut);
    const TouchRipple = /* @__PURE__ */ reactExports.forwardRef(function TouchRipple2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiTouchRipple"
      });
      const {
        center: centerProp = false,
        classes = {},
        className
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$f);
      const [ripples, setRipples] = reactExports.useState([]);
      const nextKey = reactExports.useRef(0);
      const rippleCallback = reactExports.useRef(null);
      reactExports.useEffect(() => {
        if (rippleCallback.current) {
          rippleCallback.current();
          rippleCallback.current = null;
        }
      }, [ripples]);
      const ignoringMouseDown = reactExports.useRef(false);
      const startTimer = reactExports.useRef(null);
      const startTimerCommit = reactExports.useRef(null);
      const container = reactExports.useRef(null);
      reactExports.useEffect(() => {
        return () => {
          clearTimeout(startTimer.current);
        };
      }, []);
      const startCommit = reactExports.useCallback((params) => {
        const {
          pulsate: pulsate2,
          rippleX,
          rippleY,
          rippleSize,
          cb: cb2
        } = params;
        setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsx(TouchRippleRipple, {
          classes: {
            ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
            rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
            ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
            child: clsx(classes.child, touchRippleClasses$1.child),
            childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
            childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
          },
          timeout: DURATION,
          pulsate: pulsate2,
          rippleX,
          rippleY,
          rippleSize
        }, nextKey.current)]);
        nextKey.current += 1;
        rippleCallback.current = cb2;
      }, [classes]);
      const start = reactExports.useCallback((event = {}, options = {}, cb2 = () => {
      }) => {
        const {
          pulsate: pulsate2 = false,
          center = centerProp || options.pulsate,
          fakeElement = false
          // For test purposes
        } = options;
        if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
          ignoringMouseDown.current = false;
          return;
        }
        if ((event == null ? void 0 : event.type) === "touchstart") {
          ignoringMouseDown.current = true;
        }
        const element = fakeElement ? null : container.current;
        const rect = element ? element.getBoundingClientRect() : {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        };
        let rippleX;
        let rippleY;
        let rippleSize;
        if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          const {
            clientX,
            clientY
          } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }
        if (center) {
          rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
          const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
          rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
        }
        if (event != null && event.touches) {
          if (startTimerCommit.current === null) {
            startTimerCommit.current = () => {
              startCommit({
                pulsate: pulsate2,
                rippleX,
                rippleY,
                rippleSize,
                cb: cb2
              });
            };
            startTimer.current = setTimeout(() => {
              if (startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
              }
            }, DELAY_RIPPLE);
          }
        } else {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb: cb2
          });
        }
      }, [centerProp, startCommit]);
      const pulsate = reactExports.useCallback(() => {
        start({}, {
          pulsate: true
        });
      }, [start]);
      const stop = reactExports.useCallback((event, cb2) => {
        clearTimeout(startTimer.current);
        if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
          startTimerCommit.current();
          startTimerCommit.current = null;
          startTimer.current = setTimeout(() => {
            stop(event, cb2);
          });
          return;
        }
        startTimerCommit.current = null;
        setRipples((oldRipples) => {
          if (oldRipples.length > 0) {
            return oldRipples.slice(1);
          }
          return oldRipples;
        });
        rippleCallback.current = cb2;
      }, []);
      reactExports.useImperativeHandle(ref, () => ({
        pulsate,
        start,
        stop
      }), [pulsate, start, stop]);
      return /* @__PURE__ */ jsx(TouchRippleRoot, _extends({
        className: clsx(touchRippleClasses$1.root, classes.root, className),
        ref: container
      }, other, {
        children: /* @__PURE__ */ jsx(TransitionGroup$1, {
          component: null,
          exit: true,
          children: ripples
        })
      }));
    });
    const TouchRipple$1 = TouchRipple;
    function getButtonBaseUtilityClass(slot) {
      return generateUtilityClass("MuiButtonBase", slot);
    }
    const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
    const buttonBaseClasses$1 = buttonBaseClasses;
    const _excluded$e = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
    const useUtilityClasses$d = (ownerState) => {
      const {
        disabled: disabled2,
        focusVisible,
        focusVisibleClassName,
        classes
      } = ownerState;
      const slots = {
        root: ["root", disabled2 && "disabled", focusVisible && "focusVisible"]
      };
      const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
      if (focusVisible && focusVisibleClassName) {
        composedClasses.root += ` ${focusVisibleClassName}`;
      }
      return composedClasses;
    };
    const ButtonBaseRoot = styled$1("button", {
      name: "MuiButtonBase",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      // Reset
      WebkitAppearance: "none",
      // Reset
      textDecoration: "none",
      // So we take precedent over the style of a native <a /> element.
      color: "inherit",
      "&::-moz-focus-inner": {
        borderStyle: "none"
        // Remove Firefox dotted outline.
      },
      [`&.${buttonBaseClasses$1.disabled}`]: {
        pointerEvents: "none",
        // Disable link interactions
        cursor: "default"
      },
      "@media print": {
        colorAdjust: "exact"
      }
    });
    const ButtonBase = /* @__PURE__ */ reactExports.forwardRef(function ButtonBase2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiButtonBase"
      });
      const {
        action,
        centerRipple = false,
        children,
        className,
        component = "button",
        disabled: disabled2 = false,
        disableRipple = false,
        disableTouchRipple = false,
        focusRipple = false,
        LinkComponent = "a",
        onBlur,
        onClick,
        onContextMenu,
        onDragLeave,
        onFocus,
        onFocusVisible,
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        tabIndex = 0,
        TouchRippleProps,
        touchRippleRef,
        type
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$e);
      const buttonRef = reactExports.useRef(null);
      const rippleRef = reactExports.useRef(null);
      const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
      const {
        isFocusVisibleRef,
        onFocus: handleFocusVisible,
        onBlur: handleBlurVisible,
        ref: focusVisibleRef
      } = useIsFocusVisible();
      const [focusVisible, setFocusVisible] = reactExports.useState(false);
      if (disabled2 && focusVisible) {
        setFocusVisible(false);
      }
      reactExports.useImperativeHandle(action, () => ({
        focusVisible: () => {
          setFocusVisible(true);
          buttonRef.current.focus();
        }
      }), []);
      const [mountedState, setMountedState] = reactExports.useState(false);
      reactExports.useEffect(() => {
        setMountedState(true);
      }, []);
      const enableTouchRipple = mountedState && !disableRipple && !disabled2;
      reactExports.useEffect(() => {
        if (focusVisible && focusRipple && !disableRipple && mountedState) {
          rippleRef.current.pulsate();
        }
      }, [disableRipple, focusRipple, focusVisible, mountedState]);
      function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
        return useEventCallback$2((event) => {
          if (eventCallback) {
            eventCallback(event);
          }
          const ignore = skipRippleAction;
          if (!ignore && rippleRef.current) {
            rippleRef.current[rippleAction](event);
          }
          return true;
        });
      }
      const handleMouseDown = useRippleHandler("start", onMouseDown);
      const handleContextMenu = useRippleHandler("stop", onContextMenu);
      const handleDragLeave = useRippleHandler("stop", onDragLeave);
      const handleMouseUp = useRippleHandler("stop", onMouseUp);
      const handleMouseLeave = useRippleHandler("stop", (event) => {
        if (focusVisible) {
          event.preventDefault();
        }
        if (onMouseLeave) {
          onMouseLeave(event);
        }
      });
      const handleTouchStart = useRippleHandler("start", onTouchStart);
      const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
      const handleTouchMove = useRippleHandler("stop", onTouchMove);
      const handleBlur = useRippleHandler("stop", (event) => {
        handleBlurVisible(event);
        if (isFocusVisibleRef.current === false) {
          setFocusVisible(false);
        }
        if (onBlur) {
          onBlur(event);
        }
      }, false);
      const handleFocus = useEventCallback$2((event) => {
        if (!buttonRef.current) {
          buttonRef.current = event.currentTarget;
        }
        handleFocusVisible(event);
        if (isFocusVisibleRef.current === true) {
          setFocusVisible(true);
          if (onFocusVisible) {
            onFocusVisible(event);
          }
        }
        if (onFocus) {
          onFocus(event);
        }
      });
      const isNonNativeButton = () => {
        const button = buttonRef.current;
        return component && component !== "button" && !(button.tagName === "A" && button.href);
      };
      const keydownRef = reactExports.useRef(false);
      const handleKeyDown2 = useEventCallback$2((event) => {
        if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
          keydownRef.current = true;
          rippleRef.current.stop(event, () => {
            rippleRef.current.start(event);
          });
        }
        if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
          event.preventDefault();
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
        if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled2) {
          event.preventDefault();
          if (onClick) {
            onClick(event);
          }
        }
      });
      const handleKeyUp = useEventCallback$2((event) => {
        if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
          keydownRef.current = false;
          rippleRef.current.stop(event, () => {
            rippleRef.current.pulsate(event);
          });
        }
        if (onKeyUp) {
          onKeyUp(event);
        }
        if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
          onClick(event);
        }
      });
      let ComponentProp = component;
      if (ComponentProp === "button" && (other.href || other.to)) {
        ComponentProp = LinkComponent;
      }
      const buttonProps = {};
      if (ComponentProp === "button") {
        buttonProps.type = type === void 0 ? "button" : type;
        buttonProps.disabled = disabled2;
      } else {
        if (!other.href && !other.to) {
          buttonProps.role = "button";
        }
        if (disabled2) {
          buttonProps["aria-disabled"] = disabled2;
        }
      }
      const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
      const ownerState = _extends({}, props, {
        centerRipple,
        component,
        disabled: disabled2,
        disableRipple,
        disableTouchRipple,
        focusRipple,
        tabIndex,
        focusVisible
      });
      const classes = useUtilityClasses$d(ownerState);
      return /* @__PURE__ */ jsxs(ButtonBaseRoot, _extends({
        as: ComponentProp,
        className: clsx(classes.root, className),
        ownerState,
        onBlur: handleBlur,
        onClick,
        onContextMenu: handleContextMenu,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown2,
        onKeyUp: handleKeyUp,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onDragLeave: handleDragLeave,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        ref: handleRef,
        tabIndex: disabled2 ? -1 : tabIndex,
        type
      }, buttonProps, other, {
        children: [children, enableTouchRipple ? (
          /* TouchRipple is only needed client-side, x2 boost on the server. */
          /* @__PURE__ */ jsx(TouchRipple$1, _extends({
            ref: handleRippleRef,
            center: centerRipple
          }, TouchRippleProps))
        ) : null]
      }));
    });
    const ButtonBase$1 = ButtonBase;
    function getIconButtonUtilityClass(slot) {
      return generateUtilityClass("MuiIconButton", slot);
    }
    const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
    const iconButtonClasses$1 = iconButtonClasses;
    const _excluded$d = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
    const useUtilityClasses$c = (ownerState) => {
      const {
        classes,
        disabled: disabled2,
        color: color2,
        edge,
        size
      } = ownerState;
      const slots = {
        root: ["root", disabled2 && "disabled", color2 !== "default" && `color${capitalize$1(color2)}`, edge && `edge${capitalize$1(edge)}`, `size${capitalize$1(size)}`]
      };
      return composeClasses(slots, getIconButtonUtilityClass, classes);
    };
    const IconButtonRoot = styled$1(ButtonBase$1, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.color !== "default" && styles2[`color${capitalize$1(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize$1(ownerState.edge)}`], styles2[`size${capitalize$1(ownerState.size)}`]];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: theme.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      overflow: "visible",
      // Explicitly set the default value to solve a bug on IE11.
      color: (theme.vars || theme).palette.action.active,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      })
    }, !ownerState.disableRipple && {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }, ownerState.edge === "start" && {
      marginLeft: ownerState.size === "small" ? -3 : -12
    }, ownerState.edge === "end" && {
      marginRight: ownerState.size === "small" ? -3 : -12
    }), ({
      theme,
      ownerState
    }) => {
      var _palette;
      const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
      return _extends({}, ownerState.color === "inherit" && {
        color: "inherit"
      }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
        color: palette == null ? void 0 : palette.main
      }, !ownerState.disableRipple && {
        "&:hover": _extends({}, palette && {
          backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(palette.main, theme.palette.action.hoverOpacity)
        }, {
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        })
      }), ownerState.size === "small" && {
        padding: 5,
        fontSize: theme.typography.pxToRem(18)
      }, ownerState.size === "large" && {
        padding: 12,
        fontSize: theme.typography.pxToRem(28)
      }, {
        [`&.${iconButtonClasses$1.disabled}`]: {
          backgroundColor: "transparent",
          color: (theme.vars || theme).palette.action.disabled
        }
      });
    });
    const IconButton = /* @__PURE__ */ reactExports.forwardRef(function IconButton2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiIconButton"
      });
      const {
        edge = false,
        children,
        className,
        color: color2 = "default",
        disabled: disabled2 = false,
        disableFocusRipple = false,
        size = "medium"
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$d);
      const ownerState = _extends({}, props, {
        edge,
        color: color2,
        disabled: disabled2,
        disableFocusRipple,
        size
      });
      const classes = useUtilityClasses$c(ownerState);
      return /* @__PURE__ */ jsx(IconButtonRoot, _extends({
        className: clsx(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled2,
        ref,
        ownerState
      }, other, {
        children
      }));
    });
    const IconButton$1 = IconButton;
    function getSvgIconUtilityClass(slot) {
      return generateUtilityClass("MuiSvgIcon", slot);
    }
    generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
    const _excluded$c = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
    const useUtilityClasses$b = (ownerState) => {
      const {
        color: color2,
        fontSize,
        classes
      } = ownerState;
      const slots = {
        root: ["root", color2 !== "inherit" && `color${capitalize$1(color2)}`, `fontSize${capitalize$1(fontSize)}`]
      };
      return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    const SvgIconRoot = styled$1("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize$1(ownerState.color)}`], styles2[`fontSize${capitalize$1(ownerState.fontSize)}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
          duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
        }),
        fontSize: {
          inherit: "inherit",
          small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
          medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
          large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
        }[ownerState.fontSize],
        // TODO v5 deprecate, v6 remove for sx
        color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
          action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
          disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
          inherit: void 0
        }[ownerState.color]
      };
    });
    const SvgIcon = /* @__PURE__ */ reactExports.forwardRef(function SvgIcon2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiSvgIcon"
      });
      const {
        children,
        className,
        color: color2 = "inherit",
        component = "svg",
        fontSize = "medium",
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = "0 0 24 24"
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$c);
      const ownerState = _extends({}, props, {
        color: color2,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox
      });
      const more = {};
      if (!inheritViewBox) {
        more.viewBox = viewBox;
      }
      const classes = useUtilityClasses$b(ownerState);
      return /* @__PURE__ */ jsxs(SvgIconRoot, _extends({
        as: component,
        className: clsx(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? void 0 : true,
        role: titleAccess ? "img" : void 0,
        ref
      }, more, other, {
        ownerState,
        children: [children, titleAccess ? /* @__PURE__ */ jsx("title", {
          children: titleAccess
        }) : null]
      }));
    });
    SvgIcon.muiName = "SvgIcon";
    const SvgIcon$1 = SvgIcon;
    function createSvgIcon(path, displayName) {
      function Component(props, ref) {
        return /* @__PURE__ */ jsx(SvgIcon$1, _extends({
          "data-testid": `${displayName}Icon`,
          ref
        }, props, {
          children: path
        }));
      }
      Component.muiName = SvgIcon$1.muiName;
      return /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(Component));
    }
    const ArrowDropDown = createSvgIcon(/* @__PURE__ */ jsx("path", {
      d: "M7 10l5 5 5-5z"
    }), "ArrowDropDown");
    const ArrowLeft = createSvgIcon(/* @__PURE__ */ jsx("path", {
      d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
    }), "ArrowLeft");
    const ArrowRight = createSvgIcon(/* @__PURE__ */ jsx("path", {
      d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
    }), "ArrowRight");
    createSvgIcon(/* @__PURE__ */ jsx("path", {
      d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
    }), "Calendar");
    createSvgIcon(/* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [/* @__PURE__ */ jsx("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      })]
    }), "Clock");
    createSvgIcon(/* @__PURE__ */ jsx("path", {
      d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
    }), "DateRange");
    createSvgIcon(/* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [/* @__PURE__ */ jsx("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      })]
    }), "Time");
    function getPickersArrowSwitcherUtilityClass(slot) {
      return generateUtilityClass("MuiPickersArrowSwitcher", slot);
    }
    generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
    const _excluded$b = ["children", "className", "components", "componentsProps", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], _excluded2$1 = ["ownerState"], _excluded3 = ["ownerState"];
    const PickersArrowSwitcherRoot = styled$1("div", {
      name: "MuiPickersArrowSwitcher",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })({
      display: "flex"
    });
    const PickersArrowSwitcherSpacer = styled$1("div", {
      name: "MuiPickersArrowSwitcher",
      slot: "Spacer",
      overridesResolver: (props, styles2) => styles2.spacer
    })(({
      theme
    }) => ({
      width: theme.spacing(3)
    }));
    const PickersArrowSwitcherButton = styled$1(IconButton$1, {
      name: "MuiPickersArrowSwitcher",
      slot: "Button",
      overridesResolver: (props, styles2) => styles2.button
    })(({
      ownerState
    }) => _extends({}, ownerState.hidden && {
      visibility: "hidden"
    }));
    const useUtilityClasses$a = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"],
        spacer: ["spacer"],
        button: ["button"]
      };
      return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
    };
    const PickersArrowSwitcher = /* @__PURE__ */ reactExports.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
      var _ref2, _slots$previousIconBu, _slotProps$previousIc, _ref22, _slots$nextIconButton, _slotProps$nextIconBu, _ref3, _slots$leftArrowIcon, _slotProps$leftArrowI, _ref4, _slots$rightArrowIcon, _slotProps$rightArrow;
      const theme = useTheme();
      const isRTL = theme.direction === "rtl";
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersArrowSwitcher"
      });
      const {
        children,
        className,
        components,
        componentsProps,
        slots,
        slotProps,
        isNextDisabled,
        isNextHidden,
        onGoToNext,
        nextLabel,
        isPreviousDisabled,
        isPreviousHidden,
        onGoToPrevious,
        previousLabel
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$b);
      const ownerState = props;
      const classes = useUtilityClasses$a(ownerState);
      const nextProps = {
        isDisabled: isNextDisabled,
        isHidden: isNextHidden,
        goTo: onGoToNext,
        label: nextLabel
      };
      const previousProps = {
        isDisabled: isPreviousDisabled,
        isHidden: isPreviousHidden,
        goTo: onGoToPrevious,
        label: previousLabel
      };
      const [leftProps, rightProps] = isRTL ? [nextProps, previousProps] : [previousProps, nextProps];
      const PreviousIconButton = (_ref2 = (_slots$previousIconBu = slots == null ? void 0 : slots.previousIconButton) != null ? _slots$previousIconBu : components == null ? void 0 : components.PreviousIconButton) != null ? _ref2 : PickersArrowSwitcherButton;
      const previousIconButtonProps = useSlotProps({
        elementType: PreviousIconButton,
        externalSlotProps: (_slotProps$previousIc = slotProps == null ? void 0 : slotProps.previousIconButton) != null ? _slotProps$previousIc : componentsProps == null ? void 0 : componentsProps.previousIconButton,
        additionalProps: {
          size: "medium",
          title: leftProps.label,
          "aria-label": leftProps.label,
          disabled: leftProps.isDisabled,
          edge: "end",
          onClick: leftProps.goTo
        },
        ownerState: _extends({}, ownerState, {
          hidden: leftProps.isHidden
        }),
        className: classes.button
      });
      const NextIconButton = (_ref22 = (_slots$nextIconButton = slots == null ? void 0 : slots.nextIconButton) != null ? _slots$nextIconButton : components == null ? void 0 : components.NextIconButton) != null ? _ref22 : PickersArrowSwitcherButton;
      const nextIconButtonProps = useSlotProps({
        elementType: NextIconButton,
        externalSlotProps: (_slotProps$nextIconBu = slotProps == null ? void 0 : slotProps.nextIconButton) != null ? _slotProps$nextIconBu : componentsProps == null ? void 0 : componentsProps.nextIconButton,
        additionalProps: {
          size: "medium",
          title: rightProps.label,
          "aria-label": rightProps.label,
          disabled: rightProps.isDisabled,
          edge: "start",
          onClick: rightProps.goTo
        },
        ownerState: _extends({}, ownerState, {
          hidden: rightProps.isHidden
        }),
        className: classes.button
      });
      const LeftArrowIcon = (_ref3 = (_slots$leftArrowIcon = slots == null ? void 0 : slots.leftArrowIcon) != null ? _slots$leftArrowIcon : components == null ? void 0 : components.LeftArrowIcon) != null ? _ref3 : ArrowLeft;
      const _useSlotProps = useSlotProps({
        elementType: LeftArrowIcon,
        externalSlotProps: (_slotProps$leftArrowI = slotProps == null ? void 0 : slotProps.leftArrowIcon) != null ? _slotProps$leftArrowI : componentsProps == null ? void 0 : componentsProps.leftArrowIcon,
        additionalProps: {
          fontSize: "inherit"
        },
        ownerState: void 0
      }), leftArrowIconProps = _objectWithoutPropertiesLoose$1(_useSlotProps, _excluded2$1);
      const RightArrowIcon = (_ref4 = (_slots$rightArrowIcon = slots == null ? void 0 : slots.rightArrowIcon) != null ? _slots$rightArrowIcon : components == null ? void 0 : components.RightArrowIcon) != null ? _ref4 : ArrowRight;
      const _useSlotProps2 = useSlotProps({
        elementType: RightArrowIcon,
        externalSlotProps: (_slotProps$rightArrow = slotProps == null ? void 0 : slotProps.rightArrowIcon) != null ? _slotProps$rightArrow : componentsProps == null ? void 0 : componentsProps.rightArrowIcon,
        additionalProps: {
          fontSize: "inherit"
        },
        ownerState: void 0
      }), rightArrowIconProps = _objectWithoutPropertiesLoose$1(_useSlotProps2, _excluded3);
      return /* @__PURE__ */ jsxs(PickersArrowSwitcherRoot, _extends({
        ref,
        className: clsx(classes.root, className),
        ownerState
      }, other, {
        children: [/* @__PURE__ */ jsx(PreviousIconButton, _extends({}, previousIconButtonProps, {
          children: isRTL ? /* @__PURE__ */ jsx(RightArrowIcon, _extends({}, rightArrowIconProps)) : /* @__PURE__ */ jsx(LeftArrowIcon, _extends({}, leftArrowIconProps))
        })), children ? /* @__PURE__ */ jsx(Typography$1, {
          variant: "subtitle1",
          component: "span",
          children
        }) : /* @__PURE__ */ jsx(PickersArrowSwitcherSpacer, {
          className: classes.spacer,
          ownerState
        }), /* @__PURE__ */ jsx(NextIconButton, _extends({}, nextIconButtonProps, {
          children: isRTL ? /* @__PURE__ */ jsx(LeftArrowIcon, _extends({}, leftArrowIconProps)) : /* @__PURE__ */ jsx(RightArrowIcon, _extends({}, rightArrowIconProps))
        }))]
      }));
    });
    function useViews({
      onChange: onChange2,
      onViewChange,
      openTo,
      view: inView,
      views,
      autoFocus,
      focusedView: inFocusedView,
      onFocusedViewChange
    }) {
      var _views, _views2;
      const defaultView = reactExports.useRef(views.includes(openTo) ? openTo : views[0]);
      const [view, setView] = useControlled({
        name: "useViews",
        state: "view",
        controlled: inView,
        default: defaultView.current
      });
      const defaultFocusedView = reactExports.useRef(autoFocus ? view : null);
      const [focusedView, setFocusedView] = useControlled({
        name: "useViews",
        state: "focusedView",
        controlled: inFocusedView,
        default: defaultFocusedView.current
      });
      const viewIndex = views.indexOf(view);
      const previousView = (_views = views[viewIndex - 1]) != null ? _views : null;
      const nextView = (_views2 = views[viewIndex + 1]) != null ? _views2 : null;
      const handleChangeView = _default$1((newView) => {
        setView(newView);
        if (onViewChange) {
          onViewChange(newView);
        }
      });
      const goToNextView = _default$1(() => {
        if (nextView) {
          handleChangeView(nextView);
        }
      });
      const setValueAndGoToNextView = _default$1((value, currentViewSelectionState) => {
        const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
        const globalSelectionState = isSelectionFinishedOnCurrentView && Boolean(nextView) ? "partial" : currentViewSelectionState;
        onChange2(value, globalSelectionState);
        if (isSelectionFinishedOnCurrentView) {
          goToNextView();
        }
      });
      const handleFocusedViewChange = _default$1((viewToFocus, hasFocus) => {
        if (hasFocus) {
          setFocusedView(viewToFocus);
        } else {
          setFocusedView(
            (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
            // If false the blur is due to view switching
          );
        }
        onFocusedViewChange == null ? void 0 : onFocusedViewChange(viewToFocus, hasFocus);
      });
      return {
        view,
        setView: handleChangeView,
        focusedView,
        setFocusedView: handleFocusedViewChange,
        nextView,
        previousView,
        defaultView: defaultView.current,
        goToNextView,
        setValueAndGoToNextView
      };
    }
    function useNextMonthDisabled(month, {
      disableFuture,
      maxDate
    }) {
      const utils = useUtils();
      return reactExports.useMemo(() => {
        const now2 = utils.date();
        const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now2, maxDate) ? now2 : maxDate);
        return !utils.isAfter(lastEnabledMonth, month);
      }, [disableFuture, maxDate, month, utils]);
    }
    function usePreviousMonthDisabled(month, {
      disablePast,
      minDate
    }) {
      const utils = useUtils();
      return reactExports.useMemo(() => {
        const now2 = utils.date();
        const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now2, minDate) ? now2 : minDate);
        return !utils.isBefore(firstEnabledMonth, month);
      }, [disablePast, minDate, month, utils]);
    }
    const DAY_SIZE = 36;
    const DAY_MARGIN = 2;
    const DIALOG_WIDTH = 320;
    const VIEW_HEIGHT = 358;
    const PickerViewRoot = styled$1("div")({
      overflow: "hidden",
      width: DIALOG_WIDTH,
      maxHeight: VIEW_HEIGHT,
      display: "flex",
      flexDirection: "column",
      margin: "0 auto"
    });
    function getPickersDayUtilityClass(slot) {
      return generateUtilityClass("MuiPickersDay", slot);
    }
    const pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);
    const _excluded$a = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
    const useUtilityClasses$9 = (ownerState) => {
      const {
        selected,
        disableMargin,
        disableHighlightToday,
        today,
        disabled: disabled2,
        outsideCurrentMonth,
        showDaysOutsideCurrentMonth,
        classes
      } = ownerState;
      const slots = {
        root: ["root", selected && "selected", disabled2 && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", outsideCurrentMonth && !showDaysOutsideCurrentMonth && "hiddenDaySpacingFiller"],
        hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
      };
      return composeClasses(slots, getPickersDayUtilityClass, classes);
    };
    const styleArg = ({
      theme,
      ownerState
    }) => _extends({}, theme.typography.caption, {
      width: DAY_SIZE,
      height: DAY_SIZE,
      borderRadius: "50%",
      padding: 0,
      // background required here to prevent collides with the other days when animating with transition group
      backgroundColor: (theme.vars || theme).palette.background.paper,
      color: (theme.vars || theme).palette.text.primary,
      "@media (pointer: fine)": {
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
        }
      },
      "&:focus": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        [`&.${pickersDayClasses.selected}`]: {
          willChange: "background-color",
          backgroundColor: (theme.vars || theme).palette.primary.dark
        }
      },
      [`&.${pickersDayClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.contrastText,
        backgroundColor: (theme.vars || theme).palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create("background-color", {
          duration: theme.transitions.duration.short
        }),
        "&:hover": {
          willChange: "background-color",
          backgroundColor: (theme.vars || theme).palette.primary.dark
        }
      },
      [`&.${pickersDayClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }, !ownerState.disableMargin && {
      margin: `0 ${DAY_MARGIN}px`
    }, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
      color: (theme.vars || theme).palette.text.secondary
    }, !ownerState.disableHighlightToday && ownerState.today && {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    });
    const overridesResolver = (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, !ownerState.disableMargin && styles2.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles2.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles2.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles2.hiddenDaySpacingFiller];
    };
    const PickersDayRoot = styled$1(ButtonBase$1, {
      name: "MuiPickersDay",
      slot: "Root",
      overridesResolver
    })(styleArg);
    const PickersDayFiller = styled$1("div", {
      name: "MuiPickersDay",
      slot: "Root",
      overridesResolver
    })(({
      theme,
      ownerState
    }) => _extends({}, styleArg({
      theme,
      ownerState
    }), {
      // visibility: 'hidden' does not work here as it hides the element from screen readers as well
      opacity: 0,
      pointerEvents: "none"
    }));
    const noop$3 = () => {
    };
    const PickersDayRaw = /* @__PURE__ */ reactExports.forwardRef(function PickersDay2(inProps, forwardedRef) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersDay"
      });
      const {
        autoFocus = false,
        className,
        day,
        disabled: disabled2 = false,
        disableHighlightToday = false,
        disableMargin = false,
        isAnimating,
        onClick,
        onDaySelect,
        onFocus = noop$3,
        onBlur = noop$3,
        onKeyDown = noop$3,
        onMouseDown = noop$3,
        onMouseEnter = noop$3,
        outsideCurrentMonth,
        selected = false,
        showDaysOutsideCurrentMonth = false,
        children,
        today: isToday = false
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$a);
      const ownerState = _extends({}, props, {
        autoFocus,
        disabled: disabled2,
        disableHighlightToday,
        disableMargin,
        selected,
        showDaysOutsideCurrentMonth,
        today: isToday
      });
      const classes = useUtilityClasses$9(ownerState);
      const utils = useUtils();
      const ref = reactExports.useRef(null);
      const handleRef = useForkRef(ref, forwardedRef);
      useEnhancedEffect$2(() => {
        if (autoFocus && !disabled2 && !isAnimating && !outsideCurrentMonth) {
          ref.current.focus();
        }
      }, [autoFocus, disabled2, isAnimating, outsideCurrentMonth]);
      const handleMouseDown = (event) => {
        onMouseDown(event);
        if (outsideCurrentMonth) {
          event.preventDefault();
        }
      };
      const handleClick = (event) => {
        if (!disabled2) {
          onDaySelect(day);
        }
        if (outsideCurrentMonth) {
          event.currentTarget.focus();
        }
        if (onClick) {
          onClick(event);
        }
      };
      if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
        return /* @__PURE__ */ jsx(PickersDayFiller, {
          className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
          ownerState,
          role: other.role
        });
      }
      return /* @__PURE__ */ jsx(PickersDayRoot, _extends({
        className: clsx(classes.root, className),
        ref: handleRef,
        centerRipple: true,
        disabled: disabled2,
        tabIndex: selected ? 0 : -1,
        onKeyDown: (event) => onKeyDown(event, day),
        onFocus: (event) => onFocus(event, day),
        onBlur: (event) => onBlur(event, day),
        onMouseEnter: (event) => onMouseEnter(event, day),
        onClick: handleClick,
        onMouseDown: handleMouseDown
      }, other, {
        ownerState,
        children: !children ? utils.format(day, "dayOfMonth") : children
      }));
    });
    const PickersDay = /* @__PURE__ */ reactExports.memo(PickersDayRaw);
    const reflow = (node2) => node2.scrollTop;
    function getTransitionProps(props, options) {
      var _style$transitionDura, _style$transitionTimi;
      const {
        timeout,
        easing: easing2,
        style: style2 = {}
      } = props;
      return {
        duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
        easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing2 === "object" ? easing2[options.mode] : easing2,
        delay: style2.transitionDelay
      };
    }
    const _excluded$9 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
    const styles$3 = {
      entering: {
        opacity: 1
      },
      entered: {
        opacity: 1
      }
    };
    const Fade = /* @__PURE__ */ reactExports.forwardRef(function Fade2(props, ref) {
      const theme = useTheme();
      const defaultTimeout = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
      };
      const {
        addEndListener,
        appear = true,
        children,
        easing: easing2,
        in: inProp,
        onEnter,
        onEntered,
        onEntering,
        onExit,
        onExited,
        onExiting,
        style: style2,
        timeout = defaultTimeout,
        // eslint-disable-next-line react/prop-types
        TransitionComponent = Transition$1
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$9);
      const nodeRef = reactExports.useRef(null);
      const handleRef = useForkRef(nodeRef, children.ref, ref);
      const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
        if (callback) {
          const node2 = nodeRef.current;
          if (maybeIsAppearing === void 0) {
            callback(node2);
          } else {
            callback(node2, maybeIsAppearing);
          }
        }
      };
      const handleEntering = normalizedTransitionCallback(onEntering);
      const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
        reflow(node2);
        const transitionProps = getTransitionProps({
          style: style2,
          timeout,
          easing: easing2
        }, {
          mode: "enter"
        });
        node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
        node2.style.transition = theme.transitions.create("opacity", transitionProps);
        if (onEnter) {
          onEnter(node2, isAppearing);
        }
      });
      const handleEntered = normalizedTransitionCallback(onEntered);
      const handleExiting = normalizedTransitionCallback(onExiting);
      const handleExit = normalizedTransitionCallback((node2) => {
        const transitionProps = getTransitionProps({
          style: style2,
          timeout,
          easing: easing2
        }, {
          mode: "exit"
        });
        node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
        node2.style.transition = theme.transitions.create("opacity", transitionProps);
        if (onExit) {
          onExit(node2);
        }
      });
      const handleExited = normalizedTransitionCallback(onExited);
      const handleAddEndListener = (next2) => {
        if (addEndListener) {
          addEndListener(nodeRef.current, next2);
        }
      };
      return /* @__PURE__ */ jsx(TransitionComponent, _extends({
        appear,
        in: inProp,
        nodeRef,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout
      }, other, {
        children: (state, childProps) => {
          return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
            style: _extends({
              opacity: 0,
              visibility: state === "exited" && !inProp ? "hidden" : void 0
            }, styles$3[state], style2, children.props.style),
            ref: handleRef
          }, childProps));
        }
      }));
    });
    const Fade$1 = Fade;
    const findClosestEnabledDate = ({
      date,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      isDateDisabled,
      utils
    }) => {
      const today = utils.startOfDay(utils.date());
      if (disablePast && utils.isBefore(minDate, today)) {
        minDate = today;
      }
      if (disableFuture && utils.isAfter(maxDate, today)) {
        maxDate = today;
      }
      let forward = date;
      let backward = date;
      if (utils.isBefore(date, minDate)) {
        forward = minDate;
        backward = null;
      }
      if (utils.isAfter(date, maxDate)) {
        if (backward) {
          backward = maxDate;
        }
        forward = null;
      }
      while (forward || backward) {
        if (forward && utils.isAfter(forward, maxDate)) {
          forward = null;
        }
        if (backward && utils.isBefore(backward, minDate)) {
          backward = null;
        }
        if (forward) {
          if (!isDateDisabled(forward)) {
            return forward;
          }
          forward = utils.addDays(forward, 1);
        }
        if (backward) {
          if (!isDateDisabled(backward)) {
            return backward;
          }
          backward = utils.addDays(backward, -1);
        }
      }
      return null;
    };
    const clamp = (utils, value, minDate, maxDate) => {
      if (utils.isBefore(value, minDate)) {
        return minDate;
      }
      if (utils.isAfter(value, maxDate)) {
        return maxDate;
      }
      return value;
    };
    const applyDefaultDate = (utils, value, defaultValue) => {
      if (value == null || !utils.isValid(value)) {
        return defaultValue;
      }
      return value;
    };
    const validateDate = ({
      props,
      value,
      adapter
    }) => {
      if (value === null) {
        return null;
      }
      const now2 = adapter.utils.date();
      const minDate = applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
      const maxDate = applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
      switch (true) {
        case !adapter.utils.isValid(value):
          return "invalidDate";
        case Boolean(props.shouldDisableDate && props.shouldDisableDate(value)):
          return "shouldDisableDate";
        case Boolean(props.shouldDisableMonth && props.shouldDisableMonth(value)):
          return "shouldDisableMonth";
        case Boolean(props.shouldDisableYear && props.shouldDisableYear(value)):
          return "shouldDisableYear";
        case Boolean(props.disableFuture && adapter.utils.isAfterDay(value, now2)):
          return "disableFuture";
        case Boolean(props.disablePast && adapter.utils.isBeforeDay(value, now2)):
          return "disablePast";
        case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
          return "minDate";
        case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
          return "maxDate";
        default:
          return null;
      }
    };
    const useIsDateDisabled = ({
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast
    }) => {
      const adapter = useLocalizationContext();
      return reactExports.useCallback((day) => validateDate({
        adapter,
        value: day,
        props: {
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          minDate,
          maxDate,
          disableFuture,
          disablePast
        }
      }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast]);
    };
    const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
      switch (action.type) {
        case "changeMonth":
          return _extends({}, state, {
            slideDirection: action.direction,
            currentMonth: action.newMonth,
            isMonthSwitchingAnimating: !reduceAnimations
          });
        case "finishMonthSwitchingAnimation":
          return _extends({}, state, {
            isMonthSwitchingAnimating: false
          });
        case "changeFocusedDay": {
          if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
            return state;
          }
          const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
          return _extends({}, state, {
            focusedDay: action.focusedDay,
            isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
            currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
            slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? "left" : "right"
          });
        }
        default:
          throw new Error("missing support");
      }
    };
    const useCalendarState = ({
      value,
      defaultCalendarMonth,
      disableFuture,
      disablePast,
      disableSwitchToMonthOnDayFocus = false,
      maxDate,
      minDate,
      onMonthChange,
      reduceAnimations,
      shouldDisableDate
    }) => {
      var _ref2;
      const now2 = useNow();
      const utils = useUtils();
      const reducerFn = reactExports.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
      const [calendarState, dispatch] = reactExports.useReducer(reducerFn, {
        isMonthSwitchingAnimating: false,
        focusedDay: value || now2,
        currentMonth: utils.startOfMonth((_ref2 = value != null ? value : defaultCalendarMonth) != null ? _ref2 : clamp(utils, now2, minDate, maxDate)),
        slideDirection: "left"
      });
      const handleChangeMonth = reactExports.useCallback((payload) => {
        dispatch(_extends({
          type: "changeMonth"
        }, payload));
        if (onMonthChange) {
          onMonthChange(payload.newMonth);
        }
      }, [onMonthChange]);
      const changeMonth = reactExports.useCallback((newDate) => {
        const newDateRequested = newDate;
        if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
          return;
        }
        handleChangeMonth({
          newMonth: utils.startOfMonth(newDateRequested),
          direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? "left" : "right"
        });
      }, [calendarState.currentMonth, handleChangeMonth, utils]);
      const isDateDisabled = useIsDateDisabled({
        shouldDisableDate,
        minDate,
        maxDate,
        disableFuture,
        disablePast
      });
      const onMonthSwitchingAnimationEnd = reactExports.useCallback(() => {
        dispatch({
          type: "finishMonthSwitchingAnimation"
        });
      }, []);
      const changeFocusedDay = _default$1((newFocusedDate, withoutMonthSwitchingAnimation) => {
        if (!isDateDisabled(newFocusedDate)) {
          dispatch({
            type: "changeFocusedDay",
            focusedDay: newFocusedDate,
            withoutMonthSwitchingAnimation
          });
        }
      });
      return {
        calendarState,
        changeMonth,
        changeFocusedDay,
        isDateDisabled,
        onMonthSwitchingAnimationEnd,
        handleChangeMonth
      };
    };
    const getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
    generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);
    const useUtilityClasses$8 = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
    };
    const animationDuration = 500;
    const PickersFadeTransitionGroupRoot = styled$1(TransitionGroup$1, {
      name: "MuiPickersFadeTransitionGroup",
      slot: "Root",
      overridesResolver: (_2, styles2) => styles2.root
    })({
      display: "block",
      position: "relative"
    });
    function PickersFadeTransitionGroup(inProps) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersFadeTransitionGroup"
      });
      const {
        children,
        className,
        reduceAnimations,
        transKey
      } = props;
      const classes = useUtilityClasses$8(props);
      if (reduceAnimations) {
        return children;
      }
      return /* @__PURE__ */ jsx(PickersFadeTransitionGroupRoot, {
        className: clsx(classes.root, className),
        children: /* @__PURE__ */ jsx(Fade$1, {
          appear: false,
          mountOnEnter: true,
          unmountOnExit: true,
          timeout: {
            appear: animationDuration,
            enter: animationDuration / 2,
            exit: 0
          },
          children
        }, transKey)
      });
    }
    const getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
    const pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);
    const _excluded$8 = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
    const useUtilityClasses$7 = (ownerState) => {
      const {
        classes,
        slideDirection
      } = ownerState;
      const slots = {
        root: ["root"],
        exit: ["slideExit"],
        enterActive: ["slideEnterActive"],
        enter: [`slideEnter-${slideDirection}`],
        exitActive: [`slideExitActiveLeft-${slideDirection}`]
      };
      return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
    };
    const slideAnimationDuration = 350;
    const PickersSlideTransitionRoot = styled$1(TransitionGroup$1, {
      name: "MuiPickersSlideTransition",
      slot: "Root",
      overridesResolver: (_2, styles2) => [styles2.root, {
        [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles2["slideEnter-left"]
      }, {
        [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles2["slideEnter-right"]
      }, {
        [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles2.slideEnterActive
      }, {
        [`.${pickersSlideTransitionClasses.slideExit}`]: styles2.slideExit
      }, {
        [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles2["slideExitActiveLeft-left"]
      }, {
        [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles2["slideExitActiveLeft-right"]
      }]
    })(({
      theme
    }) => {
      const slideTransition = theme.transitions.create("transform", {
        duration: slideAnimationDuration,
        easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
      });
      return {
        display: "block",
        position: "relative",
        overflowX: "hidden",
        "& > *": {
          position: "absolute",
          top: 0,
          right: 0,
          left: 0
        },
        [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
          willChange: "transform",
          transform: "translate(100%)",
          zIndex: 1
        },
        [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
          willChange: "transform",
          transform: "translate(-100%)",
          zIndex: 1
        },
        [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
          transform: "translate(0%)",
          transition: slideTransition
        },
        [`& .${pickersSlideTransitionClasses.slideExit}`]: {
          transform: "translate(0%)"
        },
        [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
          willChange: "transform",
          transform: "translate(-100%)",
          transition: slideTransition,
          zIndex: 0
        },
        [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
          willChange: "transform",
          transform: "translate(100%)",
          transition: slideTransition,
          zIndex: 0
        }
      };
    });
    function PickersSlideTransition(inProps) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersSlideTransition"
      });
      const {
        children,
        className,
        reduceAnimations,
        transKey
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$8);
      const classes = useUtilityClasses$7(props);
      if (reduceAnimations) {
        return /* @__PURE__ */ jsx("div", {
          className: clsx(classes.root, className),
          children
        });
      }
      const transitionClasses = {
        exit: classes.exit,
        enterActive: classes.enterActive,
        enter: classes.enter,
        exitActive: classes.exitActive
      };
      return /* @__PURE__ */ jsx(PickersSlideTransitionRoot, {
        className: clsx(classes.root, className),
        childFactory: (element) => /* @__PURE__ */ reactExports.cloneElement(element, {
          classNames: transitionClasses
        }),
        role: "presentation",
        children: /* @__PURE__ */ jsx(CSSTransition$1, _extends({
          mountOnEnter: true,
          unmountOnExit: true,
          timeout: slideAnimationDuration,
          classNames: transitionClasses
        }, other, {
          children
        }), transKey)
      });
    }
    const getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
    generateUtilityClasses("MuiDayCalendar", ["header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
    const _excluded$7 = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], _excluded2 = ["ownerState"];
    const useUtilityClasses$6 = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        header: ["header"],
        weekDayLabel: ["weekDayLabel"],
        loadingContainer: ["loadingContainer"],
        slideTransition: ["slideTransition"],
        monthContainer: ["monthContainer"],
        weekContainer: ["weekContainer"],
        weekNumberLabel: ["weekNumberLabel"],
        weekNumber: ["weekNumber"]
      };
      return composeClasses(slots, getDayCalendarUtilityClass, classes);
    };
    const defaultDayOfWeekFormatter = (day) => day.charAt(0).toUpperCase();
    const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
    const PickersCalendarDayHeader = styled$1("div", {
      name: "MuiDayCalendar",
      slot: "Header",
      overridesResolver: (_2, styles2) => styles2.header
    })({
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    });
    const PickersCalendarWeekDayLabel = styled$1(Typography$1, {
      name: "MuiDayCalendar",
      slot: "WeekDayLabel",
      overridesResolver: (_2, styles2) => styles2.weekDayLabel
    })(({
      theme
    }) => ({
      width: 36,
      height: 40,
      margin: "0 2px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: (theme.vars || theme).palette.text.secondary
    }));
    const PickersCalendarWeekNumberLabel = styled$1(Typography$1, {
      name: "MuiDayPicker",
      slot: "WeekNumberLabel",
      overridesResolver: (_2, styles2) => styles2.weekNumberLabel
    })(({
      theme
    }) => ({
      width: 36,
      height: 40,
      margin: "0 2px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.text.disabled
    }));
    const PickersCalendarWeekNumber = styled$1(Typography$1, {
      name: "MuiDayPicker",
      slot: "WeekNumber",
      overridesResolver: (_2, styles2) => styles2.weekNumber
    })(({
      theme
    }) => _extends({}, theme.typography.caption, {
      width: DAY_SIZE,
      height: DAY_SIZE,
      padding: 0,
      margin: `0 ${DAY_MARGIN}px`,
      color: theme.palette.text.disabled,
      fontSize: "0.75rem",
      alignItems: "center",
      justifyContent: "center",
      display: "inline-flex"
    }));
    const PickersCalendarLoadingContainer = styled$1("div", {
      name: "MuiDayCalendar",
      slot: "LoadingContainer",
      overridesResolver: (_2, styles2) => styles2.loadingContainer
    })({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: weeksContainerHeight
    });
    const PickersCalendarSlideTransition = styled$1(PickersSlideTransition, {
      name: "MuiDayCalendar",
      slot: "SlideTransition",
      overridesResolver: (_2, styles2) => styles2.slideTransition
    })({
      minHeight: weeksContainerHeight
    });
    const PickersCalendarWeekContainer = styled$1("div", {
      name: "MuiDayCalendar",
      slot: "MonthContainer",
      overridesResolver: (_2, styles2) => styles2.monthContainer
    })({
      overflow: "hidden"
    });
    const PickersCalendarWeek = styled$1("div", {
      name: "MuiDayCalendar",
      slot: "WeekContainer",
      overridesResolver: (_2, styles2) => styles2.weekContainer
    })({
      margin: `${DAY_MARGIN}px 0`,
      display: "flex",
      justifyContent: "center"
    });
    function WrappedDay(_ref2) {
      var _ref22, _slots$day, _slotProps$day;
      let {
        parentProps,
        day,
        focusableDay,
        selectedDays,
        isDateDisabled,
        currentMonthNumber,
        isViewFocused
      } = _ref2, other = _objectWithoutPropertiesLoose$1(_ref2, _excluded$7);
      const utils = useUtils();
      const now2 = useNow();
      const {
        disabled: disabled2,
        disableHighlightToday,
        isMonthSwitchingAnimating,
        showDaysOutsideCurrentMonth,
        components,
        componentsProps,
        slots,
        slotProps
      } = parentProps;
      const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
      const isSelected = selectedDays.some((selectedDay) => utils.isSameDay(selectedDay, day));
      const isToday = utils.isSameDay(day, now2);
      const Day = (_ref22 = (_slots$day = slots == null ? void 0 : slots.day) != null ? _slots$day : components == null ? void 0 : components.Day) != null ? _ref22 : PickersDay;
      const _useSlotProps = useSlotProps({
        elementType: Day,
        externalSlotProps: (_slotProps$day = slotProps == null ? void 0 : slotProps.day) != null ? _slotProps$day : componentsProps == null ? void 0 : componentsProps.day,
        additionalProps: _extends({
          disableHighlightToday,
          showDaysOutsideCurrentMonth,
          role: "gridcell",
          isAnimating: isMonthSwitchingAnimating,
          // it is used in date range dragging logic by accessing `dataset.timestamp`
          "data-timestamp": utils.toJsDate(day).valueOf()
        }, other),
        ownerState: _extends({}, parentProps, {
          day,
          selected: isSelected
        })
      }), dayProps = _objectWithoutPropertiesLoose$1(_useSlotProps, _excluded2);
      const isDisabled = reactExports.useMemo(() => disabled2 || isDateDisabled(day), [disabled2, isDateDisabled, day]);
      const outsideCurrentMonth = reactExports.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
      const isFirstVisibleCell = reactExports.useMemo(() => {
        const startOfMonth = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
        if (!showDaysOutsideCurrentMonth) {
          return utils.isSameDay(day, startOfMonth);
        }
        return utils.isSameDay(day, utils.startOfWeek(startOfMonth));
      }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
      const isLastVisibleCell = reactExports.useMemo(() => {
        const endOfMonth = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
        if (!showDaysOutsideCurrentMonth) {
          return utils.isSameDay(day, endOfMonth);
        }
        return utils.isSameDay(day, utils.endOfWeek(endOfMonth));
      }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
      return /* @__PURE__ */ jsx(Day, _extends({}, dayProps, {
        day,
        disabled: isDisabled,
        autoFocus: isViewFocused && isFocusableDay,
        today: isToday,
        outsideCurrentMonth,
        isFirstVisibleCell,
        isLastVisibleCell,
        selected: isSelected,
        tabIndex: isFocusableDay ? 0 : -1,
        "aria-selected": isSelected,
        "aria-current": isToday ? "date" : void 0
      }));
    }
    function DayCalendar(inProps) {
      const now2 = useNow();
      const utils = useUtils();
      const props = useThemeProps({
        props: inProps,
        name: "MuiDayCalendar"
      });
      const classes = useUtilityClasses$6(props);
      const theme = useTheme();
      const {
        onFocusedDayChange,
        className,
        currentMonth,
        selectedDays,
        focusedDay,
        loading,
        onSelectedDaysChange,
        onMonthSwitchingAnimationEnd,
        readOnly,
        reduceAnimations,
        renderLoading = () => /* @__PURE__ */ jsx("span", {
          children: "..."
        }),
        slideDirection,
        TransitionProps,
        disablePast,
        disableFuture,
        minDate,
        maxDate,
        shouldDisableDate,
        shouldDisableMonth,
        shouldDisableYear,
        dayOfWeekFormatter = defaultDayOfWeekFormatter,
        hasFocus,
        onFocusedViewChange,
        gridLabelId,
        displayWeekNumber,
        fixedWeekNumber,
        autoFocus
      } = props;
      const isDateDisabled = useIsDateDisabled({
        shouldDisableDate,
        shouldDisableMonth,
        shouldDisableYear,
        minDate,
        maxDate,
        disablePast,
        disableFuture
      });
      const localeText = useLocaleText();
      const [internalHasFocus, setInternalHasFocus] = useControlled({
        name: "DayCalendar",
        state: "hasFocus",
        controlled: hasFocus,
        default: autoFocus != null ? autoFocus : false
      });
      const [internalFocusedDay, setInternalFocusedDay] = reactExports.useState(() => focusedDay || now2);
      const handleDaySelect = _default$1((day) => {
        if (readOnly) {
          return;
        }
        onSelectedDaysChange(day);
      });
      const focusDay = (day) => {
        if (!isDateDisabled(day)) {
          onFocusedDayChange(day);
          setInternalFocusedDay(day);
          onFocusedViewChange == null ? void 0 : onFocusedViewChange(true);
          setInternalHasFocus(true);
        }
      };
      const handleKeyDown2 = _default$1((event, day) => {
        switch (event.key) {
          case "ArrowUp":
            focusDay(utils.addDays(day, -7));
            event.preventDefault();
            break;
          case "ArrowDown":
            focusDay(utils.addDays(day, 7));
            event.preventDefault();
            break;
          case "ArrowLeft": {
            const newFocusedDayDefault = utils.addDays(day, theme.direction === "ltr" ? -1 : 1);
            const nextAvailableMonth = theme.direction === "ltr" ? utils.getPreviousMonth(day) : utils.getNextMonth(day);
            const closestDayToFocus = findClosestEnabledDate({
              utils,
              date: newFocusedDayDefault,
              minDate: theme.direction === "ltr" ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
              maxDate: theme.direction === "ltr" ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
              isDateDisabled
            });
            focusDay(closestDayToFocus || newFocusedDayDefault);
            event.preventDefault();
            break;
          }
          case "ArrowRight": {
            const newFocusedDayDefault = utils.addDays(day, theme.direction === "ltr" ? 1 : -1);
            const nextAvailableMonth = theme.direction === "ltr" ? utils.getNextMonth(day) : utils.getPreviousMonth(day);
            const closestDayToFocus = findClosestEnabledDate({
              utils,
              date: newFocusedDayDefault,
              minDate: theme.direction === "ltr" ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
              maxDate: theme.direction === "ltr" ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
              isDateDisabled
            });
            focusDay(closestDayToFocus || newFocusedDayDefault);
            event.preventDefault();
            break;
          }
          case "Home":
            focusDay(utils.startOfWeek(day));
            event.preventDefault();
            break;
          case "End":
            focusDay(utils.endOfWeek(day));
            event.preventDefault();
            break;
          case "PageUp":
            focusDay(utils.getNextMonth(day));
            event.preventDefault();
            break;
          case "PageDown":
            focusDay(utils.getPreviousMonth(day));
            event.preventDefault();
            break;
        }
      });
      const handleFocus = _default$1((event, day) => focusDay(day));
      const handleBlur = _default$1((event, day) => {
        if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
          onFocusedViewChange == null ? void 0 : onFocusedViewChange(false);
        }
      });
      const currentMonthNumber = utils.getMonth(currentMonth);
      const validSelectedDays = reactExports.useMemo(() => selectedDays.filter((day) => !!day).map((day) => utils.startOfDay(day)), [utils, selectedDays]);
      const transitionKey = currentMonthNumber;
      const slideNodeRef = reactExports.useMemo(() => /* @__PURE__ */ reactExports.createRef(), [transitionKey]);
      const startOfCurrentWeek = utils.startOfWeek(now2);
      const focusableDay = reactExports.useMemo(() => {
        const startOfMonth = utils.startOfMonth(currentMonth);
        const endOfMonth = utils.endOfMonth(currentMonth);
        if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
          return findClosestEnabledDate({
            utils,
            date: internalFocusedDay,
            minDate: startOfMonth,
            maxDate: endOfMonth,
            disablePast,
            disableFuture,
            isDateDisabled
          });
        }
        return internalFocusedDay;
      }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils]);
      const weeksToDisplay = reactExports.useMemo(() => {
        const toDisplay = utils.getWeekArray(currentMonth);
        let nextMonth = utils.addMonths(currentMonth, 1);
        while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
          const additionalWeeks = utils.getWeekArray(nextMonth);
          const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
          additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
            if (toDisplay.length < fixedWeekNumber) {
              toDisplay.push(week);
            }
          });
          nextMonth = utils.addMonths(nextMonth, 1);
        }
        return toDisplay;
      }, [currentMonth, fixedWeekNumber, utils]);
      return /* @__PURE__ */ jsxs("div", {
        role: "grid",
        "aria-labelledby": gridLabelId,
        children: [/* @__PURE__ */ jsxs(PickersCalendarDayHeader, {
          role: "row",
          className: classes.header,
          children: [displayWeekNumber && /* @__PURE__ */ jsx(PickersCalendarWeekNumberLabel, {
            variant: "caption",
            role: "columnheader",
            "aria-label": localeText.calendarWeekNumberHeaderLabel,
            className: classes.weekNumberLabel,
            children: localeText.calendarWeekNumberHeaderText
          }), utils.getWeekdays().map((day, i) => {
            var _dayOfWeekFormatter;
            return /* @__PURE__ */ jsx(PickersCalendarWeekDayLabel, {
              variant: "caption",
              role: "columnheader",
              "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), "weekday"),
              className: classes.weekDayLabel,
              children: (_dayOfWeekFormatter = dayOfWeekFormatter == null ? void 0 : dayOfWeekFormatter(day)) != null ? _dayOfWeekFormatter : day
            }, day + i.toString());
          })]
        }), loading ? /* @__PURE__ */ jsx(PickersCalendarLoadingContainer, {
          className: classes.loadingContainer,
          children: renderLoading()
        }) : /* @__PURE__ */ jsx(PickersCalendarSlideTransition, _extends({
          transKey: transitionKey,
          onExited: onMonthSwitchingAnimationEnd,
          reduceAnimations,
          slideDirection,
          className: clsx(className, classes.slideTransition)
        }, TransitionProps, {
          nodeRef: slideNodeRef,
          children: /* @__PURE__ */ jsx(PickersCalendarWeekContainer, {
            ref: slideNodeRef,
            role: "rowgroup",
            className: classes.monthContainer,
            children: weeksToDisplay.map((week, index2) => /* @__PURE__ */ jsxs(PickersCalendarWeek, {
              role: "row",
              className: classes.weekContainer,
              "aria-rowindex": index2 + 1,
              children: [displayWeekNumber && /* @__PURE__ */ jsx(PickersCalendarWeekNumber, {
                className: classes.weekNumber,
                role: "rowheader",
                "aria-label": localeText.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
                children: localeText.calendarWeekNumberText(utils.getWeekNumber(week[0]))
              }), week.map((day, dayIndex) => /* @__PURE__ */ jsx(WrappedDay, {
                parentProps: props,
                day,
                selectedDays: validSelectedDays,
                focusableDay,
                onKeyDown: handleKeyDown2,
                onFocus: handleFocus,
                onBlur: handleBlur,
                onDaySelect: handleDaySelect,
                isDateDisabled,
                currentMonthNumber,
                isViewFocused: internalHasFocus,
                "aria-colindex": dayIndex + 1
              }, day.toString()))]
            }, `week-${week[0]}`))
          })
        }))]
      });
    }
    function getPickersMonthUtilityClass(slot) {
      return generateUtilityClass("MuiPickersMonth", slot);
    }
    const pickersMonthClasses = generateUtilityClasses("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]);
    const _excluded$6 = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "monthsPerRow"];
    const useUtilityClasses$5 = (ownerState) => {
      const {
        disabled: disabled2,
        selected,
        classes
      } = ownerState;
      const slots = {
        root: ["root"],
        monthButton: ["monthButton", disabled2 && "disabled", selected && "selected"]
      };
      return composeClasses(slots, getPickersMonthUtilityClass, classes);
    };
    const PickersMonthRoot = styled$1("div", {
      name: "MuiPickersMonth",
      slot: "Root",
      overridesResolver: (_2, styles2) => [styles2.root]
    })(({
      ownerState
    }) => ({
      flexBasis: ownerState.monthsPerRow === 3 ? "33.3%" : "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }));
    const PickersMonthButton = styled$1("button", {
      name: "MuiPickersMonth",
      slot: "MonthButton",
      overridesResolver: (_2, styles2) => [styles2.monthButton, {
        [`&.${pickersMonthClasses.disabled}`]: styles2.disabled
      }, {
        [`&.${pickersMonthClasses.selected}`]: styles2.selected
      }]
    })(({
      theme
    }) => _extends({
      color: "unset",
      backgroundColor: "transparent",
      border: 0,
      outline: 0
    }, theme.typography.subtitle1, {
      margin: "8px 0",
      height: 36,
      width: 72,
      borderRadius: 18,
      cursor: "pointer",
      "&:focus": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      "&:disabled": {
        cursor: "auto",
        pointerEvents: "none"
      },
      [`&.${pickersMonthClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.secondary
      },
      [`&.${pickersMonthClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.contrastText,
        backgroundColor: (theme.vars || theme).palette.primary.main,
        "&:focus, &:hover": {
          backgroundColor: (theme.vars || theme).palette.primary.dark
        }
      }
    }));
    const PickersMonth = /* @__PURE__ */ reactExports.memo(function PickersMonth2(inProps) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersMonth"
      });
      const {
        autoFocus,
        children,
        disabled: disabled2,
        value,
        tabIndex,
        onClick,
        onKeyDown,
        onFocus,
        onBlur,
        "aria-current": ariaCurrent
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$6);
      const ref = reactExports.useRef(null);
      const classes = useUtilityClasses$5(props);
      useEnhancedEffect$2(() => {
        if (autoFocus) {
          var _ref$current;
          (_ref$current = ref.current) == null ? void 0 : _ref$current.focus();
        }
      }, [autoFocus]);
      return /* @__PURE__ */ jsx(PickersMonthRoot, _extends({
        className: classes.root,
        ownerState: props
      }, other, {
        children: /* @__PURE__ */ jsx(PickersMonthButton, {
          ref,
          disabled: disabled2,
          type: "button",
          tabIndex: disabled2 ? -1 : tabIndex,
          "aria-current": ariaCurrent,
          onClick: (event) => onClick(event, value),
          onKeyDown: (event) => onKeyDown(event, value),
          onFocus: (event) => onFocus(event, value),
          onBlur: (event) => onBlur(event, value),
          className: classes.monthButton,
          ownerState: props,
          children
        })
      }));
    });
    function getMonthCalendarUtilityClass(slot) {
      return generateUtilityClass("MuiMonthCalendar", slot);
    }
    generateUtilityClasses("MuiMonthCalendar", ["root"]);
    const _excluded$5 = ["className", "value", "defaultValue", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow"];
    const useUtilityClasses$4 = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getMonthCalendarUtilityClass, classes);
    };
    function useMonthCalendarDefaultizedProps(props, name) {
      const utils = useUtils();
      const defaultDates = useDefaultDates();
      const themeProps = useThemeProps({
        props,
        name
      });
      return _extends({
        disableFuture: false,
        disablePast: false
      }, themeProps, {
        minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
        maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
      });
    }
    const MonthCalendarRoot = styled$1("div", {
      name: "MuiMonthCalendar",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })({
      display: "flex",
      flexWrap: "wrap",
      alignContent: "stretch",
      padding: "0 4px",
      width: 320
    });
    const MonthCalendar = /* @__PURE__ */ reactExports.forwardRef(function MonthCalendar2(inProps, ref) {
      const now2 = useNow();
      const theme = useTheme$1();
      const utils = useUtils();
      const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
      const {
        className,
        value: valueProp,
        defaultValue,
        disabled: disabled2,
        disableFuture,
        disablePast,
        maxDate,
        minDate,
        onChange: onChange2,
        shouldDisableMonth,
        readOnly,
        disableHighlightToday,
        autoFocus = false,
        onMonthFocus,
        hasFocus,
        onFocusedViewChange,
        monthsPerRow = 3
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$5);
      const ownerState = props;
      const classes = useUtilityClasses$4(ownerState);
      const [value, setValue] = useControlled({
        name: "MonthCalendar",
        state: "value",
        controlled: valueProp,
        default: defaultValue != null ? defaultValue : null
      });
      const todayMonth = reactExports.useMemo(() => utils.getMonth(now2), [utils, now2]);
      const selectedDateOrStartOfMonth = reactExports.useMemo(() => value != null ? value : utils.startOfMonth(now2), [now2, utils, value]);
      const selectedMonth = reactExports.useMemo(() => {
        if (value != null) {
          return utils.getMonth(value);
        }
        if (disableHighlightToday) {
          return null;
        }
        return utils.getMonth(now2);
      }, [now2, value, utils, disableHighlightToday]);
      const [focusedMonth, setFocusedMonth] = reactExports.useState(() => selectedMonth || todayMonth);
      const [internalHasFocus, setInternalHasFocus] = useControlled({
        name: "MonthCalendar",
        state: "hasFocus",
        controlled: hasFocus,
        default: autoFocus != null ? autoFocus : false
      });
      const changeHasFocus = useEventCallback$2((newHasFocus) => {
        setInternalHasFocus(newHasFocus);
        if (onFocusedViewChange) {
          onFocusedViewChange(newHasFocus);
        }
      });
      const isMonthDisabled = useEventCallback$2((month) => {
        const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now2, minDate) ? now2 : minDate);
        const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now2, maxDate) ? now2 : maxDate);
        if (utils.isBefore(month, firstEnabledMonth)) {
          return true;
        }
        if (utils.isAfter(month, lastEnabledMonth)) {
          return true;
        }
        if (!shouldDisableMonth) {
          return false;
        }
        return shouldDisableMonth(month);
      });
      const handleMonthSelection = useEventCallback$2((event, month) => {
        if (readOnly) {
          return;
        }
        const newDate = utils.setMonth(selectedDateOrStartOfMonth, month);
        setValue(newDate);
        onChange2 == null ? void 0 : onChange2(newDate);
      });
      const focusMonth = useEventCallback$2((month) => {
        if (!isMonthDisabled(utils.setMonth(selectedDateOrStartOfMonth, month))) {
          setFocusedMonth(month);
          changeHasFocus(true);
          if (onMonthFocus) {
            onMonthFocus(month);
          }
        }
      });
      reactExports.useEffect(() => {
        setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
      }, [selectedMonth]);
      const handleKeyDown2 = useEventCallback$2((event, month) => {
        const monthsInYear = 12;
        const monthsInRow = 3;
        switch (event.key) {
          case "ArrowUp":
            focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
            event.preventDefault();
            break;
          case "ArrowDown":
            focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
            event.preventDefault();
            break;
          case "ArrowLeft":
            focusMonth((monthsInYear + month + (theme.direction === "ltr" ? -1 : 1)) % monthsInYear);
            event.preventDefault();
            break;
          case "ArrowRight":
            focusMonth((monthsInYear + month + (theme.direction === "ltr" ? 1 : -1)) % monthsInYear);
            event.preventDefault();
            break;
        }
      });
      const handleMonthFocus = useEventCallback$2((event, month) => {
        focusMonth(month);
      });
      const handleMonthBlur = useEventCallback$2((event, month) => {
        if (focusedMonth === month) {
          changeHasFocus(false);
        }
      });
      return /* @__PURE__ */ jsx(MonthCalendarRoot, _extends({
        ref,
        className: clsx(classes.root, className),
        ownerState
      }, other, {
        children: utils.getMonthArray(selectedDateOrStartOfMonth).map((month) => {
          const monthNumber = utils.getMonth(month);
          const monthText = utils.format(month, "monthShort");
          const isSelected = monthNumber === selectedMonth;
          const isDisabled = disabled2 || isMonthDisabled(month);
          return /* @__PURE__ */ jsx(PickersMonth, {
            selected: isSelected,
            value: monthNumber,
            onClick: handleMonthSelection,
            onKeyDown: handleKeyDown2,
            autoFocus: internalHasFocus && monthNumber === focusedMonth,
            disabled: isDisabled,
            tabIndex: monthNumber === focusedMonth ? 0 : -1,
            onFocus: handleMonthFocus,
            onBlur: handleMonthBlur,
            "aria-current": todayMonth === monthNumber ? "date" : void 0,
            monthsPerRow,
            children: monthText
          }, monthText);
        })
      }));
    });
    function getPickersYearUtilityClass(slot) {
      return generateUtilityClass("MuiPickersYear", slot);
    }
    const pickersYearClasses = generateUtilityClasses("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]);
    const _excluded$4 = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"];
    const useUtilityClasses$3 = (ownerState) => {
      const {
        disabled: disabled2,
        selected,
        classes
      } = ownerState;
      const slots = {
        root: ["root"],
        yearButton: ["yearButton", disabled2 && "disabled", selected && "selected"]
      };
      return composeClasses(slots, getPickersYearUtilityClass, classes);
    };
    const PickersYearRoot = styled$1("div", {
      name: "MuiPickersYear",
      slot: "Root",
      overridesResolver: (_2, styles2) => [styles2.root]
    })(({
      ownerState
    }) => ({
      flexBasis: ownerState.yearsPerRow === 3 ? "33.3%" : "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }));
    const PickersYearButton = styled$1("button", {
      name: "MuiPickersYear",
      slot: "YearButton",
      overridesResolver: (_2, styles2) => [styles2.yearButton, {
        [`&.${pickersYearClasses.disabled}`]: styles2.disabled
      }, {
        [`&.${pickersYearClasses.selected}`]: styles2.selected
      }]
    })(({
      theme
    }) => _extends({
      color: "unset",
      backgroundColor: "transparent",
      border: 0,
      outline: 0
    }, theme.typography.subtitle1, {
      margin: "8px 0",
      height: 36,
      width: 72,
      borderRadius: 18,
      cursor: "pointer",
      "&:focus": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
      },
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      "&:disabled": {
        cursor: "auto",
        pointerEvents: "none"
      },
      [`&.${pickersYearClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.secondary
      },
      [`&.${pickersYearClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.contrastText,
        backgroundColor: (theme.vars || theme).palette.primary.main,
        "&:focus, &:hover": {
          backgroundColor: (theme.vars || theme).palette.primary.dark
        }
      }
    }));
    const PickersYear = /* @__PURE__ */ reactExports.memo(function PickersYear2(inProps) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersYear"
      });
      const {
        autoFocus,
        className,
        children,
        disabled: disabled2,
        value,
        tabIndex,
        onClick,
        onKeyDown,
        onFocus,
        onBlur,
        "aria-current": ariaCurrent
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$4);
      const ref = reactExports.useRef(null);
      const classes = useUtilityClasses$3(props);
      reactExports.useEffect(() => {
        if (autoFocus) {
          ref.current.focus();
        }
      }, [autoFocus]);
      return /* @__PURE__ */ jsx(PickersYearRoot, _extends({
        className: clsx(classes.root, className),
        ownerState: props
      }, other, {
        children: /* @__PURE__ */ jsx(PickersYearButton, {
          ref,
          disabled: disabled2,
          type: "button",
          tabIndex: disabled2 ? -1 : tabIndex,
          "aria-current": ariaCurrent,
          onClick: (event) => onClick(event, value),
          onKeyDown: (event) => onKeyDown(event, value),
          onFocus: (event) => onFocus(event, value),
          onBlur: (event) => onBlur(event, value),
          className: classes.yearButton,
          ownerState: props,
          children
        })
      }));
    });
    function getYearCalendarUtilityClass(slot) {
      return generateUtilityClass("MuiYearCalendar", slot);
    }
    generateUtilityClasses("MuiYearCalendar", ["root"]);
    const _excluded$3 = ["autoFocus", "className", "value", "defaultValue", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow"];
    const useUtilityClasses$2 = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getYearCalendarUtilityClass, classes);
    };
    function useYearCalendarDefaultizedProps(props, name) {
      const utils = useUtils();
      const defaultDates = useDefaultDates();
      const themeProps = useThemeProps({
        props,
        name
      });
      return _extends({
        disablePast: false,
        disableFuture: false
      }, themeProps, {
        minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
        maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
      });
    }
    const YearCalendarRoot = styled$1("div", {
      name: "MuiYearCalendar",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      overflowY: "auto",
      height: "100%",
      padding: "0 4px",
      width: 320,
      maxHeight: 304
    });
    const YearCalendar = /* @__PURE__ */ reactExports.forwardRef(function YearCalendar2(inProps, ref) {
      const now2 = useNow();
      const theme = useTheme$1();
      const utils = useUtils();
      const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
      const {
        autoFocus,
        className,
        value: valueProp,
        defaultValue,
        disabled: disabled2,
        disableFuture,
        disablePast,
        maxDate,
        minDate,
        onChange: onChange2,
        readOnly,
        shouldDisableYear,
        disableHighlightToday,
        onYearFocus,
        hasFocus,
        onFocusedViewChange,
        yearsPerRow = 3
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$3);
      const ownerState = props;
      const classes = useUtilityClasses$2(ownerState);
      const [value, setValue] = useControlled({
        name: "YearCalendar",
        state: "value",
        controlled: valueProp,
        default: defaultValue != null ? defaultValue : null
      });
      const selectedDateOrStartOfYear = reactExports.useMemo(() => value != null ? value : utils.startOfYear(now2), [now2, utils, value]);
      const todayYear = reactExports.useMemo(() => utils.getYear(now2), [utils, now2]);
      const selectedYear = reactExports.useMemo(() => {
        if (value != null) {
          return utils.getYear(value);
        }
        if (disableHighlightToday) {
          return null;
        }
        return utils.getYear(now2);
      }, [now2, value, utils, disableHighlightToday]);
      const [focusedYear, setFocusedYear] = reactExports.useState(() => selectedYear || todayYear);
      const [internalHasFocus, setInternalHasFocus] = useControlled({
        name: "YearCalendar",
        state: "hasFocus",
        controlled: hasFocus,
        default: autoFocus != null ? autoFocus : false
      });
      const changeHasFocus = useEventCallback$2((newHasFocus) => {
        setInternalHasFocus(newHasFocus);
        if (onFocusedViewChange) {
          onFocusedViewChange(newHasFocus);
        }
      });
      const isYearDisabled = useEventCallback$2((dateToValidate) => {
        if (disablePast && utils.isBeforeYear(dateToValidate, now2)) {
          return true;
        }
        if (disableFuture && utils.isAfterYear(dateToValidate, now2)) {
          return true;
        }
        if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
          return true;
        }
        if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
          return true;
        }
        if (shouldDisableYear && shouldDisableYear(dateToValidate)) {
          return true;
        }
        return false;
      });
      const handleYearSelection = useEventCallback$2((event, year) => {
        if (readOnly) {
          return;
        }
        const newDate = utils.setYear(selectedDateOrStartOfYear, year);
        setValue(newDate);
        onChange2 == null ? void 0 : onChange2(newDate);
      });
      const focusYear = useEventCallback$2((year) => {
        if (!isYearDisabled(utils.setYear(selectedDateOrStartOfYear, year))) {
          setFocusedYear(year);
          changeHasFocus(true);
          onYearFocus == null ? void 0 : onYearFocus(year);
        }
      });
      reactExports.useEffect(() => {
        setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
      }, [selectedYear]);
      const handleKeyDown2 = useEventCallback$2((event, year) => {
        switch (event.key) {
          case "ArrowUp":
            focusYear(year - yearsPerRow);
            event.preventDefault();
            break;
          case "ArrowDown":
            focusYear(year + yearsPerRow);
            event.preventDefault();
            break;
          case "ArrowLeft":
            focusYear(year + (theme.direction === "ltr" ? -1 : 1));
            event.preventDefault();
            break;
          case "ArrowRight":
            focusYear(year + (theme.direction === "ltr" ? 1 : -1));
            event.preventDefault();
            break;
        }
      });
      const handleYearFocus = useEventCallback$2((event, year) => {
        focusYear(year);
      });
      const handleYearBlur = useEventCallback$2((event, year) => {
        if (focusedYear === year) {
          changeHasFocus(false);
        }
      });
      const scrollerRef = reactExports.useRef(null);
      const handleRef = useForkRef(ref, scrollerRef);
      reactExports.useEffect(() => {
        if (autoFocus || scrollerRef.current === null) {
          return;
        }
        const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
        if (!tabbableButton) {
          return;
        }
        const offsetHeight = tabbableButton.offsetHeight;
        const offsetTop = tabbableButton.offsetTop;
        const clientHeight = scrollerRef.current.clientHeight;
        const scrollTop = scrollerRef.current.scrollTop;
        const elementBottom = offsetTop + offsetHeight;
        if (offsetHeight > clientHeight || offsetTop < scrollTop) {
          return;
        }
        scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
      }, [autoFocus]);
      return /* @__PURE__ */ jsx(YearCalendarRoot, _extends({
        ref: handleRef,
        className: clsx(classes.root, className),
        ownerState
      }, other, {
        children: utils.getYearRange(minDate, maxDate).map((year) => {
          const yearNumber = utils.getYear(year);
          const isSelected = yearNumber === selectedYear;
          const isDisabled = disabled2 || isYearDisabled(year);
          return /* @__PURE__ */ jsx(PickersYear, {
            selected: isSelected,
            value: yearNumber,
            onClick: handleYearSelection,
            onKeyDown: handleKeyDown2,
            autoFocus: internalHasFocus && yearNumber === focusedYear,
            disabled: isDisabled,
            tabIndex: yearNumber === focusedYear ? 0 : -1,
            onFocus: handleYearFocus,
            onBlur: handleYearBlur,
            "aria-current": todayYear === yearNumber ? "date" : void 0,
            yearsPerRow,
            children: utils.format(year, "year")
          }, utils.format(year, "year"));
        })
      }));
    });
    const getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
    const pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);
    const _excluded$2 = ["ownerState"];
    const useUtilityClasses$1 = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"],
        labelContainer: ["labelContainer"],
        label: ["label"],
        switchViewButton: ["switchViewButton"],
        switchViewIcon: ["switchViewIcon"]
      };
      return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
    };
    const PickersCalendarHeaderRoot = styled$1("div", {
      name: "MuiPickersCalendarHeader",
      slot: "Root",
      overridesResolver: (_2, styles2) => styles2.root
    })({
      display: "flex",
      alignItems: "center",
      marginTop: 16,
      marginBottom: 8,
      paddingLeft: 24,
      paddingRight: 12,
      // prevent jumping in safari
      maxHeight: 30,
      minHeight: 30
    });
    const PickersCalendarHeaderLabelContainer = styled$1("div", {
      name: "MuiPickersCalendarHeader",
      slot: "LabelContainer",
      overridesResolver: (_2, styles2) => styles2.labelContainer
    })(({
      theme
    }) => _extends({
      display: "flex",
      overflow: "hidden",
      alignItems: "center",
      cursor: "pointer",
      marginRight: "auto"
    }, theme.typography.body1, {
      fontWeight: theme.typography.fontWeightMedium
    }));
    const PickersCalendarHeaderLabel = styled$1("div", {
      name: "MuiPickersCalendarHeader",
      slot: "Label",
      overridesResolver: (_2, styles2) => styles2.label
    })({
      marginRight: 6
    });
    const PickersCalendarHeaderSwitchViewButton = styled$1(IconButton$1, {
      name: "MuiPickersCalendarHeader",
      slot: "SwitchViewButton",
      overridesResolver: (_2, styles2) => styles2.switchViewButton
    })(({
      ownerState
    }) => _extends({
      marginRight: "auto"
    }, ownerState.view === "year" && {
      [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }));
    const PickersCalendarHeaderSwitchViewIcon = styled$1(ArrowDropDown, {
      name: "MuiPickersCalendarHeader",
      slot: "SwitchViewIcon",
      overridesResolver: (_2, styles2) => styles2.switchViewIcon
    })(({
      theme
    }) => ({
      willChange: "transform",
      transition: theme.transitions.create("transform"),
      transform: "rotate(0deg)"
    }));
    function PickersCalendarHeader(inProps) {
      var _ref2, _slots$switchViewButt, _slotProps$switchView, _ref22, _slots$switchViewIcon, _slotProps$switchView2;
      const localeText = useLocaleText();
      const utils = useUtils();
      const props = useThemeProps({
        props: inProps,
        name: "MuiPickersCalendarHeader"
      });
      const {
        components,
        componentsProps,
        slots,
        slotProps,
        currentMonth: month,
        disabled: disabled2,
        disableFuture,
        disablePast,
        maxDate,
        minDate,
        onMonthChange,
        onViewChange,
        view,
        reduceAnimations,
        views,
        labelId
      } = props;
      const ownerState = props;
      const classes = useUtilityClasses$1(props);
      const SwitchViewButton = (_ref2 = (_slots$switchViewButt = slots == null ? void 0 : slots.switchViewButton) != null ? _slots$switchViewButt : components == null ? void 0 : components.SwitchViewButton) != null ? _ref2 : PickersCalendarHeaderSwitchViewButton;
      const switchViewButtonProps = useSlotProps({
        elementType: SwitchViewButton,
        externalSlotProps: (_slotProps$switchView = slotProps == null ? void 0 : slotProps.switchViewButton) != null ? _slotProps$switchView : componentsProps == null ? void 0 : componentsProps.switchViewButton,
        additionalProps: {
          size: "small",
          "aria-label": localeText.calendarViewSwitchingButtonAriaLabel(view)
        },
        ownerState,
        className: classes.switchViewButton
      });
      const SwitchViewIcon = (_ref22 = (_slots$switchViewIcon = slots == null ? void 0 : slots.switchViewIcon) != null ? _slots$switchViewIcon : components == null ? void 0 : components.SwitchViewIcon) != null ? _ref22 : PickersCalendarHeaderSwitchViewIcon;
      const _useSlotProps = useSlotProps({
        elementType: SwitchViewIcon,
        externalSlotProps: (_slotProps$switchView2 = slotProps == null ? void 0 : slotProps.switchViewIcon) != null ? _slotProps$switchView2 : componentsProps == null ? void 0 : componentsProps.switchViewIcon,
        ownerState: void 0,
        className: classes.switchViewIcon
      }), switchViewIconProps = _objectWithoutPropertiesLoose$1(_useSlotProps, _excluded$2);
      const selectNextMonth = () => onMonthChange(utils.getNextMonth(month), "left");
      const selectPreviousMonth = () => onMonthChange(utils.getPreviousMonth(month), "right");
      const isNextMonthDisabled = useNextMonthDisabled(month, {
        disableFuture,
        maxDate
      });
      const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
        disablePast,
        minDate
      });
      const handleToggleView = () => {
        if (views.length === 1 || !onViewChange || disabled2) {
          return;
        }
        if (views.length === 2) {
          onViewChange(views.find((el2) => el2 !== view) || views[0]);
        } else {
          const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
          onViewChange(views[nextIndexToOpen]);
        }
      };
      if (views.length === 1 && views[0] === "year") {
        return null;
      }
      return /* @__PURE__ */ jsxs(PickersCalendarHeaderRoot, {
        ownerState,
        className: classes.root,
        children: [/* @__PURE__ */ jsxs(PickersCalendarHeaderLabelContainer, {
          role: "presentation",
          onClick: handleToggleView,
          ownerState,
          "aria-live": "polite",
          className: classes.labelContainer,
          children: [/* @__PURE__ */ jsx(PickersFadeTransitionGroup, {
            reduceAnimations,
            transKey: utils.format(month, "monthAndYear"),
            children: /* @__PURE__ */ jsx(PickersCalendarHeaderLabel, {
              id: labelId,
              ownerState,
              className: classes.label,
              children: utils.format(month, "monthAndYear")
            })
          }), views.length > 1 && !disabled2 && /* @__PURE__ */ jsx(SwitchViewButton, _extends({}, switchViewButtonProps, {
            children: /* @__PURE__ */ jsx(SwitchViewIcon, _extends({}, switchViewIconProps))
          }))]
        }), /* @__PURE__ */ jsx(Fade$1, {
          in: view === "day",
          children: /* @__PURE__ */ jsx(PickersArrowSwitcher, {
            components,
            componentsProps,
            slots,
            slotProps,
            onGoToPrevious: selectPreviousMonth,
            isPreviousDisabled: isPreviousMonthDisabled,
            previousLabel: localeText.previousMonth,
            onGoToNext: selectNextMonth,
            isNextDisabled: isNextMonthDisabled,
            nextLabel: localeText.nextMonth
          })
        })]
      });
    }
    const defaultReduceAnimations = typeof navigator !== "undefined" && /(android)/i.test(navigator.userAgent);
    const getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
    generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);
    const _excluded$1 = ["autoFocus", "onViewChange", "value", "defaultValue", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow"];
    const useUtilityClasses = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"],
        viewTransitionContainer: ["viewTransitionContainer"]
      };
      return composeClasses(slots, getDateCalendarUtilityClass, classes);
    };
    function useDateCalendarDefaultizedProps(props, name) {
      const utils = useUtils();
      const defaultDates = useDefaultDates();
      const themeProps = useThemeProps({
        props,
        name
      });
      return _extends({
        loading: false,
        disablePast: false,
        disableFuture: false,
        openTo: "day",
        views: ["year", "day"],
        reduceAnimations: defaultReduceAnimations,
        renderLoading: () => /* @__PURE__ */ jsx("span", {
          children: "..."
        })
      }, themeProps, {
        minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
        maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
      });
    }
    const DateCalendarRoot = styled$1(PickerViewRoot, {
      name: "MuiDateCalendar",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })({
      display: "flex",
      flexDirection: "column"
    });
    const DateCalendarViewTransitionContainer = styled$1(PickersFadeTransitionGroup, {
      name: "MuiDateCalendar",
      slot: "ViewTransitionContainer",
      overridesResolver: (props, styles2) => styles2.viewTransitionContainer
    })({});
    const DateCalendar = /* @__PURE__ */ reactExports.forwardRef(function DateCalendar2(inProps, ref) {
      const utils = useUtils();
      const id2 = useId();
      const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
      const {
        autoFocus,
        onViewChange,
        value: valueProp,
        defaultValue,
        disableFuture,
        disablePast,
        defaultCalendarMonth,
        onChange: onChange2,
        onYearChange,
        onMonthChange,
        reduceAnimations,
        shouldDisableDate,
        shouldDisableMonth,
        shouldDisableYear,
        view: inView,
        views,
        openTo,
        className,
        disabled: disabled2,
        readOnly,
        minDate,
        maxDate,
        disableHighlightToday,
        focusedView: inFocusedView,
        onFocusedViewChange,
        showDaysOutsideCurrentMonth,
        fixedWeekNumber,
        dayOfWeekFormatter,
        components,
        componentsProps,
        slots,
        slotProps,
        loading,
        renderLoading,
        displayWeekNumber,
        yearsPerRow,
        monthsPerRow
      } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$1);
      const [value, setValue] = useControlled({
        name: "DateCalendar",
        state: "value",
        controlled: valueProp,
        default: defaultValue != null ? defaultValue : null
      });
      const handleValueChange = useEventCallback$2((newValue, selectionState) => {
        setValue(newValue);
        onChange2 == null ? void 0 : onChange2(newValue, selectionState);
      });
      const {
        view,
        setView,
        focusedView,
        setFocusedView,
        goToNextView,
        setValueAndGoToNextView
      } = useViews({
        view: inView,
        views,
        openTo,
        onChange: handleValueChange,
        onViewChange,
        autoFocus,
        focusedView: inFocusedView,
        onFocusedViewChange
      });
      const {
        calendarState,
        changeFocusedDay,
        changeMonth,
        handleChangeMonth,
        isDateDisabled,
        onMonthSwitchingAnimationEnd
      } = useCalendarState({
        value,
        defaultCalendarMonth,
        reduceAnimations,
        onMonthChange,
        minDate,
        maxDate,
        shouldDisableDate,
        disablePast,
        disableFuture
      });
      const handleDateMonthChange = useEventCallback$2((newDate) => {
        const startOfMonth = utils.startOfMonth(newDate);
        const endOfMonth = utils.endOfMonth(newDate);
        const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
          utils,
          date: newDate,
          minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
          maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
          disablePast,
          disableFuture,
          isDateDisabled
        }) : newDate;
        if (closestEnabledDate) {
          setValueAndGoToNextView(closestEnabledDate, "finish");
          onMonthChange == null ? void 0 : onMonthChange(startOfMonth);
        } else {
          goToNextView();
          changeMonth(startOfMonth);
        }
        changeFocusedDay(closestEnabledDate, true);
      });
      const handleDateYearChange = useEventCallback$2((newDate) => {
        const startOfYear = utils.startOfYear(newDate);
        const endOfYear = utils.endOfYear(newDate);
        const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
          utils,
          date: newDate,
          minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
          maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
          disablePast,
          disableFuture,
          isDateDisabled
        }) : newDate;
        if (closestEnabledDate) {
          setValueAndGoToNextView(closestEnabledDate, "finish");
          onYearChange == null ? void 0 : onYearChange(closestEnabledDate);
        } else {
          goToNextView();
          changeMonth(startOfYear);
        }
        changeFocusedDay(closestEnabledDate, true);
      });
      const handleSelectedDayChange = useEventCallback$2((day) => {
        if (value && day) {
          return setValueAndGoToNextView(utils.mergeDateAndTime(day, value), "finish");
        }
        return setValueAndGoToNextView(day, "finish");
      });
      reactExports.useEffect(() => {
        if (value != null && utils.isValid(value)) {
          changeMonth(value);
        }
      }, [value]);
      const ownerState = props;
      const classes = useUtilityClasses(ownerState);
      const baseDateValidationProps = {
        disablePast,
        disableFuture,
        maxDate,
        minDate
      };
      const minDateWithDisabled = disabled2 && value || minDate;
      const maxDateWithDisabled = disabled2 && value || maxDate;
      const commonViewProps = {
        disableHighlightToday,
        readOnly,
        disabled: disabled2
      };
      const gridLabelId = `${id2}-grid-label`;
      const hasFocus = focusedView !== null;
      const prevOpenViewRef = reactExports.useRef(view);
      reactExports.useEffect(() => {
        if (prevOpenViewRef.current === view) {
          return;
        }
        if (focusedView === prevOpenViewRef.current) {
          setFocusedView(view, true);
        }
        prevOpenViewRef.current = view;
      }, [focusedView, setFocusedView, view]);
      const selectedDays = reactExports.useMemo(() => [value], [value]);
      return /* @__PURE__ */ jsxs(DateCalendarRoot, _extends({
        ref,
        className: clsx(classes.root, className),
        ownerState
      }, other, {
        children: [/* @__PURE__ */ jsx(PickersCalendarHeader, {
          views,
          view,
          currentMonth: calendarState.currentMonth,
          onViewChange: setView,
          onMonthChange: (newMonth, direction) => handleChangeMonth({
            newMonth,
            direction
          }),
          minDate: minDateWithDisabled,
          maxDate: maxDateWithDisabled,
          disabled: disabled2,
          disablePast,
          disableFuture,
          reduceAnimations,
          labelId: gridLabelId,
          components,
          componentsProps,
          slots,
          slotProps
        }), /* @__PURE__ */ jsx(DateCalendarViewTransitionContainer, {
          reduceAnimations,
          className: classes.viewTransitionContainer,
          transKey: view,
          ownerState,
          children: /* @__PURE__ */ jsxs("div", {
            children: [view === "year" && /* @__PURE__ */ jsx(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
              value,
              onChange: handleDateYearChange,
              shouldDisableYear,
              hasFocus,
              onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
              yearsPerRow
            })), view === "month" && /* @__PURE__ */ jsx(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
              hasFocus,
              className,
              value,
              onChange: handleDateMonthChange,
              shouldDisableMonth,
              onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
              monthsPerRow
            })), view === "day" && /* @__PURE__ */ jsx(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
              onMonthSwitchingAnimationEnd,
              onFocusedDayChange: changeFocusedDay,
              reduceAnimations,
              selectedDays,
              onSelectedDaysChange: handleSelectedDayChange,
              shouldDisableDate,
              shouldDisableMonth,
              shouldDisableYear,
              hasFocus,
              onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
              gridLabelId,
              showDaysOutsideCurrentMonth,
              fixedWeekNumber,
              dayOfWeekFormatter,
              displayWeekNumber,
              components,
              componentsProps,
              slots,
              slotProps,
              loading,
              renderLoading
            }))]
          })
        })]
      }));
    });
    const buildWarning = (message, gravity = "warning") => {
      let alreadyWarned = false;
      const cleanMessage = Array.isArray(message) ? message.join("\n") : message;
      return () => {
        if (!alreadyWarned) {
          alreadyWarned = true;
          if (gravity === "error") {
            console.error(cleanMessage);
          } else {
            console.warn(cleanMessage);
          }
        }
      };
    };
    var dayjs_minExports = {};
    var dayjs_min = {
      get exports() {
        return dayjs_minExports;
      },
      set exports(v2) {
        dayjs_minExports = v2;
      }
    };
    (function(module2, exports2) {
      !function(t2, e2) {
        module2.exports = e2();
      }(commonjsGlobal, function() {
        var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s = "minute", u2 = "hour", a = "day", o = "week", f2 = "month", h2 = "quarter", c2 = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
          var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
          return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
        } }, m2 = function(t3, e3, n3) {
          var r3 = String(t3);
          return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
        }, v2 = { s: m2, z: function(t3) {
          var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i2 = n3 % 60;
          return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i2, 2, "0");
        }, m: function t3(e3, n3) {
          if (e3.date() < n3.date())
            return -t3(n3, e3);
          var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r3, f2), s2 = n3 - i2 < 0, u3 = e3.clone().add(r3 + (s2 ? -1 : 1), f2);
          return +(-(r3 + (n3 - i2) / (s2 ? i2 - u3 : u3 - i2)) || 0);
        }, a: function(t3) {
          return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
        }, p: function(t3) {
          return { M: f2, y: c2, w: o, d: a, D: d2, h: u2, m: s, s: i, ms: r2, Q: h2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t3) {
          return void 0 === t3;
        } }, g2 = "en", D2 = {};
        D2[g2] = M2;
        var p2 = function(t3) {
          return t3 instanceof _2;
        }, S2 = function t3(e3, n3, r3) {
          var i2;
          if (!e3)
            return g2;
          if ("string" == typeof e3) {
            var s2 = e3.toLowerCase();
            D2[s2] && (i2 = s2), n3 && (D2[s2] = n3, i2 = s2);
            var u3 = e3.split("-");
            if (!i2 && u3.length > 1)
              return t3(u3[0]);
          } else {
            var a2 = e3.name;
            D2[a2] = e3, i2 = a2;
          }
          return !r3 && i2 && (g2 = i2), i2 || !r3 && g2;
        }, w2 = function(t3, e3) {
          if (p2(t3))
            return t3.clone();
          var n3 = "object" == typeof e3 ? e3 : {};
          return n3.date = t3, n3.args = arguments, new _2(n3);
        }, O2 = v2;
        O2.l = S2, O2.i = p2, O2.w = function(t3, e3) {
          return w2(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _2 = function() {
          function M3(t3) {
            this.$L = S2(t3.locale, null, true), this.parse(t3);
          }
          var m3 = M3.prototype;
          return m3.parse = function(t3) {
            this.$d = function(t4) {
              var e3 = t4.date, n3 = t4.utc;
              if (null === e3)
                return new Date(NaN);
              if (O2.u(e3))
                return new Date();
              if (e3 instanceof Date)
                return new Date(e3);
              if ("string" == typeof e3 && !/Z$/i.test(e3)) {
                var r3 = e3.match($);
                if (r3) {
                  var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
                  return n3 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
                }
              }
              return new Date(e3);
            }(t3), this.$x = t3.x || {}, this.init();
          }, m3.init = function() {
            var t3 = this.$d;
            this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
          }, m3.$utils = function() {
            return O2;
          }, m3.isValid = function() {
            return !(this.$d.toString() === l2);
          }, m3.isSame = function(t3, e3) {
            var n3 = w2(t3);
            return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
          }, m3.isAfter = function(t3, e3) {
            return w2(t3) < this.startOf(e3);
          }, m3.isBefore = function(t3, e3) {
            return this.endOf(e3) < w2(t3);
          }, m3.$g = function(t3, e3, n3) {
            return O2.u(t3) ? this[e3] : this.set(n3, t3);
          }, m3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m3.valueOf = function() {
            return this.$d.getTime();
          }, m3.startOf = function(t3, e3) {
            var n3 = this, r3 = !!O2.u(e3) || e3, h3 = O2.p(t3), l3 = function(t4, e4) {
              var i2 = O2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
              return r3 ? i2 : i2.endOf(a);
            }, $2 = function(t4, e4) {
              return O2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
            }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
            switch (h3) {
              case c2:
                return r3 ? l3(1, 0) : l3(31, 11);
              case f2:
                return r3 ? l3(1, M4) : l3(0, M4 + 1);
              case o:
                var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
                return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
              case a:
              case d2:
                return $2(v3 + "Hours", 0);
              case u2:
                return $2(v3 + "Minutes", 1);
              case s:
                return $2(v3 + "Seconds", 2);
              case i:
                return $2(v3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m3.endOf = function(t3) {
            return this.startOf(t3, false);
          }, m3.$set = function(t3, e3) {
            var n3, o2 = O2.p(t3), h3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a] = h3 + "Date", n3[d2] = h3 + "Date", n3[f2] = h3 + "Month", n3[c2] = h3 + "FullYear", n3[u2] = h3 + "Hours", n3[s] = h3 + "Minutes", n3[i] = h3 + "Seconds", n3[r2] = h3 + "Milliseconds", n3)[o2], $2 = o2 === a ? this.$D + (e3 - this.$W) : e3;
            if (o2 === f2 || o2 === c2) {
              var y3 = this.clone().set(d2, 1);
              y3.$d[l3]($2), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
            } else
              l3 && this.$d[l3]($2);
            return this.init(), this;
          }, m3.set = function(t3, e3) {
            return this.clone().$set(t3, e3);
          }, m3.get = function(t3) {
            return this[O2.p(t3)]();
          }, m3.add = function(r3, h3) {
            var d3, l3 = this;
            r3 = Number(r3);
            var $2 = O2.p(h3), y3 = function(t3) {
              var e3 = w2(l3);
              return O2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
            };
            if ($2 === f2)
              return this.set(f2, this.$M + r3);
            if ($2 === c2)
              return this.set(c2, this.$y + r3);
            if ($2 === a)
              return y3(1);
            if ($2 === o)
              return y3(7);
            var M4 = (d3 = {}, d3[s] = e2, d3[u2] = n2, d3[i] = t2, d3)[$2] || 1, m4 = this.$d.getTime() + r3 * M4;
            return O2.w(m4, this);
          }, m3.subtract = function(t3, e3) {
            return this.add(-1 * t3, e3);
          }, m3.format = function(t3) {
            var e3 = this, n3 = this.$locale();
            if (!this.isValid())
              return n3.invalidDate || l2;
            var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O2.z(this), s2 = this.$H, u3 = this.$m, a2 = this.$M, o2 = n3.weekdays, f3 = n3.months, h3 = function(t4, n4, i3, s3) {
              return t4 && (t4[n4] || t4(e3, r3)) || i3[n4].slice(0, s3);
            }, c3 = function(t4) {
              return O2.s(s2 % 12 || 12, t4, "0");
            }, d3 = n3.meridiem || function(t4, e4, n4) {
              var r4 = t4 < 12 ? "AM" : "PM";
              return n4 ? r4.toLowerCase() : r4;
            }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O2.s(a2 + 1, 2, "0"), MMM: h3(n3.monthsShort, a2, f3, 3), MMMM: h3(f3, a2), D: this.$D, DD: O2.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n3.weekdaysMin, this.$W, o2, 2), ddd: h3(n3.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O2.s(s2, 2, "0"), h: c3(1), hh: c3(2), a: d3(s2, u3, true), A: d3(s2, u3, false), m: String(u3), mm: O2.s(u3, 2, "0"), s: String(this.$s), ss: O2.s(this.$s, 2, "0"), SSS: O2.s(this.$ms, 3, "0"), Z: i2 };
            return r3.replace(y2, function(t4, e4) {
              return e4 || $2[t4] || i2.replace(":", "");
            });
          }, m3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m3.diff = function(r3, d3, l3) {
            var $2, y3 = O2.p(d3), M4 = w2(r3), m4 = (M4.utcOffset() - this.utcOffset()) * e2, v3 = this - M4, g3 = O2.m(this, M4);
            return g3 = ($2 = {}, $2[c2] = g3 / 12, $2[f2] = g3, $2[h2] = g3 / 3, $2[o] = (v3 - m4) / 6048e5, $2[a] = (v3 - m4) / 864e5, $2[u2] = v3 / n2, $2[s] = v3 / e2, $2[i] = v3 / t2, $2)[y3] || v3, l3 ? g3 : O2.a(g3);
          }, m3.daysInMonth = function() {
            return this.endOf(f2).$D;
          }, m3.$locale = function() {
            return D2[this.$L];
          }, m3.locale = function(t3, e3) {
            if (!t3)
              return this.$L;
            var n3 = this.clone(), r3 = S2(t3, e3, true);
            return r3 && (n3.$L = r3), n3;
          }, m3.clone = function() {
            return O2.w(this.$d, this);
          }, m3.toDate = function() {
            return new Date(this.valueOf());
          }, m3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m3.toISOString = function() {
            return this.$d.toISOString();
          }, m3.toString = function() {
            return this.$d.toUTCString();
          }, M3;
        }(), T2 = _2.prototype;
        return w2.prototype = T2, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u2], ["$W", a], ["$M", f2], ["$y", c2], ["$D", d2]].forEach(function(t3) {
          T2[t3[1]] = function(e3) {
            return this.$g(e3, t3[0], t3[1]);
          };
        }), w2.extend = function(t3, e3) {
          return t3.$i || (t3(e3, _2, w2), t3.$i = true), w2;
        }, w2.locale = S2, w2.isDayjs = p2, w2.unix = function(t3) {
          return w2(1e3 * t3);
        }, w2.en = D2[g2], w2.Ls = D2, w2.p = {}, w2;
      });
    })(dayjs_min);
    const dayjs = dayjs_minExports;
    var weekOfYearExports = {};
    var weekOfYear$1 = {
      get exports() {
        return weekOfYearExports;
      },
      set exports(v2) {
        weekOfYearExports = v2;
      }
    };
    (function(module2, exports2) {
      !function(e2, t2) {
        module2.exports = t2();
      }(commonjsGlobal, function() {
        var e2 = "week", t2 = "year";
        return function(i, n2, r2) {
          var f2 = n2.prototype;
          f2.week = function(i2) {
            if (void 0 === i2 && (i2 = null), null !== i2)
              return this.add(7 * (i2 - this.week()), "day");
            var n3 = this.$locale().yearStart || 1;
            if (11 === this.month() && this.date() > 25) {
              var f3 = r2(this).startOf(t2).add(1, t2).date(n3), s = r2(this).endOf(e2);
              if (f3.isBefore(s))
                return 1;
            }
            var a = r2(this).startOf(t2).date(n3).startOf(e2).subtract(1, "millisecond"), o = this.diff(a, e2, true);
            return o < 0 ? r2(this).startOf("week").week() : Math.ceil(o);
          }, f2.weeks = function(e3) {
            return void 0 === e3 && (e3 = null), this.week(e3);
          };
        };
      });
    })(weekOfYear$1);
    var customParseFormatExports = {};
    var customParseFormat = {
      get exports() {
        return customParseFormatExports;
      },
      set exports(v2) {
        customParseFormatExports = v2;
      }
    };
    (function(module2, exports2) {
      !function(e2, t2) {
        module2.exports = t2();
      }(commonjsGlobal, function() {
        var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t2 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d\d/, r2 = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e3) {
          return (e3 = +e3) + (e3 > 68 ? 1900 : 2e3);
        };
        var a = function(e3) {
          return function(t3) {
            this[e3] = +t3;
          };
        }, f2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e3) {
          (this.zone || (this.zone = {})).offset = function(e4) {
            if (!e4)
              return 0;
            if ("Z" === e4)
              return 0;
            var t3 = e4.match(/([+-]|\d\d)/g), n3 = 60 * t3[1] + (+t3[2] || 0);
            return 0 === n3 ? 0 : "+" === t3[0] ? -n3 : n3;
          }(e3);
        }], h2 = function(e3) {
          var t3 = o[e3];
          return t3 && (t3.indexOf ? t3 : t3.s.concat(t3.f));
        }, u2 = function(e3, t3) {
          var n3, r3 = o.meridiem;
          if (r3) {
            for (var i2 = 1; i2 <= 24; i2 += 1)
              if (e3.indexOf(r3(i2, 0, t3)) > -1) {
                n3 = i2 > 12;
                break;
              }
          } else
            n3 = e3 === (t3 ? "pm" : "PM");
          return n3;
        }, d2 = { A: [i, function(e3) {
          this.afternoon = u2(e3, false);
        }], a: [i, function(e3) {
          this.afternoon = u2(e3, true);
        }], S: [/\d/, function(e3) {
          this.milliseconds = 100 * +e3;
        }], SS: [n2, function(e3) {
          this.milliseconds = 10 * +e3;
        }], SSS: [/\d{3}/, function(e3) {
          this.milliseconds = +e3;
        }], s: [r2, a("seconds")], ss: [r2, a("seconds")], m: [r2, a("minutes")], mm: [r2, a("minutes")], H: [r2, a("hours")], h: [r2, a("hours")], HH: [r2, a("hours")], hh: [r2, a("hours")], D: [r2, a("day")], DD: [n2, a("day")], Do: [i, function(e3) {
          var t3 = o.ordinal, n3 = e3.match(/\d+/);
          if (this.day = n3[0], t3)
            for (var r3 = 1; r3 <= 31; r3 += 1)
              t3(r3).replace(/\[|\]/g, "") === e3 && (this.day = r3);
        }], M: [r2, a("month")], MM: [n2, a("month")], MMM: [i, function(e3) {
          var t3 = h2("months"), n3 = (h2("monthsShort") || t3.map(function(e4) {
            return e4.slice(0, 3);
          })).indexOf(e3) + 1;
          if (n3 < 1)
            throw new Error();
          this.month = n3 % 12 || n3;
        }], MMMM: [i, function(e3) {
          var t3 = h2("months").indexOf(e3) + 1;
          if (t3 < 1)
            throw new Error();
          this.month = t3 % 12 || t3;
        }], Y: [/[+-]?\d+/, a("year")], YY: [n2, function(e3) {
          this.year = s(e3);
        }], YYYY: [/\d{4}/, a("year")], Z: f2, ZZ: f2 };
        function c2(n3) {
          var r3, i2;
          r3 = n3, i2 = o && o.formats;
          for (var s2 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t3, n4, r4) {
            var o2 = r4 && r4.toUpperCase();
            return n4 || i2[r4] || e2[r4] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t4, n5) {
              return t4 || n5.slice(1);
            });
          })).match(t2), a2 = s2.length, f3 = 0; f3 < a2; f3 += 1) {
            var h3 = s2[f3], u3 = d2[h3], c3 = u3 && u3[0], l2 = u3 && u3[1];
            s2[f3] = l2 ? { regex: c3, parser: l2 } : h3.replace(/^\[|\]$/g, "");
          }
          return function(e3) {
            for (var t3 = {}, n4 = 0, r4 = 0; n4 < a2; n4 += 1) {
              var i3 = s2[n4];
              if ("string" == typeof i3)
                r4 += i3.length;
              else {
                var o2 = i3.regex, f4 = i3.parser, h4 = e3.slice(r4), u4 = o2.exec(h4)[0];
                f4.call(t3, u4), e3 = e3.replace(u4, "");
              }
            }
            return function(e4) {
              var t4 = e4.afternoon;
              if (void 0 !== t4) {
                var n5 = e4.hours;
                t4 ? n5 < 12 && (e4.hours += 12) : 12 === n5 && (e4.hours = 0), delete e4.afternoon;
              }
            }(t3), t3;
          };
        }
        return function(e3, t3, n3) {
          n3.p.customParseFormat = true, e3 && e3.parseTwoDigitYear && (s = e3.parseTwoDigitYear);
          var r3 = t3.prototype, i2 = r3.parse;
          r3.parse = function(e4) {
            var t4 = e4.date, r4 = e4.utc, s2 = e4.args;
            this.$u = r4;
            var a2 = s2[1];
            if ("string" == typeof a2) {
              var f3 = true === s2[2], h3 = true === s2[3], u3 = f3 || h3, d3 = s2[2];
              h3 && (d3 = s2[2]), o = this.$locale(), !f3 && d3 && (o = n3.Ls[d3]), this.$d = function(e5, t5, n4) {
                try {
                  if (["x", "X"].indexOf(t5) > -1)
                    return new Date(("X" === t5 ? 1e3 : 1) * e5);
                  var r5 = c2(t5)(e5), i3 = r5.year, o2 = r5.month, s3 = r5.day, a3 = r5.hours, f4 = r5.minutes, h4 = r5.seconds, u4 = r5.milliseconds, d4 = r5.zone, l3 = new Date(), m3 = s3 || (i3 || o2 ? 1 : l3.getDate()), M3 = i3 || l3.getFullYear(), Y2 = 0;
                  i3 && !o2 || (Y2 = o2 > 0 ? o2 - 1 : l3.getMonth());
                  var p2 = a3 || 0, v2 = f4 || 0, D2 = h4 || 0, g2 = u4 || 0;
                  return d4 ? new Date(Date.UTC(M3, Y2, m3, p2, v2, D2, g2 + 60 * d4.offset * 1e3)) : n4 ? new Date(Date.UTC(M3, Y2, m3, p2, v2, D2, g2)) : new Date(M3, Y2, m3, p2, v2, D2, g2);
                } catch (e6) {
                  return new Date("");
                }
              }(t4, a2, r4), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t4 != this.format(a2) && (this.$d = new Date("")), o = {};
            } else if (a2 instanceof Array)
              for (var l2 = a2.length, m2 = 1; m2 <= l2; m2 += 1) {
                s2[1] = a2[m2 - 1];
                var M2 = n3.apply(this, s2);
                if (M2.isValid()) {
                  this.$d = M2.$d, this.$L = M2.$L, this.init();
                  break;
                }
                m2 === l2 && (this.$d = new Date(""));
              }
            else
              i2.call(this, e4);
          };
        };
      });
    })(customParseFormat);
    const customParseFormatPlugin = customParseFormatExports;
    var localizedFormatExports = {};
    var localizedFormat = {
      get exports() {
        return localizedFormatExports;
      },
      set exports(v2) {
        localizedFormatExports = v2;
      }
    };
    (function(module2, exports2) {
      !function(e2, t2) {
        module2.exports = t2();
      }(commonjsGlobal, function() {
        var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
        return function(t2, o, n2) {
          var r2 = o.prototype, i = r2.format;
          n2.en.formats = e2, r2.format = function(t3) {
            void 0 === t3 && (t3 = "YYYY-MM-DDTHH:mm:ssZ");
            var o2 = this.$locale().formats, n3 = function(t4, o3) {
              return t4.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t5, n4, r3) {
                var i2 = r3 && r3.toUpperCase();
                return n4 || o3[r3] || e2[r3] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t6, o4) {
                  return t6 || o4.slice(1);
                });
              });
            }(t3, void 0 === o2 ? {} : o2);
            return i.call(this, n3);
          };
        };
      });
    })(localizedFormat);
    const localizedFormatPlugin = localizedFormatExports;
    var isBetweenExports = {};
    var isBetween$1 = {
      get exports() {
        return isBetweenExports;
      },
      set exports(v2) {
        isBetweenExports = v2;
      }
    };
    (function(module2, exports2) {
      !function(e2, i) {
        module2.exports = i();
      }(commonjsGlobal, function() {
        return function(e2, i, t2) {
          i.prototype.isBetween = function(e3, i2, s, f2) {
            var n2 = t2(e3), o = t2(i2), r2 = "(" === (f2 = f2 || "()")[0], u2 = ")" === f2[1];
            return (r2 ? this.isAfter(n2, s) : !this.isBefore(n2, s)) && (u2 ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r2 ? this.isBefore(n2, s) : !this.isAfter(n2, s)) && (u2 ? this.isAfter(o, s) : !this.isBefore(o, s));
          };
        };
      });
    })(isBetween$1);
    const isBetweenPlugin = isBetweenExports;
    dayjs.extend(customParseFormatPlugin);
    dayjs.extend(localizedFormatPlugin);
    dayjs.extend(isBetweenPlugin);
    var withLocale = function(dayjs2, locale2) {
      return !locale2 ? dayjs2 : function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return dayjs2.apply(void 0, args).locale(locale2);
      };
    };
    var defaultFormats = {
      normalDateWithWeekday: "ddd, MMM D",
      normalDate: "D MMMM",
      shortDate: "MMM D",
      monthAndDate: "MMMM D",
      dayOfMonth: "D",
      year: "YYYY",
      month: "MMMM",
      monthShort: "MMM",
      monthAndYear: "MMMM YYYY",
      weekday: "dddd",
      weekdayShort: "ddd",
      minutes: "mm",
      hours12h: "hh",
      hours24h: "HH",
      seconds: "ss",
      fullTime: "LT",
      fullTime12h: "hh:mm A",
      fullTime24h: "HH:mm",
      fullDate: "ll",
      fullDateWithWeekday: "dddd, LL",
      fullDateTime: "lll",
      fullDateTime12h: "ll hh:mm A",
      fullDateTime24h: "ll HH:mm",
      keyboardDate: "L",
      keyboardDateTime: "L LT",
      keyboardDateTime12h: "L hh:mm A",
      keyboardDateTime24h: "L HH:mm"
    };
    var DayjsUtils = (
      /** @class */
      function() {
        function DayjsUtils2(_a) {
          var _this = this;
          var _b = _a === void 0 ? {} : _a, locale2 = _b.locale, formats = _b.formats, instance = _b.instance;
          this.lib = "dayjs";
          this.is12HourCycleInCurrentLocale = function() {
            var _a2, _b2;
            return /A|a/.test((_b2 = (_a2 = _this.rawDayJsInstance.Ls[_this.locale || "en"]) === null || _a2 === void 0 ? void 0 : _a2.formats) === null || _b2 === void 0 ? void 0 : _b2.LT);
          };
          this.getCurrentLocaleCode = function() {
            return _this.locale || "en";
          };
          this.getFormatHelperText = function(format2) {
            var localFormattingTokens2 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;
            return format2.match(localFormattingTokens2).map(function(token2) {
              var _a2, _b2;
              var firstCharacter = token2[0];
              if (firstCharacter === "L") {
                return (_b2 = (_a2 = _this.rawDayJsInstance.Ls[_this.locale || "en"]) === null || _a2 === void 0 ? void 0 : _a2.formats[token2]) !== null && _b2 !== void 0 ? _b2 : token2;
              }
              return token2;
            }).join("").replace(/a/gi, "(a|p)m").toLocaleLowerCase();
          };
          this.parseISO = function(isoString) {
            return _this.dayjs(isoString);
          };
          this.toISO = function(value) {
            return value.toISOString();
          };
          this.parse = function(value, format2) {
            if (value === "") {
              return null;
            }
            return _this.dayjs(value, format2, _this.locale, true);
          };
          this.date = function(value) {
            if (value === null) {
              return null;
            }
            return _this.dayjs(value);
          };
          this.toJsDate = function(value) {
            return value.toDate();
          };
          this.isValid = function(value) {
            return _this.dayjs(value).isValid();
          };
          this.isNull = function(date) {
            return date === null;
          };
          this.getDiff = function(date, comparing, units) {
            return date.diff(comparing, units);
          };
          this.isAfter = function(date, value) {
            return date.isAfter(value);
          };
          this.isBefore = function(date, value) {
            return date.isBefore(value);
          };
          this.isAfterDay = function(date, value) {
            return date.isAfter(value, "day");
          };
          this.isBeforeDay = function(date, value) {
            return date.isBefore(value, "day");
          };
          this.isBeforeYear = function(date, value) {
            return date.isBefore(value, "year");
          };
          this.isAfterYear = function(date, value) {
            return date.isAfter(value, "year");
          };
          this.startOfDay = function(date) {
            return date.startOf("day");
          };
          this.endOfDay = function(date) {
            return date.endOf("day");
          };
          this.format = function(date, formatKey) {
            return _this.formatByString(date, _this.formats[formatKey]);
          };
          this.formatByString = function(date, formatString) {
            return _this.dayjs(date).format(formatString);
          };
          this.formatNumber = function(numberToFormat) {
            return numberToFormat;
          };
          this.getHours = function(date) {
            return date.hour();
          };
          this.addSeconds = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "second") : date.add(count, "second");
          };
          this.addMinutes = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "minute") : date.add(count, "minute");
          };
          this.addHours = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "hour") : date.add(count, "hour");
          };
          this.addDays = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "day") : date.add(count, "day");
          };
          this.addWeeks = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "week") : date.add(count, "week");
          };
          this.addMonths = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "month") : date.add(count, "month");
          };
          this.addYears = function(date, count) {
            return count < 0 ? date.subtract(Math.abs(count), "year") : date.add(count, "year");
          };
          this.setMonth = function(date, count) {
            return date.set("month", count);
          };
          this.setHours = function(date, count) {
            return date.set("hour", count);
          };
          this.getMinutes = function(date) {
            return date.minute();
          };
          this.setMinutes = function(date, count) {
            return date.set("minute", count);
          };
          this.getSeconds = function(date) {
            return date.second();
          };
          this.setSeconds = function(date, count) {
            return date.set("second", count);
          };
          this.getMonth = function(date) {
            return date.month();
          };
          this.getDate = function(date) {
            return date.date();
          };
          this.setDate = function(date, count) {
            return date.set("date", count);
          };
          this.getDaysInMonth = function(date) {
            return date.daysInMonth();
          };
          this.isSameDay = function(date, comparing) {
            return date.isSame(comparing, "day");
          };
          this.isSameMonth = function(date, comparing) {
            return date.isSame(comparing, "month");
          };
          this.isSameYear = function(date, comparing) {
            return date.isSame(comparing, "year");
          };
          this.isSameHour = function(date, comparing) {
            return date.isSame(comparing, "hour");
          };
          this.getMeridiemText = function(ampm) {
            return ampm === "am" ? "AM" : "PM";
          };
          this.startOfYear = function(date) {
            return date.startOf("year");
          };
          this.endOfYear = function(date) {
            return date.endOf("year");
          };
          this.startOfMonth = function(date) {
            return date.startOf("month");
          };
          this.endOfMonth = function(date) {
            return date.endOf("month");
          };
          this.startOfWeek = function(date) {
            return date.startOf("week");
          };
          this.endOfWeek = function(date) {
            return date.endOf("week");
          };
          this.getNextMonth = function(date) {
            return date.add(1, "month");
          };
          this.getPreviousMonth = function(date) {
            return date.subtract(1, "month");
          };
          this.getMonthArray = function(date) {
            var firstMonth = date.startOf("year");
            var monthArray = [firstMonth];
            while (monthArray.length < 12) {
              var prevMonth = monthArray[monthArray.length - 1];
              monthArray.push(_this.getNextMonth(prevMonth));
            }
            return monthArray;
          };
          this.getYear = function(date) {
            return date.year();
          };
          this.setYear = function(date, year) {
            return date.set("year", year);
          };
          this.mergeDateAndTime = function(date, time) {
            return date.hour(time.hour()).minute(time.minute()).second(time.second());
          };
          this.getWeekdays = function() {
            var start = _this.dayjs().startOf("week");
            return [0, 1, 2, 3, 4, 5, 6].map(function(diff2) {
              return _this.formatByString(start.add(diff2, "day"), "dd");
            });
          };
          this.isEqual = function(value, comparing) {
            if (value === null && comparing === null) {
              return true;
            }
            return _this.dayjs(value).isSame(comparing);
          };
          this.getWeekArray = function(date) {
            var start = _this.dayjs(date).startOf("month").startOf("week");
            var end2 = _this.dayjs(date).endOf("month").endOf("week");
            var count = 0;
            var current = start;
            var nestedWeeks = [];
            while (current.isBefore(end2)) {
              var weekNumber = Math.floor(count / 7);
              nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
              nestedWeeks[weekNumber].push(current);
              current = current.add(1, "day");
              count += 1;
            }
            return nestedWeeks;
          };
          this.getYearRange = function(start, end2) {
            var startDate = _this.dayjs(start).startOf("year");
            var endDate = _this.dayjs(end2).endOf("year");
            var years2 = [];
            var current = startDate;
            while (current.isBefore(endDate)) {
              years2.push(current);
              current = current.add(1, "year");
            }
            return years2;
          };
          this.isWithinRange = function(date, _a2) {
            var start = _a2[0], end2 = _a2[1];
            return date.isBetween(start, end2, null, "[]");
          };
          this.rawDayJsInstance = instance || dayjs;
          this.dayjs = withLocale(this.rawDayJsInstance, locale2);
          this.locale = locale2;
          this.formats = Object.assign({}, defaultFormats, formats);
        }
        return DayjsUtils2;
      }()
    );
    const localeNotFoundWarning = buildWarning(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale with `require('dayjs/locale/{localeUsed}')`", "fallback on English locale"]);
    const formatTokenMap = {
      // Year
      YY: "year",
      YYYY: "year",
      // Month
      M: "month",
      MM: "month",
      MMM: {
        sectionType: "month",
        contentType: "letter"
      },
      MMMM: {
        sectionType: "month",
        contentType: "letter"
      },
      // Day of the month
      D: "day",
      DD: "day",
      Do: "day",
      // Day of the week
      d: "weekDay",
      dd: {
        sectionType: "weekDay",
        contentType: "letter"
      },
      ddd: {
        sectionType: "weekDay",
        contentType: "letter"
      },
      dddd: {
        sectionType: "weekDay",
        contentType: "letter"
      },
      // Meridiem
      A: "meridiem",
      a: "meridiem",
      // Hours
      H: "hours",
      HH: "hours",
      h: "hours",
      hh: "hours",
      // Minutes
      m: "minutes",
      mm: "minutes",
      // Seconds
      s: "seconds",
      ss: "seconds"
    };
    class AdapterDayjs extends DayjsUtils {
      constructor(options) {
        super(options);
        this.isMUIAdapter = true;
        this.formatTokenMap = formatTokenMap;
        this.escapedCharacters = {
          start: "[",
          end: "]"
        };
        this.getLocaleFormats = () => {
          var _this$rawDayJsInstanc;
          const locales2 = (_this$rawDayJsInstanc = this.rawDayJsInstance.Ls) != null ? _this$rawDayJsInstanc : dayjs.Ls;
          const locale2 = this.locale || "en";
          let localeObject = locales2[locale2];
          if (localeObject === void 0) {
            localeNotFoundWarning();
            localeObject = locales2.en;
          }
          return localeObject.formats;
        };
        this.is12HourCycleInCurrentLocale = () => {
          return /A|a/.test(this.getLocaleFormats().LT || "");
        };
        this.expandFormat = (format2) => {
          const localeFormats = this.getLocaleFormats();
          const t2 = (formatBis) => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_2, a, b2) => a || b2.slice(1));
          return format2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_2, a, b2) => {
            const B2 = b2 && b2.toUpperCase();
            return a || localeFormats[b2] || t2(localeFormats[B2]);
          });
        };
        this.getFormatHelperText = (format2) => {
          return this.expandFormat(format2).replace(/a/gi, "(a|p)m").toLocaleLowerCase();
        };
        this.getWeekNumber = (date) => {
          return date.week();
        };
        dayjs.extend(weekOfYearExports);
      }
    }
    const App$1 = "";
    const ShoppingCartFunc = reactExports.createContext();
    const ShoppingCartProvider = (props) => {
      const [cartProducts, setCartProducts] = reactExports.useState([]);
      const [globalPrices, setGlobalPrices] = reactExports.useState(0);
      const [kitAmount, setKitAmount] = reactExports.useState(1);
      let total = 0;
      cartProducts.map((product) => total = total + product.qty * product.Price);
      const funcs = {
        addProduct: (product) => {
          const doesExist = cartProducts.find(
            (item) => {
              var _a, _b;
              return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID;
            }
          );
          if (doesExist) {
            setCartProducts(
              cartProducts.map(
                (item) => {
                  var _a, _b;
                  return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID ? {
                    ...doesExist,
                    qty: doesExist.qty + 1,
                    varQty: doesExist.varQty + 1
                  } : item;
                }
              )
            );
          } else {
            setCartProducts([
              ...cartProducts,
              {
                ...product,
                qty: 1,
                varQty: 1,
                productName: product.ProductName,
                VariationName: product.VariationName,
                VariationID: product.VariationID,
                productBaksetUnqKey: `${product.ProductIndex} / ${product.VariationID}`
              }
            ]);
          }
        },
        //<== REDUCE AMOUNT FROM CARD CART FUNCTIONALITY FEATURE
        //TODO Examine, if the application still has the reduction bug (removeing all from the same kind despite the variations. Or removing all the ones that have no variation)
        reduceProductAmount: (product) => {
          const doesExist = cartProducts.find(
            (item) => {
              var _a, _b;
              return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID && item.productBaksetUnqKey === product.productBaksetUnqKey;
            }
          );
          if (doesExist.qty === 1 && doesExist.varQty === 1) {
            setCartProducts(
              cartProducts.filter(
                (item) => {
                  var _a, _b;
                  return (
                    //Code I removed on last deb
                    // item.product.ProductName !== product.product.ProductName &&
                    // item.product.ProductIndex !== product.product.ProductIndex &&
                    ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) !== ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID !== product.VariationID
                  );
                }
              )
            );
          } else {
            setCartProducts(
              cartProducts.map(
                (item) => {
                  var _a, _b;
                  return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID ? {
                    ...doesExist,
                    qty: doesExist.qty - 1,
                    varQty: doesExist.varQty - 1
                  } : item;
                }
              )
            );
          }
        },
        increaseProductAmount: (product) => {
          const doesExist = cartProducts.find(
            (item) => {
              var _a, _b;
              return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID;
            }
          );
          setCartProducts(
            cartProducts.map(
              (item) => {
                var _a, _b;
                return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID ? {
                  ...doesExist,
                  qty: doesExist.qty + 1,
                  varQty: doesExist.varQty + 1
                } : item;
              }
            )
          );
        },
        //<== REMOVE FROM CART FUNCTIONALITY FEATURE
        removeProduct: (product) => {
          const doesExist = cartProducts.find(
            (item) => {
              var _a, _b;
              return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID && item.productBaksetUnqKey === product.productBaksetUnqKey;
            }
          );
          if (doesExist.qty === 1) {
            setCartProducts(
              cartProducts.filter(
                (item) => {
                  var _a, _b;
                  return (
                    //Code I removed on last debug
                    // item.product.ProductName !== product.product.ProductName &&
                    item.ProductIndex !== product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) !== ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase())
                  );
                }
              )
            );
          } else {
            setCartProducts(
              cartProducts.map(
                (item) => {
                  var _a, _b;
                  return item.ProductName === product.ProductName && item.ProductIndex === product.ProductIndex && ((_a = item.VariationName) == null ? void 0 : _a.toLowerCase()) === ((_b = product.VariationName) == null ? void 0 : _b.toLowerCase()) && item.VariationID === product.VariationID && item.productBaksetUnqKey === product.productBaksetUnqKey ? {
                    ...doesExist,
                    qty: doesExist.qty = 0,
                    varQty: doesExist.varQty = 0
                  } : item;
                }
              )
            );
          }
        }
        // //The function that handles the page transfer, when data needs to be stored in the session storage
        // handlePageTransfer: () => {
        //   const cartProductsFiltered = cartProducts.filter(
        //     (product) => product.qty > 0
        //   );
        //   const cartProductsJSON = JSON.stringify(cartProductsFiltered);
        //   sessionStorage.setItem("cartProducts", cartProductsJSON);
        //   console.log(sessionStorage);
        // },
      };
      return /* @__PURE__ */ jsx(
        ShoppingCartFunc.Provider,
        {
          value: {
            cartProducts,
            funcs,
            setCartProducts,
            globalPrices,
            setGlobalPrices,
            kitAmount,
            setKitAmount,
            total
          },
          children: props.children
        }
      );
    };
    const ContactsInformationFunc = reactExports.createContext();
    const ContactInfoContProvider = (props) => {
      function reducer(state, action) {
        switch (action.type) {
          case "UPDATE_NAME":
            return { ...state, name: action.payload };
          case "UPDATE_LASTNAME":
            return { ...state, lastName: action.payload };
          case "UPDATE_EMAIL":
            return { ...state, email: action.payload };
          case "UPDATE_PHONE":
            return { ...state, phone: action.payload };
          case "UPDATE_STREET":
            return { ...state, street: action.payload };
          case "UPDATE_HOUSENUMBER":
            return { ...state, houseNumber: action.payload };
          case "UPDATE_POSTNUMBER":
            return { ...state, postNumber: action.payload };
          case "UPDATE_TOWN":
            return { ...state, town: action.payload };
          case "UPDATE_DELIVERYDATE":
            return { ...state, deliveryDate: action.payload };
          case "UPDATE_NOTES":
            return { ...state, notes: action.payload };
          default:
            return state;
        }
      }
      const formInitialState = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        houseNumber: "",
        postNumber: "",
        town: "",
        deliveryDate: "",
        notes: ""
      };
      const [contactInfoState, dispatch] = reactExports.useReducer(reducer, formInitialState);
      const todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + 14);
      const [value, setValue] = reactExports.useState(dayjs(todayDate));
      const getContactInfoFuncs = {
        handleNameChange: (e2) => {
          dispatch({ type: "UPDATE_NAME", payload: e2.target.value });
        },
        handleLastNameChange: (e2) => {
          dispatch({ type: "UPDATE_LASTNAME", payload: e2.target.value });
        },
        handleEmailChange: (e2) => {
          dispatch({ type: "UPDATE_EMAIL", payload: e2.target.value });
        },
        handlePhoneChange: (e2) => {
          dispatch({ type: "UPDATE_PHONE", payload: e2.target.value });
        },
        handleStreetChange: (e2) => {
          dispatch({ type: "UPDATE_STREET", payload: e2.target.value });
        },
        handleHouseNumberChange: (e2) => {
          dispatch({ type: "UPDATE_HOUSENUMBER", payload: e2.target.value });
        },
        handlePostNumberChange: (e2) => {
          dispatch({ type: "UPDATE_POSTNUMBER", payload: e2.target.value });
        },
        handleTownChange: (e2) => {
          dispatch({ type: "UPDATE_TOWN", payload: e2.target.value });
        },
        handleNotesChange: (e2) => {
          dispatch({ type: "UPDATE_NOTES", payload: e2.target.value });
        },
        handleDeliveryDateChange: (e2) => {
          dispatch({
            type: "UPDATE_DELIVERYDATE",
            payload: value.toString()
          });
        }
      };
      return /* @__PURE__ */ jsx(
        ContactsInformationFunc.Provider,
        {
          value: {
            reducer,
            formInitialState,
            contactInfoState,
            dispatch,
            getContactInfoFuncs,
            value,
            setValue
          },
          children: props.children
        }
      );
    };
    function HeaderBar() {
      return /* @__PURE__ */ jsx("header", { className: "application-header-bar", children: /* @__PURE__ */ jsxs("div", { className: "application-header-bar-inner bg-primary-color", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "application-header-bar-company-logo",
            src: "https://cdn.shopify.com/s/files/1/0444/6932/1894/files/Rasmines_eBits_Logo_small_f5522fd4-6199-4817-8b3c-fe2b15dab369_130x@2x.png?v=1661704331",
            alt: "Company logo"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "application-header-bar-empty-side" })
      ] }) });
    }
    function ButtonsHolder(props) {
      const navigate = useNavigate();
      const { handleTransfer, title, backBtn } = props;
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "buttons-holder", children: /* @__PURE__ */ jsxs("div", { className: "buttons-holder-inner", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btn-holder-back text-GlobalBtnsTxt font-semibold mx-5",
            onClick: () => navigate(-1),
            children: "< Back"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btn-holder-next bg-primary-color rounded-sm text-GlobalBtnsTxt font-normal mx-5",
            onClick: handleTransfer,
            children: title
          }
        )
      ] }) }) });
    }
    function KitReceiptBottomSection() {
      const { kitAmount, total } = reactExports.useContext(ShoppingCartFunc);
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-total text-TextMid text-primary-color mt-2", children: "Total" }) }),
        /* @__PURE__ */ jsx("div", { className: "kit-receipt-bottom-price-details-holder mx-6 text-TextSmall", children: /* @__PURE__ */ jsx("p", { className: "kit-price-details text-txt-grey-color text- ProductTitleMedium", children: kitAmount != 0 ? `${kitAmount}  x  ${total.toFixed(2)}` : 0 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center ml-12", children: [
          /* @__PURE__ */ jsx("p", { className: "kit-price-details-total-price ReceiptPriceL text-TextXL text-primary-color -mb-6", children: kitAmount != 0 ? (kitAmount * total).toFixed(2) : 0 }),
          /* @__PURE__ */ jsx("p", { className: "text-primary-color font-bold text-ProductTitleSmall mx-8\r\n                   px-4 py-2 bg-white border-white border-slate-300 rounded-xl\r\n                  shadow-xl focus:outline-none ml-10 mt-4", children: "DKK." })
        ] })
      ] });
    }
    function ownKeys$1(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread2$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _typeof$1(obj) {
      "@babel/helpers - typeof";
      return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof$1(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _defineProperty$1(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
    }
    function _toConsumableArray$1(arr) {
      return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
    }
    function _arrayWithoutHoles$1(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$1(arr);
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray$1(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray$1(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray$1(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor)
        n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$1(o, minLen);
    }
    function _arrayLikeToArray$1(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread$1() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var noop = function noop2() {
    };
    var _WINDOW = {};
    var _DOCUMENT = {};
    var _MUTATION_OBSERVER = null;
    var _PERFORMANCE = {
      mark: noop,
      measure: noop
    };
    try {
      if (typeof window !== "undefined")
        _WINDOW = window;
      if (typeof document !== "undefined")
        _DOCUMENT = document;
      if (typeof MutationObserver !== "undefined")
        _MUTATION_OBSERVER = MutationObserver;
      if (typeof performance !== "undefined")
        _PERFORMANCE = performance;
    } catch (e2) {
    }
    var _ref = _WINDOW.navigator || {}, _ref$userAgent = _ref.userAgent, userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var MUTATION_OBSERVER = _MUTATION_OBSERVER;
    var PERFORMANCE = _PERFORMANCE;
    !!WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
    var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
    var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;
    var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
    var UNITS_IN_GRID = 16;
    var DEFAULT_CSS_PREFIX = "fa";
    var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
    var DATA_FA_I2SVG = "data-fa-i2svg";
    var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
    var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
    var DATA_PREFIX = "data-prefix";
    var DATA_ICON = "data-icon";
    var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
    var MUTATION_APPROACH_ASYNC = "async";
    var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
    var PRODUCTION$1 = function() {
      try {
        return true;
      } catch (e2) {
        return false;
      }
    }();
    var FAMILY_CLASSIC = "classic";
    var FAMILY_SHARP = "sharp";
    var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
    function familyProxy(obj) {
      return new Proxy(obj, {
        get: function get2(target, prop) {
          return prop in target ? target[prop] : target[FAMILY_CLASSIC];
        }
      });
    }
    var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
      "fa": "solid",
      "fas": "solid",
      "fa-solid": "solid",
      "far": "regular",
      "fa-regular": "regular",
      "fal": "light",
      "fa-light": "light",
      "fat": "thin",
      "fa-thin": "thin",
      "fad": "duotone",
      "fa-duotone": "duotone",
      "fab": "brands",
      "fa-brands": "brands",
      "fak": "kit",
      "fa-kit": "kit"
    }), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
      "fa": "solid",
      "fass": "solid",
      "fa-solid": "solid",
      "fasr": "regular",
      "fa-regular": "regular",
      "fasl": "light",
      "fa-light": "light"
    }), _familyProxy));
    var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
      "solid": "fas",
      "regular": "far",
      "light": "fal",
      "thin": "fat",
      "duotone": "fad",
      "brands": "fab",
      "kit": "fak"
    }), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
      "solid": "fass",
      "regular": "fasr",
      "light": "fasl"
    }), _familyProxy2));
    var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
      "fab": "fa-brands",
      "fad": "fa-duotone",
      "fak": "fa-kit",
      "fal": "fa-light",
      "far": "fa-regular",
      "fas": "fa-solid",
      "fat": "fa-thin"
    }), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
      "fass": "fa-solid",
      "fasr": "fa-regular",
      "fasl": "fa-light"
    }), _familyProxy3));
    var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    }), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl"
    }), _familyProxy4));
    var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/;
    var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
    var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
    var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
      "900": "fas",
      "400": "far",
      "normal": "far",
      "300": "fal",
      "100": "fat"
    }), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
      "900": "fass",
      "400": "fasr",
      "300": "fasl"
    }), _familyProxy5));
    var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
    var DUOTONE_CLASSES = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    };
    var prefixes = /* @__PURE__ */ new Set();
    Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
    Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
    var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray$1(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n2) {
      return "".concat(n2, "x");
    })).concat(oneToTwenty.map(function(n2) {
      return "w-".concat(n2);
    }));
    var initial = WINDOW.FontAwesomeConfig || {};
    function getAttrConfig(attr) {
      var element = DOCUMENT.querySelector("script[" + attr + "]");
      if (element) {
        return element.getAttribute(attr);
      }
    }
    function coerce(val) {
      if (val === "")
        return true;
      if (val === "false")
        return false;
      if (val === "true")
        return true;
      return val;
    }
    if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
      var attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
      attrs.forEach(function(_ref2) {
        var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
        var val = coerce(getAttrConfig(attr));
        if (val !== void 0 && val !== null) {
          initial[key] = val;
        }
      });
    }
    var _default = {
      styleDefault: "solid",
      familyDefault: "classic",
      cssPrefix: DEFAULT_CSS_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: true,
      autoAddCss: true,
      autoA11y: true,
      searchPseudoElements: false,
      observeMutations: true,
      mutateApproach: "async",
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true
    };
    if (initial.familyPrefix) {
      initial.cssPrefix = initial.familyPrefix;
    }
    var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);
    if (!_config.autoReplaceSvg)
      _config.observeMutations = false;
    var config = {};
    Object.keys(_default).forEach(function(key) {
      Object.defineProperty(config, key, {
        enumerable: true,
        set: function set2(val) {
          _config[key] = val;
          _onChangeCb.forEach(function(cb2) {
            return cb2(config);
          });
        },
        get: function get2() {
          return _config[key];
        }
      });
    });
    Object.defineProperty(config, "familyPrefix", {
      enumerable: true,
      set: function set2(val) {
        _config.cssPrefix = val;
        _onChangeCb.forEach(function(cb2) {
          return cb2(config);
        });
      },
      get: function get2() {
        return _config.cssPrefix;
      }
    });
    WINDOW.FontAwesomeConfig = config;
    var _onChangeCb = [];
    function onChange(cb2) {
      _onChangeCb.push(cb2);
      return function() {
        _onChangeCb.splice(_onChangeCb.indexOf(cb2), 1);
      };
    }
    var d = UNITS_IN_GRID;
    var meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false
    };
    function insertCss(css2) {
      if (!css2 || !IS_DOM) {
        return;
      }
      var style2 = DOCUMENT.createElement("style");
      style2.setAttribute("type", "text/css");
      style2.innerHTML = css2;
      var headChildren = DOCUMENT.head.childNodes;
      var beforeChild = null;
      for (var i = headChildren.length - 1; i > -1; i--) {
        var child = headChildren[i];
        var tagName = (child.tagName || "").toUpperCase();
        if (["STYLE", "LINK"].indexOf(tagName) > -1) {
          beforeChild = child;
        }
      }
      DOCUMENT.head.insertBefore(style2, beforeChild);
      return css2;
    }
    var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function nextUniqueId() {
      var size = 12;
      var id2 = "";
      while (size-- > 0) {
        id2 += idPool[Math.random() * 62 | 0];
      }
      return id2;
    }
    function toArray$1(obj) {
      var array = [];
      for (var i = (obj || []).length >>> 0; i--; ) {
        array[i] = obj[i];
      }
      return array;
    }
    function classArray(node2) {
      if (node2.classList) {
        return toArray$1(node2.classList);
      } else {
        return (node2.getAttribute("class") || "").split(" ").filter(function(i) {
          return i;
        });
      }
    }
    function htmlEscape(str) {
      return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function joinAttributes(attributes) {
      return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
        return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
      }, "").trim();
    }
    function joinStyles(styles2) {
      return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
        return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
      }, "");
    }
    function transformIsMeaningful(transform) {
      return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
    }
    function transformForSvg(_ref2) {
      var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      return {
        outer,
        inner,
        path
      };
    }
    function transformForCss(_ref2) {
      var transform = _ref2.transform, _ref2$width = _ref2.width, width2 = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height2 = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
      var val = "";
      if (startCentered && IS_IE) {
        val += "translate(".concat(transform.x / d - width2 / 2, "em, ").concat(transform.y / d - height2 / 2, "em) ");
      } else if (startCentered) {
        val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
      } else {
        val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
      }
      val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
      val += "rotate(".concat(transform.rotate, "deg) ");
      return val;
    }
    var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
    function css() {
      var dcp = DEFAULT_CSS_PREFIX;
      var drc = DEFAULT_REPLACEMENT_CLASS;
      var fp = config.cssPrefix;
      var rc2 = config.replacementClass;
      var s = baseStyles;
      if (fp !== dcp || rc2 !== drc) {
        var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
        var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
        var rPatt = new RegExp("\\.".concat(drc), "g");
        s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc2));
      }
      return s;
    }
    var _cssInserted = false;
    function ensureCss() {
      if (config.autoAddCss && !_cssInserted) {
        insertCss(css());
        _cssInserted = true;
      }
    }
    var InjectCSS = {
      mixout: function mixout() {
        return {
          dom: {
            css,
            insertCss: ensureCss
          }
        };
      },
      hooks: function hooks2() {
        return {
          beforeDOMElementCreation: function beforeDOMElementCreation() {
            ensureCss();
          },
          beforeI2svg: function beforeI2svg() {
            ensureCss();
          }
        };
      }
    };
    var w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER])
      w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles)
      w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks)
      w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims)
      w[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w[NAMESPACE_IDENTIFIER];
    var functions = [];
    var listener = function listener2() {
      DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
      loaded = 1;
      functions.map(function(fn) {
        return fn();
      });
    };
    var loaded = false;
    if (IS_DOM) {
      loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
      if (!loaded)
        DOCUMENT.addEventListener("DOMContentLoaded", listener);
    }
    function domready(fn) {
      if (!IS_DOM)
        return;
      loaded ? setTimeout(fn, 0) : functions.push(fn);
    }
    function toHtml(abstractNodes) {
      var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
      if (typeof abstractNodes === "string") {
        return htmlEscape(abstractNodes);
      } else {
        return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
      }
    }
    function iconFromMapping(mapping, prefix2, iconName) {
      if (mapping && mapping[prefix2] && mapping[prefix2][iconName]) {
        return {
          prefix: prefix2,
          iconName,
          icon: mapping[prefix2][iconName]
        };
      }
    }
    var bindInternal4 = function bindInternal42(func, thisContext) {
      return function(a, b2, c2, d2) {
        return func.call(thisContext, a, b2, c2, d2);
      };
    };
    var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
      var keys2 = Object.keys(subject), length2 = keys2.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
      if (initialValue === void 0) {
        i = 1;
        result = subject[keys2[0]];
      } else {
        i = 0;
        result = initialValue;
      }
      for (; i < length2; i++) {
        key = keys2[i];
        result = iterator(result, subject[key], key, subject);
      }
      return result;
    };
    function ucs2decode(string) {
      var output = [];
      var counter = 0;
      var length2 = string.length;
      while (counter < length2) {
        var value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length2) {
          var extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
    function toHex(unicode) {
      var decoded = ucs2decode(unicode);
      return decoded.length === 1 ? decoded[0].toString(16) : null;
    }
    function codePointAt(string, index2) {
      var size = string.length;
      var first = string.charCodeAt(index2);
      var second;
      if (first >= 55296 && first <= 56319 && size > index2 + 1) {
        second = string.charCodeAt(index2 + 1);
        if (second >= 56320 && second <= 57343) {
          return (first - 55296) * 1024 + second - 56320 + 65536;
        }
      }
      return first;
    }
    function normalizeIcons(icons) {
      return Object.keys(icons).reduce(function(acc, iconName) {
        var icon2 = icons[iconName];
        var expanded = !!icon2.icon;
        if (expanded) {
          acc[icon2.iconName] = icon2.icon;
        } else {
          acc[iconName] = icon2;
        }
        return acc;
      }, {});
    }
    function defineIcons(prefix2, icons) {
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
      var normalized = normalizeIcons(icons);
      if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
        namespace.hooks.addPack(prefix2, normalizeIcons(icons));
      } else {
        namespace.styles[prefix2] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix2] || {}), normalized);
      }
      if (prefix2 === "fas") {
        defineIcons("fa", icons);
      }
    }
    var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
    var styles = namespace.styles, shims = namespace.shims;
    var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
    var _defaultUsablePrefix = null;
    var _byUnicode = {};
    var _byLigature = {};
    var _byOldName = {};
    var _byOldUnicode = {};
    var _byAlias = {};
    var PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
    function isReserved(name) {
      return ~RESERVED_CLASSES.indexOf(name);
    }
    function getIconName(cssPrefix, cls) {
      var parts = cls.split("-");
      var prefix2 = parts[0];
      var iconName = parts.slice(1).join("-");
      if (prefix2 === cssPrefix && iconName !== "" && !isReserved(iconName)) {
        return iconName;
      } else {
        return null;
      }
    }
    var build = function build2() {
      var lookup = function lookup2(reducer) {
        return reduce(styles, function(o, style2, prefix2) {
          o[prefix2] = reduce(style2, reducer, {});
          return o;
        }, {});
      };
      _byUnicode = lookup(function(acc, icon2, iconName) {
        if (icon2[3]) {
          acc[icon2[3]] = iconName;
        }
        if (icon2[2]) {
          var aliases2 = icon2[2].filter(function(a) {
            return typeof a === "number";
          });
          aliases2.forEach(function(alias) {
            acc[alias.toString(16)] = iconName;
          });
        }
        return acc;
      });
      _byLigature = lookup(function(acc, icon2, iconName) {
        acc[iconName] = iconName;
        if (icon2[2]) {
          var aliases2 = icon2[2].filter(function(a) {
            return typeof a === "string";
          });
          aliases2.forEach(function(alias) {
            acc[alias] = iconName;
          });
        }
        return acc;
      });
      _byAlias = lookup(function(acc, icon2, iconName) {
        var aliases2 = icon2[2];
        acc[iconName] = iconName;
        aliases2.forEach(function(alias) {
          acc[alias] = iconName;
        });
        return acc;
      });
      var hasRegular = "far" in styles || config.autoFetchSvg;
      var shimLookups = reduce(shims, function(acc, shim2) {
        var maybeNameMaybeUnicode = shim2[0];
        var prefix2 = shim2[1];
        var iconName = shim2[2];
        if (prefix2 === "far" && !hasRegular) {
          prefix2 = "fas";
        }
        if (typeof maybeNameMaybeUnicode === "string") {
          acc.names[maybeNameMaybeUnicode] = {
            prefix: prefix2,
            iconName
          };
        }
        if (typeof maybeNameMaybeUnicode === "number") {
          acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
            prefix: prefix2,
            iconName
          };
        }
        return acc;
      }, {
        names: {},
        unicodes: {}
      });
      _byOldName = shimLookups.names;
      _byOldUnicode = shimLookups.unicodes;
      _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
        family: config.familyDefault
      });
    };
    onChange(function(c2) {
      _defaultUsablePrefix = getCanonicalPrefix(c2.styleDefault, {
        family: config.familyDefault
      });
    });
    build();
    function byUnicode(prefix2, unicode) {
      return (_byUnicode[prefix2] || {})[unicode];
    }
    function byLigature(prefix2, ligature) {
      return (_byLigature[prefix2] || {})[ligature];
    }
    function byAlias(prefix2, alias) {
      return (_byAlias[prefix2] || {})[alias];
    }
    function byOldName(name) {
      return _byOldName[name] || {
        prefix: null,
        iconName: null
      };
    }
    function byOldUnicode(unicode) {
      var oldUnicode = _byOldUnicode[unicode];
      var newUnicode = byUnicode("fas", unicode);
      return oldUnicode || (newUnicode ? {
        prefix: "fas",
        iconName: newUnicode
      } : null) || {
        prefix: null,
        iconName: null
      };
    }
    function getDefaultUsablePrefix() {
      return _defaultUsablePrefix;
    }
    var emptyCanonicalIcon = function emptyCanonicalIcon2() {
      return {
        prefix: null,
        iconName: null,
        rest: []
      };
    };
    function getCanonicalPrefix(styleOrPrefix) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
      var style2 = PREFIX_TO_STYLE[family][styleOrPrefix];
      var prefix2 = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style2];
      var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
      return prefix2 || defined || null;
    }
    var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
    function getCanonicalIcon(values2) {
      var _famProps;
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
      var famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
      var givenPrefix = null;
      var family = FAMILY_CLASSIC;
      if (values2.includes(famProps[FAMILY_CLASSIC]) || values2.some(function(v2) {
        return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v2);
      })) {
        family = FAMILY_CLASSIC;
      }
      if (values2.includes(famProps[FAMILY_SHARP]) || values2.some(function(v2) {
        return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v2);
      })) {
        family = FAMILY_SHARP;
      }
      var canonical = values2.reduce(function(acc, cls) {
        var iconName = getIconName(config.cssPrefix, cls);
        if (styles[cls]) {
          cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
          givenPrefix = cls;
          acc.prefix = cls;
        } else if (PREFIXES[family].indexOf(cls) > -1) {
          givenPrefix = cls;
          acc.prefix = getCanonicalPrefix(cls, {
            family
          });
        } else if (iconName) {
          acc.iconName = iconName;
        } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
          acc.rest.push(cls);
        }
        if (!skipLookups && acc.prefix && acc.iconName) {
          var shim2 = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
          var aliasIconName = byAlias(acc.prefix, acc.iconName);
          if (shim2.prefix) {
            givenPrefix = null;
          }
          acc.iconName = shim2.iconName || aliasIconName || acc.iconName;
          acc.prefix = shim2.prefix || acc.prefix;
          if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
            acc.prefix = "fas";
          }
        }
        return acc;
      }, emptyCanonicalIcon());
      if (values2.includes("fa-brands") || values2.includes("fab")) {
        canonical.prefix = "fab";
      }
      if (values2.includes("fa-duotone") || values2.includes("fad")) {
        canonical.prefix = "fad";
      }
      if (!canonical.prefix && family === FAMILY_SHARP && (styles["fass"] || config.autoFetchSvg)) {
        canonical.prefix = "fass";
        canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
      }
      if (canonical.prefix === "fa" || givenPrefix === "fa") {
        canonical.prefix = getDefaultUsablePrefix() || "fas";
      }
      return canonical;
    }
    var Library = /* @__PURE__ */ function() {
      function Library2() {
        _classCallCheck(this, Library2);
        this.definitions = {};
      }
      _createClass(Library2, [{
        key: "add",
        value: function add2() {
          var _this = this;
          for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
            definitions[_key] = arguments[_key];
          }
          var additions = definitions.reduce(this._pullDefinitions, {});
          Object.keys(additions).forEach(function(key) {
            _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]);
            defineIcons(key, additions[key]);
            var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
            if (longPrefix)
              defineIcons(longPrefix, additions[key]);
            build();
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function _pullDefinitions(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? {
            0: definition
          } : definition;
          Object.keys(normalized).map(function(key) {
            var _normalized$key = normalized[key], prefix2 = _normalized$key.prefix, iconName = _normalized$key.iconName, icon2 = _normalized$key.icon;
            var aliases2 = icon2[2];
            if (!additions[prefix2])
              additions[prefix2] = {};
            if (aliases2.length > 0) {
              aliases2.forEach(function(alias) {
                if (typeof alias === "string") {
                  additions[prefix2][alias] = icon2;
                }
              });
            }
            additions[prefix2][iconName] = icon2;
          });
          return additions;
        }
      }]);
      return Library2;
    }();
    var _plugins = [];
    var _hooks = {};
    var providers = {};
    var defaultProviderKeys = Object.keys(providers);
    function registerPlugins(nextPlugins, _ref2) {
      var obj = _ref2.mixoutsTo;
      _plugins = nextPlugins;
      _hooks = {};
      Object.keys(providers).forEach(function(k2) {
        if (defaultProviderKeys.indexOf(k2) === -1) {
          delete providers[k2];
        }
      });
      _plugins.forEach(function(plugin) {
        var mixout = plugin.mixout ? plugin.mixout() : {};
        Object.keys(mixout).forEach(function(tk2) {
          if (typeof mixout[tk2] === "function") {
            obj[tk2] = mixout[tk2];
          }
          if (_typeof$1(mixout[tk2]) === "object") {
            Object.keys(mixout[tk2]).forEach(function(sk2) {
              if (!obj[tk2]) {
                obj[tk2] = {};
              }
              obj[tk2][sk2] = mixout[tk2][sk2];
            });
          }
        });
        if (plugin.hooks) {
          var hooks2 = plugin.hooks();
          Object.keys(hooks2).forEach(function(hook) {
            if (!_hooks[hook]) {
              _hooks[hook] = [];
            }
            _hooks[hook].push(hooks2[hook]);
          });
        }
        if (plugin.provides) {
          plugin.provides(providers);
        }
      });
      return obj;
    }
    function chainHooks(hook, accumulator) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      var hookFns = _hooks[hook] || [];
      hookFns.forEach(function(hookFn) {
        accumulator = hookFn.apply(null, [accumulator].concat(args));
      });
      return accumulator;
    }
    function callHooks(hook) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      var hookFns = _hooks[hook] || [];
      hookFns.forEach(function(hookFn) {
        hookFn.apply(null, args);
      });
      return void 0;
    }
    function callProvided() {
      var hook = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      return providers[hook] ? providers[hook].apply(null, args) : void 0;
    }
    function findIconDefinition(iconLookup) {
      if (iconLookup.prefix === "fa") {
        iconLookup.prefix = "fas";
      }
      var iconName = iconLookup.iconName;
      var prefix2 = iconLookup.prefix || getDefaultUsablePrefix();
      if (!iconName)
        return;
      iconName = byAlias(prefix2, iconName) || iconName;
      return iconFromMapping(library.definitions, prefix2, iconName) || iconFromMapping(namespace.styles, prefix2, iconName);
    }
    var library = new Library();
    var noAuto = function noAuto2() {
      config.autoReplaceSvg = false;
      config.observeMutations = false;
      callHooks("noAuto");
    };
    var dom = {
      i2svg: function i2svg() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (IS_DOM) {
          callHooks("beforeI2svg", params);
          callProvided("pseudoElements2svg", params);
          return callProvided("i2svg", params);
        } else {
          return Promise.reject("Operation requires a DOM of some kind.");
        }
      },
      watch: function watch() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
        if (config.autoReplaceSvg === false) {
          config.autoReplaceSvg = true;
        }
        config.observeMutations = true;
        domready(function() {
          autoReplace({
            autoReplaceSvgRoot
          });
          callHooks("watch", params);
        });
      }
    };
    var parse = {
      icon: function icon2(_icon) {
        if (_icon === null) {
          return null;
        }
        if (_typeof$1(_icon) === "object" && _icon.prefix && _icon.iconName) {
          return {
            prefix: _icon.prefix,
            iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
          };
        }
        if (Array.isArray(_icon) && _icon.length === 2) {
          var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
          var prefix2 = getCanonicalPrefix(_icon[0]);
          return {
            prefix: prefix2,
            iconName: byAlias(prefix2, iconName) || iconName
          };
        }
        if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
          var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
            skipLookups: true
          });
          return {
            prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
            iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
          };
        }
        if (typeof _icon === "string") {
          var _prefix = getDefaultUsablePrefix();
          return {
            prefix: _prefix,
            iconName: byAlias(_prefix, _icon) || _icon
          };
        }
      }
    };
    var api = {
      noAuto,
      config,
      dom,
      parse,
      library,
      findIconDefinition,
      toHtml
    };
    var autoReplace = function autoReplace2() {
      var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
      if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg)
        api.dom.i2svg({
          node: autoReplaceSvgRoot
        });
    };
    function domVariants(val, abstractCreator) {
      Object.defineProperty(val, "abstract", {
        get: abstractCreator
      });
      Object.defineProperty(val, "html", {
        get: function get2() {
          return val.abstract.map(function(a) {
            return toHtml(a);
          });
        }
      });
      Object.defineProperty(val, "node", {
        get: function get2() {
          if (!IS_DOM)
            return;
          var container = DOCUMENT.createElement("div");
          container.innerHTML = val.html;
          return container.children;
        }
      });
      return val;
    }
    function asIcon(_ref2) {
      var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
      if (transformIsMeaningful(transform) && main.found && !mask.found) {
        var width2 = main.width, height2 = main.height;
        var offset2 = {
          x: width2 / height2 / 2,
          y: 0.5
        };
        attributes["style"] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles2), {}, {
          "transform-origin": "".concat(offset2.x + transform.x / 16, "em ").concat(offset2.y + transform.y / 16, "em")
        }));
      }
      return [{
        tag: "svg",
        attributes,
        children
      }];
    }
    function asSymbol(_ref2) {
      var prefix2 = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
      var id2 = symbol === true ? "".concat(prefix2, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, {
            id: id2
          }),
          children
        }]
      }];
    }
    function makeInlineSvgAbstract(params) {
      var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix2 = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
      var _ref2 = mask.found ? mask : main, width2 = _ref2.width, height2 = _ref2.height;
      var isUploadedIcon = prefix2 === "fak";
      var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c2) {
        return extra.classes.indexOf(c2) === -1;
      }).filter(function(c2) {
        return c2 !== "" || !!c2;
      }).concat(extra.classes).join(" ");
      var content = {
        children: [],
        attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
          "data-prefix": prefix2,
          "data-icon": iconName,
          "class": attrClass,
          "role": extra.attributes.role || "img",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 ".concat(width2, " ").concat(height2)
        })
      };
      var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
        width: "".concat(width2 / height2 * 16 * 0.0625, "em")
      } : {};
      if (watchable) {
        content.attributes[DATA_FA_I2SVG] = "";
      }
      if (title) {
        content.children.push({
          tag: "title",
          attributes: {
            id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
          },
          children: [title]
        });
        delete content.attributes.title;
      }
      var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
        prefix: prefix2,
        iconName,
        main,
        mask,
        maskId,
        transform,
        symbol,
        styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
      });
      var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
        children: [],
        attributes: {}
      } : callProvided("generateAbstractIcon", args) || {
        children: [],
        attributes: {}
      }, children = _ref22.children, attributes = _ref22.attributes;
      args.children = children;
      args.attributes = attributes;
      if (symbol) {
        return asSymbol(args);
      } else {
        return asIcon(args);
      }
    }
    function makeLayersTextAbstract(params) {
      var content = params.content, width2 = params.width, height2 = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
      var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
        "title": title
      } : {}), {}, {
        "class": extra.classes.join(" ")
      });
      if (watchable) {
        attributes[DATA_FA_I2SVG] = "";
      }
      var styles2 = _objectSpread2$1({}, extra.styles);
      if (transformIsMeaningful(transform)) {
        styles2["transform"] = transformForCss({
          transform,
          startCentered: true,
          width: width2,
          height: height2
        });
        styles2["-webkit-transform"] = styles2["transform"];
      }
      var styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var val = [];
      val.push({
        tag: "span",
        attributes,
        children: [content]
      });
      if (title) {
        val.push({
          tag: "span",
          attributes: {
            class: "sr-only"
          },
          children: [title]
        });
      }
      return val;
    }
    function makeLayersCounterAbstract(params) {
      var content = params.content, title = params.title, extra = params.extra;
      var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
        "title": title
      } : {}), {}, {
        "class": extra.classes.join(" ")
      });
      var styleString = joinStyles(extra.styles);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var val = [];
      val.push({
        tag: "span",
        attributes,
        children: [content]
      });
      if (title) {
        val.push({
          tag: "span",
          attributes: {
            class: "sr-only"
          },
          children: [title]
        });
      }
      return val;
    }
    var styles$1 = namespace.styles;
    function asFoundIcon(icon2) {
      var width2 = icon2[0];
      var height2 = icon2[1];
      var _icon$slice = icon2.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
      var element = null;
      if (Array.isArray(vectorData)) {
        element = {
          tag: "g",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
              fill: "currentColor",
              d: vectorData[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
              fill: "currentColor",
              d: vectorData[1]
            }
          }]
        };
      } else {
        element = {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: vectorData
          }
        };
      }
      return {
        found: true,
        width: width2,
        height: height2,
        icon: element
      };
    }
    var missingIconResolutionMixin = {
      found: false,
      width: 512,
      height: 512
    };
    function maybeNotifyMissing(iconName, prefix2) {
      if (!PRODUCTION$1 && !config.showMissingIcons && iconName) {
        console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix2, '" is missing.'));
      }
    }
    function findIcon(iconName, prefix2) {
      var givenPrefix = prefix2;
      if (prefix2 === "fa" && config.styleDefault !== null) {
        prefix2 = getDefaultUsablePrefix();
      }
      return new Promise(function(resolve, reject) {
        ({
          found: false,
          width: 512,
          height: 512,
          icon: callProvided("missingIconAbstract") || {}
        });
        if (givenPrefix === "fa") {
          var shim2 = byOldName(iconName) || {};
          iconName = shim2.iconName || iconName;
          prefix2 = shim2.prefix || prefix2;
        }
        if (iconName && prefix2 && styles$1[prefix2] && styles$1[prefix2][iconName]) {
          var icon2 = styles$1[prefix2][iconName];
          return resolve(asFoundIcon(icon2));
        }
        maybeNotifyMissing(iconName, prefix2);
        resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
          icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
        }));
      });
    }
    var noop$1 = function noop2() {
    };
    var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
      mark: noop$1,
      measure: noop$1
    };
    var preamble = 'FA "6.4.0"';
    var begin = function begin2(name) {
      p.mark("".concat(preamble, " ").concat(name, " begins"));
      return function() {
        return end(name);
      };
    };
    var end = function end2(name) {
      p.mark("".concat(preamble, " ").concat(name, " ends"));
      p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
    };
    var perf = {
      begin,
      end
    };
    var noop$2 = function noop2() {
    };
    function isWatched(node2) {
      var i2svg = node2.getAttribute ? node2.getAttribute(DATA_FA_I2SVG) : null;
      return typeof i2svg === "string";
    }
    function hasPrefixAndIcon(node2) {
      var prefix2 = node2.getAttribute ? node2.getAttribute(DATA_PREFIX) : null;
      var icon2 = node2.getAttribute ? node2.getAttribute(DATA_ICON) : null;
      return prefix2 && icon2;
    }
    function hasBeenReplaced(node2) {
      return node2 && node2.classList && node2.classList.contains && node2.classList.contains(config.replacementClass);
    }
    function getMutator() {
      if (config.autoReplaceSvg === true) {
        return mutators.replace;
      }
      var mutator = mutators[config.autoReplaceSvg];
      return mutator || mutators.replace;
    }
    function createElementNS(tag) {
      return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
    }
    function createElement(tag) {
      return DOCUMENT.createElement(tag);
    }
    function convertSVG(abstractObj) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
      if (typeof abstractObj === "string") {
        return DOCUMENT.createTextNode(abstractObj);
      }
      var tag = ceFn(abstractObj.tag);
      Object.keys(abstractObj.attributes || []).forEach(function(key) {
        tag.setAttribute(key, abstractObj.attributes[key]);
      });
      var children = abstractObj.children || [];
      children.forEach(function(child) {
        tag.appendChild(convertSVG(child, {
          ceFn
        }));
      });
      return tag;
    }
    function nodeAsComment(node2) {
      var comment2 = " ".concat(node2.outerHTML, " ");
      comment2 = "".concat(comment2, "Font Awesome fontawesome.com ");
      return comment2;
    }
    var mutators = {
      replace: function replace2(mutation) {
        var node2 = mutation[0];
        if (node2.parentNode) {
          mutation[1].forEach(function(_abstract) {
            node2.parentNode.insertBefore(convertSVG(_abstract), node2);
          });
          if (node2.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
            var comment2 = DOCUMENT.createComment(nodeAsComment(node2));
            node2.parentNode.replaceChild(comment2, node2);
          } else {
            node2.remove();
          }
        }
      },
      nest: function nest(mutation) {
        var node2 = mutation[0];
        var _abstract2 = mutation[1];
        if (~classArray(node2).indexOf(config.replacementClass)) {
          return mutators.replace(mutation);
        }
        var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
        delete _abstract2[0].attributes.id;
        if (_abstract2[0].attributes.class) {
          var splitClasses = _abstract2[0].attributes.class.split(" ").reduce(function(acc, cls) {
            if (cls === config.replacementClass || cls.match(forSvg)) {
              acc.toSvg.push(cls);
            } else {
              acc.toNode.push(cls);
            }
            return acc;
          }, {
            toNode: [],
            toSvg: []
          });
          _abstract2[0].attributes.class = splitClasses.toSvg.join(" ");
          if (splitClasses.toNode.length === 0) {
            node2.removeAttribute("class");
          } else {
            node2.setAttribute("class", splitClasses.toNode.join(" "));
          }
        }
        var newInnerHTML = _abstract2.map(function(a) {
          return toHtml(a);
        }).join("\n");
        node2.setAttribute(DATA_FA_I2SVG, "");
        node2.innerHTML = newInnerHTML;
      }
    };
    function performOperationSync(op) {
      op();
    }
    function perform(mutations, callback) {
      var callbackFunction = typeof callback === "function" ? callback : noop$2;
      if (mutations.length === 0) {
        callbackFunction();
      } else {
        var frame = performOperationSync;
        if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
          frame = WINDOW.requestAnimationFrame || performOperationSync;
        }
        frame(function() {
          var mutator = getMutator();
          var mark = perf.begin("mutate");
          mutations.map(mutator);
          mark();
          callbackFunction();
        });
      }
    }
    var disabled = false;
    function disableObservation() {
      disabled = true;
    }
    function enableObservation() {
      disabled = false;
    }
    var mo = null;
    function observe(options) {
      if (!MUTATION_OBSERVER) {
        return;
      }
      if (!config.observeMutations) {
        return;
      }
      var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
      mo = new MUTATION_OBSERVER(function(objects) {
        if (disabled)
          return;
        var defaultPrefix = getDefaultUsablePrefix();
        toArray$1(objects).forEach(function(mutationRecord) {
          if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
            if (config.searchPseudoElements) {
              pseudoElementsCallback(mutationRecord.target);
            }
            treeCallback(mutationRecord.target);
          }
          if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target.parentNode);
          }
          if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
            if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
              var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix2 = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
              mutationRecord.target.setAttribute(DATA_PREFIX, prefix2 || defaultPrefix);
              if (iconName)
                mutationRecord.target.setAttribute(DATA_ICON, iconName);
            } else if (hasBeenReplaced(mutationRecord.target)) {
              nodeCallback(mutationRecord.target);
            }
          }
        });
      });
      if (!IS_DOM)
        return;
      mo.observe(observeMutationsRoot, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      });
    }
    function disconnect() {
      if (!mo)
        return;
      mo.disconnect();
    }
    function styleParser(node2) {
      var style2 = node2.getAttribute("style");
      var val = [];
      if (style2) {
        val = style2.split(";").reduce(function(acc, style3) {
          var styles2 = style3.split(":");
          var prop = styles2[0];
          var value = styles2.slice(1);
          if (prop && value.length > 0) {
            acc[prop] = value.join(":").trim();
          }
          return acc;
        }, {});
      }
      return val;
    }
    function classParser(node2) {
      var existingPrefix = node2.getAttribute("data-prefix");
      var existingIconName = node2.getAttribute("data-icon");
      var innerText = node2.innerText !== void 0 ? node2.innerText.trim() : "";
      var val = getCanonicalIcon(classArray(node2));
      if (!val.prefix) {
        val.prefix = getDefaultUsablePrefix();
      }
      if (existingPrefix && existingIconName) {
        val.prefix = existingPrefix;
        val.iconName = existingIconName;
      }
      if (val.iconName && val.prefix) {
        return val;
      }
      if (val.prefix && innerText.length > 0) {
        val.iconName = byLigature(val.prefix, node2.innerText) || byUnicode(val.prefix, toHex(node2.innerText));
      }
      if (!val.iconName && config.autoFetchSvg && node2.firstChild && node2.firstChild.nodeType === Node.TEXT_NODE) {
        val.iconName = node2.firstChild.data;
      }
      return val;
    }
    function attributesParser(node2) {
      var extraAttributes = toArray$1(node2.attributes).reduce(function(acc, attr) {
        if (acc.name !== "class" && acc.name !== "style") {
          acc[attr.name] = attr.value;
        }
        return acc;
      }, {});
      var title = node2.getAttribute("title");
      var titleId = node2.getAttribute("data-fa-title-id");
      if (config.autoA11y) {
        if (title) {
          extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          extraAttributes["aria-hidden"] = "true";
          extraAttributes["focusable"] = "false";
        }
      }
      return extraAttributes;
    }
    function blankMeta() {
      return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: meaninglessTransform,
        symbol: false,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        extra: {
          classes: [],
          styles: {},
          attributes: {}
        }
      };
    }
    function parseMeta(node2) {
      var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: true
      };
      var _classParser = classParser(node2), iconName = _classParser.iconName, prefix2 = _classParser.prefix, extraClasses = _classParser.rest;
      var extraAttributes = attributesParser(node2);
      var pluginMeta = chainHooks("parseNodeAttributes", {}, node2);
      var extraStyles = parser.styleParser ? styleParser(node2) : [];
      return _objectSpread2$1({
        iconName,
        title: node2.getAttribute("title"),
        titleId: node2.getAttribute("data-fa-title-id"),
        prefix: prefix2,
        transform: meaninglessTransform,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: false,
        extra: {
          classes: extraClasses,
          styles: extraStyles,
          attributes: extraAttributes
        }
      }, pluginMeta);
    }
    var styles$2 = namespace.styles;
    function generateMutation(node2) {
      var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node2, {
        styleParser: false
      }) : parseMeta(node2);
      if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
        return callProvided("generateLayersText", node2, nodeMeta);
      } else {
        return callProvided("generateSvgReplacementMutation", node2, nodeMeta);
      }
    }
    var knownPrefixes = /* @__PURE__ */ new Set();
    FAMILIES.map(function(family) {
      knownPrefixes.add("fa-".concat(family));
    });
    Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
    Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
    knownPrefixes = _toConsumableArray$1(knownPrefixes);
    function onTree(root) {
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (!IS_DOM)
        return Promise.resolve();
      var htmlClassList = DOCUMENT.documentElement.classList;
      var hclAdd = function hclAdd2(suffix) {
        return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
      };
      var hclRemove = function hclRemove2(suffix) {
        return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
      };
      var prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f2) {
        return "fa-".concat(f2);
      }).concat(Object.keys(styles$2));
      if (!prefixes2.includes("fa")) {
        prefixes2.push("fa");
      }
      var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
        return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
      })).join(", ");
      if (prefixesDomQuery.length === 0) {
        return Promise.resolve();
      }
      var candidates = [];
      try {
        candidates = toArray$1(root.querySelectorAll(prefixesDomQuery));
      } catch (e2) {
      }
      if (candidates.length > 0) {
        hclAdd("pending");
        hclRemove("complete");
      } else {
        return Promise.resolve();
      }
      var mark = perf.begin("onTree");
      var mutations = candidates.reduce(function(acc, node2) {
        try {
          var mutation = generateMutation(node2);
          if (mutation) {
            acc.push(mutation);
          }
        } catch (e2) {
          if (!PRODUCTION$1) {
            if (e2.name === "MissingIcon") {
              console.error(e2);
            }
          }
        }
        return acc;
      }, []);
      return new Promise(function(resolve, reject) {
        Promise.all(mutations).then(function(resolvedMutations) {
          perform(resolvedMutations, function() {
            hclAdd("active");
            hclAdd("complete");
            hclRemove("pending");
            if (typeof callback === "function")
              callback();
            mark();
            resolve();
          });
        }).catch(function(e2) {
          mark();
          reject(e2);
        });
      });
    }
    function onNode(node2) {
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      generateMutation(node2).then(function(mutation) {
        if (mutation) {
          perform([mutation], callback);
        }
      });
    }
    function resolveIcons(next2) {
      return function(maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
        var mask = params.mask;
        if (mask) {
          mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
        }
        return next2(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
          mask
        }));
      };
    }
    var render = function render2(iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
      if (!iconDefinition)
        return;
      var prefix2 = iconDefinition.prefix, iconName = iconDefinition.iconName, icon2 = iconDefinition.icon;
      return domVariants(_objectSpread2$1({
        type: "icon"
      }, iconDefinition), function() {
        callHooks("beforeDOMElementCreation", {
          iconDefinition,
          params
        });
        if (config.autoA11y) {
          if (title) {
            attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
          } else {
            attributes["aria-hidden"] = "true";
            attributes["focusable"] = "false";
          }
        }
        return makeInlineSvgAbstract({
          icons: {
            main: asFoundIcon(icon2),
            mask: mask ? asFoundIcon(mask.icon) : {
              found: false,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: prefix2,
          iconName,
          transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
          symbol,
          title,
          maskId,
          titleId,
          extra: {
            attributes,
            styles: styles2,
            classes
          }
        });
      });
    };
    var ReplaceElements = {
      mixout: function mixout() {
        return {
          icon: resolveIcons(render)
        };
      },
      hooks: function hooks2() {
        return {
          mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
            accumulator.treeCallback = onTree;
            accumulator.nodeCallback = onNode;
            return accumulator;
          }
        };
      },
      provides: function provides(providers$$1) {
        providers$$1.i2svg = function(params) {
          var _params$node = params.node, node2 = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
          } : _params$callback;
          return onTree(node2, callback);
        };
        providers$$1.generateSvgReplacementMutation = function(node2, nodeMeta) {
          var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix2 = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
          return new Promise(function(resolve, reject) {
            Promise.all([findIcon(iconName, prefix2), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
              found: false,
              width: 512,
              height: 512,
              icon: {}
            })]).then(function(_ref2) {
              var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
              resolve([node2, makeInlineSvgAbstract({
                icons: {
                  main,
                  mask: mask2
                },
                prefix: prefix2,
                iconName,
                transform,
                symbol,
                maskId,
                title,
                titleId,
                extra,
                watchable: true
              })]);
            }).catch(reject);
          });
        };
        providers$$1.generateAbstractIcon = function(_ref3) {
          var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
          var styleString = joinStyles(styles2);
          if (styleString.length > 0) {
            attributes["style"] = styleString;
          }
          var nextChild;
          if (transformIsMeaningful(transform)) {
            nextChild = callProvided("generateAbstractTransformGrouping", {
              main,
              transform,
              containerWidth: main.width,
              iconWidth: main.width
            });
          }
          children.push(nextChild || main.icon);
          return {
            children,
            attributes
          };
        };
      }
    };
    var Layers = {
      mixout: function mixout() {
        return {
          layer: function layer(assembler) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
            return domVariants({
              type: "layer"
            }, function() {
              callHooks("beforeDOMElementCreation", {
                assembler,
                params
              });
              var children = [];
              assembler(function(args) {
                Array.isArray(args) ? args.map(function(a) {
                  children = children.concat(a.abstract);
                }) : children = children.concat(args.abstract);
              });
              return [{
                tag: "span",
                attributes: {
                  class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray$1(classes)).join(" ")
                },
                children
              }];
            });
          }
        };
      }
    };
    var LayersCounter = {
      mixout: function mixout() {
        return {
          counter: function counter(content) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
            return domVariants({
              type: "counter",
              content
            }, function() {
              callHooks("beforeDOMElementCreation", {
                content,
                params
              });
              return makeLayersCounterAbstract({
                content: content.toString(),
                title,
                extra: {
                  attributes,
                  styles: styles2,
                  classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray$1(classes))
                }
              });
            });
          }
        };
      }
    };
    var LayersText = {
      mixout: function mixout() {
        return {
          text: function text(content) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
            return domVariants({
              type: "text",
              content
            }, function() {
              callHooks("beforeDOMElementCreation", {
                content,
                params
              });
              return makeLayersTextAbstract({
                content,
                transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
                title,
                extra: {
                  attributes,
                  styles: styles2,
                  classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray$1(classes))
                }
              });
            });
          }
        };
      },
      provides: function provides(providers$$1) {
        providers$$1.generateLayersText = function(node2, nodeMeta) {
          var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
          var width2 = null;
          var height2 = null;
          if (IS_IE) {
            var computedFontSize = parseInt(getComputedStyle(node2).fontSize, 10);
            var boundingClientRect = node2.getBoundingClientRect();
            width2 = boundingClientRect.width / computedFontSize;
            height2 = boundingClientRect.height / computedFontSize;
          }
          if (config.autoA11y && !title) {
            extra.attributes["aria-hidden"] = "true";
          }
          return Promise.resolve([node2, makeLayersTextAbstract({
            content: node2.innerHTML,
            width: width2,
            height: height2,
            transform,
            title,
            extra,
            watchable: true
          })]);
        };
      }
    };
    var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
    var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
    function hexValueFromContent(content) {
      var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
      var codePoint = codePointAt(cleaned, 0);
      var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
      var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
      return {
        value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
        isSecondary: isPrependTen || isDoubled
      };
    }
    function replaceForPosition(node2, position2) {
      var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position2.replace(":", "-"));
      return new Promise(function(resolve, reject) {
        if (node2.getAttribute(pendingAttribute) !== null) {
          return resolve();
        }
        var children = toArray$1(node2.children);
        var alreadyProcessedPseudoElement = children.filter(function(c2) {
          return c2.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position2;
        })[0];
        var styles2 = WINDOW.getComputedStyle(node2, position2);
        var fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN);
        var fontWeight = styles2.getPropertyValue("font-weight");
        var content = styles2.getPropertyValue("content");
        if (alreadyProcessedPseudoElement && !fontFamily) {
          node2.removeChild(alreadyProcessedPseudoElement);
          return resolve();
        } else if (fontFamily && content !== "none" && content !== "") {
          var _content = styles2.getPropertyValue("content");
          var family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
          var prefix2 = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
          var _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
          var isV4 = fontFamily[0].startsWith("FontAwesome");
          var iconName = byUnicode(prefix2, hexValue);
          var iconIdentifier = iconName;
          if (isV4) {
            var iconName4 = byOldUnicode(hexValue);
            if (iconName4.iconName && iconName4.prefix) {
              iconName = iconName4.iconName;
              prefix2 = iconName4.prefix;
            }
          }
          if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix2 || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
            node2.setAttribute(pendingAttribute, iconIdentifier);
            if (alreadyProcessedPseudoElement) {
              node2.removeChild(alreadyProcessedPseudoElement);
            }
            var meta = blankMeta();
            var extra = meta.extra;
            extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position2;
            findIcon(iconName, prefix2).then(function(main) {
              var _abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
                icons: {
                  main,
                  mask: emptyCanonicalIcon()
                },
                prefix: prefix2,
                iconName: iconIdentifier,
                extra,
                watchable: true
              }));
              var element = DOCUMENT.createElement("svg");
              if (position2 === "::before") {
                node2.insertBefore(element, node2.firstChild);
              } else {
                node2.appendChild(element);
              }
              element.outerHTML = _abstract.map(function(a) {
                return toHtml(a);
              }).join("\n");
              node2.removeAttribute(pendingAttribute);
              resolve();
            }).catch(reject);
          } else {
            resolve();
          }
        } else {
          resolve();
        }
      });
    }
    function replace(node2) {
      return Promise.all([replaceForPosition(node2, "::before"), replaceForPosition(node2, "::after")]);
    }
    function processable(node2) {
      return node2.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node2.tagName.toUpperCase()) && !node2.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node2.parentNode || node2.parentNode.tagName !== "svg");
    }
    function searchPseudoElements(root) {
      if (!IS_DOM)
        return;
      return new Promise(function(resolve, reject) {
        var operations = toArray$1(root.querySelectorAll("*")).filter(processable).map(replace);
        var end2 = perf.begin("searchPseudoElements");
        disableObservation();
        Promise.all(operations).then(function() {
          end2();
          enableObservation();
          resolve();
        }).catch(function() {
          end2();
          enableObservation();
          reject();
        });
      });
    }
    var PseudoElements = {
      hooks: function hooks2() {
        return {
          mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
            accumulator.pseudoElementsCallback = searchPseudoElements;
            return accumulator;
          }
        };
      },
      provides: function provides(providers$$1) {
        providers$$1.pseudoElements2svg = function(params) {
          var _params$node = params.node, node2 = _params$node === void 0 ? DOCUMENT : _params$node;
          if (config.searchPseudoElements) {
            searchPseudoElements(node2);
          }
        };
      }
    };
    var _unwatched = false;
    var MutationObserver$1 = {
      mixout: function mixout() {
        return {
          dom: {
            unwatch: function unwatch() {
              disableObservation();
              _unwatched = true;
            }
          }
        };
      },
      hooks: function hooks2() {
        return {
          bootstrap: function bootstrap() {
            observe(chainHooks("mutationObserverCallbacks", {}));
          },
          noAuto: function noAuto2() {
            disconnect();
          },
          watch: function watch(params) {
            var observeMutationsRoot = params.observeMutationsRoot;
            if (_unwatched) {
              enableObservation();
            } else {
              observe(chainHooks("mutationObserverCallbacks", {
                observeMutationsRoot
              }));
            }
          }
        };
      }
    };
    var parseTransformString = function parseTransformString2(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      };
      return transformString.toLowerCase().split(" ").reduce(function(acc, n2) {
        var parts = n2.toLowerCase().split("-");
        var first = parts[0];
        var rest = parts.slice(1).join("-");
        if (first && rest === "h") {
          acc.flipX = true;
          return acc;
        }
        if (first && rest === "v") {
          acc.flipY = true;
          return acc;
        }
        rest = parseFloat(rest);
        if (isNaN(rest)) {
          return acc;
        }
        switch (first) {
          case "grow":
            acc.size = acc.size + rest;
            break;
          case "shrink":
            acc.size = acc.size - rest;
            break;
          case "left":
            acc.x = acc.x - rest;
            break;
          case "right":
            acc.x = acc.x + rest;
            break;
          case "up":
            acc.y = acc.y - rest;
            break;
          case "down":
            acc.y = acc.y + rest;
            break;
          case "rotate":
            acc.rotate = acc.rotate + rest;
            break;
        }
        return acc;
      }, transform);
    };
    var PowerTransforms = {
      mixout: function mixout() {
        return {
          parse: {
            transform: function transform(transformString) {
              return parseTransformString(transformString);
            }
          }
        };
      },
      hooks: function hooks2() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node2) {
            var transformString = node2.getAttribute("data-fa-transform");
            if (transformString) {
              accumulator.transform = parseTransformString(transformString);
            }
            return accumulator;
          }
        };
      },
      provides: function provides(providers2) {
        providers2.generateAbstractTransformGrouping = function(_ref2) {
          var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
          var outer = {
            transform: "translate(".concat(containerWidth / 2, " 256)")
          };
          var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
          var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
          var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
          var inner = {
            transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
          };
          var path = {
            transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
          };
          var operations = {
            outer,
            inner,
            path
          };
          return {
            tag: "g",
            attributes: _objectSpread2$1({}, operations.outer),
            children: [{
              tag: "g",
              attributes: _objectSpread2$1({}, operations.inner),
              children: [{
                tag: main.icon.tag,
                children: main.icon.children,
                attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
              }]
            }]
          };
        };
      }
    };
    var ALL_SPACE = {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%"
    };
    function fillBlack(_abstract) {
      var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (_abstract.attributes && (_abstract.attributes.fill || force)) {
        _abstract.attributes.fill = "black";
      }
      return _abstract;
    }
    function deGroup(_abstract2) {
      if (_abstract2.tag === "g") {
        return _abstract2.children;
      } else {
        return [_abstract2];
      }
    }
    var Masks = {
      hooks: function hooks2() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node2) {
            var maskData = node2.getAttribute("data-fa-mask");
            var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i) {
              return i.trim();
            }));
            if (!mask.prefix) {
              mask.prefix = getDefaultUsablePrefix();
            }
            accumulator.mask = mask;
            accumulator.maskId = node2.getAttribute("data-fa-mask-id");
            return accumulator;
          }
        };
      },
      provides: function provides(providers2) {
        providers2.generateAbstractMask = function(_ref2) {
          var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
          var mainWidth = main.width, mainPath = main.icon;
          var maskWidth = mask.width, maskPath = mask.icon;
          var trans = transformForSvg({
            transform,
            containerWidth: maskWidth,
            iconWidth: mainWidth
          });
          var maskRect = {
            tag: "rect",
            attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
              fill: "white"
            })
          };
          var maskInnerGroupChildrenMixin = mainPath.children ? {
            children: mainPath.children.map(fillBlack)
          } : {};
          var maskInnerGroup = {
            tag: "g",
            attributes: _objectSpread2$1({}, trans.inner),
            children: [fillBlack(_objectSpread2$1({
              tag: mainPath.tag,
              attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
            }, maskInnerGroupChildrenMixin))]
          };
          var maskOuterGroup = {
            tag: "g",
            attributes: _objectSpread2$1({}, trans.outer),
            children: [maskInnerGroup]
          };
          var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
          var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
          var maskTag = {
            tag: "mask",
            attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
              id: maskId,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [maskRect, maskOuterGroup]
          };
          var defs = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: clipId
              },
              children: deGroup(maskPath)
            }, maskTag]
          };
          children.push(defs, {
            tag: "rect",
            attributes: _objectSpread2$1({
              fill: "currentColor",
              "clip-path": "url(#".concat(clipId, ")"),
              mask: "url(#".concat(maskId, ")")
            }, ALL_SPACE)
          });
          return {
            children,
            attributes
          };
        };
      }
    };
    var MissingIconIndicator = {
      provides: function provides(providers2) {
        var reduceMotion = false;
        if (WINDOW.matchMedia) {
          reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
        providers2.missingIconAbstract = function() {
          var gChildren = [];
          var FILL = {
            fill: "currentColor"
          };
          var ANIMATION_BASE = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
          };
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
          });
          var OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
            attributeName: "opacity"
          });
          var dot = {
            tag: "circle",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              cx: "256",
              cy: "364",
              r: "28"
            }),
            children: []
          };
          if (!reduceMotion) {
            dot.children.push({
              tag: "animate",
              attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
                values: "1;0;1;1;0;1;"
              })
            });
          }
          gChildren.push(dot);
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              opacity: "1",
              d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: reduceMotion ? [] : [{
              tag: "animate",
              attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
                values: "1;0;0;0;0;1;"
              })
            }]
          });
          if (!reduceMotion) {
            gChildren.push({
              tag: "path",
              attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            });
          }
          return {
            tag: "g",
            attributes: {
              "class": "missing"
            },
            children: gChildren
          };
        };
      }
    };
    var SvgSymbols = {
      hooks: function hooks2() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node2) {
            var symbolData = node2.getAttribute("data-fa-symbol");
            var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
            accumulator["symbol"] = symbol;
            return accumulator;
          }
        };
      }
    };
    var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
    registerPlugins(plugins, {
      mixoutsTo: api
    });
    api.noAuto;
    api.config;
    api.library;
    api.dom;
    var parse$1 = api.parse;
    api.findIconDefinition;
    api.toHtml;
    var icon = api.icon;
    api.layer;
    api.text;
    api.counter;
    function ownKeys(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor)
        n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function classList(props) {
      var _classes;
      var beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border2 = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull;
      var classes = (_classes = {
        "fa-beat": beat,
        "fa-fade": fade,
        "fa-beat-fade": beatFade,
        "fa-bounce": bounce,
        "fa-shake": shake,
        "fa-flash": flash,
        "fa-spin": spin,
        "fa-spin-reverse": spinReverse,
        "fa-spin-pulse": spinPulse,
        "fa-pulse": pulse,
        "fa-fw": fixedWidth,
        "fa-inverse": inverse,
        "fa-border": border2,
        "fa-li": listItem,
        "fa-flip": flip === true,
        "fa-flip-horizontal": flip === "horizontal" || flip === "both",
        "fa-flip-vertical": flip === "vertical" || flip === "both"
      }, _defineProperty(_classes, "fa-".concat(size), typeof size !== "undefined" && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== "undefined" && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== "undefined" && pull !== null), _defineProperty(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
      return Object.keys(classes).map(function(key) {
        return classes[key] ? key : null;
      }).filter(function(key) {
        return key;
      });
    }
    function _isNumerical(obj) {
      obj = obj - 0;
      return obj === obj;
    }
    function camelize(string) {
      if (_isNumerical(string)) {
        return string;
      }
      string = string.replace(/[\-_\s]+(.)?/g, function(match5, chr) {
        return chr ? chr.toUpperCase() : "";
      });
      return string.substr(0, 1).toLowerCase() + string.substr(1);
    }
    var _excluded = ["style"];
    function capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
    function styleToObject(style2) {
      return style2.split(";").map(function(s) {
        return s.trim();
      }).filter(function(s) {
        return s;
      }).reduce(function(acc, pair) {
        var i = pair.indexOf(":");
        var prop = camelize(pair.slice(0, i));
        var value = pair.slice(i + 1).trim();
        prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value;
        return acc;
      }, {});
    }
    function convert(createElement2, element) {
      var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof element === "string") {
        return element;
      }
      var children = (element.children || []).map(function(child) {
        return convert(createElement2, child);
      });
      var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
        var val = element.attributes[key];
        switch (key) {
          case "class":
            acc.attrs["className"] = val;
            delete element.attributes["class"];
            break;
          case "style":
            acc.attrs["style"] = styleToObject(val);
            break;
          default:
            if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
              acc.attrs[key.toLowerCase()] = val;
            } else {
              acc.attrs[camelize(key)] = val;
            }
        }
        return acc;
      }, {
        attrs: {}
      });
      var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, _excluded);
      mixins.attrs["style"] = _objectSpread2(_objectSpread2({}, mixins.attrs["style"]), existingStyle);
      return createElement2.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
    }
    var PRODUCTION = false;
    try {
      PRODUCTION = true;
    } catch (e2) {
    }
    function log() {
      if (!PRODUCTION && console && typeof console.error === "function") {
        var _console;
        (_console = console).error.apply(_console, arguments);
      }
    }
    function normalizeIconArgs(icon2) {
      if (icon2 && _typeof(icon2) === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
        return icon2;
      }
      if (parse$1.icon) {
        return parse$1.icon(icon2);
      }
      if (icon2 === null) {
        return null;
      }
      if (icon2 && _typeof(icon2) === "object" && icon2.prefix && icon2.iconName) {
        return icon2;
      }
      if (Array.isArray(icon2) && icon2.length === 2) {
        return {
          prefix: icon2[0],
          iconName: icon2[1]
        };
      }
      if (typeof icon2 === "string") {
        return {
          prefix: "fas",
          iconName: icon2
        };
      }
    }
    function objectWithKey(key, value) {
      return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
    }
    var FontAwesomeIcon = /* @__PURE__ */ React$1.forwardRef(function(props, ref) {
      var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title = props.title, titleId = props.titleId, maskId = props.maskId;
      var iconLookup = normalizeIconArgs(iconArgs);
      var classes = objectWithKey("classes", [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(" "))));
      var transform = objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
      var mask = objectWithKey("mask", normalizeIconArgs(maskArgs));
      var renderedIcon = icon(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
        symbol,
        title,
        titleId,
        maskId
      }));
      if (!renderedIcon) {
        log("Could not find icon", iconLookup);
        return null;
      }
      var abstract = renderedIcon.abstract;
      var extraProps = {
        ref
      };
      Object.keys(props).forEach(function(key) {
        if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
          extraProps[key] = props[key];
        }
      });
      return convertCurry(abstract[0], extraProps);
    });
    FontAwesomeIcon.displayName = "FontAwesomeIcon";
    FontAwesomeIcon.propTypes = {
      beat: propTypesExports.bool,
      border: propTypesExports.bool,
      beatFade: propTypesExports.bool,
      bounce: propTypesExports.bool,
      className: propTypesExports.string,
      fade: propTypesExports.bool,
      flash: propTypesExports.bool,
      mask: propTypesExports.oneOfType([propTypesExports.object, propTypesExports.array, propTypesExports.string]),
      maskId: propTypesExports.string,
      fixedWidth: propTypesExports.bool,
      inverse: propTypesExports.bool,
      flip: propTypesExports.oneOf([true, false, "horizontal", "vertical", "both"]),
      icon: propTypesExports.oneOfType([propTypesExports.object, propTypesExports.array, propTypesExports.string]),
      listItem: propTypesExports.bool,
      pull: propTypesExports.oneOf(["right", "left"]),
      pulse: propTypesExports.bool,
      rotation: propTypesExports.oneOf([0, 90, 180, 270]),
      shake: propTypesExports.bool,
      size: propTypesExports.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: propTypesExports.bool,
      spinPulse: propTypesExports.bool,
      spinReverse: propTypesExports.bool,
      symbol: propTypesExports.oneOfType([propTypesExports.bool, propTypesExports.string]),
      title: propTypesExports.string,
      titleId: propTypesExports.string,
      transform: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.object]),
      swapOpacity: propTypesExports.bool
    };
    FontAwesomeIcon.defaultProps = {
      border: false,
      className: "",
      mask: null,
      maskId: null,
      fixedWidth: false,
      inverse: false,
      flip: false,
      icon: null,
      listItem: false,
      pull: null,
      pulse: false,
      rotation: null,
      size: null,
      spin: false,
      spinPulse: false,
      spinReverse: false,
      beat: false,
      fade: false,
      beatFade: false,
      bounce: false,
      shake: false,
      symbol: false,
      title: "",
      titleId: null,
      transform: null,
      swapOpacity: false
    };
    var convertCurry = convert.bind(null, React$1.createElement);
    var faBox = {
      prefix: "fas",
      iconName: "box",
      icon: [448, 512, [128230], "f466", "M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"]
    };
    var faTrash = {
      prefix: "fas",
      iconName: "trash",
      icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
    };
    var faCircleInfo = {
      prefix: "fas",
      iconName: "circle-info",
      icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
    };
    var faMinus = {
      prefix: "fas",
      iconName: "minus",
      icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
    };
    var faBoxesStacked = {
      prefix: "fas",
      iconName: "boxes-stacked",
      icon: [576, 512, [62625, "boxes", "boxes-alt"], "f468", "M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"]
    };
    var faMagnifyingGlass = {
      prefix: "fas",
      iconName: "magnifying-glass",
      icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
    };
    var faPlus = {
      prefix: "fas",
      iconName: "plus",
      icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
    };
    var faXmark = {
      prefix: "fas",
      iconName: "xmark",
      icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
    };
    function ProductDisplayReceipt(props) {
      const { product, handleReduceProductAmount } = props;
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "product-display-receipt-wrapper flex justify-start", children: [
        /* @__PURE__ */ jsx("div", { className: "product-display-receipt-delete", children: /* @__PURE__ */ jsx(
          FontAwesomeIcon,
          {
            icon: faMinus,
            className: "product-display-receipt-icon-minus",
            onClick: () => {
              handleReduceProductAmount(product);
            }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "product-display-receipt-main-cont", children: [
          /* @__PURE__ */ jsx("div", { className: "product-display-receipt-name", children: /* @__PURE__ */ jsxs("p", { className: "text-VariationTitleSmall", children: [
            product.ProductName,
            /* @__PURE__ */ jsx("br", {}),
            product.VariationName
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "product-display-receipt-price", children: /* @__PURE__ */ jsxs("p", { className: "text-VariationTitle", children: [
            product.Price,
            " dkk"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(
          "p",
          {
            className: "text-VariationTitle font-bold block ml-2 px-2 py-1 bg-white border-white border-slate-300 rounded-sm shadow-md\r\n            focus:outline-none relative",
            children: [
              "x",
              product.qty
            ]
          }
        ) })
      ] }) });
    }
    function KitReceipt(props) {
      const {
        cartProducts,
        funcs: { reduceProductAmount },
        total
      } = reactExports.useContext(ShoppingCartFunc);
      const handleReduceProductAmount = (product) => {
        reduceProductAmount(product);
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "separate-product-receipt-wrapper block px-4 py-6 mt-14 pb-56 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl ", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-total text-TextMid text-primary-color", children: "Kit" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary-color font-bold text-ProductTitleSmall mr-4 -mb-8", children: "Ex VAT" }),
          /* @__PURE__ */ jsx("p", { className: "ReceiptPriceL text-TextBig text-primary-color", children: total.toFixed(2) }),
          /* @__PURE__ */ jsx("p", { className: "text-primary-color font-bold text-ProductTitleSmall\r\n                   px-4 py-2 bg-white border-white border-slate-300 rounded-xl\r\n                  shadow-xl focus:outline-none ml-4", children: "DKK." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "line line-3 mt-1.5" }),
        /* @__PURE__ */ jsxs("div", { className: "product-receipt-products-display-section", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-cardText text-primary-color mt-4 mr-40", children: "Products:" }),
          /* @__PURE__ */ jsx("div", { className: "scroll-section", children: cartProducts.map(
            (product) => product.qty && product.variationQty !== 0 ? /* @__PURE__ */ jsx(
              ProductDisplayReceipt,
              {
                product,
                handleReduceProductAmount
              },
              product.productBaksetUnqKey
            ) : ""
          ) }),
          /* @__PURE__ */ jsx("div", { className: "line line-3" })
        ] }),
        props.children
      ] }) });
    }
    //! moment.js
    //! version : 2.29.4
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var hookCallback;
    function hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
    }
    function isObject(input) {
      return input != null && Object.prototype.toString.call(input) === "[object Object]";
    }
    function hasOwnProp(a, b2) {
      return Object.prototype.hasOwnProperty.call(a, b2);
    }
    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k2;
        for (k2 in obj) {
          if (hasOwnProp(obj, k2)) {
            return false;
          }
        }
        return true;
      }
    }
    function isUndefined(input) {
      return input === void 0;
    }
    function isNumber(input) {
      return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
    }
    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
      var res = [], i, arrLen = arr.length;
      for (i = 0; i < arrLen; ++i) {
        res.push(fn(arr[i], i));
      }
      return res;
    }
    function extend(a, b2) {
      for (var i in b2) {
        if (hasOwnProp(b2, i)) {
          a[i] = b2[i];
        }
      }
      if (hasOwnProp(b2, "toString")) {
        a.toString = b2.toString;
      }
      if (hasOwnProp(b2, "valueOf")) {
        a.valueOf = b2.valueOf;
      }
      return a;
    }
    function createUTC(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }
    function getParsingFlags(m2) {
      if (m2._pf == null) {
        m2._pf = defaultParsingFlags();
      }
      return m2._pf;
    }
    var some;
    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function(fun) {
        var t2 = Object(this), len = t2.length >>> 0, i;
        for (i = 0; i < len; i++) {
          if (i in t2 && fun.call(this, t2[i], i, t2)) {
            return true;
          }
        }
        return false;
      };
    }
    function isValid(m2) {
      if (m2._isValid == null) {
        var flags = getParsingFlags(m2), parsedParts = some.call(flags.parsedDateParts, function(i) {
          return i != null;
        }), isNowValid = !isNaN(m2._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
        if (m2._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
        }
        if (Object.isFrozen == null || !Object.isFrozen(m2)) {
          m2._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }
      return m2._isValid;
    }
    function createInvalid(flags) {
      var m2 = createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m2), flags);
      } else {
        getParsingFlags(m2).userInvalidated = true;
      }
      return m2;
    }
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to2, from2) {
      var i, prop, val, momentPropertiesLen = momentProperties.length;
      if (!isUndefined(from2._isAMomentObject)) {
        to2._isAMomentObject = from2._isAMomentObject;
      }
      if (!isUndefined(from2._i)) {
        to2._i = from2._i;
      }
      if (!isUndefined(from2._f)) {
        to2._f = from2._f;
      }
      if (!isUndefined(from2._l)) {
        to2._l = from2._l;
      }
      if (!isUndefined(from2._strict)) {
        to2._strict = from2._strict;
      }
      if (!isUndefined(from2._tzm)) {
        to2._tzm = from2._tzm;
      }
      if (!isUndefined(from2._isUTC)) {
        to2._isUTC = from2._isUTC;
      }
      if (!isUndefined(from2._offset)) {
        to2._offset = from2._offset;
      }
      if (!isUndefined(from2._pf)) {
        to2._pf = getParsingFlags(from2);
      }
      if (!isUndefined(from2._locale)) {
        to2._locale = from2._locale;
      }
      if (momentPropertiesLen > 0) {
        for (i = 0; i < momentPropertiesLen; i++) {
          prop = momentProperties[i];
          val = from2[prop];
          if (!isUndefined(val)) {
            to2[prop] = val;
          }
        }
      }
      return to2;
    }
    function Moment(config2) {
      copyConfig(this, config2);
      this._d = new Date(config2._d != null ? config2._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = new Date(NaN);
      }
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
        console.warn("Deprecation warning: " + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [], arg, i, key, argLen = arguments.length;
          for (i = 0; i < argLen; i++) {
            arg = "";
            if (typeof arguments[i] === "object") {
              arg += "\n[" + i + "] ";
              for (key in arguments[0]) {
                if (hasOwnProp(arguments[0], key)) {
                  arg += key + ": " + arguments[0][key] + ", ";
                }
              }
              arg = arg.slice(0, -2);
            } else {
              arg = arguments[i];
            }
            args.push(arg);
          }
          warn(
            msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
          );
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
      return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
    }
    function set(config2) {
      var prop, i;
      for (i in config2) {
        if (hasOwnProp(config2, i)) {
          prop = config2[i];
          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this["_" + i] = prop;
          }
        }
      }
      this._config = config2;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }
      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          res[prop] = extend({}, res[prop]);
        }
      }
      return res;
    }
    function Locale(config2) {
      if (config2 != null) {
        this.set(config2);
      }
    }
    var keys;
    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function(obj) {
        var i, res = [];
        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }
        return res;
      };
    }
    var defaultCalendar = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function calendar(key, mom, now2) {
      var output = this._calendar[key] || this._calendar["sameElse"];
      return isFunction(output) ? output.call(mom, now2) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
      return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    function addFormatToken(token2, padded, ordinal2, callback) {
      var func = callback;
      if (typeof callback === "string") {
        func = function() {
          return this[callback]();
        };
      }
      if (token2) {
        formatTokenFunctions[token2] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal2) {
        formatTokenFunctions[ordinal2] = function() {
          return this.localeData().ordinal(
            func.apply(this, arguments),
            token2
          );
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format2) {
      var array = format2.match(formattingTokens), i, length2;
      for (i = 0, length2 = array.length; i < length2; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = "", i2;
        for (i2 = 0; i2 < length2; i2++) {
          output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
        }
        return output;
      };
    }
    function formatMoment(m2, format2) {
      if (!m2.isValid()) {
        return m2.localeData().invalidDate();
      }
      format2 = expandFormat(format2, m2.localeData());
      formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
      return formatFunctions[format2](m2);
    }
    function expandFormat(format2, locale2) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return locale2.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format2)) {
        format2 = format2.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }
      return format2;
    }
    var defaultLongDateFormat = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function longDateFormat(key) {
      var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
      if (format2 || !formatUpper) {
        return format2;
      }
      this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
        if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
          return tok.slice(1);
        }
        return tok;
      }).join("");
      return this._longDateFormat[key];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff2, output) {
      var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
      return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
      return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {}, normalizedProp, prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    var priorities = {};
    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
      var units = [], u2;
      for (u2 in unitsObj) {
        if (hasOwnProp(unitsObj, u2)) {
          units.push({ unit: u2, priority: priorities[u2] });
        }
      }
      units.sort(function(a, b2) {
        return a.priority - b2.priority;
      });
      return units;
    }
    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion, value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }
      return value;
    }
    function makeGetSet(unit, keepTime) {
      return function(value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }
    function get(mom, unit) {
      return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
          value = toInt(value);
          mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
            value,
            mom.month(),
            daysInMonth(value, mom.month())
          );
        } else {
          mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
        }
      }
    }
    function stringGet(units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units]();
      }
      return this;
    }
    function stringSet(units, value) {
      if (typeof units === "object") {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
        for (i = 0; i < prioritizedLen; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value);
        }
      }
      return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {};
    function addRegexToken(token2, regex, strictRegex) {
      regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }
    function getParseRegexForToken(token2, config2) {
      if (!hasOwnProp(regexes, token2)) {
        return new RegExp(unescapeFormat(token2));
      }
      return regexes[token2](config2._strict, config2._locale);
    }
    function unescapeFormat(s) {
      return regexEscape(
        s.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }
        )
      );
    }
    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var tokens = {};
    function addParseToken(token2, callback) {
      var i, func = callback, tokenLen;
      if (typeof token2 === "string") {
        token2 = [token2];
      }
      if (isNumber(callback)) {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      tokenLen = token2.length;
      for (i = 0; i < tokenLen; i++) {
        tokens[token2[i]] = func;
      }
    }
    function addWeekParseToken(token2, callback) {
      addParseToken(token2, function(input, array, config2, token3) {
        config2._w = config2._w || {};
        callback(input, config2._w, config2, token3);
      });
    }
    function addTimeToArrayFromToken(token2, input, config2) {
      if (input != null && hasOwnProp(tokens, token2)) {
        tokens[token2](input, config2._a, config2, token2);
      }
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n2, x2) {
      return (n2 % x2 + x2) % x2;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(o) {
        var i;
        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }
        return -1;
      };
    }
    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    addFormatToken("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format2) {
      return this.localeData().monthsShort(this, format2);
    });
    addFormatToken("MMMM", 0, 0, function(format2) {
      return this.localeData().months(this, format2);
    });
    addUnitAlias("month", "M");
    addUnitPriority("month", 8);
    addRegexToken("M", match1to2);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale2) {
      return locale2.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function(isStrict, locale2) {
      return locale2.monthsRegex(isStrict);
    });
    addParseToken(["M", "MM"], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(["MMM", "MMMM"], function(input, array, config2, token2) {
      var month = config2._locale.monthsParse(input, token2, config2._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config2).invalidMonth = input;
      }
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m2, format2) {
      if (!m2) {
        return isArray(this._months) ? this._months : this._months["standalone"];
      }
      return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
    }
    function localeMonthsShort(m2, format2) {
      if (!m2) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
    }
    function handleStrictParse(monthName, format2, strict) {
      var i, ii2, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
          mom = createUTC([2e3, i]);
          this._shortMonthsParse[i] = this.monthsShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeMonthsParse(monthName, format2, strict) {
      var i, mom, regex;
      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format2, strict);
      }
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp(
            "^" + this.months(mom, "").replace(".", "") + "$",
            "i"
          );
          this._shortMonthsParse[i] = new RegExp(
            "^" + this.monthsShort(mom, "").replace(".", "") + "$",
            "i"
          );
        }
        if (!strict && !this._monthsParse[i]) {
          regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
          this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    }
    function setMonth(mom, value) {
      var dayOfMonth;
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value === "string") {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value);
          if (!isNumber(value)) {
            return mom;
          }
        }
      }
      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
      return mom;
    }
    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, "Month");
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsShortRegex")) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsRegex")) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a, b2) {
        return b2.length - a.length;
      }
      var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        shortPieces.push(this.monthsShort(mom, ""));
        longPieces.push(this.months(mom, ""));
        mixedPieces.push(this.months(mom, ""));
        mixedPieces.push(this.monthsShort(mom, ""));
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }
      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }
      this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._monthsShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken("Y", 0, 0, function() {
      var y2 = this.year();
      return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
    });
    addFormatToken(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addUnitAlias("year", "y");
    addUnitPriority("year", 1);
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function(input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function(input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function createDate(y2, m2, d2, h2, M2, s, ms) {
      var date;
      if (y2 < 100 && y2 >= 0) {
        date = new Date(y2 + 400, m2, d2, h2, M2, s, ms);
        if (isFinite(date.getFullYear())) {
          date.setFullYear(y2);
        }
      } else {
        date = new Date(y2, m2, d2, h2, M2, s, ms);
      }
      return date;
    }
    function createUTCDate(y2) {
      var date, args;
      if (y2 < 100 && y2 >= 0) {
        args = Array.prototype.slice.call(arguments);
        args[0] = y2 + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y2);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }
      return date;
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addUnitAlias("week", "w");
    addUnitAlias("isoWeek", "W");
    addUnitPriority("week", 5);
    addUnitPriority("isoWeek", 5);
    addRegexToken("w", match1to2);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(
      ["w", "ww", "W", "WW"],
      function(input, week, config2, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      }
    );
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format2) {
      return this.localeData().weekdaysMin(this, format2);
    });
    addFormatToken("ddd", 0, 0, function(format2) {
      return this.localeData().weekdaysShort(this, format2);
    });
    addFormatToken("dddd", 0, 0, function(format2) {
      return this.localeData().weekdays(this, format2);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addUnitAlias("day", "d");
    addUnitAlias("weekday", "e");
    addUnitAlias("isoWeekday", "E");
    addUnitPriority("day", 11);
    addUnitPriority("weekday", 11);
    addUnitPriority("isoWeekday", 11);
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale2) {
      return locale2.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function(isStrict, locale2) {
      return locale2.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function(isStrict, locale2) {
      return locale2.weekdaysRegex(isStrict);
    });
    addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config2, token2) {
      var weekday = config2._locale.weekdaysParse(input, token2, config2._strict);
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config2).invalidWeekday = input;
      }
    });
    addWeekParseToken(["d", "e", "E"], function(input, week, config2, token2) {
      week[token2] = toInt(input);
    });
    function parseWeekday(input, locale2) {
      if (typeof input !== "string") {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale2.weekdaysParse(input);
      if (typeof input === "number") {
        return input;
      }
      return null;
    }
    function parseIsoWeekday(input, locale2) {
      if (typeof input === "string") {
        return locale2.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }
    function shiftWeekdays(ws, n2) {
      return ws.slice(n2, 7).concat(ws.slice(0, n2));
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m2, format2) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
      return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
    }
    function localeWeekdaysShort(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format2, strict) {
      var i, ii2, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];
        for (i = 0; i < 7; ++i) {
          mom = createUTC([2e3, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(
            mom,
            ""
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeWeekdaysParse(weekdayName, format2, strict) {
      var i, mom, regex;
      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format2, strict);
      }
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp(
            "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._shortWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._minWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
        }
        if (!this._weekdaysParse[i]) {
          regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
          this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, "d");
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysShortRegex")) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysMinRegex")) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }
    function computeWeekdaysParse() {
      function cmpLenRev(a, b2) {
        return b2.length - a.length;
      }
      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        minp = regexEscape(this.weekdaysMin(mom, ""));
        shortp = regexEscape(this.weekdaysShort(mom, ""));
        longp = regexEscape(this.weekdays(mom, ""));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp(
        "^(" + minPieces.join("|") + ")",
        "i"
      );
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    function kFormat() {
      return this.hours() || 24;
    }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken("Hmm", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token2, lowercase) {
      addFormatToken(token2, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase
        );
      });
    }
    meridiem("a", true);
    meridiem("A", false);
    addUnitAlias("hour", "h");
    addUnitPriority("hour", 13);
    function matchMeridiem(isStrict, locale2) {
      return locale2._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2);
    addRegexToken("h", match1to2);
    addRegexToken("k", match1to2);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function(input, array, config2) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function(input, array, config2) {
      config2._isPm = config2._locale.isPM(input);
      config2._meridiem = input;
    });
    addParseToken(["h", "hh"], function(input, array, config2) {
      array[HOUR] = toInt(input);
      getParsingFlags(config2).bigHour = true;
    });
    addParseToken("hmm", function(input, array, config2) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config2).bigHour = true;
    });
    addParseToken("hmmss", function(input, array, config2) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config2).bigHour = true;
    });
    addParseToken("Hmm", function(input, array, config2) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function(input, array, config2) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours2, minutes2, isLower) {
      if (hours2 > 11) {
        return isLower ? "pm" : "PM";
      } else {
        return isLower ? "am" : "AM";
      }
    }
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    };
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
      var i, minl = Math.min(arr1.length, arr2.length);
      for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }
      return minl;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names) {
      var i = 0, j, next2, locale2, split;
      while (i < names.length) {
        split = normalizeLocale(names[i]).split("-");
        j = split.length;
        next2 = normalizeLocale(names[i + 1]);
        next2 = next2 ? next2.split("-") : null;
        while (j > 0) {
          locale2 = loadLocale(split.slice(0, j).join("-"));
          if (locale2) {
            return locale2;
          }
          if (next2 && next2.length >= j && commonPrefix(split, next2) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return globalLocale;
    }
    function isLocaleNameSane(name) {
      return name.match("^[^/\\\\]*$") != null;
    }
    function loadLocale(name) {
      var oldLocale = null, aliasedRequire;
      if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale(oldLocale);
        } catch (e2) {
          locales[name] = null;
        }
      }
      return locales[name];
    }
    function getSetGlobalLocale(key, values2) {
      var data;
      if (key) {
        if (isUndefined(values2)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values2);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              "Locale " + key + " not found. Did you forget to load it?"
            );
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, config2) {
      if (config2 !== null) {
        var locale2, parentConfig = baseConfig;
        config2.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          );
          parentConfig = locales[name]._config;
        } else if (config2.parentLocale != null) {
          if (locales[config2.parentLocale] != null) {
            parentConfig = locales[config2.parentLocale]._config;
          } else {
            locale2 = loadLocale(config2.parentLocale);
            if (locale2 != null) {
              parentConfig = locale2._config;
            } else {
              if (!localeFamilies[config2.parentLocale]) {
                localeFamilies[config2.parentLocale] = [];
              }
              localeFamilies[config2.parentLocale].push({
                name,
                config: config2
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config2));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x2) {
            defineLocale(x2.name, x2.config);
          });
        }
        getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function updateLocale(name, config2) {
      if (config2 != null) {
        var locale2, tmpLocale, parentConfig = baseConfig;
        if (locales[name] != null && locales[name].parentLocale != null) {
          locales[name].set(mergeConfigs(locales[name]._config, config2));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config2 = mergeConfigs(parentConfig, config2);
          if (tmpLocale == null) {
            config2.abbr = name;
          }
          locale2 = new Locale(config2);
          locale2.parentLocale = locales[name];
          locales[name] = locale2;
        }
        getSetGlobalLocale(name);
      } else {
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }
    function getLocale(key) {
      var locale2;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray(key)) {
        locale2 = loadLocale(key);
        if (locale2) {
          return locale2;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    function listLocales() {
      return keys(locales);
    }
    function checkOverflow(m2) {
      var overflow, a = m2._a;
      if (a && getParsingFlags(m2).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m2).overflow = overflow;
      }
      return m2;
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, false],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, false],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, false],
      ["YYYY", /\d{4}/, false]
    ], isoTimes = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function configFromISO(config2) {
      var i, l2, string = config2._i, match5 = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
      if (match5) {
        getParsingFlags(config2).iso = true;
        for (i = 0, l2 = isoDatesLen; i < l2; i++) {
          if (isoDates[i][1].exec(match5[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config2._isValid = false;
          return;
        }
        if (match5[3]) {
          for (i = 0, l2 = isoTimesLen; i < l2; i++) {
            if (isoTimes[i][1].exec(match5[3])) {
              timeFormat = (match5[2] || " ") + isoTimes[i][0];
              break;
            }
          }
          if (timeFormat == null) {
            config2._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config2._isValid = false;
          return;
        }
        if (match5[4]) {
          if (tzRegex.exec(match5[4])) {
            tzFormat = "Z";
          } else {
            config2._isValid = false;
            return;
          }
        }
        config2._f = dateFormat + (timeFormat || "") + (tzFormat || "");
        configFromStringAndFormat(config2);
      } else {
        config2._isValid = false;
      }
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
      ];
      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }
      return result;
    }
    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2e3 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }
    function preprocessRFC2822(s) {
      return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config2) {
      if (weekdayStr) {
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
          parsedInput[0],
          parsedInput[1],
          parsedInput[2]
        ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config2).weekdayMismatch = true;
          config2._isValid = false;
          return false;
        }
      }
      return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        return 0;
      } else {
        var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
        return h2 * 60 + m2;
      }
    }
    function configFromRFC2822(config2) {
      var match5 = rfc2822.exec(preprocessRFC2822(config2._i)), parsedArray;
      if (match5) {
        parsedArray = extractFromRFC2822Strings(
          match5[4],
          match5[3],
          match5[2],
          match5[5],
          match5[6],
          match5[7]
        );
        if (!checkWeekday(match5[1], parsedArray, config2)) {
          return;
        }
        config2._a = parsedArray;
        config2._tzm = calculateOffset(match5[8], match5[9], match5[10]);
        config2._d = createUTCDate.apply(null, config2._a);
        config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
        getParsingFlags(config2).rfc2822 = true;
      } else {
        config2._isValid = false;
      }
    }
    function configFromString(config2) {
      var matched = aspNetJsonRegex.exec(config2._i);
      if (matched !== null) {
        config2._d = new Date(+matched[1]);
        return;
      }
      configFromISO(config2);
      if (config2._isValid === false) {
        delete config2._isValid;
      } else {
        return;
      }
      configFromRFC2822(config2);
      if (config2._isValid === false) {
        delete config2._isValid;
      } else {
        return;
      }
      if (config2._strict) {
        config2._isValid = false;
      } else {
        hooks.createFromInputFallback(config2);
      }
    }
    hooks.createFromInputFallback = deprecate(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(config2) {
        config2._d = new Date(config2._i + (config2._useUTC ? " UTC" : ""));
      }
    );
    function defaults(a, b2, c2) {
      if (a != null) {
        return a;
      }
      if (b2 != null) {
        return b2;
      }
      return c2;
    }
    function currentDateArray(config2) {
      var nowValue = new Date(hooks.now());
      if (config2._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate()
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config2) {
      var i, date, input = [], currentDate, expectedWeekday, yearToUse;
      if (config2._d) {
        return;
      }
      currentDate = currentDateArray(config2);
      if (config2._w && config2._a[DATE] == null && config2._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config2);
      }
      if (config2._dayOfYear != null) {
        yearToUse = defaults(config2._a[YEAR], currentDate[YEAR]);
        if (config2._dayOfYear > daysInYear(yearToUse) || config2._dayOfYear === 0) {
          getParsingFlags(config2)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config2._dayOfYear);
        config2._a[MONTH] = date.getUTCMonth();
        config2._a[DATE] = date.getUTCDate();
      }
      for (i = 0; i < 3 && config2._a[i] == null; ++i) {
        config2._a[i] = input[i] = currentDate[i];
      }
      for (; i < 7; i++) {
        config2._a[i] = input[i] = config2._a[i] == null ? i === 2 ? 1 : 0 : config2._a[i];
      }
      if (config2._a[HOUR] === 24 && config2._a[MINUTE] === 0 && config2._a[SECOND] === 0 && config2._a[MILLISECOND] === 0) {
        config2._nextDay = true;
        config2._a[HOUR] = 0;
      }
      config2._d = (config2._useUTC ? createUTCDate : createDate).apply(
        null,
        input
      );
      expectedWeekday = config2._useUTC ? config2._d.getUTCDay() : config2._d.getDay();
      if (config2._tzm != null) {
        config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
      }
      if (config2._nextDay) {
        config2._a[HOUR] = 24;
      }
      if (config2._w && typeof config2._w.d !== "undefined" && config2._w.d !== expectedWeekday) {
        getParsingFlags(config2).weekdayMismatch = true;
      }
    }
    function dayOfYearFromWeekInfo(config2) {
      var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w2 = config2._w;
      if (w2.GG != null || w2.W != null || w2.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(
          w2.GG,
          config2._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year
        );
        week = defaults(w2.W, 1);
        weekday = defaults(w2.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config2._locale._week.dow;
        doy = config2._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w2.gg, config2._a[YEAR], curWeek.year);
        week = defaults(w2.w, curWeek.week);
        if (w2.d != null) {
          weekday = w2.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w2.e != null) {
          weekday = w2.e + dow;
          if (w2.e < 0 || w2.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config2)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config2)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config2._a[YEAR] = temp.year;
        config2._dayOfYear = temp.dayOfYear;
      }
    }
    hooks.ISO_8601 = function() {
    };
    hooks.RFC_2822 = function() {
    };
    function configFromStringAndFormat(config2) {
      if (config2._f === hooks.ISO_8601) {
        configFromISO(config2);
        return;
      }
      if (config2._f === hooks.RFC_2822) {
        configFromRFC2822(config2);
        return;
      }
      config2._a = [];
      getParsingFlags(config2).empty = true;
      var string = "" + config2._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
      tokens2 = expandFormat(config2._f, config2._locale).match(formattingTokens) || [];
      tokenLen = tokens2.length;
      for (i = 0; i < tokenLen; i++) {
        token2 = tokens2[i];
        parsedInput = (string.match(getParseRegexForToken(token2, config2)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config2).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length
          );
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token2]) {
          if (parsedInput) {
            getParsingFlags(config2).empty = false;
          } else {
            getParsingFlags(config2).unusedTokens.push(token2);
          }
          addTimeToArrayFromToken(token2, parsedInput, config2);
        } else if (config2._strict && !parsedInput) {
          getParsingFlags(config2).unusedTokens.push(token2);
        }
      }
      getParsingFlags(config2).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config2).unusedInput.push(string);
      }
      if (config2._a[HOUR] <= 12 && getParsingFlags(config2).bigHour === true && config2._a[HOUR] > 0) {
        getParsingFlags(config2).bigHour = void 0;
      }
      getParsingFlags(config2).parsedDateParts = config2._a.slice(0);
      getParsingFlags(config2).meridiem = config2._meridiem;
      config2._a[HOUR] = meridiemFixWrap(
        config2._locale,
        config2._a[HOUR],
        config2._meridiem
      );
      era = getParsingFlags(config2).era;
      if (era !== null) {
        config2._a[YEAR] = config2._locale.erasConvertYear(era, config2._a[YEAR]);
      }
      configFromArray(config2);
      checkOverflow(config2);
    }
    function meridiemFixWrap(locale2, hour, meridiem2) {
      var isPm;
      if (meridiem2 == null) {
        return hour;
      }
      if (locale2.meridiemHour != null) {
        return locale2.meridiemHour(hour, meridiem2);
      } else if (locale2.isPM != null) {
        isPm = locale2.isPM(meridiem2);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config2) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config2._f.length;
      if (configfLen === 0) {
        getParsingFlags(config2).invalidFormat = true;
        config2._d = new Date(NaN);
        return;
      }
      for (i = 0; i < configfLen; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config2);
        if (config2._useUTC != null) {
          tempConfig._useUTC = config2._useUTC;
        }
        tempConfig._f = config2._f[i];
        configFromStringAndFormat(tempConfig);
        if (isValid(tempConfig)) {
          validFormatFound = true;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (!bestFormatIsValid) {
          if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }
      extend(config2, bestMoment || tempConfig);
    }
    function configFromObject(config2) {
      if (config2._d) {
        return;
      }
      var i = normalizeObjectUnits(config2._i), dayOrDate = i.day === void 0 ? i.date : i.day;
      config2._a = map(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function(obj) {
          return obj && parseInt(obj, 10);
        }
      );
      configFromArray(config2);
    }
    function createFromConfig(config2) {
      var res = new Moment(checkOverflow(prepareConfig(config2)));
      if (res._nextDay) {
        res.add(1, "d");
        res._nextDay = void 0;
      }
      return res;
    }
    function prepareConfig(config2) {
      var input = config2._i, format2 = config2._f;
      config2._locale = config2._locale || getLocale(config2._l);
      if (input === null || format2 === void 0 && input === "") {
        return createInvalid({ nullInput: true });
      }
      if (typeof input === "string") {
        config2._i = input = config2._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config2._d = input;
      } else if (isArray(format2)) {
        configFromStringAndArray(config2);
      } else if (format2) {
        configFromStringAndFormat(config2);
      } else {
        configFromInput(config2);
      }
      if (!isValid(config2)) {
        config2._d = null;
      }
      return config2;
    }
    function configFromInput(config2) {
      var input = config2._i;
      if (isUndefined(input)) {
        config2._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config2._d = new Date(input.valueOf());
      } else if (typeof input === "string") {
        configFromString(config2);
      } else if (isArray(input)) {
        config2._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config2);
      } else if (isObject(input)) {
        configFromObject(config2);
      } else if (isNumber(input)) {
        config2._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config2);
      }
    }
    function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
      var c2 = {};
      if (format2 === true || format2 === false) {
        strict = format2;
        format2 = void 0;
      }
      if (locale2 === true || locale2 === false) {
        strict = locale2;
        locale2 = void 0;
      }
      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = void 0;
      }
      c2._isAMomentObject = true;
      c2._useUTC = c2._isUTC = isUTC;
      c2._l = locale2;
      c2._i = input;
      c2._f = format2;
      c2._strict = strict;
      return createFromConfig(c2);
    }
    function createLocal(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, false);
    }
    var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }
    ), prototypeMax = deprecate(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }
    );
    function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isBefore", args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isAfter", args);
    }
    var now = function() {
      return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function isDurationValid(m2) {
      var key, unitHasDecimal = false, i, orderLen = ordering.length;
      for (key in m2) {
        if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
          return false;
        }
      }
      for (i = 0; i < orderLen; ++i) {
        if (m2[ordering[i]]) {
          if (unitHasDecimal) {
            return false;
          }
          if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }
      return true;
    }
    function isValid$1() {
      return this._isValid;
    }
    function createInvalid$1() {
      return createDuration(NaN);
    }
    function Duration(duration2) {
      var normalizedInput = normalizeObjectUnits(duration2), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput);
      this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
      minutes2 * 6e4 + // 1000 * 60
      hours2 * 1e3 * 60 * 60;
      this._days = +days2 + weeks2 * 7;
      this._months = +months2 + quarters * 3 + years2 * 12;
      this._data = {};
      this._locale = getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function offset(token2, separator) {
      addFormatToken(token2, 0, 0, function() {
        var offset2 = this.utcOffset(), sign2 = "+";
        if (offset2 < 0) {
          offset2 = -offset2;
          sign2 = "-";
        }
        return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
      });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function(input, array, config2) {
      config2._useUTC = true;
      config2._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = (string || "").match(matcher), chunk, parts, minutes2;
      if (matches === null) {
        return null;
      }
      chunk = matches[matches.length - 1] || [];
      parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
      minutes2 = +(parts[1] * 60) + toInt(parts[2]);
      return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
    }
    function cloneWithOffset(input, model) {
      var res, diff2;
      if (model._isUTC) {
        res = model.clone();
        diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        res._d.setTime(res._d.valueOf() + diff2);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }
    function getDateOffset(m2) {
      return -Math.round(m2._d.getTimezoneOffset());
    }
    hooks.updateOffset = function() {
    };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset2 = this._offset || 0, localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === "string") {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, "m");
        }
        if (offset2 !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(
              this,
              createDuration(input - offset2, "m"),
              1,
              false
            );
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset2 : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== "string") {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), "m");
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === "string") {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c2 = {}, other;
      copyConfig(c2, this);
      c2 = prepareConfig(c2);
      if (c2._a) {
        other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
        this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
      var duration2 = input, match5 = null, sign2, ret, diffRes;
      if (isDuration(input)) {
        duration2 = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration2 = {};
        if (key) {
          duration2[key] = +input;
        } else {
          duration2.milliseconds = +input;
        }
      } else if (match5 = aspNetRegex.exec(input)) {
        sign2 = match5[1] === "-" ? -1 : 1;
        duration2 = {
          y: 0,
          d: toInt(match5[DATE]) * sign2,
          h: toInt(match5[HOUR]) * sign2,
          m: toInt(match5[MINUTE]) * sign2,
          s: toInt(match5[SECOND]) * sign2,
          ms: toInt(absRound(match5[MILLISECOND] * 1e3)) * sign2
          // the millisecond decimal point is included in the match
        };
      } else if (match5 = isoRegex.exec(input)) {
        sign2 = match5[1] === "-" ? -1 : 1;
        duration2 = {
          y: parseIso(match5[2], sign2),
          M: parseIso(match5[3], sign2),
          w: parseIso(match5[4], sign2),
          d: parseIso(match5[5], sign2),
          h: parseIso(match5[6], sign2),
          m: parseIso(match5[7], sign2),
          s: parseIso(match5[8], sign2)
        };
      } else if (duration2 == null) {
        duration2 = {};
      } else if (typeof duration2 === "object" && ("from" in duration2 || "to" in duration2)) {
        diffRes = momentsDifference(
          createLocal(duration2.from),
          createLocal(duration2.to)
        );
        duration2 = {};
        duration2.ms = diffRes.milliseconds;
        duration2.M = diffRes.months;
      }
      ret = new Duration(duration2);
      if (isDuration(input) && hasOwnProp(input, "_locale")) {
        ret._locale = input._locale;
      }
      if (isDuration(input) && hasOwnProp(input, "_isValid")) {
        ret._isValid = input._isValid;
      }
      return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign2) {
      var res = inp && parseFloat(inp.replace(",", "."));
      return (isNaN(res) ? 0 : res) * sign2;
    }
    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, "M").isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +base.clone().add(res.months, "M");
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur, tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          );
          tmp = val;
          val = period;
          period = tmp;
        }
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }
    function addSubtract(mom, duration2, isAdding, updateOffset) {
      var milliseconds2 = duration2._milliseconds, days2 = absRound(duration2._days), months2 = absRound(duration2._months);
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (months2) {
        setMonth(mom, get(mom, "Month") + months2 * isAdding);
      }
      if (days2) {
        set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
      }
      if (milliseconds2) {
        mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days2 || months2);
      }
    }
    var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
    function isString(input) {
      return typeof input === "string" || input instanceof String;
    }
    function isMomentInput(input) {
      return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
    }
    function isMomentInputObject(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties2 = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], i, property, propertyLen = properties2.length;
      for (i = 0; i < propertyLen; i += 1) {
        property = properties2[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input), dataTypeTest = false;
      if (arrayTest) {
        dataTypeTest = input.filter(function(item) {
          return !isNumber(item) && isString(input);
        }).length === 0;
      }
      return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties2 = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], i, property;
      for (i = 0; i < properties2.length; i += 1) {
        property = properties2[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now2) {
      var diff2 = myMoment.diff(now2, "days", true);
      return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
    }
    function calendar$1(time, formats) {
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = void 0;
          formats = void 0;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = void 0;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = void 0;
        }
      }
      var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
      return this.format(
        output || this.localeData().calendar(format2, this, createLocal(now2))
      );
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }
    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }
    function isBetween(from2, to2, units, inclusivity) {
      var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }
      inclusivity = inclusivity || "()";
      return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input), inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }
    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
      var that, zoneDelta, output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);
      switch (units) {
        case "year":
          output = monthDiff(this, that) / 12;
          break;
        case "month":
          output = monthDiff(this, that);
          break;
        case "quarter":
          output = monthDiff(this, that) / 3;
          break;
        case "second":
          output = (this - that) / 1e3;
          break;
        case "minute":
          output = (this - that) / 6e4;
          break;
        case "hour":
          output = (this - that) / 36e5;
          break;
        case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;
        case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;
        default:
          output = this - that;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b2) {
      if (a.date() < b2.date()) {
        return -monthDiff(b2, a);
      }
      var wholeMonthDiff = (b2.year() - a.year()) * 12 + (b2.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
      if (b2 - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
        adjust = (b2 - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
        adjust = (b2 - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
      if (m2.year() < 0 || m2.year() > 9999) {
        return formatMoment(
          m2,
          utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
        }
      }
      return formatMoment(
        m2,
        utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function inspect() {
      if (!this.isValid()) {
        return "moment.invalid(/* " + this._i + " */)";
      }
      var func = "moment", zone = "", prefix2, year, datetime, suffix;
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
        zone = "Z";
      }
      prefix2 = "[" + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
      datetime = "-MM-DD[T]HH:mm:ss.SSS";
      suffix = zone + '[")]';
      return this.format(prefix2 + year + datetime + suffix);
    }
    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }
    function locale(key) {
      var newLocaleData;
      if (key === void 0) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(key) {
        if (key === void 0) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }
    );
    function localeData() {
      return this._locale;
    }
    var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return new Date(y2, m2, d2).valueOf();
      }
    }
    function utcStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y2, m2, d2);
      }
    }
    function startOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year(), 0, 1);
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;
        case "hour":
          time = this._d.valueOf();
          time -= mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          );
          break;
        case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;
        case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function endOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          ) - 1;
          break;
        case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;
        case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function toDate() {
      return new Date(this.valueOf());
    }
    function toArray() {
      var m2 = this;
      return [
        m2.year(),
        m2.month(),
        m2.date(),
        m2.hour(),
        m2.minute(),
        m2.second(),
        m2.millisecond()
      ];
    }
    function toObject() {
      var m2 = this;
      return {
        years: m2.year(),
        months: m2.month(),
        date: m2.date(),
        hours: m2.hours(),
        minutes: m2.minutes(),
        seconds: m2.seconds(),
        milliseconds: m2.milliseconds()
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
      return isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", ["y", 1], "yo", "eraYear");
    addFormatToken("y", ["yy", 2], 0, "eraYear");
    addFormatToken("y", ["yyy", 3], 0, "eraYear");
    addFormatToken("y", ["yyyy", 4], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(input, array, config2, token2) {
        var era = config2._locale.erasParse(input, token2, config2._strict);
        if (era) {
          getParsingFlags(config2).era = era;
        } else {
          getParsingFlags(config2).invalidEra = input;
        }
      }
    );
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
    addParseToken(["yo"], function(input, array, config2, token2) {
      var match5;
      if (config2._locale._eraYearOrdinalRegex) {
        match5 = input.match(config2._locale._eraYearOrdinalRegex);
      }
      if (config2._locale.eraYearOrdinalParse) {
        array[YEAR] = config2._locale.eraYearOrdinalParse(input, match5);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });
    function localeEras(m2, format2) {
      var i, l2, date, eras = this._eras || getLocale("en")._eras;
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        switch (typeof eras[i].since) {
          case "string":
            date = hooks(eras[i].since).startOf("day");
            eras[i].since = date.valueOf();
            break;
        }
        switch (typeof eras[i].until) {
          case "undefined":
            eras[i].until = Infinity;
            break;
          case "string":
            date = hooks(eras[i].until).startOf("day").valueOf();
            eras[i].until = date.valueOf();
            break;
        }
      }
      return eras;
    }
    function localeErasParse(eraName, format2, strict) {
      var i, l2, eras = this.eras(), name, abbr, narrow;
      eraName = eraName.toUpperCase();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();
        if (strict) {
          switch (format2) {
            case "N":
            case "NN":
            case "NNN":
              if (abbr === eraName) {
                return eras[i];
              }
              break;
            case "NNNN":
              if (name === eraName) {
                return eras[i];
              }
              break;
            case "NNNNN":
              if (narrow === eraName) {
                return eras[i];
              }
              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i];
        }
      }
    }
    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? 1 : -1;
      if (year === void 0) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }
    function getEraName() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].name;
        }
      }
      return "";
    }
    function getEraNarrow() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].narrow;
        }
      }
      return "";
    }
    function getEraAbbr() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].abbr;
        }
      }
      return "";
    }
    function getEraYear() {
      var i, l2, dir, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        dir = eras[i].since <= eras[i].until ? 1 : -1;
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
          return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
      }
      return this.year();
    }
    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNameRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, "_erasAbbrRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNarrowRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale2) {
      return locale2.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale2) {
      return locale2.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale2) {
      return locale2.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale2) {
      return locale2._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
      var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, eras = this.eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        namePieces.push(regexEscape(eras[i].name));
        abbrPieces.push(regexEscape(eras[i].abbr));
        narrowPieces.push(regexEscape(eras[i].narrow));
        mixedPieces.push(regexEscape(eras[i].name));
        mixedPieces.push(regexEscape(eras[i].abbr));
        mixedPieces.push(regexEscape(eras[i].narrow));
      }
      this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
      this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
      this._erasNarrowRegex = new RegExp(
        "^(" + narrowPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token2, getter) {
      addFormatToken(0, [token2, token2.length], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addUnitAlias("weekYear", "gg");
    addUnitAlias("isoWeekYear", "GG");
    addUnitPriority("weekYear", 1);
    addUnitPriority("isoWeekYear", 1);
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(input, week, config2, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      }
    );
    addWeekParseToken(["gg", "GG"], function(input, week, config2, token2) {
      week[token2] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addUnitAlias("quarter", "Q");
    addUnitPriority("quarter", 7);
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addUnitAlias("date", "D");
    addUnitPriority("date", 9);
    addRegexToken("D", match1to2);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale2) {
      return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addUnitAlias("dayOfYear", "DDD");
    addUnitPriority("dayOfYear", 4);
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function(input, array, config2) {
      config2._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addUnitAlias("minute", "m");
    addUnitPriority("minute", 14);
    addRegexToken("m", match1to2);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addUnitAlias("second", "s");
    addUnitPriority("second", 15);
    addRegexToken("s", match1to2);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    });
    addUnitAlias("millisecond", "ms");
    addUnitPriority("millisecond", 16);
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token, getSetMillisecond;
    for (token = "SSSS"; token.length <= 9; token += "S") {
      addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(("0." + input) * 1e3);
    }
    for (token = "S"; token.length <= 9; token += "S") {
      addParseToken(token, parseMs);
    }
    getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
      return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) {
      proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
      "dates accessor is deprecated. Use date instead.",
      getSetDayOfMonth
    );
    proto.months = deprecate(
      "months accessor is deprecated. Use month instead",
      getSetMonth
    );
    proto.years = deprecate(
      "years accessor is deprecated. Use year instead",
      getSetYear
    );
    proto.zone = deprecate(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      getSetZone
    );
    proto.isDSTShifted = deprecate(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      isDaylightSavingTimeShifted
    );
    function createUnix(input) {
      return createLocal(input * 1e3);
    }
    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
      return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format2, index2, field, setter) {
      var locale2 = getLocale(), utc = createUTC().set(setter, index2);
      return locale2[field](utc, format2);
    }
    function listMonthsImpl(format2, index2, field) {
      if (isNumber(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
      if (index2 != null) {
        return get$1(format2, index2, field, "month");
      }
      var i, out = [];
      for (i = 0; i < 12; i++) {
        out[i] = get$1(format2, i, field, "month");
      }
      return out;
    }
    function listWeekdaysImpl(localeSorted, format2, index2, field) {
      if (typeof localeSorted === "boolean") {
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      } else {
        format2 = localeSorted;
        index2 = format2;
        localeSorted = false;
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      }
      var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
      if (index2 != null) {
        return get$1(format2, (index2 + shift) % 7, field, "day");
      }
      for (i = 0; i < 7; i++) {
        out[i] = get$1(format2, (i + shift) % 7, field, "day");
      }
      return out;
    }
    function listMonths(format2, index2) {
      return listMonthsImpl(format2, index2, "months");
    }
    function listMonthsShort(format2, index2) {
      return listMonthsImpl(format2, index2, "monthsShort");
    }
    function listWeekdays(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
      eras: [
        {
          since: "0001-01-01",
          until: Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
        return number + output;
      }
    });
    hooks.lang = deprecate(
      "moment.lang is deprecated. Use moment.locale instead.",
      getSetGlobalLocale
    );
    hooks.langData = deprecate(
      "moment.langData is deprecated. Use moment.localeData instead.",
      getLocale
    );
    var mathAbs = Math.abs;
    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function addSubtract$1(duration2, input, value, direction) {
      var other = createDuration(input, value);
      duration2._milliseconds += direction * other._milliseconds;
      duration2._days += direction * other._days;
      duration2._months += direction * other._months;
      return duration2._bubble();
    }
    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    }
    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
      if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
        milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
        days2 = 0;
        months2 = 0;
      }
      data.milliseconds = milliseconds2 % 1e3;
      seconds2 = absFloor(milliseconds2 / 1e3);
      data.seconds = seconds2 % 60;
      minutes2 = absFloor(seconds2 / 60);
      data.minutes = minutes2 % 60;
      hours2 = absFloor(minutes2 / 60);
      data.hours = hours2 % 24;
      days2 += absFloor(hours2 / 24);
      monthsFromDays = absFloor(daysToMonths(days2));
      months2 += monthsFromDays;
      days2 -= absCeil(monthsToDays(monthsFromDays));
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      data.days = days2;
      data.months = months2;
      data.years = years2;
      return this;
    }
    function daysToMonths(days2) {
      return days2 * 4800 / 146097;
    }
    function monthsToDays(months2) {
      return months2 * 146097 / 4800;
    }
    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }
      var days2, months2, milliseconds2 = this._milliseconds;
      units = normalizeUnits(units);
      if (units === "month" || units === "quarter" || units === "year") {
        days2 = this._days + milliseconds2 / 864e5;
        months2 = this._months + daysToMonths(days2);
        switch (units) {
          case "month":
            return months2;
          case "quarter":
            return months2 / 3;
          case "year":
            return months2 / 12;
        }
      } else {
        days2 = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case "week":
            return days2 / 7 + milliseconds2 / 6048e5;
          case "day":
            return days2 + milliseconds2 / 864e5;
          case "hour":
            return days2 * 24 + milliseconds2 / 36e5;
          case "minute":
            return days2 * 1440 + milliseconds2 / 6e4;
          case "second":
            return days2 * 86400 + milliseconds2 / 1e3;
          case "millisecond":
            return Math.floor(days2 * 864e5) + milliseconds2;
          default:
            throw new Error("Unknown unit " + units);
        }
      }
    }
    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }
      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }
    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
    function clone$1() {
      return createDuration(this);
    }
    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + "s"]() : NaN;
    }
    function makeGetter(name) {
      return function() {
        return this.isValid() ? this._data[name] : NaN;
      };
    }
    var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
      return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
      var duration2 = createDuration(posNegDuration).abs(), seconds2 = round(duration2.as("s")), minutes2 = round(duration2.as("m")), hours2 = round(duration2.as("h")), days2 = round(duration2.as("d")), months2 = round(duration2.as("M")), weeks2 = round(duration2.as("w")), years2 = round(duration2.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
      if (thresholds2.w != null) {
        a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
      }
      a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale2;
      return substituteTimeAgo.apply(null, a);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === void 0) {
        return round;
      }
      if (typeof roundingFunction === "function") {
        round = roundingFunction;
        return true;
      }
      return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === void 0) {
        return false;
      }
      if (limit === void 0) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === "s") {
        thresholds.ss = limit - 1;
      }
      return true;
    }
    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var withSuffix = false, th2 = thresholds, locale2, output;
      if (typeof argWithSuffix === "object") {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }
      if (typeof argWithSuffix === "boolean") {
        withSuffix = argWithSuffix;
      }
      if (typeof argThresholds === "object") {
        th2 = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
          th2.ss = argThresholds.s - 1;
        }
      }
      locale2 = this.localeData();
      output = relativeTime$1(this, !withSuffix, th2, locale2);
      if (withSuffix) {
        output = locale2.pastFuture(+this, output);
      }
      return locale2.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x2) {
      return (x2 > 0) - (x2 < 0) || +x2;
    }
    function toISOString$1() {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
      if (!total) {
        return "P0D";
      }
      minutes2 = absFloor(seconds2 / 60);
      hours2 = absFloor(minutes2 / 60);
      seconds2 %= 60;
      minutes2 %= 60;
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
      totalSign = total < 0 ? "-" : "";
      ymSign = sign(this._months) !== sign(total) ? "-" : "";
      daysSign = sign(this._days) !== sign(total) ? "-" : "";
      hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
      return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      toISOString$1
    );
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config2) {
      config2._d = new Date(parseFloat(input) * 1e3);
    });
    addParseToken("x", function(input, array, config2) {
      config2._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.29.4";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    };
    function PageLeftSideStaticContacts() {
      const todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + 14);
      const {
        contactInfoState,
        getContactInfoFuncs: {
          handleNameChange,
          handleLastNameChange,
          handleEmailChange,
          handlePhoneChange,
          handleStreetChange,
          handleHouseNumberChange,
          handlePostNumberChange,
          handleTownChange,
          handleNotesChange,
          handleDeliveryDateChange
        },
        value,
        setValue
      } = reactExports.useContext(ContactsInformationFunc);
      const handleCalendar = (newValue) => {
        setValue(newValue);
        handleDeliveryDateChange();
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "page-left-side-contacts-wrapper bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl\r\n          focus:outline-none",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "page-left-side-contacts-column page-left-side-contacts-left-column", children: [
              /* @__PURE__ */ jsxs("div", { className: "personal-contact-info-block", children: [
                /* @__PURE__ */ jsx("p", { className: "contacts-page-heading text-primary-color text-HeadingSmall", children: "Contact Details" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                    value: contactInfoState.name,
                    placeholder: "Name",
                    onChange: handleNameChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                    value: contactInfoState.lastName,
                    placeholder: "Last Name",
                    onChange: handleLastNameChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "contacts-page-small-inputs-holder", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                      className: "contacts-page-input-field-small pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n              focus:outline-none",
                      value: contactInfoState.email,
                      placeholder: "Email",
                      onChange: handleEmailChange,
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      className: "contacts-page-input-field-small ml-4 pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n              focus:outline-none",
                      value: contactInfoState.phone,
                      placeholder: "Phone",
                      onChange: handlePhoneChange,
                      required: true
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "address-contact-info-block", children: [
                /* @__PURE__ */ jsx("p", { className: "contacts-page-heading text-primary-color text-HeadingSmall", children: "Address Details" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                    value: contactInfoState.street,
                    placeholder: "Street",
                    onChange: handleStreetChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                    value: contactInfoState.houseNumber,
                    placeholder: "House Number",
                    onChange: handleHouseNumberChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "contacts-page-small-inputs-holder ", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      className: "contacts-page-input-field-small pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n              focus:outline-none",
                      value: contactInfoState.postNumber,
                      placeholder: "Post number",
                      onChange: handlePostNumberChange,
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "contacts-page-input-field-small ml-4 pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n              focus:outline-none",
                      value: contactInfoState.town,
                      placeholder: "Town",
                      onChange: handleTownChange,
                      required: true
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "page-left-side-contacts-column page-left-side-contacts-right-column", children: [
              /* @__PURE__ */ jsx("p", { className: "contacts-page-heading text-primary-color text-HeadingSmall -mb-4", children: "Delivery" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "delivery-date-info-block bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl\r\n          focus:outline-none",
                  style: { height: "320px", width: "300px" },
                  children: /* @__PURE__ */ jsx(
                    DateCalendar,
                    {
                      style: { height: "320px", width: "300px" },
                      minDate: dayjs(todayDate),
                      displayWeekNumber: false,
                      value,
                      "data-value": contactInfoState.deliveryDate,
                      onChange: (newValue) => handleCalendar(newValue),
                      required: true
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "notes-info-block", children: [
                /* @__PURE__ */ jsx("p", { className: "contacts-page-heading text-primary-color text-HeadingSmall -mb-1 mt-1", children: "Notes" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    className: "contacts-page-notes-txt-area pl-2 px-20 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl\r\n            focus:outline-none",
                    value: contactInfoState.notes,
                    placeholder: "Something we should note...?",
                    onChange: handleNotesChange
                  }
                )
              ] })
            ] })
          ]
        }
      ) });
    }
    function SeparateProductsReceipt(props) {
      const { title } = props;
      const {
        cartProducts,
        funcs: { reduceProductAmount },
        total
      } = reactExports.useContext(ShoppingCartFunc);
      const handleReduceProductAmount = (product) => {
        reduceProductAmount(product);
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "separate-product-receipt-wrapper block px-4 py-8 pb-56 mt-14 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl\r\n            focus:outline-none ",
          children: [
            /* @__PURE__ */ jsx("h1", { className: "text-total text-TextMid text-primary-color mr-5", children: title }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-primary-color font-bold text-ProductTitleSmall mr-4 -mb-8", children: "Ex VAT" }),
              /* @__PURE__ */ jsx("p", { className: "ReceiptPriceL text-TextBig text-primary-color", children: total.toFixed(2) }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-primary-color font-bold text-ProductTitleSmall\r\n                   px-4 py-2 bg-white border-white border-slate-300 rounded-xl\r\n                  shadow-xl focus:outline-none ml-4",
                  children: "DKK."
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "line line-3 mt-1.5" }),
            /* @__PURE__ */ jsxs("div", { className: "product-receipt-products-display-section", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-cardText font-bold text-primary-color mt-8 mb-2 mr-40", children: "Products:" }),
              /* @__PURE__ */ jsx("div", { className: "scroll-section", children: cartProducts.map(
                (product) => product.qty && product.variationQty !== 0 ? /* @__PURE__ */ jsx(
                  ProductDisplayReceipt,
                  {
                    product,
                    handleReduceProductAmount
                  },
                  product.productBaksetUnqKey
                ) : ""
              ) })
            ] })
          ]
        }
      ) });
    }
    function ProcessMicroCopy(props) {
      const { processStep } = props;
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "process-micro-copy-holder ml-10 space-x-6", children: [
        /* @__PURE__ */ jsx("p", { className: "process-micro-copy-text ml-2 text-txt-black-color text-ProductAmountIndex text-left font-bold", children: "Choose Products" }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: processStep >= 2 ? "process-micro-copy-text ml-2 text-txt-black-color text-GlobalBtnsTxt text-left font-bold" : "process-micro-copy-text ml-2 text-txt-black-color text-GlobalBtnsTxt text-left font-bold",
            children: ">"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: processStep >= 2 ? "process-micro-copy-text ml-2 text-txt-black-color text-ProductAmountIndex font-bold" : "process-micro-copy-text mr-2 text-txt-grey-color text-ProductAmountIndex font-bold",
            children: "Contact Info"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: processStep >= 3 ? "process-micro-copy-arrow mr-2  text-txt-black-color text-GlobalBtnsTxt font-bold" : "process-micro-copy-arrow mr-2  text-txt-grey-color text-GlobalBtnsTxt font-bold",
            children: ">"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: processStep >= 3 ? "process-micro-copy-arrow mr-2 text-txt-black-color text-ProductAmountIndex font-bold" : "process-micro-copy-arrow mr-2 text-txt-grey-color text-ProductAmountIndex font-bold",
            children: "Final Check"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: processStep >= 4 ? "process-micro-copy-arrow mr-2 text-txt-black-color text-GlobalBtnsTxt font-bold" : "process-micro-copy-arrow mr-2 text-txt-grey-color text-GlobalBtnsTxt font-bold",
            children: ">"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: processStep >= 4 ? "process-micro-copy-arrow mr-2 text-txt-black-color text-ProductAmountIndex font-bold" : "process-micro-copy-arrow mr-2 text-txt-grey-color text-ProductAmountIndex font-bold",
            children: "Finish"
          }
        )
      ] }) });
    }
    function ContactInfoPage() {
      const { contactInfoState } = reactExports.useContext(ContactsInformationFunc);
      const navigate = useNavigate();
      const location = useLocation();
      const handleTransfer = () => {
        Object.keys(contactInfoState).map((key) => {
          if (!contactInfoState[key] && contactInfoState[key].length <= 0) {
            window.alert(`Please provide us with ${key}`);
          } else {
            navigate("/finalChackPage", {
              state: {
                contactsPageType: location.state.contactsPageType
              }
            });
          }
        });
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "contact-info-page-main-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "contact-info-page-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "contact-info-page-widgets-holder", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ProcessMicroCopy, { processStep: 2 }),
            /* @__PURE__ */ jsx(PageLeftSideStaticContacts, {})
          ] }),
          location.state.contactsPageType === "separateProductsBuy" ? /* @__PURE__ */ jsx(SeparateProductsReceipt, { title: "Total" }) : /* @__PURE__ */ jsx(KitReceipt, { children: /* @__PURE__ */ jsx(KitReceiptBottomSection, {}) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons-holder-h", children: /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        ) })
      ] }) });
    }
    function LandingPage({ productsList }) {
      const navigate = useNavigate();
      const [emailAddress, setEmailAddress] = reactExports.useState("");
      const [emailValidation, setEmailValidation] = reactExports.useState(true);
      const products = productsList;
      console.log(products);
      function sendMail() {
        if (!emailAddress.includes("@")) {
          setEmailValidation(false);
        } else {
          setEmailValidation(true);
          console.log({ emailAddress });
          axios.post(
            "http://localhost:5000/mailer",
            { emailAddress },
            { headers: { "Content-Type": "application/json" } }
          ).then((response) => {
            console.log(response);
          }).catch((err) => {
            console.log(err);
          });
        }
      }
      const handleTransfer = () => {
        navigate("/orderType");
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "main",
        {
          className: "landing-page-content-wrapper page-main-section \r\n        px-6 2xl:px-20",
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "landing-page-inner-content\r\n         mx-auto max-w-7xl px-6 xl:px-8 2xl:px-0",
                children: [
                  /* @__PURE__ */ jsxs(
                    "h1",
                    {
                      className: "landing-page-welcome-header text-TextBig\r\n            md:mt-20 md:mb-10 xl:mt-24",
                      children: [
                        "Before starting your shop journey, do",
                        /* @__PURE__ */ jsx("br", {}),
                        " you want us to send you",
                        /* @__PURE__ */ jsx("b", { className: "text-primary-color", children: " our catalog" }),
                        "?"
                      ]
                    }
                  ),
                  emailValidation ? " " : /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "email-validation text-sm\r\n            mb-4 sm:py-2 md:mb-6 lg:mb-8 2xl:w-1/2 2xl:mx-auto",
                      children: "Please enter a valid email"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "email-input-field block px-3 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl focus:outline-none \r\n            mb-4 md:mb-0 md:mr-4 max-w-lg 2xl:max-w-xl",
                      type: "text",
                      placeholder: "Your Email...",
                      onChange: (e2) => setEmailAddress(e2.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: sendMail,
                      className: "form-btn bg-primary-color mt-8 py-1 px-6 rounded-sm",
                      children: "Send"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              ButtonsHolder,
              {
                back: "No",
                title: "Next",
                handleTransfer,
                className: "buttons-holder"
              }
            )
          ]
        }
      ) });
    }
    function TypeOfOrderPage() {
      const navigate = useNavigate();
      const [routeChoice, setRouteChoice] = reactExports.useState(0);
      const nextDest = routeChoice == 1 ? "/buyOrCreate" : routeChoice == 2 ? "/productSelectionPageSP" : "";
      const handleTransfer = () => {
        navigate(nextDest);
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "TypeOfOrder-page-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-inner-content", children: [
          /* @__PURE__ */ jsx("h1", { className: "TypeOfOrder-page-header text-TextBig text-primary-color font-normal mt-20 mb-10", children: "What are you ordering?" }),
          /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-page-route-choice-holder mx-8 mt-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-page-choice-item font-semibold space-x-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "route-choice",
                  className: "route-choice-input mt-4",
                  type: "radio",
                  value: "1",
                  onChange: (e2) => {
                    setRouteChoice(e2.target.value);
                  }
                }
              ),
              /* @__PURE__ */ jsxs("p", { className: "TypeOfOrder-page-choice-text font-semibold text-HeadingSmall", children: [
                "A kit",
                /* @__PURE__ */ jsx(
                  FontAwesomeIcon,
                  {
                    icon: faBox,
                    className: "type-of-order-box-icon inline-block ml-5 mt-4"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-page-choice-item space-x-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "route-choice",
                  className: "route-choice-input mt-4",
                  type: "radio",
                  value: "2",
                  onChange: (e2) => {
                    setRouteChoice(e2.target.value);
                  }
                }
              ),
              /* @__PURE__ */ jsxs("p", { className: "TypeOfOrder-page-choice-text font-bold text-HeadingSmall", children: [
                "Separate products",
                /* @__PURE__ */ jsx(
                  FontAwesomeIcon,
                  {
                    icon: faBoxesStacked,
                    size: "sm",
                    className: "type-of-order-box-icon inline-block ml-4 mt-5"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer,
            className: "button-holder"
          }
        )
      ] }) });
    }
    const ProductDisplaySearchBar = React$1.memo(function ProductSearchBar({ product, addProduct }) {
      const [productWithVar, setProductWithVar] = reactExports.useState({});
      const [variationAndPrice, setVariationAndPrice] = reactExports.useState([]);
      reactExports.useEffect(() => {
        const varPostRequest = async () => {
          const response = await fetch("http://65.109.137.46:5000/apivar", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            //Sending a post request with the productIndex as body content
            body: JSON.stringify({
              ProductIndex: product.ProductIndex
            })
          });
          const data = await response.json();
          setVariationAndPrice(data);
        };
        varPostRequest();
      }, []);
      let value = {
        VariationName: product.ProductName,
        VariationID: 0
      };
      const handleVariationChoice = (e2) => {
        value = {
          ProductName: product.ProductName,
          ProductIndex: product.ProductIndex,
          VariationName: e2.target.value,
          VariationID: e2.target.options[e2.target.selectedIndex].getAttribute(
            "data-variationid"
          ),
          Price: e2.target.options[e2.target.selectedIndex].getAttribute(
            "data-variationprice"
          )
        };
        setProductWithVar((productWithVar2) => ({
          ...productWithVar2,
          ...value
        }));
      };
      const handleChoiceValidation = () => {
        if (!productWithVar.VariationName && (!productWithVar.Price || productWithVar.Price === 0) && productWithVar.VariationName !== "select a variation") {
          window.alert("Please selct a variation");
        } else {
          addProduct(productWithVar);
        }
      };
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "product-search-bar-outter-wrapper product-search-bar px-8 py-5 bg-white border-white border-slate-300 border-round text-sm shadow-sm\r\n            focus:outline-none",
          children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                onChange: (e2) => {
                  handleVariationChoice(e2);
                },
                className: "product-search-bar-select product-search-bar text-VariationTitle bg-selector-color text-txt-white-color round-sm border-round",
                children: [
                  /* @__PURE__ */ jsx("option", { children: "select a variation" }),
                  variationAndPrice.length !== 0 ? variationAndPrice.map((variation) => /* @__PURE__ */ jsxs(
                    "option",
                    {
                      value: variation.ProductName,
                      "data-variationid": variation.VariationID,
                      "data-variationprice": variation.Price,
                      children: [
                        variation.ProductName,
                        "    -    ",
                        variation.Price,
                        " DKK"
                      ]
                    },
                    variation.VariationID
                  )) : /* @__PURE__ */ jsxs(
                    "option",
                    {
                      "data-variationid": 0,
                      value: product.ProductName,
                      "data-variationprice": product.Price,
                      children: [
                        product.ProductName,
                        "     -    ",
                        product.Price,
                        " DKK"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex product-search-bar items-center space-x-5 ml-10 mr-10", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-10 h-10 object-contain",
                  src: `http://65.109.137.46:5000/img/${product.ProductIndex}_0.jpg`,
                  alt: product.ProductName
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "product-search-bar-clickable product-search-bar rounded-2xl",
                  onClick: () => {
                    handleChoiceValidation();
                  },
                  children: /* @__PURE__ */ jsx("h2", { className: "text-ProductTitleSmall font-bold", children: product.ProductName })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "text-textSmall", icon: faCircleInfo }) })
          ]
        }
      );
    });
    function BasketProductsDisplay(props) {
      const {
        product,
        handleIncreaseProductAmount,
        handleReduceProductAmount,
        handleRemoveProduct,
        setGlobalPrices
      } = props;
      return /* @__PURE__ */ jsx("div", { className: "item-display-basket w-full", children: /* @__PURE__ */ jsx("div", { className: "block px-6 py-6 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:outline-none", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-5 ml-10 mr-10", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-10 h-10 object-contain",
              src: `http://65.109.137.46:5000/img/${product.ProductIndex}_${product.VariationID}.jpg`,
              alt: product.ProductName
            }
          ),
          /* @__PURE__ */ jsxs("h2", { className: "inline-block font-bold text-ProductTitleSmall", children: [
            product.productName,
            /* @__PURE__ */ jsx("br", {}),
            product.VariationName
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 -mr-2",
              onClick: () => {
                handleIncreaseProductAmount(product);
              },
              children: "+"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "final-check-product-table-price text-ProductAmountIndex mt-1 mx-2", children: /* @__PURE__ */ jsx("b", { children: product.qty }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 mr-10",
              onClick: () => {
                handleReduceProductAmount(product);
              },
              children: "-"
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-right inline-block text-ProductTitleMedium font-extrabold w-32", children: [
            (Number(product.Price) * Number(product.qty)).toFixed(2),
            " Dkk"
          ] })
        ] })
      ] }) }) });
    }
    function PageLeftSide(props) {
      const [searchQuerry, setSearchQuerry] = reactExports.useState(" ");
      const { productsList } = props;
      const {
        cartProducts,
        funcs: {
          addProduct,
          reduceProductAmount,
          increaseProductAmount,
          removeProduct
        }
      } = reactExports.useContext(ShoppingCartFunc);
      const handleAddProduct = (product) => {
        addProduct(product);
      };
      const handleRemoveProduct = (product) => {
        removeProduct(product);
      };
      const handleReduceProductAmount = (product) => {
        reduceProductAmount(product);
      };
      const handleIncreaseProductAmount = (product) => {
        increaseProductAmount(product);
      };
      let filterFunc = [];
      filterFunc = searchQuerry !== " " ? productsList.filter(
        (product) => product.ProductName.toLowerCase().includes(searchQuerry.toLowerCase())
      ) : " ";
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "page-left-side-wrapper block px-4 py-6 mb-14 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl\r\n            focus:outline-none relative",
          children: [
            props.children,
            /* @__PURE__ */ jsxs("div", { className: "page-left-side-main-section", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "page-left-side-search-bar block px-4 py-2 pr-80 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                  type: "text",
                  placeholder: "Product name here...",
                  onChange: (e2) => setSearchQuerry(e2.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                FontAwesomeIcon,
                {
                  icon: faMagnifyingGlass,
                  className: "icon absolute -mt-10 py-0"
                }
              ),
              Array.isArray(filterFunc) && searchQuerry !== "" ? filterFunc.slice(0, 3).map((product) => /* @__PURE__ */ jsx(
                ProductDisplaySearchBar,
                {
                  product,
                  addProduct: handleAddProduct
                },
                product.ProductIndex
              )) : " ",
              /* @__PURE__ */ jsx("div", { className: "line line-2" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-cardText font-bold text-primary-color", children: "Your products :" }),
            /* @__PURE__ */ jsx("div", { className: "basket-scroll-section", children: /* @__PURE__ */ jsx("div", { className: "page-left-side-bottom-section", children: cartProducts.map(
              (product) => product.qty > 0 && product.varQty > 0 ? /* @__PURE__ */ jsx(
                BasketProductsDisplay,
                {
                  product,
                  handleIncreaseProductAmount,
                  handleReduceProductAmount,
                  handleRemoveProduct
                },
                product.productBaksetUnqKey
              ) : ""
            ) }) })
          ]
        }
      ) });
    }
    function PageLeftTopSection(props) {
      reactExports.useContext(ShoppingCartFunc);
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "page-left-side-top-section", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-TextXL text-primary-color ml-5", children: "Kit" }),
          props.children
        ] }),
        /* @__PURE__ */ jsx("div", { className: "line" })
      ] });
    }
    function AmountPicker() {
      const { setKitAmount } = reactExports.useContext(ShoppingCartFunc);
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "page-left-side-top-section-amount-window-holder font-bold", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-primary-color ml-5 mt-2", children: "Amount" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            onChange: (e2) => {
              setKitAmount(e2.target.value);
            },
            className: "kit-amount-window text-primary-color font-bold text-CardText \r\n         px-2 py-2 bg-white border-white border-slate-300 rounded-xl\r\n         shadow-xl focus:outline-none space-x-5",
            min: 1
          }
        )
      ] }) });
    }
    function ProductSelectionPageKB({ productsList }) {
      const navigate = useNavigate();
      const { cartProducts, kitAmount } = reactExports.useContext(ShoppingCartFunc);
      const handleTransfer = () => {
        if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
          navigate("/contactInfoPage", {
            state: {
              contactsPageType: "kitBuy"
            }
          });
        }
        if (kitAmount <= 0) {
          window.alert("Kit Amount cannot be 0");
        }
        if (cartProducts.filter((product) => product.qty !== 0).length == 0) {
          window.alert("Please add products to the basket");
        }
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "product-selectionKB-page-content-wrapper product-selection-page-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "product-selectionKB-page-inner-content product-selection-page-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "product-selectionSP-page-widgets-holder page-widgets-holder", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ProcessMicroCopy, { processStep: 1 }),
            /* @__PURE__ */ jsx(PageLeftSide, { productsList, children: /* @__PURE__ */ jsx(PageLeftTopSection, { children: /* @__PURE__ */ jsx(AmountPicker, {}) }) })
          ] }),
          /* @__PURE__ */ jsx(KitReceipt, { children: /* @__PURE__ */ jsx(KitReceiptBottomSection, {}) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons-holder-h", children: /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        ) })
      ] }) });
    }
    function ChoiceBuyOrCreate() {
      const navigate = useNavigate();
      const [routeChoice2, setRouteChoice2] = reactExports.useState(0);
      const nextDest = routeChoice2 == 1 ? "/productSelectionPageKb" : routeChoice2 == 2 ? "/productSelectionPageKC" : "";
      const handleTransfer = () => {
        navigate(nextDest);
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "TypeOfOrder-page-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "TypeOfOrder-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-page-route-choice-hold", children: [
          /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-page-choice-item", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                name: "route-choice",
                className: "route-choice-input mt-40 mr-4",
                type: "radio",
                value: "1",
                onChange: (e2) => {
                  setRouteChoice2(e2.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "TypeOfOrder-page-choice-text font-semibold text-HeadingSmall mt-40 mb-10", children: "I want to buy a kit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "TypeOfOrder-page-choice-item", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                name: "route-choice",
                className: "route-choice-input mr-4",
                type: "radio",
                value: "2",
                onChange: (e2) => {
                  setRouteChoice2(e2.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "TypeOfOrder-page-choice-text font-semibold text-HeadingSmall", children: "I want to create a kit" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        )
      ] }) });
    }
    function ProductSelectionPageKC(props) {
      const navigate = useNavigate();
      const { cartProducts } = reactExports.useContext(ShoppingCartFunc);
      const { productsList } = props;
      const handleTransfer = () => {
        if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
          navigate("/contactInfoCreatedKit", {
            state: {
              contactsPageType: "kitCreate"
            }
          });
        } else {
          window.alert("Please select a product");
        }
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "product-selectionKC-page-content-wrapper product-selection-page-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "product-selectionKC-page-inner-content product-selection-page-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "product-selectionKC-page-widgets-holder page-widgets-holder", children: [
          /* @__PURE__ */ jsx(PageLeftSide, { productsList, children: /* @__PURE__ */ jsx(PageLeftTopSection, {}) }),
          /* @__PURE__ */ jsx(SeparateProductsReceipt, { title: "Kit" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons-holder-h", children: /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        ) })
      ] }) });
    }
    function ProductSelectionPageSP({ productsList }) {
      const navigate = useNavigate();
      const {
        cartProducts,
        funcs: { handlePageTransfer },
        globalPrices,
        setGlobalPrices
      } = reactExports.useContext(ShoppingCartFunc);
      cartProducts.filter((product) => product.qty !== 0);
      const handleTransfer = () => {
        if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
          navigate("/contactInfoPage", {
            state: {
              contactsPageType: "separateProductsBuy"
            }
          });
        } else {
          window.alert("Please select a product");
        }
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "product-selectionSP-page-inner-content product-selection-page-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "product-selectionSP-page-widgets-holder page-widgets-holder", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ProcessMicroCopy, { processStep: 1 }),
            /* @__PURE__ */ jsx(
              PageLeftSide,
              {
                globalPrices,
                setGlobalPrices,
                productsList
              }
            )
          ] }),
          /* @__PURE__ */ jsx(SeparateProductsReceipt, { title: "Total" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons-holder-h", children: /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        ) })
      ] }) });
    }
    function ProductDisplayFinalCheckPage(props) {
      const {
        product,
        handleIncreaseProductAmount,
        handleReduceProductAmount,
        handleRemoveProduct
      } = props;
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("tr", { className: "final-check-product-table-row-item", children: [
        /* @__PURE__ */ jsx("td", { className: "final-check-product-table-I-tag-field", children: /* @__PURE__ */ jsx(
          FontAwesomeIcon,
          {
            className: "final-check-product-I-icon final-check-product-icon text-textSmall",
            icon: faCircleInfo
          }
        ) }),
        /* @__PURE__ */ jsx("tr", { className: "final-check-product-table-row", children: /* @__PURE__ */ jsx("td", { className: "final-check-product-table-name-field text-ProductTitleSmall", children: product.VariationName ? product.ProductName + " " + product.VariationName : product.ProductName }) }),
        /* @__PURE__ */ jsxs("td", { className: "final-check-product-table-total-field text-ProductTitleMedium", children: [
          product.Price,
          " dkk"
        ] }),
        /* @__PURE__ */ jsxs("td", { className: "final-check-product-table-amount-field final-check-product-table-amount-field-flex", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "final-check-product-table-amount-btn",
              onClick: () => {
                handleIncreaseProductAmount(product);
              },
              children: "+"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "final-check-product-table-price text-ProductAmountIndex", children: /* @__PURE__ */ jsx("b", { children: product.qty }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "final-check-product-table-amount-btn",
              onClick: () => {
                handleReduceProductAmount(product);
              },
              children: "-"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("td", { className: "final-check-product-table-delete-field", children: /* @__PURE__ */ jsx(
          FontAwesomeIcon,
          {
            icon: faTrash,
            className: "trash-icon final-check-product-icon",
            onClick: () => {
              handleRemoveProduct(product);
            }
          }
        ) })
      ] }) });
    }
    function PopUpMessage(props) {
      const [searchQuerry, setSearchQuerry] = reactExports.useState(" ");
      const { productList, toggleUp, setToggleUp, handleAddProduct } = props;
      let filterFunc = [];
      filterFunc = searchQuerry !== " " && productList.length > 0 ? productList.filter(
        (product) => product.ProductName.toLowerCase().includes(searchQuerry.toLowerCase())
      ) : " ";
      return toggleUp ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "final-check-page-pop-up-wrapper mb-32 bg-white shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "final-check-pop-up-inner-content", children: [
        /* @__PURE__ */ jsx("div", { className: "final-check-pop-up-top-section", children: props.children }),
        /* @__PURE__ */ jsxs("div", { className: "final-check-pop-up-main-section mb-32", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "page-left-side-search-bar block px-4 py-2 pr-24 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
              type: "text",
              placeholder: "Product name here...",
              onChange: (e2) => setSearchQuerry(e2.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            FontAwesomeIcon,
            {
              icon: faMagnifyingGlass,
              className: "icon absolute ml-72 -mt-10 py-0"
            }
          ),
          Array.isArray(filterFunc) && searchQuerry !== "" ? filterFunc.slice(0, 3).map((product) => /* @__PURE__ */ jsx(
            ProductDisplaySearchBar,
            {
              product,
              addProduct: handleAddProduct
            },
            product.ProductIndex
          )) : " "
        ] })
      ] }) }) }) : "";
    }
    function PageLeftSideFinalCheckPage(props) {
      const { cartProducts, productList } = props;
      const {
        funcs: {
          addProduct,
          reduceProductAmount,
          increaseProductAmount,
          removeProduct
        }
      } = reactExports.useContext(ShoppingCartFunc);
      const [toggleUp, setToggleUp] = reactExports.useState(false);
      const handleAddProduct = (product) => {
        addProduct(product);
      };
      const handleRemoveProduct = (product) => {
        removeProduct(product);
      };
      const handleReduceProductAmount = (product) => {
        reduceProductAmount(product);
      };
      const handleIncreaseProductAmount = (product) => {
        increaseProductAmount(product);
      };
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          PopUpMessage,
          {
            productList,
            handleAddProduct,
            toggleUp,
            setToggleUp,
            children: /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                className: "text-TextMid",
                icon: faXmark,
                onClick: () => {
                  setToggleUp(false);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "page-left-side-wrapper px-6 py-6 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl\r\n            ",
            children: /* @__PURE__ */ jsxs("div", { className: "page-left-side-contacts-main-content", children: [
              /* @__PURE__ */ jsxs("div", { className: "page-left-side-contacts-top-section", children: [
                /* @__PURE__ */ jsx("p", { className: "page-left-side-contacts-top-section-heading font-bold  text-primary-color", children: "Last check if this is everything..." }),
                /* @__PURE__ */ jsxs("div", { className: "page-left-side-contacts-add-more-holder text-primary-color", children: [
                  /* @__PURE__ */ jsx(
                    FontAwesomeIcon,
                    {
                      icon: faPlus,
                      className: "text-TextMid",
                      onClick: () => {
                        setToggleUp(true);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-primary-color text-ProductTitleSmall font-bold", children: "Add more" })
                ] })
              ] }),
              props.children,
              /* @__PURE__ */ jsx("div", { className: "products-holder-section", children: /* @__PURE__ */ jsx("div", { className: "final-check-products-table-holder", children: /* @__PURE__ */ jsxs("table", { className: "final-check-product-table", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "final-check-product-table-head", children: [
                  /* @__PURE__ */ jsx("th", { className: "final-check-product-table-I-tag-field" }),
                  /* @__PURE__ */ jsx("th", { className: "final-check-product-table-name-field", children: "Name" }),
                  /* @__PURE__ */ jsx("th", { className: "final-check-product-table-total-field", children: "Total" }),
                  /* @__PURE__ */ jsx("th", { className: "final-check-product-table-amount-field", children: "Amount" }),
                  /* @__PURE__ */ jsx("th", { className: "final-check-product-table-delete-field" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { style: { visibility: "visible" }, children: cartProducts.map(
                  (product) => product.qty > 0 && product.varQty > 0 ? /* @__PURE__ */ jsx(
                    ProductDisplayFinalCheckPage,
                    {
                      product,
                      handleIncreaseProductAmount,
                      handleReduceProductAmount,
                      handleRemoveProduct
                    },
                    product.productBaksetUnqKey
                  ) : ""
                ) })
              ] }) }) })
            ] })
          }
        )
      ] });
    }
    function FinalCheckPage(props) {
      const location = useLocation();
      const navigate = useNavigate();
      const { productList } = props;
      const { cartProducts } = reactExports.useContext(ShoppingCartFunc);
      reactExports.useContext(ContactsInformationFunc);
      const handleTransfer = () => {
        navigate("/thankYou");
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "final-check-page-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "final-check-page-inner-content page-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "final-check-page-widgets-holder page-widgets-holder", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ProcessMicroCopy, { processStep: 3 }),
            /* @__PURE__ */ jsx(
              PageLeftSideFinalCheckPage,
              {
                productList,
                cartProducts,
                children: location.state.contactsPageType === "separateProductsBuy" ? "" : /* @__PURE__ */ jsx(PageLeftTopSection, { children: location.state.contactsPageType === "kitBuy" ? /* @__PURE__ */ jsx(AmountPicker, {}) : "" })
              }
            )
          ] }),
          location.state.contactsPageType === "separateProductsBuy" ? /* @__PURE__ */ jsx(SeparateProductsReceipt, { title: "Total" }) : /* @__PURE__ */ jsx(KitReceipt, { children: /* @__PURE__ */ jsx(KitReceiptBottomSection, {}) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons-holder-h", children: /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        ) })
      ] }) });
    }
    function PageLeftSideKC() {
      const {
        contactInfoState,
        getContactInfoFuncs: {
          handleNameChange,
          handleLastNameChange,
          handleEmailChange,
          handlePhoneChange
        }
      } = reactExports.useContext(ContactsInformationFunc);
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "page-left-side-contacts-wrapper bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl\r\n          focus:outline-none",
          children: /* @__PURE__ */ jsxs("div", { className: "personal-contact-info-block", children: [
            /* @__PURE__ */ jsx("p", { className: "contacts-page-heading text-primary-color text-HeadingSmall", children: "Contact Details" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                value: contactInfoState.name,
                placeholder: "Name",
                onChange: handleNameChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                value: contactInfoState.lastName,
                placeholder: "Last Name",
                onChange: handleLastNameChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                value: contactInfoState.email,
                placeholder: "Email",
                onChange: handleEmailChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md\r\n            focus:outline-none",
                value: contactInfoState.phone,
                placeholder: "Phone",
                onChange: handlePhoneChange,
                required: true
              }
            )
          ] })
        }
      ) });
    }
    function ContactsPageKC() {
      const navigate = useNavigate();
      const location = useLocation();
      const handleTransfer = () => {
        navigate("/finalChackPage", {
          state: {
            contactsPageType: location.state.contactsPageType
          }
        });
      };
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "contact-info-page-main-content-wrapper page-main-section", children: [
        /* @__PURE__ */ jsx("div", { className: "contact-info-page-inner-content", children: /* @__PURE__ */ jsxs("div", { className: "contact-info-page-widgets-holder", children: [
          /* @__PURE__ */ jsx(PageLeftSideKC, {}),
          /* @__PURE__ */ jsx(SeparateProductsReceipt, { title: "Kit" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons-holder-h", children: /* @__PURE__ */ jsx(
          ButtonsHolder,
          {
            back: "Yes",
            title: "Next",
            handleTransfer
          }
        ) })
      ] }) });
    }
    function OutroPage() {
      const { contactInfoState } = reactExports.useContext(ContactsInformationFunc);
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "main",
        {
          className: "outro-page-content-wrapper page-main-section \r\n        px-6 2xl:px-20",
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "outro-page-inner-content\r\n         mx-auto max-w-7xl px-6 xl:px-8 2xl:px-0",
                children: [
                  /* @__PURE__ */ jsx(
                    "h1",
                    {
                      className: "outro-page-outro-header text-TextXL text-txt-grey-color\r\n            md:mt-20 xl:mt-24",
                      children: "Thank You for your query"
                    }
                  ),
                  /* @__PURE__ */ jsxs("p", { className: "text-TextLarge text-txt-grey-color", children: [
                    /* @__PURE__ */ jsx("br", {}),
                    " You will be contacted soon on",
                    /* @__PURE__ */ jsxs("b", { className: "text-primary-color", children: [
                      "  ",
                      contactInfoState.email
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(ButtonsHolder, { back: "Yes", title: "Home" })
          ]
        }
      ) });
    }
    function App() {
      const [productsList, setProductsList] = reactExports.useState([]);
      reactExports.useEffect(() => {
        const fetchData = async () => {
          await fetch("http://65.109.137.46:5000/api").then((response) => response.json()).then((data) => {
            setProductsList(data);
          }).catch((err) => {
            console.log(err);
          });
        };
        fetchData();
      }, []);
      return /* @__PURE__ */ jsxs("div", { className: "App", children: [
        /* @__PURE__ */ jsx(HeaderBar, {}),
        /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(ContactInfoContProvider, { children: /* @__PURE__ */ jsx(ShoppingCartProvider, { children: /* @__PURE__ */ jsxs(Routes, { children: [
          /* @__PURE__ */ jsx(
            Route,
            {
              path: "/",
              element: /* @__PURE__ */ jsx(LandingPage, { productsList })
            }
          ),
          /* @__PURE__ */ jsx(Route, { path: "/orderType", element: /* @__PURE__ */ jsx(TypeOfOrderPage, {}) }),
          /* @__PURE__ */ jsx(
            Route,
            {
              path: "/finalChackPage",
              element: /* @__PURE__ */ jsx(FinalCheckPage, { productList: productsList })
            }
          ),
          /* @__PURE__ */ jsx(Route, { path: "/thankYou", element: /* @__PURE__ */ jsx(OutroPage, {}) }),
          /* @__PURE__ */ jsx(
            Route,
            {
              path: "/productSelectionPageSP",
              element: /* @__PURE__ */ jsx(ProductSelectionPageSP, { productsList })
            }
          ),
          /* @__PURE__ */ jsx(Route, { path: "/contactInfoPage", element: /* @__PURE__ */ jsx(ContactInfoPage, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "/buyOrCreate", element: /* @__PURE__ */ jsx(ChoiceBuyOrCreate, {}) }),
          /* @__PURE__ */ jsx(
            Route,
            {
              path: "/productSelectionPageKb",
              element: /* @__PURE__ */ jsx(ProductSelectionPageKB, { productsList })
            }
          ),
          /* @__PURE__ */ jsx(
            Route,
            {
              path: "/productSelectionPageKC",
              element: /* @__PURE__ */ jsx(ProductSelectionPageKC, { productsList })
            }
          ),
          /* @__PURE__ */ jsx(
            Route,
            {
              path: "/contactInfoCreatedKit",
              element: /* @__PURE__ */ jsx(ContactsPageKC, {})
            }
          ),
          /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/" }) })
        ] }) }) }) })
      ] });
    }
    /**
     * React Router DOM v6.8.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function BrowserRouter(_ref2) {
      let {
        basename,
        children,
        window: window2
      } = _ref2;
      let historyRef = reactExports.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
          window: window2,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setState] = reactExports.useState({
        action: history.action,
        location: history.location
      });
      reactExports.useLayoutEffect(() => history.listen(setState), [history]);
      return /* @__PURE__ */ reactExports.createElement(Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
      });
    }
    var DataRouterHook;
    (function(DataRouterHook2) {
      DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
      DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
      DataRouterHook2["UseFetcher"] = "useFetcher";
    })(DataRouterHook || (DataRouterHook = {}));
    var DataRouterStateHook;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseFetchers"] = "useFetchers";
      DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    const index = "";
    client.createRoot(document.getElementById("root")).render(
      /* @__PURE__ */ jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(App, {}) }) })
    );
  }
});
export default require_index_001();
