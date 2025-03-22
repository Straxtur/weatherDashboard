import { useEffect, useState } from "react"
import { useCurrentWeather } from "../../context/WeatherContext"
import { info, WeatherUb } from "../../types/api/weather"
import CaretLeft from "../icons/CaretLeft"
import CaretRight from "../icons/CaretRight"
import WeatherCarousel from "./WeatherCarousel"
import WeatherDetails from "./WeatherDetails"

interface forecast {
  forecastday: {
    date: string
    day: info
    hour: {
      condition: {
        text: string
        code: number
      }
      temp_c: number
      wind_kph: number
      humidity: number
      time: string
    }[]
  }[]
}

export interface WeatherProps {
  weathers: {
    current: info
    forecast: forecast
    location: WeatherUb
  }
}

const Weather = ({ weathers }: WeatherProps) => {
  const [weatherSelected, setWeatherSelected] = useState(0)
  const { setCurrentWeather } = useCurrentWeather()

  useEffect(() => {
    setCurrentWeather(weathers?.forecast.forecastday[weatherSelected])
    /*   setCurrentWeatherSelected(weathers[weatherSelected]) */
  }, [weatherSelected, weathers])

  // Navegación circular
  const handlePrev = () => {
    setWeatherSelected(
      (prev) =>
        (prev - 1 + weathers.forecast.forecastday.length) % weathers.forecast.forecastday.length
    )
  }

  const handleNext = () => {
    setWeatherSelected((prev) => (prev + 1) % weathers.forecast.forecastday.length)
  }

  return (
    <section className="glass-card col-span-1 flex flex-col items-center justify-evenly gap-5 rounded-3xl p-2.5">
      {weathers && (
        <>
          <WeatherCarousel
            weathers={weathers}
            weatherSelected={weatherSelected}
            setWeatherSelected={setWeatherSelected}
          />

          <div className="flex w-full items-center justify-between">
            <button
              onClick={() => handlePrev()}
              className="mx-2 cursor-pointer rounded-full text-2xl text-white transition-transform duration-200 ease-in-out hover:scale-125 hover:bg-white/20 active:scale-90"
            >
              <CaretLeft width="25px" height="25px" />
            </button>

            <div className="glass-card flex h-fit w-fit flex-col items-center justify-between gap-4 rounded-3xl px-2.5 py-3">
              <WeatherDetails details={weathers.forecast.forecastday[weatherSelected].day} />
              <p className="text-center text-xl text-white">
                {weathers.forecast.forecastday[weatherSelected].day.condition.text}
              </p>
            </div>

            <button
              onClick={() => handleNext()}
              className="mx-2 cursor-pointer rounded-full text-2xl text-white transition-transform duration-200 ease-in-out hover:scale-125 hover:bg-white/20 active:scale-90"
            >
              <CaretRight width="25px" height="25px" />
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Weather
