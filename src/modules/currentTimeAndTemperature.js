const container = document.querySelector("#pageContent");

function currentTimeAndTemperature(json) {
  // CREATE ELEMENTS
  const dateTimeLocationContainer = document.createElement("div");
  dateTimeLocationContainer.classList.add("dateTimeLocationContainer");

  const localTime = document.createElement("div");
  localTime.classList.add("localTime");

  const currentDate = document.createElement("div");
  currentDate.classList.add("currentDate");

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");

  const country = document.createElement("div");
  country.classList.add("country");

  const locationName = document.createElement("div");
  locationName.classList.add("locationName");

  const currentWeatherConditions = document.createElement("div");
  currentWeatherConditions.classList.add("currentWeatherConditions");

  const currentTempContainer = document.createElement("div");
  currentTempContainer.classList.add("currentTempContainer");

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("currentTemp");

  const currentTempIcon = document.createElement("img");
  currentTempIcon.classList.add("weatherIcon");

  // ACCESS API AND FORMAT DATA
  // Last Upadated
  const timeForUpdate = new Date(json.current.last_updated);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weekDay = days[timeForUpdate.getDay()];
  const day = timeForUpdate.getDate();
  const month = timeForUpdate.getMonth() + 1;
  const hours = timeForUpdate.getHours();
  const minutePre = timeForUpdate.getMinutes();
  const minutes = minutePre < 10 ? "0" + minutePre : minutePre;

  const updated = `${weekDay} ${day}.${month}, ${hours}:${minutes}`;

  // Add data to elements
  currentTempIcon.src = json.current.condition.icon;
  currentWeatherConditions.textContent = `Weather condition: ${json.current.condition.text}`;
  locationName.textContent = `${json.location.name}, ${json.location.country}`;
  currentTemp.textContent = `Current temperature: ${json.current.temp_c}°C`;
  currentDate.textContent = `Last updated: ${updated}`;

  // Update page
  function updateLocation() {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    dateTimeLocationContainer.appendChild(locationName);
    dateTimeLocationContainer.appendChild(currentTempIcon);
    dateTimeLocationContainer.appendChild(currentWeatherConditions);
    dateTimeLocationContainer.appendChild(currentTemp);
    dateTimeLocationContainer.appendChild(currentDate);
    container.appendChild(dateTimeLocationContainer);
  }
  updateLocation();
}

export default currentTimeAndTemperature;
