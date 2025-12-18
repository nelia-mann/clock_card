/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





var $24833e213e3419f0$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    ha-card {
        font-family: "Roboto", "Noto", sans-serif;
        font-weight: 400;
        padding: 2%;
        margin: 0px;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .button-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 17%;
        margin: 0px;
        padding: 0px;
    }

    .button {
        border-radius: 12px;
        height: 100%;
        width: 27%;
        font-weight: 600;
        color: var(--primary-text-color);
    }

    .button.clock {
        background-color: rgba(110, 65, 171, .5);
        border-width: 0px;
    }

    .button.clock.true {
        outline: solid rgb(110, 65, 171);
        outline-offset: -4px;
    }

    .button.timer {
        background-color: rgba(63, 81, 181, .5);
        border-width: 0px;
    }

    .button.timer.true {
        outline: solid rgb(63, 81, 181);
        outline-offset: -4px;
    }

    .button.stopwatch {
        background-color: rgba(0, 150, 136, .5);
        border-width: 0px;
    }

    .button.stopwatch.true {
        outline: solid rgb(0, 150, 136);
        outline-offset: -4px;
    }

    @media (prefers-color-scheme: dark) {
        ha-card {
            color: #ffffff;
        }

        .button {
            color: #ffffff;
        }
    }
`;




var $ea702c2b6f3681ab$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    .clock {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: 2%;
        padding-bottom: 3%;
        height: 77%;
        margin: 0px;
    }

    .clock-display {
        font-size: 400%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 85%;
        height: 100%;
    }

    .button-column {
        width: 15%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .button {
        border-width: 0px;
        width: 100%;
        height: 22%;
        font-weight: 600;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: rgba(110, 65, 171, .5);
    }

    .button.true {
        outline: solid rgb(110, 65, 171);
        outline-offset: -4px;
    }
`;


class $3dc430e0313e94c9$export$cfc89f962e269ecb extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            _timezone: {
                state: true
            },
            _timeDisplay: {
                state: true
            }
        };
    }
    constructor(){
        super();
        this._timezone = "home";
        this.doGetTime();
    }
    static styles = (0, $ea702c2b6f3681ab$export$2e2bcd8739ae039);
    render() {
        this.doUpdateClock();
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="clock">
                <div class="clock-display"> ${this._timeDisplay}</div>
                <div class="button-column">
                    <button
                        class="button ${this.isHome()}"
                        id="home"
                        @click=${this.onClick}
                    >
                        Home
                    </button>
                    <button
                        class="button ${this.isBoulder()}"
                        id="boulder"
                        @click=${this.onClick}
                    >
                        Boulder
                    </button>
                    <button
                        class="button ${this.isArizona()}"
                        id="arizona"
                        @click=${this.onClick}
                    >
                        Arizona
                    </button>
                </div>
            </div>
        `;
    }
    onClick(e) {
        switch(e.target.id){
            case "home":
                this._timezone = "home";
                break;
            case "boulder":
                this._timezone = "boulder";
                break;
            case "arizona":
                this._timezone = "arizona";
                break;
        }
        this.doGetTime();
    }
    isHome() {
        return this._timezone === "home";
    }
    isBoulder() {
        return this._timezone === "boulder";
    }
    isArizona() {
        return this._timezone === "arizona";
    }
    doUpdateClock() {
        setInterval(()=>this.doGetTime(), 1000);
    }
    doGetTime() {
        const current = new Date();
        let output;
        switch(this._timezone){
            case "home":
                output = current.toLocaleString('en-US', {
                    timeZone: 'America/New_York'
                });
                break;
            case "boulder":
                output = current.toLocaleString('en-US', {
                    timeZone: 'America/Denver'
                });
                break;
            case "arizona":
                output = current.toLocaleString('en-US', {
                    timeZone: 'America/Phoenix'
                });
                break;
        }
        output = output.split(',')[1];
        this._timeDisplay = output;
    }
}
customElements.define("clock-component", $3dc430e0313e94c9$export$cfc89f962e269ecb);




var $329704e719fa307b$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`

    timer-component {
        width: 85%;
        height: 100%;
    }

    .timers {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: 2%;
        padding-bottom: 3%;
        height: 77%;
        margin: 0px;
    }

    .timer-column {
        width: 15%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .timer-button {
        border-width: 0px;
        width: 100%;
        height: 25%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: rgba(63, 81, 181, .5);
    }

    h1 {
        font-size: 100%;
        margin: 0px;
        padding: 0px;
    }

    .time {
        margin: 0px;
        padding: 0px;
    }

    .timer-button.true {
        outline: solid rgb(63, 81, 181);
        outline-offset: -4px;
    }
`;




var $2fd4a6e2363b2c92$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`

    .timer {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .main-column {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        width: 82%;
        height: 100%;
    }

    .timer-display {
        font-size: 400%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70%;
    }

    .button-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        height: 15%;
        width: 100%;
    }

    .time-button {
        border-radius: 12px;
        background-color:  rgba(63, 81, 181, .25);
        border-width: 0px;
        padding: 3%;
    }

    .time-button.on {
        background-color:  rgba(63, 81, 181, .25);
        outline: solid rgba(63, 81, 181, .5);
        outline-offset: -4px;
    }

    .control-column {
        width: 18%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: flex-start;
    }

    .control-button {
        border-radius: 12px;
        background-color:  rgba(63, 81, 181, .5);
        border-width: 0px;
        padding: 15%;
        font-weight: 600;
        width: 70%;
        margin-left: 5%;
    }

    .control-button.false {
        background-color: rgba(158, 158, 158, .5);
    }

    .control-button.on {
        background-color:  rgba(63, 81, 181, .5);
        outline: solid rgb(63, 81, 181);
        outline-offset: -4px;
    }
`;


const $c09d4cd0bfbae6f1$var$pad = (value)=>{
    let string = String(value);
    if (string.length == 1) string = "0" + string;
    return string;
};
const $c09d4cd0bfbae6f1$export$c9698ec7f05a07e1 = (milliseconds)=>{
    let remainder = Math.floor(milliseconds / 1000);
    let hours = Math.floor(remainder / 3600);
    remainder = remainder - hours * 3600;
    const minutes = Math.floor(remainder / 60);
    remainder = remainder - minutes * 60;
    hours = hours % 24;
    const output = $c09d4cd0bfbae6f1$var$pad(hours) + ":" + $c09d4cd0bfbae6f1$var$pad(minutes) + ":" + $c09d4cd0bfbae6f1$var$pad(remainder);
    return output;
};
const $c09d4cd0bfbae6f1$export$6e484991daa654 = (string)=>{
    const array = string.split(":");
    const hours = Number(array[0]);
    const minutes = Number(array[1]);
    const seconds = Number(array[2]);
    return hours * 36000 + minutes * 60 + seconds;
};
const $c09d4cd0bfbae6f1$export$a4fc99adb4edc775 = (str)=>{
    const sign = str[0];
    const units = str[str.length - 1];
    let value = Number(str.slice(1, -1));
    if (units === "m") value = value * 60;
    if (sign === "-") value = value * -1;
    return value;
};


class $8dfa3584d11a2e16$export$1cb009567ea88894 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    // the lists of time changes available
    _addTimes = [
        "+30s",
        "+1m",
        "+5m",
        "+30m"
    ];
    _subTimes = [
        "-30s",
        "-1m",
        "-5m",
        "-30m"
    ];
    /*
        the reactive properties.
        "_timers" is inherited from the main clock, which obtains it from hass.
        These are the entities being manipulated.
        "_timerIndex" keeps track of which of these timers is currently selected
        "_timerDisplays" keeps track of the numbers showing on the clock displays
        "_timeSet" is the value (in seconds) for a new timer setting.
        "_pressed" is on/off depending on whether a button has just been pressed
    */ static get properties() {
        return {
            _timer: {
                state: true
            },
            _timerDisplay: {
                state: true
            },
            _timeSet: {
                state: true
            },
            _pressed: {
                state: true
            }
        };
    }
    // We initialize the timerIndex to be the first timer, and the timeSet to be zero.
    constructor(){
        super();
        this.setTimeSet(0);
        this.releaseButtons();
    }
    getTimeSet() {
        return this._timeSet;
    }
    setTimeSet(time) {
        this._timeSet = time;
    }
    getTimerDisplay() {
        return this._timerDisplay;
    }
    setTimerDisplay(newTimerDisplay) {
        this._timerDisplay = newTimerDisplay;
    }
    // getters that refer to the timer's internal information
    getState() {
        return this._timer.state;
    }
    getId() {
        return this._timer.entity_id;
    }
    getAttributes() {
        return this._timer.attributes;
    }
    getFinishesAt() {
        return this.getAttributes().finishes_at;
    }
    getRemaining() {
        return this.getAttributes().remaining;
    }
    // pull the css from a separate file
    static styles = (0, $2fd4a6e2363b2c92$export$2e2bcd8739ae039);
    // render function for generating display (note that doUpdateClocks() triggers
    // at regular intervals so the clocks tick forward)
    render() {
        this.doUpdateClock();
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="timer">
                <div class="main-column">
                    <div class="button-row"> ${this.addButtons()} </div>
                    <div class="timer-display"> ${this.getTimerDisplay()} </div>
                    <div class="button-row"> ${this.subButtons()} </div>
                </div>
                <div class="control-column">
                    <button class="control-button ${this.canPress()} ${this.pressed("startStop")}"
                        id="start/stop"
                        @click="${this.onStartStop}"
                    >
                        ${this.startStopDisplay()}
                    </button>
                    <button class="control-button ${this.canPress()} ${this.pressed("reset")}"
                        id="reset"
                        @click="${this.onReset}"
                    >
                        reset
                    </button>
                </div>
            </div>
        `;
    }
    // elements for display
    startStopDisplay() {
        const state = this.getState();
        let display = "start";
        if (state === "active") display = "stop";
        return display;
    }
    changeButton(str) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <button class="time-button ${this.pressed(str)}" id=${str} @click="${this.onChange}">
                ${str}
            </button>`;
    }
    addButtons() {
        return this._addTimes.map((str)=>this.changeButton(str));
    }
    subButtons() {
        return this._subTimes.map((str)=>this.changeButton(str));
    }
    canPress() {
        const state = this.getState();
        return state === "active" || state === "paused" || this.getTimeSet() != 0;
    }
    releaseButtons() {
        let nonePressed = {
            startStop: "off",
            reset: "off"
        };
        this._addTimes.forEach((str)=>{
            nonePressed[str] = "off";
        });
        this._subTimes.forEach((str)=>{
            nonePressed[str] = "off";
        });
        this._pressed = nonePressed;
    }
    pressed(str) {
        return this._pressed[str];
    }
    press(str) {
        this._pressed[str] = "on";
    }
    doReleaseButtons() {
        setTimeout(()=>this.releaseButtons(), 100);
    }
    // sets up times for display (based on timer states)
    doTimeDisplay() {
        let result;
        switch(this.getState()){
            case "active":
                const end = this.getFinishesAt();
                const end_ms = new Date(end).valueOf();
                const instant_ms = new Date().valueOf();
                result = (0, $c09d4cd0bfbae6f1$export$c9698ec7f05a07e1)(end_ms - instant_ms);
                break;
            case "paused":
                result = this.getRemaining();
                const array = result.split(":");
                if (array[0].length === 1) result = "0" + result;
                break;
            default:
                result = (0, $c09d4cd0bfbae6f1$export$c9698ec7f05a07e1)(this.getTimeSet() * 1000);
        }
        this.setTimerDisplay(result);
    }
    doUpdateClock() {
        this.doTimeDisplay();
        if (this.getState() === "active") setInterval(()=>this.doTimeDisplay(), 1000);
    }
    // adding and subtracting time
    onChange(e) {
        const str = e.target.id;
        const time = (0, $c09d4cd0bfbae6f1$export$a4fc99adb4edc775)(str);
        const state = this.getState();
        switch(state){
            case "idle":
                this.addTimeIdle(time);
                break;
            case "paused":
                this.addTimePaused(time);
                break;
            case "active":
                this.addTimeActive(time);
                break;
        }
        this.press(str);
        this.doReleaseButtons();
    }
    addTimeIdle(time) {
        let newTime = this.getTimeSet() + time;
        newTime < 0 && (newTime = 0);
        this.setTimeSet(newTime);
    }
    addTimeActive(time) {
        const end = this.getFinishesAt();
        const end_ms = new Date(end).valueOf();
        const instant_ms = new Date().valueOf();
        let duration = Math.floor((end_ms - instant_ms) / 1000) + time;
        this.modifyTimer(duration);
    }
    addTimePaused(time) {
        const remaining = this.getRemaining();
        const duration = (0, $c09d4cd0bfbae6f1$export$6e484991daa654)(remaining) + time;
        this.modifyTimer(duration);
        this.sendCommand("pause", {});
    }
    modifyTimer(duration) {
        if (duration <= 0) this.sendCommand("cancel", {});
        else this.sendCommand("start", {
            duration: duration
        });
    }
    // control buttons
    onReset() {
        if (this.canPress()) {
            this.sendCommand("cancel", {});
            this.setTimeSet(0);
        }
        this.press("reset");
        this.doReleaseButtons();
    }
    onStartStop() {
        if (this.canPress()) {
            switch(this.getState()){
                case "paused":
                    this.sendCommand("start", {});
                    break;
                case "active":
                    this.sendCommand("pause", {});
                    break;
                default:
                    this.sendCommand("start", {
                        duration: this.getTimeSet()
                    });
                    this.setTimeSet(0);
            }
            this.press("startStop");
            this.doReleaseButtons();
        }
    }
    sendCommand(type, data) {
        const entityId = this.getId();
        let fullData = data;
        fullData.entity_id = entityId;
        this.callService("timer", type, fullData);
    }
}
customElements.define("timer-component", $8dfa3584d11a2e16$export$1cb009567ea88894);



class $79ad5caf098b1ae8$export$991fc5df1213e274 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            _timers: {
                state: true
            },
            _timerIndex: {
                state: true
            },
            _timerDisplays: {
                state: true
            }
        };
    }
    constructor(){
        super();
        this.setTimerIndex(0);
    }
    getIndices() {
        return Object.keys(this._timers).map((key)=>Number(key));
    }
    getTimerIndex() {
        return this._timerIndex;
    }
    getTimer() {
        return this._timers[this.getTimerIndex()];
    }
    isIndex(index) {
        return this.getTimerIndex() === index;
    }
    setTimerIndex(index) {
        this._timerIndex = index;
    }
    getState(index) {
        return this._timers[index].state;
    }
    getAttributes(index) {
        return this._timers[index].attributes;
    }
    getFinishesAt(index) {
        return this.getAttributes(index).finishes_at;
    }
    getRemaining(index) {
        return this.getAttributes(index).remaining;
    }
    getTimerDisplay(index) {
        return this._timerDisplays[index];
    }
    setTimerDisplays(newDisplays) {
        this._timerDisplays = newDisplays;
    }
    getSmallTime(index) {
        const state = this.getState(index);
        let result;
        switch(state){
            case "active":
                const end = this.getFinishesAt(index);
                const end_ms = new Date(end).valueOf();
                const instant_ms = new Date().valueOf();
                result = (0, $c09d4cd0bfbae6f1$export$c9698ec7f05a07e1)(end_ms - instant_ms);
                break;
            case "paused":
                result = this.getRemaining(index);
                const array = result.split(":");
                if (array[0].length === 1) result = "0" + result;
                break;
            default:
                result = "";
        }
        return result;
    }
    doTimerDisplays() {
        const newTimes = this.getIndices().map((index)=>this.getSmallTime(index));
        this.setTimerDisplays(newTimes);
    }
    doUpdateClocks() {
        this.doTimerDisplays();
        const states = this.getIndices().map((index)=>this.getState(index));
        if (states.includes("active")) setInterval(()=>this.doTimerDisplays(), 1000);
    }
    onClick(e) {
        this.setTimerIndex(Number(e.currentTarget.id));
    }
    timerButton(index) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <button class="timer-button ${this.isIndex(index)}" id="${index}" @click="${this.onClick}">
                <h1> Timer ${index + 1} </h1>
                <p class="time"> ${this.getTimerDisplay(index)} </p>
            </button>
        `;
    }
    timerButtons() {
        return this.getIndices().map((i)=>this.timerButton(i));
    }
    static styles = (0, $329704e719fa307b$export$2e2bcd8739ae039);
    render() {
        this.doUpdateClocks();
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="timers">
                <timer-component
                    .callService=${this.callService}
                    ._timer = ${this.getTimer()}
                ></timer-component>
                <div class="timer-column"> ${this.timerButtons()} </div>
            </div>
        `;
    }
}
customElements.define("timers-component", $79ad5caf098b1ae8$export$991fc5df1213e274);




var $c4bfff862de7e2ce$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    .stopwatch {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: 2%;
        padding-bottom: 3%;
        height: 77%;
        margin: 0px;
    }

    .stopwatch-display {
        font-size: 400%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
    }

    .lap-column {
        width: 15%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        height: 90%;
    }

    .lap {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
    }

    h1 {
        font-size: 100%;
        margin: 0px;
        padding: 0px;
    }

    .time {
        margin: 0px;
        margin-top: -5%;
        margin-left: 15%;
        padding: 0px;
    }

    .button-column {
        width: 15%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .button {
        border-width: 0px;
        width: 100%;
        height: 22%;
        font-weight: 600;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: rgba(0, 150, 136, .5);
    }

    .button.false {
        background-color: rgba(158, 158, 158, .5);
    }

    .button.on {
        background-color: rgba(0, 150, 136, .5);
        outline: solid rgb(0, 150, 136);
        outline-offset: -4px;
    }
`;



class $55fbdb017028779e$export$b19b1c9de506be9d extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    // internal reactive states
    static get properties() {
        return {
            _stopwatch: {
                state: true
            },
            _timeDisplay: {
                state: true
            },
            _lapDisplay: {
                state: true
            },
            _pressed: {
                state: true
            }
        };
    }
    // initialize button pressing here
    constructor(){
        super();
        this.releaseButtons();
    }
    releaseButtons() {
        const newPressed = {
            startStop: "off",
            lap: "off",
            reset: "off"
        };
        this._pressed = newPressed;
    }
    // get state of stopwatch ("active", "paused", "idle")
    getState() {
        return this._stopwatch.state;
    }
    getStartTime() {
        return this._stopwatch.attributes.start_time;
    }
    getLoggedTime() {
        return this._stopwatch.attributes.logged_time;
    }
    getLaps() {
        return this._stopwatch.attributes.laps;
    }
    press(str) {
        this._pressed[str] = "on";
    }
    pressed(str) {
        return this._pressed[str];
    }
    getTimeDisplay() {
        return this._timeDisplay;
    }
    getLapDisplay() {
        return this._lapDisplay;
    }
    setTimeDisplay(display) {
        this._timeDisplay = display;
    }
    setLapDisplay(display) {
        this._lapDisplay = display;
    }
    // get css
    static styles = (0, $c4bfff862de7e2ce$export$2e2bcd8739ae039);
    // return html
    render() {
        this.doUpdateClock();
        this.doLapDisplay();
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="stopwatch">
                <div class="stopwatch-display"> ${this.getTimeDisplay()} </div>
                <div class="lap-column">
                    ${this.getLapDisplay()}
                </div>
                <div class="button-column">
                    <button
                        class="button ${this.pressed("startStop")}"
                        id="start-stop"
                        @click="${this.onClick}"
                    >
                        ${this.getStartStop()}
                    </button>
                    <button
                        class="button ${this.canLap()} ${this.pressed("lap")}"
                        id="lap"
                        @click="${this.onClick}"
                    >
                        Lap
                    </button>
                    <button
                        class="button ${this.canReset()} ${this.pressed("reset")}"
                        id="reset"
                        @click="${this.onClick}"
                    >
                        Reset
                    </button>
                </div>
            </div>
        `;
    }
    // makes text for start/stop button
    getStartStop() {
        let startStop = "Start";
        if (this.getState() === "active") startStop = "Stop";
        return startStop;
    }
    // update running clock every second (when stopwatch is active)
    doUpdateClock() {
        this.doTimeDisplay();
        if (this.getState() === "active") setInterval(()=>this.doTimeDisplay(), 1000);
    }
    // gets the stopwatch time (in milliseconds)
    getTime() {
        let result;
        switch(this.getState()){
            case "active":
                const start_time = this.getStartTime();
                const instant = new Date().valueOf();
                const previous = this.getLoggedTime();
                result = instant - start_time + previous;
                break;
            case "paused":
                const logged_time = this.getLoggedTime();
                result = logged_time;
                break;
            default:
                result = 0;
        }
        return result;
    }
    // converts the stopwatch time to the right format, and sets _timeDisplay
    doTimeDisplay() {
        const result = this.getTime();
        this.setTimeDisplay((0, $c09d4cd0bfbae6f1$export$c9698ec7f05a07e1)(result));
    }
    // uses dictionary of lap times to build display column
    doLapDisplay() {
        let laps = this.getLaps();
        laps = Object.keys(laps).map((key)=>laps[key]);
        const newDisplay = laps.map((value, index)=>{
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                <div class="lap">
                    <h1> Lap ${index + 1}: </h1>
                    <p class="time"> ${(0, $c09d4cd0bfbae6f1$export$c9698ec7f05a07e1)(value)} </p>
                </div>
            `;
        });
        this.setLapDisplay(newDisplay);
    }
    // handles the clicking of the buttons
    onClick(e) {
        switch(e.target.id){
            case "start-stop":
                this.doStartStop();
                break;
            case "lap":
                if (this.canLap()) this.doLap();
                break;
            case "reset":
                if (this.canReset()) this.doReset();
        }
        this.doReleaseButtons();
    }
    // sends reset information to hass and presses button
    doReset() {
        const data = {
            state: "idle",
            start_time: null,
            logged_time: 0.0,
            laps: {}
        };
        this.sendCommand(data);
        this.press("reset");
    }
    // sends pause information to hass
    doStop() {
        const data = {
            state: "paused",
            start_time: null,
            logged_time: this.getTime()
        };
        this.sendCommand(data);
    }
    // sends start information to hass
    doStart() {
        console.log("ping");
        const data = {
            state: "active",
            start_time: new Date().valueOf()
        };
        this.sendCommand(data);
    }
    // selects start/stop information to send, presses button
    doStartStop() {
        if (this.getState() === "active") this.doStop();
        else if (this.getState() === "paused" || this.getState() === "idle") this.doStart();
        this.press("startStop");
    }
    // waits half a second then releases all buttons
    doReleaseButtons() {
        setTimeout(()=>this.releaseButtons(), 100);
    }
    // sends lap information to hass and presses button
    doLap() {
        let newLaps = this._stopwatch.attributes.laps;
        let count = Object.keys(newLaps).length;
        newLaps[count + 1] = this.getTime();
        const data = {
            laps: newLaps
        };
        this.sendCommand(data);
        this.press("lap");
    }
    // determines if it makes sense to press lap
    canLap() {
        const laps = this._stopwatch.attributes.laps;
        const count = Object.keys(laps).length;
        return count < 4 && this.getState() === "active";
    }
    // determines if it makes sense to press reset
    canReset() {
        const state = this.getState();
        return state === "active" || state === "paused";
    }
    // general function to send information to hass
    sendCommand(data) {
        const fullData = data;
        fullData.entity_id = this._stopwatch.entity_id;
        this.callService("python_script", "set_state", fullData);
    }
}
customElements.define("stopwatch-component", $55fbdb017028779e$export$b19b1c9de506be9d);


class $b161f025c07cf354$export$7fe46a8978a1b23d extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    // private properties:
    _hass;
    _stopwatchId;
    _timerIds = {};
    // internal reactive states
    static get properties() {
        return {
            _clocktype: {
                state: true
            },
            _stopwatch: {
                state: true
            },
            _timers: {
                state: true
            }
        };
    }
    // initializes clocktype in constructor
    constructor(){
        super();
        this._clocktype = "clock";
    }
    // establish config information for card
    setConfig() {
        this._stopwatchId = "input_select.stopwatch";
        this._timerIds[0] = "timer.timer_1";
        this._timerIds[1] = "timer.timer_2";
        this._timerIds[2] = "timer.timer_3";
    }
    set hass(hass) {
        this._hass = hass;
        if (this._hass) {
            this._stopwatch = this._hass.states[this._stopwatchId];
            this._timers = Object.keys(this._timerIds).map((key)=>{
                const id = this._timerIds[key];
                return this._hass.states[id];
            });
        }
    }
    // pull styles
    static styles = (0, $24833e213e3419f0$export$2e2bcd8739ae039);
    // return html
    render() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-card>
                ${this.content()}
                <div class="button-row">
                    <button
                        class="button clock ${this.isClock()}"
                        id="clock"
                        @click="${this.onClick}"
                    >
                        Clock
                    </button>
                    <button
                        class="button timer ${this.isTimer()}"
                        id="timer"
                        @click="${this.onClick}"
                    >
                        Timer
                    </button>
                    <button
                        class="button stopwatch ${this.isStopwatch()}"
                        id="stopwatch"
                        @click="${this.onClick}"
                    >
                        Stopwatch
                    </button>
                </div>
            </ha-card>
        `;
    }
    // deals with click
    onClick(e) {
        switch(e.target.id){
            case "clock":
                this._clocktype = "clock";
                break;
            case "timer":
                this._clocktype = "timer";
                break;
            case "stopwatch":
                this._clocktype = "stopwatch";
        }
    }
    content() {
        let result;
        switch(this._clocktype){
            case "clock":
                result = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<clock-component></clock-component>`;
                break;
            case "timer":
                result = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<timers-component
                    .callService=${this._hass.callService}
                    ._timers = ${this._timers}
                ></timers-component>`;
                break;
            case "stopwatch":
                result = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<stopwatch-component
                    .callService=${this._hass.callService}
                    ._stopwatch=${this._stopwatch}
                ></stopwatch-component>`;
                break;
        }
        return result;
    }
    // helpers for using clocktype mode
    isClock() {
        return this._clocktype === "clock";
    }
    isTimer() {
        return this._clocktype === "timer";
    }
    isStopwatch() {
        return this._clocktype === "stopwatch";
    }
    // set card size parameters for ha
    getCardSize() {
        return 4;
    }
    getGridOptions() {
        return {
            rows: 5,
            columns: 12,
            min_rows: 4,
            max_rows: 4
        };
    }
}


customElements.define("my-clock-card", (0, $b161f025c07cf354$export$7fe46a8978a1b23d));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "my-clock-card",
    name: "my clock card",
    description: "Clock, Timer, Stopwatch"
});


//# sourceMappingURL=card.js.map
