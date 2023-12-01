import "./modulepreload-polyfill-3cfb730f.js";
import {
  p as E,
  h as H,
  i as G,
  D as z,
  m as A,
  W as N,
  L as K,
  o as R,
  T as F,
  a as P,
  P as J,
  M as U,
  f as q,
  A as V,
  g as S,
} from "index-b74b9157.js";
console.log(E);
class Q {
  constructor({ gameWidth: e, gameHeight: s }) {
    (this.gameWidth = e),
      (this.gameHeight = s),
      this.init(),
      (this.loaded = !1);
  }
  init() {
    (this.scene = new H()),
      (this.camera = new G(30, this.gameWidth / this.gameHeight, 1, 1e4)),
      this.camera.position.set(0, 30, 1800),
      this.camera.lookAt(0, 0, 100),
      (this.light = new z(16777215, 0.6)),
      this.light.position.set(-500, 300, 500),
      this.scene.add(this.light),
      (this.clock = new A()),
      (this.renderer = new N({ antialias: !0 })),
      this.renderer.setPixelRatio(devicePixelRatio),
      this.renderer.setSize(this.gameWidth, this.gameHeight),
      document.getElementById("body").appendChild(this.renderer.domElement),
      (this.loadingManager = new K());
    const s = new R(this.loadingManager).load([
      "../resources/Textures/posx.jpg",
      "../resources/Textures/negx.jpg",
      "../resources/Textures/posy.jpg",
      "../resources/Textures/negy.jpg",
      "../resources/Textures/posz.jpg",
      "../resources/Textures/negz.jpg",
    ]);
    this.scene.background = s;
    const p = new F(this.loadingManager).load("../resources/Textures/negy.jpg"),
      o = new P(new J(4150, 2e3), new U({ map: p }));
    (o.rotation.x = -Math.PI / 2),
      o.position.set(0, -450, -100),
      this.scene.add(o),
      (this.loader = new q(this.loadingManager)),
      (this.loadedCharacters = { player1: {}, player2: {} }),
      Object.keys(E).forEach((f, y) => {
        const u = E[f];
        Object.keys(this.loadedCharacters).forEach((g) => {
          const b = this.loadedCharacters[g];
          this.loader.load(u.model, (m) => {
            const M = new V(m);
            (m.visible = !1), m.scale.setScalar(u.scale);
            const w = m;
            g === "player1"
              ? ((w.rotation.y = Math.PI / 2), w.position.set(-500, -350, -170))
              : ((w.rotation.y = -Math.PI / 2),
                w.position.set(500, -350, -170)),
              this.loader.load(u.animations[0].src, (T) => {
                var W = M.clipAction(T.animations[0]);
                W.play(), this.scene.add(m);
                const O = y + 1;
                b[O] = { mesh: w, mixer: M };
              });
          });
        });
      });
  }
  update() {
    let e = this.clock.getDelta();
    e > 0.1 && (e = 0.1),
      this.loaded &&
        Object.keys(this.loadedCharacters).forEach((s) => {
          const d = this.loadedCharacters[s];
          Object.keys(d).forEach((p) => {
            d[p].mixer.update(e);
          });
        }),
      this.renderer.render(this.scene, this.camera);
  }
}
let x = { player1: null, player2: null },
  a = { player1: { row: 1, column: 1 }, player2: { row: null, column: null } },
  t = "player1",
  C = [],
  j,
  c,
  h = 0,
  i,
  n = new Q({ gameWidth: innerWidth, gameHeight: innerHeight });
n.loadingManager.onProgress = (r, e, s) => {
  const d = (e / s) * 100;
  S.to("#leftBar", { width: d + "%" }), S.to("#rightBar", { width: d + "%" });
};
n.loadingManager.onLoad = () => {
  (document.getElementById("loadingScreen").style.display = "none"),
    (document.getElementById("body").style.display = "block"),
    (j = localStorage.getItem("Mode")),
    (c = JSON.parse(localStorage.getItem("Controllers"))),
    j === null && (location.href = "../index.html"),
    c === null && (location.href = "../SelectController/index.html"),
    l(),
    addEventListener("keydown", (r) => {
      if (
        (r.keyCode === 76 &&
          c.player1 === "Keyboard" &&
          (t === "player2"
            ? ((t = "player1"),
              (x.player1 = null),
              (a.player2 = { row: null, column: null }),
              B(),
              l())
            : (location.href = "../SelectController/index.html")),
        c[t] === "Keyboard" ||
          (c.player1 === "Keyboard" && c.player2 === "Computer"))
      )
        switch (r.keyCode) {
          case 74:
            I();
            break;
          case 65:
            a[t].column > 1 ? a[t].column-- : (a[t].column = 3), l();
            break;
          case 68:
            a[t].column < 3 ? a[t].column++ : (a[t].column = 1), l();
            break;
          case 83:
            a[t].row > 1 ? a[t].row-- : (a[t].row = 2), l();
            break;
          case 87:
            a[t].row < 2 ? a[t].row++ : (a[t].row = 1), l();
            break;
        }
    }),
    addEventListener("gamepadconnected", (r) => {
      let e = r.gamepad.index;
      C.push(e);
    }),
    addEventListener("gamepaddisconnected", (r) => {
      let e = r.gamepad.index;
      C = C.filter((s) => s !== e);
    }),
    addEventListener("resize", () => {
      (n.gameWidth = innerWidth),
        (n.gameHeight = innerHeight),
        n.renderer.setSize(innerWidth, innerHeight),
        (n.camera.aspect = innerWidth / innerHeight),
        n.camera.updateProjectionMatrix();
    }),
    (n.loaded = !0),
    v();
};
function X() {
  h++,
    C.forEach((r) => {
      let e = navigator.getGamepads()[r];
      if (
        (e.buttons[2].pressed &&
          c.player1 === r &&
          (Math.abs(h - i) > 10 || i === void 0) &&
          (t === "player2"
            ? ((i = h),
              (t = "player1"),
              (x.player1 = null),
              (a.player2 = { row: null, column: null }),
              B(),
              l())
            : (location.href = "../SelectController/index.html")),
        (c[t] === r || (c.player1 === r && c.player2 === "Computer")) &&
          (Math.abs(h - i) > 10 || i === void 0))
      ) {
        var d = k(e.axes[0], 0.25),
          p = k(e.axes[1], 0.25),
          o = k(e.axes[9], 0.25);
        e.buttons
          .map((b) => b.pressed)
          .forEach((b, m) => {
            if (b)
              switch (m) {
                case 1:
                  (i = h), I();
                  break;
              }
          });
        let f, y, u, g;
        if (
          (e.buttons[12] && e.buttons[13] && e.buttons[14] && e.buttons[15]
            ? ((f = e.buttons[12].pressed || o < -0.9),
              (y = e.buttons[13].pressed || o === 0),
              (u = e.buttons[14].pressed || (o > 0 && o <= 1)),
              (g = e.buttons[15].pressed || (o < 0 && o > -0.9)))
            : ((f = o < -0.9),
              (y = o === 0),
              (u = o > 0 && o <= 1),
              (g = o < 0 && o > -0.9)),
          p > 0 || f)
        ) {
          (i = h), a[t].row > 1 ? a[t].row-- : (a[t].row = 2), l();
          return;
        }
        if (p < 0 || y) {
          (i = h), a[t].row < 2 ? a[t].row++ : (a[t].row = 1), l();
          return;
        }
        if (d > 0 || g) {
          (i = h), a[t].column < 3 ? a[t].column++ : (a[t].column = 1), l();
          return;
        }
        if (d < 0 || u) {
          (i = h), a[t].column > 1 ? a[t].column-- : (a[t].column = 3), l();
          return;
        }
      }
    });
}
function k(r, e, s) {
  return (
    (s = (Math.abs(r) - e) / (1 - e)), s < 0 && (s = 0), s * (r > 0 ? 1 : -1)
  );
}
function v() {
  n.update(), X(), requestAnimationFrame(v);
}
function I() {
  const r = a[t],
    e = L(r.row, r.column),
    s = document.getElementById(e).innerText;
  (t === "player2" && s === x.player1) ||
    ((x[t] = s),
    t === "player1"
      ? ((t = "player2"),
        e !== 1
          ? (a[t] = { row: 1, column: 1 })
          : (a[t] = { row: 1, column: 2 }),
        l())
      : (localStorage.setItem("Characters", JSON.stringify(x)),
        (window.location.href = "../GamePage/index.html")));
}
function l() {
  for (let r = 1; r < 7; r++)
    document.getElementById(r).style.backgroundColor = "white";
  Object.keys(a).forEach((r) => {
    const e = a[r];
    if (e.row === null || e.column === null) return;
    const s = L(e.row, e.column);
    (document.getElementById(s).style.backgroundColor =
      r === "player1" ? "red" : "blue"),
      Z(s);
  });
}
function Z(r) {
  const e = n.loadedCharacters[t];
  Object.keys(e).forEach((s) => {
    parseInt(s) === r ? (e[s].mesh.visible = !0) : (e[s].mesh.visible = !1);
  });
}
function B() {
  Object.keys(n.loadedCharacters).forEach((r) => {
    Object.keys(n.loadedCharacters[r]).forEach(
      (e) => (n.loadedCharacters[r][e].mesh.visible = !1)
    );
  });
}
function L(r, e) {
  var s = (r - 1) * 3 + e;
  return s;
}
