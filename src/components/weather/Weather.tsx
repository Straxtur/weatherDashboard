import { useEffect, useState } from "react"
import weather from "../../services/weather"
import CaretLeft from "../icons/CaretLeft"
import CaretRight from "../icons/CaretRight"
import WeatherCarousel from "./WeatherCarousel"
import WeatherDetails from "./WeatherDetails"

const Weather = () => {
  const weathers = [
    {
      id: 1,
      country: "España",
      city: "Madrid",
      weather: "/sun/sun.png",
      temperature: "22",
      wind: "11",
      humedad: "0.2",
      sol: "8",
      description: "Se esperan cielos despegados todo el día",
    },
    {
      id: 2,
      country: "España",
      city: "Barcelona",
      weather: "/thunder.png",
      temperature: "52",
      wind: "11",
      humedad: "0.2",
      sol: "8",
      description: "Se esperan nubes parciales en la tarde",
    },
    {
      id: 3,
      country: "España",
      city: "Valencia",
      weather: "/snow.png",
      temperature: "12",
      wind: "11",
      humedad: "0.2",
      sol: "8",
      description: "Se esperan lluvias en la noche",
    },
    {
      id: 4,
      country: "Italia",
      city: "Valencia",
      weather: "/snow.png",
      temperature: "12",
      wind: "11",
      humedad: "0.2",
      sol: "8",
      description: "Se esperan lluvias en la noche",
    },
    {
      id: 5,
      country: "Japon",
      city: "Valencia",
      weather: "/snow.png",
      temperature: "12",
      wind: "11",
      humedad: "0.2",
      sol: "8",
      description: "Se esperan lluvias en la noche",
    },
  ]
  const [weatherSelected, setWeatherSelected] = useState(0)

  useEffect(() => {
    const p = async () => {
      const locate = "Cantabria"
      try {
        const data = await weather.getWeatherAboutCity({ locate })

        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    p()
  }, [])

  useEffect(() => {
    const p = async () => {
      const locate = "murcia"
      try {
        const data = await weather.getMatches({ locate })

        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    p()
  }, [])

  useEffect(() => {
    const p = async () => {
      const locate = "murcia"
      const days = 3
      try {
        const data = await weather.getWeatherDetails({ locate, days })

        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    p()
  }, [])

  // Navegación circular
  const handlePrev = () => {
    setWeatherSelected((prev) => (prev - 1 + weathers.length) % weathers.length)
  }

  const handleNext = () => {
    setWeatherSelected((prev) => (prev + 1) % weathers.length)
  }

  return (
    <section className="glass-card col-span-1 flex flex-col items-center justify-evenly gap-5 rounded-3xl p-2.5">
      <WeatherCarousel
        weathers={weathers}
        weatherSelected={weatherSelected}
        setWeatherSelected={setWeatherSelected}
      />

      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => handlePrev()}
          className="cursor-pointer rounded-full text-2xl text-white transition-transform duration-200 ease-in-out hover:scale-125 hover:bg-white/20 active:scale-90"
        >
          <CaretLeft width="25px" height="25px" />
        </button>

        <div className="glass-card flex h-fit w-fit flex-col items-center justify-between gap-4 rounded-3xl px-2.5 py-3">
          <WeatherDetails />
          <p className="text-xl text-white">{weathers[weatherSelected].description}</p>
        </div>

        <button
          onClick={() => handleNext()}
          className="cursor-pointer rounded-full text-2xl text-white transition-transform duration-200 ease-in-out hover:scale-125 hover:bg-white/20 active:scale-90"
        >
          <CaretRight width="25px" height="25px" />
        </button>
      </div>
    </section>
  )
}

export default Weather
