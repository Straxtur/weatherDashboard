export interface Props {
  locate: string
}

export interface MatchesProps extends Props {}
export interface WeatherProps extends Props {}
export interface WeatherDetailsProps extends Props {
  days: number
}
