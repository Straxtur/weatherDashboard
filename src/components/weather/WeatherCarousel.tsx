import { motion } from "motion/react"
import { useEffect, useState } from "react"

type Weather = {
  id: number
  country: string
  city: string
  weather: string
  temperature: string
  wind: string
  humedad: string
  sol: string
  description: string
}

interface Props {
  weathers: Weather[]
  weatherSelected: number
  setWeatherSelected: React.Dispatch<React.SetStateAction<number>>
}

const WeatherCarousel: React.FC<Props> = ({ weathers, weatherSelected, setWeatherSelected }) => {
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      // Ajusta el número de tarjetas visibles según el tamaño de la ventana
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    // Ejecutar al montar para definir el valor inicial
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const half = Math.floor(visibleCount / 2)
  // Calcula un subconjunto de elementos alrededor del seleccionado de forma circular
  const displayedWeathers = []
  for (let offset = -half; offset <= half; offset++) {
    const index = (weatherSelected + offset + weathers.length) % weathers.length
    displayedWeathers.push({ weather: weathers[index], offset })
  }

  // Función que retorna las variantes de animación según la posición (offset) respecto al centro
  const getCardVariant = (offset: number) => {
    const absOffset = Math.abs(offset)
    let scale = 1,
      y = 0,
      opacity = 1
    if (absOffset === 0) {
      scale = 1.1
      y = -20
      opacity = 1
    } else if (absOffset === 1) {
      scale = 1
      y = 0
      opacity = 0.9
    } else {
      scale = 0.9
      y = 0
      opacity = 0.7
    }
    return { scale, y, opacity }
  }

  return (
    <div className="flex h-fit w-full items-end justify-center space-x-5 overflow-x-hidden p-5">
      {displayedWeathers.map(({ weather, offset }) => (
        <motion.div
          key={weather.id}
          className="flex-shrink-0 cursor-pointer"
          onClick={() => {
            if (offset !== 0) {
              setWeatherSelected((prev) => (prev + offset + weathers.length) % weathers.length)
            }
          }}
          animate={getCardVariant(offset)}
          transition={{ duration: 0.3 }}
        >
          <div className="glass-card flex h-[390px] flex-col items-center justify-center gap-4 rounded-3xl px-2">
            <h2 className="text-4xl text-white">{weather.city}</h2>
            <h3 className="text-3xl text-white">{weather.country}</h3>
            <img width="189px" height="186px" src={weather.weather} alt="sol" />
            <span className="text-3xl text-white">{weather.temperature}ºC</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default WeatherCarousel
