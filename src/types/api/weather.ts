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

export interface weatherDetails {
  location: WeatherUb
  info: {
    condition: {
      text: string
      code: number
    }
    temp_c: number
    wind_kph: number
    humidity: number
  }
}
