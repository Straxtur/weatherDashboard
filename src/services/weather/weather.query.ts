import { useQueries, useQuery } from "@tanstack/react-query"
import { MatchesProps, WeatherUb } from "../../types/api/weather"
import weather from "./weather.api"

export const useMatchCity = ({ locate, enabled }: MatchesProps) => {
  return useQuery({
    queryKey: ["location", locate],
    queryFn: () => weather.getMatches(locate),
    enabled: !!locate && enabled,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useWeather = (locations: WeatherUb[]) => {
  const weathers = useQueries({
    queries: locations.map((location) => ({
      queryKey: ["weather", location.id],
      queryFn: () =>
        weather.getWeatherAboutCity({ locate: location.name }).then((data) => ({
          location: data.location,
          info: data.current,
        })),
      enabled: locations.length > 0,
      retry: 1,
      refetchOnWindowFocus: false,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isLoading: results.some((result) => result.isLoading),
        isError: results.some((result) => result.isError),
      }
    },
  })

  return weathers
}
