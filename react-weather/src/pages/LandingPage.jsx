import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="app theme--default">
      <div className="container">
        <header className="header">
          <h1 className="title">Weather Forecast</h1>
          <p className="subtitle">React + ES6 (OpenWeather API)</p>
        </header>

        <div className="landing">
          <div className="landing__card">
            <div className="landing__headline">Check any weather</div>
            <div className="landing__copy">
              Search for a city and see temperature, humidity, wind, and more.
            </div>

            <Link className="btn" to="/weather">
              Get Started
            </Link>

            <div className="landing__hint">
              Set your API key in <code>.env</code> as <code>VITE_OWM_API_KEY</code>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
