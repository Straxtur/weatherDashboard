import { useState } from "react"
import Weather from "./components/weather/Weather"
import WeatherChart from "./components/WeatherChart/WeatherChart"
import WeatherList from "./components/WeatherList/WeatherList"
import useLocalStorage from "./hooks/common/useLocalStorage"
import Layout from "./Layouts/Layout"
import { useWeatherDetails } from "./services/weather/weather.query"
import { WeatherUb } from "./types/api/weather"

const App = () => {
  const [weathers, setWeathers] = useLocalStorage<WeatherUb[]>("weathersUb", [])
  const [selectedWeather, setSelectedWeather] = useState<number | undefined>()

  const { error, data, isLoading } = useWeatherDetails(selectedWeather)

  if (error) {
    console.error(error)
  }

  const handledSelectWeather = (name: string) => {
    const weatherId = weathers.find((w) => w.name === name)
    setSelectedWeather(weatherId?.id)
  }

  return (
    <Layout>
      <Weather weathers={data} />

      <WeatherList
        weathers={weathers}
        setWeathers={setWeathers}
        handledSelectWeather={handledSelectWeather}
      />

      <WeatherChart />
    </Layout>
  )
}

export default App
