function currentTimeAndTemperature(city) {
  const currentTimeAndTemperatureContainer = document.createElement("div");
  currentTimeAndTemperatureContainer.classList.add(
    "currentTimeAndTemperatureContainer"
  );

  /* const container = document.querySelector("#pageContent"); */

  /*   const searchBar = document.createElement("input");
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("value", "");
  searchBar.classList.add("searchLocation");

  const submitLocation = document.createElement("button");
  submitLocation.classList.add("submitLocation");
  submitLocation.textContent = "Search"; */

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

  const currentTempContainer = document.createElement("div");
  currentTempContainer.classList.add("currentTempContainer");
  currentTempContainer.textContent = "";

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("currentTemp");

  const currentTempIcon = document.createElement("img");
  currentTempIcon.classList.add("weatherIcon");

  async function getCurrentWeather(setLocation) {
    const KEY = process.env.API_KEY;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${setLocation}`,
        { mode: "cors" }
      );
      let json = await response.json();
      console.log(json);
      currentTempIcon.src = json.current.condition.icon;
      locationName.textContent = json.location.name;
      currentTempContainer.textContent = json.current.temp_c;
    } catch (error) {
      console.log(error.message);
    }
  }
  /* const city = searchBar.value; */
  getCurrentWeather(city);
  /*   dateTimeLocationContainer.appendChild(searchBar);
  dateTimeLocationContainer.appendChild(submitLocation); */
  dateTimeLocationContainer.appendChild(locationName);
  dateTimeLocationContainer.appendChild(currentTempIcon);
  dateTimeLocationContainer.appendChild(currentTempContainer);

  return dateTimeLocationContainer;
}

export default currentTimeAndTemperature;
