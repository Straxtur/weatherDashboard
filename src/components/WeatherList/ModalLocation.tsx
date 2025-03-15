import { useMatchCity } from "../../services/weather/weather.query"
import { WeatherUb } from "../../types/api/weather"
import FormLocation from "./FormLocation"
import LocationCard from "./LocationCard"

interface ModalLocationProps {
  locate: string
  isOpen: boolean
  setLocate: React.Dispatch<React.SetStateAction<string>>
  handledAddWeather: (weather: WeatherUb) => void
}

const ModalLocation: React.FC<ModalLocationProps> = ({
  locate,
  isOpen,
  setLocate,
  handledAddWeather,
}) => {
  const { data, error, isLoading } = useMatchCity({ locate, enabled: isOpen })

  if (error) {
    console.error(error)
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-white">Busca una nueva ubicación 🔎</h2>
      <div className="my-2 h-fit">
        <FormLocation setLocate={setLocate} />
      </div>
      {isLoading && <h1 className="text-white">Cargando...</h1>}
      {!isLoading && !error && data && (
        <LocationCard handledAddWeather={handledAddWeather} location={data} />
      )}
      {!isLoading && !error && data?.length < 1 && (
        <h2 className="text-center text-white">No han habido resultados para su búsqueda 😢</h2>
      )}
    </>
  )
}

export default ModalLocation
