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
      className={`bg-${weatherType} flex h-full w-full items-center justify-between gap-4 rounded-2xl`}
    >
      <div className="rever flex h-full w-full flex-col-reverse items-start gap-2.5 px-2 sm:flex-row">
        <img width="100px" height="100px" src={renderIcon(weather.info.condition.code)} alt="sol" />
        <div className="flex flex-col">
          <span className="hidden pt-3 text-lg sm:inline">Actualmente</span>
          <span className="pt-3 text-xl">{weather.info.temp_c}ºC</span>
        </div>
      </div>

      <div className="flex h-full w-full flex-col items-end justify-between p-2">
        <button
          onClick={() => handledRemoveWeather(weather.location.name)}
          className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 active:scale-95"
        >
          <Cross width="20" height="20" color="white" />
        </button>
        <div className="flex-col items-end justify-end">
          <span className="line-clamp-1 text-end">{weather.location.name}</span>
          <span className="line-clamp-1 hidden text-end lg:inline">{weather.location.region}</span>
          <span className="line-clamp-1 hidden text-end lg:inline">
            , {weather.location.country}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
