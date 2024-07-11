function currentTimeAndTemperature(city) {
  const currentTimeAndTemperatureContainer = document.createElement("div");
  currentTimeAndTemperatureContainer.classList.add(
    "currentTimeAndTemperatureContainer"
  );

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

  async function getCurrentWeather(setLocation) {
    const KEY = process.env.API_KEY;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${setLocation}&days=3`,
        { mode: "cors" }
      );
      const json = await response.json();
      console.log(json);
      const timeForUpdate = new Date(json.current.last_updated);
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      const weekDay = days[timeForUpdate.getDay()];
      const day = timeForUpdate.getDate();
      const month = timeForUpdate.getMonth() + 1;
      const hours = timeForUpdate.getHours();
      const minutePre = timeForUpdate.getMinutes();
      const minutes = minutePre < 10 ? "0" + minutePre : minutePre;

      const updated = `${weekDay} ${day}.${month}, ${hours}:${minutes}`;
      currentTempIcon.src = json.current.condition.icon;
      currentWeatherConditions.textContent = `Weather condition: ${json.current.condition.text}`;
      locationName.textContent = `${json.location.name}, ${json.location.country}`;
      currentTemp.textContent = `Current temperature: ${json.current.temp_c}°C`;
      currentDate.textContent = `Last updated: ${updated}`;
    } catch (error) {
      console.log(error.message);
    }
  }

  getCurrentWeather(city);

  dateTimeLocationContainer.appendChild(locationName);
  dateTimeLocationContainer.appendChild(currentTempIcon);
  dateTimeLocationContainer.appendChild(currentWeatherConditions);
  dateTimeLocationContainer.appendChild(currentTemp);
  dateTimeLocationContainer.appendChild(currentDate);

  return dateTimeLocationContainer;
}

export default currentTimeAndTemperature;
