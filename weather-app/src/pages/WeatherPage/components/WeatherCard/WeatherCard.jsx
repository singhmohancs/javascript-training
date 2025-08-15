import React from 'react';
import { Cloud, Thermometer, Eye, Wind, Droplets, Gauge, Sunrise, Sunset, MapPin } from 'lucide-react';

const WeatherCard = ({ weatherData }) => {
  // Helper functions
  const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);
  // const kelvinToFahrenheit = (kelvin) => Math.round((kelvin - 273.15) * 9/5 + 32);
  const metersToKm = (meters) => (meters / 1000).toFixed(1);
  const mpsToKmh = (mps) => Math.round(mps * 3.6);
  
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain.toLowerCase()) {
      case 'clouds':
        return <Cloud className="w-16 h-16 text-gray-600" />;
      case 'clear':
        return <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">☀️</div>;
      case 'rain':
        return <div className="w-16 h-16 text-blue-500">🌧️</div>;
      case 'snow':
        return <div className="w-16 h-16 text-blue-200">❄️</div>;
      case 'thunderstorm':
        return <div className="w-16 h-16 text-purple-600">⛈️</div>;
      default:
        return <Cloud className="w-16 h-16 text-gray-600" />;
    }
  };

  const getWindDirection = (deg) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(deg / 22.5) % 16];
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl shadow-2xl p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          <div>
            <h2 className="text-xl font-bold">{weatherData.name}</h2>
            <p className="text-blue-100 text-sm">{weatherData.sys.country}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-blue-100 text-sm">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })}
          </p>
          <p className="text-blue-100 text-xs">
            {new Date().toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          {getWeatherIcon(weatherData.weather[0].main)}
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-5xl font-light">{kelvinToCelsius(weatherData.main.temp)}°</span>
              <span className="text-xl text-blue-200">C</span>
            </div>
            <p className="text-blue-100 capitalize text-sm mt-1">
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>
      </div>

      {/* Feels Like & Min/Max */}
      <div className="bg-white/10 rounded-2xl p-4 mb-6 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-blue-200 text-xs uppercase tracking-wide">Feels like</p>
            <p className="text-2xl font-semibold">{kelvinToCelsius(weatherData.main.feels_like)}°</p>
          </div>
          <div className="text-center">
            <p className="text-blue-200 text-xs uppercase tracking-wide">Min / Max</p>
            <p className="text-lg font-semibold">
              {kelvinToCelsius(weatherData.main.temp_min)}° / {kelvinToCelsius(weatherData.main.temp_max)}°
            </p>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-2">
            <Droplets className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200 text-xs uppercase tracking-wide">Humidity</span>
          </div>
          <p className="text-xl font-semibold">{weatherData.main.humidity}%</p>
        </div>

        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-2">
            <Wind className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200 text-xs uppercase tracking-wide">Wind</span>
          </div>
          <p className="text-xl font-semibold">{mpsToKmh(weatherData.wind.speed)} km/h</p>
          <p className="text-xs text-blue-200">{getWindDirection(weatherData.wind.deg)}</p>
        </div>

        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-2">
            <Gauge className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200 text-xs uppercase tracking-wide">Pressure</span>
          </div>
          <p className="text-xl font-semibold">{weatherData.main.pressure}</p>
          <p className="text-xs text-blue-200">hPa</p>
        </div>

        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-2">
            <Eye className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200 text-xs uppercase tracking-wide">Visibility</span>
          </div>
          <p className="text-xl font-semibold">{metersToKm(weatherData.visibility)}</p>
          <p className="text-xs text-blue-200">km</p>
        </div>
      </div>

      {/* Sunrise & Sunset */}
      <div className="bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Sunrise className="w-6 h-6 text-orange-300" />
            <div>
              <p className="text-orange-200 text-xs uppercase tracking-wide">Sunrise</p>
              <p className="text-lg font-semibold">{formatTime(weatherData.sys.sunrise)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Sunset className="w-6 h-6 text-pink-300" />
            <div>
              <p className="text-pink-200 text-xs uppercase tracking-wide">Sunset</p>
              <p className="text-lg font-semibold">{formatTime(weatherData.sys.sunset)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-blue-200 text-xs">
          Cloud coverage: {weatherData.clouds.all}% • 
          Wind gust: {mpsToKmh(weatherData.wind.gust)} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;