import "./modulepreload-polyfill-3cfb730f.js";
let s;
const t = { player1: null, player2: null };
let l = "player1",
  o = [],
  i = 0,
  r;
window.addEventListener("load", () => {
  (s = localStorage.getItem("Mode")),
    s === null && (location.pathname = "index.html"),
    s === "Single Player" &&
      ((document.getElementsByClassName("player")[1].style.display = "none"),
      (document.getElementsByClassName("text")[1].style.display = "none")),
    (document.getElementsByClassName("body")[0].style.display = "flex"),
    addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 74:
          t.player1 !== "Keyboard" && t.player2 !== "Keyboard" && y("Keyboard");
          break;
        case 76:
          if (l === "player2") {
            let a = "player1";
            t[a] === "Keyboard"
              ? ((l = a),
                (t[a] = null),
                (document.getElementsByClassName(
                  "controller"
                )[0].style.opacity = 0))
              : (location.pathname = "index.html");
          } else location.pathname = "index.html";
      }
    }),
    addEventListener("gamepadconnected", (e) => {
      let a = e.gamepad.index;
      o.push(a);
    }),
    addEventListener("gamepaddisconnected", (e) => {
      let a = e.gamepad.index;
      o = o.filter((n) => n !== a);
    }),
    m();
});
function m() {
  i++,
    o.forEach((e) => {
      navigator
        .getGamepads()
        [e].buttons.map((n) => n.pressed)
        .forEach((n, d) => {
          if (n)
            switch (d) {
              case 1:
                t.player1 !== e &&
                  t.player2 !== e &&
                  (Math.abs(i - r) > 10 || r === void 0) &&
                  y(e);
                break;
              case 2:
                if (l === "player2" && (Math.abs(i - r) > 10 || r === void 0)) {
                  let c = "player1";
                  t[c] === e
                    ? ((l = c),
                      (t[c] = null),
                      (document.getElementsByClassName(
                        "controller"
                      )[0].style.opacity = 0))
                    : (location.pathname = "index.html");
                } else location.pathname = "index.html";
            }
        });
    }),
    requestAnimationFrame(m);
}
function y(e) {
  (t[l] = e),
    l === "player1"
      ? ((document.getElementsByClassName("controller")[0].style.opacity = 100),
        e === "Keyboard"
          ? document
              .getElementsByClassName("controller")[0]
              .setAttribute("src", "resources/Icons/wasd.png")
          : document
              .getElementsByClassName("controller")[0]
              .setAttribute("src", "resources/Icons/controller.png"))
      : l === "player2" &&
        ((document.getElementsByClassName("controller")[1].style.opacity = 100),
        e === "Keyboard"
          ? document
              .getElementsByClassName("controller")[1]
              .setAttribute("src", "resources/Icons/wasd.png")
          : document
              .getElementsByClassName("controller")[1]
              .setAttribute("src", "resources/Icons/controller.png")),
    s === "Single Player" || (s === "Multi Player" && l === "player2")
      ? (s === "Single Player" && (t.player2 = "Computer"),
        localStorage.setItem("Controllers", JSON.stringify(t)),
        (window.location.pathname = "SelectCharacter/index.html"))
      : s === "Multi Player" && l === "player1" && (l = "player2");
}
