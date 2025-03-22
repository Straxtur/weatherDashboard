import type React from "react"
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

export interface CurrentWeatherSelectedType {
  currentWeather: any | undefined
  setCurrentWeather: Dispatch<SetStateAction<any | undefined>>
}
interface CurrentWeatherProviderProps {
  children: ReactNode
}

export const CurrentWeatherSelectedContext = createContext<CurrentWeatherSelectedType | undefined>(
  undefined
)

export const CurrentWeatherProvider: React.FC<CurrentWeatherProviderProps> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<any | undefined>(undefined)

  return (
    <CurrentWeatherSelectedContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </CurrentWeatherSelectedContext.Provider>
  )
}

export const useCurrentWeather = (): CurrentWeatherSelectedType => {
  const context = useContext(CurrentWeatherSelectedContext)

  if (!context) {
    throw new Error("useCurrentWeather must be used within a CurrentWeatherProvider")
  }

  const { currentWeather, setCurrentWeather } = context
  return { currentWeather, setCurrentWeather }
}
