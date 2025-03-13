import { motion } from "motion/react"
import { useRef, useState } from "react"
import { useMatchCity } from "../../services/weather/weather.query"
import { WeatherUb } from "../../types/api/weather"
import Add from "../icons/Add"
import Modal from "../shared/Modal"
import FormLocation from "./FormLocation"
import WeatherCard from "./WeatherCard"

const WeatherList = () => {
  const containerRef = useRef(null)
  const [locate, setLocate] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const { data, error, isLoading } = useMatchCity({ locate, enabled: isOpen })

  if (error) {
    console.error(error)
  }

  const weatherData = Array(4).fill({
    weather: "sunny",
    city: "Murcia, España",
    temp: "22°C",
    desc: "Soleado toda la mañana",
  })

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setLocate("")
    setIsOpen(false)
  }

  return (
    <section className="glass-card col-span-1 flex h-full flex-col items-start justify-start gap-4 p-3">
      <button
        onClick={() => handleOpenModal()}
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

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold text-white">Busca una nueva ubicación 🔎</h2>
        <div className="my-2 h-fit">
          <FormLocation setLocate={setLocate} />
        </div>
        {isLoading && <h1 className="text-white">Cargando...</h1>}
        {!isLoading && !error && data && (
          <div className="flex h-fit w-full flex-wrap items-center justify-center gap-4">
            {data.map((ub: WeatherUb) => (
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex h-[110px] min-h-fit w-[213px] cursor-pointer flex-wrap items-start justify-start gap-2 rounded-2xl bg-white/90 p-3"
                key={ub.id}
              >
                <span>{ub.country} | </span>
                <span>{ub.name} |</span>
                <span>{ub.region}</span>
              </motion.div>
            ))}
          </div>
        )}
        {!isLoading && !error && data?.length < 1 && (
          <h2 className="text-center text-white">No han habido resultados para su búsqueda 😢</h2>
        )}
      </Modal>
    </section>
  )
}

export default WeatherList
