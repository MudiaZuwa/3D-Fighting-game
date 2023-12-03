import "./modulepreload-polyfill-3cfb730f.js";
import {
  M as Mt,
  S as Vt,
  B as Xt,
  P as Dt,
  a as $,
  C as ve,
  b as Gt,
  F as Lt,
  T as ke,
  V as ft,
  c as $t,
  d as Be,
  e as Me,
  f as ze,
  A as Ie,
  g as ct,
  h as Ne,
  i as Fe,
  j as Re,
  D as Ge,
  k as Le,
  l as He,
  m as qe,
  W as Oe,
  n as _e,
  L as je,
  o as We,
  p as Zt,
} from "./index-b74b9157.js";
class Z {
  constructor(t) {
    t === void 0 && (t = [0, 0, 0, 0, 0, 0, 0, 0, 0]), (this.elements = t);
  }
  identity() {
    const t = this.elements;
    (t[0] = 1),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 1),
      (t[5] = 0),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 1);
  }
  setZero() {
    const t = this.elements;
    (t[0] = 0),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = 0),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0);
  }
  setTrace(t) {
    const e = this.elements;
    (e[0] = t.x), (e[4] = t.y), (e[8] = t.z);
  }
  getTrace(t) {
    t === void 0 && (t = new a());
    const e = this.elements;
    return (t.x = e[0]), (t.y = e[4]), (t.z = e[8]), t;
  }
  vmult(t, e) {
    e === void 0 && (e = new a());
    const s = this.elements,
      i = t.x,
      n = t.y,
      o = t.z;
    return (
      (e.x = s[0] * i + s[1] * n + s[2] * o),
      (e.y = s[3] * i + s[4] * n + s[5] * o),
      (e.z = s[6] * i + s[7] * n + s[8] * o),
      e
    );
  }
  smult(t) {
    for (let e = 0; e < this.elements.length; e++) this.elements[e] *= t;
  }
  mmult(t, e) {
    e === void 0 && (e = new Z());
    const s = this.elements,
      i = t.elements,
      n = e.elements,
      o = s[0],
      r = s[1],
      l = s[2],
      c = s[3],
      d = s[4],
      p = s[5],
      h = s[6],
      m = s[7],
      u = s[8],
      y = i[0],
      w = i[1],
      v = i[2],
      f = i[3],
      b = i[4],
      E = i[5],
      T = i[6],
      k = i[7],
      N = i[8];
    return (
      (n[0] = o * y + r * f + l * T),
      (n[1] = o * w + r * b + l * k),
      (n[2] = o * v + r * E + l * N),
      (n[3] = c * y + d * f + p * T),
      (n[4] = c * w + d * b + p * k),
      (n[5] = c * v + d * E + p * N),
      (n[6] = h * y + m * f + u * T),
      (n[7] = h * w + m * b + u * k),
      (n[8] = h * v + m * E + u * N),
      e
    );
  }
  scale(t, e) {
    e === void 0 && (e = new Z());
    const s = this.elements,
      i = e.elements;
    for (let n = 0; n !== 3; n++)
      (i[3 * n + 0] = t.x * s[3 * n + 0]),
        (i[3 * n + 1] = t.y * s[3 * n + 1]),
        (i[3 * n + 2] = t.z * s[3 * n + 2]);
    return e;
  }
  solve(t, e) {
    e === void 0 && (e = new a());
    const s = 3,
      i = 4,
      n = [];
    let o, r;
    for (o = 0; o < s * i; o++) n.push(0);
    for (o = 0; o < 3; o++)
      for (r = 0; r < 3; r++) n[o + i * r] = this.elements[o + 3 * r];
    (n[3 + 4 * 0] = t.x), (n[3 + 4 * 1] = t.y), (n[3 + 4 * 2] = t.z);
    let l = 3;
    const c = l;
    let d;
    const p = 4;
    let h;
    do {
      if (((o = c - l), n[o + i * o] === 0)) {
        for (r = o + 1; r < c; r++)
          if (n[o + i * r] !== 0) {
            d = p;
            do (h = p - d), (n[h + i * o] += n[h + i * r]);
            while (--d);
            break;
          }
      }
      if (n[o + i * o] !== 0)
        for (r = o + 1; r < c; r++) {
          const m = n[o + i * r] / n[o + i * o];
          d = p;
          do
            (h = p - d),
              (n[h + i * r] = h <= o ? 0 : n[h + i * r] - n[h + i * o] * m);
          while (--d);
        }
    } while (--l);
    if (
      ((e.z = n[2 * i + 3] / n[2 * i + 2]),
      (e.y = (n[1 * i + 3] - n[1 * i + 2] * e.z) / n[1 * i + 1]),
      (e.x =
        (n[0 * i + 3] - n[0 * i + 2] * e.z - n[0 * i + 1] * e.y) /
        n[0 * i + 0]),
      isNaN(e.x) ||
        isNaN(e.y) ||
        isNaN(e.z) ||
        e.x === 1 / 0 ||
        e.y === 1 / 0 ||
        e.z === 1 / 0)
    )
      throw `Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;
    return e;
  }
  e(t, e, s) {
    if (s === void 0) return this.elements[e + 3 * t];
    this.elements[e + 3 * t] = s;
  }
  copy(t) {
    for (let e = 0; e < t.elements.length; e++)
      this.elements[e] = t.elements[e];
    return this;
  }
  toString() {
    let t = "";
    const e = ",";
    for (let s = 0; s < 9; s++) t += this.elements[s] + e;
    return t;
  }
  reverse(t) {
    t === void 0 && (t = new Z());
    const e = 3,
      s = 6,
      i = Ve;
    let n, o;
    for (n = 0; n < 3; n++)
      for (o = 0; o < 3; o++) i[n + s * o] = this.elements[n + 3 * o];
    (i[3 + 6 * 0] = 1),
      (i[3 + 6 * 1] = 0),
      (i[3 + 6 * 2] = 0),
      (i[4 + 6 * 0] = 0),
      (i[4 + 6 * 1] = 1),
      (i[4 + 6 * 2] = 0),
      (i[5 + 6 * 0] = 0),
      (i[5 + 6 * 1] = 0),
      (i[5 + 6 * 2] = 1);
    let r = 3;
    const l = r;
    let c;
    const d = s;
    let p;
    do {
      if (((n = l - r), i[n + s * n] === 0)) {
        for (o = n + 1; o < l; o++)
          if (i[n + s * o] !== 0) {
            c = d;
            do (p = d - c), (i[p + s * n] += i[p + s * o]);
            while (--c);
            break;
          }
      }
      if (i[n + s * n] !== 0)
        for (o = n + 1; o < l; o++) {
          const h = i[n + s * o] / i[n + s * n];
          c = d;
          do
            (p = d - c),
              (i[p + s * o] = p <= n ? 0 : i[p + s * o] - i[p + s * n] * h);
          while (--c);
        }
    } while (--r);
    n = 2;
    do {
      o = n - 1;
      do {
        const h = i[n + s * o] / i[n + s * n];
        c = s;
        do (p = s - c), (i[p + s * o] = i[p + s * o] - i[p + s * n] * h);
        while (--c);
      } while (o--);
    } while (--n);
    n = 2;
    do {
      const h = 1 / i[n + s * n];
      c = s;
      do (p = s - c), (i[p + s * n] = i[p + s * n] * h);
      while (--c);
    } while (n--);
    n = 2;
    do {
      o = 2;
      do {
        if (((p = i[e + o + s * n]), isNaN(p) || p === 1 / 0))
          throw `Could not reverse! A=[${this.toString()}]`;
        t.e(n, o, p);
      } while (o--);
    } while (n--);
    return t;
  }
  setRotationFromQuaternion(t) {
    const e = t.x,
      s = t.y,
      i = t.z,
      n = t.w,
      o = e + e,
      r = s + s,
      l = i + i,
      c = e * o,
      d = e * r,
      p = e * l,
      h = s * r,
      m = s * l,
      u = i * l,
      y = n * o,
      w = n * r,
      v = n * l,
      f = this.elements;
    return (
      (f[3 * 0 + 0] = 1 - (h + u)),
      (f[3 * 0 + 1] = d - v),
      (f[3 * 0 + 2] = p + w),
      (f[3 * 1 + 0] = d + v),
      (f[3 * 1 + 1] = 1 - (c + u)),
      (f[3 * 1 + 2] = m - y),
      (f[3 * 2 + 0] = p - w),
      (f[3 * 2 + 1] = m + y),
      (f[3 * 2 + 2] = 1 - (c + h)),
      this
    );
  }
  transpose(t) {
    t === void 0 && (t = new Z());
    const e = this.elements,
      s = t.elements;
    let i;
    return (
      (s[0] = e[0]),
      (s[4] = e[4]),
      (s[8] = e[8]),
      (i = e[1]),
      (s[1] = e[3]),
      (s[3] = i),
      (i = e[2]),
      (s[2] = e[6]),
      (s[6] = i),
      (i = e[5]),
      (s[5] = e[7]),
      (s[7] = i),
      t
    );
  }
}
const Ve = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class a {
  constructor(t, e, s) {
    t === void 0 && (t = 0),
      e === void 0 && (e = 0),
      s === void 0 && (s = 0),
      (this.x = t),
      (this.y = e),
      (this.z = s);
  }
  cross(t, e) {
    e === void 0 && (e = new a());
    const s = t.x,
      i = t.y,
      n = t.z,
      o = this.x,
      r = this.y,
      l = this.z;
    return (
      (e.x = r * n - l * i), (e.y = l * s - o * n), (e.z = o * i - r * s), e
    );
  }
  set(t, e, s) {
    return (this.x = t), (this.y = e), (this.z = s), this;
  }
  setZero() {
    this.x = this.y = this.z = 0;
  }
  vadd(t, e) {
    if (e) (e.x = t.x + this.x), (e.y = t.y + this.y), (e.z = t.z + this.z);
    else return new a(this.x + t.x, this.y + t.y, this.z + t.z);
  }
  vsub(t, e) {
    if (e) (e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z);
    else return new a(this.x - t.x, this.y - t.y, this.z - t.z);
  }
  crossmat() {
    return new Z([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
  }
  normalize() {
    const t = this.x,
      e = this.y,
      s = this.z,
      i = Math.sqrt(t * t + e * e + s * s);
    if (i > 0) {
      const n = 1 / i;
      (this.x *= n), (this.y *= n), (this.z *= n);
    } else (this.x = 0), (this.y = 0), (this.z = 0);
    return i;
  }
  unit(t) {
    t === void 0 && (t = new a());
    const e = this.x,
      s = this.y,
      i = this.z;
    let n = Math.sqrt(e * e + s * s + i * i);
    return (
      n > 0
        ? ((n = 1 / n), (t.x = e * n), (t.y = s * n), (t.z = i * n))
        : ((t.x = 1), (t.y = 0), (t.z = 0)),
      t
    );
  }
  length() {
    const t = this.x,
      e = this.y,
      s = this.z;
    return Math.sqrt(t * t + e * e + s * s);
  }
  lengthSquared() {
    return this.dot(this);
  }
  distanceTo(t) {
    const e = this.x,
      s = this.y,
      i = this.z,
      n = t.x,
      o = t.y,
      r = t.z;
    return Math.sqrt((n - e) * (n - e) + (o - s) * (o - s) + (r - i) * (r - i));
  }
  distanceSquared(t) {
    const e = this.x,
      s = this.y,
      i = this.z,
      n = t.x,
      o = t.y,
      r = t.z;
    return (n - e) * (n - e) + (o - s) * (o - s) + (r - i) * (r - i);
  }
  scale(t, e) {
    e === void 0 && (e = new a());
    const s = this.x,
      i = this.y,
      n = this.z;
    return (e.x = t * s), (e.y = t * i), (e.z = t * n), e;
  }
  vmul(t, e) {
    return (
      e === void 0 && (e = new a()),
      (e.x = t.x * this.x),
      (e.y = t.y * this.y),
      (e.z = t.z * this.z),
      e
    );
  }
  addScaledVector(t, e, s) {
    return (
      s === void 0 && (s = new a()),
      (s.x = this.x + t * e.x),
      (s.y = this.y + t * e.y),
      (s.z = this.z + t * e.z),
      s
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  isZero() {
    return this.x === 0 && this.y === 0 && this.z === 0;
  }
  negate(t) {
    return (
      t === void 0 && (t = new a()),
      (t.x = -this.x),
      (t.y = -this.y),
      (t.z = -this.z),
      t
    );
  }
  tangents(t, e) {
    const s = this.length();
    if (s > 0) {
      const i = De,
        n = 1 / s;
      i.set(this.x * n, this.y * n, this.z * n);
      const o = Ue;
      Math.abs(i.x) < 0.9
        ? (o.set(1, 0, 0), i.cross(o, t))
        : (o.set(0, 1, 0), i.cross(o, t)),
        i.cross(t, e);
    } else t.set(1, 0, 0), e.set(0, 1, 0);
  }
  toString() {
    return `${this.x},${this.y},${this.z}`;
  }
  toArray() {
    return [this.x, this.y, this.z];
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
  }
  lerp(t, e, s) {
    const i = this.x,
      n = this.y,
      o = this.z;
    (s.x = i + (t.x - i) * e),
      (s.y = n + (t.y - n) * e),
      (s.z = o + (t.z - o) * e);
  }
  almostEquals(t, e) {
    return (
      e === void 0 && (e = 1e-6),
      !(
        Math.abs(this.x - t.x) > e ||
        Math.abs(this.y - t.y) > e ||
        Math.abs(this.z - t.z) > e
      )
    );
  }
  almostZero(t) {
    return (
      t === void 0 && (t = 1e-6),
      !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t)
    );
  }
  isAntiparallelTo(t, e) {
    return this.negate(Jt), Jt.almostEquals(t, e);
  }
  clone() {
    return new a(this.x, this.y, this.z);
  }
}
a.ZERO = new a(0, 0, 0);
a.UNIT_X = new a(1, 0, 0);
a.UNIT_Y = new a(0, 1, 0);
a.UNIT_Z = new a(0, 0, 1);
const De = new a(),
  Ue = new a(),
  Jt = new a();
class K {
  constructor(t) {
    t === void 0 && (t = {}),
      (this.lowerBound = new a()),
      (this.upperBound = new a()),
      t.lowerBound && this.lowerBound.copy(t.lowerBound),
      t.upperBound && this.upperBound.copy(t.upperBound);
  }
  setFromPoints(t, e, s, i) {
    const n = this.lowerBound,
      o = this.upperBound,
      r = s;
    n.copy(t[0]), r && r.vmult(n, n), o.copy(n);
    for (let l = 1; l < t.length; l++) {
      let c = t[l];
      r && (r.vmult(c, Qt), (c = Qt)),
        c.x > o.x && (o.x = c.x),
        c.x < n.x && (n.x = c.x),
        c.y > o.y && (o.y = c.y),
        c.y < n.y && (n.y = c.y),
        c.z > o.z && (o.z = c.z),
        c.z < n.z && (n.z = c.z);
    }
    return (
      e && (e.vadd(n, n), e.vadd(o, o)),
      i &&
        ((n.x -= i),
        (n.y -= i),
        (n.z -= i),
        (o.x += i),
        (o.y += i),
        (o.z += i)),
      this
    );
  }
  copy(t) {
    return (
      this.lowerBound.copy(t.lowerBound),
      this.upperBound.copy(t.upperBound),
      this
    );
  }
  clone() {
    return new K().copy(this);
  }
  extend(t) {
    (this.lowerBound.x = Math.min(this.lowerBound.x, t.lowerBound.x)),
      (this.upperBound.x = Math.max(this.upperBound.x, t.upperBound.x)),
      (this.lowerBound.y = Math.min(this.lowerBound.y, t.lowerBound.y)),
      (this.upperBound.y = Math.max(this.upperBound.y, t.upperBound.y)),
      (this.lowerBound.z = Math.min(this.lowerBound.z, t.lowerBound.z)),
      (this.upperBound.z = Math.max(this.upperBound.z, t.upperBound.z));
  }
  overlaps(t) {
    const e = this.lowerBound,
      s = this.upperBound,
      i = t.lowerBound,
      n = t.upperBound,
      o = (i.x <= s.x && s.x <= n.x) || (e.x <= n.x && n.x <= s.x),
      r = (i.y <= s.y && s.y <= n.y) || (e.y <= n.y && n.y <= s.y),
      l = (i.z <= s.z && s.z <= n.z) || (e.z <= n.z && n.z <= s.z);
    return o && r && l;
  }
  volume() {
    const t = this.lowerBound,
      e = this.upperBound;
    return (e.x - t.x) * (e.y - t.y) * (e.z - t.z);
  }
  contains(t) {
    const e = this.lowerBound,
      s = this.upperBound,
      i = t.lowerBound,
      n = t.upperBound;
    return (
      e.x <= i.x &&
      s.x >= n.x &&
      e.y <= i.y &&
      s.y >= n.y &&
      e.z <= i.z &&
      s.z >= n.z
    );
  }
  getCorners(t, e, s, i, n, o, r, l) {
    const c = this.lowerBound,
      d = this.upperBound;
    t.copy(c),
      e.set(d.x, c.y, c.z),
      s.set(d.x, d.y, c.z),
      i.set(c.x, d.y, d.z),
      n.set(d.x, c.y, d.z),
      o.set(c.x, d.y, c.z),
      r.set(c.x, c.y, d.z),
      l.copy(d);
  }
  toLocalFrame(t, e) {
    const s = te,
      i = s[0],
      n = s[1],
      o = s[2],
      r = s[3],
      l = s[4],
      c = s[5],
      d = s[6],
      p = s[7];
    this.getCorners(i, n, o, r, l, c, d, p);
    for (let h = 0; h !== 8; h++) {
      const m = s[h];
      t.pointToLocal(m, m);
    }
    return e.setFromPoints(s);
  }
  toWorldFrame(t, e) {
    const s = te,
      i = s[0],
      n = s[1],
      o = s[2],
      r = s[3],
      l = s[4],
      c = s[5],
      d = s[6],
      p = s[7];
    this.getCorners(i, n, o, r, l, c, d, p);
    for (let h = 0; h !== 8; h++) {
      const m = s[h];
      t.pointToWorld(m, m);
    }
    return e.setFromPoints(s);
  }
  overlapsRay(t) {
    const { direction: e, from: s } = t,
      i = 1 / e.x,
      n = 1 / e.y,
      o = 1 / e.z,
      r = (this.lowerBound.x - s.x) * i,
      l = (this.upperBound.x - s.x) * i,
      c = (this.lowerBound.y - s.y) * n,
      d = (this.upperBound.y - s.y) * n,
      p = (this.lowerBound.z - s.z) * o,
      h = (this.upperBound.z - s.z) * o,
      m = Math.max(Math.max(Math.min(r, l), Math.min(c, d)), Math.min(p, h)),
      u = Math.min(Math.min(Math.max(r, l), Math.max(c, d)), Math.max(p, h));
    return !(u < 0 || m > u);
  }
}
const Qt = new a(),
  te = [new a(), new a(), new a(), new a(), new a(), new a(), new a(), new a()];
class ee {
  constructor() {
    this.matrix = [];
  }
  get(t, e) {
    let { index: s } = t,
      { index: i } = e;
    if (i > s) {
      const n = i;
      (i = s), (s = n);
    }
    return this.matrix[((s * (s + 1)) >> 1) + i - 1];
  }
  set(t, e, s) {
    let { index: i } = t,
      { index: n } = e;
    if (n > i) {
      const o = n;
      (n = i), (i = o);
    }
    this.matrix[((i * (i + 1)) >> 1) + n - 1] = s ? 1 : 0;
  }
  reset() {
    for (let t = 0, e = this.matrix.length; t !== e; t++) this.matrix[t] = 0;
  }
  setNumObjects(t) {
    this.matrix.length = (t * (t - 1)) >> 1;
  }
}
class ge {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    return (
      s[t] === void 0 && (s[t] = []), s[t].includes(e) || s[t].push(e), this
    );
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const s = this._listeners;
    return !!(s[t] !== void 0 && s[t].includes(e));
  }
  hasAnyEventListener(t) {
    return this._listeners === void 0 ? !1 : this._listeners[t] !== void 0;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return this;
    const s = this._listeners;
    if (s[t] === void 0) return this;
    const i = s[t].indexOf(e);
    return i !== -1 && s[t].splice(i, 1), this;
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return this;
    const s = this._listeners[t.type];
    if (s !== void 0) {
      t.target = this;
      for (let i = 0, n = s.length; i < n; i++) s[i].call(this, t);
    }
    return this;
  }
}
class j {
  constructor(t, e, s, i) {
    t === void 0 && (t = 0),
      e === void 0 && (e = 0),
      s === void 0 && (s = 0),
      i === void 0 && (i = 1),
      (this.x = t),
      (this.y = e),
      (this.z = s),
      (this.w = i);
  }
  set(t, e, s, i) {
    return (this.x = t), (this.y = e), (this.z = s), (this.w = i), this;
  }
  toString() {
    return `${this.x},${this.y},${this.z},${this.w}`;
  }
  toArray() {
    return [this.x, this.y, this.z, this.w];
  }
  setFromAxisAngle(t, e) {
    const s = Math.sin(e * 0.5);
    return (
      (this.x = t.x * s),
      (this.y = t.y * s),
      (this.z = t.z * s),
      (this.w = Math.cos(e * 0.5)),
      this
    );
  }
  toAxisAngle(t) {
    t === void 0 && (t = new a()), this.normalize();
    const e = 2 * Math.acos(this.w),
      s = Math.sqrt(1 - this.w * this.w);
    return (
      s < 0.001
        ? ((t.x = this.x), (t.y = this.y), (t.z = this.z))
        : ((t.x = this.x / s), (t.y = this.y / s), (t.z = this.z / s)),
      [t, e]
    );
  }
  setFromVectors(t, e) {
    if (t.isAntiparallelTo(e)) {
      const s = Ye,
        i = Ke;
      t.tangents(s, i), this.setFromAxisAngle(s, Math.PI);
    } else {
      const s = t.cross(e);
      (this.x = s.x),
        (this.y = s.y),
        (this.z = s.z),
        (this.w = Math.sqrt(t.length() ** 2 * e.length() ** 2) + t.dot(e)),
        this.normalize();
    }
    return this;
  }
  mult(t, e) {
    e === void 0 && (e = new j());
    const s = this.x,
      i = this.y,
      n = this.z,
      o = this.w,
      r = t.x,
      l = t.y,
      c = t.z,
      d = t.w;
    return (
      (e.x = s * d + o * r + i * c - n * l),
      (e.y = i * d + o * l + n * r - s * c),
      (e.z = n * d + o * c + s * l - i * r),
      (e.w = o * d - s * r - i * l - n * c),
      e
    );
  }
  inverse(t) {
    t === void 0 && (t = new j());
    const e = this.x,
      s = this.y,
      i = this.z,
      n = this.w;
    this.conjugate(t);
    const o = 1 / (e * e + s * s + i * i + n * n);
    return (t.x *= o), (t.y *= o), (t.z *= o), (t.w *= o), t;
  }
  conjugate(t) {
    return (
      t === void 0 && (t = new j()),
      (t.x = -this.x),
      (t.y = -this.y),
      (t.z = -this.z),
      (t.w = this.w),
      t
    );
  }
  normalize() {
    let t = Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
    return (
      t === 0
        ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
        : ((t = 1 / t),
          (this.x *= t),
          (this.y *= t),
          (this.z *= t),
          (this.w *= t)),
      this
    );
  }
  normalizeFast() {
    const t =
      (3 -
        (this.x * this.x +
          this.y * this.y +
          this.z * this.z +
          this.w * this.w)) /
      2;
    return (
      t === 0
        ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
        : ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t)),
      this
    );
  }
  vmult(t, e) {
    e === void 0 && (e = new a());
    const s = t.x,
      i = t.y,
      n = t.z,
      o = this.x,
      r = this.y,
      l = this.z,
      c = this.w,
      d = c * s + r * n - l * i,
      p = c * i + l * s - o * n,
      h = c * n + o * i - r * s,
      m = -o * s - r * i - l * n;
    return (
      (e.x = d * c + m * -o + p * -l - h * -r),
      (e.y = p * c + m * -r + h * -o - d * -l),
      (e.z = h * c + m * -l + d * -r - p * -o),
      e
    );
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this;
  }
  toEuler(t, e) {
    e === void 0 && (e = "YZX");
    let s, i, n;
    const o = this.x,
      r = this.y,
      l = this.z,
      c = this.w;
    switch (e) {
      case "YZX":
        const d = o * r + l * c;
        if (
          (d > 0.499 &&
            ((s = 2 * Math.atan2(o, c)), (i = Math.PI / 2), (n = 0)),
          d < -0.499 &&
            ((s = -2 * Math.atan2(o, c)), (i = -Math.PI / 2), (n = 0)),
          s === void 0)
        ) {
          const p = o * o,
            h = r * r,
            m = l * l;
          (s = Math.atan2(2 * r * c - 2 * o * l, 1 - 2 * h - 2 * m)),
            (i = Math.asin(2 * d)),
            (n = Math.atan2(2 * o * c - 2 * r * l, 1 - 2 * p - 2 * m));
        }
        break;
      default:
        throw new Error(`Euler order ${e} not supported yet.`);
    }
    (t.y = s), (t.z = i), (t.x = n);
  }
  setFromEuler(t, e, s, i) {
    i === void 0 && (i = "XYZ");
    const n = Math.cos(t / 2),
      o = Math.cos(e / 2),
      r = Math.cos(s / 2),
      l = Math.sin(t / 2),
      c = Math.sin(e / 2),
      d = Math.sin(s / 2);
    return (
      i === "XYZ"
        ? ((this.x = l * o * r + n * c * d),
          (this.y = n * c * r - l * o * d),
          (this.z = n * o * d + l * c * r),
          (this.w = n * o * r - l * c * d))
        : i === "YXZ"
        ? ((this.x = l * o * r + n * c * d),
          (this.y = n * c * r - l * o * d),
          (this.z = n * o * d - l * c * r),
          (this.w = n * o * r + l * c * d))
        : i === "ZXY"
        ? ((this.x = l * o * r - n * c * d),
          (this.y = n * c * r + l * o * d),
          (this.z = n * o * d + l * c * r),
          (this.w = n * o * r - l * c * d))
        : i === "ZYX"
        ? ((this.x = l * o * r - n * c * d),
          (this.y = n * c * r + l * o * d),
          (this.z = n * o * d - l * c * r),
          (this.w = n * o * r + l * c * d))
        : i === "YZX"
        ? ((this.x = l * o * r + n * c * d),
          (this.y = n * c * r + l * o * d),
          (this.z = n * o * d - l * c * r),
          (this.w = n * o * r - l * c * d))
        : i === "XZY" &&
          ((this.x = l * o * r - n * c * d),
          (this.y = n * c * r - l * o * d),
          (this.z = n * o * d + l * c * r),
          (this.w = n * o * r + l * c * d)),
      this
    );
  }
  clone() {
    return new j(this.x, this.y, this.z, this.w);
  }
  slerp(t, e, s) {
    s === void 0 && (s = new j());
    const i = this.x,
      n = this.y,
      o = this.z,
      r = this.w;
    let l = t.x,
      c = t.y,
      d = t.z,
      p = t.w,
      h,
      m,
      u,
      y,
      w;
    return (
      (m = i * l + n * c + o * d + r * p),
      m < 0 && ((m = -m), (l = -l), (c = -c), (d = -d), (p = -p)),
      1 - m > 1e-6
        ? ((h = Math.acos(m)),
          (u = Math.sin(h)),
          (y = Math.sin((1 - e) * h) / u),
          (w = Math.sin(e * h) / u))
        : ((y = 1 - e), (w = e)),
      (s.x = y * i + w * l),
      (s.y = y * n + w * c),
      (s.z = y * o + w * d),
      (s.w = y * r + w * p),
      s
    );
  }
  integrate(t, e, s, i) {
    i === void 0 && (i = new j());
    const n = t.x * s.x,
      o = t.y * s.y,
      r = t.z * s.z,
      l = this.x,
      c = this.y,
      d = this.z,
      p = this.w,
      h = e * 0.5;
    return (
      (i.x += h * (n * p + o * d - r * c)),
      (i.y += h * (o * p + r * l - n * d)),
      (i.z += h * (r * p + n * c - o * l)),
      (i.w += h * (-n * l - o * c - r * d)),
      i
    );
  }
}
const Ye = new a(),
  Ke = new a(),
  Xe = {
    SPHERE: 1,
    PLANE: 2,
    BOX: 4,
    COMPOUND: 8,
    CONVEXPOLYHEDRON: 16,
    HEIGHTFIELD: 32,
    PARTICLE: 64,
    CYLINDER: 128,
    TRIMESH: 256,
  };
class M {
  constructor(t) {
    t === void 0 && (t = {}),
      (this.id = M.idCounter++),
      (this.type = t.type || 0),
      (this.boundingSphereRadius = 0),
      (this.collisionResponse = t.collisionResponse ? t.collisionResponse : !0),
      (this.collisionFilterGroup =
        t.collisionFilterGroup !== void 0 ? t.collisionFilterGroup : 1),
      (this.collisionFilterMask =
        t.collisionFilterMask !== void 0 ? t.collisionFilterMask : -1),
      (this.material = t.material ? t.material : null),
      (this.body = null);
  }
  updateBoundingSphereRadius() {
    throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
  }
  volume() {
    throw `volume() not implemented for shape type ${this.type}`;
  }
  calculateLocalInertia(t, e) {
    throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
  }
  calculateWorldAABB(t, e, s, i) {
    throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
  }
}
M.idCounter = 0;
M.types = Xe;
class O {
  constructor(t) {
    t === void 0 && (t = {}),
      (this.position = new a()),
      (this.quaternion = new j()),
      t.position && this.position.copy(t.position),
      t.quaternion && this.quaternion.copy(t.quaternion);
  }
  pointToLocal(t, e) {
    return O.pointToLocalFrame(this.position, this.quaternion, t, e);
  }
  pointToWorld(t, e) {
    return O.pointToWorldFrame(this.position, this.quaternion, t, e);
  }
  vectorToWorldFrame(t, e) {
    return e === void 0 && (e = new a()), this.quaternion.vmult(t, e), e;
  }
  static pointToLocalFrame(t, e, s, i) {
    return (
      i === void 0 && (i = new a()),
      s.vsub(t, i),
      e.conjugate(se),
      se.vmult(i, i),
      i
    );
  }
  static pointToWorldFrame(t, e, s, i) {
    return i === void 0 && (i = new a()), e.vmult(s, i), i.vadd(t, i), i;
  }
  static vectorToWorldFrame(t, e, s) {
    return s === void 0 && (s = new a()), t.vmult(e, s), s;
  }
  static vectorToLocalFrame(t, e, s, i) {
    return (
      i === void 0 && (i = new a()), (e.w *= -1), e.vmult(s, i), (e.w *= -1), i
    );
  }
}
const se = new j();
class pt extends M {
  constructor(t) {
    t === void 0 && (t = {});
    const {
      vertices: e = [],
      faces: s = [],
      normals: i = [],
      axes: n,
      boundingSphereRadius: o,
    } = t;
    super({ type: M.types.CONVEXPOLYHEDRON }),
      (this.vertices = e),
      (this.faces = s),
      (this.faceNormals = i),
      this.faceNormals.length === 0 && this.computeNormals(),
      o ? (this.boundingSphereRadius = o) : this.updateBoundingSphereRadius(),
      (this.worldVertices = []),
      (this.worldVerticesNeedsUpdate = !0),
      (this.worldFaceNormals = []),
      (this.worldFaceNormalsNeedsUpdate = !0),
      (this.uniqueAxes = n ? n.slice() : null),
      (this.uniqueEdges = []),
      this.computeEdges();
  }
  computeEdges() {
    const t = this.faces,
      e = this.vertices,
      s = this.uniqueEdges;
    s.length = 0;
    const i = new a();
    for (let n = 0; n !== t.length; n++) {
      const o = t[n],
        r = o.length;
      for (let l = 0; l !== r; l++) {
        const c = (l + 1) % r;
        e[o[l]].vsub(e[o[c]], i), i.normalize();
        let d = !1;
        for (let p = 0; p !== s.length; p++)
          if (s[p].almostEquals(i) || s[p].almostEquals(i)) {
            d = !0;
            break;
          }
        d || s.push(i.clone());
      }
    }
  }
  computeNormals() {
    this.faceNormals.length = this.faces.length;
    for (let t = 0; t < this.faces.length; t++) {
      for (let i = 0; i < this.faces[t].length; i++)
        if (!this.vertices[this.faces[t][i]])
          throw new Error(`Vertex ${this.faces[t][i]} not found!`);
      const e = this.faceNormals[t] || new a();
      this.getFaceNormal(t, e), e.negate(e), (this.faceNormals[t] = e);
      const s = this.vertices[this.faces[t][0]];
      if (e.dot(s) < 0) {
        console.error(
          `.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`
        );
        for (let i = 0; i < this.faces[t].length; i++)
          console.warn(
            `.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[
              this.faces[t][i]
            ].toString()})`
          );
      }
    }
  }
  getFaceNormal(t, e) {
    const s = this.faces[t],
      i = this.vertices[s[0]],
      n = this.vertices[s[1]],
      o = this.vertices[s[2]];
    pt.computeNormal(i, n, o, e);
  }
  static computeNormal(t, e, s, i) {
    const n = new a(),
      o = new a();
    e.vsub(t, o), s.vsub(e, n), n.cross(o, i), i.isZero() || i.normalize();
  }
  clipAgainstHull(t, e, s, i, n, o, r, l, c) {
    const d = new a();
    let p = -1,
      h = -Number.MAX_VALUE;
    for (let u = 0; u < s.faces.length; u++) {
      d.copy(s.faceNormals[u]), n.vmult(d, d);
      const y = d.dot(o);
      y > h && ((h = y), (p = u));
    }
    const m = [];
    for (let u = 0; u < s.faces[p].length; u++) {
      const y = s.vertices[s.faces[p][u]],
        w = new a();
      w.copy(y), n.vmult(w, w), i.vadd(w, w), m.push(w);
    }
    p >= 0 && this.clipFaceAgainstHull(o, t, e, m, r, l, c);
  }
  findSeparatingAxis(t, e, s, i, n, o, r, l) {
    const c = new a(),
      d = new a(),
      p = new a(),
      h = new a(),
      m = new a(),
      u = new a();
    let y = Number.MAX_VALUE;
    const w = this;
    if (w.uniqueAxes)
      for (let v = 0; v !== w.uniqueAxes.length; v++) {
        s.vmult(w.uniqueAxes[v], c);
        const f = w.testSepAxis(c, t, e, s, i, n);
        if (f === !1) return !1;
        f < y && ((y = f), o.copy(c));
      }
    else {
      const v = r ? r.length : w.faces.length;
      for (let f = 0; f < v; f++) {
        const b = r ? r[f] : f;
        c.copy(w.faceNormals[b]), s.vmult(c, c);
        const E = w.testSepAxis(c, t, e, s, i, n);
        if (E === !1) return !1;
        E < y && ((y = E), o.copy(c));
      }
    }
    if (t.uniqueAxes)
      for (let v = 0; v !== t.uniqueAxes.length; v++) {
        n.vmult(t.uniqueAxes[v], d);
        const f = w.testSepAxis(d, t, e, s, i, n);
        if (f === !1) return !1;
        f < y && ((y = f), o.copy(d));
      }
    else {
      const v = l ? l.length : t.faces.length;
      for (let f = 0; f < v; f++) {
        const b = l ? l[f] : f;
        d.copy(t.faceNormals[b]), n.vmult(d, d);
        const E = w.testSepAxis(d, t, e, s, i, n);
        if (E === !1) return !1;
        E < y && ((y = E), o.copy(d));
      }
    }
    for (let v = 0; v !== w.uniqueEdges.length; v++) {
      s.vmult(w.uniqueEdges[v], h);
      for (let f = 0; f !== t.uniqueEdges.length; f++)
        if ((n.vmult(t.uniqueEdges[f], m), h.cross(m, u), !u.almostZero())) {
          u.normalize();
          const b = w.testSepAxis(u, t, e, s, i, n);
          if (b === !1) return !1;
          b < y && ((y = b), o.copy(u));
        }
    }
    return i.vsub(e, p), p.dot(o) > 0 && o.negate(o), !0;
  }
  testSepAxis(t, e, s, i, n, o) {
    const r = this;
    pt.project(r, t, s, i, Ht), pt.project(e, t, n, o, qt);
    const l = Ht[0],
      c = Ht[1],
      d = qt[0],
      p = qt[1];
    if (l < p || d < c) return !1;
    const h = l - p,
      m = d - c;
    return h < m ? h : m;
  }
  calculateLocalInertia(t, e) {
    const s = new a(),
      i = new a();
    this.computeLocalAABB(i, s);
    const n = s.x - i.x,
      o = s.y - i.y,
      r = s.z - i.z;
    (e.x = (1 / 12) * t * (2 * o * 2 * o + 2 * r * 2 * r)),
      (e.y = (1 / 12) * t * (2 * n * 2 * n + 2 * r * 2 * r)),
      (e.z = (1 / 12) * t * (2 * o * 2 * o + 2 * n * 2 * n));
  }
  getPlaneConstantOfFace(t) {
    const e = this.faces[t],
      s = this.faceNormals[t],
      i = this.vertices[e[0]];
    return -s.dot(i);
  }
  clipFaceAgainstHull(t, e, s, i, n, o, r) {
    const l = new a(),
      c = new a(),
      d = new a(),
      p = new a(),
      h = new a(),
      m = new a(),
      u = new a(),
      y = new a(),
      w = this,
      v = [],
      f = i,
      b = v;
    let E = -1,
      T = Number.MAX_VALUE;
    for (let B = 0; B < w.faces.length; B++) {
      l.copy(w.faceNormals[B]), s.vmult(l, l);
      const F = l.dot(t);
      F < T && ((T = F), (E = B));
    }
    if (E < 0) return;
    const k = w.faces[E];
    k.connectedFaces = [];
    for (let B = 0; B < w.faces.length; B++)
      for (let F = 0; F < w.faces[B].length; F++)
        k.indexOf(w.faces[B][F]) !== -1 &&
          B !== E &&
          k.connectedFaces.indexOf(B) === -1 &&
          k.connectedFaces.push(B);
    const N = k.length;
    for (let B = 0; B < N; B++) {
      const F = w.vertices[k[B]],
        z = w.vertices[k[(B + 1) % N]];
      F.vsub(z, c),
        d.copy(c),
        s.vmult(d, d),
        e.vadd(d, d),
        p.copy(this.faceNormals[E]),
        s.vmult(p, p),
        e.vadd(p, p),
        d.cross(p, h),
        h.negate(h),
        m.copy(F),
        s.vmult(m, m),
        e.vadd(m, m);
      const g = k.connectedFaces[B];
      u.copy(this.faceNormals[g]);
      const P = this.getPlaneConstantOfFace(g);
      y.copy(u), s.vmult(y, y);
      const S = P - y.dot(e);
      for (this.clipFaceAgainstPlane(f, b, y, S); f.length; ) f.shift();
      for (; b.length; ) f.push(b.shift());
    }
    u.copy(this.faceNormals[E]);
    const C = this.getPlaneConstantOfFace(E);
    y.copy(u), s.vmult(y, y);
    const A = C - y.dot(e);
    for (let B = 0; B < f.length; B++) {
      let F = y.dot(f[B]) + A;
      if (
        (F <= n &&
          (console.log(`clamped: depth=${F} to minDist=${n}`), (F = n)),
        F <= o)
      ) {
        const z = f[B];
        if (F <= 1e-6) {
          const g = { point: z, normal: y, depth: F };
          r.push(g);
        }
      }
    }
  }
  clipFaceAgainstPlane(t, e, s, i) {
    let n, o;
    const r = t.length;
    if (r < 2) return e;
    let l = t[t.length - 1],
      c = t[0];
    n = s.dot(l) + i;
    for (let d = 0; d < r; d++) {
      if (((c = t[d]), (o = s.dot(c) + i), n < 0))
        if (o < 0) {
          const p = new a();
          p.copy(c), e.push(p);
        } else {
          const p = new a();
          l.lerp(c, n / (n - o), p), e.push(p);
        }
      else if (o < 0) {
        const p = new a();
        l.lerp(c, n / (n - o), p), e.push(p), e.push(c);
      }
      (l = c), (n = o);
    }
    return e;
  }
  computeWorldVertices(t, e) {
    for (; this.worldVertices.length < this.vertices.length; )
      this.worldVertices.push(new a());
    const s = this.vertices,
      i = this.worldVertices;
    for (let n = 0; n !== this.vertices.length; n++)
      e.vmult(s[n], i[n]), t.vadd(i[n], i[n]);
    this.worldVerticesNeedsUpdate = !1;
  }
  computeLocalAABB(t, e) {
    const s = this.vertices;
    t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
      e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    for (let i = 0; i < this.vertices.length; i++) {
      const n = s[i];
      n.x < t.x ? (t.x = n.x) : n.x > e.x && (e.x = n.x),
        n.y < t.y ? (t.y = n.y) : n.y > e.y && (e.y = n.y),
        n.z < t.z ? (t.z = n.z) : n.z > e.z && (e.z = n.z);
    }
  }
  computeWorldFaceNormals(t) {
    const e = this.faceNormals.length;
    for (; this.worldFaceNormals.length < e; )
      this.worldFaceNormals.push(new a());
    const s = this.faceNormals,
      i = this.worldFaceNormals;
    for (let n = 0; n !== e; n++) t.vmult(s[n], i[n]);
    this.worldFaceNormalsNeedsUpdate = !1;
  }
  updateBoundingSphereRadius() {
    let t = 0;
    const e = this.vertices;
    for (let s = 0; s !== e.length; s++) {
      const i = e[s].lengthSquared();
      i > t && (t = i);
    }
    this.boundingSphereRadius = Math.sqrt(t);
  }
  calculateWorldAABB(t, e, s, i) {
    const n = this.vertices;
    let o,
      r,
      l,
      c,
      d,
      p,
      h = new a();
    for (let m = 0; m < n.length; m++) {
      h.copy(n[m]), e.vmult(h, h), t.vadd(h, h);
      const u = h;
      (o === void 0 || u.x < o) && (o = u.x),
        (c === void 0 || u.x > c) && (c = u.x),
        (r === void 0 || u.y < r) && (r = u.y),
        (d === void 0 || u.y > d) && (d = u.y),
        (l === void 0 || u.z < l) && (l = u.z),
        (p === void 0 || u.z > p) && (p = u.z);
    }
    s.set(o, r, l), i.set(c, d, p);
  }
  volume() {
    return (4 * Math.PI * this.boundingSphereRadius) / 3;
  }
  getAveragePointLocal(t) {
    t === void 0 && (t = new a());
    const e = this.vertices;
    for (let s = 0; s < e.length; s++) t.vadd(e[s], t);
    return t.scale(1 / e.length, t), t;
  }
  transformAllPoints(t, e) {
    const s = this.vertices.length,
      i = this.vertices;
    if (e) {
      for (let n = 0; n < s; n++) {
        const o = i[n];
        e.vmult(o, o);
      }
      for (let n = 0; n < this.faceNormals.length; n++) {
        const o = this.faceNormals[n];
        e.vmult(o, o);
      }
    }
    if (t)
      for (let n = 0; n < s; n++) {
        const o = i[n];
        o.vadd(t, o);
      }
  }
  pointIsInside(t) {
    const e = this.vertices,
      s = this.faces,
      i = this.faceNormals,
      n = null,
      o = new a();
    this.getAveragePointLocal(o);
    for (let r = 0; r < this.faces.length; r++) {
      let l = i[r];
      const c = e[s[r][0]],
        d = new a();
      t.vsub(c, d);
      const p = l.dot(d),
        h = new a();
      o.vsub(c, h);
      const m = l.dot(h);
      if ((p < 0 && m > 0) || (p > 0 && m < 0)) return !1;
    }
    return n ? 1 : -1;
  }
  static project(t, e, s, i, n) {
    const o = t.vertices.length,
      r = $e;
    let l = 0,
      c = 0;
    const d = Ze,
      p = t.vertices;
    d.setZero(),
      O.vectorToLocalFrame(s, i, e, r),
      O.pointToLocalFrame(s, i, d, d);
    const h = d.dot(r);
    c = l = p[0].dot(r);
    for (let m = 1; m < o; m++) {
      const u = p[m].dot(r);
      u > l && (l = u), u < c && (c = u);
    }
    if (((c -= h), (l -= h), c > l)) {
      const m = c;
      (c = l), (l = m);
    }
    (n[0] = l), (n[1] = c);
  }
}
const Ht = [],
  qt = [];
new a();
const $e = new a(),
  Ze = new a();
class Et extends M {
  constructor(t) {
    super({ type: M.types.BOX }),
      (this.halfExtents = t),
      (this.convexPolyhedronRepresentation = null),
      this.updateConvexPolyhedronRepresentation(),
      this.updateBoundingSphereRadius();
  }
  updateConvexPolyhedronRepresentation() {
    const t = this.halfExtents.x,
      e = this.halfExtents.y,
      s = this.halfExtents.z,
      i = a,
      n = [
        new i(-t, -e, -s),
        new i(t, -e, -s),
        new i(t, e, -s),
        new i(-t, e, -s),
        new i(-t, -e, s),
        new i(t, -e, s),
        new i(t, e, s),
        new i(-t, e, s),
      ],
      o = [
        [3, 2, 1, 0],
        [4, 5, 6, 7],
        [5, 4, 0, 1],
        [2, 3, 7, 6],
        [0, 4, 7, 3],
        [1, 2, 6, 5],
      ],
      r = [new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0)],
      l = new pt({ vertices: n, faces: o, axes: r });
    (this.convexPolyhedronRepresentation = l), (l.material = this.material);
  }
  calculateLocalInertia(t, e) {
    return (
      e === void 0 && (e = new a()),
      Et.calculateInertia(this.halfExtents, t, e),
      e
    );
  }
  static calculateInertia(t, e, s) {
    const i = t;
    (s.x = (1 / 12) * e * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z)),
      (s.y = (1 / 12) * e * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z)),
      (s.z = (1 / 12) * e * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x));
  }
  getSideNormals(t, e) {
    const s = t,
      i = this.halfExtents;
    if (
      (s[0].set(i.x, 0, 0),
      s[1].set(0, i.y, 0),
      s[2].set(0, 0, i.z),
      s[3].set(-i.x, 0, 0),
      s[4].set(0, -i.y, 0),
      s[5].set(0, 0, -i.z),
      e !== void 0)
    )
      for (let n = 0; n !== s.length; n++) e.vmult(s[n], s[n]);
    return s;
  }
  volume() {
    return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
  }
  updateBoundingSphereRadius() {
    this.boundingSphereRadius = this.halfExtents.length();
  }
  forEachWorldCorner(t, e, s) {
    const i = this.halfExtents,
      n = [
        [i.x, i.y, i.z],
        [-i.x, i.y, i.z],
        [-i.x, -i.y, i.z],
        [-i.x, -i.y, -i.z],
        [i.x, -i.y, -i.z],
        [i.x, i.y, -i.z],
        [-i.x, i.y, -i.z],
        [i.x, -i.y, i.z],
      ];
    for (let o = 0; o < n.length; o++)
      ot.set(n[o][0], n[o][1], n[o][2]),
        e.vmult(ot, ot),
        t.vadd(ot, ot),
        s(ot.x, ot.y, ot.z);
  }
  calculateWorldAABB(t, e, s, i) {
    const n = this.halfExtents;
    J[0].set(n.x, n.y, n.z),
      J[1].set(-n.x, n.y, n.z),
      J[2].set(-n.x, -n.y, n.z),
      J[3].set(-n.x, -n.y, -n.z),
      J[4].set(n.x, -n.y, -n.z),
      J[5].set(n.x, n.y, -n.z),
      J[6].set(-n.x, n.y, -n.z),
      J[7].set(n.x, -n.y, n.z);
    const o = J[0];
    e.vmult(o, o), t.vadd(o, o), i.copy(o), s.copy(o);
    for (let r = 1; r < 8; r++) {
      const l = J[r];
      e.vmult(l, l), t.vadd(l, l);
      const c = l.x,
        d = l.y,
        p = l.z;
      c > i.x && (i.x = c),
        d > i.y && (i.y = d),
        p > i.z && (i.z = p),
        c < s.x && (s.x = c),
        d < s.y && (s.y = d),
        p < s.z && (s.z = p);
    }
  }
}
const ot = new a(),
  J = [new a(), new a(), new a(), new a(), new a(), new a(), new a(), new a()],
  mt = { DYNAMIC: 1, STATIC: 2, KINEMATIC: 4 },
  Ut = { AWAKE: 0, SLEEPY: 1, SLEEPING: 2 };
class I extends ge {
  constructor(t) {
    t === void 0 && (t = {}),
      super(),
      (this.id = I.idCounter++),
      (this.index = -1),
      (this.world = null),
      (this.vlambda = new a()),
      (this.collisionFilterGroup =
        typeof t.collisionFilterGroup == "number" ? t.collisionFilterGroup : 1),
      (this.collisionFilterMask =
        typeof t.collisionFilterMask == "number" ? t.collisionFilterMask : -1),
      (this.collisionResponse =
        typeof t.collisionResponse == "boolean" ? t.collisionResponse : !0),
      (this.position = new a()),
      (this.previousPosition = new a()),
      (this.interpolatedPosition = new a()),
      (this.initPosition = new a()),
      t.position &&
        (this.position.copy(t.position),
        this.previousPosition.copy(t.position),
        this.interpolatedPosition.copy(t.position),
        this.initPosition.copy(t.position)),
      (this.velocity = new a()),
      t.velocity && this.velocity.copy(t.velocity),
      (this.initVelocity = new a()),
      (this.force = new a());
    const e = typeof t.mass == "number" ? t.mass : 0;
    (this.mass = e),
      (this.invMass = e > 0 ? 1 / e : 0),
      (this.material = t.material || null),
      (this.linearDamping =
        typeof t.linearDamping == "number" ? t.linearDamping : 0.01),
      (this.type = e <= 0 ? I.STATIC : I.DYNAMIC),
      typeof t.type == typeof I.STATIC && (this.type = t.type),
      (this.allowSleep = typeof t.allowSleep < "u" ? t.allowSleep : !0),
      (this.sleepState = I.AWAKE),
      (this.sleepSpeedLimit =
        typeof t.sleepSpeedLimit < "u" ? t.sleepSpeedLimit : 0.1),
      (this.sleepTimeLimit =
        typeof t.sleepTimeLimit < "u" ? t.sleepTimeLimit : 1),
      (this.timeLastSleepy = 0),
      (this.wakeUpAfterNarrowphase = !1),
      (this.torque = new a()),
      (this.quaternion = new j()),
      (this.initQuaternion = new j()),
      (this.previousQuaternion = new j()),
      (this.interpolatedQuaternion = new j()),
      t.quaternion &&
        (this.quaternion.copy(t.quaternion),
        this.initQuaternion.copy(t.quaternion),
        this.previousQuaternion.copy(t.quaternion),
        this.interpolatedQuaternion.copy(t.quaternion)),
      (this.angularVelocity = new a()),
      t.angularVelocity && this.angularVelocity.copy(t.angularVelocity),
      (this.initAngularVelocity = new a()),
      (this.shapes = []),
      (this.shapeOffsets = []),
      (this.shapeOrientations = []),
      (this.inertia = new a()),
      (this.invInertia = new a()),
      (this.invInertiaWorld = new Z()),
      (this.invMassSolve = 0),
      (this.invInertiaSolve = new a()),
      (this.invInertiaWorldSolve = new Z()),
      (this.fixedRotation =
        typeof t.fixedRotation < "u" ? t.fixedRotation : !1),
      (this.angularDamping =
        typeof t.angularDamping < "u" ? t.angularDamping : 0.01),
      (this.linearFactor = new a(1, 1, 1)),
      t.linearFactor && this.linearFactor.copy(t.linearFactor),
      (this.angularFactor = new a(1, 1, 1)),
      t.angularFactor && this.angularFactor.copy(t.angularFactor),
      (this.aabb = new K()),
      (this.aabbNeedsUpdate = !0),
      (this.boundingRadius = 0),
      (this.wlambda = new a()),
      (this.isTrigger = Boolean(t.isTrigger)),
      t.shape && this.addShape(t.shape),
      this.updateMassProperties();
  }
  wakeUp() {
    const t = this.sleepState;
    (this.sleepState = I.AWAKE),
      (this.wakeUpAfterNarrowphase = !1),
      t === I.SLEEPING && this.dispatchEvent(I.wakeupEvent);
  }
  sleep() {
    (this.sleepState = I.SLEEPING),
      this.velocity.set(0, 0, 0),
      this.angularVelocity.set(0, 0, 0),
      (this.wakeUpAfterNarrowphase = !1);
  }
  sleepTick(t) {
    if (this.allowSleep) {
      const e = this.sleepState,
        s =
          this.velocity.lengthSquared() + this.angularVelocity.lengthSquared(),
        i = this.sleepSpeedLimit ** 2;
      e === I.AWAKE && s < i
        ? ((this.sleepState = I.SLEEPY),
          (this.timeLastSleepy = t),
          this.dispatchEvent(I.sleepyEvent))
        : e === I.SLEEPY && s > i
        ? this.wakeUp()
        : e === I.SLEEPY &&
          t - this.timeLastSleepy > this.sleepTimeLimit &&
          (this.sleep(), this.dispatchEvent(I.sleepEvent));
    }
  }
  updateSolveMassProperties() {
    this.sleepState === I.SLEEPING || this.type === I.KINEMATIC
      ? ((this.invMassSolve = 0),
        this.invInertiaSolve.setZero(),
        this.invInertiaWorldSolve.setZero())
      : ((this.invMassSolve = this.invMass),
        this.invInertiaSolve.copy(this.invInertia),
        this.invInertiaWorldSolve.copy(this.invInertiaWorld));
  }
  pointToLocalFrame(t, e) {
    return (
      e === void 0 && (e = new a()),
      t.vsub(this.position, e),
      this.quaternion.conjugate().vmult(e, e),
      e
    );
  }
  vectorToLocalFrame(t, e) {
    return (
      e === void 0 && (e = new a()), this.quaternion.conjugate().vmult(t, e), e
    );
  }
  pointToWorldFrame(t, e) {
    return (
      e === void 0 && (e = new a()),
      this.quaternion.vmult(t, e),
      e.vadd(this.position, e),
      e
    );
  }
  vectorToWorldFrame(t, e) {
    return e === void 0 && (e = new a()), this.quaternion.vmult(t, e), e;
  }
  addShape(t, e, s) {
    const i = new a(),
      n = new j();
    return (
      e && i.copy(e),
      s && n.copy(s),
      this.shapes.push(t),
      this.shapeOffsets.push(i),
      this.shapeOrientations.push(n),
      this.updateMassProperties(),
      this.updateBoundingRadius(),
      (this.aabbNeedsUpdate = !0),
      (t.body = this),
      this
    );
  }
  removeShape(t) {
    const e = this.shapes.indexOf(t);
    return e === -1
      ? (console.warn("Shape does not belong to the body"), this)
      : (this.shapes.splice(e, 1),
        this.shapeOffsets.splice(e, 1),
        this.shapeOrientations.splice(e, 1),
        this.updateMassProperties(),
        this.updateBoundingRadius(),
        (this.aabbNeedsUpdate = !0),
        (t.body = null),
        this);
  }
  updateBoundingRadius() {
    const t = this.shapes,
      e = this.shapeOffsets,
      s = t.length;
    let i = 0;
    for (let n = 0; n !== s; n++) {
      const o = t[n];
      o.updateBoundingSphereRadius();
      const r = e[n].length(),
        l = o.boundingSphereRadius;
      r + l > i && (i = r + l);
    }
    this.boundingRadius = i;
  }
  updateAABB() {
    const t = this.shapes,
      e = this.shapeOffsets,
      s = this.shapeOrientations,
      i = t.length,
      n = Je,
      o = Qe,
      r = this.quaternion,
      l = this.aabb,
      c = ts;
    for (let d = 0; d !== i; d++) {
      const p = t[d];
      r.vmult(e[d], n),
        n.vadd(this.position, n),
        r.mult(s[d], o),
        p.calculateWorldAABB(n, o, c.lowerBound, c.upperBound),
        d === 0 ? l.copy(c) : l.extend(c);
    }
    this.aabbNeedsUpdate = !1;
  }
  updateInertiaWorld(t) {
    const e = this.invInertia;
    if (!(e.x === e.y && e.y === e.z && !t)) {
      const s = es,
        i = ss;
      s.setRotationFromQuaternion(this.quaternion),
        s.transpose(i),
        s.scale(e, s),
        s.mmult(i, this.invInertiaWorld);
    }
  }
  applyForce(t, e) {
    if ((e === void 0 && (e = new a()), this.type !== I.DYNAMIC)) return;
    this.sleepState === I.SLEEPING && this.wakeUp();
    const s = is;
    e.cross(t, s),
      this.force.vadd(t, this.force),
      this.torque.vadd(s, this.torque);
  }
  applyLocalForce(t, e) {
    if ((e === void 0 && (e = new a()), this.type !== I.DYNAMIC)) return;
    const s = ns,
      i = os;
    this.vectorToWorldFrame(t, s),
      this.vectorToWorldFrame(e, i),
      this.applyForce(s, i);
  }
  applyTorque(t) {
    this.type === I.DYNAMIC &&
      (this.sleepState === I.SLEEPING && this.wakeUp(),
      this.torque.vadd(t, this.torque));
  }
  applyImpulse(t, e) {
    if ((e === void 0 && (e = new a()), this.type !== I.DYNAMIC)) return;
    this.sleepState === I.SLEEPING && this.wakeUp();
    const s = e,
      i = rs;
    i.copy(t), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity);
    const n = as;
    s.cross(t, n),
      this.invInertiaWorld.vmult(n, n),
      this.angularVelocity.vadd(n, this.angularVelocity);
  }
  applyLocalImpulse(t, e) {
    if ((e === void 0 && (e = new a()), this.type !== I.DYNAMIC)) return;
    const s = ls,
      i = cs;
    this.vectorToWorldFrame(t, s),
      this.vectorToWorldFrame(e, i),
      this.applyImpulse(s, i);
  }
  updateMassProperties() {
    const t = hs;
    this.invMass = this.mass > 0 ? 1 / this.mass : 0;
    const e = this.inertia,
      s = this.fixedRotation;
    this.updateAABB(),
      t.set(
        (this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2,
        (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2,
        (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2
      ),
      Et.calculateInertia(t, this.mass, e),
      this.invInertia.set(
        e.x > 0 && !s ? 1 / e.x : 0,
        e.y > 0 && !s ? 1 / e.y : 0,
        e.z > 0 && !s ? 1 / e.z : 0
      ),
      this.updateInertiaWorld(!0);
  }
  getVelocityAtWorldPoint(t, e) {
    const s = new a();
    return (
      t.vsub(this.position, s),
      this.angularVelocity.cross(s, e),
      this.velocity.vadd(e, e),
      e
    );
  }
  integrate(t, e, s) {
    if (
      (this.previousPosition.copy(this.position),
      this.previousQuaternion.copy(this.quaternion),
      !(this.type === I.DYNAMIC || this.type === I.KINEMATIC) ||
        this.sleepState === I.SLEEPING)
    )
      return;
    const i = this.velocity,
      n = this.angularVelocity,
      o = this.position,
      r = this.force,
      l = this.torque,
      c = this.quaternion,
      d = this.invMass,
      p = this.invInertiaWorld,
      h = this.linearFactor,
      m = d * t;
    (i.x += r.x * m * h.x), (i.y += r.y * m * h.y), (i.z += r.z * m * h.z);
    const u = p.elements,
      y = this.angularFactor,
      w = l.x * y.x,
      v = l.y * y.y,
      f = l.z * y.z;
    (n.x += t * (u[0] * w + u[1] * v + u[2] * f)),
      (n.y += t * (u[3] * w + u[4] * v + u[5] * f)),
      (n.z += t * (u[6] * w + u[7] * v + u[8] * f)),
      (o.x += i.x * t),
      (o.y += i.y * t),
      (o.z += i.z * t),
      c.integrate(this.angularVelocity, t, this.angularFactor, c),
      e && (s ? c.normalizeFast() : c.normalize()),
      (this.aabbNeedsUpdate = !0),
      this.updateInertiaWorld();
  }
}
I.idCounter = 0;
I.COLLIDE_EVENT_NAME = "collide";
I.DYNAMIC = mt.DYNAMIC;
I.STATIC = mt.STATIC;
I.KINEMATIC = mt.KINEMATIC;
I.AWAKE = Ut.AWAKE;
I.SLEEPY = Ut.SLEEPY;
I.SLEEPING = Ut.SLEEPING;
I.wakeupEvent = { type: "wakeup" };
I.sleepyEvent = { type: "sleepy" };
I.sleepEvent = { type: "sleep" };
const Je = new a(),
  Qe = new j(),
  ts = new K(),
  es = new Z(),
  ss = new Z();
new Z();
const is = new a(),
  ns = new a(),
  os = new a(),
  rs = new a(),
  as = new a(),
  ls = new a(),
  cs = new a(),
  hs = new a();
class ds {
  constructor() {
    (this.world = null), (this.useBoundingBoxes = !1), (this.dirty = !0);
  }
  collisionPairs(t, e, s) {
    throw new Error(
      "collisionPairs not implemented for this BroadPhase class!"
    );
  }
  needBroadphaseCollision(t, e) {
    return !(
      !(t.collisionFilterGroup & e.collisionFilterMask) ||
      !(e.collisionFilterGroup & t.collisionFilterMask) ||
      ((t.type & I.STATIC || t.sleepState === I.SLEEPING) &&
        (e.type & I.STATIC || e.sleepState === I.SLEEPING))
    );
  }
  intersectionTest(t, e, s, i) {
    this.useBoundingBoxes
      ? this.doBoundingBoxBroadphase(t, e, s, i)
      : this.doBoundingSphereBroadphase(t, e, s, i);
  }
  doBoundingSphereBroadphase(t, e, s, i) {
    const n = us;
    e.position.vsub(t.position, n);
    const o = (t.boundingRadius + e.boundingRadius) ** 2;
    n.lengthSquared() < o && (s.push(t), i.push(e));
  }
  doBoundingBoxBroadphase(t, e, s, i) {
    t.aabbNeedsUpdate && t.updateAABB(),
      e.aabbNeedsUpdate && e.updateAABB(),
      t.aabb.overlaps(e.aabb) && (s.push(t), i.push(e));
  }
  makePairsUnique(t, e) {
    const s = ps,
      i = ms,
      n = fs,
      o = t.length;
    for (let r = 0; r !== o; r++) (i[r] = t[r]), (n[r] = e[r]);
    (t.length = 0), (e.length = 0);
    for (let r = 0; r !== o; r++) {
      const l = i[r].id,
        c = n[r].id,
        d = l < c ? `${l},${c}` : `${c},${l}`;
      (s[d] = r), s.keys.push(d);
    }
    for (let r = 0; r !== s.keys.length; r++) {
      const l = s.keys.pop(),
        c = s[l];
      t.push(i[c]), e.push(n[c]), delete s[l];
    }
  }
  setWorld(t) {}
  static boundingSphereCheck(t, e) {
    const s = new a();
    t.position.vsub(e.position, s);
    const i = t.shapes[0],
      n = e.shapes[0];
    return (
      Math.pow(i.boundingSphereRadius + n.boundingSphereRadius, 2) >
      s.lengthSquared()
    );
  }
  aabbQuery(t, e, s) {
    return (
      console.warn(
        ".aabbQuery is not implemented in this Broadphase subclass."
      ),
      []
    );
  }
}
const us = new a();
new a();
new j();
new a();
const ps = { keys: [] },
  ms = [],
  fs = [];
new a();
new a();
new a();
class ys extends ds {
  constructor() {
    super();
  }
  collisionPairs(t, e, s) {
    const i = t.bodies,
      n = i.length;
    let o, r;
    for (let l = 0; l !== n; l++)
      for (let c = 0; c !== l; c++)
        (o = i[l]),
          (r = i[c]),
          this.needBroadphaseCollision(o, r) &&
            this.intersectionTest(o, r, e, s);
  }
  aabbQuery(t, e, s) {
    s === void 0 && (s = []);
    for (let i = 0; i < t.bodies.length; i++) {
      const n = t.bodies[i];
      n.aabbNeedsUpdate && n.updateAABB(), n.aabb.overlaps(e) && s.push(n);
    }
    return s;
  }
}
class zt {
  constructor() {
    (this.rayFromWorld = new a()),
      (this.rayToWorld = new a()),
      (this.hitNormalWorld = new a()),
      (this.hitPointWorld = new a()),
      (this.hasHit = !1),
      (this.shape = null),
      (this.body = null),
      (this.hitFaceIndex = -1),
      (this.distance = -1),
      (this.shouldStop = !1);
  }
  reset() {
    this.rayFromWorld.setZero(),
      this.rayToWorld.setZero(),
      this.hitNormalWorld.setZero(),
      this.hitPointWorld.setZero(),
      (this.hasHit = !1),
      (this.shape = null),
      (this.body = null),
      (this.hitFaceIndex = -1),
      (this.distance = -1),
      (this.shouldStop = !1);
  }
  abort() {
    this.shouldStop = !0;
  }
  set(t, e, s, i, n, o, r) {
    this.rayFromWorld.copy(t),
      this.rayToWorld.copy(e),
      this.hitNormalWorld.copy(s),
      this.hitPointWorld.copy(i),
      (this.shape = n),
      (this.body = o),
      (this.distance = r);
  }
}
let xe, be, Ee, Ce, Ae, Se, Te;
const Yt = { CLOSEST: 1, ANY: 2, ALL: 4 };
xe = M.types.SPHERE;
be = M.types.PLANE;
Ee = M.types.BOX;
Ce = M.types.CYLINDER;
Ae = M.types.CONVEXPOLYHEDRON;
Se = M.types.HEIGHTFIELD;
Te = M.types.TRIMESH;
class W {
  get [xe]() {
    return this._intersectSphere;
  }
  get [be]() {
    return this._intersectPlane;
  }
  get [Ee]() {
    return this._intersectBox;
  }
  get [Ce]() {
    return this._intersectConvex;
  }
  get [Ae]() {
    return this._intersectConvex;
  }
  get [Se]() {
    return this._intersectHeightfield;
  }
  get [Te]() {
    return this._intersectTrimesh;
  }
  constructor(t, e) {
    t === void 0 && (t = new a()),
      e === void 0 && (e = new a()),
      (this.from = t.clone()),
      (this.to = e.clone()),
      (this.direction = new a()),
      (this.precision = 1e-4),
      (this.checkCollisionResponse = !0),
      (this.skipBackfaces = !1),
      (this.collisionFilterMask = -1),
      (this.collisionFilterGroup = -1),
      (this.mode = W.ANY),
      (this.result = new zt()),
      (this.hasHit = !1),
      (this.callback = (s) => {});
  }
  intersectWorld(t, e) {
    return (
      (this.mode = e.mode || W.ANY),
      (this.result = e.result || new zt()),
      (this.skipBackfaces = !!e.skipBackfaces),
      (this.collisionFilterMask =
        typeof e.collisionFilterMask < "u" ? e.collisionFilterMask : -1),
      (this.collisionFilterGroup =
        typeof e.collisionFilterGroup < "u" ? e.collisionFilterGroup : -1),
      (this.checkCollisionResponse =
        typeof e.checkCollisionResponse < "u" ? e.checkCollisionResponse : !0),
      e.from && this.from.copy(e.from),
      e.to && this.to.copy(e.to),
      (this.callback = e.callback || (() => {})),
      (this.hasHit = !1),
      this.result.reset(),
      this.updateDirection(),
      this.getAABB(ie),
      (Ot.length = 0),
      t.broadphase.aabbQuery(t, ie, Ot),
      this.intersectBodies(Ot),
      this.hasHit
    );
  }
  intersectBody(t, e) {
    e && ((this.result = e), this.updateDirection());
    const s = this.checkCollisionResponse;
    if (
      (s && !t.collisionResponse) ||
      !(this.collisionFilterGroup & t.collisionFilterMask) ||
      !(t.collisionFilterGroup & this.collisionFilterMask)
    )
      return;
    const i = ws,
      n = vs;
    for (let o = 0, r = t.shapes.length; o < r; o++) {
      const l = t.shapes[o];
      if (
        !(s && !l.collisionResponse) &&
        (t.quaternion.mult(t.shapeOrientations[o], n),
        t.quaternion.vmult(t.shapeOffsets[o], i),
        i.vadd(t.position, i),
        this.intersectShape(l, n, i, t),
        this.result.shouldStop)
      )
        break;
    }
  }
  intersectBodies(t, e) {
    e && ((this.result = e), this.updateDirection());
    for (let s = 0, i = t.length; !this.result.shouldStop && s < i; s++)
      this.intersectBody(t[s]);
  }
  updateDirection() {
    this.to.vsub(this.from, this.direction), this.direction.normalize();
  }
  intersectShape(t, e, s, i) {
    const n = this.from;
    if (Is(n, this.direction, s) > t.boundingSphereRadius) return;
    const r = this[t.type];
    r && r.call(this, t, e, s, i, t);
  }
  _intersectBox(t, e, s, i, n) {
    return this._intersectConvex(t.convexPolyhedronRepresentation, e, s, i, n);
  }
  _intersectPlane(t, e, s, i, n) {
    const o = this.from,
      r = this.to,
      l = this.direction,
      c = new a(0, 0, 1);
    e.vmult(c, c);
    const d = new a();
    o.vsub(s, d);
    const p = d.dot(c);
    r.vsub(s, d);
    const h = d.dot(c);
    if (p * h > 0 || o.distanceTo(r) < p) return;
    const m = c.dot(l);
    if (Math.abs(m) < this.precision) return;
    const u = new a(),
      y = new a(),
      w = new a();
    o.vsub(s, u);
    const v = -c.dot(u) / m;
    l.scale(v, y), o.vadd(y, w), this.reportIntersection(c, w, n, i, -1);
  }
  getAABB(t) {
    const { lowerBound: e, upperBound: s } = t,
      i = this.to,
      n = this.from;
    (e.x = Math.min(i.x, n.x)),
      (e.y = Math.min(i.y, n.y)),
      (e.z = Math.min(i.z, n.z)),
      (s.x = Math.max(i.x, n.x)),
      (s.y = Math.max(i.y, n.y)),
      (s.z = Math.max(i.z, n.z));
  }
  _intersectHeightfield(t, e, s, i, n) {
    t.data, t.elementSize;
    const o = gs;
    o.from.copy(this.from),
      o.to.copy(this.to),
      O.pointToLocalFrame(s, e, o.from, o.from),
      O.pointToLocalFrame(s, e, o.to, o.to),
      o.updateDirection();
    const r = xs;
    let l, c, d, p;
    (l = c = 0), (d = p = t.data.length - 1);
    const h = new K();
    o.getAABB(h),
      t.getIndexOfPosition(h.lowerBound.x, h.lowerBound.y, r, !0),
      (l = Math.max(l, r[0])),
      (c = Math.max(c, r[1])),
      t.getIndexOfPosition(h.upperBound.x, h.upperBound.y, r, !0),
      (d = Math.min(d, r[0] + 1)),
      (p = Math.min(p, r[1] + 1));
    for (let m = l; m < d; m++)
      for (let u = c; u < p; u++) {
        if (this.result.shouldStop) return;
        if ((t.getAabbAtIndex(m, u, h), !!h.overlapsRay(o))) {
          if (
            (t.getConvexTrianglePillar(m, u, !1),
            O.pointToWorldFrame(s, e, t.pillarOffset, St),
            this._intersectConvex(t.pillarConvex, e, St, i, n, ne),
            this.result.shouldStop)
          )
            return;
          t.getConvexTrianglePillar(m, u, !0),
            O.pointToWorldFrame(s, e, t.pillarOffset, St),
            this._intersectConvex(t.pillarConvex, e, St, i, n, ne);
        }
      }
  }
  _intersectSphere(t, e, s, i, n) {
    const o = this.from,
      r = this.to,
      l = t.radius,
      c = (r.x - o.x) ** 2 + (r.y - o.y) ** 2 + (r.z - o.z) ** 2,
      d =
        2 *
        ((r.x - o.x) * (o.x - s.x) +
          (r.y - o.y) * (o.y - s.y) +
          (r.z - o.z) * (o.z - s.z)),
      p = (o.x - s.x) ** 2 + (o.y - s.y) ** 2 + (o.z - s.z) ** 2 - l ** 2,
      h = d ** 2 - 4 * c * p,
      m = bs,
      u = Es;
    if (!(h < 0))
      if (h === 0)
        o.lerp(r, h, m),
          m.vsub(s, u),
          u.normalize(),
          this.reportIntersection(u, m, n, i, -1);
      else {
        const y = (-d - Math.sqrt(h)) / (2 * c),
          w = (-d + Math.sqrt(h)) / (2 * c);
        if (
          (y >= 0 &&
            y <= 1 &&
            (o.lerp(r, y, m),
            m.vsub(s, u),
            u.normalize(),
            this.reportIntersection(u, m, n, i, -1)),
          this.result.shouldStop)
        )
          return;
        w >= 0 &&
          w <= 1 &&
          (o.lerp(r, w, m),
          m.vsub(s, u),
          u.normalize(),
          this.reportIntersection(u, m, n, i, -1));
      }
  }
  _intersectConvex(t, e, s, i, n, o) {
    const r = Cs,
      l = oe,
      c = (o && o.faceList) || null,
      d = t.faces,
      p = t.vertices,
      h = t.faceNormals,
      m = this.direction,
      u = this.from,
      y = this.to,
      w = u.distanceTo(y),
      v = c ? c.length : d.length,
      f = this.result;
    for (let b = 0; !f.shouldStop && b < v; b++) {
      const E = c ? c[b] : b,
        T = d[E],
        k = h[E],
        N = e,
        C = s;
      l.copy(p[T[0]]), N.vmult(l, l), l.vadd(C, l), l.vsub(u, l), N.vmult(k, r);
      const A = m.dot(r);
      if (Math.abs(A) < this.precision) continue;
      const B = r.dot(l) / A;
      if (!(B < 0)) {
        m.scale(B, Y),
          Y.vadd(u, Y),
          X.copy(p[T[0]]),
          N.vmult(X, X),
          C.vadd(X, X);
        for (let F = 1; !f.shouldStop && F < T.length - 1; F++) {
          Q.copy(p[T[F]]),
            tt.copy(p[T[F + 1]]),
            N.vmult(Q, Q),
            N.vmult(tt, tt),
            C.vadd(Q, Q),
            C.vadd(tt, tt);
          const z = Y.distanceTo(u);
          !(W.pointInTriangle(Y, X, Q, tt) || W.pointInTriangle(Y, Q, X, tt)) ||
            z > w ||
            this.reportIntersection(r, Y, n, i, E);
        }
      }
    }
  }
  _intersectTrimesh(t, e, s, i, n, o) {
    const r = As,
      l = Ms,
      c = zs,
      d = oe,
      p = Ss,
      h = Ts,
      m = Ps,
      u = Bs,
      y = ks,
      w = t.indices;
    t.vertices;
    const v = this.from,
      f = this.to,
      b = this.direction;
    c.position.copy(s),
      c.quaternion.copy(e),
      O.vectorToLocalFrame(s, e, b, p),
      O.pointToLocalFrame(s, e, v, h),
      O.pointToLocalFrame(s, e, f, m),
      (m.x *= t.scale.x),
      (m.y *= t.scale.y),
      (m.z *= t.scale.z),
      (h.x *= t.scale.x),
      (h.y *= t.scale.y),
      (h.z *= t.scale.z),
      m.vsub(h, p),
      p.normalize();
    const E = h.distanceSquared(m);
    t.tree.rayQuery(this, c, l);
    for (let T = 0, k = l.length; !this.result.shouldStop && T !== k; T++) {
      const N = l[T];
      t.getNormal(N, r), t.getVertex(w[N * 3], X), X.vsub(h, d);
      const C = p.dot(r),
        A = r.dot(d) / C;
      if (A < 0) continue;
      p.scale(A, Y),
        Y.vadd(h, Y),
        t.getVertex(w[N * 3 + 1], Q),
        t.getVertex(w[N * 3 + 2], tt);
      const B = Y.distanceSquared(h);
      !(W.pointInTriangle(Y, Q, X, tt) || W.pointInTriangle(Y, X, Q, tt)) ||
        B > E ||
        (O.vectorToWorldFrame(e, r, y),
        O.pointToWorldFrame(s, e, Y, u),
        this.reportIntersection(y, u, n, i, N));
    }
    l.length = 0;
  }
  reportIntersection(t, e, s, i, n) {
    const o = this.from,
      r = this.to,
      l = o.distanceTo(e),
      c = this.result;
    if (!(this.skipBackfaces && t.dot(this.direction) > 0))
      switch (((c.hitFaceIndex = typeof n < "u" ? n : -1), this.mode)) {
        case W.ALL:
          (this.hasHit = !0),
            c.set(o, r, t, e, s, i, l),
            (c.hasHit = !0),
            this.callback(c);
          break;
        case W.CLOSEST:
          (l < c.distance || !c.hasHit) &&
            ((this.hasHit = !0), (c.hasHit = !0), c.set(o, r, t, e, s, i, l));
          break;
        case W.ANY:
          (this.hasHit = !0),
            (c.hasHit = !0),
            c.set(o, r, t, e, s, i, l),
            (c.shouldStop = !0);
          break;
      }
  }
  static pointInTriangle(t, e, s, i) {
    i.vsub(e, at), s.vsub(e, yt), t.vsub(e, _t);
    const n = at.dot(at),
      o = at.dot(yt),
      r = at.dot(_t),
      l = yt.dot(yt),
      c = yt.dot(_t);
    let d, p;
    return (
      (d = l * r - o * c) >= 0 &&
      (p = n * c - o * r) >= 0 &&
      d + p < n * l - o * o
    );
  }
}
W.CLOSEST = Yt.CLOSEST;
W.ANY = Yt.ANY;
W.ALL = Yt.ALL;
const ie = new K(),
  Ot = [],
  yt = new a(),
  _t = new a(),
  ws = new a(),
  vs = new j(),
  Y = new a(),
  X = new a(),
  Q = new a(),
  tt = new a();
new a();
new zt();
const ne = { faceList: [0] },
  St = new a(),
  gs = new W(),
  xs = [],
  bs = new a(),
  Es = new a(),
  Cs = new a();
new a();
new a();
const oe = new a(),
  As = new a(),
  Ss = new a(),
  Ts = new a(),
  Ps = new a(),
  ks = new a(),
  Bs = new a();
new K();
const Ms = [],
  zs = new O(),
  at = new a(),
  Tt = new a();
function Is(R, t, e) {
  e.vsub(R, at);
  const s = at.dot(t);
  return t.scale(s, Tt), Tt.vadd(R, Tt), e.distanceTo(Tt);
}
class Ns {
  static defaults(t, e) {
    t === void 0 && (t = {});
    for (let s in e) s in t || (t[s] = e[s]);
    return t;
  }
}
class re {
  constructor() {
    (this.spatial = new a()), (this.rotational = new a());
  }
  multiplyElement(t) {
    return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational);
  }
  multiplyVectors(t, e) {
    return t.dot(this.spatial) + e.dot(this.rotational);
  }
}
class Ct {
  constructor(t, e, s, i) {
    s === void 0 && (s = -1e6),
      i === void 0 && (i = 1e6),
      (this.id = Ct.idCounter++),
      (this.minForce = s),
      (this.maxForce = i),
      (this.bi = t),
      (this.bj = e),
      (this.a = 0),
      (this.b = 0),
      (this.eps = 0),
      (this.jacobianElementA = new re()),
      (this.jacobianElementB = new re()),
      (this.enabled = !0),
      (this.multiplier = 0),
      this.setSpookParams(1e7, 4, 1 / 60);
  }
  setSpookParams(t, e, s) {
    const i = e,
      n = t,
      o = s;
    (this.a = 4 / (o * (1 + 4 * i))),
      (this.b = (4 * i) / (1 + 4 * i)),
      (this.eps = 4 / (o * o * n * (1 + 4 * i)));
  }
  computeB(t, e, s) {
    const i = this.computeGW(),
      n = this.computeGq(),
      o = this.computeGiMf();
    return -n * t - i * e - o * s;
  }
  computeGq() {
    const t = this.jacobianElementA,
      e = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      n = s.position,
      o = i.position;
    return t.spatial.dot(n) + e.spatial.dot(o);
  }
  computeGW() {
    const t = this.jacobianElementA,
      e = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      n = s.velocity,
      o = i.velocity,
      r = s.angularVelocity,
      l = i.angularVelocity;
    return t.multiplyVectors(n, r) + e.multiplyVectors(o, l);
  }
  computeGWlambda() {
    const t = this.jacobianElementA,
      e = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      n = s.vlambda,
      o = i.vlambda,
      r = s.wlambda,
      l = i.wlambda;
    return t.multiplyVectors(n, r) + e.multiplyVectors(o, l);
  }
  computeGiMf() {
    const t = this.jacobianElementA,
      e = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      n = s.force,
      o = s.torque,
      r = i.force,
      l = i.torque,
      c = s.invMassSolve,
      d = i.invMassSolve;
    return (
      n.scale(c, ae),
      r.scale(d, le),
      s.invInertiaWorldSolve.vmult(o, ce),
      i.invInertiaWorldSolve.vmult(l, he),
      t.multiplyVectors(ae, ce) + e.multiplyVectors(le, he)
    );
  }
  computeGiMGt() {
    const t = this.jacobianElementA,
      e = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      n = s.invMassSolve,
      o = i.invMassSolve,
      r = s.invInertiaWorldSolve,
      l = i.invInertiaWorldSolve;
    let c = n + o;
    return (
      r.vmult(t.rotational, Pt),
      (c += Pt.dot(t.rotational)),
      l.vmult(e.rotational, Pt),
      (c += Pt.dot(e.rotational)),
      c
    );
  }
  addToWlambda(t) {
    const e = this.jacobianElementA,
      s = this.jacobianElementB,
      i = this.bi,
      n = this.bj,
      o = Fs;
    i.vlambda.addScaledVector(i.invMassSolve * t, e.spatial, i.vlambda),
      n.vlambda.addScaledVector(n.invMassSolve * t, s.spatial, n.vlambda),
      i.invInertiaWorldSolve.vmult(e.rotational, o),
      i.wlambda.addScaledVector(t, o, i.wlambda),
      n.invInertiaWorldSolve.vmult(s.rotational, o),
      n.wlambda.addScaledVector(t, o, n.wlambda);
  }
  computeC() {
    return this.computeGiMGt() + this.eps;
  }
}
Ct.idCounter = 0;
const ae = new a(),
  le = new a(),
  ce = new a(),
  he = new a(),
  Pt = new a(),
  Fs = new a();
class Rs extends Ct {
  constructor(t, e, s) {
    s === void 0 && (s = 1e6),
      super(t, e, 0, s),
      (this.restitution = 0),
      (this.ri = new a()),
      (this.rj = new a()),
      (this.ni = new a());
  }
  computeB(t) {
    const e = this.a,
      s = this.b,
      i = this.bi,
      n = this.bj,
      o = this.ri,
      r = this.rj,
      l = Gs,
      c = Ls,
      d = i.velocity,
      p = i.angularVelocity;
    i.force, i.torque;
    const h = n.velocity,
      m = n.angularVelocity;
    n.force, n.torque;
    const u = Hs,
      y = this.jacobianElementA,
      w = this.jacobianElementB,
      v = this.ni;
    o.cross(v, l),
      r.cross(v, c),
      v.negate(y.spatial),
      l.negate(y.rotational),
      w.spatial.copy(v),
      w.rotational.copy(c),
      u.copy(n.position),
      u.vadd(r, u),
      u.vsub(i.position, u),
      u.vsub(o, u);
    const f = v.dot(u),
      b = this.restitution + 1,
      E = b * h.dot(v) - b * d.dot(v) + m.dot(c) - p.dot(l),
      T = this.computeGiMf();
    return -f * e - E * s - t * T;
  }
  getImpactVelocityAlongNormal() {
    const t = qs,
      e = Os,
      s = _s,
      i = js,
      n = Ws;
    return (
      this.bi.position.vadd(this.ri, s),
      this.bj.position.vadd(this.rj, i),
      this.bi.getVelocityAtWorldPoint(s, t),
      this.bj.getVelocityAtWorldPoint(i, e),
      t.vsub(e, n),
      this.ni.dot(n)
    );
  }
}
const Gs = new a(),
  Ls = new a(),
  Hs = new a(),
  qs = new a(),
  Os = new a(),
  _s = new a(),
  js = new a(),
  Ws = new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
class de extends Ct {
  constructor(t, e, s) {
    super(t, e, -s, s),
      (this.ri = new a()),
      (this.rj = new a()),
      (this.t = new a());
  }
  computeB(t) {
    this.a;
    const e = this.b;
    this.bi, this.bj;
    const s = this.ri,
      i = this.rj,
      n = Vs,
      o = Ds,
      r = this.t;
    s.cross(r, n), i.cross(r, o);
    const l = this.jacobianElementA,
      c = this.jacobianElementB;
    r.negate(l.spatial),
      n.negate(l.rotational),
      c.spatial.copy(r),
      c.rotational.copy(o);
    const d = this.computeGW(),
      p = this.computeGiMf();
    return -d * e - t * p;
  }
}
const Vs = new a(),
  Ds = new a();
class It {
  constructor(t, e, s) {
    (s = Ns.defaults(s, {
      friction: 0.3,
      restitution: 0.3,
      contactEquationStiffness: 1e7,
      contactEquationRelaxation: 3,
      frictionEquationStiffness: 1e7,
      frictionEquationRelaxation: 3,
    })),
      (this.id = It.idCounter++),
      (this.materials = [t, e]),
      (this.friction = s.friction),
      (this.restitution = s.restitution),
      (this.contactEquationStiffness = s.contactEquationStiffness),
      (this.contactEquationRelaxation = s.contactEquationRelaxation),
      (this.frictionEquationStiffness = s.frictionEquationStiffness),
      (this.frictionEquationRelaxation = s.frictionEquationRelaxation);
  }
}
It.idCounter = 0;
class Nt {
  constructor(t) {
    t === void 0 && (t = {});
    let e = "";
    typeof t == "string" && ((e = t), (t = {})),
      (this.name = e),
      (this.id = Nt.idCounter++),
      (this.friction = typeof t.friction < "u" ? t.friction : -1),
      (this.restitution = typeof t.restitution < "u" ? t.restitution : -1);
  }
}
Nt.idCounter = 0;
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new W();
new a();
new a();
new a();
new a(1, 0, 0), new a(0, 1, 0), new a(0, 0, 1);
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
class Us extends M {
  constructor(t) {
    if (
      (super({ type: M.types.SPHERE }),
      (this.radius = t !== void 0 ? t : 1),
      this.radius < 0)
    )
      throw new Error("The sphere radius cannot be negative.");
    this.updateBoundingSphereRadius();
  }
  calculateLocalInertia(t, e) {
    e === void 0 && (e = new a());
    const s = (2 * t * this.radius * this.radius) / 5;
    return (e.x = s), (e.y = s), (e.z = s), e;
  }
  volume() {
    return (4 * Math.PI * Math.pow(this.radius, 3)) / 3;
  }
  updateBoundingSphereRadius() {
    this.boundingSphereRadius = this.radius;
  }
  calculateWorldAABB(t, e, s, i) {
    const n = this.radius,
      o = ["x", "y", "z"];
    for (let r = 0; r < o.length; r++) {
      const l = o[r];
      (s[l] = t[l] - n), (i[l] = t[l] + n);
    }
  }
}
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
class Ys extends pt {
  constructor(t, e, s, i) {
    if (
      (t === void 0 && (t = 1),
      e === void 0 && (e = 1),
      s === void 0 && (s = 1),
      i === void 0 && (i = 8),
      t < 0)
    )
      throw new Error("The cylinder radiusTop cannot be negative.");
    if (e < 0) throw new Error("The cylinder radiusBottom cannot be negative.");
    const n = i,
      o = [],
      r = [],
      l = [],
      c = [],
      d = [],
      p = Math.cos,
      h = Math.sin;
    o.push(new a(-e * h(0), -s * 0.5, e * p(0))),
      c.push(0),
      o.push(new a(-t * h(0), s * 0.5, t * p(0))),
      d.push(1);
    for (let u = 0; u < n; u++) {
      const y = ((2 * Math.PI) / n) * (u + 1),
        w = ((2 * Math.PI) / n) * (u + 0.5);
      u < n - 1
        ? (o.push(new a(-e * h(y), -s * 0.5, e * p(y))),
          c.push(2 * u + 2),
          o.push(new a(-t * h(y), s * 0.5, t * p(y))),
          d.push(2 * u + 3),
          l.push([2 * u, 2 * u + 1, 2 * u + 3, 2 * u + 2]))
        : l.push([2 * u, 2 * u + 1, 1, 0]),
        (n % 2 === 1 || u < n / 2) && r.push(new a(-h(w), 0, p(w)));
    }
    l.push(c), r.push(new a(0, 1, 0));
    const m = [];
    for (let u = 0; u < d.length; u++) m.push(d[d.length - u - 1]);
    l.push(m),
      super({ vertices: o, faces: l, axes: r }),
      (this.type = M.types.CYLINDER),
      (this.radiusTop = t),
      (this.radiusBottom = e),
      (this.height = s),
      (this.numSegments = i);
  }
}
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new K();
new a();
new K();
new a();
new a();
new a();
new a();
new a();
new a();
new a();
new K();
new a();
new O();
new K();
class Ks {
  constructor() {
    this.equations = [];
  }
  solve(t, e) {
    return 0;
  }
  addEquation(t) {
    t.enabled && !t.bi.isTrigger && !t.bj.isTrigger && this.equations.push(t);
  }
  removeEquation(t) {
    const e = this.equations,
      s = e.indexOf(t);
    s !== -1 && e.splice(s, 1);
  }
  removeAllEquations() {
    this.equations.length = 0;
  }
}
class Xs extends Ks {
  constructor() {
    super(), (this.iterations = 10), (this.tolerance = 1e-7);
  }
  solve(t, e) {
    let s = 0;
    const i = this.iterations,
      n = this.tolerance * this.tolerance,
      o = this.equations,
      r = o.length,
      l = e.bodies,
      c = l.length,
      d = t;
    let p, h, m, u, y, w;
    if (r !== 0) for (let E = 0; E !== c; E++) l[E].updateSolveMassProperties();
    const v = Zs,
      f = Js,
      b = $s;
    (v.length = r), (f.length = r), (b.length = r);
    for (let E = 0; E !== r; E++) {
      const T = o[E];
      (b[E] = 0), (f[E] = T.computeB(d)), (v[E] = 1 / T.computeC());
    }
    if (r !== 0) {
      for (let k = 0; k !== c; k++) {
        const N = l[k],
          C = N.vlambda,
          A = N.wlambda;
        C.set(0, 0, 0), A.set(0, 0, 0);
      }
      for (s = 0; s !== i; s++) {
        u = 0;
        for (let k = 0; k !== r; k++) {
          const N = o[k];
          (p = f[k]),
            (h = v[k]),
            (w = b[k]),
            (y = N.computeGWlambda()),
            (m = h * (p - y - N.eps * w)),
            w + m < N.minForce
              ? (m = N.minForce - w)
              : w + m > N.maxForce && (m = N.maxForce - w),
            (b[k] += m),
            (u += m > 0 ? m : -m),
            N.addToWlambda(m);
        }
        if (u * u < n) break;
      }
      for (let k = 0; k !== c; k++) {
        const N = l[k],
          C = N.velocity,
          A = N.angularVelocity;
        N.vlambda.vmul(N.linearFactor, N.vlambda),
          C.vadd(N.vlambda, C),
          N.wlambda.vmul(N.angularFactor, N.wlambda),
          A.vadd(N.wlambda, A);
      }
      let E = o.length;
      const T = 1 / d;
      for (; E--; ) o[E].multiplier = b[E] * T;
    }
    return s;
  }
}
const $s = [],
  Zs = [],
  Js = [];
I.STATIC;
class Qs {
  constructor() {
    (this.objects = []), (this.type = Object);
  }
  release() {
    const t = arguments.length;
    for (let e = 0; e !== t; e++)
      this.objects.push(e < 0 || arguments.length <= e ? void 0 : arguments[e]);
    return this;
  }
  get() {
    return this.objects.length === 0
      ? this.constructObject()
      : this.objects.pop();
  }
  constructObject() {
    throw new Error(
      "constructObject() not implemented in this Pool subclass yet!"
    );
  }
  resize(t) {
    const e = this.objects;
    for (; e.length > t; ) e.pop();
    for (; e.length < t; ) e.push(this.constructObject());
    return this;
  }
}
class ti extends Qs {
  constructor() {
    super(...arguments), (this.type = a);
  }
  constructObject() {
    return new a();
  }
}
const _ = {
  sphereSphere: M.types.SPHERE,
  spherePlane: M.types.SPHERE | M.types.PLANE,
  boxBox: M.types.BOX | M.types.BOX,
  sphereBox: M.types.SPHERE | M.types.BOX,
  planeBox: M.types.PLANE | M.types.BOX,
  convexConvex: M.types.CONVEXPOLYHEDRON,
  sphereConvex: M.types.SPHERE | M.types.CONVEXPOLYHEDRON,
  planeConvex: M.types.PLANE | M.types.CONVEXPOLYHEDRON,
  boxConvex: M.types.BOX | M.types.CONVEXPOLYHEDRON,
  sphereHeightfield: M.types.SPHERE | M.types.HEIGHTFIELD,
  boxHeightfield: M.types.BOX | M.types.HEIGHTFIELD,
  convexHeightfield: M.types.CONVEXPOLYHEDRON | M.types.HEIGHTFIELD,
  sphereParticle: M.types.PARTICLE | M.types.SPHERE,
  planeParticle: M.types.PLANE | M.types.PARTICLE,
  boxParticle: M.types.BOX | M.types.PARTICLE,
  convexParticle: M.types.PARTICLE | M.types.CONVEXPOLYHEDRON,
  cylinderCylinder: M.types.CYLINDER,
  sphereCylinder: M.types.SPHERE | M.types.CYLINDER,
  planeCylinder: M.types.PLANE | M.types.CYLINDER,
  boxCylinder: M.types.BOX | M.types.CYLINDER,
  convexCylinder: M.types.CONVEXPOLYHEDRON | M.types.CYLINDER,
  heightfieldCylinder: M.types.HEIGHTFIELD | M.types.CYLINDER,
  particleCylinder: M.types.PARTICLE | M.types.CYLINDER,
  sphereTrimesh: M.types.SPHERE | M.types.TRIMESH,
  planeTrimesh: M.types.PLANE | M.types.TRIMESH,
};
class ei {
  get [_.sphereSphere]() {
    return this.sphereSphere;
  }
  get [_.spherePlane]() {
    return this.spherePlane;
  }
  get [_.boxBox]() {
    return this.boxBox;
  }
  get [_.sphereBox]() {
    return this.sphereBox;
  }
  get [_.planeBox]() {
    return this.planeBox;
  }
  get [_.convexConvex]() {
    return this.convexConvex;
  }
  get [_.sphereConvex]() {
    return this.sphereConvex;
  }
  get [_.planeConvex]() {
    return this.planeConvex;
  }
  get [_.boxConvex]() {
    return this.boxConvex;
  }
  get [_.sphereHeightfield]() {
    return this.sphereHeightfield;
  }
  get [_.boxHeightfield]() {
    return this.boxHeightfield;
  }
  get [_.convexHeightfield]() {
    return this.convexHeightfield;
  }
  get [_.sphereParticle]() {
    return this.sphereParticle;
  }
  get [_.planeParticle]() {
    return this.planeParticle;
  }
  get [_.boxParticle]() {
    return this.boxParticle;
  }
  get [_.convexParticle]() {
    return this.convexParticle;
  }
  get [_.cylinderCylinder]() {
    return this.convexConvex;
  }
  get [_.sphereCylinder]() {
    return this.sphereConvex;
  }
  get [_.planeCylinder]() {
    return this.planeConvex;
  }
  get [_.boxCylinder]() {
    return this.boxConvex;
  }
  get [_.convexCylinder]() {
    return this.convexConvex;
  }
  get [_.heightfieldCylinder]() {
    return this.heightfieldCylinder;
  }
  get [_.particleCylinder]() {
    return this.particleCylinder;
  }
  get [_.sphereTrimesh]() {
    return this.sphereTrimesh;
  }
  get [_.planeTrimesh]() {
    return this.planeTrimesh;
  }
  constructor(t) {
    (this.contactPointPool = []),
      (this.frictionEquationPool = []),
      (this.result = []),
      (this.frictionResult = []),
      (this.v3pool = new ti()),
      (this.world = t),
      (this.currentContactMaterial = t.defaultContactMaterial),
      (this.enableFrictionReduction = !1);
  }
  createContactEquation(t, e, s, i, n, o) {
    let r;
    this.contactPointPool.length
      ? ((r = this.contactPointPool.pop()), (r.bi = t), (r.bj = e))
      : (r = new Rs(t, e)),
      (r.enabled =
        t.collisionResponse &&
        e.collisionResponse &&
        s.collisionResponse &&
        i.collisionResponse);
    const l = this.currentContactMaterial;
    (r.restitution = l.restitution),
      r.setSpookParams(
        l.contactEquationStiffness,
        l.contactEquationRelaxation,
        this.world.dt
      );
    const c = s.material || t.material,
      d = i.material || e.material;
    return (
      c &&
        d &&
        c.restitution >= 0 &&
        d.restitution >= 0 &&
        (r.restitution = c.restitution * d.restitution),
      (r.si = n || s),
      (r.sj = o || i),
      r
    );
  }
  createFrictionEquationsFromContact(t, e) {
    const s = t.bi,
      i = t.bj,
      n = t.si,
      o = t.sj,
      r = this.world,
      l = this.currentContactMaterial;
    let c = l.friction;
    const d = n.material || s.material,
      p = o.material || i.material;
    if (
      (d &&
        p &&
        d.friction >= 0 &&
        p.friction >= 0 &&
        (c = d.friction * p.friction),
      c > 0)
    ) {
      const h = c * (r.frictionGravity || r.gravity).length();
      let m = s.invMass + i.invMass;
      m > 0 && (m = 1 / m);
      const u = this.frictionEquationPool,
        y = u.length ? u.pop() : new de(s, i, h * m),
        w = u.length ? u.pop() : new de(s, i, h * m);
      return (
        (y.bi = w.bi = s),
        (y.bj = w.bj = i),
        (y.minForce = w.minForce = -h * m),
        (y.maxForce = w.maxForce = h * m),
        y.ri.copy(t.ri),
        y.rj.copy(t.rj),
        w.ri.copy(t.ri),
        w.rj.copy(t.rj),
        t.ni.tangents(y.t, w.t),
        y.setSpookParams(
          l.frictionEquationStiffness,
          l.frictionEquationRelaxation,
          r.dt
        ),
        w.setSpookParams(
          l.frictionEquationStiffness,
          l.frictionEquationRelaxation,
          r.dt
        ),
        (y.enabled = w.enabled = t.enabled),
        e.push(y, w),
        !0
      );
    }
    return !1;
  }
  createFrictionFromAverage(t) {
    let e = this.result[this.result.length - 1];
    if (
      !this.createFrictionEquationsFromContact(e, this.frictionResult) ||
      t === 1
    )
      return;
    const s = this.frictionResult[this.frictionResult.length - 2],
      i = this.frictionResult[this.frictionResult.length - 1];
    rt.setZero(), dt.setZero(), ut.setZero();
    const n = e.bi;
    e.bj;
    for (let r = 0; r !== t; r++)
      (e = this.result[this.result.length - 1 - r]),
        e.bi !== n
          ? (rt.vadd(e.ni, rt), dt.vadd(e.ri, dt), ut.vadd(e.rj, ut))
          : (rt.vsub(e.ni, rt), dt.vadd(e.rj, dt), ut.vadd(e.ri, ut));
    const o = 1 / t;
    dt.scale(o, s.ri),
      ut.scale(o, s.rj),
      i.ri.copy(s.ri),
      i.rj.copy(s.rj),
      rt.normalize(),
      rt.tangents(s.t, i.t);
  }
  getContacts(t, e, s, i, n, o, r) {
    (this.contactPointPool = n),
      (this.frictionEquationPool = r),
      (this.result = i),
      (this.frictionResult = o);
    const l = ni,
      c = oi,
      d = si,
      p = ii;
    for (let h = 0, m = t.length; h !== m; h++) {
      const u = t[h],
        y = e[h];
      let w = null;
      u.material &&
        y.material &&
        (w = s.getContactMaterial(u.material, y.material) || null);
      const v =
        (u.type & I.KINEMATIC && y.type & I.STATIC) ||
        (u.type & I.STATIC && y.type & I.KINEMATIC) ||
        (u.type & I.KINEMATIC && y.type & I.KINEMATIC);
      for (let f = 0; f < u.shapes.length; f++) {
        u.quaternion.mult(u.shapeOrientations[f], l),
          u.quaternion.vmult(u.shapeOffsets[f], d),
          d.vadd(u.position, d);
        const b = u.shapes[f];
        for (let E = 0; E < y.shapes.length; E++) {
          y.quaternion.mult(y.shapeOrientations[E], c),
            y.quaternion.vmult(y.shapeOffsets[E], p),
            p.vadd(y.position, p);
          const T = y.shapes[E];
          if (
            !(
              b.collisionFilterMask & T.collisionFilterGroup &&
              T.collisionFilterMask & b.collisionFilterGroup
            ) ||
            d.distanceTo(p) > b.boundingSphereRadius + T.boundingSphereRadius
          )
            continue;
          let k = null;
          b.material &&
            T.material &&
            (k = s.getContactMaterial(b.material, T.material) || null),
            (this.currentContactMaterial = k || w || s.defaultContactMaterial);
          const N = b.type | T.type,
            C = this[N];
          if (C) {
            let A = !1;
            b.type < T.type
              ? (A = C.call(this, b, T, d, p, l, c, u, y, b, T, v))
              : (A = C.call(this, T, b, p, d, c, l, y, u, b, T, v)),
              A &&
                v &&
                (s.shapeOverlapKeeper.set(b.id, T.id),
                s.bodyOverlapKeeper.set(u.id, y.id));
          }
        }
      }
    }
  }
  sphereSphere(t, e, s, i, n, o, r, l, c, d, p) {
    if (p) return s.distanceSquared(i) < (t.radius + e.radius) ** 2;
    const h = this.createContactEquation(r, l, t, e, c, d);
    i.vsub(s, h.ni),
      h.ni.normalize(),
      h.ri.copy(h.ni),
      h.rj.copy(h.ni),
      h.ri.scale(t.radius, h.ri),
      h.rj.scale(-e.radius, h.rj),
      h.ri.vadd(s, h.ri),
      h.ri.vsub(r.position, h.ri),
      h.rj.vadd(i, h.rj),
      h.rj.vsub(l.position, h.rj),
      this.result.push(h),
      this.createFrictionEquationsFromContact(h, this.frictionResult);
  }
  spherePlane(t, e, s, i, n, o, r, l, c, d, p) {
    const h = this.createContactEquation(r, l, t, e, c, d);
    if (
      (h.ni.set(0, 0, 1),
      o.vmult(h.ni, h.ni),
      h.ni.negate(h.ni),
      h.ni.normalize(),
      h.ni.scale(t.radius, h.ri),
      s.vsub(i, kt),
      h.ni.scale(h.ni.dot(kt), ue),
      kt.vsub(ue, h.rj),
      -kt.dot(h.ni) <= t.radius)
    ) {
      if (p) return !0;
      const m = h.ri,
        u = h.rj;
      m.vadd(s, m),
        m.vsub(r.position, m),
        u.vadd(i, u),
        u.vsub(l.position, u),
        this.result.push(h),
        this.createFrictionEquationsFromContact(h, this.frictionResult);
    }
  }
  boxBox(t, e, s, i, n, o, r, l, c, d, p) {
    return (
      (t.convexPolyhedronRepresentation.material = t.material),
      (e.convexPolyhedronRepresentation.material = e.material),
      (t.convexPolyhedronRepresentation.collisionResponse =
        t.collisionResponse),
      (e.convexPolyhedronRepresentation.collisionResponse =
        e.collisionResponse),
      this.convexConvex(
        t.convexPolyhedronRepresentation,
        e.convexPolyhedronRepresentation,
        s,
        i,
        n,
        o,
        r,
        l,
        t,
        e,
        p
      )
    );
  }
  sphereBox(t, e, s, i, n, o, r, l, c, d, p) {
    const h = this.v3pool,
      m = zi;
    s.vsub(i, Bt), e.getSideNormals(m, o);
    const u = t.radius;
    let y = !1;
    const w = Ni,
      v = Fi,
      f = Ri;
    let b = null,
      E = 0,
      T = 0,
      k = 0,
      N = null;
    for (let x = 0, L = m.length; x !== L && y === !1; x++) {
      const H = ki;
      H.copy(m[x]);
      const q = H.length();
      H.normalize();
      const U = Bt.dot(H);
      if (U < q + u && U > 0) {
        const D = Bi,
          G = Mi;
        D.copy(m[(x + 1) % 3]), G.copy(m[(x + 2) % 3]);
        const ht = D.length(),
          At = G.length();
        D.normalize(), G.normalize();
        const Ft = Bt.dot(D),
          Rt = Bt.dot(G);
        if (Ft < ht && Ft > -ht && Rt < At && Rt > -At) {
          const Kt = Math.abs(U - q - u);
          if (
            (N === null || Kt < N) &&
            ((N = Kt),
            (T = Ft),
            (k = Rt),
            (b = q),
            w.copy(H),
            v.copy(D),
            f.copy(G),
            E++,
            p)
          )
            return !0;
        }
      }
    }
    if (E) {
      y = !0;
      const x = this.createContactEquation(r, l, t, e, c, d);
      w.scale(-u, x.ri),
        x.ni.copy(w),
        x.ni.negate(x.ni),
        w.scale(b, w),
        v.scale(T, v),
        w.vadd(v, w),
        f.scale(k, f),
        w.vadd(f, x.rj),
        x.ri.vadd(s, x.ri),
        x.ri.vsub(r.position, x.ri),
        x.rj.vadd(i, x.rj),
        x.rj.vsub(l.position, x.rj),
        this.result.push(x),
        this.createFrictionEquationsFromContact(x, this.frictionResult);
    }
    let C = h.get();
    const A = Ii;
    for (let x = 0; x !== 2 && !y; x++)
      for (let L = 0; L !== 2 && !y; L++)
        for (let H = 0; H !== 2 && !y; H++)
          if (
            (C.set(0, 0, 0),
            x ? C.vadd(m[0], C) : C.vsub(m[0], C),
            L ? C.vadd(m[1], C) : C.vsub(m[1], C),
            H ? C.vadd(m[2], C) : C.vsub(m[2], C),
            i.vadd(C, A),
            A.vsub(s, A),
            A.lengthSquared() < u * u)
          ) {
            if (p) return !0;
            y = !0;
            const q = this.createContactEquation(r, l, t, e, c, d);
            q.ri.copy(A),
              q.ri.normalize(),
              q.ni.copy(q.ri),
              q.ri.scale(u, q.ri),
              q.rj.copy(C),
              q.ri.vadd(s, q.ri),
              q.ri.vsub(r.position, q.ri),
              q.rj.vadd(i, q.rj),
              q.rj.vsub(l.position, q.rj),
              this.result.push(q),
              this.createFrictionEquationsFromContact(q, this.frictionResult);
          }
    h.release(C), (C = null);
    const B = h.get(),
      F = h.get(),
      z = h.get(),
      g = h.get(),
      P = h.get(),
      S = m.length;
    for (let x = 0; x !== S && !y; x++)
      for (let L = 0; L !== S && !y; L++)
        if (x % 3 !== L % 3) {
          m[L].cross(m[x], B),
            B.normalize(),
            m[x].vadd(m[L], F),
            z.copy(s),
            z.vsub(F, z),
            z.vsub(i, z);
          const H = z.dot(B);
          B.scale(H, g);
          let q = 0;
          for (; q === x % 3 || q === L % 3; ) q++;
          P.copy(s), P.vsub(g, P), P.vsub(F, P), P.vsub(i, P);
          const U = Math.abs(H),
            D = P.length();
          if (U < m[q].length() && D < u) {
            if (p) return !0;
            y = !0;
            const G = this.createContactEquation(r, l, t, e, c, d);
            F.vadd(g, G.rj),
              G.rj.copy(G.rj),
              P.negate(G.ni),
              G.ni.normalize(),
              G.ri.copy(G.rj),
              G.ri.vadd(i, G.ri),
              G.ri.vsub(s, G.ri),
              G.ri.normalize(),
              G.ri.scale(u, G.ri),
              G.ri.vadd(s, G.ri),
              G.ri.vsub(r.position, G.ri),
              G.rj.vadd(i, G.rj),
              G.rj.vsub(l.position, G.rj),
              this.result.push(G),
              this.createFrictionEquationsFromContact(G, this.frictionResult);
          }
        }
    h.release(B, F, z, g, P);
  }
  planeBox(t, e, s, i, n, o, r, l, c, d, p) {
    return (
      (e.convexPolyhedronRepresentation.material = e.material),
      (e.convexPolyhedronRepresentation.collisionResponse =
        e.collisionResponse),
      (e.convexPolyhedronRepresentation.id = e.id),
      this.planeConvex(
        t,
        e.convexPolyhedronRepresentation,
        s,
        i,
        n,
        o,
        r,
        l,
        t,
        e,
        p
      )
    );
  }
  convexConvex(t, e, s, i, n, o, r, l, c, d, p, h, m) {
    const u = $i;
    if (
      !(s.distanceTo(i) > t.boundingSphereRadius + e.boundingSphereRadius) &&
      t.findSeparatingAxis(e, s, n, i, o, u, h, m)
    ) {
      const y = [],
        w = Zi;
      t.clipAgainstHull(s, n, e, i, o, u, -100, 100, y);
      let v = 0;
      for (let f = 0; f !== y.length; f++) {
        if (p) return !0;
        const b = this.createContactEquation(r, l, t, e, c, d),
          E = b.ri,
          T = b.rj;
        u.negate(b.ni),
          y[f].normal.negate(w),
          w.scale(y[f].depth, w),
          y[f].point.vadd(w, E),
          T.copy(y[f].point),
          E.vsub(s, E),
          T.vsub(i, T),
          E.vadd(s, E),
          E.vsub(r.position, E),
          T.vadd(i, T),
          T.vsub(l.position, T),
          this.result.push(b),
          v++,
          this.enableFrictionReduction ||
            this.createFrictionEquationsFromContact(b, this.frictionResult);
      }
      this.enableFrictionReduction && v && this.createFrictionFromAverage(v);
    }
  }
  sphereConvex(t, e, s, i, n, o, r, l, c, d, p) {
    const h = this.v3pool;
    s.vsub(i, Gi);
    const m = e.faceNormals,
      u = e.faces,
      y = e.vertices,
      w = t.radius;
    let v = !1;
    for (let f = 0; f !== y.length; f++) {
      const b = y[f],
        E = Oi;
      o.vmult(b, E), i.vadd(E, E);
      const T = qi;
      if ((E.vsub(s, T), T.lengthSquared() < w * w)) {
        if (p) return !0;
        v = !0;
        const k = this.createContactEquation(r, l, t, e, c, d);
        k.ri.copy(T),
          k.ri.normalize(),
          k.ni.copy(k.ri),
          k.ri.scale(w, k.ri),
          E.vsub(i, k.rj),
          k.ri.vadd(s, k.ri),
          k.ri.vsub(r.position, k.ri),
          k.rj.vadd(i, k.rj),
          k.rj.vsub(l.position, k.rj),
          this.result.push(k),
          this.createFrictionEquationsFromContact(k, this.frictionResult);
        return;
      }
    }
    for (let f = 0, b = u.length; f !== b && v === !1; f++) {
      const E = m[f],
        T = u[f],
        k = _i;
      o.vmult(E, k);
      const N = ji;
      o.vmult(y[T[0]], N), N.vadd(i, N);
      const C = Wi;
      k.scale(-w, C), s.vadd(C, C);
      const A = Vi;
      C.vsub(N, A);
      const B = A.dot(k),
        F = Di;
      if ((s.vsub(N, F), B < 0 && F.dot(k) > 0)) {
        const z = [];
        for (let g = 0, P = T.length; g !== P; g++) {
          const S = h.get();
          o.vmult(y[T[g]], S), i.vadd(S, S), z.push(S);
        }
        if (Pi(z, k, s)) {
          if (p) return !0;
          v = !0;
          const g = this.createContactEquation(r, l, t, e, c, d);
          k.scale(-w, g.ri), k.negate(g.ni);
          const P = h.get();
          k.scale(-B, P);
          const S = h.get();
          k.scale(-w, S),
            s.vsub(i, g.rj),
            g.rj.vadd(S, g.rj),
            g.rj.vadd(P, g.rj),
            g.rj.vadd(i, g.rj),
            g.rj.vsub(l.position, g.rj),
            g.ri.vadd(s, g.ri),
            g.ri.vsub(r.position, g.ri),
            h.release(P),
            h.release(S),
            this.result.push(g),
            this.createFrictionEquationsFromContact(g, this.frictionResult);
          for (let x = 0, L = z.length; x !== L; x++) h.release(z[x]);
          return;
        } else
          for (let g = 0; g !== T.length; g++) {
            const P = h.get(),
              S = h.get();
            o.vmult(y[T[(g + 1) % T.length]], P),
              o.vmult(y[T[(g + 2) % T.length]], S),
              i.vadd(P, P),
              i.vadd(S, S);
            const x = Li;
            S.vsub(P, x);
            const L = Hi;
            x.unit(L);
            const H = h.get(),
              q = h.get();
            s.vsub(P, q);
            const U = q.dot(L);
            L.scale(U, H), H.vadd(P, H);
            const D = h.get();
            if (
              (H.vsub(s, D),
              U > 0 && U * U < x.lengthSquared() && D.lengthSquared() < w * w)
            ) {
              if (p) return !0;
              const G = this.createContactEquation(r, l, t, e, c, d);
              H.vsub(i, G.rj),
                H.vsub(s, G.ni),
                G.ni.normalize(),
                G.ni.scale(w, G.ri),
                G.rj.vadd(i, G.rj),
                G.rj.vsub(l.position, G.rj),
                G.ri.vadd(s, G.ri),
                G.ri.vsub(r.position, G.ri),
                this.result.push(G),
                this.createFrictionEquationsFromContact(G, this.frictionResult);
              for (let ht = 0, At = z.length; ht !== At; ht++) h.release(z[ht]);
              h.release(P),
                h.release(S),
                h.release(H),
                h.release(D),
                h.release(q);
              return;
            }
            h.release(P),
              h.release(S),
              h.release(H),
              h.release(D),
              h.release(q);
          }
        for (let g = 0, P = z.length; g !== P; g++) h.release(z[g]);
      }
    }
  }
  planeConvex(t, e, s, i, n, o, r, l, c, d, p) {
    const h = Ui,
      m = Yi;
    m.set(0, 0, 1), n.vmult(m, m);
    let u = 0;
    const y = Ki;
    for (let w = 0; w !== e.vertices.length; w++)
      if (
        (h.copy(e.vertices[w]),
        o.vmult(h, h),
        i.vadd(h, h),
        h.vsub(s, y),
        m.dot(y) <= 0)
      ) {
        if (p) return !0;
        const f = this.createContactEquation(r, l, t, e, c, d),
          b = Xi;
        m.scale(m.dot(y), b),
          h.vsub(b, b),
          b.vsub(s, f.ri),
          f.ni.copy(m),
          h.vsub(i, f.rj),
          f.ri.vadd(s, f.ri),
          f.ri.vsub(r.position, f.ri),
          f.rj.vadd(i, f.rj),
          f.rj.vsub(l.position, f.rj),
          this.result.push(f),
          u++,
          this.enableFrictionReduction ||
            this.createFrictionEquationsFromContact(f, this.frictionResult);
      }
    this.enableFrictionReduction && u && this.createFrictionFromAverage(u);
  }
  boxConvex(t, e, s, i, n, o, r, l, c, d, p) {
    return (
      (t.convexPolyhedronRepresentation.material = t.material),
      (t.convexPolyhedronRepresentation.collisionResponse =
        t.collisionResponse),
      this.convexConvex(
        t.convexPolyhedronRepresentation,
        e,
        s,
        i,
        n,
        o,
        r,
        l,
        t,
        e,
        p
      )
    );
  }
  sphereHeightfield(t, e, s, i, n, o, r, l, c, d, p) {
    const h = e.data,
      m = t.radius,
      u = e.elementSize,
      y = hn,
      w = cn;
    O.pointToLocalFrame(i, o, s, w);
    let v = Math.floor((w.x - m) / u) - 1,
      f = Math.ceil((w.x + m) / u) + 1,
      b = Math.floor((w.y - m) / u) - 1,
      E = Math.ceil((w.y + m) / u) + 1;
    if (f < 0 || E < 0 || v > h.length || b > h[0].length) return;
    v < 0 && (v = 0),
      f < 0 && (f = 0),
      b < 0 && (b = 0),
      E < 0 && (E = 0),
      v >= h.length && (v = h.length - 1),
      f >= h.length && (f = h.length - 1),
      E >= h[0].length && (E = h[0].length - 1),
      b >= h[0].length && (b = h[0].length - 1);
    const T = [];
    e.getRectMinMax(v, b, f, E, T);
    const k = T[0],
      N = T[1];
    if (w.z - m > N || w.z + m < k) return;
    const C = this.result;
    for (let A = v; A < f; A++)
      for (let B = b; B < E; B++) {
        const F = C.length;
        let z = !1;
        if (
          (e.getConvexTrianglePillar(A, B, !1),
          O.pointToWorldFrame(i, o, e.pillarOffset, y),
          s.distanceTo(y) <
            e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
            (z = this.sphereConvex(
              t,
              e.pillarConvex,
              s,
              y,
              n,
              o,
              r,
              l,
              t,
              e,
              p
            )),
          (p && z) ||
            (e.getConvexTrianglePillar(A, B, !0),
            O.pointToWorldFrame(i, o, e.pillarOffset, y),
            s.distanceTo(y) <
              e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
              (z = this.sphereConvex(
                t,
                e.pillarConvex,
                s,
                y,
                n,
                o,
                r,
                l,
                t,
                e,
                p
              )),
            p && z))
        )
          return !0;
        if (C.length - F > 2) return;
      }
  }
  boxHeightfield(t, e, s, i, n, o, r, l, c, d, p) {
    return (
      (t.convexPolyhedronRepresentation.material = t.material),
      (t.convexPolyhedronRepresentation.collisionResponse =
        t.collisionResponse),
      this.convexHeightfield(
        t.convexPolyhedronRepresentation,
        e,
        s,
        i,
        n,
        o,
        r,
        l,
        t,
        e,
        p
      )
    );
  }
  convexHeightfield(t, e, s, i, n, o, r, l, c, d, p) {
    const h = e.data,
      m = e.elementSize,
      u = t.boundingSphereRadius,
      y = an,
      w = ln,
      v = rn;
    O.pointToLocalFrame(i, o, s, v);
    let f = Math.floor((v.x - u) / m) - 1,
      b = Math.ceil((v.x + u) / m) + 1,
      E = Math.floor((v.y - u) / m) - 1,
      T = Math.ceil((v.y + u) / m) + 1;
    if (b < 0 || T < 0 || f > h.length || E > h[0].length) return;
    f < 0 && (f = 0),
      b < 0 && (b = 0),
      E < 0 && (E = 0),
      T < 0 && (T = 0),
      f >= h.length && (f = h.length - 1),
      b >= h.length && (b = h.length - 1),
      T >= h[0].length && (T = h[0].length - 1),
      E >= h[0].length && (E = h[0].length - 1);
    const k = [];
    e.getRectMinMax(f, E, b, T, k);
    const N = k[0],
      C = k[1];
    if (!(v.z - u > C || v.z + u < N))
      for (let A = f; A < b; A++)
        for (let B = E; B < T; B++) {
          let F = !1;
          if (
            (e.getConvexTrianglePillar(A, B, !1),
            O.pointToWorldFrame(i, o, e.pillarOffset, y),
            s.distanceTo(y) <
              e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
              (F = this.convexConvex(
                t,
                e.pillarConvex,
                s,
                y,
                n,
                o,
                r,
                l,
                null,
                null,
                p,
                w,
                null
              )),
            (p && F) ||
              (e.getConvexTrianglePillar(A, B, !0),
              O.pointToWorldFrame(i, o, e.pillarOffset, y),
              s.distanceTo(y) <
                e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
                (F = this.convexConvex(
                  t,
                  e.pillarConvex,
                  s,
                  y,
                  n,
                  o,
                  r,
                  l,
                  null,
                  null,
                  p,
                  w,
                  null
                )),
              p && F))
          )
            return !0;
        }
  }
  sphereParticle(t, e, s, i, n, o, r, l, c, d, p) {
    const h = en;
    if (
      (h.set(0, 0, 1), i.vsub(s, h), h.lengthSquared() <= t.radius * t.radius)
    ) {
      if (p) return !0;
      const u = this.createContactEquation(l, r, e, t, c, d);
      h.normalize(),
        u.rj.copy(h),
        u.rj.scale(t.radius, u.rj),
        u.ni.copy(h),
        u.ni.negate(u.ni),
        u.ri.set(0, 0, 0),
        this.result.push(u),
        this.createFrictionEquationsFromContact(u, this.frictionResult);
    }
  }
  planeParticle(t, e, s, i, n, o, r, l, c, d, p) {
    const h = Ji;
    h.set(0, 0, 1), r.quaternion.vmult(h, h);
    const m = Qi;
    if ((i.vsub(r.position, m), h.dot(m) <= 0)) {
      if (p) return !0;
      const y = this.createContactEquation(l, r, e, t, c, d);
      y.ni.copy(h), y.ni.negate(y.ni), y.ri.set(0, 0, 0);
      const w = tn;
      h.scale(h.dot(i), w),
        i.vsub(w, w),
        y.rj.copy(w),
        this.result.push(y),
        this.createFrictionEquationsFromContact(y, this.frictionResult);
    }
  }
  boxParticle(t, e, s, i, n, o, r, l, c, d, p) {
    return (
      (t.convexPolyhedronRepresentation.material = t.material),
      (t.convexPolyhedronRepresentation.collisionResponse =
        t.collisionResponse),
      this.convexParticle(
        t.convexPolyhedronRepresentation,
        e,
        s,
        i,
        n,
        o,
        r,
        l,
        t,
        e,
        p
      )
    );
  }
  convexParticle(t, e, s, i, n, o, r, l, c, d, p) {
    let h = -1;
    const m = nn,
      u = on;
    let y = null;
    const w = sn;
    if (
      (w.copy(i),
      w.vsub(s, w),
      n.conjugate(pe),
      pe.vmult(w, w),
      t.pointIsInside(w))
    ) {
      t.worldVerticesNeedsUpdate && t.computeWorldVertices(s, n),
        t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
      for (let v = 0, f = t.faces.length; v !== f; v++) {
        const b = [t.worldVertices[t.faces[v][0]]],
          E = t.worldFaceNormals[v];
        i.vsub(b[0], me);
        const T = -E.dot(me);
        if (y === null || Math.abs(T) < Math.abs(y)) {
          if (p) return !0;
          (y = T), (h = v), m.copy(E);
        }
      }
      if (h !== -1) {
        const v = this.createContactEquation(l, r, e, t, c, d);
        m.scale(y, u),
          u.vadd(i, u),
          u.vsub(s, u),
          v.rj.copy(u),
          m.negate(v.ni),
          v.ri.set(0, 0, 0);
        const f = v.ri,
          b = v.rj;
        f.vadd(i, f),
          f.vsub(l.position, f),
          b.vadd(s, b),
          b.vsub(r.position, b),
          this.result.push(v),
          this.createFrictionEquationsFromContact(v, this.frictionResult);
      } else
        console.warn(
          "Point found inside convex, but did not find penetrating face!"
        );
    }
  }
  heightfieldCylinder(t, e, s, i, n, o, r, l, c, d, p) {
    return this.convexHeightfield(e, t, i, s, o, n, l, r, c, d, p);
  }
  particleCylinder(t, e, s, i, n, o, r, l, c, d, p) {
    return this.convexParticle(e, t, i, s, o, n, l, r, c, d, p);
  }
  sphereTrimesh(t, e, s, i, n, o, r, l, c, d, p) {
    const h = pi,
      m = mi,
      u = fi,
      y = yi,
      w = wi,
      v = vi,
      f = Ei,
      b = ui,
      E = hi,
      T = Ci;
    O.pointToLocalFrame(i, o, s, w);
    const k = t.radius;
    f.lowerBound.set(w.x - k, w.y - k, w.z - k),
      f.upperBound.set(w.x + k, w.y + k, w.z + k),
      e.getTrianglesInAABB(f, T);
    const N = di,
      C = t.radius * t.radius;
    for (let g = 0; g < T.length; g++)
      for (let P = 0; P < 3; P++)
        if (
          (e.getVertex(e.indices[T[g] * 3 + P], N),
          N.vsub(w, E),
          E.lengthSquared() <= C)
        ) {
          if ((b.copy(N), O.pointToWorldFrame(i, o, b, N), N.vsub(s, E), p))
            return !0;
          let S = this.createContactEquation(r, l, t, e, c, d);
          S.ni.copy(E),
            S.ni.normalize(),
            S.ri.copy(S.ni),
            S.ri.scale(t.radius, S.ri),
            S.ri.vadd(s, S.ri),
            S.ri.vsub(r.position, S.ri),
            S.rj.copy(N),
            S.rj.vsub(l.position, S.rj),
            this.result.push(S),
            this.createFrictionEquationsFromContact(S, this.frictionResult);
        }
    for (let g = 0; g < T.length; g++)
      for (let P = 0; P < 3; P++) {
        e.getVertex(e.indices[T[g] * 3 + P], h),
          e.getVertex(e.indices[T[g] * 3 + ((P + 1) % 3)], m),
          m.vsub(h, u),
          w.vsub(m, v);
        const S = v.dot(u);
        w.vsub(h, v);
        let x = v.dot(u);
        if (
          x > 0 &&
          S < 0 &&
          (w.vsub(h, v),
          y.copy(u),
          y.normalize(),
          (x = v.dot(y)),
          y.scale(x, v),
          v.vadd(h, v),
          v.distanceTo(w) < t.radius)
        ) {
          if (p) return !0;
          const H = this.createContactEquation(r, l, t, e, c, d);
          v.vsub(w, H.ni),
            H.ni.normalize(),
            H.ni.scale(t.radius, H.ri),
            H.ri.vadd(s, H.ri),
            H.ri.vsub(r.position, H.ri),
            O.pointToWorldFrame(i, o, v, v),
            v.vsub(l.position, H.rj),
            O.vectorToWorldFrame(o, H.ni, H.ni),
            O.vectorToWorldFrame(o, H.ri, H.ri),
            this.result.push(H),
            this.createFrictionEquationsFromContact(H, this.frictionResult);
        }
      }
    const A = gi,
      B = xi,
      F = bi,
      z = ci;
    for (let g = 0, P = T.length; g !== P; g++) {
      e.getTriangleVertices(T[g], A, B, F), e.getNormal(T[g], z), w.vsub(A, v);
      let S = v.dot(z);
      if (
        (z.scale(S, v),
        w.vsub(v, v),
        (S = v.distanceTo(w)),
        W.pointInTriangle(v, A, B, F) && S < t.radius)
      ) {
        if (p) return !0;
        let x = this.createContactEquation(r, l, t, e, c, d);
        v.vsub(w, x.ni),
          x.ni.normalize(),
          x.ni.scale(t.radius, x.ri),
          x.ri.vadd(s, x.ri),
          x.ri.vsub(r.position, x.ri),
          O.pointToWorldFrame(i, o, v, v),
          v.vsub(l.position, x.rj),
          O.vectorToWorldFrame(o, x.ni, x.ni),
          O.vectorToWorldFrame(o, x.ri, x.ri),
          this.result.push(x),
          this.createFrictionEquationsFromContact(x, this.frictionResult);
      }
    }
    T.length = 0;
  }
  planeTrimesh(t, e, s, i, n, o, r, l, c, d, p) {
    const h = new a(),
      m = ri;
    m.set(0, 0, 1), n.vmult(m, m);
    for (let u = 0; u < e.vertices.length / 3; u++) {
      e.getVertex(u, h);
      const y = new a();
      y.copy(h), O.pointToWorldFrame(i, o, y, h);
      const w = ai;
      if ((h.vsub(s, w), m.dot(w) <= 0)) {
        if (p) return !0;
        const f = this.createContactEquation(r, l, t, e, c, d);
        f.ni.copy(m);
        const b = li;
        m.scale(w.dot(m), b),
          h.vsub(b, b),
          f.ri.copy(b),
          f.ri.vsub(r.position, f.ri),
          f.rj.copy(h),
          f.rj.vsub(l.position, f.rj),
          this.result.push(f),
          this.createFrictionEquationsFromContact(f, this.frictionResult);
      }
    }
  }
}
const rt = new a(),
  dt = new a(),
  ut = new a(),
  si = new a(),
  ii = new a(),
  ni = new j(),
  oi = new j(),
  ri = new a(),
  ai = new a(),
  li = new a(),
  ci = new a(),
  hi = new a();
new a();
const di = new a(),
  ui = new a(),
  pi = new a(),
  mi = new a(),
  fi = new a(),
  yi = new a(),
  wi = new a(),
  vi = new a(),
  gi = new a(),
  xi = new a(),
  bi = new a(),
  Ei = new K(),
  Ci = [],
  kt = new a(),
  ue = new a(),
  Ai = new a(),
  Si = new a(),
  Ti = new a();
function Pi(R, t, e) {
  let s = null;
  const i = R.length;
  for (let n = 0; n !== i; n++) {
    const o = R[n],
      r = Ai;
    R[(n + 1) % i].vsub(o, r);
    const l = Si;
    r.cross(t, l);
    const c = Ti;
    e.vsub(o, c);
    const d = l.dot(c);
    if (s === null || (d > 0 && s === !0) || (d <= 0 && s === !1)) {
      s === null && (s = d > 0);
      continue;
    } else return !1;
  }
  return !0;
}
const Bt = new a(),
  ki = new a(),
  Bi = new a(),
  Mi = new a(),
  zi = [new a(), new a(), new a(), new a(), new a(), new a()],
  Ii = new a(),
  Ni = new a(),
  Fi = new a(),
  Ri = new a(),
  Gi = new a(),
  Li = new a(),
  Hi = new a(),
  qi = new a(),
  Oi = new a(),
  _i = new a(),
  ji = new a(),
  Wi = new a(),
  Vi = new a(),
  Di = new a();
new a();
new a();
const Ui = new a(),
  Yi = new a(),
  Ki = new a(),
  Xi = new a(),
  $i = new a(),
  Zi = new a(),
  Ji = new a(),
  Qi = new a(),
  tn = new a(),
  en = new a(),
  pe = new j(),
  sn = new a();
new a();
const nn = new a(),
  me = new a(),
  on = new a(),
  rn = new a(),
  an = new a(),
  ln = [0],
  cn = new a(),
  hn = new a();
class fe {
  constructor() {
    (this.current = []), (this.previous = []);
  }
  getKey(t, e) {
    if (e < t) {
      const s = e;
      (e = t), (t = s);
    }
    return (t << 16) | e;
  }
  set(t, e) {
    const s = this.getKey(t, e),
      i = this.current;
    let n = 0;
    for (; s > i[n]; ) n++;
    if (s !== i[n]) {
      for (let o = i.length - 1; o >= n; o--) i[o + 1] = i[o];
      i[n] = s;
    }
  }
  tick() {
    const t = this.current;
    (this.current = this.previous),
      (this.previous = t),
      (this.current.length = 0);
  }
  getDiff(t, e) {
    const s = this.current,
      i = this.previous,
      n = s.length,
      o = i.length;
    let r = 0;
    for (let l = 0; l < n; l++) {
      let c = !1;
      const d = s[l];
      for (; d > i[r]; ) r++;
      (c = d === i[r]), c || ye(t, d);
    }
    r = 0;
    for (let l = 0; l < o; l++) {
      let c = !1;
      const d = i[l];
      for (; d > s[r]; ) r++;
      (c = s[r] === d), c || ye(e, d);
    }
  }
}
function ye(R, t) {
  R.push((t & 4294901760) >> 16, t & 65535);
}
const jt = (R, t) => (R < t ? `${R}-${t}` : `${t}-${R}`);
class dn {
  constructor() {
    this.data = { keys: [] };
  }
  get(t, e) {
    const s = jt(t, e);
    return this.data[s];
  }
  set(t, e, s) {
    const i = jt(t, e);
    this.get(t, e) || this.data.keys.push(i), (this.data[i] = s);
  }
  delete(t, e) {
    const s = jt(t, e),
      i = this.data.keys.indexOf(s);
    i !== -1 && this.data.keys.splice(i, 1), delete this.data[s];
  }
  reset() {
    const t = this.data,
      e = t.keys;
    for (; e.length > 0; ) {
      const s = e.pop();
      delete t[s];
    }
  }
}
class un extends ge {
  constructor(t) {
    t === void 0 && (t = {}),
      super(),
      (this.dt = -1),
      (this.allowSleep = !!t.allowSleep),
      (this.contacts = []),
      (this.frictionEquations = []),
      (this.quatNormalizeSkip =
        t.quatNormalizeSkip !== void 0 ? t.quatNormalizeSkip : 0),
      (this.quatNormalizeFast =
        t.quatNormalizeFast !== void 0 ? t.quatNormalizeFast : !1),
      (this.time = 0),
      (this.stepnumber = 0),
      (this.default_dt = 1 / 60),
      (this.nextId = 0),
      (this.gravity = new a()),
      t.gravity && this.gravity.copy(t.gravity),
      t.frictionGravity &&
        ((this.frictionGravity = new a()),
        this.frictionGravity.copy(t.frictionGravity)),
      (this.broadphase = t.broadphase !== void 0 ? t.broadphase : new ys()),
      (this.bodies = []),
      (this.hasActiveBodies = !1),
      (this.solver = t.solver !== void 0 ? t.solver : new Xs()),
      (this.constraints = []),
      (this.narrowphase = new ei(this)),
      (this.collisionMatrix = new ee()),
      (this.collisionMatrixPrevious = new ee()),
      (this.bodyOverlapKeeper = new fe()),
      (this.shapeOverlapKeeper = new fe()),
      (this.contactmaterials = []),
      (this.contactMaterialTable = new dn()),
      (this.defaultMaterial = new Nt("default")),
      (this.defaultContactMaterial = new It(
        this.defaultMaterial,
        this.defaultMaterial,
        { friction: 0.3, restitution: 0 }
      )),
      (this.doProfiling = !1),
      (this.profile = {
        solve: 0,
        makeContactConstraints: 0,
        broadphase: 0,
        integrate: 0,
        narrowphase: 0,
      }),
      (this.accumulator = 0),
      (this.subsystems = []),
      (this.addBodyEvent = { type: "addBody", body: null }),
      (this.removeBodyEvent = { type: "removeBody", body: null }),
      (this.idToBodyMap = {}),
      this.broadphase.setWorld(this);
  }
  getContactMaterial(t, e) {
    return this.contactMaterialTable.get(t.id, e.id);
  }
  collisionMatrixTick() {
    const t = this.collisionMatrixPrevious;
    (this.collisionMatrixPrevious = this.collisionMatrix),
      (this.collisionMatrix = t),
      this.collisionMatrix.reset(),
      this.bodyOverlapKeeper.tick(),
      this.shapeOverlapKeeper.tick();
  }
  addConstraint(t) {
    this.constraints.push(t);
  }
  removeConstraint(t) {
    const e = this.constraints.indexOf(t);
    e !== -1 && this.constraints.splice(e, 1);
  }
  rayTest(t, e, s) {
    s instanceof zt
      ? this.raycastClosest(t, e, { skipBackfaces: !0 }, s)
      : this.raycastAll(t, e, { skipBackfaces: !0 }, s);
  }
  raycastAll(t, e, s, i) {
    return (
      s === void 0 && (s = {}),
      (s.mode = W.ALL),
      (s.from = t),
      (s.to = e),
      (s.callback = i),
      Wt.intersectWorld(this, s)
    );
  }
  raycastAny(t, e, s, i) {
    return (
      s === void 0 && (s = {}),
      (s.mode = W.ANY),
      (s.from = t),
      (s.to = e),
      (s.result = i),
      Wt.intersectWorld(this, s)
    );
  }
  raycastClosest(t, e, s, i) {
    return (
      s === void 0 && (s = {}),
      (s.mode = W.CLOSEST),
      (s.from = t),
      (s.to = e),
      (s.result = i),
      Wt.intersectWorld(this, s)
    );
  }
  addBody(t) {
    this.bodies.includes(t) ||
      ((t.index = this.bodies.length),
      this.bodies.push(t),
      (t.world = this),
      t.initPosition.copy(t.position),
      t.initVelocity.copy(t.velocity),
      (t.timeLastSleepy = this.time),
      t instanceof I &&
        (t.initAngularVelocity.copy(t.angularVelocity),
        t.initQuaternion.copy(t.quaternion)),
      this.collisionMatrix.setNumObjects(this.bodies.length),
      (this.addBodyEvent.body = t),
      (this.idToBodyMap[t.id] = t),
      this.dispatchEvent(this.addBodyEvent));
  }
  removeBody(t) {
    t.world = null;
    const e = this.bodies.length - 1,
      s = this.bodies,
      i = s.indexOf(t);
    if (i !== -1) {
      s.splice(i, 1);
      for (let n = 0; n !== s.length; n++) s[n].index = n;
      this.collisionMatrix.setNumObjects(e),
        (this.removeBodyEvent.body = t),
        delete this.idToBodyMap[t.id],
        this.dispatchEvent(this.removeBodyEvent);
    }
  }
  getBodyById(t) {
    return this.idToBodyMap[t];
  }
  getShapeById(t) {
    const e = this.bodies;
    for (let s = 0; s < e.length; s++) {
      const i = e[s].shapes;
      for (let n = 0; n < i.length; n++) {
        const o = i[n];
        if (o.id === t) return o;
      }
    }
    return null;
  }
  addContactMaterial(t) {
    this.contactmaterials.push(t),
      this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t);
  }
  removeContactMaterial(t) {
    const e = this.contactmaterials.indexOf(t);
    e !== -1 &&
      (this.contactmaterials.splice(e, 1),
      this.contactMaterialTable.delete(t.materials[0].id, t.materials[1].id));
  }
  fixedStep(t, e) {
    t === void 0 && (t = 1 / 60), e === void 0 && (e = 10);
    const s = V.now() / 1e3;
    if (!this.lastCallTime) this.step(t, void 0, e);
    else {
      const i = s - this.lastCallTime;
      this.step(t, i, e);
    }
    this.lastCallTime = s;
  }
  step(t, e, s) {
    if ((s === void 0 && (s = 10), e === void 0))
      this.internalStep(t), (this.time += t);
    else {
      this.accumulator += e;
      const i = V.now();
      let n = 0;
      for (
        ;
        this.accumulator >= t &&
        n < s &&
        (this.internalStep(t),
        (this.accumulator -= t),
        n++,
        !(V.now() - i > t * 1e3));

      );
      this.accumulator = this.accumulator % t;
      const o = this.accumulator / t;
      for (let r = 0; r !== this.bodies.length; r++) {
        const l = this.bodies[r];
        l.previousPosition.lerp(l.position, o, l.interpolatedPosition),
          l.previousQuaternion.slerp(l.quaternion, o, l.interpolatedQuaternion),
          l.previousQuaternion.normalize();
      }
      this.time += e;
    }
  }
  internalStep(t) {
    this.dt = t;
    const e = this.contacts,
      s = wn,
      i = vn,
      n = this.bodies.length,
      o = this.bodies,
      r = this.solver,
      l = this.gravity,
      c = this.doProfiling,
      d = this.profile,
      p = I.DYNAMIC;
    let h = -1 / 0;
    const m = this.constraints,
      u = yn;
    l.length();
    const y = l.x,
      w = l.y,
      v = l.z;
    let f = 0;
    for (c && (h = V.now()), f = 0; f !== n; f++) {
      const g = o[f];
      if (g.type === p) {
        const P = g.force,
          S = g.mass;
        (P.x += S * y), (P.y += S * w), (P.z += S * v);
      }
    }
    for (let g = 0, P = this.subsystems.length; g !== P; g++)
      this.subsystems[g].update();
    c && (h = V.now()),
      (s.length = 0),
      (i.length = 0),
      this.broadphase.collisionPairs(this, s, i),
      c && (d.broadphase = V.now() - h);
    let b = m.length;
    for (f = 0; f !== b; f++) {
      const g = m[f];
      if (!g.collideConnected)
        for (let P = s.length - 1; P >= 0; P -= 1)
          ((g.bodyA === s[P] && g.bodyB === i[P]) ||
            (g.bodyB === s[P] && g.bodyA === i[P])) &&
            (s.splice(P, 1), i.splice(P, 1));
    }
    this.collisionMatrixTick(), c && (h = V.now());
    const E = fn,
      T = e.length;
    for (f = 0; f !== T; f++) E.push(e[f]);
    e.length = 0;
    const k = this.frictionEquations.length;
    for (f = 0; f !== k; f++) u.push(this.frictionEquations[f]);
    for (
      this.frictionEquations.length = 0,
        this.narrowphase.getContacts(
          s,
          i,
          this,
          e,
          E,
          this.frictionEquations,
          u
        ),
        c && (d.narrowphase = V.now() - h),
        c && (h = V.now()),
        f = 0;
      f < this.frictionEquations.length;
      f++
    )
      r.addEquation(this.frictionEquations[f]);
    const N = e.length;
    for (let g = 0; g !== N; g++) {
      const P = e[g],
        S = P.bi,
        x = P.bj,
        L = P.si,
        H = P.sj;
      let q;
      if (
        (S.material && x.material
          ? (q =
              this.getContactMaterial(S.material, x.material) ||
              this.defaultContactMaterial)
          : (q = this.defaultContactMaterial),
        q.friction,
        S.material &&
          x.material &&
          (S.material.friction >= 0 &&
            x.material.friction >= 0 &&
            S.material.friction * x.material.friction,
          S.material.restitution >= 0 &&
            x.material.restitution >= 0 &&
            (P.restitution = S.material.restitution * x.material.restitution)),
        r.addEquation(P),
        S.allowSleep &&
          S.type === I.DYNAMIC &&
          S.sleepState === I.SLEEPING &&
          x.sleepState === I.AWAKE &&
          x.type !== I.STATIC)
      ) {
        const U =
            x.velocity.lengthSquared() + x.angularVelocity.lengthSquared(),
          D = x.sleepSpeedLimit ** 2;
        U >= D * 2 && (S.wakeUpAfterNarrowphase = !0);
      }
      if (
        x.allowSleep &&
        x.type === I.DYNAMIC &&
        x.sleepState === I.SLEEPING &&
        S.sleepState === I.AWAKE &&
        S.type !== I.STATIC
      ) {
        const U =
            S.velocity.lengthSquared() + S.angularVelocity.lengthSquared(),
          D = S.sleepSpeedLimit ** 2;
        U >= D * 2 && (x.wakeUpAfterNarrowphase = !0);
      }
      this.collisionMatrix.set(S, x, !0),
        this.collisionMatrixPrevious.get(S, x) ||
          ((wt.body = x),
          (wt.contact = P),
          S.dispatchEvent(wt),
          (wt.body = S),
          x.dispatchEvent(wt)),
        this.bodyOverlapKeeper.set(S.id, x.id),
        this.shapeOverlapKeeper.set(L.id, H.id);
    }
    for (
      this.emitContactEvents(),
        c && ((d.makeContactConstraints = V.now() - h), (h = V.now())),
        f = 0;
      f !== n;
      f++
    ) {
      const g = o[f];
      g.wakeUpAfterNarrowphase && (g.wakeUp(), (g.wakeUpAfterNarrowphase = !1));
    }
    for (b = m.length, f = 0; f !== b; f++) {
      const g = m[f];
      g.update();
      for (let P = 0, S = g.equations.length; P !== S; P++) {
        const x = g.equations[P];
        r.addEquation(x);
      }
    }
    r.solve(t, this), c && (d.solve = V.now() - h), r.removeAllEquations();
    const C = Math.pow;
    for (f = 0; f !== n; f++) {
      const g = o[f];
      if (g.type & p) {
        const P = C(1 - g.linearDamping, t),
          S = g.velocity;
        S.scale(P, S);
        const x = g.angularVelocity;
        if (x) {
          const L = C(1 - g.angularDamping, t);
          x.scale(L, x);
        }
      }
    }
    this.dispatchEvent(mn), c && (h = V.now());
    const B = this.stepnumber % (this.quatNormalizeSkip + 1) === 0,
      F = this.quatNormalizeFast;
    for (f = 0; f !== n; f++) o[f].integrate(t, B, F);
    this.clearForces(),
      (this.broadphase.dirty = !0),
      c && (d.integrate = V.now() - h),
      (this.stepnumber += 1),
      this.dispatchEvent(pn);
    let z = !0;
    if (this.allowSleep)
      for (z = !1, f = 0; f !== n; f++) {
        const g = o[f];
        g.sleepTick(this.time), g.sleepState !== I.SLEEPING && (z = !0);
      }
    this.hasActiveBodies = z;
  }
  emitContactEvents() {
    const t = this.hasAnyEventListener("beginContact"),
      e = this.hasAnyEventListener("endContact");
    if (((t || e) && this.bodyOverlapKeeper.getDiff(et, st), t)) {
      for (let n = 0, o = et.length; n < o; n += 2)
        (vt.bodyA = this.getBodyById(et[n])),
          (vt.bodyB = this.getBodyById(et[n + 1])),
          this.dispatchEvent(vt);
      vt.bodyA = vt.bodyB = null;
    }
    if (e) {
      for (let n = 0, o = st.length; n < o; n += 2)
        (gt.bodyA = this.getBodyById(st[n])),
          (gt.bodyB = this.getBodyById(st[n + 1])),
          this.dispatchEvent(gt);
      gt.bodyA = gt.bodyB = null;
    }
    et.length = st.length = 0;
    const s = this.hasAnyEventListener("beginShapeContact"),
      i = this.hasAnyEventListener("endShapeContact");
    if (((s || i) && this.shapeOverlapKeeper.getDiff(et, st), s)) {
      for (let n = 0, o = et.length; n < o; n += 2) {
        const r = this.getShapeById(et[n]),
          l = this.getShapeById(et[n + 1]);
        (it.shapeA = r),
          (it.shapeB = l),
          r && (it.bodyA = r.body),
          l && (it.bodyB = l.body),
          this.dispatchEvent(it);
      }
      it.bodyA = it.bodyB = it.shapeA = it.shapeB = null;
    }
    if (i) {
      for (let n = 0, o = st.length; n < o; n += 2) {
        const r = this.getShapeById(st[n]),
          l = this.getShapeById(st[n + 1]);
        (nt.shapeA = r),
          (nt.shapeB = l),
          r && (nt.bodyA = r.body),
          l && (nt.bodyB = l.body),
          this.dispatchEvent(nt);
      }
      nt.bodyA = nt.bodyB = nt.shapeA = nt.shapeB = null;
    }
  }
  clearForces() {
    const t = this.bodies,
      e = t.length;
    for (let s = 0; s !== e; s++) {
      const i = t[s];
      i.force, i.torque, i.force.set(0, 0, 0), i.torque.set(0, 0, 0);
    }
  }
}
new K();
const Wt = new W(),
  V = globalThis.performance || {};
if (!V.now) {
  let R = Date.now();
  V.timing && V.timing.navigationStart && (R = V.timing.navigationStart),
    (V.now = () => Date.now() - R);
}
new a();
const pn = { type: "postStep" },
  mn = { type: "preStep" },
  wt = { type: I.COLLIDE_EVENT_NAME, body: null, contact: null },
  fn = [],
  yn = [],
  wn = [],
  vn = [],
  et = [],
  st = [],
  vt = { type: "beginContact", bodyA: null, bodyB: null },
  gt = { type: "endContact", bodyA: null, bodyB: null },
  it = {
    type: "beginShapeContact",
    bodyA: null,
    bodyB: null,
    shapeA: null,
    shapeB: null,
  },
  nt = {
    type: "endShapeContact",
    bodyA: null,
    bodyB: null,
    shapeA: null,
    shapeB: null,
  };
function gn(R, t, e) {
  let {
    color: s = 65280,
    scale: i = 1,
    onInit: n,
    onUpdate: o,
  } = e === void 0 ? {} : e;
  const r = [],
    l = new Mt({ color: s ?? 65280, wireframe: !0 }),
    c = new a(),
    d = new a(),
    p = new a(),
    h = new j(),
    m = new Vt(1),
    u = new Xt(1, 1, 1),
    y = new Dt(10, 10, 10, 10);
  y.translate(0, 0, 1e-4);
  function w(C) {
    const A = new Gt(),
      B = [];
    for (let z = 0; z < C.vertices.length; z++) {
      const g = C.vertices[z];
      B.push(g.x, g.y, g.z);
    }
    A.setAttribute("position", new Lt(B, 3));
    const F = [];
    for (let z = 0; z < C.faces.length; z++) {
      const g = C.faces[z],
        P = g[0];
      for (let S = 1; S < g.length - 1; S++) {
        const x = g[S],
          L = g[S + 1];
        F.push(P, x, L);
      }
    }
    return (
      A.setIndex(F), A.computeBoundingSphere(), A.computeVertexNormals(), A
    );
  }
  function v(C) {
    const A = new Gt(),
      B = [],
      F = c,
      z = d,
      g = p;
    for (let P = 0; P < C.indices.length / 3; P++)
      C.getTriangleVertices(P, F, z, g),
        B.push(F.x, F.y, F.z),
        B.push(z.x, z.y, z.z),
        B.push(g.x, g.y, g.z);
    return (
      A.setAttribute("position", new Lt(B, 3)),
      A.computeBoundingSphere(),
      A.computeVertexNormals(),
      A
    );
  }
  function f(C) {
    const A = new Gt(),
      B = C.elementSize || 1,
      F = C.data.flatMap((g, P) => g.flatMap((S, x) => [P * B, x * B, S])),
      z = [];
    for (let g = 0; g < C.data.length - 1; g++)
      for (let P = 0; P < C.data[g].length - 1; P++) {
        const S = C.data[g].length,
          x = g * S + P;
        z.push(x + 1, x + S, x + S + 1), z.push(x + S, x + 1, x);
      }
    return (
      A.setIndex(z),
      A.setAttribute("position", new Lt(F, 3)),
      A.computeBoundingSphere(),
      A.computeVertexNormals(),
      A
    );
  }
  function b(C) {
    let A = new $();
    const {
      SPHERE: B,
      BOX: F,
      PLANE: z,
      CYLINDER: g,
      CONVEXPOLYHEDRON: P,
      TRIMESH: S,
      HEIGHTFIELD: x,
    } = M.types;
    switch (C.type) {
      case B: {
        A = new $(m, l);
        break;
      }
      case F: {
        A = new $(u, l);
        break;
      }
      case z: {
        A = new $(y, l);
        break;
      }
      case g: {
        const L = new ve(C.radiusTop, C.radiusBottom, C.height, C.numSegments);
        (A = new $(L, l)), (C.geometryId = L.id);
        break;
      }
      case P: {
        const L = w(C);
        (A = new $(L, l)), (C.geometryId = L.id);
        break;
      }
      case S: {
        const L = v(C);
        (A = new $(L, l)), (C.geometryId = L.id);
        break;
      }
      case x: {
        const L = f(C);
        (A = new $(L, l)), (C.geometryId = L.id);
        break;
      }
    }
    return R.add(A), A;
  }
  function E(C, A) {
    const {
      SPHERE: B,
      BOX: F,
      PLANE: z,
      CYLINDER: g,
      CONVEXPOLYHEDRON: P,
      TRIMESH: S,
      HEIGHTFIELD: x,
    } = M.types;
    switch (A.type) {
      case B: {
        const { radius: L } = A;
        C.scale.set(L * i, L * i, L * i);
        break;
      }
      case F: {
        C.scale.copy(A.halfExtents), C.scale.multiplyScalar(2 * i);
        break;
      }
      case z:
        break;
      case g: {
        C.scale.set(1 * i, 1 * i, 1 * i);
        break;
      }
      case P: {
        C.scale.set(1 * i, 1 * i, 1 * i);
        break;
      }
      case S: {
        C.scale.copy(A.scale).multiplyScalar(i);
        break;
      }
      case x: {
        C.scale.set(1 * i, 1 * i, 1 * i);
        break;
      }
    }
  }
  function T(C, A) {
    if (!C) return !1;
    const { geometry: B } = C;
    return (
      (B instanceof Vt && A.type === M.types.SPHERE) ||
      (B instanceof Xt && A.type === M.types.BOX) ||
      (B instanceof Dt && A.type === M.types.PLANE) ||
      (B.id === A.geometryId && A.type === M.types.CYLINDER) ||
      (B.id === A.geometryId && A.type === M.types.CONVEXPOLYHEDRON) ||
      (B.id === A.geometryId && A.type === M.types.TRIMESH) ||
      (B.id === A.geometryId && A.type === M.types.HEIGHTFIELD)
    );
  }
  function k(C, A) {
    let B = r[C],
      F = !1;
    return (
      T(B, A) || (B && R.remove(B), (r[C] = B = b(A)), (F = !0)), E(B, A), F
    );
  }
  function N() {
    const C = r,
      A = c,
      B = h;
    let F = 0;
    for (const z of t.bodies)
      for (let g = 0; g !== z.shapes.length; g++) {
        const P = z.shapes[g],
          S = k(F, P),
          x = C[F];
        x &&
          (z.quaternion.vmult(z.shapeOffsets[g], A),
          z.position.vadd(A, A),
          z.quaternion.mult(z.shapeOrientations[g], B),
          x.position.copy(A),
          x.quaternion.copy(B),
          S && n instanceof Function && n(z, x, P),
          !S && o instanceof Function && o(z, x, P)),
          F++;
      }
    for (let z = F; z < C.length; z++) {
      const g = C[z];
      g && R.remove(g);
    }
    C.length = F;
  }
  return { update: N };
}
class xn {
  constructor(t) {
    (this.world = t.world),
      (this.scene = t.scene),
      this.CreateGroundBody(),
      this.CreateGroundMesh(),
      this.CreateBoundaries();
  }
  CreateGroundMesh() {
    const e = new ke(this.loadingManager).load(
        "../resources/Textures/negy.jpg"
      ),
      s = new $(new Dt(4150, 2e3), new Mt({ map: e }));
    (s.rotation.x = -Math.PI / 2),
      s.position.set(0, -450, -100),
      (s.castShadow = !1),
      (s.receiveShadow = !0),
      this.scene.add(s);
  }
  CreateGroundBody() {
    const t = new I({ shape: new Et(new a(2e3, 1e-4, 1e3)) });
    t.position.set(0, -450, -200), this.world.addBody(t);
  }
  CreateBoundaries() {
    const t = new Et(new a(100, 500, 300)),
      e = new I({ shape: t });
    e.position.set(-1600, 0, -1e3),
      (this.leftBorder = e),
      this.world.addBody(e);
    const s = new I({ shape: t });
    s.position.set(1600, 120, -1e3),
      (this.rightBorder = s),
      this.world.addBody(s);
  }
}
class bn {
  constructor(t, e, s) {
    this.myGamepad,
      (this.player = e),
      (this.connected = !1),
      (this.gamepadIndex = t),
      (this.framesElapsed = 0),
      this.lastFramePressed,
      (this.game = s),
      window.addEventListener("gamepadconnected", (i) => {
        !this.connected &&
          this.gamepadIndex === i.gamepad.index &&
          (this.connected = !0);
      }),
      window.addEventListener("gamepaddisconnected", (i) => {
        this.gamepadIndex === i.gamepad.index && (this.connected = !1);
      });
  }
  update() {
    if (
      (this.framesElapsed++,
      (this.myGamepad = navigator.getGamepads()[this.gamepadIndex]),
      Math.abs(this.framesElapsed - this.lastFramePressed) > 10 ||
        this.lastFramePressed === void 0)
    ) {
      var t = this.applyDeadzone(this.myGamepad.axes[0], 0.25),
        e = this.applyDeadzone(this.myGamepad.axes[1], 0.25),
        s = this.applyDeadzone(this.myGamepad.axes[9], 0.25);
      this.myGamepad.buttons
        .map((l) => l.pressed)
        .forEach((l, c) => {
          if (l)
            switch (c) {
              case 1:
                (this.lastFramePressed = this.framesElapsed),
                  this.game.GameControl.gamestate ===
                  this.game.GameControl.GAMESTATE.RUNNING
                    ? (this.player.keyPressed.punch = !0)
                    : this.game.GameControl.selectOption();
                break;
              case 2:
                (this.lastFramePressed = this.framesElapsed),
                  this.game.GameControl.gamestate ===
                  this.game.GameControl.GAMESTATE.RUNNING
                    ? (this.player.keyPressed.kick = !0)
                    : this.game.GameControl.gamestate ===
                        this.game.GameControl.GAMESTATE.PAUSED &&
                      this.game.GameControl.TogglePause();
                break;
              case 5:
                (this.lastFramePressed = this.framesElapsed),
                  (this.player.keyPressed.pick = !0);
                break;
              case 9:
                (this.lastFramePressed = this.framesElapsed),
                  this.game.GameControl.TogglePause();
                break;
            }
        });
      let i, n, o, r;
      if (
        (this.myGamepad.buttons[12] &&
        this.myGamepad.buttons[13] &&
        this.myGamepad.buttons[14] &&
        this.myGamepad.buttons[15]
          ? ((i = this.myGamepad.buttons[12].pressed || s < -0.9),
            (n = this.myGamepad.buttons[13].pressed || s === 0),
            (o = this.myGamepad.buttons[14].pressed || (s > 0 && s <= 1)),
            (r = this.myGamepad.buttons[15].pressed || (s < 0 && s > -0.9)))
          : ((i = s < -0.9),
            (n = s === 0),
            (o = s > 0 && s <= 1),
            (r = s < 0 && s > -0.9)),
        t === 0 &&
          !o &&
          !r &&
          ((this.player.keyPressed.left = !1),
          (this.player.keyPressed.right = !1)),
        e === 0 && !n && (this.player.keyPressed.crouch = !1),
        e > 0 || i)
      ) {
        (this.lastFramePressed = this.framesElapsed),
          (this.player.keyPressed.jump = !0);
        return;
      }
      if (e < 0 || n) {
        (this.lastFramePressed = this.framesElapsed),
          (this.player.keyPressed.crouch = !0);
        return;
      }
      if (t > 0 || r) {
        (this.lastFramePressed = this.framesElapsed),
          this.game.GameControl.gamestate ===
          this.game.GameControl.GAMESTATE.RUNNING
            ? (this.player.keyPressed.right = !0)
            : this.game.GameControl.changeSelector("right");
        return;
      }
      if (t < 0 || o) {
        (this.lastFramePressed = this.framesElapsed),
          this.game.GameControl.gamestate ===
          this.game.GameControl.GAMESTATE.RUNNING
            ? (this.player.keyPressed.left = !0)
            : this.game.GameControl.changeSelector("left");
        return;
      }
    }
  }
  applyDeadzone(t, e, s) {
    return (
      (s = (Math.abs(t) - e) / (1 - e)), s < 0 && (s = 0), s * (t > 0 ? 1 : -1)
    );
  }
}
class En {
  constructor(t, e, s) {
    (this.player = e),
      (this.model = e.mesh),
      (this.mixer = e.mixer),
      (this.animations = e.animations),
      (this.currentAction = s),
      this.animations[this.currentAction].play(),
      (this.stones = t.stones),
      (this.scene = t.scene),
      (this.direction = new ft()),
      (this.GameUtils = t.Utils),
      (this.fadeDuration = 0.2),
      this.lastFrameComboPressed,
      (this.framesElapsed = 0);
  }
  update(t, e = this.player.keyPressed) {
    if (
      (this.checkKeyInputs(),
      this.play === "Pick" && this.PickObject(),
      this.currentAction !== this.play && this.AnimationSwitch(),
      this.loopEventlistener(),
      this.mixer.update(t),
      (this.velocity = this.player.velocity),
      this.play === "Walk" || this.play === "Walk-Backwards")
    ) {
      const i = (e.right ? this.velocity : -this.velocity) * t;
      this.model.position.x += i;
    }
    this.framesElapsed++,
      this.player.combo > 1 &&
        this.player.combo < 4 &&
        Math.abs(this.framesElapsed - this.lastFrameComboPressed) > 18 &&
        !this.player.isAttacking &&
        (this.player.combo = 1);
  }
  AnimationSwitch() {
    if (!this.animations[this.play]) return;
    const t = this.animations[this.play],
      e = this.animations[this.currentAction];
    t.setEffectiveTimeScale(1),
      t.setEffectiveWeight(1),
      e.fadeOut(this.fadeDuration),
      t.reset().fadeIn(this.fadeDuration).play(),
      (this.currentAction = this.play);
  }
  loopEventlistener() {
    if (
      this.currentAction === this.play &&
      this.currentAction !== this.switchFrom &&
      (this.play === "Jump" ||
        this.play === "Pick" ||
        this.play === "Throw" ||
        this.play === "Crouched" ||
        this.play === "Throw-Idle" ||
        this.play === "Step-Forward" ||
        this.play === "Step-Backward" ||
        this.play === "Punch" + (this.player.combo - 1) ||
        this.play === "Kick" + (this.player.combo - 1) ||
        this.play === "Light-HeadHit" ||
        this.play === "Heavy-HeadHit" ||
        this.play === "Light-TorsoHit" ||
        this.play === "Heavy-TorsoHit" ||
        this.play === "KnockOut") &&
      (this.mixer.addEventListener("loop", () => this.SwitchAnimation()),
      this.play === "Pick")
    ) {
      const e = this.animations[this.play],
        s = e.time * e.getClip().tracks.length;
      if (s <= 62 && s >= 60) {
        var t = this.model.getObjectByName("mixamorigRightHand");
        (this.pickedStone.picked = !0),
          this.pickedStone.mesh.position.set(0, 0, 0),
          this.pickedStone.mesh.rotation.set(0, 0, 0),
          this.pickedStone.mesh.scale.setScalar(0.03),
          this.scene.remove(this.pickedStone.mesh),
          t.add(this.pickedStone.mesh);
      }
      if (s <= 133 && s >= 131 && this.player.holdingRock) {
        this.pickedStone.picked = !1;
        var t = this.model.getObjectByName("mixamorigRightHand");
        this.pickedStone.mesh.scale.setScalar(0.07),
          t.remove(this.pickedStone.mesh),
          this.scene.add(this.pickedStone.mesh);
        const n = new ft();
        this.model.getWorldDirection(n);
        const o = 5e3;
        this.pickedStone.body.velocity.set(n.x * o, n.y * o - 200, n.z * o),
          (this.player.holdingRock = !1);
      }
    }
  }
  SwitchAnimation() {
    switch (this.play) {
      case "Jump":
        (this.switchFrom = "Jump"),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.player.keyPressed.jump = !1),
          (this.player.keyPressed.punch = !1),
          (this.player.keyPressed.kick = !1),
          (this.player.isAttacking = !1),
          (this.play = "Idle");
        break;
      case "Pick":
        (this.switchFrom = "Pick"),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.player.keyPressed.pick = !1),
          (this.play = "Idle"),
          (this.player.holdingRock = !1);
        break;
      case "Crouched":
        (this.switchFrom = "Crouched"),
          this.player.keyPressed.crouch ||
            ((this.player.keyPressed.punch = !1),
            (this.player.keyPressed.kick = !1),
            (this.player.isAttacking = !1),
            (this.play = "Idle")),
          this.mixer.removeEventListener("loop", this.SwitchAnimation);
        break;
      case "Step-Forward":
        (this.switchFrom = "Step-Forward"),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.player.keyPressed.doubleleft = !1),
          (this.player.keyPressed.doubleright = !1),
          this.checkKeyInputs(this.player.keyPressed);
        break;
      case "Step-Backward":
        (this.switchFrom = "Step-Backward"),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.player.keyPressed.doubleleft = !1),
          (this.player.keyPressed.doubleright = !1),
          this.checkKeyInputs(this.player.keyPressed);
        break;
      case "Punch" + (this.player.combo - 1):
        (this.switchFrom = "Punch" + (this.player.combo - 1)),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.player.keyPressed.punch = !1),
          (this.player.isAttacking = !1),
          (this.lastFrameComboPressed = this.framesElapsed),
          (this.play = "Idle");
        break;
      case "Kick" + (this.player.combo - 1):
        (this.switchFrom = "Kick" + (this.player.combo - 1)),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.player.keyPressed.kick = !1),
          (this.player.isAttacking = !1),
          (this.lastFrameComboPressed = this.framesElapsed),
          (this.play = "Idle");
        break;
      case "KnockOut":
        (this.switchFrom = "KnockOut"),
          this.mixer.removeEventListener("loop", this.SwitchAnimation),
          (this.animations[this.play].paused = !0),
          this.GameUtils.displayWinner();
    }
    (this.play === "Light-HeadHit" ||
      this.play === "Heavy-HeadHit" ||
      this.play === "Light-TorsoHit" ||
      this.play === "Heavy-TorsoHit") &&
      ((this.switchFrom = this.play),
      (this.player.keyPressed.doubleleft = !1),
      (this.player.keyPressed.doubleright = !1),
      (this.player.keyPressed.jump = !1),
      (this.player.keyPressed.pick = !1),
      (this.player.keyPressed.punch = !1),
      (this.player.keyPressed.kick = !1),
      (this.player.isAttacking = !1),
      this.mixer.removeEventListener("loop", this.SwitchAnimation),
      (this.play = "Idle"));
  }
  Attack(t) {
    if (
      !this.player.isAttacking &&
      (this.play === "Idle" ||
        this.play === "Walk" ||
        this.play === "Walk-Backwards")
    ) {
      let e = this.player.combo;
      e > 3 && (e = 1),
        (this.play = t === "punch" ? "Punch" + e : "Kick" + e),
        (this.player.isAttacking = !0),
        e++,
        (this.player.combo = e);
    }
  }
  PickObject() {
    this.player.holdingRock ||
      (this.stones.forEach((t) => {
        this.model.position.distanceTo(t.position) <= 100 &&
          ((this.player.holdingRock = !0), (this.pickedStone = t));
      }),
      this.player.holdingRock ||
        ((this.player.AnimationHandler.play = "Idle"),
        (this.player.keyPressed.pick = !1)));
  }
  checkKeyInputs() {
    const t = this.player.keyPressed;
    this.play !== "KnockOut" &&
      (this.play === "Light-HeadHit" ||
        this.play === "Heavy-HeadHit" ||
        this.play === "Light-TorsoHit" ||
        this.play === "Heavy-TorsoHit" ||
        (t.punch
          ? this.Attack("punch")
          : t.kick
          ? this.Attack("kick")
          : t.jump
          ? (this.play = "Jump")
          : t.crouch &&
            (this.play === "Idle" ||
              this.play === "Walk" ||
              this.play === "Walk-Backwards" ||
              this.play === "Crouched")
          ? (this.play = "Crouched")
          : t.pick &&
            (this.play === "Idle" ||
              this.play === "Walk" ||
              this.play === "Walk-Backwards" ||
              this.play === "Pick")
          ? (this.play = "Pick")
          : t.right
          ? (this.play =
              this.player.direction === "right" ? "Walk" : "Walk-Backwards")
          : t.left
          ? (this.play =
              this.player.direction === "left" ? "Walk" : "Walk-Backwards")
          : (this.play = "Idle")));
  }
}
class Cn {
  constructor({ player: t, enemy: e, Game: s }) {
    (this.player = t),
      (this.playerAnimationHandler = t.AnimationHandler),
      this.playerPreviousCombo,
      (this.enemy = e),
      (this.enemyAnimationHandler = e.AnimationHandler),
      (this.leftBorder = s.worldPhysics.leftBorder),
      (this.rightBorder = s.worldPhysics.rightBorder),
      (this.camera = s.camera),
      (this.cameraTarget = s.cameraTarget),
      (this.GameUtils = s.Utils);
  }
  updateCollisions() {
    this.CameraCollision(), this.borderCollision();
  }
  onAttackingCollison() {
    const t = this.player.isAttacking,
      e = this.player.cannonBodies,
      s = this.player.combo,
      i = this.enemy.cannonBodies;
    this.enemy.isDead,
      t &&
        this.playerPreviousCombo !== s &&
        this.enemy.AnimationHandler.play !== "KnockOut" &&
        Object.keys(e).forEach((n) => {
          const o = e[n];
          (n === "leftFoot" ||
            n === "rightFoot" ||
            n === "leftHand" ||
            n === "rightHand") &&
            o.collision === !0 &&
            (Object.keys(i).forEach((r) => {
              (r === "torso" || r === "head") &&
                i[r].Body === o.collidesWith &&
                this.playerPreviousCombo !== s &&
                ((this.enemy.AnimationHandler.play =
                  this.GameUtils.getDamageReaction(n, r, s)),
                this.enemy.AnimationHandler.AnimationSwitch(),
                (this.enemy.health = this.GameUtils.ReduceHealth(
                  this.player,
                  this.enemy,
                  this.GameUtils.CalculateDamage(n, r, s)
                )),
                this.enemy.health[1] + this.enemy.health[2] === 0 &&
                  (this.enemy.AnimationHandler.play = "KnockOut"),
                (this.playerPreviousCombo = s));
            }),
            (o.collision = !1));
        });
  }
  borderCollision() {
    const t = this.player.cannonBodies;
    Object.keys(t).forEach((e) => {
      const s = t[e];
      (s.collidesWith === this.rightBorder && s.collision) ||
      s.collidesWith === this.leftBorder
        ? (s.collision = !1)
        : (this.player.velocity = this.player.speed);
    });
  }
  CameraCollision() {
    const e = new $t().setFromObject(this.player.mesh),
      s = new $t().setFromObject(this.enemy.mesh),
      i = new Be(),
      n = new Me();
    if (
      (n.multiplyMatrices(
        this.camera.projectionMatrix,
        this.camera.matrixWorldInverse
      ),
      i.setFromProjectionMatrix(n),
      !i.intersectsBox(e.expandByScalar(-200)) &&
        i.intersectsBox(s.expandByScalar(-200)))
    ) {
      const r = new ft()
        .subVectors(this.player.position, this.camera.position)
        .normalize()
        .multiplyScalar(5).x;
      (this.cameraTarget.x += r), this.camera.lookAt(this.cameraTarget);
    } else
      !i.intersectsBox(e.expandByScalar(-200)) &&
        !i.intersectsBox(s.expandByScalar(-200)) &&
        ((this.player.velocity = 0),
        (this.player.mesh.position.x += this.player.direction = 0.2));
  }
}
class An {
  constructor(t, e) {
    (this.player = t),
      (this.lastTimeStamp = 0),
      this.timestamp,
      (this.leftKeyPressCount = 1),
      (this.rightKeyPressCount = 1),
      (this.game = e),
      addEventListener("keydown", (s) => this.onKeydown(s)),
      addEventListener("keyup", (s) => this.onKeyup(s));
  }
  onKeydown(t) {
    switch (t.key) {
      case "w":
        this.player.keyPressed.jump = !0;
        break;
      case "a":
        this.game.GameControl.gamestate ===
        this.game.GameControl.GAMESTATE.RUNNING
          ? this.checkLeftPressCount()
          : this.game.GameControl.changeSelector("left");
        break;
      case "s":
        this.player.keyPressed.crouch = !0;
        break;
      case "d":
        this.game.GameControl.gamestate ===
        this.game.GameControl.GAMESTATE.RUNNING
          ? this.checkRightPressCount()
          : this.game.GameControl.changeSelector("right");
        break;
      case "j":
        this.game.GameControl.gamestate ===
        this.game.GameControl.GAMESTATE.RUNNING
          ? (this.player.keyPressed.punch = !0)
          : this.game.GameControl.selectOption();
        break;
      case "l":
        this.game.GameControl.gamestate ===
        this.game.GameControl.GAMESTATE.RUNNING
          ? (this.player.keyPressed.kick = !0)
          : this.game.GameControl.gamestate ===
              this.game.GameControl.GAMESTATE.PAUSED &&
            this.game.GameControl.TogglePause();
        break;
      case "p":
        this.player.keyPressed.pick = !0;
        break;
      case "Escape":
        this.game.GameControl.TogglePause();
        break;
    }
  }
  onKeyup(t) {
    switch (t.key) {
      case "a":
        (this.player.keyPressed.left = !1), this.leftKeyPressCount++;
        break;
      case "s":
        this.player.keyPressed.crouch = !1;
        break;
      case "d":
        (this.player.keyPressed.right = !1), this.rightKeyPressCount++;
        break;
    }
  }
  checkLeftPressCount() {
    this.leftKeyPressCount === 2
      ? ((this.player.keyPressed.doubleleft = !0),
        (this.player.keyPressed.left = !1),
        (this.leftKeyPressCount = 1))
      : this.leftKeyPressCount === 1 &&
        ((this.player.keyPressed.left = !0),
        (this.lastTimeStamp = this.timestamp),
        (this.leftKeyPressCount = 1));
  }
  checkRightPressCount() {
    this.rightKeyPressCount === 2
      ? ((this.player.keyPressed.doubleright = !0),
        (this.player.keyPressed.right = !1),
        (this.rightKeyPressCount = 1))
      : this.rightKeyPressCount === 1 &&
        ((this.player.keyPressed.right = !0),
        (this.lastTimeStamp = this.timestamp),
        (this.rightKeyPressCount = 1));
  }
  updatePressCount(t) {
    (this.timestamp = t),
      this.timestamp - this.lastTimeStamp > 200 &&
        (this.leftKeyPressCount > 1 || this.rightKeyPressCount > 1) &&
        ((this.leftKeyPressCount = 1), (this.rightKeyPressCount = 1));
  }
}
class Sn {
  constructor(t, e, s) {
    (this.player = t),
      (this.enemy = e),
      (this.game = s),
      (this.framesElapsed = 0),
      (this.lastFrame = 0);
  }
  updatePlayer() {
    if (
      this.game.GameControl.gamestate ===
      this.game.GameControl.GAMESTATE.RUNNING
    )
      if (
        this.player.position.x + 200 < this.enemy.position.x ||
        this.player.position.x - 200 > this.enemy.position.x
      )
        this.player.direction === "right" &&
          (this.player.keyPressed.right = !0),
          this.player.direction === "left" &&
            (this.player.keyPressed.left = !0);
      else if (
        ((this.player.keyPressed.right = !1),
        (this.player.keyPressed.left = !1),
        this.enemy.isAttacking)
      )
        this.player.keyPressed.crouch = !0;
      else {
        this.player.keyPressed.crouch = !1;
        const t = this.player.AnimationHandler.lastFrameComboPressed,
          e = this.player.AnimationHandler.framesElapsed,
          s = this.enemy.AnimationHandler.play;
        if (
          (Math.abs(e - t) > 15 || t === void 0) &&
          !this.player.isAttacking &&
          s !== "KnockOut"
        )
          switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
              this.player.keyPressed.punch = !0;
            case 2:
              this.player.keyPressed.kick = !0;
          }
      }
  }
}
class we {
  constructor({ game: t, player: e, direction: s = "right" }) {
    (this.scene = t.scene),
      (this.world = t.world),
      (this.manager = t.loadingManager),
      (this.game = t),
      (this.playerObject = e),
      (this.scale = e.scale ? e.scale : 3),
      (this.speed = 150),
      (this.velocity = 0),
      (this.position = new ft()),
      (this.animations = {}),
      (this.loader = new ze(this.manager)),
      (this.cannonBodies = e.cannonBodies),
      (this.direction = s),
      this.control,
      this.loadModel();
  }
  loadModel() {
    this.loader.load(this.playerObject.model, (t) => {
      (this.mixer = new Ie(t)),
        t.scale.setScalar(this.scale),
        (this.mesh = t),
        this.mesh.traverse((e) => {
          (e.castShadow = !0),
            e.isMesh ||
              (e.name === "mixamorigHead" || e.name === "mixamorig1Head"
                ? (this.cannonBodies.head.part = e)
                : e.name === "mixamorigSpine" || e.name === "mixamorig1Spine"
                ? (this.cannonBodies.torso.part = e)
                : e.name === "mixamorigLeftHand" ||
                  e.name === "mixamorig1LeftHand"
                ? (this.cannonBodies.leftHand.part = e)
                : e.name === "mixamorigRightHand" ||
                  e.name === "mixamorig1RightHand"
                ? (this.cannonBodies.rightHand.part = e)
                : e.name === "mixamorigLeftFoot" ||
                  e.name === "mixamorig1LeftFoot"
                ? (this.cannonBodies.leftFoot.part = e)
                : (e.name === "mixamorigRightFoot" ||
                    e.name === "mixamorig1RightFoot") &&
                  (this.cannonBodies.rightFoot.part = e));
        }),
        this.scene.add(t),
        this.loadAnimations(),
        this.loadCannonBodies();
    });
  }
  Restart() {
    (this.health = { 1: 100, 2: 100 }),
      this.direction === "right"
        ? ((this.mesh.rotation.y = Math.PI / 2),
          this.mesh.position.set(-500, -440, -170))
        : ((this.mesh.rotation.y = -Math.PI / 2),
          this.mesh.position.set(500, -440, -170)),
      (this.combo = 1),
      (this.holdingRock = !1),
      (this.keyPressed = {
        jump: !1,
        crouch: !1,
        left: !1,
        doubleleft: !1,
        right: !1,
        doubleright: !1,
        kick: !1,
        punch: !1,
        pick: !1,
      }),
      (this.isAttacking = !1),
      (this.isDead = !1),
      this.AnimationHandler && (this.AnimationHandler.play = "Idle");
  }
  loadAnimations() {
    this.playerObject.animations.forEach((t) => {
      this.loader.load(t.src, (e) => {
        this.animations[t.name] = this.mixer.clipAction(e.animations[0]);
      });
    });
  }
  loadCannonBodies() {
    Object.keys(this.cannonBodies).forEach((t) => {
      const e = this.cannonBodies[t],
        s = e.shape;
      e.collision = !1;
      let i, n, o;
      switch (s) {
        case "Sphere":
          let r = e.size;
          (n = new $(new Vt(r), new Mt({ wireframe: !0, color: 65280 }))),
            (o = new Us(r)),
            (i = new I({ type: mt.STATIC })),
            i.addShape(o),
            (i.position.y = 10),
            this.world.addBody(i);
          break;
        case "Cylinder":
          let l = e.top,
            c = e.bottom,
            d = e.height;
          (n = new $(new ve(l, c, d), new Mt({ wireframe: !0, color: 65280 }))),
            (o = new Ys(l, c, d)),
            (i = new I({ type: mt.STATIC })),
            i.addShape(o),
            (i.position.x = 0),
            (i.position.y = 10),
            (i.position.z = 0),
            this.world.addBody(i);
          break;
      }
      i.addEventListener(
        "collide",
        (r) => {
          (e.collision = !0),
            (e.collidesWith = r.body),
            this.detectCollision.onAttackingCollison();
        },
        !1
      ),
        (e.Body = i),
        (e.Mesh = n);
    }),
      this.updateBodies();
  }
  onGameLoaded(t, e) {
    (this.control = t),
      t === "Keyboard" && (this.keyInputHandler = new An(this, this.game)),
      t === "Computer" && (this.AIHandler = new Sn(this, e, this.game)),
      t !== "Keyboard" &&
        t !== "Computer" &&
        ((this.gamePadHandler = new bn(t, this, this.game)),
        (this.control = "Gamepad")),
      this.setCannonBodiessDynamic(),
      (this.AnimationHandler = new En(this.game, this, "Idle")),
      (this.detectCollision = new Cn({
        player: this,
        enemy: e,
        Game: this.game,
      }));
  }
  setCannonBodiessDynamic() {
    Object.keys(this.cannonBodies).forEach((t) => {
      const e = this.cannonBodies[t].Body;
      e.type = mt.DYNAMIC;
    });
  }
  update({ enemy: t, delta: e, timestamp: s }) {
    this.control === "Keyboard" && this.keyInputHandler.updatePressCount(s),
      this.control === "Computer" && this.AIHandler.updatePlayer(),
      this.control === "Gamepad" &&
        this.gamePadHandler.connected &&
        this.gamePadHandler.update(),
      this.game.GameControl.gamestate ===
        this.game.GameControl.GAMESTATE.RUNNING &&
        (this.updateBodies(),
        this.AnimationHandler.update(e),
        this.UpdateDirection(t),
        this.detectCollision.updateCollisions());
  }
  updateBodies() {
    Object.keys(this.cannonBodies).forEach((t) => {
      const e = this.cannonBodies[t],
        s = e.part,
        i = e.Body,
        n = e.Mesh;
      let o = e.offsetX ? parseInt(e.offsetX) : 0;
      o = this.direction === "left" ? -o : o;
      let r = e.offsetY ? parseInt(e.offsetY) : 0;
      s.getWorldPosition(n.position),
        (i.position.x = n.position.x + o),
        (i.position.y = n.position.y + r),
        (i.position.z = n.position.z),
        (i.quaternion.x = n.quaternion.x),
        (i.quaternion.y = n.quaternion.y),
        (i.quaternion.z = n.quaternion.z),
        (i.quaternion.w = n.quaternion.w),
        i.velocity.set(0, 0, 0),
        i.angularVelocity.set(0, 0, 0);
    });
  }
  UpdateDirection(t) {
    if (
      ((this.position = this.mesh.position),
      this.position.x + 80 < t.position.x && this.direction === "left")
    ) {
      let s = this.mesh.rotation.y + Math.PI;
      (this.mesh.rotation.y = s), (this.direction = "right");
    } else if (
      this.position.x - 80 > t.position.x &&
      this.direction === "right"
    ) {
      let s = this.mesh.rotation.y + Math.PI;
      (this.mesh.rotation.y = s), (this.direction = "left");
    }
  }
}
class Tn {
  constructor(t) {
    this.timer, this.timerId, this.CountDownTimer, (this.game = t);
  }
  CalculateDamage(t, e, s) {
    switch (e) {
      case "head":
        if (t === "rightHand" || t === "leftHand") return s - 1 < 3 ? 14 : 18;
        if (t === "rightFoot" || t === "leftFoot") return s - 1 < 3 ? 20 : 26;
        break;
      case "torso":
        if (t === "rightHand" || t === "leftHand") return s - 1 < 3 ? 10 : 14;
        if (t === "rightFoot" || t === "leftFoot") return s - 1 < 3 ? 14 : 20;
        break;
    }
  }
  getDamageReaction(t, e, s) {
    switch (e) {
      case "head":
        if (t === "rightHand" || t === "leftHand")
          return s - 1 < 3 ? "Light-HeadHit" : "Heavy-HeadHit";
        if (t === "rightFoot" || t === "leftFoot")
          return s - 1 < 3 ? "Light-HeadHit" : "Heavy-HeadHit";
        break;
      case "torso":
        if (t === "rightHand" || t === "leftHand")
          return s - 1 < 3 ? "Light-TorsoHit" : "Heavy-TorsoHit";
        if (t === "rightFoot" || t === "leftFoot")
          return s - 1 < 3 ? "Light-TorsoHit" : "Heavy-TorsoHit";
        break;
    }
  }
  ReduceHealth(t, e, s) {
    (e.health[2] -= s),
      e.health[2] < 0 &&
        ((e.health[1] += e.health[2]),
        (e.health[2] = 0),
        e.health[1] < 0 && (e.health[1] = 0));
    for (let i = 1; i < 3; i++)
      ct.to("#" + e.healthBars[i], { width: e.health[i] + "%" });
    return e.health;
  }
  displayWinner() {
    clearInterval(this.timerId);
    const t = this.game.player1.health[1] + this.game.player1.health[2],
      e = this.game.player2.health[1] + this.game.player2.health[2];
    t === e
      ? (document.getElementById("displayText").innerText = "Tie")
      : t > e
      ? (document.getElementById("displayText").innerText = "Player 1 Wins")
      : t < e &&
        (document.getElementById("displayText").innerText = "Player 2 Wins"),
      (document.getElementById("displayText").style.display = "flex"),
      this.game.GameControl.ChangeState("GAMEOVER");
  }
  determineWinner() {
    clearInterval(this.timerId);
    const t = this.game.player1.health[1] + this.game.player1.health[2],
      e = this.game.player2.health[1] + this.game.player2.health[2];
    t === e
      ? ((this.game.player1.AnimationHandler.play = "KnockOut"),
        (this.game.player2.AnimationHandler.play = "KnockOut"))
      : t > e
      ? (this.game.player2.AnimationHandler.play = "KnockOut")
      : t < e && (this.game.player1.AnimationHandler.play = "KnockOut");
  }
  decreaseTimer() {
    this.timerId = setInterval(() => {
      this.timer--,
        this.timer === 10 &&
          (document.getElementById("timer").style.color = "red"),
        this.timer >= 0 &&
          (document.getElementById("timer").innerText = this.timer),
        this.timer === -1 && this.determineWinner();
    }, 1e3);
  }
  CountDown() {
    this.timerId = setInterval(() => {
      this.CountDownTimer--,
        this.CountDownTimer > 0 &&
          (document.getElementById("displayText").innerText =
            this.CountDownTimer),
        this.CountDownTimer === 0 &&
          (clearInterval(this.timerId),
          this.game.GameControl.ChangeState("RUNNING"),
          (document.getElementById("displayText").style.display = "none"),
          (document.getElementById("timer").style.color = "white"),
          (document.getElementById("displayText").style.backgroundColor =
            "transparent"),
          this.decreaseTimer());
    }, 1e3);
  }
}
class Pn {
  constructor(t) {
    (this.GAMESTATE = {
      PAUSED: 0,
      RUNNING: 1,
      LOADING: 2,
      GAMEOVER: 3,
      STARTED: 4,
    }),
      (this.gamestate = this.GAMESTATE.LOADING),
      (this.MenuScreen = document.getElementById("MenuScreen")),
      (this.ResumeOption = document.getElementById("Resume")),
      (this.RestartOption = document.getElementById("Restart")),
      (this.CharacterOption = document.getElementById("Characters")),
      (this.MenuOption = document.getElementById("Menu")),
      (this.selector = 1),
      (this.Options = {}),
      (this.game = t);
  }
  ChangeState(t, e) {
    (e = this.gamestate),
      (this.gamestate = this.GAMESTATE[t]),
      this.gamestate === this.GAMESTATE.STARTED && this.Restart(),
      this.gamestate === this.GAMESTATE.GAMEOVER &&
        ((this.MenuScreen.style.display = "block"),
        (this.ResumeOption.style.display = "none"),
        (document.getElementsByClassName("accept")[0].innerText =
          "Accept[J][2]"),
        (document.getElementsByClassName("back")[0].style.display = "none"),
        (this.selector = 1),
        (this.Options = {
          1: this.RestartOption,
          2: this.CharacterOption,
          3: this.MenuOption,
        }),
        this.checkSelector()),
      this.gamestate === this.GAMESTATE.PAUSED &&
        (clearInterval(this.game.Utils.timerId),
        (this.ResumeOption.style.display = "block"),
        (this.MenuScreen.style.display = "block"),
        (document.getElementsByClassName("accept")[0].innerText =
          "Accept[J][2]"),
        (document.getElementsByClassName("back")[0].innerText = "Back[L][3]"),
        (this.selector = 1),
        (this.Options = {
          1: this.ResumeOption,
          2: this.RestartOption,
          3: this.CharacterOption,
          4: this.MenuOption,
        }),
        this.checkSelector()),
      this.gamestate === this.GAMESTATE.RUNNING &&
        e === this.GAMESTATE.PAUSED &&
        ((this.MenuScreen.style.display = "none"),
        (document.getElementsByClassName("accept")[0].innerText =
          "Punch[J][2]"),
        (document.getElementsByClassName("back")[0].innerText = "Kick[L][3]"),
        this.game.Utils.decreaseTimer());
  }
  Restart() {
    this.game.camera.lookAt(0, 0, 100),
      (this.game.cameraTarget = new ft(0, 0, 0)),
      (this.game.player1.direction = "right"),
      (this.game.player2.direction = "left"),
      this.game.player1.Restart(),
      this.game.player2.Restart(),
      this.game.player1.healthBars &&
        this.game.player2.healthBars &&
        (ct.to("#" + this.game.player1.healthBars[1], {
          width: this.game.player1.health[1] + "%",
          onComplete: () => {
            ct.to("#" + this.game.player1.healthBars[2], {
              width: this.game.player1.health[2] + "%",
            });
          },
        }),
        ct.to("#" + this.game.player2.healthBars[1], {
          width: this.game.player2.health[1] + "%",
          onComplete: () => {
            ct.to("#" + this.game.player2.healthBars[2], {
              width: this.game.player2.health[2] + "%",
            });
          },
        })),
      (this.game.Utils.timer = 90),
      (this.game.Utils.CountDownTimer = 3),
      (document.getElementsByClassName("displayText")[0].style.display =
        "flex"),
      (document.getElementsByClassName("displayText")[0].style.backgroundColor =
        "rgba(0, 0, 0, 0.9)"),
      (document.getElementsByClassName("accept")[0].innerText = "Punch[J][2]"),
      (document.getElementsByClassName("back")[0].style.display = "block"),
      (document.getElementsByClassName("back")[0].innerText = "Kick[L][3]"),
      (document.getElementById("displayText").innerText =
        this.game.Utils.CountDownTimer),
      (document.getElementById("timer").innerText = this.game.Utils.timer),
      this.game.Utils.CountDown();
  }
  TogglePause() {
    switch (this.gamestate) {
      case this.GAMESTATE.RUNNING:
        this.ChangeState("PAUSED");
        break;
      case this.GAMESTATE.PAUSED:
        this.ChangeState("RUNNING");
        break;
    }
  }
  changeSelector(t) {
    (this.gamestate !== this.GAMESTATE.PAUSED &&
      this.gamestate !== this.GAMESTATE.GAMEOVER) ||
      (t === "right"
        ? this.selector < Object.keys(this.Options).length && this.selector++
        : t === "left" && this.selector > 1 && this.selector--,
      this.checkSelector());
  }
  checkSelector() {
    (this.gamestate !== this.GAMESTATE.PAUSED &&
      this.gamestate !== this.GAMESTATE.GAMEOVER) ||
      (Object.keys(this.Options).forEach((t) => {
        this.Options[t].style.textShadow = "";
      }),
      (this.Options[this.selector].style.textShadow =
        " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)"));
  }
  selectOption() {
    if (
      !(
        this.gamestate !== this.GAMESTATE.PAUSED &&
        this.gamestate !== this.GAMESTATE.GAMEOVER
      )
    )
      switch (((this.MenuScreen.style.display = "none"), this.selector)) {
        case 1:
          this.gamestate === this.GAMESTATE.PAUSED
            ? this.ChangeState("RUNNING")
            : this.ChangeState("STARTED");
          break;
        case 2:
          this.gamestate === this.GAMESTATE.PAUSED
            ? this.ChangeState("STARTED")
            : (location.href = "../SelectCharacter/index.html");
          break;
        case 3:
          this.gamestate === this.GAMESTATE.PAUSED
            ? (location.href = "../SelectCharacter/index.html")
            : (location.href = "../index.html");
          break;
        case 4:
          this.gamestate === this.GAMESTATE.PAUSED &&
            (location.href = "../index.html");
          break;
      }
  }
}
class kn {
  constructor({ gameWidth: t, gameHeight: e }) {
    (this.mode = localStorage.getItem("Mode")),
      (this.playerControlers = JSON.parse(localStorage.getItem("Controllers"))),
      (this.selectedCharacters = JSON.parse(
        localStorage.getItem("Characters")
      )),
      this.mode === null && (location.href = "../index.html"),
      this.playerControlers === null &&
        (location.href = "../SelectController/index.html"),
      this.selectedCharacters === null &&
        (location.href = "../SelectCharacter/index.html"),
      (this.gameWidth = t),
      (this.gameHeight = e),
      this.init(),
      (this.loadingManager.onLoad = () => {
        this.onGameLoaded();
      }),
      (this.loaded = !1);
  }
  init() {
    (this.scene = new Ne()),
      (this.world = new un({ gravity: new a(0, -9.82, 0) })),
      (this.camera = new Fe(30, this.gameWidth / this.gameHeight, 1, 1e4)),
      this.camera.position.set(0, -30, 1800),
      this.camera.lookAt(0, 0, 100),
      (this.cameraTarget = new ft(0, 0, 0)),
      new Re(this.camera),
      (this.light = new Ge(16777215, 0.6)),
      this.light.position.set(-500, 300, 500),
      (this.light.castShadow = !0),
      (this.light.shadow.bias = 0.01),
      (this.light.shadow.mapSize.width = 2048),
      (this.light.shadow.mapSize.height = 2048),
      (this.light.shadow.camera.near = 1),
      (this.light.shadow.camera.far = 500),
      (this.light.shadow.camera.left = 200),
      (this.light.shadow.camera.right = -200),
      (this.light.shadow.camera.top = 200),
      (this.light.shadow.camera.bottom = -200),
      this.scene.add(this.light),
      new Le(this.light, 5),
      (this.light2 = new He(16777215, 0.6)),
      this.scene.add(this.light2),
      (this.clock = new qe()),
      (this.renderer = new Oe({ antialias: !0 })),
      this.renderer.setPixelRatio(devicePixelRatio),
      this.renderer.setSize(this.gameWidth, this.gameHeight),
      (this.renderer.shadowMap.enabled = !0),
      (this.renderer.shadowMap.type = _e),
      document
        .getElementsByClassName("parent")[0]
        .appendChild(this.renderer.domElement),
      (this.loadingManager = new je());
    const e = new We(this.loadingManager).load([
      "../resources/Textures/posx.jpg",
      "../resources/Textures/negx.jpg",
      "../resources/Textures/posy.jpg",
      "../resources/Textures/negy.jpg",
      "../resources/Textures/posz.jpg",
      "../resources/Textures/negz.jpg",
    ]);
    (this.scene.background = e),
      (this.cannonDebugger = new gn(this.scene, this.world, {
        color: 16711680,
      })),
      (this.worldPhysics = new xn(this)),
      (this.Utils = new Tn(this)),
      (this.GameControl = new Pn(this));
    const s = Zt[this.selectedCharacters.player1],
      i = Zt[this.selectedCharacters.player2];
    console.log(this.selectedCharacters.player1),
      (this.player1 = new we({ game: this, player: s })),
      (this.player2 = new we({ game: this, player: i, direction: "left" })),
      (this.stones = []);
  }
  onGameLoaded() {
    (this.loaded = !0), this.GameControl.ChangeState("STARTED");
    const t = this.playerControlers.player1,
      e = this.playerControlers.player2;
    this.player1.onGameLoaded(t, this.player2),
      this.player2.onGameLoaded(e, this.player1),
      (this.player1.healthBars = { 1: "playerHealth2", 2: "playerHealth1" }),
      (this.player2.healthBars = { 1: "enemyHealth2", 2: "enemyHealth1" }),
      (document.getElementById("loadingScreen").style.display = "none"),
      (document.getElementsByClassName("parent")[0].style.display =
        "inline-block");
  }
  update(t) {
    let e = this.clock.getDelta();
    e > 0.1 && (e = 0.1),
      this.loaded &&
        (this.player1.update({ enemy: this.player2, timestamp: t, delta: e }),
        this.player2.update({ enemy: this.player1, timestamp: t, delta: e }),
        this.stones.forEach((s) => {
          s.updateBody();
        })),
      this.GameControl.gamestate === this.GameControl.GAMESTATE.RUNNING &&
        (this.world.step(e), this.renderer.render(this.scene, this.camera));
  }
}
let xt = innerWidth,
  bt = innerHeight;
const lt = new kn({ gameWidth: xt, gameHeight: bt });
addEventListener("resize", () => {
  (xt = innerWidth),
    (bt = innerHeight),
    (lt.gameWidth = xt),
    (lt.gameHeight = bt),
    lt.renderer.setSize(xt, bt),
    (lt.camera.aspect = xt / bt),
    lt.camera.updateProjectionMatrix();
});
lt.loadingManager.onProgress = (R, t, e) => {
  const s = (t / e) * 100;
  ct.to("#leftBar", { width: s + "%" }), ct.to("#rightBar", { width: s + "%" });
};
function Pe(R) {
  lt.update(R), requestAnimationFrame(Pe);
}
Pe();
