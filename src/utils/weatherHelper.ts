import weather from "../mocks/weather"

export function renderIcon(code: number) {
  const icon = weather.find((w) => w.code === code)

  return icon?.icon
}

export function classifyWeather(weather: string) {
  const weatherTypes = {
    sunny: ["Soleado"],
    rainy: [
      "Posible lluvia irregular",
      "Llovizna ligera irregular",
      "Llovizna ligera",
      "Llovizna helada",
      "Llovizna helada fuerte",
      "Lluvia ligera irregular",
      "Lluvia ligera",
      "Lluvia moderada a veces",
      "Lluvia moderada",
      "Lluvia fuerte a veces",
      "Lluvia fuerte",
      "Lluvia helada ligera",
      "Lluvia helada moderada o fuerte",
      "Aguanieve ligera",
      "Aguanieve moderada o fuerte",
      "Chubasco de lluvia ligera",
      "Chubasco de lluvia moderada o fuerte",
      "Chubasco torrencial",
      "Chubascos de aguanieve ligera",
      "Chubascos de aguanieve moderada o fuerte",
      "Chubascos de nieve ligera",
      "Chubascos de nieve moderada o fuerte",
      "Chubascos ligeros de granizo",
      "Chubascos moderados o fuertes de granizo",
      "Lluvia ligera con tormenta",
      "Lluvia fuerte con tormenta",
      "Nieve ligera con tormenta",
      "Nieve moderada o fuerte con tormenta",
    ],
    cloudy: ["Parcialmente nublado", "Nublado", "Cubierto", "Cielo cubierto", "Neblina"],
    thunder: [
      "Posibles tormentas eléctricas",
      "Lluvia ligera con tormenta",
      "Lluvia fuerte con tormenta",
      "Nieve ligera con tormenta",
      "Nieve moderada o fuerte con tormenta",
    ],
    snowy: [
      "Nieve ligera irregular",
      "Nieve ligera",
      "Nieve moderada irregular",
      "Nieve moderada",
      "Nieve fuerte irregular",
      "Nieve fuerte",
      "Granizo pequeño",
      "Aguanieve ligera",
      "Aguanieve moderada o fuerte",
      "Nieve ligera con tormenta",
      "Nieve moderada o fuerte con tormenta",
    ],
  }

  // Comprobamos a qué tipo de clima corresponde el texto en el objeto de datos
  for (const [type, descriptions] of Object.entries(weatherTypes)) {
    if (descriptions.some((description) => weather.includes(description))) {
      return type
    }
  }
  return "cloudy"
}

export function formatearFecha(fechaISO: string) {
  const [year, month, day] = fechaISO.split("-")
  return `${day}-${month}-${year}`
}
