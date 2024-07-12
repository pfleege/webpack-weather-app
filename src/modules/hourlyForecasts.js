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
    let icon = document.createElement("img");
    let temp = document.createElement("div");

    dayContainer.className = `hour${[i]}Container`;
    hour.className = `hour${[i]}`;

    hour.textContent = json.forecast.forecastday[0].hour[i].time;
    icon.className = `hourIcon`;
    icon.src = json.forecast.forecastday[0].hour[i].condition.icon;
    temp.className = `hour${[i]}Temp`;
    temp.textContent = `${json.forecast.forecastday[0].hour[i].temp_c}°C`;

    dayContainer.appendChild(hour);
    dayContainer.appendChild(icon);
    dayContainer.appendChild(temp);
    hourlyForecastContent.appendChild(dayContainer);
  }

  hourlyForecastContainer.appendChild(hourlyForecastContent);
  container.appendChild(hourlyForecastContainer);
}

export default hourlyForecasts;
