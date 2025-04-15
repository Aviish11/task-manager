
import React, { useEffect, useState } from 'react';

export default function Weather() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=43.7&longitude=-79.42&current_weather=true')
      .then(response => response.json())
      .then(data => {
        setTemperature(data.current_weather.temperature);
      });
  }, []);

  return (
    <>
      {temperature !== null ? <p>🌤️ {temperature}°C in Toronto</p> : <p>Loading weather...</p>}
    </>
  );
}
