import { useQuery } from "@tanstack/react-query"
import { MatchesProps } from "../../types/api/weather"
import weather from "./weather.api"

export const useMatchCity = ({ locate, enabled }: MatchesProps) => {
  return useQuery({
    queryKey: ["weather", locate],
    queryFn: () => weather.getMatches(locate),
    enabled: !!locate && enabled,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useWeather = (location: MatchesProps) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => weather.getWeatherAboutCity(location),
    enabled: !!location,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
