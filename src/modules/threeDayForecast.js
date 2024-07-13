const container = document.querySelector("#pageContent");
const mainContent = document.querySelector(".mainContent");

function dailyWeatherForecast(json) {
  // CREATE ELEMENTS
  const dailyWeatherForecastContainer = document.createElement("div");
  dailyWeatherForecastContainer.classList.add("dailyWeatherForecastContainer");

  const dailyWeatherForecastContent = document.createElement("div");
  dailyWeatherForecastContent.classList.add("dailyWeatherForecastContent");

  const weatherDay0 = document.createElement("div");
  weatherDay0.classList.add("weatherDay0");
  const day0Container = document.createElement("div");
  day0Container.classList.add("dayContainer");
  const day0Date = document.createElement("div");
  day0Date.classList.add("dayDate");
  const day0Img = document.createElement("img");
  day0Img.classList.add("dayilyIcon");
  const day0High = document.createElement("div");
  day0High.classList.add("dayHigh");
  const day0Low = document.createElement("div");
  day0Low.classList.add("dayLow");

  weatherDay0.appendChild(day0Date);
  day0Container.appendChild(day0Img);
  day0Container.appendChild(day0High);
  day0Container.appendChild(day0Low);
  weatherDay0.appendChild(day0Container);

  const weatherDay1 = document.createElement("div");
  weatherDay1.classList.add("weatherDay1");
  const day1Container = document.createElement("div");
  day1Container.classList.add("dayContainer");
  const day1Date = document.createElement("div");
  day1Date.classList.add("dayDate");
  const day1Img = document.createElement("img");
  day1Img.classList.add("dayilyIcon");
  const day1High = document.createElement("div");
  day1High.classList.add("dayHigh");
  const day1Low = document.createElement("div");
  day1Low.classList.add("dayLow");

  weatherDay1.appendChild(day1Date);
  day1Container.appendChild(day1Img);
  day1Container.appendChild(day1High);
  day1Container.appendChild(day1Low);
  weatherDay1.appendChild(day1Container);

  const weatherDay2 = document.createElement("div");
  weatherDay2.classList.add("weatherDay2");
  const day2Container = document.createElement("div");
  day2Container.classList.add("dayContainer");
  const day2Date = document.createElement("div");
  day2Date.classList.add("dayDate");
  const day2Img = document.createElement("img");
  day2Img.classList.add("dayilyIcon");
  const day2High = document.createElement("div");
  day2High.classList.add("dayHigh");
  const day2Low = document.createElement("div");
  day2Low.classList.add("dayLow");

  weatherDay2.appendChild(day2Date);
  day2Container.appendChild(day2Img);
  day2Container.appendChild(day2High);
  day2Container.appendChild(day2Low);
  weatherDay2.appendChild(day2Container);

  // ACCESS API AND FORMAT DATA
  day0Date.textContent = json.forecast.forecastday[0].date;
  day1Date.textContent = json.forecast.forecastday[1].date;
  day2Date.textContent = json.forecast.forecastday[2].date;

  day0Img.src = json.forecast.forecastday[0].day.condition.icon;
  day1Img.src = json.forecast.forecastday[1].day.condition.icon;
  day2Img.src = json.forecast.forecastday[2].day.condition.icon;

  day0High.textContent = `Max: ${json.forecast.forecastday[0].day.maxtemp_c}°C`;
  day1High.textContent = `Max: ${json.forecast.forecastday[1].day.maxtemp_c}°C`;
  day2High.textContent = `Max: ${json.forecast.forecastday[2].day.maxtemp_c}°C`;

  day0Low.textContent = `Min: ${json.forecast.forecastday[0].day.mintemp_c}°C`;
  day1Low.textContent = `Min: ${json.forecast.forecastday[1].day.mintemp_c}°C`;
  day2Low.textContent = `Min: ${json.forecast.forecastday[2].day.mintemp_c}°C`;

  /* console.log(json.location.name); */
  dailyWeatherForecastContent.appendChild(weatherDay0);
  dailyWeatherForecastContent.appendChild(weatherDay1);
  dailyWeatherForecastContent.appendChild(weatherDay2);
  dailyWeatherForecastContainer.appendChild(dailyWeatherForecastContent);
  mainContent.appendChild(dailyWeatherForecastContainer);
  container.appendChild(mainContent);
  /* container.appendChild(dailyWeatherForecastContainer); */
}

export default dailyWeatherForecast;
