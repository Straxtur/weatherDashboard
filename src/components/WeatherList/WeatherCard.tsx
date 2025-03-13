import Cross from "../icons/Cross"

type weather = "sunny" | "rainy" | "cloudy" | "thunder" | "snowy"

interface Props {
  weather: weather
}

const WeatherCard = ({ weather }: Props) => {
  return (
    <div className={`bg-${weather} flex h-fit w-full items-center justify-between rounded-2xl`}>
      <div className="flex h-full w-fit items-end gap-2.5">
        <img width="100px" height="100px" src="sun/sun.png" alt="sol" />
        <div className="flex h-full w-fit flex-col items-start justify-evenly gap-4">
          <span>22ºC</span>
          <span className="hidden lg:inline">Soleado toda la mañana</span>
        </div>
      </div>

      <div className="flex h-full w-fit flex-col items-end justify-between p-2">
        <button className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 active:scale-95">
          <Cross width="20" height="20" color="white" />
        </button>
        <span>Murcia, España</span>
      </div>
    </div>
  )
}

export default WeatherCard
