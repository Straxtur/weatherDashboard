import { useQuery } from "@tanstack/react-query"
import { MatchesProps } from "../../types/api/weather"
import weather from "./weather.api"

export const useMatchCity = (location: MatchesProps) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => weather.getMatches(location),
    enabled: !!location,
  })
}

export const useWeather = (location: MatchesProps) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => weather.getWeatherAboutCity(location),
    enabled: !!location,
  })
}
