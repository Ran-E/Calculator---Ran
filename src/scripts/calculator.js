document.addEventListener("DOMContentLoaded", (any) => {
  const screen = document.querySelector("#screen");
  const cBt = document.querySelector("#clear");
  const calBt = document.querySelectorAll(".button");

  cBt.addEventListener("click", clr);
  calBt.forEach((element) => {
    element.addEventListener("click", () => {
      screen.value += element.value;
    });
  });

  // function display(val) {
  //   screen.value += val;
  // }

  // }
  // numBt.onkeyup = function (event) {
  //   if (event.key === 13) {
  //     console.log("Enter");
  //     let x = screen.value;
  //     console.log(x);
  //     solve();
  //   }
  // };

  // function solve() {
  //   let x = document.querySelector("#screen").value;
  //   let y = math.evaluate(x);
  //   document.querySelector("#screen").value = y;
  // }

  // Function that clear the display
  function clr() {
    screen.value = "";
  }
});
