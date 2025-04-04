import { WeatherProps } from "../../types/api/weather"
import { CustomError } from "../../types/errors/errors"
import { WEATHER_KEY } from "../../utils/constants"
import apiClient from "../apiClient"

const weather = {
  getMatches: async (locate: string) => {
    try {
      const response = await apiClient.get(`/search.json`, {
        params: {
          key: WEATHER_KEY,
          lang: "es",
          q: locate,
        },
      })
      return response.data
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API Error: ", {
          error: (error as CustomError)?.technicalMessage, // mensaje de error editado
          request: { locate },
          stack: error instanceof Error ? error.stack : null,
        })
      }
      throw error
    }
  },

  getWeatherAboutCity: async ({ locate }: WeatherProps) => {
    try {
      const response = await apiClient.get(`/current.json`, {
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
          error: (error as CustomError)?.technicalMessage,
          request: { locate },
          stack: error instanceof Error ? error.stack : null,
        })
      }
      throw error
    }
  },

  getWeatherDetails: async (id: number) => {
    try {
      const response = await apiClient.get(`/forecast.json`, {
        params: {
          key: WEATHER_KEY,
          q: `id:${id}`,
          aqi: false,
          lang: "es",
          days: 4,
        },
      })
      return response.data
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API Error: ", {
          error: (error as CustomError)?.technicalMessage,
          request: { id },
          stack: error instanceof Error ? error.stack : null,
        })
      }
      throw error
    }
  },
}

export default weather
