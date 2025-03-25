import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { useCurrentWeather } from "../../context/WeatherContext"
import { chartData, chartOptions } from "../../utils/charts/weather"
import { monthName } from "../../utils/format"

export interface HourInfo {
  humidity: number
  temp_c: number
  time: string
  wind_kph: number
}

function getInfoByHour(hours: HourInfo[]) {
  if (hours?.length < 1) return

  return hours?.map((hour) => {
    return {
      humidity: hour.humidity,
      temp_c: hour.temp_c,
      time: hour.time,
      wind_kph: hour.wind_kph,
    }
  })
}

function getDayAndMonth(date: string) {
  if (!date) return

  const dueDate = date ? new Date(date) : null
  const dayAndMonth = dueDate ? `${dueDate.getDate()} de ${monthName(dueDate.getMonth() + 1)}` : ""

  return dayAndMonth
}

const WeatherChart = () => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    Filler,
    PointElement
  )

  const { currentWeather } = useCurrentWeather()
  const hour = currentWeather || []
  const dayAndMonth = getDayAndMonth(currentWeather?.date ?? "")
  const weather = getInfoByHour(hour.hour)
  const labels = weather?.map((hour) => hour.time.split(" ")[1]) // Extrae la hora "HH:MM"

  const data = chartData({ labels, weather, dayAndMonth })
  const options = chartOptions({ weather })

  return (
    <section className="glass-card h-[400px] w-[400px] rounded-3xl p-2.5 sm:w-full md:col-span-2">
      <Line data={data} options={options} />
    </section>
  )
}

export default WeatherChart
