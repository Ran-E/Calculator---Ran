document.addEventListener("DOMContentLoaded", () => {
  const infoBt = document.getElementById("info");

  infoBt.addEventListener("click", () => {
    alert(
      "Developer’s name: Ran Elbaz\nCalculator’s version (stage): 1.0.0\nDescription: basic and scientific calculator"
    );
  });
});
