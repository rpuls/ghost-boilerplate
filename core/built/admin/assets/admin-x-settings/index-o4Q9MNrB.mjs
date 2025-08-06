class N {
  /**
  Get the line description around the given position.
  */
  lineAt(t) {
    if (t < 0 || t > this.length)
      throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(t) {
    if (t < 1 || t > this.lines)
      throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(t, e, i) {
    let n = [];
    return this.decompose(
      0,
      t,
      n,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      e,
      this.length,
      n,
      1
      /* Open.From */
    ), It.from(n, this.length - (e - t) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(t, e = this.length) {
    let i = [];
    return this.decompose(t, e, i, 0), It.from(i, e - t);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(t) {
    if (t == this)
      return !0;
    if (t.length != this.length || t.lines != this.lines)
      return !1;
    let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), n = new We(this), r = new We(t);
    for (let o = e, l = e; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(t = 1) {
    return new We(this, t);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(t, e = this.length) {
    return new ho(this, t, e);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(t, e) {
    let i;
    if (t == null)
      i = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let n = this.line(t).from;
      i = this.iterRange(n, Math.max(n, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new fo(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(t) {
    if (t.length == 0)
      throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? N.empty : t.length <= 32 ? new G(t) : It.from(G.split(t, []));
  }
}
class G extends N {
  constructor(t, e = da(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((e ? i : l) >= t)
        return new pa(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(t, e, i, n) {
    let r = t <= 0 && e >= this.length ? this : new G(Es(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (n & 1) {
      let o = i.pop(), l = Ci(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new G(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new G(l.slice(0, a)), new G(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(t, e, i) {
    if (!(i instanceof G))
      return super.replace(t, e, i);
    let n = Ci(this.text, Ci(i.text, Es(this.text, 0, t)), e), r = this.length + i.length - (e - t);
    return n.length <= 32 ? new G(n, r) : It.from(G.split(n, []), r);
  }
  sliceString(t, e = this.length, i = `
`) {
    let n = "";
    for (let r = 0, o = 0; r <= e && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > t && o && (n += i), t < a && e > r && (n += l.slice(Math.max(0, t - r), e - r)), r = a + 1;
    }
    return n;
  }
  flatten(t) {
    for (let e of this.text)
      t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let i = [], n = -1;
    for (let r of t)
      i.push(r), n += r.length + 1, i.length == 32 && (e.push(new G(i, n)), i = [], n = -1);
    return n > -1 && e.push(new G(i, n)), e;
  }
}
class It extends N {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let i of t)
      this.lines += i.lines;
  }
  lineInner(t, e, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((e ? a : l) >= t)
        return o.lineInner(t, e, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(t, e, i, n) {
    for (let r = 0, o = 0; o <= e && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (t <= a && e >= o) {
        let h = n & ((o <= t ? 1 : 0) | (a >= e ? 2 : 0));
        o >= t && a <= e && !h ? i.push(l) : l.decompose(t - o, e - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(t, e, i) {
    if (i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (t >= r && e <= l) {
          let a = o.replace(t - r, e - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let f = this.children.slice();
            return f[n] = a, new It(f, this.length - (e - t) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(t, e, i);
  }
  sliceString(t, e = this.length, i = `
`) {
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= e; r++) {
      let l = this.children[r], a = o + l.length;
      o > t && r && (n += i), t < a && e > o && (n += l.sliceString(t - o, e - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(t) {
    for (let e of this.children)
      e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof It))
      return 0;
    let i = 0, [n, r, o, l] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; n += e, r += e) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], h = t.children[r];
      if (a != h)
        return i + a.scanIdentical(h, e);
      i += a.length + 1;
    }
  }
  static from(t, e = t.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of t)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of t)
        p.flatten(d);
      return new G(d, e);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = n << 1, o = n >> 1, l = [], a = 0, h = -1, f = [];
    function c(d) {
      let p;
      if (d.lines > r && d instanceof It)
        for (let g of d.children)
          c(g);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof G && a && (p = f[f.length - 1]) instanceof G && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, f[f.length - 1] = new G(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, h += d.length + 1, f.push(d));
    }
    function u() {
      a != 0 && (l.push(f.length == 1 ? f[0] : It.from(f, h)), h = -1, a = f.length = 0);
    }
    for (let d of t)
      c(d);
    return u(), l.length == 1 ? l[0] : new It(l, e);
  }
}
N.empty = /* @__PURE__ */ new G([""], 0);
function da(s) {
  let t = -1;
  for (let e of s)
    t += e.length + 1;
  return t;
}
function Ci(s, t, e = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= e && (a > i && (l = l.slice(0, i - n)), n < e && (l = l.slice(e - n)), o ? (t[t.length - 1] += l, o = !1) : t.push(l)), n = a + 1;
  }
  return t;
}
function Es(s, t, e) {
  return Ci(s, [""], t, e);
}
class We {
  constructor(t, e = 1) {
    this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof G ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof G ? n.text.length : n.children.length;
      if (o == (e > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[i] += e, t == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        t--;
      } else if (n instanceof G) {
        let a = n.text[o + (e < 0 ? -1 : 0)];
        if (this.offsets[i] += e, a.length > Math.max(0, t))
          return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
        t -= a.length;
      } else {
        let a = n.children[o + (e < 0 ? -1 : 0)];
        t > a.length ? (t -= a.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof G ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class ho {
  constructor(t, e, i) {
    this.value = "", this.done = !1, this.cursor = new We(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let i = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > i && (t = i), i -= t;
    let { value: n } = this.cursor.next(t);
    return this.pos += (n.length + t) * e, this.value = n.length <= i ? n : e < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class fo {
  constructor(t) {
    this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(t = 0) {
    let { done: e, lineBreak: i, value: n } = this.inner.next(t);
    return e ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (N.prototype[Symbol.iterator] = function() {
  return this.iter();
}, We.prototype[Symbol.iterator] = ho.prototype[Symbol.iterator] = fo.prototype[Symbol.iterator] = function() {
  return this;
});
class pa {
  /**
  @internal
  */
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.number = i, this.text = n;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
let ve = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((s) => s ? parseInt(s, 36) : 1);
for (let s = 1; s < ve.length; s++)
  ve[s] += ve[s - 1];
function ga(s) {
  for (let t = 1; t < ve.length; t += 2)
    if (ve[t] > s)
      return ve[t - 1] <= s;
  return !1;
}
function Ls(s) {
  return s >= 127462 && s <= 127487;
}
const Is = 8205;
function Ht(s, t, e = !0, i = !0) {
  return (e ? co : ma)(s, t, i);
}
function co(s, t, e) {
  if (t == s.length)
    return t;
  t && uo(s.charCodeAt(t)) && po(s.charCodeAt(t - 1)) && t--;
  let i = lt(s, t);
  for (t += Ot(i); t < s.length; ) {
    let n = lt(s, t);
    if (i == Is || n == Is || e && ga(n))
      t += Ot(n), i = n;
    else if (Ls(n)) {
      let r = 0, o = t - 2;
      for (; o >= 0 && Ls(lt(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      t += 2;
    } else
      break;
  }
  return t;
}
function ma(s, t, e) {
  for (; t > 0; ) {
    let i = co(s, t - 2, e);
    if (i < t)
      return i;
    t--;
  }
  return 0;
}
function uo(s) {
  return s >= 56320 && s < 57344;
}
function po(s) {
  return s >= 55296 && s < 56320;
}
function lt(s, t) {
  let e = s.charCodeAt(t);
  if (!po(e) || t + 1 == s.length)
    return e;
  let i = s.charCodeAt(t + 1);
  return uo(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function go(s) {
  return s <= 65535 ? String.fromCharCode(s) : (s -= 65536, String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320));
}
function Ot(s) {
  return s < 65536 ? 1 : 2;
}
const Sn = /\r\n?|\n/;
var nt = /* @__PURE__ */ function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
}(nt || (nt = {}));
class Wt {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(t) {
    this.sections = t;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2)
      t += this.sections[e];
    return t;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e + 1];
      t += i < 0 ? this.sections[e] : i;
    }
    return t;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(t) {
    for (let e = 0, i = 0, n = 0; e < this.sections.length; ) {
      let r = this.sections[e++], o = this.sections[e++];
      o < 0 ? (t(i, n, r), n += r) : n += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(t, e = !1) {
    Cn(this, t, e);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], n = this.sections[e++];
      n < 0 ? t.push(i, n) : t.push(n, i);
    }
    return new Wt(t);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : mo(this, t);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(t, e = !1) {
    return t.empty ? this : An(this, t, e);
  }
  mapPos(t, e = -1, i = nt.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > t)
          return r + (t - n);
        r += l;
      } else {
        if (i != nt.Simple && h >= t && (i == nt.TrackDel && n < t && h > t || i == nt.TrackBefore && n < t || i == nt.TrackAfter && h > t))
          return null;
        if (h > t || h == t && e < 0 && !l)
          return t == n || e < 0 ? r : r + a;
        r += a;
      }
      n = h;
    }
    if (t > n)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(t, e = t) {
    for (let i = 0, n = 0; i < this.sections.length && n <= e; ) {
      let r = this.sections[i++], o = this.sections[i++], l = n + r;
      if (o >= 0 && n <= e && l >= t)
        return n < t && l > e ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], n = this.sections[e++];
      t += (t ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return t;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Wt(t);
  }
  /**
  @internal
  */
  static create(t) {
    return new Wt(t);
  }
}
class Q extends Wt {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(t) {
    if (this.length != t.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Cn(this, (e, i, n, r, o) => t = t.replace(n, n + (i - e), o), !1), t;
  }
  mapDesc(t, e = !1) {
    return An(this, t, e, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(t) {
    let e = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < e.length; n += 2) {
      let o = e[n], l = e[n + 1];
      if (l >= 0) {
        e[n] = l, e[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(N.empty);
        i.push(o ? t.slice(r, r + o) : N.empty);
      }
      r += o;
    }
    return new Q(e, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(t) {
    return this.empty ? t : t.empty ? this : mo(this, t, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(t, e = !1) {
    return t.empty ? this : An(this, t, e, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(t, e = !1) {
    Cn(this, t, e);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Wt.create(this.sections);
  }
  /**
  @internal
  */
  filter(t) {
    let e = [], i = [], n = [], r = new Ke(this);
    t: for (let o = 0, l = 0; ; ) {
      let a = o == t.length ? 1e9 : t[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break t;
        let f = Math.min(r.len, a - l);
        ot(n, f, -1);
        let c = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        ot(e, f, c), c > 0 && Gt(i, e, r.text), r.forward(f), l += f;
      }
      let h = t[o++];
      for (; l < h; ) {
        if (r.done)
          break t;
        let f = Math.min(r.len, h - l);
        ot(e, f, -1), ot(n, f, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(f), l += f;
      }
    }
    return {
      changes: new Q(e, i),
      filtered: Wt.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e], n = this.sections[e + 1];
      n < 0 ? t.push(i) : n == 0 ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(t, e, i) {
    let n = [], r = [], o = 0, l = null;
    function a(f = !1) {
      if (!f && !n.length)
        return;
      o < e && ot(n, e - o, -1);
      let c = new Q(n, r);
      l = l ? l.compose(c.map(l)) : c, n = [], r = [], o = 0;
    }
    function h(f) {
      if (Array.isArray(f))
        for (let c of f)
          h(c);
      else if (f instanceof Q) {
        if (f.length != e)
          throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${e})`);
        a(), l = l ? l.compose(f.map(l)) : f;
      } else {
        let { from: c, to: u = c, insert: d } = f;
        if (c > u || c < 0 || u > e)
          throw new RangeError(`Invalid change range ${c} to ${u} (in doc of length ${e})`);
        let p = d ? typeof d == "string" ? N.of(d.split(i || Sn)) : d : N.empty, g = p.length;
        if (c == u && g == 0)
          return;
        c < o && a(), c > o && ot(n, c - o, -1), ot(n, u - c, g), Gt(r, n, p), o = u;
      }
    }
    return h(t), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(t) {
    return new Q(t ? [t, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], i = [];
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (typeof r == "number")
        e.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          e.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(N.empty);
          i[n] = N.of(r.slice(1)), e.push(r[0], i[n].length);
        }
      }
    }
    return new Q(e, i);
  }
  /**
  @internal
  */
  static createSet(t, e) {
    return new Q(t, e);
  }
}
function ot(s, t, e, i = !1) {
  if (t == 0 && e <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && e <= 0 && e == s[n + 1] ? s[n] += t : t == 0 && s[n] == 0 ? s[n + 1] += e : i ? (s[n] += t, s[n + 1] += e) : s.push(t, e);
}
function Gt(s, t, e) {
  if (e.length == 0)
    return;
  let i = t.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(e);
  else {
    for (; s.length < i; )
      s.push(N.empty);
    s.push(e);
  }
}
function Cn(s, t, e) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let h = n, f = r, c = N.empty;
      for (; h += l, f += a, a && i && (c = c.append(i[o - 2 >> 1])), !(e || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      t(n, h, r, f, c), n = h, r = f;
    }
  }
}
function An(s, t, e, i = !1) {
  let n = [], r = i ? [] : null, o = new Ke(s), l = new Ke(t);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ot(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
      let h = l.len;
      for (ot(n, l.ins, -1); h; ) {
        let f = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= f && (ot(n, 0, o.ins), r && Gt(r, n, o.text), a = o.i), o.forward(f), h -= f;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, f = o.len;
      for (; f; )
        if (l.ins == -1) {
          let c = Math.min(f, l.len);
          h += c, f -= c, l.forward(c);
        } else if (l.ins == 0 && l.len < f)
          f -= l.len, l.next();
        else
          break;
      ot(n, h, a < o.i ? o.ins : 0), r && a < o.i && Gt(r, n, o.text), a = o.i, o.forward(o.len - f);
    } else {
      if (o.done && l.done)
        return r ? Q.createSet(n, r) : Wt.create(n);
      throw new Error("Mismatched change set lengths");
    }
}
function mo(s, t, e = !1) {
  let i = [], n = e ? [] : null, r = new Ke(s), o = new Ke(t);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? Q.createSet(i, n) : Wt.create(i);
    if (r.ins == 0)
      ot(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      ot(i, 0, o.ins, l), n && Gt(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let f = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ot(i, a, f, l), n && f && Gt(n, i, o.text);
        } else o.ins == -1 ? (ot(i, r.off ? 0 : r.len, a, l), n && Gt(n, i, r.textBit(a))) : (ot(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && Gt(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Ke {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? N.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, i = this.i - 2 >> 1;
    return i >= e.length && !t ? N.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class oe {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 16 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 16 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let t = this.flags & 3;
    return t == 3 ? null : t;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let t = this.flags >> 5;
    return t == 33554431 ? void 0 : t;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(t, e = -1) {
    let i, n;
    return this.empty ? i = n = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), n = t.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new oe(i, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(t, e = t) {
    if (t <= this.anchor && e >= this.anchor)
      return S.range(t, e);
    let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return S.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(t) {
    return this.anchor == t.anchor && this.head == t.head;
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return S.range(t.anchor, t.head);
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new oe(t, e, i);
  }
}
class S {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(t, e = -1) {
    return t.empty ? this : S.create(this.ranges.map((i) => i.map(t, e)), this.mainIndex);
  }
  /**
  Compare this selection to another selection.
  */
  eq(t) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex)
      return !1;
    for (let e = 0; e < this.ranges.length; e++)
      if (!this.ranges[e].eq(t.ranges[e]))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new S([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(t, e = !0) {
    return S.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(t, e = this.mainIndex) {
    let i = this.ranges.slice();
    return i[e] = t, S.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new S(t.ranges.map((e) => oe.fromJSON(e)), t.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(t, e = t) {
    return new S([S.range(t, e)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < t.length; n++) {
      let r = t[n];
      if (r.empty ? r.from <= i : r.from < i)
        return S.normalized(t.slice(), e);
      i = r.to;
    }
    return new S(t, e);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(t, e = 0, i, n) {
    return oe.create(t, t, (e == 0 ? 0 : e < 0 ? 4 : 8) | (i == null ? 3 : Math.min(2, i)) | (n ?? 33554431) << 5);
  }
  /**
  Create a selection range.
  */
  static range(t, e, i, n) {
    let r = (i ?? 33554431) << 5 | (n == null ? 3 : Math.min(2, n));
    return e < t ? oe.create(e, t, 24 | r) : oe.create(t, e, (e > t ? 4 : 0) | r);
  }
  /**
  @internal
  */
  static normalized(t, e = 0) {
    let i = t[e];
    t.sort((n, r) => n.from - r.from), e = t.indexOf(i);
    for (let n = 1; n < t.length; n++) {
      let r = t[n], o = t[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= e && e--, t.splice(--n, 2, r.anchor > r.head ? S.range(a, l) : S.range(l, a));
      }
    }
    return new S(t, e);
  }
}
function yo(s, t) {
  for (let e of s.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let fs = 0;
class O {
  constructor(t, e, i, n, r) {
    this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = n, this.id = fs++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Define a new facet.
  */
  static define(t = {}) {
    return new O(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : cs), !!t.static, t.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(t) {
    return new Ai([], this, 0, t);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Ai(t, this, 1, e);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Ai(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (i) => i), this.compute([t], (i) => e(i.field(t)));
  }
}
function cs(s, t) {
  return s == t || s.length == t.length && s.every((e, i) => e === t[i]);
}
class Ai {
  constructor(t, e, i, n) {
    this.dependencies = t, this.facet = e, this.type = i, this.value = n, this.id = fs++;
  }
  dynamicSlot(t) {
    var e;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = t[r] >> 1, l = this.type == 2, a = !1, h = !1, f = [];
    for (let c of this.dependencies)
      c == "doc" ? a = !0 : c == "selection" ? h = !0 : ((e = t[c.id]) !== null && e !== void 0 ? e : 1) & 1 || f.push(t[c.id]);
    return {
      create(c) {
        return c.values[o] = i(c), 1;
      },
      update(c, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || Mn(c, f)) {
          let d = i(c);
          if (l ? !Ns(d, c.values[o], n) : !n(d, c.values[o]))
            return c.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (c, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let g = Li(u, p);
          if (this.dependencies.every((m) => m instanceof O ? u.facet(m) === c.facet(m) : m instanceof bt ? u.field(m, !1) == c.field(m, !1) : !0) || (l ? Ns(d = i(c), g, n) : n(d = i(c), g)))
            return c.values[o] = g, 0;
        } else
          d = i(c);
        return c.values[o] = d, 1;
      }
    };
  }
}
function Ns(s, t, e) {
  if (s.length != t.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!e(s[i], t[i]))
      return !1;
  return !0;
}
function Mn(s, t) {
  let e = !1;
  for (let i of t)
    ze(s, i) & 1 && (e = !0);
  return e;
}
function ya(s, t, e) {
  let i = e.map((a) => s[a.id]), n = e.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = s[t.id] >> 1;
  function l(a) {
    let h = [];
    for (let f = 0; f < i.length; f++) {
      let c = Li(a, i[f]);
      if (n[f] == 2)
        for (let u of c)
          h.push(u);
      else
        h.push(c);
    }
    return t.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        ze(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!Mn(a, r))
        return 0;
      let f = l(a);
      return t.compare(f, a.values[o]) ? 0 : (a.values[o] = f, 1);
    },
    reconfigure(a, h) {
      let f = Mn(a, i), c = h.config.facets[t.id], u = h.facet(t);
      if (c && !f && cs(e, c))
        return a.values[o] = u, 0;
      let d = l(a);
      return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const Hs = /* @__PURE__ */ O.define({ static: !0 });
class bt {
  constructor(t, e, i, n, r) {
    this.id = t, this.createF = e, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(t) {
    let e = new bt(fs++, t.create, t.update, t.compare || ((i, n) => i === n), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(Hs).find((i) => i.field == this);
    return ((e == null ? void 0 : e.create) || this.createF)(t);
  }
  /**
  @internal
  */
  slot(t) {
    let e = t[this.id] >> 1;
    return {
      create: (i) => (i.values[e] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[e], o = this.updateF(r, n);
        return this.compareF(r, o) ? 0 : (i.values[e] = o, 1);
      },
      reconfigure: (i, n) => n.config.address[this.id] != null ? (i.values[e] = n.field(this), 0) : (i.values[e] = this.create(i), 1)
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(t) {
    return [this, Hs.of({ field: this, create: t })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const re = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Re(s) {
  return (t) => new bo(t, s);
}
const Te = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Re(re.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Re(re.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Re(re.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Re(re.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Re(re.lowest)
};
class bo {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class Yi {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(t) {
    return new On(this, t);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(t) {
    return Yi.reconfigure.of({ compartment: this, extension: t });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(t) {
    return t.config.compartments.get(this);
  }
}
class On {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class Ei {
  constructor(t, e, i, n, r, o) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of ba(t, e, o))
      u instanceof bt ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of n)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let f = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = f && f[u] || [];
      if (d.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, cs(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((y) => m.dynamicSlot(y)));
        l[p.id] = h.length << 1, h.push((m) => ya(m, p, d));
      }
    }
    let c = h.map((u) => u(l));
    return new Ei(t, o, c, l, a, r);
  }
}
function ba(s, t, e) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof On && e.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof On) {
      if (e.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = t.get(o.compartment) || o.inner;
      e.set(o.compartment, h), r(h, l);
    } else if (o instanceof bo)
      r(o.inner, o.prec);
    else if (o instanceof bt)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Ai)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, re.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(s, re.default), i.reduce((o, l) => o.concat(l));
}
function ze(s, t) {
  if (t & 1)
    return 2;
  let e = t >> 1, i = s.status[e];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[e] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[e]);
  return s.status[e] = 2 | n;
}
function Li(s, t) {
  return t & 1 ? s.config.staticValues[t >> 1] : s.values[t >> 1];
}
const wo = /* @__PURE__ */ O.define(), xo = /* @__PURE__ */ O.define({
  combine: (s) => s.some((t) => t),
  static: !0
}), vo = /* @__PURE__ */ O.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), ko = /* @__PURE__ */ O.define(), So = /* @__PURE__ */ O.define(), Co = /* @__PURE__ */ O.define(), Ao = /* @__PURE__ */ O.define({
  combine: (s) => s.length ? s[0] : !1
});
class de {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new wa();
  }
}
class wa {
  /**
  Create an instance of this annotation.
  */
  of(t) {
    return new de(this, t);
  }
}
class xa {
  /**
  @internal
  */
  constructor(t) {
    this.map = t;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(t) {
    return new E(this, t);
  }
}
class E {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new E(this.type, e);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(t) {
    return this.type == t;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(t = {}) {
    return new xa(t.map || ((e) => e));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let i = [];
    for (let n of t) {
      let r = n.map(e);
      r && i.push(r);
    }
    return i;
  }
}
E.reconfigure = /* @__PURE__ */ E.define();
E.appendConfig = /* @__PURE__ */ E.define();
class at {
  constructor(t, e, i, n, r, o) {
    this.startState = t, this.changes = e, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && yo(i, e.newLength), r.some((l) => l.type == at.time) || (this.annotations = r.concat(at.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(t, e, i, n, r, o) {
    return new at(t, e, i, n, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(t) {
    for (let e of this.annotations)
      if (e.type == t)
        return e.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(t) {
    let e = this.annotation(at.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
at.time = /* @__PURE__ */ de.define();
at.userEvent = /* @__PURE__ */ de.define();
at.addToHistory = /* @__PURE__ */ de.define();
at.remote = /* @__PURE__ */ de.define();
function va(s, t) {
  let e = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == t.length || t[n] >= s[i]))
      r = s[i++], o = s[i++];
    else if (n < t.length)
      r = t[n++], o = t[n++];
    else
      return e;
    !e.length || e[e.length - 1] < r ? e.push(r, o) : e[e.length - 1] < o && (e[e.length - 1] = o);
  }
}
function Mo(s, t, e) {
  var i;
  let n, r, o;
  return e ? (n = t.changes, r = Q.empty(t.changes.length), o = s.changes.compose(t.changes)) : (n = t.changes.map(s.changes), r = s.changes.mapDesc(t.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: t.selection ? t.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: E.mapEffects(s.effects, n).concat(E.mapEffects(t.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: s.scrollIntoView || t.scrollIntoView
  };
}
function Dn(s, t, e) {
  let i = t.selection, n = ke(t.annotations);
  return t.userEvent && (n = n.concat(at.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof Q ? t.changes : Q.of(t.changes || [], e, s.facet(vo)),
    selection: i && (i instanceof S ? i : S.single(i.anchor, i.head)),
    effects: ke(t.effects),
    annotations: n,
    scrollIntoView: !!t.scrollIntoView
  };
}
function Oo(s, t, e) {
  let i = Dn(s, t.length ? t[0] : {}, s.doc.length);
  t.length && t[0].filter === !1 && (e = !1);
  for (let r = 1; r < t.length; r++) {
    t[r].filter === !1 && (e = !1);
    let o = !!t[r].sequential;
    i = Mo(i, Dn(s, t[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = at.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Sa(e ? ka(n) : n);
}
function ka(s) {
  let t = s.startState, e = !0;
  for (let n of t.facet(ko)) {
    let r = n(s);
    if (r === !1) {
      e = !1;
      break;
    }
    Array.isArray(r) && (e = e === !0 ? r : va(e, r));
  }
  if (e !== !0) {
    let n, r;
    if (e === !1)
      r = s.changes.invertedDesc, n = Q.empty(t.doc.length);
    else {
      let o = s.changes.filter(e);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = at.create(t, n, s.selection && s.selection.map(r), E.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = t.facet(So);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof at ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof at ? s = r[0] : s = Oo(t, ke(r), !1);
  }
  return s;
}
function Sa(s) {
  let t = s.startState, e = t.facet(Co), i = s;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n](s);
    r && Object.keys(r).length && (i = Mo(i, Dn(t, r, s.changes.newLength), !0));
  }
  return i == s ? s : at.create(t, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Ca = [];
function ke(s) {
  return s == null ? Ca : Array.isArray(s) ? s : [s];
}
var kt = /* @__PURE__ */ function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
}(kt || (kt = {}));
const Aa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Tn;
try {
  Tn = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Ma(s) {
  if (Tn)
    return Tn.test(s);
  for (let t = 0; t < s.length; t++) {
    let e = s[t];
    if (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Aa.test(e)))
      return !0;
  }
  return !1;
}
function Oa(s) {
  return (t) => {
    if (!/\S/.test(t))
      return kt.Space;
    if (Ma(t))
      return kt.Word;
    for (let e = 0; e < s.length; e++)
      if (t.indexOf(s[e]) > -1)
        return kt.Word;
    return kt.Other;
  };
}
class I {
  constructor(t, e, i, n, r, o) {
    this.config = t, this.doc = e, this.selection = i, this.values = n, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      ze(this, l << 1);
    this.computeSlot = null;
  }
  field(t, e = !0) {
    let i = this.config.address[t.id];
    if (i == null) {
      if (e)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ze(this, i), Li(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...t) {
    return Oo(this, t, !0);
  }
  /**
  @internal
  */
  applyTransaction(t) {
    let e = this.config, { base: i, compartments: n } = e;
    for (let o of t.effects)
      o.is(Yi.reconfigure) ? (e && (n = /* @__PURE__ */ new Map(), e.compartments.forEach((l, a) => n.set(a, l)), e = null), n.set(o.value.compartment, o.value.extension)) : o.is(E.reconfigure) ? (e = null, i = o.value) : o.is(E.appendConfig) && (e = null, i = ke(i).concat(o.value));
    let r;
    e ? r = t.startState.values.slice() : (e = Ei.resolve(i, n, this), r = new I(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new I(e, t.newDoc, t.newSelection, r, (o, l) => l.update(o, t), t);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
      changes: { from: e.from, to: e.to, insert: t },
      range: S.cursor(e.from + t.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(t) {
    let e = this.selection, i = t(e.ranges[0]), n = this.changes(i.changes), r = [i.range], o = ke(i.effects);
    for (let l = 1; l < e.ranges.length; l++) {
      let a = t(e.ranges[l]), h = this.changes(a.changes), f = h.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(f);
      let c = n.mapDesc(h, !0);
      r.push(a.range.map(c)), n = n.compose(f), o = E.mapEffects(o, f).concat(E.mapEffects(ke(a.effects), c));
    }
    return {
      changes: n,
      selection: S.create(r, e.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(t = []) {
    return t instanceof Q ? t : Q.of(t, this.doc.length, this.facet(I.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(t) {
    return N.of(t.split(this.facet(I.lineSeparator) || Sn));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (ze(this, e), Li(this, e));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(t) {
    let e = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (t)
      for (let i in t) {
        let n = t[i];
        n instanceof bt && this.config.address[n.id] != null && (e[i] = n.spec.toJSON(this.field(t[i]), this));
      }
    return e;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(t, e = {}, i) {
    if (!t || typeof t.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          let o = i[r], l = t[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return I.create({
      doc: t.doc,
      selection: S.fromJSON(t.selection),
      extensions: e.extensions ? n.concat([e.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(t = {}) {
    let e = Ei.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof N ? t.doc : N.of((t.doc || "").split(e.staticFacet(I.lineSeparator) || Sn)), n = t.selection ? t.selection instanceof S ? t.selection : S.single(t.selection.anchor, t.selection.head) : S.single(0);
    return yo(n, i.length), e.staticFacet(xo) || (n = n.asSingle()), new I(e, i, n, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(I.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(I.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Ao);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(t, ...e) {
    for (let i of this.facet(I.phrases))
      if (Object.prototype.hasOwnProperty.call(i, t)) {
        t = i[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > e.length ? i : e[r - 1];
    })), t;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(t, e, i = -1) {
    let n = [];
    for (let r of this.facet(wo))
      for (let o of r(this, e, i))
        Object.prototype.hasOwnProperty.call(o, t) && n.push(o[t]);
    return n;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(t) {
    return Oa(this.languageDataAt("wordChars", t).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(t) {
    let { text: e, from: i, length: n } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - i, l = t - i;
    for (; o > 0; ) {
      let a = Ht(e, o, !1);
      if (r(e.slice(a, o)) != kt.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = Ht(e, l);
      if (r(e.slice(l, a)) != kt.Word)
        break;
      l = a;
    }
    return o == l ? null : S.range(o + i, l + i);
  }
}
I.allowMultipleSelections = xo;
I.tabSize = /* @__PURE__ */ O.define({
  combine: (s) => s.length ? s[0] : 4
});
I.lineSeparator = vo;
I.readOnly = Ao;
I.phrases = /* @__PURE__ */ O.define({
  compare(s, t) {
    let e = Object.keys(s), i = Object.keys(t);
    return e.length == i.length && e.every((n) => s[n] == t[n]);
  }
});
I.languageData = wo;
I.changeFilter = ko;
I.transactionFilter = So;
I.transactionExtender = Co;
Yi.reconfigure = /* @__PURE__ */ E.define();
function Pe(s, t, e = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(e, r))
        i[r] = e[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let n in t)
    i[n] === void 0 && (i[n] = t[n]);
  return i;
}
class he {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(t) {
    return this == t;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(t, e = t) {
    return Pn.create(t, e, this);
  }
}
he.prototype.startSide = he.prototype.endSide = 0;
he.prototype.point = !1;
he.prototype.mapMode = nt.TrackDel;
let Pn = class Do {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.value = i;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Do(t, e, i);
  }
};
function Bn(s, t) {
  return s.from - t.from || s.value.startSide - t.value.startSide;
}
class us {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(t, e, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - t || (i ? this.value[a].endSide : this.value[a].startSide) - e;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(t, e, i, n) {
    for (let r = this.findIndex(e, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + t, this.to[r] + t, this.value[r]) === !1)
        return !1;
  }
  map(t, e) {
    let i = [], n = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], f = this.from[a] + t, c = this.to[a] + t, u, d;
      if (f == c) {
        let p = e.mapPos(f, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = e.mapPos(f, h.endSide), d < u)))
          continue;
      } else if (u = e.mapPos(f, h.startSide), d = e.mapPos(c, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), n.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new us(n, r, i, l) : null, pos: o };
  }
}
class H {
  constructor(t, e, i, n) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(t, e, i, n) {
    return new H(t, e, i, n);
  }
  /**
  @internal
  */
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk)
      t += e.value.length;
    return t;
  }
  /**
  @internal
  */
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(t) {
    let { add: e = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = t, o = t.filter;
    if (e.length == 0 && !o)
      return this;
    if (i && (e = e.slice().sort(Bn)), this.isEmpty)
      return e.length ? H.of(e) : this;
    let l = new To(this, null, -1).goto(0), a = 0, h = [], f = new fe();
    for (; l.value || a < e.length; )
      if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
        let c = e[a++];
        f.addInner(c.from, c.to, c.value) || h.push(c);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && f.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (f.addInner(l.from, l.to, l.value) || h.push(Pn.create(l.from, l.to, l.value))), l.next());
    return f.finishInner(this.nextLayer.isEmpty && !h.length ? H.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(t) {
    if (t.empty || this.isEmpty)
      return this;
    let e = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = t.touchesRange(l, l + a.length);
      if (h === !1)
        n = Math.max(n, a.maxPoint), e.push(a), i.push(t.mapPos(l));
      else if (h === !0) {
        let { mapped: f, pos: c } = a.map(l, t);
        f && (n = Math.max(n, f.maxPoint), e.push(f), i.push(c));
      }
    }
    let r = this.nextLayer.map(t);
    return e.length == 0 ? r : new H(i, e, r || H.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(t, e, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (e >= r && t <= r + o.length && o.between(r, t - r, e - r, i) === !1)
          return;
      }
      this.nextLayer.between(t, e, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(t = 0) {
    return $e.from([this]).goto(t);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(t, e = 0) {
    return $e.from(t).goto(e);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(t, e, i, n, r = -1) {
    let o = t.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= r), l = e.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= r), a = Fs(o, l, i), h = new Ee(o, a, r), f = new Ee(l, a, r);
    i.iterGaps((c, u, d) => Vs(h, c, f, u, d, n)), i.empty && i.length == 0 && Vs(h, 0, f, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(t, e, i = 0, n) {
    n == null && (n = 999999999);
    let r = t.filter((f) => !f.isEmpty && e.indexOf(f) < 0), o = e.filter((f) => !f.isEmpty && t.indexOf(f) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = Fs(r, o), a = new Ee(r, l, 0).goto(i), h = new Ee(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !Rn(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(t, e, i, n, r = -1) {
    let o = new Ee(t, null, r).goto(e), l = e, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let f = o.activeForPoint(o.to), c = o.pointFrom < e ? f.length + 1 : Math.min(f.length, a);
        n.point(l, h, o.point, f, c, o.pointRank), a = Math.min(o.openEnd(h), f.length);
      } else h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(t, e = !1) {
    let i = new fe();
    for (let n of t instanceof Pn ? [t] : e ? Da(t) : t)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
}
H.empty = /* @__PURE__ */ new H([], [], null, -1);
function Da(s) {
  if (s.length > 1)
    for (let t = s[0], e = 1; e < s.length; e++) {
      let i = s[e];
      if (Bn(t, i) > 0)
        return s.slice().sort(Bn);
      t = i;
    }
  return s;
}
H.empty.nextLayer = H.empty;
class fe {
  finishChunk(t) {
    this.chunks.push(new us(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(t, e, i) {
    this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new fe())).add(t, e, i);
  }
  /**
  @internal
  */
  addInner(t, e, i) {
    let n = t - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0);
  }
  /**
  @internal
  */
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let i = e.value.length - 1;
    return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(H.empty);
  }
  /**
  @internal
  */
  finishInner(t) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return t;
    let e = H.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function Fs(s, t, e) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of t)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (e ? e.mapPos(l) : l) == r.chunkPos[o] && !(e != null && e.touchesRange(l, l + r.chunk[o].length)) && n.add(r.chunk[o]);
    }
  return n;
}
class To {
  constructor(t, e, i, n = 0) {
    this.layer = t, this.skip = e, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this;
  }
  gotoInner(t, e, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < t || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], i = t + e.from[this.rangeIndex];
        if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class $e {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, i = -1) {
    let n = [];
    for (let r = 0; r < t.length; r++)
      for (let o = t[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new To(o, e, i, r));
    return n.length == 1 ? n[0] : new $e(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let i of this.heap)
      i.goto(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      sn(this.heap, i);
    return this.next(), this;
  }
  forward(t, e) {
    for (let i of this.heap)
      i.forward(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      sn(this.heap, i);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), sn(this.heap, 0);
    }
  }
}
function sn(s, t) {
  for (let e = s[t]; ; ) {
    let i = (t << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), e.compare(n) < 0)
      break;
    s[i] = e, s[t] = n, t = i;
  }
}
class Ee {
  constructor(t, e, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = $e.from(t, e, i);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    oi(this.active, t), oi(this.activeTo, t), oi(this.activeRank, t), this.minActive = Ws(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; e < this.activeRank.length && this.activeRank[e] <= r; )
      e++;
    li(this.active, e, i), li(this.activeTo, e, n), li(this.activeRank, e, r), t && li(t, e, this.cursor.from), this.minActive = Ws(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > t) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && oi(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < t; n--)
        this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length)
      return this.active;
    let e = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--)
      e++;
    return e;
  }
}
function Vs(s, t, e, i, n, r) {
  s.goto(t), e.goto(i);
  let o = i + n, l = i, a = i - t;
  for (; ; ) {
    let h = s.to + a - e.to || s.endSide - e.endSide, f = h < 0 ? s.to + a : e.to, c = Math.min(f, o);
    if (s.point || e.point ? s.point && e.point && (s.point == e.point || s.point.eq(e.point)) && Rn(s.activeForPoint(s.to), e.activeForPoint(e.to)) || r.comparePoint(l, c, s.point, e.point) : c > l && !Rn(s.active, e.active) && r.compareRange(l, c, s.active, e.active), f > o)
      break;
    l = f, h <= 0 && s.next(), h >= 0 && e.next();
  }
}
function Rn(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++)
    if (s[e] != t[e] && !s[e].eq(t[e]))
      return !1;
  return !0;
}
function oi(s, t) {
  for (let e = t, i = s.length - 1; e < i; e++)
    s[e] = s[e + 1];
  s.pop();
}
function li(s, t, e) {
  for (let i = s.length - 1; i >= t; i--)
    s[i + 1] = s[i];
  s[t] = e;
}
function Ws(s, t) {
  let e = -1, i = 1e9;
  for (let n = 0; n < t.length; n++)
    (t[n] - i || s[n].endSide - s[e].endSide) < 0 && (e = n, i = t[n]);
  return e;
}
function ds(s, t, e = s.length) {
  let i = 0;
  for (let n = 0; n < e; )
    s.charCodeAt(n) == 9 ? (i += t - i % t, n++) : (i++, n = Ht(s, n));
  return i;
}
function En(s, t, e, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= t)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? e - r % e : 1, n = Ht(s, n);
  }
  return i === !0 ? -1 : s.length;
}
const Ln = "ͼ", zs = typeof Symbol > "u" ? "__" + Ln : Symbol.for(Ln), In = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), qs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Xt {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(t, e) {
    this.rules = [];
    let { finish: i } = e || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let f = [], c = /^@(\w+)\b/.exec(o[0]), u = c && c[1] == "keyframes";
      if (c && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!c) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, f, u);
        } else p != null && f.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (f.length || u) && a.push((i && !c && !h ? o.map(i) : o).join(", ") + " {" + f.join(" ") + "}");
    }
    for (let o in t) r(n(o), t[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let t = qs[zs] || 1;
    return qs[zs] = t + 1, Ln + t.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(t, e, i) {
    let n = t[In], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new Ta(t, r), n.mount(Array.isArray(e) ? e : [e]);
  }
}
let js = /* @__PURE__ */ new Map();
class Ta {
  constructor(t, e) {
    let i = t.ownerDocument || t, n = i.defaultView;
    if (!t.head && t.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = js.get(i);
      if (r)
        return t.adoptedStyleSheets = [r.sheet, ...t.adoptedStyleSheets], t[In] = r;
      this.sheet = new n.CSSStyleSheet(), t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets], js.set(i, this);
    } else {
      this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
      let r = t.head || t;
      r.insertBefore(this.styleTag, r.firstChild);
    }
    this.modules = [], t[In] = this;
  }
  mount(t) {
    let e = this.sheet, i = 0, n = 0;
    for (let r = 0; r < t.length; r++) {
      let o = t[r], l = this.modules.indexOf(o);
      if (l < n && l > -1 && (this.modules.splice(l, 1), n--, l = -1), l == -1) {
        if (this.modules.splice(n++, 0, o), e) for (let a = 0; a < o.rules.length; a++)
          e.insertRule(o.rules[a], i++);
      } else {
        for (; n < l; ) i += this.modules[n++].rules.length;
        i += o.rules.length, n++;
      }
    }
    if (!e) {
      let r = "";
      for (let o = 0; o < this.modules.length; o++)
        r += this.modules[o].getRules() + `
`;
      this.styleTag.textContent = r;
    }
  }
  setNonce(t) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
  }
}
var Qt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
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
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
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
  222: "'"
}, Ue = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Pa = typeof navigator < "u" && /Mac/.test(navigator.platform), Ba = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var it = 0; it < 10; it++) Qt[48 + it] = Qt[96 + it] = String(it);
for (var it = 1; it <= 24; it++) Qt[it + 111] = "F" + it;
for (var it = 65; it <= 90; it++)
  Qt[it] = String.fromCharCode(it + 32), Ue[it] = String.fromCharCode(it);
for (var rn in Qt) Ue.hasOwnProperty(rn) || (Ue[rn] = Qt[rn]);
function Ra(s) {
  var t = Pa && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || Ba && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", e = !t && s.key || (s.shiftKey ? Ue : Qt)[s.keyCode] || s.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function Ii(s) {
  let t;
  return s.nodeType == 11 ? t = s.getSelection ? s : s.ownerDocument : t = s, t.getSelection();
}
function Nn(s, t) {
  return t ? s == t || s.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function Ea(s) {
  let t = s.activeElement;
  for (; t && t.shadowRoot; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Mi(s, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return Nn(s, t.anchorNode);
  } catch {
    return !1;
  }
}
function Ae(s) {
  return s.nodeType == 3 ? ce(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function Ni(s, t, e, i) {
  return e ? Ks(s, t, e, i, -1) || Ks(s, t, e, i, 1) : !1;
}
function Hi(s) {
  for (var t = 0; ; t++)
    if (s = s.previousSibling, !s)
      return t;
}
function Ks(s, t, e, i, n) {
  for (; ; ) {
    if (s == e && t == i)
      return !0;
    if (t == (n < 0 ? 0 : Zt(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      t = Hi(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[t + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      t = n < 0 ? Zt(s) : 0;
    } else
      return !1;
  }
}
function Zt(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function Xi(s, t) {
  let e = t ? s.left : s.right;
  return { left: e, right: e, top: s.top, bottom: s.bottom };
}
function La(s) {
  return {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function Ia(s, t, e, i, n, r, o, l) {
  let a = s.ownerDocument, h = a.defaultView || window;
  for (let f = s, c = !1; f && !c; )
    if (f.nodeType == 1) {
      let u, d = f == a.body;
      if (d)
        u = La(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(f).position) && (c = !0), f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth) {
          f = f.assignedSlot || f.parentNode;
          continue;
        }
        let m = f.getBoundingClientRect();
        u = {
          left: m.left,
          right: m.left + f.clientWidth,
          top: m.top,
          bottom: m.top + f.clientHeight
        };
      }
      let p = 0, g = 0;
      if (n == "nearest")
        t.top < u.top ? (g = -(u.top - t.top + o), e > 0 && t.bottom > u.bottom + g && (g = t.bottom - u.bottom + g + o)) : t.bottom > u.bottom && (g = t.bottom - u.bottom + o, e < 0 && t.top - g < u.top && (g = -(u.top + g - t.top + o)));
      else {
        let m = t.bottom - t.top, y = u.bottom - u.top;
        g = (n == "center" && m <= y ? t.top + m / 2 - y / 2 : n == "start" || n == "center" && e < 0 ? t.top - o : t.bottom - y + o) - u.top;
      }
      if (i == "nearest" ? t.left < u.left ? (p = -(u.left - t.left + r), e > 0 && t.right > u.right + p && (p = t.right - u.right + p + r)) : t.right > u.right && (p = t.right - u.right + r, e < 0 && t.left < u.left + p && (p = -(u.left + p - t.left + r))) : p = (i == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, p || g)
        if (d)
          h.scrollBy(p, g);
        else {
          let m = 0, y = 0;
          if (g) {
            let v = f.scrollTop;
            f.scrollTop += g, y = f.scrollTop - v;
          }
          if (p) {
            let v = f.scrollLeft;
            f.scrollLeft += p, m = f.scrollLeft - v;
          }
          t = {
            left: t.left - m,
            top: t.top - y,
            right: t.right - m,
            bottom: t.bottom - y
          }, m && Math.abs(m - p) < 1 && (i = "nearest"), y && Math.abs(y - g) < 1 && (n = "nearest");
        }
      if (d)
        break;
      f = f.assignedSlot || f.parentNode;
    } else if (f.nodeType == 11)
      f = f.host;
    else
      break;
}
function Na(s) {
  let t = s.ownerDocument;
  for (let e = s.parentNode; e && e != t.body; )
    if (e.nodeType == 1) {
      if (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
        return e;
      e = e.assignedSlot || e.parentNode;
    } else if (e.nodeType == 11)
      e = e.host;
    else
      break;
  return null;
}
class Ha {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: i } = t;
    this.set(e, Math.min(t.anchorOffset, e ? Zt(e) : 0), i, Math.min(t.focusOffset, i ? Zt(i) : 0));
  }
  set(t, e, i, n) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = n;
  }
}
let me = null;
function Po(s) {
  if (s.setActive)
    return s.setActive();
  if (me)
    return s.focus(me);
  let t = [];
  for (let e = s; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
    ;
  if (s.focus(me == null ? {
    get preventScroll() {
      return me = { preventScroll: !0 }, !0;
    }
  } : void 0), !me) {
    me = !1;
    for (let e = 0; e < t.length; ) {
      let i = t[e++], n = t[e++], r = t[e++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let $s;
function ce(s, t, e = t) {
  let i = $s || ($s = document.createRange());
  return i.setEnd(s, e), i.setStart(s, t), i;
}
function Se(s, t, e) {
  let i = { key: t, code: t, keyCode: e, which: e, cancelable: !0 }, n = new KeyboardEvent("keydown", i);
  n.synthetic = !0, s.dispatchEvent(n);
  let r = new KeyboardEvent("keyup", i);
  return r.synthetic = !0, s.dispatchEvent(r), n.defaultPrevented || r.defaultPrevented;
}
function Fa(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function Bo(s) {
  for (; s.attributes.length; )
    s.removeAttributeNode(s.attributes[0]);
}
function Va(s, t) {
  let e = t.focusNode, i = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != i)
    return !1;
  for (i = Math.min(i, Zt(e)); ; )
    if (i) {
      if (e.nodeType != 1)
        return !1;
      let n = e.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (e = n, i = Zt(e));
    } else {
      if (e == s)
        return !0;
      i = Hi(e), e = e.parentNode;
    }
}
function Ro(s) {
  return s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
class ft {
  constructor(t, e, i = !0) {
    this.node = t, this.offset = e, this.precise = i;
  }
  static before(t, e) {
    return new ft(t.parentNode, Hi(t), e);
  }
  static after(t, e) {
    return new ft(t.parentNode, Hi(t) + 1, e);
  }
}
const ps = [];
class W {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t) {
    let e = this.posAtStart;
    for (let i of this.children) {
      if (i == t)
        return e;
      e += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  sync(t, e) {
    if (this.flags & 2) {
      let i = this.dom, n = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = n ? n.nextSibling : i.firstChild)) {
            let l = W.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(t, e), o.flags &= -8;
        }
        if (r = n ? n.nextSibling : i.firstChild, e && !e.written && e.node == i && r != o.dom && (e.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = Us(r);
        else
          i.insertBefore(o.dom, r);
        n = o.dom;
      }
      for (r = n ? n.nextSibling : i.firstChild, r && e && e.node == i && (e.written = !0); r; )
        r = Us(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(t, e), i.flags &= -8);
  }
  reuseDOM(t) {
  }
  localPosFromDOM(t, e) {
    let i;
    if (t == this.dom)
      i = this.dom.childNodes[e];
    else {
      let n = Zt(t) == 0 ? 0 : e == 0 ? -1 : 1;
      for (; ; ) {
        let r = t.parentNode;
        if (r == this.dom)
          break;
        n == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? n = -1 : n = 1), t = r;
      }
      n < 0 ? i = t : i = t.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !W.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let n = 0, r = 0; ; n++) {
      let o = this.children[n];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(t, e, i = 0) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, f = i; a < this.children.length; a++) {
      let c = this.children[a], u = h + c.length;
      if (h < t && u > e)
        return c.domBoundsAround(t, e, h);
      if (u >= t && n == -1 && (n = a, r = h), h > e && c.dom.parentNode == this.dom) {
        o = a, l = f;
        break;
      }
      f = u, h = u + c.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(t = !1) {
    this.flags |= 2, this.markParentsDirty(t);
  }
  markParentsDirty(t) {
    for (let e = this.parent; e; e = e.parent) {
      if (t && (e.flags |= 2), e.flags & 1)
        return;
      e.flags |= 1, t = !1;
    }
  }
  setParent(t) {
    this.parent != t && (this.parent = t, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(t) {
    this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this;
  }
  get rootView() {
    for (let t = this; ; ) {
      let e = t.parent;
      if (!e)
        return t;
      t = e;
    }
  }
  replaceChildren(t, e, i = ps) {
    this.markDirty();
    for (let n = t; n < e; n++) {
      let r = this.children[n];
      r.parent == this && r.destroy();
    }
    this.children.splice(t, e - t, ...i);
    for (let n = 0; n < i.length; n++)
      i[n].setParent(this);
  }
  ignoreMutation(t) {
    return !1;
  }
  ignoreEvent(t) {
    return !1;
  }
  childCursor(t = this.length) {
    return new Eo(this.children, t, this.children.length);
  }
  childPos(t, e = 1) {
    return this.childCursor().findPos(t, e);
  }
  toString() {
    let t = this.constructor.name.replace("View", "");
    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t) {
    return t.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(t, e, i, n, r, o) {
    return !1;
  }
  become(t) {
    return !1;
  }
  canReuseDOM(t) {
    return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
W.prototype.breakAfter = 0;
function Us(s) {
  let t = s.nextSibling;
  return s.parentNode.removeChild(s), t;
}
class Eo {
  constructor(t, e, i) {
    this.children = t, this.pos = e, this.i = i, this.off = 0;
  }
  findPos(t, e = 1) {
    for (; ; ) {
      if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = t - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function Lo(s, t, e, i, n, r, o, l, a) {
  let { children: h } = s, f = h.length ? h[t] : null, c = r.length ? r[r.length - 1] : null, u = c ? c.breakAfter : o;
  if (!(t == i && f && !o && !u && r.length < 2 && f.merge(e, n, r.length ? c : null, e == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && n < d.length ? (t == i && (d = d.split(n), n = 0), !u && c && d.merge(0, n, c, !0, 0, a) ? r[r.length - 1] = d : (n && d.merge(0, n, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (c ? c.breakAfter = 1 : o = 1), i++;
    }
    for (f && (f.breakAfter = o, e > 0 && (!o && r.length && f.merge(e, f.length, r[0], !1, l, 0) ? f.breakAfter = r.shift().breakAfter : (e < f.length || f.children.length && f.children[f.children.length - 1].length == 0) && f.merge(e, f.length, null, !1, l, 0), t++)); t < i && r.length; )
      if (h[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (h[t].become(r[0]))
        t++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && t && i < h.length && !h[t - 1].breakAfter && h[i].merge(0, 0, h[t - 1], !1, l, a) && t--, (t < i || r.length) && s.replaceChildren(t, i, r);
  }
}
function Io(s, t, e, i, n, r) {
  let o = s.childCursor(), { i: l, off: a } = o.findPos(e, 1), { i: h, off: f } = o.findPos(t, -1), c = t - e;
  for (let u of i)
    c += u.length;
  s.length += c, Lo(s, h, f, l, a, i, 0, n, r);
}
const ye = "￿";
class No {
  constructor(t, e) {
    this.points = t, this.text = "", this.lineSeparator = e.facet(I.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += ye;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let i = t.parentNode;
    for (let n = t; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = n.nextSibling;
      if (o == e)
        break;
      let l = W.get(n), a = W.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Gs(n)) || Gs(o) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > r) && this.lineBreak(), n = o;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(i, r < 0 ? e.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == t && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(t) {
    if (t.cmIgnore)
      return;
    let e = W.get(t), i = e && e.overrideDOMText;
    if (i != null) {
      this.findPointInside(t, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let i of this.points)
      i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let i of this.points)
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + Math.min(e, i.offset));
  }
}
function Gs(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
class _s {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
let vt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Hn = typeof document < "u" ? document : { documentElement: { style: {} } };
const Fn = /* @__PURE__ */ /Edge\/(\d+)/.exec(vt.userAgent), Ho = /* @__PURE__ */ /MSIE \d/.test(vt.userAgent), Vn = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vt.userAgent), Qi = !!(Ho || Vn || Fn), Js = !Qi && /* @__PURE__ */ /gecko\/(\d+)/i.test(vt.userAgent), on = !Qi && /* @__PURE__ */ /Chrome\/(\d+)/.exec(vt.userAgent), Wa = "webkitFontSmoothing" in Hn.documentElement.style, Fo = !Qi && /* @__PURE__ */ /Apple Computer/.test(vt.vendor), Ys = Fo && (/* @__PURE__ */ /Mobile\/\w+/.test(vt.userAgent) || vt.maxTouchPoints > 2);
var M = {
  mac: Ys || /* @__PURE__ */ /Mac/.test(vt.platform),
  windows: /* @__PURE__ */ /Win/.test(vt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(vt.platform),
  ie: Qi,
  ie_version: Ho ? Hn.documentMode || 6 : Vn ? +Vn[1] : Fn ? +Fn[1] : 0,
  gecko: Js,
  gecko_version: Js ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(vt.userAgent) || [0, 0])[1] : 0,
  chrome: !!on,
  chrome_version: on ? +on[1] : 0,
  ios: Ys,
  android: /* @__PURE__ */ /Android\b/.test(vt.userAgent),
  safari: Fo,
  webkit_version: Wa ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: Hn.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const za = 256;
class Vt extends W {
  constructor(t) {
    super(), this.text = t;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t) {
    this.setDOM(t || document.createTextNode(this.text));
  }
  sync(t, e) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(t) {
    t.nodeType == 3 && this.createDOM(t);
  }
  merge(t, e, i) {
    return this.flags & 8 || i && (!(i instanceof Vt) || this.length - (e - t) + i.length > za || i.flags & 8) ? !1 : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0);
  }
  split(t) {
    let e = new Vt(this.text.slice(t));
    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e;
  }
  localPosFromDOM(t, e) {
    return t == this.dom ? e : e ? this.text.length : 0;
  }
  domAtPos(t) {
    return new ft(this.dom, t);
  }
  domBoundsAround(t, e, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t, e) {
    return qa(this.dom, t, e);
  }
}
class qt extends W {
  constructor(t, e = [], i = 0) {
    super(), this.mark = t, this.children = e, this.length = i;
    for (let n of e)
      n.setParent(this);
  }
  setAttrs(t) {
    if (Bo(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
      for (let e in this.mark.attrs)
        t.setAttribute(e, this.mark.attrs[e]);
    return t;
  }
  canReuseDOM(t) {
    return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
  }
  reuseDOM(t) {
    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e);
  }
  merge(t, e, i, n, r, o) {
    return i && (!(i instanceof qt && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? !1 : (Io(this, t, e, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(t) {
    let e = [], i = 0, n = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > t && e.push(i < t ? l.split(t - i) : l), n < 0 && i >= t && (n = r), i = a, r++;
    }
    let o = this.length - t;
    return this.length = t, n > -1 && (this.children.length = n, this.markDirty()), new qt(this.mark, e, o);
  }
  domAtPos(t) {
    return Vo(this, t);
  }
  coordsAt(t, e) {
    return zo(this, t, e);
  }
}
function qa(s, t, e) {
  let i = s.nodeValue.length;
  t > i && (t = i);
  let n = t, r = t, o = 0;
  t == 0 && e < 0 || t == i && e >= 0 ? M.chrome || M.gecko || (t ? (n--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? n-- : r < i && r++;
  let l = ce(s, n, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
  return M.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? Xi(a, o < 0) : a || null;
}
class _t extends W {
  static create(t, e, i) {
    return new _t(t, e, i);
  }
  constructor(t, e, i) {
    super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null;
  }
  split(t) {
    let e = _t.create(this.widget, this.length - t, this.side);
    return this.length -= t, e;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(t, e, i, n, r, o) {
    return i && (!(i instanceof _t) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
  }
  become(t) {
    return t instanceof _t && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return N.empty;
    let t = this;
    for (; t.parent; )
      t = t.parent;
    let { view: e } = t, i = e && e.state.doc, n = this.posAtStart;
    return i ? i.slice(n, n + this.length) : N.empty;
  }
  domAtPos(t) {
    return (this.length ? t == 0 : this.side > 0) ? ft.before(this.dom) : ft.after(this.dom, t == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t, e) {
    let i = this.widget.coordsAt(this.dom, t, e);
    if (i)
      return i;
    let n = this.dom.getClientRects(), r = null;
    if (!n.length)
      return null;
    let o = this.side ? this.side < 0 : t > 0;
    for (let l = o ? n.length - 1 : 0; r = n[l], !(t > 0 ? l == 0 : l == n.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Xi(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Me extends W {
  constructor(t) {
    super(), this.side = t;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(t) {
    return t instanceof Me && t.side == this.side;
  }
  split() {
    return new Me(this.side);
  }
  sync() {
    if (!this.dom) {
      let t = document.createElement("img");
      t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t) {
    return this.side > 0 ? ft.before(this.dom) : ft.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return N.empty;
  }
  get isHidden() {
    return !0;
  }
}
Vt.prototype.children = _t.prototype.children = Me.prototype.children = ps;
function Vo(s, t) {
  let e = s.dom, { children: i } = s, n = 0;
  for (let r = 0; n < i.length; n++) {
    let o = i[n], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (t > r && t < l && o.dom.parentNode == e)
        return o.domAtPos(t - r);
      if (t <= r)
        break;
      r = l;
    }
  }
  for (let r = n; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == e)
      return o.domAtPos(o.length);
  }
  for (let r = n; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == e)
      return o.domAtPos(0);
  }
  return new ft(e, 0);
}
function Wo(s, t, e) {
  let i, { children: n } = s;
  e > 0 && t instanceof qt && n.length && (i = n[n.length - 1]) instanceof qt && i.mark.eq(t.mark) ? Wo(i, t.children[0], e - 1) : (n.push(t), t.setParent(s)), s.length += t.length;
}
function zo(s, t, e) {
  let i = null, n = -1, r = null, o = -1;
  function l(h, f) {
    for (let c = 0, u = 0; c < h.children.length && u <= f; c++) {
      let d = h.children[c], p = u + d.length;
      p >= f && (d.children.length ? l(d, f - u) : (!r || r.isHidden && e > 0) && (p > f || u == p && d.getSide() > 0) ? (r = d, o = f - u) : (u < f || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, n = f - u)), u = p;
    }
  }
  l(s, t);
  let a = (e < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? n : o), e) : ja(s);
}
function ja(s) {
  let t = s.dom.lastChild;
  if (!t)
    return s.dom.getBoundingClientRect();
  let e = Ae(t);
  return e[e.length - 1] || null;
}
function Wn(s, t) {
  for (let e in s)
    e == "class" && t.class ? t.class += " " + s.class : e == "style" && t.style ? t.style += ";" + s.style : t[e] = s[e];
  return t;
}
const Xs = /* @__PURE__ */ Object.create(null);
function gs(s, t, e) {
  if (s == t)
    return !0;
  s || (s = Xs), t || (t = Xs);
  let i = Object.keys(s), n = Object.keys(t);
  if (i.length - (e && i.indexOf(e) > -1 ? 1 : 0) != n.length - (e && n.indexOf(e) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != e && (n.indexOf(r) == -1 || s[r] !== t[r]))
      return !1;
  return !0;
}
function zn(s, t, e) {
  let i = !1;
  if (t)
    for (let n in t)
      e && n in e || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (e)
    for (let n in e)
      t && t[n] == e[n] || (i = !0, n == "style" ? s.style.cssText = e[n] : s.setAttribute(n, e[n]));
  return i;
}
function Ka(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < s.attributes.length; e++) {
    let i = s.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class ie {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(t) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(t, e) {
    return !1;
  }
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(t) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(t, e, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(t) {
  }
}
var K = /* @__PURE__ */ function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
}(K || (K = {}));
class L extends he {
  constructor(t, e, i, n) {
    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = n;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(t) {
    return new ti(t);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new te(t, e, e, i, t.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(t) {
    let e = !!t.block, i, n;
    if (t.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: o } = qo(t, e);
      i = (r ? e ? -3e8 : -1 : 5e8) - 1, n = (o ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new te(t, i, n, e, t.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(t) {
    return new ei(t);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(t, e = !1) {
    return H.of(t, e);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
L.none = H.empty;
class ti extends L {
  constructor(t) {
    let { start: e, end: i } = qo(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
  }
  eq(t) {
    var e, i;
    return this == t || t instanceof ti && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((i = t.attrs) === null || i === void 0 ? void 0 : i.class)) && gs(this.attrs, t.attrs, "class");
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
ti.prototype.point = !1;
class ei extends L {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof ei && this.spec.class == t.spec.class && gs(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
ei.prototype.mapMode = nt.TrackBefore;
ei.prototype.point = !0;
class te extends L {
  constructor(t, e, i, n, r, o) {
    super(e, i, r, t), this.block = n, this.isReplace = o, this.mapMode = n ? e <= 0 ? nt.TrackBefore : nt.TrackAfter : nt.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide < this.endSide ? K.WidgetRange : this.startSide <= 0 ? K.WidgetBefore : K.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof te && $a(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
te.prototype.point = !0;
function qo(s, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: i } = s;
  return e == null && (e = s.inclusive), i == null && (i = s.inclusive), { start: e ?? t, end: i ?? t };
}
function $a(s, t) {
  return s == t || !!(s && t && s.compare(t));
}
function qn(s, t, e, i = 0) {
  let n = e.length - 1;
  n >= 0 && e[n] + i >= s ? e[n] = Math.max(e[n], t) : e.push(s, t);
}
class ht extends W {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(t, e, i, n, r, o) {
    if (i) {
      if (!(i instanceof ht))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return n && this.setDeco(i ? i.attrs : null), Io(this, t, e, i ? i.children : [], r, o), !0;
  }
  split(t) {
    let e = new ht();
    if (e.breakAfter = this.breakAfter, this.length == 0)
      return e;
    let { i, off: n } = this.childPos(t);
    n && (e.append(this.children[i].split(n), 0), this.children[i].merge(n, this.children[i].length, null, !1, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      e.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = t, e;
  }
  transferDOM(t) {
    this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t) {
    gs(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
  }
  append(t, e) {
    Wo(this, t, e);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(t) {
    let e = t.spec.attributes, i = t.spec.class;
    e && (this.attrs = Wn(e, this.attrs || {})), i && (this.attrs = Wn({ class: i }, this.attrs || {}));
  }
  domAtPos(t) {
    return Vo(this, t);
  }
  reuseDOM(t) {
    t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    var i;
    this.dom ? this.flags & 4 && (Bo(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (zn(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
    let n = this.dom.lastChild;
    for (; n && W.get(n) instanceof qt; )
      n = n.lastChild;
    if (!n || !this.length || n.nodeName != "BR" && ((i = W.get(n)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!M.ios || !this.children.some((r) => r instanceof Vt))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let t = 0, e;
    for (let i of this.children) {
      if (!(i instanceof Vt) || /[^ -~]/.test(i.text))
        return null;
      let n = Ae(i.dom);
      if (n.length != 1)
        return null;
      t += n[0].width, e = n[0].height;
    }
    return t ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: t / this.length,
      textHeight: e
    } : null;
  }
  coordsAt(t, e) {
    let i = zo(this, t, e);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: n } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - n.lineHeight) < 2 && n.textHeight < r) {
        let o = (r - n.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(t) {
    return !1;
  }
  get type() {
    return K.Text;
  }
  static find(t, e) {
    for (let i = 0, n = 0; i < t.children.length; i++) {
      let r = t.children[i], o = n + r.length;
      if (o >= e) {
        if (r instanceof ht)
          return r;
        if (o > e)
          break;
      }
      n = o + r.breakAfter;
    }
    return null;
  }
}
class ae extends W {
  constructor(t, e, i) {
    super(), this.widget = t, this.length = e, this.type = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t, e, i, n, r, o) {
    return i && (!(i instanceof ae) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
  }
  domAtPos(t) {
    return t == 0 ? ft.before(this.dom) : ft.after(this.dom, t == this.length);
  }
  split(t) {
    let e = this.length - t;
    this.length = t;
    let i = new ae(this.widget, e, this.type);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return ps;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : N.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t) {
    return t instanceof ae && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.type = t.type, this.breakAfter = t.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(t, e) {
    return this.widget.coordsAt(this.dom, t, e);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class qe {
  constructor(t, e, i, n) {
    this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t = this.content[this.content.length - 1];
    return !t.breakAfter && !(t instanceof ae && t.type == K.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ht()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(t = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(ai(new Me(-1), t), t.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t) {
    this.flushBuffer(), this.curLine = null, this.content.push(t);
  }
  finish(t) {
    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine();
  }
  buildText(t, e, i) {
    for (; t > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let n = Math.min(
        this.text.length - this.textOff,
        t,
        512
        /* T.Chunk */
      );
      this.flushBuffer(e.slice(e.length - i)), this.getLine().append(ai(new Vt(this.text.slice(this.textOff, this.textOff + n)), e), i), this.atCursorPos = !0, this.textOff += n, t -= n, i = 0;
    }
  }
  span(t, e, i, n) {
    this.buildText(e - t, i, n), this.pos = e, this.openStart < 0 && (this.openStart = n);
  }
  point(t, e, i, n, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof te) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (e > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = e - t;
    if (i instanceof te)
      if (i.block) {
        let { type: a } = i;
        a == K.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new ae(i.widget || new Qs("div"), l, a));
      } else {
        let a = _t.create(i.widget || new Qs("span"), l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= n.length && (t < e || i.startSide > 0), f = !a.isEditable && (t < e || r > n.length || i.startSide <= 0), c = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(n), h && (c.append(ai(new Me(1), n), r), r = n.length + Math.max(0, r - n.length)), c.append(ai(a, n), r), this.atCursorPos = f, this.pendingBuffer = f ? t < e || r > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
  }
  static build(t, e, i, n, r) {
    let o = new qe(t, e, i, r);
    return o.openEnd = H.spans(n, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function ai(s, t) {
  for (let e of t)
    s = new qt(e, [s], s.length);
  return s;
}
class Qs extends ie {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
const jo = /* @__PURE__ */ O.define(), Ko = /* @__PURE__ */ O.define(), $o = /* @__PURE__ */ O.define(), Uo = /* @__PURE__ */ O.define(), jn = /* @__PURE__ */ O.define(), Go = /* @__PURE__ */ O.define(), _o = /* @__PURE__ */ O.define(), Jo = /* @__PURE__ */ O.define({
  combine: (s) => s.some((t) => t)
}), Yo = /* @__PURE__ */ O.define({
  combine: (s) => s.some((t) => t)
});
class Fi {
  constructor(t, e = "nearest", i = "nearest", n = 5, r = 5) {
    this.range = t, this.y = e, this.x = i, this.yMargin = n, this.xMargin = r;
  }
  map(t) {
    return t.empty ? this : new Fi(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const Zs = /* @__PURE__ */ E.define({ map: (s, t) => s.map(t) });
function Ct(s, t, e) {
  let i = s.facet(Uo);
  i.length ? i[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t);
}
const Zi = /* @__PURE__ */ O.define({ combine: (s) => s.length ? s[0] : !0 });
let Ua = 0;
const Ne = /* @__PURE__ */ O.define();
class Z {
  constructor(t, e, i, n) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.extension = n(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(t, e) {
    const { eventHandlers: i, provide: n, decorations: r } = e || {};
    return new Z(Ua++, t, i, (o) => {
      let l = [Ne.of(o)];
      return r && l.push(Ge.of((a) => {
        let h = a.plugin(o);
        return h ? r(h) : L.none;
      })), n && l.push(n(o)), l;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(t, e) {
    return Z.define((i) => new t(i), e);
  }
}
class ln {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (i) {
            if (Ct(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(t);
      } catch (e) {
        Ct(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Ct(t.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Xo = /* @__PURE__ */ O.define(), ms = /* @__PURE__ */ O.define(), Ge = /* @__PURE__ */ O.define(), ys = /* @__PURE__ */ O.define(), Qo = /* @__PURE__ */ O.define();
function tr(s, t, e) {
  let i = s.state.facet(Qo);
  if (!i.length)
    return i;
  let n = i.map((o) => o instanceof Function ? o(s) : o), r = [];
  return H.spans(n, t, e, {
    point() {
    },
    span(o, l, a, h) {
      let f = r;
      for (let c = a.length - 1; c >= 0; c--, h--) {
        let u = a[c].spec.bidiIsolate, d;
        if (u != null)
          if (h > 0 && f.length && (d = f[f.length - 1]).to == o && d.direction == u)
            d.to = l, f = d.inner;
          else {
            let p = { from: o, to: l, direction: u, inner: [] };
            f.push(p), f = p.inner;
          }
      }
    }
  }), r;
}
const Zo = /* @__PURE__ */ O.define();
function tl(s) {
  let t = 0, e = 0, i = 0, n = 0;
  for (let r of s.state.facet(Zo)) {
    let o = r(s);
    o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: t, right: e, top: i, bottom: n };
}
const He = /* @__PURE__ */ O.define();
class At {
  constructor(t, e, i, n) {
    this.fromA = t, this.toA = e, this.fromB = i, this.toB = n;
  }
  join(t) {
    return new At(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, i = this;
    for (; e > 0; e--) {
      let n = t[e - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, i), t;
  }
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let i = [];
    for (let n = 0, r = 0, o = 0, l = 0; ; n++) {
      let a = n == t.length ? null : t[n], h = o - l, f = a ? a.fromB : 1e9;
      for (; r < e.length && e[r] < f; ) {
        let c = e[r], u = e[r + 1], d = Math.max(l, c), p = Math.min(f, u);
        if (d <= p && new At(d + h, p + h, d, p).addToSet(i), u > f)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new At(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class Vi {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = Q.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new At(r, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Vi(t, e, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var $ = /* @__PURE__ */ function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
}($ || ($ = {}));
const _e = $.LTR, el = $.RTL;
function il(s) {
  let t = [];
  for (let e = 0; e < s.length; e++)
    t.push(1 << +s[e]);
  return t;
}
const Ga = /* @__PURE__ */ il("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), _a = /* @__PURE__ */ il("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Kn = /* @__PURE__ */ Object.create(null), Pt = [];
for (let s of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ s.charCodeAt(0), e = /* @__PURE__ */ s.charCodeAt(1);
  Kn[t] = e, Kn[e] = -t;
}
function Ja(s) {
  return s <= 247 ? Ga[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? _a[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8203 ? 256 : 64336 <= s && s <= 65023 ? 4 : s == 8204 ? 256 : 1;
}
const Ya = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Jt {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? el : _e;
  }
  /**
  @internal
  */
  constructor(t, e, i) {
    this.from = t, this.to = e, this.level = i;
  }
  /**
  @internal
  */
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  /**
  @internal
  */
  static find(t, e, i, n) {
    let r = -1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      if (l.from <= e && l.to >= e) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function nl(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++) {
    let i = s[e], n = t[e];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !nl(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const F = [];
function Xa(s, t, e, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : t, l = r < i.length ? i[r].from : e, a = r ? 256 : n;
    for (let h = o, f = a, c = a; h < l; h++) {
      let u = Ja(s.charCodeAt(h));
      u == 512 ? u = f : u == 8 && c == 4 && (u = 16), F[h] = u == 4 ? 2 : u, u & 7 && (c = u), f = u;
    }
    for (let h = o, f = a, c = a; h < l; h++) {
      let u = F[h];
      if (u == 128)
        h < l - 1 && f == F[h + 1] && f & 24 ? u = F[h] = f : F[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && F[d] == 64; )
          d++;
        let p = h && f == 8 || d < e && F[d] == 8 ? c == 1 ? 1 : 8 : 256;
        for (let g = h; g < d; g++)
          F[g] = p;
        h = d - 1;
      } else u == 8 && c == 1 && (F[h] = 1);
      f = u, u & 7 && (c = u);
    }
  }
}
function Qa(s, t, e, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : t, f = o < i.length ? i[o].from : e;
    for (let c = h, u, d, p; c < f; c++)
      if (d = Kn[u = s.charCodeAt(c)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (Pt[g + 1] == -d) {
              let m = Pt[g + 2], y = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              y && (F[c] = F[Pt[g]] = y), l = g;
              break;
            }
        } else {
          if (Pt.length == 189)
            break;
          Pt[l++] = c, Pt[l++] = u, Pt[l++] = a;
        }
      else if ((p = F[c]) == 2 || p == 1) {
        let g = p == n;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = Pt[m + 2];
          if (y & 2)
            break;
          if (g)
            Pt[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            Pt[m + 2] |= 4;
          }
        }
      }
  }
}
function Za(s, t, e, i) {
  for (let n = 0, r = i; n <= e.length; n++) {
    let o = n ? e[n - 1].to : s, l = n < e.length ? e[n].from : t;
    for (let a = o; a < l; ) {
      let h = F[a];
      if (h == 256) {
        let f = a + 1;
        for (; ; )
          if (f == l) {
            if (n == e.length)
              break;
            f = e[n++].to, l = n < e.length ? e[n].from : t;
          } else if (F[f] == 256)
            f++;
          else
            break;
        let c = r == 1, u = (f < t ? F[f] : i) == 1, d = c == u ? c ? 1 : 2 : i;
        for (let p = f, g = n, m = g ? e[g - 1].to : s; p > a; )
          p == m && (p = e[--g].from, m = g ? e[g - 1].to : s), F[--p] = d;
        a = f;
      } else
        r = h, a++;
    }
  }
}
function $n(s, t, e, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = t, h = 0; a < e; ) {
      let f = !0, c = !1;
      if (h == r.length || a < r[h].from) {
        let g = F[a];
        g != l && (f = !1, c = g == 16);
      }
      let u = !f && l == 1 ? [] : null, d = f ? i : i + 1, p = a;
      t: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (c)
            break t;
          let g = r[h];
          if (!f)
            for (let m = g.to, y = h + 1; ; ) {
              if (m == e)
                break t;
              if (y < r.length && r[y].from == m)
                m = r[y++].to;
              else {
                if (F[m] == l)
                  break t;
                break;
              }
            }
          if (h++, u)
            u.push(g);
          else {
            g.from > a && o.push(new Jt(a, g.from, d));
            let m = g.direction == _e != !(d % 2);
            Un(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.to;
          }
          p = g.to;
        } else {
          if (p == e || (f ? F[p] != l : F[p] == l))
            break;
          p++;
        }
      u ? $n(s, a, p, i + 1, n, u, o) : a < p && o.push(new Jt(a, p, d)), a = p;
    }
  else
    for (let a = e, h = r.length; a > t; ) {
      let f = !0, c = !1;
      if (!h || a > r[h - 1].to) {
        let g = F[a - 1];
        g != l && (f = !1, c = g == 16);
      }
      let u = !f && l == 1 ? [] : null, d = f ? i : i + 1, p = a;
      t: for (; ; )
        if (h && p == r[h - 1].to) {
          if (c)
            break t;
          let g = r[--h];
          if (!f)
            for (let m = g.from, y = h; ; ) {
              if (m == t)
                break t;
              if (y && r[y - 1].to == m)
                m = r[--y].from;
              else {
                if (F[m - 1] == l)
                  break t;
                break;
              }
            }
          if (u)
            u.push(g);
          else {
            g.to < a && o.push(new Jt(g.to, a, d));
            let m = g.direction == _e != !(d % 2);
            Un(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.from;
          }
          p = g.from;
        } else {
          if (p == t || (f ? F[p - 1] != l : F[p - 1] == l))
            break;
          p--;
        }
      u ? $n(s, p, a, i + 1, n, u, o) : p < a && o.push(new Jt(p, a, d)), a = p;
    }
}
function Un(s, t, e, i, n, r, o) {
  let l = t % 2 ? 2 : 1;
  Xa(s, n, r, i, l), Qa(s, n, r, i, l), Za(n, r, i, l), $n(s, n, r, t, e, i, o);
}
function th(s, t, e) {
  if (!s)
    return [new Jt(0, 0, t == el ? 1 : 0)];
  if (t == _e && !e.length && !Ya.test(s))
    return sl(s.length);
  if (e.length)
    for (; s.length > F.length; )
      F[F.length] = 256;
  let i = [], n = t == _e ? 0 : 1;
  return Un(s, n, n, e, 0, s.length, i), i;
}
function sl(s) {
  return [new Jt(0, s, 0)];
}
let rl = "";
function eh(s, t, e, i, n) {
  var r;
  let o = i.head - s.from, l = -1;
  if (o == 0) {
    if (!n || !s.length)
      return null;
    t[0].level != e && (o = t[0].side(!1, e), l = 0);
  } else if (o == s.length) {
    if (n)
      return null;
    let u = t[t.length - 1];
    u.level != e && (o = u.side(!0, e), l = t.length - 1);
  }
  l < 0 && (l = Jt.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc));
  let a = t[l];
  o == a.side(n, e) && (a = t[l += n ? 1 : -1], o = a.side(!n, e));
  let h = n == (a.dir == e), f = Ht(s.text, o, h);
  if (rl = s.text.slice(Math.min(o, f), Math.max(o, f)), f != a.side(n, e))
    return S.cursor(f + s.from, h ? -1 : 1, a.level);
  let c = l == (n ? t.length - 1 : 0) ? null : t[l + (n ? 1 : -1)];
  return !c && a.level != e ? S.cursor(n ? s.to : s.from, n ? -1 : 1, e) : c && c.level < a.level ? S.cursor(c.side(!n, e) + s.from, n ? 1 : -1, c.level) : S.cursor(f + s.from, n ? -1 : 1, a.level);
}
class er extends W {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t) {
    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new ht()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new At(0, 0, 0, t.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(t) {
    let e = t.changedRanges;
    this.minWidth > 0 && e.length && (e.every(({ fromA: l, toA: a }) => a < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let i = this.view.inputState.composing < 0 ? null : nh(this.view, t.changes);
    if (this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: a } = this.hasComposition;
      e = new At(l, a, t.changes.mapPos(l, -1), t.changes.mapPos(a, 1)).addToSet(e.slice());
    }
    this.hasComposition = i ? { from: i.range.fromB, to: i.range.toB } : null, (M.ie || M.chrome) && !i && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let n = this.decorations, r = this.updateDeco(), o = oh(n, r, t.changes);
    return e = At.extendWithRanges(e, o), !(this.flags & 7) && e.length == 0 ? !1 : (this.updateInner(e, t.startState.doc.length, i), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(t, e, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e, i);
    let { observer: n } = this.view;
    n.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = M.chrome || M.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || n.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof ae && o.widget instanceof ir && r.push(o.dom);
    n.updateGaps(r);
  }
  updateChildren(t, e, i) {
    let n = i ? i.range.addToSet(t.slice()) : t, r = this.childCursor(e);
    for (let o = n.length - 1; ; o--) {
      let l = o >= 0 ? n[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: f, toB: c } = l, u, d, p, g;
      if (i && i.range.fromB < c && i.range.toB > f) {
        let b = qe.build(this.view.state.doc, f, i.range.fromB, this.decorations, this.dynamicDecorationMap), w = qe.build(this.view.state.doc, i.range.toB, c, this.decorations, this.dynamicDecorationMap);
        d = b.breakAtStart, p = b.openStart, g = w.openEnd;
        let x = this.compositionView(i);
        w.breakAtStart ? x.breakAfter = 1 : w.content.length && x.merge(x.length, x.length, w.content[0], !1, w.openStart, 0) && (x.breakAfter = w.content[0].breakAfter, w.content.shift()), b.content.length && x.merge(0, 0, b.content[b.content.length - 1], !0, 0, b.openEnd) && b.content.pop(), u = b.content.concat(x).concat(w.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: g } = qe.build(this.view.state.doc, f, c, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: y } = r.findPos(h, 1), { i: v, off: A } = r.findPos(a, -1);
      Lo(this, v, A, m, y, u, d, p, g);
    }
    i && this.fixCompositionDOM(i);
  }
  compositionView(t) {
    let e = new Vt(t.text.nodeValue);
    e.flags |= 8;
    for (let { deco: n } of t.marks)
      e = new qt(n, [e], e.length);
    let i = new ht();
    return i.append(e, 0), i;
  }
  fixCompositionDOM(t) {
    let e = (r, o) => {
      o.flags |= 8, this.markedForComposition.add(o);
      let l = W.get(r);
      l != o && (l && (l.dom = null), o.setDOM(r));
    }, i = this.childPos(t.range.fromB, 1), n = this.children[i.i];
    e(t.line, n);
    for (let r = t.marks.length - 1; r >= -1; r--)
      i = n.childPos(i.off, 1), n = n.children[i.i], e(r >= 0 ? t.marks[r].node : t.text, n);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, n = i == this.dom, r = !n && Mi(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(n || e || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.domAtPos(l.anchor), h = l.empty ? a : this.domAtPos(l.head);
    if (M.gecko && l.empty && !this.hasComposition && ih(a)) {
      let c = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(c, a.node.childNodes[a.offset] || null)), a = h = new ft(c, 0), o = !0;
    }
    let f = this.view.observer.selectionRange;
    (o || !f.focusNode || !Ni(a.node, a.offset, f.anchorNode, f.anchorOffset) || !Ni(h.node, h.offset, f.focusNode, f.focusOffset)) && (this.view.observer.ignore(() => {
      M.android && M.chrome && this.dom.contains(f.focusNode) && lh(f.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let c = Ii(this.view.root);
      if (c) if (l.empty) {
        if (M.gecko) {
          let u = sh(a.node, a.offset);
          if (u && u != 3) {
            let d = ll(a.node, a.offset, u == 1 ? 1 : -1);
            d && (a = new ft(d, u == 1 ? 0 : d.nodeValue.length));
          }
        }
        c.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel != null && (f.caretBidiLevel = l.bidiLevel);
      } else if (c.extend) {
        c.collapse(a.node, a.offset);
        try {
          c.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let u = document.createRange();
        l.anchor > l.head && ([a, h] = [h, a]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(u);
      }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new ft(f.anchorNode, f.anchorOffset), this.impreciseHead = h.precise ? null : new ft(f.focusNode, f.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = Ii(t.root), { anchorNode: n, anchorOffset: r } = t.observer.selectionRange;
    if (!i || !e.empty || !e.assoc || !i.modify)
      return;
    let o = ht.find(this, e.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (e.head == l || e.head == l + o.length)
      return;
    let a = this.coordsAt(e.head, -1), h = this.coordsAt(e.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let f = this.domAtPos(e.head + e.assoc);
    i.collapse(f.node, f.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let c = t.observer.selectionRange;
    t.docView.posFromDOM(c.anchorNode, c.anchorOffset) != e.from && i.collapse(n, r);
  }
  nearest(t) {
    for (let e = t; e; ) {
      let i = W.get(e);
      if (i && i.rootView == this)
        return i;
      e = e.parentNode;
    }
    return null;
  }
  posFromDOM(t, e) {
    let i = this.nearest(t);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(t, e) + i.posAtStart;
  }
  domAtPos(t) {
    let { i: e, off: i } = this.childCursor().findPos(t, -1);
    for (; e < this.children.length - 1; ) {
      let n = this.children[e];
      if (i < n.length || n instanceof ht)
        break;
      e++, i = 0;
    }
    return this.children[e].domAtPos(i);
  }
  coordsAt(t, e) {
    for (let i = this.length, n = this.children.length - 1; ; n--) {
      let r = this.children[n], o = i - r.breakAfter - r.length;
      if (t > o || t == o && r.type != K.WidgetBefore && r.type != K.WidgetAfter && (!n || e == 2 || this.children[n - 1].breakAfter || this.children[n - 1].type == K.WidgetBefore && e > -2))
        return r.coordsAt(t - o, e);
      i = o;
    }
  }
  coordsForChar(t) {
    let { i: e, off: i } = this.childPos(t, 1), n = this.children[e];
    if (!(n instanceof ht))
      return null;
    for (; n.children.length; ) {
      let { i: l, off: a } = n.childPos(i, 1);
      for (; ; l++) {
        if (l == n.children.length)
          return null;
        if ((n = n.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(n instanceof Vt))
      return null;
    let r = Ht(n.text, i);
    if (r == i)
      return null;
    let o = ce(n.dom, i, r).getClientRects();
    return !o.length || o[0].top >= o[0].bottom ? null : o[0];
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: i, to: n } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == $.LTR;
    for (let h = 0, f = 0; f < this.children.length; f++) {
      let c = this.children[f], u = h + c.length;
      if (u > n)
        break;
      if (h >= i) {
        let d = c.dom.getBoundingClientRect();
        if (e.push(d.height), o) {
          let p = c.dom.lastChild, g = p ? Ae(p) : [];
          if (g.length) {
            let m = g[g.length - 1], y = a ? m.right - d.left : d.right - m.left;
            y > l && (l = y, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + c.breakAfter;
    }
    return e;
  }
  textDirectionAt(t) {
    let { i: e } = this.childPos(t, 1);
    return getComputedStyle(this.children[e].dom).direction == "rtl" ? $.RTL : $.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof ht) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let t = document.createElement("div"), e, i, n;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t);
      let r = Ae(t.firstChild)[0];
      e = t.getBoundingClientRect().height, i = r ? r.width / 27 : 7, n = r ? r.height : e, t.remove();
    }), { lineHeight: e, charWidth: i, textHeight: n };
  }
  childCursor(t = this.length) {
    let e = this.children.length;
    return e && (t -= this.children[--e].length), new Eo(this.children, t, e);
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == e.viewports.length ? null : e.viewports[n], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = e.lineBlockAt(o).bottom - e.lineBlockAt(i).top;
        t.push(L.replace({
          widget: new ir(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return L.set(t);
  }
  updateDeco() {
    let t = this.view.state.facet(Ge).map((e, i) => (this.dynamicDecorationMap[i] = typeof e == "function") ? e(this.view) : e);
    for (let e = t.length; e < t.length + 3; e++)
      this.dynamicDecorationMap[e] = !1;
    return this.decorations = [
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(t) {
    let { range: e } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), n;
    if (!i)
      return;
    !e.empty && (n = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, n.left),
      top: Math.min(i.top, n.top),
      right: Math.max(i.right, n.right),
      bottom: Math.max(i.bottom, n.bottom)
    });
    let r = tl(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    };
    Ia(this.view.scrollDOM, o, e.head < e.anchor ? -1 : 1, t.x, t.y, t.xMargin, t.yMargin, this.view.textDirection == $.LTR);
  }
}
function ih(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
class ir extends ie {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", !0;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function ol(s) {
  let t = s.observer.selectionRange, e = t.focusNode && ll(t.focusNode, t.focusOffset, 0);
  if (!e)
    return null;
  let i = W.get(e), n, r;
  if (i instanceof Vt)
    n = i.posAtStart, r = n + i.length;
  else
    t: for (let o = 0, l = e; ; ) {
      for (let h = l.previousSibling, f; h; h = h.previousSibling) {
        if (f = W.get(h)) {
          n = r = f.posAtEnd + o;
          break t;
        }
        let c = new No([], s.state);
        if (c.readNode(h), c.text.indexOf(ye) > -1)
          return null;
        o += c.text.length;
      }
      if (l = l.parentNode, !l)
        return null;
      let a = W.get(l);
      if (a) {
        n = r = a.posAtStart + o;
        break;
      }
    }
  return { from: n, to: r, node: e };
}
function nh(s, t) {
  let e = ol(s);
  if (!e)
    return null;
  let { from: i, to: n, node: r } = e, o = t.mapPos(i, -1), l = t.mapPos(n, 1), a = r.nodeValue;
  if (/[\n\r]/.test(a))
    return null;
  if (l - o != a.length) {
    let u = t.mapPos(i, 1), d = t.mapPos(n, -1);
    if (d - u == a.length)
      o = u, l = d;
    else if (s.state.doc.sliceString(l - a.length, l) == a)
      o = l - a.length;
    else if (s.state.doc.sliceString(o, o + a.length) == a)
      l = o + a.length;
    else
      return null;
  }
  let { main: h } = s.state.selection;
  if (s.state.doc.sliceString(o, l) != a || o > h.head || l < h.head)
    return null;
  let f = [], c = new At(i, n, o, l);
  for (let u = r.parentNode; ; u = u.parentNode) {
    let d = W.get(u);
    if (d instanceof qt)
      f.push({ node: u, deco: d.mark });
    else {
      if (d instanceof ht || u.nodeName == "DIV" && u.parentNode == s.contentDOM)
        return { range: c, text: r, marks: f, line: u };
      if (u != s.contentDOM)
        f.push({ node: u, deco: new ti({
          inclusive: !0,
          attributes: Ka(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function ll(s, t, e) {
  if (e <= 0)
    for (let i = s, n = t; ; ) {
      if (i.nodeType == 3)
        return i;
      if (i.nodeType == 1 && n > 0)
        i = i.childNodes[n - 1], n = Zt(i);
      else
        break;
    }
  if (e >= 0)
    for (let i = s, n = t; ; ) {
      if (i.nodeType == 3)
        return i;
      if (i.nodeType == 1 && n < i.childNodes.length && e >= 0)
        i = i.childNodes[n], n = 0;
      else
        break;
    }
  return null;
}
function sh(s, t) {
  return s.nodeType != 1 ? 0 : (t && s.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < s.childNodes.length && s.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let rh = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    qn(t, e, this.changes);
  }
  comparePoint(t, e) {
    qn(t, e, this.changes);
  }
};
function oh(s, t, e) {
  let i = new rh();
  return H.compare(s, t, e, i), i.changes;
}
function lh(s, t) {
  for (let e = s; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function ah(s, t, e = 1) {
  let i = s.charCategorizer(t), n = s.doc.lineAt(t), r = t - n.from;
  if (n.length == 0)
    return S.cursor(t);
  r == 0 ? e = 1 : r == n.length && (e = -1);
  let o = r, l = r;
  e < 0 ? o = Ht(n.text, r, !1) : l = Ht(n.text, r);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = Ht(n.text, o, !1);
    if (i(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = Ht(n.text, l);
    if (i(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return S.range(o + n.from, l + n.from);
}
function hh(s, t) {
  return t.left > s ? t.left - s : Math.max(0, s - t.right);
}
function fh(s, t) {
  return t.top > s ? t.top - s : Math.max(0, s - t.bottom);
}
function an(s, t) {
  return s.top < t.bottom - 1 && s.bottom > t.top + 1;
}
function nr(s, t) {
  return t < s.top ? { top: t, left: s.left, right: s.right, bottom: s.bottom } : s;
}
function sr(s, t) {
  return t > s.bottom ? { top: s.top, left: s.left, right: s.right, bottom: t } : s;
}
function Gn(s, t, e) {
  let i, n, r, o, l = !1, a, h, f, c;
  for (let p = s.firstChild; p; p = p.nextSibling) {
    let g = Ae(p);
    for (let m = 0; m < g.length; m++) {
      let y = g[m];
      n && an(n, y) && (y = nr(sr(y, n.bottom), n.top));
      let v = hh(t, y), A = fh(e, y);
      if (v == 0 && A == 0)
        return p.nodeType == 3 ? rr(p, t, e) : Gn(p, t, e);
      if (!i || o > A || o == A && r > v) {
        i = p, n = y, r = v, o = A;
        let b = A ? e < y.top ? -1 : 1 : v ? t < y.left ? -1 : 1 : 0;
        l = !b || (b > 0 ? m < g.length - 1 : m > 0);
      }
      v == 0 ? e > y.bottom && (!f || f.bottom < y.bottom) ? (a = p, f = y) : e < y.top && (!c || c.top > y.top) && (h = p, c = y) : f && an(f, y) ? f = sr(f, y.bottom) : c && an(c, y) && (c = nr(c, y.top));
    }
  }
  if (f && f.bottom >= e ? (i = a, n = f) : c && c.top <= e && (i = h, n = c), !i)
    return { node: s, offset: 0 };
  let u = Math.max(n.left, Math.min(n.right, t));
  if (i.nodeType == 3)
    return rr(i, u, e);
  if (l && i.contentEditable != "false")
    return Gn(i, u, e);
  let d = Array.prototype.indexOf.call(s.childNodes, i) + (t >= (n.left + n.right) / 2 ? 1 : 0);
  return { node: s, offset: d };
}
function rr(s, t, e) {
  let i = s.nodeValue.length, n = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = ce(s, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let f = a[h];
      if (f.top == f.bottom)
        continue;
      o || (o = t - f.left);
      let c = (f.top > e ? f.top - e : e - f.bottom) - 1;
      if (f.left - 1 <= t && f.right + 1 >= t && c < r) {
        let u = t >= (f.left + f.right) / 2, d = u;
        if ((M.chrome || M.gecko) && ce(s, l).getBoundingClientRect().left == f.right && (d = !u), c <= 0)
          return { node: s, offset: l + (d ? 1 : 0) };
        n = l + (d ? 1 : 0), r = c;
      }
    }
  }
  return { node: s, offset: n > -1 ? n : o > 0 ? s.nodeValue.length : 0 };
}
function al(s, t, e, i = -1) {
  var n, r;
  let o = s.contentDOM.getBoundingClientRect(), l = o.top + s.viewState.paddingTop, a, { docHeight: h } = s.viewState, { x: f, y: c } = t, u = c - l;
  if (u < 0)
    return 0;
  if (u > h)
    return s.state.doc.length;
  for (let b = s.viewState.heightOracle.textHeight / 2, w = !1; a = s.elementAtHeight(u), a.type != K.Text; )
    for (; u = i > 0 ? a.bottom + b : a.top - b, !(u >= 0 && u <= h); ) {
      if (w)
        return e ? null : 0;
      w = !0, i = -i;
    }
  c = l + u;
  let d = a.from;
  if (d < s.viewport.from)
    return s.viewport.from == 0 ? 0 : e ? null : or(s, o, a, f, c);
  if (d > s.viewport.to)
    return s.viewport.to == s.state.doc.length ? s.state.doc.length : e ? null : or(s, o, a, f, c);
  let p = s.dom.ownerDocument, g = s.root.elementFromPoint ? s.root : p, m = g.elementFromPoint(f, c);
  m && !s.contentDOM.contains(m) && (m = null), m || (f = Math.max(o.left + 1, Math.min(o.right - 1, f)), m = g.elementFromPoint(f, c), m && !s.contentDOM.contains(m) && (m = null));
  let y, v = -1;
  if (m && ((n = s.docView.nearest(m)) === null || n === void 0 ? void 0 : n.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let b = p.caretPositionFromPoint(f, c);
      b && ({ offsetNode: y, offset: v } = b);
    } else if (p.caretRangeFromPoint) {
      let b = p.caretRangeFromPoint(f, c);
      b && ({ startContainer: y, startOffset: v } = b, (!s.contentDOM.contains(y) || M.safari && ch(y, v, f) || M.chrome && uh(y, v, f)) && (y = void 0));
    }
  }
  if (!y || !s.docView.dom.contains(y)) {
    let b = ht.find(s.docView, d);
    if (!b)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: v } = Gn(b.dom, f, c));
  }
  let A = s.docView.nearest(y);
  if (!A)
    return null;
  if (A.isWidget && ((r = A.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let b = A.dom.getBoundingClientRect();
    return t.y < b.top || t.y <= b.bottom && t.x <= (b.left + b.right) / 2 ? A.posAtStart : A.posAtEnd;
  } else
    return A.localPosFromDOM(y, v) + A.posAtStart;
}
function or(s, t, e, i, n) {
  let r = Math.round((i - t.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && e.height > s.defaultLineHeight * 1.5) {
    let l = s.viewState.heightOracle.textHeight, a = Math.floor((n - e.top - (s.defaultLineHeight - l) * 0.5) / l);
    r += a * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(e.from, e.to);
  return e.from + En(o, r, s.state.tabSize);
}
function ch(s, t, e) {
  let i;
  if (s.nodeType != 3 || t != (i = s.nodeValue.length))
    return !1;
  for (let n = s.nextSibling; n; n = n.nextSibling)
    if (n.nodeType != 1 || n.nodeName != "BR")
      return !1;
  return ce(s, i - 1, i).getBoundingClientRect().left > e;
}
function uh(s, t, e) {
  if (t != 0)
    return !1;
  for (let n = s; ; ) {
    let r = n.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != n)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    n = r;
  }
  let i = s.nodeType == 1 ? s.getBoundingClientRect() : ce(s, 0, Math.max(s.nodeValue.length, 1)).getBoundingClientRect();
  return e - i.left > 5;
}
function _n(s, t) {
  let e = s.lineBlockAt(t);
  if (Array.isArray(e.type)) {
    for (let i of e.type)
      if (i.to > t || i.to == t && (i.to == e.to || i.type == K.Text))
        return i;
  }
  return e;
}
function dh(s, t, e, i) {
  let n = _n(s, t.head), r = !i || n.type != K.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(t.assoc < 0 && t.head > n.from ? t.head - 1 : t.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), l = s.textDirectionAt(n.from), a = s.posAtCoords({
      x: e == (l == $.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return S.cursor(a, e ? -1 : 1);
  }
  return S.cursor(e ? n.to : n.from, e ? -1 : 1);
}
function lr(s, t, e, i) {
  let n = s.state.doc.lineAt(t.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = t, a = null; ; ) {
    let h = eh(n, r, o, l, e), f = rl;
    if (!h) {
      if (n.number == (e ? s.state.doc.lines : 1))
        return l;
      f = `
`, n = s.state.doc.line(n.number + (e ? 1 : -1)), r = s.bidiSpans(n), h = S.cursor(e ? n.from : n.to);
    }
    if (a) {
      if (!a(f))
        return l;
    } else {
      if (!i)
        return h;
      a = i(f);
    }
    l = h;
  }
}
function ph(s, t, e) {
  let i = s.state.charCategorizer(t), n = i(e);
  return (r) => {
    let o = i(r);
    return n == kt.Space && (n = o), n == o;
  };
}
function gh(s, t, e, i) {
  let n = t.head, r = e ? 1 : -1;
  if (n == (e ? s.state.doc.length : 0))
    return S.cursor(n, t.assoc);
  let o = t.goalColumn, l, a = s.contentDOM.getBoundingClientRect(), h = s.coordsAtPos(n), f = s.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let d = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, s.defaultCharacterWidth * (n - d.from))), l = (r < 0 ? d.top : d.bottom) + f;
  }
  let c = a.left + o, u = i ?? s.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, g = al(s, { x: c, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? g < n : g > n))
      return S.cursor(g, t.assoc, void 0, o);
  }
}
function Oi(s, t, e) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(t - 1, t + 1, (r, o, l) => {
        if (t > r && t < o) {
          let a = i || e || (t - r < o - t ? -1 : 1);
          t = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return t;
  }
}
function hn(s, t, e) {
  let i = Oi(s.state.facet(ys).map((n) => n(s)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : S.cursor(i, i < e.from ? 1 : -1);
}
class mh {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
    let e = (i, n) => {
      this.ignoreDuringComposition(n) || n.type == "keydown" && this.keydown(t, n) || (this.mustFlushObserver(n) && t.observer.forceFlush(), this.runCustomHandlers(n.type, t, n) ? n.preventDefault() : i(t, n));
    };
    for (let i in _) {
      let n = _[i];
      t.contentDOM.addEventListener(i, (r) => {
        ar(t, r) && e(n, r);
      }, Jn[i]), this.registeredEvents.push(i);
    }
    t.scrollDOM.addEventListener("mousedown", (i) => {
      if (i.target == t.scrollDOM && i.clientY > t.contentDOM.getBoundingClientRect().bottom && (e(_.mousedown, i), !i.defaultPrevented && i.button == 2)) {
        let n = t.contentDOM.style.minHeight;
        t.contentDOM.style.minHeight = "100%", setTimeout(() => t.contentDOM.style.minHeight = n, 200);
      }
    }), t.scrollDOM.addEventListener("drop", (i) => {
      i.target == t.scrollDOM && i.clientY > t.contentDOM.getBoundingClientRect().bottom && e(_.drop, i);
    }), M.chrome && M.chrome_version == 102 && t.scrollDOM.addEventListener("wheel", () => {
      this.chromeScrollHack < 0 ? t.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
        this.chromeScrollHack = -1, t.contentDOM.style.pointerEvents = "";
      }, 100);
    }, { passive: !0 }), this.notifiedFocused = t.hasFocus, M.safari && t.contentDOM.addEventListener("input", () => null);
  }
  ensureHandlers(t, e) {
    var i;
    let n;
    this.customHandlers = [];
    for (let r of e)
      if (n = (i = r.update(t).spec) === null || i === void 0 ? void 0 : i.domEventHandlers) {
        this.customHandlers.push({ plugin: r.value, handlers: n });
        for (let o in n)
          this.registeredEvents.indexOf(o) < 0 && o != "scroll" && (this.registeredEvents.push(o), t.contentDOM.addEventListener(o, (l) => {
            ar(t, l) && this.runCustomHandlers(o, t, l) && l.preventDefault();
          }));
      }
  }
  runCustomHandlers(t, e, i) {
    for (let n of this.customHandlers) {
      let r = n.handlers[t];
      if (r)
        try {
          if (r.call(n.plugin, i, e) || i.defaultPrevented)
            return !0;
        } catch (o) {
          Ct(e.state, o);
        }
    }
    return !1;
  }
  runScrollHandlers(t, e) {
    this.lastScrollTop = t.scrollDOM.scrollTop, this.lastScrollLeft = t.scrollDOM.scrollLeft;
    for (let i of this.customHandlers) {
      let n = i.handlers.scroll;
      if (n)
        try {
          n.call(i.plugin, e, t);
        } catch (r) {
          Ct(t.state, r);
        }
    }
  }
  keydown(t, e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (e.keyCode != 27 && fl.indexOf(e.keyCode) < 0 && (t.inputState.lastEscPress = 0), M.android && M.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return t.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let i;
    return M.ios && !e.synthetic && !e.altKey && !e.metaKey && ((i = hl.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey || yh.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = i || e, setTimeout(() => this.flushIOSKey(t), 250), !0) : !1;
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return e ? (this.pendingIOSKey = void 0, Se(t.contentDOM, e.key, e.keyCode)) : !1;
  }
  ignoreDuringComposition(t) {
    return /^key/.test(t.type) ? this.composing > 0 ? !0 : M.safari && !M.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  mustFlushObserver(t) {
    return t.type == "keydown" && t.keyCode != 229;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.mouseSelection && this.mouseSelection.update(t), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
const hl = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], yh = "dthko", fl = [16, 17, 18, 20, 91, 92, 224, 225], hi = 6;
function fi(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function bh(s, t) {
  return Math.max(Math.abs(s.clientX - t.clientX), Math.abs(s.clientY - t.clientY));
}
class wh {
  constructor(t, e, i, n) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParent = Na(t.contentDOM), this.atoms = t.state.facet(ys).map((o) => o(t));
    let r = t.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(I.allowMultipleSelections) && xh(t, e), this.dragging = kh(t, e) && pl(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && (t.preventDefault(), this.select(t));
  }
  move(t) {
    var e;
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && bh(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let i = 0, n = 0, r = ((e = this.scrollParent) === null || e === void 0 ? void 0 : e.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o = tl(this.view);
    t.clientX - o.left <= r.left + hi ? i = -fi(r.left - t.clientX) : t.clientX + o.right >= r.right - hi && (i = fi(t.clientX - r.right)), t.clientY - o.top <= r.top + hi ? n = -fi(r.top - t.clientY) : t.clientY + o.bottom >= r.bottom - hi && (n = fi(t.clientY - r.bottom)), this.setScrollSpeed(i, n);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(t) {
    let e = null;
    for (let i = 0; i < t.ranges.length; i++) {
      let n = t.ranges[i], r = null;
      if (n.empty) {
        let o = Oi(this.atoms, n.from, 0);
        o != n.from && (r = S.cursor(o, -1));
      } else {
        let o = Oi(this.atoms, n.from, -1), l = Oi(this.atoms, n.to, 1);
        (o != n.from || l != n.to) && (r = S.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
      }
      r && (e || (e = t.ranges.slice()), e[i] = r);
    }
    return e ? S.create(e, t.mainIndex) : t;
  }
  select(t) {
    let { view: e } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection) || i.main.assoc != e.state.selection.main.assoc && this.dragging === !1) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.docChanged && this.dragging && (this.dragging = this.dragging.map(t.changes)), this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function xh(s, t) {
  let e = s.state.facet(jo);
  return e.length ? e[0](t) : M.mac ? t.metaKey : t.ctrlKey;
}
function vh(s, t) {
  let e = s.state.facet(Ko);
  return e.length ? e[0](t) : M.mac ? !t.altKey : !t.ctrlKey;
}
function kh(s, t) {
  let { main: e } = s.state.selection;
  if (e.empty)
    return !1;
  let i = Ii(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function ar(s, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, i; e != s.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = W.get(e)) && i.ignoreEvent(t))
      return !1;
  return !0;
}
const _ = /* @__PURE__ */ Object.create(null), Jn = /* @__PURE__ */ Object.create(null), cl = M.ie && M.ie_version < 15 || M.ios && M.webkit_version < 604;
function Sh(s) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    s.focus(), e.remove(), ul(s, e.value);
  }, 50);
}
function ul(s, t) {
  let { state: e } = s, i, n = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
  if (Yn != null && e.selection.ranges.every((a) => a.empty) && Yn == r.toString()) {
    let a = -1;
    i = e.changeByRange((h) => {
      let f = e.doc.lineAt(h.from);
      if (f.from == a)
        return { range: h };
      a = f.from;
      let c = e.toText((o ? r.line(n++).text : t) + e.lineBreak);
      return {
        changes: { from: f.from, insert: c },
        range: S.cursor(h.from + c.length)
      };
    });
  } else o ? i = e.changeByRange((a) => {
    let h = r.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: S.cursor(a.from + h.length)
    };
  }) : i = e.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
_.keydown = (s, t) => {
  s.inputState.setSelectionOrigin("select"), t.keyCode == 27 && (s.inputState.lastEscPress = Date.now());
};
_.touchstart = (s, t) => {
  s.inputState.lastTouchTime = Date.now(), s.inputState.setSelectionOrigin("select.pointer");
};
_.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
Jn.touchstart = Jn.touchmove = { passive: !0 };
_.mousedown = (s, t) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let e = null;
  for (let i of s.state.facet($o))
    if (e = i(s, t), e)
      break;
  if (!e && t.button == 0 && (e = Mh(s, t)), e) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new wh(s, t, e, i)), i && s.observer.ignore(() => Po(s.contentDOM)), s.inputState.mouseSelection && s.inputState.mouseSelection.start(t);
  }
};
function hr(s, t, e, i) {
  if (i == 1)
    return S.cursor(t, e);
  if (i == 2)
    return ah(s.state, t, e);
  {
    let n = ht.find(s.docView, t), r = s.state.doc.lineAt(n ? n.posAtEnd : t), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, S.range(o, l);
  }
}
let dl = (s, t) => s >= t.top && s <= t.bottom, fr = (s, t, e) => dl(t, e) && s >= e.left && s <= e.right;
function Ch(s, t, e, i) {
  let n = ht.find(s.docView, t);
  if (!n)
    return 1;
  let r = t - n.posAtStart;
  if (r == 0)
    return 1;
  if (r == n.length)
    return -1;
  let o = n.coordsAt(r, -1);
  if (o && fr(e, i, o))
    return -1;
  let l = n.coordsAt(r, 1);
  return l && fr(e, i, l) ? 1 : o && dl(i, o) ? -1 : 1;
}
function cr(s, t) {
  let e = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1);
  return { pos: e, bias: Ch(s, e, t.clientX, t.clientY) };
}
const Ah = M.ie && M.ie_version <= 11;
let ur = null, dr = 0, pr = 0;
function pl(s) {
  if (!Ah)
    return s.detail;
  let t = ur, e = pr;
  return ur = s, pr = Date.now(), dr = !t || e > Date.now() - 400 && Math.abs(t.clientX - s.clientX) < 2 && Math.abs(t.clientY - s.clientY) < 2 ? (dr + 1) % 3 : 1;
}
function Mh(s, t) {
  let e = cr(s, t), i = pl(t), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (e.pos = r.changes.mapPos(e.pos), n = n.map(r.changes));
    },
    get(r, o, l) {
      let a = cr(s, r), h, f = hr(s, a.pos, a.bias, i);
      if (e.pos != a.pos && !o) {
        let c = hr(s, e.pos, e.bias, i), u = Math.min(c.from, f.from), d = Math.max(c.to, f.to);
        f = u < f.from ? S.range(u, d) : S.range(d, u);
      }
      return o ? n.replaceRange(n.main.extend(f.from, f.to)) : l && i == 1 && n.ranges.length > 1 && (h = Oh(n, a.pos)) ? h : l ? n.addRange(f) : S.create([f]);
    }
  };
}
function Oh(s, t) {
  for (let e = 0; e < s.ranges.length; e++) {
    let { from: i, to: n } = s.ranges[e];
    if (i <= t && n >= t)
      return S.create(s.ranges.slice(0, e).concat(s.ranges.slice(e + 1)), s.mainIndex == e ? 0 : s.mainIndex - (s.mainIndex > e ? 1 : 0));
  }
  return null;
}
_.dragstart = (s, t) => {
  let { selection: { main: e } } = s.state, { mouseSelection: i } = s.inputState;
  i && (i.dragging = e), t.dataTransfer && (t.dataTransfer.setData("Text", s.state.sliceDoc(e.from, e.to)), t.dataTransfer.effectAllowed = "copyMove");
};
function gr(s, t, e, i) {
  if (!e)
    return;
  let n = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1);
  t.preventDefault();
  let { mouseSelection: r } = s.inputState, o = i && r && r.dragging && vh(s, t) ? { from: r.dragging.from, to: r.dragging.to } : null, l = { from: n, insert: e }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  });
}
_.drop = (s, t) => {
  if (!t.dataTransfer)
    return;
  if (s.state.readOnly)
    return t.preventDefault();
  let e = t.dataTransfer.files;
  if (e && e.length) {
    t.preventDefault();
    let i = Array(e.length), n = 0, r = () => {
      ++n == e.length && gr(s, t, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < e.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(e[o]);
    }
  } else
    gr(s, t, t.dataTransfer.getData("Text"), !0);
};
_.paste = (s, t) => {
  if (s.state.readOnly)
    return t.preventDefault();
  s.observer.flush();
  let e = cl ? null : t.clipboardData;
  e ? (ul(s, e.getData("text/plain") || e.getData("text/uri-text")), t.preventDefault()) : Sh(s);
};
function Dh(s, t) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function Th(s) {
  let t = [], e = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (t.push(s.sliceDoc(n.from, n.to)), e.push(n));
  if (!t.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let o = s.doc.lineAt(r);
      o.number > n && (t.push(o.text), e.push({ from: o.from, to: Math.min(s.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: t.join(s.lineBreak), ranges: e, linewise: i };
}
let Yn = null;
_.copy = _.cut = (s, t) => {
  let { text: e, ranges: i, linewise: n } = Th(s.state);
  if (!e && !n)
    return;
  Yn = n ? e : null;
  let r = cl ? null : t.clipboardData;
  r ? (t.preventDefault(), r.clearData(), r.setData("text/plain", e)) : Dh(s, e), t.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
const gl = /* @__PURE__ */ de.define();
function ml(s, t) {
  let e = [];
  for (let i of s.facet(_o)) {
    let n = i(s, t);
    n && e.push(n);
  }
  return e ? s.update({ effects: e, annotations: gl.of(!0) }) : null;
}
function yl(s) {
  setTimeout(() => {
    let t = s.hasFocus;
    if (t != s.inputState.notifiedFocused) {
      let e = ml(s.state, t);
      e ? s.dispatch(e) : s.update([]);
    }
  }, 10);
}
_.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), yl(s);
};
_.blur = (s) => {
  s.observer.clearSelectionRange(), yl(s);
};
_.compositionstart = _.compositionupdate = (s) => {
  s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0);
};
_.compositionend = (s) => {
  s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, M.chrome && M.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50);
};
_.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
_.beforeinput = (s, t) => {
  var e;
  let i;
  if (M.chrome && M.android && (i = hl.find((n) => n.inputType == t.inputType)) && (s.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
    let n = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > n + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
};
const mr = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class Ph {
  constructor(t) {
    this.lineWrapping = t, this.doc = N.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
  }
  heightForGap(t, e) {
    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return mr.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (e = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, i, n, r, o) {
    let l = mr.indexOf(t) > -1, a = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let f = o[h];
        f < 0 ? h++ : this.heightSamples[Math.floor(f * 10)] = !0;
      }
    }
    return a;
  }
}
class Bh {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Nt {
  /**
  @internal
  */
  constructor(t, e, i, n, r) {
    this.from = t, this.length = e, this.top = i, this.height = n, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? K.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof te ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new Nt(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var q = /* @__PURE__ */ function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
}(q || (q = {}));
const Di = 1e-3;
class ct {
  constructor(t, e, i = 2) {
    this.length = t, this.height = e, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t, e) {
    this.height != e && (Math.abs(this.height - e) > Di && (t.heightChanged = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(t, e, i) {
    return ct.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: f, toB: c } = n[l], u = r.lineAt(a, q.ByPosNoHeight, i.setDoc(e), 0, 0), d = u.to >= h ? u : r.lineAt(h, q.ByPosNoHeight, i, 0, 0);
      for (c += d.to - h, h = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, f = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, q.ByPosNoHeight, i, 0, 0));
      f += u.from - a, a = u.from;
      let p = bs.build(i.setDoc(o), t, f, c);
      r = r.replace(a, h, p);
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new wt(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, i = t.length, n = 0, r = 0;
    for (; ; )
      if (e == i)
        if (n > r * 2) {
          let l = t[e - 1];
          l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (r > n * 2) {
          let l = t[i];
          l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (n < r) {
        let l = t[e++];
        l && (n += l.size);
      } else {
        let l = t[--i];
        l && (r += l.size);
      }
    let o = 0;
    return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new Rh(ct.of(t.slice(0, e)), o, ct.of(t.slice(i)));
  }
}
ct.prototype.size = 1;
class bl extends ct {
  constructor(t, e, i) {
    super(t, e), this.deco = i;
  }
  blockAt(t, e, i, n) {
    return new Nt(n, this.length, i, this.height, this.deco || 0);
  }
  lineAt(t, e, i, n, r) {
    return this.blockAt(0, i, n, r);
  }
  forEachLine(t, e, i, n, r, o) {
    t <= r + this.length && e >= r && o(this.blockAt(0, i, n, r));
  }
  updateHeight(t, e = 0, i = !1, n) {
    return n && n.from <= e && n.more && this.setHeight(t, n.heights[n.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class wt extends bl {
  constructor(t, e) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t, e, i, n) {
    return new Nt(n, this.length, i, this.height, this.breaks);
  }
  replace(t, e, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof wt || n instanceof et && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof et ? n = new wt(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : ct.of(i);
  }
  updateHeight(t, e = 0, i = !1, n) {
    return n && n.from <= e && n.more ? this.setHeight(t, n.heights[n.index++]) : (i || this.outdated) && this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class et extends ct {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let i = t.doc.lineAt(e).number, n = t.doc.lineAt(e + this.length).number, r = n - i + 1, o, l = 0;
    if (t.lineWrapping) {
      let a = Math.min(this.height, t.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(t, e, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(e, n);
    if (e.lineWrapping) {
      let h = n + Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length), f = e.doc.lineAt(h), c = l + f.length * a, u = Math.max(i, t - c / 2);
      return new Nt(f.from, f.length, u, c, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: f, length: c } = e.doc.line(r + h);
      return new Nt(f, c, i + l * h, l, 0);
    }
  }
  lineAt(t, e, i, n, r) {
    if (e == q.ByHeight)
      return this.blockAt(t, i, n, r);
    if (e == q.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(t);
      return new Nt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(t), f = l + h.length * a, c = h.number - o, u = n + l * c + a * (h.from - r - c);
    return new Nt(h.from, h.length, Math.max(n, Math.min(u, n + this.height - f)), f, 0);
  }
  forEachLine(t, e, i, n, r, o) {
    t = Math.max(t, r), e = Math.min(e, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let f = t, c = n; f <= e; ) {
      let u = i.doc.lineAt(f);
      if (f == t) {
        let p = u.number - l;
        c += a * p + h * (t - r - p);
      }
      let d = a + h * u.length;
      o(new Nt(u.from, u.length, c, d, 0)), c += d, f = u.to + 1;
    }
  }
  replace(t, e, i) {
    let n = this.length - e;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof et ? i[i.length - 1] = new et(r.length + n) : i.push(null, new et(n - 1));
    }
    if (t > 0) {
      let r = i[0];
      r instanceof et ? i[0] = new et(t + r.length) : i.unshift(new et(t - 1), null);
    }
    return ct.of(i);
  }
  decomposeLeft(t, e) {
    e.push(new et(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new et(this.length - t - 1));
  }
  updateHeight(t, e = 0, i = !1, n) {
    let r = e + this.length;
    if (n && n.from <= e + this.length && n.more) {
      let o = [], l = Math.max(e, n.from), a = -1;
      for (n.from > e && o.push(new et(n.from - e - 1).updateHeight(t, e)); l <= r && n.more; ) {
        let f = t.doc.lineAt(l).length;
        o.length && o.push(null);
        let c = n.heights[n.index++];
        a == -1 ? a = c : Math.abs(c - a) >= Di && (a = -2);
        let u = new wt(f, c);
        u.outdated = !1, o.push(u), l += f + 1;
      }
      l <= r && o.push(null, new et(r - l).updateHeight(t, l));
      let h = ct.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Di || Math.abs(a - this.heightMetrics(t, e).perLine) >= Di) && (t.heightChanged = !0), h;
    } else (i || this.outdated) && (this.setHeight(t, t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Rh extends ct {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, n) {
    let r = i + this.left.height;
    return t < r ? this.left.blockAt(t, e, i, n) : this.right.blockAt(t, e, r, n + this.left.length + this.break);
  }
  lineAt(t, e, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = e == q.ByHeight ? t < o : t < l, h = a ? this.left.lineAt(t, e, i, n, r) : this.right.lineAt(t, e, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let f = e == q.ByPosNoHeight ? q.ByPosNoHeight : q.ByPos;
    return a ? h.join(this.right.lineAt(l, f, i, o, l)) : this.left.lineAt(l, f, i, n, r).join(h);
  }
  forEachLine(t, e, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      t < a && this.left.forEachLine(t, e, i, n, r, o), e >= a && this.right.forEachLine(t, e, i, l, a, o);
    else {
      let h = this.lineAt(a, q.ByPos, i, n, r);
      t < h.from && this.left.forEachLine(t, h.from - 1, i, n, r, o), h.to >= t && h.from <= e && o(h), e > h.to && this.right.forEachLine(h.to + 1, e, i, l, a, o);
    }
  }
  replace(t, e, i) {
    let n = this.left.length + this.break;
    if (e < n)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - n, e - n, i));
    let r = [];
    t > 0 && this.decomposeLeft(t, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (t > 0 && yr(r, o - 1), e < this.length) {
      let l = r.length;
      this.decomposeRight(e, r), yr(r, l);
    }
    return ct.of(r);
  }
  decomposeLeft(t, e) {
    let i = this.left.length;
    if (t <= i)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
  }
  decomposeRight(t, e) {
    let i = this.left.length, n = i + this.break;
    if (t >= n)
      return this.right.decomposeRight(t - n, e);
    t < i && this.left.decomposeRight(t, e), this.break && t < n && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? ct.of(this.break ? [t, null, e] : [t, e]) : (this.left = t, this.right = e, this.height = t.height + e.height, this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = !1, n) {
    let { left: r, right: o } = this, l = e + r.length + this.break, a = null;
    return n && n.from <= e + r.length && n.more ? a = r = r.updateHeight(t, e, i, n) : r.updateHeight(t, e, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(t, l, i, n) : o.updateHeight(t, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function yr(s, t) {
  let e, i;
  s[t] == null && (e = s[t - 1]) instanceof et && (i = s[t + 1]) instanceof et && s.splice(t - 1, 3, new et(e.length + 1 + i.length));
}
const Eh = 5;
class bs {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let i = Math.min(e, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof wt ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new wt(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, i) {
    if (t < e || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = e - t;
      i.block ? this.addBlock(new bl(o, n, i)) : (o || r || n >= Eh) && this.addLineDeco(n, r, o);
    } else e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new wt(this.pos - t, -1)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let i = new et(e - t);
    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof wt)
      return t;
    let e = new wt(0, -1);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    var e;
    this.enterLine();
    let i = (e = t.deco) === null || e === void 0 ? void 0 : e.type;
    i == K.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, i != K.WidgetBefore && (this.covering = t);
  }
  addLineDeco(t, e, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, t), n.breaks += e, this.writtenTo = this.pos = this.pos + i;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof wt) && !this.isCovered ? this.nodes.push(new wt(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = t;
    for (let n of this.nodes)
      n instanceof wt && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(t, e, i, n) {
    let r = new bs(i, t);
    return H.spans(e, i, n, r, 0), r.finish(i);
  }
}
function Lh(s, t, e) {
  let i = new Ih();
  return H.compare(s, t, e, i, 0), i.changes;
}
class Ih {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, n) {
    (t < e || i && i.heightRelevant || n && n.heightRelevant) && qn(t, e, this.changes, 5);
  }
}
function Nh(s, t) {
  let e = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, e.left), o = Math.min(n.innerWidth, e.right), l = Math.max(0, e.top), a = Math.min(n.innerHeight, e.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let f = h, c = window.getComputedStyle(f);
      if ((f.scrollHeight > f.clientHeight || f.scrollWidth > f.clientWidth) && c.overflow != "visible") {
        let u = f.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = h == s.parentNode ? u.bottom : Math.min(a, u.bottom);
      }
      h = c.position == "absolute" || c.position == "fixed" ? f.offsetParent : f.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - e.left,
    right: Math.max(r, o) - e.left,
    top: l - (e.top + t),
    bottom: Math.max(l, a) - (e.top + t)
  };
}
function Hh(s, t) {
  let e = s.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class fn {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.size = i;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let i = 0; i < t.length; i++) {
      let n = t[i], r = e[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(t) {
    return L.replace({ widget: new Fh(this.size, t) }).range(this.from, this.to);
  }
}
class Fh extends ie {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class br {
  constructor(t) {
    this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = wr, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = $.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let e = t.facet(ms).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Ph(e), this.stateDeco = t.facet(Ge).filter((i) => typeof i != "function"), this.heightMap = ct.empty().applyChanges(this.stateDeco, N.empty, this.heightOracle.setDoc(t.doc), [new At(0, 0, 0, t.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = L.set(this.lineGaps.map((i) => i.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? e.head : e.anchor;
      if (!t.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        t.push(new ci(r, o));
      }
    }
    this.viewports = t.sort((i, n) => i.from - n.from), this.scaler = this.heightMap.height <= 7e6 ? wr : new zh(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(this.scaler.scale == 1 ? t : Fe(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Ge).filter((f) => typeof f != "function");
    let n = t.changedRanges, r = At.extendWithRanges(n, Lh(i, this.stateDeco, t ? t.changes : Q.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
    let h = !t.changes.empty || t.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), h && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Yo) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(t) {
    let e = t.contentDOM, i = window.getComputedStyle(e), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? $.RTL : $.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = e.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, f = 0, c = parseInt(i.paddingTop) || 0, u = parseInt(i.paddingBottom) || 0;
    (this.paddingTop != c || this.paddingBottom != u) && (this.paddingTop = c, this.paddingBottom = u, h |= 10), this.editorWidth != t.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = t.scrollDOM.clientWidth, h |= 8), this.scrollTop != t.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = t.scrollDOM.scrollTop), this.scrolledToBottom = Ro(t.scrollDOM);
    let d = (this.printing ? Hh : Nh)(e, this.paddingTop), p = d.top - this.pixelViewport.top, g = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let m = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (m != this.inView && (this.inView = m, m && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let y = l.width;
    if ((this.contentDOMWidth != y || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, h |= 8), a) {
      let A = t.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(A) && (o = !0), o || n.lineWrapping && Math.abs(y - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: b, charWidth: w, textHeight: x } = t.docView.measureTextSize();
        o = b > 0 && n.refresh(r, b, w, x, y / w, A), o && (t.docView.minWidth = 0, h |= 8);
      }
      p > 0 && g > 0 ? f = Math.max(p, g) : p < 0 && g < 0 && (f = Math.min(p, g)), n.heightChanged = !1;
      for (let b of this.viewports) {
        let w = b.from == this.viewport.from ? A : t.docView.measureVisibleLineHeights(b);
        this.heightMap = (o ? ct.empty().applyChanges(this.stateDeco, N.empty, this.heightOracle, [new At(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Bh(b.from, w));
      }
      n.heightChanged && (h |= 2);
    }
    let v = !this.viewportIsAppropriate(this.viewport, f) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return v && (this.viewport = this.getViewport(f, this.scrollTarget)), this.updateForViewport(), (h & 2 || v) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new ci(n.lineAt(o - i * 1e3, q.ByHeight, r, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, q.ByHeight, r, 0, 0).to);
    if (e) {
      let { head: h } = e.range;
      if (h < a.from || h > a.to) {
        let f = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), c = n.lineAt(h, q.ByPos, r, 0, 0), u;
        e.y == "center" ? u = (c.top + c.bottom) / 2 - f / 2 : e.y == "start" || e.y == "nearest" && h < a.from ? u = c.top : u = c.bottom - f, a = new ci(n.lineAt(u - 1e3 / 2, q.ByHeight, r, 0, 0).from, n.lineAt(u + f + 1e3 / 2, q.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), n = e.mapPos(t.to, 1);
    return new ci(this.heightMap.lineAt(i, q.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, q.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(t, q.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (t == 0 || n <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let n of t)
      e.touchesRange(n.from, n.to) || i.push(new fn(e.mapPos(n.from), e.mapPos(n.to), n.size));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(t, e) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != $.LTR && !i)
      return [];
    let l = [], a = (h, f, c, u) => {
      if (f - h < r)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let m of p)
        if (m > h && m < f) {
          a(h, m - 10, c, u), a(m + 10, f, c, u);
          return;
        }
      let g = Wh(t, (m) => m.from >= c.from && m.to <= c.to && Math.abs(m.from - h) < r && Math.abs(m.to - f) < r && !p.some((y) => m.from < y && m.to > y));
      if (!g) {
        if (f < c.to && e && i && e.visibleRanges.some((m) => m.from <= f && m.to >= f)) {
          let m = e.moveToLineBoundary(S.cursor(f), !1, !0).head;
          m > h && (f = m);
        }
        g = new fn(h, f, this.gapSize(c, h, f, u));
      }
      l.push(g);
    };
    for (let h of this.viewportLines) {
      if (h.length < o)
        continue;
      let f = Vh(h.from, h.to, this.stateDeco);
      if (f.total < o)
        continue;
      let c = this.scrollTarget ? this.scrollTarget.range.head : null, u, d;
      if (i) {
        let p = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, m;
        if (c != null) {
          let y = di(f, c), v = ((this.visibleBottom - this.visibleTop) / 2 + p) / h.height;
          g = y - v, m = y + v;
        } else
          g = (this.visibleTop - h.top - p) / h.height, m = (this.visibleBottom - h.top + p) / h.height;
        u = ui(f, g), d = ui(f, m);
      } else {
        let p = f.total * this.heightOracle.charWidth, g = n * this.heightOracle.charWidth, m, y;
        if (c != null) {
          let v = di(f, c), A = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + g) / p;
          m = v - A, y = v + A;
        } else
          m = (this.pixelViewport.left - g) / p, y = (this.pixelViewport.right + g) / p;
        u = ui(f, m), d = ui(f, y);
      }
      u > h.from && a(h.from, u, h, f), d < h.to && a(d, h.to, h, f);
    }
    return l;
  }
  gapSize(t, e, i, n) {
    let r = di(n, i) - di(n, e);
    return this.heightOracle.lineWrapping ? t.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(t) {
    fn.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = L.set(t.map((e) => e.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let e = [];
    H.spans(t, this.viewport.from, this.viewport.to, {
      span(n, r) {
        e.push({ from: n, to: r });
      },
      point() {
      }
    }, 20);
    let i = e.length != this.visibleRanges.length || this.visibleRanges.some((n, r) => n.from != e[r].from || n.to != e[r].to);
    return this.visibleRanges = e, i ? 4 : 0;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Fe(this.heightMap.lineAt(t, q.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return Fe(this.heightMap.lineAt(this.scaler.fromDOM(t), q.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return Fe(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class ci {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function Vh(s, t, e) {
  let i = [], n = s, r = 0;
  return H.spans(e, s, t, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
    }
  }, 20), n < t && (i.push({ from: n, to: t }), r += t - n), { total: r, ranges: i };
}
function ui({ total: s, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(s * e);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = t[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function di(s, t) {
  let e = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (t <= n) {
      e += t - i;
      break;
    }
    e += n - i;
  }
  return e / s.total;
}
function Wh(s, t) {
  for (let e of s)
    if (t(e))
      return e;
}
const wr = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1
};
class zh {
  constructor(t, e, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = e.lineAt(l, q.ByPos, t, 0, 0).top, f = e.lineAt(a, q.ByPos, t, 0, 0).bottom;
      return n += f - h, { from: l, to: a, top: h, bottom: f, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (e.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, n = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.top)
        return n + (t - i) * this.scale;
      if (t <= r.bottom)
        return r.domTop + (t - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, n = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.domTop)
        return i + (t - n) / this.scale;
      if (t <= r.domBottom)
        return r.top + (t - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
}
function Fe(s, t) {
  if (t.scale == 1)
    return s;
  let e = t.toDOM(s.top), i = t.toDOM(s.bottom);
  return new Nt(s.from, s.length, e, i - e, Array.isArray(s._content) ? s._content.map((n) => Fe(n, t)) : s._content);
}
const pi = /* @__PURE__ */ O.define({ combine: (s) => s.join(" ") }), Xn = /* @__PURE__ */ O.define({ combine: (s) => s.indexOf(!0) > -1 }), Qn = /* @__PURE__ */ Xt.newName(), wl = /* @__PURE__ */ Xt.newName(), xl = /* @__PURE__ */ Xt.newName(), vl = { "&light": "." + wl, "&dark": "." + xl };
function Zn(s, t, e) {
  return new Xt(t, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!e || !e[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return e[n];
      }) : s + " " + i;
    }
  });
}
const qh = /* @__PURE__ */ Zn("." + Qn, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace:before": {
    content: "attr(data-display)",
    position: "absolute",
    pointerEvents: "none",
    color: "#888"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, vl);
class jh {
  constructor(t, e, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "";
    let { impreciseHead: r, impreciseAnchor: o } = t.docView;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
      let l = r || o ? [] : Uh(t), a = new No(l, t.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Gh(l, this.bounds.from);
    } else {
      let l = t.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Nn(t.contentDOM, l.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Nn(t.contentDOM, l.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = S.single(h, a);
    }
  }
}
function kl(s, t) {
  let e, { newSel: i } = t, n = s.state.selection.main, r = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: o, to: l } = t.bounds, a = n.from, h = null;
    (r === 8 || M.android && t.text.length < l - o) && (a = n.to, h = "end");
    let f = $h(s.state.doc.sliceString(o, l, ye), t.text, a - o, h);
    f && (M.chrome && r == 13 && f.toB == f.from + 2 && t.text.slice(f.from, f.toB) == ye + ye && f.toB--, e = {
      from: o + f.from,
      to: o + f.toA,
      insert: N.of(t.text.slice(f.from, f.toB).split(ye))
    });
  } else i && (!s.hasFocus && s.state.facet(Zi) || i.main.eq(n)) && (i = null);
  if (!e && !i)
    return !1;
  if (!e && t.typeOver && !n.empty && i && i.main.empty ? e = { from: n.from, to: n.to, insert: s.state.doc.slice(n.from, n.to) } : e && e.from >= n.from && e.to <= n.to && (e.from != n.from || e.to != n.to) && n.to - n.from - (e.to - e.from) <= 4 ? e = {
    from: n.from,
    to: n.to,
    insert: s.state.doc.slice(n.from, e.from).append(e.insert).append(s.state.doc.slice(e.to, n.to))
  } : (M.mac || M.android) && e && e.from == e.to && e.from == n.head - 1 && /^\. ?$/.test(e.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = S.single(i.main.anchor - 1, i.main.head - 1)), e = { from: n.from, to: n.to, insert: N.of([" "]) }) : M.chrome && e && e.from == e.to && e.from == n.head && e.insert.toString() == `
 ` && s.lineWrapping && (i && (i = S.single(i.main.anchor - 1, i.main.head - 1)), e = { from: n.from, to: n.to, insert: N.of([" "]) }), e) {
    if (M.ios && s.inputState.flushIOSKey(s) || M.android && (e.from == n.from && e.to == n.to && e.insert.length == 1 && e.insert.lines == 2 && Se(s.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || r == 8 && e.insert.length < e.to - e.from) && Se(s.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && Se(s.contentDOM, "Delete", 46)))
      return !0;
    let o = e.insert.toString();
    s.inputState.composing >= 0 && s.inputState.composing++;
    let l, a = () => l || (l = Kh(s, e, i));
    return s.state.facet(Go).some((h) => h(s, e.from, e.to, o, a)) || s.dispatch(a()), !0;
  } else if (i && !i.main.eq(n)) {
    let o = !1, l = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (o = !0), l = s.inputState.lastSelectionOrigin), s.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Kh(s, t, e) {
  let i, n = s.state, r = n.selection.main;
  if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && s.inputState.composing < 0) {
    let l = r.from < t.from ? n.sliceDoc(r.from, t.from) : "", a = r.to > t.to ? n.sliceDoc(t.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(l + t.insert.sliceString(0, void 0, s.state.lineBreak) + a));
  } else {
    let l = n.changes(t), a = e && e.main.to <= l.newLength ? e.main : void 0;
    if (n.selection.ranges.length > 1 && s.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
      let h = s.state.sliceDoc(t.from, t.to), f = ol(s) || s.state.doc.lineAt(r.head), c = r.to - t.to, u = r.to - r.from;
      i = n.changeByRange((d) => {
        if (d.from == r.from && d.to == r.to)
          return { changes: l, range: a || d.map(l) };
        let p = d.to - c, g = p - h.length;
        if (d.to - d.from != u || s.state.sliceDoc(g, p) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        f && d.to >= f.from && d.from <= f.to)
          return { range: d };
        let m = n.changes({ from: g, to: p, insert: t.insert }), y = d.to - r.to;
        return {
          changes: m,
          range: a ? S.range(Math.max(0, a.anchor + y), Math.max(0, a.head + y)) : d.map(m)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && n.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, o += ".compose", s.inputState.compositionFirstChange && (o += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: o, scrollIntoView: !0 });
}
function $h(s, t, e, i) {
  let n = Math.min(s.length, t.length), r = 0;
  for (; r < n && s.charCodeAt(r) == t.charCodeAt(r); )
    r++;
  if (r == n && s.length == t.length)
    return null;
  let o = s.length, l = t.length;
  for (; o > 0 && l > 0 && s.charCodeAt(o - 1) == t.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    e -= o + a - r;
  }
  if (o < r && s.length < t.length) {
    let a = e <= r && e >= o ? r - e : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = e <= r && e >= l ? r - e : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function Uh(s) {
  let t = [];
  if (s.root.activeElement != s.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return e && (t.push(new _s(e, i)), (n != e || r != i) && t.push(new _s(n, r))), t;
}
function Gh(s, t) {
  if (s.length == 0)
    return null;
  let e = s[0].pos, i = s.length == 2 ? s[1].pos : e;
  return e > -1 && i > -1 ? S.single(e + t, i + t) : null;
}
const _h = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, cn = M.ie && M.ie_version <= 11;
class Jh {
  constructor(t) {
    this.view = t, this.active = !1, this.selectionRange = new Ha(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      (M.ie && M.ie_version <= 11 || M.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), cn && (this.onCharData = (e) => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(t.contentDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runScrollHandlers(this.view, t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(!1), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint() {
    this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500);
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(Zi) ? i.root.activeElement != this.dom : !Mi(i.dom, n))
      return;
    let r = n.anchorNode && i.docView.nearest(n.anchorNode);
    if (r && r.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    (M.ie && M.ie_version <= 11 || M.android && M.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && Ni(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = M.safari && t.root.nodeType == 11 && Ea(this.dom.ownerDocument) == this.dom && Yh(this.view) || Ii(t.root);
    if (!e || this.selectionRange.eq(e))
      return !1;
    let i = Mi(this.dom, e);
    return i && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && Va(this.dom, e) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(e), i && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = e)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, _h), cn && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), cn && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(t, e) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Se(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
      key: t,
      keyCode: e,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, i = -1, n = !1;
    for (let r of t) {
      let o = this.readMutation(r);
      o && (o.typeOver && (n = !0), e == -1 ? { from: e, to: i } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)));
    }
    return { from: e, to: i, typeOver: n };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), n = this.selectionChanged && Mi(this.dom, this.selectionRange);
    return t < 0 && !n ? null : (t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new jh(this.view, t, e, i));
  }
  // Apply pending changes, if any
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return !1;
    let i = this.view.state, n = kl(this.view, e);
    return this.view.state == i && this.view.update([]), n;
  }
  readMutation(t) {
    let e = this.view.docView.nearest(t.target);
    if (!e || e.ignoreMutation(t))
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
      let i = xr(e, t.previousSibling || t.target.previousSibling, -1), n = xr(e, t.nextSibling || t.target.nextSibling, 1);
      return {
        from: i ? e.posAfter(i) : e.posAtStart,
        to: n ? e.posBefore(n) : e.posAtEnd,
        typeOver: !1
      };
    } else return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var t, e, i, n;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect(), (n = this.resizeContent) === null || n === void 0 || n.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function xr(s, t, e) {
  for (; t; ) {
    let i = W.get(t);
    if (i && i.parent == s)
      return i;
    let n = t.parentNode;
    t = n != s.dom ? n : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function Yh(s) {
  let t = null;
  function e(a) {
    a.preventDefault(), a.stopImmediatePropagation(), t = a.getTargetRanges()[0];
  }
  if (s.contentDOM.addEventListener("beforeinput", e, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", e, !0), !t)
    return null;
  let i = t.startContainer, n = t.startOffset, r = t.endContainer, o = t.endOffset, l = s.docView.domAtPos(s.state.selection.main.anchor);
  return Ni(l.node, l.offset, r, o) && ([i, n, r, o] = [r, o, i, n]), { anchorNode: i, anchorOffset: n, focusNode: r, focusOffset: o };
}
class T {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(t = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM);
    let { dispatch: e } = t;
    this.dispatchTransactions = t.dispatchTransactions || e && ((i) => i.forEach((n) => e(n, this))) || ((i) => this.update(i)), this.dispatch = this.dispatch.bind(this), this._root = t.root || Fa(t.parent) || document, this.viewState = new br(t.state || I.create(t)), this.plugins = this.state.facet(Ne).map((i) => new ln(i));
    for (let i of this.plugins)
      i.update(this);
    this.observer = new Jh(this), this.inputState = new mh(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new er(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), t.parent && t.parent.appendChild(this.dom);
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof at ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = !1, i = !1, n, r = this.state;
    for (let u of t) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    t.some((u) => u.annotation(gl)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = ml(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, f = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), f = this.observer.readChange(), (f && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (f = null)) : this.observer.clear(), r.facet(I.phrases) != this.state.facet(I.phrases))
      return this.setState(r);
    n = Vi.create(this, r, t), n.flags |= l;
    let c = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of t) {
        if (c && (c = c.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          c = new Fi(d.empty ? d : S.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Zs) && (c = d.value);
      }
      this.viewState.update(n, c), this.bidiCache = Wi.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), e = this.docView.update(n), this.state.facet(He) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(pi) != n.state.facet(pi) && (this.viewState.mustMeasureContent = !0), (e || i || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !n.empty)
      for (let u of this.state.facet(jn))
        u(n);
    (a || f) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), f && !kl(this, f) && h.force && Se(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new br(t), this.plugins = t.facet(Ne).map((i) => new ln(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView = new er(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(Ne), i = t.state.facet(Ne);
    if (e != i) {
      let n = [];
      for (let r of i) {
        let o = e.indexOf(r);
        if (o < 0)
          n.push(new ln(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = t, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != t && r.destroy(this);
      this.plugins = n, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins);
    } else
      for (let n of this.plugins)
        n.mustUpdate = t;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
  }
  /**
  @internal
  */
  measure(t = !0) {
    if (this.destroyed)
      return;
    this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, i = this.scrollDOM, { scrollTop: n } = i, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    n != this.viewState.scrollTop && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Ro(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let f = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Ct(this.state, p), vr;
          }
        }), c = Vi.create(this, this.state, []), u = !1;
        c.flags |= a, e ? e.flags |= a : e = c, this.updateState = 2, c.empty || (this.updatePlugins(c), this.inputState.update(c), this.updateAttrs(), u = this.docView.update(c));
        for (let d = 0; d < h.length; d++)
          if (f[d] != vr)
            try {
              let p = h[d];
              p.write && p.write(f[d], this);
            } catch (p) {
              Ct(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !c.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                n = i.scrollTop = n + p, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let l of this.state.facet(jn))
        l(e);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Qn + " " + (this.state.facet(Xn) ? xl : wl) + " " + this.state.facet(pi);
  }
  updateAttrs() {
    let t = kr(this, Xo, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(Zi) ? "true" : "false",
      class: "cm-content",
      style: `${M.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), kr(this, ms, e);
    let i = this.observer.ignore(() => {
      let n = zn(this.contentDOM, this.contentAttrs, e), r = zn(this.dom, this.editorAttrs, t);
      return n || r;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let i of t)
      for (let n of i.effects)
        if (n.is(T.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(He);
    let t = this.state.facet(T.cspNonce);
    Xt.mount(this.root, this.styleModules.concat(qh).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.spec == t) || null), e && e.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line breaks, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(t, e, i) {
    return hn(this, t, lr(this, t, e, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(t, e) {
    return hn(this, t, lr(this, t, e, (i) => ph(this, t.head, i)));
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(t, e, i = !0) {
    return dh(this, t, e, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(t, e, i) {
    return hn(this, t, gh(this, t, e, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(t) {
    return this.docView.domAtPos(t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = !0) {
    return this.readMeasured(), al(this, t, e);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(t, e);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(t), r = this.bidiSpans(n), o = r[Jt.find(r, t - n.from, -1, e)];
    return Xi(i, o.dir == $.LTR == e > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(t) {
    return !this.state.facet(Jo) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(t) {
    if (t.length > Xh)
      return sl(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let r of this.bidiCache)
      if (r.from == t.from && r.dir == e && (r.fresh || nl(r.isolates, i = tr(this, t.from, t.to))))
        return r.order;
    i || (i = tr(this, t.from, t.to));
    let n = th(t.text, e, i);
    return this.bidiCache.push(new Wi(t.from, t.to, e, i, !0, n)), n;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || M.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Po(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(t, e = {}) {
    return Zs.of(new Fi(typeof t == "number" ? S.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(t) {
    return Z.define(() => ({}), { eventHandlers: t });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(t, e) {
    let i = Xt.newName(), n = [pi.of(i), He.of(Zn(`.${i}`, t))];
    return e && e.dark && n.push(Xn.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(t) {
    return Te.lowest(He.of(Zn("." + Qn, t, vl)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), n = i && W.get(i) || W.get(t);
    return ((e = n == null ? void 0 : n.rootView) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
T.styleModule = He;
T.inputHandler = Go;
T.focusChangeEffect = _o;
T.perLineTextDirection = Jo;
T.exceptionSink = Uo;
T.updateListener = jn;
T.editable = Zi;
T.mouseSelectionStyle = $o;
T.dragMovesSelection = Ko;
T.clickAddsSelectionRange = jo;
T.decorations = Ge;
T.atomicRanges = ys;
T.bidiIsolatedRanges = Qo;
T.scrollMargins = Zo;
T.darkTheme = Xn;
T.cspNonce = /* @__PURE__ */ O.define({ combine: (s) => s.length ? s[0] : "" });
T.contentAttributes = ms;
T.editorAttributes = Xo;
T.lineWrapping = /* @__PURE__ */ T.contentAttributes.of({ class: "cm-lineWrapping" });
T.announce = /* @__PURE__ */ E.define();
const Xh = 4096, vr = {};
class Wi {
  constructor(t, e, i, n, r, o) {
    this.from = t, this.to = e, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(t, e) {
    if (e.empty && !t.some((r) => r.fresh))
      return t;
    let i = [], n = t.length ? t[t.length - 1].dir : $.LTR;
    for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
      let o = t[r];
      o.dir == n && !e.touchesRange(o.from, o.to) && i.push(new Wi(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function kr(s, t, e) {
  for (let i = s.state.facet(t), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && Wn(o, e);
  }
  return e;
}
const Qh = M.mac ? "mac" : M.windows ? "win" : M.linux ? "linux" : "key";
function Zh(s, t) {
  const e = s.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, l;
  for (let a = 0; a < e.length - 1; ++a) {
    const h = e[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      t == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function gi(s, t, e) {
  return t.altKey && (s = "Alt-" + s), t.ctrlKey && (s = "Ctrl-" + s), t.metaKey && (s = "Meta-" + s), e !== !1 && t.shiftKey && (s = "Shift-" + s), s;
}
const tf = /* @__PURE__ */ Te.default(/* @__PURE__ */ T.domEventHandlers({
  keydown(s, t) {
    return Cl(Sl(t.state), s, t, "editor");
  }
})), ws = /* @__PURE__ */ O.define({ enables: tf }), Sr = /* @__PURE__ */ new WeakMap();
function Sl(s) {
  let t = s.facet(ws), e = Sr.get(t);
  return e || Sr.set(t, e = nf(t.reduce((i, n) => i.concat(n), []))), e;
}
function _u(s, t, e) {
  return Cl(Sl(s.state), t, s, e);
}
let Ut = null;
const ef = 4e3;
function nf(s, t = Qh) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, f) => {
    var c, u;
    let d = e[o] || (e[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => Zh(y, t));
    for (let y = 1; y < p.length; y++) {
      let v = p.slice(0, y).join(" ");
      n(v, !0), d[v] || (d[v] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(A) => {
          let b = Ut = { view: A, prefix: v, scope: o };
          return setTimeout(() => {
            Ut == b && (Ut = null);
          }, ef), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = d[g] || (d[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (c = d._any) === null || c === void 0 ? void 0 : c.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && m.run.push(a), h && (m.preventDefault = !0), f && (m.stopPropagation = !0);
  };
  for (let o of s) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let f = e[h] || (e[h] = /* @__PURE__ */ Object.create(null));
        f._any || (f._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        for (let c in f)
          f[c].run.push(o.any);
      }
    let a = o[t] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return e;
}
function Cl(s, t, e, i) {
  let n = Ra(t), r = lt(n, 0), o = Ot(r) == n.length && n != " ", l = "", a = !1, h = !1, f = !1;
  Ut && Ut.view == e && Ut.scope == i && (l = Ut.prefix + " ", fl.indexOf(t.keyCode) < 0 && (h = !0, Ut = null));
  let c = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let y of m.run)
        if (!c.has(y) && (c.add(y), y(e, t)))
          return m.stopPropagation && (f = !0), !0;
      m.preventDefault && (m.stopPropagation && (f = !0), h = !0);
    }
    return !1;
  }, d = s[i], p, g;
  return d && (u(d[l + gi(n, t, !o)]) ? a = !0 : o && (t.altKey || t.metaKey || t.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(M.windows && t.ctrlKey && t.altKey) && (p = Qt[t.keyCode]) && p != n ? (u(d[l + gi(p, t, !0)]) || t.shiftKey && (g = Ue[t.keyCode]) != n && g != p && u(d[l + gi(g, t, !1)])) && (a = !0) : o && t.shiftKey && u(d[l + gi(n, t, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && f && t.stopPropagation(), a;
}
class ii {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(t, e, i, n, r) {
    this.className = t, this.left = e, this.top = i, this.width = n, this.height = r;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? !1 : (this.adjust(t), !0);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(t, e, i) {
    if (i.empty) {
      let n = t.coordsAtPos(i.head, i.assoc || 1);
      if (!n)
        return [];
      let r = Al(t);
      return [new ii(e, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    } else
      return sf(t, e, i);
  }
}
function Al(s) {
  let t = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == $.LTR ? t.left : t.right - s.scrollDOM.clientWidth) - s.scrollDOM.scrollLeft, top: t.top - s.scrollDOM.scrollTop };
}
function Cr(s, t, e) {
  let i = S.cursor(t);
  return {
    from: Math.max(e.from, s.moveToLineBoundary(i, !1, !0).from),
    to: Math.min(e.to, s.moveToLineBoundary(i, !0, !0).from),
    type: K.Text
  };
}
function sf(s, t, e) {
  if (e.to <= s.viewport.from || e.from >= s.viewport.to)
    return [];
  let i = Math.max(e.from, s.viewport.from), n = Math.min(e.to, s.viewport.to), r = s.textDirection == $.LTR, o = s.contentDOM, l = o.getBoundingClientRect(), a = Al(s), h = o.querySelector(".cm-line"), f = h && window.getComputedStyle(h), c = l.left + (f ? parseInt(f.paddingLeft) + Math.min(0, parseInt(f.textIndent)) : 0), u = l.right - (f ? parseInt(f.paddingRight) : 0), d = _n(s, i), p = _n(s, n), g = d.type == K.Text ? d : null, m = p.type == K.Text ? p : null;
  if (g && (s.lineWrapping || d.widgetLineBreaks) && (g = Cr(s, i, g)), m && (s.lineWrapping || p.widgetLineBreaks) && (m = Cr(s, n, m)), g && m && g.from == m.from)
    return v(A(e.from, e.to, g));
  {
    let w = g ? A(e.from, null, g) : b(d, !1), x = m ? A(null, e.to, m) : b(p, !0), D = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && w.bottom + s.defaultLineHeight / 2 < x.top ? D.push(y(c, w.bottom, u, x.top)) : w.bottom < x.top && s.elementAtHeight((w.bottom + x.top) / 2).type == K.Text && (w.bottom = x.top = (w.bottom + x.top) / 2), v(w).concat(D).concat(v(x));
  }
  function y(w, x, D, V) {
    return new ii(
      t,
      w - a.left,
      x - a.top - 0.01,
      D - w,
      V - x + 0.01
      /* C.Epsilon */
    );
  }
  function v({ top: w, bottom: x, horizontal: D }) {
    let V = [];
    for (let P = 0; P < D.length; P += 2)
      V.push(y(D[P], w, D[P + 1], x));
    return V;
  }
  function A(w, x, D) {
    let V = 1e9, P = -1e9, B = [];
    function z(ut, tt, rt, Tt, dt) {
      let U = s.coordsAtPos(ut, ut == D.to ? -2 : 2), Y = s.coordsAtPos(rt, rt == D.from ? 2 : -2);
      !U || !Y || (V = Math.min(U.top, Y.top, V), P = Math.max(U.bottom, Y.bottom, P), dt == $.LTR ? B.push(r && tt ? c : U.left, r && Tt ? u : Y.right) : B.push(!r && Tt ? c : Y.left, !r && tt ? u : U.right));
    }
    let J = w ?? D.from, st = x ?? D.to;
    for (let ut of s.visibleRanges)
      if (ut.to > J && ut.from < st)
        for (let tt = Math.max(ut.from, J), rt = Math.min(ut.to, st); ; ) {
          let Tt = s.state.doc.lineAt(tt);
          for (let dt of s.bidiSpans(Tt)) {
            let U = dt.from + Tt.from, Y = dt.to + Tt.from;
            if (U >= rt)
              break;
            Y > tt && z(Math.max(U, tt), w == null && U <= J, Math.min(Y, rt), x == null && Y >= st, dt.dir);
          }
          if (tt = Tt.to + 1, tt >= rt)
            break;
        }
    return B.length == 0 && z(J, w == null, st, x == null, s.textDirection), { top: V, bottom: P, horizontal: B };
  }
  function b(w, x) {
    let D = l.top + (x ? w.top : w.bottom);
    return { top: D, bottom: D, horizontal: [] };
  }
}
function rf(s, t) {
  return s.constructor == t.constructor && s.eq(t);
}
class of {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(Ti) != t.state.facet(Ti) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && t.view.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, i = t.facet(Ti);
    for (; e < i.length && i[e] != this.layer; )
      e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, i) => !rf(e, this.drawn[i]))) {
      let e = this.dom.firstChild, i = 0;
      for (let n of t)
        n.update && e && n.constructor && this.drawn[i].constructor && n.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(n.draw(), e);
      for (; e; ) {
        let n = e.nextSibling;
        e.remove(), e = n;
      }
      this.drawn = t;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Ti = /* @__PURE__ */ O.define();
function Ml(s) {
  return [
    Z.define((t) => new of(t, s)),
    Ti.of(s)
  ];
}
const Ol = !M.ios, Je = /* @__PURE__ */ O.define({
  combine(s) {
    return Pe(s, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (t, e) => Math.min(t, e),
      drawRangeCursor: (t, e) => t || e
    });
  }
});
function Ju(s = {}) {
  return [
    Je.of(s),
    lf,
    af,
    hf,
    Yo.of(!0)
  ];
}
function Dl(s) {
  return s.startState.facet(Je) != s.state.facet(Je);
}
const lf = /* @__PURE__ */ Ml({
  above: !0,
  markers(s) {
    let { state: t } = s, e = t.facet(Je), i = [];
    for (let n of t.selection.ranges) {
      let r = n == t.selection.main;
      if (n.empty ? !r || Ol : e.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = n.empty ? n : S.cursor(n.head, n.head > n.anchor ? -1 : 1);
        for (let a of ii.forRange(s, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(s, t) {
    s.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let e = Dl(s);
    return e && Ar(s.state, t), s.docChanged || s.selectionSet || e;
  },
  mount(s, t) {
    Ar(t.state, s);
  },
  class: "cm-cursorLayer"
});
function Ar(s, t) {
  t.style.animationDuration = s.facet(Je).cursorBlinkRate + "ms";
}
const af = /* @__PURE__ */ Ml({
  above: !1,
  markers(s) {
    return s.state.selection.ranges.map((t) => t.empty ? [] : ii.forRange(s, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
  },
  update(s, t) {
    return s.docChanged || s.selectionSet || s.viewportChanged || Dl(s);
  },
  class: "cm-selectionLayer"
}), Tl = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Ol && (Tl[".cm-line"].caretColor = "transparent !important");
const hf = /* @__PURE__ */ Te.highest(/* @__PURE__ */ T.theme(Tl)), Pl = /* @__PURE__ */ E.define({
  map(s, t) {
    return s == null ? null : t.mapPos(s);
  }
}), Ve = /* @__PURE__ */ bt.define({
  create() {
    return null;
  },
  update(s, t) {
    return s != null && (s = t.changes.mapPos(s)), t.effects.reduce((e, i) => i.is(Pl) ? i.value : e, s);
  }
}), ff = /* @__PURE__ */ Z.fromClass(class {
  constructor(s) {
    this.view = s, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(s) {
    var t;
    let e = s.state.field(Ve);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (s.startState.field(Ve) != e || s.docChanged || s.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let s = this.view.state.field(Ve), t = s != null && this.view.coordsAtPos(s);
    if (!t)
      return null;
    let e = this.view.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - e.left + this.view.scrollDOM.scrollLeft,
      top: t.top - e.top + this.view.scrollDOM.scrollTop,
      height: t.bottom - t.top
    };
  }
  drawCursor(s) {
    this.cursor && (s ? (this.cursor.style.left = s.left + "px", this.cursor.style.top = s.top + "px", this.cursor.style.height = s.height + "px") : this.cursor.style.left = "-100000px");
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(s) {
    this.view.state.field(Ve) != s && this.view.dispatch({ effects: Pl.of(s) });
  }
}, {
  eventHandlers: {
    dragover(s) {
      this.setDropPos(this.view.posAtCoords({ x: s.clientX, y: s.clientY }));
    },
    dragleave(s) {
      (s.target == this.view.contentDOM || !this.view.contentDOM.contains(s.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Yu() {
  return [Ve, ff];
}
function Mr(s, t, e, i, n) {
  t.lastIndex = 0;
  for (let r = s.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = t.exec(r.value); )
        n(o + l.index, l);
}
function cf(s, t) {
  let e = s.visibleRanges;
  if (e.length == 1 && e[0].from == s.viewport.from && e[0].to == s.viewport.to)
    return e;
  let i = [];
  for (let { from: n, to: r } of e)
    n = Math.max(s.state.doc.lineAt(n).from, n - t), r = Math.min(s.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= n ? i[i.length - 1].to = r : i.push({ from: n, to: r });
  return i;
}
class uf {
  /**
  Create a decorator.
  */
  constructor(t) {
    const { regexp: e, decoration: i, decorate: n, boundary: r, maxLength: o = 1e3 } = t;
    if (!e.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, n)
      this.addMatch = (l, a, h, f) => n(f, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, f) => {
        let c = i(l, a, h);
        c && f(h, h + l[0].length, c);
      };
    else if (i)
      this.addMatch = (l, a, h, f) => f(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(t) {
    let e = new fe(), i = e.add.bind(e);
    for (let { from: n, to: r } of cf(t, this.maxLength))
      Mr(t.state.doc, this.regexp, n, r, (o, l) => this.addMatch(l, t, o, i));
    return e.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(t, e) {
    let i = 1e9, n = -1;
    return t.docChanged && t.changes.iterChanges((r, o, l, a) => {
      a > t.view.viewport.from && l < t.view.viewport.to && (i = Math.min(l, i), n = Math.max(a, n));
    }), t.viewportChanged || n - i > 1e3 ? this.createDeco(t.view) : n > -1 ? this.updateRange(t.view, e.map(t.changes), i, n) : e;
  }
  updateRange(t, e, i, n) {
    for (let r of t.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, n);
      if (l > o) {
        let a = t.state.doc.lineAt(o), h = a.to < l ? t.state.doc.lineAt(l) : a, f = Math.max(r.from, a.from), c = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              f = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              c = l;
              break;
            }
        }
        let u = [], d, p = (g, m, y) => u.push(y.range(g, m));
        if (a == h)
          for (this.regexp.lastIndex = f - a.from; (d = this.regexp.exec(a.text)) && d.index < c - a.from; )
            this.addMatch(d, t, d.index + a.from, p);
        else
          Mr(t.state.doc, this.regexp, f, c, (g, m) => this.addMatch(m, t, g, p));
        e = e.update({ filterFrom: f, filterTo: c, filter: (g, m) => g < f || m > c, add: u });
      }
    }
    return e;
  }
}
const ts = /x/.unicode != null ? "gu" : "g", df = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, ts), pf = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let un = null;
function gf() {
  var s;
  if (un == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    un = ((s = t.tabSize) !== null && s !== void 0 ? s : t.MozTabSize) != null;
  }
  return un || !1;
}
const Pi = /* @__PURE__ */ O.define({
  combine(s) {
    let t = Pe(s, {
      render: null,
      specialChars: df,
      addSpecialChars: null
    });
    return (t.replaceTabs = !gf()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, ts)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, ts)), t;
  }
});
function Xu(s = {}) {
  return [Pi.of(s), mf()];
}
let Or = null;
function mf() {
  return Or || (Or = Z.fromClass(class {
    constructor(s) {
      this.view = s, this.decorations = L.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(s.state.facet(Pi)), this.decorations = this.decorator.createDeco(s);
    }
    makeDecorator(s) {
      return new uf({
        regexp: s.specialChars,
        decoration: (t, e, i) => {
          let { doc: n } = e.state, r = lt(t[0], 0);
          if (r == 9) {
            let o = n.lineAt(i), l = e.state.tabSize, a = ds(o.text, l, i - o.from);
            return L.replace({ widget: new xf((l - a % l) * this.view.defaultCharacterWidth) });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = L.replace({ widget: new wf(s, r) }));
        },
        boundary: s.replaceTabs ? void 0 : /[^]/
      });
    }
    update(s) {
      let t = s.state.facet(Pi);
      s.startState.facet(Pi) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(s.view)) : this.decorations = this.decorator.updateDeco(s, this.decorations);
    }
  }, {
    decorations: (s) => s.decorations
  }));
}
const yf = "•";
function bf(s) {
  return s >= 32 ? yf : s == 10 ? "␤" : String.fromCharCode(9216 + s);
}
class wf extends ie {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = bf(this.code), i = t.state.phrase("Control character") + " " + (pf[this.code] || "0x" + this.code.toString(16)), n = this.options.render && this.options.render(this.code, i, e);
    if (n)
      return n;
    let r = document.createElement("span");
    return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class xf extends ie {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return !1;
  }
}
function Qu() {
  return kf;
}
const vf = /* @__PURE__ */ L.line({ class: "cm-activeLine" }), kf = /* @__PURE__ */ Z.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.docChanged || s.selectionSet) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let t = -1, e = [];
    for (let i of s.state.selection.ranges) {
      let n = s.lineBlockAt(i.head);
      n.from > t && (e.push(vf.range(n.from)), t = n.from);
    }
    return L.set(e);
  }
}, {
  decorations: (s) => s.decorations
});
class Sf extends ie {
  constructor(t) {
    super(), this.content = t;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(t) {
    let e = t.firstChild ? Ae(t.firstChild) : [];
    if (!e.length)
      return null;
    let i = window.getComputedStyle(t.parentNode), n = Xi(e[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
    return n.bottom - n.top > r * 1.5 ? { left: n.left, right: n.right, top: n.top, bottom: n.top + r } : n;
  }
  ignoreEvent() {
    return !1;
  }
}
function Zu(s) {
  return Z.fromClass(class {
    constructor(t) {
      this.view = t, this.placeholder = s ? L.set([L.widget({ widget: new Sf(s), side: 1 }).range(0)]) : L.none;
    }
    get decorations() {
      return this.view.state.doc.length ? L.none : this.placeholder;
    }
  }, { decorations: (t) => t.decorations });
}
const es = 2e3;
function Cf(s, t, e) {
  let i = Math.min(t.line, e.line), n = Math.max(t.line, e.line), r = [];
  if (t.off > es || e.off > es || t.col < 0 || e.col < 0) {
    let o = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
    for (let a = i; a <= n; a++) {
      let h = s.doc.line(a);
      h.length <= l && r.push(S.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(t.col, e.col), l = Math.max(t.col, e.col);
    for (let a = i; a <= n; a++) {
      let h = s.doc.line(a), f = En(h.text, o, s.tabSize, !0);
      if (f < 0)
        r.push(S.cursor(h.to));
      else {
        let c = En(h.text, l, s.tabSize);
        r.push(S.range(h.from + f, h.from + c));
      }
    }
  }
  return r;
}
function Af(s, t) {
  let e = s.coordsAtPos(s.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / s.defaultCharacterWidth)) : -1;
}
function Dr(s, t) {
  let e = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1), i = s.state.doc.lineAt(e), n = e - i.from, r = n > es ? -1 : n == i.length ? Af(s, t.clientX) : ds(i.text, s.state.tabSize, e - i.from);
  return { line: i.number, col: r, off: n };
}
function Mf(s, t) {
  let e = Dr(s, t), i = s.state.selection;
  return e ? {
    update(n) {
      if (n.docChanged) {
        let r = n.changes.mapPos(n.startState.doc.line(e.line).from), o = n.state.doc.lineAt(r);
        e = { line: o.number, col: e.col, off: Math.min(e.off, o.length) }, i = i.map(n.changes);
      }
    },
    get(n, r, o) {
      let l = Dr(s, n);
      if (!l)
        return i;
      let a = Cf(s.state, e, l);
      return a.length ? o ? S.create(a.concat(i.ranges)) : S.create(a) : i;
    }
  } : null;
}
function td(s) {
  let t = (e) => e.altKey && e.button == 0;
  return T.mouseSelectionStyle.of((e, i) => t(i) ? Mf(e, i) : null);
}
const Of = {
  Alt: [18, (s) => !!s.altKey],
  Control: [17, (s) => !!s.ctrlKey],
  Shift: [16, (s) => !!s.shiftKey],
  Meta: [91, (s) => !!s.metaKey]
}, Df = { style: "cursor: crosshair" };
function ed(s = {}) {
  let [t, e] = Of[s.key || "Alt"], i = Z.fromClass(class {
    constructor(n) {
      this.view = n, this.isDown = !1;
    }
    set(n) {
      this.isDown != n && (this.isDown = n, this.view.update([]));
    }
  }, {
    eventHandlers: {
      keydown(n) {
        this.set(n.keyCode == t || e(n));
      },
      keyup(n) {
        (n.keyCode == t || !e(n)) && this.set(!1);
      },
      mousemove(n) {
        this.set(e(n));
      }
    }
  });
  return [
    i,
    T.contentAttributes.of((n) => {
      var r;
      return !((r = n.plugin(i)) === null || r === void 0) && r.isDown ? Df : null;
    })
  ];
}
const mi = "-10000px";
class Bl {
  constructor(t, e, i) {
    this.facet = e, this.createTooltipView = i, this.input = t.state.facet(e), this.tooltips = this.input.filter((n) => n), this.tooltipViews = this.tooltips.map(i);
  }
  update(t) {
    var e;
    let i = t.state.facet(this.facet), n = i.filter((o) => o);
    if (i === this.input) {
      for (let o of this.tooltipViews)
        o.update && o.update(t);
      return !1;
    }
    let r = [];
    for (let o = 0; o < n.length; o++) {
      let l = n[o], a = -1;
      if (l) {
        for (let h = 0; h < this.tooltips.length; h++) {
          let f = this.tooltips[h];
          f && f.create == l.create && (a = h);
        }
        if (a < 0)
          r[o] = this.createTooltipView(l);
        else {
          let h = r[o] = this.tooltipViews[a];
          h.update && h.update(t);
        }
      }
    }
    for (let o of this.tooltipViews)
      r.indexOf(o) < 0 && (o.dom.remove(), (e = o.destroy) === null || e === void 0 || e.call(o));
    return this.input = i, this.tooltips = n, this.tooltipViews = r, !0;
  }
}
function Tf(s) {
  let { win: t } = s;
  return { top: 0, left: 0, bottom: t.innerHeight, right: t.innerWidth };
}
const dn = /* @__PURE__ */ O.define({
  combine: (s) => {
    var t, e, i;
    return {
      position: M.ios ? "absolute" : ((t = s.find((n) => n.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = s.find((n) => n.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((i = s.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Tf
    };
  }
}), Tr = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ Z.fromClass(class {
  constructor(s) {
    this.view = s, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = s.state.facet(dn);
    this.position = t.position, this.parent = t.parent, this.classes = s.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new Bl(s, xs, (e) => this.createTooltip(e)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s of this.manager.tooltipViews)
        this.intersectionObserver.observe(s.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s) {
    s.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(s);
    t && this.observeIntersection();
    let e = t || s.geometryChanged, i = s.state.facet(dn);
    if (i.position != this.position) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      e = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      e = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(s) {
    let t = s.create(this.view);
    if (t.dom.classList.add("cm-tooltip"), s.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let e = document.createElement("div");
      e.className = "cm-tooltip-arrow", t.dom.appendChild(e);
    }
    return t.dom.style.position = this.position, t.dom.style.top = mi, this.container.appendChild(t.dom), t.mount && t.mount(this.view), t;
  }
  destroy() {
    var s, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let e of this.manager.tooltipViews)
      e.dom.remove(), (s = e.destroy) === null || s === void 0 || s.call(e);
    (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s = this.view.dom.getBoundingClientRect();
    return {
      editor: s,
      parent: this.parent ? this.container.getBoundingClientRect() : s,
      pos: this.manager.tooltips.map((t, e) => {
        let i = this.manager.tooltipViews[e];
        return i.getCoords ? i.getCoords(t.pos) : this.view.coordsAtPos(t.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: t }) => t.getBoundingClientRect()),
      space: this.view.state.facet(dn).tooltipSpace(this.view)
    };
  }
  writeMeasure(s) {
    var t;
    let { editor: e, space: i } = s, n = [];
    for (let r = 0; r < this.manager.tooltips.length; r++) {
      let o = this.manager.tooltips[r], l = this.manager.tooltipViews[r], { dom: a } = l, h = s.pos[r], f = s.size[r];
      if (!h || h.bottom <= Math.max(e.top, i.top) || h.top >= Math.min(e.bottom, i.bottom) || h.right < Math.max(e.left, i.left) - 0.1 || h.left > Math.min(e.right, i.right) + 0.1) {
        a.style.top = mi;
        continue;
      }
      let c = o.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null, u = c ? 7 : 0, d = f.right - f.left, p = (t = Tr.get(l)) !== null && t !== void 0 ? t : f.bottom - f.top, g = l.offset || Bf, m = this.view.textDirection == $.LTR, y = f.width > i.right - i.left ? m ? i.left : i.right - f.width : m ? Math.min(h.left - (c ? 14 : 0) + g.x, i.right - d) : Math.max(i.left, h.left - d + (c ? 14 : 0) - g.x), v = !!o.above;
      !o.strictSide && (v ? h.top - (f.bottom - f.top) - g.y < i.top : h.bottom + (f.bottom - f.top) + g.y > i.bottom) && v == i.bottom - h.bottom > h.top - i.top && (v = !v);
      let A = (v ? h.top - i.top : i.bottom - h.bottom) - u;
      if (A < p && l.resize !== !1) {
        if (A < this.view.defaultLineHeight) {
          a.style.top = mi;
          continue;
        }
        Tr.set(l, p), a.style.height = (p = A) + "px";
      } else a.style.height && (a.style.height = "");
      let b = v ? h.top - p - u - g.y : h.bottom + u + g.y, w = y + d;
      if (l.overlap !== !0)
        for (let x of n)
          x.left < w && x.right > y && x.top < b + p && x.bottom > b && (b = v ? x.top - p - 2 - u : x.bottom + u + 2);
      this.position == "absolute" ? (a.style.top = b - s.parent.top + "px", a.style.left = y - s.parent.left + "px") : (a.style.top = b + "px", a.style.left = y + "px"), c && (c.style.left = `${h.left + (m ? g.x : -g.x) - (y + 14 - 7)}px`), l.overlap !== !0 && n.push({ left: y, top: b, right: w, bottom: b + p }), a.classList.toggle("cm-tooltip-above", v), a.classList.toggle("cm-tooltip-below", !v), l.positioned && l.positioned(s.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let s of this.manager.tooltipViews)
        s.dom.style.top = mi;
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), Pf = /* @__PURE__ */ T.baseTheme({
  ".cm-tooltip": {
    zIndex: 100,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), Bf = { x: 0, y: 0 }, xs = /* @__PURE__ */ O.define({
  enables: [Rl, Pf]
}), zi = /* @__PURE__ */ O.define();
class vs {
  // Needs to be static so that host tooltip instances always match
  static create(t) {
    return new vs(t);
  }
  constructor(t) {
    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Bl(t, zi, (e) => this.createHostedView(e));
  }
  createHostedView(t) {
    let e = t.create(this.view);
    return e.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(e.dom), this.mounted && e.mount && e.mount(this.view), e;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews)
      e.mount && e.mount(t);
    this.mounted = !0;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews)
      e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews)
      (t = e.destroy) === null || t === void 0 || t.call(e);
  }
}
const Rf = /* @__PURE__ */ xs.compute([zi], (s) => {
  let t = s.facet(zi).filter((e) => e);
  return t.length === 0 ? null : {
    pos: Math.min(...t.map((e) => e.pos)),
    end: Math.max(...t.filter((e) => e.end != null).map((e) => e.end)),
    create: vs.create,
    above: t[0].above,
    arrow: t.some((e) => e.arrow)
  };
});
class Ef {
  constructor(t, e, i, n, r) {
    this.view = t, this.source = e, this.field = i, this.setHover = n, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active)
      return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, i = t.docView.nearest(e.target);
    if (!i)
      return;
    let n, r = 1;
    if (i instanceof _t)
      n = i.posAtStart;
    else {
      if (n = t.posAtCoords(e), n == null)
        return;
      let l = t.coordsAtPos(n);
      if (!l || e.y < l.top || e.y > l.bottom || e.x < l.left - t.defaultCharacterWidth || e.x > l.right + t.defaultCharacterWidth)
        return;
      let a = t.bidiSpans(t.state.doc.lineAt(n)).find((f) => f.from <= n && f.to >= n), h = a && a.dir == $.RTL ? -1 : 1;
      r = e.x < l.left ? -h : h;
    }
    let o = this.source(t, n, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: n };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && t.dispatch({ effects: this.setHover.of(a) }));
      }, (a) => Ct(t.state, a, "hover tooltip"));
    } else o && t.dispatch({ effects: this.setHover.of(o) });
  }
  mousemove(t) {
    var e;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let i = this.active;
    if (i && !Pr(this.lastMove.target) || this.pending) {
      let { pos: n } = i || this.pending, r = (e = i == null ? void 0 : i.end) !== null && e !== void 0 ? e : n;
      (n == r ? this.view.posAtCoords(this.lastMove) != n : !Lf(
        this.view,
        n,
        r,
        t.clientX,
        t.clientY,
        6
        /* Hover.MaxDist */
      )) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !Pr(t.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function Pr(s) {
  for (let t = s; t; t = t.parentNode)
    if (t.nodeType == 1 && t.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function Lf(s, t, e, i, n, r) {
  let o = document.createRange(), l = s.domAtPos(t), a = s.domAtPos(e);
  o.setEnd(a.node, a.offset), o.setStart(l.node, l.offset);
  let h = o.getClientRects();
  o.detach();
  for (let f = 0; f < h.length; f++) {
    let c = h[f];
    if (Math.max(c.top - n, n - c.bottom, c.left - i, i - c.right) <= r)
      return !0;
  }
  return !1;
}
function id(s, t = {}) {
  let e = E.define(), i = bt.define({
    create() {
      return null;
    },
    update(n, r) {
      if (n && (t.hideOnChange && (r.docChanged || r.selection) || t.hideOn && t.hideOn(r, n)))
        return null;
      if (n && r.docChanged) {
        let o = r.changes.mapPos(n.pos, -1, nt.TrackDel);
        if (o == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), n);
        l.pos = o, n.end != null && (l.end = r.changes.mapPos(n.end)), n = l;
      }
      for (let o of r.effects)
        o.is(e) && (n = o.value), o.is(If) && (n = null);
      return n;
    },
    provide: (n) => zi.from(n)
  });
  return [
    i,
    Z.define((n) => new Ef(
      n,
      s,
      i,
      e,
      t.hoverTime || 300
      /* Hover.Time */
    )),
    Rf
  ];
}
function El(s, t) {
  let e = s.plugin(Rl);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
const If = /* @__PURE__ */ E.define(), Br = /* @__PURE__ */ O.define({
  combine(s) {
    let t, e;
    for (let i of s)
      t = t || i.topContainer, e = e || i.bottomContainer;
    return { topContainer: t, bottomContainer: e };
  }
});
function nd(s, t) {
  let e = s.plugin(Ll), i = e ? e.specs.indexOf(t) : -1;
  return i > -1 ? e.panels[i] : null;
}
const Ll = /* @__PURE__ */ Z.fromClass(class {
  constructor(s) {
    this.input = s.state.facet(Er), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(s));
    let t = s.state.facet(Br);
    this.top = new yi(s, !0, t.topContainer), this.bottom = new yi(s, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(s) {
    let t = s.state.facet(Br);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new yi(s.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new yi(s.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = s.state.facet(Er);
    if (e != this.input) {
      let i = e.filter((a) => a), n = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), f;
        h < 0 ? (f = a(s.view), l.push(f)) : (f = this.panels[h], f.update && f.update(s)), n.push(f), (f.top ? r : o).push(f);
      }
      this.specs = i, this.panels = n, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(s);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (s) => T.scrollMargins.of((t) => {
    let e = t.plugin(s);
    return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
  })
});
class yi {
  constructor(t, e, i) {
    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels)
      e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels)
      if (e.dom.parentNode == this.dom) {
        for (; t != e.dom; )
          t = Rr(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = Rr(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" "))
        t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" "))
        t && this.container.classList.add(t);
    }
  }
}
function Rr(s) {
  let t = s.nextSibling;
  return s.remove(), t;
}
const Er = /* @__PURE__ */ O.define({
  enables: Ll
});
class jt extends he {
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(t) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(t) {
  }
}
jt.prototype.elementClass = "";
jt.prototype.toDOM = void 0;
jt.prototype.mapMode = nt.TrackBefore;
jt.prototype.startSide = jt.prototype.endSide = -1;
jt.prototype.point = !0;
const Bi = /* @__PURE__ */ O.define(), Nf = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => H.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, je = /* @__PURE__ */ O.define();
function Hf(s) {
  return [Il(), je.of(Object.assign(Object.assign({}, Nf), s))];
}
const Lr = /* @__PURE__ */ O.define({
  combine: (s) => s.some((t) => t)
});
function Il(s) {
  return [
    Ff
  ];
}
const Ff = /* @__PURE__ */ Z.fromClass(class {
  constructor(s) {
    this.view = s, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = s.state.facet(je).map((t) => new Nr(s, t));
    for (let t of this.gutters)
      this.dom.appendChild(t.dom);
    this.fixed = !s.state.facet(Lr), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  update(s) {
    if (this.updateGutters(s)) {
      let t = this.prevViewport, e = s.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(i < (e.to - e.from) * 0.8);
    }
    s.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(Lr) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let t = this.dom.nextSibling;
    s && this.dom.remove();
    let e = H.iter(this.view.state.facet(Bi), this.view.viewport.from), i = [], n = this.gutters.map((r) => new Vf(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == K.Text && o) {
            is(e, i, l.from);
            for (let a of n)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (r.type == K.Text) {
        is(e, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      }
    for (let r of n)
      r.finish();
    s && this.view.scrollDOM.insertBefore(this.dom, t);
  }
  updateGutters(s) {
    let t = s.startState.facet(je), e = s.state.facet(je), i = s.docChanged || s.heightChanged || s.viewportChanged || !H.eq(s.startState.facet(Bi), s.state.facet(Bi), s.view.viewport.from, s.view.viewport.to);
    if (t == e)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of e) {
        let o = t.indexOf(r);
        o < 0 ? n.push(new Nr(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove();
  }
}, {
  provide: (s) => T.scrollMargins.of((t) => {
    let e = t.plugin(s);
    return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == $.LTR ? { left: e.dom.offsetWidth } : { right: e.dom.offsetWidth };
  })
});
function Ir(s) {
  return Array.isArray(s) ? s : [s];
}
function is(s, t, e) {
  for (; s.value && s.from <= e; )
    s.from == e && t.push(s.value), s.next();
}
class Vf {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = H.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: n } = this, r = e.top - this.height;
    if (this.i == n.elements.length) {
      let o = new Nl(t, e.height, r, i);
      n.elements.push(o), n.dom.appendChild(o.dom);
    } else
      n.elements[this.i].update(t, e.height, r, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let n = [];
    is(this.cursor, n, e.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(t, e, n);
    r && n.unshift(r);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, n);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e);
    i && this.addElement(t, e, [i]);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class Nr {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = n.clientY;
        let l = t.lineBlockAtHeight(o - t.documentTop);
        e.domEventHandlers[i](t, l, n) && n.preventDefault();
      });
    this.markers = Ir(e.markers(t)), e.initialSpacer && (this.spacer = new Nl(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = Ir(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], t);
      n != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [n]);
    }
    let i = t.view.viewport;
    return !H.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class Nl {
  constructor(t, e, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, n);
  }
  update(t, e, i, n) {
    this.height != e && (this.dom.style.height = (this.height = e) + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Wf(this.markers, n) || this.setMarkers(t, n);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < e.length ? e[r++] : null, h = !1;
      if (a) {
        let f = a.elementClass;
        f && (i += " " + f);
        for (let c = o; c < this.markers.length; c++)
          if (this.markers[c].compare(a)) {
            l = c, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let f = this.markers[o++];
        if (f.toDOM) {
          f.destroy(n);
          let c = n.nextSibling;
          n.remove(), n = c;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(t), n)), h && o++;
    }
    this.dom.className = i, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Wf(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++)
    if (!s[e].compare(t[e]))
      return !1;
  return !0;
}
const zf = /* @__PURE__ */ O.define(), be = /* @__PURE__ */ O.define({
  combine(s) {
    return Pe(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let n in e) {
          let r = i[n], o = e[n];
          i[n] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return i;
      }
    });
  }
});
class pn extends jt {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function gn(s, t) {
  return s.state.facet(be).formatNumber(t, s.state);
}
const qf = /* @__PURE__ */ je.compute([be], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(zf);
  },
  lineMarker(t, e, i) {
    return i.some((n) => n.toDOM) ? null : new pn(gn(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (t) => t.startState.facet(be) != t.state.facet(be),
  initialSpacer(t) {
    return new pn(gn(t, Hr(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let i = gn(e.view, Hr(e.view.state.doc.lines));
    return i == t.number ? t : new pn(i);
  },
  domEventHandlers: s.facet(be).domEventHandlers
}));
function sd(s = {}) {
  return [
    be.of(s),
    Il(),
    qf
  ];
}
function Hr(s) {
  let t = 9;
  for (; t < s; )
    t = t * 10 + 9;
  return t;
}
const jf = /* @__PURE__ */ new class extends jt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Kf = /* @__PURE__ */ Bi.compute(["selection"], (s) => {
  let t = [], e = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.head).from;
    n > e && (e = n, t.push(jf.range(n)));
  }
  return H.of(t);
});
function rd() {
  return Kf;
}
const $f = 1024;
let Uf = 0;
class St {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class R {
  /// Create a new node prop type.
  constructor(t = {}) {
    this.id = Uf++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /// This is meant to be used with
  /// [`NodeSet.extend`](#common.NodeSet.extend) or
  /// [`LRParser.configure`](#lr.ParserConfig.props) to compute
  /// prop values for each node type in the set. Takes a [match
  /// object](#common.NodeType^match) or function that returns undefined
  /// if the node type doesn't get this prop, and the prop's value if
  /// it does.
  add(t) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = mt.match(t)), (e) => {
      let i = t(e);
      return i === void 0 ? null : [this, i];
    };
  }
}
R.closedBy = new R({ deserialize: (s) => s.split(" ") });
R.openedBy = new R({ deserialize: (s) => s.split(" ") });
R.group = new R({ deserialize: (s) => s.split(" ") });
R.contextHash = new R({ perNode: !0 });
R.lookAhead = new R({ perNode: !0 });
R.mounted = new R({ perNode: !0 });
class Gf {
  constructor(t, e, i) {
    this.tree = t, this.overlay = e, this.parser = i;
  }
}
const _f = /* @__PURE__ */ Object.create(null);
class mt {
  /// @internal
  constructor(t, e, i, n = 0) {
    this.name = t, this.props = e, this.id = i, this.flags = n;
  }
  /// Define a node type.
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : _f, i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), n = new mt(t.name || "", e, t.id, i);
    if (t.props) {
      for (let r of t.props)
        if (Array.isArray(r) || (r = r(n)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[r[0].id] = r[1];
        }
    }
    return n;
  }
  /// Retrieves a node prop for this type. Will return `undefined` if
  /// the prop isn't present on this node.
  prop(t) {
    return this.props[t.id];
  }
  /// True when this is the top node of a grammar.
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /// True when this node is produced by a skip rule.
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /// Indicates whether this is an error node.
  get isError() {
    return (this.flags & 4) > 0;
  }
  /// When true, this node type doesn't correspond to a user-declared
  /// named node, for example because it is used to cache repetition.
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /// Returns true when this node's name or one of its
  /// [groups](#common.NodeProp^group) matches the given string.
  is(t) {
    if (typeof t == "string") {
      if (this.name == t)
        return !0;
      let e = this.prop(R.group);
      return e ? e.indexOf(t) > -1 : !1;
    }
    return this.id == t;
  }
  /// Create a function from node types to arbitrary values by
  /// specifying an object whose property names are node or
  /// [group](#common.NodeProp^group) names. Often useful with
  /// [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  /// names, separated by spaces, in a single property name to map
  /// multiple node names to a single value.
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let i in t)
      for (let n of i.split(" "))
        e[n] = t[i];
    return (i) => {
      for (let n = i.prop(R.group), r = -1; r < (n ? n.length : 0); r++) {
        let o = e[r < 0 ? i.name : n[r]];
        if (o)
          return o;
      }
    };
  }
}
mt.none = new mt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Hl {
  /// Create a set with the given types. The `id` property of each
  /// type should correspond to its position within the array.
  constructor(t) {
    this.types = t;
    for (let e = 0; e < t.length; e++)
      if (t[e].id != e)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /// Create a copy of this set with some node properties added. The
  /// arguments to this method can be created with
  /// [`NodeProp.add`](#common.NodeProp.add).
  extend(...t) {
    let e = [];
    for (let i of this.types) {
      let n = null;
      for (let r of t) {
        let o = r(i);
        o && (n || (n = Object.assign({}, i.props)), n[o[0].id] = o[1]);
      }
      e.push(n ? new mt(i.name, n, i.id, i.flags) : i);
    }
    return new Hl(e);
  }
}
const bi = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap();
var j;
(function(s) {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays";
})(j || (j = {}));
class X {
  /// Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  constructor(t, e, i, n, r) {
    if (this.type = t, this.children = e, this.positions = i, this.length = n, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /// @internal
  toString() {
    let t = this.prop(R.mounted);
    if (t && !t.overlay)
      return t.tree.toString();
    let e = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (e && (e += ","), e += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  /// Get a [tree cursor](#common.TreeCursor) positioned at the top of
  /// the tree. Mode can be used to [control](#common.IterMode) which
  /// nodes the cursor visits.
  cursor(t = 0) {
    return new Ye(this.topNode, t);
  }
  /// Get a [tree cursor](#common.TreeCursor) pointing into this tree
  /// at the given position and side (see
  /// [`moveTo`](#common.TreeCursor.moveTo).
  cursorAt(t, e = 0, i = 0) {
    let n = bi.get(this) || this.topNode, r = new Ye(n);
    return r.moveTo(t, e), bi.set(this, r._tree), r;
  }
  /// Get a [syntax node](#common.SyntaxNode) object for the top of the
  /// tree.
  get topNode() {
    return new Mt(this, 0, 0, null);
  }
  /// Get the [syntax node](#common.SyntaxNode) at the given position.
  /// If `side` is -1, this will move into nodes that end at the
  /// position. If 1, it'll move into nodes that start at the
  /// position. With 0, it'll only enter nodes that cover the position
  /// from both sides.
  ///
  /// Note that this will not enter
  /// [overlays](#common.MountedTree.overlay), and you often want
  /// [`resolveInner`](#common.Tree.resolveInner) instead.
  resolve(t, e = 0) {
    let i = Oe(bi.get(this) || this.topNode, t, e, !1);
    return bi.set(this, i), i;
  }
  /// Like [`resolve`](#common.Tree.resolve), but will enter
  /// [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  /// pointing into the innermost overlaid tree at the given position
  /// (with parent links going through all parent structure, including
  /// the host trees).
  resolveInner(t, e = 0) {
    let i = Oe(Fr.get(this) || this.topNode, t, e, !0);
    return Fr.set(this, i), i;
  }
  /// Iterate over the tree and its children, calling `enter` for any
  /// node that touches the `from`/`to` region (if given) before
  /// running over such a node's children, and `leave` (if given) when
  /// leaving the node. When `enter` returns `false`, that node will
  /// not have its children iterated over (or `leave` called).
  iterate(t) {
    let { enter: e, leave: i, from: n = 0, to: r = this.length } = t, o = t.mode || 0, l = (o & j.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | j.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= n && (!l && a.type.isAnonymous || e(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /// Get the value of the given [node prop](#common.NodeProp) for this
  /// node. Works with both per-node and per-type props.
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  /// Returns the node's [per-node props](#common.NodeProp.perNode) in a
  /// format that can be passed to the [`Tree`](#common.Tree)
  /// constructor.
  get propValues() {
    let t = [];
    if (this.props)
      for (let e in this.props)
        t.push([+e, this.props[e]]);
    return t;
  }
  /// Balance the direct children of this tree, producing a copy of
  /// which may have children grouped into subtrees with type
  /// [`NodeType.none`](#common.NodeType^none).
  balance(t = {}) {
    return this.children.length <= 8 ? this : Cs(mt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, i, n) => new X(this.type, e, i, n, this.propValues), t.makeTree || ((e, i, n) => new X(mt.none, e, i, n)));
  }
  /// Build a tree from a postfix-ordered buffer of node information,
  /// or a cursor over such a buffer.
  static build(t) {
    return Yf(t);
  }
}
X.empty = new X(mt.none, [], [], 0);
class ks {
  constructor(t, e) {
    this.buffer = t, this.index = e;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new ks(this.buffer, this.index);
  }
}
class pe {
  /// Create a tree buffer.
  constructor(t, e, i) {
    this.buffer = t, this.length = e, this.set = i;
  }
  /// @internal
  get type() {
    return mt.none;
  }
  /// @internal
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; )
      t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  /// @internal
  childString(t) {
    let e = this.buffer[t], i = this.buffer[t + 3], n = this.set.types[e], r = n.name;
    if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), t += 4, i == t)
      return r;
    let o = [];
    for (; t < i; )
      o.push(this.childString(t)), t = this.buffer[t + 3];
    return r + "(" + o.join(",") + ")";
  }
  /// @internal
  findChild(t, e, i, n, r) {
    let { buffer: o } = this, l = -1;
    for (let a = t; a != e && !(Fl(r, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /// @internal
  slice(t, e, i) {
    let n = this.buffer, r = new Uint16Array(e - t), o = 0;
    for (let l = t, a = 0; l < e; ) {
      r[a++] = n[l++], r[a++] = n[l++] - i;
      let h = r[a++] = n[l++] - i;
      r[a++] = n[l++] - t, o = Math.max(o, h);
    }
    return new pe(r, o, this.set);
  }
}
function Fl(s, t, e, i) {
  switch (s) {
    case -2:
      return e < t;
    case -1:
      return i >= t && e < t;
    case 0:
      return e < t && i > t;
    case 1:
      return e <= t && i > t;
    case 2:
      return i > t;
    case 4:
      return !0;
  }
}
function Vl(s, t) {
  let e = s.childBefore(t);
  for (; e; ) {
    let i = e.lastChild;
    if (!i || i.to != e.to)
      break;
    i.type.isError && i.from == i.to ? (s = e, e = i.prevSibling) : e = i;
  }
  return s;
}
function Oe(s, t, e, i) {
  for (var n; s.from == s.to || (e < 1 ? s.from >= t : s.from > t) || (e > -1 ? s.to <= t : s.to < t); ) {
    let o = !i && s instanceof Mt && s.index < 0 ? null : s.parent;
    if (!o)
      return s;
    s = o;
  }
  let r = i ? 0 : j.IgnoreOverlays;
  if (i)
    for (let o = s, l = o.parent; l; o = l, l = o.parent)
      o instanceof Mt && o.index < 0 && ((n = l.enter(t, e, r)) === null || n === void 0 ? void 0 : n.from) != o.from && (s = l);
  for (; ; ) {
    let o = s.enter(t, e, r);
    if (!o)
      return s;
    s = o;
  }
}
class Mt {
  constructor(t, e, i, n) {
    this._tree = t, this.from = e, this.index = i, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t, e, i, n, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = e > 0 ? l.length : -1; t != h; t += e) {
        let f = l[t], c = a[t] + o.from;
        if (Fl(n, i, c, c + f.length)) {
          if (f instanceof pe) {
            if (r & j.ExcludeBuffers)
              continue;
            let u = f.findChild(0, f.buffer.length, e, i - c, n);
            if (u > -1)
              return new Ft(new Jf(o, f, t, c), null, u);
          } else if (r & j.IncludeAnonymous || !f.type.isAnonymous || Ss(f)) {
            let u;
            if (!(r & j.IgnoreMounts) && f.props && (u = f.prop(R.mounted)) && !u.overlay)
              return new Mt(u.tree, c, t, o);
            let d = new Mt(f, c, t, o);
            return r & j.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(e < 0 ? f.children.length - 1 : 0, e, i, n);
          }
        }
      }
      if (r & j.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? t = o.index + e : t = e < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.nextChild(
      0,
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  enter(t, e, i = 0) {
    let n;
    if (!(i & j.IgnoreOverlays) && (n = this._tree.prop(R.mounted)) && n.overlay) {
      let r = t - this.from;
      for (let { from: o, to: l } of n.overlay)
        if ((e > 0 ? o <= r : o < r) && (e < 0 ? l >= r : l > r))
          return new Mt(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, i);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; )
      t = t._parent;
    return t;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  cursor(t = 0) {
    return new Ye(this, t);
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  resolve(t, e = 0) {
    return Oe(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return Oe(this, t, e, !0);
  }
  enterUnfinishedNodesBefore(t) {
    return Vl(this, t);
  }
  getChild(t, e = null, i = null) {
    let n = qi(this, t, e, i);
    return n.length ? n[0] : null;
  }
  getChildren(t, e = null, i = null) {
    return qi(this, t, e, i);
  }
  /// @internal
  toString() {
    return this._tree.toString();
  }
  get node() {
    return this;
  }
  matchContext(t) {
    return ji(this, t);
  }
}
function qi(s, t, e, i) {
  let n = s.cursor(), r = [];
  if (!n.firstChild())
    return r;
  if (e != null) {
    for (; !n.type.is(e); )
      if (!n.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return r;
    if (n.type.is(t) && r.push(n.node), !n.nextSibling())
      return i == null ? r : [];
  }
}
function ji(s, t, e = t.length - 1) {
  for (let i = s.parent; e >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (t[e] && t[e] != i.name)
        return !1;
      e--;
    }
  }
  return !0;
}
class Jf {
  constructor(t, e, i, n) {
    this.parent = t, this.buffer = e, this.index = i, this.start = n;
  }
}
class Ft {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, i) {
    this.context = t, this._parent = e, this.index = i, this.type = t.buffer.set.types[t.buffer.buffer[i]];
  }
  child(t, e, i) {
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.context.start, i);
    return r < 0 ? null : new Ft(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.child(
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.child(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  enter(t, e, i = 0) {
    if (i & j.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return r < 0 ? null : new Ft(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + t,
      t,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Ft(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new Ft(this.context, this._parent, t.findChild(
      e,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  cursor(t = 0) {
    return new Ye(this, t);
  }
  get tree() {
    return null;
  }
  toTree() {
    let t = [], e = [], { buffer: i } = this.context, n = this.index + 4, r = i.buffer[this.index + 3];
    if (r > n) {
      let o = i.buffer[this.index + 1];
      t.push(i.slice(n, r, o)), e.push(0);
    }
    return new X(this.type, t, e, this.to - this.from);
  }
  resolve(t, e = 0) {
    return Oe(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return Oe(this, t, e, !0);
  }
  enterUnfinishedNodesBefore(t) {
    return Vl(this, t);
  }
  /// @internal
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(t, e = null, i = null) {
    let n = qi(this, t, e, i);
    return n.length ? n[0] : null;
  }
  getChildren(t, e = null, i = null) {
    return qi(this, t, e, i);
  }
  get node() {
    return this;
  }
  matchContext(t) {
    return ji(this, t);
  }
}
class Ye {
  /// Shorthand for `.type.name`.
  get name() {
    return this.type.name;
  }
  /// @internal
  constructor(t, e = 0) {
    if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof Mt)
      this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let i = t._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0) : !1;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: i, buffer: n } = this.buffer;
    return this.type = e || n.set.types[n.buffer[t]], this.from = i + n.buffer[t + 1], this.to = i + n.buffer[t + 2], !0;
  }
  yield(t) {
    return t ? t instanceof Mt ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : !1;
  }
  /// @internal
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /// @internal
  enterChild(t, e, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
    let { buffer: n } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /// Move the cursor to this node's first child. When this returns
  /// false, the node has no child, and the cursor has not been moved.
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /// Move the cursor to this node's last child.
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /// Move the cursor to the first child that ends after `pos`.
  childAfter(t) {
    return this.enterChild(
      1,
      t,
      2
      /* Side.After */
    );
  }
  /// Move to the last child that starts before `pos`.
  childBefore(t) {
    return this.enterChild(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  /// Move the cursor to the child around `pos`. If side is -1 the
  /// child may end at that position, when 1 it may start there. This
  /// will also enter [overlaid](#common.MountedTree.overlay)
  /// [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  /// set to false.
  enter(t, e, i = this.mode) {
    return this.buffer ? i & j.ExcludeBuffers ? !1 : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, i));
  }
  /// Move to the node's parent node, if this isn't the top node.
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & j.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t = this.mode & j.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  /// @internal
  sibling(t) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : !1;
    let { buffer: e } = this.buffer, i = this.stack.length - 1;
    if (t < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(e.findChild(
          n,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let n = e.buffer[this.index + 3];
      if (n < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : !1;
  }
  /// Move to this node's next sibling, if any.
  nextSibling() {
    return this.sibling(1);
  }
  /// Move to this node's previous sibling, if any.
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t) {
    let e, i, { buffer: n } = this;
    if (n) {
      if (t > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (n.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: e, parent: i } = n);
    } else
      ({ index: e, _parent: i } = this._tree);
    for (; i; { index: e, _parent: i } = i)
      if (e > -1)
        for (let r = e + t, o = t < 0 ? -1 : i._tree.children.length; r != o; r += t) {
          let l = i._tree.children[r];
          if (this.mode & j.IncludeAnonymous || l instanceof pe || !l.type.isAnonymous || Ss(l))
            return !1;
        }
    return !0;
  }
  move(t, e) {
    if (e && this.enterChild(
      t,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(t))
        return !0;
      if (this.atLastNode(t) || !this.parent())
        return !1;
    }
  }
  /// Move to the next node in a
  /// [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  /// traversal, going from a node to its first child or, if the
  /// current node is empty or `enter` is false, its next sibling or
  /// the next sibling of the first parent node that has one.
  next(t = !0) {
    return this.move(1, t);
  }
  /// Move to the next node in a last-to-first pre-order traveral. A
  /// node is followed by its last child or, if it has none, its
  /// previous sibling or the previous sibling of the first parent
  /// node that has one.
  prev(t = !0) {
    return this.move(-1, t);
  }
  /// Move the cursor to the innermost node that covers `pos`. If
  /// `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  /// it will enter nodes that start at `pos`.
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
      ;
    for (; this.enterChild(1, t, e); )
      ;
    return this;
  }
  /// Get a [syntax node](#common.SyntaxNode) at the cursor's current
  /// position.
  get node() {
    if (!this.buffer)
      return this._tree;
    let t = this.bufferNode, e = null, i = 0;
    if (t && t.context == this.buffer)
      t: for (let n = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = t; o; o = o._parent)
          if (o.index == n) {
            if (n == this.index)
              return o;
            e = o, i = r + 1;
            break t;
          }
        n = this.stack[--r];
      }
    for (let n = i; n < this.stack.length; n++)
      e = new Ft(this.buffer, e, this.stack[n]);
    return this.bufferNode = new Ft(this.buffer, e, this.index);
  }
  /// Get the [tree](#common.Tree) that represents the current node, if
  /// any. Will return null when the node is in a [tree
  /// buffer](#common.TreeBuffer).
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /// Iterate over the current node and all its descendants, calling
  /// `enter` when entering a node and `leave`, if given, when leaving
  /// one. When `enter` returns `false`, any children of that node are
  /// skipped, and `leave` isn't called for it.
  iterate(t, e) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || t(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; n && e && e(this), n = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!i)
          return;
        this.parent(), i--, n = !0;
      }
    }
  }
  /// Test whether the current node matches a given context—a sequence
  /// of direct parent node names. Empty strings in the context array
  /// are treated as wildcards.
  matchContext(t) {
    if (!this.buffer)
      return ji(this.node, t);
    let { buffer: e } = this.buffer, { types: i } = e.set;
    for (let n = t.length - 1, r = this.stack.length - 1; n >= 0; r--) {
      if (r < 0)
        return ji(this.node, t, n);
      let o = i[e.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (t[n] && t[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function Ss(s) {
  return s.children.some((t) => t instanceof pe || !t.type.isAnonymous || Ss(t));
}
function Yf(s) {
  var t;
  let { buffer: e, nodeSet: i, maxBufferLength: n = $f, reused: r = [], minRepeatType: o = i.types.length } = s, l = Array.isArray(e) ? new ks(e, e.length) : e, a = i.types, h = 0, f = 0;
  function c(b, w, x, D, V) {
    let { id: P, start: B, end: z, size: J } = l, st = f;
    for (; J < 0; )
      if (l.next(), J == -1) {
        let dt = r[P];
        x.push(dt), D.push(B - b);
        return;
      } else if (J == -3) {
        h = P;
        return;
      } else if (J == -4) {
        f = P;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${J}`);
    let ut = a[P], tt, rt, Tt = B - b;
    if (z - B <= n && (rt = g(l.pos - w, V))) {
      let dt = new Uint16Array(rt.size - rt.skip), U = l.pos - rt.size, Y = dt.length;
      for (; l.pos > U; )
        Y = m(rt.start, dt, Y);
      tt = new pe(dt, z - rt.start, i), Tt = rt.start - b;
    } else {
      let dt = l.pos - J;
      l.next();
      let U = [], Y = [], ne = P >= o ? P : -1, ge = 0, ri = z;
      for (; l.pos > dt; )
        ne >= 0 && l.id == ne && l.size >= 0 ? (l.end <= ri - n && (d(U, Y, B, ge, l.end, ri, ne, st), ge = U.length, ri = l.end), l.next()) : c(B, dt, U, Y, ne);
      if (ne >= 0 && ge > 0 && ge < U.length && d(U, Y, B, ge, B, ri, ne, st), U.reverse(), Y.reverse(), ne > -1 && ge > 0) {
        let Rs = u(ut);
        tt = Cs(ut, U, Y, 0, U.length, 0, z - B, Rs, Rs);
      } else
        tt = p(ut, U, Y, z - B, st - z);
    }
    x.push(tt), D.push(Tt);
  }
  function u(b) {
    return (w, x, D) => {
      let V = 0, P = w.length - 1, B, z;
      if (P >= 0 && (B = w[P]) instanceof X) {
        if (!P && B.type == b && B.length == D)
          return B;
        (z = B.prop(R.lookAhead)) && (V = x[P] + B.length + z);
      }
      return p(b, w, x, D, V);
    };
  }
  function d(b, w, x, D, V, P, B, z) {
    let J = [], st = [];
    for (; b.length > D; )
      J.push(b.pop()), st.push(w.pop() + x - V);
    b.push(p(i.types[B], J, st, P - V, z - P)), w.push(V - x);
  }
  function p(b, w, x, D, V = 0, P) {
    if (h) {
      let B = [R.contextHash, h];
      P = P ? [B].concat(P) : [B];
    }
    if (V > 25) {
      let B = [R.lookAhead, V];
      P = P ? [B].concat(P) : [B];
    }
    return new X(b, w, x, D, P);
  }
  function g(b, w) {
    let x = l.fork(), D = 0, V = 0, P = 0, B = x.end - n, z = { size: 0, start: 0, skip: 0 };
    t: for (let J = x.pos - b; x.pos > J; ) {
      let st = x.size;
      if (x.id == w && st >= 0) {
        z.size = D, z.start = V, z.skip = P, P += 4, D += 4, x.next();
        continue;
      }
      let ut = x.pos - st;
      if (st < 0 || ut < J || x.start < B)
        break;
      let tt = x.id >= o ? 4 : 0, rt = x.start;
      for (x.next(); x.pos > ut; ) {
        if (x.size < 0)
          if (x.size == -3)
            tt += 4;
          else
            break t;
        else x.id >= o && (tt += 4);
        x.next();
      }
      V = rt, D += st, P += tt;
    }
    return (w < 0 || D == b) && (z.size = D, z.start = V, z.skip = P), z.size > 4 ? z : void 0;
  }
  function m(b, w, x) {
    let { id: D, start: V, end: P, size: B } = l;
    if (l.next(), B >= 0 && D < o) {
      let z = x;
      if (B > 4) {
        let J = l.pos - (B - 4);
        for (; l.pos > J; )
          x = m(b, w, x);
      }
      w[--x] = z, w[--x] = P - b, w[--x] = V - b, w[--x] = D;
    } else B == -3 ? h = D : B == -4 && (f = D);
    return x;
  }
  let y = [], v = [];
  for (; l.pos > 0; )
    c(s.start || 0, s.bufferStart || 0, y, v, -1);
  let A = (t = s.length) !== null && t !== void 0 ? t : y.length ? v[0] + y[0].length : 0;
  return new X(a[s.topID], y.reverse(), v.reverse(), A);
}
const Vr = /* @__PURE__ */ new WeakMap();
function Ri(s, t) {
  if (!s.isAnonymous || t instanceof pe || t.type != s)
    return 1;
  let e = Vr.get(t);
  if (e == null) {
    e = 1;
    for (let i of t.children) {
      if (i.type != s || !(i instanceof X)) {
        e = 1;
        break;
      }
      e += Ri(s, i);
    }
    Vr.set(t, e);
  }
  return e;
}
function Cs(s, t, e, i, n, r, o, l, a) {
  let h = 0;
  for (let p = i; p < n; p++)
    h += Ri(s, t[p]);
  let f = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), c = [], u = [];
  function d(p, g, m, y, v) {
    for (let A = m; A < y; ) {
      let b = A, w = g[A], x = Ri(s, p[A]);
      for (A++; A < y; A++) {
        let D = Ri(s, p[A]);
        if (x + D >= f)
          break;
        x += D;
      }
      if (A == b + 1) {
        if (x > f) {
          let D = p[b];
          d(D.children, D.positions, 0, D.children.length, g[b] + v);
          continue;
        }
        c.push(p[b]);
      } else {
        let D = g[A - 1] + p[A - 1].length - w;
        c.push(Cs(s, p, g, b, A, w, D, null, a));
      }
      u.push(w + v - r);
    }
  }
  return d(t, e, i, n, 0), (l || a)(c, u, o);
}
class od {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(t, e, i) {
    let n = this.map.get(t);
    n || this.map.set(t, n = /* @__PURE__ */ new Map()), n.set(e, i);
  }
  getBuffer(t, e) {
    let i = this.map.get(t);
    return i && i.get(e);
  }
  /// Set the value for this syntax node.
  set(t, e) {
    t instanceof Ft ? this.setBuffer(t.context.buffer, t.index, e) : t instanceof Mt && this.map.set(t.tree, e);
  }
  /// Retrieve value for this syntax node, if it exists in the map.
  get(t) {
    return t instanceof Ft ? this.getBuffer(t.context.buffer, t.index) : t instanceof Mt ? this.map.get(t.tree) : void 0;
  }
  /// Set the value for the node that a cursor currently points to.
  cursorSet(t, e) {
    t.buffer ? this.setBuffer(t.buffer.buffer, t.index, e) : this.map.set(t.tree, e);
  }
  /// Retrieve the value for the node that a cursor currently points
  /// to.
  cursorGet(t) {
    return t.buffer ? this.getBuffer(t.buffer.buffer, t.index) : this.map.get(t.tree);
  }
}
class zt {
  /// Construct a tree fragment. You'll usually want to use
  /// [`addTree`](#common.TreeFragment^addTree) and
  /// [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  /// calling this directly.
  constructor(t, e, i, n, r = !1, o = !1) {
    this.from = t, this.to = e, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /// Whether the start of the fragment represents the start of a
  /// parse, or the end of a change. (In the second case, it may not
  /// be safe to reuse some nodes at the start, depending on the
  /// parsing algorithm.)
  get openStart() {
    return (this.open & 1) > 0;
  }
  /// Whether the end of the fragment represents the end of a
  /// full-document parse, or the start of a change.
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /// Create a set of fragments from a freshly parsed tree, or update
  /// an existing set of fragments by replacing the ones that overlap
  /// with a tree with content from the new tree. When `partial` is
  /// true, the parse is treated as incomplete, and the resulting
  /// fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  /// true.
  static addTree(t, e = [], i = !1) {
    let n = [new zt(0, t.length, t, 0, !1, i)];
    for (let r of e)
      r.to > t.length && n.push(r);
    return n;
  }
  /// Apply a set of edits to an array of fragments, removing or
  /// splitting fragments as necessary to remove edited ranges, and
  /// adjusting offsets for fragments that moved.
  static applyChanges(t, e, i = 128) {
    if (!e.length)
      return t;
    let n = [], r = 1, o = t.length ? t[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let f = l < e.length ? e[l] : null, c = f ? f.fromA : 1e9;
      if (c - a >= i)
        for (; o && o.from < c; ) {
          let u = o;
          if (a >= u.from || c <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, c) - h;
            u = d >= p ? null : new zt(d, p, u.tree, u.offset + h, l > 0, !!f);
          }
          if (u && n.push(u), o.to > c)
            break;
          o = r < t.length ? t[r++] : null;
        }
      if (!f)
        break;
      a = f.toA, h = f.toA - f.toB;
    }
    return n;
  }
}
class Xf {
  /// Start a parse, returning a [partial parse](#common.PartialParse)
  /// object. [`fragments`](#common.TreeFragment) can be passed in to
  /// make the parse incremental.
  ///
  /// By default, the entire input is parsed. You can pass `ranges`,
  /// which should be a sorted array of non-empty, non-overlapping
  /// ranges, to parse only those ranges. The tree returned in that
  /// case will start at `ranges[0].from`.
  startParse(t, e, i) {
    return typeof t == "string" && (t = new Qf(t)), i = i ? i.length ? i.map((n) => new St(n.from, n.to)) : [new St(0, 0)] : [new St(0, t.length)], this.createParse(t, e || [], i);
  }
  /// Run a full parse, returning the resulting tree.
  parse(t, e, i) {
    let n = this.startParse(t, e, i);
    for (; ; ) {
      let r = n.advance();
      if (r)
        return r;
    }
  }
}
class Qf {
  constructor(t) {
    this.string = t;
  }
  get length() {
    return this.string.length;
  }
  chunk(t) {
    return this.string.slice(t);
  }
  get lineChunks() {
    return !1;
  }
  read(t, e) {
    return this.string.slice(t, e);
  }
}
function ld(s) {
  return (t, e, i, n) => new tc(t, s, e, i, n);
}
class Wr {
  constructor(t, e, i, n, r) {
    if (this.parser = t, this.parse = e, this.overlay = i, this.target = n, this.ranges = r, !r.length || r.some((o) => o.from >= o.to))
      throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(r));
  }
}
class Zf {
  constructor(t, e, i, n, r, o, l) {
    this.parser = t, this.predicate = e, this.mounts = i, this.index = n, this.start = r, this.target = o, this.prev = l, this.depth = 0, this.ranges = [];
  }
}
const ns = new R({ perNode: !0 });
class tc {
  constructor(t, e, i, n, r) {
    this.nest = e, this.input = i, this.fragments = n, this.ranges = r, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = t;
  }
  advance() {
    if (this.baseParse) {
      let i = this.baseParse.advance();
      if (!i)
        return null;
      if (this.baseParse = null, this.baseTree = i, this.startInner(), this.stoppedAt != null)
        for (let n of this.inner)
          n.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let i = this.baseTree;
      return this.stoppedAt != null && (i = new X(i.type, i.children, i.positions, i.length, i.propValues.concat([[ns, this.stoppedAt]]))), i;
    }
    let t = this.inner[this.innerDone], e = t.parse.advance();
    if (e) {
      this.innerDone++;
      let i = Object.assign(/* @__PURE__ */ Object.create(null), t.target.props);
      i[R.mounted.id] = new Gf(e, t.overlay, t.parser), t.target.props = i;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let t = this.input.length;
    for (let e = this.innerDone; e < this.inner.length; e++)
      this.inner[e].ranges[0].from < t && (t = Math.min(t, this.inner[e].parse.parsedPos));
    return t;
  }
  stopAt(t) {
    if (this.stoppedAt = t, this.baseParse)
      this.baseParse.stopAt(t);
    else
      for (let e = this.innerDone; e < this.inner.length; e++)
        this.inner[e].parse.stopAt(t);
  }
  startInner() {
    let t = new nc(this.fragments), e = null, i = null, n = new Ye(new Mt(this.baseTree, this.ranges[0].from, 0, null), j.IncludeAnonymous | j.IgnoreMounts);
    t: for (let r, o; this.stoppedAt == null || n.from < this.stoppedAt; ) {
      let l = !0, a;
      if (t.hasNode(n)) {
        if (e) {
          let h = e.mounts.find((f) => f.frag.from <= n.from && f.frag.to >= n.to && f.mount.overlay);
          if (h)
            for (let f of h.mount.overlay) {
              let c = f.from + h.pos, u = f.to + h.pos;
              c >= n.from && u <= n.to && !e.ranges.some((d) => d.from < u && d.to > c) && e.ranges.push({ from: c, to: u });
            }
        }
        l = !1;
      } else if (i && (o = ec(i.ranges, n.from, n.to)))
        l = o != 2;
      else if (!n.type.isAnonymous && n.from < n.to && (r = this.nest(n, this.input))) {
        n.tree || ic(n);
        let h = t.findMounts(n.from, r.parser);
        if (typeof r.overlay == "function")
          e = new Zf(r.parser, r.overlay, h, this.inner.length, n.from, n.tree, e);
        else {
          let f = jr(this.ranges, r.overlay || [new St(n.from, n.to)]);
          f.length && this.inner.push(new Wr(r.parser, r.parser.startParse(this.input, Kr(h, f), f), r.overlay ? r.overlay.map((c) => new St(c.from - n.from, c.to - n.from)) : null, n.tree, f)), r.overlay ? f.length && (i = { ranges: f, depth: 0, prev: i }) : l = !1;
        }
      } else e && (a = e.predicate(n)) && (a === !0 && (a = new St(n.from, n.to)), a.from < a.to && e.ranges.push(a));
      if (l && n.firstChild())
        e && e.depth++, i && i.depth++;
      else
        for (; !n.nextSibling(); ) {
          if (!n.parent())
            break t;
          if (e && !--e.depth) {
            let h = jr(this.ranges, e.ranges);
            h.length && this.inner.splice(e.index, 0, new Wr(e.parser, e.parser.startParse(this.input, Kr(e.mounts, h), h), e.ranges.map((f) => new St(f.from - e.start, f.to - e.start)), e.target, h)), e = e.prev;
          }
          i && !--i.depth && (i = i.prev);
        }
    }
  }
}
function ec(s, t, e) {
  for (let i of s) {
    if (i.from >= e)
      break;
    if (i.to > t)
      return i.from <= t && i.to >= e ? 2 : 1;
  }
  return 0;
}
function zr(s, t, e, i, n, r) {
  if (t < e) {
    let o = s.buffer[t + 1];
    i.push(s.slice(t, e, o)), n.push(o - r);
  }
}
function ic(s) {
  let { node: t } = s, e = 0;
  do
    s.parent(), e++;
  while (!s.tree);
  let i = 0, n = s.tree, r = 0;
  for (; r = n.positions[i] + s.from, !(r <= t.from && r + n.children[i].length >= t.to); i++)
    ;
  let o = n.children[i], l = o.buffer;
  function a(h, f, c, u, d) {
    let p = h;
    for (; l[p + 2] + r <= t.from; )
      p = l[p + 3];
    let g = [], m = [];
    zr(o, h, p, g, m, u);
    let y = l[p + 1], v = l[p + 2], A = y + r == t.from && v + r == t.to && l[p] == t.type.id;
    return g.push(A ? t.toTree() : a(p + 4, l[p + 3], o.set.types[l[p]], y, v - y)), m.push(y - u), zr(o, l[p + 3], f, g, m, u), new X(c, g, m, d);
  }
  n.children[i] = a(0, l.length, mt.none, 0, o.length);
  for (let h = 0; h <= e; h++)
    s.childAfter(t.from);
}
class qr {
  constructor(t, e) {
    this.offset = e, this.done = !1, this.cursor = t.cursor(j.IncludeAnonymous | j.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(t) {
    let { cursor: e } = this, i = t - this.offset;
    for (; !this.done && e.from < i; )
      e.to >= t && e.enter(i, 1, j.IgnoreOverlays | j.ExcludeBuffers) || e.next(!1) || (this.done = !0);
  }
  hasNode(t) {
    if (this.moveTo(t.from), !this.done && this.cursor.from + this.offset == t.from && this.cursor.tree)
      for (let e = this.cursor.tree; ; ) {
        if (e == t.tree)
          return !0;
        if (e.children.length && e.positions[0] == 0 && e.children[0] instanceof X)
          e = e.children[0];
        else
          break;
      }
    return !1;
  }
}
class nc {
  constructor(t) {
    var e;
    if (this.fragments = t, this.curTo = 0, this.fragI = 0, t.length) {
      let i = this.curFrag = t[0];
      this.curTo = (e = i.tree.prop(ns)) !== null && e !== void 0 ? e : i.to, this.inner = new qr(i.tree, -i.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(t) {
    for (; this.curFrag && t.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= t.from && this.curTo >= t.to && this.inner.hasNode(t);
  }
  nextFrag() {
    var t;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let e = this.curFrag = this.fragments[this.fragI];
      this.curTo = (t = e.tree.prop(ns)) !== null && t !== void 0 ? t : e.to, this.inner = new qr(e.tree, -e.offset);
    }
  }
  findMounts(t, e) {
    var i;
    let n = [];
    if (this.inner) {
      this.inner.cursor.moveTo(t, 1);
      for (let r = this.inner.cursor.node; r; r = r.parent) {
        let o = (i = r.tree) === null || i === void 0 ? void 0 : i.prop(R.mounted);
        if (o && o.parser == e)
          for (let l = this.fragI; l < this.fragments.length; l++) {
            let a = this.fragments[l];
            if (a.from >= r.to)
              break;
            a.tree == this.curFrag.tree && n.push({
              frag: a,
              pos: r.from - a.offset,
              mount: o
            });
          }
      }
    }
    return n;
  }
}
function jr(s, t) {
  let e = null, i = t;
  for (let n = 1, r = 0; n < s.length; n++) {
    let o = s[n - 1].to, l = s[n].from;
    for (; r < i.length; r++) {
      let a = i[r];
      if (a.from >= l)
        break;
      a.to <= o || (e || (i = e = t.slice()), a.from < o ? (e[r] = new St(a.from, o), a.to > l && e.splice(r + 1, 0, new St(l, a.to))) : a.to > l ? e[r--] = new St(l, a.to) : e.splice(r--, 1));
    }
  }
  return i;
}
function sc(s, t, e, i) {
  let n = 0, r = 0, o = !1, l = !1, a = -1e9, h = [];
  for (; ; ) {
    let f = n == s.length ? 1e9 : o ? s[n].to : s[n].from, c = r == t.length ? 1e9 : l ? t[r].to : t[r].from;
    if (o != l) {
      let u = Math.max(a, e), d = Math.min(f, c, i);
      u < d && h.push(new St(u, d));
    }
    if (a = Math.min(f, c), a == 1e9)
      break;
    f == a && (o ? (o = !1, n++) : o = !0), c == a && (l ? (l = !1, r++) : l = !0);
  }
  return h;
}
function Kr(s, t) {
  let e = [];
  for (let { pos: i, mount: n, frag: r } of s) {
    let o = i + (n.overlay ? n.overlay[0].from : 0), l = o + n.tree.length, a = Math.max(r.from, o), h = Math.min(r.to, l);
    if (n.overlay) {
      let f = n.overlay.map((u) => new St(u.from + i, u.to + i)), c = sc(t, f, a, h);
      for (let u = 0, d = a; ; u++) {
        let p = u == c.length, g = p ? h : c[u].from;
        if (g > d && e.push(new zt(d, g, n.tree, -o, r.from >= d || r.openStart, r.to <= g || r.openEnd)), p)
          break;
        d = c[u].to;
      }
    } else
      e.push(new zt(a, h, n.tree, -o, r.from >= o || r.openStart, r.to <= l || r.openEnd));
  }
  return e;
}
let rc = 0;
class Lt {
  /**
  @internal
  */
  constructor(t, e, i) {
    this.set = t, this.base = e, this.modified = i, this.id = rc++;
  }
  /**
  Define a new tag. If `parent` is given, the tag is treated as a
  sub-tag of that parent, and
  [highlighters](#highlight.tagHighlighter) that don't mention
  this tag will try to fall back to the parent tag (or grandparent
  tag, etc).
  */
  static define(t) {
    if (t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let e = new Lt([], null, []);
    if (e.set.push(e), t)
      for (let i of t.set)
        e.set.push(i);
    return e;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier() {
    let t = new Ki();
    return (e) => e.modified.indexOf(t) > -1 ? e : Ki.get(e.base || e, e.modified.concat(t).sort((i, n) => i.id - n.id));
  }
}
let oc = 0;
class Ki {
  constructor() {
    this.instances = [], this.id = oc++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let i = e[0].instances.find((l) => l.base == t && lc(e, l.modified));
    if (i)
      return i;
    let n = [], r = new Lt(n, t, e);
    for (let l of e)
      l.instances.push(r);
    let o = ac(e);
    for (let l of t.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(Ki.get(l, a));
    return r;
  }
}
function lc(s, t) {
  return s.length == t.length && s.every((e, i) => e == t[i]);
}
function ac(s) {
  let t = [[]];
  for (let e = 0; e < s.length; e++)
    for (let i = 0, n = t.length; i < n; i++)
      t.push(t[i].concat(s[e]));
  return t.sort((e, i) => i.length - e.length);
}
function hc(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in s) {
    let i = s[e];
    Array.isArray(i) || (i = [i]);
    for (let n of e.split(" "))
      if (n) {
        let r = [], o = 2, l = n;
        for (let c = 0; ; ) {
          if (l == "..." && c > 0 && c + 3 == n.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + n);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), c += u[0].length, c == n.length)
            break;
          let d = n[c++];
          if (c == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(c);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let f = new $i(i, o, a > 0 ? r.slice(0, a) : null);
        t[h] = f.sort(t[h]);
      }
  }
  return Wl.add(t);
}
const Wl = new R();
class $i {
  constructor(t, e, i, n) {
    this.tags = t, this.mode = e, this.context = i, this.next = n;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
$i.empty = new $i([], 2, null);
function zl(s, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let r of s)
    if (!Array.isArray(r.tag))
      e[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        e[o.id] = r.class;
  let { scope: i, all: n = null } = t || {};
  return {
    style: (r) => {
      let o = n;
      for (let l of r)
        for (let a of l.set) {
          let h = e[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function fc(s, t) {
  let e = null;
  for (let i of s) {
    let n = i.style(t);
    n && (e = e ? e + " " + n : n);
  }
  return e;
}
function cc(s, t, e, i = 0, n = s.length) {
  let r = new uc(i, Array.isArray(t) ? t : [t], e);
  r.highlightRange(s.cursor(), i, n, "", r.highlighters), r.flush(n);
}
class uc {
  constructor(t, e, i) {
    this.at = t, this.highlighters = e, this.span = i, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, i, n, r) {
    let { type: o, from: l, to: a } = t;
    if (l >= i || a <= e)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = n, f = dc(t) || $i.empty, c = fc(r, f.tags);
    if (c && (h && (h += " "), h += c, f.mode == 1 && (n += (n ? " " : "") + c)), this.startSpan(Math.max(e, l), h), f.opaque)
      return;
    let u = t.tree && t.tree.prop(R.mounted);
    if (u && u.overlay) {
      let d = t.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)), g = t.firstChild();
      for (let m = 0, y = l; ; m++) {
        let v = m < u.overlay.length ? u.overlay[m] : null, A = v ? v.from + l : a, b = Math.max(e, y), w = Math.min(i, A);
        if (b < w && g)
          for (; t.from < w && (this.highlightRange(t, b, w, n, r), this.startSpan(Math.min(w, t.to), h), !(t.to >= A || !t.nextSibling())); )
            ;
        if (!v || A > i)
          break;
        y = v.to + l, y > e && (this.highlightRange(d.cursor(), Math.max(e, v.from + l), Math.min(i, y), "", p), this.startSpan(Math.min(i, y), h));
      }
      g && t.parent();
    } else if (t.firstChild()) {
      u && (n = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= i)
            break;
          this.highlightRange(t, e, i, n, r), this.startSpan(Math.min(i, t.to), h);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function dc(s) {
  let t = s.type.prop(Wl);
  for (; t && t.context && !s.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const k = Lt.define, wi = k(), Kt = k(), $r = k(Kt), Ur = k(Kt), $t = k(), xi = k($t), mn = k($t), Et = k(), se = k(Et), Bt = k(), Rt = k(), ss = k(), Le = k(ss), vi = k(), C = {
  /**
  A comment.
  */
  comment: wi,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: k(wi),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: k(wi),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: k(wi),
  /**
  Any kind of identifier.
  */
  name: Kt,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: k(Kt),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: $r,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: k($r),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Ur,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: k(Ur),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: k(Kt),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: k(Kt),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: k(Kt),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: k(Kt),
  /**
  A literal value.
  */
  literal: $t,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: xi,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: k(xi),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: k(xi),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: k(xi),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: mn,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: k(mn),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: k(mn),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: k($t),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: k($t),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: k($t),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: k($t),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: k($t),
  /**
  A language keyword.
  */
  keyword: Bt,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: k(Bt),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: k(Bt),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: k(Bt),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: k(Bt),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: k(Bt),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: k(Bt),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: k(Bt),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: k(Bt),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: k(Bt),
  /**
  An operator.
  */
  operator: Rt,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: k(Rt),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: k(Rt),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: k(Rt),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: k(Rt),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: k(Rt),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: k(Rt),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: k(Rt),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: k(Rt),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: k(Rt),
  /**
  Program or markup punctuation.
  */
  punctuation: ss,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: k(ss),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Le,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: k(Le),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: k(Le),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: k(Le),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: k(Le),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Et,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: se,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: k(se),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: k(se),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: k(se),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: k(se),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: k(se),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: k(se),
  /**
  A prose separator (such as a horizontal rule).
  */
  contentSeparator: k(Et),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: k(Et),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: k(Et),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: k(Et),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: k(Et),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: k(Et),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: k(Et),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: k(Et),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: k(),
  /**
  Deleted text.
  */
  deleted: k(),
  /**
  Changed text.
  */
  changed: k(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: k(),
  /**
  Metadata or meta-instruction.
  */
  meta: vi,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: k(vi),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: k(vi),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: k(vi),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Lt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Lt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Lt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Lt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Lt.defineModifier(),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Lt.defineModifier()
};
zl([
  { tag: C.link, class: "tok-link" },
  { tag: C.heading, class: "tok-heading" },
  { tag: C.emphasis, class: "tok-emphasis" },
  { tag: C.strong, class: "tok-strong" },
  { tag: C.keyword, class: "tok-keyword" },
  { tag: C.atom, class: "tok-atom" },
  { tag: C.bool, class: "tok-bool" },
  { tag: C.url, class: "tok-url" },
  { tag: C.labelName, class: "tok-labelName" },
  { tag: C.inserted, class: "tok-inserted" },
  { tag: C.deleted, class: "tok-deleted" },
  { tag: C.literal, class: "tok-literal" },
  { tag: C.string, class: "tok-string" },
  { tag: C.number, class: "tok-number" },
  { tag: [C.regexp, C.escape, C.special(C.string)], class: "tok-string2" },
  { tag: C.variableName, class: "tok-variableName" },
  { tag: C.local(C.variableName), class: "tok-variableName tok-local" },
  { tag: C.definition(C.variableName), class: "tok-variableName tok-definition" },
  { tag: C.special(C.variableName), class: "tok-variableName2" },
  { tag: C.definition(C.propertyName), class: "tok-propertyName tok-definition" },
  { tag: C.typeName, class: "tok-typeName" },
  { tag: C.namespace, class: "tok-namespace" },
  { tag: C.className, class: "tok-className" },
  { tag: C.macroName, class: "tok-macroName" },
  { tag: C.propertyName, class: "tok-propertyName" },
  { tag: C.operator, class: "tok-operator" },
  { tag: C.comment, class: "tok-comment" },
  { tag: C.meta, class: "tok-meta" },
  { tag: C.invalid, class: "tok-invalid" },
  { tag: C.punctuation, class: "tok-punctuation" }
]);
var yn;
const we = /* @__PURE__ */ new R();
function pc(s) {
  return O.define({
    combine: s ? (t) => t.concat(s) : void 0
  });
}
const gc = /* @__PURE__ */ new R();
class Dt {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(t, e, i = [], n = "") {
    this.data = t, this.name = n, I.prototype.hasOwnProperty("tree") || Object.defineProperty(I.prototype, "tree", { get() {
      return yt(this);
    } }), this.parser = e, this.extension = [
      ee.of(this),
      I.languageData.of((r, o, l) => {
        let a = Gr(r, o, l), h = a.type.prop(we);
        if (!h)
          return [];
        let f = r.facet(h), c = a.type.prop(gc);
        if (c) {
          let u = a.resolve(o - a.from, l);
          for (let d of c)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(f);
            }
        }
        return f;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(t, e, i = -1) {
    return Gr(t, e, i).type.prop(we) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(t) {
    let e = t.facet(ee);
    if ((e == null ? void 0 : e.data) == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let i = [], n = (r, o) => {
      if (r.prop(we) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(R.mounted);
      if (l) {
        if (l.tree.prop(we) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof X && n(h, r.positions[a] + o);
      }
    };
    return n(yt(t), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Dt.setState = /* @__PURE__ */ E.define();
function Gr(s, t, e) {
  let i = s.facet(ee), n = yt(s).topNode;
  if (!i || i.allowsNesting)
    for (let r = n; r; r = r.enter(t, e, j.ExcludeBuffers))
      r.type.isTop && (n = r);
  return n;
}
class rs extends Dt {
  constructor(t, e, i) {
    super(t, e, [], i), this.parser = e;
  }
  /**
  Define a language from a parser.
  */
  static define(t) {
    let e = pc(t.languageData);
    return new rs(e, t.parser.configure({
      props: [we.add((i) => i.isTop ? e : void 0)]
    }), t.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(t, e) {
    return new rs(this.data, this.parser.configure(t), e || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function yt(s) {
  let t = s.field(Dt.state, !1);
  return t ? t.tree : X.empty;
}
class mc {
  /**
  Create an input object for the given document.
  */
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(t, e) {
    let i = this.cursorPos - this.string.length;
    return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i);
  }
}
let Ie = null;
class Ui {
  constructor(t, e, i = [], n, r, o, l, a) {
    this.parser = t, this.state = e, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Ui(t, e, [], X.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new mc(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != X.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof t == "number") {
        let n = Date.now() + t;
        t = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(zt.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (t())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(zt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(t) {
    let e = Ie;
    Ie = this;
    try {
      return t();
    } finally {
      Ie = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = _r(t, e.from, e.to);
    return t;
  }
  /**
  @internal
  */
  changes(t, e) {
    let { fragments: i, tree: n, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !t.empty) {
      let a = [];
      if (t.iterChangedRanges((h, f, c, u) => a.push({ fromA: h, toA: f, fromB: c, toB: u })), i = zt.applyChanges(i, a), n = X.empty, r = 0, o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let f = t.mapPos(h.from, 1), c = t.mapPos(h.to, -1);
          f < c && l.push({ from: f, to: c });
        }
      }
    }
    return new Ui(this.parser, e, i, n, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return !1;
    this.viewport = t;
    let e = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: r } = this.skipped[i];
      n < t.to && r > t.from && (this.fragments = _r(this.fragments, n, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= e ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(t) {
    return new class extends Xf {
      createParse(e, i, n) {
        let r = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Ie;
            if (a) {
              for (let h of n)
                a.tempSkipped.push(h);
              t && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, t]) : t);
            }
            return this.parsedPos = o, new X(mt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Ie;
  }
}
function _r(s, t, e) {
  return zt.applyChanges(s, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class De {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, i) || e.takeTree(), new De(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), i = Ui.create(t.facet(ee).parser, t, { from: 0, to: e });
    return i.work(20, e) || i.takeTree(), new De(i);
  }
}
Dt.state = /* @__PURE__ */ bt.define({
  create: De.init,
  update(s, t) {
    for (let e of t.effects)
      if (e.is(Dt.setState))
        return e.value;
    return t.startState.facet(ee) != t.state.facet(ee) ? De.init(t.state) : s.apply(t);
  }
});
let ql = (s) => {
  let t = setTimeout(
    () => s(),
    500
    /* MaxPause */
  );
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (ql = (s) => {
  let t = -1, e = setTimeout(
    () => {
      t = requestIdleCallback(s, {
        timeout: 400
        /* MinPause */
      });
    },
    100
    /* MinPause */
  );
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const bn = typeof navigator < "u" && (!((yn = navigator.scheduling) === null || yn === void 0) && yn.isInputPending) ? () => navigator.scheduling.isInputPending() : null, yc = /* @__PURE__ */ Z.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(Dt.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), t.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(Dt.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = ql(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, r = i.field(Dt.state);
    if (r.tree == r.context.tree && r.context.isDone(
      n + 1e5
      /* MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, t && !bn ? Math.max(25, t.timeRemaining() - 5) : 1e9), l = r.context.treeLen < n && i.doc.length > n + 1e3, a = r.context.work(() => bn && bn() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Dt.setState.of(new De(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Ct(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), ee = /* @__PURE__ */ O.define({
  combine(s) {
    return s.length ? s[0] : null;
  },
  enables: (s) => [
    Dt.state,
    yc,
    T.contentAttributes.compute([s], (t) => {
      let e = t.facet(s);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
});
class hd {
  /**
  Create a language support object.
  */
  constructor(t, e = []) {
    this.language = t, this.support = e, this.extension = [t, e];
  }
}
const bc = /* @__PURE__ */ O.define(), As = /* @__PURE__ */ O.define({
  combine: (s) => {
    if (!s.length)
      return "  ";
    let t = s[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
    return t;
  }
});
function wc(s) {
  let t = s.facet(As);
  return t.charCodeAt(0) == 9 ? s.tabSize * t.length : t.length;
}
function xc(s, t) {
  let e = "", i = s.tabSize, n = s.facet(As)[0];
  if (n == "	") {
    for (; t >= i; )
      e += "	", t -= i;
    n = " ";
  }
  for (let r = 0; r < t; r++)
    e += n;
  return e;
}
function vc(s, t) {
  s instanceof I && (s = new jl(s));
  for (let i of s.state.facet(bc)) {
    let n = i(s, t);
    if (n !== void 0)
      return n;
  }
  let e = yt(s.state);
  return e ? Sc(s, e, t) : null;
}
class jl {
  /**
  Create an indent context.
  */
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = wc(t);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(t, e = 1) {
    let i = this.state.doc.lineAt(t), { simulateBreak: n, simulateDoubleBreak: r } = this.options;
    return n != null && n >= i.from && n <= i.to ? r && n == t ? { text: "", from: t } : (e < 0 ? n < t : n <= t) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(t, e);
    return i.slice(t - n, Math.min(i.length, t + 100 - n));
  }
  /**
  Find the column for the given position.
  */
  column(t, e = 1) {
    let { text: i, from: n } = this.lineAt(t, e), r = this.countColumn(i, t - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(t, e = t.length) {
    return ds(t, this.state.tabSize, e);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(t, e = 1) {
    let { text: i, from: n } = this.lineAt(t, e), r = this.options.overrideIndentation;
    if (r) {
      let o = r(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const kc = /* @__PURE__ */ new R();
function Sc(s, t, e) {
  return Kl(t.resolveInner(e).enterUnfinishedNodesBefore(e), e, s);
}
function Cc(s) {
  return s.pos == s.options.simulateBreak && s.options.simulateDoubleBreak;
}
function Ac(s) {
  let t = s.type.prop(kc);
  if (t)
    return t;
  let e = s.firstChild, i;
  if (e && (i = e.type.prop(R.closedBy))) {
    let n = s.lastChild, r = n && i.indexOf(n.name) > -1;
    return (o) => $l(o, !0, 1, void 0, r && !Cc(o) ? n.from : void 0);
  }
  return s.parent == null ? Mc : null;
}
function Kl(s, t, e) {
  for (; s; s = s.parent) {
    let i = Ac(s);
    if (i)
      return i(Ms.create(e, t, s));
  }
  return null;
}
function Mc() {
  return 0;
}
class Ms extends jl {
  constructor(t, e, i) {
    super(t.state, t.options), this.base = t, this.pos = e, this.node = i;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Ms(t, e, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let i = t.resolve(e.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Oc(i, t))
        break;
      e = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(e.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    let t = this.node.parent;
    return t ? Kl(t, this.pos, this.base) : 0;
  }
}
function Oc(s, t) {
  for (let e = t; e; e = e.parent)
    if (s == e)
      return !0;
  return !1;
}
function Dc(s) {
  let t = s.node, e = t.childAfter(t.from), i = t.lastChild;
  if (!e)
    return null;
  let n = s.options.simulateBreak, r = s.state.doc.lineAt(e.from), o = n == null || n <= r.from ? r.to : Math.min(r.to, n);
  for (let l = e.to; ; ) {
    let a = t.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped)
      return a.from < o ? e : null;
    l = a.to;
  }
}
function fd({ closing: s, align: t = !0, units: e = 1 }) {
  return (i) => $l(i, t, e, s);
}
function $l(s, t, e, i, n) {
  let r = s.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || n == s.pos + o, a = t ? Dc(s) : null;
  return a ? l ? s.column(a.from) : s.column(a.to) : s.baseIndent + (l ? 0 : s.unit * e);
}
const cd = (s) => s.baseIndent;
function ud({ except: s, units: t = 1 } = {}) {
  return (e) => {
    let i = s && s.test(e.textAfter);
    return e.baseIndent + (i ? 0 : t * e.unit);
  };
}
const Tc = 200;
function dd() {
  return I.transactionFilter.of((s) => {
    if (!s.docChanged || !s.isUserEvent("input.type") && !s.isUserEvent("input.complete"))
      return s;
    let t = s.startState.languageDataAt("indentOnInput", s.startState.selection.main.head);
    if (!t.length)
      return s;
    let e = s.newDoc, { head: i } = s.newSelection.main, n = e.lineAt(i);
    if (i > n.from + Tc)
      return s;
    let r = e.sliceString(n.from, i);
    if (!t.some((h) => h.test(r)))
      return s;
    let { state: o } = s, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let f = o.doc.lineAt(h);
      if (f.from == l)
        continue;
      l = f.from;
      let c = vc(o, f.from);
      if (c == null)
        continue;
      let u = /^\s*/.exec(f.text)[0], d = xc(o, c);
      u != d && a.push({ from: f.from, to: f.from + u.length, insert: d });
    }
    return a.length ? [s, { changes: a, sequential: !0 }] : s;
  });
}
const Pc = /* @__PURE__ */ O.define(), Bc = /* @__PURE__ */ new R();
function pd(s) {
  let t = s.firstChild, e = s.lastChild;
  return t && t.to < e.from ? { from: t.to, to: e.type.isError ? s.to : e.from } : null;
}
function Rc(s, t, e) {
  let i = yt(s);
  if (i.length < e)
    return null;
  let n = i.resolveInner(e, 1), r = null;
  for (let o = n; o; o = o.parent) {
    if (o.to <= e || o.from > e)
      continue;
    if (r && o.from < t)
      break;
    let l = o.type.prop(Bc);
    if (l && (o.to < i.length - 50 || i.length == s.doc.length || !Ec(o))) {
      let a = l(o, s);
      a && a.from <= e && a.from >= t && a.to > e && (r = a);
    }
  }
  return r;
}
function Ec(s) {
  let t = s.lastChild;
  return t && t.to == s.to && t.type.isError;
}
function Gi(s, t, e) {
  for (let i of s.facet(Pc)) {
    let n = i(s, t, e);
    if (n)
      return n;
  }
  return Rc(s, t, e);
}
function Ul(s, t) {
  let e = t.mapPos(s.from, 1), i = t.mapPos(s.to, -1);
  return e >= i ? void 0 : { from: e, to: i };
}
const tn = /* @__PURE__ */ E.define({ map: Ul }), ni = /* @__PURE__ */ E.define({ map: Ul });
function Gl(s) {
  let t = [];
  for (let { head: e } of s.state.selection.ranges)
    t.some((i) => i.from <= e && i.to >= e) || t.push(s.lineBlockAt(e));
  return t;
}
const ue = /* @__PURE__ */ bt.define({
  create() {
    return L.none;
  },
  update(s, t) {
    s = s.map(t.changes);
    for (let e of t.effects)
      e.is(tn) && !Lc(s, e.value.from, e.value.to) ? s = s.update({ add: [Jr.range(e.value.from, e.value.to)] }) : e.is(ni) && (s = s.update({
        filter: (i, n) => e.value.from != i || e.value.to != n,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
    if (t.selection) {
      let e = !1, { head: i } = t.selection.main;
      s.between(i, i, (n, r) => {
        n < i && r > i && (e = !0);
      }), e && (s = s.update({
        filterFrom: i,
        filterTo: i,
        filter: (n, r) => r <= i || n >= i
      }));
    }
    return s;
  },
  provide: (s) => T.decorations.from(s),
  toJSON(s, t) {
    let e = [];
    return s.between(0, t.doc.length, (i, n) => {
      e.push(i, n);
    }), e;
  },
  fromJSON(s) {
    if (!Array.isArray(s) || s.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let t = [];
    for (let e = 0; e < s.length; ) {
      let i = s[e++], n = s[e++];
      if (typeof i != "number" || typeof n != "number")
        throw new RangeError("Invalid JSON for fold state");
      t.push(Jr.range(i, n));
    }
    return L.set(t, !0);
  }
});
function _i(s, t, e) {
  var i;
  let n = null;
  return (i = s.field(ue, !1)) === null || i === void 0 || i.between(t, e, (r, o) => {
    (!n || n.from > r) && (n = { from: r, to: o });
  }), n;
}
function Lc(s, t, e) {
  let i = !1;
  return s.between(t, t, (n, r) => {
    n == t && r == e && (i = !0);
  }), i;
}
function _l(s, t) {
  return s.field(ue, !1) ? t : t.concat(E.appendConfig.of(Yl()));
}
const Ic = (s) => {
  for (let t of Gl(s)) {
    let e = Gi(s.state, t.from, t.to);
    if (e)
      return s.dispatch({ effects: _l(s.state, [tn.of(e), Jl(s, e)]) }), !0;
  }
  return !1;
}, Nc = (s) => {
  if (!s.state.field(ue, !1))
    return !1;
  let t = [];
  for (let e of Gl(s)) {
    let i = _i(s.state, e.from, e.to);
    i && t.push(ni.of(i), Jl(s, i, !1));
  }
  return t.length && s.dispatch({ effects: t }), t.length > 0;
};
function Jl(s, t, e = !0) {
  let i = s.state.doc.lineAt(t.from).number, n = s.state.doc.lineAt(t.to).number;
  return T.announce.of(`${s.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${i} ${s.state.phrase("to")} ${n}.`);
}
const Hc = (s) => {
  let { state: t } = s, e = [];
  for (let i = 0; i < t.doc.length; ) {
    let n = s.lineBlockAt(i), r = Gi(t, n.from, n.to);
    r && e.push(tn.of(r)), i = (r ? s.lineBlockAt(r.to) : n).to + 1;
  }
  return e.length && s.dispatch({ effects: _l(s.state, e) }), !!e.length;
}, Fc = (s) => {
  let t = s.state.field(ue, !1);
  if (!t || !t.size)
    return !1;
  let e = [];
  return t.between(0, s.state.doc.length, (i, n) => {
    e.push(ni.of({ from: i, to: n }));
  }), s.dispatch({ effects: e }), !0;
}, gd = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Ic },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Nc },
  { key: "Ctrl-Alt-[", run: Hc },
  { key: "Ctrl-Alt-]", run: Fc }
], Vc = {
  placeholderDOM: null,
  placeholderText: "…"
}, Wc = /* @__PURE__ */ O.define({
  combine(s) {
    return Pe(s, Vc);
  }
});
function Yl(s) {
  return [ue, qc];
}
const Jr = /* @__PURE__ */ L.replace({ widget: /* @__PURE__ */ new class extends ie {
  toDOM(s) {
    let { state: t } = s, e = t.facet(Wc), i = (r) => {
      let o = s.lineBlockAt(s.posAtDOM(r.target)), l = _i(s.state, o.from, o.to);
      l && s.dispatch({ effects: ni.of(l) }), r.preventDefault();
    };
    if (e.placeholderDOM)
      return e.placeholderDOM(s, i);
    let n = document.createElement("span");
    return n.textContent = e.placeholderText, n.setAttribute("aria-label", t.phrase("folded code")), n.title = t.phrase("unfold"), n.className = "cm-foldPlaceholder", n.onclick = i, n;
  }
}() }), zc = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class wn extends jt {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function md(s = {}) {
  let t = Object.assign(Object.assign({}, zc), s), e = new wn(t, !0), i = new wn(t, !1), n = Z.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(ee) != o.state.facet(ee) || o.startState.field(ue, !1) != o.state.field(ue, !1) || yt(o.startState) != yt(o.state) || t.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new fe();
      for (let a of o.viewportLineBlocks) {
        let h = _i(o.state, a.from, a.to) ? i : Gi(o.state, a.from, a.to) ? e : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = t;
  return [
    n,
    Hf({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(n)) === null || l === void 0 ? void 0 : l.markers) || H.empty;
      },
      initialSpacer() {
        return new wn(t, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
        if (r.click && r.click(o, l, a))
          return !0;
        let h = _i(o.state, l.from, l.to);
        if (h)
          return o.dispatch({ effects: ni.of(h) }), !0;
        let f = Gi(o.state, l.from, l.to);
        return f ? (o.dispatch({ effects: tn.of(f) }), !0) : !1;
      } })
    }),
    Yl()
  ];
}
const qc = /* @__PURE__ */ T.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class en {
  constructor(t, e) {
    this.specs = t;
    let i;
    function n(l) {
      let a = Xt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof e.all == "string" ? e.all : e.all ? n(e.all) : void 0, o = e.scope;
    this.scope = o instanceof Dt ? (l) => l.prop(we) == o.data : o ? (l) => l == o : void 0, this.style = zl(t.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new Xt(i) : null, this.themeType = e.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(t, e) {
    return new en(t, e || {});
  }
}
const os = /* @__PURE__ */ O.define(), Xl = /* @__PURE__ */ O.define({
  combine(s) {
    return s.length ? [s[0]] : null;
  }
});
function xn(s) {
  let t = s.facet(os);
  return t.length ? t : s.facet(Xl);
}
function yd(s, t) {
  let e = [Kc], i;
  return s instanceof en && (s.module && e.push(T.styleModule.of(s.module)), i = s.themeType), t != null && t.fallback ? e.push(Xl.of(s)) : i ? e.push(os.computeN([T.darkTheme], (n) => n.facet(T.darkTheme) == (i == "dark") ? [s] : [])) : e.push(os.of(s)), e;
}
class jc {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = yt(t.state), this.decorations = this.buildDeco(t, xn(t.state));
  }
  update(t) {
    let e = yt(t.state), i = xn(t.state), n = i != xn(t.startState);
    e.length < t.view.viewport.to && !n && e.type == this.tree.type ? this.decorations = this.decorations.map(t.changes) : (e != this.tree || t.viewportChanged || n) && (this.tree = e, this.decorations = this.buildDeco(t.view, i));
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return L.none;
    let i = new fe();
    for (let { from: n, to: r } of t.visibleRanges)
      cc(this.tree, e, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = L.mark({ class: a })));
      }, n, r);
    return i.finish();
  }
}
const Kc = /* @__PURE__ */ Te.high(/* @__PURE__ */ Z.fromClass(jc, {
  decorations: (s) => s.decorations
})), bd = /* @__PURE__ */ en.define([
  {
    tag: C.meta,
    color: "#404740"
  },
  {
    tag: C.link,
    textDecoration: "underline"
  },
  {
    tag: C.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: C.emphasis,
    fontStyle: "italic"
  },
  {
    tag: C.strong,
    fontWeight: "bold"
  },
  {
    tag: C.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: C.keyword,
    color: "#708"
  },
  {
    tag: [C.atom, C.bool, C.url, C.contentSeparator, C.labelName],
    color: "#219"
  },
  {
    tag: [C.literal, C.inserted],
    color: "#164"
  },
  {
    tag: [C.string, C.deleted],
    color: "#a11"
  },
  {
    tag: [C.regexp, C.escape, /* @__PURE__ */ C.special(C.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ C.definition(C.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ C.local(C.variableName),
    color: "#30a"
  },
  {
    tag: [C.typeName, C.namespace],
    color: "#085"
  },
  {
    tag: C.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ C.special(C.variableName), C.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ C.definition(C.propertyName),
    color: "#00c"
  },
  {
    tag: C.comment,
    color: "#940"
  },
  {
    tag: C.invalid,
    color: "#f00"
  }
]), $c = /* @__PURE__ */ T.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Ql = 1e4, Zl = "()[]{}", ta = /* @__PURE__ */ O.define({
  combine(s) {
    return Pe(s, {
      afterCursor: !0,
      brackets: Zl,
      maxScanDistance: Ql,
      renderMatch: _c
    });
  }
}), Uc = /* @__PURE__ */ L.mark({ class: "cm-matchingBracket" }), Gc = /* @__PURE__ */ L.mark({ class: "cm-nonmatchingBracket" });
function _c(s) {
  let t = [], e = s.matched ? Uc : Gc;
  return t.push(e.range(s.start.from, s.start.to)), s.end && t.push(e.range(s.end.from, s.end.to)), t;
}
const Jc = /* @__PURE__ */ bt.define({
  create() {
    return L.none;
  },
  update(s, t) {
    if (!t.docChanged && !t.selection)
      return s;
    let e = [], i = t.state.facet(ta);
    for (let n of t.state.selection.ranges) {
      if (!n.empty)
        continue;
      let r = ki(t.state, n.head, -1, i) || n.head > 0 && ki(t.state, n.head - 1, 1, i) || i.afterCursor && (ki(t.state, n.head, 1, i) || n.head < t.state.doc.length && ki(t.state, n.head + 1, -1, i));
      r && (e = e.concat(i.renderMatch(r, t.state)));
    }
    return L.set(e, !0);
  },
  provide: (s) => T.decorations.from(s)
}), Yc = [
  Jc,
  $c
];
function wd(s = {}) {
  return [ta.of(s), Yc];
}
const Xc = /* @__PURE__ */ new R();
function ls(s, t, e) {
  let i = s.prop(t < 0 ? R.openedBy : R.closedBy);
  if (i)
    return i;
  if (s.name.length == 1) {
    let n = e.indexOf(s.name);
    if (n > -1 && n % 2 == (t < 0 ? 1 : 0))
      return [e[n + t]];
  }
  return null;
}
function as(s) {
  let t = s.type.prop(Xc);
  return t ? t(s.node) : s;
}
function ki(s, t, e, i = {}) {
  let n = i.maxScanDistance || Ql, r = i.brackets || Zl, o = yt(s), l = o.resolveInner(t, e);
  for (let a = l; a; a = a.parent) {
    let h = ls(a.type, e, r);
    if (h && a.from < a.to) {
      let f = as(a);
      if (f && (e > 0 ? t >= f.from && t < f.to : t > f.from && t <= f.to))
        return Qc(s, t, e, a, f, h, r);
    }
  }
  return Zc(s, t, e, o, l.type, n, r);
}
function Qc(s, t, e, i, n, r, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, h = 0, f = l == null ? void 0 : l.cursor();
  if (f && (e < 0 ? f.childBefore(i.from) : f.childAfter(i.to)))
    do
      if (e < 0 ? f.to <= i.from : f.from >= i.to) {
        if (h == 0 && r.indexOf(f.type.name) > -1 && f.from < f.to) {
          let c = as(f);
          return { start: a, end: c ? { from: c.from, to: c.to } : void 0, matched: !0 };
        } else if (ls(f.type, e, o))
          h++;
        else if (ls(f.type, -e, o)) {
          if (h == 0) {
            let c = as(f);
            return {
              start: a,
              end: c && c.from < c.to ? { from: c.from, to: c.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (e < 0 ? f.prevSibling() : f.nextSibling());
  return { start: a, matched: !1 };
}
function Zc(s, t, e, i, n, r, o) {
  let l = e < 0 ? s.sliceDoc(t - 1, t) : s.sliceDoc(t, t + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != e > 0)
    return null;
  let h = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, f = s.doc.iterRange(t, e > 0 ? s.doc.length : 0), c = 0;
  for (let u = 0; !f.next().done && u <= r; ) {
    let d = f.value;
    e < 0 && (u += d.length);
    let p = t + u * e;
    for (let g = e > 0 ? 0 : d.length - 1, m = e > 0 ? d.length : -1; g != m; g += e) {
      let y = o.indexOf(d[g]);
      if (!(y < 0 || i.resolveInner(p + g, 1).type != n))
        if (y % 2 == 0 == e > 0)
          c++;
        else {
          if (c == 1)
            return { start: h, end: { from: p + g, to: p + g + 1 }, matched: y >> 1 == a >> 1 };
          c--;
        }
    }
    e > 0 && (u += d.length);
  }
  return f.done ? { start: h, matched: !1 } : null;
}
const tu = /* @__PURE__ */ Object.create(null), Yr = [mt.none], Xr = [], eu = /* @__PURE__ */ Object.create(null);
for (let [s, t] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  eu[s] = /* @__PURE__ */ iu(tu, t);
function vn(s, t) {
  Xr.indexOf(s) > -1 || (Xr.push(s), console.warn(t));
}
function iu(s, t) {
  let e = null;
  for (let r of t.split(".")) {
    let o = s[r] || C[r];
    o ? typeof o == "function" ? e ? e = o(e) : vn(r, `Modifier ${r} used at start of tag`) : e ? vn(r, `Tag ${r} used as modifier`) : e = o : vn(r, `Unknown highlighting tag ${r}`);
  }
  if (!e)
    return 0;
  let i = t.replace(/ /g, "_"), n = mt.define({
    id: Yr.length,
    name: i,
    props: [hc({ [i]: e })]
  });
  return Yr.push(n), n.id;
}
class ea {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(t, e, i) {
    this.state = t, this.pos = e, this.explicit = i, this.abortListeners = [];
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(t) {
    let e = yt(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; )
      e = e.parent;
    return e ? {
      from: e.from,
      to: this.pos,
      text: this.state.sliceDoc(e.from, this.pos),
      type: e.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), n = e.text.slice(i - e.from, this.pos - e.from), r = n.search(ia(t, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: n.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  */
  addEventListener(t, e) {
    t == "abort" && this.abortListeners && this.abortListeners.push(e);
  }
}
function Qr(s) {
  let t = Object.keys(s).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function nu(s) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of s) {
    t[n[0]] = !0;
    for (let r = 1; r < n.length; r++)
      e[n[r]] = !0;
  }
  let i = Qr(t) + Qr(e) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function su(s) {
  let t = s.map((n) => typeof n == "string" ? { label: n } : n), [e, i] = t.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : nu(t);
  return (n) => {
    let r = n.matchBefore(i);
    return r || n.explicit ? { from: r ? r.from : n.pos, options: t, validFor: e } : null;
  };
}
function xd(s, t) {
  return (e) => {
    for (let i = yt(e.state).resolveInner(e.pos, -1); i; i = i.parent) {
      if (s.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return t(e);
  };
}
class Zr {
  constructor(t, e, i, n) {
    this.completion = t, this.source = e, this.match = i, this.score = n;
  }
}
function Yt(s) {
  return s.selection.main.from;
}
function ia(s, t) {
  var e;
  let { source: i } = s, n = t && i[0] != "^", r = i[i.length - 1] != "$";
  return !n && !r ? s : new RegExp(`${n ? "^" : ""}(?:${i})${r ? "$" : ""}`, (e = s.flags) !== null && e !== void 0 ? e : s.ignoreCase ? "i" : "");
}
const na = /* @__PURE__ */ de.define();
function ru(s, t, e, i) {
  let { main: n } = s.selection, r = e - n.from, o = i - n.from;
  return Object.assign(Object.assign({}, s.changeByRange((l) => l != n && e != i && s.sliceDoc(l.from + r, l.from + o) != s.sliceDoc(e, i) ? { range: l } : {
    changes: { from: l.from + r, to: i == n.from ? l.to : l.from + o, insert: t },
    range: S.cursor(l.from + r + t.length)
  })), { userEvent: "input.complete" });
}
const to = /* @__PURE__ */ new WeakMap();
function ou(s) {
  if (!Array.isArray(s))
    return s;
  let t = to.get(s);
  return t || to.set(s, t = su(s)), t;
}
const Os = /* @__PURE__ */ E.define(), Xe = /* @__PURE__ */ E.define();
class lu {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let i = lt(t, e), n = Ot(i);
      this.chars.push(i);
      let r = t.slice(e, e + n), o = r.toUpperCase();
      this.folded.push(lt(o == r ? r.toLowerCase() : o, 0)), e += n;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, !0;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(t) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (t.length < this.pattern.length)
      return !1;
    let { chars: e, folded: i, any: n, precise: r, byWord: o } = this;
    if (e.length == 1) {
      let v = lt(t, 0), A = Ot(v), b = A == t.length ? 0 : -100;
      if (v != e[0]) if (v == i[0])
        b += -200;
      else
        return !1;
      return this.ret(b, [0, A]);
    }
    let l = t.indexOf(this.pattern);
    if (l == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = e.length, h = 0;
    if (l < 0) {
      for (let v = 0, A = Math.min(t.length, 200); v < A && h < a; ) {
        let b = lt(t, v);
        (b == e[h] || b == i[h]) && (n[h++] = v), v += Ot(b);
      }
      if (h < a)
        return !1;
    }
    let f = 0, c = 0, u = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(t), y = !0;
    for (let v = 0, A = Math.min(t.length, 200), b = 0; v < A && c < a; ) {
      let w = lt(t, v);
      l < 0 && (f < a && w == e[f] && (r[f++] = v), d < a && (w == e[d] || w == i[d] ? (d == 0 && (p = v), g = v + 1, d++) : d = 0));
      let x, D = w < 255 ? w >= 48 && w <= 57 || w >= 97 && w <= 122 ? 2 : w >= 65 && w <= 90 ? 1 : 0 : (x = go(w)) != x.toLowerCase() ? 1 : x != x.toUpperCase() ? 2 : 0;
      (!v || D == 1 && m || b == 0 && D != 0) && (e[c] == w || i[c] == w && (u = !0) ? o[c++] = v : o.length && (y = !1)), b = D, v += Ot(w);
    }
    return c == a && o[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), o, t) : d == a && p == 0 ? this.ret(-200 - t.length + (g == t.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - t.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - t.length, [p, g]) : c == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, t) : e.length == 2 ? !1 : this.result((n[0] ? -700 : 0) + -200 + -1100, n, t);
  }
  result(t, e, i) {
    let n = [], r = 0;
    for (let o of e) {
      let l = o + (this.astral ? Ot(lt(i, o)) : 1);
      r && n[r - 1] == o ? n[r - 1] = l : (n[r++] = o, n[r++] = l);
    }
    return this.ret(t - i.length, n);
  }
}
const gt = /* @__PURE__ */ O.define({
  combine(s) {
    return Pe(s, {
      activateOnTyping: !0,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: au,
      compareCompletions: (t, e) => t.label.localeCompare(e.label),
      interactionDelay: 75
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => (i) => eo(t(i), e(i)),
      optionClass: (t, e) => (i) => eo(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e)
    });
  }
});
function eo(s, t) {
  return s ? t ? s + " " + t : s : t;
}
function au(s, t, e, i, n) {
  let r = s.textDirection == $.RTL, o = r, l = !1, a = "top", h, f, c = t.left - n.left, u = n.right - t.right, d = i.right - i.left, p = i.bottom - i.top;
  if (o && c < Math.min(d, u) ? o = !1 : !o && u < Math.min(d, c) && (o = !0), d <= (o ? c : u))
    h = Math.max(n.top, Math.min(e.top, n.bottom - p)) - t.top, f = Math.min(400, o ? c : u);
  else {
    l = !0, f = Math.min(
      400,
      (r ? t.right : n.right - t.left) - 30
      /* Margin */
    );
    let g = n.bottom - t.bottom;
    g >= p || g > t.top ? h = e.bottom - t.top : (a = "bottom", h = t.bottom - e.top);
  }
  return {
    style: `${a}: ${h}px; max-width: ${f}px`,
    class: "cm-completionInfo-" + (l ? r ? "left-narrow" : "right-narrow" : o ? "left" : "right")
  };
}
function hu(s) {
  let t = s.addToOptions.slice();
  return s.icons && t.push({
    render(e) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((n) => "cm-completionIcon-" + n)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), t.push({
    render(e, i, n) {
      let r = document.createElement("span");
      r.className = "cm-completionLabel";
      let o = e.displayLabel || e.label, l = 0;
      for (let a = 0; a < n.length; ) {
        let h = n[a++], f = n[a++];
        h > l && r.appendChild(document.createTextNode(o.slice(l, h)));
        let c = r.appendChild(document.createElement("span"));
        c.appendChild(document.createTextNode(o.slice(h, f))), c.className = "cm-completionMatchedText", l = f;
      }
      return l < o.length && r.appendChild(document.createTextNode(o.slice(l))), r;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = e.detail, i;
    },
    position: 80
  }), t.sort((e, i) => e.position - i.position).map((e) => e.render);
}
function io(s, t, e) {
  if (s <= e)
    return { from: 0, to: s };
  if (t < 0 && (t = 0), t <= s >> 1) {
    let n = Math.floor(t / e);
    return { from: n * e, to: (n + 1) * e };
  }
  let i = Math.floor((s - t) / e);
  return { from: s - (i + 1) * e, to: s - i * e };
}
class fu {
  constructor(t, e, i) {
    this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = t.state.field(e), { options: r, selected: o } = n.open, l = t.state.facet(gt);
    this.optionContent = hu(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = io(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (a) => {
      for (let h = a.target, f; h && h != this.dom; h = h.parentNode)
        if (h.nodeName == "LI" && (f = /-(\d+)$/.exec(h.id)) && +f[1] < r.length) {
          this.applyCompletion(t, r[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = t.state.field(this.stateField, !1);
      h && h.tooltip && t.state.facet(gt).closeOnBlur && a.relatedTarget != t.contentDOM && t.dispatch({ effects: Xe.of(null) });
    }), this.list = this.dom.appendChild(this.createListBox(r, n.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  mount() {
    this.updateSel();
  }
  update(t) {
    var e, i, n;
    let r = t.state.field(this.stateField), o = t.startState.field(this.stateField);
    this.updateTooltipClass(t.state), r != o && (this.updateSel(), ((e = r.open) === null || e === void 0 ? void 0 : e.disabled) != ((i = o.open) === null || i === void 0 ? void 0 : i.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(!((n = r.open) === null || n === void 0) && n.disabled)));
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of e.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    if ((e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = io(e.options.length, e.selected, this.view.state.facet(gt).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e.options, t.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    })), this.updateSelectedOption(e.selected)) {
      this.destroyInfo();
      let { completion: i } = e.options[e.selected], { info: n } = i;
      if (!n)
        return;
      let r = typeof n == "string" ? document.createTextNode(n) : n(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == t && this.addInfoPane(o, i);
      }).catch((o) => Ct(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", t.nodeType != null)
      i.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: n, destroy: r } = t;
      i.appendChild(n), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++)
      i.nodeName != "LI" || !i.id ? n-- : n == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return e && uu(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), n = t.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return n.top > Math.min(r.bottom, e.bottom) - 10 || n.bottom < Math.max(r.top, e.top) + 10 ? null : this.view.state.facet(gt).positionInfo(this.view, e, n, i, r);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, i) {
    const n = document.createElement("ul");
    n.id = e, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = t[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof h != "string" && h.header)
            n.appendChild(h.header(h));
          else {
            let d = n.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const f = n.appendChild(document.createElement("li"));
      f.id = e + "-" + o, f.setAttribute("role", "option");
      let c = this.optionClass(l);
      c && (f.className = c);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, a);
        d && f.appendChild(d);
      }
    }
    return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < t.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function cu(s, t) {
  return (e) => new fu(e, s, t);
}
function uu(s, t) {
  let e = s.getBoundingClientRect(), i = t.getBoundingClientRect();
  i.top < e.top ? s.scrollTop -= e.top - i.top : i.bottom > e.bottom && (s.scrollTop += i.bottom - e.bottom);
}
function no(s) {
  return (s.boost || 0) * 100 + (s.apply ? 10 : 0) + (s.info ? 5 : 0) + (s.type ? 1 : 0);
}
function du(s, t) {
  let e = [], i = null, n = (a) => {
    e.push(a);
    let { section: h } = a.completion;
    if (h) {
      i || (i = []);
      let f = typeof h == "string" ? h : h.name;
      i.some((c) => c.name == f) || i.push(typeof h == "string" ? { name: f } : h);
    }
  };
  for (let a of s)
    if (a.hasResult()) {
      let h = a.result.getMatch;
      if (a.result.filter === !1)
        for (let f of a.result.options)
          n(new Zr(f, a.source, h ? h(f) : [], 1e9 - e.length));
      else {
        let f = new lu(t.sliceDoc(a.from, a.to));
        for (let c of a.result.options)
          if (f.match(c.label)) {
            let u = c.displayLabel ? h ? h(c, f.matched) : [] : f.matched;
            n(new Zr(c, a.source, u, f.score + (c.boost || 0)));
          }
      }
    }
  if (i) {
    let a = /* @__PURE__ */ Object.create(null), h = 0, f = (c, u) => {
      var d, p;
      return ((d = c.rank) !== null && d !== void 0 ? d : 1e9) - ((p = u.rank) !== null && p !== void 0 ? p : 1e9) || (c.name < u.name ? -1 : 1);
    };
    for (let c of i.sort(f))
      h -= 1e5, a[c.name] = h;
    for (let c of e) {
      let { section: u } = c.completion;
      u && (c.score += a[typeof u == "string" ? u : u.name]);
    }
  }
  let r = [], o = null, l = t.facet(gt).compareCompletions;
  for (let a of e.sort((h, f) => f.score - h.score || l(h.completion, f.completion))) {
    let h = a.completion;
    !o || o.label != h.label || o.detail != h.detail || o.type != null && h.type != null && o.type != h.type || o.apply != h.apply || o.boost != h.boost ? r.push(a) : no(a.completion) > no(o) && (r[r.length - 1] = a), o = a.completion;
  }
  return r;
}
class xe {
  constructor(t, e, i, n, r, o) {
    this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = n, this.selected = r, this.disabled = o;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new xe(this.options, so(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, i, n, r) {
    let o = du(t, e);
    if (!o.length)
      return n && t.some(
        (a) => a.state == 1
        /* Pending */
      ) ? new xe(n.options, n.attrs, n.tooltip, n.timestamp, n.selected, !0) : null;
    let l = e.facet(gt).selectOnOpen ? 0 : -1;
    if (n && n.selected != l && n.selected != -1) {
      let a = n.options[n.selected].completion;
      for (let h = 0; h < o.length; h++)
        if (o[h].completion == a) {
          l = h;
          break;
        }
    }
    return new xe(o, so(i, l), {
      pos: t.reduce((a, h) => h.hasResult() ? Math.min(a, h.from) : a, 1e8),
      create: cu(xt, oa),
      above: r.aboveCursor
    }, n ? n.timestamp : Date.now(), l, !1);
  }
  map(t) {
    return new xe(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: t.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Ji {
  constructor(t, e, i) {
    this.active = t, this.id = e, this.open = i;
  }
  static start() {
    return new Ji(mu, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, i = e.facet(gt), r = (i.override || e.languageDataAt("autocomplete", Yt(e)).map(ou)).map((l) => (this.active.find((h) => h.source == l) || new pt(
      l,
      this.active.some(
        (h) => h.state != 0
        /* Inactive */
      ) ? 1 : 0
      /* Inactive */
    )).update(t, i));
    r.length == this.active.length && r.every((l, a) => l == this.active[a]) && (r = this.active);
    let o = this.open;
    o && t.docChanged && (o = o.map(t.changes)), t.selection || r.some((l) => l.hasResult() && t.changes.touchesRange(l.from, l.to)) || !pu(r, this.active) ? o = xe.build(r, e, this.id, o, i) : o && o.disabled && !r.some(
      (l) => l.state == 1
      /* Pending */
    ) && (o = null), !o && r.every(
      (l) => l.state != 1
      /* Pending */
    ) && r.some((l) => l.hasResult()) && (r = r.map((l) => l.hasResult() ? new pt(
      l.source,
      0
      /* Inactive */
    ) : l));
    for (let l of t.effects)
      l.is(ra) && (o = o && o.setSelected(l.value, this.id));
    return r == this.active && o == this.open ? this : new Ji(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : gu;
  }
}
function pu(s, t) {
  if (s == t)
    return !0;
  for (let e = 0, i = 0; ; ) {
    for (; e < s.length && !s[e].hasResult; )
      e++;
    for (; i < t.length && !t[i].hasResult; )
      i++;
    let n = e == s.length, r = i == t.length;
    if (n || r)
      return n == r;
    if (s[e++].result != t[i++].result)
      return !1;
  }
}
const gu = {
  "aria-autocomplete": "list"
};
function so(s, t) {
  let e = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": s
  };
  return t > -1 && (e["aria-activedescendant"] = s + "-" + t), e;
}
const mu = [];
function hs(s) {
  return s.isUserEvent("input.type") ? "input" : s.isUserEvent("delete.backward") ? "delete" : null;
}
class pt {
  constructor(t, e, i = -1) {
    this.source = t, this.state = e, this.explicitPos = i;
  }
  hasResult() {
    return !1;
  }
  update(t, e) {
    let i = hs(t), n = this;
    i ? n = n.handleUserEvent(t, i, e) : t.docChanged ? n = n.handleChange(t) : t.selection && n.state != 0 && (n = new pt(
      n.source,
      0
      /* Inactive */
    ));
    for (let r of t.effects)
      if (r.is(Os))
        n = new pt(n.source, 1, r.value ? Yt(t.state) : -1);
      else if (r.is(Xe))
        n = new pt(
          n.source,
          0
          /* Inactive */
        );
      else if (r.is(sa))
        for (let o of r.value)
          o.source == n.source && (n = o);
    return n;
  }
  handleUserEvent(t, e, i) {
    return e == "delete" || !i.activateOnTyping ? this.map(t.changes) : new pt(
      this.source,
      1
      /* Pending */
    );
  }
  handleChange(t) {
    return t.changes.touchesRange(Yt(t.startState)) ? new pt(
      this.source,
      0
      /* Inactive */
    ) : this.map(t.changes);
  }
  map(t) {
    return t.empty || this.explicitPos < 0 ? this : new pt(this.source, this.state, t.mapPos(this.explicitPos));
  }
}
class Ce extends pt {
  constructor(t, e, i, n, r) {
    super(t, 2, e), this.result = i, this.from = n, this.to = r;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(t, e, i) {
    var n;
    let r = t.changes.mapPos(this.from), o = t.changes.mapPos(this.to, 1), l = Yt(t.state);
    if ((this.explicitPos < 0 ? l <= r : l < this.from) || l > o || e == "delete" && Yt(t.startState) == this.from)
      return new pt(
        this.source,
        e == "input" && i.activateOnTyping ? 1 : 0
        /* Inactive */
      );
    let a = this.explicitPos < 0 ? -1 : t.changes.mapPos(this.explicitPos), h;
    return yu(this.result.validFor, t.state, r, o) ? new Ce(this.source, a, this.result, r, o) : this.result.update && (h = this.result.update(this.result, r, o, new ea(t.state, l, a >= 0))) ? new Ce(this.source, a, h, h.from, (n = h.to) !== null && n !== void 0 ? n : Yt(t.state)) : new pt(this.source, 1, a);
  }
  handleChange(t) {
    return t.changes.touchesRange(this.from, this.to) ? new pt(
      this.source,
      0
      /* Inactive */
    ) : this.map(t.changes);
  }
  map(t) {
    return t.empty ? this : new Ce(this.source, this.explicitPos < 0 ? -1 : t.mapPos(this.explicitPos), this.result, t.mapPos(this.from), t.mapPos(this.to, 1));
  }
}
function yu(s, t, e, i) {
  if (!s)
    return !1;
  let n = t.sliceDoc(e, i);
  return typeof s == "function" ? s(n, e, i, t) : ia(s, !0).test(n);
}
const sa = /* @__PURE__ */ E.define({
  map(s, t) {
    return s.map((e) => e.map(t));
  }
}), ra = /* @__PURE__ */ E.define(), xt = /* @__PURE__ */ bt.define({
  create() {
    return Ji.start();
  },
  update(s, t) {
    return s.update(t);
  },
  provide: (s) => [
    xs.from(s, (t) => t.tooltip),
    T.contentAttributes.from(s, (t) => t.attrs)
  ]
});
function oa(s, t) {
  const e = t.completion.apply || t.completion.label;
  let i = s.state.field(xt).active.find((n) => n.source == t.source);
  return i instanceof Ce ? (typeof e == "string" ? s.dispatch(Object.assign(Object.assign({}, ru(s.state, e, i.from, i.to)), { annotations: na.of(t.completion) })) : e(s, t.completion, i.from, i.to), !0) : !1;
}
function Si(s, t = "option") {
  return (e) => {
    let i = e.state.field(xt, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(gt).interactionDelay)
      return !1;
    let n = 1, r;
    t == "page" && (r = El(e, i.open.tooltip)) && (n = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + n * (s ? 1 : -1) : s ? 0 : o - 1;
    return l < 0 ? l = t == "page" ? 0 : o - 1 : l >= o && (l = t == "page" ? o - 1 : 0), e.dispatch({ effects: ra.of(l) }), !0;
  };
}
const bu = (s) => {
  let t = s.state.field(xt, !1);
  return s.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < s.state.facet(gt).interactionDelay ? !1 : oa(s, t.open.options[t.open.selected]);
}, wu = (s) => s.state.field(xt, !1) ? (s.dispatch({ effects: Os.of(!0) }), !0) : !1, xu = (s) => {
  let t = s.state.field(xt, !1);
  return !t || !t.active.some(
    (e) => e.state != 0
    /* Inactive */
  ) ? !1 : (s.dispatch({ effects: Xe.of(null) }), !0);
};
class vu {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const ro = 50, ku = 50, Su = 1e3, Cu = /* @__PURE__ */ Z.fromClass(class {
  constructor(s) {
    this.view = s, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let t of s.state.field(xt).active)
      t.state == 1 && this.startQuery(t);
  }
  update(s) {
    let t = s.state.field(xt);
    if (!s.selectionSet && !s.docChanged && s.startState.field(xt) == t)
      return;
    let e = s.transactions.some((i) => (i.selection || i.docChanged) && !hs(i));
    for (let i = 0; i < this.running.length; i++) {
      let n = this.running[i];
      if (e || n.updates.length + s.transactions.length > ku && Date.now() - n.time > Su) {
        for (let r of n.context.abortListeners)
          try {
            r();
          } catch (o) {
            Ct(this.view.state, o);
          }
        n.context.abortListeners = null, this.running.splice(i--, 1);
      } else
        n.updates.push(...s.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = t.active.some((i) => i.state == 1 && !this.running.some((n) => n.active.source == i.source)) ? setTimeout(() => this.startUpdate(), ro) : -1, this.composing != 0)
      for (let i of s.transactions)
        hs(i) == "input" ? this.composing = 2 : this.composing == 2 && i.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: s } = this.view, t = s.field(xt);
    for (let e of t.active)
      e.state == 1 && !this.running.some((i) => i.active.source == e.source) && this.startQuery(e);
  }
  startQuery(s) {
    let { state: t } = this.view, e = Yt(t), i = new ea(t, e, s.explicitPos == e), n = new vu(s, i);
    this.running.push(n), Promise.resolve(s.source(i)).then((r) => {
      n.context.aborted || (n.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Xe.of(null) }), Ct(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((s) => s.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), ro));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var s;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let t = [], e = this.view.state.facet(gt);
    for (let i = 0; i < this.running.length; i++) {
      let n = this.running[i];
      if (n.done === void 0)
        continue;
      if (this.running.splice(i--, 1), n.done) {
        let o = new Ce(n.active.source, n.active.explicitPos, n.done, n.done.from, (s = n.done.to) !== null && s !== void 0 ? s : Yt(n.updates.length ? n.updates[0].startState : this.view.state));
        for (let l of n.updates)
          o = o.update(l, e);
        if (o.hasResult()) {
          t.push(o);
          continue;
        }
      }
      let r = this.view.state.field(xt).active.find((o) => o.source == n.active.source);
      if (r && r.state == 1)
        if (n.done == null) {
          let o = new pt(
            n.active.source,
            0
            /* Inactive */
          );
          for (let l of n.updates)
            o = o.update(l, e);
          o.state != 1 && t.push(o);
        } else
          this.startQuery(r);
    }
    t.length && this.view.dispatch({ effects: sa.of(t) });
  }
}, {
  eventHandlers: {
    blur(s) {
      let t = this.view.state.field(xt, !1);
      if (t && t.tooltip && this.view.state.facet(gt).closeOnBlur) {
        let e = t.open && El(this.view, t.open.tooltip);
        (!e || !e.dom.contains(s.relatedTarget)) && this.view.dispatch({ effects: Xe.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Os.of(!1) }), 20), this.composing = 0;
    }
  }
}), la = /* @__PURE__ */ T.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class Au {
  constructor(t, e, i, n) {
    this.field = t, this.line = e, this.from = i, this.to = n;
  }
}
class Ds {
  constructor(t, e, i) {
    this.field = t, this.from = e, this.to = i;
  }
  map(t) {
    let e = t.mapPos(this.from, -1, nt.TrackDel), i = t.mapPos(this.to, 1, nt.TrackDel);
    return e == null || i == null ? null : new Ds(this.field, e, i);
  }
}
class Ts {
  constructor(t, e) {
    this.lines = t, this.fieldPositions = e;
  }
  instantiate(t, e) {
    let i = [], n = [e], r = t.doc.lineAt(e), o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = o, f = /^\t*/.exec(a)[0].length;
        for (let c = 0; c < f; c++)
          h += t.facet(As);
        n.push(e + h.length - f), a = h + a.slice(f);
      }
      i.push(a), e += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new Ds(a.field, n[a.line] + a.from, n[a.line] + a.to));
    return { text: i, ranges: l };
  }
  static parse(t) {
    let e = [], i = [], n = [], r;
    for (let o of t.split(/\r\n?|\n/)) {
      for (; r = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o); ) {
        let l = r[1] ? +r[1] : null, a = r[2] || r[3] || "", h = -1;
        for (let f = 0; f < e.length; f++)
          (l != null ? e[f].seq == l : a && e[f].name == a) && (h = f);
        if (h < 0) {
          let f = 0;
          for (; f < e.length && (l == null || e[f].seq != null && e[f].seq < l); )
            f++;
          e.splice(f, 0, { seq: l, name: a }), h = f;
          for (let c of n)
            c.field >= h && c.field++;
        }
        n.push(new Au(h, i.length, r.index, r.index + a.length)), o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length);
      }
      for (let l; l = /\\([{}])/.exec(o); ) {
        o = o.slice(0, l.index) + l[1] + o.slice(l.index + l[0].length);
        for (let a of n)
          a.line == i.length && a.from > l.index && (a.from--, a.to--);
      }
      i.push(o);
    }
    return new Ts(i, n);
  }
}
let Mu = /* @__PURE__ */ L.widget({ widget: /* @__PURE__ */ new class extends ie {
  toDOM() {
    let s = document.createElement("span");
    return s.className = "cm-snippetFieldPosition", s;
  }
  ignoreEvent() {
    return !1;
  }
}() }), Ou = /* @__PURE__ */ L.mark({ class: "cm-snippetField" });
class Be {
  constructor(t, e) {
    this.ranges = t, this.active = e, this.deco = L.set(t.map((i) => (i.from == i.to ? Mu : Ou).range(i.from, i.to)));
  }
  map(t) {
    let e = [];
    for (let i of this.ranges) {
      let n = i.map(t);
      if (!n)
        return null;
      e.push(n);
    }
    return new Be(e, this.active);
  }
  selectionInsideField(t) {
    return t.ranges.every((e) => this.ranges.some((i) => i.field == this.active && i.from <= e.from && i.to >= e.to));
  }
}
const si = /* @__PURE__ */ E.define({
  map(s, t) {
    return s && s.map(t);
  }
}), Du = /* @__PURE__ */ E.define(), Qe = /* @__PURE__ */ bt.define({
  create() {
    return null;
  },
  update(s, t) {
    for (let e of t.effects) {
      if (e.is(si))
        return e.value;
      if (e.is(Du) && s)
        return new Be(s.ranges, e.value);
    }
    return s && t.docChanged && (s = s.map(t.changes)), s && t.selection && !s.selectionInsideField(t.selection) && (s = null), s;
  },
  provide: (s) => T.decorations.from(s, (t) => t ? t.deco : L.none)
});
function Ps(s, t) {
  return S.create(s.filter((e) => e.field == t).map((e) => S.range(e.from, e.to)));
}
function Tu(s) {
  let t = Ts.parse(s);
  return (e, i, n, r) => {
    let { text: o, ranges: l } = t.instantiate(e.state, n), a = {
      changes: { from: n, to: r, insert: N.of(o) },
      scrollIntoView: !0,
      annotations: i ? na.of(i) : void 0
    };
    if (l.length && (a.selection = Ps(l, 0)), l.length > 1) {
      let h = new Be(l, 0), f = a.effects = [si.of(h)];
      e.state.field(Qe, !1) === void 0 && f.push(E.appendConfig.of([Qe, Lu, Iu, la]));
    }
    e.dispatch(e.state.update(a));
  };
}
function aa(s) {
  return ({ state: t, dispatch: e }) => {
    let i = t.field(Qe, !1);
    if (!i || s < 0 && i.active == 0)
      return !1;
    let n = i.active + s, r = s > 0 && !i.ranges.some((o) => o.field == n + s);
    return e(t.update({
      selection: Ps(i.ranges, n),
      effects: si.of(r ? null : new Be(i.ranges, n))
    })), !0;
  };
}
const Pu = ({ state: s, dispatch: t }) => s.field(Qe, !1) ? (t(s.update({ effects: si.of(null) })), !0) : !1, Bu = /* @__PURE__ */ aa(1), Ru = /* @__PURE__ */ aa(-1), Eu = [
  { key: "Tab", run: Bu, shift: Ru },
  { key: "Escape", run: Pu }
], oo = /* @__PURE__ */ O.define({
  combine(s) {
    return s.length ? s[0] : Eu;
  }
}), Lu = /* @__PURE__ */ Te.highest(/* @__PURE__ */ ws.compute([oo], (s) => s.facet(oo)));
function vd(s, t) {
  return Object.assign(Object.assign({}, t), { apply: Tu(s) });
}
const Iu = /* @__PURE__ */ T.domEventHandlers({
  mousedown(s, t) {
    let e = t.state.field(Qe, !1), i;
    if (!e || (i = t.posAtCoords({ x: s.clientX, y: s.clientY })) == null)
      return !1;
    let n = e.ranges.find((r) => r.from <= i && r.to >= i);
    return !n || n.field == e.active ? !1 : (t.dispatch({
      selection: Ps(e.ranges, n.field),
      effects: si.of(e.ranges.some((r) => r.field > n.field) ? new Be(e.ranges, n.field) : null)
    }), !0);
  }
}), Ze = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, le = /* @__PURE__ */ E.define({
  map(s, t) {
    let e = t.mapPos(s, -1, nt.TrackAfter);
    return e ?? void 0;
  }
}), Bs = /* @__PURE__ */ new class extends he {
}();
Bs.startSide = 1;
Bs.endSide = -1;
const ha = /* @__PURE__ */ bt.define({
  create() {
    return H.empty;
  },
  update(s, t) {
    if (t.selection) {
      let e = t.state.doc.lineAt(t.selection.main.head).from, i = t.startState.doc.lineAt(t.startState.selection.main.head).from;
      e != t.changes.mapPos(i, -1) && (s = H.empty);
    }
    s = s.map(t.changes);
    for (let e of t.effects)
      e.is(le) && (s = s.update({ add: [Bs.range(e.value, e.value + 1)] }));
    return s;
  }
});
function kd() {
  return [Hu, ha];
}
const kn = "()[]{}<>";
function fa(s) {
  for (let t = 0; t < kn.length; t += 2)
    if (kn.charCodeAt(t) == s)
      return kn.charAt(t + 1);
  return go(s < 128 ? s : s + 1);
}
function ca(s, t) {
  return s.languageDataAt("closeBrackets", t)[0] || Ze;
}
const Nu = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Hu = /* @__PURE__ */ T.inputHandler.of((s, t, e, i) => {
  if ((Nu ? s.composing : s.compositionStarted) || s.state.readOnly)
    return !1;
  let n = s.state.selection.main;
  if (i.length > 2 || i.length == 2 && Ot(lt(i, 0)) == 1 || t != n.from || e != n.to)
    return !1;
  let r = Vu(s.state, i);
  return r ? (s.dispatch(r), !0) : !1;
}), Fu = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let i = ca(s, s.selection.main.head).brackets || Ze.brackets, n = null, r = s.changeByRange((o) => {
    if (o.empty) {
      let l = Wu(s.doc, o.head);
      for (let a of i)
        if (a == l && nn(s.doc, o.head) == fa(lt(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: S.cursor(o.head - a.length)
          };
    }
    return { range: n = o };
  });
  return n || t(s.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !n;
}, Sd = [
  { key: "Backspace", run: Fu }
];
function Vu(s, t) {
  let e = ca(s, s.selection.main.head), i = e.brackets || Ze.brackets;
  for (let n of i) {
    let r = fa(lt(n, 0));
    if (t == n)
      return r == n ? ju(s, n, i.indexOf(n + n + n) > -1, e) : zu(s, n, r, e.before || Ze.before);
    if (t == r && ua(s, s.selection.main.from))
      return qu(s, n, r);
  }
  return null;
}
function ua(s, t) {
  let e = !1;
  return s.field(ha).between(0, s.doc.length, (i) => {
    i == t && (e = !0);
  }), e;
}
function nn(s, t) {
  let e = s.sliceString(t, t + 2);
  return e.slice(0, Ot(lt(e, 0)));
}
function Wu(s, t) {
  let e = s.sliceString(t - 2, t);
  return Ot(lt(e, 0)) == e.length ? e : e.slice(1);
}
function zu(s, t, e, i) {
  let n = null, r = s.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: t, from: o.from }, { insert: e, from: o.to }],
        effects: le.of(o.to + t.length),
        range: S.range(o.anchor + t.length, o.head + t.length)
      };
    let l = nn(s.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: t + e, from: o.head },
      effects: le.of(o.head + t.length),
      range: S.cursor(o.head + t.length)
    } : { range: n = o };
  });
  return n ? null : s.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function qu(s, t, e) {
  let i = null, n = s.changeByRange((r) => r.empty && nn(s.doc, r.head) == e ? {
    changes: { from: r.head, to: r.head + e.length, insert: e },
    range: S.cursor(r.head + e.length)
  } : i = { range: r });
  return i ? null : s.update(n, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function ju(s, t, e, i) {
  let n = i.stringPrefixes || Ze.stringPrefixes, r = null, o = s.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: t, from: l.from }, { insert: t, from: l.to }],
        effects: le.of(l.to + t.length),
        range: S.range(l.anchor + t.length, l.head + t.length)
      };
    let a = l.head, h = nn(s.doc, a), f;
    if (h == t) {
      if (lo(s, a))
        return {
          changes: { insert: t + t, from: a },
          effects: le.of(a + t.length),
          range: S.cursor(a + t.length)
        };
      if (ua(s, a)) {
        let u = e && s.sliceDoc(a, a + t.length * 3) == t + t + t ? t + t + t : t;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: S.cursor(a + u.length)
        };
      }
    } else {
      if (e && s.sliceDoc(a - 2 * t.length, a) == t + t && (f = ao(s, a - 2 * t.length, n)) > -1 && lo(s, f))
        return {
          changes: { insert: t + t + t + t, from: a },
          effects: le.of(a + t.length),
          range: S.cursor(a + t.length)
        };
      if (s.charCategorizer(a)(h) != kt.Word && ao(s, a, n) > -1 && !Ku(s, a, t, n))
        return {
          changes: { insert: t + t, from: a },
          effects: le.of(a + t.length),
          range: S.cursor(a + t.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : s.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function lo(s, t) {
  let e = yt(s).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function Ku(s, t, e, i) {
  let n = yt(s).resolveInner(t, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = s.sliceDoc(n.from, Math.min(n.to, n.from + e.length + r)), a = l.indexOf(e);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let f = n.firstChild;
      for (; f && f.from == n.from && f.to - f.from > e.length + a; ) {
        if (s.sliceDoc(f.to - e.length, f.to) == e)
          return !1;
        f = f.firstChild;
      }
      return !0;
    }
    let h = n.to == t && n.parent;
    if (!h)
      break;
    n = h;
  }
  return !1;
}
function ao(s, t, e) {
  let i = s.charCategorizer(t);
  if (i(s.sliceDoc(t - 1, t)) != kt.Word)
    return t;
  for (let n of e) {
    let r = t - n.length;
    if (s.sliceDoc(r, t) == n && i(s.sliceDoc(r - 1, r)) != kt.Word)
      return r;
  }
  return -1;
}
function Cd(s = {}) {
  return [
    xt,
    gt.of(s),
    Cu,
    Uu,
    la
  ];
}
const $u = [
  { key: "Ctrl-Space", run: wu },
  { key: "Escape", run: xu },
  { key: "ArrowDown", run: /* @__PURE__ */ Si(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Si(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Si(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Si(!1, "page") },
  { key: "Enter", run: bu }
], Uu = /* @__PURE__ */ Te.highest(/* @__PURE__ */ ws.computeN([gt], (s) => s.facet(gt).defaultKeymap ? [$u] : []));
export {
  L as $,
  de as A,
  at as B,
  Pe as C,
  $f as D,
  T as E,
  O as F,
  $ as G,
  Q as H,
  j as I,
  Wt as J,
  E as K,
  rs as L,
  ki as M,
  Hl as N,
  ds as O,
  Xf as P,
  wc as Q,
  As as R,
  bt as S,
  X as T,
  Te as U,
  nd as V,
  Z as W,
  Er as X,
  lt as Y,
  Ot as Z,
  go as _,
  mt as a,
  I as a0,
  fe as a1,
  kt as a2,
  _u as a3,
  id as a4,
  ie as a5,
  Sd as a6,
  gd as a7,
  $u as a8,
  sd as a9,
  rd as aa,
  Xu as ab,
  md as ac,
  Ju as ad,
  Yu as ae,
  dd as af,
  yd as ag,
  wd as ah,
  kd as ai,
  Cd as aj,
  td as ak,
  ed as al,
  Qu as am,
  ws as an,
  bd as ao,
  en as ap,
  Zu as aq,
  R as b,
  ud as c,
  pd as d,
  hd as e,
  Bc as f,
  yt as g,
  od as h,
  kc as i,
  fd as j,
  cd as k,
  gc as l,
  pc as m,
  xd as n,
  su as o,
  ld as p,
  S as q,
  vd as r,
  hc as s,
  C as t,
  Xc as u,
  jl as v,
  vc as w,
  xc as x,
  N as y,
  Ht as z
};
//# sourceMappingURL=index-o4Q9MNrB.mjs.map
