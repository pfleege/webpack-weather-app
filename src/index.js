import "./styles.css";
import APIconnection from "./modules/connectToAPI";

const container = document.querySelector("#pageContent");
const searchBar = document.querySelector(".searchLocation");
let newLocation;

// Initialize page
function loadPage() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
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
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const location = newLocation ? newLocation : "helsinki";

  APIconnection(location);
}
