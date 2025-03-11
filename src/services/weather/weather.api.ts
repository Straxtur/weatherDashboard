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
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API Error: ", {
          error: (error as any)?.technicalMessage, // mensaje de error editado
          request: { locate },
          stack: error instanceof Error ? error.stack : null,
        })
      }
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
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API Error: ", {
          error: (error as any)?.technicalMessage,
          request: { locate },
          stack: error instanceof Error ? error.stack : null,
        })
      }
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API Error: ", {
          error: (error as any)?.technicalMessage,
          request: { locate },
          stack: error instanceof Error ? error.stack : null,
        })
      }
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
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API Error: ", {
          error: (error as any)?.technicalMessage,
          request: { locate, days },
          stack: error instanceof Error ? error.stack : null,
        })
      }
      throw error
    }
  },
}

export default weather
