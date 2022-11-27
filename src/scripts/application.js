document.addEventListener("DOMContentLoaded", () => {
  const infoBt = document.querySelector("#info");
  const historyBt = document.querySelector("#historyBt");
  const history = document.querySelector(".history");
  const scientificBt = document.querySelector("#scientific_mode");
  const scientific = document.querySelector(".scientific");

  infoBt.addEventListener("click", () => {
    alert(
      "Developer’s name: Ran Elbaz\nCalculator’s version (stage): 1.0.0\nDescription: basic and scientific calculator"
    );
  });

  historyBt.addEventListener("click", () => {
    if (history.style.display === "none") {
      history.style.display = "inherit";
    } else {
      history.style.display = "none";
    }
  });

  scientificBt.addEventListener("click", () => {
    if (scientific.style.display === "none") {
      scientific.style.display = "block";
      scientific.style.removeProperty("display");
    } else {
      scientific.style.display = "none";
    }
  });
});
