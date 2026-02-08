const DEFAULT_BASE_URL = 'https://api.openweathermap.org/data/2.5'

function getConfig() {
  const apiKey = import.meta.env.VITE_OWM_API_KEY
  const baseUrl = import.meta.env.VITE_OWM_BASE_URL || DEFAULT_BASE_URL

  if (!apiKey) {
    throw new Error('Missing VITE_OWM_API_KEY. Create react-weather/.env (see .env.example).')
  }

  return { apiKey, baseUrl }
}

export async function fetchCurrentWeather(city) {
  const trimmedCity = String(city || '').trim()
  if (!trimmedCity) {
    const err = new Error('Please enter a city name.')
    err.code = 'EMPTY_CITY'
    throw err
  }

  const { apiKey, baseUrl } = getConfig()
  const url = new URL(`${baseUrl}/weather`)
  url.searchParams.set('q', trimmedCity)
  url.searchParams.set('appid', apiKey)
  url.searchParams.set('units', 'metric')

  const response = await fetch(url)
  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data?.message || 'Failed to fetch weather.'
    const err = new Error(message)
    err.code = data?.cod || response.status
    throw err
  }

  return data
}

export function getWeatherIconUrl(iconCode) {
  if (!iconCode) return null
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

export function getThemeFromCondition(main) {
  const condition = String(main || '').toLowerCase()
  if (condition.includes('cloud')) return 'clouds'
  if (condition.includes('rain')) return 'rain'
  if (condition.includes('clear')) return 'clear'
  if (condition.includes('snow')) return 'snow'
  if (condition.includes('thunder')) return 'thunder'
  if (condition.includes('drizzle')) return 'drizzle'
  if (condition.includes('mist') || condition.includes('haze') || condition.includes('fog')) return 'mist'
  return 'default'
}
