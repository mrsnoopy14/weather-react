# React Weather Forecast (ES6)

A simple weather forecast app built with **React + Vite** using modern **ES6** features.

## Setup

1) Install dependencies:

```bash
cd react-weather
npm install
```

2) Create `.env` (copy from `.env.example`) and set your OpenWeather API key:

```bash
copy .env.example .env
```

Edit `.env` and set:

- `VITE_OWM_API_KEY=...`

3) Run dev server:

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Pages

- `/` Landing page (Get Started)
- `/weather` Weather search page

## Notes

- Uses `units=metric`.
- Handles empty city input + API errors.
