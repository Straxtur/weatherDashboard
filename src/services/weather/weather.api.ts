import { MatchesProps, WeatherDetailsProps, WeatherProps } from "../../types/api/weather"
import { WEATHER_KEY } from "../../utils/constants"
import apiClient from "../apiClient"

const weather = {
  getMatches: async ({ locate }: MatchesProps) => {
    try {
      const response = await apiClient.get(`/search.json`, {
        params: {
          key: WEATHER_KEY,
          q: locate,
        },
      })
      return response.data
    } catch (error) {
      console.error("Error al obtener el clima:", error)
      throw error
    }
  },

  getWeatherAboutCity: async ({ locate }: WeatherProps) => {
    try {
      const response = await apiClient.get(`/forecast.json`, {
        params: {
          key: WEATHER_KEY,
          q: locate,
          aqi: false,
          lang: "es",
        },
      })
      return response.data
    } catch (error) {
      console.error("Error al obtener el clima:", error)
      throw error
    }
  },

  getWeatherDetails: async ({ locate, days }: WeatherDetailsProps) => {
    try {
      const response = await apiClient.get(`/current.json`, {
        params: {
          key: WEATHER_KEY,
          q: locate,
          aqi: false,
          lang: "es",
          days: days,
        },
      })
      return response.data
    } catch (error) {
      console.error("Error al obtener el clima:", error)
      throw error
    }
  },
}

export default weather
