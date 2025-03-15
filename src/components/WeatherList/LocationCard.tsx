import { motion } from "motion/react"
import { WeatherUb } from "../../types/api/weather"

interface LocationProps {
  location: WeatherUb[]
  handledAddWeather: (weather: WeatherUb) => void
}

const LocationCard = ({ location, handledAddWeather }: LocationProps) => {
  return (
    <div className="flex h-fit w-full flex-wrap items-center justify-center gap-4">
      {location.map((ub: WeatherUb) => (
        <motion.button
          onClick={() => handledAddWeather(ub)}
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex h-[110px] min-h-fit w-[213px] cursor-pointer flex-col items-start justify-start gap-2 rounded-2xl bg-white/80 p-3"
          key={ub.id}
        >
          <span>{ub.country.toUpperCase()}</span>
          <p className="text-start">
            {ub.country}, {ub.region}, {ub.name}
          </p>
        </motion.button>
      ))}
    </div>
  )
}

export default LocationCard
