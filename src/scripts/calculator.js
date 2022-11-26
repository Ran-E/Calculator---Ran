document.addEventListener("DOMContentLoaded", (any) => {
  const screen = document.querySelector("#screen");
  const cBt = document.querySelector("#clear");
  const calBt = document.querySelectorAll(".button");
  const enterBt = document.querySelector("#equal");
  const backBt = document.querySelector("#return");
  const historyArea = document.querySelector("#history");

  opLs = [];
  console.log(opLs);
  cBt.addEventListener("click", clr);

  calBt.forEach((element) => {
    element.addEventListener("click", () => {
      opLs.push(element.value);
      screen.value = opLs.join("");
    });
  });

  enterBt.addEventListener("click", enter);

  function enter() {
    let x = screen.value;
    historyArea.value += x + "\r\n";
    let y = eval(x);
    screen.value = "=" + y;
    historyArea.value += screen.value + "\r\n";
  }

  backBt.addEventListener("click", back);

  function back() {
    opLs = opLs.slice(0, -2);
    screen.value = opLs.join("");
  }
  // Function that clear the display
  function clr() {
    opLs = [];
    screen.value = "";
    historyArea.value = "";
  }
});
