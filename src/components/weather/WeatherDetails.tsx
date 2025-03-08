import Drop from "../icons/Drop"
import Sun from "../icons/Sun"
import Wind from "../icons/Wind"
import IconWithText from "../shared/IconWithText"

export default function WeatherDetails() {
  return (
    <div className="flex h-fit w-full items-center justify-center gap-2.5">
      <IconWithText>
        <Wind width="20" height="20" />
        <span className="text-sm text-white">11km/h</span>
      </IconWithText>

      <IconWithText>
        <Drop width="20" height="20" />
        <span className="text-sm text-white">0.2%</span>
      </IconWithText>

      <IconWithText>
        <Sun width="20" height="20" />
        <span className="text-sm text-white">8hs</span>
      </IconWithText>
    </div>
  )
}
