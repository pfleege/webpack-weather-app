import "./styles.css";
import currentTimeAndTemperature from "./modules/currentTimeAndTemperature";
const container = document.querySelector("#pageContent");

function loadPage() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(currentTimeAndTemperature("helsinki"));
}

loadPage();

const searchBar = document.querySelector(".searchLocation");

searchBar.addEventListener("input", recordInput);
searchBar.addEventListener("keypress", recordKey);

let location = "";

function recordKey(evt) {
  if (evt.key === "Enter") {
    evt.preventDefault();
    updateLocation();
    searchBar.value = "";
  }
}

function recordInput(evt) {
  evt.preventDefault();
  location = evt.target.value;
}

function updateLocation() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(currentTimeAndTemperature(location));
}
