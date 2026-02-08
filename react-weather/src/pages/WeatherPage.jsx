import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
import { fetchCurrentWeather, getThemeFromCondition } from '../api/openWeather.js'

export default function WeatherPage() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const theme = useMemo(() => getThemeFromCondition(weather?.weather?.[0]?.main), [weather])

  async function handleSearch() {
    setError('')
    setStatus('loading')

    try {
      const data = await fetchCurrentWeather(city)
      setWeather(data)
      setStatus('success')
    } catch (err) {
      setWeather(null)
      setStatus('error')
      setError(err?.message || 'Something went wrong.')
    }
  }

  return (
    <div className={`app theme--${theme}`}>
      <div className="container">
        <header className="header header--row">
          <div>
            <h1 className="title">Weather Forecast</h1>
            <p className="subtitle">Search any city</p>
          </div>

          <Link className="link" to="/">
            Back
          </Link>
        </header>

        <SearchBar value={city} onChange={setCity} onSubmit={handleSearch} disabled={status === 'loading'} />

        {status === 'loading' ? <div className="status">Loading…</div> : null}
        {status === 'error' ? <div className="status status--error">{error}</div> : null}

        <WeatherCard weather={weather} />

        <footer className="footer">
          <small>
            Tip: add your API key in <code>.env</code> as <code>VITE_OWM_API_KEY</code>.
          </small>
        </footer>
      </div>
    </div>
  )
}
