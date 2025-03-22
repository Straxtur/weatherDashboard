import { TooltipItem } from "chart.js"
import { HourInfo } from "../../components/WeatherChart/WeatherChart"

interface chartData {
  labels: string[] | undefined
  dayAndMonth: string | undefined
  weather: HourInfo[] | undefined
}

interface chartOptions {
  weather: HourInfo[] | undefined
}

export function chartData({ labels, dayAndMonth, weather }: chartData) {
  return {
    labels: labels,
    datasets: [
      {
        label: dayAndMonth,
        data: weather?.map((d) => d.temp_c),
        borderColor: "rgba(255, 0, 255, 0.8)",
        backgroundColor: "rgba(225, 0, 255, 0.2)",
        tension: 0.2,
        fill: true,
        pointBackgroundColor: "#00ffff",
        pointBorderColor: "#ff00cc",
        pointHoverBackgroundColor: "#ff9cee",
        pointHoverBorderColor: "#fe0098",
        color: "#fff",
      },
    ],
  }
}

export function chartOptions({ weather }: chartOptions) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Gráfico de Líneas",
      },
      filler: {
        propagate: true, // Asegura que el relleno se aplique correctamente
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems: TooltipItem<"line">[]): string | string[] {
            return tooltipItems[0].label
          },
          label: function (context: TooltipItem<"line">): string | string[] {
            let label = context.dataset.label || ""
            if (label) {
              label += ": "
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " °C"
            }

            const index = context.dataIndex
            const humidity = weather?.[index].humidity
            const wind_kph = weather?.[index].wind_kph

            // Información adicional
            return [label, "Vientos de: " + wind_kph + " kph", "Humedad: " + humidity + "%"]
          },
          footer: function () {
            return "Datos históricos disponibles"
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 10,
        titleFont: {
          size: 14,
          weight: 700, // Use a number or one of the allowed string values like "bold"
        },
        bodyFont: {
          size: 13,
        },
        footerFont: {
          style: "italic" as const, // Ensure the value is a valid literal type
          weight: 400, // Add a valid weight property for footerFont
        },
      },
      legend: {
        labels: {
          color: "#ffffff", // Color del texto en la leyenda
        },
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Horas",
          color: "#fff",
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#fff", // Color de los valores del eje Y (0, 5, 10, etc.)
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Color de las líneas de cuadrícula Y
        },
      },
      y: {
        title: {
          display: true,
          text: "Grados ºC",
          color: "#fff",
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#fff", // Color de los valores del eje Y (0, 5, 10, etc.)
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Color de las líneas de cuadrícula Y
        },
        beginAtZero: true, // Asegura que el eje Y comience en cero
      },
    },
  }
}
