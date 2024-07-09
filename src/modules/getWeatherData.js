const getData = (location) => {
  const KEY = process.env.API_KEY;
  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}`
      );
      const data = await response.json();
      console.log(data);
    } catch {
      console.log("Something went wrong");
    }
  };

  return getWeather();
};

export default getData;
