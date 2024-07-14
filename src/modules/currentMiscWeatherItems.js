const container = document.querySelector("#pageContent");
const mainContent = document.querySelector(".mainContent");
import sunriseSunset64 from "../img/sunriseSunset64.png";
import humidityImage from "../img/humidity.png";
import chanceOfRainImage from "../img/chanceOfRain.png";
import windImage from "../img/wind.png";
import uvImage from "../img/uv.png";

function currentMiscItems(json) {
  // CREATE ELEMENTS
  const currentMiscWeatherItemsContainer = document.createElement("div");
  currentMiscWeatherItemsContainer.classList.add(
    "currentMiscWeatherItemsContainer"
  );

  const currentMiscWeatherItemsContent = document.createElement("div");
  currentMiscWeatherItemsContent.classList.add(
    "currentMiscWeatherItemsContent"
  );
  const currentMiscWeatherItemsHeading = document.createElement("h3");
  currentMiscWeatherItemsHeading.classList.add(
    "currentMiscWeatherItemsHeading"
  );

  const sunriseSetContainer = document.createElement("div");
  sunriseSetContainer.classList.add("sunriseSetContainer");
  const sunriseSetContent = document.createElement("div");
  sunriseSetContent.classList.add("sunriseSetContent");
  const sunriseHeading = document.createElement("div");
  sunriseHeading.classList.add("miscHeading");
  const sunriseTime = document.createElement("div");
  sunriseTime.classList.add("sunriseSetText");
  const sunsetHeading = document.createElement("div");
  sunsetHeading.classList.add("miscHeading");
  const sunsetTime = document.createElement("div");
  sunsetTime.classList.add("sunriseSetText");
  const sunriseSetIcon = document.createElement("img");
  sunriseSetIcon.classList.add("sunriseSetIcon");

  sunriseSetContent.appendChild(sunriseHeading);
  sunriseSetContent.appendChild(sunriseTime);
  sunriseSetContent.appendChild(sunsetHeading);
  sunriseSetContent.appendChild(sunsetTime);
  sunriseSetContainer.appendChild(sunriseSetContent);
  sunriseSetContainer.appendChild(sunriseSetIcon);

  const humidityContent = document.createElement("div");
  humidityContent.classList.add("humidityContent");
  const humidityHeading = document.createElement("div");
  humidityHeading.classList.add("miscHeading");
  const humidityContainer = document.createElement("div");
  humidityContainer.classList.add("humidityContainer");
  const humidityIcon = document.createElement("img");
  humidityIcon.classList.add("miscIcon");
  const humidityPercentage = document.createElement("div");
  humidityPercentage.classList.add("miscText");

  humidityContainer.appendChild(humidityIcon);
  humidityContainer.appendChild(humidityHeading);
  humidityContent.appendChild(humidityContainer);
  humidityContent.appendChild(humidityPercentage);

  const rainContent = document.createElement("div");
  rainContent.classList.add("rainContent");
  const rainHeading = document.createElement("div");
  rainHeading.classList.add("miscHeading");
  const rainContainer = document.createElement("div");
  rainContainer.classList.add("humidityContainer");
  const rainIcon = document.createElement("img");
  rainIcon.classList.add("miscIcon");
  const chanceOfRain = document.createElement("div");
  chanceOfRain.classList.add("miscText");

  rainContainer.appendChild(rainIcon);
  rainContainer.appendChild(rainHeading);
  rainContent.appendChild(rainContainer);
  rainContent.appendChild(chanceOfRain);

  const windContent = document.createElement("div");
  windContent.classList.add("windContent");
  const windHeading = document.createElement("div");
  windHeading.classList.add("miscHeading");
  const windContainer = document.createElement("div");
  windContainer.classList.add("humidityContainer");
  const windIcon = document.createElement("img");
  windIcon.classList.add("miscIcon");
  const windSpeed = document.createElement("div");
  windSpeed.classList.add("miscText");

  windContainer.appendChild(windIcon);
  windContainer.appendChild(windHeading);
  windContent.appendChild(windContainer);
  windContent.appendChild(windSpeed);

  const uvContent = document.createElement("div");
  uvContent.classList.add("uvContent");
  const uvHeading = document.createElement("div");
  uvHeading.classList.add("miscHeading");
  const uvContainer = document.createElement("div");
  uvContainer.classList.add("humidityContainer");
  const uvIcon = document.createElement("img");
  uvIcon.classList.add("miscIcon");
  const uvIndex = document.createElement("div");
  uvIndex.classList.add("miscText");

  uvContainer.appendChild(uvIcon);
  uvContainer.appendChild(uvHeading);
  uvContent.appendChild(uvContainer);
  uvContent.appendChild(uvIndex);

  // ACCESS API AND FORMAT DATA

  currentMiscWeatherItemsHeading.textContent = "Current";
  sunriseHeading.textContent = `Sunrise:`;
  sunsetHeading.textContent = `Sunset:`;
  humidityHeading.textContent = `Humidity:`;
  rainHeading.textContent = `Chance of Rain:`;
  windHeading.textContent = `Wind speed:`;
  uvHeading.textContent = `UV Index:`;

  sunriseSetIcon.src = sunriseSunset64;
  humidityIcon.src = humidityImage;
  rainIcon.src = chanceOfRainImage;
  windIcon.src = windImage;
  uvIcon.src = uvImage;

  sunriseTime.textContent = json.forecast.forecastday[0].astro.sunrise;
  sunsetTime.textContent = json.forecast.forecastday[0].astro.sunset;
  humidityPercentage.textContent = `${json.current.humidity} %`;
  chanceOfRain.textContent = `${json.forecast.forecastday[0].day.daily_chance_of_rain} %`;
  windSpeed.textContent = `${(json.current.wind_kph / 3.6).toFixed(1)} m/s`;
  uvIndex.textContent = `${json.current.uv}`;

  currentMiscWeatherItemsContent.appendChild(currentMiscWeatherItemsHeading);
  currentMiscWeatherItemsContent.appendChild(sunriseSetContainer);
  currentMiscWeatherItemsContent.appendChild(humidityContent);
  currentMiscWeatherItemsContent.appendChild(rainContent);
  currentMiscWeatherItemsContent.appendChild(windContent);
  currentMiscWeatherItemsContent.appendChild(uvContent);

  currentMiscWeatherItemsContainer.appendChild(currentMiscWeatherItemsContent);
  mainContent.appendChild(currentMiscWeatherItemsContainer);
  container.appendChild(mainContent);
}

export default currentMiscItems;
