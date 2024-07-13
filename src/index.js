import "./styles.css";
import APIconnection from "./modules/connectToAPI";

const container = document.querySelector("#pageContent");
const mainContent = document.querySelector(".mainContent");
const searchBar = document.querySelector("#searchLocation");
const hourlyData = document.querySelector(
  "#pageContent>.hourlyForecastContainer"
);
let newLocation;

// Initialize page
function loadPage() {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  if (hourlyData) {
    container.remove(hourlyData);
  }
  APIconnection("helsinki");
}

loadPage();

// Activate search bar
searchBar.addEventListener("input", recordInput);
searchBar.addEventListener("keypress", recordKey);

// Save input from search bar
function recordInput(evt) {
  evt.preventDefault();
  newLocation = evt.target.value;
}

// Run API search
function recordKey(evt) {
  if (evt.key === "Enter") {
    evt.preventDefault();
    updateLocation();
  }
}

function updateLocation() {
  /*   while (container.firstChild) {
    container.removeChild(container.firstChild);
  } */
  const container = document.querySelector("#pageContent");
  const mainContent = document.querySelector(".mainContent");
  const hourlyData = document.querySelector(
    "#pageContent>.hourlyForecastContainer"
  );
  const ics = document.querySelector(".ics-container");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  /*   console.log(hourlyData);
  console.log(ics); */
  if (hourlyData) {
    hourlyData.remove();
  }
  if (ics) {
    ics.remove();
  }
  const location = newLocation ? newLocation : "helsinki";

  APIconnection(location);
}
