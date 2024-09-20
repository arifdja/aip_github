/**
 * AutoNumeric.js v4.6.0
 * © 2009-2019 Robert J. Knothe, Alexandre Bonneau
 * Released under the MIT License.
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AutoNumeric = t() : e.AutoNumeric = t()
}(this, function() {
    return n = {}, a.m = i = [function(e, t, i) {
        "use strict";
        i.r(t);
        var n = {
            allowedTagList: ["b", "caption", "cite", "code", "const", "dd", "del", "div", "dfn", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "input", "ins", "kdb", "label", "li", "option", "output", "p", "q", "s", "sample", "span", "strong", "td", "th", "u"]
        };
        Object.freeze(n.allowedTagList), Object.defineProperty(n, "allowedTagList", {
            configurable: !1,
            writable: !1
        }), n.keyCode = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            Shift: 16,
            Ctrl: 17,
            Alt: 18,
            Pause: 19,
            CapsLock: 20,
            Esc: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            LeftArrow: 37,
            UpArrow: 38,
            RightArrow: 39,
            DownArrow: 40,
            Insert: 45,
            Delete: 46,
            num0: 48,
            num1: 49,
            num2: 50,
            num3: 51,
            num4: 52,
            num5: 53,
            num6: 54,
            num7: 55,
            num8: 56,
            num9: 57,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            OSLeft: 91,
            OSRight: 92,
            ContextMenu: 93,
            numpad0: 96,
            numpad1: 97,
            numpad2: 98,
            numpad3: 99,
            numpad4: 100,
            numpad5: 101,
            numpad6: 102,
            numpad7: 103,
            numpad8: 104,
            numpad9: 105,
            MultiplyNumpad: 106,
            PlusNumpad: 107,
            MinusNumpad: 109,
            DotNumpad: 110,
            SlashNumpad: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NumLock: 144,
            ScrollLock: 145,
            HyphenFirefox: 173,
            MyComputer: 182,
            MyCalculator: 183,
            Semicolon: 186,
            Equal: 187,
            Comma: 188,
            Hyphen: 189,
            Dot: 190,
            Slash: 191,
            Backquote: 192,
            LeftBracket: 219,
            Backslash: 220,
            RightBracket: 221,
            Quote: 222,
            Command: 224,
            AltGraph: 225,
            AndroidDefault: 229
        }, Object.freeze(n.keyCode), Object.defineProperty(n, "keyCode", {
            configurable: !1,
            writable: !1
        }), n.fromCharCodeKeyCode = {
            0: "LaunchCalculator",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
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
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            91: "OS",
            92: "OSRight",
            93: "ContextMenu",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
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
            173: "-",
            182: "MyComputer",
            183: "MyCalculator",
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
            224: "Meta",
            225: "AltGraph"
        }, Object.freeze(n.fromCharCodeKeyCode), Object.defineProperty(n, "fromCharCodeKeyCode", {
            configurable: !1,
            writable: !1
        }), n.keyName = {
            Unidentified: "Unidentified",
            AndroidDefault: "AndroidDefault",
            Alt: "Alt",
            AltGr: "AltGraph",
            CapsLock: "CapsLock",
            Ctrl: "Control",
            Fn: "Fn",
            FnLock: "FnLock",
            Hyper: "Hyper",
            Meta: "Meta",
            OSLeft: "OS",
            OSRight: "OS",
            Command: "OS",
            NumLock: "NumLock",
            ScrollLock: "ScrollLock",
            Shift: "Shift",
            Super: "Super",
            Symbol: "Symbol",
            SymbolLock: "SymbolLock",
            Enter: "Enter",
            Tab: "Tab",
            Space: " ",
            LeftArrow: "ArrowLeft",
            UpArrow: "ArrowUp",
            RightArrow: "ArrowRight",
            DownArrow: "ArrowDown",
            End: "End",
            Home: "Home",
            PageUp: "PageUp",
            PageDown: "PageDown",
            Backspace: "Backspace",
            Clear: "Clear",
            Copy: "Copy",
            CrSel: "CrSel",
            Cut: "Cut",
            Delete: "Delete",
            EraseEof: "EraseEof",
            ExSel: "ExSel",
            Insert: "Insert",
            Paste: "Paste",
            Redo: "Redo",
            Undo: "Undo",
            Accept: "Accept",
            Again: "Again",
            Attn: "Attn",
            Cancel: "Cancel",
            ContextMenu: "ContextMenu",
            Esc: "Escape",
            Execute: "Execute",
            Find: "Find",
            Finish: "Finish",
            Help: "Help",
            Pause: "Pause",
            Play: "Play",
            Props: "Props",
            Select: "Select",
            ZoomIn: "ZoomIn",
            ZoomOut: "ZoomOut",
            BrightnessDown: "BrightnessDown",
            BrightnessUp: "BrightnessUp",
            Eject: "Eject",
            LogOff: "LogOff",
            Power: "Power",
            PowerOff: "PowerOff",
            PrintScreen: "PrintScreen",
            Hibernate: "Hibernate",
            Standby: "Standby",
            WakeUp: "WakeUp",
            Compose: "Compose",
            Dead: "Dead",
            F1: "F1",
            F2: "F2",
            F3: "F3",
            F4: "F4",
            F5: "F5",
            F6: "F6",
            F7: "F7",
            F8: "F8",
            F9: "F9",
            F10: "F10",
            F11: "F11",
            F12: "F12",
            Print: "Print",
            num0: "0",
            num1: "1",
            num2: "2",
            num3: "3",
            num4: "4",
            num5: "5",
            num6: "6",
            num7: "7",
            num8: "8",
            num9: "9",
            a: "a",
            b: "b",
            c: "c",
            d: "d",
            e: "e",
            f: "f",
            g: "g",
            h: "h",
            i: "i",
            j: "j",
            k: "k",
            l: "l",
            m: "m",
            n: "n",
            o: "o",
            p: "p",
            q: "q",
            r: "r",
            s: "s",
            t: "t",
            u: "u",
            v: "v",
            w: "w",
            x: "x",
            y: "y",
            z: "z",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            E: "E",
            F: "F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
            P: "P",
            Q: "Q",
            R: "R",
            S: "S",
            T: "T",
            U: "U",
            V: "V",
            W: "W",
            X: "X",
            Y: "Y",
            Z: "Z",
            Semicolon: ";",
            Equal: "=",
            Comma: ",",
            Hyphen: "-",
            Minus: "-",
            Plus: "+",
            Dot: ".",
            Slash: "/",
            Backquote: "`",
            LeftParenthesis: "(",
            RightParenthesis: ")",
            LeftBracket: "[",
            RightBracket: "]",
            Backslash: "\\",
            Quote: "'",
            numpad0: "0",
            numpad1: "1",
            numpad2: "2",
            numpad3: "3",
            numpad4: "4",
            numpad5: "5",
            numpad6: "6",
            numpad7: "7",
            numpad8: "8",
            numpad9: "9",
            NumpadDot: ".",
            NumpadDotAlt: ",",
            NumpadMultiply: "*",
            NumpadPlus: "+",
            NumpadMinus: "-",
            NumpadSubtract: "-",
            NumpadSlash: "/",
            NumpadDotObsoleteBrowsers: "Decimal",
            NumpadMultiplyObsoleteBrowsers: "Multiply",
            NumpadPlusObsoleteBrowsers: "Add",
            NumpadMinusObsoleteBrowsers: "Subtract",
            NumpadSlashObsoleteBrowsers: "Divide",
            _allFnKeys: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
            _someNonPrintableKeys: ["Tab", "Enter", "Shift", "ShiftLeft", "ShiftRight", "Control", "ControlLeft", "ControlRight", "Alt", "AltLeft", "AltRight", "Pause", "CapsLock", "Escape"],
            _directionKeys: ["PageUp", "PageDown", "End", "Home", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"]
        }, Object.freeze(n.keyName._allFnKeys), Object.freeze(n.keyName._someNonPrintableKeys), Object.freeze(n.keyName._directionKeys), Object.freeze(n.keyName), Object.defineProperty(n, "keyName", {
            configurable: !1,
            writable: !1
        }), Object.freeze(n);
        var d = n;

        function a(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || s(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }).apply(this, arguments)
        }

        function h(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var i = [],
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return i
                }
            }(e, t) || s(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
            }
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var M = function() {
                function s() {
                    ! function(e) {
                        if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                    }(this)
                }
                return function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(s, [{
                    key: "isNull",
                    value: function(e) {
                        return null === e
                    }
                }, {
                    key: "isUndefined",
                    value: function(e) {
                        return void 0 === e
                    }
                }, {
                    key: "isUndefinedOrNullOrEmpty",
                    value: function(e) {
                        return null == e || "" === e
                    }
                }, {
                    key: "isString",
                    value: function(e) {
                        return "string" == typeof e || e instanceof String
                    }
                }, {
                    key: "isEmptyString",
                    value: function(e) {
                        return "" === e
                    }
                }, {
                    key: "isBoolean",
                    value: function(e) {
                        return "boolean" == typeof e
                    }
                }, {
                    key: "isTrueOrFalseString",
                    value: function(e) {
                        var t = String(e).toLowerCase();
                        return "true" === t || "false" === t
                    }
                }, {
                    key: "isObject",
                    value: function(e) {
                        return "object" === l(e) && null !== e && !Array.isArray(e)
                    }
                }, {
                    key: "isEmptyObj",
                    value: function(e) {
                        for (var t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                        return !0
                    }
                }, {
                    key: "isNumberStrict",
                    value: function(e) {
                        return "number" == typeof e
                    }
                }, {
                    key: "isNumber",
                    value: function(e) {
                        return !this.isArray(e) && !isNaN(parseFloat(e)) && isFinite(e)
                    }
                }, {
                    key: "isDigit",
                    value: function(e) {
                        return /\d/.test(e)
                    }
                }, {
                    key: "isNumberOrArabic",
                    value: function(e) {
                        var t = this.arabicToLatinNumbers(e, !1, !0, !0);
                        return this.isNumber(t)
                    }
                }, {
                    key: "isInt",
                    value: function(e) {
                        return "number" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e)
                    }
                }, {
                    key: "isFunction",
                    value: function(e) {
                        return "function" == typeof e
                    }
                }, {
                    key: "isIE11",
                    value: function() {
                        return "undefined" != typeof window && !!window.MSInputMethodContext && !!document.documentMode
                    }
                }, {
                    key: "contains",
                    value: function(e, t) {
                        return !(!this.isString(e) || !this.isString(t) || "" === e || "" === t) && -1 !== e.indexOf(t)
                    }
                }, {
                    key: "isInArray",
                    value: function(e, t) {
                        return !(!this.isArray(t) || t === [] || this.isUndefined(e)) && -1 !== t.indexOf(e)
                    }
                }, {
                    key: "isArray",
                    value: function(e) {
                        if ("[object Array]" === Object.prototype.toString.call([])) return Array.isArray(e) || "object" === l(e) && "[object Array]" === Object.prototype.toString.call(e);
                        throw new Error("toString message changed for Object Array")
                    }
                }, {
                    key: "isElement",
                    value: function(e) {
                        return "undefined" != typeof Element && e instanceof Element
                    }
                }, {
                    key: "isInputElement",
                    value: function(e) {
                        return this.isElement(e) && "input" === e.tagName.toLowerCase()
                    }
                }, {
                    key: "decimalPlaces",
                    value: function(e) {
                        var t = h(e.split("."), 2)[1];
                        return this.isUndefined(t) ? 0 : t.length
                    }
                }, {
                    key: "indexFirstNonZeroDecimalPlace",
                    value: function(e) {
                        var t = h(String(Math.abs(e)).split("."), 2)[1];
                        if (this.isUndefined(t)) return 0;
                        var i = t.lastIndexOf("0");
                        return -1 === i ? i = 0 : i += 2, i
                    }
                }, {
                    key: "keyCodeNumber",
                    value: function(e) {
                        return void 0 === e.which ? e.keyCode : e.which
                    }
                }, {
                    key: "character",
                    value: function(e) {
                        var t;
                        if ("Unidentified" === e.key || void 0 === e.key || this.isSeleniumBot()) {
                            var i = this.keyCodeNumber(e);
                            if (i === d.keyCode.AndroidDefault) return d.keyName.AndroidDefault;
                            var n = d.fromCharCodeKeyCode[i];
                            t = s.isUndefinedOrNullOrEmpty(n) ? String.fromCharCode(i) : n
                        } else {
                            var a;
                            switch (e.key) {
                                case "Add":
                                    t = d.keyName.NumpadPlus;
                                    break;
                                case "Apps":
                                    t = d.keyName.ContextMenu;
                                    break;
                                case "Crsel":
                                    t = d.keyName.CrSel;
                                    break;
                                case "Decimal":
                                    t = e.char ? e.char : d.keyName.NumpadDot;
                                    break;
                                case "Del":
                                    t = "firefox" === (a = this.browser()).name && a.version <= 36 || "ie" === a.name && a.version <= 9 ? d.keyName.Dot : d.keyName.Delete;
                                    break;
                                case "Divide":
                                    t = d.keyName.NumpadSlash;
                                    break;
                                case "Down":
                                    t = d.keyName.DownArrow;
                                    break;
                                case "Esc":
                                    t = d.keyName.Esc;
                                    break;
                                case "Exsel":
                                    t = d.keyName.ExSel;
                                    break;
                                case "Left":
                                    t = d.keyName.LeftArrow;
                                    break;
                                case "Meta":
                                case "Super":
                                    t = d.keyName.OSLeft;
                                    break;
                                case "Multiply":
                                    t = d.keyName.NumpadMultiply;
                                    break;
                                case "Right":
                                    t = d.keyName.RightArrow;
                                    break;
                                case "Spacebar":
                                    t = d.keyName.Space;
                                    break;
                                case "Subtract":
                                    t = d.keyName.NumpadMinus;
                                    break;
                                case "Up":
                                    t = d.keyName.UpArrow;
                                    break;
                                default:
                                    t = e.key
                            }
                        }
                        return t
                    }
                }, {
                    key: "browser",
                    value: function() {
                        var e, t = navigator.userAgent,
                            i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                        return /trident/i.test(i[1]) ? {
                            name: "ie",
                            version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
                        } : "Chrome" === i[1] && null !== (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? {
                            name: e[1].replace("OPR", "opera"),
                            version: e[2]
                        } : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), {
                            name: i[0].toLowerCase(),
                            version: i[1]
                        })
                    }
                }, {
                    key: "isSeleniumBot",
                    value: function() {
                        return !0 === window.navigator.webdriver
                    }
                }, {
                    key: "isNegative",
                    value: function(e, t, i) {
                        var n = 1 < arguments.length && void 0 !== t ? t : "-",
                            a = !(2 < arguments.length && void 0 !== i) || i;
                        return e === n || "" !== e && (s.isNumber(e) ? e < 0 : a ? this.contains(e, n) : this.isNegativeStrict(e, n))
                    }
                }, {
                    key: "isNegativeStrict",
                    value: function(e, t) {
                        var i = 1 < arguments.length && void 0 !== t ? t : "-";
                        return e.charAt(0) === i
                    }
                }, {
                    key: "isNegativeWithBrackets",
                    value: function(e, t, i) {
                        return e.charAt(0) === t && this.contains(e, i)
                    }
                }, {
                    key: "isZeroOrHasNoValue",
                    value: function(e) {
                        return !/[1-9]/g.test(e)
                    }
                }, {
                    key: "setRawNegativeSign",
                    value: function(e) {
                        return this.isNegativeStrict(e, "-") ? e : "-".concat(e)
                    }
                }, {
                    key: "replaceCharAt",
                    value: function(e, t, i) {
                        return "".concat(e.substr(0, t)).concat(i).concat(e.substr(t + i.length))
                    }
                }, {
                    key: "clampToRangeLimits",
                    value: function(e, t) {
                        return Math.max(t.minimumValue, Math.min(t.maximumValue, e))
                    }
                }, {
                    key: "countNumberCharactersOnTheCaretLeftSide",
                    value: function(e, t, i) {
                        for (var n = new RegExp("[0-9".concat(i, "-]")), a = 0, r = 0; r < t; r++) n.test(e[r]) && a++;
                        return a
                    }
                }, {
                    key: "findCaretPositionInFormattedNumber",
                    value: function(e, t, i, n) {
                        var a, r = i.length,
                            s = e.length,
                            o = 0;
                        for (a = 0; a < r && o < s && o < t; a++)(e[o] === i[a] || "." === e[o] && i[a] === n) && o++;
                        return a
                    }
                }, {
                    key: "countCharInText",
                    value: function(e, t) {
                        for (var i = 0, n = 0; n < t.length; n++) t[n] === e && i++;
                        return i
                    }
                }, {
                    key: "convertCharacterCountToIndexPosition",
                    value: function(e) {
                        return Math.max(e, e - 1)
                    }
                }, {
                    key: "getElementSelection",
                    value: function(e) {
                        var t, i = {};
                        try {
                            t = this.isUndefined(e.selectionStart)
                        } catch (e) {
                            t = !1
                        }
                        try {
                            if (t) {
                                var n = window.getSelection().getRangeAt(0);
                                i.start = n.startOffset, i.end = n.endOffset, i.length = i.end - i.start
                            } else i.start = e.selectionStart, i.end = e.selectionEnd, i.length = i.end - i.start
                        } catch (e) {
                            i.start = 0, i.end = 0, i.length = 0
                        }
                        return i
                    }
                }, {
                    key: "setElementSelection",
                    value: function(e, t, i) {
                        var n = 2 < arguments.length && void 0 !== i ? i : null;
                        if (this.isUndefinedOrNullOrEmpty(n) && (n = t), this.isInputElement(e)) e.setSelectionRange(t, n);
                        else if (!s.isNull(e.firstChild)) {
                            var a = document.createRange();
                            a.setStart(e.firstChild, t), a.setEnd(e.firstChild, n);
                            var r = window.getSelection();
                            r.removeAllRanges(), r.addRange(a)
                        }
                    }
                }, {
                    key: "throwError",
                    value: function(e) {
                        throw new Error(e)
                    }
                }, {
                    key: "warning",
                    value: function(e, t) {
                        1 < arguments.length && void 0 !== t && !t || console.warn("Warning: ".concat(e))
                    }
                }, {
                    key: "isWheelUpEvent",
                    value: function(e) {
                        return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '".concat(e.type, "' given.")), e.deltaY < 0
                    }
                }, {
                    key: "isWheelDownEvent",
                    value: function(e) {
                        return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '".concat(e.type, "' given.")), 0 < e.deltaY
                    }
                }, {
                    key: "forceDecimalPlaces",
                    value: function(e, t) {
                        var i = h(String(e).split("."), 2),
                            n = i[0],
                            a = i[1];
                        return a ? "".concat(n, ".").concat(a.substr(0, t)) : e
                    }
                }, {
                    key: "roundToNearest",
                    value: function(e, t) {
                        var i = 1 < arguments.length && void 0 !== t ? t : 1e3;
                        return 0 === e ? 0 : (0 === i && this.throwError("The `stepPlace` used to round is equal to `0`. This value must not be equal to zero."), Math.round(e / i) * i)
                    }
                }, {
                    key: "modifyAndRoundToNearestAuto",
                    value: function(e, t, i) {
                        e = Number(this.forceDecimalPlaces(e, i));
                        var n = Math.abs(e);
                        if (0 <= n && n < 1) {
                            var a, r = Math.pow(10, -i);
                            if (0 === e) return t ? r : -r;
                            var s, o = i,
                                l = this.indexFirstNonZeroDecimalPlace(e);
                            return a = o - 1 <= l ? r : Math.pow(10, -(l + 1)), s = t ? e + a : e - a, this.roundToNearest(s, a)
                        }
                        e = parseInt(e, 10);
                        var u, c = Math.abs(e).toString().length;
                        switch (c) {
                            case 1:
                                u = 0;
                                break;
                            case 2:
                            case 3:
                                u = 1;
                                break;
                            case 4:
                            case 5:
                                u = 2;
                                break;
                            default:
                                u = c - 3
                        }
                        var h, m = Math.pow(10, u);
                        return (h = t ? e + m : e - m) <= 10 && -10 <= h ? h : this.roundToNearest(h, m)
                    }
                }, {
                    key: "addAndRoundToNearestAuto",
                    value: function(e, t) {
                        return this.modifyAndRoundToNearestAuto(e, !0, t)
                    }
                }, {
                    key: "subtractAndRoundToNearestAuto",
                    value: function(e, t) {
                        return this.modifyAndRoundToNearestAuto(e, !1, t)
                    }
                }, {
                    key: "arabicToLatinNumbers",
                    value: function(e, t, i, n) {
                        var a = !(1 < arguments.length && void 0 !== t) || t,
                            r = 2 < arguments.length && void 0 !== i && i,
                            s = 3 < arguments.length && void 0 !== n && n;
                        if (this.isNull(e)) return e;
                        var o = e.toString();
                        if ("" === o) return e;
                        if (null === o.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g)) return a && (o = Number(o)), o;
                        r && (o = o.replace(/٫/, ".")), s && (o = o.replace(/٬/g, "")), o = o.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(e) {
                            return e.charCodeAt(0) - 1632
                        }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(e) {
                            return e.charCodeAt(0) - 1776
                        });
                        var l = Number(o);
                        return isNaN(l) ? l : (a && (o = l), o)
                    }
                }, {
                    key: "triggerEvent",
                    value: function(e, t, i, n, a) {
                        var r, s = 1 < arguments.length && void 0 !== t ? t : document,
                            o = 2 < arguments.length && void 0 !== i ? i : null,
                            l = !(3 < arguments.length && void 0 !== n) || n,
                            u = !(4 < arguments.length && void 0 !== a) || a;
                        window.CustomEvent ? r = new CustomEvent(e, {
                            detail: o,
                            bubbles: l,
                            cancelable: u
                        }) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, l, u, {
                            detail: o
                        }), s.dispatchEvent(r)
                    }
                }, {
                    key: "parseStr",
                    value: function(e) {
                        var t, i, n, a, r = {};
                        if (0 === e && 1 / e < 0 && (e = "-0"), e = e.toString(), this.isNegativeStrict(e, "-") ? (e = e.slice(1), r.s = -1) : r.s = 1, -1 < (t = e.indexOf(".")) && (e = e.replace(".", "")), t < 0 && (t = e.length), (i = -1 === e.search(/[1-9]/i) ? e.length : e.search(/[1-9]/i)) === (n = e.length)) r.e = 0, r.c = [0];
                        else {
                            for (a = n - 1;
                                "0" === e.charAt(a); --a) --n;
                            for (--n, r.e = t - i - 1, r.c = [], t = 0; i <= n; i += 1) r.c[t] = +e.charAt(i), t += 1
                        }
                        return r
                    }
                }, {
                    key: "testMinMax",
                    value: function(e, t) {
                        var i = t.c,
                            n = e.c,
                            a = t.s,
                            r = e.s,
                            s = t.e,
                            o = e.e;
                        if (!i[0] || !n[0]) return i[0] ? a : n[0] ? -r : 0;
                        if (a !== r) return a;
                        var l = a < 0;
                        if (s !== o) return o < s ^ l ? 1 : -1;
                        for (a = -1, r = (s = i.length) < (o = n.length) ? s : o, a += 1; a < r; a += 1)
                            if (i[a] !== n[a]) return i[a] > n[a] ^ l ? 1 : -1;
                        return s === o ? 0 : o < s ^ l ? 1 : -1
                    }
                }, {
                    key: "randomString",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : 5;
                        return Math.random().toString(36).substr(2, t)
                    }
                }, {
                    key: "domElement",
                    value: function(e) {
                        return s.isString(e) ? document.querySelector(e) : e
                    }
                }, {
                    key: "getElementValue",
                    value: function(e) {
                        return "input" === e.tagName.toLowerCase() ? e.value : this.text(e)
                    }
                }, {
                    key: "setElementValue",
                    value: function(e, t) {
                        var i = 1 < arguments.length && void 0 !== t ? t : null;
                        "input" === e.tagName.toLowerCase() ? e.value = i : e.textContent = i
                    }
                }, {
                    key: "setInvalidState",
                    value: function(e, t) {
                        var i = 1 < arguments.length && void 0 !== t ? t : "Invalid";
                        "" !== i && !this.isNull(i) || this.throwError("Cannot set the invalid state with an empty message."), e.setCustomValidity(i)
                    }
                }, {
                    key: "setValidState",
                    value: function(e) {
                        e.setCustomValidity("")
                    }
                }, {
                    key: "cloneObject",
                    value: function(e) {
                        return r({}, e)
                    }
                }, {
                    key: "camelize",
                    value: function(e, t, i, n) {
                        var a = 1 < arguments.length && void 0 !== t ? t : "-",
                            r = !(2 < arguments.length && void 0 !== i) || i,
                            s = !(3 < arguments.length && void 0 !== n) || n;
                        if (this.isNull(e)) return null;
                        r && (e = e.replace(/^data-/, ""));
                        var o = e.split(a).map(function(e) {
                            return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
                        });
                        return o = o.join(""), s && (o = "".concat(o.charAt(0).toLowerCase()).concat(o.slice(1))), o
                    }
                }, {
                    key: "text",
                    value: function(e) {
                        var t = e.nodeType;
                        return t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e.textContent : t === Node.TEXT_NODE ? e.nodeValue : ""
                    }
                }, {
                    key: "setText",
                    value: function(e, t) {
                        var i = e.nodeType;
                        i !== Node.ELEMENT_NODE && i !== Node.DOCUMENT_NODE && i !== Node.DOCUMENT_FRAGMENT_NODE || (e.textContent = t)
                    }
                }, {
                    key: "filterOut",
                    value: function(e, t) {
                        var i = this;
                        return e.filter(function(e) {
                            return !i.isInArray(e, t)
                        })
                    }
                }, {
                    key: "trimPaddedZerosFromDecimalPlaces",
                    value: function(e) {
                        if ("" === (e = String(e))) return "";
                        var t = h(e.split("."), 2),
                            i = t[0],
                            n = t[1];
                        if (this.isUndefinedOrNullOrEmpty(n)) return i;
                        var a = n.replace(/0+$/g, "");
                        return "" === a ? i : "".concat(i, ".").concat(a)
                    }
                }, {
                    key: "getHoveredElement",
                    value: function() {
                        var e = a(document.querySelectorAll(":hover"));
                        return e[e.length - 1]
                    }
                }, {
                    key: "arrayTrim",
                    value: function(e, t) {
                        var i = e.length;
                        return 0 === i || i < t ? e : t < 0 ? [] : (e.length = parseInt(t, 10), e)
                    }
                }, {
                    key: "arrayUnique",
                    value: function() {
                        var e;
                        return a(new Set((e = []).concat.apply(e, arguments)))
                    }
                }, {
                    key: "mergeMaps",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        return new Map(t.reduce(function(e, t) {
                            return e.concat(a(t))
                        }, []))
                    }
                }, {
                    key: "objectKeyLookup",
                    value: function(e, t) {
                        var i = Object.entries(e).find(function(e) {
                                return e[1] === t
                            }),
                            n = null;
                        return void 0 !== i && (n = i[0]), n
                    }
                }, {
                    key: "insertAt",
                    value: function(e, t, i) {
                        if (i > (e = String(e)).length) throw new Error("The given index is out of the string range.");
                        if (1 !== t.length) throw new Error("The given string `char` should be only one character long.");
                        return "" === e && 0 === i ? t : "".concat(e.slice(0, i)).concat(t).concat(e.slice(i))
                    }
                }, {
                    key: "scientificToDecimal",
                    value: function(e) {
                        var t = Number(e);
                        if (isNaN(t)) return NaN;
                        if (e = String(e), !this.contains(e, "e") && !this.contains(e, "E")) return e;
                        var i = h(e.split(/e/i), 2),
                            n = i[0],
                            a = i[1],
                            r = n < 0;
                        r && (n = n.replace("-", ""));
                        var s = +a < 0;
                        s && (a = a.replace("-", ""));
                        var o, l = h(n.split(/\./), 2),
                            u = l[0],
                            c = l[1];
                        return o = s ? (o = u.length > a ? this.insertAt(u, ".", u.length - a) : "0.".concat("0".repeat(a - u.length)).concat(u), "".concat(o).concat(c || "")) : c ? (n = "".concat(u).concat(c), a < c.length ? this.insertAt(n, ".", +a + u.length) : "".concat(n).concat("0".repeat(a - c.length))) : (n = n.replace(".", ""), "".concat(n).concat("0".repeat(Number(a)))), r && (o = "-".concat(o)), o
                    }
                }]), s
            }(),
            u = function() {
                function t(e) {
                    if (function(e) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this), null === e) throw new Error("Invalid AST")
                }
                return function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(t.prototype, [{
                    key: "evaluate",
                    value: function(e) {
                        if (null == e) throw new Error("Invalid AST sub-tree");
                        if ("number" === e.type) return e.value;
                        if ("unaryMinus" === e.type) return -this.evaluate(e.left);
                        var t = this.evaluate(e.left),
                            i = this.evaluate(e.right);
                        switch (e.type) {
                            case "op_+":
                                return Number(t) + Number(i);
                            case "op_-":
                                return t - i;
                            case "op_*":
                                return t * i;
                            case "op_/":
                                return t / i;
                            default:
                                throw new Error("Invalid operator '".concat(e.type, "'"))
                        }
                    }
                }]), t
            }(),
            c = function() {
                function a() {
                    ! function(e) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this)
                }
                return function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(a, [{
                    key: "createNode",
                    value: function(e, t, i) {
                        var n = new a;
                        return n.type = e, n.left = t, n.right = i, n
                    }
                }, {
                    key: "createUnaryNode",
                    value: function(e) {
                        var t = new a;
                        return t.type = "unaryMinus", t.left = e, t.right = null, t
                    }
                }, {
                    key: "createLeaf",
                    value: function(e) {
                        var t = new a;
                        return t.type = "number", t.value = e, t
                    }
                }]), a
            }();

        function m(e, t, i) {
            ! function(e) {
                if (!(e instanceof m)) throw new TypeError("Cannot call a class as a function")
            }(this), this.type = e, this.value = t, this.symbol = i
        }
        var g = function() {
                function t(e) {
                    ! function(e) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.text = e, this.textLength = e.length, this.index = 0, this.token = new m("Error", 0, 0)
                }
                return function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(t.prototype, [{
                    key: "_skipSpaces",
                    value: function() {
                        for (;
                            " " === this.text[this.index] && this.index <= this.textLength;) this.index++
                    }
                }, {
                    key: "getIndex",
                    value: function() {
                        return this.index
                    }
                }, {
                    key: "getNextToken",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : ".";
                        if (this._skipSpaces(), this.textLength === this.index) return this.token.type = "EOT", this.token;
                        if (M.isDigit(this.text[this.index])) return this.token.type = "num", this.token.value = this._getNumber(t), this.token;
                        switch (this.token.type = "Error", this.text[this.index]) {
                            case "+":
                                this.token.type = "+";
                                break;
                            case "-":
                                this.token.type = "-";
                                break;
                            case "*":
                                this.token.type = "*";
                                break;
                            case "/":
                                this.token.type = "/";
                                break;
                            case "(":
                                this.token.type = "(";
                                break;
                            case ")":
                                this.token.type = ")"
                        }
                        if ("Error" === this.token.type) throw new Error("Unexpected token '".concat(this.token.symbol, "' at position '").concat(this.token.index, "' in the token function"));
                        return this.token.symbol = this.text[this.index], this.index++, this.token
                    }
                }, {
                    key: "_getNumber",
                    value: function(e) {
                        this._skipSpaces();
                        for (var t = this.index; this.index <= this.textLength && M.isDigit(this.text[this.index]);) this.index++;
                        for (this.text[this.index] === e && this.index++; this.index <= this.textLength && M.isDigit(this.text[this.index]);) this.index++;
                        if (this.index === t) throw new Error("No number has been found while it was expected");
                        return this.text.substring(t, this.index).replace(e, ".")
                    }
                }]), t
            }(),
            v = function() {
                function i(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ".";
                    return function(e) {
                        if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.text = e, this.decimalCharacter = t, this.lexer = new g(e), this.token = this.lexer.getNextToken(this.decimalCharacter), this._exp()
                }
                return function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(i.prototype, [{
                    key: "_exp",
                    value: function() {
                        var e = this._term(),
                            t = this._moreExp();
                        return c.createNode("op_+", e, t)
                    }
                }, {
                    key: "_moreExp",
                    value: function() {
                        var e, t;
                        switch (this.token.type) {
                            case "+":
                                return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._term(), t = this._moreExp(), c.createNode("op_+", t, e);
                            case "-":
                                return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._term(), t = this._moreExp(), c.createNode("op_-", t, e)
                        }
                        return c.createLeaf(0)
                    }
                }, {
                    key: "_term",
                    value: function() {
                        var e = this._factor(),
                            t = this._moreTerms();
                        return c.createNode("op_*", e, t)
                    }
                }, {
                    key: "_moreTerms",
                    value: function() {
                        var e, t;
                        switch (this.token.type) {
                            case "*":
                                return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._factor(), t = this._moreTerms(), c.createNode("op_*", t, e);
                            case "/":
                                return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._factor(), t = this._moreTerms(), c.createNode("op_/", t, e)
                        }
                        return c.createLeaf(1)
                    }
                }, {
                    key: "_factor",
                    value: function() {
                        var e, t, i;
                        switch (this.token.type) {
                            case "num":
                                return i = this.token.value, this.token = this.lexer.getNextToken(this.decimalCharacter), c.createLeaf(i);
                            case "-":
                                return this.token = this.lexer.getNextToken(this.decimalCharacter), t = this._factor(), c.createUnaryNode(t);
                            case "(":
                                return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._exp(), this._match(")"), e;
                            default:
                                throw new Error("Unexpected token '".concat(this.token.symbol, "' with type '").concat(this.token.type, "' at position '").concat(this.token.index, "' in the factor function"))
                        }
                    }
                }, {
                    key: "_match",
                    value: function(e) {
                        var t = this.lexer.getIndex() - 1;
                        if (this.text[t] !== e) throw new Error("Unexpected token '".concat(this.token.symbol, "' at position '").concat(t, "' in the match function"));
                        this.token = this.lexer.getNextToken(this.decimalCharacter)
                    }
                }]), i
            }();

        function p(e) {
            return function(e) {
                if (Array.isArray(e)) return y(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || f(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function S(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var i = [],
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return i
                }
            }(e, t) || f(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function f(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? y(e, t) : void 0
            }
        }

        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }).apply(this, arguments)
        }

        function w(e) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function P(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var O, k = function() {
            function B() {
                var s = this,
                    e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e) {
                    if (!(e instanceof B)) throw new TypeError("Cannot call a class as a function")
                }(this);
                var n = B._setArgumentsValues(e, t, i),
                    a = n.domElement,
                    r = n.initialValue,
                    o = n.userOptions;
                if (this.domElement = a, this.defaultRawValue = "", this._setSettings(o, !1), this._checkElement(), this.savedCancellableValue = null, this.historyTable = [], this.historyTableIndex = -1, this.onGoingRedo = !1, this.parentForm = this._getParentForm(), !this.runOnce && this.settings.formatOnPageLoad) this._formatDefaultValueOnPageLoad(r);
                else {
                    var l;
                    if (M.isNull(r)) switch (this.settings.emptyInputBehavior) {
                        case B.options.emptyInputBehavior.min:
                            l = this.settings.minimumValue;
                            break;
                        case B.options.emptyInputBehavior.max:
                            l = this.settings.maximumValue;
                            break;
                        case B.options.emptyInputBehavior.zero:
                            l = "0";
                            break;
                        case B.options.emptyInputBehavior.focus:
                        case B.options.emptyInputBehavior.press:
                        case B.options.emptyInputBehavior.always:
                        case B.options.emptyInputBehavior.null:
                            l = "";
                            break;
                        default:
                            l = this.settings.emptyInputBehavior
                    } else l = r;
                    this._setElementAndRawValue(l)
                }
                this.runOnce = !0, this.hasEventListeners = !1, (this.isInputElement || this.isContentEditable) && (this.settings.noEventListeners || this._createEventListeners(), this._setWritePermissions(!0)), this._saveInitialValues(r), this.sessionStorageAvailable = this.constructor._storageTest(), this.storageNamePrefix = "AUTO_", this._setPersistentStorageName(), this.validState = !0, this.isFocused = !1, this.isWheelEvent = !1, this.isDropEvent = !1, this.isEditing = !1, this.rawValueOnFocus = void 0, this.internalModification = !1, this.attributeToWatch = this._getAttributeToWatch(), this.getterSetter = Object.getOwnPropertyDescriptor(this.domElement.__proto__, this.attributeToWatch), this._addWatcher(), this.settings.createLocalList && this._createLocalList(), this.constructor._addToGlobalList(this), this.global = {
                    set: function(t, e) {
                        var i = 1 < arguments.length && void 0 !== e ? e : null;
                        s.autoNumericLocalList.forEach(function(e) {
                            e.set(t, i)
                        })
                    },
                    setUnformatted: function(t, e) {
                        var i = 1 < arguments.length && void 0 !== e ? e : null;
                        s.autoNumericLocalList.forEach(function(e) {
                            e.setUnformatted(t, i)
                        })
                    },
                    get: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : null,
                            i = [];
                        return s.autoNumericLocalList.forEach(function(e) {
                            i.push(e.get())
                        }), s._executeCallback(i, t), i
                    },
                    getNumericString: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : null,
                            i = [];
                        return s.autoNumericLocalList.forEach(function(e) {
                            i.push(e.getNumericString())
                        }), s._executeCallback(i, t), i
                    },
                    getFormatted: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : null,
                            i = [];
                        return s.autoNumericLocalList.forEach(function(e) {
                            i.push(e.getFormatted())
                        }), s._executeCallback(i, t), i
                    },
                    getNumber: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : null,
                            i = [];
                        return s.autoNumericLocalList.forEach(function(e) {
                            i.push(e.getNumber())
                        }), s._executeCallback(i, t), i
                    },
                    getLocalized: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : null,
                            i = [];
                        return s.autoNumericLocalList.forEach(function(e) {
                            i.push(e.getLocalized())
                        }), s._executeCallback(i, t), i
                    },
                    reformat: function() {
                        s.autoNumericLocalList.forEach(function(e) {
                            e.reformat()
                        })
                    },
                    unformat: function() {
                        s.autoNumericLocalList.forEach(function(e) {
                            e.unformat()
                        })
                    },
                    unformatLocalized: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : null;
                        s.autoNumericLocalList.forEach(function(e) {
                            e.unformatLocalized(t)
                        })
                    },
                    update: function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        s.autoNumericLocalList.forEach(function(e) {
                            e.update.apply(e, t)
                        })
                    },
                    isPristine: function() {
                        var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                            i = !0;
                        return s.autoNumericLocalList.forEach(function(e) {
                            i && !e.isPristine(t) && (i = !1)
                        }), i
                    },
                    clear: function(e) {
                        var t = 0 < arguments.length && void 0 !== e && e;
                        s.autoNumericLocalList.forEach(function(e) {
                            e.clear(t)
                        })
                    },
                    remove: function() {
                        s.autoNumericLocalList.forEach(function(e) {
                            e.remove()
                        })
                    },
                    wipe: function() {
                        s.autoNumericLocalList.forEach(function(e) {
                            e.wipe()
                        })
                    },
                    nuke: function() {
                        s.autoNumericLocalList.forEach(function(e) {
                            e.nuke()
                        })
                    },
                    has: function(e) {
                        return e instanceof B ? s.autoNumericLocalList.has(e.node()) : s.autoNumericLocalList.has(e)
                    },
                    addObject: function(e) {
                        var t, i;
                        i = e instanceof B ? (t = e.node(), e) : B.getAutoNumericElement(t = e), s._hasLocalList() || s._createLocalList();
                        var n, a = i._getLocalList();
                        0 === a.size && (i._createLocalList(), a = i._getLocalList()), (n = a instanceof Map ? M.mergeMaps(s._getLocalList(), a) : (s._addToLocalList(t, i), s._getLocalList())).forEach(function(e) {
                            e._setLocalList(n)
                        })
                    },
                    removeObject: function(e, t) {
                        var i, n, a = 1 < arguments.length && void 0 !== t && t;
                        n = e instanceof B ? (i = e.node(), e) : B.getAutoNumericElement(i = e);
                        var r = s.autoNumericLocalList;
                        s.autoNumericLocalList.delete(i), r.forEach(function(e) {
                            e._setLocalList(s.autoNumericLocalList)
                        }), a || i !== s.node() ? n._createLocalList() : n._setLocalList(new Map)
                    },
                    empty: function(e) {
                        var t = 0 < arguments.length && void 0 !== e && e;
                        s.autoNumericLocalList.forEach(function(e) {
                            t ? e._createLocalList() : e._setLocalList(new Map)
                        })
                    },
                    elements: function() {
                        var t = [];
                        return s.autoNumericLocalList.forEach(function(e) {
                            t.push(e.node())
                        }), t
                    },
                    getList: function() {
                        return s.autoNumericLocalList
                    },
                    size: function() {
                        return s.autoNumericLocalList.size
                    }
                }, this.options = {
                    reset: function() {
                        return s.settings = {
                            rawValue: s.defaultRawValue
                        }, s.update(B.defaultSettings), s
                    },
                    allowDecimalPadding: function(e) {
                        return s.update({
                            allowDecimalPadding: e
                        }), s
                    },
                    alwaysAllowDecimalCharacter: function(e) {
                        return s.update({
                            alwaysAllowDecimalCharacter: e
                        }), s
                    },
                    caretPositionOnFocus: function(e) {
                        return s.settings.caretPositionOnFocus = e, s
                    },
                    createLocalList: function(e) {
                        return s.settings.createLocalList = e, s.settings.createLocalList ? s._hasLocalList() || s._createLocalList() : s._deleteLocalList(), s
                    },
                    currencySymbol: function(e) {
                        return s.update({
                            currencySymbol: e
                        }), s
                    },
                    currencySymbolPlacement: function(e) {
                        return s.update({
                            currencySymbolPlacement: e
                        }), s
                    },
                    decimalCharacter: function(e) {
                        return s.update({
                            decimalCharacter: e
                        }), s
                    },
                    decimalCharacterAlternative: function(e) {
                        return s.settings.decimalCharacterAlternative = e, s
                    },
                    decimalPlaces: function(e) {
                        return M.warning("Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.", s.settings.showWarnings), s.update({
                            decimalPlaces: e
                        }), s
                    },
                    decimalPlacesRawValue: function(e) {
                        return s.update({
                            decimalPlacesRawValue: e
                        }), s
                    },
                    decimalPlacesShownOnBlur: function(e) {
                        return s.update({
                            decimalPlacesShownOnBlur: e
                        }), s
                    },
                    decimalPlacesShownOnFocus: function(e) {
                        return s.update({
                            decimalPlacesShownOnFocus: e
                        }), s
                    },
                    defaultValueOverride: function(e) {
                        return s.update({
                            defaultValueOverride: e
                        }), s
                    },
                    digitalGroupSpacing: function(e) {
                        return s.update({
                            digitalGroupSpacing: e
                        }), s
                    },
                    digitGroupSeparator: function(e) {
                        return s.update({
                            digitGroupSeparator: e
                        }), s
                    },
                    divisorWhenUnfocused: function(e) {
                        return s.update({
                            divisorWhenUnfocused: e
                        }), s
                    },
                    emptyInputBehavior: function(e) {
                        return null === s.rawValue && e !== B.options.emptyInputBehavior.null && (M.warning("You are trying to modify the `emptyInputBehavior` option to something different than `'null'` (".concat(e, "), but the element raw value is currently set to `null`. This would result in an invalid `rawValue`. In order to fix that, the element value has been changed to the empty string `''`."), s.settings.showWarnings), s.rawValue = ""), s.update({
                            emptyInputBehavior: e
                        }), s
                    },
                    eventBubbles: function(e) {
                        return s.settings.eventBubbles = e, s
                    },
                    eventIsCancelable: function(e) {
                        return s.settings.eventIsCancelable = e, s
                    },
                    failOnUnknownOption: function(e) {
                        return s.settings.failOnUnknownOption = e, s
                    },
                    formatOnPageLoad: function(e) {
                        return s.settings.formatOnPageLoad = e, s
                    },
                    formulaMode: function(e) {
                        return s.settings.formulaMode = e, s
                    },
                    historySize: function(e) {
                        return s.settings.historySize = e, s
                    },
                    invalidClass: function(e) {
                        return s.settings.invalidClass = e, s
                    },
                    isCancellable: function(e) {
                        return s.settings.isCancellable = e, s
                    },
                    leadingZero: function(e) {
                        return s.update({
                            leadingZero: e
                        }), s
                    },
                    maximumValue: function(e) {
                        return s.update({
                            maximumValue: e
                        }), s
                    },
                    minimumValue: function(e) {
                        return s.update({
                            minimumValue: e
                        }), s
                    },
                    modifyValueOnWheel: function(e) {
                        return s.settings.modifyValueOnWheel = e, s
                    },
                    negativeBracketsTypeOnBlur: function(e) {
                        return s.update({
                            negativeBracketsTypeOnBlur: e
                        }), s
                    },
                    negativePositiveSignPlacement: function(e) {
                        return s.update({
                            negativePositiveSignPlacement: e
                        }), s
                    },
                    negativeSignCharacter: function(e) {
                        return s.update({
                            negativeSignCharacter: e
                        }), s
                    },
                    noEventListeners: function(e) {
                        return e === B.options.noEventListeners.noEvents && s.settings.noEventListeners === B.options.noEventListeners.addEvents && s._removeEventListeners(), s.update({
                            noEventListeners: e
                        }), s
                    },
                    onInvalidPaste: function(e) {
                        return s.settings.onInvalidPaste = e, s
                    },
                    outputFormat: function(e) {
                        return s.settings.outputFormat = e, s
                    },
                    overrideMinMaxLimits: function(e) {
                        return s.update({
                            overrideMinMaxLimits: e
                        }), s
                    },
                    positiveSignCharacter: function(e) {
                        return s.update({
                            positiveSignCharacter: e
                        }), s
                    },
                    rawValueDivisor: function(e) {
                        return s.update({
                            rawValueDivisor: e
                        }), s
                    },
                    readOnly: function(e) {
                        return s.settings.readOnly = e, s._setWritePermissions(), s
                    },
                    roundingMethod: function(e) {
                        return s.update({
                            roundingMethod: e
                        }), s
                    },
                    saveValueToSessionStorage: function(e) {
                        return s.update({
                            saveValueToSessionStorage: e
                        }), s
                    },
                    symbolWhenUnfocused: function(e) {
                        return s.update({
                            symbolWhenUnfocused: e
                        }), s
                    },
                    selectNumberOnly: function(e) {
                        return s.settings.selectNumberOnly = e, s
                    },
                    selectOnFocus: function(e) {
                        return s.settings.selectOnFocus = e, s
                    },
                    serializeSpaces: function(e) {
                        return s.settings.serializeSpaces = e, s
                    },
                    showOnlyNumbersOnFocus: function(e) {
                        return s.update({
                            showOnlyNumbersOnFocus: e
                        }), s
                    },
                    showPositiveSign: function(e) {
                        return s.update({
                            showPositiveSign: e
                        }), s
                    },
                    showWarnings: function(e) {
                        return s.settings.showWarnings = e, s
                    },
                    styleRules: function(e) {
                        return s.update({
                            styleRules: e
                        }), s
                    },
                    suffixText: function(e) {
                        return s.update({
                            suffixText: e
                        }), s
                    },
                    unformatOnHover: function(e) {
                        return s.settings.unformatOnHover = e, s
                    },
                    unformatOnSubmit: function(e) {
                        return s.settings.unformatOnSubmit = e, s
                    },
                    valuesToStrings: function(e) {
                        return s.update({
                            valuesToStrings: e
                        }), s
                    },
                    watchExternalChanges: function(e) {
                        return s.update({
                            watchExternalChanges: e
                        }), s
                    },
                    wheelOn: function(e) {
                        return s.settings.wheelOn = e, s
                    },
                    wheelStep: function(e) {
                        return s.settings.wheelStep = e, s
                    }
                }, this._triggerEvent(B.events.initialized, this.domElement, {
                    newValue: M.getElementValue(this.domElement),
                    newRawValue: this.rawValue,
                    error: null,
                    aNElement: this
                })
            }
            var e, t;
            return t = [{
                key: "version",
                value: function() {
                    return "4.6.0"
                }
            }, {
                key: "_setArgumentsValues",
                value: function(e, t, i) {
                    M.isNull(e) && M.throwError("At least one valid parameter is needed in order to initialize an AutoNumeric object");
                    var n, a, r, s = M.isElement(e),
                        o = M.isString(e),
                        l = M.isObject(t),
                        u = Array.isArray(t) && 0 < t.length,
                        c = M.isNumberOrArabic(t) || "" === t,
                        h = this._isPreDefinedOptionValid(t),
                        m = M.isNull(t),
                        g = M.isEmptyString(t),
                        d = M.isObject(i),
                        v = Array.isArray(i) && 0 < i.length,
                        p = M.isNull(i),
                        f = this._isPreDefinedOptionValid(i);
                    return s && m && p ? (n = e, a = r = null) : s && c && p ? (n = e, r = t, a = null) : s && l && p ? (n = e, r = null, a = t) : s && h && p ? (n = e, r = null, a = this._getOptionObject(t)) : s && u && p ? (n = e, r = null, a = this.mergeOptions(t)) : s && (m || g) && d ? (n = e, r = null, a = i) : s && (m || g) && v ? (n = e, r = null, a = this.mergeOptions(i)) : o && m && p ? (n = document.querySelector(e), a = r = null) : o && l && p ? (n = document.querySelector(e), r = null, a = t) : o && h && p ? (n = document.querySelector(e), r = null, a = this._getOptionObject(t)) : o && u && p ? (n = document.querySelector(e), r = null, a = this.mergeOptions(t)) : o && (m || g) && d ? (n = document.querySelector(e), r = null, a = i) : o && (m || g) && v ? (n = document.querySelector(e), r = null, a = this.mergeOptions(i)) : o && c && p ? (n = document.querySelector(e), r = t, a = null) : o && c && d ? (n = document.querySelector(e), r = t, a = i) : o && c && f ? (n = document.querySelector(e), r = t, a = this._getOptionObject(i)) : o && c && v ? (n = document.querySelector(e), r = t, a = this.mergeOptions(i)) : s && c && d ? (n = e, r = t, a = i) : s && c && f ? (n = e, r = t, a = this._getOptionObject(i)) : s && c && v ? (n = e, r = t, a = this.mergeOptions(i)) : M.throwError("The parameters given to the AutoNumeric object are not valid, '".concat(e, "', '").concat(t, "' and '").concat(i, "' given.")), M.isNull(n) && M.throwError("The selector '".concat(e, "' did not select any valid DOM element. Please check on which element you called AutoNumeric.")), {
                        domElement: n,
                        initialValue: r,
                        userOptions: a
                    }
                }
            }, {
                key: "mergeOptions",
                value: function(e) {
                    var t = this,
                        i = {};
                    return e.forEach(function(e) {
                        b(i, t._getOptionObject(e))
                    }), i
                }
            }, {
                key: "_isPreDefinedOptionValid",
                value: function(e) {
                    return Object.prototype.hasOwnProperty.call(B.predefinedOptions, e)
                }
            }, {
                key: "_getOptionObject",
                value: function(e) {
                    var t;
                    return M.isString(e) ? null == (t = B.getPredefinedOptions()[e]) && M.warning("The given pre-defined option [".concat(e, "] is not recognized by autoNumeric. Please check that pre-defined option name."), !0) : t = e, t
                }
            }, {
                key: "_doesFormHandlerListExists",
                value: function() {
                    var e = w(window.aNFormHandlerMap);
                    return "undefined" !== e && "object" === e
                }
            }, {
                key: "_createFormHandlerList",
                value: function() {
                    window.aNFormHandlerMap = new Map
                }
            }, {
                key: "_checkValuesToStringsArray",
                value: function(e, t) {
                    return M.isInArray(String(e), t)
                }
            }, {
                key: "_checkValuesToStringsSettings",
                value: function(e, t) {
                    return this._checkValuesToStringsArray(e, Object.keys(t.valuesToStrings))
                }
            }, {
                key: "_checkStringsToValuesSettings",
                value: function(e, t) {
                    return this._checkValuesToStringsArray(e, Object.values(t.valuesToStrings))
                }
            }, {
                key: "_unformatAltHovered",
                value: function(e) {
                    e.hoveredWithAlt = !0, e.unformat()
                }
            }, {
                key: "_reformatAltHovered",
                value: function(e) {
                    e.hoveredWithAlt = !1, e.reformat()
                }
            }, {
                key: "_getChildANInputElement",
                value: function(e) {
                    var t = this,
                        i = e.getElementsByTagName("input"),
                        n = [];
                    return Array.prototype.slice.call(i, 0).forEach(function(e) {
                        t.test(e) && n.push(e)
                    }), n
                }
            }, {
                key: "test",
                value: function(e) {
                    return this._isInGlobalList(M.domElement(e))
                }
            }, {
                key: "_createWeakMap",
                value: function(e) {
                    window[e] = new WeakMap
                }
            }, {
                key: "_createGlobalList",
                value: function() {
                    this.autoNumericGlobalListName = "autoNumericGlobalList", this._createWeakMap(this.autoNumericGlobalListName)
                }
            }, {
                key: "_doesGlobalListExists",
                value: function() {
                    var e = w(window[this.autoNumericGlobalListName]);
                    return "undefined" !== e && "object" === e
                }
            }, {
                key: "_addToGlobalList",
                value: function(e) {
                    this._doesGlobalListExists() || this._createGlobalList();
                    var t = e.node();
                    if (this._isInGlobalList(t)) {
                        if (this._getFromGlobalList(t) === this) return;
                        M.warning("A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.", e.getSettings().showWarnings)
                    }
                    window[this.autoNumericGlobalListName].set(t, e)
                }
            }, {
                key: "_removeFromGlobalList",
                value: function(e) {
                    this._doesGlobalListExists() && window[this.autoNumericGlobalListName].delete(e.node())
                }
            }, {
                key: "_getFromGlobalList",
                value: function(e) {
                    return this._doesGlobalListExists() ? window[this.autoNumericGlobalListName].get(e) : null
                }
            }, {
                key: "_isInGlobalList",
                value: function(e) {
                    return !!this._doesGlobalListExists() && window[this.autoNumericGlobalListName].has(e)
                }
            }, {
                key: "validate",
                value: function(e, t, i) {
                    var n = !(1 < arguments.length && void 0 !== t) || t,
                        a = 2 < arguments.length && void 0 !== i ? i : null;
                    !M.isUndefinedOrNullOrEmpty(e) && M.isObject(e) || M.throwError("The userOptions are invalid ; it should be a valid object, [".concat(e, "] given."));
                    var r, s = M.isObject(a);
                    s || M.isNull(a) || M.throwError("The 'originalOptions' parameter is invalid ; it should either be a valid option object or `null`, [".concat(e, "] given.")), M.isNull(e) || this._convertOldOptionsToNewOnes(e), r = n ? b({}, this.getDefaultConfig(), e) : e, M.isTrueOrFalseString(r.showWarnings) || M.isBoolean(r.showWarnings) || M.throwError("The debug option 'showWarnings' is invalid ; it should be either 'true' or 'false', [".concat(r.showWarnings, "] given."));
                    var o, l = /^[0-9]+$/,
                        u = /[0-9]+/,
                        c = /^-?[0-9]+(\.?[0-9]+)?$/,
                        h = /^[0-9]+(\.?[0-9]+)?$/;
                    M.isTrueOrFalseString(r.allowDecimalPadding) || M.isBoolean(r.allowDecimalPadding) || r.allowDecimalPadding === B.options.allowDecimalPadding.floats || M.throwError("The decimal padding option 'allowDecimalPadding' is invalid ; it should either be `false`, `true` or `'floats'`, [".concat(r.allowDecimalPadding, "] given.")), r.allowDecimalPadding !== B.options.allowDecimalPadding.never && "false" !== r.allowDecimalPadding || r.decimalPlaces === B.options.decimalPlaces.none && r.decimalPlacesShownOnBlur === B.options.decimalPlacesShownOnBlur.none && r.decimalPlacesShownOnFocus === B.options.decimalPlacesShownOnFocus.none || M.warning("Setting 'allowDecimalPadding' to [".concat(r.allowDecimalPadding, "] will override the current 'decimalPlaces*' settings [").concat(r.decimalPlaces, ", ").concat(r.decimalPlacesShownOnBlur, " and ").concat(r.decimalPlacesShownOnFocus, "]."), r.showWarnings), M.isTrueOrFalseString(r.alwaysAllowDecimalCharacter) || M.isBoolean(r.alwaysAllowDecimalCharacter) || M.throwError("The option 'alwaysAllowDecimalCharacter' is invalid ; it should either be `true` or `false`, [".concat(r.alwaysAllowDecimalCharacter, "] given.")), M.isNull(r.caretPositionOnFocus) || M.isInArray(r.caretPositionOnFocus, [B.options.caretPositionOnFocus.start, B.options.caretPositionOnFocus.end, B.options.caretPositionOnFocus.decimalLeft, B.options.caretPositionOnFocus.decimalRight]) || M.throwError("The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be `null`, 'focus', 'press', 'always' or 'zero', [".concat(r.caretPositionOnFocus, "] given.")), o = s ? a : this._correctCaretPositionOnFocusAndSelectOnFocusOptions(e), M.isNull(o) || o.caretPositionOnFocus === B.options.caretPositionOnFocus.doNoForceCaretPosition || o.selectOnFocus !== B.options.selectOnFocus.select || M.warning("The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '".concat(o.caretPositionOnFocus, "'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'."), r.showWarnings), M.isInArray(r.digitGroupSeparator, [B.options.digitGroupSeparator.comma, B.options.digitGroupSeparator.dot, B.options.digitGroupSeparator.normalSpace, B.options.digitGroupSeparator.thinSpace, B.options.digitGroupSeparator.narrowNoBreakSpace, B.options.digitGroupSeparator.noBreakSpace, B.options.digitGroupSeparator.noSeparator, B.options.digitGroupSeparator.apostrophe, B.options.digitGroupSeparator.arabicThousandsSeparator, B.options.digitGroupSeparator.dotAbove, B.options.digitGroupSeparator.privateUseTwo]) || M.throwError("The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', \"'\", '', ' ', ' ', ' ', ' ' or empty (''), [".concat(r.digitGroupSeparator, "] given.")), M.isTrueOrFalseString(r.showOnlyNumbersOnFocus) || M.isBoolean(r.showOnlyNumbersOnFocus) || M.throwError("The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'true' or 'false', [".concat(r.showOnlyNumbersOnFocus, "] given.")), M.isInArray(r.digitalGroupSpacing, [B.options.digitalGroupSpacing.two, B.options.digitalGroupSpacing.twoScaled, B.options.digitalGroupSpacing.three, B.options.digitalGroupSpacing.four]) || 2 <= r.digitalGroupSpacing && r.digitalGroupSpacing <= 4 || M.throwError("The grouping separator option for thousands 'digitalGroupSpacing' is invalid ; it should be '2', '2s', '3', or '4', [".concat(r.digitalGroupSpacing, "] given.")), M.isInArray(r.decimalCharacter, [B.options.decimalCharacter.comma, B.options.decimalCharacter.dot, B.options.decimalCharacter.middleDot, B.options.decimalCharacter.arabicDecimalSeparator, B.options.decimalCharacter.decimalSeparatorKeySymbol]) || M.throwError("The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [".concat(r.decimalCharacter, "] given.")), r.decimalCharacter === r.digitGroupSeparator && M.throwError("autoNumeric will not function properly when the decimal character 'decimalCharacter' [".concat(r.decimalCharacter, "] and the thousand separator 'digitGroupSeparator' [").concat(r.digitGroupSeparator, "] are the same character.")), M.isNull(r.decimalCharacterAlternative) || M.isString(r.decimalCharacterAlternative) || M.throwError("The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [".concat(r.decimalCharacterAlternative, "] given.")), "" === r.currencySymbol || M.isString(r.currencySymbol) || M.throwError("The currency symbol option 'currencySymbol' is invalid ; it should be a string, [".concat(r.currencySymbol, "] given.")), M.isInArray(r.currencySymbolPlacement, [B.options.currencySymbolPlacement.prefix, B.options.currencySymbolPlacement.suffix]) || M.throwError("The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [".concat(r.currencySymbolPlacement, "] given.")), M.isInArray(r.negativePositiveSignPlacement, [B.options.negativePositiveSignPlacement.prefix, B.options.negativePositiveSignPlacement.suffix, B.options.negativePositiveSignPlacement.left, B.options.negativePositiveSignPlacement.right, B.options.negativePositiveSignPlacement.none]) || M.throwError("The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [".concat(r.negativePositiveSignPlacement, "] given.")), M.isTrueOrFalseString(r.showPositiveSign) || M.isBoolean(r.showPositiveSign) || M.throwError("The show positive sign option 'showPositiveSign' is invalid ; it should be either 'true' or 'false', [".concat(r.showPositiveSign, "] given.")), M.isString(r.suffixText) && ("" === r.suffixText || !M.isNegative(r.suffixText, r.negativeSignCharacter) && !u.test(r.suffixText)) || M.throwError("The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '".concat(r.negativeSignCharacter, "' nor any numerical characters, [").concat(r.suffixText, "] given.")), M.isString(r.negativeSignCharacter) && 1 === r.negativeSignCharacter.length && !M.isUndefinedOrNullOrEmpty(r.negativeSignCharacter) && !u.test(r.negativeSignCharacter) || M.throwError("The negative sign character option 'negativeSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [".concat(r.negativeSignCharacter, "] given.")), M.isString(r.positiveSignCharacter) && 1 === r.positiveSignCharacter.length && !M.isUndefinedOrNullOrEmpty(r.positiveSignCharacter) && !u.test(r.positiveSignCharacter) || M.throwError("The positive sign character option 'positiveSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [".concat(r.positiveSignCharacter, "] given.\nIf you want to hide the positive sign character, you need to set the `showPositiveSign` option to `true`.")), r.negativeSignCharacter === r.positiveSignCharacter && M.throwError("The positive 'positiveSignCharacter' and negative 'negativeSignCharacter' sign characters cannot be identical ; [".concat(r.negativeSignCharacter, "] given."));
                    var m = S(M.isNull(r.negativeBracketsTypeOnBlur) ? ["", ""] : r.negativeBracketsTypeOnBlur.split(","), 2),
                        g = m[0],
                        d = m[1];
                    (M.contains(r.digitGroupSeparator, r.negativeSignCharacter) || M.contains(r.decimalCharacter, r.negativeSignCharacter) || M.contains(r.decimalCharacterAlternative, r.negativeSignCharacter) || M.contains(g, r.negativeSignCharacter) || M.contains(d, r.negativeSignCharacter) || M.contains(r.suffixText, r.negativeSignCharacter)) && M.throwError("The negative sign character option 'negativeSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [".concat(r.negativeSignCharacter, "] given.")), (M.contains(r.digitGroupSeparator, r.positiveSignCharacter) || M.contains(r.decimalCharacter, r.positiveSignCharacter) || M.contains(r.decimalCharacterAlternative, r.positiveSignCharacter) || M.contains(g, r.positiveSignCharacter) || M.contains(d, r.positiveSignCharacter) || M.contains(r.suffixText, r.positiveSignCharacter)) && M.throwError("The positive sign character option 'positiveSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [".concat(r.positiveSignCharacter, "] given.")), M.isNull(r.overrideMinMaxLimits) || M.isInArray(r.overrideMinMaxLimits, [B.options.overrideMinMaxLimits.ceiling, B.options.overrideMinMaxLimits.floor, B.options.overrideMinMaxLimits.ignore, B.options.overrideMinMaxLimits.invalid]) || M.throwError("The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor', 'ignore' or 'invalid', [".concat(r.overrideMinMaxLimits, "] given.")), r.overrideMinMaxLimits !== B.options.overrideMinMaxLimits.invalid && r.overrideMinMaxLimits !== B.options.overrideMinMaxLimits.ignore && (0 < r.minimumValue || r.maximumValue < 0) && M.warning("You've set a `minimumValue` or a `maximumValue` excluding the value `0`. AutoNumeric will force the users to always have a valid value in the input, hence preventing them to clear the field. If you want to allow for temporary invalid values (ie. out-of-range), you should use the 'invalid' option for the 'overrideMinMaxLimits' setting."), M.isString(r.maximumValue) && c.test(r.maximumValue) || M.throwError("The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [".concat(r.maximumValue, "] given.")), M.isString(r.minimumValue) && c.test(r.minimumValue) || M.throwError("The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [".concat(r.minimumValue, "] given.")), parseFloat(r.minimumValue) > parseFloat(r.maximumValue) && M.throwError("The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [".concat(r.minimumValue, "] should be smaller than 'maximumValue' [").concat(r.maximumValue, "].")), M.isInt(r.decimalPlaces) && 0 <= r.decimalPlaces || M.isString(r.decimalPlaces) && l.test(r.decimalPlaces) || M.throwError("The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [".concat(r.decimalPlaces, "] given.")), M.isNull(r.decimalPlacesRawValue) || M.isInt(r.decimalPlacesRawValue) && 0 <= r.decimalPlacesRawValue || M.isString(r.decimalPlacesRawValue) && l.test(r.decimalPlacesRawValue) || M.throwError("The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or `null`, [".concat(r.decimalPlacesRawValue, "] given.")), this._validateDecimalPlacesRawValue(r), M.isNull(r.decimalPlacesShownOnFocus) || l.test(String(r.decimalPlacesShownOnFocus)) || M.throwError("The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or `null`, [".concat(r.decimalPlacesShownOnFocus, "] given.")), !M.isNull(r.decimalPlacesShownOnFocus) && Number(r.decimalPlaces) > Number(r.decimalPlacesShownOnFocus) && M.warning("The extended decimal places 'decimalPlacesShownOnFocus' [".concat(r.decimalPlacesShownOnFocus, "] should be greater than the 'decimalPlaces' [").concat(r.decimalPlaces, "] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?"), r.showWarnings), (M.isNull(r.divisorWhenUnfocused) || h.test(r.divisorWhenUnfocused)) && 0 !== r.divisorWhenUnfocused && "0" !== r.divisorWhenUnfocused && 1 !== r.divisorWhenUnfocused && "1" !== r.divisorWhenUnfocused || M.throwError("The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [".concat(r.divisorWhenUnfocused, "] given.")), M.isNull(r.decimalPlacesShownOnBlur) || l.test(r.decimalPlacesShownOnBlur) || M.throwError("The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or `null`, [".concat(r.decimalPlacesShownOnBlur, "] given.")), M.isNull(r.symbolWhenUnfocused) || M.isString(r.symbolWhenUnfocused) || M.throwError("The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [".concat(r.symbolWhenUnfocused, "] given.")), M.isTrueOrFalseString(r.saveValueToSessionStorage) || M.isBoolean(r.saveValueToSessionStorage) || M.throwError("The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'true' or 'false', [".concat(r.saveValueToSessionStorage, "] given.")), M.isInArray(r.onInvalidPaste, [B.options.onInvalidPaste.error, B.options.onInvalidPaste.ignore, B.options.onInvalidPaste.clamp, B.options.onInvalidPaste.truncate, B.options.onInvalidPaste.replace]) || M.throwError("The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [".concat(r.onInvalidPaste, "] given.")), M.isInArray(r.roundingMethod, [B.options.roundingMethod.halfUpSymmetric, B.options.roundingMethod.halfUpAsymmetric, B.options.roundingMethod.halfDownSymmetric, B.options.roundingMethod.halfDownAsymmetric, B.options.roundingMethod.halfEvenBankersRounding, B.options.roundingMethod.upRoundAwayFromZero, B.options.roundingMethod.downRoundTowardZero, B.options.roundingMethod.toCeilingTowardPositiveInfinity, B.options.roundingMethod.toFloorTowardNegativeInfinity, B.options.roundingMethod.toNearest05, B.options.roundingMethod.toNearest05Alt, B.options.roundingMethod.upToNext05, B.options.roundingMethod.downToNext05]) || M.throwError("The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [".concat(r.roundingMethod, "] given.")), M.isNull(r.negativeBracketsTypeOnBlur) || M.isInArray(r.negativeBracketsTypeOnBlur, [B.options.negativeBracketsTypeOnBlur.parentheses, B.options.negativeBracketsTypeOnBlur.brackets, B.options.negativeBracketsTypeOnBlur.chevrons, B.options.negativeBracketsTypeOnBlur.curlyBraces, B.options.negativeBracketsTypeOnBlur.angleBrackets, B.options.negativeBracketsTypeOnBlur.japaneseQuotationMarks, B.options.negativeBracketsTypeOnBlur.halfBrackets, B.options.negativeBracketsTypeOnBlur.whiteSquareBrackets, B.options.negativeBracketsTypeOnBlur.quotationMarks, B.options.negativeBracketsTypeOnBlur.guillemets]) || M.throwError("The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [".concat(r.negativeBracketsTypeOnBlur, "] given.")), (M.isString(r.emptyInputBehavior) || M.isNumber(r.emptyInputBehavior)) && (M.isInArray(r.emptyInputBehavior, [B.options.emptyInputBehavior.focus, B.options.emptyInputBehavior.press, B.options.emptyInputBehavior.always, B.options.emptyInputBehavior.min, B.options.emptyInputBehavior.max, B.options.emptyInputBehavior.zero, B.options.emptyInputBehavior.null]) || c.test(r.emptyInputBehavior)) || M.throwError("The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'min', 'max', 'zero', 'null', a number, or a string that represents a number, [".concat(r.emptyInputBehavior, "] given.")), r.emptyInputBehavior === B.options.emptyInputBehavior.zero && (0 < r.minimumValue || r.maximumValue < 0) && M.throwError("The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [".concat(r.minimumValue, ", ").concat(r.maximumValue, "].")), c.test(String(r.emptyInputBehavior)) && (this._isWithinRangeWithOverrideOption(r.emptyInputBehavior, r) || M.throwError("The 'emptyInputBehavior' option is set to a number or a string that represents a number, but its value [".concat(r.emptyInputBehavior, "] is outside of the range defined by the 'minimumValue' and 'maximumValue' options [").concat(r.minimumValue, ", ").concat(r.maximumValue, "]."))), M.isTrueOrFalseString(r.eventBubbles) || M.isBoolean(r.eventBubbles) || M.throwError("The event bubbles option 'eventBubbles' is invalid ; it should be either 'true' or 'false', [".concat(r.eventBubbles, "] given.")), M.isTrueOrFalseString(r.eventIsCancelable) || M.isBoolean(r.eventIsCancelable) || M.throwError("The event is cancelable option 'eventIsCancelable' is invalid ; it should be either 'true' or 'false', [".concat(r.eventIsCancelable, "] given.")), !M.isBoolean(r.invalidClass) && /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(r.invalidClass) || M.throwError("The name of the 'invalidClass' option is not a valid CSS class name ; it should not be empty, and should follow the '^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$' regex, [".concat(r.invalidClass, "] given.")), M.isInArray(r.leadingZero, [B.options.leadingZero.allow, B.options.leadingZero.deny, B.options.leadingZero.keep]) || M.throwError("The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [".concat(r.leadingZero, "] given.")), M.isTrueOrFalseString(r.formatOnPageLoad) || M.isBoolean(r.formatOnPageLoad) || M.throwError("The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'true' or 'false', [".concat(r.formatOnPageLoad, "] given.")), M.isTrueOrFalseString(r.formulaMode) || M.isBoolean(r.formulaMode) || M.throwError("The formula mode option 'formulaMode' is invalid ; it should be either 'true' or 'false', [".concat(r.formulaMode, "] given.")), l.test(r.historySize) && 0 !== r.historySize || M.throwError("The history size option 'historySize' is invalid ; it should be a positive integer, [".concat(r.historySize, "] given.")), M.isTrueOrFalseString(r.selectNumberOnly) || M.isBoolean(r.selectNumberOnly) || M.throwError("The select number only option 'selectNumberOnly' is invalid ; it should be either 'true' or 'false', [".concat(r.selectNumberOnly, "] given.")), M.isTrueOrFalseString(r.selectOnFocus) || M.isBoolean(r.selectOnFocus) || M.throwError("The select on focus option 'selectOnFocus' is invalid ; it should be either 'true' or 'false', [".concat(r.selectOnFocus, "] given.")), M.isNull(r.defaultValueOverride) || "" === r.defaultValueOverride || c.test(r.defaultValueOverride) || M.throwError("The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [".concat(r.defaultValueOverride, "] given.")), M.isTrueOrFalseString(r.unformatOnSubmit) || M.isBoolean(r.unformatOnSubmit) || M.throwError("The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'true' or 'false', [".concat(r.unformatOnSubmit, "] given.")), M.isNull(r.valuesToStrings) || M.isObject(r.valuesToStrings) || M.throwError("The option 'valuesToStrings' is invalid ; it should be an object, ideally with 'key -> value' entries, [".concat(r.valuesToStrings, "] given.")), M.isNull(r.outputFormat) || M.isInArray(r.outputFormat, [B.options.outputFormat.string, B.options.outputFormat.number, B.options.outputFormat.dot, B.options.outputFormat.negativeDot, B.options.outputFormat.comma, B.options.outputFormat.negativeComma, B.options.outputFormat.dotNegative, B.options.outputFormat.commaNegative]) || M.throwError("The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [".concat(r.outputFormat, "] given.")), M.isTrueOrFalseString(r.isCancellable) || M.isBoolean(r.isCancellable) || M.throwError("The cancellable behavior option 'isCancellable' is invalid ; it should be either 'true' or 'false', [".concat(r.isCancellable, "] given.")), M.isTrueOrFalseString(r.modifyValueOnWheel) || M.isBoolean(r.modifyValueOnWheel) || M.throwError("The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'true' or 'false', [".concat(r.modifyValueOnWheel, "] given.")), M.isTrueOrFalseString(r.watchExternalChanges) || M.isBoolean(r.watchExternalChanges) || M.throwError("The option 'watchExternalChanges' is invalid ; it should be either 'true' or 'false', [".concat(r.watchExternalChanges, "] given.")), M.isInArray(r.wheelOn, [B.options.wheelOn.focus, B.options.wheelOn.hover]) || M.throwError("The wheel behavior option 'wheelOn' is invalid ; it should either be 'focus' or 'hover', [".concat(r.wheelOn, "] given.")), (M.isString(r.wheelStep) || M.isNumber(r.wheelStep)) && ("progressive" === r.wheelStep || h.test(r.wheelStep)) && 0 !== Number(r.wheelStep) || M.throwError("The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [".concat(r.wheelStep, "] given.")), M.isInArray(r.serializeSpaces, [B.options.serializeSpaces.plus, B.options.serializeSpaces.percent]) || M.throwError("The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [".concat(r.serializeSpaces, "] given.")), M.isTrueOrFalseString(r.noEventListeners) || M.isBoolean(r.noEventListeners) || M.throwError("The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'true' or 'false', [".concat(r.noEventListeners, "] given.")), M.isNull(r.styleRules) || M.isObject(r.styleRules) && (Object.prototype.hasOwnProperty.call(r.styleRules, "positive") || Object.prototype.hasOwnProperty.call(r.styleRules, "negative") || Object.prototype.hasOwnProperty.call(r.styleRules, "ranges") || Object.prototype.hasOwnProperty.call(r.styleRules, "userDefined")) || M.throwError("The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [".concat(r.styleRules, "] given.")), M.isNull(r.styleRules) || !Object.prototype.hasOwnProperty.call(r.styleRules, "userDefined") || M.isNull(r.styleRules.userDefined) || r.styleRules.userDefined.forEach(function(e) {
                        Object.prototype.hasOwnProperty.call(e, "callback") && !M.isFunction(e.callback) && M.throwError("The callback defined in the `userDefined` attribute is not a function, ".concat(w(e.callback), " given."))
                    }), (M.isNull(r.rawValueDivisor) || h.test(r.rawValueDivisor)) && 0 !== r.rawValueDivisor && "0" !== r.rawValueDivisor && 1 !== r.rawValueDivisor && "1" !== r.rawValueDivisor || M.throwError("The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [".concat(r.rawValueDivisor, "] given.")), M.isTrueOrFalseString(r.readOnly) || M.isBoolean(r.readOnly) || M.throwError("The option 'readOnly' is invalid ; it should be either 'true' or 'false', [".concat(r.readOnly, "] given.")), M.isTrueOrFalseString(r.unformatOnHover) || M.isBoolean(r.unformatOnHover) || M.throwError("The option 'unformatOnHover' is invalid ; it should be either 'true' or 'false', [".concat(r.unformatOnHover, "] given.")), M.isTrueOrFalseString(r.failOnUnknownOption) || M.isBoolean(r.failOnUnknownOption) || M.throwError("The debug option 'failOnUnknownOption' is invalid ; it should be either 'true' or 'false', [".concat(r.failOnUnknownOption, "] given.")), M.isTrueOrFalseString(r.createLocalList) || M.isBoolean(r.createLocalList) || M.throwError("The debug option 'createLocalList' is invalid ; it should be either 'true' or 'false', [".concat(r.createLocalList, "] given."))
                }
            }, {
                key: "_validateDecimalPlacesRawValue",
                value: function(e) {
                    M.isNull(e.decimalPlacesRawValue) || (e.decimalPlacesRawValue < e.decimalPlaces && M.warning("The number of decimal places to store in the raw value [".concat(e.decimalPlacesRawValue, "] is lower than the ones to display [").concat(e.decimalPlaces, "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlaces`."), e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnFocus && M.warning("The number of decimal places to store in the raw value [".concat(e.decimalPlacesRawValue, "] is lower than the ones shown on focus [").concat(e.decimalPlacesShownOnFocus, "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnFocus`."), e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnBlur && M.warning("The number of decimal places to store in the raw value [".concat(e.decimalPlacesRawValue, "] is lower than the ones shown when unfocused [").concat(e.decimalPlacesShownOnBlur, "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnBlur`."), e.showWarnings))
                }
            }, {
                key: "areSettingsValid",
                value: function(e) {
                    var t = !0;
                    try {
                        this.validate(e, !0)
                    } catch (e) {
                        t = !1
                    }
                    return t
                }
            }, {
                key: "getDefaultConfig",
                value: function() {
                    return B.defaultSettings
                }
            }, {
                key: "getPredefinedOptions",
                value: function() {
                    return B.predefinedOptions
                }
            }, {
                key: "_generateOptionsObjectFromOptionsArray",
                value: function(e) {
                    var t, i = this;
                    return M.isUndefinedOrNullOrEmpty(e) || 0 === e.length ? t = null : (t = {}, 1 === e.length && Array.isArray(e[0]) ? e[0].forEach(function(e) {
                        b(t, i._getOptionObject(e))
                    }) : 1 <= e.length && e.forEach(function(e) {
                        b(t, i._getOptionObject(e))
                    })), t
                }
            }, {
                key: "format",
                value: function(e) {
                    if (M.isUndefined(e) || null === e) return null;
                    var t;
                    t = M.isElement(e) ? M.getElementValue(e) : e, M.isString(t) || M.isNumber(t) || M.throwError('The value "'.concat(t, '" being "set" is not numeric and therefore cannot be used appropriately.'));
                    for (var i = arguments.length, n = new Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                    var r = this._generateOptionsObjectFromOptionsArray(n),
                        s = b({}, this.getDefaultConfig(), r);
                    s.isNegativeSignAllowed = t < 0, s.isPositiveSignAllowed = 0 <= t, this._setBrackets(s), this._cachesUsualRegularExpressions(s, {});
                    var o = this._toNumericValue(t, s);
                    return isNaN(Number(o)) && M.throwError("The value [".concat(o, "] that you are trying to format is not a recognized number.")), this._isWithinRangeWithOverrideOption(o, s) || (M.triggerEvent(B.events.formatted, document, {
                        oldValue: null,
                        newValue: null,
                        oldRawValue: null,
                        newRawValue: null,
                        isPristine: null,
                        error: "Range test failed",
                        aNElement: null
                    }, !0, !0), M.throwError("The value [".concat(o, "] being set falls outside of the minimumValue [").concat(s.minimumValue, "] and maximumValue [").concat(s.maximumValue, "] range set for this element"))), s.valuesToStrings && this._checkValuesToStringsSettings(t, s) ? s.valuesToStrings[t] : (this._correctNegativePositiveSignPlacementOption(s), this._calculateDecimalPlacesOnInit(s), M.isUndefinedOrNullOrEmpty(s.rawValueDivisor) || 0 === s.rawValueDivisor || "" === o || null === o || (o *= s.rawValueDivisor), o = this._roundFormattedValueShownOnFocus(o, s), o = this._modifyNegativeSignAndDecimalCharacterForFormattedValue(o, s), o = this._addGroupSeparators(o, s, !1, o))
                }
            }, {
                key: "formatAndSet",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null,
                        n = this.format(e, i);
                    return M.setElementValue(e, n), n
                }
            }, {
                key: "unformat",
                value: function(e) {
                    if (M.isNumberStrict(e)) return e;
                    var t;
                    if ("" === (t = M.isElement(e) ? M.getElementValue(e) : e)) return "";
                    if (M.isUndefined(t) || null === t) return null;
                    (M.isArray(t) || M.isObject(t)) && M.throwError("A number or a string representing a number is needed to be able to unformat it, [".concat(t, "] given."));
                    for (var i = arguments.length, n = new Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                    var r = this._generateOptionsObjectFromOptionsArray(n),
                        s = b({}, this.getDefaultConfig(), r);
                    if (s.isNegativeSignAllowed = !1, s.isPositiveSignAllowed = !0, t = t.toString(), s.valuesToStrings && this._checkStringsToValuesSettings(t, s)) return M.objectKeyLookup(s.valuesToStrings, t);
                    if (M.isNegative(t, s.negativeSignCharacter)) s.isNegativeSignAllowed = !0, s.isPositiveSignAllowed = !1;
                    else if (!M.isNull(s.negativeBracketsTypeOnBlur)) {
                        var o = S(s.negativeBracketsTypeOnBlur.split(","), 2);
                        s.firstBracket = o[0], s.lastBracket = o[1], t.charAt(0) === s.firstBracket && t.charAt(t.length - 1) === s.lastBracket && (s.isNegativeSignAllowed = !0, s.isPositiveSignAllowed = !1, t = this._removeBrackets(t, s, !1))
                    }
                    return t = this._convertToNumericString(t, s), new RegExp("[^+-0123456789.]", "gi").test(t) ? NaN : (this._correctNegativePositiveSignPlacementOption(s), s.decimalPlacesRawValue ? s.originalDecimalPlacesRawValue = s.decimalPlacesRawValue : s.originalDecimalPlacesRawValue = s.decimalPlaces, this._calculateDecimalPlacesOnInit(s), M.isUndefinedOrNullOrEmpty(s.rawValueDivisor) || 0 === s.rawValueDivisor || "" === t || null === t || (t /= s.rawValueDivisor), t = (t = this._roundRawValue(t, s)).replace(s.decimalCharacter, "."), t = this._toLocale(t, s.outputFormat, s))
                }
            }, {
                key: "unformatAndSet",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null,
                        n = this.unformat(e, i);
                    return M.setElementValue(e, n), n
                }
            }, {
                key: "localize",
                value: function(e, t) {
                    var i, n, a = 1 < arguments.length && void 0 !== t ? t : null;
                    return "" === (i = M.isElement(e) ? M.getElementValue(e) : e) ? "" : (M.isNull(a) && (a = B.defaultSettings), i = this.unformat(i, a), 0 === Number(i) && a.leadingZero !== B.options.leadingZero.keep && (i = "0"), n = M.isNull(a) ? a.outputFormat : B.defaultSettings.outputFormat, this._toLocale(i, n, a))
                }
            }, {
                key: "localizeAndSet",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null,
                        n = this.localize(e, i);
                    return M.setElementValue(e, n), n
                }
            }, {
                key: "isManagedByAutoNumeric",
                value: function(e) {
                    return this._isInGlobalList(M.domElement(e))
                }
            }, {
                key: "getAutoNumericElement",
                value: function(e) {
                    var t = M.domElement(e);
                    return this.isManagedByAutoNumeric(t) ? this._getFromGlobalList(t) : null
                }
            }, {
                key: "set",
                value: function(e, t, i, n) {
                    var a, r = 2 < arguments.length && void 0 !== i ? i : null,
                        s = !(3 < arguments.length && void 0 !== n) || n,
                        o = M.domElement(e);
                    return this.isManagedByAutoNumeric(o) ? this.getAutoNumericElement(o).set(t, r, s) : (a = !(!M.isNull(r) && Object.prototype.hasOwnProperty.call(r, "showWarnings")) || r.showWarnings, M.warning("Impossible to find an AutoNumeric object for the given DOM element or selector.", a), null)
                }
            }, {
                key: "getNumericString",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return this._get(e, "getNumericString", i)
                }
            }, {
                key: "getFormatted",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return this._get(e, "getFormatted", i)
                }
            }, {
                key: "getNumber",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return this._get(e, "getNumber", i)
                }
            }, {
                key: "_get",
                value: function(e, t, i) {
                    var n = 2 < arguments.length && void 0 !== i ? i : null,
                        a = M.domElement(e);
                    return this.isManagedByAutoNumeric(a) || M.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(a)[t](n)
                }
            }, {
                key: "getLocalized",
                value: function(e, t, i) {
                    var n = 1 < arguments.length && void 0 !== t ? t : null,
                        a = 2 < arguments.length && void 0 !== i ? i : null,
                        r = M.domElement(e);
                    return this.isManagedByAutoNumeric(r) || M.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(r).getLocalized(n, a)
                }
            }, {
                key: "_stripAllNonNumberCharacters",
                value: function(e, t, i, n) {
                    return this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, i, n).replace(t.decimalCharacter, ".")
                }
            }, {
                key: "_stripAllNonNumberCharactersExceptCustomDecimalChar",
                value: function(e, t, i, n) {
                    var a = (e = (e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t)).replace(t.allowedAutoStrip, "")).match(t.numRegAutoStrip);
                    if (e = a ? [a[1], a[2], a[3]].join("") : "", t.leadingZero === B.options.leadingZero.allow || t.leadingZero === B.options.leadingZero.keep) {
                        var r = "",
                            s = S(e.split(t.decimalCharacter), 2),
                            o = s[0],
                            l = s[1],
                            u = o;
                        M.contains(u, t.negativeSignCharacter) && (r = t.negativeSignCharacter, u = u.replace(t.negativeSignCharacter, "")), "" === r && u.length > t.mIntPos && "0" === u.charAt(0) && (u = u.slice(1)), "" !== r && u.length > t.mIntNeg && "0" === u.charAt(0) && (u = u.slice(1)), e = "".concat(r).concat(u).concat(M.isUndefined(l) ? "" : t.decimalCharacter + l)
                    }
                    return (i && t.leadingZero === B.options.leadingZero.deny || !n && t.leadingZero === B.options.leadingZero.allow) && (e = e.replace(t.stripReg, "$1$2")), e
                }
            }, {
                key: "_toggleNegativeBracket",
                value: function(e, t, i) {
                    return i ? this._removeBrackets(e, t) : this._addBrackets(e, t)
                }
            }, {
                key: "_addBrackets",
                value: function(e, t) {
                    return M.isNull(t.negativeBracketsTypeOnBlur) ? e : "".concat(t.firstBracket).concat(e.replace(t.negativeSignCharacter, "")).concat(t.lastBracket)
                }
            }, {
                key: "_removeBrackets",
                value: function(e, t, i) {
                    var n, a = !(2 < arguments.length && void 0 !== i) || i;
                    return M.isNull(t.negativeBracketsTypeOnBlur) || e.charAt(0) !== t.firstBracket ? e : (n = (n = e.replace(t.firstBracket, "")).replace(t.lastBracket, ""), a ? (n = n.replace(t.currencySymbol, ""), this._mergeCurrencySignNegativePositiveSignAndValue(n, t, !0, !1)) : "".concat(t.negativeSignCharacter).concat(n))
                }
            }, {
                key: "_setBrackets",
                value: function(e) {
                    if (M.isNull(e.negativeBracketsTypeOnBlur)) e.firstBracket = "", e.lastBracket = "";
                    else {
                        var t = S(e.negativeBracketsTypeOnBlur.split(","), 2),
                            i = t[0],
                            n = t[1];
                        e.firstBracket = i, e.lastBracket = n
                    }
                }
            }, {
                key: "_convertToNumericString",
                value: function(e, t) {
                    e = this._removeBrackets(e, t, !1), e = (e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t)).replace(new RegExp("[".concat(t.digitGroupSeparator, "]"), "g"), ""), "." !== t.decimalCharacter && (e = e.replace(t.decimalCharacter, ".")), M.isNegative(e) && e.lastIndexOf("-") === e.length - 1 && (e = e.replace("-", ""), e = "-".concat(e)), t.showPositiveSign && (e = e.replace(t.positiveSignCharacter, ""));
                    var i = t.leadingZero !== B.options.leadingZero.keep,
                        n = M.arabicToLatinNumbers(e, i, !1, !1);
                    return isNaN(n) || (e = n.toString()), e
                }
            }, {
                key: "_normalizeCurrencySuffixAndNegativeSignCharacters",
                value: function(e, t) {
                    return e = String(e), t.currencySymbol !== B.options.currencySymbol.none && (e = e.replace(t.currencySymbol, "")), t.suffixText !== B.options.suffixText.none && (e = e.replace(t.suffixText, "")), t.negativeSignCharacter !== B.options.negativeSignCharacter.hyphen && (e = e.replace(t.negativeSignCharacter, "-")), e
                }
            }, {
                key: "_toLocale",
                value: function(e, t, i) {
                    if (M.isNull(t) || t === B.options.outputFormat.string) return e;
                    var n;
                    switch (t) {
                        case B.options.outputFormat.number:
                            n = Number(e);
                            break;
                        case B.options.outputFormat.dotNegative:
                            n = M.isNegative(e) ? e.replace("-", "") + "-" : e;
                            break;
                        case B.options.outputFormat.comma:
                        case B.options.outputFormat.negativeComma:
                            n = e.replace(".", ",");
                            break;
                        case B.options.outputFormat.commaNegative:
                            n = e.replace(".", ","), n = M.isNegative(n) ? n.replace("-", "") + "-" : n;
                            break;
                        case B.options.outputFormat.dot:
                        case B.options.outputFormat.negativeDot:
                            n = e;
                            break;
                        default:
                            M.throwError("The given outputFormat [".concat(t, "] option is not recognized."))
                    }
                    return t !== B.options.outputFormat.number && "-" !== i.negativeSignCharacter && (n = n.replace("-", i.negativeSignCharacter)), n
                }
            }, {
                key: "_modifyNegativeSignAndDecimalCharacterForFormattedValue",
                value: function(e, t) {
                    return "-" !== t.negativeSignCharacter && (e = e.replace("-", t.negativeSignCharacter)), "." !== t.decimalCharacter && (e = e.replace(".", t.decimalCharacter)), e
                }
            }, {
                key: "_isElementValueEmptyOrOnlyTheNegativeSign",
                value: function(e, t) {
                    return "" === e || e === t.negativeSignCharacter
                }
            }, {
                key: "_orderValueCurrencySymbolAndSuffixText",
                value: function(e, t, i) {
                    var n;
                    if (t.emptyInputBehavior === B.options.emptyInputBehavior.always || i) switch (t.negativePositiveSignPlacement) {
                        case B.options.negativePositiveSignPlacement.left:
                        case B.options.negativePositiveSignPlacement.prefix:
                        case B.options.negativePositiveSignPlacement.none:
                            n = e + t.currencySymbol + t.suffixText;
                            break;
                        default:
                            n = t.currencySymbol + e + t.suffixText
                    } else n = e;
                    return n
                }
            }, {
                key: "_addGroupSeparators",
                value: function(e, t, i, n, a) {
                    var r, s = 4 < arguments.length && void 0 !== a ? a : null;
                    if (r = M.isNull(s) ? M.isNegative(e, t.negativeSignCharacter) || M.isNegativeWithBrackets(e, t.firstBracket, t.lastBracket) : s < 0, e = this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, !1, i), this._isElementValueEmptyOrOnlyTheNegativeSign(e, t)) return this._orderValueCurrencySymbolAndSuffixText(e, t, !0);
                    var o, l = M.isZeroOrHasNoValue(e);
                    switch (r && (e = e.replace("-", "")), t.digitalGroupSpacing = t.digitalGroupSpacing.toString(), t.digitalGroupSpacing) {
                        case B.options.digitalGroupSpacing.two:
                            o = /(\d)((\d)(\d{2}?)+)$/;
                            break;
                        case B.options.digitalGroupSpacing.twoScaled:
                            o = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
                            break;
                        case B.options.digitalGroupSpacing.four:
                            o = /(\d)((\d{4}?)+)$/;
                            break;
                        case B.options.digitalGroupSpacing.three:
                        default:
                            o = /(\d)((\d{3}?)+)$/
                    }
                    var u, c = S(e.split(t.decimalCharacter), 2),
                        h = c[0],
                        m = c[1];
                    if (t.decimalCharacterAlternative && M.isUndefined(m)) {
                        var g = S(e.split(t.decimalCharacterAlternative), 2);
                        h = g[0], m = g[1]
                    }
                    if ("" !== t.digitGroupSeparator)
                        for (; o.test(h);) h = h.replace(o, "$1".concat(t.digitGroupSeparator, "$2"));
                    return e = 0 === (u = i ? t.decimalPlacesShownOnFocus : t.decimalPlacesShownOnBlur) || M.isUndefined(m) ? h : (m.length > u && (m = m.substring(0, u)), "".concat(h).concat(t.decimalCharacter).concat(m)), e = B._mergeCurrencySignNegativePositiveSignAndValue(e, t, r, l), M.isNull(s) && (s = n), null !== t.negativeBracketsTypeOnBlur && (s < 0 || M.isNegativeStrict(e, t.negativeSignCharacter)) && (e = this._toggleNegativeBracket(e, t, i)), t.suffixText ? "".concat(e).concat(t.suffixText) : e
                }
            }, {
                key: "_mergeCurrencySignNegativePositiveSignAndValue",
                value: function(e, t, i, n) {
                    var a, r = "";
                    if (i ? r = t.negativeSignCharacter : t.showPositiveSign && !n && (r = t.positiveSignCharacter), t.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix)
                        if (t.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (i || !i && t.showPositiveSign && !n)) switch (t.negativePositiveSignPlacement) {
                            case B.options.negativePositiveSignPlacement.prefix:
                            case B.options.negativePositiveSignPlacement.left:
                                a = "".concat(r).concat(t.currencySymbol).concat(e);
                                break;
                            case B.options.negativePositiveSignPlacement.right:
                                a = "".concat(t.currencySymbol).concat(r).concat(e);
                                break;
                            case B.options.negativePositiveSignPlacement.suffix:
                                a = "".concat(t.currencySymbol).concat(e).concat(r)
                        } else a = t.currencySymbol + e;
                        else if (t.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix)
                        if (t.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (i || !i && t.showPositiveSign && !n)) switch (t.negativePositiveSignPlacement) {
                            case B.options.negativePositiveSignPlacement.suffix:
                            case B.options.negativePositiveSignPlacement.right:
                                a = "".concat(e).concat(t.currencySymbol).concat(r);
                                break;
                            case B.options.negativePositiveSignPlacement.left:
                                a = "".concat(e).concat(r).concat(t.currencySymbol);
                                break;
                            case B.options.negativePositiveSignPlacement.prefix:
                                a = "".concat(r).concat(e).concat(t.currencySymbol)
                        } else a = e + t.currencySymbol;
                    return a
                }
            }, {
                key: "_truncateZeros",
                value: function(e, t) {
                    var i;
                    switch (t) {
                        case 0:
                            i = /(\.(?:\d*[1-9])?)0*$/;
                            break;
                        case 1:
                            i = /(\.\d(?:\d*[1-9])?)0*$/;
                            break;
                        default:
                            i = new RegExp("(\\.\\d{".concat(t, "}(?:\\d*[1-9])?)0*"))
                    }
                    return e = e.replace(i, "$1"), 0 === t && (e = e.replace(/\.$/, "")), e
                }
            }, {
                key: "_roundRawValue",
                value: function(e, t) {
                    return this._roundValue(e, t, t.decimalPlacesRawValue)
                }
            }, {
                key: "_roundFormattedValueShownOnFocus",
                value: function(e, t) {
                    return this._roundValue(e, t, Number(t.decimalPlacesShownOnFocus))
                }
            }, {
                key: "_roundFormattedValueShownOnBlur",
                value: function(e, t) {
                    return this._roundValue(e, t, Number(t.decimalPlacesShownOnBlur))
                }
            }, {
                key: "_roundFormattedValueShownOnFocusOrBlur",
                value: function(e, t, i) {
                    return i ? this._roundFormattedValueShownOnFocus(e, t) : this._roundFormattedValueShownOnBlur(e, t)
                }
            }, {
                key: "_roundValue",
                value: function(e, t, i) {
                    if (M.isNull(e)) return e;
                    if (e = "" === e ? "0" : e.toString(), t.roundingMethod === B.options.roundingMethod.toNearest05 || t.roundingMethod === B.options.roundingMethod.toNearest05Alt || t.roundingMethod === B.options.roundingMethod.upToNext05 || t.roundingMethod === B.options.roundingMethod.downToNext05) return this._roundCloseTo05(e, t);
                    var n, a = S(B._prepareValueForRounding(e, t), 2),
                        r = a[0],
                        s = (e = a[1]).lastIndexOf("."),
                        o = -1 === s,
                        l = S(e.split("."), 2),
                        u = l[0];
                    if (!(0 < l[1] || t.allowDecimalPadding !== B.options.allowDecimalPadding.never && t.allowDecimalPadding !== B.options.allowDecimalPadding.floats)) return 0 === Number(e) ? u : "".concat(r).concat(u);
                    n = t.allowDecimalPadding === B.options.allowDecimalPadding.always || t.allowDecimalPadding === B.options.allowDecimalPadding.floats ? i : 0;
                    var c, h = o ? e.length - 1 : s,
                        m = e.length - 1 - h,
                        g = "";
                    if (m <= i) {
                        if (g = e, m < n) {
                            o && (g = "".concat(g).concat(t.decimalCharacter));
                            for (var d = "000000"; m < n;) g += d = d.substring(0, n - m), m += d.length
                        } else n < m ? g = this._truncateZeros(g, n) : 0 === m && 0 === n && (g = g.replace(/\.$/, ""));
                        return 0 === Number(g) ? g : "".concat(r).concat(g)
                    }
                    c = o ? i - 1 : Number(i) + Number(s);
                    var v, p = Number(e.charAt(c + 1)),
                        f = e.substring(0, c + 1).split("");
                    if (v = "." === e.charAt(c) ? e.charAt(c - 1) % 2 : e.charAt(c) % 2, this._shouldRoundUp(p, t, r, v))
                        for (var y = f.length - 1; 0 <= y; --y)
                            if ("." !== f[y]) {
                                if (f[y] = +f[y] + 1, f[y] < 10) break;
                                0 < y && (f[y] = "0")
                            } return f = f.slice(0, c + 1), g = this._truncateZeros(f.join(""), n), 0 === Number(g) ? g : "".concat(r).concat(g)
                }
            }, {
                key: "_roundCloseTo05",
                value: function(e, t) {
                    switch (t.roundingMethod) {
                        case B.options.roundingMethod.toNearest05:
                        case B.options.roundingMethod.toNearest05Alt:
                            e = (Math.round(20 * e) / 20).toString();
                            break;
                        case B.options.roundingMethod.upToNext05:
                            e = (Math.ceil(20 * e) / 20).toString();
                            break;
                        default:
                            e = (Math.floor(20 * e) / 20).toString()
                    }
                    return M.contains(e, ".") ? e.length - e.indexOf(".") < 3 ? e + "0" : e : e + ".00"
                }
            }, {
                key: "_prepareValueForRounding",
                value: function(e, t) {
                    var i = "";
                    return M.isNegativeStrict(e, "-") && (i = "-", e = e.replace("-", "")), e.match(/^\d/) || (e = "0".concat(e)), 0 === Number(e) && (i = ""), (0 < Number(e) && t.leadingZero !== B.options.leadingZero.keep || 0 < e.length && t.leadingZero === B.options.leadingZero.allow) && (e = e.replace(/^0*(\d)/, "$1")), [i, e]
                }
            }, {
                key: "_shouldRoundUp",
                value: function(e, t, i, n) {
                    return 4 < e && t.roundingMethod === B.options.roundingMethod.halfUpSymmetric || 4 < e && t.roundingMethod === B.options.roundingMethod.halfUpAsymmetric && "" === i || 5 < e && t.roundingMethod === B.options.roundingMethod.halfUpAsymmetric && "-" === i || 5 < e && t.roundingMethod === B.options.roundingMethod.halfDownSymmetric || 5 < e && t.roundingMethod === B.options.roundingMethod.halfDownAsymmetric && "" === i || 4 < e && t.roundingMethod === B.options.roundingMethod.halfDownAsymmetric && "-" === i || 5 < e && t.roundingMethod === B.options.roundingMethod.halfEvenBankersRounding || 5 === e && t.roundingMethod === B.options.roundingMethod.halfEvenBankersRounding && 1 === n || 0 < e && t.roundingMethod === B.options.roundingMethod.toCeilingTowardPositiveInfinity && "" === i || 0 < e && t.roundingMethod === B.options.roundingMethod.toFloorTowardNegativeInfinity && "-" === i || 0 < e && t.roundingMethod === B.options.roundingMethod.upRoundAwayFromZero
                }
            }, {
                key: "_truncateDecimalPlaces",
                value: function(e, t, i, n) {
                    i && (e = this._roundFormattedValueShownOnFocus(e, t));
                    var a = S(e.split(t.decimalCharacter), 2),
                        r = a[0],
                        s = a[1];
                    if (s && s.length > n)
                        if (0 < n) {
                            var o = s.substring(0, n);
                            e = "".concat(r).concat(t.decimalCharacter).concat(o)
                        } else e = r;
                    return e
                }
            }, {
                key: "_checkIfInRangeWithOverrideOption",
                value: function(e, t) {
                    if (M.isNull(e) && t.emptyInputBehavior === B.options.emptyInputBehavior.null || t.overrideMinMaxLimits === B.options.overrideMinMaxLimits.ignore || t.overrideMinMaxLimits === B.options.overrideMinMaxLimits.invalid) return [!0, !0];
                    e = (e = e.toString()).replace(",", ".");
                    var i, n = M.parseStr(t.minimumValue),
                        a = M.parseStr(t.maximumValue),
                        r = M.parseStr(e);
                    switch (t.overrideMinMaxLimits) {
                        case B.options.overrideMinMaxLimits.floor:
                            i = [-1 < M.testMinMax(n, r), !0];
                            break;
                        case B.options.overrideMinMaxLimits.ceiling:
                            i = [!0, M.testMinMax(a, r) < 1];
                            break;
                        default:
                            i = [-1 < M.testMinMax(n, r), M.testMinMax(a, r) < 1]
                    }
                    return i
                }
            }, {
                key: "_isWithinRangeWithOverrideOption",
                value: function(e, t) {
                    var i = S(this._checkIfInRangeWithOverrideOption(e, t), 2),
                        n = i[0],
                        a = i[1];
                    return n && a
                }
            }, {
                key: "_cleanValueForRangeParse",
                value: function(e) {
                    return e = e.toString().replace(",", "."), M.parseStr(e)
                }
            }, {
                key: "_isMinimumRangeRespected",
                value: function(e, t) {
                    return -1 < M.testMinMax(M.parseStr(t.minimumValue), this._cleanValueForRangeParse(e))
                }
            }, {
                key: "_isMaximumRangeRespected",
                value: function(e, t) {
                    return M.testMinMax(M.parseStr(t.maximumValue), this._cleanValueForRangeParse(e)) < 1
                }
            }, {
                key: "_readCookie",
                value: function(e) {
                    for (var t = e + "=", i = document.cookie.split(";"), n = "", a = 0; a < i.length; a += 1) {
                        for (n = i[a];
                            " " === n.charAt(0);) n = n.substring(1, n.length);
                        if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                    }
                    return null
                }
            }, {
                key: "_storageTest",
                value: function() {
                    var e = "modernizr";
                    try {
                        return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "_correctNegativePositiveSignPlacementOption",
                value: function(e) {
                    if (M.isNull(e.negativePositiveSignPlacement))
                        if (M.isUndefined(e) || !M.isUndefinedOrNullOrEmpty(e.negativePositiveSignPlacement) || M.isUndefinedOrNullOrEmpty(e.currencySymbol)) e.negativePositiveSignPlacement = B.options.negativePositiveSignPlacement.left;
                        else switch (e.currencySymbolPlacement) {
                            case B.options.currencySymbolPlacement.suffix:
                                e.negativePositiveSignPlacement = B.options.negativePositiveSignPlacement.prefix;
                                break;
                            case B.options.currencySymbolPlacement.prefix:
                                e.negativePositiveSignPlacement = B.options.negativePositiveSignPlacement.left
                        }
                }
            }, {
                key: "_correctCaretPositionOnFocusAndSelectOnFocusOptions",
                value: function(e) {
                    return M.isNull(e) ? null : (!M.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && M.isUndefinedOrNullOrEmpty(e.selectOnFocus) && (e.selectOnFocus = B.options.selectOnFocus.doNotSelect), M.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && !M.isUndefinedOrNullOrEmpty(e.selectOnFocus) && e.selectOnFocus === B.options.selectOnFocus.select && (e.caretPositionOnFocus = B.options.caretPositionOnFocus.doNoForceCaretPosition), e)
                }
            }, {
                key: "_calculateDecimalPlacesOnInit",
                value: function(e) {
                    this._validateDecimalPlacesRawValue(e), e.decimalPlacesShownOnFocus === B.options.decimalPlacesShownOnFocus.useDefault && (e.decimalPlacesShownOnFocus = e.decimalPlaces), e.decimalPlacesShownOnBlur === B.options.decimalPlacesShownOnBlur.useDefault && (e.decimalPlacesShownOnBlur = e.decimalPlaces), e.decimalPlacesRawValue === B.options.decimalPlacesRawValue.useDefault && (e.decimalPlacesRawValue = e.decimalPlaces);
                    var t = 0;
                    e.rawValueDivisor && e.rawValueDivisor !== B.options.rawValueDivisor.none && (t = String(e.rawValueDivisor).length - 1) < 0 && (t = 0), e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + t, Number(e.originalDecimalPlacesRawValue) + t)
                }
            }, {
                key: "_calculateDecimalPlacesOnUpdate",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    this._validateDecimalPlacesRawValue(e), M.isNull(i) && M.throwError("When updating the settings, the previous ones should be passed as an argument.");
                    var n = "decimalPlaces" in e;
                    if (n || "decimalPlacesRawValue" in e || "decimalPlacesShownOnFocus" in e || "decimalPlacesShownOnBlur" in e || "rawValueDivisor" in e) {
                        n ? ("decimalPlacesShownOnFocus" in e && e.decimalPlacesShownOnFocus !== B.options.decimalPlacesShownOnFocus.useDefault || (e.decimalPlacesShownOnFocus = e.decimalPlaces), "decimalPlacesShownOnBlur" in e && e.decimalPlacesShownOnBlur !== B.options.decimalPlacesShownOnBlur.useDefault || (e.decimalPlacesShownOnBlur = e.decimalPlaces), "decimalPlacesRawValue" in e && e.decimalPlacesRawValue !== B.options.decimalPlacesRawValue.useDefault || (e.decimalPlacesRawValue = e.decimalPlaces)) : (M.isUndefined(e.decimalPlacesShownOnFocus) && (e.decimalPlacesShownOnFocus = i.decimalPlacesShownOnFocus), M.isUndefined(e.decimalPlacesShownOnBlur) && (e.decimalPlacesShownOnBlur = i.decimalPlacesShownOnBlur));
                        var a = 0;
                        e.rawValueDivisor && e.rawValueDivisor !== B.options.rawValueDivisor.none && (a = String(e.rawValueDivisor).length - 1) < 0 && (a = 0), e.decimalPlaces || e.decimalPlacesRawValue ? e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + a, Number(e.decimalPlacesRawValue) + a) : e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + a, Number(i.originalDecimalPlacesRawValue) + a)
                    }
                }
            }, {
                key: "_cachesUsualRegularExpressions",
                value: function(e, t) {
                    var i;
                    i = e.negativeSignCharacter !== B.options.negativeSignCharacter.hyphen ? "([-\\".concat(e.negativeSignCharacter, "]?)") : "(-?)", t.aNegRegAutoStrip = i, e.allowedAutoStrip = new RegExp("[^-0123456789\\".concat(e.decimalCharacter, "]"), "g"), e.numRegAutoStrip = new RegExp("".concat(i, "(?:\\").concat(e.decimalCharacter, "?([0-9]+\\").concat(e.decimalCharacter, "[0-9]+)|([0-9]*(?:\\").concat(e.decimalCharacter, "[0-9]*)?))")), e.stripReg = new RegExp("^".concat(t.aNegRegAutoStrip, "0*([0-9])")), e.formulaChars = new RegExp("[0-9".concat(e.decimalCharacter, "+\\-*/() ]"))
                }
            }, {
                key: "_convertOldOptionsToNewOnes",
                value: function(e) {
                    var t = {
                        aSep: "digitGroupSeparator",
                        nSep: "showOnlyNumbersOnFocus",
                        dGroup: "digitalGroupSpacing",
                        aDec: "decimalCharacter",
                        altDec: "decimalCharacterAlternative",
                        aSign: "currencySymbol",
                        pSign: "currencySymbolPlacement",
                        pNeg: "negativePositiveSignPlacement",
                        aSuffix: "suffixText",
                        oLimits: "overrideMinMaxLimits",
                        vMax: "maximumValue",
                        vMin: "minimumValue",
                        mDec: "decimalPlacesOverride",
                        eDec: "decimalPlacesShownOnFocus",
                        scaleDecimal: "decimalPlacesShownOnBlur",
                        aStor: "saveValueToSessionStorage",
                        mRound: "roundingMethod",
                        aPad: "allowDecimalPadding",
                        nBracket: "negativeBracketsTypeOnBlur",
                        wEmpty: "emptyInputBehavior",
                        lZero: "leadingZero",
                        aForm: "formatOnPageLoad",
                        sNumber: "selectNumberOnly",
                        anDefault: "defaultValueOverride",
                        unSetOnSubmit: "unformatOnSubmit",
                        outputType: "outputFormat",
                        debug: "showWarnings",
                        allowDecimalPadding: !0,
                        alwaysAllowDecimalCharacter: !0,
                        caretPositionOnFocus: !0,
                        createLocalList: !0,
                        currencySymbol: !0,
                        currencySymbolPlacement: !0,
                        decimalCharacter: !0,
                        decimalCharacterAlternative: !0,
                        decimalPlaces: !0,
                        decimalPlacesRawValue: !0,
                        decimalPlacesShownOnBlur: !0,
                        decimalPlacesShownOnFocus: !0,
                        defaultValueOverride: !0,
                        digitalGroupSpacing: !0,
                        digitGroupSeparator: !0,
                        divisorWhenUnfocused: !0,
                        emptyInputBehavior: !0,
                        eventBubbles: !0,
                        eventIsCancelable: !0,
                        failOnUnknownOption: !0,
                        formatOnPageLoad: !0,
                        formulaMode: !0,
                        historySize: !0,
                        isCancellable: !0,
                        leadingZero: !0,
                        maximumValue: !0,
                        minimumValue: !0,
                        modifyValueOnWheel: !0,
                        negativeBracketsTypeOnBlur: !0,
                        negativePositiveSignPlacement: !0,
                        negativeSignCharacter: !0,
                        noEventListeners: !0,
                        onInvalidPaste: !0,
                        outputFormat: !0,
                        overrideMinMaxLimits: !0,
                        positiveSignCharacter: !0,
                        rawValueDivisor: !0,
                        readOnly: !0,
                        roundingMethod: !0,
                        saveValueToSessionStorage: !0,
                        selectNumberOnly: !0,
                        selectOnFocus: !0,
                        serializeSpaces: !0,
                        showOnlyNumbersOnFocus: !0,
                        showPositiveSign: !0,
                        showWarnings: !0,
                        styleRules: !0,
                        suffixText: !0,
                        symbolWhenUnfocused: !0,
                        unformatOnHover: !0,
                        unformatOnSubmit: !0,
                        valuesToStrings: !0,
                        watchExternalChanges: !0,
                        wheelOn: !0,
                        wheelStep: !0,
                        allowedAutoStrip: !0,
                        formulaChars: !0,
                        isNegativeSignAllowed: !0,
                        isPositiveSignAllowed: !0,
                        mIntNeg: !0,
                        mIntPos: !0,
                        numRegAutoStrip: !0,
                        originalDecimalPlaces: !0,
                        originalDecimalPlacesRawValue: !0,
                        stripReg: !0
                    };
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            if (!0 === t[i]) continue;
                            Object.prototype.hasOwnProperty.call(t, i) ? (M.warning("You are using the deprecated option name '".concat(i, "'. Please use '").concat(t[i], "' instead from now on. The old option name will be dropped very soon™."), !0), e[t[i]] = e[i], delete e[i]) : e.failOnUnknownOption && M.throwError("Option name '".concat(i, "' is unknown. Please fix the options passed to autoNumeric"))
                        }
                    "mDec" in e && M.warning("The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.", !0)
                }
            }, {
                key: "_setNegativePositiveSignPermissions",
                value: function(e) {
                    e.isNegativeSignAllowed = e.minimumValue < 0, e.isPositiveSignAllowed = 0 <= e.maximumValue
                }
            }, {
                key: "_toNumericValue",
                value: function(e, t) {
                    var i;
                    return M.isNumber(Number(e)) ? i = M.scientificToDecimal(e) : (i = this._convertToNumericString(e.toString(), t), M.isNumber(Number(i)) || (M.warning('The given value "'.concat(e, '" cannot be converted to a numeric one and therefore cannot be used appropriately.'), t.showWarnings), i = NaN)), i
                }
            }, {
                key: "_checkIfInRange",
                value: function(e, t, i) {
                    var n = M.parseStr(e);
                    return -1 < M.testMinMax(t, n) && M.testMinMax(i, n) < 1
                }
            }, {
                key: "_shouldSkipEventKey",
                value: function(e) {
                    var t = M.isInArray(e, d.keyName._allFnKeys),
                        i = e === d.keyName.OSLeft || e === d.keyName.OSRight,
                        n = e === d.keyName.ContextMenu,
                        a = M.isInArray(e, d.keyName._someNonPrintableKeys),
                        r = e === d.keyName.NumLock || e === d.keyName.ScrollLock || e === d.keyName.Insert || e === d.keyName.Command,
                        s = e === d.keyName.Unidentified;
                    return t || i || n || a || s || r
                }
            }, {
                key: "_serialize",
                value: function(e, t, i, n, a) {
                    var r, s = this,
                        o = 1 < arguments.length && void 0 !== t && t,
                        l = 2 < arguments.length && void 0 !== i ? i : "unformatted",
                        u = 3 < arguments.length && void 0 !== n ? n : "+",
                        c = 4 < arguments.length && void 0 !== a ? a : null,
                        h = [];
                    return "object" === w(e) && "form" === e.nodeName.toLowerCase() && Array.prototype.slice.call(e.elements).forEach(function(t) {
                        if (t.name && !t.disabled && -1 === ["file", "reset", "submit", "button"].indexOf(t.type))
                            if ("select-multiple" === t.type) Array.prototype.slice.call(t.options).forEach(function(e) {
                                e.selected && (o ? h.push({
                                    name: t.name,
                                    value: e.value
                                }) : h.push("".concat(encodeURIComponent(t.name), "=").concat(encodeURIComponent(e.value))))
                            });
                            else if (-1 === ["checkbox", "radio"].indexOf(t.type) || t.checked) {
                            var e, i;
                            if (s.isManagedByAutoNumeric(t)) switch (l) {
                                case "unformatted":
                                    i = s.getAutoNumericElement(t), M.isNull(i) || (e = s.unformat(t, i.getSettings()));
                                    break;
                                case "localized":
                                    if (i = s.getAutoNumericElement(t), !M.isNull(i)) {
                                        var n = M.cloneObject(i.getSettings());
                                        M.isNull(c) || (n.outputFormat = c), e = s.localize(t, n)
                                    }
                                    break;
                                case "formatted":
                                default:
                                    e = t.value
                            } else e = t.value;
                            M.isUndefined(e) && M.throwError("This error should never be hit. If it has, something really wrong happened!"), o ? h.push({
                                name: t.name,
                                value: e
                            }) : h.push("".concat(encodeURIComponent(t.name), "=").concat(encodeURIComponent(e)))
                        }
                    }), o ? r = h : (r = h.join("&"), "+" === u && (r = r.replace(/%20/g, "+"))), r
                }
            }, {
                key: "_serializeNumericString",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : "+";
                    return this._serialize(e, !1, "unformatted", i)
                }
            }, {
                key: "_serializeFormatted",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : "+";
                    return this._serialize(e, !1, "formatted", i)
                }
            }, {
                key: "_serializeLocalized",
                value: function(e, t, i) {
                    var n = 1 < arguments.length && void 0 !== t ? t : "+",
                        a = 2 < arguments.length && void 0 !== i ? i : null;
                    return this._serialize(e, !1, "localized", n, a)
                }
            }, {
                key: "_serializeNumericStringArray",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : "+";
                    return this._serialize(e, !0, "unformatted", i)
                }
            }, {
                key: "_serializeFormattedArray",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : "+";
                    return this._serialize(e, !0, "formatted", i)
                }
            }, {
                key: "_serializeLocalizedArray",
                value: function(e, t, i) {
                    var n = 1 < arguments.length && void 0 !== t ? t : "+",
                        a = 2 < arguments.length && void 0 !== i ? i : null;
                    return this._serialize(e, !0, "localized", n, a)
                }
            }], P((e = B).prototype, [{
                key: "_saveInitialValues",
                value: function(e) {
                    this.initialValueHtmlAttribute = M.scientificToDecimal(this.domElement.getAttribute("value")), M.isNull(this.initialValueHtmlAttribute) && (this.initialValueHtmlAttribute = ""), this.initialValue = e, M.isNull(this.initialValue) && (this.initialValue = "")
                }
            }, {
                key: "_createEventListeners",
                value: function() {
                    var t = this;
                    this.formulaMode = !1, this._onFocusInFunc = function(e) {
                        t._onFocusIn(e)
                    }, this._onFocusInAndMouseEnterFunc = function(e) {
                        t._onFocusInAndMouseEnter(e)
                    }, this._onFocusFunc = function() {
                        t._onFocus()
                    }, this._onKeydownFunc = function(e) {
                        t._onKeydown(e)
                    }, this._onKeypressFunc = function(e) {
                        t._onKeypress(e)
                    }, this._onKeyupFunc = function(e) {
                        t._onKeyup(e)
                    }, this._onFocusOutAndMouseLeaveFunc = function(e) {
                        t._onFocusOutAndMouseLeave(e)
                    }, this._onPasteFunc = function(e) {
                        t._onPaste(e)
                    }, this._onWheelFunc = function(e) {
                        t._onWheel(e)
                    }, this._onDropFunc = function(e) {
                        t._onDrop(e)
                    }, this._onKeydownGlobalFunc = function(e) {
                        t._onKeydownGlobal(e)
                    }, this._onKeyupGlobalFunc = function(e) {
                        t._onKeyupGlobal(e)
                    }, this.domElement.addEventListener("focusin", this._onFocusInFunc, !1), this.domElement.addEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("focus", this._onFocusFunc, !1), this.domElement.addEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("keydown", this._onKeydownFunc, !1), this.domElement.addEventListener("keypress", this._onKeypressFunc, !1), this.domElement.addEventListener("keyup", this._onKeyupFunc, !1), this.domElement.addEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("paste", this._onPasteFunc, !1), this.domElement.addEventListener("wheel", this._onWheelFunc, !1), this.domElement.addEventListener("drop", this._onDropFunc, !1), this._setupFormListener(), this.hasEventListeners = !0, B._doesGlobalListExists() || (document.addEventListener("keydown", this._onKeydownGlobalFunc, !1), document.addEventListener("keyup", this._onKeyupGlobalFunc, !1))
                }
            }, {
                key: "_removeEventListeners",
                value: function() {
                    this.domElement.removeEventListener("focusin", this._onFocusInFunc, !1), this.domElement.removeEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("focus", this._onFocusFunc, !1), this.domElement.removeEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("keydown", this._onKeydownFunc, !1), this.domElement.removeEventListener("keypress", this._onKeypressFunc, !1), this.domElement.removeEventListener("keyup", this._onKeyupFunc, !1), this.domElement.removeEventListener("paste", this._onPasteFunc, !1), this.domElement.removeEventListener("wheel", this._onWheelFunc, !1), this.domElement.removeEventListener("drop", this._onDropFunc, !1), this._removeFormListener(), this.hasEventListeners = !1, document.removeEventListener("keydown", this._onKeydownGlobalFunc, !1), document.removeEventListener("keyup", this._onKeyupGlobalFunc, !1)
                }
            }, {
                key: "_updateEventListeners",
                value: function() {
                    this.settings.noEventListeners || this.hasEventListeners || this._createEventListeners(), this.settings.noEventListeners && this.hasEventListeners && this._removeEventListeners()
                }
            }, {
                key: "_setupFormListener",
                value: function() {
                    var e = this;
                    M.isNull(this.parentForm) || (this._onFormSubmitFunc = function() {
                        e._onFormSubmit()
                    }, this._onFormResetFunc = function() {
                        e._onFormReset()
                    }, this._hasParentFormCounter() ? this._incrementParentFormCounter() : (this._initializeFormCounterToOne(), this.parentForm.addEventListener("submit", this._onFormSubmitFunc, !1), this.parentForm.addEventListener("reset", this._onFormResetFunc, !1), this._storeFormHandlerFunction()))
                }
            }, {
                key: "_removeFormListener",
                value: function() {
                    if (!M.isNull(this.parentForm)) {
                        var e = this._getParentFormCounter();
                        1 === e ? (this.parentForm.removeEventListener("submit", this._getFormHandlerFunction().submitFn, !1), this.parentForm.removeEventListener("reset", this._getFormHandlerFunction().resetFn, !1), this._removeFormDataSetInfo()) : 1 < e ? this._decrementParentFormCounter() : M.throwError("The AutoNumeric object count on the form is incoherent.")
                    }
                }
            }, {
                key: "_hasParentFormCounter",
                value: function() {
                    return "anCount" in this.parentForm.dataset
                }
            }, {
                key: "_getParentFormCounter",
                value: function() {
                    return Number(this.parentForm.dataset.anCount)
                }
            }, {
                key: "_initializeFormCounterToOne",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    this._getFormElement(t).dataset.anCount = 1
                }
            }, {
                key: "_incrementParentFormCounter",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    this._getFormElement(t).dataset.anCount++
                }
            }, {
                key: "_decrementParentFormCounter",
                value: function() {
                    this.parentForm.dataset.anCount--
                }
            }, {
                key: "_hasFormHandlerFunction",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return "anFormHandler" in this._getFormElement(t).dataset
                }
            }, {
                key: "_getFormElement",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return M.isNull(t) ? this.parentForm : t
                }
            }, {
                key: "_storeFormHandlerFunction",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    this.constructor._doesFormHandlerListExists() || this.constructor._createFormHandlerList();
                    var i = M.randomString();
                    this._getFormElement(t).dataset.anFormHandler = i, window.aNFormHandlerMap.set(i, {
                        submitFn: this._onFormSubmitFunc,
                        resetFn: this._onFormResetFunc
                    })
                }
            }, {
                key: "_getFormHandlerKey",
                value: function() {
                    this._hasFormHandlerFunction() || M.throwError("Unable to retrieve the form handler name");
                    var e = this.parentForm.dataset.anFormHandler;
                    return "" === e && M.throwError("The form handler name is invalid"), e
                }
            }, {
                key: "_getFormHandlerFunction",
                value: function() {
                    var e = this._getFormHandlerKey();
                    return window.aNFormHandlerMap.get(e)
                }
            }, {
                key: "_removeFormDataSetInfo",
                value: function() {
                    this._decrementParentFormCounter(), window.aNFormHandlerMap.delete(this._getFormHandlerKey()), this.parentForm.removeAttribute("data-an-count"), this.parentForm.removeAttribute("data-an-form-handler")
                }
            }, {
                key: "_setWritePermissions",
                value: function(e) {
                    0 < arguments.length && void 0 !== e && e && this.domElement.readOnly || this.settings.readOnly ? this._setReadOnly() : this._setReadWrite()
                }
            }, {
                key: "_setReadOnly",
                value: function() {
                    this.isInputElement ? this.domElement.readOnly = !0 : this.domElement.setAttribute("contenteditable", !1)
                }
            }, {
                key: "_setReadWrite",
                value: function() {
                    this.isInputElement ? this.domElement.readOnly = !1 : this.domElement.setAttribute("contenteditable", !0)
                }
            }, {
                key: "_addWatcher",
                value: function() {
                    var t = this;
                    if (!M.isUndefined(this.getterSetter)) {
                        var e = this.getterSetter,
                            i = e.set,
                            n = e.get;
                        Object.defineProperty(this.domElement, this.attributeToWatch, {
                            configurable: !0,
                            get: function() {
                                return n.call(t.domElement)
                            },
                            set: function(e) {
                                i.call(t.domElement, e), t.settings.watchExternalChanges && !t.internalModification && t.set(e)
                            }
                        })
                    }
                }
            }, {
                key: "_removeWatcher",
                value: function() {
                    var t = this;
                    if (!M.isUndefined(this.getterSetter)) {
                        var e = this.getterSetter,
                            i = e.set,
                            n = e.get;
                        Object.defineProperty(this.domElement, this.attributeToWatch, {
                            configurable: !0,
                            get: function() {
                                return n.call(t.domElement)
                            },
                            set: function(e) {
                                i.call(t.domElement, e)
                            }
                        })
                    }
                }
            }, {
                key: "_getAttributeToWatch",
                value: function() {
                    var e;
                    if (this.isInputElement) e = "value";
                    else {
                        var t = this.domElement.nodeType;
                        t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e = "textContent" : t === Node.TEXT_NODE && (e = "nodeValue")
                    }
                    return e
                }
            }, {
                key: "_historyTableAdd",
                value: function() {
                    var e = 0 === this.historyTable.length;
                    if (e || this.rawValue !== this._historyTableCurrentValueUsed()) {
                        var t = !0;
                        if (!e) {
                            var i = this.historyTableIndex + 1;
                            i < this.historyTable.length && this.rawValue === this.historyTable[i].value ? t = !1 : M.arrayTrim(this.historyTable, this.historyTableIndex + 1)
                        }
                        if (this.historyTableIndex++, t) {
                            var n = M.getElementSelection(this.domElement);
                            this.selectionStart = n.start, this.selectionEnd = n.end, this.historyTable.push({
                                value: this.rawValue,
                                start: this.selectionStart + 1,
                                end: this.selectionEnd + 1
                            }), 1 < this.historyTable.length && (this.historyTable[this.historyTableIndex - 1].start = this.selectionStart, this.historyTable[this.historyTableIndex - 1].end = this.selectionEnd)
                        }
                        this.historyTable.length > this.settings.historySize && this._historyTableForget()
                    }
                }
            }, {
                key: "_historyTableUndoOrRedo",
                value: function(e) {
                    var t;
                    if (0 < arguments.length && void 0 !== e && !e ? (t = this.historyTableIndex + 1 < this.historyTable.length) && this.historyTableIndex++ : (t = 0 < this.historyTableIndex) && this.historyTableIndex--, t) {
                        var i = this.historyTable[this.historyTableIndex];
                        this.set(i.value, null, !1), M.setElementSelection(this.domElement, i.start, i.end)
                    }
                }
            }, {
                key: "_historyTableUndo",
                value: function() {
                    this._historyTableUndoOrRedo(!0)
                }
            }, {
                key: "_historyTableRedo",
                value: function() {
                    this._historyTableUndoOrRedo(!1)
                }
            }, {
                key: "_historyTableForget",
                value: function(e) {
                    for (var t = 0 < arguments.length && void 0 !== e ? e : 1, i = [], n = 0; n < t; n++) i.push(this.historyTable.shift()), this.historyTableIndex--, this.historyTableIndex < 0 && (this.historyTableIndex = 0);
                    return 1 === i.length ? i[0] : i
                }
            }, {
                key: "_historyTableCurrentValueUsed",
                value: function() {
                    var e = this.historyTableIndex;
                    return e < 0 && (e = 0), M.isUndefinedOrNullOrEmpty(this.historyTable[e]) ? "" : this.historyTable[e].value
                }
            }, {
                key: "_parseStyleRules",
                value: function() {
                    var n = this;
                    M.isUndefinedOrNullOrEmpty(this.settings.styleRules) || "" === this.rawValue || (M.isUndefinedOrNullOrEmpty(this.settings.styleRules.positive) || (0 <= this.rawValue ? this._addCSSClass(this.settings.styleRules.positive) : this._removeCSSClass(this.settings.styleRules.positive)), M.isUndefinedOrNullOrEmpty(this.settings.styleRules.negative) || (this.rawValue < 0 ? this._addCSSClass(this.settings.styleRules.negative) : this._removeCSSClass(this.settings.styleRules.negative)), M.isUndefinedOrNullOrEmpty(this.settings.styleRules.ranges) || 0 === this.settings.styleRules.ranges.length || this.settings.styleRules.ranges.forEach(function(e) {
                        n.rawValue >= e.min && n.rawValue < e.max ? n._addCSSClass(e.class) : n._removeCSSClass(e.class)
                    }), M.isUndefinedOrNullOrEmpty(this.settings.styleRules.userDefined) || 0 === this.settings.styleRules.userDefined.length || this.settings.styleRules.userDefined.forEach(function(e) {
                        if (M.isFunction(e.callback))
                            if (M.isString(e.classes)) e.callback(n.rawValue) ? n._addCSSClass(e.classes) : n._removeCSSClass(e.classes);
                            else if (M.isArray(e.classes))
                            if (2 === e.classes.length) e.callback(n.rawValue) ? (n._addCSSClass(e.classes[0]), n._removeCSSClass(e.classes[1])) : (n._removeCSSClass(e.classes[0]), n._addCSSClass(e.classes[1]));
                            else if (2 < e.classes.length) {
                            var i = e.callback(n.rawValue);
                            M.isArray(i) ? e.classes.forEach(function(e, t) {
                                M.isInArray(t, i) ? n._addCSSClass(e) : n._removeCSSClass(e)
                            }) : M.isInt(i) ? e.classes.forEach(function(e, t) {
                                t === i ? n._addCSSClass(e) : n._removeCSSClass(e)
                            }) : M.isNull(i) ? e.classes.forEach(function(e) {
                                n._removeCSSClass(e)
                            }) : M.throwError("The callback result is not an array nor a valid array index, ".concat(w(i), " given."))
                        } else M.throwError("The classes attribute is not valid for the `styleRules` option.");
                        else M.isUndefinedOrNullOrEmpty(e.classes) ? e.callback(n) : M.throwError("The callback/classes structure is not valid for the `styleRules` option.");
                        else M.warning("The given `styleRules` callback is not a function, ".concat("undefined" == typeof callback ? "undefined" : w(callback), " given."), n.settings.showWarnings)
                    }))
                }
            }, {
                key: "_addCSSClass",
                value: function(e) {
                    this.domElement.classList.add(e)
                }
            }, {
                key: "_removeCSSClass",
                value: function(e) {
                    this.domElement.classList.remove(e)
                }
            }, {
                key: "update",
                value: function() {
                    for (var t = this, e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    Array.isArray(i) && Array.isArray(i[0]) && (i = i[0]);
                    var a = M.cloneObject(this.settings),
                        r = this.rawValue,
                        s = {};
                    M.isUndefinedOrNullOrEmpty(i) || 0 === i.length ? s = null : 1 <= i.length && i.forEach(function(e) {
                        t.constructor._isPreDefinedOptionValid(e) && (e = t.constructor._getOptionObject(e)), b(s, e)
                    });
                    try {
                        this._setSettings(s, !0), this._setWritePermissions(), this._updateEventListeners(), this.set(r)
                    } catch (e) {
                        return this._setSettings(a, !0), M.throwError("Unable to update the settings, those are invalid: [".concat(e, "]")), this
                    }
                    return this
                }
            }, {
                key: "getSettings",
                value: function() {
                    return this.settings
                }
            }, {
                key: "set",
                value: function(e, t, i) {
                    var n, a = 1 < arguments.length && void 0 !== t ? t : null,
                        r = !(2 < arguments.length && void 0 !== i) || i;
                    if (M.isUndefined(e)) return M.warning("You are trying to set an 'undefined' value ; an error could have occurred.", this.settings.showWarnings), this;
                    if (M.isNull(a) || this._setSettings(a, !0), null === e && this.settings.emptyInputBehavior !== B.options.emptyInputBehavior.null) return M.warning("You are trying to set the `null` value while the `emptyInputBehavior` option is set to ".concat(this.settings.emptyInputBehavior, ". If you want to be able to set the `null` value, you need to change the 'emptyInputBehavior' option to `'null'`."), this.settings.showWarnings), this;
                    if (null === e) return this._setElementAndRawValue(null, null, r), this._saveValueToPersistentStorage(), this;
                    if (n = this.constructor._toNumericValue(e, this.settings), isNaN(Number(n))) return M.warning("The value you are trying to set results in `NaN`. The element value is set to the empty string instead.", this.settings.showWarnings), this.setValue("", r), this;
                    if ("" === n) switch (this.settings.emptyInputBehavior) {
                        case B.options.emptyInputBehavior.zero:
                            n = 0;
                            break;
                        case B.options.emptyInputBehavior.min:
                            n = this.settings.minimumValue;
                            break;
                        case B.options.emptyInputBehavior.max:
                            n = this.settings.maximumValue;
                            break;
                        default:
                            M.isNumber(this.settings.emptyInputBehavior) && (n = Number(this.settings.emptyInputBehavior))
                    }
                    if ("" === n) return s = this.settings.emptyInputBehavior === B.options.emptyInputBehavior.always ? this.settings.currencySymbol : "", this._setElementAndRawValue(s, "", r), this;
                    var s, o = S(this.constructor._checkIfInRangeWithOverrideOption(n, this.settings), 2),
                        l = o[0],
                        u = o[1];
                    if (l && u && this.settings.valuesToStrings && this._checkValuesToStrings(n)) return this._setElementAndRawValue(this.settings.valuesToStrings[n], n, r), this._saveValueToPersistentStorage(), this;
                    if (M.isZeroOrHasNoValue(n) && (n = "0"), l && u) {
                        var c = this.constructor._roundRawValue(n, this.settings);
                        return c = this._trimLeadingAndTrailingZeros(c.replace(this.settings.decimalCharacter, ".")), n = this._getRawValueToFormat(n), n = this.isFocused ? this.constructor._roundFormattedValueShownOnFocus(n, this.settings) : (this.settings.divisorWhenUnfocused && (n = (n /= this.settings.divisorWhenUnfocused).toString()), this.constructor._roundFormattedValueShownOnBlur(n, this.settings)), n = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(n, this.settings), n = this.constructor._addGroupSeparators(n, this.settings, this.isFocused, this.rawValue, c), !this.isFocused && this.settings.symbolWhenUnfocused && (n = "".concat(n).concat(this.settings.symbolWhenUnfocused)), (this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._saveValueToPersistentStorage(), this._setElementAndRawValue(n, c, r), this._setValidOrInvalidState(c), this
                    }
                    return this._triggerRangeEvents(l, u), M.throwError("The value [".concat(n, "] being set falls outside of the minimumValue [").concat(this.settings.minimumValue, "] and maximumValue [").concat(this.settings.maximumValue, "] range set for this element")), this._removeValueFromPersistentStorage(), this.setValue("", r), this
                }
            }, {
                key: "setUnformatted",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    if (null === e || M.isUndefined(e)) return this;
                    M.isNull(i) || this._setSettings(i, !0);
                    var n = this.constructor._removeBrackets(e, this.settings),
                        a = this.constructor._stripAllNonNumberCharacters(n, this.settings, !0, this.isFocused);
                    return M.isNumber(a) || M.throwError("The value is not a valid one, it's not a numeric string nor a recognized currency."), this.constructor._isWithinRangeWithOverrideOption(a, this.settings) ? this.setValue(e) : M.throwError("The value is out of the range limits [".concat(this.settings.minimumValue, ", ").concat(this.settings.maximumValue, "].")), this
                }
            }, {
                key: "setValue",
                value: function(e, t) {
                    var i = !(1 < arguments.length && void 0 !== t) || t;
                    return this._setElementAndRawValue(e, i), this
                }
            }, {
                key: "_setRawValue",
                value: function(e, t) {
                    var i = !(1 < arguments.length && void 0 !== t) || t;
                    if (this.rawValue !== e) {
                        var n = this.rawValue;
                        this.rawValue = e, !M.isNull(this.settings.rawValueDivisor) && 0 !== this.settings.rawValueDivisor && "" !== e && null !== e && this._isUserManuallyEditingTheValue() && (this.rawValue /= this.settings.rawValueDivisor), this._triggerEvent(B.events.rawValueModified, this.domElement, {
                            oldRawValue: n,
                            newRawValue: this.rawValue,
                            isPristine: this.isPristine(!0),
                            error: null,
                            aNElement: this
                        }), this._parseStyleRules(), i && this._historyTableAdd()
                    }
                }
            }, {
                key: "_setElementValue",
                value: function(e, t) {
                    var i = !(1 < arguments.length && void 0 !== t) || t,
                        n = M.getElementValue(this.domElement);
                    return e !== n && (this.internalModification = !0, M.setElementValue(this.domElement, e), this.internalModification = !1, i && this._triggerEvent(B.events.formatted, this.domElement, {
                        oldValue: n,
                        newValue: e,
                        oldRawValue: this.rawValue,
                        newRawValue: this.rawValue,
                        isPristine: this.isPristine(!1),
                        error: null,
                        aNElement: this
                    })), this
                }
            }, {
                key: "_setElementAndRawValue",
                value: function(e, t, i) {
                    var n = 1 < arguments.length && void 0 !== t ? t : null,
                        a = !(2 < arguments.length && void 0 !== i) || i;
                    return M.isNull(n) ? n = e : M.isBoolean(n) && (a = n, n = e), this._setElementValue(e), this._setRawValue(n, a), this
                }
            }, {
                key: "_getRawValueToFormat",
                value: function(e) {
                    return M.isNull(this.settings.rawValueDivisor) || 0 === this.settings.rawValueDivisor || "" === e || null === e ? e : e * this.settings.rawValueDivisor
                }
            }, {
                key: "_checkValuesToStrings",
                value: function(e) {
                    return this.constructor._checkValuesToStringsArray(e, this.valuesToStringsKeys)
                }
            }, {
                key: "_isUserManuallyEditingTheValue",
                value: function() {
                    return this.isFocused && this.isEditing || this.isDropEvent
                }
            }, {
                key: "_executeCallback",
                value: function(e, t) {
                    !M.isNull(t) && M.isFunction(t) && t(e, this)
                }
            }, {
                key: "_triggerEvent",
                value: function(e, t, i) {
                    var n = 1 < arguments.length && void 0 !== t ? t : document,
                        a = 2 < arguments.length && void 0 !== i ? i : null;
                    M.triggerEvent(e, n, a, this.settings.eventBubbles, this.settings.eventIsCancelable)
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this.getNumericString(t)
                }
            }, {
                key: "getNumericString",
                value: function(e) {
                    var t, i = 0 < arguments.length && void 0 !== e ? e : null;
                    return t = M.isNull(this.rawValue) ? null : M.trimPaddedZerosFromDecimalPlaces(this.rawValue), this._executeCallback(t, i), t
                }
            }, {
                key: "getFormatted",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    "value" in this.domElement || "textContent" in this.domElement || M.throwError("Unable to get the formatted string from the element.");
                    var i = M.getElementValue(this.domElement);
                    return this._executeCallback(i, t), i
                }
            }, {
                key: "getNumber",
                value: function(e) {
                    var t, i = 0 < arguments.length && void 0 !== e ? e : null;
                    return t = null === this.rawValue ? null : this.constructor._toLocale(this.getNumericString(), "number", this.settings), this._executeCallback(t, i), t
                }
            }, {
                key: "getLocalized",
                value: function(e, t) {
                    var i, n, a = 0 < arguments.length && void 0 !== e ? e : null,
                        r = 1 < arguments.length && void 0 !== t ? t : null;
                    M.isFunction(a) && M.isNull(r) && (r = a, a = null), (i = M.isEmptyString(this.rawValue) ? "" : "" + Number(this.rawValue)) && 0 === Number(i) && this.settings.leadingZero !== B.options.leadingZero.keep && (i = "0"), n = M.isNull(a) ? this.settings.outputFormat : a;
                    var s = this.constructor._toLocale(i, n, this.settings);
                    return this._executeCallback(s, r), s
                }
            }, {
                key: "reformat",
                value: function() {
                    return this.set(this.rawValue), this
                }
            }, {
                key: "unformat",
                value: function() {
                    return this._setElementValue(this.getNumericString()), this
                }
            }, {
                key: "unformatLocalized",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._setElementValue(this.getLocalized(t)), this
                }
            }, {
                key: "isPristine",
                value: function(e) {
                    return 0 < arguments.length && void 0 !== e && !e ? this.initialValueHtmlAttribute === this.getFormatted() : this.initialValue === this.getNumericString()
                }
            }, {
                key: "select",
                value: function() {
                    return this.settings.selectNumberOnly ? this.selectNumber() : this._defaultSelectAll(), this
                }
            }, {
                key: "_defaultSelectAll",
                value: function() {
                    M.setElementSelection(this.domElement, 0, M.getElementValue(this.domElement).length)
                }
            }, {
                key: "selectNumber",
                value: function() {
                    var e, t, i = M.getElementValue(this.domElement),
                        n = i.length,
                        a = this.settings.currencySymbol.length,
                        r = this.settings.currencySymbolPlacement,
                        s = M.isNegative(i, this.settings.negativeSignCharacter) ? 1 : 0,
                        o = this.settings.suffixText.length;
                    if (e = r === B.options.currencySymbolPlacement.suffix ? 0 : this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.left && 1 == s && 0 < a ? a + 1 : a, r === B.options.currencySymbolPlacement.prefix) t = n - o;
                    else switch (this.settings.negativePositiveSignPlacement) {
                        case B.options.negativePositiveSignPlacement.left:
                            t = n - (o + a);
                            break;
                        case B.options.negativePositiveSignPlacement.right:
                            t = 0 < a ? n - (a + s + o) : n - (a + o);
                            break;
                        default:
                            t = n - (a + o)
                    }
                    return M.setElementSelection(this.domElement, e, t), this
                }
            }, {
                key: "selectInteger",
                value: function() {
                    var e = 0,
                        t = 0 <= this.rawValue;
                    this.settings.currencySymbolPlacement !== B.options.currencySymbolPlacement.prefix && (this.settings.currencySymbolPlacement !== B.options.currencySymbolPlacement.suffix || this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.prefix && this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none) || (this.settings.showPositiveSign && t || !t && this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.left) && (e += 1), this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix && (e += this.settings.currencySymbol.length);
                    var i = M.getElementValue(this.domElement),
                        n = i.indexOf(this.settings.decimalCharacter);
                    return -1 === n && (n = this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix ? i.length - this.settings.currencySymbol.length : i.length, t || this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.suffix && this.settings.currencySymbolPlacement !== B.options.currencySymbolPlacement.suffix || --n, n -= this.settings.suffixText.length), M.setElementSelection(this.domElement, e, n), this
                }
            }, {
                key: "selectDecimal",
                value: function() {
                    var e, t, i = M.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter);
                    return e = -1 === i ? i = 0 : (i += 1, t = this.isFocused ? this.settings.decimalPlacesShownOnFocus : this.settings.decimalPlacesShownOnBlur, i + Number(t)), M.setElementSelection(this.domElement, i, e), this
                }
            }, {
                key: "node",
                value: function() {
                    return this.domElement
                }
            }, {
                key: "parent",
                value: function() {
                    return this.domElement.parentNode
                }
            }, {
                key: "detach",
                value: function(e) {
                    var t, i = 0 < arguments.length && void 0 !== e ? e : null;
                    return t = M.isNull(i) ? this.domElement : i.node(), this._removeFromLocalList(t), this
                }
            }, {
                key: "attach",
                value: function(e, t) {
                    var i = !(1 < arguments.length && void 0 !== t) || t;
                    return this._addToLocalList(e.node()), i && e.update(this.settings), this
                }
            }, {
                key: "formatOther",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return this._formatOrUnformatOther(!0, e, i)
                }
            }, {
                key: "unformatOther",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return this._formatOrUnformatOther(!1, e, i)
                }
            }, {
                key: "_formatOrUnformatOther",
                value: function(e, t, i) {
                    var n, a, r = 2 < arguments.length && void 0 !== i ? i : null;
                    if (n = M.isNull(r) ? this.settings : this._cloneAndMergeSettings(r), M.isElement(t)) {
                        var s = M.getElementValue(t);
                        return a = e ? B.format(s, n) : B.unformat(s, n), M.setElementValue(t, a), null
                    }
                    return e ? B.format(t, n) : B.unformat(t, n)
                }
            }, {
                key: "init",
                value: function(e, t) {
                    var n = this,
                        a = !(1 < arguments.length && void 0 !== t) || t,
                        i = !1,
                        r = [];
                    if (M.isString(e) ? r = p(document.querySelectorAll(e)) : M.isElement(e) ? (r.push(e), i = !0) : M.isArray(e) ? r = e : M.throwError("The given parameters to the 'init' function are invalid."), 0 === r.length) return M.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", !0), [];
                    var s = this._getLocalList(),
                        o = [];
                    return r.forEach(function(e) {
                        var t = n.settings.createLocalList;
                        a && (n.settings.createLocalList = !1);
                        var i = new B(e, M.getElementValue(e), n.settings);
                        a && (i._setLocalList(s), n._addToLocalList(e, i), n.settings.createLocalList = t), o.push(i)
                    }), i ? o[0] : o
                }
            }, {
                key: "clear",
                value: function(e) {
                    if (0 < arguments.length && void 0 !== e && e) {
                        var t = {
                            emptyInputBehavior: B.options.emptyInputBehavior.focus
                        };
                        this.set("", t)
                    } else this.set("");
                    return this
                }
            }, {
                key: "remove",
                value: function() {
                    this._removeValueFromPersistentStorage(), this._removeEventListeners(), this._removeWatcher(), this._removeFromLocalList(this.domElement), this.constructor._removeFromGlobalList(this)
                }
            }, {
                key: "wipe",
                value: function() {
                    this._setElementValue("", !1), this.remove()
                }
            }, {
                key: "nuke",
                value: function() {
                    this.remove(), this.domElement.parentNode.removeChild(this.domElement)
                }
            }, {
                key: "form",
                value: function(e) {
                    if (0 < arguments.length && void 0 !== e && e || M.isUndefinedOrNullOrEmpty(this.parentForm)) {
                        var t = this._getParentForm();
                        if (!M.isNull(t) && t !== this.parentForm) {
                            var i = this._getFormAutoNumericChildren(this.parentForm);
                            this.parentForm.dataset.anCount = i.length, this._hasFormHandlerFunction(t) ? this._incrementParentFormCounter(t) : (this._storeFormHandlerFunction(t), this._initializeFormCounterToOne(t))
                        }
                        this.parentForm = t
                    }
                    return this.parentForm
                }
            }, {
                key: "_getFormAutoNumericChildren",
                value: function(e) {
                    var t = this;
                    return p(e.querySelectorAll("input")).filter(function(e) {
                        return t.constructor.isManagedByAutoNumeric(e)
                    })
                }
            }, {
                key: "_getParentForm",
                value: function() {
                    if ("body" === this.domElement.tagName.toLowerCase()) return null;
                    var e, t = this.domElement;
                    do {
                        if (t = t.parentNode, M.isNull(t)) return null;
                        if ("body" === (e = t.tagName ? t.tagName.toLowerCase() : "")) break
                    } while ("form" !== e);
                    return "form" === e ? t : null
                }
            }, {
                key: "formNumericString",
                value: function() {
                    return this.constructor._serializeNumericString(this.form(), this.settings.serializeSpaces)
                }
            }, {
                key: "formFormatted",
                value: function() {
                    return this.constructor._serializeFormatted(this.form(), this.settings.serializeSpaces)
                }
            }, {
                key: "formLocalized",
                value: function(e) {
                    var t, i = 0 < arguments.length && void 0 !== e ? e : null;
                    return t = M.isNull(i) ? this.settings.outputFormat : i, this.constructor._serializeLocalized(this.form(), this.settings.serializeSpaces, t)
                }
            }, {
                key: "formArrayNumericString",
                value: function() {
                    return this.constructor._serializeNumericStringArray(this.form(), this.settings.serializeSpaces)
                }
            }, {
                key: "formArrayFormatted",
                value: function() {
                    return this.constructor._serializeFormattedArray(this.form(), this.settings.serializeSpaces)
                }
            }, {
                key: "formArrayLocalized",
                value: function(e) {
                    var t, i = 0 < arguments.length && void 0 !== e ? e : null;
                    return t = M.isNull(i) ? this.settings.outputFormat : i, this.constructor._serializeLocalizedArray(this.form(), this.settings.serializeSpaces, t)
                }
            }, {
                key: "formJsonNumericString",
                value: function() {
                    return JSON.stringify(this.formArrayNumericString())
                }
            }, {
                key: "formJsonFormatted",
                value: function() {
                    return JSON.stringify(this.formArrayFormatted())
                }
            }, {
                key: "formJsonLocalized",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return JSON.stringify(this.formArrayLocalized(t))
                }
            }, {
                key: "formUnformat",
                value: function() {
                    return this.constructor._getChildANInputElement(this.form()).forEach(function(e) {
                        B.getAutoNumericElement(e).unformat()
                    }), this
                }
            }, {
                key: "formUnformatLocalized",
                value: function() {
                    return this.constructor._getChildANInputElement(this.form()).forEach(function(e) {
                        B.getAutoNumericElement(e).unformatLocalized()
                    }), this
                }
            }, {
                key: "formReformat",
                value: function() {
                    return this.constructor._getChildANInputElement(this.form()).forEach(function(e) {
                        B.getAutoNumericElement(e).reformat()
                    }), this
                }
            }, {
                key: "formSubmitNumericString",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return M.isNull(t) ? (this.formUnformat(), this.form().submit(), this.formReformat()) : M.isFunction(t) ? t(this.formNumericString()) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitFormatted",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return M.isNull(t) ? this.form().submit() : M.isFunction(t) ? t(this.formFormatted()) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitLocalized",
                value: function(e, t) {
                    var i = 0 < arguments.length && void 0 !== e ? e : null,
                        n = 1 < arguments.length && void 0 !== t ? t : null;
                    return M.isNull(n) ? (this.formUnformatLocalized(), this.form().submit(), this.formReformat()) : M.isFunction(n) ? n(this.formLocalized(i)) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitArrayNumericString",
                value: function(e) {
                    return M.isFunction(e) ? e(this.formArrayNumericString()) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitArrayFormatted",
                value: function(e) {
                    return M.isFunction(e) ? e(this.formArrayFormatted()) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitArrayLocalized",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return M.isFunction(e) ? e(this.formArrayLocalized(i)) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitJsonNumericString",
                value: function(e) {
                    return M.isFunction(e) ? e(this.formJsonNumericString()) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitJsonFormatted",
                value: function(e) {
                    return M.isFunction(e) ? e(this.formJsonFormatted()) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "formSubmitJsonLocalized",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return M.isFunction(e) ? e(this.formJsonLocalized(i)) : M.throwError("The given callback is not a function."), this
                }
            }, {
                key: "_createLocalList",
                value: function() {
                    this.autoNumericLocalList = new Map, this._addToLocalList(this.domElement)
                }
            }, {
                key: "_deleteLocalList",
                value: function() {
                    delete this.autoNumericLocalList
                }
            }, {
                key: "_setLocalList",
                value: function(e) {
                    this.autoNumericLocalList = e
                }
            }, {
                key: "_getLocalList",
                value: function() {
                    return this.autoNumericLocalList
                }
            }, {
                key: "_hasLocalList",
                value: function() {
                    return this.autoNumericLocalList instanceof Map && 0 !== this.autoNumericLocalList.size
                }
            }, {
                key: "_addToLocalList",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    M.isNull(i) && (i = this), M.isUndefined(this.autoNumericLocalList) ? M.throwError("The local list provided does not exists when trying to add an element. [".concat(this.autoNumericLocalList, "] given.")) : this.autoNumericLocalList.set(e, i)
                }
            }, {
                key: "_removeFromLocalList",
                value: function(e) {
                    M.isUndefined(this.autoNumericLocalList) ? this.settings.createLocalList && M.throwError("The local list provided does not exists when trying to remove an element. [".concat(this.autoNumericLocalList, "] given.")) : this.autoNumericLocalList.delete(e)
                }
            }, {
                key: "_mergeSettings",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    b.apply(void 0, [this.settings].concat(t))
                }
            }, {
                key: "_cloneAndMergeSettings",
                value: function() {
                    for (var e = {}, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    return b.apply(void 0, [e, this.settings].concat(i)), e
                }
            }, {
                key: "_updatePredefinedOptions",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : null;
                    return M.isNull(i) ? this.update(e) : (this._mergeSettings(e, i), this.update(this.settings)), this
                }
            }, {
                key: "french",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().French, t), this
                }
            }, {
                key: "northAmerican",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().NorthAmerican, t), this
                }
            }, {
                key: "british",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().British, t), this
                }
            }, {
                key: "swiss",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().Swiss, t), this
                }
            }, {
                key: "japanese",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().Japanese, t), this
                }
            }, {
                key: "spanish",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().Spanish, t), this
                }
            }, {
                key: "chinese",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().Chinese, t), this
                }
            }, {
                key: "brazilian",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : null;
                    return this._updatePredefinedOptions(B.getPredefinedOptions().Brazilian, t), this
                }
            }, {
                key: "_runCallbacksFoundInTheSettingsObject",
                value: function() {
                    for (var e in this.settings)
                        if (Object.prototype.hasOwnProperty.call(this.settings, e)) {
                            var t = this.settings[e];
                            if ("function" == typeof t) this.settings[e] = t(this, e);
                            else {
                                var i = this.domElement.getAttribute(e);
                                i = M.camelize(i), "function" == typeof this.settings[i] && (this.settings[e] = i(this, e))
                            }
                        }
                }
            }, {
                key: "_setTrailingNegativeSignInfo",
                value: function() {
                    this.isTrailingNegative = this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.suffix || this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix && (this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.left || this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.right)
                }
            }, {
                key: "_modifyNegativeSignAndDecimalCharacterForRawValue",
                value: function(e) {
                    return "." !== this.settings.decimalCharacter && (e = e.replace(this.settings.decimalCharacter, ".")), "-" !== this.settings.negativeSignCharacter && this.settings.isNegativeSignAllowed && (e = e.replace(this.settings.negativeSignCharacter, "-")), e.match(/\d/) || (e += "0"), e
                }
            }, {
                key: "_initialCaretPosition",
                value: function(e) {
                    M.isNull(this.settings.caretPositionOnFocus) && this.settings.selectOnFocus === B.options.selectOnFocus.doNotSelect && M.throwError("`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`.");
                    var t = this.rawValue < 0,
                        i = M.isZeroOrHasNoValue(e),
                        n = e.length,
                        a = 0,
                        r = 0,
                        s = !1,
                        o = 0;
                    this.settings.caretPositionOnFocus !== B.options.caretPositionOnFocus.start && (a = (e = (e = (e = e.replace(this.settings.negativeSignCharacter, "")).replace(this.settings.positiveSignCharacter, "")).replace(this.settings.currencySymbol, "")).length, s = M.contains(e, this.settings.decimalCharacter), this.settings.caretPositionOnFocus !== B.options.caretPositionOnFocus.decimalLeft && this.settings.caretPositionOnFocus !== B.options.caretPositionOnFocus.decimalRight || (o = s ? (r = e.indexOf(this.settings.decimalCharacter), this.settings.decimalCharacter.length) : (r = a, 0)));
                    var l = "";
                    t ? l = this.settings.negativeSignCharacter : this.settings.showPositiveSign && !i && (l = this.settings.positiveSignCharacter);
                    var u, c = l.length,
                        h = this.settings.currencySymbol.length;
                    if (this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix) {
                        if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.start)
                            if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case B.options.negativePositiveSignPlacement.prefix:
                                case B.options.negativePositiveSignPlacement.left:
                                case B.options.negativePositiveSignPlacement.right:
                                    u = c + h;
                                    break;
                                case B.options.negativePositiveSignPlacement.suffix:
                                    u = h
                            } else u = h;
                            else if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.end)
                            if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case B.options.negativePositiveSignPlacement.prefix:
                                case B.options.negativePositiveSignPlacement.left:
                                case B.options.negativePositiveSignPlacement.right:
                                    u = n;
                                    break;
                                case B.options.negativePositiveSignPlacement.suffix:
                                    u = h + a
                            } else u = n;
                            else if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.decimalLeft)
                            if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case B.options.negativePositiveSignPlacement.prefix:
                                case B.options.negativePositiveSignPlacement.left:
                                case B.options.negativePositiveSignPlacement.right:
                                    u = c + h + r;
                                    break;
                                case B.options.negativePositiveSignPlacement.suffix:
                                    u = h + r
                            } else u = h + r;
                            else if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.decimalRight)
                            if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case B.options.negativePositiveSignPlacement.prefix:
                                case B.options.negativePositiveSignPlacement.left:
                                case B.options.negativePositiveSignPlacement.right:
                                    u = c + h + r + o;
                                    break;
                                case B.options.negativePositiveSignPlacement.suffix:
                                    u = h + r + o
                            } else u = h + r + o
                    } else if (this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix)
                        if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.start)
                            if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case B.options.negativePositiveSignPlacement.suffix:
                                case B.options.negativePositiveSignPlacement.right:
                                case B.options.negativePositiveSignPlacement.left:
                                    u = 0;
                                    break;
                                case B.options.negativePositiveSignPlacement.prefix:
                                    u = c
                            } else u = 0;
                            else if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.end)
                        if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                            case B.options.negativePositiveSignPlacement.suffix:
                            case B.options.negativePositiveSignPlacement.right:
                            case B.options.negativePositiveSignPlacement.left:
                                u = a;
                                break;
                            case B.options.negativePositiveSignPlacement.prefix:
                                u = c + a
                        } else u = a;
                        else if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.decimalLeft)
                        if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                            case B.options.negativePositiveSignPlacement.suffix:
                            case B.options.negativePositiveSignPlacement.right:
                            case B.options.negativePositiveSignPlacement.left:
                                u = r;
                                break;
                            case B.options.negativePositiveSignPlacement.prefix:
                                u = c + r
                        } else u = r;
                        else if (this.settings.caretPositionOnFocus === B.options.caretPositionOnFocus.decimalRight)
                        if (this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                            case B.options.negativePositiveSignPlacement.suffix:
                            case B.options.negativePositiveSignPlacement.right:
                            case B.options.negativePositiveSignPlacement.left:
                                u = r + o;
                                break;
                            case B.options.negativePositiveSignPlacement.prefix:
                                u = c + r + o
                        } else u = r + o;
                    return u
                }
            }, {
                key: "_triggerRangeEvents",
                value: function(e, t) {
                    e || this._triggerEvent(B.events.minRangeExceeded, this.domElement), t || this._triggerEvent(B.events.maxRangeExceeded, this.domElement)
                }
            }, {
                key: "_setInvalidState",
                value: function() {
                    this.isInputElement ? M.setInvalidState(this.domElement) : this._addCSSClass(this.settings.invalidClass), this._triggerEvent(B.events.invalidValue, this.domElement), this.validState = !1
                }
            }, {
                key: "_setValidState",
                value: function() {
                    this.isInputElement ? M.setValidState(this.domElement) : this._removeCSSClass(this.settings.invalidClass), this.validState || this._triggerEvent(B.events.correctedValue, this.domElement), this.validState = !0
                }
            }, {
                key: "_setValidOrInvalidState",
                value: function(e) {
                    if (this.settings.overrideMinMaxLimits === B.options.overrideMinMaxLimits.invalid) {
                        var t = this.constructor._isMinimumRangeRespected(e, this.settings),
                            i = this.constructor._isMaximumRangeRespected(e, this.settings);
                        t && i ? this._setValidState() : this._setInvalidState(), this._triggerRangeEvents(t, i)
                    }
                }
            }, {
                key: "_keepAnOriginalSettingsCopy",
                value: function() {
                    this.originalDigitGroupSeparator = this.settings.digitGroupSeparator, this.originalCurrencySymbol = this.settings.currencySymbol, this.originalSuffixText = this.settings.suffixText
                }
            }, {
                key: "_trimLeadingAndTrailingZeros",
                value: function(e) {
                    if ("" === e || null === e) return e;
                    if (this.settings.leadingZero !== B.options.leadingZero.keep) {
                        if (0 === Number(e)) return "0";
                        e = e.replace(/^(-)?0+(?=\d)/g, "$1")
                    }
                    return M.contains(e, ".") && (e = e.replace(/(\.[0-9]*?)0+$/, "$1")), e.replace(/\.$/, "")
                }
            }, {
                key: "_setPersistentStorageName",
                value: function() {
                    this.settings.saveValueToSessionStorage && ("" === this.domElement.name || M.isUndefined(this.domElement.name) ? this.rawValueStorageName = "".concat(this.storageNamePrefix).concat(this.domElement.id) : this.rawValueStorageName = "".concat(this.storageNamePrefix).concat(decodeURIComponent(this.domElement.name)))
                }
            }, {
                key: "_saveValueToPersistentStorage",
                value: function() {
                    this.settings.saveValueToSessionStorage && (this.sessionStorageAvailable ? sessionStorage.setItem(this.rawValueStorageName, this.rawValue) : document.cookie = "".concat(this.rawValueStorageName, "=").concat(this.rawValue, "; expires= ; path=/"))
                }
            }, {
                key: "_getValueFromPersistentStorage",
                value: function() {
                    return this.settings.saveValueToSessionStorage ? this.sessionStorageAvailable ? sessionStorage.getItem(this.rawValueStorageName) : this.constructor._readCookie(this.rawValueStorageName) : (M.warning("`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.", this.settings.showWarnings), null)
                }
            }, {
                key: "_removeValueFromPersistentStorage",
                value: function() {
                    if (this.settings.saveValueToSessionStorage)
                        if (this.sessionStorageAvailable) sessionStorage.removeItem(this.rawValueStorageName);
                        else {
                            var e = new Date;
                            e.setTime(e.getTime() - 864e5);
                            var t = "; expires=".concat(e.toUTCString());
                            document.cookie = "".concat(this.rawValueStorageName, "='' ;").concat(t, "; path=/")
                        }
                }
            }, {
                key: "_getDefaultValue",
                value: function(e) {
                    var t = e.getAttribute("value");
                    return M.isNull(t) ? "" : t
                }
            }, {
                key: "_onFocusInAndMouseEnter",
                value: function(e) {
                    if (this.isEditing = !1, !this.formulaMode && this.settings.unformatOnHover && "mouseenter" === e.type && e.altKey) this.constructor._unformatAltHovered(this);
                    else if ("focus" === e.type && (this.isFocused = !0, this.rawValueOnFocus = this.rawValue), "focus" === e.type && this.settings.unformatOnHover && this.hoveredWithAlt && this.constructor._reformatAltHovered(this), "focus" === e.type || "mouseenter" === e.type && !this.isFocused) {
                        var t = null;
                        this.settings.emptyInputBehavior === B.options.emptyInputBehavior.focus && this.rawValue < 0 && null !== this.settings.negativeBracketsTypeOnBlur && this.settings.isNegativeSignAllowed && (t = this.constructor._removeBrackets(M.getElementValue(this.domElement), this.settings));
                        var i = this._getRawValueToFormat(this.rawValue);
                        if ("" !== i) {
                            var n = this.constructor._roundFormattedValueShownOnFocusOrBlur(i, this.settings, this.isFocused);
                            t = this.settings.showOnlyNumbersOnFocus === B.options.showOnlyNumbersOnFocus.onlyNumbers ? (this.settings.digitGroupSeparator = "", this.settings.currencySymbol = "", this.settings.suffixText = "", n.replace(".", this.settings.decimalCharacter)) : M.isNull(n) ? "" : this.constructor._addGroupSeparators(n.replace(".", this.settings.decimalCharacter), this.settings, this.isFocused, i)
                        }
                        M.isNull(t) ? this.valueOnFocus = "" : this.valueOnFocus = t, this.lastVal = this.valueOnFocus;
                        var a = this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(this.valueOnFocus, this.settings),
                            r = this.constructor._orderValueCurrencySymbolAndSuffixText(this.valueOnFocus, this.settings, !0),
                            s = a && "" !== r && this.settings.emptyInputBehavior === B.options.emptyInputBehavior.focus;
                        s && (t = r), M.isNull(t) || this._setElementValue(t), s && r === this.settings.currencySymbol && this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix && M.setElementSelection(e.target, 0)
                    }
                }
            }, {
                key: "_onFocus",
                value: function() {
                    this.settings.isCancellable && this._saveCancellableValue()
                }
            }, {
                key: "_onFocusIn",
                value: function(e) {
                    this.settings.selectOnFocus ? this.select() : M.isNull(this.settings.caretPositionOnFocus) || M.setElementSelection(e.target, this._initialCaretPosition(M.getElementValue(this.domElement)))
                }
            }, {
                key: "_enterFormulaMode",
                value: function() {
                    this.settings.formulaMode && (this.formulaMode = !0, M.setElementValue(this.domElement, "="), M.setElementSelection(this.domElement, 1))
                }
            }, {
                key: "_exitFormulaMode",
                value: function() {
                    var e, t = M.getElementValue(this.domElement);
                    t = t.replace(/^\s*=/, "");
                    try {
                        var i = new v(t, this.settings.decimalCharacter);
                        e = (new u).evaluate(i)
                    } catch (e) {
                        return this._triggerEvent(B.events.invalidFormula, this.domElement, {
                            formula: t,
                            aNElement: this
                        }), this.reformat(), void(this.formulaMode = !1)
                    }
                    this._triggerEvent(B.events.validFormula, this.domElement, {
                        formula: t,
                        result: e,
                        aNElement: this
                    }), this.set(e), this.formulaMode = !1
                }
            }, {
                key: "_acceptNonPrintableKeysInFormulaMode",
                value: function() {
                    return this.eventKey === d.keyName.Backspace || this.eventKey === d.keyName.Delete || this.eventKey === d.keyName.LeftArrow || this.eventKey === d.keyName.RightArrow || this.eventKey === d.keyName.Home || this.eventKey === d.keyName.End
                }
            }, {
                key: "_onKeydown",
                value: function(e) {
                    if (this.formatted = !1, this.isEditing = !0, this.formulaMode || this.isFocused || !this.settings.unformatOnHover || !e.altKey || this.domElement !== M.getHoveredElement()) {
                        if (this._updateEventKeyInfo(e), this.keydownEventCounter += 1, 1 === this.keydownEventCounter && (this.initialValueOnFirstKeydown = M.getElementValue(e.target), this.initialRawValueOnFirstKeydown = this.rawValue), this.formulaMode) {
                            if (this.eventKey === d.keyName.Esc) return this.formulaMode = !1, void this.reformat();
                            if (this.eventKey === d.keyName.Enter) return void this._exitFormulaMode();
                            if (this._acceptNonPrintableKeysInFormulaMode()) return
                        } else if (this.eventKey === d.keyName.Equal) return void this._enterFormulaMode();
                        if (this.domElement.readOnly || this.settings.readOnly || this.domElement.disabled) this.processed = !0;
                        else {
                            this.eventKey === d.keyName.Esc && (e.preventDefault(), this.settings.isCancellable && this.rawValue !== this.savedCancellableValue && (this.set(this.savedCancellableValue), this._triggerEvent(B.events.native.input, e.target)), this.select());
                            var t = M.getElementValue(e.target);
                            if (this.eventKey === d.keyName.Enter && this.rawValue !== this.rawValueOnFocus && (this._triggerEvent(B.events.native.change, e.target), this.valueOnFocus = t, this.rawValueOnFocus = this.rawValue, this.settings.isCancellable && this._saveCancellableValue()), this._updateInternalProperties(e), this._processNonPrintableKeysAndShortcuts(e)) this.processed = !0;
                            else if (this.eventKey === d.keyName.Backspace || this.eventKey === d.keyName.Delete) {
                                var i = this._processCharacterDeletion();
                                if (this.processed = !0, !i) return void e.preventDefault();
                                this._formatValue(e), (t = M.getElementValue(e.target)) !== this.lastVal && this.throwInput && (this._triggerEvent(B.events.native.input, e.target), e.preventDefault()), this.lastVal = t, this.throwInput = !0
                            }
                        }
                    } else this.constructor._unformatAltHovered(this)
                }
            }, {
                key: "_onKeypress",
                value: function(e) {
                    if (this.formulaMode) {
                        if (this._acceptNonPrintableKeysInFormulaMode()) return;
                        if (this.settings.formulaChars.test(this.eventKey)) return;
                        e.preventDefault()
                    } else if (this.eventKey !== d.keyName.Insert) {
                        var t = this.processed;
                        if (this._updateInternalProperties(e), !this._processNonPrintableKeysAndShortcuts(e))
                            if (t) e.preventDefault();
                            else {
                                if (this._processCharacterInsertion()) {
                                    this._formatValue(e);
                                    var i = M.getElementValue(e.target);
                                    if (i !== this.lastVal && this.throwInput) this._triggerEvent(B.events.native.input, e.target), e.preventDefault();
                                    else {
                                        if ((this.eventKey === this.settings.decimalCharacter || this.eventKey === this.settings.decimalCharacterAlternative) && M.getElementSelection(e.target).start === M.getElementSelection(e.target).end && M.getElementSelection(e.target).start === i.indexOf(this.settings.decimalCharacter)) {
                                            var n = M.getElementSelection(e.target).start + 1;
                                            M.setElementSelection(e.target, n)
                                        }
                                        e.preventDefault()
                                    }
                                    return this.lastVal = M.getElementValue(e.target), this.throwInput = !0, void this._setValidOrInvalidState(this.rawValue)
                                }
                                e.preventDefault()
                            }
                    }
                }
            }, {
                key: "_onKeyup",
                value: function(e) {
                    if (this.isEditing = !1, this.keydownEventCounter = 0, !this.formulaMode)
                        if (this.settings.isCancellable && this.eventKey === d.keyName.Esc) e.preventDefault();
                        else {
                            if (this.eventKey === d.keyName.Z || this.eventKey === d.keyName.z) {
                                if (e.ctrlKey && e.shiftKey) return e.preventDefault(), this._historyTableRedo(), void(this.onGoingRedo = !0);
                                if (e.ctrlKey && !e.shiftKey) {
                                    if (!this.onGoingRedo) return e.preventDefault(), void this._historyTableUndo();
                                    this.onGoingRedo = !1
                                }
                            }
                            if (this.onGoingRedo && (e.ctrlKey || e.shiftKey) && (this.onGoingRedo = !1), (e.ctrlKey || e.metaKey) && this.eventKey === d.keyName.x) {
                                var t = M.getElementSelection(this.domElement).start,
                                    i = this.constructor._toNumericValue(M.getElementValue(e.target), this.settings);
                                this.set(i), this._setCaretPosition(t)
                            }
                            if (this.eventKey === d.keyName.Alt && this.settings.unformatOnHover && this.hoveredWithAlt) this.constructor._reformatAltHovered(this);
                            else if (!e.ctrlKey && !e.metaKey || this.eventKey !== d.keyName.Backspace && this.eventKey !== d.keyName.Delete) {
                                this._updateInternalProperties(e);
                                var n = this._processNonPrintableKeysAndShortcuts(e);
                                delete this.valuePartsBeforePaste;
                                var a = M.getElementValue(e.target);
                                if (!(n || "" === a && "" === this.initialValueOnFirstKeydown) && (a === this.settings.currencySymbol ? this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix ? M.setElementSelection(e.target, 0) : M.setElementSelection(e.target, this.settings.currencySymbol.length) : this.eventKey === d.keyName.Tab && M.setElementSelection(e.target, 0, a.length), (a === this.settings.suffixText || "" === this.rawValue && "" !== this.settings.currencySymbol && "" !== this.settings.suffixText) && M.setElementSelection(e.target, 0), null !== this.settings.decimalPlacesShownOnFocus && this._saveValueToPersistentStorage(), this.formatted || this._formatValue(e), this._setValidOrInvalidState(this.rawValue), this._saveRawValueForAndroid(), a !== this.initialValueOnFirstKeydown && this._triggerEvent(B.events.formatted, e.target, {
                                        oldValue: this.initialValueOnFirstKeydown,
                                        newValue: a,
                                        oldRawValue: this.initialRawValueOnFirstKeydown,
                                        newRawValue: this.rawValue,
                                        isPristine: this.isPristine(!1),
                                        error: null,
                                        aNElement: this
                                    }), 1 < this.historyTable.length)) {
                                    var r = M.getElementSelection(this.domElement);
                                    this.selectionStart = r.start, this.selectionEnd = r.end, this.historyTable[this.historyTableIndex].start = this.selectionStart, this.historyTable[this.historyTableIndex].end = this.selectionEnd
                                }
                            } else {
                                var s = M.getElementValue(e.target);
                                this._setRawValue(this._formatOrUnformatOther(!1, s))
                            }
                        }
                }
            }, {
                key: "_saveRawValueForAndroid",
                value: function() {
                    if (this.eventKey === d.keyName.AndroidDefault) {
                        var e = this.constructor._stripAllNonNumberCharactersExceptCustomDecimalChar(this.getFormatted(), this.settings, !0, this.isFocused);
                        e = this.constructor._convertToNumericString(e, this.settings), this._setRawValue(e)
                    }
                }
            }, {
                key: "_onFocusOutAndMouseLeave",
                value: function(e) {
                    if (this.isEditing = !1, "mouseleave" !== e.type || !this.formulaMode)
                        if (this.settings.unformatOnHover && "mouseleave" === e.type && this.hoveredWithAlt) this.constructor._reformatAltHovered(this);
                        else if ("mouseleave" === e.type && !this.isFocused || "blur" === e.type) {
                        "blur" === e.type && this.formulaMode && this._exitFormulaMode(), this._saveValueToPersistentStorage(), this.settings.showOnlyNumbersOnFocus === B.options.showOnlyNumbersOnFocus.onlyNumbers && (this.settings.digitGroupSeparator = this.originalDigitGroupSeparator, this.settings.currencySymbol = this.originalCurrencySymbol, this.settings.suffixText = this.originalSuffixText);
                        var t = this._getRawValueToFormat(this.rawValue),
                            i = M.isNull(t),
                            n = S(this.constructor._checkIfInRangeWithOverrideOption(t, this.settings), 2),
                            a = n[0],
                            r = n[1],
                            s = !1;
                        if ("" === t || i || (this._triggerRangeEvents(a, r), this.settings.valuesToStrings && this._checkValuesToStrings(t) && (this._setElementValue(this.settings.valuesToStrings[t]), s = !0)), !s) {
                            var o;
                            if (o = i || "" === t ? t : String(t), "" === t || i) {
                                if ("" === t) switch (this.settings.emptyInputBehavior) {
                                    case B.options.emptyInputBehavior.zero:
                                        this._setRawValue("0"), o = this.constructor._roundValue("0", this.settings, 0);
                                        break;
                                    case B.options.emptyInputBehavior.min:
                                        this._setRawValue(this.settings.minimumValue), o = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.minimumValue, this.settings, this.isFocused);
                                        break;
                                    case B.options.emptyInputBehavior.max:
                                        this._setRawValue(this.settings.maximumValue), o = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.maximumValue, this.settings, this.isFocused);
                                        break;
                                    default:
                                        M.isNumber(this.settings.emptyInputBehavior) && (this._setRawValue(this.settings.emptyInputBehavior), o = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.emptyInputBehavior, this.settings, this.isFocused))
                                }
                            } else a && r && !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(t, this.settings) ? (o = this._modifyNegativeSignAndDecimalCharacterForRawValue(o), this.settings.divisorWhenUnfocused && !M.isNull(o) && (o = (o /= this.settings.divisorWhenUnfocused).toString()), o = this.constructor._roundFormattedValueShownOnBlur(o, this.settings), o = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(o, this.settings)) : this._triggerRangeEvents(a, r);
                            var l = this.constructor._orderValueCurrencySymbolAndSuffixText(o, this.settings, !1);
                            this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(o, this.settings) || i && this.settings.emptyInputBehavior === B.options.emptyInputBehavior.null || (l = this.constructor._addGroupSeparators(o, this.settings, !1, t)), l === t && "" !== t && this.settings.allowDecimalPadding !== B.options.allowDecimalPadding.never && this.settings.allowDecimalPadding !== B.options.allowDecimalPadding.floats || (this.settings.symbolWhenUnfocused && "" !== t && null !== t && (l = "".concat(l).concat(this.settings.symbolWhenUnfocused)), this._setElementValue(l))
                        }
                        this._setValidOrInvalidState(this.rawValue), "blur" === e.type && this._onBlur(e)
                    }
                }
            }, {
                key: "_onPaste",
                value: function(e) {
                    if (e.preventDefault(), !(this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled)) {
                        var t, i;
                        window.clipboardData && window.clipboardData.getData ? t = window.clipboardData.getData("Text") : e.clipboardData && e.clipboardData.getData ? t = e.clipboardData.getData("text/plain") : M.throwError("Unable to retrieve the pasted value. Please use a modern browser (ie. Firefox or Chromium)."), i = e.target.tagName ? e.target : e.explicitOriginalTarget;
                        var n = M.getElementValue(i),
                            a = i.selectionStart || 0,
                            r = i.selectionEnd || 0,
                            s = r - a;
                        if (s === n.length) {
                            var o = this._preparePastedText(t),
                                l = M.arabicToLatinNumbers(o, !1, !1, !1);
                            return "." === l || "" === l || "." !== l && !M.isNumber(l) ? (this.formatted = !0, void(this.settings.onInvalidPaste === B.options.onInvalidPaste.error && M.throwError("The pasted value '".concat(t, "' is not a valid paste content.")))) : (this.set(l), this.formatted = !0, void this._triggerEvent(B.events.native.input, i))
                        }
                        var u = M.isNegativeStrict(t, this.settings.negativeSignCharacter);
                        u && (t = t.slice(1, t.length));
                        var c, h, m = this._preparePastedText(t);
                        if ("." !== (c = "." === m ? "." : M.arabicToLatinNumbers(m, !1, !1, !1)) && (!M.isNumber(c) || "" === c)) return this.formatted = !0, void(this.settings.onInvalidPaste === B.options.onInvalidPaste.error && M.throwError("The pasted value '".concat(t, "' is not a valid paste content.")));
                        var g, d, v = M.isNegativeStrict(this.getNumericString(), this.settings.negativeSignCharacter);
                        g = !(!u || v) && (v = !0);
                        var p = n.slice(0, a),
                            f = n.slice(r, n.length);
                        d = a !== r ? this._preparePastedText(p + f) : this._preparePastedText(n), v && (d = M.setRawNegativeSign(d)), h = M.convertCharacterCountToIndexPosition(M.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)), g && h++;
                        var y = d.slice(0, h),
                            S = d.slice(h, d.length),
                            b = !1;
                        "." === c && (M.contains(y, ".") && (b = !0, y = y.replace(".", "")), S = S.replace(".", ""));
                        var w = !1;
                        switch ("" === y && "-" === S && (y = "-", w = !(S = "")), this.settings.onInvalidPaste) {
                            case B.options.onInvalidPaste.truncate:
                            case B.options.onInvalidPaste.replace:
                                for (var P = M.parseStr(this.settings.minimumValue), O = M.parseStr(this.settings.maximumValue), k = d, N = 0, E = y; N < c.length && (d = (E += c[N]) + S, this.constructor._checkIfInRange(d, P, O));) k = d, N++;
                                if (h += N, w && h++, this.settings.onInvalidPaste === B.options.onInvalidPaste.truncate) {
                                    d = k, b && h--;
                                    break
                                }
                                for (var _ = h, C = k.length; N < c.length && _ < C;)
                                    if ("." !== k[_]) {
                                        if (d = M.replaceCharAt(k, _, c[N]), !this.constructor._checkIfInRange(d, P, O)) break;
                                        k = d, N++, _++
                                    } else _++;
                                h = _, b && h--, d = k;
                                break;
                            case B.options.onInvalidPaste.error:
                            case B.options.onInvalidPaste.ignore:
                            case B.options.onInvalidPaste.clamp:
                            default:
                                if (d = "".concat(y).concat(c).concat(S), a === r) h = M.convertCharacterCountToIndexPosition(M.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + c.length;
                                else if ("" === S) h = M.convertCharacterCountToIndexPosition(M.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + c.length, w && h++;
                                else {
                                    var F = M.convertCharacterCountToIndexPosition(M.countNumberCharactersOnTheCaretLeftSide(n, r, this.settings.decimalCharacter)),
                                        x = M.getElementValue(i).slice(a, r);
                                    h = F - s + M.countCharInText(this.settings.digitGroupSeparator, x) + c.length
                                }
                                g && h++, b && h--
                        }
                        if (M.isNumber(d) && "" !== d) {
                            var V = !1,
                                T = !1;
                            try {
                                this.set(d), V = !0
                            } catch (e) {
                                var A;
                                switch (this.settings.onInvalidPaste) {
                                    case B.options.onInvalidPaste.clamp:
                                        A = M.clampToRangeLimits(d, this.settings);
                                        try {
                                            this.set(A)
                                        } catch (e) {
                                            M.throwError("Fatal error: Unable to set the clamped value '".concat(A, "'."))
                                        }
                                        V = T = !0, d = A;
                                        break;
                                    case B.options.onInvalidPaste.error:
                                    case B.options.onInvalidPaste.truncate:
                                    case B.options.onInvalidPaste.replace:
                                        M.throwError("The pasted value '".concat(t, "' results in a value '").concat(d, "' that is outside of the minimum [").concat(this.settings.minimumValue, "] and maximum [").concat(this.settings.maximumValue, "] value range."));
                                    case B.options.onInvalidPaste.ignore:
                                    default:
                                        return
                                }
                            }
                            var L, I = M.getElementValue(i);
                            if (V) switch (this.settings.onInvalidPaste) {
                                case B.options.onInvalidPaste.clamp:
                                    if (T) {
                                        this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix ? M.setElementSelection(i, I.length - this.settings.currencySymbol.length) : M.setElementSelection(i, I.length);
                                        break
                                    }
                                    case B.options.onInvalidPaste.error:
                                    case B.options.onInvalidPaste.ignore:
                                    case B.options.onInvalidPaste.truncate:
                                    case B.options.onInvalidPaste.replace:
                                    default:
                                        L = M.findCaretPositionInFormattedNumber(d, h, I, this.settings.decimalCharacter), M.setElementSelection(i, L)
                            }
                            V && n !== I && this._triggerEvent(B.events.native.input, i)
                        } else this.settings.onInvalidPaste === B.options.onInvalidPaste.error && M.throwError("The pasted value '".concat(t, "' would result into an invalid content '").concat(d, "'."))
                    }
                }
            }, {
                key: "_onBlur",
                value: function(e) {
                    this.isFocused = !1, this.isEditing = !1, this.rawValue !== this.rawValueOnFocus && this._triggerEvent(B.events.native.change, e.target), this.rawValueOnFocus = void 0
                }
            }, {
                key: "_onWheel",
                value: function(e) {
                    this.formulaMode || this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled || this.settings.modifyValueOnWheel && (this.settings.wheelOn === B.options.wheelOn.focus ? this.isFocused ? e.shiftKey || this.wheelAction(e) : e.shiftKey && this.wheelAction(e) : this.settings.wheelOn === B.options.wheelOn.hover ? e.shiftKey ? (e.preventDefault(), window.scrollBy(0, M.isNegativeStrict(String(e.deltaY)) ? -50 : 50)) : this.wheelAction(e) : M.throwError("Unknown `wheelOn` option."))
                }
            }, {
                key: "wheelAction",
                value: function(e) {
                    this.isWheelEvent = !0;
                    var t, i = e.target.selectionStart || 0,
                        n = e.target.selectionEnd || 0,
                        a = this.rawValue;
                    if (M.isUndefinedOrNullOrEmpty(a) ? 0 < this.settings.minimumValue || this.settings.maximumValue < 0 ? M.isWheelUpEvent(e) ? t = this.settings.minimumValue : M.isWheelDownEvent(e) ? t = this.settings.maximumValue : M.throwError("The event is not a 'wheel' event.") : t = 0 : t = a, t = +t, M.isNumber(this.settings.wheelStep)) {
                        var r = +this.settings.wheelStep;
                        M.isWheelUpEvent(e) ? t += r : M.isWheelDownEvent(e) && (t -= r)
                    } else M.isWheelUpEvent(e) ? t = M.addAndRoundToNearestAuto(t, this.settings.decimalPlacesRawValue) : M.isWheelDownEvent(e) && (t = M.subtractAndRoundToNearestAuto(t, this.settings.decimalPlacesRawValue));
                    (t = M.clampToRangeLimits(t, this.settings)) !== +a && (this.set(t), this._triggerEvent(B.events.native.input, e.target)), e.preventDefault(), this._setSelection(i, n), this.isWheelEvent = !1
                }
            }, {
                key: "_onDrop",
                value: function(e) {
                    if (!this.formulaMode) {
                        var t;
                        this.isDropEvent = !0, e.preventDefault(), t = M.isIE11() ? "text" : "text/plain";
                        var i = e.dataTransfer.getData(t),
                            n = this.unformatOther(i);
                        this.set(n), this.isDropEvent = !1
                    }
                }
            }, {
                key: "_onFormSubmit",
                value: function() {
                    var t = this;
                    return this._getFormAutoNumericChildren(this.parentForm).map(function(e) {
                        return t.constructor.getAutoNumericElement(e)
                    }).forEach(function(e) {
                        return e._unformatOnSubmit()
                    }), !0
                }
            }, {
                key: "_onFormReset",
                value: function() {
                    var i = this;
                    this._getFormAutoNumericChildren(this.parentForm).map(function(e) {
                        return i.constructor.getAutoNumericElement(e)
                    }).forEach(function(e) {
                        var t = i._getDefaultValue(e.node());
                        setTimeout(function() {
                            return e.set(t)
                        }, 0)
                    })
                }
            }, {
                key: "_unformatOnSubmit",
                value: function() {
                    this.settings.unformatOnSubmit && this._setElementValue(this.rawValue)
                }
            }, {
                key: "_onKeydownGlobal",
                value: function(e) {
                    if (M.character(e) === d.keyName.Alt) {
                        var t = M.getHoveredElement();
                        if (B.isManagedByAutoNumeric(t)) {
                            var i = B.getAutoNumericElement(t);
                            !i.formulaMode && i.settings.unformatOnHover && this.constructor._unformatAltHovered(i)
                        }
                    }
                }
            }, {
                key: "_onKeyupGlobal",
                value: function(e) {
                    if (M.character(e) === d.keyName.Alt) {
                        var t = M.getHoveredElement();
                        if (B.isManagedByAutoNumeric(t)) {
                            var i = B.getAutoNumericElement(t);
                            if (i.formulaMode || !i.settings.unformatOnHover) return;
                            this.constructor._reformatAltHovered(i)
                        }
                    }
                }
            }, {
                key: "_isElementTagSupported",
                value: function() {
                    return M.isElement(this.domElement) || M.throwError("The DOM element is not valid, ".concat(this.domElement, " given.")), M.isInArray(this.domElement.tagName.toLowerCase(), this.allowedTagList)
                }
            }, {
                key: "_isInputElement",
                value: function() {
                    return "input" === this.domElement.tagName.toLowerCase()
                }
            }, {
                key: "_isInputTypeSupported",
                value: function() {
                    return "text" === this.domElement.type || "hidden" === this.domElement.type || "tel" === this.domElement.type || M.isUndefinedOrNullOrEmpty(this.domElement.type)
                }
            }, {
                key: "_checkElement",
                value: function() {
                    var e = this.domElement.tagName.toLowerCase();
                    this._isElementTagSupported() || M.throwError("The <".concat(e, "> tag is not supported by autoNumeric")), this._isInputElement() ? (this._isInputTypeSupported() || M.throwError('The input type "'.concat(this.domElement.type, '" is not supported by autoNumeric')), this.isInputElement = !0) : (this.isInputElement = !1, this.isContentEditable = this.domElement.hasAttribute("contenteditable") && "true" === this.domElement.getAttribute("contenteditable"))
                }
            }, {
                key: "_formatDefaultValueOnPageLoad",
                value: function(e) {
                    var t, i = 0 < arguments.length && void 0 !== e ? e : null,
                        n = !0;
                    if (M.isNull(i) ? (t = M.getElementValue(this.domElement).trim(), this.domElement.setAttribute("value", t)) : t = i, this.isInputElement || this.isContentEditable) {
                        var a = this.constructor._toNumericValue(t, this.settings);
                        if (this.domElement.hasAttribute("value") && "" !== this.domElement.getAttribute("value")) {
                            if (null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride.toString() !== t || null === this.settings.defaultValueOverride && "" !== t && t !== this.domElement.getAttribute("value") || "" !== t && "hidden" === this.domElement.getAttribute("type") && !M.isNumber(a)) {
                                if (this.settings.saveValueToSessionStorage && (null !== this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._setRawValue(this._getValueFromPersistentStorage()), !this.settings.saveValueToSessionStorage) {
                                    var r = this.constructor._removeBrackets(t, this.settings);
                                    (this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix) && "" !== this.settings.negativeSignCharacter && M.isNegative(t, this.settings.negativeSignCharacter) ? this._setRawValue("-".concat(this.constructor._stripAllNonNumberCharacters(r, this.settings, !0, this.isFocused))) : this._setRawValue(this.constructor._stripAllNonNumberCharacters(r, this.settings, !0, this.isFocused))
                                }
                                n = !1
                            }
                        } else isNaN(Number(a)) || 1 / 0 === a ? M.throwError("The value [".concat(t, "] used in the input is not a valid value autoNumeric can work with.")) : (this.set(a), n = !1);
                        if ("" === t) switch (this.settings.emptyInputBehavior) {
                            case B.options.emptyInputBehavior.focus:
                            case B.options.emptyInputBehavior.null:
                            case B.options.emptyInputBehavior.press:
                                break;
                            case B.options.emptyInputBehavior.always:
                                this._setElementValue(this.settings.currencySymbol);
                                break;
                            case B.options.emptyInputBehavior.min:
                                this.set(this.settings.minimumValue);
                                break;
                            case B.options.emptyInputBehavior.max:
                                this.set(this.settings.maximumValue);
                                break;
                            case B.options.emptyInputBehavior.zero:
                                this.set("0");
                                break;
                            default:
                                this.set(this.settings.emptyInputBehavior)
                        } else n && t === this.domElement.getAttribute("value") && this.set(t)
                    } else null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride !== t || this.set(t)
                }
            }, {
                key: "_calculateVMinAndVMaxIntegerSizes",
                value: function() {
                    var e = S(this.settings.maximumValue.toString().split("."), 1)[0],
                        t = S(this.settings.minimumValue || 0 === this.settings.minimumValue ? this.settings.minimumValue.toString().split(".") : [], 1)[0];
                    e = e.replace(this.settings.negativeSignCharacter, ""), t = t.replace(this.settings.negativeSignCharacter, ""), this.settings.mIntPos = Math.max(e.length, 1), this.settings.mIntNeg = Math.max(t.length, 1)
                }
            }, {
                key: "_calculateValuesToStringsKeys",
                value: function() {
                    this.settings.valuesToStrings ? this.valuesToStringsKeys = Object.keys(this.settings.valuesToStrings) : this.valuesToStringsKeys = []
                }
            }, {
                key: "_transformOptionsValuesToDefaultTypes",
                value: function() {
                    for (var e in this.settings)
                        if (Object.prototype.hasOwnProperty.call(this.settings, e)) {
                            var t = this.settings[e];
                            "true" !== t && "false" !== t || (this.settings[e] = "true" === t), "number" == typeof t && (this.settings[e] = t.toString())
                        }
                }
            }, {
                key: "_setSettings",
                value: function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t && t;
                    !i && M.isNull(e) || this.constructor._convertOldOptionsToNewOnes(e), i ? ("decimalPlacesRawValue" in e && (this.settings.originalDecimalPlacesRawValue = e.decimalPlacesRawValue), "decimalPlaces" in e && (this.settings.originalDecimalPlaces = e.decimalPlaces), this.constructor._calculateDecimalPlacesOnUpdate(e, this.settings), this._mergeSettings(e)) : (this.settings = {}, this._mergeSettings(this.constructor.getDefaultConfig(), this.domElement.dataset, e, {
                        rawValue: this.defaultRawValue
                    }), this.caretFix = !1, this.throwInput = !0, this.allowedTagList = d.allowedTagList, this.runOnce = !1, this.hoveredWithAlt = !1), this._transformOptionsValuesToDefaultTypes(), this._runCallbacksFoundInTheSettingsObject(), this.constructor._correctNegativePositiveSignPlacementOption(this.settings), this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(this.settings), this.constructor._setNegativePositiveSignPermissions(this.settings), i || (M.isNull(e) || !e.decimalPlaces ? this.settings.originalDecimalPlaces = null : this.settings.originalDecimalPlaces = e.decimalPlaces, this.settings.originalDecimalPlacesRawValue = this.settings.decimalPlacesRawValue, this.constructor._calculateDecimalPlacesOnInit(this.settings)), this._calculateVMinAndVMaxIntegerSizes(), this._setTrailingNegativeSignInfo(), this.regex = {}, this.constructor._cachesUsualRegularExpressions(this.settings, this.regex), this.constructor._setBrackets(this.settings), this._calculateValuesToStringsKeys(), M.isEmptyObj(this.settings) && M.throwError("Unable to set the settings, those are invalid ; an empty object was given."), this.constructor.validate(this.settings, !1, e), this._keepAnOriginalSettingsCopy()
                }
            }, {
                key: "_preparePastedText",
                value: function(e) {
                    return this.constructor._stripAllNonNumberCharacters(e, this.settings, !0, this.isFocused)
                }
            }, {
                key: "_updateInternalProperties",
                value: function() {
                    this.selection = M.getElementSelection(this.domElement), this.processed = !1
                }
            }, {
                key: "_updateEventKeyInfo",
                value: function(e) {
                    this.eventKey = M.character(e)
                }
            }, {
                key: "_saveCancellableValue",
                value: function() {
                    this.savedCancellableValue = this.rawValue
                }
            }, {
                key: "_setSelection",
                value: function(e, t) {
                    e = Math.max(e, 0), t = Math.min(t, M.getElementValue(this.domElement).length), this.selection = {
                        start: e,
                        end: t,
                        length: t - e
                    }, M.setElementSelection(this.domElement, e, t)
                }
            }, {
                key: "_setCaretPosition",
                value: function(e) {
                    this._setSelection(e, e)
                }
            }, {
                key: "_getLeftAndRightPartAroundTheSelection",
                value: function() {
                    var e = M.getElementValue(this.domElement);
                    return [e.substring(0, this.selection.start), e.substring(this.selection.end, e.length)]
                }
            }, {
                key: "_getUnformattedLeftAndRightPartAroundTheSelection",
                value: function() {
                    var e = S(this._getLeftAndRightPartAroundTheSelection(), 2),
                        t = e[0],
                        i = e[1];
                    if ("" === t && "" === i) return ["", ""];
                    var n = !0;
                    return this.eventKey !== d.keyName.Hyphen && this.eventKey !== d.keyName.Minus || 0 !== Number(t) || (n = !1), this.isTrailingNegative && (M.isNegative(i, this.settings.negativeSignCharacter) && !M.isNegative(t, this.settings.negativeSignCharacter) || "" === i && M.isNegative(t, this.settings.negativeSignCharacter, !0)) && (t = t.replace(this.settings.negativeSignCharacter, ""), i = i.replace(this.settings.negativeSignCharacter, ""), t = t.replace("-", ""), i = i.replace("-", ""), t = "-".concat(t)), [t = B._stripAllNonNumberCharactersExceptCustomDecimalChar(t, this.settings, n, this.isFocused), i = B._stripAllNonNumberCharactersExceptCustomDecimalChar(i, this.settings, !1, this.isFocused)]
                }
            }, {
                key: "_normalizeParts",
                value: function(e, t) {
                    var i = !0;
                    this.eventKey !== d.keyName.Hyphen && this.eventKey !== d.keyName.Minus || 0 !== Number(e) || (i = !1), this.isTrailingNegative && M.isNegative(t, this.settings.negativeSignCharacter) && !M.isNegative(e, this.settings.negativeSignCharacter) && (e = "-".concat(e), t = t.replace(this.settings.negativeSignCharacter, "")), e = B._stripAllNonNumberCharactersExceptCustomDecimalChar(e, this.settings, i, this.isFocused), t = B._stripAllNonNumberCharactersExceptCustomDecimalChar(t, this.settings, !1, this.isFocused), this.settings.leadingZero !== B.options.leadingZero.deny || this.eventKey !== d.keyName.num0 && this.eventKey !== d.keyName.numpad0 || 0 !== Number(e) || M.contains(e, this.settings.decimalCharacter) || "" === t || (e = e.substring(0, e.length - 1));
                    var n = e + t;
                    if (this.settings.decimalCharacter) {
                        var a = n.match(new RegExp("^".concat(this.regex.aNegRegAutoStrip, "\\").concat(this.settings.decimalCharacter)));
                        a && (n = (e = e.replace(a[1], a[1] + "0")) + t)
                    }
                    return [e, t, n]
                }
            }, {
                key: "_setValueParts",
                value: function(e, t, i) {
                    var n = 2 < arguments.length && void 0 !== i && i,
                        a = S(this._normalizeParts(e, t), 3),
                        r = a[0],
                        s = a[1],
                        o = a[2],
                        l = S(B._checkIfInRangeWithOverrideOption(o, this.settings), 2),
                        u = l[0],
                        c = l[1];
                    if (u && c) {
                        var h = B._truncateDecimalPlaces(o, this.settings, n, this.settings.decimalPlacesRawValue).replace(this.settings.decimalCharacter, ".");
                        if ("" === h || h === this.settings.negativeSignCharacter) {
                            var m;
                            switch (this.settings.emptyInputBehavior) {
                                case B.options.emptyInputBehavior.focus:
                                case B.options.emptyInputBehavior.press:
                                case B.options.emptyInputBehavior.always:
                                    m = "";
                                    break;
                                case B.options.emptyInputBehavior.min:
                                    m = this.settings.minimumValue;
                                    break;
                                case B.options.emptyInputBehavior.max:
                                    m = this.settings.maximumValue;
                                    break;
                                case B.options.emptyInputBehavior.zero:
                                    m = "0";
                                    break;
                                case B.options.emptyInputBehavior.null:
                                    m = null;
                                    break;
                                default:
                                    m = this.settings.emptyInputBehavior
                            }
                            this._setRawValue(m)
                        } else this._setRawValue(this._trimLeadingAndTrailingZeros(h));
                        var g = B._truncateDecimalPlaces(o, this.settings, n, this.settings.decimalPlacesShownOnFocus),
                            d = r.length;
                        return d > g.length && (d = g.length), 1 === d && "0" === r && this.settings.leadingZero === B.options.leadingZero.deny && (d = "" === s || "0" === r && "" !== s ? 1 : 0), this._setElementValue(g, !1), this._setCaretPosition(d), !0
                    }
                    return this._triggerRangeEvents(u, c), !1
                }
            }, {
                key: "_getSignPosition",
                value: function() {
                    var e;
                    if (this.settings.currencySymbol) {
                        var t = this.settings.currencySymbol.length,
                            i = M.getElementValue(this.domElement);
                        if (this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix) e = this.settings.negativeSignCharacter && i && i.charAt(0) === this.settings.negativeSignCharacter ? [1, t + 1] : [0, t];
                        else {
                            var n = i.length;
                            e = [n - t, n]
                        }
                    } else e = [1e3, -1];
                    return e
                }
            }, {
                key: "_expandSelectionOnSign",
                value: function() {
                    var e = S(this._getSignPosition(), 2),
                        t = e[0],
                        i = e[1],
                        n = this.selection;
                    n.start < i && n.end > t && ((n.start < t || n.end > i) && M.getElementValue(this.domElement).substring(Math.max(n.start, t), Math.min(n.end, i)).match(/^\s*$/) ? n.start < t ? this._setSelection(n.start, t) : this._setSelection(i, n.end) : this._setSelection(Math.min(n.start, t), Math.max(n.end, i)))
                }
            }, {
                key: "_checkPaste",
                value: function() {
                    if (!this.formatted && !M.isUndefined(this.valuePartsBeforePaste)) {
                        var e = this.valuePartsBeforePaste,
                            t = S(this._getLeftAndRightPartAroundTheSelection(), 2),
                            i = t[0],
                            n = t[1];
                        delete this.valuePartsBeforePaste;
                        var a = i.substr(0, e[0].length) + B._stripAllNonNumberCharactersExceptCustomDecimalChar(i.substr(e[0].length), this.settings, !0, this.isFocused);
                        this._setValueParts(a, n, !0) || (this._setElementValue(e.join(""), !1), this._setCaretPosition(e[0].length))
                    }
                }
            }, {
                key: "_processNonPrintableKeysAndShortcuts",
                value: function(e) {
                    if ((e.ctrlKey || e.metaKey) && "keyup" === e.type && !M.isUndefined(this.valuePartsBeforePaste) || e.shiftKey && this.eventKey === d.keyName.Insert) return this._checkPaste(), !1;
                    if (this.constructor._shouldSkipEventKey(this.eventKey)) return !0;
                    if ((e.ctrlKey || e.metaKey) && this.eventKey === d.keyName.a) return this.settings.selectNumberOnly && (e.preventDefault(), this.selectNumber()), !0;
                    if ((e.ctrlKey || e.metaKey) && (this.eventKey === d.keyName.c || this.eventKey === d.keyName.v || this.eventKey === d.keyName.x)) return "keydown" === e.type && this._expandSelectionOnSign(), this.eventKey !== d.keyName.v && this.eventKey !== d.keyName.Insert || ("keydown" === e.type || "keypress" === e.type ? M.isUndefined(this.valuePartsBeforePaste) && (this.valuePartsBeforePaste = this._getLeftAndRightPartAroundTheSelection()) : this._checkPaste()), "keydown" === e.type || "keypress" === e.type || this.eventKey === d.keyName.c;
                    if (e.ctrlKey || e.metaKey) return !(this.eventKey === d.keyName.Z || this.eventKey === d.keyName.z);
                    if (this.eventKey !== d.keyName.LeftArrow && this.eventKey !== d.keyName.RightArrow) return M.isInArray(this.eventKey, d.keyName._directionKeys);
                    if ("keydown" === e.type && !e.shiftKey) {
                        var t = M.getElementValue(this.domElement);
                        this.eventKey !== d.keyName.LeftArrow || t.charAt(this.selection.start - 2) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start - 2) !== this.settings.decimalCharacter ? this.eventKey !== d.keyName.RightArrow || t.charAt(this.selection.start + 1) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start + 1) !== this.settings.decimalCharacter || this._setCaretPosition(this.selection.start + 1) : this._setCaretPosition(this.selection.start - 1)
                    }
                    return !0
                }
            }, {
                key: "_processCharacterDeletionIfTrailingNegativeSign",
                value: function(e) {
                    var t = S(e, 2),
                        i = t[0],
                        n = t[1],
                        a = M.getElementValue(this.domElement),
                        r = M.isNegative(a, this.settings.negativeSignCharacter);
                    if (this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.suffix && (this.eventKey === d.keyName.Backspace ? (this.caretFix = this.selection.start >= a.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText, "-" === a.charAt(this.selection.start - 1) ? i = i.substring(1) : this.selection.start <= a.length - this.settings.suffixText.length && (i = i.substring(0, i.length - 1))) : (this.caretFix = this.selection.start >= a.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText, this.selection.start >= a.indexOf(this.settings.currencySymbol) + this.settings.currencySymbol.length && (n = n.substring(1, n.length)), M.isNegative(i, this.settings.negativeSignCharacter) && "-" === a.charAt(this.selection.start) && (i = i.substring(1)))), this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix) switch (this.settings.negativePositiveSignPlacement) {
                        case B.options.negativePositiveSignPlacement.left:
                            this.caretFix = this.selection.start >= a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === d.keyName.Backspace ? this.selection.start === a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length && r ? i = i.substring(1) : "-" !== i && (this.selection.start <= a.indexOf(this.settings.negativeSignCharacter) || !r) && (i = i.substring(0, i.length - 1)) : ("-" === i[0] && (n = n.substring(1)), this.selection.start === a.indexOf(this.settings.negativeSignCharacter) && r && (i = i.substring(1)));
                            break;
                        case B.options.negativePositiveSignPlacement.right:
                            this.caretFix = this.selection.start >= a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === d.keyName.Backspace ? this.selection.start === a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length ? i = i.substring(1) : ("-" !== i && this.selection.start <= a.indexOf(this.settings.negativeSignCharacter) - this.settings.currencySymbol.length || "" !== i && !r) && (i = i.substring(0, i.length - 1)) : (this.caretFix = this.selection.start >= a.indexOf(this.settings.currencySymbol) && "" !== this.settings.currencySymbol, this.selection.start === a.indexOf(this.settings.negativeSignCharacter) && (i = i.substring(1)), n = n.substring(1))
                    }
                    return [i, n]
                }
            }, {
                key: "_processCharacterDeletion",
                value: function() {
                    var e, t;
                    if (this.selection.length) {
                        this._expandSelectionOnSign();
                        var i = S(this._getUnformattedLeftAndRightPartAroundTheSelection(), 2);
                        e = i[0], t = i[1]
                    } else {
                        var n = S(this._getUnformattedLeftAndRightPartAroundTheSelection(), 2);
                        if (e = n[0], t = n[1], "" === e && "" === t && (this.throwInput = !1), this.isTrailingNegative && M.isNegative(M.getElementValue(this.domElement), this.settings.negativeSignCharacter)) {
                            var a = S(this._processCharacterDeletionIfTrailingNegativeSign([e, t]), 2);
                            e = a[0], t = a[1]
                        } else this.eventKey === d.keyName.Backspace ? e = e.substring(0, e.length - 1) : t = t.substring(1, t.length)
                    }
                    return !!this.constructor._isWithinRangeWithOverrideOption("".concat(e).concat(t), this.settings) && (this._setValueParts(e, t), !0)
                }
            }, {
                key: "_isDecimalCharacterInsertionAllowed",
                value: function() {
                    return String(this.settings.decimalPlacesShownOnFocus) !== String(B.options.decimalPlacesShownOnFocus.none) && String(this.settings.decimalPlaces) !== String(B.options.decimalPlaces.none)
                }
            }, {
                key: "_processCharacterInsertion",
                value: function() {
                    var e = S(this._getUnformattedLeftAndRightPartAroundTheSelection(), 2),
                        t = e[0],
                        i = e[1];
                    if (this.eventKey !== d.keyName.AndroidDefault && (this.throwInput = !0), this.eventKey === this.settings.decimalCharacter || this.settings.decimalCharacterAlternative && this.eventKey === this.settings.decimalCharacterAlternative) {
                        if (!this._isDecimalCharacterInsertionAllowed() || !this.settings.decimalCharacter) return !1;
                        if (this.settings.alwaysAllowDecimalCharacter) t = t.replace(this.settings.decimalCharacter, ""), i = i.replace(this.settings.decimalCharacter, "");
                        else {
                            if (M.contains(t, this.settings.decimalCharacter)) return !0;
                            if (0 < i.indexOf(this.settings.decimalCharacter)) return !0;
                            0 === i.indexOf(this.settings.decimalCharacter) && (i = i.substr(1))
                        }
                        return this.settings.negativeSignCharacter && M.contains(i, this.settings.negativeSignCharacter) && (t = "".concat(this.settings.negativeSignCharacter).concat(t), i = i.replace(this.settings.negativeSignCharacter, "")), this._setValueParts(t + this.settings.decimalCharacter, i), !0
                    }
                    if (("-" === this.eventKey || "+" === this.eventKey) && this.settings.isNegativeSignAllowed) return "" === t && M.contains(i, "-") ? i = i.replace("-", "") : t = M.isNegativeStrict(t, "-") ? t.replace("-", "") : "".concat(this.settings.negativeSignCharacter).concat(t), this._setValueParts(t, i), !0;
                    var n = Number(this.eventKey);
                    return 0 <= n && n <= 9 ? (this.settings.isNegativeSignAllowed && "" === t && M.contains(i, "-") && (t = "-", i = i.substring(1, i.length)), this.settings.maximumValue <= 0 && this.settings.minimumValue < this.settings.maximumValue && !M.contains(M.getElementValue(this.domElement), this.settings.negativeSignCharacter) && "0" !== this.eventKey && (t = "-".concat(t)), this._setValueParts("".concat(t).concat(this.eventKey), i), !0) : this.throwInput = !1
                }
            }, {
                key: "_formatValue",
                value: function(e) {
                    var t = M.getElementValue(this.domElement),
                        i = S(this._getUnformattedLeftAndRightPartAroundTheSelection(), 1)[0];
                    if (("" === this.settings.digitGroupSeparator || "" !== this.settings.digitGroupSeparator && !M.contains(t, this.settings.digitGroupSeparator)) && ("" === this.settings.currencySymbol || "" !== this.settings.currencySymbol && !M.contains(t, this.settings.currencySymbol))) {
                        var n = S(t.split(this.settings.decimalCharacter), 1)[0],
                            a = "";
                        M.isNegative(n, this.settings.negativeSignCharacter) && (a = this.settings.negativeSignCharacter, n = n.replace(this.settings.negativeSignCharacter, ""), i = i.replace("-", "")), "" === a && n.length > this.settings.mIntPos && "0" === i.charAt(0) && (i = i.slice(1)), a === this.settings.negativeSignCharacter && n.length > this.settings.mIntNeg && "0" === i.charAt(0) && (i = i.slice(1)), this.isTrailingNegative || (i = "".concat(a).concat(i))
                    }
                    var r = this.constructor._addGroupSeparators(t, this.settings, this.isFocused, this.rawValue),
                        s = r.length;
                    if (r) {
                        var o, l = i.split("");
                        if ((this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== B.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix) && l[0] === this.settings.negativeSignCharacter && !this.settings.isNegativeSignAllowed && (l.shift(), (this.eventKey === d.keyName.Backspace || this.eventKey === d.keyName.Delete) && this.caretFix && ((this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.left || this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.suffix) && (l.push(this.settings.negativeSignCharacter), this.caretFix = "keydown" === e.type), this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === B.options.negativePositiveSignPlacement.right))) {
                            var u = this.settings.currencySymbol.split(""),
                                c = ["\\", "^", "$", ".", "|", "?", "*", "+", "(", ")", "["],
                                h = [];
                            u.forEach(function(e, t) {
                                t = u[e], M.isInArray(t, c) ? h.push("\\" + t) : h.push(t)
                            }), this.eventKey === d.keyName.Backspace && "-" === this.settings.negativeSignCharacter && h.push("-"), l.push(h.join("")), this.caretFix = "keydown" === e.type
                        }
                        for (var m = 0; m < l.length; m++) l[m].match("\\d") || (l[m] = "\\" + l[m]);
                        o = this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix ? new RegExp("^.*?".concat(l.join(".*?"))) : new RegExp("^.*?".concat(this.settings.currencySymbol).concat(l.join(".*?")));
                        var g = r.match(o);
                        g ? (s = g[0].length, this.settings.showPositiveSign && (0 === s && g.input.charAt(0) === this.settings.positiveSignCharacter && (s = 1 === g.input.indexOf(this.settings.currencySymbol) ? this.settings.currencySymbol.length + 1 : 1), 0 === s && g.input.charAt(this.settings.currencySymbol.length) === this.settings.positiveSignCharacter && (s = this.settings.currencySymbol.length + 1)), (0 === s && r.charAt(0) !== this.settings.negativeSignCharacter || 1 === s && r.charAt(0) === this.settings.negativeSignCharacter) && this.settings.currencySymbol && this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.prefix && (s = this.settings.currencySymbol.length + (M.isNegativeStrict(r, this.settings.negativeSignCharacter) ? 1 : 0))) : (this.settings.currencySymbol && this.settings.currencySymbolPlacement === B.options.currencySymbolPlacement.suffix && (s -= this.settings.currencySymbol.length), this.settings.suffixText && (s -= this.settings.suffixText.length))
                    }
                    r !== t && (this._setElementValue(r, !1), this._setCaretPosition(s)), this.formatted = !0
                }
            }]), P(e, t), B
        }();

        function N(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        k.multiple = function(e) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                n = [];
            if (M.isObject(i) && (t = i, i = null), M.isString(e)) e = p(document.querySelectorAll(e));
            else if (M.isObject(e)) {
                Object.prototype.hasOwnProperty.call(e, "rootElement") || M.throwError("The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found.");
                var a = p(e.rootElement.querySelectorAll("input"));
                e = Object.prototype.hasOwnProperty.call(e, "exclude") ? (Array.isArray(e.exclude) || M.throwError("The 'exclude' array passed to the 'multiple' function is invalid."), M.filterOut(a, e.exclude)) : a
            } else M.isArray(e) || M.throwError("The given parameters to the 'multiple' function are invalid.");
            if (0 === e.length) {
                var r = !0;
                return !M.isNull(t) && M.isBoolean(t.showWarnings) && (r = t.showWarnings), M.warning("No valid DOM elements were given hence no AutoNumeric objects were instantiated.", r), []
            }
            var s = M.isArray(i) && 1 <= i.length,
                o = !1,
                l = !1;
            if (s) {
                var u = w(Number(i[0]));
                (o = "number" === u && !isNaN(Number(i[0]))) || "string" !== u && !isNaN(u) && "object" !== u || (l = !0)
            }
            var c, h = !1;
            if (M.isArray(t) && 1 <= t.length) {
                var m = w(t[0]);
                "string" !== m && "object" !== m || (h = !0)
            }
            c = l ? k.mergeOptions(i) : h ? k.mergeOptions(t) : t;
            var g, d = M.isNumber(i);
            return o && (g = i.length), e.forEach(function(e, t) {
                d ? n.push(new k(e, i, c)) : o && t <= g ? n.push(new k(e, i[t], c)) : n.push(new k(e, null, c))
            }), n
        }, Array.from || (Array.from = function(e) {
            return [].slice.call(e)
        }), "undefined" != typeof window && "function" != typeof window.CustomEvent && (N.prototype = window.Event.prototype, window.CustomEvent = N), k.events = {
            correctedValue: "autoNumeric:correctedValue",
            initialized: "autoNumeric:initialized",
            invalidFormula: "autoNumeric:invalidFormula",
            invalidValue: "autoNumeric:invalidValue",
            formatted: "autoNumeric:formatted",
            rawValueModified: "autoNumeric:rawValueModified",
            minRangeExceeded: "autoNumeric:minExceeded",
            maxRangeExceeded: "autoNumeric:maxExceeded",
            native: {
                input: "input",
                change: "change"
            },
            validFormula: "autoNumeric:validFormula"
        }, Object.freeze(k.events.native), Object.freeze(k.events), Object.defineProperty(k, "events", {
            configurable: !1,
            writable: !1
        }), k.options = {
            allowDecimalPadding: {
                always: !0,
                never: !1,
                floats: "floats"
            },
            alwaysAllowDecimalCharacter: {
                alwaysAllow: !0,
                doNotAllow: !1
            },
            caretPositionOnFocus: {
                start: "start",
                end: "end",
                decimalLeft: "decimalLeft",
                decimalRight: "decimalRight",
                doNoForceCaretPosition: null
            },
            createLocalList: {
                createList: !0,
                doNotCreateList: !1
            },
            currencySymbol: {
                none: "",
                currencySign: "¤",
                austral: "₳",
                australCentavo: "¢",
                baht: "฿",
                cedi: "₵",
                cent: "¢",
                colon: "₡",
                cruzeiro: "₢",
                dollar: "$",
                dong: "₫",
                drachma: "₯",
                dram: "​֏",
                european: "₠",
                euro: "€",
                florin: "ƒ",
                franc: "₣",
                guarani: "₲",
                hryvnia: "₴",
                kip: "₭",
                att: "ອັດ",
                lepton: "Λ.",
                lira: "₺",
                liraOld: "₤",
                lari: "₾",
                mark: "ℳ",
                mill: "₥",
                naira: "₦",
                peseta: "₧",
                peso: "₱",
                pfennig: "₰",
                pound: "£",
                real: "R$",
                riel: "៛",
                ruble: "₽",
                rupee: "₹",
                rupeeOld: "₨",
                shekel: "₪",
                shekelAlt: "ש״ח‎‎",
                taka: "৳",
                tenge: "₸",
                togrog: "₮",
                won: "₩",
                yen: "¥"
            },
            currencySymbolPlacement: {
                prefix: "p",
                suffix: "s"
            },
            decimalCharacter: {
                comma: ",",
                dot: ".",
                middleDot: "·",
                arabicDecimalSeparator: "٫",
                decimalSeparatorKeySymbol: "⎖"
            },
            decimalCharacterAlternative: {
                none: null,
                comma: ",",
                dot: "."
            },
            decimalPlaces: {
                none: 0,
                one: 1,
                two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6
            },
            decimalPlacesRawValue: {
                useDefault: null,
                none: 0,
                one: 1,
                two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6
            },
            decimalPlacesShownOnBlur: {
                useDefault: null,
                none: 0,
                one: 1,
                two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6
            },
            decimalPlacesShownOnFocus: {
                useDefault: null,
                none: 0,
                one: 1,
                two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6
            },
            defaultValueOverride: {
                doNotOverride: null
            },
            digitalGroupSpacing: {
                two: "2",
                twoScaled: "2s",
                three: "3",
                four: "4"
            },
            digitGroupSeparator: {
                comma: ",",
                dot: ".",
                normalSpace: " ",
                thinSpace: " ",
                narrowNoBreakSpace: " ",
                noBreakSpace: " ",
                noSeparator: "",
                apostrophe: "'",
                arabicThousandsSeparator: "٬",
                dotAbove: "˙",
                privateUseTwo: "’"
            },
            divisorWhenUnfocused: {
                none: null,
                percentage: 100,
                permille: 1e3,
                basisPoint: 1e4
            },
            emptyInputBehavior: {
                focus: "focus",
                press: "press",
                always: "always",
                zero: "zero",
                min: "min",
                max: "max",
                null: "null"
            },
            eventBubbles: {
                bubbles: !0,
                doesNotBubble: !1
            },
            eventIsCancelable: {
                isCancelable: !0,
                isNotCancelable: !1
            },
            failOnUnknownOption: {
                fail: !0,
                ignore: !1
            },
            formatOnPageLoad: {
                format: !0,
                doNotFormat: !1
            },
            formulaMode: {
                enabled: !0,
                disabled: !1
            },
            historySize: {
                verySmall: 5,
                small: 10,
                medium: 20,
                large: 50,
                veryLarge: 100,
                insane: Number.MAX_SAFE_INTEGER
            },
            invalidClass: "an-invalid",
            isCancellable: {
                cancellable: !0,
                notCancellable: !1
            },
            leadingZero: {
                allow: "allow",
                deny: "deny",
                keep: "keep"
            },
            maximumValue: {
                tenTrillions: "10000000000000",
                oneBillion: "1000000000",
                zero: "0"
            },
            minimumValue: {
                tenTrillions: "-10000000000000",
                oneBillion: "-1000000000",
                zero: "0"
            },
            modifyValueOnWheel: {
                modifyValue: !0,
                doNothing: !1
            },
            negativeBracketsTypeOnBlur: {
                parentheses: "(,)",
                brackets: "[,]",
                chevrons: "<,>",
                curlyBraces: "{,}",
                angleBrackets: "〈,〉",
                japaneseQuotationMarks: "｢,｣",
                halfBrackets: "⸤,⸥",
                whiteSquareBrackets: "⟦,⟧",
                quotationMarks: "‹,›",
                guillemets: "«,»",
                none: null
            },
            negativePositiveSignPlacement: {
                prefix: "p",
                suffix: "s",
                left: "l",
                right: "r",
                none: null
            },
            negativeSignCharacter: {
                hyphen: "-",
                minus: "−",
                heavyMinus: "➖",
                fullWidthHyphen: "－",
                circledMinus: "⊖",
                squaredMinus: "⊟",
                triangleMinus: "⨺",
                plusMinus: "±",
                minusPlus: "∓",
                dotMinus: "∸",
                minusTilde: "≂",
                not: "¬"
            },
            noEventListeners: {
                noEvents: !0,
                addEvents: !1
            },
            onInvalidPaste: {
                error: "error",
                ignore: "ignore",
                clamp: "clamp",
                truncate: "truncate",
                replace: "replace"
            },
            outputFormat: {
                string: "string",
                number: "number",
                dot: ".",
                negativeDot: "-.",
                comma: ",",
                negativeComma: "-,",
                dotNegative: ".-",
                commaNegative: ",-",
                none: null
            },
            overrideMinMaxLimits: {
                ceiling: "ceiling",
                floor: "floor",
                ignore: "ignore",
                invalid: "invalid",
                doNotOverride: null
            },
            positiveSignCharacter: {
                plus: "+",
                fullWidthPlus: "＋",
                heavyPlus: "➕",
                doublePlus: "⧺",
                triplePlus: "⧻",
                circledPlus: "⊕",
                squaredPlus: "⊞",
                trianglePlus: "⨹",
                plusMinus: "±",
                minusPlus: "∓",
                dotPlus: "∔",
                altHebrewPlus: "﬩",
                normalSpace: " ",
                thinSpace: " ",
                narrowNoBreakSpace: " ",
                noBreakSpace: " "
            },
            rawValueDivisor: {
                none: null,
                percentage: 100,
                permille: 1e3,
                basisPoint: 1e4
            },
            readOnly: {
                readOnly: !0,
                readWrite: !1
            },
            roundingMethod: {
                halfUpSymmetric: "S",
                halfUpAsymmetric: "A",
                halfDownSymmetric: "s",
                halfDownAsymmetric: "a",
                halfEvenBankersRounding: "B",
                upRoundAwayFromZero: "U",
                downRoundTowardZero: "D",
                toCeilingTowardPositiveInfinity: "C",
                toFloorTowardNegativeInfinity: "F",
                toNearest05: "N05",
                toNearest05Alt: "CHF",
                upToNext05: "U05",
                downToNext05: "D05"
            },
            saveValueToSessionStorage: {
                save: !0,
                doNotSave: !1
            },
            selectNumberOnly: {
                selectNumbersOnly: !0,
                selectAll: !1
            },
            selectOnFocus: {
                select: !0,
                doNotSelect: !1
            },
            serializeSpaces: {
                plus: "+",
                percent: "%20"
            },
            showOnlyNumbersOnFocus: {
                onlyNumbers: !0,
                showAll: !1
            },
            showPositiveSign: {
                show: !0,
                hide: !1
            },
            showWarnings: {
                show: !0,
                hide: !1
            },
            styleRules: {
                none: null,
                positiveNegative: {
                    positive: "autoNumeric-positive",
                    negative: "autoNumeric-negative"
                },
                range0To100With4Steps: {
                    ranges: [{
                        min: 0,
                        max: 25,
                        class: "autoNumeric-red"
                    }, {
                        min: 25,
                        max: 50,
                        class: "autoNumeric-orange"
                    }, {
                        min: 50,
                        max: 75,
                        class: "autoNumeric-yellow"
                    }, {
                        min: 75,
                        max: 100,
                        class: "autoNumeric-green"
                    }]
                },
                evenOdd: {
                    userDefined: [{
                        callback: function(e) {
                            return e % 2 == 0
                        },
                        classes: ["autoNumeric-even", "autoNumeric-odd"]
                    }]
                },
                rangeSmallAndZero: {
                    userDefined: [{
                        callback: function(e) {
                            return -1 <= e && e < 0 ? 0 : 0 === Number(e) ? 1 : 0 < e && e <= 1 ? 2 : null
                        },
                        classes: ["autoNumeric-small-negative", "autoNumeric-zero", "autoNumeric-small-positive"]
                    }]
                }
            },
            suffixText: {
                none: "",
                percentage: "%",
                permille: "‰",
                basisPoint: "‱"
            },
            symbolWhenUnfocused: {
                none: null,
                percentage: "%",
                permille: "‰",
                basisPoint: "‱"
            },
            unformatOnHover: {
                unformat: !0,
                doNotUnformat: !1
            },
            unformatOnSubmit: {
                unformat: !0,
                keepCurrentValue: !1
            },
            valuesToStrings: {
                none: null,
                zeroDash: {
                    0: "-"
                },
                oneAroundZero: {
                    "-1": "Min",
                    1: "Max"
                }
            },
            watchExternalChanges: {
                watch: !0,
                doNotWatch: !1
            },
            wheelOn: {
                focus: "focus",
                hover: "hover"
            },
            wheelStep: {
                progressive: "progressive"
            }
        }, O = k.options, Object.getOwnPropertyNames(O).forEach(function(e) {
            "valuesToStrings" === e ? Object.getOwnPropertyNames(O.valuesToStrings).forEach(function(e) {
                M.isIE11() || null === O.valuesToStrings[e] || Object.freeze(O.valuesToStrings[e])
            }) : "styleRules" !== e && (M.isIE11() || null === O[e] || Object.freeze(O[e]))
        }), Object.freeze(O), Object.defineProperty(k, "options", {
            configurable: !1,
            writable: !1
        }), k.defaultSettings = {
            allowDecimalPadding: k.options.allowDecimalPadding.always,
            alwaysAllowDecimalCharacter: k.options.alwaysAllowDecimalCharacter.doNotAllow,
            caretPositionOnFocus: k.options.caretPositionOnFocus.doNoForceCaretPosition,
            createLocalList: k.options.createLocalList.createList,
            currencySymbol: k.options.currencySymbol.none,
            currencySymbolPlacement: k.options.currencySymbolPlacement.prefix,
            decimalCharacter: k.options.decimalCharacter.dot,
            decimalCharacterAlternative: k.options.decimalCharacterAlternative.none,
            decimalPlaces: k.options.decimalPlaces.two,
            decimalPlacesRawValue: k.options.decimalPlacesRawValue.useDefault,
            decimalPlacesShownOnBlur: k.options.decimalPlacesShownOnBlur.useDefault,
            decimalPlacesShownOnFocus: k.options.decimalPlacesShownOnFocus.useDefault,
            defaultValueOverride: k.options.defaultValueOverride.doNotOverride,
            digitalGroupSpacing: k.options.digitalGroupSpacing.three,
            digitGroupSeparator: k.options.digitGroupSeparator.comma,
            divisorWhenUnfocused: k.options.divisorWhenUnfocused.none,
            emptyInputBehavior: k.options.emptyInputBehavior.focus,
            eventBubbles: k.options.eventBubbles.bubbles,
            eventIsCancelable: k.options.eventIsCancelable.isCancelable,
            failOnUnknownOption: k.options.failOnUnknownOption.ignore,
            formatOnPageLoad: k.options.formatOnPageLoad.format,
            formulaMode: k.options.formulaMode.disabled,
            historySize: k.options.historySize.medium,
            invalidClass: k.options.invalidClass,
            isCancellable: k.options.isCancellable.cancellable,
            leadingZero: k.options.leadingZero.deny,
            maximumValue: k.options.maximumValue.tenTrillions,
            minimumValue: k.options.minimumValue.tenTrillions,
            modifyValueOnWheel: k.options.modifyValueOnWheel.modifyValue,
            negativeBracketsTypeOnBlur: k.options.negativeBracketsTypeOnBlur.none,
            negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.none,
            negativeSignCharacter: k.options.negativeSignCharacter.hyphen,
            noEventListeners: k.options.noEventListeners.addEvents,
            onInvalidPaste: k.options.onInvalidPaste.error,
            outputFormat: k.options.outputFormat.none,
            overrideMinMaxLimits: k.options.overrideMinMaxLimits.doNotOverride,
            positiveSignCharacter: k.options.positiveSignCharacter.plus,
            rawValueDivisor: k.options.rawValueDivisor.none,
            readOnly: k.options.readOnly.readWrite,
            roundingMethod: k.options.roundingMethod.halfUpSymmetric,
            saveValueToSessionStorage: k.options.saveValueToSessionStorage.doNotSave,
            selectNumberOnly: k.options.selectNumberOnly.selectNumbersOnly,
            selectOnFocus: k.options.selectOnFocus.select,
            serializeSpaces: k.options.serializeSpaces.plus,
            showOnlyNumbersOnFocus: k.options.showOnlyNumbersOnFocus.showAll,
            showPositiveSign: k.options.showPositiveSign.hide,
            showWarnings: k.options.showWarnings.show,
            styleRules: k.options.styleRules.none,
            suffixText: k.options.suffixText.none,
            symbolWhenUnfocused: k.options.symbolWhenUnfocused.none,
            unformatOnHover: k.options.unformatOnHover.unformat,
            unformatOnSubmit: k.options.unformatOnSubmit.keepCurrentValue,
            valuesToStrings: k.options.valuesToStrings.none,
            watchExternalChanges: k.options.watchExternalChanges.doNotWatch,
            wheelOn: k.options.wheelOn.focus,
            wheelStep: k.options.wheelStep.progressive
        }, Object.freeze(k.defaultSettings), Object.defineProperty(k, "defaultSettings", {
            configurable: !1,
            writable: !1
        });
        var E = {
                digitGroupSeparator: k.options.digitGroupSeparator.dot,
                decimalCharacter: k.options.decimalCharacter.comma,
                decimalCharacterAlternative: k.options.decimalCharacterAlternative.dot,
                currencySymbol: " €",
                currencySymbolPlacement: k.options.currencySymbolPlacement.suffix,
                negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.prefix
            },
            _ = {
                digitGroupSeparator: k.options.digitGroupSeparator.comma,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: k.options.currencySymbol.dollar,
                currencySymbolPlacement: k.options.currencySymbolPlacement.prefix,
                negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.right
            },
            C = {
                digitGroupSeparator: k.options.digitGroupSeparator.comma,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: k.options.currencySymbol.yen,
                currencySymbolPlacement: k.options.currencySymbolPlacement.prefix,
                negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.right
            };
        M.cloneObject(E).formulaMode = k.options.formulaMode.enabled;
        var F = M.cloneObject(E);
        F.minimumValue = 0;
        var x = M.cloneObject(E);
        x.maximumValue = 0, x.negativePositiveSignPlacement = k.options.negativePositiveSignPlacement.prefix;
        var V = M.cloneObject(E);
        V.digitGroupSeparator = k.options.digitGroupSeparator.normalSpace;
        var T = M.cloneObject(V);
        T.minimumValue = 0;
        var A = M.cloneObject(V);
        A.maximumValue = 0, A.negativePositiveSignPlacement = k.options.negativePositiveSignPlacement.prefix;
        var L = M.cloneObject(E);
        L.currencySymbol = k.options.currencySymbol.none, L.suffixText = " ".concat(k.options.suffixText.percentage), L.wheelStep = 1e-4, L.rawValueDivisor = k.options.rawValueDivisor.percentage;
        var I = M.cloneObject(L);
        I.minimumValue = 0;
        var B = M.cloneObject(L);
        B.maximumValue = 0, B.negativePositiveSignPlacement = k.options.negativePositiveSignPlacement.prefix;
        var D = M.cloneObject(L);
        D.decimalPlaces = 3;
        var R = M.cloneObject(I);
        R.decimalPlaces = 3;
        var U = M.cloneObject(B);
        U.decimalPlaces = 3, M.cloneObject(_).formulaMode = k.options.formulaMode.enabled;
        var j = M.cloneObject(_);
        j.minimumValue = 0;
        var z = M.cloneObject(_);
        z.maximumValue = 0, z.negativePositiveSignPlacement = k.options.negativePositiveSignPlacement.prefix;
        var K = M.cloneObject(z);
        K.negativeBracketsTypeOnBlur = k.options.negativeBracketsTypeOnBlur.parentheses;
        var G = M.cloneObject(_);
        G.currencySymbol = k.options.currencySymbol.none, G.suffixText = k.options.suffixText.percentage, G.wheelStep = 1e-4, G.rawValueDivisor = k.options.rawValueDivisor.percentage;
        var W = M.cloneObject(G);
        W.minimumValue = 0;
        var H = M.cloneObject(G);
        H.maximumValue = 0, H.negativePositiveSignPlacement = k.options.negativePositiveSignPlacement.prefix;
        var Z = M.cloneObject(G);
        Z.decimalPlaces = 3;
        var q = M.cloneObject(W);
        q.decimalPlaces = 3;
        var $ = M.cloneObject(H);
        $.decimalPlaces = 3;
        var J = M.cloneObject(E);
        J.currencySymbol = k.options.currencySymbol.lira, k.predefinedOptions = {
            euro: E,
            euroPos: F,
            euroNeg: x,
            euroSpace: V,
            euroSpacePos: T,
            euroSpaceNeg: A,
            percentageEU2dec: L,
            percentageEU2decPos: I,
            percentageEU2decNeg: B,
            percentageEU3dec: D,
            percentageEU3decPos: R,
            percentageEU3decNeg: U,
            dollar: _,
            dollarPos: j,
            dollarNeg: z,
            dollarNegBrackets: K,
            percentageUS2dec: G,
            percentageUS2decPos: W,
            percentageUS2decNeg: H,
            percentageUS3dec: Z,
            percentageUS3decPos: q,
            percentageUS3decNeg: $,
            French: E,
            Spanish: E,
            NorthAmerican: _,
            British: {
                digitGroupSeparator: k.options.digitGroupSeparator.comma,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: k.options.currencySymbol.pound,
                currencySymbolPlacement: k.options.currencySymbolPlacement.prefix,
                negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.right
            },
            Swiss: {
                digitGroupSeparator: k.options.digitGroupSeparator.apostrophe,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: " CHF",
                currencySymbolPlacement: k.options.currencySymbolPlacement.suffix,
                negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.prefix
            },
            Japanese: C,
            Chinese: C,
            Brazilian: {
                digitGroupSeparator: k.options.digitGroupSeparator.dot,
                decimalCharacter: k.options.decimalCharacter.comma,
                currencySymbol: k.options.currencySymbol.real,
                currencySymbolPlacement: k.options.currencySymbolPlacement.prefix,
                negativePositiveSignPlacement: k.options.negativePositiveSignPlacement.right
            },
            Turkish: J,
            dotDecimalCharCommaSeparator: {
                digitGroupSeparator: k.options.digitGroupSeparator.comma,
                decimalCharacter: k.options.decimalCharacter.dot
            },
            commaDecimalCharDotSeparator: {
                digitGroupSeparator: k.options.digitGroupSeparator.dot,
                decimalCharacter: k.options.decimalCharacter.comma,
                decimalCharacterAlternative: k.options.decimalCharacterAlternative.dot
            },
            integer: {
                decimalPlaces: 0
            },
            integerPos: {
                minimumValue: k.options.minimumValue.zero,
                decimalPlaces: 0
            },
            integerNeg: {
                maximumValue: k.options.maximumValue.zero,
                decimalPlaces: 0
            },
            float: {
                allowDecimalPadding: k.options.allowDecimalPadding.never
            },
            floatPos: {
                allowDecimalPadding: k.options.allowDecimalPadding.never,
                minimumValue: k.options.minimumValue.zero,
                maximumValue: k.options.maximumValue.tenTrillions
            },
            floatNeg: {
                allowDecimalPadding: k.options.allowDecimalPadding.never,
                minimumValue: k.options.minimumValue.tenTrillions,
                maximumValue: k.options.maximumValue.zero
            },
            numeric: {
                digitGroupSeparator: k.options.digitGroupSeparator.noSeparator,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: k.options.currencySymbol.none
            },
            numericPos: {
                digitGroupSeparator: k.options.digitGroupSeparator.noSeparator,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: k.options.currencySymbol.none,
                minimumValue: k.options.minimumValue.zero,
                maximumValue: k.options.maximumValue.tenTrillions
            },
            numericNeg: {
                digitGroupSeparator: k.options.digitGroupSeparator.noSeparator,
                decimalCharacter: k.options.decimalCharacter.dot,
                currencySymbol: k.options.currencySymbol.none,
                minimumValue: k.options.minimumValue.tenTrillions,
                maximumValue: k.options.maximumValue.zero
            }
        }, Object.getOwnPropertyNames(k.predefinedOptions).forEach(function(e) {
            Object.freeze(k.predefinedOptions[e])
        }), Object.freeze(k.predefinedOptions), Object.defineProperty(k, "predefinedOptions", {
            configurable: !1,
            writable: !1
        }), t.default = k
    }], a.c = n, a.d = function(e, t, i) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) a.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 0).default;

    function a(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }
    var i, n
});
//# sourceMappingURL=autoNumeric.min.js.map