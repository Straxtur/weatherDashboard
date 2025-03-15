import { motion } from "motion/react"
import { useRef, useState } from "react"
import { WeatherUb } from "../../types/api/weather"
import Add from "../icons/Add"
import Modal from "../shared/Modal"
import ModalLocation from "./ModalLocation"
import WeatherCard from "./WeatherCard"

const WeatherList = () => {
  const containerRef = useRef(null)
  const [locate, setLocate] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [weathers, setWeathers] = useState<WeatherUb[] | []>([])

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setLocate("")
    setIsOpen(false)
  }

  const handledAddWeather = (weather: WeatherUb) => {
    if (weathers.find((ub) => ub.id === weather.id)) return

    const newWeathers = [...weathers, weather]
    setWeathers(newWeathers)
  }

  const handledRemoveWeather = (weatherId: number) => {
    const newList = weathers.filter((weather) => weather.id !== weatherId)
    setWeathers(newList)
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
        {weathers?.map((weather, index) => (
          <motion.div
            key={weather.id}
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
          >
            <WeatherCard weather={weather} handledRemoveWeather={handledRemoveWeather} />
          </motion.div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalLocation
          locate={locate}
          isOpen={isOpen}
          setLocate={setLocate}
          handledAddWeather={handledAddWeather}
        />
      </Modal>
    </section>
  )
}

export default WeatherList
