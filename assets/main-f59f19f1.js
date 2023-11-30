import "./modulepreload-polyfill-3cfb730f.js";
const b = document.getElementById("Single"),
  h = document.getElementById("Multi"),
  p = document.getElementById("Quit");
var d;
let i = [],
  t = 2,
  l = 0,
  r;
window.onload = () => {
  n(),
    localStorage.removeItem("Controllers"),
    localStorage.removeItem("Characters"),
    localStorage.removeItem("Mode"),
    addEventListener("keydown", (a) => {
      switch (a.keyCode) {
        case 74:
          S();
          break;
        case 65:
          t > 1 && (t--, n());
          break;
        case 37:
          t > 1 && (t--, n());
          break;
        case 68:
          t < 3 && (t++, n());
          break;
        case 39:
          t < 3 && (t++, n());
          break;
      }
    }),
    addEventListener("gamepadconnected", (a) => {
      let e = a.gamepad.index;
      i.push(e);
    }),
    addEventListener("gamepaddisconnected", (a) => {
      let e = a.gamepad.index;
      i = i.filter((o) => o !== e);
    }),
    w();
};
function w() {
  l++,
    i.forEach((a) => {
      let e = navigator.getGamepads()[a];
      var o = g(e.axes[0], 0.25),
        s = g(e.axes[9], 0.25);
      if (Math.abs(l - r) > 10 || r === void 0) {
        e.buttons
          .map((f) => f.pressed)
          .forEach((f, u) => {
            if (f)
              switch ((console.log(u), u)) {
                case 1:
                  (Math.abs(l - r) > 10 || r === void 0) && S();
                  break;
              }
          });
        let c, m;
        if (
          (e.buttons[14] && e.buttons[15]
            ? ((c = e.buttons[14].pressed || (s > 0 && s <= 1)),
              (m = e.buttons[15].pressed || (s < 0 && s > -0.9)))
            : ((c = s > 0 && s <= 1), (m = s < 0 && s > -0.9)),
          o < 0 || c)
        ) {
          (r = l), t > 1 && (t--, n());
          return;
        }
        if (o > 0 || m) {
          (r = l), t < 3 && (t++, n());
          return;
        }
      }
    }),
    requestAnimationFrame(w);
}
function n() {
  switch (
    ((b.style.textShadow = ""),
    (h.style.textShadow = ""),
    (p.style.textShadow = ""),
    t)
  ) {
    case 1:
      h.style.textShadow = " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";
      break;
    case 2:
      b.style.textShadow = " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";
      break;
    case 3:
      p.style.textShadow = " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";
      break;
  }
}
function S() {
  switch (t) {
    case 1:
      (d = "Multi Player"),
        localStorage.setItem("Mode", d),
        (window.location.pathname = "SelectController/index.html");
      break;
    case 2:
      (d = "Single Player"),
        localStorage.setItem("Mode", d),
        (window.location.pathname = "SelectController/index.html");
      break;
    case 3:
      alert("Abeg Where Do You Know Your Quitting To?");
      break;
  }
}
function g(a, e, o) {
  return (
    (o = (Math.abs(a) - e) / (1 - e)), o < 0 && (o = 0), o * (a > 0 ? 1 : -1)
  );
}
