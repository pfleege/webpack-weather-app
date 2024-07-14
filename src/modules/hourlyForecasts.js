import icsStatement from "./icsDemo";
const container = document.querySelector("#pageContent");

function hourlyForecasts(json) {
  // CREATE ELEMENTS
  const hourlyForecastContainer = document.createElement("div");
  hourlyForecastContainer.classList.add("hourlyForecastContainer");
  const hourlyForecastContent = document.createElement("div");
  hourlyForecastContent.classList.add("hourlyForecastContent");

  for (let i = 0; i < 24; i = i + 3) {
    let dayContainer = document.createElement("div");
    let hour = document.createElement("div");
    let heading = document.createElement("h3");
    let time = document.createElement("p");
    let weatherIcon = document.createElement("img");
    let temp = document.createElement("div");

    dayContainer.className = `hour${[i]}Container`;
    dayContainer.className = `hourContainer`;
    hour.className = `hour${[i]}`;

    const forecastTime = new Date(json.forecast.forecastday[1].hour[i].time);
    const day = forecastTime.getDate();
    const month = forecastTime.getMonth() + 1;
    const hoursPre = forecastTime.getHours();
    const hours = hoursPre < 10 ? "0" + hoursPre : hoursPre;
    const minutePre = forecastTime.getMinutes();
    const minutes = minutePre < 10 ? "0" + minutePre : minutePre;

    heading.textContent = `${day}.${month}`;
    time.textContent = `${hours}:${minutes}`;
    weatherIcon.className = `hourIcon`;
    weatherIcon.src = json.forecast.forecastday[1].hour[i].condition.icon;
    temp.className = `hour${[i]}Temp`;
    temp.textContent = `${json.forecast.forecastday[1].hour[i].temp_c}°C`;

    hour.appendChild(heading);
    hour.appendChild(time);
    dayContainer.appendChild(hour);
    dayContainer.appendChild(weatherIcon);
    dayContainer.appendChild(temp);
    hourlyForecastContent.appendChild(dayContainer);
  }

  hourlyForecastContainer.appendChild(hourlyForecastContent);
  container.appendChild(hourlyForecastContainer);
  container.appendChild(icsStatement());
}

export default hourlyForecasts;
