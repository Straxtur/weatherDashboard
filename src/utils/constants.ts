export const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
export const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const AxiosErrorMap: Record<
  number,
  { code: string; userMessage: string; technicalMessage: string }
> = {
  400: {
    code: "BAD_REQUEST",
    userMessage: "Ubicación no válida",
    technicalMessage: "La solicitud contiene datos incorrectos.",
  },
  401: {
    code: "INVALID_API_KEY",
    userMessage: "Error de autenticación",
    technicalMessage: "API key inválida o expirada.",
  },
  404: {
    code: "CITY_NOT_FOUND",
    userMessage: "Ciudad no encontrada",
    technicalMessage: "La ubicación no existe.",
  },
  500: {
    code: "SERVER_ERROR",
    userMessage: "Error en el servidor",
    technicalMessage: "Error interno del servidor.",
  },
}
