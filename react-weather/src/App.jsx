import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import WeatherPage from './pages/WeatherPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
