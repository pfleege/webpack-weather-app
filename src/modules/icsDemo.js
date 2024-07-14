import icsLogo from "../img/iCeeqSolutionsLogo.png";

function icsStatement() {
  const container = document.createElement("div");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const img = document.createElement("img");
  /* const logo = new Image(); */

  container.className = "ics-container";
  p.className = "ics-p";
  p.textContent = "API demo by: ";
  a.href = "https://iceeqsolutions.fi";
  a.target = "_blank";
  img.className = "ics-img";
  img.src = icsLogo;

  a.appendChild(img);
  container.appendChild(p);
  container.appendChild(a);

  return container;
}

export default icsStatement;
