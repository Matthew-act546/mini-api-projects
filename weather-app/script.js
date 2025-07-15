fetch("https://api.open-meteo.com/v1/forecast?latitude=14.3903&longitude=121.0475&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto")
  .then(res => res.json())
  .then(data => {
        const weatherCodes = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      51: "Drizzle",
      61: "Rain",
      71: "Snow",
      95: "Thunderstorm"
    };

    const temps = data.hourly.temperature_2m;
    const maxTemp = data.daily.temperature_2m_max[0];
    const minTemp = data.daily.temperature_2m_min[0];

    const now = new Date();
    const currentHour = now.getHours();
    const currentTemp = temps[currentHour];
    const formattedHour = now.toTimeString().slice(0, 5);
    const formattedDate = now.toDateString().split(" "); 

    const code = data.hourly.weathercode[currentHour];
    document.getElementById("weather-description").innerHTML = weatherCodes[code] || "Unknown";
  
    document.getElementById("temperature").innerHTML = `${currentTemp}°`;
    document.getElementById("range").innerHTML = `${maxTemp}°/${minTemp}°`;
    document.getElementById("hour").innerHTML = formattedHour;
    document.getElementById("date").innerHTML = `${formattedDate[0].toUpperCase()} ${formattedDate[1]}-${formattedDate[2]}`;
    
  })
  .catch(err => console.error("Error fetching weather:", err));
