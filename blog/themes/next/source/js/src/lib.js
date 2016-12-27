
/*!
 * CssUserAgent (cssua.js) v2.1.28
 * http://cssuseragent.org
 *
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */
var cssua = function(t, e, i) {
		var n = /\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,
			r = /([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,
			s = /\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,
			o = /\bsilk-accelerated=true\b/,
			a = /\bfluidapp\b/,
			l = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,
			c = /(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
			u = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,
			h = {
				parse: function(t, e) {
					var i = {};
					if (e && (i.standalone = e), t = ("" + t).toLowerCase(), !t) return i;
					for (var h, d, p = t.split(/[()]/), f = 0, m = p.length; m > f; f++) if (f % 2) {
						var g = p[f].split(";");
						for (h = 0, d = g.length; d > h; h++) if (n.exec(g[h])) {
							var _ = RegExp.$1.split(" ").join("_"),
								v = RegExp.$2;
							(!i[_] || parseFloat(i[_]) < parseFloat(v)) && (i[_] = v)
						}
					} else if (g = p[f].match(r)) for (h = 0, d = g.length; d > h; h++) _ = g[h].split(/[\/\s]+/), _.length && "mozilla" !== _[0] && (i[_[0].split(" ").join("_")] = _.slice(1).join("-"));
					return c.exec(t) ? (i.mobile = RegExp.$1, s.exec(t) && (delete i[i.mobile], i.blackberry = i.version || RegExp.$3 || RegExp.$2 || RegExp.$1, RegExp.$1 ? i.mobile = "blackberry" : "0.0.1" === i.version && (i.blackberry = "7.1.0.0"))) : l.exec(t) ? i.desktop = RegExp.$1 : u.exec(t) && (i.game = RegExp.$1, h = i.game.split(" ").join("_"), i.version && !i[h] && (i[h] = i.version)), i.intel_mac_os_x ? (i.mac_os_x = i.intel_mac_os_x.split("_").join("."), delete i.intel_mac_os_x) : i.cpu_iphone_os ? (i.ios = i.cpu_iphone_os.split("_").join("."), delete i.cpu_iphone_os) : i.cpu_os ? (i.ios = i.cpu_os.split("_").join("."), delete i.cpu_os) : "iphone" !== i.mobile || i.ios || (i.ios = "1"), i.opera && i.version ? (i.opera = i.version, delete i.blackberry) : o.exec(t) ? i.silk_accelerated = !0 : a.exec(t) && (i.fluidapp = i.version), i.applewebkit ? (i.webkit = i.applewebkit, delete i.applewebkit, i.opr && (i.opera = i.opr, delete i.opr, delete i.chrome), i.safari && (i.chrome || i.crios || i.opera || i.silk || i.fluidapp || i.phantomjs || i.mobile && !i.ios ? delete i.safari : i.safari = i.version && !i.rim_tablet_os ? i.version : {
						419: "2.0.4",
						417: "2.0.3",
						416: "2.0.2",
						412: "2.0",
						312: "1.3",
						125: "1.2",
						85: "1.0"
					}[parseInt(i.safari, 10)] || i.safari)) : i.msie || i.trident ? (i.opera || (i.ie = i.msie || i.rv), delete i.msie, i.windows_phone_os ? (i.windows_phone = i.windows_phone_os, delete i.windows_phone_os) : ("wpdesktop" === i.mobile || "xblwp7" === i.mobile || "zunewp7" === i.mobile) && (i.mobile = "windows desktop", i.windows_phone = 9 > +i.ie ? "7.0" : 10 > +i.ie ? "7.5" : "8.0", delete i.windows_nt)) : (i.gecko || i.firefox) && (i.gecko = i.rv), i.rv && delete i.rv, i.version && delete i.version, i
				},
				format: function(t) {
					var e, i = "";
					for (e in t) if (e && t.hasOwnProperty(e)) {
						var n = e,
							r = t[e],
							n = n.split(".").join("-"),
							s = " ua-" + n;
						if ("string" == typeof r) {
							for (var r = r.split(" ").join("_").split(".").join("-"), o = r.indexOf("-"); o > 0;) s += " ua-" + n + "-" + r.substring(0, o), o = r.indexOf("-", o + 1);
							s += " ua-" + n + "-" + r
						}
						i += s
					}
					return i
				},
				encode: function(t) {
					var e, i = "";
					for (e in t) e && t.hasOwnProperty(e) && (i && (i += "&"), i += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
					return i
				}
			};
		return h.userAgent = h.ua = h.parse(e, i), e = h.format(h.ua) + " js", t.className = t.className ? t.className.replace(/\bno-js\b/g, "") + e : e.substr(1), h
	}(document.documentElement, navigator.userAgent, navigator.standalone);



/*!
 * @license EaselJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
this.createjs = this.createjs || {}, createjs.extend = function(t, e) {
	"use strict";

	function i() {
		this.constructor = t
	}
	return i.prototype = e.prototype, t.prototype = new i
}, this.createjs = this.createjs || {}, createjs.promote = function(t, e) {
	"use strict";
	var i = t.prototype,
		n = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
	if (n) {
		i[(e += "_") + "constructor"] = n.constructor;
		for (var r in n) i.hasOwnProperty(r) && "function" == typeof n[r] && (i[e + r] = n[r])
	}
	return t
}, this.createjs = this.createjs || {}, createjs.indexOf = function(t, e) {
	"use strict";
	for (var i = 0, n = t.length; n > i; i++) if (e === t[i]) return i;
	return -1
}, this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i) {
		this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !! e, this.cancelable = !! i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
	}
	var e = t.prototype;
	e.preventDefault = function() {
		this.defaultPrevented = this.cancelable && !0
	}, e.stopPropagation = function() {
		this.propagationStopped = !0
	}, e.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = !0
	}, e.remove = function() {
		this.removed = !0
	}, e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable)
	}, e.set = function(t) {
		for (var e in t) this[e] = t[e];
		return this
	}, e.toString = function() {
		return "[Event (type=" + this.type + ")]"
	}, createjs.Event = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		this._listeners = null, this._captureListeners = null
	}
	var e = t.prototype;
	t.initialize = function(t) {
		t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
	}, e.addEventListener = function(t, e, i) {
		var n;
		n = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
		var r = n[t];
		return r && this.removeEventListener(t, e, i), r = n[t], r ? r.push(e) : n[t] = [e], e
	}, e.on = function(t, e, i, n, r, s) {
		return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function(t) {
			e.call(i, t, r), n && t.remove()
		}, s)
	}, e.removeEventListener = function(t, e, i) {
		var n = i ? this._captureListeners : this._listeners;
		if (n) {
			var r = n[t];
			if (r) for (var s = 0, o = r.length; o > s; s++) if (r[s] == e) {
				1 == o ? delete n[t] : r.splice(s, 1);
				break
			}
		}
	}, e.off = e.removeEventListener, e.removeAllEventListeners = function(t) {
		t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
	}, e.dispatchEvent = function(t, e, i) {
		if ("string" == typeof t) {
			var n = this._listeners;
			if (!(e || n && n[t])) return !0;
			t = new createjs.Event(t, e, i)
		} else t.target && t.clone && (t = t.clone());
		try {
			t.target = this
		} catch (r) {}
		if (t.bubbles && this.parent) {
			for (var s = this, o = [s]; s.parent;) o.push(s = s.parent);
			var a, l = o.length;
			for (a = l - 1; a >= 0 && !t.propagationStopped; a--) o[a]._dispatchEvent(t, 1 + (0 == a));
			for (a = 1; l > a && !t.propagationStopped; a++) o[a]._dispatchEvent(t, 3)
		} else this._dispatchEvent(t, 2);
		return !t.defaultPrevented
	}, e.hasEventListener = function(t) {
		var e = this._listeners,
			i = this._captureListeners;
		return !!(e && e[t] || i && i[t])
	}, e.willTrigger = function(t) {
		for (var e = this; e;) {
			if (e.hasEventListener(t)) return !0;
			e = e.parent
		}
		return !1
	}, e.toString = function() {
		return "[EventDispatcher]"
	}, e._dispatchEvent = function(t, e) {
		var i, n = 1 == e ? this._captureListeners : this._listeners;
		if (t && n) {
			var r = n[t.type];
			if (!r || !(i = r.length)) return;
			try {
				t.currentTarget = this
			} catch (s) {}
			try {
				t.eventPhase = e
			} catch (s) {}
			t.removed = !1, r = r.slice();
			for (var o = 0; i > o && !t.immediatePropagationStopped; o++) {
				var a = r[o];
				a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
			}
		}
	}, createjs.EventDispatcher = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		throw "Ticker cannot be instantiated."
	}
	t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null, t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function() {
		return !t._inited && t.init(), t._addEventListener.apply(t, arguments)
	}, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t.setInterval = function(e) {
		t._interval = e, t._inited && t._setupTick()
	}, t.getInterval = function() {
		return t._interval
	}, t.setFPS = function(e) {
		t.setInterval(1e3 / e)
	}, t.getFPS = function() {
		return 1e3 / t._interval
	};
	try {
		Object.defineProperties(t, {
			interval: {
				get: t.getInterval,
				set: t.setInterval
			},
			framerate: {
				get: t.getFPS,
				set: t.setFPS
			}
		})
	} catch (e) {
		console.log(e)
	}
	t.init = function() {
		t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.interval = t._interval)
	}, t.reset = function() {
		if (t._raf) {
			var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
			e && e(t._timerId)
		} else clearTimeout(t._timerId);
		t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t._startTime = t._lastTime = t._ticks = 0, t._inited = !1
	}, t.getMeasuredTickTime = function(e) {
		var i = 0,
			n = t._tickTimes;
		if (!n || n.length < 1) return -1;
		e = Math.min(n.length, e || 0 | t.getFPS());
		for (var r = 0; e > r; r++) i += n[r];
		return i / e
	}, t.getMeasuredFPS = function(e) {
		var i = t._times;
		return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | t.getFPS()), 1e3 / ((i[0] - i[e]) / e))
	}, t.setPaused = function(e) {
		t.paused = e
	}, t.getPaused = function() {
		return t.paused
	}, t.getTime = function(e) {
		return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
	}, t.getEventTime = function(e) {
		return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
	}, t.getTicks = function(e) {
		return t._ticks - (e ? t._pausedTicks : 0)
	}, t._handleSynch = function() {
		t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick()
	}, t._handleRAF = function() {
		t._timerId = null, t._setupTick(), t._tick()
	}, t._handleTimeout = function() {
		t._timerId = null, t._setupTick(), t._tick()
	}, t._setupTick = function() {
		if (null == t._timerId) {
			var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
			if (e == t.RAF_SYNCHED || e == t.RAF) {
				var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				if (i) return t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch), void(t._raf = !0)
			}
			t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
		}
	}, t._tick = function() {
		var e = t.paused,
			i = t._getTime(),
			n = i - t._lastTime;
		if (t._lastTime = i, t._ticks++, e && (t._pausedTicks++, t._pausedTime += n), t.hasEventListener("tick")) {
			var r = new createjs.Event("tick"),
				s = t.maxDelta;
			r.delta = s && n > s ? s : n, r.paused = e, r.time = i, r.runTime = i - t._pausedTime, t.dispatchEvent(r)
		}
		for (t._tickTimes.unshift(t._getTime() - i); t._tickTimes.length > 100;) t._tickTimes.pop();
		for (t._times.unshift(i); t._times.length > 100;) t._times.pop()
	};
	var i = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
	t._getTime = function() {
		return (i && i.call(performance) || (new Date).getTime()) - t._startTime
	}, createjs.Ticker = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		throw "UID cannot be instantiated"
	}
	t._nextID = 0, t.get = function() {
		return t._nextID++
	}, createjs.UID = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n, r, s, o, a, l, c, u) {
		this.Event_constructor(t, e, i), this.stageX = n, this.stageY = r, this.rawX = null == l ? n : l, this.rawY = null == c ? r : c, this.nativeEvent = s, this.pointerID = o, this.primary = !! a, this.relatedTarget = u
	}
	var e = createjs.extend(t, createjs.Event);
	e._get_localX = function() {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
	}, e._get_localY = function() {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
	}, e._get_isTouch = function() {
		return -1 !== this.pointerID
	};
	try {
		Object.defineProperties(e, {
			localX: {
				get: e._get_localX
			},
			localY: {
				get: e._get_localY
			},
			isTouch: {
				get: e._get_isTouch
			}
		})
	} catch (i) {}
	e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
	}, e.toString = function() {
		return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
	}, createjs.MouseEvent = createjs.promote(t, "Event")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n, r, s) {
		this.setValues(t, e, i, n, r, s)
	}
	var e = t.prototype;
	t.DEG_TO_RAD = Math.PI / 180, t.identity = null, e.setValues = function(t, e, i, n, r, s) {
		return this.a = null == t ? 1 : t, this.b = e || 0, this.c = i || 0, this.d = null == n ? 1 : n, this.tx = r || 0, this.ty = s || 0, this
	}, e.append = function(t, e, i, n, r, s) {
		var o = this.a,
			a = this.b,
			l = this.c,
			c = this.d;
		return (1 != t || 0 != e || 0 != i || 1 != n) && (this.a = o * t + l * e, this.b = a * t + c * e, this.c = o * i + l * n, this.d = a * i + c * n), this.tx = o * r + l * s + this.tx, this.ty = a * r + c * s + this.ty, this
	}, e.prepend = function(t, e, i, n, r, s) {
		var o = this.a,
			a = this.c,
			l = this.tx;
		return this.a = t * o + i * this.b, this.b = e * o + n * this.b, this.c = t * a + i * this.d, this.d = e * a + n * this.d, this.tx = t * l + i * this.ty + r, this.ty = e * l + n * this.ty + s, this
	}, e.appendMatrix = function(t) {
		return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty)
	}, e.prependMatrix = function(t) {
		return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty)
	}, e.appendTransform = function(e, i, n, r, s, o, a, l, c) {
		if (s % 360) var u = s * t.DEG_TO_RAD,
			h = Math.cos(u),
			d = Math.sin(u);
		else h = 1, d = 0;
		return o || a ? (o *= t.DEG_TO_RAD, a *= t.DEG_TO_RAD, this.append(Math.cos(a), Math.sin(a), -Math.sin(o), Math.cos(o), e, i), this.append(h * n, d * n, -d * r, h * r, 0, 0)) : this.append(h * n, d * n, -d * r, h * r, e, i), (l || c) && (this.tx -= l * this.a + c * this.c, this.ty -= l * this.b + c * this.d), this
	}, e.prependTransform = function(e, i, n, r, s, o, a, l, c) {
		if (s % 360) var u = s * t.DEG_TO_RAD,
			h = Math.cos(u),
			d = Math.sin(u);
		else h = 1, d = 0;
		return (l || c) && (this.tx -= l, this.ty -= c), o || a ? (o *= t.DEG_TO_RAD, a *= t.DEG_TO_RAD, this.prepend(h * n, d * n, -d * r, h * r, 0, 0), this.prepend(Math.cos(a), Math.sin(a), -Math.sin(o), Math.cos(o), e, i)) : this.prepend(h * n, d * n, -d * r, h * r, e, i), this
	}, e.rotate = function(e) {
		e *= t.DEG_TO_RAD;
		var i = Math.cos(e),
			n = Math.sin(e),
			r = this.a,
			s = this.b;
		return this.a = r * i + this.c * n, this.b = s * i + this.d * n, this.c = -r * n + this.c * i, this.d = -s * n + this.d * i, this
	}, e.skew = function(e, i) {
		return e *= t.DEG_TO_RAD, i *= t.DEG_TO_RAD, this.append(Math.cos(i), Math.sin(i), -Math.sin(e), Math.cos(e), 0, 0), this
	}, e.scale = function(t, e) {
		return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this
	}, e.translate = function(t, e) {
		return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this
	}, e.identity = function() {
		return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
	}, e.invert = function() {
		var t = this.a,
			e = this.b,
			i = this.c,
			n = this.d,
			r = this.tx,
			s = t * n - e * i;
		return this.a = n / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - n * r) / s, this.ty = -(t * this.ty - e * r) / s, this
	}, e.isIdentity = function() {
		return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
	}, e.equals = function(t) {
		return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d
	}, e.transformPoint = function(t, e, i) {
		return i = i || {}, i.x = t * this.a + e * this.c + this.tx, i.y = t * this.b + e * this.d + this.ty, i
	}, e.decompose = function(e) {
		null == e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
		var i = Math.atan2(-this.c, this.d),
			n = Math.atan2(this.b, this.a),
			r = Math.abs(1 - i / n);
		return 1e-5 > r ? (e.rotation = n / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = i / t.DEG_TO_RAD, e.skewY = n / t.DEG_TO_RAD), e
	}, e.copy = function(t) {
		return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty)
	}, e.clone = function() {
		return new t(this.a, this.b, this.c, this.d, this.tx, this.ty)
	}, e.toString = function() {
		return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
	}, t.identity = new t, createjs.Matrix2D = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n, r) {
		this.setValues(t, e, i, n, r)
	}
	var e = t.prototype;
	e.setValues = function(t, e, i, n, r) {
		return this.visible = null == t ? !0 : !! t, this.alpha = null == e ? 1 : e, this.shadow = i, this.compositeOperation = i, this.matrix = r || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
	}, e.append = function(t, e, i, n, r) {
		return this.alpha *= e, this.shadow = i || this.shadow, this.compositeOperation = n || this.compositeOperation, this.visible = this.visible && t, r && this.matrix.appendMatrix(r), this
	}, e.prepend = function(t, e, i, n, r) {
		return this.alpha *= e, this.shadow = this.shadow || i, this.compositeOperation = this.compositeOperation || n, this.visible = this.visible && t, r && this.matrix.prependMatrix(r), this
	}, e.identity = function() {
		return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
	}, e.clone = function() {
		return new t(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
	}, createjs.DisplayProps = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e) {
		this.setValues(t, e)
	}
	var e = t.prototype;
	e.setValues = function(t, e) {
		return this.x = t || 0, this.y = e || 0, this
	}, e.copy = function(t) {
		return this.x = t.x, this.y = t.y, this
	}, e.clone = function() {
		return new t(this.x, this.y)
	}, e.toString = function() {
		return "[Point (x=" + this.x + " y=" + this.y + ")]"
	}, createjs.Point = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n) {
		this.setValues(t, e, i, n)
	}
	var e = t.prototype;
	e.setValues = function(t, e, i, n) {
		return this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0, this
	}, e.extend = function(t, e, i, n) {
		return i = i || 0, n = n || 0, t + i > this.x + this.width && (this.width = t + i - this.x), e + n > this.y + this.height && (this.height = e + n - this.y), t < this.x && (this.width += this.x - t, this.x = t), e < this.y && (this.height += this.y - e, this.y = e), this
	}, e.pad = function(t, e, i, n) {
		return this.x -= e, this.y -= t, this.width += e + n, this.height += t + i, this
	}, e.copy = function(t) {
		return this.setValues(t.x, t.y, t.width, t.height)
	}, e.contains = function(t, e, i, n) {
		return i = i || 0, n = n || 0, t >= this.x && t + i <= this.x + this.width && e >= this.y && e + n <= this.y + this.height
	}, e.union = function(t) {
		return this.clone().extend(t.x, t.y, t.width, t.height)
	}, e.intersection = function(e) {
		var i = e.x,
			n = e.y,
			r = i + e.width,
			s = n + e.height;
		return this.x > i && (i = this.x), this.y > n && (n = this.y), this.x + this.width < r && (r = this.x + this.width), this.y + this.height < s && (s = this.y + this.height), i >= r || n >= s ? null : new t(i, n, r - i, s - n)
	}, e.intersects = function(t) {
		return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height
	}, e.isEmpty = function() {
		return this.width <= 0 || this.height <= 0
	}, e.clone = function() {
		return new t(this.x, this.y, this.width, this.height)
	}, e.toString = function() {
		return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
	}, createjs.Rectangle = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n, r, s, o) {
		t.addEventListener && (this.target = t, this.overLabel = null == i ? "over" : i, this.outLabel = null == e ? "out" : e, this.downLabel = null == n ? "down" : n, this.play = r, this._isPressed = !1, this._isOver = !1, this._enabled = !1, t.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), s && (o && (s.actionsEnabled = !1, s.gotoAndStop && s.gotoAndStop(o)), t.hitArea = s))
	}
	var e = t.prototype;
	e.setEnabled = function(t) {
		if (t != this._enabled) {
			var e = this.target;
			this._enabled = t, t ? (e.cursor = "pointer", e.addEventListener("rollover", this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e._reset = this._reset)) : (e.cursor = null, e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this), e.__reset && (e._reset = e.__reset, delete e.__reset))
		}
	}, e.getEnabled = function() {
		return this._enabled
	};
	try {
		Object.defineProperties(e, {
			enabled: {
				get: e.getEnabled,
				set: e.setEnabled
			}
		})
	} catch (i) {}
	e.toString = function() {
		return "[ButtonHelper]"
	}, e.handleEvent = function(t) {
		var e, i = this.target,
			n = t.type;
		"mousedown" == n ? (this._isPressed = !0, e = this.downLabel) : "pressup" == n ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" == n ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? i.gotoAndPlay && i.gotoAndPlay(e) : i.gotoAndStop && i.gotoAndStop(e)
	}, e._reset = function() {
		var t = this.paused;
		this.__reset(), this.paused = t
	}, createjs.ButtonHelper = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n) {
		this.color = t || "black", this.offsetX = e || 0, this.offsetY = i || 0, this.blur = n || 0
	}
	var e = t.prototype;
	t.identity = new t("transparent", 0, 0, 0), e.toString = function() {
		return "[Shadow]"
	}, e.clone = function() {
		return new t(this.color, this.offsetX, this.offsetY, this.blur)
	}, createjs.Shadow = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(t)
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	e.getAnimations = function() {
		return this._animations.slice()
	};
	try {
		Object.defineProperties(e, {
			animations: {
				get: e.getAnimations
			}
		})
	} catch (i) {}
	e.getNumFrames = function(t) {
		if (null == t) return this._frames ? this._frames.length : this._numFrames || 0;
		var e = this._data[t];
		return null == e ? 0 : e.frames.length
	}, e.getAnimation = function(t) {
		return this._data[t]
	}, e.getFrame = function(t) {
		var e;
		return this._frames && (e = this._frames[t]) ? e : null
	}, e.getFrameBounds = function(t, e) {
		var i = this.getFrame(t);
		return i ? (e || new createjs.Rectangle).setValues(-i.regX, -i.regY, i.rect.width, i.rect.height) : null
	}, e.toString = function() {
		return "[SpriteSheet]"
	}, e.clone = function() {
		throw "SpriteSheet cannot be cloned."
	}, e._parseData = function(t) {
		var e, i, n, r;
		if (null != t) {
			if (this.framerate = t.framerate || 0, t.images && (i = t.images.length) > 0) for (r = this._images = [], e = 0; i > e; e++) {
				var s = t.images[e];
				if ("string" == typeof s) {
					var o = s;
					s = document.createElement("img"), s.src = o
				}
				r.push(s), s.getContext || s.naturalWidth || (this._loadCount++, this.complete = !1, function(t) {
					s.onload = function() {
						t._handleImageLoad()
					}
				}(this))
			}
			if (null == t.frames);
			else if (t.frames instanceof Array) for (this._frames = [], r = t.frames, e = 0, i = r.length; i > e; e++) {
				var a = r[e];
				this._frames.push({
					image: this._images[a[4] ? a[4] : 0],
					rect: new createjs.Rectangle(a[0], a[1], a[2], a[3]),
					regX: a[5] || 0,
					regY: a[6] || 0
				})
			} else n = t.frames, this._frameWidth = n.width, this._frameHeight = n.height, this._regX = n.regX || 0, this._regY = n.regY || 0, this._spacing = n.spacing || 0, this._margin = n.margin || 0, this._numFrames = n.count, 0 == this._loadCount && this._calculateFrames();
			if (this._animations = [], null != (n = t.animations)) {
				this._data = {};
				var l;
				for (l in n) {
					var c = {
						name: l
					},
						u = n[l];
					if ("number" == typeof u) r = c.frames = [u];
					else if (u instanceof Array) if (1 == u.length) c.frames = [u[0]];
					else for (c.speed = u[3], c.next = u[2], r = c.frames = [], e = u[0]; e <= u[1]; e++) r.push(e);
					else {
						c.speed = u.speed, c.next = u.next;
						var h = u.frames;
						r = c.frames = "number" == typeof h ? [h] : h.slice(0)
					}(c.next === !0 || void 0 === c.next) && (c.next = l), (c.next === !1 || r.length < 2 && c.next == l) && (c.next = null), c.speed || (c.speed = 1), this._animations.push(l), this._data[l] = c
				}
			}
		}
	}, e._handleImageLoad = function() {
		0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
	}, e._calculateFrames = function() {
		if (!this._frames && 0 != this._frameWidth) {
			this._frames = [];
			var t = this._numFrames || 1e5,
				e = 0,
				i = this._frameWidth,
				n = this._frameHeight,
				r = this._spacing,
				s = this._margin;
			t: for (var o = 0, a = this._images; o < a.length; o++) for (var l = a[o], c = l.width, u = l.height, h = s; u - s - n >= h;) {
				for (var d = s; c - s - i >= d;) {
					if (e >= t) break t;
					e++, this._frames.push({
						image: l,
						rect: new createjs.Rectangle(d, h, i, n),
						regX: this._regX,
						regY: this._regY
					}), d += i + r
				}
				h += n + r
			}
			this._numFrames = e
		}
	}, createjs.SpriteSheet = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
	}
	var e = t.prototype,
		i = t;
	t.getRGB = function(t, e, i, n) {
		return null != t && null == i && (n = e, i = 255 & t, e = t >> 8 & 255, t = t >> 16 & 255), null == n ? "rgb(" + t + "," + e + "," + i + ")" : "rgba(" + t + "," + e + "," + i + "," + n + ")"
	}, t.getHSL = function(t, e, i, n) {
		return null == n ? "hsl(" + t % 360 + "," + e + "%," + i + "%)" : "hsla(" + t % 360 + "," + e + "%," + i + "%," + n + ")"
	}, t.BASE_64 = {
		A: 0,
		B: 1,
		C: 2,
		D: 3,
		E: 4,
		F: 5,
		G: 6,
		H: 7,
		I: 8,
		J: 9,
		K: 10,
		L: 11,
		M: 12,
		N: 13,
		O: 14,
		P: 15,
		Q: 16,
		R: 17,
		S: 18,
		T: 19,
		U: 20,
		V: 21,
		W: 22,
		X: 23,
		Y: 24,
		Z: 25,
		a: 26,
		b: 27,
		c: 28,
		d: 29,
		e: 30,
		f: 31,
		g: 32,
		h: 33,
		i: 34,
		j: 35,
		k: 36,
		l: 37,
		m: 38,
		n: 39,
		o: 40,
		p: 41,
		q: 42,
		r: 43,
		s: 44,
		t: 45,
		u: 46,
		v: 47,
		w: 48,
		x: 49,
		y: 50,
		z: 51,
		0: 52,
		1: 53,
		2: 54,
		3: 55,
		4: 56,
		5: 57,
		6: 58,
		7: 59,
		8: 60,
		9: 61,
		"+": 62,
		"/": 63
	}, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
	var n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	n.getContext && (t._ctx = n.getContext("2d"), n.width = n.height = 1), e.getInstructions = function() {
		return this._updateInstructions(), this._instructions
	};
	try {
		Object.defineProperties(e, {
			instructions: {
				get: e.getInstructions
			}
		})
	} catch (r) {}
	e.isEmpty = function() {
		return !(this._instructions.length || this._activeInstructions.length)
	}, e.draw = function(t, e) {
		this._updateInstructions();
		for (var i = this._instructions, n = this._storeIndex, r = i.length; r > n; n++) i[n].exec(t, e)
	}, e.drawAsPath = function(t) {
		this._updateInstructions();
		for (var e, i = this._instructions, n = this._storeIndex, r = i.length; r > n; n++)(e = i[n]).path !== !1 && e.exec(t)
	}, e.moveTo = function(t, e) {
		return this.append(new i.MoveTo(t, e), !0)
	}, e.lineTo = function(t, e) {
		return this.append(new i.LineTo(t, e))
	}, e.arcTo = function(t, e, n, r, s) {
		return this.append(new i.ArcTo(t, e, n, r, s))
	}, e.arc = function(t, e, n, r, s, o) {
		return this.append(new i.Arc(t, e, n, r, s, o))
	}, e.quadraticCurveTo = function(t, e, n, r) {
		return this.append(new i.QuadraticCurveTo(t, e, n, r))
	}, e.bezierCurveTo = function(t, e, n, r, s, o) {
		return this.append(new i.BezierCurveTo(t, e, n, r, s, o))
	}, e.rect = function(t, e, n, r) {
		return this.append(new i.Rect(t, e, n, r))
	}, e.closePath = function() {
		return this._activeInstructions.length ? this.append(new i.ClosePath) : this
	}, e.clear = function() {
		return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
	}, e.beginFill = function(t) {
		return this._setFill(t ? new i.Fill(t) : null)
	}, e.beginLinearGradientFill = function(t, e, n, r, s, o) {
		return this._setFill((new i.Fill).linearGradient(t, e, n, r, s, o))
	}, e.beginRadialGradientFill = function(t, e, n, r, s, o, a, l) {
		return this._setFill((new i.Fill).radialGradient(t, e, n, r, s, o, a, l))
	}, e.beginBitmapFill = function(t, e, n) {
		return this._setFill(new i.Fill(null, n).bitmap(t, e))
	}, e.endFill = function() {
		return this.beginFill()
	}, e.setStrokeStyle = function(t, e, n, r, s) {
		return this._updateInstructions(!0), this._strokeStyle = this.command = new i.StrokeStyle(t, e, n, r, s), this._stroke && (this._stroke.ignoreScale = s), this._strokeIgnoreScale = s, this
	}, e.setStrokeDash = function(t, e) {
		return this._updateInstructions(!0), this._strokeDash = this.command = new i.StrokeDash(t, e), this
	}, e.beginStroke = function(t) {
		return this._setStroke(t ? new i.Stroke(t) : null)
	}, e.beginLinearGradientStroke = function(t, e, n, r, s, o) {
		return this._setStroke((new i.Stroke).linearGradient(t, e, n, r, s, o))
	}, e.beginRadialGradientStroke = function(t, e, n, r, s, o, a, l) {
		return this._setStroke((new i.Stroke).radialGradient(t, e, n, r, s, o, a, l))
	}, e.beginBitmapStroke = function(t, e) {
		return this._setStroke((new i.Stroke).bitmap(t, e))
	}, e.endStroke = function() {
		return this.beginStroke()
	}, e.curveTo = e.quadraticCurveTo, e.drawRect = e.rect, e.drawRoundRect = function(t, e, i, n, r) {
		return this.drawRoundRectComplex(t, e, i, n, r, r, r, r)
	}, e.drawRoundRectComplex = function(t, e, n, r, s, o, a, l) {
		return this.append(new i.RoundRect(t, e, n, r, s, o, a, l))
	}, e.drawCircle = function(t, e, n) {
		return this.append(new i.Circle(t, e, n))
	}, e.drawEllipse = function(t, e, n, r) {
		return this.append(new i.Ellipse(t, e, n, r))
	}, e.drawPolyStar = function(t, e, n, r, s, o) {
		return this.append(new i.PolyStar(t, e, n, r, s, o))
	}, e.append = function(t, e) {
		return this._activeInstructions.push(t), this.command = t, e || (this._dirty = !0), this
	}, e.decodePath = function(e) {
		for (var i = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], n = [2, 2, 4, 6, 0], r = 0, s = e.length, o = [], a = 0, l = 0, c = t.BASE_64; s > r;) {
			var u = e.charAt(r),
				h = c[u],
				d = h >> 3,
				p = i[d];
			if (!p || 3 & h) throw "bad path data (@" + r + "): " + u;
			var f = n[d];
			d || (a = l = 0), o.length = 0, r++;
			for (var m = (h >> 2 & 1) + 2, g = 0; f > g; g++) {
				var _ = c[e.charAt(r)],
					v = _ >> 5 ? -1 : 1;
				_ = (31 & _) << 6 | c[e.charAt(r + 1)], 3 == m && (_ = _ << 6 | c[e.charAt(r + 2)]), _ = v * _ / 10, g % 2 ? a = _ += a : l = _ += l, o[g] = _, r += m
			}
			p.apply(this, o)
		}
		return this
	}, e.store = function() {
		return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
	}, e.unstore = function() {
		return this._storeIndex = 0, this
	}, e.clone = function() {
		var e = new t;
		return e.command = this.command, e._stroke = this._stroke, e._strokeStyle = this._strokeStyle, e._strokeDash = this._strokeDash, e._strokeIgnoreScale = this._strokeIgnoreScale, e._fill = this._fill, e._instructions = this._instructions.slice(), e._commitIndex = this._commitIndex, e._activeInstructions = this._activeInstructions.slice(), e._dirty = this._dirty, e._storeIndex = this._storeIndex, e
	}, e.toString = function() {
		return "[Graphics]"
	}, e.mt = e.moveTo, e.lt = e.lineTo, e.at = e.arcTo, e.bt = e.bezierCurveTo, e.qt = e.quadraticCurveTo, e.a = e.arc, e.r = e.rect, e.cp = e.closePath, e.c = e.clear, e.f = e.beginFill, e.lf = e.beginLinearGradientFill, e.rf = e.beginRadialGradientFill, e.bf = e.beginBitmapFill, e.ef = e.endFill, e.ss = e.setStrokeStyle, e.sd = e.setStrokeDash, e.s = e.beginStroke, e.ls = e.beginLinearGradientStroke, e.rs = e.beginRadialGradientStroke, e.bs = e.beginBitmapStroke, e.es = e.endStroke, e.dr = e.drawRect, e.rr = e.drawRoundRect, e.rc = e.drawRoundRectComplex, e.dc = e.drawCircle, e.de = e.drawEllipse, e.dp = e.drawPolyStar, e.p = e.decodePath, e._updateInstructions = function(e) {
		var i = this._instructions,
			n = this._activeInstructions,
			r = this._commitIndex;
		if (this._dirty && n.length) {
			i.length = r, i.push(t.beginCmd);
			var s = n.length,
				o = i.length;
			i.length = o + s;
			for (var a = 0; s > a; a++) i[a + o] = n[a];
			this._fill && i.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, i.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, i.push(this._strokeStyle)), i.push(this._stroke)), this._dirty = !1
		}
		e && (n.length = 0, this._commitIndex = i.length)
	}, e._setFill = function(t) {
		return this._updateInstructions(!0), this.command = this._fill = t, this
	}, e._setStroke = function(t) {
		return this._updateInstructions(!0), (this.command = this._stroke = t) && (t.ignoreScale = this._strokeIgnoreScale), this
	}, (i.LineTo = function(t, e) {
		this.x = t, this.y = e
	}).prototype.exec = function(t) {
		t.lineTo(this.x, this.y)
	}, (i.MoveTo = function(t, e) {
		this.x = t, this.y = e
	}).prototype.exec = function(t) {
		t.moveTo(this.x, this.y)
	}, (i.ArcTo = function(t, e, i, n, r) {
		this.x1 = t, this.y1 = e, this.x2 = i, this.y2 = n, this.radius = r
	}).prototype.exec = function(t) {
		t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
	}, (i.Arc = function(t, e, i, n, r, s) {
		this.x = t, this.y = e, this.radius = i, this.startAngle = n, this.endAngle = r, this.anticlockwise = !! s
	}).prototype.exec = function(t) {
		t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
	}, (i.QuadraticCurveTo = function(t, e, i, n) {
		this.cpx = t, this.cpy = e, this.x = i, this.y = n
	}).prototype.exec = function(t) {
		t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
	}, (i.BezierCurveTo = function(t, e, i, n, r, s) {
		this.cp1x = t, this.cp1y = e, this.cp2x = i, this.cp2y = n, this.x = r, this.y = s
	}).prototype.exec = function(t) {
		t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
	}, (i.Rect = function(t, e, i, n) {
		this.x = t, this.y = e, this.w = i, this.h = n
	}).prototype.exec = function(t) {
		t.rect(this.x, this.y, this.w, this.h)
	}, (i.ClosePath = function() {}).prototype.exec = function(t) {
		t.closePath()
	}, (i.BeginPath = function() {}).prototype.exec = function(t) {
		t.beginPath()
	}, e = (i.Fill = function(t, e) {
		this.style = t, this.matrix = e
	}).prototype, e.exec = function(t) {
		if (this.style) {
			t.fillStyle = this.style;
			var e = this.matrix;
			e && (t.save(), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), t.fill(), e && t.restore()
		}
	}, e.linearGradient = function(e, i, n, r, s, o) {
		for (var a = this.style = t._ctx.createLinearGradient(n, r, s, o), l = 0, c = e.length; c > l; l++) a.addColorStop(i[l], e[l]);
		return a.props = {
			colors: e,
			ratios: i,
			x0: n,
			y0: r,
			x1: s,
			y1: o,
			type: "linear"
		}, this
	}, e.radialGradient = function(e, i, n, r, s, o, a, l) {
		for (var c = this.style = t._ctx.createRadialGradient(n, r, s, o, a, l), u = 0, h = e.length; h > u; u++) c.addColorStop(i[u], e[u]);
		return c.props = {
			colors: e,
			ratios: i,
			x0: n,
			y0: r,
			r0: s,
			x1: o,
			y1: a,
			r1: l,
			type: "radial"
		}, this
	}, e.bitmap = function(e, i) {
		if (e.naturalWidth || e.getContext || e.readyState >= 2) {
			var n = this.style = t._ctx.createPattern(e, i || "");
			n.props = {
				image: e,
				repetition: i,
				type: "bitmap"
			}
		}
		return this
	}, e.path = !1, e = (i.Stroke = function(t, e) {
		this.style = t, this.ignoreScale = e
	}).prototype, e.exec = function(t) {
		this.style && (t.strokeStyle = this.style, this.ignoreScale && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0)), t.stroke(), this.ignoreScale && t.restore())
	}, e.linearGradient = i.Fill.prototype.linearGradient, e.radialGradient = i.Fill.prototype.radialGradient, e.bitmap = i.Fill.prototype.bitmap, e.path = !1, e = (i.StrokeStyle = function(t, e, i, n) {
		this.width = t, this.caps = e, this.joints = i, this.miterLimit = n
	}).prototype, e.exec = function(e) {
		e.lineWidth = null == this.width ? "1" : this.width, e.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : t.STROKE_CAPS_MAP[this.caps], e.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : t.STROKE_JOINTS_MAP[this.joints], e.miterLimit = null == this.miterLimit ? "10" : this.miterLimit
	}, e.path = !1, (i.StrokeDash = function(t, e) {
		this.segments = t, this.offset = e || 0
	}).prototype.exec = function(t) {
		t.setLineDash && (t.setLineDash(this.segments || i.StrokeDash.EMPTY_SEGMENTS), t.lineDashOffset = this.offset || 0)
	}, i.StrokeDash.EMPTY_SEGMENTS = [], (i.RoundRect = function(t, e, i, n, r, s, o, a) {
		this.x = t, this.y = e, this.w = i, this.h = n, this.radiusTL = r, this.radiusTR = s, this.radiusBR = o, this.radiusBL = a
	}).prototype.exec = function(t) {
		var e = (c > l ? l : c) / 2,
			i = 0,
			n = 0,
			r = 0,
			s = 0,
			o = this.x,
			a = this.y,
			l = this.w,
			c = this.h,
			u = this.radiusTL,
			h = this.radiusTR,
			d = this.radiusBR,
			p = this.radiusBL;
		0 > u && (u *= i = -1), u > e && (u = e), 0 > h && (h *= n = -1), h > e && (h = e), 0 > d && (d *= r = -1), d > e && (d = e), 0 > p && (p *= s = -1), p > e && (p = e), t.moveTo(o + l - h, a), t.arcTo(o + l + h * n, a - h * n, o + l, a + h, h), t.lineTo(o + l, a + c - d), t.arcTo(o + l + d * r, a + c + d * r, o + l - d, a + c, d), t.lineTo(o + p, a + c), t.arcTo(o - p * s, a + c + p * s, o, a + c - p, p), t.lineTo(o, a + u), t.arcTo(o - u * i, a - u * i, o + u, a, u), t.closePath()
	}, (i.Circle = function(t, e, i) {
		this.x = t, this.y = e, this.radius = i
	}).prototype.exec = function(t) {
		t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
	}, (i.Ellipse = function(t, e, i, n) {
		this.x = t, this.y = e, this.w = i, this.h = n
	}).prototype.exec = function(t) {
		var e = this.x,
			i = this.y,
			n = this.w,
			r = this.h,
			s = .5522848,
			o = n / 2 * s,
			a = r / 2 * s,
			l = e + n,
			c = i + r,
			u = e + n / 2,
			h = i + r / 2;
		t.moveTo(e, h), t.bezierCurveTo(e, h - a, u - o, i, u, i), t.bezierCurveTo(u + o, i, l, h - a, l, h), t.bezierCurveTo(l, h + a, u + o, c, u, c), t.bezierCurveTo(u - o, c, e, h + a, e, h)
	}, (i.PolyStar = function(t, e, i, n, r, s) {
		this.x = t, this.y = e, this.radius = i, this.sides = n, this.pointSize = r, this.angle = s
	}).prototype.exec = function(t) {
		var e = this.x,
			i = this.y,
			n = this.radius,
			r = (this.angle || 0) / 180 * Math.PI,
			s = this.sides,
			o = 1 - (this.pointSize || 0),
			a = Math.PI / s;
		t.moveTo(e + Math.cos(r) * n, i + Math.sin(r) * n);
		for (var l = 0; s > l; l++) r += a, 1 != o && t.lineTo(e + Math.cos(r) * n * o, i + Math.sin(r) * n * o), r += a, t.lineTo(e + Math.cos(r) * n, i + Math.sin(r) * n);
		t.closePath()
	}, t.beginCmd = new i.BeginPath, createjs.Graphics = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null;
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	t._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], t.suppressCrossDomainErrors = !1, t._snapToPixelEnabled = !1;
	var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	i.getContext && (t._hitTestCanvas = i, t._hitTestContext = i.getContext("2d"), i.width = i.height = 1), t._nextCacheID = 1, e.getStage = function() {
		for (var t = this, e = createjs.Stage; t.parent;) t = t.parent;
		return t instanceof e ? t : null
	};
	try {
		Object.defineProperties(e, {
			stage: {
				get: e.getStage
			}
		})
	} catch (n) {}
	e.isVisible = function() {
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
	}, e.draw = function(t, e) {
		var i = this.cacheCanvas;
		if (e || !i) return !1;
		var n = this._cacheScale;
		return t.drawImage(i, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, i.width / n, i.height / n), !0
	}, e.updateContext = function(e) {
		var i = this,
			n = i.mask,
			r = i._props.matrix;
		n && n.graphics && !n.graphics.isEmpty() && (n.getMatrix(r), e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty), n.graphics.drawAsPath(e), e.clip(), r.invert(), e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)), this.getMatrix(r);
		var s = r.tx,
			o = r.ty;
		t._snapToPixelEnabled && i.snapToPixel && (s = s + (0 > s ? -.5 : .5) | 0, o = o + (0 > o ? -.5 : .5) | 0), e.transform(r.a, r.b, r.c, r.d, s, o), e.globalAlpha *= i.alpha, i.compositeOperation && (e.globalCompositeOperation = i.compositeOperation), i.shadow && this._applyShadow(e, i.shadow)
	}, e.cache = function(t, e, i, n, r) {
		r = r || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = i, this._cacheHeight = n, this._cacheOffsetX = t, this._cacheOffsetY = e, this._cacheScale = r, this.updateCache()
	}, e.updateCache = function(e) {
		var i = this.cacheCanvas;
		if (!i) throw "cache() must be called before updateCache()";
		var n = this._cacheScale,
			r = this._cacheOffsetX * n,
			s = this._cacheOffsetY * n,
			o = this._cacheWidth,
			a = this._cacheHeight,
			l = i.getContext("2d"),
			c = this._getFilterBounds();
		r += this._filterOffsetX = c.x, s += this._filterOffsetY = c.y, o = Math.ceil(o * n) + c.width, a = Math.ceil(a * n) + c.height, o != i.width || a != i.height ? (i.width = o, i.height = a) : e || l.clearRect(0, 0, o + 1, a + 1), l.save(), l.globalCompositeOperation = e, l.setTransform(n, 0, 0, n, -r, -s), this.draw(l, !0), this._applyFilters(), l.restore(), this.cacheID = t._nextCacheID++
	}, e.uncache = function() {
		this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
	}, e.getCacheDataURL = function() {
		return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
	}, e.localToGlobal = function(t, e, i) {
		return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new createjs.Point)
	}, e.globalToLocal = function(t, e, i) {
		return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i || new createjs.Point)
	}, e.localToLocal = function(t, e, i, n) {
		return n = this.localToGlobal(t, e, n), i.globalToLocal(n.x, n.y, n)
	}, e.setTransform = function(t, e, i, n, r, s, o, a, l) {
		return this.x = t || 0, this.y = e || 0, this.scaleX = null == i ? 1 : i, this.scaleY = null == n ? 1 : n, this.rotation = r || 0, this.skewX = s || 0, this.skewY = o || 0, this.regX = a || 0, this.regY = l || 0, this
	}, e.getMatrix = function(t) {
		var e = this,
			i = t && t.identity() || new createjs.Matrix2D;
		return e.transformMatrix ? i.copy(e.transformMatrix) : i.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY)
	}, e.getConcatenatedMatrix = function(t) {
		for (var e = this, i = this.getMatrix(t); e = e.parent;) i.prependMatrix(e.getMatrix(e._props.matrix));
		return i
	}, e.getConcatenatedDisplayProps = function(t) {
		t = t ? t.identity() : new createjs.DisplayProps;
		var e = this,
			i = e.getMatrix(t.matrix);
		do t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation), e != this && i.prependMatrix(e.getMatrix(e._props.matrix));
		while (e = e.parent);
		return t
	}, e.hitTest = function(e, i) {
		var n = t._hitTestContext;
		n.setTransform(1, 0, 0, 1, -e, -i), this.draw(n);
		var r = this._testHit(n);
		return n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, 2, 2), r
	}, e.set = function(t) {
		for (var e in t) this[e] = t[e];
		return this
	}, e.getBounds = function() {
		if (this._bounds) return this._rectangle.copy(this._bounds);
		var t = this.cacheCanvas;
		if (t) {
			var e = this._cacheScale;
			return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e)
		}
		return null
	}, e.getTransformedBounds = function() {
		return this._getBounds()
	}, e.setBounds = function(t, e, i, n) {
		null == t && (this._bounds = t), this._bounds = (this._bounds || new createjs.Rectangle).setValues(t, e, i, n)
	}, e.clone = function() {
		return this._cloneProps(new t)
	}, e.toString = function() {
		return "[DisplayObject (name=" + this.name + ")]"
	}, e._cloneProps = function(t) {
		return t.alpha = this.alpha, t.mouseEnabled = this.mouseEnabled, t.tickEnabled = this.tickEnabled, t.name = this.name, t.regX = this.regX, t.regY = this.regY, t.rotation = this.rotation, t.scaleX = this.scaleX, t.scaleY = this.scaleY, t.shadow = this.shadow, t.skewX = this.skewX, t.skewY = this.skewY, t.visible = this.visible, t.x = this.x, t.y = this.y, t.compositeOperation = this.compositeOperation, t.snapToPixel = this.snapToPixel, t.filters = null == this.filters ? null : this.filters.slice(0), t.mask = this.mask, t.hitArea = this.hitArea, t.cursor = this.cursor, t._bounds = this._bounds, t
	}, e._applyShadow = function(t, e) {
		e = e || Shadow.identity, t.shadowColor = e.color, t.shadowOffsetX = e.offsetX, t.shadowOffsetY = e.offsetY, t.shadowBlur = e.blur
	}, e._tick = function(t) {
		var e = this._listeners;
		e && e.tick && (t.target = null, t.propagationStopped = t.immediatePropagationStopped = !1, this.dispatchEvent(t))
	}, e._testHit = function(e) {
		try {
			var i = e.getImageData(0, 0, 1, 1).data[3] > 1
		} catch (n) {
			if (!t.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
		}
		return i
	}, e._applyFilters = function() {
		if (this.filters && 0 != this.filters.length && this.cacheCanvas) for (var t = this.filters.length, e = this.cacheCanvas.getContext("2d"), i = this.cacheCanvas.width, n = this.cacheCanvas.height, r = 0; t > r; r++) this.filters[r].applyFilter(e, 0, 0, i, n)
	}, e._getFilterBounds = function() {
		var t, e = this.filters,
			i = this._rectangle.setValues(0, 0, 0, 0);
		if (!e || !(t = e.length)) return i;
		for (var n = 0; t > n; n++) {
			var r = this.filters[n];
			r.getBounds && r.getBounds(i)
		}
		return i
	}, e._getBounds = function(t, e) {
		return this._transformBounds(this.getBounds(), t, e)
	}, e._transformBounds = function(t, e, i) {
		if (!t) return t;
		var n = t.x,
			r = t.y,
			s = t.width,
			o = t.height,
			a = this._props.matrix;
		a = i ? a.identity() : this.getMatrix(a), (n || r) && a.appendTransform(0, 0, 1, 1, 0, 0, 0, -n, -r), e && a.prependMatrix(e);
		var l = s * a.a,
			c = s * a.b,
			u = o * a.c,
			h = o * a.d,
			d = a.tx,
			p = a.ty,
			f = d,
			m = d,
			g = p,
			_ = p;
		return (n = l + d) < f ? f = n : n > m && (m = n), (n = l + u + d) < f ? f = n : n > m && (m = n), (n = u + d) < f ? f = n : n > m && (m = n), (r = c + p) < g ? g = r : r > _ && (_ = r), (r = c + h + p) < g ? g = r : r > _ && (_ = r), (r = h + p) < g ? g = r : r > _ && (_ = r), t.setValues(f, g, m - f, _ - g)
	}, e._hasMouseEventListener = function() {
		for (var e = t._MOUSE_EVENTS, i = 0, n = e.length; n > i; i++) if (this.hasEventListener(e[i])) return !0;
		return !!this.cursor
	}, createjs.DisplayObject = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.getNumChildren = function() {
		return this.children.length
	};
	try {
		Object.defineProperties(e, {
			numChildren: {
				get: e.getNumChildren
			}
		})
	} catch (i) {}
	e.initialize = t, e.isVisible = function() {
		var t = this.cacheCanvas || this.children.length;
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) return !0;
		for (var i = this.children.slice(), n = 0, r = i.length; r > n; n++) {
			var s = i[n];
			s.isVisible() && (t.save(), s.updateContext(t), s.draw(t), t.restore())
		}
		return !0
	}, e.addChild = function(t) {
		if (null == t) return t;
		var e = arguments.length;
		if (e > 1) {
			for (var i = 0; e > i; i++) this.addChild(arguments[i]);
			return arguments[e - 1]
		}
		return t.parent && t.parent.removeChild(t), t.parent = this, this.children.push(t), t.dispatchEvent("added"), t
	}, e.addChildAt = function(t, e) {
		var i = arguments.length,
			n = arguments[i - 1];
		if (0 > n || n > this.children.length) return arguments[i - 2];
		if (i > 2) {
			for (var r = 0; i - 1 > r; r++) this.addChildAt(arguments[r], n + r);
			return arguments[i - 2]
		}
		return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t.dispatchEvent("added"), t
	}, e.removeChild = function(t) {
		var e = arguments.length;
		if (e > 1) {
			for (var i = !0, n = 0; e > n; n++) i = i && this.removeChild(arguments[n]);
			return i
		}
		return this.removeChildAt(createjs.indexOf(this.children, t))
	}, e.removeChildAt = function(t) {
		var e = arguments.length;
		if (e > 1) {
			for (var i = [], n = 0; e > n; n++) i[n] = arguments[n];
			i.sort(function(t, e) {
				return e - t
			});
			for (var r = !0, n = 0; e > n; n++) r = r && this.removeChildAt(i[n]);
			return r
		}
		if (0 > t || t > this.children.length - 1) return !1;
		var s = this.children[t];
		return s && (s.parent = null), this.children.splice(t, 1), s.dispatchEvent("removed"), !0
	}, e.removeAllChildren = function() {
		for (var t = this.children; t.length;) this.removeChildAt(0)
	}, e.getChildAt = function(t) {
		return this.children[t]
	}, e.getChildByName = function(t) {
		for (var e = this.children, i = 0, n = e.length; n > i; i++) if (e[i].name == t) return e[i];
		return null
	}, e.sortChildren = function(t) {
		this.children.sort(t)
	}, e.getChildIndex = function(t) {
		return createjs.indexOf(this.children, t)
	}, e.swapChildrenAt = function(t, e) {
		var i = this.children,
			n = i[t],
			r = i[e];
		n && r && (i[t] = r, i[e] = n)
	}, e.swapChildren = function(t, e) {
		for (var i, n, r = this.children, s = 0, o = r.length; o > s && (r[s] == t && (i = s), r[s] == e && (n = s), null == i || null == n); s++);
		s != o && (r[i] = e, r[n] = t)
	}, e.setChildIndex = function(t, e) {
		var i = this.children,
			n = i.length;
		if (!(t.parent != this || 0 > e || e >= n)) {
			for (var r = 0; n > r && i[r] != t; r++);
			r != n && r != e && (i.splice(r, 1), i.splice(e, 0, t))
		}
	}, e.contains = function(t) {
		for (; t;) {
			if (t == this) return !0;
			t = t.parent
		}
		return !1
	}, e.hitTest = function(t, e) {
		return null != this.getObjectUnderPoint(t, e)
	}, e.getObjectsUnderPoint = function(t, e, i) {
		var n = [],
			r = this.localToGlobal(t, e);
		return this._getObjectsUnderPoint(r.x, r.y, n, i > 0, 1 == i), n
	}, e.getObjectUnderPoint = function(t, e, i) {
		var n = this.localToGlobal(t, e);
		return this._getObjectsUnderPoint(n.x, n.y, null, i > 0, 1 == i)
	}, e.getBounds = function() {
		return this._getBounds(null, !0)
	}, e.getTransformedBounds = function() {
		return this._getBounds()
	}, e.clone = function(e) {
		var i = this._cloneProps(new t);
		return e && this._cloneChildren(i), i
	}, e.toString = function() {
		return "[Container (name=" + this.name + ")]"
	}, e._tick = function(t) {
		if (this.tickChildren) for (var e = this.children.length - 1; e >= 0; e--) {
			var i = this.children[e];
			i.tickEnabled && i._tick && i._tick(t)
		}
		this.DisplayObject__tick(t)
	}, e._cloneChildren = function(t) {
		t.children.length && t.removeAllChildren();
		for (var e = t.children, i = 0, n = this.children.length; n > i; i++) {
			var r = this.children[i].clone(!0);
			r.parent = t, e.push(r)
		}
	}, e._getObjectsUnderPoint = function(e, i, n, r, s, o) {
		if (o = o || 0, !o && !this._testMask(this, e, i)) return null;
		var a, l = createjs.DisplayObject._hitTestContext;
		s = s || r && this._hasMouseEventListener();
		for (var c = this.children, u = c.length, h = u - 1; h >= 0; h--) {
			var d = c[h],
				p = d.hitArea;
			if (d.visible && (p || d.isVisible()) && (!r || d.mouseEnabled) && (p || this._testMask(d, e, i))) if (!p && d instanceof t) {
				var f = d._getObjectsUnderPoint(e, i, n, r, s, o + 1);
				if (!n && f) return r && !this.mouseChildren ? this : f
			} else {
				if (r && !s && !d._hasMouseEventListener()) continue;
				var m = d.getConcatenatedDisplayProps(d._props);
				if (a = m.matrix, p && (a.appendMatrix(p.getMatrix(p._props.matrix)), m.alpha = p.alpha), l.globalAlpha = m.alpha, l.setTransform(a.a, a.b, a.c, a.d, a.tx - e, a.ty - i), (p || d).draw(l), !this._testHit(l)) continue;
				if (l.setTransform(1, 0, 0, 1, 0, 0), l.clearRect(0, 0, 2, 2), !n) return r && !this.mouseChildren ? this : d;
				n.push(d)
			}
		}
		return null
	}, e._testMask = function(t, e, i) {
		var n = t.mask;
		if (!n || !n.graphics || n.graphics.isEmpty()) return !0;
		var r = this._props.matrix,
			s = t.parent;
		r = s ? s.getConcatenatedMatrix(r) : r.identity(), r = n.getMatrix(n._props.matrix).prependMatrix(r);
		var o = createjs.DisplayObject._hitTestContext;
		return o.setTransform(r.a, r.b, r.c, r.d, r.tx - e, r.ty - i), n.graphics.drawAsPath(o), o.fillStyle = "#000", o.fill(), this._testHit(o) ? (o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, 2, 2), !0) : !1
	}, e._getBounds = function(t, e) {
		var i = this.DisplayObject_getBounds();
		if (i) return this._transformBounds(i, t, e);
		var n = this._props.matrix;
		n = e ? n.identity() : this.getMatrix(n), t && n.prependMatrix(t);
		for (var r = this.children.length, s = null, o = 0; r > o; o++) {
			var a = this.children[o];
			a.visible && (i = a._getBounds(n)) && (s ? s.extend(i.x, i.y, i.width, i.height) : s = i.clone())
		}
		return s
	}, createjs.Container = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
	}
	var e = createjs.extend(t, createjs.Container);
	e._get_nextStage = function() {
		return this._nextStage
	}, e._set_nextStage = function(t) {
		this._nextStage && (this._nextStage._prevStage = null), t && (t._prevStage = this), this._nextStage = t
	};
	try {
		Object.defineProperties(e, {
			nextStage: {
				get: e._get_nextStage,
				set: e._set_nextStage
			}
		})
	} catch (i) {}
	e.update = function(t) {
		if (this.canvas && (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
			createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
			var e = this.drawRect,
				i = this.canvas.getContext("2d");
			i.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (e ? i.clearRect(e.x, e.y, e.width, e.height) : i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), i.save(), this.drawRect && (i.beginPath(), i.rect(e.x, e.y, e.width, e.height), i.clip()), this.updateContext(i), this.draw(i, !1), i.restore(), this.dispatchEvent("drawend")
		}
	}, e.tick = function(t) {
		if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
			var e = new createjs.Event("tick");
			if (t) for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
			this._tick(e), this.dispatchEvent("tickend")
		}
	}, e.handleEvent = function(t) {
		"tick" == t.type && this.update(t)
	}, e.clear = function() {
		if (this.canvas) {
			var t = this.canvas.getContext("2d");
			t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
		}
	}, e.toDataURL = function(t, e) {
		var i, n = this.canvas.getContext("2d"),
			r = this.canvas.width,
			s = this.canvas.height;
		if (t) {
			i = n.getImageData(0, 0, r, s);
			var o = n.globalCompositeOperation;
			n.globalCompositeOperation = "destination-over", n.fillStyle = t, n.fillRect(0, 0, r, s)
		}
		var a = this.canvas.toDataURL(e || "image/png");
		return t && (n.putImageData(i, 0, 0), n.globalCompositeOperation = o), a
	}, e.enableMouseOver = function(t) {
		if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == t && this._testMouseOver(!0)), null == t) t = 20;
		else if (0 >= t) return;
		var e = this;
		this._mouseOverIntervalID = setInterval(function() {
			e._testMouseOver()
		}, 1e3 / Math.min(50, t))
	}, e.enableDOMEvents = function(t) {
		null == t && (t = !0);
		var e, i, n = this._eventListeners;
		if (!t && n) {
			for (e in n) i = n[e], i.t.removeEventListener(e, i.f, !1);
			this._eventListeners = null
		} else if (t && !n && this.canvas) {
			var r = window.addEventListener ? window : document,
				s = this;
			n = this._eventListeners = {}, n.mouseup = {
				t: r,
				f: function(t) {
					s._handleMouseUp(t)
				}
			}, n.mousemove = {
				t: r,
				f: function(t) {
					s._handleMouseMove(t)
				}
			}, n.dblclick = {
				t: this.canvas,
				f: function(t) {
					s._handleDoubleClick(t)
				}
			}, n.mousedown = {
				t: this.canvas,
				f: function(t) {
					s._handleMouseDown(t)
				}
			};
			for (e in n) i = n[e], i.t.addEventListener(e, i.f, !1)
		}
	}, e.clone = function() {
		throw "Stage cannot be cloned."
	}, e.toString = function() {
		return "[Stage (name=" + this.name + ")]"
	}, e._getElementRect = function(t) {
		var e;
		try {
			e = t.getBoundingClientRect()
		} catch (i) {
			e = {
				top: t.offsetTop,
				left: t.offsetLeft,
				width: t.offsetWidth,
				height: t.offsetHeight
			}
		}
		var n = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
			r = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
			s = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle,
			o = parseInt(s.paddingLeft) + parseInt(s.borderLeftWidth),
			a = parseInt(s.paddingTop) + parseInt(s.borderTopWidth),
			l = parseInt(s.paddingRight) + parseInt(s.borderRightWidth),
			c = parseInt(s.paddingBottom) + parseInt(s.borderBottomWidth);
		return {
			left: e.left + n + o,
			right: e.right + n - l,
			top: e.top + r + a,
			bottom: e.bottom + r - c
		}
	}, e._getPointerData = function(t) {
		var e = this._pointerData[t];
		return e || (e = this._pointerData[t] = {
			x: 0,
			y: 0
		}), e
	}, e._handleMouseMove = function(t) {
		t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY)
	}, e._handlePointerMove = function(t, e, i, n, r) {
		if ((!this._prevStage || void 0 !== r) && this.canvas) {
			var s = this._nextStage,
				o = this._getPointerData(t),
				a = o.inBounds;
			this._updatePointerPosition(t, e, i, n), (a || o.inBounds || this.mouseMoveOutside) && (-1 === t && o.inBounds == !a && this._dispatchMouseEvent(this, a ? "mouseleave" : "mouseenter", !1, t, o, e), this._dispatchMouseEvent(this, "stagemousemove", !1, t, o, e), this._dispatchMouseEvent(o.target, "pressmove", !0, t, o, e)), s && s._handlePointerMove(t, e, i, n, null)
		}
	}, e._updatePointerPosition = function(t, e, i, n) {
		var r = this._getElementRect(this.canvas);
		i -= r.left, n -= r.top;
		var s = this.canvas.width,
			o = this.canvas.height;
		i /= (r.right - r.left) / s, n /= (r.bottom - r.top) / o;
		var a = this._getPointerData(t);
		(a.inBounds = i >= 0 && n >= 0 && s - 1 >= i && o - 1 >= n) ? (a.x = i, a.y = n) : this.mouseMoveOutside && (a.x = 0 > i ? 0 : i > s - 1 ? s - 1 : i, a.y = 0 > n ? 0 : n > o - 1 ? o - 1 : n), a.posEvtObj = e, a.rawX = i, a.rawY = n, (t === this._primaryPointerID || -1 === t) && (this.mouseX = a.x, this.mouseY = a.y, this.mouseInBounds = a.inBounds)
	}, e._handleMouseUp = function(t) {
		this._handlePointerUp(-1, t, !1)
	}, e._handlePointerUp = function(t, e, i, n) {
		var r = this._nextStage,
			s = this._getPointerData(t);
		if (!this._prevStage || void 0 !== n) {
			var o = null,
				a = s.target;
			n || !a && !r || (o = this._getObjectsUnderPoint(s.x, s.y, null, !0)), s.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, t, s, e, o), s.down = !1), o == a && this._dispatchMouseEvent(a, "click", !0, t, s, e), this._dispatchMouseEvent(a, "pressup", !0, t, s, e), i ? (t == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[t]) : s.target = null, r && r._handlePointerUp(t, e, i, n || o && this)
		}
	}, e._handleMouseDown = function(t) {
		this._handlePointerDown(-1, t, t.pageX, t.pageY)
	}, e._handlePointerDown = function(t, e, i, n, r) {
		this.preventSelection && e.preventDefault(), (null == this._primaryPointerID || -1 === t) && (this._primaryPointerID = t), null != n && this._updatePointerPosition(t, e, i, n);
		var s = null,
			o = this._nextStage,
			a = this._getPointerData(t);
		r || (s = a.target = this._getObjectsUnderPoint(a.x, a.y, null, !0)), a.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, t, a, e, s), a.down = !0), this._dispatchMouseEvent(s, "mousedown", !0, t, a, e), o && o._handlePointerDown(t, e, i, n, r || s && this)
	}, e._testMouseOver = function(t, e, i) {
		if (!this._prevStage || void 0 !== e) {
			var n = this._nextStage;
			if (!this._mouseOverIntervalID) return void(n && n._testMouseOver(t, e, i));
			var r = this._getPointerData(-1);
			if (r && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
				var s, o, a, l = r.posEvtObj,
					c = i || l && l.target == this.canvas,
					u = null,
					h = -1,
					d = "";
				!e && (t || this.mouseInBounds && c) && (u = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
				var p = this._mouseOverTarget || [],
					f = p[p.length - 1],
					m = this._mouseOverTarget = [];
				for (s = u; s;) m.unshift(s), d || (d = s.cursor), s = s.parent;
				for (this.canvas.style.cursor = d, !e && i && (i.canvas.style.cursor = d), o = 0, a = m.length; a > o && m[o] == p[o]; o++) h = o;
				for (f != u && this._dispatchMouseEvent(f, "mouseout", !0, -1, r, l, u), o = p.length - 1; o > h; o--) this._dispatchMouseEvent(p[o], "rollout", !1, -1, r, l, u);
				for (o = m.length - 1; o > h; o--) this._dispatchMouseEvent(m[o], "rollover", !1, -1, r, l, f);
				f != u && this._dispatchMouseEvent(u, "mouseover", !0, -1, r, l, f), n && n._testMouseOver(t, e || u && this, i || c && this)
			}
		}
	}, e._handleDoubleClick = function(t, e) {
		var i = null,
			n = this._nextStage,
			r = this._getPointerData(-1);
		e || (i = this._getObjectsUnderPoint(r.x, r.y, null, !0), this._dispatchMouseEvent(i, "dblclick", !0, -1, r, t)), n && n._handleDoubleClick(t, e || i && this)
	}, e._dispatchMouseEvent = function(t, e, i, n, r, s, o) {
		if (t && (i || t.hasEventListener(e))) {
			var a = new createjs.MouseEvent(e, i, !1, r.x, r.y, s, n, n === this._primaryPointerID || -1 === n, r.rawX, r.rawY, o);
			t.dispatchEvent(a)
		}
	}, createjs.Stage = createjs.promote(t, "Container")
}(), this.createjs = this.createjs || {}, function() {
	function t(t) {
		this.DisplayObject_constructor(), "string" == typeof t ? (this.image = document.createElement("img"), this.image.src = t) : this.image = t, this.sourceRect = null
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.initialize = t, e.isVisible = function() {
		var t = this.image,
			e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
	}, e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e) || !this.image) return !0;
		var i = this.image,
			n = this.sourceRect;
		if (n) {
			var r = n.x,
				s = n.y,
				o = r + n.width,
				a = s + n.height,
				l = 0,
				c = 0,
				u = i.width,
				h = i.height;
			0 > r && (l -= r, r = 0), o > u && (o = u), 0 > s && (c -= s, s = 0), a > h && (a = h), t.drawImage(i, r, s, o - r, a - s, l, c, o - r, a - s)
		} else t.drawImage(i, 0, 0);
		return !0
	}, e.getBounds = function() {
		var t = this.DisplayObject_getBounds();
		if (t) return t;
		var e = this.image,
			i = this.sourceRect || e,
			n = e && (e.naturalWidth || e.getContext || e.readyState >= 2);
		return n ? this._rectangle.setValues(0, 0, i.width, i.height) : null
	}, e.clone = function() {
		var e = new t(this.image);
		return this.sourceRect && (e.sourceRect = this.sourceRect.clone()), this._cloneProps(e), e
	}, e.toString = function() {
		return "[Bitmap (name=" + this.name + ")]"
	}, createjs.Bitmap = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e) {
		this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = t, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != e && this.gotoAndPlay(e)
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.initialize = t, e.isVisible = function() {
		var t = this.cacheCanvas || this.spriteSheet.complete;
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) return !0;
		this._normalizeFrame();
		var i = this.spriteSheet.getFrame(0 | this._currentFrame);
		if (!i) return !1;
		var n = i.rect;
		return n.width && n.height && t.drawImage(i.image, n.x, n.y, n.width, n.height, -i.regX, -i.regY, n.width, n.height), !0
	}, e.play = function() {
		this.paused = !1
	}, e.stop = function() {
		this.paused = !0
	}, e.gotoAndPlay = function(t) {
		this.paused = !1, this._skipAdvance = !0, this._goto(t)
	}, e.gotoAndStop = function(t) {
		this.paused = !0, this._goto(t)
	}, e.advance = function(t) {
		var e = this.framerate || this.spriteSheet.framerate,
			i = e && null != t ? t / (1e3 / e) : 1;
		this._normalizeFrame(i)
	}, e.getBounds = function() {
		return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
	}, e.clone = function() {
		return this._cloneProps(new t(this.spriteSheet))
	}, e.toString = function() {
		return "[Sprite (name=" + this.name + ")]"
	}, e._cloneProps = function(t) {
		return this.DisplayObject__cloneProps(t), t.currentFrame = this.currentFrame, t.currentAnimation = this.currentAnimation, t.paused = this.paused, t.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate, t._animation = this._animation, t._currentFrame = this._currentFrame, t._skipAdvance = this._skipAdvance, t
	}, e._tick = function(t) {
		this.paused || (this._skipAdvance || this.advance(t && t.delta), this._skipAdvance = !1), this.DisplayObject__tick(t)
	}, e._normalizeFrame = function(t) {
		t = t || 0;
		var e, i = this._animation,
			n = this.paused,
			r = this._currentFrame;
		if (i) {
			var s = i.speed || 1,
				o = this.currentAnimationFrame;
			if (e = i.frames.length, o + t * s >= e) {
				var a = i.next;
				if (this._dispatchAnimationEnd(i, r, n, a, e - 1)) return;
				if (a) return this._goto(a, t - (e - o) / s);
				this.paused = !0, o = i.frames.length - 1
			} else o += t * s;
			this.currentAnimationFrame = o, this._currentFrame = i.frames[0 | o]
		} else if (r = this._currentFrame += t, e = this.spriteSheet.getNumFrames(), r >= e && e > 0 && !this._dispatchAnimationEnd(i, r, n, e - 1) && (this._currentFrame -= e) >= e) return this._normalizeFrame();
		r = 0 | this._currentFrame, this.currentFrame != r && (this.currentFrame = r, this.dispatchEvent("change"))
	}, e._dispatchAnimationEnd = function(t, e, i, n, r) {
		var s = t ? t.name : null;
		if (this.hasEventListener("animationend")) {
			var o = new createjs.Event("animationend");
			o.name = s, o.next = n, this.dispatchEvent(o)
		}
		var a = this._animation != t || this._currentFrame != e;
		return a || i || !this.paused || (this.currentAnimationFrame = r, a = !0), a
	}, e._goto = function(t, e) {
		if (this.currentAnimationFrame = 0, isNaN(t)) {
			var i = this.spriteSheet.getAnimation(t);
			i && (this._animation = i, this.currentAnimation = t, this._normalizeFrame(e))
		} else this.currentAnimation = this._animation = null, this._currentFrame = t, this._normalizeFrame()
	}, createjs.Sprite = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.DisplayObject_constructor(), this.graphics = t ? t : new createjs.Graphics
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function() {
		var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function(t, e) {
		return this.DisplayObject_draw(t, e) ? !0 : (this.graphics.draw(t, this), !0)
	}, e.clone = function(e) {
		var i = e && this.graphics ? this.graphics.clone() : this.graphics;
		return this._cloneProps(new t(i))
	}, e.toString = function() {
		return "[Shape (name=" + this.name + ")]"
	}, createjs.Shape = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i) {
		this.DisplayObject_constructor(), this.text = t, this.font = e, this.color = i, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
	}
	var e = createjs.extend(t, createjs.DisplayObject),
		i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	i.getContext && (t._workingContext = i.getContext("2d"), i.width = i.height = 1), t.H_OFFSETS = {
		start: 0,
		left: 0,
		center: -.5,
		end: -1,
		right: -1
	}, t.V_OFFSETS = {
		top: 0,
		hanging: -.01,
		middle: -.4,
		alphabetic: -.8,
		ideographic: -.85,
		bottom: -1
	}, e.isVisible = function() {
		var t = this.cacheCanvas || null != this.text && "" !== this.text;
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) return !0;
		var i = this.color || "#000";
		return this.outline ? (t.strokeStyle = i, t.lineWidth = 1 * this.outline) : t.fillStyle = i, this._drawText(this._prepContext(t)), !0
	}, e.getMeasuredWidth = function() {
		return this._getMeasuredWidth(this.text)
	}, e.getMeasuredLineHeight = function() {
		return 1.2 * this._getMeasuredWidth("M")
	}, e.getMeasuredHeight = function() {
		return this._drawText(null, {}).height
	}, e.getBounds = function() {
		var e = this.DisplayObject_getBounds();
		if (e) return e;
		if (null == this.text || "" === this.text) return null;
		var i = this._drawText(null, {}),
			n = this.maxWidth && this.maxWidth < i.width ? this.maxWidth : i.width,
			r = n * t.H_OFFSETS[this.textAlign || "left"],
			s = this.lineHeight || this.getMeasuredLineHeight(),
			o = s * t.V_OFFSETS[this.textBaseline || "top"];
		return this._rectangle.setValues(r, o, n, i.height)
	}, e.getMetrics = function() {
		var e = {
			lines: []
		};
		return e.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), e.vOffset = e.lineHeight * t.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, e, e.lines)
	}, e.clone = function() {
		return this._cloneProps(new t(this.text, this.font, this.color))
	}, e.toString = function() {
		return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
	}, e._cloneProps = function(t) {
		return this.DisplayObject__cloneProps(t), t.textAlign = this.textAlign, t.textBaseline = this.textBaseline, t.maxWidth = this.maxWidth, t.outline = this.outline, t.lineHeight = this.lineHeight, t.lineWidth = this.lineWidth, t
	}, e._prepContext = function(t) {
		return t.font = this.font || "10px sans-serif", t.textAlign = this.textAlign || "left", t.textBaseline = this.textBaseline || "top", t
	}, e._drawText = function(e, i, n) {
		var r = !! e;
		r || (e = t._workingContext, e.save(), this._prepContext(e));
		for (var s = this.lineHeight || this.getMeasuredLineHeight(), o = 0, a = 0, l = String(this.text).split(/(?:\r\n|\r|\n)/), c = 0, u = l.length; u > c; c++) {
			var h = l[c],
				d = null;
			if (null != this.lineWidth && (d = e.measureText(h).width) > this.lineWidth) {
				var p = h.split(/(\s)/);
				h = p[0], d = e.measureText(h).width;
				for (var f = 1, m = p.length; m > f; f += 2) {
					var g = e.measureText(p[f] + p[f + 1]).width;
					d + g > this.lineWidth ? (r && this._drawTextLine(e, h, a * s), n && n.push(h), d > o && (o = d), h = p[f + 1], d = e.measureText(h).width, a++) : (h += p[f] + p[f + 1], d += g)
				}
			}
			r && this._drawTextLine(e, h, a * s), n && n.push(h), i && null == d && (d = e.measureText(h).width), d > o && (o = d), a++
		}
		return i && (i.width = o, i.height = a * s), r || e.restore(), i
	}, e._drawTextLine = function(t, e, i) {
		this.outline ? t.strokeText(e, 0, i, this.maxWidth || 65535) : t.fillText(e, 0, i, this.maxWidth || 65535)
	}, e._getMeasuredWidth = function(e) {
		var i = t._workingContext;
		i.save();
		var n = this._prepContext(i).measureText(e).width;
		return i.restore(), n
	}, createjs.Text = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e) {
		this.Container_constructor(), this.text = t || "", this.spriteSheet = e, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
			text: 0,
			spriteSheet: 0,
			lineHeight: 0,
			letterSpacing: 0,
			spaceWidth: 0
		}
	}
	var e = createjs.extend(t, createjs.Container);
	t.maxPoolSize = 100, t._spritePool = [], e.draw = function(t, e) {
		this.DisplayObject_draw(t, e) || (this._updateText(), this.Container_draw(t, e))
	}, e.getBounds = function() {
		return this._updateText(), this.Container_getBounds()
	}, e.isVisible = function() {
		var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
		return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && t)
	}, e.clone = function() {
		return this._cloneProps(new t(this.text, this.spriteSheet))
	}, e.addChild = e.addChildAt = e.removeChild = e.removeChildAt = e.removeAllChildren = function() {}, e._cloneProps = function(t) {
		return this.Container__cloneProps(t), t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.spaceWidth = this.spaceWidth, t
	}, e._getFrameIndex = function(t, e) {
		var i, n = e.getAnimation(t);
		return n || (t != (i = t.toUpperCase()) || t != (i = t.toLowerCase()) || (i = null), i && (n = e.getAnimation(i))), n && n.frames[0]
	}, e._getFrame = function(t, e) {
		var i = this._getFrameIndex(t, e);
		return null == i ? i : e.getFrame(i)
	}, e._getLineHeight = function(t) {
		var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
		return e ? e.rect.height : 1
	}, e._getSpaceWidth = function(t) {
		var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
		return e ? e.rect.width : 1
	}, e._updateText = function() {
		var e, i = 0,
			n = 0,
			r = this._oldProps,
			s = !1,
			o = this.spaceWidth,
			a = this.lineHeight,
			l = this.spriteSheet,
			c = t._spritePool,
			u = this.children,
			h = 0,
			d = u.length;
		for (var p in r) r[p] != this[p] && (r[p] = this[p], s = !0);
		if (s) {
			var f = !! this._getFrame(" ", l);
			f || o || (o = this._getSpaceWidth(l)), a || (a = this._getLineHeight(l));
			for (var m = 0, g = this.text.length; g > m; m++) {
				var _ = this.text.charAt(m);
				if (" " != _ || f) if ("\n" != _ && "\r" != _) {
					var v = this._getFrameIndex(_, l);
					null != v && (d > h ? e = u[h] : (u.push(e = c.length ? c.pop() : new createjs.Sprite), e.parent = this, d++), e.spriteSheet = l, e.gotoAndStop(v), e.x = i, e.y = n, h++, i += e.getBounds().width + this.letterSpacing)
				} else "\r" == _ && "\n" == this.text.charAt(m + 1) && m++, i = 0, n += a;
				else i += o
			}
			for (; d > h;) c.push(e = u.pop()), e.parent = null, d--;
			c.length > t.maxPoolSize && (c.length = t.maxPoolSize)
		}
	}, createjs.BitmapText = createjs.promote(t, "Container")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		throw "SpriteSheetUtils cannot be instantiated"
	}
	var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	e.getContext && (t._workingCanvas = e, t._workingContext = e.getContext("2d"), e.width = e.height = 1), t.addFlippedFrames = function(e, i, n, r) {
		if (i || n || r) {
			var s = 0;
			i && t._flip(e, ++s, !0, !1), n && t._flip(e, ++s, !1, !0), r && t._flip(e, ++s, !0, !0)
		}
	}, t.extractFrame = function(e, i) {
		isNaN(i) && (i = e.getAnimation(i).frames[0]);
		var n = e.getFrame(i);
		if (!n) return null;
		var r = n.rect,
			s = t._workingCanvas;
		s.width = r.width, s.height = r.height, t._workingContext.drawImage(n.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
		var o = document.createElement("img");
		return o.src = s.toDataURL("image/png"), o
	}, t.mergeAlpha = function(t, e, i) {
		i || (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), i.width = Math.max(e.width, t.width), i.height = Math.max(e.height, t.height);
		var n = i.getContext("2d");
		return n.save(), n.drawImage(t, 0, 0), n.globalCompositeOperation = "destination-in", n.drawImage(e, 0, 0), n.restore(), i
	}, t._flip = function(e, i, n, r) {
		for (var s = e._images, o = t._workingCanvas, a = t._workingContext, l = s.length / i, c = 0; l > c; c++) {
			var u = s[c];
			u.__tmp = c, a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, o.width + 1, o.height + 1), o.width = u.width, o.height = u.height, a.setTransform(n ? -1 : 1, 0, 0, r ? -1 : 1, n ? u.width : 0, r ? u.height : 0), a.drawImage(u, 0, 0);
			var h = document.createElement("img");
			h.src = o.toDataURL("image/png"), h.width = u.width, h.height = u.height, s.push(h)
		}
		var d = e._frames,
			p = d.length / i;
		for (c = 0; p > c; c++) {
			u = d[c];
			var f = u.rect.clone();
			h = s[u.image.__tmp + l * i];
			var m = {
				image: h,
				rect: f,
				regX: u.regX,
				regY: u.regY
			};
			n && (f.x = h.width - f.x - f.width, m.regX = f.width - u.regX), r && (f.y = h.height - f.y - f.height, m.regY = f.height - u.regY), d.push(m)
		}
		var g = "_" + (n ? "h" : "") + (r ? "v" : ""),
			_ = e._animations,
			v = e._data,
			y = _.length / i;
		for (c = 0; y > c; c++) {
			var b = _[c];
			u = v[b];
			var w = {
				name: b + g,
				speed: u.speed,
				next: u.next,
				frames: []
			};
			u.next && (w.next += g), d = u.frames;
			for (var x = 0, T = d.length; T > x; x++) w.frames.push(d[x] + p * i);
			v[w.name] = w, _.push(w.name)
		}
	}, createjs.SpriteSheetUtils = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", t.ERR_RUNNING = "a build is already running", e.addFrame = function(e, i, n, r, s) {
		if (this._data) throw t.ERR_RUNNING;
		var o = i || e.bounds || e.nominalBounds;
		return !o && e.getBounds && (o = e.getBounds()), o ? (n = n || 1, this._frames.push({
			source: e,
			sourceRect: o,
			scale: n,
			funct: r,
			data: s,
			index: this._frames.length,
			height: o.height * n
		}) - 1) : null
	}, e.addAnimation = function(e, i, n, r) {
		if (this._data) throw t.ERR_RUNNING;
		this._animations[e] = {
			frames: i,
			next: n,
			frequency: r
		}
	}, e.addMovieClip = function(e, i, n, r, s, o) {
		if (this._data) throw t.ERR_RUNNING;
		var a = e.frameBounds,
			l = i || e.bounds || e.nominalBounds;
		if (!l && e.getBounds && (l = e.getBounds()), l || a) {
			var c, u, h = this._frames.length,
				d = e.timeline.duration;
			for (c = 0; d > c; c++) {
				var p = a && a[c] ? a[c] : l;
				this.addFrame(e, p, n, this._setupMovieClipFrame, {
					i: c,
					f: r,
					d: s
				})
			}
			var f = e.timeline._labels,
				m = [];
			for (var g in f) m.push({
				index: f[g],
				label: g
			});
			if (m.length) for (m.sort(function(t, e) {
				return t.index - e.index
			}), c = 0, u = m.length; u > c; c++) {
				for (var _ = m[c].label, v = h + m[c].index, y = h + (c == u - 1 ? d : m[c + 1].index), b = [], w = v; y > w; w++) b.push(w);
				(!o || (_ = o(_, e, v, y))) && this.addAnimation(_, b, !0)
			}
		}
	}, e.build = function() {
		if (this._data) throw t.ERR_RUNNING;
		for (this._startBuild(); this._drawNext(););
		return this._endBuild(), this.spriteSheet
	}, e.buildAsync = function(e) {
		if (this._data) throw t.ERR_RUNNING;
		this.timeSlice = e, this._startBuild();
		var i = this;
		this._timerID = setTimeout(function() {
			i._run()
		}, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
	}, e.stopAsync = function() {
		clearTimeout(this._timerID), this._data = null
	}, e.clone = function() {
		throw "SpriteSheetBuilder cannot be cloned."
	}, e.toString = function() {
		return "[SpriteSheetBuilder]"
	}, e._startBuild = function() {
		var e = this.padding || 0;
		this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
		var i = [];
		this._data = {
			images: [],
			frames: i,
			animations: this._animations
		};
		var n = this._frames.slice();
		if (n.sort(function(t, e) {
			return t.height <= e.height ? -1 : 1
		}), n[n.length - 1].height + 2 * e > this.maxHeight) throw t.ERR_DIMENSIONS;
		for (var r = 0, s = 0, o = 0; n.length;) {
			var a = this._fillRow(n, r, o, i, e);
			if (a.w > s && (s = a.w), r += a.h, !a.h || !n.length) {
				var l = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
				l.width = this._getSize(s, this.maxWidth), l.height = this._getSize(r, this.maxHeight), this._data.images[o] = l, a.h || (s = r = 0, o++)
			}
		}
	}, e._setupMovieClipFrame = function(t, e) {
		var i = t.actionsEnabled;
		t.actionsEnabled = !1, t.gotoAndStop(e.i), t.actionsEnabled = i, e.f && e.f(t, e.d, e.i)
	}, e._getSize = function(t, e) {
		for (var i = 4; Math.pow(2, ++i) < t;);
		return Math.min(e, Math.pow(2, i))
	}, e._fillRow = function(e, i, n, r, s) {
		var o = this.maxWidth,
			a = this.maxHeight;
		i += s;
		for (var l = a - i, c = s, u = 0, h = e.length - 1; h >= 0; h--) {
			var d = e[h],
				p = this._scale * d.scale,
				f = d.sourceRect,
				m = d.source,
				g = Math.floor(p * f.x - s),
				_ = Math.floor(p * f.y - s),
				v = Math.ceil(p * f.height + 2 * s),
				y = Math.ceil(p * f.width + 2 * s);
			if (y > o) throw t.ERR_DIMENSIONS;
			v > l || c + y > o || (d.img = n, d.rect = new createjs.Rectangle(c, i, y, v), u = u || v, e.splice(h, 1), r[d.index] = [c, i, y, v, n, Math.round(-g + p * m.regX - s), Math.round(-_ + p * m.regY - s)], c += y)
		}
		return {
			w: c,
			h: u
		}
	}, e._endBuild = function() {
		this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
	}, e._run = function() {
		for (var t = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), e = (new Date).getTime() + t, i = !1; e > (new Date).getTime();) if (!this._drawNext()) {
			i = !0;
			break
		}
		if (i) this._endBuild();
		else {
			var n = this;
			this._timerID = setTimeout(function() {
				n._run()
			}, 50 - t)
		}
		var r = this.progress = this._index / this._frames.length;
		if (this.hasEventListener("progress")) {
			var s = new createjs.Event("progress");
			s.progress = r, this.dispatchEvent(s)
		}
	}, e._drawNext = function() {
		var t = this._frames[this._index],
			e = t.scale * this._scale,
			i = t.rect,
			n = t.sourceRect,
			r = this._data.images[t.img],
			s = r.getContext("2d");
		return t.funct && t.funct(t.source, t.data), s.save(), s.beginPath(), s.rect(i.x, i.y, i.width, i.height), s.clip(), s.translate(Math.ceil(i.x - n.x * e), Math.ceil(i.y - n.y * e)), s.scale(e, e), t.source.draw(s), s.restore(), ++this._index < this._frames.length
	}, createjs.SpriteSheetBuilder = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.DisplayObject_constructor(), "string" == typeof t && (t = document.getElementById(t)), this.mouseEnabled = !1;
		var e = t.style;
		e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%", this.htmlElement = t, this._oldProps = null
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function() {
		return null != this.htmlElement
	}, e.draw = function() {
		return !0
	}, e.cache = function() {}, e.uncache = function() {}, e.updateCache = function() {}, e.hitTest = function() {}, e.localToGlobal = function() {}, e.globalToLocal = function() {}, e.localToLocal = function() {}, e.clone = function() {
		throw "DOMElement cannot be cloned."
	}, e.toString = function() {
		return "[DOMElement (name=" + this.name + ")]"
	}, e._tick = function(t) {
		var e = this.getStage();
		e && e.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(t)
	}, e._handleDrawEnd = function() {
		var t = this.htmlElement;
		if (t) {
			var e = t.style,
				i = this.getConcatenatedDisplayProps(this._props),
				n = i.matrix,
				r = i.visible ? "visible" : "hidden";
			if (r != e.visibility && (e.visibility = r), i.visible) {
				var s = this._oldProps,
					o = s && s.matrix,
					a = 1e4;
				if (!o || !o.equals(n)) {
					var l = "matrix(" + (n.a * a | 0) / a + "," + (n.b * a | 0) / a + "," + (n.c * a | 0) / a + "," + (n.d * a | 0) / a + "," + (n.tx + .5 | 0);
					e.transform = e.WebkitTransform = e.OTransform = e.msTransform = l + "," + (n.ty + .5 | 0) + ")", e.MozTransform = l + "px," + (n.ty + .5 | 0) + "px)", s || (s = this._oldProps = new createjs.DisplayProps(!0, NaN)), s.matrix.copy(n)
				}
				s.alpha != i.alpha && (e.opacity = "" + (i.alpha * a | 0) / a, s.alpha = i.alpha)
			}
		}
	}, createjs.DOMElement = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {}
	var e = t.prototype;
	e.getBounds = function(t) {
		return t
	}, e.applyFilter = function(t, e, i, n, r, s, o, a) {
		s = s || t, null == o && (o = e), null == a && (a = i);
		try {
			var l = t.getImageData(e, i, n, r)
		} catch (c) {
			return !1
		}
		return this._applyFilter(l) ? (s.putImageData(l, o, a), !0) : !1
	}, e.toString = function() {
		return "[Filter]"
	}, e.clone = function() {
		return new t
	}, e._applyFilter = function() {
		return !0
	}, createjs.Filter = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i) {
		(isNaN(t) || 0 > t) && (t = 0), (isNaN(e) || 0 > e) && (e = 0), (isNaN(i) || 1 > i) && (i = 1), this.blurX = 0 | t, this.blurY = 0 | e, this.quality = 0 | i
	}
	var e = createjs.extend(t, createjs.Filter);
	t.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], t.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], e.getBounds = function(t) {
		var e = 0 | this.blurX,
			i = 0 | this.blurY;
		if (0 >= e && 0 >= i) return t;
		var n = Math.pow(this.quality, .2);
		return (t || new createjs.Rectangle).pad(e * n + 1, i * n + 1, e * n + 1, i * n + 1)
	}, e.clone = function() {
		return new t(this.blurX, this.blurY, this.quality)
	}, e.toString = function() {
		return "[BlurFilter]"
	}, e._applyFilter = function(e) {
		var i = this.blurX >> 1;
		if (isNaN(i) || 0 > i) return !1;
		var n = this.blurY >> 1;
		if (isNaN(n) || 0 > n) return !1;
		if (0 == i && 0 == n) return !1;
		var r = this.quality;
		(isNaN(r) || 1 > r) && (r = 1), r |= 0, r > 3 && (r = 3), 1 > r && (r = 1);
		var s = e.data,
			o = 0,
			a = 0,
			l = 0,
			c = 0,
			u = 0,
			h = 0,
			d = 0,
			p = 0,
			f = 0,
			m = 0,
			g = 0,
			_ = 0,
			v = 0,
			y = 0,
			b = 0,
			w = i + i + 1 | 0,
			x = n + n + 1 | 0,
			T = 0 | e.width,
			S = 0 | e.height,
			k = T - 1 | 0,
			E = S - 1 | 0,
			j = i + 1 | 0,
			C = n + 1 | 0,
			A = {
				r: 0,
				b: 0,
				g: 0,
				a: 0
			},
			P = A;
		for (l = 1; w > l; l++) P = P.n = {
			r: 0,
			b: 0,
			g: 0,
			a: 0
		};
		P.n = A;
		var L = {
			r: 0,
			b: 0,
			g: 0,
			a: 0
		},
			O = L;
		for (l = 1; x > l; l++) O = O.n = {
			r: 0,
			b: 0,
			g: 0,
			a: 0
		};
		O.n = L;
		for (var R = null, M = 0 | t.MUL_TABLE[i], I = 0 | t.SHG_TABLE[i], D = 0 | t.MUL_TABLE[n], N = 0 | t.SHG_TABLE[n]; r-- > 0;) {
			d = h = 0;
			var F = M,
				$ = I;
			for (a = S; --a > -1;) {
				for (p = j * (_ = s[0 | h]), f = j * (v = s[h + 1 | 0]), m = j * (y = s[h + 2 | 0]), g = j * (b = s[h + 3 | 0]), P = A, l = j; --l > -1;) P.r = _, P.g = v, P.b = y, P.a = b, P = P.n;
				for (l = 1; j > l; l++) c = h + ((l > k ? k : l) << 2) | 0, p += P.r = s[c], f += P.g = s[c + 1], m += P.b = s[c + 2], g += P.a = s[c + 3], P = P.n;
				for (R = A, o = 0; T > o; o++) s[h++] = p * F >>> $, s[h++] = f * F >>> $, s[h++] = m * F >>> $, s[h++] = g * F >>> $, c = d + ((c = o + i + 1) < k ? c : k) << 2, p -= R.r - (R.r = s[c]), f -= R.g - (R.g = s[c + 1]), m -= R.b - (R.b = s[c + 2]), g -= R.a - (R.a = s[c + 3]), R = R.n;
				d += T
			}
			for (F = D, $ = N, o = 0; T > o; o++) {
				for (h = o << 2 | 0, p = C * (_ = s[h]) | 0, f = C * (v = s[h + 1 | 0]) | 0, m = C * (y = s[h + 2 | 0]) | 0, g = C * (b = s[h + 3 | 0]) | 0, O = L, l = 0; C > l; l++) O.r = _, O.g = v, O.b = y, O.a = b, O = O.n;
				for (u = T, l = 1; n >= l; l++) h = u + o << 2, p += O.r = s[h], f += O.g = s[h + 1], m += O.b = s[h + 2], g += O.a = s[h + 3], O = O.n, E > l && (u += T);
				if (h = o, R = L, r > 0) for (a = 0; S > a; a++) c = h << 2, s[c + 3] = b = g * F >>> $, b > 0 ? (s[c] = p * F >>> $, s[c + 1] = f * F >>> $, s[c + 2] = m * F >>> $) : s[c] = s[c + 1] = s[c + 2] = 0, c = o + ((c = a + C) < E ? c : E) * T << 2, p -= R.r - (R.r = s[c]), f -= R.g - (R.g = s[c + 1]), m -= R.b - (R.b = s[c + 2]), g -= R.a - (R.a = s[c + 3]), R = R.n, h += T;
				else for (a = 0; S > a; a++) c = h << 2, s[c + 3] = b = g * F >>> $, b > 0 ? (b = 255 / b, s[c] = (p * F >>> $) * b, s[c + 1] = (f * F >>> $) * b, s[c + 2] = (m * F >>> $) * b) : s[c] = s[c + 1] = s[c + 2] = 0, c = o + ((c = a + C) < E ? c : E) * T << 2, p -= R.r - (R.r = s[c]), f -= R.g - (R.g = s[c + 1]), m -= R.b - (R.b = s[c + 2]), g -= R.a - (R.a = s[c + 3]), R = R.n, h += T
			}
		}
		return !0
	}, createjs.BlurFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.alphaMap = t, this._alphaMap = null, this._mapData = null
	}
	var e = createjs.extend(t, createjs.Filter);
	e.clone = function() {
		var e = new t(this.alphaMap);
		return e._alphaMap = this._alphaMap, e._mapData = this._mapData, e
	}, e.toString = function() {
		return "[AlphaMapFilter]"
	}, e._applyFilter = function(t) {
		if (!this.alphaMap) return !0;
		if (!this._prepAlphaMap()) return !1;
		for (var e = t.data, i = this._mapData, n = 0, r = e.length; r > n; n += 4) e[n + 3] = i[n] || 0;
		return !0
	}, e._prepAlphaMap = function() {
		if (!this.alphaMap) return !1;
		if (this.alphaMap == this._alphaMap && this._mapData) return !0;
		this._mapData = null;
		var t, e = this._alphaMap = this.alphaMap,
			i = e;
		e instanceof HTMLCanvasElement ? t = i.getContext("2d") : (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), i.width = e.width, i.height = e.height, t = i.getContext("2d"), t.drawImage(e, 0, 0));
		try {
			var n = t.getImageData(0, 0, e.width, e.height)
		} catch (r) {
			return !1
		}
		return this._mapData = n.data, !0
	}, createjs.AlphaMapFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.mask = t
	}
	var e = createjs.extend(t, createjs.Filter);
	e.applyFilter = function(t, e, i, n, r, s, o, a) {
		return this.mask ? (s = s || t, null == o && (o = e), null == a && (a = i), s.save(), t != s ? !1 : (s.globalCompositeOperation = "destination-in", s.drawImage(this.mask, o, a), s.restore(), !0)) : !0
	}, e.clone = function() {
		return new t(this.mask)
	}, e.toString = function() {
		return "[AlphaMaskFilter]"
	}, createjs.AlphaMaskFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n, r, s, o, a) {
		this.redMultiplier = null != t ? t : 1, this.greenMultiplier = null != e ? e : 1, this.blueMultiplier = null != i ? i : 1, this.alphaMultiplier = null != n ? n : 1, this.redOffset = r || 0, this.greenOffset = s || 0, this.blueOffset = o || 0, this.alphaOffset = a || 0
	}
	var e = createjs.extend(t, createjs.Filter);
	e.toString = function() {
		return "[ColorFilter]"
	}, e.clone = function() {
		return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
	}, e._applyFilter = function(t) {
		for (var e = t.data, i = e.length, n = 0; i > n; n += 4) e[n] = e[n] * this.redMultiplier + this.redOffset, e[n + 1] = e[n + 1] * this.greenMultiplier + this.greenOffset, e[n + 2] = e[n + 2] * this.blueMultiplier + this.blueOffset, e[n + 3] = e[n + 3] * this.alphaMultiplier + this.alphaOffset;
		return !0
	}, createjs.ColorFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t, e, i, n) {
		this.setColor(t, e, i, n)
	}
	var e = t.prototype;
	t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t.LENGTH = t.IDENTITY_MATRIX.length, e.setColor = function(t, e, i, n) {
		return this.reset().adjustColor(t, e, i, n)
	}, e.reset = function() {
		return this.copy(t.IDENTITY_MATRIX)
	}, e.adjustColor = function(t, e, i, n) {
		return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i)
	}, e.adjustBrightness = function(t) {
		return 0 == t || isNaN(t) ? this : (t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
	}, e.adjustContrast = function(e) {
		if (0 == e || isNaN(e)) return this;
		e = this._cleanValue(e, 100);
		var i;
		return 0 > e ? i = 127 + e / 100 * 127 : (i = e % 1, i = 0 == i ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - i) + t.DELTA_INDEX[(e << 0) + 1] * i, i = 127 * i + 127), this._multiplyMatrix([i / 127, 0, 0, 0, .5 * (127 - i), 0, i / 127, 0, 0, .5 * (127 - i), 0, 0, i / 127, 0, .5 * (127 - i), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
	}, e.adjustSaturation = function(t) {
		if (0 == t || isNaN(t)) return this;
		t = this._cleanValue(t, 100);
		var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
			i = .3086,
			n = .6094,
			r = .082;
		return this._multiplyMatrix([i * (1 - e) + e, n * (1 - e), r * (1 - e), 0, 0, i * (1 - e), n * (1 - e) + e, r * (1 - e), 0, 0, i * (1 - e), n * (1 - e), r * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
	}, e.adjustHue = function(t) {
		if (0 == t || isNaN(t)) return this;
		t = this._cleanValue(t, 180) / 180 * Math.PI;
		var e = Math.cos(t),
			i = Math.sin(t),
			n = .213,
			r = .715,
			s = .072;
		return this._multiplyMatrix([n + e * (1 - n) + i * -n, r + e * -r + i * -r, s + e * -s + i * (1 - s), 0, 0, n + e * -n + .143 * i, r + e * (1 - r) + .14 * i, s + e * -s + i * -.283, 0, 0, n + e * -n + i * -(1 - n), r + e * -r + i * r, s + e * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
	}, e.concat = function(e) {
		return e = this._fixMatrix(e), e.length != t.LENGTH ? this : (this._multiplyMatrix(e), this)
	}, e.clone = function() {
		return (new t).copy(this)
	}, e.toArray = function() {
		for (var e = [], i = 0, n = t.LENGTH; n > i; i++) e[i] = this[i];
		return e
	}, e.copy = function(e) {
		for (var i = t.LENGTH, n = 0; i > n; n++) this[n] = e[n];
		return this
	}, e.toString = function() {
		return "[ColorMatrix]"
	}, e._multiplyMatrix = function(t) {
		var e, i, n, r = [];
		for (e = 0; 5 > e; e++) {
			for (i = 0; 5 > i; i++) r[i] = this[i + 5 * e];
			for (i = 0; 5 > i; i++) {
				var s = 0;
				for (n = 0; 5 > n; n++) s += t[i + 5 * n] * r[n];
				this[i + 5 * e] = s
			}
		}
	}, e._cleanValue = function(t, e) {
		return Math.min(e, Math.max(-e, t))
	}, e._fixMatrix = function(e) {
		return e instanceof t && (e = e.toArray()), e.length < t.LENGTH ? e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)), e
	}, createjs.ColorMatrix = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t(t) {
		this.matrix = t
	}
	var e = createjs.extend(t, createjs.Filter);
	e.toString = function() {
		return "[ColorMatrixFilter]"
	}, e.clone = function() {
		return new t(this.matrix)
	}, e._applyFilter = function(t) {
		for (var e, i, n, r, s = t.data, o = s.length, a = this.matrix, l = a[0], c = a[1], u = a[2], h = a[3], d = a[4], p = a[5], f = a[6], m = a[7], g = a[8], _ = a[9], v = a[10], y = a[11], b = a[12], w = a[13], x = a[14], T = a[15], S = a[16], k = a[17], E = a[18], j = a[19], C = 0; o > C; C += 4) e = s[C], i = s[C + 1], n = s[C + 2], r = s[C + 3], s[C] = e * l + i * c + n * u + r * h + d, s[C + 1] = e * p + i * f + n * m + r * g + _, s[C + 2] = e * v + i * y + n * b + r * w + x, s[C + 3] = e * T + i * S + n * k + r * E + j;
		return !0
	}, createjs.ColorMatrixFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function t() {
		throw "Touch cannot be instantiated"
	}
	t.isSupported = function() {
		return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
	}, t.enable = function(e, i, n) {
		return e && e.canvas && t.isSupported() ? e.__touch ? !0 : (e.__touch = {
			pointers: {},
			multitouch: !i,
			preventDefault: !n,
			count: 0
		}, "ontouchstart" in window ? t._IOS_enable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_enable(e), !0) : !1
	}, t.disable = function(e) {
		e && ("ontouchstart" in window ? t._IOS_disable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_disable(e), delete e.__touch)
	}, t._IOS_enable = function(e) {
		var i = e.canvas,
			n = e.__touch.f = function(i) {
				t._IOS_handleEvent(e, i)
			};
		i.addEventListener("touchstart", n, !1), i.addEventListener("touchmove", n, !1), i.addEventListener("touchend", n, !1), i.addEventListener("touchcancel", n, !1)
	}, t._IOS_disable = function(t) {
		var e = t.canvas;
		if (e) {
			var i = t.__touch.f;
			e.removeEventListener("touchstart", i, !1), e.removeEventListener("touchmove", i, !1), e.removeEventListener("touchend", i, !1), e.removeEventListener("touchcancel", i, !1)
		}
	}, t._IOS_handleEvent = function(t, e) {
		if (t) {
			t.__touch.preventDefault && e.preventDefault && e.preventDefault();
			for (var i = e.changedTouches, n = e.type, r = 0, s = i.length; s > r; r++) {
				var o = i[r],
					a = o.identifier;
				o.target == t.canvas && ("touchstart" == n ? this._handleStart(t, a, e, o.pageX, o.pageY) : "touchmove" == n ? this._handleMove(t, a, e, o.pageX, o.pageY) : ("touchend" == n || "touchcancel" == n) && this._handleEnd(t, a, e))
			}
		}
	}, t._IE_enable = function(e) {
		var i = e.canvas,
			n = e.__touch.f = function(i) {
				t._IE_handleEvent(e, i)
			};
		void 0 === window.navigator.pointerEnabled ? (i.addEventListener("MSPointerDown", n, !1), window.addEventListener("MSPointerMove", n, !1), window.addEventListener("MSPointerUp", n, !1), window.addEventListener("MSPointerCancel", n, !1), e.__touch.preventDefault && (i.style.msTouchAction = "none")) : (i.addEventListener("pointerdown", n, !1), window.addEventListener("pointermove", n, !1), window.addEventListener("pointerup", n, !1), window.addEventListener("pointercancel", n, !1), e.__touch.preventDefault && (i.style.touchAction = "none")), e.__touch.activeIDs = {}
	}, t._IE_disable = function(t) {
		var e = t.__touch.f;
		void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", e, !1), window.removeEventListener("MSPointerUp", e, !1), window.removeEventListener("MSPointerCancel", e, !1), t.canvas && t.canvas.removeEventListener("MSPointerDown", e, !1)) : (window.removeEventListener("pointermove", e, !1), window.removeEventListener("pointerup", e, !1), window.removeEventListener("pointercancel", e, !1), t.canvas && t.canvas.removeEventListener("pointerdown", e, !1))
	}, t._IE_handleEvent = function(t, e) {
		if (t) {
			t.__touch.preventDefault && e.preventDefault && e.preventDefault();
			var i = e.type,
				n = e.pointerId,
				r = t.__touch.activeIDs;
			if ("MSPointerDown" == i || "pointerdown" == i) {
				if (e.srcElement != t.canvas) return;
				r[n] = !0, this._handleStart(t, n, e, e.pageX, e.pageY)
			} else r[n] && ("MSPointerMove" == i || "pointermove" == i ? this._handleMove(t, n, e, e.pageX, e.pageY) : ("MSPointerUp" == i || "MSPointerCancel" == i || "pointerup" == i || "pointercancel" == i) && (delete r[n], this._handleEnd(t, n, e)))
		}
	}, t._handleStart = function(t, e, i, n, r) {
		var s = t.__touch;
		if (s.multitouch || !s.count) {
			var o = s.pointers;
			o[e] || (o[e] = !0, s.count++, t._handlePointerDown(e, i, n, r))
		}
	}, t._handleMove = function(t, e, i, n, r) {
		t.__touch.pointers[e] && t._handlePointerMove(e, i, n, r)
	}, t._handleEnd = function(t, e, i) {
		var n = t.__touch,
			r = n.pointers;
		r[e] && (n.count--, t._handlePointerUp(e, i, !0), delete r[e])
	}, createjs.Touch = t
}(), this.createjs = this.createjs || {}, function() {
	"use strict";
	var t = createjs.EaselJS = createjs.EaselJS || {};
	t.version = "0.8.1", t.buildDate = "Thu, 21 May 2015 16:17:39 GMT"
}(),

/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

function() {
	"use strict";

	function t() {}
	function e(t, e) {
		for (var i = t.length; i--;) if (t[i].listener === e) return i;
		return -1
	}
	function i(t) {
		return function() {
			return this[t].apply(this, arguments)
		}
	}
	var n = t.prototype,
		r = this,
		s = r.EventEmitter;
	n.getListeners = function(t) {
		var e, i, n = this._getEvents();
		if ("object" == typeof t) {
			e = {};
			for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
		} else e = n[t] || (n[t] = []);
		return e
	}, n.flattenListeners = function(t) {
		var e, i = [];
		for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
		return i
	}, n.getListenersAsObject = function(t) {
		var e, i = this.getListeners(t);
		return i instanceof Array && (e = {}, e[t] = i), e || i
	}, n.addListener = function(t, i) {
		var n, r = this.getListenersAsObject(t),
			s = "object" == typeof i;
		for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(s ? i : {
			listener: i,
			once: !1
		});
		return this
	}, n.on = i("addListener"), n.addOnceListener = function(t, e) {
		return this.addListener(t, {
			listener: e,
			once: !0
		})
	}, n.once = i("addOnceListener"), n.defineEvent = function(t) {
		return this.getListeners(t), this
	}, n.defineEvents = function(t) {
		for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
		return this
	}, n.removeListener = function(t, i) {
		var n, r, s = this.getListenersAsObject(t);
		for (r in s) s.hasOwnProperty(r) && (n = e(s[r], i), -1 !== n && s[r].splice(n, 1));
		return this
	}, n.off = i("removeListener"), n.addListeners = function(t, e) {
		return this.manipulateListeners(!1, t, e)
	}, n.removeListeners = function(t, e) {
		return this.manipulateListeners(!0, t, e)
	}, n.manipulateListeners = function(t, e, i) {
		var n, r, s = t ? this.removeListener : this.addListener,
			o = t ? this.removeListeners : this.addListeners;
		if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) s.call(this, e, i[n]);
		else for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? s.call(this, n, r) : o.call(this, n, r));
		return this
	}, n.removeEvent = function(t) {
		var e, i = typeof t,
			n = this._getEvents();
		if ("string" === i) delete n[t];
		else if ("object" === i) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
		else delete this._events;
		return this
	}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
		var i, n, r, s, o = this.getListenersAsObject(t);
		for (r in o) if (o.hasOwnProperty(r)) for (n = o[r].length; n--;) i = o[r][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
		return this
	}, n.trigger = i("emitEvent"), n.emit = function(t) {
		var e = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(t, e)
	}, n.setOnceReturnValue = function(t) {
		return this._onceReturnValue = t, this
	}, n._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, n._getEvents = function() {
		return this._events || (this._events = {})
	}, t.noConflict = function() {
		return r.EventEmitter = s, t
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return t
	}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */

function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
	function e(t) {
		return a.raw ? t : encodeURIComponent(t)
	}
	function i(t) {
		return a.raw ? t : decodeURIComponent(t)
	}
	function n(t) {
		return e(a.json ? JSON.stringify(t) : String(t))
	}
	function r(t) {
		0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return t = decodeURIComponent(t.replace(o, " ")), a.json ? JSON.parse(t) : t
		} catch (e) {}
	}
	function s(e, i) {
		var n = a.raw ? e : r(e);
		return t.isFunction(i) ? i(n) : n
	}
	var o = /\+/g,
		a = t.cookie = function(r, o, l) {
			if (arguments.length > 1 && !t.isFunction(o)) {
				if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
					var c = l.expires,
						u = l.expires = new Date;
					u.setMilliseconds(u.getMilliseconds() + 864e5 * c)
				}
				return document.cookie = [e(r), "=", n(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
			}
			for (var h = r ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0, f = d.length; f > p; p++) {
				var m = d[p].split("="),
					g = i(m.shift()),
					_ = m.join("=");
				if (r === g) {
					h = s(_, o);
					break
				}
				r || void 0 === (_ = s(_)) || (h[g] = _)
			}
			return h
		};
	a.defaults = {}, t.removeCookie = function(e, i) {
		return t.cookie(e, "", t.extend({}, i, {
			expires: -1
		})), !t.cookie(e)
	}
}), function() {
	function t(t, e) {
		if (t !== e) {
			var i = t === t,
				n = e === e;
			if (t > e || !i || "undefined" == typeof t && n) return 1;
			if (e > t || !n || "undefined" == typeof e && i) return -1
		}
		return 0
	}
	function e(t, e, i) {
		if (e !== e) return h(t, i);
		i -= 1;
		for (var n = t.length; ++i < n;) if (t[i] === e) return i;
		return -1
	}
	function i(t) {
		return "function" == typeof t || !1
	}
	function n(t) {
		return "string" == typeof t ? t : null == t ? "" : t + ""
	}
	function r(t) {
		return t.charCodeAt(0)
	}
	function s(t, e) {
		for (var i = -1, n = t.length; ++i < n && -1 < e.indexOf(t.charAt(i)););
		return i
	}
	function o(t, e) {
		for (var i = t.length; i-- && -1 < e.indexOf(t.charAt(i)););
		return i
	}
	function a(e, i) {
		return t(e.a, i.a) || e.b - i.b
	}
	function l(t) {
		return Ot[t]
	}
	function c(t) {
		return Rt[t]
	}
	function u(t) {
		return "\\" + Dt[t]
	}
	function h(t, e, i) {
		var n = t.length;
		for (e += i ? 0 : -1; i ? e-- : ++e < n;) {
			var r = t[e];
			if (r !== r) return e
		}
		return -1
	}
	function d(t) {
		return t && "object" == typeof t || !1
	}
	function p(t) {
		return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
	}
	function f(t, e) {
		for (var i = -1, n = t.length, r = -1, s = []; ++i < n;) t[i] === e && (t[i] = F, s[++r] = i);
		return s
	}
	function m(t) {
		for (var e = -1, i = t.length; ++e < i && p(t.charCodeAt(e)););
		return e
	}
	function g(t) {
		for (var e = t.length; e-- && p(t.charCodeAt(e)););
		return e
	}
	function _(t) {
		return Mt[t]
	}
	function v(p) {
		function Ot(t) {
			if (d(t) && !(Ir(t) || t instanceof It)) {
				if (t instanceof Mt) return t;
				if ($n.call(t, "__chain__") && $n.call(t, "__wrapped__")) return gi(t)
			}
			return new Mt(t)
		}
		function Rt() {}
		function Mt(t, e, i) {
			this.__wrapped__ = t, this.__actions__ = i || [], this.__chain__ = !! e
		}
		function It(t) {
			this.__wrapped__ = t, this.__actions__ = null, this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = null, this.__takeCount__ = mr, this.__views__ = null
		}
		function Dt() {
			this.__data__ = {}
		}
		function Nt(t) {
			var e = t ? t.length : 0;
			for (this.data = {
				hash: sr(null),
				set: new Zn
			}; e--;) this.push(t[e])
		}
		function Ft(t, e) {
			var i = t.data;
			return ("string" == typeof e || Ki(e) ? i.set.has(e) : i.hash[e]) ? 0 : -1
		}
		function $t(t, e) {
			var i = -1,
				n = t.length;
			for (e || (e = Tn(n)); ++i < n;) e[i] = t[i];
			return e
		}
		function Bt(t, e) {
			for (var i = -1, n = t.length; ++i < n && !1 !== e(t[i], i, t););
			return t
		}
		function Xt(t, e) {
			for (var i = -1, n = t.length; ++i < n;) if (!e(t[i], i, t)) return !1;
			return !0
		}
		function zt(t, e) {
			for (var i = -1, n = t.length, r = -1, s = []; ++i < n;) {
				var o = t[i];
				e(o, i, t) && (s[++r] = o)
			}
			return s
		}
		function Ut(t, e) {
			for (var i = -1, n = t.length, r = Tn(n); ++i < n;) r[i] = e(t[i], i, t);
			return r
		}
		function Wt(t) {
			for (var e = -1, i = t.length, n = fr; ++e < i;) {
				var r = t[e];
				r > n && (n = r)
			}
			return n
		}
		function Yt(t, e, i, n) {
			var r = -1,
				s = t.length;
			for (n && s && (i = t[++r]); ++r < s;) i = e(i, t[r], r, t);
			return i
		}
		function Vt(t, e, i, n) {
			var r = t.length;
			for (n && r && (i = t[--r]); r--;) i = e(i, t[r], r, t);
			return i
		}
		function Gt(t, e) {
			for (var i = -1, n = t.length; ++i < n;) if (e(t[i], i, t)) return !0;
			return !1
		}
		function Jt(t, e) {
			return "undefined" == typeof t ? e : t
		}
		function Qt(t, e, i, n) {
			return "undefined" != typeof t && $n.call(n, i) ? t : e
		}
		function Zt(t, e, i) {
			var n = qr(e);
			if (!i) return te(e, t, n);
			for (var r = -1, s = n.length; ++r < s;) {
				var o = n[r],
					a = t[o],
					l = i(a, e[o], o, t, e);
				(l === l ? l === a : a !== a) && ("undefined" != typeof a || o in t) || (t[o] = l)
			}
			return t
		}
		function Kt(t, e) {
			for (var i = -1, n = t.length, r = li(n), s = e.length, o = Tn(s); ++i < s;) {
				var a = e[i];
				r ? (a = parseFloat(a), o[i] = oi(a, n) ? t[a] : y) : o[i] = t[a]
			}
			return o
		}
		function te(t, e, i) {
			i || (i = e, e = {});
			for (var n = -1, r = i.length; ++n < r;) {
				var s = i[n];
				e[s] = t[s]
			}
			return e
		}
		function ee(t, e, i) {
			var n = typeof t;
			if ("function" == n) {
				if (n = "undefined" != typeof e) {
					var n = Ot.support,
						r = !(n.funcNames ? t.name : n.funcDecomp);
					if (!r) {
						var s = Nn.call(t);
						n.funcNames || (r = !_t.test(s)), r || (r = St.test(s) || tn(t), Sr(t, r))
					}
					n = r
				}
				t = n ? De(t, e, i) : t
			} else t = null == t ? yn : "object" == n ? we(t) : "undefined" == typeof e ? Se(t + "") : xe(t + "", e);
			return t
		}
		function ie(t, e, i, n, r, s, o) {
			var a;
			if (i && (a = r ? i(t, n, r) : i(t)), "undefined" != typeof a) return a;
			if (!Ki(t)) return t;
			if (n = Ir(t)) {
				if (a = ni(t), !e) return $t(t, a)
			} else {
				var l = Hn.call(t),
					c = l == z;
				if (l != W && l != $ && (!c || r)) return Pt[l] ? si(t, l, e) : r ? t : {};
				if (a = ri(c ? {} : t), !e) return te(t, a, qr(t))
			}
			for (s || (s = []), o || (o = []), r = s.length; r--;) if (s[r] == t) return o[r];
			return s.push(t), o.push(a), (n ? Bt : fe)(t, function(n, r) {
				a[r] = ie(n, e, i, r, t, s, o)
			}), a
		}
		function ne(t, e, i, n) {
			if ("function" != typeof t) throw new On(N);
			return Kn(function() {
				t.apply(y, je(i, n))
			}, e)
		}
		function re(t, i) {
			var n = t ? t.length : 0,
				r = [];
			if (!n) return r;
			var s = -1,
				o = ii(),
				a = o == e,
				l = a && 200 <= i.length ? kr(i) : null,
				c = i.length;
			l && (o = Ft, a = !1, i = l);
			t: for (; ++s < n;) if (l = t[s], a && l === l) {
				for (var u = c; u--;) if (i[u] === l) continue t;
				r.push(l)
			} else 0 > o(i, l, 0) && r.push(l);
			return r
		}
		function se(t, e) {
			var i = t ? t.length : 0;
			if (!li(i)) return fe(t, e);
			for (var n = -1, r = mi(t); ++n < i && !1 !== e(r[n], n, r););
			return t
		}
		function oe(t, e) {
			var i = t ? t.length : 0;
			if (!li(i)) return me(t, e);
			for (var n = mi(t); i-- && !1 !== e(n[i], i, n););
			return t
		}
		function ae(t, e) {
			var i = !0;
			return se(t, function(t, n, r) {
				return i = !! e(t, n, r)
			}), i
		}
		function le(t, e) {
			var i = [];
			return se(t, function(t, n, r) {
				e(t, n, r) && i.push(t)
			}), i
		}
		function ce(t, e, i, n) {
			var r;
			return i(t, function(t, i, s) {
				return e(t, i, s) ? (r = n ? i : t, !1) : void 0
			}), r
		}
		function ue(t, e, i, n) {
			n -= 1;
			for (var r = t.length, s = -1, o = []; ++n < r;) {
				var a = t[n];
				if (d(a) && li(a.length) && (Ir(a) || Ji(a))) {
					e && (a = ue(a, e, i, 0));
					var l = -1,
						c = a.length;
					for (o.length += c; ++l < c;) o[++s] = a[l]
				} else i || (o[++s] = a)
			}
			return o
		}
		function he(t, e, i) {
			var n = -1,
				r = mi(t);
			i = i(t);
			for (var s = i.length; ++n < s;) {
				var o = i[n];
				if (!1 === e(r[o], o, r)) break
			}
			return t
		}
		function de(t, e, i) {
			var n = mi(t);
			i = i(t);
			for (var r = i.length; r--;) {
				var s = i[r];
				if (!1 === e(n[s], s, n)) break
			}
			return t
		}
		function pe(t, e) {
			he(t, e, ln)
		}
		function fe(t, e) {
			return he(t, e, qr)
		}
		function me(t, e) {
			return de(t, e, qr)
		}
		function ge(t, e) {
			for (var i = -1, n = e.length, r = -1, s = []; ++i < n;) {
				var o = e[i];
				Nr(t[o]) && (s[++r] = o)
			}
			return s
		}
		function _e(t, e, i) {
			var n = -1,
				r = "function" == typeof e,
				s = t ? t.length : 0,
				o = li(s) ? Tn(s) : [];
			return se(t, function(t) {
				var s = r ? e : null != t && t[e];
				o[++n] = s ? s.apply(t, i) : y
			}), o
		}
		function ve(t, e, i, n, r, s) {
			if (t === e) return 0 !== t || 1 / t == 1 / e;
			var o = typeof t,
				a = typeof e;
			if ("function" != o && "object" != o && "function" != a && "object" != a || null == t || null == e) t = t !== t && e !== e;
			else t: {
				var o = ve,
					a = Ir(t),
					l = Ir(e),
					c = q,
					u = q;
				a || (c = Hn.call(t), c == $ ? c = W : c != W && (a = sn(t))), l || (u = Hn.call(e), u == $ ? u = W : u != W && sn(e));
				var h = c == W,
					l = u == W,
					u = c == u;
				if (!u || a || h) if (c = h && $n.call(t, "__wrapped__"), l = l && $n.call(e, "__wrapped__"), c || l) t = o(c ? t.value() : t, l ? e.value() : e, i, n, r, s);
				else if (u) {
					for (r || (r = []), s || (s = []), c = r.length; c--;) if (r[c] == t) {
						t = s[c] == e;
						break t
					}
					r.push(t), s.push(e), t = (a ? Qe : Ke)(t, e, o, i, n, r, s), r.pop(), s.pop()
				} else t = !1;
				else t = Ze(t, e, c)
			}
			return t
		}
		function ye(t, e, i, n, r) {
			var s = e.length;
			if (null == t) return !s;
			for (var o = -1, a = !r; ++o < s;) if (a && n[o] ? i[o] !== t[e[o]] : !$n.call(t, e[o])) return !1;
			for (o = -1; ++o < s;) {
				var l = e[o];
				if (a && n[o]) l = $n.call(t, l);
				else {
					var c = t[l],
						u = i[o],
						l = r ? r(c, u, l) : y;
					"undefined" == typeof l && (l = ve(u, c, r, !0))
				}
				if (!l) return !1
			}
			return !0
		}
		function be(t, e) {
			var i = [];
			return se(t, function(t, n, r) {
				i.push(e(t, n, r))
			}), i
		}
		function we(t) {
			var e = qr(t),
				i = e.length;
			if (1 == i) {
				var n = e[0],
					r = t[n];
				if (ci(r)) return function(t) {
					return null != t && t[n] === r && $n.call(t, n)
				}
			}
			for (var s = Tn(i), o = Tn(i); i--;) r = t[e[i]], s[i] = r, o[i] = ci(r);
			return function(t) {
				return ye(t, e, s, o)
			}
		}
		function xe(t, e) {
			return ci(e) ?
			function(i) {
				return null != i && i[t] === e
			} : function(i) {
				return null != i && ve(e, i[t], null, !0)
			}
		}
		function Te(t, e, i, n, r) {
			if (!Ki(t)) return t;
			var s = li(e.length) && (Ir(e) || sn(e));
			return (s ? Bt : fe)(e, function(e, o, a) {
				if (d(e)) {
					n || (n = []), r || (r = []);
					t: {
						e = n;
						for (var l = r, c = e.length, u = a[o]; c--;) if (e[c] == u) {
							t[o] = l[c], o = void 0;
							break t
						}
						c = t[o], a = i ? i(c, u, o, t, a) : y;
						var h = "undefined" == typeof a;
						h && (a = u, li(u.length) && (Ir(u) || sn(u)) ? a = Ir(c) ? c : c ? $t(c) : [] : Fr(u) || Ji(u) ? a = Ji(c) ? on(c) : Fr(c) ? c : {} : h = !1), e.push(u), l.push(a), h ? t[o] = Te(a, u, i, e, l) : (a === a ? a !== c : c === c) && (t[o] = a), o = void 0
					}
					return o
				}
				l = t[o], a = i ? i(l, e, o, t, a) : y, (u = "undefined" == typeof a) && (a = e), !s && "undefined" == typeof a || !u && (a === a ? a === l : l !== l) || (t[o] = a)
			}), t
		}
		function Se(t) {
			return function(e) {
				return null == e ? y : e[t]
			}
		}
		function ke(t, e) {
			return t + Vn(pr() * (e - t + 1))
		}
		function Ee(t, e, i, n, r) {
			return r(t, function(t, r, s) {
				i = n ? (n = !1, t) : e(i, t, r, s)
			}), i
		}
		function je(t, e, i) {
			var n = -1,
				r = t.length;
			for (e = null == e ? 0 : +e || 0, 0 > e && (e = -e > r ? 0 : r + e), i = "undefined" == typeof i || i > r ? r : +i || 0, 0 > i && (i += r), r = e > i ? 0 : i - e >>> 0, e >>>= 0, i = Tn(r); ++n < r;) i[n] = t[n + e];
			return i
		}
		function Ce(t, e) {
			var i;
			return se(t, function(t, n, r) {
				return i = e(t, n, r), !i
			}), !! i
		}
		function Ae(t, e) {
			var i = t.length;
			for (t.sort(e); i--;) t[i] = t[i].c;
			return t
		}
		function Pe(e, i, n) {
			var r = -1,
				s = e.length,
				o = li(s) ? Tn(s) : [];
			return se(e, function(t) {
				for (var e = i.length, n = Tn(e); e--;) n[e] = null == t ? y : t[i[e]];
				o[++r] = {
					a: n,
					b: r,
					c: t
				}
			}), Ae(o, function(e, i) {
				var r;
				t: {
					r = -1;
					for (var s = e.a, o = i.a, a = s.length, l = n.length; ++r < a;) {
						var c = t(s[r], o[r]);
						if (c) {
							r = l > r ? c * (n[r] ? 1 : -1) : c;
							break t
						}
					}
					r = e.b - i.b
				}
				return r
			})
		}
		function Le(t, i) {
			var n = -1,
				r = ii(),
				s = t.length,
				o = r == e,
				a = o && s >= 200,
				l = a ? kr() : null,
				c = [];
			l ? (r = Ft, o = !1) : (a = !1, l = i ? [] : c);
			t: for (; ++n < s;) {
				var u = t[n],
					h = i ? i(u, n, t) : u;
				if (o && u === u) {
					for (var d = l.length; d--;) if (l[d] === h) continue t;
					i && l.push(h), c.push(u)
				} else 0 > r(l, h, 0) && ((i || a) && l.push(h), c.push(u))
			}
			return c
		}
		function Oe(t, e) {
			for (var i = -1, n = e.length, r = Tn(n); ++i < n;) r[i] = t[e[i]];
			return r
		}
		function Re(t, e) {
			var i = t;
			i instanceof It && (i = i.value());
			for (var n = -1, r = e.length; ++n < r;) {
				var i = [i],
					s = e[n];
				Jn.apply(i, s.args), i = s.func.apply(s.thisArg, i)
			}
			return i
		}
		function Me(t, e, i) {
			var n = 0,
				r = t ? t.length : n;
			if ("number" == typeof e && e === e && vr >= r) {
				for (; r > n;) {
					var s = n + r >>> 1,
						o = t[s];
					(i ? e >= o : e > o) ? n = s + 1 : r = s
				}
				return r
			}
			return Ie(t, e, yn, i)
		}
		function Ie(t, e, i, n) {
			e = i(e);
			for (var r = 0, s = t ? t.length : 0, o = e !== e, a = "undefined" == typeof e; s > r;) {
				var l = Vn((r + s) / 2),
					c = i(t[l]),
					u = c === c;
				(o ? u || n : a ? u && (n || "undefined" != typeof c) : n ? e >= c : e > c) ? r = l + 1 : s = l
			}
			return cr(s, _r)
		}
		function De(t, e, i) {
			if ("function" != typeof t) return yn;
			if ("undefined" == typeof e) return t;
			switch (i) {
			case 1:
				return function(i) {
					return t.call(e, i)
				};
			case 3:
				return function(i, n, r) {
					return t.call(e, i, n, r)
				};
			case 4:
				return function(i, n, r, s) {
					return t.call(e, i, n, r, s)
				};
			case 5:
				return function(i, n, r, s, o) {
					return t.call(e, i, n, r, s, o)
				}
			}
			return function() {
				return t.apply(e, arguments)
			}
		}
		function Ne(t) {
			return Un.call(t, 0)
		}
		function Fe(t, e, i) {
			for (var n = i.length, r = -1, s = lr(t.length - n, 0), o = -1, a = e.length, l = Tn(s + a); ++o < a;) l[o] = e[o];
			for (; ++r < n;) l[i[r]] = t[r];
			for (; s--;) l[o++] = t[r++];
			return l
		}
		function $e(t, e, i) {
			for (var n = -1, r = i.length, s = -1, o = lr(t.length - r, 0), a = -1, l = e.length, c = Tn(o + l); ++s < o;) c[s] = t[s];
			for (o = s; ++a < l;) c[o + a] = e[a];
			for (; ++n < r;) c[o + i[n]] = t[s++];
			return c
		}
		function qe(t, e) {
			return function(i, n, r) {
				var s = e ? e() : {};
				if (n = ei(n, r, 3), Ir(i)) {
					r = -1;
					for (var o = i.length; ++r < o;) {
						var a = i[r];
						t(s, a, n(a, r, i), i)
					}
				} else se(i, function(e, i, r) {
					t(s, e, n(e, i, r), r)
				});
				return s
			}
		}
		function He(t) {
			return function() {
				var e = arguments,
					i = e.length,
					n = e[0];
				if (2 > i || null == n) return n;
				var r = e[i - 2],
					s = e[i - 1],
					o = e[3];
				for (i > 3 && "function" == typeof r ? (r = De(r, s, 5), i -= 2) : (r = i > 2 && "function" == typeof s ? s : null, i -= r ? 1 : 0), o && ai(e[1], e[2], o) && (r = 3 == i ? null : r, i = 2), s = 0; ++s < i;)(o = e[s]) && t(n, o, r);
				return n
			}
		}
		function Be(t, e) {
			function i() {
				return (this && this !== qt && this instanceof i ? n : t).apply(e, arguments)
			}
			var n = Ue(t);
			return i
		}
		function Xe(t) {
			return function() {
				var e = arguments.length,
					i = e,
					n = t ? e - 1 : 0;
				if (!e) return function(t) {
					return t
				};
				for (var r = Tn(e); i--;) if (r[i] = arguments[i], "function" != typeof r[i]) throw new On(N);
				return function() {
					for (var i = n, s = r[i].apply(this, arguments); t ? i-- : ++i < e;) s = r[i].call(this, s);
					return s
				}
			}
		}
		function ze(t) {
			return function(e) {
				var i = -1;
				e = mn(un(e));
				for (var n = e.length, r = ""; ++i < n;) r = t(r, e[i], i);
				return r
			}
		}
		function Ue(t) {
			return function() {
				var e = Tr(t.prototype),
					i = t.apply(e, arguments);
				return Ki(i) ? i : e
			}
		}
		function We(t, e) {
			return function(i, n, s) {
				s && ai(i, n, s) && (n = null);
				var o = ei(),
					a = null == n;
				if (o === ee && a || (a = !1, n = o(n, s, 3)), a) {
					if (n = Ir(i), n || !rn(i)) return t(n ? i : fi(i));
					n = r
				}
				return ti(i, n, e)
			}
		}
		function Ye(t, e, i, n, r, s, o, a, l, c) {
			function u() {
				for (var T = arguments.length, S = T, k = Tn(T); S--;) k[S] = arguments[S];
				if (n && (k = Fe(k, n, r)), s && (k = $e(k, s, o)), m || _) {
					var S = u.placeholder,
						C = f(k, S),
						T = T - C.length;
					if (c > T) {
						var A = a ? $t(a) : null,
							T = lr(c - T, 0),
							P = m ? C : null,
							C = m ? null : C,
							L = m ? k : null,
							k = m ? null : k;
						return e |= m ? E : j, e &= ~ (m ? j : E), g || (e &= ~ (w | x)), k = Ye(t, e, i, L, P, k, C, A, l, T), k.placeholder = S, k
					}
				}
				if (S = d ? i : this, p && (t = S[b]), a) for (A = k.length, T = cr(a.length, A), P = $t(k); T--;) C = a[T], k[T] = oi(C, A) ? P[C] : y;
				return h && l < k.length && (k.length = l), (this && this !== qt && this instanceof u ? v || Ue(t) : t).apply(S, k)
			}
			var h = e & A,
				d = e & w,
				p = e & x,
				m = e & S,
				g = e & T,
				_ = e & k,
				v = !p && Ue(t),
				b = t;
			return u
		}
		function Ve(t, e, i) {
			return t = t.length, e = +e, e > t && or(e) ? (e -= t, i = null == i ? " " : i + "", pn(i, Wn(e / i.length)).slice(0, e)) : ""
		}
		function Ge(t, e, i, n) {
			function r() {
				for (var e = -1, a = arguments.length, l = -1, c = n.length, u = Tn(a + c); ++l < c;) u[l] = n[l];
				for (; a--;) u[l++] = arguments[++e];
				return (this && this !== qt && this instanceof r ? o : t).apply(s ? i : this, u)
			}
			var s = e & w,
				o = Ue(t);
			return r
		}
		function Je(t, e, i, n, r, s, o, a) {
			var l = e & x;
			if (!l && "function" != typeof t) throw new On(N);
			var c = n ? n.length : 0;
			if (c || (e &= ~ (E | j), n = r = null), c -= r ? r.length : 0, e & j) {
				var u = n,
					h = r;
				n = r = null
			}
			var d = !l && Er(t);
			if (i = [t, e, i, n, r, u, h, s, o, a], d && !0 !== d) {
				n = i[1], e = d[1], a = n | e, s = A | C, r = w | x, o = s | r | T | k;
				var u = n & A && !(e & A),
					h = n & C && !(e & C),
					p = (h ? i : d)[7],
					m = (u ? i : d)[8];
				s = a >= s && o >= a && (C > n || (h || u) && p.length <= m), (!(n >= C && e > r || n > r && e >= C) || s) && (e & w && (i[2] = d[2], a |= n & w ? 0 : T), (n = d[3]) && (r = i[3], i[3] = r ? Fe(r, n, d[4]) : $t(n), i[4] = r ? f(i[3], F) : $t(d[4])), (n = d[5]) && (r = i[5], i[5] = r ? $e(r, n, d[6]) : $t(n), i[6] = r ? f(i[5], F) : $t(d[6])), (n = d[7]) && (i[7] = $t(n)), e & A && (i[8] = null == i[8] ? d[8] : cr(i[8], d[8])), null == i[9] && (i[9] = d[9]), i[0] = d[0], i[1] = a), e = i[1], a = i[9]
			}
			return i[9] = null == a ? l ? 0 : t.length : lr(a - c, 0) || 0, (d ? Sr : jr)(e == w ? Be(i[0], i[2]) : e != E && e != (w | E) || i[4].length ? Ye.apply(y, i) : Ge.apply(y, i), i)
		}
		function Qe(t, e, i, n, r, s, o) {
			var a = -1,
				l = t.length,
				c = e.length,
				u = !0;
			if (l != c && (!r || l >= c)) return !1;
			for (; u && ++a < l;) {
				var h = t[a],
					d = e[a],
					u = y;
				if (n && (u = r ? n(d, h, a) : n(h, d, a)), "undefined" == typeof u) if (r) for (var p = c; p-- && (d = e[p], !(u = h && h === d || i(h, d, n, r, s, o))););
				else u = h && h === d || i(h, d, n, r, s, o)
			}
			return !!u
		}
		function Ze(t, e, i) {
			switch (i) {
			case H:
			case B:
				return +t == +e;
			case X:
				return t.name == e.name && t.message == e.message;
			case U:
				return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
			case Y:
			case V:
				return t == e + ""
			}
			return !1
		}
		function Ke(t, e, i, n, r, s, o) {
			var a = qr(t),
				l = a.length,
				c = qr(e).length;
			if (l != c && !r) return !1;
			for (var u, c = -1; ++c < l;) {
				var h = a[c],
					d = $n.call(e, h);
				if (d) {
					var p = t[h],
						f = e[h],
						d = y;
					n && (d = r ? n(f, p, h) : n(p, f, h)), "undefined" == typeof d && (d = p && p === f || i(p, f, n, r, s, o))
				}
				if (!d) return !1;
				u || (u = "constructor" == h)
			}
			return u || (i = t.constructor, n = e.constructor, !(i != n && "constructor" in t && "constructor" in e) || "function" == typeof i && i instanceof i && "function" == typeof n && n instanceof n) ? !0 : !1
		}
		function ti(t, e, i) {
			var n = i ? mr : fr,
				r = n,
				s = r;
			return se(t, function(t, o, a) {
				o = e(t, o, a), ((i ? r > o : o > r) || o === n && o === s) && (r = o, s = t)
			}), s
		}
		function ei(t, e, i) {
			var n = Ot.callback || _n,
				n = n === _n ? ee : n;
			return i ? n(t, e, i) : n
		}
		function ii(t, i, n) {
			var r = Ot.indexOf || wi,
				r = r === wi ? e : r;
			return t ? r(t, i, n) : r
		}
		function ni(t) {
			var e = t.length,
				i = new t.constructor(e);
			return e && "string" == typeof t[0] && $n.call(t, "index") && (i.index = t.index, i.input = t.input), i
		}
		function ri(t) {
			return t = t.constructor, "function" == typeof t && t instanceof t || (t = An), new t
		}
		function si(t, e, i) {
			var n = t.constructor;
			switch (e) {
			case G:
				return Ne(t);
			case H:
			case B:
				return new n(+t);
			case J:
			case Q:
			case Z:
			case K:
			case tt:
			case et:
			case it:
			case nt:
			case rt:
				return e = t.buffer, new n(i ? Ne(e) : e, t.byteOffset, t.length);
			case U:
			case V:
				return new n(t);
			case Y:
				var r = new n(t.source, gt.exec(t));
				r.lastIndex = t.lastIndex
			}
			return r
		}
		function oi(t, e) {
			return t = +t, e = null == e ? br : e, t > -1 && 0 == t % 1 && e > t
		}
		function ai(t, e, i) {
			if (!Ki(i)) return !1;
			var n = typeof e;
			return "number" == n ? (n = i.length, n = li(n) && oi(e, n)) : n = "string" == n && e in i, n ? (e = i[e], t === t ? t === e : e !== e) : !1
		}
		function li(t) {
			return "number" == typeof t && t > -1 && 0 == t % 1 && br >= t
		}
		function ci(t) {
			return t === t && (0 === t ? 1 / t > 0 : !Ki(t))
		}
		function ui(t, e) {
			t = mi(t);
			for (var i = -1, n = e.length, r = {}; ++i < n;) {
				var s = e[i];
				s in t && (r[s] = t[s])
			}
			return r
		}
		function hi(t, e) {
			var i = {};
			return pe(t, function(t, n, r) {
				e(t, n, r) && (i[n] = t)
			}), i
		}
		function di(t) {
			var e;
			if (!d(t) || Hn.call(t) != W || !($n.call(t, "constructor") || (e = t.constructor, "function" != typeof e || e instanceof e))) return !1;
			var i;
			return pe(t, function(t, e) {
				i = e
			}), "undefined" == typeof i || $n.call(t, i)
		}
		function pi(t) {
			for (var e = ln(t), i = e.length, n = i && t.length, r = Ot.support, r = n && li(n) && (Ir(t) || r.nonEnumArgs && Ji(t)), s = -1, o = []; ++s < i;) {
				var a = e[s];
				(r && oi(a, n) || $n.call(t, a)) && o.push(a)
			}
			return o
		}
		function fi(t) {
			return null == t ? [] : li(t.length) ? Ki(t) ? t : An(t) : cn(t)
		}
		function mi(t) {
			return Ki(t) ? t : An(t)
		}
		function gi(t) {
			return t instanceof It ? t.clone() : new Mt(t.__wrapped__, t.__chain__, $t(t.__actions__))
		}
		function _i(t, e, i) {
			return t && t.length ? ((i ? ai(t, e, i) : null == e) && (e = 1), je(t, 0 > e ? 0 : e)) : []
		}
		function vi(t, e, i) {
			var n = t ? t.length : 0;
			return n ? ((i ? ai(t, e, i) : null == e) && (e = 1), e = n - (+e || 0), je(t, 0, 0 > e ? 0 : e)) : []
		}
		function yi(t, e, i) {
			var n = -1,
				r = t ? t.length : 0;
			for (e = ei(e, i, 3); ++n < r;) if (e(t[n], n, t)) return n;
			return -1
		}
		function bi(t) {
			return t ? t[0] : y
		}
		function wi(t, i, n) {
			var r = t ? t.length : 0;
			if (!r) return -1;
			if ("number" == typeof n) n = 0 > n ? lr(r + n, 0) : n;
			else if (n) return n = Me(t, i), t = t[n], (i === i ? i === t : t !== t) ? n : -1;
			return e(t, i, n || 0)
		}
		function xi(t) {
			var e = t ? t.length : 0;
			return e ? t[e - 1] : y
		}
		function Ti(t) {
			return _i(t, 1)
		}
		function Si(t, i, n, r) {
			if (!t || !t.length) return [];
			null != i && "boolean" != typeof i && (r = n, n = ai(t, i, r) ? null : i, i = !1);
			var s = ei();
			if ((s !== ee || null != n) && (n = s(n, r, 3)), i && ii() == e) {
				i = n;
				var o;
				n = -1, r = t.length;
				for (var s = -1, a = []; ++n < r;) {
					var l = t[n],
						c = i ? i(l, n, t) : l;
					n && o === c || (o = c, a[++s] = l)
				}
				t = a
			} else t = Le(t, n);
			return t
		}
		function ki(t) {
			for (var e = -1, i = (t && t.length && Wt(Ut(t, Fn))) >>> 0, n = Tn(i); ++e < i;) n[e] = Ut(t, Se(e));
			return n
		}
		function Ei(t, e) {
			var i = -1,
				n = t ? t.length : 0,
				r = {};
			for (!n || e || Ir(t[0]) || (e = []); ++i < n;) {
				var s = t[i];
				e ? r[s] = e[i] : s && (r[s[0]] = s[1])
			}
			return r
		}
		function ji(t) {
			return t = Ot(t), t.__chain__ = !0, t
		}
		function Ci(t, e, i) {
			return e.call(i, t)
		}
		function Ai(t, e, i) {
			var n = Ir(t) ? Xt : ae;
			return ("function" != typeof e || "undefined" != typeof i) && (e = ei(e, i, 3)), n(t, e)
		}
		function Pi(t, e, i) {
			var n = Ir(t) ? zt : le;
			return e = ei(e, i, 3), n(t, e)
		}
		function Li(t, e, i) {
			return Ir(t) ? (e = yi(t, e, i), e > -1 ? t[e] : y) : (e = ei(e, i, 3), ce(t, e, se))
		}
		function Oi(t, e, i) {
			return "function" == typeof e && "undefined" == typeof i && Ir(t) ? Bt(t, e) : se(t, De(e, i, 3))
		}
		function Ri(t, e, i) {
			if ("function" == typeof e && "undefined" == typeof i && Ir(t)) for (i = t.length; i-- && !1 !== e(t[i], i, t););
			else t = oe(t, De(e, i, 3));
			return t
		}
		function Mi(t, e, i) {
			var n = t ? t.length : 0;
			return li(n) || (t = cn(t), n = t.length), n ? (i = "number" == typeof i ? 0 > i ? lr(n + i, 0) : i || 0 : 0, "string" == typeof t || !Ir(t) && rn(t) ? n > i && -1 < t.indexOf(e, i) : -1 < ii(t, e, i)) : !1
		}
		function Ii(t, e, i) {
			var n = Ir(t) ? Ut : be;
			return e = ei(e, i, 3), n(t, e)
		}
		function Di(t, e, i, n) {
			return (Ir(t) ? Yt : Ee)(t, ei(e, n, 4), i, 3 > arguments.length, se)
		}
		function Ni(t, e, i, n) {
			return (Ir(t) ? Vt : Ee)(t, ei(e, n, 4), i, 3 > arguments.length, oe)
		}
		function Fi(t, e, i) {
			return (i ? ai(t, e, i) : null == e) ? (t = fi(t), e = t.length, e > 0 ? t[ke(0, e - 1)] : y) : (t = $i(t), t.length = cr(0 > e ? 0 : +e || 0, t.length), t)
		}
		function $i(t) {
			t = fi(t);
			for (var e = -1, i = t.length, n = Tn(i); ++e < i;) {
				var r = ke(0, e);
				e != r && (n[e] = n[r]), n[r] = t[e]
			}
			return n
		}
		function qi(t, e, i) {
			var n = Ir(t) ? Gt : Ce;
			return ("function" != typeof e || "undefined" != typeof i) && (e = ei(e, i, 3)), n(t, e)
		}
		function Hi(t, e) {
			var i;
			if ("function" != typeof e) {
				if ("function" != typeof t) throw new On(N);
				var n = t;
				t = e, e = n
			}
			return function() {
				return 0 < --t ? i = e.apply(this, arguments) : e = null, i
			}
		}
		function Bi(t, e) {
			var i = w;
			if (2 < arguments.length) var n = je(arguments, 2),
				r = f(n, Bi.placeholder),
				i = i | E;
			return Je(t, i, e, n, r)
		}
		function Xi(t, e) {
			var i = w | x;
			if (2 < arguments.length) var n = je(arguments, 2),
				r = f(n, Xi.placeholder),
				i = i | E;
			return Je(e, i, t, n, r)
		}
		function zi(t, e, i) {
			return i && ai(t, e, i) && (e = null), t = Je(t, S, null, null, null, null, null, e), t.placeholder = zi.placeholder, t
		}
		function Ui(t, e, i) {
			return i && ai(t, e, i) && (e = null), t = Je(t, k, null, null, null, null, null, e), t.placeholder = Ui.placeholder, t
		}
		function Wi(t, e, i) {
			function n() {
				var i = e - (Or() - c);
				0 >= i || i > e ? (a && Yn(a), i = d, a = h = d = y, i && (p = Or(), l = t.apply(u, o), h || a || (o = u = null))) : h = Kn(n, i)
			}
			function r() {
				h && Yn(h), a = h = d = y, (m || f !== e) && (p = Or(), l = t.apply(u, o), h || a || (o = u = null))
			}
			function s() {
				if (o = arguments, c = Or(), u = this, d = m && (h || !g), !1 === f) var i = g && !h;
				else {
					a || g || (p = c);
					var s = f - (c - p),
						_ = 0 >= s || s > f;
					_ ? (a && (a = Yn(a)), p = c, l = t.apply(u, o)) : a || (a = Kn(r, s))
				}
				return _ && h ? h = Yn(h) : h || e === f || (h = Kn(n, e)), i && (_ = !0, l = t.apply(u, o)), !_ || h || a || (o = u = null), l
			}
			var o, a, l, c, u, h, d, p = 0,
				f = !1,
				m = !0;
			if ("function" != typeof t) throw new On(N);
			if (e = 0 > e ? 0 : +e || 0, !0 === i) var g = !0,
				m = !1;
			else Ki(i) && (g = i.leading, f = "maxWait" in i && lr(+i.maxWait || 0, e), m = "trailing" in i ? i.trailing : m);
			return s.cancel = function() {
				h && Yn(h), a && Yn(a), a = h = d = y
			}, s
		}
		function Yi(t, e) {
			function i() {
				var n = arguments,
					r = i.cache,
					s = e ? e.apply(this, n) : n[0];
				return r.has(s) ? r.get(s) : (n = t.apply(this, n), r.set(s, n), n)
			}
			if ("function" != typeof t || e && "function" != typeof e) throw new On(N);
			return i.cache = new Yi.Cache, i
		}
		function Vi(t) {
			var e = je(arguments, 1),
				i = f(e, Vi.placeholder);
			return Je(t, E, null, e, i)
		}
		function Gi(t) {
			var e = je(arguments, 1),
				i = f(e, Gi.placeholder);
			return Je(t, j, null, e, i)
		}
		function Ji(t) {
			return li(d(t) ? t.length : y) && Hn.call(t) == $ || !1
		}
		function Qi(t) {
			return t && 1 === t.nodeType && d(t) && -1 < Hn.call(t).indexOf("Element") || !1
		}
		function Zi(t) {
			return d(t) && "string" == typeof t.message && Hn.call(t) == X || !1
		}
		function Ki(t) {
			var e = typeof t;
			return "function" == e || t && "object" == e || !1
		}
		function tn(t) {
			return null == t ? !1 : Hn.call(t) == z ? Xn.test(Nn.call(t)) : d(t) && yt.test(t) || !1
		}
		function en(t) {
			return "number" == typeof t || d(t) && Hn.call(t) == U || !1
		}
		function nn(t) {
			return d(t) && Hn.call(t) == Y || !1
		}
		function rn(t) {
			return "string" == typeof t || d(t) && Hn.call(t) == V || !1
		}
		function sn(t) {
			return d(t) && li(t.length) && At[Hn.call(t)] || !1
		}
		function on(t) {
			return te(t, ln(t))
		}
		function an(t) {
			return ge(t, ln(t))
		}
		function ln(t) {
			if (null == t) return [];
			Ki(t) || (t = An(t));
			for (var e = t.length, e = e && li(e) && (Ir(t) || xr.nonEnumArgs && Ji(t)) && e || 0, i = t.constructor, n = -1, i = "function" == typeof i && i.prototype === t, r = Tn(e), s = e > 0; ++n < e;) r[n] = n + "";
			for (var o in t) s && oi(o, e) || "constructor" == o && (i || !$n.call(t, o)) || r.push(o);
			return r
		}
		function cn(t) {
			return Oe(t, qr(t))
		}
		function un(t) {
			return (t = n(t)) && t.replace(bt, l)
		}
		function hn(t) {
			return (t = n(t)) && Tt.test(t) ? t.replace(xt, "\\$&") : t
		}
		function dn(t, e, i) {
			return i && ai(t, e, i) && (e = 0), dr(t, e)
		}
		function pn(t, e) {
			var i = "";
			if (t = n(t), e = +e, 1 > e || !t || !or(e)) return i;
			do e % 2 && (i += t), e = Vn(e / 2), t += t;
			while (e);
			return i
		}
		function fn(t, e, i) {
			var r = t;
			return (t = n(t)) ? (i ? ai(r, e, i) : null == e) ? t.slice(m(t), g(t) + 1) : (e += "", t.slice(s(t, e), o(t, e) + 1)) : t
		}
		function mn(t, e, i) {
			return i && ai(t, e, i) && (e = null), t = n(t), t.match(e || Et) || []
		}
		function gn() {
			for (var t = arguments[0], e = arguments.length, i = Tn(e ? e - 1 : 0); 0 < --e;) i[e - 1] = arguments[e];
			try {
				return t.apply(y, i)
			} catch (n) {
				return Zi(n) ? n : new kn(n)
			}
		}
		function _n(t, e, i) {
			return i && ai(t, e, i) && (e = null), d(t) ? bn(t) : ee(t, e)
		}
		function vn(t) {
			return function() {
				return t
			}
		}
		function yn(t) {
			return t
		}
		function bn(t) {
			return we(ie(t, !0))
		}
		function wn(t, e, i) {
			if (null == i) {
				var n = Ki(e),
					r = n && qr(e);
				((r = r && r.length && ge(e, r)) ? r.length : n) || (r = !1, i = e, e = t, t = this)
			}
			r || (r = ge(e, qr(e)));
			var s = !0,
				n = -1,
				o = Nr(t),
				a = r.length;
			!1 === i ? s = !1 : Ki(i) && "chain" in i && (s = i.chain);
			for (; ++n < a;) {
				i = r[n];
				var l = e[i];
				t[i] = l, o && (t.prototype[i] = function(e) {
					return function() {
						var i = this.__chain__;
						if (s || i) {
							var n = t(this.__wrapped__);
							return (n.__actions__ = $t(this.__actions__)).push({
								func: e,
								args: arguments,
								thisArg: t
							}), n.__chain__ = i, n
						}
						return i = [this.value()], Jn.apply(i, arguments), e.apply(t, i)
					}
				}(l))
			}
			return t
		}
		function xn() {}
		p = p ? Ht.defaults(qt.Object(), p, Ht.pick(qt, Ct)) : qt;
		var Tn = p.Array,
			Sn = p.Date,
			kn = p.Error,
			En = p.Function,
			jn = p.Math,
			Cn = p.Number,
			An = p.Object,
			Pn = p.RegExp,
			Ln = p.String,
			On = p.TypeError,
			Rn = Tn.prototype,
			Mn = An.prototype,
			In = Ln.prototype,
			Dn = (Dn = p.window) && Dn.document,
			Nn = En.prototype.toString,
			Fn = Se("length"),
			$n = Mn.hasOwnProperty,
			qn = 0,
			Hn = Mn.toString,
			Bn = p._,
			Xn = Pn("^" + hn(Hn).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			zn = tn(zn = p.ArrayBuffer) && zn,
			Un = tn(Un = zn && new zn(0).slice) && Un,
			Wn = jn.ceil,
			Yn = p.clearTimeout,
			Vn = jn.floor,
			Gn = tn(Gn = An.getPrototypeOf) && Gn,
			Jn = Rn.push,
			Qn = Mn.propertyIsEnumerable,
			Zn = tn(Zn = p.Set) && Zn,
			Kn = p.setTimeout,
			tr = Rn.splice,
			er = tn(er = p.Uint8Array) && er,
			ir = tn(ir = p.WeakMap) && ir,
			nr = function() {
				try {
					var t = tn(t = p.Float64Array) && t,
						e = new t(new zn(10), 0, 1) && t
				} catch (i) {}
				return e
			}(),
			rr = tn(rr = Tn.isArray) && rr,
			sr = tn(sr = An.create) && sr,
			or = p.isFinite,
			ar = tn(ar = An.keys) && ar,
			lr = jn.max,
			cr = jn.min,
			ur = tn(ur = Sn.now) && ur,
			hr = tn(hr = Cn.isFinite) && hr,
			dr = p.parseInt,
			pr = jn.random,
			fr = Cn.NEGATIVE_INFINITY,
			mr = Cn.POSITIVE_INFINITY,
			gr = jn.pow(2, 32) - 1,
			_r = gr - 1,
			vr = gr >>> 1,
			yr = nr ? nr.BYTES_PER_ELEMENT : 0,
			br = jn.pow(2, 53) - 1,
			wr = ir && new ir,
			xr = Ot.support = {};
		!
		function(t) {
			xr.funcDecomp = !tn(p.WinRTError) && St.test(v), xr.funcNames = "string" == typeof En.name;
			try {
				xr.dom = 11 === Dn.createDocumentFragment().nodeType
			} catch (e) {
				xr.dom = !1
			}
			try {
				xr.nonEnumArgs = !Qn.call(arguments, 1)
			} catch (i) {
				xr.nonEnumArgs = !0
			}
		}(0, 0), Ot.templateSettings = {
			escape: dt,
			evaluate: pt,
			interpolate: ft,
			variable: "",
			imports: {
				_: Ot
			}
		};
		var Tr = function() {
				function t() {}
				return function(e) {
					if (Ki(e)) {
						t.prototype = e;
						var i = new t;
						t.prototype = null
					}
					return i || p.Object()
				}
			}(),
			Sr = wr ?
		function(t, e) {
			return wr.set(t, e), t
		} : yn;
		Un || (Ne = zn && er ?
		function(t) {
			var e = t.byteLength,
				i = nr ? Vn(e / yr) : 0,
				n = i * yr,
				r = new zn(e);
			if (i) {
				var s = new nr(r, 0, i);
				s.set(new nr(t, 0, i))
			}
			return e != n && (s = new er(r, n), s.set(new er(t, n))), r
		} : vn(null));
		var kr = sr && Zn ?
		function(t) {
			return new Nt(t)
		} : vn(null), Er = wr ?
		function(t) {
			return wr.get(t)
		} : xn, jr = function() {
			var t = 0,
				e = 0;
			return function(i, n) {
				var r = Or(),
					s = R - (r - e);
				if (e = r, s > 0) {
					if (++t >= O) return i
				} else t = 0;
				return Sr(i, n)
			}
		}(), Cr = qe(function(t, e, i) {
			$n.call(t, i) ? ++t[i] : t[i] = 1
		}), Ar = qe(function(t, e, i) {
			$n.call(t, i) ? t[i].push(e) : t[i] = [e]
		}), Pr = qe(function(t, e, i) {
			t[i] = e
		}), Lr = qe(function(t, e, i) {
			t[i ? 0 : 1].push(e)
		}, function() {
			return [[], []]
		}), Or = ur ||
		function() {
			return (new Sn).getTime()
		}, Rr = Xe(), Mr = Xe(!0), Ir = rr ||
		function(t) {
			return d(t) && li(t.length) && Hn.call(t) == q || !1
		};
		xr.dom || (Qi = function(t) {
			return t && 1 === t.nodeType && d(t) && !Fr(t) || !1
		});
		var Dr = hr ||
		function(t) {
			return "number" == typeof t && or(t)
		}, Nr = i(/x/) || er && !i(er) ?
		function(t) {
			return Hn.call(t) == z
		} : i, Fr = Gn ?
		function(t) {
			if (!t || Hn.call(t) != W) return !1;
			var e = t.valueOf,
				i = tn(e) && (i = Gn(e)) && Gn(i);
			return i ? t == i || Gn(t) == i : di(t)
		} : di, $r = He(Zt), qr = ar ?
		function(t) {
			if (t) var e = t.constructor,
				i = t.length;
			return "function" == typeof e && e.prototype === t || "function" != typeof t && i && li(i) ? pi(t) : Ki(t) ? ar(t) : []
		} : pi, Hr = He(Te), Br = ze(function(t, e, i) {
			return e = e.toLowerCase(), t + (i ? e.charAt(0).toUpperCase() + e.slice(1) : e)
		}), Xr = ze(function(t, e, i) {
			return t + (i ? "-" : "") + e.toLowerCase()
		});
		8 != dr(jt + "08") && (dn = function(t, e, i) {
			return (i ? ai(t, e, i) : null == e) ? e = 0 : e && (e = +e), t = fn(t), dr(t, e || (vt.test(t) ? 16 : 10))
		});
		var zr = ze(function(t, e, i) {
			return t + (i ? "_" : "") + e.toLowerCase()
		}),
			Ur = ze(function(t, e, i) {
				return t + (i ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
			}),
			Wr = We(Wt),
			Yr = We(function(t) {
				for (var e = -1, i = t.length, n = mr; ++e < i;) {
					var r = t[e];
					n > r && (n = r)
				}
				return n
			}, !0);
		return Ot.prototype = Rt.prototype, Mt.prototype = Tr(Rt.prototype), Mt.prototype.constructor = Mt, It.prototype = Tr(Rt.prototype), It.prototype.constructor = It, Dt.prototype["delete"] = function(t) {
			return this.has(t) && delete this.__data__[t]
		}, Dt.prototype.get = function(t) {
			return "__proto__" == t ? y : this.__data__[t]
		}, Dt.prototype.has = function(t) {
			return "__proto__" != t && $n.call(this.__data__, t)
		}, Dt.prototype.set = function(t, e) {
			return "__proto__" != t && (this.__data__[t] = e), this
		}, Nt.prototype.push = function(t) {
			var e = this.data;
			"string" == typeof t || Ki(t) ? e.set.add(t) : e.hash[t] = !0
		}, Yi.Cache = Dt, Ot.after = function(t, e) {
			if ("function" != typeof e) {
				if ("function" != typeof t) throw new On(N);
				var i = t;
				t = e, e = i
			}
			return t = or(t = +t) ? t : 0, function() {
				return 1 > --t ? e.apply(this, arguments) : void 0
			}
		}, Ot.ary = function(t, e, i) {
			return i && ai(t, e, i) && (e = null), e = t && null == e ? t.length : lr(+e || 0, 0), Je(t, A, null, null, null, null, e)
		}, Ot.assign = $r, Ot.at = function(t) {
			return li(t ? t.length : 0) && (t = fi(t)), Kt(t, ue(arguments, !1, !1, 1))
		}, Ot.before = Hi, Ot.bind = Bi, Ot.bindAll = function(t) {
			for (var e = t, i = 1 < arguments.length ? ue(arguments, !1, !1, 1) : an(t), n = -1, r = i.length; ++n < r;) {
				var s = i[n];
				e[s] = Je(e[s], w, e)
			}
			return e
		}, Ot.bindKey = Xi, Ot.callback = _n, Ot.chain = ji, Ot.chunk = function(t, e, i) {
			e = (i ? ai(t, e, i) : null == e) ? 1 : lr(+e || 1, 1), i = 0;
			for (var n = t ? t.length : 0, r = -1, s = Tn(Wn(n / e)); n > i;) s[++r] = je(t, i, i += e);
			return s
		}, Ot.compact = function(t) {
			for (var e = -1, i = t ? t.length : 0, n = -1, r = []; ++e < i;) {
				var s = t[e];
				s && (r[++n] = s)
			}
			return r
		}, Ot.constant = vn, Ot.countBy = Cr, Ot.create = function(t, e, i) {
			var n = Tr(t);
			return i && ai(t, e, i) && (e = null), e ? te(e, n, qr(e)) : n
		}, Ot.curry = zi, Ot.curryRight = Ui, Ot.debounce = Wi, Ot.defaults = function(t) {
			if (null == t) return t;
			var e = $t(arguments);
			return e.push(Jt), $r.apply(y, e)
		}, Ot.defer = function(t) {
			return ne(t, 1, arguments, 1)
		}, Ot.delay = function(t, e) {
			return ne(t, e, arguments, 2)
		}, Ot.difference = function() {
			for (var t = arguments, e = -1, i = t.length; ++e < i;) {
				var n = t[e];
				if (Ir(n) || Ji(n)) break
			}
			return re(n, ue(t, !1, !0, ++e))
		}, Ot.drop = _i, Ot.dropRight = vi, Ot.dropRightWhile = function(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return [];
			for (e = ei(e, i, 3); n-- && e(t[n], n, t););
			return je(t, 0, n + 1)
		}, Ot.dropWhile = function(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return [];
			var r = -1;
			for (e = ei(e, i, 3); ++r < n && e(t[r], r, t););
			return je(t, r)
		}, Ot.fill = function(t, e, i, n) {
			var r = t ? t.length : 0;
			if (!r) return [];
			for (i && "number" != typeof i && ai(t, e, i) && (i = 0, n = r), r = t.length, i = null == i ? 0 : +i || 0, 0 > i && (i = -i > r ? 0 : r + i), n = "undefined" == typeof n || n > r ? r : +n || 0, 0 > n && (n += r), r = i > n ? 0 : n >>> 0, i >>>= 0; r > i;) t[i++] = e;
			return t
		}, Ot.filter = Pi, Ot.flatten = function(t, e, i) {
			var n = t ? t.length : 0;
			return i && ai(t, e, i) && (e = !1), n ? ue(t, e, !1, 0) : []
		}, Ot.flattenDeep = function(t) {
			return t && t.length ? ue(t, !0, !1, 0) : []
		}, Ot.flow = Rr, Ot.flowRight = Mr, Ot.forEach = Oi, Ot.forEachRight = Ri, Ot.forIn = function(t, e, i) {
			return ("function" != typeof e || "undefined" != typeof i) && (e = De(e, i, 3)), he(t, e, ln)
		}, Ot.forInRight = function(t, e, i) {
			return e = De(e, i, 3), de(t, e, ln)
		}, Ot.forOwn = function(t, e, i) {
			return ("function" != typeof e || "undefined" != typeof i) && (e = De(e, i, 3)), fe(t, e)
		}, Ot.forOwnRight = function(t, e, i) {
			return e = De(e, i, 3), de(t, e, qr)
		}, Ot.functions = an, Ot.groupBy = Ar, Ot.indexBy = Pr, Ot.initial = function(t) {
			return vi(t, 1)
		}, Ot.intersection = function() {
			for (var t = [], i = -1, n = arguments.length, r = [], s = ii(), o = s == e; ++i < n;) {
				var a = arguments[i];
				(Ir(a) || Ji(a)) && (t.push(a), r.push(o && 120 <= a.length ? kr(i && a) : null))
			}
			var n = t.length,
				o = t[0],
				l = -1,
				c = o ? o.length : 0,
				u = [],
				h = r[0];
			t: for (; ++l < c;) if (a = o[l], 0 > (h ? Ft(h, a) : s(u, a, 0))) {
				for (i = n; --i;) {
					var d = r[i];
					if (0 > (d ? Ft(d, a) : s(t[i], a, 0))) continue t
				}
				h && h.push(a), u.push(a)
			}
			return u
		}, Ot.invert = function(t, e, i) {
			i && ai(t, e, i) && (e = null), i = -1;
			for (var n = qr(t), r = n.length, s = {}; ++i < r;) {
				var o = n[i],
					a = t[o];
				e ? $n.call(s, a) ? s[a].push(o) : s[a] = [o] : s[a] = o
			}
			return s
		}, Ot.invoke = function(t, e) {
			return _e(t, e, je(arguments, 2))
		}, Ot.keys = qr, Ot.keysIn = ln, Ot.map = Ii, Ot.mapValues = function(t, e, i) {
			var n = {};
			return e = ei(e, i, 3), fe(t, function(t, i, r) {
				n[i] = e(t, i, r)
			}), n
		}, Ot.matches = bn, Ot.matchesProperty = function(t, e) {
			return xe(t + "", ie(e, !0))
		}, Ot.memoize = Yi, Ot.merge = Hr, Ot.mixin = wn, Ot.negate = function(t) {
			if ("function" != typeof t) throw new On(N);
			return function() {
				return !t.apply(this, arguments)
			}
		}, Ot.omit = function(t, e, i) {
			if (null == t) return {};
			if ("function" != typeof e) {
				var n = Ut(ue(arguments, !1, !1, 1), Ln);
				return ui(t, re(ln(t), n))
			}
			return e = De(e, i, 3), hi(t, function(t, i, n) {
				return !e(t, i, n)
			})
		}, Ot.once = function(t) {
			return Hi(t, 2)
		}, Ot.pairs = function(t) {
			for (var e = -1, i = qr(t), n = i.length, r = Tn(n); ++e < n;) {
				var s = i[e];
				r[e] = [s, t[s]]
			}
			return r
		}, Ot.partial = Vi, Ot.partialRight = Gi, Ot.partition = Lr, Ot.pick = function(t, e, i) {
			return null == t ? {} : "function" == typeof e ? hi(t, De(e, i, 3)) : ui(t, ue(arguments, !1, !1, 1))
		}, Ot.pluck = function(t, e) {
			return Ii(t, Se(e))
		}, Ot.property = function(t) {
			return Se(t + "")
		}, Ot.propertyOf = function(t) {
			return function(e) {
				return null == t ? y : t[e]
			}
		}, Ot.pull = function() {
			var t = arguments,
				e = t[0];
			if (!e || !e.length) return e;
			for (var i = 0, n = ii(), r = t.length; ++i < r;) for (var s = 0, o = t[i]; - 1 < (s = n(e, o, s));) tr.call(e, s, 1);
			return e
		}, Ot.pullAt = function(e) {
			var i = e || [],
				n = ue(arguments, !1, !1, 1),
				r = n.length,
				s = Kt(i, n);
			for (n.sort(t); r--;) {
				var o = parseFloat(n[r]);
				if (o != a && oi(o)) {
					var a = o;
					tr.call(i, o, 1)
				}
			}
			return s
		}, Ot.range = function(t, e, i) {
			i && ai(t, e, i) && (e = i = null), t = +t || 0, i = null == i ? 1 : +i || 0, null == e ? (e = t, t = 0) : e = +e || 0;
			var n = -1;
			e = lr(Wn((e - t) / (i || 1)), 0);
			for (var r = Tn(e); ++n < e;) r[n] = t, t += i;
			return r
		}, Ot.rearg = function(t) {
			var e = ue(arguments, !1, !1, 1);
			return Je(t, C, null, null, null, e)
		}, Ot.reject = function(t, e, i) {
			var n = Ir(t) ? zt : le;
			return e = ei(e, i, 3), n(t, function(t, i, n) {
				return !e(t, i, n)
			})
		}, Ot.remove = function(t, e, i) {
			var n = -1,
				r = t ? t.length : 0,
				s = [];
			for (e = ei(e, i, 3); ++n < r;) i = t[n], e(i, n, t) && (s.push(i), tr.call(t, n--, 1), r--);
			return s
		}, Ot.rest = Ti, Ot.shuffle = $i, Ot.slice = function(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (i && "number" != typeof i && ai(t, e, i) && (e = 0, i = n), je(t, e, i)) : []
		}, Ot.sortBy = function(t, e, i) {
			if (null == t) return [];
			var n = -1,
				r = t.length,
				s = li(r) ? Tn(r) : [];
			return i && ai(t, e, i) && (e = null), e = ei(e, i, 3), se(t, function(t, i, r) {
				s[++n] = {
					a: e(t, i, r),
					b: n,
					c: t
				}
			}), Ae(s, a)
		}, Ot.sortByAll = function(t) {
			if (null == t) return [];
			var e = arguments,
				i = e[3];
			return i && ai(e[1], e[2], i) && (e = [t, e[1]]), Pe(t, ue(e, !1, !1, 1), [])
		}, Ot.sortByOrder = function(t, e, i, n) {
			return null == t ? [] : (n && ai(e, i, n) && (i = null), Ir(e) || (e = null == e ? [] : [e]), Ir(i) || (i = null == i ? [] : [i]), Pe(t, e, i))
		}, Ot.spread = function(t) {
			if ("function" != typeof t) throw new On(N);
			return function(e) {
				return t.apply(this, e)
			}
		}, Ot.take = function(t, e, i) {
			return t && t.length ? ((i ? ai(t, e, i) : null == e) && (e = 1), je(t, 0, 0 > e ? 0 : e)) : []
		}, Ot.takeRight = function(t, e, i) {
			var n = t ? t.length : 0;
			return n ? ((i ? ai(t, e, i) : null == e) && (e = 1), e = n - (+e || 0), je(t, 0 > e ? 0 : e)) : []
		}, Ot.takeRightWhile = function(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return [];
			for (e = ei(e, i, 3); n-- && e(t[n], n, t););
			return je(t, n + 1)
		}, Ot.takeWhile = function(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return [];
			var r = -1;
			for (e = ei(e, i, 3); ++r < n && e(t[r], r, t););
			return je(t, 0, r)
		}, Ot.tap = function(t, e, i) {
			return e.call(i, t), t
		}, Ot.throttle = function(t, e, i) {
			var n = !0,
				r = !0;
			if ("function" != typeof t) throw new On(N);
			return !1 === i ? n = !1 : Ki(i) && (n = "leading" in i ? !! i.leading : n, r = "trailing" in i ? !! i.trailing : r), Lt.leading = n, Lt.maxWait = +e, Lt.trailing = r, Wi(t, e, Lt)
		}, Ot.thru = Ci, Ot.times = function(t, e, i) {
			if (t = +t, 1 > t || !or(t)) return [];
			var n = -1,
				r = Tn(cr(t, gr));
			for (e = De(e, i, 1); ++n < t;) gr > n ? r[n] = e(n) : e(n);
			return r
		}, Ot.toArray = function(t) {
			var e = t ? t.length : 0;
			return li(e) ? e ? $t(t) : [] : cn(t)
		}, Ot.toPlainObject = on, Ot.transform = function(t, e, i, n) {
			var r = Ir(t) || sn(t);
			return e = ei(e, n, 4), null == i && (r || Ki(t) ? (n = t.constructor, i = r ? Ir(t) ? new n : [] : Tr(Nr(n) && n.prototype)) : i = {}), (r ? Bt : fe)(t, function(t, n, r) {
				return e(i, t, n, r)
			}), i
		}, Ot.union = function() {
			return Le(ue(arguments, !1, !0, 0))
		}, Ot.uniq = Si, Ot.unzip = ki, Ot.values = cn, Ot.valuesIn = function(t) {
			return Oe(t, ln(t))
		}, Ot.where = function(t, e) {
			return Pi(t, we(e))
		}, Ot.without = function(t) {
			return re(t, je(arguments, 1))
		}, Ot.wrap = function(t, e) {
			return e = null == e ? yn : e, Je(e, E, null, [t], [])
		}, Ot.xor = function() {
			for (var t = -1, e = arguments.length; ++t < e;) {
				var i = arguments[t];
				if (Ir(i) || Ji(i)) var n = n ? re(n, i).concat(re(i, n)) : i
			}
			return n ? Le(n) : []
		}, Ot.zip = function() {
			for (var t = arguments.length, e = Tn(t); t--;) e[t] = arguments[t];
			return ki(e)
		}, Ot.zipObject = Ei, Ot.backflow = Mr, Ot.collect = Ii, Ot.compose = Mr, Ot.each = Oi, Ot.eachRight = Ri, Ot.extend = $r, Ot.iteratee = _n, Ot.methods = an, Ot.object = Ei, Ot.select = Pi, Ot.tail = Ti, Ot.unique = Si, wn(Ot, Ot), Ot.add = function(t, e) {
			return t + e
		}, Ot.attempt = gn, Ot.camelCase = Br, Ot.capitalize = function(t) {
			return (t = n(t)) && t.charAt(0).toUpperCase() + t.slice(1)
		}, Ot.clone = function(t, e, i, n) {
			return e && "boolean" != typeof e && ai(t, e, i) ? e = !1 : "function" == typeof e && (n = i, i = e, e = !1), i = "function" == typeof i && De(i, n, 1), ie(t, e, i)
		}, Ot.cloneDeep = function(t, e, i) {
			return e = "function" == typeof e && De(e, i, 1), ie(t, !0, e)
		}, Ot.deburr = un, Ot.endsWith = function(t, e, i) {
			t = n(t), e += "";
			var r = t.length;
			return i = "undefined" == typeof i ? r : cr(0 > i ? 0 : +i || 0, r), i -= e.length, i >= 0 && t.indexOf(e, i) == i
		}, Ot.escape = function(t) {
			return (t = n(t)) && ht.test(t) ? t.replace(ct, c) : t
		}, Ot.escapeRegExp = hn, Ot.every = Ai, Ot.find = Li, Ot.findIndex = yi, Ot.findKey = function(t, e, i) {
			return e = ei(e, i, 3), ce(t, e, fe, !0)
		}, Ot.findLast = function(t, e, i) {
			return e = ei(e, i, 3), ce(t, e, oe)
		}, Ot.findLastIndex = function(t, e, i) {
			var n = t ? t.length : 0;
			for (e = ei(e, i, 3); n--;) if (e(t[n], n, t)) return n;
			return -1
		}, Ot.findLastKey = function(t, e, i) {
			return e = ei(e, i, 3), ce(t, e, me, !0)
		}, Ot.findWhere = function(t, e) {
			return Li(t, we(e))
		}, Ot.first = bi, Ot.has = function(t, e) {
			return t ? $n.call(t, e) : !1
		}, Ot.identity = yn, Ot.includes = Mi, Ot.indexOf = wi, Ot.inRange = function(t, e, i) {
			return e = +e || 0, "undefined" == typeof i ? (i = e, e = 0) : i = +i || 0, t >= e && i > t
		}, Ot.isArguments = Ji, Ot.isArray = Ir, Ot.isBoolean = function(t) {
			return !0 === t || !1 === t || d(t) && Hn.call(t) == H || !1
		}, Ot.isDate = function(t) {
			return d(t) && Hn.call(t) == B || !1
		}, Ot.isElement = Qi, Ot.isEmpty = function(t) {
			if (null == t) return !0;
			var e = t.length;
			return li(e) && (Ir(t) || rn(t) || Ji(t) || d(t) && Nr(t.splice)) ? !e : !qr(t).length
		}, Ot.isEqual = function(t, e, i, n) {
			return i = "function" == typeof i && De(i, n, 3), !i && ci(t) && ci(e) ? t === e : (n = i ? i(t, e) : y, "undefined" == typeof n ? ve(t, e, i) : !! n)
		}, Ot.isError = Zi, Ot.isFinite = Dr, Ot.isFunction = Nr, Ot.isMatch = function(t, e, i, n) {
			var r = qr(e),
				s = r.length;
			if (i = "function" == typeof i && De(i, n, 3), !i && 1 == s) {
				var o = r[0];
				if (n = e[o], ci(n)) return null != t && n === t[o] && $n.call(t, o)
			}
			for (var o = Tn(s), a = Tn(s); s--;) n = o[s] = e[r[s]], a[s] = ci(n);
			return ye(t, r, o, a, i)
		}, Ot.isNaN = function(t) {
			return en(t) && t != +t
		}, Ot.isNative = tn, Ot.isNull = function(t) {
			return null === t
		}, Ot.isNumber = en, Ot.isObject = Ki, Ot.isPlainObject = Fr, Ot.isRegExp = nn, Ot.isString = rn, Ot.isTypedArray = sn, Ot.isUndefined = function(t) {
			return "undefined" == typeof t
		}, Ot.kebabCase = Xr, Ot.last = xi, Ot.lastIndexOf = function(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return -1;
			var r = n;
			if ("number" == typeof i) r = (0 > i ? lr(n + i, 0) : cr(i || 0, n - 1)) + 1;
			else if (i) return r = Me(t, e, !0) - 1, t = t[r], (e === e ? e === t : t !== t) ? r : -1;
			if (e !== e) return h(t, r, !0);
			for (; r--;) if (t[r] === e) return r;
			return -1
		}, Ot.max = Wr, Ot.min = Yr, Ot.noConflict = function() {
			return p._ = Bn, this
		}, Ot.noop = xn, Ot.now = Or, Ot.pad = function(t, e, i) {
			t = n(t), e = +e;
			var r = t.length;
			return e > r && or(e) ? (r = (e - r) / 2, e = Vn(r), r = Wn(r), i = Ve("", r, i), i.slice(0, e) + t + i) : t
		}, Ot.padLeft = function(t, e, i) {
			return (t = n(t)) && Ve(t, e, i) + t
		}, Ot.padRight = function(t, e, i) {
			return (t = n(t)) && t + Ve(t, e, i)
		}, Ot.parseInt = dn, Ot.random = function(t, e, i) {
			i && ai(t, e, i) && (e = i = null);
			var n = null == t,
				r = null == e;
			return null == i && (r && "boolean" == typeof t ? (i = t, t = 1) : "boolean" == typeof e && (i = e, r = !0)), n && r && (e = 1, r = !1), t = +t || 0, r ? (e = t, t = 0) : e = +e || 0, i || t % 1 || e % 1 ? (i = pr(), cr(t + i * (e - t + parseFloat("1e-" + ((i + "").length - 1))), e)) : ke(t, e)
		}, Ot.reduce = Di, Ot.reduceRight = Ni, Ot.repeat = pn, Ot.result = function(t, e, i) {
			return e = null == t ? y : t[e], "undefined" == typeof e && (e = i), Nr(e) ? e.call(t) : e
		}, Ot.runInContext = v, Ot.size = function(t) {
			var e = t ? t.length : 0;
			return li(e) ? e : qr(t).length
		}, Ot.snakeCase = zr, Ot.some = qi, Ot.sortedIndex = function(t, e, i, n) {
			var r = ei(i);
			return r === ee && null == i ? Me(t, e) : Ie(t, e, r(i, n, 1))
		}, Ot.sortedLastIndex = function(t, e, i, n) {
			var r = ei(i);
			return r === ee && null == i ? Me(t, e, !0) : Ie(t, e, r(i, n, 1), !0)
		}, Ot.startCase = Ur, Ot.startsWith = function(t, e, i) {
			return t = n(t), i = null == i ? 0 : cr(0 > i ? 0 : +i || 0, t.length), t.lastIndexOf(e, i) == i
		}, Ot.sum = function(t) {
			Ir(t) || (t = fi(t));
			for (var e = t.length, i = 0; e--;) i += +t[e] || 0;
			return i
		}, Ot.template = function(t, e, i) {
			var r = Ot.templateSettings;
			i && ai(t, e, i) && (e = i = null), t = n(t), e = Zt(Zt({}, i || e), r, Qt), i = Zt(Zt({}, e.imports), r.imports, Qt);
			var s, o, a = qr(i),
				l = Oe(i, a),
				c = 0;
			i = e.interpolate || wt;
			var h = "__p+='";
			i = Pn((e.escape || wt).source + "|" + i.source + "|" + (i === ft ? mt : wt).source + "|" + (e.evaluate || wt).source + "|$", "g");
			var d = "sourceURL" in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
			if (t.replace(i, function(e, i, n, r, a, l) {
				return n || (n = r), h += t.slice(c, l).replace(kt, u), i && (s = !0, h += "'+__e(" + i + ")+'"), a && (o = !0, h += "';" + a + ";\n__p+='"), n && (h += "'+((__t=(" + n + "))==null?'':__t)+'"), c = l + e.length, e
			}), h += "';", (e = e.variable) || (h = "with(obj){" + h + "}"), h = (o ? h.replace(st, "") : h).replace(ot, "$1").replace(at, "$1;"), h = "function(" + (e || "obj") + "){" + (e ? "" : "obj||(obj={});") + "var __t,__p=''" + (s ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + h + "return __p}", e = gn(function() {
				return En(a, d + "return " + h).apply(y, l)
			}), e.source = h, Zi(e)) throw e;
			return e
		}, Ot.trim = fn, Ot.trimLeft = function(t, e, i) {
			var r = t;
			return (t = n(t)) ? t.slice((i ? ai(r, e, i) : null == e) ? m(t) : s(t, e + "")) : t
		}, Ot.trimRight = function(t, e, i) {
			var r = t;
			return (t = n(t)) ? (i ? ai(r, e, i) : null == e) ? t.slice(0, g(t) + 1) : t.slice(0, o(t, e + "") + 1) : t
		}, Ot.trunc = function(t, e, i) {
			i && ai(t, e, i) && (e = null);
			var r = P;
			if (i = L, null != e) if (Ki(e)) {
				var s = "separator" in e ? e.separator : s,
					r = "length" in e ? +e.length || 0 : r;
				i = "omission" in e ? n(e.omission) : i
			} else r = +e || 0;
			if (t = n(t), r >= t.length) return t;
			if (r -= i.length, 1 > r) return i;
			if (e = t.slice(0, r), null == s) return e + i;
			if (nn(s)) {
				if (t.slice(r).search(s)) {
					var o, a = t.slice(0, r);
					for (s.global || (s = Pn(s.source, (gt.exec(s) || "") + "g")), s.lastIndex = 0; t = s.exec(a);) o = t.index;
					e = e.slice(0, null == o ? r : o)
				}
			} else t.indexOf(s, r) != r && (s = e.lastIndexOf(s), s > -1 && (e = e.slice(0, s)));
			return e + i
		}, Ot.unescape = function(t) {
			return (t = n(t)) && ut.test(t) ? t.replace(lt, _) : t
		}, Ot.uniqueId = function(t) {
			var e = ++qn;
			return n(t) + e
		}, Ot.words = mn, Ot.all = Ai, Ot.any = qi, Ot.contains = Mi, Ot.detect = Li, Ot.foldl = Di, Ot.foldr = Ni, Ot.head = bi, Ot.include = Mi, Ot.inject = Di, wn(Ot, function() {
			var t = {};
			return fe(Ot, function(e, i) {
				Ot.prototype[i] || (t[i] = e)
			}), t
		}(), !1), Ot.sample = Fi, Ot.prototype.sample = function(t) {
			return this.__chain__ || null != t ? this.thru(function(e) {
				return Fi(e, t)
			}) : Fi(this.value())
		}, Ot.VERSION = b, Bt("bind bindKey curry curryRight partial partialRight".split(" "), function(t) {
			Ot[t].placeholder = Ot
		}), Bt(["dropWhile", "filter", "map", "takeWhile"], function(t, e) {
			var i = e != D,
				n = e == M;
			It.prototype[t] = function(t, r) {
				var s = this.__filtered__,
					o = s && n ? new It(this) : this.clone();
				return (o.__iteratees__ || (o.__iteratees__ = [])).push({
					done: !1,
					count: 0,
					index: 0,
					iteratee: ei(t, r, 1),
					limit: -1,
					type: e
				}), o.__filtered__ = s || i, o
			}
		}), Bt(["drop", "take"], function(t, e) {
			var i = t + "While";
			It.prototype[t] = function(i) {
				var n = this.__filtered__,
					r = n && !e ? this.dropWhile() : this.clone();
				return i = null == i ? 1 : lr(Vn(i) || 0, 0), n ? e ? r.__takeCount__ = cr(r.__takeCount__, i) : xi(r.__iteratees__).limit = i : (r.__views__ || (r.__views__ = [])).push({
					size: i,
					type: t + (0 > r.__dir__ ? "Right" : "")
				}), r
			}, It.prototype[t + "Right"] = function(e) {
				return this.reverse()[t](e).reverse()
			}, It.prototype[t + "RightWhile"] = function(t, e) {
				return this.reverse()[i](t, e).reverse()
			}
		}), Bt(["first", "last"], function(t, e) {
			var i = "take" + (e ? "Right" : "");
			It.prototype[t] = function() {
				return this[i](1).value()[0]
			}
		}), Bt(["initial", "rest"], function(t, e) {
			var i = "drop" + (e ? "" : "Right");
			It.prototype[t] = function() {
				return this[i](1)
			}
		}), Bt(["pluck", "where"], function(t, e) {
			var i = e ? "filter" : "map",
				n = e ? we : Se;
			It.prototype[t] = function(t) {
				return this[i](n(t))
			}
		}), It.prototype.compact = function() {
			return this.filter(yn)
		}, It.prototype.reject = function(t, e) {
			return t = ei(t, e, 1), this.filter(function(e) {
				return !t(e)
			})
		}, It.prototype.slice = function(t, e) {
			t = null == t ? 0 : +t || 0;
			var i = 0 > t ? this.takeRight(-t) : this.drop(t);
			return "undefined" != typeof e && (e = +e || 0, i = 0 > e ? i.dropRight(-e) : i.take(e - t)), i
		}, It.prototype.toArray = function() {
			return this.drop(0)
		}, fe(It.prototype, function(t, e) {
			var i = Ot[e],
				n = /^(?:filter|map|reject)|While$/.test(e),
				r = /^(?:first|last)$/.test(e);
			Ot.prototype[e] = function() {
				function e(t) {
					return t = [t], Jn.apply(t, s), i.apply(Ot, t)
				}
				var s = arguments,
					o = this.__chain__,
					a = this.__wrapped__,
					l = !! this.__actions__.length,
					c = a instanceof It,
					u = s[0],
					h = c || Ir(a);
				return h && n && "function" == typeof u && 1 != u.length && (c = h = !1), c = c && !l, r && !o ? c ? t.call(a) : i.call(Ot, this.value()) : h ? (a = t.apply(c ? a : new It(this), s), r || !l && !a.__actions__ || (a.__actions__ || (a.__actions__ = [])).push({
					func: Ci,
					args: [e],
					thisArg: Ot
				}), new Mt(a, o)) : this.thru(e)
			}
		}), Bt("concat join pop push replace shift sort splice split unshift".split(" "), function(t) {
			var e = (/^(?:replace|split)$/.test(t) ? In : Rn)[t],
				i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
				n = /^(?:join|pop|replace|shift)$/.test(t);
			Ot.prototype[t] = function() {
				var t = arguments;
				return n && !this.__chain__ ? e.apply(this.value(), t) : this[i](function(i) {
					return e.apply(i, t)
				})
			}
		}), It.prototype.clone = function() {
			var t = this.__actions__,
				e = this.__iteratees__,
				i = this.__views__,
				n = new It(this.__wrapped__);
			return n.__actions__ = t ? $t(t) : null, n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = e ? $t(e) : null, n.__takeCount__ = this.__takeCount__, n.__views__ = i ? $t(i) : null, n
		}, It.prototype.reverse = function() {
			if (this.__filtered__) {
				var t = new It(this);
				t.__dir__ = -1, t.__filtered__ = !0
			} else t = this.clone(), t.__dir__ *= -1;
			return t
		}, It.prototype.value = function() {
			var t = this.__wrapped__.value();
			if (!Ir(t)) return Re(t, this.__actions__);
			var e, i = this.__dir__,
				n = 0 > i;
			e = t.length;
			for (var r = this.__views__, s = 0, o = -1, a = r ? r.length : 0; ++o < a;) {
				var l = r[o],
					c = l.size;
				switch (l.type) {
				case "drop":
					s += c;
					break;
				case "dropRight":
					e -= c;
					break;
				case "take":
					e = cr(e, s + c);
					break;
				case "takeRight":
					s = lr(s, e - c)
				}
			}
			e = {
				start: s,
				end: e
			}, r = e.start, s = e.end, e = s - r, r = n ? s : r - 1, s = cr(e, this.__takeCount__), a = (o = this.__iteratees__) ? o.length : 0, l = 0, c = [];
			t: for (; e-- && s > l;) {
				for (var r = r + i, u = -1, h = t[r]; ++u < a;) {
					var d = o[u],
						p = d.iteratee,
						f = d.type;
					if (f == M) {
						if (d.done && (n ? r > d.index : r < d.index) && (d.count = 0, d.done = !1), d.index = r, !(d.done || (f = d.limit, d.done = f > -1 ? d.count++ >= f : !p(h)))) continue t
					} else if (d = p(h), f == D) h = d;
					else if (!d) {
						if (f == I) continue t;
						break t
					}
				}
				c[l++] = h
			}
			return c
		}, Ot.prototype.chain = function() {
			return ji(this)
		}, Ot.prototype.commit = function() {
			return new Mt(this.value(), this.__chain__)
		}, Ot.prototype.plant = function(t) {
			for (var e, i = this; i instanceof Rt;) {
				var n = gi(i);
				e ? r.__wrapped__ = n : e = n;
				var r = n,
					i = i.__wrapped__
			}
			return r.__wrapped__ = t, e
		}, Ot.prototype.reverse = function() {
			var t = this.__wrapped__;
			return t instanceof It ? (this.__actions__.length && (t = new It(this)), new Mt(t.reverse(), this.__chain__)) : this.thru(function(t) {
				return t.reverse()
			})
		}, Ot.prototype.toString = function() {
			return this.value() + ""
		}, Ot.prototype.run = Ot.prototype.toJSON = Ot.prototype.valueOf = Ot.prototype.value = function() {
			return Re(this.__wrapped__, this.__actions__)
		}, Ot.prototype.collect = Ot.prototype.map, Ot.prototype.head = Ot.prototype.first, Ot.prototype.select = Ot.prototype.filter, Ot.prototype.tail = Ot.prototype.rest, Ot
	}
	var y, b = "3.5.0",
		w = 1,
		x = 2,
		T = 4,
		S = 8,
		k = 16,
		E = 32,
		j = 64,
		C = 128,
		A = 256,
		P = 30,
		L = "...",
		O = 150,
		R = 16,
		M = 0,
		I = 1,
		D = 2,
		N = "Expected a function",
		F = "__lodash_placeholder__",
		$ = "[object Arguments]",
		q = "[object Array]",
		H = "[object Boolean]",
		B = "[object Date]",
		X = "[object Error]",
		z = "[object Function]",
		U = "[object Number]",
		W = "[object Object]",
		Y = "[object RegExp]",
		V = "[object String]",
		G = "[object ArrayBuffer]",
		J = "[object Float32Array]",
		Q = "[object Float64Array]",
		Z = "[object Int8Array]",
		K = "[object Int16Array]",
		tt = "[object Int32Array]",
		et = "[object Uint8Array]",
		it = "[object Uint8ClampedArray]",
		nt = "[object Uint16Array]",
		rt = "[object Uint32Array]",
		st = /\b__p\+='';/g,
		ot = /\b(__p\+=)''\+/g,
		at = /(__e\(.*?\)|\b__t\))\+'';/g,
		lt = /&(?:amp|lt|gt|quot|#39|#96);/g,
		ct = /[&<>"'`]/g,
		ut = RegExp(lt.source),
		ht = RegExp(ct.source),
		dt = /<%-([\s\S]+?)%>/g,
		pt = /<%([\s\S]+?)%>/g,
		ft = /<%=([\s\S]+?)%>/g,
		mt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
		gt = /\w*$/,
		_t = /^\s*function[ \n\r\t]+\w/,
		vt = /^0[xX]/,
		yt = /^\[object .+?Constructor\]$/,
		bt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
		wt = /($^)/,
		xt = /[.*+?^${}()|[\]\/\\]/g,
		Tt = RegExp(xt.source),
		St = /\bthis\b/,
		kt = /['\n\r\u2028\u2029\\]/g,
		Et = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
		jt = " 	\fè½\ufeff\n\r\u2028\u2029é‡Ÿâ‚¬é‡¥åº˜â‚¬â‚¬éˆ¥ä½²â‚¬å‚—â‚¬å†£â‚¬å‹¨â‚¬å‘ªâ‚¬å—â‚¬å›£â‚¬å šâ‚¬å¤†â‚¬å¨¾â‚¬îˆ—ä»§éŠ†â‚¬",
		Ct = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window WinRTError".split(" "),
		At = {};
	At[J] = At[Q] = At[Z] = At[K] = At[tt] = At[et] = At[it] = At[nt] = At[rt] = !0, At[$] = At[q] = At[G] = At[H] = At[B] = At[X] = At[z] = At["[object Map]"] = At[U] = At[W] = At[Y] = At["[object Set]"] = At[V] = At["[object WeakMap]"] = !1;
	var Pt = {};
	Pt[$] = Pt[q] = Pt[G] = Pt[H] = Pt[B] = Pt[J] = Pt[Q] = Pt[Z] = Pt[K] = Pt[tt] = Pt[U] = Pt[W] = Pt[Y] = Pt[V] = Pt[et] = Pt[it] = Pt[nt] = Pt[rt] = !0, Pt[X] = Pt[z] = Pt["[object Map]"] = Pt["[object Set]"] = Pt["[object WeakMap]"] = !1;
	var Lt = {
		leading: !1,
		maxWait: 0,
		trailing: !1
	},
		Ot = {
			"è„Œ": "A",
			"è„•": "A",
			"è„—": "A",
			"è„™": "A",
			"è„›": "A",
			"è„œ": "A",
			"è„¿": "a",
			"è°©": "a",
			"èŠ’": "a",
			"èŒ«": "a",
			"ç›²": "a",
			"æ°“": "a",
			"è„Ÿ": "C",
			"èŽ½": "c",
			"è„¨": "D",
			"å†’": "d",
			"è„ ": "E",
			"è„¡": "E",
			"è„¢": "E",
			"è„£": "E",
			"çŒ«": "e",
			"èŒ…": "e",
			"é”š": "e",
			"æ¯›": "e",
			"è„¤": "I",
			"è„¥": "I",
			"è„¦": "I",
			"è„§": "I",
			"çŸ›": "i",
			"é“†": "i",
			"å¯": "i",
			"èŒ‚": "i",
			"è„©": "N",
			"å¸½": "n",
			"è„ª": "O",
			"è„«": "O",
			"è„­": "O",
			"è„®": "O",
			"è„°": "O",
			"è„´": "O",
			"è²Œ": "o",
			"è´¸": "o",
			"ä¹ˆ": "o",
			"çŽ«": "o",
			"æžš": "o",
			"é…¶": "o",
			"è„µ": "U",
			"è„·": "U",
			"è„¹": "U",
			"è„º": "U",
			"éœ‰": "u",
			"ç…¤": "u",
			"æ²¡": "u",
			"çœ‰": "u",
			"è„»": "Y",
			"åª’": "y",
			"æ¯": "y",
			"è„": "Ae",
			"å¿™": "ae",
			"è„¼": "Th",
			"é•": "th",
			"è„½": "ss"
		},
		Rt = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"`": "&#96;"
		},
		Mt = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": '"',
			"&#39;": "'",
			"&#96;": "`"
		},
		It = {
			"function": !0,
			object: !0
		},
		Dt = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		Nt = It[typeof exports] && exports && !exports.nodeType && exports,
		Ft = It[typeof module] && module && !module.nodeType && module,
		It = It[typeof window] && window,
		$t = Ft && Ft.exports === Nt && Nt,
		qt = Nt && Ft && "object" == typeof global && global || It !== (this && this.window) && It || this,
		Ht = v();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (qt._ = Ht, define(function() {
		return Ht
	})) : Nt && Ft ? $t ? (Ft.exports = Ht)._ = Ht : Nt._ = Ht : qt._ = Ht
}.call(this), !
function(t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
	"use strict";
	var e = window.Slick || {};
	e = function() {
		function e(e, n) {
			var r, s = this;
			s.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: t(e),
				appendDots: t(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(t, e) {
					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, s.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, r, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
		}
		var i = 0;
		return e
	}(), e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
		var r = this;
		if ("boolean" == typeof i) n = i, i = null;
		else if (0 > i || i >= r.slideCount) return !1;
		r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : n === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, i) {
			t(i).attr("data-slick-index", e)
		}), r.$slidesCache = r.$slides, r.reinit()
	}, e.prototype.animateHeight = function() {
		var t = this;
		if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.animate({
				height: e
			}, t.options.speed)
		}
	}, e.prototype.animateSlide = function(e, i) {
		var n = {},
			r = this;
		r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
			left: e
		}, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
			top: e
		}, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), t({
			animStart: r.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: r.options.speed,
			easing: r.options.easing,
			step: function(t) {
				t = Math.ceil(t), r.options.vertical === !1 ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
			},
			complete: function() {
				i && i.call()
			}
		})) : (r.applyTransition(), e = Math.ceil(e), n[r.animType] = r.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
			r.disableTransition(), i.call()
		}, r.options.speed))
	}, e.prototype.asNavFor = function(e) {
		var i = this,
			n = i.options.asNavFor;
		n && null !== n && (n = t(n).not(i.$slider)), null !== n && "object" == typeof n && n.each(function() {
			var i = t(this).slick("getSlick");
			i.unslicked || i.slideHandler(e, !0)
		})
	}, e.prototype.applyTransition = function(t) {
		var e = this,
			i = {};
		i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
	}, e.prototype.autoPlay = function() {
		var t = this;
		t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function() {
		var t = this;
		t.autoPlayTimer && clearInterval(t.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function() {
		var t = this;
		t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (0 === t.currentSlide - 1 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
	}, e.prototype.buildArrows = function() {
		var e = this;
		e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, e.prototype.buildDots = function() {
		var e, i, n = this;
		if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
			for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
			i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, e.prototype.buildOut = function() {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
			t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
		}), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function() {
		var t, e, i, n, r, s, o, a = this;
		if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
			for (o = a.options.slidesPerRow * a.options.rows, r = Math.ceil(s.length / o), t = 0; r > t; t++) {
				var l = document.createElement("div");
				for (e = 0; e < a.options.rows; e++) {
					var c = document.createElement("div");
					for (i = 0; i < a.options.slidesPerRow; i++) {
						var u = t * o + (e * a.options.slidesPerRow + i);
						s.get(u) && c.appendChild(s.get(u))
					}
					l.appendChild(c)
				}
				n.appendChild(l)
			}
			a.$slider.html(n), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, e.prototype.checkResponsive = function(e, i) {
		var n, r, s, o = this,
			a = !1,
			l = o.$slider.width(),
			c = window.innerWidth || t(window).width();
		if ("window" === o.respondTo ? s = c : "slider" === o.respondTo ? s = l : "min" === o.respondTo && (s = Math.min(c, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
			r = null;
			for (n in o.breakpoints) o.breakpoints.hasOwnProperty(n) && (o.originalSettings.mobileFirst === !1 ? s < o.breakpoints[n] && (r = o.breakpoints[n]) : s > o.breakpoints[n] && (r = o.breakpoints[n]));
			null !== r ? null !== o.activeBreakpoint ? (r !== o.activeBreakpoint || i) && (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[r]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = r) : (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[r]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = r) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = r), e || a === !1 || o.$slider.trigger("breakpoint", [o, a])
		}
	}, e.prototype.changeSlide = function(e, i) {
		var n, r, s, o = this,
			a = t(e.target);
		switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = 0 !== o.slideCount % o.options.slidesToScroll, n = s ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
		case "previous":
			r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
			break;
		case "next":
			r = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
			break;
		case "index":
			var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
			o.slideHandler(o.checkNavigable(l), !1, i), a.children().trigger("focus");
			break;
		default:
			return
		}
	}, e.prototype.checkNavigable = function(t) {
		var e, i, n = this;
		if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
		else for (var r in e) {
			if (t < e[r]) {
				t = i;
				break
			}
			i = e[r]
		}
		return t
	}, e.prototype.cleanUpEvents = function() {
		var e = this;
		e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpRows = function() {
		var t, e = this;
		e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
	}, e.prototype.clickHandler = function(t) {
		var e = this;
		e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
	}, e.prototype.destroy = function(e) {
		var i = this;
		i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.options.arrows === !0 && (i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove())), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
			t(this).attr("style", t(this).data("originalStyling"))
		}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
	}, e.prototype.disableTransition = function(t) {
		var e = this,
			i = {};
		i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
	}, e.prototype.fadeSlide = function(t, e) {
		var i = this;
		i.cssTransitions === !1 ? (i.$slides.eq(t).css({
			zIndex: i.options.zIndex
		}), i.$slides.eq(t).animate({
			opacity: 1
		}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
			opacity: 1,
			zIndex: i.options.zIndex
		}), e && setTimeout(function() {
			i.disableTransition(t), e.call()
		}, i.options.speed))
	}, e.prototype.fadeSlideOut = function(t) {
		var e = this;
		e.cssTransitions === !1 ? e.$slides.eq(t).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
		var e = this;
		null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
		var t = this;
		return t.currentSlide
	}, e.prototype.getDotCount = function() {
		var t = this,
			e = 0,
			i = 0,
			n = 0;
		if (t.options.infinite === !0) for (; e < t.slideCount;)++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else if (t.options.centerMode === !0) n = t.slideCount;
		else for (; e < t.slideCount;)++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		return n - 1
	}, e.prototype.getLeft = function(t) {
		var e, i, n, r = this,
			s = 0;
		return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = -1 * r.slideWidth * r.options.slidesToShow, s = -1 * i * r.options.slidesToShow), 0 !== r.slideCount % r.options.slidesToScroll && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = -1 * (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth, s = -1 * (r.options.slidesToShow - (t - r.slideCount)) * i) : (r.slideOffset = -1 * r.slideCount % r.options.slidesToScroll * r.slideWidth, s = -1 * r.slideCount % r.options.slidesToScroll * i))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? -1 * t * r.slideWidth + r.slideOffset : -1 * t * i + s, r.options.variableWidth === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = n[0] ? -1 * n[0].offsetLeft : 0, r.options.centerMode === !0 && (n = r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
		var e = this;
		return e.options[t]
	}, e.prototype.getNavigableIndexes = function() {
		var t, e = this,
			i = 0,
			n = 0,
			r = [];
		for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return r
	}, e.prototype.getSlick = function() {
		return this
	}, e.prototype.getSlideCount = function() {
		var e, i, n, r = this;
		return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(e, s) {
			return s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * r.swipeLeft ? (i = s, !1) : void 0
		}), e = Math.abs(t(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
		var i = this;
		i.changeSlide({
			data: {
				message: "index",
				index: parseInt(t)
			}
		}, e)
	}, e.prototype.init = function(e) {
		var i = this;
		t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
	}, e.prototype.initArrowEvents = function() {
		var t = this;
		t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
			message: "previous"
		}, t.changeSlide), t.$nextArrow.on("click.slick", {
			message: "next"
		}, t.changeSlide))
	}, e.prototype.initDotEvents = function() {
		var e = this;
		e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
	}, e.prototype.initializeEvents = function() {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.initUI = function() {
		var t = this;
		t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
	}, e.prototype.keyHandler = function(t) {
		var e = this;
		t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
			data: {
				message: "previous"
			}
		}) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
			data: {
				message: "next"
			}
		}))
	}, e.prototype.lazyLoad = function() {
		function e(e) {
			t("img[data-lazy]", e).each(function() {
				var e = t(this),
					i = t(this).attr("data-lazy"),
					n = document.createElement("img");
				n.onload = function() {
					e.animate({
						opacity: 0
					}, 100, function() {
						e.attr("src", i).animate({
							opacity: 1
						}, 200, function() {
							e.removeAttr("data-lazy").removeClass("slick-loading")
						})
					})
				}, n.src = i
			})
		}
		var i, n, r, s, o = this;
		o.options.centerMode === !0 ? o.options.infinite === !0 ? (r = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = r + o.options.slidesToShow + 2) : (r = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (r = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = r + o.options.slidesToShow, o.options.fade === !0 && (r > 0 && r--, s <= o.slideCount && s++)), i = o.$slider.find(".slick-slide").slice(r, s), e(i), o.slideCount <= o.options.slidesToShow ? (n = o.$slider.find(".slick-slide"), e(n)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (n = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(n)) : 0 === o.currentSlide && (n = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(n))
	}, e.prototype.loadSlider = function() {
		var t = this;
		t.setPosition(), t.$slideTrack.css({
			opacity: 1
		}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function() {
		var t = this;
		t.changeSlide({
			data: {
				message: "next"
			}
		})
	}, e.prototype.orientationChange = function() {
		var t = this;
		t.checkResponsive(), t.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function() {
		var t = this;
		t.autoPlayClear(), t.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function() {
		var t = this;
		t.paused = !1, t.autoPlay()
	}, e.prototype.postSlide = function(t) {
		var e = this;
		e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
	}, e.prototype.prev = e.prototype.slickPrev = function() {
		var t = this;
		t.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, e.prototype.preventDefault = function(t) {
		t.preventDefault()
	}, e.prototype.progressiveLazyLoad = function() {
		var e, i, n = this;
		e = t("img[data-lazy]", n.$slider).length, e > 0 && (i = t("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
			i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
		}).error(function() {
			i.removeAttr("data-lazy"), n.progressiveLazyLoad()
		}))
	}, e.prototype.refresh = function(e) {
		var i = this,
			n = i.currentSlide;
		i.destroy(!0), t.extend(i, i.initials, {
			currentSlide: n
		}), i.init(), e || i.changeSlide({
			data: {
				message: "index",
				index: n
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function() {
		var e, i, n, r = this,
			s = r.options.responsive || null;
		if ("array" === t.type(s) && s.length) {
			r.respondTo = r.options.respondTo || "window";
			for (e in s) if (n = r.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
				for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
				r.breakpoints.push(i), r.breakpointSettings[i] = s[e].settings
			}
			r.breakpoints.sort(function(t, e) {
				return r.options.mobileFirst ? t - e : e - t
			})
		}
	}, e.prototype.reinit = function() {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
	}, e.prototype.resize = function() {
		var e = this;
		t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
			e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}, 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
		var n = this;
		return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
	}, e.prototype.setCSS = function(t) {
		var e, i, n = this,
			r = {};
		n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
	}, e.prototype.setDimensions = function() {
		var t = this;
		t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
			padding: "0px " + t.options.centerPadding
		}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
			padding: t.options.centerPadding + " 0px"
		})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
		var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
		t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
	}, e.prototype.setFade = function() {
		var e, i = this;
		i.$slides.each(function(n, r) {
			e = -1 * i.slideWidth * n, i.options.rtl === !0 ? t(r).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: i.options.zIndex - 2,
				opacity: 0
			}) : t(r).css({
				position: "relative",
				left: e,
				top: 0,
				zIndex: i.options.zIndex - 2,
				opacity: 0
			})
		}), i.$slides.eq(i.currentSlide).css({
			zIndex: i.options.zIndex - 1,
			opacity: 1
		})
	}, e.prototype.setHeight = function() {
		var t = this;
		if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function(e, i, n) {
		var r, s, o = this;
		if ("responsive" === e && "array" === t.type(i)) for (s in i) if ("array" !== t.type(o.options.responsive)) o.options.responsive = [i[s]];
		else {
			for (r = o.options.responsive.length - 1; r >= 0;) o.options.responsive[r].breakpoint === i[s].breakpoint && o.options.responsive.splice(r, 1), r--;
			o.options.responsive.push(i[s])
		} else o.options[e] = i;
		n === !0 && (o.unload(), o.reinit())
	}, e.prototype.setPosition = function() {
		var t = this;
		t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
	}, e.prototype.setProps = function() {
		var t = this,
			e = document.body.style;
		t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && t.animType !== !1
	}, e.prototype.setSlideClasses = function(t) {
		var e, i, n, r, s = this;
		i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
	}, e.prototype.setupInfinite = function() {
		var e, i, n, r = this;
		if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
			for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1) i = e - 1, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
			for (e = 0; n > e; e += 1) i = e, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
			r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
				t(this).attr("id", "")
			})
		}
	}, e.prototype.setPaused = function(t) {
		var e = this;
		e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
	}, e.prototype.selectHandler = function(e) {
		var i = this,
			n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
			r = parseInt(n.attr("data-slick-index"));
		return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
	}, e.prototype.slideHandler = function(t, e, i) {
		var n, r, s, o, a = null,
			l = this;
		return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t), n = t, a = l.getLeft(n), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function() {
			l.postSlide(n)
		}) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function() {
			l.postSlide(n)
		}) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), r = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), s = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(r, function() {
			l.postSlide(r)
		})) : l.postSlide(r), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
			l.postSlide(r)
		}) : l.postSlide(r))))
	}, e.prototype.startLoad = function() {
		var t = this;
		t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function() {
		var t, e, i, n, r = this;
		return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
	}, e.prototype.swipeEnd = function() {
		var t, e = this;
		if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX) return !1;
		if (e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe) switch (e.swipeDirection()) {
		case "left":
			t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(t), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
			break;
		case "right":
			t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(t), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
		} else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
	}, e.prototype.swipeHandler = function(t) {
		var e = this;
		if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
		case "start":
			e.swipeStart(t);
			break;
		case "move":
			e.swipeMove(t);
			break;
		case "end":
			e.swipeEnd(t)
		}
	}, e.prototype.swipeMove = function(t) {
		var e, i, n, r, s, o = this;
		return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !o.dragging || s && 1 !== s.length ? !1 : (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), i = o.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), r = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (r = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.swipeLeft = o.options.vertical === !1 ? e + n * r : e + n * (o.$list.height() / o.listWidth) * r, o.options.verticalSwiping === !0 && (o.swipeLeft = e + n * r), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
	}, e.prototype.swipeStart = function(t) {
		var e, i = this;
		return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
		var t = this;
		null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
	}, e.prototype.unload = function() {
		var e = this;
		t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, e.prototype.unslick = function(t) {
		var e = this;
		e.$slider.trigger("unslick", [e, t]), e.destroy()
	}, e.prototype.updateArrows = function() {
		var t, e = this;
		t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function() {
		var t = this;
		null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, e.prototype.visibility = function() {
		var t = this;
		document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1, t.autoPlay())
	}, e.prototype.initADA = function() {
		var e = this;
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
			t(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + e.instanceUid + i
			})
		}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
			t(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + e.instanceUid + i,
				id: "slick-slide" + e.instanceUid + i
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
	}, e.prototype.activateADA = function() {
		var t = this,
			e = t.$slider.find("*").is(":focus");
		t.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false",
			tabindex: "0"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		}), e && t.$slideTrack.find(".slick-active").focus()
	}, e.prototype.focusHandler = function() {
		var e = this;
		e.$slider.on("focus.slick blur.slick", "*", function(i) {
			i.stopImmediatePropagation();
			var n = t(this);
			setTimeout(function() {
				e.isPlay && (n.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
			}, 0)
		})
	}, t.fn.slick = function() {
		var t, i = this,
			n = arguments[0],
			r = Array.prototype.slice.call(arguments, 1),
			s = i.length,
			o = 0;
		for (o; s > o; o++) if ("object" == typeof n || "undefined" == typeof n ? i[o].slick = new e(i[o], n) : t = i[o].slick[n].apply(i[o].slick, r), "undefined" != typeof t) return t;
		return i
	}
});

/**
 * Created by Administrator on 2016/5/3 0003.
 */
/*!* wave-canvas.js */
var App = App || {};
!function () {
    var e = function () {
        var e, i, t, o, n, a, s, r, c, l, h, p, d, u, g, v = function () {
            if ($(".a-header").length)if (o = window.devicePixelRatio && cssua.ua.mobile ? window.devicePixelRatio : 1, e = $(window), i = $(".a-header"), i.append('<canvas id="wave-canvas"></canvas>'), n = document.getElementById("wave-canvas"), t = new createjs.Stage(n), a = new createjs.Shape, createjs.Ticker.setFPS(30), createjs.Ticker.addEventListener("tick", t), r = n.height - n.height / 2.7, c = n.height / 6.5, l = 60, h = .41, p = 2.5, d = 340, u = 2 * Math.PI / d, g = 10) {
                w();
                var s = _.throttle(f, 100);
                e.on("resize", s), f()
            } else $(n).remove()
        }, f = function () {
            if (n.width = i.width() + 2, n.height = i.outerHeight(), r = n.height - n.height / 2.7, c = n.height / 7.5, h = .41, p = 2.5, n.width / o < 680 ? (s = new m, r = n.height - 10, p = 3.8, h = .2, c = 45) : s = new m, window.devicePixelRatio && cssua.ua.mobile) {
                var e = n.getAttribute("height"), a = n.getAttribute("width");
                n.setAttribute("width", Math.round(a * window.devicePixelRatio)), n.setAttribute("height", Math.round(e * window.devicePixelRatio)), n.style.width = a + "px", n.style.height = e + "px", t.scaleX = t.scaleY = window.devicePixelRatio
            }
        }, w = function () {
            s = new m, t.addChild(a), C()
        }, m = function () {
            this.amp = 10 + 12 * Math.random(), this.freq = .0044, this.phase = 2 + 4 * Math.random(), this.offset = 2 + 4 * Math.random(), n.width / o < 680 && (this.amp = 2 + 6 * Math.random(), this.freq = .018, this.phase = 1 + 2 * Math.random(), this.offset = 1 + 2 * Math.random()), this.point = function (e) {
                return r - A() + this.offset + this.amp * Math.sin(this.freq * e + this.phase + u * g)
            }
        }, A = function () {
            var e = new Date;
            return c / 2 * Math.abs(e.getSeconds() + e.getMilliseconds() / 1e3 - 30) / 30
        }, C = function () {
            a.graphics.clear(), a.graphics.beginFill("#fff");
            for (var e = 0; e < n.width + 2; e++)a.graphics.lineTo(e, (s.point(e) * p + s.point(e)) * h);
            a.graphics.lineTo(n.width, n.height), a.graphics.lineTo(0, n.height), a.graphics.closePath(), a.graphics.endFill(), g = (g - 1) % d, t.update(), setTimeout(C, 1e3 / l)
        };
        return {initialize: v}
    }();
    App.waveCanvas = e, App.waveCanvas.initialize()
}();


$('#loading').fadeOut(3000);