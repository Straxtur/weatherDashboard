import { useMatchCity } from "../../services/weather/weather.query"

const WeatherList = () => {
  const { data, error, isLoading } = useMatchCity({ locate: "Murcia" })

  if (error) {
    console.error("a ocurrido un error:", error)
  }

  if (isLoading) console.log("cargando")

  if (data) console.log(data)

  return <section className="glass-card col-span-1 rounded-3xl p-2.5">option 2</section>
}

export default WeatherList
