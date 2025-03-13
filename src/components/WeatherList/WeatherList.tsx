import { motion } from "motion/react"
import { useRef } from "react"
import Add from "../icons/Add"
import WeatherCard from "./WeatherCard"

const WeatherList = () => {
  /*   const { data, error, isLoading } = useWeather({ locate: "Murcia" })

  if (error) {
    console.error("a ocurrido un error:", error)
  }

  if (isLoading) console.log("cargando")

  if (data) console.log(data) */

  const containerRef = useRef(null)

  const weatherData = Array(4).fill({
    weather: "sunny",
    city: "Murcia, España",
    temp: "22°C",
    desc: "Soleado toda la mañana",
  })

  return (
    <section className="glass-card col-span-1 flex h-full flex-col items-start justify-start gap-4 p-3">
      <button
        onClick={() => {}}
        className="flex h-fit w-fit cursor-pointer items-center justify-start gap-2 p-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
      >
        <Add width="30px" height="30px" />
        <span className="text-white">Añadir nueva ubicación</span>
      </button>
      <div
        ref={containerRef}
        className="flex h-[300px] max-h-[700px] w-full flex-col items-start justify-start gap-4 overflow-y-scroll rounded-3xl p-2.5 text-white md:h-full"
      >
        {weatherData.map((data, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
          >
            <WeatherCard weather={data.weather} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WeatherList
