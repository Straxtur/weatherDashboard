import { info } from "../../types/api/weather"
import Sun from "../icons/Sun"
import Wind from "../icons/Wind"
import IconWithText from "../shared/IconWithText"

interface Props {
  details: info
}

export default function WeatherDetails({ details }: Props) {
  return (
    <div className="flex h-fit w-full flex-wrap items-center justify-center gap-2.5 text-white">
      <IconWithText>
        <Wind width="20" height="20" />
        <span className="text-sm text-white">
          {Math.round((details.maxwind_kph - 4) * 100) / 100}km/h
        </span>
      </IconWithText>

      <IconWithText>
        <Sun width="20" height="20" />
        <span>Max</span>
        <span className="text-sm text-white">{details.maxtemp_c}ºC</span>
      </IconWithText>

      <IconWithText>
        <Sun width="20" height="20" />
        <span>Min</span>
        <span className="text-sm text-white">{details.mintemp_c}ºC</span>
      </IconWithText>
    </div>
  )
}
