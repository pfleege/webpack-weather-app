const container = document.querySelector("#pageContent");
const mainContent = document.querySelector(".mainContent");
const hourlyData = document.querySelector(".hourlyForecastContainer");

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

  const currentWeatherConditionsText = document.createElement("p");
  currentWeatherConditionsText.classList.add("currentWeatherConditionsText");

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

  const updated = `${weekDay} ${day}.${month} at ${hours}:${minutes}`;

  // Add data to elements
  currentTempIcon.src = json.current.condition.icon;
  currentWeatherConditions.textContent = `Weather condition:`;
  currentWeatherConditionsText.textContent = `${json.current.condition.text}`;
  locationName.textContent = `${json.location.name}, ${json.location.country}`;
  currentTemp.textContent = `${json.current.temp_c}°C`;
  currentDate.textContent = `${updated}`;

  // Update page
  function updateLocation() {
    /*     while (container.firstChild) {
      container.removeChild(container.firstChild);
    } */
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
    if (hourlyData) {
      container.remove(hourlyData);
    }
    dateTimeLocationContainer.appendChild(locationName);
    dateTimeLocationContainer.appendChild(currentDate);
    dateTimeLocationContainer.appendChild(currentTemp);
    dateTimeLocationContainer.appendChild(currentTempIcon);
    currentWeatherConditions.appendChild(currentWeatherConditionsText);
    dateTimeLocationContainer.appendChild(currentWeatherConditions);

    mainContent.appendChild(dateTimeLocationContainer);
    container.appendChild(mainContent);

    /* container.appendChild(dateTimeLocationContainer); */
  }
  updateLocation();
}

export default currentTimeAndTemperature;
