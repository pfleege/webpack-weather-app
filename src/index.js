import "./styles.css";
import getWeatherData from "./modules/getWeatherData";
import currentTimeAndTemperature from "./modules/currentTimeAndTemperature";
const container = document.querySelector("#pageContent");

function loadPage() {
  /* const container = document.querySelector("#pageContent"); */
  /* container.appendChild(getWeatherData("helsinki")); */
  container.appendChild(currentTimeAndTemperature("helsinki"));
}

loadPage();

const searchBar = document.querySelector(".searchLocation");
const submitLocation = document.querySelector(".submitLocation");

searchBar.addEventListener("input", recordInput);
let location = "";
function recordInput(evt) {
  location = evt.target.value;
}

submitLocation.addEventListener("click", updateLocation);

function updateLocation() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(currentTimeAndTemperature(location));

  searchBar.value = location;
}
