import axios from "axios"
import { AxiosErrorMap, BASE_URL } from "../utils/constants"

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    //error de axios
    if (axios.isAxiosError(error) && error.response) {
      const { data, status } = error.response

      const errorDetail = AxiosErrorMap[status] || {
        code: "UNKNOWN_ERROR",
        userMessage: "Error inesperado",
        technicalMessage: data || error.message,
      }

      errorDetail.technicalMessage = data || error.message
      return Promise.reject(errorDetail)
    }

    const networkError = {
      code: "NETWORK_ERROR",
      userMessage: "Error de conexión. Verifica tu conexión a internet.",
      technicalMessage: (error as Error).message,
    }
    return Promise.reject(networkError)
  }
)

export default apiClient
