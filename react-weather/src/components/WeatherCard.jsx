import React from 'react'
import { getWeatherIconUrl } from '../api/openWeather.js'

function formatDateTime(date) {
  const d = date instanceof Date ? date : new Date(date)
  const day = d.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const time = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
  return { day, time }
}

export default function WeatherCard({ weather }) {
  if (!weather) return null

  const { day, time } = formatDateTime(new Date())
  const iconUrl = getWeatherIconUrl(weather?.weather?.[0]?.icon)

  return (
    <div className="card">
      <div className="card__header">
        <div>
          <div className="card__city">
            {weather.name}, {weather.sys?.country}
          </div>
          <div className="card__date">{day}</div>
          <div className="card__updated">Updated at {time}</div>
        </div>
        {iconUrl ? (
          <img className="card__icon" src={iconUrl} alt={weather?.weather?.[0]?.description || 'weather icon'} />
        ) : null}
      </div>

      <div className="card__temp">{Math.round(weather.main?.temp)}°C</div>
      <div className="card__condition">
        {weather?.weather?.[0]?.main}
        <span className="card__desc">{weather?.weather?.[0]?.description}</span>
      </div>

      <div className="card__minmax">
        {Math.floor(weather.main?.temp_min)}°C (min) / {Math.ceil(weather.main?.temp_max)}°C (max)
      </div>

      <div className="card__details">
        <div>Feels like: {Math.round(weather.main?.feels_like)}°C</div>
        <div>Humidity: {weather.main?.humidity}%</div>
        <div>Pressure: {weather.main?.pressure} mb</div>
        <div>Wind: {weather.wind?.speed} m/s</div>
      </div>
    </div>
  )
}
