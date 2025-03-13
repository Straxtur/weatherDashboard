export interface Props {
  locate: string
}

export interface MatchesProps extends Props {
  enabled: boolean
}
export interface WeatherProps extends Props {}
export interface WeatherDetailsProps extends Props {
  days: number
}

export interface WeatherUb {
  country: string
  id: number
  lat: number
  lon: number
  name: string
  region: number
  url: string
}
