import { weatherDetails } from "../../types/api/weather"
import { classifyWeather, renderIcon } from "../../utils/weatherHelper"
import Cross from "../icons/Cross"

import { useMemo } from "react"

interface Props {
  weather: weatherDetails
  handledRemoveWeather: (name: string) => void
}

const WeatherCard = ({ weather, handledRemoveWeather }: Props) => {
  const weatherType = useMemo(
    () => classifyWeather(weather.info.condition.text),
    [weather.info.condition.text]
  )

  return (
    <div
      className={`bg-${weatherType} flex h-full w-full items-center justify-between rounded-2xl`}
    >
      <div className="flex h-full w-full items-start gap-2.5">
        <img width="100px" height="100px" src={renderIcon(weather.info.condition.code)} alt="sol" />
        <span className="pt-3 text-xl">{weather.info.temp_c}ºC</span>
      </div>

      <div className="flex h-full w-full flex-col items-end justify-between p-2">
        <button
          onClick={() => handledRemoveWeather(weather.location.name)}
          className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 active:scale-95"
        >
          <Cross width="20" height="20" color="white" />
        </button>
        <span>
          {weather.location.name}, {weather.location.region}, {weather.location.country}
        </span>
      </div>
    </div>
  )
}

export default WeatherCard
