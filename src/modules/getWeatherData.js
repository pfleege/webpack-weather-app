const getWeatherData = (location) => {
  const KEY = process.env.API_KEY;
  const div = document.createElement("div");

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,
        { mode: "cors" }
      );
      let json = await response.json();
      // View data structure
      console.log(json);
      // Create and return div
      let name = json.location.name;
      div.textContent = name;
      /* return div; */
    } catch (error) {
      console.log(error.message);
    }
  };
  getWeather();
  return div;
};

export default getWeatherData;
