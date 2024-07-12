import dailyWeatherForecast from "./threeDayForecast";
import currentTimeAndTemperature from "./currentTimeAndTemperature";
import currentMiscItems from "./currentMiscWeatherItems";
import hourlyForecastItems from "./hourlyForecasts";

async function APIconnection(location) {
  const KEY = process.env.API_KEY;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,
      { mode: "cors" }
    );
    let json = await response.json();
    // View data structure
    /* console.log(json); */

    currentTimeAndTemperature(json);
    dailyWeatherForecast(json);
    currentMiscItems(json);
    hourlyForecastItems(json);
  } catch (error) {
    console.log(error.message);
  }
}

export default APIconnection;
