import { WeatherUb } from "../../types/api/weather"
import Cross from "../icons/Cross"

type weather = "sunny" | "rainy" | "cloudy" | "thunder" | "snowy"

interface Props {
  weather: WeatherUb
  handledRemoveWeather: (weatherId: number) => void
}

const WeatherCard = ({ weather, handledRemoveWeather }: Props) => {
  return (
    <div className={`bg-sunny flex h-full w-full items-center justify-between rounded-2xl`}>
      <div className="flex h-full w-full items-start gap-2.5">
        <img width="100px" height="100px" src="sun/sun.png" alt="sol" />
        <span className="pt-3 text-xl">22ºC</span>
      </div>

      <div className="flex h-full w-full flex-col items-end justify-between p-2">
        <button
          onClick={() => handledRemoveWeather(weather.id)}
          className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 active:scale-95"
        >
          <Cross width="20" height="20" color="white" />
        </button>
        <span>
          {weather.name}, {weather.region}, {weather.country}
        </span>
      </div>
    </div>
  )
}

export default WeatherCard
