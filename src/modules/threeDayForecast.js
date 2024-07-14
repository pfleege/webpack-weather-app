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
  const day0HighLow = document.createElement("div");
  day0HighLow.classList.add("dayHighLow");
  const day0High = document.createElement("div");
  day0High.classList.add("dayHigh");
  const day0Low = document.createElement("div");
  day0Low.classList.add("dayLow");

  weatherDay0.appendChild(day0Date);
  day0HighLow.appendChild(day0High);
  day0HighLow.appendChild(day0Low);
  day0Container.appendChild(day0HighLow);
  day0Container.appendChild(day0Img);
  weatherDay0.appendChild(day0Container);

  const weatherDay1 = document.createElement("div");
  weatherDay1.classList.add("weatherDay1");
  const day1Container = document.createElement("div");
  day1Container.classList.add("dayContainer");
  const day1Date = document.createElement("div");
  day1Date.classList.add("dayDate");
  const day1Img = document.createElement("img");
  day1Img.classList.add("dayilyIcon");
  const day1HighLow = document.createElement("div");
  day1HighLow.classList.add("dayHighLow");
  const day1High = document.createElement("div");
  day1High.classList.add("dayHigh");
  const day1Low = document.createElement("div");
  day1Low.classList.add("dayLow");

  weatherDay1.appendChild(day1Date);
  day1HighLow.appendChild(day1High);
  day1HighLow.appendChild(day1Low);
  day1Container.appendChild(day1HighLow);
  day1Container.appendChild(day1Img);
  weatherDay1.appendChild(day1Container);

  const weatherDay2 = document.createElement("div");
  weatherDay2.classList.add("weatherDay2");
  const day2Container = document.createElement("div");
  day2Container.classList.add("dayContainer");
  const day2Date = document.createElement("div");
  day2Date.classList.add("dayDate");
  const day2Img = document.createElement("img");
  day2Img.classList.add("dayilyIcon");
  const day2HighLow = document.createElement("div");
  day2HighLow.classList.add("dayHighLow");
  const day2High = document.createElement("div");
  day2High.classList.add("dayHigh");
  const day2Low = document.createElement("div");
  day2Low.classList.add("dayLow");

  weatherDay2.appendChild(day2Date);
  day2HighLow.appendChild(day2High);
  day2HighLow.appendChild(day2Low);
  day2Container.appendChild(day2HighLow);
  day2Container.appendChild(day2Img);
  weatherDay2.appendChild(day2Container);

  // ACCESS API AND FORMAT DATA
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date0 = new Date(json.forecast.forecastday[0].date);
  const weekDay0 = days[date0.getDay()];
  const day0 = date0.getDate();
  const month0 = date0.getMonth() + 1;
  const formattedDate0 = `${weekDay0} ${day0}.${month0}`;
  day0Date.textContent = formattedDate0;

  const date1 = new Date(json.forecast.forecastday[1].date);
  const weekDay1 = days[date1.getDay()];
  const day1 = date1.getDate();
  const month1 = date1.getMonth() + 1;
  const formattedDate1 = `${weekDay1} ${day1}.${month1}`;
  day1Date.textContent = formattedDate1;

  const date2 = new Date(json.forecast.forecastday[2].date);
  const weekDay2 = days[date2.getDay()];
  const day2 = date2.getDate();
  const month2 = date2.getMonth() + 1;
  const formattedDate2 = `${weekDay2} ${day2}.${month2}`;
  day2Date.textContent = formattedDate2;

  day0Img.src = json.forecast.forecastday[0].day.condition.icon;
  day1Img.src = json.forecast.forecastday[1].day.condition.icon;
  day2Img.src = json.forecast.forecastday[2].day.condition.icon;

  day0High.textContent = `Max: ${json.forecast.forecastday[0].day.maxtemp_c}°C`;
  day1High.textContent = `Max: ${json.forecast.forecastday[1].day.maxtemp_c}°C`;
  day2High.textContent = `Max: ${json.forecast.forecastday[2].day.maxtemp_c}°C`;

  day0Low.textContent = `Min: ${json.forecast.forecastday[0].day.mintemp_c}°C`;
  day1Low.textContent = `Min: ${json.forecast.forecastday[1].day.mintemp_c}°C`;
  day2Low.textContent = `Min: ${json.forecast.forecastday[2].day.mintemp_c}°C`;

  dailyWeatherForecastContent.appendChild(weatherDay1);
  dailyWeatherForecastContent.appendChild(weatherDay2);
  dailyWeatherForecastContainer.appendChild(dailyWeatherForecastContent);
  mainContent.appendChild(dailyWeatherForecastContainer);
  container.appendChild(mainContent);
}

export default dailyWeatherForecast;
